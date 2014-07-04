var mongoose = require('mongoose')
  , uri      = process.env.MONGOHQ_URL || 'mongodb://127.0.0.1/third-mongo'
  , db       = mongoose.connect(uri)
  , Schema   = mongoose.Schema
  , ObjectId = Schema.Objectid
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

var PicWidthsSchema = new Schema({
    height150: Number
  , height200: Number
  , height250: Number
  , height300: Number
  , height350: Number
  , height400: Number
});

var PostSchema = new Schema({
    tweetId: String
  , userName: String
  , userId: String
  , tweetText: String
  , tweetUrl: String
  , sourceUrl: String
  , tags: String
  , category: String
  , retweetNum: Number
  , favNum: Number
  , totalNum: Number
  , picWidths: [PicWidthsSchema]
  // , historiesNumFavAndRT: [HistoriesNumFavAndRTSchema]
  , createdAt: Date
  , correspondDate: Date
  , correspondTime: Date
});

// モデル化 model('モデル名', '定義したスキーマクラス')
mongoose.model('Post', PostSchema);

// 定義した時の登録名で呼び出し
var Post = mongoose.model('Post');

PostProvider = function(){};

PostProvider.prototype.findAll = function(callback) {
  Post.find({}, function(err, posts) {
          callback(null, posts)
      });
};

PostProvider.prototype.findById = function(tweetId, callback) {
  Post.findById(tweetId, function(err, posts) {
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
      .limit(params['numShow'])
      .exec(function(err, posts) {
          callback(null, posts)
      });
};

// 総合得点を降順に、データを取得
PostProvider.prototype.findDescTotalPoint = function(params, callback) {
  Post.find({category: params['name'], correspondDate: params['correspondDate']})
      .sort({totalNum: -1})
      .limit(params['numShow'])
      .exec(function(err, posts) {
          callback(null, posts)
      });
};

// 重複を検索
PostProvider.prototype.countDuplicatedPic = function(params, callback) {
  Post.find({tweetId:params['tweetId']})
      .count()
      .exec(function(err, num) {
          callback(null, num)
      });
};

PostProvider.prototype.save = function(params, callback) {
    var post = new Post({
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
      , picWidths: [{
          height150: params['picWidths'].height150
        , height200: params['picWidths'].height200
        , height250: params['picWidths'].height250
        , height300: params['picWidths'].height300
        , height350: params['picWidths'].height350
        , height400: params['picWidths'].height400
      }]
      , createdAt: params['created_at']
      , correspondDate: params['correspondDate']
      , correspondTime: params['correspondTime']
    });
    post.save(function(err) {
      callback();
    });
};

// PostProvider.prototype.insertHistory = function(params, callback) {
//   Post.update({ tweetId : params['tweetId'] }, { $set: {
//     historiesNumFavAndRT: params['historiesNumFavAndRT']
//   } }, function(err) {
//     callback();
//   });
// };

PostProvider.prototype.update = function(params, callback) {
  Post.update({ tweetId : params['tweetId'] }, { $set: {
    retweetNum: params['retweetNum'],
    favNum: params['favNum'],
    totalNum: params['totalNum']
  } }, function(err) {
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

exports.PostProvider = new PostProvider();


