(function(){
  var util    = require('util')
    , moment  = require('moment')
    , request = require('request')
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

  exports.formatHm = function(time) {
    if (time != null) {
      return moment(new Date(time)).format("HH:mm");
    } else {
      return moment().format("HH:mm");
    }
  };

  exports.formatYMD = function(time) {
    if (time != null) {
      return moment(new Date(time)).format("YYYY-MM-DD");
    } else {
      return moment().format("YYYY-MM-DD");
    }
  };

  exports.formatYMDHm = function(time) {
    if (time != null) {
      return moment(new Date(time)).format("YYYY-MM-DD HH:mm");
    } else {
      return moment().format("YYYY-MM-DD HH:mm");
    }
  };

  exports.formatYMDHms = function(time) {
    if (time != null) {
      return moment(new Date(time)).format("YYYY-MM-DD HH:mm:ss");
    } else {
      return moment().format("YYYY-MM-DD HH:mm:ss");
    }
  };

  exports.addDaysFormatYMDHms = function(days, time) {
    if (time != null) {
      return moment(new Date(time)).add('d', days).format("YYYY-MM-DD HH:mm:ss");
    } else {
      return moment().add('d', days).format("YYYY-MM-DD HH:mm:ss");
    }
  };

  exports.addDaysFormatYMD = function(days, time) {
    if (time != null) {
      return moment(new Date(time)).add('d', days).format("YYYY-MM-DD");
    } else {
      return moment().add('d', days).format("YYYY-MM-DD");
    }
  };

  exports.getTweetData = function(tweet, key, isRT) {
    var t, _ref, _ref1, _ref2;
    t = isRT ? tweet.retweeted_status : tweet;
    switch (key) {
      case 'description':
        return t.user.description;
      case 'display_url':
        return (_ref = t.entities) != null ? (_ref1 = _ref.media) != null ? _ref1[0].display_url : void 0 : void 0;
      case 'entities':
        return t.entities;
      case 'expanded_url':
        return (_ref2 = t.entities) != null ? (_ref3 = _ref2.media) != null ? _ref3[0].expanded_url : void 0 : void 0;
      case 'followers_count':
        return t.user.followers_count;
      case 'friends_count':
        return t.user.friends_count;
      case 'hashtags':
        return (_ref4 = t.entities) != null ? _ref4.hashtags : void 0;
      case 'media_url':
        return (_ref5 = t.entities) != null ? (_ref6 = _ref5.media) != null ? _ref6[0].media_url : void 0 : void 0;
      case 'name':
        return t.user.name;
      case 'profile_banner_url':
        return t.user.profile_banner_url;
      case 'profile_image_url':
        return t.user.profile_image_url;
      case 'profile_image_url_bigger':
        return t.user.profile_image_url.replace('normal', 'bigger');
      case 'statuses_count':
        return t.user.statuses_count;
      case 'screen_name':
        return t.user.screen_name;
      case 'source':
        return t.source;
      case 'text':
        return t.text;
      case 'timestamp_ms':
        return t.timestamp_ms;
      case 'tweet.created_at':
        return t.created_at;
      case 'tweet.favorite_count':
        return t.favorite_count;
      case 'tweet.retweet_count':
        return t.retweet_count;
      case 'tweet.id_str':
        return t.id_str;
      case 'tweet.lang':
        return t.lang;
      case 'user.created_at':
        return t.user.created_at;
      case 'user.id_str':
        return t.user.id_str;
      case 'user.favorite_count':
        return t.user.favorite_count;
      case 'user.retweet_count':
        return t.user.retweet_count;
      case 'user.lang':
        return t.user.lang;
      case 'user.url':
        return t.user.url;
      default:
        return null;
    }
  }

  exports.loadBase64Data = function(url) {
    return new Promise(function(resolve, reject) {
      return request({
        url: url,
        encoding: null
      }, function(err, res, body) {
        var base64prefix, image;
        if (!err && res.statusCode === 200) {
          base64prefix = 'data:' + res.headers['content-type'] + ';base64,';
          image = body.toString('base64');
          return resolve(base64prefix + image);
        } else {
          return reject(err);
        }
      });
    });
  }

}).call(this);