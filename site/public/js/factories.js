'use strict';

/* Factories */

angular.module('myApp.factories', [])
  .factory('Tweeter', function($http) {
    var Tweeter = function(twitterIdStr, nextCursorId) {
      this.twitterIdStr = twitterIdStr;
      this.nextCursorId = nextCursorId;
      this.tweeterData = [];
      this.tweets = [];
      this.busy = false;
    }

    Tweeter.prototype = {
      getTweeterData: function() {
        this.tweeterData =  $http.get('/api/getTweeterData/' + this.twitterIdStr)
      },
      getTweeterTweet: function(, nextCursorId) {
        this.tweets =  $http.get('/api/getTweeterTweet/' + this.twitterIdStr + '/' + this.nextCursorId)
      }
    };

    return Tweeter;
  });