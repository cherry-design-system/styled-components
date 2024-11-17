import H, { useState as dr, useMemo as mt, useEffect as rn, useContext as nn, useRef as _o, useDebugValue as Ir, createElement as Eo, createContext as ko, forwardRef as ae } from "react";
function Ro(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var Yt = { exports: {} }, ot = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Nr;
function Po() {
  if (Nr) return ot;
  Nr = 1;
  var e = H, t = Symbol.for("react.element"), r = Symbol.for("react.fragment"), n = Object.prototype.hasOwnProperty, o = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, s = { key: !0, ref: !0, __self: !0, __source: !0 };
  function a(c, l, p) {
    var h, b = {}, w = null, k = null;
    p !== void 0 && (w = "" + p), l.key !== void 0 && (w = "" + l.key), l.ref !== void 0 && (k = l.ref);
    for (h in l) n.call(l, h) && !s.hasOwnProperty(h) && (b[h] = l[h]);
    if (c && c.defaultProps) for (h in l = c.defaultProps, l) b[h] === void 0 && (b[h] = l[h]);
    return { $$typeof: t, type: c, key: w, ref: k, props: b, _owner: o.current };
  }
  return ot.Fragment = r, ot.jsx = a, ot.jsxs = a, ot;
}
var it = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Mr;
function Oo() {
  return Mr || (Mr = 1, process.env.NODE_ENV !== "production" && function() {
    var e = H, t = Symbol.for("react.element"), r = Symbol.for("react.portal"), n = Symbol.for("react.fragment"), o = Symbol.for("react.strict_mode"), s = Symbol.for("react.profiler"), a = Symbol.for("react.provider"), c = Symbol.for("react.context"), l = Symbol.for("react.forward_ref"), p = Symbol.for("react.suspense"), h = Symbol.for("react.suspense_list"), b = Symbol.for("react.memo"), w = Symbol.for("react.lazy"), k = Symbol.for("react.offscreen"), v = Symbol.iterator, R = "@@iterator";
    function L(i) {
      if (i === null || typeof i != "object")
        return null;
      var f = v && i[v] || i[R];
      return typeof f == "function" ? f : null;
    }
    var T = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function m(i) {
      {
        for (var f = arguments.length, g = new Array(f > 1 ? f - 1 : 0), _ = 1; _ < f; _++)
          g[_ - 1] = arguments[_];
        S("error", i, g);
      }
    }
    function S(i, f, g) {
      {
        var _ = T.ReactDebugCurrentFrame, N = _.getStackAddendum();
        N !== "" && (f += "%s", g = g.concat([N]));
        var F = g.map(function(A) {
          return String(A);
        });
        F.unshift("Warning: " + f), Function.prototype.apply.call(console[i], console, F);
      }
    }
    var E = !1, I = !1, P = !1, $ = !1, K = !1, Z;
    Z = Symbol.for("react.module.reference");
    function $e(i) {
      return !!(typeof i == "string" || typeof i == "function" || i === n || i === s || K || i === o || i === p || i === h || $ || i === k || E || I || P || typeof i == "object" && i !== null && (i.$$typeof === w || i.$$typeof === b || i.$$typeof === a || i.$$typeof === c || i.$$typeof === l || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      i.$$typeof === Z || i.getModuleId !== void 0));
    }
    function He(i, f, g) {
      var _ = i.displayName;
      if (_)
        return _;
      var N = f.displayName || f.name || "";
      return N !== "" ? g + "(" + N + ")" : g;
    }
    function Ce(i) {
      return i.displayName || "Context";
    }
    function Q(i) {
      if (i == null)
        return null;
      if (typeof i.tag == "number" && m("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof i == "function")
        return i.displayName || i.name || null;
      if (typeof i == "string")
        return i;
      switch (i) {
        case n:
          return "Fragment";
        case r:
          return "Portal";
        case s:
          return "Profiler";
        case o:
          return "StrictMode";
        case p:
          return "Suspense";
        case h:
          return "SuspenseList";
      }
      if (typeof i == "object")
        switch (i.$$typeof) {
          case c:
            var f = i;
            return Ce(f) + ".Consumer";
          case a:
            var g = i;
            return Ce(g._context) + ".Provider";
          case l:
            return He(i, i.render, "ForwardRef");
          case b:
            var _ = i.displayName || null;
            return _ !== null ? _ : Q(i.type) || "Memo";
          case w: {
            var N = i, F = N._payload, A = N._init;
            try {
              return Q(A(F));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var le = Object.assign, me = 0, Ve, _e, Ee, te, pe, he, J;
    function ke() {
    }
    ke.__reactDisabledLog = !0;
    function De() {
      {
        if (me === 0) {
          Ve = console.log, _e = console.info, Ee = console.warn, te = console.error, pe = console.group, he = console.groupCollapsed, J = console.groupEnd;
          var i = {
            configurable: !0,
            enumerable: !0,
            value: ke,
            writable: !0
          };
          Object.defineProperties(console, {
            info: i,
            log: i,
            warn: i,
            error: i,
            group: i,
            groupCollapsed: i,
            groupEnd: i
          });
        }
        me++;
      }
    }
    function Re() {
      {
        if (me--, me === 0) {
          var i = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: le({}, i, {
              value: Ve
            }),
            info: le({}, i, {
              value: _e
            }),
            warn: le({}, i, {
              value: Ee
            }),
            error: le({}, i, {
              value: te
            }),
            group: le({}, i, {
              value: pe
            }),
            groupCollapsed: le({}, i, {
              value: he
            }),
            groupEnd: le({}, i, {
              value: J
            })
          });
        }
        me < 0 && m("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var ue = T.ReactCurrentDispatcher, ge;
    function oe(i, f, g) {
      {
        if (ge === void 0)
          try {
            throw Error();
          } catch (N) {
            var _ = N.stack.trim().match(/\n( *(at )?)/);
            ge = _ && _[1] || "";
          }
        return `
` + ge + i;
      }
    }
    var u = !1, d;
    {
      var y = typeof WeakMap == "function" ? WeakMap : Map;
      d = new y();
    }
    function C(i, f) {
      if (!i || u)
        return "";
      {
        var g = d.get(i);
        if (g !== void 0)
          return g;
      }
      var _;
      u = !0;
      var N = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var F;
      F = ue.current, ue.current = null, De();
      try {
        if (f) {
          var A = function() {
            throw Error();
          };
          if (Object.defineProperty(A.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(A, []);
            } catch (be) {
              _ = be;
            }
            Reflect.construct(i, [], A);
          } else {
            try {
              A.call();
            } catch (be) {
              _ = be;
            }
            i.call(A.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (be) {
            _ = be;
          }
          i();
        }
      } catch (be) {
        if (be && _ && typeof be.stack == "string") {
          for (var j = be.stack.split(`
`), ee = _.stack.split(`
`), Y = j.length - 1, G = ee.length - 1; Y >= 1 && G >= 0 && j[Y] !== ee[G]; )
            G--;
          for (; Y >= 1 && G >= 0; Y--, G--)
            if (j[Y] !== ee[G]) {
              if (Y !== 1 || G !== 1)
                do
                  if (Y--, G--, G < 0 || j[Y] !== ee[G]) {
                    var se = `
` + j[Y].replace(" at new ", " at ");
                    return i.displayName && se.includes("<anonymous>") && (se = se.replace("<anonymous>", i.displayName)), typeof i == "function" && d.set(i, se), se;
                  }
                while (Y >= 1 && G >= 0);
              break;
            }
        }
      } finally {
        u = !1, ue.current = F, Re(), Error.prepareStackTrace = N;
      }
      var qe = i ? i.displayName || i.name : "", Lr = qe ? oe(qe) : "";
      return typeof i == "function" && d.set(i, Lr), Lr;
    }
    function W(i, f, g) {
      return C(i, !1);
    }
    function ie(i) {
      var f = i.prototype;
      return !!(f && f.isReactComponent);
    }
    function de(i, f, g) {
      if (i == null)
        return "";
      if (typeof i == "function")
        return C(i, ie(i));
      if (typeof i == "string")
        return oe(i);
      switch (i) {
        case p:
          return oe("Suspense");
        case h:
          return oe("SuspenseList");
      }
      if (typeof i == "object")
        switch (i.$$typeof) {
          case l:
            return W(i.render);
          case b:
            return de(i.type, f, g);
          case w: {
            var _ = i, N = _._payload, F = _._init;
            try {
              return de(F(N), f, g);
            } catch {
            }
          }
        }
      return "";
    }
    var Pe = Object.prototype.hasOwnProperty, Ye = {}, _r = T.ReactDebugCurrentFrame;
    function dt(i) {
      if (i) {
        var f = i._owner, g = de(i.type, i._source, f ? f.type : null);
        _r.setExtraStackFrame(g);
      } else
        _r.setExtraStackFrame(null);
    }
    function no(i, f, g, _, N) {
      {
        var F = Function.call.bind(Pe);
        for (var A in i)
          if (F(i, A)) {
            var j = void 0;
            try {
              if (typeof i[A] != "function") {
                var ee = Error((_ || "React class") + ": " + g + " type `" + A + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof i[A] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw ee.name = "Invariant Violation", ee;
              }
              j = i[A](f, A, _, g, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (Y) {
              j = Y;
            }
            j && !(j instanceof Error) && (dt(N), m("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", _ || "React class", g, A, typeof j), dt(null)), j instanceof Error && !(j.message in Ye) && (Ye[j.message] = !0, dt(N), m("Failed %s type: %s", g, j.message), dt(null));
          }
      }
    }
    var oo = Array.isArray;
    function It(i) {
      return oo(i);
    }
    function io(i) {
      {
        var f = typeof Symbol == "function" && Symbol.toStringTag, g = f && i[Symbol.toStringTag] || i.constructor.name || "Object";
        return g;
      }
    }
    function ao(i) {
      try {
        return Er(i), !1;
      } catch {
        return !0;
      }
    }
    function Er(i) {
      return "" + i;
    }
    function kr(i) {
      if (ao(i))
        return m("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", io(i)), Er(i);
    }
    var nt = T.ReactCurrentOwner, so = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, Rr, Pr, Nt;
    Nt = {};
    function co(i) {
      if (Pe.call(i, "ref")) {
        var f = Object.getOwnPropertyDescriptor(i, "ref").get;
        if (f && f.isReactWarning)
          return !1;
      }
      return i.ref !== void 0;
    }
    function lo(i) {
      if (Pe.call(i, "key")) {
        var f = Object.getOwnPropertyDescriptor(i, "key").get;
        if (f && f.isReactWarning)
          return !1;
      }
      return i.key !== void 0;
    }
    function uo(i, f) {
      if (typeof i.ref == "string" && nt.current && f && nt.current.stateNode !== f) {
        var g = Q(nt.current.type);
        Nt[g] || (m('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', Q(nt.current.type), i.ref), Nt[g] = !0);
      }
    }
    function fo(i, f) {
      {
        var g = function() {
          Rr || (Rr = !0, m("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", f));
        };
        g.isReactWarning = !0, Object.defineProperty(i, "key", {
          get: g,
          configurable: !0
        });
      }
    }
    function po(i, f) {
      {
        var g = function() {
          Pr || (Pr = !0, m("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", f));
        };
        g.isReactWarning = !0, Object.defineProperty(i, "ref", {
          get: g,
          configurable: !0
        });
      }
    }
    var ho = function(i, f, g, _, N, F, A) {
      var j = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: t,
        // Built-in properties that belong on the element
        type: i,
        key: f,
        ref: g,
        props: A,
        // Record the component responsible for creating this element.
        _owner: F
      };
      return j._store = {}, Object.defineProperty(j._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(j, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: _
      }), Object.defineProperty(j, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: N
      }), Object.freeze && (Object.freeze(j.props), Object.freeze(j)), j;
    };
    function go(i, f, g, _, N) {
      {
        var F, A = {}, j = null, ee = null;
        g !== void 0 && (kr(g), j = "" + g), lo(f) && (kr(f.key), j = "" + f.key), co(f) && (ee = f.ref, uo(f, N));
        for (F in f)
          Pe.call(f, F) && !so.hasOwnProperty(F) && (A[F] = f[F]);
        if (i && i.defaultProps) {
          var Y = i.defaultProps;
          for (F in Y)
            A[F] === void 0 && (A[F] = Y[F]);
        }
        if (j || ee) {
          var G = typeof i == "function" ? i.displayName || i.name || "Unknown" : i;
          j && fo(A, G), ee && po(A, G);
        }
        return ho(i, j, ee, N, _, nt.current, A);
      }
    }
    var Mt = T.ReactCurrentOwner, Or = T.ReactDebugCurrentFrame;
    function Ge(i) {
      if (i) {
        var f = i._owner, g = de(i.type, i._source, f ? f.type : null);
        Or.setExtraStackFrame(g);
      } else
        Or.setExtraStackFrame(null);
    }
    var zt;
    zt = !1;
    function Ft(i) {
      return typeof i == "object" && i !== null && i.$$typeof === t;
    }
    function Tr() {
      {
        if (Mt.current) {
          var i = Q(Mt.current.type);
          if (i)
            return `

Check the render method of \`` + i + "`.";
        }
        return "";
      }
    }
    function yo(i) {
      return "";
    }
    var Cr = {};
    function mo(i) {
      {
        var f = Tr();
        if (!f) {
          var g = typeof i == "string" ? i : i.displayName || i.name;
          g && (f = `

Check the top-level render call using <` + g + ">.");
        }
        return f;
      }
    }
    function Dr(i, f) {
      {
        if (!i._store || i._store.validated || i.key != null)
          return;
        i._store.validated = !0;
        var g = mo(f);
        if (Cr[g])
          return;
        Cr[g] = !0;
        var _ = "";
        i && i._owner && i._owner !== Mt.current && (_ = " It was passed a child from " + Q(i._owner.type) + "."), Ge(i), m('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', g, _), Ge(null);
      }
    }
    function jr(i, f) {
      {
        if (typeof i != "object")
          return;
        if (It(i))
          for (var g = 0; g < i.length; g++) {
            var _ = i[g];
            Ft(_) && Dr(_, f);
          }
        else if (Ft(i))
          i._store && (i._store.validated = !0);
        else if (i) {
          var N = L(i);
          if (typeof N == "function" && N !== i.entries)
            for (var F = N.call(i), A; !(A = F.next()).done; )
              Ft(A.value) && Dr(A.value, f);
        }
      }
    }
    function bo(i) {
      {
        var f = i.type;
        if (f == null || typeof f == "string")
          return;
        var g;
        if (typeof f == "function")
          g = f.propTypes;
        else if (typeof f == "object" && (f.$$typeof === l || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        f.$$typeof === b))
          g = f.propTypes;
        else
          return;
        if (g) {
          var _ = Q(f);
          no(g, i.props, "prop", _, i);
        } else if (f.PropTypes !== void 0 && !zt) {
          zt = !0;
          var N = Q(f);
          m("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", N || "Unknown");
        }
        typeof f.getDefaultProps == "function" && !f.getDefaultProps.isReactClassApproved && m("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function xo(i) {
      {
        for (var f = Object.keys(i.props), g = 0; g < f.length; g++) {
          var _ = f[g];
          if (_ !== "children" && _ !== "key") {
            Ge(i), m("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", _), Ge(null);
            break;
          }
        }
        i.ref !== null && (Ge(i), m("Invalid attribute `ref` supplied to `React.Fragment`."), Ge(null));
      }
    }
    function Ar(i, f, g, _, N, F) {
      {
        var A = $e(i);
        if (!A) {
          var j = "";
          (i === void 0 || typeof i == "object" && i !== null && Object.keys(i).length === 0) && (j += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var ee = yo();
          ee ? j += ee : j += Tr();
          var Y;
          i === null ? Y = "null" : It(i) ? Y = "array" : i !== void 0 && i.$$typeof === t ? (Y = "<" + (Q(i.type) || "Unknown") + " />", j = " Did you accidentally export a JSX literal instead of a component?") : Y = typeof i, m("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", Y, j);
        }
        var G = go(i, f, g, N, F);
        if (G == null)
          return G;
        if (A) {
          var se = f.children;
          if (se !== void 0)
            if (_)
              if (It(se)) {
                for (var qe = 0; qe < se.length; qe++)
                  jr(se[qe], i);
                Object.freeze && Object.freeze(se);
              } else
                m("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              jr(se, i);
        }
        return i === n ? xo(G) : bo(G), G;
      }
    }
    function vo(i, f, g) {
      return Ar(i, f, g, !0);
    }
    function wo(i, f, g) {
      return Ar(i, f, g, !1);
    }
    var So = wo, $o = vo;
    it.Fragment = n, it.jsx = So, it.jsxs = $o;
  }()), it;
}
process.env.NODE_ENV === "production" ? Yt.exports = Po() : Yt.exports = Oo();
var x = Yt.exports, Gt = { exports: {} }, on = {}, an = {};
function To(e) {
  return e && e.__esModule ? e : { default: e };
}
an._ = To;
(function(e) {
  "use client";
  Object.defineProperty(e, "__esModule", {
    value: !0
  });
  function t(p, h) {
    for (var b in h) Object.defineProperty(p, b, {
      enumerable: !0,
      get: h[b]
    });
  }
  t(e, {
    AppRouterContext: function() {
      return o;
    },
    GlobalLayoutRouterContext: function() {
      return a;
    },
    LayoutRouterContext: function() {
      return s;
    },
    MissingSlotContext: function() {
      return l;
    },
    TemplateContext: function() {
      return c;
    }
  });
  const n = /* @__PURE__ */ an._(H), o = n.default.createContext(null), s = n.default.createContext(null), a = n.default.createContext(null), c = n.default.createContext(null);
  process.env.NODE_ENV !== "production" && (o.displayName = "AppRouterContext", s.displayName = "LayoutRouterContext", a.displayName = "GlobalLayoutRouterContext", c.displayName = "TemplateContext");
  const l = n.default.createContext(/* @__PURE__ */ new Set());
})(on);
var sn = {};
(function(e) {
  "use client";
  Object.defineProperty(e, "__esModule", {
    value: !0
  });
  function t(a, c) {
    for (var l in c) Object.defineProperty(a, l, {
      enumerable: !0,
      get: c[l]
    });
  }
  t(e, {
    PathParamsContext: function() {
      return s;
    },
    PathnameContext: function() {
      return o;
    },
    SearchParamsContext: function() {
      return n;
    }
  });
  const r = H, n = (0, r.createContext)(null), o = (0, r.createContext)(null), s = (0, r.createContext)(null);
  process.env.NODE_ENV !== "production" && (n.displayName = "SearchParamsContext", o.displayName = "PathnameContext", s.displayName = "PathParamsContext");
})(sn);
var qt = { exports: {} };
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
})(qt, qt.exports);
var Co = qt.exports, cn = {};
(function(e) {
  Object.defineProperty(e, "__esModule", {
    value: !0
  });
  function t(a, c) {
    for (var l in c) Object.defineProperty(a, l, {
      enumerable: !0,
      get: c[l]
    });
  }
  t(e, {
    DEFAULT_SEGMENT_KEY: function() {
      return s;
    },
    PAGE_SEGMENT_KEY: function() {
      return o;
    },
    addSearchParamsIfPageSegment: function() {
      return n;
    },
    isGroupSegment: function() {
      return r;
    }
  });
  function r(a) {
    return a[0] === "(" && a.endsWith(")");
  }
  function n(a, c) {
    if (a.includes(o)) {
      const p = JSON.stringify(c);
      return p !== "{}" ? o + "?" + p : o;
    }
    return a;
  }
  const o = "__PAGE__", s = "__DEFAULT__";
})(cn);
var Ut = { exports: {} }, Xt = { exports: {} }, ln = {}, un = {}, Ot = {};
(function(e) {
  Object.defineProperty(e, "__esModule", {
    value: !0
  });
  function t(l, p) {
    for (var h in p) Object.defineProperty(l, h, {
      enumerable: !0,
      get: p[h]
    });
  }
  t(e, {
    bindSnapshot: function() {
      return a;
    },
    createAsyncLocalStorage: function() {
      return s;
    },
    createSnapshot: function() {
      return c;
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
    static bind(p) {
      return p;
    }
  }
  const o = typeof globalThis < "u" && globalThis.AsyncLocalStorage;
  function s() {
    return o ? new o() : new n();
  }
  function a(l) {
    return o ? o.bind(l) : n.bind(l);
  }
  function c() {
    return o ? o.snapshot() : function(l, ...p) {
      return l(...p);
    };
  }
})(Ot);
(function(e) {
  Object.defineProperty(e, "__esModule", {
    value: !0
  }), Object.defineProperty(e, "actionAsyncStorage", {
    enumerable: !0,
    get: function() {
      return r;
    }
  });
  const r = (0, Ot.createAsyncLocalStorage)();
})(un);
(function(e) {
  Object.defineProperty(e, "__esModule", {
    value: !0
  }), Object.defineProperty(e, "actionAsyncStorage", {
    enumerable: !0,
    get: function() {
      return t.actionAsyncStorage;
    }
  });
  const t = un;
})(ln);
var Kt = { exports: {} };
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
var Do = Kt.exports;
(function(e, t) {
  Object.defineProperty(t, "__esModule", {
    value: !0
  });
  function r(v, R) {
    for (var L in R) Object.defineProperty(v, L, {
      enumerable: !0,
      get: R[L]
    });
  }
  r(t, {
    RedirectType: function() {
      return a;
    },
    getRedirectError: function() {
      return c;
    },
    getRedirectStatusCodeFromError: function() {
      return k;
    },
    getRedirectTypeFromError: function() {
      return w;
    },
    getURLFromRedirectError: function() {
      return b;
    },
    isRedirectError: function() {
      return h;
    },
    permanentRedirect: function() {
      return p;
    },
    redirect: function() {
      return l;
    }
  });
  const n = ln, o = Do, s = "NEXT_REDIRECT";
  var a;
  (function(v) {
    v.push = "push", v.replace = "replace";
  })(a || (a = {}));
  function c(v, R, L) {
    L === void 0 && (L = o.RedirectStatusCode.TemporaryRedirect);
    const T = new Error(s);
    return T.digest = s + ";" + R + ";" + v + ";" + L + ";", T;
  }
  function l(v, R) {
    const L = n.actionAsyncStorage.getStore(), T = R || (L != null && L.isAction ? "push" : "replace");
    throw c(v, T, o.RedirectStatusCode.TemporaryRedirect);
  }
  function p(v, R) {
    throw R === void 0 && (R = "replace"), c(v, R, o.RedirectStatusCode.PermanentRedirect);
  }
  function h(v) {
    if (typeof v != "object" || v === null || !("digest" in v) || typeof v.digest != "string")
      return !1;
    const R = v.digest.split(";"), [L, T] = R, m = R.slice(2, -2).join(";"), S = R.at(-2), E = Number(S);
    return L === s && (T === "replace" || T === "push") && typeof m == "string" && !isNaN(E) && E in o.RedirectStatusCode;
  }
  function b(v) {
    return h(v) ? v.digest.split(";").slice(2, -2).join(";") : null;
  }
  function w(v) {
    if (!h(v))
      throw new Error("Not a redirect error");
    return v.digest.split(";", 2)[1];
  }
  function k(v) {
    if (!h(v))
      throw new Error("Not a redirect error");
    return Number(v.digest.split(";").at(-2));
  }
  (typeof t.default == "function" || typeof t.default == "object" && t.default !== null) && typeof t.default.__esModule > "u" && (Object.defineProperty(t.default, "__esModule", { value: !0 }), Object.assign(t.default, t), e.exports = t.default);
})(Xt, Xt.exports);
var dn = Xt.exports, Jt = { exports: {} };
(function(e, t) {
  Object.defineProperty(t, "__esModule", {
    value: !0
  });
  function r(a, c) {
    for (var l in c) Object.defineProperty(a, l, {
      enumerable: !0,
      get: c[l]
    });
  }
  r(t, {
    isNotFoundError: function() {
      return s;
    },
    notFound: function() {
      return o;
    }
  });
  const n = "NEXT_NOT_FOUND";
  function o() {
    const a = new Error(n);
    throw a.digest = n, a;
  }
  function s(a) {
    return typeof a != "object" || a === null || !("digest" in a) ? !1 : a.digest === n;
  }
  (typeof t.default == "function" || typeof t.default == "object" && t.default !== null) && typeof t.default.__esModule > "u" && (Object.defineProperty(t.default, "__esModule", { value: !0 }), Object.assign(t.default, t), e.exports = t.default);
})(Jt, Jt.exports);
var fn = Jt.exports, Zt = { exports: {} }, pn = {}, Qt = { exports: {} };
(function(e, t) {
  Object.defineProperty(t, "__esModule", {
    value: !0
  });
  function r(a, c) {
    for (var l in c) Object.defineProperty(a, l, {
      enumerable: !0,
      get: c[l]
    });
  }
  r(t, {
    DynamicServerError: function() {
      return o;
    },
    isDynamicServerError: function() {
      return s;
    }
  });
  const n = "DYNAMIC_SERVER_USAGE";
  class o extends Error {
    constructor(c) {
      super("Dynamic server usage: " + c), this.description = c, this.digest = n;
    }
  }
  function s(a) {
    return typeof a != "object" || a === null || !("digest" in a) || typeof a.digest != "string" ? !1 : a.digest === n;
  }
  (typeof t.default == "function" || typeof t.default == "object" && t.default !== null) && typeof t.default.__esModule > "u" && (Object.defineProperty(t.default, "__esModule", { value: !0 }), Object.assign(t.default, t), e.exports = t.default);
})(Qt, Qt.exports);
var hn = Qt.exports, Tt = {};
(function(e) {
  Object.defineProperty(e, "__esModule", {
    value: !0
  });
  function t(s, a) {
    for (var c in a) Object.defineProperty(s, c, {
      enumerable: !0,
      get: a[c]
    });
  }
  t(e, {
    BailoutToCSRError: function() {
      return n;
    },
    isBailoutToCSRError: function() {
      return o;
    }
  });
  const r = "BAILOUT_TO_CLIENT_SIDE_RENDERING";
  class n extends Error {
    constructor(a) {
      super("Bail out to client-side rendering: " + a), this.reason = a, this.digest = r;
    }
  }
  function o(s) {
    return typeof s != "object" || s === null || !("digest" in s) ? !1 : s.digest === r;
  }
})(Tt);
var er = { exports: {} };
(function(e, t) {
  Object.defineProperty(t, "__esModule", {
    value: !0
  }), Object.defineProperty(t, "isNextRouterError", {
    enumerable: !0,
    get: function() {
      return o;
    }
  });
  const r = fn, n = dn;
  function o(s) {
    return (0, n.isRedirectError)(s) || (0, r.isNotFoundError)(s);
  }
  (typeof t.default == "function" || typeof t.default == "object" && t.default !== null) && typeof t.default.__esModule > "u" && (Object.defineProperty(t.default, "__esModule", { value: !0 }), Object.assign(t.default, t), e.exports = t.default);
})(er, er.exports);
var gn = er.exports, fr = {}, tr = { exports: {} };
(function(e, t) {
  Object.defineProperty(t, "__esModule", {
    value: !0
  });
  function r(a, c) {
    for (var l in c) Object.defineProperty(a, l, {
      enumerable: !0,
      get: c[l]
    });
  }
  r(t, {
    StaticGenBailoutError: function() {
      return o;
    },
    isStaticGenBailoutError: function() {
      return s;
    }
  });
  const n = "NEXT_STATIC_GEN_BAILOUT";
  class o extends Error {
    constructor(...c) {
      super(...c), this.code = n;
    }
  }
  function s(a) {
    return typeof a != "object" || a === null || !("code" in a) ? !1 : a.code === n;
  }
  (typeof t.default == "function" || typeof t.default == "object" && t.default !== null) && typeof t.default.__esModule > "u" && (Object.defineProperty(t.default, "__esModule", { value: !0 }), Object.assign(t.default, t), e.exports = t.default);
})(tr, tr.exports);
var jo = tr.exports, yn = {}, mn = {};
(function(e) {
  Object.defineProperty(e, "__esModule", {
    value: !0
  }), Object.defineProperty(e, "workUnitAsyncStorage", {
    enumerable: !0,
    get: function() {
      return r;
    }
  });
  const r = (0, Ot.createAsyncLocalStorage)();
})(mn);
(function(e) {
  Object.defineProperty(e, "__esModule", {
    value: !0
  });
  function t(a, c) {
    for (var l in c) Object.defineProperty(a, l, {
      enumerable: !0,
      get: c[l]
    });
  }
  t(e, {
    getExpectedRequestStore: function() {
      return n;
    },
    getPrerenderResumeDataCache: function() {
      return o;
    },
    getRenderResumeDataCache: function() {
      return s;
    },
    workUnitAsyncStorage: function() {
      return r.workUnitAsyncStorage;
    }
  });
  const r = mn;
  function n(a) {
    const c = r.workUnitAsyncStorage.getStore();
    if (c) {
      if (c.type === "request")
        return c;
      if (c.type === "prerender" || c.type === "prerender-ppr" || c.type === "prerender-legacy")
        throw new Error(`\`${a}\` cannot be called inside a prerender. This is a bug in Next.js.`);
      if (c.type === "cache")
        throw new Error(`\`${a}\` cannot be called inside "use cache". Call it outside and pass an argument instead. Read more: https://nextjs.org/docs/messages/next-request-in-use-cache`);
      if (c.type === "unstable-cache")
        throw new Error(`\`${a}\` cannot be called inside unstable_cache. Call it outside and pass an argument instead. Read more: https://nextjs.org/docs/app/api-reference/functions/unstable_cache`);
    }
    throw new Error(`\`${a}\` was called outside a request scope. Read more: https://nextjs.org/docs/messages/next-dynamic-api-wrong-context`);
  }
  function o(a) {
    return a.type !== "prerender-legacy" && a.type !== "cache" && a.type !== "unstable-cache" ? a.type === "request" ? a.devWarmupPrerenderResumeDataCache : a.prerenderResumeDataCache : null;
  }
  function s(a) {
    return a.type !== "prerender-legacy" && a.type !== "cache" && a.type !== "unstable-cache" ? a.type === "request" ? a.renderResumeDataCache : a.prerenderResumeDataCache : null;
  }
})(yn);
var pr = {}, bn = {};
(function(e) {
  Object.defineProperty(e, "__esModule", {
    value: !0
  }), Object.defineProperty(e, "workAsyncStorage", {
    enumerable: !0,
    get: function() {
      return r;
    }
  });
  const r = (0, Ot.createAsyncLocalStorage)();
})(bn);
(function(e) {
  Object.defineProperty(e, "__esModule", {
    value: !0
  }), Object.defineProperty(e, "workAsyncStorage", {
    enumerable: !0,
    get: function() {
      return t.workAsyncStorage;
    }
  });
  const t = bn;
})(pr);
var xn = {};
(function(e) {
  Object.defineProperty(e, "__esModule", {
    value: !0
  }), Object.defineProperty(e, "makeHangingPromise", {
    enumerable: !0,
    get: function() {
      return t;
    }
  });
  function t(n, o) {
    const s = new Promise((a, c) => {
      n.addEventListener("abort", () => {
        c(new Error(`During prerendering, ${o} rejects when the prerender is complete. Typically these errors are handled by React but if you move ${o} to a different context by using \`setTimeout\`, \`unstable_after\`, or similar functions you may observe this error and you should handle it in that context.`));
      }, {
        once: !0
      });
    });
    return s.catch(r), s;
  }
  function r() {
  }
})(xn);
var vn = {};
(function(e) {
  Object.defineProperty(e, "__esModule", {
    value: !0
  });
  function t(s, a) {
    for (var c in a) Object.defineProperty(s, c, {
      enumerable: !0,
      get: a[c]
    });
  }
  t(e, {
    METADATA_BOUNDARY_NAME: function() {
      return r;
    },
    OUTLET_BOUNDARY_NAME: function() {
      return o;
    },
    VIEWPORT_BOUNDARY_NAME: function() {
      return n;
    }
  });
  const r = "__next_metadata_boundary__", n = "__next_viewport_boundary__", o = "__next_outlet_boundary__";
})(vn);
(function(e) {
  Object.defineProperty(e, "__esModule", {
    value: !0
  });
  function t(u, d) {
    for (var y in d) Object.defineProperty(u, y, {
      enumerable: !0,
      get: d[y]
    });
  }
  t(e, {
    Postpone: function() {
      return $;
    },
    abortAndThrowOnSynchronousRequestDataAccess: function() {
      return I;
    },
    abortOnSynchronousPlatformIOAccess: function() {
      return S;
    },
    accessedDynamicData: function() {
      return me;
    },
    annotateDynamicAccess: function() {
      return pe;
    },
    consumeDynamicAccess: function() {
      return Ve;
    },
    createDynamicTrackingState: function() {
      return b;
    },
    createDynamicValidationState: function() {
      return w;
    },
    createPostponedAbortSignal: function() {
      return te;
    },
    formatDynamicAPIAccesses: function() {
      return _e;
    },
    getFirstDynamicReason: function() {
      return k;
    },
    isDynamicPostpone: function() {
      return $e;
    },
    isPrerenderInterruptedError: function() {
      return le;
    },
    markCurrentScopeAsDynamic: function() {
      return v;
    },
    postponeWithTracking: function() {
      return K;
    },
    throwIfDisallowedDynamic: function() {
      return oe;
    },
    throwToInterruptStaticGeneration: function() {
      return L;
    },
    trackAllowedDynamicAccess: function() {
      return ue;
    },
    trackDynamicDataInDynamicRender: function() {
      return T;
    },
    trackFallbackParamAccessed: function() {
      return R;
    },
    trackSynchronousPlatformIOAccessInDev: function() {
      return E;
    },
    trackSynchronousRequestDataAccessInDev: function() {
      return P;
    },
    useDynamicRouteParams: function() {
      return he;
    }
  });
  const r = /* @__PURE__ */ p(H), n = hn, o = jo, s = yn, a = pr, c = xn, l = vn;
  function p(u) {
    return u && u.__esModule ? u : {
      default: u
    };
  }
  const h = typeof r.default.unstable_postpone == "function";
  function b(u) {
    return {
      isDebugDynamicAccesses: u,
      dynamicAccesses: [],
      syncDynamicExpression: void 0,
      syncDynamicErrorWithStack: null
    };
  }
  function w() {
    return {
      hasSuspendedDynamic: !1,
      hasDynamicMetadata: !1,
      hasDynamicViewport: !1,
      hasSyncDynamicErrors: !1,
      dynamicErrors: []
    };
  }
  function k(u) {
    var d;
    return (d = u.dynamicAccesses[0]) == null ? void 0 : d.expression;
  }
  function v(u, d, y) {
    if (!(d && (d.type === "cache" || d.type === "unstable-cache")) && !(u.forceDynamic || u.forceStatic)) {
      if (u.dynamicShouldError)
        throw new o.StaticGenBailoutError(`Route ${u.route} with \`dynamic = "error"\` couldn't be rendered statically because it used \`${y}\`. See more info here: https://nextjs.org/docs/app/building-your-application/rendering/static-and-dynamic#dynamic-rendering`);
      if (d)
        if (d.type === "prerender-ppr")
          K(u.route, y, d.dynamicTracking);
        else if (d.type === "prerender-legacy") {
          d.revalidate = 0;
          const C = new n.DynamicServerError(`Route ${u.route} couldn't be rendered statically because it used ${y}. See more info here: https://nextjs.org/docs/messages/dynamic-server-error`);
          throw u.dynamicUsageDescription = y, u.dynamicUsageStack = C.stack, C;
        } else process.env.NODE_ENV === "development" && d && d.type === "request" && (d.usedDynamic = !0);
    }
  }
  function R(u, d) {
    const y = s.workUnitAsyncStorage.getStore();
    !y || y.type !== "prerender-ppr" || K(u.route, d, y.dynamicTracking);
  }
  function L(u, d, y) {
    const C = new n.DynamicServerError(`Route ${d.route} couldn't be rendered statically because it used \`${u}\`. See more info here: https://nextjs.org/docs/messages/dynamic-server-error`);
    throw y.revalidate = 0, d.dynamicUsageDescription = u, d.dynamicUsageStack = C.stack, C;
  }
  function T(u, d) {
    if (d) {
      if (d.type === "cache" || d.type === "unstable-cache")
        return;
      (d.type === "prerender" || d.type === "prerender-legacy") && (d.revalidate = 0), process.env.NODE_ENV === "development" && d.type === "request" && (d.usedDynamic = !0);
    }
  }
  function m(u, d, y) {
    const C = `Route ${u} needs to bail out of prerendering at this point because it used ${d}.`, W = Q(C);
    y.controller.abort(W);
    const ie = y.dynamicTracking;
    ie && ie.dynamicAccesses.push({
      // When we aren't debugging, we don't need to create another error for the
      // stack trace.
      stack: ie.isDebugDynamicAccesses ? new Error().stack : void 0,
      expression: d
    });
  }
  function S(u, d, y, C) {
    const W = C.dynamicTracking;
    return W && W.syncDynamicErrorWithStack === null && (W.syncDynamicExpression = d, W.syncDynamicErrorWithStack = y), m(u, d, C);
  }
  function E(u) {
    u.prerenderPhase = !1;
  }
  function I(u, d, y, C) {
    const W = C.dynamicTracking;
    throw W && W.syncDynamicErrorWithStack === null && (W.syncDynamicExpression = d, W.syncDynamicErrorWithStack = y, C.validating === !0 && (W.syncDynamicLogged = !0)), m(u, d, C), Q(`Route ${u} needs to bail out of prerendering at this point because it used ${d}.`);
  }
  const P = E;
  function $({ reason: u, route: d }) {
    const y = s.workUnitAsyncStorage.getStore(), C = y && y.type === "prerender-ppr" ? y.dynamicTracking : null;
    K(d, u, C);
  }
  function K(u, d, y) {
    Ee(), y && y.dynamicAccesses.push({
      // When we aren't debugging, we don't need to create another error for the
      // stack trace.
      stack: y.isDebugDynamicAccesses ? new Error().stack : void 0,
      expression: d
    }), r.default.unstable_postpone(Z(u, d));
  }
  function Z(u, d) {
    return `Route ${u} needs to bail out of prerendering at this point because it used ${d}. React throws this special object to indicate where. It should not be caught by your own try/catch. Learn more: https://nextjs.org/docs/messages/ppr-caught-error`;
  }
  function $e(u) {
    return typeof u == "object" && u !== null && typeof u.message == "string" ? He(u.message) : !1;
  }
  function He(u) {
    return u.includes("needs to bail out of prerendering at this point because it used") && u.includes("Learn more: https://nextjs.org/docs/messages/ppr-caught-error");
  }
  if (He(Z("%%%", "^^^")) === !1)
    throw new Error("Invariant: isDynamicPostpone misidentified a postpone reason. This is a bug in Next.js");
  const Ce = "NEXT_PRERENDER_INTERRUPTED";
  function Q(u) {
    const d = new Error(u);
    return d.digest = Ce, d;
  }
  function le(u) {
    return typeof u == "object" && u !== null && u.digest === Ce && "name" in u && "message" in u && u instanceof Error;
  }
  function me(u) {
    return u.length > 0;
  }
  function Ve(u, d) {
    return u.dynamicAccesses.push(...d.dynamicAccesses), u.dynamicAccesses;
  }
  function _e(u) {
    return u.filter((d) => typeof d.stack == "string" && d.stack.length > 0).map(({ expression: d, stack: y }) => (y = y.split(`
`).slice(4).filter((C) => !(C.includes("node_modules/next/") || C.includes(" (<anonymous>)") || C.includes(" (node:"))).join(`
`), `Dynamic API Usage Debug - ${d}:
${y}`));
  }
  function Ee() {
    if (!h)
      throw new Error("Invariant: React.unstable_postpone is not defined. This suggests the wrong version of React was loaded. This is a bug in Next.js");
  }
  function te(u) {
    Ee();
    const d = new AbortController();
    try {
      r.default.unstable_postpone(u);
    } catch (y) {
      d.abort(y);
    }
    return d.signal;
  }
  function pe(u, d) {
    const y = d.dynamicTracking;
    y && y.dynamicAccesses.push({
      stack: y.isDebugDynamicAccesses ? new Error().stack : void 0,
      expression: u
    });
  }
  function he(u) {
    if (typeof window > "u") {
      const d = a.workAsyncStorage.getStore();
      if (d && d.isStaticGeneration && d.fallbackRouteParams && d.fallbackRouteParams.size > 0) {
        const y = s.workUnitAsyncStorage.getStore();
        y && (y.type === "prerender" ? r.default.use((0, c.makeHangingPromise)(y.renderSignal, u)) : y.type === "prerender-ppr" ? K(d.route, u, y.dynamicTracking) : y.type === "prerender-legacy" && L(u, d, y));
      }
    }
  }
  const J = /\n\s+at Suspense \(<anonymous>\)/, ke = new RegExp(`\\n\\s+at ${l.METADATA_BOUNDARY_NAME}[\\n\\s]`), De = new RegExp(`\\n\\s+at ${l.VIEWPORT_BOUNDARY_NAME}[\\n\\s]`), Re = new RegExp(`\\n\\s+at ${l.OUTLET_BOUNDARY_NAME}[\\n\\s]`);
  function ue(u, d, y, C, W) {
    if (!Re.test(d))
      if (ke.test(d)) {
        y.hasDynamicMetadata = !0;
        return;
      } else if (De.test(d)) {
        y.hasDynamicViewport = !0;
        return;
      } else if (J.test(d)) {
        y.hasSuspendedDynamic = !0;
        return;
      } else if (C.syncDynamicErrorWithStack || W.syncDynamicErrorWithStack) {
        y.hasSyncDynamicErrors = !0;
        return;
      } else {
        const ie = `Route "${u}": A component accessed data, headers, params, searchParams, or a short-lived cache without a Suspense boundary nor a "use cache" above it. We don't have the exact line number added to error messages yet but you can see which component in the stack below. See more info: https://nextjs.org/docs/messages/next-prerender-missing-suspense`, de = ge(ie, d);
        y.dynamicErrors.push(de);
        return;
      }
  }
  function ge(u, d) {
    const y = new Error(u);
    return y.stack = "Error: " + u + d, y;
  }
  function oe(u, d, y, C) {
    let W, ie, de;
    if (y.syncDynamicErrorWithStack ? (W = y.syncDynamicErrorWithStack, ie = y.syncDynamicExpression, de = y.syncDynamicLogged === !0) : C.syncDynamicErrorWithStack ? (W = C.syncDynamicErrorWithStack, ie = C.syncDynamicExpression, de = C.syncDynamicLogged === !0) : (W = null, ie = void 0, de = !1), d.hasSyncDynamicErrors && W)
      throw de || console.error(W), new o.StaticGenBailoutError();
    const Pe = d.dynamicErrors;
    if (Pe.length) {
      for (let Ye = 0; Ye < Pe.length; Ye++)
        console.error(Pe[Ye]);
      throw new o.StaticGenBailoutError();
    }
    if (!d.hasSuspendedDynamic) {
      if (d.hasDynamicMetadata)
        throw W ? (console.error(W), new o.StaticGenBailoutError(`Route "${u}" has a \`generateMetadata\` that could not finish rendering before ${ie} was used. Follow the instructions in the error for this expression to resolve.`)) : new o.StaticGenBailoutError(`Route "${u}" has a \`generateMetadata\` that depends on Request data (\`cookies()\`, etc...) or external data (\`fetch(...)\`, etc...) but the rest of the route was static or only used cached data (\`"use cache"\`). If you expected this route to be prerenderable update your \`generateMetadata\` to not use Request data and only use cached external data. Otherwise, add \`await connection()\` somewhere within this route to indicate explicitly it should not be prerendered.`);
      if (d.hasDynamicViewport)
        throw W ? (console.error(W), new o.StaticGenBailoutError(`Route "${u}" has a \`generateViewport\` that could not finish rendering before ${ie} was used. Follow the instructions in the error for this expression to resolve.`)) : new o.StaticGenBailoutError(`Route "${u}" has a \`generateViewport\` that depends on Request data (\`cookies()\`, etc...) or external data (\`fetch(...)\`, etc...) but the rest of the route was static or only used cached data (\`"use cache"\`). If you expected this route to be prerenderable update your \`generateViewport\` to not use Request data and only use cached external data. Otherwise, add \`await connection()\` somewhere within this route to indicate explicitly it should not be prerendered.`);
    }
  }
})(fr);
(function(e) {
  Object.defineProperty(e, "__esModule", {
    value: !0
  }), Object.defineProperty(e, "isDynamicUsageError", {
    enumerable: !0,
    get: function() {
      return s;
    }
  });
  const t = hn, r = Tt, n = gn, o = fr, s = (a) => (0, t.isDynamicServerError)(a) || (0, r.isBailoutToCSRError)(a) || (0, n.isNextRouterError)(a) || (0, o.isDynamicPostpone)(a);
})(pn);
var wn = {};
(function(e) {
  Object.defineProperty(e, "__esModule", {
    value: !0
  }), Object.defineProperty(e, "isPostpone", {
    enumerable: !0,
    get: function() {
      return r;
    }
  });
  const t = Symbol.for("react.postpone");
  function r(n) {
    return typeof n == "object" && n !== null && n.$$typeof === t;
  }
})(wn);
(function(e, t) {
  Object.defineProperty(t, "__esModule", {
    value: !0
  }), Object.defineProperty(t, "unstable_rethrow", {
    enumerable: !0,
    get: function() {
      return a;
    }
  });
  const r = pn, n = wn, o = Tt, s = gn;
  function a(c) {
    if ((0, s.isNextRouterError)(c) || (0, o.isBailoutToCSRError)(c) || (0, r.isDynamicUsageError)(c) || (0, n.isPostpone)(c))
      throw c;
    c instanceof Error && "cause" in c && a(c.cause);
  }
  (typeof t.default == "function" || typeof t.default == "object" && t.default !== null) && typeof t.default.__esModule > "u" && (Object.defineProperty(t.default, "__esModule", { value: !0 }), Object.assign(t.default, t), e.exports = t.default);
})(Zt, Zt.exports);
var Ao = Zt.exports;
(function(e, t) {
  Object.defineProperty(t, "__esModule", {
    value: !0
  });
  function r(l, p) {
    for (var h in p) Object.defineProperty(l, h, {
      enumerable: !0,
      get: p[h]
    });
  }
  r(t, {
    ReadonlyURLSearchParams: function() {
      return c;
    },
    RedirectType: function() {
      return n.RedirectType;
    },
    notFound: function() {
      return o.notFound;
    },
    permanentRedirect: function() {
      return n.permanentRedirect;
    },
    redirect: function() {
      return n.redirect;
    },
    unstable_rethrow: function() {
      return s.unstable_rethrow;
    }
  });
  const n = dn, o = fn, s = Ao;
  class a extends Error {
    constructor() {
      super("Method unavailable on `ReadonlyURLSearchParams`. Read more: https://nextjs.org/docs/app/api-reference/functions/use-search-params#updating-searchparams");
    }
  }
  class c extends URLSearchParams {
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
var Lo = Ut.exports, Sn = {}, $n = {};
function _n(e) {
  if (typeof WeakMap != "function") return null;
  var t = /* @__PURE__ */ new WeakMap(), r = /* @__PURE__ */ new WeakMap();
  return (_n = function(n) {
    return n ? r : t;
  })(e);
}
function Io(e, t) {
  if (!t && e && e.__esModule) return e;
  if (e === null || typeof e != "object" && typeof e != "function") return { default: e };
  var r = _n(t);
  if (r && r.has(e)) return r.get(e);
  var n = { __proto__: null }, o = Object.defineProperty && Object.getOwnPropertyDescriptor;
  for (var s in e)
    if (s !== "default" && Object.prototype.hasOwnProperty.call(e, s)) {
      var a = o ? Object.getOwnPropertyDescriptor(e, s) : null;
      a && (a.get || a.set) ? Object.defineProperty(n, s, a) : n[s] = e[s];
    }
  return n.default = e, r && r.set(e, n), n;
}
$n._ = Io;
(function(e) {
  "use client";
  Object.defineProperty(e, "__esModule", {
    value: !0
  });
  function t(a, c) {
    for (var l in c) Object.defineProperty(a, l, {
      enumerable: !0,
      get: c[l]
    });
  }
  t(e, {
    ServerInsertedHTMLContext: function() {
      return o;
    },
    useServerInsertedHTML: function() {
      return s;
    }
  });
  const n = /* @__PURE__ */ $n._(H), o = /* @__PURE__ */ n.default.createContext(null);
  function s(a) {
    const c = (0, n.useContext)(o);
    c && c(a);
  }
})(Sn);
var ft = { exports: {} }, zr;
function No() {
  return zr || (zr = 1, function(e, t) {
    Object.defineProperty(t, "__esModule", {
      value: !0
    }), Object.defineProperty(t, "bailoutToClientRendering", {
      enumerable: !0,
      get: function() {
        return o;
      }
    });
    const r = Tt, n = pr;
    function o(s) {
      const a = n.workAsyncStorage.getStore();
      if (!(a != null && a.forceStatic) && a != null && a.isStaticGeneration)
        throw new r.BailoutToCSRError(s);
    }
    (typeof t.default == "function" || typeof t.default == "object" && t.default !== null) && typeof t.default.__esModule > "u" && (Object.defineProperty(t.default, "__esModule", { value: !0 }), Object.assign(t.default, t), e.exports = t.default);
  }(ft, ft.exports)), ft.exports;
}
(function(e, t) {
  Object.defineProperty(t, "__esModule", {
    value: !0
  });
  function r(m, S) {
    for (var E in S) Object.defineProperty(m, E, {
      enumerable: !0,
      get: S[E]
    });
  }
  r(t, {
    ReadonlyURLSearchParams: function() {
      return l.ReadonlyURLSearchParams;
    },
    RedirectType: function() {
      return l.RedirectType;
    },
    ServerInsertedHTMLContext: function() {
      return h.ServerInsertedHTMLContext;
    },
    notFound: function() {
      return l.notFound;
    },
    permanentRedirect: function() {
      return l.permanentRedirect;
    },
    redirect: function() {
      return l.redirect;
    },
    unstable_rethrow: function() {
      return l.unstable_rethrow;
    },
    useParams: function() {
      return v;
    },
    usePathname: function() {
      return w;
    },
    useRouter: function() {
      return k;
    },
    useSearchParams: function() {
      return b;
    },
    useSelectedLayoutSegment: function() {
      return T;
    },
    useSelectedLayoutSegments: function() {
      return L;
    },
    useServerInsertedHTML: function() {
      return h.useServerInsertedHTML;
    }
  });
  const n = H, o = on, s = sn, a = Co, c = cn, l = Lo, p = fr, h = Sn;
  function b() {
    const m = (0, n.useContext)(s.SearchParamsContext), S = (0, n.useMemo)(() => m ? new l.ReadonlyURLSearchParams(m) : null, [
      m
    ]);
    if (typeof window > "u") {
      const { bailoutToClientRendering: E } = No();
      E("useSearchParams()");
    }
    return S;
  }
  function w() {
    return (0, p.useDynamicRouteParams)("usePathname()"), (0, n.useContext)(s.PathnameContext);
  }
  function k() {
    const m = (0, n.useContext)(o.AppRouterContext);
    if (m === null)
      throw new Error("invariant expected app router to be mounted");
    return m;
  }
  function v() {
    return (0, p.useDynamicRouteParams)("useParams()"), (0, n.useContext)(s.PathParamsContext);
  }
  function R(m, S, E, I) {
    E === void 0 && (E = !0), I === void 0 && (I = []);
    let P;
    if (E)
      P = m[1][S];
    else {
      const $e = m[1];
      var $;
      P = ($ = $e.children) != null ? $ : Object.values($e)[0];
    }
    if (!P) return I;
    const K = P[0];
    let Z = (0, a.getSegmentValue)(K);
    return !Z || Z.startsWith(c.PAGE_SEGMENT_KEY) ? I : (I.push(Z), R(P, S, !1, I));
  }
  function L(m) {
    m === void 0 && (m = "children"), (0, p.useDynamicRouteParams)("useSelectedLayoutSegments()");
    const S = (0, n.useContext)(o.LayoutRouterContext);
    return S ? R(S.tree, m) : null;
  }
  function T(m) {
    m === void 0 && (m = "children"), (0, p.useDynamicRouteParams)("useSelectedLayoutSegment()");
    const S = L(m);
    if (!S || S.length === 0)
      return null;
    const E = m === "children" ? S[0] : S[S.length - 1];
    return E === c.DEFAULT_SEGMENT_KEY ? null : E;
  }
  (typeof t.default == "function" || typeof t.default == "object" && t.default !== null) && typeof t.default.__esModule > "u" && (Object.defineProperty(t.default, "__esModule", { value: !0 }), Object.assign(t.default, t), e.exports = t.default);
})(Gt, Gt.exports);
var Mo = Gt.exports, zo = Mo, U = function() {
  return U = Object.assign || function(t) {
    for (var r, n = 1, o = arguments.length; n < o; n++) {
      r = arguments[n];
      for (var s in r) Object.prototype.hasOwnProperty.call(r, s) && (t[s] = r[s]);
    }
    return t;
  }, U.apply(this, arguments);
};
function Fe(e, t, r) {
  if (r || arguments.length === 2) for (var n = 0, o = t.length, s; n < o; n++)
    (s || !(n in t)) && (s || (s = Array.prototype.slice.call(t, 0, n)), s[n] = t[n]);
  return e.concat(s || Array.prototype.slice.call(t));
}
function Fo(e) {
  var t = /* @__PURE__ */ Object.create(null);
  return function(r) {
    return t[r] === void 0 && (t[r] = e(r)), t[r];
  };
}
var Wo = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|disableRemotePlayback|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/, Bo = /* @__PURE__ */ Fo(
  function(e) {
    return Wo.test(e) || e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && e.charCodeAt(2) < 91;
  }
  /* Z+1 */
), Ho = function(t, r, n, o) {
  var s = n ? n.call(o, t, r) : void 0;
  if (s !== void 0)
    return !!s;
  if (t === r)
    return !0;
  if (typeof t != "object" || !t || typeof r != "object" || !r)
    return !1;
  var a = Object.keys(t), c = Object.keys(r);
  if (a.length !== c.length)
    return !1;
  for (var l = Object.prototype.hasOwnProperty.bind(r), p = 0; p < a.length; p++) {
    var h = a[p];
    if (!l(h))
      return !1;
    var b = t[h], w = r[h];
    if (s = n ? n.call(o, b, w, h) : void 0, s === !1 || s === void 0 && b !== w)
      return !1;
  }
  return !0;
};
const Vo = /* @__PURE__ */ Ro(Ho);
var B = "-ms-", st = "-moz-", M = "-webkit-", En = "comm", Ct = "rule", hr = "decl", Yo = "@import", kn = "@keyframes", Go = "@layer", Rn = Math.abs, gr = String.fromCharCode, rr = Object.assign;
function qo(e, t) {
  return X(e, 0) ^ 45 ? (((t << 2 ^ X(e, 0)) << 2 ^ X(e, 1)) << 2 ^ X(e, 2)) << 2 ^ X(e, 3) : 0;
}
function Pn(e) {
  return e.trim();
}
function xe(e, t) {
  return (e = t.exec(e)) ? e[0] : e;
}
function O(e, t, r) {
  return e.replace(t, r);
}
function bt(e, t, r) {
  return e.indexOf(t, r);
}
function X(e, t) {
  return e.charCodeAt(t) | 0;
}
function Xe(e, t, r) {
  return e.slice(t, r);
}
function ye(e) {
  return e.length;
}
function On(e) {
  return e.length;
}
function at(e, t) {
  return t.push(e), e;
}
function Uo(e, t) {
  return e.map(t).join("");
}
function Fr(e, t) {
  return e.filter(function(r) {
    return !xe(r, t);
  });
}
var Dt = 1, Ke = 1, Tn = 0, ce = 0, q = 0, rt = "";
function jt(e, t, r, n, o, s, a, c) {
  return { value: e, root: t, parent: r, type: n, props: o, children: s, line: Dt, column: Ke, length: a, return: "", siblings: c };
}
function Oe(e, t) {
  return rr(jt("", null, null, "", null, null, 0, e.siblings), e, { length: -e.length }, t);
}
function Ue(e) {
  for (; e.root; )
    e = Oe(e.root, { children: [e] });
  at(e, e.siblings);
}
function Xo() {
  return q;
}
function Ko() {
  return q = ce > 0 ? X(rt, --ce) : 0, Ke--, q === 10 && (Ke = 1, Dt--), q;
}
function fe() {
  return q = ce < Tn ? X(rt, ce++) : 0, Ke++, q === 10 && (Ke = 1, Dt++), q;
}
function ze() {
  return X(rt, ce);
}
function xt() {
  return ce;
}
function At(e, t) {
  return Xe(rt, e, t);
}
function nr(e) {
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
function Jo(e) {
  return Dt = Ke = 1, Tn = ye(rt = e), ce = 0, [];
}
function Zo(e) {
  return rt = "", e;
}
function Wt(e) {
  return Pn(At(ce - 1, or(e === 91 ? e + 2 : e === 40 ? e + 1 : e)));
}
function Qo(e) {
  for (; (q = ze()) && q < 33; )
    fe();
  return nr(e) > 2 || nr(q) > 3 ? "" : " ";
}
function ei(e, t) {
  for (; --t && fe() && !(q < 48 || q > 102 || q > 57 && q < 65 || q > 70 && q < 97); )
    ;
  return At(e, xt() + (t < 6 && ze() == 32 && fe() == 32));
}
function or(e) {
  for (; fe(); )
    switch (q) {
      case e:
        return ce;
      case 34:
      case 39:
        e !== 34 && e !== 39 && or(q);
        break;
      case 40:
        e === 41 && or(e);
        break;
      case 92:
        fe();
        break;
    }
  return ce;
}
function ti(e, t) {
  for (; fe() && e + q !== 57; )
    if (e + q === 84 && ze() === 47)
      break;
  return "/*" + At(t, ce - 1) + "*" + gr(e === 47 ? e : fe());
}
function ri(e) {
  for (; !nr(ze()); )
    fe();
  return At(e, ce);
}
function ni(e) {
  return Zo(vt("", null, null, null, [""], e = Jo(e), 0, [0], e));
}
function vt(e, t, r, n, o, s, a, c, l) {
  for (var p = 0, h = 0, b = a, w = 0, k = 0, v = 0, R = 1, L = 1, T = 1, m = 0, S = "", E = o, I = s, P = n, $ = S; L; )
    switch (v = m, m = fe()) {
      case 40:
        if (v != 108 && X($, b - 1) == 58) {
          bt($ += O(Wt(m), "&", "&\f"), "&\f", Rn(p ? c[p - 1] : 0)) != -1 && (T = -1);
          break;
        }
      case 34:
      case 39:
      case 91:
        $ += Wt(m);
        break;
      case 9:
      case 10:
      case 13:
      case 32:
        $ += Qo(v);
        break;
      case 92:
        $ += ei(xt() - 1, 7);
        continue;
      case 47:
        switch (ze()) {
          case 42:
          case 47:
            at(oi(ti(fe(), xt()), t, r, l), l);
            break;
          default:
            $ += "/";
        }
        break;
      case 123 * R:
        c[p++] = ye($) * T;
      case 125 * R:
      case 59:
      case 0:
        switch (m) {
          case 0:
          case 125:
            L = 0;
          case 59 + h:
            T == -1 && ($ = O($, /\f/g, "")), k > 0 && ye($) - b && at(k > 32 ? Br($ + ";", n, r, b - 1, l) : Br(O($, " ", "") + ";", n, r, b - 2, l), l);
            break;
          case 59:
            $ += ";";
          default:
            if (at(P = Wr($, t, r, p, h, o, c, S, E = [], I = [], b, s), s), m === 123)
              if (h === 0)
                vt($, t, P, P, E, s, b, c, I);
              else
                switch (w === 99 && X($, 3) === 110 ? 100 : w) {
                  case 100:
                  case 108:
                  case 109:
                  case 115:
                    vt(e, P, P, n && at(Wr(e, P, P, 0, 0, o, c, S, o, E = [], b, I), I), o, I, b, c, n ? E : I);
                    break;
                  default:
                    vt($, P, P, P, [""], I, 0, c, I);
                }
        }
        p = h = k = 0, R = T = 1, S = $ = "", b = a;
        break;
      case 58:
        b = 1 + ye($), k = v;
      default:
        if (R < 1) {
          if (m == 123)
            --R;
          else if (m == 125 && R++ == 0 && Ko() == 125)
            continue;
        }
        switch ($ += gr(m), m * R) {
          case 38:
            T = h > 0 ? 1 : ($ += "\f", -1);
            break;
          case 44:
            c[p++] = (ye($) - 1) * T, T = 1;
            break;
          case 64:
            ze() === 45 && ($ += Wt(fe())), w = ze(), h = b = ye(S = $ += ri(xt())), m++;
            break;
          case 45:
            v === 45 && ye($) == 2 && (R = 0);
        }
    }
  return s;
}
function Wr(e, t, r, n, o, s, a, c, l, p, h, b) {
  for (var w = o - 1, k = o === 0 ? s : [""], v = On(k), R = 0, L = 0, T = 0; R < n; ++R)
    for (var m = 0, S = Xe(e, w + 1, w = Rn(L = a[R])), E = e; m < v; ++m)
      (E = Pn(L > 0 ? k[m] + " " + S : O(S, /&\f/g, k[m]))) && (l[T++] = E);
  return jt(e, t, r, o === 0 ? Ct : c, l, p, h, b);
}
function oi(e, t, r, n) {
  return jt(e, t, r, En, gr(Xo()), Xe(e, 2, -2), 0, n);
}
function Br(e, t, r, n, o) {
  return jt(e, t, r, hr, Xe(e, 0, n), Xe(e, n + 1, -1), n, o);
}
function Cn(e, t, r) {
  switch (qo(e, t)) {
    case 5103:
      return M + "print-" + e + e;
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
      return M + e + e;
    case 4789:
      return st + e + e;
    case 5349:
    case 4246:
    case 4810:
    case 6968:
    case 2756:
      return M + e + st + e + B + e + e;
    case 5936:
      switch (X(e, t + 11)) {
        case 114:
          return M + e + B + O(e, /[svh]\w+-[tblr]{2}/, "tb") + e;
        case 108:
          return M + e + B + O(e, /[svh]\w+-[tblr]{2}/, "tb-rl") + e;
        case 45:
          return M + e + B + O(e, /[svh]\w+-[tblr]{2}/, "lr") + e;
      }
    case 6828:
    case 4268:
    case 2903:
      return M + e + B + e + e;
    case 6165:
      return M + e + B + "flex-" + e + e;
    case 5187:
      return M + e + O(e, /(\w+).+(:[^]+)/, M + "box-$1$2" + B + "flex-$1$2") + e;
    case 5443:
      return M + e + B + "flex-item-" + O(e, /flex-|-self/g, "") + (xe(e, /flex-|baseline/) ? "" : B + "grid-row-" + O(e, /flex-|-self/g, "")) + e;
    case 4675:
      return M + e + B + "flex-line-pack" + O(e, /align-content|flex-|-self/g, "") + e;
    case 5548:
      return M + e + B + O(e, "shrink", "negative") + e;
    case 5292:
      return M + e + B + O(e, "basis", "preferred-size") + e;
    case 6060:
      return M + "box-" + O(e, "-grow", "") + M + e + B + O(e, "grow", "positive") + e;
    case 4554:
      return M + O(e, /([^-])(transform)/g, "$1" + M + "$2") + e;
    case 6187:
      return O(O(O(e, /(zoom-|grab)/, M + "$1"), /(image-set)/, M + "$1"), e, "") + e;
    case 5495:
    case 3959:
      return O(e, /(image-set\([^]*)/, M + "$1$`$1");
    case 4968:
      return O(O(e, /(.+:)(flex-)?(.*)/, M + "box-pack:$3" + B + "flex-pack:$3"), /s.+-b[^;]+/, "justify") + M + e + e;
    case 4200:
      if (!xe(e, /flex-|baseline/)) return B + "grid-column-align" + Xe(e, t) + e;
      break;
    case 2592:
    case 3360:
      return B + O(e, "template-", "") + e;
    case 4384:
    case 3616:
      return r && r.some(function(n, o) {
        return t = o, xe(n.props, /grid-\w+-end/);
      }) ? ~bt(e + (r = r[t].value), "span", 0) ? e : B + O(e, "-start", "") + e + B + "grid-row-span:" + (~bt(r, "span", 0) ? xe(r, /\d+/) : +xe(r, /\d+/) - +xe(e, /\d+/)) + ";" : B + O(e, "-start", "") + e;
    case 4896:
    case 4128:
      return r && r.some(function(n) {
        return xe(n.props, /grid-\w+-start/);
      }) ? e : B + O(O(e, "-end", "-span"), "span ", "") + e;
    case 4095:
    case 3583:
    case 4068:
    case 2532:
      return O(e, /(.+)-inline(.+)/, M + "$1$2") + e;
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
      if (ye(e) - 1 - t > 6)
        switch (X(e, t + 1)) {
          case 109:
            if (X(e, t + 4) !== 45)
              break;
          case 102:
            return O(e, /(.+:)(.+)-([^]+)/, "$1" + M + "$2-$3$1" + st + (X(e, t + 3) == 108 ? "$3" : "$2-$3")) + e;
          case 115:
            return ~bt(e, "stretch", 0) ? Cn(O(e, "stretch", "fill-available"), t, r) + e : e;
        }
      break;
    case 5152:
    case 5920:
      return O(e, /(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/, function(n, o, s, a, c, l, p) {
        return B + o + ":" + s + p + (a ? B + o + "-span:" + (c ? l : +l - +s) + p : "") + e;
      });
    case 4949:
      if (X(e, t + 6) === 121)
        return O(e, ":", ":" + M) + e;
      break;
    case 6444:
      switch (X(e, X(e, 14) === 45 ? 18 : 11)) {
        case 120:
          return O(e, /(.+:)([^;\s!]+)(;|(\s+)?!.+)?/, "$1" + M + (X(e, 14) === 45 ? "inline-" : "") + "box$3$1" + M + "$2$3$1" + B + "$2box$3") + e;
        case 100:
          return O(e, ":", ":" + B) + e;
      }
      break;
    case 5719:
    case 2647:
    case 2135:
    case 3927:
    case 2391:
      return O(e, "scroll-", "scroll-snap-") + e;
  }
  return e;
}
function $t(e, t) {
  for (var r = "", n = 0; n < e.length; n++)
    r += t(e[n], n, e, t) || "";
  return r;
}
function ii(e, t, r, n) {
  switch (e.type) {
    case Go:
      if (e.children.length) break;
    case Yo:
    case hr:
      return e.return = e.return || e.value;
    case En:
      return "";
    case kn:
      return e.return = e.value + "{" + $t(e.children, n) + "}";
    case Ct:
      if (!ye(e.value = e.props.join(","))) return "";
  }
  return ye(r = $t(e.children, n)) ? e.return = e.value + "{" + r + "}" : "";
}
function ai(e) {
  var t = On(e);
  return function(r, n, o, s) {
    for (var a = "", c = 0; c < t; c++)
      a += e[c](r, n, o, s) || "";
    return a;
  };
}
function si(e) {
  return function(t) {
    t.root || (t = t.return) && e(t);
  };
}
function ci(e, t, r, n) {
  if (e.length > -1 && !e.return)
    switch (e.type) {
      case hr:
        e.return = Cn(e.value, e.length, r);
        return;
      case kn:
        return $t([Oe(e, { value: O(e.value, "@", "@" + M) })], n);
      case Ct:
        if (e.length)
          return Uo(r = e.props, function(o) {
            switch (xe(o, n = /(::plac\w+|:read-\w+)/)) {
              case ":read-only":
              case ":read-write":
                Ue(Oe(e, { props: [O(o, /:(read-\w+)/, ":" + st + "$1")] })), Ue(Oe(e, { props: [o] })), rr(e, { props: Fr(r, n) });
                break;
              case "::placeholder":
                Ue(Oe(e, { props: [O(o, /:(plac\w+)/, ":" + M + "input-$1")] })), Ue(Oe(e, { props: [O(o, /:(plac\w+)/, ":" + st + "$1")] })), Ue(Oe(e, { props: [O(o, /:(plac\w+)/, B + "input-$1")] })), Ue(Oe(e, { props: [o] })), rr(e, { props: Fr(r, n) });
                break;
            }
            return "";
          });
    }
}
var li = {
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
}, we = typeof process < "u" && process.env !== void 0 && (process.env.REACT_APP_SC_ATTR || process.env.SC_ATTR) || "data-styled", Dn = "active", _t = "data-styled-version", Je = "6.1.13", yr = `/*!sc*/
`, Et = typeof window < "u" && "HTMLElement" in window, ui = !!(typeof SC_DISABLE_SPEEDY == "boolean" ? SC_DISABLE_SPEEDY : typeof process < "u" && process.env !== void 0 && process.env.REACT_APP_SC_DISABLE_SPEEDY !== void 0 && process.env.REACT_APP_SC_DISABLE_SPEEDY !== "" ? process.env.REACT_APP_SC_DISABLE_SPEEDY !== "false" && process.env.REACT_APP_SC_DISABLE_SPEEDY : typeof process < "u" && process.env !== void 0 && process.env.SC_DISABLE_SPEEDY !== void 0 && process.env.SC_DISABLE_SPEEDY !== "" ? process.env.SC_DISABLE_SPEEDY !== "false" && process.env.SC_DISABLE_SPEEDY : process.env.NODE_ENV !== "production"), di = {}, Hr = /invalid hook call/i, pt = /* @__PURE__ */ new Set(), jn = function(e, t) {
  if (process.env.NODE_ENV !== "production") {
    var r = t ? ' with the id of "'.concat(t, '"') : "", n = "The component ".concat(e).concat(r, ` has been created dynamically.
`) + `You may see this warning because you've called styled inside another component.
To resolve this only create new StyledComponents outside of any render method and function component.`, o = console.error;
    try {
      var s = !0;
      console.error = function(a) {
        for (var c = [], l = 1; l < arguments.length; l++) c[l - 1] = arguments[l];
        Hr.test(a) ? (s = !1, pt.delete(n)) : o.apply(void 0, Fe([a], c, !1));
      }, _o(), s && !pt.has(n) && (console.warn(n), pt.add(n));
    } catch (a) {
      Hr.test(a.message) && pt.delete(n);
    } finally {
      console.error = o;
    }
  }
}, Lt = Object.freeze([]), Ze = Object.freeze({});
function An(e, t, r) {
  return r === void 0 && (r = Ze), e.theme !== r.theme && e.theme || t || r.theme;
}
var ir = /* @__PURE__ */ new Set(["a", "abbr", "address", "area", "article", "aside", "audio", "b", "base", "bdi", "bdo", "big", "blockquote", "body", "br", "button", "canvas", "caption", "cite", "code", "col", "colgroup", "data", "datalist", "dd", "del", "details", "dfn", "dialog", "div", "dl", "dt", "em", "embed", "fieldset", "figcaption", "figure", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "header", "hgroup", "hr", "html", "i", "iframe", "img", "input", "ins", "kbd", "keygen", "label", "legend", "li", "link", "main", "map", "mark", "menu", "menuitem", "meta", "meter", "nav", "noscript", "object", "ol", "optgroup", "option", "output", "p", "param", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "script", "section", "select", "small", "source", "span", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "textarea", "tfoot", "th", "thead", "time", "tr", "track", "u", "ul", "use", "var", "video", "wbr", "circle", "clipPath", "defs", "ellipse", "foreignObject", "g", "image", "line", "linearGradient", "marker", "mask", "path", "pattern", "polygon", "polyline", "radialGradient", "rect", "stop", "svg", "text", "tspan"]), fi = /[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g, pi = /(^-|-$)/g;
function Vr(e) {
  return e.replace(fi, "-").replace(pi, "");
}
var hi = /(a)(d)/gi, ht = 52, Yr = function(e) {
  return String.fromCharCode(e + (e > 25 ? 39 : 97));
};
function ar(e) {
  var t, r = "";
  for (t = Math.abs(e); t > ht; t = t / ht | 0) r = Yr(t % ht) + r;
  return (Yr(t % ht) + r).replace(hi, "$1-$2");
}
var Bt, Ln = 5381, Ne = function(e, t) {
  for (var r = t.length; r; ) e = 33 * e ^ t.charCodeAt(--r);
  return e;
}, In = function(e) {
  return Ne(Ln, e);
};
function Nn(e) {
  return ar(In(e) >>> 0);
}
function Mn(e) {
  return process.env.NODE_ENV !== "production" && typeof e == "string" && e || e.displayName || e.name || "Component";
}
function Ht(e) {
  return typeof e == "string" && (process.env.NODE_ENV === "production" || e.charAt(0) === e.charAt(0).toLowerCase());
}
var zn = typeof Symbol == "function" && Symbol.for, Fn = zn ? Symbol.for("react.memo") : 60115, gi = zn ? Symbol.for("react.forward_ref") : 60112, yi = { childContextTypes: !0, contextType: !0, contextTypes: !0, defaultProps: !0, displayName: !0, getDefaultProps: !0, getDerivedStateFromError: !0, getDerivedStateFromProps: !0, mixins: !0, propTypes: !0, type: !0 }, mi = { name: !0, length: !0, prototype: !0, caller: !0, callee: !0, arguments: !0, arity: !0 }, Wn = { $$typeof: !0, compare: !0, defaultProps: !0, displayName: !0, propTypes: !0, type: !0 }, bi = ((Bt = {})[gi] = { $$typeof: !0, render: !0, defaultProps: !0, displayName: !0, propTypes: !0 }, Bt[Fn] = Wn, Bt);
function Gr(e) {
  return ("type" in (t = e) && t.type.$$typeof) === Fn ? Wn : "$$typeof" in e ? bi[e.$$typeof] : yi;
  var t;
}
var xi = Object.defineProperty, vi = Object.getOwnPropertyNames, qr = Object.getOwnPropertySymbols, wi = Object.getOwnPropertyDescriptor, Si = Object.getPrototypeOf, Ur = Object.prototype;
function Bn(e, t, r) {
  if (typeof t != "string") {
    if (Ur) {
      var n = Si(t);
      n && n !== Ur && Bn(e, n, r);
    }
    var o = vi(t);
    qr && (o = o.concat(qr(t)));
    for (var s = Gr(e), a = Gr(t), c = 0; c < o.length; ++c) {
      var l = o[c];
      if (!(l in mi || r && r[l] || a && l in a || s && l in s)) {
        var p = wi(t, l);
        try {
          xi(e, l, p);
        } catch {
        }
      }
    }
  }
  return e;
}
function We(e) {
  return typeof e == "function";
}
function mr(e) {
  return typeof e == "object" && "styledComponentId" in e;
}
function Me(e, t) {
  return e && t ? "".concat(e, " ").concat(t) : e || t || "";
}
function kt(e, t) {
  if (e.length === 0) return "";
  for (var r = e[0], n = 1; n < e.length; n++) r += t ? t + e[n] : e[n];
  return r;
}
function Qe(e) {
  return e !== null && typeof e == "object" && e.constructor.name === Object.name && !("props" in e && e.$$typeof);
}
function sr(e, t, r) {
  if (r === void 0 && (r = !1), !r && !Qe(e) && !Array.isArray(e)) return t;
  if (Array.isArray(t)) for (var n = 0; n < t.length; n++) e[n] = sr(e[n], t[n]);
  else if (Qe(t)) for (var n in t) e[n] = sr(e[n], t[n]);
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
function _i() {
  for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
  for (var r = e[0], n = [], o = 1, s = e.length; o < s; o += 1) n.push(e[o]);
  return n.forEach(function(a) {
    r = r.replace(/%[a-z]/, a);
  }), r;
}
function ne(e) {
  for (var t = [], r = 1; r < arguments.length; r++) t[r - 1] = arguments[r];
  return process.env.NODE_ENV === "production" ? new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(e, " for more information.").concat(t.length > 0 ? " Args: ".concat(t.join(", ")) : "")) : new Error(_i.apply(void 0, Fe([$i[e]], t, !1)).trim());
}
var Ei = function() {
  function e(t) {
    this.groupSizes = new Uint32Array(512), this.length = 512, this.tag = t;
  }
  return e.prototype.indexOfGroup = function(t) {
    for (var r = 0, n = 0; n < t; n++) r += this.groupSizes[n];
    return r;
  }, e.prototype.insertRules = function(t, r) {
    if (t >= this.groupSizes.length) {
      for (var n = this.groupSizes, o = n.length, s = o; t >= s; ) if ((s <<= 1) < 0) throw ne(16, "".concat(t));
      this.groupSizes = new Uint32Array(s), this.groupSizes.set(n), this.length = s;
      for (var a = o; a < s; a++) this.groupSizes[a] = 0;
    }
    for (var c = this.indexOfGroup(t + 1), l = (a = 0, r.length); a < l; a++) this.tag.insertRule(c, r[a]) && (this.groupSizes[t]++, c++);
  }, e.prototype.clearGroup = function(t) {
    if (t < this.length) {
      var r = this.groupSizes[t], n = this.indexOfGroup(t), o = n + r;
      this.groupSizes[t] = 0;
      for (var s = n; s < o; s++) this.tag.deleteRule(n);
    }
  }, e.prototype.getGroup = function(t) {
    var r = "";
    if (t >= this.length || this.groupSizes[t] === 0) return r;
    for (var n = this.groupSizes[t], o = this.indexOfGroup(t), s = o + n, a = o; a < s; a++) r += "".concat(this.tag.getRule(a)).concat(yr);
    return r;
  }, e;
}(), ki = 1 << 30, wt = /* @__PURE__ */ new Map(), Rt = /* @__PURE__ */ new Map(), St = 1, gt = function(e) {
  if (wt.has(e)) return wt.get(e);
  for (; Rt.has(St); ) St++;
  var t = St++;
  if (process.env.NODE_ENV !== "production" && ((0 | t) < 0 || t > ki)) throw ne(16, "".concat(t));
  return wt.set(e, t), Rt.set(t, e), t;
}, Ri = function(e, t) {
  St = t + 1, wt.set(e, t), Rt.set(t, e);
}, Pi = "style[".concat(we, "][").concat(_t, '="').concat(Je, '"]'), Oi = new RegExp("^".concat(we, '\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')), Ti = function(e, t, r) {
  for (var n, o = r.split(","), s = 0, a = o.length; s < a; s++) (n = o[s]) && e.registerName(t, n);
}, Ci = function(e, t) {
  for (var r, n = ((r = t.textContent) !== null && r !== void 0 ? r : "").split(yr), o = [], s = 0, a = n.length; s < a; s++) {
    var c = n[s].trim();
    if (c) {
      var l = c.match(Oi);
      if (l) {
        var p = 0 | parseInt(l[1], 10), h = l[2];
        p !== 0 && (Ri(h, p), Ti(e, h, l[3]), e.getTag().insertRules(p, o)), o.length = 0;
      } else o.push(c);
    }
  }
}, Xr = function(e) {
  for (var t = document.querySelectorAll(Pi), r = 0, n = t.length; r < n; r++) {
    var o = t[r];
    o && o.getAttribute(we) !== Dn && (Ci(e, o), o.parentNode && o.parentNode.removeChild(o));
  }
};
function cr() {
  return typeof __webpack_nonce__ < "u" ? __webpack_nonce__ : null;
}
var Hn = function(e) {
  var t = document.head, r = e || t, n = document.createElement("style"), o = function(c) {
    var l = Array.from(c.querySelectorAll("style[".concat(we, "]")));
    return l[l.length - 1];
  }(r), s = o !== void 0 ? o.nextSibling : null;
  n.setAttribute(we, Dn), n.setAttribute(_t, Je);
  var a = cr();
  return a && n.setAttribute("nonce", a), r.insertBefore(n, s), n;
}, Di = function() {
  function e(t) {
    this.element = Hn(t), this.element.appendChild(document.createTextNode("")), this.sheet = function(r) {
      if (r.sheet) return r.sheet;
      for (var n = document.styleSheets, o = 0, s = n.length; o < s; o++) {
        var a = n[o];
        if (a.ownerNode === r) return a;
      }
      throw ne(17);
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
}(), ji = function() {
  function e(t) {
    this.element = Hn(t), this.nodes = this.element.childNodes, this.length = 0;
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
}(), Kr = Et, Li = { isServer: !Et, useCSSOMInjection: !ui }, ct = function() {
  function e(t, r, n) {
    t === void 0 && (t = Ze), r === void 0 && (r = {});
    var o = this;
    this.options = U(U({}, Li), t), this.gs = r, this.names = new Map(n), this.server = !!t.isServer, !this.server && Et && Kr && (Kr = !1, Xr(this)), br(this, function() {
      return function(s) {
        for (var a = s.getTag(), c = a.length, l = "", p = function(b) {
          var w = function(T) {
            return Rt.get(T);
          }(b);
          if (w === void 0) return "continue";
          var k = s.names.get(w), v = a.getGroup(b);
          if (k === void 0 || !k.size || v.length === 0) return "continue";
          var R = "".concat(we, ".g").concat(b, '[id="').concat(w, '"]'), L = "";
          k !== void 0 && k.forEach(function(T) {
            T.length > 0 && (L += "".concat(T, ","));
          }), l += "".concat(v).concat(R, '{content:"').concat(L, '"}').concat(yr);
        }, h = 0; h < c; h++) p(h);
        return l;
      }(o);
    });
  }
  return e.registerId = function(t) {
    return gt(t);
  }, e.prototype.rehydrate = function() {
    !this.server && Et && Xr(this);
  }, e.prototype.reconstructWithOptions = function(t, r) {
    return r === void 0 && (r = !0), new e(U(U({}, this.options), t), this.gs, r && this.names || void 0);
  }, e.prototype.allocateGSInstance = function(t) {
    return this.gs[t] = (this.gs[t] || 0) + 1;
  }, e.prototype.getTag = function() {
    return this.tag || (this.tag = (t = function(r) {
      var n = r.useCSSOMInjection, o = r.target;
      return r.isServer ? new Ai(o) : n ? new Di(o) : new ji(o);
    }(this.options), new Ei(t)));
    var t;
  }, e.prototype.hasNameForId = function(t, r) {
    return this.names.has(t) && this.names.get(t).has(r);
  }, e.prototype.registerName = function(t, r) {
    if (gt(t), this.names.has(t)) this.names.get(t).add(r);
    else {
      var n = /* @__PURE__ */ new Set();
      n.add(r), this.names.set(t, n);
    }
  }, e.prototype.insertRules = function(t, r, n) {
    this.registerName(t, r), this.getTag().insertRules(gt(t), n);
  }, e.prototype.clearNames = function(t) {
    this.names.has(t) && this.names.get(t).clear();
  }, e.prototype.clearRules = function(t) {
    this.getTag().clearGroup(gt(t)), this.clearNames(t);
  }, e.prototype.clearTag = function() {
    this.tag = void 0;
  }, e;
}(), Ii = /&/g, Ni = /^\s*\/\/.*$/gm;
function Vn(e, t) {
  return e.map(function(r) {
    return r.type === "rule" && (r.value = "".concat(t, " ").concat(r.value), r.value = r.value.replaceAll(",", ",".concat(t, " ")), r.props = r.props.map(function(n) {
      return "".concat(t, " ").concat(n);
    })), Array.isArray(r.children) && r.type !== "@keyframes" && (r.children = Vn(r.children, t)), r;
  });
}
function Yn(e) {
  var t, r, n, o = e === void 0 ? Ze : e, s = o.options, a = s === void 0 ? Ze : s, c = o.plugins, l = c === void 0 ? Lt : c, p = function(w, k, v) {
    return v.startsWith(r) && v.endsWith(r) && v.replaceAll(r, "").length > 0 ? ".".concat(t) : w;
  }, h = l.slice();
  h.push(function(w) {
    w.type === Ct && w.value.includes("&") && (w.props[0] = w.props[0].replace(Ii, r).replace(n, p));
  }), a.prefix && h.push(ci), h.push(ii);
  var b = function(w, k, v, R) {
    k === void 0 && (k = ""), v === void 0 && (v = ""), R === void 0 && (R = "&"), t = R, r = k, n = new RegExp("\\".concat(r, "\\b"), "g");
    var L = w.replace(Ni, ""), T = ni(v || k ? "".concat(v, " ").concat(k, " { ").concat(L, " }") : L);
    a.namespace && (T = Vn(T, a.namespace));
    var m = [];
    return $t(T, ai(h.concat(si(function(S) {
      return m.push(S);
    })))), m;
  };
  return b.hash = l.length ? l.reduce(function(w, k) {
    return k.name || ne(15), Ne(w, k.name);
  }, Ln).toString() : "", b;
}
var Mi = new ct(), lr = Yn(), xr = H.createContext({ shouldForwardProp: void 0, styleSheet: Mi, stylis: lr });
xr.Consumer;
var zi = H.createContext(void 0);
function Pt() {
  return nn(xr);
}
function Gn(e) {
  var t = dr(e.stylisPlugins), r = t[0], n = t[1], o = Pt().styleSheet, s = mt(function() {
    var l = o;
    return e.sheet ? l = e.sheet : e.target && (l = l.reconstructWithOptions({ target: e.target }, !1)), e.disableCSSOMInjection && (l = l.reconstructWithOptions({ useCSSOMInjection: !1 })), l;
  }, [e.disableCSSOMInjection, e.sheet, e.target, o]), a = mt(function() {
    return Yn({ options: { namespace: e.namespace, prefix: e.enableVendorPrefixes }, plugins: r });
  }, [e.enableVendorPrefixes, e.namespace, r]);
  rn(function() {
    Vo(r, e.stylisPlugins) || n(e.stylisPlugins);
  }, [e.stylisPlugins]);
  var c = mt(function() {
    return { shouldForwardProp: e.shouldForwardProp, styleSheet: s, stylis: a };
  }, [e.shouldForwardProp, s, a]);
  return H.createElement(xr.Provider, { value: c }, H.createElement(zi.Provider, { value: a }, e.children));
}
var Jr = function() {
  function e(t, r) {
    var n = this;
    this.inject = function(o, s) {
      s === void 0 && (s = lr);
      var a = n.name + s.hash;
      o.hasNameForId(n.id, a) || o.insertRules(n.id, a, s(n.rules, a, "@keyframes"));
    }, this.name = t, this.id = "sc-keyframes-".concat(t), this.rules = r, br(this, function() {
      throw ne(12, String(n.name));
    });
  }
  return e.prototype.getName = function(t) {
    return t === void 0 && (t = lr), this.name + t.hash;
  }, e;
}(), Fi = function(e) {
  return e >= "A" && e <= "Z";
};
function Zr(e) {
  for (var t = "", r = 0; r < e.length; r++) {
    var n = e[r];
    if (r === 1 && n === "-" && e[0] === "-") return e;
    Fi(n) ? t += "-" + n.toLowerCase() : t += n;
  }
  return t.startsWith("ms-") ? "-" + t : t;
}
var qn = function(e) {
  return e == null || e === !1 || e === "";
}, Un = function(e) {
  var t, r, n = [];
  for (var o in e) {
    var s = e[o];
    e.hasOwnProperty(o) && !qn(s) && (Array.isArray(s) && s.isCss || We(s) ? n.push("".concat(Zr(o), ":"), s, ";") : Qe(s) ? n.push.apply(n, Fe(Fe(["".concat(o, " {")], Un(s), !1), ["}"], !1)) : n.push("".concat(Zr(o), ": ").concat((t = o, (r = s) == null || typeof r == "boolean" || r === "" ? "" : typeof r != "number" || r === 0 || t in li || t.startsWith("--") ? String(r).trim() : "".concat(r, "px")), ";")));
  }
  return n;
};
function Te(e, t, r, n) {
  if (qn(e)) return [];
  if (mr(e)) return [".".concat(e.styledComponentId)];
  if (We(e)) {
    if (!We(s = e) || s.prototype && s.prototype.isReactComponent || !t) return [e];
    var o = e(t);
    return process.env.NODE_ENV === "production" || typeof o != "object" || Array.isArray(o) || o instanceof Jr || Qe(o) || o === null || console.error("".concat(Mn(e), " is not a styled component and cannot be referred to via component selector. See https://www.styled-components.com/docs/advanced#referring-to-other-components for more details.")), Te(o, t, r, n);
  }
  var s;
  return e instanceof Jr ? r ? (e.inject(r, n), [e.getName(n)]) : [e] : Qe(e) ? Un(e) : Array.isArray(e) ? Array.prototype.concat.apply(Lt, e.map(function(a) {
    return Te(a, t, r, n);
  })) : [e.toString()];
}
function Xn(e) {
  for (var t = 0; t < e.length; t += 1) {
    var r = e[t];
    if (We(r) && !mr(r)) return !1;
  }
  return !0;
}
var Wi = In(Je), Bi = function() {
  function e(t, r, n) {
    this.rules = t, this.staticRulesId = "", this.isStatic = process.env.NODE_ENV === "production" && (n === void 0 || n.isStatic) && Xn(t), this.componentId = r, this.baseHash = Ne(Wi, r), this.baseStyle = n, ct.registerId(r);
  }
  return e.prototype.generateAndInjectStyles = function(t, r, n) {
    var o = this.baseStyle ? this.baseStyle.generateAndInjectStyles(t, r, n) : "";
    if (this.isStatic && !n.hash) if (this.staticRulesId && r.hasNameForId(this.componentId, this.staticRulesId)) o = Me(o, this.staticRulesId);
    else {
      var s = kt(Te(this.rules, t, r, n)), a = ar(Ne(this.baseHash, s) >>> 0);
      if (!r.hasNameForId(this.componentId, a)) {
        var c = n(s, ".".concat(a), void 0, this.componentId);
        r.insertRules(this.componentId, a, c);
      }
      o = Me(o, a), this.staticRulesId = a;
    }
    else {
      for (var l = Ne(this.baseHash, n.hash), p = "", h = 0; h < this.rules.length; h++) {
        var b = this.rules[h];
        if (typeof b == "string") p += b, process.env.NODE_ENV !== "production" && (l = Ne(l, b));
        else if (b) {
          var w = kt(Te(b, t, r, n));
          l = Ne(l, w + h), p += w;
        }
      }
      if (p) {
        var k = ar(l >>> 0);
        r.hasNameForId(this.componentId, k) || r.insertRules(this.componentId, k, n(p, ".".concat(k), void 0, this.componentId)), o = Me(o, k);
      }
    }
    return o;
  }, e;
}(), et = H.createContext(void 0);
et.Consumer;
function vr() {
  var e = nn(et);
  if (!e) throw ne(18);
  return e;
}
function Hi(e) {
  var t = H.useContext(et), r = mt(function() {
    return function(n, o) {
      if (!n) throw ne(14);
      if (We(n)) {
        var s = n(o);
        if (process.env.NODE_ENV !== "production" && (s === null || Array.isArray(s) || typeof s != "object")) throw ne(7);
        return s;
      }
      if (Array.isArray(n) || typeof n != "object") throw ne(8);
      return o ? U(U({}, o), n) : n;
    }(e.theme, t);
  }, [e.theme, t]);
  return e.children ? H.createElement(et.Provider, { value: r }, e.children) : null;
}
var Vt = {}, Qr = /* @__PURE__ */ new Set();
function Vi(e, t, r) {
  var n = mr(e), o = e, s = !Ht(e), a = t.attrs, c = a === void 0 ? Lt : a, l = t.componentId, p = l === void 0 ? function(E, I) {
    var P = typeof E != "string" ? "sc" : Vr(E);
    Vt[P] = (Vt[P] || 0) + 1;
    var $ = "".concat(P, "-").concat(Nn(Je + P + Vt[P]));
    return I ? "".concat(I, "-").concat($) : $;
  }(t.displayName, t.parentComponentId) : l, h = t.displayName, b = h === void 0 ? function(E) {
    return Ht(E) ? "styled.".concat(E) : "Styled(".concat(Mn(E), ")");
  }(e) : h, w = t.displayName && t.componentId ? "".concat(Vr(t.displayName), "-").concat(t.componentId) : t.componentId || p, k = n && o.attrs ? o.attrs.concat(c).filter(Boolean) : c, v = t.shouldForwardProp;
  if (n && o.shouldForwardProp) {
    var R = o.shouldForwardProp;
    if (t.shouldForwardProp) {
      var L = t.shouldForwardProp;
      v = function(E, I) {
        return R(E, I) && L(E, I);
      };
    } else v = R;
  }
  var T = new Bi(r, w, n ? o.componentStyle : void 0);
  function m(E, I) {
    return function(P, $, K) {
      var Z = P.attrs, $e = P.componentStyle, He = P.defaultProps, Ce = P.foldedComponentIds, Q = P.styledComponentId, le = P.target, me = H.useContext(et), Ve = Pt(), _e = P.shouldForwardProp || Ve.shouldForwardProp;
      process.env.NODE_ENV !== "production" && Ir(Q);
      var Ee = An($, me, He) || Ze, te = function(Re, ue, ge) {
        for (var oe, u = U(U({}, ue), { className: void 0, theme: ge }), d = 0; d < Re.length; d += 1) {
          var y = We(oe = Re[d]) ? oe(u) : oe;
          for (var C in y) u[C] = C === "className" ? Me(u[C], y[C]) : C === "style" ? U(U({}, u[C]), y[C]) : y[C];
        }
        return ue.className && (u.className = Me(u.className, ue.className)), u;
      }(Z, $, Ee), pe = te.as || le, he = {};
      for (var J in te) te[J] === void 0 || J[0] === "$" || J === "as" || J === "theme" && te.theme === Ee || (J === "forwardedAs" ? he.as = te.forwardedAs : _e && !_e(J, pe) || (he[J] = te[J], _e || process.env.NODE_ENV !== "development" || Bo(J) || Qr.has(J) || !ir.has(pe) || (Qr.add(J), console.warn('styled-components: it looks like an unknown prop "'.concat(J, '" is being sent through to the DOM, which will likely trigger a React console error. If you would like automatic filtering of unknown props, you can opt-into that behavior via `<StyleSheetManager shouldForwardProp={...}>` (connect an API like `@emotion/is-prop-valid`) or consider using transient props (`$` prefix for automatic filtering.)')))));
      var ke = function(Re, ue) {
        var ge = Pt(), oe = Re.generateAndInjectStyles(ue, ge.styleSheet, ge.stylis);
        return process.env.NODE_ENV !== "production" && Ir(oe), oe;
      }($e, te);
      process.env.NODE_ENV !== "production" && P.warnTooManyClasses && P.warnTooManyClasses(ke);
      var De = Me(Ce, Q);
      return ke && (De += " " + ke), te.className && (De += " " + te.className), he[Ht(pe) && !ir.has(pe) ? "class" : "className"] = De, he.ref = K, Eo(pe, he);
    }(S, E, I);
  }
  m.displayName = b;
  var S = H.forwardRef(m);
  return S.attrs = k, S.componentStyle = T, S.displayName = b, S.shouldForwardProp = v, S.foldedComponentIds = n ? Me(o.foldedComponentIds, o.styledComponentId) : "", S.styledComponentId = w, S.target = n ? o.target : e, Object.defineProperty(S, "defaultProps", { get: function() {
    return this._foldedDefaultProps;
  }, set: function(E) {
    this._foldedDefaultProps = n ? function(I) {
      for (var P = [], $ = 1; $ < arguments.length; $++) P[$ - 1] = arguments[$];
      for (var K = 0, Z = P; K < Z.length; K++) sr(I, Z[K], !0);
      return I;
    }({}, o.defaultProps, E) : E;
  } }), process.env.NODE_ENV !== "production" && (jn(b, w), S.warnTooManyClasses = /* @__PURE__ */ function(E, I) {
    var P = {}, $ = !1;
    return function(K) {
      if (!$ && (P[K] = !0, Object.keys(P).length >= 200)) {
        var Z = I ? ' with the id of "'.concat(I, '"') : "";
        console.warn("Over ".concat(200, " classes were generated for component ").concat(E).concat(Z, `.
`) + `Consider using the attrs method, together with a style object for frequently changed styles.
Example:
  const Component = styled.div.attrs(props => ({
    style: {
      background: props.background,
    },
  }))\`width: 100%;\`

  <Component />`), $ = !0, P = {};
      }
    };
  }(b, w)), br(S, function() {
    return ".".concat(S.styledComponentId);
  }), s && Bn(S, e, { attrs: !0, componentStyle: !0, displayName: !0, foldedComponentIds: !0, shouldForwardProp: !0, styledComponentId: !0, target: !0 }), S;
}
function en(e, t) {
  for (var r = [e[0]], n = 0, o = t.length; n < o; n += 1) r.push(t[n], e[n + 1]);
  return r;
}
var tn = function(e) {
  return Object.assign(e, { isCss: !0 });
};
function D(e) {
  for (var t = [], r = 1; r < arguments.length; r++) t[r - 1] = arguments[r];
  if (We(e) || Qe(e)) return tn(Te(en(Lt, Fe([e], t, !0))));
  var n = e;
  return t.length === 0 && n.length === 1 && typeof n[0] == "string" ? Te(n) : tn(Te(en(n, t)));
}
function ur(e, t, r) {
  if (r === void 0 && (r = Ze), !t) throw ne(1, t);
  var n = function(o) {
    for (var s = [], a = 1; a < arguments.length; a++) s[a - 1] = arguments[a];
    return e(t, r, D.apply(void 0, Fe([o], s, !1)));
  };
  return n.attrs = function(o) {
    return ur(e, t, U(U({}, r), { attrs: Array.prototype.concat(r.attrs, o).filter(Boolean) }));
  }, n.withConfig = function(o) {
    return ur(e, t, U(U({}, r), o));
  }, n;
}
var Kn = function(e) {
  return ur(Vi, e);
}, V = Kn;
ir.forEach(function(e) {
  V[e] = Kn(e);
});
var Yi = function() {
  function e(t, r) {
    this.rules = t, this.componentId = r, this.isStatic = Xn(t), ct.registerId(this.componentId + 1);
  }
  return e.prototype.createStyles = function(t, r, n, o) {
    var s = o(kt(Te(this.rules, r, n, o)), ""), a = this.componentId + t;
    n.insertRules(a, a, s);
  }, e.prototype.removeStyles = function(t, r) {
    r.clearRules(this.componentId + t);
  }, e.prototype.renderStyles = function(t, r, n, o) {
    t > 2 && ct.registerId(this.componentId + t), this.removeStyles(t, n), this.createStyles(t, r, n, o);
  }, e;
}();
function Gi(e) {
  for (var t = [], r = 1; r < arguments.length; r++) t[r - 1] = arguments[r];
  var n = D.apply(void 0, Fe([e], t, !1)), o = "sc-global-".concat(Nn(JSON.stringify(n))), s = new Yi(n, o);
  process.env.NODE_ENV !== "production" && jn(o);
  var a = function(l) {
    var p = Pt(), h = H.useContext(et), b = H.useRef(p.styleSheet.allocateGSInstance(o)).current;
    return process.env.NODE_ENV !== "production" && H.Children.count(l.children) && console.warn("The global style component ".concat(o, " was given child JSX. createGlobalStyle does not render children.")), process.env.NODE_ENV !== "production" && n.some(function(w) {
      return typeof w == "string" && w.indexOf("@import") !== -1;
    }) && console.warn("Please do not use @import CSS syntax in createGlobalStyle at this time, as the CSSOM APIs we use in production do not handle it well. Instead, we recommend using a library such as react-helmet to inject a typical <link> meta tag to the stylesheet, or simply embedding it manually in your index.html <head> section for a simpler app."), p.styleSheet.server && c(b, l, p.styleSheet, h, p.stylis), H.useLayoutEffect(function() {
      if (!p.styleSheet.server) return c(b, l, p.styleSheet, h, p.stylis), function() {
        return s.removeStyles(b, p.styleSheet);
      };
    }, [b, l, p.styleSheet, h, p.stylis]), null;
  };
  function c(l, p, h, b, w) {
    if (s.isStatic) s.renderStyles(l, di, h, w);
    else {
      var k = U(U({}, p), { theme: An(p, b, a.defaultProps) });
      s.renderStyles(l, k, h, w);
    }
  }
  return H.memo(a);
}
var qi = function() {
  function e() {
    var t = this;
    this._emitSheetCSS = function() {
      var r = t.instance.toString();
      if (!r) return "";
      var n = cr(), o = kt([n && 'nonce="'.concat(n, '"'), "".concat(we, '="true"'), "".concat(_t, '="').concat(Je, '"')].filter(Boolean), " ");
      return "<style ".concat(o, ">").concat(r, "</style>");
    }, this.getStyleTags = function() {
      if (t.sealed) throw ne(2);
      return t._emitSheetCSS();
    }, this.getStyleElement = function() {
      var r;
      if (t.sealed) throw ne(2);
      var n = t.instance.toString();
      if (!n) return [];
      var o = ((r = {})[we] = "", r[_t] = Je, r.dangerouslySetInnerHTML = { __html: n }, r), s = cr();
      return s && (o.nonce = s), [H.createElement("style", U({}, o, { key: "sc-0-0" }))];
    }, this.seal = function() {
      t.sealed = !0;
    }, this.instance = new ct({ isServer: !0 }), this.sealed = !1;
  }
  return e.prototype.collectStyles = function(t) {
    if (this.sealed) throw ne(2);
    return H.createElement(Gn, { sheet: this.instance }, t);
  }, e.prototype.interleaveWithNodeStream = function(t) {
    throw ne(3);
  }, e;
}();
process.env.NODE_ENV !== "production" && typeof navigator < "u" && navigator.product === "ReactNative" && console.warn(`It looks like you've imported 'styled-components' on React Native.
Perhaps you're looking to import 'styled-components/native'?
Read more about this at https://www.styled-components.com/docs/basics#react-native`);
var yt = "__sc-".concat(we, "__");
process.env.NODE_ENV !== "production" && process.env.NODE_ENV !== "test" && typeof window < "u" && (window[yt] || (window[yt] = 0), window[yt] === 1 && console.warn(`It looks like there are several instances of 'styled-components' initialized in this application. This may cause dynamic styles to not render properly, errors during the rehydration process, a missing theme prop, and makes your application bigger without good reason.

See https://s-c.sh/2BAXzed for more info.`), window[yt] += 1);
function Wa({ children: e }) {
  const [t] = dr(() => new qi());
  return zo.useServerInsertedHTML(() => {
    const r = t.getStyleElement();
    return t.instance.clearTag(), /* @__PURE__ */ x.jsx(x.Fragment, { children: r });
  }), typeof window < "u" ? /* @__PURE__ */ x.jsx(x.Fragment, { children: e }) : /* @__PURE__ */ x.jsx(Gn, { sheet: t.instance, enableVendorPrefixes: !0, children: e });
}
const Ui = (e) => Gi`
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
}

hr {
  margin: 20px 0;
  border: none;
  border-bottom: 1px solid ${e.colors.grayLight};
}
`;
function Xi({ ...e }) {
  const t = vr();
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
function Ki({ ...e }) {
  const t = vr();
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
function Ji({ ...e }) {
  const t = vr();
  return /* @__PURE__ */ x.jsxs(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      width: "24",
      height: "24",
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: t.colors.primary,
      strokeWidth: "2",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      ...e,
      children: [
        /* @__PURE__ */ x.jsx("path", { d: "M8 2v4" }),
        /* @__PURE__ */ x.jsx("path", { d: "M16 2v4" }),
        /* @__PURE__ */ x.jsx("rect", { width: "18", height: "18", x: "3", y: "4", rx: "2" }),
        /* @__PURE__ */ x.jsx("path", { d: "M3 10h18" }),
        /* @__PURE__ */ x.jsx("path", { d: "M8 14h.01" }),
        /* @__PURE__ */ x.jsx("path", { d: "M12 14h.01" }),
        /* @__PURE__ */ x.jsx("path", { d: "M16 14h.01" }),
        /* @__PURE__ */ x.jsx("path", { d: "M8 18h.01" }),
        /* @__PURE__ */ x.jsx("path", { d: "M12 18h.01" }),
        /* @__PURE__ */ x.jsx("path", { d: "M16 18h.01" })
      ]
    }
  );
}
const wr = {
  xs: 0,
  sm: 576,
  md: 768,
  lg: 992,
  xl: 1200,
  xxl: 1440,
  xxxl: 1920
};
function z(e) {
  return `@media screen and (min-width: ${wr[e]}px)`;
}
const Jn = {
  maxWidth: { xs: "1280px", xxxl: "1440px" },
  padding: { xs: "20px", lg: "40px" },
  radius: { xs: "6px", lg: "12px", xl: "30px" },
  gridGap: { xs: "20px", lg: "40px" }
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
  grayLight: "#e5e7eb",
  gray: "#9ca3af",
  grayDark: "#4b5563",
  success: "#84cc16",
  error: "#ef4444",
  warning: "#eab308",
  info: "#06b6d4",
  dark: "#000000",
  light: "#ffffff"
}, Qi = {
  primaryLight: "#79C5FF",
  primary: "#6198C6",
  primaryDark: "#339DF4",
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
}, ea = {
  xs: "0px 4px 4px 0px rgba(18, 18, 18, 0.04), 0px 1px 3px 0px rgba(39, 41, 45, 0.02)",
  sm: "0px 4px 4px 0px rgba(18, 18, 18, 0.08), 0px 1px 3px 0px rgba(39, 41, 45, 0.04)",
  md: "0px 8px 8px 0px rgba(18, 18, 18, 0.16), 0px 2px 3px 0px rgba(39, 41, 45, 0.06)",
  lg: "0px 16px 24px 0px rgba(18, 18, 18, 0.20), 0px 2px 3px 0px rgba(39, 41, 45, 0.08)",
  xl: "0px 24px 32px 0px rgba(18, 18, 18, 0.24), 0px 2px 3px 0px rgba(39, 41, 45, 0.12)"
}, ta = {
  xs: "0px 4px 4px 0px rgba(255, 255, 255, 0.04), 0px 1px 3px 0px rgba(255, 255, 255, 0.02)",
  sm: "0px 4px 4px 0px rgba(255, 255, 255, 0.08), 0px 1px 3px 0px rgba(255, 255, 255, 0.04)",
  md: "0px 8px 8px 0px rgba(255, 255, 255, 0.16), 0px 2px 3px 0px rgba(255, 255, 255, 0.06)",
  lg: "0px 16px 24px 0px rgba(255, 255, 255, 0.20), 0px 2px 3px 0px rgba(255, 255, 255, 0.08)",
  xl: "0px 24px 32px 0px rgba(255, 255, 255, 0.24), 0px 2px 3px 0px rgba(255, 255, 255, 0.12)"
}, Zn = {
  text: "Inter",
  head: "Inter",
  mono: "monospace"
}, Qn = {
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
}, eo = {
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
}, ut = {
  breakpoints: wr,
  spacing: Jn,
  colors: Zi,
  shadows: ea,
  fonts: Zn,
  fontSizes: Qn,
  lineHeights: eo,
  isDark: !1
}, Ba = {
  breakpoints: wr,
  spacing: Jn,
  colors: Qi,
  shadows: ta,
  fonts: Zn,
  fontSizes: Qn,
  lineHeights: eo,
  isDark: !0
}, ve = D`
  box-sizing: border-box;
  appearance: none;
  border: none;
  background: none;
  padding: 0;
  margin: 0;
  cursor: pointer;
  outline: none;
`, Sr = D`
  cursor: text;
  min-width: 100px;
`, Se = (e) => {
  if (e)
    return D`
      width: 100%;
    `;
}, Be = (e, t, r) => {
  if (e)
    return D`
      border-color: ${r == null ? void 0 : r.colors.error};
    `;
  if (t)
    return D`
      border-color: ${r == null ? void 0 : r.colors.success};
    `;
}, $r = (e) => e === "big" ? D`
      height: 60px;
    ` : D`
    height: 50px;
  `, re = (e, t) => D`
  ${z(e)} {
    gap: ${t === "none" ? "0" : `${t}px`};
  }
`, je = (e, t) => D`
  ${z(e)} {
    grid-template-columns: repeat(${t || 3}, minmax(0, 1fr));
  }
`, Ae = (e, t) => D`
  ${z(e)} {
    grid-column: span ${t};
  }
`, Le = (e, t) => D`
  ${z(e)} {
    padding: ${t === "none" ? "0" : `${t}px`};
  }
`, Ie = (e, t) => D`
  ${z(e)} {
    justify-content: ${t && `${t}`};
  }
`, Ha = (e) => D`
  font-size: ${e.fontSizes.hero1.xs};
  line-height: ${e.lineHeights.hero1.xs};

  ${z("lg")} {
    font-size: ${e.fontSizes.hero1.lg};
    line-height: ${e.lineHeights.hero1.lg};
  }
`, Va = (e) => D`
  font-size: ${e.fontSizes.hero2.xs};
  line-height: ${e.lineHeights.hero2.xs};

  ${z("lg")} {
    font-size: ${e.fontSizes.hero2.lg};
    line-height: ${e.lineHeights.hero2.lg};
  }
`, Ya = (e) => D`
  font-size: ${e.fontSizes.hero3.xs};
  line-height: ${e.lineHeights.hero3.xs};

  ${z("lg")} {
    font-size: ${e.fontSizes.hero3.lg};
    line-height: ${e.lineHeights.hero3.lg};
  }
`, Ga = (e) => D`
  font-size: ${e.fontSizes.h1.xs};
  line-height: ${e.lineHeights.h1.xs};

  ${z("lg")} {
    font-size: ${e.fontSizes.h1.lg};
    line-height: ${e.lineHeights.h1.lg};
  }
`, qa = (e) => D`
  font-size: ${e.fontSizes.h2.xs};
  line-height: ${e.lineHeights.h2.xs};

  ${z("lg")} {
    font-size: ${e.fontSizes.h2.lg};
    line-height: ${e.lineHeights.h2.lg};
  }
`, Ua = (e) => D`
  font-size: ${e.fontSizes.h3.xs};
  line-height: ${e.lineHeights.h3.xs};

  ${z("lg")} {
    font-size: ${e.fontSizes.h3.lg};
    line-height: ${e.lineHeights.h3.lg};
  }
`, Xa = (e) => D`
  font-size: ${e.fontSizes.h4.xs};
  line-height: ${e.lineHeights.h4.xs};

  ${z("lg")} {
    font-size: ${e.fontSizes.h4.lg};
    line-height: ${e.lineHeights.h4.lg};
  }
`, Ka = (e) => D`
  font-size: ${e.fontSizes.h5.xs};
  line-height: ${e.lineHeights.h5.xs};

  ${z("lg")} {
    font-size: ${e.fontSizes.h5.lg};
    line-height: ${e.lineHeights.h5.lg};
  }
`, Ja = (e) => D`
  font-size: ${e.fontSizes.h6.xs};
  line-height: ${e.lineHeights.h6.xs};

  ${z("lg")} {
    font-size: ${e.fontSizes.h6.lg};
    line-height: ${e.lineHeights.h6.lg};
  }
`, Za = (e) => D`
  font-size: ${e.fontSizes.text.xs};
  line-height: ${e.lineHeights.text.xs};

  ${z("lg")} {
    font-size: ${e.fontSizes.text.lg};
    line-height: ${e.lineHeights.text.lg};
  }
`, Qa = (e) => D`
  font-size: ${e.fontSizes.strong.xs};
  line-height: ${e.lineHeights.strong.xs};

  ${z("lg")} {
    font-size: ${e.fontSizes.strong.lg};
    line-height: ${e.lineHeights.strong.lg};
  }
`, es = (e) => D`
  font-size: ${e.fontSizes.small.xs};
  line-height: ${e.lineHeights.small.xs};

  ${z("lg")} {
    font-size: ${e.fontSizes.small.lg};
    line-height: ${e.lineHeights.small.lg};
  }
`, ts = (e) => D`
  font-size: ${e.fontSizes.blockquote.xs};
  line-height: ${e.lineHeights.blockquote.xs};

  ${z("lg")} {
    font-size: ${e.fontSizes.blockquote.lg};
    line-height: ${e.lineHeights.blockquote.lg};
  }
`, rs = (e) => D`
  font-size: ${e.fontSizes.code.xs};
  line-height: ${e.lineHeights.code.xs};

  ${z("lg")} {
    font-size: ${e.fontSizes.code.lg};
    line-height: ${e.lineHeights.code.lg};
  }
`, ns = (e) => D`
  font-size: ${e.fontSizes.button.xs};
  line-height: ${e.lineHeights.button.xs};

  ${z("lg")} {
    font-size: ${e.fontSizes.button.lg};
    line-height: ${e.lineHeights.button.lg};
  }
`, os = (e) => D`
  font-size: ${e.fontSizes.buttonBig.xs};
  line-height: ${e.lineHeights.buttonBig.xs};

  ${z("lg")} {
    font-size: ${e.fontSizes.buttonBig.lg};
    line-height: ${e.lineHeights.buttonBig.lg};
  }
`, is = (e) => D`
  font-size: ${e.fontSizes.input.xs};
  line-height: ${e.lineHeights.input.xs};

  ${z("lg")} {
    font-size: ${e.fontSizes.input.lg};
    line-height: ${e.lineHeights.input.lg};
  }
`, as = (e) => D`
  font-size: ${e.fontSizes.inputBig.xs};
  line-height: ${e.lineHeights.inputBig.xs};

  ${z("lg")} {
    font-size: ${e.fontSizes.inputBig.lg};
    line-height: ${e.lineHeights.inputBig.lg};
  }
`, ra = ko({
  setTheme: null
});
function ss({
  children: e,
  theme: t,
  themeDark: r
}) {
  const [n, o] = dr(t);
  rn(() => {
    if (!r) return o(t);
    localStorage.theme === "dark" || !("theme" in localStorage) && window.matchMedia("(prefers-color-scheme: dark)").matches ? (document.documentElement.classList.add("dark"), o(r)) : (document.documentElement.classList.remove("dark"), o(t));
  }, []);
  const s = Ui(n);
  return /* @__PURE__ */ x.jsx(Hi, { theme: n, children: /* @__PURE__ */ x.jsxs(ra.Provider, { value: { setTheme: o }, children: [
    /* @__PURE__ */ x.jsx(s, {}),
    e
  ] }) });
}
const na = V.div`
  margin: auto;
  width: 100%;
  max-width: ${({ theme: e, $fluid: t }) => t ? "100%" : e.spacing.maxWidth.xs};
  ${({ $textAlign: e }) => e && `text-align: ${e}`};
  padding: ${({ $padding: e, theme: t }) => e && `${e}px` || t.spacing.padding.xs};

  ${z("lg")} {
    padding: ${({ $padding: e, theme: t }) => e && `${e}px` || t.spacing.padding.lg};
  }

  ${z("xxxl")} {
    max-width: ${({ theme: e, $fluid: t }) => t ? "100%" : e.spacing.maxWidth.xxxl};
  }

  ${({ $xsPadding: e }) => e && Le("xs", e)}
  ${({ $smPadding: e }) => e && Le("sm", e)}
	${({ $mdPadding: e }) => e && Le("md", e)}
	${({ $lgPadding: e }) => e && Le("lg", e)}
	${({ $xlPadding: e }) => e && Le("xl", e)}
	${({ $xxlPadding: e }) => e && Le("xxl", e)}
	${({ $xxxlPadding: e }) => e && Le("xxxl", e)}
`;
function oa({ theme: e = ut, ...t }, r) {
  return /* @__PURE__ */ x.jsx(na, { ...t, theme: e, ref: r, children: t.children });
}
const ia = ae(oa), aa = V(ia)`
  background: ${({ theme: e }) => e.colors.light};
  border-radius: ${({ theme: e }) => e.spacing.radius.lg};
  border: solid 1px ${({ theme: e }) => e.colors.grayLight};
`;
function sa({ theme: e = ut, ...t }, r) {
  return /* @__PURE__ */ x.jsx(aa, { ...t, theme: e, ref: r, children: t.children });
}
const cs = ae(sa), ca = (e, t, r, n, o, s) => D`
  ${ve};
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

  ${!s && t === "primary" && D`
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

  ${!s && t === "secondary" && D`
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

	${!s && t === "tertiary" && D`
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
      padding: 18px 30px;
	` : `font-size: ${e.fontSizes.button.lg};
			line-height: ${e.lineHeights.button.lg};`}

	${s && `
		cursor: not-allowed;
		background: ${e.colors.grayLight};
		border-color: ${e.colors.grayLight};
		color: ${e.colors.gray};
	`}

	${o && "width: 100%;"}
`, la = V.button`
  ${({ theme: e, $variant: t, $size: r, $outline: n, $fullWidth: o, disabled: s }) => ca(e, t, r, n, o, s)}
`;
function ua({ $variant: e = "primary", ...t }, r) {
  return /* @__PURE__ */ x.jsxs(la, { $variant: e, ...t, ref: r, children: [
    t.$iconPosition !== "right" && t.$icon && t.$icon,
    t.children,
    t.$iconPosition === "right" && t.$icon && t.$icon
  ] });
}
const ls = ae(ua), da = V.div`
  ${({ $span: e }) => e && `
		grid-column: span ${e};
	`}

  ${({ $xsSpan: e }) => e && Ae("xs", e)}
	${({ $smSpan: e }) => e && Ae("sm", e)}
	${({ $mdSpan: e }) => e && Ae("md", e)}
	${({ $lgSpan: e }) => e && Ae("lg", e)}
	${({ $xlSpan: e }) => e && Ae("xl", e)}
	${({ $xxlSpan: e }) => e && Ae("xxl", e)}
	${({ $xxxlSpan: e }) => e && Ae("xxxl", e)}
`;
function fa({ theme: e = ut, ...t }, r) {
  return /* @__PURE__ */ x.jsx(da, { ...t, theme: e, ref: r, children: t.children });
}
const us = ae(fa), pa = V.div`
  display: flex;
  justify-content: ${({ $justifyContent: e }) => e || "flex-start"};
  flex-wrap: ${({ $wrap: e }) => e || "wrap"};
  gap: ${({ $gap: e, theme: t }) => e && `${e}px` || t.spacing.gridGap.xs};
  flex-direction: ${({ $direction: e }) => e || "row"};

  ${z("lg")} {
    gap: ${({ $gap: e, theme: t }) => e && `${e}px` || t.spacing.gridGap.lg};
  }

  ${({ $xsGap: e }) => e && re("xs", e)}
  ${({ $xsJustifyContent: e }) => e && Ie("xs", e)}
	${({ $smGap: e }) => e && re("sm", e)}
	${({ $smJustifyContent: e }) => e && Ie("sm", e)}
	${({ $mdGap: e }) => e && re("md", e)}
	${({ $mdJustifyContent: e }) => e && Ie("md", e)}
	${({ $lgGap: e }) => e && re("lg", e)}
	${({ $lgJustifyContent: e }) => e && Ie("lg", e)}
	${({ $xlGap: e }) => e && re("xl", e)}
	${({ $xlJustifyContent: e }) => e && Ie("xl", e)}
	${({ $xxlGap: e }) => e && re("xxl", e)}
	${({ $xxlJustifyContent: e }) => e && Ie("xxl", e)}
	${({ $xxxlGap: e }) => e && re("xxxl", e)}
	${({ $xxxlJustifyContent: e }) => e && Ie("xxxl", e)}
  ${({ $fullWidth: e }) => Se(!!e)}
`;
function ha({ theme: e = ut, ...t }, r) {
  return /* @__PURE__ */ x.jsx(pa, { ...t, theme: e, ref: r, children: t.children });
}
const ds = ae(ha), ga = V.div`
  width: 100%;
  display: grid;
  grid-template-columns: ${({ $cols: e }) => `repeat(${e || 3}, minmax(0, 1fr))`};
  gap: ${({ $gap: e, theme: t }) => e && `${e}px` || t.spacing.gridGap.xs};

  ${z("lg")} {
    gap: ${({ $gap: e, theme: t }) => e && `${e}px` || t.spacing.gridGap.lg};
  }

  ${({ $xsGap: e }) => e && re("xs", e)}
  ${({ $smGap: e }) => e && re("sm", e)}
	${({ $mdGap: e }) => e && re("md", e)}
	${({ $lgGap: e }) => e && re("lg", e)}
	${({ $xlGap: e }) => e && re("xl", e)}
	${({ $xxlGap: e }) => e && re("xxl", e)}
	${({ $xxxlGap: e }) => e && re("xxxl", e)}

	${({ $xsCols: e }) => e && je("xs", e)}
	${({ $smCols: e }) => e && je("sm", e)}
	${({ $mdCols: e }) => e && je("md", e)}
	${({ $lgCols: e }) => e && je("lg", e)}
	${({ $xlCols: e }) => e && je("xl", e)}
	${({ $xxlCols: e }) => e && je("xxl", e)}
	${({ $xxxlCols: e }) => e && je("xxxl", e)}
`;
function ya({ theme: e = ut, ...t }, r) {
  return /* @__PURE__ */ x.jsx(ga, { ...t, theme: e, ref: r, children: t.children });
}
const fs = ae(ya), lt = V.span`
  display: inline-flex;
  flex-wrap: ${({ type: e }) => e === "checkbox" || e === "radio" ? "nowrap" : "wrap"};
  align-items: center;

  ${({ $label: e }) => e && D`
      gap: 10px;
      align-items: flex-start;
    `}

  & .icon-calendar {
    position: absolute;
    top: 50%;
    right: 17px;
    left: initial;
    transform: translateY(-50%);
    pointer-events: none;
    width: 24px;
    height: 24px;

    @supports (-moz-appearance: none) {
      display: none;
    }
  }

  ${({ $fullWidth: e }) => Se(!!e)}
`, tt = V.label`
  display: inline-block;
  color: ${({ theme: e }) => e.colors.grayDark};
  font-size: ${({ theme: e }) => e.fontSizes.text.lg};
  line-height: ${({ theme: e }) => e.lineHeights.text.lg};
  margin-top: ${({ type: e }) => e === "checkbox" || e === "radio" ? "-2px" : "0"};
`, ma = V.input`
  ${ve};
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
  display: inline-flex;

  &[type="date"] {
    padding: 17px 45px 17px 15px;

    @supports (-moz-appearance: none) {
      padding: 13px 15px;
    }
  }

  &::-webkit-datetime-edit {
    padding: 0;
    margin: 0;
    vertical-align: middle;
  }

  &::-webkit-datetime-edit-fields-wrapper {
    padding: 4px 0;
    margin: 0;
    vertical-align: middle;
  }

  &::-webkit-calendar-picker-indicator {
    background: transparent;
    cursor: pointer;
    position: absolute;
    right: 15px;
    top: 50%;
    transform: translateY(-50%);
    width: 24px;
    height: 24px;
  }

  &::-webkit-datetime-edit-text {
    color: ${({ theme: e }) => e.colors.gray};
  }

  &::-webkit-datetime-edit-month-field {
    &:focus {
      background: ${({ theme: e }) => e.colors.primary};
      color: ${({ theme: e }) => e.colors.light};
      border-radius: 4px;
    }
  }

  &::-webkit-datetime-edit-day-field {
    &:focus {
      background: ${({ theme: e }) => e.colors.primary};
      color: ${({ theme: e }) => e.colors.light};
      border-radius: 4px;
    }
  }

  &::-webkit-datetime-edit-year-field {
    &:focus {
      background: ${({ theme: e }) => e.colors.primary};
      color: ${({ theme: e }) => e.colors.light};
      border-radius: 4px;
    }
  }

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

	${({ $error: e, $success: t, theme: r }) => Be(!!e, !!t, r)}

	${({ disabled: e, theme: t }) => e && `cursor: not-allowed;
		background: ${t.colors.grayLight};
		border-color: ${t.colors.gray};
		color: ${t.colors.gray};
	`}

	${({ $fullWidth: e }) => Se(!!e)}
`, ba = V.span`
  display: inline-flex;
  position: relative;
  line-height: 0;
  min-width: fit-content;

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
`, xa = V.input`
  ${ve};
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

	${({ $error: e, $success: t, theme: r }) => Be(!!e, !!t, r)}

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
`, va = V.span`
  position: relative;
  ${({ $fullWidth: e }) => Se(!!e)};

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

  ${({ $icon: e, $iconPosition: t }) => e && t === "right" ? D`
          & svg {
            right: 16px;
          }

          & input {
            padding-right: 50px;
          }
        ` : D`
          & svg {
            left: 16px;
          }

          & svg ~ input {
            padding-left: 50px;
          }
        `}
`;
function wa({ ...e }, t) {
  return e.type === "checkbox" || e.type === "radio" ? /* @__PURE__ */ x.jsxs(lt, { $fullWidth: e.$fullWidth, type: e.type, $label: e.$label, children: [
    /* @__PURE__ */ x.jsxs(ba, { children: [
      /* @__PURE__ */ x.jsx(xa, { ...e, ref: t }),
      !e.disabled && e.type === "checkbox" ? /* @__PURE__ */ x.jsx(Xi, {}) : /* @__PURE__ */ x.jsx("em", {})
    ] }),
    e.$label && /* @__PURE__ */ x.jsx(tt, { htmlFor: e.id, ...e, children: e.$label })
  ] }) : /* @__PURE__ */ x.jsxs(lt, { $fullWidth: e.$fullWidth, type: e.type, $label: e.$label, children: [
    e.$label && /* @__PURE__ */ x.jsx(tt, { htmlFor: e.id, children: e.$label }),
    /* @__PURE__ */ x.jsxs(
      va,
      {
        $fullWidth: e.$fullWidth,
        $iconPosition: e.$iconPosition,
        $icon: e.$icon,
        children: [
          e.$iconPosition !== "right" && e.$icon && e.$icon,
          /* @__PURE__ */ x.jsx(ma, { ...e, ref: t }),
          e.$iconPosition === "right" && e.$icon && e.$icon,
          e.type === "date" && /* @__PURE__ */ x.jsx(Ji, { className: "icon-calendar" })
        ]
      }
    )
  ] });
}
const ps = ae(wa), to = (e) => `max-width: ${e}px;`;
function Sa(e) {
  return Object.keys(e).filter((t) => t.startsWith("$")).map((t) => {
    const r = t.substring(1);
    return e[t] && z(r) + `{ ${to(e[t])} }`;
  }).join("");
}
const $a = V.div`
  display: block;
  margin: auto;

  ${({ $size: e }) => `
		${e && to(e)};
	`}
  ${(e) => Sa(e)}
`;
function _a({ ...e }, t) {
  return /* @__PURE__ */ x.jsx($a, { ...e, ref: t, children: e.children });
}
const hs = ae(_a), Ea = V.span`
  display: inline-flex;
  flex-wrap: ${({ type: e }) => e === "checkbox" || e === "radio" ? "fprnowrap" : "wrap"};
  gap: 10px;
  align-items: center;

  ${({ $fullWidth: e }) => Se(!!e)}
`, ka = V.input`
  ${ve};
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
    ${({ $error: e, $success: t, theme: r }) => Be(!!e, !!t, r)}
  }

  &::-moz-range-track {
    width: 100%;
    cursor: pointer;
    border-radius: ${({ theme: e }) => e.spacing.radius.xl};
    border: solid 2px ${({ theme: e }) => e.colors.grayLight};
    box-shadow: 0 0 0 0 ${({ theme: e }) => e.colors.primaryLight};
    transition: all 0.3s ease;
    ${({ $error: e, $success: t, theme: r }) => Be(!!e, !!t, r)}
  }

  &::-webkit-slider-thumb {
    ${ve};
    background: ${({ theme: e }) => e.colors.primary};
    border: 0 solid transparent;
    border-radius: 50%;
    transition: all 0.3s ease;
  }

  &::-moz-range-thumb {
    ${ve};
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

  ${({ $fullWidth: e }) => Se(!!e)}

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
function Ra({ ...e }, t) {
  return /* @__PURE__ */ x.jsxs(Ea, { $fullWidth: e.$fullWidth, children: [
    e.$label && /* @__PURE__ */ x.jsx(tt, { htmlFor: e.id, children: e.$label }),
    /* @__PURE__ */ x.jsx(ka, { ...e, type: "range", ref: t })
  ] });
}
const gs = ae(Ra), Pa = V.select`
  ${ve};
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

	${({ $error: e, $success: t, theme: r }) => Be(!!e, !!t, r)}

	${({ disabled: e, theme: t }) => e && `cursor: not-allowed;
		background: ${t.colors.grayLight};
		border-color: ${t.colors.gray};
		color: ${t.colors.gray};
	`}

	${({ $fullWidth: e }) => Se(!!e)}
`, Oa = V.span`
  position: relative;
  ${({ $fullWidth: e }) => Se(!!e)}

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
function Ta({ ...e }, t) {
  return /* @__PURE__ */ x.jsxs(lt, { $fullWidth: e.$fullWidth, $label: e.$label, children: [
    e.$label && /* @__PURE__ */ x.jsx(tt, { htmlFor: e.id, children: e.$label }),
    /* @__PURE__ */ x.jsxs(Oa, { $fullWidth: e.$fullWidth, children: [
      /* @__PURE__ */ x.jsx(Pa, { ...e, ref: t, children: e.children }),
      /* @__PURE__ */ x.jsx(Ki, {})
    ] })
  ] });
}
const ys = ae(Ta), ro = (e, t) => t ? `display: inline-block;
			max-height: 0;
			min-width: ${e}px;
			max-width: ${e}px;` : `display: block;
			min-height: ${e}px;
			max-height: ${e}px;`;
function Ca(e) {
  return Object.keys(e).filter((t) => t.startsWith("$")).map((t) => {
    const r = t.substring(1);
    return e[t] && z(r) + `{ ${ro(e[t], e.$horizontal || !1)} }`;
  }).join("");
}
const Da = V.span`
  ${({ $horizontal: e, $size: t }) => `
		${t && t !== "none" && ro(t, e || !1)};
		${t === "none" && "display: none;"};
	`}
  ${(e) => Ca(e)}
`;
function ja({ ...e }, t) {
  return /* @__PURE__ */ x.jsx(Da, { ...e, ref: t });
}
const ms = ae(ja), Aa = V.textarea`
  ${ve};
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

  ${({ $error: e, $success: t, theme: r }) => Be(!!e, !!t, r)}

	${({ disabled: e, theme: t }) => e && `cursor: not-allowed;
		background: ${t.colors.grayLight};
		border-color: ${t.colors.gray};
		color: ${t.colors.gray};
	`}

	${({ $fullWidth: e }) => Se(!!e)}
`;
function La({ ...e }, t) {
  return /* @__PURE__ */ x.jsxs(lt, { $fullWidth: e.$fullWidth, $label: e.$label, children: [
    e.$label && /* @__PURE__ */ x.jsx(tt, { htmlFor: e.id, $label: e.$label, children: e.$label }),
    /* @__PURE__ */ x.jsx(Aa, { ...e, ref: t, children: e.children })
  ] });
}
const bs = ae(La), Ia = V.span`
  display: inline-block;
  margin: auto 0;
  position: relative;
  vertical-align: middle;
`, Na = V.span`
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

  ${({ $error: e, $success: t, theme: r }) => Be(!!e, !!t, r)}

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
`, Ma = V.input`
  ${ve};
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
function za({ type: e = "checkbox", ...t }, r) {
  return /* @__PURE__ */ x.jsxs(lt, { $fullWidth: t.$fullWidth, $label: t.$label, children: [
    /* @__PURE__ */ x.jsxs(Ia, { children: [
      /* @__PURE__ */ x.jsx(Ma, { ...t, type: e, ref: r }),
      /* @__PURE__ */ x.jsx(
        Na,
        {
          $error: t.$error,
          $success: t.$success,
          className: "fake-toggle",
          $size: t.$size
        }
      )
    ] }),
    t.$label && /* @__PURE__ */ x.jsx(tt, { htmlFor: t.id, children: t.$label })
  ] });
}
const xs = ae(za);
export {
  cs as Box,
  ls as Button,
  ss as CherryThemeProvider,
  us as Col,
  ia as Container,
  ds as Flex,
  Ui as GlobalStyles,
  fs as Grid,
  Ki as IconArrow,
  Ji as IconCalendar,
  Xi as IconCheck,
  ps as Input,
  hs as MaxWidth,
  gs as Range,
  ys as Select,
  ms as Space,
  Wa as StyledComponentsRegistry,
  Oa as StyledIconWrapper,
  lt as StyledInputWrapper,
  tt as StyledLabel,
  bs as Textarea,
  ra as ThemeContext,
  xs as Toggle,
  wr as breakpoints,
  ca as buttonStyles,
  Zi as colors,
  Qi as colorsDark,
  Qn as fontSizes,
  Zn as fonts,
  $r as formElementHeightStyles,
  Se as fullWidthStyles,
  Ae as generateColSpanStyles,
  je as generateColsStyles,
  re as generateGapStyles,
  Ie as generateJustifyContentStyles,
  Le as generatePaddingStyles,
  eo as lineHeights,
  z as mq,
  ve as resetButton,
  Sr as resetInput,
  ea as shadows,
  ta as shadowsDark,
  Jn as spacing,
  Be as statusBorderStyles,
  ts as styledBlockquote,
  ns as styledButton,
  os as styledButtonBig,
  rs as styledCode,
  Ga as styledH1,
  qa as styledH2,
  Ua as styledH3,
  Xa as styledH4,
  Ka as styledH5,
  Ja as styledH6,
  Ha as styledHero1,
  Va as styledHero2,
  Ya as styledHero3,
  is as styledInput,
  as as styledInputBig,
  es as styledSmall,
  Qa as styledStrong,
  Za as styledText,
  ut as theme,
  Ba as themeDark
};
