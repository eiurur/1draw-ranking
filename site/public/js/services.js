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
    }
    return user;
  });
