angular.module('myApp', [
    'ngRoute'
  , 'ngAnimate'
  , 'ngSanitize'
  // , 'bootstrapLightbox'
  , 'toaster'
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
  }]);
