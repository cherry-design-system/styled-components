import M, { useState as fr, useMemo as ht, useEffect as an, useContext as sn, useRef as yo, useDebugValue as Nr, createElement as mo, createContext as bo, forwardRef as K } from "react";
function vo(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var Bt = { exports: {} }, Xe = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var zr;
function xo() {
  if (zr) return Xe;
  zr = 1;
  var e = M, t = Symbol.for("react.element"), r = Symbol.for("react.fragment"), n = Object.prototype.hasOwnProperty, i = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, a = { key: !0, ref: !0, __self: !0, __source: !0 };
  function s(u, c, p) {
    var h, g = {}, b = null, w = null;
    p !== void 0 && (b = "" + p), c.key !== void 0 && (b = "" + c.key), c.ref !== void 0 && (w = c.ref);
    for (h in c) n.call(c, h) && !a.hasOwnProperty(h) && (g[h] = c[h]);
    if (u && u.defaultProps) for (h in c = u.defaultProps, c) g[h] === void 0 && (g[h] = c[h]);
    return { $$typeof: t, type: u, key: b, ref: w, props: g, _owner: i.current };
  }
  return Xe.Fragment = r, Xe.jsx = s, Xe.jsxs = s, Xe;
}
var Ke = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Dr;
function So() {
  return Dr || (Dr = 1, process.env.NODE_ENV !== "production" && function() {
    var e = M, t = Symbol.for("react.element"), r = Symbol.for("react.portal"), n = Symbol.for("react.fragment"), i = Symbol.for("react.strict_mode"), a = Symbol.for("react.profiler"), s = Symbol.for("react.provider"), u = Symbol.for("react.context"), c = Symbol.for("react.forward_ref"), p = Symbol.for("react.suspense"), h = Symbol.for("react.suspense_list"), g = Symbol.for("react.memo"), b = Symbol.for("react.lazy"), w = Symbol.for("react.offscreen"), j = Symbol.iterator, m = "@@iterator";
    function C(o) {
      if (o === null || typeof o != "object")
        return null;
      var l = j && o[j] || o[m];
      return typeof l == "function" ? l : null;
    }
    var f = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function y(o) {
      {
        for (var l = arguments.length, d = new Array(l > 1 ? l - 1 : 0), v = 1; v < l; v++)
          d[v - 1] = arguments[v];
        S("error", o, d);
      }
    }
    function S(o, l, d) {
      {
        var v = f.ReactDebugCurrentFrame, T = v.getStackAddendum();
        T !== "" && (l += "%s", d = d.concat([T]));
        var N = d.map(function(O) {
          return String(O);
        });
        N.unshift("Warning: " + l), Function.prototype.apply.call(console[o], console, N);
      }
    }
    var R = !1, A = !1, k = !1, $ = !1, X = !1, Z;
    Z = Symbol.for("react.module.reference");
    function jt(o) {
      return !!(typeof o == "string" || typeof o == "function" || o === n || o === a || X || o === i || o === p || o === h || $ || o === w || R || A || k || typeof o == "object" && o !== null && (o.$$typeof === b || o.$$typeof === g || o.$$typeof === s || o.$$typeof === u || o.$$typeof === c || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      o.$$typeof === Z || o.getModuleId !== void 0));
    }
    function Tt(o, l, d) {
      var v = o.displayName;
      if (v)
        return v;
      var T = l.displayName || l.name || "";
      return T !== "" ? d + "(" + T + ")" : d;
    }
    function rt(o) {
      return o.displayName || "Context";
    }
    function J(o) {
      if (o == null)
        return null;
      if (typeof o.tag == "number" && y("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof o == "function")
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
            return rt(l) + ".Consumer";
          case s:
            var d = o;
            return rt(d._context) + ".Provider";
          case c:
            return Tt(o, o.render, "ForwardRef");
          case g:
            var v = o.displayName || null;
            return v !== null ? v : J(o.type) || "Memo";
          case b: {
            var T = o, N = T._payload, O = T._init;
            try {
              return J(O(N));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var se = Object.assign, xe = 0, nt, je, Ge, Q, he, ge, V;
    function Te() {
    }
    Te.__reactDisabledLog = !0;
    function Ue() {
      {
        if (xe === 0) {
          nt = console.log, je = console.info, Ge = console.warn, Q = console.error, he = console.group, ge = console.groupCollapsed, V = console.groupEnd;
          var o = {
            configurable: !0,
            enumerable: !0,
            value: Te,
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
        xe++;
      }
    }
    function Ae() {
      {
        if (xe--, xe === 0) {
          var o = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: se({}, o, {
              value: nt
            }),
            info: se({}, o, {
              value: je
            }),
            warn: se({}, o, {
              value: Ge
            }),
            error: se({}, o, {
              value: Q
            }),
            group: se({}, o, {
              value: he
            }),
            groupCollapsed: se({}, o, {
              value: ge
            }),
            groupEnd: se({}, o, {
              value: V
            })
          });
        }
        xe < 0 && y("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var ce = f.ReactCurrentDispatcher, ye;
    function re(o, l, d) {
      {
        if (ye === void 0)
          try {
            throw Error();
          } catch (T) {
            var v = T.stack.trim().match(/\n( *(at )?)/);
            ye = v && v[1] || "";
          }
        return `
` + ye + o;
      }
    }
    var ne = !1, me;
    {
      var Le = typeof WeakMap == "function" ? WeakMap : Map;
      me = new Le();
    }
    function oe(o, l) {
      if (!o || ne)
        return "";
      {
        var d = me.get(o);
        if (d !== void 0)
          return d;
      }
      var v;
      ne = !0;
      var T = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var N;
      N = ce.current, ce.current = null, Ue();
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
            } catch (le) {
              v = le;
            }
            Reflect.construct(o, [], O);
          } else {
            try {
              O.call();
            } catch (le) {
              v = le;
            }
            o.call(O.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (le) {
            v = le;
          }
          o();
        }
      } catch (le) {
        if (le && v && typeof le.stack == "string") {
          for (var P = le.stack.split(`
`), G = v.stack.split(`
`), F = P.length - 1, H = G.length - 1; F >= 1 && H >= 0 && P[F] !== G[H]; )
            H--;
          for (; F >= 1 && H >= 0; F--, H--)
            if (P[F] !== G[H]) {
              if (F !== 1 || H !== 1)
                do
                  if (F--, H--, H < 0 || P[F] !== G[H]) {
                    var ee = `
` + P[F].replace(" at new ", " at ");
                    return o.displayName && ee.includes("<anonymous>") && (ee = ee.replace("<anonymous>", o.displayName)), typeof o == "function" && me.set(o, ee), ee;
                  }
                while (F >= 1 && H >= 0);
              break;
            }
        }
      } finally {
        ne = !1, ce.current = N, Ae(), Error.prepareStackTrace = T;
      }
      var Ne = o ? o.displayName || o.name : "", Ir = Ne ? re(Ne) : "";
      return typeof o == "function" && me.set(o, Ir), Ir;
    }
    function Un(o, l, d) {
      return oe(o, !1);
    }
    function Yn(o) {
      var l = o.prototype;
      return !!(l && l.isReactComponent);
    }
    function ot(o, l, d) {
      if (o == null)
        return "";
      if (typeof o == "function")
        return oe(o, Yn(o));
      if (typeof o == "string")
        return re(o);
      switch (o) {
        case p:
          return re("Suspense");
        case h:
          return re("SuspenseList");
      }
      if (typeof o == "object")
        switch (o.$$typeof) {
          case c:
            return Un(o.render);
          case g:
            return ot(o.type, l, d);
          case b: {
            var v = o, T = v._payload, N = v._init;
            try {
              return ot(N(T), l, d);
            } catch {
            }
          }
        }
      return "";
    }
    var it = Object.prototype.hasOwnProperty, wr = {}, _r = f.ReactDebugCurrentFrame;
    function at(o) {
      if (o) {
        var l = o._owner, d = ot(o.type, o._source, l ? l.type : null);
        _r.setExtraStackFrame(d);
      } else
        _r.setExtraStackFrame(null);
    }
    function Xn(o, l, d, v, T) {
      {
        var N = Function.call.bind(it);
        for (var O in o)
          if (N(o, O)) {
            var P = void 0;
            try {
              if (typeof o[O] != "function") {
                var G = Error((v || "React class") + ": " + d + " type `" + O + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof o[O] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw G.name = "Invariant Violation", G;
              }
              P = o[O](l, O, v, d, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (F) {
              P = F;
            }
            P && !(P instanceof Error) && (at(T), y("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", v || "React class", d, O, typeof P), at(null)), P instanceof Error && !(P.message in wr) && (wr[P.message] = !0, at(T), y("Failed %s type: %s", d, P.message), at(null));
          }
      }
    }
    var Kn = Array.isArray;
    function At(o) {
      return Kn(o);
    }
    function Zn(o) {
      {
        var l = typeof Symbol == "function" && Symbol.toStringTag, d = l && o[Symbol.toStringTag] || o.constructor.name || "Object";
        return d;
      }
    }
    function Jn(o) {
      try {
        return Er(o), !1;
      } catch {
        return !0;
      }
    }
    function Er(o) {
      return "" + o;
    }
    function kr(o) {
      if (Jn(o))
        return y("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Zn(o)), Er(o);
    }
    var Ye = f.ReactCurrentOwner, Qn = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, Rr, Pr, Lt;
    Lt = {};
    function eo(o) {
      if (it.call(o, "ref")) {
        var l = Object.getOwnPropertyDescriptor(o, "ref").get;
        if (l && l.isReactWarning)
          return !1;
      }
      return o.ref !== void 0;
    }
    function to(o) {
      if (it.call(o, "key")) {
        var l = Object.getOwnPropertyDescriptor(o, "key").get;
        if (l && l.isReactWarning)
          return !1;
      }
      return o.key !== void 0;
    }
    function ro(o, l) {
      if (typeof o.ref == "string" && Ye.current && l && Ye.current.stateNode !== l) {
        var d = J(Ye.current.type);
        Lt[d] || (y('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', J(Ye.current.type), o.ref), Lt[d] = !0);
      }
    }
    function no(o, l) {
      {
        var d = function() {
          Rr || (Rr = !0, y("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", l));
        };
        d.isReactWarning = !0, Object.defineProperty(o, "key", {
          get: d,
          configurable: !0
        });
      }
    }
    function oo(o, l) {
      {
        var d = function() {
          Pr || (Pr = !0, y("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", l));
        };
        d.isReactWarning = !0, Object.defineProperty(o, "ref", {
          get: d,
          configurable: !0
        });
      }
    }
    var io = function(o, l, d, v, T, N, O) {
      var P = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: t,
        // Built-in properties that belong on the element
        type: o,
        key: l,
        ref: d,
        props: O,
        // Record the component responsible for creating this element.
        _owner: N
      };
      return P._store = {}, Object.defineProperty(P._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(P, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: v
      }), Object.defineProperty(P, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: T
      }), Object.freeze && (Object.freeze(P.props), Object.freeze(P)), P;
    };
    function ao(o, l, d, v, T) {
      {
        var N, O = {}, P = null, G = null;
        d !== void 0 && (kr(d), P = "" + d), to(l) && (kr(l.key), P = "" + l.key), eo(l) && (G = l.ref, ro(l, T));
        for (N in l)
          it.call(l, N) && !Qn.hasOwnProperty(N) && (O[N] = l[N]);
        if (o && o.defaultProps) {
          var F = o.defaultProps;
          for (N in F)
            O[N] === void 0 && (O[N] = F[N]);
        }
        if (P || G) {
          var H = typeof o == "function" ? o.displayName || o.name || "Unknown" : o;
          P && no(O, H), G && oo(O, H);
        }
        return io(o, P, G, T, v, Ye.current, O);
      }
    }
    var It = f.ReactCurrentOwner, Or = f.ReactDebugCurrentFrame;
    function Ie(o) {
      if (o) {
        var l = o._owner, d = ot(o.type, o._source, l ? l.type : null);
        Or.setExtraStackFrame(d);
      } else
        Or.setExtraStackFrame(null);
    }
    var Nt;
    Nt = !1;
    function zt(o) {
      return typeof o == "object" && o !== null && o.$$typeof === t;
    }
    function Cr() {
      {
        if (It.current) {
          var o = J(It.current.type);
          if (o)
            return `

Check the render method of \`` + o + "`.";
        }
        return "";
      }
    }
    function so(o) {
      {
        if (o !== void 0) {
          var l = o.fileName.replace(/^.*[\\\/]/, ""), d = o.lineNumber;
          return `

Check your code at ` + l + ":" + d + ".";
        }
        return "";
      }
    }
    var jr = {};
    function co(o) {
      {
        var l = Cr();
        if (!l) {
          var d = typeof o == "string" ? o : o.displayName || o.name;
          d && (l = `

Check the top-level render call using <` + d + ">.");
        }
        return l;
      }
    }
    function Tr(o, l) {
      {
        if (!o._store || o._store.validated || o.key != null)
          return;
        o._store.validated = !0;
        var d = co(l);
        if (jr[d])
          return;
        jr[d] = !0;
        var v = "";
        o && o._owner && o._owner !== It.current && (v = " It was passed a child from " + J(o._owner.type) + "."), Ie(o), y('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', d, v), Ie(null);
      }
    }
    function Ar(o, l) {
      {
        if (typeof o != "object")
          return;
        if (At(o))
          for (var d = 0; d < o.length; d++) {
            var v = o[d];
            zt(v) && Tr(v, l);
          }
        else if (zt(o))
          o._store && (o._store.validated = !0);
        else if (o) {
          var T = C(o);
          if (typeof T == "function" && T !== o.entries)
            for (var N = T.call(o), O; !(O = N.next()).done; )
              zt(O.value) && Tr(O.value, l);
        }
      }
    }
    function lo(o) {
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
          var v = J(l);
          Xn(d, o.props, "prop", v, o);
        } else if (l.PropTypes !== void 0 && !Nt) {
          Nt = !0;
          var T = J(l);
          y("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", T || "Unknown");
        }
        typeof l.getDefaultProps == "function" && !l.getDefaultProps.isReactClassApproved && y("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function uo(o) {
      {
        for (var l = Object.keys(o.props), d = 0; d < l.length; d++) {
          var v = l[d];
          if (v !== "children" && v !== "key") {
            Ie(o), y("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", v), Ie(null);
            break;
          }
        }
        o.ref !== null && (Ie(o), y("Invalid attribute `ref` supplied to `React.Fragment`."), Ie(null));
      }
    }
    function Lr(o, l, d, v, T, N) {
      {
        var O = jt(o);
        if (!O) {
          var P = "";
          (o === void 0 || typeof o == "object" && o !== null && Object.keys(o).length === 0) && (P += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var G = so(T);
          G ? P += G : P += Cr();
          var F;
          o === null ? F = "null" : At(o) ? F = "array" : o !== void 0 && o.$$typeof === t ? (F = "<" + (J(o.type) || "Unknown") + " />", P = " Did you accidentally export a JSX literal instead of a component?") : F = typeof o, y("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", F, P);
        }
        var H = ao(o, l, d, T, N);
        if (H == null)
          return H;
        if (O) {
          var ee = l.children;
          if (ee !== void 0)
            if (v)
              if (At(ee)) {
                for (var Ne = 0; Ne < ee.length; Ne++)
                  Ar(ee[Ne], o);
                Object.freeze && Object.freeze(ee);
              } else
                y("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              Ar(ee, o);
        }
        return o === n ? uo(H) : lo(H), H;
      }
    }
    function fo(o, l, d) {
      return Lr(o, l, d, !0);
    }
    function po(o, l, d) {
      return Lr(o, l, d, !1);
    }
    var ho = po, go = fo;
    Ke.Fragment = n, Ke.jsx = ho, Ke.jsxs = go;
  }()), Ke;
}
process.env.NODE_ENV === "production" ? Bt.exports = xo() : Bt.exports = So();
var x = Bt.exports, qt = { exports: {} }, cn = {}, Vt = {};
Vt._ = Vt._interop_require_default = $o;
function $o(e) {
  return e && e.__esModule ? e : { default: e };
}
(function(e) {
  "use client";
  Object.defineProperty(e, "__esModule", {
    value: !0
  });
  function t(p, h) {
    for (var g in h) Object.defineProperty(p, g, {
      enumerable: !0,
      get: h[g]
    });
  }
  t(e, {
    AppRouterContext: function() {
      return i;
    },
    GlobalLayoutRouterContext: function() {
      return s;
    },
    LayoutRouterContext: function() {
      return a;
    },
    MissingSlotContext: function() {
      return c;
    },
    TemplateContext: function() {
      return u;
    }
  });
  const n = /* @__PURE__ */ Vt._(M), i = n.default.createContext(null), a = n.default.createContext(null), s = n.default.createContext(null), u = n.default.createContext(null);
  process.env.NODE_ENV !== "production" && (i.displayName = "AppRouterContext", a.displayName = "LayoutRouterContext", s.displayName = "GlobalLayoutRouterContext", u.displayName = "TemplateContext");
  const c = n.default.createContext(/* @__PURE__ */ new Set());
})(cn);
var ln = {};
(function(e) {
  "use client";
  Object.defineProperty(e, "__esModule", {
    value: !0
  });
  function t(s, u) {
    for (var c in u) Object.defineProperty(s, c, {
      enumerable: !0,
      get: u[c]
    });
  }
  t(e, {
    PathParamsContext: function() {
      return a;
    },
    PathnameContext: function() {
      return i;
    },
    SearchParamsContext: function() {
      return n;
    }
  });
  const r = M, n = (0, r.createContext)(null), i = (0, r.createContext)(null), a = (0, r.createContext)(null);
  process.env.NODE_ENV !== "production" && (n.displayName = "SearchParamsContext", i.displayName = "PathnameContext", a.displayName = "PathParamsContext");
})(ln);
var Gt = { exports: {} };
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
})(Gt, Gt.exports);
var wo = Gt.exports, un = {};
(function(e) {
  Object.defineProperty(e, "__esModule", {
    value: !0
  });
  function t(a, s) {
    for (var u in s) Object.defineProperty(a, u, {
      enumerable: !0,
      get: s[u]
    });
  }
  t(e, {
    DEFAULT_SEGMENT_KEY: function() {
      return i;
    },
    PAGE_SEGMENT_KEY: function() {
      return n;
    },
    isGroupSegment: function() {
      return r;
    }
  });
  function r(a) {
    return a[0] === "(" && a.endsWith(")");
  }
  const n = "__PAGE__", i = "__DEFAULT__";
})(un);
var Ut = { exports: {} }, Yt = { exports: {} }, Xt = { exports: {} }, Kt = { exports: {} }, Zt = { exports: {} };
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
})(Zt, Zt.exports);
var pr = Zt.exports;
(function(e, t) {
  Object.defineProperty(t, "__esModule", {
    value: !0
  }), Object.defineProperty(t, "requestAsyncStorage", {
    enumerable: !0,
    get: function() {
      return n;
    }
  });
  const n = (0, pr.createAsyncLocalStorage)();
  (typeof t.default == "function" || typeof t.default == "object" && t.default !== null) && typeof t.default.__esModule > "u" && (Object.defineProperty(t.default, "__esModule", { value: !0 }), Object.assign(t.default, t), e.exports = t.default);
})(Kt, Kt.exports);
var _o = Kt.exports;
(function(e, t) {
  "TURBOPACK { transition: next-shared }";
  Object.defineProperty(t, "__esModule", {
    value: !0
  });
  function r(a, s) {
    for (var u in s) Object.defineProperty(a, u, {
      enumerable: !0,
      get: s[u]
    });
  }
  r(t, {
    getExpectedRequestStore: function() {
      return i;
    },
    requestAsyncStorage: function() {
      return n.requestAsyncStorage;
    }
  });
  const n = _o;
  function i(a) {
    const s = n.requestAsyncStorage.getStore();
    if (s) return s;
    throw new Error("`" + a + "` was called outside a request scope. Read more: https://nextjs.org/docs/messages/next-dynamic-api-wrong-context");
  }
  (typeof t.default == "function" || typeof t.default == "object" && t.default !== null) && typeof t.default.__esModule > "u" && (Object.defineProperty(t.default, "__esModule", { value: !0 }), Object.assign(t.default, t), e.exports = t.default);
})(Xt, Xt.exports);
var Eo = Xt.exports, Jt = { exports: {} }, Qt = { exports: {} };
(function(e, t) {
  Object.defineProperty(t, "__esModule", {
    value: !0
  }), Object.defineProperty(t, "actionAsyncStorage", {
    enumerable: !0,
    get: function() {
      return n;
    }
  });
  const n = (0, pr.createAsyncLocalStorage)();
  (typeof t.default == "function" || typeof t.default == "object" && t.default !== null) && typeof t.default.__esModule > "u" && (Object.defineProperty(t.default, "__esModule", { value: !0 }), Object.assign(t.default, t), e.exports = t.default);
})(Qt, Qt.exports);
var ko = Qt.exports;
(function(e, t) {
  "TURBOPACK { transition: next-shared }";
  Object.defineProperty(t, "__esModule", {
    value: !0
  }), Object.defineProperty(t, "actionAsyncStorage", {
    enumerable: !0,
    get: function() {
      return r.actionAsyncStorage;
    }
  });
  const r = ko;
  (typeof t.default == "function" || typeof t.default == "object" && t.default !== null) && typeof t.default.__esModule > "u" && (Object.defineProperty(t.default, "__esModule", { value: !0 }), Object.assign(t.default, t), e.exports = t.default);
})(Jt, Jt.exports);
var Ro = Jt.exports, er = { exports: {} };
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
})(er, er.exports);
var Po = er.exports;
(function(e, t) {
  Object.defineProperty(t, "__esModule", {
    value: !0
  });
  function r(m, C) {
    for (var f in C) Object.defineProperty(m, f, {
      enumerable: !0,
      get: C[f]
    });
  }
  r(t, {
    RedirectType: function() {
      return u;
    },
    getRedirectError: function() {
      return c;
    },
    getRedirectStatusCodeFromError: function() {
      return j;
    },
    getRedirectTypeFromError: function() {
      return w;
    },
    getURLFromRedirectError: function() {
      return b;
    },
    isRedirectError: function() {
      return g;
    },
    permanentRedirect: function() {
      return h;
    },
    redirect: function() {
      return p;
    }
  });
  const n = Eo, i = Ro, a = Po, s = "NEXT_REDIRECT";
  var u;
  (function(m) {
    m.push = "push", m.replace = "replace";
  })(u || (u = {}));
  function c(m, C, f) {
    f === void 0 && (f = a.RedirectStatusCode.TemporaryRedirect);
    const y = new Error(s);
    y.digest = s + ";" + C + ";" + m + ";" + f + ";";
    const S = n.requestAsyncStorage.getStore();
    return S && (y.mutableCookies = S.mutableCookies), y;
  }
  function p(m, C) {
    C === void 0 && (C = "replace");
    const f = i.actionAsyncStorage.getStore();
    throw c(
      m,
      C,
      // If we're in an action, we want to use a 303 redirect
      // as we don't want the POST request to follow the redirect,
      // as it could result in erroneous re-submissions.
      f != null && f.isAction ? a.RedirectStatusCode.SeeOther : a.RedirectStatusCode.TemporaryRedirect
    );
  }
  function h(m, C) {
    C === void 0 && (C = "replace");
    const f = i.actionAsyncStorage.getStore();
    throw c(
      m,
      C,
      // If we're in an action, we want to use a 303 redirect
      // as we don't want the POST request to follow the redirect,
      // as it could result in erroneous re-submissions.
      f != null && f.isAction ? a.RedirectStatusCode.SeeOther : a.RedirectStatusCode.PermanentRedirect
    );
  }
  function g(m) {
    if (typeof m != "object" || m === null || !("digest" in m) || typeof m.digest != "string")
      return !1;
    const [C, f, y, S] = m.digest.split(";", 4), R = Number(S);
    return C === s && (f === "replace" || f === "push") && typeof y == "string" && !isNaN(R) && R in a.RedirectStatusCode;
  }
  function b(m) {
    return g(m) ? m.digest.split(";", 3)[2] : null;
  }
  function w(m) {
    if (!g(m))
      throw new Error("Not a redirect error");
    return m.digest.split(";", 2)[1];
  }
  function j(m) {
    if (!g(m))
      throw new Error("Not a redirect error");
    return Number(m.digest.split(";", 4)[3]);
  }
  (typeof t.default == "function" || typeof t.default == "object" && t.default !== null) && typeof t.default.__esModule > "u" && (Object.defineProperty(t.default, "__esModule", { value: !0 }), Object.assign(t.default, t), e.exports = t.default);
})(Yt, Yt.exports);
var Oo = Yt.exports, tr = { exports: {} };
(function(e, t) {
  Object.defineProperty(t, "__esModule", {
    value: !0
  });
  function r(s, u) {
    for (var c in u) Object.defineProperty(s, c, {
      enumerable: !0,
      get: u[c]
    });
  }
  r(t, {
    isNotFoundError: function() {
      return a;
    },
    notFound: function() {
      return i;
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
})(tr, tr.exports);
var Co = tr.exports;
(function(e, t) {
  Object.defineProperty(t, "__esModule", {
    value: !0
  });
  function r(u, c) {
    for (var p in c) Object.defineProperty(u, p, {
      enumerable: !0,
      get: c[p]
    });
  }
  r(t, {
    ReadonlyURLSearchParams: function() {
      return s;
    },
    RedirectType: function() {
      return n.RedirectType;
    },
    notFound: function() {
      return i.notFound;
    },
    permanentRedirect: function() {
      return n.permanentRedirect;
    },
    redirect: function() {
      return n.redirect;
    }
  });
  const n = Oo, i = Co;
  class a extends Error {
    constructor() {
      super("Method unavailable on `ReadonlyURLSearchParams`. Read more: https://nextjs.org/docs/app/api-reference/functions/use-search-params#updating-searchparams");
    }
  }
  class s extends URLSearchParams {
    /** @deprecated Method unavailable on `ReadonlyURLSearchParams`. Read more: https://nextjs.org/docs/app/api-reference/functions/use-search-params#updating-searchparams */
    append() {
      throw new a();
    }
    /** @deprecated Method unavailable on `ReadonlyURLSearchParams`. Read more: https://nextjs.org/docs/app/api-reference/functions/use-search-params#updating-searchparams */
    delete() {
      throw new a();
    }
    /** @deprecated Method unavailable on `ReadonlyURLSearchParams`. Read more: https://nextjs.org/docs/app/api-reference/functions/use-search-params#updating-searchparams */
    set() {
      throw new a();
    }
    /** @deprecated Method unavailable on `ReadonlyURLSearchParams`. Read more: https://nextjs.org/docs/app/api-reference/functions/use-search-params#updating-searchparams */
    sort() {
      throw new a();
    }
  }
  (typeof t.default == "function" || typeof t.default == "object" && t.default !== null) && typeof t.default.__esModule > "u" && (Object.defineProperty(t.default, "__esModule", { value: !0 }), Object.assign(t.default, t), e.exports = t.default);
})(Ut, Ut.exports);
var jo = Ut.exports, dn = {}, rr = {};
function fn(e) {
  if (typeof WeakMap != "function") return null;
  var t = /* @__PURE__ */ new WeakMap(), r = /* @__PURE__ */ new WeakMap();
  return (fn = function(n) {
    return n ? r : t;
  })(e);
}
rr._ = rr._interop_require_wildcard = To;
function To(e, t) {
  if (!t && e && e.__esModule) return e;
  if (e === null || typeof e != "object" && typeof e != "function") return { default: e };
  var r = fn(t);
  if (r && r.has(e)) return r.get(e);
  var n = { __proto__: null }, i = Object.defineProperty && Object.getOwnPropertyDescriptor;
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
    for (var c in u) Object.defineProperty(s, c, {
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
  const n = /* @__PURE__ */ rr._(M), i = /* @__PURE__ */ n.default.createContext(null);
  function a(s) {
    const u = (0, n.useContext)(i);
    u && u(s);
  }
})(dn);
var st = { exports: {} }, Dt = {}, Mr;
function Ao() {
  return Mr || (Mr = 1, function(e) {
    Object.defineProperty(e, "__esModule", {
      value: !0
    });
    function t(a, s) {
      for (var u in s) Object.defineProperty(a, u, {
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
  }(Dt)), Dt;
}
var ct = { exports: {} }, lt = { exports: {} }, Fr;
function Lo() {
  return Fr || (Fr = 1, function(e, t) {
    Object.defineProperty(t, "__esModule", {
      value: !0
    }), Object.defineProperty(t, "staticGenerationAsyncStorage", {
      enumerable: !0,
      get: function() {
        return n;
      }
    });
    const n = (0, pr.createAsyncLocalStorage)();
    (typeof t.default == "function" || typeof t.default == "object" && t.default !== null) && typeof t.default.__esModule > "u" && (Object.defineProperty(t.default, "__esModule", { value: !0 }), Object.assign(t.default, t), e.exports = t.default);
  }(lt, lt.exports)), lt.exports;
}
var Hr;
function Io() {
  return Hr || (Hr = 1, function(e, t) {
    "TURBOPACK { transition: next-shared }";
    Object.defineProperty(t, "__esModule", {
      value: !0
    }), Object.defineProperty(t, "staticGenerationAsyncStorage", {
      enumerable: !0,
      get: function() {
        return r.staticGenerationAsyncStorage;
      }
    });
    const r = Lo();
    (typeof t.default == "function" || typeof t.default == "object" && t.default !== null) && typeof t.default.__esModule > "u" && (Object.defineProperty(t.default, "__esModule", { value: !0 }), Object.assign(t.default, t), e.exports = t.default);
  }(ct, ct.exports)), ct.exports;
}
var Wr;
function No() {
  return Wr || (Wr = 1, function(e, t) {
    Object.defineProperty(t, "__esModule", {
      value: !0
    }), Object.defineProperty(t, "bailoutToClientRendering", {
      enumerable: !0,
      get: function() {
        return i;
      }
    });
    const r = Ao(), n = Io();
    function i(a) {
      const s = n.staticGenerationAsyncStorage.getStore();
      if (!(s != null && s.forceStatic) && s != null && s.isStaticGeneration)
        throw new r.BailoutToCSRError(a);
    }
    (typeof t.default == "function" || typeof t.default == "object" && t.default !== null) && typeof t.default.__esModule > "u" && (Object.defineProperty(t.default, "__esModule", { value: !0 }), Object.assign(t.default, t), e.exports = t.default);
  }(st, st.exports)), st.exports;
}
(function(e, t) {
  Object.defineProperty(t, "__esModule", {
    value: !0
  });
  function r(f, y) {
    for (var S in y) Object.defineProperty(f, S, {
      enumerable: !0,
      get: y[S]
    });
  }
  r(t, {
    ReadonlyURLSearchParams: function() {
      return c.ReadonlyURLSearchParams;
    },
    RedirectType: function() {
      return c.RedirectType;
    },
    ServerInsertedHTMLContext: function() {
      return p.ServerInsertedHTMLContext;
    },
    notFound: function() {
      return c.notFound;
    },
    permanentRedirect: function() {
      return c.permanentRedirect;
    },
    redirect: function() {
      return c.redirect;
    },
    useParams: function() {
      return w;
    },
    usePathname: function() {
      return g;
    },
    useRouter: function() {
      return b;
    },
    useSearchParams: function() {
      return h;
    },
    useSelectedLayoutSegment: function() {
      return C;
    },
    useSelectedLayoutSegments: function() {
      return m;
    },
    useServerInsertedHTML: function() {
      return p.useServerInsertedHTML;
    }
  });
  const n = M, i = cn, a = ln, s = wo, u = un, c = jo, p = dn;
  function h() {
    const f = (0, n.useContext)(a.SearchParamsContext), y = (0, n.useMemo)(() => f ? new c.ReadonlyURLSearchParams(f) : null, [
      f
    ]);
    if (typeof window > "u") {
      const { bailoutToClientRendering: S } = No();
      S("useSearchParams()");
    }
    return y;
  }
  function g() {
    return (0, n.useContext)(a.PathnameContext);
  }
  function b() {
    const f = (0, n.useContext)(i.AppRouterContext);
    if (f === null)
      throw new Error("invariant expected app router to be mounted");
    return f;
  }
  function w() {
    return (0, n.useContext)(a.PathParamsContext);
  }
  function j(f, y, S, R) {
    S === void 0 && (S = !0), R === void 0 && (R = []);
    let A;
    if (S)
      A = f[1][y];
    else {
      const Z = f[1];
      var k;
      A = (k = Z.children) != null ? k : Object.values(Z)[0];
    }
    if (!A) return R;
    const $ = A[0], X = (0, s.getSegmentValue)($);
    return !X || X.startsWith(u.PAGE_SEGMENT_KEY) ? R : (R.push(X), j(A, y, !1, R));
  }
  function m(f) {
    f === void 0 && (f = "children");
    const y = (0, n.useContext)(i.LayoutRouterContext);
    return y ? j(y.tree, f) : null;
  }
  function C(f) {
    f === void 0 && (f = "children");
    const y = m(f);
    if (!y || y.length === 0)
      return null;
    const S = f === "children" ? y[0] : y[y.length - 1];
    return S === u.DEFAULT_SEGMENT_KEY ? null : S;
  }
  (typeof t.default == "function" || typeof t.default == "object" && t.default !== null) && typeof t.default.__esModule > "u" && (Object.defineProperty(t.default, "__esModule", { value: !0 }), Object.assign(t.default, t), e.exports = t.default);
})(qt, qt.exports);
var zo = qt.exports, Do = zo, B = function() {
  return B = Object.assign || function(t) {
    for (var r, n = 1, i = arguments.length; n < i; n++) {
      r = arguments[n];
      for (var a in r) Object.prototype.hasOwnProperty.call(r, a) && (t[a] = r[a]);
    }
    return t;
  }, B.apply(this, arguments);
};
function Pe(e, t, r) {
  if (r || arguments.length === 2) for (var n = 0, i = t.length, a; n < i; n++)
    (a || !(n in t)) && (a || (a = Array.prototype.slice.call(t, 0, n)), a[n] = t[n]);
  return e.concat(a || Array.prototype.slice.call(t));
}
function Mo(e) {
  var t = /* @__PURE__ */ Object.create(null);
  return function(r) {
    return t[r] === void 0 && (t[r] = e(r)), t[r];
  };
}
var Fo = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|disableRemotePlayback|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/, Ho = /* @__PURE__ */ Mo(
  function(e) {
    return Fo.test(e) || e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && e.charCodeAt(2) < 91;
  }
  /* Z+1 */
), Wo = function(t, r, n, i) {
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
    var g = t[h], b = r[h];
    if (a = n ? n.call(i, g, b, h) : void 0, a === !1 || a === void 0 && g !== b)
      return !1;
  }
  return !0;
};
const Bo = /* @__PURE__ */ vo(Wo);
var z = "-ms-", Je = "-moz-", L = "-webkit-", pn = "comm", kt = "rule", hr = "decl", qo = "@import", hn = "@keyframes", Vo = "@layer", gn = Math.abs, gr = String.fromCharCode, nr = Object.assign;
function Go(e, t) {
  return q(e, 0) ^ 45 ? (((t << 2 ^ q(e, 0)) << 2 ^ q(e, 1)) << 2 ^ q(e, 2)) << 2 ^ q(e, 3) : 0;
}
function yn(e) {
  return e.trim();
}
function ue(e, t) {
  return (e = t.exec(e)) ? e[0] : e;
}
function _(e, t, r) {
  return e.replace(t, r);
}
function gt(e, t, r) {
  return e.indexOf(t, r);
}
function q(e, t) {
  return e.charCodeAt(t) | 0;
}
function De(e, t, r) {
  return e.slice(t, r);
}
function ae(e) {
  return e.length;
}
function mn(e) {
  return e.length;
}
function Ze(e, t) {
  return t.push(e), e;
}
function Uo(e, t) {
  return e.map(t).join("");
}
function Br(e, t) {
  return e.filter(function(r) {
    return !ue(r, t);
  });
}
var Rt = 1, Me = 1, bn = 0, te = 0, W = 0, Ve = "";
function Pt(e, t, r, n, i, a, s, u) {
  return { value: e, root: t, parent: r, type: n, props: i, children: a, line: Rt, column: Me, length: s, return: "", siblings: u };
}
function be(e, t) {
  return nr(Pt("", null, null, "", null, null, 0, e.siblings), e, { length: -e.length }, t);
}
function ze(e) {
  for (; e.root; )
    e = be(e.root, { children: [e] });
  Ze(e, e.siblings);
}
function Yo() {
  return W;
}
function Xo() {
  return W = te > 0 ? q(Ve, --te) : 0, Me--, W === 10 && (Me = 1, Rt--), W;
}
function ie() {
  return W = te < bn ? q(Ve, te++) : 0, Me++, W === 10 && (Me = 1, Rt++), W;
}
function Re() {
  return q(Ve, te);
}
function yt() {
  return te;
}
function Ot(e, t) {
  return De(Ve, e, t);
}
function or(e) {
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
function Ko(e) {
  return Rt = Me = 1, bn = ae(Ve = e), te = 0, [];
}
function Zo(e) {
  return Ve = "", e;
}
function Mt(e) {
  return yn(Ot(te - 1, ir(e === 91 ? e + 2 : e === 40 ? e + 1 : e)));
}
function Jo(e) {
  for (; (W = Re()) && W < 33; )
    ie();
  return or(e) > 2 || or(W) > 3 ? "" : " ";
}
function Qo(e, t) {
  for (; --t && ie() && !(W < 48 || W > 102 || W > 57 && W < 65 || W > 70 && W < 97); )
    ;
  return Ot(e, yt() + (t < 6 && Re() == 32 && ie() == 32));
}
function ir(e) {
  for (; ie(); )
    switch (W) {
      case e:
        return te;
      case 34:
      case 39:
        e !== 34 && e !== 39 && ir(W);
        break;
      case 40:
        e === 41 && ir(e);
        break;
      case 92:
        ie();
        break;
    }
  return te;
}
function ei(e, t) {
  for (; ie() && e + W !== 57; )
    if (e + W === 84 && Re() === 47)
      break;
  return "/*" + Ot(t, te - 1) + "*" + gr(e === 47 ? e : ie());
}
function ti(e) {
  for (; !or(Re()); )
    ie();
  return Ot(e, te);
}
function ri(e) {
  return Zo(mt("", null, null, null, [""], e = Ko(e), 0, [0], e));
}
function mt(e, t, r, n, i, a, s, u, c) {
  for (var p = 0, h = 0, g = s, b = 0, w = 0, j = 0, m = 1, C = 1, f = 1, y = 0, S = "", R = i, A = a, k = n, $ = S; C; )
    switch (j = y, y = ie()) {
      case 40:
        if (j != 108 && q($, g - 1) == 58) {
          gt($ += _(Mt(y), "&", "&\f"), "&\f", gn(p ? u[p - 1] : 0)) != -1 && (f = -1);
          break;
        }
      case 34:
      case 39:
      case 91:
        $ += Mt(y);
        break;
      case 9:
      case 10:
      case 13:
      case 32:
        $ += Jo(j);
        break;
      case 92:
        $ += Qo(yt() - 1, 7);
        continue;
      case 47:
        switch (Re()) {
          case 42:
          case 47:
            Ze(ni(ei(ie(), yt()), t, r, c), c);
            break;
          default:
            $ += "/";
        }
        break;
      case 123 * m:
        u[p++] = ae($) * f;
      case 125 * m:
      case 59:
      case 0:
        switch (y) {
          case 0:
          case 125:
            C = 0;
          case 59 + h:
            f == -1 && ($ = _($, /\f/g, "")), w > 0 && ae($) - g && Ze(w > 32 ? Vr($ + ";", n, r, g - 1, c) : Vr(_($, " ", "") + ";", n, r, g - 2, c), c);
            break;
          case 59:
            $ += ";";
          default:
            if (Ze(k = qr($, t, r, p, h, i, u, S, R = [], A = [], g, a), a), y === 123)
              if (h === 0)
                mt($, t, k, k, R, a, g, u, A);
              else
                switch (b === 99 && q($, 3) === 110 ? 100 : b) {
                  case 100:
                  case 108:
                  case 109:
                  case 115:
                    mt(e, k, k, n && Ze(qr(e, k, k, 0, 0, i, u, S, i, R = [], g, A), A), i, A, g, u, n ? R : A);
                    break;
                  default:
                    mt($, k, k, k, [""], A, 0, u, A);
                }
        }
        p = h = w = 0, m = f = 1, S = $ = "", g = s;
        break;
      case 58:
        g = 1 + ae($), w = j;
      default:
        if (m < 1) {
          if (y == 123)
            --m;
          else if (y == 125 && m++ == 0 && Xo() == 125)
            continue;
        }
        switch ($ += gr(y), y * m) {
          case 38:
            f = h > 0 ? 1 : ($ += "\f", -1);
            break;
          case 44:
            u[p++] = (ae($) - 1) * f, f = 1;
            break;
          case 64:
            Re() === 45 && ($ += Mt(ie())), b = Re(), h = g = ae(S = $ += ti(yt())), y++;
            break;
          case 45:
            j === 45 && ae($) == 2 && (m = 0);
        }
    }
  return a;
}
function qr(e, t, r, n, i, a, s, u, c, p, h, g) {
  for (var b = i - 1, w = i === 0 ? a : [""], j = mn(w), m = 0, C = 0, f = 0; m < n; ++m)
    for (var y = 0, S = De(e, b + 1, b = gn(C = s[m])), R = e; y < j; ++y)
      (R = yn(C > 0 ? w[y] + " " + S : _(S, /&\f/g, w[y]))) && (c[f++] = R);
  return Pt(e, t, r, i === 0 ? kt : u, c, p, h, g);
}
function ni(e, t, r, n) {
  return Pt(e, t, r, pn, gr(Yo()), De(e, 2, -2), 0, n);
}
function Vr(e, t, r, n, i) {
  return Pt(e, t, r, hr, De(e, 0, n), De(e, n + 1, -1), n, i);
}
function vn(e, t, r) {
  switch (Go(e, t)) {
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
      return Je + e + e;
    case 5349:
    case 4246:
    case 4810:
    case 6968:
    case 2756:
      return L + e + Je + e + z + e + e;
    case 5936:
      switch (q(e, t + 11)) {
        case 114:
          return L + e + z + _(e, /[svh]\w+-[tblr]{2}/, "tb") + e;
        case 108:
          return L + e + z + _(e, /[svh]\w+-[tblr]{2}/, "tb-rl") + e;
        case 45:
          return L + e + z + _(e, /[svh]\w+-[tblr]{2}/, "lr") + e;
      }
    case 6828:
    case 4268:
    case 2903:
      return L + e + z + e + e;
    case 6165:
      return L + e + z + "flex-" + e + e;
    case 5187:
      return L + e + _(e, /(\w+).+(:[^]+)/, L + "box-$1$2" + z + "flex-$1$2") + e;
    case 5443:
      return L + e + z + "flex-item-" + _(e, /flex-|-self/g, "") + (ue(e, /flex-|baseline/) ? "" : z + "grid-row-" + _(e, /flex-|-self/g, "")) + e;
    case 4675:
      return L + e + z + "flex-line-pack" + _(e, /align-content|flex-|-self/g, "") + e;
    case 5548:
      return L + e + z + _(e, "shrink", "negative") + e;
    case 5292:
      return L + e + z + _(e, "basis", "preferred-size") + e;
    case 6060:
      return L + "box-" + _(e, "-grow", "") + L + e + z + _(e, "grow", "positive") + e;
    case 4554:
      return L + _(e, /([^-])(transform)/g, "$1" + L + "$2") + e;
    case 6187:
      return _(_(_(e, /(zoom-|grab)/, L + "$1"), /(image-set)/, L + "$1"), e, "") + e;
    case 5495:
    case 3959:
      return _(e, /(image-set\([^]*)/, L + "$1$`$1");
    case 4968:
      return _(_(e, /(.+:)(flex-)?(.*)/, L + "box-pack:$3" + z + "flex-pack:$3"), /s.+-b[^;]+/, "justify") + L + e + e;
    case 4200:
      if (!ue(e, /flex-|baseline/)) return z + "grid-column-align" + De(e, t) + e;
      break;
    case 2592:
    case 3360:
      return z + _(e, "template-", "") + e;
    case 4384:
    case 3616:
      return r && r.some(function(n, i) {
        return t = i, ue(n.props, /grid-\w+-end/);
      }) ? ~gt(e + (r = r[t].value), "span", 0) ? e : z + _(e, "-start", "") + e + z + "grid-row-span:" + (~gt(r, "span", 0) ? ue(r, /\d+/) : +ue(r, /\d+/) - +ue(e, /\d+/)) + ";" : z + _(e, "-start", "") + e;
    case 4896:
    case 4128:
      return r && r.some(function(n) {
        return ue(n.props, /grid-\w+-start/);
      }) ? e : z + _(_(e, "-end", "-span"), "span ", "") + e;
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
      if (ae(e) - 1 - t > 6)
        switch (q(e, t + 1)) {
          case 109:
            if (q(e, t + 4) !== 45)
              break;
          case 102:
            return _(e, /(.+:)(.+)-([^]+)/, "$1" + L + "$2-$3$1" + Je + (q(e, t + 3) == 108 ? "$3" : "$2-$3")) + e;
          case 115:
            return ~gt(e, "stretch", 0) ? vn(_(e, "stretch", "fill-available"), t, r) + e : e;
        }
      break;
    case 5152:
    case 5920:
      return _(e, /(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/, function(n, i, a, s, u, c, p) {
        return z + i + ":" + a + p + (s ? z + i + "-span:" + (u ? c : +c - +a) + p : "") + e;
      });
    case 4949:
      if (q(e, t + 6) === 121)
        return _(e, ":", ":" + L) + e;
      break;
    case 6444:
      switch (q(e, q(e, 14) === 45 ? 18 : 11)) {
        case 120:
          return _(e, /(.+:)([^;\s!]+)(;|(\s+)?!.+)?/, "$1" + L + (q(e, 14) === 45 ? "inline-" : "") + "box$3$1" + L + "$2$3$1" + z + "$2box$3") + e;
        case 100:
          return _(e, ":", ":" + z) + e;
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
function xt(e, t) {
  for (var r = "", n = 0; n < e.length; n++)
    r += t(e[n], n, e, t) || "";
  return r;
}
function oi(e, t, r, n) {
  switch (e.type) {
    case Vo:
      if (e.children.length) break;
    case qo:
    case hr:
      return e.return = e.return || e.value;
    case pn:
      return "";
    case hn:
      return e.return = e.value + "{" + xt(e.children, n) + "}";
    case kt:
      if (!ae(e.value = e.props.join(","))) return "";
  }
  return ae(r = xt(e.children, n)) ? e.return = e.value + "{" + r + "}" : "";
}
function ii(e) {
  var t = mn(e);
  return function(r, n, i, a) {
    for (var s = "", u = 0; u < t; u++)
      s += e[u](r, n, i, a) || "";
    return s;
  };
}
function ai(e) {
  return function(t) {
    t.root || (t = t.return) && e(t);
  };
}
function si(e, t, r, n) {
  if (e.length > -1 && !e.return)
    switch (e.type) {
      case hr:
        e.return = vn(e.value, e.length, r);
        return;
      case hn:
        return xt([be(e, { value: _(e.value, "@", "@" + L) })], n);
      case kt:
        if (e.length)
          return Uo(r = e.props, function(i) {
            switch (ue(i, n = /(::plac\w+|:read-\w+)/)) {
              case ":read-only":
              case ":read-write":
                ze(be(e, { props: [_(i, /:(read-\w+)/, ":" + Je + "$1")] })), ze(be(e, { props: [i] })), nr(e, { props: Br(r, n) });
                break;
              case "::placeholder":
                ze(be(e, { props: [_(i, /:(plac\w+)/, ":" + L + "input-$1")] })), ze(be(e, { props: [_(i, /:(plac\w+)/, ":" + Je + "$1")] })), ze(be(e, { props: [_(i, /:(plac\w+)/, z + "input-$1")] })), ze(be(e, { props: [i] })), nr(e, { props: Br(r, n) });
                break;
            }
            return "";
          });
    }
}
var ci = {
  animationIterationCount: 1,
  aspectRatio: 1,
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
}, fe = typeof process < "u" && process.env !== void 0 && (process.env.REACT_APP_SC_ATTR || process.env.SC_ATTR) || "data-styled", xn = "active", St = "data-styled-version", Fe = "6.1.12", yr = `/*!sc*/
`, $t = typeof window < "u" && "HTMLElement" in window, li = !!(typeof SC_DISABLE_SPEEDY == "boolean" ? SC_DISABLE_SPEEDY : typeof process < "u" && process.env !== void 0 && process.env.REACT_APP_SC_DISABLE_SPEEDY !== void 0 && process.env.REACT_APP_SC_DISABLE_SPEEDY !== "" ? process.env.REACT_APP_SC_DISABLE_SPEEDY !== "false" && process.env.REACT_APP_SC_DISABLE_SPEEDY : typeof process < "u" && process.env !== void 0 && process.env.SC_DISABLE_SPEEDY !== void 0 && process.env.SC_DISABLE_SPEEDY !== "" ? process.env.SC_DISABLE_SPEEDY !== "false" && process.env.SC_DISABLE_SPEEDY : process.env.NODE_ENV !== "production"), ui = {}, Gr = /invalid hook call/i, ut = /* @__PURE__ */ new Set(), Sn = function(e, t) {
  if (process.env.NODE_ENV !== "production") {
    var r = t ? ' with the id of "'.concat(t, '"') : "", n = "The component ".concat(e).concat(r, ` has been created dynamically.
`) + `You may see this warning because you've called styled inside another component.
To resolve this only create new StyledComponents outside of any render method and function component.`, i = console.error;
    try {
      var a = !0;
      console.error = function(s) {
        for (var u = [], c = 1; c < arguments.length; c++) u[c - 1] = arguments[c];
        Gr.test(s) ? (a = !1, ut.delete(n)) : i.apply(void 0, Pe([s], u, !1));
      }, yo(), a && !ut.has(n) && (console.warn(n), ut.add(n));
    } catch (s) {
      Gr.test(s.message) && ut.delete(n);
    } finally {
      console.error = i;
    }
  }
}, Ct = Object.freeze([]), He = Object.freeze({});
function $n(e, t, r) {
  return r === void 0 && (r = He), e.theme !== r.theme && e.theme || t || r.theme;
}
var ar = /* @__PURE__ */ new Set(["a", "abbr", "address", "area", "article", "aside", "audio", "b", "base", "bdi", "bdo", "big", "blockquote", "body", "br", "button", "canvas", "caption", "cite", "code", "col", "colgroup", "data", "datalist", "dd", "del", "details", "dfn", "dialog", "div", "dl", "dt", "em", "embed", "fieldset", "figcaption", "figure", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "header", "hgroup", "hr", "html", "i", "iframe", "img", "input", "ins", "kbd", "keygen", "label", "legend", "li", "link", "main", "map", "mark", "menu", "menuitem", "meta", "meter", "nav", "noscript", "object", "ol", "optgroup", "option", "output", "p", "param", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "script", "section", "select", "small", "source", "span", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "textarea", "tfoot", "th", "thead", "time", "tr", "track", "u", "ul", "use", "var", "video", "wbr", "circle", "clipPath", "defs", "ellipse", "foreignObject", "g", "image", "line", "linearGradient", "marker", "mask", "path", "pattern", "polygon", "polyline", "radialGradient", "rect", "stop", "svg", "text", "tspan"]), di = /[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g, fi = /(^-|-$)/g;
function Ur(e) {
  return e.replace(di, "-").replace(fi, "");
}
var pi = /(a)(d)/gi, dt = 52, Yr = function(e) {
  return String.fromCharCode(e + (e > 25 ? 39 : 97));
};
function sr(e) {
  var t, r = "";
  for (t = Math.abs(e); t > dt; t = t / dt | 0) r = Yr(t % dt) + r;
  return (Yr(t % dt) + r).replace(pi, "$1-$2");
}
var Ft, wn = 5381, Ee = function(e, t) {
  for (var r = t.length; r; ) e = 33 * e ^ t.charCodeAt(--r);
  return e;
}, _n = function(e) {
  return Ee(wn, e);
};
function En(e) {
  return sr(_n(e) >>> 0);
}
function kn(e) {
  return process.env.NODE_ENV !== "production" && typeof e == "string" && e || e.displayName || e.name || "Component";
}
function Ht(e) {
  return typeof e == "string" && (process.env.NODE_ENV === "production" || e.charAt(0) === e.charAt(0).toLowerCase());
}
var Rn = typeof Symbol == "function" && Symbol.for, Pn = Rn ? Symbol.for("react.memo") : 60115, hi = Rn ? Symbol.for("react.forward_ref") : 60112, gi = { childContextTypes: !0, contextType: !0, contextTypes: !0, defaultProps: !0, displayName: !0, getDefaultProps: !0, getDerivedStateFromError: !0, getDerivedStateFromProps: !0, mixins: !0, propTypes: !0, type: !0 }, yi = { name: !0, length: !0, prototype: !0, caller: !0, callee: !0, arguments: !0, arity: !0 }, On = { $$typeof: !0, compare: !0, defaultProps: !0, displayName: !0, propTypes: !0, type: !0 }, mi = ((Ft = {})[hi] = { $$typeof: !0, render: !0, defaultProps: !0, displayName: !0, propTypes: !0 }, Ft[Pn] = On, Ft);
function Xr(e) {
  return ("type" in (t = e) && t.type.$$typeof) === Pn ? On : "$$typeof" in e ? mi[e.$$typeof] : gi;
  var t;
}
var bi = Object.defineProperty, vi = Object.getOwnPropertyNames, Kr = Object.getOwnPropertySymbols, xi = Object.getOwnPropertyDescriptor, Si = Object.getPrototypeOf, Zr = Object.prototype;
function Cn(e, t, r) {
  if (typeof t != "string") {
    if (Zr) {
      var n = Si(t);
      n && n !== Zr && Cn(e, n, r);
    }
    var i = vi(t);
    Kr && (i = i.concat(Kr(t)));
    for (var a = Xr(e), s = Xr(t), u = 0; u < i.length; ++u) {
      var c = i[u];
      if (!(c in yi || r && r[c] || s && c in s || a && c in a)) {
        var p = xi(t, c);
        try {
          bi(e, c, p);
        } catch {
        }
      }
    }
  }
  return e;
}
function Oe(e) {
  return typeof e == "function";
}
function mr(e) {
  return typeof e == "object" && "styledComponentId" in e;
}
function ke(e, t) {
  return e && t ? "".concat(e, " ").concat(t) : e || t || "";
}
function wt(e, t) {
  if (e.length === 0) return "";
  for (var r = e[0], n = 1; n < e.length; n++) r += t ? t + e[n] : e[n];
  return r;
}
function We(e) {
  return e !== null && typeof e == "object" && e.constructor.name === Object.name && !("props" in e && e.$$typeof);
}
function cr(e, t, r) {
  if (r === void 0 && (r = !1), !r && !We(e) && !Array.isArray(e)) return t;
  if (Array.isArray(t)) for (var n = 0; n < t.length; n++) e[n] = cr(e[n], t[n]);
  else if (We(t)) for (var n in t) e[n] = cr(e[n], t[n]);
  return e;
}
function br(e, t) {
  Object.defineProperty(e, "toString", { value: t });
}
var $i = process.env.NODE_ENV !== "production" ? { 1: `Cannot create styled-component for component: %s.

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
function wi() {
  for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
  for (var r = e[0], n = [], i = 1, a = e.length; i < a; i += 1) n.push(e[i]);
  return n.forEach(function(s) {
    r = r.replace(/%[a-z]/, s);
  }), r;
}
function Y(e) {
  for (var t = [], r = 1; r < arguments.length; r++) t[r - 1] = arguments[r];
  return process.env.NODE_ENV === "production" ? new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(e, " for more information.").concat(t.length > 0 ? " Args: ".concat(t.join(", ")) : "")) : new Error(wi.apply(void 0, Pe([$i[e]], t, !1)).trim());
}
var _i = function() {
  function e(t) {
    this.groupSizes = new Uint32Array(512), this.length = 512, this.tag = t;
  }
  return e.prototype.indexOfGroup = function(t) {
    for (var r = 0, n = 0; n < t; n++) r += this.groupSizes[n];
    return r;
  }, e.prototype.insertRules = function(t, r) {
    if (t >= this.groupSizes.length) {
      for (var n = this.groupSizes, i = n.length, a = i; t >= a; ) if ((a <<= 1) < 0) throw Y(16, "".concat(t));
      this.groupSizes = new Uint32Array(a), this.groupSizes.set(n), this.length = a;
      for (var s = i; s < a; s++) this.groupSizes[s] = 0;
    }
    for (var u = this.indexOfGroup(t + 1), c = (s = 0, r.length); s < c; s++) this.tag.insertRule(u, r[s]) && (this.groupSizes[t]++, u++);
  }, e.prototype.clearGroup = function(t) {
    if (t < this.length) {
      var r = this.groupSizes[t], n = this.indexOfGroup(t), i = n + r;
      this.groupSizes[t] = 0;
      for (var a = n; a < i; a++) this.tag.deleteRule(n);
    }
  }, e.prototype.getGroup = function(t) {
    var r = "";
    if (t >= this.length || this.groupSizes[t] === 0) return r;
    for (var n = this.groupSizes[t], i = this.indexOfGroup(t), a = i + n, s = i; s < a; s++) r += "".concat(this.tag.getRule(s)).concat(yr);
    return r;
  }, e;
}(), Ei = 1 << 30, bt = /* @__PURE__ */ new Map(), _t = /* @__PURE__ */ new Map(), vt = 1, ft = function(e) {
  if (bt.has(e)) return bt.get(e);
  for (; _t.has(vt); ) vt++;
  var t = vt++;
  if (process.env.NODE_ENV !== "production" && ((0 | t) < 0 || t > Ei)) throw Y(16, "".concat(t));
  return bt.set(e, t), _t.set(t, e), t;
}, ki = function(e, t) {
  vt = t + 1, bt.set(e, t), _t.set(t, e);
}, Ri = "style[".concat(fe, "][").concat(St, '="').concat(Fe, '"]'), Pi = new RegExp("^".concat(fe, '\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')), Oi = function(e, t, r) {
  for (var n, i = r.split(","), a = 0, s = i.length; a < s; a++) (n = i[a]) && e.registerName(t, n);
}, Ci = function(e, t) {
  for (var r, n = ((r = t.textContent) !== null && r !== void 0 ? r : "").split(yr), i = [], a = 0, s = n.length; a < s; a++) {
    var u = n[a].trim();
    if (u) {
      var c = u.match(Pi);
      if (c) {
        var p = 0 | parseInt(c[1], 10), h = c[2];
        p !== 0 && (ki(h, p), Oi(e, h, c[3]), e.getTag().insertRules(p, i)), i.length = 0;
      } else i.push(u);
    }
  }
}, Jr = function(e) {
  for (var t = document.querySelectorAll(Ri), r = 0, n = t.length; r < n; r++) {
    var i = t[r];
    i && i.getAttribute(fe) !== xn && (Ci(e, i), i.parentNode && i.parentNode.removeChild(i));
  }
};
function lr() {
  return typeof __webpack_nonce__ < "u" ? __webpack_nonce__ : null;
}
var jn = function(e) {
  var t = document.head, r = e || t, n = document.createElement("style"), i = function(u) {
    var c = Array.from(u.querySelectorAll("style[".concat(fe, "]")));
    return c[c.length - 1];
  }(r), a = i !== void 0 ? i.nextSibling : null;
  n.setAttribute(fe, xn), n.setAttribute(St, Fe);
  var s = lr();
  return s && n.setAttribute("nonce", s), r.insertBefore(n, a), n;
}, ji = function() {
  function e(t) {
    this.element = jn(t), this.element.appendChild(document.createTextNode("")), this.sheet = function(r) {
      if (r.sheet) return r.sheet;
      for (var n = document.styleSheets, i = 0, a = n.length; i < a; i++) {
        var s = n[i];
        if (s.ownerNode === r) return s;
      }
      throw Y(17);
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
}(), Ti = function() {
  function e(t) {
    this.element = jn(t), this.nodes = this.element.childNodes, this.length = 0;
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
}(), Ai = function() {
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
}(), Qr = $t, Li = { isServer: !$t, useCSSOMInjection: !li }, Qe = function() {
  function e(t, r, n) {
    t === void 0 && (t = He), r === void 0 && (r = {});
    var i = this;
    this.options = B(B({}, Li), t), this.gs = r, this.names = new Map(n), this.server = !!t.isServer, !this.server && $t && Qr && (Qr = !1, Jr(this)), br(this, function() {
      return function(a) {
        for (var s = a.getTag(), u = s.length, c = "", p = function(g) {
          var b = function(f) {
            return _t.get(f);
          }(g);
          if (b === void 0) return "continue";
          var w = a.names.get(b), j = s.getGroup(g);
          if (w === void 0 || !w.size || j.length === 0) return "continue";
          var m = "".concat(fe, ".g").concat(g, '[id="').concat(b, '"]'), C = "";
          w !== void 0 && w.forEach(function(f) {
            f.length > 0 && (C += "".concat(f, ","));
          }), c += "".concat(j).concat(m, '{content:"').concat(C, '"}').concat(yr);
        }, h = 0; h < u; h++) p(h);
        return c;
      }(i);
    });
  }
  return e.registerId = function(t) {
    return ft(t);
  }, e.prototype.rehydrate = function() {
    !this.server && $t && Jr(this);
  }, e.prototype.reconstructWithOptions = function(t, r) {
    return r === void 0 && (r = !0), new e(B(B({}, this.options), t), this.gs, r && this.names || void 0);
  }, e.prototype.allocateGSInstance = function(t) {
    return this.gs[t] = (this.gs[t] || 0) + 1;
  }, e.prototype.getTag = function() {
    return this.tag || (this.tag = (t = function(r) {
      var n = r.useCSSOMInjection, i = r.target;
      return r.isServer ? new Ai(i) : n ? new ji(i) : new Ti(i);
    }(this.options), new _i(t)));
    var t;
  }, e.prototype.hasNameForId = function(t, r) {
    return this.names.has(t) && this.names.get(t).has(r);
  }, e.prototype.registerName = function(t, r) {
    if (ft(t), this.names.has(t)) this.names.get(t).add(r);
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
}(), Ii = /&/g, Ni = /^\s*\/\/.*$/gm;
function Tn(e, t) {
  return e.map(function(r) {
    return r.type === "rule" && (r.value = "".concat(t, " ").concat(r.value), r.value = r.value.replaceAll(",", ",".concat(t, " ")), r.props = r.props.map(function(n) {
      return "".concat(t, " ").concat(n);
    })), Array.isArray(r.children) && r.type !== "@keyframes" && (r.children = Tn(r.children, t)), r;
  });
}
function An(e) {
  var t, r, n, i = e === void 0 ? He : e, a = i.options, s = a === void 0 ? He : a, u = i.plugins, c = u === void 0 ? Ct : u, p = function(b, w, j) {
    return j.startsWith(r) && j.endsWith(r) && j.replaceAll(r, "").length > 0 ? ".".concat(t) : b;
  }, h = c.slice();
  h.push(function(b) {
    b.type === kt && b.value.includes("&") && (b.props[0] = b.props[0].replace(Ii, r).replace(n, p));
  }), s.prefix && h.push(si), h.push(oi);
  var g = function(b, w, j, m) {
    w === void 0 && (w = ""), j === void 0 && (j = ""), m === void 0 && (m = "&"), t = m, r = w, n = new RegExp("\\".concat(r, "\\b"), "g");
    var C = b.replace(Ni, ""), f = ri(j || w ? "".concat(j, " ").concat(w, " { ").concat(C, " }") : C);
    s.namespace && (f = Tn(f, s.namespace));
    var y = [];
    return xt(f, ii(h.concat(ai(function(S) {
      return y.push(S);
    })))), y;
  };
  return g.hash = c.length ? c.reduce(function(b, w) {
    return w.name || Y(15), Ee(b, w.name);
  }, wn).toString() : "", g;
}
var zi = new Qe(), ur = An(), vr = M.createContext({ shouldForwardProp: void 0, styleSheet: zi, stylis: ur });
vr.Consumer;
var Di = M.createContext(void 0);
function Et() {
  return sn(vr);
}
function Ln(e) {
  var t = fr(e.stylisPlugins), r = t[0], n = t[1], i = Et().styleSheet, a = ht(function() {
    var c = i;
    return e.sheet ? c = e.sheet : e.target && (c = c.reconstructWithOptions({ target: e.target }, !1)), e.disableCSSOMInjection && (c = c.reconstructWithOptions({ useCSSOMInjection: !1 })), c;
  }, [e.disableCSSOMInjection, e.sheet, e.target, i]), s = ht(function() {
    return An({ options: { namespace: e.namespace, prefix: e.enableVendorPrefixes }, plugins: r });
  }, [e.enableVendorPrefixes, e.namespace, r]);
  an(function() {
    Bo(r, e.stylisPlugins) || n(e.stylisPlugins);
  }, [e.stylisPlugins]);
  var u = ht(function() {
    return { shouldForwardProp: e.shouldForwardProp, styleSheet: a, stylis: s };
  }, [e.shouldForwardProp, a, s]);
  return M.createElement(vr.Provider, { value: u }, M.createElement(Di.Provider, { value: s }, e.children));
}
var en = function() {
  function e(t, r) {
    var n = this;
    this.inject = function(i, a) {
      a === void 0 && (a = ur);
      var s = n.name + a.hash;
      i.hasNameForId(n.id, s) || i.insertRules(n.id, s, a(n.rules, s, "@keyframes"));
    }, this.name = t, this.id = "sc-keyframes-".concat(t), this.rules = r, br(this, function() {
      throw Y(12, String(n.name));
    });
  }
  return e.prototype.getName = function(t) {
    return t === void 0 && (t = ur), this.name + t.hash;
  }, e;
}(), Mi = function(e) {
  return e >= "A" && e <= "Z";
};
function tn(e) {
  for (var t = "", r = 0; r < e.length; r++) {
    var n = e[r];
    if (r === 1 && n === "-" && e[0] === "-") return e;
    Mi(n) ? t += "-" + n.toLowerCase() : t += n;
  }
  return t.startsWith("ms-") ? "-" + t : t;
}
var In = function(e) {
  return e == null || e === !1 || e === "";
}, Nn = function(e) {
  var t, r, n = [];
  for (var i in e) {
    var a = e[i];
    e.hasOwnProperty(i) && !In(a) && (Array.isArray(a) && a.isCss || Oe(a) ? n.push("".concat(tn(i), ":"), a, ";") : We(a) ? n.push.apply(n, Pe(Pe(["".concat(i, " {")], Nn(a), !1), ["}"], !1)) : n.push("".concat(tn(i), ": ").concat((t = i, (r = a) == null || typeof r == "boolean" || r === "" ? "" : typeof r != "number" || r === 0 || t in ci || t.startsWith("--") ? String(r).trim() : "".concat(r, "px")), ";")));
  }
  return n;
};
function ve(e, t, r, n) {
  if (In(e)) return [];
  if (mr(e)) return [".".concat(e.styledComponentId)];
  if (Oe(e)) {
    if (!Oe(a = e) || a.prototype && a.prototype.isReactComponent || !t) return [e];
    var i = e(t);
    return process.env.NODE_ENV === "production" || typeof i != "object" || Array.isArray(i) || i instanceof en || We(i) || i === null || console.error("".concat(kn(e), " is not a styled component and cannot be referred to via component selector. See https://www.styled-components.com/docs/advanced#referring-to-other-components for more details.")), ve(i, t, r, n);
  }
  var a;
  return e instanceof en ? r ? (e.inject(r, n), [e.getName(n)]) : [e] : We(e) ? Nn(e) : Array.isArray(e) ? Array.prototype.concat.apply(Ct, e.map(function(s) {
    return ve(s, t, r, n);
  })) : [e.toString()];
}
function zn(e) {
  for (var t = 0; t < e.length; t += 1) {
    var r = e[t];
    if (Oe(r) && !mr(r)) return !1;
  }
  return !0;
}
var Fi = _n(Fe), Hi = function() {
  function e(t, r, n) {
    this.rules = t, this.staticRulesId = "", this.isStatic = process.env.NODE_ENV === "production" && (n === void 0 || n.isStatic) && zn(t), this.componentId = r, this.baseHash = Ee(Fi, r), this.baseStyle = n, Qe.registerId(r);
  }
  return e.prototype.generateAndInjectStyles = function(t, r, n) {
    var i = this.baseStyle ? this.baseStyle.generateAndInjectStyles(t, r, n) : "";
    if (this.isStatic && !n.hash) if (this.staticRulesId && r.hasNameForId(this.componentId, this.staticRulesId)) i = ke(i, this.staticRulesId);
    else {
      var a = wt(ve(this.rules, t, r, n)), s = sr(Ee(this.baseHash, a) >>> 0);
      if (!r.hasNameForId(this.componentId, s)) {
        var u = n(a, ".".concat(s), void 0, this.componentId);
        r.insertRules(this.componentId, s, u);
      }
      i = ke(i, s), this.staticRulesId = s;
    }
    else {
      for (var c = Ee(this.baseHash, n.hash), p = "", h = 0; h < this.rules.length; h++) {
        var g = this.rules[h];
        if (typeof g == "string") p += g, process.env.NODE_ENV !== "production" && (c = Ee(c, g));
        else if (g) {
          var b = wt(ve(g, t, r, n));
          c = Ee(c, b + h), p += b;
        }
      }
      if (p) {
        var w = sr(c >>> 0);
        r.hasNameForId(this.componentId, w) || r.insertRules(this.componentId, w, n(p, ".".concat(w), void 0, this.componentId)), i = ke(i, w);
      }
    }
    return i;
  }, e;
}(), Be = M.createContext(void 0);
Be.Consumer;
function Dn() {
  var e = sn(Be);
  if (!e) throw Y(18);
  return e;
}
function Wi(e) {
  var t = M.useContext(Be), r = ht(function() {
    return function(n, i) {
      if (!n) throw Y(14);
      if (Oe(n)) {
        var a = n(i);
        if (process.env.NODE_ENV !== "production" && (a === null || Array.isArray(a) || typeof a != "object")) throw Y(7);
        return a;
      }
      if (Array.isArray(n) || typeof n != "object") throw Y(8);
      return i ? B(B({}, i), n) : n;
    }(e.theme, t);
  }, [e.theme, t]);
  return e.children ? M.createElement(Be.Provider, { value: r }, e.children) : null;
}
var Wt = {}, rn = /* @__PURE__ */ new Set();
function Bi(e, t, r) {
  var n = mr(e), i = e, a = !Ht(e), s = t.attrs, u = s === void 0 ? Ct : s, c = t.componentId, p = c === void 0 ? function(R, A) {
    var k = typeof R != "string" ? "sc" : Ur(R);
    Wt[k] = (Wt[k] || 0) + 1;
    var $ = "".concat(k, "-").concat(En(Fe + k + Wt[k]));
    return A ? "".concat(A, "-").concat($) : $;
  }(t.displayName, t.parentComponentId) : c, h = t.displayName, g = h === void 0 ? function(R) {
    return Ht(R) ? "styled.".concat(R) : "Styled(".concat(kn(R), ")");
  }(e) : h, b = t.displayName && t.componentId ? "".concat(Ur(t.displayName), "-").concat(t.componentId) : t.componentId || p, w = n && i.attrs ? i.attrs.concat(u).filter(Boolean) : u, j = t.shouldForwardProp;
  if (n && i.shouldForwardProp) {
    var m = i.shouldForwardProp;
    if (t.shouldForwardProp) {
      var C = t.shouldForwardProp;
      j = function(R, A) {
        return m(R, A) && C(R, A);
      };
    } else j = m;
  }
  var f = new Hi(r, b, n ? i.componentStyle : void 0);
  function y(R, A) {
    return function(k, $, X) {
      var Z = k.attrs, jt = k.componentStyle, Tt = k.defaultProps, rt = k.foldedComponentIds, J = k.styledComponentId, se = k.target, xe = M.useContext(Be), nt = Et(), je = k.shouldForwardProp || nt.shouldForwardProp;
      process.env.NODE_ENV !== "production" && Nr(J);
      var Ge = $n($, xe, Tt) || He, Q = function(Ae, ce, ye) {
        for (var re, ne = B(B({}, ce), { className: void 0, theme: ye }), me = 0; me < Ae.length; me += 1) {
          var Le = Oe(re = Ae[me]) ? re(ne) : re;
          for (var oe in Le) ne[oe] = oe === "className" ? ke(ne[oe], Le[oe]) : oe === "style" ? B(B({}, ne[oe]), Le[oe]) : Le[oe];
        }
        return ce.className && (ne.className = ke(ne.className, ce.className)), ne;
      }(Z, $, Ge), he = Q.as || se, ge = {};
      for (var V in Q) Q[V] === void 0 || V[0] === "$" || V === "as" || V === "theme" && Q.theme === Ge || (V === "forwardedAs" ? ge.as = Q.forwardedAs : je && !je(V, he) || (ge[V] = Q[V], je || process.env.NODE_ENV !== "development" || Ho(V) || rn.has(V) || !ar.has(he) || (rn.add(V), console.warn('styled-components: it looks like an unknown prop "'.concat(V, '" is being sent through to the DOM, which will likely trigger a React console error. If you would like automatic filtering of unknown props, you can opt-into that behavior via `<StyleSheetManager shouldForwardProp={...}>` (connect an API like `@emotion/is-prop-valid`) or consider using transient props (`$` prefix for automatic filtering.)')))));
      var Te = function(Ae, ce) {
        var ye = Et(), re = Ae.generateAndInjectStyles(ce, ye.styleSheet, ye.stylis);
        return process.env.NODE_ENV !== "production" && Nr(re), re;
      }(jt, Q);
      process.env.NODE_ENV !== "production" && k.warnTooManyClasses && k.warnTooManyClasses(Te);
      var Ue = ke(rt, J);
      return Te && (Ue += " " + Te), Q.className && (Ue += " " + Q.className), ge[Ht(he) && !ar.has(he) ? "class" : "className"] = Ue, ge.ref = X, mo(he, ge);
    }(S, R, A);
  }
  y.displayName = g;
  var S = M.forwardRef(y);
  return S.attrs = w, S.componentStyle = f, S.displayName = g, S.shouldForwardProp = j, S.foldedComponentIds = n ? ke(i.foldedComponentIds, i.styledComponentId) : "", S.styledComponentId = b, S.target = n ? i.target : e, Object.defineProperty(S, "defaultProps", { get: function() {
    return this._foldedDefaultProps;
  }, set: function(R) {
    this._foldedDefaultProps = n ? function(A) {
      for (var k = [], $ = 1; $ < arguments.length; $++) k[$ - 1] = arguments[$];
      for (var X = 0, Z = k; X < Z.length; X++) cr(A, Z[X], !0);
      return A;
    }({}, i.defaultProps, R) : R;
  } }), process.env.NODE_ENV !== "production" && (Sn(g, b), S.warnTooManyClasses = /* @__PURE__ */ function(R, A) {
    var k = {}, $ = !1;
    return function(X) {
      if (!$ && (k[X] = !0, Object.keys(k).length >= 200)) {
        var Z = A ? ' with the id of "'.concat(A, '"') : "";
        console.warn("Over ".concat(200, " classes were generated for component ").concat(R).concat(Z, `.
`) + `Consider using the attrs method, together with a style object for frequently changed styles.
Example:
  const Component = styled.div.attrs(props => ({
    style: {
      background: props.background,
    },
  }))\`width: 100%;\`

  <Component />`), $ = !0, k = {};
      }
    };
  }(g, b)), br(S, function() {
    return ".".concat(S.styledComponentId);
  }), a && Cn(S, e, { attrs: !0, componentStyle: !0, displayName: !0, foldedComponentIds: !0, shouldForwardProp: !0, styledComponentId: !0, target: !0 }), S;
}
function nn(e, t) {
  for (var r = [e[0]], n = 0, i = t.length; n < i; n += 1) r.push(t[n], e[n + 1]);
  return r;
}
var on = function(e) {
  return Object.assign(e, { isCss: !0 });
};
function E(e) {
  for (var t = [], r = 1; r < arguments.length; r++) t[r - 1] = arguments[r];
  if (Oe(e) || We(e)) return on(ve(nn(Ct, Pe([e], t, !0))));
  var n = e;
  return t.length === 0 && n.length === 1 && typeof n[0] == "string" ? ve(n) : on(ve(nn(n, t)));
}
function dr(e, t, r) {
  if (r === void 0 && (r = He), !t) throw Y(1, t);
  var n = function(i) {
    for (var a = [], s = 1; s < arguments.length; s++) a[s - 1] = arguments[s];
    return e(t, r, E.apply(void 0, Pe([i], a, !1)));
  };
  return n.attrs = function(i) {
    return dr(e, t, B(B({}, r), { attrs: Array.prototype.concat(r.attrs, i).filter(Boolean) }));
  }, n.withConfig = function(i) {
    return dr(e, t, B(B({}, r), i));
  }, n;
}
var Mn = function(e) {
  return dr(Bi, e);
}, D = Mn;
ar.forEach(function(e) {
  D[e] = Mn(e);
});
var qi = function() {
  function e(t, r) {
    this.rules = t, this.componentId = r, this.isStatic = zn(t), Qe.registerId(this.componentId + 1);
  }
  return e.prototype.createStyles = function(t, r, n, i) {
    var a = i(wt(ve(this.rules, r, n, i)), ""), s = this.componentId + t;
    n.insertRules(s, s, a);
  }, e.prototype.removeStyles = function(t, r) {
    r.clearRules(this.componentId + t);
  }, e.prototype.renderStyles = function(t, r, n, i) {
    t > 2 && Qe.registerId(this.componentId + t), this.removeStyles(t, n), this.createStyles(t, r, n, i);
  }, e;
}();
function Vi(e) {
  for (var t = [], r = 1; r < arguments.length; r++) t[r - 1] = arguments[r];
  var n = E.apply(void 0, Pe([e], t, !1)), i = "sc-global-".concat(En(JSON.stringify(n))), a = new qi(n, i);
  process.env.NODE_ENV !== "production" && Sn(i);
  var s = function(c) {
    var p = Et(), h = M.useContext(Be), g = M.useRef(p.styleSheet.allocateGSInstance(i)).current;
    return process.env.NODE_ENV !== "production" && M.Children.count(c.children) && console.warn("The global style component ".concat(i, " was given child JSX. createGlobalStyle does not render children.")), process.env.NODE_ENV !== "production" && n.some(function(b) {
      return typeof b == "string" && b.indexOf("@import") !== -1;
    }) && console.warn("Please do not use @import CSS syntax in createGlobalStyle at this time, as the CSSOM APIs we use in production do not handle it well. Instead, we recommend using a library such as react-helmet to inject a typical <link> meta tag to the stylesheet, or simply embedding it manually in your index.html <head> section for a simpler app."), p.styleSheet.server && u(g, c, p.styleSheet, h, p.stylis), M.useLayoutEffect(function() {
      if (!p.styleSheet.server) return u(g, c, p.styleSheet, h, p.stylis), function() {
        return a.removeStyles(g, p.styleSheet);
      };
    }, [g, c, p.styleSheet, h, p.stylis]), null;
  };
  function u(c, p, h, g, b) {
    if (a.isStatic) a.renderStyles(c, ui, h, b);
    else {
      var w = B(B({}, p), { theme: $n(p, g, s.defaultProps) });
      a.renderStyles(c, w, h, b);
    }
  }
  return M.memo(s);
}
var Gi = function() {
  function e() {
    var t = this;
    this._emitSheetCSS = function() {
      var r = t.instance.toString();
      if (!r) return "";
      var n = lr(), i = wt([n && 'nonce="'.concat(n, '"'), "".concat(fe, '="true"'), "".concat(St, '="').concat(Fe, '"')].filter(Boolean), " ");
      return "<style ".concat(i, ">").concat(r, "</style>");
    }, this.getStyleTags = function() {
      if (t.sealed) throw Y(2);
      return t._emitSheetCSS();
    }, this.getStyleElement = function() {
      var r;
      if (t.sealed) throw Y(2);
      var n = t.instance.toString();
      if (!n) return [];
      var i = ((r = {})[fe] = "", r[St] = Fe, r.dangerouslySetInnerHTML = { __html: n }, r), a = lr();
      return a && (i.nonce = a), [M.createElement("style", B({}, i, { key: "sc-0-0" }))];
    }, this.seal = function() {
      t.sealed = !0;
    }, this.instance = new Qe({ isServer: !0 }), this.sealed = !1;
  }
  return e.prototype.collectStyles = function(t) {
    if (this.sealed) throw Y(2);
    return M.createElement(Ln, { sheet: this.instance }, t);
  }, e.prototype.interleaveWithNodeStream = function(t) {
    throw Y(3);
  }, e;
}();
process.env.NODE_ENV !== "production" && typeof navigator < "u" && navigator.product === "ReactNative" && console.warn(`It looks like you've imported 'styled-components' on React Native.
Perhaps you're looking to import 'styled-components/native'?
Read more about this at https://www.styled-components.com/docs/basics#react-native`);
var pt = "__sc-".concat(fe, "__");
process.env.NODE_ENV !== "production" && process.env.NODE_ENV !== "test" && typeof window < "u" && (window[pt] || (window[pt] = 0), window[pt] === 1 && console.warn(`It looks like there are several instances of 'styled-components' initialized in this application. This may cause dynamic styles to not render properly, errors during the rehydration process, a missing theme prop, and makes your application bigger without good reason.

See https://s-c.sh/2BAXzed for more info.`), window[pt] += 1);
function za({ children: e }) {
  const [t] = fr(() => new Gi());
  return Do.useServerInsertedHTML(() => {
    const r = t.getStyleElement();
    return t.instance.clearTag(), /* @__PURE__ */ x.jsx(x.Fragment, { children: r });
  }), typeof window < "u" ? /* @__PURE__ */ x.jsx(x.Fragment, { children: e }) : /* @__PURE__ */ x.jsx(Ln, { sheet: t.instance, enableVendorPrefixes: !0, children: e });
}
const Ui = (e) => Vi`
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
function Yi({ ...e }) {
  const t = Dn();
  return /* @__PURE__ */ x.jsx(
    "svg",
    {
      width: "12",
      height: "10",
      viewBox: "0 0 12 10",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      ...e,
      children: /* @__PURE__ */ x.jsx(
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
function Xi({ ...e }) {
  const t = Dn();
  return /* @__PURE__ */ x.jsx(
    "svg",
    {
      width: "16",
      height: "10",
      viewBox: "0 0 16 10",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      ...e,
      children: /* @__PURE__ */ x.jsx(
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
const xr = {
  xs: 0,
  sm: 576,
  md: 768,
  lg: 992,
  xl: 1200,
  xxl: 1440,
  xxxl: 1920
};
function I(e) {
  return `@media screen and (min-width: ${xr[e]}px)`;
}
const Fn = {
  maxWidth: { xs: "1280px", xxxl: "1440px" },
  padding: { xs: "20px", lg: "40px" },
  radius: { xs: "6px", lg: "12px", xl: "30px" },
  gridGap: { xs: "20px", lg: "40px" }
}, Ki = {
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
}, Zi = {
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
}, Hn = {
  xs: "0px 4px 4px 0px rgba(18, 18, 18, 0.04), 0px 1px 3px 0px rgba(39, 41, 45, 0.02)",
  sm: "0px 4px 4px 0px rgba(18, 18, 18, 0.08), 0px 1px 3px 0px rgba(39, 41, 45, 0.04)",
  md: "0px 8px 8px 0px rgba(18, 18, 18, 0.16), 0px 2px 3px 0px rgba(39, 41, 45, 0.06)",
  lg: "0px 16px 24px 0px rgba(18, 18, 18, 0.20), 0px 2px 3px 0px rgba(39, 41, 45, 0.08)",
  xl: "0px 24px 32px 0px rgba(18, 18, 18, 0.24), 0px 2px 3px 0px rgba(39, 41, 45, 0.12)"
}, Wn = {
  text: "Inter",
  head: "Inter",
  mono: "monospace"
}, Bn = {
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
}, qn = {
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
}, tt = {
  breakpoints: xr,
  spacing: Fn,
  colors: Ki,
  shadows: Hn,
  fonts: Wn,
  fontSizes: Bn,
  lineHeights: qn,
  isDark: !1
}, Da = {
  breakpoints: xr,
  spacing: Fn,
  colors: Zi,
  shadows: Hn,
  fonts: Wn,
  fontSizes: Bn,
  lineHeights: qn,
  isDark: !0
}, de = E`
  box-sizing: border-box;
  appearance: none;
  border: none;
  background: none;
  padding: 0;
  margin: 0;
  cursor: pointer;
  outline: none;
`, Sr = E`
  cursor: text;
  min-width: 100px;
`, pe = (e) => {
  if (e)
    return E`
      width: 100%;
    `;
}, Ce = (e, t, r) => {
  if (e)
    return E`
      border-color: ${r == null ? void 0 : r.colors.error};
    `;
  if (t)
    return E`
      border-color: ${r == null ? void 0 : r.colors.success};
    `;
}, $r = (e) => e === "big" ? E`
      height: 60px;
    ` : E`
    height: 50px;
  `, U = (e, t) => E`
  ${I(e)} {
    gap: ${t === "none" ? "0" : `${t}px`};
  }
`, Se = (e, t) => E`
  ${I(e)} {
    grid-template-columns: repeat(${t || 3}, minmax(0, 1fr));
  }
`, $e = (e, t) => E`
  ${I(e)} {
    grid-column: span ${t};
  }
`, we = (e, t) => E`
  ${I(e)} {
    padding: ${t === "none" ? "0" : `${t}px`};
  }
`, _e = (e, t) => E`
  ${I(e)} {
    justify-content: ${t && `${t}`};
  }
`, Ma = (e) => E`
  font-size: ${e.fontSizes.hero1.xs};
  line-height: ${e.lineHeights.hero1.xs};

  ${I("lg")} {
    font-size: ${e.fontSizes.hero1.lg};
    line-height: ${e.lineHeights.hero1.lg};
  }
`, Fa = (e) => E`
  font-size: ${e.fontSizes.hero2.xs};
  line-height: ${e.lineHeights.hero2.xs};

  ${I("lg")} {
    font-size: ${e.fontSizes.hero2.lg};
    line-height: ${e.lineHeights.hero2.lg};
  }
`, Ha = (e) => E`
  font-size: ${e.fontSizes.hero3.xs};
  line-height: ${e.lineHeights.hero3.xs};

  ${I("lg")} {
    font-size: ${e.fontSizes.hero3.lg};
    line-height: ${e.lineHeights.hero3.lg};
  }
`, Wa = (e) => E`
  font-size: ${e.fontSizes.h1.xs};
  line-height: ${e.lineHeights.h1.xs};

  ${I("lg")} {
    font-size: ${e.fontSizes.h1.lg};
    line-height: ${e.lineHeights.h1.lg};
  }
`, Ba = (e) => E`
  font-size: ${e.fontSizes.h2.xs};
  line-height: ${e.lineHeights.h2.xs};

  ${I("lg")} {
    font-size: ${e.fontSizes.h2.lg};
    line-height: ${e.lineHeights.h2.lg};
  }
`, qa = (e) => E`
  font-size: ${e.fontSizes.h3.xs};
  line-height: ${e.lineHeights.h3.xs};

  ${I("lg")} {
    font-size: ${e.fontSizes.h3.lg};
    line-height: ${e.lineHeights.h3.lg};
  }
`, Va = (e) => E`
  font-size: ${e.fontSizes.h4.xs};
  line-height: ${e.lineHeights.h4.xs};

  ${I("lg")} {
    font-size: ${e.fontSizes.h4.lg};
    line-height: ${e.lineHeights.h4.lg};
  }
`, Ga = (e) => E`
  font-size: ${e.fontSizes.h5.xs};
  line-height: ${e.lineHeights.h5.xs};

  ${I("lg")} {
    font-size: ${e.fontSizes.h5.lg};
    line-height: ${e.lineHeights.h5.lg};
  }
`, Ua = (e) => E`
  font-size: ${e.fontSizes.h6.xs};
  line-height: ${e.lineHeights.h6.xs};

  ${I("lg")} {
    font-size: ${e.fontSizes.h6.lg};
    line-height: ${e.lineHeights.h6.lg};
  }
`, Ya = (e) => E`
  font-size: ${e.fontSizes.text.xs};
  line-height: ${e.lineHeights.text.xs};

  ${I("lg")} {
    font-size: ${e.fontSizes.text.lg};
    line-height: ${e.lineHeights.text.lg};
  }
`, Xa = (e) => E`
  font-size: ${e.fontSizes.strong.xs};
  line-height: ${e.lineHeights.strong.xs};

  ${I("lg")} {
    font-size: ${e.fontSizes.strong.lg};
    line-height: ${e.lineHeights.strong.lg};
  }
`, Ka = (e) => E`
  font-size: ${e.fontSizes.small.xs};
  line-height: ${e.lineHeights.small.xs};

  ${I("lg")} {
    font-size: ${e.fontSizes.small.lg};
    line-height: ${e.lineHeights.small.lg};
  }
`, Za = (e) => E`
  font-size: ${e.fontSizes.blockquote.xs};
  line-height: ${e.lineHeights.blockquote.xs};

  ${I("lg")} {
    font-size: ${e.fontSizes.blockquote.lg};
    line-height: ${e.lineHeights.blockquote.lg};
  }
`, Ja = (e) => E`
  font-size: ${e.fontSizes.code.xs};
  line-height: ${e.lineHeights.code.xs};

  ${I("lg")} {
    font-size: ${e.fontSizes.code.lg};
    line-height: ${e.lineHeights.code.lg};
  }
`, Qa = (e) => E`
  font-size: ${e.fontSizes.button.xs};
  line-height: ${e.lineHeights.button.xs};

  ${I("lg")} {
    font-size: ${e.fontSizes.button.lg};
    line-height: ${e.lineHeights.button.lg};
  }
`, es = (e) => E`
  font-size: ${e.fontSizes.buttonBig.xs};
  line-height: ${e.lineHeights.buttonBig.xs};

  ${I("lg")} {
    font-size: ${e.fontSizes.buttonBig.lg};
    line-height: ${e.lineHeights.buttonBig.lg};
  }
`, ts = (e) => E`
  font-size: ${e.fontSizes.input.xs};
  line-height: ${e.lineHeights.input.xs};

  ${I("lg")} {
    font-size: ${e.fontSizes.input.lg};
    line-height: ${e.lineHeights.input.lg};
  }
`, rs = (e) => E`
  font-size: ${e.fontSizes.inputBig.xs};
  line-height: ${e.lineHeights.inputBig.xs};

  ${I("lg")} {
    font-size: ${e.fontSizes.inputBig.lg};
    line-height: ${e.lineHeights.inputBig.lg};
  }
`, Ji = bo({
  setTheme: null
});
function ns({
  children: e,
  theme: t,
  themeDark: r
}) {
  const [n, i] = fr(t);
  an(() => {
    if (!r) return i(t);
    localStorage.theme === "dark" || !("theme" in localStorage) && window.matchMedia("(prefers-color-scheme: dark)").matches ? (document.documentElement.classList.add("dark"), i(r)) : (document.documentElement.classList.remove("dark"), i(t));
  }, []);
  const a = Ui(n);
  return /* @__PURE__ */ x.jsx(Wi, { theme: n, children: /* @__PURE__ */ x.jsxs(Ji.Provider, { value: { setTheme: i }, children: [
    /* @__PURE__ */ x.jsx(a, {}),
    e
  ] }) });
}
const Qi = D.div`
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

  ${({ $xsPadding: e }) => e && we("xs", e)}
  ${({ $smPadding: e }) => e && we("sm", e)}
	${({ $mdPadding: e }) => e && we("md", e)}
	${({ $lgPadding: e }) => e && we("lg", e)}
	${({ $xlPadding: e }) => e && we("xl", e)}
	${({ $xxlPadding: e }) => e && we("xxl", e)}
	${({ $xxxlPadding: e }) => e && we("xxxl", e)}
`;
function ea({ theme: e = tt, ...t }) {
  return /* @__PURE__ */ x.jsx(Qi, { ...t, theme: e, children: t.children });
}
const ta = K(ea), ra = D(ta)`
  background: ${({ theme: e }) => e.colors.light};
  border-radius: ${({ theme: e }) => e.spacing.radius.lg};
  border: solid 1px ${({ theme: e }) => e.colors.grayLight};
`;
function na({ theme: e = tt, ...t }) {
  return /* @__PURE__ */ x.jsx(ra, { ...t, theme: e, children: t.children });
}
const os = K(na), oa = (e, t, r, n, i, a) => E`
  ${de};
  font-family: inherit;
  display: inline-flex;
  padding: 15px 30px;
  border-radius: 100px;
  font-weight: 600;
  white-space: nowrap;
  hyphens: auto;
  color: ${e.isDark ? e.colors.dark : e.colors.light};
  text-decoration: none;
  transition: all 0.3s ease;
  text-align: center;
  gap: 10px;
  text-overflow: ellipsis;
  justify-content: center;

  & .icon,
  & .lucide {
    margin: -4px 0 0 0;
    min-width: 24px;
  }

  ${!a && t === "primary" && E`
    color: ${n ? e.colors.primary : e.colors.light};
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

  ${!a && t === "secondary" && E`
    color: ${n ? e.colors.secondary : e.colors.light};
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

	${!a && t === "tertiary" && E`
    color: ${n ? e.colors.tertiary : e.colors.light};
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

	${$r(r)}

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
`, ia = D.button`
  ${({ theme: e, $variant: t, $size: r, $outline: n, $fullWidth: i, disabled: a }) => oa(e, t, r, n, i, a)}
`;
function aa({ $variant: e = "primary", ...t }) {
  return /* @__PURE__ */ x.jsxs(ia, { $variant: e, ...t, children: [
    t.$iconPosition !== "right" && t.$icon && t.$icon,
    t.children,
    t.$iconPosition === "right" && t.$icon && t.$icon
  ] });
}
const is = K(aa), sa = D.div`
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
function ca({ theme: e = tt, ...t }) {
  return /* @__PURE__ */ x.jsx(sa, { ...t, theme: e, children: t.children });
}
const as = K(ca), la = D.div`
  display: flex;
  justify-content: ${({ $justifyContent: e }) => e || "flex-start"};
  flex-wrap: ${({ $wrap: e }) => e || "wrap"};
  gap: ${({ $gap: e, theme: t }) => e && `${e}px` || t.spacing.gridGap.xs};
  flex-direction: ${({ $direction: e }) => e || "row"};

  ${I("lg")} {
    gap: ${({ $gap: e, theme: t }) => e && `${e}px` || t.spacing.gridGap.lg};
  }

  ${({ $xsGap: e }) => e && U("xs", e)}
  ${({ $xsJustifyContent: e }) => e && _e("xs", e)}
	${({ $smGap: e }) => e && U("sm", e)}
	${({ $smJustifyContent: e }) => e && _e("sm", e)}
	${({ $mdGap: e }) => e && U("md", e)}
	${({ $mdJustifyContent: e }) => e && _e("md", e)}
	${({ $lgGap: e }) => e && U("lg", e)}
	${({ $lgJustifyContent: e }) => e && _e("lg", e)}
	${({ $xlGap: e }) => e && U("xl", e)}
	${({ $xlJustifyContent: e }) => e && _e("xl", e)}
	${({ $xxlGap: e }) => e && U("xxl", e)}
	${({ $xxlJustifyContent: e }) => e && _e("xxl", e)}
	${({ $xxxlGap: e }) => e && U("xxxl", e)}
	${({ $xxxlJustifyContent: e }) => e && _e("xxxl", e)}
  ${({ $fullWidth: e }) => pe(!!e)}
`;
function ua({ theme: e = tt, ...t }) {
  return /* @__PURE__ */ x.jsx(la, { ...t, theme: e, children: t.children });
}
const ss = K(ua), da = D.div`
  width: 100%;
  display: grid;
  grid-template-columns: ${({ $cols: e }) => `repeat(${e || 3}, minmax(0, 1fr))`};
  gap: ${({ $gap: e, theme: t }) => e && `${e}px` || t.spacing.gridGap.xs};

  ${I("lg")} {
    gap: ${({ $gap: e, theme: t }) => e && `${e}px` || t.spacing.gridGap.lg};
  }

  ${({ $xsGap: e }) => e && U("xs", e)}
  ${({ $smGap: e }) => e && U("sm", e)}
	${({ $mdGap: e }) => e && U("md", e)}
	${({ $lgGap: e }) => e && U("lg", e)}
	${({ $xlGap: e }) => e && U("xl", e)}
	${({ $xxlGap: e }) => e && U("xxl", e)}
	${({ $xxxlGap: e }) => e && U("xxxl", e)}

	${({ $xsCols: e }) => e && Se("xs", e)}
	${({ $smCols: e }) => e && Se("sm", e)}
	${({ $mdCols: e }) => e && Se("md", e)}
	${({ $lgCols: e }) => e && Se("lg", e)}
	${({ $xlCols: e }) => e && Se("xl", e)}
	${({ $xxlCols: e }) => e && Se("xxl", e)}
	${({ $xxxlCols: e }) => e && Se("xxxl", e)}
`;
function fa({ theme: e = tt, ...t }) {
  return /* @__PURE__ */ x.jsx(da, { ...t, theme: e, children: t.children });
}
const cs = K(fa), et = D.span`
  display: inline-flex;
  flex-wrap: ${({ type: e }) => e === "checkbox" || e === "radio" ? "nowrap" : "wrap"};
  align-items: center;

  ${({ $label: e }) => e && E`
      gap: 10px;
    `}

  ${({ $fullWidth: e }) => pe(!!e)}
`, qe = D.label`
  display: inline-block;
  color: ${({ theme: e }) => e.colors.grayDark};
  font-size: ${({ theme: e }) => e.fontSizes.text.lg};
  line-height: ${({ theme: e }) => e.lineHeights.text.lg};
`, pa = D.input`
  ${de};
  ${Sr};
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
  word-break: keep-all;
  white-space: nowrap;

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

  ${({ $size: e }) => $r(e)}

  ${({ $size: e, theme: t }) => e === "big" ? `font-size: ${t.fontSizes.inputBig.lg};
			line-height: ${t.lineHeights.inputBig.lg};
	` : `font-size: ${t.fontSizes.input.lg};
			line-height: ${t.lineHeights.input.lg};`}

	${({ $error: e, $success: t, theme: r }) => Ce(!!e, !!t, r)}

	${({ disabled: e, theme: t }) => e && `cursor: not-allowed;
		background: ${t.colors.grayLight};
		border-color: ${t.colors.gray};
		color: ${t.colors.gray};
	`}

	${({ $fullWidth: e }) => pe(!!e)}
`, ha = D.span`
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
`, ga = D.input`
  ${de};
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

	${({ $error: e, $success: t, theme: r }) => Ce(!!e, !!t, r)}

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
`, ya = D.span`
  position: relative;
  ${({ $fullWidth: e }) => pe(!!e)};

  & svg {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    pointer-events: none;
    width: 24px;
    height: 24px;
    object-fit: contain;
    color: ${({ theme: e }) => e.colors.primary};
  }

  ${({ $icon: e, $iconPosition: t }) => e && t === "right" ? E`
          & svg {
            right: 16px;
          }

          & input {
            padding-right: 50px;
          }
        ` : E`
          & svg {
            left: 16px;
          }

          & svg ~ input {
            padding-left: 50px;
          }
        `}
`;
function ma({ ...e }) {
  return e.type === "checkbox" || e.type === "radio" ? /* @__PURE__ */ x.jsxs(et, { $fullWidth: e.$fullWidth, type: e.type, $label: e.$label, children: [
    /* @__PURE__ */ x.jsxs(ha, { children: [
      /* @__PURE__ */ x.jsx(ga, { ...e }),
      !e.disabled && e.type === "checkbox" ? /* @__PURE__ */ x.jsx(Yi, {}) : /* @__PURE__ */ x.jsx("em", {})
    ] }),
    e.$label && /* @__PURE__ */ x.jsx(qe, { htmlFor: e.id, children: e.$label })
  ] }) : /* @__PURE__ */ x.jsxs(et, { $fullWidth: e.$fullWidth, type: e.type, $label: e.$label, children: [
    e.$label && /* @__PURE__ */ x.jsx(qe, { htmlFor: e.id, children: e.$label }),
    /* @__PURE__ */ x.jsxs(
      ya,
      {
        $fullWidth: e.$fullWidth,
        $iconPosition: e.$iconPosition,
        $icon: e.$icon,
        children: [
          e.$iconPosition !== "right" && e.$icon && e.$icon,
          /* @__PURE__ */ x.jsx(pa, { ...e }),
          e.$iconPosition === "right" && e.$icon && e.$icon
        ]
      }
    )
  ] });
}
const ls = K(ma), Vn = (e) => `max-width: ${e}px;`;
function ba(e) {
  return Object.keys(e).filter((t) => t.startsWith("$")).map((t) => {
    const r = t.substring(1);
    return e[t] && I(r) + `{ ${Vn(e[t])} }`;
  }).join("");
}
const va = D.div`
  display: block;
  margin: auto;

  ${({ $size: e }) => `
		${e && Vn(e)};
	`}
  ${(e) => ba(e)}
`;
function xa({ ...e }) {
  return /* @__PURE__ */ x.jsx(va, { ...e, children: e.children });
}
const us = K(xa), Sa = D.span`
  display: inline-flex;
  flex-wrap: ${({ type: e }) => e === "checkbox" || e === "radio" ? "fprnowrap" : "wrap"};
  gap: 10px;
  align-items: center;

  ${({ $fullWidth: e }) => pe(!!e)}
`, $a = D.input`
  ${de};
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
    ${({ $error: e, $success: t, theme: r }) => Ce(!!e, !!t, r)}
  }

  &::-moz-range-track {
    width: 100%;
    cursor: pointer;
    border-radius: ${({ theme: e }) => e.spacing.radius.xl};
    border: solid 2px ${({ theme: e }) => e.colors.grayLight};
    box-shadow: 0 0 0 0 ${({ theme: e }) => e.colors.primaryLight};
    transition: all 0.3s ease;
    ${({ $error: e, $success: t, theme: r }) => Ce(!!e, !!t, r)}
  }

  &::-webkit-slider-thumb {
    ${de};
    background: ${({ theme: e }) => e.colors.primary};
    border: 0 solid transparent;
    border-radius: 50%;
    transition: all 0.3s ease;
  }

  &::-moz-range-thumb {
    ${de};
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

  ${({ $fullWidth: e }) => pe(!!e)}

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
function wa({ ...e }) {
  return /* @__PURE__ */ x.jsxs(Sa, { $fullWidth: e.$fullWidth, children: [
    e.$label && /* @__PURE__ */ x.jsx(qe, { htmlFor: e.id, children: e.$label }),
    /* @__PURE__ */ x.jsx($a, { ...e, type: "range" })
  ] });
}
const ds = K(wa), _a = D.select`
  ${de};
  ${Sr};
  font-family: inherit;
  display: inline-block;
  padding: 0 15px;
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

  ${({ $size: e }) => $r(e)}

  ${({ $size: e, theme: t }) => e === "big" ? `font-size: ${t.fontSizes.inputBig.lg};
			line-height: ${t.lineHeights.inputBig.lg};
	` : `font-size: ${t.fontSizes.input.lg};
			line-height: ${t.lineHeights.input.lg};`}

	${({ $error: e, $success: t, theme: r }) => Ce(!!e, !!t, r)}

	${({ disabled: e, theme: t }) => e && `cursor: not-allowed;
		background: ${t.colors.grayLight};
		border-color: ${t.colors.gray};
		color: ${t.colors.gray};
	`}

	${({ $fullWidth: e }) => pe(!!e)}
`, Ea = D.span`
  position: relative;
  ${({ $fullWidth: e }) => pe(!!e)}

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
function ka({ ...e }) {
  return /* @__PURE__ */ x.jsxs(et, { $fullWidth: e.$fullWidth, $label: e.$label, children: [
    e.$label && /* @__PURE__ */ x.jsx(qe, { htmlFor: e.id, children: e.$label }),
    /* @__PURE__ */ x.jsxs(Ea, { $fullWidth: e.$fullWidth, children: [
      /* @__PURE__ */ x.jsx(_a, { ...e, children: e.children }),
      /* @__PURE__ */ x.jsx(Xi, {})
    ] })
  ] });
}
const fs = K(ka), Gn = (e, t) => t ? `display: inline-block;
			max-height: 0;
			min-width: ${e}px;
			max-width: ${e}px;` : `display: block;
			min-height: ${e}px;
			max-height: ${e}px;`;
function Ra(e) {
  return Object.keys(e).filter((t) => t.startsWith("$")).map((t) => {
    const r = t.substring(1);
    return e[t] && I(r) + `{ ${Gn(e[t], e.$horizontal || !1)} }`;
  }).join("");
}
const Pa = D.span`
  ${({ $horizontal: e, $size: t }) => `
		${t && t !== "none" && Gn(t, e || !1)};
		${t === "none" && "display: none;"};
	`}
  ${(e) => Ra(e)}
`;
function Oa({ ...e }) {
  return /* @__PURE__ */ x.jsx(Pa, { ...e, ref: e.ref });
}
const ps = K(Oa), Ca = D.textarea`
  ${de};
  ${Sr};
  font-family: inherit;
  display: inline-block;
  padding: 15px;
  border-radius: ${({ theme: e }) => e.spacing.radius.xs};
  font-weight: 400;
  white-space: break-spaces;
  hyphens: none;
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

  ${({ $error: e, $success: t, theme: r }) => Ce(!!e, !!t, r)}

	${({ disabled: e, theme: t }) => e && `cursor: not-allowed;
		background: ${t.colors.grayLight};
		border-color: ${t.colors.gray};
		color: ${t.colors.gray};
	`}

	${({ $fullWidth: e }) => pe(!!e)}
`;
function ja({ ...e }) {
  return /* @__PURE__ */ x.jsxs(et, { $fullWidth: e.$fullWidth, $label: e.$label, children: [
    e.$label && /* @__PURE__ */ x.jsx(qe, { htmlFor: e.id, $label: e.$label, children: e.$label }),
    /* @__PURE__ */ x.jsx(Ca, { ...e, ref: e.ref, children: e.children })
  ] });
}
const hs = K(ja), Ta = D.span`
  display: inline-block;
  margin: auto 0;
  position: relative;
  vertical-align: middle;
`, Aa = D.span`
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

  ${({ $error: e, $success: t, theme: r }) => Ce(!!e, !!t, r)}

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
`, La = D.input`
  ${de};
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
function Ia({ type: e = "checkbox", ...t }) {
  return /* @__PURE__ */ x.jsxs(et, { $fullWidth: t.$fullWidth, $label: t.$label, children: [
    /* @__PURE__ */ x.jsxs(Ta, { children: [
      /* @__PURE__ */ x.jsx(La, { ...t, type: e, ref: t.ref }),
      /* @__PURE__ */ x.jsx(
        Aa,
        {
          $error: t.$error,
          $success: t.$success,
          className: "fake-toggle",
          $size: t.$size
        }
      )
    ] }),
    t.$label && /* @__PURE__ */ x.jsx(qe, { htmlFor: t.id, children: t.$label })
  ] });
}
const gs = K(Ia);
export {
  os as Box,
  is as Button,
  ns as CherryThemeProvider,
  as as Col,
  ta as Container,
  ss as Flex,
  Ui as GlobalStyles,
  cs as Grid,
  Xi as IconArrow,
  Yi as IconCheck,
  ls as Input,
  us as MaxWidth,
  ds as Range,
  fs as Select,
  ps as Space,
  za as StyledComponentsRegistry,
  Ea as StyledIconWrapper,
  et as StyledInputWrapper,
  qe as StyledLabel,
  hs as Textarea,
  Ji as ThemeContext,
  gs as Toggle,
  xr as breakpoints,
  oa as buttonStyles,
  Ki as colors,
  Zi as colorsDark,
  Bn as fontSizes,
  Wn as fonts,
  $r as formElementHeightStyles,
  pe as fullWidthStyles,
  $e as generateColSpanStyles,
  Se as generateColsStyles,
  U as generateGapStyles,
  _e as generateJustifyContentStyles,
  we as generatePaddingStyles,
  qn as lineHeights,
  I as mq,
  de as resetButton,
  Sr as resetInput,
  Hn as shadows,
  Fn as spacing,
  Ce as statusBorderStyles,
  Za as styledBlockquote,
  Qa as styledButton,
  es as styledButtonBig,
  Ja as styledCode,
  Wa as styledH1,
  Ba as styledH2,
  qa as styledH3,
  Va as styledH4,
  Ga as styledH5,
  Ua as styledH6,
  Ma as styledHero1,
  Fa as styledHero2,
  Ha as styledHero3,
  ts as styledInput,
  rs as styledInputBig,
  Ka as styledSmall,
  Xa as styledStrong,
  Ya as styledText,
  tt as theme,
  Da as themeDark
};
