'use strict';

/* Services */


// Demonstrate how to register services
// In this case it is a simple value service.
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
      // toggleFav: function(postID, userID) {
      //   return  $http.post('/api/toggleFav', {postID: postID, userID: userID});
      // }

    };

  });
