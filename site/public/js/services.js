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
  .service('DownloadService', function($http) {
    return {
      zip: function(posts) {
        return  $http.post('/api/downloadZip', {posts: posts});
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
      , readUserPosts: function(tweetIdStr) {
        return $http.get('/api/readUserPosts/' + tweetIdStr)
      }
    }
    return post;
  })
  .service('UserService', function($http) {
    var user = {
        findUserDataByTwitterIdStr: function(twitterIdStr) {
        return $http.get('/api/findUserDataByTwitterIdStr/' + twitterIdStr)
      }
      , getTweeterData: function(twitterIdStr) {
        return $http.get('/api/getTweeterData/' + twitterIdStr)
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

