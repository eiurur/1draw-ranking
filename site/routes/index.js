
/*
 * GET home page.
 */

exports.index = function(req, res){
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
  res.render('partials/' + name);
};