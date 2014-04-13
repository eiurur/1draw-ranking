/**
 * Module dependencies
 */
var http     = require('http')
  , path     = require('path')
　 ,　util     = require('util')
  , settings = require('./settings')
  , ml       = require('./lib')
  , t2t      = require('./stream')
  , cronJob  = require('cron').CronJob
  ;


/**
 * 新規ツイート保存処理
 */
settings.twitter.stream('statuses/filter', {'track': settings.keywords}, function(stream) {
  stream.on('data', function(data){
    t2t.t2t(data);
  });
  stream.on('end', function (response) {
    // 切断された場合の処理
    ml.cl("end");
  });
  stream.on('destroy', function (response) {
    // 接続が破棄された場合の処理
    ml.cl("destroy");
  });
});

/**
 * 保存済みツイートのリツイート数、お気に入り数の更新処理
 */
// 22-2 の4時間分のログを10分間隔で保存。
var cronTime = "*/10 0-2,22-23 * * *";

var job = new cronJob({
  cronTime: cronTime

  , onTick: function() {
    var nowTime = new Date();
    t2t.getTweetStatus(nowTime);
  }

  , onComplete: function() {
    console.log('Completed.')
  }

  , start: false
  , timeZone: "Japan/Tokyo"
})

job.start();