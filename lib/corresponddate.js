exports.getCorrespondDate = function(category) {
  var _            = require('lodash')
    , moment       = require('moment')
    , my           = require('./my')
    , dependModule = require('./dependModule')
    ;

  var deadline = dependModule.getDeadline(category);
  var nowHm = my.formatHm();
  return  (nowHm < deadline) ? moment().add('days', -1).format("YYYY-MM-DD") : my.formatYMD();
};