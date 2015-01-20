/*
 AngularJS v1.3.4
 (c) 2010-2014 Google, Inc. http://angularjs.org
 License: MIT
*/
(function (U, V, u) {
  'use strict';
  function z(b) {
    return function () {
      var a = arguments[0], c;
      c = '[' + (b ? b + ':' : '') + a + '] http://errors.angularjs.org/1.3.4/' + (b ? b + '/' : '') + a;
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
  function Ra(b) {
    if (null == b || Sa(b))
      return !1;
    var a = b.length;
    return b.nodeType === na && a ? !0 : I(b) || D(b) || 0 === a || 'number' === typeof a && 0 < a && a - 1 in b;
  }
  function r(b, a, c) {
    var d, e;
    if (b)
      if (F(b))
        for (d in b)
          'prototype' == d || 'length' == d || 'name' == d || b.hasOwnProperty && !b.hasOwnProperty(d) || a.call(c, b[d], d, b);
      else if (D(b) || Ra(b)) {
        var f = 'object' !== typeof b;
        d = 0;
        for (e = b.length; d < e; d++)
          (f || d in b) && a.call(c, b[d], d, b);
      } else if (b.forEach && b.forEach !== r)
        b.forEach(a, c, b);
      else
        for (d in b)
          b.hasOwnProperty(d) && a.call(c, b[d], d, b);
    return b;
  }
  function Bd(b, a, c) {
    for (var d = Object.keys(b).sort(), e = 0; e < d.length; e++)
      a.call(c, b[d[e]], d[e]);
    return d;
  }
  function kc(b) {
    return function (a, c) {
      b(c, a);
    };
  }
  function Cd() {
    return ++kb;
  }
  function lc(b, a) {
    a ? b.$$hashKey = a : delete b.$$hashKey;
  }
  function C(b) {
    for (var a = b.$$hashKey, c = 1, d = arguments.length; c < d; c++) {
      var e = arguments[c];
      if (e)
        for (var f = Object.keys(e), g = 0, h = f.length; g < h; g++) {
          var k = f[g];
          b[k] = e[k];
        }
    }
    lc(b, a);
    return b;
  }
  function $(b) {
    return parseInt(b, 10);
  }
  function x() {
  }
  function oa(b) {
    return b;
  }
  function ca(b) {
    return function () {
      return b;
    };
  }
  function G(b) {
    return 'undefined' === typeof b;
  }
  function y(b) {
    return 'undefined' !== typeof b;
  }
  function K(b) {
    return null !== b && 'object' === typeof b;
  }
  function I(b) {
    return 'string' === typeof b;
  }
  function X(b) {
    return 'number' === typeof b;
  }
  function fa(b) {
    return '[object Date]' === Ja.call(b);
  }
  function F(b) {
    return 'function' === typeof b;
  }
  function lb(b) {
    return '[object RegExp]' === Ja.call(b);
  }
  function Sa(b) {
    return b && b.window === b;
  }
  function Ta(b) {
    return b && b.$evalAsync && b.$watch;
  }
  function Ua(b) {
    return 'boolean' === typeof b;
  }
  function mc(b) {
    return !(!b || !(b.nodeName || b.prop && b.attr && b.find));
  }
  function Dd(b) {
    var a = {};
    b = b.split(',');
    var c;
    for (c = 0; c < b.length; c++)
      a[b[c]] = !0;
    return a;
  }
  function ta(b) {
    return R(b.nodeName || b[0] && b[0].nodeName);
  }
  function Va(b, a) {
    var c = b.indexOf(a);
    0 <= c && b.splice(c, 1);
    return a;
  }
  function Ca(b, a, c, d) {
    if (Sa(b) || Ta(b))
      throw Wa('cpws');
    if (a) {
      if (b === a)
        throw Wa('cpi');
      c = c || [];
      d = d || [];
      if (K(b)) {
        var e = c.indexOf(b);
        if (-1 !== e)
          return d[e];
        c.push(b);
        d.push(a);
      }
      if (D(b))
        for (var f = a.length = 0; f < b.length; f++)
          e = Ca(b[f], null, c, d), K(b[f]) && (c.push(b[f]), d.push(e)), a.push(e);
      else {
        var g = a.$$hashKey;
        D(a) ? a.length = 0 : r(a, function (b, c) {
          delete a[c];
        });
        for (f in b)
          b.hasOwnProperty(f) && (e = Ca(b[f], null, c, d), K(b[f]) && (c.push(b[f]), d.push(e)), a[f] = e);
        lc(a, g);
      }
    } else if (a = b)
      D(b) ? a = Ca(b, [], c, d) : fa(b) ? a = new Date(b.getTime()) : lb(b) ? (a = new RegExp(b.source, b.toString().match(/[^\/]*$/)[0]), a.lastIndex = b.lastIndex) : K(b) && (e = Object.create(Object.getPrototypeOf(b)), a = Ca(b, e, c, d));
    return a;
  }
  function ua(b, a) {
    if (D(b)) {
      a = a || [];
      for (var c = 0, d = b.length; c < d; c++)
        a[c] = b[c];
    } else if (K(b))
      for (c in a = a || {}, b)
        if ('$' !== c.charAt(0) || '$' !== c.charAt(1))
          a[c] = b[c];
    return a || b;
  }
  function pa(b, a) {
    if (b === a)
      return !0;
    if (null === b || null === a)
      return !1;
    if (b !== b && a !== a)
      return !0;
    var c = typeof b, d;
    if (c == typeof a && 'object' == c)
      if (D(b)) {
        if (!D(a))
          return !1;
        if ((c = b.length) == a.length) {
          for (d = 0; d < c; d++)
            if (!pa(b[d], a[d]))
              return !1;
          return !0;
        }
      } else {
        if (fa(b))
          return fa(a) ? pa(b.getTime(), a.getTime()) : !1;
        if (lb(b) && lb(a))
          return b.toString() == a.toString();
        if (Ta(b) || Ta(a) || Sa(b) || Sa(a) || D(a))
          return !1;
        c = {};
        for (d in b)
          if ('$' !== d.charAt(0) && !F(b[d])) {
            if (!pa(b[d], a[d]))
              return !1;
            c[d] = !0;
          }
        for (d in a)
          if (!c.hasOwnProperty(d) && '$' !== d.charAt(0) && a[d] !== u && !F(a[d]))
            return !1;
        return !0;
      }
    return !1;
  }
  function Xa(b, a, c) {
    return b.concat(Ya.call(a, c));
  }
  function nc(b, a) {
    var c = 2 < arguments.length ? Ya.call(arguments, 2) : [];
    return !F(a) || a instanceof RegExp ? a : c.length ? function () {
      return arguments.length ? a.apply(b, Xa(c, arguments, 0)) : a.apply(b, c);
    } : function () {
      return arguments.length ? a.apply(b, arguments) : a.call(b);
    };
  }
  function Ed(b, a) {
    var c = a;
    'string' === typeof b && '$' === b.charAt(0) && '$' === b.charAt(1) ? c = u : Sa(a) ? c = '$WINDOW' : a && V === a ? c = '$DOCUMENT' : Ta(a) && (c = '$SCOPE');
    return c;
  }
  function Za(b, a) {
    return 'undefined' === typeof b ? u : JSON.stringify(b, Ed, a ? '  ' : null);
  }
  function oc(b) {
    return I(b) ? JSON.parse(b) : b;
  }
  function va(b) {
    b = A(b).clone();
    try {
      b.empty();
    } catch (a) {
    }
    var c = A('<div>').append(b).html();
    try {
      return b[0].nodeType === mb ? R(c) : c.match(/^(<[^>]+>)/)[1].replace(/^<([\w\-]+)/, function (a, b) {
        return '<' + R(b);
      });
    } catch (d) {
      return R(c);
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
    r((b || '').split('&'), function (b) {
      b && (c = b.replace(/\+/g, '%20').split('='), d = pc(c[0]), y(d) && (b = y(c[1]) ? pc(c[1]) : !0, Jb.call(a, d) ? D(a[d]) ? a[d].push(b) : a[d] = [
        a[d],
        b
      ] : a[d] = b));
    });
    return a;
  }
  function Kb(b) {
    var a = [];
    r(b, function (b, d) {
      D(b) ? r(b, function (b) {
        a.push(Da(d, !0) + (!0 === b ? '' : '=' + Da(b, !0)));
      }) : a.push(Da(d, !0) + (!0 === b ? '' : '=' + Da(b, !0)));
    });
    return a.length ? a.join('&') : '';
  }
  function nb(b) {
    return Da(b, !0).replace(/%26/gi, '&').replace(/%3D/gi, '=').replace(/%2B/gi, '+');
  }
  function Da(b, a) {
    return encodeURIComponent(b).replace(/%40/gi, '@').replace(/%3A/gi, ':').replace(/%24/g, '$').replace(/%2C/gi, ',').replace(/%3B/gi, ';').replace(/%20/g, a ? '%20' : '+');
  }
  function Fd(b, a) {
    var c, d, e = ob.length;
    b = A(b);
    for (d = 0; d < e; ++d)
      if (c = ob[d] + a, I(c = b.attr(c)))
        return c;
    return null;
  }
  function Gd(b, a) {
    var c, d, e = {};
    r(ob, function (a) {
      a += 'app';
      !c && b.hasAttribute && b.hasAttribute(a) && (c = b, d = b.getAttribute(a));
    });
    r(ob, function (a) {
      a += 'app';
      var e;
      !c && (e = b.querySelector('[' + a.replace(':', '\\:') + ']')) && (c = e, d = e.getAttribute(a));
    });
    c && (e.strictDi = null !== Fd(c, 'strict-di'), a(c, d ? [d] : [], e));
  }
  function rc(b, a, c) {
    K(c) || (c = {});
    c = C({ strictDi: !1 }, c);
    var d = function () {
        b = A(b);
        if (b.injector()) {
          var d = b[0] === V ? 'document' : va(b);
          throw Wa('btstrpd', d.replace(/</, '&lt;').replace(/>/, '&gt;'));
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
        d = Lb(a, c.strictDi);
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
    U && e.test(U.name) && (c.debugInfoEnabled = !0, U.name = U.name.replace(e, ''));
    if (U && !f.test(U.name))
      return d();
    U.name = U.name.replace(f, '');
    ha.resumeBootstrap = function (b) {
      r(b, function (b) {
        a.push(b);
      });
      d();
    };
  }
  function Hd() {
    U.name = 'NG_ENABLE_DEBUG_INFO!' + U.name;
    U.location.reload();
  }
  function Id(b) {
    return ha.element(b).injector().get('$$testability');
  }
  function Mb(b, a) {
    a = a || '_';
    return b.replace(Jd, function (b, d) {
      return (d ? a : '') + b.toLowerCase();
    });
  }
  function Kd() {
    var b;
    sc || ((qa = U.jQuery) && qa.fn.on ? (A = qa, C(qa.fn, {
      scope: Ka.scope,
      isolateScope: Ka.isolateScope,
      controller: Ka.controller,
      injector: Ka.injector,
      inheritedData: Ka.inheritedData
    }), b = qa.cleanData, qa.cleanData = function (a) {
      var c;
      if (Nb)
        Nb = !1;
      else
        for (var d = 0, e; null != (e = a[d]); d++)
          (c = qa._data(e, 'events')) && c.$destroy && qa(e).triggerHandler('$destroy');
      b(a);
    }) : A = S, ha.element = A, sc = !0);
  }
  function Ob(b, a, c) {
    if (!b)
      throw Wa('areq', a || '?', c || 'required');
    return b;
  }
  function pb(b, a, c) {
    c && D(b) && (b = b[b.length - 1]);
    Ob(F(b), a, 'not a function, got ' + (b && 'object' === typeof b ? b.constructor.name || 'Object' : typeof b));
    return b;
  }
  function La(b, a) {
    if ('hasOwnProperty' === b)
      throw Wa('badname', a);
  }
  function tc(b, a, c) {
    if (!a)
      return b;
    a = a.split('.');
    for (var d, e = b, f = a.length, g = 0; g < f; g++)
      d = a[g], b && (b = (e = b)[d]);
    return !c && F(b) ? nc(e, b) : b;
  }
  function qb(b) {
    var a = b[0];
    b = b[b.length - 1];
    var c = [a];
    do {
      a = a.nextSibling;
      if (!a)
        break;
      c.push(a);
    } while (a !== b);
    return A(c);
  }
  function ia() {
    return Object.create(null);
  }
  function Ld(b) {
    function a(a, b, c) {
      return a[b] || (a[b] = c());
    }
    var c = z('$injector'), d = z('ng');
    b = a(b, 'angular', Object);
    b.$$minErr = b.$$minErr || z;
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
              return t;
            };
          }
          if (!g)
            throw c('nomod', f);
          var b = [], d = [], e = [], s = a('$injector', 'invoke', 'push', d), t = {
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
              config: s,
              run: function (a) {
                e.push(a);
                return this;
              }
            };
          h && s(h);
          return t;
        });
      };
    });
  }
  function Md(b) {
    C(b, {
      bootstrap: rc,
      copy: Ca,
      extend: C,
      equals: pa,
      element: A,
      forEach: r,
      injector: Lb,
      noop: x,
      bind: nc,
      toJson: Za,
      fromJson: oc,
      identity: oa,
      isUndefined: G,
      isDefined: y,
      isString: I,
      isFunction: F,
      isObject: K,
      isNumber: X,
      isElement: mc,
      isArray: D,
      version: Nd,
      isDate: fa,
      lowercase: R,
      uppercase: rb,
      callbacks: { counter: 0 },
      getTestability: Id,
      $$minErr: z,
      $$csp: $a,
      reloadWithDebugInfo: Hd
    });
    ab = Ld(U);
    try {
      ab('ngLocale');
    } catch (a) {
      ab('ngLocale', []).provider('$locale', Od);
    }
    ab('ng', ['ngLocale'], [
      '$provide',
      function (a) {
        a.provider({ $$sanitizeUri: Pd });
        a.provider('$compile', uc).directive({
          a: Qd,
          input: vc,
          textarea: vc,
          form: Rd,
          script: Sd,
          select: Td,
          style: Ud,
          option: Vd,
          ngBind: Wd,
          ngBindHtml: Xd,
          ngBindTemplate: Yd,
          ngClass: Zd,
          ngClassEven: $d,
          ngClassOdd: ae,
          ngCloak: be,
          ngController: ce,
          ngForm: de,
          ngHide: ee,
          ngIf: fe,
          ngInclude: ge,
          ngInit: he,
          ngNonBindable: ie,
          ngPluralize: je,
          ngRepeat: ke,
          ngShow: le,
          ngStyle: me,
          ngSwitch: ne,
          ngSwitchWhen: oe,
          ngSwitchDefault: pe,
          ngOptions: qe,
          ngTransclude: re,
          ngModel: se,
          ngList: te,
          ngChange: ue,
          pattern: wc,
          ngPattern: wc,
          required: xc,
          ngRequired: xc,
          minlength: yc,
          ngMinlength: yc,
          maxlength: zc,
          ngMaxlength: zc,
          ngValue: ve,
          ngModelOptions: we
        }).directive({ ngInclude: xe }).directive(sb).directive(Ac);
        a.provider({
          $anchorScroll: ye,
          $animate: ze,
          $browser: Ae,
          $cacheFactory: Be,
          $controller: Ce,
          $document: De,
          $exceptionHandler: Ee,
          $filter: Bc,
          $interpolate: Fe,
          $interval: Ge,
          $http: He,
          $httpBackend: Ie,
          $location: Je,
          $log: Ke,
          $parse: Le,
          $rootScope: Me,
          $q: Ne,
          $$q: Oe,
          $sce: Pe,
          $sceDelegate: Qe,
          $sniffer: Re,
          $templateCache: Se,
          $templateRequest: Te,
          $$testability: Ue,
          $timeout: Ve,
          $window: We,
          $$rAF: Xe,
          $$asyncCallback: Ye
        });
      }
    ]);
  }
  function bb(b) {
    return b.replace(Ze, function (a, b, d, e) {
      return e ? d.toUpperCase() : d;
    }).replace($e, 'Moz$1');
  }
  function Cc(b) {
    b = b.nodeType;
    return b === na || !b || 9 === b;
  }
  function Dc(b, a) {
    var c, d, e = a.createDocumentFragment(), f = [];
    if (Pb.test(b)) {
      c = c || e.appendChild(a.createElement('div'));
      d = (af.exec(b) || [
        '',
        ''
      ])[1].toLowerCase();
      d = ja[d] || ja._default;
      c.innerHTML = d[1] + b.replace(bf, '<$1></$2>') + d[2];
      for (d = d[0]; d--;)
        c = c.lastChild;
      f = Xa(f, c.childNodes);
      c = e.firstChild;
      c.textContent = '';
    } else
      f.push(a.createTextNode(b));
    e.textContent = '';
    e.innerHTML = '';
    r(f, function (a) {
      e.appendChild(a);
    });
    return e;
  }
  function S(b) {
    if (b instanceof S)
      return b;
    var a;
    I(b) && (b = P(b), a = !0);
    if (!(this instanceof S)) {
      if (a && '<' != b.charAt(0))
        throw Qb('nosel');
      return new S(b);
    }
    if (a) {
      a = V;
      var c;
      b = (c = cf.exec(b)) ? [a.createElement(c[1])] : (c = Dc(b, a)) ? c.childNodes : [];
    }
    Ec(this, b);
  }
  function Rb(b) {
    return b.cloneNode(!0);
  }
  function tb(b, a) {
    a || ub(b);
    if (b.querySelectorAll)
      for (var c = b.querySelectorAll('*'), d = 0, e = c.length; d < e; d++)
        ub(c[d]);
  }
  function Fc(b, a, c, d) {
    if (y(d))
      throw Qb('offargs');
    var e = (d = vb(b)) && d.events, f = d && d.handle;
    if (f)
      if (a)
        r(a.split(' '), function (a) {
          if (y(c)) {
            var d = e[a];
            Va(d || [], c);
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
  function ub(b, a) {
    var c = b.ng339, d = c && wb[c];
    d && (a ? delete d.data[a] : (d.handle && (d.events.$destroy && d.handle({}, '$destroy'), Fc(b)), delete wb[c], b.ng339 = u));
  }
  function vb(b, a) {
    var c = b.ng339, c = c && wb[c];
    a && !c && (b.ng339 = c = ++df, c = wb[c] = {
      events: {},
      data: {},
      handle: u
    });
    return c;
  }
  function Sb(b, a, c) {
    if (Cc(b)) {
      var d = y(c), e = !d && a && !K(a), f = !a;
      b = (b = vb(b, !e)) && b.data;
      if (d)
        b[a] = c;
      else {
        if (f)
          return b;
        if (e)
          return b && b[a];
        C(b, a);
      }
    }
  }
  function Tb(b, a) {
    return b.getAttribute ? -1 < (' ' + (b.getAttribute('class') || '') + ' ').replace(/[\n\t]/g, ' ').indexOf(' ' + a + ' ') : !1;
  }
  function Ub(b, a) {
    a && b.setAttribute && r(a.split(' '), function (a) {
      b.setAttribute('class', P((' ' + (b.getAttribute('class') || '') + ' ').replace(/[\n\t]/g, ' ').replace(' ' + P(a) + ' ', ' ')));
    });
  }
  function Vb(b, a) {
    if (a && b.setAttribute) {
      var c = (' ' + (b.getAttribute('class') || '') + ' ').replace(/[\n\t]/g, ' ');
      r(a.split(' '), function (a) {
        a = P(a);
        -1 === c.indexOf(' ' + a + ' ') && (c += a + ' ');
      });
      b.setAttribute('class', P(c));
    }
  }
  function Ec(b, a) {
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
  function Gc(b, a) {
    return xb(b, '$' + (a || 'ngController') + 'Controller');
  }
  function xb(b, a, c) {
    9 == b.nodeType && (b = b.documentElement);
    for (a = D(a) ? a : [a]; b;) {
      for (var d = 0, e = a.length; d < e; d++)
        if ((c = A.data(b, a[d])) !== u)
          return c;
      b = b.parentNode || 11 === b.nodeType && b.host;
    }
  }
  function Hc(b) {
    for (tb(b, !0); b.firstChild;)
      b.removeChild(b.firstChild);
  }
  function Ic(b, a) {
    a || tb(b);
    var c = b.parentNode;
    c && c.removeChild(b);
  }
  function ef(b, a) {
    a = a || U;
    if ('complete' === a.document.readyState)
      a.setTimeout(b);
    else
      A(a).on('load', b);
  }
  function Jc(b, a) {
    var c = yb[a.toLowerCase()];
    return c && Kc[ta(b)] && c;
  }
  function ff(b, a) {
    var c = b.nodeName;
    return ('INPUT' === c || 'TEXTAREA' === c) && Lc[a];
  }
  function gf(b, a) {
    var c = function (c, e) {
      c.isDefaultPrevented = function () {
        return c.defaultPrevented;
      };
      var f = a[e || c.type], g = f ? f.length : 0;
      if (g) {
        if (G(c.immediatePropagationStopped)) {
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
        1 < g && (f = ua(f));
        for (var k = 0; k < g; k++)
          c.isImmediatePropagationStopped() || f[k].call(b, c);
      }
    };
    c.elem = b;
    return c;
  }
  function Ma(b, a) {
    var c = b && b.$$hashKey;
    if (c)
      return 'function' === typeof c && (c = b.$$hashKey()), c;
    c = typeof b;
    return c = 'function' == c || 'object' == c && null !== b ? b.$$hashKey = c + ':' + (a || Cd)() : c + ':' + b;
  }
  function cb(b, a) {
    if (a) {
      var c = 0;
      this.nextUid = function () {
        return ++c;
      };
    }
    r(b, this.put, this);
  }
  function hf(b) {
    return (b = b.toString().replace(Mc, '').match(Nc)) ? 'function(' + (b[1] || '').replace(/[\s\r\n]+/, ' ') + ')' : 'fn';
  }
  function Wb(b, a, c) {
    var d;
    if ('function' === typeof b) {
      if (!(d = b.$inject)) {
        d = [];
        if (b.length) {
          if (a)
            throw I(c) && c || (c = b.name || hf(b)), Ea('strictdi', c);
          a = b.toString().replace(Mc, '');
          a = a.match(Nc);
          r(a[1].split(jf), function (a) {
            a.replace(kf, function (a, b, c) {
              d.push(c);
            });
          });
        }
        b.$inject = d;
      }
    } else
      D(b) ? (a = b.length - 1, pb(b[a], 'fn'), d = b.slice(0, a)) : pb(b, 'fn', !0);
    return d;
  }
  function Lb(b, a) {
    function c(a) {
      return function (b, c) {
        if (K(b))
          r(b, kc(a));
        else
          return a(b, c);
      };
    }
    function d(a, b) {
      La(a, 'service');
      if (F(b) || D(b))
        b = s.instantiate(b);
      if (!b.$get)
        throw Ea('pget', a);
      return p[a + 'Provider'] = b;
    }
    function e(a, b) {
      return function () {
        var c = q.invoke(b, this, u, a);
        if (G(c))
          throw Ea('undef', a);
        return c;
      };
    }
    function f(a, b, c) {
      return d(a, { $get: !1 !== c ? e(a, b) : b });
    }
    function g(a) {
      var b = [], c;
      r(a, function (a) {
        function d(a) {
          var b, c;
          b = 0;
          for (c = a.length; b < c; b++) {
            var e = a[b], f = s.get(e[0]);
            f[e[1]].apply(f, e[2]);
          }
        }
        if (!m.get(a)) {
          m.put(a, !0);
          try {
            I(a) ? (c = ab(a), b = b.concat(g(c.requires)).concat(c._runBlocks), d(c._invokeQueue), d(c._configBlocks)) : F(a) ? b.push(s.invoke(a)) : D(a) ? b.push(s.invoke(a)) : pb(a, 'module');
          } catch (e) {
            throw D(a) && (a = a[a.length - 1]), e.message && e.stack && -1 == e.stack.indexOf(e.message) && (e = e.message + '\n' + e.stack), Ea('modulerr', a, e.stack || e.message || e);
          }
        }
      });
      return b;
    }
    function h(b, c) {
      function d(a) {
        if (b.hasOwnProperty(a)) {
          if (b[a] === k)
            throw Ea('cdep', a + ' <- ' + l.join(' <- '));
          return b[a];
        }
        try {
          return l.unshift(a), b[a] = k, b[a] = c(a);
        } catch (e) {
          throw b[a] === k && delete b[a], e;
        } finally {
          l.shift();
        }
      }
      function e(b, c, f, g) {
        'string' === typeof f && (g = f, f = null);
        var k = [];
        g = Wb(b, a, g);
        var h, l, q;
        l = 0;
        for (h = g.length; l < h; l++) {
          q = g[l];
          if ('string' !== typeof q)
            throw Ea('itkn', q);
          k.push(f && f.hasOwnProperty(q) ? f[q] : d(q));
        }
        D(b) && (b = b[h]);
        return b.apply(c, k);
      }
      return {
        invoke: e,
        instantiate: function (a, b, c) {
          var d = Object.create((D(a) ? a[a.length - 1] : a).prototype);
          a = e(a, d, b, c);
          return K(a) || F(a) ? a : d;
        },
        get: d,
        annotate: Wb,
        has: function (a) {
          return p.hasOwnProperty(a + 'Provider') || b.hasOwnProperty(a);
        }
      };
    }
    a = !0 === a;
    var k = {}, l = [], m = new cb([], !0), p = {
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
            return f(a, ca(b), !1);
          }),
          constant: c(function (a, b) {
            La(a, 'constant');
            p[a] = b;
            t[a] = b;
          }),
          decorator: function (a, b) {
            var c = s.get(a + 'Provider'), d = c.$get;
            c.$get = function () {
              var a = q.invoke(d, c);
              return q.invoke(b, null, { $delegate: a });
            };
          }
        }
      }, s = p.$injector = h(p, function () {
        throw Ea('unpr', l.join(' <- '));
      }), t = {}, q = t.$injector = h(t, function (a) {
        var b = s.get(a + 'Provider');
        return q.invoke(b.$get, b, u, a);
      });
    r(g(b), function (a) {
      q.invoke(a || x);
    });
    return q;
  }
  function ye() {
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
            if ('a' === ta(a))
              return b = a, !0;
          });
          return b;
        }
        function f(b) {
          if (b) {
            b.scrollIntoView();
            var c;
            c = g.yOffset;
            F(c) ? c = c() : mc(c) ? (c = c[0], c = 'fixed' !== a.getComputedStyle(c).position ? 0 : c.getBoundingClientRect().bottom) : X(c) || (c = 0);
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
          a === b && '' === a || ef(function () {
            d.$evalAsync(g);
          });
        });
        return g;
      }
    ];
  }
  function Ye() {
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
  function lf(b, a, c, d) {
    function e(a) {
      try {
        a.apply(null, Ya.call(arguments, 1));
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
      (function ya() {
        r(O, function (a) {
          a();
        });
        E = b(ya, a);
      }());
    }
    function g() {
      h();
      k();
    }
    function h() {
      H = b.history.state;
      H = G(H) ? null : H;
      pa(H, Q) && (H = Q);
      Q = H;
    }
    function k() {
      if (B !== m.url() || M !== H)
        B = m.url(), M = H, r(W, function (a) {
          a(m.url(), H);
        });
    }
    function l(a) {
      try {
        return decodeURIComponent(a);
      } catch (b) {
        return a;
      }
    }
    var m = this, p = a[0], s = b.location, t = b.history, q = b.setTimeout, N = b.clearTimeout, n = {};
    m.isMock = !1;
    var v = 0, w = [];
    m.$$completeOutstandingRequest = e;
    m.$$incOutstandingRequestCount = function () {
      v++;
    };
    m.notifyWhenNoOutstandingRequests = function (a) {
      r(O, function (a) {
        a();
      });
      0 === v ? a() : w.push(a);
    };
    var O = [], E;
    m.addPollFn = function (a) {
      G(E) && f(100, q);
      O.push(a);
      return a;
    };
    var H, M, B = s.href, ea = a.find('base'), L = null;
    h();
    M = H;
    m.url = function (a, c, e) {
      G(e) && (e = null);
      s !== b.location && (s = b.location);
      t !== b.history && (t = b.history);
      if (a) {
        var f = M === e;
        if (B === a && (!d.history || f))
          return m;
        var g = B && Fa(B) === Fa(a);
        B = a;
        M = e;
        !d.history || g && f ? (g || (L = a), c ? s.replace(a) : s.href = a) : (t[c ? 'replaceState' : 'pushState'](e, '', a), h(), M = H);
        return m;
      }
      return L || s.href.replace(/%27/g, '\'');
    };
    m.state = function () {
      return H;
    };
    var W = [], ba = !1, Q = null;
    m.onUrlChange = function (a) {
      if (!ba) {
        if (d.history)
          A(b).on('popstate', g);
        A(b).on('hashchange', g);
        ba = !0;
      }
      W.push(a);
      return a;
    };
    m.$$checkUrlChange = k;
    m.baseHref = function () {
      var a = ea.attr('href');
      return a ? a.replace(/^(https?\:)?\/\/[^\/]*/, '') : '';
    };
    var aa = {}, y = '', da = m.baseHref();
    m.cookies = function (a, b) {
      var d, e, f, g;
      if (a)
        b === u ? p.cookie = encodeURIComponent(a) + '=;path=' + da + ';expires=Thu, 01 Jan 1970 00:00:00 GMT' : I(b) && (d = (p.cookie = encodeURIComponent(a) + '=' + encodeURIComponent(b) + ';path=' + da).length + 1, 4096 < d && c.warn('Cookie \'' + a + '\' possibly not set or overflowed because it was too large (' + d + ' > 4096 bytes)!'));
      else {
        if (p.cookie !== y)
          for (y = p.cookie, d = y.split('; '), aa = {}, f = 0; f < d.length; f++)
            e = d[f], g = e.indexOf('='), 0 < g && (a = l(e.substring(0, g)), aa[a] === u && (aa[a] = l(e.substring(g + 1))));
        return aa;
      }
    };
    m.defer = function (a, b) {
      var c;
      v++;
      c = q(function () {
        delete n[c];
        e(a);
      }, b || 0);
      n[c] = !0;
      return c;
    };
    m.defer.cancel = function (a) {
      return n[a] ? (delete n[a], N(a), e(x), !0) : !1;
    };
  }
  function Ae() {
    this.$get = [
      '$window',
      '$log',
      '$sniffer',
      '$document',
      function (b, a, c, d) {
        return new lf(b, d, a, c);
      }
    ];
  }
  function Be() {
    this.$get = function () {
      function b(b, d) {
        function e(a) {
          a != p && (s ? s == a && (s = a.n) : s = a, f(a.n, a.p), f(a, p), p = a, p.n = null);
        }
        function f(a, b) {
          a != b && (a && (a.p = b), b && (b.n = a));
        }
        if (b in a)
          throw z('$cacheFactory')('iid', b);
        var g = 0, h = C({}, d, { id: b }), k = {}, l = d && d.capacity || Number.MAX_VALUE, m = {}, p = null, s = null;
        return a[b] = {
          put: function (a, b) {
            if (l < Number.MAX_VALUE) {
              var c = m[a] || (m[a] = { key: a });
              e(c);
            }
            if (!G(b))
              return a in k || g++, k[a] = b, g > l && this.remove(s.key), b;
          },
          get: function (a) {
            if (l < Number.MAX_VALUE) {
              var b = m[a];
              if (!b)
                return;
              e(b);
            }
            return k[a];
          },
          remove: function (a) {
            if (l < Number.MAX_VALUE) {
              var b = m[a];
              if (!b)
                return;
              b == p && (p = b.p);
              b == s && (s = b.n);
              f(b.n, b.p);
              delete m[a];
            }
            delete k[a];
            g--;
          },
          removeAll: function () {
            k = {};
            g = 0;
            m = {};
            p = s = null;
          },
          destroy: function () {
            m = h = k = null;
            delete a[b];
          },
          info: function () {
            return C({}, h, { size: g });
          }
        };
      }
      var a = {};
      b.info = function () {
        var b = {};
        r(a, function (a, e) {
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
  function Se() {
    this.$get = [
      '$cacheFactory',
      function (b) {
        return b('templates');
      }
    ];
  }
  function uc(b, a) {
    function c(a, b) {
      var c = /^\s*([@&]|=(\*?))(\??)\s*(\w*)\s*$/, d = {};
      r(a, function (a, e) {
        var f = a.match(c);
        if (!f)
          throw ka('iscp', b, e, a);
        d[e] = {
          mode: f[1][0],
          collection: '*' === f[2],
          optional: '?' === f[3],
          attrName: f[4] || e
        };
      });
      return d;
    }
    var d = {}, e = /^\s*directive\:\s*([\w\-]+)\s+(.*)$/, f = /(([\w\-]+)(?:\:([^;]+))?;?)/, g = Dd('ngSrc,ngSrcset,src,srcset'), h = /^(?:(\^\^?)?(\?)?(\^\^?)?)?/, k = /^(on[a-z]+|formaction)$/;
    this.directive = function p(a, e) {
      La(a, 'directive');
      I(a) ? (Ob(e, 'directiveFactory'), d.hasOwnProperty(a) || (d[a] = [], b.factory(a + 'Directive', [
        '$injector',
        '$exceptionHandler',
        function (b, e) {
          var f = [];
          r(d[a], function (d, g) {
            try {
              var h = b.invoke(d);
              F(h) ? h = { compile: ca(h) } : !h.compile && h.link && (h.compile = ca(h.link));
              h.priority = h.priority || 0;
              h.index = g;
              h.name = h.name || a;
              h.require = h.require || h.controller && h.name;
              h.restrict = h.restrict || 'EA';
              K(h.scope) && (h.$$isolateBindings = c(h.scope, h.name));
              f.push(h);
            } catch (k) {
              e(k);
            }
          });
          return f;
        }
      ])), d[a].push(e)) : r(a, kc(p));
      return this;
    };
    this.aHrefSanitizationWhitelist = function (b) {
      return y(b) ? (a.aHrefSanitizationWhitelist(b), this) : a.aHrefSanitizationWhitelist();
    };
    this.imgSrcSanitizationWhitelist = function (b) {
      return y(b) ? (a.imgSrcSanitizationWhitelist(b), this) : a.imgSrcSanitizationWhitelist();
    };
    var l = !0;
    this.debugInfoEnabled = function (a) {
      return y(a) ? (l = a, this) : l;
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
      function (a, b, c, q, N, n, v, w, O, E, H) {
        function M(a, b) {
          try {
            a.addClass(b);
          } catch (c) {
          }
        }
        function B(a, b, c, d, e) {
          a instanceof A || (a = A(a));
          r(a, function (b, c) {
            b.nodeType == mb && b.nodeValue.match(/\S+/) && (a[c] = A(b).wrap('<span></span>').parent()[0]);
          });
          var f = ea(a, b, a, c, d, e);
          B.$$addScopeClass(a);
          var g = null;
          return function (b, c, d) {
            Ob(b, 'scope');
            d = d || {};
            var e = d.parentBoundTranscludeFn, h = d.transcludeControllers;
            d = d.futureParentElement;
            e && e.$$boundTransclude && (e = e.$$boundTransclude);
            g || (g = (d = d && d[0]) ? 'foreignobject' !== ta(d) && d.toString().match(/SVG/) ? 'svg' : 'html' : 'html');
            d = 'html' !== g ? A(U(g, A('<div>').append(a).html())) : c ? Ka.clone.call(a) : a;
            if (h)
              for (var k in h)
                d.data('$' + k + 'Controller', h[k].instance);
            B.$$addScopeInfo(d, b);
            c && c(d, b);
            f && f(b, d, d, e);
            return d;
          };
        }
        function ea(a, b, c, d, e, f) {
          function g(a, c, d, e) {
            var f, k, l, q, s, n, w;
            if (p)
              for (w = Array(c.length), q = 0; q < h.length; q += 3)
                f = h[q], w[f] = c[f];
            else
              w = c;
            q = 0;
            for (s = h.length; q < s;)
              k = w[h[q++]], c = h[q++], f = h[q++], c ? (c.scope ? (l = a.$new(), B.$$addScopeInfo(A(k), l)) : l = a, n = c.transcludeOnThisElement ? L(a, c.transclude, e, c.elementTranscludeOnThisElement) : !c.templateOnThisElement && e ? e : !e && b ? L(a, b) : null, c(f, l, k, d, n)) : f && f(a, k.childNodes, u, e);
          }
          for (var h = [], k, l, q, s, p, n = 0; n < a.length; n++) {
            k = new X();
            l = W(a[n], [], k, 0 === n ? d : u, e);
            (f = l.length ? aa(l, a[n], k, b, c, null, [], [], f) : null) && f.scope && B.$$addScopeClass(k.$$element);
            k = f && f.terminal || !(q = a[n].childNodes) || !q.length ? null : ea(q, f ? (f.transcludeOnThisElement || !f.templateOnThisElement) && f.transclude : b);
            if (f || k)
              h.push(n, f, k), s = !0, p = p || f;
            f = null;
          }
          return s ? g : null;
        }
        function L(a, b, c, d) {
          return function (d, e, f, g, h) {
            d || (d = a.$new(!1, h), d.$$transcluded = !0);
            return b(d, e, {
              parentBoundTranscludeFn: c,
              transcludeControllers: f,
              futureParentElement: g
            });
          };
        }
        function W(b, c, g, h, k) {
          var l = g.$attr, q;
          switch (b.nodeType) {
          case na:
            da(c, wa(ta(b)), 'E', h, k);
            for (var s, n, w, N = b.attributes, t = 0, O = N && N.length; t < O; t++) {
              var H = !1, v = !1;
              s = N[t];
              q = s.name;
              s = P(s.value);
              n = wa(q);
              if (w = za.test(n))
                q = Mb(n.substr(6), '-');
              var M = n.replace(/(Start|End)$/, ''), E;
              a: {
                var B = M;
                if (d.hasOwnProperty(B)) {
                  E = void 0;
                  for (var B = a.get(B + 'Directive'), W = 0, r = B.length; W < r; W++)
                    if (E = B[W], E.multiElement) {
                      E = !0;
                      break a;
                    }
                }
                E = !1;
              }
              E && n === M + 'Start' && (H = q, v = q.substr(0, q.length - 5) + 'end', q = q.substr(0, q.length - 6));
              n = wa(q.toLowerCase());
              l[n] = q;
              if (w || !g.hasOwnProperty(n))
                g[n] = s, Jc(b, n) && (g[n] = !0);
              S(b, c, s, n, w);
              da(c, n, 'A', h, k, H, v);
            }
            b = b.className;
            if (I(b) && '' !== b)
              for (; q = f.exec(b);)
                n = wa(q[2]), da(c, n, 'C', h, k) && (g[n] = P(q[3])), b = b.substr(q.index + q[0].length);
            break;
          case mb:
            T(c, b.nodeValue);
            break;
          case 8:
            try {
              if (q = e.exec(b.nodeValue))
                n = wa(q[1]), da(c, n, 'M', h, k) && (g[n] = P(q[2]));
            } catch (Q) {
            }
          }
          c.sort(z);
          return c;
        }
        function ba(a, b, c) {
          var d = [], e = 0;
          if (b && a.hasAttribute && a.hasAttribute(b)) {
            do {
              if (!a)
                throw ka('uterdir', b, c);
              a.nodeType == na && (a.hasAttribute(b) && e++, a.hasAttribute(c) && e--);
              d.push(a);
              a = a.nextSibling;
            } while (0 < e);
          } else
            d.push(a);
          return A(d);
        }
        function Q(a, b, c) {
          return function (d, e, f, g, h) {
            e = ba(e[0], b, c);
            return a(d, e, f, g, h);
          };
        }
        function aa(a, d, e, f, g, k, l, q, p) {
          function w(a, b, c, d) {
            if (a) {
              c && (a = Q(a, c, d));
              a.require = J.require;
              a.directiveName = ga;
              if (L === J || J.$$isolateScope)
                a = Y(a, { isolateScope: !0 });
              l.push(a);
            }
            if (b) {
              c && (b = Q(b, c, d));
              b.require = J.require;
              b.directiveName = ga;
              if (L === J || J.$$isolateScope)
                b = Y(b, { isolateScope: !0 });
              q.push(b);
            }
          }
          function O(a, b, c, d) {
            var e, f = 'data', g = !1, k = c, l;
            if (I(b)) {
              l = b.match(h);
              b = b.substring(l[0].length);
              l[3] && (l[1] ? l[3] = null : l[1] = l[3]);
              '^' === l[1] ? f = 'inheritedData' : '^^' === l[1] && (f = 'inheritedData', k = c.parent());
              '?' === l[2] && (g = !0);
              e = null;
              d && 'data' === f && (e = d[b]) && (e = e.instance);
              e = e || k[f]('$' + b + 'Controller');
              if (!e && !g)
                throw ka('ctreq', b, a);
              return e || null;
            }
            D(b) && (e = [], r(b, function (b) {
              e.push(O(a, b, c, d));
            }));
            return e;
          }
          function H(a, c, f, g, h) {
            function k(a, b, c) {
              var d;
              Ta(a) || (c = b, b = a, a = u);
              C && (d = M);
              c || (c = C ? W.parent() : W);
              return h(a, b, d, c, Xb);
            }
            var p, w, t, v, M, db, W, Q;
            d === f ? (Q = e, W = e.$$element) : (W = A(f), Q = new X(W, e));
            L && (v = c.$new(!0));
            h && (db = k, db.$$boundTransclude = h);
            E && (ea = {}, M = {}, r(E, function (a) {
              var b = {
                  $scope: a === L || a.$$isolateScope ? v : c,
                  $element: W,
                  $attrs: Q,
                  $transclude: db
                };
              t = a.controller;
              '@' == t && (t = Q[a.name]);
              b = n(t, b, !0, a.controllerAs);
              M[a.name] = b;
              C || W.data('$' + a.name + 'Controller', b.instance);
              ea[a.name] = b;
            }));
            if (L) {
              B.$$addScopeInfo(W, v, !0, !(aa && (aa === L || aa === L.$$originalDirective)));
              B.$$addScopeClass(W, !0);
              g = ea && ea[L.name];
              var ba = v;
              g && g.identifier && !0 === L.bindToController && (ba = g.instance);
              r(v.$$isolateBindings = L.$$isolateBindings, function (a, d) {
                var e = a.attrName, f = a.optional, g, h, k, l;
                switch (a.mode) {
                case '@':
                  Q.$observe(e, function (a) {
                    ba[d] = a;
                  });
                  Q.$$observers[e].$$scope = c;
                  Q[e] && (ba[d] = b(Q[e])(c));
                  break;
                case '=':
                  if (f && !Q[e])
                    break;
                  h = N(Q[e]);
                  l = h.literal ? pa : function (a, b) {
                    return a === b || a !== a && b !== b;
                  };
                  k = h.assign || function () {
                    g = ba[d] = h(c);
                    throw ka('nonassign', Q[e], L.name);
                  };
                  g = ba[d] = h(c);
                  f = function (a) {
                    l(a, ba[d]) || (l(a, g) ? k(c, a = ba[d]) : ba[d] = a);
                    return g = a;
                  };
                  f.$stateful = !0;
                  f = a.collection ? c.$watchCollection(Q[e], f) : c.$watch(N(Q[e], f), null, h.literal);
                  v.$on('$destroy', f);
                  break;
                case '&':
                  h = N(Q[e]), ba[d] = function (a) {
                    return h(c, a);
                  };
                }
              });
            }
            ea && (r(ea, function (a) {
              a();
            }), ea = null);
            g = 0;
            for (p = l.length; g < p; g++)
              w = l[g], Z(w, w.isolateScope ? v : c, W, Q, w.require && O(w.directiveName, w.require, W, M), db);
            var Xb = c;
            L && (L.template || null === L.templateUrl) && (Xb = v);
            a && a(Xb, f.childNodes, u, h);
            for (g = q.length - 1; 0 <= g; g--)
              w = q[g], Z(w, w.isolateScope ? v : c, W, Q, w.require && O(w.directiveName, w.require, W, M), db);
          }
          p = p || {};
          for (var v = -Number.MAX_VALUE, M, E = p.controllerDirectives, ea, L = p.newIsolateScopeDirective, aa = p.templateDirective, da = p.nonTlbTranscludeDirective, x = !1, Na = !1, C = p.hasElementTranscludeDirective, T = e.$$element = A(d), J, ga, z, Ga = f, R, S = 0, za = a.length; S < za; S++) {
            J = a[S];
            var zb = J.$$start, $ = J.$$end;
            zb && (T = ba(d, zb, $));
            z = u;
            if (v > J.priority)
              break;
            if (z = J.scope)
              J.templateUrl || (K(z) ? (ya('new/isolated scope', L || M, J, T), L = J) : ya('new/isolated scope', L, J, T)), M = M || J;
            ga = J.name;
            !J.templateUrl && J.controller && (z = J.controller, E = E || {}, ya('\'' + ga + '\' controller', E[ga], J, T), E[ga] = J);
            if (z = J.transclude)
              x = !0, J.$$tlb || (ya('transclusion', da, J, T), da = J), 'element' == z ? (C = !0, v = J.priority, z = T, T = e.$$element = A(V.createComment(' ' + ga + ': ' + e[ga] + ' ')), d = T[0], Ab(g, Ya.call(z, 0), d), Ga = B(z, f, v, k && k.name, { nonTlbTranscludeDirective: da })) : (z = A(Rb(d)).contents(), T.empty(), Ga = B(z, f));
            if (J.template)
              if (Na = !0, ya('template', aa, J, T), aa = J, z = F(J.template) ? J.template(T, e) : J.template, z = Pc(z), J.replace) {
                k = J;
                z = Pb.test(z) ? Qc(U(J.templateNamespace, P(z))) : [];
                d = z[0];
                if (1 != z.length || d.nodeType !== na)
                  throw ka('tplrt', ga, '');
                Ab(g, T, d);
                za = { $attr: {} };
                z = W(d, [], za);
                var mf = a.splice(S + 1, a.length - (S + 1));
                L && y(z);
                a = a.concat(z).concat(mf);
                Oc(e, za);
                za = a.length;
              } else
                T.html(z);
            if (J.templateUrl)
              Na = !0, ya('template', aa, J, T), aa = J, J.replace && (k = J), H = G(a.splice(S, a.length - S), T, e, g, x && Ga, l, q, {
                controllerDirectives: E,
                newIsolateScopeDirective: L,
                templateDirective: aa,
                nonTlbTranscludeDirective: da
              }), za = a.length;
            else if (J.compile)
              try {
                R = J.compile(T, e, Ga), F(R) ? w(null, R, zb, $) : R && w(R.pre, R.post, zb, $);
              } catch (ca) {
                c(ca, va(T));
              }
            J.terminal && (H.terminal = !0, v = Math.max(v, J.priority));
          }
          H.scope = M && !0 === M.scope;
          H.transcludeOnThisElement = x;
          H.elementTranscludeOnThisElement = C;
          H.templateOnThisElement = Na;
          H.transclude = Ga;
          p.hasElementTranscludeDirective = C;
          return H;
        }
        function y(a) {
          for (var b = 0, c = a.length; b < c; b++) {
            var d = b, e;
            e = C(Object.create(a[b]), { $$isolateScope: !0 });
            a[d] = e;
          }
        }
        function da(b, e, f, g, h, k, l) {
          if (e === h)
            return null;
          h = null;
          if (d.hasOwnProperty(e)) {
            var q;
            e = a.get(e + 'Directive');
            for (var s = 0, n = e.length; s < n; s++)
              try {
                if (q = e[s], (g === u || g > q.priority) && -1 != q.restrict.indexOf(f)) {
                  if (k) {
                    var w = {
                        $$start: k,
                        $$end: l
                      };
                    q = C(Object.create(q), w);
                  }
                  b.push(q);
                  h = q;
                }
              } catch (N) {
                c(N);
              }
          }
          return h;
        }
        function Oc(a, b) {
          var c = b.$attr, d = a.$attr, e = a.$$element;
          r(a, function (d, e) {
            '$' != e.charAt(0) && (b[e] && b[e] !== d && (d += ('style' === e ? ';' : ' ') + b[e]), a.$set(e, d, !0, c[e]));
          });
          r(b, function (b, f) {
            'class' == f ? (M(e, b), a['class'] = (a['class'] ? a['class'] + ' ' : '') + b) : 'style' == f ? (e.attr('style', e.attr('style') + ';' + b), a.style = (a.style ? a.style + ';' : '') + b) : '$' == f.charAt(0) || a.hasOwnProperty(f) || (a[f] = b, d[f] = c[f]);
          });
        }
        function G(a, b, c, d, e, f, g, h) {
          var k = [], l, s, p = b[0], n = a.shift(), w = C({}, n, {
              templateUrl: null,
              transclude: null,
              replace: null,
              $$originalDirective: n
            }), N = F(n.templateUrl) ? n.templateUrl(b, c) : n.templateUrl, t = n.templateNamespace;
          b.empty();
          q(O.getTrustedResourceUrl(N)).then(function (q) {
            var v, O;
            q = Pc(q);
            if (n.replace) {
              q = Pb.test(q) ? Qc(U(t, P(q))) : [];
              v = q[0];
              if (1 != q.length || v.nodeType !== na)
                throw ka('tplrt', n.name, N);
              q = { $attr: {} };
              Ab(d, b, v);
              var H = W(v, [], q);
              K(n.scope) && y(H);
              a = H.concat(a);
              Oc(c, q);
            } else
              v = p, b.html(q);
            a.unshift(w);
            l = aa(a, v, c, e, b, n, f, g, h);
            r(d, function (a, c) {
              a == v && (d[c] = b[0]);
            });
            for (s = ea(b[0].childNodes, e); k.length;) {
              q = k.shift();
              O = k.shift();
              var E = k.shift(), B = k.shift(), H = b[0];
              if (!q.$$destroyed) {
                if (O !== p) {
                  var Q = O.className;
                  h.hasElementTranscludeDirective && n.replace || (H = Rb(v));
                  Ab(E, A(O), H);
                  M(A(H), Q);
                }
                O = l.transcludeOnThisElement ? L(q, l.transclude, B) : B;
                l(s, q, H, d, O);
              }
            }
            k = null;
          });
          return function (a, b, c, d, e) {
            a = e;
            b.$$destroyed || (k ? k.push(b, c, d, a) : (l.transcludeOnThisElement && (a = L(b, l.transclude, e)), l(s, b, c, d, a)));
          };
        }
        function z(a, b) {
          var c = b.priority - a.priority;
          return 0 !== c ? c : a.name !== b.name ? a.name < b.name ? -1 : 1 : a.index - b.index;
        }
        function ya(a, b, c, d) {
          if (b)
            throw ka('multidir', b.name, c.name, a, va(d));
        }
        function T(a, c) {
          var d = b(c, !0);
          d && a.push({
            priority: 0,
            compile: function (a) {
              a = a.parent();
              var b = !!a.length;
              b && B.$$addBindingClass(a);
              return function (a, c) {
                var e = c.parent();
                b || B.$$addBindingClass(e);
                B.$$addBindingInfo(e, d.expressions);
                a.$watch(d, function (a) {
                  c[0].nodeValue = a;
                });
              };
            }
          });
        }
        function U(a, b) {
          a = R(a || 'html');
          switch (a) {
          case 'svg':
          case 'math':
            var c = V.createElement('div');
            c.innerHTML = '<' + a + '>' + b + '</' + a + '>';
            return c.childNodes[0].childNodes;
          default:
            return b;
          }
        }
        function Ga(a, b) {
          if ('srcdoc' == b)
            return O.HTML;
          var c = ta(a);
          if ('xlinkHref' == b || 'form' == c && 'action' == b || 'img' != c && ('src' == b || 'ngSrc' == b))
            return O.RESOURCE_URL;
        }
        function S(a, c, d, e, f) {
          var h = b(d, !0);
          if (h) {
            if ('multiple' === e && 'select' === ta(a))
              throw ka('selmulti', va(a));
            c.push({
              priority: 100,
              compile: function () {
                return {
                  pre: function (c, d, l) {
                    d = l.$$observers || (l.$$observers = {});
                    if (k.test(e))
                      throw ka('nodomevents');
                    l[e] && (h = b(l[e], !0, Ga(a, e), g[e] || f)) && (l[e] = h(c), (d[e] || (d[e] = [])).$$inter = !0, (l.$$observers && l.$$observers[e].$$scope || c).$watch(h, function (a, b) {
                      'class' === e && a != b ? l.$updateClass(a, b) : l.$set(e, a);
                    }));
                  }
                };
              }
            });
          }
        }
        function Ab(a, b, c) {
          var d = b[0], e = b.length, f = d.parentNode, g, h;
          if (a)
            for (g = 0, h = a.length; g < h; g++)
              if (a[g] == d) {
                a[g++] = c;
                h = g + e - 1;
                for (var k = a.length; g < k; g++, h++)
                  h < k ? a[g] = a[h] : delete a[g];
                a.length -= e - 1;
                a.context === d && (a.context = c);
                break;
              }
          f && f.replaceChild(c, d);
          a = V.createDocumentFragment();
          a.appendChild(d);
          A(c).data(A(d).data());
          qa ? (Nb = !0, qa.cleanData([d])) : delete A.cache[d[A.expando]];
          d = 1;
          for (e = b.length; d < e; d++)
            f = b[d], A(f).remove(), a.appendChild(f), delete b[d];
          b[0] = c;
          b.length = 1;
        }
        function Y(a, b) {
          return C(function () {
            return a.apply(null, arguments);
          }, a, b);
        }
        function Z(a, b, d, e, f, g) {
          try {
            a(b, d, e, f, g);
          } catch (h) {
            c(h, va(d));
          }
        }
        var X = function (a, b) {
          if (b) {
            var c = Object.keys(b), d, e, f;
            d = 0;
            for (e = c.length; d < e; d++)
              f = c[d], this[f] = b[f];
          } else
            this.$attr = {};
          this.$$element = a;
        };
        X.prototype = {
          $normalize: wa,
          $addClass: function (a) {
            a && 0 < a.length && E.addClass(this.$$element, a);
          },
          $removeClass: function (a) {
            a && 0 < a.length && E.removeClass(this.$$element, a);
          },
          $updateClass: function (a, b) {
            var c = Rc(a, b);
            c && c.length && E.addClass(this.$$element, c);
            (c = Rc(b, a)) && c.length && E.removeClass(this.$$element, c);
          },
          $set: function (a, b, d, e) {
            var f = this.$$element[0], g = Jc(f, a), h = ff(f, a), f = a;
            g ? (this.$$element.prop(a, b), e = g) : h && (this[h] = b, f = h);
            this[a] = b;
            e ? this.$attr[a] = e : (e = this.$attr[a]) || (this.$attr[a] = e = Mb(a, '-'));
            g = ta(this.$$element);
            if ('a' === g && 'href' === a || 'img' === g && 'src' === a)
              this[a] = b = H(b, 'src' === a);
            else if ('img' === g && 'srcset' === a) {
              for (var g = '', h = P(b), k = /(\s+\d+x\s*,|\s+\d+w\s*,|\s+,|,\s+)/, k = /\s/.test(h) ? k : /(,)/, h = h.split(k), k = Math.floor(h.length / 2), l = 0; l < k; l++)
                var q = 2 * l, g = g + H(P(h[q]), !0), g = g + (' ' + P(h[q + 1]));
              h = P(h[2 * l]).split(/\s/);
              g += H(P(h[0]), !0);
              2 === h.length && (g += ' ' + P(h[1]));
              this[a] = b = g;
            }
            !1 !== d && (null === b || b === u ? this.$$element.removeAttr(e) : this.$$element.attr(e, b));
            (a = this.$$observers) && r(a[f], function (a) {
              try {
                a(b);
              } catch (d) {
                c(d);
              }
            });
          },
          $observe: function (a, b) {
            var c = this, d = c.$$observers || (c.$$observers = ia()), e = d[a] || (d[a] = []);
            e.push(b);
            v.$evalAsync(function () {
              !e.$$inter && c.hasOwnProperty(a) && b(c[a]);
            });
            return function () {
              Va(e, b);
            };
          }
        };
        var Na = b.startSymbol(), ga = b.endSymbol(), Pc = '{{' == Na || '}}' == ga ? oa : function (a) {
            return a.replace(/\{\{/g, Na).replace(/}}/g, ga);
          }, za = /^ngAttr[A-Z]/;
        B.$$addBindingInfo = l ? function (a, b) {
          var c = a.data('$binding') || [];
          D(b) ? c = c.concat(b) : c.push(b);
          a.data('$binding', c);
        } : x;
        B.$$addBindingClass = l ? function (a) {
          M(a, 'ng-binding');
        } : x;
        B.$$addScopeInfo = l ? function (a, b, c, d) {
          a.data(c ? d ? '$isolateScopeNoTemplate' : '$isolateScope' : '$scope', b);
        } : x;
        B.$$addScopeClass = l ? function (a, b) {
          M(a, b ? 'ng-isolate-scope' : 'ng-scope');
        } : x;
        return B;
      }
    ];
  }
  function wa(b) {
    return bb(b.replace(nf, ''));
  }
  function Rc(b, a) {
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
  function Qc(b) {
    b = A(b);
    var a = b.length;
    if (1 >= a)
      return b;
    for (; a--;)
      8 === b[a].nodeType && of.call(b, a, 1);
    return b;
  }
  function Ce() {
    var b = {}, a = !1, c = /^(\S+)(\s+as\s+(\w+))?$/;
    this.register = function (a, c) {
      La(a, 'controller');
      K(a) ? C(b, a) : b[a] = c;
    };
    this.allowGlobals = function () {
      a = !0;
    };
    this.$get = [
      '$injector',
      '$window',
      function (d, e) {
        function f(a, b, c, d) {
          if (!a || !K(a.$scope))
            throw z('$controller')('noscp', d, b);
          a.$scope[b] = c;
        }
        return function (g, h, k, l) {
          var m, p, s;
          k = !0 === k;
          l && I(l) && (s = l);
          I(g) && (l = g.match(c), p = l[1], s = s || l[3], g = b.hasOwnProperty(p) ? b[p] : tc(h.$scope, p, !0) || (a ? tc(e, p, !0) : u), pb(g, p, !0));
          if (k)
            return k = (D(g) ? g[g.length - 1] : g).prototype, m = Object.create(k), s && f(h, s, m, p || g.name), C(function () {
              d.invoke(g, m, h, p);
              return m;
            }, {
              instance: m,
              identifier: s
            });
          m = d.instantiate(g, h, p);
          s && f(h, s, m, p || g.name);
          return m;
        };
      }
    ];
  }
  function De() {
    this.$get = [
      '$window',
      function (b) {
        return A(b.document);
      }
    ];
  }
  function Ee() {
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
    if (I(b)) {
      b = b.replace(pf, '');
      var c = a('Content-Type');
      if (c && 0 === c.indexOf(Sc) && b.trim() || qf.test(b) && rf.test(b))
        b = oc(b);
    }
    return b;
  }
  function Tc(b) {
    var a = ia(), c, d, e;
    if (!b)
      return a;
    r(b.split('\n'), function (b) {
      e = b.indexOf(':');
      c = R(P(b.substr(0, e)));
      d = P(b.substr(e + 1));
      c && (a[c] = a[c] ? a[c] + ', ' + d : d);
    });
    return a;
  }
  function Uc(b) {
    var a = K(b) ? b : u;
    return function (c) {
      a || (a = Tc(b));
      return c ? (c = a[R(c)], void 0 === c && (c = null), c) : a;
    };
  }
  function Vc(b, a, c) {
    if (F(c))
      return c(b, a);
    r(c, function (c) {
      b = c(b, a);
    });
    return b;
  }
  function He() {
    var b = this.defaults = {
        transformResponse: [Yb],
        transformRequest: [function (a) {
            return K(a) && '[object File]' !== Ja.call(a) && '[object Blob]' !== Ja.call(a) ? Za(a) : a;
          }],
        headers: {
          common: { Accept: 'application/json, text/plain, */*' },
          post: ua(Zb),
          put: ua(Zb),
          patch: ua(Zb)
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
      function (d, e, f, g, h, k) {
        function l(a) {
          function c(a) {
            var b = C({}, a);
            b.data = a.data ? Vc(a.data, a.headers, d.transformResponse) : a.data;
            a = a.status;
            return 200 <= a && 300 > a ? b : h.reject(b);
          }
          var d = {
              method: 'get',
              transformRequest: b.transformRequest,
              transformResponse: b.transformResponse
            }, e = function (a) {
              var c = b.headers, d = C({}, a.headers), e, f, c = C({}, c.common, c[R(a.method)]);
              a:
                for (e in c) {
                  a = R(e);
                  for (f in d)
                    if (R(f) === a)
                      continue a;
                  d[e] = c[e];
                }
              (function (a) {
                var b;
                r(a, function (c, d) {
                  F(c) && (b = c(), null != b ? a[d] = b : delete a[d]);
                });
              }(d));
              return d;
            }(a);
          if (!ha.isObject(a))
            throw z('$http')('badreq', a);
          C(d, a);
          d.headers = e;
          d.method = rb(d.method);
          var f = [
              function (a) {
                e = a.headers;
                var d = Vc(a.data, Uc(e), a.transformRequest);
                G(d) && r(e, function (a, b) {
                  'content-type' === R(b) && delete e[b];
                });
                G(a.withCredentials) && !G(b.withCredentials) && (a.withCredentials = b.withCredentials);
                return m(a, d, e).then(c, c);
              },
              u
            ], g = h.when(d);
          for (r(t, function (a) {
              (a.request || a.requestError) && f.unshift(a.request, a.requestError);
              (a.response || a.responseError) && f.push(a.response, a.responseError);
            }); f.length;) {
            a = f.shift();
            var k = f.shift(), g = g.then(a, k);
          }
          g.success = function (a) {
            g.then(function (b) {
              a(b.data, b.status, b.headers, d);
            });
            return g;
          };
          g.error = function (a) {
            g.then(null, function (b) {
              a(b.data, b.status, b.headers, d);
            });
            return g;
          };
          return g;
        }
        function m(c, f, k) {
          function m(b, c, d, e) {
            function f() {
              w(c, b, d, e);
            }
            M && (200 <= b && 300 > b ? M.put(r, [
              b,
              c,
              Tc(d),
              e
            ]) : M.remove(r));
            a ? g.$applyAsync(f) : (f(), g.$$phase || g.$apply());
          }
          function w(a, b, d, e) {
            b = Math.max(b, 0);
            (200 <= b && 300 > b ? E.resolve : E.reject)({
              data: a,
              status: b,
              headers: Uc(d),
              config: c,
              statusText: e
            });
          }
          function t() {
            var a = l.pendingRequests.indexOf(c);
            -1 !== a && l.pendingRequests.splice(a, 1);
          }
          var E = h.defer(), H = E.promise, M, B, r = p(c.url, c.params);
          l.pendingRequests.push(c);
          H.then(t, t);
          !c.cache && !b.cache || !1 === c.cache || 'GET' !== c.method && 'JSONP' !== c.method || (M = K(c.cache) ? c.cache : K(b.cache) ? b.cache : s);
          if (M)
            if (B = M.get(r), y(B)) {
              if (B && F(B.then))
                return B.then(t, t), B;
              D(B) ? w(B[1], B[0], ua(B[2]), B[3]) : w(B, 200, {}, 'OK');
            } else
              M.put(r, H);
          G(B) && ((B = Wc(c.url) ? e.cookies()[c.xsrfCookieName || b.xsrfCookieName] : u) && (k[c.xsrfHeaderName || b.xsrfHeaderName] = B), d(c.method, r, f, m, k, c.timeout, c.withCredentials, c.responseType));
          return H;
        }
        function p(a, b) {
          if (!b)
            return a;
          var c = [];
          Bd(b, function (a, b) {
            null === a || G(a) || (D(a) || (a = [a]), r(a, function (a) {
              K(a) && (a = fa(a) ? a.toISOString() : Za(a));
              c.push(Da(b) + '=' + Da(a));
            }));
          });
          0 < c.length && (a += (-1 == a.indexOf('?') ? '?' : '&') + c.join('&'));
          return a;
        }
        var s = f('$http'), t = [];
        r(c, function (a) {
          t.unshift(I(a) ? k.get(a) : k.invoke(a));
        });
        l.pendingRequests = [];
        (function (a) {
          r(arguments, function (a) {
            l[a] = function (b, c) {
              return l(C(c || {}, {
                method: a,
                url: b
              }));
            };
          });
        }('get', 'delete', 'head', 'jsonp'));
        (function (a) {
          r(arguments, function (a) {
            l[a] = function (b, c, d) {
              return l(C(d || {}, {
                method: a,
                url: b,
                data: c
              }));
            };
          });
        }('post', 'put', 'patch'));
        l.defaults = b;
        return l;
      }
    ];
  }
  function sf() {
    return new U.XMLHttpRequest();
  }
  function Ie() {
    this.$get = [
      '$browser',
      '$window',
      '$document',
      function (b, a, c) {
        return tf(b, sf, b.defer, a.angular.callbacks, c[0]);
      }
    ];
  }
  function tf(b, a, c, d, e) {
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
        var g = -1, t = 'unknown';
        a && ('load' !== a.type || d[b].called || (a = { type: 'error' }), t = a.type, g = 'error' === a.type ? 404 : 200);
        c && c(g, t);
      };
      f.addEventListener('load', m, !1);
      f.addEventListener('error', m, !1);
      e.body.appendChild(f);
      return m;
    }
    return function (e, h, k, l, m, p, s, t) {
      function q() {
        v && v();
        w && w.abort();
      }
      function N(a, d, e, f, g) {
        E && c.cancel(E);
        v = w = null;
        a(d, e, f, g);
        b.$$completeOutstandingRequest(x);
      }
      b.$$incOutstandingRequestCount();
      h = h || b.url();
      if ('jsonp' == R(e)) {
        var n = '_' + (d.counter++).toString(36);
        d[n] = function (a) {
          d[n].data = a;
          d[n].called = !0;
        };
        var v = f(h.replace('JSON_CALLBACK', 'angular.callbacks.' + n), n, function (a, b) {
            N(l, a, d[n].data, '', b);
            d[n] = x;
          });
      } else {
        var w = a();
        w.open(e, h, !0);
        r(m, function (a, b) {
          y(a) && w.setRequestHeader(b, a);
        });
        w.onload = function () {
          var a = w.statusText || '', b = 'response' in w ? w.response : w.responseText, c = 1223 === w.status ? 204 : w.status;
          0 === c && (c = b ? 200 : 'file' == Aa(h).protocol ? 404 : 0);
          N(l, c, b, w.getAllResponseHeaders(), a);
        };
        e = function () {
          N(l, -1, null, null, '');
        };
        w.onerror = e;
        w.onabort = e;
        s && (w.withCredentials = !0);
        if (t)
          try {
            w.responseType = t;
          } catch (O) {
            if ('json' !== t)
              throw O;
          }
        w.send(k || null);
      }
      if (0 < p)
        var E = c(q, p);
      else
        p && F(p.then) && p.then(q);
    };
  }
  function Fe() {
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
        function g(f, g, t, q) {
          function N(c) {
            return c.replace(l, b).replace(m, a);
          }
          function n(a) {
            try {
              var b = a;
              a = t ? e.getTrusted(t, b) : e.valueOf(b);
              var c;
              if (q && !y(a))
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
                  a = Za(a);
                }
                c = a;
              }
              return c;
            } catch (g) {
              c = $b('interr', f, g.toString()), d(c);
            }
          }
          q = !!q;
          for (var v, w, O = 0, E = [], H = [], M = f.length, B = [], r = []; O < M;)
            if (-1 != (v = f.indexOf(b, O)) && -1 != (w = f.indexOf(a, v + h)))
              O !== v && B.push(N(f.substring(O, v))), O = f.substring(v + h, w), E.push(O), H.push(c(O, n)), O = w + k, r.push(B.length), B.push('');
            else {
              O !== M && B.push(N(f.substring(O)));
              break;
            }
          if (t && 1 < B.length)
            throw $b('noconcat', f);
          if (!g || E.length) {
            var L = function (a) {
              for (var b = 0, c = E.length; b < c; b++) {
                if (q && G(a[b]))
                  return;
                B[r[b]] = a[b];
              }
              return B.join('');
            };
            return C(function (a) {
              var b = 0, c = E.length, e = Array(c);
              try {
                for (; b < c; b++)
                  e[b] = H[b](a);
                return L(e);
              } catch (g) {
                a = $b('interr', f, g.toString()), d(a);
              }
            }, {
              exp: f,
              expressions: E,
              $$watchDelegate: function (a, b, c) {
                var d;
                return a.$watchGroup(H, function (c, e) {
                  var f = L(c);
                  F(b) && b.call(this, f, c !== e ? d : f, a);
                  d = f;
                }, c);
              }
            });
          }
        }
        var h = b.length, k = a.length, l = new RegExp(b.replace(/./g, f), 'g'), m = new RegExp(a.replace(/./g, f), 'g');
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
  function Ge() {
    this.$get = [
      '$rootScope',
      '$window',
      '$q',
      '$$q',
      function (b, a, c, d) {
        function e(e, h, k, l) {
          var m = a.setInterval, p = a.clearInterval, s = 0, t = y(l) && !l, q = (t ? d : c).defer(), N = q.promise;
          k = y(k) ? k : 0;
          N.then(null, null, e);
          N.$$intervalId = m(function () {
            q.notify(s++);
            0 < k && s >= k && (q.resolve(s), p(N.$$intervalId), delete f[N.$$intervalId]);
            t || b.$apply();
          }, h);
          f[N.$$intervalId] = q;
          return N;
        }
        var f = {};
        e.cancel = function (b) {
          return b && b.$$intervalId in f ? (f[b.$$intervalId].reject('canceled'), a.clearInterval(b.$$intervalId), delete f[b.$$intervalId], !0) : !1;
        };
        return e;
      }
    ];
  }
  function Od() {
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
      b[a] = nb(b[a]);
    return b.join('/');
  }
  function Xc(b, a) {
    var c = Aa(b);
    a.$$protocol = c.protocol;
    a.$$host = c.hostname;
    a.$$port = $(c.port) || uf[c.protocol] || null;
  }
  function Yc(b, a) {
    var c = '/' !== b.charAt(0);
    c && (b = '/' + b);
    var d = Aa(b);
    a.$$path = decodeURIComponent(c && '/' === d.pathname.charAt(0) ? d.pathname.substring(1) : d.pathname);
    a.$$search = qc(d.search);
    a.$$hash = decodeURIComponent(d.hash);
    a.$$path && '/' != a.$$path.charAt(0) && (a.$$path = '/' + a.$$path);
  }
  function xa(b, a) {
    if (0 === a.indexOf(b))
      return a.substr(b.length);
  }
  function Fa(b) {
    var a = b.indexOf('#');
    return -1 == a ? b : b.substr(0, a);
  }
  function bc(b) {
    return b.substr(0, Fa(b).lastIndexOf('/') + 1);
  }
  function cc(b, a) {
    this.$$html5 = !0;
    a = a || '';
    var c = bc(b);
    Xc(b, this);
    this.$$parse = function (a) {
      var b = xa(c, a);
      if (!I(b))
        throw eb('ipthprfx', a, c);
      Yc(b, this);
      this.$$path || (this.$$path = '/');
      this.$$compose();
    };
    this.$$compose = function () {
      var a = Kb(this.$$search), b = this.$$hash ? '#' + nb(this.$$hash) : '';
      this.$$url = ac(this.$$path) + (a ? '?' + a : '') + b;
      this.$$absUrl = c + this.$$url.substr(1);
    };
    this.$$parseLinkUrl = function (d, e) {
      if (e && '#' === e[0])
        return this.hash(e.slice(1)), !0;
      var f, g;
      (f = xa(b, d)) !== u ? (g = f, g = (f = xa(a, f)) !== u ? c + (xa('/', f) || f) : b + g) : (f = xa(c, d)) !== u ? g = c + f : c == d + '/' && (g = c);
      g && this.$$parse(g);
      return !!g;
    };
  }
  function dc(b, a) {
    var c = bc(b);
    Xc(b, this);
    this.$$parse = function (d) {
      var e = xa(b, d) || xa(c, d), e = '#' == e.charAt(0) ? xa(a, e) : this.$$html5 ? e : '';
      if (!I(e))
        throw eb('ihshprfx', d, a);
      Yc(e, this);
      d = this.$$path;
      var f = /^\/[A-Z]:(\/.*)/;
      0 === e.indexOf(b) && (e = e.replace(b, ''));
      f.exec(e) || (d = (e = f.exec(d)) ? e[1] : d);
      this.$$path = d;
      this.$$compose();
    };
    this.$$compose = function () {
      var c = Kb(this.$$search), e = this.$$hash ? '#' + nb(this.$$hash) : '';
      this.$$url = ac(this.$$path) + (c ? '?' + c : '') + e;
      this.$$absUrl = b + (this.$$url ? a + this.$$url : '');
    };
    this.$$parseLinkUrl = function (a, c) {
      return Fa(b) == Fa(a) ? (this.$$parse(a), !0) : !1;
    };
  }
  function Zc(b, a) {
    this.$$html5 = !0;
    dc.apply(this, arguments);
    var c = bc(b);
    this.$$parseLinkUrl = function (d, e) {
      if (e && '#' === e[0])
        return this.hash(e.slice(1)), !0;
      var f, g;
      b == Fa(d) ? f = d : (g = xa(c, d)) ? f = b + a + g : c === d + '/' && (f = c);
      f && this.$$parse(f);
      return !!f;
    };
    this.$$compose = function () {
      var c = Kb(this.$$search), e = this.$$hash ? '#' + nb(this.$$hash) : '';
      this.$$url = ac(this.$$path) + (c ? '?' + c : '') + e;
      this.$$absUrl = b + a + this.$$url;
    };
  }
  function Bb(b) {
    return function () {
      return this[b];
    };
  }
  function $c(b, a) {
    return function (c) {
      if (G(c))
        return this[b];
      this[b] = a(c);
      this.$$compose();
      return this;
    };
  }
  function Je() {
    var b = '', a = {
        enabled: !1,
        requireBase: !0,
        rewriteLinks: !0
      };
    this.hashPrefix = function (a) {
      return y(a) ? (b = a, this) : b;
    };
    this.html5Mode = function (b) {
      return Ua(b) ? (a.enabled = b, this) : K(b) ? (Ua(b.enabled) && (a.enabled = b.enabled), Ua(b.requireBase) && (a.requireBase = b.requireBase), Ua(b.rewriteLinks) && (a.rewriteLinks = b.rewriteLinks), this) : a;
    };
    this.$get = [
      '$rootScope',
      '$browser',
      '$sniffer',
      '$rootElement',
      function (c, d, e, f) {
        function g(a, b, c) {
          var e = k.url(), f = k.$$state;
          try {
            d.url(a, b, c), k.$$state = d.state();
          } catch (g) {
            throw k.url(e), k.$$state = f, g;
          }
        }
        function h(a, b) {
          c.$broadcast('$locationChangeSuccess', k.absUrl(), a, k.$$state, b);
        }
        var k, l;
        l = d.baseHref();
        var m = d.url(), p;
        if (a.enabled) {
          if (!l && a.requireBase)
            throw eb('nobase');
          p = m.substring(0, m.indexOf('/', m.indexOf('//') + 2)) + (l || '/');
          l = e.history ? cc : Zc;
        } else
          p = Fa(m), l = dc;
        k = new l(p, '#' + b);
        k.$$parseLinkUrl(m, m);
        k.$$state = d.state();
        var s = /^\s*(javascript|mailto):/i;
        f.on('click', function (b) {
          if (a.rewriteLinks && !b.ctrlKey && !b.metaKey && 2 != b.which) {
            for (var e = A(b.target); 'a' !== ta(e[0]);)
              if (e[0] === f[0] || !(e = e.parent())[0])
                return;
            var g = e.prop('href'), h = e.attr('href') || e.attr('xlink:href');
            K(g) && '[object SVGAnimatedString]' === g.toString() && (g = Aa(g.animVal).href);
            s.test(g) || !g || e.attr('target') || b.isDefaultPrevented() || !k.$$parseLinkUrl(g, h) || (b.preventDefault(), k.absUrl() != d.url() && (c.$apply(), U.angular['ff-684208-preventDefault'] = !0));
          }
        });
        k.absUrl() != m && d.url(k.absUrl(), !0);
        var t = !0;
        d.onUrlChange(function (a, b) {
          c.$evalAsync(function () {
            var d = k.absUrl(), e = k.$$state, f;
            k.$$parse(a);
            k.$$state = b;
            f = c.$broadcast('$locationChangeStart', a, d, b, e).defaultPrevented;
            k.absUrl() === a && (f ? (k.$$parse(d), k.$$state = e, g(d, !1, e)) : (t = !1, h(d, e)));
          });
          c.$$phase || c.$digest();
        });
        c.$watch(function () {
          var a = d.url(), b = d.state(), f = k.$$replace, l = a !== k.absUrl() || k.$$html5 && e.history && b !== k.$$state;
          if (t || l)
            t = !1, c.$evalAsync(function () {
              var d = k.absUrl(), e = c.$broadcast('$locationChangeStart', d, a, k.$$state, b).defaultPrevented;
              k.absUrl() === d && (e ? (k.$$parse(a), k.$$state = b) : (l && g(d, f, b === k.$$state ? null : k.$$state), h(a, b)));
            });
          k.$$replace = !1;
        });
        return k;
      }
    ];
  }
  function Ke() {
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
          var b = c.console || {}, e = b[a] || b.log || x;
          a = !1;
          try {
            a = !!e.apply;
          } catch (k) {
          }
          return a ? function () {
            var a = [];
            r(arguments, function (b) {
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
  function ra(b, a) {
    if ('__defineGetter__' === b || '__defineSetter__' === b || '__lookupGetter__' === b || '__lookupSetter__' === b || '__proto__' === b)
      throw la('isecfld', a);
    return b;
  }
  function sa(b, a) {
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
  function Oa(b, a, c, d) {
    sa(b, d);
    a = a.split('.');
    for (var e, f = 0; 1 < a.length; f++) {
      e = ra(a.shift(), d);
      var g = sa(b[e], d);
      g || (g = {}, b[e] = g);
      b = g;
    }
    e = ra(a.shift(), d);
    sa(b[e], d);
    return b[e] = c;
  }
  function Pa(b) {
    return 'constructor' == b;
  }
  function ad(b, a, c, d, e, f, g) {
    ra(b, f);
    ra(a, f);
    ra(c, f);
    ra(d, f);
    ra(e, f);
    var h = function (a) {
        return sa(a, f);
      }, k = g || Pa(b) ? h : oa, l = g || Pa(a) ? h : oa, m = g || Pa(c) ? h : oa, p = g || Pa(d) ? h : oa, s = g || Pa(e) ? h : oa;
    return function (f, g) {
      var h = g && g.hasOwnProperty(b) ? g : f;
      if (null == h)
        return h;
      h = k(h[b]);
      if (!a)
        return h;
      if (null == h)
        return u;
      h = l(h[a]);
      if (!c)
        return h;
      if (null == h)
        return u;
      h = m(h[c]);
      if (!d)
        return h;
      if (null == h)
        return u;
      h = p(h[d]);
      return e ? null == h ? u : h = s(h[e]) : h;
    };
  }
  function vf(b, a) {
    return function (c, d) {
      return b(c, d, sa, a);
    };
  }
  function bd(b, a, c) {
    var d = a.expensiveChecks, e = d ? wf : xf, f = e[b];
    if (f)
      return f;
    var g = b.split('.'), h = g.length;
    if (a.csp)
      f = 6 > h ? ad(g[0], g[1], g[2], g[3], g[4], c, d) : function (a, b) {
        var e = 0, f;
        do
          f = ad(g[e++], g[e++], g[e++], g[e++], g[e++], c, d)(a, b), b = u, a = f;
        while (e < h);
        return f;
      };
    else {
      var k = '';
      d && (k += 's = eso(s, fe);\nl = eso(l, fe);\n');
      var l = d;
      r(g, function (a, b) {
        ra(a, c);
        var e = (b ? 's' : '((l&&l.hasOwnProperty("' + a + '"))?l:s)') + '.' + a;
        if (d || Pa(a))
          e = 'eso(' + e + ', fe)', l = !0;
        k += 'if(s == null) return undefined;\ns=' + e + ';\n';
      });
      k += 'return s;';
      a = new Function('s', 'l', 'eso', 'fe', k);
      a.toString = ca(k);
      l && (a = vf(a, c));
      f = a;
    }
    f.sharedGetter = !0;
    f.assign = function (a, c) {
      return Oa(a, b, c, b);
    };
    return e[b] = f;
  }
  function fc(b) {
    return F(b.valueOf) ? b.valueOf() : yf.call(b);
  }
  function Le() {
    var b = ia(), a = ia();
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
            var k = g, e = e[0];
            return a.$watch(function (a) {
              var b = e(a);
              g(b, k) || (h = d(a), k = b && fc(b));
              return h;
            }, b, c);
          }
          for (var l = [], s = 0, m = e.length; s < m; s++)
            l[s] = g;
          return a.$watch(function (a) {
            for (var b = !1, c = 0, f = e.length; c < f; c++) {
              var k = e[c](a);
              if (b || (b = !g(k, l[c])))
                l[c] = k && fc(k);
            }
            b && (h = d(a));
            return h;
          }, b, c);
        }
        function k(a, b, c, d) {
          var e, f;
          return e = a.$watch(function (a) {
            return d(a);
          }, function (a, c, d) {
            f = a;
            F(b) && b.apply(this, arguments);
            y(a) && d.$$postDigest(function () {
              y(f) && e();
            });
          }, c);
        }
        function l(a, b, c, d) {
          function e(a) {
            var b = !0;
            r(a, function (a) {
              y(a) || (b = !1);
            });
            return b;
          }
          var f, g;
          return f = a.$watch(function (a) {
            return d(a);
          }, function (a, c, d) {
            g = a;
            F(b) && b.call(this, a, c, d);
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
            F(b) && b.apply(this, arguments);
            e();
          }, c);
        }
        function p(a, b) {
          if (!b)
            return a;
          var c = a.$$watchDelegate, c = c !== l && c !== k ? function (c, d) {
              var e = a(c, d);
              return b(e, c, d);
            } : function (c, d) {
              var e = a(c, d), f = b(e, c, d);
              return y(e) ? f : e;
            };
          a.$$watchDelegate && a.$$watchDelegate !== h ? c.$$watchDelegate = a.$$watchDelegate : b.$stateful || (c.$$watchDelegate = h, c.inputs = [a]);
          return c;
        }
        var s = {
            csp: d.csp,
            expensiveChecks: !1
          }, t = {
            csp: d.csp,
            expensiveChecks: !0
          };
        return function (d, f, g) {
          var v, w, O;
          switch (typeof d) {
          case 'string':
            O = d = d.trim();
            var E = g ? a : b;
            v = E[O];
            v || (':' === d.charAt(0) && ':' === d.charAt(1) && (w = !0, d = d.substring(2)), g = g ? t : s, v = new gc(g), v = new fb(v, c, g).parse(d), v.constant ? v.$$watchDelegate = m : w ? (v = e(v), v.$$watchDelegate = v.literal ? l : k) : v.inputs && (v.$$watchDelegate = h), E[O] = v);
            return p(v, f);
          case 'function':
            return p(d, f);
          default:
            return p(x, f);
          }
        };
      }
    ];
  }
  function Ne() {
    this.$get = [
      '$rootScope',
      '$exceptionHandler',
      function (b, a) {
        return cd(function (a) {
          b.$evalAsync(a);
        }, a);
      }
    ];
  }
  function Oe() {
    this.$get = [
      '$browser',
      '$exceptionHandler',
      function (b, a) {
        return cd(function (a) {
          b.defer(a);
        }, a);
      }
    ];
  }
  function cd(b, a) {
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
        c.pending = u;
        for (var f = 0, g = e.length; f < g; ++f) {
          d = e[f][0];
          b = e[f][c.status];
          try {
            F(b) ? d.resolve(b(c.value)) : 1 === c.status ? d.resolve(c.value) : d.reject(c.value);
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
    var h = z('$q', TypeError);
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
          return l(b, !0, a);
        }, function (b) {
          return l(b, !1, a);
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
          if (K(b) || F(b))
            d = b && b.then;
          F(d) ? (this.promise.$$state.status = -1, d.call(b, e[0], e[1], this.notify)) : (this.promise.$$state.value = b, this.promise.$$state.status = 1, f(this.promise.$$state));
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
              e.notify(F(b) ? b(c) : c);
            } catch (h) {
              a(h);
            }
          }
        });
      }
    };
    var k = function (a, b) {
        var c = new g();
        b ? c.resolve(a) : c.reject(a);
        return c.promise;
      }, l = function (a, b, c) {
        var d = null;
        try {
          F(c) && (d = c());
        } catch (e) {
          return k(e, !1);
        }
        return d && F(d.then) ? d.then(function () {
          return k(a, b);
        }, function (a) {
          return k(a, !1);
        }) : k(a, b);
      }, m = function (a, b, c, d) {
        var e = new g();
        e.resolve(a);
        return e.promise.then(b, c, d);
      }, p = function t(a) {
        if (!F(a))
          throw h('norslvr', a);
        if (!(this instanceof t))
          return new t(a);
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
      var b = new g(), c = 0, d = D(a) ? [] : {};
      r(a, function (a, e) {
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
  function Xe() {
    this.$get = [
      '$window',
      '$timeout',
      function (b, a) {
        var c = b.requestAnimationFrame || b.webkitRequestAnimationFrame || b.mozRequestAnimationFrame, d = b.cancelAnimationFrame || b.webkitCancelAnimationFrame || b.mozCancelAnimationFrame || b.webkitCancelRequestAnimationFrame, e = !!c, f = e ? function (a) {
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
  function Me() {
    var b = 10, a = z('$rootScope'), c = null, d = null;
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
        function k() {
          this.$id = ++kb;
          this.$$phase = this.$parent = this.$$watchers = this.$$nextSibling = this.$$prevSibling = this.$$childHead = this.$$childTail = null;
          this.$root = this;
          this.$$destroyed = !1;
          this.$$listeners = {};
          this.$$listenerCount = {};
          this.$$isolateBindings = null;
        }
        function l(b) {
          if (q.$$phase)
            throw a('inprog', q.$$phase);
          q.$$phase = b;
        }
        function m(a, b, c) {
          do
            a.$$listenerCount[c] -= b, 0 === a.$$listenerCount[c] && delete a.$$listenerCount[c];
          while (a = a.$parent);
        }
        function p() {
        }
        function s() {
          for (; v.length;)
            try {
              v.shift()();
            } catch (a) {
              f(a);
            }
          d = null;
        }
        function t() {
          null === d && (d = h.defer(function () {
            q.$apply(s);
          }));
        }
        k.prototype = {
          constructor: k,
          $new: function (a, b) {
            function c() {
              d.$$destroyed = !0;
            }
            var d;
            b = b || this;
            a ? (d = new k(), d.$root = this.$root) : (this.$$ChildScope || (this.$$ChildScope = function () {
              this.$$watchers = this.$$nextSibling = this.$$childHead = this.$$childTail = null;
              this.$$listeners = {};
              this.$$listenerCount = {};
              this.$id = ++kb;
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
            F(b) || (h.fn = x);
            f || (f = this.$$watchers = []);
            f.unshift(h);
            return function () {
              Va(f, h);
              c = null;
            };
          },
          $watchGroup: function (a, b) {
            function c() {
              h = !1;
              k ? (k = !1, b(e, e, g)) : b(e, d, g);
            }
            var d = Array(a.length), e = Array(a.length), f = [], g = this, h = !1, k = !0;
            if (!a.length) {
              var l = !0;
              g.$evalAsync(function () {
                l && b(e, e, g);
              });
              return function () {
                l = !1;
              };
            }
            if (1 === a.length)
              return this.$watch(a[0], function (a, c, f) {
                e[0] = a;
                d[0] = c;
                b(e, a === c ? e : d, f);
              });
            r(a, function (a, b) {
              var k = g.$watch(a, function (a, f) {
                  e[b] = a;
                  d[b] = f;
                  h || (h = !0, g.$evalAsync(c));
                });
              f.push(k);
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
              if (!G(e)) {
                if (K(e))
                  if (Ra(e))
                    for (f !== p && (f = p, n = f.length = 0, l++), a = e.length, n !== a && (l++, f.length = n = a), b = 0; b < a; b++)
                      h = f[b], g = e[b], d = h !== h && g !== g, d || h === g || (l++, f[b] = g);
                  else {
                    f !== s && (f = s = {}, n = 0, l++);
                    a = 0;
                    for (b in e)
                      e.hasOwnProperty(b) && (a++, g = e[b], h = f[b], b in f ? (d = h !== h && g !== g, d || h === g || (l++, f[b] = g)) : (n++, f[b] = g, l++));
                    if (n > a)
                      for (b in l++, f)
                        e.hasOwnProperty(b) || (n--, delete f[b]);
                  }
                else
                  f !== e && (f = e, l++);
                return l;
              }
            }
            c.$stateful = !0;
            var d = this, e, f, h, k = 1 < b.length, l = 0, m = g(a, c), p = [], s = {}, q = !0, n = 0;
            return this.$watch(m, function () {
              q ? (q = !1, b(e, e, d)) : b(e, h, d);
              if (k)
                if (K(e))
                  if (Ra(e)) {
                    h = Array(e.length);
                    for (var a = 0; a < e.length; a++)
                      h[a] = e[a];
                  } else
                    for (a in h = {}, e)
                      Jb.call(e, a) && (h[a] = e[a]);
                else
                  h = e;
            });
          },
          $digest: function () {
            var e, g, k, m, t, v, r = b, L, u = [], y, Q;
            l('$digest');
            h.$$checkUrlChange();
            this === q && null !== d && (h.defer.cancel(d), s());
            c = null;
            do {
              v = !1;
              for (L = this; N.length;) {
                try {
                  Q = N.shift(), Q.scope.$eval(Q.expression);
                } catch (z) {
                  f(z);
                }
                c = null;
              }
              a:
                do {
                  if (m = L.$$watchers)
                    for (t = m.length; t--;)
                      try {
                        if (e = m[t])
                          if ((g = e.get(L)) !== (k = e.last) && !(e.eq ? pa(g, k) : 'number' === typeof g && 'number' === typeof k && isNaN(g) && isNaN(k)))
                            v = !0, c = e, e.last = e.eq ? Ca(g, null) : g, e.fn(g, k === p ? g : k, L), 5 > r && (y = 4 - r, u[y] || (u[y] = []), u[y].push({
                              msg: F(e.exp) ? 'fn: ' + (e.exp.name || e.exp.toString()) : e.exp,
                              newVal: g,
                              oldVal: k
                            }));
                          else if (e === c) {
                            v = !1;
                            break a;
                          }
                      } catch (A) {
                        f(A);
                      }
                  if (!(m = L.$$childHead || L !== this && L.$$nextSibling))
                    for (; L !== this && !(m = L.$$nextSibling);)
                      L = L.$parent;
                } while (L = m);
              if ((v || N.length) && !r--)
                throw q.$$phase = null, a('infdig', b, u);
            } while (v || N.length);
            for (q.$$phase = null; n.length;)
              try {
                n.shift()();
              } catch (da) {
                f(da);
              }
          },
          $destroy: function () {
            if (!this.$$destroyed) {
              var a = this.$parent;
              this.$broadcast('$destroy');
              this.$$destroyed = !0;
              if (this !== q) {
                for (var b in this.$$listenerCount)
                  m(this, this.$$listenerCount[b], b);
                a.$$childHead == this && (a.$$childHead = this.$$nextSibling);
                a.$$childTail == this && (a.$$childTail = this.$$prevSibling);
                this.$$prevSibling && (this.$$prevSibling.$$nextSibling = this.$$nextSibling);
                this.$$nextSibling && (this.$$nextSibling.$$prevSibling = this.$$prevSibling);
                this.$destroy = this.$digest = this.$apply = this.$evalAsync = this.$applyAsync = x;
                this.$on = this.$watch = this.$watchGroup = function () {
                  return x;
                };
                this.$$listeners = {};
                this.$parent = this.$$nextSibling = this.$$prevSibling = this.$$childHead = this.$$childTail = this.$root = this.$$watchers = null;
              }
            }
          },
          $eval: function (a, b) {
            return g(a)(this, b);
          },
          $evalAsync: function (a) {
            q.$$phase || N.length || h.defer(function () {
              N.length && q.$digest();
            });
            N.push({
              scope: this,
              expression: a
            });
          },
          $$postDigest: function (a) {
            n.push(a);
          },
          $apply: function (a) {
            try {
              return l('$apply'), this.$eval(a);
            } catch (b) {
              f(b);
            } finally {
              q.$$phase = null;
              try {
                q.$digest();
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
            t();
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
              }, k = Xa([h], arguments, 1), l, m;
            do {
              d = e.$$listeners[a] || c;
              h.currentScope = e;
              l = 0;
              for (m = d.length; l < m; l++)
                if (d[l])
                  try {
                    d[l].apply(null, k);
                  } catch (p) {
                    f(p);
                  }
                else
                  d.splice(l, 1), l--, m--;
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
            for (var g = Xa([e], arguments, 1), h, k; c = d;) {
              e.currentScope = c;
              d = c.$$listeners[a] || [];
              h = 0;
              for (k = d.length; h < k; h++)
                if (d[h])
                  try {
                    d[h].apply(null, g);
                  } catch (l) {
                    f(l);
                  }
                else
                  d.splice(h, 1), h--, k--;
              if (!(d = c.$$listenerCount[a] && c.$$childHead || c !== this && c.$$nextSibling))
                for (; c !== this && !(d = c.$$nextSibling);)
                  c = c.$parent;
            }
            e.currentScope = null;
            return e;
          }
        };
        var q = new k(), N = q.$$asyncQueue = [], n = q.$$postDigestQueue = [], v = q.$$applyAsyncQueue = [];
        return q;
      }
    ];
  }
  function Pd() {
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
        f = Aa(c).href;
        return '' === f || f.match(e) ? c : 'unsafe:' + f;
      };
    };
  }
  function zf(b) {
    if ('self' === b)
      return b;
    if (I(b)) {
      if (-1 < b.indexOf('***'))
        throw Ba('iwcard', b);
      b = dd(b).replace('\\*\\*', '.*').replace('\\*', '[^:/.?&;]*');
      return new RegExp('^' + b + '$');
    }
    if (lb(b))
      return new RegExp('^' + b.source + '$');
    throw Ba('imatcher');
  }
  function ed(b) {
    var a = [];
    y(b) && r(b, function (b) {
      a.push(zf(b));
    });
    return a;
  }
  function Qe() {
    this.SCE_CONTEXTS = ma;
    var b = ['self'], a = [];
    this.resourceUrlWhitelist = function (a) {
      arguments.length && (b = ed(a));
      return b;
    };
    this.resourceUrlBlacklist = function (b) {
      arguments.length && (a = ed(b));
      return a;
    };
    this.$get = [
      '$injector',
      function (c) {
        function d(a, b) {
          return 'self' === a ? Wc(b) : !!a.exec(b.href);
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
          throw Ba('unsafe');
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
              throw Ba('icontext', a, b);
            if (null === b || b === u || '' === b)
              return b;
            if ('string' !== typeof b)
              throw Ba('itype', a);
            return new c(b);
          },
          getTrusted: function (c, e) {
            if (null === e || e === u || '' === e)
              return e;
            var g = h.hasOwnProperty(c) ? h[c] : null;
            if (g && e instanceof g)
              return e.$$unwrapTrustedValue();
            if (c === ma.RESOURCE_URL) {
              var g = Aa(e.toString()), p, s, t = !1;
              p = 0;
              for (s = b.length; p < s; p++)
                if (d(b[p], g)) {
                  t = !0;
                  break;
                }
              if (t)
                for (p = 0, s = a.length; p < s; p++)
                  if (d(a[p], g)) {
                    t = !1;
                    break;
                  }
              if (t)
                return e;
              throw Ba('insecurl', e.toString());
            }
            if (c === ma.HTML)
              return f(e);
            throw Ba('unsafe');
          },
          valueOf: function (a) {
            return a instanceof g ? a.$$unwrapTrustedValue() : a;
          }
        };
      }
    ];
  }
  function Pe() {
    var b = !0;
    this.enabled = function (a) {
      arguments.length && (b = !!a);
      return b;
    };
    this.$get = [
      '$parse',
      '$sceDelegate',
      function (a, c) {
        if (b && 8 > Ha)
          throw Ba('iequirks');
        var d = ua(ma);
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
        r(ma, function (a, b) {
          var c = R(b);
          d[bb('parse_as_' + c)] = function (b) {
            return e(a, b);
          };
          d[bb('get_trusted_' + c)] = function (b) {
            return f(a, b);
          };
          d[bb('trust_as_' + c)] = function (b) {
            return g(a, b);
          };
        });
        return d;
      }
    ];
  }
  function Re() {
    this.$get = [
      '$window',
      '$document',
      function (b, a) {
        var c = {}, d = $((/android (\d+)/.exec(R((b.navigator || {}).userAgent)) || [])[1]), e = /Boxee/i.test((b.navigator || {}).userAgent), f = a[0] || {}, g, h = /^(Moz|webkit|ms)(?=[A-Z])/, k = f.body && f.body.style, l = !1, m = !1;
        if (k) {
          for (var p in k)
            if (l = h.exec(p)) {
              g = l[0];
              g = g.substr(0, 1).toUpperCase() + g.substr(1);
              break;
            }
          g || (g = 'WebkitOpacity' in k && 'webkit');
          l = !!('transition' in k || g + 'Transition' in k);
          m = !!('animation' in k || g + 'Animation' in k);
          !d || l && m || (l = I(f.body.style.webkitTransition), m = I(f.body.style.webkitAnimation));
        }
        return {
          history: !(!b.history || !b.history.pushState || 4 > d || e),
          hasEvent: function (a) {
            if ('input' == a && 9 == Ha)
              return !1;
            if (G(c[a])) {
              var b = f.createElement('div');
              c[a] = 'on' + a in b;
            }
            return c[a];
          },
          csp: $a(),
          vendorPrefix: g,
          transitions: l,
          animations: m,
          android: d
        };
      }
    ];
  }
  function Te() {
    this.$get = [
      '$templateCache',
      '$http',
      '$q',
      function (b, a, c) {
        function d(e, f) {
          d.totalPendingRequests++;
          var g = a.defaults && a.defaults.transformResponse;
          if (D(g))
            for (var h = g, g = [], k = 0; k < h.length; ++k) {
              var l = h[k];
              l !== Yb && g.push(l);
            }
          else
            g === Yb && (g = null);
          return a.get(e, {
            cache: b,
            transformResponse: g
          }).then(function (a) {
            a = a.data;
            d.totalPendingRequests--;
            b.put(e, a);
            return a;
          }, function () {
            d.totalPendingRequests--;
            if (!f)
              throw ka('tpload', e);
            return c.reject();
          });
        }
        d.totalPendingRequests = 0;
        return d;
      }
    ];
  }
  function Ue() {
    this.$get = [
      '$rootScope',
      '$browser',
      '$location',
      function (b, a, c) {
        return {
          findBindings: function (a, b, c) {
            a = a.getElementsByClassName('ng-binding');
            var g = [];
            r(a, function (a) {
              var d = ha.element(a).data('$binding');
              d && r(d, function (d) {
                c ? new RegExp('(^|\\s)' + dd(b) + '(\\s|\\||$)').test(d) && g.push(a) : -1 != d.indexOf(b) && g.push(a);
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
              var k = a.querySelectorAll('[' + g[h] + 'model' + (c ? '=' : '*=') + '"' + b + '"]');
              if (k.length)
                return k;
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
  function Ve() {
    this.$get = [
      '$rootScope',
      '$browser',
      '$q',
      '$$q',
      '$exceptionHandler',
      function (b, a, c, d, e) {
        function f(f, k, l) {
          var m = y(l) && !l, p = (m ? d : c).defer(), s = p.promise;
          k = a.defer(function () {
            try {
              p.resolve(f());
            } catch (a) {
              p.reject(a), e(a);
            } finally {
              delete g[s.$$timeoutId];
            }
            m || b.$apply();
          }, k);
          s.$$timeoutId = k;
          g[k] = p;
          return s;
        }
        var g = {};
        f.cancel = function (b) {
          return b && b.$$timeoutId in g ? (g[b.$$timeoutId].reject('canceled'), delete g[b.$$timeoutId], a.defer.cancel(b.$$timeoutId)) : !1;
        };
        return f;
      }
    ];
  }
  function Aa(b) {
    Ha && (Y.setAttribute('href', b), b = Y.href);
    Y.setAttribute('href', b);
    return {
      href: Y.href,
      protocol: Y.protocol ? Y.protocol.replace(/:$/, '') : '',
      host: Y.host,
      search: Y.search ? Y.search.replace(/^\?/, '') : '',
      hash: Y.hash ? Y.hash.replace(/^#/, '') : '',
      hostname: Y.hostname,
      port: Y.port,
      pathname: '/' === Y.pathname.charAt(0) ? Y.pathname : '/' + Y.pathname
    };
  }
  function Wc(b) {
    b = I(b) ? Aa(b) : b;
    return b.protocol === fd.protocol && b.host === fd.host;
  }
  function We() {
    this.$get = ca(U);
  }
  function Bc(b) {
    function a(c, d) {
      if (K(c)) {
        var e = {};
        r(c, function (b, c) {
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
    a('currency', gd);
    a('date', hd);
    a('filter', Af);
    a('json', Bf);
    a('limitTo', Cf);
    a('lowercase', Df);
    a('number', id);
    a('orderBy', jd);
    a('uppercase', Ef);
  }
  function Af() {
    return function (b, a, c) {
      if (!D(b))
        return b;
      var d = typeof c, e = [];
      e.check = function (a, b) {
        for (var c = 0; c < e.length; c++)
          if (!e[c](a, b))
            return !1;
        return !0;
      };
      'function' !== d && (c = 'boolean' === d && c ? function (a, b) {
        return ha.equals(a, b);
      } : function (a, b) {
        if (a && b && 'object' === typeof a && 'object' === typeof b) {
          for (var d in a)
            if ('$' !== d.charAt(0) && Jb.call(a, d) && c(a[d], b[d]))
              return !0;
          return !1;
        }
        b = ('' + b).toLowerCase();
        return -1 < ('' + a).toLowerCase().indexOf(b);
      });
      var f = function (a, b) {
        if ('string' === typeof b && '!' === b.charAt(0))
          return !f(a, b.substr(1));
        switch (typeof a) {
        case 'boolean':
        case 'number':
        case 'string':
          return c(a, b);
        case 'object':
          switch (typeof b) {
          case 'object':
            return c(a, b);
          default:
            for (var d in a)
              if ('$' !== d.charAt(0) && f(a[d], b))
                return !0;
          }
          return !1;
        case 'array':
          for (d = 0; d < a.length; d++)
            if (f(a[d], b))
              return !0;
          return !1;
        default:
          return !1;
        }
      };
      switch (typeof a) {
      case 'boolean':
      case 'number':
      case 'string':
        a = { $: a };
      case 'object':
        for (var g in a)
          (function (b) {
            'undefined' !== typeof a[b] && e.push(function (c) {
              return f('$' == b ? c : c && c[b], a[b]);
            });
          }(g));
        break;
      case 'function':
        e.push(a);
        break;
      default:
        return b;
      }
      d = [];
      for (g = 0; g < b.length; g++) {
        var h = b[g];
        e.check(h, g) && d.push(h);
      }
      return d;
    };
  }
  function gd(b) {
    var a = b.NUMBER_FORMATS;
    return function (b, d, e) {
      G(d) && (d = a.CURRENCY_SYM);
      G(e) && (e = a.PATTERNS[1].maxFrac);
      return null == b ? b : kd(b, a.PATTERNS[1], a.GROUP_SEP, a.DECIMAL_SEP, e).replace(/\u00A4/g, d);
    };
  }
  function id(b) {
    var a = b.NUMBER_FORMATS;
    return function (b, d) {
      return null == b ? b : kd(b, a.PATTERNS[0], a.GROUP_SEP, a.DECIMAL_SEP, d);
    };
  }
  function kd(b, a, c, d, e) {
    if (!isFinite(b) || K(b))
      return '';
    var f = 0 > b;
    b = Math.abs(b);
    var g = b + '', h = '', k = [], l = !1;
    if (-1 !== g.indexOf('e')) {
      var m = g.match(/([\d\.]+)e(-?)(\d+)/);
      m && '-' == m[2] && m[3] > e + 1 ? (g = '0', b = 0) : (h = g, l = !0);
    }
    if (l)
      0 < e && -1 < b && 1 > b && (h = b.toFixed(e));
    else {
      g = (g.split(ld)[1] || '').length;
      G(e) && (e = Math.min(Math.max(a.minFrac, g), a.maxFrac));
      b = +(Math.round(+(b.toString() + 'e' + e)).toString() + 'e' + -e);
      0 === b && (f = !1);
      b = ('' + b).split(ld);
      g = b[0];
      b = b[1] || '';
      var m = 0, p = a.lgSize, s = a.gSize;
      if (g.length >= p + s)
        for (m = g.length - p, l = 0; l < m; l++)
          0 === (m - l) % s && 0 !== l && (h += c), h += g.charAt(l);
      for (l = m; l < g.length; l++)
        0 === (g.length - l) % p && 0 !== l && (h += c), h += g.charAt(l);
      for (; b.length < e;)
        b += '0';
      e && '0' !== e && (h += d + b.substr(0, e));
    }
    k.push(f ? a.negPre : a.posPre, h, f ? a.negSuf : a.posSuf);
    return k.join('');
  }
  function Cb(b, a, c) {
    var d = '';
    0 > b && (d = '-', b = -b);
    for (b = '' + b; b.length < a;)
      b = '0' + b;
    c && (b = b.substr(b.length - a));
    return d + b;
  }
  function Z(b, a, c, d) {
    c = c || 0;
    return function (e) {
      e = e['get' + b]();
      if (0 < c || e > -c)
        e += c;
      0 === e && -12 == c && (e = 12);
      return Cb(e, a, d);
    };
  }
  function Db(b, a) {
    return function (c, d) {
      var e = c['get' + b](), f = rb(a ? 'SHORT' + b : b);
      return d[f][e];
    };
  }
  function md(b) {
    var a = new Date(b, 0, 1).getDay();
    return new Date(b, 0, (4 >= a ? 5 : 12) - a);
  }
  function nd(b) {
    return function (a) {
      var c = md(a.getFullYear());
      a = +new Date(a.getFullYear(), a.getMonth(), a.getDate() + (4 - a.getDay())) - +c;
      a = 1 + Math.round(a / 604800000);
      return Cb(a, b);
    };
  }
  function hd(b) {
    function a(a) {
      var b;
      if (b = a.match(c)) {
        a = new Date(0);
        var f = 0, g = 0, h = b[8] ? a.setUTCFullYear : a.setFullYear, k = b[8] ? a.setUTCHours : a.setHours;
        b[9] && (f = $(b[9] + b[10]), g = $(b[9] + b[11]));
        h.call(a, $(b[1]), $(b[2]) - 1, $(b[3]));
        f = $(b[4] || 0) - f;
        g = $(b[5] || 0) - g;
        h = $(b[6] || 0);
        b = Math.round(1000 * parseFloat('0.' + (b[7] || 0)));
        k.call(a, f, g, h, b);
      }
      return a;
    }
    var c = /^(\d{4})-?(\d\d)-?(\d\d)(?:T(\d\d)(?::?(\d\d)(?::?(\d\d)(?:\.(\d+))?)?)?(Z|([+-])(\d\d):?(\d\d))?)?$/;
    return function (c, e, f) {
      var g = '', h = [], k, l;
      e = e || 'mediumDate';
      e = b.DATETIME_FORMATS[e] || e;
      I(c) && (c = Ff.test(c) ? $(c) : a(c));
      X(c) && (c = new Date(c));
      if (!fa(c))
        return c;
      for (; e;)
        (l = Gf.exec(e)) ? (h = Xa(h, l, 1), e = h.pop()) : (h.push(e), e = null);
      f && 'UTC' === f && (c = new Date(c.getTime()), c.setMinutes(c.getMinutes() + c.getTimezoneOffset()));
      r(h, function (a) {
        k = Hf[a];
        g += k ? k(c, b.DATETIME_FORMATS) : a.replace(/(^'|'$)/g, '').replace(/''/g, '\'');
      });
      return g;
    };
  }
  function Bf() {
    return function (b) {
      return Za(b, !0);
    };
  }
  function Cf() {
    return function (b, a) {
      X(b) && (b = b.toString());
      if (!D(b) && !I(b))
        return b;
      a = Infinity === Math.abs(Number(a)) ? Number(a) : $(a);
      if (I(b))
        return a ? 0 <= a ? b.slice(0, a) : b.slice(a, b.length) : '';
      var c = [], d, e;
      a > b.length ? a = b.length : a < -b.length && (a = -b.length);
      0 < a ? (d = 0, e = a) : (d = b.length + a, e = b.length);
      for (; d < e; d++)
        c.push(b[d]);
      return c;
    };
  }
  function jd(b) {
    return function (a, c, d) {
      function e(a, b) {
        return b ? function (b, c) {
          return a(c, b);
        } : a;
      }
      function f(a, b) {
        var c = typeof a, d = typeof b;
        return c == d ? (fa(a) && fa(b) && (a = a.valueOf(), b = b.valueOf()), 'string' == c && (a = a.toLowerCase(), b = b.toLowerCase()), a === b ? 0 : a < b ? -1 : 1) : c < d ? -1 : 1;
      }
      if (!Ra(a))
        return a;
      c = D(c) ? c : [c];
      0 === c.length && (c = ['+']);
      c = c.map(function (a) {
        var c = !1, d = a || oa;
        if (I(a)) {
          if ('+' == a.charAt(0) || '-' == a.charAt(0))
            c = '-' == a.charAt(0), a = a.substring(1);
          if ('' === a)
            return e(function (a, b) {
              return f(a, b);
            }, c);
          d = b(a);
          if (d.constant) {
            var l = d();
            return e(function (a, b) {
              return f(a[l], b[l]);
            }, c);
          }
        }
        return e(function (a, b) {
          return f(d(a), d(b));
        }, c);
      });
      return Ya.call(a).sort(e(function (a, b) {
        for (var d = 0; d < c.length; d++) {
          var e = c[d](a, b);
          if (0 !== e)
            return e;
        }
        return 0;
      }, d));
    };
  }
  function Ia(b) {
    F(b) && (b = { link: b });
    b.restrict = b.restrict || 'AC';
    return ca(b);
  }
  function od(b, a, c, d, e) {
    var f = this, g = [], h = f.$$parentForm = b.parent().controller('form') || Eb;
    f.$error = {};
    f.$$success = {};
    f.$pending = u;
    f.$name = e(a.name || a.ngForm || '')(c);
    f.$dirty = !1;
    f.$pristine = !0;
    f.$valid = !0;
    f.$invalid = !1;
    f.$submitted = !1;
    h.$addControl(f);
    f.$rollbackViewValue = function () {
      r(g, function (a) {
        a.$rollbackViewValue();
      });
    };
    f.$commitViewValue = function () {
      r(g, function (a) {
        a.$commitViewValue();
      });
    };
    f.$addControl = function (a) {
      La(a.$name, 'input');
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
      r(f.$pending, function (b, c) {
        f.$setValidity(c, null, a);
      });
      r(f.$error, function (b, c) {
        f.$setValidity(c, null, a);
      });
      Va(g, a);
    };
    pd({
      ctrl: this,
      $element: b,
      set: function (a, b, c) {
        var d = a[b];
        d ? -1 === d.indexOf(c) && d.push(c) : a[b] = [c];
      },
      unset: function (a, b, c) {
        var d = a[b];
        d && (Va(d, c), 0 === d.length && delete a[b]);
      },
      parentForm: h,
      $animate: d
    });
    f.$setDirty = function () {
      d.removeClass(b, Qa);
      d.addClass(b, Fb);
      f.$dirty = !0;
      f.$pristine = !1;
      h.$setDirty();
    };
    f.$setPristine = function () {
      d.setClass(b, Qa, Fb + ' ng-submitted');
      f.$dirty = !1;
      f.$pristine = !0;
      f.$submitted = !1;
      r(g, function (a) {
        a.$setPristine();
      });
    };
    f.$setUntouched = function () {
      r(g, function (a) {
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
  function gb(b, a, c, d, e, f) {
    var g = a[0].placeholder, h = {}, k = R(a[0].type);
    if (!e.android) {
      var l = !1;
      a.on('compositionstart', function (a) {
        l = !0;
      });
      a.on('compositionend', function () {
        l = !1;
        m();
      });
    }
    var m = function (b) {
      if (!l) {
        var e = a.val(), f = b && b.type;
        Ha && 'input' === (b || h).type && a[0].placeholder !== g ? g = a[0].placeholder : ('password' === k || c.ngTrim && 'false' === c.ngTrim || (e = P(e)), (d.$viewValue !== e || '' === e && d.$$hasNativeValidators) && d.$setViewValue(e, f));
      }
    };
    if (e.hasEvent('input'))
      a.on('input', m);
    else {
      var p, s = function (a) {
          p || (p = f.defer(function () {
            m(a);
            p = null;
          }));
        };
      a.on('keydown', function (a) {
        var b = a.keyCode;
        91 === b || 15 < b && 19 > b || 37 <= b && 40 >= b || s(a);
      });
      if (e.hasEvent('paste'))
        a.on('paste cut', s);
    }
    a.on('change', m);
    d.$render = function () {
      a.val(d.$isEmpty(d.$viewValue) ? '' : d.$viewValue);
    };
  }
  function Gb(b, a) {
    return function (c, d) {
      var e, f;
      if (fa(c))
        return c;
      if (I(c)) {
        '"' == c.charAt(0) && '"' == c.charAt(c.length - 1) && (c = c.substring(1, c.length - 1));
        if (If.test(c))
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
          }, r(e, function (b, c) {
            c < a.length && (f[a[c]] = +b);
          }), new Date(f.yyyy, f.MM - 1, f.dd, f.HH, f.mm, f.ss || 0, 1000 * f.sss || 0);
      }
      return NaN;
    };
  }
  function hb(b, a, c, d) {
    return function (e, f, g, h, k, l, m) {
      function p(a) {
        return a && !(a.getTime && a.getTime() !== a.getTime());
      }
      function s(a) {
        return y(a) ? fa(a) ? a : c(a) : u;
      }
      qd(e, f, g, h);
      gb(e, f, g, h, k, l);
      var t = h && h.$options && h.$options.timezone, q;
      h.$$parserName = b;
      h.$parsers.push(function (b) {
        return h.$isEmpty(b) ? null : a.test(b) ? (b = c(b, q), 'UTC' === t && b.setMinutes(b.getMinutes() - b.getTimezoneOffset()), b) : u;
      });
      h.$formatters.push(function (a) {
        if (a && !fa(a))
          throw Hb('datefmt', a);
        if (p(a)) {
          if ((q = a) && 'UTC' === t) {
            var b = 60000 * q.getTimezoneOffset();
            q = new Date(q.getTime() + b);
          }
          return m('date')(a, d, t);
        }
        q = null;
        return '';
      });
      if (y(g.min) || g.ngMin) {
        var r;
        h.$validators.min = function (a) {
          return !p(a) || G(r) || c(a) >= r;
        };
        g.$observe('min', function (a) {
          r = s(a);
          h.$validate();
        });
      }
      if (y(g.max) || g.ngMax) {
        var n;
        h.$validators.max = function (a) {
          return !p(a) || G(n) || c(a) <= n;
        };
        g.$observe('max', function (a) {
          n = s(a);
          h.$validate();
        });
      }
    };
  }
  function qd(b, a, c, d) {
    (d.$$hasNativeValidators = K(a[0].validity)) && d.$parsers.push(function (b) {
      var c = a.prop('validity') || {};
      return c.badInput && !c.typeMismatch ? u : b;
    });
  }
  function rd(b, a, c, d, e) {
    if (y(d)) {
      b = b(d);
      if (!b.constant)
        throw z('ngModel')('constexpr', c, d);
      return b(a);
    }
    return e;
  }
  function pd(b) {
    function a(a, b) {
      b && !f[a] ? (l.addClass(e, a), f[a] = !0) : !b && f[a] && (l.removeClass(e, a), f[a] = !1);
    }
    function c(b, c) {
      b = b ? '-' + Mb(b, '-') : '';
      a(ib + b, !0 === c);
      a(sd + b, !1 === c);
    }
    var d = b.ctrl, e = b.$element, f = {}, g = b.set, h = b.unset, k = b.parentForm, l = b.$animate;
    f[sd] = !(f[ib] = e.hasClass(ib));
    d.$setValidity = function (b, e, f) {
      e === u ? (d.$pending || (d.$pending = {}), g(d.$pending, b, f)) : (d.$pending && h(d.$pending, b, f), td(d.$pending) && (d.$pending = u));
      Ua(e) ? e ? (h(d.$error, b, f), g(d.$$success, b, f)) : (g(d.$error, b, f), h(d.$$success, b, f)) : (h(d.$error, b, f), h(d.$$success, b, f));
      d.$pending ? (a(ud, !0), d.$valid = d.$invalid = u, c('', null)) : (a(ud, !1), d.$valid = td(d.$error), d.$invalid = !d.$valid, c('', d.$valid));
      e = d.$pending && d.$pending[b] ? u : d.$error[b] ? !1 : d.$$success[b] ? !0 : null;
      c(b, e);
      k.$setValidity(b, e, d);
    };
  }
  function td(b) {
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
          if (!D(a)) {
            if (I(a))
              return a.split(' ');
            if (K(a)) {
              var b = [];
              r(a, function (a, c) {
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
            function k(a, b) {
              var c = g.data('$classCounts') || {}, d = [];
              r(a, function (a) {
                if (0 < b || c[a])
                  c[a] = (c[a] || 0) + b, c[a] === +(0 < b) && d.push(a);
              });
              g.data('$classCounts', c);
              return d.join(' ');
            }
            function l(b) {
              if (!0 === a || f.$index % 2 === a) {
                var l = e(b || []);
                if (!m) {
                  var t = k(l, 1);
                  h.$addClass(t);
                } else if (!pa(b, m)) {
                  var q = e(m), t = d(l, q), l = d(q, l), t = k(t, 1), l = k(l, -1);
                  t && t.length && c.addClass(g, t);
                  l && l.length && c.removeClass(g, l);
                }
              }
              m = ua(b);
            }
            var m;
            f.$watch(h[b], l, !0);
            h.$observe('class', function (a) {
              l(f.$eval(h[b]));
            });
            'ngClass' !== b && f.$watch('$index', function (c, d) {
              var g = c & 1;
              if (g !== (d & 1)) {
                var l = e(f.$eval(h[b]));
                g === a ? (g = k(l, 1), h.$addClass(g)) : (g = k(l, -1), h.$removeClass(g));
              }
            });
          }
        };
      }
    ];
  }
  var Jf = /^\/(.+)\/([a-z]*)$/, R = function (b) {
      return I(b) ? b.toLowerCase() : b;
    }, Jb = Object.prototype.hasOwnProperty, rb = function (b) {
      return I(b) ? b.toUpperCase() : b;
    }, Ha, A, qa, Ya = [].slice, of = [].splice, Kf = [].push, Ja = Object.prototype.toString, Wa = z('ng'), ha = U.angular || (U.angular = {}), ab, kb = 0;
  Ha = V.documentMode;
  x.$inject = [];
  oa.$inject = [];
  var D = Array.isArray, P = function (b) {
      return I(b) ? b.trim() : b;
    }, dd = function (b) {
      return b.replace(/([-()\[\]{}+?*.$\^|,:#<!\\])/g, '\\$1').replace(/\x08/g, '\\x08');
    }, $a = function () {
      if (y($a.isActive_))
        return $a.isActive_;
      var b = !(!V.querySelector('[ng-csp]') && !V.querySelector('[data-ng-csp]'));
      if (!b)
        try {
          new Function('');
        } catch (a) {
          b = !0;
        }
      return $a.isActive_ = b;
    }, ob = [
      'ng-',
      'data-ng-',
      'ng:',
      'x-ng-'
    ], Jd = /[A-Z]/g, sc = !1, Nb, na = 1, mb = 3, Nd = {
      full: '1.3.4',
      major: 1,
      minor: 3,
      dot: 4,
      codeName: 'highfalutin-petroglyph'
    };
  S.expando = 'ng339';
  var wb = S.cache = {}, df = 1;
  S._data = function (b) {
    return this.cache[b[this.expando]] || {};
  };
  var Ze = /([\:\-\_]+(.))/g, $e = /^moz([A-Z])/, Lf = {
      mouseleave: 'mouseout',
      mouseenter: 'mouseover'
    }, Qb = z('jqLite'), cf = /^<(\w+)\s*\/?>(?:<\/\1>|)$/, Pb = /<|&#?\w+;/, af = /<([\w:]+)/, bf = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi, ja = {
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
  ja.optgroup = ja.option;
  ja.tbody = ja.tfoot = ja.colgroup = ja.caption = ja.thead;
  ja.th = ja.td;
  var Ka = S.prototype = {
      ready: function (b) {
        function a() {
          c || (c = !0, b());
        }
        var c = !1;
        'complete' === V.readyState ? setTimeout(a) : (this.on('DOMContentLoaded', a), S(U).on('load', a));
      },
      toString: function () {
        var b = [];
        r(this, function (a) {
          b.push('' + a);
        });
        return '[' + b.join(', ') + ']';
      },
      eq: function (b) {
        return 0 <= b ? A(this[b]) : A(this[this.length + b]);
      },
      length: 0,
      push: Kf,
      sort: [].sort,
      splice: [].splice
    }, yb = {};
  r('multiple selected checked disabled readOnly required open'.split(' '), function (b) {
    yb[R(b)] = b;
  });
  var Kc = {};
  r('input select option textarea button form details'.split(' '), function (b) {
    Kc[b] = !0;
  });
  var Lc = {
      ngMinlength: 'minlength',
      ngMaxlength: 'maxlength',
      ngMin: 'min',
      ngMax: 'max',
      ngPattern: 'pattern'
    };
  r({
    data: Sb,
    removeData: ub
  }, function (b, a) {
    S[a] = b;
  });
  r({
    data: Sb,
    inheritedData: xb,
    scope: function (b) {
      return A.data(b, '$scope') || xb(b.parentNode || b, [
        '$isolateScope',
        '$scope'
      ]);
    },
    isolateScope: function (b) {
      return A.data(b, '$isolateScope') || A.data(b, '$isolateScopeNoTemplate');
    },
    controller: Gc,
    injector: function (b) {
      return xb(b, '$injector');
    },
    removeAttr: function (b, a) {
      b.removeAttribute(a);
    },
    hasClass: Tb,
    css: function (b, a, c) {
      a = bb(a);
      if (y(c))
        b.style[a] = c;
      else
        return b.style[a];
    },
    attr: function (b, a, c) {
      var d = R(a);
      if (yb[d])
        if (y(c))
          c ? (b[a] = !0, b.setAttribute(a, d)) : (b[a] = !1, b.removeAttribute(d));
        else
          return b[a] || (b.attributes.getNamedItem(a) || x).specified ? d : u;
      else if (y(c))
        b.setAttribute(a, c);
      else if (b.getAttribute)
        return b = b.getAttribute(a, 2), null === b ? u : b;
    },
    prop: function (b, a, c) {
      if (y(c))
        b[a] = c;
      else
        return b[a];
    },
    text: function () {
      function b(a, b) {
        if (G(b)) {
          var d = a.nodeType;
          return d === na || d === mb ? a.textContent : '';
        }
        a.textContent = b;
      }
      b.$dv = '';
      return b;
    }(),
    val: function (b, a) {
      if (G(a)) {
        if (b.multiple && 'select' === ta(b)) {
          var c = [];
          r(b.options, function (a) {
            a.selected && c.push(a.value || a.text);
          });
          return 0 === c.length ? null : c;
        }
        return b.value;
      }
      b.value = a;
    },
    html: function (b, a) {
      if (G(a))
        return b.innerHTML;
      tb(b, !0);
      b.innerHTML = a;
    },
    empty: Hc
  }, function (b, a) {
    S.prototype[a] = function (a, d) {
      var e, f, g = this.length;
      if (b !== Hc && (2 == b.length && b !== Tb && b !== Gc ? a : d) === u) {
        if (K(a)) {
          for (e = 0; e < g; e++)
            if (b === Sb)
              b(this[e], a);
            else
              for (f in a)
                b(this[e], f, a[f]);
          return this;
        }
        e = b.$dv;
        g = e === u ? Math.min(g, 1) : g;
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
  r({
    removeData: ub,
    on: function a(c, d, e, f) {
      if (y(f))
        throw Qb('onargs');
      if (Cc(c)) {
        var g = vb(c, !0);
        f = g.events;
        var h = g.handle;
        h || (h = g.handle = gf(c, f));
        for (var g = 0 <= d.indexOf(' ') ? d.split(' ') : [d], k = g.length; k--;) {
          d = g[k];
          var l = f[d];
          l || (f[d] = [], 'mouseenter' === d || 'mouseleave' === d ? a(c, Lf[d], function (a) {
            var c = a.relatedTarget;
            c && (c === this || this.contains(c)) || h(a, d);
          }) : '$destroy' !== d && c.addEventListener(d, h, !1), l = f[d]);
          l.push(e);
        }
      }
    },
    off: Fc,
    one: function (a, c, d) {
      a = A(a);
      a.on(c, function f() {
        a.off(c, d);
        a.off(c, f);
      });
      a.on(c, d);
    },
    replaceWith: function (a, c) {
      var d, e = a.parentNode;
      tb(a);
      r(new S(c), function (c) {
        d ? e.insertBefore(c, d.nextSibling) : e.replaceChild(c, a);
        d = c;
      });
    },
    children: function (a) {
      var c = [];
      r(a.childNodes, function (a) {
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
        c = new S(c);
        for (var d = 0, e = c.length; d < e; d++)
          a.appendChild(c[d]);
      }
    },
    prepend: function (a, c) {
      if (a.nodeType === na) {
        var d = a.firstChild;
        r(new S(c), function (c) {
          a.insertBefore(c, d);
        });
      }
    },
    wrap: function (a, c) {
      c = A(c).eq(0).clone()[0];
      var d = a.parentNode;
      d && d.replaceChild(c, a);
      c.appendChild(a);
    },
    remove: Ic,
    detach: function (a) {
      Ic(a, !0);
    },
    after: function (a, c) {
      var d = a, e = a.parentNode;
      c = new S(c);
      for (var f = 0, g = c.length; f < g; f++) {
        var h = c[f];
        e.insertBefore(h, d.nextSibling);
        d = h;
      }
    },
    addClass: Vb,
    removeClass: Ub,
    toggleClass: function (a, c, d) {
      c && r(c.split(' '), function (c) {
        var f = d;
        G(f) && (f = !Tb(a, c));
        (f ? Vb : Ub)(a, c);
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
    clone: Rb,
    triggerHandler: function (a, c, d) {
      var e, f, g = c.type || c, h = vb(a);
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
          stopPropagation: x,
          type: g,
          target: a
        }, c.type && (e = C(e, c)), c = ua(h), f = d ? [e].concat(d) : [e], r(c, function (c) {
          e.isImmediatePropagationStopped() || c.apply(a, f);
        });
    }
  }, function (a, c) {
    S.prototype[c] = function (c, e, f) {
      for (var g, h = 0, k = this.length; h < k; h++)
        G(g) ? (g = a(this[h], c, e, f), y(g) && (g = A(g))) : Ec(g, a(this[h], c, e, f));
      return y(g) ? g : this;
    };
    S.prototype.bind = S.prototype.on;
    S.prototype.unbind = S.prototype.off;
  });
  cb.prototype = {
    put: function (a, c) {
      this[Ma(a, this.nextUid)] = c;
    },
    get: function (a) {
      return this[Ma(a, this.nextUid)];
    },
    remove: function (a) {
      var c = this[a = Ma(a, this.nextUid)];
      delete this[a];
      return c;
    }
  };
  var Nc = /^function\s*[^\(]*\(\s*([^\)]*)\)/m, jf = /,/, kf = /^\s*(_?)(\S+?)\1\s*$/, Mc = /((\/\/.*$)|(\/\*[\s\S]*?\*\/))/gm, Ea = z('$injector');
  Lb.$$annotate = Wb;
  var Mf = z('$animate'), ze = [
      '$provide',
      function (a) {
        this.$$selectors = {};
        this.register = function (c, d) {
          var e = c + '-animation';
          if (c && '.' != c.charAt(0))
            throw Mf('notcsel', c);
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
              var d = [], e = [], f = ia();
              r((a.attr('class') || '').split(/\s+/), function (a) {
                f[a] = !0;
              });
              r(c, function (a, c) {
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
            function k() {
              m || (m = a.defer(), d(function () {
                m.resolve();
                m = null;
              }));
              return m.promise;
            }
            function l(a, c) {
              if (ha.isObject(c)) {
                var d = C(c.from || {}, c.to || {});
                a.css(d);
              }
            }
            var m;
            return {
              animate: function (a, c, d) {
                l(a, {
                  from: c,
                  to: d
                });
                return k();
              },
              enter: function (a, c, d, e) {
                l(a, e);
                d ? d.after(a) : c.prepend(a);
                return k();
              },
              leave: function (a, c) {
                a.remove();
                return k();
              },
              move: function (a, c, d, e) {
                return this.enter(a, c, d, e);
              },
              addClass: function (a, c, d) {
                return this.setClass(a, c, [], d);
              },
              $$addClassImmediately: function (a, c, d) {
                a = A(a);
                c = I(c) ? c : D(c) ? c.join(' ') : '';
                r(a, function (a) {
                  Vb(a, c);
                });
                l(a, d);
                return k();
              },
              removeClass: function (a, c, d) {
                return this.setClass(a, [], c, d);
              },
              $$removeClassImmediately: function (a, c, d) {
                a = A(a);
                c = I(c) ? c : D(c) ? c.join(' ') : '';
                r(a, function (a) {
                  Ub(a, c);
                });
                l(a, d);
                return k();
              },
              setClass: function (a, c, d, e) {
                var k = this, l = !1;
                a = A(a);
                var m = a.data('$$animateClasses');
                m ? e && m.options && (m.options = ha.extend(m.options || {}, e)) : (m = {
                  classes: {},
                  options: e
                }, l = !0);
                e = m.classes;
                c = D(c) ? c : c.split(' ');
                d = D(d) ? d : d.split(' ');
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
                l(a, e);
                return k();
              },
              enabled: x,
              cancel: x
            };
          }
        ];
      }
    ], ka = z('$compile');
  uc.$inject = [
    '$provide',
    '$$sanitizeUriProvider'
  ];
  var nf = /^((?:x|data)[\:\-_])/i, Sc = 'application/json', Zb = { 'Content-Type': Sc + ';charset=utf-8' }, qf = /^\s*(\[|\{[^\{])/, rf = /[\}\]]\s*$/, pf = /^\)\]\}',?\n/, $b = z('$interpolate'), Nf = /^([^\?#]*)(\?([^#]*))?(#(.*))?$/, uf = {
      http: 80,
      https: 443,
      ftp: 21
    }, eb = z('$location'), Of = {
      $$html5: !1,
      $$replace: !1,
      absUrl: Bb('$$absUrl'),
      url: function (a) {
        if (G(a))
          return this.$$url;
        var c = Nf.exec(a);
        (c[1] || '' === a) && this.path(decodeURIComponent(c[1]));
        (c[2] || c[1] || '' === a) && this.search(c[3] || '');
        this.hash(c[5] || '');
        return this;
      },
      protocol: Bb('$$protocol'),
      host: Bb('$$host'),
      port: Bb('$$port'),
      path: $c('$$path', function (a) {
        a = null !== a ? a.toString() : '';
        return '/' == a.charAt(0) ? a : '/' + a;
      }),
      search: function (a, c) {
        switch (arguments.length) {
        case 0:
          return this.$$search;
        case 1:
          if (I(a) || X(a))
            a = a.toString(), this.$$search = qc(a);
          else if (K(a))
            a = Ca(a, {}), r(a, function (c, e) {
              null == c && delete a[e];
            }), this.$$search = a;
          else
            throw eb('isrcharg');
          break;
        default:
          G(c) || null === c ? delete this.$$search[a] : this.$$search[a] = c;
        }
        this.$$compose();
        return this;
      },
      hash: $c('$$hash', function (a) {
        return null !== a ? a.toString() : '';
      }),
      replace: function () {
        this.$$replace = !0;
        return this;
      }
    };
  r([
    Zc,
    dc,
    cc
  ], function (a) {
    a.prototype = Object.create(Of);
    a.prototype.state = function (c) {
      if (!arguments.length)
        return this.$$state;
      if (a !== cc || !this.$$html5)
        throw eb('nostate');
      this.$$state = G(c) ? null : c;
      return this;
    };
  });
  var la = z('$parse'), Pf = Function.prototype.call, Qf = Function.prototype.apply, Rf = Function.prototype.bind, Ib = ia();
  r({
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
    Ib[c] = a;
  });
  Ib['this'] = function (a) {
    return a;
  };
  Ib['this'].sharedGetter = !0;
  var jb = C(ia(), {
      '+': function (a, c, d, e) {
        d = d(a, c);
        e = e(a, c);
        return y(d) ? y(e) ? d + e : d : y(e) ? e : u;
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
    }), Sf = {
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
          var c = a + this.peek(), d = c + this.peek(2), e = jb[c], f = jb[d];
          jb[a] || e || f ? (a = f ? d : e ? c : a, this.tokens.push({
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
        var d = R(this.text.charAt(this.index));
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
          'u' === g ? (f = this.text.substring(this.index + 1, this.index + 5), f.match(/[\da-f]{4}/i) || this.throwError('Invalid unicode escape [\\u' + f + ']'), this.index += 4, d += String.fromCharCode(parseInt(f, 16))) : d += Sf[g] || g, f = !1;
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
  var fb = function (a, c, d) {
    this.lexer = a;
    this.$filter = c;
    this.options = d;
  };
  fb.ZERO = C(function () {
    return 0;
  }, {
    sharedGetter: !0,
    constant: !0
  });
  fb.prototype = {
    constructor: fb,
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
      this.expect('(') ? (a = this.filterChain(), this.consume(')')) : this.expect('[') ? a = this.arrayDeclaration() : this.expect('{') ? a = this.object() : this.peek().identifier ? a = this.identifier() : this.peek().constant ? a = this.constant() : this.throwError('not a primary expression', this.peek());
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
      var d = jb[a];
      return C(function (a, f) {
        return d(a, f, c);
      }, {
        constant: c.constant,
        inputs: [c]
      });
    },
    binaryFn: function (a, c, d, e) {
      var f = jb[c];
      return C(function (c, e) {
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
      return Ib[a] || bd(a, this.options, this.text);
    },
    constant: function () {
      var a = this.consume().value;
      return C(function () {
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
      return C(function (f, h) {
        var k = a(f, h);
        if (e) {
          e[0] = k;
          for (k = d.length; k--;)
            e[k + 1] = d[k](f, h);
          return c.apply(u, e);
        }
        return c(k);
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
      return (d = this.expect('=')) ? (a.assign || this.throwError('implies assignment but [' + this.text.substring(0, d.index) + '] can not be assigned to', d), c = this.ternary(), C(function (d, f) {
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
        return C(function (e, f) {
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
      var a = this.equality(), c;
      if (c = this.expect('&&'))
        a = this.binaryFn(a, c.text, this.logicalAND(), !0);
      return a;
    },
    equality: function () {
      var a = this.relational(), c;
      if (c = this.expect('==', '!=', '===', '!=='))
        a = this.binaryFn(a, c.text, this.equality());
      return a;
    },
    relational: function () {
      var a = this.additive(), c;
      if (c = this.expect('<', '>', '<=', '>='))
        a = this.binaryFn(a, c.text, this.relational());
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
      return this.expect('+') ? this.primary() : (a = this.expect('-')) ? this.binaryFn(fb.ZERO, a.text, this.unary()) : (a = this.expect('!')) ? this.unaryFn(a.text, this.unary()) : this.primary();
    },
    fieldAccess: function (a) {
      var c = this.text, d = this.consume().text, e = bd(d, this.options, c);
      return C(function (c, d, h) {
        return e(h || a(c, d));
      }, {
        assign: function (e, g, h) {
          (h = a(e, h)) || a.assign(e, h = {});
          return Oa(h, d, g, c);
        }
      });
    },
    objectIndex: function (a) {
      var c = this.text, d = this.expression();
      this.consume(']');
      return C(function (e, f) {
        var g = a(e, f), h = d(e, f);
        ra(h, c);
        return g ? sa(g[h], c) : u;
      }, {
        assign: function (e, f, g) {
          var h = ra(d(e, g), c);
          (g = sa(a(e, g), c)) || a.assign(e, g = {});
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
        var k = c ? c(g, h) : g, l = a(g, h, k) || x;
        if (f)
          for (var m = d.length; m--;)
            f[m] = sa(d[m](g, h), e);
        sa(k, e);
        if (l) {
          if (l.constructor === l)
            throw la('isecfn', e);
          if (l === Pf || l === Qf || l === Rf)
            throw la('isecff', e);
        }
        k = l.apply ? l.apply(k, f) : l(f[0], f[1], f[2], f[3], f[4]);
        return sa(k, e);
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
      return C(function (c, d) {
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
      return C(function (d, f) {
        for (var g = {}, h = 0, k = c.length; h < k; h++)
          g[a[h]] = c[h](d, f);
        return g;
      }, {
        literal: !0,
        constant: c.every(ec),
        inputs: c
      });
    }
  };
  var xf = ia(), wf = ia(), yf = Object.prototype.valueOf, Ba = z('$sce'), ma = {
      HTML: 'html',
      CSS: 'css',
      URL: 'url',
      RESOURCE_URL: 'resourceUrl',
      JS: 'js'
    }, ka = z('$compile'), Y = V.createElement('a'), fd = Aa(U.location.href);
  Bc.$inject = ['$provide'];
  gd.$inject = ['$locale'];
  id.$inject = ['$locale'];
  var ld = '.', Hf = {
      yyyy: Z('FullYear', 4),
      yy: Z('FullYear', 2, 0, !0),
      y: Z('FullYear', 1),
      MMMM: Db('Month'),
      MMM: Db('Month', !0),
      MM: Z('Month', 2, 1),
      M: Z('Month', 1, 1),
      dd: Z('Date', 2),
      d: Z('Date', 1),
      HH: Z('Hours', 2),
      H: Z('Hours', 1),
      hh: Z('Hours', 2, -12),
      h: Z('Hours', 1, -12),
      mm: Z('Minutes', 2),
      m: Z('Minutes', 1),
      ss: Z('Seconds', 2),
      s: Z('Seconds', 1),
      sss: Z('Milliseconds', 3),
      EEEE: Db('Day'),
      EEE: Db('Day', !0),
      a: function (a, c) {
        return 12 > a.getHours() ? c.AMPMS[0] : c.AMPMS[1];
      },
      Z: function (a) {
        a = -1 * a.getTimezoneOffset();
        return a = (0 <= a ? '+' : '') + (Cb(Math[0 < a ? 'floor' : 'ceil'](a / 60), 2) + Cb(Math.abs(a % 60), 2));
      },
      ww: nd(2),
      w: nd(1)
    }, Gf = /((?:[^yMdHhmsaZEw']+)|(?:'(?:[^']|'')*')|(?:E+|y+|M+|d+|H+|h+|m+|s+|a|Z|w+))(.*)/, Ff = /^\-?\d+$/;
  hd.$inject = ['$locale'];
  var Df = ca(R), Ef = ca(rb);
  jd.$inject = ['$parse'];
  var Qd = ca({
      restrict: 'E',
      compile: function (a, c) {
        if (!c.href && !c.xlinkHref && !c.name)
          return function (a, c) {
            var f = '[object SVGAnimatedString]' === Ja.call(c.prop('href')) ? 'xlink:href' : 'href';
            c.on('click', function (a) {
              c.attr(f) || a.preventDefault();
            });
          };
      }
    }), sb = {};
  r(yb, function (a, c) {
    if ('multiple' != a) {
      var d = wa('ng-' + c);
      sb[d] = function () {
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
  r(Lc, function (a, c) {
    sb[c] = function () {
      return {
        priority: 100,
        link: function (a, e, f) {
          if ('ngPattern' === c && '/' == f.ngPattern.charAt(0) && (e = f.ngPattern.match(Jf))) {
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
  r([
    'src',
    'srcset',
    'href'
  ], function (a) {
    var c = wa('ng-' + a);
    sb[c] = function () {
      return {
        priority: 99,
        link: function (d, e, f) {
          var g = a, h = a;
          'href' === a && '[object SVGAnimatedString]' === Ja.call(e.prop('href')) && (h = 'xlinkHref', f.$attr[h] = 'xlink:href', g = null);
          f.$observe(c, function (c) {
            c ? (f.$set(h, c), Ha && g && e.prop(g, f[h])) : 'href' === a && f.$set(h, null);
          });
        }
      };
    };
  });
  var Eb = {
      $addControl: x,
      $$renameControl: function (a, c) {
        a.$name = c;
      },
      $removeControl: x,
      $setValidity: x,
      $setDirty: x,
      $setPristine: x,
      $setSubmitted: x
    };
  od.$inject = [
    '$element',
    '$attrs',
    '$scope',
    '$animate',
    '$interpolate'
  ];
  var vd = function (a) {
      return [
        '$timeout',
        function (c) {
          return {
            name: 'form',
            restrict: a ? 'EAC' : 'E',
            controller: od,
            compile: function (a) {
              a.addClass(Qa).addClass(ib);
              return {
                pre: function (a, d, g, h) {
                  if (!('action' in g)) {
                    var k = function (c) {
                      a.$apply(function () {
                        h.$commitViewValue();
                        h.$setSubmitted();
                      });
                      c.preventDefault();
                    };
                    d[0].addEventListener('submit', k, !1);
                    d.on('$destroy', function () {
                      c(function () {
                        d[0].removeEventListener('submit', k, !1);
                      }, 0, !1);
                    });
                  }
                  var l = h.$$parentForm, m = h.$name;
                  m && (Oa(a, m, h, m), g.$observe(g.name ? 'name' : 'ngForm', function (c) {
                    m !== c && (Oa(a, m, u, m), m = c, Oa(a, m, h, m), l.$$renameControl(h, m));
                  }));
                  d.on('$destroy', function () {
                    l.$removeControl(h);
                    m && Oa(a, m, u, m);
                    C(h, Eb);
                  });
                }
              };
            }
          };
        }
      ];
    }, Rd = vd(), de = vd(!0), If = /\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d\.\d+([+-][0-2]\d:[0-5]\d|Z)/, Tf = /^(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?$/, Uf = /^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$/i, Vf = /^\s*(\-|\+)?(\d+|(\d*(\.\d*)))\s*$/, wd = /^(\d{4})-(\d{2})-(\d{2})$/, xd = /^(\d{4})-(\d\d)-(\d\d)T(\d\d):(\d\d)(?::(\d\d)(\.\d{1,3})?)?$/, jc = /^(\d{4})-W(\d\d)$/, yd = /^(\d{4})-(\d\d)$/, zd = /^(\d\d):(\d\d)(?::(\d\d)(\.\d{1,3})?)?$/, Wf = /(\s+|^)default(\s+|$)/, Hb = new z('ngModel'), Ad = {
      text: function (a, c, d, e, f, g) {
        gb(a, c, d, e, f, g);
        hc(e);
      },
      date: hb('date', wd, Gb(wd, [
        'yyyy',
        'MM',
        'dd'
      ]), 'yyyy-MM-dd'),
      'datetime-local': hb('datetimelocal', xd, Gb(xd, 'yyyy MM dd HH mm ss sss'.split(' ')), 'yyyy-MM-ddTHH:mm:ss.sss'),
      time: hb('time', zd, Gb(zd, [
        'HH',
        'mm',
        'ss',
        'sss'
      ]), 'HH:mm:ss.sss'),
      week: hb('week', jc, function (a, c) {
        if (fa(a))
          return a;
        if (I(a)) {
          jc.lastIndex = 0;
          var d = jc.exec(a);
          if (d) {
            var e = +d[1], f = +d[2], g = d = 0, h = 0, k = 0, l = md(e), f = 7 * (f - 1);
            c && (d = c.getHours(), g = c.getMinutes(), h = c.getSeconds(), k = c.getMilliseconds());
            return new Date(e, 0, l.getDate() + f, d, g, h, k);
          }
        }
        return NaN;
      }, 'yyyy-Www'),
      month: hb('month', yd, Gb(yd, [
        'yyyy',
        'MM'
      ]), 'yyyy-MM'),
      number: function (a, c, d, e, f, g) {
        qd(a, c, d, e);
        gb(a, c, d, e, f, g);
        e.$$parserName = 'number';
        e.$parsers.push(function (a) {
          return e.$isEmpty(a) ? null : Vf.test(a) ? parseFloat(a) : u;
        });
        e.$formatters.push(function (a) {
          if (!e.$isEmpty(a)) {
            if (!X(a))
              throw Hb('numfmt', a);
            a = a.toString();
          }
          return a;
        });
        if (d.min || d.ngMin) {
          var h;
          e.$validators.min = function (a) {
            return e.$isEmpty(a) || G(h) || a >= h;
          };
          d.$observe('min', function (a) {
            y(a) && !X(a) && (a = parseFloat(a, 10));
            h = X(a) && !isNaN(a) ? a : u;
            e.$validate();
          });
        }
        if (d.max || d.ngMax) {
          var k;
          e.$validators.max = function (a) {
            return e.$isEmpty(a) || G(k) || a <= k;
          };
          d.$observe('max', function (a) {
            y(a) && !X(a) && (a = parseFloat(a, 10));
            k = X(a) && !isNaN(a) ? a : u;
            e.$validate();
          });
        }
      },
      url: function (a, c, d, e, f, g) {
        gb(a, c, d, e, f, g);
        hc(e);
        e.$$parserName = 'url';
        e.$validators.url = function (a, c) {
          var d = a || c;
          return e.$isEmpty(d) || Tf.test(d);
        };
      },
      email: function (a, c, d, e, f, g) {
        gb(a, c, d, e, f, g);
        hc(e);
        e.$$parserName = 'email';
        e.$validators.email = function (a, c) {
          var d = a || c;
          return e.$isEmpty(d) || Uf.test(d);
        };
      },
      radio: function (a, c, d, e) {
        G(d.name) && c.attr('name', ++kb);
        c.on('click', function (a) {
          c[0].checked && e.$setViewValue(d.value, a && a.type);
        });
        e.$render = function () {
          c[0].checked = d.value == e.$viewValue;
        };
        d.$observe('value', e.$render);
      },
      checkbox: function (a, c, d, e, f, g, h, k) {
        var l = rd(k, a, 'ngTrueValue', d.ngTrueValue, !0), m = rd(k, a, 'ngFalseValue', d.ngFalseValue, !1);
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
          return pa(a, l);
        });
        e.$parsers.push(function (a) {
          return a ? l : m;
        });
      },
      hidden: x,
      button: x,
      submit: x,
      reset: x,
      file: x
    }, vc = [
      '$browser',
      '$sniffer',
      '$filter',
      '$parse',
      function (a, c, d, e) {
        return {
          restrict: 'E',
          require: ['?ngModel'],
          link: {
            pre: function (f, g, h, k) {
              k[0] && (Ad[R(h.type)] || Ad.text)(f, g, h, k[0], c, a, d, e);
            }
          }
        };
      }
    ], ib = 'ng-valid', sd = 'ng-invalid', Qa = 'ng-pristine', Fb = 'ng-dirty', ud = 'ng-pending', Xf = [
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
      function (a, c, d, e, f, g, h, k, l, m) {
        this.$modelValue = this.$viewValue = Number.NaN;
        this.$$rawModelValue = u;
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
        this.$pending = u;
        this.$name = m(d.name || '', !1)(a);
        var p = f(d.ngModel), s = p.assign, t = p, q = s, N = null, n = this;
        this.$$setOptions = function (a) {
          if ((n.$options = a) && a.getterSetter) {
            var c = f(d.ngModel + '()'), g = f(d.ngModel + '($$$p)');
            t = function (a) {
              var d = p(a);
              F(d) && (d = c(a));
              return d;
            };
            q = function (a, c) {
              F(p(a)) ? g(a, { $$$p: n.$modelValue }) : s(a, n.$modelValue);
            };
          } else if (!p.assign)
            throw Hb('nonassign', d.ngModel, va(e));
        };
        this.$render = x;
        this.$isEmpty = function (a) {
          return G(a) || '' === a || null === a || a !== a;
        };
        var v = e.inheritedData('$formController') || Eb, w = 0;
        pd({
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
          g.removeClass(e, Fb);
          g.addClass(e, Qa);
        };
        this.$setDirty = function () {
          n.$dirty = !0;
          n.$pristine = !1;
          g.removeClass(e, Qa);
          g.addClass(e, Fb);
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
          h.cancel(N);
          n.$viewValue = n.$$lastCommittedViewValue;
          n.$render();
        };
        this.$validate = function () {
          if (!X(n.$modelValue) || !isNaN(n.$modelValue)) {
            var a = n.$$rawModelValue, c = n.$valid, d = n.$modelValue, e = n.$options && n.$options.allowInvalid;
            n.$$runValidators(n.$error[n.$$parserName || 'parse'] ? !1 : u, a, n.$$lastCommittedViewValue, function (f) {
              e || c === f || (n.$modelValue = f ? a : u, n.$modelValue !== d && n.$$writeModelToScope());
            });
          }
        };
        this.$$runValidators = function (a, c, d, e) {
          function f() {
            var a = !0;
            r(n.$validators, function (e, f) {
              var g = e(c, d);
              a = a && g;
              h(f, g);
            });
            return a ? !0 : (r(n.$asyncValidators, function (a, c) {
              h(c, null);
            }), !1);
          }
          function g() {
            var a = [], e = !0;
            r(n.$asyncValidators, function (f, g) {
              var k = f(c, d);
              if (!k || !F(k.then))
                throw Hb('$asyncValidators', k);
              h(g, u);
              a.push(k.then(function () {
                h(g, !0);
              }, function (a) {
                e = !1;
                h(g, !1);
              }));
            });
            a.length ? l.all(a).then(function () {
              k(e);
            }, x) : k(!0);
          }
          function h(a, c) {
            m === w && n.$setValidity(a, c);
          }
          function k(a) {
            m === w && e(a);
          }
          w++;
          var m = w;
          (function (a) {
            var c = n.$$parserName || 'parse';
            if (a === u)
              h(c, null);
            else if (h(c, a), !a)
              return r(n.$validators, function (a, c) {
                h(c, null);
              }), r(n.$asyncValidators, function (a, c) {
                h(c, null);
              }), !1;
            return !0;
          }(a) ? f() ? g() : k(!1) : k(!1));
        };
        this.$commitViewValue = function () {
          var a = n.$viewValue;
          h.cancel(N);
          if (n.$$lastCommittedViewValue !== a || '' === a && n.$$hasNativeValidators)
            n.$$lastCommittedViewValue = a, n.$pristine && this.$setDirty(), this.$$parseAndValidate();
        };
        this.$$parseAndValidate = function () {
          var c = n.$$lastCommittedViewValue, d = c, e = G(d) ? u : !0;
          if (e)
            for (var f = 0; f < n.$parsers.length; f++)
              if (d = n.$parsers[f](d), G(d)) {
                e = !1;
                break;
              }
          X(n.$modelValue) && isNaN(n.$modelValue) && (n.$modelValue = t(a));
          var g = n.$modelValue, h = n.$options && n.$options.allowInvalid;
          n.$$rawModelValue = d;
          h && (n.$modelValue = d, n.$modelValue !== g && n.$$writeModelToScope());
          n.$$runValidators(e, d, c, function (a) {
            h || (n.$modelValue = a ? d : u, n.$modelValue !== g && n.$$writeModelToScope());
          });
        };
        this.$$writeModelToScope = function () {
          q(a, n.$modelValue);
          r(n.$viewChangeListeners, function (a) {
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
          e && y(e.debounce) && (e = e.debounce, X(e) ? d = e : X(e[c]) ? d = e[c] : X(e['default']) && (d = e['default']));
          h.cancel(N);
          d ? N = h(function () {
            n.$commitViewValue();
          }, d) : k.$$phase ? n.$commitViewValue() : a.$apply(function () {
            n.$commitViewValue();
          });
        };
        a.$watch(function () {
          var c = t(a);
          if (c !== n.$modelValue) {
            n.$modelValue = n.$$rawModelValue = c;
            for (var d = n.$formatters, e = d.length, f = c; e--;)
              f = d[e](f);
            n.$viewValue !== f && (n.$viewValue = n.$$lastCommittedViewValue = f, n.$render(), n.$$runValidators(u, c, f, x));
          }
          return c;
        });
      }
    ], se = [
      '$rootScope',
      function (a) {
        return {
          restrict: 'A',
          require: [
            'ngModel',
            '^?form',
            '^?ngModelOptions'
          ],
          controller: Xf,
          priority: 1,
          compile: function (c) {
            c.addClass(Qa).addClass('ng-untouched').addClass(ib);
            return {
              pre: function (a, c, f, g) {
                var h = g[0], k = g[1] || Eb;
                h.$$setOptions(g[2] && g[2].$options);
                k.$addControl(h);
                f.$observe('name', function (a) {
                  h.$name !== a && k.$$renameControl(h, a);
                });
                a.$on('$destroy', function () {
                  k.$removeControl(h);
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
    ], ue = ca({
      restrict: 'A',
      require: 'ngModel',
      link: function (a, c, d, e) {
        e.$viewChangeListeners.push(function () {
          a.$eval(d.ngChange);
        });
      }
    }), xc = function () {
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
    }, wc = function () {
      return {
        restrict: 'A',
        require: '?ngModel',
        link: function (a, c, d, e) {
          if (e) {
            var f, g = d.ngPattern || d.pattern;
            d.$observe('pattern', function (a) {
              I(a) && 0 < a.length && (a = new RegExp('^' + a + '$'));
              if (a && !a.test)
                throw z('ngPattern')('noregexp', g, a, va(c));
              f = a || u;
              e.$validate();
            });
            e.$validators.pattern = function (a) {
              return e.$isEmpty(a) || G(f) || f.test(a);
            };
          }
        }
      };
    }, zc = function () {
      return {
        restrict: 'A',
        require: '?ngModel',
        link: function (a, c, d, e) {
          if (e) {
            var f = -1;
            d.$observe('maxlength', function (a) {
              a = $(a);
              f = isNaN(a) ? -1 : a;
              e.$validate();
            });
            e.$validators.maxlength = function (a, c) {
              return 0 > f || e.$isEmpty(a) || c.length <= f;
            };
          }
        }
      };
    }, yc = function () {
      return {
        restrict: 'A',
        require: '?ngModel',
        link: function (a, c, d, e) {
          if (e) {
            var f = 0;
            d.$observe('minlength', function (a) {
              f = $(a) || 0;
              e.$validate();
            });
            e.$validators.minlength = function (a, c) {
              return e.$isEmpty(c) || c.length >= f;
            };
          }
        }
      };
    }, te = function () {
      return {
        restrict: 'A',
        priority: 100,
        require: 'ngModel',
        link: function (a, c, d, e) {
          var f = c.attr(d.$attr.ngList) || ', ', g = 'false' !== d.ngTrim, h = g ? P(f) : f;
          e.$parsers.push(function (a) {
            if (!G(a)) {
              var c = [];
              a && r(a.split(h), function (a) {
                a && c.push(g ? P(a) : a);
              });
              return c;
            }
          });
          e.$formatters.push(function (a) {
            return D(a) ? a.join(f) : u;
          });
          e.$isEmpty = function (a) {
            return !a || !a.length;
          };
        }
      };
    }, Yf = /^(true|false|\d+)$/, ve = function () {
      return {
        restrict: 'A',
        priority: 100,
        compile: function (a, c) {
          return Yf.test(c.ngValue) ? function (a, c, f) {
            f.$set('value', a.$eval(f.ngValue));
          } : function (a, c, f) {
            a.$watch(f.ngValue, function (a) {
              f.$set('value', a);
            });
          };
        }
      };
    }, we = function () {
      return {
        restrict: 'A',
        controller: [
          '$scope',
          '$attrs',
          function (a, c) {
            var d = this;
            this.$options = a.$eval(c.ngModelOptions);
            this.$options.updateOn !== u ? (this.$options.updateOnDefault = !1, this.$options.updateOn = P(this.$options.updateOn.replace(Wf, function () {
              d.$options.updateOnDefault = !0;
              return ' ';
            }))) : this.$options.updateOnDefault = !0;
          }
        ]
      };
    }, Wd = [
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
                e.textContent = a === u ? '' : a;
              });
            };
          }
        };
      }
    ], Yd = [
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
                f.textContent = a === u ? '' : a;
              });
            };
          }
        };
      }
    ], Xd = [
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
    ], Zd = ic('', !0), ae = ic('Odd', 0), $d = ic('Even', 1), be = Ia({
      compile: function (a, c) {
        c.$set('ngCloak', u);
        a.removeClass('ng-cloak');
      }
    }), ce = [function () {
        return {
          restrict: 'A',
          scope: !0,
          controller: '@',
          priority: 500
        };
      }], Ac = {}, Zf = {
      blur: !0,
      focus: !0
    };
  r('click dblclick mousedown mouseup mouseover mouseout mousemove mouseenter mouseleave keydown keyup keypress submit focus blur copy cut paste'.split(' '), function (a) {
    var c = wa('ng-' + a);
    Ac[c] = [
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
                Zf[a] && e.$$phase ? c.$evalAsync(f) : c.$apply(f);
              });
            };
          }
        };
      }
    ];
  });
  var fe = [
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
            var h, k, l;
            c.$watch(e.ngIf, function (c) {
              c ? k || g(function (c, f) {
                k = f;
                c[c.length++] = V.createComment(' end ngIf: ' + e.ngIf + ' ');
                h = { clone: c };
                a.enter(c, d.parent(), d);
              }) : (l && (l.remove(), l = null), k && (k.$destroy(), k = null), h && (l = qb(h.clone), a.leave(l).then(function () {
                l = null;
              }), h = null));
            });
          }
        };
      }
    ], ge = [
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
          controller: ha.noop,
          compile: function (f, g) {
            var h = g.ngInclude || g.src, k = g.onload || '', l = g.autoscroll;
            return function (f, g, s, r, q) {
              var u = 0, n, v, w, O = function () {
                  v && (v.remove(), v = null);
                  n && (n.$destroy(), n = null);
                  w && (d.leave(w).then(function () {
                    v = null;
                  }), v = w, w = null);
                };
              f.$watch(e.parseAsResourceUrl(h), function (e) {
                var h = function () {
                    !y(l) || l && !f.$eval(l) || c();
                  }, s = ++u;
                e ? (a(e, !0).then(function (a) {
                  if (s === u) {
                    var c = f.$new();
                    r.template = a;
                    a = q(c, function (a) {
                      O();
                      d.enter(a, null, g).then(h);
                    });
                    n = c;
                    w = a;
                    n.$emit('$includeContentLoaded', e);
                    f.$eval(k);
                  }
                }, function () {
                  s === u && (O(), f.$emit('$includeContentError', e));
                }), f.$emit('$includeContentRequested', e)) : (O(), r.template = null);
              });
            };
          }
        };
      }
    ], xe = [
      '$compile',
      function (a) {
        return {
          restrict: 'ECA',
          priority: -400,
          require: 'ngInclude',
          link: function (c, d, e, f) {
            /SVG/.test(d[0].toString()) ? (d.empty(), a(Dc(f.template, V).childNodes)(c, function (a) {
              d.append(a);
            }, { futureParentElement: d })) : (d.html(f.template), a(d.contents())(c));
          }
        };
      }
    ], he = Ia({
      priority: 450,
      compile: function () {
        return {
          pre: function (a, c, d) {
            a.$eval(d.ngInit);
          }
        };
      }
    }), ie = Ia({
      terminal: !0,
      priority: 1000
    }), je = [
      '$locale',
      '$interpolate',
      function (a, c) {
        var d = /{}/g, e = /^when(Minus)?(.+)$/;
        return {
          restrict: 'EA',
          link: function (f, g, h) {
            function k(a) {
              g.text(a || '');
            }
            var l = h.count, m = h.$attr.when && g.attr(h.$attr.when), p = h.offset || 0, s = f.$eval(m) || {}, t = {}, m = c.startSymbol(), q = c.endSymbol(), u = m + l + '-' + p + q, n = ha.noop, v;
            r(h, function (a, c) {
              var d = e.exec(c);
              d && (d = (d[1] ? '-' : '') + R(d[2]), s[d] = g.attr(h.$attr[c]));
            });
            r(s, function (a, e) {
              t[e] = c(a.replace(d, u));
            });
            f.$watch(l, function (c) {
              c = parseFloat(c);
              var d = isNaN(c);
              d || c in s || (c = a.pluralCat(c - p));
              c === v || d && isNaN(v) || (n(), n = f.$watch(t[c], k), v = c);
            });
          }
        };
      }
    ], ke = [
      '$parse',
      '$animate',
      function (a, c) {
        var d = z('ngRepeat'), e = function (a, c, d, e, l, m, p) {
            a[d] = e;
            l && (a[l] = m);
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
            var h = g.ngRepeat, k = V.createComment(' end ngRepeat: ' + h + ' '), l = h.match(/^\s*([\s\S]+?)\s+in\s+([\s\S]+?)(?:\s+as\s+([\s\S]+?))?(?:\s+track\s+by\s+([\s\S]+?))?\s*$/);
            if (!l)
              throw d('iexp', h);
            var m = l[1], p = l[2], s = l[3], t = l[4], l = m.match(/^(?:([\$\w]+)|\(([\$\w]+)\s*,\s*([\$\w]+)\))$/);
            if (!l)
              throw d('iidexp', m);
            var q = l[3] || l[1], y = l[2];
            if (s && (!/^[$a-zA-Z_][$a-zA-Z0-9_]*$/.test(s) || /^(null|undefined|this|\$index|\$first|\$middle|\$last|\$even|\$odd|\$parent)$/.test(s)))
              throw d('badident', s);
            var n, v, w, z, E = { $id: Ma };
            t ? n = a(t) : (w = function (a, c) {
              return Ma(c);
            }, z = function (a) {
              return a;
            });
            return function (a, f, g, l, m) {
              n && (v = function (c, d, e) {
                y && (E[y] = c);
                E[q] = d;
                E.$index = e;
                return n(a, E);
              });
              var t = ia();
              a.$watchCollection(p, function (g) {
                var l, n, p = f[0], B, E = ia(), C, x, G, T, D, F, I;
                s && (a[s] = g);
                if (Ra(g))
                  D = g, n = v || w;
                else {
                  n = v || z;
                  D = [];
                  for (I in g)
                    g.hasOwnProperty(I) && '$' != I.charAt(0) && D.push(I);
                  D.sort();
                }
                C = D.length;
                I = Array(C);
                for (l = 0; l < C; l++)
                  if (x = g === D ? l : D[l], G = g[x], T = n(x, G, l), t[T])
                    F = t[T], delete t[T], E[T] = F, I[l] = F;
                  else {
                    if (E[T])
                      throw r(I, function (a) {
                        a && a.scope && (t[a.id] = a);
                      }), d('dupes', h, T, G);
                    I[l] = {
                      id: T,
                      scope: u,
                      clone: u
                    };
                    E[T] = !0;
                  }
                for (B in t) {
                  F = t[B];
                  T = qb(F.clone);
                  c.leave(T);
                  if (T[0].parentNode)
                    for (l = 0, n = T.length; l < n; l++)
                      T[l].$$NG_REMOVED = !0;
                  F.scope.$destroy();
                }
                for (l = 0; l < C; l++)
                  if (x = g === D ? l : D[l], G = g[x], F = I[l], F.scope) {
                    B = p;
                    do
                      B = B.nextSibling;
                    while (B && B.$$NG_REMOVED);
                    F.clone[0] != B && c.move(qb(F.clone), null, A(p));
                    p = F.clone[F.clone.length - 1];
                    e(F.scope, l, q, G, y, x, C);
                  } else
                    m(function (a, d) {
                      F.scope = d;
                      var f = k.cloneNode(!1);
                      a[a.length++] = f;
                      c.enter(a, null, A(p));
                      p = f;
                      F.clone = a;
                      E[F.id] = F;
                      e(F.scope, l, q, G, y, x, C);
                    });
                t = E;
              });
            };
          }
        };
      }
    ], le = [
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
    ], ee = [
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
    ], me = Ia(function (a, c, d) {
      a.$watch(d.ngStyle, function (a, d) {
        d && a !== d && r(d, function (a, d) {
          c.css(d, '');
        });
        a && c.css(a);
      }, !0);
    }), ne = [
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
            var g = [], h = [], k = [], l = [], m = function (a, c) {
                return function () {
                  a.splice(c, 1);
                };
              };
            c.$watch(e.ngSwitch || e.on, function (c) {
              var d, e;
              d = 0;
              for (e = k.length; d < e; ++d)
                a.cancel(k[d]);
              d = k.length = 0;
              for (e = l.length; d < e; ++d) {
                var q = qb(h[d].clone);
                l[d].$destroy();
                (k[d] = a.leave(q)).then(m(k, d));
              }
              h.length = 0;
              l.length = 0;
              (g = f.cases['!' + c] || f.cases['?']) && r(g, function (c) {
                c.transclude(function (d, e) {
                  l.push(e);
                  var f = c.element;
                  d[d.length++] = V.createComment(' end ngSwitchWhen: ');
                  h.push({ clone: d });
                  a.enter(d, f.parent(), f);
                });
              });
            });
          }
        };
      }
    ], oe = Ia({
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
    }), pe = Ia({
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
    }), re = Ia({
      restrict: 'EAC',
      link: function (a, c, d, e, f) {
        if (!f)
          throw z('ngTransclude')('orphan', va(c));
        f(function (a) {
          c.empty();
          c.append(a);
        });
      }
    }), Sd = [
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
    ], $f = z('ngOptions'), qe = ca({
      restrict: 'A',
      terminal: !0
    }), Td = [
      '$compile',
      '$parse',
      function (a, c) {
        var d = /^\s*([\s\S]+?)(?:\s+as\s+([\s\S]+?))?(?:\s+group\s+by\s+([\s\S]+?))?\s+for\s+(?:([\$\w][\$\w]*)|(?:\(\s*([\$\w][\$\w]*)\s*,\s*([\$\w][\$\w]*)\s*\)))\s+in\s+([\s\S]+?)(?:\s+track\s+by\s+([\s\S]+?))?$/, e = { $setViewValue: x };
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
              var k = this, l = {}, m = e, p;
              k.databound = d.ngModel;
              k.init = function (a, c, d) {
                m = a;
                p = d;
              };
              k.addOption = function (c, d) {
                La(c, '"option value"');
                l[c] = !0;
                m.$viewValue == c && (a.val(c), p.parent() && p.remove());
                d && d[0].hasAttribute('selected') && (d[0].selected = !0);
              };
              k.removeOption = function (a) {
                this.hasOption(a) && (delete l[a], m.$viewValue == a && this.renderUnknownOption(a));
              };
              k.renderUnknownOption = function (c) {
                c = '? ' + Ma(c) + ' ?';
                p.val(c);
                a.prepend(p);
                a.val(c);
                p.prop('selected', !0);
              };
              k.hasOption = function (a) {
                return l.hasOwnProperty(a);
              };
              c.$on('$destroy', function () {
                k.renderUnknownOption = x;
              });
            }
          ],
          link: function (e, g, h, k) {
            function l(a, c, d, e) {
              d.$render = function () {
                var a = d.$viewValue;
                e.hasOption(a) ? (E.parent() && E.remove(), c.val(a), '' === a && n.prop('selected', !0)) : G(a) && n ? c.val('') : e.renderUnknownOption(a);
              };
              c.on('change', function () {
                a.$apply(function () {
                  E.parent() && E.remove();
                  d.$setViewValue(c.val());
                });
              });
            }
            function m(a, c, d) {
              var e;
              d.$render = function () {
                var a = new cb(d.$viewValue);
                r(c.find('option'), function (c) {
                  c.selected = y(a.get(c.value));
                });
              };
              a.$watch(function () {
                pa(e, d.$viewValue) || (e = ua(d.$viewValue), d.$render());
              });
              c.on('change', function () {
                a.$apply(function () {
                  var a = [];
                  r(c.find('option'), function (c) {
                    c.selected && a.push(c.value);
                  });
                  d.$setViewValue(a);
                });
              });
            }
            function p(e, f, g) {
              function h(a, c, d) {
                U[x] = d;
                G && (U[G] = c);
                return a(e, U);
              }
              function k(a) {
                var c;
                if (t)
                  if (K && D(a)) {
                    c = new cb([]);
                    for (var d = 0; d < a.length; d++)
                      c.put(h(K, null, a[d]), !0);
                  } else
                    c = new cb(a);
                else
                  K && (a = h(K, null, a));
                return function (d, e) {
                  var f;
                  f = K ? K : C ? C : H;
                  return t ? y(c.remove(h(f, d, e))) : a === h(f, d, e);
                };
              }
              function l() {
                v || (e.$$postDigest(n), v = !0);
              }
              function m(a, c, d) {
                a[c] = a[c] || 0;
                a[c] += d ? 1 : -1;
              }
              function n() {
                v = !1;
                var a = { '': [] }, c = [''], d, l, p, q, u;
                p = g.$viewValue;
                q = M(e) || [];
                var C = G ? Object.keys(q).sort() : q, x, A, H, D, Q = {};
                u = k(p);
                var P = !1, V, X;
                S = {};
                for (D = 0; H = C.length, D < H; D++) {
                  x = D;
                  if (G && (x = C[D], '$' === x.charAt(0)))
                    continue;
                  A = q[x];
                  d = h(I, x, A) || '';
                  (l = a[d]) || (l = a[d] = [], c.push(d));
                  d = u(x, A);
                  P = P || d;
                  A = h(E, x, A);
                  A = y(A) ? A : '';
                  X = K ? K(e, U) : G ? C[D] : D;
                  K && (S[X] = x);
                  l.push({
                    id: X,
                    label: A,
                    selected: d
                  });
                }
                t || (z || null === p ? a[''].unshift({
                  id: '',
                  label: '',
                  selected: !P
                }) : P || a[''].unshift({
                  id: '?',
                  label: '',
                  selected: !0
                }));
                x = 0;
                for (C = c.length; x < C; x++) {
                  d = c[x];
                  l = a[d];
                  R.length <= x ? (p = {
                    element: F.clone().attr('label', d),
                    label: l.label
                  }, q = [p], R.push(q), f.append(p.element)) : (q = R[x], p = q[0], p.label != d && p.element.attr('label', p.label = d));
                  P = null;
                  D = 0;
                  for (H = l.length; D < H; D++)
                    d = l[D], (u = q[D + 1]) ? (P = u.element, u.label !== d.label && (m(Q, u.label, !1), m(Q, d.label, !0), P.text(u.label = d.label), P.prop('label', u.label)), u.id !== d.id && P.val(u.id = d.id), P[0].selected !== d.selected && (P.prop('selected', u.selected = d.selected), Ha && P.prop('selected', u.selected))) : ('' === d.id && z ? V = z : (V = w.clone()).val(d.id).prop('selected', d.selected).attr('selected', d.selected).prop('label', d.label).text(d.label), q.push(u = {
                      element: V,
                      label: d.label,
                      id: d.id,
                      selected: d.selected
                    }), m(Q, d.label, !0), P ? P.after(V) : p.element.append(V), P = V);
                  for (D++; q.length > D;)
                    d = q.pop(), m(Q, d.label, !1), d.element.remove();
                  r(Q, function (a, c) {
                    0 < a ? s.addOption(c) : 0 > a && s.removeOption(c);
                  });
                }
                for (; R.length > x;)
                  R.pop()[0].element.remove();
              }
              var p;
              if (!(p = q.match(d)))
                throw $f('iexp', q, va(f));
              var E = c(p[2] || p[1]), x = p[4] || p[6], A = / as /.test(p[0]) && p[1], C = A ? c(A) : null, G = p[5], I = c(p[3] || ''), H = c(p[2] ? p[1] : x), M = c(p[7]), K = p[8] ? c(p[8]) : null, S = {}, R = [[{
                      element: f,
                      label: ''
                    }]], U = {};
              z && (a(z)(e), z.removeClass('ng-scope'), z.remove());
              f.empty();
              f.on('change', function () {
                e.$apply(function () {
                  var a = M(e) || [], c;
                  if (t)
                    c = [], r(f.val(), function (d) {
                      d = K ? S[d] : d;
                      c.push('?' === d ? u : '' === d ? null : h(C ? C : H, d, a[d]));
                    });
                  else {
                    var d = K ? S[f.val()] : f.val();
                    c = '?' === d ? u : '' === d ? null : h(C ? C : H, d, a[d]);
                  }
                  g.$setViewValue(c);
                  n();
                });
              });
              g.$render = n;
              e.$watchCollection(M, l);
              e.$watchCollection(function () {
                var a = M(e), c;
                if (a && D(a)) {
                  c = Array(a.length);
                  for (var d = 0, f = a.length; d < f; d++)
                    c[d] = h(E, d, a[d]);
                } else if (a)
                  for (d in c = {}, a)
                    a.hasOwnProperty(d) && (c[d] = h(E, d, a[d]));
                return c;
              }, l);
              t && e.$watchCollection(function () {
                return g.$modelValue;
              }, l);
            }
            if (k[1]) {
              var s = k[0];
              k = k[1];
              var t = h.multiple, q = h.ngOptions, z = !1, n, v = !1, w = A(V.createElement('option')), F = A(V.createElement('optgroup')), E = w.clone();
              h = 0;
              for (var x = g.children(), C = x.length; h < C; h++)
                if ('' === x[h].value) {
                  n = z = x.eq(h);
                  break;
                }
              s.init(k, z, E);
              t && (k.$isEmpty = function (a) {
                return !a || 0 === a.length;
              });
              q ? p(e, g, k) : t ? m(e, g, k) : l(e, g, k, s);
            }
          }
        };
      }
    ], Vd = [
      '$interpolate',
      function (a) {
        var c = {
            addOption: x,
            removeOption: x
          };
        return {
          restrict: 'E',
          priority: 100,
          compile: function (d, e) {
            if (G(e.value)) {
              var f = a(d.text(), !0);
              f || e.$set('value', d.text());
            }
            return function (a, d, e) {
              var l = d.parent(), m = l.data('$selectController') || l.parent().data('$selectController');
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
    ], Ud = ca({
      restrict: 'E',
      terminal: !1
    });
  U.angular.bootstrap ? console.log('WARNING: Tried to load angular more than once.') : (Kd(), Md(ha), A(V).ready(function () {
    Gd(V, rc);
  }));
}(window, document));
!window.angular.$$csp() && window.angular.element(document).find('head').prepend('<style type="text/css">@charset "UTF-8";[ng\\:cloak],[ng-cloak],[data-ng-cloak],[x-ng-cloak],.ng-cloak,.x-ng-cloak,.ng-hide:not(.ng-hide-animate){display:none !important;}ng\\:form{display:block;}</style>');
//# sourceMappingURL=angular.min.js.map
/*
 AngularJS v1.3.0
 (c) 2010-2014 Google, Inc. http://angularjs.org
 License: MIT
*/
(function (p, e, B) {
  'use strict';
  function u(q, h, f) {
    return {
      restrict: 'ECA',
      terminal: !0,
      priority: 400,
      transclude: 'element',
      link: function (a, b, c, g, x) {
        function y() {
          k && (f.cancel(k), k = null);
          l && (l.$destroy(), l = null);
          m && (k = f.leave(m), k.then(function () {
            k = null;
          }), m = null);
        }
        function w() {
          var c = q.current && q.current.locals;
          if (e.isDefined(c && c.$template)) {
            var c = a.$new(), g = q.current;
            m = x(c, function (c) {
              f.enter(c, null, m || b).then(function () {
                !e.isDefined(s) || s && !a.$eval(s) || h();
              });
              y();
            });
            l = g.scope = c;
            l.$emit('$viewContentLoaded');
            l.$eval(v);
          } else
            y();
        }
        var l, m, k, s = c.autoscroll, v = c.onload || '';
        a.$on('$routeChangeSuccess', w);
        w();
      }
    };
  }
  function z(e, h, f) {
    return {
      restrict: 'ECA',
      priority: -400,
      link: function (a, b) {
        var c = f.current, g = c.locals;
        b.html(g.$template);
        var x = e(b.contents());
        c.controller && (g.$scope = a, g = h(c.controller, g), c.controllerAs && (a[c.controllerAs] = g), b.data('$ngControllerController', g), b.children().data('$ngControllerController', g));
        x(a);
      }
    };
  }
  p = e.module('ngRoute', ['ng']).provider('$route', function () {
    function q(a, b) {
      return e.extend(new (e.extend(function () {
      }, { prototype: a }))(), b);
    }
    function h(a, e) {
      var c = e.caseInsensitiveMatch, g = {
          originalPath: a,
          regexp: a
        }, f = g.keys = [];
      a = a.replace(/([().])/g, '\\$1').replace(/(\/)?:(\w+)([\?\*])?/g, function (a, e, c, b) {
        a = '?' === b ? b : null;
        b = '*' === b ? b : null;
        f.push({
          name: c,
          optional: !!a
        });
        e = e || '';
        return '' + (a ? '' : e) + '(?:' + (a ? e : '') + (b && '(.+?)' || '([^/]+)') + (a || '') + ')' + (a || '');
      }).replace(/([\/$\*])/g, '\\$1');
      g.regexp = new RegExp('^' + a + '$', c ? 'i' : '');
      return g;
    }
    var f = {};
    this.when = function (a, b) {
      f[a] = e.extend({ reloadOnSearch: !0 }, b, a && h(a, b));
      if (a) {
        var c = '/' == a[a.length - 1] ? a.substr(0, a.length - 1) : a + '/';
        f[c] = e.extend({ redirectTo: a }, h(c, b));
      }
      return this;
    };
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
      function (a, b, c, g, h, p, w) {
        function l(b) {
          var d = r.current;
          (u = (n = k()) && d && n.$$route === d.$$route && e.equals(n.pathParams, d.pathParams) && !n.reloadOnSearch && !v) || !d && !n || a.$broadcast('$routeChangeStart', n, d).defaultPrevented && b && b.preventDefault();
        }
        function m() {
          var t = r.current, d = n;
          if (u)
            t.params = d.params, e.copy(t.params, c), a.$broadcast('$routeUpdate', t);
          else if (d || t)
            v = !1, (r.current = d) && d.redirectTo && (e.isString(d.redirectTo) ? b.path(s(d.redirectTo, d.params)).search(d.params).replace() : b.url(d.redirectTo(d.pathParams, b.path(), b.search())).replace()), g.when(d).then(function () {
              if (d) {
                var a = e.extend({}, d.resolve), b, c;
                e.forEach(a, function (d, b) {
                  a[b] = e.isString(d) ? h.get(d) : h.invoke(d, null, null, b);
                });
                e.isDefined(b = d.template) ? e.isFunction(b) && (b = b(d.params)) : e.isDefined(c = d.templateUrl) && (e.isFunction(c) && (c = c(d.params)), c = w.getTrustedResourceUrl(c), e.isDefined(c) && (d.loadedTemplateUrl = c, b = p(c)));
                e.isDefined(b) && (a.$template = b);
                return g.all(a);
              }
            }).then(function (b) {
              d == r.current && (d && (d.locals = b, e.copy(d.params, c)), a.$broadcast('$routeChangeSuccess', d, t));
            }, function (b) {
              d == r.current && a.$broadcast('$routeChangeError', d, t, b);
            });
        }
        function k() {
          var a, d;
          e.forEach(f, function (c, g) {
            var f;
            if (f = !d) {
              var h = b.path();
              f = c.keys;
              var l = {};
              if (c.regexp)
                if (h = c.regexp.exec(h)) {
                  for (var k = 1, m = h.length; k < m; ++k) {
                    var n = f[k - 1], p = h[k];
                    n && p && (l[n.name] = p);
                  }
                  f = l;
                } else
                  f = null;
              else
                f = null;
              f = a = f;
            }
            f && (d = q(c, {
              params: e.extend({}, b.search(), a),
              pathParams: a
            }), d.$$route = c);
          });
          return d || f[null] && q(f[null], {
            params: {},
            pathParams: {}
          });
        }
        function s(a, b) {
          var c = [];
          e.forEach((a || '').split(':'), function (a, e) {
            if (0 === e)
              c.push(a);
            else {
              var f = a.match(/(\w+)(.*)/), g = f[1];
              c.push(b[g]);
              c.push(f[2] || '');
              delete b[g];
            }
          });
          return c.join('');
        }
        var v = !1, n, u, r = {
            routes: f,
            reload: function () {
              v = !0;
              a.$evalAsync(function () {
                l();
                m();
              });
            },
            updateParams: function (a) {
              if (this.current && this.current.$$route) {
                var c = {}, f = this;
                e.forEach(Object.keys(a), function (b) {
                  f.current.pathParams[b] || (c[b] = a[b]);
                });
                a = e.extend({}, this.current.params, a);
                b.path(s(this.current.$$route.originalPath, a));
                b.search(e.extend({}, b.search(), c));
              } else
                throw A('norout');
            }
          };
        a.$on('$locationChangeStart', l);
        a.$on('$locationChangeSuccess', m);
        return r;
      }
    ];
  });
  var A = e.$$minErr('ngRoute');
  p.provider('$routeParams', function () {
    this.$get = function () {
      return {};
    };
  });
  p.directive('ngView', u);
  p.directive('ngView', z);
  u.$inject = [
    '$route',
    '$anchorScroll',
    '$animate'
  ];
  z.$inject = [
    '$compile',
    '$controller',
    '$route'
  ];
}(window, window.angular));
//# sourceMappingURL=angular-route.min.js.map
/*
 AngularJS v1.3.4
 (c) 2010-2014 Google, Inc. http://angularjs.org
 License: MIT
*/
(function (M, f, S) {
  'use strict';
  f.module('ngAnimate', ['ng']).directive('ngAnimateChildren', function () {
    return function (T, B, k) {
      k = k.ngAnimateChildren;
      f.isString(k) && 0 === k.length ? B.data('$$ngAnimateChildren', !0) : T.$watch(k, function (f) {
        B.data('$$ngAnimateChildren', !!f);
      });
    };
  }).factory('$$animateReflow', [
    '$$rAF',
    '$document',
    function (f, B) {
      return function (k) {
        return f(function () {
          k();
        });
      };
    }
  ]).config([
    '$provide',
    '$animateProvider',
    function (T, B) {
      function k(f) {
        for (var g = 0; g < f.length; g++) {
          var k = f[g];
          if (1 == k.nodeType)
            return k;
        }
      }
      function N(f, g) {
        return k(f) == k(g);
      }
      var s = f.noop, g = f.forEach, ba = B.$$selectors, $ = f.isArray, ca = f.isString, da = f.isObject, t = { running: !0 };
      T.decorator('$animate', [
        '$delegate',
        '$$q',
        '$injector',
        '$sniffer',
        '$rootElement',
        '$$asyncCallback',
        '$rootScope',
        '$document',
        '$templateRequest',
        function (O, M, I, U, x, C, P, S, V) {
          function A(a, c) {
            var b = a.data('$$ngAnimateState') || {};
            c && (b.running = !0, b.structural = !0, a.data('$$ngAnimateState', b));
            return b.disabled || b.running && b.structural;
          }
          function z(a) {
            var c, b = M.defer();
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
          function J(a) {
            if (da(a))
              return a.tempClasses && ca(a.tempClasses) && (a.tempClasses = a.tempClasses.split(/\s+/)), a;
          }
          function W(a, c, b) {
            b = b || {};
            var e = {};
            g(b, function (a, d) {
              g(d.split(' '), function (d) {
                e[d] = a;
              });
            });
            var m = Object.create(null);
            g((a.attr('class') || '').split(/\s+/), function (a) {
              m[a] = !0;
            });
            var f = [], k = [];
            g(c && c.classes || [], function (a, d) {
              var b = m[d], c = e[d] || {};
              !1 === a ? (b || 'addClass' == c.event) && k.push(d) : !0 === a && (b && 'removeClass' != c.event || f.push(d));
            });
            return 0 < f.length + k.length && [
              f.join(' '),
              k.join(' ')
            ];
          }
          function Q(a) {
            if (a) {
              var c = [], b = {};
              a = a.substr(1).split('.');
              (U.transitions || U.animations) && c.push(I.get(ba['']));
              for (var e = 0; e < a.length; e++) {
                var f = a[e], k = ba[f];
                k && !b[f] && (c.push(I.get(k)), b[f] = !0);
              }
              return c;
            }
          }
          function R(a, c, b, e) {
            function m(a, d) {
              var b = a[d], c = a['before' + d.charAt(0).toUpperCase() + d.substr(1)];
              if (b || c)
                return 'leave' == d && (c = b, b = null), l.push({
                  event: d,
                  fn: b
                }), H.push({
                  event: d,
                  fn: c
                }), !0;
            }
            function k(c, h, G) {
              var w = [];
              g(c, function (a) {
                a.fn && w.push(a);
              });
              var f = 0;
              g(w, function (c, n) {
                var u = function () {
                  a: {
                    if (h) {
                      (h[n] || s)();
                      if (++f < w.length)
                        break a;
                      h = null;
                    }
                    G();
                  }
                };
                switch (c.event) {
                case 'setClass':
                  h.push(c.fn(a, F, d, u, e));
                  break;
                case 'animate':
                  h.push(c.fn(a, b, e.from, e.to, u));
                  break;
                case 'addClass':
                  h.push(c.fn(a, F || b, u, e));
                  break;
                case 'removeClass':
                  h.push(c.fn(a, d || b, u, e));
                  break;
                default:
                  h.push(c.fn(a, u, e));
                }
              });
              h && 0 === h.length && G();
            }
            var p = a[0];
            if (p) {
              e && (e.to = e.to || {}, e.from = e.from || {});
              var F, d;
              $(b) && (F = b[0], d = b[1], F ? d ? b = F + ' ' + d : (b = F, c = 'addClass') : (b = d, c = 'removeClass'));
              var h = 'setClass' == c, G = h || 'addClass' == c || 'removeClass' == c || 'animate' == c, w = a.attr('class') + ' ' + b;
              if (X(w)) {
                var u = s, n = [], H = [], q = s, r = [], l = [], w = (' ' + w).replace(/\s+/g, '.');
                g(Q(w), function (a) {
                  !m(a, c) && h && (m(a, 'addClass'), m(a, 'removeClass'));
                });
                return {
                  node: p,
                  event: c,
                  className: b,
                  isClassBased: G,
                  isSetClassOperation: h,
                  applyStyles: function () {
                    e && a.css(f.extend(e.from || {}, e.to || {}));
                  },
                  before: function (a) {
                    u = a;
                    k(H, n, function () {
                      u = s;
                      a();
                    });
                  },
                  after: function (a) {
                    q = a;
                    k(l, r, function () {
                      q = s;
                      a();
                    });
                  },
                  cancel: function () {
                    n && (g(n, function (a) {
                      (a || s)(!0);
                    }), u(!0));
                    r && (g(r, function (a) {
                      (a || s)(!0);
                    }), q(!0));
                  }
                };
              }
            }
          }
          function y(a, c, b, e, m, k, p, F) {
            function d(d) {
              var h = '$animate:' + d;
              H && H[h] && 0 < H[h].length && C(function () {
                b.triggerHandler(h, {
                  event: a,
                  className: c
                });
              });
            }
            function h() {
              d('before');
            }
            function G() {
              d('after');
            }
            function w() {
              w.hasBeenRun || (w.hasBeenRun = !0, k());
            }
            function u() {
              if (!u.hasBeenRun) {
                n && n.applyStyles();
                u.hasBeenRun = !0;
                p && p.tempClasses && g(p.tempClasses, function (a) {
                  b.removeClass(a);
                });
                var h = b.data('$$ngAnimateState');
                h && (n && n.isClassBased ? l(b, c) : (C(function () {
                  var d = b.data('$$ngAnimateState') || {};
                  v == d.index && l(b, c, a);
                }), b.data('$$ngAnimateState', h)));
                d('close');
                F();
              }
            }
            var n = R(b, a, c, p);
            if (!n)
              return w(), h(), G(), u(), s;
            a = n.event;
            c = n.className;
            var H = f.element._data(n.node), H = H && H.events;
            e || (e = m ? m.parent() : b.parent());
            if (Y(b, e))
              return w(), h(), G(), u(), s;
            e = b.data('$$ngAnimateState') || {};
            var q = e.active || {}, r = e.totalActive || 0, t = e.last;
            m = !1;
            if (0 < r) {
              r = [];
              if (n.isClassBased)
                'setClass' == t.event ? (r.push(t), l(b, c)) : q[c] && (aa = q[c], aa.event == a ? m = !0 : (r.push(aa), l(b, c)));
              else if ('leave' == a && q['ng-leave'])
                m = !0;
              else {
                for (var aa in q)
                  r.push(q[aa]);
                e = {};
                l(b, !0);
              }
              0 < r.length && g(r, function (a) {
                a.cancel();
              });
            }
            !n.isClassBased || n.isSetClassOperation || 'animate' == a || m || (m = 'addClass' == a == b.hasClass(c));
            if (m)
              return w(), h(), G(), d('close'), F(), s;
            q = e.active || {};
            r = e.totalActive || 0;
            if ('leave' == a)
              b.one('$destroy', function (a) {
                a = f.element(this);
                var d = a.data('$$ngAnimateState');
                d && (d = d.active['ng-leave']) && (d.cancel(), l(a, 'ng-leave'));
              });
            b.addClass('ng-animate');
            p && p.tempClasses && g(p.tempClasses, function (a) {
              b.addClass(a);
            });
            var v = Z++;
            r++;
            q[c] = n;
            b.data('$$ngAnimateState', {
              last: n,
              active: q,
              index: v,
              totalActive: r
            });
            h();
            n.before(function (d) {
              var h = b.data('$$ngAnimateState');
              d = d || !h || !h.active[c] || n.isClassBased && h.active[c].event != a;
              w();
              !0 === d ? u() : (G(), n.after(u));
            });
            return n.cancel;
          }
          function K(a) {
            if (a = k(a))
              a = f.isFunction(a.getElementsByClassName) ? a.getElementsByClassName('ng-animate') : a.querySelectorAll('.ng-animate'), g(a, function (a) {
                a = f.element(a);
                (a = a.data('$$ngAnimateState')) && a.active && g(a.active, function (a) {
                  a.cancel();
                });
              });
          }
          function l(a, c) {
            if (N(a, x))
              t.disabled || (t.running = !1, t.structural = !1);
            else if (c) {
              var b = a.data('$$ngAnimateState') || {}, e = !0 === c;
              !e && b.active && b.active[c] && (b.totalActive--, delete b.active[c]);
              if (e || !b.totalActive)
                a.removeClass('ng-animate'), a.removeData('$$ngAnimateState');
            }
          }
          function Y(a, c) {
            if (t.disabled)
              return !0;
            if (N(a, x))
              return t.running;
            var b, e, k;
            do {
              if (0 === c.length)
                break;
              var g = N(c, x), p = g ? t : c.data('$$ngAnimateState') || {};
              if (p.disabled)
                return !0;
              g && (k = !0);
              !1 !== b && (g = c.data('$$ngAnimateChildren'), f.isDefined(g) && (b = g));
              e = e || p.running || p.last && !p.last.isClassBased;
            } while (c = c.parent());
            return !k || !b && e;
          }
          x.data('$$ngAnimateState', t);
          var L = P.$watch(function () {
              return V.totalPendingRequests;
            }, function (a, c) {
              0 === a && (L(), P.$$postDigest(function () {
                P.$$postDigest(function () {
                  t.running = !1;
                });
              }));
            }), Z = 0, E = B.classNameFilter(), X = E ? function (a) {
              return E.test(a);
            } : function () {
              return !0;
            };
          return {
            animate: function (a, c, b, e, g) {
              e = e || 'ng-inline-animate';
              g = J(g) || {};
              g.from = b ? c : null;
              g.to = b ? b : c;
              return z(function (b) {
                return y('animate', e, f.element(k(a)), null, null, s, g, b);
              });
            },
            enter: function (a, c, b, e) {
              e = J(e);
              a = f.element(a);
              c = c && f.element(c);
              b = b && f.element(b);
              A(a, !0);
              O.enter(a, c, b);
              return z(function (g) {
                return y('enter', 'ng-enter', f.element(k(a)), c, b, s, e, g);
              });
            },
            leave: function (a, c) {
              c = J(c);
              a = f.element(a);
              K(a);
              A(a, !0);
              return z(function (b) {
                return y('leave', 'ng-leave', f.element(k(a)), null, null, function () {
                  O.leave(a);
                }, c, b);
              });
            },
            move: function (a, c, b, e) {
              e = J(e);
              a = f.element(a);
              c = c && f.element(c);
              b = b && f.element(b);
              K(a);
              A(a, !0);
              O.move(a, c, b);
              return z(function (g) {
                return y('move', 'ng-move', f.element(k(a)), c, b, s, e, g);
              });
            },
            addClass: function (a, c, b) {
              return this.setClass(a, c, [], b);
            },
            removeClass: function (a, c, b) {
              return this.setClass(a, [], c, b);
            },
            setClass: function (a, c, b, e) {
              e = J(e);
              a = f.element(a);
              a = f.element(k(a));
              if (A(a))
                return O.$$setClassImmediately(a, c, b, e);
              var m, l = a.data('$$animateClasses'), p = !!l;
              l || (l = { classes: {} });
              m = l.classes;
              c = $(c) ? c : c.split(' ');
              g(c, function (a) {
                a && a.length && (m[a] = !0);
              });
              b = $(b) ? b : b.split(' ');
              g(b, function (a) {
                a && a.length && (m[a] = !1);
              });
              if (p)
                return e && l.options && (l.options = f.extend(l.options || {}, e)), l.promise;
              a.data('$$animateClasses', l = {
                classes: m,
                options: e
              });
              return l.promise = z(function (b) {
                var d = a.parent(), h = k(a), c = h.parentNode;
                if (!c || c.$$NG_REMOVED || h.$$NG_REMOVED)
                  b();
                else {
                  h = a.data('$$animateClasses');
                  a.removeData('$$animateClasses');
                  var c = a.data('$$ngAnimateState') || {}, e = W(a, h, c.active);
                  return e ? y('setClass', e, a, d, null, function () {
                    e[0] && O.$$addClassImmediately(a, e[0]);
                    e[1] && O.$$removeClassImmediately(a, e[1]);
                  }, h.options, b) : b();
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
                  l(c);
                else {
                  var b = c.data('$$ngAnimateState') || {};
                  b.disabled = !0;
                  c.data('$$ngAnimateState', b);
                }
                break;
              case 1:
                t.disabled = !a;
                break;
              default:
                a = !t.disabled;
              }
              return !!a;
            }
          };
        }
      ]);
      B.register('', [
        '$window',
        '$sniffer',
        '$timeout',
        '$$animateReflow',
        function (t, B, I, U) {
          function x() {
            e || (e = U(function () {
              b = [];
              e = null;
              a = {};
            }));
          }
          function C(c, d) {
            e && e();
            b.push(d);
            e = U(function () {
              g(b, function (a) {
                a();
              });
              b = [];
              e = null;
              a = {};
            });
          }
          function P(a, d) {
            var h = k(a);
            a = f.element(h);
            p.push(a);
            h = Date.now() + d;
            h <= N || (I.cancel(m), N = h, m = I(function () {
              T(p);
              p = [];
            }, d, !1));
          }
          function T(a) {
            g(a, function (a) {
              (a = a.data('$$ngAnimateCSS3Data')) && g(a.closeAnimationFns, function (a) {
                a();
              });
            });
          }
          function V(b, d) {
            var h = d ? a[d] : null;
            if (!h) {
              var c = 0, e = 0, f = 0, k = 0;
              g(b, function (a) {
                if (1 == a.nodeType) {
                  a = t.getComputedStyle(a) || {};
                  c = Math.max(A(a[L + 'Duration']), c);
                  e = Math.max(A(a[L + 'Delay']), e);
                  k = Math.max(A(a[E + 'Delay']), k);
                  var d = A(a[E + 'Duration']);
                  0 < d && (d *= parseInt(a[E + 'IterationCount'], 10) || 1);
                  f = Math.max(d, f);
                }
              });
              h = {
                total: 0,
                transitionDelay: e,
                transitionDuration: c,
                animationDelay: k,
                animationDuration: f
              };
              d && (a[d] = h);
            }
            return h;
          }
          function A(a) {
            var d = 0;
            a = ca(a) ? a.split(/\s*,\s*/) : [];
            g(a, function (a) {
              d = Math.max(parseFloat(a) || 0, d);
            });
            return d;
          }
          function z(b, d, h, e) {
            b = 0 <= [
              'ng-enter',
              'ng-leave',
              'ng-move'
            ].indexOf(h);
            var f, g = d.parent(), n = g.data('$$ngAnimateKey');
            n || (g.data('$$ngAnimateKey', ++c), n = c);
            f = n + '-' + k(d).getAttribute('class');
            var g = f + ' ' + h, n = a[g] ? ++a[g].total : 0, l = {};
            if (0 < n) {
              var q = h + '-stagger', l = f + ' ' + q;
              (f = !a[l]) && d.addClass(q);
              l = V(d, l);
              f && d.removeClass(q);
            }
            d.addClass(h);
            var q = d.data('$$ngAnimateCSS3Data') || {}, r = V(d, g);
            f = r.transitionDuration;
            r = r.animationDuration;
            if (b && 0 === f && 0 === r)
              return d.removeClass(h), !1;
            h = e || b && 0 < f;
            b = 0 < r && 0 < l.animationDelay && 0 === l.animationDuration;
            d.data('$$ngAnimateCSS3Data', {
              stagger: l,
              cacheKey: g,
              running: q.running || 0,
              itemIndex: n,
              blockTransition: h,
              closeAnimationFns: q.closeAnimationFns || []
            });
            g = k(d);
            h && (W(g, !0), e && d.css(e));
            b && (g.style[E + 'PlayState'] = 'paused');
            return !0;
          }
          function J(a, d, b, c, e) {
            function f() {
              d.off(C, l);
              d.removeClass(q);
              d.removeClass(r);
              z && I.cancel(z);
              K(d, b);
              var a = k(d), c;
              for (c in p)
                a.style.removeProperty(p[c]);
            }
            function l(a) {
              a.stopPropagation();
              var d = a.originalEvent || a;
              a = d.$manualTimeStamp || d.timeStamp || Date.now();
              d = parseFloat(d.elapsedTime.toFixed(3));
              Math.max(a - B, 0) >= A && d >= x && c();
            }
            var m = k(d);
            a = d.data('$$ngAnimateCSS3Data');
            if (-1 != m.getAttribute('class').indexOf(b) && a) {
              var q = '', r = '';
              g(b.split(' '), function (a, d) {
                var b = (0 < d ? ' ' : '') + a;
                q += b + '-active';
                r += b + '-pending';
              });
              var p = [], t = a.itemIndex, v = a.stagger, s = 0;
              if (0 < t) {
                s = 0;
                0 < v.transitionDelay && 0 === v.transitionDuration && (s = v.transitionDelay * t);
                var y = 0;
                0 < v.animationDelay && 0 === v.animationDuration && (y = v.animationDelay * t, p.push(Y + 'animation-play-state'));
                s = Math.round(100 * Math.max(s, y)) / 100;
              }
              s || (d.addClass(q), a.blockTransition && W(m, !1));
              var D = V(d, a.cacheKey + ' ' + q), x = Math.max(D.transitionDuration, D.animationDuration);
              if (0 === x)
                d.removeClass(q), K(d, b), c();
              else {
                !s && e && (D.transitionDuration || (d.css('transition', D.animationDuration + 's linear all'), p.push('transition')), d.css(e));
                var t = Math.max(D.transitionDelay, D.animationDelay), A = 1000 * t;
                0 < p.length && (v = m.getAttribute('style') || '', ';' !== v.charAt(v.length - 1) && (v += ';'), m.setAttribute('style', v + ' '));
                var B = Date.now(), C = X + ' ' + Z, t = 1000 * (s + 1.5 * (t + x)), z;
                0 < s && (d.addClass(r), z = I(function () {
                  z = null;
                  0 < D.transitionDuration && W(m, !1);
                  0 < D.animationDuration && (m.style[E + 'PlayState'] = '');
                  d.addClass(q);
                  d.removeClass(r);
                  e && (0 === D.transitionDuration && d.css('transition', D.animationDuration + 's linear all'), d.css(e), p.push('transition'));
                }, 1000 * s, !1));
                d.on(C, l);
                a.closeAnimationFns.push(function () {
                  f();
                  c();
                });
                a.running++;
                P(d, t);
                return f;
              }
            } else
              c();
          }
          function W(a, d) {
            a.style[L + 'Property'] = d ? 'none' : '';
          }
          function Q(a, d, b, c) {
            if (z(a, d, b, c))
              return function (a) {
                a && K(d, b);
              };
          }
          function R(a, d, b, c, e) {
            if (d.data('$$ngAnimateCSS3Data'))
              return J(a, d, b, c, e);
            K(d, b);
            c();
          }
          function y(a, d, b, c, e) {
            var f = Q(a, d, b, e.from);
            if (f) {
              var g = f;
              C(d, function () {
                g = R(a, d, b, c, e.to);
              });
              return function (a) {
                (g || s)(a);
              };
            }
            x();
            c();
          }
          function K(a, d) {
            a.removeClass(d);
            var b = a.data('$$ngAnimateCSS3Data');
            b && (b.running && b.running--, b.running && 0 !== b.running || a.removeData('$$ngAnimateCSS3Data'));
          }
          function l(a, d) {
            var b = '';
            a = $(a) ? a : a.split(/\s+/);
            g(a, function (a, c) {
              a && 0 < a.length && (b += (0 < c ? ' ' : '') + a + d);
            });
            return b;
          }
          var Y = '', L, Z, E, X;
          M.ontransitionend === S && M.onwebkittransitionend !== S ? (Y = '-webkit-', L = 'WebkitTransition', Z = 'webkitTransitionEnd transitionend') : (L = 'transition', Z = 'transitionend');
          M.onanimationend === S && M.onwebkitanimationend !== S ? (Y = '-webkit-', E = 'WebkitAnimation', X = 'webkitAnimationEnd animationend') : (E = 'animation', X = 'animationend');
          var a = {}, c = 0, b = [], e, m = null, N = 0, p = [];
          return {
            animate: function (a, d, b, c, e, f) {
              f = f || {};
              f.from = b;
              f.to = c;
              return y('animate', a, d, e, f);
            },
            enter: function (a, b, c) {
              c = c || {};
              return y('enter', a, 'ng-enter', b, c);
            },
            leave: function (a, b, c) {
              c = c || {};
              return y('leave', a, 'ng-leave', b, c);
            },
            move: function (a, b, c) {
              c = c || {};
              return y('move', a, 'ng-move', b, c);
            },
            beforeSetClass: function (a, b, c, e, f) {
              f = f || {};
              b = l(c, '-remove') + ' ' + l(b, '-add');
              if (f = Q('setClass', a, b, f.from))
                return C(a, e), f;
              x();
              e();
            },
            beforeAddClass: function (a, b, c, e) {
              e = e || {};
              if (b = Q('addClass', a, l(b, '-add'), e.from))
                return C(a, c), b;
              x();
              c();
            },
            beforeRemoveClass: function (a, b, c, e) {
              e = e || {};
              if (b = Q('removeClass', a, l(b, '-remove'), e.from))
                return C(a, c), b;
              x();
              c();
            },
            setClass: function (a, b, c, e, f) {
              f = f || {};
              c = l(c, '-remove');
              b = l(b, '-add');
              return R('setClass', a, c + ' ' + b, e, f.to);
            },
            addClass: function (a, b, c, e) {
              e = e || {};
              return R('addClass', a, l(b, '-add'), c, e.to);
            },
            removeClass: function (a, b, c, e) {
              e = e || {};
              return R('removeClass', a, l(b, '-remove'), c, e.to);
            }
          };
        }
      ]);
    }
  ]);
}(window, window.angular));
//# sourceMappingURL=angular-animate.min.js.map
/*
 AngularJS v1.3.4
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
      var d = /((ftp|https?):\/\/|(mailto:)?[A-Za-z0-9._%+-]+@)\S*[^\s.;,(){}<>"]/, c = /^mailto:/;
      return function (e, b) {
        function k(a) {
          a && g.push(E(a));
        }
        function f(a, c) {
          g.push('<a ');
          h.isDefined(b) && g.push('target="', b, '" ');
          g.push('href="', a.replace('"', '&quot;'), '">');
          k(c);
          g.push('</a>');
        }
        if (!e)
          return e;
        for (var m, l = e, g = [], n, p; m = l.match(d);)
          n = m[0], m[2] == m[3] && (n = 'mailto:' + n), p = m.index, k(l.substr(0, p)), f(n, m[0].replace(c, '')), l = l.substring(p + m[0].length);
        k(l);
        return a(g.join(''));
      };
    }
  ]);
}(window, window.angular));
//# sourceMappingURL=angular-sanitize.min.js.map
/*
 AngularJS v1.3.4
 (c) 2010-2014 Google, Inc. http://angularjs.org
 License: MIT
*/
(function (y, u, z) {
  'use strict';
  function s(h, k, p) {
    n.directive(h, [
      '$parse',
      '$swipe',
      function (d, e) {
        return function (l, m, f) {
          function g(a) {
            if (!c)
              return !1;
            var b = Math.abs(a.y - c.y);
            a = (a.x - c.x) * k;
            return q && 75 > b && 0 < a && 30 < a && 0.3 > b / a;
          }
          var b = d(f[h]), c, q, a = ['touch'];
          u.isDefined(f.ngSwipeDisableMouse) || a.push('mouse');
          e.bind(m, {
            start: function (a, b) {
              c = a;
              q = !0;
            },
            cancel: function (a) {
              q = !1;
            },
            end: function (a, c) {
              g(a) && l.$apply(function () {
                m.triggerHandler(p);
                b(l, { $event: c });
              });
            }
          }, a);
        };
      }
    ]);
  }
  var n = u.module('ngTouch', []);
  n.factory('$swipe', [function () {
      function h(d) {
        var e = d.touches && d.touches.length ? d.touches : [d];
        d = d.changedTouches && d.changedTouches[0] || d.originalEvent && d.originalEvent.changedTouches && d.originalEvent.changedTouches[0] || e[0].originalEvent || e[0];
        return {
          x: d.clientX,
          y: d.clientY
        };
      }
      function k(d, e) {
        var l = [];
        u.forEach(d, function (d) {
          (d = p[d][e]) && l.push(d);
        });
        return l.join(' ');
      }
      var p = {
          mouse: {
            start: 'mousedown',
            move: 'mousemove',
            end: 'mouseup'
          },
          touch: {
            start: 'touchstart',
            move: 'touchmove',
            end: 'touchend',
            cancel: 'touchcancel'
          }
        };
      return {
        bind: function (d, e, l) {
          var m, f, g, b, c = !1;
          l = l || [
            'mouse',
            'touch'
          ];
          d.on(k(l, 'start'), function (a) {
            g = h(a);
            c = !0;
            f = m = 0;
            b = g;
            e.start && e.start(g, a);
          });
          var q = k(l, 'cancel');
          if (q)
            d.on(q, function (a) {
              c = !1;
              e.cancel && e.cancel(a);
            });
          d.on(k(l, 'move'), function (a) {
            if (c && g) {
              var d = h(a);
              m += Math.abs(d.x - b.x);
              f += Math.abs(d.y - b.y);
              b = d;
              10 > m && 10 > f || (f > m ? (c = !1, e.cancel && e.cancel(a)) : (a.preventDefault(), e.move && e.move(d, a)));
            }
          });
          d.on(k(l, 'end'), function (a) {
            c && (c = !1, e.end && e.end(h(a), a));
          });
        }
      };
    }]);
  n.config([
    '$provide',
    function (h) {
      h.decorator('ngClickDirective', [
        '$delegate',
        function (k) {
          k.shift();
          return k;
        }
      ]);
    }
  ]);
  n.directive('ngClick', [
    '$parse',
    '$timeout',
    '$rootElement',
    function (h, k, p) {
      function d(b, c, d) {
        for (var a = 0; a < b.length; a += 2) {
          var e = b[a + 1], f = d;
          if (25 > Math.abs(b[a] - c) && 25 > Math.abs(e - f))
            return b.splice(a, a + 2), !0;
        }
        return !1;
      }
      function e(b) {
        if (!(2500 < Date.now() - m)) {
          var c = b.touches && b.touches.length ? b.touches : [b], e = c[0].clientX, c = c[0].clientY;
          1 > e && 1 > c || g && g[0] === e && g[1] === c || (g && (g = null), 'label' === b.target.tagName.toLowerCase() && (g = [
            e,
            c
          ]), d(f, e, c) || (b.stopPropagation(), b.preventDefault(), b.target && b.target.blur()));
        }
      }
      function l(b) {
        b = b.touches && b.touches.length ? b.touches : [b];
        var c = b[0].clientX, d = b[0].clientY;
        f.push(c, d);
        k(function () {
          for (var a = 0; a < f.length; a += 2)
            if (f[a] == c && f[a + 1] == d) {
              f.splice(a, a + 2);
              break;
            }
        }, 2500, !1);
      }
      var m, f, g;
      return function (b, c, g) {
        function a() {
          n = !1;
          c.removeClass('ng-click-active');
        }
        var k = h(g.ngClick), n = !1, r, s, v, w;
        c.on('touchstart', function (a) {
          n = !0;
          r = a.target ? a.target : a.srcElement;
          3 == r.nodeType && (r = r.parentNode);
          c.addClass('ng-click-active');
          s = Date.now();
          a = a.touches && a.touches.length ? a.touches : [a];
          a = a[0].originalEvent || a[0];
          v = a.clientX;
          w = a.clientY;
        });
        c.on('touchmove', function (c) {
          a();
        });
        c.on('touchcancel', function (c) {
          a();
        });
        c.on('touchend', function (b) {
          var k = Date.now() - s, h = b.changedTouches && b.changedTouches.length ? b.changedTouches : b.touches && b.touches.length ? b.touches : [b], t = h[0].originalEvent || h[0], h = t.clientX, t = t.clientY, x = Math.sqrt(Math.pow(h - v, 2) + Math.pow(t - w, 2));
          n && 750 > k && 12 > x && (f || (p[0].addEventListener('click', e, !0), p[0].addEventListener('touchstart', l, !0), f = []), m = Date.now(), d(f, h, t), r && r.blur(), u.isDefined(g.disabled) && !1 !== g.disabled || c.triggerHandler('click', [b]));
          a();
        });
        c.onclick = function (a) {
        };
        c.on('click', function (a, c) {
          b.$apply(function () {
            k(b, { $event: c || a });
          });
        });
        c.on('mousedown', function (a) {
          c.addClass('ng-click-active');
        });
        c.on('mousemove mouseup', function (a) {
          c.removeClass('ng-click-active');
        });
      };
    }
  ]);
  s('ngSwipeLeft', -1, 'swipeleft');
  s('ngSwipeRight', 1, 'swiperight');
}(window, window.angular));
//# sourceMappingURL=angular-touch.min.js.map
/*
 * angular-ui-bootstrap
 * http://angular-ui.github.io/bootstrap/

 * Version: 0.12.0 - 2014-11-16
 * License: MIT
 */
angular.module('ui.bootstrap', [
  'ui.bootstrap.tpls',
  'ui.bootstrap.transition',
  'ui.bootstrap.collapse',
  'ui.bootstrap.accordion',
  'ui.bootstrap.alert',
  'ui.bootstrap.bindHtml',
  'ui.bootstrap.buttons',
  'ui.bootstrap.carousel',
  'ui.bootstrap.dateparser',
  'ui.bootstrap.position',
  'ui.bootstrap.datepicker',
  'ui.bootstrap.dropdown',
  'ui.bootstrap.modal',
  'ui.bootstrap.pagination',
  'ui.bootstrap.tooltip',
  'ui.bootstrap.popover',
  'ui.bootstrap.progressbar',
  'ui.bootstrap.rating',
  'ui.bootstrap.tabs',
  'ui.bootstrap.timepicker',
  'ui.bootstrap.typeahead'
]), angular.module('ui.bootstrap.tpls', [
  'template/accordion/accordion-group.html',
  'template/accordion/accordion.html',
  'template/alert/alert.html',
  'template/carousel/carousel.html',
  'template/carousel/slide.html',
  'template/datepicker/datepicker.html',
  'template/datepicker/day.html',
  'template/datepicker/month.html',
  'template/datepicker/popup.html',
  'template/datepicker/year.html',
  'template/modal/backdrop.html',
  'template/modal/window.html',
  'template/pagination/pager.html',
  'template/pagination/pagination.html',
  'template/tooltip/tooltip-html-unsafe-popup.html',
  'template/tooltip/tooltip-popup.html',
  'template/popover/popover.html',
  'template/progressbar/bar.html',
  'template/progressbar/progress.html',
  'template/progressbar/progressbar.html',
  'template/rating/rating.html',
  'template/tabs/tab.html',
  'template/tabs/tabset.html',
  'template/timepicker/timepicker.html',
  'template/typeahead/typeahead-match.html',
  'template/typeahead/typeahead-popup.html'
]), angular.module('ui.bootstrap.transition', []).factory('$transition', [
  '$q',
  '$timeout',
  '$rootScope',
  function (a, b, c) {
    function d(a) {
      for (var b in a)
        if (void 0 !== f.style[b])
          return a[b];
    }
    var e = function (d, f, g) {
        g = g || {};
        var h = a.defer(), i = e[g.animation ? 'animationEndEventName' : 'transitionEndEventName'], j = function () {
            c.$apply(function () {
              d.unbind(i, j), h.resolve(d);
            });
          };
        return i && d.bind(i, j), b(function () {
          angular.isString(f) ? d.addClass(f) : angular.isFunction(f) ? f(d) : angular.isObject(f) && d.css(f), i || h.resolve(d);
        }), h.promise.cancel = function () {
          i && d.unbind(i, j), h.reject('Transition cancelled');
        }, h.promise;
      }, f = document.createElement('trans'), g = {
        WebkitTransition: 'webkitTransitionEnd',
        MozTransition: 'transitionend',
        OTransition: 'oTransitionEnd',
        transition: 'transitionend'
      }, h = {
        WebkitTransition: 'webkitAnimationEnd',
        MozTransition: 'animationend',
        OTransition: 'oAnimationEnd',
        transition: 'animationend'
      };
    return e.transitionEndEventName = d(g), e.animationEndEventName = d(h), e;
  }
]), angular.module('ui.bootstrap.collapse', ['ui.bootstrap.transition']).directive('collapse', [
  '$transition',
  function (a) {
    return {
      link: function (b, c, d) {
        function e(b) {
          function d() {
            j === e && (j = void 0);
          }
          var e = a(c, b);
          return j && j.cancel(), j = e, e.then(d, d), e;
        }
        function f() {
          k ? (k = !1, g()) : (c.removeClass('collapse').addClass('collapsing'), e({ height: c[0].scrollHeight + 'px' }).then(g));
        }
        function g() {
          c.removeClass('collapsing'), c.addClass('collapse in'), c.css({ height: 'auto' });
        }
        function h() {
          if (k)
            k = !1, i(), c.css({ height: 0 });
          else {
            c.css({ height: c[0].scrollHeight + 'px' });
            {
              c[0].offsetWidth;
            }
            c.removeClass('collapse in').addClass('collapsing'), e({ height: 0 }).then(i);
          }
        }
        function i() {
          c.removeClass('collapsing'), c.addClass('collapse');
        }
        var j, k = !0;
        b.$watch(d.collapse, function (a) {
          a ? h() : f();
        });
      }
    };
  }
]), angular.module('ui.bootstrap.accordion', ['ui.bootstrap.collapse']).constant('accordionConfig', { closeOthers: !0 }).controller('AccordionController', [
  '$scope',
  '$attrs',
  'accordionConfig',
  function (a, b, c) {
    this.groups = [], this.closeOthers = function (d) {
      var e = angular.isDefined(b.closeOthers) ? a.$eval(b.closeOthers) : c.closeOthers;
      e && angular.forEach(this.groups, function (a) {
        a !== d && (a.isOpen = !1);
      });
    }, this.addGroup = function (a) {
      var b = this;
      this.groups.push(a), a.$on('$destroy', function () {
        b.removeGroup(a);
      });
    }, this.removeGroup = function (a) {
      var b = this.groups.indexOf(a);
      -1 !== b && this.groups.splice(b, 1);
    };
  }
]).directive('accordion', function () {
  return {
    restrict: 'EA',
    controller: 'AccordionController',
    transclude: !0,
    replace: !1,
    templateUrl: 'template/accordion/accordion.html'
  };
}).directive('accordionGroup', function () {
  return {
    require: '^accordion',
    restrict: 'EA',
    transclude: !0,
    replace: !0,
    templateUrl: 'template/accordion/accordion-group.html',
    scope: {
      heading: '@',
      isOpen: '=?',
      isDisabled: '=?'
    },
    controller: function () {
      this.setHeading = function (a) {
        this.heading = a;
      };
    },
    link: function (a, b, c, d) {
      d.addGroup(a), a.$watch('isOpen', function (b) {
        b && d.closeOthers(a);
      }), a.toggleOpen = function () {
        a.isDisabled || (a.isOpen = !a.isOpen);
      };
    }
  };
}).directive('accordionHeading', function () {
  return {
    restrict: 'EA',
    transclude: !0,
    template: '',
    replace: !0,
    require: '^accordionGroup',
    link: function (a, b, c, d, e) {
      d.setHeading(e(a, function () {
      }));
    }
  };
}).directive('accordionTransclude', function () {
  return {
    require: '^accordionGroup',
    link: function (a, b, c, d) {
      a.$watch(function () {
        return d[c.accordionTransclude];
      }, function (a) {
        a && (b.html(''), b.append(a));
      });
    }
  };
}), angular.module('ui.bootstrap.alert', []).controller('AlertController', [
  '$scope',
  '$attrs',
  function (a, b) {
    a.closeable = 'close' in b, this.close = a.close;
  }
]).directive('alert', function () {
  return {
    restrict: 'EA',
    controller: 'AlertController',
    templateUrl: 'template/alert/alert.html',
    transclude: !0,
    replace: !0,
    scope: {
      type: '@',
      close: '&'
    }
  };
}).directive('dismissOnTimeout', [
  '$timeout',
  function (a) {
    return {
      require: 'alert',
      link: function (b, c, d, e) {
        a(function () {
          e.close();
        }, parseInt(d.dismissOnTimeout, 10));
      }
    };
  }
]), angular.module('ui.bootstrap.bindHtml', []).directive('bindHtmlUnsafe', function () {
  return function (a, b, c) {
    b.addClass('ng-binding').data('$binding', c.bindHtmlUnsafe), a.$watch(c.bindHtmlUnsafe, function (a) {
      b.html(a || '');
    });
  };
}), angular.module('ui.bootstrap.buttons', []).constant('buttonConfig', {
  activeClass: 'active',
  toggleEvent: 'click'
}).controller('ButtonsController', [
  'buttonConfig',
  function (a) {
    this.activeClass = a.activeClass || 'active', this.toggleEvent = a.toggleEvent || 'click';
  }
]).directive('btnRadio', function () {
  return {
    require: [
      'btnRadio',
      'ngModel'
    ],
    controller: 'ButtonsController',
    link: function (a, b, c, d) {
      var e = d[0], f = d[1];
      f.$render = function () {
        b.toggleClass(e.activeClass, angular.equals(f.$modelValue, a.$eval(c.btnRadio)));
      }, b.bind(e.toggleEvent, function () {
        var d = b.hasClass(e.activeClass);
        (!d || angular.isDefined(c.uncheckable)) && a.$apply(function () {
          f.$setViewValue(d ? null : a.$eval(c.btnRadio)), f.$render();
        });
      });
    }
  };
}).directive('btnCheckbox', function () {
  return {
    require: [
      'btnCheckbox',
      'ngModel'
    ],
    controller: 'ButtonsController',
    link: function (a, b, c, d) {
      function e() {
        return g(c.btnCheckboxTrue, !0);
      }
      function f() {
        return g(c.btnCheckboxFalse, !1);
      }
      function g(b, c) {
        var d = a.$eval(b);
        return angular.isDefined(d) ? d : c;
      }
      var h = d[0], i = d[1];
      i.$render = function () {
        b.toggleClass(h.activeClass, angular.equals(i.$modelValue, e()));
      }, b.bind(h.toggleEvent, function () {
        a.$apply(function () {
          i.$setViewValue(b.hasClass(h.activeClass) ? f() : e()), i.$render();
        });
      });
    }
  };
}), angular.module('ui.bootstrap.carousel', ['ui.bootstrap.transition']).controller('CarouselController', [
  '$scope',
  '$timeout',
  '$interval',
  '$transition',
  function (a, b, c, d) {
    function e() {
      f();
      var b = +a.interval;
      !isNaN(b) && b > 0 && (h = c(g, b));
    }
    function f() {
      h && (c.cancel(h), h = null);
    }
    function g() {
      var b = +a.interval;
      i && !isNaN(b) && b > 0 ? a.next() : a.pause();
    }
    var h, i, j = this, k = j.slides = a.slides = [], l = -1;
    j.currentSlide = null;
    var m = !1;
    j.select = a.select = function (c, f) {
      function g() {
        if (!m) {
          if (j.currentSlide && angular.isString(f) && !a.noTransition && c.$element) {
            c.$element.addClass(f);
            {
              c.$element[0].offsetWidth;
            }
            angular.forEach(k, function (a) {
              angular.extend(a, {
                direction: '',
                entering: !1,
                leaving: !1,
                active: !1
              });
            }), angular.extend(c, {
              direction: f,
              active: !0,
              entering: !0
            }), angular.extend(j.currentSlide || {}, {
              direction: f,
              leaving: !0
            }), a.$currentTransition = d(c.$element, {}), function (b, c) {
              a.$currentTransition.then(function () {
                h(b, c);
              }, function () {
                h(b, c);
              });
            }(c, j.currentSlide);
          } else
            h(c, j.currentSlide);
          j.currentSlide = c, l = i, e();
        }
      }
      function h(b, c) {
        angular.extend(b, {
          direction: '',
          active: !0,
          leaving: !1,
          entering: !1
        }), angular.extend(c || {}, {
          direction: '',
          active: !1,
          leaving: !1,
          entering: !1
        }), a.$currentTransition = null;
      }
      var i = k.indexOf(c);
      void 0 === f && (f = i > l ? 'next' : 'prev'), c && c !== j.currentSlide && (a.$currentTransition ? (a.$currentTransition.cancel(), b(g)) : g());
    }, a.$on('$destroy', function () {
      m = !0;
    }), j.indexOfSlide = function (a) {
      return k.indexOf(a);
    }, a.next = function () {
      var b = (l + 1) % k.length;
      return a.$currentTransition ? void 0 : j.select(k[b], 'next');
    }, a.prev = function () {
      var b = 0 > l - 1 ? k.length - 1 : l - 1;
      return a.$currentTransition ? void 0 : j.select(k[b], 'prev');
    }, a.isActive = function (a) {
      return j.currentSlide === a;
    }, a.$watch('interval', e), a.$on('$destroy', f), a.play = function () {
      i || (i = !0, e());
    }, a.pause = function () {
      a.noPause || (i = !1, f());
    }, j.addSlide = function (b, c) {
      b.$element = c, k.push(b), 1 === k.length || b.active ? (j.select(k[k.length - 1]), 1 == k.length && a.play()) : b.active = !1;
    }, j.removeSlide = function (a) {
      var b = k.indexOf(a);
      k.splice(b, 1), k.length > 0 && a.active ? j.select(b >= k.length ? k[b - 1] : k[b]) : l > b && l--;
    };
  }
]).directive('carousel', [function () {
    return {
      restrict: 'EA',
      transclude: !0,
      replace: !0,
      controller: 'CarouselController',
      require: 'carousel',
      templateUrl: 'template/carousel/carousel.html',
      scope: {
        interval: '=',
        noTransition: '=',
        noPause: '='
      }
    };
  }]).directive('slide', function () {
  return {
    require: '^carousel',
    restrict: 'EA',
    transclude: !0,
    replace: !0,
    templateUrl: 'template/carousel/slide.html',
    scope: { active: '=?' },
    link: function (a, b, c, d) {
      d.addSlide(a, b), a.$on('$destroy', function () {
        d.removeSlide(a);
      }), a.$watch('active', function (b) {
        b && d.select(a);
      });
    }
  };
}), angular.module('ui.bootstrap.dateparser', []).service('dateParser', [
  '$locale',
  'orderByFilter',
  function (a, b) {
    function c(a) {
      var c = [], d = a.split('');
      return angular.forEach(e, function (b, e) {
        var f = a.indexOf(e);
        if (f > -1) {
          a = a.split(''), d[f] = '(' + b.regex + ')', a[f] = '$';
          for (var g = f + 1, h = f + e.length; h > g; g++)
            d[g] = '', a[g] = '$';
          a = a.join(''), c.push({
            index: f,
            apply: b.apply
          });
        }
      }), {
        regex: new RegExp('^' + d.join('') + '$'),
        map: b(c, 'index')
      };
    }
    function d(a, b, c) {
      return 1 === b && c > 28 ? 29 === c && (a % 4 === 0 && a % 100 !== 0 || a % 400 === 0) : 3 === b || 5 === b || 8 === b || 10 === b ? 31 > c : !0;
    }
    this.parsers = {};
    var e = {
        yyyy: {
          regex: '\\d{4}',
          apply: function (a) {
            this.year = +a;
          }
        },
        yy: {
          regex: '\\d{2}',
          apply: function (a) {
            this.year = +a + 2000;
          }
        },
        y: {
          regex: '\\d{1,4}',
          apply: function (a) {
            this.year = +a;
          }
        },
        MMMM: {
          regex: a.DATETIME_FORMATS.MONTH.join('|'),
          apply: function (b) {
            this.month = a.DATETIME_FORMATS.MONTH.indexOf(b);
          }
        },
        MMM: {
          regex: a.DATETIME_FORMATS.SHORTMONTH.join('|'),
          apply: function (b) {
            this.month = a.DATETIME_FORMATS.SHORTMONTH.indexOf(b);
          }
        },
        MM: {
          regex: '0[1-9]|1[0-2]',
          apply: function (a) {
            this.month = a - 1;
          }
        },
        M: {
          regex: '[1-9]|1[0-2]',
          apply: function (a) {
            this.month = a - 1;
          }
        },
        dd: {
          regex: '[0-2][0-9]{1}|3[0-1]{1}',
          apply: function (a) {
            this.date = +a;
          }
        },
        d: {
          regex: '[1-2]?[0-9]{1}|3[0-1]{1}',
          apply: function (a) {
            this.date = +a;
          }
        },
        EEEE: { regex: a.DATETIME_FORMATS.DAY.join('|') },
        EEE: { regex: a.DATETIME_FORMATS.SHORTDAY.join('|') }
      };
    this.parse = function (b, e) {
      if (!angular.isString(b) || !e)
        return b;
      e = a.DATETIME_FORMATS[e] || e, this.parsers[e] || (this.parsers[e] = c(e));
      var f = this.parsers[e], g = f.regex, h = f.map, i = b.match(g);
      if (i && i.length) {
        for (var j, k = {
              year: 1900,
              month: 0,
              date: 1,
              hours: 0
            }, l = 1, m = i.length; m > l; l++) {
          var n = h[l - 1];
          n.apply && n.apply.call(k, i[l]);
        }
        return d(k.year, k.month, k.date) && (j = new Date(k.year, k.month, k.date, k.hours)), j;
      }
    };
  }
]), angular.module('ui.bootstrap.position', []).factory('$position', [
  '$document',
  '$window',
  function (a, b) {
    function c(a, c) {
      return a.currentStyle ? a.currentStyle[c] : b.getComputedStyle ? b.getComputedStyle(a)[c] : a.style[c];
    }
    function d(a) {
      return 'static' === (c(a, 'position') || 'static');
    }
    var e = function (b) {
      for (var c = a[0], e = b.offsetParent || c; e && e !== c && d(e);)
        e = e.offsetParent;
      return e || c;
    };
    return {
      position: function (b) {
        var c = this.offset(b), d = {
            top: 0,
            left: 0
          }, f = e(b[0]);
        f != a[0] && (d = this.offset(angular.element(f)), d.top += f.clientTop - f.scrollTop, d.left += f.clientLeft - f.scrollLeft);
        var g = b[0].getBoundingClientRect();
        return {
          width: g.width || b.prop('offsetWidth'),
          height: g.height || b.prop('offsetHeight'),
          top: c.top - d.top,
          left: c.left - d.left
        };
      },
      offset: function (c) {
        var d = c[0].getBoundingClientRect();
        return {
          width: d.width || c.prop('offsetWidth'),
          height: d.height || c.prop('offsetHeight'),
          top: d.top + (b.pageYOffset || a[0].documentElement.scrollTop),
          left: d.left + (b.pageXOffset || a[0].documentElement.scrollLeft)
        };
      },
      positionElements: function (a, b, c, d) {
        var e, f, g, h, i = c.split('-'), j = i[0], k = i[1] || 'center';
        e = d ? this.offset(a) : this.position(a), f = b.prop('offsetWidth'), g = b.prop('offsetHeight');
        var l = {
            center: function () {
              return e.left + e.width / 2 - f / 2;
            },
            left: function () {
              return e.left;
            },
            right: function () {
              return e.left + e.width;
            }
          }, m = {
            center: function () {
              return e.top + e.height / 2 - g / 2;
            },
            top: function () {
              return e.top;
            },
            bottom: function () {
              return e.top + e.height;
            }
          };
        switch (j) {
        case 'right':
          h = {
            top: m[k](),
            left: l[j]()
          };
          break;
        case 'left':
          h = {
            top: m[k](),
            left: e.left - f
          };
          break;
        case 'bottom':
          h = {
            top: m[j](),
            left: l[k]()
          };
          break;
        default:
          h = {
            top: e.top - g,
            left: l[k]()
          };
        }
        return h;
      }
    };
  }
]), angular.module('ui.bootstrap.datepicker', [
  'ui.bootstrap.dateparser',
  'ui.bootstrap.position'
]).constant('datepickerConfig', {
  formatDay: 'dd',
  formatMonth: 'MMMM',
  formatYear: 'yyyy',
  formatDayHeader: 'EEE',
  formatDayTitle: 'MMMM yyyy',
  formatMonthTitle: 'yyyy',
  datepickerMode: 'day',
  minMode: 'day',
  maxMode: 'year',
  showWeeks: !0,
  startingDay: 0,
  yearRange: 20,
  minDate: null,
  maxDate: null
}).controller('DatepickerController', [
  '$scope',
  '$attrs',
  '$parse',
  '$interpolate',
  '$timeout',
  '$log',
  'dateFilter',
  'datepickerConfig',
  function (a, b, c, d, e, f, g, h) {
    var i = this, j = { $setViewValue: angular.noop };
    this.modes = [
      'day',
      'month',
      'year'
    ], angular.forEach([
      'formatDay',
      'formatMonth',
      'formatYear',
      'formatDayHeader',
      'formatDayTitle',
      'formatMonthTitle',
      'minMode',
      'maxMode',
      'showWeeks',
      'startingDay',
      'yearRange'
    ], function (c, e) {
      i[c] = angular.isDefined(b[c]) ? 8 > e ? d(b[c])(a.$parent) : a.$parent.$eval(b[c]) : h[c];
    }), angular.forEach([
      'minDate',
      'maxDate'
    ], function (d) {
      b[d] ? a.$parent.$watch(c(b[d]), function (a) {
        i[d] = a ? new Date(a) : null, i.refreshView();
      }) : i[d] = h[d] ? new Date(h[d]) : null;
    }), a.datepickerMode = a.datepickerMode || h.datepickerMode, a.uniqueId = 'datepicker-' + a.$id + '-' + Math.floor(10000 * Math.random()), this.activeDate = angular.isDefined(b.initDate) ? a.$parent.$eval(b.initDate) : new Date(), a.isActive = function (b) {
      return 0 === i.compare(b.date, i.activeDate) ? (a.activeDateId = b.uid, !0) : !1;
    }, this.init = function (a) {
      j = a, j.$render = function () {
        i.render();
      };
    }, this.render = function () {
      if (j.$modelValue) {
        var a = new Date(j.$modelValue), b = !isNaN(a);
        b ? this.activeDate = a : f.error('Datepicker directive: "ng-model" value must be a Date object, a number of milliseconds since 01.01.1970 or a string representing an RFC2822 or ISO 8601 date.'), j.$setValidity('date', b);
      }
      this.refreshView();
    }, this.refreshView = function () {
      if (this.element) {
        this._refreshView();
        var a = j.$modelValue ? new Date(j.$modelValue) : null;
        j.$setValidity('date-disabled', !a || this.element && !this.isDisabled(a));
      }
    }, this.createDateObject = function (a, b) {
      var c = j.$modelValue ? new Date(j.$modelValue) : null;
      return {
        date: a,
        label: g(a, b),
        selected: c && 0 === this.compare(a, c),
        disabled: this.isDisabled(a),
        current: 0 === this.compare(a, new Date())
      };
    }, this.isDisabled = function (c) {
      return this.minDate && this.compare(c, this.minDate) < 0 || this.maxDate && this.compare(c, this.maxDate) > 0 || b.dateDisabled && a.dateDisabled({
        date: c,
        mode: a.datepickerMode
      });
    }, this.split = function (a, b) {
      for (var c = []; a.length > 0;)
        c.push(a.splice(0, b));
      return c;
    }, a.select = function (b) {
      if (a.datepickerMode === i.minMode) {
        var c = j.$modelValue ? new Date(j.$modelValue) : new Date(0, 0, 0, 0, 0, 0, 0);
        c.setFullYear(b.getFullYear(), b.getMonth(), b.getDate()), j.$setViewValue(c), j.$render();
      } else
        i.activeDate = b, a.datepickerMode = i.modes[i.modes.indexOf(a.datepickerMode) - 1];
    }, a.move = function (a) {
      var b = i.activeDate.getFullYear() + a * (i.step.years || 0), c = i.activeDate.getMonth() + a * (i.step.months || 0);
      i.activeDate.setFullYear(b, c, 1), i.refreshView();
    }, a.toggleMode = function (b) {
      b = b || 1, a.datepickerMode === i.maxMode && 1 === b || a.datepickerMode === i.minMode && -1 === b || (a.datepickerMode = i.modes[i.modes.indexOf(a.datepickerMode) + b]);
    }, a.keys = {
      13: 'enter',
      32: 'space',
      33: 'pageup',
      34: 'pagedown',
      35: 'end',
      36: 'home',
      37: 'left',
      38: 'up',
      39: 'right',
      40: 'down'
    };
    var k = function () {
      e(function () {
        i.element[0].focus();
      }, 0, !1);
    };
    a.$on('datepicker.focus', k), a.keydown = function (b) {
      var c = a.keys[b.which];
      if (c && !b.shiftKey && !b.altKey)
        if (b.preventDefault(), b.stopPropagation(), 'enter' === c || 'space' === c) {
          if (i.isDisabled(i.activeDate))
            return;
          a.select(i.activeDate), k();
        } else
          !b.ctrlKey || 'up' !== c && 'down' !== c ? (i.handleKeyDown(c, b), i.refreshView()) : (a.toggleMode('up' === c ? 1 : -1), k());
    };
  }
]).directive('datepicker', function () {
  return {
    restrict: 'EA',
    replace: !0,
    templateUrl: 'template/datepicker/datepicker.html',
    scope: {
      datepickerMode: '=?',
      dateDisabled: '&'
    },
    require: [
      'datepicker',
      '?^ngModel'
    ],
    controller: 'DatepickerController',
    link: function (a, b, c, d) {
      var e = d[0], f = d[1];
      f && e.init(f);
    }
  };
}).directive('daypicker', [
  'dateFilter',
  function (a) {
    return {
      restrict: 'EA',
      replace: !0,
      templateUrl: 'template/datepicker/day.html',
      require: '^datepicker',
      link: function (b, c, d, e) {
        function f(a, b) {
          return 1 !== b || a % 4 !== 0 || a % 100 === 0 && a % 400 !== 0 ? i[b] : 29;
        }
        function g(a, b) {
          var c = new Array(b), d = new Date(a), e = 0;
          for (d.setHours(12); b > e;)
            c[e++] = new Date(d), d.setDate(d.getDate() + 1);
          return c;
        }
        function h(a) {
          var b = new Date(a);
          b.setDate(b.getDate() + 4 - (b.getDay() || 7));
          var c = b.getTime();
          return b.setMonth(0), b.setDate(1), Math.floor(Math.round((c - b) / 86400000) / 7) + 1;
        }
        b.showWeeks = e.showWeeks, e.step = { months: 1 }, e.element = c;
        var i = [
            31,
            28,
            31,
            30,
            31,
            30,
            31,
            31,
            30,
            31,
            30,
            31
          ];
        e._refreshView = function () {
          var c = e.activeDate.getFullYear(), d = e.activeDate.getMonth(), f = new Date(c, d, 1), i = e.startingDay - f.getDay(), j = i > 0 ? 7 - i : -i, k = new Date(f);
          j > 0 && k.setDate(-j + 1);
          for (var l = g(k, 42), m = 0; 42 > m; m++)
            l[m] = angular.extend(e.createDateObject(l[m], e.formatDay), {
              secondary: l[m].getMonth() !== d,
              uid: b.uniqueId + '-' + m
            });
          b.labels = new Array(7);
          for (var n = 0; 7 > n; n++)
            b.labels[n] = {
              abbr: a(l[n].date, e.formatDayHeader),
              full: a(l[n].date, 'EEEE')
            };
          if (b.title = a(e.activeDate, e.formatDayTitle), b.rows = e.split(l, 7), b.showWeeks) {
            b.weekNumbers = [];
            for (var o = h(b.rows[0][0].date), p = b.rows.length; b.weekNumbers.push(o++) < p;);
          }
        }, e.compare = function (a, b) {
          return new Date(a.getFullYear(), a.getMonth(), a.getDate()) - new Date(b.getFullYear(), b.getMonth(), b.getDate());
        }, e.handleKeyDown = function (a) {
          var b = e.activeDate.getDate();
          if ('left' === a)
            b -= 1;
          else if ('up' === a)
            b -= 7;
          else if ('right' === a)
            b += 1;
          else if ('down' === a)
            b += 7;
          else if ('pageup' === a || 'pagedown' === a) {
            var c = e.activeDate.getMonth() + ('pageup' === a ? -1 : 1);
            e.activeDate.setMonth(c, 1), b = Math.min(f(e.activeDate.getFullYear(), e.activeDate.getMonth()), b);
          } else
            'home' === a ? b = 1 : 'end' === a && (b = f(e.activeDate.getFullYear(), e.activeDate.getMonth()));
          e.activeDate.setDate(b);
        }, e.refreshView();
      }
    };
  }
]).directive('monthpicker', [
  'dateFilter',
  function (a) {
    return {
      restrict: 'EA',
      replace: !0,
      templateUrl: 'template/datepicker/month.html',
      require: '^datepicker',
      link: function (b, c, d, e) {
        e.step = { years: 1 }, e.element = c, e._refreshView = function () {
          for (var c = new Array(12), d = e.activeDate.getFullYear(), f = 0; 12 > f; f++)
            c[f] = angular.extend(e.createDateObject(new Date(d, f, 1), e.formatMonth), { uid: b.uniqueId + '-' + f });
          b.title = a(e.activeDate, e.formatMonthTitle), b.rows = e.split(c, 3);
        }, e.compare = function (a, b) {
          return new Date(a.getFullYear(), a.getMonth()) - new Date(b.getFullYear(), b.getMonth());
        }, e.handleKeyDown = function (a) {
          var b = e.activeDate.getMonth();
          if ('left' === a)
            b -= 1;
          else if ('up' === a)
            b -= 3;
          else if ('right' === a)
            b += 1;
          else if ('down' === a)
            b += 3;
          else if ('pageup' === a || 'pagedown' === a) {
            var c = e.activeDate.getFullYear() + ('pageup' === a ? -1 : 1);
            e.activeDate.setFullYear(c);
          } else
            'home' === a ? b = 0 : 'end' === a && (b = 11);
          e.activeDate.setMonth(b);
        }, e.refreshView();
      }
    };
  }
]).directive('yearpicker', [
  'dateFilter',
  function () {
    return {
      restrict: 'EA',
      replace: !0,
      templateUrl: 'template/datepicker/year.html',
      require: '^datepicker',
      link: function (a, b, c, d) {
        function e(a) {
          return parseInt((a - 1) / f, 10) * f + 1;
        }
        var f = d.yearRange;
        d.step = { years: f }, d.element = b, d._refreshView = function () {
          for (var b = new Array(f), c = 0, g = e(d.activeDate.getFullYear()); f > c; c++)
            b[c] = angular.extend(d.createDateObject(new Date(g + c, 0, 1), d.formatYear), { uid: a.uniqueId + '-' + c });
          a.title = [
            b[0].label,
            b[f - 1].label
          ].join(' - '), a.rows = d.split(b, 5);
        }, d.compare = function (a, b) {
          return a.getFullYear() - b.getFullYear();
        }, d.handleKeyDown = function (a) {
          var b = d.activeDate.getFullYear();
          'left' === a ? b -= 1 : 'up' === a ? b -= 5 : 'right' === a ? b += 1 : 'down' === a ? b += 5 : 'pageup' === a || 'pagedown' === a ? b += ('pageup' === a ? -1 : 1) * d.step.years : 'home' === a ? b = e(d.activeDate.getFullYear()) : 'end' === a && (b = e(d.activeDate.getFullYear()) + f - 1), d.activeDate.setFullYear(b);
        }, d.refreshView();
      }
    };
  }
]).constant('datepickerPopupConfig', {
  datepickerPopup: 'yyyy-MM-dd',
  currentText: 'Today',
  clearText: 'Clear',
  closeText: 'Done',
  closeOnDateSelection: !0,
  appendToBody: !1,
  showButtonBar: !0
}).directive('datepickerPopup', [
  '$compile',
  '$parse',
  '$document',
  '$position',
  'dateFilter',
  'dateParser',
  'datepickerPopupConfig',
  function (a, b, c, d, e, f, g) {
    return {
      restrict: 'EA',
      require: 'ngModel',
      scope: {
        isOpen: '=?',
        currentText: '@',
        clearText: '@',
        closeText: '@',
        dateDisabled: '&'
      },
      link: function (h, i, j, k) {
        function l(a) {
          return a.replace(/([A-Z])/g, function (a) {
            return '-' + a.toLowerCase();
          });
        }
        function m(a) {
          if (a) {
            if (angular.isDate(a) && !isNaN(a))
              return k.$setValidity('date', !0), a;
            if (angular.isString(a)) {
              var b = f.parse(a, n) || new Date(a);
              return isNaN(b) ? void k.$setValidity('date', !1) : (k.$setValidity('date', !0), b);
            }
            return void k.$setValidity('date', !1);
          }
          return k.$setValidity('date', !0), null;
        }
        var n, o = angular.isDefined(j.closeOnDateSelection) ? h.$parent.$eval(j.closeOnDateSelection) : g.closeOnDateSelection, p = angular.isDefined(j.datepickerAppendToBody) ? h.$parent.$eval(j.datepickerAppendToBody) : g.appendToBody;
        h.showButtonBar = angular.isDefined(j.showButtonBar) ? h.$parent.$eval(j.showButtonBar) : g.showButtonBar, h.getText = function (a) {
          return h[a + 'Text'] || g[a + 'Text'];
        }, j.$observe('datepickerPopup', function (a) {
          n = a || g.datepickerPopup, k.$render();
        });
        var q = angular.element('<div datepicker-popup-wrap><div datepicker></div></div>');
        q.attr({
          'ng-model': 'date',
          'ng-change': 'dateSelection()'
        });
        var r = angular.element(q.children()[0]);
        j.datepickerOptions && angular.forEach(h.$parent.$eval(j.datepickerOptions), function (a, b) {
          r.attr(l(b), a);
        }), h.watchData = {}, angular.forEach([
          'minDate',
          'maxDate',
          'datepickerMode'
        ], function (a) {
          if (j[a]) {
            var c = b(j[a]);
            if (h.$parent.$watch(c, function (b) {
                h.watchData[a] = b;
              }), r.attr(l(a), 'watchData.' + a), 'datepickerMode' === a) {
              var d = c.assign;
              h.$watch('watchData.' + a, function (a, b) {
                a !== b && d(h.$parent, a);
              });
            }
          }
        }), j.dateDisabled && r.attr('date-disabled', 'dateDisabled({ date: date, mode: mode })'), k.$parsers.unshift(m), h.dateSelection = function (a) {
          angular.isDefined(a) && (h.date = a), k.$setViewValue(h.date), k.$render(), o && (h.isOpen = !1, i[0].focus());
        }, i.bind('input change keyup', function () {
          h.$apply(function () {
            h.date = k.$modelValue;
          });
        }), k.$render = function () {
          var a = k.$viewValue ? e(k.$viewValue, n) : '';
          i.val(a), h.date = m(k.$modelValue);
        };
        var s = function (a) {
            h.isOpen && a.target !== i[0] && h.$apply(function () {
              h.isOpen = !1;
            });
          }, t = function (a) {
            h.keydown(a);
          };
        i.bind('keydown', t), h.keydown = function (a) {
          27 === a.which ? (a.preventDefault(), a.stopPropagation(), h.close()) : 40 !== a.which || h.isOpen || (h.isOpen = !0);
        }, h.$watch('isOpen', function (a) {
          a ? (h.$broadcast('datepicker.focus'), h.position = p ? d.offset(i) : d.position(i), h.position.top = h.position.top + i.prop('offsetHeight'), c.bind('click', s)) : c.unbind('click', s);
        }), h.select = function (a) {
          if ('today' === a) {
            var b = new Date();
            angular.isDate(k.$modelValue) ? (a = new Date(k.$modelValue), a.setFullYear(b.getFullYear(), b.getMonth(), b.getDate())) : a = new Date(b.setHours(0, 0, 0, 0));
          }
          h.dateSelection(a);
        }, h.close = function () {
          h.isOpen = !1, i[0].focus();
        };
        var u = a(q)(h);
        q.remove(), p ? c.find('body').append(u) : i.after(u), h.$on('$destroy', function () {
          u.remove(), i.unbind('keydown', t), c.unbind('click', s);
        });
      }
    };
  }
]).directive('datepickerPopupWrap', function () {
  return {
    restrict: 'EA',
    replace: !0,
    transclude: !0,
    templateUrl: 'template/datepicker/popup.html',
    link: function (a, b) {
      b.bind('click', function (a) {
        a.preventDefault(), a.stopPropagation();
      });
    }
  };
}), angular.module('ui.bootstrap.dropdown', []).constant('dropdownConfig', { openClass: 'open' }).service('dropdownService', [
  '$document',
  function (a) {
    var b = null;
    this.open = function (e) {
      b || (a.bind('click', c), a.bind('keydown', d)), b && b !== e && (b.isOpen = !1), b = e;
    }, this.close = function (e) {
      b === e && (b = null, a.unbind('click', c), a.unbind('keydown', d));
    };
    var c = function (a) {
        if (b) {
          var c = b.getToggleElement();
          a && c && c[0].contains(a.target) || b.$apply(function () {
            b.isOpen = !1;
          });
        }
      }, d = function (a) {
        27 === a.which && (b.focusToggleElement(), c());
      };
  }
]).controller('DropdownController', [
  '$scope',
  '$attrs',
  '$parse',
  'dropdownConfig',
  'dropdownService',
  '$animate',
  function (a, b, c, d, e, f) {
    var g, h = this, i = a.$new(), j = d.openClass, k = angular.noop, l = b.onToggle ? c(b.onToggle) : angular.noop;
    this.init = function (d) {
      h.$element = d, b.isOpen && (g = c(b.isOpen), k = g.assign, a.$watch(g, function (a) {
        i.isOpen = !!a;
      }));
    }, this.toggle = function (a) {
      return i.isOpen = arguments.length ? !!a : !i.isOpen;
    }, this.isOpen = function () {
      return i.isOpen;
    }, i.getToggleElement = function () {
      return h.toggleElement;
    }, i.focusToggleElement = function () {
      h.toggleElement && h.toggleElement[0].focus();
    }, i.$watch('isOpen', function (b, c) {
      f[b ? 'addClass' : 'removeClass'](h.$element, j), b ? (i.focusToggleElement(), e.open(i)) : e.close(i), k(a, b), angular.isDefined(b) && b !== c && l(a, { open: !!b });
    }), a.$on('$locationChangeSuccess', function () {
      i.isOpen = !1;
    }), a.$on('$destroy', function () {
      i.$destroy();
    });
  }
]).directive('dropdown', function () {
  return {
    controller: 'DropdownController',
    link: function (a, b, c, d) {
      d.init(b);
    }
  };
}).directive('dropdownToggle', function () {
  return {
    require: '?^dropdown',
    link: function (a, b, c, d) {
      if (d) {
        d.toggleElement = b;
        var e = function (e) {
          e.preventDefault(), b.hasClass('disabled') || c.disabled || a.$apply(function () {
            d.toggle();
          });
        };
        b.bind('click', e), b.attr({
          'aria-haspopup': !0,
          'aria-expanded': !1
        }), a.$watch(d.isOpen, function (a) {
          b.attr('aria-expanded', !!a);
        }), a.$on('$destroy', function () {
          b.unbind('click', e);
        });
      }
    }
  };
}), angular.module('ui.bootstrap.modal', ['ui.bootstrap.transition']).factory('$$stackedMap', function () {
  return {
    createNew: function () {
      var a = [];
      return {
        add: function (b, c) {
          a.push({
            key: b,
            value: c
          });
        },
        get: function (b) {
          for (var c = 0; c < a.length; c++)
            if (b == a[c].key)
              return a[c];
        },
        keys: function () {
          for (var b = [], c = 0; c < a.length; c++)
            b.push(a[c].key);
          return b;
        },
        top: function () {
          return a[a.length - 1];
        },
        remove: function (b) {
          for (var c = -1, d = 0; d < a.length; d++)
            if (b == a[d].key) {
              c = d;
              break;
            }
          return a.splice(c, 1)[0];
        },
        removeTop: function () {
          return a.splice(a.length - 1, 1)[0];
        },
        length: function () {
          return a.length;
        }
      };
    }
  };
}).directive('modalBackdrop', [
  '$timeout',
  function (a) {
    return {
      restrict: 'EA',
      replace: !0,
      templateUrl: 'template/modal/backdrop.html',
      link: function (b, c, d) {
        b.backdropClass = d.backdropClass || '', b.animate = !1, a(function () {
          b.animate = !0;
        });
      }
    };
  }
]).directive('modalWindow', [
  '$modalStack',
  '$timeout',
  function (a, b) {
    return {
      restrict: 'EA',
      scope: {
        index: '@',
        animate: '='
      },
      replace: !0,
      transclude: !0,
      templateUrl: function (a, b) {
        return b.templateUrl || 'template/modal/window.html';
      },
      link: function (c, d, e) {
        d.addClass(e.windowClass || ''), c.size = e.size, b(function () {
          c.animate = !0, d[0].querySelectorAll('[autofocus]').length || d[0].focus();
        }), c.close = function (b) {
          var c = a.getTop();
          c && c.value.backdrop && 'static' != c.value.backdrop && b.target === b.currentTarget && (b.preventDefault(), b.stopPropagation(), a.dismiss(c.key, 'backdrop click'));
        };
      }
    };
  }
]).directive('modalTransclude', function () {
  return {
    link: function (a, b, c, d, e) {
      e(a.$parent, function (a) {
        b.empty(), b.append(a);
      });
    }
  };
}).factory('$modalStack', [
  '$transition',
  '$timeout',
  '$document',
  '$compile',
  '$rootScope',
  '$$stackedMap',
  function (a, b, c, d, e, f) {
    function g() {
      for (var a = -1, b = n.keys(), c = 0; c < b.length; c++)
        n.get(b[c]).value.backdrop && (a = c);
      return a;
    }
    function h(a) {
      var b = c.find('body').eq(0), d = n.get(a).value;
      n.remove(a), j(d.modalDomEl, d.modalScope, 300, function () {
        d.modalScope.$destroy(), b.toggleClass(m, n.length() > 0), i();
      });
    }
    function i() {
      if (k && -1 == g()) {
        var a = l;
        j(k, l, 150, function () {
          a.$destroy(), a = null;
        }), k = void 0, l = void 0;
      }
    }
    function j(c, d, e, f) {
      function g() {
        g.done || (g.done = !0, c.remove(), f && f());
      }
      d.animate = !1;
      var h = a.transitionEndEventName;
      if (h) {
        var i = b(g, e);
        c.bind(h, function () {
          b.cancel(i), g(), d.$apply();
        });
      } else
        b(g);
    }
    var k, l, m = 'modal-open', n = f.createNew(), o = {};
    return e.$watch(g, function (a) {
      l && (l.index = a);
    }), c.bind('keydown', function (a) {
      var b;
      27 === a.which && (b = n.top(), b && b.value.keyboard && (a.preventDefault(), e.$apply(function () {
        o.dismiss(b.key, 'escape key press');
      })));
    }), o.open = function (a, b) {
      n.add(a, {
        deferred: b.deferred,
        modalScope: b.scope,
        backdrop: b.backdrop,
        keyboard: b.keyboard
      });
      var f = c.find('body').eq(0), h = g();
      if (h >= 0 && !k) {
        l = e.$new(!0), l.index = h;
        var i = angular.element('<div modal-backdrop></div>');
        i.attr('backdrop-class', b.backdropClass), k = d(i)(l), f.append(k);
      }
      var j = angular.element('<div modal-window></div>');
      j.attr({
        'template-url': b.windowTemplateUrl,
        'window-class': b.windowClass,
        size: b.size,
        index: n.length() - 1,
        animate: 'animate'
      }).html(b.content);
      var o = d(j)(b.scope);
      n.top().value.modalDomEl = o, f.append(o), f.addClass(m);
    }, o.close = function (a, b) {
      var c = n.get(a);
      c && (c.value.deferred.resolve(b), h(a));
    }, o.dismiss = function (a, b) {
      var c = n.get(a);
      c && (c.value.deferred.reject(b), h(a));
    }, o.dismissAll = function (a) {
      for (var b = this.getTop(); b;)
        this.dismiss(b.key, a), b = this.getTop();
    }, o.getTop = function () {
      return n.top();
    }, o;
  }
]).provider('$modal', function () {
  var a = {
      options: {
        backdrop: !0,
        keyboard: !0
      },
      $get: [
        '$injector',
        '$rootScope',
        '$q',
        '$http',
        '$templateCache',
        '$controller',
        '$modalStack',
        function (b, c, d, e, f, g, h) {
          function i(a) {
            return a.template ? d.when(a.template) : e.get(angular.isFunction(a.templateUrl) ? a.templateUrl() : a.templateUrl, { cache: f }).then(function (a) {
              return a.data;
            });
          }
          function j(a) {
            var c = [];
            return angular.forEach(a, function (a) {
              (angular.isFunction(a) || angular.isArray(a)) && c.push(d.when(b.invoke(a)));
            }), c;
          }
          var k = {};
          return k.open = function (b) {
            var e = d.defer(), f = d.defer(), k = {
                result: e.promise,
                opened: f.promise,
                close: function (a) {
                  h.close(k, a);
                },
                dismiss: function (a) {
                  h.dismiss(k, a);
                }
              };
            if (b = angular.extend({}, a.options, b), b.resolve = b.resolve || {}, !b.template && !b.templateUrl)
              throw new Error('One of template or templateUrl options is required.');
            var l = d.all([i(b)].concat(j(b.resolve)));
            return l.then(function (a) {
              var d = (b.scope || c).$new();
              d.$close = k.close, d.$dismiss = k.dismiss;
              var f, i = {}, j = 1;
              b.controller && (i.$scope = d, i.$modalInstance = k, angular.forEach(b.resolve, function (b, c) {
                i[c] = a[j++];
              }), f = g(b.controller, i), b.controllerAs && (d[b.controllerAs] = f)), h.open(k, {
                scope: d,
                deferred: e,
                content: a[0],
                backdrop: b.backdrop,
                keyboard: b.keyboard,
                backdropClass: b.backdropClass,
                windowClass: b.windowClass,
                windowTemplateUrl: b.windowTemplateUrl,
                size: b.size
              });
            }, function (a) {
              e.reject(a);
            }), l.then(function () {
              f.resolve(!0);
            }, function () {
              f.reject(!1);
            }), k;
          }, k;
        }
      ]
    };
  return a;
}), angular.module('ui.bootstrap.pagination', []).controller('PaginationController', [
  '$scope',
  '$attrs',
  '$parse',
  function (a, b, c) {
    var d = this, e = { $setViewValue: angular.noop }, f = b.numPages ? c(b.numPages).assign : angular.noop;
    this.init = function (f, g) {
      e = f, this.config = g, e.$render = function () {
        d.render();
      }, b.itemsPerPage ? a.$parent.$watch(c(b.itemsPerPage), function (b) {
        d.itemsPerPage = parseInt(b, 10), a.totalPages = d.calculateTotalPages();
      }) : this.itemsPerPage = g.itemsPerPage;
    }, this.calculateTotalPages = function () {
      var b = this.itemsPerPage < 1 ? 1 : Math.ceil(a.totalItems / this.itemsPerPage);
      return Math.max(b || 0, 1);
    }, this.render = function () {
      a.page = parseInt(e.$viewValue, 10) || 1;
    }, a.selectPage = function (b) {
      a.page !== b && b > 0 && b <= a.totalPages && (e.$setViewValue(b), e.$render());
    }, a.getText = function (b) {
      return a[b + 'Text'] || d.config[b + 'Text'];
    }, a.noPrevious = function () {
      return 1 === a.page;
    }, a.noNext = function () {
      return a.page === a.totalPages;
    }, a.$watch('totalItems', function () {
      a.totalPages = d.calculateTotalPages();
    }), a.$watch('totalPages', function (b) {
      f(a.$parent, b), a.page > b ? a.selectPage(b) : e.$render();
    });
  }
]).constant('paginationConfig', {
  itemsPerPage: 10,
  boundaryLinks: !1,
  directionLinks: !0,
  firstText: 'First',
  previousText: 'Previous',
  nextText: 'Next',
  lastText: 'Last',
  rotate: !0
}).directive('pagination', [
  '$parse',
  'paginationConfig',
  function (a, b) {
    return {
      restrict: 'EA',
      scope: {
        totalItems: '=',
        firstText: '@',
        previousText: '@',
        nextText: '@',
        lastText: '@'
      },
      require: [
        'pagination',
        '?ngModel'
      ],
      controller: 'PaginationController',
      templateUrl: 'template/pagination/pagination.html',
      replace: !0,
      link: function (c, d, e, f) {
        function g(a, b, c) {
          return {
            number: a,
            text: b,
            active: c
          };
        }
        function h(a, b) {
          var c = [], d = 1, e = b, f = angular.isDefined(k) && b > k;
          f && (l ? (d = Math.max(a - Math.floor(k / 2), 1), e = d + k - 1, e > b && (e = b, d = e - k + 1)) : (d = (Math.ceil(a / k) - 1) * k + 1, e = Math.min(d + k - 1, b)));
          for (var h = d; e >= h; h++) {
            var i = g(h, h, h === a);
            c.push(i);
          }
          if (f && !l) {
            if (d > 1) {
              var j = g(d - 1, '...', !1);
              c.unshift(j);
            }
            if (b > e) {
              var m = g(e + 1, '...', !1);
              c.push(m);
            }
          }
          return c;
        }
        var i = f[0], j = f[1];
        if (j) {
          var k = angular.isDefined(e.maxSize) ? c.$parent.$eval(e.maxSize) : b.maxSize, l = angular.isDefined(e.rotate) ? c.$parent.$eval(e.rotate) : b.rotate;
          c.boundaryLinks = angular.isDefined(e.boundaryLinks) ? c.$parent.$eval(e.boundaryLinks) : b.boundaryLinks, c.directionLinks = angular.isDefined(e.directionLinks) ? c.$parent.$eval(e.directionLinks) : b.directionLinks, i.init(j, b), e.maxSize && c.$parent.$watch(a(e.maxSize), function (a) {
            k = parseInt(a, 10), i.render();
          });
          var m = i.render;
          i.render = function () {
            m(), c.page > 0 && c.page <= c.totalPages && (c.pages = h(c.page, c.totalPages));
          };
        }
      }
    };
  }
]).constant('pagerConfig', {
  itemsPerPage: 10,
  previousText: '\xab Previous',
  nextText: 'Next \xbb',
  align: !0
}).directive('pager', [
  'pagerConfig',
  function (a) {
    return {
      restrict: 'EA',
      scope: {
        totalItems: '=',
        previousText: '@',
        nextText: '@'
      },
      require: [
        'pager',
        '?ngModel'
      ],
      controller: 'PaginationController',
      templateUrl: 'template/pagination/pager.html',
      replace: !0,
      link: function (b, c, d, e) {
        var f = e[0], g = e[1];
        g && (b.align = angular.isDefined(d.align) ? b.$parent.$eval(d.align) : a.align, f.init(g, a));
      }
    };
  }
]), angular.module('ui.bootstrap.tooltip', [
  'ui.bootstrap.position',
  'ui.bootstrap.bindHtml'
]).provider('$tooltip', function () {
  function a(a) {
    var b = /[A-Z]/g, c = '-';
    return a.replace(b, function (a, b) {
      return (b ? c : '') + a.toLowerCase();
    });
  }
  var b = {
      placement: 'top',
      animation: !0,
      popupDelay: 0
    }, c = {
      mouseenter: 'mouseleave',
      click: 'click',
      focus: 'blur'
    }, d = {};
  this.options = function (a) {
    angular.extend(d, a);
  }, this.setTriggers = function (a) {
    angular.extend(c, a);
  }, this.$get = [
    '$window',
    '$compile',
    '$timeout',
    '$document',
    '$position',
    '$interpolate',
    function (e, f, g, h, i, j) {
      return function (e, k, l) {
        function m(a) {
          var b = a || n.trigger || l, d = c[b] || b;
          return {
            show: b,
            hide: d
          };
        }
        var n = angular.extend({}, b, d), o = a(e), p = j.startSymbol(), q = j.endSymbol(), r = '<div ' + o + '-popup title="' + p + 'title' + q + '" content="' + p + 'content' + q + '" placement="' + p + 'placement' + q + '" animation="animation" is-open="isOpen"></div>';
        return {
          restrict: 'EA',
          compile: function () {
            var a = f(r);
            return function (b, c, d) {
              function f() {
                D.isOpen ? l() : j();
              }
              function j() {
                (!C || b.$eval(d[k + 'Enable'])) && (s(), D.popupDelay ? z || (z = g(o, D.popupDelay, !1), z.then(function (a) {
                  a();
                })) : o()());
              }
              function l() {
                b.$apply(function () {
                  p();
                });
              }
              function o() {
                return z = null, y && (g.cancel(y), y = null), D.content ? (q(), w.css({
                  top: 0,
                  left: 0,
                  display: 'block'
                }), A ? h.find('body').append(w) : c.after(w), E(), D.isOpen = !0, D.$digest(), E) : angular.noop;
              }
              function p() {
                D.isOpen = !1, g.cancel(z), z = null, D.animation ? y || (y = g(r, 500)) : r();
              }
              function q() {
                w && r(), x = D.$new(), w = a(x, angular.noop);
              }
              function r() {
                y = null, w && (w.remove(), w = null), x && (x.$destroy(), x = null);
              }
              function s() {
                t(), u();
              }
              function t() {
                var a = d[k + 'Placement'];
                D.placement = angular.isDefined(a) ? a : n.placement;
              }
              function u() {
                var a = d[k + 'PopupDelay'], b = parseInt(a, 10);
                D.popupDelay = isNaN(b) ? n.popupDelay : b;
              }
              function v() {
                var a = d[k + 'Trigger'];
                F(), B = m(a), B.show === B.hide ? c.bind(B.show, f) : (c.bind(B.show, j), c.bind(B.hide, l));
              }
              var w, x, y, z, A = angular.isDefined(n.appendToBody) ? n.appendToBody : !1, B = m(void 0), C = angular.isDefined(d[k + 'Enable']), D = b.$new(!0), E = function () {
                  var a = i.positionElements(c, w, D.placement, A);
                  a.top += 'px', a.left += 'px', w.css(a);
                };
              D.isOpen = !1, d.$observe(e, function (a) {
                D.content = a, !a && D.isOpen && p();
              }), d.$observe(k + 'Title', function (a) {
                D.title = a;
              });
              var F = function () {
                c.unbind(B.show, j), c.unbind(B.hide, l);
              };
              v();
              var G = b.$eval(d[k + 'Animation']);
              D.animation = angular.isDefined(G) ? !!G : n.animation;
              var H = b.$eval(d[k + 'AppendToBody']);
              A = angular.isDefined(H) ? H : A, A && b.$on('$locationChangeSuccess', function () {
                D.isOpen && p();
              }), b.$on('$destroy', function () {
                g.cancel(y), g.cancel(z), F(), r(), D = null;
              });
            };
          }
        };
      };
    }
  ];
}).directive('tooltipPopup', function () {
  return {
    restrict: 'EA',
    replace: !0,
    scope: {
      content: '@',
      placement: '@',
      animation: '&',
      isOpen: '&'
    },
    templateUrl: 'template/tooltip/tooltip-popup.html'
  };
}).directive('tooltip', [
  '$tooltip',
  function (a) {
    return a('tooltip', 'tooltip', 'mouseenter');
  }
]).directive('tooltipHtmlUnsafePopup', function () {
  return {
    restrict: 'EA',
    replace: !0,
    scope: {
      content: '@',
      placement: '@',
      animation: '&',
      isOpen: '&'
    },
    templateUrl: 'template/tooltip/tooltip-html-unsafe-popup.html'
  };
}).directive('tooltipHtmlUnsafe', [
  '$tooltip',
  function (a) {
    return a('tooltipHtmlUnsafe', 'tooltip', 'mouseenter');
  }
]), angular.module('ui.bootstrap.popover', ['ui.bootstrap.tooltip']).directive('popoverPopup', function () {
  return {
    restrict: 'EA',
    replace: !0,
    scope: {
      title: '@',
      content: '@',
      placement: '@',
      animation: '&',
      isOpen: '&'
    },
    templateUrl: 'template/popover/popover.html'
  };
}).directive('popover', [
  '$tooltip',
  function (a) {
    return a('popover', 'popover', 'click');
  }
]), angular.module('ui.bootstrap.progressbar', []).constant('progressConfig', {
  animate: !0,
  max: 100
}).controller('ProgressController', [
  '$scope',
  '$attrs',
  'progressConfig',
  function (a, b, c) {
    var d = this, e = angular.isDefined(b.animate) ? a.$parent.$eval(b.animate) : c.animate;
    this.bars = [], a.max = angular.isDefined(b.max) ? a.$parent.$eval(b.max) : c.max, this.addBar = function (b, c) {
      e || c.css({ transition: 'none' }), this.bars.push(b), b.$watch('value', function (c) {
        b.percent = +(100 * c / a.max).toFixed(2);
      }), b.$on('$destroy', function () {
        c = null, d.removeBar(b);
      });
    }, this.removeBar = function (a) {
      this.bars.splice(this.bars.indexOf(a), 1);
    };
  }
]).directive('progress', function () {
  return {
    restrict: 'EA',
    replace: !0,
    transclude: !0,
    controller: 'ProgressController',
    require: 'progress',
    scope: {},
    templateUrl: 'template/progressbar/progress.html'
  };
}).directive('bar', function () {
  return {
    restrict: 'EA',
    replace: !0,
    transclude: !0,
    require: '^progress',
    scope: {
      value: '=',
      type: '@'
    },
    templateUrl: 'template/progressbar/bar.html',
    link: function (a, b, c, d) {
      d.addBar(a, b);
    }
  };
}).directive('progressbar', function () {
  return {
    restrict: 'EA',
    replace: !0,
    transclude: !0,
    controller: 'ProgressController',
    scope: {
      value: '=',
      type: '@'
    },
    templateUrl: 'template/progressbar/progressbar.html',
    link: function (a, b, c, d) {
      d.addBar(a, angular.element(b.children()[0]));
    }
  };
}), angular.module('ui.bootstrap.rating', []).constant('ratingConfig', {
  max: 5,
  stateOn: null,
  stateOff: null
}).controller('RatingController', [
  '$scope',
  '$attrs',
  'ratingConfig',
  function (a, b, c) {
    var d = { $setViewValue: angular.noop };
    this.init = function (e) {
      d = e, d.$render = this.render, this.stateOn = angular.isDefined(b.stateOn) ? a.$parent.$eval(b.stateOn) : c.stateOn, this.stateOff = angular.isDefined(b.stateOff) ? a.$parent.$eval(b.stateOff) : c.stateOff;
      var f = angular.isDefined(b.ratingStates) ? a.$parent.$eval(b.ratingStates) : new Array(angular.isDefined(b.max) ? a.$parent.$eval(b.max) : c.max);
      a.range = this.buildTemplateObjects(f);
    }, this.buildTemplateObjects = function (a) {
      for (var b = 0, c = a.length; c > b; b++)
        a[b] = angular.extend({ index: b }, {
          stateOn: this.stateOn,
          stateOff: this.stateOff
        }, a[b]);
      return a;
    }, a.rate = function (b) {
      !a.readonly && b >= 0 && b <= a.range.length && (d.$setViewValue(b), d.$render());
    }, a.enter = function (b) {
      a.readonly || (a.value = b), a.onHover({ value: b });
    }, a.reset = function () {
      a.value = d.$viewValue, a.onLeave();
    }, a.onKeydown = function (b) {
      /(37|38|39|40)/.test(b.which) && (b.preventDefault(), b.stopPropagation(), a.rate(a.value + (38 === b.which || 39 === b.which ? 1 : -1)));
    }, this.render = function () {
      a.value = d.$viewValue;
    };
  }
]).directive('rating', function () {
  return {
    restrict: 'EA',
    require: [
      'rating',
      'ngModel'
    ],
    scope: {
      readonly: '=?',
      onHover: '&',
      onLeave: '&'
    },
    controller: 'RatingController',
    templateUrl: 'template/rating/rating.html',
    replace: !0,
    link: function (a, b, c, d) {
      var e = d[0], f = d[1];
      f && e.init(f);
    }
  };
}), angular.module('ui.bootstrap.tabs', []).controller('TabsetController', [
  '$scope',
  function (a) {
    var b = this, c = b.tabs = a.tabs = [];
    b.select = function (a) {
      angular.forEach(c, function (b) {
        b.active && b !== a && (b.active = !1, b.onDeselect());
      }), a.active = !0, a.onSelect();
    }, b.addTab = function (a) {
      c.push(a), 1 === c.length ? a.active = !0 : a.active && b.select(a);
    }, b.removeTab = function (a) {
      var e = c.indexOf(a);
      if (a.active && c.length > 1 && !d) {
        var f = e == c.length - 1 ? e - 1 : e + 1;
        b.select(c[f]);
      }
      c.splice(e, 1);
    };
    var d;
    a.$on('$destroy', function () {
      d = !0;
    });
  }
]).directive('tabset', function () {
  return {
    restrict: 'EA',
    transclude: !0,
    replace: !0,
    scope: { type: '@' },
    controller: 'TabsetController',
    templateUrl: 'template/tabs/tabset.html',
    link: function (a, b, c) {
      a.vertical = angular.isDefined(c.vertical) ? a.$parent.$eval(c.vertical) : !1, a.justified = angular.isDefined(c.justified) ? a.$parent.$eval(c.justified) : !1;
    }
  };
}).directive('tab', [
  '$parse',
  function (a) {
    return {
      require: '^tabset',
      restrict: 'EA',
      replace: !0,
      templateUrl: 'template/tabs/tab.html',
      transclude: !0,
      scope: {
        active: '=?',
        heading: '@',
        onSelect: '&select',
        onDeselect: '&deselect'
      },
      controller: function () {
      },
      compile: function (b, c, d) {
        return function (b, c, e, f) {
          b.$watch('active', function (a) {
            a && f.select(b);
          }), b.disabled = !1, e.disabled && b.$parent.$watch(a(e.disabled), function (a) {
            b.disabled = !!a;
          }), b.select = function () {
            b.disabled || (b.active = !0);
          }, f.addTab(b), b.$on('$destroy', function () {
            f.removeTab(b);
          }), b.$transcludeFn = d;
        };
      }
    };
  }
]).directive('tabHeadingTransclude', [function () {
    return {
      restrict: 'A',
      require: '^tab',
      link: function (a, b) {
        a.$watch('headingElement', function (a) {
          a && (b.html(''), b.append(a));
        });
      }
    };
  }]).directive('tabContentTransclude', function () {
  function a(a) {
    return a.tagName && (a.hasAttribute('tab-heading') || a.hasAttribute('data-tab-heading') || 'tab-heading' === a.tagName.toLowerCase() || 'data-tab-heading' === a.tagName.toLowerCase());
  }
  return {
    restrict: 'A',
    require: '^tabset',
    link: function (b, c, d) {
      var e = b.$eval(d.tabContentTransclude);
      e.$transcludeFn(e.$parent, function (b) {
        angular.forEach(b, function (b) {
          a(b) ? e.headingElement = b : c.append(b);
        });
      });
    }
  };
}), angular.module('ui.bootstrap.timepicker', []).constant('timepickerConfig', {
  hourStep: 1,
  minuteStep: 1,
  showMeridian: !0,
  meridians: null,
  readonlyInput: !1,
  mousewheel: !0
}).controller('TimepickerController', [
  '$scope',
  '$attrs',
  '$parse',
  '$log',
  '$locale',
  'timepickerConfig',
  function (a, b, c, d, e, f) {
    function g() {
      var b = parseInt(a.hours, 10), c = a.showMeridian ? b > 0 && 13 > b : b >= 0 && 24 > b;
      return c ? (a.showMeridian && (12 === b && (b = 0), a.meridian === p[1] && (b += 12)), b) : void 0;
    }
    function h() {
      var b = parseInt(a.minutes, 10);
      return b >= 0 && 60 > b ? b : void 0;
    }
    function i(a) {
      return angular.isDefined(a) && a.toString().length < 2 ? '0' + a : a;
    }
    function j(a) {
      k(), o.$setViewValue(new Date(n)), l(a);
    }
    function k() {
      o.$setValidity('time', !0), a.invalidHours = !1, a.invalidMinutes = !1;
    }
    function l(b) {
      var c = n.getHours(), d = n.getMinutes();
      a.showMeridian && (c = 0 === c || 12 === c ? 12 : c % 12), a.hours = 'h' === b ? c : i(c), a.minutes = 'm' === b ? d : i(d), a.meridian = n.getHours() < 12 ? p[0] : p[1];
    }
    function m(a) {
      var b = new Date(n.getTime() + 60000 * a);
      n.setHours(b.getHours(), b.getMinutes()), j();
    }
    var n = new Date(), o = { $setViewValue: angular.noop }, p = angular.isDefined(b.meridians) ? a.$parent.$eval(b.meridians) : f.meridians || e.DATETIME_FORMATS.AMPMS;
    this.init = function (c, d) {
      o = c, o.$render = this.render;
      var e = d.eq(0), g = d.eq(1), h = angular.isDefined(b.mousewheel) ? a.$parent.$eval(b.mousewheel) : f.mousewheel;
      h && this.setupMousewheelEvents(e, g), a.readonlyInput = angular.isDefined(b.readonlyInput) ? a.$parent.$eval(b.readonlyInput) : f.readonlyInput, this.setupInputEvents(e, g);
    };
    var q = f.hourStep;
    b.hourStep && a.$parent.$watch(c(b.hourStep), function (a) {
      q = parseInt(a, 10);
    });
    var r = f.minuteStep;
    b.minuteStep && a.$parent.$watch(c(b.minuteStep), function (a) {
      r = parseInt(a, 10);
    }), a.showMeridian = f.showMeridian, b.showMeridian && a.$parent.$watch(c(b.showMeridian), function (b) {
      if (a.showMeridian = !!b, o.$error.time) {
        var c = g(), d = h();
        angular.isDefined(c) && angular.isDefined(d) && (n.setHours(c), j());
      } else
        l();
    }), this.setupMousewheelEvents = function (b, c) {
      var d = function (a) {
        a.originalEvent && (a = a.originalEvent);
        var b = a.wheelDelta ? a.wheelDelta : -a.deltaY;
        return a.detail || b > 0;
      };
      b.bind('mousewheel wheel', function (b) {
        a.$apply(d(b) ? a.incrementHours() : a.decrementHours()), b.preventDefault();
      }), c.bind('mousewheel wheel', function (b) {
        a.$apply(d(b) ? a.incrementMinutes() : a.decrementMinutes()), b.preventDefault();
      });
    }, this.setupInputEvents = function (b, c) {
      if (a.readonlyInput)
        return a.updateHours = angular.noop, void (a.updateMinutes = angular.noop);
      var d = function (b, c) {
        o.$setViewValue(null), o.$setValidity('time', !1), angular.isDefined(b) && (a.invalidHours = b), angular.isDefined(c) && (a.invalidMinutes = c);
      };
      a.updateHours = function () {
        var a = g();
        angular.isDefined(a) ? (n.setHours(a), j('h')) : d(!0);
      }, b.bind('blur', function () {
        !a.invalidHours && a.hours < 10 && a.$apply(function () {
          a.hours = i(a.hours);
        });
      }), a.updateMinutes = function () {
        var a = h();
        angular.isDefined(a) ? (n.setMinutes(a), j('m')) : d(void 0, !0);
      }, c.bind('blur', function () {
        !a.invalidMinutes && a.minutes < 10 && a.$apply(function () {
          a.minutes = i(a.minutes);
        });
      });
    }, this.render = function () {
      var a = o.$modelValue ? new Date(o.$modelValue) : null;
      isNaN(a) ? (o.$setValidity('time', !1), d.error('Timepicker directive: "ng-model" value must be a Date object, a number of milliseconds since 01.01.1970 or a string representing an RFC2822 or ISO 8601 date.')) : (a && (n = a), k(), l());
    }, a.incrementHours = function () {
      m(60 * q);
    }, a.decrementHours = function () {
      m(60 * -q);
    }, a.incrementMinutes = function () {
      m(r);
    }, a.decrementMinutes = function () {
      m(-r);
    }, a.toggleMeridian = function () {
      m(720 * (n.getHours() < 12 ? 1 : -1));
    };
  }
]).directive('timepicker', function () {
  return {
    restrict: 'EA',
    require: [
      'timepicker',
      '?^ngModel'
    ],
    controller: 'TimepickerController',
    replace: !0,
    scope: {},
    templateUrl: 'template/timepicker/timepicker.html',
    link: function (a, b, c, d) {
      var e = d[0], f = d[1];
      f && e.init(f, b.find('input'));
    }
  };
}), angular.module('ui.bootstrap.typeahead', [
  'ui.bootstrap.position',
  'ui.bootstrap.bindHtml'
]).factory('typeaheadParser', [
  '$parse',
  function (a) {
    var b = /^\s*([\s\S]+?)(?:\s+as\s+([\s\S]+?))?\s+for\s+(?:([\$\w][\$\w\d]*))\s+in\s+([\s\S]+?)$/;
    return {
      parse: function (c) {
        var d = c.match(b);
        if (!d)
          throw new Error('Expected typeahead specification in form of "_modelValue_ (as _label_)? for _item_ in _collection_" but got "' + c + '".');
        return {
          itemName: d[3],
          source: a(d[4]),
          viewMapper: a(d[2] || d[1]),
          modelMapper: a(d[1])
        };
      }
    };
  }
]).directive('typeahead', [
  '$compile',
  '$parse',
  '$q',
  '$timeout',
  '$document',
  '$position',
  'typeaheadParser',
  function (a, b, c, d, e, f, g) {
    var h = [
        9,
        13,
        27,
        38,
        40
      ];
    return {
      require: 'ngModel',
      link: function (i, j, k, l) {
        var m, n = i.$eval(k.typeaheadMinLength) || 1, o = i.$eval(k.typeaheadWaitMs) || 0, p = i.$eval(k.typeaheadEditable) !== !1, q = b(k.typeaheadLoading).assign || angular.noop, r = b(k.typeaheadOnSelect), s = k.typeaheadInputFormatter ? b(k.typeaheadInputFormatter) : void 0, t = k.typeaheadAppendToBody ? i.$eval(k.typeaheadAppendToBody) : !1, u = i.$eval(k.typeaheadFocusFirst) !== !1, v = b(k.ngModel).assign, w = g.parse(k.typeahead), x = i.$new();
        i.$on('$destroy', function () {
          x.$destroy();
        });
        var y = 'typeahead-' + x.$id + '-' + Math.floor(10000 * Math.random());
        j.attr({
          'aria-autocomplete': 'list',
          'aria-expanded': !1,
          'aria-owns': y
        });
        var z = angular.element('<div typeahead-popup></div>');
        z.attr({
          id: y,
          matches: 'matches',
          active: 'activeIdx',
          select: 'select(activeIdx)',
          query: 'query',
          position: 'position'
        }), angular.isDefined(k.typeaheadTemplateUrl) && z.attr('template-url', k.typeaheadTemplateUrl);
        var A = function () {
            x.matches = [], x.activeIdx = -1, j.attr('aria-expanded', !1);
          }, B = function (a) {
            return y + '-option-' + a;
          };
        x.$watch('activeIdx', function (a) {
          0 > a ? j.removeAttr('aria-activedescendant') : j.attr('aria-activedescendant', B(a));
        });
        var C = function (a) {
          var b = { $viewValue: a };
          q(i, !0), c.when(w.source(i, b)).then(function (c) {
            var d = a === l.$viewValue;
            if (d && m)
              if (c.length > 0) {
                x.activeIdx = u ? 0 : -1, x.matches.length = 0;
                for (var e = 0; e < c.length; e++)
                  b[w.itemName] = c[e], x.matches.push({
                    id: B(e),
                    label: w.viewMapper(x, b),
                    model: c[e]
                  });
                x.query = a, x.position = t ? f.offset(j) : f.position(j), x.position.top = x.position.top + j.prop('offsetHeight'), j.attr('aria-expanded', !0);
              } else
                A();
            d && q(i, !1);
          }, function () {
            A(), q(i, !1);
          });
        };
        A(), x.query = void 0;
        var D, E = function (a) {
            D = d(function () {
              C(a);
            }, o);
          }, F = function () {
            D && d.cancel(D);
          };
        l.$parsers.unshift(function (a) {
          return m = !0, a && a.length >= n ? o > 0 ? (F(), E(a)) : C(a) : (q(i, !1), F(), A()), p ? a : a ? void l.$setValidity('editable', !1) : (l.$setValidity('editable', !0), a);
        }), l.$formatters.push(function (a) {
          var b, c, d = {};
          return s ? (d.$model = a, s(i, d)) : (d[w.itemName] = a, b = w.viewMapper(i, d), d[w.itemName] = void 0, c = w.viewMapper(i, d), b !== c ? b : a);
        }), x.select = function (a) {
          var b, c, e = {};
          e[w.itemName] = c = x.matches[a].model, b = w.modelMapper(i, e), v(i, b), l.$setValidity('editable', !0), r(i, {
            $item: c,
            $model: b,
            $label: w.viewMapper(i, e)
          }), A(), d(function () {
            j[0].focus();
          }, 0, !1);
        }, j.bind('keydown', function (a) {
          0 !== x.matches.length && -1 !== h.indexOf(a.which) && (-1 != x.activeIdx || 13 !== a.which && 9 !== a.which) && (a.preventDefault(), 40 === a.which ? (x.activeIdx = (x.activeIdx + 1) % x.matches.length, x.$digest()) : 38 === a.which ? (x.activeIdx = (x.activeIdx > 0 ? x.activeIdx : x.matches.length) - 1, x.$digest()) : 13 === a.which || 9 === a.which ? x.$apply(function () {
            x.select(x.activeIdx);
          }) : 27 === a.which && (a.stopPropagation(), A(), x.$digest()));
        }), j.bind('blur', function () {
          m = !1;
        });
        var G = function (a) {
          j[0] !== a.target && (A(), x.$digest());
        };
        e.bind('click', G), i.$on('$destroy', function () {
          e.unbind('click', G), t && H.remove();
        });
        var H = a(z)(x);
        t ? e.find('body').append(H) : j.after(H);
      }
    };
  }
]).directive('typeaheadPopup', function () {
  return {
    restrict: 'EA',
    scope: {
      matches: '=',
      query: '=',
      active: '=',
      position: '=',
      select: '&'
    },
    replace: !0,
    templateUrl: 'template/typeahead/typeahead-popup.html',
    link: function (a, b, c) {
      a.templateUrl = c.templateUrl, a.isOpen = function () {
        return a.matches.length > 0;
      }, a.isActive = function (b) {
        return a.active == b;
      }, a.selectActive = function (b) {
        a.active = b;
      }, a.selectMatch = function (b) {
        a.select({ activeIdx: b });
      };
    }
  };
}).directive('typeaheadMatch', [
  '$http',
  '$templateCache',
  '$compile',
  '$parse',
  function (a, b, c, d) {
    return {
      restrict: 'EA',
      scope: {
        index: '=',
        match: '=',
        query: '='
      },
      link: function (e, f, g) {
        var h = d(g.templateUrl)(e.$parent) || 'template/typeahead/typeahead-match.html';
        a.get(h, { cache: b }).success(function (a) {
          f.replaceWith(c(a.trim())(e));
        });
      }
    };
  }
]).filter('typeaheadHighlight', function () {
  function a(a) {
    return a.replace(/([.?*+^$[\]\\(){}|-])/g, '\\$1');
  }
  return function (b, c) {
    return c ? ('' + b).replace(new RegExp(a(c), 'gi'), '<strong>$&</strong>') : b;
  };
}), angular.module('template/accordion/accordion-group.html', []).run([
  '$templateCache',
  function (a) {
    a.put('template/accordion/accordion-group.html', '<div class="panel panel-default">\n  <div class="panel-heading">\n    <h4 class="panel-title">\n      <a href class="accordion-toggle" ng-click="toggleOpen()" accordion-transclude="heading"><span ng-class="{\'text-muted\': isDisabled}">{{heading}}</span></a>\n    </h4>\n  </div>\n  <div class="panel-collapse" collapse="!isOpen">\n\t  <div class="panel-body" ng-transclude></div>\n  </div>\n</div>\n');
  }
]), angular.module('template/accordion/accordion.html', []).run([
  '$templateCache',
  function (a) {
    a.put('template/accordion/accordion.html', '<div class="panel-group" ng-transclude></div>');
  }
]), angular.module('template/alert/alert.html', []).run([
  '$templateCache',
  function (a) {
    a.put('template/alert/alert.html', '<div class="alert" ng-class="[\'alert-\' + (type || \'warning\'), closeable ? \'alert-dismissable\' : null]" role="alert">\n    <button ng-show="closeable" type="button" class="close" ng-click="close()">\n        <span aria-hidden="true">&times;</span>\n        <span class="sr-only">Close</span>\n    </button>\n    <div ng-transclude></div>\n</div>\n');
  }
]), angular.module('template/carousel/carousel.html', []).run([
  '$templateCache',
  function (a) {
    a.put('template/carousel/carousel.html', '<div ng-mouseenter="pause()" ng-mouseleave="play()" class="carousel" ng-swipe-right="prev()" ng-swipe-left="next()">\n    <ol class="carousel-indicators" ng-show="slides.length > 1">\n        <li ng-repeat="slide in slides track by $index" ng-class="{active: isActive(slide)}" ng-click="select(slide)"></li>\n    </ol>\n    <div class="carousel-inner" ng-transclude></div>\n    <a class="left carousel-control" ng-click="prev()" ng-show="slides.length > 1"><span class="glyphicon glyphicon-chevron-left"></span></a>\n    <a class="right carousel-control" ng-click="next()" ng-show="slides.length > 1"><span class="glyphicon glyphicon-chevron-right"></span></a>\n</div>\n');
  }
]), angular.module('template/carousel/slide.html', []).run([
  '$templateCache',
  function (a) {
    a.put('template/carousel/slide.html', '<div ng-class="{\n    \'active\': leaving || (active && !entering),\n    \'prev\': (next || active) && direction==\'prev\',\n    \'next\': (next || active) && direction==\'next\',\n    \'right\': direction==\'prev\',\n    \'left\': direction==\'next\'\n  }" class="item text-center" ng-transclude></div>\n');
  }
]), angular.module('template/datepicker/datepicker.html', []).run([
  '$templateCache',
  function (a) {
    a.put('template/datepicker/datepicker.html', '<div ng-switch="datepickerMode" role="application" ng-keydown="keydown($event)">\n  <daypicker ng-switch-when="day" tabindex="0"></daypicker>\n  <monthpicker ng-switch-when="month" tabindex="0"></monthpicker>\n  <yearpicker ng-switch-when="year" tabindex="0"></yearpicker>\n</div>');
  }
]), angular.module('template/datepicker/day.html', []).run([
  '$templateCache',
  function (a) {
    a.put('template/datepicker/day.html', '<table role="grid" aria-labelledby="{{uniqueId}}-title" aria-activedescendant="{{activeDateId}}">\n  <thead>\n    <tr>\n      <th><button type="button" class="btn btn-default btn-sm pull-left" ng-click="move(-1)" tabindex="-1"><i class="glyphicon glyphicon-chevron-left"></i></button></th>\n      <th colspan="{{5 + showWeeks}}"><button id="{{uniqueId}}-title" role="heading" aria-live="assertive" aria-atomic="true" type="button" class="btn btn-default btn-sm" ng-click="toggleMode()" tabindex="-1" style="width:100%;"><strong>{{title}}</strong></button></th>\n      <th><button type="button" class="btn btn-default btn-sm pull-right" ng-click="move(1)" tabindex="-1"><i class="glyphicon glyphicon-chevron-right"></i></button></th>\n    </tr>\n    <tr>\n      <th ng-show="showWeeks" class="text-center"></th>\n      <th ng-repeat="label in labels track by $index" class="text-center"><small aria-label="{{label.full}}">{{label.abbr}}</small></th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr ng-repeat="row in rows track by $index">\n      <td ng-show="showWeeks" class="text-center h6"><em>{{ weekNumbers[$index] }}</em></td>\n      <td ng-repeat="dt in row track by dt.date" class="text-center" role="gridcell" id="{{dt.uid}}" aria-disabled="{{!!dt.disabled}}">\n        <button type="button" style="width:100%;" class="btn btn-default btn-sm" ng-class="{\'btn-info\': dt.selected, active: isActive(dt)}" ng-click="select(dt.date)" ng-disabled="dt.disabled" tabindex="-1"><span ng-class="{\'text-muted\': dt.secondary, \'text-info\': dt.current}">{{dt.label}}</span></button>\n      </td>\n    </tr>\n  </tbody>\n</table>\n');
  }
]), angular.module('template/datepicker/month.html', []).run([
  '$templateCache',
  function (a) {
    a.put('template/datepicker/month.html', '<table role="grid" aria-labelledby="{{uniqueId}}-title" aria-activedescendant="{{activeDateId}}">\n  <thead>\n    <tr>\n      <th><button type="button" class="btn btn-default btn-sm pull-left" ng-click="move(-1)" tabindex="-1"><i class="glyphicon glyphicon-chevron-left"></i></button></th>\n      <th><button id="{{uniqueId}}-title" role="heading" aria-live="assertive" aria-atomic="true" type="button" class="btn btn-default btn-sm" ng-click="toggleMode()" tabindex="-1" style="width:100%;"><strong>{{title}}</strong></button></th>\n      <th><button type="button" class="btn btn-default btn-sm pull-right" ng-click="move(1)" tabindex="-1"><i class="glyphicon glyphicon-chevron-right"></i></button></th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr ng-repeat="row in rows track by $index">\n      <td ng-repeat="dt in row track by dt.date" class="text-center" role="gridcell" id="{{dt.uid}}" aria-disabled="{{!!dt.disabled}}">\n        <button type="button" style="width:100%;" class="btn btn-default" ng-class="{\'btn-info\': dt.selected, active: isActive(dt)}" ng-click="select(dt.date)" ng-disabled="dt.disabled" tabindex="-1"><span ng-class="{\'text-info\': dt.current}">{{dt.label}}</span></button>\n      </td>\n    </tr>\n  </tbody>\n</table>\n');
  }
]), angular.module('template/datepicker/popup.html', []).run([
  '$templateCache',
  function (a) {
    a.put('template/datepicker/popup.html', '<ul class="dropdown-menu" ng-style="{display: (isOpen && \'block\') || \'none\', top: position.top+\'px\', left: position.left+\'px\'}" ng-keydown="keydown($event)">\n\t<li ng-transclude></li>\n\t<li ng-if="showButtonBar" style="padding:10px 9px 2px">\n\t\t<span class="btn-group pull-left">\n\t\t\t<button type="button" class="btn btn-sm btn-info" ng-click="select(\'today\')">{{ getText(\'current\') }}</button>\n\t\t\t<button type="button" class="btn btn-sm btn-danger" ng-click="select(null)">{{ getText(\'clear\') }}</button>\n\t\t</span>\n\t\t<button type="button" class="btn btn-sm btn-success pull-right" ng-click="close()">{{ getText(\'close\') }}</button>\n\t</li>\n</ul>\n');
  }
]), angular.module('template/datepicker/year.html', []).run([
  '$templateCache',
  function (a) {
    a.put('template/datepicker/year.html', '<table role="grid" aria-labelledby="{{uniqueId}}-title" aria-activedescendant="{{activeDateId}}">\n  <thead>\n    <tr>\n      <th><button type="button" class="btn btn-default btn-sm pull-left" ng-click="move(-1)" tabindex="-1"><i class="glyphicon glyphicon-chevron-left"></i></button></th>\n      <th colspan="3"><button id="{{uniqueId}}-title" role="heading" aria-live="assertive" aria-atomic="true" type="button" class="btn btn-default btn-sm" ng-click="toggleMode()" tabindex="-1" style="width:100%;"><strong>{{title}}</strong></button></th>\n      <th><button type="button" class="btn btn-default btn-sm pull-right" ng-click="move(1)" tabindex="-1"><i class="glyphicon glyphicon-chevron-right"></i></button></th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr ng-repeat="row in rows track by $index">\n      <td ng-repeat="dt in row track by dt.date" class="text-center" role="gridcell" id="{{dt.uid}}" aria-disabled="{{!!dt.disabled}}">\n        <button type="button" style="width:100%;" class="btn btn-default" ng-class="{\'btn-info\': dt.selected, active: isActive(dt)}" ng-click="select(dt.date)" ng-disabled="dt.disabled" tabindex="-1"><span ng-class="{\'text-info\': dt.current}">{{dt.label}}</span></button>\n      </td>\n    </tr>\n  </tbody>\n</table>\n');
  }
]), angular.module('template/modal/backdrop.html', []).run([
  '$templateCache',
  function (a) {
    a.put('template/modal/backdrop.html', '<div class="modal-backdrop fade {{ backdropClass }}"\n     ng-class="{in: animate}"\n     ng-style="{\'z-index\': 1040 + (index && 1 || 0) + index*10}"\n></div>\n');
  }
]), angular.module('template/modal/window.html', []).run([
  '$templateCache',
  function (a) {
    a.put('template/modal/window.html', '<div tabindex="-1" role="dialog" class="modal fade" ng-class="{in: animate}" ng-style="{\'z-index\': 1050 + index*10, display: \'block\'}" ng-click="close($event)">\n    <div class="modal-dialog" ng-class="{\'modal-sm\': size == \'sm\', \'modal-lg\': size == \'lg\'}"><div class="modal-content" modal-transclude></div></div>\n</div>');
  }
]), angular.module('template/pagination/pager.html', []).run([
  '$templateCache',
  function (a) {
    a.put('template/pagination/pager.html', '<ul class="pager">\n  <li ng-class="{disabled: noPrevious(), previous: align}"><a href ng-click="selectPage(page - 1)">{{getText(\'previous\')}}</a></li>\n  <li ng-class="{disabled: noNext(), next: align}"><a href ng-click="selectPage(page + 1)">{{getText(\'next\')}}</a></li>\n</ul>');
  }
]), angular.module('template/pagination/pagination.html', []).run([
  '$templateCache',
  function (a) {
    a.put('template/pagination/pagination.html', '<ul class="pagination">\n  <li ng-if="boundaryLinks" ng-class="{disabled: noPrevious()}"><a href ng-click="selectPage(1)">{{getText(\'first\')}}</a></li>\n  <li ng-if="directionLinks" ng-class="{disabled: noPrevious()}"><a href ng-click="selectPage(page - 1)">{{getText(\'previous\')}}</a></li>\n  <li ng-repeat="page in pages track by $index" ng-class="{active: page.active}"><a href ng-click="selectPage(page.number)">{{page.text}}</a></li>\n  <li ng-if="directionLinks" ng-class="{disabled: noNext()}"><a href ng-click="selectPage(page + 1)">{{getText(\'next\')}}</a></li>\n  <li ng-if="boundaryLinks" ng-class="{disabled: noNext()}"><a href ng-click="selectPage(totalPages)">{{getText(\'last\')}}</a></li>\n</ul>');
  }
]), angular.module('template/tooltip/tooltip-html-unsafe-popup.html', []).run([
  '$templateCache',
  function (a) {
    a.put('template/tooltip/tooltip-html-unsafe-popup.html', '<div class="tooltip {{placement}}" ng-class="{ in: isOpen(), fade: animation() }">\n  <div class="tooltip-arrow"></div>\n  <div class="tooltip-inner" bind-html-unsafe="content"></div>\n</div>\n');
  }
]), angular.module('template/tooltip/tooltip-popup.html', []).run([
  '$templateCache',
  function (a) {
    a.put('template/tooltip/tooltip-popup.html', '<div class="tooltip {{placement}}" ng-class="{ in: isOpen(), fade: animation() }">\n  <div class="tooltip-arrow"></div>\n  <div class="tooltip-inner" ng-bind="content"></div>\n</div>\n');
  }
]), angular.module('template/popover/popover.html', []).run([
  '$templateCache',
  function (a) {
    a.put('template/popover/popover.html', '<div class="popover {{placement}}" ng-class="{ in: isOpen(), fade: animation() }">\n  <div class="arrow"></div>\n\n  <div class="popover-inner">\n      <h3 class="popover-title" ng-bind="title" ng-show="title"></h3>\n      <div class="popover-content" ng-bind="content"></div>\n  </div>\n</div>\n');
  }
]), angular.module('template/progressbar/bar.html', []).run([
  '$templateCache',
  function (a) {
    a.put('template/progressbar/bar.html', '<div class="progress-bar" ng-class="type && \'progress-bar-\' + type" role="progressbar" aria-valuenow="{{value}}" aria-valuemin="0" aria-valuemax="{{max}}" ng-style="{width: percent + \'%\'}" aria-valuetext="{{percent | number:0}}%" ng-transclude></div>');
  }
]), angular.module('template/progressbar/progress.html', []).run([
  '$templateCache',
  function (a) {
    a.put('template/progressbar/progress.html', '<div class="progress" ng-transclude></div>');
  }
]), angular.module('template/progressbar/progressbar.html', []).run([
  '$templateCache',
  function (a) {
    a.put('template/progressbar/progressbar.html', '<div class="progress">\n  <div class="progress-bar" ng-class="type && \'progress-bar-\' + type" role="progressbar" aria-valuenow="{{value}}" aria-valuemin="0" aria-valuemax="{{max}}" ng-style="{width: percent + \'%\'}" aria-valuetext="{{percent | number:0}}%" ng-transclude></div>\n</div>');
  }
]), angular.module('template/rating/rating.html', []).run([
  '$templateCache',
  function (a) {
    a.put('template/rating/rating.html', '<span ng-mouseleave="reset()" ng-keydown="onKeydown($event)" tabindex="0" role="slider" aria-valuemin="0" aria-valuemax="{{range.length}}" aria-valuenow="{{value}}">\n    <i ng-repeat="r in range track by $index" ng-mouseenter="enter($index + 1)" ng-click="rate($index + 1)" class="glyphicon" ng-class="$index < value && (r.stateOn || \'glyphicon-star\') || (r.stateOff || \'glyphicon-star-empty\')">\n        <span class="sr-only">({{ $index < value ? \'*\' : \' \' }})</span>\n    </i>\n</span>');
  }
]), angular.module('template/tabs/tab.html', []).run([
  '$templateCache',
  function (a) {
    a.put('template/tabs/tab.html', '<li ng-class="{active: active, disabled: disabled}">\n  <a href ng-click="select()" tab-heading-transclude>{{heading}}</a>\n</li>\n');
  }
]), angular.module('template/tabs/tabset.html', []).run([
  '$templateCache',
  function (a) {
    a.put('template/tabs/tabset.html', '<div>\n  <ul class="nav nav-{{type || \'tabs\'}}" ng-class="{\'nav-stacked\': vertical, \'nav-justified\': justified}" ng-transclude></ul>\n  <div class="tab-content">\n    <div class="tab-pane" \n         ng-repeat="tab in tabs" \n         ng-class="{active: tab.active}"\n         tab-content-transclude="tab">\n    </div>\n  </div>\n</div>\n');
  }
]), angular.module('template/timepicker/timepicker.html', []).run([
  '$templateCache',
  function (a) {
    a.put('template/timepicker/timepicker.html', '<table>\n\t<tbody>\n\t\t<tr class="text-center">\n\t\t\t<td><a ng-click="incrementHours()" class="btn btn-link"><span class="glyphicon glyphicon-chevron-up"></span></a></td>\n\t\t\t<td>&nbsp;</td>\n\t\t\t<td><a ng-click="incrementMinutes()" class="btn btn-link"><span class="glyphicon glyphicon-chevron-up"></span></a></td>\n\t\t\t<td ng-show="showMeridian"></td>\n\t\t</tr>\n\t\t<tr>\n\t\t\t<td style="width:50px;" class="form-group" ng-class="{\'has-error\': invalidHours}">\n\t\t\t\t<input type="text" ng-model="hours" ng-change="updateHours()" class="form-control text-center" ng-mousewheel="incrementHours()" ng-readonly="readonlyInput" maxlength="2">\n\t\t\t</td>\n\t\t\t<td>:</td>\n\t\t\t<td style="width:50px;" class="form-group" ng-class="{\'has-error\': invalidMinutes}">\n\t\t\t\t<input type="text" ng-model="minutes" ng-change="updateMinutes()" class="form-control text-center" ng-readonly="readonlyInput" maxlength="2">\n\t\t\t</td>\n\t\t\t<td ng-show="showMeridian"><button type="button" class="btn btn-default text-center" ng-click="toggleMeridian()">{{meridian}}</button></td>\n\t\t</tr>\n\t\t<tr class="text-center">\n\t\t\t<td><a ng-click="decrementHours()" class="btn btn-link"><span class="glyphicon glyphicon-chevron-down"></span></a></td>\n\t\t\t<td>&nbsp;</td>\n\t\t\t<td><a ng-click="decrementMinutes()" class="btn btn-link"><span class="glyphicon glyphicon-chevron-down"></span></a></td>\n\t\t\t<td ng-show="showMeridian"></td>\n\t\t</tr>\n\t</tbody>\n</table>\n');
  }
]), angular.module('template/typeahead/typeahead-match.html', []).run([
  '$templateCache',
  function (a) {
    a.put('template/typeahead/typeahead-match.html', '<a tabindex="-1" bind-html-unsafe="match.label | typeaheadHighlight:query"></a>');
  }
]), angular.module('template/typeahead/typeahead-popup.html', []).run([
  '$templateCache',
  function (a) {
    a.put('template/typeahead/typeahead-popup.html', '<ul class="dropdown-menu" ng-show="isOpen()" ng-style="{top: position.top+\'px\', left: position.left+\'px\'}" style="display: block;" role="listbox" aria-hidden="{{!isOpen()}}">\n    <li ng-repeat="match in matches track by $index" ng-class="{active: isActive($index) }" ng-mouseenter="selectActive($index)" ng-click="selectMatch($index)" role="option" id="{{match.id}}">\n        <div typeahead-match index="$index" match="match" query="query" template-url="templateUrl"></div>\n    </li>\n</ul>\n');
  }
]);
/*!
 * angular-loading-bar v0.6.0
 * https://chieffancypants.github.io/angular-loading-bar
 * Copyright (c) 2014 Wes Cruver
 * License: MIT
 */
!function () {
  'use strict';
  angular.module('angular-loading-bar', ['cfp.loadingBarInterceptor']), angular.module('chieffancypants.loadingBar', ['cfp.loadingBarInterceptor']), angular.module('cfp.loadingBarInterceptor', ['cfp.loadingBar']).config([
    '$httpProvider',
    function (a) {
      var b = [
          '$q',
          '$cacheFactory',
          '$timeout',
          '$rootScope',
          'cfpLoadingBar',
          function (b, c, d, e, f) {
            function g() {
              d.cancel(i), f.complete(), k = 0, j = 0;
            }
            function h(b) {
              var d, e = c.get('$http'), f = a.defaults;
              !b.cache && !f.cache || b.cache === !1 || 'GET' !== b.method && 'JSONP' !== b.method || (d = angular.isObject(b.cache) ? b.cache : angular.isObject(f.cache) ? f.cache : e);
              var g = void 0 !== d ? void 0 !== d.get(b.url) : !1;
              return void 0 !== b.cached && g !== b.cached ? b.cached : (b.cached = g, g);
            }
            var i, j = 0, k = 0, l = f.latencyThreshold;
            return {
              request: function (a) {
                return a.ignoreLoadingBar || h(a) || (e.$broadcast('cfpLoadingBar:loading', { url: a.url }), 0 === j && (i = d(function () {
                  f.start();
                }, l)), j++, f.set(k / j)), a;
              },
              response: function (a) {
                return a.config.ignoreLoadingBar || h(a.config) || (k++, e.$broadcast('cfpLoadingBar:loaded', { url: a.config.url }), k >= j ? g() : f.set(k / j)), a;
              },
              responseError: function (a) {
                return a.config.ignoreLoadingBar || h(a.config) || (k++, e.$broadcast('cfpLoadingBar:loaded', { url: a.config.url }), k >= j ? g() : f.set(k / j)), b.reject(a);
              }
            };
          }
        ];
      a.interceptors.push(b);
    }
  ]), angular.module('cfp.loadingBar', []).provider('cfpLoadingBar', function () {
    this.includeSpinner = !0, this.includeBar = !0, this.latencyThreshold = 100, this.startSize = 0.02, this.parentSelector = 'body', this.spinnerTemplate = '<div id="loading-bar-spinner"><div class="spinner-icon"></div></div>', this.loadingBarTemplate = '<div id="loading-bar"><div class="bar"><div class="peg"></div></div></div>', this.$get = [
      '$injector',
      '$document',
      '$timeout',
      '$rootScope',
      function (a, b, c, d) {
        function e() {
          k || (k = a.get('$animate'));
          var e = b.find(n).eq(0);
          c.cancel(m), r || (d.$broadcast('cfpLoadingBar:started'), r = !0, u && k.enter(o, e), t && k.enter(q, e), f(v));
        }
        function f(a) {
          if (r) {
            var b = 100 * a + '%';
            p.css('width', b), s = a, c.cancel(l), l = c(function () {
              g();
            }, 250);
          }
        }
        function g() {
          if (!(h() >= 1)) {
            var a = 0, b = h();
            a = b >= 0 && 0.25 > b ? (3 * Math.random() + 3) / 100 : b >= 0.25 && 0.65 > b ? 3 * Math.random() / 100 : b >= 0.65 && 0.9 > b ? 2 * Math.random() / 100 : b >= 0.9 && 0.99 > b ? 0.005 : 0;
            var c = h() + a;
            f(c);
          }
        }
        function h() {
          return s;
        }
        function i() {
          s = 0, r = !1;
        }
        function j() {
          k || (k = a.get('$animate')), d.$broadcast('cfpLoadingBar:completed'), f(1), c.cancel(m), m = c(function () {
            var a = k.leave(o, i);
            a && a.then && a.then(i), k.leave(q);
          }, 500);
        }
        var k, l, m, n = this.parentSelector, o = angular.element(this.loadingBarTemplate), p = o.find('div').eq(0), q = angular.element(this.spinnerTemplate), r = !1, s = 0, t = this.includeSpinner, u = this.includeBar, v = this.startSize;
        return {
          start: e,
          set: f,
          status: h,
          inc: g,
          complete: j,
          includeSpinner: this.includeSpinner,
          latencyThreshold: this.latencyThreshold,
          parentSelector: this.parentSelector,
          startSize: this.startSize
        };
      }
    ];
  });
}();
/*! angular-bootstrap-lightbox */
angular.module('bootstrapLightbox', [
  'ngTouch',
  'ui.bootstrap',
  'chieffancypants.loadingBar'
]), angular.module('bootstrapLightbox').run([
  '$templateCache',
  function (a) {
    'use strict';
    a.put('lightbox.html', '<div class=modal-body ng-swipe-left=Lightbox.nextImage() ng-swipe-right=Lightbox.prevImage()><div class=lightbox-nav><button class=close aria-hidden=true ng-click=$dismiss()>\xd7</button><div class=btn-group><a class="btn btn-xs btn-default" ng-click=Lightbox.prevImage()>\u2039 Previous</a> <a ng-href={{Lightbox.imageUrl}} target=_blank class="btn btn-xs btn-default" title="Open in new tab">Open image in new tab</a> <a class="btn btn-xs btn-default" ng-click=Lightbox.nextImage()>Next \u203a</a></div></div><div class=lightbox-image-container><div class=lightbox-image-caption><span>{{Lightbox.imageCaption}}</span></div><img lightbox-src={{Lightbox.imageUrl}} alt=""></div></div>');
  }
]), angular.module('bootstrapLightbox').service('ImageLoader', [
  '$q',
  function (a) {
    this.load = function (b) {
      var c = a.defer(), d = new Image();
      return d.onload = function () {
        ('boolean' == typeof this.complete && this.complete === !1 || 'number' == typeof this.naturalWidth && 0 === this.naturalWidth) && c.reject(), c.resolve(d);
      }, d.onerror = function () {
        c.reject();
      }, d.src = b, c.promise;
    };
  }
]), angular.module('bootstrapLightbox').provider('Lightbox', function () {
  this.templateUrl = 'lightbox.html', this.getImageUrl = function (a) {
    return a.url;
  }, this.getImageCaption = function (a) {
    return a.caption;
  }, this.calculateImageDimensionLimits = function (a) {
    return a.windowWidth >= 768 ? {
      maxWidth: a.windowWidth - 92,
      maxHeight: a.windowHeight - 126
    } : {
      maxWidth: a.windowWidth - 52,
      maxHeight: a.windowHeight - 86
    };
  }, this.calculateModalDimensions = function (a) {
    var b = Math.max(400, a.imageDisplayWidth + 32), c = Math.max(200, a.imageDisplayHeight + 66);
    return (b >= a.windowWidth - 20 || a.windowWidth < 768) && (b = 'auto'), c >= a.windowHeight && (c = 'auto'), {
      width: b,
      height: c
    };
  }, this.$get = [
    '$document',
    '$modal',
    '$timeout',
    'cfpLoadingBar',
    'ImageLoader',
    function (a, b, c, d, e) {
      var f = [], g = -1, h = {};
      return h.templateUrl = this.templateUrl, h.getImageUrl = this.getImageUrl, h.getImageCaption = this.getImageCaption, h.calculateImageDimensionLimits = this.calculateImageDimensionLimits, h.calculateModalDimensions = this.calculateModalDimensions, h.keyboardNavEnabled = !1, h.image = {}, h.openModal = function (a, c) {
        f = a, h.setImage(c), b.open({
          templateUrl: h.templateUrl,
          controller: [
            '$scope',
            function (a) {
              a.Lightbox = h, h.keyboardNavEnabled = !0;
            }
          ],
          windowClass: 'lightbox-modal'
        }).result.finally(function () {
          h.image = {}, h.imageUrl = null, h.imageCaption = null, h.keyboardNavEnabled = !1, d.complete();
        });
      }, h.setImage = function (a) {
        if (!(a in f))
          throw 'Invalid image.';
        d.start();
        var b = function () {
            g = a, h.image = f[g], d.complete();
          }, c = h.getImageUrl(f[a]);
        e.load(c).then(function () {
          b(), h.imageUrl = c, h.imageCaption = h.getImageCaption(h.image);
        }, function () {
          b(), h.imageUrl = '//:0', h.imageCaption = 'Failed to load image';
        });
      }, h.firstImage = function () {
        h.setImage(0);
      }, h.prevImage = function () {
        h.setImage((g - 1 + f.length) % f.length);
      }, h.nextImage = function () {
        h.setImage((g + 1) % f.length);
      }, h.lastImage = function () {
        h.setImage(f.length - 1);
      }, h.setImages = function (a) {
        f = a, h.setImage(g);
      }, a.bind('keydown', function (a) {
        if (h.keyboardNavEnabled) {
          var b = null;
          switch (a.which) {
          case 39:
            b = 'nextImage';
            break;
          case 37:
            b = 'prevImage';
          }
          null !== b && -1 === [
            'input',
            'textarea'
          ].indexOf(a.target.tagName.toLowerCase()) && (c(function () {
            h[b]();
          }), a.preventDefault());
        }
      }), h;
    }
  ];
}), angular.module('bootstrapLightbox').directive('lightboxSrc', [
  '$window',
  'ImageLoader',
  'Lightbox',
  function (a, b, c) {
    var d = function (a) {
        var b = a.width, c = a.height, d = a.minWidth, e = a.minHeight, f = a.maxWidth, g = a.maxHeight, h = b, i = c;
        return d > b && e > c ? b / c > f / g ? (i = e, h = Math.round(b * e / c)) : (h = d, i = Math.round(c * d / b)) : d > b ? (h = d, i = Math.round(c * d / b)) : e > c && (i = e, h = Math.round(b * e / c)), b > f && c > g ? b / c > f / g ? (h = f, i = Math.round(c * f / b)) : (i = g, h = Math.round(b * g / c)) : b > f ? (h = f, i = Math.round(c * f / b)) : c > g && (i = g, h = Math.round(b * g / c)), {
          width: h || 0,
          height: i || 0
        };
      }, e = 0, f = 0;
    return {
      link: function (g, h, i) {
        var j = function () {
          var b = a.innerWidth, g = a.innerHeight, i = c.calculateImageDimensionLimits({
              windowWidth: b,
              windowHeight: g,
              imageWidth: e,
              imageHeight: f
            }), j = d(angular.extend({
              width: e,
              height: f,
              minWidth: 1,
              minHeight: 1,
              maxWidth: 3000,
              maxHeight: 3000
            }, i)), k = c.calculateModalDimensions({
              windowWidth: b,
              windowHeight: g,
              imageDisplayWidth: j.width,
              imageDisplayHeight: j.height
            });
          h.css({
            width: j.width + 'px',
            height: j.height + 'px'
          }), angular.element(document.querySelector('.lightbox-modal .modal-dialog')).css({ width: k.width + 'px' }), angular.element(document.querySelector('.lightbox-modal .modal-content')).css({ height: k.height + 'px' });
        };
        g.$watch(function () {
          return i.lightboxSrc;
        }, function (a) {
          h[0].src = '//:0', b.load(a).then(function (b) {
            e = b.naturalWidth, f = b.naturalHeight, j(), h[0].src = a;
          });
        }), angular.element(a).on('resize', j);
      }
    };
  }
]);
