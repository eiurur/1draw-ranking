(function() {
  /*
   * Twitter
   */
  var TW_CONSUMER_KEY        = process.env.TW_CONSUMER_KEY
    , TW_CONSUMER_SECRET     = process.env.TW_CONSUMER_SECRET
    , TW_ACCESS_TOKEN_KEY    = process.env.TW_ACCESS_TOKEN_KEY
    , TW_ACCESS_TOKEN_SECRET = process.env.TW_ACCESS_TOKEN_SECRET
    , CALLBACK_URL           = process.env.CALLBACK_URL
    ;

  var Twitter = require('ntwitter');
  exports.twitter = new Twitter({
      consumer_key: TW_CONSUMER_KEY
    , consumer_secret: TW_CONSUMER_SECRET
    , access_token_key: TW_ACCESS_TOKEN_KEY
    , access_token_secret: TW_ACCESS_TOKEN_SECRET
  });

  var TwitterAPI = require('node-twitter-api');
  exports.twitterAPI = new TwitterAPI({
      consumerKey: TW_CONSUMER_KEY
    , consumerSecret: TW_CONSUMER_SECRET
    , callback: CALLBACK_URL
  });


  /*
   * tumblr
   */
  var TUM_CONSUMER_KEY        = process.env.TUM_CONSUMER_KEY
    , TUM_CONSUMER_SECRET     = process.env.TUM_CONSUMER_SECRET
    , TUM_ACCESS_TOKEN_KEY    = process.env.TUM_ACCESS_TOKEN_KEY
    , TUM_ACCESS_TOKEN_SECRET = process.env.TUM_ACCESS_TOKEN_SECRET
    , TUMBLOG_NAME            = process.env.TUMBLOG_NAME
    ;

  var Tumblr = require('tumblrwks');
  exports.tumblr = new Tumblr({
      consumerKey: TUM_CONSUMER_KEY
    , consumerSecret: TUM_CONSUMER_SECRET
    , accessToken: TUM_ACCESS_TOKEN_KEY
    , accessSecret: TUM_ACCESS_TOKEN_SECRET
    }, TUMBLOG_NAME + ".tumblr.com"
  );

  /**
   * other
   */
  exports.COOKIE_SECRET      = process.env.COOKIE_SECRET;
  exports.TW_CONSUMER_KEY    = TW_CONSUMER_KEY;
  exports.TW_CONSUMER_SECRET = TW_CONSUMER_SECRET;
  exports.CALLBACK_URL       = CALLBACK_URL;

  exports.KEYWORDS = [
      "#ラブライブ版深夜の真剣お絵描き60分一本勝負"
    , "#アイカツ版深夜の真剣お絵描き60分一本勝負"
    , "#艦これ版深夜の真剣お絵描き60分一本勝負"
    , "#ゆるゆり版深夜の真剣お絵描き60分一本勝負"
    , "#モバマス版深夜の真剣お絵かき60分1本勝負"
    , "#ミリマス版深夜の真剣お絵描き60分一本勝負"
    , "#深夜の真剣お絵描き60分一本勝負"
    , "#ボカロ版深夜の真剣お絵描き60分一本勝負"
    , "#まどマギ版真剣深夜のお絵かき60分一本勝負"
    , "#アイギス版深夜の真剣お絵描き60分一本勝負"
  ];

  exports.CATEGORIES = [
      "lovelive"
    , "aikatsu"
    , "kancolle"
    , "yuruyuri"
    , "mobamas"
    , "millimas"
    , "toho"
    , "vocaloid"
    , "madomagi"
    , "aigis"
  ];

  exports.TAGS = [
      'lovelive!, ラブライブ！, #ラブライブ版深夜の真剣お絵描き60分一本勝負, LL'
    , 'Aikatsu!, アイカツ！, #アイカツ版深夜の真剣お絵描き60分一本勝負, A!'
    , 'kancolle, 艦これ, #艦これ版深夜の真剣お絵描き60分一本勝負, kc'
    , 'yuruyuri, ゆるゆり, #ゆるゆり版深夜の真剣お絵描き60分一本勝負, yy'
    , 'mobamas, モバマス, #モバマス版深夜の真剣お絵かき60分1本勝負, m'
    , 'millimas, ミリマス, #ミリマス版深夜の真剣お絵描き60分一本勝負, mill'
    , 'toho, 東方, #深夜の真剣お絵描き60分一本勝負, t'
    , 'vocaloid, ボカロ, #ボカロ版深夜の真剣お絵描き60分一本勝負, v'
    , 'madomagi, まどマギ, #まどマギ版真剣夜のお絵かき60分一本勝負, madomagi'
    , 'aigis, アイギス, #アイギス版深夜の真剣お絵描き60分一本勝負, aigis'
  ];

  exports.NG_TAGS = [
    '#艦これ版 '
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
    , 'renitks0102'
    , 'kkazuha0705'
    , 'oekaki_bott'
    , 'aoaoaowww'
    , 'paa_aa_a'
    , 'Leonora1019'
    , 'chuni_kusuguru'
    , '1000favimage'
    , 'alilqome'
    , 'kan__kore'
    , '3000favo_'
    , 'kaizokuouni_'
    , 'kankore_fan_'
    , 'kankore_fan'
    , '1000favs_RT_'
    , 'nowtsu'
    , 'tomarisan_bot'
    , '2000fav'
    , 'kankore_akagi'
    , 'kankore_pic'
    , 'kankore_pics'
    , 'kankore_picture'
    , 'kankore_pictures'
    , 'kankore_img'
    , 'kankore_image'
    , 'kankore_images'
    , 'kantai_maniax'
    , 'nakata1129'
    , 'money_money_8'
    , 'kankore_ch'
    , 'anime_daishugo'
    , 'kankore_news_'
    , 'kankore_gazo'
    , 'fav01tw'
    , 'paaaah_paaaah'
    , 'kankore'
    , 'kancolle'
    , '_bot'
    , 'hushhushbee'
    , 'paa_'
    , 'kanmusu'
    , 'gazo'
    , '2000gogogogo'
    , '2000'
    , '1000'
    , '500'
    , 'jojorenabyl'
    , 'Laugh7s'
    , 'mikanko794'
    , 'love_live_suki'
    , 'love_live'
    , 'lovelive'
    , 'fav'
    , 'raburaibu'
    , 'warai'
    , 'helpfive'
    , 'outluy'
    , 'bokebokepic'
    , 'chaos_black_ww'
    , 'pic'
    , 'namae098333'
    , 'xTELVAx'
    , 'movie_world_cup'
    , 'twisukiz'
    , '0000ouenbot'
    , 'bakusyouneta'
    , 'senju723'
    , 'zerranuu09'
    , 'neytharibert'
    , 'kaputibot'
    , 'giddayjp03'
    , 'xyhdths'
  ];
}).call(this);