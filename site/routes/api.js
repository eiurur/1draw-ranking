var dir      = '../../lib/'
  , moment   = require('moment')
  , _        = require('underscore-node')
  , async    = require('async')
  , cd       = require(dir + 'corresponddate')
  , my       = require(dir + 'my')
  , settings = process.env.NODE_ENV === "production" ? require(dir + "production") : require(dir + "development")
  ;

//====== Mongoose object =======//
var PostProvider = require(dir + 'model').PostProvider;

var margin = 40;

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
      ,  dataCount     = 0
      ,  numShow       = 10
      ;

    // 該当日(correspondDate)の中から、投稿日が新しい順に10件だけ取得
    PostProvider.findNew({
        name: name
      , correspondDate: correspondDate
      , numShow: numShow
    }, function(error, postDatas) {
      var postWidth = 0;
      var posts = [];
      postDatas.forEach(function (postData) {
        posts.push({
            tweetId: postData.tweetId
          , userName: postData.userName
          , userId: postData.userId
          , tweetText: postData.tweetText
          , tweetUrl: postData.tweetUrl.replace(/http:\/\//g, '')
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
          postWidth += 600;
        }
        dataCount++;
      });

      // CSSの余白分を追加
      postWidth += dataCount * margin;

      res.json({
          posts: posts
        , postWidth: postWidth
      });
    });
};

exports.readRanking = function (req, res) {
    var name = req.params.name;

    var correspondDate = cd.getCorrespondDate(name)
      ,  dataCount     = 0
      ,  numShow       = 20
      ;

    PostProvider.findDescRetweet({
        name: name
      , correspondDate: correspondDate
      , numShow: numShow
    }, function(error, postDatas) {
      var rankWidth      = 0;
      var rankPosts      = [];
      postDatas.forEach(function (postData) {
        rankPosts.push({
            tweetId: postData.tweetId
          , userName: postData.userName
          , userId: postData.userId
          , tweetText: postData.tweetText
          , tweetUrl: postData.tweetUrl.replace(/http:\/\//g, '')
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
          rankWidth += 600;
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
  var correspondDate
    , dataCount            = 0
    , numShow              = 10
    , rankAllCategoryPosts = []
    ;

  // カテゴリごと
  async.forEach(settings.CATEGORIES, function (name, cb) {
    var rankCategoryPosts = [];
    correspondDate = cd.getCorrespondDate(name);
    PostProvider.findDescRetweet({
        name: name
      , correspondDate: correspondDate
      , numShow: numShow
    }, function(error, postDatas) {

      // ツイートごとのデータ
      var rankWidth      = 0;
      var rankPosts      = [];
      postDatas.forEach(function (postData) {
        rankCategoryPosts.push({
            tweetId: postData.tweetId
          , userName: postData.userName
          , userId: postData.userId
          , tweetText: postData.tweetText
          , tweetUrl: postData.tweetUrl.replace(/http:\/\//g, '')
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
          rankWidth += 600;
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
