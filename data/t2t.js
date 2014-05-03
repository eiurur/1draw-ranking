(function(){
  var ml        = require('./lib')
    , settings  = require('./settings')
    , exception = require('./exception')
    , _         = require('underscore-node')
    , php       = require('phpjs')
    , moment    = require('moment')
    , cd        = require('./corresponddate')
    ;

  //====== Mongoose object =======//
  var PostProvider = require('./model').PostProvider;

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
      var tags, title;
      var postText2Tumblr = '<strong>' + (postDatas[0].tags.split(","))[2] + '</strong><hr>';
      postDatas.forEach(function (postData, i) {
        i++;
        if(i === 1) {
          tags = postData.tags
          title = params['correspondDate'];
          postText2Tumblr += '<h2>' + i + '位</h2>';
        } else if (i === 2) {
          postText2Tumblr += '<h3>' + i + '位</h3>';
        } else if (i === 3) {
          postText2Tumblr += '<h4>' + i + '位</h4>';
        } else {
          postText2Tumblr += '<h5>' + i + '位</h5>';
        }
        postText2Tumblr += '<a href="' + postData.tweetUrl + '" target="_blank"><img src="' + postData.sourceUrl + '"></a>';
        postText2Tumblr += '<blockquote>' + postData.tweetText + '</blockquote>';
        postText2Tumblr += '<i class="fa fa-retweet fa-2x fa-border icon-retweet"> ' + postData.retweetNum + '</i>';
        postText2Tumblr += '<i class="fa fa-star fa-2x fa-border icon-star"> ' + postData.favNum + '</i>';
        postText2Tumblr += '<a href="https://twitter.com/' + postData.userId + '" target="_blank"><i class="fa fa-twitter fa-2x fa-border icon-twitter"></i></a>';
        postText2Tumblr += '<br><hr><br>';
      });

      // post to tumblr
      ml.cl("Go ------> Tumblr : " + tags);
      settings.tumblr.post('/post', {
          type: 'text'
        // , tags: tags
        , title: title
        , body: postText2Tumblr
      }, function(err, json){
        ml.cl(json);
      });
    });
  };

  // for lovelive
  exports.post2Tumblr2200 = function(nowTime) {
    settings.categories.forEach(function (name) {
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
  exports.post2Tumblr2330 = function(nowTime) {
    settings.categories.forEach(function (name) {
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