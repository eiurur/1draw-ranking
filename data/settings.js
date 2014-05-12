(function() {
  /*
   * Twitter
   */
  var tw_consumer_key        = 'YOUR-TWITTER-CONSUMER-KEY'
    , tw_consumer_secret     = 'YOUR-TWITTER-CONSUMER-SERCRET'
    , tw_access_token_key    = 'YOUR-TWITTER-ACCESSTOKEN-KEY'
    , tw_access_token_secret = 'YOUR-TWITTER-ACCESSTOKEN-SERCRET'
    ;

  var Twitter = require('ntwitter');
  exports.twitter = new Twitter({
      consumer_key: tw_consumer_key
    , consumer_secret: tw_consumer_secret
    , access_token_key: tw_access_token_key
    , access_token_secret: tw_access_token_secret
  });

  /*
   * tumblr
   */
  var tum_consumer_key        = 'YOUR-TUMBLR-CONSUMER-KEY'
    , tum_consumer_secret     = 'YOUR-TUMBLR-CONSUMER-SERCRET'
    , tum_access_token_key    = 'YOUR-TUMBLR-ACCESSTOKEN-KEY'
    , tum_access_token_secret = 'YOUR-TUMBLR-ACCESSTOKEN-SERCRET'
    , tumblogName             = 'YOUR-TUMBLOG-NAME'
    ;

  var Tumblr = require('tumblrwks');
  exports.tumblr = new Tumblr({
      consumerKey: tum_consumer_key
    , consumerSecret: tum_consumer_secret
    , accessToken: tum_access_token_key
    , accessSecret: tum_access_token_secret
    }, tumblogName + ".tumblr.com"
    // specify the blog url now or the time you want to use
  );

  /**
   * other
   */
  exports.KEYWORDS = [
      "#ラブライブ版深夜の真剣お絵描き60分一本勝負"
    , "#アイカツ版深夜の真剣お絵描き60分一本勝負"
    , "#艦これ版深夜の真剣お絵描き60分一本勝負"
    , "#ゆるゆり版深夜の真剣お絵描き60分一本勝負"
    , "#モバマス版深夜の真剣お絵かき60分1本勝負"
    , "#ミリマス版深夜の真剣お絵描き60分一本勝負"
  ];
  exports.CATEGORIES = [
      "lovelive"
    , "aikatsu"
    , "kancolle"
    , "yuruyuri"
    , "mobamas"
    , "millimas"
  ];
  exports.TAGS = [
      'lovelive!, ラブライブ！, #ラブライブ版深夜の真剣お絵描き60分一本勝負, LL'
    , 'Aikatsu!, アイカツ！, #アイカツ版深夜の真剣お絵描き60分一本勝負, A!'
    , 'kancolle, 艦これ, #艦これ版深夜の真剣お絵描き60分一本勝負, kc'
    , 'yuruyuri, ゆるゆり, #ゆるゆり版深夜の真剣お絵描き60分一本勝負, yy'
    , 'mobamas, モバマス, #モバマス版深夜の真剣お絵かき60分1本勝負, m'
    , 'millimas, ミリマス, #ミリマス版深夜の真剣お絵描き60分一本勝負, mill'
  ];
  exports.NG_USERS  = [
      'kankorefanz'
    , 'A867997426'
    , 'happy_botom'
    , 'xoharceykv'
    , 'Yz028'
    , 'mu_minmin7'
    , 'pa_bot_b'
    , 'abc15216954'
    , 'wycejezevix'
    , 'kanmusu_love'
    , 'tanaka1hajime'
    , 'rtieQuin'
    , 'yefgenoeyy'
    , 'tocanorohok'
    , 'yefgenoeyy'
    , 'gulijaweweh'
    , 'hycipovujory'
    , 'nytekuhigem'
    , 'tanaka1192www'
    , 'yaketa_maguro'
    , 'paaaa_bot'
    , 'paaaaaaaa_bot'
    , 'fabotter_m_bot'
    , 'kankore_best'
    , 'kankore_best2'
    , 'pa_bot_12'
    , 'nasubichan_bot'
    , 'paa_aaa'
    , 'paaaaaa_bot'
    , 'asamade_tweet'
    , 'aoba_mimashita'
    , 'anime_life_'
    , 'BOT04861474'
    , 'arienai_www_bot'
    , 'pa_bot_pa'
    , 'gazo_takuhai'
    , 'kankore_tweet'
    , 'love_live_123'
    , 'hakkutuw_w'
    , 'kankoreyasumi'
  ];
}).call(this);