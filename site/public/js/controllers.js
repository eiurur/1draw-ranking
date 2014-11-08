'use strict';

angular.module('myApp.controllers', [])
  .controller('IndexCtrl', function ($scope, $http, toaster, PostService) {
    // $scope.isLoading = (_.isEmpty(PostService.rankDatas)) ? true : false;
    $scope.isLoading = true;

    $scope.rankAllCategoryPosts = PostService.rankDatas;
    $http.get('/api/readRankingAllCategory').
      success(function(data) {
        $scope.isLoading = false;
        if(_.isEmpty(PostService.rankDatas)) {
          $scope.rankAllCategoryPosts = data.rankAllCategoryPosts;
          PostService.rankDatas = $scope.rankAllCategoryPosts;
        }
      });
    $scope.pageTitle = '総合ランキング';


  })
  .controller('UserCtrl', function ($scope, $http, $routeParams, toaster) {

    $scope.isLoading = true;
    $scope.orderProp = "totalNum";

    // ユーザの過去の投稿データを取得
    $http.get('/api/readUserPosts/' + $routeParams.twitterIdStr).
      success(function(data) {
        $scope.userAllCategoryPosts = data.userAllCategoryPosts;
      });

    // ユーザデータ(screenName, userName, Icon, URL, TWitterId)を取得
    $http.get('/api/findUserDataByTwitterIdStr/' + $routeParams.twitterIdStr).
      success(function(data) {
        $scope.isLoading = false;
        $scope.pageTitle = 'NoData';
        if(_.has(data.userData, 'userScreenName')) {
          $scope.pageTitle = '@' + data.userData.userScreenName;
        }
      });

    $scope.toggleOrderBy = function() {
      $scope.isNewer = !$scope.isNewer;
      $scope.orderProp = ($scope.isNewer) ? "createdAt" : "totalNum";
    }
  })
  .controller('DetailCtrl', function ($scope, $http, $location, $rootScope, $routeParams, $timeout, PostService, toaster) {

    var idx
      , isCached
      , isExistData
      , onTimeout
      , timer
      , INTERVAL = 5 * 1000
      ;

    $scope.isLoading = false

    idx = _.findIndex(PostService.detailPostDatas, {'name':$routeParams.name});
    isCached = (idx !== -1);
    isExistData = (_.isUndefined(PostService.detailPostDatas[idx]) || PostService.detailPostDatas[idx].postWidth !== 0);

    // detailページを開いたら即座にPostServiceへキャッシュを保存する。
    // PosrServiceがキャッシュを所有している !== ツイートデータを所有している
    if(isCached && isExistData) {

      // 体感速度を向上するため、キャッシュ(Service)からデータを取得。
      $scope.name = PostService.detailPostDatas[idx].name;
      $scope.posts = [].concat(PostService.detailPostDatas[idx].posts);
      $scope.postWidth = PostService.detailPostDatas[idx].postWidth;
      $scope.rankPosts = [].concat(PostService.detailPostDatas[idx].rankPosts);
      $scope.rankWidth = PostService.detailPostDatas[idx].rankWidth;
      $scope.pageTitle = PostService.detailPostDatas[idx].pageTitle;
    } else {

      // 初回
      $scope.isLoading = true;
      $http.get('/api/readAll/' + $routeParams.name).
        success(function(data) {
          $scope.isLoading = false;
          $scope.posts = data.posts;
          $scope.postWidth = data.postWidth;
          cacheNew(data);
        });

      $http.get('/api/readRanking/' + $routeParams.name).
        success(function(data) {
          $scope.rankPosts = data.rankPosts;
          $scope.rankWidth = data.rankWidth;
          if(_.isUndefined(data.rankPosts[0])) return;
          $scope.pageTitle = (data.rankPosts[0].tags.split(","))[2];
          cacheRank(data);
        });

    }

    function cacheRank(data){
      var properties = {
          'name': $routeParams.name
        , 'rankPosts': data.rankPosts
        , 'rankWidth': data.rankWidth
        , 'pageTitle': (data.rankPosts[0].tags.split(","))[2]
      };
      var readRankingIdx = _.findIndex(PostService.detailPostDatas, {'name':$routeParams.name});

      // console.log('新規、追加。 readRankingIdx = ' + readRankingIdx);

      if(readRankingIdx === -1) {
        PostService.detailPostDatas.push(properties);
        // console.log('-1 PostService.detailPostDatas = ', PostService.detailPostDatas);
        return;
      }
      PostService.detailPostDatas[readRankingIdx] = _.merge(properties, PostService.detailPostDatas[readRankingIdx]);
      // console.log('PostService.detailPostDatas = ', PostService.detailPostDatas);
    }

    function replaceCachedRank(data){
      var readRankingIdx = _.findIndex(PostService.detailPostDatas, {'name':$routeParams.name});
      PostService.detailPostDatas[readRankingIdx].rankPosts = data.rankPosts;
      PostService.detailPostDatas[readRankingIdx].rankWidth = data.rankWidth;
      // console.log('repaced Ranki = ', PostService.detailPostDatas);
    }

    function cacheNew(data){
      var properties = {
          'name': $routeParams.name
        , 'posts': data.posts
        , 'postWidth': data.postWidth
      };
      var readAllIdx = _.findIndex(PostService.detailPostDatas, {'name':$routeParams.name});

      // console.log('新規、追加。 readAllIdx = ' + readAllIdx);

      if(readAllIdx === -1) {
        PostService.detailPostDatas.push(properties);
        // console.log('-1 PostService.detailPostDatas = ', PostService.detailPostDatas);
        return;
      }
      PostService.detailPostDatas[readAllIdx] = _.merge(properties, PostService.detailPostDatas[readAllIdx]);
      // console.log('PostService.detailPostDatas = ', PostService.detailPostDatas);
    }

    function replaceCachedNew(data){
      var readAllIdx = _.findIndex(PostService.detailPostDatas, {'name':$routeParams.name});
      PostService.detailPostDatas[readAllIdx].posts = data.posts;
      PostService.detailPostDatas[readAllIdx].postWidth = data.postWidth;
      // console.log('repaced New = ', PostService.detailPostDatas);
    }


    // v1.0.7には$intervalが未実装であるため
    // $timeoutを再帰的に呼び出して擬似的な処理で賄う
    onTimeout = function() {

      $http.get('/api/readAll/' + $routeParams.name).
        success(function(data) {
          updateTweetList(data);
          replaceCachedNew(data);
          // console.log('$scope', $scope.postWidth);
        });

      $http.get('/api/readRanking/' + $routeParams.name).
        success(function(data) {
          updateTweetList(data);
          replaceCachedRank(data);
          // console.log('$scope', $scope.rankWidth);
        });

      timer = $timeout(onTimeout, INTERVAL);

    };

    timer = $timeout(onTimeout, INTERVAL);

    $scope.$on("$destroy", function() {
      if (timer) {
        $timeout.cancel(timer);
      }
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

            // console.log(data.data);
            $scope.user = data.data;
            // console.log($scope.user._json.id_str);
            $http.post('/api/findUserById', {twitterIdStr: $scope.user._json.id_str})
              .success(function(data) {
                // console.log("findUserById data = ", data);

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