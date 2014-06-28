(function() {
  var http      = require('http')
    , path      = require('path')
    , util      = require('util')
    , ml        = require('./lib')
    , aggregate = require('./aggregate')
    , t2t       = require('./t2t')
    , cronJob   = require('cron').CronJob
    , settings  = process.env.NODE_ENV === "production" ? require("./production") : require("./development")
    ;

  exports.getTweetFromTwitter= function(){

    /**
     * 新規ツイート保存処理
     */
    settings.twitter.stream('statuses/filter', {'track': settings.KEYWORDS}, function(stream) {
      stream.on('data', function(data){
        aggregate.aggregate(data);
      });
      stream.on('end', function (response) {

        // 切断された場合の処理
        ml.cl("end");

        // 自動で再起動
        arguments.callee();
        ml.cl("------------------");
        ml.cl("再開");
        ml.cl("------------------");
      });
      stream.on('destroy', function (response) {

        // 接続が破棄された場合の処理
        ml.cl("destroy");
      });
    });

    /**
     * 指定時刻になったらその日のTOPポストをTumblrへ投稿
     */
    // for Kancolle, Yuruyuri, Aikatsu
    var cronTime2200 = "59 21 * * *";

    // for Lovelive
    var cronTime2330  = "29 23 * * *";

    var jobKYAMM = new cronJob({
      cronTime: cronTime2200

      , onTick: function() {
        var nowTime = new Date();
        t2t.post2Tumblr2200(nowTime);
      }

      , onComplete: function() {
        console.log('Completed.')
      }

      , start: false
      , timeZone: "Japan/Tokyo"
    });

    var jobLL = new cronJob({
      cronTime: cronTime2330

      , onTick: function() {
        var nowTime = new Date();
        t2t.post2Tumblr2330(nowTime);
      }

      , onComplete: function() {
        console.log('Completed.')
      }

      , start: false
      , timeZone: "Japan/Tokyo"
    });

    jobKYAMM.start();
    jobLL.start();
  }
})();