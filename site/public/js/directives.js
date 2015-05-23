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
  .directive('downloadZip', [ 'toaster', 'DownloadService', function (toaster, DownloadService) {
    return {
      restrict: 'A',
      link: function(scope, element, attrs) {
        element.on('click', function(event) {

          // postデータは文字列として渡されるからオブジェクト？配列？の形式に直す。
          // TODO: zipFolderNameの定義は外部で行う。
          var postsParsed = JSON.parse(attrs.posts);
          var tag = postsParsed[0].tags;
          var userName = postsParsed[0].userName;
          var userScreenName = postsParsed[0].userScreenName;
          var zipFolderName = "【" + tag + "】 " + userName + " 【@" + userScreenName + "】.zip";

          toaster.pop('wait', "Now Zip Downloading ...", '', 0, 'trustedHtml');

          DownloadService.zip(postsParsed)
            .success(function(data) {
              var zip = new JSZip();
              _.each(data.data, function(file){
                zip.file(file.name + '.jpg', file.image, {base64: true});
              });
              var content = zip.generate({type:"blob"});
              saveAs(content, zipFolderName);

              // Fix: 複数DL中に一つ終えると全部のtoasterが消える。
              toaster.clear();
              toaster.pop('success', "Finished Download", '', 3000, 'trustedHtml');
            });
        });
      }
    };
  }])
  .directive('downloadFromUrl', ["toaster", "DownloadService", "ConvertService", function(toaster, DownloadService, ConvertService) {
    return {
      restrict: 'A',
      link: function(scope, element, attrs) {
        return element.on('click', function(event) {
          toaster.pop('wait', "Now Downloading ...", '', 0, 'trustedHtml');
          return DownloadService.exec(attrs.url).success(function(data) {
            var blob, ext, filename;
            blob = ConvertService.base64toBlob(data.base64Data);
            ext = /media\/.*\.(png|jpg|jpeg):orig/.exec(attrs.url)[1];
            filename = "" + attrs.filename + "." + ext;
            saveAs(blob, filename);
            toaster.clear();
            return toaster.pop('success', "Finished Download", '', 2000, 'trustedHtml');
          });
        });
      }
    };
  }])
  .directive("scrollOnClick", function() {
    return {
      restrict: "A",
      scope: {
        scrollTo: "@"
      },
      link: function(scope, element, attrs) {
        return element.on('click', function() {
          return $('html, body').animate({
            scrollTop: $(scope.scrollTo).offset().top
          }, "slow");
        });
      }
    };
  })
  .directive('pageTitle', function () {
    return {
      restrict: 'E',
      scope: {
        judgementMaterialWhetherOrNotShowLoading: '=',
        pageTitle: '='
      },
      template: (function () {/*
        <div ng-if="judgementMaterialWhetherOrNotShowLoading" class="content-header">
          <h1>{{pageTitle}}</h1>
        </div>
      */}).toString().replace(/(\n)/g, '').split('*')[1]
    };
  })
  .directive('userProfile', function () {
    return {
      restrict: 'E',
      scope: {
        judgementMaterialWhetherOrNotShowLoading: '=',
        userData: '='
      },
      template: (function () {/*
        <div ng-if="judgementMaterialWhetherOrNotShowLoading" class="content-header">
          <img class="user-profile_icon" ng-src="{{userData.profile_image_url_https}}" />
          <div class="user-profile_name">{{userData.name}}</div>
          <span class="user-profile_screen_name">@{{userData.screen_name}}</span>
        </div>
      */}).toString().replace(/(\n)/g, '').split('*')[1]
    };
  })
  .directive('post', function () {
    return {
      restrict: 'E',
      scope: {
          post: '='
        , openModal: '&'
      },
      template: (function () {/*
        <img img-preload="img-preload" ng-src="{{post.sourceUrl}}" class="img-responsive thumb-pict fade" data-ng-click="openModal()" />
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
            <a class="clickable">
              <i data-url="{{post.sourceOrigUrl}}" filename="{{post.userScreenName}}_{{post.tweetIdStr}}" download-from-url="download-from-url" class="fa fa-download fa-border"></i>
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
          <div style='overflow-x: scroll; white-space: nowrap;'>
            <div class='panel-body'>
              <div ng-repeat='post in posts | orderBy: orderByExpression : orderByDirection | limitTo : limitNum' class='box'>
                <post post='post' open-modal='openLightboxModal(posts, post, oderByDirection)'></post>
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
        <div class="loading" ng-if="judgementMaterialWhetherOrNotShowLoading">
          <div class="fa-5x">
            <i class="fa fa-refresh pull-left fa-spin"></i>
          </div>
        </div>
        <div ng-if="!judgementMaterialWhetherOrNotShowLoading">
          <div ng-if="judgementMaterialWhetherOrNotHidePageContent == 0">
            <div class="fa-5x">
              <span class="fa-stack"><i class="fa fa-picture-o fa-stack-1x pull-left"></i><i class="fa fa-ban fa-stack-2x pull-left text-danger"></i></span>
              No data ...
            </div>
          </div>
        </div>
      */}).toString().replace(/(\n)/g, '').split('*')[1]
    };
  });