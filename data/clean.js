(function(){
  var dir       = '../lib/'
    , _         = require('lodash')
    , moment    = require('moment')
    , my        = require(dir + 'my')
    , exception = require(dir + 'exception')
    , cd        = require(dir + 'corresponddate')
    , settings  = process.env.NODE_ENV === "production" ? require(dir + "production") : require(dir + "development")
    ;

  //====== Mongoose object =======//
  var PostProvider = require(dir + 'model').PostProvider;

  exports.cleanOldDataFronDB2200 = function() {

    settings.CATEGORIES.forEach(function (category) {
      var correspondDate = cd.getCorrespondDate(category);

      if(category === 'lovelive') return;

      PostProvider.clean({
          category: category
        , correspondDate: correspondDate
      }, function(err) {
          console.log("clean : category = " + category);
          my.dump(category);
      });
    });
  }


  exports.cleanOldDataFronDB2330 = function() {

    settings.CATEGORIES.forEach(function (category) {
      var correspondDate = cd.getCorrespondDate(category);

      if(category !== 'lovelive') return;

      PostProvider.clean({
          category: category
        , correspondDate: correspondDate
      }, function(err) {
          console.log("clean : category = " + category);
          my.dump(category);
      });
    });
  }

}).call(this);