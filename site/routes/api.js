var dir      = '../../lib/'
  , moment   = require('moment')
  , _        = require('lodash')
  , async    = require('async')
  , cd       = require(dir + 'corresponddate')
  , my       = require(dir + 'my')
  , UserProvider = require(dir + 'model').UserProvider
  , settings = process.env.NODE_ENV === "production" ? require(dir + "production") : require(dir + "development")
  ;

//====== Mongoose object =======//
var PostProvider = require(dir + 'model').PostProvider;

var margin = 40
  , IMAGE_MAX_WIDTH_300 = 300
  ;

exports.readAll = function (req, res) {
    var name = req.params.name;

    // 現在時刻から表示したい開催日(correspondDate)を算出する
    // アイカツ！、ゆるゆり、艦これの場合
    // 4/7 21:00 -> 表示は 4/6 22:00 からの分
    // 4/7 22:12 -> 表示は 4/7 22:00　からの分
    //
    // ラブライブ！の場合
    // 4/7 22:12 -> 表示は 4/6 23:30 からの分
    // 4/8 12:32 -> 表示は 4/7 23:30 からの分
    var correspondDate = cd.getCorrespondDate(name)
      ,  numShow       = 10
      ;

    // 該当日(correspondDate)の中から、投稿日が新しい順に10件だけ取得
    PostProvider.findNew({
        name: name
      , correspondDate: correspondDate
      , numShow: numShow
    }, function(error, postDatas) {
      var postWidth = 0
        , dataCount = 0
        , posts     = []
        ;
      postDatas.forEach(function (postData) {
        posts.push({
            tweetIdStr: postData.tweetIdStr
          , userName: postData.userName
          , userScreenName: postData.userScreenName
          , userIdStr: postData.userIdStr
          , tweetText: postData.tweetText
          , tweetUrl: postData.tweetUrl.replace(/http:\/\//g, '')
          , sourceOrigUrl: postData.sourceUrl
          , sourceUrl: postData.sourceUrl.replace(/:orig/g, ':medium')
          , tags: postData.tags
          , category: postData.category
          , retweetNum: postData.retweetNum
          , favNum: postData.favNum
          , picWidths: postData.picWidths
          , createdAt: moment(postData.createdAt).format("YYYY-MM-DD HH:mm")
          , correspondDate: moment(postData.correspondDate).format("YYYY-MM-DD HH:mm")
          , correspondTime: moment(postData.correspondTime).format("YYYY-MM-DD HH:mm")
        });

        // 公式以外の画像ポストは postData.picWidths[0] をオブジェクトとして持っていても、
        // postData.picWidths[0].height300　は undefinedなので下の条件でないと文字と数字を足すことになり、NaNになる。
        if(!_.isUndefined(postData.picWidths[0].height300)) {
          postWidth += postData.picWidths[0].height300;
        } else {
          postWidth += IMAGE_MAX_WIDTH_300;
        }
        dataCount++;
      });

      // CSSの余白分を追加
      postWidth += dataCount * margin;

      // console.log("posts = ", posts);

      res.json({
          posts: posts
        , postWidth: postWidth
      });
    });
};

exports.readRanking = function (req, res) {

    var opt = {
        name: req.params.name
      , correspondDate: cd.getCorrespondDate(req.params.name)
      , numShow: 20
    };

    PostProvider.findDescRetweet(opt, function(error, postDatas) {
      var rankWidth = 0
        , dataCount = 0
        , rankPosts = []
        ;

      postDatas.forEach(function (postData) {
        rankPosts.push({
            tweetIdStr: postData.tweetIdStr
          , userName: postData.userName
          , userScreenName: postData.userScreenName
          , userIdStr: postData.userIdStr
          , tweetText: postData.tweetText
          , tweetUrl: postData.tweetUrl.replace(/http:\/\//g, '')
          , sourceOrigUrl: postData.sourceUrl
          , sourceUrl: postData.sourceUrl.replace(/:orig/g, ':medium')
          , tags: postData.tags
          , category: postData.category
          , retweetNum: postData.retweetNum
          , favNum: postData.favNum
          , createdAt: moment(postData.createdAt).format("YYYY-MM-DD HH:mm")
          , correspondDate: moment(postData.correspondDate).format("YYYY-MM-DD HH:mm")
          , correspondTime: moment(postData.correspondTime).format("YYYY-MM-DD HH:mm")
        });

        if(!_.isUndefined(postData.picWidths[0].height300)) {
          rankWidth += postData.picWidths[0].height300;
        } else {
          rankWidth += IMAGE_MAX_WIDTH_300;
        }
        dataCount++;
      });

      // CSSの余白分を追加
      rankWidth += dataCount * margin;

      // 値をCotrollerに渡す
      res.json({
          rankPosts: rankPosts
        , rankWidth: rankWidth
      });
    });
};

exports.readRankingAllCategory = function (req, res) {
  var rankAllCategoryPosts = [];

  // カテゴリごと
  async.forEach(settings.CATEGORIES, function (name, cb) {
    var rankCategoryPosts = [];
    var opt = {
        name: name
      , correspondDate: cd.getCorrespondDate(name)
      , numShow: 10
    }

    PostProvider.findDescTotalPoint(opt, function(error, postDatas) {

      // ツイートごとのデータ
      var rankWidth = 0
        , dataCount = 0
        , rankPosts = []
        ;

      postDatas.forEach(function (postData) {
        rankCategoryPosts.push({
            tweetIdStr: postData.tweetIdStr
          , userName: postData.userName
          , userScreenName: postData.userScreenName
          , userIdStr: postData.userIdStr
          , tweetText: postData.tweetText
          , tweetUrl: postData.tweetUrl.replace(/http:\/\//g, '')
          , sourceOrigUrl: postData.sourceUrl
          , sourceUrl: postData.sourceUrl.replace(/:orig/g, ':medium')
          , tags: postData.tags
          , category: postData.category
          , retweetNum: postData.retweetNum
          , favNum: postData.favNum
          , createdAt: moment(postData.createdAt).format("YYYY-MM-DD HH:mm")
          , correspondDate: moment(postData.correspondDate).format("YYYY-MM-DD HH:mm")
          , correspondTime: moment(postData.correspondTime).format("YYYY-MM-DD HH:mm")
        });

        if(!_.isUndefined(postData.picWidths[0].height300)) {
          rankWidth += postData.picWidths[0].height300;
        } else {
          rankWidth += IMAGE_MAX_WIDTH_300;
        }
        dataCount++;
      });

      // CSSの余白分を追加
      rankWidth += dataCount * margin;

      // ツイートデータを持つオブジェクトの末尾にPanelの横幅を追加
      rankCategoryPosts.push({
        rankWidth: rankWidth
      });
      rankAllCategoryPosts.push(rankCategoryPosts);

      // 同期処理
      cb();
    });
  }, function() {
    res.json({
      rankAllCategoryPosts: rankAllCategoryPosts
    });
  });
};

exports.readUserPosts = function (req, res) {

  console.log(req.params);

  var userAllCategoryPosts = [];

  // カテゴリごと
  async.forEach(settings.CATEGORIES, function (name, cb) {
    var userCategoryPosts = [];
    var opt = {
        name: name
      , twitterIdStr: req.params.twitterIdStr
    }

    PostProvider.findByTwitterIdStrAndCategory(opt, function(error, postDatas) {

      // ツイートごとのデータ
      var userWidth = 0
        , dataCount = 0
        , userPosts = []
        ;

      postDatas.forEach(function (postData) {
        userCategoryPosts.push({
            tweetIdStr: postData.tweetIdStr
          , userName: postData.userName
          , userScreenName: postData.userScreenName
          , userIdStr: postData.userIdStr
          , tweetText: postData.tweetText
          , tweetUrl: postData.tweetUrl.replace(/http:\/\//g, '')
          , sourceOrigUrl: postData.sourceUrl
          , sourceUrl: postData.sourceUrl.replace(/:orig/g, ':medium')
          , tags: postData.tags
          , category: postData.category
          , retweetNum: postData.retweetNum
          , favNum: postData.favNum
          , totalNum: postData.totalNum
          , createdAt: moment(postData.createdAt).format("YYYY-MM-DD HH:mm")
          , correspondDate: moment(postData.correspondDate).format("YYYY-MM-DD HH:mm")
          , correspondTime: moment(postData.correspondTime).format("YYYY-MM-DD HH:mm")
        });

        if(!_.isUndefined(postData.picWidths[0].height300)) {
          userWidth += postData.picWidths[0].height300;
        } else {
          userWidth += IMAGE_MAX_WIDTH_300;
        }
        dataCount++;
      });

      // CSSの余白分を追加
      userWidth += dataCount * margin;

      // ツイートデータを持つオブジェクトの末尾にPanelの横幅を追加
      userCategoryPosts.push({
        userWidth: userWidth
      });
      userAllCategoryPosts.push(userCategoryPosts);

      // 同期処理
      cb();
    });
  }, function() {
    res.json({
      userAllCategoryPosts: userAllCategoryPosts
    });
  });
};

exports.findUserDataByTwitterIdStr = function(req, res) {

  // TODO: PostProviderじゃなくてUserProviderにしたい。
  PostProvider.findUserDataByTwitterIdStr({
    twitterIdStr: req.params.twitterIdStr
  }, function(error, userData) {
    console.log("userData = ", userData);
    res.json({
      userData: userData
    });
  });
}


exports.logout = function(req, res) {

  console.log("!_.has前 API sign out req.session = ", req.session);

  if(!_.has(req.session, 'id')) return;

  console.log("API signOut req.session.id = " + req.session.id);

  req.session.destroy();

  res.json({
    data: "ok"
  });

}

exports.isAuthenticated = function(req, res) {

  console.log("isAuthenticated req.session = ", req.session.passport);
  console.log("isAuthenticated req.session.id = " + req.session.id);
  console.log("isAuthenticated _.isUndefined(req.session.passport.user) = ", _.isUndefined(req.session.passport.user));

  var sessionUserData = null;

  if(!_.isUndefined(req.session.passport.user)) {
    sessionUserData = req.session.passport.user;
  }
  res.json({
    data: sessionUserData
  });
}

exports.findUserById = function(req, res) {
  UserProvider.findUserById({
    twitterIdStr: req.body.twitterIdStr
  }, function(err, data) {
    console.log("findUserById", data);
    res.json({
      data: data
    });
  });
}

exports.createFavorite = function(req, res) {

  // 未ログインなら何もせずバック
  if(_.isUndefined(req.session.passport.user)) return;

  var message = null;
  settings.twitterAPI.favorites("create", {
      id: req.body.tweetIdStr
    },
    req.session.passport.user.twitter_token,
    req.session.passport.user.twitter_token_secret,
    function(error, data, response) {
      if (error) {
        // something went wrong
        console.log("twitter.favorites error =  ", error);
        // error = ふぁぼ済み ならあんふぁぼ
        // ~
      } else {
        console.log("Favorite!! user = " + req.session.passport.user.username);
        message = data;
      }
      res.json({
          data: message
      });
    }
  );
}

exports.statusesRetweet = function(req, res) {

  // 未ログインなら何もせずバック
  if(_.isUndefined(req.session.passport.user)) return;

  var message = null;
  settings.twitterAPI.statuses("retweet", {
      id: req.body.tweetIdStr
    },
    req.session.passport.user.twitter_token,
    req.session.passport.user.twitter_token_secret,
    function(error, data, response) {
      if (error) {
        // something went wrong
        console.log("twitter.retweet error =  ", error);
        // error = ふぁぼ済み ならあんふぁぼ
        // ~
      } else {
        console.log("retweet!! user = " + req.session.passport.user.username);
        message = data;
      }
      res.json({
          data: message
      });
    }
  );
}