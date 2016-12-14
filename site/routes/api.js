var dir          = '../../lib/'
  , moment       = require('moment')
  , _            = require('lodash')
  , async        = require('async')
  , JSZip        = require("jszip")
  , request      = require('request')
  , Promise      = require('es6-promise').Promise
  , cd           = require(dir + 'corresponddate')
  , my           = require(dir + 'my')
  , PostProvider = require(dir + 'model').PostProvider
  , UserProvider = require(dir + 'model').UserProvider
  , TagProvider  = require(dir + 'model').TagProvider
  , settings     = process.env.NODE_ENV === "production" ? require(dir + "production") : require(dir + "development")
  ;

var NUM_GET_TWEETER_TWEET = 100;

var getPostDatas = function(params) {
  return new Promise(function(resolve, reject) {

    console.log(params);

    PostProvider[params.query](params.opt, function(error, postDatas) {
      var postWidth = 0
        , dataCount = 0
        , posts     = []
        , postDatas = postDatas || []
        ;

      postDatas.forEach(function (postData) {
        posts.push({
            tweetIdStr: postData.tweetIdStr
          , userName: postData.userName
          , userScreenName: postData.userScreenName
          , userIdStr: postData.userIdStr
          , userIcon: postData.userIcon
          , tweetText: postData.tweetText
          , tweetUrl: postData.tweetUrl
          , sourceOrigUrl: postData.sourceUrl
          , sourceUrl: postData.sourceUrl.replace(/:orig/g, ':medium')
          , tags: postData.tags
          , category: postData.category
          , retweetNum: postData.retweetNum
          , favNum: postData.favNum
          , totalNum: postData.totalNum
          , createdAt: postData.createdAt
        });
      });
      return resolve(posts);
    });
  });
};

exports.readAll = function (req, res) {

  console.time("readAll");
  var opt = {
      name: req.params.name
    , correspondDate: cd.getCorrespondDate(req.params.name)
    , numShow: 10
  };

  getPostDatas({
      opt: opt
    , query: 'findNew'
  })
  .then(function(posts) {
    console.timeEnd("readAll");
    res.json({
      posts: posts
    });
  });
};

exports.readRanking = function (req, res) {

  console.time("readRanking");
  var opt = {
      name: req.params.name
    , correspondDate: cd.getCorrespondDate(req.params.name)
    , numShow: 20
  };

  getPostDatas({
      opt: opt
    , query: 'findDescRetweet'
  })
  .then(function(rankPosts) {
    console.timeEnd("readRanking");
    res.json({
      rankPosts: rankPosts
    });
  });
};

exports.readRankingAll = function (req, res) {

  console.time("readRankingAll");
  var opt = {
      name: req.params.name
    , correspondDate: cd.getCorrespondDate(req.params.name)
    , skip  : req.params.skip
    , numShow: 20
  };

  getPostDatas({
      opt: opt
    , query: 'findDescTotalPoint'
  })
  .then(function(rankPosts) {
    console.timeEnd("readRankingAll");
    res.json({
      rankPosts: rankPosts
    });
  });
};

exports.readRankingAllCategory = function (req, res) {

  console.time("readRankingAllCategory");
  var tasks = [];

  tasks = _.map(settings.CATEGORIES, function(name){
    var opt = {
        name: name
      , correspondDate: cd.getCorrespondDate(name)
      , numShow: 10
    }

    return new Promise(function(resolve, reject) {
      getPostDatas({
          opt: opt
        , query: 'findDescTotalPoint'
      })
      .then(function(rankCategoryPosts) {
        return resolve(rankCategoryPosts);
      });
    });
  });

  Promise.all(tasks)
  .then(function(rankAllCategoryPosts) {
    console.timeEnd("readRankingAllCategory");
    res.json({
      rankAllCategoryPosts: rankAllCategoryPosts
    });
  });
};

exports.readOverallRanking = function (req, res) {

  console.time("readOverallRanking");
  var tasks = [];

  tasks = _.map(req.body.categories, function(name){
    console.log(name);
    var opt = {
        name: name
      , correspondDate: cd.getCorrespondDate(name)
      , numShow: 10
    }

    return new Promise(function(resolve, reject) {
        getPostDatas({
            opt: opt
          , query: 'findDescTotalPoint'
        })
        .then(function(rankCategoryPosts) {
          return resolve(rankCategoryPosts);
        });
      });
  });

  Promise.all(tasks)
  .then(function(rankOverallPosts) {
    console.timeEnd("readOverallRanking");
    res.json({
      rankOverallPosts: rankOverallPosts
    });
  });
};

exports.readUserPosts = function (req, res) {

  var tasks = [];

  tasks = _.map(settings.CATEGORIES, function(name){
    var opt = {
        name: name
      , twitterIdStr: req.params.twitterIdStr
    }


    return new Promise(function(resolve, reject) {
      getPostDatas({
          opt: opt
        , query: 'findByTwitterIdStrAndCategory'
      })
      .then(function(userAllCategoryPosts) {
        return resolve(userAllCategoryPosts);
      });
    });
  });

  Promise.all(tasks)
  .then(function(userAllCategoryPosts) {
    res.json({
      userAllCategoryPosts: userAllCategoryPosts
    });
  });
};


exports.readCount = function(req, res) {
  PostProvider.countOnlyCorrespondDate({
      name: req.params.name
    , correspondDate: cd.getCorrespondDate(req.params.name)
  }, function(error, count) {
    res.json({
      count: count
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
};

exports.findTagRegistered = function(req, res) {

  // HACK: もっと綺麗に書きたい
  if(_.isUndefined(req.session.passport.user)) {
    res.json({
      data: null
    });
    return;
  }

  console.log(req.session.passport.user);

  TagProvider.findOne({
    twitterIdStr: req.session.passport.user._json.id_str
  }, function(error, data) {
    console.log("tagData = ", data);
    res.json({
        data: data
    });
  });
};

// '#ラブライブ版~'
exports.findTagAll = function(req, res) {
  res.json({
    data: settings.KEYWORDS
  });
};

exports.findTagDefault = function(req, res) {
  res.json({
    data: settings.KEYWORDS_DEFAULT
  });
};

// ex 'lovelive'
exports.findCategoriesDefault = function(req, res) {
  res.json({
    data: settings.CATEGORIES_DEFAULT
  });
};

exports.findCategoriesAll = function(req, res) {
  res.json({
    data: settings.CATEGORIES
  });
};


exports.registerTag = function(req, res) {
  if(_.isUndefined(req.session.passport.user)) return;

  console.log(req.body);
  console.log(req.session.passport.user._json.id_str);
  TagProvider.upsert({
      twitterIdStr: req.session.passport.user._json.id_str
    , tagsStr: req.body.tagsStr
    , categoriesStr: req.body.categoriesStr
  }, function(err, data) {
    res.json({
      data: data
    });
  });
};


exports.isAuthenticated = function(req, res) {

  var sessionUserData = null;

  if(!_.isUndefined(req.session.passport.user)) {
    sessionUserData = req.session.passport.user;
  }
  res.json({
    data: sessionUserData
  });
};

exports.findUserById = function(req, res) {
  UserProvider.findUserById({
    twitterIdStr: req.body.twitterIdStr
  }, function(err, data) {
    res.json({
      data: data
    });
  });
};

exports.createFavorite = function(req, res) {

  // 未ログインなら何もせずバック
  if(_.isUndefined(req.session.passport.user)) {
    res.json({
        error: 'notAuthorized'
    });
    return;
  }


  var message = null;
  settings.twitterAPI.favorites("create", {
      id: req.body.tweetIdStr
    },
    req.session.passport.user.twitter_token,
    req.session.passport.user.twitter_token_secret,
    function(error, data, response) {
      if (error) {
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
};

exports.statusesRetweet = function(req, res) {

  // 未ログインなら何もせずバック
  if(_.isUndefined(req.session.passport.user)) {
    res.json({
        error: 'notAuthorized'
    });
    return;
  }


  var message = null;
  settings.twitterAPI.statuses("retweet", {
      id: req.body.tweetIdStr
    },
    req.session.passport.user.twitter_token,
    req.session.passport.user.twitter_token_secret,
    function(error, data, response) {
      if (error) {
        console.log("twitter.retweet error =  ", error);
        // error = リツイート済み ならdel
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
};

exports.getTweeterData = function(req, res) {
  var token, token_secret;

  if(_.has(req.session.passport.user, 'twitter_token')) {
    token = req.session.passport.user.twitter_token;
    token_secret = req.session.passport.user.twitter_token_secret;
  }

  settings.twitterAPI.users("show", {
        user_id: req.params.twitterIdStr
      , include_entities: true
    },
    token || settings.TW_ACCESS_TOKEN_KEY,
    token_secret || settings.TW_ACCESS_TOKEN_SECRET,
    function(error, data, response) {
      console.log("getTweeterData data = ", data);
      res.json({
          data: data
      });
    }
  );
};

exports.getTweeterTweet = function(req, res) {

  // 未ログインなら何もせずバック
  if(_.isUndefined(req.session.passport.user)) return;

  opts = {
      user_id: req.params.twitterIdStr
    , count: NUM_GET_TWEETER_TWEET
    , include_entities: true
    , include_rts: false
    ,
  };

  if(req.params.nextCursorId !== '0') {
    opts.max_id = req.params.nextCursorId;
  }

  settings.twitterAPI.getTimeline("user_timeline",
    opts,
    req.session.passport.user.twitter_token,
    req.session.passport.user.twitter_token_secret,
    function(error, data, response) {
      res.json({
          data: data
      });
    }
  );
};

exports.downloadZip = function(req, res) {

  var loadBase64Image = function (url) {
    return new Promise(function(resolve, reject) {
      request({
          url: url
        , encoding: null
      }, function (err, res, body) {
        if (!err && res.statusCode == 200) {
          var base64prefix = 'data:' + res.headers['content-type'] + ';base64,';
          var image = body.toString('base64');
          return resolve(image + base64prefix);
        } else {
          return reject(err);
          throw new Error('Can not download image');
        }
      });
    });
  };

  var tasks = [];
  tasks = _.map(req.body.posts, function(post){
    return new Promise(function(resolve, reject) {
      loadBase64Image(post.sourceOrigUrl)
      .then(function(imageBase64) {
        return resolve({
            image: imageBase64
          , name: post.tweetIdStr
        });
      })
      .catch(function(error) {
        return resolve('');
      });
    });
  });

  Promise.all(tasks)
  .then(function(base64Array) {
    base64ArrayCompacted = _.pick(base64Array, _.identity);
    res.json({
      data: base64ArrayCompacted
    });
  });
};

exports.download = function(req, res) {
  console.log("\n========> download\n");
  return my.loadBase64Data(req.body.url).then(function(base64Data) {
    return res.json({
      base64Data: base64Data
    });
  });
};
