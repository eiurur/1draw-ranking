var dir          = '../../lib/'
  , moment       = require('moment')
  , _            = require('lodash')
  , async        = require('async')
  , JSZip        = require("jszip")
  , request      = require('request')
  , Promise      = require('es6-promise').Promise
  , cd           = require(dir + 'corresponddate')
  , my           = require(dir + 'my')
  , UserProvider = require(dir + 'model').UserProvider
  , PostProvider = require(dir + 'model').PostProvider
  , settings     = process.env.NODE_ENV === "production" ? require(dir + "production") : require(dir + "development")
  ;

var margin = 40
  , IMAGE_MAX_WIDTH_300 = 300
  ;

var getPostDatas = function(params) {
  return new Promise(function(resolve, reject) {

    PostProvider[params.query](params.opt, function(error, postDatas) {
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
          , totalNum: postData.totalNum
          , createdAt: moment(postData.createdAt).format("YYYY-MM-DD HH:mm")
          , correspondDate: moment(postData.correspondDate).format("YYYY-MM-DD HH:mm")
          , correspondTime: moment(postData.correspondTime).format("YYYY-MM-DD HH:mm")
        });
      });

      return resolve(posts);
    });
  });
};

exports.readAll = function (req, res) {

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
    res.json({
      posts: posts
    });
  });
};

exports.readRanking = function (req, res) {

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
    res.json({
      rankPosts: rankPosts
    });
  });
};

exports.readRankingAllCategory = function (req, res) {

  var tasks = [];

  _.each(settings.CATEGORIES, function(name){
    var opt = {
        name: name
      , correspondDate: cd.getCorrespondDate(name)
      , numShow: 10
    }

    tasks.push(
      new Promise(function(resolve, reject) {
        getPostDatas({
            opt: opt
          , query: 'findDescTotalPoint'
        })
        .then(function(rankCategoryPosts) {
          return resolve(rankCategoryPosts);
        });
      })
    );
  });

  Promise.all(tasks)
  .then(function(rankAllCategoryPosts) {
    res.json({
      rankAllCategoryPosts: rankAllCategoryPosts
    });
  });
};

exports.readUserPosts = function (req, res) {

  var tasks = [];

  _.each(settings.CATEGORIES, function(name){
    var opt = {
        name: name
      , twitterIdStr: req.params.twitterIdStr
    }

    tasks.push(
      new Promise(function(resolve, reject) {
        getPostDatas({
            opt: opt
          , query: 'findByTwitterIdStrAndCategory'
        })
        .then(function(userAllCategoryPosts) {
          return resolve(userAllCategoryPosts);
        });
      })
    );
  });

  Promise.all(tasks)
  .then(function(userAllCategoryPosts) {
    console.log(userAllCategoryPosts);
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
}

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
  _.each(req.body.posts, function(post){
    tasks.push(
      new Promise(function(resolve, reject) {
        loadBase64Image(post.sourceOrigUrl + '?.jpg')
        .then(function(imageBase64) {
          console.log('in task post  = ' + post.sourceOrigUrl + '?.jpg');
          return resolve({
              image: imageBase64
            , name: post.tweetIdStr
          });
        })
        .catch(function(error) {
          return resolve('');
        });
      })
    );
  });

  Promise.all(tasks)
  .then(function(base64Array) {
    console.log('base64Array', _.pluck(base64Array, 'name'));
    base64ArrayCompacted = _.pick(base64Array, _.identity);
    res.json({
      data: base64ArrayCompacted
    });
  });
}