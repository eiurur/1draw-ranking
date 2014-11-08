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
  .service('PostService', function() {
    this.rankDatas = [];

    //
    // userPostDatas = [
    //  {
    //    'twitterIdStr': 111
    //    'profile': {}
    //    'data': {}
    //  }
    // ]
    this.userPostDatas = [];
    this.detailPostDatas = [];
  });
