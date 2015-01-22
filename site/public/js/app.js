angular.module('myApp', [
    'ngRoute'
  , 'ngAnimate'
  , 'ngSanitize'
  , 'toaster'
  , 'bootstrapLightbox'
  , 'myApp.filters'
  , 'myApp.services'
  , 'myApp.directives'
  , 'myApp.controllers'
  ]).
  config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
    $routeProvider.
      when('/', {
        templateUrl: 'partials/index',
        controller: 'IndexCtrl'
      }).
      when('/detail/:name', {
        templateUrl: 'partials/detail',
        controller: 'DetailCtrl'
      }).
      when('/my', {
        templateUrl: 'partials/my',
        controller: 'MyCtrl'
      }).
      when('/my/post/:twitterIdStr', {
        templateUrl: 'partials/my_post',
        controller: 'MyPostCtrl'
      }).
      when('/my/setting/tag', {
        templateUrl: 'partials/my_tag',
        controller: 'MyTagCtrl'
      }).
      // ここに/my/setting/watchlist　くる
      when('/user/:twitterIdStr', {
        templateUrl: 'partials/user',
        controller: 'UserCtrl'
      }).
      when('/logout', {
        redirectTo: '/'
      }).
      when('http://127.0.0.1:9000/auth/twitter/callback', {
        redirectTo: '/'
      }).
      when('http://ldraw-ranking.herokuapp.com/auth/twitter/callback', {
        redirectTo: '/'
      });
    $locationProvider.html5Mode(true);
  }]).
  config(function(LightboxProvider) {
    LightboxProvider.templateUrl = 'templete/lightbox.html';
    LightboxProvider.getImageUrl = function(image) {
      return image.sourceOrigUrl || image.extended_entities.media[0].media_url + ':orig';

      // origサイズだと携帯からの閲覧はパフォーマンス的に厳しいからlargeサイズに変換する。
      // でも、画像長押しで保存したい。どっちも優先すべきか…。
      // if(image.sourceUrl) {
      //   return image.sourceUrl.replace(/:medium/g, ':large');
      // }
      // return image.extended_entities.media[0].media_url + ':large';
    };
    LightboxProvider.getImageCaption = function(image) {
      return {
        tweetIdStr: image.tweetIdStr,
        userIdStr: image.userIdStr,
        url: image.sourceOrigUrl,
        text: image.text,
        name: image.name,
        screenName: image.screenName,
        icon: image.icon
      };
    };
    LightboxProvider.calculateImageDimensionLimits = function(dimensions) {
      return {
        maxWidth: dimensions.windowWidth - 102
      };
    };
    return LightboxProvider.calculateModalDimensions = function(dimensions) {
      var width;
      width = Math.max(200, dimensions.imageDisplayWidth + 2);
      return {
        width: width,
        height: "auto"
      };
    };
  });
