(function() {
  var dir          = '../lib/'
    , _            = require('lodash')
    , moment       = require('moment')
    , my           = require(dir + 'my')
    , exception    = require(dir + 'exception')
    , cd           = require(dir + 'corresponddate')
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
      }
      , hashtagIdx: function(hashtag) {
        return _.indexOf(settings.KEYWORDS, hashtag);
      }
      , deadline: function(category) {
        deadline = _.find(settings.DEADLINES, {'category': category});
        return (_.isUndefined(deadline)) ? '22:00' : deadline.time;
      }
    };

    var normalize = {
      category: function(idx) {
        return settings.CATEGORIES[idx];
      }
      , tags: function(idx) {
        return settings.TAGS[idx];
      }
      , tweetUrl: function(entities) {

        // 画像ファイルの種類を判定(media === pic.twitter(公式). urls === twitpic, twipple, other)
        if(_.has(entities, 'media')) return entities.media[0].display_url;
        if(twitpic_pict_pattern.test(entities.urls[0].display_url) || twipple_pict_pattern.test(entities.urls[0].display_url)) {
          return entities.urls[0].expanded_url;
        }
        throw new exception.UrlException();
      }
      , sourceUrl: function(entities) {
        if(_.has(entities, 'media')) return entities.media[0].media_url + ':orig';
        if(twitpic_pict_pattern.test(entities.urls[0].display_url)) {
          return entities.urls[0].expanded_url.replace('twitpic.com/', 'twitpic.com/show/full/');
        }
        if(twipple_pict_pattern.test(entities.urls[0].display_url)) {
          return entities.urls[0].expanded_url.replace('twipple.jp/','twipple.jp/show/large/');
        }
        throw new exception.UrlException();
      }
      , postTime: function(category, created_at) {
        var createdHm      = my.formatHm(created_at);
        var createdYMD     = my.formatYMD(created_at);
        var createdYMDHm   = my.formatYMDHm(created_at);
        var deadline       = get.deadline(category);

        var createdAt      = my.formatYMDHms;
        var correspondDate = (createdHm < deadline) ? moment(createdYMDHm).add('days', -1).format("YYYY-MM-DD") : createdYMD;
        var correspondTime = createdYMDHm;
        return {
            createdAt: createdAt
          , correspondDate: correspondDate
          , correspondTime: correspondTime
        };
      }
    };

    var checkIllegalTweet = function(isRT) {
      if(!_.has(data, 'text')) throw new exception.NoTextTweetException();
      if(!_.has(data.entities, 'hashtags')) throw new exception.NoHashtagsTweetException();

      linkUrl = data.text.match(twitter_short_url_pattern);
      if(_.isNull(linkUrl)) throw new exception.TextOnlyTweetException();

      excludeNGUser(my.getTweetData(data, 'screen_name', isRT));
      // excludeDuplicatedTweetWithImage(my.getTweetData(data, 'user.id_str', isRT), normalize.sourceUrl(my.getTweetData(data, 'entities', isRT)));

      isUnofficialRT = rt_exclude_pattern.test(my.getTweetData(data, 'text', isRT));
      if(isUnofficialRT) throw new exception.isUnofficialRTException();

      if(!_.has(data.entities, 'urls')) throw new exception.TextOnlyTweetException();

      // tumblrの投稿テキストに有効なツイッター公式の画像リンク(pic.twitter)が含まれていた場合(ex: 1draw-laykの画像がリブログされたときとか)
      if(!_.isEmpty(data.entities.urls)) throw new exception.UrlException();
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

    var insertDB = function(params){
      PostProvider.save({
          tweetIdStr: params.tweetIdStr
        , userIdStr: params.userIdStr
        , userScreenName: params.userScreenName
        , userName: params.userName
        , tweetText: params.tweetText
        , tweetUrl: params.tweetUrl
        , sourceUrl: params.sourceUrl
        , category: params.category
        , tags: params.tags
        , retweetNum: params.retweetNum
        , favNum: params.favNum
        , totalNum: params.totalNum
        , createdAt: params.createdAt
        , correspondDate: params.correspondDate
        , correspondTime: params.correspondTime
      }, function(error, docs) {});
    }

    var excludeNGUser = function(screenName) {
      _.each(settings.NG_USERS, function(name) {
        if(screenName.indexOf(name) !== -1) throw new exception.NGUserException();
      });
    };

    var excludeDuplicatedTweetWithImage = function(userIdStr, sourceUrl) {
      PostProvider.findOneDuplicatedTweetWithImage({
        sourceUrl: sourceUrl
      }, function(error, doc) {
        try {
          // 新規ツイート
          if(_.isUndefined(doc[0])) return false;

          // 転載ツイート
          if(doc[0].userIdStr !== userIdStr) {
            console.log("\n==========\n");
            console.log("転載元 userIdStr = " + doc[0].userIdStr);
            console.log("転載者 userIdStr = " + userIdStr);
            console.log("sourceUrl = " + sourceUrl);
            throw new exception.DuplicatedTweetWithImage();
          }
        } catch (e) {
          if(_.has(e, "message")) {
            console.log(e.message);
            console.log(e.errorHappendAt.toString());
          } else {
            my.dump(e);
          }
        }
      });
    };

    /**
     * Main
     */
    try {
      console.time("aggregate");

      var isRT, tweetData, tweetDataForUpdate;
      isRT = (_.has(data, 'retweeted_status'));

      checkIllegalTweet(isRT)

      tweetData = assign(isRT);

      console.log('\n=======> ', tweetData.category);
      console.log(tweetData.correspondDate);
      console.log(tweetData.correspondTime);

      if(!isRT) {
        console.log("\nTW者: " + data.user.screen_name + "  -  カテゴリ:  " + tweetData.category + "\n");
        insertDB(tweetData);
        console.timeEnd("aggregate");
        return;
      }

      PostProvider.countDuplicatedPic({
        tweetIdStr: data.retweeted_status.id_str
      }, function(error, docs) {
        if(docs === 0) {
          insertDB(tweetData);
          return;
        }
        tweetDataForUpdate = _.pick(tweetData, 'tweetIdStr', 'retweetNum', 'favNum', 'totalNum');
        PostProvider.update(tweetDataForUpdate, function(error, docs) {});
        console.timeEnd("aggregate");

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