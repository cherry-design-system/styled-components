import M, { useState as sr, useMemo as ht, useEffect as Qr, useContext as en, useRef as lo, useDebugValue as jr, createElement as uo, createContext as fo } from "react";
function po(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var Ft = { exports: {} }, Ze = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ar;
function ho() {
  if (Ar)
    return Ze;
  Ar = 1;
  var e = M, t = Symbol.for("react.element"), r = Symbol.for("react.fragment"), n = Object.prototype.hasOwnProperty, i = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, a = { key: !0, ref: !0, __self: !0, __source: !0 };
  function s(u, c, p) {
    var h, g = {}, m = null, $ = null;
    p !== void 0 && (m = "" + p), c.key !== void 0 && (m = "" + c.key), c.ref !== void 0 && ($ = c.ref);
    for (h in c)
      n.call(c, h) && !a.hasOwnProperty(h) && (g[h] = c[h]);
    if (u && u.defaultProps)
      for (h in c = u.defaultProps, c)
        g[h] === void 0 && (g[h] = c[h]);
    return { $$typeof: t, type: u, key: m, ref: $, props: g, _owner: i.current };
  }
  return Ze.Fragment = r, Ze.jsx = s, Ze.jsxs = s, Ze;
}
var Je = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Lr;
function go() {
  return Lr || (Lr = 1, process.env.NODE_ENV !== "production" && function() {
    var e = M, t = Symbol.for("react.element"), r = Symbol.for("react.portal"), n = Symbol.for("react.fragment"), i = Symbol.for("react.strict_mode"), a = Symbol.for("react.profiler"), s = Symbol.for("react.provider"), u = Symbol.for("react.context"), c = Symbol.for("react.forward_ref"), p = Symbol.for("react.suspense"), h = Symbol.for("react.suspense_list"), g = Symbol.for("react.memo"), m = Symbol.for("react.lazy"), $ = Symbol.for("react.offscreen"), j = Symbol.iterator, b = "@@iterator";
    function P(o) {
      if (o === null || typeof o != "object")
        return null;
      var l = j && o[j] || o[b];
      return typeof l == "function" ? l : null;
    }
    var S = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function v(o) {
      {
        for (var l = arguments.length, d = new Array(l > 1 ? l - 1 : 0), x = 1; x < l; x++)
          d[x - 1] = arguments[x];
        R("error", o, d);
      }
    }
    function R(o, l, d) {
      {
        var x = S.ReactDebugCurrentFrame, A = x.getStackAddendum();
        A !== "" && (l += "%s", d = d.concat([A]));
        var z = d.map(function(O) {
          return String(O);
        });
        z.unshift("Warning: " + l), Function.prototype.apply.call(console[o], console, z);
      }
    }
    var T = !1, N = !1, k = !1, f = !1, y = !1, W;
    W = Symbol.for("react.module.reference");
    function ee(o) {
      return !!(typeof o == "string" || typeof o == "function" || o === n || o === a || y || o === i || o === p || o === h || f || o === $ || T || N || k || typeof o == "object" && o !== null && (o.$$typeof === m || o.$$typeof === g || o.$$typeof === s || o.$$typeof === u || o.$$typeof === c || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      o.$$typeof === W || o.getModuleId !== void 0));
    }
    function q(o, l, d) {
      var x = o.displayName;
      if (x)
        return x;
      var A = l.displayName || l.name || "";
      return A !== "" ? d + "(" + A + ")" : d;
    }
    function oe(o) {
      return o.displayName || "Context";
    }
    function U(o) {
      if (o == null)
        return null;
      if (typeof o.tag == "number" && v("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof o == "function")
        return o.displayName || o.name || null;
      if (typeof o == "string")
        return o;
      switch (o) {
        case n:
          return "Fragment";
        case r:
          return "Portal";
        case a:
          return "Profiler";
        case i:
          return "StrictMode";
        case p:
          return "Suspense";
        case h:
          return "SuspenseList";
      }
      if (typeof o == "object")
        switch (o.$$typeof) {
          case u:
            var l = o;
            return oe(l) + ".Consumer";
          case s:
            var d = o;
            return oe(d._context) + ".Provider";
          case c:
            return q(o, o.render, "ForwardRef");
          case g:
            var x = o.displayName || null;
            return x !== null ? x : U(o.type) || "Memo";
          case m: {
            var A = o, z = A._payload, O = A._init;
            try {
              return U(O(z));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var Z = Object.assign, le = 0, ot, Ae, Ue, te, ye, me, X;
    function Le() {
    }
    Le.__reactDisabledLog = !0;
    function Xe() {
      {
        if (le === 0) {
          ot = console.log, Ae = console.info, Ue = console.warn, te = console.error, ye = console.group, me = console.groupCollapsed, X = console.groupEnd;
          var o = {
            configurable: !0,
            enumerable: !0,
            value: Le,
            writable: !0
          };
          Object.defineProperties(console, {
            info: o,
            log: o,
            warn: o,
            error: o,
            group: o,
            groupCollapsed: o,
            groupEnd: o
          });
        }
        le++;
      }
    }
    function Ie() {
      {
        if (le--, le === 0) {
          var o = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: Z({}, o, {
              value: ot
            }),
            info: Z({}, o, {
              value: Ae
            }),
            warn: Z({}, o, {
              value: Ue
            }),
            error: Z({}, o, {
              value: te
            }),
            group: Z({}, o, {
              value: ye
            }),
            groupCollapsed: Z({}, o, {
              value: me
            }),
            groupEnd: Z({}, o, {
              value: X
            })
          });
        }
        le < 0 && v("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var de = S.ReactCurrentDispatcher, be;
    function ie(o, l, d) {
      {
        if (be === void 0)
          try {
            throw Error();
          } catch (A) {
            var x = A.stack.trim().match(/\n( *(at )?)/);
            be = x && x[1] || "";
          }
        return `
` + be + o;
      }
    }
    var ae = !1, ve;
    {
      var Ne = typeof WeakMap == "function" ? WeakMap : Map;
      ve = new Ne();
    }
    function se(o, l) {
      if (!o || ae)
        return "";
      {
        var d = ve.get(o);
        if (d !== void 0)
          return d;
      }
      var x;
      ae = !0;
      var A = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var z;
      z = de.current, de.current = null, Xe();
      try {
        if (l) {
          var O = function() {
            throw Error();
          };
          if (Object.defineProperty(O.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(O, []);
            } catch (fe) {
              x = fe;
            }
            Reflect.construct(o, [], O);
          } else {
            try {
              O.call();
            } catch (fe) {
              x = fe;
            }
            o.call(O.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (fe) {
            x = fe;
          }
          o();
        }
      } catch (fe) {
        if (fe && x && typeof fe.stack == "string") {
          for (var E = fe.stack.split(`
`), K = x.stack.split(`
`), F = E.length - 1, B = K.length - 1; F >= 1 && B >= 0 && E[F] !== K[B]; )
            B--;
          for (; F >= 1 && B >= 0; F--, B--)
            if (E[F] !== K[B]) {
              if (F !== 1 || B !== 1)
                do
                  if (F--, B--, B < 0 || E[F] !== K[B]) {
                    var re = `
` + E[F].replace(" at new ", " at ");
                    return o.displayName && re.includes("<anonymous>") && (re = re.replace("<anonymous>", o.displayName)), typeof o == "function" && ve.set(o, re), re;
                  }
                while (F >= 1 && B >= 0);
              break;
            }
        }
      } finally {
        ae = !1, de.current = z, Ie(), Error.prepareStackTrace = A;
      }
      var De = o ? o.displayName || o.name : "", Tr = De ? ie(De) : "";
      return typeof o == "function" && ve.set(o, Tr), Tr;
    }
    function Fn(o, l, d) {
      return se(o, !1);
    }
    function Wn(o) {
      var l = o.prototype;
      return !!(l && l.isReactComponent);
    }
    function it(o, l, d) {
      if (o == null)
        return "";
      if (typeof o == "function")
        return se(o, Wn(o));
      if (typeof o == "string")
        return ie(o);
      switch (o) {
        case p:
          return ie("Suspense");
        case h:
          return ie("SuspenseList");
      }
      if (typeof o == "object")
        switch (o.$$typeof) {
          case c:
            return Fn(o.render);
          case g:
            return it(o.type, l, d);
          case m: {
            var x = o, A = x._payload, z = x._init;
            try {
              return it(z(A), l, d);
            } catch {
            }
          }
        }
      return "";
    }
    var at = Object.prototype.hasOwnProperty, vr = {}, xr = S.ReactDebugCurrentFrame;
    function st(o) {
      if (o) {
        var l = o._owner, d = it(o.type, o._source, l ? l.type : null);
        xr.setExtraStackFrame(d);
      } else
        xr.setExtraStackFrame(null);
    }
    function Bn(o, l, d, x, A) {
      {
        var z = Function.call.bind(at);
        for (var O in o)
          if (z(o, O)) {
            var E = void 0;
            try {
              if (typeof o[O] != "function") {
                var K = Error((x || "React class") + ": " + d + " type `" + O + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof o[O] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw K.name = "Invariant Violation", K;
              }
              E = o[O](l, O, x, d, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (F) {
              E = F;
            }
            E && !(E instanceof Error) && (st(A), v("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", x || "React class", d, O, typeof E), st(null)), E instanceof Error && !(E.message in vr) && (vr[E.message] = !0, st(A), v("Failed %s type: %s", d, E.message), st(null));
          }
      }
    }
    var Vn = Array.isArray;
    function Tt(o) {
      return Vn(o);
    }
    function qn(o) {
      {
        var l = typeof Symbol == "function" && Symbol.toStringTag, d = l && o[Symbol.toStringTag] || o.constructor.name || "Object";
        return d;
      }
    }
    function Gn(o) {
      try {
        return Sr(o), !1;
      } catch {
        return !0;
      }
    }
    function Sr(o) {
      return "" + o;
    }
    function wr(o) {
      if (Gn(o))
        return v("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", qn(o)), Sr(o);
    }
    var Ke = S.ReactCurrentOwner, Yn = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, $r, _r, jt;
    jt = {};
    function Un(o) {
      if (at.call(o, "ref")) {
        var l = Object.getOwnPropertyDescriptor(o, "ref").get;
        if (l && l.isReactWarning)
          return !1;
      }
      return o.ref !== void 0;
    }
    function Xn(o) {
      if (at.call(o, "key")) {
        var l = Object.getOwnPropertyDescriptor(o, "key").get;
        if (l && l.isReactWarning)
          return !1;
      }
      return o.key !== void 0;
    }
    function Kn(o, l) {
      if (typeof o.ref == "string" && Ke.current && l && Ke.current.stateNode !== l) {
        var d = U(Ke.current.type);
        jt[d] || (v('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', U(Ke.current.type), o.ref), jt[d] = !0);
      }
    }
    function Zn(o, l) {
      {
        var d = function() {
          $r || ($r = !0, v("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", l));
        };
        d.isReactWarning = !0, Object.defineProperty(o, "key", {
          get: d,
          configurable: !0
        });
      }
    }
    function Jn(o, l) {
      {
        var d = function() {
          _r || (_r = !0, v("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", l));
        };
        d.isReactWarning = !0, Object.defineProperty(o, "ref", {
          get: d,
          configurable: !0
        });
      }
    }
    var Qn = function(o, l, d, x, A, z, O) {
      var E = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: t,
        // Built-in properties that belong on the element
        type: o,
        key: l,
        ref: d,
        props: O,
        // Record the component responsible for creating this element.
        _owner: z
      };
      return E._store = {}, Object.defineProperty(E._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(E, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: x
      }), Object.defineProperty(E, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: A
      }), Object.freeze && (Object.freeze(E.props), Object.freeze(E)), E;
    };
    function eo(o, l, d, x, A) {
      {
        var z, O = {}, E = null, K = null;
        d !== void 0 && (wr(d), E = "" + d), Xn(l) && (wr(l.key), E = "" + l.key), Un(l) && (K = l.ref, Kn(l, A));
        for (z in l)
          at.call(l, z) && !Yn.hasOwnProperty(z) && (O[z] = l[z]);
        if (o && o.defaultProps) {
          var F = o.defaultProps;
          for (z in F)
            O[z] === void 0 && (O[z] = F[z]);
        }
        if (E || K) {
          var B = typeof o == "function" ? o.displayName || o.name || "Unknown" : o;
          E && Zn(O, B), K && Jn(O, B);
        }
        return Qn(o, E, K, A, x, Ke.current, O);
      }
    }
    var At = S.ReactCurrentOwner, kr = S.ReactDebugCurrentFrame;
    function ze(o) {
      if (o) {
        var l = o._owner, d = it(o.type, o._source, l ? l.type : null);
        kr.setExtraStackFrame(d);
      } else
        kr.setExtraStackFrame(null);
    }
    var Lt;
    Lt = !1;
    function It(o) {
      return typeof o == "object" && o !== null && o.$$typeof === t;
    }
    function Er() {
      {
        if (At.current) {
          var o = U(At.current.type);
          if (o)
            return `

Check the render method of \`` + o + "`.";
        }
        return "";
      }
    }
    function to(o) {
      {
        if (o !== void 0) {
          var l = o.fileName.replace(/^.*[\\\/]/, ""), d = o.lineNumber;
          return `

Check your code at ` + l + ":" + d + ".";
        }
        return "";
      }
    }
    var Cr = {};
    function ro(o) {
      {
        var l = Er();
        if (!l) {
          var d = typeof o == "string" ? o : o.displayName || o.name;
          d && (l = `

Check the top-level render call using <` + d + ">.");
        }
        return l;
      }
    }
    function Rr(o, l) {
      {
        if (!o._store || o._store.validated || o.key != null)
          return;
        o._store.validated = !0;
        var d = ro(l);
        if (Cr[d])
          return;
        Cr[d] = !0;
        var x = "";
        o && o._owner && o._owner !== At.current && (x = " It was passed a child from " + U(o._owner.type) + "."), ze(o), v('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', d, x), ze(null);
      }
    }
    function Or(o, l) {
      {
        if (typeof o != "object")
          return;
        if (Tt(o))
          for (var d = 0; d < o.length; d++) {
            var x = o[d];
            It(x) && Rr(x, l);
          }
        else if (It(o))
          o._store && (o._store.validated = !0);
        else if (o) {
          var A = P(o);
          if (typeof A == "function" && A !== o.entries)
            for (var z = A.call(o), O; !(O = z.next()).done; )
              It(O.value) && Rr(O.value, l);
        }
      }
    }
    function no(o) {
      {
        var l = o.type;
        if (l == null || typeof l == "string")
          return;
        var d;
        if (typeof l == "function")
          d = l.propTypes;
        else if (typeof l == "object" && (l.$$typeof === c || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        l.$$typeof === g))
          d = l.propTypes;
        else
          return;
        if (d) {
          var x = U(l);
          Bn(d, o.props, "prop", x, o);
        } else if (l.PropTypes !== void 0 && !Lt) {
          Lt = !0;
          var A = U(l);
          v("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", A || "Unknown");
        }
        typeof l.getDefaultProps == "function" && !l.getDefaultProps.isReactClassApproved && v("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function oo(o) {
      {
        for (var l = Object.keys(o.props), d = 0; d < l.length; d++) {
          var x = l[d];
          if (x !== "children" && x !== "key") {
            ze(o), v("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", x), ze(null);
            break;
          }
        }
        o.ref !== null && (ze(o), v("Invalid attribute `ref` supplied to `React.Fragment`."), ze(null));
      }
    }
    function Pr(o, l, d, x, A, z) {
      {
        var O = ee(o);
        if (!O) {
          var E = "";
          (o === void 0 || typeof o == "object" && o !== null && Object.keys(o).length === 0) && (E += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var K = to(A);
          K ? E += K : E += Er();
          var F;
          o === null ? F = "null" : Tt(o) ? F = "array" : o !== void 0 && o.$$typeof === t ? (F = "<" + (U(o.type) || "Unknown") + " />", E = " Did you accidentally export a JSX literal instead of a component?") : F = typeof o, v("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", F, E);
        }
        var B = eo(o, l, d, A, z);
        if (B == null)
          return B;
        if (O) {
          var re = l.children;
          if (re !== void 0)
            if (x)
              if (Tt(re)) {
                for (var De = 0; De < re.length; De++)
                  Or(re[De], o);
                Object.freeze && Object.freeze(re);
              } else
                v("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              Or(re, o);
        }
        return o === n ? oo(B) : no(B), B;
      }
    }
    function io(o, l, d) {
      return Pr(o, l, d, !0);
    }
    function ao(o, l, d) {
      return Pr(o, l, d, !1);
    }
    var so = ao, co = io;
    Je.Fragment = n, Je.jsx = so, Je.jsxs = co;
  }()), Je;
}
process.env.NODE_ENV === "production" ? Ft.exports = ho() : Ft.exports = go();
var w = Ft.exports, Wt = { exports: {} }, tn = {}, xt = {};
xt._ = xt._interop_require_default = yo;
function yo(e) {
  return e && e.__esModule ? e : { default: e };
}
(function(e) {
  "use client";
  Object.defineProperty(e, "__esModule", {
    value: !0
  });
  function t(p, h) {
    for (var g in h)
      Object.defineProperty(p, g, {
        enumerable: !0,
        get: h[g]
      });
  }
  t(e, {
    AppRouterContext: function() {
      return i;
    },
    LayoutRouterContext: function() {
      return a;
    },
    GlobalLayoutRouterContext: function() {
      return s;
    },
    TemplateContext: function() {
      return u;
    },
    MissingSlotContext: function() {
      return c;
    }
  });
  const n = /* @__PURE__ */ xt._(M), i = n.default.createContext(null), a = n.default.createContext(null), s = n.default.createContext(null), u = n.default.createContext(null);
  process.env.NODE_ENV !== "production" && (i.displayName = "AppRouterContext", a.displayName = "LayoutRouterContext", s.displayName = "GlobalLayoutRouterContext", u.displayName = "TemplateContext");
  const c = n.default.createContext(/* @__PURE__ */ new Set());
})(tn);
var rn = {};
(function(e) {
  "use client";
  Object.defineProperty(e, "__esModule", {
    value: !0
  });
  function t(s, u) {
    for (var c in u)
      Object.defineProperty(s, c, {
        enumerable: !0,
        get: u[c]
      });
  }
  t(e, {
    SearchParamsContext: function() {
      return n;
    },
    PathnameContext: function() {
      return i;
    },
    PathParamsContext: function() {
      return a;
    }
  });
  const r = M, n = (0, r.createContext)(null), i = (0, r.createContext)(null), a = (0, r.createContext)(null);
  process.env.NODE_ENV !== "production" && (n.displayName = "SearchParamsContext", i.displayName = "PathnameContext", a.displayName = "PathParamsContext");
})(rn);
var Bt = { exports: {} };
(function(e, t) {
  Object.defineProperty(t, "__esModule", {
    value: !0
  }), Object.defineProperty(t, "clientHookInServerComponentError", {
    enumerable: !0,
    get: function() {
      return i;
    }
  });
  const n = /* @__PURE__ */ xt._(M);
  function i(a) {
    if (process.env.NODE_ENV !== "production" && !n.default.useState)
      throw new Error("" + a + ' only works in Client Components. Add the "use client" directive at the top of the file to use it. Read more: https://nextjs.org/docs/messages/react-client-hook-in-server-component');
  }
  (typeof t.default == "function" || typeof t.default == "object" && t.default !== null) && typeof t.default.__esModule > "u" && (Object.defineProperty(t.default, "__esModule", { value: !0 }), Object.assign(t.default, t), e.exports = t.default);
})(Bt, Bt.exports);
var mo = Bt.exports, Vt = { exports: {} };
(function(e, t) {
  Object.defineProperty(t, "__esModule", {
    value: !0
  }), Object.defineProperty(t, "getSegmentValue", {
    enumerable: !0,
    get: function() {
      return r;
    }
  });
  function r(n) {
    return Array.isArray(n) ? n[1] : n;
  }
  (typeof t.default == "function" || typeof t.default == "object" && t.default !== null) && typeof t.default.__esModule > "u" && (Object.defineProperty(t.default, "__esModule", { value: !0 }), Object.assign(t.default, t), e.exports = t.default);
})(Vt, Vt.exports);
var bo = Vt.exports, nn = {};
(function(e) {
  Object.defineProperty(e, "__esModule", {
    value: !0
  });
  function t(a, s) {
    for (var u in s)
      Object.defineProperty(a, u, {
        enumerable: !0,
        get: s[u]
      });
  }
  t(e, {
    isGroupSegment: function() {
      return r;
    },
    PAGE_SEGMENT_KEY: function() {
      return n;
    },
    DEFAULT_SEGMENT_KEY: function() {
      return i;
    }
  });
  function r(a) {
    return a[0] === "(" && a.endsWith(")");
  }
  const n = "__PAGE__", i = "__DEFAULT__";
})(nn);
var on = {}, qt = {};
function an(e) {
  if (typeof WeakMap != "function")
    return null;
  var t = /* @__PURE__ */ new WeakMap(), r = /* @__PURE__ */ new WeakMap();
  return (an = function(n) {
    return n ? r : t;
  })(e);
}
qt._ = qt._interop_require_wildcard = vo;
function vo(e, t) {
  if (!t && e && e.__esModule)
    return e;
  if (e === null || typeof e != "object" && typeof e != "function")
    return { default: e };
  var r = an(t);
  if (r && r.has(e))
    return r.get(e);
  var n = {}, i = Object.defineProperty && Object.getOwnPropertyDescriptor;
  for (var a in e)
    if (a !== "default" && Object.prototype.hasOwnProperty.call(e, a)) {
      var s = i ? Object.getOwnPropertyDescriptor(e, a) : null;
      s && (s.get || s.set) ? Object.defineProperty(n, a, s) : n[a] = e[a];
    }
  return n.default = e, r && r.set(e, n), n;
}
(function(e) {
  "use client";
  Object.defineProperty(e, "__esModule", {
    value: !0
  });
  function t(s, u) {
    for (var c in u)
      Object.defineProperty(s, c, {
        enumerable: !0,
        get: u[c]
      });
  }
  t(e, {
    ServerInsertedHTMLContext: function() {
      return i;
    },
    useServerInsertedHTML: function() {
      return a;
    }
  });
  const n = /* @__PURE__ */ qt._(M), i = /* @__PURE__ */ n.default.createContext(null);
  function a(s) {
    const u = (0, n.useContext)(i);
    u && u(s);
  }
})(on);
var Gt = { exports: {} }, Yt = { exports: {} }, Ut = { exports: {} };
(function(e, t) {
  Object.defineProperty(t, "__esModule", {
    value: !0
  }), Object.defineProperty(t, "createAsyncLocalStorage", {
    enumerable: !0,
    get: function() {
      return a;
    }
  });
  const r = new Error("Invariant: AsyncLocalStorage accessed in runtime where it is not available");
  class n {
    disable() {
      throw r;
    }
    getStore() {
    }
    run() {
      throw r;
    }
    exit() {
      throw r;
    }
    enterWith() {
      throw r;
    }
  }
  const i = globalThis.AsyncLocalStorage;
  function a() {
    return i ? new i() : new n();
  }
  (typeof t.default == "function" || typeof t.default == "object" && t.default !== null) && typeof t.default.__esModule > "u" && (Object.defineProperty(t.default, "__esModule", { value: !0 }), Object.assign(t.default, t), e.exports = t.default);
})(Ut, Ut.exports);
var cr = Ut.exports;
(function(e, t) {
  Object.defineProperty(t, "__esModule", {
    value: !0
  }), Object.defineProperty(t, "requestAsyncStorage", {
    enumerable: !0,
    get: function() {
      return n;
    }
  });
  const n = (0, cr.createAsyncLocalStorage)();
  (typeof t.default == "function" || typeof t.default == "object" && t.default !== null) && typeof t.default.__esModule > "u" && (Object.defineProperty(t.default, "__esModule", { value: !0 }), Object.assign(t.default, t), e.exports = t.default);
})(Yt, Yt.exports);
var xo = Yt.exports, Xt = { exports: {} };
(function(e, t) {
  Object.defineProperty(t, "__esModule", {
    value: !0
  }), Object.defineProperty(t, "actionAsyncStorage", {
    enumerable: !0,
    get: function() {
      return n;
    }
  });
  const n = (0, cr.createAsyncLocalStorage)();
  (typeof t.default == "function" || typeof t.default == "object" && t.default !== null) && typeof t.default.__esModule > "u" && (Object.defineProperty(t.default, "__esModule", { value: !0 }), Object.assign(t.default, t), e.exports = t.default);
})(Xt, Xt.exports);
var So = Xt.exports, Kt = { exports: {} };
(function(e, t) {
  Object.defineProperty(t, "__esModule", {
    value: !0
  }), Object.defineProperty(t, "RedirectStatusCode", {
    enumerable: !0,
    get: function() {
      return r;
    }
  });
  var r;
  (function(n) {
    n[n.SeeOther = 303] = "SeeOther", n[n.TemporaryRedirect = 307] = "TemporaryRedirect", n[n.PermanentRedirect = 308] = "PermanentRedirect";
  })(r || (r = {})), (typeof t.default == "function" || typeof t.default == "object" && t.default !== null) && typeof t.default.__esModule > "u" && (Object.defineProperty(t.default, "__esModule", { value: !0 }), Object.assign(t.default, t), e.exports = t.default);
})(Kt, Kt.exports);
var wo = Kt.exports;
(function(e, t) {
  Object.defineProperty(t, "__esModule", {
    value: !0
  });
  function r(b, P) {
    for (var S in P)
      Object.defineProperty(b, S, {
        enumerable: !0,
        get: P[S]
      });
  }
  r(t, {
    RedirectType: function() {
      return u;
    },
    getRedirectError: function() {
      return c;
    },
    redirect: function() {
      return p;
    },
    permanentRedirect: function() {
      return h;
    },
    isRedirectError: function() {
      return g;
    },
    getURLFromRedirectError: function() {
      return m;
    },
    getRedirectTypeFromError: function() {
      return $;
    },
    getRedirectStatusCodeFromError: function() {
      return j;
    }
  });
  const n = xo, i = So, a = wo, s = "NEXT_REDIRECT";
  var u;
  (function(b) {
    b.push = "push", b.replace = "replace";
  })(u || (u = {}));
  function c(b, P, S) {
    S === void 0 && (S = a.RedirectStatusCode.TemporaryRedirect);
    const v = new Error(s);
    v.digest = s + ";" + P + ";" + b + ";" + S + ";";
    const R = n.requestAsyncStorage.getStore();
    return R && (v.mutableCookies = R.mutableCookies), v;
  }
  function p(b, P) {
    P === void 0 && (P = "replace");
    const S = i.actionAsyncStorage.getStore();
    throw c(
      b,
      P,
      // If we're in an action, we want to use a 303 redirect
      // as we don't want the POST request to follow the redirect,
      // as it could result in erroneous re-submissions.
      S != null && S.isAction ? a.RedirectStatusCode.SeeOther : a.RedirectStatusCode.TemporaryRedirect
    );
  }
  function h(b, P) {
    P === void 0 && (P = "replace");
    const S = i.actionAsyncStorage.getStore();
    throw c(
      b,
      P,
      // If we're in an action, we want to use a 303 redirect
      // as we don't want the POST request to follow the redirect,
      // as it could result in erroneous re-submissions.
      S != null && S.isAction ? a.RedirectStatusCode.SeeOther : a.RedirectStatusCode.PermanentRedirect
    );
  }
  function g(b) {
    if (typeof b != "object" || b === null || !("digest" in b) || typeof b.digest != "string")
      return !1;
    const [P, S, v, R] = b.digest.split(";", 4), T = Number(R);
    return P === s && (S === "replace" || S === "push") && typeof v == "string" && !isNaN(T) && T in a.RedirectStatusCode;
  }
  function m(b) {
    return g(b) ? b.digest.split(";", 3)[2] : null;
  }
  function $(b) {
    if (!g(b))
      throw new Error("Not a redirect error");
    return b.digest.split(";", 2)[1];
  }
  function j(b) {
    if (!g(b))
      throw new Error("Not a redirect error");
    return Number(b.digest.split(";", 4)[3]);
  }
  (typeof t.default == "function" || typeof t.default == "object" && t.default !== null) && typeof t.default.__esModule > "u" && (Object.defineProperty(t.default, "__esModule", { value: !0 }), Object.assign(t.default, t), e.exports = t.default);
})(Gt, Gt.exports);
var $o = Gt.exports, Zt = { exports: {} };
(function(e, t) {
  Object.defineProperty(t, "__esModule", {
    value: !0
  });
  function r(s, u) {
    for (var c in u)
      Object.defineProperty(s, c, {
        enumerable: !0,
        get: u[c]
      });
  }
  r(t, {
    notFound: function() {
      return i;
    },
    isNotFoundError: function() {
      return a;
    }
  });
  const n = "NEXT_NOT_FOUND";
  function i() {
    const s = new Error(n);
    throw s.digest = n, s;
  }
  function a(s) {
    return typeof s != "object" || s === null || !("digest" in s) ? !1 : s.digest === n;
  }
  (typeof t.default == "function" || typeof t.default == "object" && t.default !== null) && typeof t.default.__esModule > "u" && (Object.defineProperty(t.default, "__esModule", { value: !0 }), Object.assign(t.default, t), e.exports = t.default);
})(Zt, Zt.exports);
var _o = Zt.exports, ct = { exports: {} }, Nt = {}, Ir;
function ko() {
  return Ir || (Ir = 1, function(e) {
    Object.defineProperty(e, "__esModule", {
      value: !0
    });
    function t(a, s) {
      for (var u in s)
        Object.defineProperty(a, u, {
          enumerable: !0,
          get: s[u]
        });
    }
    t(e, {
      BailoutToCSRError: function() {
        return n;
      },
      isBailoutToCSRError: function() {
        return i;
      }
    });
    const r = "BAILOUT_TO_CLIENT_SIDE_RENDERING";
    class n extends Error {
      constructor(s) {
        super("Bail out to client-side rendering: " + s), this.reason = s, this.digest = r;
      }
    }
    function i(a) {
      return typeof a != "object" || a === null || !("digest" in a) ? !1 : a.digest === r;
    }
  }(Nt)), Nt;
}
var lt = { exports: {} }, Nr;
function Eo() {
  return Nr || (Nr = 1, function(e, t) {
    Object.defineProperty(t, "__esModule", {
      value: !0
    }), Object.defineProperty(t, "staticGenerationAsyncStorage", {
      enumerable: !0,
      get: function() {
        return n;
      }
    });
    const n = (0, cr.createAsyncLocalStorage)();
    (typeof t.default == "function" || typeof t.default == "object" && t.default !== null) && typeof t.default.__esModule > "u" && (Object.defineProperty(t.default, "__esModule", { value: !0 }), Object.assign(t.default, t), e.exports = t.default);
  }(lt, lt.exports)), lt.exports;
}
var zr;
function Co() {
  return zr || (zr = 1, function(e, t) {
    Object.defineProperty(t, "__esModule", {
      value: !0
    }), Object.defineProperty(t, "bailoutToClientRendering", {
      enumerable: !0,
      get: function() {
        return i;
      }
    });
    const r = ko(), n = Eo();
    function i(a) {
      const s = n.staticGenerationAsyncStorage.getStore();
      if (!(s != null && s.forceStatic) && s != null && s.isStaticGeneration)
        throw new r.BailoutToCSRError(a);
    }
    (typeof t.default == "function" || typeof t.default == "object" && t.default !== null) && typeof t.default.__esModule > "u" && (Object.defineProperty(t.default, "__esModule", { value: !0 }), Object.assign(t.default, t), e.exports = t.default);
  }(ct, ct.exports)), ct.exports;
}
(function(e, t) {
  Object.defineProperty(t, "__esModule", {
    value: !0
  });
  function r(f, y) {
    for (var W in y)
      Object.defineProperty(f, W, {
        enumerable: !0,
        get: y[W]
      });
  }
  r(t, {
    ReadonlyURLSearchParams: function() {
      return j;
    },
    useSearchParams: function() {
      return b;
    },
    usePathname: function() {
      return P;
    },
    ServerInsertedHTMLContext: function() {
      return p.ServerInsertedHTMLContext;
    },
    useServerInsertedHTML: function() {
      return p.useServerInsertedHTML;
    },
    useRouter: function() {
      return S;
    },
    useParams: function() {
      return R;
    },
    useSelectedLayoutSegments: function() {
      return N;
    },
    useSelectedLayoutSegment: function() {
      return k;
    },
    redirect: function() {
      return h.redirect;
    },
    permanentRedirect: function() {
      return h.permanentRedirect;
    },
    RedirectType: function() {
      return h.RedirectType;
    },
    notFound: function() {
      return g.notFound;
    }
  });
  const n = M, i = tn, a = rn, s = mo, u = bo, c = nn, p = on, h = $o, g = _o, m = Symbol("internal for urlsearchparams readonly");
  function $() {
    return new Error("ReadonlyURLSearchParams cannot be modified");
  }
  class j {
    [Symbol.iterator]() {
      return this[m][Symbol.iterator]();
    }
    append() {
      throw $();
    }
    delete() {
      throw $();
    }
    set() {
      throw $();
    }
    sort() {
      throw $();
    }
    constructor(y) {
      this[m] = y, this.entries = y.entries.bind(y), this.forEach = y.forEach.bind(y), this.get = y.get.bind(y), this.getAll = y.getAll.bind(y), this.has = y.has.bind(y), this.keys = y.keys.bind(y), this.values = y.values.bind(y), this.toString = y.toString.bind(y), this.size = y.size;
    }
  }
  function b() {
    (0, s.clientHookInServerComponentError)("useSearchParams");
    const f = (0, n.useContext)(a.SearchParamsContext), y = (0, n.useMemo)(() => f ? new j(f) : null, [
      f
    ]);
    if (typeof window > "u") {
      const { bailoutToClientRendering: W } = Co();
      W("useSearchParams()");
    }
    return y;
  }
  function P() {
    return (0, s.clientHookInServerComponentError)("usePathname"), (0, n.useContext)(a.PathnameContext);
  }
  function S() {
    (0, s.clientHookInServerComponentError)("useRouter");
    const f = (0, n.useContext)(i.AppRouterContext);
    if (f === null)
      throw new Error("invariant expected app router to be mounted");
    return f;
  }
  function v(f, y) {
    y === void 0 && (y = {});
    const W = f[1];
    for (const ee of Object.values(W)) {
      const q = ee[0], oe = Array.isArray(q), U = oe ? q[1] : q;
      if (!U || U.startsWith(c.PAGE_SEGMENT_KEY))
        continue;
      oe && (q[2] === "c" || q[2] === "oc") ? y[q[0]] = q[1].split("/") : oe && (y[q[0]] = q[1]), y = v(ee, y);
    }
    return y;
  }
  function R() {
    (0, s.clientHookInServerComponentError)("useParams");
    const f = (0, n.useContext)(i.GlobalLayoutRouterContext), y = (0, n.useContext)(a.PathParamsContext);
    return (0, n.useMemo)(() => f != null && f.tree ? v(f.tree) : y, [
      f == null ? void 0 : f.tree,
      y
    ]);
  }
  function T(f, y, W, ee) {
    W === void 0 && (W = !0), ee === void 0 && (ee = []);
    let q;
    if (W)
      q = f[1][y];
    else {
      const le = f[1];
      var oe;
      q = (oe = le.children) != null ? oe : Object.values(le)[0];
    }
    if (!q)
      return ee;
    const U = q[0], Z = (0, u.getSegmentValue)(U);
    return !Z || Z.startsWith(c.PAGE_SEGMENT_KEY) ? ee : (ee.push(Z), T(q, y, !1, ee));
  }
  function N(f) {
    f === void 0 && (f = "children"), (0, s.clientHookInServerComponentError)("useSelectedLayoutSegments");
    const { tree: y } = (0, n.useContext)(i.LayoutRouterContext);
    return T(y, f);
  }
  function k(f) {
    f === void 0 && (f = "children"), (0, s.clientHookInServerComponentError)("useSelectedLayoutSegment");
    const y = N(f);
    return y.length === 0 ? null : y[0];
  }
  (typeof t.default == "function" || typeof t.default == "object" && t.default !== null) && typeof t.default.__esModule > "u" && (Object.defineProperty(t.default, "__esModule", { value: !0 }), Object.assign(t.default, t), e.exports = t.default);
})(Wt, Wt.exports);
var Ro = Wt.exports, Oo = Ro, G = function() {
  return G = Object.assign || function(t) {
    for (var r, n = 1, i = arguments.length; n < i; n++) {
      r = arguments[n];
      for (var a in r)
        Object.prototype.hasOwnProperty.call(r, a) && (t[a] = r[a]);
    }
    return t;
  }, G.apply(this, arguments);
};
function Oe(e, t, r) {
  if (r || arguments.length === 2)
    for (var n = 0, i = t.length, a; n < i; n++)
      (a || !(n in t)) && (a || (a = Array.prototype.slice.call(t, 0, n)), a[n] = t[n]);
  return e.concat(a || Array.prototype.slice.call(t));
}
function Po(e) {
  var t = /* @__PURE__ */ Object.create(null);
  return function(r) {
    return t[r] === void 0 && (t[r] = e(r)), t[r];
  };
}
var To = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/, jo = /* @__PURE__ */ Po(
  function(e) {
    return To.test(e) || e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && e.charCodeAt(2) < 91;
  }
  /* Z+1 */
), Ao = function(t, r, n, i) {
  var a = n ? n.call(i, t, r) : void 0;
  if (a !== void 0)
    return !!a;
  if (t === r)
    return !0;
  if (typeof t != "object" || !t || typeof r != "object" || !r)
    return !1;
  var s = Object.keys(t), u = Object.keys(r);
  if (s.length !== u.length)
    return !1;
  for (var c = Object.prototype.hasOwnProperty.bind(r), p = 0; p < s.length; p++) {
    var h = s[p];
    if (!c(h))
      return !1;
    var g = t[h], m = r[h];
    if (a = n ? n.call(i, g, m, h) : void 0, a === !1 || a === void 0 && g !== m)
      return !1;
  }
  return !0;
};
const Lo = /* @__PURE__ */ po(Ao);
var D = "-ms-", et = "-moz-", L = "-webkit-", sn = "comm", Et = "rule", lr = "decl", Io = "@import", cn = "@keyframes", No = "@layer", ln = Math.abs, ur = String.fromCharCode, Jt = Object.assign;
function zo(e, t) {
  return Y(e, 0) ^ 45 ? (((t << 2 ^ Y(e, 0)) << 2 ^ Y(e, 1)) << 2 ^ Y(e, 2)) << 2 ^ Y(e, 3) : 0;
}
function un(e) {
  return e.trim();
}
function pe(e, t) {
  return (e = t.exec(e)) ? e[0] : e;
}
function _(e, t, r) {
  return e.replace(t, r);
}
function gt(e, t, r) {
  return e.indexOf(t, r);
}
function Y(e, t) {
  return e.charCodeAt(t) | 0;
}
function He(e, t, r) {
  return e.slice(t, r);
}
function ue(e) {
  return e.length;
}
function dn(e) {
  return e.length;
}
function Qe(e, t) {
  return t.push(e), e;
}
function Do(e, t) {
  return e.map(t).join("");
}
function Dr(e, t) {
  return e.filter(function(r) {
    return !pe(r, t);
  });
}
var Ct = 1, Fe = 1, fn = 0, ne = 0, V = 0, Ye = "";
function Rt(e, t, r, n, i, a, s, u) {
  return { value: e, root: t, parent: r, type: n, props: i, children: a, line: Ct, column: Fe, length: s, return: "", siblings: u };
}
function xe(e, t) {
  return Jt(Rt("", null, null, "", null, null, 0, e.siblings), e, { length: -e.length }, t);
}
function Me(e) {
  for (; e.root; )
    e = xe(e.root, { children: [e] });
  Qe(e, e.siblings);
}
function Mo() {
  return V;
}
function Ho() {
  return V = ne > 0 ? Y(Ye, --ne) : 0, Fe--, V === 10 && (Fe = 1, Ct--), V;
}
function ce() {
  return V = ne < fn ? Y(Ye, ne++) : 0, Fe++, V === 10 && (Fe = 1, Ct++), V;
}
function Re() {
  return Y(Ye, ne);
}
function yt() {
  return ne;
}
function Ot(e, t) {
  return He(Ye, e, t);
}
function Qt(e) {
  switch (e) {
    case 0:
    case 9:
    case 10:
    case 13:
    case 32:
      return 5;
    case 33:
    case 43:
    case 44:
    case 47:
    case 62:
    case 64:
    case 126:
    case 59:
    case 123:
    case 125:
      return 4;
    case 58:
      return 3;
    case 34:
    case 39:
    case 40:
    case 91:
      return 2;
    case 41:
    case 93:
      return 1;
  }
  return 0;
}
function Fo(e) {
  return Ct = Fe = 1, fn = ue(Ye = e), ne = 0, [];
}
function Wo(e) {
  return Ye = "", e;
}
function zt(e) {
  return un(Ot(ne - 1, er(e === 91 ? e + 2 : e === 40 ? e + 1 : e)));
}
function Bo(e) {
  for (; (V = Re()) && V < 33; )
    ce();
  return Qt(e) > 2 || Qt(V) > 3 ? "" : " ";
}
function Vo(e, t) {
  for (; --t && ce() && !(V < 48 || V > 102 || V > 57 && V < 65 || V > 70 && V < 97); )
    ;
  return Ot(e, yt() + (t < 6 && Re() == 32 && ce() == 32));
}
function er(e) {
  for (; ce(); )
    switch (V) {
      case e:
        return ne;
      case 34:
      case 39:
        e !== 34 && e !== 39 && er(V);
        break;
      case 40:
        e === 41 && er(e);
        break;
      case 92:
        ce();
        break;
    }
  return ne;
}
function qo(e, t) {
  for (; ce() && e + V !== 57; )
    if (e + V === 84 && Re() === 47)
      break;
  return "/*" + Ot(t, ne - 1) + "*" + ur(e === 47 ? e : ce());
}
function Go(e) {
  for (; !Qt(Re()); )
    ce();
  return Ot(e, ne);
}
function Yo(e) {
  return Wo(mt("", null, null, null, [""], e = Fo(e), 0, [0], e));
}
function mt(e, t, r, n, i, a, s, u, c) {
  for (var p = 0, h = 0, g = s, m = 0, $ = 0, j = 0, b = 1, P = 1, S = 1, v = 0, R = "", T = i, N = a, k = n, f = R; P; )
    switch (j = v, v = ce()) {
      case 40:
        if (j != 108 && Y(f, g - 1) == 58) {
          gt(f += _(zt(v), "&", "&\f"), "&\f", ln(p ? u[p - 1] : 0)) != -1 && (S = -1);
          break;
        }
      case 34:
      case 39:
      case 91:
        f += zt(v);
        break;
      case 9:
      case 10:
      case 13:
      case 32:
        f += Bo(j);
        break;
      case 92:
        f += Vo(yt() - 1, 7);
        continue;
      case 47:
        switch (Re()) {
          case 42:
          case 47:
            Qe(Uo(qo(ce(), yt()), t, r, c), c);
            break;
          default:
            f += "/";
        }
        break;
      case 123 * b:
        u[p++] = ue(f) * S;
      case 125 * b:
      case 59:
      case 0:
        switch (v) {
          case 0:
          case 125:
            P = 0;
          case 59 + h:
            S == -1 && (f = _(f, /\f/g, "")), $ > 0 && ue(f) - g && Qe($ > 32 ? Hr(f + ";", n, r, g - 1, c) : Hr(_(f, " ", "") + ";", n, r, g - 2, c), c);
            break;
          case 59:
            f += ";";
          default:
            if (Qe(k = Mr(f, t, r, p, h, i, u, R, T = [], N = [], g, a), a), v === 123)
              if (h === 0)
                mt(f, t, k, k, T, a, g, u, N);
              else
                switch (m === 99 && Y(f, 3) === 110 ? 100 : m) {
                  case 100:
                  case 108:
                  case 109:
                  case 115:
                    mt(e, k, k, n && Qe(Mr(e, k, k, 0, 0, i, u, R, i, T = [], g, N), N), i, N, g, u, n ? T : N);
                    break;
                  default:
                    mt(f, k, k, k, [""], N, 0, u, N);
                }
        }
        p = h = $ = 0, b = S = 1, R = f = "", g = s;
        break;
      case 58:
        g = 1 + ue(f), $ = j;
      default:
        if (b < 1) {
          if (v == 123)
            --b;
          else if (v == 125 && b++ == 0 && Ho() == 125)
            continue;
        }
        switch (f += ur(v), v * b) {
          case 38:
            S = h > 0 ? 1 : (f += "\f", -1);
            break;
          case 44:
            u[p++] = (ue(f) - 1) * S, S = 1;
            break;
          case 64:
            Re() === 45 && (f += zt(ce())), m = Re(), h = g = ue(R = f += Go(yt())), v++;
            break;
          case 45:
            j === 45 && ue(f) == 2 && (b = 0);
        }
    }
  return a;
}
function Mr(e, t, r, n, i, a, s, u, c, p, h, g) {
  for (var m = i - 1, $ = i === 0 ? a : [""], j = dn($), b = 0, P = 0, S = 0; b < n; ++b)
    for (var v = 0, R = He(e, m + 1, m = ln(P = s[b])), T = e; v < j; ++v)
      (T = un(P > 0 ? $[v] + " " + R : _(R, /&\f/g, $[v]))) && (c[S++] = T);
  return Rt(e, t, r, i === 0 ? Et : u, c, p, h, g);
}
function Uo(e, t, r, n) {
  return Rt(e, t, r, sn, ur(Mo()), He(e, 2, -2), 0, n);
}
function Hr(e, t, r, n, i) {
  return Rt(e, t, r, lr, He(e, 0, n), He(e, n + 1, -1), n, i);
}
function pn(e, t, r) {
  switch (zo(e, t)) {
    case 5103:
      return L + "print-" + e + e;
    case 5737:
    case 4201:
    case 3177:
    case 3433:
    case 1641:
    case 4457:
    case 2921:
    case 5572:
    case 6356:
    case 5844:
    case 3191:
    case 6645:
    case 3005:
    case 6391:
    case 5879:
    case 5623:
    case 6135:
    case 4599:
    case 4855:
    case 4215:
    case 6389:
    case 5109:
    case 5365:
    case 5621:
    case 3829:
      return L + e + e;
    case 4789:
      return et + e + e;
    case 5349:
    case 4246:
    case 4810:
    case 6968:
    case 2756:
      return L + e + et + e + D + e + e;
    case 5936:
      switch (Y(e, t + 11)) {
        case 114:
          return L + e + D + _(e, /[svh]\w+-[tblr]{2}/, "tb") + e;
        case 108:
          return L + e + D + _(e, /[svh]\w+-[tblr]{2}/, "tb-rl") + e;
        case 45:
          return L + e + D + _(e, /[svh]\w+-[tblr]{2}/, "lr") + e;
      }
    case 6828:
    case 4268:
    case 2903:
      return L + e + D + e + e;
    case 6165:
      return L + e + D + "flex-" + e + e;
    case 5187:
      return L + e + _(e, /(\w+).+(:[^]+)/, L + "box-$1$2" + D + "flex-$1$2") + e;
    case 5443:
      return L + e + D + "flex-item-" + _(e, /flex-|-self/g, "") + (pe(e, /flex-|baseline/) ? "" : D + "grid-row-" + _(e, /flex-|-self/g, "")) + e;
    case 4675:
      return L + e + D + "flex-line-pack" + _(e, /align-content|flex-|-self/g, "") + e;
    case 5548:
      return L + e + D + _(e, "shrink", "negative") + e;
    case 5292:
      return L + e + D + _(e, "basis", "preferred-size") + e;
    case 6060:
      return L + "box-" + _(e, "-grow", "") + L + e + D + _(e, "grow", "positive") + e;
    case 4554:
      return L + _(e, /([^-])(transform)/g, "$1" + L + "$2") + e;
    case 6187:
      return _(_(_(e, /(zoom-|grab)/, L + "$1"), /(image-set)/, L + "$1"), e, "") + e;
    case 5495:
    case 3959:
      return _(e, /(image-set\([^]*)/, L + "$1$`$1");
    case 4968:
      return _(_(e, /(.+:)(flex-)?(.*)/, L + "box-pack:$3" + D + "flex-pack:$3"), /s.+-b[^;]+/, "justify") + L + e + e;
    case 4200:
      if (!pe(e, /flex-|baseline/))
        return D + "grid-column-align" + He(e, t) + e;
      break;
    case 2592:
    case 3360:
      return D + _(e, "template-", "") + e;
    case 4384:
    case 3616:
      return r && r.some(function(n, i) {
        return t = i, pe(n.props, /grid-\w+-end/);
      }) ? ~gt(e + (r = r[t].value), "span", 0) ? e : D + _(e, "-start", "") + e + D + "grid-row-span:" + (~gt(r, "span", 0) ? pe(r, /\d+/) : +pe(r, /\d+/) - +pe(e, /\d+/)) + ";" : D + _(e, "-start", "") + e;
    case 4896:
    case 4128:
      return r && r.some(function(n) {
        return pe(n.props, /grid-\w+-start/);
      }) ? e : D + _(_(e, "-end", "-span"), "span ", "") + e;
    case 4095:
    case 3583:
    case 4068:
    case 2532:
      return _(e, /(.+)-inline(.+)/, L + "$1$2") + e;
    case 8116:
    case 7059:
    case 5753:
    case 5535:
    case 5445:
    case 5701:
    case 4933:
    case 4677:
    case 5533:
    case 5789:
    case 5021:
    case 4765:
      if (ue(e) - 1 - t > 6)
        switch (Y(e, t + 1)) {
          case 109:
            if (Y(e, t + 4) !== 45)
              break;
          case 102:
            return _(e, /(.+:)(.+)-([^]+)/, "$1" + L + "$2-$3$1" + et + (Y(e, t + 3) == 108 ? "$3" : "$2-$3")) + e;
          case 115:
            return ~gt(e, "stretch", 0) ? pn(_(e, "stretch", "fill-available"), t, r) + e : e;
        }
      break;
    case 5152:
    case 5920:
      return _(e, /(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/, function(n, i, a, s, u, c, p) {
        return D + i + ":" + a + p + (s ? D + i + "-span:" + (u ? c : +c - +a) + p : "") + e;
      });
    case 4949:
      if (Y(e, t + 6) === 121)
        return _(e, ":", ":" + L) + e;
      break;
    case 6444:
      switch (Y(e, Y(e, 14) === 45 ? 18 : 11)) {
        case 120:
          return _(e, /(.+:)([^;\s!]+)(;|(\s+)?!.+)?/, "$1" + L + (Y(e, 14) === 45 ? "inline-" : "") + "box$3$1" + L + "$2$3$1" + D + "$2box$3") + e;
        case 100:
          return _(e, ":", ":" + D) + e;
      }
      break;
    case 5719:
    case 2647:
    case 2135:
    case 3927:
    case 2391:
      return _(e, "scroll-", "scroll-snap-") + e;
  }
  return e;
}
function St(e, t) {
  for (var r = "", n = 0; n < e.length; n++)
    r += t(e[n], n, e, t) || "";
  return r;
}
function Xo(e, t, r, n) {
  switch (e.type) {
    case No:
      if (e.children.length)
        break;
    case Io:
    case lr:
      return e.return = e.return || e.value;
    case sn:
      return "";
    case cn:
      return e.return = e.value + "{" + St(e.children, n) + "}";
    case Et:
      if (!ue(e.value = e.props.join(",")))
        return "";
  }
  return ue(r = St(e.children, n)) ? e.return = e.value + "{" + r + "}" : "";
}
function Ko(e) {
  var t = dn(e);
  return function(r, n, i, a) {
    for (var s = "", u = 0; u < t; u++)
      s += e[u](r, n, i, a) || "";
    return s;
  };
}
function Zo(e) {
  return function(t) {
    t.root || (t = t.return) && e(t);
  };
}
function Jo(e, t, r, n) {
  if (e.length > -1 && !e.return)
    switch (e.type) {
      case lr:
        e.return = pn(e.value, e.length, r);
        return;
      case cn:
        return St([xe(e, { value: _(e.value, "@", "@" + L) })], n);
      case Et:
        if (e.length)
          return Do(r = e.props, function(i) {
            switch (pe(i, n = /(::plac\w+|:read-\w+)/)) {
              case ":read-only":
              case ":read-write":
                Me(xe(e, { props: [_(i, /:(read-\w+)/, ":" + et + "$1")] })), Me(xe(e, { props: [i] })), Jt(e, { props: Dr(r, n) });
                break;
              case "::placeholder":
                Me(xe(e, { props: [_(i, /:(plac\w+)/, ":" + L + "input-$1")] })), Me(xe(e, { props: [_(i, /:(plac\w+)/, ":" + et + "$1")] })), Me(xe(e, { props: [_(i, /:(plac\w+)/, D + "input-$1")] })), Me(xe(e, { props: [i] })), Jt(e, { props: Dr(r, n) });
                break;
            }
            return "";
          });
    }
}
var Qo = {
  animationIterationCount: 1,
  borderImageOutset: 1,
  borderImageSlice: 1,
  borderImageWidth: 1,
  boxFlex: 1,
  boxFlexGroup: 1,
  boxOrdinalGroup: 1,
  columnCount: 1,
  columns: 1,
  flex: 1,
  flexGrow: 1,
  flexPositive: 1,
  flexShrink: 1,
  flexNegative: 1,
  flexOrder: 1,
  gridRow: 1,
  gridRowEnd: 1,
  gridRowSpan: 1,
  gridRowStart: 1,
  gridColumn: 1,
  gridColumnEnd: 1,
  gridColumnSpan: 1,
  gridColumnStart: 1,
  msGridRow: 1,
  msGridRowSpan: 1,
  msGridColumn: 1,
  msGridColumnSpan: 1,
  fontWeight: 1,
  lineHeight: 1,
  opacity: 1,
  order: 1,
  orphans: 1,
  tabSize: 1,
  widows: 1,
  zIndex: 1,
  zoom: 1,
  WebkitLineClamp: 1,
  // SVG-related properties
  fillOpacity: 1,
  floodOpacity: 1,
  stopOpacity: 1,
  strokeDasharray: 1,
  strokeDashoffset: 1,
  strokeMiterlimit: 1,
  strokeOpacity: 1,
  strokeWidth: 1
}, ge = typeof process < "u" && process.env !== void 0 && (process.env.REACT_APP_SC_ATTR || process.env.SC_ATTR) || "data-styled", hn = "active", wt = "data-styled-version", We = "6.1.8", dr = `/*!sc*/
`, fr = typeof window < "u" && "HTMLElement" in window, ei = !!(typeof SC_DISABLE_SPEEDY == "boolean" ? SC_DISABLE_SPEEDY : typeof process < "u" && process.env !== void 0 && process.env.REACT_APP_SC_DISABLE_SPEEDY !== void 0 && process.env.REACT_APP_SC_DISABLE_SPEEDY !== "" ? process.env.REACT_APP_SC_DISABLE_SPEEDY !== "false" && process.env.REACT_APP_SC_DISABLE_SPEEDY : typeof process < "u" && process.env !== void 0 && process.env.SC_DISABLE_SPEEDY !== void 0 && process.env.SC_DISABLE_SPEEDY !== "" ? process.env.SC_DISABLE_SPEEDY !== "false" && process.env.SC_DISABLE_SPEEDY : process.env.NODE_ENV !== "production"), ti = {}, Fr = /invalid hook call/i, ut = /* @__PURE__ */ new Set(), gn = function(e, t) {
  if (process.env.NODE_ENV !== "production") {
    var r = t ? ' with the id of "'.concat(t, '"') : "", n = "The component ".concat(e).concat(r, ` has been created dynamically.
`) + `You may see this warning because you've called styled inside another component.
To resolve this only create new StyledComponents outside of any render method and function component.`, i = console.error;
    try {
      var a = !0;
      console.error = function(s) {
        for (var u = [], c = 1; c < arguments.length; c++)
          u[c - 1] = arguments[c];
        Fr.test(s) ? (a = !1, ut.delete(n)) : i.apply(void 0, Oe([s], u, !1));
      }, lo(), a && !ut.has(n) && (console.warn(n), ut.add(n));
    } catch (s) {
      Fr.test(s.message) && ut.delete(n);
    } finally {
      console.error = i;
    }
  }
}, Pt = Object.freeze([]), Be = Object.freeze({});
function yn(e, t, r) {
  return r === void 0 && (r = Be), e.theme !== r.theme && e.theme || t || r.theme;
}
var tr = /* @__PURE__ */ new Set(["a", "abbr", "address", "area", "article", "aside", "audio", "b", "base", "bdi", "bdo", "big", "blockquote", "body", "br", "button", "canvas", "caption", "cite", "code", "col", "colgroup", "data", "datalist", "dd", "del", "details", "dfn", "dialog", "div", "dl", "dt", "em", "embed", "fieldset", "figcaption", "figure", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "header", "hgroup", "hr", "html", "i", "iframe", "img", "input", "ins", "kbd", "keygen", "label", "legend", "li", "link", "main", "map", "mark", "menu", "menuitem", "meta", "meter", "nav", "noscript", "object", "ol", "optgroup", "option", "output", "p", "param", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "script", "section", "select", "small", "source", "span", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "textarea", "tfoot", "th", "thead", "time", "tr", "track", "u", "ul", "use", "var", "video", "wbr", "circle", "clipPath", "defs", "ellipse", "foreignObject", "g", "image", "line", "linearGradient", "marker", "mask", "path", "pattern", "polygon", "polyline", "radialGradient", "rect", "stop", "svg", "text", "tspan"]), ri = /[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g, ni = /(^-|-$)/g;
function Wr(e) {
  return e.replace(ri, "-").replace(ni, "");
}
var oi = /(a)(d)/gi, dt = 52, Br = function(e) {
  return String.fromCharCode(e + (e > 25 ? 39 : 97));
};
function rr(e) {
  var t, r = "";
  for (t = Math.abs(e); t > dt; t = t / dt | 0)
    r = Br(t % dt) + r;
  return (Br(t % dt) + r).replace(oi, "$1-$2");
}
var Dt, mn = 5381, Ee = function(e, t) {
  for (var r = t.length; r; )
    e = 33 * e ^ t.charCodeAt(--r);
  return e;
}, bn = function(e) {
  return Ee(mn, e);
};
function vn(e) {
  return rr(bn(e) >>> 0);
}
function xn(e) {
  return process.env.NODE_ENV !== "production" && typeof e == "string" && e || e.displayName || e.name || "Component";
}
function Mt(e) {
  return typeof e == "string" && (process.env.NODE_ENV === "production" || e.charAt(0) === e.charAt(0).toLowerCase());
}
var Sn = typeof Symbol == "function" && Symbol.for, wn = Sn ? Symbol.for("react.memo") : 60115, ii = Sn ? Symbol.for("react.forward_ref") : 60112, ai = { childContextTypes: !0, contextType: !0, contextTypes: !0, defaultProps: !0, displayName: !0, getDefaultProps: !0, getDerivedStateFromError: !0, getDerivedStateFromProps: !0, mixins: !0, propTypes: !0, type: !0 }, si = { name: !0, length: !0, prototype: !0, caller: !0, callee: !0, arguments: !0, arity: !0 }, $n = { $$typeof: !0, compare: !0, defaultProps: !0, displayName: !0, propTypes: !0, type: !0 }, ci = ((Dt = {})[ii] = { $$typeof: !0, render: !0, defaultProps: !0, displayName: !0, propTypes: !0 }, Dt[wn] = $n, Dt);
function Vr(e) {
  return ("type" in (t = e) && t.type.$$typeof) === wn ? $n : "$$typeof" in e ? ci[e.$$typeof] : ai;
  var t;
}
var li = Object.defineProperty, ui = Object.getOwnPropertyNames, qr = Object.getOwnPropertySymbols, di = Object.getOwnPropertyDescriptor, fi = Object.getPrototypeOf, Gr = Object.prototype;
function _n(e, t, r) {
  if (typeof t != "string") {
    if (Gr) {
      var n = fi(t);
      n && n !== Gr && _n(e, n, r);
    }
    var i = ui(t);
    qr && (i = i.concat(qr(t)));
    for (var a = Vr(e), s = Vr(t), u = 0; u < i.length; ++u) {
      var c = i[u];
      if (!(c in si || r && r[c] || s && c in s || a && c in a)) {
        var p = di(t, c);
        try {
          li(e, c, p);
        } catch {
        }
      }
    }
  }
  return e;
}
function Pe(e) {
  return typeof e == "function";
}
function pr(e) {
  return typeof e == "object" && "styledComponentId" in e;
}
function Ce(e, t) {
  return e && t ? "".concat(e, " ").concat(t) : e || t || "";
}
function $t(e, t) {
  if (e.length === 0)
    return "";
  for (var r = e[0], n = 1; n < e.length; n++)
    r += t ? t + e[n] : e[n];
  return r;
}
function Ve(e) {
  return e !== null && typeof e == "object" && e.constructor.name === Object.name && !("props" in e && e.$$typeof);
}
function nr(e, t, r) {
  if (r === void 0 && (r = !1), !r && !Ve(e) && !Array.isArray(e))
    return t;
  if (Array.isArray(t))
    for (var n = 0; n < t.length; n++)
      e[n] = nr(e[n], t[n]);
  else if (Ve(t))
    for (var n in t)
      e[n] = nr(e[n], t[n]);
  return e;
}
function hr(e, t) {
  Object.defineProperty(e, "toString", { value: t });
}
var pi = process.env.NODE_ENV !== "production" ? { 1: `Cannot create styled-component for component: %s.

`, 2: `Can't collect styles once you've consumed a \`ServerStyleSheet\`'s styles! \`ServerStyleSheet\` is a one off instance for each server-side render cycle.

- Are you trying to reuse it across renders?
- Are you accidentally calling collectStyles twice?

`, 3: `Streaming SSR is only supported in a Node.js environment; Please do not try to call this method in the browser.

`, 4: `The \`StyleSheetManager\` expects a valid target or sheet prop!

- Does this error occur on the client and is your target falsy?
- Does this error occur on the server and is the sheet falsy?

`, 5: `The clone method cannot be used on the client!

- Are you running in a client-like environment on the server?
- Are you trying to run SSR on the client?

`, 6: `Trying to insert a new style tag, but the given Node is unmounted!

- Are you using a custom target that isn't mounted?
- Does your document not have a valid head element?
- Have you accidentally removed a style tag manually?

`, 7: 'ThemeProvider: Please return an object from your "theme" prop function, e.g.\n\n```js\ntheme={() => ({})}\n```\n\n', 8: `ThemeProvider: Please make your "theme" prop an object.

`, 9: "Missing document `<head>`\n\n", 10: `Cannot find a StyleSheet instance. Usually this happens if there are multiple copies of styled-components loaded at once. Check out this issue for how to troubleshoot and fix the common cases where this situation can happen: https://github.com/styled-components/styled-components/issues/1941#issuecomment-417862021

`, 11: `_This error was replaced with a dev-time warning, it will be deleted for v4 final._ [createGlobalStyle] received children which will not be rendered. Please use the component without passing children elements.

`, 12: "It seems you are interpolating a keyframe declaration (%s) into an untagged string. This was supported in styled-components v3, but is not longer supported in v4 as keyframes are now injected on-demand. Please wrap your string in the css\\`\\` helper which ensures the styles are injected correctly. See https://www.styled-components.com/docs/api#css\n\n", 13: `%s is not a styled component and cannot be referred to via component selector. See https://www.styled-components.com/docs/advanced#referring-to-other-components for more details.

`, 14: `ThemeProvider: "theme" prop is required.

`, 15: "A stylis plugin has been supplied that is not named. We need a name for each plugin to be able to prevent styling collisions between different stylis configurations within the same app. Before you pass your plugin to `<StyleSheetManager stylisPlugins={[]}>`, please make sure each plugin is uniquely-named, e.g.\n\n```js\nObject.defineProperty(importedPlugin, 'name', { value: 'some-unique-name' });\n```\n\n", 16: `Reached the limit of how many styled components may be created at group %s.
You may only create up to 1,073,741,824 components. If you're creating components dynamically,
as for instance in your render method then you may be running into this limitation.

`, 17: `CSSStyleSheet could not be found on HTMLStyleElement.
Has styled-components' style tag been unmounted or altered by another script?
`, 18: "ThemeProvider: Please make sure your useTheme hook is within a `<ThemeProvider>`" } : {};
function hi() {
  for (var e = [], t = 0; t < arguments.length; t++)
    e[t] = arguments[t];
  for (var r = e[0], n = [], i = 1, a = e.length; i < a; i += 1)
    n.push(e[i]);
  return n.forEach(function(s) {
    r = r.replace(/%[a-z]/, s);
  }), r;
}
function Q(e) {
  for (var t = [], r = 1; r < arguments.length; r++)
    t[r - 1] = arguments[r];
  return process.env.NODE_ENV === "production" ? new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(e, " for more information.").concat(t.length > 0 ? " Args: ".concat(t.join(", ")) : "")) : new Error(hi.apply(void 0, Oe([pi[e]], t, !1)).trim());
}
var gi = function() {
  function e(t) {
    this.groupSizes = new Uint32Array(512), this.length = 512, this.tag = t;
  }
  return e.prototype.indexOfGroup = function(t) {
    for (var r = 0, n = 0; n < t; n++)
      r += this.groupSizes[n];
    return r;
  }, e.prototype.insertRules = function(t, r) {
    if (t >= this.groupSizes.length) {
      for (var n = this.groupSizes, i = n.length, a = i; t >= a; )
        if ((a <<= 1) < 0)
          throw Q(16, "".concat(t));
      this.groupSizes = new Uint32Array(a), this.groupSizes.set(n), this.length = a;
      for (var s = i; s < a; s++)
        this.groupSizes[s] = 0;
    }
    for (var u = this.indexOfGroup(t + 1), c = (s = 0, r.length); s < c; s++)
      this.tag.insertRule(u, r[s]) && (this.groupSizes[t]++, u++);
  }, e.prototype.clearGroup = function(t) {
    if (t < this.length) {
      var r = this.groupSizes[t], n = this.indexOfGroup(t), i = n + r;
      this.groupSizes[t] = 0;
      for (var a = n; a < i; a++)
        this.tag.deleteRule(n);
    }
  }, e.prototype.getGroup = function(t) {
    var r = "";
    if (t >= this.length || this.groupSizes[t] === 0)
      return r;
    for (var n = this.groupSizes[t], i = this.indexOfGroup(t), a = i + n, s = i; s < a; s++)
      r += "".concat(this.tag.getRule(s)).concat(dr);
    return r;
  }, e;
}(), bt = /* @__PURE__ */ new Map(), _t = /* @__PURE__ */ new Map(), vt = 1, ft = function(e) {
  if (bt.has(e))
    return bt.get(e);
  for (; _t.has(vt); )
    vt++;
  var t = vt++;
  if (process.env.NODE_ENV !== "production" && ((0 | t) < 0 || t > 1073741824))
    throw Q(16, "".concat(t));
  return bt.set(e, t), _t.set(t, e), t;
}, yi = function(e, t) {
  vt = t + 1, bt.set(e, t), _t.set(t, e);
}, mi = "style[".concat(ge, "][").concat(wt, '="').concat(We, '"]'), bi = new RegExp("^".concat(ge, '\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')), vi = function(e, t, r) {
  for (var n, i = r.split(","), a = 0, s = i.length; a < s; a++)
    (n = i[a]) && e.registerName(t, n);
}, xi = function(e, t) {
  for (var r, n = ((r = t.textContent) !== null && r !== void 0 ? r : "").split(dr), i = [], a = 0, s = n.length; a < s; a++) {
    var u = n[a].trim();
    if (u) {
      var c = u.match(bi);
      if (c) {
        var p = 0 | parseInt(c[1], 10), h = c[2];
        p !== 0 && (yi(h, p), vi(e, h, c[3]), e.getTag().insertRules(p, i)), i.length = 0;
      } else
        i.push(u);
    }
  }
};
function or() {
  return typeof __webpack_nonce__ < "u" ? __webpack_nonce__ : null;
}
var kn = function(e) {
  var t = document.head, r = e || t, n = document.createElement("style"), i = function(u) {
    var c = Array.from(u.querySelectorAll("style[".concat(ge, "]")));
    return c[c.length - 1];
  }(r), a = i !== void 0 ? i.nextSibling : null;
  n.setAttribute(ge, hn), n.setAttribute(wt, We);
  var s = or();
  return s && n.setAttribute("nonce", s), r.insertBefore(n, a), n;
}, Si = function() {
  function e(t) {
    this.element = kn(t), this.element.appendChild(document.createTextNode("")), this.sheet = function(r) {
      if (r.sheet)
        return r.sheet;
      for (var n = document.styleSheets, i = 0, a = n.length; i < a; i++) {
        var s = n[i];
        if (s.ownerNode === r)
          return s;
      }
      throw Q(17);
    }(this.element), this.length = 0;
  }
  return e.prototype.insertRule = function(t, r) {
    try {
      return this.sheet.insertRule(r, t), this.length++, !0;
    } catch {
      return !1;
    }
  }, e.prototype.deleteRule = function(t) {
    this.sheet.deleteRule(t), this.length--;
  }, e.prototype.getRule = function(t) {
    var r = this.sheet.cssRules[t];
    return r && r.cssText ? r.cssText : "";
  }, e;
}(), wi = function() {
  function e(t) {
    this.element = kn(t), this.nodes = this.element.childNodes, this.length = 0;
  }
  return e.prototype.insertRule = function(t, r) {
    if (t <= this.length && t >= 0) {
      var n = document.createTextNode(r);
      return this.element.insertBefore(n, this.nodes[t] || null), this.length++, !0;
    }
    return !1;
  }, e.prototype.deleteRule = function(t) {
    this.element.removeChild(this.nodes[t]), this.length--;
  }, e.prototype.getRule = function(t) {
    return t < this.length ? this.nodes[t].textContent : "";
  }, e;
}(), $i = function() {
  function e(t) {
    this.rules = [], this.length = 0;
  }
  return e.prototype.insertRule = function(t, r) {
    return t <= this.length && (this.rules.splice(t, 0, r), this.length++, !0);
  }, e.prototype.deleteRule = function(t) {
    this.rules.splice(t, 1), this.length--;
  }, e.prototype.getRule = function(t) {
    return t < this.length ? this.rules[t] : "";
  }, e;
}(), Yr = fr, _i = { isServer: !fr, useCSSOMInjection: !ei }, tt = function() {
  function e(t, r, n) {
    t === void 0 && (t = Be), r === void 0 && (r = {});
    var i = this;
    this.options = G(G({}, _i), t), this.gs = r, this.names = new Map(n), this.server = !!t.isServer, !this.server && fr && Yr && (Yr = !1, function(a) {
      for (var s = document.querySelectorAll(mi), u = 0, c = s.length; u < c; u++) {
        var p = s[u];
        p && p.getAttribute(ge) !== hn && (xi(a, p), p.parentNode && p.parentNode.removeChild(p));
      }
    }(this)), hr(this, function() {
      return function(a) {
        for (var s = a.getTag(), u = s.length, c = "", p = function(g) {
          var m = function(S) {
            return _t.get(S);
          }(g);
          if (m === void 0)
            return "continue";
          var $ = a.names.get(m), j = s.getGroup(g);
          if ($ === void 0 || j.length === 0)
            return "continue";
          var b = "".concat(ge, ".g").concat(g, '[id="').concat(m, '"]'), P = "";
          $ !== void 0 && $.forEach(function(S) {
            S.length > 0 && (P += "".concat(S, ","));
          }), c += "".concat(j).concat(b, '{content:"').concat(P, '"}').concat(dr);
        }, h = 0; h < u; h++)
          p(h);
        return c;
      }(i);
    });
  }
  return e.registerId = function(t) {
    return ft(t);
  }, e.prototype.reconstructWithOptions = function(t, r) {
    return r === void 0 && (r = !0), new e(G(G({}, this.options), t), this.gs, r && this.names || void 0);
  }, e.prototype.allocateGSInstance = function(t) {
    return this.gs[t] = (this.gs[t] || 0) + 1;
  }, e.prototype.getTag = function() {
    return this.tag || (this.tag = (t = function(r) {
      var n = r.useCSSOMInjection, i = r.target;
      return r.isServer ? new $i(i) : n ? new Si(i) : new wi(i);
    }(this.options), new gi(t)));
    var t;
  }, e.prototype.hasNameForId = function(t, r) {
    return this.names.has(t) && this.names.get(t).has(r);
  }, e.prototype.registerName = function(t, r) {
    if (ft(t), this.names.has(t))
      this.names.get(t).add(r);
    else {
      var n = /* @__PURE__ */ new Set();
      n.add(r), this.names.set(t, n);
    }
  }, e.prototype.insertRules = function(t, r, n) {
    this.registerName(t, r), this.getTag().insertRules(ft(t), n);
  }, e.prototype.clearNames = function(t) {
    this.names.has(t) && this.names.get(t).clear();
  }, e.prototype.clearRules = function(t) {
    this.getTag().clearGroup(ft(t)), this.clearNames(t);
  }, e.prototype.clearTag = function() {
    this.tag = void 0;
  }, e;
}(), ki = /&/g, Ei = /^\s*\/\/.*$/gm;
function En(e, t) {
  return e.map(function(r) {
    return r.type === "rule" && (r.value = "".concat(t, " ").concat(r.value), r.value = r.value.replaceAll(",", ",".concat(t, " ")), r.props = r.props.map(function(n) {
      return "".concat(t, " ").concat(n);
    })), Array.isArray(r.children) && r.type !== "@keyframes" && (r.children = En(r.children, t)), r;
  });
}
function Cn(e) {
  var t, r, n, i = e === void 0 ? Be : e, a = i.options, s = a === void 0 ? Be : a, u = i.plugins, c = u === void 0 ? Pt : u, p = function(m, $, j) {
    return j.startsWith(r) && j.endsWith(r) && j.replaceAll(r, "").length > 0 ? ".".concat(t) : m;
  }, h = c.slice();
  h.push(function(m) {
    m.type === Et && m.value.includes("&") && (m.props[0] = m.props[0].replace(ki, r).replace(n, p));
  }), s.prefix && h.push(Jo), h.push(Xo);
  var g = function(m, $, j, b) {
    $ === void 0 && ($ = ""), j === void 0 && (j = ""), b === void 0 && (b = "&"), t = b, r = $, n = new RegExp("\\".concat(r, "\\b"), "g");
    var P = m.replace(Ei, ""), S = Yo(j || $ ? "".concat(j, " ").concat($, " { ").concat(P, " }") : P);
    s.namespace && (S = En(S, s.namespace));
    var v = [];
    return St(S, Ko(h.concat(Zo(function(R) {
      return v.push(R);
    })))), v;
  };
  return g.hash = c.length ? c.reduce(function(m, $) {
    return $.name || Q(15), Ee(m, $.name);
  }, mn).toString() : "", g;
}
var Ci = new tt(), ir = Cn(), gr = M.createContext({ shouldForwardProp: void 0, styleSheet: Ci, stylis: ir });
gr.Consumer;
var Ri = M.createContext(void 0);
function kt() {
  return en(gr);
}
function Rn(e) {
  var t = sr(e.stylisPlugins), r = t[0], n = t[1], i = kt().styleSheet, a = ht(function() {
    var c = i;
    return e.sheet ? c = e.sheet : e.target && (c = c.reconstructWithOptions({ target: e.target }, !1)), e.disableCSSOMInjection && (c = c.reconstructWithOptions({ useCSSOMInjection: !1 })), c;
  }, [e.disableCSSOMInjection, e.sheet, e.target, i]), s = ht(function() {
    return Cn({ options: { namespace: e.namespace, prefix: e.enableVendorPrefixes }, plugins: r });
  }, [e.enableVendorPrefixes, e.namespace, r]);
  Qr(function() {
    Lo(r, e.stylisPlugins) || n(e.stylisPlugins);
  }, [e.stylisPlugins]);
  var u = ht(function() {
    return { shouldForwardProp: e.shouldForwardProp, styleSheet: a, stylis: s };
  }, [e.shouldForwardProp, a, s]);
  return M.createElement(gr.Provider, { value: u }, M.createElement(Ri.Provider, { value: s }, e.children));
}
var Ur = function() {
  function e(t, r) {
    var n = this;
    this.inject = function(i, a) {
      a === void 0 && (a = ir);
      var s = n.name + a.hash;
      i.hasNameForId(n.id, s) || i.insertRules(n.id, s, a(n.rules, s, "@keyframes"));
    }, this.name = t, this.id = "sc-keyframes-".concat(t), this.rules = r, hr(this, function() {
      throw Q(12, String(n.name));
    });
  }
  return e.prototype.getName = function(t) {
    return t === void 0 && (t = ir), this.name + t.hash;
  }, e;
}(), Oi = function(e) {
  return e >= "A" && e <= "Z";
};
function Xr(e) {
  for (var t = "", r = 0; r < e.length; r++) {
    var n = e[r];
    if (r === 1 && n === "-" && e[0] === "-")
      return e;
    Oi(n) ? t += "-" + n.toLowerCase() : t += n;
  }
  return t.startsWith("ms-") ? "-" + t : t;
}
var On = function(e) {
  return e == null || e === !1 || e === "";
}, Pn = function(e) {
  var t, r, n = [];
  for (var i in e) {
    var a = e[i];
    e.hasOwnProperty(i) && !On(a) && (Array.isArray(a) && a.isCss || Pe(a) ? n.push("".concat(Xr(i), ":"), a, ";") : Ve(a) ? n.push.apply(n, Oe(Oe(["".concat(i, " {")], Pn(a), !1), ["}"], !1)) : n.push("".concat(Xr(i), ": ").concat((t = i, (r = a) == null || typeof r == "boolean" || r === "" ? "" : typeof r != "number" || r === 0 || t in Qo || t.startsWith("--") ? String(r).trim() : "".concat(r, "px")), ";")));
  }
  return n;
};
function Se(e, t, r, n) {
  if (On(e))
    return [];
  if (pr(e))
    return [".".concat(e.styledComponentId)];
  if (Pe(e)) {
    if (!Pe(a = e) || a.prototype && a.prototype.isReactComponent || !t)
      return [e];
    var i = e(t);
    return process.env.NODE_ENV === "production" || typeof i != "object" || Array.isArray(i) || i instanceof Ur || Ve(i) || i === null || console.error("".concat(xn(e), " is not a styled component and cannot be referred to via component selector. See https://www.styled-components.com/docs/advanced#referring-to-other-components for more details.")), Se(i, t, r, n);
  }
  var a;
  return e instanceof Ur ? r ? (e.inject(r, n), [e.getName(n)]) : [e] : Ve(e) ? Pn(e) : Array.isArray(e) ? Array.prototype.concat.apply(Pt, e.map(function(s) {
    return Se(s, t, r, n);
  })) : [e.toString()];
}
function Tn(e) {
  for (var t = 0; t < e.length; t += 1) {
    var r = e[t];
    if (Pe(r) && !pr(r))
      return !1;
  }
  return !0;
}
var Pi = bn(We), Ti = function() {
  function e(t, r, n) {
    this.rules = t, this.staticRulesId = "", this.isStatic = process.env.NODE_ENV === "production" && (n === void 0 || n.isStatic) && Tn(t), this.componentId = r, this.baseHash = Ee(Pi, r), this.baseStyle = n, tt.registerId(r);
  }
  return e.prototype.generateAndInjectStyles = function(t, r, n) {
    var i = this.baseStyle ? this.baseStyle.generateAndInjectStyles(t, r, n) : "";
    if (this.isStatic && !n.hash)
      if (this.staticRulesId && r.hasNameForId(this.componentId, this.staticRulesId))
        i = Ce(i, this.staticRulesId);
      else {
        var a = $t(Se(this.rules, t, r, n)), s = rr(Ee(this.baseHash, a) >>> 0);
        if (!r.hasNameForId(this.componentId, s)) {
          var u = n(a, ".".concat(s), void 0, this.componentId);
          r.insertRules(this.componentId, s, u);
        }
        i = Ce(i, s), this.staticRulesId = s;
      }
    else {
      for (var c = Ee(this.baseHash, n.hash), p = "", h = 0; h < this.rules.length; h++) {
        var g = this.rules[h];
        if (typeof g == "string")
          p += g, process.env.NODE_ENV !== "production" && (c = Ee(c, g));
        else if (g) {
          var m = $t(Se(g, t, r, n));
          c = Ee(c, m + h), p += m;
        }
      }
      if (p) {
        var $ = rr(c >>> 0);
        r.hasNameForId(this.componentId, $) || r.insertRules(this.componentId, $, n(p, ".".concat($), void 0, this.componentId)), i = Ce(i, $);
      }
    }
    return i;
  }, e;
}(), qe = M.createContext(void 0);
qe.Consumer;
function jn() {
  var e = en(qe);
  if (!e)
    throw Q(18);
  return e;
}
function ji(e) {
  var t = M.useContext(qe), r = ht(function() {
    return function(n, i) {
      if (!n)
        throw Q(14);
      if (Pe(n)) {
        var a = n(i);
        if (process.env.NODE_ENV !== "production" && (a === null || Array.isArray(a) || typeof a != "object"))
          throw Q(7);
        return a;
      }
      if (Array.isArray(n) || typeof n != "object")
        throw Q(8);
      return i ? G(G({}, i), n) : n;
    }(e.theme, t);
  }, [e.theme, t]);
  return e.children ? M.createElement(qe.Provider, { value: r }, e.children) : null;
}
var Ht = {}, Kr = /* @__PURE__ */ new Set();
function Ai(e, t, r) {
  var n = pr(e), i = e, a = !Mt(e), s = t.attrs, u = s === void 0 ? Pt : s, c = t.componentId, p = c === void 0 ? function(T, N) {
    var k = typeof T != "string" ? "sc" : Wr(T);
    Ht[k] = (Ht[k] || 0) + 1;
    var f = "".concat(k, "-").concat(vn(We + k + Ht[k]));
    return N ? "".concat(N, "-").concat(f) : f;
  }(t.displayName, t.parentComponentId) : c, h = t.displayName, g = h === void 0 ? function(T) {
    return Mt(T) ? "styled.".concat(T) : "Styled(".concat(xn(T), ")");
  }(e) : h, m = t.displayName && t.componentId ? "".concat(Wr(t.displayName), "-").concat(t.componentId) : t.componentId || p, $ = n && i.attrs ? i.attrs.concat(u).filter(Boolean) : u, j = t.shouldForwardProp;
  if (n && i.shouldForwardProp) {
    var b = i.shouldForwardProp;
    if (t.shouldForwardProp) {
      var P = t.shouldForwardProp;
      j = function(T, N) {
        return b(T, N) && P(T, N);
      };
    } else
      j = b;
  }
  var S = new Ti(r, m, n ? i.componentStyle : void 0);
  function v(T, N) {
    return function(k, f, y) {
      var W = k.attrs, ee = k.componentStyle, q = k.defaultProps, oe = k.foldedComponentIds, U = k.styledComponentId, Z = k.target, le = M.useContext(qe), ot = kt(), Ae = k.shouldForwardProp || ot.shouldForwardProp;
      process.env.NODE_ENV !== "production" && jr(U);
      var Ue = yn(f, le, q) || Be, te = function(Ie, de, be) {
        for (var ie, ae = G(G({}, de), { className: void 0, theme: be }), ve = 0; ve < Ie.length; ve += 1) {
          var Ne = Pe(ie = Ie[ve]) ? ie(ae) : ie;
          for (var se in Ne)
            ae[se] = se === "className" ? Ce(ae[se], Ne[se]) : se === "style" ? G(G({}, ae[se]), Ne[se]) : Ne[se];
        }
        return de.className && (ae.className = Ce(ae.className, de.className)), ae;
      }(W, f, Ue), ye = te.as || Z, me = {};
      for (var X in te)
        te[X] === void 0 || X[0] === "$" || X === "as" || X === "theme" && te.theme === Ue || (X === "forwardedAs" ? me.as = te.forwardedAs : Ae && !Ae(X, ye) || (me[X] = te[X], Ae || process.env.NODE_ENV !== "development" || jo(X) || Kr.has(X) || !tr.has(ye) || (Kr.add(X), console.warn('styled-components: it looks like an unknown prop "'.concat(X, '" is being sent through to the DOM, which will likely trigger a React console error. If you would like automatic filtering of unknown props, you can opt-into that behavior via `<StyleSheetManager shouldForwardProp={...}>` (connect an API like `@emotion/is-prop-valid`) or consider using transient props (`$` prefix for automatic filtering.)')))));
      var Le = function(Ie, de) {
        var be = kt(), ie = Ie.generateAndInjectStyles(de, be.styleSheet, be.stylis);
        return process.env.NODE_ENV !== "production" && jr(ie), ie;
      }(ee, te);
      process.env.NODE_ENV !== "production" && k.warnTooManyClasses && k.warnTooManyClasses(Le);
      var Xe = Ce(oe, U);
      return Le && (Xe += " " + Le), te.className && (Xe += " " + te.className), me[Mt(ye) && !tr.has(ye) ? "class" : "className"] = Xe, me.ref = y, uo(ye, me);
    }(R, T, N);
  }
  v.displayName = g;
  var R = M.forwardRef(v);
  return R.attrs = $, R.componentStyle = S, R.displayName = g, R.shouldForwardProp = j, R.foldedComponentIds = n ? Ce(i.foldedComponentIds, i.styledComponentId) : "", R.styledComponentId = m, R.target = n ? i.target : e, Object.defineProperty(R, "defaultProps", { get: function() {
    return this._foldedDefaultProps;
  }, set: function(T) {
    this._foldedDefaultProps = n ? function(N) {
      for (var k = [], f = 1; f < arguments.length; f++)
        k[f - 1] = arguments[f];
      for (var y = 0, W = k; y < W.length; y++)
        nr(N, W[y], !0);
      return N;
    }({}, i.defaultProps, T) : T;
  } }), process.env.NODE_ENV !== "production" && (gn(g, m), R.warnTooManyClasses = /* @__PURE__ */ function(T, N) {
    var k = {}, f = !1;
    return function(y) {
      if (!f && (k[y] = !0, Object.keys(k).length >= 200)) {
        var W = N ? ' with the id of "'.concat(N, '"') : "";
        console.warn("Over ".concat(200, " classes were generated for component ").concat(T).concat(W, `.
`) + `Consider using the attrs method, together with a style object for frequently changed styles.
Example:
  const Component = styled.div.attrs(props => ({
    style: {
      background: props.background,
    },
  }))\`width: 100%;\`

  <Component />`), f = !0, k = {};
      }
    };
  }(g, m)), hr(R, function() {
    return ".".concat(R.styledComponentId);
  }), a && _n(R, e, { attrs: !0, componentStyle: !0, displayName: !0, foldedComponentIds: !0, shouldForwardProp: !0, styledComponentId: !0, target: !0 }), R;
}
function Zr(e, t) {
  for (var r = [e[0]], n = 0, i = t.length; n < i; n += 1)
    r.push(t[n], e[n + 1]);
  return r;
}
var Jr = function(e) {
  return Object.assign(e, { isCss: !0 });
};
function C(e) {
  for (var t = [], r = 1; r < arguments.length; r++)
    t[r - 1] = arguments[r];
  if (Pe(e) || Ve(e))
    return Jr(Se(Zr(Pt, Oe([e], t, !0))));
  var n = e;
  return t.length === 0 && n.length === 1 && typeof n[0] == "string" ? Se(n) : Jr(Se(Zr(n, t)));
}
function ar(e, t, r) {
  if (r === void 0 && (r = Be), !t)
    throw Q(1, t);
  var n = function(i) {
    for (var a = [], s = 1; s < arguments.length; s++)
      a[s - 1] = arguments[s];
    return e(t, r, C.apply(void 0, Oe([i], a, !1)));
  };
  return n.attrs = function(i) {
    return ar(e, t, G(G({}, r), { attrs: Array.prototype.concat(r.attrs, i).filter(Boolean) }));
  }, n.withConfig = function(i) {
    return ar(e, t, G(G({}, r), i));
  }, n;
}
var An = function(e) {
  return ar(Ai, e);
}, H = An;
tr.forEach(function(e) {
  H[e] = An(e);
});
var Li = function() {
  function e(t, r) {
    this.rules = t, this.componentId = r, this.isStatic = Tn(t), tt.registerId(this.componentId + 1);
  }
  return e.prototype.createStyles = function(t, r, n, i) {
    var a = i($t(Se(this.rules, r, n, i)), ""), s = this.componentId + t;
    n.insertRules(s, s, a);
  }, e.prototype.removeStyles = function(t, r) {
    r.clearRules(this.componentId + t);
  }, e.prototype.renderStyles = function(t, r, n, i) {
    t > 2 && tt.registerId(this.componentId + t), this.removeStyles(t, n), this.createStyles(t, r, n, i);
  }, e;
}();
function Ii(e) {
  for (var t = [], r = 1; r < arguments.length; r++)
    t[r - 1] = arguments[r];
  var n = C.apply(void 0, Oe([e], t, !1)), i = "sc-global-".concat(vn(JSON.stringify(n))), a = new Li(n, i);
  process.env.NODE_ENV !== "production" && gn(i);
  var s = function(c) {
    var p = kt(), h = M.useContext(qe), g = M.useRef(p.styleSheet.allocateGSInstance(i)).current;
    return process.env.NODE_ENV !== "production" && M.Children.count(c.children) && console.warn("The global style component ".concat(i, " was given child JSX. createGlobalStyle does not render children.")), process.env.NODE_ENV !== "production" && n.some(function(m) {
      return typeof m == "string" && m.indexOf("@import") !== -1;
    }) && console.warn("Please do not use @import CSS syntax in createGlobalStyle at this time, as the CSSOM APIs we use in production do not handle it well. Instead, we recommend using a library such as react-helmet to inject a typical <link> meta tag to the stylesheet, or simply embedding it manually in your index.html <head> section for a simpler app."), p.styleSheet.server && u(g, c, p.styleSheet, h, p.stylis), M.useLayoutEffect(function() {
      if (!p.styleSheet.server)
        return u(g, c, p.styleSheet, h, p.stylis), function() {
          return a.removeStyles(g, p.styleSheet);
        };
    }, [g, c, p.styleSheet, h, p.stylis]), null;
  };
  function u(c, p, h, g, m) {
    if (a.isStatic)
      a.renderStyles(c, ti, h, m);
    else {
      var $ = G(G({}, p), { theme: yn(p, g, s.defaultProps) });
      a.renderStyles(c, $, h, m);
    }
  }
  return M.memo(s);
}
var Ni = function() {
  function e() {
    var t = this;
    this._emitSheetCSS = function() {
      var r = t.instance.toString(), n = or(), i = $t([n && 'nonce="'.concat(n, '"'), "".concat(ge, '="true"'), "".concat(wt, '="').concat(We, '"')].filter(Boolean), " ");
      return "<style ".concat(i, ">").concat(r, "</style>");
    }, this.getStyleTags = function() {
      if (t.sealed)
        throw Q(2);
      return t._emitSheetCSS();
    }, this.getStyleElement = function() {
      var r;
      if (t.sealed)
        throw Q(2);
      var n = ((r = {})[ge] = "", r[wt] = We, r.dangerouslySetInnerHTML = { __html: t.instance.toString() }, r), i = or();
      return i && (n.nonce = i), [M.createElement("style", G({}, n, { key: "sc-0-0" }))];
    }, this.seal = function() {
      t.sealed = !0;
    }, this.instance = new tt({ isServer: !0 }), this.sealed = !1;
  }
  return e.prototype.collectStyles = function(t) {
    if (this.sealed)
      throw Q(2);
    return M.createElement(Rn, { sheet: this.instance }, t);
  }, e.prototype.interleaveWithNodeStream = function(t) {
    throw Q(3);
  }, e;
}();
process.env.NODE_ENV !== "production" && typeof navigator < "u" && navigator.product === "ReactNative" && console.warn(`It looks like you've imported 'styled-components' on React Native.
Perhaps you're looking to import 'styled-components/native'?
Read more about this at https://www.styled-components.com/docs/basics#react-native`);
var pt = "__sc-".concat(ge, "__");
process.env.NODE_ENV !== "production" && process.env.NODE_ENV !== "test" && typeof window < "u" && (window[pt] || (window[pt] = 0), window[pt] === 1 && console.warn(`It looks like there are several instances of 'styled-components' initialized in this application. This may cause dynamic styles to not render properly, errors during the rehydration process, a missing theme prop, and makes your application bigger without good reason.

See https://s-c.sh/2BAXzed for more info.`), window[pt] += 1);
function pa({ children: e }) {
  const [t] = sr(() => new Ni());
  return Oo.useServerInsertedHTML(() => {
    const r = t.getStyleElement();
    return t.instance.clearTag(), /* @__PURE__ */ w.jsx(w.Fragment, { children: r });
  }), typeof window < "u" ? /* @__PURE__ */ w.jsx(w.Fragment, { children: e }) : /* @__PURE__ */ w.jsx(Rn, { sheet: t.instance, enableVendorPrefixes: !0, children: e });
}
const zi = (e) => Ii`
html,
body {
	margin: 0;
	padding: 0;
	min-height: 100%;
	scroll-behavior: smooth;
	background-color: ${e.colors.light};
}

body {
	font-family: "Inter", sans-serif;
	-moz-osx-font-smoothing: grayscale;
	-webkit-text-size-adjust: 100%;
	-webkit-font-smoothing: antialiased;
}

* {
	box-sizing: border-box;
	min-width: 0;
}

pre,
code,
kbd,
samp {
	font-family: monospace, monospace;
}

pre,
code,
kbd,
samp,
blockquote,
p,
a,
h1,
h2,
h3,
h4,
h5,
h6,
ul li,
ol li {
	margin: 0;
	padding: 0;
	color: ${e.colors.dark};
}

a {
	color: ${e.isDark ? e.colors.dark : e.colors.primary};
}

ol,
ul {
	list-style: none;
	margin: 0;
	padding: 0;
}

figure {
	margin: 0;
}

fieldset {
	appearance: none;
	border: none;
}

button,
input,
a,
img,
svg,
svg * {
	transition: all 0.3s ease;
}

strong,
b {
	font-weight: 700;
}`;
function Di({ ...e }) {
  const t = jn();
  return /* @__PURE__ */ w.jsx(
    "svg",
    {
      width: "12",
      height: "10",
      viewBox: "0 0 12 10",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      ...e,
      children: /* @__PURE__ */ w.jsx(
        "path",
        {
          d: "M10 2L4.4 8L2 5.75",
          stroke: t.colors.primary,
          strokeWidth: "3",
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      )
    }
  );
}
function Mi({ ...e }) {
  const t = jn();
  return /* @__PURE__ */ w.jsx(
    "svg",
    {
      width: "16",
      height: "10",
      viewBox: "0 0 16 10",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      ...e,
      children: /* @__PURE__ */ w.jsx(
        "path",
        {
          d: "M2 2L8 8L14 2",
          stroke: t.colors.primary,
          strokeWidth: "3",
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      )
    }
  );
}
const yr = {
  xs: 0,
  sm: 576,
  md: 768,
  lg: 992,
  xl: 1200,
  xxl: 1440,
  xxxl: 1920
};
function I(e) {
  return `@media screen and (min-width: ${yr[e]}px)`;
}
const Ln = {
  maxWidth: { xs: "1280px", xxxl: "1440px" },
  padding: { xs: "20px", lg: "40px" },
  radius: { xs: "6px", lg: "12px", xl: "30px" },
  gridGap: { xs: "20px", lg: "40px" }
}, Hi = {
  primaryLight: "#91aec4",
  primary: "#4d6f8b",
  primaryDark: "#194569",
  secondaryLight: "#a4b17b",
  secondary: "#5c6e46",
  secondaryDark: "#354c2b",
  tertiaryLight: "#ebccb9",
  tertiary: "#816b5a",
  tertiaryDark: "#675445",
  grayLight: "#e5e7eb",
  gray: "#9ca3af",
  grayDark: "#4b5563",
  success: "#84cc16",
  error: "#ef4444",
  warning: "#eab308",
  info: "#06b6d4",
  dark: "#000000",
  light: "#ffffff"
}, Fi = {
  primaryLight: "#91aec4",
  primary: "#4d6f8b",
  primaryDark: "#194569",
  secondaryLight: "#a4b17b",
  secondary: "#5c6e46",
  secondaryDark: "#354c2b",
  tertiaryLight: "#ebccb9",
  tertiary: "#816b5a",
  tertiaryDark: "#675445",
  grayLight: "#1a1a1a",
  gray: "#454444",
  grayDark: "#808080",
  success: "#84cc16",
  error: "#ef4444",
  warning: "#eab308",
  info: "#06b6d4",
  dark: "#ffffff",
  light: "#000000"
}, In = {
  xs: "0px 4px 4px 0px rgba(18, 18, 18, 0.04), 0px 1px 3px 0px rgba(39, 41, 45, 0.02)",
  sm: "0px 4px 4px 0px rgba(18, 18, 18, 0.08), 0px 1px 3px 0px rgba(39, 41, 45, 0.04)",
  md: "0px 8px 8px 0px rgba(18, 18, 18, 0.16), 0px 2px 3px 0px rgba(39, 41, 45, 0.06)",
  lg: "0px 16px 24px 0px rgba(18, 18, 18, 0.20), 0px 2px 3px 0px rgba(39, 41, 45, 0.08)",
  xl: "0px 24px 32px 0px rgba(18, 18, 18, 0.24), 0px 2px 3px 0px rgba(39, 41, 45, 0.12)"
}, Nn = {
  text: "Inter",
  head: "Inter",
  mono: "monospace"
}, zn = {
  hero1: { xs: "72px", lg: "128px" },
  hero2: { xs: "60px", lg: "96px" },
  hero3: { xs: "36px", lg: "72px" },
  h1: { xs: "40px", lg: "60px" },
  h2: { xs: "30px", lg: "36px" },
  h3: { xs: "28px", lg: "30px" },
  h4: { xs: "26px", lg: "24px" },
  h5: { xs: "18px", lg: "20px" },
  h6: { xs: "16px", lg: "18px" },
  text: { xs: "14px", lg: "16px" },
  strong: { xs: "14px", lg: "16px" },
  small: { xs: "12px", lg: "14px" },
  blockquote: { xs: "16px", lg: "18px" },
  code: { xs: "14px", lg: "16px" },
  button: { xs: "16px", lg: "16px" },
  buttonBig: { xs: "18px", lg: "18px" },
  input: { xs: "16px", lg: "16px" },
  inputBig: { xs: "18px", lg: "18px" }
}, Dn = {
  hero1: { xs: "1.10", lg: "1.10" },
  hero2: { xs: "1.10", lg: "1.10" },
  hero3: { xs: "1.20", lg: "1.10" },
  h1: { xs: "1.50", lg: "1.40" },
  h2: { xs: "1.50", lg: "1.50" },
  h3: { xs: "1.30", lg: "1.50" },
  h4: { xs: "1.30", lg: "1.50" },
  h5: { xs: "1.60", lg: "1.50" },
  h6: { xs: "1.60", lg: "1.60" },
  text: { xs: "1.70", lg: "1.70" },
  strong: { xs: "1.70", lg: "1.70" },
  small: { xs: "1.70", lg: "1.70" },
  blockquote: { xs: "1.70", lg: "1.70" },
  code: { xs: "1.70", lg: "1.70" },
  button: { xs: "1.00", lg: "1.00" },
  buttonBig: { xs: "1.00", lg: "1.00" },
  input: { xs: "1.00", lg: "1.00" },
  inputBig: { xs: "1.00", lg: "1.00" }
}, nt = {
  breakpoints: yr,
  spacing: Ln,
  colors: Hi,
  shadows: In,
  fonts: Nn,
  fontSizes: zn,
  lineHeights: Dn,
  isDark: !1
}, ha = {
  breakpoints: yr,
  spacing: Ln,
  colors: Fi,
  shadows: In,
  fonts: Nn,
  fontSizes: zn,
  lineHeights: Dn,
  isDark: !0
}, he = C`
  box-sizing: border-box;
  appearance: none;
  border: none;
  background: none;
  padding: 0;
  margin: 0;
  cursor: pointer;
  outline: none;
`, mr = C`
  cursor: text;
  min-width: 100px;
`, je = (e) => {
  if (e)
    return C`
      width: 100%;
    `;
}, Te = (e, t, r) => {
  if (e)
    return C`
      border-color: ${r == null ? void 0 : r.colors.error};
    `;
  if (t)
    return C`
      border-color: ${r == null ? void 0 : r.colors.success};
    `;
}, br = (e) => e === "big" ? C`
      height: 60px;
    ` : C`
    height: 50px;
  `, J = (e, t) => C`
  ${I(e)} {
    gap: ${t === "none" ? "0" : `${t}px`};
  }
`, we = (e, t) => C`
  ${I(e)} {
    grid-template-columns: repeat(${t || 3}, minmax(0, 1fr));
  }
`, $e = (e, t) => C`
  ${I(e)} {
    grid-column: span ${t};
  }
`, _e = (e, t) => C`
  ${I(e)} {
    padding: ${t === "none" ? "0" : `${t}px`};
  }
`, ke = (e, t) => C`
  ${I(e)} {
    justify-content: ${t && `${t}`};
  }
`, ga = (e) => C`
  font-size: ${e.fontSizes.hero1.xs};
  line-height: ${e.lineHeights.hero1.xs};

  ${I("lg")} {
    font-size: ${e.fontSizes.hero1.lg};
    line-height: ${e.lineHeights.hero1.lg};
  }
`, ya = (e) => C`
  font-size: ${e.fontSizes.hero2.xs};
  line-height: ${e.lineHeights.hero2.xs};

  ${I("lg")} {
    font-size: ${e.fontSizes.hero2.lg};
    line-height: ${e.lineHeights.hero2.lg};
  }
`, ma = (e) => C`
  font-size: ${e.fontSizes.hero3.xs};
  line-height: ${e.lineHeights.hero3.xs};

  ${I("lg")} {
    font-size: ${e.fontSizes.hero3.lg};
    line-height: ${e.lineHeights.hero3.lg};
  }
`, ba = (e) => C`
  font-size: ${e.fontSizes.h1.xs};
  line-height: ${e.lineHeights.h1.xs};

  ${I("lg")} {
    font-size: ${e.fontSizes.h1.lg};
    line-height: ${e.lineHeights.h1.lg};
  }
`, va = (e) => C`
  font-size: ${e.fontSizes.h2.xs};
  line-height: ${e.lineHeights.h2.xs};

  ${I("lg")} {
    font-size: ${e.fontSizes.h2.lg};
    line-height: ${e.lineHeights.h2.lg};
  }
`, xa = (e) => C`
  font-size: ${e.fontSizes.h3.xs};
  line-height: ${e.lineHeights.h3.xs};

  ${I("lg")} {
    font-size: ${e.fontSizes.h3.lg};
    line-height: ${e.lineHeights.h3.lg};
  }
`, Sa = (e) => C`
  font-size: ${e.fontSizes.h4.xs};
  line-height: ${e.lineHeights.h4.xs};

  ${I("lg")} {
    font-size: ${e.fontSizes.h4.lg};
    line-height: ${e.lineHeights.h4.lg};
  }
`, wa = (e) => C`
  font-size: ${e.fontSizes.h5.xs};
  line-height: ${e.lineHeights.h5.xs};

  ${I("lg")} {
    font-size: ${e.fontSizes.h5.lg};
    line-height: ${e.lineHeights.h5.lg};
  }
`, $a = (e) => C`
  font-size: ${e.fontSizes.h6.xs};
  line-height: ${e.lineHeights.h6.xs};

  ${I("lg")} {
    font-size: ${e.fontSizes.h6.lg};
    line-height: ${e.lineHeights.h6.lg};
  }
`, _a = (e) => C`
  font-size: ${e.fontSizes.text.xs};
  line-height: ${e.lineHeights.text.xs};

  ${I("lg")} {
    font-size: ${e.fontSizes.text.lg};
    line-height: ${e.lineHeights.text.lg};
  }
`, ka = (e) => C`
  font-size: ${e.fontSizes.strong.xs};
  line-height: ${e.lineHeights.strong.xs};

  ${I("lg")} {
    font-size: ${e.fontSizes.strong.lg};
    line-height: ${e.lineHeights.strong.lg};
  }
`, Ea = (e) => C`
  font-size: ${e.fontSizes.small.xs};
  line-height: ${e.lineHeights.small.xs};

  ${I("lg")} {
    font-size: ${e.fontSizes.small.lg};
    line-height: ${e.lineHeights.small.lg};
  }
`, Ca = (e) => C`
  font-size: ${e.fontSizes.blockquote.xs};
  line-height: ${e.lineHeights.blockquote.xs};

  ${I("lg")} {
    font-size: ${e.fontSizes.blockquote.lg};
    line-height: ${e.lineHeights.blockquote.lg};
  }
`, Ra = (e) => C`
  font-size: ${e.fontSizes.code.xs};
  line-height: ${e.lineHeights.code.xs};

  ${I("lg")} {
    font-size: ${e.fontSizes.code.lg};
    line-height: ${e.lineHeights.code.lg};
  }
`, Oa = (e) => C`
  font-size: ${e.fontSizes.button.xs};
  line-height: ${e.lineHeights.button.xs};

  ${I("lg")} {
    font-size: ${e.fontSizes.button.lg};
    line-height: ${e.lineHeights.button.lg};
  }
`, Pa = (e) => C`
  font-size: ${e.fontSizes.buttonBig.xs};
  line-height: ${e.lineHeights.buttonBig.xs};

  ${I("lg")} {
    font-size: ${e.fontSizes.buttonBig.lg};
    line-height: ${e.lineHeights.buttonBig.lg};
  }
`, Ta = (e) => C`
  font-size: ${e.fontSizes.input.xs};
  line-height: ${e.lineHeights.input.xs};

  ${I("lg")} {
    font-size: ${e.fontSizes.input.lg};
    line-height: ${e.lineHeights.input.lg};
  }
`, ja = (e) => C`
  font-size: ${e.fontSizes.inputBig.xs};
  line-height: ${e.lineHeights.inputBig.xs};

  ${I("lg")} {
    font-size: ${e.fontSizes.inputBig.lg};
    line-height: ${e.lineHeights.inputBig.lg};
  }
`, Wi = fo({
  setTheme: null
});
function Aa({
  children: e,
  theme: t,
  themeDark: r
}) {
  const [n, i] = sr(t);
  Qr(() => {
    if (!r)
      return i(t);
    localStorage.theme === "dark" || !("theme" in localStorage) && window.matchMedia("(prefers-color-scheme: dark)").matches ? (document.documentElement.classList.add("dark"), i(r)) : (document.documentElement.classList.remove("dark"), i(t));
  }, []);
  const a = zi(n);
  return /* @__PURE__ */ w.jsx(ji, { theme: n, children: /* @__PURE__ */ w.jsxs(Wi.Provider, { value: { setTheme: i }, children: [
    /* @__PURE__ */ w.jsx(a, {}),
    e
  ] }) });
}
const Bi = H.div`
  margin: auto;
  width: 100%;
  max-width: ${({ theme: e, $fluid: t }) => t ? "100%" : e.spacing.maxWidth.xs};
  ${({ $textAlign: e }) => e && `text-align: ${e}`};
  padding: ${({ $padding: e, theme: t }) => e && `${e}px` || t.spacing.padding.xs};

  ${I("lg")} {
    padding: ${({ $padding: e, theme: t }) => e && `${e}px` || t.spacing.padding.lg};
  }

  ${I("xxxl")} {
    max-width: ${({ theme: e, $fluid: t }) => t ? "100%" : e.spacing.maxWidth.xxxl};
  }

  ${({ $xsPadding: e }) => e && _e("xs", e)}
  ${({ $smPadding: e }) => e && _e("sm", e)}
	${({ $mdPadding: e }) => e && _e("md", e)}
	${({ $lgPadding: e }) => e && _e("lg", e)}
	${({ $xlPadding: e }) => e && _e("xl", e)}
	${({ $xxlPadding: e }) => e && _e("xxl", e)}
	${({ $xxxlPadding: e }) => e && _e("xxxl", e)}
`;
function Vi({ theme: e = nt, ...t }) {
  return /* @__PURE__ */ w.jsx(Bi, { ...t, theme: e, children: t.children });
}
const qi = H(Vi)`
  background: ${({ theme: e }) => e.colors.light};
  border-radius: ${({ theme: e }) => e.spacing.radius.lg};
  border: solid 1px ${({ theme: e }) => e.colors.grayLight};
`;
function La({ theme: e = nt, ...t }) {
  return /* @__PURE__ */ w.jsx(qi, { ...t, theme: e, children: t.children });
}
const Gi = (e, t, r, n, i, a) => C`
  ${he};
  font-family: inherit;
  display: inline-block;
  padding: 15px 30px;
  border-radius: 100px;
  font-weight: 600;
  white-space: nowrap;
  hyphens: auto;
  color: ${e.isDark ? e.colors.dark : e.colors.light};
  text-decoration: none;
  transition: all 0.3s ease;

  ${!a && t === "primary" && C`
    color: ${n ? e.colors.primary : e.isDark ? e.colors.dark : e.colors.light};
    background: ${n ? "transparent" : e.colors.primary};
    border: solid 2px ${e.colors.primary};
    box-shadow: 0 0 0 0px ${e.colors.primary};

    @media (hover: hover) {
      &:hover {
        background: ${n ? "transparent" : e.colors.primaryDark};
        border-color: ${e.colors.primaryDark};
        ${n && `color: ${e.colors.primaryDark}`};
      }
    }

    &:focus {
      box-shadow: 0 0 0 4px ${e.colors.primaryLight};
    }

    &:active {
      box-shadow: 0 0 0 2px ${e.colors.primaryLight};
    }
  `}

  ${!a && t === "secondary" && C`
    color: ${n ? e.colors.secondary : e.isDark ? e.colors.dark : e.colors.light};
    background: ${n ? "transparent" : e.colors.secondary};
    border: solid 2px ${e.colors.secondary};
    box-shadow: 0 0 0 0px ${e.colors.secondary};

    @media (hover: hover) {
      &:hover {
        background: ${n ? "transparent" : e.colors.secondaryDark};
        border-color: ${e.colors.secondaryDark};
        ${n && `color: ${e.colors.secondaryDark}`};
      }
    }

    &:focus {
      box-shadow: 0 0 0 4px ${e.colors.secondaryLight};
    }

    &:active {
      box-shadow: 0 0 0 2px ${e.colors.secondaryLight};
    }
  `}

	${!a && t === "tertiary" && C`
    color: ${n ? e.colors.tertiary : e.isDark ? e.colors.dark : e.colors.light};
    background: ${n ? "transparent" : e.colors.tertiary};
    border: solid 2px ${e.colors.tertiary};
    box-shadow: 0 0 0 0px ${e.colors.tertiary};

    @media (hover: hover) {
      &:hover {
        background: ${n ? "transparent" : e.colors.tertiaryDark};
        border-color: ${e.colors.tertiaryDark};
        ${n && `color: ${e.colors.tertiaryDark}`};
      }
    }

    &:focus {
      box-shadow: 0 0 0 4px ${e.colors.tertiaryLight};
    }

    &:active {
      box-shadow: 0 0 0 2px ${e.colors.tertiaryLight};
    }
  `}

	${br(r)}

	${r === "big" ? `font-size: ${e.fontSizes.buttonBig.lg};
			line-height: ${e.lineHeights.buttonBig.lg};
	` : `font-size: ${e.fontSizes.button.lg};
			line-height: ${e.lineHeights.button.lg};`}

	${a && `
		cursor: not-allowed;
		background: ${e.colors.grayLight};
		border-color: ${e.colors.grayLight};
		color: ${e.colors.gray};
	`}

	${i && "width: 100%;"}
`, Yi = H.button`
  ${({ theme: e, $variant: t, $size: r, $outline: n, $fullWidth: i, disabled: a }) => Gi(e, t, r, n, i, a)}
`;
function Ia({ $variant: e = "primary", ...t }) {
  return /* @__PURE__ */ w.jsx(Yi, { $variant: e, ...t, children: t.children });
}
const Ui = H.div`
  ${({ $span: e }) => e && `
		grid-column: span ${e};
	`}

  ${({ $xsSpan: e }) => e && $e("xs", e)}
	${({ $smSpan: e }) => e && $e("sm", e)}
	${({ $mdSpan: e }) => e && $e("md", e)}
	${({ $lgSpan: e }) => e && $e("lg", e)}
	${({ $xlSpan: e }) => e && $e("xl", e)}
	${({ $xxlSpan: e }) => e && $e("xxl", e)}
	${({ $xxxlSpan: e }) => e && $e("xxxl", e)}
`;
function Na({ theme: e = nt, ...t }) {
  return /* @__PURE__ */ w.jsx(Ui, { ...t, theme: e, children: t.children });
}
const Xi = H.div`
  display: flex;
  justify-content: ${({ $justifyContent: e }) => e || "flex-start"};
  flex-wrap: ${({ $wrap: e }) => e || "wrap"};
  gap: ${({ $gap: e, theme: t }) => e && `${e}px` || t.spacing.gridGap.xs};

  ${I("lg")} {
    gap: ${({ $gap: e, theme: t }) => e && `${e}px` || t.spacing.gridGap.lg};
  }

  ${({ $xsGap: e }) => e && J("xs", e)}
  ${({ $xsJustifyContent: e }) => e && ke("xs", e)}
	${({ $smGap: e }) => e && J("sm", e)}
	${({ $smJustifyContent: e }) => e && ke("sm", e)}
	${({ $mdGap: e }) => e && J("md", e)}
	${({ $mdJustifyContent: e }) => e && ke("md", e)}
	${({ $lgGap: e }) => e && J("lg", e)}
	${({ $lgJustifyContent: e }) => e && ke("lg", e)}
	${({ $xlGap: e }) => e && J("xl", e)}
	${({ $xlJustifyContent: e }) => e && ke("xl", e)}
	${({ $xxlGap: e }) => e && J("xxl", e)}
	${({ $xxlJustifyContent: e }) => e && ke("xxl", e)}
	${({ $xxxlGap: e }) => e && J("xxxl", e)}
	${({ $xxxlJustifyContent: e }) => e && ke("xxxl", e)}
`;
function za({ theme: e = nt, ...t }) {
  return /* @__PURE__ */ w.jsx(Xi, { ...t, theme: e, children: t.children });
}
const Ki = H.div`
  display: grid;
  grid-template-columns: ${({ $cols: e }) => `repeat(${e || 3}, minmax(0, 1fr))`};
  gap: ${({ $gap: e, theme: t }) => e && `${e}px` || t.spacing.gridGap.xs};

  ${I("lg")} {
    gap: ${({ $gap: e, theme: t }) => e && `${e}px` || t.spacing.gridGap.lg};
  }

  ${({ $xsGap: e }) => e && J("xs", e)}
  ${({ $smGap: e }) => e && J("sm", e)}
	${({ $mdGap: e }) => e && J("md", e)}
	${({ $lgGap: e }) => e && J("lg", e)}
	${({ $xlGap: e }) => e && J("xl", e)}
	${({ $xxlGap: e }) => e && J("xxl", e)}
	${({ $xxxlGap: e }) => e && J("xxxl", e)}

	${({ $xsCols: e }) => e && we("xs", e)}
	${({ $smCols: e }) => e && we("sm", e)}
	${({ $mdCols: e }) => e && we("md", e)}
	${({ $lgCols: e }) => e && we("lg", e)}
	${({ $xlCols: e }) => e && we("xl", e)}
	${({ $xxlCols: e }) => e && we("xxl", e)}
	${({ $xxxlCols: e }) => e && we("xxxl", e)}
`;
function Da({ theme: e = nt, ...t }) {
  return /* @__PURE__ */ w.jsx(Ki, { ...t, theme: e, children: t.children });
}
const rt = H.span`
  display: inline-flex;
  flex-wrap: ${({ type: e }) => e === "checkbox" || e === "radio" ? "nowrap" : "wrap"};
  gap: 10px;
  align-items: center;

  ${({ $fullWidth: e }) => je(!!e)}
`, Ge = H.label`
  display: inline-block;
  color: ${({ theme: e }) => e.colors.grayDark};
  font-size: ${({ theme: e }) => e.fontSizes.text.lg};
  line-height: ${({ theme: e }) => e.lineHeights.text.lg};
`, Zi = H.input`
  ${he};
  ${mr};
  font-family: inherit;
  display: inline-block;
  padding: 17px 15px;
  border-radius: ${({ theme: e }) => e.spacing.radius.xs};
  font-weight: 400;
  white-space: nowrap;
  hyphens: auto;
  color: ${({ theme: e }) => e.colors.dark};
  background: ${({ theme: e }) => e.colors.light};
  border: solid 2px ${({ theme: e }) => e.colors.grayLight};
  box-shadow: 0 0 0 0px ${({ theme: e }) => e.colors.primaryLight};
  transition: all 0.3s ease;

  &::placeholder {
    color: ${({ theme: e }) => e.colors.gray};
  }

  @media (hover: hover) {
    &:hover:not([disabled]) {
      border-color: ${({ theme: e }) => e.colors.primary};
    }
  }

  &:focus:not([disabled]) {
    box-shadow: 0 0 0 4px ${({ theme: e }) => e.colors.primaryLight};
    border-color: ${({ theme: e }) => e.colors.primary};
  }

  &:active:not([disabled]) {
    box-shadow: 0 0 0 2px ${({ theme: e }) => e.colors.primaryLight};
  }

  ${({ $size: e }) => br(e)}

  ${({ $size: e, theme: t }) => e === "big" ? `font-size: ${t.fontSizes.inputBig.lg};
			line-height: ${t.lineHeights.inputBig.lg};
	` : `font-size: ${t.fontSizes.input.lg};
			line-height: ${t.lineHeights.input.lg};`}

	${({ $error: e, $success: t, theme: r }) => Te(!!e, !!t, r)}

	${({ disabled: e, theme: t }) => e && `cursor: not-allowed;
		background: ${t.colors.grayLight};
		border-color: ${t.colors.gray};
		color: ${t.colors.gray};
	`}

	${({ $fullWidth: e }) => je(!!e)}
`, Ji = H.span`
  display: inline-flex;
  position: relative;
  line-height: 0;

  & em {
    display: block;
    border-radius: 50%;
    background: ${({ theme: e }) => e.colors.primary};
  }

  & svg,
  & em {
    object-fit: contain;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) scale(0.7);
    opacity: 0;
    pointer-events: none;
    transition: all 0.3s ease;
  }
`, Qi = H.input`
  ${he};
  display: inline-block;
  border: solid 2px ${({ theme: e }) => e.colors.grayLight};
  box-shadow: 0 0 0 0px ${({ theme: e }) => e.colors.primaryLight};
  transition: all 0.3s ease;

  @media (hover: hover) {
    &:hover:not([disabled]) {
      border-color: ${({ theme: e }) => e.colors.primary};
    }
  }

  &:focus:not([disabled]) {
    box-shadow: 0 0 0 4px ${({ theme: e }) => e.colors.primaryLight};
    border-color: ${({ theme: e }) => e.colors.primary};
  }

  &:active:not([disabled]) {
    box-shadow: 0 0 0 2px ${({ theme: e }) => e.colors.primaryLight};
  }

  ${({ type: e, theme: t }) => e === "checkbox" ? `border-radius: ${t.spacing.radius.xs};` : "border-radius: 50%;"}

  ${({ disabled: e, theme: t }) => e && `cursor: not-allowed;
		background: ${t.colors.grayLight};
		border-color: ${t.colors.gray};
		color: ${t.colors.gray};
	`}

	${({ $error: e, $success: t, theme: r }) => Te(!!e, !!t, r)}

	${({ $size: e }) => e === "big" ? `
					min-width: 32px;
					width: 32px;
					min-height: 32px;
					height: 32px;

					& ~ svg {
						min-width: 18px;
						width: 18px;
						min-height: 18px;
						height: 18px;
					}

					& ~ em {
						min-width: 14px;
						width: 14px;
						min-height: 14px;
						height: 14px;
					}
				` : `
					min-width: 22px;
					width: 22px;
					min-height: 22px;
					height: 22px;

					& ~ svg {
						min-width: 12px;
						width: 12px;
						min-height: 12px;
						height: 12px;
					}

					& ~ em {
						min-width: 8px;
						width: 8px;
						min-height: 8px;
						height: 8px;
					}
				`}

	&:checked ~ svg,
	&:checked ~ em {
    opacity: 1;
    transform: translate(-50%, -50%) scale(1);
  }
`;
function Ma({ ...e }) {
  return e.type === "checkbox" || e.type === "radio" ? /* @__PURE__ */ w.jsxs(rt, { $fullWidth: e.$fullWidth, type: e.type, children: [
    /* @__PURE__ */ w.jsxs(Ji, { children: [
      /* @__PURE__ */ w.jsx(Qi, { ...e }),
      !e.disabled && e.type === "checkbox" ? /* @__PURE__ */ w.jsx(Di, {}) : /* @__PURE__ */ w.jsx("em", {})
    ] }),
    e.$label && /* @__PURE__ */ w.jsx(Ge, { htmlFor: e.id, children: e.$label })
  ] }) : /* @__PURE__ */ w.jsxs(rt, { $fullWidth: e.$fullWidth, type: e.type, children: [
    e.$label && /* @__PURE__ */ w.jsx(Ge, { htmlFor: e.id, children: e.$label }),
    /* @__PURE__ */ w.jsx(Zi, { ...e })
  ] });
}
const Mn = (e) => `max-width: ${e}px;`;
function ea(e) {
  return Object.keys(e).filter((t) => t.startsWith("$")).map((t) => {
    const r = t.substring(1);
    return e[t] && I(r) + `{ ${Mn(e[t])} }`;
  }).join("");
}
const ta = H.div`
  display: block;
  margin: auto;

  ${({ $size: e }) => `
		${e && Mn(e)};
	`}
  ${(e) => ea(e)}
`;
function Ha({ ...e }) {
  return /* @__PURE__ */ w.jsx(ta, { ...e, children: e.children });
}
const ra = H.span`
  display: inline-flex;
  flex-wrap: ${({ type: e }) => e === "checkbox" || e === "radio" ? "fprnowrap" : "wrap"};
  gap: 10px;
  align-items: center;

  ${({ $fullWidth: e }) => je(!!e)}
`, na = H.input`
  ${he};
  padding: 0;
  height: 10px;
  font-size: 0;
  background: transparent;
  min-width: 100px;

  &::-webkit-slider-runnable-track {
    width: 100%;
    cursor: pointer;
    border-radius: ${({ theme: e }) => e.spacing.radius.xl};
    border: solid 2px ${({ theme: e }) => e.colors.grayLight};
    box-shadow: 0 0 0 0 ${({ theme: e }) => e.colors.primaryLight};
    transition: all 0.3s ease;
    ${({ $error: e, $success: t, theme: r }) => Te(!!e, !!t, r)}
  }

  &::-moz-range-track {
    width: 100%;
    cursor: pointer;
    border-radius: ${({ theme: e }) => e.spacing.radius.xl};
    border: solid 2px ${({ theme: e }) => e.colors.grayLight};
    box-shadow: 0 0 0 0 ${({ theme: e }) => e.colors.primaryLight};
    transition: all 0.3s ease;
    ${({ $error: e, $success: t, theme: r }) => Te(!!e, !!t, r)}
  }

  &::-webkit-slider-thumb {
    ${he};
    background: ${({ theme: e }) => e.colors.primary};
    border: 0 solid transparent;
    border-radius: 50%;
    transition: all 0.3s ease;
  }

  &::-moz-range-thumb {
    ${he};
    background: ${({ theme: e }) => e.colors.primary};
    border: 0 solid transparent;
    border-radius: 50%;
    transition: all 0.3s ease;
  }

  @media (hover: hover) {
    &:hover:not([disabled]) {
      &::-webkit-slider-runnable-track {
        border: solid 2px ${({ theme: e }) => e.colors.primary};
      }

      &::-moz-range-track {
        border: solid 2px ${({ theme: e }) => e.colors.primary};
      }
    }
  }

  &:focus:not([disabled]) {
    &::-webkit-slider-runnable-track {
      border: solid 2px ${({ theme: e }) => e.colors.primary};
      box-shadow: 0 0 0 4px ${({ theme: e }) => e.colors.primaryLight};
    }
    &::-webkit-slider-thumb {
      box-shadow: 0 0 0 4px ${({ theme: e }) => e.colors.primaryLight};
    }
    &::-moz-range-track {
      border: solid 2px ${({ theme: e }) => e.colors.primary};
      box-shadow: 0 0 0 4px ${({ theme: e }) => e.colors.primaryLight};
    }
    &::-moz-range-thumb {
      box-shadow: 0 0 0 4px ${({ theme: e }) => e.colors.primaryLight};
    }
  }

  &:active:not([disabled]) {
    &::-webkit-slider-runnable-track {
      box-shadow: 0 0 0 2px ${({ theme: e }) => e.colors.primaryLight};
    }
    &::-webkit-slider-thumb {
      box-shadow: 0 0 0 2px ${({ theme: e }) => e.colors.primaryLight};
    }
    &::-moz-range-track {
      box-shadow: 0 0 0 2px ${({ theme: e }) => e.colors.primaryLight};
    }
    &::-moz-range-thumb {
      box-shadow: 0 0 0 2px ${({ theme: e }) => e.colors.primaryLight};
    }
  }

  ${({ disabled: e, theme: t }) => e && `
		cursor: not-allowed;

		&::-webkit-slider-runnable-track {
			background: ${t.colors.grayLight};
			cursor: not-allowed;
		}

		&::-moz-range-track {
			background: ${t.colors.grayLight};
			cursor: not-allowed;
		}

		&::-webkit-slider-thumb {
			background: ${t.colors.gray};
			cursor: not-allowed;
		}

		&::-moz-range-thumb {
			background: ${t.colors.gray};
			cursor: not-allowed;
		}
	`}

  ${({ $fullWidth: e }) => je(!!e)}

	${({ $size: e }) => e === "big" ? `
					height: 32px;

					&::-webkit-slider-runnable-track {
						height: 14px;
					}

					&::-moz-range-track {
						height: 10px;
					}

					&::-webkit-slider-thumb {
						width: 32px;
						height: 32px;
						margin-top: -11px;
					}

					&::-moz-range-thumb {
						width: 32px;
						height: 32px;
					}
				` : `
					height: 22px;

					&::-webkit-slider-runnable-track {
						height: 10px;
					}

					&::-moz-range-track {
						height: 6px;
					}

					&::-webkit-slider-thumb {
						width: 22px;
						height: 22px;
						margin-top: -8px;
					}

					&::-moz-range-thumb {
						width: 22px;
						height: 22px;
					}
				`}
`;
function Fa({ ...e }) {
  return /* @__PURE__ */ w.jsxs(ra, { $fullWidth: e.$fullWidth, children: [
    e.$label && /* @__PURE__ */ w.jsx(Ge, { htmlFor: e.id, children: e.$label }),
    /* @__PURE__ */ w.jsx(na, { ...e, type: "range" })
  ] });
}
const oa = H.select`
  ${he};
  ${mr};
  font-family: inherit;
  display: inline-block;
  padding: 15px;
  border-radius: ${({ theme: e }) => e.spacing.radius.xs};
  font-weight: 400;
  white-space: nowrap;
  hyphens: auto;
  color: ${({ theme: e }) => e.colors.dark};
  background: ${({ theme: e }) => e.colors.light};
  border: solid 2px ${({ theme: e }) => e.colors.grayLight};
  box-shadow: 0 0 0 0px ${({ theme: e }) => e.colors.primaryLight};
  transition: all 0.3s ease;

  &::placeholder {
    color: ${({ theme: e }) => e.colors.gray};
  }

  @media (hover: hover) {
    &:hover:not([disabled]) {
      border-color: ${({ theme: e }) => e.colors.primary};
    }
  }

  &:focus:not([disabled]) {
    box-shadow: 0 0 0 4px ${({ theme: e }) => e.colors.primaryLight};
    border-color: ${({ theme: e }) => e.colors.primary};
  }

  &:active:not([disabled]) {
    box-shadow: 0 0 0 2px ${({ theme: e }) => e.colors.primaryLight};
  }

  ${({ $size: e }) => br(e)}

  ${({ $size: e, theme: t }) => e === "big" ? `font-size: ${t.fontSizes.inputBig.lg};
			line-height: ${t.lineHeights.inputBig.lg};
	` : `font-size: ${t.fontSizes.input.lg};
			line-height: ${t.lineHeights.input.lg};`}

	${({ $error: e, $success: t, theme: r }) => Te(!!e, !!t, r)}

	${({ disabled: e, theme: t }) => e && `cursor: not-allowed;
		background: ${t.colors.grayLight};
		border-color: ${t.colors.gray};
		color: ${t.colors.gray};
	`}

	${({ $fullWidth: e }) => je(!!e)}
`, ia = H.span`
  position: relative;
  ${({ $fullWidth: e }) => je(!!e)}

  & svg {
    position: absolute;
    top: 50%;
    right: 15px;
    transform: translateY(-50%) rotate(0);
    transition: all 0.3s ease;
    pointer-events: none;
  }

  & select {
    padding-right: 40px;
  }

  & select:active:not([disabled]) ~ svg,
  & select:focus:not([disabled]) ~ svg {
    transform: translateY(-50%) rotate(180deg);
  }
`;
function Wa({ ...e }) {
  return /* @__PURE__ */ w.jsxs(rt, { $fullWidth: e.$fullWidth, children: [
    e.$label && /* @__PURE__ */ w.jsx(Ge, { htmlFor: e.id, children: e.$label }),
    /* @__PURE__ */ w.jsxs(ia, { $fullWidth: e.$fullWidth, children: [
      /* @__PURE__ */ w.jsx(oa, { ...e, children: e.children }),
      /* @__PURE__ */ w.jsx(Mi, {})
    ] })
  ] });
}
const Hn = (e, t) => t ? `display: inline-block;
			max-height: 0;
			min-width: ${e}px;
			max-width: ${e}px;` : `display: block;
			min-height: ${e}px;
			max-height: ${e}px;`;
function aa(e) {
  return Object.keys(e).filter((t) => t.startsWith("$")).map((t) => {
    const r = t.substring(1);
    return e[t] && I(r) + `{ ${Hn(e[t], e.$horizontal || !1)} }`;
  }).join("");
}
const sa = H.span`
  ${({ $horizontal: e, $size: t }) => `
		${t && t !== "none" && Hn(t, e || !1)};
		${t === "none" && "display: none;"};
	`}
  ${(e) => aa(e)}
`;
function Ba({ ...e }) {
  return /* @__PURE__ */ w.jsx(sa, { ...e });
}
const ca = H.textarea`
  ${he};
  ${mr};
  font-family: inherit;
  display: inline-block;
  padding: 15px;
  border-radius: ${({ theme: e }) => e.spacing.radius.xs};
  font-weight: 400;
  white-space: nowrap;
  hyphens: auto;
  color: ${({ theme: e }) => e.colors.dark};
  background: ${({ theme: e }) => e.colors.light};
  border: solid 2px ${({ theme: e }) => e.colors.grayLight};
  box-shadow: 0 0 0 0px ${({ theme: e }) => e.colors.primaryLight};
  transition: all 0.3s ease;
  min-height: 80px;

  &::placeholder {
    color: ${({ theme: e }) => e.colors.gray};
  }

  @media (hover: hover) {
    &:hover:not([disabled]) {
      border-color: ${({ theme: e }) => e.colors.primary};
    }
  }

  &:focus:not([disabled]) {
    box-shadow: 0 0 0 4px ${({ theme: e }) => e.colors.primaryLight};
    border-color: ${({ theme: e }) => e.colors.primary};
  }

  &:active:not([disabled]) {
    box-shadow: 0 0 0 2px ${({ theme: e }) => e.colors.primaryLight};
  }

  ${({ $size: e, theme: t }) => e === "big" ? `font-size: ${t.fontSizes.inputBig.lg};
			line-height: ${t.lineHeights.text.lg};
	` : `font-size: ${t.fontSizes.input.lg};
			line-height: ${t.lineHeights.text.lg};`}

  ${({ $error: e, $success: t, theme: r }) => Te(!!e, !!t, r)}

	${({ disabled: e, theme: t }) => e && `cursor: not-allowed;
		background: ${t.colors.grayLight};
		border-color: ${t.colors.gray};
		color: ${t.colors.gray};
	`}

	${({ $fullWidth: e }) => je(!!e)}
`;
function Va({ ...e }) {
  return /* @__PURE__ */ w.jsxs(rt, { $fullWidth: e.$fullWidth, children: [
    e.$label && /* @__PURE__ */ w.jsx(Ge, { htmlFor: e.id, children: e.$label }),
    /* @__PURE__ */ w.jsx(ca, { ...e, children: e.children })
  ] });
}
const la = H.span`
  display: inline-block;
  margin: auto 0;
  position: relative;
  vertical-align: middle;
`, ua = H.span`
  display: block;
  border: solid 2px ${({ theme: e }) => e.colors.grayLight};
  background: ${({ theme: e }) => e.colors.light};
  border-radius: ${({ theme: e }) => e.spacing.radius.xl};
  pointer-events: none;
  transition: all 0.3s ease;
  box-shadow: 0 0 0 0 ${({ theme: e }) => e.colors.primaryLight};
  transform: none;
  width: ${({ $size: e }) => e === "big" ? "56px" : "46px"};
  height: ${({ $size: e }) => e === "big" ? "32px" : "22px"};

  ${({ $error: e, $success: t, theme: r }) => Te(!!e, !!t, r)}

  &::before,
	&::after {
    content: "";
    display: block;
    position: absolute;
  }

  &::before {
    top: 5px;
    left: 5px;
    width: calc(100% - 10px);
    height: calc(100% - 10px);
    max-width: 0;
    border-radius: ${({ theme: e }) => e.spacing.radius.xl};
    background: ${({ theme: e }) => e.colors.light};
    transition: all 0.3s ease;
  }

  &::after {
    left: 0;
    top: 0;
    border-radius: 50%;
    transition: all 0.3s ease;
    transform: translateX(0);
    background: ${({ theme: e }) => e.colors.primary};
    width: ${({ $size: e }) => e === "big" ? "32px" : "22px"};
    height: ${({ $size: e }) => e === "big" ? "32px" : "22px"};
  }
`, da = H.input`
  ${he};
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  outline: none;
  z-index: 10;

  &:checked ~ .fake-toggle {
    &::before {
      max-width: 46px;
      background: ${({ theme: e }) => e.colors.primaryLight};
    }

    &::after {
      transform: translateX(25px);
    }
  }

  @media (hover: hover) {
    &:hover:not([disabled]) ~ .fake-toggle {
      border-color: ${({ theme: e }) => e.colors.primary};
    }
  }

  &:focus:not([disabled]) ~ .fake-toggle {
    outline: none;
    border-color: ${({ theme: e }) => e.colors.primary};
    box-shadow: 0 0 0 4px ${({ theme: e }) => e.colors.primaryLight};
  }

  &:active:not([disabled]) ~ .fake-toggle {
    box-shadow: 0 0 0 2px ${({ theme: e }) => e.colors.primaryLight};
  }

  ${({ disabled: e, theme: t }) => e && `cursor: not-allowed;

		& ~ .fake-toggle {
			border-color: ${t.colors.gray};

			&::before {
				background: ${t.colors.grayLight};
			}

			&::after {
				background: ${t.colors.gray};
			}
		}`}
`;
function qa({ type: e = "checkbox", ...t }) {
  return /* @__PURE__ */ w.jsxs(rt, { $fullWidth: t.$fullWidth, children: [
    /* @__PURE__ */ w.jsxs(la, { children: [
      /* @__PURE__ */ w.jsx(da, { ...t, type: e }),
      /* @__PURE__ */ w.jsx(
        ua,
        {
          $error: t.$error,
          $success: t.$success,
          className: "fake-toggle",
          $size: t.$size
        }
      )
    ] }),
    t.$label && /* @__PURE__ */ w.jsx(Ge, { htmlFor: t.id, children: t.$label })
  ] });
}
export {
  La as Box,
  Ia as Button,
  Aa as CherryThemeProvider,
  Na as Col,
  Vi as Container,
  za as Flex,
  zi as GlobalStyles,
  Da as Grid,
  Mi as IconArrow,
  Di as IconCheck,
  Ma as Input,
  Ha as MaxWidth,
  Fa as Range,
  Wa as Select,
  Ba as Space,
  pa as StyledComponentsRegistry,
  ia as StyledIconWrapper,
  rt as StyledInputWrapper,
  Ge as StyledLabel,
  Va as Textarea,
  Wi as ThemeContext,
  qa as Toggle,
  yr as breakpoints,
  Gi as buttonStyles,
  Hi as colors,
  Fi as colorsDark,
  zn as fontSizes,
  Nn as fonts,
  br as formElementHeightStyles,
  je as fullWidthStyles,
  $e as generateColSpanStyles,
  we as generateColsStyles,
  J as generateGapStyles,
  ke as generateJustifyContentStyles,
  _e as generatePaddingStyles,
  Dn as lineHeights,
  I as mq,
  he as resetButton,
  mr as resetInput,
  In as shadows,
  Ln as spacing,
  Te as statusBorderStyles,
  Ca as styledBlockquote,
  Oa as styledButton,
  Pa as styledButtonBig,
  Ra as styledCode,
  ba as styledH1,
  va as styledH2,
  xa as styledH3,
  Sa as styledH4,
  wa as styledH5,
  $a as styledH6,
  ga as styledHero1,
  ya as styledHero2,
  ma as styledHero3,
  Ta as styledInput,
  ja as styledInputBig,
  Ea as styledSmall,
  ka as styledStrong,
  _a as styledText,
  nt as theme,
  ha as themeDark
};
