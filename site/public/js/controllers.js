'use strict';

angular.module('myApp.controllers', [])
  .controller('IndexCtrl', function ($scope, $http, PostService) {
    $scope.isLoading = true;
    $scope.pageTitle = '総合ランキング';

    var isLoaded = (_.isEmpty(PostService.rankDatas)) ? false : true;
    if(isLoaded) {
      $scope.rankAllCategoryPosts = PostService.rankDatas;
      $scope.isLoading = false;
      return;
    }

    $http.get('/api/readRankingAllCategory').
      success(function(data) {
        $scope.isLoading = false;
        if(_.isEmpty(PostService.rankDatas)) {
          $scope.rankAllCategoryPosts = data.rankAllCategoryPosts;
          PostService.rankDatas = $scope.rankAllCategoryPosts;
        }
      });


  })
  .controller('UserCtrl', function ($scope, $http, $routeParams) {

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
  .controller('DetailCtrl', function ($scope, $http, $location, $rootScope, $routeParams, $timeout, PostService) {

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
      $scope.rankPosts = [].concat(PostService.detailPostDatas[idx].rankPosts);
      $scope.pageTitle = PostService.detailPostDatas[idx].pageTitle;
    } else {

      // 初回
      $scope.isLoading = true;
      $http.get('/api/readAll/' + $routeParams.name).
        success(function(data) {
          $scope.isLoading = false;
          $scope.posts = data.posts;
          cacheNew(data);
        });

      $http.get('/api/readRanking/' + $routeParams.name).
        success(function(data) {
          $scope.rankPosts = data.rankPosts;
          if(_.isUndefined(data.rankPosts[0])) return;
          $scope.pageTitle = (data.rankPosts[0].tags.split(","))[2];
          cacheRank(data);
        });

    }

    function cacheRank(data){
      var properties = {
          'name': $routeParams.name
        , 'rankPosts': data.rankPosts
        , 'pageTitle': (data.rankPosts[0].tags.split(","))[2]
      };
      var readRankingIdx = _.findIndex(PostService.detailPostDatas, {'name':$routeParams.name});

      if(readRankingIdx === -1) {
        PostService.detailPostDatas.push(properties);
        return;
      }
      PostService.detailPostDatas[readRankingIdx] = _.merge(properties, PostService.detailPostDatas[readRankingIdx]);
    }

    function replaceCachedRank(data){
      var readRankingIdx = _.findIndex(PostService.detailPostDatas, {'name':$routeParams.name});
      PostService.detailPostDatas[readRankingIdx].rankPosts = data.rankPosts;
    }

    function cacheNew(data){
      var properties = {
          'name': $routeParams.name
        , 'posts': data.posts
      };
      var readAllIdx = _.findIndex(PostService.detailPostDatas, {'name':$routeParams.name});

      if(readAllIdx === -1) {
        PostService.detailPostDatas.push(properties);
        return;
      }
      PostService.detailPostDatas[readAllIdx] = _.merge(properties, PostService.detailPostDatas[readAllIdx]);
    }

    function replaceCachedNew(data){
      var readAllIdx = _.findIndex(PostService.detailPostDatas, {'name':$routeParams.name});
      PostService.detailPostDatas[readAllIdx].posts = data.posts;
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
        , target = data.rankPosts !== undefined ? "ranking" : "new"
        ;

      posts.forEach(function(newData, newDataIndex){

          if(target === "ranking") {
            idx = _.findIndex($scope.rankPosts, {tweetIdStr: newData.tweetIdStr});
          } else {
            idx = _.findIndex($scope.posts, {tweetIdStr: newData.tweetIdStr});
          }


          // もし、新しい画像があれば
          if(idx === -1) {

            console.log("追加します！！");

            if(target === "ranking") {
              $scope.rankPosts.push(posts[newDataIndex]);
            } else {
              $scope.posts.push(posts[newDataIndex]);
            }

            return;
          }

          // 2014/11/08
          // 突然$scope,rankPosts[idx]がundefindeを返すようになった。
          // 原因不明につき応急処置
          if(_.isUndefined($scope.rankPosts[idx])) return;

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
  .controller('AdminUserCtrl', function ($scope, $http, $location, $rootScope, $routeParams, AuthenticationService) {

    $scope.isAuthenticated = AuthenticationService.isAuthenticated;

    if (!AuthenticationService.isAuthenticated) {

      // セッションを問い合わせ
      $http.get('/api/isAuthenticated')
        .success(function(data) {
          if(!_.isNull(data.data)) {
            AuthenticationService.isAuthenticated = true;
            $scope.isAuthenticated = AuthenticationService.isAuthenticated;
            $scope.user = data.data;
            $http.post('/api/findUserById', {posts: $scope.user._json.id_str})
              .success(function(data) {

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