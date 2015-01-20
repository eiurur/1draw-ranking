'use strict';

/* Filters */

angular.module('myApp.filters', [])
  .filter('isEmpty', function () {
    var item;
    return function (obj) {
      for (item in obj) {
        if (obj.hasOwnProperty(item)) {
          return false;
        }
      }
      return true;
    };
  })
  .filter("interpolate", function(version) {
    return function(text) {
      return String(text).replace(/\%VERSION\%/g, version);
    };
  })
  .filter("noHTML", function() {
    return function(text) {
      if (text != null) {
        return text.replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/&/, '&amp;');
      }
    };
  })
  .filter('newlines', function($sce) {
    return function(text) {
      return $sce.trustAsHtml(text != null ? text.replace(/\n/g, '<br />') : '');
    };
  });

