'use strict';

/* Directives */

angular.module('myApp.directives', [])
  .directive('imgPreload', ['$rootScope', function($rootScope) {
    return {
      restrict: 'A',
      scope: {
        ngSrc: '@'
      },
      link: function(scope, element, attrs) {
        element.on('load', function() {
          element.addClass('in');
        }).on('error', function() {
          //
        });
      }
    };
  }])
  .directive('favoritable', [ 'FavService', function (FavService) {
    return {
      restrict: 'A',
      scope: {
        num: '='
      },
      link: function(scope, element, attrs) {
        element.on('click', function(event) {
          console.log("attrs  = ", attrs);
          FavService.createFavorite(attrs.tweetIdStr)
            .success(function(data) {
              console.log("createFavoeite data = ", data);
              scope.num += (data.action === 'create') ? 1 : -1;
              // element.toggleClass('icon-stared');
            });
        });
      }
    };
  }])
  .directive('retweetable', [ 'RetweetService', function (RetweetService) {
    return {
      restrict: 'A',
      scope: {
        num: '='
      },
      link: function(scope, element, attrs) {
        element.on('click', function(event) {
          console.log("attrs  = ", attrs);
          RetweetService.statusesRetweet(attrs.tweetIdStr)
            .success(function(data) {
              console.log("RetweetService data = ", data);
              scope.num += (data.action === 'create') ? 1 : -1;
              // element.toggleClass('icon-stared');
            });
        });
      }
    };
  }]);