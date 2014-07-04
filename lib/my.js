(function(){
	var util    = require('util');
	exports.cl = function(t) {
		console.log(t);
	};
	exports.dump = function(obj) {
		console.log(util.inspect(obj,false,null));
	};
}).call(this);