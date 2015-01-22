'use strict';

angular.module('myApp.controllers', [])
  .controller('LightboxCtrl', function ($scope, Lightbox, TweetService) {
    $scope.Lightbox = Lightbox;
    $scope.openLightboxModal = function(images, image, orderProp) {

      var order = orderProp || 'totalNum';

      // sortしないとダメ。ついでにsortByで返される並びが昇順なので降順に直す。
      images = _.sortBy(images, order).reverse();

      // Problem: Angularjs wrong $index after orderBy
      // Solution: http://stackoverflow.com/questions/16118762/angularjs-wrong-index-after-orderby
      var index = _.findLastIndex(images, {tweetIdStr: image.tweetIdStr || image.id_str});

      _.each(images, function(image) {
          image.tweetIdStr = image.tweetIdStr || image.id_str
        , image.userIdStr = image.userIdStr || image.user.id_str
        , image.sourceOrigUrl = image.sourceOrigUrl || image.extended_entities.media[0].media_url + ':orig'
        // , image.sourceUrl = image.sourceUrl || image.user.screen_name
        // , image.text = image.tweetText || TweetService.activateLink(image.text)
        , image.name = image.userName || image.user.name
        , image.screenName = image.userScreenName || image.user.screen_name
        // , image.icon = image.icon || TweetService.iconBigger(image.user.profile_image_url_https)
      });


      Lightbox.openModal(images, index);
    };
  })
  .controller('IndexCtrl', function ($scope, CategoryService, PostService, TagService) {
    $scope.isLoading = true;
    $scope.pageTitle = '総合ランキング';

    var isLoaded = (_.isEmpty(PostService.rankDatas)) ? false : true;
    if(isLoaded) {
      $scope.rankOverallPosts = PostService.rankDatas;
      $scope.isLoading = false;
      return;
    }

    // HACK:
    // index.jadeを開いたとき、findTagRegistered()を二回呼び出している状態。
    // 無駄だけど解決法が分からない。
    // $broadcastを試みたけど動かない。
    TagService.findRegistered()
      .success(function(data) {
        var categories = (_.isNull(data.data)) ? CategoryService.default : JSON.parse(data.data.categoriesStr);
        PostService.readOverallRanking(categories).
          success(function(data) {
            $scope.rankOverallPosts = data.rankOverallPosts;
            PostService.rankDatas = $scope.rankOverallPosts;
            $scope.isLoading = false;
          });
      });
  })
  .controller('MyCtrl', function ($scope, $routeParams, PostService, UserService) {

  })
  .controller('MyPostCtrl', function ($scope, $routeParams, PostService, MyService) {

    $scope.isLoading = true;
    $scope.orderProp = "totalNum";

    PostService.readUserPosts($routeParams.twitterIdStr).
      success(function(data) {
        $scope.userAllCategoryPosts = data.userAllCategoryPosts;
      });

    MyService.findUserDataByTwitterIdStr($routeParams.twitterIdStr).
      success(function(data) {
        $scope.isLoading = false;
        $scope.pageTitle = (_.has(data.userData, 'userScreenName')) ? '' : 'NoData';
      });

    $scope.toggleOrderBy = function() {
      $scope.isNewer = !$scope.isNewer;
      $scope.orderProp = ($scope.isNewer) ? "createdAt" : "totalNum";
    }
  })
  .controller('TagCtrl', function ($scope, PostService, TagService) {
    $scope.isLoaded = false;
    TagService.findRegistered()
      .success(function(data) {
        // console.log('findTagRegistred data = ', data.data);
        var categories = (_.isNull(data.data)) ? TagService.defaultCategories : JSON.parse(data.data.categoriesStr);
        $scope.navContents = {categories: categories};
      });

  })
  .controller('MyTagCtrl', function ($scope, $routeParams, CategoryService, PostService, TagService, toaster) {

    $scope.isLoading = true;

    // HACK: とりあえずpromise使ってネスト減らしたい。
    // HACK: 命名もTagとCategoryがごっちゃのまま書いたからめちゃくちゃ。要修正
    // 多分忘れるからロジックのメモ
    // 1. 全てのカテゴリとタグ、あと、自分が登録しているタグを持ってくる
    // 2. $scope.tagAllへタグとそれに対応するカテゴリ、そしてそれが登録済みかどうかのbooleanを代入していく
    CategoryService.findAll()
      .success(function(categoryAll) {
        TagService.findAll()
          .success(function(tagAll) {
            TagService.findRegistered()
              .success(function(data) {
                $scope.tagAll = [];
                var selectedTags = (_.isNull(data.data)) ? TagService.default : JSON.parse(data.data.tagsStr);
                _.each(tagAll.data, function(tag, idx) {
                  var isSelected = _.contains(selectedTags, tagAll.data[idx]);
                  $scope.tagAll.push({
                      'tag': tag
                    , 'category': categoryAll.data[idx]
                    , 'isSelected': isSelected
                  });
                });

                $scope.isLoading = false;
              });
          });
      });

    $scope.checkAll = function() {
      $scope.tagAll = _.each($scope.tagAll, function(tag) {
        tag.isSelected = true;
      });
    };

    $scope.backDefault = function() {
      $scope.clearAll();
      TagService.findDefault()
        .success(function(data) {
          $scope.tagAll = _.each($scope.tagAll, function(tag) {
            if(!_.contains(data.data, tag.tag)) return;
            tag.isSelected = true;
          });
        });
    };

    $scope.clearAll = function() {
      $scope.tagAll = _.each($scope.tagAll, function(tag) {
        tag.isSelected = false;
      });
    };

    // けど、ページ上で選択するのはタグだからMyTagCtrlってのは間違ってはいない。
    // 間違っているのはMongoのスキーマだ(Tag)
    // とりあえず今は、TagとCategoryの両方を保存しておくことにする(2つセットで利用する場面も出てくるかもしれないから念のため)
    $scope.register = function() {
      $scope.isProcessing = true;

      var tagsSelected = _.filter($scope.tagAll, 'isSelected');
      var tags = _.pluck(tagsSelected, 'tag');
      var tagsStr = JSON.stringify(tags);
      var categories = _.pluck(tagsSelected, 'category');
      var categoriesStr = JSON.stringify(categories);
      TagService.register(tagsStr, categoriesStr)
        .success(function(data) {
          toaster.pop('success', "登録しました。");
          $scope.isProcessing = false;
        });
    };
  })
  .controller('UserCtrl', function ($scope, $routeParams, LightboxService, PostService, TweetService, UserService, toaster) {
    $scope.isLoading = true;

    // ユーザがワンドロタグで投稿した画像を取得
    PostService.readUserPosts($routeParams.twitterIdStr).
      success(function(data) {
        $scope.userAllCategoryPosts = data.userAllCategoryPosts;
      });

    // ユーザがツイッターに投稿した画像を取得
    // HACK: ツイッターに投稿された画像をすべて表示するビューに切り替えるかのBooleanだけど、命名が悪すぎる。。。
    $scope.isOneDrawShow = true;
    $scope.userAllPict = [];
    var nextCursorId = nextCursorId || 0;

    var assignUserAllPict = function() {
      if($scope.isOneDrawShow) return;

      UserService.getTweeterTweet($routeParams.twitterIdStr, nextCursorId).
        success(function(data) {

          // API制限くらったら return
          if(_.isUndefined(data.data)) {
            toaster.pop('error', "API制限。15分お待ち下さい。");
            return;
          }

          // 全部読み終えたら(残りがないとき、APIは最後のツイートだけ取得する === 1) return
          if(data.data.length < 2) {
            toaster.pop('success', "最後まで読み終えました。");
            return;
          }

          // nextCursorId = _.last(data.data).id_str;
          nextCursorId = data.data[data.data.length-1].id_str;

          // 画像付きツイートだけを抽出
          var tweetListIncludePict = _.filter(data.data, function(tweet) {
            var hasPict = (_.has(tweet, 'extended_entities') && !_.isEmpty(tweet.extended_entities.media));
            return hasPict;
          });

          // 並び順の整合性をとるため、totalNumとcreatedAt(created_atだと文字列を含んでおり、バグるため、id_str)の設定を行う。
          _.each(tweetListIncludePict, function(tweet) {
            tweet.totalNum = tweet.retweet_count + tweet.favorite_count;
            tweet.tweetIdStr = tweet.id_str;
          });
          LightboxService.images = LightboxService.images.concat(tweetListIncludePict);
          $scope.userAllPict = $scope.userAllPict.concat(tweetListIncludePict);
          assignUserAllPict();
        });
    }

    $scope.toggleShowMode = function() {
      if($scope.isOneDrawShow) return;
      assignUserAllPict();
    }

    $scope.$on("$destroy", function() {
      $scope.isOneDrawShow = true;
    });

    // ユーザデータをTwitterAPIを通して取得
    // xxx: 遅い
    // xxx: API制限の恐れがある
    // TODO: aggregate.jsで投稿データをpostsテーブルに格納すると同時に、ユーザの情報をTweeterテーブルに格納？
    UserService.getTweeterData($routeParams.twitterIdStr).
      success(function(data) {
        var expandedUrlListInDescription = TweetService.getExpandedURLFromDescription(data.data.entities);
        var expandedUrlListInUrl = TweetService.getExpandedURLFromURL(data.data.entities);

        _.each(expandedUrlListInDescription, function(urls) {
          data.data.description = data.data.description.replace(urls.url, urls.expanded_url);
        });
        _.each(expandedUrlListInUrl, function(urls) {
          data.data.url = data.data.url.replace(urls.url, urls.expanded_url);
        });

        data.data.profile_image_url_https = TweetService.iconBigger(data.data.profile_image_url_https);
        data.data.description = TweetService.activateLink(data.data.description);

        $scope.userData = data.data;
        $scope.isLoading = false;
      });

    // 画像の並びを投稿順と人気順で切り替えるロジック
    $scope.isPopularOrder = true;
    $scope.orderProp = "totalNum";
    $scope.toggleOrderBy = function() {
      $scope.orderProp = ($scope.isPopularOrder) ? "totalNum" : "tweetIdStr";
    }

  })
  .controller('DetailCtrl', function ($scope, $routeParams, $interval, PostService) {

    var idx
      , isCached
      , isExistData
      , checkUpdates
      , timer
      , INTERVAL = 5 * 1000
      ;

    $scope.isLoading = false

    idx = _.findIndex(PostService.detailPostDatas, {'name': $routeParams.name});
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
      PostService.readAll($routeParams.name).
        success(function(data) {
          $scope.posts = data.posts;
          cacheNew(data);
          $scope.isLoading = false;
        });

      PostService.readRanking($routeParams.name).
        success(function(data) {
          $scope.rankPosts = data.rankPosts;
          if(_.isUndefined(data.rankPosts[0])) return;
          $scope.pageTitle = data.rankPosts[0].tags;
          cacheRank(data);
        });

    }

    checkUpdates = function() {
      PostService.readAll($routeParams.name).
        success(function(data) {
          updateTweetList(data);
          replaceCachedNew(data);
        });
      PostService.readRanking($routeParams.name).
        success(function(data) {
          updateTweetList(data);
          replaceCachedRank(data);
        });
    };
    timer = $interval(checkUpdates, INTERVAL);
    $scope.$on("$destroy", function() {
      if (timer) { $interval.cancel(timer); }
    });

    function cacheRank(data){
      var properties = {
          'name': $routeParams.name
        , 'rankPosts': data.rankPosts
        , 'pageTitle': data.rankPosts[0].tags
      };
      var readRankingIdx = _.findIndex(PostService.detailPostDatas, {'name': $routeParams.name});

      if(readRankingIdx === -1) {
        PostService.detailPostDatas.push(properties);
        return;
      }
      PostService.detailPostDatas[readRankingIdx] = _.merge(properties, PostService.detailPostDatas[readRankingIdx]);
    }

    function replaceCachedRank(data){
      var readRankingIdx = _.findIndex(PostService.detailPostDatas, {'name': $routeParams.name});
      PostService.detailPostDatas[readRankingIdx].rankPosts = data.rankPosts;
    }

    function cacheNew(data){
      var properties = {
          'name': $routeParams.name
        , 'posts': data.posts
      };
      var readAllIdx = _.findIndex(PostService.detailPostDatas, {'name': $routeParams.name});

      if(readAllIdx === -1) {
        PostService.detailPostDatas.push(properties);
        return;
      }
      PostService.detailPostDatas[readAllIdx] = _.merge(properties, PostService.detailPostDatas[readAllIdx]);
    }

    function replaceCachedNew(data){
      var readAllIdx = _.findIndex(PostService.detailPostDatas, {'name': $routeParams.name});
      PostService.detailPostDatas[readAllIdx].posts = data.posts;
    }

    function updateTweetList(data) {
      var idx
        , variable
        , posts  = data.rankPosts || data.posts
        , target = data.rankPosts !== undefined ? "ranking" : "new"
        ;

      posts.forEach(function(newData, newDataIndex){
        variable = (target === "ranking") ? 'rankPosts' : 'posts';
        idx = _.findIndex($scope[variable], {tweetIdStr: newData.tweetIdStr});

        // もし、新しい画像があれば
        if(idx === -1) {
          $scope[variable].push(posts[newDataIndex]);
          return;
        }

        // 2014/11/08
        // 突然$scope,rankPosts[idx]がundefindeを返すようになった。
        // 原因不明につき応急処置
        if(_.isUndefined($scope.rankPosts[idx])) return;

        // リツイート数、ふぁぼ数に変化があれば更新
        if($scope[variable][idx].favNum !== newData.favNum) {
          $scope[variable][idx].favNum = newData.favNum;
        }
        if($scope[variable][idx].retweetNum !== newData.retweetNum) {
          $scope[variable][idx].retweetNum = newData.retweetNum;
        }

      });
    }
  })
  .controller('AdminUserCtrl', function ($scope, $http, AuthenticationService) {

    if (AuthenticationService.isAuthenticated) {
      $scope.isAuthenticated = AuthenticationService.isAuthenticated;
      return;
    }

    $http.get('/api/isAuthenticated')
      .success(function(data) {
        if(!_.isNull(data.data)) {
          AuthenticationService.isAuthenticated = true;
          $scope.isAuthenticated = AuthenticationService.isAuthenticated;
          $scope.user = data.data;
          $http.post('/api/findUserById', {twitterIdStr: $scope.user._json.id_str})
            .success(function(data) {

             // ユーザ個別ページの判定用IDはtwitterIDではなく、ObjectIDで行う。
              $scope.user.objectId = data.data._id;
            });
        }
    }).error(function(status, data) {
      console.log(status);
      console.log(data);
    });
  });