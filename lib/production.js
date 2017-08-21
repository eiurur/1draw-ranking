(function() {
  /*
   * Twitter
   */
  var TW_CONSUMER_KEY = process.env.TW_CONSUMER_KEY,
    TW_CONSUMER_SECRET = process.env.TW_CONSUMER_SECRET,
    TW_ACCESS_TOKEN_KEY = process.env.TW_ACCESS_TOKEN_KEY,
    TW_ACCESS_TOKEN_SECRET = process.env.TW_ACCESS_TOKEN_SECRET,
    CALLBACK_URL = process.env.CALLBACK_URL;

  var Twitter = require("ntwitter");
  exports.twitter = new Twitter({
    consumer_key: TW_CONSUMER_KEY,
    consumer_secret: TW_CONSUMER_SECRET,
    access_token_key: TW_ACCESS_TOKEN_KEY,
    access_token_secret: TW_ACCESS_TOKEN_SECRET
  });

  var Twit = require("twit");
  exports.T = new Twit({
    consumer_key: TW_CONSUMER_KEY,
    consumer_secret: TW_CONSUMER_SECRET,
    access_token: TW_ACCESS_TOKEN_KEY,
    access_token_secret: TW_ACCESS_TOKEN_SECRET
  });

  var TwitterAPI = require("node-twitter-api");
  exports.twitterAPI = new TwitterAPI({
    consumerKey: TW_CONSUMER_KEY,
    consumerSecret: TW_CONSUMER_SECRET,
    callback: CALLBACK_URL
  });

  /*
   * tumblr
   */
  var TUM_CONSUMER_KEY = process.env.TUM_CONSUMER_KEY,
    TUM_CONSUMER_SECRET = process.env.TUM_CONSUMER_SECRET,
    TUM_ACCESS_TOKEN_KEY = process.env.TUM_ACCESS_TOKEN_KEY,
    TUM_ACCESS_TOKEN_SECRET = process.env.TUM_ACCESS_TOKEN_SECRET,
    TUMBLOG_NAME = process.env.TUMBLOG_NAME;

  var tumblr = require("tumblr.js");
  exports.client = tumblr.createClient({
    consumer_key: TUM_CONSUMER_KEY,
    consumer_secret: TUM_CONSUMER_SECRET,
    token: TUM_ACCESS_TOKEN_KEY,
    token_secret: TUM_ACCESS_TOKEN_SECRET
  });
  exports.TUMBLOG_NAME = process.env.TUMBLOG_NAME;

  /**
   * other
   */
  exports.COOKIE_SECRET = process.env.COOKIE_SECRET;
  exports.TW_CONSUMER_KEY = TW_CONSUMER_KEY;
  exports.TW_CONSUMER_SECRET = TW_CONSUMER_SECRET;
  exports.CALLBACK_URL = CALLBACK_URL;

  exports.KEYWORDS_DEFAULT = [
    "#アイカツ版深夜の真剣お絵描き60分一本勝負",
    "#アイカツスターズ版深夜の真剣お絵描き60分一本勝負",
    "#ごちうさ版深夜の真剣お絵描き60分一本勝負",
    "#艦これ版深夜の真剣お絵描き60分一本勝負",
    "#まんがタイムきらら版深夜の真剣お絵描き60分一本勝負",
    "#ラブライブ版深夜の真剣お絵描き60分一本勝負",
    "#まどマギ版真剣深夜のお絵かき60分一本勝負",
    "#ミリマス版深夜の真剣お絵描き60分一本勝負",
    "#モバマス版深夜の真剣お絵かき60分1本勝負",
    "#prpr版深夜の真剣お絵描き60分一本勝負",
    "#ポケモントレーナー版深夜の真剣お絵描き60分一本勝負",
    "#深夜の真剣お絵描き60分一本勝負",
    "#結月ゆかり深夜の真剣お絵描き60分勝負",
    "#ゆゆ式版深夜の真剣お絵描き60分一本勝負"
  ];

  exports.KEYWORDS = [
    "#アイカツ版深夜の真剣お絵描き60分一本勝負",
    "#アイカツスターズ版深夜の真剣お絵描き60分一本勝負",
    "#ごちうさ版深夜の真剣お絵描き60分一本勝負",
    "#艦これ版深夜の真剣お絵描き60分一本勝負",
    "#まんがタイムきらら版深夜の真剣お絵描き60分一本勝負",
    "#ラブライブ版深夜の真剣お絵描き60分一本勝負",
    "#まどマギ版真剣深夜のお絵かき60分一本勝負",
    "#ミリマス版深夜の真剣お絵描き60分一本勝負",
    "#モバマス版深夜の真剣お絵かき60分1本勝負",
    "#prpr版深夜の真剣お絵描き60分一本勝負",
    "#ポケモントレーナー版深夜の真剣お絵描き60分一本勝負",
    "#深夜の真剣お絵描き60分一本勝負",
    "#結月ゆかり深夜の真剣お絵描き60分勝負",
    "#ゆゆ式版深夜の真剣お絵描き60分一本勝負"
  ];

  exports.CATEGORIES_DEFAULT = [
    "aikatsu",
    "aist",
    "gochiusa",
    "kancolle",
    "kirara",
    "lovelive",
    "madomagi",
    "millimas",
    "mobamas",
    "prpr",
    "ptrainer",
    "toho",
    "yukari",
    "yuyusiki"
  ];

  exports.CATEGORIES = [
    "aikatsu",
    "aist",
    "gochiusa",
    "kancolle",
    "kirara",
    "lovelive",
    "madomagi",
    "millimas",
    "mobamas",
    "prpr",
    "ptrainer",
    "toho",
    "yukari",
    "yuyusiki"
  ];

  // こっちはTumblrにポストするときに割り当てるタグぼこと。メイン処理にはかかわらない。
  exports.TAGS = [
    "Aikatsu!, アイカツ！, #アイカツ版深夜の真剣お絵描き60分一本勝負, Aikatsu!",
    "Aist, アイカツスターズ, #アイカツスターズ版深夜の真剣お絵描き60分一本勝負, Aist",
    "gochiusa, ご注文はうさぎですか？, #ごちうさ版深夜の真剣お絵描き60分一本勝負, Gochiusa",
    "kancolle, 艦これ, #艦これ版深夜の真剣お絵描き60分一本勝負, Kancolle",
    "kirara, まんがタイムきらら, #まんがタイムきらら版深夜の真剣お絵描き60分一本勝負, Kirara",
    "lovelive!, ラブライブ！, #ラブライブ版深夜の真剣お絵描き60分一本勝負, Lovelive!",
    "madomagi, まどマギ, #まどマギ版真剣夜のお絵かき60分一本勝負, Madomagi",
    "millimas, ミリマス, #ミリマス版深夜の真剣お絵描き60分一本勝負, Millimas",
    "mobamas, モバマス, #モバマス版深夜の真剣お絵かき60分1本勝負, Mobamasu",
    "prpr, プリパラ, #prpr版深夜の真剣お絵描き60分一本勝負, Prpr",
    "ptrainer, ポケモントレーナー, #ポケモントレーナー版深夜の真剣お絵描き60分一本勝負, Ptrainer",
    "toho, 東方, #深夜の真剣お絵描き60分一本勝負, Toho",
    "yukari, 結月ゆかり, #結月ゆかり深夜の真剣お絵描き60分勝負, Yukari",
    "yuyusiki, ゆゆ式, #ゆゆ式版深夜の真剣お絵描き60分一本勝負, Yuyusiki"
  ];

  exports.DEADLINES = [
    {
      category: ["3puzz", "futakuti", "jojo", "t7s"],
      time: "21:00"
    },
    {
      category: ["horimiya", "inazuma", "gf", "yuyuyu"],
      time: "22:30"
    },
    {
      category: [
        "arato",
        "bf",
        "dairoku",
        "doremi",
        "exo",
        "gs",
        "hikei",
        "jingai",
        "lovelive",
        "magi",
        "ph",
        "pzdr",
        "ronpa",
        "t2",
        "utapuri",
        "yukari",
        "ywpd",
        "zuikaga"
      ],
      time: "23:00"
    },
    {
      category: ["akaga", "isehyuga", "ookita", "souhi", "suzukuma", "vvv"],
      time: "23:30"
    }
  ];

  exports.NG_TAGS = ["#艦これ版 "];

  exports.NG_USERS = [
    "kankorefanz",
    "A867997426",
    "happy_botom",
    "xoharceykv",
    "Yz028",
    "mu_minmin7",
    "pa_bot_b",
    "abc15216954",
    "wycejezevix",
    "kanmusu_love",
    "tanaka1hajime",
    "rtieQuin",
    "yefgenoeyy",
    "tocanorohok",
    "yefgenoeyy",
    "gulijaweweh",
    "hycipovujory",
    "nytekuhigem",
    "tanaka1192www",
    "yaketa_maguro",
    "paaaa_bot",
    "paaaaaaaa_bot",
    "fabotter_m_bot",
    "kankore_best",
    "kankore_best2",
    "pa_bot_12",
    "nasubichan_bot",
    "paa_aaa",
    "paaaaaa_bot",
    "asamade_tweet",
    "aoba_mimashita",
    "anime_life_",
    "BOT04861474",
    "arienai_www_bot",
    "pa_bot_pa",
    "gazo_takuhai",
    "kankore_tweet",
    "love_live_123",
    "hakkutuw_w",
    "kankoreyasumi",
    "renitks0102",
    "kkazuha0705",
    "oekaki_bott",
    "aoaoaowww",
    "paa_aa_a",
    "Leonora1019",
    "chuni_kusuguru",
    "1000favimage",
    "alilqome",
    "kan__kore",
    "3000favo_",
    "kaizokuouni_",
    "kankore_fan_",
    "kankore_fan",
    "1000favs_RT_",
    "nowtsu",
    "tomarisan_bot",
    "2000fav",
    "kankore_akagi",
    "kankore_pic",
    "kankore_pics",
    "kankore_picture",
    "kankore_pictures",
    "kankore_img",
    "kankore_image",
    "kankore_images",
    "kantai_maniax",
    "nakata1129",
    "money_money_8",
    "kankore_ch",
    "anime_daishugo",
    "kankore_news_",
    "kankore_gazo",
    "fav01tw",
    "paaaah_paaaah",
    "kankore",
    "kancolle",
    "_bot",
    "hushhushbee",
    "paa_",
    "kanmusu",
    "gazo",
    "2000gogogogo",
    "2000",
    "1000",
    "500",
    "jojorenabyl",
    "Laugh7s",
    "mikanko794",
    "love_live_suki",
    "love_live",
    "lovelive",
    "fav",
    "raburaibu",
    "warai",
    "helpfive",
    "outluy",
    "bokebokepic",
    "chaos_black_ww",
    "pic",
    "namae098333",
    "xTELVAx",
    "movie_world_cup",
    "twisukiz",
    "0000ouenbot",
    "bakusyouneta",
    "senju723",
    "zerranuu09",
    "neytharibert",
    "kaputibot",
    "giddayjp03",
    "xyhdths",
    "lilarl0083",
    "mojarfilm",
    "_H1kari",
    "tomoe_harusaka",
    "EX_t_one",
    "aki___ki",
    "rekewiKa",
    "sisyunki815",
    "kanokodareha",
    "maruyu_san_love",
    "15nyannko",
    "xanyrohemyco",
    "cancore_niziero",
    "yabai_3www",
    "yabai_",
    "yabai",
    "KanCollection_",
    "Akijeeeda",
    "guyinazoneof",
    "mecha_rt",
    "mskblog2005",
    "kannkore",
    "kannkorezuki",
    "Mathilda304943",
    "Ofwojoirumo",
    "nidomi_fanart",
    "fanart",
    "josefa906",
    "alessandra",
    "alessandra68135",
    "heliqolimaz",
    "Amdaoeupediri",
    "Leopoldo528271",
    "kancore_fan",
    "tuyoril",
    "www",
    "bakusho",
    "bakusyo",
    "kando",
    "ShareUresiiToki",
    "share",
    "uresii"
  ];
}.call(this));
