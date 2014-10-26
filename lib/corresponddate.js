var moment = require('moment');

exports.getCorrespondDate = function(category) {
  var cd;
  var m = moment();
  var hour = m.format("HH");
  var minute = m.format("mm");

  if(category === 'lovelive') {
    if(hour + ":" + minute < "23:30") {
      cd = m.add('days', -1).format("YYYY-MM-DD");
    } else {
      cd = m.format("YYYY-MM-DD");
    }
  } else if(category === 'gf') {
    if(hour + ":" + minute < "22:30") {
      cd = m.add('days', -1).format("YYYY-MM-DD");
    } else {
      cd = m.format("YYYY-MM-DD");
    }
  } else {
    if(hour < 22) {
      cd = m.add('days', -1).format("YYYY-MM-DD");
    } else {
      cd = m.format("YYYY-MM-DD");
    }
  }
  return cd;
};