'use strict';

angular.module('myApp.controllers', [])
  .controller('IndexCtrl', function ($scope, $http, toaster) {

    $http.get('/api/readRankingAllCategory/').
      success(function(data) {
        $scope.rankAllCategoryPosts = data.rankAllCategoryPosts;
        $scope.pageTitle = '総合ランキング';
      });

  })
  .controller('UserCtrl', function ($scope, $http, $routeParams, toaster) {

    $scope.orderProp = "totalNum";

    $http.get('/api/readUserPosts/' + $routeParams.twitterIdStr).
      success(function(data) {
        console.log(data.userAllCategoryPosts)
        $scope.userAllCategoryPosts = data.userAllCategoryPosts;

        // TODO; 名前の変更
        $scope.pageTitle = '総合ランキング';
      });

    $scope.toggleOrderBy = function() {
      $scope.isNewer = !$scope.isNewer;
      $scope.orderProp = ($scope.isNewer) ? "createdAt" : "favNum";
    }
  })
  .controller('DetailCtrl', function ($scope, $http, $location, $rootScope, $routeParams, $timeout, toaster) {

    var onTimeout
      , timer
      , INTERVAL = 5 * 1000
      ;

    $http.get('/api/readAll/' + $routeParams.name).
      success(function(data) {
          $scope.posts = data.posts;
          $scope.postWidth = data.postWidth;
      });

    $http.get('/api/readRanking/' + $routeParams.name).
      success(function(data) {
        $scope.rankPosts = data.rankPosts;
        $scope.rankWidth = data.rankWidth;

        $scope.pageTitle = (data.rankPosts[0].tags.split(","))[2];
      });

    function updateTweetList(data) {
      var idx
        , posts  = data.rankPosts || data.posts
        , width  = data.rankWidth || data.postWidth
        , target = data.rankPosts !== undefined ? "ranking" : "new"
        ;

      posts.forEach(function(newData, newDataIndex){

          if(target === "ranking") {
            idx = _.findIndex($scope.rankPosts, {userIdStr: newData.userIdStr});
          } else {
            idx = _.findIndex($scope.posts, {userIdStr: newData.userIdStr});
          }

          // もし、新しい画像があれば
          if(idx === -1) {

            console.log("追加します！！");

            if(target === "ranking") {
              $scope.rankPosts.push(posts[newDataIndex]);
              $scope.rankWidth　= width;
            } else {
              $scope.posts.push(posts[newDataIndex]);
              $scope.postWidth = width;
            }

            return;
          }

          // リツイート数、ふぁぼ数に変化があれば更新
          if($scope.rankPosts[idx].favNum !== newData.favNum) {
            if(target === "ranking") {
              $scope.rankPosts[idx].favNum = newData.favNum;
            } else {
              $scope.posts[idx].favNum = newData.favNum;
            }
          }

          if($scope.rankPosts[idx].retweetNum !== newData.retweetNum){
            if(target === "ranking") {
              $scope.rankPosts[idx].retweetNum = newData.retweetNum;
            } else {
              $scope.posts[idx].retweetNum = newData.retweetNum;
            }
          }

      });
    }

    // v1.0.7には$intervalが未実装であるため
    // $timeoutを再帰的に呼び出して擬似的な処理で賄う
    onTimeout = function() {

      $http.get('/api/readAll/' + $routeParams.name).
        success(function(data) {
          updateTweetList(data);
        });

      $http.get('/api/readRanking/' + $routeParams.name).
        success(function(data) {
          console.log("new readRanking data", data);
          updateTweetList(data);
        });

      timer = $timeout(onTimeout, INTERVAL);

    };

    timer = $timeout(onTimeout, INTERVAL);

    $scope.$on("$destroy", function() {
      if (timer) {
        $timeout.cancel(timer);
      }
    });

  })
  .controller('AdminUserCtrl', function ($scope, $http, $location, $rootScope, $routeParams, AuthenticationService, FavService) {

    $scope.isAuthenticated = AuthenticationService.isAuthenticated;

    if (!AuthenticationService.isAuthenticated) {

      // セッションを問い合わせ
      $http.get('/api/isAuthenticated')
        .success(function(data) {
          if(!_.isNull(data.data)) {
            AuthenticationService.isAuthenticated = true;
            $scope.isAuthenticated = AuthenticationService.isAuthenticated;

            console.log(data.data);
            $scope.user = data.data;
            console.log($scope.user._json.id_str);
            $http.post('/api/findUserById', {twitterIdStr: $scope.user._json.id_str})
              .success(function(data) {
                console.log("findUserById data = ", data);

               // ユーザ個別ページの判定用IDはtwitterIDではなく、ObjectIDで行う。
                $scope.user.objectId = data.data._id;
              });
          }
      }).error(function(status, data) {
        console.log(status);
        console.log(data);
      });
    }

  });