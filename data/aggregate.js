(function() {
  var dir          = '../lib/'
    , my           = require(dir + 'my')
    , exception    = require(dir + 'exception')
    , _            = require('lodash')
    , moment       = require('moment')
    , cd           = require(dir + 'corresponddate')
    , PostProvider = require(dir + 'model').PostProvider
    , settings     = process.env.NODE_ENV === "production" ? require(dir + "production") : require(dir + "development")
    ;

  exports.aggregate = function (data) {

    // my.dump(data);

    /**
     * init
     */
    var tweetUrl, sourceUrl, caption, tags, category, isUnofficialRT, hashtag, linkUrl, correspondDate, correspondTime, mc;

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
    // TODO: Assignから、getに変更
    var assingHashtag = function() {
      _.each(data.entities.hashtags, function(val){
        var idx = _.indexOf(settings.KEYWORDS, "#"+val.text);
        if(idx === -1) return; // is equivalent a continue of for or while
        hashtag = settings.KEYWORDS[idx];
      });
    };

    // TODO: getCategory と getTagsに分割。・
    // TODO: idxを取得する関数を別に作って、mainの部分で取得しておき、引数として渡す。
    var assingCategoryAndTags = function() {
      // Tumblrに投稿するためのタグと、index.jadeに表示するカラムの判定用のカテゴリをここで決定する。
      var idx  = _.indexOf(settings.KEYWORDS, hashtag);
      category = settings.CATEGORIES[idx];
      tags     = settings.TAGS[idx];
    };

    var assingPictAndSourceUrl = function() {
      if(!_.has(data.entities, 'urls')) throw new exception.TextOnlyTweetException();

      // 画像ファイルの種類を判定(media === pic.twitter(公式). urls === twitpic, twipple, other)
      if(_.has(data.entities, 'media')) {

        // tumblrの投稿テキストに有効なツイッター公式の画像リンク(pic.twitter)が含まれていた場合
        if(!_.isEmpty(data.entities.urls)) throw new exception.UrlException();

        // twitter公式
        tweetUrl  = data.entities.media[0].display_url;
        sourceUrl = data.entities.media[0].media_url + ':orig';
        return;
      }

      if(twitpic_pict_pattern.test(data.entities.urls[0].display_url)) {
        tweetUrl  = data.entities.urls[0].expanded_url;
        sourceUrl = data.entities.urls[0].expanded_url.replace("twitpic.com/", "twitpic.com/show/full/");
      } else if(twipple_pict_pattern.test(data.entities.urls[0].display_url)) {
        tweetUrl  = data.entities.urls[0].expanded_url;
        sourceUrl = data.entities.urls[0].expanded_url.replace('twipple.jp/','twipple.jp/show/large/');
      } else {

        // 外部サービスリンク付き投稿、 twitter.com/〇〇とかの引用ツイートもここで例外として処理する
        throw new exception.UrlException();
      }
    };

    var assingDateAndTime = function(created_at) {
      var endUnixTime;
      var createdHm = moment(created_at).format("HH:mm");
      var createdYMD = moment(created_at).format("YYYY-MM-DD");
      var createdYMDHm = moment(created_at).format("YYYY-MM-DD HH:mm");
      var nowUnixTime = ~~(new Date/1000);
      mc = moment(created_at).format("YYYY-MM-DD HH:mm:ss");

      // TODO  ひとつにしたい。
      // TODO: correspondDate, correspondTime、mcをオブジェクトの形でreturnする関数にしたい。
      // TODO: 関数名もassignDateAndTimeから、get~に変更
      // TODO: 例外チェック部分は別の関数に分割する。
      if(category === 'lovelive') {
        if(createdHm < "23:30") {

          // 日を跨いだ投稿 == dayが締め切りの日
          endUnixTime = my.formatX(createdYMD + " 23:30:00");
          correspondDate = moment(createdYMDHm).add('days', -1).format("YYYY-MM-DD");
          correspondTime = createdYMDHm;
        } else {

          // => dayの次の日の23:30が締め切り
          endUnixTime = my.formatX(createdYMD + " 23:30:00") + 24 * 60 * 60;
          correspondDate = createdYMD;
          correspondTime = createdYMDHm;
        }

        // 開始時刻(UNIXTIME) - 締め切り(UNIXTIME) > 0 => 集計時間外
        // 締め切りが過ぎている投稿は換算しない
        if((nowUnixTime - endUnixTime) > 0)　throw new exception.deadlinePassed();
      } else {
        if(createdHm < "22:00") {

          // 日を跨いだ投稿 == dayが締め切りの日
          endUnixTime = my.formatX(createdYMD + " 22:00:00");
          correspondDate = moment(createdYMDHm).add('days', -1).format("YYYY-MM-DD");
          correspondTime = createdYMDHm;
        } else {

          // => dayの次の日の22:00が締め切り
          endUnixTime = my.formatX(createdYMD + " 22:00:00") + 24 * 60 * 60;
          correspondDate = createdYMD;
          correspondTime = createdYMDHm;
        }

        // 開始時刻(UNIXTIME) - 締め切り(UNIXTIME) > 0 => 集計時間外
        // 締め切りが過ぎている投稿は換算しない
        if((nowUnixTime - endUnixTime) > 0) throw new exception.deadlinePassed();
      }
    }

    var insertDB = function(params){

      PostProvider.save({
          tweetIdStr: params['tweetIdStr']
        , userIdStr: params['userIdStr']
        , userScreenName: params['userScreenName']
        , userName: params['userName']
        , tweetText: params['tweetText']
        , tweetUrl: params['tweetUrl']
        , sourceUrl: params['sourceUrl']
        , category: params['category']
        , tags: params['tags']
        , retweetNum: params['retweetNum']
        , favNum: params['favNum']
        , totalNum: params['totalNum']
        , createdAt: mc
        , correspondDate: params['correspondDate']
        , correspondTime: params['correspondTime']
      }, function(error, docs) {
          // console.log("okk mc = " + mc);
          // my.dump(picWidth);
      });
    }

    // 艦これ画像botが多すぎて対処しきれないのでワイルドカードで一掃
    var excludeNGUser = function(screenName) {
      _.each(settings.NG_USERS, function(name) {
        if(screenName.indexOf(name) !== -1) throw new exception.NGUserException();
      });
    };

    // 直リン天転載画像ツイートは除外
    var excludeDuplicatedTweetWithImage = function(userIdStr) {
      PostProvider.findOneDuplicatedTweetWithImage({
        sourceUrl: sourceUrl
      }, function(error, doc) {
        try {
          // 新規ツイート
          if(_.isUndefined(doc[0])) return false;

          // 転載ツイート
          if(doc[0].userIdStr !== userIdStr) {
            console.log("\n==========\n");
            console.log("userIdStr = " + userIdStr);
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
      if(!_.has(data, 'text')) throw new exception.NoTextTweetException();
      if(!_.has(data.entities, 'hashtags')) throw new exception.NoHashtagsTweetException();

      linkUrl = data.text.match(twitter_short_url_pattern);
      if(_.isNull(linkUrl)) throw new exception.TextOnlyTweetException();

      assingHashtag();
      assingCategoryAndTags();
      assingPictAndSourceUrl();


      // TODO: retweetStatusと新規ツイートを一緒たくにする関数をmy.jsに書く。(flflのあれを　参考にして)
      if(_.has(data, 'retweeted_status')) {

        excludeNGUser(data.retweeted_status.user.screen_name);

        excludeDuplicatedTweetWithImage(data.retweeted_status.user.id_str);

        isUnofficialRT = rt_exclude_pattern.test(data.retweeted_status.text);
        if(isUnofficialRT) throw new exception.isUnofficialRTException();

        // 元ツイートの投稿時刻と締め切り時刻を取得し、変数に代入
        assingDateAndTime(data.retweeted_status.created_at);

        // 重複の確認
        PostProvider.countDuplicatedPic({
          tweetIdStr: data.retweeted_status.id_str
        }, function(error, docs) {
          if(docs === 0) {
            insertDB({
                entities: data.retweeted_status.entities
              , tweetIdStr: data.retweeted_status.id_str
              , userIdStr: data.retweeted_status.user.id_str
              , userScreenName: data.retweeted_status.user.screen_name
              , userName: data.retweeted_status.user.name
              , tweetText: data.retweeted_status.text
              , tweetUrl: tweetUrl
              , sourceUrl: sourceUrl
              , category: category
              , tags: tags
              , retweetNum: data.retweeted_status.retweet_count
              , favNum: data.retweeted_status.favorite_count
              , totalNum: data.retweeted_status.retweet_count + data.retweeted_status.favorite_count
              , createdAt: mc
              , correspondDate: correspondDate
              , correspondTime: correspondTime
            });
          } else {

            // リツイート数とお気に入り数を更新
            PostProvider.update({
              tweetIdStr: data.retweeted_status.id_str,
              retweetNum: data.retweeted_status.retweet_count,
              favNum: data.retweeted_status.favorite_count,
              totalNum: data.retweeted_status.retweet_count + data.retweeted_status.favorite_count
            }, function(error, docs) {
              // console.log(category + " retweet UPDATTE OK = " + data.retweeted_status.text);
            });
          }
        });
      } else {

        excludeNGUser(data.user.screen_name);

        excludeDuplicatedTweetWithImage(data.user.id_str);

        isUnofficialRT = rt_exclude_pattern.test(data.text);
        if(isUnofficialRT) throw new exception.isUnofficialRTException();

        assingDateAndTime(data.created_at);

        console.log("\nTW者: " + data.user.screen_name + "  -  カテゴリ:  " + category + "\n");

        insertDB({
            entities: data.entities
          , tweetIdStr: data.id_str
          , userIdStr: data.user.id_str
          , userScreenName: data.user.screen_name
          , userName: data.user.name
          , tweetText: data.text
          , tweetUrl: tweetUrl
          , sourceUrl: sourceUrl
          , category: category
          , tags: tags
          , retweetNum: data.retweet_count
          , favNum: data.favorite_count
          , totalNum: data.retweet_count + data.favorite_count
          , createdAt: mc
          , correspondDate: correspondDate
          , correspondTime: correspondTime
        });
      }
    } catch(e) {

      // typeof e === object
      if(_.isEmpty(e)){

        // throwした以外の予期せぬエラーはこちらで吐出する
        console.log("空");
        console.log(e);
      } else if(_.has(e, "message")) {

        // 手動で埋め込んだエラー
        console.log(e.message);
        console.log(e.errorHappendAt.toString());
      } else {
        my.dump(e);
      }
    }
  }
}).call(this);