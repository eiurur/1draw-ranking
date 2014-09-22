(function(){
  var dir       = '../lib/'
    , _         = require('lodash')
    , moment    = require('moment')
    , my        = require(dir + 'my')
    , exception = require(dir + 'exception')
    , cd        = require(dir + 'corresponddate')
    , settings  = process.env.NODE_ENV === "production" ? require(dir + "production") : require(dir + "development")
    ;

  //====== Mongoose object =======//
  var PostProvider = require(dir + 'model').PostProvider;

  /**
   * Post to tumblr with cron
   */
  var postText2tumblr = function(params) {

    PostProvider.findDescTotalPoint({
        name: params['name']
      , correspondDate: params['correspondDate']
      , numShow: params['numShow']
    }, function(error, postDatas) {
      if(_.isEmpty(postDatas)) return;
      var tags, photos = [];
      var caption = '<strong>' + (postDatas[0].tags.split(","))[2] + '</strong><hr>';
      postDatas.forEach(function (postData, i) {


        // ランキング情報を
        i++;
        if(i === 1) {
          // tags = postData.tags
          tags = (postDatas[0].tags.split(","))[3];
          title = params['correspondDate'];
          caption += '<h2>' + i + '位</h2>';
        } else if (i === 2) {
          caption += '<h3>' + i + '位</h3>';
        } else if (i === 3) {
          caption += '<h4>' + i + '位</h4>';
        } else {
          caption += '<h5>' + i + '位</h5>';
        }
        caption += '<a href="' + postData.tweetUrl + '" target="_blank"><img src="' + postData.sourceUrl + '"></a>';
        caption += '<blockquote>' + postData.tweetText + '</blockquote>';
        caption += '<i class="fa fa-retweet fa-2x fa-border icon-retweet"> ' + postData.retweetNum + '</i>';
        caption += '<i class="fa fa-star fa-2x fa-border icon-star"> ' + postData.favNum + '</i>';
        caption += '<a href="https://twitter.com/' + postData.userId + '" target="_blank"><i class="fa fa-twitter fa-2x fa-border icon-twitter"></i></a>';
        caption += '<br><hr><br>';


        // 投稿する画像を配列に追加していく。ただし、ジャンル問わず10位まで。
        if(i > 10) return;

        // 投稿する画像が複数枚の場合はURLエンコードしたバイナリコンテンツでないとダメ。
        photos.push(new Buffer(postData.sourceUrl).toString('base64'));
        console.log("photos = ", photos);
      });

      // post to tumblr
      // my.cl("Go ------> Tumblr : " + tags);
      // settings.tumblr.post('/post', {
      //     type: 'text'
      //   , tags: tags
      //   , title: title
      //   , body: postText
      // }, function(err, json){
      //   my.cl(json);
      // });

      // post to tumblr

      my.cl("Go ------> Tumblr : " + tags);
      my.cl(photos);
      // if(tags !== 'kc') return;
      settings.tumblr.post('/post', {
          type: 'photo'
        , link: ''
        , tags: tags
        , data: photos
        , caption: caption
      }, function(error, response){
        if(error) console.log(error);
        my.cl(response);
      });
    });
  };

  // for lovelive
  exports.post2Tumblr2200 = function() {
    var nowTime = new Date();

    console.log("post2Tumblr2200");

    settings.CATEGORIES.forEach(function (name) {
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
      postText2tumblr({
          name: name
        , correspondDate: correspondDate
        , numShow: numShow
      });
    });
  };

  // for kancolle, aikatsu, yuruyuri, mobamas
  exports.post2Tumblr2330 = function() {
    var nowTime = new Date();

    console.log("post2Tumblr2330");

    settings.CATEGORIES.forEach(function (name) {
      var numShow = 20
        , correspondDate = cd.getCorrespondDate(name)
        ;

      // 23:30
      // LoveLive!
      if(name !== 'lovelive') return;

      console.log("---------------------------");
      console.log("カテゴリ : " + name);
      postText2tumblr({
          name: name
        , correspondDate: correspondDate
        , numShow: numShow
      });
    });
  };
}).call(this);