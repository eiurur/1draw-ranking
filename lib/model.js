var mongoose           = require('mongoose')
  , uri                = process.env.MONGOHQ_URL || 'mongodb://127.0.0.1/1draw-ranking'
  , db                 = mongoose.connect(uri)
  , Schema             = mongoose.Schema
  , ObjecttwitterIdStr = Schema.Objectid
  ;

/**
 * ModelのSchema Classを定義する
 */
var HistoriesNumFavAndRTSchema = new Schema({
    retweetNum: Number
  , favNum: Number
  , totalNum: Number
  , createdAt: Date
});

var PostSchema = new Schema({
    tweetIdStr: String
  , userIdStr: String
  , userScreenName: String
  , userName: String
  , userIcon: String
  , tweetText: String
  , tweetUrl: String
  , sourceUrl: String
  , tags: String
  , category: String
  , retweetNum: Number
  , favNum: Number
  , totalNum: Number
  , createdAt: Date
  , correspondDate: Date
  , correspondTime: Date
});

var UserSchema = new Schema({
  twitterIdStr: {
      type: String
    , unique: true
    , index: true
  },
  name: String,
  screenName: String,
  description: String,
  icon: String,
  url: String,
  createdAt: {
      type: Date
    , default: Date.now
  }
});

// タグはStringの形式で保存し、使うときにJSON.parseする
var TagSchema = new Schema({
  twitterIdStr: {
      type: String
    , unique: true
    , index: true
  },
  tagsStr: String,
  categoriesStr: String,
  createdAt: {
      type: Date
    , default: Date.now
  }
});

// モデル化 model('モデル名', '定義したスキーマクラス')
mongoose.model('Post', PostSchema);
mongoose.model('User', UserSchema);
mongoose.model('Tag', TagSchema);

// 定義した時の登録名で呼び出し
var Post = mongoose.model('Post');
var User = mongoose.model('User');
var Tag = mongoose.model('Tag');

PostProvider = function(){};

PostProvider.prototype.findAll = function(callback) {
  Post.find({}, function(err, posts) {
    callback(null, posts)
  });
};

PostProvider.prototype.findById = function(tweetIdStr, callback) {
  Post.findById(tweetIdStr, function(err, posts) {
    callback(null, posts)
  });
};

// 特定のカテゴリの、該当日だけのデータを取得
PostProvider.prototype.findOnlyCorrespondDate = function(params, callback) {
  Post.find({category: params['name'], correspondDate: params['correspondDate']}, function(err, posts) {
    callback(null, posts)
  });
};

// 新しい投稿順にツイートデータを取得
PostProvider.prototype.findNew = function(params, callback) {
  Post.find({category: params['name'], correspondDate: params['correspondDate']})
      .sort({correspondTime: -1})
      .limit(params['numShow'])
      .exec(function(err, posts) {
          callback(null, posts)
      });
};

// リツイート数を降順に、データを取得
PostProvider.prototype.findDescRetweet = function(params, callback) {
  Post.find({category: params['name'], correspondDate: params['correspondDate']})
      .sort({retweetNum: -1})
      .skip(params['skip'] || 0)
      .limit(params['numShow'])
      .exec(function(err, posts) {
          callback(null, posts)
      });
};

// 総合得点を降順に、データを取得
PostProvider.prototype.findDescTotalPoint = function(params, callback) {

  console.time("findDescTotalPoint");
  Post.find({category: params['name'], correspondDate: params['correspondDate']})
      .sort({totalNum: -1})
      .skip(params['skip'] || 0)
      .limit(params['numShow'])
      .exec(function(err, posts) {
          console.timeEnd("findDescTotalPoint");
          callback(null, posts)
      });
};

// twitterIDとカテゴリ名を基に、ユーザの投稿データを全て取得
PostProvider.prototype.findByTwitterIdStrAndCategory = function(params, callback) {
  Post.find({category: params['name'], userIdStr: params['twitterIdStr']})
      .exec(function(err, posts) {
        callback(null, posts)
      });
};
// twitterIDを基に、ユーザデータを全て取得
PostProvider.prototype.findUserDataByTwitterIdStr = function(params, callback) {
  Post.findOne({userIdStr: params['twitterIdStr']})
      .sort({correspondTime: -1})
      .exec(function(err, posts) {
        callback(null, posts)
      });
};

// 重複を検索
PostProvider.prototype.countDuplicatedPic = function(params, callback) {
  Post.find({tweetIdStr:params['tweetIdStr']})
      .count()
      .exec(function(err, num) {
        callback(null, num)
      });
};

// 直リン転載画像ツイートがあるか検索
PostProvider.prototype.findOneDuplicatedTweetWithImage = function(params, callback) {
  Post.find({sourceUrl:params['sourceUrl']})
      .sort({correspondTime: 1})
      .exec(function(err, num) {
        callback(null, num)
      });
};

PostProvider.prototype.save = function(params, callback) {
  console.time("save");
  console.log('\n=============> InsertDB');
  console.log(params.correspondDate);
  console.log(params.correspondTime);
  console.log("TW者: " + params.userScreenName + "  -  カテゴリ:  " + params.category);

  var post = new Post({
      tweetIdStr: params['tweetIdStr']
    , userIdStr: params['userIdStr']
    , userScreenName: params['userScreenName']
    , userName: params['userName']
    , userIcon: params['userIcon']
    , tweetText: params['tweetText']
    , tweetUrl: params['tweetUrl']
    , sourceUrl: params['sourceUrl']
    , category: params['category']
    , tags: params['tags']
    , retweetNum: params['retweetNum']
    , favNum: params['favNum']
    , totalNum: params['totalNum']
    , createdAt: params['createdAt']
    , correspondDate: params['correspondDate']
    , correspondTime: params['correspondTime']
  });
  post.save(function(err) {
    if(err) console.log('save err = ', err);
    console.timeEnd("save");
    callback();
  });
};

PostProvider.prototype.update = function(params, callback) {
  console.time("update");
  Post.update({ tweetIdStr : params['tweetIdStr'] }, { $set: {
    userIcon: params['userIcon'],
    retweetNum: params['retweetNum'],
    favNum: params['favNum'],
    totalNum: params['totalNum']
  } }, function(err) {
    if(err) console.log('update err = ', err);
    console.timeEnd("update");
    callback();
  });
};

PostProvider.prototype.clean = function(params, callback) {
  Post.remove({
      category: params['category']
    , correspondDate: { $ne: params['correspondDate'] }
  }, function(err) {
    callback(null);
  });
};


UserProvider = (function() {
  function UserProvider() {}

  UserProvider.prototype.findOne = function(params, callback) {
    console.log("\n============> User findOne\n");
    return User.findOne({
      twitterIdStr: params.twitterIdStr
    }, function(err, user) {
      return callback(err, user);
    });
  };

  UserProvider.prototype.findUserById = function(params, callback) {
    console.log("\n============> User findUserByID\n");
    return User.findOne({
      twitterIdStr: params.twitterIdStr
    }, function(err, user) {
      return callback(err, user);
    });
  };

  UserProvider.prototype.save = function(params, callback) {
    console.log("\n============> User save\n");
    console.log(params.profile._json.params_image_url_https);
    var user;
    user = new User({
      twitterIdStr: params.profile._json.id_str,
      name: params.profile.username,
      screenName: params.profile.displayName,
      description: params.profile._json.description,
      icon: params.profile._json.profile_image_url_https,
      url: params.profile._json.url
    });
    return user.save(function(err) {
      return callback(err, user);
    });
  };

  UserProvider.prototype.upsert = function(params, callback) {
    console.log("\n============> User upsert\n");
    console.log(params);
    var user;
    user = {
      twitterIdStr: params.profile._json.id_str,
      name: params.profile.username,
      screenName: params.profile.displayName,
      description: params.profile._json.description,
      icon: params.profile._json.profile_image_url_https,
      url: params.profile._json.url
    };
    return User.update({
      twitterIdStr: params.profile._json.id_str
    }, user, {
      upsert: true
    }, function(err) {
      return callback(err);
    });
  };

  return UserProvider;

})();


TagProvider = (function() {
  function TagProvider() {}

  TagProvider.prototype.findOne = function(params, callback) {
    console.log("\n============> Tag findOne\n");
    return Tag.findOne({
      twitterIdStr: params.twitterIdStr
    }, function(err, tag) {
      return callback(err, tag);
    });
  };

  TagProvider.prototype.save = function(params, callback) {
    console.log("\n============> Tag save\n");
    var tag;
    tag = new Tag({
      twitterIdStr: params.profile._json.id_str,
      tagsStr: params.tagsStr,
      categoriesStr: params.categoriesStr
    });
    return tag.save(function(err) {
      return callback(err, tag);
    });
  };

  TagProvider.prototype.upsert = function(params, callback) {
    console.log("\n============> Tag upsert\n");
    console.log(params);
    var tag;
    tag = {
      twitterIdStr: params.twitterIdStr,
      tagsStr: params.tagsStr,
      categoriesStr: params.categoriesStr
    };
    return Tag.update({
      twitterIdStr: params.twitterIdStr
    }, tag, {
      upsert: true
    }, function(err) {
      return callback(err);
    });
  };

  return TagProvider;

})();


exports.PostProvider = new PostProvider();
exports.UserProvider = new UserProvider();
exports.TagProvider  = new TagProvider();


