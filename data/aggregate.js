(function() {
  var dir          = '../lib/'
    , _            = require('lodash')
    , moment       = require('moment')
    , my           = require(dir + 'my')
    , dependModule = require(dir + 'dependModule')
    , exception    = require(dir + 'exception')
    , PostProvider = require(dir + 'model').PostProvider
    , settings     = process.env.NODE_ENV === "production" ? require(dir + "production") : require(dir + "development")
    ;

  exports.aggregate = function (data) {

    // my.dump(data);

    /**
     * 正規表現
     */
    var rt_exclude_pattern        = /(RT)/g
      , tumblr_pict_pattern       = /^[\s\S]*(http|https):\/\/tmblr.co\/[\s\S]*/g
      , twitpic_pict_pattern      = /^[\s\S]*(twitpic)/
      , twipple_pict_pattern      = /^[\s\S]*(p.twipple.jp)/
      , twitter_short_url_pattern = /^[\s\S]*(http:\/\/t.co\/[\w]+)/
      ;


    /**
     * Method list
     */
    var get = {
      hashtag: function(hashtagTweeted) {
        return _(hashtagTweeted)
          .pluck('text')
          .map(function(hashtag){ return '#' + hashtag; })
          .filter(function(hashtag) {
            return _.contains(settings.KEYWORDS, hashtag);
          })
          .value()[0];
      },
      hashtagIdx: function(hashtag) {
        return _.indexOf(settings.KEYWORDS, hashtag);
      }
    };

    var normalize = {
      category: function(idx) {
        return settings.CATEGORIES[idx];
      },
      tags: function(idx) {
        return settings.KEYWORDS[idx];
      },
      tweetUrl: function(entities) {
        var isPicFromTwitter = _.has(entities, 'media');
        if(isPicFromTwitter) return entities.media[0].display_url;

        var isPicFromTwitpic = twitpic_pict_pattern.test(entities.urls[0].display_url);
        var isPicFromTwipple = twipple_pict_pattern.test(entities.urls[0].display_url);
        if(isPicFromTwitpic || isPicFromTwipple) return entities.urls[0].expanded_url;

        throw new exception.UrlException();
      },
      sourceUrl: function(entities) {
        var isPicFromTwitter = _.has(entities, 'media');
        if(isPicFromTwitter) return entities.media[0].media_url + ':orig';

        var isPicFromTwitpic = twitpic_pict_pattern.test(entities.urls[0].display_url)
        if(isPicFromTwitpic) return entities.urls[0].expanded_url.replace('twitpic.com/', 'twitpic.com/show/full/');

        var isPicFromTwipple = twipple_pict_pattern.test(entities.urls[0].display_url);
        if(isPicFromTwipple) return entities.urls[0].expanded_url.replace('twipple.jp/','twipple.jp/show/large/');

        throw new exception.UrlException();
      },
      postTime: function(category, created_at) {
        var createdHm      = my.formatHm(created_at);
        var createdYMD     = my.formatYMD(created_at);
        var createdYMDHm   = my.formatYMDHm(created_at);
        var deadline       = dependModule.getDeadline(category);

        var createdAt      = my.formatYMDHms(created_at);
        var correspondDate = (createdHm < deadline) ? moment(createdYMDHm).add('days', -1).format("YYYY-MM-DD") : createdYMD;
        var correspondTime = createdYMDHm;
        return {
            createdAt: createdAt
          , correspondDate: correspondDate
          , correspondTime: correspondTime
        };
      }
    };

    var excludeNGUser = function(screenName) {
      _.each(settings.NG_USERS, function(name) {
        if(screenName.indexOf(name) !== -1) throw new exception.NGUserException();
      });
    };

    var checkIllegalTweet = function(isRT) {
      excludeNGUser(my.getTweetData(data, 'screen_name', isRT));

      if(!_.has(data, 'text')) throw new exception.NoTextTweetException();
      if(!_.has(data.entities, 'hashtags')) throw new exception.NoHashtagsTweetException();
      if(!_.has(data.entities, 'urls')) throw new exception.TextOnlyTweetException();
      if(!_.isEmpty(data.entities.urls)) throw new exception.UrlException();

      linkUrl = data.text.match(twitter_short_url_pattern);
      if(_.isNull(linkUrl)) throw new exception.TextOnlyTweetException();

      isUnofficialRT = rt_exclude_pattern.test(my.getTweetData(data, 'text', isRT));
      if(isUnofficialRT) throw new exception.isUnofficialRTException();
    }

    var assign = function(isRT) {
      var ht = get.hashtag(my.getTweetData(data, 'hashtags', isRT));
      var hashtagIdx = get.hashtagIdx(ht);
      var t = {
          entities: my.getTweetData(data, 'entities', isRT)
        , tweetIdStr: my.getTweetData(data, 'tweet.id_str', isRT)
        , userIdStr: my.getTweetData(data, 'user.id_str', isRT)
        , userScreenName: my.getTweetData(data, 'screen_name', isRT)
        , userName: my.getTweetData(data, 'name', isRT)
        , userIcon: my.getTweetData(data, 'profile_image_url_bigger', isRT)
        , tweetText: my.getTweetData(data, 'text', isRT)
        , tweetUrl: normalize.tweetUrl(my.getTweetData(data, 'entities', isRT))
        , sourceUrl: normalize.sourceUrl(my.getTweetData(data, 'entities', isRT))
        , category: normalize.category(hashtagIdx)
        , tags: normalize.tags(hashtagIdx)
        , retweetNum: my.getTweetData(data, 'tweet.retweet_count', isRT)
        , favNum: my.getTweetData(data, 'tweet.favorite_count', isRT)
        , totalNum: my.getTweetData(data, 'tweet.retweet_count', isRT) + my.getTweetData(data, 'tweet.favorite_count', isRT)
      }
      var postTimeNormalized = normalize.postTime(t.category, my.getTweetData(data, 'tweet.created_at', isRT));
      return _.merge(postTimeNormalized, t);
    }

    var insertDB = function(tweetData){
      PostProvider.save(tweetData, function(error, docs) {});
    }

    var updateDB = function(tweetData){
      PostProvider.update(tweetData, function(error, docs) {});
    }


    /**
     * Main
     */
    try {
      // console.time("aggregate");

      var isRT = (_.has(data, 'retweeted_status'));

      checkIllegalTweet(isRT)

      var tweetData = assign(isRT);

      delete tweetData.entities;

      if(!isRT) {
        insertDB(tweetData);
        // console.timeEnd("aggregate");
        return;
      }

      PostProvider.countDuplicatedPic({
        tweetIdStr: data.retweeted_status.id_str
      }, function(error, docs) {
        if(docs === 0) {
          insertDB(tweetData);
          return;
        }
        var tweetDataForUpdate = _.pick(tweetData, 'tweetIdStr', 'userIcon', 'retweetNum', 'favNum', 'totalNum');
        updateDB(tweetDataForUpdate);
      });

    } catch(e) {
      if(_.isEmpty(e)){
        console.log("=====> throw 以外の予期せぬエラー :: ");
      } else if(_.has(e, "message")) {
        console.log(e.message);
        console.log(e.errorHappendAt.toString());
      } else {
        my.dump(e);
      }
    }
  }
}).call(this);