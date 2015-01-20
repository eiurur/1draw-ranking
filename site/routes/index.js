
/*
 * GET home page.
 */

var moment = require('moment')
  , _      = require('lodash')
  ;

exports.index = function(req, res){
  res.render('index');
};

exports.logout = function(req, res){
  console.log("index.js logout()");

  if(!_.has(req.session, 'id')) return;

  req.session.destroy();
  req.logout();
  console.log("index.js -> /");
  res.redirect('/');
}

exports.partials = function (req, res) {
  var name = req.params.name;
  res.header('Expires', Date.now());
  res.render('partials/' + name);
};