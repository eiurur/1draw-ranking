var moment   = require('moment')
  , _        = require('underscore-node')
  , async    = require('async')
  , cd       = require('../data/corresponddate')
  , settings = require('../data/settings')
  , ml       = require('../data/lib')
  ;

//====== Mongoose object =======//
var PostProvider = require('../data/model').PostProvider;

var margin = 25;

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
    var correspondDate = cd.getCorrespondDate(name);
    var dataCount = 0;
    var numShow = 10;

    // 該当日(correspondDate)の中から、投稿日が新しい順に10件だけ取得
    PostProvider.findNew({
      name: name,
      correspondDate: correspondDate,
      numShow: numShow
    }, function(error, postDatas) {
      var postWidth = 0;
      var posts = [];
      postDatas.forEach(function (postData) {
        posts.push({
          tweetId: postData.tweetId,
          userName: postData.userName,
          userId: postData.userId,
          tweetText: postData.tweetText,
          tweetUrl: postData.tweetUrl,
          sourceUrl: postData.sourceUrl.replace(/:large/g, ':medium'),
          tags: postData.tags,
          category: postData.category,
          retweetNum: postData.retweetNum,
          favNum: postData.favNum,
          picWidths: postData.picWidths,
          createdAt: moment(postData.createdAt).format("YYYY-MM-DD HH:mm"),
          correspondDate: moment(postData.correspondDate).format("YYYY-MM-DD HH:mm"),
          correspondTime: moment(postData.correspondTime).format("YYYY-MM-DD HH:mm")
        });
        if(_.isObject(postData.picWidths[0])) {
          postWidth += postData.picWidths[0].height300;
        } else {
          postWidth += 600;
        }
        dataCount++;
      });

      // CSSの余白分を追加
      postWidth += dataCount * margin;

      console.log("postWidth = " + postWidth);

      res.json({
        posts: posts,
        postWidth: postWidth
      });
    });
};

exports.readRanking = function (req, res) {
    var name = req.params.name;

    var dataCount = 0;
    var numShow = 20;
    var correspondDate = cd.getCorrespondDate(name);

    PostProvider.findDescRetweet({
      name: name,
      correspondDate: correspondDate,
      numShow: numShow
    }, function(error, postDatas) {
      var rankWidth      = 0;
      var rankPosts      = [];
      postDatas.forEach(function (postData) {
        rankPosts.push({
          tweetId: postData.tweetId,
          userName: postData.userName,
          userId: postData.userId,
          tweetText: postData.tweetText,
          tweetUrl: postData.tweetUrl,
          sourceUrl: postData.sourceUrl.replace(/:large/g, ':medium'),
          tags: postData.tags,
          category: postData.category,
          retweetNum: postData.retweetNum,
          favNum: postData.favNum,
          createdAt: moment(postData.createdAt).format("YYYY-MM-DD HH:mm"),
          correspondDate: moment(postData.correspondDate).format("YYYY-MM-DD HH:mm"),
          correspondTime: moment(postData.correspondTime).format("YYYY-MM-DD HH:mm")
        });

        if(_.isObject(postData.picWidths[0])) {
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
    var correspondDate;
    var rankAllCategoryPosts = [];
    var dataCount = 0;
    var numShow = 10;

    // カテゴリごと
    async.forEach(settings.categories, function (name, cb) {
      var rankCategoryPosts = [];
      correspondDate = cd.getCorrespondDate(name);
      PostProvider.findDescRetweet({
        name: name,
        correspondDate: correspondDate,
        numShow: numShow
      }, function(error, postDatas) {

        // ツイートごとのデータ
        var rankWidth      = 0;
        var rankPosts      = [];
        postDatas.forEach(function (postData) {
          rankCategoryPosts.push({
            tweetId: postData.tweetId,
            userName: postData.userName,
            userId: postData.userId,
            tweetText: postData.tweetText,
            tweetUrl: postData.tweetUrl,
            sourceUrl: postData.sourceUrl.replace(/:large/g, ':medium'),
            tags: postData.tags,
            category: postData.category,
            retweetNum: postData.retweetNum,
            favNum: postData.favNum,
            createdAt: moment(postData.createdAt).format("YYYY-MM-DD HH:mm"),
            correspondDate: moment(postData.correspondDate).format("YYYY-MM-DD HH:mm"),
            correspondTime: moment(postData.correspondTime).format("YYYY-MM-DD HH:mm")
          });

          if(_.isObject(postData.picWidths[0])) {
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
