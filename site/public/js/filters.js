'use strict';

/* Filters */

angular.module('myApp.filters', []).
  filter('isEmpty', function () {
    var item;
    return function (obj) {
      for (item in obj) {
        if (obj.hasOwnProperty(item)) {
          return false;
        }
      }
      return true;
    };
  });
