'use strict';

/* Directives */

angular.module('myApp.directives', []).
  directive('tallyChart', function (version) {
    return function(scope, elm, attrs) {
      elm.text(version);
    };
  });
