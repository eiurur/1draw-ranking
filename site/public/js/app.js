angular.module('myApp', [
    'ngRoute'
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
      when('/user/:twitterIdStr', {
        templateUrl: 'partials/user',
        controller: 'UserCtrl'
      }).
      when('/logout', {
        redirectTo: '/'
      }).
      // when('http://127.0.0.1:9000/auth/twitter/callback', {
      when('http://ldraw-ranking.herokuapp.com/auth/twitter/callback', {
        redirectTo: '/'
      });
    $locationProvider.html5Mode(true);
  }]);