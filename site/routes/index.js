
/*
 * GET home page.
 */

var moment = require('moment');

exports.index = function(req, res){
  // res.setHeader('Last-Modified', moment().format('YYYY-MM-DD HH:mm:ss'));
  res.render('index');
};

exports.logout = function(req, res){
  console.log("index.js logout()");
  req.logout();
  console.log("index.js -> /");
  res.redirect('/');
}

exports.partials = function (req, res) {
  var name = req.params.name;
  res.header('Expires', Date.now());
  res.render('partials/' + name);
};