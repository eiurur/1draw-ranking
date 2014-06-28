(function() {
  var ml        = require('./lib')
    , exception = require('./exception')
    , _         = require('underscore-node')
    , php       = require('phpjs')
    , moment    = require('moment')
    , cd        = require('./corresponddate')
    , settings  = process.env.NODE_ENV === "production" ? require("./production") : require("./development")
    ;

  //====== Mongoose object =======//
  var PostProvider = require('./model').PostProvider;

  exports.aggregate = function (data) {

    console.log("-----------------------------------");

    // ml.dump(data);

    /**
     * マジックナンバー
     */
    var numRTOfPost2Tumblr = 15
      , oneDayUnixTime     = 24 * 60 * 60
      , displaySizeHeight  = 300
      ;

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
     * init
     */
    var tweetUrl, sourceUrl, caption, tags, category, isUnofficialRT, hashtag, linkUrl, startUnixTime, nowUnixTime, correspondDate, correspondTime, created_at, tweetTime, mc;

    /**
     * Method list
     */
    var assingHashtag = function() {
      data.entities.hashtags.forEach(function(val){
        var idx = _.indexOf(settings.KEYWORDS, "#"+val.text);
        if(idx === -1) return; // is equivalent a continue of for or while
        hashtag = settings.KEYWORDS[idx];
      });
    };

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

    var assingDateAndTime = function() {
      var post_date, date, year, day, hour, minute;

      // 投稿日時変換 "Mon Dec 01 14:24:26 +0000 2008" -> "Dec 01, 2008 14:24:26"
      post_date  = tweetTime[1] + " "
                 + tweetTime[2] + ", "
                 + tweetTime[5] + " "
                 + tweetTime[3];

      // 日時データ処理
      date   = new Date(post_date);       // 日付文字列 -> オブジェクト変換
      date.setHours(date.getHours() + 9); // UTC -> JST (+9時間)
      year   = date.getFullYear();

      // 0詰めにしないと時刻の比較でバグる
      // (ex)
      // console.log("05:23" < "23:30"); => true
      // console.log("5:23" < "23:30");  => false
      month  = ("0"+(date.getMonth() + 1)).slice(-2);
      day    = ("0"+date.getDate()).slice(-2);
      hour   = ("0"+date.getHours()).slice(-2);
      minute = ("0"+date.getMinutes()).slice(-2);

      // ツイート投稿日時のオブジェクトを作成し、
      var m = moment(year + "-" + month + "-" + day + " " + hour + ":" + minute);

      // 複製する。複製せず、単一のオブジェクトで該当日(correspondDate)とツイート投稿日時用にそれぞれ加工しても
      // 参照は同じものであるため、加工処理が両方に加わり、期待の結果を得ることができない。なので複製。
      var momentCreateAt = m.clone();
      mc = momentCreateAt.format("YYYY-MM-DD HH:mm");

      nowUnixTime = ~~(new Date/1000);

      if(category === 'lovelive') {

        // 23:30 スタート
        if(hour + ":" + minute < "23:30") {

          // 日を跨いだ投稿 == dayが締め切りの日
          endUnixTimeL = php.strtotime(year + "-" + month + "-" + day + " 23:30:00");

          // 別のオブジェクトをそれぞれ使用しないと全く同じ値が代入される。
          // たとえ、addをする順番を変えてもそれは変わらない。
          // MongoDBにcreateed_atを渡してもになぜ保存されないので、created_atの代わりにcorrespondTimeを使用する。
          correspondDate = m.add('days', -1).format("YYYY-MM-DD");
          correspondTime = momentCreateAt.format("YYYY-MM-DD HH:mm");
        } else {

          // => dayの次の日の23:30が締め切り
          endUnixTimeL = php.strtotime(year + "-" + month + "-" + day + " 23:30:00") + 24 * 60 * 60
          correspondDate = m.format("YYYY-MM-DD");
          correspondTime = momentCreateAt.format("YYYY-MM-DD HH:mm");
        }

        // 開始時刻(UNIXTIME) - 締め切り(UNIXTIME) > 0 => 集計時間外
        // 締め切りが過ぎている投稿は換算しない
        if((nowUnixTime - endUnixTimeL) > 0)　throw new exception.deadlinePassed();
      } else {

        // 22:00 スタート
        if(hour < 22) {

          // 日を跨いだ投稿 == dayが締め切りの日
          endUnixTimeKYA = php.strtotime(year + "-" + month + "-" + day + " 22:00:00");
          var m = moment(year + "-" + month + "-" + day + " " + hour + ":" + minute);
          correspondDate = m.add('days', -1).format("YYYY-MM-DD");
          correspondTime = momentCreateAt.format("YYYY-MM-DD HH:mm");
        } else {

          // => dayの次の日の22:00が締め切り
          endUnixTimeKYA = php.strtotime(year + "-" + month + "-" + day + " 22:00:00") + 24 * 60 * 60
          var m = moment(year + "-" + month + "-" + day + " " + hour + ":" + minute);
          correspondDate = m.format("YYYY-MM-DD");
          correspondTime = momentCreateAt.format("YYYY-MM-DD HH:mm");
        }

        // 開始時刻(UNIXTIME) - 締め切り(UNIXTIME) > 0 => 集計時間外
        // 締め切りが過ぎている投稿は換算しない
        if((nowUnixTime - endUnixTimeKYA) > 0) throw new exception.deadlinePassed();
      }
    }

    var insertDB = function(params){

      // 公式画像のみサイズを取得して、横サイズの比率ごとの縦サイズを保存する。
      // twitpicなどの外部サービスを利用した投稿画像は取得できないので分岐。
      // picWidthが空なら600に自動で補完する処理をapi.jsで行うため、こちらで書く必要はない。
      var picWidth = {};

      // 外部サービスはmediaプロパティがない
      if(_.has(params['entities'], 'media')) {

        // twitter公式
        if(_.has(params['entities'].media[0], "sizes")) {
          console.log("siiiiiiiiiiiiiiiiiiiiiiiiize");

          var mW = params['entities'].media[0].sizes.medium.w
            , mH = params['entities'].media[0].sizes.medium.h
            ;
          picWidth.height150 = Math.ceil(mW * (150 / mH));
          picWidth.height200 = Math.ceil(mW * (200 / mH));
          picWidth.height250 = Math.ceil(mW * (250 / mH));
          picWidth.height300 = Math.ceil(mW * (300 / mH));
          picWidth.height350 = Math.ceil(mW * (350 / mH));
          picWidth.height400 = Math.ceil(mW * (400 / mH));
        }
      }
      PostProvider.save({
          tweetId: params['tweetId']
        , userId: params['userId']
        , userName: params['userName']
        , tweetText: params['tweetText']
        , tweetUrl: params['tweetUrl']
        , sourceUrl: params['sourceUrl']
        , category: params['category']
        , tags: params['tags']
        , retweetNum: params['retweetNum']
        , favNum: params['favNum']
        , totalNum: params['totalNum']
        , picWidths: picWidth
        , createdAt: mc
        , correspondDate: params['correspondDate']
        , correspondTime: params['correspondTime']
      }, function(error, docs) {
          console.log("okk mc = " + mc);
          ml.dump(picWidth);
      });
    }

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

      if(_.has(data, 'retweeted_status')) {

        if(_.contains(settings.NG_USERS, data.retweeted_status.user.screen_name)) throw new exception.NGUserException();

        isUnofficialRT = rt_exclude_pattern.test(data.retweeted_status.text);
        if(isUnofficialRT) throw new exception.isUnofficialRTException();

        ml.cl("RT数  " + data.retweeted_status.retweet_count);
        ml.cl("fav数 " + data.retweeted_status.favorite_count);
        ml.cl("RT元  " + data.retweeted_status.user.screen_name);

        // 日時データを要素分解
        tweetTime = data.retweeted_status.created_at.split(" ");

        // 元ツイートの投稿時刻と締め切り時刻を取得し、変数に代入
        assingDateAndTime();

        // 重複の確認
        PostProvider.countDuplicatedPic({
          tweetId: data.retweeted_status.id
        }, function(error, docs) {
          console.log("pic num = " + docs + " doc typeof = " + typeof docs);
          if(docs === 0) {
            console.log("INSERT DB");
            insertDB({
                entities: data.retweeted_status.entities
              , tweetId: data.retweeted_status.id
              , userId: data.retweeted_status.user.screen_name
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
              tweetId: data.retweeted_status.id,
              retweetNum: data.retweeted_status.retweet_count,
              favNum: data.retweeted_status.favorite_count,
              totalNum: data.retweeted_status.retweet_count + data.retweeted_status.favorite_count
            }, function(error, docs) {
              console.log(category + " retweet UPDATTE OK = " + data.retweeted_status.text);
            });
          }
        });
      } else {

        // Nブラックリスト入りのユーザは除外
        if(_.contains(settings.NG_USERS, data.user.screen_name)) throw new exception.NGUserException();

        // 非公式RTは除外
        isUnofficialRT = rt_exclude_pattern.test(data.text);
        if(isUnofficialRT) throw new exception.isUnofficialRTException();

        tweetTime = data.created_at.split(" ");

        assingDateAndTime();

        console.log("## Lets New Save to MongoDB");
        console.log(category + " original INSERT OK = " + data.user.screen_name + " :  " + data.text);

        insertDB({
            entities: data.entities
          , tweetId: data.id
          , userId: data.user.screen_name
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
        ml.dump(e);
      }
    }
  }
}).call(this);