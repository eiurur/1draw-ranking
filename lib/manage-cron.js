(function() {
  var http      = require('http')
    , path      = require('path')
    , util      = require('util')
    , _         = require('lodash')
    , cronJob   = require('cron').CronJob
    , my        = require('./my')
    , t2t       = require('../tumblr/t2t')
    , clean     = require('../data/clean')
    , settings  = process.env.NODE_ENV === "production" ? require("./production") : require("./development")
    , CRON_JOBS = [
        {
            time: "59 21 * * *"
          , job: t2t.post2Tumblr2200
        },
        {
            time: "29 23 * * *"
          , job: t2t.post2Tumblr2330
        },
        {
            time: "00 22 * * *"
          , job: clean.cleanOldDataFronDB2200
        },
        {
            time: "30 23 * * *"
          , job: clean.cleanOldDataFronDB2330
        }
      ]
    ;

  exports.manageCron = function() {
    var job;
    _.each(CRON_JOBS, function(item, index) {
      console.log(item);
      job = new cronJob({
        cronTime: item.time

        , onTick: function() {
          item.job.call();
        }

        , onComplete: function() {
          console.log('Completed.');
        }

        , start: true
        , timeZone: "Japan/Tokyo"
      });
    });
  }

})();