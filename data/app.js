(function() {
  var dir       = '../lib/'
    , http      = require('http')
    , path      = require('path')
    , util      = require('util')
    , aggregate = require('./aggregate')
    , my        = require(dir + 'my')
    , settings  = process.env.NODE_ENV === "production" ? require(dir + "production") : require(dir + "development")
    ;

  exports.getTweetFromTwitter= function(){

    /**
     * 新規ツイート保存処理
     */
    settings.twitter.stream('statuses/filter', {'track': settings.KEYWORDS}, function(stream) {
      console.log(stream);

      stream.on('data', function(data){
        console.log(data);
        aggregate.aggregate(data);
      });

      stream.on('end', function (response) {

        // 切断された場合の処理
        my.cl("end");

        // 自動で再起動
        arguments.callee();
      });

      stream.on('destroy', function (response) {

        // 接続が破棄された場合の処理
        my.cl("destroy");
      });
    });
  }

})();