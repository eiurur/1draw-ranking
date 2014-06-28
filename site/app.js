exports.serve = function() {

  /**
   * Module dependencies
   */

  var express = require('express')
    , routes  = require('./routes')
    , api     = require('./routes/api')
    , http    = require('http')
    , path    = require('path')
    , util    = require('util')
    , app     = module.exports = express()
    , server  = http.createServer(app)
    , io      = require('socket.io').listen(server)
    ;

  io.set('log level', 1);


  /**
   * Configuration
   */

  // all environments
  app.disable('x-powered-by');
  app.set('port', process.env.PORT || 9000);
  app.set('views', __dirname + '/views');
  app.set('view engine', 'jade');
  app.locals.pretty = true;
  app.use(express.logger('dev'));
  app.use(express.bodyParser());
  app.use(express.methodOverride());
  app.use(express.static(path.join(__dirname, 'public')));
  app.use(app.router);
  app.use(function(req, res, next){
    res.status(404);
    res.render('404', {title: "お探しのページは存在しません。"});
  });


  // development only
  if (app.get('env') === 'development') {
    app.use(express.errorHandler());
  }

  // production only
  if (app.get('env') === 'production') {
    // TODO
  }


  /**
   * Routes
   */

  // serve index and view partials
  app.get('/', routes.index);
  app.get('/partials/:name', routes.partials);

  // JSON API
  app.get('/api/readAll/:name', api.readAll);
  app.get('/api/readRanking/:name', api.readRanking);
  app.get('/api/readRankingAllCategory', api.readRankingAllCategory);

  app.get('*', routes.index);


  /**
   * Start Server
   */
  http.createServer(app).listen(app.get('port'), function () {
    console.log('Express server listening on port ' + app.get('port'));
  });
}
