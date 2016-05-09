'use strict';

/* Services */

angular.module('myApp.services', [])
  .service('AuthenticationService', function() {
    var auth = {
        isAuthenticated: false
    }
    return auth;
  })
  .service('FavService', function($http) {
    return {
      createFavorite: function(tweetIdStr) {
        return  $http.post('/api/createFavorite', {tweetIdStr: tweetIdStr});
      }
    };
  })
  .service('RetweetService', function($http) {
    return {
      statusesRetweet: function(tweetIdStr) {
        return  $http.post('/api/statusesRetweet', {tweetIdStr: tweetIdStr});
      }
    };
  })
  .service('DownloadService', ["$http", function($http) {
    return {
      exec: function(url) {
        return $http.post('/api/download', {url: url});
      },

      zip: function(posts) {
        return  $http.post('/api/downloadZip', {posts: posts});
      }
    };
  }])
  .service('ConvertService', function() {
    return {
      base64toBlob: function(_base64) {
        var arr, blob, data, i, mime, tmp;
        i = void 0;
        tmp = _base64.split(',');
        data = atob(tmp[1]);
        mime = tmp[0].split(':')[1].split(';')[0];
        arr = new Uint8Array(data.length);
        i = 0;
        while (i < data.length) {
          arr[i] = data.charCodeAt(i);
          i++;
        }
        blob = new Blob([arr], {
          type: mime
        });
        return blob;
      }
    };
  })
  .service('PostService', function($http) {
    var post = {
        rankDatas: []
      , userPostDatas: []
      , detailPostDatas: []
      , readAll: function(name) {
        return $http.get('/api/readAll/' + name)
      }
      , readRanking: function(name) {
        return $http.get('/api/readRanking/' + name)
      }
      , readRankingAllCategory: function() {
        return $http.get('/api/readRankingAllCategory')
      }
      , readOverallRanking: function(categories) {
        return $http.post('/api/readOverallRanking', {categories: categories})
      }
      , readUserPosts: function(tweetIdStr) {
        return $http.get('/api/readUserPosts/' + tweetIdStr)
      }
      , readCount: function(name) {
        return $http.get('/api/readCount/' + name)
      }
      , saveCachePosts: function(data) {
        if(data.type === 'rankingAll') {
          var properties = {
              'name': data.name
            , 'rankingAllPosts': data.posts
            , 'skip': data.skip
          }
        } else if (data.type === 'ranking') {
          var properties = {
              'name': data.name
            , 'rankPosts': data.posts
            , 'pageTitle': data.pageTitle
          }
        } else {
          var properties = {
              'name': data.name
            , 'posts': data.posts
          };
        }

        var idx = _.findIndex(this.detailPostDatas, {'name': data.name});

        if(idx === -1) {
          this.detailPostDatas.push(properties);
          return;
        }

        this.detailPostDatas[idx] = _.merge(properties, this.detailPostDatas[idx]);
      }
      , updateCachePosts: function(data) {
        var idx = _.findIndex(this.detailPostDatas, {'name': data.name});
        this.detailPostDatas[idx][data.propety] = data.posts;
      }
    }
    return post;
  })
  .service('ViewService', function() {
    return {
      isRankingAllShow: false
    };
  })
  // .service('myData', ['$rootScope', function ($rootScope) {
  //     var message = 'This is my message.';
  //     this.changeMessage = function(msg) {
  //         message = msg;
  //         $rootScope.$broadcast('change_message', message);
  //     };
  //     this.getMessage = function() {
  //         return message;
  //     };
  // }])
  .service('MyService', function($http) {
    var my = {
      findUserDataByTwitterIdStr: function(twitterIdStr) {
        return $http.get('/api/findUserDataByTwitterIdStr/' + twitterIdStr)
      }
    }
    return my;
  })
  .service('LightboxService', function() {
    var lightbox = {
      images: []
    };
    return lightbox;
  })
  .service('CategoryService', function($http) {
    var category = {
        default: [
            'aikatsu'
          , 'aist'
          , 'dairoku'
          , 'gochiusa'
          , 'kancolle'
          , 'kirara'
          , 'lovelive'
          , 'madomagi'
          , 'millimas'
          , 'mobamas'
          , 'prpr'
          , 'ptrainer'
          , 'toho'
          , 'yuyusiki'
        ]
      , findDefault: function() {
        return $http.get('/api/findCategoriesDefault')
      }
      , findAll: function() {
        return $http.get('/api/findCategoriesAll')
      }
    }
    return category;
  })
  .service('TagService', function($http) {
    var tag = {
        defaultCategories: [
            'aikatsu'
          , 'aist'
          , 'dairoku'
          , 'gochiusa'
          , 'kancolle'
          , 'kirara'
          , 'lovelive'
          , 'madomagi'
          , 'millimas'
          , 'mobamas'
          , 'prpr'
          , 'ptrainer'
          , 'toho'
          , 'yuyusiki'
        ]
        , default: [
            "#アイカツ版深夜の真剣お絵描き60分一本勝負"
          , "#アイカツスターズ版深夜の真剣お絵描き60分一本勝負"
          , "#第六駆版深夜の真剣お絵描き60分一本勝負"
          , "#ごちうさ版深夜の真剣お絵描き60分一本勝負"
          , "#艦これ版深夜の真剣お絵描き60分一本勝負"
          , "#まんがタイムきらら版深夜の真剣お絵描き60分一本勝負"
          , "#ラブライブ版深夜の真剣お絵描き60分一本勝負"
          , "#まどマギ版真剣深夜のお絵かき60分一本勝負"
          , "#ミリマス版深夜の真剣お絵描き60分一本勝負"
          , "#モバマス版深夜の真剣お絵かき60分1本勝負"
          , "#prpr版深夜の真剣お絵描き60分一本勝負"
          , "#ポケモントレーナー版深夜の真剣お絵描き60分一本勝負"
          , "#深夜の真剣お絵描き60分一本勝負"
          , "#ゆゆ式版深夜の真剣お絵描き60分一本勝負"
        ]
      , register: function(tagsStr, categoriesStr) {
        return $http.post('/api/registerTag', {tagsStr: tagsStr, categoriesStr: categoriesStr})
      }
      , findRegistered: function() {
        return $http.get('/api/findTagRegistered')
      }
      , findAll: function() {
        return $http.get('/api/findTagAll')
      }
      , findDefault: function() {
        return $http.get('/api/findTagDefault')
      }
      , findCategoriesDefault: function() {
        return $http.get('/api/findCategoriesDefault')
      }
      , findCategoriesAll: function() {
        return $http.get('/api/findCategoriesAll')
      }
    }
    return tag;
  })
  .service('UserService', function($http) {
    var user = {
        getTweeterData: function(twitterIdStr) {
        return $http.get('/api/getTweeterData/' + twitterIdStr)
      }
      , getTweeterTweet: function(twitterIdStr, nextCursorId) {
        return $http.get('/api/getTweeterTweet/' + twitterIdStr + '/' + nextCursorId)
      }
    }
    return user;
  })
  .service("TweetService", function($http) {
    return {
      activateLink: function(tweet) {
        return tweet.replace(/((ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&amp;%@!&#45;\/]))?)/g, "<a href=\"$1\" target=\"_blank\">$1</a>").replace(/(^|\s)(@|＠)(\w+)/g, "$1<a href=\"http://www.twitter.com/$3\" target=\"_blank\">@$3</a>").replace(/(?:^|[^ーー゛゜々ヾヽぁ-ヶ一-龠ａ-ｚＡ-Ｚ０-９a-zA-Z0-9&_\/>]+)[#＃]([ー゛゜々ヾヽぁ-ヶ一-龠ａ-ｚＡ-Ｚ０-９a-zA-Z0-9_]*[ー゛゜々ヾヽぁ-ヶ一-龠ａ-ｚＡ-Ｚ０-９a-zA-Z]+[ー゛゜々ヾヽぁ-ヶ一-龠ａ-ｚＡ-Ｚ０-９a-zA-Z0-9_]*)/g, ' <a href="http://twitter.com/search?q=%23$1" target="_blank">#$1</a>');
      },
      iconBigger: function(url) {
        if (_.isUndefined(url)) { return ''; }
        return url.replace('normal', 'bigger');
      },
      getExpandedURLFromURL: function(entities) {
        if (!_.has(entities, 'url')) { return ''; }
        return entities.url.urls;
      },
      getExpandedURLFromDescription: function(entities) {
        if (!_.has(entities, 'description')) { return ''; }
        if (!_.has(entities.description, 'urls')) { return ''; }
        return entities.description.urls;
      }
    };
  });

