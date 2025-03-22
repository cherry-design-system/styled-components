import B, { useContext as Zn, useState as jr, useMemo as Nt, useEffect as Qn, useRef as zo, useDebugValue as Yr, createElement as qo, createContext as Ho, forwardRef as re } from "react";
function Bo(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var ft = { exports: {} }, ot = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Vr;
function Wo() {
  if (Vr) return ot;
  Vr = 1;
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
  return ot.Fragment = t, ot.jsx = r, ot.jsxs = r, ot;
}
var it = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Xr;
function Fo() {
  return Xr || (Xr = 1, process.env.NODE_ENV !== "production" && function() {
    function e(a) {
      if (a == null) return null;
      if (typeof a == "function")
        return a.$$typeof === We ? null : a.displayName || a.name || null;
      if (typeof a == "string") return a;
      switch (a) {
        case S:
          return "Fragment";
        case T:
          return "Portal";
        case K:
          return "Profiler";
        case E:
          return "StrictMode";
        case Ee:
          return "Suspense";
        case fe:
          return "SuspenseList";
      }
      if (typeof a == "object")
        switch (typeof a.tag == "number" && console.error(
          "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
        ), a.$$typeof) {
          case ce:
            return (a.displayName || "Context") + ".Provider";
          case G:
            return (a._context.displayName || "Context") + ".Consumer";
          case Te:
            var m = a.render;
            return a = a.displayName, a || (a = m.displayName || m.name || "", a = a !== "" ? "ForwardRef(" + a + ")" : "ForwardRef"), a;
          case Se:
            return m = a.displayName || null, m !== null ? m : e(a.type) || "Memo";
          case Ae:
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
        var b = m.error, C = typeof Symbol == "function" && Symbol.toStringTag && a[Symbol.toStringTag] || a.constructor.name || "Object";
        return b.call(
          m,
          "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
          C
        ), t(a);
      }
    }
    function n() {
    }
    function o() {
      if (ie === 0) {
        he = console.log, le = console.info, ge = console.warn, ae = console.error, ne = console.group, $e = console.groupCollapsed, f = console.groupEnd;
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
      ie++;
    }
    function i() {
      if (ie--, ie === 0) {
        var a = { configurable: !0, enumerable: !0, writable: !0 };
        Object.defineProperties(console, {
          log: J({}, a, { value: he }),
          info: J({}, a, { value: le }),
          warn: J({}, a, { value: ge }),
          error: J({}, a, { value: ae }),
          group: J({}, a, { value: ne }),
          groupCollapsed: J({}, a, { value: $e }),
          groupEnd: J({}, a, { value: f })
        });
      }
      0 > ie && console.error(
        "disabledDepth fell below zero. This is a bug in React. Please file an issue."
      );
    }
    function s(a) {
      if (d === void 0)
        try {
          throw Error();
        } catch (b) {
          var m = b.stack.trim().match(/\n( *(at )?)/);
          d = m && m[1] || "", y = -1 < b.stack.indexOf(`
    at`) ? " (<anonymous>)" : -1 < b.stack.indexOf("@") ? "@unknown:0:0" : "";
        }
      return `
` + d + a + y;
    }
    function c(a, m) {
      if (!a || j) return "";
      var b = L.get(a);
      if (b !== void 0) return b;
      j = !0, b = Error.prepareStackTrace, Error.prepareStackTrace = void 0;
      var C = null;
      C = W.H, W.H = null, o();
      try {
        var X = {
          DetermineComponentFrameRoot: function() {
            try {
              if (m) {
                var ke = function() {
                  throw Error();
                };
                if (Object.defineProperty(ke.prototype, "props", {
                  set: function() {
                    throw Error();
                  }
                }), typeof Reflect == "object" && Reflect.construct) {
                  try {
                    Reflect.construct(ke, []);
                  } catch (be) {
                    var dt = be;
                  }
                  Reflect.construct(a, [], ke);
                } else {
                  try {
                    ke.call();
                  } catch (be) {
                    dt = be;
                  }
                  a.call(ke.prototype);
                }
              } else {
                try {
                  throw Error();
                } catch (be) {
                  dt = be;
                }
                (ke = a()) && typeof ke.catch == "function" && ke.catch(function() {
                });
              }
            } catch (be) {
              if (be && dt && typeof be.stack == "string")
                return [be.stack, dt.stack];
            }
            return [null, null];
          }
        };
        X.DetermineComponentFrameRoot.displayName = "DetermineComponentFrameRoot";
        var z = Object.getOwnPropertyDescriptor(
          X.DetermineComponentFrameRoot,
          "name"
        );
        z && z.configurable && Object.defineProperty(
          X.DetermineComponentFrameRoot,
          "name",
          { value: "DetermineComponentFrameRoot" }
        );
        var k = X.DetermineComponentFrameRoot(), me = k[0], Ue = k[1];
        if (me && Ue) {
          var Z = me.split(`
`), je = Ue.split(`
`);
          for (k = z = 0; z < Z.length && !Z[z].includes(
            "DetermineComponentFrameRoot"
          ); )
            z++;
          for (; k < je.length && !je[k].includes(
            "DetermineComponentFrameRoot"
          ); )
            k++;
          if (z === Z.length || k === je.length)
            for (z = Z.length - 1, k = je.length - 1; 1 <= z && 0 <= k && Z[z] !== je[k]; )
              k--;
          for (; 1 <= z && 0 <= k; z--, k--)
            if (Z[z] !== je[k]) {
              if (z !== 1 || k !== 1)
                do
                  if (z--, k--, 0 > k || Z[z] !== je[k]) {
                    var nt = `
` + Z[z].replace(
                      " at new ",
                      " at "
                    );
                    return a.displayName && nt.includes("<anonymous>") && (nt = nt.replace("<anonymous>", a.displayName)), typeof a == "function" && L.set(a, nt), nt;
                  }
                while (1 <= z && 0 <= k);
              break;
            }
        }
      } finally {
        j = !1, W.H = C, i(), Error.prepareStackTrace = b;
      }
      return Z = (Z = a ? a.displayName || a.name : "") ? s(Z) : "", typeof a == "function" && L.set(a, Z), Z;
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
        case Ee:
          return s("Suspense");
        case fe:
          return s("SuspenseList");
      }
      if (typeof a == "object")
        switch (a.$$typeof) {
          case Te:
            return a = c(a.render, !1), a;
          case Se:
            return u(a.type);
          case Ae:
            m = a._payload, a = a._init;
            try {
              return u(a(m));
            } catch {
            }
        }
      return "";
    }
    function l() {
      var a = W.A;
      return a === null ? null : a.getOwner();
    }
    function p(a) {
      if (ue.call(a, "key")) {
        var m = Object.getOwnPropertyDescriptor(a, "key").get;
        if (m && m.isReactWarning) return !1;
      }
      return a.key !== void 0;
    }
    function g(a, m) {
      function b() {
        ye || (ye = !0, console.error(
          "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
          m
        ));
      }
      b.isReactWarning = !0, Object.defineProperty(a, "key", {
        get: b,
        configurable: !0
      });
    }
    function h() {
      var a = e(this.type);
      return Fe[a] || (Fe[a] = !0, console.error(
        "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
      )), a = this.props.ref, a !== void 0 ? a : null;
    }
    function x(a, m, b, C, X, z) {
      return b = z.ref, a = {
        $$typeof: R,
        type: a,
        key: m,
        props: z,
        _owner: X
      }, (b !== void 0 ? b : null) !== null ? Object.defineProperty(a, "ref", {
        enumerable: !1,
        get: h
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
    function $(a, m, b, C, X, z) {
      if (typeof a == "string" || typeof a == "function" || a === S || a === K || a === E || a === Ee || a === fe || a === rt || typeof a == "object" && a !== null && (a.$$typeof === Ae || a.$$typeof === Se || a.$$typeof === ce || a.$$typeof === G || a.$$typeof === Te || a.$$typeof === V || a.getModuleId !== void 0)) {
        var k = m.children;
        if (k !== void 0)
          if (C)
            if (pe(k)) {
              for (C = 0; C < k.length; C++)
                A(k[C], a);
              Object.freeze && Object.freeze(k);
            } else
              console.error(
                "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
              );
          else A(k, a);
      } else
        k = "", (a === void 0 || typeof a == "object" && a !== null && Object.keys(a).length === 0) && (k += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports."), a === null ? C = "null" : pe(a) ? C = "array" : a !== void 0 && a.$$typeof === R ? (C = "<" + (e(a.type) || "Unknown") + " />", k = " Did you accidentally export a JSX literal instead of a component?") : C = typeof a, console.error(
          "React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s",
          C,
          k
        );
      if (ue.call(m, "key")) {
        k = e(a);
        var me = Object.keys(m).filter(function(Z) {
          return Z !== "key";
        });
        C = 0 < me.length ? "{key: someKey, " + me.join(": ..., ") + ": ...}" : "{key: someKey}", Ge[k + C] || (me = 0 < me.length ? "{" + me.join(": ..., ") + ": ...}" : "{}", console.error(
          `A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,
          C,
          k,
          me,
          k
        ), Ge[k + C] = !0);
      }
      if (k = null, b !== void 0 && (r(b), k = "" + b), p(m) && (r(m.key), k = "" + m.key), "key" in m) {
        b = {};
        for (var Ue in m)
          Ue !== "key" && (b[Ue] = m[Ue]);
      } else b = m;
      return k && g(
        b,
        typeof a == "function" ? a.displayName || a.name || "Unknown" : a
      ), x(a, k, z, X, l(), b);
    }
    function A(a, m) {
      if (typeof a == "object" && a && a.$$typeof !== te) {
        if (pe(a))
          for (var b = 0; b < a.length; b++) {
            var C = a[b];
            H(C) && I(C, m);
          }
        else if (H(a))
          a._store && (a._store.validated = 1);
        else if (a === null || typeof a != "object" ? b = null : (b = Re && a[Re] || a["@@iterator"], b = typeof b == "function" ? b : null), typeof b == "function" && b !== a.entries && (b = b.call(a), b !== a))
          for (; !(a = b.next()).done; )
            H(a.value) && I(a.value, m);
      }
    }
    function H(a) {
      return typeof a == "object" && a !== null && a.$$typeof === R;
    }
    function I(a, m) {
      if (a._store && !a._store.validated && a.key == null && (a._store.validated = 1, m = _(m), !Ur[m])) {
        Ur[m] = !0;
        var b = "";
        a && a._owner != null && a._owner !== l() && (b = null, typeof a._owner.tag == "number" ? b = e(a._owner.type) : typeof a._owner.name == "string" && (b = a._owner.name), b = " It was passed a child from " + b + ".");
        var C = W.getCurrentStack;
        W.getCurrentStack = function() {
          var X = u(a.type);
          return C && (X += C() || ""), X;
        }, console.error(
          'Each child in a list should have a unique "key" prop.%s%s See https://react.dev/link/warning-keys for more information.',
          m,
          b
        ), W.getCurrentStack = C;
      }
    }
    function _(a) {
      var m = "", b = l();
      return b && (b = e(b.type)) && (m = `

Check the render method of \`` + b + "`."), m || (a = e(a)) && (m = `

Check the top-level render call using <` + a + ">."), m;
    }
    var w = B, R = Symbol.for("react.transitional.element"), T = Symbol.for("react.portal"), S = Symbol.for("react.fragment"), E = Symbol.for("react.strict_mode"), K = Symbol.for("react.profiler"), G = Symbol.for("react.consumer"), ce = Symbol.for("react.context"), Te = Symbol.for("react.forward_ref"), Ee = Symbol.for("react.suspense"), fe = Symbol.for("react.suspense_list"), Se = Symbol.for("react.memo"), Ae = Symbol.for("react.lazy"), rt = Symbol.for("react.offscreen"), Re = Symbol.iterator, We = Symbol.for("react.client.reference"), W = w.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, ue = Object.prototype.hasOwnProperty, J = Object.assign, V = Symbol.for("react.client.reference"), pe = Array.isArray, ie = 0, he, le, ge, ae, ne, $e, f;
    n.__reactDisabledLog = !0;
    var d, y, j = !1, L = new (typeof WeakMap == "function" ? WeakMap : Map)(), te = Symbol.for("react.client.reference"), ye, Fe = {}, Ge = {}, Ur = {};
    it.Fragment = S, it.jsx = function(a, m, b, C, X) {
      return $(a, m, b, !1, C, X);
    }, it.jsxs = function(a, m, b, C, X) {
      return $(a, m, b, !0, C, X);
    };
  }()), it;
}
var Kr;
function Go() {
  return Kr || (Kr = 1, process.env.NODE_ENV === "production" ? ft.exports = Wo() : ft.exports = Fo()), ft.exports;
}
var v = Go(), pt = { exports: {} }, Zt = {}, Qt = {}, Jr;
function Uo() {
  if (Jr) return Qt;
  Jr = 1;
  function e(t) {
    return t && t.__esModule ? t : { default: t };
  }
  return Qt._ = e, Qt;
}
var Zr;
function Yo() {
  return Zr || (Zr = 1, function(e) {
    "use client";
    Object.defineProperty(e, "__esModule", {
      value: !0
    });
    function t(l, p) {
      for (var g in p) Object.defineProperty(l, g, {
        enumerable: !0,
        get: p[g]
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
    const n = /* @__PURE__ */ (/* @__PURE__ */ Uo())._(B), o = n.default.createContext(null), i = n.default.createContext(null), s = n.default.createContext(null), c = n.default.createContext(null);
    process.env.NODE_ENV !== "production" && (o.displayName = "AppRouterContext", i.displayName = "LayoutRouterContext", s.displayName = "GlobalLayoutRouterContext", c.displayName = "TemplateContext");
    const u = n.default.createContext(/* @__PURE__ */ new Set());
  }(Zt)), Zt;
}
var er = {}, Qr;
function Vo() {
  return Qr || (Qr = 1, function(e) {
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
  }(er)), er;
}
var ht = { exports: {} }, en;
function Xo() {
  return en || (en = 1, function(e, t) {
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
  }(ht, ht.exports)), ht.exports;
}
var tr = {}, tn;
function Ko() {
  return tn || (tn = 1, function(e) {
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
  }(tr)), tr;
}
var gt = { exports: {} }, yt = { exports: {} }, mt = { exports: {} }, rn;
function eo() {
  return rn || (rn = 1, function(e, t) {
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
  }(mt, mt.exports)), mt.exports;
}
var bt = { exports: {} }, nn;
function Cr() {
  return nn || (nn = 1, function(e, t) {
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
    const n = eo(), o = "NEXT_REDIRECT";
    var i = /* @__PURE__ */ function(c) {
      return c.push = "push", c.replace = "replace", c;
    }({});
    function s(c) {
      if (typeof c != "object" || c === null || !("digest" in c) || typeof c.digest != "string")
        return !1;
      const u = c.digest.split(";"), [l, p] = u, g = u.slice(2, -2).join(";"), h = u.at(-2), x = Number(h);
      return l === o && (p === "replace" || p === "push") && typeof g == "string" && !isNaN(x) && x in n.RedirectStatusCode;
    }
    (typeof t.default == "function" || typeof t.default == "object" && t.default !== null) && typeof t.default.__esModule > "u" && (Object.defineProperty(t.default, "__esModule", { value: !0 }), Object.assign(t.default, t), e.exports = t.default);
  }(bt, bt.exports)), bt.exports;
}
var rr = {}, nr = {}, or = {}, on;
function Nr() {
  return on || (on = 1, function(e) {
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
    const r = Object.defineProperty(new Error("Invariant: AsyncLocalStorage accessed in runtime where it is not available"), "__NEXT_ERROR_CODE", {
      value: "E504",
      enumerable: !1,
      configurable: !0
    });
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
  }(or)), or;
}
var an;
function Jo() {
  return an || (an = 1, function(e) {
    Object.defineProperty(e, "__esModule", {
      value: !0
    }), Object.defineProperty(e, "actionAsyncStorageInstance", {
      enumerable: !0,
      get: function() {
        return r;
      }
    });
    const r = (0, Nr().createAsyncLocalStorage)();
  }(nr)), nr;
}
var sn;
function Zo() {
  return sn || (sn = 1, function(e) {
    Object.defineProperty(e, "__esModule", {
      value: !0
    }), Object.defineProperty(e, "actionAsyncStorage", {
      enumerable: !0,
      get: function() {
        return t.actionAsyncStorageInstance;
      }
    });
    const t = Jo();
  }(rr)), rr;
}
var cn;
function Qo() {
  return cn || (cn = 1, function(e, t) {
    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    function r(h, x) {
      for (var $ in x) Object.defineProperty(h, $, {
        enumerable: !0,
        get: x[$]
      });
    }
    r(t, {
      getRedirectError: function() {
        return s;
      },
      getRedirectStatusCodeFromError: function() {
        return g;
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
    const n = eo(), o = Cr(), i = typeof window > "u" ? Zo().actionAsyncStorage : void 0;
    function s(h, x, $) {
      $ === void 0 && ($ = n.RedirectStatusCode.TemporaryRedirect);
      const A = Object.defineProperty(new Error(o.REDIRECT_ERROR_CODE), "__NEXT_ERROR_CODE", {
        value: "E394",
        enumerable: !1,
        configurable: !0
      });
      return A.digest = o.REDIRECT_ERROR_CODE + ";" + x + ";" + h + ";" + $ + ";", A;
    }
    function c(h, x) {
      var $;
      throw x ?? (x = !(i == null || ($ = i.getStore()) == null) && $.isAction ? o.RedirectType.push : o.RedirectType.replace), s(h, x, n.RedirectStatusCode.TemporaryRedirect);
    }
    function u(h, x) {
      throw x === void 0 && (x = o.RedirectType.replace), s(h, x, n.RedirectStatusCode.PermanentRedirect);
    }
    function l(h) {
      return (0, o.isRedirectError)(h) ? h.digest.split(";").slice(2, -2).join(";") : null;
    }
    function p(h) {
      if (!(0, o.isRedirectError)(h))
        throw Object.defineProperty(new Error("Not a redirect error"), "__NEXT_ERROR_CODE", {
          value: "E260",
          enumerable: !1,
          configurable: !0
        });
      return h.digest.split(";", 2)[1];
    }
    function g(h) {
      if (!(0, o.isRedirectError)(h))
        throw Object.defineProperty(new Error("Not a redirect error"), "__NEXT_ERROR_CODE", {
          value: "E260",
          enumerable: !1,
          configurable: !0
        });
      return Number(h.digest.split(";").at(-2));
    }
    (typeof t.default == "function" || typeof t.default == "object" && t.default !== null) && typeof t.default.__esModule > "u" && (Object.defineProperty(t.default, "__esModule", { value: !0 }), Object.assign(t.default, t), e.exports = t.default);
  }(yt, yt.exports)), yt.exports;
}
var xt = { exports: {} }, vt = { exports: {} }, un;
function Ut() {
  return un || (un = 1, function(e, t) {
    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    function r(l, p) {
      for (var g in p) Object.defineProperty(l, g, {
        enumerable: !0,
        get: p[g]
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
      const [p, g] = l.digest.split(";");
      return p === i && o.has(Number(g));
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
  }(vt, vt.exports)), vt.exports;
}
var ln;
function ei() {
  return ln || (ln = 1, function(e, t) {
    Object.defineProperty(t, "__esModule", {
      value: !0
    }), Object.defineProperty(t, "notFound", {
      enumerable: !0,
      get: function() {
        return o;
      }
    });
    const n = "" + Ut().HTTP_ERROR_FALLBACK_ERROR_CODE + ";404";
    function o() {
      const i = Object.defineProperty(new Error(n), "__NEXT_ERROR_CODE", {
        value: "E394",
        enumerable: !1,
        configurable: !0
      });
      throw i.digest = n, i;
    }
    (typeof t.default == "function" || typeof t.default == "object" && t.default !== null) && typeof t.default.__esModule > "u" && (Object.defineProperty(t.default, "__esModule", { value: !0 }), Object.assign(t.default, t), e.exports = t.default);
  }(xt, xt.exports)), xt.exports;
}
var _t = { exports: {} }, dn;
function ti() {
  return dn || (dn = 1, function(e, t) {
    Object.defineProperty(t, "__esModule", {
      value: !0
    }), Object.defineProperty(t, "forbidden", {
      enumerable: !0,
      get: function() {
        return o;
      }
    });
    const n = "" + Ut().HTTP_ERROR_FALLBACK_ERROR_CODE + ";403";
    function o() {
      if (!process.env.__NEXT_EXPERIMENTAL_AUTH_INTERRUPTS)
        throw Object.defineProperty(new Error("`forbidden()` is experimental and only allowed to be enabled when `experimental.authInterrupts` is enabled."), "__NEXT_ERROR_CODE", {
          value: "E488",
          enumerable: !1,
          configurable: !0
        });
      const i = Object.defineProperty(new Error(n), "__NEXT_ERROR_CODE", {
        value: "E394",
        enumerable: !1,
        configurable: !0
      });
      throw i.digest = n, i;
    }
    (typeof t.default == "function" || typeof t.default == "object" && t.default !== null) && typeof t.default.__esModule > "u" && (Object.defineProperty(t.default, "__esModule", { value: !0 }), Object.assign(t.default, t), e.exports = t.default);
  }(_t, _t.exports)), _t.exports;
}
var wt = { exports: {} }, fn;
function ri() {
  return fn || (fn = 1, function(e, t) {
    Object.defineProperty(t, "__esModule", {
      value: !0
    }), Object.defineProperty(t, "unauthorized", {
      enumerable: !0,
      get: function() {
        return o;
      }
    });
    const n = "" + Ut().HTTP_ERROR_FALLBACK_ERROR_CODE + ";401";
    function o() {
      if (!process.env.__NEXT_EXPERIMENTAL_AUTH_INTERRUPTS)
        throw Object.defineProperty(new Error("`unauthorized()` is experimental and only allowed to be used when `experimental.authInterrupts` is enabled."), "__NEXT_ERROR_CODE", {
          value: "E411",
          enumerable: !1,
          configurable: !0
        });
      const i = Object.defineProperty(new Error(n), "__NEXT_ERROR_CODE", {
        value: "E394",
        enumerable: !1,
        configurable: !0
      });
      throw i.digest = n, i;
    }
    (typeof t.default == "function" || typeof t.default == "object" && t.default !== null) && typeof t.default.__esModule > "u" && (Object.defineProperty(t.default, "__esModule", { value: !0 }), Object.assign(t.default, t), e.exports = t.default);
  }(wt, wt.exports)), wt.exports;
}
var Et = { exports: {} }, St = { exports: {} }, ir = {}, pn;
function to() {
  return pn || (pn = 1, function(e) {
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
      isHangingPromiseRejectionError: function() {
        return r;
      },
      makeHangingPromise: function() {
        return i;
      }
    });
    function r(c) {
      return typeof c != "object" || c === null || !("digest" in c) ? !1 : c.digest === n;
    }
    const n = "HANGING_PROMISE_REJECTION";
    class o extends Error {
      constructor(u) {
        super(`During prerendering, ${u} rejects when the prerender is complete. Typically these errors are handled by React but if you move ${u} to a different context by using \`setTimeout\`, \`after\`, or similar functions you may observe this error and you should handle it in that context.`), this.expression = u, this.digest = n;
      }
    }
    function i(c, u) {
      const l = new Promise((p, g) => {
        c.addEventListener("abort", () => {
          g(new o(u));
        }, {
          once: !0
        });
      });
      return l.catch(s), l;
    }
    function s() {
    }
  }(ir)), ir;
}
var ar = {}, hn;
function ni() {
  return hn || (hn = 1, function(e) {
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
  }(ar)), ar;
}
var sr = {}, gn;
function Dr() {
  return gn || (gn = 1, function(e) {
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
  }(sr)), sr;
}
var Rt = { exports: {} }, yn;
function ro() {
  return yn || (yn = 1, function(e, t) {
    Object.defineProperty(t, "__esModule", {
      value: !0
    }), Object.defineProperty(t, "isNextRouterError", {
      enumerable: !0,
      get: function() {
        return o;
      }
    });
    const r = Ut(), n = Cr();
    function o(i) {
      return (0, n.isRedirectError)(i) || (0, r.isHTTPAccessFallbackError)(i);
    }
    (typeof t.default == "function" || typeof t.default == "object" && t.default !== null) && typeof t.default.__esModule > "u" && (Object.defineProperty(t.default, "__esModule", { value: !0 }), Object.assign(t.default, t), e.exports = t.default);
  }(Rt, Rt.exports)), Rt.exports;
}
var cr = {}, $t = { exports: {} }, mn;
function no() {
  return mn || (mn = 1, function(e, t) {
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
  }($t, $t.exports)), $t.exports;
}
var kt = { exports: {} }, bn;
function oi() {
  return bn || (bn = 1, function(e, t) {
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
  }(kt, kt.exports)), kt.exports;
}
var ur = {}, lr = {}, xn;
function ii() {
  return xn || (xn = 1, function(e) {
    Object.defineProperty(e, "__esModule", {
      value: !0
    }), Object.defineProperty(e, "workUnitAsyncStorageInstance", {
      enumerable: !0,
      get: function() {
        return r;
      }
    });
    const r = (0, Nr().createAsyncLocalStorage)();
  }(lr)), lr;
}
var vn;
function ai() {
  return vn || (vn = 1, function(e) {
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
      getExpectedRequestStore: function() {
        return n;
      },
      getHmrRefreshHash: function() {
        return s;
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
    const r = ii();
    function n(c) {
      const u = r.workUnitAsyncStorageInstance.getStore();
      if (u) {
        if (u.type === "request")
          return u;
        if (u.type === "prerender" || u.type === "prerender-ppr" || u.type === "prerender-legacy")
          throw Object.defineProperty(new Error(`\`${c}\` cannot be called inside a prerender. This is a bug in Next.js.`), "__NEXT_ERROR_CODE", {
            value: "E401",
            enumerable: !1,
            configurable: !0
          });
        if (u.type === "cache")
          throw Object.defineProperty(new Error(`\`${c}\` cannot be called inside "use cache". Call it outside and pass an argument instead. Read more: https://nextjs.org/docs/messages/next-request-in-use-cache`), "__NEXT_ERROR_CODE", {
            value: "E37",
            enumerable: !1,
            configurable: !0
          });
        if (u.type === "unstable-cache")
          throw Object.defineProperty(new Error(`\`${c}\` cannot be called inside unstable_cache. Call it outside and pass an argument instead. Read more: https://nextjs.org/docs/app/api-reference/functions/unstable_cache`), "__NEXT_ERROR_CODE", {
            value: "E69",
            enumerable: !1,
            configurable: !0
          });
      }
      throw Object.defineProperty(new Error(`\`${c}\` was called outside a request scope. Read more: https://nextjs.org/docs/messages/next-dynamic-api-wrong-context`), "__NEXT_ERROR_CODE", {
        value: "E251",
        enumerable: !1,
        configurable: !0
      });
    }
    function o(c) {
      return c.type === "prerender" || c.type === "prerender-ppr" ? c.prerenderResumeDataCache : null;
    }
    function i(c) {
      return c.type !== "prerender-legacy" && c.type !== "cache" && c.type !== "unstable-cache" ? c.type === "request" ? c.renderResumeDataCache : c.prerenderResumeDataCache : null;
    }
    function s(c) {
      var u;
      return c.type === "cache" ? c.hmrRefreshHash : c.type === "request" ? (u = c.cookies.get("__next_hmr_refresh_hash__")) == null ? void 0 : u.value : void 0;
    }
  }(ur)), ur;
}
var dr = {}, fr = {}, _n;
function si() {
  return _n || (_n = 1, function(e) {
    Object.defineProperty(e, "__esModule", {
      value: !0
    }), Object.defineProperty(e, "workAsyncStorageInstance", {
      enumerable: !0,
      get: function() {
        return r;
      }
    });
    const r = (0, Nr().createAsyncLocalStorage)();
  }(fr)), fr;
}
var wn;
function oo() {
  return wn || (wn = 1, function(e) {
    Object.defineProperty(e, "__esModule", {
      value: !0
    }), Object.defineProperty(e, "workAsyncStorage", {
      enumerable: !0,
      get: function() {
        return t.workAsyncStorageInstance;
      }
    });
    const t = si();
  }(dr)), dr;
}
var pr = {}, En;
function ci() {
  return En || (En = 1, function(e) {
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
  }(pr)), pr;
}
var hr = {}, Sn;
function ui() {
  return Sn || (Sn = 1, function(e) {
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
      atLeastOneTask: function() {
        return o;
      },
      scheduleImmediate: function() {
        return n;
      },
      scheduleOnNextTick: function() {
        return r;
      },
      waitAtLeastOneReactRenderTask: function() {
        return i;
      }
    });
    const r = (s) => {
      Promise.resolve().then(() => {
        process.env.NEXT_RUNTIME === "edge" ? setTimeout(s, 0) : process.nextTick(s);
      });
    }, n = (s) => {
      process.env.NEXT_RUNTIME === "edge" ? setTimeout(s, 0) : setImmediate(s);
    };
    function o() {
      return new Promise((s) => n(s));
    }
    function i() {
      return process.env.NEXT_RUNTIME === "edge" ? new Promise((s) => setTimeout(s, 0)) : new Promise((s) => setImmediate(s));
    }
  }(hr)), hr;
}
var Rn;
function io() {
  return Rn || (Rn = 1, function(e) {
    Object.defineProperty(e, "__esModule", {
      value: !0
    });
    function t(f, d) {
      for (var y in d) Object.defineProperty(f, y, {
        enumerable: !0,
        get: d[y]
      });
    }
    t(e, {
      Postpone: function() {
        return K;
      },
      abortAndThrowOnSynchronousRequestDataAccess: function() {
        return S;
      },
      abortOnSynchronousPlatformIOAccess: function() {
        return R;
      },
      accessedDynamicData: function() {
        return rt;
      },
      annotateDynamicAccess: function() {
        return V;
      },
      consumeDynamicAccess: function() {
        return Re;
      },
      createDynamicTrackingState: function() {
        return h;
      },
      createDynamicValidationState: function() {
        return x;
      },
      createHangingInputAbortSignal: function() {
        return J;
      },
      createPostponedAbortSignal: function() {
        return ue;
      },
      formatDynamicAPIAccesses: function() {
        return We;
      },
      getFirstDynamicReason: function() {
        return $;
      },
      isDynamicPostpone: function() {
        return Te;
      },
      isPrerenderInterruptedError: function() {
        return Ae;
      },
      markCurrentScopeAsDynamic: function() {
        return A;
      },
      postponeWithTracking: function() {
        return G;
      },
      throwIfDisallowedDynamic: function() {
        return $e;
      },
      throwToInterruptStaticGeneration: function() {
        return I;
      },
      trackAllowedDynamicAccess: function() {
        return ae;
      },
      trackDynamicDataInDynamicRender: function() {
        return _;
      },
      trackFallbackParamAccessed: function() {
        return H;
      },
      trackSynchronousPlatformIOAccessInDev: function() {
        return T;
      },
      trackSynchronousRequestDataAccessInDev: function() {
        return E;
      },
      useDynamicRouteParams: function() {
        return pe;
      }
    });
    const r = /* @__PURE__ */ p(B), n = no(), o = oi(), i = ai(), s = oo(), c = to(), u = ci(), l = ui();
    function p(f) {
      return f && f.__esModule ? f : {
        default: f
      };
    }
    const g = typeof r.default.unstable_postpone == "function";
    function h(f) {
      return {
        isDebugDynamicAccesses: f,
        dynamicAccesses: [],
        syncDynamicExpression: void 0,
        syncDynamicErrorWithStack: null
      };
    }
    function x() {
      return {
        hasSuspendedDynamic: !1,
        hasDynamicMetadata: !1,
        hasDynamicViewport: !1,
        hasSyncDynamicErrors: !1,
        dynamicErrors: []
      };
    }
    function $(f) {
      var d;
      return (d = f.dynamicAccesses[0]) == null ? void 0 : d.expression;
    }
    function A(f, d, y) {
      if (!(d && (d.type === "cache" || d.type === "unstable-cache")) && !(f.forceDynamic || f.forceStatic)) {
        if (f.dynamicShouldError)
          throw Object.defineProperty(new o.StaticGenBailoutError(`Route ${f.route} with \`dynamic = "error"\` couldn't be rendered statically because it used \`${y}\`. See more info here: https://nextjs.org/docs/app/building-your-application/rendering/static-and-dynamic#dynamic-rendering`), "__NEXT_ERROR_CODE", {
            value: "E553",
            enumerable: !1,
            configurable: !0
          });
        if (d)
          if (d.type === "prerender-ppr")
            G(f.route, y, d.dynamicTracking);
          else if (d.type === "prerender-legacy") {
            d.revalidate = 0;
            const j = Object.defineProperty(new n.DynamicServerError(`Route ${f.route} couldn't be rendered statically because it used ${y}. See more info here: https://nextjs.org/docs/messages/dynamic-server-error`), "__NEXT_ERROR_CODE", {
              value: "E550",
              enumerable: !1,
              configurable: !0
            });
            throw f.dynamicUsageDescription = y, f.dynamicUsageStack = j.stack, j;
          } else process.env.NODE_ENV === "development" && d && d.type === "request" && (d.usedDynamic = !0);
      }
    }
    function H(f, d) {
      const y = i.workUnitAsyncStorage.getStore();
      !y || y.type !== "prerender-ppr" || G(f.route, d, y.dynamicTracking);
    }
    function I(f, d, y) {
      const j = Object.defineProperty(new n.DynamicServerError(`Route ${d.route} couldn't be rendered statically because it used \`${f}\`. See more info here: https://nextjs.org/docs/messages/dynamic-server-error`), "__NEXT_ERROR_CODE", {
        value: "E558",
        enumerable: !1,
        configurable: !0
      });
      throw y.revalidate = 0, d.dynamicUsageDescription = f, d.dynamicUsageStack = j.stack, j;
    }
    function _(f, d) {
      if (d) {
        if (d.type === "cache" || d.type === "unstable-cache")
          return;
        (d.type === "prerender" || d.type === "prerender-legacy") && (d.revalidate = 0), process.env.NODE_ENV === "development" && d.type === "request" && (d.usedDynamic = !0);
      }
    }
    function w(f, d, y) {
      const j = `Route ${f} needs to bail out of prerendering at this point because it used ${d}.`, L = Se(j);
      y.controller.abort(L);
      const te = y.dynamicTracking;
      te && te.dynamicAccesses.push({
        // When we aren't debugging, we don't need to create another error for the
        // stack trace.
        stack: te.isDebugDynamicAccesses ? new Error().stack : void 0,
        expression: d
      });
    }
    function R(f, d, y, j) {
      const L = j.dynamicTracking;
      return L && L.syncDynamicErrorWithStack === null && (L.syncDynamicExpression = d, L.syncDynamicErrorWithStack = y), w(f, d, j);
    }
    function T(f) {
      f.prerenderPhase = !1;
    }
    function S(f, d, y, j) {
      const L = j.dynamicTracking;
      throw L && L.syncDynamicErrorWithStack === null && (L.syncDynamicExpression = d, L.syncDynamicErrorWithStack = y, j.validating === !0 && (L.syncDynamicLogged = !0)), w(f, d, j), Se(`Route ${f} needs to bail out of prerendering at this point because it used ${d}.`);
    }
    const E = T;
    function K({ reason: f, route: d }) {
      const y = i.workUnitAsyncStorage.getStore(), j = y && y.type === "prerender-ppr" ? y.dynamicTracking : null;
      G(d, f, j);
    }
    function G(f, d, y) {
      W(), y && y.dynamicAccesses.push({
        // When we aren't debugging, we don't need to create another error for the
        // stack trace.
        stack: y.isDebugDynamicAccesses ? new Error().stack : void 0,
        expression: d
      }), r.default.unstable_postpone(ce(f, d));
    }
    function ce(f, d) {
      return `Route ${f} needs to bail out of prerendering at this point because it used ${d}. React throws this special object to indicate where. It should not be caught by your own try/catch. Learn more: https://nextjs.org/docs/messages/ppr-caught-error`;
    }
    function Te(f) {
      return typeof f == "object" && f !== null && typeof f.message == "string" ? Ee(f.message) : !1;
    }
    function Ee(f) {
      return f.includes("needs to bail out of prerendering at this point because it used") && f.includes("Learn more: https://nextjs.org/docs/messages/ppr-caught-error");
    }
    if (Ee(ce("%%%", "^^^")) === !1)
      throw Object.defineProperty(new Error("Invariant: isDynamicPostpone misidentified a postpone reason. This is a bug in Next.js"), "__NEXT_ERROR_CODE", {
        value: "E296",
        enumerable: !1,
        configurable: !0
      });
    const fe = "NEXT_PRERENDER_INTERRUPTED";
    function Se(f) {
      const d = Object.defineProperty(new Error(f), "__NEXT_ERROR_CODE", {
        value: "E394",
        enumerable: !1,
        configurable: !0
      });
      return d.digest = fe, d;
    }
    function Ae(f) {
      return typeof f == "object" && f !== null && f.digest === fe && "name" in f && "message" in f && f instanceof Error;
    }
    function rt(f) {
      return f.length > 0;
    }
    function Re(f, d) {
      return f.dynamicAccesses.push(...d.dynamicAccesses), f.dynamicAccesses;
    }
    function We(f) {
      return f.filter((d) => typeof d.stack == "string" && d.stack.length > 0).map(({ expression: d, stack: y }) => (y = y.split(`
`).slice(4).filter((j) => !(j.includes("node_modules/next/") || j.includes(" (<anonymous>)") || j.includes(" (node:"))).join(`
`), `Dynamic API Usage Debug - ${d}:
${y}`));
    }
    function W() {
      if (!g)
        throw Object.defineProperty(new Error("Invariant: React.unstable_postpone is not defined. This suggests the wrong version of React was loaded. This is a bug in Next.js"), "__NEXT_ERROR_CODE", {
          value: "E224",
          enumerable: !1,
          configurable: !0
        });
    }
    function ue(f) {
      W();
      const d = new AbortController();
      try {
        r.default.unstable_postpone(f);
      } catch (y) {
        d.abort(y);
      }
      return d.signal;
    }
    function J(f) {
      const d = new AbortController();
      return f.cacheSignal ? f.cacheSignal.inputReady().then(() => {
        d.abort();
      }) : (0, l.scheduleOnNextTick)(() => d.abort()), d.signal;
    }
    function V(f, d) {
      const y = d.dynamicTracking;
      y && y.dynamicAccesses.push({
        stack: y.isDebugDynamicAccesses ? new Error().stack : void 0,
        expression: f
      });
    }
    function pe(f) {
      const d = s.workAsyncStorage.getStore();
      if (d && d.isStaticGeneration && d.fallbackRouteParams && d.fallbackRouteParams.size > 0) {
        const y = i.workUnitAsyncStorage.getStore();
        y && (y.type === "prerender" ? r.default.use((0, c.makeHangingPromise)(y.renderSignal, f)) : y.type === "prerender-ppr" ? G(d.route, f, y.dynamicTracking) : y.type === "prerender-legacy" && I(f, d, y));
      }
    }
    const ie = /\n\s+at Suspense \(<anonymous>\)/, he = new RegExp(`\\n\\s+at ${u.METADATA_BOUNDARY_NAME}[\\n\\s]`), le = new RegExp(`\\n\\s+at ${u.VIEWPORT_BOUNDARY_NAME}[\\n\\s]`), ge = new RegExp(`\\n\\s+at ${u.OUTLET_BOUNDARY_NAME}[\\n\\s]`);
    function ae(f, d, y, j, L) {
      if (!ge.test(d))
        if (he.test(d)) {
          y.hasDynamicMetadata = !0;
          return;
        } else if (le.test(d)) {
          y.hasDynamicViewport = !0;
          return;
        } else if (ie.test(d)) {
          y.hasSuspendedDynamic = !0;
          return;
        } else if (j.syncDynamicErrorWithStack || L.syncDynamicErrorWithStack) {
          y.hasSyncDynamicErrors = !0;
          return;
        } else {
          const te = `Route "${f}": A component accessed data, headers, params, searchParams, or a short-lived cache without a Suspense boundary nor a "use cache" above it. We don't have the exact line number added to error messages yet but you can see which component in the stack below. See more info: https://nextjs.org/docs/messages/next-prerender-missing-suspense`, ye = ne(te, d);
          y.dynamicErrors.push(ye);
          return;
        }
    }
    function ne(f, d) {
      const y = Object.defineProperty(new Error(f), "__NEXT_ERROR_CODE", {
        value: "E394",
        enumerable: !1,
        configurable: !0
      });
      return y.stack = "Error: " + f + d, y;
    }
    function $e(f, d, y, j) {
      let L, te, ye;
      if (y.syncDynamicErrorWithStack ? (L = y.syncDynamicErrorWithStack, te = y.syncDynamicExpression, ye = y.syncDynamicLogged === !0) : j.syncDynamicErrorWithStack ? (L = j.syncDynamicErrorWithStack, te = j.syncDynamicExpression, ye = j.syncDynamicLogged === !0) : (L = null, te = void 0, ye = !1), d.hasSyncDynamicErrors && L)
        throw ye || console.error(L), new o.StaticGenBailoutError();
      const Fe = d.dynamicErrors;
      if (Fe.length) {
        for (let Ge = 0; Ge < Fe.length; Ge++)
          console.error(Fe[Ge]);
        throw new o.StaticGenBailoutError();
      }
      if (!d.hasSuspendedDynamic) {
        if (d.hasDynamicMetadata)
          throw L ? (console.error(L), Object.defineProperty(new o.StaticGenBailoutError(`Route "${f}" has a \`generateMetadata\` that could not finish rendering before ${te} was used. Follow the instructions in the error for this expression to resolve.`), "__NEXT_ERROR_CODE", {
            value: "E608",
            enumerable: !1,
            configurable: !0
          })) : Object.defineProperty(new o.StaticGenBailoutError(`Route "${f}" has a \`generateMetadata\` that depends on Request data (\`cookies()\`, etc...) or external data (\`fetch(...)\`, etc...) but the rest of the route was static or only used cached data (\`"use cache"\`). If you expected this route to be prerenderable update your \`generateMetadata\` to not use Request data and only use cached external data. Otherwise, add \`await connection()\` somewhere within this route to indicate explicitly it should not be prerendered.`), "__NEXT_ERROR_CODE", {
            value: "E534",
            enumerable: !1,
            configurable: !0
          });
        if (d.hasDynamicViewport)
          throw L ? (console.error(L), Object.defineProperty(new o.StaticGenBailoutError(`Route "${f}" has a \`generateViewport\` that could not finish rendering before ${te} was used. Follow the instructions in the error for this expression to resolve.`), "__NEXT_ERROR_CODE", {
            value: "E573",
            enumerable: !1,
            configurable: !0
          })) : Object.defineProperty(new o.StaticGenBailoutError(`Route "${f}" has a \`generateViewport\` that depends on Request data (\`cookies()\`, etc...) or external data (\`fetch(...)\`, etc...) but the rest of the route was static or only used cached data (\`"use cache"\`). If you expected this route to be prerenderable update your \`generateViewport\` to not use Request data and only use cached external data. Otherwise, add \`await connection()\` somewhere within this route to indicate explicitly it should not be prerendered.`), "__NEXT_ERROR_CODE", {
            value: "E590",
            enumerable: !1,
            configurable: !0
          });
      }
    }
  }(cr)), cr;
}
var $n;
function li() {
  return $n || ($n = 1, function(e, t) {
    Object.defineProperty(t, "__esModule", {
      value: !0
    }), Object.defineProperty(t, "unstable_rethrow", {
      enumerable: !0,
      get: function() {
        return u;
      }
    });
    const r = to(), n = ni(), o = Dr(), i = ro(), s = io(), c = no();
    function u(l) {
      if ((0, i.isNextRouterError)(l) || (0, o.isBailoutToCSRError)(l) || (0, c.isDynamicServerError)(l) || (0, s.isDynamicPostpone)(l) || (0, n.isPostpone)(l) || (0, r.isHangingPromiseRejectionError)(l))
        throw l;
      l instanceof Error && "cause" in l && u(l.cause);
    }
    (typeof t.default == "function" || typeof t.default == "object" && t.default !== null) && typeof t.default.__esModule > "u" && (Object.defineProperty(t.default, "__esModule", { value: !0 }), Object.assign(t.default, t), e.exports = t.default);
  }(St, St.exports)), St.exports;
}
var Ot = { exports: {} }, kn;
function di() {
  return kn || (kn = 1, function(e, t) {
    Object.defineProperty(t, "__esModule", {
      value: !0
    }), Object.defineProperty(t, "unstable_rethrow", {
      enumerable: !0,
      get: function() {
        return o;
      }
    });
    const r = Dr(), n = ro();
    function o(i) {
      if ((0, n.isNextRouterError)(i) || (0, r.isBailoutToCSRError)(i))
        throw i;
      i instanceof Error && "cause" in i && o(i.cause);
    }
    (typeof t.default == "function" || typeof t.default == "object" && t.default !== null) && typeof t.default.__esModule > "u" && (Object.defineProperty(t.default, "__esModule", { value: !0 }), Object.assign(t.default, t), e.exports = t.default);
  }(Ot, Ot.exports)), Ot.exports;
}
var On;
function fi() {
  return On || (On = 1, function(e, t) {
    Object.defineProperty(t, "__esModule", {
      value: !0
    }), Object.defineProperty(t, "unstable_rethrow", {
      enumerable: !0,
      get: function() {
        return r;
      }
    });
    const r = typeof window > "u" ? li().unstable_rethrow : di().unstable_rethrow;
    (typeof t.default == "function" || typeof t.default == "object" && t.default !== null) && typeof t.default.__esModule > "u" && (Object.defineProperty(t.default, "__esModule", { value: !0 }), Object.assign(t.default, t), e.exports = t.default);
  }(Et, Et.exports)), Et.exports;
}
var Pn;
function pi() {
  return Pn || (Pn = 1, function(e, t) {
    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    function r(g, h) {
      for (var x in h) Object.defineProperty(g, x, {
        enumerable: !0,
        get: h[x]
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
    const n = Qo(), o = Cr(), i = ei(), s = ti(), c = ri(), u = fi();
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
  }(gt, gt.exports)), gt.exports;
}
var gr = {}, yr = {}, Tn;
function hi() {
  if (Tn) return yr;
  Tn = 1;
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
  return yr._ = t, yr;
}
var An;
function gi() {
  return An || (An = 1, function(e) {
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
    const n = /* @__PURE__ */ (/* @__PURE__ */ hi())._(B), o = /* @__PURE__ */ n.default.createContext(null);
    function i(s) {
      const c = (0, n.useContext)(o);
      c && c(s);
    }
  }(gr)), gr;
}
var Pt = { exports: {} }, jn;
function yi() {
  return jn || (jn = 1, function(e, t) {
    Object.defineProperty(t, "__esModule", {
      value: !0
    }), Object.defineProperty(t, "bailoutToClientRendering", {
      enumerable: !0,
      get: function() {
        return o;
      }
    });
    const r = Dr(), n = oo();
    function o(i) {
      const s = n.workAsyncStorage.getStore();
      if (!(s != null && s.forceStatic) && s != null && s.isStaticGeneration)
        throw Object.defineProperty(new r.BailoutToCSRError(i), "__NEXT_ERROR_CODE", {
          value: "E394",
          enumerable: !1,
          configurable: !0
        });
    }
    (typeof t.default == "function" || typeof t.default == "object" && t.default !== null) && typeof t.default.__esModule > "u" && (Object.defineProperty(t.default, "__esModule", { value: !0 }), Object.assign(t.default, t), e.exports = t.default);
  }(Pt, Pt.exports)), Pt.exports;
}
var Cn;
function mi() {
  return Cn || (Cn = 1, function(e, t) {
    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    function r(_, w) {
      for (var R in w) Object.defineProperty(_, R, {
        enumerable: !0,
        get: w[R]
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
        return l.ServerInsertedHTMLContext;
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
        return $;
      },
      usePathname: function() {
        return h;
      },
      useRouter: function() {
        return x;
      },
      useSearchParams: function() {
        return g;
      },
      useSelectedLayoutSegment: function() {
        return I;
      },
      useSelectedLayoutSegments: function() {
        return H;
      },
      useServerInsertedHTML: function() {
        return l.useServerInsertedHTML;
      }
    });
    const n = B, o = Yo(), i = Vo(), s = Xo(), c = Ko(), u = pi(), l = gi(), p = typeof window > "u" ? io().useDynamicRouteParams : void 0;
    function g() {
      const _ = (0, n.useContext)(i.SearchParamsContext), w = (0, n.useMemo)(() => _ ? new u.ReadonlyURLSearchParams(_) : null, [
        _
      ]);
      if (typeof window > "u") {
        const { bailoutToClientRendering: R } = yi();
        R("useSearchParams()");
      }
      return w;
    }
    function h() {
      return p == null || p("usePathname()"), (0, n.useContext)(i.PathnameContext);
    }
    function x() {
      const _ = (0, n.useContext)(o.AppRouterContext);
      if (_ === null)
        throw Object.defineProperty(new Error("invariant expected app router to be mounted"), "__NEXT_ERROR_CODE", {
          value: "E238",
          enumerable: !1,
          configurable: !0
        });
      return _;
    }
    function $() {
      return p == null || p("useParams()"), (0, n.useContext)(i.PathParamsContext);
    }
    function A(_, w, R, T) {
      R === void 0 && (R = !0), T === void 0 && (T = []);
      let S;
      if (R)
        S = _[1][w];
      else {
        const ce = _[1];
        var E;
        S = (E = ce.children) != null ? E : Object.values(ce)[0];
      }
      if (!S) return T;
      const K = S[0];
      let G = (0, s.getSegmentValue)(K);
      return !G || G.startsWith(c.PAGE_SEGMENT_KEY) ? T : (T.push(G), A(S, w, !1, T));
    }
    function H(_) {
      _ === void 0 && (_ = "children"), p == null || p("useSelectedLayoutSegments()");
      const w = (0, n.useContext)(o.LayoutRouterContext);
      return w ? A(w.parentTree, _) : null;
    }
    function I(_) {
      _ === void 0 && (_ = "children"), p == null || p("useSelectedLayoutSegment()");
      const w = H(_);
      if (!w || w.length === 0)
        return null;
      const R = _ === "children" ? w[0] : w[w.length - 1];
      return R === c.DEFAULT_SEGMENT_KEY ? null : R;
    }
    (typeof t.default == "function" || typeof t.default == "object" && t.default !== null) && typeof t.default.__esModule > "u" && (Object.defineProperty(t.default, "__esModule", { value: !0 }), Object.assign(t.default, t), e.exports = t.default);
  }(pt, pt.exports)), pt.exports;
}
var mr, Nn;
function bi() {
  return Nn || (Nn = 1, mr = mi()), mr;
}
var xi = bi(), U = function() {
  return U = Object.assign || function(t) {
    for (var r, n = 1, o = arguments.length; n < o; n++) {
      r = arguments[n];
      for (var i in r) Object.prototype.hasOwnProperty.call(r, i) && (t[i] = r[i]);
    }
    return t;
  }, U.apply(this, arguments);
};
function qe(e, t, r) {
  if (r || arguments.length === 2) for (var n = 0, o = t.length, i; n < o; n++)
    (i || !(n in t)) && (i || (i = Array.prototype.slice.call(t, 0, n)), i[n] = t[n]);
  return e.concat(i || Array.prototype.slice.call(t));
}
function vi(e) {
  var t = /* @__PURE__ */ Object.create(null);
  return function(r) {
    return t[r] === void 0 && (t[r] = e(r)), t[r];
  };
}
var _i = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|disableRemotePlayback|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/, wi = /* @__PURE__ */ vi(
  function(e) {
    return _i.test(e) || e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && e.charCodeAt(2) < 91;
  }
  /* Z+1 */
), br, Dn;
function Ei() {
  return Dn || (Dn = 1, br = function(t, r, n, o) {
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
      var g = t[p], h = r[p];
      if (i = n ? n.call(o, g, h, p) : void 0, i === !1 || i === void 0 && g !== h)
        return !1;
    }
    return !0;
  }), br;
}
var Si = Ei();
const Ri = /* @__PURE__ */ Bo(Si);
var M = "-ms-", st = "-moz-", N = "-webkit-", ao = "comm", Yt = "rule", Ir = "decl", $i = "@import", so = "@keyframes", ki = "@layer", co = Math.abs, Lr = String.fromCharCode, Er = Object.assign;
function Oi(e, t) {
  return Y(e, 0) ^ 45 ? (((t << 2 ^ Y(e, 0)) << 2 ^ Y(e, 1)) << 2 ^ Y(e, 2)) << 2 ^ Y(e, 3) : 0;
}
function uo(e) {
  return e.trim();
}
function xe(e, t) {
  return (e = t.exec(e)) ? e[0] : e;
}
function O(e, t, r) {
  return e.replace(t, r);
}
function Dt(e, t, r) {
  return e.indexOf(t, r);
}
function Y(e, t) {
  return e.charCodeAt(t) | 0;
}
function Ve(e, t, r) {
  return e.slice(t, r);
}
function de(e) {
  return e.length;
}
function lo(e) {
  return e.length;
}
function at(e, t) {
  return t.push(e), e;
}
function Pi(e, t) {
  return e.map(t).join("");
}
function In(e, t) {
  return e.filter(function(r) {
    return !xe(r, t);
  });
}
var Vt = 1, Xe = 1, fo = 0, oe = 0, F = 0, tt = "";
function Xt(e, t, r, n, o, i, s, c) {
  return { value: e, root: t, parent: r, type: n, props: o, children: i, line: Vt, column: Xe, length: s, return: "", siblings: c };
}
function Oe(e, t) {
  return Er(Xt("", null, null, "", null, null, 0, e.siblings), e, { length: -e.length }, t);
}
function Ye(e) {
  for (; e.root; )
    e = Oe(e.root, { children: [e] });
  at(e, e.siblings);
}
function Ti() {
  return F;
}
function Ai() {
  return F = oe > 0 ? Y(tt, --oe) : 0, Xe--, F === 10 && (Xe = 1, Vt--), F;
}
function se() {
  return F = oe < fo ? Y(tt, oe++) : 0, Xe++, F === 10 && (Xe = 1, Vt++), F;
}
function ze() {
  return Y(tt, oe);
}
function It() {
  return oe;
}
function Kt(e, t) {
  return Ve(tt, e, t);
}
function Sr(e) {
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
function ji(e) {
  return Vt = Xe = 1, fo = de(tt = e), oe = 0, [];
}
function Ci(e) {
  return tt = "", e;
}
function xr(e) {
  return uo(Kt(oe - 1, Rr(e === 91 ? e + 2 : e === 40 ? e + 1 : e)));
}
function Ni(e) {
  for (; (F = ze()) && F < 33; )
    se();
  return Sr(e) > 2 || Sr(F) > 3 ? "" : " ";
}
function Di(e, t) {
  for (; --t && se() && !(F < 48 || F > 102 || F > 57 && F < 65 || F > 70 && F < 97); )
    ;
  return Kt(e, It() + (t < 6 && ze() == 32 && se() == 32));
}
function Rr(e) {
  for (; se(); )
    switch (F) {
      // ] ) " '
      case e:
        return oe;
      // " '
      case 34:
      case 39:
        e !== 34 && e !== 39 && Rr(F);
        break;
      // (
      case 40:
        e === 41 && Rr(e);
        break;
      // \
      case 92:
        se();
        break;
    }
  return oe;
}
function Ii(e, t) {
  for (; se() && e + F !== 57; )
    if (e + F === 84 && ze() === 47)
      break;
  return "/*" + Kt(t, oe - 1) + "*" + Lr(e === 47 ? e : se());
}
function Li(e) {
  for (; !Sr(ze()); )
    se();
  return Kt(e, oe);
}
function Mi(e) {
  return Ci(Lt("", null, null, null, [""], e = ji(e), 0, [0], e));
}
function Lt(e, t, r, n, o, i, s, c, u) {
  for (var l = 0, p = 0, g = s, h = 0, x = 0, $ = 0, A = 1, H = 1, I = 1, _ = 0, w = "", R = o, T = i, S = n, E = w; H; )
    switch ($ = _, _ = se()) {
      // (
      case 40:
        if ($ != 108 && Y(E, g - 1) == 58) {
          Dt(E += O(xr(_), "&", "&\f"), "&\f", co(l ? c[l - 1] : 0)) != -1 && (I = -1);
          break;
        }
      // " ' [
      case 34:
      case 39:
      case 91:
        E += xr(_);
        break;
      // \t \n \r \s
      case 9:
      case 10:
      case 13:
      case 32:
        E += Ni($);
        break;
      // \
      case 92:
        E += Di(It() - 1, 7);
        continue;
      // /
      case 47:
        switch (ze()) {
          case 42:
          case 47:
            at(zi(Ii(se(), It()), t, r, u), u);
            break;
          default:
            E += "/";
        }
        break;
      // {
      case 123 * A:
        c[l++] = de(E) * I;
      // } ; \0
      case 125 * A:
      case 59:
      case 0:
        switch (_) {
          // \0 }
          case 0:
          case 125:
            H = 0;
          // ;
          case 59 + p:
            I == -1 && (E = O(E, /\f/g, "")), x > 0 && de(E) - g && at(x > 32 ? Mn(E + ";", n, r, g - 1, u) : Mn(O(E, " ", "") + ";", n, r, g - 2, u), u);
            break;
          // @ ;
          case 59:
            E += ";";
          // { rule/at-rule
          default:
            if (at(S = Ln(E, t, r, l, p, o, c, w, R = [], T = [], g, i), i), _ === 123)
              if (p === 0)
                Lt(E, t, S, S, R, i, g, c, T);
              else
                switch (h === 99 && Y(E, 3) === 110 ? 100 : h) {
                  // d l m s
                  case 100:
                  case 108:
                  case 109:
                  case 115:
                    Lt(e, S, S, n && at(Ln(e, S, S, 0, 0, o, c, w, o, R = [], g, T), T), o, T, g, c, n ? R : T);
                    break;
                  default:
                    Lt(E, S, S, S, [""], T, 0, c, T);
                }
        }
        l = p = x = 0, A = I = 1, w = E = "", g = s;
        break;
      // :
      case 58:
        g = 1 + de(E), x = $;
      default:
        if (A < 1) {
          if (_ == 123)
            --A;
          else if (_ == 125 && A++ == 0 && Ai() == 125)
            continue;
        }
        switch (E += Lr(_), _ * A) {
          // &
          case 38:
            I = p > 0 ? 1 : (E += "\f", -1);
            break;
          // ,
          case 44:
            c[l++] = (de(E) - 1) * I, I = 1;
            break;
          // @
          case 64:
            ze() === 45 && (E += xr(se())), h = ze(), p = g = de(w = E += Li(It())), _++;
            break;
          // -
          case 45:
            $ === 45 && de(E) == 2 && (A = 0);
        }
    }
  return i;
}
function Ln(e, t, r, n, o, i, s, c, u, l, p, g) {
  for (var h = o - 1, x = o === 0 ? i : [""], $ = lo(x), A = 0, H = 0, I = 0; A < n; ++A)
    for (var _ = 0, w = Ve(e, h + 1, h = co(H = s[A])), R = e; _ < $; ++_)
      (R = uo(H > 0 ? x[_] + " " + w : O(w, /&\f/g, x[_]))) && (u[I++] = R);
  return Xt(e, t, r, o === 0 ? Yt : c, u, l, p, g);
}
function zi(e, t, r, n) {
  return Xt(e, t, r, ao, Lr(Ti()), Ve(e, 2, -2), 0, n);
}
function Mn(e, t, r, n, o) {
  return Xt(e, t, r, Ir, Ve(e, 0, n), Ve(e, n + 1, -1), n, o);
}
function po(e, t, r) {
  switch (Oi(e, t)) {
    // color-adjust
    case 5103:
      return N + "print-" + e + e;
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
      return N + e + e;
    // tab-size
    case 4789:
      return st + e + e;
    // appearance, user-select, transform, hyphens, text-size-adjust
    case 5349:
    case 4246:
    case 4810:
    case 6968:
    case 2756:
      return N + e + st + e + M + e + e;
    // writing-mode
    case 5936:
      switch (Y(e, t + 11)) {
        // vertical-l(r)
        case 114:
          return N + e + M + O(e, /[svh]\w+-[tblr]{2}/, "tb") + e;
        // vertical-r(l)
        case 108:
          return N + e + M + O(e, /[svh]\w+-[tblr]{2}/, "tb-rl") + e;
        // horizontal(-)tb
        case 45:
          return N + e + M + O(e, /[svh]\w+-[tblr]{2}/, "lr") + e;
      }
    // flex, flex-direction, scroll-snap-type, writing-mode
    case 6828:
    case 4268:
    case 2903:
      return N + e + M + e + e;
    // order
    case 6165:
      return N + e + M + "flex-" + e + e;
    // align-items
    case 5187:
      return N + e + O(e, /(\w+).+(:[^]+)/, N + "box-$1$2" + M + "flex-$1$2") + e;
    // align-self
    case 5443:
      return N + e + M + "flex-item-" + O(e, /flex-|-self/g, "") + (xe(e, /flex-|baseline/) ? "" : M + "grid-row-" + O(e, /flex-|-self/g, "")) + e;
    // align-content
    case 4675:
      return N + e + M + "flex-line-pack" + O(e, /align-content|flex-|-self/g, "") + e;
    // flex-shrink
    case 5548:
      return N + e + M + O(e, "shrink", "negative") + e;
    // flex-basis
    case 5292:
      return N + e + M + O(e, "basis", "preferred-size") + e;
    // flex-grow
    case 6060:
      return N + "box-" + O(e, "-grow", "") + N + e + M + O(e, "grow", "positive") + e;
    // transition
    case 4554:
      return N + O(e, /([^-])(transform)/g, "$1" + N + "$2") + e;
    // cursor
    case 6187:
      return O(O(O(e, /(zoom-|grab)/, N + "$1"), /(image-set)/, N + "$1"), e, "") + e;
    // background, background-image
    case 5495:
    case 3959:
      return O(e, /(image-set\([^]*)/, N + "$1$`$1");
    // justify-content
    case 4968:
      return O(O(e, /(.+:)(flex-)?(.*)/, N + "box-pack:$3" + M + "flex-pack:$3"), /s.+-b[^;]+/, "justify") + N + e + e;
    // justify-self
    case 4200:
      if (!xe(e, /flex-|baseline/)) return M + "grid-column-align" + Ve(e, t) + e;
      break;
    // grid-template-(columns|rows)
    case 2592:
    case 3360:
      return M + O(e, "template-", "") + e;
    // grid-(row|column)-start
    case 4384:
    case 3616:
      return r && r.some(function(n, o) {
        return t = o, xe(n.props, /grid-\w+-end/);
      }) ? ~Dt(e + (r = r[t].value), "span", 0) ? e : M + O(e, "-start", "") + e + M + "grid-row-span:" + (~Dt(r, "span", 0) ? xe(r, /\d+/) : +xe(r, /\d+/) - +xe(e, /\d+/)) + ";" : M + O(e, "-start", "") + e;
    // grid-(row|column)-end
    case 4896:
    case 4128:
      return r && r.some(function(n) {
        return xe(n.props, /grid-\w+-start/);
      }) ? e : M + O(O(e, "-end", "-span"), "span ", "") + e;
    // (margin|padding)-inline-(start|end)
    case 4095:
    case 3583:
    case 4068:
    case 2532:
      return O(e, /(.+)-inline(.+)/, N + "$1$2") + e;
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
      if (de(e) - 1 - t > 6)
        switch (Y(e, t + 1)) {
          // (m)ax-content, (m)in-content
          case 109:
            if (Y(e, t + 4) !== 45)
              break;
          // (f)ill-available, (f)it-content
          case 102:
            return O(e, /(.+:)(.+)-([^]+)/, "$1" + N + "$2-$3$1" + st + (Y(e, t + 3) == 108 ? "$3" : "$2-$3")) + e;
          // (s)tretch
          case 115:
            return ~Dt(e, "stretch", 0) ? po(O(e, "stretch", "fill-available"), t, r) + e : e;
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
        return O(e, ":", ":" + N) + e;
      break;
    // display: (flex|inline-flex|grid|inline-grid)
    case 6444:
      switch (Y(e, Y(e, 14) === 45 ? 18 : 11)) {
        // (inline-)?fle(x)
        case 120:
          return O(e, /(.+:)([^;\s!]+)(;|(\s+)?!.+)?/, "$1" + N + (Y(e, 14) === 45 ? "inline-" : "") + "box$3$1" + N + "$2$3$1" + M + "$2box$3") + e;
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
function qt(e, t) {
  for (var r = "", n = 0; n < e.length; n++)
    r += t(e[n], n, e, t) || "";
  return r;
}
function qi(e, t, r, n) {
  switch (e.type) {
    case ki:
      if (e.children.length) break;
    case $i:
    case Ir:
      return e.return = e.return || e.value;
    case ao:
      return "";
    case so:
      return e.return = e.value + "{" + qt(e.children, n) + "}";
    case Yt:
      if (!de(e.value = e.props.join(","))) return "";
  }
  return de(r = qt(e.children, n)) ? e.return = e.value + "{" + r + "}" : "";
}
function Hi(e) {
  var t = lo(e);
  return function(r, n, o, i) {
    for (var s = "", c = 0; c < t; c++)
      s += e[c](r, n, o, i) || "";
    return s;
  };
}
function Bi(e) {
  return function(t) {
    t.root || (t = t.return) && e(t);
  };
}
function Wi(e, t, r, n) {
  if (e.length > -1 && !e.return)
    switch (e.type) {
      case Ir:
        e.return = po(e.value, e.length, r);
        return;
      case so:
        return qt([Oe(e, { value: O(e.value, "@", "@" + N) })], n);
      case Yt:
        if (e.length)
          return Pi(r = e.props, function(o) {
            switch (xe(o, n = /(::plac\w+|:read-\w+)/)) {
              // :read-(only|write)
              case ":read-only":
              case ":read-write":
                Ye(Oe(e, { props: [O(o, /:(read-\w+)/, ":" + st + "$1")] })), Ye(Oe(e, { props: [o] })), Er(e, { props: In(r, n) });
                break;
              // :placeholder
              case "::placeholder":
                Ye(Oe(e, { props: [O(o, /:(plac\w+)/, ":" + N + "input-$1")] })), Ye(Oe(e, { props: [O(o, /:(plac\w+)/, ":" + st + "$1")] })), Ye(Oe(e, { props: [O(o, /:(plac\w+)/, M + "input-$1")] })), Ye(Oe(e, { props: [o] })), Er(e, { props: In(r, n) });
                break;
            }
            return "";
          });
    }
}
var Fi = {
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
}, _e = typeof process < "u" && process.env !== void 0 && (process.env.REACT_APP_SC_ATTR || process.env.SC_ATTR) || "data-styled", ho = "active", Ht = "data-styled-version", Ke = "6.1.16", Mr = `/*!sc*/
`, Bt = typeof window < "u" && "HTMLElement" in window, Gi = !!(typeof SC_DISABLE_SPEEDY == "boolean" ? SC_DISABLE_SPEEDY : typeof process < "u" && process.env !== void 0 && process.env.REACT_APP_SC_DISABLE_SPEEDY !== void 0 && process.env.REACT_APP_SC_DISABLE_SPEEDY !== "" ? process.env.REACT_APP_SC_DISABLE_SPEEDY !== "false" && process.env.REACT_APP_SC_DISABLE_SPEEDY : typeof process < "u" && process.env !== void 0 && process.env.SC_DISABLE_SPEEDY !== void 0 && process.env.SC_DISABLE_SPEEDY !== "" ? process.env.SC_DISABLE_SPEEDY !== "false" && process.env.SC_DISABLE_SPEEDY : process.env.NODE_ENV !== "production"), Ui = {}, zn = /invalid hook call/i, Tt = /* @__PURE__ */ new Set(), go = function(e, t) {
  if (process.env.NODE_ENV !== "production") {
    var r = t ? ' with the id of "'.concat(t, '"') : "", n = "The component ".concat(e).concat(r, ` has been created dynamically.
`) + `You may see this warning because you've called styled inside another component.
To resolve this only create new StyledComponents outside of any render method and function component.`, o = console.error;
    try {
      var i = !0;
      console.error = function(s) {
        for (var c = [], u = 1; u < arguments.length; u++) c[u - 1] = arguments[u];
        zn.test(s) ? (i = !1, Tt.delete(n)) : o.apply(void 0, qe([s], c, !1));
      }, zo(), i && !Tt.has(n) && (console.warn(n), Tt.add(n));
    } catch (s) {
      zn.test(s.message) && Tt.delete(n);
    } finally {
      console.error = o;
    }
  }
}, Jt = Object.freeze([]), Je = Object.freeze({});
function yo(e, t, r) {
  return r === void 0 && (r = Je), e.theme !== r.theme && e.theme || t || r.theme;
}
var $r = /* @__PURE__ */ new Set(["a", "abbr", "address", "area", "article", "aside", "audio", "b", "base", "bdi", "bdo", "big", "blockquote", "body", "br", "button", "canvas", "caption", "cite", "code", "col", "colgroup", "data", "datalist", "dd", "del", "details", "dfn", "dialog", "div", "dl", "dt", "em", "embed", "fieldset", "figcaption", "figure", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "header", "hgroup", "hr", "html", "i", "iframe", "img", "input", "ins", "kbd", "keygen", "label", "legend", "li", "link", "main", "map", "mark", "menu", "menuitem", "meta", "meter", "nav", "noscript", "object", "ol", "optgroup", "option", "output", "p", "param", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "script", "section", "select", "small", "source", "span", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "textarea", "tfoot", "th", "thead", "time", "tr", "track", "u", "ul", "use", "var", "video", "wbr", "circle", "clipPath", "defs", "ellipse", "foreignObject", "g", "image", "line", "linearGradient", "marker", "mask", "path", "pattern", "polygon", "polyline", "radialGradient", "rect", "stop", "svg", "text", "tspan"]), Yi = /[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g, Vi = /(^-|-$)/g;
function qn(e) {
  return e.replace(Yi, "-").replace(Vi, "");
}
var Xi = /(a)(d)/gi, At = 52, Hn = function(e) {
  return String.fromCharCode(e + (e > 25 ? 39 : 97));
};
function kr(e) {
  var t, r = "";
  for (t = Math.abs(e); t > At; t = t / At | 0) r = Hn(t % At) + r;
  return (Hn(t % At) + r).replace(Xi, "$1-$2");
}
var vr, mo = 5381, Le = function(e, t) {
  for (var r = t.length; r; ) e = 33 * e ^ t.charCodeAt(--r);
  return e;
}, bo = function(e) {
  return Le(mo, e);
};
function xo(e) {
  return kr(bo(e) >>> 0);
}
function vo(e) {
  return process.env.NODE_ENV !== "production" && typeof e == "string" && e || e.displayName || e.name || "Component";
}
function _r(e) {
  return typeof e == "string" && (process.env.NODE_ENV === "production" || e.charAt(0) === e.charAt(0).toLowerCase());
}
var _o = typeof Symbol == "function" && Symbol.for, wo = _o ? Symbol.for("react.memo") : 60115, Ki = _o ? Symbol.for("react.forward_ref") : 60112, Ji = { childContextTypes: !0, contextType: !0, contextTypes: !0, defaultProps: !0, displayName: !0, getDefaultProps: !0, getDerivedStateFromError: !0, getDerivedStateFromProps: !0, mixins: !0, propTypes: !0, type: !0 }, Zi = { name: !0, length: !0, prototype: !0, caller: !0, callee: !0, arguments: !0, arity: !0 }, Eo = { $$typeof: !0, compare: !0, defaultProps: !0, displayName: !0, propTypes: !0, type: !0 }, Qi = ((vr = {})[Ki] = { $$typeof: !0, render: !0, defaultProps: !0, displayName: !0, propTypes: !0 }, vr[wo] = Eo, vr);
function Bn(e) {
  return ("type" in (t = e) && t.type.$$typeof) === wo ? Eo : "$$typeof" in e ? Qi[e.$$typeof] : Ji;
  var t;
}
var ea = Object.defineProperty, ta = Object.getOwnPropertyNames, Wn = Object.getOwnPropertySymbols, ra = Object.getOwnPropertyDescriptor, na = Object.getPrototypeOf, Fn = Object.prototype;
function So(e, t, r) {
  if (typeof t != "string") {
    if (Fn) {
      var n = na(t);
      n && n !== Fn && So(e, n, r);
    }
    var o = ta(t);
    Wn && (o = o.concat(Wn(t)));
    for (var i = Bn(e), s = Bn(t), c = 0; c < o.length; ++c) {
      var u = o[c];
      if (!(u in Zi || r && r[u] || s && u in s || i && u in i)) {
        var l = ra(t, u);
        try {
          ea(e, u, l);
        } catch {
        }
      }
    }
  }
  return e;
}
function He(e) {
  return typeof e == "function";
}
function zr(e) {
  return typeof e == "object" && "styledComponentId" in e;
}
function Me(e, t) {
  return e && t ? "".concat(e, " ").concat(t) : e || t || "";
}
function Wt(e, t) {
  if (e.length === 0) return "";
  for (var r = e[0], n = 1; n < e.length; n++) r += t ? t + e[n] : e[n];
  return r;
}
function Ze(e) {
  return e !== null && typeof e == "object" && e.constructor.name === Object.name && !("props" in e && e.$$typeof);
}
function Or(e, t, r) {
  if (r === void 0 && (r = !1), !r && !Ze(e) && !Array.isArray(e)) return t;
  if (Array.isArray(t)) for (var n = 0; n < t.length; n++) e[n] = Or(e[n], t[n]);
  else if (Ze(t)) for (var n in t) e[n] = Or(e[n], t[n]);
  return e;
}
function qr(e, t) {
  Object.defineProperty(e, "toString", { value: t });
}
var oa = process.env.NODE_ENV !== "production" ? { 1: `Cannot create styled-component for component: %s.

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
function ia() {
  for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
  for (var r = e[0], n = [], o = 1, i = e.length; o < i; o += 1) n.push(e[o]);
  return n.forEach(function(s) {
    r = r.replace(/%[a-z]/, s);
  }), r;
}
function ee(e) {
  for (var t = [], r = 1; r < arguments.length; r++) t[r - 1] = arguments[r];
  return process.env.NODE_ENV === "production" ? new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(e, " for more information.").concat(t.length > 0 ? " Args: ".concat(t.join(", ")) : "")) : new Error(ia.apply(void 0, qe([oa[e]], t, !1)).trim());
}
var aa = function() {
  function e(t) {
    this.groupSizes = new Uint32Array(512), this.length = 512, this.tag = t;
  }
  return e.prototype.indexOfGroup = function(t) {
    for (var r = 0, n = 0; n < t; n++) r += this.groupSizes[n];
    return r;
  }, e.prototype.insertRules = function(t, r) {
    if (t >= this.groupSizes.length) {
      for (var n = this.groupSizes, o = n.length, i = o; t >= i; ) if ((i <<= 1) < 0) throw ee(16, "".concat(t));
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
    for (var n = this.groupSizes[t], o = this.indexOfGroup(t), i = o + n, s = o; s < i; s++) r += "".concat(this.tag.getRule(s)).concat(Mr);
    return r;
  }, e;
}(), sa = 1 << 30, Mt = /* @__PURE__ */ new Map(), Ft = /* @__PURE__ */ new Map(), zt = 1, jt = function(e) {
  if (Mt.has(e)) return Mt.get(e);
  for (; Ft.has(zt); ) zt++;
  var t = zt++;
  if (process.env.NODE_ENV !== "production" && ((0 | t) < 0 || t > sa)) throw ee(16, "".concat(t));
  return Mt.set(e, t), Ft.set(t, e), t;
}, ca = function(e, t) {
  zt = t + 1, Mt.set(e, t), Ft.set(t, e);
}, ua = "style[".concat(_e, "][").concat(Ht, '="').concat(Ke, '"]'), la = new RegExp("^".concat(_e, '\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')), da = function(e, t, r) {
  for (var n, o = r.split(","), i = 0, s = o.length; i < s; i++) (n = o[i]) && e.registerName(t, n);
}, fa = function(e, t) {
  for (var r, n = ((r = t.textContent) !== null && r !== void 0 ? r : "").split(Mr), o = [], i = 0, s = n.length; i < s; i++) {
    var c = n[i].trim();
    if (c) {
      var u = c.match(la);
      if (u) {
        var l = 0 | parseInt(u[1], 10), p = u[2];
        l !== 0 && (ca(p, l), da(e, p, u[3]), e.getTag().insertRules(l, o)), o.length = 0;
      } else o.push(c);
    }
  }
}, Gn = function(e) {
  for (var t = document.querySelectorAll(ua), r = 0, n = t.length; r < n; r++) {
    var o = t[r];
    o && o.getAttribute(_e) !== ho && (fa(e, o), o.parentNode && o.parentNode.removeChild(o));
  }
};
function Pr() {
  return typeof __webpack_nonce__ < "u" ? __webpack_nonce__ : null;
}
var Ro = function(e) {
  var t = document.head, r = e || t, n = document.createElement("style"), o = function(c) {
    var u = Array.from(c.querySelectorAll("style[".concat(_e, "]")));
    return u[u.length - 1];
  }(r), i = o !== void 0 ? o.nextSibling : null;
  n.setAttribute(_e, ho), n.setAttribute(Ht, Ke);
  var s = Pr();
  return s && n.setAttribute("nonce", s), r.insertBefore(n, i), n;
}, pa = function() {
  function e(t) {
    this.element = Ro(t), this.element.appendChild(document.createTextNode("")), this.sheet = function(r) {
      if (r.sheet) return r.sheet;
      for (var n = document.styleSheets, o = 0, i = n.length; o < i; o++) {
        var s = n[o];
        if (s.ownerNode === r) return s;
      }
      throw ee(17);
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
}(), ha = function() {
  function e(t) {
    this.element = Ro(t), this.nodes = this.element.childNodes, this.length = 0;
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
}(), ga = function() {
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
}(), Un = Bt, ya = { isServer: !Bt, useCSSOMInjection: !Gi }, ct = function() {
  function e(t, r, n) {
    t === void 0 && (t = Je), r === void 0 && (r = {});
    var o = this;
    this.options = U(U({}, ya), t), this.gs = r, this.names = new Map(n), this.server = !!t.isServer, !this.server && Bt && Un && (Un = !1, Gn(this)), qr(this, function() {
      return function(i) {
        for (var s = i.getTag(), c = s.length, u = "", l = function(g) {
          var h = function(I) {
            return Ft.get(I);
          }(g);
          if (h === void 0) return "continue";
          var x = i.names.get(h), $ = s.getGroup(g);
          if (x === void 0 || !x.size || $.length === 0) return "continue";
          var A = "".concat(_e, ".g").concat(g, '[id="').concat(h, '"]'), H = "";
          x !== void 0 && x.forEach(function(I) {
            I.length > 0 && (H += "".concat(I, ","));
          }), u += "".concat($).concat(A, '{content:"').concat(H, '"}').concat(Mr);
        }, p = 0; p < c; p++) l(p);
        return u;
      }(o);
    });
  }
  return e.registerId = function(t) {
    return jt(t);
  }, e.prototype.rehydrate = function() {
    !this.server && Bt && Gn(this);
  }, e.prototype.reconstructWithOptions = function(t, r) {
    return r === void 0 && (r = !0), new e(U(U({}, this.options), t), this.gs, r && this.names || void 0);
  }, e.prototype.allocateGSInstance = function(t) {
    return this.gs[t] = (this.gs[t] || 0) + 1;
  }, e.prototype.getTag = function() {
    return this.tag || (this.tag = (t = function(r) {
      var n = r.useCSSOMInjection, o = r.target;
      return r.isServer ? new ga(o) : n ? new pa(o) : new ha(o);
    }(this.options), new aa(t)));
    var t;
  }, e.prototype.hasNameForId = function(t, r) {
    return this.names.has(t) && this.names.get(t).has(r);
  }, e.prototype.registerName = function(t, r) {
    if (jt(t), this.names.has(t)) this.names.get(t).add(r);
    else {
      var n = /* @__PURE__ */ new Set();
      n.add(r), this.names.set(t, n);
    }
  }, e.prototype.insertRules = function(t, r, n) {
    this.registerName(t, r), this.getTag().insertRules(jt(t), n);
  }, e.prototype.clearNames = function(t) {
    this.names.has(t) && this.names.get(t).clear();
  }, e.prototype.clearRules = function(t) {
    this.getTag().clearGroup(jt(t)), this.clearNames(t);
  }, e.prototype.clearTag = function() {
    this.tag = void 0;
  }, e;
}(), ma = /&/g, ba = /^\s*\/\/.*$/gm;
function $o(e, t) {
  return e.map(function(r) {
    return r.type === "rule" && (r.value = "".concat(t, " ").concat(r.value), r.value = r.value.replaceAll(",", ",".concat(t, " ")), r.props = r.props.map(function(n) {
      return "".concat(t, " ").concat(n);
    })), Array.isArray(r.children) && r.type !== "@keyframes" && (r.children = $o(r.children, t)), r;
  });
}
function ko(e) {
  var t, r, n, o = e === void 0 ? Je : e, i = o.options, s = i === void 0 ? Je : i, c = o.plugins, u = c === void 0 ? Jt : c, l = function(h, x, $) {
    return $.startsWith(r) && $.endsWith(r) && $.replaceAll(r, "").length > 0 ? ".".concat(t) : h;
  }, p = u.slice();
  p.push(function(h) {
    h.type === Yt && h.value.includes("&") && (h.props[0] = h.props[0].replace(ma, r).replace(n, l));
  }), s.prefix && p.push(Wi), p.push(qi);
  var g = function(h, x, $, A) {
    x === void 0 && (x = ""), $ === void 0 && ($ = ""), A === void 0 && (A = "&"), t = A, r = x, n = new RegExp("\\".concat(r, "\\b"), "g");
    var H = h.replace(ba, ""), I = Mi($ || x ? "".concat($, " ").concat(x, " { ").concat(H, " }") : H);
    s.namespace && (I = $o(I, s.namespace));
    var _ = [];
    return qt(I, Hi(p.concat(Bi(function(w) {
      return _.push(w);
    })))), _;
  };
  return g.hash = u.length ? u.reduce(function(h, x) {
    return x.name || ee(15), Le(h, x.name);
  }, mo).toString() : "", g;
}
var xa = new ct(), Tr = ko(), Hr = B.createContext({ shouldForwardProp: void 0, styleSheet: xa, stylis: Tr });
Hr.Consumer;
var va = B.createContext(void 0);
function Gt() {
  return Zn(Hr);
}
function Oo(e) {
  var t = jr(e.stylisPlugins), r = t[0], n = t[1], o = Gt().styleSheet, i = Nt(function() {
    var u = o;
    return e.sheet ? u = e.sheet : e.target && (u = u.reconstructWithOptions({ target: e.target }, !1)), e.disableCSSOMInjection && (u = u.reconstructWithOptions({ useCSSOMInjection: !1 })), u;
  }, [e.disableCSSOMInjection, e.sheet, e.target, o]), s = Nt(function() {
    return ko({ options: { namespace: e.namespace, prefix: e.enableVendorPrefixes }, plugins: r });
  }, [e.enableVendorPrefixes, e.namespace, r]);
  Qn(function() {
    Ri(r, e.stylisPlugins) || n(e.stylisPlugins);
  }, [e.stylisPlugins]);
  var c = Nt(function() {
    return { shouldForwardProp: e.shouldForwardProp, styleSheet: i, stylis: s };
  }, [e.shouldForwardProp, i, s]);
  return B.createElement(Hr.Provider, { value: c }, B.createElement(va.Provider, { value: s }, e.children));
}
var Yn = function() {
  function e(t, r) {
    var n = this;
    this.inject = function(o, i) {
      i === void 0 && (i = Tr);
      var s = n.name + i.hash;
      o.hasNameForId(n.id, s) || o.insertRules(n.id, s, i(n.rules, s, "@keyframes"));
    }, this.name = t, this.id = "sc-keyframes-".concat(t), this.rules = r, qr(this, function() {
      throw ee(12, String(n.name));
    });
  }
  return e.prototype.getName = function(t) {
    return t === void 0 && (t = Tr), this.name + t.hash;
  }, e;
}(), _a = function(e) {
  return e >= "A" && e <= "Z";
};
function Vn(e) {
  for (var t = "", r = 0; r < e.length; r++) {
    var n = e[r];
    if (r === 1 && n === "-" && e[0] === "-") return e;
    _a(n) ? t += "-" + n.toLowerCase() : t += n;
  }
  return t.startsWith("ms-") ? "-" + t : t;
}
var Po = function(e) {
  return e == null || e === !1 || e === "";
}, To = function(e) {
  var t, r, n = [];
  for (var o in e) {
    var i = e[o];
    e.hasOwnProperty(o) && !Po(i) && (Array.isArray(i) && i.isCss || He(i) ? n.push("".concat(Vn(o), ":"), i, ";") : Ze(i) ? n.push.apply(n, qe(qe(["".concat(o, " {")], To(i), !1), ["}"], !1)) : n.push("".concat(Vn(o), ": ").concat((t = o, (r = i) == null || typeof r == "boolean" || r === "" ? "" : typeof r != "number" || r === 0 || t in Fi || t.startsWith("--") ? String(r).trim() : "".concat(r, "px")), ";")));
  }
  return n;
};
function Pe(e, t, r, n) {
  if (Po(e)) return [];
  if (zr(e)) return [".".concat(e.styledComponentId)];
  if (He(e)) {
    if (!He(i = e) || i.prototype && i.prototype.isReactComponent || !t) return [e];
    var o = e(t);
    return process.env.NODE_ENV === "production" || typeof o != "object" || Array.isArray(o) || o instanceof Yn || Ze(o) || o === null || console.error("".concat(vo(e), " is not a styled component and cannot be referred to via component selector. See https://www.styled-components.com/docs/advanced#referring-to-other-components for more details.")), Pe(o, t, r, n);
  }
  var i;
  return e instanceof Yn ? r ? (e.inject(r, n), [e.getName(n)]) : [e] : Ze(e) ? To(e) : Array.isArray(e) ? Array.prototype.concat.apply(Jt, e.map(function(s) {
    return Pe(s, t, r, n);
  })) : [e.toString()];
}
function Ao(e) {
  for (var t = 0; t < e.length; t += 1) {
    var r = e[t];
    if (He(r) && !zr(r)) return !1;
  }
  return !0;
}
var wa = bo(Ke), Ea = function() {
  function e(t, r, n) {
    this.rules = t, this.staticRulesId = "", this.isStatic = process.env.NODE_ENV === "production" && (n === void 0 || n.isStatic) && Ao(t), this.componentId = r, this.baseHash = Le(wa, r), this.baseStyle = n, ct.registerId(r);
  }
  return e.prototype.generateAndInjectStyles = function(t, r, n) {
    var o = this.baseStyle ? this.baseStyle.generateAndInjectStyles(t, r, n) : "";
    if (this.isStatic && !n.hash) if (this.staticRulesId && r.hasNameForId(this.componentId, this.staticRulesId)) o = Me(o, this.staticRulesId);
    else {
      var i = Wt(Pe(this.rules, t, r, n)), s = kr(Le(this.baseHash, i) >>> 0);
      if (!r.hasNameForId(this.componentId, s)) {
        var c = n(i, ".".concat(s), void 0, this.componentId);
        r.insertRules(this.componentId, s, c);
      }
      o = Me(o, s), this.staticRulesId = s;
    }
    else {
      for (var u = Le(this.baseHash, n.hash), l = "", p = 0; p < this.rules.length; p++) {
        var g = this.rules[p];
        if (typeof g == "string") l += g, process.env.NODE_ENV !== "production" && (u = Le(u, g));
        else if (g) {
          var h = Wt(Pe(g, t, r, n));
          u = Le(u, h + p), l += h;
        }
      }
      if (l) {
        var x = kr(u >>> 0);
        r.hasNameForId(this.componentId, x) || r.insertRules(this.componentId, x, n(l, ".".concat(x), void 0, this.componentId)), o = Me(o, x);
      }
    }
    return o;
  }, e;
}(), Qe = B.createContext(void 0);
Qe.Consumer;
function Br() {
  var e = Zn(Qe);
  if (!e) throw ee(18);
  return e;
}
function Sa(e) {
  var t = B.useContext(Qe), r = Nt(function() {
    return function(n, o) {
      if (!n) throw ee(14);
      if (He(n)) {
        var i = n(o);
        if (process.env.NODE_ENV !== "production" && (i === null || Array.isArray(i) || typeof i != "object")) throw ee(7);
        return i;
      }
      if (Array.isArray(n) || typeof n != "object") throw ee(8);
      return o ? U(U({}, o), n) : n;
    }(e.theme, t);
  }, [e.theme, t]);
  return e.children ? B.createElement(Qe.Provider, { value: r }, e.children) : null;
}
var wr = {}, Xn = /* @__PURE__ */ new Set();
function Ra(e, t, r) {
  var n = zr(e), o = e, i = !_r(e), s = t.attrs, c = s === void 0 ? Jt : s, u = t.componentId, l = u === void 0 ? function(R, T) {
    var S = typeof R != "string" ? "sc" : qn(R);
    wr[S] = (wr[S] || 0) + 1;
    var E = "".concat(S, "-").concat(xo(Ke + S + wr[S]));
    return T ? "".concat(T, "-").concat(E) : E;
  }(t.displayName, t.parentComponentId) : u, p = t.displayName, g = p === void 0 ? function(R) {
    return _r(R) ? "styled.".concat(R) : "Styled(".concat(vo(R), ")");
  }(e) : p, h = t.displayName && t.componentId ? "".concat(qn(t.displayName), "-").concat(t.componentId) : t.componentId || l, x = n && o.attrs ? o.attrs.concat(c).filter(Boolean) : c, $ = t.shouldForwardProp;
  if (n && o.shouldForwardProp) {
    var A = o.shouldForwardProp;
    if (t.shouldForwardProp) {
      var H = t.shouldForwardProp;
      $ = function(R, T) {
        return A(R, T) && H(R, T);
      };
    } else $ = A;
  }
  var I = new Ea(r, h, n ? o.componentStyle : void 0);
  function _(R, T) {
    return function(S, E, K) {
      var G = S.attrs, ce = S.componentStyle, Te = S.defaultProps, Ee = S.foldedComponentIds, fe = S.styledComponentId, Se = S.target, Ae = B.useContext(Qe), rt = Gt(), Re = S.shouldForwardProp || rt.shouldForwardProp;
      process.env.NODE_ENV !== "production" && Yr(fe);
      var We = yo(E, Ae, Te) || Je, W = function(he, le, ge) {
        for (var ae, ne = U(U({}, le), { className: void 0, theme: ge }), $e = 0; $e < he.length; $e += 1) {
          var f = He(ae = he[$e]) ? ae(ne) : ae;
          for (var d in f) ne[d] = d === "className" ? Me(ne[d], f[d]) : d === "style" ? U(U({}, ne[d]), f[d]) : f[d];
        }
        return le.className && (ne.className = Me(ne.className, le.className)), ne;
      }(G, E, We), ue = W.as || Se, J = {};
      for (var V in W) W[V] === void 0 || V[0] === "$" || V === "as" || V === "theme" && W.theme === We || (V === "forwardedAs" ? J.as = W.forwardedAs : Re && !Re(V, ue) || (J[V] = W[V], Re || process.env.NODE_ENV !== "development" || wi(V) || Xn.has(V) || !$r.has(ue) || (Xn.add(V), console.warn('styled-components: it looks like an unknown prop "'.concat(V, '" is being sent through to the DOM, which will likely trigger a React console error. If you would like automatic filtering of unknown props, you can opt-into that behavior via `<StyleSheetManager shouldForwardProp={...}>` (connect an API like `@emotion/is-prop-valid`) or consider using transient props (`$` prefix for automatic filtering.)')))));
      var pe = function(he, le) {
        var ge = Gt(), ae = he.generateAndInjectStyles(le, ge.styleSheet, ge.stylis);
        return process.env.NODE_ENV !== "production" && Yr(ae), ae;
      }(ce, W);
      process.env.NODE_ENV !== "production" && S.warnTooManyClasses && S.warnTooManyClasses(pe);
      var ie = Me(Ee, fe);
      return pe && (ie += " " + pe), W.className && (ie += " " + W.className), J[_r(ue) && !$r.has(ue) ? "class" : "className"] = ie, K && (J.ref = K), qo(ue, J);
    }(w, R, T);
  }
  _.displayName = g;
  var w = B.forwardRef(_);
  return w.attrs = x, w.componentStyle = I, w.displayName = g, w.shouldForwardProp = $, w.foldedComponentIds = n ? Me(o.foldedComponentIds, o.styledComponentId) : "", w.styledComponentId = h, w.target = n ? o.target : e, Object.defineProperty(w, "defaultProps", { get: function() {
    return this._foldedDefaultProps;
  }, set: function(R) {
    this._foldedDefaultProps = n ? function(T) {
      for (var S = [], E = 1; E < arguments.length; E++) S[E - 1] = arguments[E];
      for (var K = 0, G = S; K < G.length; K++) Or(T, G[K], !0);
      return T;
    }({}, o.defaultProps, R) : R;
  } }), process.env.NODE_ENV !== "production" && (go(g, h), w.warnTooManyClasses = /* @__PURE__ */ function(R, T) {
    var S = {}, E = !1;
    return function(K) {
      if (!E && (S[K] = !0, Object.keys(S).length >= 200)) {
        var G = T ? ' with the id of "'.concat(T, '"') : "";
        console.warn("Over ".concat(200, " classes were generated for component ").concat(R).concat(G, `.
`) + `Consider using the attrs method, together with a style object for frequently changed styles.
Example:
  const Component = styled.div.attrs(props => ({
    style: {
      background: props.background,
    },
  }))\`width: 100%;\`

  <Component />`), E = !0, S = {};
      }
    };
  }(g, h)), qr(w, function() {
    return ".".concat(w.styledComponentId);
  }), i && So(w, e, { attrs: !0, componentStyle: !0, displayName: !0, foldedComponentIds: !0, shouldForwardProp: !0, styledComponentId: !0, target: !0 }), w;
}
function Kn(e, t) {
  for (var r = [e[0]], n = 0, o = t.length; n < o; n += 1) r.push(t[n], e[n + 1]);
  return r;
}
var Jn = function(e) {
  return Object.assign(e, { isCss: !0 });
};
function P(e) {
  for (var t = [], r = 1; r < arguments.length; r++) t[r - 1] = arguments[r];
  if (He(e) || Ze(e)) return Jn(Pe(Kn(Jt, qe([e], t, !0))));
  var n = e;
  return t.length === 0 && n.length === 1 && typeof n[0] == "string" ? Pe(n) : Jn(Pe(Kn(n, t)));
}
function Ar(e, t, r) {
  if (r === void 0 && (r = Je), !t) throw ee(1, t);
  var n = function(o) {
    for (var i = [], s = 1; s < arguments.length; s++) i[s - 1] = arguments[s];
    return e(t, r, P.apply(void 0, qe([o], i, !1)));
  };
  return n.attrs = function(o) {
    return Ar(e, t, U(U({}, r), { attrs: Array.prototype.concat(r.attrs, o).filter(Boolean) }));
  }, n.withConfig = function(o) {
    return Ar(e, t, U(U({}, r), o));
  }, n;
}
var jo = function(e) {
  return Ar(Ra, e);
}, q = jo;
$r.forEach(function(e) {
  q[e] = jo(e);
});
var $a = function() {
  function e(t, r) {
    this.rules = t, this.componentId = r, this.isStatic = Ao(t), ct.registerId(this.componentId + 1);
  }
  return e.prototype.createStyles = function(t, r, n, o) {
    var i = o(Wt(Pe(this.rules, r, n, o)), ""), s = this.componentId + t;
    n.insertRules(s, s, i);
  }, e.prototype.removeStyles = function(t, r) {
    r.clearRules(this.componentId + t);
  }, e.prototype.renderStyles = function(t, r, n, o) {
    t > 2 && ct.registerId(this.componentId + t), this.removeStyles(t, n), this.createStyles(t, r, n, o);
  }, e;
}();
function ka(e) {
  for (var t = [], r = 1; r < arguments.length; r++) t[r - 1] = arguments[r];
  var n = P.apply(void 0, qe([e], t, !1)), o = "sc-global-".concat(xo(JSON.stringify(n))), i = new $a(n, o);
  process.env.NODE_ENV !== "production" && go(o);
  var s = function(u) {
    var l = Gt(), p = B.useContext(Qe), g = B.useRef(l.styleSheet.allocateGSInstance(o)).current;
    return process.env.NODE_ENV !== "production" && B.Children.count(u.children) && console.warn("The global style component ".concat(o, " was given child JSX. createGlobalStyle does not render children.")), process.env.NODE_ENV !== "production" && n.some(function(h) {
      return typeof h == "string" && h.indexOf("@import") !== -1;
    }) && console.warn("Please do not use @import CSS syntax in createGlobalStyle at this time, as the CSSOM APIs we use in production do not handle it well. Instead, we recommend using a library such as react-helmet to inject a typical <link> meta tag to the stylesheet, or simply embedding it manually in your index.html <head> section for a simpler app."), l.styleSheet.server && c(g, u, l.styleSheet, p, l.stylis), B.useLayoutEffect(function() {
      if (!l.styleSheet.server) return c(g, u, l.styleSheet, p, l.stylis), function() {
        return i.removeStyles(g, l.styleSheet);
      };
    }, [g, u, l.styleSheet, p, l.stylis]), null;
  };
  function c(u, l, p, g, h) {
    if (i.isStatic) i.renderStyles(u, Ui, p, h);
    else {
      var x = U(U({}, l), { theme: yo(l, g, s.defaultProps) });
      i.renderStyles(u, x, p, h);
    }
  }
  return B.memo(s);
}
var Oa = function() {
  function e() {
    var t = this;
    this._emitSheetCSS = function() {
      var r = t.instance.toString();
      if (!r) return "";
      var n = Pr(), o = Wt([n && 'nonce="'.concat(n, '"'), "".concat(_e, '="true"'), "".concat(Ht, '="').concat(Ke, '"')].filter(Boolean), " ");
      return "<style ".concat(o, ">").concat(r, "</style>");
    }, this.getStyleTags = function() {
      if (t.sealed) throw ee(2);
      return t._emitSheetCSS();
    }, this.getStyleElement = function() {
      var r;
      if (t.sealed) throw ee(2);
      var n = t.instance.toString();
      if (!n) return [];
      var o = ((r = {})[_e] = "", r[Ht] = Ke, r.dangerouslySetInnerHTML = { __html: n }, r), i = Pr();
      return i && (o.nonce = i), [B.createElement("style", U({}, o, { key: "sc-0-0" }))];
    }, this.seal = function() {
      t.sealed = !0;
    }, this.instance = new ct({ isServer: !0 }), this.sealed = !1;
  }
  return e.prototype.collectStyles = function(t) {
    if (this.sealed) throw ee(2);
    return B.createElement(Oo, { sheet: this.instance }, t);
  }, e.prototype.interleaveWithNodeStream = function(t) {
    throw ee(3);
  }, e;
}();
process.env.NODE_ENV !== "production" && typeof navigator < "u" && navigator.product === "ReactNative" && console.warn(`It looks like you've imported 'styled-components' on React Native.
Perhaps you're looking to import 'styled-components/native'?
Read more about this at https://www.styled-components.com/docs/basics#react-native`);
var Ct = "__sc-".concat(_e, "__");
process.env.NODE_ENV !== "production" && process.env.NODE_ENV !== "test" && typeof window < "u" && (window[Ct] || (window[Ct] = 0), window[Ct] === 1 && console.warn(`It looks like there are several instances of 'styled-components' initialized in this application. This may cause dynamic styles to not render properly, errors during the rehydration process, a missing theme prop, and makes your application bigger without good reason.

See https://s-c.sh/2BAXzed for more info.`), window[Ct] += 1);
function ws({ children: e }) {
  const [t] = jr(() => new Oa());
  return xi.useServerInsertedHTML(() => {
    const r = t.getStyleElement();
    return t.instance.clearTag(), /* @__PURE__ */ v.jsx(v.Fragment, { children: r });
  }), typeof window < "u" ? /* @__PURE__ */ v.jsx(v.Fragment, { children: e }) : /* @__PURE__ */ v.jsx(Oo, { sheet: t.instance, enableVendorPrefixes: !0, children: e });
}
const Pa = (e) => ka`
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
function Ta({ ...e }) {
  const t = Br();
  return /* @__PURE__ */ v.jsx(
    "svg",
    {
      width: "12",
      height: "10",
      viewBox: "0 0 12 10",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      ...e,
      children: /* @__PURE__ */ v.jsx(
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
function Aa({ ...e }) {
  const t = Br();
  return /* @__PURE__ */ v.jsx(
    "svg",
    {
      width: "16",
      height: "10",
      viewBox: "0 0 16 10",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      ...e,
      children: /* @__PURE__ */ v.jsx(
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
function ja({ ...e }) {
  const t = Br();
  return /* @__PURE__ */ v.jsxs(
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
        /* @__PURE__ */ v.jsx("path", { d: "M8 2v4" }),
        /* @__PURE__ */ v.jsx("path", { d: "M16 2v4" }),
        /* @__PURE__ */ v.jsx("rect", { width: "18", height: "18", x: "3", y: "4", rx: "2" }),
        /* @__PURE__ */ v.jsx("path", { d: "M3 10h18" }),
        /* @__PURE__ */ v.jsx("path", { d: "M8 14h.01" }),
        /* @__PURE__ */ v.jsx("path", { d: "M12 14h.01" }),
        /* @__PURE__ */ v.jsx("path", { d: "M16 14h.01" }),
        /* @__PURE__ */ v.jsx("path", { d: "M8 18h.01" }),
        /* @__PURE__ */ v.jsx("path", { d: "M12 18h.01" }),
        /* @__PURE__ */ v.jsx("path", { d: "M16 18h.01" })
      ]
    }
  );
}
const Wr = {
  xs: 0,
  sm: 576,
  md: 768,
  lg: 992,
  xl: 1200,
  xxl: 1440,
  xxxl: 1920
};
function D(e) {
  return `@media screen and (min-width: ${Wr[e]}px)`;
}
const Co = {
  maxWidth: { xs: "1280px", xxxl: "1440px" },
  padding: { xs: "20px", lg: "40px" },
  radius: { xs: "6px", lg: "12px", xl: "30px" },
  gridGap: { xs: "20px", lg: "40px" }
}, Ca = {
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
}, Na = {
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
}, Da = {
  xs: "0px 4px 4px 0px rgba(18, 18, 18, 0.04), 0px 1px 3px 0px rgba(39, 41, 45, 0.02)",
  sm: "0px 4px 4px 0px rgba(18, 18, 18, 0.08), 0px 1px 3px 0px rgba(39, 41, 45, 0.04)",
  md: "0px 8px 8px 0px rgba(18, 18, 18, 0.16), 0px 2px 3px 0px rgba(39, 41, 45, 0.06)",
  lg: "0px 16px 24px 0px rgba(18, 18, 18, 0.20), 0px 2px 3px 0px rgba(39, 41, 45, 0.08)",
  xl: "0px 24px 32px 0px rgba(18, 18, 18, 0.24), 0px 2px 3px 0px rgba(39, 41, 45, 0.12)"
}, Ia = {
  xs: "0px 4px 4px 0px rgba(255, 255, 255, 0.04), 0px 1px 3px 0px rgba(255, 255, 255, 0.02)",
  sm: "0px 4px 4px 0px rgba(255, 255, 255, 0.08), 0px 1px 3px 0px rgba(255, 255, 255, 0.04)",
  md: "0px 8px 8px 0px rgba(255, 255, 255, 0.16), 0px 2px 3px 0px rgba(255, 255, 255, 0.06)",
  lg: "0px 16px 24px 0px rgba(255, 255, 255, 0.20), 0px 2px 3px 0px rgba(255, 255, 255, 0.08)",
  xl: "0px 24px 32px 0px rgba(255, 255, 255, 0.24), 0px 2px 3px 0px rgba(255, 255, 255, 0.12)"
}, No = {
  text: "Inter",
  head: "Inter",
  mono: "monospace"
}, Do = {
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
}, Io = {
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
}, lt = {
  breakpoints: Wr,
  spacing: Co,
  colors: Ca,
  shadows: Da,
  fonts: No,
  fontSizes: Do,
  lineHeights: Io,
  isDark: !1
}, Es = {
  breakpoints: Wr,
  spacing: Co,
  colors: Na,
  shadows: Ia,
  fonts: No,
  fontSizes: Do,
  lineHeights: Io,
  isDark: !0
}, ve = P`
  box-sizing: border-box;
  appearance: none;
  border: none;
  background: none;
  padding: 0;
  margin: 0;
  cursor: pointer;
  outline: none;
`, Fr = P`
  cursor: text;
  min-width: 100px;
`, we = (e) => {
  if (e)
    return P`
      width: 100%;
    `;
}, Be = (e, t, r) => {
  if (e)
    return P`
      border-color: ${r == null ? void 0 : r.colors.error};
    `;
  if (t)
    return P`
      border-color: ${r == null ? void 0 : r.colors.success};
    `;
}, Gr = (e) => e === "big" ? P`
      height: 60px;
    ` : P`
    height: 50px;
  `, Q = (e, t) => P`
  ${D(e)} {
    gap: ${t === "none" ? "0" : `${t}px`};
  }
`, Ce = (e, t) => P`
  ${D(e)} {
    grid-template-columns: repeat(${t || 3}, minmax(0, 1fr));
  }
`, Ne = (e, t) => P`
  ${D(e)} {
    grid-column: span ${t};
  }
`, De = (e, t) => P`
  ${D(e)} {
    padding: ${t === "none" ? "0" : `${t}px`};
  }
`, Ie = (e, t) => P`
  ${D(e)} {
    justify-content: ${t && `${t}`};
  }
`, Ss = (e) => P`
  font-size: ${e.fontSizes.hero1.xs};
  line-height: ${e.lineHeights.hero1.xs};

  ${D("lg")} {
    font-size: ${e.fontSizes.hero1.lg};
    line-height: ${e.lineHeights.hero1.lg};
  }
`, Rs = (e) => P`
  font-size: ${e.fontSizes.hero2.xs};
  line-height: ${e.lineHeights.hero2.xs};

  ${D("lg")} {
    font-size: ${e.fontSizes.hero2.lg};
    line-height: ${e.lineHeights.hero2.lg};
  }
`, $s = (e) => P`
  font-size: ${e.fontSizes.hero3.xs};
  line-height: ${e.lineHeights.hero3.xs};

  ${D("lg")} {
    font-size: ${e.fontSizes.hero3.lg};
    line-height: ${e.lineHeights.hero3.lg};
  }
`, ks = (e) => P`
  font-size: ${e.fontSizes.h1.xs};
  line-height: ${e.lineHeights.h1.xs};

  ${D("lg")} {
    font-size: ${e.fontSizes.h1.lg};
    line-height: ${e.lineHeights.h1.lg};
  }
`, Os = (e) => P`
  font-size: ${e.fontSizes.h2.xs};
  line-height: ${e.lineHeights.h2.xs};

  ${D("lg")} {
    font-size: ${e.fontSizes.h2.lg};
    line-height: ${e.lineHeights.h2.lg};
  }
`, Ps = (e) => P`
  font-size: ${e.fontSizes.h3.xs};
  line-height: ${e.lineHeights.h3.xs};

  ${D("lg")} {
    font-size: ${e.fontSizes.h3.lg};
    line-height: ${e.lineHeights.h3.lg};
  }
`, Ts = (e) => P`
  font-size: ${e.fontSizes.h4.xs};
  line-height: ${e.lineHeights.h4.xs};

  ${D("lg")} {
    font-size: ${e.fontSizes.h4.lg};
    line-height: ${e.lineHeights.h4.lg};
  }
`, As = (e) => P`
  font-size: ${e.fontSizes.h5.xs};
  line-height: ${e.lineHeights.h5.xs};

  ${D("lg")} {
    font-size: ${e.fontSizes.h5.lg};
    line-height: ${e.lineHeights.h5.lg};
  }
`, js = (e) => P`
  font-size: ${e.fontSizes.h6.xs};
  line-height: ${e.lineHeights.h6.xs};

  ${D("lg")} {
    font-size: ${e.fontSizes.h6.lg};
    line-height: ${e.lineHeights.h6.lg};
  }
`, Cs = (e) => P`
  font-size: ${e.fontSizes.text.xs};
  line-height: ${e.lineHeights.text.xs};

  ${D("lg")} {
    font-size: ${e.fontSizes.text.lg};
    line-height: ${e.lineHeights.text.lg};
  }
`, Ns = (e) => P`
  font-size: ${e.fontSizes.strong.xs};
  line-height: ${e.lineHeights.strong.xs};

  ${D("lg")} {
    font-size: ${e.fontSizes.strong.lg};
    line-height: ${e.lineHeights.strong.lg};
  }
`, Ds = (e) => P`
  font-size: ${e.fontSizes.small.xs};
  line-height: ${e.lineHeights.small.xs};

  ${D("lg")} {
    font-size: ${e.fontSizes.small.lg};
    line-height: ${e.lineHeights.small.lg};
  }
`, Is = (e) => P`
  font-size: ${e.fontSizes.blockquote.xs};
  line-height: ${e.lineHeights.blockquote.xs};

  ${D("lg")} {
    font-size: ${e.fontSizes.blockquote.lg};
    line-height: ${e.lineHeights.blockquote.lg};
  }
`, Ls = (e) => P`
  font-size: ${e.fontSizes.code.xs};
  line-height: ${e.lineHeights.code.xs};

  ${D("lg")} {
    font-size: ${e.fontSizes.code.lg};
    line-height: ${e.lineHeights.code.lg};
  }
`, Ms = (e) => P`
  font-size: ${e.fontSizes.button.xs};
  line-height: ${e.lineHeights.button.xs};

  ${D("lg")} {
    font-size: ${e.fontSizes.button.lg};
    line-height: ${e.lineHeights.button.lg};
  }
`, zs = (e) => P`
  font-size: ${e.fontSizes.buttonBig.xs};
  line-height: ${e.lineHeights.buttonBig.xs};

  ${D("lg")} {
    font-size: ${e.fontSizes.buttonBig.lg};
    line-height: ${e.lineHeights.buttonBig.lg};
  }
`, qs = (e) => P`
  font-size: ${e.fontSizes.input.xs};
  line-height: ${e.lineHeights.input.xs};

  ${D("lg")} {
    font-size: ${e.fontSizes.input.lg};
    line-height: ${e.lineHeights.input.lg};
  }
`, Hs = (e) => P`
  font-size: ${e.fontSizes.inputBig.xs};
  line-height: ${e.lineHeights.inputBig.xs};

  ${D("lg")} {
    font-size: ${e.fontSizes.inputBig.lg};
    line-height: ${e.lineHeights.inputBig.lg};
  }
`, La = Ho({
  setTheme: null
});
function Bs({
  children: e,
  theme: t,
  themeDark: r
}) {
  const [n, o] = jr(t);
  Qn(() => {
    if (!r) return o(t);
    localStorage.theme === "dark" || !("theme" in localStorage) && window.matchMedia("(prefers-color-scheme: dark)").matches ? (document.documentElement.classList.add("dark"), o(r)) : (document.documentElement.classList.remove("dark"), o(t));
  }, []);
  const i = Pa(n);
  return /* @__PURE__ */ v.jsx(Sa, { theme: n, children: /* @__PURE__ */ v.jsxs(La.Provider, { value: { setTheme: o }, children: [
    /* @__PURE__ */ v.jsx(i, {}),
    e
  ] }) });
}
const Ma = q.div`
  margin: auto;
  width: 100%;
  max-width: ${({ theme: e, $fluid: t }) => t ? "100%" : e.spacing.maxWidth.xs};
  ${({ $textAlign: e }) => e && `text-align: ${e}`};
  padding: ${({ $padding: e, theme: t }) => e && `${e}px` || t.spacing.padding.xs};

  ${D("lg")} {
    padding: ${({ $padding: e, theme: t }) => e && `${e}px` || t.spacing.padding.lg};
  }

  ${D("xxxl")} {
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
function za({ theme: e = lt, ...t }, r) {
  return /* @__PURE__ */ v.jsx(Ma, { ...t, theme: e, ref: r, children: t.children });
}
const qa = re(za), Ha = q(qa)`
  background: ${({ theme: e }) => e.colors.light};
  border-radius: ${({ theme: e }) => e.spacing.radius.lg};
  border: solid 1px ${({ theme: e }) => e.colors.grayLight};
`;
function Ba({ theme: e = lt, ...t }, r) {
  return /* @__PURE__ */ v.jsx(Ha, { ...t, theme: e, ref: r, children: t.children });
}
const Ws = re(Ba), Wa = (e, t, r, n, o, i) => P`
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

  ${!i && t === "primary" && P`
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

  ${!i && t === "secondary" && P`
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

	${!i && t === "tertiary" && P`
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

	${Gr(r)}

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
`, Fa = q.button`
  ${({ theme: e, $variant: t, $size: r, $outline: n, $fullWidth: o, disabled: i }) => Wa(e, t, r, n, o, i)}
`;
function Ga({ $variant: e = "primary", ...t }, r) {
  return /* @__PURE__ */ v.jsxs(Fa, { $variant: e, ...t, ref: r, children: [
    t.$iconPosition !== "right" && t.$icon && t.$icon,
    t.children,
    t.$iconPosition === "right" && t.$icon && t.$icon
  ] });
}
const Fs = re(Ga), Ua = q.div`
  ${({ $span: e }) => e && `
		grid-column: span ${e};
	`}

  ${({ $xsSpan: e }) => e && Ne("xs", e)}
	${({ $smSpan: e }) => e && Ne("sm", e)}
	${({ $mdSpan: e }) => e && Ne("md", e)}
	${({ $lgSpan: e }) => e && Ne("lg", e)}
	${({ $xlSpan: e }) => e && Ne("xl", e)}
	${({ $xxlSpan: e }) => e && Ne("xxl", e)}
	${({ $xxxlSpan: e }) => e && Ne("xxxl", e)}
`;
function Ya({ theme: e = lt, ...t }, r) {
  return /* @__PURE__ */ v.jsx(Ua, { ...t, theme: e, ref: r, children: t.children });
}
const Gs = re(Ya), Va = q.div`
  display: flex;
  justify-content: ${({ $justifyContent: e }) => e || "flex-start"};
  flex-wrap: ${({ $wrap: e }) => e || "wrap"};
  gap: ${({ $gap: e, theme: t }) => e && `${e}px` || t.spacing.gridGap.xs};
  flex-direction: ${({ $direction: e }) => e || "row"};

  ${D("lg")} {
    gap: ${({ $gap: e, theme: t }) => e && `${e}px` || t.spacing.gridGap.lg};
  }

  ${({ $xsGap: e }) => e && Q("xs", e)}
  ${({ $xsJustifyContent: e }) => e && Ie("xs", e)}
	${({ $smGap: e }) => e && Q("sm", e)}
	${({ $smJustifyContent: e }) => e && Ie("sm", e)}
	${({ $mdGap: e }) => e && Q("md", e)}
	${({ $mdJustifyContent: e }) => e && Ie("md", e)}
	${({ $lgGap: e }) => e && Q("lg", e)}
	${({ $lgJustifyContent: e }) => e && Ie("lg", e)}
	${({ $xlGap: e }) => e && Q("xl", e)}
	${({ $xlJustifyContent: e }) => e && Ie("xl", e)}
	${({ $xxlGap: e }) => e && Q("xxl", e)}
	${({ $xxlJustifyContent: e }) => e && Ie("xxl", e)}
	${({ $xxxlGap: e }) => e && Q("xxxl", e)}
	${({ $xxxlJustifyContent: e }) => e && Ie("xxxl", e)}
  ${({ $fullWidth: e }) => we(!!e)}
`;
function Xa({ theme: e = lt, ...t }, r) {
  return /* @__PURE__ */ v.jsx(Va, { ...t, theme: e, ref: r, children: t.children });
}
const Us = re(Xa), Ka = q.div`
  width: 100%;
  display: grid;
  grid-template-columns: ${({ $cols: e }) => `repeat(${e || 3}, minmax(0, 1fr))`};
  gap: ${({ $gap: e, theme: t }) => e && `${e}px` || t.spacing.gridGap.xs};

  ${D("lg")} {
    gap: ${({ $gap: e, theme: t }) => e && `${e}px` || t.spacing.gridGap.lg};
  }

  ${({ $xsGap: e }) => e && Q("xs", e)}
  ${({ $smGap: e }) => e && Q("sm", e)}
	${({ $mdGap: e }) => e && Q("md", e)}
	${({ $lgGap: e }) => e && Q("lg", e)}
	${({ $xlGap: e }) => e && Q("xl", e)}
	${({ $xxlGap: e }) => e && Q("xxl", e)}
	${({ $xxxlGap: e }) => e && Q("xxxl", e)}

	${({ $xsCols: e }) => e && Ce("xs", e)}
	${({ $smCols: e }) => e && Ce("sm", e)}
	${({ $mdCols: e }) => e && Ce("md", e)}
	${({ $lgCols: e }) => e && Ce("lg", e)}
	${({ $xlCols: e }) => e && Ce("xl", e)}
	${({ $xxlCols: e }) => e && Ce("xxl", e)}
	${({ $xxxlCols: e }) => e && Ce("xxxl", e)}
`;
function Ja({ theme: e = lt, ...t }, r) {
  return /* @__PURE__ */ v.jsx(Ka, { ...t, theme: e, ref: r, children: t.children });
}
const Ys = re(Ja), ut = q.span`
  display: inline-flex;
  flex-wrap: ${({ type: e }) => e === "checkbox" || e === "radio" ? "nowrap" : "wrap"};
  align-items: center;

  ${({ $label: e }) => e && P`
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
`, et = q.label`
  display: inline-block;
  color: ${({ theme: e }) => e.colors.grayDark};
  font-size: ${({ theme: e }) => e.fontSizes.text.lg};
  line-height: ${({ theme: e }) => e.lineHeights.text.lg};
  margin-top: ${({ type: e }) => e === "checkbox" || e === "radio" ? "-2px" : "0"};
`, Za = q.input`
  ${ve};
  ${Fr};
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

  ${({ $size: e }) => Gr(e)}

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

	${({ $fullWidth: e }) => we(!!e)}
`, Qa = q.span`
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
`, es = q.input`
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
    border: solid 2px ${t.colors.gray};
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
`, ts = q.span`
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

  ${({ $icon: e, $iconPosition: t }) => e && t === "right" ? P`
          & svg {
            right: 16px;
          }

          & input {
            padding-right: 50px;
          }
        ` : P`
          & svg {
            left: 16px;
          }

          & svg ~ input {
            padding-left: 50px;
          }
        `}
`;
function rs({ ...e }, t) {
  return e.type === "checkbox" || e.type === "radio" ? /* @__PURE__ */ v.jsxs(ut, { $fullWidth: e.$fullWidth, type: e.type, $label: e.$label, children: [
    /* @__PURE__ */ v.jsxs(Qa, { children: [
      /* @__PURE__ */ v.jsx(es, { ...e, ref: t }),
      !e.disabled && e.type === "checkbox" ? /* @__PURE__ */ v.jsx(Ta, {}) : /* @__PURE__ */ v.jsx("em", {})
    ] }),
    e.$label && /* @__PURE__ */ v.jsx(et, { htmlFor: e.id, ...e, children: e.$label })
  ] }) : /* @__PURE__ */ v.jsxs(ut, { $fullWidth: e.$fullWidth, type: e.type, $label: e.$label, children: [
    e.$label && /* @__PURE__ */ v.jsx(et, { htmlFor: e.id, children: e.$label }),
    /* @__PURE__ */ v.jsxs(
      ts,
      {
        $fullWidth: e.$fullWidth,
        $iconPosition: e.$iconPosition,
        $icon: e.$icon,
        children: [
          e.$iconPosition !== "right" && e.$icon && e.$icon,
          /* @__PURE__ */ v.jsx(Za, { ...e, ref: t }),
          e.$iconPosition === "right" && e.$icon && e.$icon,
          e.type === "date" && /* @__PURE__ */ v.jsx(ja, { className: "icon-calendar" })
        ]
      }
    )
  ] });
}
const Vs = re(rs), Lo = (e) => `max-width: ${e}px;`;
function ns(e) {
  return Object.keys(e).filter((t) => t.startsWith("$")).map((t) => {
    const r = t.substring(1);
    return e[t] && D(r) + `{ ${Lo(e[t])} }`;
  }).join("");
}
const os = q.div`
  display: block;
  margin: ${({ $m0: e }) => e ? "0" : "auto"};

  ${({ $size: e }) => `
		${e && Lo(e)};
	`}
  ${(e) => ns(e)}
`;
function is({ ...e }, t) {
  return /* @__PURE__ */ v.jsx(os, { ...e, ref: t, children: e.children });
}
const Xs = re(is), as = q.span`
  display: inline-flex;
  flex-wrap: ${({ type: e }) => e === "checkbox" || e === "radio" ? "fprnowrap" : "wrap"};
  gap: 10px;
  align-items: center;

  ${({ $fullWidth: e }) => we(!!e)}
`, ss = q.input`
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
function cs({ ...e }, t) {
  return /* @__PURE__ */ v.jsxs(as, { $fullWidth: e.$fullWidth, children: [
    e.$label && /* @__PURE__ */ v.jsx(et, { htmlFor: e.id, children: e.$label }),
    /* @__PURE__ */ v.jsx(ss, { ...e, type: "range", ref: t })
  ] });
}
const Ks = re(cs), us = q.select`
  ${ve};
  ${Fr};
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

  ${({ $size: e }) => Gr(e)}

  ${({ $size: e, theme: t }) => e === "big" ? `font-size: ${t.fontSizes.inputBig.lg};` : `font-size: ${t.fontSizes.input.lg};`}

	${({ $error: e, $success: t, theme: r }) => Be(!!e, !!t, r)}

	${({ disabled: e, theme: t }) => e && `cursor: not-allowed;
		background: ${t.colors.grayLight};
		border-color: ${t.colors.gray};
		color: ${t.colors.gray};
	`}

	${({ $fullWidth: e }) => we(!!e)}
`, ls = q.span`
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
function ds({ ...e }, t) {
  return /* @__PURE__ */ v.jsxs(ut, { $fullWidth: e.$fullWidth, $label: e.$label, children: [
    e.$label && /* @__PURE__ */ v.jsx(et, { htmlFor: e.id, children: e.$label }),
    /* @__PURE__ */ v.jsxs(ls, { $fullWidth: e.$fullWidth, children: [
      /* @__PURE__ */ v.jsx(us, { ...e, ref: t, children: e.children }),
      /* @__PURE__ */ v.jsx(Aa, {})
    ] })
  ] });
}
const Js = re(ds), Mo = (e, t) => t ? `display: inline-block;
			max-height: 0;
			min-width: ${e}px;
			max-width: ${e}px;` : `display: block;
			min-height: ${e}px;
			max-height: ${e}px;`;
function fs(e) {
  return Object.keys(e).filter((t) => t.startsWith("$")).map((t) => {
    const r = t.substring(1);
    return e[t] && D(r) + `{ ${Mo(e[t], e.$horizontal || !1)} }`;
  }).join("");
}
const ps = q.span`
  ${({ $horizontal: e, $size: t }) => `
		${t && t !== "none" && Mo(t, e || !1)};
		${t === "none" && "display: none;"};
	`}
  ${(e) => fs(e)}
`;
function hs({ ...e }, t) {
  return /* @__PURE__ */ v.jsx(ps, { ...e, ref: t });
}
const Zs = re(hs), gs = q.textarea`
  ${ve};
  ${Fr};
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

	${({ $fullWidth: e }) => we(!!e)}
`;
function ys({ ...e }, t) {
  return /* @__PURE__ */ v.jsxs(ut, { $fullWidth: e.$fullWidth, $label: e.$label, children: [
    e.$label && /* @__PURE__ */ v.jsx(et, { htmlFor: e.id, $label: e.$label, children: e.$label }),
    /* @__PURE__ */ v.jsx(gs, { ...e, ref: t, children: e.children })
  ] });
}
const Qs = re(ys), ms = q.span`
  display: inline-block;
  margin: auto 0;
  position: relative;
  vertical-align: middle;
`, bs = q.span`
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
`, xs = q.input`
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
function vs({ type: e = "checkbox", ...t }, r) {
  return /* @__PURE__ */ v.jsxs(ut, { $fullWidth: t.$fullWidth, $label: t.$label, children: [
    /* @__PURE__ */ v.jsxs(ms, { children: [
      /* @__PURE__ */ v.jsx(xs, { ...t, type: e, ref: r }),
      /* @__PURE__ */ v.jsx(
        bs,
        {
          $error: t.$error,
          $success: t.$success,
          className: "fake-toggle",
          $size: t.$size
        }
      )
    ] }),
    t.$label && /* @__PURE__ */ v.jsx(et, { htmlFor: t.id, children: t.$label })
  ] });
}
const ec = re(vs);
export {
  Ws as Box,
  Fs as Button,
  Bs as CherryThemeProvider,
  Gs as Col,
  qa as Container,
  Us as Flex,
  Pa as GlobalStyles,
  Ys as Grid,
  Aa as IconArrow,
  ja as IconCalendar,
  Ta as IconCheck,
  Vs as Input,
  Xs as MaxWidth,
  Ks as Range,
  Js as Select,
  Zs as Space,
  ws as StyledComponentsRegistry,
  ls as StyledIconWrapper,
  ut as StyledInputWrapper,
  et as StyledLabel,
  Qs as Textarea,
  La as ThemeContext,
  ec as Toggle,
  Wr as breakpoints,
  Wa as buttonStyles,
  Ca as colors,
  Na as colorsDark,
  Do as fontSizes,
  No as fonts,
  Gr as formElementHeightStyles,
  we as fullWidthStyles,
  Ne as generateColSpanStyles,
  Ce as generateColsStyles,
  Q as generateGapStyles,
  Ie as generateJustifyContentStyles,
  De as generatePaddingStyles,
  Io as lineHeights,
  D as mq,
  ve as resetButton,
  Fr as resetInput,
  Da as shadows,
  Ia as shadowsDark,
  Co as spacing,
  Be as statusBorderStyles,
  Is as styledBlockquote,
  Ms as styledButton,
  zs as styledButtonBig,
  Ls as styledCode,
  ks as styledH1,
  Os as styledH2,
  Ps as styledH3,
  Ts as styledH4,
  As as styledH5,
  js as styledH6,
  Ss as styledHero1,
  Rs as styledHero2,
  $s as styledHero3,
  qs as styledInput,
  Hs as styledInputBig,
  Ds as styledSmall,
  Ns as styledStrong,
  Cs as styledText,
  lt as theme,
  Es as themeDark
};
