(function(){
	var util   = require('util')
    , moment = require('moment')
    ;

	exports.cl = function(t) {
		console.log(t);
	};
	exports.dump = function(obj) {
		console.log(util.inspect(obj,false,null));
	};
  exports.formatX = function(time) {
    if (time != null) {
      return moment(time).format("X");
    } else {
      return moment().format("X");
    }
  };
}).call(this);