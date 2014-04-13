// Declare app level module which depends on filters, and services
angular.module('myApp', ['myApp.filters', 'myApp.services', 'myApp.directives', 'nvd3ChartDirectives']).
  config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
    $routeProvider.
      when('/', {
        templateUrl: 'partials/index',
        controller: IndexCtrl
      }).
      when('/showDetail/:name', {
        templateUrl: 'partials/ShowDetail',
        controller: ShowDetailCtrl
      }).
      // when('/readPost/:id', {
      //   templateUrl: 'partials/readPost',
      //   controller: ReadPostCtrl
      // }).
      otherwise({
        redirectTo: '/'
      });
    $locationProvider.html5Mode(true);
  }]);