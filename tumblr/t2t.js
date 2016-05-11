(function(){
  var dir          = '../lib/'
    , _            = require('lodash')
    , moment       = require('moment')
    , request      = require('request')
    , my           = require(dir + 'my')
    , exception    = require(dir + 'exception')
    , cd           = require(dir + 'corresponddate')
    , PostProvider = require(dir + 'model').PostProvider
    , settings     = process.env.NODE_ENV === "production" ? require(dir + "production") : require(dir + "development")
    ;


  var getTags = function(hashtag) {
    var idx  = _.indexOf(settings.KEYWORDS_DEFAULT, hashtag);
    return settings.TAGS[idx];
  };

  var postPhots2tumblr = function(params) {
    var photos = [];

    PostProvider.findDescTotalPoint({
        name: params['name']
      , correspondDate: params['correspondDate']
      , numShow: params['numShow']
    }, function(error, postDatas) {
      if(_.isEmpty(postDatas)) return;
      var tags, title;
      tags = getTags(postDatas[0].tags);


      var postText = '<strong>' + '【' + params['correspondDate'] + '】 ' +  postDatas[0].tags + '</strong><hr><p>[[MORE]]</p>';
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
        postText += '<i class="fa fa-heart fa-2x fa-border icon-heart"> ' + postData.favNum + '</i>';
        postText += '<a href="https://twitter.com/' + postData.userScreenName + '" target="_blank"><i class="fa fa-twitter fa-2x fa-border icon-twitter"></i></a>';
        postText += '<br><hr><br>';
      });

      settings.client.photo(settings.TUMBLOG_NAME, {
        caption: postText,
        data: photos,
        tags: tags
      }, function (err, res) {
        if(err) {
          console.log(err);
        }
        console.log(res); // use them for something
      });
    });
  }


  /**
   * post to tumblr from CLI
   * @param  {Object} params category format is 'aikatsu', date format is '2015-10-15'
   */
  exports.post = function(params) {
    console.log("postByCategory:: category = " + params.category + ", date: "  + params.date);
    postPhots2tumblr({
        name: params.category
      , correspondDate: params.date
      , numShow: 10
    });
  };


  // for kancolle, aikatsu, yuruyuri, mobamas
  exports.post2Tumblr2200 = function() {
    var nowTime = new Date();

    console.log("post2Tumblr2200");

    settings.CATEGORIES_DEFAULT.forEach(function (name) {
      var numShow = 10
        , correspondDate = cd.getCorrespondDate(name)
        ;

      // 21:59
      // Kancolle, Yuruyuri, Aikatsu!
      if(name === 'lovelive') return;

      // 非公式版のアカウント(@pokeT1DRAW)が再開させたものの、曜日にとって開始時刻が違い、対応させるのが面倒なのでTumblrにはいっそ投稿しないことにした。
      if(name === 'ptrainer') return;

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
  exports.post2Tumblr2300 = function() {
    var nowTime = new Date();

    console.log("post2Tumblr2300");

    settings.CATEGORIES_DEFAULT.forEach(function (name) {
      var numShow = 10
        , correspondDate = cd.getCorrespondDate(name)
        ;

      // 23:00
      // LoveLive!
      if(name !== 'lovelive') return;

      // 非公式版のアカウント(@pokeT1DRAW)が再開させたものの、曜日にとって開始時刻が違い、対応させるのが面倒なのでTumblrにはいっそ投稿しないことにした。
      if(name === 'ptrainer') return;

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