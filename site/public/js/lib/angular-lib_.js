/*
 AngularJS v1.3.8
 (c) 2010-2014 Google, Inc. http://angularjs.org
 License: MIT
*/
(function (M, Y, t) {
  'use strict';
  function T(b) {
    return function () {
      var a = arguments[0], c;
      c = '[' + (b ? b + ':' : '') + a + '] http://errors.angularjs.org/1.3.8/' + (b ? b + '/' : '') + a;
      for (a = 1; a < arguments.length; a++) {
        c = c + (1 == a ? '?' : '&') + 'p' + (a - 1) + '=';
        var d = encodeURIComponent, e;
        e = arguments[a];
        e = 'function' == typeof e ? e.toString().replace(/ \{[\s\S]*$/, '') : 'undefined' == typeof e ? 'undefined' : 'string' != typeof e ? JSON.stringify(e) : e;
        c += d(e);
      }
      return Error(c);
    };
  }
  function Ta(b) {
    if (null == b || Ua(b))
      return !1;
    var a = b.length;
    return b.nodeType === na && a ? !0 : F(b) || x(b) || 0 === a || 'number' === typeof a && 0 < a && a - 1 in b;
  }
  function s(b, a, c) {
    var d, e;
    if (b)
      if (G(b))
        for (d in b)
          'prototype' == d || 'length' == d || 'name' == d || b.hasOwnProperty && !b.hasOwnProperty(d) || a.call(c, b[d], d, b);
      else if (x(b) || Ta(b)) {
        var f = 'object' !== typeof b;
        d = 0;
        for (e = b.length; d < e; d++)
          (f || d in b) && a.call(c, b[d], d, b);
      } else if (b.forEach && b.forEach !== s)
        b.forEach(a, c, b);
      else
        for (d in b)
          b.hasOwnProperty(d) && a.call(c, b[d], d, b);
    return b;
  }
  function Ed(b, a, c) {
    for (var d = Object.keys(b).sort(), e = 0; e < d.length; e++)
      a.call(c, b[d[e]], d[e]);
    return d;
  }
  function kc(b) {
    return function (a, c) {
      b(c, a);
    };
  }
  function Fd() {
    return ++nb;
  }
  function lc(b, a) {
    a ? b.$$hashKey = a : delete b.$$hashKey;
  }
  function z(b) {
    for (var a = b.$$hashKey, c = 1, d = arguments.length; c < d; c++) {
      var e = arguments[c];
      if (e)
        for (var f = Object.keys(e), g = 0, h = f.length; g < h; g++) {
          var l = f[g];
          b[l] = e[l];
        }
    }
    lc(b, a);
    return b;
  }
  function ba(b) {
    return parseInt(b, 10);
  }
  function C() {
  }
  function oa(b) {
    return b;
  }
  function da(b) {
    return function () {
      return b;
    };
  }
  function D(b) {
    return 'undefined' === typeof b;
  }
  function y(b) {
    return 'undefined' !== typeof b;
  }
  function H(b) {
    return null !== b && 'object' === typeof b;
  }
  function F(b) {
    return 'string' === typeof b;
  }
  function V(b) {
    return 'number' === typeof b;
  }
  function pa(b) {
    return '[object Date]' === Da.call(b);
  }
  function G(b) {
    return 'function' === typeof b;
  }
  function ob(b) {
    return '[object RegExp]' === Da.call(b);
  }
  function Ua(b) {
    return b && b.window === b;
  }
  function Va(b) {
    return b && b.$evalAsync && b.$watch;
  }
  function Wa(b) {
    return 'boolean' === typeof b;
  }
  function mc(b) {
    return !(!b || !(b.nodeName || b.prop && b.attr && b.find));
  }
  function Gd(b) {
    var a = {};
    b = b.split(',');
    var c;
    for (c = 0; c < b.length; c++)
      a[b[c]] = !0;
    return a;
  }
  function ua(b) {
    return Q(b.nodeName || b[0] && b[0].nodeName);
  }
  function Xa(b, a) {
    var c = b.indexOf(a);
    0 <= c && b.splice(c, 1);
    return a;
  }
  function Ea(b, a, c, d) {
    if (Ua(b) || Va(b))
      throw Ka('cpws');
    if (a) {
      if (b === a)
        throw Ka('cpi');
      c = c || [];
      d = d || [];
      if (H(b)) {
        var e = c.indexOf(b);
        if (-1 !== e)
          return d[e];
        c.push(b);
        d.push(a);
      }
      if (x(b))
        for (var f = a.length = 0; f < b.length; f++)
          e = Ea(b[f], null, c, d), H(b[f]) && (c.push(b[f]), d.push(e)), a.push(e);
      else {
        var g = a.$$hashKey;
        x(a) ? a.length = 0 : s(a, function (b, c) {
          delete a[c];
        });
        for (f in b)
          b.hasOwnProperty(f) && (e = Ea(b[f], null, c, d), H(b[f]) && (c.push(b[f]), d.push(e)), a[f] = e);
        lc(a, g);
      }
    } else if (a = b)
      x(b) ? a = Ea(b, [], c, d) : pa(b) ? a = new Date(b.getTime()) : ob(b) ? (a = new RegExp(b.source, b.toString().match(/[^\/]*$/)[0]), a.lastIndex = b.lastIndex) : H(b) && (e = Object.create(Object.getPrototypeOf(b)), a = Ea(b, e, c, d));
    return a;
  }
  function qa(b, a) {
    if (x(b)) {
      a = a || [];
      for (var c = 0, d = b.length; c < d; c++)
        a[c] = b[c];
    } else if (H(b))
      for (c in a = a || {}, b)
        if ('$' !== c.charAt(0) || '$' !== c.charAt(1))
          a[c] = b[c];
    return a || b;
  }
  function fa(b, a) {
    if (b === a)
      return !0;
    if (null === b || null === a)
      return !1;
    if (b !== b && a !== a)
      return !0;
    var c = typeof b, d;
    if (c == typeof a && 'object' == c)
      if (x(b)) {
        if (!x(a))
          return !1;
        if ((c = b.length) == a.length) {
          for (d = 0; d < c; d++)
            if (!fa(b[d], a[d]))
              return !1;
          return !0;
        }
      } else {
        if (pa(b))
          return pa(a) ? fa(b.getTime(), a.getTime()) : !1;
        if (ob(b) && ob(a))
          return b.toString() == a.toString();
        if (Va(b) || Va(a) || Ua(b) || Ua(a) || x(a))
          return !1;
        c = {};
        for (d in b)
          if ('$' !== d.charAt(0) && !G(b[d])) {
            if (!fa(b[d], a[d]))
              return !1;
            c[d] = !0;
          }
        for (d in a)
          if (!c.hasOwnProperty(d) && '$' !== d.charAt(0) && a[d] !== t && !G(a[d]))
            return !1;
        return !0;
      }
    return !1;
  }
  function Ya(b, a, c) {
    return b.concat(Za.call(a, c));
  }
  function nc(b, a) {
    var c = 2 < arguments.length ? Za.call(arguments, 2) : [];
    return !G(a) || a instanceof RegExp ? a : c.length ? function () {
      return arguments.length ? a.apply(b, Ya(c, arguments, 0)) : a.apply(b, c);
    } : function () {
      return arguments.length ? a.apply(b, arguments) : a.call(b);
    };
  }
  function Hd(b, a) {
    var c = a;
    'string' === typeof b && '$' === b.charAt(0) && '$' === b.charAt(1) ? c = t : Ua(a) ? c = '$WINDOW' : a && Y === a ? c = '$DOCUMENT' : Va(a) && (c = '$SCOPE');
    return c;
  }
  function $a(b, a) {
    if ('undefined' === typeof b)
      return t;
    V(a) || (a = a ? 2 : null);
    return JSON.stringify(b, Hd, a);
  }
  function oc(b) {
    return F(b) ? JSON.parse(b) : b;
  }
  function va(b) {
    b = B(b).clone();
    try {
      b.empty();
    } catch (a) {
    }
    var c = B('<div>').append(b).html();
    try {
      return b[0].nodeType === pb ? Q(c) : c.match(/^(<[^>]+>)/)[1].replace(/^<([\w\-]+)/, function (a, b) {
        return '<' + Q(b);
      });
    } catch (d) {
      return Q(c);
    }
  }
  function pc(b) {
    try {
      return decodeURIComponent(b);
    } catch (a) {
    }
  }
  function qc(b) {
    var a = {}, c, d;
    s((b || '').split('&'), function (b) {
      b && (c = b.replace(/\+/g, '%20').split('='), d = pc(c[0]), y(d) && (b = y(c[1]) ? pc(c[1]) : !0, rc.call(a, d) ? x(a[d]) ? a[d].push(b) : a[d] = [
        a[d],
        b
      ] : a[d] = b));
    });
    return a;
  }
  function Nb(b) {
    var a = [];
    s(b, function (b, d) {
      x(b) ? s(b, function (b) {
        a.push(Fa(d, !0) + (!0 === b ? '' : '=' + Fa(b, !0)));
      }) : a.push(Fa(d, !0) + (!0 === b ? '' : '=' + Fa(b, !0)));
    });
    return a.length ? a.join('&') : '';
  }
  function qb(b) {
    return Fa(b, !0).replace(/%26/gi, '&').replace(/%3D/gi, '=').replace(/%2B/gi, '+');
  }
  function Fa(b, a) {
    return encodeURIComponent(b).replace(/%40/gi, '@').replace(/%3A/gi, ':').replace(/%24/g, '$').replace(/%2C/gi, ',').replace(/%3B/gi, ';').replace(/%20/g, a ? '%20' : '+');
  }
  function Id(b, a) {
    var c, d, e = rb.length;
    b = B(b);
    for (d = 0; d < e; ++d)
      if (c = rb[d] + a, F(c = b.attr(c)))
        return c;
    return null;
  }
  function Jd(b, a) {
    var c, d, e = {};
    s(rb, function (a) {
      a += 'app';
      !c && b.hasAttribute && b.hasAttribute(a) && (c = b, d = b.getAttribute(a));
    });
    s(rb, function (a) {
      a += 'app';
      var e;
      !c && (e = b.querySelector('[' + a.replace(':', '\\:') + ']')) && (c = e, d = e.getAttribute(a));
    });
    c && (e.strictDi = null !== Id(c, 'strict-di'), a(c, d ? [d] : [], e));
  }
  function sc(b, a, c) {
    H(c) || (c = {});
    c = z({ strictDi: !1 }, c);
    var d = function () {
        b = B(b);
        if (b.injector()) {
          var d = b[0] === Y ? 'document' : va(b);
          throw Ka('btstrpd', d.replace(/</, '&lt;').replace(/>/, '&gt;'));
        }
        a = a || [];
        a.unshift([
          '$provide',
          function (a) {
            a.value('$rootElement', b);
          }
        ]);
        c.debugInfoEnabled && a.push([
          '$compileProvider',
          function (a) {
            a.debugInfoEnabled(!0);
          }
        ]);
        a.unshift('ng');
        d = Ob(a, c.strictDi);
        d.invoke([
          '$rootScope',
          '$rootElement',
          '$compile',
          '$injector',
          function (a, b, c, d) {
            a.$apply(function () {
              b.data('$injector', d);
              c(b)(a);
            });
          }
        ]);
        return d;
      }, e = /^NG_ENABLE_DEBUG_INFO!/, f = /^NG_DEFER_BOOTSTRAP!/;
    M && e.test(M.name) && (c.debugInfoEnabled = !0, M.name = M.name.replace(e, ''));
    if (M && !f.test(M.name))
      return d();
    M.name = M.name.replace(f, '');
    ga.resumeBootstrap = function (b) {
      s(b, function (b) {
        a.push(b);
      });
      d();
    };
  }
  function Kd() {
    M.name = 'NG_ENABLE_DEBUG_INFO!' + M.name;
    M.location.reload();
  }
  function Ld(b) {
    b = ga.element(b).injector();
    if (!b)
      throw Ka('test');
    return b.get('$$testability');
  }
  function tc(b, a) {
    a = a || '_';
    return b.replace(Md, function (b, d) {
      return (d ? a : '') + b.toLowerCase();
    });
  }
  function Nd() {
    var b;
    uc || ((ra = M.jQuery) && ra.fn.on ? (B = ra, z(ra.fn, {
      scope: La.scope,
      isolateScope: La.isolateScope,
      controller: La.controller,
      injector: La.injector,
      inheritedData: La.inheritedData
    }), b = ra.cleanData, ra.cleanData = function (a) {
      var c;
      if (Pb)
        Pb = !1;
      else
        for (var d = 0, e; null != (e = a[d]); d++)
          (c = ra._data(e, 'events')) && c.$destroy && ra(e).triggerHandler('$destroy');
      b(a);
    }) : B = R, ga.element = B, uc = !0);
  }
  function Qb(b, a, c) {
    if (!b)
      throw Ka('areq', a || '?', c || 'required');
    return b;
  }
  function sb(b, a, c) {
    c && x(b) && (b = b[b.length - 1]);
    Qb(G(b), a, 'not a function, got ' + (b && 'object' === typeof b ? b.constructor.name || 'Object' : typeof b));
    return b;
  }
  function Ma(b, a) {
    if ('hasOwnProperty' === b)
      throw Ka('badname', a);
  }
  function vc(b, a, c) {
    if (!a)
      return b;
    a = a.split('.');
    for (var d, e = b, f = a.length, g = 0; g < f; g++)
      d = a[g], b && (b = (e = b)[d]);
    return !c && G(b) ? nc(e, b) : b;
  }
  function tb(b) {
    var a = b[0];
    b = b[b.length - 1];
    var c = [a];
    do {
      a = a.nextSibling;
      if (!a)
        break;
      c.push(a);
    } while (a !== b);
    return B(c);
  }
  function ha() {
    return Object.create(null);
  }
  function Od(b) {
    function a(a, b, c) {
      return a[b] || (a[b] = c());
    }
    var c = T('$injector'), d = T('ng');
    b = a(b, 'angular', Object);
    b.$$minErr = b.$$minErr || T;
    return a(b, 'module', function () {
      var b = {};
      return function (f, g, h) {
        if ('hasOwnProperty' === f)
          throw d('badname', 'module');
        g && b.hasOwnProperty(f) && (b[f] = null);
        return a(b, f, function () {
          function a(c, d, e, f) {
            f || (f = b);
            return function () {
              f[e || 'push']([
                c,
                d,
                arguments
              ]);
              return u;
            };
          }
          if (!g)
            throw c('nomod', f);
          var b = [], d = [], e = [], q = a('$injector', 'invoke', 'push', d), u = {
              _invokeQueue: b,
              _configBlocks: d,
              _runBlocks: e,
              requires: g,
              name: f,
              provider: a('$provide', 'provider'),
              factory: a('$provide', 'factory'),
              service: a('$provide', 'service'),
              value: a('$provide', 'value'),
              constant: a('$provide', 'constant', 'unshift'),
              animation: a('$animateProvider', 'register'),
              filter: a('$filterProvider', 'register'),
              controller: a('$controllerProvider', 'register'),
              directive: a('$compileProvider', 'directive'),
              config: q,
              run: function (a) {
                e.push(a);
                return this;
              }
            };
          h && q(h);
          return u;
        });
      };
    });
  }
  function Pd(b) {
    z(b, {
      bootstrap: sc,
      copy: Ea,
      extend: z,
      equals: fa,
      element: B,
      forEach: s,
      injector: Ob,
      noop: C,
      bind: nc,
      toJson: $a,
      fromJson: oc,
      identity: oa,
      isUndefined: D,
      isDefined: y,
      isString: F,
      isFunction: G,
      isObject: H,
      isNumber: V,
      isElement: mc,
      isArray: x,
      version: Qd,
      isDate: pa,
      lowercase: Q,
      uppercase: ub,
      callbacks: { counter: 0 },
      getTestability: Ld,
      $$minErr: T,
      $$csp: ab,
      reloadWithDebugInfo: Kd
    });
    bb = Od(M);
    try {
      bb('ngLocale');
    } catch (a) {
      bb('ngLocale', []).provider('$locale', Rd);
    }
    bb('ng', ['ngLocale'], [
      '$provide',
      function (a) {
        a.provider({ $$sanitizeUri: Sd });
        a.provider('$compile', wc).directive({
          a: Td,
          input: xc,
          textarea: xc,
          form: Ud,
          script: Vd,
          select: Wd,
          style: Xd,
          option: Yd,
          ngBind: Zd,
          ngBindHtml: $d,
          ngBindTemplate: ae,
          ngClass: be,
          ngClassEven: ce,
          ngClassOdd: de,
          ngCloak: ee,
          ngController: fe,
          ngForm: ge,
          ngHide: he,
          ngIf: ie,
          ngInclude: je,
          ngInit: ke,
          ngNonBindable: le,
          ngPluralize: me,
          ngRepeat: ne,
          ngShow: oe,
          ngStyle: pe,
          ngSwitch: qe,
          ngSwitchWhen: re,
          ngSwitchDefault: se,
          ngOptions: te,
          ngTransclude: ue,
          ngModel: ve,
          ngList: we,
          ngChange: xe,
          pattern: yc,
          ngPattern: yc,
          required: zc,
          ngRequired: zc,
          minlength: Ac,
          ngMinlength: Ac,
          maxlength: Bc,
          ngMaxlength: Bc,
          ngValue: ye,
          ngModelOptions: ze
        }).directive({ ngInclude: Ae }).directive(vb).directive(Cc);
        a.provider({
          $anchorScroll: Be,
          $animate: Ce,
          $browser: De,
          $cacheFactory: Ee,
          $controller: Fe,
          $document: Ge,
          $exceptionHandler: He,
          $filter: Dc,
          $interpolate: Ie,
          $interval: Je,
          $http: Ke,
          $httpBackend: Le,
          $location: Me,
          $log: Ne,
          $parse: Oe,
          $rootScope: Pe,
          $q: Qe,
          $$q: Re,
          $sce: Se,
          $sceDelegate: Te,
          $sniffer: Ue,
          $templateCache: Ve,
          $templateRequest: We,
          $$testability: Xe,
          $timeout: Ye,
          $window: Ze,
          $$rAF: $e,
          $$asyncCallback: af,
          $$jqLite: bf
        });
      }
    ]);
  }
  function cb(b) {
    return b.replace(cf, function (a, b, d, e) {
      return e ? d.toUpperCase() : d;
    }).replace(df, 'Moz$1');
  }
  function Ec(b) {
    b = b.nodeType;
    return b === na || !b || 9 === b;
  }
  function Fc(b, a) {
    var c, d, e = a.createDocumentFragment(), f = [];
    if (Rb.test(b)) {
      c = c || e.appendChild(a.createElement('div'));
      d = (ef.exec(b) || [
        '',
        ''
      ])[1].toLowerCase();
      d = ia[d] || ia._default;
      c.innerHTML = d[1] + b.replace(ff, '<$1></$2>') + d[2];
      for (d = d[0]; d--;)
        c = c.lastChild;
      f = Ya(f, c.childNodes);
      c = e.firstChild;
      c.textContent = '';
    } else
      f.push(a.createTextNode(b));
    e.textContent = '';
    e.innerHTML = '';
    s(f, function (a) {
      e.appendChild(a);
    });
    return e;
  }
  function R(b) {
    if (b instanceof R)
      return b;
    var a;
    F(b) && (b = U(b), a = !0);
    if (!(this instanceof R)) {
      if (a && '<' != b.charAt(0))
        throw Sb('nosel');
      return new R(b);
    }
    if (a) {
      a = Y;
      var c;
      b = (c = gf.exec(b)) ? [a.createElement(c[1])] : (c = Fc(b, a)) ? c.childNodes : [];
    }
    Gc(this, b);
  }
  function Tb(b) {
    return b.cloneNode(!0);
  }
  function wb(b, a) {
    a || xb(b);
    if (b.querySelectorAll)
      for (var c = b.querySelectorAll('*'), d = 0, e = c.length; d < e; d++)
        xb(c[d]);
  }
  function Hc(b, a, c, d) {
    if (y(d))
      throw Sb('offargs');
    var e = (d = yb(b)) && d.events, f = d && d.handle;
    if (f)
      if (a)
        s(a.split(' '), function (a) {
          if (y(c)) {
            var d = e[a];
            Xa(d || [], c);
            if (d && 0 < d.length)
              return;
          }
          b.removeEventListener(a, f, !1);
          delete e[a];
        });
      else
        for (a in e)
          '$destroy' !== a && b.removeEventListener(a, f, !1), delete e[a];
  }
  function xb(b, a) {
    var c = b.ng339, d = c && zb[c];
    d && (a ? delete d.data[a] : (d.handle && (d.events.$destroy && d.handle({}, '$destroy'), Hc(b)), delete zb[c], b.ng339 = t));
  }
  function yb(b, a) {
    var c = b.ng339, c = c && zb[c];
    a && !c && (b.ng339 = c = ++hf, c = zb[c] = {
      events: {},
      data: {},
      handle: t
    });
    return c;
  }
  function Ub(b, a, c) {
    if (Ec(b)) {
      var d = y(c), e = !d && a && !H(a), f = !a;
      b = (b = yb(b, !e)) && b.data;
      if (d)
        b[a] = c;
      else {
        if (f)
          return b;
        if (e)
          return b && b[a];
        z(b, a);
      }
    }
  }
  function Ab(b, a) {
    return b.getAttribute ? -1 < (' ' + (b.getAttribute('class') || '') + ' ').replace(/[\n\t]/g, ' ').indexOf(' ' + a + ' ') : !1;
  }
  function Bb(b, a) {
    a && b.setAttribute && s(a.split(' '), function (a) {
      b.setAttribute('class', U((' ' + (b.getAttribute('class') || '') + ' ').replace(/[\n\t]/g, ' ').replace(' ' + U(a) + ' ', ' ')));
    });
  }
  function Cb(b, a) {
    if (a && b.setAttribute) {
      var c = (' ' + (b.getAttribute('class') || '') + ' ').replace(/[\n\t]/g, ' ');
      s(a.split(' '), function (a) {
        a = U(a);
        -1 === c.indexOf(' ' + a + ' ') && (c += a + ' ');
      });
      b.setAttribute('class', U(c));
    }
  }
  function Gc(b, a) {
    if (a)
      if (a.nodeType)
        b[b.length++] = a;
      else {
        var c = a.length;
        if ('number' === typeof c && a.window !== a) {
          if (c)
            for (var d = 0; d < c; d++)
              b[b.length++] = a[d];
        } else
          b[b.length++] = a;
      }
  }
  function Ic(b, a) {
    return Db(b, '$' + (a || 'ngController') + 'Controller');
  }
  function Db(b, a, c) {
    9 == b.nodeType && (b = b.documentElement);
    for (a = x(a) ? a : [a]; b;) {
      for (var d = 0, e = a.length; d < e; d++)
        if ((c = B.data(b, a[d])) !== t)
          return c;
      b = b.parentNode || 11 === b.nodeType && b.host;
    }
  }
  function Jc(b) {
    for (wb(b, !0); b.firstChild;)
      b.removeChild(b.firstChild);
  }
  function Kc(b, a) {
    a || wb(b);
    var c = b.parentNode;
    c && c.removeChild(b);
  }
  function jf(b, a) {
    a = a || M;
    if ('complete' === a.document.readyState)
      a.setTimeout(b);
    else
      B(a).on('load', b);
  }
  function Lc(b, a) {
    var c = Eb[a.toLowerCase()];
    return c && Mc[ua(b)] && c;
  }
  function kf(b, a) {
    var c = b.nodeName;
    return ('INPUT' === c || 'TEXTAREA' === c) && Nc[a];
  }
  function lf(b, a) {
    var c = function (c, e) {
      c.isDefaultPrevented = function () {
        return c.defaultPrevented;
      };
      var f = a[e || c.type], g = f ? f.length : 0;
      if (g) {
        if (D(c.immediatePropagationStopped)) {
          var h = c.stopImmediatePropagation;
          c.stopImmediatePropagation = function () {
            c.immediatePropagationStopped = !0;
            c.stopPropagation && c.stopPropagation();
            h && h.call(c);
          };
        }
        c.isImmediatePropagationStopped = function () {
          return !0 === c.immediatePropagationStopped;
        };
        1 < g && (f = qa(f));
        for (var l = 0; l < g; l++)
          c.isImmediatePropagationStopped() || f[l].call(b, c);
      }
    };
    c.elem = b;
    return c;
  }
  function bf() {
    this.$get = function () {
      return z(R, {
        hasClass: function (b, a) {
          b.attr && (b = b[0]);
          return Ab(b, a);
        },
        addClass: function (b, a) {
          b.attr && (b = b[0]);
          return Cb(b, a);
        },
        removeClass: function (b, a) {
          b.attr && (b = b[0]);
          return Bb(b, a);
        }
      });
    };
  }
  function Na(b, a) {
    var c = b && b.$$hashKey;
    if (c)
      return 'function' === typeof c && (c = b.$$hashKey()), c;
    c = typeof b;
    return c = 'function' == c || 'object' == c && null !== b ? b.$$hashKey = c + ':' + (a || Fd)() : c + ':' + b;
  }
  function db(b, a) {
    if (a) {
      var c = 0;
      this.nextUid = function () {
        return ++c;
      };
    }
    s(b, this.put, this);
  }
  function mf(b) {
    return (b = b.toString().replace(Oc, '').match(Pc)) ? 'function(' + (b[1] || '').replace(/[\s\r\n]+/, ' ') + ')' : 'fn';
  }
  function Vb(b, a, c) {
    var d;
    if ('function' === typeof b) {
      if (!(d = b.$inject)) {
        d = [];
        if (b.length) {
          if (a)
            throw F(c) && c || (c = b.name || mf(b)), Ga('strictdi', c);
          a = b.toString().replace(Oc, '');
          a = a.match(Pc);
          s(a[1].split(nf), function (a) {
            a.replace(of, function (a, b, c) {
              d.push(c);
            });
          });
        }
        b.$inject = d;
      }
    } else
      x(b) ? (a = b.length - 1, sb(b[a], 'fn'), d = b.slice(0, a)) : sb(b, 'fn', !0);
    return d;
  }
  function Ob(b, a) {
    function c(a) {
      return function (b, c) {
        if (H(b))
          s(b, kc(a));
        else
          return a(b, c);
      };
    }
    function d(a, b) {
      Ma(a, 'service');
      if (G(b) || x(b))
        b = q.instantiate(b);
      if (!b.$get)
        throw Ga('pget', a);
      return p[a + 'Provider'] = b;
    }
    function e(a, b) {
      return function () {
        var c = r.invoke(b, this);
        if (D(c))
          throw Ga('undef', a);
        return c;
      };
    }
    function f(a, b, c) {
      return d(a, { $get: !1 !== c ? e(a, b) : b });
    }
    function g(a) {
      var b = [], c;
      s(a, function (a) {
        function d(a) {
          var b, c;
          b = 0;
          for (c = a.length; b < c; b++) {
            var e = a[b], f = q.get(e[0]);
            f[e[1]].apply(f, e[2]);
          }
        }
        if (!m.get(a)) {
          m.put(a, !0);
          try {
            F(a) ? (c = bb(a), b = b.concat(g(c.requires)).concat(c._runBlocks), d(c._invokeQueue), d(c._configBlocks)) : G(a) ? b.push(q.invoke(a)) : x(a) ? b.push(q.invoke(a)) : sb(a, 'module');
          } catch (e) {
            throw x(a) && (a = a[a.length - 1]), e.message && e.stack && -1 == e.stack.indexOf(e.message) && (e = e.message + '\n' + e.stack), Ga('modulerr', a, e.stack || e.message || e);
          }
        }
      });
      return b;
    }
    function h(b, c) {
      function d(a, e) {
        if (b.hasOwnProperty(a)) {
          if (b[a] === l)
            throw Ga('cdep', a + ' <- ' + k.join(' <- '));
          return b[a];
        }
        try {
          return k.unshift(a), b[a] = l, b[a] = c(a, e);
        } catch (f) {
          throw b[a] === l && delete b[a], f;
        } finally {
          k.shift();
        }
      }
      function e(b, c, f, g) {
        'string' === typeof f && (g = f, f = null);
        var h = [], k = Vb(b, a, g), l, q, p;
        q = 0;
        for (l = k.length; q < l; q++) {
          p = k[q];
          if ('string' !== typeof p)
            throw Ga('itkn', p);
          h.push(f && f.hasOwnProperty(p) ? f[p] : d(p, g));
        }
        x(b) && (b = b[l]);
        return b.apply(c, h);
      }
      return {
        invoke: e,
        instantiate: function (a, b, c) {
          var d = Object.create((x(a) ? a[a.length - 1] : a).prototype);
          a = e(a, d, b, c);
          return H(a) || G(a) ? a : d;
        },
        get: d,
        annotate: Vb,
        has: function (a) {
          return p.hasOwnProperty(a + 'Provider') || b.hasOwnProperty(a);
        }
      };
    }
    a = !0 === a;
    var l = {}, k = [], m = new db([], !0), p = {
        $provide: {
          provider: c(d),
          factory: c(f),
          service: c(function (a, b) {
            return f(a, [
              '$injector',
              function (a) {
                return a.instantiate(b);
              }
            ]);
          }),
          value: c(function (a, b) {
            return f(a, da(b), !1);
          }),
          constant: c(function (a, b) {
            Ma(a, 'constant');
            p[a] = b;
            u[a] = b;
          }),
          decorator: function (a, b) {
            var c = q.get(a + 'Provider'), d = c.$get;
            c.$get = function () {
              var a = r.invoke(d, c);
              return r.invoke(b, null, { $delegate: a });
            };
          }
        }
      }, q = p.$injector = h(p, function (a, b) {
        ga.isString(b) && k.push(b);
        throw Ga('unpr', k.join(' <- '));
      }), u = {}, r = u.$injector = h(u, function (a, b) {
        var c = q.get(a + 'Provider', b);
        return r.invoke(c.$get, c, t, a);
      });
    s(g(b), function (a) {
      r.invoke(a || C);
    });
    return r;
  }
  function Be() {
    var b = !0;
    this.disableAutoScrolling = function () {
      b = !1;
    };
    this.$get = [
      '$window',
      '$location',
      '$rootScope',
      function (a, c, d) {
        function e(a) {
          var b = null;
          Array.prototype.some.call(a, function (a) {
            if ('a' === ua(a))
              return b = a, !0;
          });
          return b;
        }
        function f(b) {
          if (b) {
            b.scrollIntoView();
            var c;
            c = g.yOffset;
            G(c) ? c = c() : mc(c) ? (c = c[0], c = 'fixed' !== a.getComputedStyle(c).position ? 0 : c.getBoundingClientRect().bottom) : V(c) || (c = 0);
            c && (b = b.getBoundingClientRect().top, a.scrollBy(0, b - c));
          } else
            a.scrollTo(0, 0);
        }
        function g() {
          var a = c.hash(), b;
          a ? (b = h.getElementById(a)) ? f(b) : (b = e(h.getElementsByName(a))) ? f(b) : 'top' === a && f(null) : f(null);
        }
        var h = a.document;
        b && d.$watch(function () {
          return c.hash();
        }, function (a, b) {
          a === b && '' === a || jf(function () {
            d.$evalAsync(g);
          });
        });
        return g;
      }
    ];
  }
  function af() {
    this.$get = [
      '$$rAF',
      '$timeout',
      function (b, a) {
        return b.supported ? function (a) {
          return b(a);
        } : function (b) {
          return a(b, 0, !1);
        };
      }
    ];
  }
  function pf(b, a, c, d) {
    function e(a) {
      try {
        a.apply(null, Za.call(arguments, 1));
      } finally {
        if (v--, 0 === v)
          for (; w.length;)
            try {
              w.pop()();
            } catch (b) {
              c.error(b);
            }
      }
    }
    function f(a, b) {
      (function N() {
        s(L, function (a) {
          a();
        });
        J = b(N, a);
      }());
    }
    function g() {
      h();
      l();
    }
    function h() {
      A = b.history.state;
      A = D(A) ? null : A;
      fa(A, I) && (A = I);
      I = A;
    }
    function l() {
      if (E !== m.url() || P !== A)
        E = m.url(), P = A, s(W, function (a) {
          a(m.url(), A);
        });
    }
    function k(a) {
      try {
        return decodeURIComponent(a);
      } catch (b) {
        return a;
      }
    }
    var m = this, p = a[0], q = b.location, u = b.history, r = b.setTimeout, O = b.clearTimeout, n = {};
    m.isMock = !1;
    var v = 0, w = [];
    m.$$completeOutstandingRequest = e;
    m.$$incOutstandingRequestCount = function () {
      v++;
    };
    m.notifyWhenNoOutstandingRequests = function (a) {
      s(L, function (a) {
        a();
      });
      0 === v ? a() : w.push(a);
    };
    var L = [], J;
    m.addPollFn = function (a) {
      D(J) && f(100, r);
      L.push(a);
      return a;
    };
    var A, P, E = q.href, S = a.find('base'), X = null;
    h();
    P = A;
    m.url = function (a, c, e) {
      D(e) && (e = null);
      q !== b.location && (q = b.location);
      u !== b.history && (u = b.history);
      if (a) {
        var f = P === e;
        if (E === a && (!d.history || f))
          return m;
        var g = E && Ha(E) === Ha(a);
        E = a;
        P = e;
        !d.history || g && f ? (g || (X = a), c ? q.replace(a) : g ? (c = q, e = a.indexOf('#'), a = -1 === e ? '' : a.substr(e + 1), c.hash = a) : q.href = a) : (u[c ? 'replaceState' : 'pushState'](e, '', a), h(), P = A);
        return m;
      }
      return X || q.href.replace(/%27/g, '\'');
    };
    m.state = function () {
      return A;
    };
    var W = [], wa = !1, I = null;
    m.onUrlChange = function (a) {
      if (!wa) {
        if (d.history)
          B(b).on('popstate', g);
        B(b).on('hashchange', g);
        wa = !0;
      }
      W.push(a);
      return a;
    };
    m.$$checkUrlChange = l;
    m.baseHref = function () {
      var a = S.attr('href');
      return a ? a.replace(/^(https?\:)?\/\/[^\/]*/, '') : '';
    };
    var ea = {}, y = '', ca = m.baseHref();
    m.cookies = function (a, b) {
      var d, e, f, g;
      if (a)
        b === t ? p.cookie = encodeURIComponent(a) + '=;path=' + ca + ';expires=Thu, 01 Jan 1970 00:00:00 GMT' : F(b) && (d = (p.cookie = encodeURIComponent(a) + '=' + encodeURIComponent(b) + ';path=' + ca).length + 1, 4096 < d && c.warn('Cookie \'' + a + '\' possibly not set or overflowed because it was too large (' + d + ' > 4096 bytes)!'));
      else {
        if (p.cookie !== y)
          for (y = p.cookie, d = y.split('; '), ea = {}, f = 0; f < d.length; f++)
            e = d[f], g = e.indexOf('='), 0 < g && (a = k(e.substring(0, g)), ea[a] === t && (ea[a] = k(e.substring(g + 1))));
        return ea;
      }
    };
    m.defer = function (a, b) {
      var c;
      v++;
      c = r(function () {
        delete n[c];
        e(a);
      }, b || 0);
      n[c] = !0;
      return c;
    };
    m.defer.cancel = function (a) {
      return n[a] ? (delete n[a], O(a), e(C), !0) : !1;
    };
  }
  function De() {
    this.$get = [
      '$window',
      '$log',
      '$sniffer',
      '$document',
      function (b, a, c, d) {
        return new pf(b, d, a, c);
      }
    ];
  }
  function Ee() {
    this.$get = function () {
      function b(b, d) {
        function e(a) {
          a != p && (q ? q == a && (q = a.n) : q = a, f(a.n, a.p), f(a, p), p = a, p.n = null);
        }
        function f(a, b) {
          a != b && (a && (a.p = b), b && (b.n = a));
        }
        if (b in a)
          throw T('$cacheFactory')('iid', b);
        var g = 0, h = z({}, d, { id: b }), l = {}, k = d && d.capacity || Number.MAX_VALUE, m = {}, p = null, q = null;
        return a[b] = {
          put: function (a, b) {
            if (k < Number.MAX_VALUE) {
              var c = m[a] || (m[a] = { key: a });
              e(c);
            }
            if (!D(b))
              return a in l || g++, l[a] = b, g > k && this.remove(q.key), b;
          },
          get: function (a) {
            if (k < Number.MAX_VALUE) {
              var b = m[a];
              if (!b)
                return;
              e(b);
            }
            return l[a];
          },
          remove: function (a) {
            if (k < Number.MAX_VALUE) {
              var b = m[a];
              if (!b)
                return;
              b == p && (p = b.p);
              b == q && (q = b.n);
              f(b.n, b.p);
              delete m[a];
            }
            delete l[a];
            g--;
          },
          removeAll: function () {
            l = {};
            g = 0;
            m = {};
            p = q = null;
          },
          destroy: function () {
            m = h = l = null;
            delete a[b];
          },
          info: function () {
            return z({}, h, { size: g });
          }
        };
      }
      var a = {};
      b.info = function () {
        var b = {};
        s(a, function (a, e) {
          b[e] = a.info();
        });
        return b;
      };
      b.get = function (b) {
        return a[b];
      };
      return b;
    };
  }
  function Ve() {
    this.$get = [
      '$cacheFactory',
      function (b) {
        return b('templates');
      }
    ];
  }
  function wc(b, a) {
    function c(a, b) {
      var c = /^\s*([@&]|=(\*?))(\??)\s*(\w*)\s*$/, d = {};
      s(a, function (a, e) {
        var f = a.match(c);
        if (!f)
          throw ja('iscp', b, e, a);
        d[e] = {
          mode: f[1][0],
          collection: '*' === f[2],
          optional: '?' === f[3],
          attrName: f[4] || e
        };
      });
      return d;
    }
    var d = {}, e = /^\s*directive\:\s*([\w\-]+)\s+(.*)$/, f = /(([\w\-]+)(?:\:([^;]+))?;?)/, g = Gd('ngSrc,ngSrcset,src,srcset'), h = /^(?:(\^\^?)?(\?)?(\^\^?)?)?/, l = /^(on[a-z]+|formaction)$/;
    this.directive = function p(a, e) {
      Ma(a, 'directive');
      F(a) ? (Qb(e, 'directiveFactory'), d.hasOwnProperty(a) || (d[a] = [], b.factory(a + 'Directive', [
        '$injector',
        '$exceptionHandler',
        function (b, e) {
          var f = [];
          s(d[a], function (d, g) {
            try {
              var h = b.invoke(d);
              G(h) ? h = { compile: da(h) } : !h.compile && h.link && (h.compile = da(h.link));
              h.priority = h.priority || 0;
              h.index = g;
              h.name = h.name || a;
              h.require = h.require || h.controller && h.name;
              h.restrict = h.restrict || 'EA';
              H(h.scope) && (h.$$isolateBindings = c(h.scope, h.name));
              f.push(h);
            } catch (l) {
              e(l);
            }
          });
          return f;
        }
      ])), d[a].push(e)) : s(a, kc(p));
      return this;
    };
    this.aHrefSanitizationWhitelist = function (b) {
      return y(b) ? (a.aHrefSanitizationWhitelist(b), this) : a.aHrefSanitizationWhitelist();
    };
    this.imgSrcSanitizationWhitelist = function (b) {
      return y(b) ? (a.imgSrcSanitizationWhitelist(b), this) : a.imgSrcSanitizationWhitelist();
    };
    var k = !0;
    this.debugInfoEnabled = function (a) {
      return y(a) ? (k = a, this) : k;
    };
    this.$get = [
      '$injector',
      '$interpolate',
      '$exceptionHandler',
      '$templateRequest',
      '$parse',
      '$controller',
      '$rootScope',
      '$document',
      '$sce',
      '$animate',
      '$$sanitizeUri',
      function (a, b, c, r, O, n, v, w, L, J, A) {
        function P(a, b) {
          try {
            a.addClass(b);
          } catch (c) {
          }
        }
        function E(a, b, c, d, e) {
          a instanceof B || (a = B(a));
          s(a, function (b, c) {
            b.nodeType == pb && b.nodeValue.match(/\S+/) && (a[c] = B(b).wrap('<span></span>').parent()[0]);
          });
          var f = S(a, b, a, c, d, e);
          E.$$addScopeClass(a);
          var g = null;
          return function (b, c, d) {
            Qb(b, 'scope');
            d = d || {};
            var e = d.parentBoundTranscludeFn, h = d.transcludeControllers;
            d = d.futureParentElement;
            e && e.$$boundTransclude && (e = e.$$boundTransclude);
            g || (g = (d = d && d[0]) ? 'foreignobject' !== ua(d) && d.toString().match(/SVG/) ? 'svg' : 'html' : 'html');
            d = 'html' !== g ? B(Wb(g, B('<div>').append(a).html())) : c ? La.clone.call(a) : a;
            if (h)
              for (var l in h)
                d.data('$' + l + 'Controller', h[l].instance);
            E.$$addScopeInfo(d, b);
            c && c(d, b);
            f && f(b, d, d, e);
            return d;
          };
        }
        function S(a, b, c, d, e, f) {
          function g(a, c, d, e) {
            var f, l, k, q, p, n, w;
            if (r)
              for (w = Array(c.length), q = 0; q < h.length; q += 3)
                f = h[q], w[f] = c[f];
            else
              w = c;
            q = 0;
            for (p = h.length; q < p;)
              l = w[h[q++]], c = h[q++], f = h[q++], c ? (c.scope ? (k = a.$new(), E.$$addScopeInfo(B(l), k)) : k = a, n = c.transcludeOnThisElement ? X(a, c.transclude, e, c.elementTranscludeOnThisElement) : !c.templateOnThisElement && e ? e : !e && b ? X(a, b) : null, c(f, k, l, d, n)) : f && f(a, l.childNodes, t, e);
          }
          for (var h = [], l, k, q, p, r, n = 0; n < a.length; n++) {
            l = new Xb();
            k = W(a[n], [], l, 0 === n ? d : t, e);
            (f = k.length ? ea(k, a[n], l, b, c, null, [], [], f) : null) && f.scope && E.$$addScopeClass(l.$$element);
            l = f && f.terminal || !(q = a[n].childNodes) || !q.length ? null : S(q, f ? (f.transcludeOnThisElement || !f.templateOnThisElement) && f.transclude : b);
            if (f || l)
              h.push(n, f, l), p = !0, r = r || f;
            f = null;
          }
          return p ? g : null;
        }
        function X(a, b, c, d) {
          return function (d, e, f, g, h) {
            d || (d = a.$new(!1, h), d.$$transcluded = !0);
            return b(d, e, {
              parentBoundTranscludeFn: c,
              transcludeControllers: f,
              futureParentElement: g
            });
          };
        }
        function W(a, b, c, d, g) {
          var h = c.$attr, l;
          switch (a.nodeType) {
          case na:
            ca(b, ya(ua(a)), 'E', d, g);
            for (var k, q, p, r = a.attributes, n = 0, w = r && r.length; n < w; n++) {
              var O = !1, L = !1;
              k = r[n];
              l = k.name;
              q = U(k.value);
              k = ya(l);
              if (p = fb.test(k))
                l = l.replace(Rc, '').substr(8).replace(/_(.)/g, function (a, b) {
                  return b.toUpperCase();
                });
              var u = k.replace(/(Start|End)$/, '');
              D(u) && k === u + 'Start' && (O = l, L = l.substr(0, l.length - 5) + 'end', l = l.substr(0, l.length - 6));
              k = ya(l.toLowerCase());
              h[k] = l;
              if (p || !c.hasOwnProperty(k))
                c[k] = q, Lc(a, k) && (c[k] = !0);
              Pa(a, b, q, k, p);
              ca(b, k, 'A', d, g, O, L);
            }
            a = a.className;
            if (F(a) && '' !== a)
              for (; l = f.exec(a);)
                k = ya(l[2]), ca(b, k, 'C', d, g) && (c[k] = U(l[3])), a = a.substr(l.index + l[0].length);
            break;
          case pb:
            M(b, a.nodeValue);
            break;
          case 8:
            try {
              if (l = e.exec(a.nodeValue))
                k = ya(l[1]), ca(b, k, 'M', d, g) && (c[k] = U(l[2]));
            } catch (v) {
            }
          }
          b.sort(N);
          return b;
        }
        function wa(a, b, c) {
          var d = [], e = 0;
          if (b && a.hasAttribute && a.hasAttribute(b)) {
            do {
              if (!a)
                throw ja('uterdir', b, c);
              a.nodeType == na && (a.hasAttribute(b) && e++, a.hasAttribute(c) && e--);
              d.push(a);
              a = a.nextSibling;
            } while (0 < e);
          } else
            d.push(a);
          return B(d);
        }
        function I(a, b, c) {
          return function (d, e, f, g, h) {
            e = wa(e[0], b, c);
            return a(d, e, f, g, h);
          };
        }
        function ea(a, d, e, f, g, l, k, p, r) {
          function w(a, b, c, d) {
            if (a) {
              c && (a = I(a, c, d));
              a.require = K.require;
              a.directiveName = z;
              if (S === K || K.$$isolateScope)
                a = Z(a, { isolateScope: !0 });
              k.push(a);
            }
            if (b) {
              c && (b = I(b, c, d));
              b.require = K.require;
              b.directiveName = z;
              if (S === K || K.$$isolateScope)
                b = Z(b, { isolateScope: !0 });
              p.push(b);
            }
          }
          function L(a, b, c, d) {
            var e, f = 'data', g = !1, l = c, k;
            if (F(b)) {
              k = b.match(h);
              b = b.substring(k[0].length);
              k[3] && (k[1] ? k[3] = null : k[1] = k[3]);
              '^' === k[1] ? f = 'inheritedData' : '^^' === k[1] && (f = 'inheritedData', l = c.parent());
              '?' === k[2] && (g = !0);
              e = null;
              d && 'data' === f && (e = d[b]) && (e = e.instance);
              e = e || l[f]('$' + b + 'Controller');
              if (!e && !g)
                throw ja('ctreq', b, a);
              return e || null;
            }
            x(b) && (e = [], s(b, function (b) {
              e.push(L(a, b, c, d));
            }));
            return e;
          }
          function v(a, c, f, g, h) {
            function l(a, b, c) {
              var d;
              Va(a) || (c = b, b = a, a = t);
              C && (d = P);
              c || (c = C ? W.parent() : W);
              return h(a, b, d, c, wa);
            }
            var r, w, u, A, P, eb, W, I;
            d === f ? (I = e, W = e.$$element) : (W = B(f), I = new Xb(W, e));
            S && (A = c.$new(!0));
            h && (eb = l, eb.$$boundTransclude = h);
            J && (X = {}, P = {}, s(J, function (a) {
              var b = {
                  $scope: a === S || a.$$isolateScope ? A : c,
                  $element: W,
                  $attrs: I,
                  $transclude: eb
                };
              u = a.controller;
              '@' == u && (u = I[a.name]);
              b = n(u, b, !0, a.controllerAs);
              P[a.name] = b;
              C || W.data('$' + a.name + 'Controller', b.instance);
              X[a.name] = b;
            }));
            if (S) {
              E.$$addScopeInfo(W, A, !0, !(ka && (ka === S || ka === S.$$originalDirective)));
              E.$$addScopeClass(W, !0);
              g = X && X[S.name];
              var xa = A;
              g && g.identifier && !0 === S.bindToController && (xa = g.instance);
              s(A.$$isolateBindings = S.$$isolateBindings, function (a, d) {
                var e = a.attrName, f = a.optional, g, h, l, k;
                switch (a.mode) {
                case '@':
                  I.$observe(e, function (a) {
                    xa[d] = a;
                  });
                  I.$$observers[e].$$scope = c;
                  I[e] && (xa[d] = b(I[e])(c));
                  break;
                case '=':
                  if (f && !I[e])
                    break;
                  h = O(I[e]);
                  k = h.literal ? fa : function (a, b) {
                    return a === b || a !== a && b !== b;
                  };
                  l = h.assign || function () {
                    g = xa[d] = h(c);
                    throw ja('nonassign', I[e], S.name);
                  };
                  g = xa[d] = h(c);
                  f = function (a) {
                    k(a, xa[d]) || (k(a, g) ? l(c, a = xa[d]) : xa[d] = a);
                    return g = a;
                  };
                  f.$stateful = !0;
                  f = a.collection ? c.$watchCollection(I[e], f) : c.$watch(O(I[e], f), null, h.literal);
                  A.$on('$destroy', f);
                  break;
                case '&':
                  h = O(I[e]), xa[d] = function (a) {
                    return h(c, a);
                  };
                }
              });
            }
            X && (s(X, function (a) {
              a();
            }), X = null);
            g = 0;
            for (r = k.length; g < r; g++)
              w = k[g], $(w, w.isolateScope ? A : c, W, I, w.require && L(w.directiveName, w.require, W, P), eb);
            var wa = c;
            S && (S.template || null === S.templateUrl) && (wa = A);
            a && a(wa, f.childNodes, t, h);
            for (g = p.length - 1; 0 <= g; g--)
              w = p[g], $(w, w.isolateScope ? A : c, W, I, w.require && L(w.directiveName, w.require, W, P), eb);
          }
          r = r || {};
          for (var A = -Number.MAX_VALUE, P, J = r.controllerDirectives, X, S = r.newIsolateScopeDirective, ka = r.templateDirective, ea = r.nonTlbTranscludeDirective, ca = !1, D = !1, C = r.hasElementTranscludeDirective, aa = e.$$element = B(d), K, z, N, Aa = f, Q, M = 0, R = a.length; M < R; M++) {
            K = a[M];
            var Pa = K.$$start, fb = K.$$end;
            Pa && (aa = wa(d, Pa, fb));
            N = t;
            if (A > K.priority)
              break;
            if (N = K.scope)
              K.templateUrl || (H(N) ? (Oa('new/isolated scope', S || P, K, aa), S = K) : Oa('new/isolated scope', S, K, aa)), P = P || K;
            z = K.name;
            !K.templateUrl && K.controller && (N = K.controller, J = J || {}, Oa('\'' + z + '\' controller', J[z], K, aa), J[z] = K);
            if (N = K.transclude)
              ca = !0, K.$$tlb || (Oa('transclusion', ea, K, aa), ea = K), 'element' == N ? (C = !0, A = K.priority, N = aa, aa = e.$$element = B(Y.createComment(' ' + z + ': ' + e[z] + ' ')), d = aa[0], V(g, Za.call(N, 0), d), Aa = E(N, f, A, l && l.name, { nonTlbTranscludeDirective: ea })) : (N = B(Tb(d)).contents(), aa.empty(), Aa = E(N, f));
            if (K.template)
              if (D = !0, Oa('template', ka, K, aa), ka = K, N = G(K.template) ? K.template(aa, e) : K.template, N = Sc(N), K.replace) {
                l = K;
                N = Rb.test(N) ? Tc(Wb(K.templateNamespace, U(N))) : [];
                d = N[0];
                if (1 != N.length || d.nodeType !== na)
                  throw ja('tplrt', z, '');
                V(g, aa, d);
                R = { $attr: {} };
                N = W(d, [], R);
                var ba = a.splice(M + 1, a.length - (M + 1));
                S && y(N);
                a = a.concat(N).concat(ba);
                Qc(e, R);
                R = a.length;
              } else
                aa.html(N);
            if (K.templateUrl)
              D = !0, Oa('template', ka, K, aa), ka = K, K.replace && (l = K), v = T(a.splice(M, a.length - M), aa, e, g, ca && Aa, k, p, {
                controllerDirectives: J,
                newIsolateScopeDirective: S,
                templateDirective: ka,
                nonTlbTranscludeDirective: ea
              }), R = a.length;
            else if (K.compile)
              try {
                Q = K.compile(aa, e, Aa), G(Q) ? w(null, Q, Pa, fb) : Q && w(Q.pre, Q.post, Pa, fb);
              } catch (qf) {
                c(qf, va(aa));
              }
            K.terminal && (v.terminal = !0, A = Math.max(A, K.priority));
          }
          v.scope = P && !0 === P.scope;
          v.transcludeOnThisElement = ca;
          v.elementTranscludeOnThisElement = C;
          v.templateOnThisElement = D;
          v.transclude = Aa;
          r.hasElementTranscludeDirective = C;
          return v;
        }
        function y(a) {
          for (var b = 0, c = a.length; b < c; b++) {
            var d = b, e;
            e = z(Object.create(a[b]), { $$isolateScope: !0 });
            a[d] = e;
          }
        }
        function ca(b, e, f, g, h, l, k) {
          if (e === h)
            return null;
          h = null;
          if (d.hasOwnProperty(e)) {
            var q;
            e = a.get(e + 'Directive');
            for (var r = 0, n = e.length; r < n; r++)
              try {
                if (q = e[r], (g === t || g > q.priority) && -1 != q.restrict.indexOf(f)) {
                  if (l) {
                    var w = {
                        $$start: l,
                        $$end: k
                      };
                    q = z(Object.create(q), w);
                  }
                  b.push(q);
                  h = q;
                }
              } catch (O) {
                c(O);
              }
          }
          return h;
        }
        function D(b) {
          if (d.hasOwnProperty(b))
            for (var c = a.get(b + 'Directive'), e = 0, f = c.length; e < f; e++)
              if (b = c[e], b.multiElement)
                return !0;
          return !1;
        }
        function Qc(a, b) {
          var c = b.$attr, d = a.$attr, e = a.$$element;
          s(a, function (d, e) {
            '$' != e.charAt(0) && (b[e] && b[e] !== d && (d += ('style' === e ? ';' : ' ') + b[e]), a.$set(e, d, !0, c[e]));
          });
          s(b, function (b, f) {
            'class' == f ? (P(e, b), a['class'] = (a['class'] ? a['class'] + ' ' : '') + b) : 'style' == f ? (e.attr('style', e.attr('style') + ';' + b), a.style = (a.style ? a.style + ';' : '') + b) : '$' == f.charAt(0) || a.hasOwnProperty(f) || (a[f] = b, d[f] = c[f]);
          });
        }
        function T(a, b, c, d, e, f, g, h) {
          var l = [], k, q, p = b[0], n = a.shift(), w = z({}, n, {
              templateUrl: null,
              transclude: null,
              replace: null,
              $$originalDirective: n
            }), O = G(n.templateUrl) ? n.templateUrl(b, c) : n.templateUrl, u = n.templateNamespace;
          b.empty();
          r(L.getTrustedResourceUrl(O)).then(function (r) {
            var L, v;
            r = Sc(r);
            if (n.replace) {
              r = Rb.test(r) ? Tc(Wb(u, U(r))) : [];
              L = r[0];
              if (1 != r.length || L.nodeType !== na)
                throw ja('tplrt', n.name, O);
              r = { $attr: {} };
              V(d, b, L);
              var A = W(L, [], r);
              H(n.scope) && y(A);
              a = A.concat(a);
              Qc(c, r);
            } else
              L = p, b.html(r);
            a.unshift(w);
            k = ea(a, L, c, e, b, n, f, g, h);
            s(d, function (a, c) {
              a == L && (d[c] = b[0]);
            });
            for (q = S(b[0].childNodes, e); l.length;) {
              r = l.shift();
              v = l.shift();
              var J = l.shift(), E = l.shift(), A = b[0];
              if (!r.$$destroyed) {
                if (v !== p) {
                  var I = v.className;
                  h.hasElementTranscludeDirective && n.replace || (A = Tb(L));
                  V(J, B(v), A);
                  P(B(A), I);
                }
                v = k.transcludeOnThisElement ? X(r, k.transclude, E) : E;
                k(q, r, A, d, v);
              }
            }
            l = null;
          });
          return function (a, b, c, d, e) {
            a = e;
            b.$$destroyed || (l ? l.push(b, c, d, a) : (k.transcludeOnThisElement && (a = X(b, k.transclude, e)), k(q, b, c, d, a)));
          };
        }
        function N(a, b) {
          var c = b.priority - a.priority;
          return 0 !== c ? c : a.name !== b.name ? a.name < b.name ? -1 : 1 : a.index - b.index;
        }
        function Oa(a, b, c, d) {
          if (b)
            throw ja('multidir', b.name, c.name, a, va(d));
        }
        function M(a, c) {
          var d = b(c, !0);
          d && a.push({
            priority: 0,
            compile: function (a) {
              a = a.parent();
              var b = !!a.length;
              b && E.$$addBindingClass(a);
              return function (a, c) {
                var e = c.parent();
                b || E.$$addBindingClass(e);
                E.$$addBindingInfo(e, d.expressions);
                a.$watch(d, function (a) {
                  c[0].nodeValue = a;
                });
              };
            }
          });
        }
        function Wb(a, b) {
          a = Q(a || 'html');
          switch (a) {
          case 'svg':
          case 'math':
            var c = Y.createElement('div');
            c.innerHTML = '<' + a + '>' + b + '</' + a + '>';
            return c.childNodes[0].childNodes;
          default:
            return b;
          }
        }
        function R(a, b) {
          if ('srcdoc' == b)
            return L.HTML;
          var c = ua(a);
          if ('xlinkHref' == b || 'form' == c && 'action' == b || 'img' != c && ('src' == b || 'ngSrc' == b))
            return L.RESOURCE_URL;
        }
        function Pa(a, c, d, e, f) {
          var h = R(a, e);
          f = g[e] || f;
          var k = b(d, !0, h, f);
          if (k) {
            if ('multiple' === e && 'select' === ua(a))
              throw ja('selmulti', va(a));
            c.push({
              priority: 100,
              compile: function () {
                return {
                  pre: function (a, c, g) {
                    c = g.$$observers || (g.$$observers = {});
                    if (l.test(e))
                      throw ja('nodomevents');
                    var p = g[e];
                    p !== d && (k = p && b(p, !0, h, f), d = p);
                    k && (g[e] = k(a), (c[e] || (c[e] = [])).$$inter = !0, (g.$$observers && g.$$observers[e].$$scope || a).$watch(k, function (a, b) {
                      'class' === e && a != b ? g.$updateClass(a, b) : g.$set(e, a);
                    }));
                  }
                };
              }
            });
          }
        }
        function V(a, b, c) {
          var d = b[0], e = b.length, f = d.parentNode, g, h;
          if (a)
            for (g = 0, h = a.length; g < h; g++)
              if (a[g] == d) {
                a[g++] = c;
                h = g + e - 1;
                for (var l = a.length; g < l; g++, h++)
                  h < l ? a[g] = a[h] : delete a[g];
                a.length -= e - 1;
                a.context === d && (a.context = c);
                break;
              }
          f && f.replaceChild(c, d);
          a = Y.createDocumentFragment();
          a.appendChild(d);
          B(c).data(B(d).data());
          ra ? (Pb = !0, ra.cleanData([d])) : delete B.cache[d[B.expando]];
          d = 1;
          for (e = b.length; d < e; d++)
            f = b[d], B(f).remove(), a.appendChild(f), delete b[d];
          b[0] = c;
          b.length = 1;
        }
        function Z(a, b) {
          return z(function () {
            return a.apply(null, arguments);
          }, a, b);
        }
        function $(a, b, d, e, f, g) {
          try {
            a(b, d, e, f, g);
          } catch (h) {
            c(h, va(d));
          }
        }
        var Xb = function (a, b) {
          if (b) {
            var c = Object.keys(b), d, e, f;
            d = 0;
            for (e = c.length; d < e; d++)
              f = c[d], this[f] = b[f];
          } else
            this.$attr = {};
          this.$$element = a;
        };
        Xb.prototype = {
          $normalize: ya,
          $addClass: function (a) {
            a && 0 < a.length && J.addClass(this.$$element, a);
          },
          $removeClass: function (a) {
            a && 0 < a.length && J.removeClass(this.$$element, a);
          },
          $updateClass: function (a, b) {
            var c = Uc(a, b);
            c && c.length && J.addClass(this.$$element, c);
            (c = Uc(b, a)) && c.length && J.removeClass(this.$$element, c);
          },
          $set: function (a, b, d, e) {
            var f = this.$$element[0], g = Lc(f, a), h = kf(f, a), f = a;
            g ? (this.$$element.prop(a, b), e = g) : h && (this[h] = b, f = h);
            this[a] = b;
            e ? this.$attr[a] = e : (e = this.$attr[a]) || (this.$attr[a] = e = tc(a, '-'));
            g = ua(this.$$element);
            if ('a' === g && 'href' === a || 'img' === g && 'src' === a)
              this[a] = b = A(b, 'src' === a);
            else if ('img' === g && 'srcset' === a) {
              for (var g = '', h = U(b), l = /(\s+\d+x\s*,|\s+\d+w\s*,|\s+,|,\s+)/, l = /\s/.test(h) ? l : /(,)/, h = h.split(l), l = Math.floor(h.length / 2), k = 0; k < l; k++)
                var q = 2 * k, g = g + A(U(h[q]), !0), g = g + (' ' + U(h[q + 1]));
              h = U(h[2 * k]).split(/\s/);
              g += A(U(h[0]), !0);
              2 === h.length && (g += ' ' + U(h[1]));
              this[a] = b = g;
            }
            !1 !== d && (null === b || b === t ? this.$$element.removeAttr(e) : this.$$element.attr(e, b));
            (a = this.$$observers) && s(a[f], function (a) {
              try {
                a(b);
              } catch (d) {
                c(d);
              }
            });
          },
          $observe: function (a, b) {
            var c = this, d = c.$$observers || (c.$$observers = ha()), e = d[a] || (d[a] = []);
            e.push(b);
            v.$evalAsync(function () {
              !e.$$inter && c.hasOwnProperty(a) && b(c[a]);
            });
            return function () {
              Xa(e, b);
            };
          }
        };
        var Aa = b.startSymbol(), ka = b.endSymbol(), Sc = '{{' == Aa || '}}' == ka ? oa : function (a) {
            return a.replace(/\{\{/g, Aa).replace(/}}/g, ka);
          }, fb = /^ngAttr[A-Z]/;
        E.$$addBindingInfo = k ? function (a, b) {
          var c = a.data('$binding') || [];
          x(b) ? c = c.concat(b) : c.push(b);
          a.data('$binding', c);
        } : C;
        E.$$addBindingClass = k ? function (a) {
          P(a, 'ng-binding');
        } : C;
        E.$$addScopeInfo = k ? function (a, b, c, d) {
          a.data(c ? d ? '$isolateScopeNoTemplate' : '$isolateScope' : '$scope', b);
        } : C;
        E.$$addScopeClass = k ? function (a, b) {
          P(a, b ? 'ng-isolate-scope' : 'ng-scope');
        } : C;
        return E;
      }
    ];
  }
  function ya(b) {
    return cb(b.replace(Rc, ''));
  }
  function Uc(b, a) {
    var c = '', d = b.split(/\s+/), e = a.split(/\s+/), f = 0;
    a:
      for (; f < d.length; f++) {
        for (var g = d[f], h = 0; h < e.length; h++)
          if (g == e[h])
            continue a;
        c += (0 < c.length ? ' ' : '') + g;
      }
    return c;
  }
  function Tc(b) {
    b = B(b);
    var a = b.length;
    if (1 >= a)
      return b;
    for (; a--;)
      8 === b[a].nodeType && rf.call(b, a, 1);
    return b;
  }
  function Fe() {
    var b = {}, a = !1, c = /^(\S+)(\s+as\s+(\w+))?$/;
    this.register = function (a, c) {
      Ma(a, 'controller');
      H(a) ? z(b, a) : b[a] = c;
    };
    this.allowGlobals = function () {
      a = !0;
    };
    this.$get = [
      '$injector',
      '$window',
      function (d, e) {
        function f(a, b, c, d) {
          if (!a || !H(a.$scope))
            throw T('$controller')('noscp', d, b);
          a.$scope[b] = c;
        }
        return function (g, h, l, k) {
          var m, p, q;
          l = !0 === l;
          k && F(k) && (q = k);
          F(g) && (k = g.match(c), p = k[1], q = q || k[3], g = b.hasOwnProperty(p) ? b[p] : vc(h.$scope, p, !0) || (a ? vc(e, p, !0) : t), sb(g, p, !0));
          if (l)
            return l = (x(g) ? g[g.length - 1] : g).prototype, m = Object.create(l), q && f(h, q, m, p || g.name), z(function () {
              d.invoke(g, m, h, p);
              return m;
            }, {
              instance: m,
              identifier: q
            });
          m = d.instantiate(g, h, p);
          q && f(h, q, m, p || g.name);
          return m;
        };
      }
    ];
  }
  function Ge() {
    this.$get = [
      '$window',
      function (b) {
        return B(b.document);
      }
    ];
  }
  function He() {
    this.$get = [
      '$log',
      function (b) {
        return function (a, c) {
          b.error.apply(b, arguments);
        };
      }
    ];
  }
  function Yb(b, a) {
    if (F(b)) {
      var c = b.replace(sf, '').trim();
      if (c) {
        var d = a('Content-Type');
        (d = d && 0 === d.indexOf(Vc)) || (d = (d = c.match(tf)) && uf[d[0]].test(c));
        d && (b = oc(c));
      }
    }
    return b;
  }
  function Wc(b) {
    var a = ha(), c, d, e;
    if (!b)
      return a;
    s(b.split('\n'), function (b) {
      e = b.indexOf(':');
      c = Q(U(b.substr(0, e)));
      d = U(b.substr(e + 1));
      c && (a[c] = a[c] ? a[c] + ', ' + d : d);
    });
    return a;
  }
  function Xc(b) {
    var a = H(b) ? b : t;
    return function (c) {
      a || (a = Wc(b));
      return c ? (c = a[Q(c)], void 0 === c && (c = null), c) : a;
    };
  }
  function Yc(b, a, c, d) {
    if (G(d))
      return d(b, a, c);
    s(d, function (d) {
      b = d(b, a, c);
    });
    return b;
  }
  function Ke() {
    var b = this.defaults = {
        transformResponse: [Yb],
        transformRequest: [function (a) {
            return H(a) && '[object File]' !== Da.call(a) && '[object Blob]' !== Da.call(a) && '[object FormData]' !== Da.call(a) ? $a(a) : a;
          }],
        headers: {
          common: { Accept: 'application/json, text/plain, */*' },
          post: qa(Zb),
          put: qa(Zb),
          patch: qa(Zb)
        },
        xsrfCookieName: 'XSRF-TOKEN',
        xsrfHeaderName: 'X-XSRF-TOKEN'
      }, a = !1;
    this.useApplyAsync = function (b) {
      return y(b) ? (a = !!b, this) : a;
    };
    var c = this.interceptors = [];
    this.$get = [
      '$httpBackend',
      '$browser',
      '$cacheFactory',
      '$rootScope',
      '$q',
      '$injector',
      function (d, e, f, g, h, l) {
        function k(a) {
          function c(a) {
            var b = z({}, a);
            b.data = a.data ? Yc(a.data, a.headers, a.status, e.transformResponse) : a.data;
            a = a.status;
            return 200 <= a && 300 > a ? b : h.reject(b);
          }
          function d(a) {
            var b, c = {};
            s(a, function (a, d) {
              G(a) ? (b = a(), null != b && (c[d] = b)) : c[d] = a;
            });
            return c;
          }
          if (!ga.isObject(a))
            throw T('$http')('badreq', a);
          var e = z({
              method: 'get',
              transformRequest: b.transformRequest,
              transformResponse: b.transformResponse
            }, a);
          e.headers = function (a) {
            var c = b.headers, e = z({}, a.headers), f, g, c = z({}, c.common, c[Q(a.method)]);
            a:
              for (f in c) {
                a = Q(f);
                for (g in e)
                  if (Q(g) === a)
                    continue a;
                e[f] = c[f];
              }
            return d(e);
          }(a);
          e.method = ub(e.method);
          var f = [
              function (a) {
                var d = a.headers, e = Yc(a.data, Xc(d), t, a.transformRequest);
                D(e) && s(d, function (a, b) {
                  'content-type' === Q(b) && delete d[b];
                });
                D(a.withCredentials) && !D(b.withCredentials) && (a.withCredentials = b.withCredentials);
                return m(a, e).then(c, c);
              },
              t
            ], g = h.when(e);
          for (s(u, function (a) {
              (a.request || a.requestError) && f.unshift(a.request, a.requestError);
              (a.response || a.responseError) && f.push(a.response, a.responseError);
            }); f.length;) {
            a = f.shift();
            var l = f.shift(), g = g.then(a, l);
          }
          g.success = function (a) {
            g.then(function (b) {
              a(b.data, b.status, b.headers, e);
            });
            return g;
          };
          g.error = function (a) {
            g.then(null, function (b) {
              a(b.data, b.status, b.headers, e);
            });
            return g;
          };
          return g;
        }
        function m(c, f) {
          function l(b, c, d, e) {
            function f() {
              m(c, b, d, e);
            }
            P && (200 <= b && 300 > b ? P.put(X, [
              b,
              c,
              Wc(d),
              e
            ]) : P.remove(X));
            a ? g.$applyAsync(f) : (f(), g.$$phase || g.$apply());
          }
          function m(a, b, d, e) {
            b = Math.max(b, 0);
            (200 <= b && 300 > b ? J.resolve : J.reject)({
              data: a,
              status: b,
              headers: Xc(d),
              config: c,
              statusText: e
            });
          }
          function w(a) {
            m(a.data, a.status, qa(a.headers()), a.statusText);
          }
          function u() {
            var a = k.pendingRequests.indexOf(c);
            -1 !== a && k.pendingRequests.splice(a, 1);
          }
          var J = h.defer(), A = J.promise, P, E, s = c.headers, X = p(c.url, c.params);
          k.pendingRequests.push(c);
          A.then(u, u);
          !c.cache && !b.cache || !1 === c.cache || 'GET' !== c.method && 'JSONP' !== c.method || (P = H(c.cache) ? c.cache : H(b.cache) ? b.cache : q);
          P && (E = P.get(X), y(E) ? E && G(E.then) ? E.then(w, w) : x(E) ? m(E[1], E[0], qa(E[2]), E[3]) : m(E, 200, {}, 'OK') : P.put(X, A));
          D(E) && ((E = Zc(c.url) ? e.cookies()[c.xsrfCookieName || b.xsrfCookieName] : t) && (s[c.xsrfHeaderName || b.xsrfHeaderName] = E), d(c.method, X, f, l, s, c.timeout, c.withCredentials, c.responseType));
          return A;
        }
        function p(a, b) {
          if (!b)
            return a;
          var c = [];
          Ed(b, function (a, b) {
            null === a || D(a) || (x(a) || (a = [a]), s(a, function (a) {
              H(a) && (a = pa(a) ? a.toISOString() : $a(a));
              c.push(Fa(b) + '=' + Fa(a));
            }));
          });
          0 < c.length && (a += (-1 == a.indexOf('?') ? '?' : '&') + c.join('&'));
          return a;
        }
        var q = f('$http'), u = [];
        s(c, function (a) {
          u.unshift(F(a) ? l.get(a) : l.invoke(a));
        });
        k.pendingRequests = [];
        (function (a) {
          s(arguments, function (a) {
            k[a] = function (b, c) {
              return k(z(c || {}, {
                method: a,
                url: b
              }));
            };
          });
        }('get', 'delete', 'head', 'jsonp'));
        (function (a) {
          s(arguments, function (a) {
            k[a] = function (b, c, d) {
              return k(z(d || {}, {
                method: a,
                url: b,
                data: c
              }));
            };
          });
        }('post', 'put', 'patch'));
        k.defaults = b;
        return k;
      }
    ];
  }
  function vf() {
    return new M.XMLHttpRequest();
  }
  function Le() {
    this.$get = [
      '$browser',
      '$window',
      '$document',
      function (b, a, c) {
        return wf(b, vf, b.defer, a.angular.callbacks, c[0]);
      }
    ];
  }
  function wf(b, a, c, d, e) {
    function f(a, b, c) {
      var f = e.createElement('script'), m = null;
      f.type = 'text/javascript';
      f.src = a;
      f.async = !0;
      m = function (a) {
        f.removeEventListener('load', m, !1);
        f.removeEventListener('error', m, !1);
        e.body.removeChild(f);
        f = null;
        var g = -1, u = 'unknown';
        a && ('load' !== a.type || d[b].called || (a = { type: 'error' }), u = a.type, g = 'error' === a.type ? 404 : 200);
        c && c(g, u);
      };
      f.addEventListener('load', m, !1);
      f.addEventListener('error', m, !1);
      e.body.appendChild(f);
      return m;
    }
    return function (e, h, l, k, m, p, q, u) {
      function r() {
        v && v();
        w && w.abort();
      }
      function O(a, d, e, f, g) {
        J !== t && c.cancel(J);
        v = w = null;
        a(d, e, f, g);
        b.$$completeOutstandingRequest(C);
      }
      b.$$incOutstandingRequestCount();
      h = h || b.url();
      if ('jsonp' == Q(e)) {
        var n = '_' + (d.counter++).toString(36);
        d[n] = function (a) {
          d[n].data = a;
          d[n].called = !0;
        };
        var v = f(h.replace('JSON_CALLBACK', 'angular.callbacks.' + n), n, function (a, b) {
            O(k, a, d[n].data, '', b);
            d[n] = C;
          });
      } else {
        var w = a();
        w.open(e, h, !0);
        s(m, function (a, b) {
          y(a) && w.setRequestHeader(b, a);
        });
        w.onload = function () {
          var a = w.statusText || '', b = 'response' in w ? w.response : w.responseText, c = 1223 === w.status ? 204 : w.status;
          0 === c && (c = b ? 200 : 'file' == Ba(h).protocol ? 404 : 0);
          O(k, c, b, w.getAllResponseHeaders(), a);
        };
        e = function () {
          O(k, -1, null, null, '');
        };
        w.onerror = e;
        w.onabort = e;
        q && (w.withCredentials = !0);
        if (u)
          try {
            w.responseType = u;
          } catch (L) {
            if ('json' !== u)
              throw L;
          }
        w.send(l || null);
      }
      if (0 < p)
        var J = c(r, p);
      else
        p && G(p.then) && p.then(r);
    };
  }
  function Ie() {
    var b = '{{', a = '}}';
    this.startSymbol = function (a) {
      return a ? (b = a, this) : b;
    };
    this.endSymbol = function (b) {
      return b ? (a = b, this) : a;
    };
    this.$get = [
      '$parse',
      '$exceptionHandler',
      '$sce',
      function (c, d, e) {
        function f(a) {
          return '\\\\\\' + a;
        }
        function g(f, g, u, r) {
          function O(c) {
            return c.replace(k, b).replace(m, a);
          }
          function n(a) {
            try {
              var b = a;
              a = u ? e.getTrusted(u, b) : e.valueOf(b);
              var c;
              if (r && !y(a))
                c = a;
              else if (null == a)
                c = '';
              else {
                switch (typeof a) {
                case 'string':
                  break;
                case 'number':
                  a = '' + a;
                  break;
                default:
                  a = $a(a);
                }
                c = a;
              }
              return c;
            } catch (g) {
              c = $b('interr', f, g.toString()), d(c);
            }
          }
          r = !!r;
          for (var v, w, L = 0, J = [], A = [], P = f.length, E = [], s = []; L < P;)
            if (-1 != (v = f.indexOf(b, L)) && -1 != (w = f.indexOf(a, v + h)))
              L !== v && E.push(O(f.substring(L, v))), L = f.substring(v + h, w), J.push(L), A.push(c(L, n)), L = w + l, s.push(E.length), E.push('');
            else {
              L !== P && E.push(O(f.substring(L)));
              break;
            }
          if (u && 1 < E.length)
            throw $b('noconcat', f);
          if (!g || J.length) {
            var X = function (a) {
              for (var b = 0, c = J.length; b < c; b++) {
                if (r && D(a[b]))
                  return;
                E[s[b]] = a[b];
              }
              return E.join('');
            };
            return z(function (a) {
              var b = 0, c = J.length, e = Array(c);
              try {
                for (; b < c; b++)
                  e[b] = A[b](a);
                return X(e);
              } catch (g) {
                a = $b('interr', f, g.toString()), d(a);
              }
            }, {
              exp: f,
              expressions: J,
              $$watchDelegate: function (a, b, c) {
                var d;
                return a.$watchGroup(A, function (c, e) {
                  var f = X(c);
                  G(b) && b.call(this, f, c !== e ? d : f, a);
                  d = f;
                }, c);
              }
            });
          }
        }
        var h = b.length, l = a.length, k = new RegExp(b.replace(/./g, f), 'g'), m = new RegExp(a.replace(/./g, f), 'g');
        g.startSymbol = function () {
          return b;
        };
        g.endSymbol = function () {
          return a;
        };
        return g;
      }
    ];
  }
  function Je() {
    this.$get = [
      '$rootScope',
      '$window',
      '$q',
      '$$q',
      function (b, a, c, d) {
        function e(e, h, l, k) {
          var m = a.setInterval, p = a.clearInterval, q = 0, u = y(k) && !k, r = (u ? d : c).defer(), O = r.promise;
          l = y(l) ? l : 0;
          O.then(null, null, e);
          O.$$intervalId = m(function () {
            r.notify(q++);
            0 < l && q >= l && (r.resolve(q), p(O.$$intervalId), delete f[O.$$intervalId]);
            u || b.$apply();
          }, h);
          f[O.$$intervalId] = r;
          return O;
        }
        var f = {};
        e.cancel = function (b) {
          return b && b.$$intervalId in f ? (f[b.$$intervalId].reject('canceled'), a.clearInterval(b.$$intervalId), delete f[b.$$intervalId], !0) : !1;
        };
        return e;
      }
    ];
  }
  function Rd() {
    this.$get = function () {
      return {
        id: 'en-us',
        NUMBER_FORMATS: {
          DECIMAL_SEP: '.',
          GROUP_SEP: ',',
          PATTERNS: [
            {
              minInt: 1,
              minFrac: 0,
              maxFrac: 3,
              posPre: '',
              posSuf: '',
              negPre: '-',
              negSuf: '',
              gSize: 3,
              lgSize: 3
            },
            {
              minInt: 1,
              minFrac: 2,
              maxFrac: 2,
              posPre: '\xa4',
              posSuf: '',
              negPre: '(\xa4',
              negSuf: ')',
              gSize: 3,
              lgSize: 3
            }
          ],
          CURRENCY_SYM: '$'
        },
        DATETIME_FORMATS: {
          MONTH: 'January February March April May June July August September October November December'.split(' '),
          SHORTMONTH: 'Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec'.split(' '),
          DAY: 'Sunday Monday Tuesday Wednesday Thursday Friday Saturday'.split(' '),
          SHORTDAY: 'Sun Mon Tue Wed Thu Fri Sat'.split(' '),
          AMPMS: [
            'AM',
            'PM'
          ],
          medium: 'MMM d, y h:mm:ss a',
          'short': 'M/d/yy h:mm a',
          fullDate: 'EEEE, MMMM d, y',
          longDate: 'MMMM d, y',
          mediumDate: 'MMM d, y',
          shortDate: 'M/d/yy',
          mediumTime: 'h:mm:ss a',
          shortTime: 'h:mm a'
        },
        pluralCat: function (b) {
          return 1 === b ? 'one' : 'other';
        }
      };
    };
  }
  function ac(b) {
    b = b.split('/');
    for (var a = b.length; a--;)
      b[a] = qb(b[a]);
    return b.join('/');
  }
  function $c(b, a) {
    var c = Ba(b);
    a.$$protocol = c.protocol;
    a.$$host = c.hostname;
    a.$$port = ba(c.port) || xf[c.protocol] || null;
  }
  function ad(b, a) {
    var c = '/' !== b.charAt(0);
    c && (b = '/' + b);
    var d = Ba(b);
    a.$$path = decodeURIComponent(c && '/' === d.pathname.charAt(0) ? d.pathname.substring(1) : d.pathname);
    a.$$search = qc(d.search);
    a.$$hash = decodeURIComponent(d.hash);
    a.$$path && '/' != a.$$path.charAt(0) && (a.$$path = '/' + a.$$path);
  }
  function za(b, a) {
    if (0 === a.indexOf(b))
      return a.substr(b.length);
  }
  function Ha(b) {
    var a = b.indexOf('#');
    return -1 == a ? b : b.substr(0, a);
  }
  function bd(b) {
    return b.replace(/(#.+)|#$/, '$1');
  }
  function bc(b) {
    return b.substr(0, Ha(b).lastIndexOf('/') + 1);
  }
  function cc(b, a) {
    this.$$html5 = !0;
    a = a || '';
    var c = bc(b);
    $c(b, this);
    this.$$parse = function (a) {
      var b = za(c, a);
      if (!F(b))
        throw Fb('ipthprfx', a, c);
      ad(b, this);
      this.$$path || (this.$$path = '/');
      this.$$compose();
    };
    this.$$compose = function () {
      var a = Nb(this.$$search), b = this.$$hash ? '#' + qb(this.$$hash) : '';
      this.$$url = ac(this.$$path) + (a ? '?' + a : '') + b;
      this.$$absUrl = c + this.$$url.substr(1);
    };
    this.$$parseLinkUrl = function (d, e) {
      if (e && '#' === e[0])
        return this.hash(e.slice(1)), !0;
      var f, g;
      (f = za(b, d)) !== t ? (g = f, g = (f = za(a, f)) !== t ? c + (za('/', f) || f) : b + g) : (f = za(c, d)) !== t ? g = c + f : c == d + '/' && (g = c);
      g && this.$$parse(g);
      return !!g;
    };
  }
  function dc(b, a) {
    var c = bc(b);
    $c(b, this);
    this.$$parse = function (d) {
      d = za(b, d) || za(c, d);
      var e;
      '#' === d.charAt(0) ? (e = za(a, d), D(e) && (e = d)) : e = this.$$html5 ? d : '';
      ad(e, this);
      d = this.$$path;
      var f = /^\/[A-Z]:(\/.*)/;
      0 === e.indexOf(b) && (e = e.replace(b, ''));
      f.exec(e) || (d = (e = f.exec(d)) ? e[1] : d);
      this.$$path = d;
      this.$$compose();
    };
    this.$$compose = function () {
      var c = Nb(this.$$search), e = this.$$hash ? '#' + qb(this.$$hash) : '';
      this.$$url = ac(this.$$path) + (c ? '?' + c : '') + e;
      this.$$absUrl = b + (this.$$url ? a + this.$$url : '');
    };
    this.$$parseLinkUrl = function (a, c) {
      return Ha(b) == Ha(a) ? (this.$$parse(a), !0) : !1;
    };
  }
  function cd(b, a) {
    this.$$html5 = !0;
    dc.apply(this, arguments);
    var c = bc(b);
    this.$$parseLinkUrl = function (d, e) {
      if (e && '#' === e[0])
        return this.hash(e.slice(1)), !0;
      var f, g;
      b == Ha(d) ? f = d : (g = za(c, d)) ? f = b + a + g : c === d + '/' && (f = c);
      f && this.$$parse(f);
      return !!f;
    };
    this.$$compose = function () {
      var c = Nb(this.$$search), e = this.$$hash ? '#' + qb(this.$$hash) : '';
      this.$$url = ac(this.$$path) + (c ? '?' + c : '') + e;
      this.$$absUrl = b + a + this.$$url;
    };
  }
  function Gb(b) {
    return function () {
      return this[b];
    };
  }
  function dd(b, a) {
    return function (c) {
      if (D(c))
        return this[b];
      this[b] = a(c);
      this.$$compose();
      return this;
    };
  }
  function Me() {
    var b = '', a = {
        enabled: !1,
        requireBase: !0,
        rewriteLinks: !0
      };
    this.hashPrefix = function (a) {
      return y(a) ? (b = a, this) : b;
    };
    this.html5Mode = function (b) {
      return Wa(b) ? (a.enabled = b, this) : H(b) ? (Wa(b.enabled) && (a.enabled = b.enabled), Wa(b.requireBase) && (a.requireBase = b.requireBase), Wa(b.rewriteLinks) && (a.rewriteLinks = b.rewriteLinks), this) : a;
    };
    this.$get = [
      '$rootScope',
      '$browser',
      '$sniffer',
      '$rootElement',
      '$window',
      function (c, d, e, f, g) {
        function h(a, b, c) {
          var e = k.url(), f = k.$$state;
          try {
            d.url(a, b, c), k.$$state = d.state();
          } catch (g) {
            throw k.url(e), k.$$state = f, g;
          }
        }
        function l(a, b) {
          c.$broadcast('$locationChangeSuccess', k.absUrl(), a, k.$$state, b);
        }
        var k, m;
        m = d.baseHref();
        var p = d.url(), q;
        if (a.enabled) {
          if (!m && a.requireBase)
            throw Fb('nobase');
          q = p.substring(0, p.indexOf('/', p.indexOf('//') + 2)) + (m || '/');
          m = e.history ? cc : cd;
        } else
          q = Ha(p), m = dc;
        k = new m(q, '#' + b);
        k.$$parseLinkUrl(p, p);
        k.$$state = d.state();
        var u = /^\s*(javascript|mailto):/i;
        f.on('click', function (b) {
          if (a.rewriteLinks && !b.ctrlKey && !b.metaKey && 2 != b.which) {
            for (var e = B(b.target); 'a' !== ua(e[0]);)
              if (e[0] === f[0] || !(e = e.parent())[0])
                return;
            var h = e.prop('href'), l = e.attr('href') || e.attr('xlink:href');
            H(h) && '[object SVGAnimatedString]' === h.toString() && (h = Ba(h.animVal).href);
            u.test(h) || !h || e.attr('target') || b.isDefaultPrevented() || !k.$$parseLinkUrl(h, l) || (b.preventDefault(), k.absUrl() != d.url() && (c.$apply(), g.angular['ff-684208-preventDefault'] = !0));
          }
        });
        k.absUrl() != p && d.url(k.absUrl(), !0);
        var r = !0;
        d.onUrlChange(function (a, b) {
          c.$evalAsync(function () {
            var d = k.absUrl(), e = k.$$state, f;
            k.$$parse(a);
            k.$$state = b;
            f = c.$broadcast('$locationChangeStart', a, d, b, e).defaultPrevented;
            k.absUrl() === a && (f ? (k.$$parse(d), k.$$state = e, h(d, !1, e)) : (r = !1, l(d, e)));
          });
          c.$$phase || c.$digest();
        });
        c.$watch(function () {
          var a = bd(d.url()), b = bd(k.absUrl()), f = d.state(), g = k.$$replace, q = a !== b || k.$$html5 && e.history && f !== k.$$state;
          if (r || q)
            r = !1, c.$evalAsync(function () {
              var b = k.absUrl(), d = c.$broadcast('$locationChangeStart', b, a, k.$$state, f).defaultPrevented;
              k.absUrl() === b && (d ? (k.$$parse(a), k.$$state = f) : (q && h(b, g, f === k.$$state ? null : k.$$state), l(a, f)));
            });
          k.$$replace = !1;
        });
        return k;
      }
    ];
  }
  function Ne() {
    var b = !0, a = this;
    this.debugEnabled = function (a) {
      return y(a) ? (b = a, this) : b;
    };
    this.$get = [
      '$window',
      function (c) {
        function d(a) {
          a instanceof Error && (a.stack ? a = a.message && -1 === a.stack.indexOf(a.message) ? 'Error: ' + a.message + '\n' + a.stack : a.stack : a.sourceURL && (a = a.message + '\n' + a.sourceURL + ':' + a.line));
          return a;
        }
        function e(a) {
          var b = c.console || {}, e = b[a] || b.log || C;
          a = !1;
          try {
            a = !!e.apply;
          } catch (l) {
          }
          return a ? function () {
            var a = [];
            s(arguments, function (b) {
              a.push(d(b));
            });
            return e.apply(b, a);
          } : function (a, b) {
            e(a, null == b ? '' : b);
          };
        }
        return {
          log: e('log'),
          info: e('info'),
          warn: e('warn'),
          error: e('error'),
          debug: function () {
            var c = e('debug');
            return function () {
              b && c.apply(a, arguments);
            };
          }()
        };
      }
    ];
  }
  function sa(b, a) {
    if ('__defineGetter__' === b || '__defineSetter__' === b || '__lookupGetter__' === b || '__lookupSetter__' === b || '__proto__' === b)
      throw la('isecfld', a);
    return b;
  }
  function ta(b, a) {
    if (b) {
      if (b.constructor === b)
        throw la('isecfn', a);
      if (b.window === b)
        throw la('isecwindow', a);
      if (b.children && (b.nodeName || b.prop && b.attr && b.find))
        throw la('isecdom', a);
      if (b === Object)
        throw la('isecobj', a);
    }
    return b;
  }
  function ec(b) {
    return b.constant;
  }
  function gb(b, a, c, d) {
    ta(b, d);
    a = a.split('.');
    for (var e, f = 0; 1 < a.length; f++) {
      e = sa(a.shift(), d);
      var g = ta(b[e], d);
      g || (g = {}, b[e] = g);
      b = g;
    }
    e = sa(a.shift(), d);
    ta(b[e], d);
    return b[e] = c;
  }
  function Qa(b) {
    return 'constructor' == b;
  }
  function ed(b, a, c, d, e, f, g) {
    sa(b, f);
    sa(a, f);
    sa(c, f);
    sa(d, f);
    sa(e, f);
    var h = function (a) {
        return ta(a, f);
      }, l = g || Qa(b) ? h : oa, k = g || Qa(a) ? h : oa, m = g || Qa(c) ? h : oa, p = g || Qa(d) ? h : oa, q = g || Qa(e) ? h : oa;
    return function (f, g) {
      var h = g && g.hasOwnProperty(b) ? g : f;
      if (null == h)
        return h;
      h = l(h[b]);
      if (!a)
        return h;
      if (null == h)
        return t;
      h = k(h[a]);
      if (!c)
        return h;
      if (null == h)
        return t;
      h = m(h[c]);
      if (!d)
        return h;
      if (null == h)
        return t;
      h = p(h[d]);
      return e ? null == h ? t : h = q(h[e]) : h;
    };
  }
  function yf(b, a) {
    return function (c, d) {
      return b(c, d, ta, a);
    };
  }
  function zf(b, a, c) {
    var d = a.expensiveChecks, e = d ? Af : Bf, f = e[b];
    if (f)
      return f;
    var g = b.split('.'), h = g.length;
    if (a.csp)
      f = 6 > h ? ed(g[0], g[1], g[2], g[3], g[4], c, d) : function (a, b) {
        var e = 0, f;
        do
          f = ed(g[e++], g[e++], g[e++], g[e++], g[e++], c, d)(a, b), b = t, a = f;
        while (e < h);
        return f;
      };
    else {
      var l = '';
      d && (l += 's = eso(s, fe);\nl = eso(l, fe);\n');
      var k = d;
      s(g, function (a, b) {
        sa(a, c);
        var e = (b ? 's' : '((l&&l.hasOwnProperty("' + a + '"))?l:s)') + '.' + a;
        if (d || Qa(a))
          e = 'eso(' + e + ', fe)', k = !0;
        l += 'if(s == null) return undefined;\ns=' + e + ';\n';
      });
      l += 'return s;';
      a = new Function('s', 'l', 'eso', 'fe', l);
      a.toString = da(l);
      k && (a = yf(a, c));
      f = a;
    }
    f.sharedGetter = !0;
    f.assign = function (a, c) {
      return gb(a, b, c, b);
    };
    return e[b] = f;
  }
  function fc(b) {
    return G(b.valueOf) ? b.valueOf() : Cf.call(b);
  }
  function Oe() {
    var b = ha(), a = ha();
    this.$get = [
      '$filter',
      '$sniffer',
      function (c, d) {
        function e(a) {
          var b = a;
          a.sharedGetter && (b = function (b, c) {
            return a(b, c);
          }, b.literal = a.literal, b.constant = a.constant, b.assign = a.assign);
          return b;
        }
        function f(a, b) {
          for (var c = 0, d = a.length; c < d; c++) {
            var e = a[c];
            e.constant || (e.inputs ? f(e.inputs, b) : -1 === b.indexOf(e) && b.push(e));
          }
          return b;
        }
        function g(a, b) {
          return null == a || null == b ? a === b : 'object' === typeof a && (a = fc(a), 'object' === typeof a) ? !1 : a === b || a !== a && b !== b;
        }
        function h(a, b, c, d) {
          var e = d.$$inputs || (d.$$inputs = f(d.inputs, [])), h;
          if (1 === e.length) {
            var l = g, e = e[0];
            return a.$watch(function (a) {
              var b = e(a);
              g(b, l) || (h = d(a), l = b && fc(b));
              return h;
            }, b, c);
          }
          for (var k = [], q = 0, p = e.length; q < p; q++)
            k[q] = g;
          return a.$watch(function (a) {
            for (var b = !1, c = 0, f = e.length; c < f; c++) {
              var l = e[c](a);
              if (b || (b = !g(l, k[c])))
                k[c] = l && fc(l);
            }
            b && (h = d(a));
            return h;
          }, b, c);
        }
        function l(a, b, c, d) {
          var e, f;
          return e = a.$watch(function (a) {
            return d(a);
          }, function (a, c, d) {
            f = a;
            G(b) && b.apply(this, arguments);
            y(a) && d.$$postDigest(function () {
              y(f) && e();
            });
          }, c);
        }
        function k(a, b, c, d) {
          function e(a) {
            var b = !0;
            s(a, function (a) {
              y(a) || (b = !1);
            });
            return b;
          }
          var f, g;
          return f = a.$watch(function (a) {
            return d(a);
          }, function (a, c, d) {
            g = a;
            G(b) && b.call(this, a, c, d);
            e(a) && d.$$postDigest(function () {
              e(g) && f();
            });
          }, c);
        }
        function m(a, b, c, d) {
          var e;
          return e = a.$watch(function (a) {
            return d(a);
          }, function (a, c, d) {
            G(b) && b.apply(this, arguments);
            e();
          }, c);
        }
        function p(a, b) {
          if (!b)
            return a;
          var c = a.$$watchDelegate, c = c !== k && c !== l ? function (c, d) {
              var e = a(c, d);
              return b(e, c, d);
            } : function (c, d) {
              var e = a(c, d), f = b(e, c, d);
              return y(e) ? f : e;
            };
          a.$$watchDelegate && a.$$watchDelegate !== h ? c.$$watchDelegate = a.$$watchDelegate : b.$stateful || (c.$$watchDelegate = h, c.inputs = [a]);
          return c;
        }
        var q = {
            csp: d.csp,
            expensiveChecks: !1
          }, u = {
            csp: d.csp,
            expensiveChecks: !0
          };
        return function (d, f, g) {
          var v, w, L;
          switch (typeof d) {
          case 'string':
            L = d = d.trim();
            var J = g ? a : b;
            v = J[L];
            v || (':' === d.charAt(0) && ':' === d.charAt(1) && (w = !0, d = d.substring(2)), g = g ? u : q, v = new gc(g), v = new hb(v, c, g).parse(d), v.constant ? v.$$watchDelegate = m : w ? (v = e(v), v.$$watchDelegate = v.literal ? k : l) : v.inputs && (v.$$watchDelegate = h), J[L] = v);
            return p(v, f);
          case 'function':
            return p(d, f);
          default:
            return p(C, f);
          }
        };
      }
    ];
  }
  function Qe() {
    this.$get = [
      '$rootScope',
      '$exceptionHandler',
      function (b, a) {
        return fd(function (a) {
          b.$evalAsync(a);
        }, a);
      }
    ];
  }
  function Re() {
    this.$get = [
      '$browser',
      '$exceptionHandler',
      function (b, a) {
        return fd(function (a) {
          b.defer(a);
        }, a);
      }
    ];
  }
  function fd(b, a) {
    function c(a, b, c) {
      function d(b) {
        return function (c) {
          e || (e = !0, b.call(a, c));
        };
      }
      var e = !1;
      return [
        d(b),
        d(c)
      ];
    }
    function d() {
      this.$$state = { status: 0 };
    }
    function e(a, b) {
      return function (c) {
        b.call(a, c);
      };
    }
    function f(c) {
      !c.processScheduled && c.pending && (c.processScheduled = !0, b(function () {
        var b, d, e;
        e = c.pending;
        c.processScheduled = !1;
        c.pending = t;
        for (var f = 0, g = e.length; f < g; ++f) {
          d = e[f][0];
          b = e[f][c.status];
          try {
            G(b) ? d.resolve(b(c.value)) : 1 === c.status ? d.resolve(c.value) : d.reject(c.value);
          } catch (h) {
            d.reject(h), a(h);
          }
        }
      }));
    }
    function g() {
      this.promise = new d();
      this.resolve = e(this, this.resolve);
      this.reject = e(this, this.reject);
      this.notify = e(this, this.notify);
    }
    var h = T('$q', TypeError);
    d.prototype = {
      then: function (a, b, c) {
        var d = new g();
        this.$$state.pending = this.$$state.pending || [];
        this.$$state.pending.push([
          d,
          a,
          b,
          c
        ]);
        0 < this.$$state.status && f(this.$$state);
        return d.promise;
      },
      'catch': function (a) {
        return this.then(null, a);
      },
      'finally': function (a, b) {
        return this.then(function (b) {
          return k(b, !0, a);
        }, function (b) {
          return k(b, !1, a);
        }, b);
      }
    };
    g.prototype = {
      resolve: function (a) {
        this.promise.$$state.status || (a === this.promise ? this.$$reject(h('qcycle', a)) : this.$$resolve(a));
      },
      $$resolve: function (b) {
        var d, e;
        e = c(this, this.$$resolve, this.$$reject);
        try {
          if (H(b) || G(b))
            d = b && b.then;
          G(d) ? (this.promise.$$state.status = -1, d.call(b, e[0], e[1], this.notify)) : (this.promise.$$state.value = b, this.promise.$$state.status = 1, f(this.promise.$$state));
        } catch (g) {
          e[1](g), a(g);
        }
      },
      reject: function (a) {
        this.promise.$$state.status || this.$$reject(a);
      },
      $$reject: function (a) {
        this.promise.$$state.value = a;
        this.promise.$$state.status = 2;
        f(this.promise.$$state);
      },
      notify: function (c) {
        var d = this.promise.$$state.pending;
        0 >= this.promise.$$state.status && d && d.length && b(function () {
          for (var b, e, f = 0, g = d.length; f < g; f++) {
            e = d[f][0];
            b = d[f][3];
            try {
              e.notify(G(b) ? b(c) : c);
            } catch (h) {
              a(h);
            }
          }
        });
      }
    };
    var l = function (a, b) {
        var c = new g();
        b ? c.resolve(a) : c.reject(a);
        return c.promise;
      }, k = function (a, b, c) {
        var d = null;
        try {
          G(c) && (d = c());
        } catch (e) {
          return l(e, !1);
        }
        return d && G(d.then) ? d.then(function () {
          return l(a, b);
        }, function (a) {
          return l(a, !1);
        }) : l(a, b);
      }, m = function (a, b, c, d) {
        var e = new g();
        e.resolve(a);
        return e.promise.then(b, c, d);
      }, p = function u(a) {
        if (!G(a))
          throw h('norslvr', a);
        if (!(this instanceof u))
          return new u(a);
        var b = new g();
        a(function (a) {
          b.resolve(a);
        }, function (a) {
          b.reject(a);
        });
        return b.promise;
      };
    p.defer = function () {
      return new g();
    };
    p.reject = function (a) {
      var b = new g();
      b.reject(a);
      return b.promise;
    };
    p.when = m;
    p.all = function (a) {
      var b = new g(), c = 0, d = x(a) ? [] : {};
      s(a, function (a, e) {
        c++;
        m(a).then(function (a) {
          d.hasOwnProperty(e) || (d[e] = a, --c || b.resolve(d));
        }, function (a) {
          d.hasOwnProperty(e) || b.reject(a);
        });
      });
      0 === c && b.resolve(d);
      return b.promise;
    };
    return p;
  }
  function $e() {
    this.$get = [
      '$window',
      '$timeout',
      function (b, a) {
        var c = b.requestAnimationFrame || b.webkitRequestAnimationFrame, d = b.cancelAnimationFrame || b.webkitCancelAnimationFrame || b.webkitCancelRequestAnimationFrame, e = !!c, f = e ? function (a) {
            var b = c(a);
            return function () {
              d(b);
            };
          } : function (b) {
            var c = a(b, 16.66, !1);
            return function () {
              a.cancel(c);
            };
          };
        f.supported = e;
        return f;
      }
    ];
  }
  function Pe() {
    var b = 10, a = T('$rootScope'), c = null, d = null;
    this.digestTtl = function (a) {
      arguments.length && (b = a);
      return b;
    };
    this.$get = [
      '$injector',
      '$exceptionHandler',
      '$parse',
      '$browser',
      function (e, f, g, h) {
        function l() {
          this.$id = ++nb;
          this.$$phase = this.$parent = this.$$watchers = this.$$nextSibling = this.$$prevSibling = this.$$childHead = this.$$childTail = null;
          this.$root = this;
          this.$$destroyed = !1;
          this.$$listeners = {};
          this.$$listenerCount = {};
          this.$$isolateBindings = null;
        }
        function k(b) {
          if (r.$$phase)
            throw a('inprog', r.$$phase);
          r.$$phase = b;
        }
        function m(a, b, c) {
          do
            a.$$listenerCount[c] -= b, 0 === a.$$listenerCount[c] && delete a.$$listenerCount[c];
          while (a = a.$parent);
        }
        function p() {
        }
        function q() {
          for (; v.length;)
            try {
              v.shift()();
            } catch (a) {
              f(a);
            }
          d = null;
        }
        function u() {
          null === d && (d = h.defer(function () {
            r.$apply(q);
          }));
        }
        l.prototype = {
          constructor: l,
          $new: function (a, b) {
            function c() {
              d.$$destroyed = !0;
            }
            var d;
            b = b || this;
            a ? (d = new l(), d.$root = this.$root) : (this.$$ChildScope || (this.$$ChildScope = function () {
              this.$$watchers = this.$$nextSibling = this.$$childHead = this.$$childTail = null;
              this.$$listeners = {};
              this.$$listenerCount = {};
              this.$id = ++nb;
              this.$$ChildScope = null;
            }, this.$$ChildScope.prototype = this), d = new this.$$ChildScope());
            d.$parent = b;
            d.$$prevSibling = b.$$childTail;
            b.$$childHead ? (b.$$childTail.$$nextSibling = d, b.$$childTail = d) : b.$$childHead = b.$$childTail = d;
            (a || b != this) && d.$on('$destroy', c);
            return d;
          },
          $watch: function (a, b, d) {
            var e = g(a);
            if (e.$$watchDelegate)
              return e.$$watchDelegate(this, b, d, e);
            var f = this.$$watchers, h = {
                fn: b,
                last: p,
                get: e,
                exp: a,
                eq: !!d
              };
            c = null;
            G(b) || (h.fn = C);
            f || (f = this.$$watchers = []);
            f.unshift(h);
            return function () {
              Xa(f, h);
              c = null;
            };
          },
          $watchGroup: function (a, b) {
            function c() {
              h = !1;
              l ? (l = !1, b(e, e, g)) : b(e, d, g);
            }
            var d = Array(a.length), e = Array(a.length), f = [], g = this, h = !1, l = !0;
            if (!a.length) {
              var k = !0;
              g.$evalAsync(function () {
                k && b(e, e, g);
              });
              return function () {
                k = !1;
              };
            }
            if (1 === a.length)
              return this.$watch(a[0], function (a, c, f) {
                e[0] = a;
                d[0] = c;
                b(e, a === c ? e : d, f);
              });
            s(a, function (a, b) {
              var l = g.$watch(a, function (a, f) {
                  e[b] = a;
                  d[b] = f;
                  h || (h = !0, g.$evalAsync(c));
                });
              f.push(l);
            });
            return function () {
              for (; f.length;)
                f.shift()();
            };
          },
          $watchCollection: function (a, b) {
            function c(a) {
              e = a;
              var b, d, g, h;
              if (!D(e)) {
                if (H(e))
                  if (Ta(e))
                    for (f !== q && (f = q, u = f.length = 0, k++), a = e.length, u !== a && (k++, f.length = u = a), b = 0; b < a; b++)
                      h = f[b], g = e[b], d = h !== h && g !== g, d || h === g || (k++, f[b] = g);
                  else {
                    f !== m && (f = m = {}, u = 0, k++);
                    a = 0;
                    for (b in e)
                      e.hasOwnProperty(b) && (a++, g = e[b], h = f[b], b in f ? (d = h !== h && g !== g, d || h === g || (k++, f[b] = g)) : (u++, f[b] = g, k++));
                    if (u > a)
                      for (b in k++, f)
                        e.hasOwnProperty(b) || (u--, delete f[b]);
                  }
                else
                  f !== e && (f = e, k++);
                return k;
              }
            }
            c.$stateful = !0;
            var d = this, e, f, h, l = 1 < b.length, k = 0, p = g(a, c), q = [], m = {}, n = !0, u = 0;
            return this.$watch(p, function () {
              n ? (n = !1, b(e, e, d)) : b(e, h, d);
              if (l)
                if (H(e))
                  if (Ta(e)) {
                    h = Array(e.length);
                    for (var a = 0; a < e.length; a++)
                      h[a] = e[a];
                  } else
                    for (a in h = {}, e)
                      rc.call(e, a) && (h[a] = e[a]);
                else
                  h = e;
            });
          },
          $digest: function () {
            var e, g, l, m, u, v, s = b, t, W = [], y, I;
            k('$digest');
            h.$$checkUrlChange();
            this === r && null !== d && (h.defer.cancel(d), q());
            c = null;
            do {
              v = !1;
              for (t = this; O.length;) {
                try {
                  I = O.shift(), I.scope.$eval(I.expression, I.locals);
                } catch (B) {
                  f(B);
                }
                c = null;
              }
              a:
                do {
                  if (m = t.$$watchers)
                    for (u = m.length; u--;)
                      try {
                        if (e = m[u])
                          if ((g = e.get(t)) !== (l = e.last) && !(e.eq ? fa(g, l) : 'number' === typeof g && 'number' === typeof l && isNaN(g) && isNaN(l)))
                            v = !0, c = e, e.last = e.eq ? Ea(g, null) : g, e.fn(g, l === p ? g : l, t), 5 > s && (y = 4 - s, W[y] || (W[y] = []), W[y].push({
                              msg: G(e.exp) ? 'fn: ' + (e.exp.name || e.exp.toString()) : e.exp,
                              newVal: g,
                              oldVal: l
                            }));
                          else if (e === c) {
                            v = !1;
                            break a;
                          }
                      } catch (D) {
                        f(D);
                      }
                  if (!(m = t.$$childHead || t !== this && t.$$nextSibling))
                    for (; t !== this && !(m = t.$$nextSibling);)
                      t = t.$parent;
                } while (t = m);
              if ((v || O.length) && !s--)
                throw r.$$phase = null, a('infdig', b, W);
            } while (v || O.length);
            for (r.$$phase = null; n.length;)
              try {
                n.shift()();
              } catch (ca) {
                f(ca);
              }
          },
          $destroy: function () {
            if (!this.$$destroyed) {
              var a = this.$parent;
              this.$broadcast('$destroy');
              this.$$destroyed = !0;
              if (this !== r) {
                for (var b in this.$$listenerCount)
                  m(this, this.$$listenerCount[b], b);
                a.$$childHead == this && (a.$$childHead = this.$$nextSibling);
                a.$$childTail == this && (a.$$childTail = this.$$prevSibling);
                this.$$prevSibling && (this.$$prevSibling.$$nextSibling = this.$$nextSibling);
                this.$$nextSibling && (this.$$nextSibling.$$prevSibling = this.$$prevSibling);
                this.$destroy = this.$digest = this.$apply = this.$evalAsync = this.$applyAsync = C;
                this.$on = this.$watch = this.$watchGroup = function () {
                  return C;
                };
                this.$$listeners = {};
                this.$parent = this.$$nextSibling = this.$$prevSibling = this.$$childHead = this.$$childTail = this.$root = this.$$watchers = null;
              }
            }
          },
          $eval: function (a, b) {
            return g(a)(this, b);
          },
          $evalAsync: function (a, b) {
            r.$$phase || O.length || h.defer(function () {
              O.length && r.$digest();
            });
            O.push({
              scope: this,
              expression: a,
              locals: b
            });
          },
          $$postDigest: function (a) {
            n.push(a);
          },
          $apply: function (a) {
            try {
              return k('$apply'), this.$eval(a);
            } catch (b) {
              f(b);
            } finally {
              r.$$phase = null;
              try {
                r.$digest();
              } catch (c) {
                throw f(c), c;
              }
            }
          },
          $applyAsync: function (a) {
            function b() {
              c.$eval(a);
            }
            var c = this;
            a && v.push(b);
            u();
          },
          $on: function (a, b) {
            var c = this.$$listeners[a];
            c || (this.$$listeners[a] = c = []);
            c.push(b);
            var d = this;
            do
              d.$$listenerCount[a] || (d.$$listenerCount[a] = 0), d.$$listenerCount[a]++;
            while (d = d.$parent);
            var e = this;
            return function () {
              var d = c.indexOf(b);
              -1 !== d && (c[d] = null, m(e, 1, a));
            };
          },
          $emit: function (a, b) {
            var c = [], d, e = this, g = !1, h = {
                name: a,
                targetScope: e,
                stopPropagation: function () {
                  g = !0;
                },
                preventDefault: function () {
                  h.defaultPrevented = !0;
                },
                defaultPrevented: !1
              }, l = Ya([h], arguments, 1), k, p;
            do {
              d = e.$$listeners[a] || c;
              h.currentScope = e;
              k = 0;
              for (p = d.length; k < p; k++)
                if (d[k])
                  try {
                    d[k].apply(null, l);
                  } catch (m) {
                    f(m);
                  }
                else
                  d.splice(k, 1), k--, p--;
              if (g)
                return h.currentScope = null, h;
              e = e.$parent;
            } while (e);
            h.currentScope = null;
            return h;
          },
          $broadcast: function (a, b) {
            var c = this, d = this, e = {
                name: a,
                targetScope: this,
                preventDefault: function () {
                  e.defaultPrevented = !0;
                },
                defaultPrevented: !1
              };
            if (!this.$$listenerCount[a])
              return e;
            for (var g = Ya([e], arguments, 1), h, l; c = d;) {
              e.currentScope = c;
              d = c.$$listeners[a] || [];
              h = 0;
              for (l = d.length; h < l; h++)
                if (d[h])
                  try {
                    d[h].apply(null, g);
                  } catch (k) {
                    f(k);
                  }
                else
                  d.splice(h, 1), h--, l--;
              if (!(d = c.$$listenerCount[a] && c.$$childHead || c !== this && c.$$nextSibling))
                for (; c !== this && !(d = c.$$nextSibling);)
                  c = c.$parent;
            }
            e.currentScope = null;
            return e;
          }
        };
        var r = new l(), O = r.$$asyncQueue = [], n = r.$$postDigestQueue = [], v = r.$$applyAsyncQueue = [];
        return r;
      }
    ];
  }
  function Sd() {
    var b = /^\s*(https?|ftp|mailto|tel|file):/, a = /^\s*((https?|ftp|file|blob):|data:image\/)/;
    this.aHrefSanitizationWhitelist = function (a) {
      return y(a) ? (b = a, this) : b;
    };
    this.imgSrcSanitizationWhitelist = function (b) {
      return y(b) ? (a = b, this) : a;
    };
    this.$get = function () {
      return function (c, d) {
        var e = d ? a : b, f;
        f = Ba(c).href;
        return '' === f || f.match(e) ? c : 'unsafe:' + f;
      };
    };
  }
  function Df(b) {
    if ('self' === b)
      return b;
    if (F(b)) {
      if (-1 < b.indexOf('***'))
        throw Ca('iwcard', b);
      b = gd(b).replace('\\*\\*', '.*').replace('\\*', '[^:/.?&;]*');
      return new RegExp('^' + b + '$');
    }
    if (ob(b))
      return new RegExp('^' + b.source + '$');
    throw Ca('imatcher');
  }
  function hd(b) {
    var a = [];
    y(b) && s(b, function (b) {
      a.push(Df(b));
    });
    return a;
  }
  function Te() {
    this.SCE_CONTEXTS = ma;
    var b = ['self'], a = [];
    this.resourceUrlWhitelist = function (a) {
      arguments.length && (b = hd(a));
      return b;
    };
    this.resourceUrlBlacklist = function (b) {
      arguments.length && (a = hd(b));
      return a;
    };
    this.$get = [
      '$injector',
      function (c) {
        function d(a, b) {
          return 'self' === a ? Zc(b) : !!a.exec(b.href);
        }
        function e(a) {
          var b = function (a) {
            this.$$unwrapTrustedValue = function () {
              return a;
            };
          };
          a && (b.prototype = new a());
          b.prototype.valueOf = function () {
            return this.$$unwrapTrustedValue();
          };
          b.prototype.toString = function () {
            return this.$$unwrapTrustedValue().toString();
          };
          return b;
        }
        var f = function (a) {
          throw Ca('unsafe');
        };
        c.has('$sanitize') && (f = c.get('$sanitize'));
        var g = e(), h = {};
        h[ma.HTML] = e(g);
        h[ma.CSS] = e(g);
        h[ma.URL] = e(g);
        h[ma.JS] = e(g);
        h[ma.RESOURCE_URL] = e(h[ma.URL]);
        return {
          trustAs: function (a, b) {
            var c = h.hasOwnProperty(a) ? h[a] : null;
            if (!c)
              throw Ca('icontext', a, b);
            if (null === b || b === t || '' === b)
              return b;
            if ('string' !== typeof b)
              throw Ca('itype', a);
            return new c(b);
          },
          getTrusted: function (c, e) {
            if (null === e || e === t || '' === e)
              return e;
            var g = h.hasOwnProperty(c) ? h[c] : null;
            if (g && e instanceof g)
              return e.$$unwrapTrustedValue();
            if (c === ma.RESOURCE_URL) {
              var g = Ba(e.toString()), p, q, u = !1;
              p = 0;
              for (q = b.length; p < q; p++)
                if (d(b[p], g)) {
                  u = !0;
                  break;
                }
              if (u)
                for (p = 0, q = a.length; p < q; p++)
                  if (d(a[p], g)) {
                    u = !1;
                    break;
                  }
              if (u)
                return e;
              throw Ca('insecurl', e.toString());
            }
            if (c === ma.HTML)
              return f(e);
            throw Ca('unsafe');
          },
          valueOf: function (a) {
            return a instanceof g ? a.$$unwrapTrustedValue() : a;
          }
        };
      }
    ];
  }
  function Se() {
    var b = !0;
    this.enabled = function (a) {
      arguments.length && (b = !!a);
      return b;
    };
    this.$get = [
      '$parse',
      '$sceDelegate',
      function (a, c) {
        if (b && 8 > Ra)
          throw Ca('iequirks');
        var d = qa(ma);
        d.isEnabled = function () {
          return b;
        };
        d.trustAs = c.trustAs;
        d.getTrusted = c.getTrusted;
        d.valueOf = c.valueOf;
        b || (d.trustAs = d.getTrusted = function (a, b) {
          return b;
        }, d.valueOf = oa);
        d.parseAs = function (b, c) {
          var e = a(c);
          return e.literal && e.constant ? e : a(c, function (a) {
            return d.getTrusted(b, a);
          });
        };
        var e = d.parseAs, f = d.getTrusted, g = d.trustAs;
        s(ma, function (a, b) {
          var c = Q(b);
          d[cb('parse_as_' + c)] = function (b) {
            return e(a, b);
          };
          d[cb('get_trusted_' + c)] = function (b) {
            return f(a, b);
          };
          d[cb('trust_as_' + c)] = function (b) {
            return g(a, b);
          };
        });
        return d;
      }
    ];
  }
  function Ue() {
    this.$get = [
      '$window',
      '$document',
      function (b, a) {
        var c = {}, d = ba((/android (\d+)/.exec(Q((b.navigator || {}).userAgent)) || [])[1]), e = /Boxee/i.test((b.navigator || {}).userAgent), f = a[0] || {}, g, h = /^(Moz|webkit|ms)(?=[A-Z])/, l = f.body && f.body.style, k = !1, m = !1;
        if (l) {
          for (var p in l)
            if (k = h.exec(p)) {
              g = k[0];
              g = g.substr(0, 1).toUpperCase() + g.substr(1);
              break;
            }
          g || (g = 'WebkitOpacity' in l && 'webkit');
          k = !!('transition' in l || g + 'Transition' in l);
          m = !!('animation' in l || g + 'Animation' in l);
          !d || k && m || (k = F(f.body.style.webkitTransition), m = F(f.body.style.webkitAnimation));
        }
        return {
          history: !(!b.history || !b.history.pushState || 4 > d || e),
          hasEvent: function (a) {
            if ('input' === a && 11 >= Ra)
              return !1;
            if (D(c[a])) {
              var b = f.createElement('div');
              c[a] = 'on' + a in b;
            }
            return c[a];
          },
          csp: ab(),
          vendorPrefix: g,
          transitions: k,
          animations: m,
          android: d
        };
      }
    ];
  }
  function We() {
    this.$get = [
      '$templateCache',
      '$http',
      '$q',
      function (b, a, c) {
        function d(e, f) {
          d.totalPendingRequests++;
          var g = a.defaults && a.defaults.transformResponse;
          x(g) ? g = g.filter(function (a) {
            return a !== Yb;
          }) : g === Yb && (g = null);
          return a.get(e, {
            cache: b,
            transformResponse: g
          }).then(function (a) {
            d.totalPendingRequests--;
            return a.data;
          }, function (a) {
            d.totalPendingRequests--;
            if (!f)
              throw ja('tpload', e);
            return c.reject(a);
          });
        }
        d.totalPendingRequests = 0;
        return d;
      }
    ];
  }
  function Xe() {
    this.$get = [
      '$rootScope',
      '$browser',
      '$location',
      function (b, a, c) {
        return {
          findBindings: function (a, b, c) {
            a = a.getElementsByClassName('ng-binding');
            var g = [];
            s(a, function (a) {
              var d = ga.element(a).data('$binding');
              d && s(d, function (d) {
                c ? new RegExp('(^|\\s)' + gd(b) + '(\\s|\\||$)').test(d) && g.push(a) : -1 != d.indexOf(b) && g.push(a);
              });
            });
            return g;
          },
          findModels: function (a, b, c) {
            for (var g = [
                  'ng-',
                  'data-ng-',
                  'ng\\:'
                ], h = 0; h < g.length; ++h) {
              var l = a.querySelectorAll('[' + g[h] + 'model' + (c ? '=' : '*=') + '"' + b + '"]');
              if (l.length)
                return l;
            }
          },
          getLocation: function () {
            return c.url();
          },
          setLocation: function (a) {
            a !== c.url() && (c.url(a), b.$digest());
          },
          whenStable: function (b) {
            a.notifyWhenNoOutstandingRequests(b);
          }
        };
      }
    ];
  }
  function Ye() {
    this.$get = [
      '$rootScope',
      '$browser',
      '$q',
      '$$q',
      '$exceptionHandler',
      function (b, a, c, d, e) {
        function f(f, l, k) {
          var m = y(k) && !k, p = (m ? d : c).defer(), q = p.promise;
          l = a.defer(function () {
            try {
              p.resolve(f());
            } catch (a) {
              p.reject(a), e(a);
            } finally {
              delete g[q.$$timeoutId];
            }
            m || b.$apply();
          }, l);
          q.$$timeoutId = l;
          g[l] = p;
          return q;
        }
        var g = {};
        f.cancel = function (b) {
          return b && b.$$timeoutId in g ? (g[b.$$timeoutId].reject('canceled'), delete g[b.$$timeoutId], a.defer.cancel(b.$$timeoutId)) : !1;
        };
        return f;
      }
    ];
  }
  function Ba(b) {
    Ra && (Z.setAttribute('href', b), b = Z.href);
    Z.setAttribute('href', b);
    return {
      href: Z.href,
      protocol: Z.protocol ? Z.protocol.replace(/:$/, '') : '',
      host: Z.host,
      search: Z.search ? Z.search.replace(/^\?/, '') : '',
      hash: Z.hash ? Z.hash.replace(/^#/, '') : '',
      hostname: Z.hostname,
      port: Z.port,
      pathname: '/' === Z.pathname.charAt(0) ? Z.pathname : '/' + Z.pathname
    };
  }
  function Zc(b) {
    b = F(b) ? Ba(b) : b;
    return b.protocol === id.protocol && b.host === id.host;
  }
  function Ze() {
    this.$get = da(M);
  }
  function Dc(b) {
    function a(c, d) {
      if (H(c)) {
        var e = {};
        s(c, function (b, c) {
          e[c] = a(c, b);
        });
        return e;
      }
      return b.factory(c + 'Filter', d);
    }
    this.register = a;
    this.$get = [
      '$injector',
      function (a) {
        return function (b) {
          return a.get(b + 'Filter');
        };
      }
    ];
    a('currency', jd);
    a('date', kd);
    a('filter', Ef);
    a('json', Ff);
    a('limitTo', Gf);
    a('lowercase', Hf);
    a('number', ld);
    a('orderBy', md);
    a('uppercase', If);
  }
  function Ef() {
    return function (b, a, c) {
      if (!x(b))
        return b;
      var d;
      switch (typeof a) {
      case 'function':
        break;
      case 'boolean':
      case 'number':
      case 'string':
        d = !0;
      case 'object':
        a = Jf(a, c, d);
        break;
      default:
        return b;
      }
      return b.filter(a);
    };
  }
  function Jf(b, a, c) {
    var d = H(b) && '$' in b;
    !0 === a ? a = fa : G(a) || (a = function (a, b) {
      if (H(a) || H(b))
        return !1;
      a = Q('' + a);
      b = Q('' + b);
      return -1 !== a.indexOf(b);
    });
    return function (e) {
      return d && !H(e) ? Ia(e, b.$, a, !1) : Ia(e, b, a, c);
    };
  }
  function Ia(b, a, c, d, e) {
    var f = typeof b, g = typeof a;
    if ('string' === g && '!' === a.charAt(0))
      return !Ia(b, a.substring(1), c, d);
    if ('array' === f)
      return b.some(function (b) {
        return Ia(b, a, c, d);
      });
    switch (f) {
    case 'object':
      var h;
      if (d) {
        for (h in b)
          if ('$' !== h.charAt(0) && Ia(b[h], a, c, !0))
            return !0;
        return e ? !1 : Ia(b, a, c, !1);
      }
      if ('object' === g) {
        for (h in a)
          if (e = a[h], !G(e) && (f = '$' === h, !Ia(f ? b : b[h], e, c, f, f)))
            return !1;
        return !0;
      }
      return c(b, a);
    case 'function':
      return !1;
    default:
      return c(b, a);
    }
  }
  function jd(b) {
    var a = b.NUMBER_FORMATS;
    return function (b, d, e) {
      D(d) && (d = a.CURRENCY_SYM);
      D(e) && (e = a.PATTERNS[1].maxFrac);
      return null == b ? b : nd(b, a.PATTERNS[1], a.GROUP_SEP, a.DECIMAL_SEP, e).replace(/\u00A4/g, d);
    };
  }
  function ld(b) {
    var a = b.NUMBER_FORMATS;
    return function (b, d) {
      return null == b ? b : nd(b, a.PATTERNS[0], a.GROUP_SEP, a.DECIMAL_SEP, d);
    };
  }
  function nd(b, a, c, d, e) {
    if (!isFinite(b) || H(b))
      return '';
    var f = 0 > b;
    b = Math.abs(b);
    var g = b + '', h = '', l = [], k = !1;
    if (-1 !== g.indexOf('e')) {
      var m = g.match(/([\d\.]+)e(-?)(\d+)/);
      m && '-' == m[2] && m[3] > e + 1 ? b = 0 : (h = g, k = !0);
    }
    if (k)
      0 < e && 1 > b && (h = b.toFixed(e), b = parseFloat(h));
    else {
      g = (g.split(od)[1] || '').length;
      D(e) && (e = Math.min(Math.max(a.minFrac, g), a.maxFrac));
      b = +(Math.round(+(b.toString() + 'e' + e)).toString() + 'e' + -e);
      var g = ('' + b).split(od), k = g[0], g = g[1] || '', p = 0, q = a.lgSize, u = a.gSize;
      if (k.length >= q + u)
        for (p = k.length - q, m = 0; m < p; m++)
          0 === (p - m) % u && 0 !== m && (h += c), h += k.charAt(m);
      for (m = p; m < k.length; m++)
        0 === (k.length - m) % q && 0 !== m && (h += c), h += k.charAt(m);
      for (; g.length < e;)
        g += '0';
      e && '0' !== e && (h += d + g.substr(0, e));
    }
    0 === b && (f = !1);
    l.push(f ? a.negPre : a.posPre, h, f ? a.negSuf : a.posSuf);
    return l.join('');
  }
  function Hb(b, a, c) {
    var d = '';
    0 > b && (d = '-', b = -b);
    for (b = '' + b; b.length < a;)
      b = '0' + b;
    c && (b = b.substr(b.length - a));
    return d + b;
  }
  function $(b, a, c, d) {
    c = c || 0;
    return function (e) {
      e = e['get' + b]();
      if (0 < c || e > -c)
        e += c;
      0 === e && -12 == c && (e = 12);
      return Hb(e, a, d);
    };
  }
  function Ib(b, a) {
    return function (c, d) {
      var e = c['get' + b](), f = ub(a ? 'SHORT' + b : b);
      return d[f][e];
    };
  }
  function pd(b) {
    var a = new Date(b, 0, 1).getDay();
    return new Date(b, 0, (4 >= a ? 5 : 12) - a);
  }
  function qd(b) {
    return function (a) {
      var c = pd(a.getFullYear());
      a = +new Date(a.getFullYear(), a.getMonth(), a.getDate() + (4 - a.getDay())) - +c;
      a = 1 + Math.round(a / 604800000);
      return Hb(a, b);
    };
  }
  function kd(b) {
    function a(a) {
      var b;
      if (b = a.match(c)) {
        a = new Date(0);
        var f = 0, g = 0, h = b[8] ? a.setUTCFullYear : a.setFullYear, l = b[8] ? a.setUTCHours : a.setHours;
        b[9] && (f = ba(b[9] + b[10]), g = ba(b[9] + b[11]));
        h.call(a, ba(b[1]), ba(b[2]) - 1, ba(b[3]));
        f = ba(b[4] || 0) - f;
        g = ba(b[5] || 0) - g;
        h = ba(b[6] || 0);
        b = Math.round(1000 * parseFloat('0.' + (b[7] || 0)));
        l.call(a, f, g, h, b);
      }
      return a;
    }
    var c = /^(\d{4})-?(\d\d)-?(\d\d)(?:T(\d\d)(?::?(\d\d)(?::?(\d\d)(?:\.(\d+))?)?)?(Z|([+-])(\d\d):?(\d\d))?)?$/;
    return function (c, e, f) {
      var g = '', h = [], l, k;
      e = e || 'mediumDate';
      e = b.DATETIME_FORMATS[e] || e;
      F(c) && (c = Kf.test(c) ? ba(c) : a(c));
      V(c) && (c = new Date(c));
      if (!pa(c))
        return c;
      for (; e;)
        (k = Lf.exec(e)) ? (h = Ya(h, k, 1), e = h.pop()) : (h.push(e), e = null);
      f && 'UTC' === f && (c = new Date(c.getTime()), c.setMinutes(c.getMinutes() + c.getTimezoneOffset()));
      s(h, function (a) {
        l = Mf[a];
        g += l ? l(c, b.DATETIME_FORMATS) : a.replace(/(^'|'$)/g, '').replace(/''/g, '\'');
      });
      return g;
    };
  }
  function Ff() {
    return function (b, a) {
      D(a) && (a = 2);
      return $a(b, a);
    };
  }
  function Gf() {
    return function (b, a) {
      V(b) && (b = b.toString());
      if (!x(b) && !F(b))
        return b;
      a = Infinity === Math.abs(Number(a)) ? Number(a) : ba(a);
      if (F(b))
        return a ? 0 <= a ? b.slice(0, a) : b.slice(a, b.length) : '';
      var c, d;
      a > b.length ? a = b.length : a < -b.length && (a = -b.length);
      if (0 < a)
        c = 0, d = a;
      else {
        if (!a)
          return [];
        c = b.length + a;
        d = b.length;
      }
      return b.slice(c, d);
    };
  }
  function md(b) {
    return function (a, c, d) {
      function e(a, b) {
        return b ? function (b, c) {
          return a(c, b);
        } : a;
      }
      function f(a) {
        switch (typeof a) {
        case 'number':
        case 'boolean':
        case 'string':
          return !0;
        default:
          return !1;
        }
      }
      function g(a) {
        return null === a ? 'null' : 'function' === typeof a.valueOf && (a = a.valueOf(), f(a)) || 'function' === typeof a.toString && (a = a.toString(), f(a)) ? a : '';
      }
      function h(a, b) {
        var c = typeof a, d = typeof b;
        c === d && 'object' === c && (a = g(a), b = g(b));
        return c === d ? ('string' === c && (a = a.toLowerCase(), b = b.toLowerCase()), a === b ? 0 : a < b ? -1 : 1) : c < d ? -1 : 1;
      }
      if (!Ta(a))
        return a;
      c = x(c) ? c : [c];
      0 === c.length && (c = ['+']);
      c = c.map(function (a) {
        var c = !1, d = a || oa;
        if (F(a)) {
          if ('+' == a.charAt(0) || '-' == a.charAt(0))
            c = '-' == a.charAt(0), a = a.substring(1);
          if ('' === a)
            return e(h, c);
          d = b(a);
          if (d.constant) {
            var f = d();
            return e(function (a, b) {
              return h(a[f], b[f]);
            }, c);
          }
        }
        return e(function (a, b) {
          return h(d(a), d(b));
        }, c);
      });
      return Za.call(a).sort(e(function (a, b) {
        for (var d = 0; d < c.length; d++) {
          var e = c[d](a, b);
          if (0 !== e)
            return e;
        }
        return 0;
      }, d));
    };
  }
  function Ja(b) {
    G(b) && (b = { link: b });
    b.restrict = b.restrict || 'AC';
    return da(b);
  }
  function rd(b, a, c, d, e) {
    var f = this, g = [], h = f.$$parentForm = b.parent().controller('form') || Jb;
    f.$error = {};
    f.$$success = {};
    f.$pending = t;
    f.$name = e(a.name || a.ngForm || '')(c);
    f.$dirty = !1;
    f.$pristine = !0;
    f.$valid = !0;
    f.$invalid = !1;
    f.$submitted = !1;
    h.$addControl(f);
    f.$rollbackViewValue = function () {
      s(g, function (a) {
        a.$rollbackViewValue();
      });
    };
    f.$commitViewValue = function () {
      s(g, function (a) {
        a.$commitViewValue();
      });
    };
    f.$addControl = function (a) {
      Ma(a.$name, 'input');
      g.push(a);
      a.$name && (f[a.$name] = a);
    };
    f.$$renameControl = function (a, b) {
      var c = a.$name;
      f[c] === a && delete f[c];
      f[b] = a;
      a.$name = b;
    };
    f.$removeControl = function (a) {
      a.$name && f[a.$name] === a && delete f[a.$name];
      s(f.$pending, function (b, c) {
        f.$setValidity(c, null, a);
      });
      s(f.$error, function (b, c) {
        f.$setValidity(c, null, a);
      });
      Xa(g, a);
    };
    sd({
      ctrl: this,
      $element: b,
      set: function (a, b, c) {
        var d = a[b];
        d ? -1 === d.indexOf(c) && d.push(c) : a[b] = [c];
      },
      unset: function (a, b, c) {
        var d = a[b];
        d && (Xa(d, c), 0 === d.length && delete a[b]);
      },
      parentForm: h,
      $animate: d
    });
    f.$setDirty = function () {
      d.removeClass(b, Sa);
      d.addClass(b, Kb);
      f.$dirty = !0;
      f.$pristine = !1;
      h.$setDirty();
    };
    f.$setPristine = function () {
      d.setClass(b, Sa, Kb + ' ng-submitted');
      f.$dirty = !1;
      f.$pristine = !0;
      f.$submitted = !1;
      s(g, function (a) {
        a.$setPristine();
      });
    };
    f.$setUntouched = function () {
      s(g, function (a) {
        a.$setUntouched();
      });
    };
    f.$setSubmitted = function () {
      d.addClass(b, 'ng-submitted');
      f.$submitted = !0;
      h.$setSubmitted();
    };
  }
  function hc(b) {
    b.$formatters.push(function (a) {
      return b.$isEmpty(a) ? a : a.toString();
    });
  }
  function ib(b, a, c, d, e, f) {
    var g = Q(a[0].type);
    if (!e.android) {
      var h = !1;
      a.on('compositionstart', function (a) {
        h = !0;
      });
      a.on('compositionend', function () {
        h = !1;
        l();
      });
    }
    var l = function (b) {
      k && (f.defer.cancel(k), k = null);
      if (!h) {
        var e = a.val();
        b = b && b.type;
        'password' === g || c.ngTrim && 'false' === c.ngTrim || (e = U(e));
        (d.$viewValue !== e || '' === e && d.$$hasNativeValidators) && d.$setViewValue(e, b);
      }
    };
    if (e.hasEvent('input'))
      a.on('input', l);
    else {
      var k, m = function (a, b, c) {
          k || (k = f.defer(function () {
            k = null;
            b && b.value === c || l(a);
          }));
        };
      a.on('keydown', function (a) {
        var b = a.keyCode;
        91 === b || 15 < b && 19 > b || 37 <= b && 40 >= b || m(a, this, this.value);
      });
      if (e.hasEvent('paste'))
        a.on('paste cut', m);
    }
    a.on('change', l);
    d.$render = function () {
      a.val(d.$isEmpty(d.$viewValue) ? '' : d.$viewValue);
    };
  }
  function Lb(b, a) {
    return function (c, d) {
      var e, f;
      if (pa(c))
        return c;
      if (F(c)) {
        '"' == c.charAt(0) && '"' == c.charAt(c.length - 1) && (c = c.substring(1, c.length - 1));
        if (Nf.test(c))
          return new Date(c);
        b.lastIndex = 0;
        if (e = b.exec(c))
          return e.shift(), f = d ? {
            yyyy: d.getFullYear(),
            MM: d.getMonth() + 1,
            dd: d.getDate(),
            HH: d.getHours(),
            mm: d.getMinutes(),
            ss: d.getSeconds(),
            sss: d.getMilliseconds() / 1000
          } : {
            yyyy: 1970,
            MM: 1,
            dd: 1,
            HH: 0,
            mm: 0,
            ss: 0,
            sss: 0
          }, s(e, function (b, c) {
            c < a.length && (f[a[c]] = +b);
          }), new Date(f.yyyy, f.MM - 1, f.dd, f.HH, f.mm, f.ss || 0, 1000 * f.sss || 0);
      }
      return NaN;
    };
  }
  function jb(b, a, c, d) {
    return function (e, f, g, h, l, k, m) {
      function p(a) {
        return a && !(a.getTime && a.getTime() !== a.getTime());
      }
      function q(a) {
        return y(a) ? pa(a) ? a : c(a) : t;
      }
      td(e, f, g, h);
      ib(e, f, g, h, l, k);
      var u = h && h.$options && h.$options.timezone, r;
      h.$$parserName = b;
      h.$parsers.push(function (b) {
        return h.$isEmpty(b) ? null : a.test(b) ? (b = c(b, r), 'UTC' === u && b.setMinutes(b.getMinutes() - b.getTimezoneOffset()), b) : t;
      });
      h.$formatters.push(function (a) {
        if (a && !pa(a))
          throw Mb('datefmt', a);
        if (p(a)) {
          if ((r = a) && 'UTC' === u) {
            var b = 60000 * r.getTimezoneOffset();
            r = new Date(r.getTime() + b);
          }
          return m('date')(a, d, u);
        }
        r = null;
        return '';
      });
      if (y(g.min) || g.ngMin) {
        var s;
        h.$validators.min = function (a) {
          return !p(a) || D(s) || c(a) >= s;
        };
        g.$observe('min', function (a) {
          s = q(a);
          h.$validate();
        });
      }
      if (y(g.max) || g.ngMax) {
        var n;
        h.$validators.max = function (a) {
          return !p(a) || D(n) || c(a) <= n;
        };
        g.$observe('max', function (a) {
          n = q(a);
          h.$validate();
        });
      }
    };
  }
  function td(b, a, c, d) {
    (d.$$hasNativeValidators = H(a[0].validity)) && d.$parsers.push(function (b) {
      var c = a.prop('validity') || {};
      return c.badInput && !c.typeMismatch ? t : b;
    });
  }
  function ud(b, a, c, d, e) {
    if (y(d)) {
      b = b(d);
      if (!b.constant)
        throw T('ngModel')('constexpr', c, d);
      return b(a);
    }
    return e;
  }
  function sd(b) {
    function a(a, b) {
      b && !f[a] ? (k.addClass(e, a), f[a] = !0) : !b && f[a] && (k.removeClass(e, a), f[a] = !1);
    }
    function c(b, c) {
      b = b ? '-' + tc(b, '-') : '';
      a(kb + b, !0 === c);
      a(vd + b, !1 === c);
    }
    var d = b.ctrl, e = b.$element, f = {}, g = b.set, h = b.unset, l = b.parentForm, k = b.$animate;
    f[vd] = !(f[kb] = e.hasClass(kb));
    d.$setValidity = function (b, e, f) {
      e === t ? (d.$pending || (d.$pending = {}), g(d.$pending, b, f)) : (d.$pending && h(d.$pending, b, f), wd(d.$pending) && (d.$pending = t));
      Wa(e) ? e ? (h(d.$error, b, f), g(d.$$success, b, f)) : (g(d.$error, b, f), h(d.$$success, b, f)) : (h(d.$error, b, f), h(d.$$success, b, f));
      d.$pending ? (a(xd, !0), d.$valid = d.$invalid = t, c('', null)) : (a(xd, !1), d.$valid = wd(d.$error), d.$invalid = !d.$valid, c('', d.$valid));
      e = d.$pending && d.$pending[b] ? t : d.$error[b] ? !1 : d.$$success[b] ? !0 : null;
      c(b, e);
      l.$setValidity(b, e, d);
    };
  }
  function wd(b) {
    if (b)
      for (var a in b)
        return !1;
    return !0;
  }
  function ic(b, a) {
    b = 'ngClass' + b;
    return [
      '$animate',
      function (c) {
        function d(a, b) {
          var c = [], d = 0;
          a:
            for (; d < a.length; d++) {
              for (var e = a[d], m = 0; m < b.length; m++)
                if (e == b[m])
                  continue a;
              c.push(e);
            }
          return c;
        }
        function e(a) {
          if (!x(a)) {
            if (F(a))
              return a.split(' ');
            if (H(a)) {
              var b = [];
              s(a, function (a, c) {
                a && (b = b.concat(c.split(' ')));
              });
              return b;
            }
          }
          return a;
        }
        return {
          restrict: 'AC',
          link: function (f, g, h) {
            function l(a, b) {
              var c = g.data('$classCounts') || {}, d = [];
              s(a, function (a) {
                if (0 < b || c[a])
                  c[a] = (c[a] || 0) + b, c[a] === +(0 < b) && d.push(a);
              });
              g.data('$classCounts', c);
              return d.join(' ');
            }
            function k(b) {
              if (!0 === a || f.$index % 2 === a) {
                var k = e(b || []);
                if (!m) {
                  var u = l(k, 1);
                  h.$addClass(u);
                } else if (!fa(b, m)) {
                  var r = e(m), u = d(k, r), k = d(r, k), u = l(u, 1), k = l(k, -1);
                  u && u.length && c.addClass(g, u);
                  k && k.length && c.removeClass(g, k);
                }
              }
              m = qa(b);
            }
            var m;
            f.$watch(h[b], k, !0);
            h.$observe('class', function (a) {
              k(f.$eval(h[b]));
            });
            'ngClass' !== b && f.$watch('$index', function (c, d) {
              var g = c & 1;
              if (g !== (d & 1)) {
                var k = e(f.$eval(h[b]));
                g === a ? (g = l(k, 1), h.$addClass(g)) : (g = l(k, -1), h.$removeClass(g));
              }
            });
          }
        };
      }
    ];
  }
  var Of = /^\/(.+)\/([a-z]*)$/, Q = function (b) {
      return F(b) ? b.toLowerCase() : b;
    }, rc = Object.prototype.hasOwnProperty, ub = function (b) {
      return F(b) ? b.toUpperCase() : b;
    }, Ra, B, ra, Za = [].slice, rf = [].splice, Pf = [].push, Da = Object.prototype.toString, Ka = T('ng'), ga = M.angular || (M.angular = {}), bb, nb = 0;
  Ra = Y.documentMode;
  C.$inject = [];
  oa.$inject = [];
  var x = Array.isArray, U = function (b) {
      return F(b) ? b.trim() : b;
    }, gd = function (b) {
      return b.replace(/([-()\[\]{}+?*.$\^|,:#<!\\])/g, '\\$1').replace(/\x08/g, '\\x08');
    }, ab = function () {
      if (y(ab.isActive_))
        return ab.isActive_;
      var b = !(!Y.querySelector('[ng-csp]') && !Y.querySelector('[data-ng-csp]'));
      if (!b)
        try {
          new Function('');
        } catch (a) {
          b = !0;
        }
      return ab.isActive_ = b;
    }, rb = [
      'ng-',
      'data-ng-',
      'ng:',
      'x-ng-'
    ], Md = /[A-Z]/g, uc = !1, Pb, na = 1, pb = 3, Qd = {
      full: '1.3.8',
      major: 1,
      minor: 3,
      dot: 8,
      codeName: 'prophetic-narwhal'
    };
  R.expando = 'ng339';
  var zb = R.cache = {}, hf = 1;
  R._data = function (b) {
    return this.cache[b[this.expando]] || {};
  };
  var cf = /([\:\-\_]+(.))/g, df = /^moz([A-Z])/, Qf = {
      mouseleave: 'mouseout',
      mouseenter: 'mouseover'
    }, Sb = T('jqLite'), gf = /^<(\w+)\s*\/?>(?:<\/\1>|)$/, Rb = /<|&#?\w+;/, ef = /<([\w:]+)/, ff = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi, ia = {
      option: [
        1,
        '<select multiple="multiple">',
        '</select>'
      ],
      thead: [
        1,
        '<table>',
        '</table>'
      ],
      col: [
        2,
        '<table><colgroup>',
        '</colgroup></table>'
      ],
      tr: [
        2,
        '<table><tbody>',
        '</tbody></table>'
      ],
      td: [
        3,
        '<table><tbody><tr>',
        '</tr></tbody></table>'
      ],
      _default: [
        0,
        '',
        ''
      ]
    };
  ia.optgroup = ia.option;
  ia.tbody = ia.tfoot = ia.colgroup = ia.caption = ia.thead;
  ia.th = ia.td;
  var La = R.prototype = {
      ready: function (b) {
        function a() {
          c || (c = !0, b());
        }
        var c = !1;
        'complete' === Y.readyState ? setTimeout(a) : (this.on('DOMContentLoaded', a), R(M).on('load', a));
      },
      toString: function () {
        var b = [];
        s(this, function (a) {
          b.push('' + a);
        });
        return '[' + b.join(', ') + ']';
      },
      eq: function (b) {
        return 0 <= b ? B(this[b]) : B(this[this.length + b]);
      },
      length: 0,
      push: Pf,
      sort: [].sort,
      splice: [].splice
    }, Eb = {};
  s('multiple selected checked disabled readOnly required open'.split(' '), function (b) {
    Eb[Q(b)] = b;
  });
  var Mc = {};
  s('input select option textarea button form details'.split(' '), function (b) {
    Mc[b] = !0;
  });
  var Nc = {
      ngMinlength: 'minlength',
      ngMaxlength: 'maxlength',
      ngMin: 'min',
      ngMax: 'max',
      ngPattern: 'pattern'
    };
  s({
    data: Ub,
    removeData: xb
  }, function (b, a) {
    R[a] = b;
  });
  s({
    data: Ub,
    inheritedData: Db,
    scope: function (b) {
      return B.data(b, '$scope') || Db(b.parentNode || b, [
        '$isolateScope',
        '$scope'
      ]);
    },
    isolateScope: function (b) {
      return B.data(b, '$isolateScope') || B.data(b, '$isolateScopeNoTemplate');
    },
    controller: Ic,
    injector: function (b) {
      return Db(b, '$injector');
    },
    removeAttr: function (b, a) {
      b.removeAttribute(a);
    },
    hasClass: Ab,
    css: function (b, a, c) {
      a = cb(a);
      if (y(c))
        b.style[a] = c;
      else
        return b.style[a];
    },
    attr: function (b, a, c) {
      var d = Q(a);
      if (Eb[d])
        if (y(c))
          c ? (b[a] = !0, b.setAttribute(a, d)) : (b[a] = !1, b.removeAttribute(d));
        else
          return b[a] || (b.attributes.getNamedItem(a) || C).specified ? d : t;
      else if (y(c))
        b.setAttribute(a, c);
      else if (b.getAttribute)
        return b = b.getAttribute(a, 2), null === b ? t : b;
    },
    prop: function (b, a, c) {
      if (y(c))
        b[a] = c;
      else
        return b[a];
    },
    text: function () {
      function b(a, b) {
        if (D(b)) {
          var d = a.nodeType;
          return d === na || d === pb ? a.textContent : '';
        }
        a.textContent = b;
      }
      b.$dv = '';
      return b;
    }(),
    val: function (b, a) {
      if (D(a)) {
        if (b.multiple && 'select' === ua(b)) {
          var c = [];
          s(b.options, function (a) {
            a.selected && c.push(a.value || a.text);
          });
          return 0 === c.length ? null : c;
        }
        return b.value;
      }
      b.value = a;
    },
    html: function (b, a) {
      if (D(a))
        return b.innerHTML;
      wb(b, !0);
      b.innerHTML = a;
    },
    empty: Jc
  }, function (b, a) {
    R.prototype[a] = function (a, d) {
      var e, f, g = this.length;
      if (b !== Jc && (2 == b.length && b !== Ab && b !== Ic ? a : d) === t) {
        if (H(a)) {
          for (e = 0; e < g; e++)
            if (b === Ub)
              b(this[e], a);
            else
              for (f in a)
                b(this[e], f, a[f]);
          return this;
        }
        e = b.$dv;
        g = e === t ? Math.min(g, 1) : g;
        for (f = 0; f < g; f++) {
          var h = b(this[f], a, d);
          e = e ? e + h : h;
        }
        return e;
      }
      for (e = 0; e < g; e++)
        b(this[e], a, d);
      return this;
    };
  });
  s({
    removeData: xb,
    on: function a(c, d, e, f) {
      if (y(f))
        throw Sb('onargs');
      if (Ec(c)) {
        var g = yb(c, !0);
        f = g.events;
        var h = g.handle;
        h || (h = g.handle = lf(c, f));
        for (var g = 0 <= d.indexOf(' ') ? d.split(' ') : [d], l = g.length; l--;) {
          d = g[l];
          var k = f[d];
          k || (f[d] = [], 'mouseenter' === d || 'mouseleave' === d ? a(c, Qf[d], function (a) {
            var c = a.relatedTarget;
            c && (c === this || this.contains(c)) || h(a, d);
          }) : '$destroy' !== d && c.addEventListener(d, h, !1), k = f[d]);
          k.push(e);
        }
      }
    },
    off: Hc,
    one: function (a, c, d) {
      a = B(a);
      a.on(c, function f() {
        a.off(c, d);
        a.off(c, f);
      });
      a.on(c, d);
    },
    replaceWith: function (a, c) {
      var d, e = a.parentNode;
      wb(a);
      s(new R(c), function (c) {
        d ? e.insertBefore(c, d.nextSibling) : e.replaceChild(c, a);
        d = c;
      });
    },
    children: function (a) {
      var c = [];
      s(a.childNodes, function (a) {
        a.nodeType === na && c.push(a);
      });
      return c;
    },
    contents: function (a) {
      return a.contentDocument || a.childNodes || [];
    },
    append: function (a, c) {
      var d = a.nodeType;
      if (d === na || 11 === d) {
        c = new R(c);
        for (var d = 0, e = c.length; d < e; d++)
          a.appendChild(c[d]);
      }
    },
    prepend: function (a, c) {
      if (a.nodeType === na) {
        var d = a.firstChild;
        s(new R(c), function (c) {
          a.insertBefore(c, d);
        });
      }
    },
    wrap: function (a, c) {
      c = B(c).eq(0).clone()[0];
      var d = a.parentNode;
      d && d.replaceChild(c, a);
      c.appendChild(a);
    },
    remove: Kc,
    detach: function (a) {
      Kc(a, !0);
    },
    after: function (a, c) {
      var d = a, e = a.parentNode;
      c = new R(c);
      for (var f = 0, g = c.length; f < g; f++) {
        var h = c[f];
        e.insertBefore(h, d.nextSibling);
        d = h;
      }
    },
    addClass: Cb,
    removeClass: Bb,
    toggleClass: function (a, c, d) {
      c && s(c.split(' '), function (c) {
        var f = d;
        D(f) && (f = !Ab(a, c));
        (f ? Cb : Bb)(a, c);
      });
    },
    parent: function (a) {
      return (a = a.parentNode) && 11 !== a.nodeType ? a : null;
    },
    next: function (a) {
      return a.nextElementSibling;
    },
    find: function (a, c) {
      return a.getElementsByTagName ? a.getElementsByTagName(c) : [];
    },
    clone: Tb,
    triggerHandler: function (a, c, d) {
      var e, f, g = c.type || c, h = yb(a);
      if (h = (h = h && h.events) && h[g])
        e = {
          preventDefault: function () {
            this.defaultPrevented = !0;
          },
          isDefaultPrevented: function () {
            return !0 === this.defaultPrevented;
          },
          stopImmediatePropagation: function () {
            this.immediatePropagationStopped = !0;
          },
          isImmediatePropagationStopped: function () {
            return !0 === this.immediatePropagationStopped;
          },
          stopPropagation: C,
          type: g,
          target: a
        }, c.type && (e = z(e, c)), c = qa(h), f = d ? [e].concat(d) : [e], s(c, function (c) {
          e.isImmediatePropagationStopped() || c.apply(a, f);
        });
    }
  }, function (a, c) {
    R.prototype[c] = function (c, e, f) {
      for (var g, h = 0, l = this.length; h < l; h++)
        D(g) ? (g = a(this[h], c, e, f), y(g) && (g = B(g))) : Gc(g, a(this[h], c, e, f));
      return y(g) ? g : this;
    };
    R.prototype.bind = R.prototype.on;
    R.prototype.unbind = R.prototype.off;
  });
  db.prototype = {
    put: function (a, c) {
      this[Na(a, this.nextUid)] = c;
    },
    get: function (a) {
      return this[Na(a, this.nextUid)];
    },
    remove: function (a) {
      var c = this[a = Na(a, this.nextUid)];
      delete this[a];
      return c;
    }
  };
  var Pc = /^function\s*[^\(]*\(\s*([^\)]*)\)/m, nf = /,/, of = /^\s*(_?)(\S+?)\1\s*$/, Oc = /((\/\/.*$)|(\/\*[\s\S]*?\*\/))/gm, Ga = T('$injector');
  Ob.$$annotate = Vb;
  var Rf = T('$animate'), Ce = [
      '$provide',
      function (a) {
        this.$$selectors = {};
        this.register = function (c, d) {
          var e = c + '-animation';
          if (c && '.' != c.charAt(0))
            throw Rf('notcsel', c);
          this.$$selectors[c.substr(1)] = e;
          a.factory(e, d);
        };
        this.classNameFilter = function (a) {
          1 === arguments.length && (this.$$classNameFilter = a instanceof RegExp ? a : null);
          return this.$$classNameFilter;
        };
        this.$get = [
          '$$q',
          '$$asyncCallback',
          '$rootScope',
          function (a, d, e) {
            function f(d) {
              var f, g = a.defer();
              g.promise.$$cancelFn = function () {
                f && f();
              };
              e.$$postDigest(function () {
                f = d(function () {
                  g.resolve();
                });
              });
              return g.promise;
            }
            function g(a, c) {
              var d = [], e = [], f = ha();
              s((a.attr('class') || '').split(/\s+/), function (a) {
                f[a] = !0;
              });
              s(c, function (a, c) {
                var g = f[c];
                !1 === a && g ? e.push(c) : !0 !== a || g || d.push(c);
              });
              return 0 < d.length + e.length && [
                d.length ? d : null,
                e.length ? e : null
              ];
            }
            function h(a, c, d) {
              for (var e = 0, f = c.length; e < f; ++e)
                a[c[e]] = d;
            }
            function l() {
              m || (m = a.defer(), d(function () {
                m.resolve();
                m = null;
              }));
              return m.promise;
            }
            function k(a, c) {
              if (ga.isObject(c)) {
                var d = z(c.from || {}, c.to || {});
                a.css(d);
              }
            }
            var m;
            return {
              animate: function (a, c, d) {
                k(a, {
                  from: c,
                  to: d
                });
                return l();
              },
              enter: function (a, c, d, e) {
                k(a, e);
                d ? d.after(a) : c.prepend(a);
                return l();
              },
              leave: function (a, c) {
                a.remove();
                return l();
              },
              move: function (a, c, d, e) {
                return this.enter(a, c, d, e);
              },
              addClass: function (a, c, d) {
                return this.setClass(a, c, [], d);
              },
              $$addClassImmediately: function (a, c, d) {
                a = B(a);
                c = F(c) ? c : x(c) ? c.join(' ') : '';
                s(a, function (a) {
                  Cb(a, c);
                });
                k(a, d);
                return l();
              },
              removeClass: function (a, c, d) {
                return this.setClass(a, [], c, d);
              },
              $$removeClassImmediately: function (a, c, d) {
                a = B(a);
                c = F(c) ? c : x(c) ? c.join(' ') : '';
                s(a, function (a) {
                  Bb(a, c);
                });
                k(a, d);
                return l();
              },
              setClass: function (a, c, d, e) {
                var k = this, l = !1;
                a = B(a);
                var m = a.data('$$animateClasses');
                m ? e && m.options && (m.options = ga.extend(m.options || {}, e)) : (m = {
                  classes: {},
                  options: e
                }, l = !0);
                e = m.classes;
                c = x(c) ? c : c.split(' ');
                d = x(d) ? d : d.split(' ');
                h(e, c, !0);
                h(e, d, !1);
                l && (m.promise = f(function (c) {
                  var d = a.data('$$animateClasses');
                  a.removeData('$$animateClasses');
                  if (d) {
                    var e = g(a, d.classes);
                    e && k.$$setClassImmediately(a, e[0], e[1], d.options);
                  }
                  c();
                }), a.data('$$animateClasses', m));
                return m.promise;
              },
              $$setClassImmediately: function (a, c, d, e) {
                c && this.$$addClassImmediately(a, c);
                d && this.$$removeClassImmediately(a, d);
                k(a, e);
                return l();
              },
              enabled: C,
              cancel: C
            };
          }
        ];
      }
    ], ja = T('$compile');
  wc.$inject = [
    '$provide',
    '$$sanitizeUriProvider'
  ];
  var Rc = /^((?:x|data)[\:\-_])/i, Vc = 'application/json', Zb = { 'Content-Type': Vc + ';charset=utf-8' }, tf = /^\[|^\{(?!\{)/, uf = {
      '[': /]$/,
      '{': /}$/
    }, sf = /^\)\]\}',?\n/, $b = T('$interpolate'), Sf = /^([^\?#]*)(\?([^#]*))?(#(.*))?$/, xf = {
      http: 80,
      https: 443,
      ftp: 21
    }, Fb = T('$location'), Tf = {
      $$html5: !1,
      $$replace: !1,
      absUrl: Gb('$$absUrl'),
      url: function (a) {
        if (D(a))
          return this.$$url;
        var c = Sf.exec(a);
        (c[1] || '' === a) && this.path(decodeURIComponent(c[1]));
        (c[2] || c[1] || '' === a) && this.search(c[3] || '');
        this.hash(c[5] || '');
        return this;
      },
      protocol: Gb('$$protocol'),
      host: Gb('$$host'),
      port: Gb('$$port'),
      path: dd('$$path', function (a) {
        a = null !== a ? a.toString() : '';
        return '/' == a.charAt(0) ? a : '/' + a;
      }),
      search: function (a, c) {
        switch (arguments.length) {
        case 0:
          return this.$$search;
        case 1:
          if (F(a) || V(a))
            a = a.toString(), this.$$search = qc(a);
          else if (H(a))
            a = Ea(a, {}), s(a, function (c, e) {
              null == c && delete a[e];
            }), this.$$search = a;
          else
            throw Fb('isrcharg');
          break;
        default:
          D(c) || null === c ? delete this.$$search[a] : this.$$search[a] = c;
        }
        this.$$compose();
        return this;
      },
      hash: dd('$$hash', function (a) {
        return null !== a ? a.toString() : '';
      }),
      replace: function () {
        this.$$replace = !0;
        return this;
      }
    };
  s([
    cd,
    dc,
    cc
  ], function (a) {
    a.prototype = Object.create(Tf);
    a.prototype.state = function (c) {
      if (!arguments.length)
        return this.$$state;
      if (a !== cc || !this.$$html5)
        throw Fb('nostate');
      this.$$state = D(c) ? null : c;
      return this;
    };
  });
  var la = T('$parse'), Uf = Function.prototype.call, Vf = Function.prototype.apply, Wf = Function.prototype.bind, lb = ha();
  s({
    'null': function () {
      return null;
    },
    'true': function () {
      return !0;
    },
    'false': function () {
      return !1;
    },
    undefined: function () {
    }
  }, function (a, c) {
    a.constant = a.literal = a.sharedGetter = !0;
    lb[c] = a;
  });
  lb['this'] = function (a) {
    return a;
  };
  lb['this'].sharedGetter = !0;
  var mb = z(ha(), {
      '+': function (a, c, d, e) {
        d = d(a, c);
        e = e(a, c);
        return y(d) ? y(e) ? d + e : d : y(e) ? e : t;
      },
      '-': function (a, c, d, e) {
        d = d(a, c);
        e = e(a, c);
        return (y(d) ? d : 0) - (y(e) ? e : 0);
      },
      '*': function (a, c, d, e) {
        return d(a, c) * e(a, c);
      },
      '/': function (a, c, d, e) {
        return d(a, c) / e(a, c);
      },
      '%': function (a, c, d, e) {
        return d(a, c) % e(a, c);
      },
      '===': function (a, c, d, e) {
        return d(a, c) === e(a, c);
      },
      '!==': function (a, c, d, e) {
        return d(a, c) !== e(a, c);
      },
      '==': function (a, c, d, e) {
        return d(a, c) == e(a, c);
      },
      '!=': function (a, c, d, e) {
        return d(a, c) != e(a, c);
      },
      '<': function (a, c, d, e) {
        return d(a, c) < e(a, c);
      },
      '>': function (a, c, d, e) {
        return d(a, c) > e(a, c);
      },
      '<=': function (a, c, d, e) {
        return d(a, c) <= e(a, c);
      },
      '>=': function (a, c, d, e) {
        return d(a, c) >= e(a, c);
      },
      '&&': function (a, c, d, e) {
        return d(a, c) && e(a, c);
      },
      '||': function (a, c, d, e) {
        return d(a, c) || e(a, c);
      },
      '!': function (a, c, d) {
        return !d(a, c);
      },
      '=': !0,
      '|': !0
    }), Xf = {
      n: '\n',
      f: '\f',
      r: '\r',
      t: '\t',
      v: '\x0B',
      '\'': '\'',
      '"': '"'
    }, gc = function (a) {
      this.options = a;
    };
  gc.prototype = {
    constructor: gc,
    lex: function (a) {
      this.text = a;
      this.index = 0;
      for (this.tokens = []; this.index < this.text.length;)
        if (a = this.text.charAt(this.index), '"' === a || '\'' === a)
          this.readString(a);
        else if (this.isNumber(a) || '.' === a && this.isNumber(this.peek()))
          this.readNumber();
        else if (this.isIdent(a))
          this.readIdent();
        else if (this.is(a, '(){}[].,;:?'))
          this.tokens.push({
            index: this.index,
            text: a
          }), this.index++;
        else if (this.isWhitespace(a))
          this.index++;
        else {
          var c = a + this.peek(), d = c + this.peek(2), e = mb[c], f = mb[d];
          mb[a] || e || f ? (a = f ? d : e ? c : a, this.tokens.push({
            index: this.index,
            text: a,
            operator: !0
          }), this.index += a.length) : this.throwError('Unexpected next character ', this.index, this.index + 1);
        }
      return this.tokens;
    },
    is: function (a, c) {
      return -1 !== c.indexOf(a);
    },
    peek: function (a) {
      a = a || 1;
      return this.index + a < this.text.length ? this.text.charAt(this.index + a) : !1;
    },
    isNumber: function (a) {
      return '0' <= a && '9' >= a && 'string' === typeof a;
    },
    isWhitespace: function (a) {
      return ' ' === a || '\r' === a || '\t' === a || '\n' === a || '\x0B' === a || '\xa0' === a;
    },
    isIdent: function (a) {
      return 'a' <= a && 'z' >= a || 'A' <= a && 'Z' >= a || '_' === a || '$' === a;
    },
    isExpOperator: function (a) {
      return '-' === a || '+' === a || this.isNumber(a);
    },
    throwError: function (a, c, d) {
      d = d || this.index;
      c = y(c) ? 's ' + c + '-' + this.index + ' [' + this.text.substring(c, d) + ']' : ' ' + d;
      throw la('lexerr', a, c, this.text);
    },
    readNumber: function () {
      for (var a = '', c = this.index; this.index < this.text.length;) {
        var d = Q(this.text.charAt(this.index));
        if ('.' == d || this.isNumber(d))
          a += d;
        else {
          var e = this.peek();
          if ('e' == d && this.isExpOperator(e))
            a += d;
          else if (this.isExpOperator(d) && e && this.isNumber(e) && 'e' == a.charAt(a.length - 1))
            a += d;
          else if (!this.isExpOperator(d) || e && this.isNumber(e) || 'e' != a.charAt(a.length - 1))
            break;
          else
            this.throwError('Invalid exponent');
        }
        this.index++;
      }
      this.tokens.push({
        index: c,
        text: a,
        constant: !0,
        value: Number(a)
      });
    },
    readIdent: function () {
      for (var a = this.index; this.index < this.text.length;) {
        var c = this.text.charAt(this.index);
        if (!this.isIdent(c) && !this.isNumber(c))
          break;
        this.index++;
      }
      this.tokens.push({
        index: a,
        text: this.text.slice(a, this.index),
        identifier: !0
      });
    },
    readString: function (a) {
      var c = this.index;
      this.index++;
      for (var d = '', e = a, f = !1; this.index < this.text.length;) {
        var g = this.text.charAt(this.index), e = e + g;
        if (f)
          'u' === g ? (f = this.text.substring(this.index + 1, this.index + 5), f.match(/[\da-f]{4}/i) || this.throwError('Invalid unicode escape [\\u' + f + ']'), this.index += 4, d += String.fromCharCode(parseInt(f, 16))) : d += Xf[g] || g, f = !1;
        else if ('\\' === g)
          f = !0;
        else {
          if (g === a) {
            this.index++;
            this.tokens.push({
              index: c,
              text: e,
              constant: !0,
              value: d
            });
            return;
          }
          d += g;
        }
        this.index++;
      }
      this.throwError('Unterminated quote', c);
    }
  };
  var hb = function (a, c, d) {
    this.lexer = a;
    this.$filter = c;
    this.options = d;
  };
  hb.ZERO = z(function () {
    return 0;
  }, {
    sharedGetter: !0,
    constant: !0
  });
  hb.prototype = {
    constructor: hb,
    parse: function (a) {
      this.text = a;
      this.tokens = this.lexer.lex(a);
      a = this.statements();
      0 !== this.tokens.length && this.throwError('is an unexpected token', this.tokens[0]);
      a.literal = !!a.literal;
      a.constant = !!a.constant;
      return a;
    },
    primary: function () {
      var a;
      this.expect('(') ? (a = this.filterChain(), this.consume(')')) : this.expect('[') ? a = this.arrayDeclaration() : this.expect('{') ? a = this.object() : this.peek().identifier && this.peek().text in lb ? a = lb[this.consume().text] : this.peek().identifier ? a = this.identifier() : this.peek().constant ? a = this.constant() : this.throwError('not a primary expression', this.peek());
      for (var c, d; c = this.expect('(', '[', '.');)
        '(' === c.text ? (a = this.functionCall(a, d), d = null) : '[' === c.text ? (d = a, a = this.objectIndex(a)) : '.' === c.text ? (d = a, a = this.fieldAccess(a)) : this.throwError('IMPOSSIBLE');
      return a;
    },
    throwError: function (a, c) {
      throw la('syntax', c.text, a, c.index + 1, this.text, this.text.substring(c.index));
    },
    peekToken: function () {
      if (0 === this.tokens.length)
        throw la('ueoe', this.text);
      return this.tokens[0];
    },
    peek: function (a, c, d, e) {
      return this.peekAhead(0, a, c, d, e);
    },
    peekAhead: function (a, c, d, e, f) {
      if (this.tokens.length > a) {
        a = this.tokens[a];
        var g = a.text;
        if (g === c || g === d || g === e || g === f || !(c || d || e || f))
          return a;
      }
      return !1;
    },
    expect: function (a, c, d, e) {
      return (a = this.peek(a, c, d, e)) ? (this.tokens.shift(), a) : !1;
    },
    consume: function (a) {
      if (0 === this.tokens.length)
        throw la('ueoe', this.text);
      var c = this.expect(a);
      c || this.throwError('is unexpected, expecting [' + a + ']', this.peek());
      return c;
    },
    unaryFn: function (a, c) {
      var d = mb[a];
      return z(function (a, f) {
        return d(a, f, c);
      }, {
        constant: c.constant,
        inputs: [c]
      });
    },
    binaryFn: function (a, c, d, e) {
      var f = mb[c];
      return z(function (c, e) {
        return f(c, e, a, d);
      }, {
        constant: a.constant && d.constant,
        inputs: !e && [
          a,
          d
        ]
      });
    },
    identifier: function () {
      for (var a = this.consume().text; this.peek('.') && this.peekAhead(1).identifier && !this.peekAhead(2, '(');)
        a += this.consume().text + this.consume().text;
      return zf(a, this.options, this.text);
    },
    constant: function () {
      var a = this.consume().value;
      return z(function () {
        return a;
      }, {
        constant: !0,
        literal: !0
      });
    },
    statements: function () {
      for (var a = [];;)
        if (0 < this.tokens.length && !this.peek('}', ')', ';', ']') && a.push(this.filterChain()), !this.expect(';'))
          return 1 === a.length ? a[0] : function (c, d) {
            for (var e, f = 0, g = a.length; f < g; f++)
              e = a[f](c, d);
            return e;
          };
    },
    filterChain: function () {
      for (var a = this.expression(); this.expect('|');)
        a = this.filter(a);
      return a;
    },
    filter: function (a) {
      var c = this.$filter(this.consume().text), d, e;
      if (this.peek(':'))
        for (d = [], e = []; this.expect(':');)
          d.push(this.expression());
      var f = [a].concat(d || []);
      return z(function (f, h) {
        var l = a(f, h);
        if (e) {
          e[0] = l;
          for (l = d.length; l--;)
            e[l + 1] = d[l](f, h);
          return c.apply(t, e);
        }
        return c(l);
      }, {
        constant: !c.$stateful && f.every(ec),
        inputs: !c.$stateful && f
      });
    },
    expression: function () {
      return this.assignment();
    },
    assignment: function () {
      var a = this.ternary(), c, d;
      return (d = this.expect('=')) ? (a.assign || this.throwError('implies assignment but [' + this.text.substring(0, d.index) + '] can not be assigned to', d), c = this.ternary(), z(function (d, f) {
        return a.assign(d, c(d, f), f);
      }, {
        inputs: [
          a,
          c
        ]
      })) : a;
    },
    ternary: function () {
      var a = this.logicalOR(), c;
      if (this.expect('?') && (c = this.assignment(), this.consume(':'))) {
        var d = this.assignment();
        return z(function (e, f) {
          return a(e, f) ? c(e, f) : d(e, f);
        }, { constant: a.constant && c.constant && d.constant });
      }
      return a;
    },
    logicalOR: function () {
      for (var a = this.logicalAND(), c; c = this.expect('||');)
        a = this.binaryFn(a, c.text, this.logicalAND(), !0);
      return a;
    },
    logicalAND: function () {
      for (var a = this.equality(), c; c = this.expect('&&');)
        a = this.binaryFn(a, c.text, this.equality(), !0);
      return a;
    },
    equality: function () {
      for (var a = this.relational(), c; c = this.expect('==', '!=', '===', '!==');)
        a = this.binaryFn(a, c.text, this.relational());
      return a;
    },
    relational: function () {
      for (var a = this.additive(), c; c = this.expect('<', '>', '<=', '>=');)
        a = this.binaryFn(a, c.text, this.additive());
      return a;
    },
    additive: function () {
      for (var a = this.multiplicative(), c; c = this.expect('+', '-');)
        a = this.binaryFn(a, c.text, this.multiplicative());
      return a;
    },
    multiplicative: function () {
      for (var a = this.unary(), c; c = this.expect('*', '/', '%');)
        a = this.binaryFn(a, c.text, this.unary());
      return a;
    },
    unary: function () {
      var a;
      return this.expect('+') ? this.primary() : (a = this.expect('-')) ? this.binaryFn(hb.ZERO, a.text, this.unary()) : (a = this.expect('!')) ? this.unaryFn(a.text, this.unary()) : this.primary();
    },
    fieldAccess: function (a) {
      var c = this.identifier();
      return z(function (d, e, f) {
        d = f || a(d, e);
        return null == d ? t : c(d);
      }, {
        assign: function (d, e, f) {
          (f = a(d, f)) || a.assign(d, f = {});
          return c.assign(f, e);
        }
      });
    },
    objectIndex: function (a) {
      var c = this.text, d = this.expression();
      this.consume(']');
      return z(function (e, f) {
        var g = a(e, f), h = d(e, f);
        sa(h, c);
        return g ? ta(g[h], c) : t;
      }, {
        assign: function (e, f, g) {
          var h = sa(d(e, g), c);
          (g = ta(a(e, g), c)) || a.assign(e, g = {});
          return g[h] = f;
        }
      });
    },
    functionCall: function (a, c) {
      var d = [];
      if (')' !== this.peekToken().text) {
        do
          d.push(this.expression());
        while (this.expect(','));
      }
      this.consume(')');
      var e = this.text, f = d.length ? [] : null;
      return function (g, h) {
        var l = c ? c(g, h) : y(c) ? t : g, k = a(g, h, l) || C;
        if (f)
          for (var m = d.length; m--;)
            f[m] = ta(d[m](g, h), e);
        ta(l, e);
        if (k) {
          if (k.constructor === k)
            throw la('isecfn', e);
          if (k === Uf || k === Vf || k === Wf)
            throw la('isecff', e);
        }
        l = k.apply ? k.apply(l, f) : k(f[0], f[1], f[2], f[3], f[4]);
        return ta(l, e);
      };
    },
    arrayDeclaration: function () {
      var a = [];
      if (']' !== this.peekToken().text) {
        do {
          if (this.peek(']'))
            break;
          a.push(this.expression());
        } while (this.expect(','));
      }
      this.consume(']');
      return z(function (c, d) {
        for (var e = [], f = 0, g = a.length; f < g; f++)
          e.push(a[f](c, d));
        return e;
      }, {
        literal: !0,
        constant: a.every(ec),
        inputs: a
      });
    },
    object: function () {
      var a = [], c = [];
      if ('}' !== this.peekToken().text) {
        do {
          if (this.peek('}'))
            break;
          var d = this.consume();
          d.constant ? a.push(d.value) : d.identifier ? a.push(d.text) : this.throwError('invalid key', d);
          this.consume(':');
          c.push(this.expression());
        } while (this.expect(','));
      }
      this.consume('}');
      return z(function (d, f) {
        for (var g = {}, h = 0, l = c.length; h < l; h++)
          g[a[h]] = c[h](d, f);
        return g;
      }, {
        literal: !0,
        constant: c.every(ec),
        inputs: c
      });
    }
  };
  var Bf = ha(), Af = ha(), Cf = Object.prototype.valueOf, Ca = T('$sce'), ma = {
      HTML: 'html',
      CSS: 'css',
      URL: 'url',
      RESOURCE_URL: 'resourceUrl',
      JS: 'js'
    }, ja = T('$compile'), Z = Y.createElement('a'), id = Ba(M.location.href);
  Dc.$inject = ['$provide'];
  jd.$inject = ['$locale'];
  ld.$inject = ['$locale'];
  var od = '.', Mf = {
      yyyy: $('FullYear', 4),
      yy: $('FullYear', 2, 0, !0),
      y: $('FullYear', 1),
      MMMM: Ib('Month'),
      MMM: Ib('Month', !0),
      MM: $('Month', 2, 1),
      M: $('Month', 1, 1),
      dd: $('Date', 2),
      d: $('Date', 1),
      HH: $('Hours', 2),
      H: $('Hours', 1),
      hh: $('Hours', 2, -12),
      h: $('Hours', 1, -12),
      mm: $('Minutes', 2),
      m: $('Minutes', 1),
      ss: $('Seconds', 2),
      s: $('Seconds', 1),
      sss: $('Milliseconds', 3),
      EEEE: Ib('Day'),
      EEE: Ib('Day', !0),
      a: function (a, c) {
        return 12 > a.getHours() ? c.AMPMS[0] : c.AMPMS[1];
      },
      Z: function (a) {
        a = -1 * a.getTimezoneOffset();
        return a = (0 <= a ? '+' : '') + (Hb(Math[0 < a ? 'floor' : 'ceil'](a / 60), 2) + Hb(Math.abs(a % 60), 2));
      },
      ww: qd(2),
      w: qd(1)
    }, Lf = /((?:[^yMdHhmsaZEw']+)|(?:'(?:[^']|'')*')|(?:E+|y+|M+|d+|H+|h+|m+|s+|a|Z|w+))(.*)/, Kf = /^\-?\d+$/;
  kd.$inject = ['$locale'];
  var Hf = da(Q), If = da(ub);
  md.$inject = ['$parse'];
  var Td = da({
      restrict: 'E',
      compile: function (a, c) {
        if (!c.href && !c.xlinkHref && !c.name)
          return function (a, c) {
            var f = '[object SVGAnimatedString]' === Da.call(c.prop('href')) ? 'xlink:href' : 'href';
            c.on('click', function (a) {
              c.attr(f) || a.preventDefault();
            });
          };
      }
    }), vb = {};
  s(Eb, function (a, c) {
    if ('multiple' != a) {
      var d = ya('ng-' + c);
      vb[d] = function () {
        return {
          restrict: 'A',
          priority: 100,
          link: function (a, f, g) {
            a.$watch(g[d], function (a) {
              g.$set(c, !!a);
            });
          }
        };
      };
    }
  });
  s(Nc, function (a, c) {
    vb[c] = function () {
      return {
        priority: 100,
        link: function (a, e, f) {
          if ('ngPattern' === c && '/' == f.ngPattern.charAt(0) && (e = f.ngPattern.match(Of))) {
            f.$set('ngPattern', new RegExp(e[1], e[2]));
            return;
          }
          a.$watch(f[c], function (a) {
            f.$set(c, a);
          });
        }
      };
    };
  });
  s([
    'src',
    'srcset',
    'href'
  ], function (a) {
    var c = ya('ng-' + a);
    vb[c] = function () {
      return {
        priority: 99,
        link: function (d, e, f) {
          var g = a, h = a;
          'href' === a && '[object SVGAnimatedString]' === Da.call(e.prop('href')) && (h = 'xlinkHref', f.$attr[h] = 'xlink:href', g = null);
          f.$observe(c, function (c) {
            c ? (f.$set(h, c), Ra && g && e.prop(g, f[h])) : 'href' === a && f.$set(h, null);
          });
        }
      };
    };
  });
  var Jb = {
      $addControl: C,
      $$renameControl: function (a, c) {
        a.$name = c;
      },
      $removeControl: C,
      $setValidity: C,
      $setDirty: C,
      $setPristine: C,
      $setSubmitted: C
    };
  rd.$inject = [
    '$element',
    '$attrs',
    '$scope',
    '$animate',
    '$interpolate'
  ];
  var yd = function (a) {
      return [
        '$timeout',
        function (c) {
          return {
            name: 'form',
            restrict: a ? 'EAC' : 'E',
            controller: rd,
            compile: function (a) {
              a.addClass(Sa).addClass(kb);
              return {
                pre: function (a, d, g, h) {
                  if (!('action' in g)) {
                    var l = function (c) {
                      a.$apply(function () {
                        h.$commitViewValue();
                        h.$setSubmitted();
                      });
                      c.preventDefault();
                    };
                    d[0].addEventListener('submit', l, !1);
                    d.on('$destroy', function () {
                      c(function () {
                        d[0].removeEventListener('submit', l, !1);
                      }, 0, !1);
                    });
                  }
                  var k = h.$$parentForm, m = h.$name;
                  m && (gb(a, m, h, m), g.$observe(g.name ? 'name' : 'ngForm', function (c) {
                    m !== c && (gb(a, m, t, m), m = c, gb(a, m, h, m), k.$$renameControl(h, m));
                  }));
                  d.on('$destroy', function () {
                    k.$removeControl(h);
                    m && gb(a, m, t, m);
                    z(h, Jb);
                  });
                }
              };
            }
          };
        }
      ];
    }, Ud = yd(), ge = yd(!0), Nf = /\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d\.\d+([+-][0-2]\d:[0-5]\d|Z)/, Yf = /^(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?$/, Zf = /^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$/i, $f = /^\s*(\-|\+)?(\d+|(\d*(\.\d*)))\s*$/, zd = /^(\d{4})-(\d{2})-(\d{2})$/, Ad = /^(\d{4})-(\d\d)-(\d\d)T(\d\d):(\d\d)(?::(\d\d)(\.\d{1,3})?)?$/, jc = /^(\d{4})-W(\d\d)$/, Bd = /^(\d{4})-(\d\d)$/, Cd = /^(\d\d):(\d\d)(?::(\d\d)(\.\d{1,3})?)?$/, ag = /(\s+|^)default(\s+|$)/, Mb = new T('ngModel'), Dd = {
      text: function (a, c, d, e, f, g) {
        ib(a, c, d, e, f, g);
        hc(e);
      },
      date: jb('date', zd, Lb(zd, [
        'yyyy',
        'MM',
        'dd'
      ]), 'yyyy-MM-dd'),
      'datetime-local': jb('datetimelocal', Ad, Lb(Ad, 'yyyy MM dd HH mm ss sss'.split(' ')), 'yyyy-MM-ddTHH:mm:ss.sss'),
      time: jb('time', Cd, Lb(Cd, [
        'HH',
        'mm',
        'ss',
        'sss'
      ]), 'HH:mm:ss.sss'),
      week: jb('week', jc, function (a, c) {
        if (pa(a))
          return a;
        if (F(a)) {
          jc.lastIndex = 0;
          var d = jc.exec(a);
          if (d) {
            var e = +d[1], f = +d[2], g = d = 0, h = 0, l = 0, k = pd(e), f = 7 * (f - 1);
            c && (d = c.getHours(), g = c.getMinutes(), h = c.getSeconds(), l = c.getMilliseconds());
            return new Date(e, 0, k.getDate() + f, d, g, h, l);
          }
        }
        return NaN;
      }, 'yyyy-Www'),
      month: jb('month', Bd, Lb(Bd, [
        'yyyy',
        'MM'
      ]), 'yyyy-MM'),
      number: function (a, c, d, e, f, g) {
        td(a, c, d, e);
        ib(a, c, d, e, f, g);
        e.$$parserName = 'number';
        e.$parsers.push(function (a) {
          return e.$isEmpty(a) ? null : $f.test(a) ? parseFloat(a) : t;
        });
        e.$formatters.push(function (a) {
          if (!e.$isEmpty(a)) {
            if (!V(a))
              throw Mb('numfmt', a);
            a = a.toString();
          }
          return a;
        });
        if (d.min || d.ngMin) {
          var h;
          e.$validators.min = function (a) {
            return e.$isEmpty(a) || D(h) || a >= h;
          };
          d.$observe('min', function (a) {
            y(a) && !V(a) && (a = parseFloat(a, 10));
            h = V(a) && !isNaN(a) ? a : t;
            e.$validate();
          });
        }
        if (d.max || d.ngMax) {
          var l;
          e.$validators.max = function (a) {
            return e.$isEmpty(a) || D(l) || a <= l;
          };
          d.$observe('max', function (a) {
            y(a) && !V(a) && (a = parseFloat(a, 10));
            l = V(a) && !isNaN(a) ? a : t;
            e.$validate();
          });
        }
      },
      url: function (a, c, d, e, f, g) {
        ib(a, c, d, e, f, g);
        hc(e);
        e.$$parserName = 'url';
        e.$validators.url = function (a, c) {
          var d = a || c;
          return e.$isEmpty(d) || Yf.test(d);
        };
      },
      email: function (a, c, d, e, f, g) {
        ib(a, c, d, e, f, g);
        hc(e);
        e.$$parserName = 'email';
        e.$validators.email = function (a, c) {
          var d = a || c;
          return e.$isEmpty(d) || Zf.test(d);
        };
      },
      radio: function (a, c, d, e) {
        D(d.name) && c.attr('name', ++nb);
        c.on('click', function (a) {
          c[0].checked && e.$setViewValue(d.value, a && a.type);
        });
        e.$render = function () {
          c[0].checked = d.value == e.$viewValue;
        };
        d.$observe('value', e.$render);
      },
      checkbox: function (a, c, d, e, f, g, h, l) {
        var k = ud(l, a, 'ngTrueValue', d.ngTrueValue, !0), m = ud(l, a, 'ngFalseValue', d.ngFalseValue, !1);
        c.on('click', function (a) {
          e.$setViewValue(c[0].checked, a && a.type);
        });
        e.$render = function () {
          c[0].checked = e.$viewValue;
        };
        e.$isEmpty = function (a) {
          return !1 === a;
        };
        e.$formatters.push(function (a) {
          return fa(a, k);
        });
        e.$parsers.push(function (a) {
          return a ? k : m;
        });
      },
      hidden: C,
      button: C,
      submit: C,
      reset: C,
      file: C
    }, xc = [
      '$browser',
      '$sniffer',
      '$filter',
      '$parse',
      function (a, c, d, e) {
        return {
          restrict: 'E',
          require: ['?ngModel'],
          link: {
            pre: function (f, g, h, l) {
              l[0] && (Dd[Q(h.type)] || Dd.text)(f, g, h, l[0], c, a, d, e);
            }
          }
        };
      }
    ], kb = 'ng-valid', vd = 'ng-invalid', Sa = 'ng-pristine', Kb = 'ng-dirty', xd = 'ng-pending', bg = [
      '$scope',
      '$exceptionHandler',
      '$attrs',
      '$element',
      '$parse',
      '$animate',
      '$timeout',
      '$rootScope',
      '$q',
      '$interpolate',
      function (a, c, d, e, f, g, h, l, k, m) {
        this.$modelValue = this.$viewValue = Number.NaN;
        this.$$rawModelValue = t;
        this.$validators = {};
        this.$asyncValidators = {};
        this.$parsers = [];
        this.$formatters = [];
        this.$viewChangeListeners = [];
        this.$untouched = !0;
        this.$touched = !1;
        this.$pristine = !0;
        this.$dirty = !1;
        this.$valid = !0;
        this.$invalid = !1;
        this.$error = {};
        this.$$success = {};
        this.$pending = t;
        this.$name = m(d.name || '', !1)(a);
        var p = f(d.ngModel), q = p.assign, u = p, r = q, O = null, n = this;
        this.$$setOptions = function (a) {
          if ((n.$options = a) && a.getterSetter) {
            var c = f(d.ngModel + '()'), g = f(d.ngModel + '($$$p)');
            u = function (a) {
              var d = p(a);
              G(d) && (d = c(a));
              return d;
            };
            r = function (a, c) {
              G(p(a)) ? g(a, { $$$p: n.$modelValue }) : q(a, n.$modelValue);
            };
          } else if (!p.assign)
            throw Mb('nonassign', d.ngModel, va(e));
        };
        this.$render = C;
        this.$isEmpty = function (a) {
          return D(a) || '' === a || null === a || a !== a;
        };
        var v = e.inheritedData('$formController') || Jb, w = 0;
        sd({
          ctrl: this,
          $element: e,
          set: function (a, c) {
            a[c] = !0;
          },
          unset: function (a, c) {
            delete a[c];
          },
          parentForm: v,
          $animate: g
        });
        this.$setPristine = function () {
          n.$dirty = !1;
          n.$pristine = !0;
          g.removeClass(e, Kb);
          g.addClass(e, Sa);
        };
        this.$setDirty = function () {
          n.$dirty = !0;
          n.$pristine = !1;
          g.removeClass(e, Sa);
          g.addClass(e, Kb);
          v.$setDirty();
        };
        this.$setUntouched = function () {
          n.$touched = !1;
          n.$untouched = !0;
          g.setClass(e, 'ng-untouched', 'ng-touched');
        };
        this.$setTouched = function () {
          n.$touched = !0;
          n.$untouched = !1;
          g.setClass(e, 'ng-touched', 'ng-untouched');
        };
        this.$rollbackViewValue = function () {
          h.cancel(O);
          n.$viewValue = n.$$lastCommittedViewValue;
          n.$render();
        };
        this.$validate = function () {
          if (!V(n.$modelValue) || !isNaN(n.$modelValue)) {
            var a = n.$$rawModelValue, c = n.$valid, d = n.$modelValue, e = n.$options && n.$options.allowInvalid;
            n.$$runValidators(n.$error[n.$$parserName || 'parse'] ? !1 : t, a, n.$$lastCommittedViewValue, function (f) {
              e || c === f || (n.$modelValue = f ? a : t, n.$modelValue !== d && n.$$writeModelToScope());
            });
          }
        };
        this.$$runValidators = function (a, c, d, e) {
          function f() {
            var a = !0;
            s(n.$validators, function (e, f) {
              var g = e(c, d);
              a = a && g;
              h(f, g);
            });
            return a ? !0 : (s(n.$asyncValidators, function (a, c) {
              h(c, null);
            }), !1);
          }
          function g() {
            var a = [], e = !0;
            s(n.$asyncValidators, function (f, g) {
              var l = f(c, d);
              if (!l || !G(l.then))
                throw Mb('$asyncValidators', l);
              h(g, t);
              a.push(l.then(function () {
                h(g, !0);
              }, function (a) {
                e = !1;
                h(g, !1);
              }));
            });
            a.length ? k.all(a).then(function () {
              l(e);
            }, C) : l(!0);
          }
          function h(a, c) {
            m === w && n.$setValidity(a, c);
          }
          function l(a) {
            m === w && e(a);
          }
          w++;
          var m = w;
          (function (a) {
            var c = n.$$parserName || 'parse';
            if (a === t)
              h(c, null);
            else if (h(c, a), !a)
              return s(n.$validators, function (a, c) {
                h(c, null);
              }), s(n.$asyncValidators, function (a, c) {
                h(c, null);
              }), !1;
            return !0;
          }(a) ? f() ? g() : l(!1) : l(!1));
        };
        this.$commitViewValue = function () {
          var a = n.$viewValue;
          h.cancel(O);
          if (n.$$lastCommittedViewValue !== a || '' === a && n.$$hasNativeValidators)
            n.$$lastCommittedViewValue = a, n.$pristine && this.$setDirty(), this.$$parseAndValidate();
        };
        this.$$parseAndValidate = function () {
          var c = n.$$lastCommittedViewValue, d = D(c) ? t : !0;
          if (d)
            for (var e = 0; e < n.$parsers.length; e++)
              if (c = n.$parsers[e](c), D(c)) {
                d = !1;
                break;
              }
          V(n.$modelValue) && isNaN(n.$modelValue) && (n.$modelValue = u(a));
          var f = n.$modelValue, g = n.$options && n.$options.allowInvalid;
          n.$$rawModelValue = c;
          g && (n.$modelValue = c, n.$modelValue !== f && n.$$writeModelToScope());
          n.$$runValidators(d, c, n.$$lastCommittedViewValue, function (a) {
            g || (n.$modelValue = a ? c : t, n.$modelValue !== f && n.$$writeModelToScope());
          });
        };
        this.$$writeModelToScope = function () {
          r(a, n.$modelValue);
          s(n.$viewChangeListeners, function (a) {
            try {
              a();
            } catch (d) {
              c(d);
            }
          });
        };
        this.$setViewValue = function (a, c) {
          n.$viewValue = a;
          n.$options && !n.$options.updateOnDefault || n.$$debounceViewValueCommit(c);
        };
        this.$$debounceViewValueCommit = function (c) {
          var d = 0, e = n.$options;
          e && y(e.debounce) && (e = e.debounce, V(e) ? d = e : V(e[c]) ? d = e[c] : V(e['default']) && (d = e['default']));
          h.cancel(O);
          d ? O = h(function () {
            n.$commitViewValue();
          }, d) : l.$$phase ? n.$commitViewValue() : a.$apply(function () {
            n.$commitViewValue();
          });
        };
        a.$watch(function () {
          var c = u(a);
          if (c !== n.$modelValue) {
            n.$modelValue = n.$$rawModelValue = c;
            for (var d = n.$formatters, e = d.length, f = c; e--;)
              f = d[e](f);
            n.$viewValue !== f && (n.$viewValue = n.$$lastCommittedViewValue = f, n.$render(), n.$$runValidators(t, c, f, C));
          }
          return c;
        });
      }
    ], ve = [
      '$rootScope',
      function (a) {
        return {
          restrict: 'A',
          require: [
            'ngModel',
            '^?form',
            '^?ngModelOptions'
          ],
          controller: bg,
          priority: 1,
          compile: function (c) {
            c.addClass(Sa).addClass('ng-untouched').addClass(kb);
            return {
              pre: function (a, c, f, g) {
                var h = g[0], l = g[1] || Jb;
                h.$$setOptions(g[2] && g[2].$options);
                l.$addControl(h);
                f.$observe('name', function (a) {
                  h.$name !== a && l.$$renameControl(h, a);
                });
                a.$on('$destroy', function () {
                  l.$removeControl(h);
                });
              },
              post: function (c, e, f, g) {
                var h = g[0];
                if (h.$options && h.$options.updateOn)
                  e.on(h.$options.updateOn, function (a) {
                    h.$$debounceViewValueCommit(a && a.type);
                  });
                e.on('blur', function (e) {
                  h.$touched || (a.$$phase ? c.$evalAsync(h.$setTouched) : c.$apply(h.$setTouched));
                });
              }
            };
          }
        };
      }
    ], xe = da({
      restrict: 'A',
      require: 'ngModel',
      link: function (a, c, d, e) {
        e.$viewChangeListeners.push(function () {
          a.$eval(d.ngChange);
        });
      }
    }), zc = function () {
      return {
        restrict: 'A',
        require: '?ngModel',
        link: function (a, c, d, e) {
          e && (d.required = !0, e.$validators.required = function (a, c) {
            return !d.required || !e.$isEmpty(c);
          }, d.$observe('required', function () {
            e.$validate();
          }));
        }
      };
    }, yc = function () {
      return {
        restrict: 'A',
        require: '?ngModel',
        link: function (a, c, d, e) {
          if (e) {
            var f, g = d.ngPattern || d.pattern;
            d.$observe('pattern', function (a) {
              F(a) && 0 < a.length && (a = new RegExp('^' + a + '$'));
              if (a && !a.test)
                throw T('ngPattern')('noregexp', g, a, va(c));
              f = a || t;
              e.$validate();
            });
            e.$validators.pattern = function (a) {
              return e.$isEmpty(a) || D(f) || f.test(a);
            };
          }
        }
      };
    }, Bc = function () {
      return {
        restrict: 'A',
        require: '?ngModel',
        link: function (a, c, d, e) {
          if (e) {
            var f = -1;
            d.$observe('maxlength', function (a) {
              a = ba(a);
              f = isNaN(a) ? -1 : a;
              e.$validate();
            });
            e.$validators.maxlength = function (a, c) {
              return 0 > f || e.$isEmpty(a) || c.length <= f;
            };
          }
        }
      };
    }, Ac = function () {
      return {
        restrict: 'A',
        require: '?ngModel',
        link: function (a, c, d, e) {
          if (e) {
            var f = 0;
            d.$observe('minlength', function (a) {
              f = ba(a) || 0;
              e.$validate();
            });
            e.$validators.minlength = function (a, c) {
              return e.$isEmpty(c) || c.length >= f;
            };
          }
        }
      };
    }, we = function () {
      return {
        restrict: 'A',
        priority: 100,
        require: 'ngModel',
        link: function (a, c, d, e) {
          var f = c.attr(d.$attr.ngList) || ', ', g = 'false' !== d.ngTrim, h = g ? U(f) : f;
          e.$parsers.push(function (a) {
            if (!D(a)) {
              var c = [];
              a && s(a.split(h), function (a) {
                a && c.push(g ? U(a) : a);
              });
              return c;
            }
          });
          e.$formatters.push(function (a) {
            return x(a) ? a.join(f) : t;
          });
          e.$isEmpty = function (a) {
            return !a || !a.length;
          };
        }
      };
    }, cg = /^(true|false|\d+)$/, ye = function () {
      return {
        restrict: 'A',
        priority: 100,
        compile: function (a, c) {
          return cg.test(c.ngValue) ? function (a, c, f) {
            f.$set('value', a.$eval(f.ngValue));
          } : function (a, c, f) {
            a.$watch(f.ngValue, function (a) {
              f.$set('value', a);
            });
          };
        }
      };
    }, ze = function () {
      return {
        restrict: 'A',
        controller: [
          '$scope',
          '$attrs',
          function (a, c) {
            var d = this;
            this.$options = a.$eval(c.ngModelOptions);
            this.$options.updateOn !== t ? (this.$options.updateOnDefault = !1, this.$options.updateOn = U(this.$options.updateOn.replace(ag, function () {
              d.$options.updateOnDefault = !0;
              return ' ';
            }))) : this.$options.updateOnDefault = !0;
          }
        ]
      };
    }, Zd = [
      '$compile',
      function (a) {
        return {
          restrict: 'AC',
          compile: function (c) {
            a.$$addBindingClass(c);
            return function (c, e, f) {
              a.$$addBindingInfo(e, f.ngBind);
              e = e[0];
              c.$watch(f.ngBind, function (a) {
                e.textContent = a === t ? '' : a;
              });
            };
          }
        };
      }
    ], ae = [
      '$interpolate',
      '$compile',
      function (a, c) {
        return {
          compile: function (d) {
            c.$$addBindingClass(d);
            return function (d, f, g) {
              d = a(f.attr(g.$attr.ngBindTemplate));
              c.$$addBindingInfo(f, d.expressions);
              f = f[0];
              g.$observe('ngBindTemplate', function (a) {
                f.textContent = a === t ? '' : a;
              });
            };
          }
        };
      }
    ], $d = [
      '$sce',
      '$parse',
      '$compile',
      function (a, c, d) {
        return {
          restrict: 'A',
          compile: function (e, f) {
            var g = c(f.ngBindHtml), h = c(f.ngBindHtml, function (a) {
                return (a || '').toString();
              });
            d.$$addBindingClass(e);
            return function (c, e, f) {
              d.$$addBindingInfo(e, f.ngBindHtml);
              c.$watch(h, function () {
                e.html(a.getTrustedHtml(g(c)) || '');
              });
            };
          }
        };
      }
    ], be = ic('', !0), de = ic('Odd', 0), ce = ic('Even', 1), ee = Ja({
      compile: function (a, c) {
        c.$set('ngCloak', t);
        a.removeClass('ng-cloak');
      }
    }), fe = [function () {
        return {
          restrict: 'A',
          scope: !0,
          controller: '@',
          priority: 500
        };
      }], Cc = {}, dg = {
      blur: !0,
      focus: !0
    };
  s('click dblclick mousedown mouseup mouseover mouseout mousemove mouseenter mouseleave keydown keyup keypress submit focus blur copy cut paste'.split(' '), function (a) {
    var c = ya('ng-' + a);
    Cc[c] = [
      '$parse',
      '$rootScope',
      function (d, e) {
        return {
          restrict: 'A',
          compile: function (f, g) {
            var h = d(g[c], null, !0);
            return function (c, d) {
              d.on(a, function (d) {
                var f = function () {
                  h(c, { $event: d });
                };
                dg[a] && e.$$phase ? c.$evalAsync(f) : c.$apply(f);
              });
            };
          }
        };
      }
    ];
  });
  var ie = [
      '$animate',
      function (a) {
        return {
          multiElement: !0,
          transclude: 'element',
          priority: 600,
          terminal: !0,
          restrict: 'A',
          $$tlb: !0,
          link: function (c, d, e, f, g) {
            var h, l, k;
            c.$watch(e.ngIf, function (c) {
              c ? l || g(function (c, f) {
                l = f;
                c[c.length++] = Y.createComment(' end ngIf: ' + e.ngIf + ' ');
                h = { clone: c };
                a.enter(c, d.parent(), d);
              }) : (k && (k.remove(), k = null), l && (l.$destroy(), l = null), h && (k = tb(h.clone), a.leave(k).then(function () {
                k = null;
              }), h = null));
            });
          }
        };
      }
    ], je = [
      '$templateRequest',
      '$anchorScroll',
      '$animate',
      '$sce',
      function (a, c, d, e) {
        return {
          restrict: 'ECA',
          priority: 400,
          terminal: !0,
          transclude: 'element',
          controller: ga.noop,
          compile: function (f, g) {
            var h = g.ngInclude || g.src, l = g.onload || '', k = g.autoscroll;
            return function (f, g, q, s, r) {
              var t = 0, n, v, w, L = function () {
                  v && (v.remove(), v = null);
                  n && (n.$destroy(), n = null);
                  w && (d.leave(w).then(function () {
                    v = null;
                  }), v = w, w = null);
                };
              f.$watch(e.parseAsResourceUrl(h), function (e) {
                var h = function () {
                    !y(k) || k && !f.$eval(k) || c();
                  }, q = ++t;
                e ? (a(e, !0).then(function (a) {
                  if (q === t) {
                    var c = f.$new();
                    s.template = a;
                    a = r(c, function (a) {
                      L();
                      d.enter(a, null, g).then(h);
                    });
                    n = c;
                    w = a;
                    n.$emit('$includeContentLoaded', e);
                    f.$eval(l);
                  }
                }, function () {
                  q === t && (L(), f.$emit('$includeContentError', e));
                }), f.$emit('$includeContentRequested', e)) : (L(), s.template = null);
              });
            };
          }
        };
      }
    ], Ae = [
      '$compile',
      function (a) {
        return {
          restrict: 'ECA',
          priority: -400,
          require: 'ngInclude',
          link: function (c, d, e, f) {
            /SVG/.test(d[0].toString()) ? (d.empty(), a(Fc(f.template, Y).childNodes)(c, function (a) {
              d.append(a);
            }, { futureParentElement: d })) : (d.html(f.template), a(d.contents())(c));
          }
        };
      }
    ], ke = Ja({
      priority: 450,
      compile: function () {
        return {
          pre: function (a, c, d) {
            a.$eval(d.ngInit);
          }
        };
      }
    }), le = Ja({
      terminal: !0,
      priority: 1000
    }), me = [
      '$locale',
      '$interpolate',
      function (a, c) {
        var d = /{}/g, e = /^when(Minus)?(.+)$/;
        return {
          restrict: 'EA',
          link: function (f, g, h) {
            function l(a) {
              g.text(a || '');
            }
            var k = h.count, m = h.$attr.when && g.attr(h.$attr.when), p = h.offset || 0, q = f.$eval(m) || {}, u = {}, m = c.startSymbol(), r = c.endSymbol(), t = m + k + '-' + p + r, n = ga.noop, v;
            s(h, function (a, c) {
              var d = e.exec(c);
              d && (d = (d[1] ? '-' : '') + Q(d[2]), q[d] = g.attr(h.$attr[c]));
            });
            s(q, function (a, e) {
              u[e] = c(a.replace(d, t));
            });
            f.$watch(k, function (c) {
              c = parseFloat(c);
              var d = isNaN(c);
              d || c in q || (c = a.pluralCat(c - p));
              c === v || d && isNaN(v) || (n(), n = f.$watch(u[c], l), v = c);
            });
          }
        };
      }
    ], ne = [
      '$parse',
      '$animate',
      function (a, c) {
        var d = T('ngRepeat'), e = function (a, c, d, e, k, m, p) {
            a[d] = e;
            k && (a[k] = m);
            a.$index = c;
            a.$first = 0 === c;
            a.$last = c === p - 1;
            a.$middle = !(a.$first || a.$last);
            a.$odd = !(a.$even = 0 === (c & 1));
          };
        return {
          restrict: 'A',
          multiElement: !0,
          transclude: 'element',
          priority: 1000,
          terminal: !0,
          $$tlb: !0,
          compile: function (f, g) {
            var h = g.ngRepeat, l = Y.createComment(' end ngRepeat: ' + h + ' '), k = h.match(/^\s*([\s\S]+?)\s+in\s+([\s\S]+?)(?:\s+as\s+([\s\S]+?))?(?:\s+track\s+by\s+([\s\S]+?))?\s*$/);
            if (!k)
              throw d('iexp', h);
            var m = k[1], p = k[2], q = k[3], u = k[4], k = m.match(/^(?:(\s*[\$\w]+)|\(\s*([\$\w]+)\s*,\s*([\$\w]+)\s*\))$/);
            if (!k)
              throw d('iidexp', m);
            var r = k[3] || k[1], y = k[2];
            if (q && (!/^[$a-zA-Z_][$a-zA-Z0-9_]*$/.test(q) || /^(null|undefined|this|\$index|\$first|\$middle|\$last|\$even|\$odd|\$parent)$/.test(q)))
              throw d('badident', q);
            var n, v, w, D, z = { $id: Na };
            u ? n = a(u) : (w = function (a, c) {
              return Na(c);
            }, D = function (a) {
              return a;
            });
            return function (a, f, g, k, m) {
              n && (v = function (c, d, e) {
                y && (z[y] = c);
                z[r] = d;
                z.$index = e;
                return n(a, z);
              });
              var u = ha();
              a.$watchCollection(p, function (g) {
                var k, p, n = f[0], E, z = ha(), C, S, N, G, J, x, H;
                q && (a[q] = g);
                if (Ta(g))
                  J = g, p = v || w;
                else {
                  p = v || D;
                  J = [];
                  for (H in g)
                    g.hasOwnProperty(H) && '$' != H.charAt(0) && J.push(H);
                  J.sort();
                }
                C = J.length;
                H = Array(C);
                for (k = 0; k < C; k++)
                  if (S = g === J ? k : J[k], N = g[S], G = p(S, N, k), u[G])
                    x = u[G], delete u[G], z[G] = x, H[k] = x;
                  else {
                    if (z[G])
                      throw s(H, function (a) {
                        a && a.scope && (u[a.id] = a);
                      }), d('dupes', h, G, N);
                    H[k] = {
                      id: G,
                      scope: t,
                      clone: t
                    };
                    z[G] = !0;
                  }
                for (E in u) {
                  x = u[E];
                  G = tb(x.clone);
                  c.leave(G);
                  if (G[0].parentNode)
                    for (k = 0, p = G.length; k < p; k++)
                      G[k].$$NG_REMOVED = !0;
                  x.scope.$destroy();
                }
                for (k = 0; k < C; k++)
                  if (S = g === J ? k : J[k], N = g[S], x = H[k], x.scope) {
                    E = n;
                    do
                      E = E.nextSibling;
                    while (E && E.$$NG_REMOVED);
                    x.clone[0] != E && c.move(tb(x.clone), null, B(n));
                    n = x.clone[x.clone.length - 1];
                    e(x.scope, k, r, N, y, S, C);
                  } else
                    m(function (a, d) {
                      x.scope = d;
                      var f = l.cloneNode(!1);
                      a[a.length++] = f;
                      c.enter(a, null, B(n));
                      n = f;
                      x.clone = a;
                      z[x.id] = x;
                      e(x.scope, k, r, N, y, S, C);
                    });
                u = z;
              });
            };
          }
        };
      }
    ], oe = [
      '$animate',
      function (a) {
        return {
          restrict: 'A',
          multiElement: !0,
          link: function (c, d, e) {
            c.$watch(e.ngShow, function (c) {
              a[c ? 'removeClass' : 'addClass'](d, 'ng-hide', { tempClasses: 'ng-hide-animate' });
            });
          }
        };
      }
    ], he = [
      '$animate',
      function (a) {
        return {
          restrict: 'A',
          multiElement: !0,
          link: function (c, d, e) {
            c.$watch(e.ngHide, function (c) {
              a[c ? 'addClass' : 'removeClass'](d, 'ng-hide', { tempClasses: 'ng-hide-animate' });
            });
          }
        };
      }
    ], pe = Ja(function (a, c, d) {
      a.$watch(d.ngStyle, function (a, d) {
        d && a !== d && s(d, function (a, d) {
          c.css(d, '');
        });
        a && c.css(a);
      }, !0);
    }), qe = [
      '$animate',
      function (a) {
        return {
          restrict: 'EA',
          require: 'ngSwitch',
          controller: [
            '$scope',
            function () {
              this.cases = {};
            }
          ],
          link: function (c, d, e, f) {
            var g = [], h = [], l = [], k = [], m = function (a, c) {
                return function () {
                  a.splice(c, 1);
                };
              };
            c.$watch(e.ngSwitch || e.on, function (c) {
              var d, e;
              d = 0;
              for (e = l.length; d < e; ++d)
                a.cancel(l[d]);
              d = l.length = 0;
              for (e = k.length; d < e; ++d) {
                var r = tb(h[d].clone);
                k[d].$destroy();
                (l[d] = a.leave(r)).then(m(l, d));
              }
              h.length = 0;
              k.length = 0;
              (g = f.cases['!' + c] || f.cases['?']) && s(g, function (c) {
                c.transclude(function (d, e) {
                  k.push(e);
                  var f = c.element;
                  d[d.length++] = Y.createComment(' end ngSwitchWhen: ');
                  h.push({ clone: d });
                  a.enter(d, f.parent(), f);
                });
              });
            });
          }
        };
      }
    ], re = Ja({
      transclude: 'element',
      priority: 1200,
      require: '^ngSwitch',
      multiElement: !0,
      link: function (a, c, d, e, f) {
        e.cases['!' + d.ngSwitchWhen] = e.cases['!' + d.ngSwitchWhen] || [];
        e.cases['!' + d.ngSwitchWhen].push({
          transclude: f,
          element: c
        });
      }
    }), se = Ja({
      transclude: 'element',
      priority: 1200,
      require: '^ngSwitch',
      multiElement: !0,
      link: function (a, c, d, e, f) {
        e.cases['?'] = e.cases['?'] || [];
        e.cases['?'].push({
          transclude: f,
          element: c
        });
      }
    }), ue = Ja({
      restrict: 'EAC',
      link: function (a, c, d, e, f) {
        if (!f)
          throw T('ngTransclude')('orphan', va(c));
        f(function (a) {
          c.empty();
          c.append(a);
        });
      }
    }), Vd = [
      '$templateCache',
      function (a) {
        return {
          restrict: 'E',
          terminal: !0,
          compile: function (c, d) {
            'text/ng-template' == d.type && a.put(d.id, c[0].text);
          }
        };
      }
    ], eg = T('ngOptions'), te = da({
      restrict: 'A',
      terminal: !0
    }), Wd = [
      '$compile',
      '$parse',
      function (a, c) {
        var d = /^\s*([\s\S]+?)(?:\s+as\s+([\s\S]+?))?(?:\s+group\s+by\s+([\s\S]+?))?\s+for\s+(?:([\$\w][\$\w]*)|(?:\(\s*([\$\w][\$\w]*)\s*,\s*([\$\w][\$\w]*)\s*\)))\s+in\s+([\s\S]+?)(?:\s+track\s+by\s+([\s\S]+?))?$/, e = { $setViewValue: C };
        return {
          restrict: 'E',
          require: [
            'select',
            '?ngModel'
          ],
          controller: [
            '$element',
            '$scope',
            '$attrs',
            function (a, c, d) {
              var l = this, k = {}, m = e, p;
              l.databound = d.ngModel;
              l.init = function (a, c, d) {
                m = a;
                p = d;
              };
              l.addOption = function (c, d) {
                Ma(c, '"option value"');
                k[c] = !0;
                m.$viewValue == c && (a.val(c), p.parent() && p.remove());
                d && d[0].hasAttribute('selected') && (d[0].selected = !0);
              };
              l.removeOption = function (a) {
                this.hasOption(a) && (delete k[a], m.$viewValue === a && this.renderUnknownOption(a));
              };
              l.renderUnknownOption = function (c) {
                c = '? ' + Na(c) + ' ?';
                p.val(c);
                a.prepend(p);
                a.val(c);
                p.prop('selected', !0);
              };
              l.hasOption = function (a) {
                return k.hasOwnProperty(a);
              };
              c.$on('$destroy', function () {
                l.renderUnknownOption = C;
              });
            }
          ],
          link: function (e, g, h, l) {
            function k(a, c, d, e) {
              d.$render = function () {
                var a = d.$viewValue;
                e.hasOption(a) ? (C.parent() && C.remove(), c.val(a), '' === a && n.prop('selected', !0)) : D(a) && n ? c.val('') : e.renderUnknownOption(a);
              };
              c.on('change', function () {
                a.$apply(function () {
                  C.parent() && C.remove();
                  d.$setViewValue(c.val());
                });
              });
            }
            function m(a, c, d) {
              var e;
              d.$render = function () {
                var a = new db(d.$viewValue);
                s(c.find('option'), function (c) {
                  c.selected = y(a.get(c.value));
                });
              };
              a.$watch(function () {
                fa(e, d.$viewValue) || (e = qa(d.$viewValue), d.$render());
              });
              c.on('change', function () {
                a.$apply(function () {
                  var a = [];
                  s(c.find('option'), function (c) {
                    c.selected && a.push(c.value);
                  });
                  d.$setViewValue(a);
                });
              });
            }
            function p(e, f, g) {
              function h(a, c, d) {
                T[A] = d;
                H && (T[H] = c);
                return a(e, T);
              }
              function k(a) {
                var c;
                if (u)
                  if (M && x(a)) {
                    c = new db([]);
                    for (var d = 0; d < a.length; d++)
                      c.put(h(M, null, a[d]), !0);
                  } else
                    c = new db(a);
                else
                  M && (a = h(M, null, a));
                return function (d, e) {
                  var f;
                  f = M ? M : B ? B : F;
                  return u ? y(c.remove(h(f, d, e))) : a === h(f, d, e);
                };
              }
              function l() {
                v || (e.$$postDigest(p), v = !0);
              }
              function m(a, c, d) {
                a[c] = a[c] || 0;
                a[c] += d ? 1 : -1;
              }
              function p() {
                v = !1;
                var a = { '': [] }, c = [''], d, l, n, r, t;
                n = g.$viewValue;
                r = P(e) || [];
                var B = H ? Object.keys(r).sort() : r, x, A, D, F, N = {};
                t = k(n);
                var I = !1, U, V;
                Q = {};
                for (F = 0; D = B.length, F < D; F++) {
                  x = F;
                  if (H && (x = B[F], '$' === x.charAt(0)))
                    continue;
                  A = r[x];
                  d = h(J, x, A) || '';
                  (l = a[d]) || (l = a[d] = [], c.push(d));
                  d = t(x, A);
                  I = I || d;
                  A = h(C, x, A);
                  A = y(A) ? A : '';
                  V = M ? M(e, T) : H ? B[F] : F;
                  M && (Q[V] = x);
                  l.push({
                    id: V,
                    label: A,
                    selected: d
                  });
                }
                u || (z || null === n ? a[''].unshift({
                  id: '',
                  label: '',
                  selected: !I
                }) : I || a[''].unshift({
                  id: '?',
                  label: '',
                  selected: !0
                }));
                x = 0;
                for (B = c.length; x < B; x++) {
                  d = c[x];
                  l = a[d];
                  R.length <= x ? (n = {
                    element: G.clone().attr('label', d),
                    label: l.label
                  }, r = [n], R.push(r), f.append(n.element)) : (r = R[x], n = r[0], n.label != d && n.element.attr('label', n.label = d));
                  I = null;
                  F = 0;
                  for (D = l.length; F < D; F++)
                    d = l[F], (t = r[F + 1]) ? (I = t.element, t.label !== d.label && (m(N, t.label, !1), m(N, d.label, !0), I.text(t.label = d.label), I.prop('label', t.label)), t.id !== d.id && I.val(t.id = d.id), I[0].selected !== d.selected && (I.prop('selected', t.selected = d.selected), Ra && I.prop('selected', t.selected))) : ('' === d.id && z ? U = z : (U = w.clone()).val(d.id).prop('selected', d.selected).attr('selected', d.selected).prop('label', d.label).text(d.label), r.push(t = {
                      element: U,
                      label: d.label,
                      id: d.id,
                      selected: d.selected
                    }), m(N, d.label, !0), I ? I.after(U) : n.element.append(U), I = U);
                  for (F++; r.length > F;)
                    d = r.pop(), m(N, d.label, !1), d.element.remove();
                }
                for (; R.length > x;) {
                  l = R.pop();
                  for (F = 1; F < l.length; ++F)
                    m(N, l[F].label, !1);
                  l[0].element.remove();
                }
                s(N, function (a, c) {
                  0 < a ? q.addOption(c) : 0 > a && q.removeOption(c);
                });
              }
              var n;
              if (!(n = r.match(d)))
                throw eg('iexp', r, va(f));
              var C = c(n[2] || n[1]), A = n[4] || n[6], D = / as /.test(n[0]) && n[1], B = D ? c(D) : null, H = n[5], J = c(n[3] || ''), F = c(n[2] ? n[1] : A), P = c(n[7]), M = n[8] ? c(n[8]) : null, Q = {}, R = [[{
                      element: f,
                      label: ''
                    }]], T = {};
              z && (a(z)(e), z.removeClass('ng-scope'), z.remove());
              f.empty();
              f.on('change', function () {
                e.$apply(function () {
                  var a = P(e) || [], c;
                  if (u)
                    c = [], s(f.val(), function (d) {
                      d = M ? Q[d] : d;
                      c.push('?' === d ? t : '' === d ? null : h(B ? B : F, d, a[d]));
                    });
                  else {
                    var d = M ? Q[f.val()] : f.val();
                    c = '?' === d ? t : '' === d ? null : h(B ? B : F, d, a[d]);
                  }
                  g.$setViewValue(c);
                  p();
                });
              });
              g.$render = p;
              e.$watchCollection(P, l);
              e.$watchCollection(function () {
                var a = P(e), c;
                if (a && x(a)) {
                  c = Array(a.length);
                  for (var d = 0, f = a.length; d < f; d++)
                    c[d] = h(C, d, a[d]);
                } else if (a)
                  for (d in c = {}, a)
                    a.hasOwnProperty(d) && (c[d] = h(C, d, a[d]));
                return c;
              }, l);
              u && e.$watchCollection(function () {
                return g.$modelValue;
              }, l);
            }
            if (l[1]) {
              var q = l[0];
              l = l[1];
              var u = h.multiple, r = h.ngOptions, z = !1, n, v = !1, w = B(Y.createElement('option')), G = B(Y.createElement('optgroup')), C = w.clone();
              h = 0;
              for (var A = g.children(), H = A.length; h < H; h++)
                if ('' === A[h].value) {
                  n = z = A.eq(h);
                  break;
                }
              q.init(l, z, C);
              u && (l.$isEmpty = function (a) {
                return !a || 0 === a.length;
              });
              r ? p(e, g, l) : u ? m(e, g, l) : k(e, g, l, q);
            }
          }
        };
      }
    ], Yd = [
      '$interpolate',
      function (a) {
        var c = {
            addOption: C,
            removeOption: C
          };
        return {
          restrict: 'E',
          priority: 100,
          compile: function (d, e) {
            if (D(e.value)) {
              var f = a(d.text(), !0);
              f || e.$set('value', d.text());
            }
            return function (a, d, e) {
              var k = d.parent(), m = k.data('$selectController') || k.parent().data('$selectController');
              m && m.databound || (m = c);
              f ? a.$watch(f, function (a, c) {
                e.$set('value', a);
                c !== a && m.removeOption(c);
                m.addOption(a, d);
              }) : m.addOption(e.value, d);
              d.on('$destroy', function () {
                m.removeOption(e.value);
              });
            };
          }
        };
      }
    ], Xd = da({
      restrict: 'E',
      terminal: !1
    });
  M.angular.bootstrap ? console.log('WARNING: Tried to load angular more than once.') : (Nd(), Pd(ga), B(Y).ready(function () {
    Jd(Y, sc);
  }));
}(window, document));
!window.angular.$$csp() && window.angular.element(document).find('head').prepend('<style type="text/css">@charset "UTF-8";[ng\\:cloak],[ng-cloak],[data-ng-cloak],[x-ng-cloak],.ng-cloak,.x-ng-cloak,.ng-hide:not(.ng-hide-animate){display:none !important;}ng\\:form{display:block;}</style>');
//# sourceMappingURL=angular.min.js.map
/*
 AngularJS v1.3.8
 (c) 2010-2014 Google, Inc. http://angularjs.org
 License: MIT
*/
(function (p, d, C) {
  'use strict';
  function v(r, h, g) {
    return {
      restrict: 'ECA',
      terminal: !0,
      priority: 400,
      transclude: 'element',
      link: function (a, c, b, f, y) {
        function z() {
          k && (g.cancel(k), k = null);
          l && (l.$destroy(), l = null);
          m && (k = g.leave(m), k.then(function () {
            k = null;
          }), m = null);
        }
        function x() {
          var b = r.current && r.current.locals;
          if (d.isDefined(b && b.$template)) {
            var b = a.$new(), f = r.current;
            m = y(b, function (b) {
              g.enter(b, null, m || c).then(function () {
                !d.isDefined(t) || t && !a.$eval(t) || h();
              });
              z();
            });
            l = f.scope = b;
            l.$emit('$viewContentLoaded');
            l.$eval(w);
          } else
            z();
        }
        var l, m, k, t = b.autoscroll, w = b.onload || '';
        a.$on('$routeChangeSuccess', x);
        x();
      }
    };
  }
  function A(d, h, g) {
    return {
      restrict: 'ECA',
      priority: -400,
      link: function (a, c) {
        var b = g.current, f = b.locals;
        c.html(f.$template);
        var y = d(c.contents());
        b.controller && (f.$scope = a, f = h(b.controller, f), b.controllerAs && (a[b.controllerAs] = f), c.data('$ngControllerController', f), c.children().data('$ngControllerController', f));
        y(a);
      }
    };
  }
  p = d.module('ngRoute', ['ng']).provider('$route', function () {
    function r(a, c) {
      return d.extend(Object.create(a), c);
    }
    function h(a, d) {
      var b = d.caseInsensitiveMatch, f = {
          originalPath: a,
          regexp: a
        }, g = f.keys = [];
      a = a.replace(/([().])/g, '\\$1').replace(/(\/)?:(\w+)([\?\*])?/g, function (a, d, b, c) {
        a = '?' === c ? c : null;
        c = '*' === c ? c : null;
        g.push({
          name: b,
          optional: !!a
        });
        d = d || '';
        return '' + (a ? '' : d) + '(?:' + (a ? d : '') + (c && '(.+?)' || '([^/]+)') + (a || '') + ')' + (a || '');
      }).replace(/([\/$\*])/g, '\\$1');
      f.regexp = new RegExp('^' + a + '$', b ? 'i' : '');
      return f;
    }
    var g = {};
    this.when = function (a, c) {
      var b = d.copy(c);
      d.isUndefined(b.reloadOnSearch) && (b.reloadOnSearch = !0);
      d.isUndefined(b.caseInsensitiveMatch) && (b.caseInsensitiveMatch = this.caseInsensitiveMatch);
      g[a] = d.extend(b, a && h(a, b));
      if (a) {
        var f = '/' == a[a.length - 1] ? a.substr(0, a.length - 1) : a + '/';
        g[f] = d.extend({ redirectTo: a }, h(f, b));
      }
      return this;
    };
    this.caseInsensitiveMatch = !1;
    this.otherwise = function (a) {
      'string' === typeof a && (a = { redirectTo: a });
      this.when(null, a);
      return this;
    };
    this.$get = [
      '$rootScope',
      '$location',
      '$routeParams',
      '$q',
      '$injector',
      '$templateRequest',
      '$sce',
      function (a, c, b, f, h, p, x) {
        function l(b) {
          var e = s.current;
          (v = (n = k()) && e && n.$$route === e.$$route && d.equals(n.pathParams, e.pathParams) && !n.reloadOnSearch && !w) || !e && !n || a.$broadcast('$routeChangeStart', n, e).defaultPrevented && b && b.preventDefault();
        }
        function m() {
          var u = s.current, e = n;
          if (v)
            u.params = e.params, d.copy(u.params, b), a.$broadcast('$routeUpdate', u);
          else if (e || u)
            w = !1, (s.current = e) && e.redirectTo && (d.isString(e.redirectTo) ? c.path(t(e.redirectTo, e.params)).search(e.params).replace() : c.url(e.redirectTo(e.pathParams, c.path(), c.search())).replace()), f.when(e).then(function () {
              if (e) {
                var a = d.extend({}, e.resolve), b, c;
                d.forEach(a, function (b, e) {
                  a[e] = d.isString(b) ? h.get(b) : h.invoke(b, null, null, e);
                });
                d.isDefined(b = e.template) ? d.isFunction(b) && (b = b(e.params)) : d.isDefined(c = e.templateUrl) && (d.isFunction(c) && (c = c(e.params)), c = x.getTrustedResourceUrl(c), d.isDefined(c) && (e.loadedTemplateUrl = c, b = p(c)));
                d.isDefined(b) && (a.$template = b);
                return f.all(a);
              }
            }).then(function (c) {
              e == s.current && (e && (e.locals = c, d.copy(e.params, b)), a.$broadcast('$routeChangeSuccess', e, u));
            }, function (b) {
              e == s.current && a.$broadcast('$routeChangeError', e, u, b);
            });
        }
        function k() {
          var a, b;
          d.forEach(g, function (f, g) {
            var q;
            if (q = !b) {
              var h = c.path();
              q = f.keys;
              var l = {};
              if (f.regexp)
                if (h = f.regexp.exec(h)) {
                  for (var k = 1, m = h.length; k < m; ++k) {
                    var n = q[k - 1], p = h[k];
                    n && p && (l[n.name] = p);
                  }
                  q = l;
                } else
                  q = null;
              else
                q = null;
              q = a = q;
            }
            q && (b = r(f, {
              params: d.extend({}, c.search(), a),
              pathParams: a
            }), b.$$route = f);
          });
          return b || g[null] && r(g[null], {
            params: {},
            pathParams: {}
          });
        }
        function t(a, b) {
          var c = [];
          d.forEach((a || '').split(':'), function (a, d) {
            if (0 === d)
              c.push(a);
            else {
              var f = a.match(/(\w+)(?:[?*])?(.*)/), g = f[1];
              c.push(b[g]);
              c.push(f[2] || '');
              delete b[g];
            }
          });
          return c.join('');
        }
        var w = !1, n, v, s = {
            routes: g,
            reload: function () {
              w = !0;
              a.$evalAsync(function () {
                l();
                m();
              });
            },
            updateParams: function (a) {
              if (this.current && this.current.$$route) {
                var b = {}, f = this;
                d.forEach(Object.keys(a), function (c) {
                  f.current.pathParams[c] || (b[c] = a[c]);
                });
                a = d.extend({}, this.current.params, a);
                c.path(t(this.current.$$route.originalPath, a));
                c.search(d.extend({}, c.search(), b));
              } else
                throw B('norout');
            }
          };
        a.$on('$locationChangeStart', l);
        a.$on('$locationChangeSuccess', m);
        return s;
      }
    ];
  });
  var B = d.$$minErr('ngRoute');
  p.provider('$routeParams', function () {
    this.$get = function () {
      return {};
    };
  });
  p.directive('ngView', v);
  p.directive('ngView', A);
  v.$inject = [
    '$route',
    '$anchorScroll',
    '$animate'
  ];
  A.$inject = [
    '$compile',
    '$controller',
    '$route'
  ];
}(window, window.angular));
//# sourceMappingURL=angular-route.min.js.map
/*
 AngularJS v1.3.8
 (c) 2010-2014 Google, Inc. http://angularjs.org
 License: MIT
*/
(function (N, f, W) {
  'use strict';
  f.module('ngAnimate', ['ng']).directive('ngAnimateChildren', function () {
    return function (X, C, g) {
      g = g.ngAnimateChildren;
      f.isString(g) && 0 === g.length ? C.data('$$ngAnimateChildren', !0) : X.$watch(g, function (f) {
        C.data('$$ngAnimateChildren', !!f);
      });
    };
  }).factory('$$animateReflow', [
    '$$rAF',
    '$document',
    function (f, C) {
      return function (g) {
        return f(function () {
          g();
        });
      };
    }
  ]).config([
    '$provide',
    '$animateProvider',
    function (X, C) {
      function g(f) {
        for (var n = 0; n < f.length; n++) {
          var g = f[n];
          if (1 == g.nodeType)
            return g;
        }
      }
      function ba(f, n) {
        return g(f) == g(n);
      }
      var t = f.noop, n = f.forEach, da = C.$$selectors, aa = f.isArray, ea = f.isString, ga = f.isObject, r = { running: !0 }, u;
      X.decorator('$animate', [
        '$delegate',
        '$$q',
        '$injector',
        '$sniffer',
        '$rootElement',
        '$$asyncCallback',
        '$rootScope',
        '$document',
        '$templateRequest',
        '$$jqLite',
        function (O, N, M, Y, y, H, P, W, Z, Q) {
          function R(a, c) {
            var b = a.data('$$ngAnimateState') || {};
            c && (b.running = !0, b.structural = !0, a.data('$$ngAnimateState', b));
            return b.disabled || b.running && b.structural;
          }
          function D(a) {
            var c, b = N.defer();
            b.promise.$$cancelFn = function () {
              c && c();
            };
            P.$$postDigest(function () {
              c = a(function () {
                b.resolve();
              });
            });
            return b.promise;
          }
          function I(a) {
            if (ga(a))
              return a.tempClasses && ea(a.tempClasses) && (a.tempClasses = a.tempClasses.split(/\s+/)), a;
          }
          function S(a, c, b) {
            b = b || {};
            var d = {};
            n(b, function (e, a) {
              n(a.split(' '), function (a) {
                d[a] = e;
              });
            });
            var h = Object.create(null);
            n((a.attr('class') || '').split(/\s+/), function (e) {
              h[e] = !0;
            });
            var f = [], l = [];
            n(c && c.classes || [], function (e, a) {
              var b = h[a], c = d[a] || {};
              !1 === e ? (b || 'addClass' == c.event) && l.push(a) : !0 === e && (b && 'removeClass' != c.event || f.push(a));
            });
            return 0 < f.length + l.length && [
              f.join(' '),
              l.join(' ')
            ];
          }
          function T(a) {
            if (a) {
              var c = [], b = {};
              a = a.substr(1).split('.');
              (Y.transitions || Y.animations) && c.push(M.get(da['']));
              for (var d = 0; d < a.length; d++) {
                var f = a[d], k = da[f];
                k && !b[f] && (c.push(M.get(k)), b[f] = !0);
              }
              return c;
            }
          }
          function U(a, c, b, d) {
            function h(e, a) {
              var b = e[a], c = e['before' + a.charAt(0).toUpperCase() + a.substr(1)];
              if (b || c)
                return 'leave' == a && (c = b, b = null), u.push({
                  event: a,
                  fn: b
                }), J.push({
                  event: a,
                  fn: c
                }), !0;
            }
            function k(c, l, w) {
              var E = [];
              n(c, function (a) {
                a.fn && E.push(a);
              });
              var m = 0;
              n(E, function (c, f) {
                var p = function () {
                  a: {
                    if (l) {
                      (l[f] || t)();
                      if (++m < E.length)
                        break a;
                      l = null;
                    }
                    w();
                  }
                };
                switch (c.event) {
                case 'setClass':
                  l.push(c.fn(a, e, A, p, d));
                  break;
                case 'animate':
                  l.push(c.fn(a, b, d.from, d.to, p));
                  break;
                case 'addClass':
                  l.push(c.fn(a, e || b, p, d));
                  break;
                case 'removeClass':
                  l.push(c.fn(a, A || b, p, d));
                  break;
                default:
                  l.push(c.fn(a, p, d));
                }
              });
              l && 0 === l.length && w();
            }
            var l = a[0];
            if (l) {
              d && (d.to = d.to || {}, d.from = d.from || {});
              var e, A;
              aa(b) && (e = b[0], A = b[1], e ? A ? b = e + ' ' + A : (b = e, c = 'addClass') : (b = A, c = 'removeClass'));
              var w = 'setClass' == c, E = w || 'addClass' == c || 'removeClass' == c || 'animate' == c, p = a.attr('class') + ' ' + b;
              if (x(p)) {
                var ca = t, m = [], J = [], g = t, s = [], u = [], p = (' ' + p).replace(/\s+/g, '.');
                n(T(p), function (a) {
                  !h(a, c) && w && (h(a, 'addClass'), h(a, 'removeClass'));
                });
                return {
                  node: l,
                  event: c,
                  className: b,
                  isClassBased: E,
                  isSetClassOperation: w,
                  applyStyles: function () {
                    d && a.css(f.extend(d.from || {}, d.to || {}));
                  },
                  before: function (a) {
                    ca = a;
                    k(J, m, function () {
                      ca = t;
                      a();
                    });
                  },
                  after: function (a) {
                    g = a;
                    k(u, s, function () {
                      g = t;
                      a();
                    });
                  },
                  cancel: function () {
                    m && (n(m, function (a) {
                      (a || t)(!0);
                    }), ca(!0));
                    s && (n(s, function (a) {
                      (a || t)(!0);
                    }), g(!0));
                  }
                };
              }
            }
          }
          function G(a, c, b, d, h, k, l, e) {
            function A(e) {
              var l = '$animate:' + e;
              J && J[l] && 0 < J[l].length && H(function () {
                b.triggerHandler(l, {
                  event: a,
                  className: c
                });
              });
            }
            function w() {
              A('before');
            }
            function E() {
              A('after');
            }
            function p() {
              p.hasBeenRun || (p.hasBeenRun = !0, k());
            }
            function g() {
              if (!g.hasBeenRun) {
                m && m.applyStyles();
                g.hasBeenRun = !0;
                l && l.tempClasses && n(l.tempClasses, function (a) {
                  u.removeClass(b, a);
                });
                var w = b.data('$$ngAnimateState');
                w && (m && m.isClassBased ? B(b, c) : (H(function () {
                  var e = b.data('$$ngAnimateState') || {};
                  fa == e.index && B(b, c, a);
                }), b.data('$$ngAnimateState', w)));
                A('close');
                e();
              }
            }
            var m = U(b, a, c, l);
            if (!m)
              return p(), w(), E(), g(), t;
            a = m.event;
            c = m.className;
            var J = f.element._data(m.node), J = J && J.events;
            d || (d = h ? h.parent() : b.parent());
            if (z(b, d))
              return p(), w(), E(), g(), t;
            d = b.data('$$ngAnimateState') || {};
            var L = d.active || {}, s = d.totalActive || 0, q = d.last;
            h = !1;
            if (0 < s) {
              s = [];
              if (m.isClassBased)
                'setClass' == q.event ? (s.push(q), B(b, c)) : L[c] && (v = L[c], v.event == a ? h = !0 : (s.push(v), B(b, c)));
              else if ('leave' == a && L['ng-leave'])
                h = !0;
              else {
                for (var v in L)
                  s.push(L[v]);
                d = {};
                B(b, !0);
              }
              0 < s.length && n(s, function (a) {
                a.cancel();
              });
            }
            !m.isClassBased || m.isSetClassOperation || 'animate' == a || h || (h = 'addClass' == a == b.hasClass(c));
            if (h)
              return p(), w(), E(), A('close'), e(), t;
            L = d.active || {};
            s = d.totalActive || 0;
            if ('leave' == a)
              b.one('$destroy', function (a) {
                a = f.element(this);
                var e = a.data('$$ngAnimateState');
                e && (e = e.active['ng-leave']) && (e.cancel(), B(a, 'ng-leave'));
              });
            u.addClass(b, 'ng-animate');
            l && l.tempClasses && n(l.tempClasses, function (a) {
              u.addClass(b, a);
            });
            var fa = K++;
            s++;
            L[c] = m;
            b.data('$$ngAnimateState', {
              last: m,
              active: L,
              index: fa,
              totalActive: s
            });
            w();
            m.before(function (e) {
              var l = b.data('$$ngAnimateState');
              e = e || !l || !l.active[c] || m.isClassBased && l.active[c].event != a;
              p();
              !0 === e ? g() : (E(), m.after(g));
            });
            return m.cancel;
          }
          function q(a) {
            if (a = g(a))
              a = f.isFunction(a.getElementsByClassName) ? a.getElementsByClassName('ng-animate') : a.querySelectorAll('.ng-animate'), n(a, function (a) {
                a = f.element(a);
                (a = a.data('$$ngAnimateState')) && a.active && n(a.active, function (a) {
                  a.cancel();
                });
              });
          }
          function B(a, c) {
            if (ba(a, y))
              r.disabled || (r.running = !1, r.structural = !1);
            else if (c) {
              var b = a.data('$$ngAnimateState') || {}, d = !0 === c;
              !d && b.active && b.active[c] && (b.totalActive--, delete b.active[c]);
              if (d || !b.totalActive)
                u.removeClass(a, 'ng-animate'), a.removeData('$$ngAnimateState');
            }
          }
          function z(a, c) {
            if (r.disabled)
              return !0;
            if (ba(a, y))
              return r.running;
            var b, d, g;
            do {
              if (0 === c.length)
                break;
              var k = ba(c, y), l = k ? r : c.data('$$ngAnimateState') || {};
              if (l.disabled)
                return !0;
              k && (g = !0);
              !1 !== b && (k = c.data('$$ngAnimateChildren'), f.isDefined(k) && (b = k));
              d = d || l.running || l.last && !l.last.isClassBased;
            } while (c = c.parent());
            return !g || !b && d;
          }
          u = Q;
          y.data('$$ngAnimateState', r);
          var $ = P.$watch(function () {
              return Z.totalPendingRequests;
            }, function (a, c) {
              0 === a && ($(), P.$$postDigest(function () {
                P.$$postDigest(function () {
                  r.running = !1;
                });
              }));
            }), K = 0, V = C.classNameFilter(), x = V ? function (a) {
              return V.test(a);
            } : function () {
              return !0;
            };
          return {
            animate: function (a, c, b, d, h) {
              d = d || 'ng-inline-animate';
              h = I(h) || {};
              h.from = b ? c : null;
              h.to = b ? b : c;
              return D(function (b) {
                return G('animate', d, f.element(g(a)), null, null, t, h, b);
              });
            },
            enter: function (a, c, b, d) {
              d = I(d);
              a = f.element(a);
              c = c && f.element(c);
              b = b && f.element(b);
              R(a, !0);
              O.enter(a, c, b);
              return D(function (h) {
                return G('enter', 'ng-enter', f.element(g(a)), c, b, t, d, h);
              });
            },
            leave: function (a, c) {
              c = I(c);
              a = f.element(a);
              q(a);
              R(a, !0);
              return D(function (b) {
                return G('leave', 'ng-leave', f.element(g(a)), null, null, function () {
                  O.leave(a);
                }, c, b);
              });
            },
            move: function (a, c, b, d) {
              d = I(d);
              a = f.element(a);
              c = c && f.element(c);
              b = b && f.element(b);
              q(a);
              R(a, !0);
              O.move(a, c, b);
              return D(function (h) {
                return G('move', 'ng-move', f.element(g(a)), c, b, t, d, h);
              });
            },
            addClass: function (a, c, b) {
              return this.setClass(a, c, [], b);
            },
            removeClass: function (a, c, b) {
              return this.setClass(a, [], c, b);
            },
            setClass: function (a, c, b, d) {
              d = I(d);
              a = f.element(a);
              a = f.element(g(a));
              if (R(a))
                return O.$$setClassImmediately(a, c, b, d);
              var h, k = a.data('$$animateClasses'), l = !!k;
              k || (k = { classes: {} });
              h = k.classes;
              c = aa(c) ? c : c.split(' ');
              n(c, function (a) {
                a && a.length && (h[a] = !0);
              });
              b = aa(b) ? b : b.split(' ');
              n(b, function (a) {
                a && a.length && (h[a] = !1);
              });
              if (l)
                return d && k.options && (k.options = f.extend(k.options || {}, d)), k.promise;
              a.data('$$animateClasses', k = {
                classes: h,
                options: d
              });
              return k.promise = D(function (e) {
                var l = a.parent(), b = g(a), c = b.parentNode;
                if (!c || c.$$NG_REMOVED || b.$$NG_REMOVED)
                  e();
                else {
                  b = a.data('$$animateClasses');
                  a.removeData('$$animateClasses');
                  var c = a.data('$$ngAnimateState') || {}, d = S(a, b, c.active);
                  return d ? G('setClass', d, a, l, null, function () {
                    d[0] && O.$$addClassImmediately(a, d[0]);
                    d[1] && O.$$removeClassImmediately(a, d[1]);
                  }, b.options, e) : e();
                }
              });
            },
            cancel: function (a) {
              a.$$cancelFn();
            },
            enabled: function (a, c) {
              switch (arguments.length) {
              case 2:
                if (a)
                  B(c);
                else {
                  var b = c.data('$$ngAnimateState') || {};
                  b.disabled = !0;
                  c.data('$$ngAnimateState', b);
                }
                break;
              case 1:
                r.disabled = !a;
                break;
              default:
                a = !r.disabled;
              }
              return !!a;
            }
          };
        }
      ]);
      C.register('', [
        '$window',
        '$sniffer',
        '$timeout',
        '$$animateReflow',
        function (r, C, M, Y) {
          function y() {
            b || (b = Y(function () {
              c = [];
              b = null;
              x = {};
            }));
          }
          function H(a, e) {
            b && b();
            c.push(e);
            b = Y(function () {
              n(c, function (a) {
                a();
              });
              c = [];
              b = null;
              x = {};
            });
          }
          function P(a, e) {
            var b = g(a);
            a = f.element(b);
            k.push(a);
            b = Date.now() + e;
            b <= h || (M.cancel(d), h = b, d = M(function () {
              X(k);
              k = [];
            }, e, !1));
          }
          function X(a) {
            n(a, function (a) {
              (a = a.data('$$ngAnimateCSS3Data')) && n(a.closeAnimationFns, function (a) {
                a();
              });
            });
          }
          function Z(a, e) {
            var b = e ? x[e] : null;
            if (!b) {
              var c = 0, d = 0, f = 0, g = 0;
              n(a, function (a) {
                if (1 == a.nodeType) {
                  a = r.getComputedStyle(a) || {};
                  c = Math.max(Q(a[z + 'Duration']), c);
                  d = Math.max(Q(a[z + 'Delay']), d);
                  g = Math.max(Q(a[K + 'Delay']), g);
                  var e = Q(a[K + 'Duration']);
                  0 < e && (e *= parseInt(a[K + 'IterationCount'], 10) || 1);
                  f = Math.max(e, f);
                }
              });
              b = {
                total: 0,
                transitionDelay: d,
                transitionDuration: c,
                animationDelay: g,
                animationDuration: f
              };
              e && (x[e] = b);
            }
            return b;
          }
          function Q(a) {
            var e = 0;
            a = ea(a) ? a.split(/\s*,\s*/) : [];
            n(a, function (a) {
              e = Math.max(parseFloat(a) || 0, e);
            });
            return e;
          }
          function R(b, e, c, d) {
            b = 0 <= [
              'ng-enter',
              'ng-leave',
              'ng-move'
            ].indexOf(c);
            var f, p = e.parent(), h = p.data('$$ngAnimateKey');
            h || (p.data('$$ngAnimateKey', ++a), h = a);
            f = h + '-' + g(e).getAttribute('class');
            var p = f + ' ' + c, h = x[p] ? ++x[p].total : 0, m = {};
            if (0 < h) {
              var n = c + '-stagger', m = f + ' ' + n;
              (f = !x[m]) && u.addClass(e, n);
              m = Z(e, m);
              f && u.removeClass(e, n);
            }
            u.addClass(e, c);
            var n = e.data('$$ngAnimateCSS3Data') || {}, k = Z(e, p);
            f = k.transitionDuration;
            k = k.animationDuration;
            if (b && 0 === f && 0 === k)
              return u.removeClass(e, c), !1;
            c = d || b && 0 < f;
            b = 0 < k && 0 < m.animationDelay && 0 === m.animationDuration;
            e.data('$$ngAnimateCSS3Data', {
              stagger: m,
              cacheKey: p,
              running: n.running || 0,
              itemIndex: h,
              blockTransition: c,
              closeAnimationFns: n.closeAnimationFns || []
            });
            p = g(e);
            c && (I(p, !0), d && e.css(d));
            b && (p.style[K + 'PlayState'] = 'paused');
            return !0;
          }
          function D(a, e, b, c, d) {
            function f() {
              e.off(D, h);
              u.removeClass(e, k);
              u.removeClass(e, t);
              z && M.cancel(z);
              G(e, b);
              var a = g(e), c;
              for (c in s)
                a.style.removeProperty(s[c]);
            }
            function h(a) {
              a.stopPropagation();
              var b = a.originalEvent || a;
              a = b.$manualTimeStamp || b.timeStamp || Date.now();
              b = parseFloat(b.elapsedTime.toFixed(3));
              Math.max(a - H, 0) >= C && b >= x && c();
            }
            var m = g(e);
            a = e.data('$$ngAnimateCSS3Data');
            if (-1 != m.getAttribute('class').indexOf(b) && a) {
              var k = '', t = '';
              n(b.split(' '), function (a, b) {
                var e = (0 < b ? ' ' : '') + a;
                k += e + '-active';
                t += e + '-pending';
              });
              var s = [], q = a.itemIndex, v = a.stagger, r = 0;
              if (0 < q) {
                r = 0;
                0 < v.transitionDelay && 0 === v.transitionDuration && (r = v.transitionDelay * q);
                var y = 0;
                0 < v.animationDelay && 0 === v.animationDuration && (y = v.animationDelay * q, s.push(B + 'animation-play-state'));
                r = Math.round(100 * Math.max(r, y)) / 100;
              }
              r || (u.addClass(e, k), a.blockTransition && I(m, !1));
              var F = Z(e, a.cacheKey + ' ' + k), x = Math.max(F.transitionDuration, F.animationDuration);
              if (0 === x)
                u.removeClass(e, k), G(e, b), c();
              else {
                !r && d && (F.transitionDuration || (e.css('transition', F.animationDuration + 's linear all'), s.push('transition')), e.css(d));
                var q = Math.max(F.transitionDelay, F.animationDelay), C = 1000 * q;
                0 < s.length && (v = m.getAttribute('style') || '', ';' !== v.charAt(v.length - 1) && (v += ';'), m.setAttribute('style', v + ' '));
                var H = Date.now(), D = V + ' ' + $, q = 1000 * (r + 1.5 * (q + x)), z;
                0 < r && (u.addClass(e, t), z = M(function () {
                  z = null;
                  0 < F.transitionDuration && I(m, !1);
                  0 < F.animationDuration && (m.style[K + 'PlayState'] = '');
                  u.addClass(e, k);
                  u.removeClass(e, t);
                  d && (0 === F.transitionDuration && e.css('transition', F.animationDuration + 's linear all'), e.css(d), s.push('transition'));
                }, 1000 * r, !1));
                e.on(D, h);
                a.closeAnimationFns.push(function () {
                  f();
                  c();
                });
                a.running++;
                P(e, q);
                return f;
              }
            } else
              c();
          }
          function I(a, b) {
            a.style[z + 'Property'] = b ? 'none' : '';
          }
          function S(a, b, c, d) {
            if (R(a, b, c, d))
              return function (a) {
                a && G(b, c);
              };
          }
          function T(a, b, c, d, f) {
            if (b.data('$$ngAnimateCSS3Data'))
              return D(a, b, c, d, f);
            G(b, c);
            d();
          }
          function U(a, b, c, d, f) {
            var g = S(a, b, c, f.from);
            if (g) {
              var h = g;
              H(b, function () {
                h = T(a, b, c, d, f.to);
              });
              return function (a) {
                (h || t)(a);
              };
            }
            y();
            d();
          }
          function G(a, b) {
            u.removeClass(a, b);
            var c = a.data('$$ngAnimateCSS3Data');
            c && (c.running && c.running--, c.running && 0 !== c.running || a.removeData('$$ngAnimateCSS3Data'));
          }
          function q(a, b) {
            var c = '';
            a = aa(a) ? a : a.split(/\s+/);
            n(a, function (a, d) {
              a && 0 < a.length && (c += (0 < d ? ' ' : '') + a + b);
            });
            return c;
          }
          var B = '', z, $, K, V;
          N.ontransitionend === W && N.onwebkittransitionend !== W ? (B = '-webkit-', z = 'WebkitTransition', $ = 'webkitTransitionEnd transitionend') : (z = 'transition', $ = 'transitionend');
          N.onanimationend === W && N.onwebkitanimationend !== W ? (B = '-webkit-', K = 'WebkitAnimation', V = 'webkitAnimationEnd animationend') : (K = 'animation', V = 'animationend');
          var x = {}, a = 0, c = [], b, d = null, h = 0, k = [];
          return {
            animate: function (a, b, c, d, f, g) {
              g = g || {};
              g.from = c;
              g.to = d;
              return U('animate', a, b, f, g);
            },
            enter: function (a, b, c) {
              c = c || {};
              return U('enter', a, 'ng-enter', b, c);
            },
            leave: function (a, b, c) {
              c = c || {};
              return U('leave', a, 'ng-leave', b, c);
            },
            move: function (a, b, c) {
              c = c || {};
              return U('move', a, 'ng-move', b, c);
            },
            beforeSetClass: function (a, b, c, d, f) {
              f = f || {};
              b = q(c, '-remove') + ' ' + q(b, '-add');
              if (f = S('setClass', a, b, f.from))
                return H(a, d), f;
              y();
              d();
            },
            beforeAddClass: function (a, b, c, d) {
              d = d || {};
              if (b = S('addClass', a, q(b, '-add'), d.from))
                return H(a, c), b;
              y();
              c();
            },
            beforeRemoveClass: function (a, b, c, d) {
              d = d || {};
              if (b = S('removeClass', a, q(b, '-remove'), d.from))
                return H(a, c), b;
              y();
              c();
            },
            setClass: function (a, b, c, d, f) {
              f = f || {};
              c = q(c, '-remove');
              b = q(b, '-add');
              return T('setClass', a, c + ' ' + b, d, f.to);
            },
            addClass: function (a, b, c, d) {
              d = d || {};
              return T('addClass', a, q(b, '-add'), c, d.to);
            },
            removeClass: function (a, b, c, d) {
              d = d || {};
              return T('removeClass', a, q(b, '-remove'), c, d.to);
            }
          };
        }
      ]);
    }
  ]);
}(window, window.angular));
//# sourceMappingURL=angular-animate.min.js.map
/*
 AngularJS v1.3.8
 (c) 2010-2014 Google, Inc. http://angularjs.org
 License: MIT
*/
(function (n, h, p) {
  'use strict';
  function E(a) {
    var d = [];
    s(d, h.noop).chars(a);
    return d.join('');
  }
  function g(a) {
    var d = {};
    a = a.split(',');
    var c;
    for (c = 0; c < a.length; c++)
      d[a[c]] = !0;
    return d;
  }
  function F(a, d) {
    function c(a, b, c, l) {
      b = h.lowercase(b);
      if (t[b])
        for (; f.last() && u[f.last()];)
          e('', f.last());
      v[b] && f.last() == b && e('', b);
      (l = w[b] || !!l) || f.push(b);
      var m = {};
      c.replace(G, function (a, b, d, c, e) {
        m[b] = r(d || c || e || '');
      });
      d.start && d.start(b, m, l);
    }
    function e(a, b) {
      var c = 0, e;
      if (b = h.lowercase(b))
        for (c = f.length - 1; 0 <= c && f[c] != b; c--);
      if (0 <= c) {
        for (e = f.length - 1; e >= c; e--)
          d.end && d.end(f[e]);
        f.length = c;
      }
    }
    'string' !== typeof a && (a = null === a || 'undefined' === typeof a ? '' : '' + a);
    var b, k, f = [], m = a, l;
    for (f.last = function () {
        return f[f.length - 1];
      }; a;) {
      l = '';
      k = !0;
      if (f.last() && x[f.last()])
        a = a.replace(new RegExp('(.*)<\\s*\\/\\s*' + f.last() + '[^>]*>', 'i'), function (a, b) {
          b = b.replace(H, '$1').replace(I, '$1');
          d.chars && d.chars(r(b));
          return '';
        }), e('', f.last());
      else {
        if (0 === a.indexOf('<!--'))
          b = a.indexOf('--', 4), 0 <= b && a.lastIndexOf('-->', b) === b && (d.comment && d.comment(a.substring(4, b)), a = a.substring(b + 3), k = !1);
        else if (y.test(a)) {
          if (b = a.match(y))
            a = a.replace(b[0], ''), k = !1;
        } else if (J.test(a)) {
          if (b = a.match(z))
            a = a.substring(b[0].length), b[0].replace(z, e), k = !1;
        } else
          K.test(a) && ((b = a.match(A)) ? (b[4] && (a = a.substring(b[0].length), b[0].replace(A, c)), k = !1) : (l += '<', a = a.substring(1)));
        k && (b = a.indexOf('<'), l += 0 > b ? a : a.substring(0, b), a = 0 > b ? '' : a.substring(b), d.chars && d.chars(r(l)));
      }
      if (a == m)
        throw L('badparse', a);
      m = a;
    }
    e();
  }
  function r(a) {
    if (!a)
      return '';
    var d = M.exec(a);
    a = d[1];
    var c = d[3];
    if (d = d[2])
      q.innerHTML = d.replace(/</g, '&lt;'), d = 'textContent' in q ? q.textContent : q.innerText;
    return a + d + c;
  }
  function B(a) {
    return a.replace(/&/g, '&amp;').replace(N, function (a) {
      var c = a.charCodeAt(0);
      a = a.charCodeAt(1);
      return '&#' + (1024 * (c - 55296) + (a - 56320) + 65536) + ';';
    }).replace(O, function (a) {
      return '&#' + a.charCodeAt(0) + ';';
    }).replace(/</g, '&lt;').replace(/>/g, '&gt;');
  }
  function s(a, d) {
    var c = !1, e = h.bind(a, a.push);
    return {
      start: function (a, k, f) {
        a = h.lowercase(a);
        !c && x[a] && (c = a);
        c || !0 !== C[a] || (e('<'), e(a), h.forEach(k, function (c, f) {
          var k = h.lowercase(f), g = 'img' === a && 'src' === k || 'background' === k;
          !0 !== P[k] || !0 === D[k] && !d(c, g) || (e(' '), e(f), e('="'), e(B(c)), e('"'));
        }), e(f ? '/>' : '>'));
      },
      end: function (a) {
        a = h.lowercase(a);
        c || !0 !== C[a] || (e('</'), e(a), e('>'));
        a == c && (c = !1);
      },
      chars: function (a) {
        c || e(B(a));
      }
    };
  }
  var L = h.$$minErr('$sanitize'), A = /^<((?:[a-zA-Z])[\w:-]*)((?:\s+[\w:-]+(?:\s*=\s*(?:(?:"[^"]*")|(?:'[^']*')|[^>\s]+))?)*)\s*(\/?)\s*(>?)/, z = /^<\/\s*([\w:-]+)[^>]*>/, G = /([\w:-]+)(?:\s*=\s*(?:(?:"((?:[^"])*)")|(?:'((?:[^'])*)')|([^>\s]+)))?/g, K = /^</, J = /^<\//, H = /\x3c!--(.*?)--\x3e/g, y = /<!DOCTYPE([^>]*?)>/i, I = /<!\[CDATA\[(.*?)]]\x3e/g, N = /[\uD800-\uDBFF][\uDC00-\uDFFF]/g, O = /([^\#-~| |!])/g, w = g('area,br,col,hr,img,wbr');
  n = g('colgroup,dd,dt,li,p,tbody,td,tfoot,th,thead,tr');
  p = g('rp,rt');
  var v = h.extend({}, p, n), t = h.extend({}, n, g('address,article,aside,blockquote,caption,center,del,dir,div,dl,figure,figcaption,footer,h1,h2,h3,h4,h5,h6,header,hgroup,hr,ins,map,menu,nav,ol,pre,script,section,table,ul')), u = h.extend({}, p, g('a,abbr,acronym,b,bdi,bdo,big,br,cite,code,del,dfn,em,font,i,img,ins,kbd,label,map,mark,q,ruby,rp,rt,s,samp,small,span,strike,strong,sub,sup,time,tt,u,var'));
  n = g('animate,animateColor,animateMotion,animateTransform,circle,defs,desc,ellipse,font-face,font-face-name,font-face-src,g,glyph,hkern,image,linearGradient,line,marker,metadata,missing-glyph,mpath,path,polygon,polyline,radialGradient,rect,set,stop,svg,switch,text,title,tspan,use');
  var x = g('script,style'), C = h.extend({}, w, t, u, v, n), D = g('background,cite,href,longdesc,src,usemap,xlink:href');
  n = g('abbr,align,alt,axis,bgcolor,border,cellpadding,cellspacing,class,clear,color,cols,colspan,compact,coords,dir,face,headers,height,hreflang,hspace,ismap,lang,language,nohref,nowrap,rel,rev,rows,rowspan,rules,scope,scrolling,shape,size,span,start,summary,target,title,type,valign,value,vspace,width');
  p = g('accent-height,accumulate,additive,alphabetic,arabic-form,ascent,attributeName,attributeType,baseProfile,bbox,begin,by,calcMode,cap-height,class,color,color-rendering,content,cx,cy,d,dx,dy,descent,display,dur,end,fill,fill-rule,font-family,font-size,font-stretch,font-style,font-variant,font-weight,from,fx,fy,g1,g2,glyph-name,gradientUnits,hanging,height,horiz-adv-x,horiz-origin-x,ideographic,k,keyPoints,keySplines,keyTimes,lang,marker-end,marker-mid,marker-start,markerHeight,markerUnits,markerWidth,mathematical,max,min,offset,opacity,orient,origin,overline-position,overline-thickness,panose-1,path,pathLength,points,preserveAspectRatio,r,refX,refY,repeatCount,repeatDur,requiredExtensions,requiredFeatures,restart,rotate,rx,ry,slope,stemh,stemv,stop-color,stop-opacity,strikethrough-position,strikethrough-thickness,stroke,stroke-dasharray,stroke-dashoffset,stroke-linecap,stroke-linejoin,stroke-miterlimit,stroke-opacity,stroke-width,systemLanguage,target,text-anchor,to,transform,type,u1,u2,underline-position,underline-thickness,unicode,unicode-range,units-per-em,values,version,viewBox,visibility,width,widths,x,x-height,x1,x2,xlink:actuate,xlink:arcrole,xlink:role,xlink:show,xlink:title,xlink:type,xml:base,xml:lang,xml:space,xmlns,xmlns:xlink,y,y1,y2,zoomAndPan');
  var P = h.extend({}, D, p, n), q = document.createElement('pre'), M = /^(\s*)([\s\S]*?)(\s*)$/;
  h.module('ngSanitize', []).provider('$sanitize', function () {
    this.$get = [
      '$$sanitizeUri',
      function (a) {
        return function (d) {
          var c = [];
          F(d, s(c, function (c, b) {
            return !/^unsafe/.test(a(c, b));
          }));
          return c.join('');
        };
      }
    ];
  });
  h.module('ngSanitize').filter('linky', [
    '$sanitize',
    function (a) {
      var d = /((ftp|https?):\/\/|(www\.)|(mailto:)?[A-Za-z0-9._%+-]+@)\S*[^\s.;,(){}<>"\u201d\u2019]/, c = /^mailto:/;
      return function (e, b) {
        function k(a) {
          a && g.push(E(a));
        }
        function f(a, c) {
          g.push('<a ');
          h.isDefined(b) && g.push('target="', b, '" ');
          g.push('href="', a.replace(/"/g, '&quot;'), '">');
          k(c);
          g.push('</a>');
        }
        if (!e)
          return e;
        for (var m, l = e, g = [], n, p; m = l.match(d);)
          n = m[0], m[2] || m[4] || (n = (m[3] ? 'http://' : 'mailto:') + n), p = m.index, k(l.substr(0, p)), f(n, m[0].replace(c, '')), l = l.substring(p + m[0].length);
        k(l);
        return a(g.join(''));
      };
    }
  ]);
}(window, window.angular));
//# sourceMappingURL=angular-sanitize.min.js.map
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