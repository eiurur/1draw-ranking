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
    , MongoStore      = require('connect-mongo')(session)
    , passport        = require('passport')
    , TwitterStrategy = require('passport-twitter').Strategy
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
  // Passport sessionのセットアップ
  passport.serializeUser(function(user, done) {
    done(null, user);
  });

  passport.deserializeUser(function(obj, done) {
    done(null, obj);
  });

  // PassportでTwitterStrategyを使うための設定
  passport.use(new TwitterStrategy({
    consumerKey: settings.TW_CONSUMER_KEY,
    consumerSecret: settings.TW_CONSUMER_SECRET,
    callbackURL: settings.CALLBACK_URL
  }, function(token, tokenSecret, profile, done) {
      profile.twitter_token = token;
      profile.twitter_token_secret = tokenSecret;
      // console.log("User profile = ", profile);
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
      "db": "1draw-ranking",
      "host": "127.0.0.1",
      "port": "27017",
      "collection": "sessions",
      "clear_interval": 3600,
      "auto_reconnect": true
    })
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
  app.use(express.static(path.join(__dirname, 'public')));


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
  app.get('/api/readRankingAllCategory', api.readRankingAllCategory);
  app.get('/api/readUserPosts/:twitterIdStr', api.readUserPosts);
  app.get('/api/isAuthenticated', api.isAuthenticated);
  app.post('/api/findUserById', api.findUserById);
  app.post('/api/createFavorite', api.createFavorite);
  app.post('/api/statusesRetweet', api.statusesRetweet);


  // redirect all others to the index (HTML5 history)
  app.get('*', routes.index);


  /**
   * Start Server
   */

  http.createServer(app).listen(app.get('port'), function () {
    console.log('Express server listening on port ' + app.get('port'));
  });
}