/**
 * Module dependencies
 */
var http     = require('http')
  , path     = require('path')
  , util     = require('util')
  , settings = require('./settings')
  , ml       = require('./lib')
  , t2t      = require('./stream')
  , cronJob  = require('cron').CronJob
  , bson     = require('bson')
  ;


/**
 * 新規ツイート保存処理
 */
var t = function() {
  settings.twitter.stream('statuses/filter', {'track': settings.keywords}, function(stream) {
    stream.on('data', function(data){
      t2t.t2t(data);
    });
    stream.on('end', function (response) {
      // 切断された場合の処理
      ml.cl("end");
      t();
    });
    stream.on('destroy', function (response) {
      // 接続が破棄された場合の処理
      ml.cl("destroy");
    });
  });
};
t();

/**
 * 指定時刻になったらその日のTOPポストをTumblrへ投稿
 */
var cronTimeKYA = "59 21 * * *";
var cronTimeLL  = "29 23 * * *";

var jobKYA = new cronJob({
  cronTime: cronTimeKYA

  , onTick: function() {
    var nowTime = new Date();
    t2t.getTweetStatus(nowTime);
  }

  , onComplete: function() {
    console.log('Completed.')
  }

  , start: false
  , timeZone: "Japan/Tokyo"
});

var jobLL = new cronJob({
  cronTime: cronTimeLL

  , onTick: function() {
    var nowTime = new Date();
    t2t.getTweetStatus(nowTime);
  }

  , onComplete: function() {
    console.log('Completed.')
  }

  , start: false
  , timeZone: "Japan/Tokyo"
});

jobKYA.start();
jobLL.start();