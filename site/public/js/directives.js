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
  }])
  .directive('post', function () {
    return {
      restrict: 'E',
      scope: {
        post: '='
      },
      template: (function () {/*
        <img img-preload="img-preload" ng-src="{{post.sourceUrl}}" class="img-responsive thumb-pict fade"/>
        <div class="pict-discription">
          <div>
            <i data-tweet-id-str="{{post.tweetIdStr}}" retweetable="retweetable" class="fa fa-retweet fa-border icon-retweet"> {{post.retweetNum}}</i>
            <i data-tweet-id-str="{{post.tweetIdStr}}" favoritable="favoritable" class="fa fa-star fa-border icon-star"> {{post.favNum}}</i>
            <a href="https://{{post.tweetUrl}}" target="_blank">
              <div class="fa fa-twitter fa-border icon-twitter"></div>
            </a>
            <a href="{{post.sourceOrigUrl}}" download="download">
              <div class="fa fa-download fa-border"></div>
            </a>
          </div>
        </div>
      */}).toString().replace(/(\n)/g, '').split('*')[1]
    };
  })
  .directive('loading', function () {
    return {
      restrict: 'E',
      scope: {
        judgementMaterialWhetherOrNotShowLoading: '=',
        judgementMaterialWhetherOrNotHidePageContent: '='
      },
      template: (function () {/*
        <div ng-hide="judgementMaterialWhetherOrNotShowLoading">
          <div ng-hide="judgementMaterialWhetherOrNotHidePageContent == 0"><i class="fa fa-refresh fa-5x pull-left fa-spin"></i>
          </div>
          <div ng-show="judgementMaterialWhetherOrNotHidePageContent == 0"><span class="fa-stack fa-5x"><i class="fa fa-picture-o fa-stack-1x pull-left"></i><i class="fa fa-ban fa-stack-2x pull-left text-danger"></i></span>
            <div class="fa-5x">No data ...
            </div>
          </div>
        </div>
      */}).toString().replace(/(\n)/g, '').split('*')[1]
    };
  });