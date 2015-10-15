var sushi = require('sushi')
  , path  = require('path')
  , t2t   = require(path.resolve('tumblr', 't2t'))
  ;

var app = sushi();

app.on('test', function() {
  console.log('test');
});

app.on('post', function(args) {
  var category = args.category;
  var date = args.date;

  console.log('category: ', category);
  console.log('date: ', date);

  t2t.post({category: category, date: date});
});

app.run();