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
  .directive('favoritable', ['toaster', 'FavService', function (toaster, FavService) {
    return {
      restrict: 'A',
      link: function(scope, element, attrs) {
        element.on('click', function(event) {
          FavService.createFavorite(attrs.tweetIdStr)
            .success(function(data) {
              console.log(data);
              if(data.data === null) {
                toaster.pop('warning', "既にお気に入り済みです。");
              } else {
                toaster.pop('success', "お気に入りに追加しました。", '<img src="' + data.data.entities.media[0].media_url + '" class="notify-success-img">', 3000, 'trustedHtml');
              }
            }).error(function(status, data) {

               console.log(status);
               console.log(data);

            });
        });
      }
    };
  }])
  .directive('retweetable', [ 'toaster', 'RetweetService', function (toaster, RetweetService) {
    return {
      restrict: 'A',
      scope: {
        num: '='
      },
      link: function(scope, element, attrs) {
        element.on('click', function(event) {
          if(!window.confirm('リツイートしてもよろしいですか？')) return;
          RetweetService.statusesRetweet(attrs.tweetIdStr)
            .success(function(data) {
              if(data.data === null) {
                toaster.pop('warning', "既にリツイート済みです。");
              } else {
                console.log(data.data.entities.media[0].media_url)
                toaster.pop('success', "リツイートしました。", '<img src="' + data.data.entities.media[0].media_url + '" class="notify-success-img">', 3000, 'trustedHtml');
              }
            });
        });
      }
    };
  }])
  .directive('pageTitle', function () {
    return {
      restrict: 'E',
      scope: {
        judgementMaterialWhetherOrNotShowLoading: '=',
        pageTitle: '='
      },
      template: (function () {/*
        <div ng-show="judgementMaterialWhetherOrNotShowLoading" class="content-header">
          <h1>{{pageTitle}}</h1>
        </div>
      */}).toString().replace(/(\n)/g, '').split('*')[1]
    };
  })
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
            <a href="user/{{post.userIdStr}}" >
              <div class="fa fa-user fa-border"></div>
            </a>
            <a href="https://{{post.tweetUrl}}" target="_blank">
              <div class="fa fa-twitter fa-border icon-twitter"></div>
            </a>
            <a href="{{post.sourceOrigUrl}}?.jpg" download="download">
              <div class="fa fa-download fa-border"></div>
            </a>
          </div>
        </div>
      */}).toString().replace(/(\n)/g, '').split('*')[1]
    };
  })
  .directive('panel', function () {
    return {
      restrict: 'E',
      scope: {
        panelTitle: '@',
        postWidth: '=',
        posts: '=',
        orderByExpression: '@',
        orderByDirection: '@',
        limitNum: '@'
      },
      template: (function () {/*
        <div class='panel panel-default'>
          <div class='panel-heading'>
            <h3 class='panel-title'>{{panelTitle}}
            </h3>
          </div>
          <div style='overflow-x: scroll;'>
            <div style='width:{{postWidth}}px;' class='panel-body'>
              <div ng-repeat='post in posts | orderBy: orderByExpression : orderByDirection | limitTo : limitNum' class='box'>
                <post post='post'>
                </post>
              </div>
            </div>
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