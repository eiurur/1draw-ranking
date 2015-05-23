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
  .factory('Ranking', function($http, TweetService, PostService) {
    var Ranking = function(name) {
      this.name   = name;
      this.busy   = false;
      this.isLast = false;
      this.num    = 20;
      this.idx    = _.findIndex(PostService.detailPostDatas, {'name': name});

      var that = this;
      PostService.readCount(name)
        .success(function(data) {
          that.totalItemNum = data.count;
        });

      if(_.has(PostService.detailPostDatas[this.idx], 'rankingAllPosts')) {
        this.items = [].concat(PostService.detailPostDatas[this.idx].rankingAllPosts);
        this.skip  = PostService.detailPostDatas[this.idx].skip
      } else {
        this.items = [];
        this.skip = 0;
      }
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

          PostService.saveCachePosts({
              'name': this.name
            , 'type': 'rankingAll'
            , 'posts': this.items
            , 'skip': this.skip
          });

      }.bind(this));
    };

    return Ranking;
  });