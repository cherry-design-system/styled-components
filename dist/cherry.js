import B, { useState as Pr, useMemo as At, useEffect as Vn, useContext as Xn, useRef as Do, useDebugValue as Ur, createElement as No, createContext as Io, forwardRef as re } from "react";
function Lo(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var lt = { exports: {} }, rt = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Gr;
function Mo() {
  if (Gr) return rt;
  Gr = 1;
  var e = Symbol.for("react.transitional.element"), t = Symbol.for("react.fragment");
  function r(n, o, i) {
    var s = null;
    if (i !== void 0 && (s = "" + i), o.key !== void 0 && (s = "" + o.key), "key" in o) {
      i = {};
      for (var c in o)
        c !== "key" && (i[c] = o[c]);
    } else i = o;
    return o = i.ref, {
      $$typeof: e,
      type: n,
      key: s,
      ref: o !== void 0 ? o : null,
      props: i
    };
  }
  return rt.Fragment = t, rt.jsx = r, rt.jsxs = r, rt;
}
var nt = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Yr;
function zo() {
  return Yr || (Yr = 1, process.env.NODE_ENV !== "production" && function() {
    function e(a) {
      if (a == null) return null;
      if (typeof a == "function")
        return a.$$typeof === Ae ? null : a.displayName || a.name || null;
      if (typeof a == "string") return a;
      switch (a) {
        case $:
          return "Fragment";
        case C:
          return "Portal";
        case F:
          return "Profiler";
        case S:
          return "StrictMode";
        case _e:
          return "Suspense";
        case fe:
          return "SuspenseList";
      }
      if (typeof a == "object")
        switch (typeof a.tag == "number" && console.error(
          "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
        ), a.$$typeof) {
          case de:
            return (a.displayName || "Context") + ".Provider";
          case V:
            return (a._context.displayName || "Context") + ".Consumer";
          case Se:
            var m = a.render;
            return a = a.displayName, a || (a = m.displayName || m.name || "", a = a !== "" ? "ForwardRef(" + a + ")" : "ForwardRef"), a;
          case Pe:
            return m = a.displayName || null, m !== null ? m : e(a.type) || "Memo";
          case Oe:
            m = a._payload, a = a._init;
            try {
              return e(a(m));
            } catch {
            }
        }
      return null;
    }
    function t(a) {
      return "" + a;
    }
    function r(a) {
      try {
        t(a);
        var m = !1;
      } catch {
        m = !0;
      }
      if (m) {
        m = console;
        var b = m.error, j = typeof Symbol == "function" && Symbol.toStringTag && a[Symbol.toStringTag] || a.constructor.name || "Object";
        return b.call(
          m,
          "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
          j
        ), t(a);
      }
    }
    function n() {
    }
    function o() {
      if (oe === 0) {
        he = console.log, ce = console.info, ge = console.warn, ie = console.error, d = console.group, f = console.groupCollapsed, h = console.groupEnd;
        var a = {
          configurable: !0,
          enumerable: !0,
          value: n,
          writable: !0
        };
        Object.defineProperties(console, {
          info: a,
          log: a,
          warn: a,
          error: a,
          group: a,
          groupCollapsed: a,
          groupEnd: a
        });
      }
      oe++;
    }
    function i() {
      if (oe--, oe === 0) {
        var a = { configurable: !0, enumerable: !0, writable: !0 };
        Object.defineProperties(console, {
          log: J({}, a, { value: he }),
          info: J({}, a, { value: ce }),
          warn: J({}, a, { value: ge }),
          error: J({}, a, { value: ie }),
          group: J({}, a, { value: d }),
          groupCollapsed: J({}, a, { value: f }),
          groupEnd: J({}, a, { value: h })
        });
      }
      0 > oe && console.error(
        "disabledDepth fell below zero. This is a bug in React. Please file an issue."
      );
    }
    function s(a) {
      if (k === void 0)
        try {
          throw Error();
        } catch (b) {
          var m = b.stack.trim().match(/\n( *(at )?)/);
          k = m && m[1] || "", L = -1 < b.stack.indexOf(`
    at`) ? " (<anonymous>)" : -1 < b.stack.indexOf("@") ? "@unknown:0:0" : "";
        }
      return `
` + k + a + L;
    }
    function c(a, m) {
      if (!a || Z) return "";
      var b = ue.get(a);
      if (b !== void 0) return b;
      Z = !0, b = Error.prepareStackTrace, Error.prepareStackTrace = void 0;
      var j = null;
      j = U.H, U.H = null, o();
      try {
        var K = {
          DetermineComponentFrameRoot: function() {
            try {
              if (m) {
                var Ee = function() {
                  throw Error();
                };
                if (Object.defineProperty(Ee.prototype, "props", {
                  set: function() {
                    throw Error();
                  }
                }), typeof Reflect == "object" && Reflect.construct) {
                  try {
                    Reflect.construct(Ee, []);
                  } catch (me) {
                    var ut = me;
                  }
                  Reflect.construct(a, [], Ee);
                } else {
                  try {
                    Ee.call();
                  } catch (me) {
                    ut = me;
                  }
                  a.call(Ee.prototype);
                }
              } else {
                try {
                  throw Error();
                } catch (me) {
                  ut = me;
                }
                (Ee = a()) && typeof Ee.catch == "function" && Ee.catch(function() {
                });
              }
            } catch (me) {
              if (me && ut && typeof me.stack == "string")
                return [me.stack, ut.stack];
            }
            return [null, null];
          }
        };
        K.DetermineComponentFrameRoot.displayName = "DetermineComponentFrameRoot";
        var q = Object.getOwnPropertyDescriptor(
          K.DetermineComponentFrameRoot,
          "name"
        );
        q && q.configurable && Object.defineProperty(
          K.DetermineComponentFrameRoot,
          "name",
          { value: "DetermineComponentFrameRoot" }
        );
        var P = K.DetermineComponentFrameRoot(), ye = P[0], We = P[1];
        if (ye && We) {
          var Q = ye.split(`
`), Te = We.split(`
`);
          for (P = q = 0; q < Q.length && !Q[q].includes(
            "DetermineComponentFrameRoot"
          ); )
            q++;
          for (; P < Te.length && !Te[P].includes(
            "DetermineComponentFrameRoot"
          ); )
            P++;
          if (q === Q.length || P === Te.length)
            for (q = Q.length - 1, P = Te.length - 1; 1 <= q && 0 <= P && Q[q] !== Te[P]; )
              P--;
          for (; 1 <= q && 0 <= P; q--, P--)
            if (Q[q] !== Te[P]) {
              if (q !== 1 || P !== 1)
                do
                  if (q--, P--, 0 > P || Q[q] !== Te[P]) {
                    var tt = `
` + Q[q].replace(
                      " at new ",
                      " at "
                    );
                    return a.displayName && tt.includes("<anonymous>") && (tt = tt.replace("<anonymous>", a.displayName)), typeof a == "function" && ue.set(a, tt), tt;
                  }
                while (1 <= q && 0 <= P);
              break;
            }
        }
      } finally {
        Z = !1, U.H = j, i(), Error.prepareStackTrace = b;
      }
      return Q = (Q = a ? a.displayName || a.name : "") ? s(Q) : "", typeof a == "function" && ue.set(a, Q), Q;
    }
    function u(a) {
      if (a == null) return "";
      if (typeof a == "function") {
        var m = a.prototype;
        return c(
          a,
          !(!m || !m.isReactComponent)
        );
      }
      if (typeof a == "string") return s(a);
      switch (a) {
        case _e:
          return s("Suspense");
        case fe:
          return s("SuspenseList");
      }
      if (typeof a == "object")
        switch (a.$$typeof) {
          case Se:
            return a = c(a.render, !1), a;
          case Pe:
            return u(a.type);
          case Oe:
            m = a._payload, a = a._init;
            try {
              return u(a(m));
            } catch {
            }
        }
      return "";
    }
    function l() {
      var a = U.A;
      return a === null ? null : a.getOwner();
    }
    function p(a) {
      if (se.call(a, "key")) {
        var m = Object.getOwnPropertyDescriptor(a, "key").get;
        if (m && m.isReactWarning) return !1;
      }
      return a.key !== void 0;
    }
    function y(a, m) {
      function b() {
        Be || (Be = !0, console.error(
          "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
          m
        ));
      }
      b.isReactWarning = !0, Object.defineProperty(a, "key", {
        get: b,
        configurable: !0
      });
    }
    function g() {
      var a = e(this.type);
      return Br[a] || (Br[a] = !0, console.error(
        "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
      )), a = this.props.ref, a !== void 0 ? a : null;
    }
    function v(a, m, b, j, K, q) {
      return b = q.ref, a = {
        $$typeof: E,
        type: a,
        key: m,
        props: q,
        _owner: K
      }, (b !== void 0 ? b : null) !== null ? Object.defineProperty(a, "ref", {
        enumerable: !1,
        get: g
      }) : Object.defineProperty(a, "ref", { enumerable: !1, value: null }), a._store = {}, Object.defineProperty(a._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: 0
      }), Object.defineProperty(a, "_debugInfo", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: null
      }), Object.freeze && (Object.freeze(a.props), Object.freeze(a)), a;
    }
    function R(a, m, b, j, K, q) {
      if (typeof a == "string" || typeof a == "function" || a === $ || a === F || a === S || a === _e || a === fe || a === Qe || typeof a == "object" && a !== null && (a.$$typeof === Oe || a.$$typeof === Pe || a.$$typeof === de || a.$$typeof === V || a.$$typeof === Se || a.$$typeof === X || a.getModuleId !== void 0)) {
        var P = m.children;
        if (P !== void 0)
          if (j)
            if (pe(P)) {
              for (j = 0; j < P.length; j++)
                T(P[j], a);
              Object.freeze && Object.freeze(P);
            } else
              console.error(
                "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
              );
          else T(P, a);
      } else
        P = "", (a === void 0 || typeof a == "object" && a !== null && Object.keys(a).length === 0) && (P += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports."), a === null ? j = "null" : pe(a) ? j = "array" : a !== void 0 && a.$$typeof === E ? (j = "<" + (e(a.type) || "Unknown") + " />", P = " Did you accidentally export a JSX literal instead of a component?") : j = typeof a, console.error(
          "React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s",
          j,
          P
        );
      if (se.call(m, "key")) {
        P = e(a);
        var ye = Object.keys(m).filter(function(Q) {
          return Q !== "key";
        });
        j = 0 < ye.length ? "{key: someKey, " + ye.join(": ..., ") + ": ...}" : "{key: someKey}", Wr[P + j] || (ye = 0 < ye.length ? "{" + ye.join(": ..., ") + ": ...}" : "{}", console.error(
          `A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,
          j,
          P,
          ye,
          P
        ), Wr[P + j] = !0);
      }
      if (P = null, b !== void 0 && (r(b), P = "" + b), p(m) && (r(m.key), P = "" + m.key), "key" in m) {
        b = {};
        for (var We in m)
          We !== "key" && (b[We] = m[We]);
      } else b = m;
      return P && y(
        b,
        typeof a == "function" ? a.displayName || a.name || "Unknown" : a
      ), v(a, P, q, K, l(), b);
    }
    function T(a, m) {
      if (typeof a == "object" && a && a.$$typeof !== et) {
        if (pe(a))
          for (var b = 0; b < a.length; b++) {
            var j = a[b];
            z(j) && I(j, m);
          }
        else if (z(a))
          a._store && (a._store.validated = 1);
        else if (a === null || typeof a != "object" ? b = null : (b = $e && a[$e] || a["@@iterator"], b = typeof b == "function" ? b : null), typeof b == "function" && b !== a.entries && (b = b.call(a), b !== a))
          for (; !(a = b.next()).done; )
            z(a.value) && I(a.value, m);
      }
    }
    function z(a) {
      return typeof a == "object" && a !== null && a.$$typeof === E;
    }
    function I(a, m) {
      if (a._store && !a._store.validated && a.key == null && (a._store.validated = 1, m = w(m), !Fr[m])) {
        Fr[m] = !0;
        var b = "";
        a && a._owner != null && a._owner !== l() && (b = null, typeof a._owner.tag == "number" ? b = e(a._owner.type) : typeof a._owner.name == "string" && (b = a._owner.name), b = " It was passed a child from " + b + ".");
        var j = U.getCurrentStack;
        U.getCurrentStack = function() {
          var K = u(a.type);
          return j && (K += j() || ""), K;
        }, console.error(
          'Each child in a list should have a unique "key" prop.%s%s See https://react.dev/link/warning-keys for more information.',
          m,
          b
        ), U.getCurrentStack = j;
      }
    }
    function w(a) {
      var m = "", b = l();
      return b && (b = e(b.type)) && (m = `

Check the render method of \`` + b + "`."), m || (a = e(a)) && (m = `

Check the top-level render call using <` + a + ">."), m;
    }
    var _ = B, E = Symbol.for("react.transitional.element"), C = Symbol.for("react.portal"), $ = Symbol.for("react.fragment"), S = Symbol.for("react.strict_mode"), F = Symbol.for("react.profiler"), V = Symbol.for("react.consumer"), de = Symbol.for("react.context"), Se = Symbol.for("react.forward_ref"), _e = Symbol.for("react.suspense"), fe = Symbol.for("react.suspense_list"), Pe = Symbol.for("react.memo"), Oe = Symbol.for("react.lazy"), Qe = Symbol.for("react.offscreen"), $e = Symbol.iterator, Ae = Symbol.for("react.client.reference"), U = _.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, se = Object.prototype.hasOwnProperty, J = Object.assign, X = Symbol.for("react.client.reference"), pe = Array.isArray, oe = 0, he, ce, ge, ie, d, f, h;
    n.__reactDisabledLog = !0;
    var k, L, Z = !1, ue = new (typeof WeakMap == "function" ? WeakMap : Map)(), et = Symbol.for("react.client.reference"), Be, Br = {}, Wr = {}, Fr = {};
    nt.Fragment = $, nt.jsx = function(a, m, b, j, K) {
      return R(a, m, b, !1, j, K);
    }, nt.jsxs = function(a, m, b, j, K) {
      return R(a, m, b, !0, j, K);
    };
  }()), nt;
}
var Vr;
function qo() {
  return Vr || (Vr = 1, process.env.NODE_ENV === "production" ? lt.exports = Mo() : lt.exports = zo()), lt.exports;
}
var x = qo(), dt = { exports: {} }, Vt = {}, Xt = {}, Xr;
function Ho() {
  if (Xr) return Xt;
  Xr = 1;
  function e(t) {
    return t && t.__esModule ? t : { default: t };
  }
  return Xt._ = e, Xt;
}
var Kr;
function Bo() {
  return Kr || (Kr = 1, function(e) {
    "use client";
    Object.defineProperty(e, "__esModule", {
      value: !0
    });
    function t(l, p) {
      for (var y in p) Object.defineProperty(l, y, {
        enumerable: !0,
        get: p[y]
      });
    }
    t(e, {
      AppRouterContext: function() {
        return o;
      },
      GlobalLayoutRouterContext: function() {
        return s;
      },
      LayoutRouterContext: function() {
        return i;
      },
      MissingSlotContext: function() {
        return u;
      },
      TemplateContext: function() {
        return c;
      }
    });
    const n = /* @__PURE__ */ (/* @__PURE__ */ Ho())._(B), o = n.default.createContext(null), i = n.default.createContext(null), s = n.default.createContext(null), c = n.default.createContext(null);
    process.env.NODE_ENV !== "production" && (o.displayName = "AppRouterContext", i.displayName = "LayoutRouterContext", s.displayName = "GlobalLayoutRouterContext", c.displayName = "TemplateContext");
    const u = n.default.createContext(/* @__PURE__ */ new Set());
  }(Vt)), Vt;
}
var Kt = {}, Jr;
function Wo() {
  return Jr || (Jr = 1, function(e) {
    "use client";
    Object.defineProperty(e, "__esModule", {
      value: !0
    });
    function t(s, c) {
      for (var u in c) Object.defineProperty(s, u, {
        enumerable: !0,
        get: c[u]
      });
    }
    t(e, {
      PathParamsContext: function() {
        return i;
      },
      PathnameContext: function() {
        return o;
      },
      SearchParamsContext: function() {
        return n;
      }
    });
    const r = B, n = (0, r.createContext)(null), o = (0, r.createContext)(null), i = (0, r.createContext)(null);
    process.env.NODE_ENV !== "production" && (n.displayName = "SearchParamsContext", o.displayName = "PathnameContext", i.displayName = "PathParamsContext");
  }(Kt)), Kt;
}
var ft = { exports: {} }, Zr;
function Fo() {
  return Zr || (Zr = 1, function(e, t) {
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
  }(ft, ft.exports)), ft.exports;
}
var Jt = {}, Qr;
function Uo() {
  return Qr || (Qr = 1, function(e) {
    Object.defineProperty(e, "__esModule", {
      value: !0
    });
    function t(c, u) {
      for (var l in u) Object.defineProperty(c, l, {
        enumerable: !0,
        get: u[l]
      });
    }
    t(e, {
      DEFAULT_SEGMENT_KEY: function() {
        return s;
      },
      PAGE_SEGMENT_KEY: function() {
        return i;
      },
      addSearchParamsIfPageSegment: function() {
        return o;
      },
      isGroupSegment: function() {
        return r;
      },
      isParallelRouteSegment: function() {
        return n;
      }
    });
    function r(c) {
      return c[0] === "(" && c.endsWith(")");
    }
    function n(c) {
      return c.startsWith("@") && c !== "@children";
    }
    function o(c, u) {
      if (c.includes(i)) {
        const p = JSON.stringify(u);
        return p !== "{}" ? i + "?" + p : i;
      }
      return c;
    }
    const i = "__PAGE__", s = "__DEFAULT__";
  }(Jt)), Jt;
}
var pt = { exports: {} }, ht = { exports: {} }, Zt = {}, Qt = {}, er = {}, en;
function Or() {
  return en || (en = 1, function(e) {
    Object.defineProperty(e, "__esModule", {
      value: !0
    });
    function t(u, l) {
      for (var p in l) Object.defineProperty(u, p, {
        enumerable: !0,
        get: l[p]
      });
    }
    t(e, {
      bindSnapshot: function() {
        return s;
      },
      createAsyncLocalStorage: function() {
        return i;
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
      static bind(l) {
        return l;
      }
    }
    const o = typeof globalThis < "u" && globalThis.AsyncLocalStorage;
    function i() {
      return o ? new o() : new n();
    }
    function s(u) {
      return o ? o.bind(u) : n.bind(u);
    }
    function c() {
      return o ? o.snapshot() : function(u, ...l) {
        return u(...l);
      };
    }
  }(er)), er;
}
var tn;
function Go() {
  return tn || (tn = 1, function(e) {
    Object.defineProperty(e, "__esModule", {
      value: !0
    }), Object.defineProperty(e, "actionAsyncStorageInstance", {
      enumerable: !0,
      get: function() {
        return r;
      }
    });
    const r = (0, Or().createAsyncLocalStorage)();
  }(Qt)), Qt;
}
var rn;
function Yo() {
  return rn || (rn = 1, function(e) {
    Object.defineProperty(e, "__esModule", {
      value: !0
    }), Object.defineProperty(e, "actionAsyncStorage", {
      enumerable: !0,
      get: function() {
        return t.actionAsyncStorageInstance;
      }
    });
    const t = Go();
  }(Zt)), Zt;
}
var gt = { exports: {} }, nn;
function Kn() {
  return nn || (nn = 1, function(e, t) {
    Object.defineProperty(t, "__esModule", {
      value: !0
    }), Object.defineProperty(t, "RedirectStatusCode", {
      enumerable: !0,
      get: function() {
        return r;
      }
    });
    var r = /* @__PURE__ */ function(n) {
      return n[n.SeeOther = 303] = "SeeOther", n[n.TemporaryRedirect = 307] = "TemporaryRedirect", n[n.PermanentRedirect = 308] = "PermanentRedirect", n;
    }({});
    (typeof t.default == "function" || typeof t.default == "object" && t.default !== null) && typeof t.default.__esModule > "u" && (Object.defineProperty(t.default, "__esModule", { value: !0 }), Object.assign(t.default, t), e.exports = t.default);
  }(gt, gt.exports)), gt.exports;
}
var yt = { exports: {} }, on;
function Ar() {
  return on || (on = 1, function(e, t) {
    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    function r(c, u) {
      for (var l in u) Object.defineProperty(c, l, {
        enumerable: !0,
        get: u[l]
      });
    }
    r(t, {
      REDIRECT_ERROR_CODE: function() {
        return o;
      },
      RedirectType: function() {
        return i;
      },
      isRedirectError: function() {
        return s;
      }
    });
    const n = Kn(), o = "NEXT_REDIRECT";
    var i = /* @__PURE__ */ function(c) {
      return c.push = "push", c.replace = "replace", c;
    }({});
    function s(c) {
      if (typeof c != "object" || c === null || !("digest" in c) || typeof c.digest != "string")
        return !1;
      const u = c.digest.split(";"), [l, p] = u, y = u.slice(2, -2).join(";"), g = u.at(-2), v = Number(g);
      return l === o && (p === "replace" || p === "push") && typeof y == "string" && !isNaN(v) && v in n.RedirectStatusCode;
    }
    (typeof t.default == "function" || typeof t.default == "object" && t.default !== null) && typeof t.default.__esModule > "u" && (Object.defineProperty(t.default, "__esModule", { value: !0 }), Object.assign(t.default, t), e.exports = t.default);
  }(yt, yt.exports)), yt.exports;
}
var an;
function Vo() {
  return an || (an = 1, function(e, t) {
    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    function r(g, v) {
      for (var R in v) Object.defineProperty(g, R, {
        enumerable: !0,
        get: v[R]
      });
    }
    r(t, {
      getRedirectError: function() {
        return s;
      },
      getRedirectStatusCodeFromError: function() {
        return y;
      },
      getRedirectTypeFromError: function() {
        return p;
      },
      getURLFromRedirectError: function() {
        return l;
      },
      permanentRedirect: function() {
        return u;
      },
      redirect: function() {
        return c;
      }
    });
    const n = Yo(), o = Kn(), i = Ar();
    function s(g, v, R) {
      R === void 0 && (R = o.RedirectStatusCode.TemporaryRedirect);
      const T = new Error(i.REDIRECT_ERROR_CODE);
      return T.digest = i.REDIRECT_ERROR_CODE + ";" + v + ";" + g + ";" + R + ";", T;
    }
    function c(g, v) {
      const R = n.actionAsyncStorage.getStore(), T = v || (R != null && R.isAction ? i.RedirectType.push : i.RedirectType.replace);
      throw s(g, T, o.RedirectStatusCode.TemporaryRedirect);
    }
    function u(g, v) {
      throw v === void 0 && (v = i.RedirectType.replace), s(g, v, o.RedirectStatusCode.PermanentRedirect);
    }
    function l(g) {
      return (0, i.isRedirectError)(g) ? g.digest.split(";").slice(2, -2).join(";") : null;
    }
    function p(g) {
      if (!(0, i.isRedirectError)(g))
        throw new Error("Not a redirect error");
      return g.digest.split(";", 2)[1];
    }
    function y(g) {
      if (!(0, i.isRedirectError)(g))
        throw new Error("Not a redirect error");
      return Number(g.digest.split(";").at(-2));
    }
    (typeof t.default == "function" || typeof t.default == "object" && t.default !== null) && typeof t.default.__esModule > "u" && (Object.defineProperty(t.default, "__esModule", { value: !0 }), Object.assign(t.default, t), e.exports = t.default);
  }(ht, ht.exports)), ht.exports;
}
var mt = { exports: {} }, bt = { exports: {} }, sn;
function Bt() {
  return sn || (sn = 1, function(e, t) {
    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    function r(l, p) {
      for (var y in p) Object.defineProperty(l, y, {
        enumerable: !0,
        get: p[y]
      });
    }
    r(t, {
      HTTPAccessErrorStatus: function() {
        return n;
      },
      HTTP_ERROR_FALLBACK_ERROR_CODE: function() {
        return i;
      },
      getAccessFallbackErrorTypeByStatus: function() {
        return u;
      },
      getAccessFallbackHTTPStatus: function() {
        return c;
      },
      isHTTPAccessFallbackError: function() {
        return s;
      }
    });
    const n = {
      NOT_FOUND: 404,
      FORBIDDEN: 403,
      UNAUTHORIZED: 401
    }, o = new Set(Object.values(n)), i = "NEXT_HTTP_ERROR_FALLBACK";
    function s(l) {
      if (typeof l != "object" || l === null || !("digest" in l) || typeof l.digest != "string")
        return !1;
      const [p, y] = l.digest.split(";");
      return p === i && o.has(Number(y));
    }
    function c(l) {
      const p = l.digest.split(";")[1];
      return Number(p);
    }
    function u(l) {
      switch (l) {
        case 401:
          return "unauthorized";
        case 403:
          return "forbidden";
        case 404:
          return "not-found";
        default:
          return;
      }
    }
    (typeof t.default == "function" || typeof t.default == "object" && t.default !== null) && typeof t.default.__esModule > "u" && (Object.defineProperty(t.default, "__esModule", { value: !0 }), Object.assign(t.default, t), e.exports = t.default);
  }(bt, bt.exports)), bt.exports;
}
var cn;
function Xo() {
  return cn || (cn = 1, function(e, t) {
    Object.defineProperty(t, "__esModule", {
      value: !0
    }), Object.defineProperty(t, "notFound", {
      enumerable: !0,
      get: function() {
        return o;
      }
    });
    const n = "" + Bt().HTTP_ERROR_FALLBACK_ERROR_CODE + ";404";
    function o() {
      const i = new Error(n);
      throw i.digest = n, i;
    }
    (typeof t.default == "function" || typeof t.default == "object" && t.default !== null) && typeof t.default.__esModule > "u" && (Object.defineProperty(t.default, "__esModule", { value: !0 }), Object.assign(t.default, t), e.exports = t.default);
  }(mt, mt.exports)), mt.exports;
}
var xt = { exports: {} }, un;
function Ko() {
  return un || (un = 1, function(e, t) {
    Object.defineProperty(t, "__esModule", {
      value: !0
    }), Object.defineProperty(t, "forbidden", {
      enumerable: !0,
      get: function() {
        return o;
      }
    });
    const n = "" + Bt().HTTP_ERROR_FALLBACK_ERROR_CODE + ";403";
    function o() {
      if (!process.env.__NEXT_EXPERIMENTAL_AUTH_INTERRUPTS)
        throw new Error("`forbidden()` is experimental and only allowed to be enabled when `experimental.authInterrupts` is enabled.");
      const i = new Error(n);
      throw i.digest = n, i;
    }
    (typeof t.default == "function" || typeof t.default == "object" && t.default !== null) && typeof t.default.__esModule > "u" && (Object.defineProperty(t.default, "__esModule", { value: !0 }), Object.assign(t.default, t), e.exports = t.default);
  }(xt, xt.exports)), xt.exports;
}
var vt = { exports: {} }, ln;
function Jo() {
  return ln || (ln = 1, function(e, t) {
    Object.defineProperty(t, "__esModule", {
      value: !0
    }), Object.defineProperty(t, "unauthorized", {
      enumerable: !0,
      get: function() {
        return o;
      }
    });
    const n = "" + Bt().HTTP_ERROR_FALLBACK_ERROR_CODE + ";401";
    function o() {
      if (!process.env.__NEXT_EXPERIMENTAL_AUTH_INTERRUPTS)
        throw new Error("`unauthorized()` is experimental and only allowed to be used when `experimental.authInterrupts` is enabled.");
      const i = new Error(n);
      throw i.digest = n, i;
    }
    (typeof t.default == "function" || typeof t.default == "object" && t.default !== null) && typeof t.default.__esModule > "u" && (Object.defineProperty(t.default, "__esModule", { value: !0 }), Object.assign(t.default, t), e.exports = t.default);
  }(vt, vt.exports)), vt.exports;
}
var wt = { exports: {} }, tr = {}, St = { exports: {} }, dn;
function Jn() {
  return dn || (dn = 1, function(e, t) {
    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    function r(s, c) {
      for (var u in c) Object.defineProperty(s, u, {
        enumerable: !0,
        get: c[u]
      });
    }
    r(t, {
      DynamicServerError: function() {
        return o;
      },
      isDynamicServerError: function() {
        return i;
      }
    });
    const n = "DYNAMIC_SERVER_USAGE";
    class o extends Error {
      constructor(c) {
        super("Dynamic server usage: " + c), this.description = c, this.digest = n;
      }
    }
    function i(s) {
      return typeof s != "object" || s === null || !("digest" in s) || typeof s.digest != "string" ? !1 : s.digest === n;
    }
    (typeof t.default == "function" || typeof t.default == "object" && t.default !== null) && typeof t.default.__esModule > "u" && (Object.defineProperty(t.default, "__esModule", { value: !0 }), Object.assign(t.default, t), e.exports = t.default);
  }(St, St.exports)), St.exports;
}
var rr = {}, fn;
function Tr() {
  return fn || (fn = 1, function(e) {
    Object.defineProperty(e, "__esModule", {
      value: !0
    });
    function t(i, s) {
      for (var c in s) Object.defineProperty(i, c, {
        enumerable: !0,
        get: s[c]
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
      constructor(s) {
        super("Bail out to client-side rendering: " + s), this.reason = s, this.digest = r;
      }
    }
    function o(i) {
      return typeof i != "object" || i === null || !("digest" in i) ? !1 : i.digest === r;
    }
  }(rr)), rr;
}
var _t = { exports: {} }, pn;
function Zn() {
  return pn || (pn = 1, function(e, t) {
    Object.defineProperty(t, "__esModule", {
      value: !0
    }), Object.defineProperty(t, "isNextRouterError", {
      enumerable: !0,
      get: function() {
        return o;
      }
    });
    const r = Bt(), n = Ar();
    function o(i) {
      return (0, n.isRedirectError)(i) || (0, r.isHTTPAccessFallbackError)(i);
    }
    (typeof t.default == "function" || typeof t.default == "object" && t.default !== null) && typeof t.default.__esModule > "u" && (Object.defineProperty(t.default, "__esModule", { value: !0 }), Object.assign(t.default, t), e.exports = t.default);
  }(_t, _t.exports)), _t.exports;
}
var nr = {}, $t = { exports: {} }, hn;
function Zo() {
  return hn || (hn = 1, function(e, t) {
    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    function r(s, c) {
      for (var u in c) Object.defineProperty(s, u, {
        enumerable: !0,
        get: c[u]
      });
    }
    r(t, {
      StaticGenBailoutError: function() {
        return o;
      },
      isStaticGenBailoutError: function() {
        return i;
      }
    });
    const n = "NEXT_STATIC_GEN_BAILOUT";
    class o extends Error {
      constructor(...c) {
        super(...c), this.code = n;
      }
    }
    function i(s) {
      return typeof s != "object" || s === null || !("code" in s) ? !1 : s.code === n;
    }
    (typeof t.default == "function" || typeof t.default == "object" && t.default !== null) && typeof t.default.__esModule > "u" && (Object.defineProperty(t.default, "__esModule", { value: !0 }), Object.assign(t.default, t), e.exports = t.default);
  }($t, $t.exports)), $t.exports;
}
var or = {}, ir = {}, gn;
function Qo() {
  return gn || (gn = 1, function(e) {
    Object.defineProperty(e, "__esModule", {
      value: !0
    }), Object.defineProperty(e, "workUnitAsyncStorageInstance", {
      enumerable: !0,
      get: function() {
        return r;
      }
    });
    const r = (0, Or().createAsyncLocalStorage)();
  }(ir)), ir;
}
var yn;
function ei() {
  return yn || (yn = 1, function(e) {
    Object.defineProperty(e, "__esModule", {
      value: !0
    });
    function t(s, c) {
      for (var u in c) Object.defineProperty(s, u, {
        enumerable: !0,
        get: c[u]
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
        return i;
      },
      workUnitAsyncStorage: function() {
        return r.workUnitAsyncStorageInstance;
      }
    });
    const r = Qo();
    function n(s) {
      const c = r.workUnitAsyncStorageInstance.getStore();
      if (c) {
        if (c.type === "request")
          return c;
        if (c.type === "prerender" || c.type === "prerender-ppr" || c.type === "prerender-legacy")
          throw new Error(`\`${s}\` cannot be called inside a prerender. This is a bug in Next.js.`);
        if (c.type === "cache")
          throw new Error(`\`${s}\` cannot be called inside "use cache". Call it outside and pass an argument instead. Read more: https://nextjs.org/docs/messages/next-request-in-use-cache`);
        if (c.type === "unstable-cache")
          throw new Error(`\`${s}\` cannot be called inside unstable_cache. Call it outside and pass an argument instead. Read more: https://nextjs.org/docs/app/api-reference/functions/unstable_cache`);
      }
      throw new Error(`\`${s}\` was called outside a request scope. Read more: https://nextjs.org/docs/messages/next-dynamic-api-wrong-context`);
    }
    function o(s) {
      return s.type === "prerender" || s.type === "prerender-ppr" ? s.prerenderResumeDataCache : null;
    }
    function i(s) {
      return s.type !== "prerender-legacy" && s.type !== "cache" && s.type !== "unstable-cache" ? s.type === "request" ? s.renderResumeDataCache : s.prerenderResumeDataCache : null;
    }
  }(or)), or;
}
var ar = {}, sr = {}, mn;
function ti() {
  return mn || (mn = 1, function(e) {
    Object.defineProperty(e, "__esModule", {
      value: !0
    }), Object.defineProperty(e, "workAsyncStorageInstance", {
      enumerable: !0,
      get: function() {
        return r;
      }
    });
    const r = (0, Or().createAsyncLocalStorage)();
  }(sr)), sr;
}
var bn;
function Qn() {
  return bn || (bn = 1, function(e) {
    Object.defineProperty(e, "__esModule", {
      value: !0
    }), Object.defineProperty(e, "workAsyncStorage", {
      enumerable: !0,
      get: function() {
        return t.workAsyncStorageInstance;
      }
    });
    const t = ti();
  }(ar)), ar;
}
var cr = {}, xn;
function ri() {
  return xn || (xn = 1, function(e) {
    Object.defineProperty(e, "__esModule", {
      value: !0
    }), Object.defineProperty(e, "makeHangingPromise", {
      enumerable: !0,
      get: function() {
        return t;
      }
    });
    function t(n, o) {
      const i = new Promise((s, c) => {
        n.addEventListener("abort", () => {
          c(new Error(`During prerendering, ${o} rejects when the prerender is complete. Typically these errors are handled by React but if you move ${o} to a different context by using \`setTimeout\`, \`after\`, or similar functions you may observe this error and you should handle it in that context.`));
        }, {
          once: !0
        });
      });
      return i.catch(r), i;
    }
    function r() {
    }
  }(cr)), cr;
}
var ur = {}, vn;
function ni() {
  return vn || (vn = 1, function(e) {
    Object.defineProperty(e, "__esModule", {
      value: !0
    });
    function t(i, s) {
      for (var c in s) Object.defineProperty(i, c, {
        enumerable: !0,
        get: s[c]
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
  }(ur)), ur;
}
var wn;
function eo() {
  return wn || (wn = 1, function(e) {
    Object.defineProperty(e, "__esModule", {
      value: !0
    });
    function t(d, f) {
      for (var h in f) Object.defineProperty(d, h, {
        enumerable: !0,
        get: f[h]
      });
    }
    t(e, {
      Postpone: function() {
        return S;
      },
      abortAndThrowOnSynchronousRequestDataAccess: function() {
        return C;
      },
      abortOnSynchronousPlatformIOAccess: function() {
        return _;
      },
      accessedDynamicData: function() {
        return Oe;
      },
      annotateDynamicAccess: function() {
        return se;
      },
      consumeDynamicAccess: function() {
        return Qe;
      },
      createDynamicTrackingState: function() {
        return y;
      },
      createDynamicValidationState: function() {
        return g;
      },
      createPostponedAbortSignal: function() {
        return U;
      },
      formatDynamicAPIAccesses: function() {
        return $e;
      },
      getFirstDynamicReason: function() {
        return v;
      },
      isDynamicPostpone: function() {
        return de;
      },
      isPrerenderInterruptedError: function() {
        return Pe;
      },
      markCurrentScopeAsDynamic: function() {
        return R;
      },
      postponeWithTracking: function() {
        return F;
      },
      throwIfDisallowedDynamic: function() {
        return ie;
      },
      throwToInterruptStaticGeneration: function() {
        return z;
      },
      trackAllowedDynamicAccess: function() {
        return ce;
      },
      trackDynamicDataInDynamicRender: function() {
        return I;
      },
      trackFallbackParamAccessed: function() {
        return T;
      },
      trackSynchronousPlatformIOAccessInDev: function() {
        return E;
      },
      trackSynchronousRequestDataAccessInDev: function() {
        return $;
      },
      useDynamicRouteParams: function() {
        return J;
      }
    });
    const r = /* @__PURE__ */ l(B), n = Jn(), o = Zo(), i = ei(), s = Qn(), c = ri(), u = ni();
    function l(d) {
      return d && d.__esModule ? d : {
        default: d
      };
    }
    const p = typeof r.default.unstable_postpone == "function";
    function y(d) {
      return {
        isDebugDynamicAccesses: d,
        dynamicAccesses: [],
        syncDynamicExpression: void 0,
        syncDynamicErrorWithStack: null
      };
    }
    function g() {
      return {
        hasSuspendedDynamic: !1,
        hasDynamicMetadata: !1,
        hasDynamicViewport: !1,
        hasSyncDynamicErrors: !1,
        dynamicErrors: []
      };
    }
    function v(d) {
      var f;
      return (f = d.dynamicAccesses[0]) == null ? void 0 : f.expression;
    }
    function R(d, f, h) {
      if (!(f && (f.type === "cache" || f.type === "unstable-cache")) && !(d.forceDynamic || d.forceStatic)) {
        if (d.dynamicShouldError)
          throw new o.StaticGenBailoutError(`Route ${d.route} with \`dynamic = "error"\` couldn't be rendered statically because it used \`${h}\`. See more info here: https://nextjs.org/docs/app/building-your-application/rendering/static-and-dynamic#dynamic-rendering`);
        if (f)
          if (f.type === "prerender-ppr")
            F(d.route, h, f.dynamicTracking);
          else if (f.type === "prerender-legacy") {
            f.revalidate = 0;
            const k = new n.DynamicServerError(`Route ${d.route} couldn't be rendered statically because it used ${h}. See more info here: https://nextjs.org/docs/messages/dynamic-server-error`);
            throw d.dynamicUsageDescription = h, d.dynamicUsageStack = k.stack, k;
          } else process.env.NODE_ENV === "development" && f && f.type === "request" && (f.usedDynamic = !0);
      }
    }
    function T(d, f) {
      const h = i.workUnitAsyncStorage.getStore();
      !h || h.type !== "prerender-ppr" || F(d.route, f, h.dynamicTracking);
    }
    function z(d, f, h) {
      const k = new n.DynamicServerError(`Route ${f.route} couldn't be rendered statically because it used \`${d}\`. See more info here: https://nextjs.org/docs/messages/dynamic-server-error`);
      throw h.revalidate = 0, f.dynamicUsageDescription = d, f.dynamicUsageStack = k.stack, k;
    }
    function I(d, f) {
      if (f) {
        if (f.type === "cache" || f.type === "unstable-cache")
          return;
        (f.type === "prerender" || f.type === "prerender-legacy") && (f.revalidate = 0), process.env.NODE_ENV === "development" && f.type === "request" && (f.usedDynamic = !0);
      }
    }
    function w(d, f, h) {
      const k = `Route ${d} needs to bail out of prerendering at this point because it used ${f}.`, L = fe(k);
      h.controller.abort(L);
      const Z = h.dynamicTracking;
      Z && Z.dynamicAccesses.push({
        // When we aren't debugging, we don't need to create another error for the
        // stack trace.
        stack: Z.isDebugDynamicAccesses ? new Error().stack : void 0,
        expression: f
      });
    }
    function _(d, f, h, k) {
      const L = k.dynamicTracking;
      return L && L.syncDynamicErrorWithStack === null && (L.syncDynamicExpression = f, L.syncDynamicErrorWithStack = h), w(d, f, k);
    }
    function E(d) {
      d.prerenderPhase = !1;
    }
    function C(d, f, h, k) {
      const L = k.dynamicTracking;
      throw L && L.syncDynamicErrorWithStack === null && (L.syncDynamicExpression = f, L.syncDynamicErrorWithStack = h, k.validating === !0 && (L.syncDynamicLogged = !0)), w(d, f, k), fe(`Route ${d} needs to bail out of prerendering at this point because it used ${f}.`);
    }
    const $ = E;
    function S({ reason: d, route: f }) {
      const h = i.workUnitAsyncStorage.getStore(), k = h && h.type === "prerender-ppr" ? h.dynamicTracking : null;
      F(f, d, k);
    }
    function F(d, f, h) {
      Ae(), h && h.dynamicAccesses.push({
        // When we aren't debugging, we don't need to create another error for the
        // stack trace.
        stack: h.isDebugDynamicAccesses ? new Error().stack : void 0,
        expression: f
      }), r.default.unstable_postpone(V(d, f));
    }
    function V(d, f) {
      return `Route ${d} needs to bail out of prerendering at this point because it used ${f}. React throws this special object to indicate where. It should not be caught by your own try/catch. Learn more: https://nextjs.org/docs/messages/ppr-caught-error`;
    }
    function de(d) {
      return typeof d == "object" && d !== null && typeof d.message == "string" ? Se(d.message) : !1;
    }
    function Se(d) {
      return d.includes("needs to bail out of prerendering at this point because it used") && d.includes("Learn more: https://nextjs.org/docs/messages/ppr-caught-error");
    }
    if (Se(V("%%%", "^^^")) === !1)
      throw new Error("Invariant: isDynamicPostpone misidentified a postpone reason. This is a bug in Next.js");
    const _e = "NEXT_PRERENDER_INTERRUPTED";
    function fe(d) {
      const f = new Error(d);
      return f.digest = _e, f;
    }
    function Pe(d) {
      return typeof d == "object" && d !== null && d.digest === _e && "name" in d && "message" in d && d instanceof Error;
    }
    function Oe(d) {
      return d.length > 0;
    }
    function Qe(d, f) {
      return d.dynamicAccesses.push(...f.dynamicAccesses), d.dynamicAccesses;
    }
    function $e(d) {
      return d.filter((f) => typeof f.stack == "string" && f.stack.length > 0).map(({ expression: f, stack: h }) => (h = h.split(`
`).slice(4).filter((k) => !(k.includes("node_modules/next/") || k.includes(" (<anonymous>)") || k.includes(" (node:"))).join(`
`), `Dynamic API Usage Debug - ${f}:
${h}`));
    }
    function Ae() {
      if (!p)
        throw new Error("Invariant: React.unstable_postpone is not defined. This suggests the wrong version of React was loaded. This is a bug in Next.js");
    }
    function U(d) {
      Ae();
      const f = new AbortController();
      try {
        r.default.unstable_postpone(d);
      } catch (h) {
        f.abort(h);
      }
      return f.signal;
    }
    function se(d, f) {
      const h = f.dynamicTracking;
      h && h.dynamicAccesses.push({
        stack: h.isDebugDynamicAccesses ? new Error().stack : void 0,
        expression: d
      });
    }
    function J(d) {
      if (typeof window > "u") {
        const f = s.workAsyncStorage.getStore();
        if (f && f.isStaticGeneration && f.fallbackRouteParams && f.fallbackRouteParams.size > 0) {
          const h = i.workUnitAsyncStorage.getStore();
          h && (h.type === "prerender" ? r.default.use((0, c.makeHangingPromise)(h.renderSignal, d)) : h.type === "prerender-ppr" ? F(f.route, d, h.dynamicTracking) : h.type === "prerender-legacy" && z(d, f, h));
        }
      }
    }
    const X = /\n\s+at Suspense \(<anonymous>\)/, pe = new RegExp(`\\n\\s+at ${u.METADATA_BOUNDARY_NAME}[\\n\\s]`), oe = new RegExp(`\\n\\s+at ${u.VIEWPORT_BOUNDARY_NAME}[\\n\\s]`), he = new RegExp(`\\n\\s+at ${u.OUTLET_BOUNDARY_NAME}[\\n\\s]`);
    function ce(d, f, h, k, L) {
      if (!he.test(f))
        if (pe.test(f)) {
          h.hasDynamicMetadata = !0;
          return;
        } else if (oe.test(f)) {
          h.hasDynamicViewport = !0;
          return;
        } else if (X.test(f)) {
          h.hasSuspendedDynamic = !0;
          return;
        } else if (k.syncDynamicErrorWithStack || L.syncDynamicErrorWithStack) {
          h.hasSyncDynamicErrors = !0;
          return;
        } else {
          const Z = `Route "${d}": A component accessed data, headers, params, searchParams, or a short-lived cache without a Suspense boundary nor a "use cache" above it. We don't have the exact line number added to error messages yet but you can see which component in the stack below. See more info: https://nextjs.org/docs/messages/next-prerender-missing-suspense`, ue = ge(Z, f);
          h.dynamicErrors.push(ue);
          return;
        }
    }
    function ge(d, f) {
      const h = new Error(d);
      return h.stack = "Error: " + d + f, h;
    }
    function ie(d, f, h, k) {
      let L, Z, ue;
      if (h.syncDynamicErrorWithStack ? (L = h.syncDynamicErrorWithStack, Z = h.syncDynamicExpression, ue = h.syncDynamicLogged === !0) : k.syncDynamicErrorWithStack ? (L = k.syncDynamicErrorWithStack, Z = k.syncDynamicExpression, ue = k.syncDynamicLogged === !0) : (L = null, Z = void 0, ue = !1), f.hasSyncDynamicErrors && L)
        throw ue || console.error(L), new o.StaticGenBailoutError();
      const et = f.dynamicErrors;
      if (et.length) {
        for (let Be = 0; Be < et.length; Be++)
          console.error(et[Be]);
        throw new o.StaticGenBailoutError();
      }
      if (!f.hasSuspendedDynamic) {
        if (f.hasDynamicMetadata)
          throw L ? (console.error(L), new o.StaticGenBailoutError(`Route "${d}" has a \`generateMetadata\` that could not finish rendering before ${Z} was used. Follow the instructions in the error for this expression to resolve.`)) : new o.StaticGenBailoutError(`Route "${d}" has a \`generateMetadata\` that depends on Request data (\`cookies()\`, etc...) or external data (\`fetch(...)\`, etc...) but the rest of the route was static or only used cached data (\`"use cache"\`). If you expected this route to be prerenderable update your \`generateMetadata\` to not use Request data and only use cached external data. Otherwise, add \`await connection()\` somewhere within this route to indicate explicitly it should not be prerendered.`);
        if (f.hasDynamicViewport)
          throw L ? (console.error(L), new o.StaticGenBailoutError(`Route "${d}" has a \`generateViewport\` that could not finish rendering before ${Z} was used. Follow the instructions in the error for this expression to resolve.`)) : new o.StaticGenBailoutError(`Route "${d}" has a \`generateViewport\` that depends on Request data (\`cookies()\`, etc...) or external data (\`fetch(...)\`, etc...) but the rest of the route was static or only used cached data (\`"use cache"\`). If you expected this route to be prerenderable update your \`generateViewport\` to not use Request data and only use cached external data. Otherwise, add \`await connection()\` somewhere within this route to indicate explicitly it should not be prerendered.`);
      }
    }
  }(nr)), nr;
}
var Sn;
function oi() {
  return Sn || (Sn = 1, function(e) {
    Object.defineProperty(e, "__esModule", {
      value: !0
    }), Object.defineProperty(e, "isDynamicUsageError", {
      enumerable: !0,
      get: function() {
        return i;
      }
    });
    const t = Jn(), r = Tr(), n = Zn(), o = eo(), i = (s) => (0, t.isDynamicServerError)(s) || (0, r.isBailoutToCSRError)(s) || (0, n.isNextRouterError)(s) || (0, o.isDynamicPostpone)(s);
  }(tr)), tr;
}
var lr = {}, _n;
function ii() {
  return _n || (_n = 1, function(e) {
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
  }(lr)), lr;
}
var $n;
function ai() {
  return $n || ($n = 1, function(e, t) {
    Object.defineProperty(t, "__esModule", {
      value: !0
    }), Object.defineProperty(t, "unstable_rethrow", {
      enumerable: !0,
      get: function() {
        return s;
      }
    });
    const r = oi(), n = ii(), o = Tr(), i = Zn();
    function s(c) {
      if ((0, i.isNextRouterError)(c) || (0, o.isBailoutToCSRError)(c) || (0, r.isDynamicUsageError)(c) || (0, n.isPostpone)(c))
        throw c;
      c instanceof Error && "cause" in c && s(c.cause);
    }
    (typeof t.default == "function" || typeof t.default == "object" && t.default !== null) && typeof t.default.__esModule > "u" && (Object.defineProperty(t.default, "__esModule", { value: !0 }), Object.assign(t.default, t), e.exports = t.default);
  }(wt, wt.exports)), wt.exports;
}
var En;
function si() {
  return En || (En = 1, function(e, t) {
    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    function r(y, g) {
      for (var v in g) Object.defineProperty(y, v, {
        enumerable: !0,
        get: g[v]
      });
    }
    r(t, {
      ReadonlyURLSearchParams: function() {
        return p;
      },
      RedirectType: function() {
        return o.RedirectType;
      },
      forbidden: function() {
        return s.forbidden;
      },
      notFound: function() {
        return i.notFound;
      },
      permanentRedirect: function() {
        return n.permanentRedirect;
      },
      redirect: function() {
        return n.redirect;
      },
      unauthorized: function() {
        return c.unauthorized;
      },
      unstable_rethrow: function() {
        return u.unstable_rethrow;
      }
    });
    const n = Vo(), o = Ar(), i = Xo(), s = Ko(), c = Jo(), u = ai();
    class l extends Error {
      constructor() {
        super("Method unavailable on `ReadonlyURLSearchParams`. Read more: https://nextjs.org/docs/app/api-reference/functions/use-search-params#updating-searchparams");
      }
    }
    class p extends URLSearchParams {
      /** @deprecated Method unavailable on `ReadonlyURLSearchParams`. Read more: https://nextjs.org/docs/app/api-reference/functions/use-search-params#updating-searchparams */
      append() {
        throw new l();
      }
      /** @deprecated Method unavailable on `ReadonlyURLSearchParams`. Read more: https://nextjs.org/docs/app/api-reference/functions/use-search-params#updating-searchparams */
      delete() {
        throw new l();
      }
      /** @deprecated Method unavailable on `ReadonlyURLSearchParams`. Read more: https://nextjs.org/docs/app/api-reference/functions/use-search-params#updating-searchparams */
      set() {
        throw new l();
      }
      /** @deprecated Method unavailable on `ReadonlyURLSearchParams`. Read more: https://nextjs.org/docs/app/api-reference/functions/use-search-params#updating-searchparams */
      sort() {
        throw new l();
      }
    }
    (typeof t.default == "function" || typeof t.default == "object" && t.default !== null) && typeof t.default.__esModule > "u" && (Object.defineProperty(t.default, "__esModule", { value: !0 }), Object.assign(t.default, t), e.exports = t.default);
  }(pt, pt.exports)), pt.exports;
}
var dr = {}, fr = {}, Rn;
function ci() {
  if (Rn) return fr;
  Rn = 1;
  function e(r) {
    if (typeof WeakMap != "function") return null;
    var n = /* @__PURE__ */ new WeakMap(), o = /* @__PURE__ */ new WeakMap();
    return (e = function(i) {
      return i ? o : n;
    })(r);
  }
  function t(r, n) {
    if (!n && r && r.__esModule) return r;
    if (r === null || typeof r != "object" && typeof r != "function") return { default: r };
    var o = e(n);
    if (o && o.has(r)) return o.get(r);
    var i = { __proto__: null }, s = Object.defineProperty && Object.getOwnPropertyDescriptor;
    for (var c in r)
      if (c !== "default" && Object.prototype.hasOwnProperty.call(r, c)) {
        var u = s ? Object.getOwnPropertyDescriptor(r, c) : null;
        u && (u.get || u.set) ? Object.defineProperty(i, c, u) : i[c] = r[c];
      }
    return i.default = r, o && o.set(r, i), i;
  }
  return fr._ = t, fr;
}
var kn;
function ui() {
  return kn || (kn = 1, function(e) {
    "use client";
    Object.defineProperty(e, "__esModule", {
      value: !0
    });
    function t(s, c) {
      for (var u in c) Object.defineProperty(s, u, {
        enumerable: !0,
        get: c[u]
      });
    }
    t(e, {
      ServerInsertedHTMLContext: function() {
        return o;
      },
      useServerInsertedHTML: function() {
        return i;
      }
    });
    const n = /* @__PURE__ */ (/* @__PURE__ */ ci())._(B), o = /* @__PURE__ */ n.default.createContext(null);
    function i(s) {
      const c = (0, n.useContext)(o);
      c && c(s);
    }
  }(dr)), dr;
}
var Et = { exports: {} }, Pn;
function li() {
  return Pn || (Pn = 1, function(e, t) {
    Object.defineProperty(t, "__esModule", {
      value: !0
    }), Object.defineProperty(t, "bailoutToClientRendering", {
      enumerable: !0,
      get: function() {
        return o;
      }
    });
    const r = Tr(), n = Qn();
    function o(i) {
      const s = n.workAsyncStorage.getStore();
      if (!(s != null && s.forceStatic) && s != null && s.isStaticGeneration)
        throw new r.BailoutToCSRError(i);
    }
    (typeof t.default == "function" || typeof t.default == "object" && t.default !== null) && typeof t.default.__esModule > "u" && (Object.defineProperty(t.default, "__esModule", { value: !0 }), Object.assign(t.default, t), e.exports = t.default);
  }(Et, Et.exports)), Et.exports;
}
var On;
function di() {
  return On || (On = 1, function(e, t) {
    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    function r(w, _) {
      for (var E in _) Object.defineProperty(w, E, {
        enumerable: !0,
        get: _[E]
      });
    }
    r(t, {
      ReadonlyURLSearchParams: function() {
        return u.ReadonlyURLSearchParams;
      },
      RedirectType: function() {
        return u.RedirectType;
      },
      ServerInsertedHTMLContext: function() {
        return p.ServerInsertedHTMLContext;
      },
      forbidden: function() {
        return u.forbidden;
      },
      notFound: function() {
        return u.notFound;
      },
      permanentRedirect: function() {
        return u.permanentRedirect;
      },
      redirect: function() {
        return u.redirect;
      },
      unauthorized: function() {
        return u.unauthorized;
      },
      unstable_rethrow: function() {
        return u.unstable_rethrow;
      },
      useParams: function() {
        return R;
      },
      usePathname: function() {
        return g;
      },
      useRouter: function() {
        return v;
      },
      useSearchParams: function() {
        return y;
      },
      useSelectedLayoutSegment: function() {
        return I;
      },
      useSelectedLayoutSegments: function() {
        return z;
      },
      useServerInsertedHTML: function() {
        return p.useServerInsertedHTML;
      }
    });
    const n = B, o = Bo(), i = Wo(), s = Fo(), c = Uo(), u = si(), l = eo(), p = ui();
    function y() {
      const w = (0, n.useContext)(i.SearchParamsContext), _ = (0, n.useMemo)(() => w ? new u.ReadonlyURLSearchParams(w) : null, [
        w
      ]);
      if (typeof window > "u") {
        const { bailoutToClientRendering: E } = li();
        E("useSearchParams()");
      }
      return _;
    }
    function g() {
      return (0, l.useDynamicRouteParams)("usePathname()"), (0, n.useContext)(i.PathnameContext);
    }
    function v() {
      const w = (0, n.useContext)(o.AppRouterContext);
      if (w === null)
        throw new Error("invariant expected app router to be mounted");
      return w;
    }
    function R() {
      return (0, l.useDynamicRouteParams)("useParams()"), (0, n.useContext)(i.PathParamsContext);
    }
    function T(w, _, E, C) {
      E === void 0 && (E = !0), C === void 0 && (C = []);
      let $;
      if (E)
        $ = w[1][_];
      else {
        const de = w[1];
        var S;
        $ = (S = de.children) != null ? S : Object.values(de)[0];
      }
      if (!$) return C;
      const F = $[0];
      let V = (0, s.getSegmentValue)(F);
      return !V || V.startsWith(c.PAGE_SEGMENT_KEY) ? C : (C.push(V), T($, _, !1, C));
    }
    function z(w) {
      w === void 0 && (w = "children"), (0, l.useDynamicRouteParams)("useSelectedLayoutSegments()");
      const _ = (0, n.useContext)(o.LayoutRouterContext);
      return _ ? T(_.tree, w) : null;
    }
    function I(w) {
      w === void 0 && (w = "children"), (0, l.useDynamicRouteParams)("useSelectedLayoutSegment()");
      const _ = z(w);
      if (!_ || _.length === 0)
        return null;
      const E = w === "children" ? _[0] : _[_.length - 1];
      return E === c.DEFAULT_SEGMENT_KEY ? null : E;
    }
    (typeof t.default == "function" || typeof t.default == "object" && t.default !== null) && typeof t.default.__esModule > "u" && (Object.defineProperty(t.default, "__esModule", { value: !0 }), Object.assign(t.default, t), e.exports = t.default);
  }(dt, dt.exports)), dt.exports;
}
var pr, An;
function fi() {
  return An || (An = 1, pr = di()), pr;
}
var pi = fi(), G = function() {
  return G = Object.assign || function(t) {
    for (var r, n = 1, o = arguments.length; n < o; n++) {
      r = arguments[n];
      for (var i in r) Object.prototype.hasOwnProperty.call(r, i) && (t[i] = r[i]);
    }
    return t;
  }, G.apply(this, arguments);
};
function ze(e, t, r) {
  if (r || arguments.length === 2) for (var n = 0, o = t.length, i; n < o; n++)
    (i || !(n in t)) && (i || (i = Array.prototype.slice.call(t, 0, n)), i[n] = t[n]);
  return e.concat(i || Array.prototype.slice.call(t));
}
function hi(e) {
  var t = /* @__PURE__ */ Object.create(null);
  return function(r) {
    return t[r] === void 0 && (t[r] = e(r)), t[r];
  };
}
var gi = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|disableRemotePlayback|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/, yi = /* @__PURE__ */ hi(
  function(e) {
    return gi.test(e) || e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && e.charCodeAt(2) < 91;
  }
  /* Z+1 */
), hr, Tn;
function mi() {
  return Tn || (Tn = 1, hr = function(t, r, n, o) {
    var i = n ? n.call(o, t, r) : void 0;
    if (i !== void 0)
      return !!i;
    if (t === r)
      return !0;
    if (typeof t != "object" || !t || typeof r != "object" || !r)
      return !1;
    var s = Object.keys(t), c = Object.keys(r);
    if (s.length !== c.length)
      return !1;
    for (var u = Object.prototype.hasOwnProperty.bind(r), l = 0; l < s.length; l++) {
      var p = s[l];
      if (!u(p))
        return !1;
      var y = t[p], g = r[p];
      if (i = n ? n.call(o, y, g, p) : void 0, i === !1 || i === void 0 && y !== g)
        return !1;
    }
    return !0;
  }), hr;
}
var bi = mi();
const xi = /* @__PURE__ */ Lo(bi);
var M = "-ms-", it = "-moz-", D = "-webkit-", to = "comm", Wt = "rule", Cr = "decl", vi = "@import", ro = "@keyframes", wi = "@layer", no = Math.abs, jr = String.fromCharCode, xr = Object.assign;
function Si(e, t) {
  return Y(e, 0) ^ 45 ? (((t << 2 ^ Y(e, 0)) << 2 ^ Y(e, 1)) << 2 ^ Y(e, 2)) << 2 ^ Y(e, 3) : 0;
}
function oo(e) {
  return e.trim();
}
function be(e, t) {
  return (e = t.exec(e)) ? e[0] : e;
}
function O(e, t, r) {
  return e.replace(t, r);
}
function Tt(e, t, r) {
  return e.indexOf(t, r);
}
function Y(e, t) {
  return e.charCodeAt(t) | 0;
}
function Ue(e, t, r) {
  return e.slice(t, r);
}
function le(e) {
  return e.length;
}
function io(e) {
  return e.length;
}
function ot(e, t) {
  return t.push(e), e;
}
function _i(e, t) {
  return e.map(t).join("");
}
function Cn(e, t) {
  return e.filter(function(r) {
    return !be(r, t);
  });
}
var Ft = 1, Ge = 1, ao = 0, ne = 0, W = 0, Ze = "";
function Ut(e, t, r, n, o, i, s, c) {
  return { value: e, root: t, parent: r, type: n, props: o, children: i, line: Ft, column: Ge, length: s, return: "", siblings: c };
}
function Re(e, t) {
  return xr(Ut("", null, null, "", null, null, 0, e.siblings), e, { length: -e.length }, t);
}
function Fe(e) {
  for (; e.root; )
    e = Re(e.root, { children: [e] });
  ot(e, e.siblings);
}
function $i() {
  return W;
}
function Ei() {
  return W = ne > 0 ? Y(Ze, --ne) : 0, Ge--, W === 10 && (Ge = 1, Ft--), W;
}
function ae() {
  return W = ne < ao ? Y(Ze, ne++) : 0, Ge++, W === 10 && (Ge = 1, Ft++), W;
}
function Me() {
  return Y(Ze, ne);
}
function Ct() {
  return ne;
}
function Gt(e, t) {
  return Ue(Ze, e, t);
}
function vr(e) {
  switch (e) {
    // \0 \t \n \r \s whitespace token
    case 0:
    case 9:
    case 10:
    case 13:
    case 32:
      return 5;
    // ! + , / > @ ~ isolate token
    case 33:
    case 43:
    case 44:
    case 47:
    case 62:
    case 64:
    case 126:
    // ; { } breakpoint token
    case 59:
    case 123:
    case 125:
      return 4;
    // : accompanied token
    case 58:
      return 3;
    // " ' ( [ opening delimit token
    case 34:
    case 39:
    case 40:
    case 91:
      return 2;
    // ) ] closing delimit token
    case 41:
    case 93:
      return 1;
  }
  return 0;
}
function Ri(e) {
  return Ft = Ge = 1, ao = le(Ze = e), ne = 0, [];
}
function ki(e) {
  return Ze = "", e;
}
function gr(e) {
  return oo(Gt(ne - 1, wr(e === 91 ? e + 2 : e === 40 ? e + 1 : e)));
}
function Pi(e) {
  for (; (W = Me()) && W < 33; )
    ae();
  return vr(e) > 2 || vr(W) > 3 ? "" : " ";
}
function Oi(e, t) {
  for (; --t && ae() && !(W < 48 || W > 102 || W > 57 && W < 65 || W > 70 && W < 97); )
    ;
  return Gt(e, Ct() + (t < 6 && Me() == 32 && ae() == 32));
}
function wr(e) {
  for (; ae(); )
    switch (W) {
      // ] ) " '
      case e:
        return ne;
      // " '
      case 34:
      case 39:
        e !== 34 && e !== 39 && wr(W);
        break;
      // (
      case 40:
        e === 41 && wr(e);
        break;
      // \
      case 92:
        ae();
        break;
    }
  return ne;
}
function Ai(e, t) {
  for (; ae() && e + W !== 57; )
    if (e + W === 84 && Me() === 47)
      break;
  return "/*" + Gt(t, ne - 1) + "*" + jr(e === 47 ? e : ae());
}
function Ti(e) {
  for (; !vr(Me()); )
    ae();
  return Gt(e, ne);
}
function Ci(e) {
  return ki(jt("", null, null, null, [""], e = Ri(e), 0, [0], e));
}
function jt(e, t, r, n, o, i, s, c, u) {
  for (var l = 0, p = 0, y = s, g = 0, v = 0, R = 0, T = 1, z = 1, I = 1, w = 0, _ = "", E = o, C = i, $ = n, S = _; z; )
    switch (R = w, w = ae()) {
      // (
      case 40:
        if (R != 108 && Y(S, y - 1) == 58) {
          Tt(S += O(gr(w), "&", "&\f"), "&\f", no(l ? c[l - 1] : 0)) != -1 && (I = -1);
          break;
        }
      // " ' [
      case 34:
      case 39:
      case 91:
        S += gr(w);
        break;
      // \t \n \r \s
      case 9:
      case 10:
      case 13:
      case 32:
        S += Pi(R);
        break;
      // \
      case 92:
        S += Oi(Ct() - 1, 7);
        continue;
      // /
      case 47:
        switch (Me()) {
          case 42:
          case 47:
            ot(ji(Ai(ae(), Ct()), t, r, u), u);
            break;
          default:
            S += "/";
        }
        break;
      // {
      case 123 * T:
        c[l++] = le(S) * I;
      // } ; \0
      case 125 * T:
      case 59:
      case 0:
        switch (w) {
          // \0 }
          case 0:
          case 125:
            z = 0;
          // ;
          case 59 + p:
            I == -1 && (S = O(S, /\f/g, "")), v > 0 && le(S) - y && ot(v > 32 ? Dn(S + ";", n, r, y - 1, u) : Dn(O(S, " ", "") + ";", n, r, y - 2, u), u);
            break;
          // @ ;
          case 59:
            S += ";";
          // { rule/at-rule
          default:
            if (ot($ = jn(S, t, r, l, p, o, c, _, E = [], C = [], y, i), i), w === 123)
              if (p === 0)
                jt(S, t, $, $, E, i, y, c, C);
              else
                switch (g === 99 && Y(S, 3) === 110 ? 100 : g) {
                  // d l m s
                  case 100:
                  case 108:
                  case 109:
                  case 115:
                    jt(e, $, $, n && ot(jn(e, $, $, 0, 0, o, c, _, o, E = [], y, C), C), o, C, y, c, n ? E : C);
                    break;
                  default:
                    jt(S, $, $, $, [""], C, 0, c, C);
                }
        }
        l = p = v = 0, T = I = 1, _ = S = "", y = s;
        break;
      // :
      case 58:
        y = 1 + le(S), v = R;
      default:
        if (T < 1) {
          if (w == 123)
            --T;
          else if (w == 125 && T++ == 0 && Ei() == 125)
            continue;
        }
        switch (S += jr(w), w * T) {
          // &
          case 38:
            I = p > 0 ? 1 : (S += "\f", -1);
            break;
          // ,
          case 44:
            c[l++] = (le(S) - 1) * I, I = 1;
            break;
          // @
          case 64:
            Me() === 45 && (S += gr(ae())), g = Me(), p = y = le(_ = S += Ti(Ct())), w++;
            break;
          // -
          case 45:
            R === 45 && le(S) == 2 && (T = 0);
        }
    }
  return i;
}
function jn(e, t, r, n, o, i, s, c, u, l, p, y) {
  for (var g = o - 1, v = o === 0 ? i : [""], R = io(v), T = 0, z = 0, I = 0; T < n; ++T)
    for (var w = 0, _ = Ue(e, g + 1, g = no(z = s[T])), E = e; w < R; ++w)
      (E = oo(z > 0 ? v[w] + " " + _ : O(_, /&\f/g, v[w]))) && (u[I++] = E);
  return Ut(e, t, r, o === 0 ? Wt : c, u, l, p, y);
}
function ji(e, t, r, n) {
  return Ut(e, t, r, to, jr($i()), Ue(e, 2, -2), 0, n);
}
function Dn(e, t, r, n, o) {
  return Ut(e, t, r, Cr, Ue(e, 0, n), Ue(e, n + 1, -1), n, o);
}
function so(e, t, r) {
  switch (Si(e, t)) {
    // color-adjust
    case 5103:
      return D + "print-" + e + e;
    // animation, animation-(delay|direction|duration|fill-mode|iteration-count|name|play-state|timing-function)
    case 5737:
    case 4201:
    case 3177:
    case 3433:
    case 1641:
    case 4457:
    case 2921:
    // text-decoration, filter, clip-path, backface-visibility, column, box-decoration-break
    case 5572:
    case 6356:
    case 5844:
    case 3191:
    case 6645:
    case 3005:
    // mask, mask-image, mask-(mode|clip|size), mask-(repeat|origin), mask-position, mask-composite,
    case 6391:
    case 5879:
    case 5623:
    case 6135:
    case 4599:
    case 4855:
    // background-clip, columns, column-(count|fill|gap|rule|rule-color|rule-style|rule-width|span|width)
    case 4215:
    case 6389:
    case 5109:
    case 5365:
    case 5621:
    case 3829:
      return D + e + e;
    // tab-size
    case 4789:
      return it + e + e;
    // appearance, user-select, transform, hyphens, text-size-adjust
    case 5349:
    case 4246:
    case 4810:
    case 6968:
    case 2756:
      return D + e + it + e + M + e + e;
    // writing-mode
    case 5936:
      switch (Y(e, t + 11)) {
        // vertical-l(r)
        case 114:
          return D + e + M + O(e, /[svh]\w+-[tblr]{2}/, "tb") + e;
        // vertical-r(l)
        case 108:
          return D + e + M + O(e, /[svh]\w+-[tblr]{2}/, "tb-rl") + e;
        // horizontal(-)tb
        case 45:
          return D + e + M + O(e, /[svh]\w+-[tblr]{2}/, "lr") + e;
      }
    // flex, flex-direction, scroll-snap-type, writing-mode
    case 6828:
    case 4268:
    case 2903:
      return D + e + M + e + e;
    // order
    case 6165:
      return D + e + M + "flex-" + e + e;
    // align-items
    case 5187:
      return D + e + O(e, /(\w+).+(:[^]+)/, D + "box-$1$2" + M + "flex-$1$2") + e;
    // align-self
    case 5443:
      return D + e + M + "flex-item-" + O(e, /flex-|-self/g, "") + (be(e, /flex-|baseline/) ? "" : M + "grid-row-" + O(e, /flex-|-self/g, "")) + e;
    // align-content
    case 4675:
      return D + e + M + "flex-line-pack" + O(e, /align-content|flex-|-self/g, "") + e;
    // flex-shrink
    case 5548:
      return D + e + M + O(e, "shrink", "negative") + e;
    // flex-basis
    case 5292:
      return D + e + M + O(e, "basis", "preferred-size") + e;
    // flex-grow
    case 6060:
      return D + "box-" + O(e, "-grow", "") + D + e + M + O(e, "grow", "positive") + e;
    // transition
    case 4554:
      return D + O(e, /([^-])(transform)/g, "$1" + D + "$2") + e;
    // cursor
    case 6187:
      return O(O(O(e, /(zoom-|grab)/, D + "$1"), /(image-set)/, D + "$1"), e, "") + e;
    // background, background-image
    case 5495:
    case 3959:
      return O(e, /(image-set\([^]*)/, D + "$1$`$1");
    // justify-content
    case 4968:
      return O(O(e, /(.+:)(flex-)?(.*)/, D + "box-pack:$3" + M + "flex-pack:$3"), /s.+-b[^;]+/, "justify") + D + e + e;
    // justify-self
    case 4200:
      if (!be(e, /flex-|baseline/)) return M + "grid-column-align" + Ue(e, t) + e;
      break;
    // grid-template-(columns|rows)
    case 2592:
    case 3360:
      return M + O(e, "template-", "") + e;
    // grid-(row|column)-start
    case 4384:
    case 3616:
      return r && r.some(function(n, o) {
        return t = o, be(n.props, /grid-\w+-end/);
      }) ? ~Tt(e + (r = r[t].value), "span", 0) ? e : M + O(e, "-start", "") + e + M + "grid-row-span:" + (~Tt(r, "span", 0) ? be(r, /\d+/) : +be(r, /\d+/) - +be(e, /\d+/)) + ";" : M + O(e, "-start", "") + e;
    // grid-(row|column)-end
    case 4896:
    case 4128:
      return r && r.some(function(n) {
        return be(n.props, /grid-\w+-start/);
      }) ? e : M + O(O(e, "-end", "-span"), "span ", "") + e;
    // (margin|padding)-inline-(start|end)
    case 4095:
    case 3583:
    case 4068:
    case 2532:
      return O(e, /(.+)-inline(.+)/, D + "$1$2") + e;
    // (min|max)?(width|height|inline-size|block-size)
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
      if (le(e) - 1 - t > 6)
        switch (Y(e, t + 1)) {
          // (m)ax-content, (m)in-content
          case 109:
            if (Y(e, t + 4) !== 45)
              break;
          // (f)ill-available, (f)it-content
          case 102:
            return O(e, /(.+:)(.+)-([^]+)/, "$1" + D + "$2-$3$1" + it + (Y(e, t + 3) == 108 ? "$3" : "$2-$3")) + e;
          // (s)tretch
          case 115:
            return ~Tt(e, "stretch", 0) ? so(O(e, "stretch", "fill-available"), t, r) + e : e;
        }
      break;
    // grid-(column|row)
    case 5152:
    case 5920:
      return O(e, /(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/, function(n, o, i, s, c, u, l) {
        return M + o + ":" + i + l + (s ? M + o + "-span:" + (c ? u : +u - +i) + l : "") + e;
      });
    // position: sticky
    case 4949:
      if (Y(e, t + 6) === 121)
        return O(e, ":", ":" + D) + e;
      break;
    // display: (flex|inline-flex|grid|inline-grid)
    case 6444:
      switch (Y(e, Y(e, 14) === 45 ? 18 : 11)) {
        // (inline-)?fle(x)
        case 120:
          return O(e, /(.+:)([^;\s!]+)(;|(\s+)?!.+)?/, "$1" + D + (Y(e, 14) === 45 ? "inline-" : "") + "box$3$1" + D + "$2$3$1" + M + "$2box$3") + e;
        // (inline-)?gri(d)
        case 100:
          return O(e, ":", ":" + M) + e;
      }
      break;
    // scroll-margin, scroll-margin-(top|right|bottom|left)
    case 5719:
    case 2647:
    case 2135:
    case 3927:
    case 2391:
      return O(e, "scroll-", "scroll-snap-") + e;
  }
  return e;
}
function It(e, t) {
  for (var r = "", n = 0; n < e.length; n++)
    r += t(e[n], n, e, t) || "";
  return r;
}
function Di(e, t, r, n) {
  switch (e.type) {
    case wi:
      if (e.children.length) break;
    case vi:
    case Cr:
      return e.return = e.return || e.value;
    case to:
      return "";
    case ro:
      return e.return = e.value + "{" + It(e.children, n) + "}";
    case Wt:
      if (!le(e.value = e.props.join(","))) return "";
  }
  return le(r = It(e.children, n)) ? e.return = e.value + "{" + r + "}" : "";
}
function Ni(e) {
  var t = io(e);
  return function(r, n, o, i) {
    for (var s = "", c = 0; c < t; c++)
      s += e[c](r, n, o, i) || "";
    return s;
  };
}
function Ii(e) {
  return function(t) {
    t.root || (t = t.return) && e(t);
  };
}
function Li(e, t, r, n) {
  if (e.length > -1 && !e.return)
    switch (e.type) {
      case Cr:
        e.return = so(e.value, e.length, r);
        return;
      case ro:
        return It([Re(e, { value: O(e.value, "@", "@" + D) })], n);
      case Wt:
        if (e.length)
          return _i(r = e.props, function(o) {
            switch (be(o, n = /(::plac\w+|:read-\w+)/)) {
              // :read-(only|write)
              case ":read-only":
              case ":read-write":
                Fe(Re(e, { props: [O(o, /:(read-\w+)/, ":" + it + "$1")] })), Fe(Re(e, { props: [o] })), xr(e, { props: Cn(r, n) });
                break;
              // :placeholder
              case "::placeholder":
                Fe(Re(e, { props: [O(o, /:(plac\w+)/, ":" + D + "input-$1")] })), Fe(Re(e, { props: [O(o, /:(plac\w+)/, ":" + it + "$1")] })), Fe(Re(e, { props: [O(o, /:(plac\w+)/, M + "input-$1")] })), Fe(Re(e, { props: [o] })), xr(e, { props: Cn(r, n) });
                break;
            }
            return "";
          });
    }
}
var Mi = {
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
}, ve = typeof process < "u" && process.env !== void 0 && (process.env.REACT_APP_SC_ATTR || process.env.SC_ATTR) || "data-styled", co = "active", Lt = "data-styled-version", Ye = "6.1.14", Dr = `/*!sc*/
`, Mt = typeof window < "u" && "HTMLElement" in window, zi = !!(typeof SC_DISABLE_SPEEDY == "boolean" ? SC_DISABLE_SPEEDY : typeof process < "u" && process.env !== void 0 && process.env.REACT_APP_SC_DISABLE_SPEEDY !== void 0 && process.env.REACT_APP_SC_DISABLE_SPEEDY !== "" ? process.env.REACT_APP_SC_DISABLE_SPEEDY !== "false" && process.env.REACT_APP_SC_DISABLE_SPEEDY : typeof process < "u" && process.env !== void 0 && process.env.SC_DISABLE_SPEEDY !== void 0 && process.env.SC_DISABLE_SPEEDY !== "" ? process.env.SC_DISABLE_SPEEDY !== "false" && process.env.SC_DISABLE_SPEEDY : process.env.NODE_ENV !== "production"), qi = {}, Nn = /invalid hook call/i, Rt = /* @__PURE__ */ new Set(), uo = function(e, t) {
  if (process.env.NODE_ENV !== "production") {
    var r = t ? ' with the id of "'.concat(t, '"') : "", n = "The component ".concat(e).concat(r, ` has been created dynamically.
`) + `You may see this warning because you've called styled inside another component.
To resolve this only create new StyledComponents outside of any render method and function component.`, o = console.error;
    try {
      var i = !0;
      console.error = function(s) {
        for (var c = [], u = 1; u < arguments.length; u++) c[u - 1] = arguments[u];
        Nn.test(s) ? (i = !1, Rt.delete(n)) : o.apply(void 0, ze([s], c, !1));
      }, Do(), i && !Rt.has(n) && (console.warn(n), Rt.add(n));
    } catch (s) {
      Nn.test(s.message) && Rt.delete(n);
    } finally {
      console.error = o;
    }
  }
}, Yt = Object.freeze([]), Ve = Object.freeze({});
function lo(e, t, r) {
  return r === void 0 && (r = Ve), e.theme !== r.theme && e.theme || t || r.theme;
}
var Sr = /* @__PURE__ */ new Set(["a", "abbr", "address", "area", "article", "aside", "audio", "b", "base", "bdi", "bdo", "big", "blockquote", "body", "br", "button", "canvas", "caption", "cite", "code", "col", "colgroup", "data", "datalist", "dd", "del", "details", "dfn", "dialog", "div", "dl", "dt", "em", "embed", "fieldset", "figcaption", "figure", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "header", "hgroup", "hr", "html", "i", "iframe", "img", "input", "ins", "kbd", "keygen", "label", "legend", "li", "link", "main", "map", "mark", "menu", "menuitem", "meta", "meter", "nav", "noscript", "object", "ol", "optgroup", "option", "output", "p", "param", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "script", "section", "select", "small", "source", "span", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "textarea", "tfoot", "th", "thead", "time", "tr", "track", "u", "ul", "use", "var", "video", "wbr", "circle", "clipPath", "defs", "ellipse", "foreignObject", "g", "image", "line", "linearGradient", "marker", "mask", "path", "pattern", "polygon", "polyline", "radialGradient", "rect", "stop", "svg", "text", "tspan"]), Hi = /[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g, Bi = /(^-|-$)/g;
function In(e) {
  return e.replace(Hi, "-").replace(Bi, "");
}
var Wi = /(a)(d)/gi, kt = 52, Ln = function(e) {
  return String.fromCharCode(e + (e > 25 ? 39 : 97));
};
function _r(e) {
  var t, r = "";
  for (t = Math.abs(e); t > kt; t = t / kt | 0) r = Ln(t % kt) + r;
  return (Ln(t % kt) + r).replace(Wi, "$1-$2");
}
var yr, fo = 5381, Ie = function(e, t) {
  for (var r = t.length; r; ) e = 33 * e ^ t.charCodeAt(--r);
  return e;
}, po = function(e) {
  return Ie(fo, e);
};
function ho(e) {
  return _r(po(e) >>> 0);
}
function go(e) {
  return process.env.NODE_ENV !== "production" && typeof e == "string" && e || e.displayName || e.name || "Component";
}
function mr(e) {
  return typeof e == "string" && (process.env.NODE_ENV === "production" || e.charAt(0) === e.charAt(0).toLowerCase());
}
var yo = typeof Symbol == "function" && Symbol.for, mo = yo ? Symbol.for("react.memo") : 60115, Fi = yo ? Symbol.for("react.forward_ref") : 60112, Ui = { childContextTypes: !0, contextType: !0, contextTypes: !0, defaultProps: !0, displayName: !0, getDefaultProps: !0, getDerivedStateFromError: !0, getDerivedStateFromProps: !0, mixins: !0, propTypes: !0, type: !0 }, Gi = { name: !0, length: !0, prototype: !0, caller: !0, callee: !0, arguments: !0, arity: !0 }, bo = { $$typeof: !0, compare: !0, defaultProps: !0, displayName: !0, propTypes: !0, type: !0 }, Yi = ((yr = {})[Fi] = { $$typeof: !0, render: !0, defaultProps: !0, displayName: !0, propTypes: !0 }, yr[mo] = bo, yr);
function Mn(e) {
  return ("type" in (t = e) && t.type.$$typeof) === mo ? bo : "$$typeof" in e ? Yi[e.$$typeof] : Ui;
  var t;
}
var Vi = Object.defineProperty, Xi = Object.getOwnPropertyNames, zn = Object.getOwnPropertySymbols, Ki = Object.getOwnPropertyDescriptor, Ji = Object.getPrototypeOf, qn = Object.prototype;
function xo(e, t, r) {
  if (typeof t != "string") {
    if (qn) {
      var n = Ji(t);
      n && n !== qn && xo(e, n, r);
    }
    var o = Xi(t);
    zn && (o = o.concat(zn(t)));
    for (var i = Mn(e), s = Mn(t), c = 0; c < o.length; ++c) {
      var u = o[c];
      if (!(u in Gi || r && r[u] || s && u in s || i && u in i)) {
        var l = Ki(t, u);
        try {
          Vi(e, u, l);
        } catch {
        }
      }
    }
  }
  return e;
}
function qe(e) {
  return typeof e == "function";
}
function Nr(e) {
  return typeof e == "object" && "styledComponentId" in e;
}
function Le(e, t) {
  return e && t ? "".concat(e, " ").concat(t) : e || t || "";
}
function zt(e, t) {
  if (e.length === 0) return "";
  for (var r = e[0], n = 1; n < e.length; n++) r += t ? t + e[n] : e[n];
  return r;
}
function Xe(e) {
  return e !== null && typeof e == "object" && e.constructor.name === Object.name && !("props" in e && e.$$typeof);
}
function $r(e, t, r) {
  if (r === void 0 && (r = !1), !r && !Xe(e) && !Array.isArray(e)) return t;
  if (Array.isArray(t)) for (var n = 0; n < t.length; n++) e[n] = $r(e[n], t[n]);
  else if (Xe(t)) for (var n in t) e[n] = $r(e[n], t[n]);
  return e;
}
function Ir(e, t) {
  Object.defineProperty(e, "toString", { value: t });
}
var Zi = process.env.NODE_ENV !== "production" ? { 1: `Cannot create styled-component for component: %s.

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
function Qi() {
  for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
  for (var r = e[0], n = [], o = 1, i = e.length; o < i; o += 1) n.push(e[o]);
  return n.forEach(function(s) {
    r = r.replace(/%[a-z]/, s);
  }), r;
}
function te(e) {
  for (var t = [], r = 1; r < arguments.length; r++) t[r - 1] = arguments[r];
  return process.env.NODE_ENV === "production" ? new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(e, " for more information.").concat(t.length > 0 ? " Args: ".concat(t.join(", ")) : "")) : new Error(Qi.apply(void 0, ze([Zi[e]], t, !1)).trim());
}
var ea = function() {
  function e(t) {
    this.groupSizes = new Uint32Array(512), this.length = 512, this.tag = t;
  }
  return e.prototype.indexOfGroup = function(t) {
    for (var r = 0, n = 0; n < t; n++) r += this.groupSizes[n];
    return r;
  }, e.prototype.insertRules = function(t, r) {
    if (t >= this.groupSizes.length) {
      for (var n = this.groupSizes, o = n.length, i = o; t >= i; ) if ((i <<= 1) < 0) throw te(16, "".concat(t));
      this.groupSizes = new Uint32Array(i), this.groupSizes.set(n), this.length = i;
      for (var s = o; s < i; s++) this.groupSizes[s] = 0;
    }
    for (var c = this.indexOfGroup(t + 1), u = (s = 0, r.length); s < u; s++) this.tag.insertRule(c, r[s]) && (this.groupSizes[t]++, c++);
  }, e.prototype.clearGroup = function(t) {
    if (t < this.length) {
      var r = this.groupSizes[t], n = this.indexOfGroup(t), o = n + r;
      this.groupSizes[t] = 0;
      for (var i = n; i < o; i++) this.tag.deleteRule(n);
    }
  }, e.prototype.getGroup = function(t) {
    var r = "";
    if (t >= this.length || this.groupSizes[t] === 0) return r;
    for (var n = this.groupSizes[t], o = this.indexOfGroup(t), i = o + n, s = o; s < i; s++) r += "".concat(this.tag.getRule(s)).concat(Dr);
    return r;
  }, e;
}(), ta = 1 << 30, Dt = /* @__PURE__ */ new Map(), qt = /* @__PURE__ */ new Map(), Nt = 1, Pt = function(e) {
  if (Dt.has(e)) return Dt.get(e);
  for (; qt.has(Nt); ) Nt++;
  var t = Nt++;
  if (process.env.NODE_ENV !== "production" && ((0 | t) < 0 || t > ta)) throw te(16, "".concat(t));
  return Dt.set(e, t), qt.set(t, e), t;
}, ra = function(e, t) {
  Nt = t + 1, Dt.set(e, t), qt.set(t, e);
}, na = "style[".concat(ve, "][").concat(Lt, '="').concat(Ye, '"]'), oa = new RegExp("^".concat(ve, '\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')), ia = function(e, t, r) {
  for (var n, o = r.split(","), i = 0, s = o.length; i < s; i++) (n = o[i]) && e.registerName(t, n);
}, aa = function(e, t) {
  for (var r, n = ((r = t.textContent) !== null && r !== void 0 ? r : "").split(Dr), o = [], i = 0, s = n.length; i < s; i++) {
    var c = n[i].trim();
    if (c) {
      var u = c.match(oa);
      if (u) {
        var l = 0 | parseInt(u[1], 10), p = u[2];
        l !== 0 && (ra(p, l), ia(e, p, u[3]), e.getTag().insertRules(l, o)), o.length = 0;
      } else o.push(c);
    }
  }
}, Hn = function(e) {
  for (var t = document.querySelectorAll(na), r = 0, n = t.length; r < n; r++) {
    var o = t[r];
    o && o.getAttribute(ve) !== co && (aa(e, o), o.parentNode && o.parentNode.removeChild(o));
  }
};
function Er() {
  return typeof __webpack_nonce__ < "u" ? __webpack_nonce__ : null;
}
var vo = function(e) {
  var t = document.head, r = e || t, n = document.createElement("style"), o = function(c) {
    var u = Array.from(c.querySelectorAll("style[".concat(ve, "]")));
    return u[u.length - 1];
  }(r), i = o !== void 0 ? o.nextSibling : null;
  n.setAttribute(ve, co), n.setAttribute(Lt, Ye);
  var s = Er();
  return s && n.setAttribute("nonce", s), r.insertBefore(n, i), n;
}, sa = function() {
  function e(t) {
    this.element = vo(t), this.element.appendChild(document.createTextNode("")), this.sheet = function(r) {
      if (r.sheet) return r.sheet;
      for (var n = document.styleSheets, o = 0, i = n.length; o < i; o++) {
        var s = n[o];
        if (s.ownerNode === r) return s;
      }
      throw te(17);
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
}(), ca = function() {
  function e(t) {
    this.element = vo(t), this.nodes = this.element.childNodes, this.length = 0;
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
}(), ua = function() {
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
}(), Bn = Mt, la = { isServer: !Mt, useCSSOMInjection: !zi }, at = function() {
  function e(t, r, n) {
    t === void 0 && (t = Ve), r === void 0 && (r = {});
    var o = this;
    this.options = G(G({}, la), t), this.gs = r, this.names = new Map(n), this.server = !!t.isServer, !this.server && Mt && Bn && (Bn = !1, Hn(this)), Ir(this, function() {
      return function(i) {
        for (var s = i.getTag(), c = s.length, u = "", l = function(y) {
          var g = function(I) {
            return qt.get(I);
          }(y);
          if (g === void 0) return "continue";
          var v = i.names.get(g), R = s.getGroup(y);
          if (v === void 0 || !v.size || R.length === 0) return "continue";
          var T = "".concat(ve, ".g").concat(y, '[id="').concat(g, '"]'), z = "";
          v !== void 0 && v.forEach(function(I) {
            I.length > 0 && (z += "".concat(I, ","));
          }), u += "".concat(R).concat(T, '{content:"').concat(z, '"}').concat(Dr);
        }, p = 0; p < c; p++) l(p);
        return u;
      }(o);
    });
  }
  return e.registerId = function(t) {
    return Pt(t);
  }, e.prototype.rehydrate = function() {
    !this.server && Mt && Hn(this);
  }, e.prototype.reconstructWithOptions = function(t, r) {
    return r === void 0 && (r = !0), new e(G(G({}, this.options), t), this.gs, r && this.names || void 0);
  }, e.prototype.allocateGSInstance = function(t) {
    return this.gs[t] = (this.gs[t] || 0) + 1;
  }, e.prototype.getTag = function() {
    return this.tag || (this.tag = (t = function(r) {
      var n = r.useCSSOMInjection, o = r.target;
      return r.isServer ? new ua(o) : n ? new sa(o) : new ca(o);
    }(this.options), new ea(t)));
    var t;
  }, e.prototype.hasNameForId = function(t, r) {
    return this.names.has(t) && this.names.get(t).has(r);
  }, e.prototype.registerName = function(t, r) {
    if (Pt(t), this.names.has(t)) this.names.get(t).add(r);
    else {
      var n = /* @__PURE__ */ new Set();
      n.add(r), this.names.set(t, n);
    }
  }, e.prototype.insertRules = function(t, r, n) {
    this.registerName(t, r), this.getTag().insertRules(Pt(t), n);
  }, e.prototype.clearNames = function(t) {
    this.names.has(t) && this.names.get(t).clear();
  }, e.prototype.clearRules = function(t) {
    this.getTag().clearGroup(Pt(t)), this.clearNames(t);
  }, e.prototype.clearTag = function() {
    this.tag = void 0;
  }, e;
}(), da = /&/g, fa = /^\s*\/\/.*$/gm;
function wo(e, t) {
  return e.map(function(r) {
    return r.type === "rule" && (r.value = "".concat(t, " ").concat(r.value), r.value = r.value.replaceAll(",", ",".concat(t, " ")), r.props = r.props.map(function(n) {
      return "".concat(t, " ").concat(n);
    })), Array.isArray(r.children) && r.type !== "@keyframes" && (r.children = wo(r.children, t)), r;
  });
}
function So(e) {
  var t, r, n, o = e === void 0 ? Ve : e, i = o.options, s = i === void 0 ? Ve : i, c = o.plugins, u = c === void 0 ? Yt : c, l = function(g, v, R) {
    return R.startsWith(r) && R.endsWith(r) && R.replaceAll(r, "").length > 0 ? ".".concat(t) : g;
  }, p = u.slice();
  p.push(function(g) {
    g.type === Wt && g.value.includes("&") && (g.props[0] = g.props[0].replace(da, r).replace(n, l));
  }), s.prefix && p.push(Li), p.push(Di);
  var y = function(g, v, R, T) {
    v === void 0 && (v = ""), R === void 0 && (R = ""), T === void 0 && (T = "&"), t = T, r = v, n = new RegExp("\\".concat(r, "\\b"), "g");
    var z = g.replace(fa, ""), I = Ci(R || v ? "".concat(R, " ").concat(v, " { ").concat(z, " }") : z);
    s.namespace && (I = wo(I, s.namespace));
    var w = [];
    return It(I, Ni(p.concat(Ii(function(_) {
      return w.push(_);
    })))), w;
  };
  return y.hash = u.length ? u.reduce(function(g, v) {
    return v.name || te(15), Ie(g, v.name);
  }, fo).toString() : "", y;
}
var pa = new at(), Rr = So(), Lr = B.createContext({ shouldForwardProp: void 0, styleSheet: pa, stylis: Rr });
Lr.Consumer;
var ha = B.createContext(void 0);
function Ht() {
  return Xn(Lr);
}
function _o(e) {
  var t = Pr(e.stylisPlugins), r = t[0], n = t[1], o = Ht().styleSheet, i = At(function() {
    var u = o;
    return e.sheet ? u = e.sheet : e.target && (u = u.reconstructWithOptions({ target: e.target }, !1)), e.disableCSSOMInjection && (u = u.reconstructWithOptions({ useCSSOMInjection: !1 })), u;
  }, [e.disableCSSOMInjection, e.sheet, e.target, o]), s = At(function() {
    return So({ options: { namespace: e.namespace, prefix: e.enableVendorPrefixes }, plugins: r });
  }, [e.enableVendorPrefixes, e.namespace, r]);
  Vn(function() {
    xi(r, e.stylisPlugins) || n(e.stylisPlugins);
  }, [e.stylisPlugins]);
  var c = At(function() {
    return { shouldForwardProp: e.shouldForwardProp, styleSheet: i, stylis: s };
  }, [e.shouldForwardProp, i, s]);
  return B.createElement(Lr.Provider, { value: c }, B.createElement(ha.Provider, { value: s }, e.children));
}
var Wn = function() {
  function e(t, r) {
    var n = this;
    this.inject = function(o, i) {
      i === void 0 && (i = Rr);
      var s = n.name + i.hash;
      o.hasNameForId(n.id, s) || o.insertRules(n.id, s, i(n.rules, s, "@keyframes"));
    }, this.name = t, this.id = "sc-keyframes-".concat(t), this.rules = r, Ir(this, function() {
      throw te(12, String(n.name));
    });
  }
  return e.prototype.getName = function(t) {
    return t === void 0 && (t = Rr), this.name + t.hash;
  }, e;
}(), ga = function(e) {
  return e >= "A" && e <= "Z";
};
function Fn(e) {
  for (var t = "", r = 0; r < e.length; r++) {
    var n = e[r];
    if (r === 1 && n === "-" && e[0] === "-") return e;
    ga(n) ? t += "-" + n.toLowerCase() : t += n;
  }
  return t.startsWith("ms-") ? "-" + t : t;
}
var $o = function(e) {
  return e == null || e === !1 || e === "";
}, Eo = function(e) {
  var t, r, n = [];
  for (var o in e) {
    var i = e[o];
    e.hasOwnProperty(o) && !$o(i) && (Array.isArray(i) && i.isCss || qe(i) ? n.push("".concat(Fn(o), ":"), i, ";") : Xe(i) ? n.push.apply(n, ze(ze(["".concat(o, " {")], Eo(i), !1), ["}"], !1)) : n.push("".concat(Fn(o), ": ").concat((t = o, (r = i) == null || typeof r == "boolean" || r === "" ? "" : typeof r != "number" || r === 0 || t in Mi || t.startsWith("--") ? String(r).trim() : "".concat(r, "px")), ";")));
  }
  return n;
};
function ke(e, t, r, n) {
  if ($o(e)) return [];
  if (Nr(e)) return [".".concat(e.styledComponentId)];
  if (qe(e)) {
    if (!qe(i = e) || i.prototype && i.prototype.isReactComponent || !t) return [e];
    var o = e(t);
    return process.env.NODE_ENV === "production" || typeof o != "object" || Array.isArray(o) || o instanceof Wn || Xe(o) || o === null || console.error("".concat(go(e), " is not a styled component and cannot be referred to via component selector. See https://www.styled-components.com/docs/advanced#referring-to-other-components for more details.")), ke(o, t, r, n);
  }
  var i;
  return e instanceof Wn ? r ? (e.inject(r, n), [e.getName(n)]) : [e] : Xe(e) ? Eo(e) : Array.isArray(e) ? Array.prototype.concat.apply(Yt, e.map(function(s) {
    return ke(s, t, r, n);
  })) : [e.toString()];
}
function Ro(e) {
  for (var t = 0; t < e.length; t += 1) {
    var r = e[t];
    if (qe(r) && !Nr(r)) return !1;
  }
  return !0;
}
var ya = po(Ye), ma = function() {
  function e(t, r, n) {
    this.rules = t, this.staticRulesId = "", this.isStatic = process.env.NODE_ENV === "production" && (n === void 0 || n.isStatic) && Ro(t), this.componentId = r, this.baseHash = Ie(ya, r), this.baseStyle = n, at.registerId(r);
  }
  return e.prototype.generateAndInjectStyles = function(t, r, n) {
    var o = this.baseStyle ? this.baseStyle.generateAndInjectStyles(t, r, n) : "";
    if (this.isStatic && !n.hash) if (this.staticRulesId && r.hasNameForId(this.componentId, this.staticRulesId)) o = Le(o, this.staticRulesId);
    else {
      var i = zt(ke(this.rules, t, r, n)), s = _r(Ie(this.baseHash, i) >>> 0);
      if (!r.hasNameForId(this.componentId, s)) {
        var c = n(i, ".".concat(s), void 0, this.componentId);
        r.insertRules(this.componentId, s, c);
      }
      o = Le(o, s), this.staticRulesId = s;
    }
    else {
      for (var u = Ie(this.baseHash, n.hash), l = "", p = 0; p < this.rules.length; p++) {
        var y = this.rules[p];
        if (typeof y == "string") l += y, process.env.NODE_ENV !== "production" && (u = Ie(u, y));
        else if (y) {
          var g = zt(ke(y, t, r, n));
          u = Ie(u, g + p), l += g;
        }
      }
      if (l) {
        var v = _r(u >>> 0);
        r.hasNameForId(this.componentId, v) || r.insertRules(this.componentId, v, n(l, ".".concat(v), void 0, this.componentId)), o = Le(o, v);
      }
    }
    return o;
  }, e;
}(), Ke = B.createContext(void 0);
Ke.Consumer;
function Mr() {
  var e = Xn(Ke);
  if (!e) throw te(18);
  return e;
}
function ba(e) {
  var t = B.useContext(Ke), r = At(function() {
    return function(n, o) {
      if (!n) throw te(14);
      if (qe(n)) {
        var i = n(o);
        if (process.env.NODE_ENV !== "production" && (i === null || Array.isArray(i) || typeof i != "object")) throw te(7);
        return i;
      }
      if (Array.isArray(n) || typeof n != "object") throw te(8);
      return o ? G(G({}, o), n) : n;
    }(e.theme, t);
  }, [e.theme, t]);
  return e.children ? B.createElement(Ke.Provider, { value: r }, e.children) : null;
}
var br = {}, Un = /* @__PURE__ */ new Set();
function xa(e, t, r) {
  var n = Nr(e), o = e, i = !mr(e), s = t.attrs, c = s === void 0 ? Yt : s, u = t.componentId, l = u === void 0 ? function(E, C) {
    var $ = typeof E != "string" ? "sc" : In(E);
    br[$] = (br[$] || 0) + 1;
    var S = "".concat($, "-").concat(ho(Ye + $ + br[$]));
    return C ? "".concat(C, "-").concat(S) : S;
  }(t.displayName, t.parentComponentId) : u, p = t.displayName, y = p === void 0 ? function(E) {
    return mr(E) ? "styled.".concat(E) : "Styled(".concat(go(E), ")");
  }(e) : p, g = t.displayName && t.componentId ? "".concat(In(t.displayName), "-").concat(t.componentId) : t.componentId || l, v = n && o.attrs ? o.attrs.concat(c).filter(Boolean) : c, R = t.shouldForwardProp;
  if (n && o.shouldForwardProp) {
    var T = o.shouldForwardProp;
    if (t.shouldForwardProp) {
      var z = t.shouldForwardProp;
      R = function(E, C) {
        return T(E, C) && z(E, C);
      };
    } else R = T;
  }
  var I = new ma(r, g, n ? o.componentStyle : void 0);
  function w(E, C) {
    return function($, S, F) {
      var V = $.attrs, de = $.componentStyle, Se = $.defaultProps, _e = $.foldedComponentIds, fe = $.styledComponentId, Pe = $.target, Oe = B.useContext(Ke), Qe = Ht(), $e = $.shouldForwardProp || Qe.shouldForwardProp;
      process.env.NODE_ENV !== "production" && Ur(fe);
      var Ae = lo(S, Oe, Se) || Ve, U = function(he, ce, ge) {
        for (var ie, d = G(G({}, ce), { className: void 0, theme: ge }), f = 0; f < he.length; f += 1) {
          var h = qe(ie = he[f]) ? ie(d) : ie;
          for (var k in h) d[k] = k === "className" ? Le(d[k], h[k]) : k === "style" ? G(G({}, d[k]), h[k]) : h[k];
        }
        return ce.className && (d.className = Le(d.className, ce.className)), d;
      }(V, S, Ae), se = U.as || Pe, J = {};
      for (var X in U) U[X] === void 0 || X[0] === "$" || X === "as" || X === "theme" && U.theme === Ae || (X === "forwardedAs" ? J.as = U.forwardedAs : $e && !$e(X, se) || (J[X] = U[X], $e || process.env.NODE_ENV !== "development" || yi(X) || Un.has(X) || !Sr.has(se) || (Un.add(X), console.warn('styled-components: it looks like an unknown prop "'.concat(X, '" is being sent through to the DOM, which will likely trigger a React console error. If you would like automatic filtering of unknown props, you can opt-into that behavior via `<StyleSheetManager shouldForwardProp={...}>` (connect an API like `@emotion/is-prop-valid`) or consider using transient props (`$` prefix for automatic filtering.)')))));
      var pe = function(he, ce) {
        var ge = Ht(), ie = he.generateAndInjectStyles(ce, ge.styleSheet, ge.stylis);
        return process.env.NODE_ENV !== "production" && Ur(ie), ie;
      }(de, U);
      process.env.NODE_ENV !== "production" && $.warnTooManyClasses && $.warnTooManyClasses(pe);
      var oe = Le(_e, fe);
      return pe && (oe += " " + pe), U.className && (oe += " " + U.className), J[mr(se) && !Sr.has(se) ? "class" : "className"] = oe, F && (J.ref = F), No(se, J);
    }(_, E, C);
  }
  w.displayName = y;
  var _ = B.forwardRef(w);
  return _.attrs = v, _.componentStyle = I, _.displayName = y, _.shouldForwardProp = R, _.foldedComponentIds = n ? Le(o.foldedComponentIds, o.styledComponentId) : "", _.styledComponentId = g, _.target = n ? o.target : e, Object.defineProperty(_, "defaultProps", { get: function() {
    return this._foldedDefaultProps;
  }, set: function(E) {
    this._foldedDefaultProps = n ? function(C) {
      for (var $ = [], S = 1; S < arguments.length; S++) $[S - 1] = arguments[S];
      for (var F = 0, V = $; F < V.length; F++) $r(C, V[F], !0);
      return C;
    }({}, o.defaultProps, E) : E;
  } }), process.env.NODE_ENV !== "production" && (uo(y, g), _.warnTooManyClasses = /* @__PURE__ */ function(E, C) {
    var $ = {}, S = !1;
    return function(F) {
      if (!S && ($[F] = !0, Object.keys($).length >= 200)) {
        var V = C ? ' with the id of "'.concat(C, '"') : "";
        console.warn("Over ".concat(200, " classes were generated for component ").concat(E).concat(V, `.
`) + `Consider using the attrs method, together with a style object for frequently changed styles.
Example:
  const Component = styled.div.attrs(props => ({
    style: {
      background: props.background,
    },
  }))\`width: 100%;\`

  <Component />`), S = !0, $ = {};
      }
    };
  }(y, g)), Ir(_, function() {
    return ".".concat(_.styledComponentId);
  }), i && xo(_, e, { attrs: !0, componentStyle: !0, displayName: !0, foldedComponentIds: !0, shouldForwardProp: !0, styledComponentId: !0, target: !0 }), _;
}
function Gn(e, t) {
  for (var r = [e[0]], n = 0, o = t.length; n < o; n += 1) r.push(t[n], e[n + 1]);
  return r;
}
var Yn = function(e) {
  return Object.assign(e, { isCss: !0 });
};
function A(e) {
  for (var t = [], r = 1; r < arguments.length; r++) t[r - 1] = arguments[r];
  if (qe(e) || Xe(e)) return Yn(ke(Gn(Yt, ze([e], t, !0))));
  var n = e;
  return t.length === 0 && n.length === 1 && typeof n[0] == "string" ? ke(n) : Yn(ke(Gn(n, t)));
}
function kr(e, t, r) {
  if (r === void 0 && (r = Ve), !t) throw te(1, t);
  var n = function(o) {
    for (var i = [], s = 1; s < arguments.length; s++) i[s - 1] = arguments[s];
    return e(t, r, A.apply(void 0, ze([o], i, !1)));
  };
  return n.attrs = function(o) {
    return kr(e, t, G(G({}, r), { attrs: Array.prototype.concat(r.attrs, o).filter(Boolean) }));
  }, n.withConfig = function(o) {
    return kr(e, t, G(G({}, r), o));
  }, n;
}
var ko = function(e) {
  return kr(xa, e);
}, H = ko;
Sr.forEach(function(e) {
  H[e] = ko(e);
});
var va = function() {
  function e(t, r) {
    this.rules = t, this.componentId = r, this.isStatic = Ro(t), at.registerId(this.componentId + 1);
  }
  return e.prototype.createStyles = function(t, r, n, o) {
    var i = o(zt(ke(this.rules, r, n, o)), ""), s = this.componentId + t;
    n.insertRules(s, s, i);
  }, e.prototype.removeStyles = function(t, r) {
    r.clearRules(this.componentId + t);
  }, e.prototype.renderStyles = function(t, r, n, o) {
    t > 2 && at.registerId(this.componentId + t), this.removeStyles(t, n), this.createStyles(t, r, n, o);
  }, e;
}();
function wa(e) {
  for (var t = [], r = 1; r < arguments.length; r++) t[r - 1] = arguments[r];
  var n = A.apply(void 0, ze([e], t, !1)), o = "sc-global-".concat(ho(JSON.stringify(n))), i = new va(n, o);
  process.env.NODE_ENV !== "production" && uo(o);
  var s = function(u) {
    var l = Ht(), p = B.useContext(Ke), y = B.useRef(l.styleSheet.allocateGSInstance(o)).current;
    return process.env.NODE_ENV !== "production" && B.Children.count(u.children) && console.warn("The global style component ".concat(o, " was given child JSX. createGlobalStyle does not render children.")), process.env.NODE_ENV !== "production" && n.some(function(g) {
      return typeof g == "string" && g.indexOf("@import") !== -1;
    }) && console.warn("Please do not use @import CSS syntax in createGlobalStyle at this time, as the CSSOM APIs we use in production do not handle it well. Instead, we recommend using a library such as react-helmet to inject a typical <link> meta tag to the stylesheet, or simply embedding it manually in your index.html <head> section for a simpler app."), l.styleSheet.server && c(y, u, l.styleSheet, p, l.stylis), B.useLayoutEffect(function() {
      if (!l.styleSheet.server) return c(y, u, l.styleSheet, p, l.stylis), function() {
        return i.removeStyles(y, l.styleSheet);
      };
    }, [y, u, l.styleSheet, p, l.stylis]), null;
  };
  function c(u, l, p, y, g) {
    if (i.isStatic) i.renderStyles(u, qi, p, g);
    else {
      var v = G(G({}, l), { theme: lo(l, y, s.defaultProps) });
      i.renderStyles(u, v, p, g);
    }
  }
  return B.memo(s);
}
var Sa = function() {
  function e() {
    var t = this;
    this._emitSheetCSS = function() {
      var r = t.instance.toString();
      if (!r) return "";
      var n = Er(), o = zt([n && 'nonce="'.concat(n, '"'), "".concat(ve, '="true"'), "".concat(Lt, '="').concat(Ye, '"')].filter(Boolean), " ");
      return "<style ".concat(o, ">").concat(r, "</style>");
    }, this.getStyleTags = function() {
      if (t.sealed) throw te(2);
      return t._emitSheetCSS();
    }, this.getStyleElement = function() {
      var r;
      if (t.sealed) throw te(2);
      var n = t.instance.toString();
      if (!n) return [];
      var o = ((r = {})[ve] = "", r[Lt] = Ye, r.dangerouslySetInnerHTML = { __html: n }, r), i = Er();
      return i && (o.nonce = i), [B.createElement("style", G({}, o, { key: "sc-0-0" }))];
    }, this.seal = function() {
      t.sealed = !0;
    }, this.instance = new at({ isServer: !0 }), this.sealed = !1;
  }
  return e.prototype.collectStyles = function(t) {
    if (this.sealed) throw te(2);
    return B.createElement(_o, { sheet: this.instance }, t);
  }, e.prototype.interleaveWithNodeStream = function(t) {
    throw te(3);
  }, e;
}();
process.env.NODE_ENV !== "production" && typeof navigator < "u" && navigator.product === "ReactNative" && console.warn(`It looks like you've imported 'styled-components' on React Native.
Perhaps you're looking to import 'styled-components/native'?
Read more about this at https://www.styled-components.com/docs/basics#react-native`);
var Ot = "__sc-".concat(ve, "__");
process.env.NODE_ENV !== "production" && process.env.NODE_ENV !== "test" && typeof window < "u" && (window[Ot] || (window[Ot] = 0), window[Ot] === 1 && console.warn(`It looks like there are several instances of 'styled-components' initialized in this application. This may cause dynamic styles to not render properly, errors during the rehydration process, a missing theme prop, and makes your application bigger without good reason.

See https://s-c.sh/2BAXzed for more info.`), window[Ot] += 1);
function ys({ children: e }) {
  const [t] = Pr(() => new Sa());
  return pi.useServerInsertedHTML(() => {
    const r = t.getStyleElement();
    return t.instance.clearTag(), /* @__PURE__ */ x.jsx(x.Fragment, { children: r });
  }), typeof window < "u" ? /* @__PURE__ */ x.jsx(x.Fragment, { children: e }) : /* @__PURE__ */ x.jsx(_o, { sheet: t.instance, enableVendorPrefixes: !0, children: e });
}
const _a = (e) => wa`
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
function $a({ ...e }) {
  const t = Mr();
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
function Ea({ ...e }) {
  const t = Mr();
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
function Ra({ ...e }) {
  const t = Mr();
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
const zr = {
  xs: 0,
  sm: 576,
  md: 768,
  lg: 992,
  xl: 1200,
  xxl: 1440,
  xxxl: 1920
};
function N(e) {
  return `@media screen and (min-width: ${zr[e]}px)`;
}
const Po = {
  maxWidth: { xs: "1280px", xxxl: "1440px" },
  padding: { xs: "20px", lg: "40px" },
  radius: { xs: "6px", lg: "12px", xl: "30px" },
  gridGap: { xs: "20px", lg: "40px" }
}, ka = {
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
}, Pa = {
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
}, Oa = {
  xs: "0px 4px 4px 0px rgba(18, 18, 18, 0.04), 0px 1px 3px 0px rgba(39, 41, 45, 0.02)",
  sm: "0px 4px 4px 0px rgba(18, 18, 18, 0.08), 0px 1px 3px 0px rgba(39, 41, 45, 0.04)",
  md: "0px 8px 8px 0px rgba(18, 18, 18, 0.16), 0px 2px 3px 0px rgba(39, 41, 45, 0.06)",
  lg: "0px 16px 24px 0px rgba(18, 18, 18, 0.20), 0px 2px 3px 0px rgba(39, 41, 45, 0.08)",
  xl: "0px 24px 32px 0px rgba(18, 18, 18, 0.24), 0px 2px 3px 0px rgba(39, 41, 45, 0.12)"
}, Aa = {
  xs: "0px 4px 4px 0px rgba(255, 255, 255, 0.04), 0px 1px 3px 0px rgba(255, 255, 255, 0.02)",
  sm: "0px 4px 4px 0px rgba(255, 255, 255, 0.08), 0px 1px 3px 0px rgba(255, 255, 255, 0.04)",
  md: "0px 8px 8px 0px rgba(255, 255, 255, 0.16), 0px 2px 3px 0px rgba(255, 255, 255, 0.06)",
  lg: "0px 16px 24px 0px rgba(255, 255, 255, 0.20), 0px 2px 3px 0px rgba(255, 255, 255, 0.08)",
  xl: "0px 24px 32px 0px rgba(255, 255, 255, 0.24), 0px 2px 3px 0px rgba(255, 255, 255, 0.12)"
}, Oo = {
  text: "Inter",
  head: "Inter",
  mono: "monospace"
}, Ao = {
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
}, To = {
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
}, ct = {
  breakpoints: zr,
  spacing: Po,
  colors: ka,
  shadows: Oa,
  fonts: Oo,
  fontSizes: Ao,
  lineHeights: To,
  isDark: !1
}, ms = {
  breakpoints: zr,
  spacing: Po,
  colors: Pa,
  shadows: Aa,
  fonts: Oo,
  fontSizes: Ao,
  lineHeights: To,
  isDark: !0
}, xe = A`
  box-sizing: border-box;
  appearance: none;
  border: none;
  background: none;
  padding: 0;
  margin: 0;
  cursor: pointer;
  outline: none;
`, qr = A`
  cursor: text;
  min-width: 100px;
`, we = (e) => {
  if (e)
    return A`
      width: 100%;
    `;
}, He = (e, t, r) => {
  if (e)
    return A`
      border-color: ${r == null ? void 0 : r.colors.error};
    `;
  if (t)
    return A`
      border-color: ${r == null ? void 0 : r.colors.success};
    `;
}, Hr = (e) => e === "big" ? A`
      height: 60px;
    ` : A`
    height: 50px;
  `, ee = (e, t) => A`
  ${N(e)} {
    gap: ${t === "none" ? "0" : `${t}px`};
  }
`, Ce = (e, t) => A`
  ${N(e)} {
    grid-template-columns: repeat(${t || 3}, minmax(0, 1fr));
  }
`, je = (e, t) => A`
  ${N(e)} {
    grid-column: span ${t};
  }
`, De = (e, t) => A`
  ${N(e)} {
    padding: ${t === "none" ? "0" : `${t}px`};
  }
`, Ne = (e, t) => A`
  ${N(e)} {
    justify-content: ${t && `${t}`};
  }
`, bs = (e) => A`
  font-size: ${e.fontSizes.hero1.xs};
  line-height: ${e.lineHeights.hero1.xs};

  ${N("lg")} {
    font-size: ${e.fontSizes.hero1.lg};
    line-height: ${e.lineHeights.hero1.lg};
  }
`, xs = (e) => A`
  font-size: ${e.fontSizes.hero2.xs};
  line-height: ${e.lineHeights.hero2.xs};

  ${N("lg")} {
    font-size: ${e.fontSizes.hero2.lg};
    line-height: ${e.lineHeights.hero2.lg};
  }
`, vs = (e) => A`
  font-size: ${e.fontSizes.hero3.xs};
  line-height: ${e.lineHeights.hero3.xs};

  ${N("lg")} {
    font-size: ${e.fontSizes.hero3.lg};
    line-height: ${e.lineHeights.hero3.lg};
  }
`, ws = (e) => A`
  font-size: ${e.fontSizes.h1.xs};
  line-height: ${e.lineHeights.h1.xs};

  ${N("lg")} {
    font-size: ${e.fontSizes.h1.lg};
    line-height: ${e.lineHeights.h1.lg};
  }
`, Ss = (e) => A`
  font-size: ${e.fontSizes.h2.xs};
  line-height: ${e.lineHeights.h2.xs};

  ${N("lg")} {
    font-size: ${e.fontSizes.h2.lg};
    line-height: ${e.lineHeights.h2.lg};
  }
`, _s = (e) => A`
  font-size: ${e.fontSizes.h3.xs};
  line-height: ${e.lineHeights.h3.xs};

  ${N("lg")} {
    font-size: ${e.fontSizes.h3.lg};
    line-height: ${e.lineHeights.h3.lg};
  }
`, $s = (e) => A`
  font-size: ${e.fontSizes.h4.xs};
  line-height: ${e.lineHeights.h4.xs};

  ${N("lg")} {
    font-size: ${e.fontSizes.h4.lg};
    line-height: ${e.lineHeights.h4.lg};
  }
`, Es = (e) => A`
  font-size: ${e.fontSizes.h5.xs};
  line-height: ${e.lineHeights.h5.xs};

  ${N("lg")} {
    font-size: ${e.fontSizes.h5.lg};
    line-height: ${e.lineHeights.h5.lg};
  }
`, Rs = (e) => A`
  font-size: ${e.fontSizes.h6.xs};
  line-height: ${e.lineHeights.h6.xs};

  ${N("lg")} {
    font-size: ${e.fontSizes.h6.lg};
    line-height: ${e.lineHeights.h6.lg};
  }
`, ks = (e) => A`
  font-size: ${e.fontSizes.text.xs};
  line-height: ${e.lineHeights.text.xs};

  ${N("lg")} {
    font-size: ${e.fontSizes.text.lg};
    line-height: ${e.lineHeights.text.lg};
  }
`, Ps = (e) => A`
  font-size: ${e.fontSizes.strong.xs};
  line-height: ${e.lineHeights.strong.xs};

  ${N("lg")} {
    font-size: ${e.fontSizes.strong.lg};
    line-height: ${e.lineHeights.strong.lg};
  }
`, Os = (e) => A`
  font-size: ${e.fontSizes.small.xs};
  line-height: ${e.lineHeights.small.xs};

  ${N("lg")} {
    font-size: ${e.fontSizes.small.lg};
    line-height: ${e.lineHeights.small.lg};
  }
`, As = (e) => A`
  font-size: ${e.fontSizes.blockquote.xs};
  line-height: ${e.lineHeights.blockquote.xs};

  ${N("lg")} {
    font-size: ${e.fontSizes.blockquote.lg};
    line-height: ${e.lineHeights.blockquote.lg};
  }
`, Ts = (e) => A`
  font-size: ${e.fontSizes.code.xs};
  line-height: ${e.lineHeights.code.xs};

  ${N("lg")} {
    font-size: ${e.fontSizes.code.lg};
    line-height: ${e.lineHeights.code.lg};
  }
`, Cs = (e) => A`
  font-size: ${e.fontSizes.button.xs};
  line-height: ${e.lineHeights.button.xs};

  ${N("lg")} {
    font-size: ${e.fontSizes.button.lg};
    line-height: ${e.lineHeights.button.lg};
  }
`, js = (e) => A`
  font-size: ${e.fontSizes.buttonBig.xs};
  line-height: ${e.lineHeights.buttonBig.xs};

  ${N("lg")} {
    font-size: ${e.fontSizes.buttonBig.lg};
    line-height: ${e.lineHeights.buttonBig.lg};
  }
`, Ds = (e) => A`
  font-size: ${e.fontSizes.input.xs};
  line-height: ${e.lineHeights.input.xs};

  ${N("lg")} {
    font-size: ${e.fontSizes.input.lg};
    line-height: ${e.lineHeights.input.lg};
  }
`, Ns = (e) => A`
  font-size: ${e.fontSizes.inputBig.xs};
  line-height: ${e.lineHeights.inputBig.xs};

  ${N("lg")} {
    font-size: ${e.fontSizes.inputBig.lg};
    line-height: ${e.lineHeights.inputBig.lg};
  }
`, Ta = Io({
  setTheme: null
});
function Is({
  children: e,
  theme: t,
  themeDark: r
}) {
  const [n, o] = Pr(t);
  Vn(() => {
    if (!r) return o(t);
    localStorage.theme === "dark" || !("theme" in localStorage) && window.matchMedia("(prefers-color-scheme: dark)").matches ? (document.documentElement.classList.add("dark"), o(r)) : (document.documentElement.classList.remove("dark"), o(t));
  }, []);
  const i = _a(n);
  return /* @__PURE__ */ x.jsx(ba, { theme: n, children: /* @__PURE__ */ x.jsxs(Ta.Provider, { value: { setTheme: o }, children: [
    /* @__PURE__ */ x.jsx(i, {}),
    e
  ] }) });
}
const Ca = H.div`
  margin: auto;
  width: 100%;
  max-width: ${({ theme: e, $fluid: t }) => t ? "100%" : e.spacing.maxWidth.xs};
  ${({ $textAlign: e }) => e && `text-align: ${e}`};
  padding: ${({ $padding: e, theme: t }) => e && `${e}px` || t.spacing.padding.xs};

  ${N("lg")} {
    padding: ${({ $padding: e, theme: t }) => e && `${e}px` || t.spacing.padding.lg};
  }

  ${N("xxxl")} {
    max-width: ${({ theme: e, $fluid: t }) => t ? "100%" : e.spacing.maxWidth.xxxl};
  }

  ${({ $xsPadding: e }) => e && De("xs", e)}
  ${({ $smPadding: e }) => e && De("sm", e)}
	${({ $mdPadding: e }) => e && De("md", e)}
	${({ $lgPadding: e }) => e && De("lg", e)}
	${({ $xlPadding: e }) => e && De("xl", e)}
	${({ $xxlPadding: e }) => e && De("xxl", e)}
	${({ $xxxlPadding: e }) => e && De("xxxl", e)}
`;
function ja({ theme: e = ct, ...t }, r) {
  return /* @__PURE__ */ x.jsx(Ca, { ...t, theme: e, ref: r, children: t.children });
}
const Da = re(ja), Na = H(Da)`
  background: ${({ theme: e }) => e.colors.light};
  border-radius: ${({ theme: e }) => e.spacing.radius.lg};
  border: solid 1px ${({ theme: e }) => e.colors.grayLight};
`;
function Ia({ theme: e = ct, ...t }, r) {
  return /* @__PURE__ */ x.jsx(Na, { ...t, theme: e, ref: r, children: t.children });
}
const Ls = re(Ia), La = (e, t, r, n, o, i) => A`
  ${xe};
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

  ${!i && t === "primary" && A`
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

  ${!i && t === "secondary" && A`
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

	${!i && t === "tertiary" && A`
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

	${Hr(r)}

	${r === "big" ? `font-size: ${e.fontSizes.buttonBig.lg};
			line-height: ${e.lineHeights.buttonBig.lg};
      padding: 18px 30px;
	` : `font-size: ${e.fontSizes.button.lg};
			line-height: ${e.lineHeights.button.lg};`}

	${i && `
		cursor: not-allowed;
		background: ${e.colors.grayLight};
    border: solid 2px ${e.colors.grayLight};
		color: ${e.colors.gray};
	`}

	${o && "width: 100%;"}
`, Ma = H.button`
  ${({ theme: e, $variant: t, $size: r, $outline: n, $fullWidth: o, disabled: i }) => La(e, t, r, n, o, i)}
`;
function za({ $variant: e = "primary", ...t }, r) {
  return /* @__PURE__ */ x.jsxs(Ma, { $variant: e, ...t, ref: r, children: [
    t.$iconPosition !== "right" && t.$icon && t.$icon,
    t.children,
    t.$iconPosition === "right" && t.$icon && t.$icon
  ] });
}
const Ms = re(za), qa = H.div`
  ${({ $span: e }) => e && `
		grid-column: span ${e};
	`}

  ${({ $xsSpan: e }) => e && je("xs", e)}
	${({ $smSpan: e }) => e && je("sm", e)}
	${({ $mdSpan: e }) => e && je("md", e)}
	${({ $lgSpan: e }) => e && je("lg", e)}
	${({ $xlSpan: e }) => e && je("xl", e)}
	${({ $xxlSpan: e }) => e && je("xxl", e)}
	${({ $xxxlSpan: e }) => e && je("xxxl", e)}
`;
function Ha({ theme: e = ct, ...t }, r) {
  return /* @__PURE__ */ x.jsx(qa, { ...t, theme: e, ref: r, children: t.children });
}
const zs = re(Ha), Ba = H.div`
  display: flex;
  justify-content: ${({ $justifyContent: e }) => e || "flex-start"};
  flex-wrap: ${({ $wrap: e }) => e || "wrap"};
  gap: ${({ $gap: e, theme: t }) => e && `${e}px` || t.spacing.gridGap.xs};
  flex-direction: ${({ $direction: e }) => e || "row"};

  ${N("lg")} {
    gap: ${({ $gap: e, theme: t }) => e && `${e}px` || t.spacing.gridGap.lg};
  }

  ${({ $xsGap: e }) => e && ee("xs", e)}
  ${({ $xsJustifyContent: e }) => e && Ne("xs", e)}
	${({ $smGap: e }) => e && ee("sm", e)}
	${({ $smJustifyContent: e }) => e && Ne("sm", e)}
	${({ $mdGap: e }) => e && ee("md", e)}
	${({ $mdJustifyContent: e }) => e && Ne("md", e)}
	${({ $lgGap: e }) => e && ee("lg", e)}
	${({ $lgJustifyContent: e }) => e && Ne("lg", e)}
	${({ $xlGap: e }) => e && ee("xl", e)}
	${({ $xlJustifyContent: e }) => e && Ne("xl", e)}
	${({ $xxlGap: e }) => e && ee("xxl", e)}
	${({ $xxlJustifyContent: e }) => e && Ne("xxl", e)}
	${({ $xxxlGap: e }) => e && ee("xxxl", e)}
	${({ $xxxlJustifyContent: e }) => e && Ne("xxxl", e)}
  ${({ $fullWidth: e }) => we(!!e)}
`;
function Wa({ theme: e = ct, ...t }, r) {
  return /* @__PURE__ */ x.jsx(Ba, { ...t, theme: e, ref: r, children: t.children });
}
const qs = re(Wa), Fa = H.div`
  width: 100%;
  display: grid;
  grid-template-columns: ${({ $cols: e }) => `repeat(${e || 3}, minmax(0, 1fr))`};
  gap: ${({ $gap: e, theme: t }) => e && `${e}px` || t.spacing.gridGap.xs};

  ${N("lg")} {
    gap: ${({ $gap: e, theme: t }) => e && `${e}px` || t.spacing.gridGap.lg};
  }

  ${({ $xsGap: e }) => e && ee("xs", e)}
  ${({ $smGap: e }) => e && ee("sm", e)}
	${({ $mdGap: e }) => e && ee("md", e)}
	${({ $lgGap: e }) => e && ee("lg", e)}
	${({ $xlGap: e }) => e && ee("xl", e)}
	${({ $xxlGap: e }) => e && ee("xxl", e)}
	${({ $xxxlGap: e }) => e && ee("xxxl", e)}

	${({ $xsCols: e }) => e && Ce("xs", e)}
	${({ $smCols: e }) => e && Ce("sm", e)}
	${({ $mdCols: e }) => e && Ce("md", e)}
	${({ $lgCols: e }) => e && Ce("lg", e)}
	${({ $xlCols: e }) => e && Ce("xl", e)}
	${({ $xxlCols: e }) => e && Ce("xxl", e)}
	${({ $xxxlCols: e }) => e && Ce("xxxl", e)}
`;
function Ua({ theme: e = ct, ...t }, r) {
  return /* @__PURE__ */ x.jsx(Fa, { ...t, theme: e, ref: r, children: t.children });
}
const Hs = re(Ua), st = H.span`
  display: inline-flex;
  flex-wrap: ${({ type: e }) => e === "checkbox" || e === "radio" ? "nowrap" : "wrap"};
  align-items: center;

  ${({ $label: e }) => e && A`
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

  ${({ $fullWidth: e }) => we(!!e)}
`, Je = H.label`
  display: inline-block;
  color: ${({ theme: e }) => e.colors.grayDark};
  font-size: ${({ theme: e }) => e.fontSizes.text.lg};
  line-height: ${({ theme: e }) => e.lineHeights.text.lg};
  margin-top: ${({ type: e }) => e === "checkbox" || e === "radio" ? "-2px" : "0"};
`, Ga = H.input`
  ${xe};
  ${qr};
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

  ${({ $size: e }) => Hr(e)}

  ${({ $size: e, theme: t }) => e === "big" ? `font-size: ${t.fontSizes.inputBig.lg};
			line-height: ${t.lineHeights.inputBig.lg};
	` : `font-size: ${t.fontSizes.input.lg};
			line-height: ${t.lineHeights.input.lg};`}

	${({ $error: e, $success: t, theme: r }) => He(!!e, !!t, r)}

	${({ disabled: e, theme: t }) => e && `cursor: not-allowed;
		background: ${t.colors.grayLight};
		border-color: ${t.colors.gray};
		color: ${t.colors.gray};
	`}

	${({ $fullWidth: e }) => we(!!e)}
`, Ya = H.span`
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
`, Va = H.input`
  ${xe};
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
    border: solid 2px ${t.colors.gray};
		color: ${t.colors.gray};
	`}

	${({ $error: e, $success: t, theme: r }) => He(!!e, !!t, r)}

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
`, Xa = H.span`
  position: relative;
  ${({ $fullWidth: e }) => we(!!e)};

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

  ${({ $icon: e, $iconPosition: t }) => e && t === "right" ? A`
          & svg {
            right: 16px;
          }

          & input {
            padding-right: 50px;
          }
        ` : A`
          & svg {
            left: 16px;
          }

          & svg ~ input {
            padding-left: 50px;
          }
        `}
`;
function Ka({ ...e }, t) {
  return e.type === "checkbox" || e.type === "radio" ? /* @__PURE__ */ x.jsxs(st, { $fullWidth: e.$fullWidth, type: e.type, $label: e.$label, children: [
    /* @__PURE__ */ x.jsxs(Ya, { children: [
      /* @__PURE__ */ x.jsx(Va, { ...e, ref: t }),
      !e.disabled && e.type === "checkbox" ? /* @__PURE__ */ x.jsx($a, {}) : /* @__PURE__ */ x.jsx("em", {})
    ] }),
    e.$label && /* @__PURE__ */ x.jsx(Je, { htmlFor: e.id, ...e, children: e.$label })
  ] }) : /* @__PURE__ */ x.jsxs(st, { $fullWidth: e.$fullWidth, type: e.type, $label: e.$label, children: [
    e.$label && /* @__PURE__ */ x.jsx(Je, { htmlFor: e.id, children: e.$label }),
    /* @__PURE__ */ x.jsxs(
      Xa,
      {
        $fullWidth: e.$fullWidth,
        $iconPosition: e.$iconPosition,
        $icon: e.$icon,
        children: [
          e.$iconPosition !== "right" && e.$icon && e.$icon,
          /* @__PURE__ */ x.jsx(Ga, { ...e, ref: t }),
          e.$iconPosition === "right" && e.$icon && e.$icon,
          e.type === "date" && /* @__PURE__ */ x.jsx(Ra, { className: "icon-calendar" })
        ]
      }
    )
  ] });
}
const Bs = re(Ka), Co = (e) => `max-width: ${e}px;`;
function Ja(e) {
  return Object.keys(e).filter((t) => t.startsWith("$")).map((t) => {
    const r = t.substring(1);
    return e[t] && N(r) + `{ ${Co(e[t])} }`;
  }).join("");
}
const Za = H.div`
  display: block;
  margin: ${({ $m0: e }) => e ? "0" : "auto"};

  ${({ $size: e }) => `
		${e && Co(e)};
	`}
  ${(e) => Ja(e)}
`;
function Qa({ ...e }, t) {
  return /* @__PURE__ */ x.jsx(Za, { ...e, ref: t, children: e.children });
}
const Ws = re(Qa), es = H.span`
  display: inline-flex;
  flex-wrap: ${({ type: e }) => e === "checkbox" || e === "radio" ? "fprnowrap" : "wrap"};
  gap: 10px;
  align-items: center;

  ${({ $fullWidth: e }) => we(!!e)}
`, ts = H.input`
  ${xe};
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
    ${({ $error: e, $success: t, theme: r }) => He(!!e, !!t, r)}
  }

  &::-moz-range-track {
    width: 100%;
    cursor: pointer;
    border-radius: ${({ theme: e }) => e.spacing.radius.xl};
    border: solid 2px ${({ theme: e }) => e.colors.grayLight};
    box-shadow: 0 0 0 0 ${({ theme: e }) => e.colors.primaryLight};
    transition: all 0.3s ease;
    ${({ $error: e, $success: t, theme: r }) => He(!!e, !!t, r)}
  }

  &::-webkit-slider-thumb {
    ${xe};
    background: ${({ theme: e }) => e.colors.primary};
    border: 0 solid transparent;
    border-radius: 50%;
    transition: all 0.3s ease;
  }

  &::-moz-range-thumb {
    ${xe};
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

  ${({ $fullWidth: e }) => we(!!e)}

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
function rs({ ...e }, t) {
  return /* @__PURE__ */ x.jsxs(es, { $fullWidth: e.$fullWidth, children: [
    e.$label && /* @__PURE__ */ x.jsx(Je, { htmlFor: e.id, children: e.$label }),
    /* @__PURE__ */ x.jsx(ts, { ...e, type: "range", ref: t })
  ] });
}
const Fs = re(rs), ns = H.select`
  ${xe};
  ${qr};
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

  ${({ $size: e }) => Hr(e)}

  ${({ $size: e, theme: t }) => e === "big" ? `font-size: ${t.fontSizes.inputBig.lg};` : `font-size: ${t.fontSizes.input.lg};`}

	${({ $error: e, $success: t, theme: r }) => He(!!e, !!t, r)}

	${({ disabled: e, theme: t }) => e && `cursor: not-allowed;
		background: ${t.colors.grayLight};
		border-color: ${t.colors.gray};
		color: ${t.colors.gray};
	`}

	${({ $fullWidth: e }) => we(!!e)}
`, os = H.span`
  position: relative;
  ${({ $fullWidth: e }) => we(!!e)}

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
function is({ ...e }, t) {
  return /* @__PURE__ */ x.jsxs(st, { $fullWidth: e.$fullWidth, $label: e.$label, children: [
    e.$label && /* @__PURE__ */ x.jsx(Je, { htmlFor: e.id, children: e.$label }),
    /* @__PURE__ */ x.jsxs(os, { $fullWidth: e.$fullWidth, children: [
      /* @__PURE__ */ x.jsx(ns, { ...e, ref: t, children: e.children }),
      /* @__PURE__ */ x.jsx(Ea, {})
    ] })
  ] });
}
const Us = re(is), jo = (e, t) => t ? `display: inline-block;
			max-height: 0;
			min-width: ${e}px;
			max-width: ${e}px;` : `display: block;
			min-height: ${e}px;
			max-height: ${e}px;`;
function as(e) {
  return Object.keys(e).filter((t) => t.startsWith("$")).map((t) => {
    const r = t.substring(1);
    return e[t] && N(r) + `{ ${jo(e[t], e.$horizontal || !1)} }`;
  }).join("");
}
const ss = H.span`
  ${({ $horizontal: e, $size: t }) => `
		${t && t !== "none" && jo(t, e || !1)};
		${t === "none" && "display: none;"};
	`}
  ${(e) => as(e)}
`;
function cs({ ...e }, t) {
  return /* @__PURE__ */ x.jsx(ss, { ...e, ref: t });
}
const Gs = re(cs), us = H.textarea`
  ${xe};
  ${qr};
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

  ${({ $error: e, $success: t, theme: r }) => He(!!e, !!t, r)}

	${({ disabled: e, theme: t }) => e && `cursor: not-allowed;
		background: ${t.colors.grayLight};
		border-color: ${t.colors.gray};
		color: ${t.colors.gray};
	`}

	${({ $fullWidth: e }) => we(!!e)}
`;
function ls({ ...e }, t) {
  return /* @__PURE__ */ x.jsxs(st, { $fullWidth: e.$fullWidth, $label: e.$label, children: [
    e.$label && /* @__PURE__ */ x.jsx(Je, { htmlFor: e.id, $label: e.$label, children: e.$label }),
    /* @__PURE__ */ x.jsx(us, { ...e, ref: t, children: e.children })
  ] });
}
const Ys = re(ls), ds = H.span`
  display: inline-block;
  margin: auto 0;
  position: relative;
  vertical-align: middle;
`, fs = H.span`
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

  ${({ $error: e, $success: t, theme: r }) => He(!!e, !!t, r)}

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
`, ps = H.input`
  ${xe};
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
function hs({ type: e = "checkbox", ...t }, r) {
  return /* @__PURE__ */ x.jsxs(st, { $fullWidth: t.$fullWidth, $label: t.$label, children: [
    /* @__PURE__ */ x.jsxs(ds, { children: [
      /* @__PURE__ */ x.jsx(ps, { ...t, type: e, ref: r }),
      /* @__PURE__ */ x.jsx(
        fs,
        {
          $error: t.$error,
          $success: t.$success,
          className: "fake-toggle",
          $size: t.$size
        }
      )
    ] }),
    t.$label && /* @__PURE__ */ x.jsx(Je, { htmlFor: t.id, children: t.$label })
  ] });
}
const Vs = re(hs);
export {
  Ls as Box,
  Ms as Button,
  Is as CherryThemeProvider,
  zs as Col,
  Da as Container,
  qs as Flex,
  _a as GlobalStyles,
  Hs as Grid,
  Ea as IconArrow,
  Ra as IconCalendar,
  $a as IconCheck,
  Bs as Input,
  Ws as MaxWidth,
  Fs as Range,
  Us as Select,
  Gs as Space,
  ys as StyledComponentsRegistry,
  os as StyledIconWrapper,
  st as StyledInputWrapper,
  Je as StyledLabel,
  Ys as Textarea,
  Ta as ThemeContext,
  Vs as Toggle,
  zr as breakpoints,
  La as buttonStyles,
  ka as colors,
  Pa as colorsDark,
  Ao as fontSizes,
  Oo as fonts,
  Hr as formElementHeightStyles,
  we as fullWidthStyles,
  je as generateColSpanStyles,
  Ce as generateColsStyles,
  ee as generateGapStyles,
  Ne as generateJustifyContentStyles,
  De as generatePaddingStyles,
  To as lineHeights,
  N as mq,
  xe as resetButton,
  qr as resetInput,
  Oa as shadows,
  Aa as shadowsDark,
  Po as spacing,
  He as statusBorderStyles,
  As as styledBlockquote,
  Cs as styledButton,
  js as styledButtonBig,
  Ts as styledCode,
  ws as styledH1,
  Ss as styledH2,
  _s as styledH3,
  $s as styledH4,
  Es as styledH5,
  Rs as styledH6,
  bs as styledHero1,
  xs as styledHero2,
  vs as styledHero3,
  Ds as styledInput,
  Ns as styledInputBig,
  Os as styledSmall,
  Ps as styledStrong,
  ks as styledText,
  ct as theme,
  ms as themeDark
};
