(function(){
  var _        = require('lodash')
    , moment   = require('moment')
    , my       = require('./my')
    , settings = process.env.NODE_ENV === "production" ? require("./production") : require("./development")
    ;

  exports.getDeadline =  function(category) {
    deadline = _.find(settings.DEADLINES, {'category': category});
    return (_.isUndefined(deadline)) ? '22:00' : deadline.time;
  }

}).call(this);