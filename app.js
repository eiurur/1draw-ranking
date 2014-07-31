(function() {
  var async               = require('async')
    , cronJob             = require('cron').CronJob
    , newrelic            = require('newrelic')
    , my                  = require('./lib/my')
    , serve               = require('./site/app').serve
    , getTweetFromTwitter = require('./data/app').getTweetFromTwitter
    , manageCron          = require('./lib/manage-cron').manageCron
    , settings            = process.env.NODE_ENV === "production" ? require("./lib/production") : require("./lib/development")
    ;

  tasks4StartUp = [

    function(callback) {

      console.log("■ Server task start");

      serve(null, "Create Server");

      setTimeout((function(){
        return callback(null, "Create! Server\n");
      }), 1000);

    }, function(callback) {

      console.log("■ Cron task start");

      manageCron(null, "Start up Cron");

      setTimeout((function(){
        return callback(null, "Ok! Cron\n");
      }), 1000);

    }, function(callback) {

      console.log("■ Twitter task start");

      getTweetFromTwitter(null, "Getting Tweet");

      setTimeout((function(){
        return callback(null, "Go! Twitter\n");
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
