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
    var stream = settings.T.stream('statuses/filter', {'track': settings.KEYWORDS});
    stream.on('tweet', function(tweet){
      console.log(tweet);
      aggregate.aggregate(tweet);
    });
  }

})();