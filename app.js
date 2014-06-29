(function() {
  var async               = require('async')
    , cronJob             = require('cron').CronJob
    , ml                  = require('./data/lib')
    , serve               = require('./site/app').serve
    , getTweetFromTwitter = require('./data/app').getTweetFromTwitter
    , settings            = process.env.NODE_ENV === "production" ? require("./data/production") : require("./data/development")
    ;

  tasks4StartUp = [

    function(callback) {

      console.log("■ Twitter task start");

      getTweetFromTwitter(null, "Getting Tweet");

      setTimeout((function(){
        return callback(null, "Go! Twitter\n");
      }), 1000);

    }, function(callback) {

      console.log("■ Server task start");

      serve(null, "Create Server");

      setTimeout((function(){
        return callback(null, "Create! Server\n");
      }), 1000);

    }
  ];

  async.series(tasks4StartUp, function(err, results) {
    if (err) {
      console.error(err);
    } else {
      console.log("\nall done... Start!!!!\n");
    }
  });

})();
