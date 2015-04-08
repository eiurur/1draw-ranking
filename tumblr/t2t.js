(function(){
  var dir       = '../lib/'
    , _         = require('lodash')
    , moment    = require('moment')
    , request   = require('request')
    , my        = require(dir + 'my')
    , exception = require(dir + 'exception')
    , cd        = require(dir + 'corresponddate')
    , settings  = process.env.NODE_ENV === "production" ? require(dir + "production") : require(dir + "development")
    ;

  //====== Mongoose object =======//
  var PostProvider = require(dir + 'model').PostProvider;



  var convert2Binary = function(data) {

    var loadBase64Image = function (url) {
      return new Promise(function(resolve, reject) {
        request({
            url: url
          , encoding: null
        }, function (err, res, body) {
          // body is binary

          if (!err && res.statusCode == 200) {
            var base64prefix = 'data:' + res.headers['content-type'] + ';base64,';
            var image = body.toString('base64');
            var binary = body.toString('binary');
            return resolve(image + base64prefix);
          } else {
            return reject(err);
            throw new Error('Can not download image');
          }
        });
      });
    };

    var tasks = [];
    _.each(data, function(image){
      console.log("image = ", image);
      tasks.push(
        new Promise(function(resolve, reject) {
          loadBase64Image(image)
          .then(function(imageBase64) {
            console.log('imageBase64 = ', imageBase64);
            return resolve(imageBase64);
          })
          .catch(function(error) {
            console.log('error = ', error);
            return resolve('');
          });
        })
      );
    });

    return new Promise(function (resolve, reject) {
      Promise.all(tasks)
      .then(function(base64Array) {
        // console.log('base64Array = ', base64Array);
        console.log('base64ArrayCompacted.length = ', base64Array.length);
        console.log('base64ArrayCompacted.length = ');
        return resolve(base64Array);
      });
    });
  }

  /**
   * Post to tumblr with cron
   */
  var postText2tumblr = function(params) {
    photos = [];

    PostProvider.findDescTotalPoint({
        name: params['name']
      , correspondDate: params['correspondDate']
      , numShow: params['numShow']
    }, function(error, postDatas) {
      if(_.isEmpty(postDatas)) return;
      var tags, title;
      var postText = '<strong>' + postDatas[0].tags + '</strong><hr>';
      postDatas.forEach(function (postData, i) {
        photos.push(postData.sourceUrl);

        i++;
        if(i === 1) {
          title = params['correspondDate'];
          postText += '<h2>' + i + '位</h2>';
        } else if (i === 2) {
          postText += '<h3>' + i + '位</h3>';
        } else if (i === 3) {
          postText += '<h4>' + i + '位</h4>';
        } else {
          postText += '<h5>' + i + '位</h5>';
        }
        postText += '<a href="' + postData.tweetUrl + '" target="_blank"><img src="' + postData.sourceUrl + '"></a>';
        postText += '<blockquote>' + postData.tweetText + '</blockquote>';
        postText += '<i class="fa fa-retweet fa-2x fa-border icon-retweet"> ' + postData.retweetNum + '</i>';
        postText += '<i class="fa fa-star fa-2x fa-border icon-star"> ' + postData.favNum + '</i>';
        postText += '<a href="https://twitter.com/' + postData.userScreenName + '" target="_blank"><i class="fa fa-twitter fa-2x fa-border icon-twitter"></i></a>';
        postText += '<br><hr><br>';
      });

      // post to tumblr
      my.cl("Go ------> Tumblr : " + postText);
      // settings.tumblr.post('/post', {
      //     type: 'text'
      //   , title: title
      //   , body: postText
      // }, function(err, json){
      //   my.cl(json);
      // });

      convert2Binary(photos)
      .then(function(data) {
        // console.log('data = ', data);

        settings.tumblr.post('/post', {
          type: 'photo',
          caption: postText,
          data: data
        }, function(err, json){
          if(err) {
            my.cl(err);
          }
          my.cl(json);
        });

      });
    });
  };

  var postPhots2tumblr = function(params) {
    photos = [];

    PostProvider.findDescTotalPoint({
        name: params['name']
      , correspondDate: params['correspondDate']
      , numShow: params['numShow']
    }, function(error, postDatas) {
      if(_.isEmpty(postDatas)) return;
      var tags, title;
      var postText = '<strong>' + postDatas[0].tags + '</strong><hr><p>[[MORE]]</p>';
      postDatas.forEach(function (postData, i) {
        photos.push(postData.sourceUrl);

        i++;
        if(i === 1) {
          title = params['correspondDate'];
          postText += '<h2>' + i + '位</h2>';
        } else if (i === 2) {
          postText += '<h3>' + i + '位</h3>';
        } else if (i === 3) {
          postText += '<h4>' + i + '位</h4>';
        } else {
          postText += '<h5>' + i + '位</h5>';
        }
        postText += '<a href="' + postData.tweetUrl + '" target="_blank"><img src="' + postData.sourceUrl + '"></a>';
        postText += '<blockquote>' + postData.tweetText + '</blockquote>';
        postText += '<i class="fa fa-retweet fa-2x fa-border icon-retweet"> ' + postData.retweetNum + '</i>';
        postText += '<i class="fa fa-star fa-2x fa-border icon-star"> ' + postData.favNum + '</i>';
        postText += '<a href="https://twitter.com/' + postData.userScreenName + '" target="_blank"><i class="fa fa-twitter fa-2x fa-border icon-twitter"></i></a>';
        postText += '<br><hr><br>';
      });

      settings.client.photo(settings.TUMBLOG_NAME, {
        caption: postText,
        data: photos
      }, function (err, resp) {
        if(err) {
          console.log(err);
        }
        console.log(resp.posts); // use them for something
      });
    });
  }


  // for kancolle, aikatsu, yuruyuri, mobamas
  exports.post2Tumblr2200 = function() {
    var nowTime = new Date();

    console.log("post2Tumblr2200");

    settings.CATEGORIES_DEFAULT.forEach(function (name) {
      var numShow
        , correspondDate = cd.getCorrespondDate(name)
        ;

      // 21:59
      // Kancolle, Yuruyuri, Aikatsu!
      if(name === 'lovelive') return;

      if(name === 'kancolle') {
        numShow = 20;
      } else {
        numShow = 10;
      }
      console.log("---------------------------");
      console.log("カテゴリ : " + name);
      postPhots2tumblr({
          name: name
        , correspondDate: correspondDate
        , numShow: numShow
      });
    });
  };

  // for lovelive
  exports.post2Tumblr2330 = function() {
    var nowTime = new Date();

    console.log("post2Tumblr2330");

    settings.CATEGORIES_DEFAULT.forEach(function (name) {
      var numShow = 20
        , correspondDate = cd.getCorrespondDate(name)
        ;

      // 23:30
      // LoveLive!
      if(name !== 'lovelive') return;

      console.log("---------------------------");
      console.log("カテゴリ : " + name);
      postPhots2tumblr({
          name: name
        , correspondDate: correspondDate
        , numShow: numShow
      });
    });
  };
}).call(this);