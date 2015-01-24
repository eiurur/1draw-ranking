exports.serve = function() {

  /**
   * Module dependencies
   */
  var express         = require('express')
    , bodyParser      = require('body-parser')
    , methodOverride  = require('method-override')
    , morgan          = require('morgan')
    , cookieParser    = require('cookie-parser')
    , session         = require('express-session')
    , compression     = require('compression')
    , MongoStore      = require('connect-mongo')(session)
    , passport        = require('passport')
    , TwitterStrategy = require('passport-twitter').Strategy
    , moment          = require('moment')
    , routes          = require('./routes')
    , api             = require('./routes/api')
    , http            = require('http')
    , path            = require('path')
    , UserProvider    = require('../lib/model').UserProvider
    , settings        = process.env.NODE_ENV === "production" ? require("../lib/production") : require("../lib/development")
    ;

  var app = module.exports = express();
  var env = process.env.NODE_ENV || 'development';

  // development only
  if (env === 'development') {
    app.locals.pretty = true;
  }

  // production only
  if (env === 'production') {
  }

  /**
   * passport
   */
  passport.serializeUser(function(user, done) {
    done(null, user);
  });

  passport.deserializeUser(function(obj, done) {
    done(null, obj);
  });

  passport.use(new TwitterStrategy({
    consumerKey: settings.TW_CONSUMER_KEY,
    consumerSecret: settings.TW_CONSUMER_SECRET,
    callbackURL: settings.CALLBACK_URL
  }, function(token, tokenSecret, profile, done) {
      profile.twitter_token = token;
      profile.twitter_token_secret = tokenSecret;
      UserProvider.upsert({
        profile: profile
      }, function(err) {
        if(err) console.log(err);
        return done(null, profile);
      });
    }
  ));

  var options = {
    secret: settings.COOKIE_SECRET,
    saveUninitialized: true,
    resave: false,
    store: new MongoStore({
      url: process.env.MONGOHQ_URL || 'mongodb://127.0.0.1/1draw-ranking',
      "collection": "sessions",
      "clear_interval": 3600,
      "auto_reconnect": true
    })
  };

  var cacheOptions = {
    dotfiles: 'ignore',
    etag: false,
    extensions: ['htm', 'html', 'css', 'js'],
    index: false,
    maxAge: 0,
    redirect: false,
    setHeaders: function (res, path, stat) {
      res.set({
        'x-timestamp': Date.now()
      });
    }
  };


  /**
   * Configuration
   */
  // all environments
  app.disable('x-powered-by');
  app.set('port', process.env.PORT || 9000);
  app.set('views', __dirname + '/views');
  app.set('view engine', 'jade');
  app.use(morgan('dev'));
  app.use(cookieParser());
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({
    extended: true
  }));
  app.use(methodOverride());
  app.use(session(options));
  app.use(passport.initialize());
  app.use(passport.session());

  // gzip
  app.use(compression())
  app.use(express.static(path.join(__dirname, 'public'), cacheOptions));


  /**
   * Routes
   */
  // Twitterの認証
  app.get("/auth/twitter", passport.authenticate('twitter'));

  // Twitterからのcallback
  app.get("/auth/twitter/callback", passport.authenticate('twitter', {
    successRedirect: '/',
    failureRedirect: '/'
  }));

  app.get('/logout', routes.logout);

  // serve index and view partials
  app.get('/', routes.index);
  app.get('/partials/:name', routes.partials);

  // JSON API
  app.get('/api/readAll/:name', api.readAll);
  app.get('/api/readRanking/:name', api.readRanking);
  app.get('/api/readRankingAll/:name/:skip', api.readRankingAll);
  app.get('/api/readRankingAllCategory', api.readRankingAllCategory);
  app.get('/api/readUserPosts/:twitterIdStr', api.readUserPosts);
  app.get('/api/findUserDataByTwitterIdStr/:twitterIdStr', api.findUserDataByTwitterIdStr);
  app.get('/api/isAuthenticated', api.isAuthenticated);
  app.get('/api/getTweeterData/:twitterIdStr', api.getTweeterData);
  app.get('/api/getTweeterTweet/:twitterIdStr/:nextCursorId', api.getTweeterTweet);
  app.get('/api/findTagRegistered', api.findTagRegistered);
  app.get('/api/findTagDefault', api.findTagDefault);
  app.get('/api/findTagAll', api.findTagAll);
  app.get('/api/findCategoriesDefault', api.findCategoriesDefault);
  app.get('/api/findCategoriesAll', api.findCategoriesAll);

  app.post('/api/findUserById', api.findUserById);
  app.post('/api/readOverallRanking', api.readOverallRanking);
  app.post('/api/registerTag', api.registerTag);
  app.post('/api/createFavorite', api.createFavorite);
  app.post('/api/statusesRetweet', api.statusesRetweet);
  app.post('/api/downloadZip', api.downloadZip);

  // redirect all others to the index (HTML5 history)
  app.get('*', routes.index);


  /**
   * Start Server
   */
  http.createServer(app).listen(app.get('port'), function () {
    console.log('Express server listening on port ' + app.get('port'));
  });
}