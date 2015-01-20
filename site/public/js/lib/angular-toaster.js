'use strict';
/*
 * AngularJS Toaster
 * Version: 0.4.8
 *
 * Copyright 2013 Jiri Kavulak.  
 * All Rights Reserved.  
 * Use, reproduction, distribution, and modification of this code is subject to the terms and 
 * conditions of the MIT license, available at http://www.opensource.org/licenses/mit-license.php
 *
 * Author: Jiri Kavulak
 * Related to project of John Papa and Hans Fjällemark
 */
angular.module('toaster', ['ngAnimate']).service('toaster', [
  '$rootScope',
  function ($rootScope) {
    this.pop = function (type, title, body, timeout, bodyOutputType, clickHandler) {
      this.toast = {
        type: type,
        title: title,
        body: body,
        timeout: timeout,
        bodyOutputType: bodyOutputType,
        clickHandler: clickHandler
      };
      $rootScope.$broadcast('toaster-newToast');
    };
    this.clear = function () {
      $rootScope.$broadcast('toaster-clearToasts');
    };
  }
]).constant('toasterConfig', {
  'limit': 0,
  'tap-to-dismiss': true,
  'close-button': false,
  'newest-on-top': true,
  'time-out': 5000,
  'icon-classes': {
    error: 'toast-error',
    info: 'toast-info',
    wait: 'toast-wait',
    success: 'toast-success',
    warning: 'toast-warning'
  },
  'body-output-type': '',
  'body-template': 'toasterBodyTmpl.html',
  'icon-class': 'toast-info',
  'position-class': 'toast-top-right',
  'title-class': 'toast-title',
  'message-class': 'toast-message'
}).directive('toasterContainer', [
  '$compile',
  '$timeout',
  '$sce',
  'toasterConfig',
  'toaster',
  function ($compile, $timeout, $sce, toasterConfig, toaster) {
    return {
      replace: true,
      restrict: 'EA',
      scope: true,
      link: function (scope, elm, attrs) {
        var id = 0, mergedConfig;
        mergedConfig = angular.extend({}, toasterConfig, scope.$eval(attrs.toasterOptions));
        scope.config = {
          position: mergedConfig['position-class'],
          title: mergedConfig['title-class'],
          message: mergedConfig['message-class'],
          tap: mergedConfig['tap-to-dismiss'],
          closeButton: mergedConfig['close-button']
        };
        scope.configureTimer = function configureTimer(toast) {
          var timeout = typeof toast.timeout == 'number' ? toast.timeout : mergedConfig['time-out'];
          if (timeout > 0)
            setTimeout(toast, timeout);
        };
        function addToast(toast) {
          toast.type = mergedConfig['icon-classes'][toast.type];
          if (!toast.type)
            toast.type = mergedConfig['icon-class'];
          id++;
          angular.extend(toast, { id: id });
          // Set the toast.bodyOutputType to the default if it isn't set
          toast.bodyOutputType = toast.bodyOutputType || mergedConfig['body-output-type'];
          switch (toast.bodyOutputType) {
          case 'trustedHtml':
            toast.html = $sce.trustAsHtml(toast.body);
            break;
          case 'template':
            toast.bodyTemplate = toast.body || mergedConfig['body-template'];
            break;
          }
          scope.configureTimer(toast);
          if (mergedConfig['newest-on-top'] === true) {
            scope.toasters.unshift(toast);
            if (mergedConfig['limit'] > 0 && scope.toasters.length > mergedConfig['limit']) {
              scope.toasters.pop();
            }
          } else {
            scope.toasters.push(toast);
            if (mergedConfig['limit'] > 0 && scope.toasters.length > mergedConfig['limit']) {
              scope.toasters.shift();
            }
          }
        }
        function setTimeout(toast, time) {
          toast.timeout = $timeout(function () {
            scope.removeToast(toast.id);
          }, time);
        }
        scope.toasters = [];
        scope.$on('toaster-newToast', function () {
          addToast(toaster.toast);
        });
        scope.$on('toaster-clearToasts', function () {
          scope.toasters.splice(0, scope.toasters.length);
        });
      },
      controller: [
        '$scope',
        '$element',
        '$attrs',
        function ($scope, $element, $attrs) {
          $scope.stopTimer = function (toast) {
            if (toast.timeout) {
              $timeout.cancel(toast.timeout);
              toast.timeout = null;
            }
          };
          $scope.restartTimer = function (toast) {
            if (!toast.timeout)
              $scope.configureTimer(toast);
          };
          $scope.removeToast = function (id) {
            var i = 0;
            for (i; i < $scope.toasters.length; i++) {
              if ($scope.toasters[i].id === id)
                break;
            }
            $scope.toasters.splice(i, 1);
          };
          $scope.click = function (toaster) {
            if ($scope.config.tap === true) {
              if (toaster.clickHandler && angular.isFunction($scope.$parent.$eval(toaster.clickHandler))) {
                var result = $scope.$parent.$eval(toaster.clickHandler)(toaster);
                if (result === true)
                  $scope.removeToast(toaster.id);
              } else {
                if (angular.isString(toaster.clickHandler))
                  console.log('TOAST-NOTE: Your click handler is not inside a parent scope of toaster-container.');
                $scope.removeToast(toaster.id);
              }
            }
          };
        }
      ],
      template: '<div  id="toast-container" ng-class="config.position">' + '<div ng-repeat="toaster in toasters" class="toast" ng-class="toaster.type" ng-click="click(toaster)" ng-mouseover="stopTimer(toaster)"  ng-mouseout="restartTimer(toaster)">' + '<button class="toast-close-button" ng-show="config.closeButton">&times;</button>' + '<div ng-class="config.title">{{toaster.title}}</div>' + '<div ng-class="config.message" ng-switch on="toaster.bodyOutputType">' + '<div ng-switch-when="trustedHtml" ng-bind-html="toaster.html"></div>' + '<div ng-switch-when="template"><div ng-include="toaster.bodyTemplate"></div></div>' + '<div ng-switch-default >{{toaster.body}}</div>' + '</div>' + '</div>' + '</div>'
    };
  }
]);
/**
 * angular-bootstrap-switch
 * @version v0.3.0 - 2014-06-27
 * @author Francesco Pontillo (francescopontillo@gmail.com)
 * @link https://github.com/frapontillo/angular-bootstrap-switch
 * @license Apache License 2.0
**/
'use strict';
angular.module('frapontillo.bootstrap-switch', []), angular.module('frapontillo.bootstrap-switch').directive('bsSwitch', [
  '$timeout',
  function (a) {
    return {
      restrict: 'EA',
      require: 'ngModel',
      scope: {
        switchActive: '@',
        switchOnText: '@',
        switchOffText: '@',
        switchOnColor: '@',
        switchOffColor: '@',
        switchAnimate: '@',
        switchSize: '@',
        switchLabel: '@',
        switchIcon: '@',
        switchWrapper: '@'
      },
      template: function (a) {
        return 'input' === ('' + a.nodeName).toLowerCase() ? void 0 : '<input>';
      },
      replace: !0,
      link: function (b, c, d, e) {
        var f = function () {
            e.$formatters.push(function (b) {
              void 0 !== b && a(function () {
                c.bootstrapSwitch('state', b || !1, !0);
              });
            }), b.$watch('switchActive', function (a) {
              var b = a === !0 || 'true' === a || !a;
              c.bootstrapSwitch('disabled', !b);
            }), b.$watch('switchOnText', function (a) {
              c.bootstrapSwitch('onText', h(a));
            }), b.$watch('switchOffText', function (a) {
              c.bootstrapSwitch('offText', h(a));
            }), b.$watch('switchOnColor', function (a) {
              d.dataOn = a, c.bootstrapSwitch('onColor', h(a));
            }), b.$watch('switchOffColor', function (a) {
              d.dataOff = a, c.bootstrapSwitch('offColor', h(a));
            }), b.$watch('switchAnimate', function (a) {
              c.bootstrapSwitch('animate', b.$eval(a || 'true'));
            }), b.$watch('switchSize', function (a) {
              c.bootstrapSwitch('size', a);
            }), b.$watch('switchLabel', function (a) {
              c.bootstrapSwitch('labelText', a ? a : '&nbsp;');
            }), b.$watch('switchIcon', function (a) {
              if (a) {
                var b = '<span class=\'' + a + '\'></span>';
                c.bootstrapSwitch('labelText', b);
              }
            }), b.$watch('switchWrapper', function (a) {
              a || (a = null), c.bootstrapSwitch('wrapperClass', a);
            });
          }, g = function () {
            c.on('switchChange.bootstrapSwitch', function (a, c) {
              b.$apply(function () {
                e.$setViewValue(c);
              });
            });
          }, h = function (a) {
            return a ? a : void 0;
          };
        f(), c.bootstrapSwitch(), g(), a(function () {
          c.bootstrapSwitch('state', e.$modelValue || !1, !0);
        }), b.$on('$destroy', function () {
          c.bootstrapSwitch('destroy');
        });
      }
    };
  }
]);