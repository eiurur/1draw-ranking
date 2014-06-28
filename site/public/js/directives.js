'use strict';

/* Directives */

angular.module('myApp.directives', [])
  .directive('imgPreload', ['$rootScope', function($rootScope) {
    // return {
    //   restrict: 'A',
    //   scope: {
    //     ngSrc: '@'
    //   },
    //   link: function(scope, element, attrs) {
    //     element.on('load', function() {
    //       element.addClass('in');
    //     }).on('error', function() {
    //       //
    //     });
    //   }
    // };
  }]);