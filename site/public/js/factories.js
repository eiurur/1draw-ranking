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
      getTweeterTweet: function(twitterIdStr, nextCursorId) {
        this.tweets =  $http.get('/api/getTweeterTweet/' + this.twitterIdStr + '/' + this.nextCursorId)
      }
    };

    return Tweeter;
  })
  .factory('Ranking', function($http, TweetService) {
    var Ranking = function(name) {
      this.name = name;
      this.items = [];
      this.busy = false;
      this.isLast = false;
      this.num = 20;
      this.skip = 0;
    };

    Ranking.prototype.nextPage = function() {
      if (this.busy || this.isLast) return;
      this.busy = true;

      $http.get('/api/readRankingAll/' + this.name + '/' + this.skip)
        .success(function(data) {
          var items = data.rankPosts;
          if(_.isEmpty(items)) {
            this.isLast = true;
          }

          for (var i = 0; i < items.length; i++) {
            items[i].tweetText = TweetService.activateLink(items[i].tweetText);
            this.items.push(items[i]);
          }
          this.skip += 20;
          this.busy = false;

      }.bind(this));
    };

    return Ranking;
  });