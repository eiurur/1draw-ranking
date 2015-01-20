(function(){
  var _        = require('lodash')
    , moment   = require('moment')
    , my       = require('./my')
    , settings = process.env.NODE_ENV === "production" ? require("./production") : require("./development")
    ;

  exports.getDeadline =  function(category) {
    var deadline = _.where(settings.DEADLINES, {'category': [category]})[0];
    return (_.isUndefined(deadline)) ? '22:00' : deadline.time;
  }

}).call(this);