import C, { createElement as Te, useState as i0, createContext as oa, useEffect as na, forwardRef as J } from "react";
var ke = { exports: {} }, oe = {};
var tt;
function ca() {
  if (tt) return oe;
  tt = 1;
  var t = /* @__PURE__ */ Symbol.for("react.transitional.element"), a = /* @__PURE__ */ Symbol.for("react.fragment");
  function o(n, c, r) {
    var h = null;
    if (r !== void 0 && (h = "" + r), c.key !== void 0 && (h = "" + c.key), "key" in c) {
      r = {};
      for (var d in c)
        d !== "key" && (r[d] = c[d]);
    } else r = c;
    return c = r.ref, {
      $$typeof: t,
      type: n,
      key: h,
      ref: c !== void 0 ? c : null,
      props: r
    };
  }
  return oe.Fragment = a, oe.jsx = o, oe.jsxs = o, oe;
}
var ne = {};
var at;
function ra() {
  return at || (at = 1, process.env.NODE_ENV !== "production" && (function() {
    function t(k) {
      if (k == null) return null;
      if (typeof k == "function")
        return k.$$typeof === K ? null : k.displayName || k.name || null;
      if (typeof k == "string") return k;
      switch (k) {
        case $:
          return "Fragment";
        case H:
          return "Profiler";
        case j:
          return "StrictMode";
        case b:
          return "Suspense";
        case _:
          return "SuspenseList";
        case L:
          return "Activity";
      }
      if (typeof k == "object")
        switch (typeof k.tag == "number" && console.error(
          "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
        ), k.$$typeof) {
          case m:
            return "Portal";
          case x:
            return k.displayName || "Context";
          case v:
            return (k._context.displayName || "Context") + ".Consumer";
          case q:
            var z = k.render;
            return k = k.displayName, k || (k = z.displayName || z.name || "", k = k !== "" ? "ForwardRef(" + k + ")" : "ForwardRef"), k;
          case R:
            return z = k.displayName || null, z !== null ? z : t(k.type) || "Memo";
          case D:
            z = k._payload, k = k._init;
            try {
              return t(k(z));
            } catch {
            }
        }
      return null;
    }
    function a(k) {
      return "" + k;
    }
    function o(k) {
      try {
        a(k);
        var z = !1;
      } catch {
        z = !0;
      }
      if (z) {
        z = console;
        var O = z.error, T = typeof Symbol == "function" && Symbol.toStringTag && k[Symbol.toStringTag] || k.constructor.name || "Object";
        return O.call(
          z,
          "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
          T
        ), a(k);
      }
    }
    function n(k) {
      if (k === $) return "<>";
      if (typeof k == "object" && k !== null && k.$$typeof === D)
        return "<...>";
      try {
        var z = t(k);
        return z ? "<" + z + ">" : "<...>";
      } catch {
        return "<...>";
      }
    }
    function c() {
      var k = Y.A;
      return k === null ? null : k.getOwner();
    }
    function r() {
      return Error("react-stack-top-frame");
    }
    function h(k) {
      if (h1.call(k, "key")) {
        var z = Object.getOwnPropertyDescriptor(k, "key").get;
        if (z && z.isReactWarning) return !1;
      }
      return k.key !== void 0;
    }
    function d(k, z) {
      function O() {
        B1 || (B1 = !0, console.error(
          "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
          z
        ));
      }
      O.isReactWarning = !0, Object.defineProperty(k, "key", {
        get: O,
        configurable: !0
      });
    }
    function i() {
      var k = t(this.type);
      return b1[k] || (b1[k] = !0, console.error(
        "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
      )), k = this.props.ref, k !== void 0 ? k : null;
    }
    function s(k, z, O, T, f1, i1) {
      var I = O.ref;
      return k = {
        $$typeof: N,
        type: k,
        key: z,
        props: O,
        _owner: T
      }, (I !== void 0 ? I : null) !== null ? Object.defineProperty(k, "ref", {
        enumerable: !1,
        get: i
      }) : Object.defineProperty(k, "ref", { enumerable: !1, value: null }), k._store = {}, Object.defineProperty(k._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: 0
      }), Object.defineProperty(k, "_debugInfo", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: null
      }), Object.defineProperty(k, "_debugStack", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: f1
      }), Object.defineProperty(k, "_debugTask", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: i1
      }), Object.freeze && (Object.freeze(k.props), Object.freeze(k)), k;
    }
    function l(k, z, O, T, f1, i1) {
      var I = z.children;
      if (I !== void 0)
        if (T)
          if (x1(I)) {
            for (T = 0; T < I.length; T++)
              y(I[T]);
            Object.freeze && Object.freeze(I);
          } else
            console.error(
              "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
            );
        else y(I);
      if (h1.call(z, "key")) {
        I = t(k);
        var Q = Object.keys(z).filter(function(w1) {
          return w1 !== "key";
        });
        T = 0 < Q.length ? "{key: someKey, " + Q.join(": ..., ") + ": ...}" : "{key: someKey}", l1[I + T] || (Q = 0 < Q.length ? "{" + Q.join(": ..., ") + ": ...}" : "{}", console.error(
          `A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,
          T,
          I,
          Q,
          I
        ), l1[I + T] = !0);
      }
      if (I = null, O !== void 0 && (o(O), I = "" + O), h(z) && (o(z.key), I = "" + z.key), "key" in z) {
        O = {};
        for (var t1 in z)
          t1 !== "key" && (O[t1] = z[t1]);
      } else O = z;
      return I && d(
        O,
        typeof k == "function" ? k.displayName || k.name || "Unknown" : k
      ), s(
        k,
        I,
        O,
        c(),
        f1,
        i1
      );
    }
    function y(k) {
      M(k) ? k._store && (k._store.validated = 1) : typeof k == "object" && k !== null && k.$$typeof === D && (k._payload.status === "fulfilled" ? M(k._payload.value) && k._payload.value._store && (k._payload.value._store.validated = 1) : k._store && (k._store.validated = 1));
    }
    function M(k) {
      return typeof k == "object" && k !== null && k.$$typeof === N;
    }
    var g = C, N = /* @__PURE__ */ Symbol.for("react.transitional.element"), m = /* @__PURE__ */ Symbol.for("react.portal"), $ = /* @__PURE__ */ Symbol.for("react.fragment"), j = /* @__PURE__ */ Symbol.for("react.strict_mode"), H = /* @__PURE__ */ Symbol.for("react.profiler"), v = /* @__PURE__ */ Symbol.for("react.consumer"), x = /* @__PURE__ */ Symbol.for("react.context"), q = /* @__PURE__ */ Symbol.for("react.forward_ref"), b = /* @__PURE__ */ Symbol.for("react.suspense"), _ = /* @__PURE__ */ Symbol.for("react.suspense_list"), R = /* @__PURE__ */ Symbol.for("react.memo"), D = /* @__PURE__ */ Symbol.for("react.lazy"), L = /* @__PURE__ */ Symbol.for("react.activity"), K = /* @__PURE__ */ Symbol.for("react.client.reference"), Y = g.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, h1 = Object.prototype.hasOwnProperty, x1 = Array.isArray, H1 = console.createTask ? console.createTask : function() {
      return null;
    };
    g = {
      react_stack_bottom_frame: function(k) {
        return k();
      }
    };
    var B1, b1 = {}, S1 = g.react_stack_bottom_frame.bind(
      g,
      r
    )(), e1 = H1(n(r)), l1 = {};
    ne.Fragment = $, ne.jsx = function(k, z, O) {
      var T = 1e4 > Y.recentlyCreatedOwnerStacks++;
      return l(
        k,
        z,
        O,
        !1,
        T ? Error("react-stack-top-frame") : S1,
        T ? H1(n(k)) : e1
      );
    }, ne.jsxs = function(k, z, O) {
      var T = 1e4 > Y.recentlyCreatedOwnerStacks++;
      return l(
        k,
        z,
        O,
        !0,
        T ? Error("react-stack-top-frame") : S1,
        T ? H1(n(k)) : e1
      );
    };
  })()), ne;
}
var ot;
function ha() {
  return ot || (ot = 1, process.env.NODE_ENV === "production" ? ke.exports = ca() : ke.exports = ra()), ke.exports;
}
var w = ha(), le = { exports: {} }, e2 = {}, nt;
function s0() {
  if (nt) return e2;
  nt = 1;
  function t(o) {
    if (typeof WeakMap != "function") return null;
    var n = /* @__PURE__ */ new WeakMap(), c = /* @__PURE__ */ new WeakMap();
    return (t = function(r) {
      return r ? c : n;
    })(o);
  }
  function a(o, n) {
    if (!n && o && o.__esModule) return o;
    if (o === null || typeof o != "object" && typeof o != "function") return { default: o };
    var c = t(n);
    if (c && c.has(o)) return c.get(o);
    var r = { __proto__: null }, h = Object.defineProperty && Object.getOwnPropertyDescriptor;
    for (var d in o)
      if (d !== "default" && Object.prototype.hasOwnProperty.call(o, d)) {
        var i = h ? Object.getOwnPropertyDescriptor(o, d) : null;
        i && (i.get || i.set) ? Object.defineProperty(r, d, i) : r[d] = o[d];
      }
    return r.default = o, c && c.set(o, r), r;
  }
  return e2._ = a, e2;
}
var t2 = {}, a2 = {}, ct;
function da() {
  if (ct) return a2;
  ct = 1;
  function t(a) {
    return a && a.__esModule ? a : { default: a };
  }
  return a2._ = t, a2;
}
var rt;
function ia() {
  return rt || (rt = 1, (function(t) {
    "use client";
    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    function a(s, l) {
      for (var y in l) Object.defineProperty(s, y, {
        enumerable: !0,
        get: l[y]
      });
    }
    a(t, {
      AppRouterContext: function() {
        return c;
      },
      GlobalLayoutRouterContext: function() {
        return h;
      },
      LayoutRouterContext: function() {
        return r;
      },
      MissingSlotContext: function() {
        return i;
      },
      TemplateContext: function() {
        return d;
      }
    });
    const n = /* @__PURE__ */ (/* @__PURE__ */ da())._(C), c = n.default.createContext(null), r = n.default.createContext(null), h = n.default.createContext(null), d = n.default.createContext(null);
    process.env.NODE_ENV !== "production" && (c.displayName = "AppRouterContext", r.displayName = "LayoutRouterContext", h.displayName = "GlobalLayoutRouterContext", d.displayName = "TemplateContext");
    const i = n.default.createContext(/* @__PURE__ */ new Set());
  })(t2)), t2;
}
var o2 = {}, ue = { exports: {} }, ht;
function y0() {
  return ht || (ht = 1, (function(t, a) {
    Object.defineProperty(a, "__esModule", {
      value: !0
    }), Object.defineProperty(a, "ReadonlyURLSearchParams", {
      enumerable: !0,
      get: function() {
        return n;
      }
    });
    class o extends Error {
      constructor() {
        super("Method unavailable on `ReadonlyURLSearchParams`. Read more: https://nextjs.org/docs/app/api-reference/functions/use-search-params#updating-searchparams");
      }
    }
    class n extends URLSearchParams {
      /** @deprecated Method unavailable on `ReadonlyURLSearchParams`. Read more: https://nextjs.org/docs/app/api-reference/functions/use-search-params#updating-searchparams */
      append() {
        throw new o();
      }
      /** @deprecated Method unavailable on `ReadonlyURLSearchParams`. Read more: https://nextjs.org/docs/app/api-reference/functions/use-search-params#updating-searchparams */
      delete() {
        throw new o();
      }
      /** @deprecated Method unavailable on `ReadonlyURLSearchParams`. Read more: https://nextjs.org/docs/app/api-reference/functions/use-search-params#updating-searchparams */
      set() {
        throw new o();
      }
      /** @deprecated Method unavailable on `ReadonlyURLSearchParams`. Read more: https://nextjs.org/docs/app/api-reference/functions/use-search-params#updating-searchparams */
      sort() {
        throw new o();
      }
    }
    (typeof a.default == "function" || typeof a.default == "object" && a.default !== null) && typeof a.default.__esModule > "u" && (Object.defineProperty(a.default, "__esModule", { value: !0 }), Object.assign(a.default, a), t.exports = a.default);
  })(ue, ue.exports)), ue.exports;
}
var dt;
function sa() {
  return dt || (dt = 1, (function(t) {
    "use client";
    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    function a(s, l) {
      for (var y in l) Object.defineProperty(s, y, {
        enumerable: !0,
        get: l[y]
      });
    }
    a(t, {
      NavigationPromisesContext: function() {
        return d;
      },
      PathParamsContext: function() {
        return h;
      },
      PathnameContext: function() {
        return r;
      },
      ReadonlyURLSearchParams: function() {
        return n.ReadonlyURLSearchParams;
      },
      SearchParamsContext: function() {
        return c;
      },
      createDevToolsInstrumentedPromise: function() {
        return i;
      }
    });
    const o = C, n = y0(), c = (0, o.createContext)(null), r = (0, o.createContext)(null), h = (0, o.createContext)(null), d = (0, o.createContext)(null);
    function i(s, l) {
      const y = Promise.resolve(l);
      return y.status = "fulfilled", y.value = l, y.displayName = `${s} (SSR)`, y;
    }
    process.env.NODE_ENV !== "production" && (c.displayName = "SearchParamsContext", r.displayName = "PathnameContext", h.displayName = "PathParamsContext", d.displayName = "NavigationPromisesContext");
  })(o2)), o2;
}
var n2 = {}, it;
function ya() {
  return it || (it = 1, (function(t) {
    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    function a(y, M) {
      for (var g in M) Object.defineProperty(y, g, {
        enumerable: !0,
        get: M[g]
      });
    }
    a(t, {
      DEFAULT_SEGMENT_KEY: function() {
        return s;
      },
      NOT_FOUND_SEGMENT_KEY: function() {
        return l;
      },
      PAGE_SEGMENT_KEY: function() {
        return i;
      },
      addSearchParamsIfPageSegment: function() {
        return r;
      },
      computeSelectedLayoutSegment: function() {
        return h;
      },
      getSegmentValue: function() {
        return o;
      },
      getSelectedLayoutSegmentPath: function() {
        return d;
      },
      isGroupSegment: function() {
        return n;
      },
      isParallelRouteSegment: function() {
        return c;
      }
    });
    function o(y) {
      return Array.isArray(y) ? y[1] : y;
    }
    function n(y) {
      return y[0] === "(" && y.endsWith(")");
    }
    function c(y) {
      return y.startsWith("@") && y !== "@children";
    }
    function r(y, M) {
      if (y.includes(i)) {
        const N = JSON.stringify(M);
        return N !== "{}" ? i + "?" + N : i;
      }
      return y;
    }
    function h(y, M) {
      if (!y || y.length === 0)
        return null;
      const g = M === "children" ? y[0] : y[y.length - 1];
      return g === s ? null : g;
    }
    function d(y, M, g = !0, N = []) {
      let m;
      if (g)
        m = y[1][M];
      else {
        const H = y[1];
        m = H.children ?? Object.values(H)[0];
      }
      if (!m) return N;
      const $ = m[0];
      let j = o($);
      return !j || j.startsWith(i) ? N : (N.push(j), d(m, M, !1, N));
    }
    const i = "__PAGE__", s = "__DEFAULT__", l = "/_not-found";
  })(n2)), n2;
}
var c2 = {}, st;
function pa() {
  return st || (st = 1, (function(t) {
    "use client";
    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    function a(h, d) {
      for (var i in d) Object.defineProperty(h, i, {
        enumerable: !0,
        get: d[i]
      });
    }
    a(t, {
      ServerInsertedHTMLContext: function() {
        return c;
      },
      useServerInsertedHTML: function() {
        return r;
      }
    });
    const n = /* @__PURE__ */ (/* @__PURE__ */ s0())._(C), c = /* @__PURE__ */ n.default.createContext(null);
    function r(h) {
      const d = (0, n.useContext)(c);
      d && d(h);
    }
  })(c2)), c2;
}
var Me = { exports: {} }, yt;
function ka() {
  return yt || (yt = 1, (function(t, a) {
    Object.defineProperty(a, "__esModule", {
      value: !0
    });
    function o(r, h) {
      for (var d in h) Object.defineProperty(r, d, {
        enumerable: !0,
        get: h[d]
      });
    }
    o(a, {
      UnrecognizedActionError: function() {
        return n;
      },
      unstable_isUnrecognizedActionError: function() {
        return c;
      }
    });
    class n extends Error {
      constructor(...h) {
        super(...h), this.name = "UnrecognizedActionError";
      }
    }
    function c(r) {
      return !!(r && typeof r == "object" && r instanceof n);
    }
    (typeof a.default == "function" || typeof a.default == "object" && a.default !== null) && typeof a.default.__esModule > "u" && (Object.defineProperty(a.default, "__esModule", { value: !0 }), Object.assign(a.default, a), t.exports = a.default);
  })(Me, Me.exports)), Me.exports;
}
var fe = { exports: {} }, me = { exports: {} }, ve = { exports: {} }, pt;
function p0() {
  return pt || (pt = 1, (function(t, a) {
    Object.defineProperty(a, "__esModule", {
      value: !0
    }), Object.defineProperty(a, "RedirectStatusCode", {
      enumerable: !0,
      get: function() {
        return o;
      }
    });
    var o = /* @__PURE__ */ (function(n) {
      return n[n.SeeOther = 303] = "SeeOther", n[n.TemporaryRedirect = 307] = "TemporaryRedirect", n[n.PermanentRedirect = 308] = "PermanentRedirect", n;
    })({});
    (typeof a.default == "function" || typeof a.default == "object" && a.default !== null) && typeof a.default.__esModule > "u" && (Object.defineProperty(a.default, "__esModule", { value: !0 }), Object.assign(a.default, a), t.exports = a.default);
  })(ve, ve.exports)), ve.exports;
}
var ge = { exports: {} }, kt;
function I2() {
  return kt || (kt = 1, (function(t, a) {
    Object.defineProperty(a, "__esModule", {
      value: !0
    });
    function o(d, i) {
      for (var s in i) Object.defineProperty(d, s, {
        enumerable: !0,
        get: i[s]
      });
    }
    o(a, {
      REDIRECT_ERROR_CODE: function() {
        return c;
      },
      RedirectType: function() {
        return r;
      },
      isRedirectError: function() {
        return h;
      }
    });
    const n = p0(), c = "NEXT_REDIRECT";
    var r = /* @__PURE__ */ (function(d) {
      return d.push = "push", d.replace = "replace", d;
    })({});
    function h(d) {
      if (typeof d != "object" || d === null || !("digest" in d) || typeof d.digest != "string")
        return !1;
      const i = d.digest.split(";"), [s, l] = i, y = i.slice(2, -2).join(";"), M = i.at(-2), g = Number(M);
      return s === c && (l === "replace" || l === "push") && typeof y == "string" && !isNaN(g) && g in n.RedirectStatusCode;
    }
    (typeof a.default == "function" || typeof a.default == "object" && a.default !== null) && typeof a.default.__esModule > "u" && (Object.defineProperty(a.default, "__esModule", { value: !0 }), Object.assign(a.default, a), t.exports = a.default);
  })(ge, ge.exports)), ge.exports;
}
var r2 = {}, h2 = {}, d2 = {}, lt;
function F2() {
  return lt || (lt = 1, (function(t) {
    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    function a(i, s) {
      for (var l in s) Object.defineProperty(i, l, {
        enumerable: !0,
        get: s[l]
      });
    }
    a(t, {
      bindSnapshot: function() {
        return h;
      },
      createAsyncLocalStorage: function() {
        return r;
      },
      createSnapshot: function() {
        return d;
      }
    });
    const o = Object.defineProperty(new Error("Invariant: AsyncLocalStorage accessed in runtime where it is not available"), "__NEXT_ERROR_CODE", {
      value: "E504",
      enumerable: !1,
      configurable: !0
    });
    class n {
      disable() {
        throw o;
      }
      getStore() {
      }
      run() {
        throw o;
      }
      exit() {
        throw o;
      }
      enterWith() {
        throw o;
      }
      static bind(s) {
        return s;
      }
    }
    const c = typeof globalThis < "u" && globalThis.AsyncLocalStorage;
    function r() {
      return c ? new c() : new n();
    }
    function h(i) {
      return c ? c.bind(i) : n.bind(i);
    }
    function d() {
      return c ? c.snapshot() : function(i, ...s) {
        return i(...s);
      };
    }
  })(d2)), d2;
}
var ut;
function la() {
  return ut || (ut = 1, (function(t) {
    Object.defineProperty(t, "__esModule", {
      value: !0
    }), Object.defineProperty(t, "actionAsyncStorageInstance", {
      enumerable: !0,
      get: function() {
        return o;
      }
    });
    const o = (0, F2().createAsyncLocalStorage)();
  })(h2)), h2;
}
var Mt;
function ua() {
  return Mt || (Mt = 1, (function(t) {
    Object.defineProperty(t, "__esModule", {
      value: !0
    }), Object.defineProperty(t, "actionAsyncStorage", {
      enumerable: !0,
      get: function() {
        return a.actionAsyncStorageInstance;
      }
    });
    const a = la();
  })(r2)), r2;
}
var ft;
function Ma() {
  return ft || (ft = 1, (function(t, a) {
    Object.defineProperty(a, "__esModule", {
      value: !0
    });
    function o(M, g) {
      for (var N in g) Object.defineProperty(M, N, {
        enumerable: !0,
        get: g[N]
      });
    }
    o(a, {
      getRedirectError: function() {
        return h;
      },
      getRedirectStatusCodeFromError: function() {
        return y;
      },
      getRedirectTypeFromError: function() {
        return l;
      },
      getURLFromRedirectError: function() {
        return s;
      },
      permanentRedirect: function() {
        return i;
      },
      redirect: function() {
        return d;
      }
    });
    const n = p0(), c = I2(), r = typeof window > "u" ? ua().actionAsyncStorage : void 0;
    function h(M, g, N = n.RedirectStatusCode.TemporaryRedirect) {
      const m = Object.defineProperty(new Error(c.REDIRECT_ERROR_CODE), "__NEXT_ERROR_CODE", {
        value: "E394",
        enumerable: !1,
        configurable: !0
      });
      return m.digest = `${c.REDIRECT_ERROR_CODE};${g};${M};${N};`, m;
    }
    function d(M, g) {
      throw g ??= r?.getStore()?.isAction ? c.RedirectType.push : c.RedirectType.replace, h(M, g, n.RedirectStatusCode.TemporaryRedirect);
    }
    function i(M, g = c.RedirectType.replace) {
      throw h(M, g, n.RedirectStatusCode.PermanentRedirect);
    }
    function s(M) {
      return (0, c.isRedirectError)(M) ? M.digest.split(";").slice(2, -2).join(";") : null;
    }
    function l(M) {
      if (!(0, c.isRedirectError)(M))
        throw Object.defineProperty(new Error("Not a redirect error"), "__NEXT_ERROR_CODE", {
          value: "E260",
          enumerable: !1,
          configurable: !0
        });
      return M.digest.split(";", 2)[1];
    }
    function y(M) {
      if (!(0, c.isRedirectError)(M))
        throw Object.defineProperty(new Error("Not a redirect error"), "__NEXT_ERROR_CODE", {
          value: "E260",
          enumerable: !1,
          configurable: !0
        });
      return Number(M.digest.split(";").at(-2));
    }
    (typeof a.default == "function" || typeof a.default == "object" && a.default !== null) && typeof a.default.__esModule > "u" && (Object.defineProperty(a.default, "__esModule", { value: !0 }), Object.assign(a.default, a), t.exports = a.default);
  })(me, me.exports)), me.exports;
}
var _e = { exports: {} }, xe = { exports: {} }, mt;
function Ze() {
  return mt || (mt = 1, (function(t, a) {
    Object.defineProperty(a, "__esModule", {
      value: !0
    });
    function o(s, l) {
      for (var y in l) Object.defineProperty(s, y, {
        enumerable: !0,
        get: l[y]
      });
    }
    o(a, {
      HTTPAccessErrorStatus: function() {
        return n;
      },
      HTTP_ERROR_FALLBACK_ERROR_CODE: function() {
        return r;
      },
      getAccessFallbackErrorTypeByStatus: function() {
        return i;
      },
      getAccessFallbackHTTPStatus: function() {
        return d;
      },
      isHTTPAccessFallbackError: function() {
        return h;
      }
    });
    const n = {
      NOT_FOUND: 404,
      FORBIDDEN: 403,
      UNAUTHORIZED: 401
    }, c = new Set(Object.values(n)), r = "NEXT_HTTP_ERROR_FALLBACK";
    function h(s) {
      if (typeof s != "object" || s === null || !("digest" in s) || typeof s.digest != "string")
        return !1;
      const [l, y] = s.digest.split(";");
      return l === r && c.has(Number(y));
    }
    function d(s) {
      const l = s.digest.split(";")[1];
      return Number(l);
    }
    function i(s) {
      switch (s) {
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
    (typeof a.default == "function" || typeof a.default == "object" && a.default !== null) && typeof a.default.__esModule > "u" && (Object.defineProperty(a.default, "__esModule", { value: !0 }), Object.assign(a.default, a), t.exports = a.default);
  })(xe, xe.exports)), xe.exports;
}
var vt;
function fa() {
  return vt || (vt = 1, (function(t, a) {
    Object.defineProperty(a, "__esModule", {
      value: !0
    }), Object.defineProperty(a, "notFound", {
      enumerable: !0,
      get: function() {
        return c;
      }
    });
    const n = `${Ze().HTTP_ERROR_FALLBACK_ERROR_CODE};404`;
    function c() {
      const r = Object.defineProperty(new Error(n), "__NEXT_ERROR_CODE", {
        value: "E394",
        enumerable: !1,
        configurable: !0
      });
      throw r.digest = n, r;
    }
    (typeof a.default == "function" || typeof a.default == "object" && a.default !== null) && typeof a.default.__esModule > "u" && (Object.defineProperty(a.default, "__esModule", { value: !0 }), Object.assign(a.default, a), t.exports = a.default);
  })(_e, _e.exports)), _e.exports;
}
var be = { exports: {} }, gt;
function ma() {
  return gt || (gt = 1, (function(t, a) {
    Object.defineProperty(a, "__esModule", {
      value: !0
    }), Object.defineProperty(a, "forbidden", {
      enumerable: !0,
      get: function() {
        return c;
      }
    });
    const n = `${Ze().HTTP_ERROR_FALLBACK_ERROR_CODE};403`;
    function c() {
      if (!process.env.__NEXT_EXPERIMENTAL_AUTH_INTERRUPTS)
        throw Object.defineProperty(new Error("`forbidden()` is experimental and only allowed to be enabled when `experimental.authInterrupts` is enabled."), "__NEXT_ERROR_CODE", {
          value: "E488",
          enumerable: !1,
          configurable: !0
        });
      const r = Object.defineProperty(new Error(n), "__NEXT_ERROR_CODE", {
        value: "E394",
        enumerable: !1,
        configurable: !0
      });
      throw r.digest = n, r;
    }
    (typeof a.default == "function" || typeof a.default == "object" && a.default !== null) && typeof a.default.__esModule > "u" && (Object.defineProperty(a.default, "__esModule", { value: !0 }), Object.assign(a.default, a), t.exports = a.default);
  })(be, be.exports)), be.exports;
}
var we = { exports: {} }, _t;
function va() {
  return _t || (_t = 1, (function(t, a) {
    Object.defineProperty(a, "__esModule", {
      value: !0
    }), Object.defineProperty(a, "unauthorized", {
      enumerable: !0,
      get: function() {
        return c;
      }
    });
    const n = `${Ze().HTTP_ERROR_FALLBACK_ERROR_CODE};401`;
    function c() {
      if (!process.env.__NEXT_EXPERIMENTAL_AUTH_INTERRUPTS)
        throw Object.defineProperty(new Error("`unauthorized()` is experimental and only allowed to be used when `experimental.authInterrupts` is enabled."), "__NEXT_ERROR_CODE", {
          value: "E411",
          enumerable: !1,
          configurable: !0
        });
      const r = Object.defineProperty(new Error(n), "__NEXT_ERROR_CODE", {
        value: "E394",
        enumerable: !1,
        configurable: !0
      });
      throw r.digest = n, r;
    }
    (typeof a.default == "function" || typeof a.default == "object" && a.default !== null) && typeof a.default.__esModule > "u" && (Object.defineProperty(a.default, "__esModule", { value: !0 }), Object.assign(a.default, a), t.exports = a.default);
  })(we, we.exports)), we.exports;
}
var Ne = { exports: {} }, $e = { exports: {} }, i2 = {}, xt;
function k0() {
  return xt || (xt = 1, (function(t) {
    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    function a(s, l) {
      for (var y in l) Object.defineProperty(s, y, {
        enumerable: !0,
        get: l[y]
      });
    }
    a(t, {
      isHangingPromiseRejectionError: function() {
        return o;
      },
      makeDevtoolsIOAwarePromise: function() {
        return i;
      },
      makeHangingPromise: function() {
        return h;
      }
    });
    function o(s) {
      return typeof s != "object" || s === null || !("digest" in s) ? !1 : s.digest === n;
    }
    const n = "HANGING_PROMISE_REJECTION";
    class c extends Error {
      constructor(l, y) {
        super(`During prerendering, ${y} rejects when the prerender is complete. Typically these errors are handled by React but if you move ${y} to a different context by using \`setTimeout\`, \`after\`, or similar functions you may observe this error and you should handle it in that context. This occurred at route "${l}".`), this.route = l, this.expression = y, this.digest = n;
      }
    }
    const r = /* @__PURE__ */ new WeakMap();
    function h(s, l, y) {
      if (s.aborted)
        return Promise.reject(new c(l, y));
      {
        const M = new Promise((g, N) => {
          const m = N.bind(null, new c(l, y));
          let $ = r.get(s);
          if ($)
            $.push(m);
          else {
            const j = [
              m
            ];
            r.set(s, j), s.addEventListener("abort", () => {
              for (let H = 0; H < j.length; H++)
                j[H]();
            }, {
              once: !0
            });
          }
        });
        return M.catch(d), M;
      }
    }
    function d() {
    }
    function i(s, l, y) {
      return l.stagedRendering ? l.stagedRendering.delayUntilStage(y, void 0, s) : new Promise((M) => {
        setTimeout(() => {
          M(s);
        }, 0);
      });
    }
  })(i2)), i2;
}
var s2 = {}, bt;
function ga() {
  return bt || (bt = 1, (function(t) {
    Object.defineProperty(t, "__esModule", {
      value: !0
    }), Object.defineProperty(t, "isPostpone", {
      enumerable: !0,
      get: function() {
        return o;
      }
    });
    const a = /* @__PURE__ */ Symbol.for("react.postpone");
    function o(n) {
      return typeof n == "object" && n !== null && n.$$typeof === a;
    }
  })(s2)), s2;
}
var y2 = {}, wt;
function B2() {
  return wt || (wt = 1, (function(t) {
    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    function a(r, h) {
      for (var d in h) Object.defineProperty(r, d, {
        enumerable: !0,
        get: h[d]
      });
    }
    a(t, {
      BailoutToCSRError: function() {
        return n;
      },
      isBailoutToCSRError: function() {
        return c;
      }
    });
    const o = "BAILOUT_TO_CLIENT_SIDE_RENDERING";
    class n extends Error {
      constructor(h) {
        super(`Bail out to client-side rendering: ${h}`), this.reason = h, this.digest = o;
      }
    }
    function c(r) {
      return typeof r != "object" || r === null || !("digest" in r) ? !1 : r.digest === o;
    }
  })(y2)), y2;
}
var ze = { exports: {} }, Nt;
function l0() {
  return Nt || (Nt = 1, (function(t, a) {
    Object.defineProperty(a, "__esModule", {
      value: !0
    }), Object.defineProperty(a, "isNextRouterError", {
      enumerable: !0,
      get: function() {
        return c;
      }
    });
    const o = Ze(), n = I2();
    function c(r) {
      return (0, n.isRedirectError)(r) || (0, o.isHTTPAccessFallbackError)(r);
    }
    (typeof a.default == "function" || typeof a.default == "object" && a.default !== null) && typeof a.default.__esModule > "u" && (Object.defineProperty(a.default, "__esModule", { value: !0 }), Object.assign(a.default, a), t.exports = a.default);
  })(ze, ze.exports)), ze.exports;
}
var p2 = {}, je = { exports: {} }, $t;
function u0() {
  return $t || ($t = 1, (function(t, a) {
    Object.defineProperty(a, "__esModule", {
      value: !0
    });
    function o(h, d) {
      for (var i in d) Object.defineProperty(h, i, {
        enumerable: !0,
        get: d[i]
      });
    }
    o(a, {
      DynamicServerError: function() {
        return c;
      },
      isDynamicServerError: function() {
        return r;
      }
    });
    const n = "DYNAMIC_SERVER_USAGE";
    class c extends Error {
      constructor(d) {
        super(`Dynamic server usage: ${d}`), this.description = d, this.digest = n;
      }
    }
    function r(h) {
      return typeof h != "object" || h === null || !("digest" in h) || typeof h.digest != "string" ? !1 : h.digest === n;
    }
    (typeof a.default == "function" || typeof a.default == "object" && a.default !== null) && typeof a.default.__esModule > "u" && (Object.defineProperty(a.default, "__esModule", { value: !0 }), Object.assign(a.default, a), t.exports = a.default);
  })(je, je.exports)), je.exports;
}
var qe = { exports: {} }, zt;
function _a() {
  return zt || (zt = 1, (function(t, a) {
    Object.defineProperty(a, "__esModule", {
      value: !0
    });
    function o(h, d) {
      for (var i in d) Object.defineProperty(h, i, {
        enumerable: !0,
        get: d[i]
      });
    }
    o(a, {
      StaticGenBailoutError: function() {
        return c;
      },
      isStaticGenBailoutError: function() {
        return r;
      }
    });
    const n = "NEXT_STATIC_GEN_BAILOUT";
    class c extends Error {
      constructor(...d) {
        super(...d), this.code = n;
      }
    }
    function r(h) {
      return typeof h != "object" || h === null || !("code" in h) ? !1 : h.code === n;
    }
    (typeof a.default == "function" || typeof a.default == "object" && a.default !== null) && typeof a.default.__esModule > "u" && (Object.defineProperty(a.default, "__esModule", { value: !0 }), Object.assign(a.default, a), t.exports = a.default);
  })(qe, qe.exports)), qe.exports;
}
var k2 = {}, l2 = {}, jt;
function xa() {
  return jt || (jt = 1, (function(t) {
    Object.defineProperty(t, "__esModule", {
      value: !0
    }), Object.defineProperty(t, "workUnitAsyncStorageInstance", {
      enumerable: !0,
      get: function() {
        return o;
      }
    });
    const o = (0, F2().createAsyncLocalStorage)();
  })(l2)), l2;
}
var Ae = { exports: {} }, qt;
function ba() {
  return qt || (qt = 1, (function(t, a) {
    Object.defineProperty(a, "__esModule", {
      value: !0
    });
    function o(_, R) {
      for (var D in R) Object.defineProperty(_, D, {
        enumerable: !0,
        get: R[D]
      });
    }
    o(a, {
      ACTION_HEADER: function() {
        return c;
      },
      FLIGHT_HEADERS: function() {
        return M;
      },
      NEXT_ACTION_NOT_FOUND_HEADER: function() {
        return v;
      },
      NEXT_ACTION_REVALIDATED_HEADER: function() {
        return b;
      },
      NEXT_DID_POSTPONE_HEADER: function() {
        return m;
      },
      NEXT_HMR_REFRESH_HASH_COOKIE: function() {
        return s;
      },
      NEXT_HMR_REFRESH_HEADER: function() {
        return i;
      },
      NEXT_HTML_REQUEST_ID_HEADER: function() {
        return q;
      },
      NEXT_IS_PRERENDER_HEADER: function() {
        return H;
      },
      NEXT_REQUEST_ID_HEADER: function() {
        return x;
      },
      NEXT_REWRITTEN_PATH_HEADER: function() {
        return $;
      },
      NEXT_REWRITTEN_QUERY_HEADER: function() {
        return j;
      },
      NEXT_ROUTER_PREFETCH_HEADER: function() {
        return h;
      },
      NEXT_ROUTER_SEGMENT_PREFETCH_HEADER: function() {
        return d;
      },
      NEXT_ROUTER_STALE_TIME_HEADER: function() {
        return N;
      },
      NEXT_ROUTER_STATE_TREE_HEADER: function() {
        return r;
      },
      NEXT_RSC_UNION_QUERY: function() {
        return g;
      },
      NEXT_URL: function() {
        return l;
      },
      RSC_CONTENT_TYPE_HEADER: function() {
        return y;
      },
      RSC_HEADER: function() {
        return n;
      }
    });
    const n = "rsc", c = "next-action", r = "next-router-state-tree", h = "next-router-prefetch", d = "next-router-segment-prefetch", i = "next-hmr-refresh", s = "__next_hmr_refresh_hash__", l = "next-url", y = "text/x-component", M = [
      n,
      r,
      h,
      i,
      d
    ], g = "_rsc", N = "x-nextjs-stale-time", m = "x-nextjs-postponed", $ = "x-nextjs-rewritten-path", j = "x-nextjs-rewritten-query", H = "x-nextjs-prerender", v = "x-nextjs-action-not-found", x = "x-nextjs-request-id", q = "x-nextjs-html-request-id", b = "x-action-revalidated";
    (typeof a.default == "function" || typeof a.default == "object" && a.default !== null) && typeof a.default.__esModule > "u" && (Object.defineProperty(a.default, "__esModule", { value: !0 }), Object.assign(a.default, a), t.exports = a.default);
  })(Ae, Ae.exports)), Ae.exports;
}
var u2 = {}, At;
function M0() {
  return At || (At = 1, (function(t) {
    Object.defineProperty(t, "__esModule", {
      value: !0
    }), Object.defineProperty(t, "InvariantError", {
      enumerable: !0,
      get: function() {
        return a;
      }
    });
    class a extends Error {
      constructor(n, c) {
        super(`Invariant: ${n.endsWith(".") ? n : n + "."} This is a bug in Next.js.`, c), this.name = "InvariantError";
      }
    }
  })(u2)), u2;
}
var Ht;
function wa() {
  return Ht || (Ht = 1, (function(t) {
    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    function a(m, $) {
      for (var j in $) Object.defineProperty(m, j, {
        enumerable: !0,
        get: $[j]
      });
    }
    a(t, {
      getCacheSignal: function() {
        return g;
      },
      getDraftModeProviderForCacheScope: function() {
        return M;
      },
      getHmrRefreshHash: function() {
        return s;
      },
      getPrerenderResumeDataCache: function() {
        return d;
      },
      getRenderResumeDataCache: function() {
        return i;
      },
      getRuntimeStagePromise: function() {
        return N;
      },
      getServerComponentsHmrCache: function() {
        return y;
      },
      isHmrRefresh: function() {
        return l;
      },
      throwForMissingRequestStore: function() {
        return r;
      },
      throwInvariantForMissingStore: function() {
        return h;
      },
      workUnitAsyncStorage: function() {
        return o.workUnitAsyncStorageInstance;
      }
    });
    const o = xa(), n = ba(), c = M0();
    function r(m) {
      throw Object.defineProperty(new Error(`\`${m}\` was called outside a request scope. Read more: https://nextjs.org/docs/messages/next-dynamic-api-wrong-context`), "__NEXT_ERROR_CODE", {
        value: "E251",
        enumerable: !1,
        configurable: !0
      });
    }
    function h() {
      throw Object.defineProperty(new c.InvariantError("Expected workUnitAsyncStorage to have a store."), "__NEXT_ERROR_CODE", {
        value: "E696",
        enumerable: !1,
        configurable: !0
      });
    }
    function d(m) {
      switch (m.type) {
        case "prerender":
        case "prerender-runtime":
        case "prerender-ppr":
          return m.prerenderResumeDataCache;
        case "prerender-client":
          return m.prerenderResumeDataCache;
        case "request":
          if (m.prerenderResumeDataCache)
            return m.prerenderResumeDataCache;
        case "prerender-legacy":
        case "cache":
        case "private-cache":
        case "unstable-cache":
          return null;
        default:
          return m;
      }
    }
    function i(m) {
      switch (m.type) {
        case "request":
        case "prerender":
        case "prerender-runtime":
        case "prerender-client":
          if (m.renderResumeDataCache)
            return m.renderResumeDataCache;
        // fallthrough
        case "prerender-ppr":
          return m.prerenderResumeDataCache ?? null;
        case "cache":
        case "private-cache":
        case "unstable-cache":
        case "prerender-legacy":
          return null;
        default:
          return m;
      }
    }
    function s(m, $) {
      if (m.dev)
        switch ($.type) {
          case "cache":
          case "private-cache":
          case "prerender":
          case "prerender-runtime":
            return $.hmrRefreshHash;
          case "request":
            var j;
            return (j = $.cookies.get(n.NEXT_HMR_REFRESH_HASH_COOKIE)) == null ? void 0 : j.value;
        }
    }
    function l(m, $) {
      if (m.dev)
        switch ($.type) {
          case "cache":
          case "private-cache":
          case "request":
            return $.isHmrRefresh ?? !1;
        }
      return !1;
    }
    function y(m, $) {
      if (m.dev)
        switch ($.type) {
          case "cache":
          case "private-cache":
          case "request":
            return $.serverComponentsHmrCache;
        }
    }
    function M(m, $) {
      if (m.isDraftMode)
        switch ($.type) {
          case "cache":
          case "private-cache":
          case "unstable-cache":
          case "prerender-runtime":
          case "request":
            return $.draftMode;
        }
    }
    function g(m) {
      switch (m.type) {
        case "prerender":
        case "prerender-client":
        case "prerender-runtime":
          return m.cacheSignal;
        case "request":
          if (m.cacheSignal)
            return m.cacheSignal;
        case "prerender-ppr":
        case "prerender-legacy":
        case "cache":
        case "private-cache":
        case "unstable-cache":
          return null;
        default:
          return m;
      }
    }
    function N(m) {
      switch (m.type) {
        case "prerender-runtime":
        case "private-cache":
          return m.runtimeStagePromise;
        case "prerender":
        case "prerender-client":
        case "prerender-ppr":
        case "prerender-legacy":
        case "request":
        case "cache":
        case "unstable-cache":
          return null;
        default:
          return m;
      }
    }
  })(k2)), k2;
}
var M2 = {}, f2 = {}, St;
function Na() {
  return St || (St = 1, (function(t) {
    Object.defineProperty(t, "__esModule", {
      value: !0
    }), Object.defineProperty(t, "workAsyncStorageInstance", {
      enumerable: !0,
      get: function() {
        return o;
      }
    });
    const o = (0, F2().createAsyncLocalStorage)();
  })(f2)), f2;
}
var Ct;
function $a() {
  return Ct || (Ct = 1, (function(t) {
    Object.defineProperty(t, "__esModule", {
      value: !0
    }), Object.defineProperty(t, "workAsyncStorage", {
      enumerable: !0,
      get: function() {
        return a.workAsyncStorageInstance;
      }
    });
    const a = Na();
  })(M2)), M2;
}
var m2 = {}, Vt;
function za() {
  return Vt || (Vt = 1, (function(t) {
    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    function a(h, d) {
      for (var i in d) Object.defineProperty(h, i, {
        enumerable: !0,
        get: d[i]
      });
    }
    a(t, {
      METADATA_BOUNDARY_NAME: function() {
        return o;
      },
      OUTLET_BOUNDARY_NAME: function() {
        return c;
      },
      ROOT_LAYOUT_BOUNDARY_NAME: function() {
        return r;
      },
      VIEWPORT_BOUNDARY_NAME: function() {
        return n;
      }
    });
    const o = "__next_metadata_boundary__", n = "__next_viewport_boundary__", c = "__next_outlet_boundary__", r = "__next_root_layout_boundary__";
  })(m2)), m2;
}
var v2 = {}, Rt;
function ja() {
  return Rt || (Rt = 1, (function(t) {
    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    function a(h, d) {
      for (var i in d) Object.defineProperty(h, i, {
        enumerable: !0,
        get: d[i]
      });
    }
    a(t, {
      atLeastOneTask: function() {
        return c;
      },
      scheduleImmediate: function() {
        return n;
      },
      scheduleOnNextTick: function() {
        return o;
      },
      waitAtLeastOneReactRenderTask: function() {
        return r;
      }
    });
    const o = (h) => {
      Promise.resolve().then(() => {
        process.env.NEXT_RUNTIME === "edge" ? setTimeout(h, 0) : process.nextTick(h);
      });
    }, n = (h) => {
      process.env.NEXT_RUNTIME === "edge" ? setTimeout(h, 0) : setImmediate(h);
    };
    function c() {
      return new Promise((h) => n(h));
    }
    function r() {
      return process.env.NEXT_RUNTIME === "edge" ? new Promise((h) => setTimeout(h, 0)) : new Promise((h) => setImmediate(h));
    }
  })(v2)), v2;
}
var Et;
function q2() {
  return Et || (Et = 1, (function(t) {
    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    function a(p, u) {
      for (var f in u) Object.defineProperty(p, f, {
        enumerable: !0,
        get: u[f]
      });
    }
    a(t, {
      Postpone: function() {
        return _;
      },
      PreludeState: function() {
        return U1;
      },
      abortAndThrowOnSynchronousRequestDataAccess: function() {
        return b;
      },
      abortOnSynchronousPlatformIOAccess: function() {
        return q;
      },
      accessedDynamicData: function() {
        return H1;
      },
      annotateDynamicAccess: function() {
        return k;
      },
      consumeDynamicAccess: function() {
        return B1;
      },
      createDynamicTrackingState: function() {
        return N;
      },
      createDynamicValidationState: function() {
        return m;
      },
      createHangingInputAbortSignal: function() {
        return l1;
      },
      createRenderInBrowserAbortSignal: function() {
        return e1;
      },
      delayUntilRuntimeStage: function() {
        return aa;
      },
      formatDynamicAPIAccesses: function() {
        return b1;
      },
      getFirstDynamicReason: function() {
        return $;
      },
      getStaticShellDisallowedDynamicReasons: function() {
        return ta;
      },
      isDynamicPostpone: function() {
        return L;
      },
      isPrerenderInterruptedError: function() {
        return x1;
      },
      logDisallowedDynamicError: function() {
        return u1;
      },
      markCurrentScopeAsDynamic: function() {
        return j;
      },
      postponeWithTracking: function() {
        return R;
      },
      throwIfDisallowedDynamic: function() {
        return ea;
      },
      throwToInterruptStaticGeneration: function() {
        return H;
      },
      trackAllowedDynamicAccess: function() {
        return w1;
      },
      trackDynamicDataInDynamicRender: function() {
        return v;
      },
      trackDynamicHoleInRuntimeShell: function() {
        return N1;
      },
      trackDynamicHoleInStaticShell: function() {
        return s1;
      },
      useDynamicRouteParams: function() {
        return z;
      },
      useDynamicSearchParams: function() {
        return O;
      }
    });
    const o = /* @__PURE__ */ M(C), n = u0(), c = _a(), r = wa(), h = $a(), d = k0(), i = za(), s = ja(), l = B2(), y = M0();
    function M(p) {
      return p && p.__esModule ? p : {
        default: p
      };
    }
    const g = typeof o.default.unstable_postpone == "function";
    function N(p) {
      return {
        isDebugDynamicAccesses: p,
        dynamicAccesses: [],
        syncDynamicErrorWithStack: null
      };
    }
    function m() {
      return {
        hasSuspenseAboveBody: !1,
        hasDynamicMetadata: !1,
        dynamicMetadata: null,
        hasDynamicViewport: !1,
        hasAllowedDynamic: !1,
        dynamicErrors: []
      };
    }
    function $(p) {
      var u;
      return (u = p.dynamicAccesses[0]) == null ? void 0 : u.expression;
    }
    function j(p, u, f) {
      if (u)
        switch (u.type) {
          case "cache":
          case "unstable-cache":
            return;
          case "private-cache":
            return;
        }
      if (!(p.forceDynamic || p.forceStatic)) {
        if (p.dynamicShouldError)
          throw Object.defineProperty(new c.StaticGenBailoutError(`Route ${p.route} with \`dynamic = "error"\` couldn't be rendered statically because it used \`${f}\`. See more info here: https://nextjs.org/docs/app/building-your-application/rendering/static-and-dynamic#dynamic-rendering`), "__NEXT_ERROR_CODE", {
            value: "E553",
            enumerable: !1,
            configurable: !0
          });
        if (u)
          switch (u.type) {
            case "prerender-ppr":
              return R(p.route, f, u.dynamicTracking);
            case "prerender-legacy":
              u.revalidate = 0;
              const A = Object.defineProperty(new n.DynamicServerError(`Route ${p.route} couldn't be rendered statically because it used ${f}. See more info here: https://nextjs.org/docs/messages/dynamic-server-error`), "__NEXT_ERROR_CODE", {
                value: "E550",
                enumerable: !1,
                configurable: !0
              });
              throw p.dynamicUsageDescription = f, p.dynamicUsageStack = A.stack, A;
            case "request":
              process.env.NODE_ENV !== "production" && (u.usedDynamic = !0);
              break;
          }
      }
    }
    function H(p, u, f) {
      const A = Object.defineProperty(new n.DynamicServerError(`Route ${u.route} couldn't be rendered statically because it used \`${p}\`. See more info here: https://nextjs.org/docs/messages/dynamic-server-error`), "__NEXT_ERROR_CODE", {
        value: "E558",
        enumerable: !1,
        configurable: !0
      });
      throw f.revalidate = 0, u.dynamicUsageDescription = p, u.dynamicUsageStack = A.stack, A;
    }
    function v(p) {
      switch (p.type) {
        case "cache":
        case "unstable-cache":
          return;
        case "private-cache":
          return;
        case "prerender":
        case "prerender-runtime":
        case "prerender-legacy":
        case "prerender-ppr":
        case "prerender-client":
          break;
        case "request":
          process.env.NODE_ENV !== "production" && (p.usedDynamic = !0);
          break;
      }
    }
    function x(p, u, f) {
      const A = `Route ${p} needs to bail out of prerendering at this point because it used ${u}.`, U = h1(A);
      f.controller.abort(U);
      const F = f.dynamicTracking;
      F && F.dynamicAccesses.push({
        // When we aren't debugging, we don't need to create another error for the
        // stack trace.
        stack: F.isDebugDynamicAccesses ? new Error().stack : void 0,
        expression: u
      });
    }
    function q(p, u, f, A) {
      const U = A.dynamicTracking;
      x(p, u, A), U && U.syncDynamicErrorWithStack === null && (U.syncDynamicErrorWithStack = f);
    }
    function b(p, u, f, A) {
      if (A.controller.signal.aborted === !1) {
        x(p, u, A);
        const F = A.dynamicTracking;
        F && F.syncDynamicErrorWithStack === null && (F.syncDynamicErrorWithStack = f);
      }
      throw h1(`Route ${p} needs to bail out of prerendering at this point because it used ${u}.`);
    }
    function _({ reason: p, route: u }) {
      const f = r.workUnitAsyncStorage.getStore(), A = f && f.type === "prerender-ppr" ? f.dynamicTracking : null;
      R(u, p, A);
    }
    function R(p, u, f) {
      S1(), f && f.dynamicAccesses.push({
        // When we aren't debugging, we don't need to create another error for the
        // stack trace.
        stack: f.isDebugDynamicAccesses ? new Error().stack : void 0,
        expression: u
      }), o.default.unstable_postpone(D(p, u));
    }
    function D(p, u) {
      return `Route ${p} needs to bail out of prerendering at this point because it used ${u}. React throws this special object to indicate where. It should not be caught by your own try/catch. Learn more: https://nextjs.org/docs/messages/ppr-caught-error`;
    }
    function L(p) {
      return typeof p == "object" && p !== null && typeof p.message == "string" ? K(p.message) : !1;
    }
    function K(p) {
      return p.includes("needs to bail out of prerendering at this point because it used") && p.includes("Learn more: https://nextjs.org/docs/messages/ppr-caught-error");
    }
    if (K(D("%%%", "^^^")) === !1)
      throw Object.defineProperty(new Error("Invariant: isDynamicPostpone misidentified a postpone reason. This is a bug in Next.js"), "__NEXT_ERROR_CODE", {
        value: "E296",
        enumerable: !1,
        configurable: !0
      });
    const Y = "NEXT_PRERENDER_INTERRUPTED";
    function h1(p) {
      const u = Object.defineProperty(new Error(p), "__NEXT_ERROR_CODE", {
        value: "E394",
        enumerable: !1,
        configurable: !0
      });
      return u.digest = Y, u;
    }
    function x1(p) {
      return typeof p == "object" && p !== null && p.digest === Y && "name" in p && "message" in p && p instanceof Error;
    }
    function H1(p) {
      return p.length > 0;
    }
    function B1(p, u) {
      return p.dynamicAccesses.push(...u.dynamicAccesses), p.dynamicAccesses;
    }
    function b1(p) {
      return p.filter((u) => typeof u.stack == "string" && u.stack.length > 0).map(({ expression: u, stack: f }) => (f = f.split(`
`).slice(4).filter((A) => !(A.includes("node_modules/next/") || A.includes(" (<anonymous>)") || A.includes(" (node:"))).join(`
`), `Dynamic API Usage Debug - ${u}:
${f}`));
    }
    function S1() {
      if (!g)
        throw Object.defineProperty(new Error("Invariant: React.unstable_postpone is not defined. This suggests the wrong version of React was loaded. This is a bug in Next.js"), "__NEXT_ERROR_CODE", {
          value: "E224",
          enumerable: !1,
          configurable: !0
        });
    }
    function e1() {
      const p = new AbortController();
      return p.abort(Object.defineProperty(new l.BailoutToCSRError("Render in Browser"), "__NEXT_ERROR_CODE", {
        value: "E721",
        enumerable: !1,
        configurable: !0
      })), p.signal;
    }
    function l1(p) {
      switch (p.type) {
        case "prerender":
        case "prerender-runtime":
          const u = new AbortController();
          if (p.cacheSignal)
            p.cacheSignal.inputReady().then(() => {
              u.abort();
            });
          else {
            const f = (0, r.getRuntimeStagePromise)(p);
            f ? f.then(() => (0, s.scheduleOnNextTick)(() => u.abort())) : (0, s.scheduleOnNextTick)(() => u.abort());
          }
          return u.signal;
        case "prerender-client":
        case "prerender-ppr":
        case "prerender-legacy":
        case "request":
        case "cache":
        case "private-cache":
        case "unstable-cache":
          return;
      }
    }
    function k(p, u) {
      const f = u.dynamicTracking;
      f && f.dynamicAccesses.push({
        stack: f.isDebugDynamicAccesses ? new Error().stack : void 0,
        expression: p
      });
    }
    function z(p) {
      const u = h.workAsyncStorage.getStore(), f = r.workUnitAsyncStorage.getStore();
      if (u && f)
        switch (f.type) {
          case "prerender-client":
          case "prerender": {
            const A = f.fallbackRouteParams;
            A && A.size > 0 && o.default.use((0, d.makeHangingPromise)(f.renderSignal, u.route, p));
            break;
          }
          case "prerender-ppr": {
            const A = f.fallbackRouteParams;
            if (A && A.size > 0)
              return R(u.route, p, f.dynamicTracking);
            break;
          }
          case "prerender-runtime":
            throw Object.defineProperty(new y.InvariantError(`\`${p}\` was called during a runtime prerender. Next.js should be preventing ${p} from being included in server components statically, but did not in this case.`), "__NEXT_ERROR_CODE", {
              value: "E771",
              enumerable: !1,
              configurable: !0
            });
          case "cache":
          case "private-cache":
            throw Object.defineProperty(new y.InvariantError(`\`${p}\` was called inside a cache scope. Next.js should be preventing ${p} from being included in server components statically, but did not in this case.`), "__NEXT_ERROR_CODE", {
              value: "E745",
              enumerable: !1,
              configurable: !0
            });
        }
    }
    function O(p) {
      const u = h.workAsyncStorage.getStore(), f = r.workUnitAsyncStorage.getStore();
      if (u)
        switch (f || (0, r.throwForMissingRequestStore)(p), f.type) {
          case "prerender-client": {
            o.default.use((0, d.makeHangingPromise)(f.renderSignal, u.route, p));
            break;
          }
          case "prerender-legacy":
          case "prerender-ppr": {
            if (u.forceStatic)
              return;
            throw Object.defineProperty(new l.BailoutToCSRError(p), "__NEXT_ERROR_CODE", {
              value: "E394",
              enumerable: !1,
              configurable: !0
            });
          }
          case "prerender":
          case "prerender-runtime":
            throw Object.defineProperty(new y.InvariantError(`\`${p}\` was called from a Server Component. Next.js should be preventing ${p} from being included in server components statically, but did not in this case.`), "__NEXT_ERROR_CODE", {
              value: "E795",
              enumerable: !1,
              configurable: !0
            });
          case "cache":
          case "unstable-cache":
          case "private-cache":
            throw Object.defineProperty(new y.InvariantError(`\`${p}\` was called inside a cache scope. Next.js should be preventing ${p} from being included in server components statically, but did not in this case.`), "__NEXT_ERROR_CODE", {
              value: "E745",
              enumerable: !1,
              configurable: !0
            });
          case "request":
            return;
        }
    }
    const T = /\n\s+at Suspense \(<anonymous>\)/, f1 = "body|div|main|section|article|aside|header|footer|nav|form|p|span|h1|h2|h3|h4|h5|h6", i1 = new RegExp(`\\n\\s+at Suspense \\(<anonymous>\\)(?:(?!\\n\\s+at (?:${f1}) \\(<anonymous>\\))[\\s\\S])*?\\n\\s+at ${i.ROOT_LAYOUT_BOUNDARY_NAME} \\([^\\n]*\\)`), I = new RegExp(`\\n\\s+at ${i.METADATA_BOUNDARY_NAME}[\\n\\s]`), Q = new RegExp(`\\n\\s+at ${i.VIEWPORT_BOUNDARY_NAME}[\\n\\s]`), t1 = new RegExp(`\\n\\s+at ${i.OUTLET_BOUNDARY_NAME}[\\n\\s]`);
    function w1(p, u, f, A) {
      if (!t1.test(u))
        if (I.test(u)) {
          f.hasDynamicMetadata = !0;
          return;
        } else if (Q.test(u)) {
          f.hasDynamicViewport = !0;
          return;
        } else if (i1.test(u)) {
          f.hasAllowedDynamic = !0, f.hasSuspenseAboveBody = !0;
          return;
        } else if (T.test(u)) {
          f.hasAllowedDynamic = !0;
          return;
        } else if (A.syncDynamicErrorWithStack) {
          f.dynamicErrors.push(A.syncDynamicErrorWithStack);
          return;
        } else {
          const U = `Route "${p.route}": Uncached data was accessed outside of <Suspense>. This delays the entire page from rendering, resulting in a slow user experience. Learn more: https://nextjs.org/docs/messages/blocking-route`, F = y1(U, u);
          f.dynamicErrors.push(F);
          return;
        }
    }
    function N1(p, u, f, A) {
      if (!t1.test(u))
        if (I.test(u)) {
          const U = `Route "${p.route}": Uncached data or \`connection()\` was accessed inside \`generateMetadata\`. Except for this instance, the page would have been entirely prerenderable which may have been the intended behavior. See more info here: https://nextjs.org/docs/messages/next-prerender-dynamic-metadata`, F = y1(U, u);
          f.dynamicMetadata = F;
          return;
        } else if (Q.test(u)) {
          const U = `Route "${p.route}": Uncached data or \`connection()\` was accessed inside \`generateViewport\`. This delays the entire page from rendering, resulting in a slow user experience. Learn more: https://nextjs.org/docs/messages/next-prerender-dynamic-viewport`, F = y1(U, u);
          f.dynamicErrors.push(F);
          return;
        } else if (i1.test(u)) {
          f.hasAllowedDynamic = !0, f.hasSuspenseAboveBody = !0;
          return;
        } else if (T.test(u)) {
          f.hasAllowedDynamic = !0;
          return;
        } else if (A.syncDynamicErrorWithStack) {
          f.dynamicErrors.push(A.syncDynamicErrorWithStack);
          return;
        } else {
          const U = `Route "${p.route}": Uncached data or \`connection()\` was accessed outside of \`<Suspense>\`. This delays the entire page from rendering, resulting in a slow user experience. Learn more: https://nextjs.org/docs/messages/blocking-route`, F = y1(U, u);
          f.dynamicErrors.push(F);
          return;
        }
    }
    function s1(p, u, f, A) {
      if (!t1.test(u))
        if (I.test(u)) {
          const U = `Route "${p.route}": Runtime data such as \`cookies()\`, \`headers()\`, \`params\`, or \`searchParams\` was accessed inside \`generateMetadata\` or you have file-based metadata such as icons that depend on dynamic params segments. Except for this instance, the page would have been entirely prerenderable which may have been the intended behavior. See more info here: https://nextjs.org/docs/messages/next-prerender-dynamic-metadata`, F = y1(U, u);
          f.dynamicMetadata = F;
          return;
        } else if (Q.test(u)) {
          const U = `Route "${p.route}": Runtime data such as \`cookies()\`, \`headers()\`, \`params\`, or \`searchParams\` was accessed inside \`generateViewport\`. This delays the entire page from rendering, resulting in a slow user experience. Learn more: https://nextjs.org/docs/messages/next-prerender-dynamic-viewport`, F = y1(U, u);
          f.dynamicErrors.push(F);
          return;
        } else if (i1.test(u)) {
          f.hasAllowedDynamic = !0, f.hasSuspenseAboveBody = !0;
          return;
        } else if (T.test(u)) {
          f.hasAllowedDynamic = !0;
          return;
        } else if (A.syncDynamicErrorWithStack) {
          f.dynamicErrors.push(A.syncDynamicErrorWithStack);
          return;
        } else {
          const U = `Route "${p.route}": Runtime data such as \`cookies()\`, \`headers()\`, \`params\`, or \`searchParams\` was accessed outside of \`<Suspense>\`. This delays the entire page from rendering, resulting in a slow user experience. Learn more: https://nextjs.org/docs/messages/blocking-route`, F = y1(U, u);
          f.dynamicErrors.push(F);
          return;
        }
    }
    function y1(p, u) {
      const f = process.env.NODE_ENV !== "production" && o.default.captureOwnerStack ? o.default.captureOwnerStack() : null, A = Object.defineProperty(new Error(p), "__NEXT_ERROR_CODE", {
        value: "E394",
        enumerable: !1,
        configurable: !0
      });
      return A.stack = A.name + ": " + p + (f || u), A;
    }
    var U1 = /* @__PURE__ */ (function(p) {
      return p[p.Full = 0] = "Full", p[p.Empty = 1] = "Empty", p[p.Errored = 2] = "Errored", p;
    })({});
    function u1(p, u) {
      console.error(u), p.dev || (p.hasReadableErrorStacks ? console.error(`To get a more detailed stack trace and pinpoint the issue, start the app in development mode by running \`next dev\`, then open "${p.route}" in your browser to investigate the error.`) : console.error(`To get a more detailed stack trace and pinpoint the issue, try one of the following:
  - Start the app in development mode by running \`next dev\`, then open "${p.route}" in your browser to investigate the error.
  - Rerun the production build with \`next build --debug-prerender\` to generate better stack traces.`));
    }
    function ea(p, u, f, A) {
      if (A.syncDynamicErrorWithStack)
        throw u1(p, A.syncDynamicErrorWithStack), new c.StaticGenBailoutError();
      if (u !== 0) {
        if (f.hasSuspenseAboveBody)
          return;
        const U = f.dynamicErrors;
        if (U.length > 0) {
          for (let F = 0; F < U.length; F++)
            u1(p, U[F]);
          throw new c.StaticGenBailoutError();
        }
        if (f.hasDynamicViewport)
          throw console.error(`Route "${p.route}" has a \`generateViewport\` that depends on Request data (\`cookies()\`, etc...) or uncached external data (\`fetch(...)\`, etc...) without explicitly allowing fully dynamic rendering. See more info here: https://nextjs.org/docs/messages/next-prerender-dynamic-viewport`), new c.StaticGenBailoutError();
        if (u === 1)
          throw console.error(`Route "${p.route}" did not produce a static shell and Next.js was unable to determine a reason. This is a bug in Next.js.`), new c.StaticGenBailoutError();
      } else if (f.hasAllowedDynamic === !1 && f.hasDynamicMetadata)
        throw console.error(`Route "${p.route}" has a \`generateMetadata\` that depends on Request data (\`cookies()\`, etc...) or uncached external data (\`fetch(...)\`, etc...) when the rest of the route does not. See more info here: https://nextjs.org/docs/messages/next-prerender-dynamic-metadata`), new c.StaticGenBailoutError();
    }
    function ta(p, u, f) {
      if (f.hasSuspenseAboveBody)
        return [];
      if (u !== 0) {
        const A = f.dynamicErrors;
        if (A.length > 0)
          return A;
        if (u === 1)
          return [
            Object.defineProperty(new y.InvariantError(`Route "${p.route}" did not produce a static shell and Next.js was unable to determine a reason.`), "__NEXT_ERROR_CODE", {
              value: "E936",
              enumerable: !1,
              configurable: !0
            })
          ];
      } else if (f.hasAllowedDynamic === !1 && f.dynamicErrors.length === 0 && f.dynamicMetadata)
        return [
          f.dynamicMetadata
        ];
      return [];
    }
    function aa(p, u) {
      return p.runtimeStagePromise ? p.runtimeStagePromise.then(() => u) : u;
    }
  })(p2)), p2;
}
var Lt;
function qa() {
  return Lt || (Lt = 1, (function(t, a) {
    Object.defineProperty(a, "__esModule", {
      value: !0
    }), Object.defineProperty(a, "unstable_rethrow", {
      enumerable: !0,
      get: function() {
        return i;
      }
    });
    const o = k0(), n = ga(), c = B2(), r = l0(), h = q2(), d = u0();
    function i(s) {
      if ((0, r.isNextRouterError)(s) || (0, c.isBailoutToCSRError)(s) || (0, d.isDynamicServerError)(s) || (0, h.isDynamicPostpone)(s) || (0, n.isPostpone)(s) || (0, o.isHangingPromiseRejectionError)(s) || (0, h.isPrerenderInterruptedError)(s))
        throw s;
      s instanceof Error && "cause" in s && i(s.cause);
    }
    (typeof a.default == "function" || typeof a.default == "object" && a.default !== null) && typeof a.default.__esModule > "u" && (Object.defineProperty(a.default, "__esModule", { value: !0 }), Object.assign(a.default, a), t.exports = a.default);
  })($e, $e.exports)), $e.exports;
}
var He = { exports: {} }, Pt;
function Aa() {
  return Pt || (Pt = 1, (function(t, a) {
    Object.defineProperty(a, "__esModule", {
      value: !0
    }), Object.defineProperty(a, "unstable_rethrow", {
      enumerable: !0,
      get: function() {
        return c;
      }
    });
    const o = B2(), n = l0();
    function c(r) {
      if ((0, n.isNextRouterError)(r) || (0, o.isBailoutToCSRError)(r))
        throw r;
      r instanceof Error && "cause" in r && c(r.cause);
    }
    (typeof a.default == "function" || typeof a.default == "object" && a.default !== null) && typeof a.default.__esModule > "u" && (Object.defineProperty(a.default, "__esModule", { value: !0 }), Object.assign(a.default, a), t.exports = a.default);
  })(He, He.exports)), He.exports;
}
var Tt;
function Ha() {
  return Tt || (Tt = 1, (function(t, a) {
    Object.defineProperty(a, "__esModule", {
      value: !0
    }), Object.defineProperty(a, "unstable_rethrow", {
      enumerable: !0,
      get: function() {
        return o;
      }
    });
    const o = typeof window > "u" ? qa().unstable_rethrow : Aa().unstable_rethrow;
    (typeof a.default == "function" || typeof a.default == "object" && a.default !== null) && typeof a.default.__esModule > "u" && (Object.defineProperty(a.default, "__esModule", { value: !0 }), Object.assign(a.default, a), t.exports = a.default);
  })(Ne, Ne.exports)), Ne.exports;
}
var Ot;
function Sa() {
  return Ot || (Ot = 1, (function(t, a) {
    Object.defineProperty(a, "__esModule", {
      value: !0
    });
    function o(y, M) {
      for (var g in M) Object.defineProperty(y, g, {
        enumerable: !0,
        get: M[g]
      });
    }
    o(a, {
      ReadonlyURLSearchParams: function() {
        return n.ReadonlyURLSearchParams;
      },
      RedirectType: function() {
        return r.RedirectType;
      },
      forbidden: function() {
        return d.forbidden;
      },
      notFound: function() {
        return h.notFound;
      },
      permanentRedirect: function() {
        return c.permanentRedirect;
      },
      redirect: function() {
        return c.redirect;
      },
      unauthorized: function() {
        return i.unauthorized;
      },
      unstable_isUnrecognizedActionError: function() {
        return l;
      },
      unstable_rethrow: function() {
        return s.unstable_rethrow;
      }
    });
    const n = y0(), c = Ma(), r = I2(), h = fa(), d = ma(), i = va(), s = Ha();
    function l() {
      throw Object.defineProperty(new Error("`unstable_isUnrecognizedActionError` can only be used on the client."), "__NEXT_ERROR_CODE", {
        value: "E776",
        enumerable: !1,
        configurable: !0
      });
    }
    (typeof a.default == "function" || typeof a.default == "object" && a.default !== null) && typeof a.default.__esModule > "u" && (Object.defineProperty(a.default, "__esModule", { value: !0 }), Object.assign(a.default, a), t.exports = a.default);
  })(fe, fe.exports)), fe.exports;
}
var Dt;
function Ca() {
  return Dt || (Dt = 1, (function(t, a) {
    Object.defineProperty(a, "__esModule", {
      value: !0
    });
    function o(v, x) {
      for (var q in x) Object.defineProperty(v, q, {
        enumerable: !0,
        get: x[q]
      });
    }
    o(a, {
      // We need the same class that was used to instantiate the context value
      // Otherwise instanceof checks will fail in usercode
      ReadonlyURLSearchParams: function() {
        return h.ReadonlyURLSearchParams;
      },
      RedirectType: function() {
        return l.RedirectType;
      },
      ServerInsertedHTMLContext: function() {
        return i.ServerInsertedHTMLContext;
      },
      forbidden: function() {
        return l.forbidden;
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
      unauthorized: function() {
        return l.unauthorized;
      },
      unstable_isUnrecognizedActionError: function() {
        return s.unstable_isUnrecognizedActionError;
      },
      unstable_rethrow: function() {
        return l.unstable_rethrow;
      },
      useParams: function() {
        return $;
      },
      usePathname: function() {
        return N;
      },
      useRouter: function() {
        return m;
      },
      useSearchParams: function() {
        return g;
      },
      useSelectedLayoutSegment: function() {
        return H;
      },
      useSelectedLayoutSegments: function() {
        return j;
      },
      useServerInsertedHTML: function() {
        return i.useServerInsertedHTML;
      }
    });
    const c = /* @__PURE__ */ (/* @__PURE__ */ s0())._(C), r = ia(), h = sa(), d = ya(), i = pa(), s = ka(), l = Sa(), y = typeof window > "u" ? q2().useDynamicRouteParams : void 0, M = typeof window > "u" ? q2().useDynamicSearchParams : void 0;
    function g() {
      M?.("useSearchParams()");
      const v = (0, c.useContext)(h.SearchParamsContext), x = (0, c.useMemo)(() => v ? new h.ReadonlyURLSearchParams(v) : null, [
        v
      ]);
      if (process.env.NODE_ENV !== "production" && "use" in c.default) {
        const q = (0, c.use)(h.NavigationPromisesContext);
        if (q)
          return (0, c.use)(q.searchParams);
      }
      return x;
    }
    function N() {
      y?.("usePathname()");
      const v = (0, c.useContext)(h.PathnameContext);
      if (process.env.NODE_ENV !== "production" && "use" in c.default) {
        const x = (0, c.use)(h.NavigationPromisesContext);
        if (x)
          return (0, c.use)(x.pathname);
      }
      return v;
    }
    function m() {
      const v = (0, c.useContext)(r.AppRouterContext);
      if (v === null)
        throw Object.defineProperty(new Error("invariant expected app router to be mounted"), "__NEXT_ERROR_CODE", {
          value: "E238",
          enumerable: !1,
          configurable: !0
        });
      return v;
    }
    function $() {
      y?.("useParams()");
      const v = (0, c.useContext)(h.PathParamsContext);
      if (process.env.NODE_ENV !== "production" && "use" in c.default) {
        const x = (0, c.use)(h.NavigationPromisesContext);
        if (x)
          return (0, c.use)(x.params);
      }
      return v;
    }
    function j(v = "children") {
      y?.("useSelectedLayoutSegments()");
      const x = (0, c.useContext)(r.LayoutRouterContext);
      if (!x) return null;
      if (process.env.NODE_ENV !== "production" && "use" in c.default) {
        const q = (0, c.use)(h.NavigationPromisesContext);
        if (q) {
          const b = q.selectedLayoutSegmentsPromises?.get(v);
          if (b)
            return (0, c.use)(b);
        }
      }
      return (0, d.getSelectedLayoutSegmentPath)(x.parentTree, v);
    }
    function H(v = "children") {
      y?.("useSelectedLayoutSegment()");
      const x = (0, c.useContext)(h.NavigationPromisesContext), q = j(v);
      if (process.env.NODE_ENV !== "production" && x && "use" in c.default) {
        const b = x.selectedLayoutSegmentPromises?.get(v);
        if (b)
          return (0, c.use)(b);
      }
      return (0, d.computeSelectedLayoutSegment)(q, v);
    }
    (typeof a.default == "function" || typeof a.default == "object" && a.default !== null) && typeof a.default.__esModule > "u" && (Object.defineProperty(a.default, "__esModule", { value: !0 }), Object.assign(a.default, a), t.exports = a.default);
  })(le, le.exports)), le.exports;
}
var g2, It;
function Va() {
  return It || (It = 1, g2 = Ca()), g2;
}
var Ra = Va(), X = function() {
  return X = Object.assign || function(a) {
    for (var o, n = 1, c = arguments.length; n < c; n++) {
      o = arguments[n];
      for (var r in o) Object.prototype.hasOwnProperty.call(o, r) && (a[r] = o[r]);
    }
    return a;
  }, X.apply(this, arguments);
};
function O1(t, a, o) {
  if (o || arguments.length === 2) for (var n = 0, c = a.length, r; n < c; n++)
    (r || !(n in a)) && (r || (r = Array.prototype.slice.call(a, 0, n)), r[n] = a[n]);
  return t.concat(r || Array.prototype.slice.call(a));
}
function Ea(t) {
  var a = /* @__PURE__ */ Object.create(null);
  return function(o) {
    return a[o] === void 0 && (a[o] = t(o)), a[o];
  };
}
var La = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|disableRemotePlayback|download|draggable|encType|enterKeyHint|fetchpriority|fetchPriority|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|popover|popoverTarget|popoverTargetAction|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/, Pa = /* @__PURE__ */ Ea(
  function(t) {
    return La.test(t) || t.charCodeAt(0) === 111 && t.charCodeAt(1) === 110 && t.charCodeAt(2) < 91;
  }
  /* Z+1 */
), B = "-ms-", re = "-moz-", E = "-webkit-", f0 = "comm", Ge = "rule", U2 = "decl", Ta = "@import", Oa = "@namespace", m0 = "@keyframes", Da = "@layer", v0 = Math.abs, W2 = String.fromCharCode, A2 = Object.assign;
function Ia(t, a) {
  return G(t, 0) ^ 45 ? (((a << 2 ^ G(t, 0)) << 2 ^ G(t, 1)) << 2 ^ G(t, 2)) << 2 ^ G(t, 3) : 0;
}
function g0(t) {
  return t.trim();
}
function m1(t, a) {
  return (t = a.exec(t)) ? t[0] : t;
}
function S(t, a, o) {
  return t.replace(a, o);
}
function Ve(t, a, o) {
  return t.indexOf(a, o);
}
function G(t, a) {
  return t.charCodeAt(a) | 0;
}
function D1(t, a, o) {
  return t.slice(a, o);
}
function p1(t) {
  return t.length;
}
function _0(t) {
  return t.length;
}
function ce(t, a) {
  return a.push(t), t;
}
function Fa(t, a) {
  return t.map(a).join("");
}
function Ft(t, a) {
  return t.filter(function(o) {
    return !m1(o, a);
  });
}
var Xe = 1, X1 = 1, x0 = 0, d1 = 0, Z = 0, te = "";
function Ye(t, a, o, n, c, r, h, d) {
  return { value: t, root: a, parent: o, type: n, props: c, children: r, line: Xe, column: X1, length: h, return: "", siblings: d };
}
function $1(t, a) {
  return A2(Ye("", null, null, "", null, null, 0, t.siblings), t, { length: -t.length }, a);
}
function W1(t) {
  for (; t.root; )
    t = $1(t.root, { children: [t] });
  ce(t, t.siblings);
}
function Ba() {
  return Z;
}
function Ua() {
  return Z = d1 > 0 ? G(te, --d1) : 0, X1--, Z === 10 && (X1 = 1, Xe--), Z;
}
function k1() {
  return Z = d1 < x0 ? G(te, d1++) : 0, X1++, Z === 10 && (X1 = 1, Xe++), Z;
}
function z1() {
  return G(te, d1);
}
function Re() {
  return d1;
}
function Ke(t, a) {
  return D1(te, t, a);
}
function he(t) {
  switch (t) {
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
function Wa(t) {
  return Xe = X1 = 1, x0 = p1(te = t), d1 = 0, [];
}
function Za(t) {
  return te = "", t;
}
function _2(t) {
  return g0(Ke(d1 - 1, H2(t === 91 ? t + 2 : t === 40 ? t + 1 : t)));
}
function Ga(t) {
  for (; (Z = z1()) && Z < 33; )
    k1();
  return he(t) > 2 || he(Z) > 3 ? "" : " ";
}
function Xa(t, a) {
  for (; --a && k1() && !(Z < 48 || Z > 102 || Z > 57 && Z < 65 || Z > 70 && Z < 97); )
    ;
  return Ke(t, Re() + (a < 6 && z1() == 32 && k1() == 32));
}
function H2(t) {
  for (; k1(); )
    switch (Z) {
      // ] ) " '
      case t:
        return d1;
      // " '
      case 34:
      case 39:
        t !== 34 && t !== 39 && H2(Z);
        break;
      // (
      case 40:
        t === 41 && H2(t);
        break;
      // \
      case 92:
        k1();
        break;
    }
  return d1;
}
function Ya(t, a) {
  for (; k1() && t + Z !== 57; )
    if (t + Z === 84 && z1() === 47)
      break;
  return "/*" + Ke(a, d1 - 1) + "*" + W2(t === 47 ? t : k1());
}
function Ka(t) {
  for (; !he(z1()); )
    k1();
  return Ke(t, d1);
}
function Qa(t) {
  return Za(Ee("", null, null, null, [""], t = Wa(t), 0, [0], t));
}
function Ee(t, a, o, n, c, r, h, d, i) {
  for (var s = 0, l = 0, y = h, M = 0, g = 0, N = 0, m = 1, $ = 1, j = 1, H = 0, v = "", x = c, q = r, b = n, _ = v; $; )
    switch (N = H, H = k1()) {
      // (
      case 40:
        if (N != 108 && G(_, y - 1) == 58) {
          Ve(_ += S(_2(H), "&", "&\f"), "&\f", v0(s ? d[s - 1] : 0)) != -1 && (j = -1);
          break;
        }
      // " ' [
      case 34:
      case 39:
      case 91:
        _ += _2(H);
        break;
      // \t \n \r \s
      case 9:
      case 10:
      case 13:
      case 32:
        _ += Ga(N);
        break;
      // \
      case 92:
        _ += Xa(Re() - 1, 7);
        continue;
      // /
      case 47:
        switch (z1()) {
          case 42:
          case 47:
            ce(Ja(Ya(k1(), Re()), a, o, i), i), (he(N || 1) == 5 || he(z1() || 1) == 5) && p1(_) && D1(_, -1, void 0) !== " " && (_ += " ");
            break;
          default:
            _ += "/";
        }
        break;
      // {
      case 123 * m:
        d[s++] = p1(_) * j;
      // } ; \0
      case 125 * m:
      case 59:
      case 0:
        switch (H) {
          // \0 }
          case 0:
          case 125:
            $ = 0;
          // ;
          case 59 + l:
            j == -1 && (_ = S(_, /\f/g, "")), g > 0 && (p1(_) - y || m === 0 && N === 47) && ce(g > 32 ? Ut(_ + ";", n, o, y - 1, i) : Ut(S(_, " ", "") + ";", n, o, y - 2, i), i);
            break;
          // @ ;
          case 59:
            _ += ";";
          // { rule/at-rule
          default:
            if (ce(b = Bt(_, a, o, s, l, c, d, v, x = [], q = [], y, r), r), H === 123)
              if (l === 0)
                Ee(_, a, b, b, x, r, y, d, q);
              else {
                switch (M) {
                  // c(ontainer)
                  case 99:
                    if (G(_, 3) === 110) break;
                  // l(ayer)
                  case 108:
                    if (G(_, 2) === 97) break;
                  default:
                    l = 0;
                  // d(ocument) m(edia) s(upports)
                  case 100:
                  case 109:
                  case 115:
                }
                l ? Ee(t, b, b, n && ce(Bt(t, b, b, 0, 0, c, d, v, c, x = [], y, q), q), c, q, y, d, n ? x : q) : Ee(_, b, b, b, [""], q, 0, d, q);
              }
        }
        s = l = g = 0, m = j = 1, v = _ = "", y = h;
        break;
      // :
      case 58:
        y = 1 + p1(_), g = N;
      default:
        if (m < 1) {
          if (H == 123)
            --m;
          else if (H == 125 && m++ == 0 && Ua() == 125)
            continue;
        }
        switch (_ += W2(H), H * m) {
          // &
          case 38:
            j = l > 0 ? 1 : (_ += "\f", -1);
            break;
          // ,
          case 44:
            d[s++] = (p1(_) - 1) * j, j = 1;
            break;
          // @
          case 64:
            z1() === 45 && (_ += _2(k1())), M = z1(), l = y = p1(v = _ += Ka(Re())), H++;
            break;
          // -
          case 45:
            N === 45 && p1(_) == 2 && (m = 0);
        }
    }
  return r;
}
function Bt(t, a, o, n, c, r, h, d, i, s, l, y) {
  for (var M = c - 1, g = c === 0 ? r : [""], N = _0(g), m = 0, $ = 0, j = 0; m < n; ++m)
    for (var H = 0, v = D1(t, M + 1, M = v0($ = h[m])), x = t; H < N; ++H)
      (x = g0($ > 0 ? g[H] + " " + v : S(v, /&\f/g, g[H]))) && (i[j++] = x);
  return Ye(t, a, o, c === 0 ? Ge : d, i, s, l, y);
}
function Ja(t, a, o, n) {
  return Ye(t, a, o, f0, W2(Ba()), D1(t, 2, -2), 0, n);
}
function Ut(t, a, o, n, c) {
  return Ye(t, a, o, U2, D1(t, 0, n), D1(t, n + 1, -1), n, c);
}
function b0(t, a, o) {
  switch (Ia(t, a)) {
    // color-adjust
    case 5103:
      return E + "print-" + t + t;
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
    // background-clip, columns, column-(count|fill|gap|rule|rule-color|rule-style|rule-width|span|width)
    case 4215:
    case 6389:
    case 5109:
    case 5365:
    case 5621:
    case 3829:
    // mask, mask-image, mask-(mode|clip|size), mask-(repeat|origin), mask-position
    case 6391:
    case 5879:
    case 5623:
    case 6135:
    case 4599:
      return E + t + t;
    // mask-composite
    case 4855:
      return E + t.replace("add", "source-over").replace("substract", "source-out").replace("intersect", "source-in").replace("exclude", "xor") + t;
    // tab-size
    case 4789:
      return re + t + t;
    // appearance, user-select, transform, hyphens, text-size-adjust
    case 5349:
    case 4246:
    case 4810:
    case 6968:
    case 2756:
      return E + t + re + t + B + t + t;
    // writing-mode
    case 5936:
      switch (G(t, a + 11)) {
        // vertical-l(r)
        case 114:
          return E + t + B + S(t, /[svh]\w+-[tblr]{2}/, "tb") + t;
        // vertical-r(l)
        case 108:
          return E + t + B + S(t, /[svh]\w+-[tblr]{2}/, "tb-rl") + t;
        // horizontal(-)tb
        case 45:
          return E + t + B + S(t, /[svh]\w+-[tblr]{2}/, "lr") + t;
      }
    // flex, flex-direction, scroll-snap-type, writing-mode
    case 6828:
    case 4268:
    case 2903:
      return E + t + B + t + t;
    // order
    case 6165:
      return E + t + B + "flex-" + t + t;
    // align-items
    case 5187:
      return E + t + S(t, /(\w+).+(:[^]+)/, E + "box-$1$2" + B + "flex-$1$2") + t;
    // align-self
    case 5443:
      return E + t + B + "flex-item-" + S(t, /flex-|-self/g, "") + (m1(t, /flex-|baseline/) ? "" : B + "grid-row-" + S(t, /flex-|-self/g, "")) + t;
    // align-content
    case 4675:
      return E + t + B + "flex-line-pack" + S(t, /align-content|flex-|-self/g, "") + t;
    // flex-shrink
    case 5548:
      return E + t + B + S(t, "shrink", "negative") + t;
    // flex-basis
    case 5292:
      return E + t + B + S(t, "basis", "preferred-size") + t;
    // flex-grow
    case 6060:
      return E + "box-" + S(t, "-grow", "") + E + t + B + S(t, "grow", "positive") + t;
    // transition
    case 4554:
      return E + S(t, /([^-])(transform)/g, "$1" + E + "$2") + t;
    // cursor
    case 6187:
      return S(S(S(t, /(zoom-|grab)/, E + "$1"), /(image-set)/, E + "$1"), t, "") + t;
    // background, background-image
    case 5495:
    case 3959:
      return S(t, /(image-set\([^]*)/, E + "$1$`$1");
    // justify-content
    case 4968:
      return S(S(t, /(.+:)(flex-)?(.*)/, E + "box-pack:$3" + B + "flex-pack:$3"), /space-between/, "justify") + E + t + t;
    // justify-self
    case 4200:
      if (!m1(t, /flex-|baseline/)) return B + "grid-column-align" + D1(t, a) + t;
      break;
    // grid-template-(columns|rows)
    case 2592:
    case 3360:
      return B + S(t, "template-", "") + t;
    // grid-(row|column)-start
    case 4384:
    case 3616:
      return o && o.some(function(n, c) {
        return a = c, m1(n.props, /grid-\w+-end/);
      }) ? ~Ve(t + (o = o[a].value), "span", 0) ? t : B + S(t, "-start", "") + t + B + "grid-row-span:" + (~Ve(o, "span", 0) ? m1(o, /\d+/) : +m1(o, /\d+/) - +m1(t, /\d+/)) + ";" : B + S(t, "-start", "") + t;
    // grid-(row|column)-end
    case 4896:
    case 4128:
      return o && o.some(function(n) {
        return m1(n.props, /grid-\w+-start/);
      }) ? t : B + S(S(t, "-end", "-span"), "span ", "") + t;
    // (margin|padding)-inline-(start|end)
    case 4095:
    case 3583:
    case 4068:
    case 2532:
      return S(t, /(.+)-inline(.+)/, E + "$1$2") + t;
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
      if (p1(t) - 1 - a > 6)
        switch (G(t, a + 1)) {
          // (m)ax-content, (m)in-content
          case 109:
            if (G(t, a + 4) !== 45)
              break;
          // (f)ill-available, (f)it-content
          case 102:
            return S(t, /(.+:)(.+)-([^]+)/, "$1" + E + "$2-$3$1" + re + (G(t, a + 3) == 108 ? "$3" : "$2-$3")) + t;
          // (s)tretch
          case 115:
            return ~Ve(t, "stretch", 0) ? b0(S(t, "stretch", "fill-available"), a, o) + t : t;
        }
      break;
    // grid-(column|row)
    case 5152:
    case 5920:
      return S(t, /(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/, function(n, c, r, h, d, i, s) {
        return B + c + ":" + r + s + (h ? B + c + "-span:" + (d ? i : +i - +r) + s : "") + t;
      });
    // position: sticky
    case 4949:
      if (G(t, a + 6) === 121)
        return S(t, ":", ":" + E) + t;
      break;
    // display: (flex|inline-flex|grid|inline-grid)
    case 6444:
      switch (G(t, G(t, 14) === 45 ? 18 : 11)) {
        // (inline-)?fle(x)
        case 120:
          return S(t, /(.+:)([^;\s!]+)(;|(\s+)?!.+)?/, "$1" + E + (G(t, 14) === 45 ? "inline-" : "") + "box$3$1" + E + "$2$3$1" + B + "$2box$3") + t;
        // (inline-)?gri(d)
        case 100:
          return S(t, ":", ":" + B) + t;
      }
      break;
    // scroll-margin, scroll-margin-(top|right|bottom|left)
    case 5719:
    case 2647:
    case 2135:
    case 3927:
    case 2391:
      return S(t, "scroll-", "scroll-snap-") + t;
  }
  return t;
}
function Oe(t, a) {
  for (var o = "", n = 0; n < t.length; n++)
    o += a(t[n], n, t, a) || "";
  return o;
}
function eo(t, a, o, n) {
  switch (t.type) {
    case Da:
      if (t.children.length) break;
    case Ta:
    case Oa:
    case U2:
      return t.return = t.return || t.value;
    case f0:
      return "";
    case m0:
      return t.return = t.value + "{" + Oe(t.children, n) + "}";
    case Ge:
      if (!p1(t.value = t.props.join(","))) return "";
  }
  return p1(o = Oe(t.children, n)) ? t.return = t.value + "{" + o + "}" : "";
}
function to(t) {
  var a = _0(t);
  return function(o, n, c, r) {
    for (var h = "", d = 0; d < a; d++)
      h += t[d](o, n, c, r) || "";
    return h;
  };
}
function ao(t) {
  return function(a) {
    a.root || (a = a.return) && t(a);
  };
}
function oo(t, a, o, n) {
  if (t.length > -1 && !t.return)
    switch (t.type) {
      case U2:
        t.return = b0(t.value, t.length, o);
        return;
      case m0:
        return Oe([$1(t, { value: S(t.value, "@", "@" + E) })], n);
      case Ge:
        if (t.length)
          return Fa(o = t.props, function(c) {
            switch (m1(c, n = /(::plac\w+|:read-\w+)/)) {
              // :read-(only|write)
              case ":read-only":
              case ":read-write":
                W1($1(t, { props: [S(c, /:(read-\w+)/, ":" + re + "$1")] })), W1($1(t, { props: [c] })), A2(t, { props: Ft(o, n) });
                break;
              // :placeholder
              case "::placeholder":
                W1($1(t, { props: [S(c, /:(plac\w+)/, ":" + E + "input-$1")] })), W1($1(t, { props: [S(c, /:(plac\w+)/, ":" + re + "$1")] })), W1($1(t, { props: [S(c, /:(plac\w+)/, B + "input-$1")] })), W1($1(t, { props: [c] })), A2(t, { props: Ft(o, n) });
                break;
            }
            return "";
          });
    }
}
var no = {
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
  scale: 1,
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
}, g1 = typeof process < "u" && process.env !== void 0 && (process.env.REACT_APP_SC_ATTR || process.env.SC_ATTR) || "data-styled", w0 = "active", De = "data-styled-version", Y1 = "6.3.8", Z2 = `/*!sc*/
`, Ie = typeof window < "u" && typeof document < "u", c1 = C.createContext === void 0, co = !!(typeof SC_DISABLE_SPEEDY == "boolean" ? SC_DISABLE_SPEEDY : typeof process < "u" && process.env !== void 0 && process.env.REACT_APP_SC_DISABLE_SPEEDY !== void 0 && process.env.REACT_APP_SC_DISABLE_SPEEDY !== "" ? process.env.REACT_APP_SC_DISABLE_SPEEDY !== "false" && process.env.REACT_APP_SC_DISABLE_SPEEDY : typeof process < "u" && process.env !== void 0 && process.env.SC_DISABLE_SPEEDY !== void 0 && process.env.SC_DISABLE_SPEEDY !== "" ? process.env.SC_DISABLE_SPEEDY !== "false" && process.env.SC_DISABLE_SPEEDY : process.env.NODE_ENV !== "production"), ro = {}, Wt = /invalid hook call/i, Se = /* @__PURE__ */ new Set(), N0 = function(t, a) {
  if (process.env.NODE_ENV !== "production") {
    if (c1) return;
    var o = a ? ' with the id of "'.concat(a, '"') : "", n = "The component ".concat(t).concat(o, ` has been created dynamically.
`) + `You may see this warning because you've called styled inside another component.
To resolve this only create new StyledComponents outside of any render method and function component.
See https://styled-components.com/docs/basics#define-styled-components-outside-of-the-render-method for more info.
`, c = console.error;
    try {
      var r = !0;
      console.error = function(h) {
        for (var d = [], i = 1; i < arguments.length; i++) d[i - 1] = arguments[i];
        Wt.test(h) ? (r = !1, Se.delete(n)) : c.apply(void 0, O1([h], d, !1));
      }, typeof C.useState == "function" && C.useState(null), r && !Se.has(n) && (console.warn(n), Se.add(n));
    } catch (h) {
      Wt.test(h.message) && Se.delete(n);
    } finally {
      console.error = c;
    }
  }
}, Qe = Object.freeze([]), K1 = Object.freeze({});
function $0(t, a, o) {
  return o === void 0 && (o = K1), t.theme !== o.theme && t.theme || a || o.theme;
}
var S2 = /* @__PURE__ */ new Set(["a", "abbr", "address", "area", "article", "aside", "audio", "b", "bdi", "bdo", "blockquote", "body", "button", "br", "canvas", "caption", "cite", "code", "col", "colgroup", "data", "datalist", "dd", "del", "details", "dfn", "dialog", "div", "dl", "dt", "em", "embed", "fieldset", "figcaption", "figure", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "header", "hgroup", "hr", "html", "i", "iframe", "img", "input", "ins", "kbd", "label", "legend", "li", "main", "map", "mark", "menu", "meter", "nav", "object", "ol", "optgroup", "option", "output", "p", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "search", "section", "select", "slot", "small", "span", "strong", "sub", "summary", "sup", "table", "tbody", "td", "template", "textarea", "tfoot", "th", "thead", "time", "tr", "u", "ul", "var", "video", "wbr", "circle", "clipPath", "defs", "ellipse", "feBlend", "feColorMatrix", "feComponentTransfer", "feComposite", "feConvolveMatrix", "feDiffuseLighting", "feDisplacementMap", "feDistantLight", "feDropShadow", "feFlood", "feFuncA", "feFuncB", "feFuncG", "feFuncR", "feGaussianBlur", "feImage", "feMerge", "feMergeNode", "feMorphology", "feOffset", "fePointLight", "feSpecularLighting", "feSpotLight", "feTile", "feTurbulence", "filter", "foreignObject", "g", "image", "line", "linearGradient", "marker", "mask", "path", "pattern", "polygon", "polyline", "radialGradient", "rect", "stop", "svg", "switch", "symbol", "text", "textPath", "tspan", "use"]), ho = /[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g, io = /(^-|-$)/g;
function Zt(t) {
  return t.replace(ho, "-").replace(io, "");
}
var so = /(a)(d)/gi, Gt = function(t) {
  return String.fromCharCode(t + (t > 25 ? 39 : 97));
};
function C2(t) {
  var a, o = "";
  for (a = Math.abs(t); a > 52; a = a / 52 | 0) o = Gt(a % 52) + o;
  return (Gt(a % 52) + o).replace(so, "$1-$2");
}
var x2, P1 = function(t, a) {
  for (var o = a.length; o; ) t = 33 * t ^ a.charCodeAt(--o);
  return t;
}, z0 = function(t) {
  return P1(5381, t);
};
function j0(t) {
  return C2(z0(t) >>> 0);
}
function q0(t) {
  return process.env.NODE_ENV !== "production" && typeof t == "string" && t || t.displayName || t.name || "Component";
}
function b2(t) {
  return typeof t == "string" && (process.env.NODE_ENV === "production" || t.charAt(0) === t.charAt(0).toLowerCase());
}
var A0 = typeof Symbol == "function" && Symbol.for, H0 = A0 ? /* @__PURE__ */ Symbol.for("react.memo") : 60115, yo = A0 ? /* @__PURE__ */ Symbol.for("react.forward_ref") : 60112, po = { childContextTypes: !0, contextType: !0, contextTypes: !0, defaultProps: !0, displayName: !0, getDefaultProps: !0, getDerivedStateFromError: !0, getDerivedStateFromProps: !0, mixins: !0, propTypes: !0, type: !0 }, ko = { name: !0, length: !0, prototype: !0, caller: !0, callee: !0, arguments: !0, arity: !0 }, S0 = { $$typeof: !0, compare: !0, defaultProps: !0, displayName: !0, propTypes: !0, type: !0 }, lo = ((x2 = {})[yo] = { $$typeof: !0, render: !0, defaultProps: !0, displayName: !0, propTypes: !0 }, x2[H0] = S0, x2);
function Xt(t) {
  return ("type" in (a = t) && a.type.$$typeof) === H0 ? S0 : "$$typeof" in t ? lo[t.$$typeof] : po;
  var a;
}
var uo = Object.defineProperty, Mo = Object.getOwnPropertyNames, Yt = Object.getOwnPropertySymbols, fo = Object.getOwnPropertyDescriptor, mo = Object.getPrototypeOf, Kt = Object.prototype;
function C0(t, a, o) {
  if (typeof a != "string") {
    if (Kt) {
      var n = mo(a);
      n && n !== Kt && C0(t, n, o);
    }
    var c = Mo(a);
    Yt && (c = c.concat(Yt(a)));
    for (var r = Xt(t), h = Xt(a), d = 0; d < c.length; ++d) {
      var i = c[d];
      if (!(i in ko || o && o[i] || h && i in h || r && i in r)) {
        var s = fo(a, i);
        try {
          uo(t, i, s);
        } catch {
        }
      }
    }
  }
  return t;
}
function I1(t) {
  return typeof t == "function";
}
function G2(t) {
  return typeof t == "object" && "styledComponentId" in t;
}
function T1(t, a) {
  return t && a ? "".concat(t, " ").concat(a) : t || a || "";
}
function Fe(t, a) {
  if (t.length === 0) return "";
  for (var o = t[0], n = 1; n < t.length; n++) o += a ? a + t[n] : t[n];
  return o;
}
function Q1(t) {
  return t !== null && typeof t == "object" && t.constructor.name === Object.name && !("props" in t && t.$$typeof);
}
function V2(t, a, o) {
  if (o === void 0 && (o = !1), !o && !Q1(t) && !Array.isArray(t)) return a;
  if (Array.isArray(a)) for (var n = 0; n < a.length; n++) t[n] = V2(t[n], a[n]);
  else if (Q1(a)) for (var n in a) t[n] = V2(t[n], a[n]);
  return t;
}
function X2(t, a) {
  Object.defineProperty(t, "toString", { value: a });
}
var vo = process.env.NODE_ENV !== "production" ? { 1: `Cannot create styled-component for component: %s.

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
function go() {
  for (var t = [], a = 0; a < arguments.length; a++) t[a] = arguments[a];
  for (var o = t[0], n = [], c = 1, r = t.length; c < r; c += 1) n.push(t[c]);
  return n.forEach(function(h) {
    o = o.replace(/%[a-z]/, h);
  }), o;
}
function o1(t) {
  for (var a = [], o = 1; o < arguments.length; o++) a[o - 1] = arguments[o];
  return process.env.NODE_ENV === "production" ? new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(t, " for more information.").concat(a.length > 0 ? " Args: ".concat(a.join(", ")) : "")) : new Error(go.apply(void 0, O1([vo[t]], a, !1)).trim());
}
var _o = (function() {
  function t(a) {
    this.groupSizes = new Uint32Array(512), this.length = 512, this.tag = a;
  }
  return t.prototype.indexOfGroup = function(a) {
    for (var o = 0, n = 0; n < a; n++) o += this.groupSizes[n];
    return o;
  }, t.prototype.insertRules = function(a, o) {
    if (a >= this.groupSizes.length) {
      for (var n = this.groupSizes, c = n.length, r = c; a >= r; ) if ((r <<= 1) < 0) throw o1(16, "".concat(a));
      this.groupSizes = new Uint32Array(r), this.groupSizes.set(n), this.length = r;
      for (var h = c; h < r; h++) this.groupSizes[h] = 0;
    }
    for (var d = this.indexOfGroup(a + 1), i = (h = 0, o.length); h < i; h++) this.tag.insertRule(d, o[h]) && (this.groupSizes[a]++, d++);
  }, t.prototype.clearGroup = function(a) {
    if (a < this.length) {
      var o = this.groupSizes[a], n = this.indexOfGroup(a), c = n + o;
      this.groupSizes[a] = 0;
      for (var r = n; r < c; r++) this.tag.deleteRule(n);
    }
  }, t.prototype.getGroup = function(a) {
    var o = "";
    if (a >= this.length || this.groupSizes[a] === 0) return o;
    for (var n = this.groupSizes[a], c = this.indexOfGroup(a), r = c + n, h = c; h < r; h++) o += "".concat(this.tag.getRule(h)).concat(Z2);
    return o;
  }, t;
})(), xo = 1 << 30, Le = /* @__PURE__ */ new Map(), Be = /* @__PURE__ */ new Map(), Pe = 1, Z1 = function(t) {
  if (Le.has(t)) return Le.get(t);
  for (; Be.has(Pe); ) Pe++;
  var a = Pe++;
  if (process.env.NODE_ENV !== "production" && ((0 | a) < 0 || a > xo)) throw o1(16, "".concat(a));
  return Le.set(t, a), Be.set(a, t), a;
}, bo = function(t, a) {
  Pe = a + 1, Le.set(t, a), Be.set(a, t);
}, wo = "style[".concat(g1, "][").concat(De, '="').concat(Y1, '"]'), No = new RegExp("^".concat(g1, '\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')), $o = function(t, a, o) {
  for (var n, c = o.split(","), r = 0, h = c.length; r < h; r++) (n = c[r]) && t.registerName(a, n);
}, zo = function(t, a) {
  for (var o, n = ((o = a.textContent) !== null && o !== void 0 ? o : "").split(Z2), c = [], r = 0, h = n.length; r < h; r++) {
    var d = n[r].trim();
    if (d) {
      var i = d.match(No);
      if (i) {
        var s = 0 | parseInt(i[1], 10), l = i[2];
        s !== 0 && (bo(l, s), $o(t, l, i[3]), t.getTag().insertRules(s, c)), c.length = 0;
      } else c.push(d);
    }
  }
}, Qt = function(t) {
  for (var a = document.querySelectorAll(wo), o = 0, n = a.length; o < n; o++) {
    var c = a[o];
    c && c.getAttribute(g1) !== w0 && (zo(t, c), c.parentNode && c.parentNode.removeChild(c));
  }
};
function R2() {
  return typeof __webpack_nonce__ < "u" ? __webpack_nonce__ : null;
}
var V0 = function(t) {
  var a = document.head, o = t || a, n = document.createElement("style"), c = (function(d) {
    var i = Array.from(d.querySelectorAll("style[".concat(g1, "]")));
    return i[i.length - 1];
  })(o), r = c !== void 0 ? c.nextSibling : null;
  n.setAttribute(g1, w0), n.setAttribute(De, Y1);
  var h = R2();
  return h && n.setAttribute("nonce", h), o.insertBefore(n, r), n;
}, jo = (function() {
  function t(a) {
    this.element = V0(a), this.element.appendChild(document.createTextNode("")), this.sheet = (function(o) {
      if (o.sheet) return o.sheet;
      for (var n = document.styleSheets, c = 0, r = n.length; c < r; c++) {
        var h = n[c];
        if (h.ownerNode === o) return h;
      }
      throw o1(17);
    })(this.element), this.length = 0;
  }
  return t.prototype.insertRule = function(a, o) {
    try {
      return this.sheet.insertRule(o, a), this.length++, !0;
    } catch {
      return !1;
    }
  }, t.prototype.deleteRule = function(a) {
    this.sheet.deleteRule(a), this.length--;
  }, t.prototype.getRule = function(a) {
    var o = this.sheet.cssRules[a];
    return o && o.cssText ? o.cssText : "";
  }, t;
})(), qo = (function() {
  function t(a) {
    this.element = V0(a), this.nodes = this.element.childNodes, this.length = 0;
  }
  return t.prototype.insertRule = function(a, o) {
    if (a <= this.length && a >= 0) {
      var n = document.createTextNode(o);
      return this.element.insertBefore(n, this.nodes[a] || null), this.length++, !0;
    }
    return !1;
  }, t.prototype.deleteRule = function(a) {
    this.element.removeChild(this.nodes[a]), this.length--;
  }, t.prototype.getRule = function(a) {
    return a < this.length ? this.nodes[a].textContent : "";
  }, t;
})(), Ao = (function() {
  function t(a) {
    this.rules = [], this.length = 0;
  }
  return t.prototype.insertRule = function(a, o) {
    return a <= this.length && (this.rules.splice(a, 0, o), this.length++, !0);
  }, t.prototype.deleteRule = function(a) {
    this.rules.splice(a, 1), this.length--;
  }, t.prototype.getRule = function(a) {
    return a < this.length ? this.rules[a] : "";
  }, t;
})(), Jt = Ie, Ho = { isServer: !Ie, useCSSOMInjection: !co }, de = (function() {
  function t(a, o, n) {
    a === void 0 && (a = K1), o === void 0 && (o = {});
    var c = this;
    this.options = X(X({}, Ho), a), this.gs = o, this.names = new Map(n), this.server = !!a.isServer, !this.server && Ie && Jt && (Jt = !1, Qt(this)), X2(this, function() {
      return (function(r) {
        for (var h = r.getTag(), d = h.length, i = "", s = function(y) {
          var M = (function(j) {
            return Be.get(j);
          })(y);
          if (M === void 0) return "continue";
          var g = r.names.get(M), N = h.getGroup(y);
          if (g === void 0 || !g.size || N.length === 0) return "continue";
          var m = "".concat(g1, ".g").concat(y, '[id="').concat(M, '"]'), $ = "";
          g !== void 0 && g.forEach(function(j) {
            j.length > 0 && ($ += "".concat(j, ","));
          }), i += "".concat(N).concat(m, '{content:"').concat($, '"}').concat(Z2);
        }, l = 0; l < d; l++) s(l);
        return i;
      })(c);
    });
  }
  return t.registerId = function(a) {
    return Z1(a);
  }, t.prototype.rehydrate = function() {
    !this.server && Ie && Qt(this);
  }, t.prototype.reconstructWithOptions = function(a, o) {
    return o === void 0 && (o = !0), new t(X(X({}, this.options), a), this.gs, o && this.names || void 0);
  }, t.prototype.allocateGSInstance = function(a) {
    return this.gs[a] = (this.gs[a] || 0) + 1;
  }, t.prototype.getTag = function() {
    return this.tag || (this.tag = (a = (function(o) {
      var n = o.useCSSOMInjection, c = o.target;
      return o.isServer ? new Ao(c) : n ? new jo(c) : new qo(c);
    })(this.options), new _o(a)));
    var a;
  }, t.prototype.hasNameForId = function(a, o) {
    return this.names.has(a) && this.names.get(a).has(o);
  }, t.prototype.registerName = function(a, o) {
    if (Z1(a), this.names.has(a)) this.names.get(a).add(o);
    else {
      var n = /* @__PURE__ */ new Set();
      n.add(o), this.names.set(a, n);
    }
  }, t.prototype.insertRules = function(a, o, n) {
    this.registerName(a, o), this.getTag().insertRules(Z1(a), n);
  }, t.prototype.clearNames = function(a) {
    this.names.has(a) && this.names.get(a).clear();
  }, t.prototype.clearRules = function(a) {
    this.getTag().clearGroup(Z1(a)), this.clearNames(a);
  }, t.prototype.clearTag = function() {
    this.tag = void 0;
  }, t;
})(), So = /&/g, G1 = 47;
function e0(t) {
  if (t.indexOf("}") === -1) return !1;
  for (var a = t.length, o = 0, n = 0, c = !1, r = 0; r < a; r++) {
    var h = t.charCodeAt(r);
    if (n !== 0 || c || h !== G1 || t.charCodeAt(r + 1) !== 42) if (c) h === 42 && t.charCodeAt(r + 1) === G1 && (c = !1, r++);
    else if (h !== 34 && h !== 39 || r !== 0 && t.charCodeAt(r - 1) === 92) {
      if (n === 0) {
        if (h === 123) o++;
        else if (h === 125 && --o < 0) return !0;
      }
    } else n === 0 ? n = h : n === h && (n = 0);
    else c = !0, r++;
  }
  return o !== 0 || n !== 0;
}
function R0(t, a) {
  return t.map(function(o) {
    return o.type === "rule" && (o.value = "".concat(a, " ").concat(o.value), o.value = o.value.replaceAll(",", ",".concat(a, " ")), o.props = o.props.map(function(n) {
      return "".concat(a, " ").concat(n);
    })), Array.isArray(o.children) && o.type !== "@keyframes" && (o.children = R0(o.children, a)), o;
  });
}
function E0(t) {
  var a, o, n, c = t === void 0 ? K1 : t, r = c.options, h = r === void 0 ? K1 : r, d = c.plugins, i = d === void 0 ? Qe : d, s = function(M, g, N) {
    return N.startsWith(o) && N.endsWith(o) && N.replaceAll(o, "").length > 0 ? ".".concat(a) : M;
  }, l = i.slice();
  l.push(function(M) {
    M.type === Ge && M.value.includes("&") && (M.props[0] = M.props[0].replace(So, o).replace(n, s));
  }), h.prefix && l.push(oo), l.push(eo);
  var y = function(M, g, N, m) {
    g === void 0 && (g = ""), N === void 0 && (N = ""), m === void 0 && (m = "&"), a = m, o = g, n = new RegExp("\\".concat(o, "\\b"), "g");
    var $ = (function(v) {
      if (!e0(v)) return v;
      for (var x = v.length, q = "", b = 0, _ = 0, R = 0, D = !1, L = 0; L < x; L++) {
        var K = v.charCodeAt(L);
        if (R !== 0 || D || K !== G1 || v.charCodeAt(L + 1) !== 42) if (D) K === 42 && v.charCodeAt(L + 1) === G1 && (D = !1, L++);
        else if (K !== 34 && K !== 39 || L !== 0 && v.charCodeAt(L - 1) === 92) {
          if (R === 0) if (K === 123) _++;
          else if (K === 125) {
            if (--_ < 0) {
              for (var Y = L + 1; Y < x; ) {
                var h1 = v.charCodeAt(Y);
                if (h1 === 59 || h1 === 10) break;
                Y++;
              }
              Y < x && v.charCodeAt(Y) === 59 && Y++, _ = 0, L = Y - 1, b = Y;
              continue;
            }
            _ === 0 && (q += v.substring(b, L + 1), b = L + 1);
          } else K === 59 && _ === 0 && (q += v.substring(b, L + 1), b = L + 1);
        } else R === 0 ? R = K : R === K && (R = 0);
        else D = !0, L++;
      }
      if (b < x) {
        var x1 = v.substring(b);
        e0(x1) || (q += x1);
      }
      return q;
    })((function(v) {
      if (v.indexOf("//") === -1) return v;
      for (var x = v.length, q = [], b = 0, _ = 0, R = 0, D = 0; _ < x; ) {
        var L = v.charCodeAt(_);
        if (L !== 34 && L !== 39 || _ !== 0 && v.charCodeAt(_ - 1) === 92) if (R === 0) if (L === 40 && _ >= 3 && (32 | v.charCodeAt(_ - 1)) == 108 && (32 | v.charCodeAt(_ - 2)) == 114 && (32 | v.charCodeAt(_ - 3)) == 117) D = 1, _++;
        else if (D > 0) L === 41 ? D-- : L === 40 && D++, _++;
        else if (L === G1 && _ + 1 < x && v.charCodeAt(_ + 1) === G1) {
          for (_ > b && q.push(v.substring(b, _)); _ < x && v.charCodeAt(_) !== 10; ) _++;
          b = _;
        } else _++;
        else _++;
        else R === 0 ? R = L : R === L && (R = 0), _++;
      }
      return b === 0 ? v : (b < x && q.push(v.substring(b)), q.join(""));
    })(M)), j = Qa(N || g ? "".concat(N, " ").concat(g, " { ").concat($, " }") : $);
    h.namespace && (j = R0(j, h.namespace));
    var H = [];
    return Oe(j, to(l.concat(ao(function(v) {
      return H.push(v);
    })))), H;
  };
  return y.hash = i.length ? i.reduce(function(M, g) {
    return g.name || o1(15), P1(M, g.name);
  }, 5381).toString() : "", y;
}
var Co = new de(), E2 = E0(), L2 = { shouldForwardProp: void 0, styleSheet: Co, stylis: E2 }, Y2 = c1 ? { Provider: function(t) {
  return t.children;
}, Consumer: function(t) {
  return (0, t.children)(L2);
} } : C.createContext(L2);
Y2.Consumer;
var Vo = c1 ? { Provider: function(t) {
  return t.children;
} } : C.createContext(void 0);
function Ue() {
  return c1 ? L2 : C.useContext(Y2);
}
function L0(t) {
  if (c1 || !C.useMemo) return t.children;
  var a = Ue().styleSheet, o = C.useMemo(function() {
    var r = a;
    return t.sheet ? r = t.sheet : t.target && (r = r.reconstructWithOptions({ target: t.target }, !1)), t.disableCSSOMInjection && (r = r.reconstructWithOptions({ useCSSOMInjection: !1 })), r;
  }, [t.disableCSSOMInjection, t.sheet, t.target, a]), n = C.useMemo(function() {
    return E0({ options: { namespace: t.namespace, prefix: t.enableVendorPrefixes }, plugins: t.stylisPlugins });
  }, [t.enableVendorPrefixes, t.namespace, t.stylisPlugins]), c = C.useMemo(function() {
    return { shouldForwardProp: t.shouldForwardProp, styleSheet: o, stylis: n };
  }, [t.shouldForwardProp, o, n]);
  return C.createElement(Y2.Provider, { value: c }, C.createElement(Vo.Provider, { value: n }, t.children));
}
var t0 = (function() {
  function t(a, o) {
    var n = this;
    this.inject = function(c, r) {
      r === void 0 && (r = E2);
      var h = n.name + r.hash;
      c.hasNameForId(n.id, h) || c.insertRules(n.id, h, r(n.rules, h, "@keyframes"));
    }, this.name = a, this.id = "sc-keyframes-".concat(a), this.rules = o, X2(this, function() {
      throw o1(12, String(n.name));
    });
  }
  return t.prototype.getName = function(a) {
    return a === void 0 && (a = E2), this.name + a.hash;
  }, t;
})();
function Ro(t, a) {
  return a == null || typeof a == "boolean" || a === "" ? "" : typeof a != "number" || a === 0 || t in no || t.startsWith("--") ? String(a).trim() : "".concat(a, "px");
}
var Eo = function(t) {
  return t >= "A" && t <= "Z";
};
function a0(t) {
  for (var a = "", o = 0; o < t.length; o++) {
    var n = t[o];
    if (o === 1 && n === "-" && t[0] === "-") return t;
    Eo(n) ? a += "-" + n.toLowerCase() : a += n;
  }
  return a.startsWith("ms-") ? "-" + a : a;
}
var P0 = function(t) {
  return t == null || t === !1 || t === "";
}, T0 = function(t) {
  var a = [];
  for (var o in t) {
    var n = t[o];
    t.hasOwnProperty(o) && !P0(n) && (Array.isArray(n) && n.isCss || I1(n) ? a.push("".concat(a0(o), ":"), n, ";") : Q1(n) ? a.push.apply(a, O1(O1(["".concat(o, " {")], T0(n), !1), ["}"], !1)) : a.push("".concat(a0(o), ": ").concat(Ro(o, n), ";")));
  }
  return a;
};
function j1(t, a, o, n) {
  if (P0(t)) return [];
  if (G2(t)) return [".".concat(t.styledComponentId)];
  if (I1(t)) {
    if (!I1(r = t) || r.prototype && r.prototype.isReactComponent || !a) return [t];
    var c = t(a);
    return process.env.NODE_ENV === "production" || typeof c != "object" || Array.isArray(c) || c instanceof t0 || Q1(c) || c === null || console.error("".concat(q0(t), " is not a styled component and cannot be referred to via component selector. See https://www.styled-components.com/docs/advanced#referring-to-other-components for more details.")), j1(c, a, o, n);
  }
  var r;
  return t instanceof t0 ? o ? (t.inject(o, n), [t.getName(n)]) : [t] : Q1(t) ? T0(t) : Array.isArray(t) ? Array.prototype.concat.apply(Qe, t.map(function(h) {
    return j1(h, a, o, n);
  })) : [t.toString()];
}
function O0(t) {
  for (var a = 0; a < t.length; a += 1) {
    var o = t[a];
    if (I1(o) && !G2(o)) return !1;
  }
  return !0;
}
var Lo = z0(Y1), Po = (function() {
  function t(a, o, n) {
    this.rules = a, this.staticRulesId = "", this.isStatic = process.env.NODE_ENV === "production" && (n === void 0 || n.isStatic) && O0(a), this.componentId = o, this.baseHash = P1(Lo, o), this.baseStyle = n, de.registerId(o);
  }
  return t.prototype.generateAndInjectStyles = function(a, o, n) {
    var c = this.baseStyle ? this.baseStyle.generateAndInjectStyles(a, o, n).className : "";
    if (this.isStatic && !n.hash) if (this.staticRulesId && o.hasNameForId(this.componentId, this.staticRulesId)) c = T1(c, this.staticRulesId);
    else {
      var r = Fe(j1(this.rules, a, o, n)), h = C2(P1(this.baseHash, r) >>> 0);
      if (!o.hasNameForId(this.componentId, h)) {
        var d = n(r, ".".concat(h), void 0, this.componentId);
        o.insertRules(this.componentId, h, d);
      }
      c = T1(c, h), this.staticRulesId = h;
    }
    else {
      for (var i = P1(this.baseHash, n.hash), s = "", l = 0; l < this.rules.length; l++) {
        var y = this.rules[l];
        if (typeof y == "string") s += y, process.env.NODE_ENV !== "production" && (i = P1(i, y));
        else if (y) {
          var M = Fe(j1(y, a, o, n));
          i = P1(i, M + l), s += M;
        }
      }
      if (s) {
        var g = C2(i >>> 0);
        if (!o.hasNameForId(this.componentId, g)) {
          var N = n(s, ".".concat(g), void 0, this.componentId);
          o.insertRules(this.componentId, g, N);
        }
        c = T1(c, g);
      }
    }
    return { className: c, css: typeof window > "u" ? o.getTag().getGroup(Z1(this.componentId)) : "" };
  }, t;
})(), J1 = c1 ? { Provider: function(t) {
  return t.children;
}, Consumer: function(t) {
  return (0, t.children)(void 0);
} } : C.createContext(void 0);
J1.Consumer;
function K2() {
  var t = c1 ? void 0 : C.useContext(J1);
  if (!t) throw o1(18);
  return t;
}
function To(t) {
  if (c1) return t.children;
  var a = C.useContext(J1), o = C.useMemo(function() {
    return (function(n, c) {
      if (!n) throw o1(14);
      if (I1(n)) {
        var r = n(c);
        if (process.env.NODE_ENV !== "production" && (r === null || Array.isArray(r) || typeof r != "object")) throw o1(7);
        return r;
      }
      if (Array.isArray(n) || typeof n != "object") throw o1(8);
      return c ? X(X({}, c), n) : n;
    })(t.theme, a);
  }, [t.theme, a]);
  return t.children ? C.createElement(J1.Provider, { value: o }, t.children) : null;
}
var w2 = {}, o0 = /* @__PURE__ */ new Set();
function Oo(t, a, o) {
  var n = G2(t), c = t, r = !b2(t), h = a.attrs, d = h === void 0 ? Qe : h, i = a.componentId, s = i === void 0 ? (function(x, q) {
    var b = typeof x != "string" ? "sc" : Zt(x);
    w2[b] = (w2[b] || 0) + 1;
    var _ = "".concat(b, "-").concat(j0(Y1 + b + w2[b]));
    return q ? "".concat(q, "-").concat(_) : _;
  })(a.displayName, a.parentComponentId) : i, l = a.displayName, y = l === void 0 ? (function(x) {
    return b2(x) ? "styled.".concat(x) : "Styled(".concat(q0(x), ")");
  })(t) : l, M = a.displayName && a.componentId ? "".concat(Zt(a.displayName), "-").concat(a.componentId) : a.componentId || s, g = n && c.attrs ? c.attrs.concat(d).filter(Boolean) : d, N = a.shouldForwardProp;
  if (n && c.shouldForwardProp) {
    var m = c.shouldForwardProp;
    if (a.shouldForwardProp) {
      var $ = a.shouldForwardProp;
      N = function(x, q) {
        return m(x, q) && $(x, q);
      };
    } else N = m;
  }
  var j = new Po(o, M, n ? c.componentStyle : void 0);
  function H(x, q) {
    return (function(b, _, R) {
      var D = b.attrs, L = b.componentStyle, K = b.defaultProps, Y = b.foldedComponentIds, h1 = b.styledComponentId, x1 = b.target, H1 = c1 ? void 0 : C.useContext(J1), B1 = Ue(), b1 = b.shouldForwardProp || B1.shouldForwardProp;
      process.env.NODE_ENV !== "production" && C.useDebugValue && C.useDebugValue(h1);
      var S1 = $0(_, H1, K) || K1, e1 = (function(Q, t1, w1) {
        for (var N1, s1 = X(X({}, t1), { className: void 0, theme: w1 }), y1 = 0; y1 < Q.length; y1 += 1) {
          var U1 = I1(N1 = Q[y1]) ? N1(s1) : N1;
          for (var u1 in U1) u1 === "className" ? s1.className = T1(s1.className, U1[u1]) : u1 === "style" ? s1.style = X(X({}, s1.style), U1[u1]) : s1[u1] = U1[u1];
        }
        return "className" in t1 && typeof t1.className == "string" && (s1.className = T1(s1.className, t1.className)), s1;
      })(D, _, S1), l1 = e1.as || x1, k = {};
      for (var z in e1) e1[z] === void 0 || z[0] === "$" || z === "as" || z === "theme" && e1.theme === S1 || (z === "forwardedAs" ? k.as = e1.forwardedAs : b1 && !b1(z, l1) || (k[z] = e1[z], b1 || process.env.NODE_ENV !== "development" || Pa(z) || o0.has(z) || !S2.has(l1) || (o0.add(z), console.warn('styled-components: it looks like an unknown prop "'.concat(z, '" is being sent through to the DOM, which will likely trigger a React console error. If you would like automatic filtering of unknown props, you can opt-into that behavior via `<StyleSheetManager shouldForwardProp={...}>` (connect an API like `@emotion/is-prop-valid`) or consider using transient props (`$` prefix for automatic filtering.)')))));
      var O = (function(Q, t1) {
        var w1 = Ue(), N1 = Q.generateAndInjectStyles(t1, w1.styleSheet, w1.stylis);
        return process.env.NODE_ENV !== "production" && C.useDebugValue && C.useDebugValue(N1.className), N1;
      })(L, e1), T = O.className, f1 = O.css;
      process.env.NODE_ENV !== "production" && b.warnTooManyClasses && b.warnTooManyClasses(T);
      var i1 = T1(Y, h1);
      T && (i1 += " " + T), e1.className && (i1 += " " + e1.className), k[b2(l1) && !S2.has(l1) ? "class" : "className"] = i1, R && (k.ref = R);
      var I = Te(l1, k);
      return c1 && f1 ? C.createElement(C.Fragment, null, C.createElement("style", { precedence: "styled-components", href: "sc-".concat(h1, "-").concat(T), children: f1 }), I) : I;
    })(v, x, q);
  }
  H.displayName = y;
  var v = C.forwardRef(H);
  return v.attrs = g, v.componentStyle = j, v.displayName = y, v.shouldForwardProp = N, v.foldedComponentIds = n ? T1(c.foldedComponentIds, c.styledComponentId) : "", v.styledComponentId = M, v.target = n ? c.target : t, Object.defineProperty(v, "defaultProps", { get: function() {
    return this._foldedDefaultProps;
  }, set: function(x) {
    this._foldedDefaultProps = n ? (function(q) {
      for (var b = [], _ = 1; _ < arguments.length; _++) b[_ - 1] = arguments[_];
      for (var R = 0, D = b; R < D.length; R++) V2(q, D[R], !0);
      return q;
    })({}, c.defaultProps, x) : x;
  } }), process.env.NODE_ENV !== "production" && (N0(y, M), v.warnTooManyClasses = /* @__PURE__ */ (function(x, q) {
    var b = {}, _ = !1;
    return function(R) {
      if (!_ && (b[R] = !0, Object.keys(b).length >= 200)) {
        var D = q ? ' with the id of "'.concat(q, '"') : "";
        console.warn("Over ".concat(200, " classes were generated for component ").concat(x).concat(D, `.
`) + `Consider using the attrs method, together with a style object for frequently changed styles.
Example:
  const Component = styled.div.attrs(props => ({
    style: {
      background: props.background,
    },
  }))\`width: 100%;\`

  <Component />`), _ = !0, b = {};
      }
    };
  })(y, M)), X2(v, function() {
    return ".".concat(v.styledComponentId);
  }), r && C0(v, t, { attrs: !0, componentStyle: !0, displayName: !0, foldedComponentIds: !0, shouldForwardProp: !0, styledComponentId: !0, target: !0 }), v;
}
function n0(t, a) {
  for (var o = [t[0]], n = 0, c = a.length; n < c; n += 1) o.push(a[n], t[n + 1]);
  return o;
}
var c0 = function(t) {
  return Object.assign(t, { isCss: !0 });
};
function V(t) {
  for (var a = [], o = 1; o < arguments.length; o++) a[o - 1] = arguments[o];
  if (I1(t) || Q1(t)) return c0(j1(n0(Qe, O1([t], a, !0))));
  var n = t;
  return a.length === 0 && n.length === 1 && typeof n[0] == "string" ? j1(n) : c0(j1(n0(n, a)));
}
function P2(t, a, o) {
  if (o === void 0 && (o = K1), !a) throw o1(1, a);
  var n = function(c) {
    for (var r = [], h = 1; h < arguments.length; h++) r[h - 1] = arguments[h];
    return t(a, o, V.apply(void 0, O1([c], r, !1)));
  };
  return n.attrs = function(c) {
    return P2(t, a, X(X({}, o), { attrs: Array.prototype.concat(o.attrs, c).filter(Boolean) }));
  }, n.withConfig = function(c) {
    return P2(t, a, X(X({}, o), c));
  }, n;
}
var D0 = function(t) {
  return P2(Oo, t);
}, W = D0;
S2.forEach(function(t) {
  W[t] = D0(t);
});
var Do = (function() {
  function t(a, o) {
    this.rules = a, this.componentId = o, this.isStatic = O0(a), de.registerId(this.componentId + 1);
  }
  return t.prototype.createStyles = function(a, o, n, c) {
    var r = c(Fe(j1(this.rules, o, n, c)), ""), h = this.componentId + a;
    n.insertRules(h, h, r);
  }, t.prototype.removeStyles = function(a, o) {
    o.clearRules(this.componentId + a);
  }, t.prototype.renderStyles = function(a, o, n, c) {
    a > 2 && de.registerId(this.componentId + a);
    var r = this.componentId + a;
    this.isStatic ? n.hasNameForId(r, r) || this.createStyles(a, o, n, c) : (this.removeStyles(a, n), this.createStyles(a, o, n, c));
  }, t;
})();
function Io(t) {
  for (var a = [], o = 1; o < arguments.length; o++) a[o - 1] = arguments[o];
  var n = V.apply(void 0, O1([t], a, !1)), c = "sc-global-".concat(j0(JSON.stringify(n))), r = new Do(n, c);
  process.env.NODE_ENV !== "production" && N0(c);
  var h = /* @__PURE__ */ new WeakMap(), d = function(i) {
    var s = Ue(), l = c1 ? void 0 : C.useContext(J1), y = h.get(s.styleSheet);
    if (y === void 0 && (y = s.styleSheet.allocateGSInstance(c), h.set(s.styleSheet, y)), process.env.NODE_ENV !== "production" && C.Children.count(i.children) && console.warn("The global style component ".concat(c, " was given child JSX. createGlobalStyle does not render children.")), process.env.NODE_ENV !== "production" && n.some(function($) {
      return typeof $ == "string" && $.indexOf("@import") !== -1;
    }) && console.warn("Please do not use @import CSS syntax in createGlobalStyle at this time, as the CSSOM APIs we use in production do not handle it well. Instead, we recommend using a library such as react-helmet to inject a typical <link> meta tag to the stylesheet, or simply embedding it manually in your index.html <head> section for a simpler app."), (typeof window > "u" || !s.styleSheet.server) && (function($, j, H, v, x) {
      if (r.isStatic) r.renderStyles($, ro, H, x);
      else {
        var q = X(X({}, j), { theme: $0(j, v, d.defaultProps) });
        r.renderStyles($, q, H, x);
      }
    })(y, i, s.styleSheet, l, s.stylis), !c1) {
      var M = C.useRef(!0);
      C.useLayoutEffect(function() {
        return M.current = !1, function() {
          M.current = !0, queueMicrotask(function() {
            M.current && (r.removeStyles(y, s.styleSheet), typeof document < "u" && document.querySelectorAll('style[data-styled-global="'.concat(c, '"]')).forEach(function($) {
              return $.remove();
            }));
          });
        };
      }, [y, s.styleSheet]);
    }
    if (c1) {
      var g = c + y, N = typeof window > "u" ? s.styleSheet.getTag().getGroup(Z1(g)) : "";
      if (N) {
        var m = "".concat(c, "-").concat(y);
        return C.createElement("style", { key: m, "data-styled-global": c, precedence: "styled-components", href: m, children: N });
      }
    }
    return null;
  };
  return C.memo(d);
}
var Fo = (function() {
  function t() {
    var a = this;
    this._emitSheetCSS = function() {
      var o = a.instance.toString();
      if (!o) return "";
      var n = R2(), c = Fe([n && 'nonce="'.concat(n, '"'), "".concat(g1, '="true"'), "".concat(De, '="').concat(Y1, '"')].filter(Boolean), " ");
      return "<style ".concat(c, ">").concat(o, "</style>");
    }, this.getStyleTags = function() {
      if (a.sealed) throw o1(2);
      return a._emitSheetCSS();
    }, this.getStyleElement = function() {
      var o;
      if (a.sealed) throw o1(2);
      var n = a.instance.toString();
      if (!n) return [];
      var c = ((o = {})[g1] = "", o[De] = Y1, o.dangerouslySetInnerHTML = { __html: n }, o), r = R2();
      return r && (c.nonce = r), [C.createElement("style", X({}, c, { key: "sc-0-0" }))];
    }, this.seal = function() {
      a.sealed = !0;
    }, this.instance = new de({ isServer: !0 }), this.sealed = !1;
  }
  return t.prototype.collectStyles = function(a) {
    if (this.sealed) throw o1(2);
    return C.createElement(L0, { sheet: this.instance }, a);
  }, t.prototype.interleaveWithNodeStream = function(a) {
    throw o1(3);
  }, t;
})();
process.env.NODE_ENV !== "production" && typeof navigator < "u" && navigator.product === "ReactNative" && console.warn(`It looks like you've imported 'styled-components' on React Native.
Perhaps you're looking to import 'styled-components/native'?
Read more about this at https://www.styled-components.com/docs/basics#react-native`);
var Ce = "__sc-".concat(g1, "__");
process.env.NODE_ENV !== "production" && process.env.NODE_ENV !== "test" && typeof window < "u" && (window[Ce] || (window[Ce] = 0), window[Ce] === 1 && console.warn(`It looks like there are several instances of 'styled-components' initialized in this application. This may cause dynamic styles to not render properly, errors during the rehydration process, a missing theme prop, and makes your application bigger without good reason.

See https://styled-components.com/docs/faqs#why-am-i-getting-a-warning-about-several-instances-of-module-on-the-page for more info.`), window[Ce] += 1);
function vo1({ children: t }) {
  const [a] = i0(() => new Fo());
  return Ra.useServerInsertedHTML(() => {
    const o = a.getStyleElement();
    return a.instance.clearTag(), /* @__PURE__ */ w.jsx(w.Fragment, { children: o });
  }), typeof window < "u" ? /* @__PURE__ */ w.jsx(w.Fragment, { children: t }) : /* @__PURE__ */ w.jsx(
    L0,
    {
      sheet: a.instance,
      enableVendorPrefixes: !0,
      children: t
    }
  );
}
const Bo = (t) => Io`
html,
body {
	margin: 0;
	padding: 0;
	min-height: 100%;
	scroll-behavior: smooth;
	background-color: ${t.colors.light};
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
	color: ${t.colors.dark};
}

a {
	color: ${t.isDark ? t.colors.dark : t.colors.primary};
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
  border-bottom: 1px solid ${t.colors.grayLight};
}
`;
function Uo({ ...t }) {
  const a = K2();
  return /* @__PURE__ */ w.jsx(
    "svg",
    {
      width: "12",
      height: "10",
      viewBox: "0 0 12 10",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      ...t,
      children: /* @__PURE__ */ w.jsx(
        "path",
        {
          d: "M10 2L4.4 8L2 5.75",
          stroke: a.colors.primary,
          strokeWidth: "3",
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      )
    }
  );
}
function Wo({ ...t }) {
  const a = K2();
  return /* @__PURE__ */ w.jsx(
    "svg",
    {
      width: "16",
      height: "10",
      viewBox: "0 0 16 10",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      ...t,
      children: /* @__PURE__ */ w.jsx(
        "path",
        {
          d: "M2 2L8 8L14 2",
          stroke: a.colors.primary,
          strokeWidth: "3",
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      )
    }
  );
}
function Zo({ ...t }) {
  const a = K2();
  return /* @__PURE__ */ w.jsxs(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      width: "24",
      height: "24",
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: a.colors.primary,
      strokeWidth: "2",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      ...t,
      children: [
        /* @__PURE__ */ w.jsx("path", { d: "M8 2v4" }),
        /* @__PURE__ */ w.jsx("path", { d: "M16 2v4" }),
        /* @__PURE__ */ w.jsx("rect", { width: "18", height: "18", x: "3", y: "4", rx: "2" }),
        /* @__PURE__ */ w.jsx("path", { d: "M3 10h18" }),
        /* @__PURE__ */ w.jsx("path", { d: "M8 14h.01" }),
        /* @__PURE__ */ w.jsx("path", { d: "M12 14h.01" }),
        /* @__PURE__ */ w.jsx("path", { d: "M16 14h.01" }),
        /* @__PURE__ */ w.jsx("path", { d: "M8 18h.01" }),
        /* @__PURE__ */ w.jsx("path", { d: "M12 18h.01" }),
        /* @__PURE__ */ w.jsx("path", { d: "M16 18h.01" })
      ]
    }
  );
}
const Q2 = {
  xs: 0,
  sm: 576,
  md: 768,
  lg: 992,
  xl: 1200,
  xxl: 1440,
  xxxl: 1920
};
function P(t) {
  return `@media screen and (min-width: ${Q2[t]}px)`;
}
const I0 = {
  maxWidth: { xs: "1280px", xxxl: "1440px" },
  padding: { xs: "20px", lg: "40px" },
  radius: { xs: "6px", lg: "12px", xl: "30px" },
  gridGap: { xs: "20px", lg: "40px" }
}, Go = {
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
}, Xo = {
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
}, Yo = {
  xs: "0px 4px 4px 0px rgba(18, 18, 18, 0.04), 0px 1px 3px 0px rgba(39, 41, 45, 0.02)",
  sm: "0px 4px 4px 0px rgba(18, 18, 18, 0.08), 0px 1px 3px 0px rgba(39, 41, 45, 0.04)",
  md: "0px 8px 8px 0px rgba(18, 18, 18, 0.16), 0px 2px 3px 0px rgba(39, 41, 45, 0.06)",
  lg: "0px 16px 24px 0px rgba(18, 18, 18, 0.20), 0px 2px 3px 0px rgba(39, 41, 45, 0.08)",
  xl: "0px 24px 32px 0px rgba(18, 18, 18, 0.24), 0px 2px 3px 0px rgba(39, 41, 45, 0.12)"
}, Ko = {
  xs: "0px 4px 4px 0px rgba(255, 255, 255, 0.04), 0px 1px 3px 0px rgba(255, 255, 255, 0.02)",
  sm: "0px 4px 4px 0px rgba(255, 255, 255, 0.08), 0px 1px 3px 0px rgba(255, 255, 255, 0.04)",
  md: "0px 8px 8px 0px rgba(255, 255, 255, 0.16), 0px 2px 3px 0px rgba(255, 255, 255, 0.06)",
  lg: "0px 16px 24px 0px rgba(255, 255, 255, 0.20), 0px 2px 3px 0px rgba(255, 255, 255, 0.08)",
  xl: "0px 24px 32px 0px rgba(255, 255, 255, 0.24), 0px 2px 3px 0px rgba(255, 255, 255, 0.12)"
}, F0 = {
  text: "Inter",
  head: "Inter",
  mono: "monospace"
}, B0 = {
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
}, U0 = {
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
}, pe = {
  breakpoints: Q2,
  spacing: I0,
  colors: Go,
  shadows: Yo,
  fonts: F0,
  fontSizes: B0,
  lineHeights: U0,
  isDark: !1
}, go1 = {
  breakpoints: Q2,
  spacing: I0,
  colors: Xo,
  shadows: Ko,
  fonts: F0,
  fontSizes: B0,
  lineHeights: U0,
  isDark: !0
}, v1 = V`
  box-sizing: border-box;
  appearance: none;
  border: none;
  background: none;
  padding: 0;
  margin: 0;
  cursor: pointer;
  outline: none;
`, J2 = V`
  cursor: text;
  min-width: 100px;
`, _1 = (t) => {
  if (t)
    return V`
      width: 100%;
    `;
}, F1 = (t, a, o) => {
  if (t)
    return V`
      border-color: ${o?.colors.error};
    `;
  if (a)
    return V`
      border-color: ${o?.colors.success};
    `;
}, et = (t) => t === "big" ? V`
      height: 60px;
    ` : V`
    height: 50px;
  `, a1 = (t, a) => V`
  ${P(t)} {
    gap: ${a === "none" ? "0" : `${a}px`};
  }
`, C1 = (t, a) => V`
  ${P(t)} {
    grid-template-columns: repeat(${a || 3}, minmax(0, 1fr));
  }
`, V1 = (t, a) => V`
  ${P(t)} {
    grid-column: span ${a};
  }
`, R1 = (t, a) => V`
  ${P(t)} {
    padding: ${a === "none" ? "0" : `${a}px`};
  }
`, E1 = (t, a) => V`
  ${P(t)} {
    justify-content: ${a && `${a}`};
  }
`, _o1 = (t) => V`
  font-size: ${t.fontSizes.hero1.xs};
  line-height: ${t.lineHeights.hero1.xs};

  ${P("lg")} {
    font-size: ${t.fontSizes.hero1.lg};
    line-height: ${t.lineHeights.hero1.lg};
  }
`, xo1 = (t) => V`
  font-size: ${t.fontSizes.hero2.xs};
  line-height: ${t.lineHeights.hero2.xs};

  ${P("lg")} {
    font-size: ${t.fontSizes.hero2.lg};
    line-height: ${t.lineHeights.hero2.lg};
  }
`, bo1 = (t) => V`
  font-size: ${t.fontSizes.hero3.xs};
  line-height: ${t.lineHeights.hero3.xs};

  ${P("lg")} {
    font-size: ${t.fontSizes.hero3.lg};
    line-height: ${t.lineHeights.hero3.lg};
  }
`, wo1 = (t) => V`
  font-size: ${t.fontSizes.h1.xs};
  line-height: ${t.lineHeights.h1.xs};

  ${P("lg")} {
    font-size: ${t.fontSizes.h1.lg};
    line-height: ${t.lineHeights.h1.lg};
  }
`, No1 = (t) => V`
  font-size: ${t.fontSizes.h2.xs};
  line-height: ${t.lineHeights.h2.xs};

  ${P("lg")} {
    font-size: ${t.fontSizes.h2.lg};
    line-height: ${t.lineHeights.h2.lg};
  }
`, $o1 = (t) => V`
  font-size: ${t.fontSizes.h3.xs};
  line-height: ${t.lineHeights.h3.xs};

  ${P("lg")} {
    font-size: ${t.fontSizes.h3.lg};
    line-height: ${t.lineHeights.h3.lg};
  }
`, zo1 = (t) => V`
  font-size: ${t.fontSizes.h4.xs};
  line-height: ${t.lineHeights.h4.xs};

  ${P("lg")} {
    font-size: ${t.fontSizes.h4.lg};
    line-height: ${t.lineHeights.h4.lg};
  }
`, jo1 = (t) => V`
  font-size: ${t.fontSizes.h5.xs};
  line-height: ${t.lineHeights.h5.xs};

  ${P("lg")} {
    font-size: ${t.fontSizes.h5.lg};
    line-height: ${t.lineHeights.h5.lg};
  }
`, qo1 = (t) => V`
  font-size: ${t.fontSizes.h6.xs};
  line-height: ${t.lineHeights.h6.xs};

  ${P("lg")} {
    font-size: ${t.fontSizes.h6.lg};
    line-height: ${t.lineHeights.h6.lg};
  }
`, Ao1 = (t) => V`
  font-size: ${t.fontSizes.text.xs};
  line-height: ${t.lineHeights.text.xs};

  ${P("lg")} {
    font-size: ${t.fontSizes.text.lg};
    line-height: ${t.lineHeights.text.lg};
  }
`, Ho1 = (t) => V`
  font-size: ${t.fontSizes.strong.xs};
  line-height: ${t.lineHeights.strong.xs};

  ${P("lg")} {
    font-size: ${t.fontSizes.strong.lg};
    line-height: ${t.lineHeights.strong.lg};
  }
`, So1 = (t) => V`
  font-size: ${t.fontSizes.small.xs};
  line-height: ${t.lineHeights.small.xs};

  ${P("lg")} {
    font-size: ${t.fontSizes.small.lg};
    line-height: ${t.lineHeights.small.lg};
  }
`, Co1 = (t) => V`
  font-size: ${t.fontSizes.blockquote.xs};
  line-height: ${t.lineHeights.blockquote.xs};

  ${P("lg")} {
    font-size: ${t.fontSizes.blockquote.lg};
    line-height: ${t.lineHeights.blockquote.lg};
  }
`, Vo1 = (t) => V`
  font-size: ${t.fontSizes.code.xs};
  line-height: ${t.lineHeights.code.xs};

  ${P("lg")} {
    font-size: ${t.fontSizes.code.lg};
    line-height: ${t.lineHeights.code.lg};
  }
`, Ro1 = (t) => V`
  font-size: ${t.fontSizes.button.xs};
  line-height: ${t.lineHeights.button.xs};

  ${P("lg")} {
    font-size: ${t.fontSizes.button.lg};
    line-height: ${t.lineHeights.button.lg};
  }
`, Eo1 = (t) => V`
  font-size: ${t.fontSizes.buttonBig.xs};
  line-height: ${t.lineHeights.buttonBig.xs};

  ${P("lg")} {
    font-size: ${t.fontSizes.buttonBig.lg};
    line-height: ${t.lineHeights.buttonBig.lg};
  }
`, Lo1 = (t) => V`
  font-size: ${t.fontSizes.input.xs};
  line-height: ${t.lineHeights.input.xs};

  ${P("lg")} {
    font-size: ${t.fontSizes.input.lg};
    line-height: ${t.lineHeights.input.lg};
  }
`, Po1 = (t) => V`
  font-size: ${t.fontSizes.inputBig.xs};
  line-height: ${t.lineHeights.inputBig.xs};

  ${P("lg")} {
    font-size: ${t.fontSizes.inputBig.lg};
    line-height: ${t.lineHeights.inputBig.lg};
  }
`, Qo = oa({
  setTheme: null
});
function To1({
  children: t,
  theme: a,
  themeDark: o
}) {
  const [n, c] = i0(a);
  na(() => {
    if (!o) return c(a);
    localStorage.theme === "dark" || !("theme" in localStorage) && window.matchMedia("(prefers-color-scheme: dark)").matches ? (document.documentElement.classList.add("dark"), c(o)) : (document.documentElement.classList.remove("dark"), c(a));
  }, []);
  const r = Bo(n);
  return /* @__PURE__ */ w.jsx(To, { theme: n, children: /* @__PURE__ */ w.jsxs(Qo.Provider, { value: { setTheme: c }, children: [
    /* @__PURE__ */ w.jsx(r, {}),
    t
  ] }) });
}
const Jo = W.div`
  margin: auto;
  width: 100%;
  max-width: ${({ theme: t, $fluid: a }) => a ? "100%" : t.spacing.maxWidth.xs};
  ${({ $textAlign: t }) => t && `text-align: ${t}`};
  padding: ${({ $padding: t, theme: a }) => t && `${t}px` || a.spacing.padding.xs};

  ${P("lg")} {
    padding: ${({ $padding: t, theme: a }) => t && `${t}px` || a.spacing.padding.lg};
  }

  ${P("xxxl")} {
    max-width: ${({ theme: t, $fluid: a }) => a ? "100%" : t.spacing.maxWidth.xxxl};
  }

  ${({ $xsPadding: t }) => t && R1("xs", t)}
  ${({ $smPadding: t }) => t && R1("sm", t)}
	${({ $mdPadding: t }) => t && R1("md", t)}
	${({ $lgPadding: t }) => t && R1("lg", t)}
	${({ $xlPadding: t }) => t && R1("xl", t)}
	${({ $xxlPadding: t }) => t && R1("xxl", t)}
	${({ $xxxlPadding: t }) => t && R1("xxxl", t)}
`;
function en({ theme: t = pe, ...a }, o) {
  return /* @__PURE__ */ w.jsx(Jo, { ...a, theme: t, ref: o, children: a.children });
}
const tn = J(en), an = W(tn)`
  background: ${({ theme: t }) => t.colors.light};
  border-radius: ${({ theme: t }) => t.spacing.radius.lg};
  border: solid 1px ${({ theme: t }) => t.colors.grayLight};
`;
function on({ theme: t = pe, ...a }, o) {
  return /* @__PURE__ */ w.jsx(an, { ...a, theme: t, ref: o, children: a.children });
}
const Oo1 = J(on);
function n1() {
  return n1 = Object.assign ? Object.assign.bind() : function(t) {
    for (var a = 1; a < arguments.length; a++) {
      var o = arguments[a];
      for (var n in o) ({}).hasOwnProperty.call(o, n) && (t[n] = o[n]);
    }
    return t;
  }, n1.apply(null, arguments);
}
function nn(t) {
  if (t === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return t;
}
function ie(t, a) {
  return ie = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(o, n) {
    return o.__proto__ = n, o;
  }, ie(t, a);
}
function cn(t, a) {
  t.prototype = Object.create(a.prototype), t.prototype.constructor = t, ie(t, a);
}
function T2(t) {
  return T2 = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(a) {
    return a.__proto__ || Object.getPrototypeOf(a);
  }, T2(t);
}
function rn(t) {
  try {
    return Function.toString.call(t).indexOf("[native code]") !== -1;
  } catch {
    return typeof t == "function";
  }
}
function W0() {
  try {
    var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch {
  }
  return (W0 = function() {
    return !!t;
  })();
}
function hn(t, a, o) {
  if (W0()) return Reflect.construct.apply(null, arguments);
  var n = [null];
  n.push.apply(n, a);
  var c = new (t.bind.apply(t, n))();
  return o && ie(c, o.prototype), c;
}
function O2(t) {
  var a = typeof Map == "function" ? /* @__PURE__ */ new Map() : void 0;
  return O2 = function(n) {
    if (n === null || !rn(n)) return n;
    if (typeof n != "function") throw new TypeError("Super expression must either be null or a function");
    if (a !== void 0) {
      if (a.has(n)) return a.get(n);
      a.set(n, c);
    }
    function c() {
      return hn(n, arguments, T2(this).constructor);
    }
    return c.prototype = Object.create(n.prototype, {
      constructor: {
        value: c,
        enumerable: !1,
        writable: !0,
        configurable: !0
      }
    }), ie(c, n);
  }, O2(t);
}
var dn = {
  1: `Passed invalid arguments to hsl, please pass multiple numbers e.g. hsl(360, 0.75, 0.4) or an object e.g. rgb({ hue: 255, saturation: 0.4, lightness: 0.75 }).

`,
  2: `Passed invalid arguments to hsla, please pass multiple numbers e.g. hsla(360, 0.75, 0.4, 0.7) or an object e.g. rgb({ hue: 255, saturation: 0.4, lightness: 0.75, alpha: 0.7 }).

`,
  3: `Passed an incorrect argument to a color function, please pass a string representation of a color.

`,
  4: `Couldn't generate valid rgb string from %s, it returned %s.

`,
  5: `Couldn't parse the color string. Please provide the color as a string in hex, rgb, rgba, hsl or hsla notation.

`,
  6: `Passed invalid arguments to rgb, please pass multiple numbers e.g. rgb(255, 205, 100) or an object e.g. rgb({ red: 255, green: 205, blue: 100 }).

`,
  7: `Passed invalid arguments to rgba, please pass multiple numbers e.g. rgb(255, 205, 100, 0.75) or an object e.g. rgb({ red: 255, green: 205, blue: 100, alpha: 0.75 }).

`,
  8: `Passed invalid argument to toColorString, please pass a RgbColor, RgbaColor, HslColor or HslaColor object.

`,
  9: `Please provide a number of steps to the modularScale helper.

`,
  10: `Please pass a number or one of the predefined scales to the modularScale helper as the ratio.

`,
  11: `Invalid value passed as base to modularScale, expected number or em string but got "%s"

`,
  12: `Expected a string ending in "px" or a number passed as the first argument to %s(), got "%s" instead.

`,
  13: `Expected a string ending in "px" or a number passed as the second argument to %s(), got "%s" instead.

`,
  14: `Passed invalid pixel value ("%s") to %s(), please pass a value like "12px" or 12.

`,
  15: `Passed invalid base value ("%s") to %s(), please pass a value like "12px" or 12.

`,
  16: `You must provide a template to this method.

`,
  17: `You passed an unsupported selector state to this method.

`,
  18: `minScreen and maxScreen must be provided as stringified numbers with the same units.

`,
  19: `fromSize and toSize must be provided as stringified numbers with the same units.

`,
  20: `expects either an array of objects or a single object with the properties prop, fromSize, and toSize.

`,
  21: "expects the objects in the first argument array to have the properties `prop`, `fromSize`, and `toSize`.\n\n",
  22: "expects the first argument object to have the properties `prop`, `fromSize`, and `toSize`.\n\n",
  23: `fontFace expects a name of a font-family.

`,
  24: `fontFace expects either the path to the font file(s) or a name of a local copy.

`,
  25: `fontFace expects localFonts to be an array.

`,
  26: `fontFace expects fileFormats to be an array.

`,
  27: `radialGradient requries at least 2 color-stops to properly render.

`,
  28: `Please supply a filename to retinaImage() as the first argument.

`,
  29: `Passed invalid argument to triangle, please pass correct pointingDirection e.g. 'right'.

`,
  30: "Passed an invalid value to `height` or `width`. Please provide a pixel based unit.\n\n",
  31: `The animation shorthand only takes 8 arguments. See the specification for more information: http://mdn.io/animation

`,
  32: `To pass multiple animations please supply them in arrays, e.g. animation(['rotate', '2s'], ['move', '1s'])
To pass a single animation please supply them in simple values, e.g. animation('rotate', '2s')

`,
  33: `The animation shorthand arrays can only have 8 elements. See the specification for more information: http://mdn.io/animation

`,
  34: `borderRadius expects a radius value as a string or number as the second argument.

`,
  35: `borderRadius expects one of "top", "bottom", "left" or "right" as the first argument.

`,
  36: `Property must be a string value.

`,
  37: `Syntax Error at %s.

`,
  38: `Formula contains a function that needs parentheses at %s.

`,
  39: `Formula is missing closing parenthesis at %s.

`,
  40: `Formula has too many closing parentheses at %s.

`,
  41: `All values in a formula must have the same unit or be unitless.

`,
  42: `Please provide a number of steps to the modularScale helper.

`,
  43: `Please pass a number or one of the predefined scales to the modularScale helper as the ratio.

`,
  44: `Invalid value passed as base to modularScale, expected number or em/rem string but got %s.

`,
  45: `Passed invalid argument to hslToColorString, please pass a HslColor or HslaColor object.

`,
  46: `Passed invalid argument to rgbToColorString, please pass a RgbColor or RgbaColor object.

`,
  47: `minScreen and maxScreen must be provided as stringified numbers with the same units.

`,
  48: `fromSize and toSize must be provided as stringified numbers with the same units.

`,
  49: `Expects either an array of objects or a single object with the properties prop, fromSize, and toSize.

`,
  50: `Expects the objects in the first argument array to have the properties prop, fromSize, and toSize.

`,
  51: `Expects the first argument object to have the properties prop, fromSize, and toSize.

`,
  52: `fontFace expects either the path to the font file(s) or a name of a local copy.

`,
  53: `fontFace expects localFonts to be an array.

`,
  54: `fontFace expects fileFormats to be an array.

`,
  55: `fontFace expects a name of a font-family.

`,
  56: `linearGradient requries at least 2 color-stops to properly render.

`,
  57: `radialGradient requries at least 2 color-stops to properly render.

`,
  58: `Please supply a filename to retinaImage() as the first argument.

`,
  59: `Passed invalid argument to triangle, please pass correct pointingDirection e.g. 'right'.

`,
  60: "Passed an invalid value to `height` or `width`. Please provide a pixel based unit.\n\n",
  61: `Property must be a string value.

`,
  62: `borderRadius expects a radius value as a string or number as the second argument.

`,
  63: `borderRadius expects one of "top", "bottom", "left" or "right" as the first argument.

`,
  64: `The animation shorthand only takes 8 arguments. See the specification for more information: http://mdn.io/animation.

`,
  65: `To pass multiple animations please supply them in arrays, e.g. animation(['rotate', '2s'], ['move', '1s'])\\nTo pass a single animation please supply them in simple values, e.g. animation('rotate', '2s').

`,
  66: `The animation shorthand arrays can only have 8 elements. See the specification for more information: http://mdn.io/animation.

`,
  67: `You must provide a template to this method.

`,
  68: `You passed an unsupported selector state to this method.

`,
  69: `Expected a string ending in "px" or a number passed as the first argument to %s(), got %s instead.

`,
  70: `Expected a string ending in "px" or a number passed as the second argument to %s(), got %s instead.

`,
  71: `Passed invalid pixel value %s to %s(), please pass a value like "12px" or 12.

`,
  72: `Passed invalid base value %s to %s(), please pass a value like "12px" or 12.

`,
  73: `Please provide a valid CSS variable.

`,
  74: `CSS variable not found and no default was provided.

`,
  75: `important requires a valid style object, got a %s instead.

`,
  76: `fromSize and toSize must be provided as stringified numbers with the same units as minScreen and maxScreen.

`,
  77: `remToPx expects a value in "rem" but you provided it in "%s".

`,
  78: `base must be set in "px" or "%" but you set it in "%s".
`
};
function sn() {
  for (var t = arguments.length, a = new Array(t), o = 0; o < t; o++)
    a[o] = arguments[o];
  var n = a[0], c = [], r;
  for (r = 1; r < a.length; r += 1)
    c.push(a[r]);
  return c.forEach(function(h) {
    n = n.replace(/%[a-z]/, h);
  }), n;
}
var M1 = /* @__PURE__ */ (function(t) {
  cn(a, t);
  function a(o) {
    var n;
    if (process.env.NODE_ENV === "production")
      n = t.call(this, "An error occurred. See https://github.com/styled-components/polished/blob/main/src/internalHelpers/errors.md#" + o + " for more information.") || this;
    else {
      for (var c = arguments.length, r = new Array(c > 1 ? c - 1 : 0), h = 1; h < c; h++)
        r[h - 1] = arguments[h];
      n = t.call(this, sn.apply(void 0, [dn[o]].concat(r))) || this;
    }
    return nn(n);
  }
  return a;
})(/* @__PURE__ */ O2(Error));
function N2(t) {
  return Math.round(t * 255);
}
function yn(t, a, o) {
  return N2(t) + "," + N2(a) + "," + N2(o);
}
function We(t, a, o, n) {
  if (n === void 0 && (n = yn), a === 0)
    return n(o, o, o);
  var c = (t % 360 + 360) % 360 / 60, r = (1 - Math.abs(2 * o - 1)) * a, h = r * (1 - Math.abs(c % 2 - 1)), d = 0, i = 0, s = 0;
  c >= 0 && c < 1 ? (d = r, i = h) : c >= 1 && c < 2 ? (d = h, i = r) : c >= 2 && c < 3 ? (i = r, s = h) : c >= 3 && c < 4 ? (i = h, s = r) : c >= 4 && c < 5 ? (d = h, s = r) : c >= 5 && c < 6 && (d = r, s = h);
  var l = o - r / 2, y = d + l, M = i + l, g = s + l;
  return n(y, M, g);
}
var r0 = {
  aliceblue: "f0f8ff",
  antiquewhite: "faebd7",
  aqua: "00ffff",
  aquamarine: "7fffd4",
  azure: "f0ffff",
  beige: "f5f5dc",
  bisque: "ffe4c4",
  black: "000",
  blanchedalmond: "ffebcd",
  blue: "0000ff",
  blueviolet: "8a2be2",
  brown: "a52a2a",
  burlywood: "deb887",
  cadetblue: "5f9ea0",
  chartreuse: "7fff00",
  chocolate: "d2691e",
  coral: "ff7f50",
  cornflowerblue: "6495ed",
  cornsilk: "fff8dc",
  crimson: "dc143c",
  cyan: "00ffff",
  darkblue: "00008b",
  darkcyan: "008b8b",
  darkgoldenrod: "b8860b",
  darkgray: "a9a9a9",
  darkgreen: "006400",
  darkgrey: "a9a9a9",
  darkkhaki: "bdb76b",
  darkmagenta: "8b008b",
  darkolivegreen: "556b2f",
  darkorange: "ff8c00",
  darkorchid: "9932cc",
  darkred: "8b0000",
  darksalmon: "e9967a",
  darkseagreen: "8fbc8f",
  darkslateblue: "483d8b",
  darkslategray: "2f4f4f",
  darkslategrey: "2f4f4f",
  darkturquoise: "00ced1",
  darkviolet: "9400d3",
  deeppink: "ff1493",
  deepskyblue: "00bfff",
  dimgray: "696969",
  dimgrey: "696969",
  dodgerblue: "1e90ff",
  firebrick: "b22222",
  floralwhite: "fffaf0",
  forestgreen: "228b22",
  fuchsia: "ff00ff",
  gainsboro: "dcdcdc",
  ghostwhite: "f8f8ff",
  gold: "ffd700",
  goldenrod: "daa520",
  gray: "808080",
  green: "008000",
  greenyellow: "adff2f",
  grey: "808080",
  honeydew: "f0fff0",
  hotpink: "ff69b4",
  indianred: "cd5c5c",
  indigo: "4b0082",
  ivory: "fffff0",
  khaki: "f0e68c",
  lavender: "e6e6fa",
  lavenderblush: "fff0f5",
  lawngreen: "7cfc00",
  lemonchiffon: "fffacd",
  lightblue: "add8e6",
  lightcoral: "f08080",
  lightcyan: "e0ffff",
  lightgoldenrodyellow: "fafad2",
  lightgray: "d3d3d3",
  lightgreen: "90ee90",
  lightgrey: "d3d3d3",
  lightpink: "ffb6c1",
  lightsalmon: "ffa07a",
  lightseagreen: "20b2aa",
  lightskyblue: "87cefa",
  lightslategray: "789",
  lightslategrey: "789",
  lightsteelblue: "b0c4de",
  lightyellow: "ffffe0",
  lime: "0f0",
  limegreen: "32cd32",
  linen: "faf0e6",
  magenta: "f0f",
  maroon: "800000",
  mediumaquamarine: "66cdaa",
  mediumblue: "0000cd",
  mediumorchid: "ba55d3",
  mediumpurple: "9370db",
  mediumseagreen: "3cb371",
  mediumslateblue: "7b68ee",
  mediumspringgreen: "00fa9a",
  mediumturquoise: "48d1cc",
  mediumvioletred: "c71585",
  midnightblue: "191970",
  mintcream: "f5fffa",
  mistyrose: "ffe4e1",
  moccasin: "ffe4b5",
  navajowhite: "ffdead",
  navy: "000080",
  oldlace: "fdf5e6",
  olive: "808000",
  olivedrab: "6b8e23",
  orange: "ffa500",
  orangered: "ff4500",
  orchid: "da70d6",
  palegoldenrod: "eee8aa",
  palegreen: "98fb98",
  paleturquoise: "afeeee",
  palevioletred: "db7093",
  papayawhip: "ffefd5",
  peachpuff: "ffdab9",
  peru: "cd853f",
  pink: "ffc0cb",
  plum: "dda0dd",
  powderblue: "b0e0e6",
  purple: "800080",
  rebeccapurple: "639",
  red: "f00",
  rosybrown: "bc8f8f",
  royalblue: "4169e1",
  saddlebrown: "8b4513",
  salmon: "fa8072",
  sandybrown: "f4a460",
  seagreen: "2e8b57",
  seashell: "fff5ee",
  sienna: "a0522d",
  silver: "c0c0c0",
  skyblue: "87ceeb",
  slateblue: "6a5acd",
  slategray: "708090",
  slategrey: "708090",
  snow: "fffafa",
  springgreen: "00ff7f",
  steelblue: "4682b4",
  tan: "d2b48c",
  teal: "008080",
  thistle: "d8bfd8",
  tomato: "ff6347",
  turquoise: "40e0d0",
  violet: "ee82ee",
  wheat: "f5deb3",
  white: "fff",
  whitesmoke: "f5f5f5",
  yellow: "ff0",
  yellowgreen: "9acd32"
};
function pn(t) {
  if (typeof t != "string") return t;
  var a = t.toLowerCase();
  return r0[a] ? "#" + r0[a] : t;
}
var kn = /^#[a-fA-F0-9]{6}$/, ln = /^#[a-fA-F0-9]{8}$/, un = /^#[a-fA-F0-9]{3}$/, Mn = /^#[a-fA-F0-9]{4}$/, $2 = /^rgb\(\s*(\d{1,3})\s*(?:,)?\s*(\d{1,3})\s*(?:,)?\s*(\d{1,3})\s*\)$/i, fn = /^rgb(?:a)?\(\s*(\d{1,3})\s*(?:,)?\s*(\d{1,3})\s*(?:,)?\s*(\d{1,3})\s*(?:,|\/)\s*([-+]?\d*[.]?\d+[%]?)\s*\)$/i, mn = /^hsl\(\s*(\d{0,3}[.]?[0-9]+(?:deg)?)\s*(?:,)?\s*(\d{1,3}[.]?[0-9]?)%\s*(?:,)?\s*(\d{1,3}[.]?[0-9]?)%\s*\)$/i, vn = /^hsl(?:a)?\(\s*(\d{0,3}[.]?[0-9]+(?:deg)?)\s*(?:,)?\s*(\d{1,3}[.]?[0-9]?)%\s*(?:,)?\s*(\d{1,3}[.]?[0-9]?)%\s*(?:,|\/)\s*([-+]?\d*[.]?\d+[%]?)\s*\)$/i;
function se(t) {
  if (typeof t != "string")
    throw new M1(3);
  var a = pn(t);
  if (a.match(kn))
    return {
      red: parseInt("" + a[1] + a[2], 16),
      green: parseInt("" + a[3] + a[4], 16),
      blue: parseInt("" + a[5] + a[6], 16)
    };
  if (a.match(ln)) {
    var o = parseFloat((parseInt("" + a[7] + a[8], 16) / 255).toFixed(2));
    return {
      red: parseInt("" + a[1] + a[2], 16),
      green: parseInt("" + a[3] + a[4], 16),
      blue: parseInt("" + a[5] + a[6], 16),
      alpha: o
    };
  }
  if (a.match(un))
    return {
      red: parseInt("" + a[1] + a[1], 16),
      green: parseInt("" + a[2] + a[2], 16),
      blue: parseInt("" + a[3] + a[3], 16)
    };
  if (a.match(Mn)) {
    var n = parseFloat((parseInt("" + a[4] + a[4], 16) / 255).toFixed(2));
    return {
      red: parseInt("" + a[1] + a[1], 16),
      green: parseInt("" + a[2] + a[2], 16),
      blue: parseInt("" + a[3] + a[3], 16),
      alpha: n
    };
  }
  var c = $2.exec(a);
  if (c)
    return {
      red: parseInt("" + c[1], 10),
      green: parseInt("" + c[2], 10),
      blue: parseInt("" + c[3], 10)
    };
  var r = fn.exec(a.substring(0, 50));
  if (r)
    return {
      red: parseInt("" + r[1], 10),
      green: parseInt("" + r[2], 10),
      blue: parseInt("" + r[3], 10),
      alpha: parseFloat("" + r[4]) > 1 ? parseFloat("" + r[4]) / 100 : parseFloat("" + r[4])
    };
  var h = mn.exec(a);
  if (h) {
    var d = parseInt("" + h[1], 10), i = parseInt("" + h[2], 10) / 100, s = parseInt("" + h[3], 10) / 100, l = "rgb(" + We(d, i, s) + ")", y = $2.exec(l);
    if (!y)
      throw new M1(4, a, l);
    return {
      red: parseInt("" + y[1], 10),
      green: parseInt("" + y[2], 10),
      blue: parseInt("" + y[3], 10)
    };
  }
  var M = vn.exec(a.substring(0, 50));
  if (M) {
    var g = parseInt("" + M[1], 10), N = parseInt("" + M[2], 10) / 100, m = parseInt("" + M[3], 10) / 100, $ = "rgb(" + We(g, N, m) + ")", j = $2.exec($);
    if (!j)
      throw new M1(4, a, $);
    return {
      red: parseInt("" + j[1], 10),
      green: parseInt("" + j[2], 10),
      blue: parseInt("" + j[3], 10),
      alpha: parseFloat("" + M[4]) > 1 ? parseFloat("" + M[4]) / 100 : parseFloat("" + M[4])
    };
  }
  throw new M1(5);
}
function gn(t) {
  var a = t.red / 255, o = t.green / 255, n = t.blue / 255, c = Math.max(a, o, n), r = Math.min(a, o, n), h = (c + r) / 2;
  if (c === r)
    return t.alpha !== void 0 ? {
      hue: 0,
      saturation: 0,
      lightness: h,
      alpha: t.alpha
    } : {
      hue: 0,
      saturation: 0,
      lightness: h
    };
  var d, i = c - r, s = h > 0.5 ? i / (2 - c - r) : i / (c + r);
  switch (c) {
    case a:
      d = (o - n) / i + (o < n ? 6 : 0);
      break;
    case o:
      d = (n - a) / i + 2;
      break;
    default:
      d = (a - o) / i + 4;
      break;
  }
  return d *= 60, t.alpha !== void 0 ? {
    hue: d,
    saturation: s,
    lightness: h,
    alpha: t.alpha
  } : {
    hue: d,
    saturation: s,
    lightness: h
  };
}
function q1(t) {
  return gn(se(t));
}
var _n = function(a) {
  return a.length === 7 && a[1] === a[2] && a[3] === a[4] && a[5] === a[6] ? "#" + a[1] + a[3] + a[5] : a;
}, D2 = _n;
function L1(t) {
  var a = t.toString(16);
  return a.length === 1 ? "0" + a : a;
}
function z2(t) {
  return L1(Math.round(t * 255));
}
function xn(t, a, o) {
  return D2("#" + z2(t) + z2(a) + z2(o));
}
function Z0(t, a, o) {
  return We(t, a, o, xn);
}
function bn(t, a, o) {
  if (typeof t == "object" && a === void 0 && o === void 0)
    return Z0(t.hue, t.saturation, t.lightness);
  throw new M1(1);
}
function wn(t, a, o, n) {
  if (typeof t == "object" && a === void 0 && o === void 0 && n === void 0)
    return t.alpha >= 1 ? Z0(t.hue, t.saturation, t.lightness) : "rgba(" + We(t.hue, t.saturation, t.lightness) + "," + t.alpha + ")";
  throw new M1(2);
}
function G0(t, a, o) {
  if (typeof t == "number" && typeof a == "number" && typeof o == "number")
    return D2("#" + L1(t) + L1(a) + L1(o));
  if (typeof t == "object" && a === void 0 && o === void 0)
    return D2("#" + L1(t.red) + L1(t.green) + L1(t.blue));
  throw new M1(6);
}
function Je(t, a, o, n) {
  if (typeof t == "object" && a === void 0 && o === void 0 && n === void 0)
    return t.alpha >= 1 ? G0(t.red, t.green, t.blue) : "rgba(" + t.red + "," + t.green + "," + t.blue + "," + t.alpha + ")";
  throw new M1(7);
}
var Nn = function(a) {
  return typeof a.red == "number" && typeof a.green == "number" && typeof a.blue == "number" && (typeof a.alpha != "number" || typeof a.alpha > "u");
}, $n = function(a) {
  return typeof a.red == "number" && typeof a.green == "number" && typeof a.blue == "number" && typeof a.alpha == "number";
}, zn = function(a) {
  return typeof a.hue == "number" && typeof a.saturation == "number" && typeof a.lightness == "number" && (typeof a.alpha != "number" || typeof a.alpha > "u");
}, jn = function(a) {
  return typeof a.hue == "number" && typeof a.saturation == "number" && typeof a.lightness == "number" && typeof a.alpha == "number";
};
function A1(t) {
  if (typeof t != "object") throw new M1(8);
  if ($n(t)) return Je(t);
  if (Nn(t)) return G0(t);
  if (jn(t)) return wn(t);
  if (zn(t)) return bn(t);
  throw new M1(8);
}
function X0(t, a, o) {
  return function() {
    var c = o.concat(Array.prototype.slice.call(arguments));
    return c.length >= a ? t.apply(this, c) : X0(t, a, c);
  };
}
function r1(t) {
  return X0(t, t.length, []);
}
function qn(t, a) {
  if (a === "transparent") return a;
  var o = q1(a);
  return A1(n1({}, o, {
    hue: o.hue + parseFloat(t)
  }));
}
r1(qn);
function ae(t, a, o) {
  return Math.max(t, Math.min(a, o));
}
function An(t, a) {
  if (a === "transparent") return a;
  var o = q1(a);
  return A1(n1({}, o, {
    lightness: ae(0, 1, o.lightness - parseFloat(t))
  }));
}
var Hn = r1(An), j2 = Hn;
function Sn(t, a) {
  if (a === "transparent") return a;
  var o = q1(a);
  return A1(n1({}, o, {
    saturation: ae(0, 1, o.saturation - parseFloat(t))
  }));
}
r1(Sn);
function Cn(t, a) {
  if (a === "transparent") return a;
  var o = q1(a);
  return A1(n1({}, o, {
    lightness: ae(0, 1, o.lightness + parseFloat(t))
  }));
}
var Vn = r1(Cn), h0 = Vn;
function Rn(t, a, o) {
  if (a === "transparent") return o;
  if (o === "transparent") return a;
  if (t === 0) return o;
  var n = se(a), c = n1({}, n, {
    alpha: typeof n.alpha == "number" ? n.alpha : 1
  }), r = se(o), h = n1({}, r, {
    alpha: typeof r.alpha == "number" ? r.alpha : 1
  }), d = c.alpha - h.alpha, i = parseFloat(t) * 2 - 1, s = i * d === -1 ? i : i + d, l = 1 + i * d, y = (s / l + 1) / 2, M = 1 - y, g = {
    red: Math.floor(c.red * y + h.red * M),
    green: Math.floor(c.green * y + h.green * M),
    blue: Math.floor(c.blue * y + h.blue * M),
    alpha: c.alpha * parseFloat(t) + h.alpha * (1 - parseFloat(t))
  };
  return Je(g);
}
var En = r1(Rn), Y0 = En;
function Ln(t, a) {
  if (a === "transparent") return a;
  var o = se(a), n = typeof o.alpha == "number" ? o.alpha : 1, c = n1({}, o, {
    alpha: ae(0, 1, (n * 100 + parseFloat(t) * 100) / 100)
  });
  return Je(c);
}
r1(Ln);
function Pn(t, a) {
  if (a === "transparent") return a;
  var o = q1(a);
  return A1(n1({}, o, {
    saturation: ae(0, 1, o.saturation + parseFloat(t))
  }));
}
r1(Pn);
function Tn(t, a) {
  return a === "transparent" ? a : A1(n1({}, q1(a), {
    hue: parseFloat(t)
  }));
}
r1(Tn);
function On(t, a) {
  return a === "transparent" ? a : A1(n1({}, q1(a), {
    lightness: parseFloat(t)
  }));
}
r1(On);
function Dn(t, a) {
  return a === "transparent" ? a : A1(n1({}, q1(a), {
    saturation: parseFloat(t)
  }));
}
r1(Dn);
function In(t, a) {
  return a === "transparent" ? a : Y0(parseFloat(t), "rgb(0, 0, 0)", a);
}
r1(In);
function Fn(t, a) {
  return a === "transparent" ? a : Y0(parseFloat(t), "rgb(255, 255, 255)", a);
}
r1(Fn);
function Bn(t, a) {
  if (a === "transparent") return a;
  var o = se(a), n = typeof o.alpha == "number" ? o.alpha : 1, c = n1({}, o, {
    alpha: ae(0, 1, +(n * 100 - parseFloat(t) * 100).toFixed(2) / 100)
  });
  return Je(c);
}
r1(Bn);
const Un = (t, a, o, n, c, r, h) => V`
  ${v1};
  font-family: inherit;
  display: inline-flex;
  padding: 15px 30px;
  border-radius: 100px;
  font-weight: 600;
  white-space: nowrap;
  hyphens: auto;
  color: ${t.isDark ? t.colors.dark : t.colors.light};
  text-decoration: none;
  transition: all 0.3s ease;
  text-align: center;
  gap: 10px;
  text-overflow: ellipsis;
  justify-content: center;

  & .icon,
  & .lucide {
    margin: auto 0;
  }

  ${!h && a === "primary" && V`
    color: ${n ? t.colors.primary : t.colors.light};
    background: ${n ? "transparent" : t.colors.primary};
    border: solid 2px ${t.colors.primary};
    box-shadow: 0 0 0 0px ${t.colors.primary};

    @media (hover: hover) {
      &:hover {
        background: ${n ? "transparent" : t.colors.primaryDark};
        border-color: ${t.colors.primaryDark};
        ${n && `color: ${t.colors.primaryDark}`};
      }
    }

    &:focus {
      box-shadow: 0 0 0 4px ${t.colors.primaryLight};
    }

    &:active {
      box-shadow: 0 0 0 2px ${t.colors.primaryLight};
    }
  `}

  ${!h && a === "secondary" && V`
    color: ${n ? t.colors.secondary : t.colors.light};
    background: ${n ? "transparent" : t.colors.secondary};
    border: solid 2px ${t.colors.secondary};
    box-shadow: 0 0 0 0px ${t.colors.secondary};

    @media (hover: hover) {
      &:hover {
        background: ${n ? "transparent" : t.colors.secondaryDark};
        border-color: ${t.colors.secondaryDark};
        ${n && `color: ${t.colors.secondaryDark}`};
      }
    }

    &:focus {
      box-shadow: 0 0 0 4px ${t.colors.secondaryLight};
    }

    &:active {
      box-shadow: 0 0 0 2px ${t.colors.secondaryLight};
    }
  `}

	${!h && a === "tertiary" && V`
    color: ${n ? t.colors.tertiary : t.colors.light};
    background: ${n ? "transparent" : t.colors.tertiary};
    border: solid 2px ${t.colors.tertiary};
    box-shadow: 0 0 0 0px ${t.colors.tertiary};

    @media (hover: hover) {
      &:hover {
        background: ${n ? "transparent" : t.colors.tertiaryDark};
        border-color: ${t.colors.tertiaryDark};
        ${n && `color: ${t.colors.tertiaryDark}`};
      }
    }

    &:focus {
      box-shadow: 0 0 0 4px ${t.colors.tertiaryLight};
    }

    &:active {
      box-shadow: 0 0 0 2px ${t.colors.tertiaryLight};
    }
  `}

  ${!h && r && V`
    color: ${n ? t.colors.error : t.colors.light};
    background: ${n ? "transparent" : t.colors.error};
    border: solid 2px ${t.colors.error};
    box-shadow: 0 0 0 0px ${t.colors.error};

    @media (hover: hover) {
      &:hover {
        background: ${n ? "transparent" : j2(0.1, t.colors.error)};
        border-color: ${j2(0.1, t.colors.error)};
        ${n && `color: ${j2(0.1, t.colors.error)}`};
      }
    }

    &:focus {
      box-shadow: 0 0 0 4px ${h0(0.1, t.colors.error)};
    }

    &:active {
      box-shadow: 0 0 0 2px ${h0(0.1, t.colors.error)};
    }
  `}


	${et(o)}

	${o === "big" ? `font-size: ${t.fontSizes.buttonBig.lg};
			line-height: ${t.lineHeights.buttonBig.lg};
      padding: 18px 30px;
	` : `font-size: ${t.fontSizes.button.lg};
			line-height: ${t.lineHeights.button.lg};`}

	${h && `
		cursor: not-allowed;
		background: ${t.colors.grayLight};
    border: solid 2px ${t.colors.grayLight};
		color: ${t.colors.gray};
	`}

	${c && "width: 100%;"}
`, Wn = W.button`
  ${({ theme: t, $variant: a, $isError: o, $size: n, $outline: c, $fullWidth: r, disabled: h }) => Un(
  t,
  a,
  n,
  c,
  r,
  o,
  h
)}
`;
function Zn({ $variant: t = "primary", ...a }, o) {
  return /* @__PURE__ */ w.jsxs(
    Wn,
    {
      $variant: t,
      $isError: a.$isError,
      ...a,
      ref: o,
      children: [
        a.$iconPosition !== "right" && a.$icon && a.$icon,
        a.children,
        a.$iconPosition === "right" && a.$icon && a.$icon
      ]
    }
  );
}
const Do1 = J(Zn), Gn = W.div`
  ${({ $span: t }) => t && `
		grid-column: span ${t};
	`}

  ${({ $xsSpan: t }) => t && V1("xs", t)}
	${({ $smSpan: t }) => t && V1("sm", t)}
	${({ $mdSpan: t }) => t && V1("md", t)}
	${({ $lgSpan: t }) => t && V1("lg", t)}
	${({ $xlSpan: t }) => t && V1("xl", t)}
	${({ $xxlSpan: t }) => t && V1("xxl", t)}
	${({ $xxxlSpan: t }) => t && V1("xxxl", t)}
`;
function Xn({ theme: t = pe, ...a }, o) {
  return /* @__PURE__ */ w.jsx(Gn, { ...a, theme: t, ref: o, children: a.children });
}
const Io1 = J(Xn), Yn = W.div`
  display: flex;
  justify-content: ${({ $justifyContent: t }) => t || "flex-start"};
  flex-wrap: ${({ $wrap: t }) => t || "wrap"};
  gap: ${({ $gap: t, theme: a }) => t && `${t}px` || a.spacing.gridGap.xs};
  flex-direction: ${({ $direction: t }) => t || "row"};

  ${P("lg")} {
    gap: ${({ $gap: t, theme: a }) => t && `${t}px` || a.spacing.gridGap.lg};
  }

  ${({ $xsGap: t }) => t && a1("xs", t)}
  ${({ $xsJustifyContent: t }) => t && E1("xs", t)}
	${({ $smGap: t }) => t && a1("sm", t)}
	${({ $smJustifyContent: t }) => t && E1("sm", t)}
	${({ $mdGap: t }) => t && a1("md", t)}
	${({ $mdJustifyContent: t }) => t && E1("md", t)}
	${({ $lgGap: t }) => t && a1("lg", t)}
	${({ $lgJustifyContent: t }) => t && E1("lg", t)}
	${({ $xlGap: t }) => t && a1("xl", t)}
	${({ $xlJustifyContent: t }) => t && E1("xl", t)}
	${({ $xxlGap: t }) => t && a1("xxl", t)}
	${({ $xxlJustifyContent: t }) => t && E1("xxl", t)}
	${({ $xxxlGap: t }) => t && a1("xxxl", t)}
	${({ $xxxlJustifyContent: t }) => t && E1("xxxl", t)}
  ${({ $fullWidth: t }) => _1(!!t)}
`;
function Kn({ theme: t = pe, ...a }, o) {
  return /* @__PURE__ */ w.jsx(Yn, { ...a, theme: t, ref: o, children: a.children });
}
const Fo1 = J(Kn), Qn = W.div`
  width: 100%;
  display: grid;
  grid-template-columns: ${({ $cols: t }) => `repeat(${t || 3}, minmax(0, 1fr))`};
  gap: ${({ $gap: t, theme: a }) => t && `${t}px` || a.spacing.gridGap.xs};

  ${P("lg")} {
    gap: ${({ $gap: t, theme: a }) => t && `${t}px` || a.spacing.gridGap.lg};
  }

  ${({ $xsGap: t }) => t && a1("xs", t)}
  ${({ $smGap: t }) => t && a1("sm", t)}
	${({ $mdGap: t }) => t && a1("md", t)}
	${({ $lgGap: t }) => t && a1("lg", t)}
	${({ $xlGap: t }) => t && a1("xl", t)}
	${({ $xxlGap: t }) => t && a1("xxl", t)}
	${({ $xxxlGap: t }) => t && a1("xxxl", t)}

	${({ $xsCols: t }) => t && C1("xs", t)}
	${({ $smCols: t }) => t && C1("sm", t)}
	${({ $mdCols: t }) => t && C1("md", t)}
	${({ $lgCols: t }) => t && C1("lg", t)}
	${({ $xlCols: t }) => t && C1("xl", t)}
	${({ $xxlCols: t }) => t && C1("xxl", t)}
	${({ $xxxlCols: t }) => t && C1("xxxl", t)}
`;
function Jn({ theme: t = pe, ...a }, o) {
  return /* @__PURE__ */ w.jsx(Qn, { ...a, theme: t, ref: o, children: a.children });
}
const Bo1 = J(Jn);
const K0 = (...t) => t.filter((a, o, n) => !!a && a.trim() !== "" && n.indexOf(a) === o).join(" ").trim();
const ec = (t) => t.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase();
const tc = (t) => t.replace(
  /^([A-Z])|[\s-_]+(\w)/g,
  (a, o, n) => n ? n.toUpperCase() : o.toLowerCase()
);
const d0 = (t) => {
  const a = tc(t);
  return a.charAt(0).toUpperCase() + a.slice(1);
};
var ac = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round"
};
const oc = (t) => {
  for (const a in t)
    if (a.startsWith("aria-") || a === "role" || a === "title")
      return !0;
  return !1;
};
const nc = J(
  ({
    color: t = "currentColor",
    size: a = 24,
    strokeWidth: o = 2,
    absoluteStrokeWidth: n,
    className: c = "",
    children: r,
    iconNode: h,
    ...d
  }, i) => Te(
    "svg",
    {
      ref: i,
      ...ac,
      width: a,
      height: a,
      stroke: t,
      strokeWidth: n ? Number(o) * 24 / Number(a) : o,
      className: K0("lucide", c),
      ...!r && !oc(d) && { "aria-hidden": "true" },
      ...d
    },
    [
      ...h.map(([s, l]) => Te(s, l)),
      ...Array.isArray(r) ? r : [r]
    ]
  )
);
const e = (t, a) => {
  const o = J(
    ({ className: n, ...c }, r) => Te(nc, {
      ref: r,
      iconNode: a,
      className: K0(
        `lucide-${ec(d0(t))}`,
        `lucide-${t}`,
        n
      ),
      ...c
    })
  );
  return o.displayName = d0(t), o;
};
const cc = [
  ["path", { d: "m14 12 4 4 4-4", key: "buelq4" }],
  ["path", { d: "M18 16V7", key: "ty0viw" }],
  ["path", { d: "m2 16 4.039-9.69a.5.5 0 0 1 .923 0L11 16", key: "d5nyq2" }],
  ["path", { d: "M3.304 13h6.392", key: "1q3zxz" }]
], rc = e("a-arrow-down", cc);
const hc = [
  ["path", { d: "m14 11 4-4 4 4", key: "1pu57t" }],
  ["path", { d: "M18 16V7", key: "ty0viw" }],
  ["path", { d: "m2 16 4.039-9.69a.5.5 0 0 1 .923 0L11 16", key: "d5nyq2" }],
  ["path", { d: "M3.304 13h6.392", key: "1q3zxz" }]
], dc = e("a-arrow-up", hc);
const ic = [
  ["path", { d: "m15 16 2.536-7.328a1.02 1.02 1 0 1 1.928 0L22 16", key: "xik6mr" }],
  ["path", { d: "M15.697 14h5.606", key: "1stdlc" }],
  ["path", { d: "m2 16 4.039-9.69a.5.5 0 0 1 .923 0L11 16", key: "d5nyq2" }],
  ["path", { d: "M3.304 13h6.392", key: "1q3zxz" }]
], sc = e("a-large-small", ic);
const yc = [
  ["circle", { cx: "16", cy: "4", r: "1", key: "1grugj" }],
  ["path", { d: "m18 19 1-7-6 1", key: "r0i19z" }],
  ["path", { d: "m5 8 3-3 5.5 3-2.36 3.5", key: "9ptxx2" }],
  ["path", { d: "M4.24 14.5a5 5 0 0 0 6.88 6", key: "10kmtu" }],
  ["path", { d: "M13.76 17.5a5 5 0 0 0-6.88-6", key: "2qq6rc" }]
], pc = e("accessibility", yc);
const kc = [
  [
    "path",
    {
      d: "M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2",
      key: "169zse"
    }
  ]
], lc = e("activity", kc);
const uc = [
  ["path", { d: "M18 17.5a2.5 2.5 0 1 1-4 2.03V12", key: "yd12zl" }],
  [
    "path",
    {
      d: "M6 12H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2",
      key: "larmp2"
    }
  ],
  ["path", { d: "M6 8h12", key: "6g4wlu" }],
  ["path", { d: "M6.6 15.572A2 2 0 1 0 10 17v-5", key: "1x1kqn" }]
], Mc = e("air-vent", uc);
const fc = [
  [
    "path",
    {
      d: "M5 17H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-1",
      key: "ns4c3b"
    }
  ],
  ["path", { d: "m12 15 5 6H7Z", key: "14qnn2" }]
], mc = e("airplay", fc);
const vc = [
  ["circle", { cx: "12", cy: "13", r: "8", key: "3y4lt7" }],
  ["path", { d: "M5 3 2 6", key: "18tl5t" }],
  ["path", { d: "m22 6-3-3", key: "1opdir" }],
  ["path", { d: "M6.38 18.7 4 21", key: "17xu3x" }],
  ["path", { d: "M17.64 18.67 20 21", key: "kv2oe2" }],
  ["path", { d: "m9 13 2 2 4-4", key: "6343dt" }]
], gc = e("alarm-clock-check", vc);
const _c = [
  ["circle", { cx: "12", cy: "13", r: "8", key: "3y4lt7" }],
  ["path", { d: "M5 3 2 6", key: "18tl5t" }],
  ["path", { d: "m22 6-3-3", key: "1opdir" }],
  ["path", { d: "M6.38 18.7 4 21", key: "17xu3x" }],
  ["path", { d: "M17.64 18.67 20 21", key: "kv2oe2" }],
  ["path", { d: "M9 13h6", key: "1uhe8q" }]
], xc = e("alarm-clock-minus", _c);
const bc = [
  ["path", { d: "M6.87 6.87a8 8 0 1 0 11.26 11.26", key: "3on8tj" }],
  ["path", { d: "M19.9 14.25a8 8 0 0 0-9.15-9.15", key: "15ghsc" }],
  ["path", { d: "m22 6-3-3", key: "1opdir" }],
  ["path", { d: "M6.26 18.67 4 21", key: "yzmioq" }],
  ["path", { d: "m2 2 20 20", key: "1ooewy" }],
  ["path", { d: "M4 4 2 6", key: "1ycko6" }]
], wc = e("alarm-clock-off", bc);
const Nc = [
  ["circle", { cx: "12", cy: "13", r: "8", key: "3y4lt7" }],
  ["path", { d: "M5 3 2 6", key: "18tl5t" }],
  ["path", { d: "m22 6-3-3", key: "1opdir" }],
  ["path", { d: "M6.38 18.7 4 21", key: "17xu3x" }],
  ["path", { d: "M17.64 18.67 20 21", key: "kv2oe2" }],
  ["path", { d: "M12 10v6", key: "1bos4e" }],
  ["path", { d: "M9 13h6", key: "1uhe8q" }]
], $c = e("alarm-clock-plus", Nc);
const zc = [
  ["circle", { cx: "12", cy: "13", r: "8", key: "3y4lt7" }],
  ["path", { d: "M12 9v4l2 2", key: "1c63tq" }],
  ["path", { d: "M5 3 2 6", key: "18tl5t" }],
  ["path", { d: "m22 6-3-3", key: "1opdir" }],
  ["path", { d: "M6.38 18.7 4 21", key: "17xu3x" }],
  ["path", { d: "M17.64 18.67 20 21", key: "kv2oe2" }]
], jc = e("alarm-clock", zc);
const qc = [
  ["path", { d: "M11 21c0-2.5 2-2.5 2-5", key: "1sicvv" }],
  ["path", { d: "M16 21c0-2.5 2-2.5 2-5", key: "1o3eny" }],
  ["path", { d: "m19 8-.8 3a1.25 1.25 0 0 1-1.2 1H7a1.25 1.25 0 0 1-1.2-1L5 8", key: "1bvca4" }],
  [
    "path",
    { d: "M21 3a1 1 0 0 1 1 1v2a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V4a1 1 0 0 1 1-1z", key: "x3qr1j" }
  ],
  ["path", { d: "M6 21c0-2.5 2-2.5 2-5", key: "i3w1gp" }]
], Ac = e("alarm-smoke", qc);
const Hc = [
  ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", ry: "2", key: "1m3agn" }],
  ["polyline", { points: "11 3 11 11 14 8 17 11 17 3", key: "1wcwz3" }]
], Sc = e("album", Hc);
const Cc = [
  ["path", { d: "M2 12h20", key: "9i4pu4" }],
  ["path", { d: "M10 16v4a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-4", key: "11f1s0" }],
  ["path", { d: "M10 8V4a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v4", key: "t14dx9" }],
  ["path", { d: "M20 16v1a2 2 0 0 1-2 2h-2a2 2 0 0 1-2-2v-1", key: "1w07xs" }],
  ["path", { d: "M14 8V7c0-1.1.9-2 2-2h2a2 2 0 0 1 2 2v1", key: "1apec2" }]
], Vc = e("align-center-horizontal", Cc);
const Rc = [
  ["path", { d: "M12 2v20", key: "t6zp3m" }],
  ["path", { d: "M8 10H4a2 2 0 0 1-2-2V6c0-1.1.9-2 2-2h4", key: "14d6g8" }],
  ["path", { d: "M16 10h4a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2h-4", key: "1e2lrw" }],
  ["path", { d: "M8 20H7a2 2 0 0 1-2-2v-2c0-1.1.9-2 2-2h1", key: "1fkdwx" }],
  ["path", { d: "M16 14h1a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2h-1", key: "1euafb" }]
], Ec = e("align-center-vertical", Rc);
const Lc = [
  ["rect", { width: "6", height: "16", x: "4", y: "2", rx: "2", key: "z5wdxg" }],
  ["rect", { width: "6", height: "9", x: "14", y: "9", rx: "2", key: "um7a8w" }],
  ["path", { d: "M22 22H2", key: "19qnx5" }]
], Pc = e("align-end-horizontal", Lc);
const Tc = [
  ["rect", { width: "16", height: "6", x: "2", y: "4", rx: "2", key: "10wcwx" }],
  ["rect", { width: "9", height: "6", x: "9", y: "14", rx: "2", key: "4p5bwg" }],
  ["path", { d: "M22 22V2", key: "12ipfv" }]
], Oc = e("align-end-vertical", Tc);
const Dc = [
  ["rect", { width: "6", height: "14", x: "4", y: "5", rx: "2", key: "1wwnby" }],
  ["rect", { width: "6", height: "10", x: "14", y: "7", rx: "2", key: "1fe6j6" }],
  ["path", { d: "M17 22v-5", key: "4b6g73" }],
  ["path", { d: "M17 7V2", key: "hnrr36" }],
  ["path", { d: "M7 22v-3", key: "1r4jpn" }],
  ["path", { d: "M7 5V2", key: "liy1u9" }]
], Ic = e(
  "align-horizontal-distribute-center",
  Dc
);
const Fc = [
  ["rect", { width: "6", height: "14", x: "4", y: "5", rx: "2", key: "1wwnby" }],
  ["rect", { width: "6", height: "10", x: "14", y: "7", rx: "2", key: "1fe6j6" }],
  ["path", { d: "M10 2v20", key: "uyc634" }],
  ["path", { d: "M20 2v20", key: "1tx262" }]
], Bc = e(
  "align-horizontal-distribute-end",
  Fc
);
const Uc = [
  ["rect", { width: "6", height: "14", x: "4", y: "5", rx: "2", key: "1wwnby" }],
  ["rect", { width: "6", height: "10", x: "14", y: "7", rx: "2", key: "1fe6j6" }],
  ["path", { d: "M4 2v20", key: "gtpd5x" }],
  ["path", { d: "M14 2v20", key: "tg6bpw" }]
], Wc = e(
  "align-horizontal-distribute-start",
  Uc
);
const Zc = [
  ["rect", { width: "6", height: "14", x: "2", y: "5", rx: "2", key: "dy24zr" }],
  ["rect", { width: "6", height: "10", x: "16", y: "7", rx: "2", key: "13zkjt" }],
  ["path", { d: "M12 2v20", key: "t6zp3m" }]
], Gc = e(
  "align-horizontal-justify-center",
  Zc
);
const Xc = [
  ["rect", { width: "6", height: "14", x: "2", y: "5", rx: "2", key: "dy24zr" }],
  ["rect", { width: "6", height: "10", x: "12", y: "7", rx: "2", key: "1ht384" }],
  ["path", { d: "M22 2v20", key: "40qfg1" }]
], Yc = e("align-horizontal-justify-end", Xc);
const Kc = [
  ["rect", { width: "6", height: "14", x: "6", y: "5", rx: "2", key: "hsirpf" }],
  ["rect", { width: "6", height: "10", x: "16", y: "7", rx: "2", key: "13zkjt" }],
  ["path", { d: "M2 2v20", key: "1ivd8o" }]
], Qc = e("align-horizontal-justify-start", Kc);
const Jc = [
  ["rect", { width: "6", height: "10", x: "9", y: "7", rx: "2", key: "yn7j0q" }],
  ["path", { d: "M4 22V2", key: "tsjzd3" }],
  ["path", { d: "M20 22V2", key: "1bnhr8" }]
], er = e("align-horizontal-space-around", Jc);
const tr = [
  ["rect", { width: "6", height: "14", x: "3", y: "5", rx: "2", key: "j77dae" }],
  ["rect", { width: "6", height: "10", x: "15", y: "7", rx: "2", key: "bq30hj" }],
  ["path", { d: "M3 2v20", key: "1d2pfg" }],
  ["path", { d: "M21 2v20", key: "p059bm" }]
], ar = e("align-horizontal-space-between", tr);
const or = [
  ["rect", { width: "6", height: "16", x: "4", y: "6", rx: "2", key: "1n4dg1" }],
  ["rect", { width: "6", height: "9", x: "14", y: "6", rx: "2", key: "17khns" }],
  ["path", { d: "M22 2H2", key: "fhrpnj" }]
], nr = e("align-start-horizontal", or);
const cr = [
  ["rect", { width: "9", height: "6", x: "6", y: "14", rx: "2", key: "lpm2y7" }],
  ["rect", { width: "16", height: "6", x: "6", y: "4", rx: "2", key: "rdj6ps" }],
  ["path", { d: "M2 2v20", key: "1ivd8o" }]
], rr = e("align-start-vertical", cr);
const hr = [
  ["path", { d: "M22 17h-3", key: "1lwga1" }],
  ["path", { d: "M22 7h-5", key: "o2endc" }],
  ["path", { d: "M5 17H2", key: "1gx9xc" }],
  ["path", { d: "M7 7H2", key: "6bq26l" }],
  ["rect", { x: "5", y: "14", width: "14", height: "6", rx: "2", key: "1qrzuf" }],
  ["rect", { x: "7", y: "4", width: "10", height: "6", rx: "2", key: "we8e9z" }]
], dr = e(
  "align-vertical-distribute-center",
  hr
);
const ir = [
  ["rect", { width: "14", height: "6", x: "5", y: "14", rx: "2", key: "jmoj9s" }],
  ["rect", { width: "10", height: "6", x: "7", y: "4", rx: "2", key: "aza5on" }],
  ["path", { d: "M2 20h20", key: "owomy5" }],
  ["path", { d: "M2 10h20", key: "1ir3d8" }]
], sr = e("align-vertical-distribute-end", ir);
const yr = [
  ["rect", { width: "14", height: "6", x: "5", y: "14", rx: "2", key: "jmoj9s" }],
  ["rect", { width: "10", height: "6", x: "7", y: "4", rx: "2", key: "aza5on" }],
  ["path", { d: "M2 14h20", key: "myj16y" }],
  ["path", { d: "M2 4h20", key: "mda7wb" }]
], pr = e(
  "align-vertical-distribute-start",
  yr
);
const kr = [
  ["rect", { width: "14", height: "6", x: "5", y: "12", rx: "2", key: "4l4tp2" }],
  ["rect", { width: "10", height: "6", x: "7", y: "2", rx: "2", key: "ypihtt" }],
  ["path", { d: "M2 22h20", key: "272qi7" }]
], lr = e("align-vertical-justify-end", kr);
const ur = [
  ["rect", { width: "14", height: "6", x: "5", y: "16", rx: "2", key: "1i8z2d" }],
  ["rect", { width: "10", height: "6", x: "7", y: "2", rx: "2", key: "ypihtt" }],
  ["path", { d: "M2 12h20", key: "9i4pu4" }]
], Mr = e("align-vertical-justify-center", ur);
const fr = [
  ["rect", { width: "14", height: "6", x: "5", y: "16", rx: "2", key: "1i8z2d" }],
  ["rect", { width: "10", height: "6", x: "7", y: "6", rx: "2", key: "13squh" }],
  ["path", { d: "M2 2h20", key: "1ennik" }]
], mr = e("align-vertical-justify-start", fr);
const vr = [
  ["rect", { width: "10", height: "6", x: "7", y: "9", rx: "2", key: "b1zbii" }],
  ["path", { d: "M22 20H2", key: "1p1f7z" }],
  ["path", { d: "M22 4H2", key: "1b7qnq" }]
], gr = e("align-vertical-space-around", vr);
const _r = [
  ["rect", { width: "14", height: "6", x: "5", y: "15", rx: "2", key: "1w91an" }],
  ["rect", { width: "10", height: "6", x: "7", y: "3", rx: "2", key: "17wqzy" }],
  ["path", { d: "M2 21h20", key: "1nyx9w" }],
  ["path", { d: "M2 3h20", key: "91anmk" }]
], xr = e("align-vertical-space-between", _r);
const br = [
  ["path", { d: "M10 10H6", key: "1bsnug" }],
  ["path", { d: "M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2", key: "wrbu53" }],
  [
    "path",
    {
      d: "M19 18h2a1 1 0 0 0 1-1v-3.28a1 1 0 0 0-.684-.948l-1.923-.641a1 1 0 0 1-.578-.502l-1.539-3.076A1 1 0 0 0 16.382 8H14",
      key: "lrkjwd"
    }
  ],
  ["path", { d: "M8 8v4", key: "1fwk8c" }],
  ["path", { d: "M9 18h6", key: "x1upvd" }],
  ["circle", { cx: "17", cy: "18", r: "2", key: "332jqn" }],
  ["circle", { cx: "7", cy: "18", r: "2", key: "19iecd" }]
], wr = e("ambulance", br);
const Nr = [
  ["path", { d: "M16 12h3", key: "4uvgyw" }],
  [
    "path",
    {
      d: "M17.5 12a8 8 0 0 1-8 8A4.5 4.5 0 0 1 5 15.5c0-6 8-4 8-8.5a3 3 0 1 0-6 0c0 3 2.5 8.5 12 13",
      key: "nfoe1t"
    }
  ]
], $r = e("ampersand", Nr);
const zr = [
  [
    "path",
    {
      d: "M10 17c-5-3-7-7-7-9a2 2 0 0 1 4 0c0 2.5-5 2.5-5 6 0 1.7 1.3 3 3 3 2.8 0 5-2.2 5-5",
      key: "12lh1k"
    }
  ],
  [
    "path",
    {
      d: "M22 17c-5-3-7-7-7-9a2 2 0 0 1 4 0c0 2.5-5 2.5-5 6 0 1.7 1.3 3 3 3 2.8 0 5-2.2 5-5",
      key: "173c68"
    }
  ]
], jr = e("ampersands", zr);
const qr = [
  [
    "path",
    { d: "M10 2v5.632c0 .424-.272.795-.653.982A6 6 0 0 0 6 14c.006 4 3 7 5 8", key: "1h8rid" }
  ],
  ["path", { d: "M10 5H8a2 2 0 0 0 0 4h.68", key: "3ezsi6" }],
  ["path", { d: "M14 2v5.632c0 .424.272.795.652.982A6 6 0 0 1 18 14c0 4-3 7-5 8", key: "yt6q09" }],
  ["path", { d: "M14 5h2a2 2 0 0 1 0 4h-.68", key: "8f95yk" }],
  ["path", { d: "M18 22H6", key: "mg6kv4" }],
  ["path", { d: "M9 2h6", key: "1jrp98" }]
], Ar = e("amphora", qr);
const Hr = [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "M16 16s-1.5-2-4-2-4 2-4 2", key: "epbg0q" }],
  ["path", { d: "M7.5 8 10 9", key: "olxxln" }],
  ["path", { d: "m14 9 2.5-1", key: "1j6cij" }],
  ["path", { d: "M9 10h.01", key: "qbtxuw" }],
  ["path", { d: "M15 10h.01", key: "1qmjsl" }]
], Sr = e("angry", Hr);
const Cr = [
  ["path", { d: "M12 6v16", key: "nqf5sj" }],
  ["path", { d: "m19 13 2-1a9 9 0 0 1-18 0l2 1", key: "y7qv08" }],
  ["path", { d: "M9 11h6", key: "1fldmi" }],
  ["circle", { cx: "12", cy: "4", r: "2", key: "muu5ef" }]
], Vr = e("anchor", Cr);
const Rr = [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "M8 15h8", key: "45n4r" }],
  ["path", { d: "M8 9h2", key: "1g203m" }],
  ["path", { d: "M14 9h2", key: "116p9w" }]
], Er = e("annoyed", Rr);
const Lr = [
  ["path", { d: "M2 12 7 2", key: "117k30" }],
  ["path", { d: "m7 12 5-10", key: "1tvx22" }],
  ["path", { d: "m12 12 5-10", key: "ev1o1a" }],
  ["path", { d: "m17 12 5-10", key: "1e4ti3" }],
  ["path", { d: "M4.5 7h15", key: "vlsxkz" }],
  ["path", { d: "M12 16v6", key: "c8a4gj" }]
], Pr = e("antenna", Lr);
const Tr = [
  ["path", { d: "M7 10H6a4 4 0 0 1-4-4 1 1 0 0 1 1-1h4", key: "1hjpb6" }],
  [
    "path",
    { d: "M7 5a1 1 0 0 1 1-1h13a1 1 0 0 1 1 1 7 7 0 0 1-7 7H8a1 1 0 0 1-1-1z", key: "1qn45f" }
  ],
  ["path", { d: "M9 12v5", key: "3anwtq" }],
  ["path", { d: "M15 12v5", key: "5xh3zn" }],
  [
    "path",
    { d: "M5 20a3 3 0 0 1 3-3h8a3 3 0 0 1 3 3 1 1 0 0 1-1 1H6a1 1 0 0 1-1-1", key: "1fi4x8" }
  ]
], Or = e("anvil", Tr);
const Dr = [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "m14.31 8 5.74 9.94", key: "1y6ab4" }],
  ["path", { d: "M9.69 8h11.48", key: "1wxppr" }],
  ["path", { d: "m7.38 12 5.74-9.94", key: "1grp0k" }],
  ["path", { d: "M9.69 16 3.95 6.06", key: "libnyf" }],
  ["path", { d: "M14.31 16H2.83", key: "x5fava" }],
  ["path", { d: "m16.62 12-5.74 9.94", key: "1vwawt" }]
], Ir = e("aperture", Dr);
const Fr = [
  ["rect", { width: "20", height: "16", x: "2", y: "4", rx: "2", key: "18n3k1" }],
  ["path", { d: "M6 8h.01", key: "x9i8wu" }],
  ["path", { d: "M10 8h.01", key: "1r9ogq" }],
  ["path", { d: "M14 8h.01", key: "1primd" }]
], Br = e("app-window-mac", Fr);
const Ur = [
  ["rect", { x: "2", y: "4", width: "20", height: "16", rx: "2", key: "izxlao" }],
  ["path", { d: "M10 4v4", key: "pp8u80" }],
  ["path", { d: "M2 8h20", key: "d11cs7" }],
  ["path", { d: "M6 4v4", key: "1svtjw" }]
], Wr = e("app-window", Ur);
const Zr = [
  ["path", { d: "M12 6.528V3a1 1 0 0 1 1-1h0", key: "11qiee" }],
  [
    "path",
    {
      d: "M18.237 21A15 15 0 0 0 22 11a6 6 0 0 0-10-4.472A6 6 0 0 0 2 11a15.1 15.1 0 0 0 3.763 10 3 3 0 0 0 3.648.648 5.5 5.5 0 0 1 5.178 0A3 3 0 0 0 18.237 21",
      key: "110c12"
    }
  ]
], Gr = e("apple", Zr);
const Xr = [
  ["rect", { width: "20", height: "5", x: "2", y: "3", rx: "1", key: "1wp1u1" }],
  ["path", { d: "M4 8v11a2 2 0 0 0 2 2h2", key: "tvwodi" }],
  ["path", { d: "M20 8v11a2 2 0 0 1-2 2h-2", key: "1gkqxj" }],
  ["path", { d: "m9 15 3-3 3 3", key: "1pd0qc" }],
  ["path", { d: "M12 12v9", key: "192myk" }]
], Yr = e("archive-restore", Xr);
const Kr = [
  ["rect", { width: "20", height: "5", x: "2", y: "3", rx: "1", key: "1wp1u1" }],
  ["path", { d: "M4 8v11a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8", key: "1s80jp" }],
  ["path", { d: "m9.5 17 5-5", key: "nakeu6" }],
  ["path", { d: "m9.5 12 5 5", key: "1hccrj" }]
], Qr = e("archive-x", Kr);
const Jr = [
  ["rect", { width: "20", height: "5", x: "2", y: "3", rx: "1", key: "1wp1u1" }],
  ["path", { d: "M4 8v11a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8", key: "1s80jp" }],
  ["path", { d: "M10 12h4", key: "a56b0p" }]
], eh = e("archive", Jr);
const th = [
  ["path", { d: "M19 9V6a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2v3", key: "irtipd" }],
  [
    "path",
    {
      d: "M3 16a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-5a2 2 0 0 0-4 0v1.5a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5V11a2 2 0 0 0-4 0z",
      key: "1qyhux"
    }
  ],
  ["path", { d: "M5 18v2", key: "ppbyun" }],
  ["path", { d: "M19 18v2", key: "gy7782" }]
], ah = e("armchair", th);
const oh = [
  [
    "path",
    {
      d: "M15 11a1 1 0 0 0 1 1h2.939a1 1 0 0 1 .75 1.811l-6.835 6.836a1.207 1.207 0 0 1-1.707 0L4.31 13.81a1 1 0 0 1 .75-1.811H8a1 1 0 0 0 1-1V9a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1z",
      key: "1hy3w3"
    }
  ],
  ["path", { d: "M9 4h6", key: "10am2s" }]
], nh = e("arrow-big-down-dash", oh);
const ch = [
  [
    "path",
    {
      d: "M15 11a1 1 0 0 0 1 1h2.939a1 1 0 0 1 .75 1.811l-6.835 6.836a1.207 1.207 0 0 1-1.707 0L4.31 13.81a1 1 0 0 1 .75-1.811H8a1 1 0 0 0 1-1V5a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1z",
      key: "1eaqc3"
    }
  ]
], rh = e("arrow-big-down", ch);
const hh = [
  [
    "path",
    {
      d: "M13 9a1 1 0 0 1-1-1V5.061a1 1 0 0 0-1.811-.75l-6.835 6.836a1.207 1.207 0 0 0 0 1.707l6.835 6.835a1 1 0 0 0 1.811-.75V16a1 1 0 0 1 1-1h2a1 1 0 0 0 1-1v-4a1 1 0 0 0-1-1z",
      key: "p8w4w5"
    }
  ],
  ["path", { d: "M20 9v6", key: "14roy0" }]
], dh = e("arrow-big-left-dash", hh);
const ih = [
  [
    "path",
    {
      d: "M13 9a1 1 0 0 1-1-1V5.061a1 1 0 0 0-1.811-.75l-6.835 6.836a1.207 1.207 0 0 0 0 1.707l6.835 6.835a1 1 0 0 0 1.811-.75V16a1 1 0 0 1 1-1h6a1 1 0 0 0 1-1v-4a1 1 0 0 0-1-1z",
      key: "aztept"
    }
  ]
], sh = e("arrow-big-left", ih);
const yh = [
  [
    "path",
    {
      d: "M11 9a1 1 0 0 0 1-1V5.061a1 1 0 0 1 1.811-.75l6.836 6.836a1.207 1.207 0 0 1 0 1.707l-6.836 6.835a1 1 0 0 1-1.811-.75V16a1 1 0 0 0-1-1H9a1 1 0 0 1-1-1v-4a1 1 0 0 1 1-1z",
      key: "67vhrh"
    }
  ],
  ["path", { d: "M4 9v6", key: "bns7oa" }]
], ph = e("arrow-big-right-dash", yh);
const kh = [
  [
    "path",
    {
      d: "M11 9a1 1 0 0 0 1-1V5.061a1 1 0 0 1 1.811-.75l6.836 6.836a1.207 1.207 0 0 1 0 1.707l-6.836 6.835a1 1 0 0 1-1.811-.75V16a1 1 0 0 0-1-1H5a1 1 0 0 1-1-1v-4a1 1 0 0 1 1-1z",
      key: "1232du"
    }
  ]
], lh = e("arrow-big-right", kh);
const uh = [
  [
    "path",
    {
      d: "M9 13a1 1 0 0 0-1-1H5.061a1 1 0 0 1-.75-1.811l6.836-6.835a1.207 1.207 0 0 1 1.707 0l6.835 6.835a1 1 0 0 1-.75 1.811H16a1 1 0 0 0-1 1v2a1 1 0 0 1-1 1h-4a1 1 0 0 1-1-1z",
      key: "pnzqmc"
    }
  ],
  ["path", { d: "M9 20h6", key: "s66wpe" }]
], Mh = e("arrow-big-up-dash", uh);
const fh = [
  [
    "path",
    {
      d: "M9 13a1 1 0 0 0-1-1H5.061a1 1 0 0 1-.75-1.811l6.836-6.835a1.207 1.207 0 0 1 1.707 0l6.835 6.835a1 1 0 0 1-.75 1.811H16a1 1 0 0 0-1 1v6a1 1 0 0 1-1 1h-4a1 1 0 0 1-1-1z",
      key: "lh0v7k"
    }
  ]
], mh = e("arrow-big-up", fh);
const vh = [
  ["path", { d: "m3 16 4 4 4-4", key: "1co6wj" }],
  ["path", { d: "M7 20V4", key: "1yoxec" }],
  ["rect", { x: "15", y: "4", width: "4", height: "6", ry: "2", key: "1bwicg" }],
  ["path", { d: "M17 20v-6h-2", key: "1qp1so" }],
  ["path", { d: "M15 20h4", key: "1j968p" }]
], gh = e("arrow-down-0-1", vh);
const _h = [
  ["path", { d: "m3 16 4 4 4-4", key: "1co6wj" }],
  ["path", { d: "M7 20V4", key: "1yoxec" }],
  ["path", { d: "M17 10V4h-2", key: "zcsr5x" }],
  ["path", { d: "M15 10h4", key: "id2lce" }],
  ["rect", { x: "15", y: "14", width: "4", height: "6", ry: "2", key: "33xykx" }]
], xh = e("arrow-down-1-0", _h);
const bh = [
  ["path", { d: "m3 16 4 4 4-4", key: "1co6wj" }],
  ["path", { d: "M7 20V4", key: "1yoxec" }],
  ["path", { d: "M20 8h-5", key: "1vsyxs" }],
  ["path", { d: "M15 10V6.5a2.5 2.5 0 0 1 5 0V10", key: "ag13bf" }],
  ["path", { d: "M15 14h5l-5 6h5", key: "ur5jdg" }]
], wh = e("arrow-down-a-z", bh);
const Nh = [
  ["path", { d: "M19 3H5", key: "1236rx" }],
  ["path", { d: "M12 21V7", key: "gj6g52" }],
  ["path", { d: "m6 15 6 6 6-6", key: "h15q88" }]
], $h = e("arrow-down-from-line", Nh);
const zh = [
  ["path", { d: "M17 7 7 17", key: "15tmo1" }],
  ["path", { d: "M17 17H7V7", key: "1org7z" }]
], jh = e("arrow-down-left", zh);
const qh = [
  ["path", { d: "m3 16 4 4 4-4", key: "1co6wj" }],
  ["path", { d: "M7 20V4", key: "1yoxec" }],
  ["path", { d: "M11 4h4", key: "6d7r33" }],
  ["path", { d: "M11 8h7", key: "djye34" }],
  ["path", { d: "M11 12h10", key: "1438ji" }]
], Ah = e("arrow-down-narrow-wide", qh);
const Hh = [
  ["path", { d: "m7 7 10 10", key: "1fmybs" }],
  ["path", { d: "M17 7v10H7", key: "6fjiku" }]
], Sh = e("arrow-down-right", Hh);
const Ch = [
  ["path", { d: "M12 2v14", key: "jyx4ut" }],
  ["path", { d: "m19 9-7 7-7-7", key: "1oe3oy" }],
  ["circle", { cx: "12", cy: "21", r: "1", key: "o0uj5v" }]
], Vh = e("arrow-down-to-dot", Ch);
const Rh = [
  ["path", { d: "M12 17V3", key: "1cwfxf" }],
  ["path", { d: "m6 11 6 6 6-6", key: "12ii2o" }],
  ["path", { d: "M19 21H5", key: "150jfl" }]
], Eh = e("arrow-down-to-line", Rh);
const Lh = [
  ["path", { d: "m3 16 4 4 4-4", key: "1co6wj" }],
  ["path", { d: "M7 20V4", key: "1yoxec" }],
  ["path", { d: "m21 8-4-4-4 4", key: "1c9v7m" }],
  ["path", { d: "M17 4v16", key: "7dpous" }]
], Ph = e("arrow-down-up", Lh);
const Th = [
  ["path", { d: "m3 16 4 4 4-4", key: "1co6wj" }],
  ["path", { d: "M7 20V4", key: "1yoxec" }],
  ["path", { d: "M11 4h10", key: "1w87gc" }],
  ["path", { d: "M11 8h7", key: "djye34" }],
  ["path", { d: "M11 12h4", key: "q8tih4" }]
], Oh = e("arrow-down-wide-narrow", Th);
const Dh = [
  ["path", { d: "m3 16 4 4 4-4", key: "1co6wj" }],
  ["path", { d: "M7 4v16", key: "1glfcx" }],
  ["path", { d: "M15 4h5l-5 6h5", key: "8asdl1" }],
  ["path", { d: "M15 20v-3.5a2.5 2.5 0 0 1 5 0V20", key: "r6l5cz" }],
  ["path", { d: "M20 18h-5", key: "18j1r2" }]
], Ih = e("arrow-down-z-a", Dh);
const Fh = [
  ["path", { d: "M12 5v14", key: "s699le" }],
  ["path", { d: "m19 12-7 7-7-7", key: "1idqje" }]
], Bh = e("arrow-down", Fh);
const Uh = [
  ["path", { d: "m9 6-6 6 6 6", key: "7v63n9" }],
  ["path", { d: "M3 12h14", key: "13k4hi" }],
  ["path", { d: "M21 19V5", key: "b4bplr" }]
], Wh = e("arrow-left-from-line", Uh);
const Zh = [
  ["path", { d: "M8 3 4 7l4 4", key: "9rb6wj" }],
  ["path", { d: "M4 7h16", key: "6tx8e3" }],
  ["path", { d: "m16 21 4-4-4-4", key: "siv7j2" }],
  ["path", { d: "M20 17H4", key: "h6l3hr" }]
], Gh = e("arrow-left-right", Zh);
const Xh = [
  ["path", { d: "M3 19V5", key: "rwsyhb" }],
  ["path", { d: "m13 6-6 6 6 6", key: "1yhaz7" }],
  ["path", { d: "M7 12h14", key: "uoisry" }]
], Yh = e("arrow-left-to-line", Xh);
const Kh = [
  ["path", { d: "m12 19-7-7 7-7", key: "1l729n" }],
  ["path", { d: "M19 12H5", key: "x3x0zl" }]
], Qh = e("arrow-left", Kh);
const Jh = [
  ["path", { d: "M3 5v14", key: "1nt18q" }],
  ["path", { d: "M21 12H7", key: "13ipq5" }],
  ["path", { d: "m15 18 6-6-6-6", key: "6tx3qv" }]
], ed = e("arrow-right-from-line", Jh);
const td = [
  ["path", { d: "m16 3 4 4-4 4", key: "1x1c3m" }],
  ["path", { d: "M20 7H4", key: "zbl0bi" }],
  ["path", { d: "m8 21-4-4 4-4", key: "h9nckh" }],
  ["path", { d: "M4 17h16", key: "g4d7ey" }]
], ad = e("arrow-right-left", td);
const od = [
  ["path", { d: "M5 12h14", key: "1ays0h" }],
  ["path", { d: "m12 5 7 7-7 7", key: "xquz4c" }]
], nd = e("arrow-right", od);
const cd = [
  ["path", { d: "M17 12H3", key: "8awo09" }],
  ["path", { d: "m11 18 6-6-6-6", key: "8c2y43" }],
  ["path", { d: "M21 5v14", key: "nzette" }]
], rd = e("arrow-right-to-line", cd);
const hd = [
  ["path", { d: "m3 8 4-4 4 4", key: "11wl7u" }],
  ["path", { d: "M7 4v16", key: "1glfcx" }],
  ["rect", { x: "15", y: "4", width: "4", height: "6", ry: "2", key: "1bwicg" }],
  ["path", { d: "M17 20v-6h-2", key: "1qp1so" }],
  ["path", { d: "M15 20h4", key: "1j968p" }]
], dd = e("arrow-up-0-1", hd);
const id = [
  ["path", { d: "m3 8 4-4 4 4", key: "11wl7u" }],
  ["path", { d: "M7 4v16", key: "1glfcx" }],
  ["path", { d: "M17 10V4h-2", key: "zcsr5x" }],
  ["path", { d: "M15 10h4", key: "id2lce" }],
  ["rect", { x: "15", y: "14", width: "4", height: "6", ry: "2", key: "33xykx" }]
], sd = e("arrow-up-1-0", id);
const yd = [
  ["path", { d: "m3 8 4-4 4 4", key: "11wl7u" }],
  ["path", { d: "M7 4v16", key: "1glfcx" }],
  ["path", { d: "M20 8h-5", key: "1vsyxs" }],
  ["path", { d: "M15 10V6.5a2.5 2.5 0 0 1 5 0V10", key: "ag13bf" }],
  ["path", { d: "M15 14h5l-5 6h5", key: "ur5jdg" }]
], pd = e("arrow-up-a-z", yd);
const kd = [
  ["path", { d: "m21 16-4 4-4-4", key: "f6ql7i" }],
  ["path", { d: "M17 20V4", key: "1ejh1v" }],
  ["path", { d: "m3 8 4-4 4 4", key: "11wl7u" }],
  ["path", { d: "M7 4v16", key: "1glfcx" }]
], ld = e("arrow-up-down", kd);
const ud = [
  ["path", { d: "m5 9 7-7 7 7", key: "1hw5ic" }],
  ["path", { d: "M12 16V2", key: "ywoabb" }],
  ["circle", { cx: "12", cy: "21", r: "1", key: "o0uj5v" }]
], Md = e("arrow-up-from-dot", ud);
const fd = [
  ["path", { d: "m18 9-6-6-6 6", key: "kcunyi" }],
  ["path", { d: "M12 3v14", key: "7cf3v8" }],
  ["path", { d: "M5 21h14", key: "11awu3" }]
], md = e("arrow-up-from-line", fd);
const vd = [
  ["path", { d: "M7 17V7h10", key: "11bw93" }],
  ["path", { d: "M17 17 7 7", key: "2786uv" }]
], gd = e("arrow-up-left", vd);
const _d = [
  ["path", { d: "m3 8 4-4 4 4", key: "11wl7u" }],
  ["path", { d: "M7 4v16", key: "1glfcx" }],
  ["path", { d: "M11 12h4", key: "q8tih4" }],
  ["path", { d: "M11 16h7", key: "uosisv" }],
  ["path", { d: "M11 20h10", key: "jvxblo" }]
], xd = e("arrow-up-narrow-wide", _d);
const bd = [
  ["path", { d: "M7 7h10v10", key: "1tivn9" }],
  ["path", { d: "M7 17 17 7", key: "1vkiza" }]
], wd = e("arrow-up-right", bd);
const Nd = [
  ["path", { d: "M5 3h14", key: "7usisc" }],
  ["path", { d: "m18 13-6-6-6 6", key: "1kf1n9" }],
  ["path", { d: "M12 7v14", key: "1akyts" }]
], $d = e("arrow-up-to-line", Nd);
const zd = [
  ["path", { d: "m3 8 4-4 4 4", key: "11wl7u" }],
  ["path", { d: "M7 4v16", key: "1glfcx" }],
  ["path", { d: "M11 12h10", key: "1438ji" }],
  ["path", { d: "M11 16h7", key: "uosisv" }],
  ["path", { d: "M11 20h4", key: "1krc32" }]
], jd = e("arrow-up-wide-narrow", zd);
const qd = [
  ["path", { d: "m3 8 4-4 4 4", key: "11wl7u" }],
  ["path", { d: "M7 4v16", key: "1glfcx" }],
  ["path", { d: "M15 4h5l-5 6h5", key: "8asdl1" }],
  ["path", { d: "M15 20v-3.5a2.5 2.5 0 0 1 5 0V20", key: "r6l5cz" }],
  ["path", { d: "M20 18h-5", key: "18j1r2" }]
], Ad = e("arrow-up-z-a", qd);
const Hd = [
  ["path", { d: "m5 12 7-7 7 7", key: "hav0vg" }],
  ["path", { d: "M12 19V5", key: "x0mq9r" }]
], Sd = e("arrow-up", Hd);
const Cd = [
  ["path", { d: "m4 6 3-3 3 3", key: "9aidw8" }],
  ["path", { d: "M7 17V3", key: "19qxw1" }],
  ["path", { d: "m14 6 3-3 3 3", key: "6iy689" }],
  ["path", { d: "M17 17V3", key: "o0fmgi" }],
  ["path", { d: "M4 21h16", key: "1h09gz" }]
], Vd = e("arrows-up-from-line", Cd);
const Rd = [
  ["path", { d: "M12 6v12", key: "1vza4d" }],
  ["path", { d: "M17.196 9 6.804 15", key: "1ah31z" }],
  ["path", { d: "m6.804 9 10.392 6", key: "1b6pxd" }]
], Ed = e("asterisk", Rd);
const Ld = [
  ["circle", { cx: "12", cy: "12", r: "4", key: "4exip2" }],
  ["path", { d: "M16 8v5a3 3 0 0 0 6 0v-1a10 10 0 1 0-4 8", key: "7n84p3" }]
], Pd = e("at-sign", Ld);
const Td = [
  ["circle", { cx: "12", cy: "12", r: "1", key: "41hilf" }],
  [
    "path",
    {
      d: "M20.2 20.2c2.04-2.03.02-7.36-4.5-11.9-4.54-4.52-9.87-6.54-11.9-4.5-2.04 2.03-.02 7.36 4.5 11.9 4.54 4.52 9.87 6.54 11.9 4.5Z",
      key: "1l2ple"
    }
  ],
  [
    "path",
    {
      d: "M15.7 15.7c4.52-4.54 6.54-9.87 4.5-11.9-2.03-2.04-7.36-.02-11.9 4.5-4.52 4.54-6.54 9.87-4.5 11.9 2.03 2.04 7.36.02 11.9-4.5Z",
      key: "1wam0m"
    }
  ]
], Od = e("atom", Td);
const Dd = [
  ["path", { d: "M2 10v3", key: "1fnikh" }],
  ["path", { d: "M6 6v11", key: "11sgs0" }],
  ["path", { d: "M10 3v18", key: "yhl04a" }],
  ["path", { d: "M14 8v7", key: "3a1oy3" }],
  ["path", { d: "M18 5v13", key: "123xd1" }],
  ["path", { d: "M22 10v3", key: "154ddg" }]
], Id = e("audio-lines", Dd);
const Fd = [
  [
    "path",
    {
      d: "M2 13a2 2 0 0 0 2-2V7a2 2 0 0 1 4 0v13a2 2 0 0 0 4 0V4a2 2 0 0 1 4 0v13a2 2 0 0 0 4 0v-4a2 2 0 0 1 2-2",
      key: "57tc96"
    }
  ]
], Bd = e("audio-waveform", Fd);
const Ud = [
  [
    "path",
    {
      d: "m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526",
      key: "1yiouv"
    }
  ],
  ["circle", { cx: "12", cy: "8", r: "6", key: "1vp47v" }]
], Wd = e("award", Ud);
const Zd = [
  ["path", { d: "m14 12-8.381 8.38a1 1 0 0 1-3.001-3L11 9", key: "5z9253" }],
  [
    "path",
    {
      d: "M15 15.5a.5.5 0 0 0 .5.5A6.5 6.5 0 0 0 22 9.5a.5.5 0 0 0-.5-.5h-1.672a2 2 0 0 1-1.414-.586l-5.062-5.062a1.205 1.205 0 0 0-1.704 0L9.352 5.648a1.205 1.205 0 0 0 0 1.704l5.062 5.062A2 2 0 0 1 15 13.828z",
      key: "19zklq"
    }
  ]
], Gd = e("axe", Zd);
const Xd = [
  ["path", { d: "M13.5 10.5 15 9", key: "1nsxvm" }],
  ["path", { d: "M4 4v15a1 1 0 0 0 1 1h15", key: "1w6lkd" }],
  ["path", { d: "M4.293 19.707 6 18", key: "3g1p8c" }],
  ["path", { d: "m9 15 1.5-1.5", key: "1xfbes" }]
], Yd = e("axis-3d", Xd);
const Kd = [
  [
    "path",
    { d: "M4 10a4 4 0 0 1 4-4h8a4 4 0 0 1 4 4v10a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2z", key: "1ol0lm" }
  ],
  ["path", { d: "M8 10h8", key: "c7uz4u" }],
  ["path", { d: "M8 18h8", key: "1no2b1" }],
  ["path", { d: "M8 22v-6a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v6", key: "1fr6do" }],
  ["path", { d: "M9 6V4a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2", key: "donm21" }]
], Qd = e("backpack", Kd);
const Jd = [
  ["path", { d: "M10 16c.5.3 1.2.5 2 .5s1.5-.2 2-.5", key: "1u7htd" }],
  ["path", { d: "M15 12h.01", key: "1k8ypt" }],
  [
    "path",
    {
      d: "M19.38 6.813A9 9 0 0 1 20.8 10.2a2 2 0 0 1 0 3.6 9 9 0 0 1-17.6 0 2 2 0 0 1 0-3.6A9 9 0 0 1 12 3c2 0 3.5 1.1 3.5 2.5s-.9 2.5-2 2.5c-.8 0-1.5-.4-1.5-1",
      key: "11xh7x"
    }
  ],
  ["path", { d: "M9 12h.01", key: "157uk2" }]
], ei = e("baby", Jd);
const ti = [
  [
    "path",
    {
      d: "M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z",
      key: "3c2336"
    }
  ],
  ["line", { x1: "12", x2: "12", y1: "8", y2: "12", key: "1pkeuh" }],
  ["line", { x1: "12", x2: "12.01", y1: "16", y2: "16", key: "4dfq90" }]
], ai = e("badge-alert", ti);
const oi = [
  [
    "path",
    {
      d: "M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z",
      key: "3c2336"
    }
  ],
  ["path", { d: "M12 7v10", key: "jspqdw" }],
  ["path", { d: "M15.4 10a4 4 0 1 0 0 4", key: "2eqtx8" }]
], ni = e("badge-cent", oi);
const ci = [
  [
    "path",
    {
      d: "M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z",
      key: "3c2336"
    }
  ],
  ["path", { d: "m9 12 2 2 4-4", key: "dzmm74" }]
], ri = e("badge-check", ci);
const hi = [
  [
    "path",
    {
      d: "M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z",
      key: "3c2336"
    }
  ],
  ["path", { d: "M16 8h-6a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4H8", key: "1h4pet" }],
  ["path", { d: "M12 18V6", key: "zqpxq5" }]
], di = e("badge-dollar-sign", hi);
const ii = [
  [
    "path",
    {
      d: "M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z",
      key: "3c2336"
    }
  ],
  ["path", { d: "M7 12h5", key: "gblrwe" }],
  ["path", { d: "M15 9.4a4 4 0 1 0 0 5.2", key: "1makmb" }]
], si = e("badge-euro", ii);
const yi = [
  [
    "path",
    {
      d: "M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z",
      key: "3c2336"
    }
  ],
  ["path", { d: "M8 8h8", key: "1bis0t" }],
  ["path", { d: "M8 12h8", key: "1wcyev" }],
  ["path", { d: "m13 17-5-1h1a4 4 0 0 0 0-8", key: "nu2bwa" }]
], pi = e("badge-indian-rupee", yi);
const ki = [
  [
    "path",
    {
      d: "M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z",
      key: "3c2336"
    }
  ],
  ["line", { x1: "12", x2: "12", y1: "16", y2: "12", key: "1y1yb1" }],
  ["line", { x1: "12", x2: "12.01", y1: "8", y2: "8", key: "110wyk" }]
], li = e("badge-info", ki);
const ui = [
  [
    "path",
    {
      d: "M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z",
      key: "3c2336"
    }
  ],
  ["path", { d: "m9 8 3 3v7", key: "17yadx" }],
  ["path", { d: "m12 11 3-3", key: "p4cfq1" }],
  ["path", { d: "M9 12h6", key: "1c52cq" }],
  ["path", { d: "M9 16h6", key: "8wimt3" }]
], Mi = e("badge-japanese-yen", ui);
const fi = [
  [
    "path",
    {
      d: "M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z",
      key: "3c2336"
    }
  ],
  ["line", { x1: "8", x2: "16", y1: "12", y2: "12", key: "1jonct" }]
], mi = e("badge-minus", fi);
const vi = [
  [
    "path",
    {
      d: "M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z",
      key: "3c2336"
    }
  ],
  ["path", { d: "m15 9-6 6", key: "1uzhvr" }],
  ["path", { d: "M9 9h.01", key: "1q5me6" }],
  ["path", { d: "M15 15h.01", key: "lqbp3k" }]
], gi = e("badge-percent", vi);
const _i = [
  [
    "path",
    {
      d: "M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z",
      key: "3c2336"
    }
  ],
  ["line", { x1: "12", x2: "12", y1: "8", y2: "16", key: "10p56q" }],
  ["line", { x1: "8", x2: "16", y1: "12", y2: "12", key: "1jonct" }]
], xi = e("badge-plus", _i);
const bi = [
  [
    "path",
    {
      d: "M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z",
      key: "3c2336"
    }
  ],
  ["path", { d: "M8 12h4", key: "qz6y1c" }],
  ["path", { d: "M10 16V9.5a2.5 2.5 0 0 1 5 0", key: "3mlbjk" }],
  ["path", { d: "M8 16h7", key: "sbedsn" }]
], wi = e("badge-pound-sterling", bi);
const Ni = [
  [
    "path",
    {
      d: "M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z",
      key: "3c2336"
    }
  ],
  ["path", { d: "M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3", key: "1u773s" }],
  ["line", { x1: "12", x2: "12.01", y1: "17", y2: "17", key: "io3f8k" }]
], $i = e("badge-question-mark", Ni);
const zi = [
  [
    "path",
    {
      d: "M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z",
      key: "3c2336"
    }
  ],
  ["path", { d: "M9 16h5", key: "1syiyw" }],
  ["path", { d: "M9 12h5a2 2 0 1 0 0-4h-3v9", key: "1ge9c1" }]
], ji = e("badge-russian-ruble", zi);
const qi = [
  [
    "path",
    {
      d: "M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z",
      key: "3c2336"
    }
  ],
  ["path", { d: "M11 17V8h4", key: "1bfq6y" }],
  ["path", { d: "M11 12h3", key: "2eqnfz" }],
  ["path", { d: "M9 16h4", key: "1skf3a" }]
], Ai = e("badge-swiss-franc", qi);
const Hi = [
  ["path", { d: "M11 7v10a5 5 0 0 0 5-5", key: "1ja3ih" }],
  ["path", { d: "m15 8-6 3", key: "4x0uwz" }],
  [
    "path",
    {
      d: "M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76",
      key: "18242g"
    }
  ]
], Si = e("badge-turkish-lira", Hi);
const Ci = [
  [
    "path",
    {
      d: "M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z",
      key: "3c2336"
    }
  ],
  ["line", { x1: "15", x2: "9", y1: "9", y2: "15", key: "f7djnv" }],
  ["line", { x1: "9", x2: "15", y1: "9", y2: "15", key: "1shsy8" }]
], Vi = e("badge-x", Ci);
const Ri = [
  ["path", { d: "M22 18H6a2 2 0 0 1-2-2V7a2 2 0 0 0-2-2", key: "4irg2o" }],
  ["path", { d: "M17 14V4a2 2 0 0 0-2-2h-1a2 2 0 0 0-2 2v10", key: "14fcyx" }],
  ["rect", { width: "13", height: "8", x: "8", y: "6", rx: "1", key: "o6oiis" }],
  ["circle", { cx: "18", cy: "20", r: "2", key: "t9985n" }],
  ["circle", { cx: "9", cy: "20", r: "2", key: "e5v82j" }]
], Ei = e("baggage-claim", Ri);
const Li = [
  [
    "path",
    {
      d: "M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z",
      key: "3c2336"
    }
  ]
], Pi = e("badge", Li);
const Ti = [
  ["path", { d: "M12 16v1a2 2 0 0 0 2 2h1a2 2 0 0 1 2 2v1", key: "2nz4b" }],
  ["path", { d: "M12 6a2 2 0 0 1 2 2", key: "7y7d82" }],
  ["path", { d: "M18 8c0 4-3.5 8-6 8s-6-4-6-8a6 6 0 0 1 12 0", key: "vqb5s3" }]
], Oi = e("balloon", Ti);
const Di = [
  ["path", { d: "M4.929 4.929 19.07 19.071", key: "196cmz" }],
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }]
], Ii = e("ban", Di);
const Fi = [
  ["path", { d: "M4 13c3.5-2 8-2 10 2a5.5 5.5 0 0 1 8 5", key: "1cscit" }],
  [
    "path",
    {
      d: "M5.15 17.89c5.52-1.52 8.65-6.89 7-12C11.55 4 11.5 2 13 2c3.22 0 5 5.5 5 8 0 6.5-4.2 12-10.49 12C5.11 22 2 22 2 20c0-1.5 1.14-1.55 3.15-2.11Z",
      key: "1y1nbv"
    }
  ]
], Bi = e("banana", Fi);
const Ui = [
  ["path", { d: "M12 18H4a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5", key: "x6cv4u" }],
  ["path", { d: "m16 19 3 3 3-3", key: "1ibux0" }],
  ["path", { d: "M18 12h.01", key: "yjnet6" }],
  ["path", { d: "M19 16v6", key: "tddt3s" }],
  ["path", { d: "M6 12h.01", key: "c2rlol" }],
  ["circle", { cx: "12", cy: "12", r: "2", key: "1c9p78" }]
], Wi = e("banknote-arrow-down", Ui);
const Zi = [
  ["path", { d: "M10 10.01h.01", key: "1e9xi7" }],
  ["path", { d: "M10 14.01h.01", key: "ac23bv" }],
  ["path", { d: "M14 10.01h.01", key: "2wfrvf" }],
  ["path", { d: "M14 14.01h.01", key: "8tw8yn" }],
  ["path", { d: "M18 6v11.5", key: "dkbidh" }],
  ["path", { d: "M6 6v12", key: "vkc79e" }],
  ["rect", { x: "2", y: "6", width: "20", height: "12", rx: "2", key: "1wpnh2" }]
], Gi = e("bandage", Zi);
const Xi = [
  ["path", { d: "M12 18H4a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5", key: "x6cv4u" }],
  ["path", { d: "M18 12h.01", key: "yjnet6" }],
  ["path", { d: "M19 22v-6", key: "qhmiwi" }],
  ["path", { d: "m22 19-3-3-3 3", key: "rn6bg2" }],
  ["path", { d: "M6 12h.01", key: "c2rlol" }],
  ["circle", { cx: "12", cy: "12", r: "2", key: "1c9p78" }]
], Yi = e("banknote-arrow-up", Xi);
const Ki = [
  ["path", { d: "M13 18H4a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5", key: "16nib6" }],
  ["path", { d: "m17 17 5 5", key: "p7ous7" }],
  ["path", { d: "M18 12h.01", key: "yjnet6" }],
  ["path", { d: "m22 17-5 5", key: "gqnmv0" }],
  ["path", { d: "M6 12h.01", key: "c2rlol" }],
  ["circle", { cx: "12", cy: "12", r: "2", key: "1c9p78" }]
], Qi = e("banknote-x", Ki);
const Ji = [
  ["path", { d: "M3 5v14", key: "1nt18q" }],
  ["path", { d: "M8 5v14", key: "1ybrkv" }],
  ["path", { d: "M12 5v14", key: "s699le" }],
  ["path", { d: "M17 5v14", key: "ycjyhj" }],
  ["path", { d: "M21 5v14", key: "nzette" }]
], es = e("barcode", Ji);
const ts = [
  ["rect", { width: "20", height: "12", x: "2", y: "6", rx: "2", key: "9lu3g6" }],
  ["circle", { cx: "12", cy: "12", r: "2", key: "1c9p78" }],
  ["path", { d: "M6 12h.01M18 12h.01", key: "113zkx" }]
], as = e("banknote", ts);
const os = [
  ["path", { d: "M10 3a41 41 0 0 0 0 18", key: "1qcnzb" }],
  ["path", { d: "M14 3a41 41 0 0 1 0 18", key: "547vd4" }],
  [
    "path",
    {
      d: "M17 3a2 2 0 0 1 1.68.92 15.25 15.25 0 0 1 0 16.16A2 2 0 0 1 17 21H7a2 2 0 0 1-1.68-.92 15.25 15.25 0 0 1 0-16.16A2 2 0 0 1 7 3z",
      key: "1wepyy"
    }
  ],
  ["path", { d: "M3.84 17h16.32", key: "1wh981" }],
  ["path", { d: "M3.84 7h16.32", key: "19jf4x" }]
], ns = e("barrel", os);
const cs = [
  ["path", { d: "M4 20h16", key: "14thso" }],
  ["path", { d: "m6 16 6-12 6 12", key: "1b4byz" }],
  ["path", { d: "M8 12h8", key: "1wcyev" }]
], rs = e("baseline", cs);
const hs = [
  ["path", { d: "M10 4 8 6", key: "1rru8s" }],
  ["path", { d: "M17 19v2", key: "ts1sot" }],
  ["path", { d: "M2 12h20", key: "9i4pu4" }],
  ["path", { d: "M7 19v2", key: "12npes" }],
  [
    "path",
    {
      d: "M9 5 7.621 3.621A2.121 2.121 0 0 0 4 5v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-5",
      key: "14ym8i"
    }
  ]
], ds = e("bath", hs);
const is = [
  ["path", { d: "m11 7-3 5h4l-3 5", key: "b4a64w" }],
  ["path", { d: "M14.856 6H16a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-2.935", key: "lre1cr" }],
  ["path", { d: "M22 14v-4", key: "14q9d5" }],
  ["path", { d: "M5.14 18H4a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h2.936", key: "13q5k0" }]
], ss = e("battery-charging", is);
const ys = [
  ["path", { d: "M10 10v4", key: "1mb2ec" }],
  ["path", { d: "M14 10v4", key: "1nt88p" }],
  ["path", { d: "M22 14v-4", key: "14q9d5" }],
  ["path", { d: "M6 10v4", key: "1n77qd" }],
  ["rect", { x: "2", y: "6", width: "16", height: "12", rx: "2", key: "13zb55" }]
], ps = e("battery-full", ys);
const ks = [
  ["path", { d: "M22 14v-4", key: "14q9d5" }],
  ["path", { d: "M6 14v-4", key: "14a6bd" }],
  ["rect", { x: "2", y: "6", width: "16", height: "12", rx: "2", key: "13zb55" }]
], ls = e("battery-low", ks);
const us = [
  ["path", { d: "M10 14v-4", key: "suye4c" }],
  ["path", { d: "M22 14v-4", key: "14q9d5" }],
  ["path", { d: "M6 14v-4", key: "14a6bd" }],
  ["rect", { x: "2", y: "6", width: "16", height: "12", rx: "2", key: "13zb55" }]
], Ms = e("battery-medium", us);
const fs = [
  ["path", { d: "M10 9v6", key: "17i7lo" }],
  ["path", { d: "M12.543 6H16a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-3.605", key: "o09yah" }],
  ["path", { d: "M22 14v-4", key: "14q9d5" }],
  ["path", { d: "M7 12h6", key: "iekk3h" }],
  ["path", { d: "M7.606 18H4a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h3.606", key: "xyqvf1" }]
], ms = e("battery-plus", fs);
const vs = [
  ["path", { d: "M10 17h.01", key: "nbq80n" }],
  ["path", { d: "M10 7v6", key: "nne03l" }],
  ["path", { d: "M14 6h2a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-2", key: "1m83kb" }],
  ["path", { d: "M22 14v-4", key: "14q9d5" }],
  ["path", { d: "M6 18H4a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h2", key: "h8lgfh" }]
], gs = e("battery-warning", vs);
const _s = [
  ["path", { d: "M4.5 3h15", key: "c7n0jr" }],
  ["path", { d: "M6 3v16a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V3", key: "m1uhx7" }],
  ["path", { d: "M6 14h12", key: "4cwo0f" }]
], xs = e("beaker", _s);
const bs = [
  ["path", { d: "M 22 14 L 22 10", key: "nqc4tb" }],
  ["rect", { x: "2", y: "6", width: "16", height: "12", rx: "2", key: "13zb55" }]
], ws = e("battery", bs);
const Ns = [
  [
    "path",
    {
      d: "M9 9c-.64.64-1.521.954-2.402 1.165A6 6 0 0 0 8 22a13.96 13.96 0 0 0 9.9-4.1",
      key: "bq3udt"
    }
  ],
  ["path", { d: "M10.75 5.093A6 6 0 0 1 22 8c0 2.411-.61 4.68-1.683 6.66", key: "17ccse" }],
  [
    "path",
    {
      d: "M5.341 10.62a4 4 0 0 0 6.487 1.208M10.62 5.341a4.015 4.015 0 0 1 2.039 2.04",
      key: "18zqgq"
    }
  ],
  ["line", { x1: "2", x2: "22", y1: "2", y2: "22", key: "a6p6uj" }]
], $s = e("bean-off", Ns);
const zs = [
  [
    "path",
    {
      d: "M10.165 6.598C9.954 7.478 9.64 8.36 9 9c-.64.64-1.521.954-2.402 1.165A6 6 0 0 0 8 22c7.732 0 14-6.268 14-14a6 6 0 0 0-11.835-1.402Z",
      key: "1tvzk7"
    }
  ],
  ["path", { d: "M5.341 10.62a4 4 0 1 0 5.279-5.28", key: "2cyri2" }]
], js = e("bean", zs);
const qs = [
  ["path", { d: "M2 20v-8a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v8", key: "1k78r4" }],
  ["path", { d: "M4 10V6a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v4", key: "fb3tl2" }],
  ["path", { d: "M12 4v6", key: "1dcgq2" }],
  ["path", { d: "M2 18h20", key: "ajqnye" }]
], As = e("bed-double", qs);
const Hs = [
  ["path", { d: "M3 20v-8a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v8", key: "1wm6mi" }],
  ["path", { d: "M5 10V6a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v4", key: "4k93s5" }],
  ["path", { d: "M3 18h18", key: "1h113x" }]
], Ss = e("bed-single", Hs);
const Cs = [
  ["path", { d: "M2 4v16", key: "vw9hq8" }],
  ["path", { d: "M2 8h18a2 2 0 0 1 2 2v10", key: "1dgv2r" }],
  ["path", { d: "M2 17h20", key: "18nfp3" }],
  ["path", { d: "M6 8v9", key: "1yriud" }]
], Vs = e("bed", Cs);
const Rs = [
  [
    "path",
    {
      d: "M16.4 13.7A6.5 6.5 0 1 0 6.28 6.6c-1.1 3.13-.78 3.9-3.18 6.08A3 3 0 0 0 5 18c4 0 8.4-1.8 11.4-4.3",
      key: "cisjcv"
    }
  ],
  [
    "path",
    {
      d: "m18.5 6 2.19 4.5a6.48 6.48 0 0 1-2.29 7.2C15.4 20.2 11 22 7 22a3 3 0 0 1-2.68-1.66L2.4 16.5",
      key: "5byaag"
    }
  ],
  ["circle", { cx: "12.5", cy: "8.5", r: "2.5", key: "9738u8" }]
], Es = e("beef", Rs);
const Ls = [
  ["path", { d: "M13 13v5", key: "igwfh0" }],
  ["path", { d: "M17 11.47V8", key: "16yw0g" }],
  ["path", { d: "M17 11h1a3 3 0 0 1 2.745 4.211", key: "1xbt65" }],
  ["path", { d: "m2 2 20 20", key: "1ooewy" }],
  ["path", { d: "M5 8v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2v-3", key: "c55o3e" }],
  [
    "path",
    { d: "M7.536 7.535C6.766 7.649 6.154 8 5.5 8a2.5 2.5 0 0 1-1.768-4.268", key: "1ydug7" }
  ],
  [
    "path",
    {
      d: "M8.727 3.204C9.306 2.767 9.885 2 11 2c1.56 0 2 1.5 3 1.5s1.72-.5 2.5-.5a1 1 0 1 1 0 5c-.78 0-1.5-.5-2.5-.5a3.149 3.149 0 0 0-.842.12",
      key: "q81o7q"
    }
  ],
  ["path", { d: "M9 14.6V18", key: "20ek98" }]
], Ps = e("beer-off", Ls);
const Ts = [
  ["path", { d: "M10.268 21a2 2 0 0 0 3.464 0", key: "vwvbt9" }],
  [
    "path",
    {
      d: "M13.916 2.314A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.74 7.327A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673 9 9 0 0 1-.585-.665",
      key: "1tip0g"
    }
  ],
  ["circle", { cx: "18", cy: "8", r: "3", key: "1g0gzu" }]
], Os = e("bell-dot", Ts);
const Ds = [
  ["path", { d: "M17 11h1a3 3 0 0 1 0 6h-1", key: "1yp76v" }],
  ["path", { d: "M9 12v6", key: "1u1cab" }],
  ["path", { d: "M13 12v6", key: "1sugkk" }],
  [
    "path",
    {
      d: "M14 7.5c-1 0-1.44.5-3 .5s-2-.5-3-.5-1.72.5-2.5.5a2.5 2.5 0 0 1 0-5c.78 0 1.57.5 2.5.5S9.44 2 11 2s2 1.5 3 1.5 1.72-.5 2.5-.5a2.5 2.5 0 0 1 0 5c-.78 0-1.5-.5-2.5-.5Z",
      key: "1510fo"
    }
  ],
  ["path", { d: "M5 8v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V8", key: "19jb7n" }]
], Is = e("beer", Ds);
const Fs = [
  ["path", { d: "M18.518 17.347A7 7 0 0 1 14 19", key: "1emhpo" }],
  ["path", { d: "M18.8 4A11 11 0 0 1 20 9", key: "127b67" }],
  ["path", { d: "M9 9h.01", key: "1q5me6" }],
  ["circle", { cx: "20", cy: "16", r: "2", key: "1v9bxh" }],
  ["circle", { cx: "9", cy: "9", r: "7", key: "p2h5vp" }],
  ["rect", { x: "4", y: "16", width: "10", height: "6", rx: "2", key: "bfnviv" }]
], Bs = e("bell-electric", Fs);
const Us = [
  ["path", { d: "M10.268 21a2 2 0 0 0 3.464 0", key: "vwvbt9" }],
  ["path", { d: "M15 8h6", key: "8ybuxh" }],
  [
    "path",
    {
      d: "M16.243 3.757A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673A9.4 9.4 0 0 1 18.667 12",
      key: "bdwj86"
    }
  ]
], Ws = e("bell-minus", Us);
const Zs = [
  ["path", { d: "M10.268 21a2 2 0 0 0 3.464 0", key: "vwvbt9" }],
  [
    "path",
    {
      d: "M17 17H4a1 1 0 0 1-.74-1.673C4.59 13.956 6 12.499 6 8a6 6 0 0 1 .258-1.742",
      key: "178tsu"
    }
  ],
  ["path", { d: "m2 2 20 20", key: "1ooewy" }],
  ["path", { d: "M8.668 3.01A6 6 0 0 1 18 8c0 2.687.77 4.653 1.707 6.05", key: "1hqiys" }]
], Gs = e("bell-off", Zs);
const Xs = [
  ["path", { d: "M10.268 21a2 2 0 0 0 3.464 0", key: "vwvbt9" }],
  ["path", { d: "M15 8h6", key: "8ybuxh" }],
  ["path", { d: "M18 5v6", key: "g5ayrv" }],
  [
    "path",
    {
      d: "M20.002 14.464a9 9 0 0 0 .738.863A1 1 0 0 1 20 17H4a1 1 0 0 1-.74-1.673C4.59 13.956 6 12.499 6 8a6 6 0 0 1 8.75-5.332",
      key: "1abcvy"
    }
  ]
], Ys = e("bell-plus", Xs);
const Ks = [
  ["path", { d: "M10.268 21a2 2 0 0 0 3.464 0", key: "vwvbt9" }],
  ["path", { d: "M22 8c0-2.3-.8-4.3-2-6", key: "5bb3ad" }],
  [
    "path",
    {
      d: "M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326",
      key: "11g9vi"
    }
  ],
  ["path", { d: "M4 2C2.8 3.7 2 5.7 2 8", key: "tap9e0" }]
], Qs = e("bell-ring", Ks);
const Js = [
  ["path", { d: "M10.268 21a2 2 0 0 0 3.464 0", key: "vwvbt9" }],
  [
    "path",
    {
      d: "M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326",
      key: "11g9vi"
    }
  ]
], ey = e("bell", Js);
const ty = [
  ["rect", { width: "13", height: "7", x: "3", y: "3", rx: "1", key: "11xb64" }],
  ["path", { d: "m22 15-3-3 3-3", key: "26chmm" }],
  ["rect", { width: "13", height: "7", x: "3", y: "14", rx: "1", key: "k6ky7n" }]
], ay = e("between-horizontal-end", ty);
const oy = [
  ["rect", { width: "13", height: "7", x: "8", y: "3", rx: "1", key: "pkso9a" }],
  ["path", { d: "m2 9 3 3-3 3", key: "1agib5" }],
  ["rect", { width: "13", height: "7", x: "8", y: "14", rx: "1", key: "1q5fc1" }]
], ny = e("between-horizontal-start", oy);
const cy = [
  ["rect", { width: "7", height: "13", x: "3", y: "3", rx: "1", key: "1fdu0f" }],
  ["path", { d: "m9 22 3-3 3 3", key: "17z65a" }],
  ["rect", { width: "7", height: "13", x: "14", y: "3", rx: "1", key: "1squn4" }]
], ry = e("between-vertical-end", cy);
const hy = [
  ["rect", { width: "7", height: "13", x: "3", y: "8", rx: "1", key: "1fjrkv" }],
  ["path", { d: "m15 2-3 3-3-3", key: "1uh6eb" }],
  ["rect", { width: "7", height: "13", x: "14", y: "8", rx: "1", key: "w3fjg8" }]
], dy = e("between-vertical-start", hy);
const iy = [
  [
    "path",
    {
      d: "M12.409 13.017A5 5 0 0 1 22 15c0 3.866-4 7-9 7-4.077 0-8.153-.82-10.371-2.462-.426-.316-.631-.832-.62-1.362C2.118 12.723 2.627 2 10 2a3 3 0 0 1 3 3 2 2 0 0 1-2 2c-1.105 0-1.64-.444-2-1",
      key: "1pmlyh"
    }
  ],
  ["path", { d: "M15 14a5 5 0 0 0-7.584 2", key: "5rb254" }],
  ["path", { d: "M9.964 6.825C8.019 7.977 9.5 13 8 15", key: "kbvsx9" }]
], sy = e("biceps-flexed", iy);
const yy = [
  ["circle", { cx: "18.5", cy: "17.5", r: "3.5", key: "15x4ox" }],
  ["circle", { cx: "5.5", cy: "17.5", r: "3.5", key: "1noe27" }],
  ["circle", { cx: "15", cy: "5", r: "1", key: "19l28e" }],
  ["path", { d: "M12 17.5V14l-3-3 4-3 2 3h2", key: "1npguv" }]
], py = e("bike", yy);
const ky = [
  ["rect", { x: "14", y: "14", width: "4", height: "6", rx: "2", key: "p02svl" }],
  ["rect", { x: "6", y: "4", width: "4", height: "6", rx: "2", key: "xm4xkj" }],
  ["path", { d: "M6 20h4", key: "1i6q5t" }],
  ["path", { d: "M14 10h4", key: "ru81e7" }],
  ["path", { d: "M6 14h2v6", key: "16z9wg" }],
  ["path", { d: "M14 4h2v6", key: "1idq9u" }]
], ly = e("binary", ky);
const uy = [
  ["path", { d: "M10 10h4", key: "tcdvrf" }],
  ["path", { d: "M19 7V4a1 1 0 0 0-1-1h-2a1 1 0 0 0-1 1v3", key: "3apit1" }],
  [
    "path",
    {
      d: "M20 21a2 2 0 0 0 2-2v-3.851c0-1.39-2-2.962-2-4.829V8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v11a2 2 0 0 0 2 2z",
      key: "rhpgnw"
    }
  ],
  ["path", { d: "M 22 16 L 2 16", key: "14lkq7" }],
  [
    "path",
    {
      d: "M4 21a2 2 0 0 1-2-2v-3.851c0-1.39 2-2.962 2-4.829V8a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v11a2 2 0 0 1-2 2z",
      key: "104b3k"
    }
  ],
  ["path", { d: "M9 7V4a1 1 0 0 0-1-1H6a1 1 0 0 0-1 1v3", key: "14fczp" }]
], My = e("binoculars", uy);
const fy = [
  ["circle", { cx: "12", cy: "11.9", r: "2", key: "e8h31w" }],
  ["path", { d: "M6.7 3.4c-.9 2.5 0 5.2 2.2 6.7C6.5 9 3.7 9.6 2 11.6", key: "17bolr" }],
  ["path", { d: "m8.9 10.1 1.4.8", key: "15ezny" }],
  ["path", { d: "M17.3 3.4c.9 2.5 0 5.2-2.2 6.7 2.4-1.2 5.2-.6 6.9 1.5", key: "wtwa5u" }],
  ["path", { d: "m15.1 10.1-1.4.8", key: "1r0b28" }],
  ["path", { d: "M16.7 20.8c-2.6-.4-4.6-2.6-4.7-5.3-.2 2.6-2.1 4.8-4.7 5.2", key: "m7qszh" }],
  ["path", { d: "M12 13.9v1.6", key: "zfyyim" }],
  ["path", { d: "M13.5 5.4c-1-.2-2-.2-3 0", key: "1bi9q0" }],
  ["path", { d: "M17 16.4c.7-.7 1.2-1.6 1.5-2.5", key: "1rhjqw" }],
  ["path", { d: "M5.5 13.9c.3.9.8 1.8 1.5 2.5", key: "8gsud3" }]
], my = e("biohazard", fy);
const vy = [
  ["path", { d: "M16 7h.01", key: "1kdx03" }],
  ["path", { d: "M3.4 18H12a8 8 0 0 0 8-8V7a4 4 0 0 0-7.28-2.3L2 20", key: "oj1oa8" }],
  ["path", { d: "m20 7 2 .5-2 .5", key: "12nv4d" }],
  ["path", { d: "M10 18v3", key: "1yea0a" }],
  ["path", { d: "M14 17.75V21", key: "1pymcb" }],
  ["path", { d: "M7 18a6 6 0 0 0 3.84-10.61", key: "1npnn0" }]
], gy = e("bird", vy);
const _y = [
  ["path", { d: "M12 18v4", key: "jadmvz" }],
  ["path", { d: "m17 18 1.956-11.468", key: "l5n2ro" }],
  ["path", { d: "m3 8 7.82-5.615a2 2 0 0 1 2.36 0L21 8", key: "1sy6n7" }],
  ["path", { d: "M4 18h16", key: "19g7jn" }],
  ["path", { d: "M7 18 5.044 6.532", key: "1uqdf2" }],
  ["circle", { cx: "12", cy: "10", r: "2", key: "1yojzk" }]
], xy = e("birdhouse", _y);
const by = [
  [
    "path",
    {
      d: "M11.767 19.089c4.924.868 6.14-6.025 1.216-6.894m-1.216 6.894L5.86 18.047m5.908 1.042-.347 1.97m1.563-8.864c4.924.869 6.14-6.025 1.215-6.893m-1.215 6.893-3.94-.694m5.155-6.2L8.29 4.26m5.908 1.042.348-1.97M7.48 20.364l3.126-17.727",
      key: "yr8idg"
    }
  ]
], wy = e("bitcoin", by);
const Ny = [
  ["circle", { cx: "9", cy: "9", r: "7", key: "p2h5vp" }],
  ["circle", { cx: "15", cy: "15", r: "7", key: "19ennj" }]
], $y = e("blend", Ny);
const zy = [
  ["path", { d: "M3 3h18", key: "o7r712" }],
  ["path", { d: "M20 7H8", key: "gd2fo2" }],
  ["path", { d: "M20 11H8", key: "1ynp89" }],
  ["path", { d: "M10 19h10", key: "19hjk5" }],
  ["path", { d: "M8 15h12", key: "1yqzne" }],
  ["path", { d: "M4 3v14", key: "fggqzn" }],
  ["circle", { cx: "4", cy: "19", r: "2", key: "p3m9r0" }]
], jy = e("blinds", zy);
const qy = [
  [
    "path",
    {
      d: "M10 22V7a1 1 0 0 0-1-1H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-5a1 1 0 0 0-1-1H2",
      key: "1ah6g2"
    }
  ],
  ["rect", { x: "14", y: "2", width: "8", height: "8", rx: "1", key: "88lufb" }]
], Ay = e("blocks", qy);
const Hy = [
  ["path", { d: "m7 7 10 10-5 5V2l5 5L7 17", key: "1q5490" }],
  ["line", { x1: "18", x2: "21", y1: "12", y2: "12", key: "1rsjjs" }],
  ["line", { x1: "3", x2: "6", y1: "12", y2: "12", key: "11yl8c" }]
], Sy = e("bluetooth-connected", Hy);
const Cy = [
  ["path", { d: "m17 17-5 5V12l-5 5", key: "v5aci6" }],
  ["path", { d: "m2 2 20 20", key: "1ooewy" }],
  ["path", { d: "M14.5 9.5 17 7l-5-5v4.5", key: "1kddfz" }]
], Vy = e("bluetooth-off", Cy);
const Ry = [
  ["path", { d: "m7 7 10 10-5 5V2l5 5L7 17", key: "1q5490" }],
  ["path", { d: "M20.83 14.83a4 4 0 0 0 0-5.66", key: "k8tn1j" }],
  ["path", { d: "M18 12h.01", key: "yjnet6" }]
], Ey = e("bluetooth-searching", Ry);
const Ly = [
  [
    "path",
    { d: "M6 12h9a4 4 0 0 1 0 8H7a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1h7a4 4 0 0 1 0 8", key: "mg9rjx" }
  ]
], Py = e("bold", Ly);
const Ty = [["path", { d: "m7 7 10 10-5 5V2l5 5L7 17", key: "1q5490" }]], Oy = e("bluetooth", Ty);
const Dy = [
  [
    "path",
    {
      d: "M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z",
      key: "yt0hxn"
    }
  ],
  ["circle", { cx: "12", cy: "12", r: "4", key: "4exip2" }]
], Iy = e("bolt", Dy);
const Fy = [
  [
    "path",
    {
      d: "M17 10c.7-.7 1.69 0 2.5 0a2.5 2.5 0 1 0 0-5 .5.5 0 0 1-.5-.5 2.5 2.5 0 1 0-5 0c0 .81.7 1.8 0 2.5l-7 7c-.7.7-1.69 0-2.5 0a2.5 2.5 0 0 0 0 5c.28 0 .5.22.5.5a2.5 2.5 0 1 0 5 0c0-.81-.7-1.8 0-2.5Z",
      key: "w610uw"
    }
  ]
], By = e("bone", Fy);
const Uy = [
  ["circle", { cx: "11", cy: "13", r: "9", key: "hd149" }],
  [
    "path",
    {
      d: "M14.35 4.65 16.3 2.7a2.41 2.41 0 0 1 3.4 0l1.6 1.6a2.4 2.4 0 0 1 0 3.4l-1.95 1.95",
      key: "jp4j1b"
    }
  ],
  ["path", { d: "m22 2-1.5 1.5", key: "ay92ug" }]
], Wy = e("bomb", Uy);
const Zy = [
  [
    "path",
    {
      d: "M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20",
      key: "k3hazp"
    }
  ],
  ["path", { d: "m8 13 4-7 4 7", key: "4rari8" }],
  ["path", { d: "M9.1 11h5.7", key: "1gkovt" }]
], Gy = e("book-a", Zy);
const Xy = [
  ["path", { d: "M12 13h.01", key: "y0uutt" }],
  ["path", { d: "M12 6v3", key: "1m4b9j" }],
  [
    "path",
    {
      d: "M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20",
      key: "k3hazp"
    }
  ]
], Yy = e("book-alert", Xy);
const Ky = [
  ["path", { d: "M12 6v7", key: "1f6ttz" }],
  ["path", { d: "M16 8v3", key: "gejaml" }],
  [
    "path",
    {
      d: "M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20",
      key: "k3hazp"
    }
  ],
  ["path", { d: "M8 8v3", key: "1qzp49" }]
], Qy = e("book-audio", Ky);
const Jy = [
  [
    "path",
    {
      d: "M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20",
      key: "k3hazp"
    }
  ],
  ["path", { d: "m9 9.5 2 2 4-4", key: "1dth82" }]
], ep = e("book-check", Jy);
const tp = [
  ["path", { d: "M5 7a2 2 0 0 0-2 2v11", key: "1yhqjt" }],
  ["path", { d: "M5.803 18H5a2 2 0 0 0 0 4h9.5a.5.5 0 0 0 .5-.5V21", key: "edzzo5" }],
  [
    "path",
    {
      d: "M9 15V4a2 2 0 0 1 2-2h9.5a.5.5 0 0 1 .5.5v14a.5.5 0 0 1-.5.5H11a2 2 0 0 1 0-4h10",
      key: "1nwzrg"
    }
  ]
], ap = e("book-copy", tp);
const op = [
  ["path", { d: "M12 17h1.5", key: "1gkc67" }],
  ["path", { d: "M12 22h1.5", key: "1my7sn" }],
  ["path", { d: "M12 2h1.5", key: "19tvb7" }],
  ["path", { d: "M17.5 22H19a1 1 0 0 0 1-1", key: "10akbh" }],
  ["path", { d: "M17.5 2H19a1 1 0 0 1 1 1v1.5", key: "1vrfjs" }],
  ["path", { d: "M20 14v3h-2.5", key: "1naeju" }],
  ["path", { d: "M20 8.5V10", key: "1ctpfu" }],
  ["path", { d: "M4 10V8.5", key: "1o3zg5" }],
  ["path", { d: "M4 19.5V14", key: "ob81pf" }],
  ["path", { d: "M4 4.5A2.5 2.5 0 0 1 6.5 2H8", key: "s8vcyb" }],
  ["path", { d: "M8 22H6.5a1 1 0 0 1 0-5H8", key: "1cu73q" }]
], np = e("book-dashed", op);
const cp = [
  ["path", { d: "M12 13V7", key: "h0r20n" }],
  [
    "path",
    {
      d: "M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20",
      key: "k3hazp"
    }
  ],
  ["path", { d: "m9 10 3 3 3-3", key: "zt5b4y" }]
], rp = e("book-down", cp);
const hp = [
  [
    "path",
    {
      d: "M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20",
      key: "k3hazp"
    }
  ],
  ["path", { d: "M8 12v-2a4 4 0 0 1 8 0v2", key: "1vsqkj" }],
  ["circle", { cx: "15", cy: "12", r: "1", key: "1tmaij" }],
  ["circle", { cx: "9", cy: "12", r: "1", key: "1vctgf" }]
], dp = e("book-headphones", hp);
const ip = [
  [
    "path",
    {
      d: "M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20",
      key: "k3hazp"
    }
  ],
  [
    "path",
    {
      d: "M8.62 9.8A2.25 2.25 0 1 1 12 6.836a2.25 2.25 0 1 1 3.38 2.966l-2.626 2.856a.998.998 0 0 1-1.507 0z",
      key: "9v40y5"
    }
  ]
], sp = e("book-heart", ip);
const yp = [
  ["path", { d: "m20 13.7-2.1-2.1a2 2 0 0 0-2.8 0L9.7 17", key: "q6ojf0" }],
  [
    "path",
    {
      d: "M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20",
      key: "k3hazp"
    }
  ],
  ["circle", { cx: "10", cy: "8", r: "2", key: "2qkj4p" }]
], pp = e("book-image", yp);
const kp = [
  ["path", { d: "m19 3 1 1", key: "ze14oc" }],
  ["path", { d: "m20 2-4.5 4.5", key: "1sppr8" }],
  ["path", { d: "M20 7.898V21a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20", key: "1xzogz" }],
  ["path", { d: "M4 19.5v-15A2.5 2.5 0 0 1 6.5 2h7.844", key: "vtdg6h" }],
  ["circle", { cx: "14", cy: "8", r: "2", key: "u49eql" }]
], lp = e("book-key", kp);
const up = [
  ["path", { d: "M18 6V4a2 2 0 1 0-4 0v2", key: "1aquzs" }],
  ["path", { d: "M20 15v6a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20", key: "1rkj32" }],
  ["path", { d: "M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H10", key: "18wgow" }],
  ["rect", { x: "12", y: "6", width: "8", height: "5", rx: "1", key: "73l30o" }]
], Mp = e("book-lock", up);
const fp = [
  [
    "path",
    {
      d: "M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20",
      key: "k3hazp"
    }
  ],
  ["path", { d: "M9 10h6", key: "9gxzsh" }]
], mp = e("book-minus", fp);
const vp = [
  ["path", { d: "M10 2v8l3-3 3 3V2", key: "sqw3rj" }],
  [
    "path",
    {
      d: "M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20",
      key: "k3hazp"
    }
  ]
], gp = e("book-marked", vp);
const _p = [
  ["path", { d: "M12 21V7", key: "gj6g52" }],
  ["path", { d: "m16 12 2 2 4-4", key: "mdajum" }],
  [
    "path",
    {
      d: "M22 6V4a1 1 0 0 0-1-1h-5a4 4 0 0 0-4 4 4 4 0 0 0-4-4H3a1 1 0 0 0-1 1v13a1 1 0 0 0 1 1h6a3 3 0 0 1 3 3 3 3 0 0 1 3-3h6a1 1 0 0 0 1-1v-1.3",
      key: "8arnkb"
    }
  ]
], xp = e("book-open-check", _p);
const bp = [
  ["path", { d: "M12 7v14", key: "1akyts" }],
  [
    "path",
    {
      d: "M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z",
      key: "ruj8y"
    }
  ]
], wp = e("book-open", bp);
const Np = [
  ["path", { d: "M12 7v14", key: "1akyts" }],
  ["path", { d: "M16 12h2", key: "7q9ll5" }],
  ["path", { d: "M16 8h2", key: "msurwy" }],
  [
    "path",
    {
      d: "M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z",
      key: "ruj8y"
    }
  ],
  ["path", { d: "M6 12h2", key: "32wvfc" }],
  ["path", { d: "M6 8h2", key: "30oboj" }]
], $p = e("book-open-text", Np);
const zp = [
  ["path", { d: "M12 7v6", key: "lw1j43" }],
  [
    "path",
    {
      d: "M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20",
      key: "k3hazp"
    }
  ],
  ["path", { d: "M9 10h6", key: "9gxzsh" }]
], jp = e("book-plus", zp);
const qp = [
  ["path", { d: "M11 22H5.5a1 1 0 0 1 0-5h4.501", key: "mcbepb" }],
  ["path", { d: "m21 22-1.879-1.878", key: "12q7x1" }],
  ["path", { d: "M3 19.5v-15A2.5 2.5 0 0 1 5.5 2H18a1 1 0 0 1 1 1v8", key: "olfd5n" }],
  ["circle", { cx: "17", cy: "18", r: "3", key: "82mm0e" }]
], Ap = e("book-search", qp);
const Hp = [
  [
    "path",
    {
      d: "M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20",
      key: "k3hazp"
    }
  ],
  ["path", { d: "M8 11h8", key: "vwpz6n" }],
  ["path", { d: "M8 7h6", key: "1f0q6e" }]
], Sp = e("book-text", Hp);
const Cp = [
  ["path", { d: "M10 13h4", key: "ytezjc" }],
  ["path", { d: "M12 6v7", key: "1f6ttz" }],
  ["path", { d: "M16 8V6H8v2", key: "x8j6u4" }],
  [
    "path",
    {
      d: "M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20",
      key: "k3hazp"
    }
  ]
], Vp = e("book-type", Cp);
const Rp = [
  ["path", { d: "M12 13V7", key: "h0r20n" }],
  ["path", { d: "M18 2h1a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20", key: "161d7n" }],
  ["path", { d: "M4 19.5v-15A2.5 2.5 0 0 1 6.5 2", key: "1lorq7" }],
  ["path", { d: "m9 10 3-3 3 3", key: "11gsxs" }],
  ["path", { d: "m9 5 3-3 3 3", key: "l8vdw6" }]
], Ep = e("book-up-2", Rp);
const Lp = [
  ["path", { d: "M12 13V7", key: "h0r20n" }],
  [
    "path",
    {
      d: "M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20",
      key: "k3hazp"
    }
  ],
  ["path", { d: "m9 10 3-3 3 3", key: "11gsxs" }]
], Pp = e("book-up", Lp);
const Tp = [
  ["path", { d: "M15 13a3 3 0 1 0-6 0", key: "10j68g" }],
  [
    "path",
    {
      d: "M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20",
      key: "k3hazp"
    }
  ],
  ["circle", { cx: "12", cy: "8", r: "2", key: "1822b1" }]
], Op = e("book-user", Tp);
const Dp = [
  ["path", { d: "m14.5 7-5 5", key: "dy991v" }],
  [
    "path",
    {
      d: "M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20",
      key: "k3hazp"
    }
  ],
  ["path", { d: "m9.5 7 5 5", key: "s45iea" }]
], Ip = e("book-x", Dp);
const Fp = [
  [
    "path",
    {
      d: "M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20",
      key: "k3hazp"
    }
  ]
], Bp = e("book", Fp);
const Up = [
  [
    "path",
    {
      d: "M17 3a2 2 0 0 1 2 2v15a1 1 0 0 1-1.496.868l-4.512-2.578a2 2 0 0 0-1.984 0l-4.512 2.578A1 1 0 0 1 5 20V5a2 2 0 0 1 2-2z",
      key: "oz39mx"
    }
  ],
  ["path", { d: "m9 10 2 2 4-4", key: "1gnqz4" }]
], Wp = e("bookmark-check", Up);
const Zp = [
  ["path", { d: "M15 10H9", key: "o6yqo3" }],
  [
    "path",
    {
      d: "M17 3a2 2 0 0 1 2 2v15a1 1 0 0 1-1.496.868l-4.512-2.578a2 2 0 0 0-1.984 0l-4.512 2.578A1 1 0 0 1 5 20V5a2 2 0 0 1 2-2z",
      key: "oz39mx"
    }
  ]
], Gp = e("bookmark-minus", Zp);
const Xp = [
  ["path", { d: "M12 7v6", key: "lw1j43" }],
  ["path", { d: "M15 10H9", key: "o6yqo3" }],
  [
    "path",
    {
      d: "M17 3a2 2 0 0 1 2 2v15a1 1 0 0 1-1.496.868l-4.512-2.578a2 2 0 0 0-1.984 0l-4.512 2.578A1 1 0 0 1 5 20V5a2 2 0 0 1 2-2z",
      key: "oz39mx"
    }
  ]
], Yp = e("bookmark-plus", Xp);
const Kp = [
  ["path", { d: "m14.5 7.5-5 5", key: "3lb6iw" }],
  [
    "path",
    {
      d: "M17 3a2 2 0 0 1 2 2v15a1 1 0 0 1-1.496.868l-4.512-2.578a2 2 0 0 0-1.984 0l-4.512 2.578A1 1 0 0 1 5 20V5a2 2 0 0 1 2-2z",
      key: "oz39mx"
    }
  ],
  ["path", { d: "m9.5 7.5 5 5", key: "ko136h" }]
], Qp = e("bookmark-x", Kp);
const Jp = [
  [
    "path",
    {
      d: "M17 3a2 2 0 0 1 2 2v15a1 1 0 0 1-1.496.868l-4.512-2.578a2 2 0 0 0-1.984 0l-4.512 2.578A1 1 0 0 1 5 20V5a2 2 0 0 1 2-2z",
      key: "oz39mx"
    }
  ]
], e4 = e("bookmark", Jp);
const t4 = [
  ["path", { d: "M4 9V5a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v4", key: "vvzvr1" }],
  ["path", { d: "M8 8v1", key: "xcqmfk" }],
  ["path", { d: "M12 8v1", key: "1rj8u4" }],
  ["path", { d: "M16 8v1", key: "1q12zr" }],
  ["rect", { width: "20", height: "12", x: "2", y: "9", rx: "2", key: "igpb89" }],
  ["circle", { cx: "8", cy: "15", r: "2", key: "fa4a8s" }],
  ["circle", { cx: "16", cy: "15", r: "2", key: "14c3ya" }]
], a4 = e("boom-box", t4);
const o4 = [
  ["path", { d: "M12 6V2H8", key: "1155em" }],
  ["path", { d: "M15 11v2", key: "i11awn" }],
  ["path", { d: "M2 12h2", key: "1t8f8n" }],
  ["path", { d: "M20 12h2", key: "1q8mjw" }],
  [
    "path",
    {
      d: "M20 16a2 2 0 0 1-2 2H8.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 4 20.286V8a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2z",
      key: "11gyqh"
    }
  ],
  ["path", { d: "M9 11v2", key: "1ueba0" }]
], n4 = e("bot-message-square", o4);
const c4 = [
  ["path", { d: "M13.67 8H18a2 2 0 0 1 2 2v4.33", key: "7az073" }],
  ["path", { d: "M2 14h2", key: "vft8re" }],
  ["path", { d: "M20 14h2", key: "4cs60a" }],
  ["path", { d: "M22 22 2 2", key: "1r8tn9" }],
  ["path", { d: "M8 8H6a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h12a2 2 0 0 0 1.414-.586", key: "s09a7a" }],
  ["path", { d: "M9 13v2", key: "rq6x2g" }],
  ["path", { d: "M9.67 4H12v2.33", key: "110xot" }]
], r4 = e("bot-off", c4);
const h4 = [
  ["path", { d: "M12 8V4H8", key: "hb8ula" }],
  ["rect", { width: "16", height: "12", x: "4", y: "8", rx: "2", key: "enze0r" }],
  ["path", { d: "M2 14h2", key: "vft8re" }],
  ["path", { d: "M20 14h2", key: "4cs60a" }],
  ["path", { d: "M15 13v2", key: "1xurst" }],
  ["path", { d: "M9 13v2", key: "rq6x2g" }]
], d4 = e("bot", h4);
const i4 = [
  ["path", { d: "M17 3h4v4", key: "19p9u1" }],
  [
    "path",
    { d: "M18.575 11.082a13 13 0 0 1 1.048 9.027 1.17 1.17 0 0 1-1.914.597L14 17", key: "12t3w9" }
  ],
  ["path", { d: "M7 10 3.29 6.29a1.17 1.17 0 0 1 .6-1.91 13 13 0 0 1 9.03 1.05", key: "ogng5l" }],
  [
    "path",
    {
      d: "M7 14a1.7 1.7 0 0 0-1.207.5l-2.646 2.646A.5.5 0 0 0 3.5 18H5a1 1 0 0 1 1 1v1.5a.5.5 0 0 0 .854.354L9.5 18.207A1.7 1.7 0 0 0 10 17v-2a1 1 0 0 0-1-1z",
      key: "8v3fy2"
    }
  ],
  ["path", { d: "M9.707 14.293 21 3", key: "ydm3bn" }]
], s4 = e("bow-arrow", i4);
const y4 = [
  [
    "path",
    {
      d: "M10 3a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a6 6 0 0 0 1.2 3.6l.6.8A6 6 0 0 1 17 13v8a1 1 0 0 1-1 1H8a1 1 0 0 1-1-1v-8a6 6 0 0 1 1.2-3.6l.6-.8A6 6 0 0 0 10 5z",
      key: "blqgoc"
    }
  ],
  ["path", { d: "M17 13h-4a1 1 0 0 0-1 1v3a1 1 0 0 0 1 1h4", key: "43jbee" }]
], p4 = e("bottle-wine", y4);
const k4 = [
  [
    "path",
    {
      d: "M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z",
      key: "hh9hay"
    }
  ],
  ["path", { d: "m3.3 7 8.7 5 8.7-5", key: "g66t2b" }],
  ["path", { d: "M12 22V12", key: "d0xqtd" }]
], l4 = e("box", k4);
const u4 = [
  [
    "path",
    {
      d: "M2.97 12.92A2 2 0 0 0 2 14.63v3.24a2 2 0 0 0 .97 1.71l3 1.8a2 2 0 0 0 2.06 0L12 19v-5.5l-5-3-4.03 2.42Z",
      key: "lc1i9w"
    }
  ],
  ["path", { d: "m7 16.5-4.74-2.85", key: "1o9zyk" }],
  ["path", { d: "m7 16.5 5-3", key: "va8pkn" }],
  ["path", { d: "M7 16.5v5.17", key: "jnp8gn" }],
  [
    "path",
    {
      d: "M12 13.5V19l3.97 2.38a2 2 0 0 0 2.06 0l3-1.8a2 2 0 0 0 .97-1.71v-3.24a2 2 0 0 0-.97-1.71L17 10.5l-5 3Z",
      key: "8zsnat"
    }
  ],
  ["path", { d: "m17 16.5-5-3", key: "8arw3v" }],
  ["path", { d: "m17 16.5 4.74-2.85", key: "8rfmw" }],
  ["path", { d: "M17 16.5v5.17", key: "k6z78m" }],
  [
    "path",
    {
      d: "M7.97 4.42A2 2 0 0 0 7 6.13v4.37l5 3 5-3V6.13a2 2 0 0 0-.97-1.71l-3-1.8a2 2 0 0 0-2.06 0l-3 1.8Z",
      key: "1xygjf"
    }
  ],
  ["path", { d: "M12 8 7.26 5.15", key: "1vbdud" }],
  ["path", { d: "m12 8 4.74-2.85", key: "3rx089" }],
  ["path", { d: "M12 13.5V8", key: "1io7kd" }]
], M4 = e("boxes", u4);
const f4 = [
  [
    "path",
    { d: "M8 3H7a2 2 0 0 0-2 2v5a2 2 0 0 1-2 2 2 2 0 0 1 2 2v5c0 1.1.9 2 2 2h1", key: "ezmyqa" }
  ],
  [
    "path",
    {
      d: "M16 21h1a2 2 0 0 0 2-2v-5c0-1.1.9-2 2-2a2 2 0 0 1-2-2V5a2 2 0 0 0-2-2h-1",
      key: "e1hn23"
    }
  ]
], m4 = e("braces", f4);
const v4 = [
  ["path", { d: "M16 3h3a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1h-3", key: "1kt8lf" }],
  ["path", { d: "M8 21H5a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h3", key: "gduv9" }]
], g4 = e("brackets", v4);
const _4 = [
  [
    "path",
    {
      d: "M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z",
      key: "l5xja"
    }
  ],
  ["path", { d: "M9 13a4.5 4.5 0 0 0 3-4", key: "10igwf" }],
  ["path", { d: "M6.003 5.125A3 3 0 0 0 6.401 6.5", key: "105sqy" }],
  ["path", { d: "M3.477 10.896a4 4 0 0 1 .585-.396", key: "ql3yin" }],
  ["path", { d: "M6 18a4 4 0 0 1-1.967-.516", key: "2e4loj" }],
  ["path", { d: "M12 13h4", key: "1ku699" }],
  ["path", { d: "M12 18h6a2 2 0 0 1 2 2v1", key: "105ag5" }],
  ["path", { d: "M12 8h8", key: "1lhi5i" }],
  ["path", { d: "M16 8V5a2 2 0 0 1 2-2", key: "u6izg6" }],
  ["circle", { cx: "16", cy: "13", r: ".5", key: "ry7gng" }],
  ["circle", { cx: "18", cy: "3", r: ".5", key: "1aiba7" }],
  ["circle", { cx: "20", cy: "21", r: ".5", key: "yhc1fs" }],
  ["circle", { cx: "20", cy: "8", r: ".5", key: "1e43v0" }]
], x4 = e("brain-circuit", _4);
const b4 = [
  ["path", { d: "m10.852 14.772-.383.923", key: "11vil6" }],
  ["path", { d: "m10.852 9.228-.383-.923", key: "1fjppe" }],
  ["path", { d: "m13.148 14.772.382.924", key: "je3va1" }],
  ["path", { d: "m13.531 8.305-.383.923", key: "18epck" }],
  ["path", { d: "m14.772 10.852.923-.383", key: "k9m8cz" }],
  ["path", { d: "m14.772 13.148.923.383", key: "1xvhww" }],
  [
    "path",
    {
      d: "M17.598 6.5A3 3 0 1 0 12 5a3 3 0 0 0-5.63-1.446 3 3 0 0 0-.368 1.571 4 4 0 0 0-2.525 5.771",
      key: "jcbbz1"
    }
  ],
  ["path", { d: "M17.998 5.125a4 4 0 0 1 2.525 5.771", key: "1kkn7e" }],
  ["path", { d: "M19.505 10.294a4 4 0 0 1-1.5 7.706", key: "18bmuc" }],
  [
    "path",
    {
      d: "M4.032 17.483A4 4 0 0 0 11.464 20c.18-.311.892-.311 1.072 0a4 4 0 0 0 7.432-2.516",
      key: "uozx0d"
    }
  ],
  ["path", { d: "M4.5 10.291A4 4 0 0 0 6 18", key: "whdemb" }],
  ["path", { d: "M6.002 5.125a3 3 0 0 0 .4 1.375", key: "1kqy2g" }],
  ["path", { d: "m9.228 10.852-.923-.383", key: "1wtb30" }],
  ["path", { d: "m9.228 13.148-.923.383", key: "1a830x" }],
  ["circle", { cx: "12", cy: "12", r: "3", key: "1v7zrd" }]
], w4 = e("brain-cog", b4);
const N4 = [
  ["path", { d: "M12 18V5", key: "adv99a" }],
  ["path", { d: "M15 13a4.17 4.17 0 0 1-3-4 4.17 4.17 0 0 1-3 4", key: "1e3is1" }],
  ["path", { d: "M17.598 6.5A3 3 0 1 0 12 5a3 3 0 1 0-5.598 1.5", key: "1gqd8o" }],
  ["path", { d: "M17.997 5.125a4 4 0 0 1 2.526 5.77", key: "iwvgf7" }],
  ["path", { d: "M18 18a4 4 0 0 0 2-7.464", key: "efp6ie" }],
  ["path", { d: "M19.967 17.483A4 4 0 1 1 12 18a4 4 0 1 1-7.967-.517", key: "1gq6am" }],
  ["path", { d: "M6 18a4 4 0 0 1-2-7.464", key: "k1g0md" }],
  ["path", { d: "M6.003 5.125a4 4 0 0 0-2.526 5.77", key: "q97ue3" }]
], $4 = e("brain", N4);
const z4 = [
  ["path", { d: "M16 3v2.107", key: "gq8xun" }],
  [
    "path",
    {
      d: "M17 9c1 3 2.5 3.5 3.5 4.5A5 5 0 0 1 22 17a5 5 0 0 1-10 0c0-.3 0-.6.1-.9a2 2 0 1 0 3.3-2C13 11.5 16 9 17 9",
      key: "1l2pih"
    }
  ],
  [
    "path",
    { d: "M21 8.274V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h3.938", key: "jrnqjp" }
  ],
  ["path", { d: "M3 15h5.253", key: "xqg7rb" }],
  ["path", { d: "M3 9h8.228", key: "1ppb70" }],
  ["path", { d: "M8 15v6", key: "1stoo3" }],
  ["path", { d: "M8 3v6", key: "vlvjmk" }]
], j4 = e("brick-wall-fire", z4);
const q4 = [
  ["path", { d: "M12 9v1.258", key: "iwpddn" }],
  ["path", { d: "M16 3v5.46", key: "d7ew98" }],
  ["path", { d: "M21 9.118V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h5.75", key: "137t5x" }],
  [
    "path",
    {
      d: "M22 17.5c0 2.499-1.75 3.749-3.83 4.474a.5.5 0 0 1-.335-.005c-2.085-.72-3.835-1.97-3.835-4.47V14a.5.5 0 0 1 .5-.499c1 0 2.25-.6 3.12-1.36a.6.6 0 0 1 .76-.001c.875.765 2.12 1.36 3.12 1.36a.5.5 0 0 1 .5.5z",
      key: "16j3tf"
    }
  ],
  ["path", { d: "M3 15h7", key: "1qldh6" }],
  ["path", { d: "M3 9h12.142", key: "1yjd6m" }],
  ["path", { d: "M8 15v6", key: "1stoo3" }],
  ["path", { d: "M8 3v6", key: "vlvjmk" }]
], A4 = e("brick-wall-shield", q4);
const H4 = [
  ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", key: "afitv7" }],
  ["path", { d: "M12 9v6", key: "199k2o" }],
  ["path", { d: "M16 15v6", key: "8rj2es" }],
  ["path", { d: "M16 3v6", key: "1j6rpj" }],
  ["path", { d: "M3 15h18", key: "5xshup" }],
  ["path", { d: "M3 9h18", key: "1pudct" }],
  ["path", { d: "M8 15v6", key: "1stoo3" }],
  ["path", { d: "M8 3v6", key: "vlvjmk" }]
], S4 = e("brick-wall", H4);
const C4 = [
  ["path", { d: "M12 12h.01", key: "1mp3jc" }],
  ["path", { d: "M16 6V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2", key: "1ksdt3" }],
  ["path", { d: "M22 13a18.15 18.15 0 0 1-20 0", key: "12hx5q" }],
  ["rect", { width: "20", height: "14", x: "2", y: "6", rx: "2", key: "i6l2r4" }]
], V4 = e("briefcase-business", C4);
const R4 = [
  ["path", { d: "M10 20v2", key: "1n8e1g" }],
  ["path", { d: "M14 20v2", key: "1lq872" }],
  ["path", { d: "M18 20v2", key: "10uadw" }],
  ["path", { d: "M21 20H3", key: "kdqkdp" }],
  ["path", { d: "M6 20v2", key: "a9bc87" }],
  ["path", { d: "M8 16V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v12", key: "17n9tx" }],
  ["rect", { x: "4", y: "6", width: "16", height: "10", rx: "2", key: "1097i5" }]
], E4 = e("briefcase-conveyor-belt", R4);
const L4 = [
  ["path", { d: "M12 11v4", key: "a6ujw6" }],
  ["path", { d: "M14 13h-4", key: "1pl8zg" }],
  ["path", { d: "M16 6V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2", key: "1ksdt3" }],
  ["path", { d: "M18 6v14", key: "1mu4gy" }],
  ["path", { d: "M6 6v14", key: "1s15cj" }],
  ["rect", { width: "20", height: "14", x: "2", y: "6", rx: "2", key: "i6l2r4" }]
], P4 = e("briefcase-medical", L4);
const T4 = [
  ["path", { d: "M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16", key: "jecpp" }],
  ["rect", { width: "20", height: "14", x: "2", y: "6", rx: "2", key: "i6l2r4" }]
], O4 = e("briefcase", T4);
const D4 = [
  ["rect", { x: "8", y: "8", width: "8", height: "8", rx: "2", key: "yj20xf" }],
  ["path", { d: "M4 10a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2", key: "1ltk23" }],
  ["path", { d: "M14 20a2 2 0 0 0 2 2h4a2 2 0 0 0 2-2v-4a2 2 0 0 0-2-2", key: "1q24h9" }]
], I4 = e("bring-to-front", D4);
const F4 = [
  ["path", { d: "m11 10 3 3", key: "fzmg1i" }],
  [
    "path",
    { d: "M6.5 21A3.5 3.5 0 1 0 3 17.5a2.62 2.62 0 0 1-.708 1.792A1 1 0 0 0 3 21z", key: "p4q2r7" }
  ],
  ["path", { d: "M9.969 17.031 21.378 5.624a1 1 0 0 0-3.002-3.002L6.967 14.031", key: "wy6l02" }]
], B4 = e("brush", F4);
const U4 = [
  ["path", { d: "m16 22-1-4", key: "1ow2iv" }],
  [
    "path",
    {
      d: "M19 14a1 1 0 0 0 1-1v-1a2 2 0 0 0-2-2h-3a1 1 0 0 1-1-1V4a2 2 0 0 0-4 0v5a1 1 0 0 1-1 1H6a2 2 0 0 0-2 2v1a1 1 0 0 0 1 1",
      key: "11gii7"
    }
  ],
  ["path", { d: "M19 14H5l-1.973 6.767A1 1 0 0 0 4 22h16a1 1 0 0 0 .973-1.233z", key: "bju7h4" }],
  ["path", { d: "m8 22 1-4", key: "s3unb" }]
], W4 = e("brush-cleaning", U4);
const Z4 = [
  ["path", { d: "M7.001 15.085A1.5 1.5 0 0 1 9 16.5", key: "y44lvh" }],
  ["circle", { cx: "18.5", cy: "8.5", r: "3.5", key: "1wadoa" }],
  ["circle", { cx: "7.5", cy: "16.5", r: "5.5", key: "6mdt3g" }],
  ["circle", { cx: "7.5", cy: "4.5", r: "2.5", key: "637s54" }]
], G4 = e("bubbles", Z4);
const X4 = [
  ["path", { d: "M12 20v-8", key: "i3yub9" }],
  ["path", { d: "M14.12 3.88 16 2", key: "qol33r" }],
  ["path", { d: "M15 7.13V6a3 3 0 0 0-5.14-2.1L8 2", key: "vl8zik" }],
  ["path", { d: "M18 12.34V11a4 4 0 0 0-4-4h-1.3", key: "sz915m" }],
  ["path", { d: "m2 2 20 20", key: "1ooewy" }],
  ["path", { d: "M21 5a4 4 0 0 1-3.55 3.97", key: "5cxbf6" }],
  ["path", { d: "M22 13h-3.34", key: "1y15gv" }],
  ["path", { d: "M3 21a4 4 0 0 1 3.81-4", key: "1fjd4g" }],
  ["path", { d: "M6 13H2", key: "82j7cp" }],
  ["path", { d: "M7.7 7.7A4 4 0 0 0 6 11v3a6 6 0 0 0 11.13 3.13", key: "1njkjs" }]
], Y4 = e("bug-off", X4);
const K4 = [
  ["path", { d: "M10 19.655A6 6 0 0 1 6 14v-3a4 4 0 0 1 4-4h4a4 4 0 0 1 4 3.97", key: "1gnv52" }],
  [
    "path",
    {
      d: "M14 15.003a1 1 0 0 1 1.517-.859l4.997 2.997a1 1 0 0 1 0 1.718l-4.997 2.997a1 1 0 0 1-1.517-.86z",
      key: "1weqy9"
    }
  ],
  ["path", { d: "M14.12 3.88 16 2", key: "qol33r" }],
  ["path", { d: "M21 5a4 4 0 0 1-3.55 3.97", key: "5cxbf6" }],
  ["path", { d: "M3 21a4 4 0 0 1 3.81-4", key: "1fjd4g" }],
  ["path", { d: "M3 5a4 4 0 0 0 3.55 3.97", key: "1d7oge" }],
  ["path", { d: "M6 13H2", key: "82j7cp" }],
  ["path", { d: "m8 2 1.88 1.88", key: "fmnt4t" }],
  ["path", { d: "M9 7.13V6a3 3 0 1 1 6 0v1.13", key: "1vgav8" }]
], Q4 = e("bug-play", K4);
const J4 = [
  ["path", { d: "M12 20v-9", key: "1qisl0" }],
  ["path", { d: "M14 7a4 4 0 0 1 4 4v3a6 6 0 0 1-12 0v-3a4 4 0 0 1 4-4z", key: "uouzyp" }],
  ["path", { d: "M14.12 3.88 16 2", key: "qol33r" }],
  ["path", { d: "M21 21a4 4 0 0 0-3.81-4", key: "1b0z45" }],
  ["path", { d: "M21 5a4 4 0 0 1-3.55 3.97", key: "5cxbf6" }],
  ["path", { d: "M22 13h-4", key: "1jl80f" }],
  ["path", { d: "M3 21a4 4 0 0 1 3.81-4", key: "1fjd4g" }],
  ["path", { d: "M3 5a4 4 0 0 0 3.55 3.97", key: "1d7oge" }],
  ["path", { d: "M6 13H2", key: "82j7cp" }],
  ["path", { d: "m8 2 1.88 1.88", key: "fmnt4t" }],
  ["path", { d: "M9 7.13V6a3 3 0 1 1 6 0v1.13", key: "1vgav8" }]
], e5 = e("bug", J4);
const t5 = [
  ["path", { d: "M10 12h4", key: "a56b0p" }],
  ["path", { d: "M10 8h4", key: "1sr2af" }],
  ["path", { d: "M14 21v-3a2 2 0 0 0-4 0v3", key: "1rgiei" }],
  [
    "path",
    {
      d: "M6 10H4a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-2",
      key: "secmi2"
    }
  ],
  ["path", { d: "M6 21V5a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v16", key: "16ra0t" }]
], a5 = e("building-2", t5);
const o5 = [
  ["path", { d: "M12 10h.01", key: "1nrarc" }],
  ["path", { d: "M12 14h.01", key: "1etili" }],
  ["path", { d: "M12 6h.01", key: "1vi96p" }],
  ["path", { d: "M16 10h.01", key: "1m94wz" }],
  ["path", { d: "M16 14h.01", key: "1gbofw" }],
  ["path", { d: "M16 6h.01", key: "1x0f13" }],
  ["path", { d: "M8 10h.01", key: "19clt8" }],
  ["path", { d: "M8 14h.01", key: "6423bh" }],
  ["path", { d: "M8 6h.01", key: "1dz90k" }],
  ["path", { d: "M9 22v-3a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v3", key: "cabbwy" }],
  ["rect", { x: "4", y: "2", width: "16", height: "20", rx: "2", key: "1uxh74" }]
], n5 = e("building", o5);
const c5 = [
  ["path", { d: "M4 6 2 7", key: "1mqr15" }],
  ["path", { d: "M10 6h4", key: "1itunk" }],
  ["path", { d: "m22 7-2-1", key: "1umjhc" }],
  ["rect", { width: "16", height: "16", x: "4", y: "3", rx: "2", key: "1wxw4b" }],
  ["path", { d: "M4 11h16", key: "mpoxn0" }],
  ["path", { d: "M8 15h.01", key: "a7atzg" }],
  ["path", { d: "M16 15h.01", key: "rnfrdf" }],
  ["path", { d: "M6 19v2", key: "1loha6" }],
  ["path", { d: "M18 21v-2", key: "sqyl04" }]
], r5 = e("bus-front", c5);
const h5 = [
  ["path", { d: "M8 6v6", key: "18i7km" }],
  ["path", { d: "M15 6v6", key: "1sg6z9" }],
  ["path", { d: "M2 12h19.6", key: "de5uta" }],
  [
    "path",
    {
      d: "M18 18h3s.5-1.7.8-2.8c.1-.4.2-.8.2-1.2 0-.4-.1-.8-.2-1.2l-1.4-5C20.1 6.8 19.1 6 18 6H4a2 2 0 0 0-2 2v10h3",
      key: "1wwztk"
    }
  ],
  ["circle", { cx: "7", cy: "18", r: "2", key: "19iecd" }],
  ["path", { d: "M9 18h5", key: "lrx6i" }],
  ["circle", { cx: "16", cy: "18", r: "2", key: "1v4tcr" }]
], d5 = e("bus", h5);
const i5 = [
  ["path", { d: "M10 3h.01", key: "lbucoy" }],
  ["path", { d: "M14 2h.01", key: "1k8aa1" }],
  ["path", { d: "m2 9 20-5", key: "1kz0j5" }],
  ["path", { d: "M12 12V6.5", key: "1vbrij" }],
  ["rect", { width: "16", height: "10", x: "4", y: "12", rx: "3", key: "if91er" }],
  ["path", { d: "M9 12v5", key: "3anwtq" }],
  ["path", { d: "M15 12v5", key: "5xh3zn" }],
  ["path", { d: "M4 17h16", key: "g4d7ey" }]
], s5 = e("cable-car", i5);
const y5 = [
  [
    "path",
    { d: "M17 19a1 1 0 0 1-1-1v-2a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2a1 1 0 0 1-1 1z", key: "trhst0" }
  ],
  ["path", { d: "M17 21v-2", key: "ds4u3f" }],
  ["path", { d: "M19 14V6.5a1 1 0 0 0-7 0v11a1 1 0 0 1-7 0V10", key: "1mo9zo" }],
  ["path", { d: "M21 21v-2", key: "eo0ou" }],
  ["path", { d: "M3 5V3", key: "1k5hjh" }],
  [
    "path",
    { d: "M4 10a2 2 0 0 1-2-2V6a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2a2 2 0 0 1-2 2z", key: "1dd30t" }
  ],
  ["path", { d: "M7 5V3", key: "1t1388" }]
], p5 = e("cable", y5);
const k5 = [
  ["path", { d: "M16 13H3", key: "1wpj08" }],
  ["path", { d: "M16 17H3", key: "3lvfcd" }],
  [
    "path",
    {
      d: "m7.2 7.9-3.388 2.5A2 2 0 0 0 3 12.01V20a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1v-8.654c0-2-2.44-6.026-6.44-8.026a1 1 0 0 0-1.082.057L10.4 5.6",
      key: "1gmhf7"
    }
  ],
  ["circle", { cx: "9", cy: "7", r: "2", key: "1305pl" }]
], l5 = e("cake-slice", k5);
const u5 = [
  ["path", { d: "M20 21v-8a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v8", key: "1w3rig" }],
  ["path", { d: "M4 16s.5-1 2-1 2.5 2 4 2 2.5-2 4-2 2.5 2 4 2 2-1 2-1", key: "n2jgmb" }],
  ["path", { d: "M2 21h20", key: "1nyx9w" }],
  ["path", { d: "M7 8v3", key: "1qtyvj" }],
  ["path", { d: "M12 8v3", key: "hwp4zt" }],
  ["path", { d: "M17 8v3", key: "1i6e5u" }],
  ["path", { d: "M7 4h.01", key: "1bh4kh" }],
  ["path", { d: "M12 4h.01", key: "1ujb9j" }],
  ["path", { d: "M17 4h.01", key: "1upcoc" }]
], M5 = e("cake", u5);
const f5 = [
  ["rect", { width: "16", height: "20", x: "4", y: "2", rx: "2", key: "1nb95v" }],
  ["line", { x1: "8", x2: "16", y1: "6", y2: "6", key: "x4nwl0" }],
  ["line", { x1: "16", x2: "16", y1: "14", y2: "18", key: "wjye3r" }],
  ["path", { d: "M16 10h.01", key: "1m94wz" }],
  ["path", { d: "M12 10h.01", key: "1nrarc" }],
  ["path", { d: "M8 10h.01", key: "19clt8" }],
  ["path", { d: "M12 14h.01", key: "1etili" }],
  ["path", { d: "M8 14h.01", key: "6423bh" }],
  ["path", { d: "M12 18h.01", key: "mhygvu" }],
  ["path", { d: "M8 18h.01", key: "lrp35t" }]
], m5 = e("calculator", f5);
const v5 = [
  ["path", { d: "M11 14h1v4", key: "fy54vd" }],
  ["path", { d: "M16 2v4", key: "4m81vk" }],
  ["path", { d: "M3 10h18", key: "8toen8" }],
  ["path", { d: "M8 2v4", key: "1cmpym" }],
  ["rect", { x: "3", y: "4", width: "18", height: "18", rx: "2", key: "12vinp" }]
], g5 = e("calendar-1", v5);
const _5 = [
  ["path", { d: "m14 18 4 4 4-4", key: "1waygx" }],
  ["path", { d: "M16 2v4", key: "4m81vk" }],
  ["path", { d: "M18 14v8", key: "irew45" }],
  [
    "path",
    { d: "M21 11.354V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h7.343", key: "bse4f3" }
  ],
  ["path", { d: "M3 10h18", key: "8toen8" }],
  ["path", { d: "M8 2v4", key: "1cmpym" }]
], x5 = e("calendar-arrow-down", _5);
const b5 = [
  ["path", { d: "m14 18 4-4 4 4", key: "ftkppy" }],
  ["path", { d: "M16 2v4", key: "4m81vk" }],
  ["path", { d: "M18 22v-8", key: "su0gjh" }],
  ["path", { d: "M21 11.343V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h9", key: "1exg90" }],
  ["path", { d: "M3 10h18", key: "8toen8" }],
  ["path", { d: "M8 2v4", key: "1cmpym" }]
], w5 = e("calendar-arrow-up", b5);
const N5 = [
  ["path", { d: "M8 2v4", key: "1cmpym" }],
  ["path", { d: "M16 2v4", key: "4m81vk" }],
  ["path", { d: "M21 14V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h8", key: "bce9hv" }],
  ["path", { d: "M3 10h18", key: "8toen8" }],
  ["path", { d: "m16 20 2 2 4-4", key: "13tcca" }]
], $5 = e("calendar-check-2", N5);
const z5 = [
  ["path", { d: "M16 14v2.2l1.6 1", key: "fo4ql5" }],
  ["path", { d: "M16 2v4", key: "4m81vk" }],
  ["path", { d: "M21 7.5V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h3.5", key: "1osxxc" }],
  ["path", { d: "M3 10h5", key: "r794hk" }],
  ["path", { d: "M8 2v4", key: "1cmpym" }],
  ["circle", { cx: "16", cy: "16", r: "6", key: "qoo3c4" }]
], j5 = e("calendar-clock", z5);
const q5 = [
  ["path", { d: "M8 2v4", key: "1cmpym" }],
  ["path", { d: "M16 2v4", key: "4m81vk" }],
  ["rect", { width: "18", height: "18", x: "3", y: "4", rx: "2", key: "1hopcy" }],
  ["path", { d: "M3 10h18", key: "8toen8" }],
  ["path", { d: "m9 16 2 2 4-4", key: "19s6y9" }]
], A5 = e("calendar-check", q5);
const H5 = [
  ["path", { d: "m15.228 16.852-.923-.383", key: "npixar" }],
  ["path", { d: "m15.228 19.148-.923.383", key: "51cr3n" }],
  ["path", { d: "M16 2v4", key: "4m81vk" }],
  ["path", { d: "m16.47 14.305.382.923", key: "obybxd" }],
  ["path", { d: "m16.852 20.772-.383.924", key: "dpfhf9" }],
  ["path", { d: "m19.148 15.228.383-.923", key: "1reyyz" }],
  ["path", { d: "m19.53 21.696-.382-.924", key: "1goivc" }],
  ["path", { d: "m20.772 16.852.924-.383", key: "htqkph" }],
  ["path", { d: "m20.772 19.148.924.383", key: "9w9pjp" }],
  ["path", { d: "M21 10.592V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h6", key: "1pvbig" }],
  ["path", { d: "M3 10h18", key: "8toen8" }],
  ["path", { d: "M8 2v4", key: "1cmpym" }],
  ["circle", { cx: "18", cy: "18", r: "3", key: "1xkwt0" }]
], S5 = e("calendar-cog", H5);
const C5 = [
  ["path", { d: "M8 2v4", key: "1cmpym" }],
  ["path", { d: "M16 2v4", key: "4m81vk" }],
  ["rect", { width: "18", height: "18", x: "3", y: "4", rx: "2", key: "1hopcy" }],
  ["path", { d: "M3 10h18", key: "8toen8" }],
  ["path", { d: "M8 14h.01", key: "6423bh" }],
  ["path", { d: "M12 14h.01", key: "1etili" }],
  ["path", { d: "M16 14h.01", key: "1gbofw" }],
  ["path", { d: "M8 18h.01", key: "lrp35t" }],
  ["path", { d: "M12 18h.01", key: "mhygvu" }],
  ["path", { d: "M16 18h.01", key: "kzsmim" }]
], V5 = e("calendar-days", C5);
const R5 = [
  [
    "path",
    {
      d: "M3 20a2 2 0 0 0 2 2h10a2.4 2.4 0 0 0 1.706-.706l3.588-3.588A2.4 2.4 0 0 0 21 16V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2z",
      key: "r586nh"
    }
  ],
  ["path", { d: "M15 22v-5a1 1 0 0 1 1-1h5", key: "xl3app" }],
  ["path", { d: "M8 2v4", key: "1cmpym" }],
  ["path", { d: "M16 2v4", key: "4m81vk" }],
  ["path", { d: "M3 10h18", key: "8toen8" }]
], E5 = e("calendar-fold", R5);
const L5 = [
  [
    "path",
    { d: "M12.127 22H5a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v5.125", key: "vxdnp4" }
  ],
  [
    "path",
    {
      d: "M14.62 18.8A2.25 2.25 0 1 1 18 15.836a2.25 2.25 0 1 1 3.38 2.966l-2.626 2.856a.998.998 0 0 1-1.507 0z",
      key: "15cy7q"
    }
  ],
  ["path", { d: "M16 2v4", key: "4m81vk" }],
  ["path", { d: "M3 10h18", key: "8toen8" }],
  ["path", { d: "M8 2v4", key: "1cmpym" }]
], P5 = e("calendar-heart", L5);
const T5 = [
  ["path", { d: "M8 2v4", key: "1cmpym" }],
  ["path", { d: "M16 2v4", key: "4m81vk" }],
  ["rect", { width: "18", height: "18", x: "3", y: "4", rx: "2", key: "1hopcy" }],
  ["path", { d: "M3 10h18", key: "8toen8" }],
  ["path", { d: "M10 16h4", key: "17e571" }]
], O5 = e("calendar-minus-2", T5);
const D5 = [
  ["path", { d: "M16 19h6", key: "xwg31i" }],
  ["path", { d: "M16 2v4", key: "4m81vk" }],
  ["path", { d: "M21 15V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h8.5", key: "1scpom" }],
  ["path", { d: "M3 10h18", key: "8toen8" }],
  ["path", { d: "M8 2v4", key: "1cmpym" }]
], I5 = e("calendar-minus", D5);
const F5 = [
  ["path", { d: "M4.2 4.2A2 2 0 0 0 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 1.82-1.18", key: "16swn3" }],
  ["path", { d: "M21 15.5V6a2 2 0 0 0-2-2H9.5", key: "yhw86o" }],
  ["path", { d: "M16 2v4", key: "4m81vk" }],
  ["path", { d: "M3 10h7", key: "1wap6i" }],
  ["path", { d: "M21 10h-5.5", key: "quycpq" }],
  ["path", { d: "m2 2 20 20", key: "1ooewy" }]
], B5 = e("calendar-off", F5);
const U5 = [
  ["path", { d: "M8 2v4", key: "1cmpym" }],
  ["path", { d: "M16 2v4", key: "4m81vk" }],
  ["rect", { width: "18", height: "18", x: "3", y: "4", rx: "2", key: "1hopcy" }],
  ["path", { d: "M3 10h18", key: "8toen8" }],
  ["path", { d: "M10 16h4", key: "17e571" }],
  ["path", { d: "M12 14v4", key: "1thi36" }]
], W5 = e("calendar-plus-2", U5);
const Z5 = [
  ["path", { d: "M16 19h6", key: "xwg31i" }],
  ["path", { d: "M16 2v4", key: "4m81vk" }],
  ["path", { d: "M19 16v6", key: "tddt3s" }],
  ["path", { d: "M21 12.598V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h8.5", key: "1glfrc" }],
  ["path", { d: "M3 10h18", key: "8toen8" }],
  ["path", { d: "M8 2v4", key: "1cmpym" }]
], G5 = e("calendar-plus", Z5);
const X5 = [
  ["rect", { width: "18", height: "18", x: "3", y: "4", rx: "2", key: "1hopcy" }],
  ["path", { d: "M16 2v4", key: "4m81vk" }],
  ["path", { d: "M3 10h18", key: "8toen8" }],
  ["path", { d: "M8 2v4", key: "1cmpym" }],
  ["path", { d: "M17 14h-6", key: "bkmgh3" }],
  ["path", { d: "M13 18H7", key: "bb0bb7" }],
  ["path", { d: "M7 14h.01", key: "1qa3f1" }],
  ["path", { d: "M17 18h.01", key: "1bdyru" }]
], Y5 = e("calendar-range", X5);
const K5 = [
  ["path", { d: "M16 2v4", key: "4m81vk" }],
  ["path", { d: "M21 11.75V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h7.25", key: "1jrsq6" }],
  ["path", { d: "m22 22-1.875-1.875", key: "13zax7" }],
  ["path", { d: "M3 10h18", key: "8toen8" }],
  ["path", { d: "M8 2v4", key: "1cmpym" }],
  ["circle", { cx: "18", cy: "18", r: "3", key: "1xkwt0" }]
], Q5 = e("calendar-search", K5);
const J5 = [
  ["path", { d: "M8 2v4", key: "1cmpym" }],
  ["path", { d: "M16 2v4", key: "4m81vk" }],
  ["path", { d: "M21 13V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h8", key: "3spt84" }],
  ["path", { d: "M3 10h18", key: "8toen8" }],
  ["path", { d: "m17 22 5-5", key: "1k6ppv" }],
  ["path", { d: "m17 17 5 5", key: "p7ous7" }]
], ek = e("calendar-x-2", J5);
const tk = [
  ["path", { d: "M11 10v4h4", key: "172dkj" }],
  ["path", { d: "m11 14 1.535-1.605a5 5 0 0 1 8 1.5", key: "vu0qm5" }],
  ["path", { d: "M16 2v4", key: "4m81vk" }],
  ["path", { d: "m21 18-1.535 1.605a5 5 0 0 1-8-1.5", key: "1qgeyt" }],
  ["path", { d: "M21 22v-4h-4", key: "hrummi" }],
  ["path", { d: "M21 8.5V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h4.3", key: "mctw84" }],
  ["path", { d: "M3 10h4", key: "1el30a" }],
  ["path", { d: "M8 2v4", key: "1cmpym" }]
], ak = e("calendar-sync", tk);
const ok = [
  ["path", { d: "M8 2v4", key: "1cmpym" }],
  ["path", { d: "M16 2v4", key: "4m81vk" }],
  ["rect", { width: "18", height: "18", x: "3", y: "4", rx: "2", key: "1hopcy" }],
  ["path", { d: "M3 10h18", key: "8toen8" }],
  ["path", { d: "m14 14-4 4", key: "rymu2i" }],
  ["path", { d: "m10 14 4 4", key: "3sz06r" }]
], nk = e("calendar-x", ok);
const ck = [
  ["path", { d: "M8 2v4", key: "1cmpym" }],
  ["path", { d: "M16 2v4", key: "4m81vk" }],
  ["rect", { width: "18", height: "18", x: "3", y: "4", rx: "2", key: "1hopcy" }],
  ["path", { d: "M3 10h18", key: "8toen8" }]
], rk = e("calendar", ck);
const hk = [
  ["path", { d: "M12 2v2", key: "tus03m" }],
  ["path", { d: "M15.726 21.01A2 2 0 0 1 14 22H4a2 2 0 0 1-2-2V10a2 2 0 0 1 2-2", key: "j6srht" }],
  ["path", { d: "M18 2v2", key: "1kh14s" }],
  ["path", { d: "M2 13h2", key: "13gyu8" }],
  ["path", { d: "M8 8h14", key: "12jxz2" }],
  ["rect", { x: "8", y: "3", width: "14", height: "14", rx: "2", key: "nsru6w" }]
], dk = e("calendars", hk);
const ik = [
  ["path", { d: "M14.564 14.558a3 3 0 1 1-4.122-4.121", key: "1rnrzw" }],
  ["path", { d: "m2 2 20 20", key: "1ooewy" }],
  [
    "path",
    { d: "M20 20H4a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2h1.997a2 2 0 0 0 .819-.175", key: "1x3arw" }
  ],
  [
    "path",
    {
      d: "M9.695 4.024A2 2 0 0 1 10.004 4h3.993a2 2 0 0 1 1.76 1.05l.486.9A2 2 0 0 0 18.003 7H20a2 2 0 0 1 2 2v7.344",
      key: "1i84u0"
    }
  ]
], sk = e("camera-off", ik);
const yk = [
  [
    "path",
    {
      d: "M13.997 4a2 2 0 0 1 1.76 1.05l.486.9A2 2 0 0 0 18.003 7H20a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2h1.997a2 2 0 0 0 1.759-1.048l.489-.904A2 2 0 0 1 10.004 4z",
      key: "18u6gg"
    }
  ],
  ["circle", { cx: "12", cy: "13", r: "3", key: "1vg3eu" }]
], pk = e("camera", yk);
const kk = [
  ["path", { d: "M10 10v7.9", key: "m8g9tt" }],
  ["path", { d: "M11.802 6.145a5 5 0 0 1 6.053 6.053", key: "dn87i3" }],
  ["path", { d: "M14 6.1v2.243", key: "1kzysn" }],
  [
    "path",
    { d: "m15.5 15.571-.964.964a5 5 0 0 1-7.071 0 5 5 0 0 1 0-7.07l.964-.965", key: "3sxy18" }
  ],
  [
    "path",
    {
      d: "M16 7V3a1 1 0 0 1 1.707-.707 2.5 2.5 0 0 0 2.152.717 1 1 0 0 1 1.131 1.131 2.5 2.5 0 0 0 .717 2.152A1 1 0 0 1 21 8h-4",
      key: "gpb6xx"
    }
  ],
  ["path", { d: "m2 2 20 20", key: "1ooewy" }],
  [
    "path",
    {
      d: "M8 17v4a1 1 0 0 1-1.707.707 2.5 2.5 0 0 0-2.152-.717 1 1 0 0 1-1.131-1.131 2.5 2.5 0 0 0-.717-2.152A1 1 0 0 1 3 16h4",
      key: "qexcha"
    }
  ]
], lk = e("candy-off", kk);
const uk = [
  [
    "path",
    {
      d: "M5.7 21a2 2 0 0 1-3.5-2l8.6-14a6 6 0 0 1 10.4 6 2 2 0 1 1-3.464-2 2 2 0 1 0-3.464-2Z",
      key: "isaq8g"
    }
  ],
  ["path", { d: "M17.75 7 15 2.1", key: "12x7e8" }],
  ["path", { d: "M10.9 4.8 13 9", key: "100a87" }],
  ["path", { d: "m7.9 9.7 2 4.4", key: "ntfhaj" }],
  ["path", { d: "M4.9 14.7 7 18.9", key: "1x43jy" }]
], Mk = e("candy-cane", uk);
const fk = [
  ["path", { d: "M10 7v10.9", key: "1gynux" }],
  ["path", { d: "M14 6.1V17", key: "116kdf" }],
  [
    "path",
    {
      d: "M16 7V3a1 1 0 0 1 1.707-.707 2.5 2.5 0 0 0 2.152.717 1 1 0 0 1 1.131 1.131 2.5 2.5 0 0 0 .717 2.152A1 1 0 0 1 21 8h-4",
      key: "gpb6xx"
    }
  ],
  [
    "path",
    {
      d: "M16.536 7.465a5 5 0 0 0-7.072 0l-2 2a5 5 0 0 0 0 7.07 5 5 0 0 0 7.072 0l2-2a5 5 0 0 0 0-7.07",
      key: "1tsln4"
    }
  ],
  [
    "path",
    {
      d: "M8 17v4a1 1 0 0 1-1.707.707 2.5 2.5 0 0 0-2.152-.717 1 1 0 0 1-1.131-1.131 2.5 2.5 0 0 0-.717-2.152A1 1 0 0 1 3 16h4",
      key: "qexcha"
    }
  ]
], mk = e("candy", fk);
const vk = [
  ["path", { d: "M12 22v-4c1.5 1.5 3.5 3 6 3 0-1.5-.5-3.5-2-5", key: "1bqfb7" }],
  [
    "path",
    { d: "M13.988 8.327C13.902 6.054 13.365 3.82 12 2a9.3 9.3 0 0 0-1.445 2.9", key: "1p520n" }
  ],
  [
    "path",
    {
      d: "M17.375 11.725C18.882 10.53 21 7.841 21 6c-2.324 0-5.08 1.296-6.662 2.684",
      key: "q2itvb"
    }
  ],
  ["path", { d: "m2 2 20 20", key: "1ooewy" }],
  [
    "path",
    { d: "M21.024 15.378A15 15 0 0 0 22 15c-.426-1.279-2.67-2.557-4.25-2.907", key: "j9amvs" }
  ],
  [
    "path",
    {
      d: "M6.995 6.992C5.714 6.4 4.29 6 3 6c0 2 2.5 5 4 6-1.5 0-4.5 1.5-5 3 3.5 1.5 6 1 6 1-1.5 1.5-2 3.5-2 5 2.5 0 4.5-1.5 6-3",
      key: "8gmd5g"
    }
  ]
], gk = e("cannabis-off", vk);
const _k = [
  ["path", { d: "M12 22v-4", key: "1utk9m" }],
  [
    "path",
    {
      d: "M7 12c-1.5 0-4.5 1.5-5 3 3.5 1.5 6 1 6 1-1.5 1.5-2 3.5-2 5 2.5 0 4.5-1.5 6-3 1.5 1.5 3.5 3 6 3 0-1.5-.5-3.5-2-5 0 0 2.5.5 6-1-.5-1.5-3.5-3-5-3 1.5-1 4-4 4-6-2.5 0-5.5 1.5-7 3 0-2.5-.5-5-2-7-1.5 2-2 4.5-2 7-1.5-1.5-4.5-3-7-3 0 2 2.5 5 4 6",
      key: "1mezod"
    }
  ]
], xk = e("cannabis", _k);
const bk = [
  ["path", { d: "M10.5 5H19a2 2 0 0 1 2 2v8.5", key: "jqtk4d" }],
  ["path", { d: "M17 11h-.5", key: "1961ue" }],
  ["path", { d: "M19 19H5a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2", key: "1keqsi" }],
  ["path", { d: "m2 2 20 20", key: "1ooewy" }],
  ["path", { d: "M7 11h4", key: "1o1z6v" }],
  ["path", { d: "M7 15h2.5", key: "1ina1g" }]
], wk = e("captions-off", bk);
const Nk = [
  ["rect", { width: "18", height: "14", x: "3", y: "5", rx: "2", ry: "2", key: "12ruh7" }],
  ["path", { d: "M7 15h4M15 15h2M7 11h2M13 11h4", key: "1ueiar" }]
], $k = e("captions", Nk);
const zk = [
  [
    "path",
    { d: "m21 8-2 2-1.5-3.7A2 2 0 0 0 15.646 5H8.4a2 2 0 0 0-1.903 1.257L5 10 3 8", key: "1imjwt" }
  ],
  ["path", { d: "M7 14h.01", key: "1qa3f1" }],
  ["path", { d: "M17 14h.01", key: "7oqj8z" }],
  ["rect", { width: "18", height: "8", x: "3", y: "10", rx: "2", key: "a7itu8" }],
  ["path", { d: "M5 18v2", key: "ppbyun" }],
  ["path", { d: "M19 18v2", key: "gy7782" }]
], jk = e("car-front", zk);
const qk = [
  [
    "path",
    {
      d: "M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.4 2.9A3.7 3.7 0 0 0 2 12v4c0 .6.4 1 1 1h2",
      key: "5owen"
    }
  ],
  ["circle", { cx: "7", cy: "17", r: "2", key: "u2ysq9" }],
  ["path", { d: "M9 17h6", key: "r8uit2" }],
  ["circle", { cx: "17", cy: "17", r: "2", key: "axvx0g" }]
], Ak = e("car", qk);
const Hk = [
  ["path", { d: "M10 2h4", key: "n1abiw" }],
  [
    "path",
    { d: "m21 8-2 2-1.5-3.7A2 2 0 0 0 15.646 5H8.4a2 2 0 0 0-1.903 1.257L5 10 3 8", key: "1imjwt" }
  ],
  ["path", { d: "M7 14h.01", key: "1qa3f1" }],
  ["path", { d: "M17 14h.01", key: "7oqj8z" }],
  ["rect", { width: "18", height: "8", x: "3", y: "10", rx: "2", key: "a7itu8" }],
  ["path", { d: "M5 18v2", key: "ppbyun" }],
  ["path", { d: "M19 18v2", key: "gy7782" }]
], Sk = e("car-taxi-front", Hk);
const Ck = [
  ["path", { d: "M12 14v4", key: "1thi36" }],
  [
    "path",
    {
      d: "M14.172 2a2 2 0 0 1 1.414.586l3.828 3.828A2 2 0 0 1 20 7.828V20a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2z",
      key: "1o66bk"
    }
  ],
  ["path", { d: "M8 14h8", key: "1fgep2" }],
  ["rect", { x: "8", y: "10", width: "8", height: "8", rx: "1", key: "1aonk6" }]
], Vk = e("card-sim", Ck);
const Rk = [
  ["path", { d: "M18 19V9a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v8a2 2 0 0 0 2 2h2", key: "19jm3t" }],
  ["path", { d: "M2 9h3a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H2", key: "13hakp" }],
  ["path", { d: "M22 17v1a1 1 0 0 1-1 1H10v-9a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v9", key: "1crci8" }],
  ["circle", { cx: "8", cy: "19", r: "2", key: "t8fc5s" }]
], Ek = e("caravan", Rk);
const Lk = [
  [
    "path",
    {
      d: "M2.27 21.7s9.87-3.5 12.73-6.36a4.5 4.5 0 0 0-6.36-6.37C5.77 11.84 2.27 21.7 2.27 21.7zM8.64 14l-2.05-2.04M15.34 15l-2.46-2.46",
      key: "rfqxbe"
    }
  ],
  ["path", { d: "M22 9s-1.33-2-3.5-2C16.86 7 15 9 15 9s1.33 2 3.5 2S22 9 22 9z", key: "6b25w4" }],
  ["path", { d: "M15 2s-2 1.33-2 3.5S15 9 15 9s2-1.84 2-3.5C17 3.33 15 2 15 2z", key: "fn65lo" }]
], Pk = e("carrot", Lk);
const Tk = [
  ["path", { d: "M10 9v7", key: "ylp826" }],
  ["path", { d: "M14 6v10", key: "1jy4vg" }],
  ["circle", { cx: "17.5", cy: "12.5", r: "3.5", key: "1a9481" }],
  ["circle", { cx: "6.5", cy: "12.5", r: "3.5", key: "2jlv1r" }]
], Ok = e("case-lower", Tk);
const Dk = [
  ["path", { d: "m2 16 4.039-9.69a.5.5 0 0 1 .923 0L11 16", key: "d5nyq2" }],
  ["path", { d: "M22 9v7", key: "pvm9v3" }],
  ["path", { d: "M3.304 13h6.392", key: "1q3zxz" }],
  ["circle", { cx: "18.5", cy: "12.5", r: "3.5", key: "z97x68" }]
], Ik = e("case-sensitive", Dk);
const Fk = [
  [
    "path",
    {
      d: "M15 11h4.5a1 1 0 0 1 0 5h-4a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5h3a1 1 0 0 1 0 5",
      key: "nxs35"
    }
  ],
  ["path", { d: "m2 16 4.039-9.69a.5.5 0 0 1 .923 0L11 16", key: "d5nyq2" }],
  ["path", { d: "M3.304 13h6.392", key: "1q3zxz" }]
], Bk = e("case-upper", Fk);
const Uk = [
  ["rect", { width: "20", height: "16", x: "2", y: "4", rx: "2", key: "18n3k1" }],
  ["circle", { cx: "8", cy: "10", r: "2", key: "1xl4ub" }],
  ["path", { d: "M8 12h8", key: "1wcyev" }],
  ["circle", { cx: "16", cy: "10", r: "2", key: "r14t7q" }],
  ["path", { d: "m6 20 .7-2.9A1.4 1.4 0 0 1 8.1 16h7.8a1.4 1.4 0 0 1 1.4 1l.7 3", key: "l01ucn" }]
], Wk = e("cassette-tape", Uk);
const Zk = [
  ["path", { d: "M2 8V6a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2h-6", key: "3zrzxg" }],
  ["path", { d: "M2 12a9 9 0 0 1 8 8", key: "g6cvee" }],
  ["path", { d: "M2 16a5 5 0 0 1 4 4", key: "1y1dii" }],
  ["line", { x1: "2", x2: "2.01", y1: "20", y2: "20", key: "xu2jvo" }]
], Gk = e("cast", Zk);
const Xk = [
  ["path", { d: "M10 5V3", key: "1y54qe" }],
  ["path", { d: "M14 5V3", key: "m6isi" }],
  ["path", { d: "M15 21v-3a3 3 0 0 0-6 0v3", key: "lbp5hj" }],
  ["path", { d: "M18 3v8", key: "2ollhf" }],
  ["path", { d: "M18 5H6", key: "98imr9" }],
  ["path", { d: "M22 11H2", key: "1lmjae" }],
  ["path", { d: "M22 9v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V9", key: "1rly83" }],
  ["path", { d: "M6 3v8", key: "csox7g" }]
], Yk = e("castle", Xk);
const Kk = [
  [
    "path",
    {
      d: "M12 5c.67 0 1.35.09 2 .26 1.78-2 5.03-2.84 6.42-2.26 1.4.58-.42 7-.42 7 .57 1.07 1 2.24 1 3.44C21 17.9 16.97 21 12 21s-9-3-9-7.56c0-1.25.5-2.4 1-3.44 0 0-1.89-6.42-.5-7 1.39-.58 4.72.23 6.5 2.23A9.04 9.04 0 0 1 12 5Z",
      key: "x6xyqk"
    }
  ],
  ["path", { d: "M8 14v.5", key: "1nzgdb" }],
  ["path", { d: "M16 14v.5", key: "1lajdz" }],
  ["path", { d: "M11.25 16.25h1.5L12 17l-.75-.75Z", key: "12kq1m" }]
], Qk = e("cat", Kk);
const Jk = [
  [
    "path",
    {
      d: "M16.75 12h3.632a1 1 0 0 1 .894 1.447l-2.034 4.069a1 1 0 0 1-1.708.134l-2.124-2.97",
      key: "ir91b5"
    }
  ],
  [
    "path",
    {
      d: "M17.106 9.053a1 1 0 0 1 .447 1.341l-3.106 6.211a1 1 0 0 1-1.342.447L3.61 12.3a2.92 2.92 0 0 1-1.3-3.91L3.69 5.6a2.92 2.92 0 0 1 3.92-1.3z",
      key: "jlp8i1"
    }
  ],
  ["path", { d: "M2 19h3.76a2 2 0 0 0 1.8-1.1L9 15", key: "19bib8" }],
  ["path", { d: "M2 21v-4", key: "l40lih" }],
  ["path", { d: "M7 9h.01", key: "19b3jx" }]
], e3 = e("cctv", Jk);
const t3 = [
  ["path", { d: "M3 3v16a2 2 0 0 0 2 2h16", key: "c24i48" }],
  [
    "path",
    {
      d: "M7 11.207a.5.5 0 0 1 .146-.353l2-2a.5.5 0 0 1 .708 0l3.292 3.292a.5.5 0 0 0 .708 0l4.292-4.292a.5.5 0 0 1 .854.353V16a1 1 0 0 1-1 1H8a1 1 0 0 1-1-1z",
      key: "q0gr47"
    }
  ]
], a3 = e("chart-area", t3);
const o3 = [
  ["path", { d: "M3 3v16a2 2 0 0 0 2 2h16", key: "c24i48" }],
  ["rect", { x: "7", y: "13", width: "9", height: "4", rx: "1", key: "1iip1u" }],
  ["rect", { x: "7", y: "5", width: "12", height: "4", rx: "1", key: "1anskk" }]
], n3 = e("chart-bar-big", o3);
const c3 = [
  ["path", { d: "M3 3v16a2 2 0 0 0 2 2h16", key: "c24i48" }],
  ["path", { d: "M7 11h8", key: "1feolt" }],
  ["path", { d: "M7 16h3", key: "ur6vzw" }],
  ["path", { d: "M7 6h12", key: "sz5b0d" }]
], r3 = e("chart-bar-decreasing", c3);
const h3 = [
  ["path", { d: "M3 3v16a2 2 0 0 0 2 2h16", key: "c24i48" }],
  ["path", { d: "M7 11h8", key: "1feolt" }],
  ["path", { d: "M7 16h12", key: "wsnu98" }],
  ["path", { d: "M7 6h3", key: "w9rmul" }]
], d3 = e("chart-bar-increasing", h3);
const i3 = [
  ["path", { d: "M11 13v4", key: "vyy2rb" }],
  ["path", { d: "M15 5v4", key: "1gx88a" }],
  ["path", { d: "M3 3v16a2 2 0 0 0 2 2h16", key: "c24i48" }],
  ["rect", { x: "7", y: "13", width: "9", height: "4", rx: "1", key: "1iip1u" }],
  ["rect", { x: "7", y: "5", width: "12", height: "4", rx: "1", key: "1anskk" }]
], s3 = e("chart-bar-stacked", i3);
const y3 = [
  ["path", { d: "M3 3v16a2 2 0 0 0 2 2h16", key: "c24i48" }],
  ["path", { d: "M7 16h8", key: "srdodz" }],
  ["path", { d: "M7 11h12", key: "127s9w" }],
  ["path", { d: "M7 6h3", key: "w9rmul" }]
], p3 = e("chart-bar", y3);
const k3 = [
  ["path", { d: "M9 5v4", key: "14uxtq" }],
  ["rect", { width: "4", height: "6", x: "7", y: "9", rx: "1", key: "f4fvz0" }],
  ["path", { d: "M9 15v2", key: "r5rk32" }],
  ["path", { d: "M17 3v2", key: "1l2re6" }],
  ["rect", { width: "4", height: "8", x: "15", y: "5", rx: "1", key: "z38je5" }],
  ["path", { d: "M17 13v3", key: "5l0wba" }],
  ["path", { d: "M3 3v16a2 2 0 0 0 2 2h16", key: "c24i48" }]
], l3 = e("chart-candlestick", k3);
const u3 = [
  ["path", { d: "M3 3v16a2 2 0 0 0 2 2h16", key: "c24i48" }],
  ["rect", { x: "15", y: "5", width: "4", height: "12", rx: "1", key: "q8uenq" }],
  ["rect", { x: "7", y: "8", width: "4", height: "9", rx: "1", key: "sr5ea" }]
], M3 = e("chart-column-big", u3);
const f3 = [
  ["path", { d: "M13 17V9", key: "1fwyjl" }],
  ["path", { d: "M18 17v-3", key: "1sqioe" }],
  ["path", { d: "M3 3v16a2 2 0 0 0 2 2h16", key: "c24i48" }],
  ["path", { d: "M8 17V5", key: "1wzmnc" }]
], m3 = e("chart-column-decreasing", f3);
const v3 = [
  ["path", { d: "M13 17V9", key: "1fwyjl" }],
  ["path", { d: "M18 17V5", key: "sfb6ij" }],
  ["path", { d: "M3 3v16a2 2 0 0 0 2 2h16", key: "c24i48" }],
  ["path", { d: "M8 17v-3", key: "17ska0" }]
], g3 = e("chart-column-increasing", v3);
const _3 = [
  ["path", { d: "M11 13H7", key: "t0o9gq" }],
  ["path", { d: "M19 9h-4", key: "rera1j" }],
  ["path", { d: "M3 3v16a2 2 0 0 0 2 2h16", key: "c24i48" }],
  ["rect", { x: "15", y: "5", width: "4", height: "12", rx: "1", key: "q8uenq" }],
  ["rect", { x: "7", y: "8", width: "4", height: "9", rx: "1", key: "sr5ea" }]
], x3 = e("chart-column-stacked", _3);
const b3 = [
  ["path", { d: "M3 3v16a2 2 0 0 0 2 2h16", key: "c24i48" }],
  ["path", { d: "M18 17V9", key: "2bz60n" }],
  ["path", { d: "M13 17V5", key: "1frdt8" }],
  ["path", { d: "M8 17v-3", key: "17ska0" }]
], w3 = e("chart-column", b3);
const N3 = [
  ["path", { d: "M10 6h8", key: "zvc2xc" }],
  ["path", { d: "M12 16h6", key: "yi5mkt" }],
  ["path", { d: "M3 3v16a2 2 0 0 0 2 2h16", key: "c24i48" }],
  ["path", { d: "M8 11h7", key: "wz2hg0" }]
], $3 = e("chart-gantt", N3);
const z3 = [
  ["path", { d: "M3 3v16a2 2 0 0 0 2 2h16", key: "c24i48" }],
  ["path", { d: "m19 9-5 5-4-4-3 3", key: "2osh9i" }]
], j3 = e("chart-line", z3);
const q3 = [
  ["path", { d: "m13.11 7.664 1.78 2.672", key: "go2gg9" }],
  ["path", { d: "m14.162 12.788-3.324 1.424", key: "11x848" }],
  ["path", { d: "m20 4-6.06 1.515", key: "1wxxh7" }],
  ["path", { d: "M3 3v16a2 2 0 0 0 2 2h16", key: "c24i48" }],
  ["circle", { cx: "12", cy: "6", r: "2", key: "1jj5th" }],
  ["circle", { cx: "16", cy: "12", r: "2", key: "4ma0v8" }],
  ["circle", { cx: "9", cy: "15", r: "2", key: "lf2ghp" }]
], A3 = e("chart-network", q3);
const H3 = [
  ["path", { d: "M5 21V3", key: "clc1r8" }],
  ["path", { d: "M12 21V9", key: "uvy0l4" }],
  ["path", { d: "M19 21v-6", key: "tkawy9" }]
], S3 = e("chart-no-axes-column-decreasing", H3);
const C3 = [
  ["path", { d: "M5 21v-6", key: "1hz6c0" }],
  ["path", { d: "M12 21V9", key: "uvy0l4" }],
  ["path", { d: "M19 21V3", key: "11j9sm" }]
], V3 = e("chart-no-axes-column-increasing", C3);
const R3 = [
  ["path", { d: "M5 21v-6", key: "1hz6c0" }],
  ["path", { d: "M12 21V3", key: "1lcnhd" }],
  ["path", { d: "M19 21V9", key: "unv183" }]
], E3 = e("chart-no-axes-column", R3);
const L3 = [
  ["path", { d: "M12 16v5", key: "zza2cw" }],
  ["path", { d: "M16 14v7", key: "1g90b9" }],
  ["path", { d: "M20 10v11", key: "1iqoj0" }],
  [
    "path",
    { d: "m22 3-8.646 8.646a.5.5 0 0 1-.708 0L9.354 8.354a.5.5 0 0 0-.707 0L2 15", key: "1fw8x9" }
  ],
  ["path", { d: "M4 18v3", key: "1yp0dc" }],
  ["path", { d: "M8 14v7", key: "n3cwzv" }]
], P3 = e("chart-no-axes-combined", L3);
const T3 = [
  ["path", { d: "M6 5h12", key: "fvfigv" }],
  ["path", { d: "M4 12h10", key: "oujl3d" }],
  ["path", { d: "M12 19h8", key: "baeox8" }]
], O3 = e("chart-no-axes-gantt", T3);
const D3 = [
  [
    "path",
    {
      d: "M21 12c.552 0 1.005-.449.95-.998a10 10 0 0 0-8.953-8.951c-.55-.055-.998.398-.998.95v8a1 1 0 0 0 1 1z",
      key: "pzmjnu"
    }
  ],
  ["path", { d: "M21.21 15.89A10 10 0 1 1 8 2.83", key: "k2fpak" }]
], I3 = e("chart-pie", D3);
const F3 = [
  ["circle", { cx: "7.5", cy: "7.5", r: ".5", fill: "currentColor", key: "kqv944" }],
  ["circle", { cx: "18.5", cy: "5.5", r: ".5", fill: "currentColor", key: "lysivs" }],
  ["circle", { cx: "11.5", cy: "11.5", r: ".5", fill: "currentColor", key: "byv1b8" }],
  ["circle", { cx: "7.5", cy: "16.5", r: ".5", fill: "currentColor", key: "nkw3mc" }],
  ["circle", { cx: "17.5", cy: "14.5", r: ".5", fill: "currentColor", key: "1gjh6j" }],
  ["path", { d: "M3 3v16a2 2 0 0 0 2 2h16", key: "c24i48" }]
], B3 = e("chart-scatter", F3);
const U3 = [
  ["path", { d: "M3 3v16a2 2 0 0 0 2 2h16", key: "c24i48" }],
  ["path", { d: "M7 16c.5-2 1.5-7 4-7 2 0 2 3 4 3 2.5 0 4.5-5 5-7", key: "lw07rv" }]
], W3 = e("chart-spline", U3);
const Z3 = [
  ["path", { d: "M18 6 7 17l-5-5", key: "116fxf" }],
  ["path", { d: "m22 10-7.5 7.5L13 16", key: "ke71qq" }]
], G3 = e("check-check", Z3);
const X3 = [
  ["path", { d: "M20 4L9 15", key: "1qkx8z" }],
  ["path", { d: "M21 19L3 19", key: "100sma" }],
  ["path", { d: "M9 15L4 10", key: "9zxff7" }]
], Y3 = e("check-line", X3);
const K3 = [["path", { d: "M20 6 9 17l-5-5", key: "1gmf2c" }]], Q3 = e("check", K3);
const J3 = [
  [
    "path",
    {
      d: "M17 21a1 1 0 0 0 1-1v-5.35c0-.457.316-.844.727-1.041a4 4 0 0 0-2.134-7.589 5 5 0 0 0-9.186 0 4 4 0 0 0-2.134 7.588c.411.198.727.585.727 1.041V20a1 1 0 0 0 1 1Z",
      key: "1qvrer"
    }
  ],
  ["path", { d: "M6 17h12", key: "1jwigz" }]
], el = e("chef-hat", J3);
const tl = [
  ["path", { d: "M2 17a5 5 0 0 0 10 0c0-2.76-2.5-5-5-3-2.5-2-5 .24-5 3Z", key: "cvxqlc" }],
  ["path", { d: "M12 17a5 5 0 0 0 10 0c0-2.76-2.5-5-5-3-2.5-2-5 .24-5 3Z", key: "1ostrc" }],
  ["path", { d: "M7 14c3.22-2.91 4.29-8.75 5-12 1.66 2.38 4.94 9 5 12", key: "hqx58h" }],
  ["path", { d: "M22 9c-4.29 0-7.14-2.33-10-7 5.71 0 10 4.67 10 7Z", key: "eykp1o" }]
], al = e("cherry", tl);
const ol = [
  [
    "path",
    { d: "M5 20a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v1a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1z", key: "b89hwq" }
  ],
  [
    "path",
    {
      d: "M15 18c1.5-.615 3-2.461 3-4.923C18 8.769 14.5 4.462 12 2 9.5 4.462 6 8.77 6 13.077 6 15.539 7.5 17.385 9 18",
      key: "8jdkhx"
    }
  ],
  ["path", { d: "m16 7-2.5 2.5", key: "1jq90w" }],
  ["path", { d: "M9 2h6", key: "1jrp98" }]
], nl = e("chess-bishop", ol);
const cl = [
  [
    "path",
    { d: "M4 20a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v1a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1z", key: "mqzwx6" }
  ],
  [
    "path",
    {
      d: "m6.7 18-1-1C4.35 15.682 3 14.09 3 12a5 5 0 0 1 4.95-5c1.584 0 2.7.455 4.05 1.818C13.35 7.455 14.466 7 16.05 7A5 5 0 0 1 21 12c0 2.082-1.359 3.673-2.7 5l-1 1",
      key: "1gdt1g"
    }
  ],
  ["path", { d: "M10 4h4", key: "1xpv9s" }],
  ["path", { d: "M12 2v6.818", key: "b17a49" }]
], rl = e("chess-king", cl);
const hl = [
  [
    "path",
    { d: "M5 20a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v1a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1z", key: "b89hwq" }
  ],
  [
    "path",
    {
      d: "M16.5 18c1-2 2.5-5 2.5-9a7 7 0 0 0-7-7H6.635a1 1 0 0 0-.768 1.64L7 5l-2.32 5.802a2 2 0 0 0 .95 2.526l2.87 1.456",
      key: "axbnlq"
    }
  ],
  ["path", { d: "m15 5 1.425-1.425", key: "15xz8w" }],
  ["path", { d: "m17 8 1.53-1.53", key: "15zhqh" }],
  ["path", { d: "M9.713 12.185 7 18", key: "1ocm0l" }]
], dl = e("chess-knight", hl);
const il = [
  [
    "path",
    { d: "M5 20a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v1a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1z", key: "b89hwq" }
  ],
  ["path", { d: "m14.5 10 1.5 8", key: "cim3qy" }],
  ["path", { d: "M7 10h10", key: "1101jm" }],
  ["path", { d: "m8 18 1.5-8", key: "ja3yjd" }],
  ["circle", { cx: "12", cy: "6", r: "4", key: "1frrej" }]
], sl = e("chess-pawn", il);
const yl = [
  [
    "path",
    { d: "M4 20a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v1a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1z", key: "mqzwx6" }
  ],
  ["path", { d: "m12.474 5.943 1.567 5.34a1 1 0 0 0 1.75.328l2.616-3.402", key: "1js4gl" }],
  ["path", { d: "m20 9-3 9", key: "r75r3f" }],
  ["path", { d: "m5.594 8.209 2.615 3.403a1 1 0 0 0 1.75-.329l1.567-5.34", key: "1joj19" }],
  ["path", { d: "M7 18 4 9", key: "1mfzj8" }],
  ["circle", { cx: "12", cy: "4", r: "2", key: "muu5ef" }],
  ["circle", { cx: "20", cy: "7", r: "2", key: "9w7p1x" }],
  ["circle", { cx: "4", cy: "7", r: "2", key: "1d9wy8" }]
], pl = e("chess-queen", yl);
const kl = [
  [
    "path",
    { d: "M5 20a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v1a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1z", key: "b89hwq" }
  ],
  ["path", { d: "M10 2v2", key: "7u0qdc" }],
  ["path", { d: "M14 2v2", key: "6buw04" }],
  ["path", { d: "m17 18-1-9", key: "10nd7q" }],
  ["path", { d: "M6 2v5a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V2", key: "uxf4yx" }],
  ["path", { d: "M6 4h12", key: "1x2ag7" }],
  ["path", { d: "m7 18 1-9", key: "1si9vq" }]
], ll = e("chess-rook", kl);
const ul = [["path", { d: "m6 9 6 6 6-6", key: "qrunsl" }]], Ml = e("chevron-down", ul);
const fl = [
  ["path", { d: "m17 18-6-6 6-6", key: "1yerx2" }],
  ["path", { d: "M7 6v12", key: "1p53r6" }]
], ml = e("chevron-first", fl);
const vl = [
  ["path", { d: "m7 18 6-6-6-6", key: "lwmzdw" }],
  ["path", { d: "M17 6v12", key: "1o0aio" }]
], gl = e("chevron-last", vl);
const _l = [["path", { d: "m15 18-6-6 6-6", key: "1wnfg3" }]], xl = e("chevron-left", _l);
const bl = [["path", { d: "m9 18 6-6-6-6", key: "mthhwq" }]], wl = e("chevron-right", bl);
const Nl = [["path", { d: "m18 15-6-6-6 6", key: "153udz" }]], $l = e("chevron-up", Nl);
const zl = [
  ["path", { d: "m7 20 5-5 5 5", key: "13a0gw" }],
  ["path", { d: "m7 4 5 5 5-5", key: "1kwcof" }]
], jl = e("chevrons-down-up", zl);
const ql = [
  ["path", { d: "m7 6 5 5 5-5", key: "1lc07p" }],
  ["path", { d: "m7 13 5 5 5-5", key: "1d48rs" }]
], Al = e("chevrons-down", ql);
const Hl = [
  ["path", { d: "M12 12h.01", key: "1mp3jc" }],
  ["path", { d: "M16 12h.01", key: "1l6xoz" }],
  ["path", { d: "m17 7 5 5-5 5", key: "1xlxn0" }],
  ["path", { d: "m7 7-5 5 5 5", key: "19njba" }],
  ["path", { d: "M8 12h.01", key: "czm47f" }]
], Sl = e("chevrons-left-right-ellipsis", Hl);
const Cl = [
  ["path", { d: "m9 7-5 5 5 5", key: "j5w590" }],
  ["path", { d: "m15 7 5 5-5 5", key: "1bl6da" }]
], Vl = e("chevrons-left-right", Cl);
const Rl = [
  ["path", { d: "m11 17-5-5 5-5", key: "13zhaf" }],
  ["path", { d: "m18 17-5-5 5-5", key: "h8a8et" }]
], El = e("chevrons-left", Rl);
const Ll = [
  ["path", { d: "m20 17-5-5 5-5", key: "30x0n2" }],
  ["path", { d: "m4 17 5-5-5-5", key: "16spf4" }]
], Pl = e("chevrons-right-left", Ll);
const Tl = [
  ["path", { d: "m6 17 5-5-5-5", key: "xnjwq" }],
  ["path", { d: "m13 17 5-5-5-5", key: "17xmmf" }]
], Ol = e("chevrons-right", Tl);
const Dl = [
  ["path", { d: "m7 15 5 5 5-5", key: "1hf1tw" }],
  ["path", { d: "m7 9 5-5 5 5", key: "sgt6xg" }]
], Il = e("chevrons-up-down", Dl);
const Fl = [
  ["path", { d: "m17 11-5-5-5 5", key: "e8nh98" }],
  ["path", { d: "m17 18-5-5-5 5", key: "2avn1x" }]
], Bl = e("chevrons-up", Fl);
const Ul = [
  ["path", { d: "M10.88 21.94 15.46 14", key: "xkve6t" }],
  ["path", { d: "M21.17 8H12", key: "19dcdn" }],
  ["path", { d: "M3.95 6.06 8.54 14", key: "g8jz9m" }],
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["circle", { cx: "12", cy: "12", r: "4", key: "4exip2" }]
], Wl = e("chromium", Ul);
const Zl = [
  ["path", { d: "M10 9h4", key: "u4k05v" }],
  ["path", { d: "M12 7v5", key: "ma6bk" }],
  ["path", { d: "M14 21v-3a2 2 0 0 0-4 0v3", key: "1rgiei" }],
  [
    "path",
    {
      d: "m18 9 3.52 2.147a1 1 0 0 1 .48.854V19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-6.999a1 1 0 0 1 .48-.854L6 9",
      key: "flvdwo"
    }
  ],
  [
    "path",
    {
      d: "M6 21V7a1 1 0 0 1 .376-.782l5-3.999a1 1 0 0 1 1.249.001l5 4A1 1 0 0 1 18 7v14",
      key: "a5i0n2"
    }
  ]
], Gl = e("church", Zl);
const Xl = [
  ["path", { d: "M12 12H3a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h13", key: "1gdiyg" }],
  ["path", { d: "M18 8c0-2.5-2-2.5-2-5", key: "1il607" }],
  ["path", { d: "m2 2 20 20", key: "1ooewy" }],
  ["path", { d: "M21 12a1 1 0 0 1 1 1v2a1 1 0 0 1-.5.866", key: "166zjj" }],
  ["path", { d: "M22 8c0-2.5-2-2.5-2-5", key: "1gah44" }],
  ["path", { d: "M7 12v4", key: "jqww69" }]
], Yl = e("cigarette-off", Xl);
const Kl = [
  ["path", { d: "M17 12H3a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h14", key: "1mb5g1" }],
  ["path", { d: "M18 8c0-2.5-2-2.5-2-5", key: "1il607" }],
  ["path", { d: "M21 16a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1", key: "1yl5r7" }],
  ["path", { d: "M22 8c0-2.5-2-2.5-2-5", key: "1gah44" }],
  ["path", { d: "M7 12v4", key: "jqww69" }]
], Ql = e("cigarette", Kl);
const Jl = [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["line", { x1: "12", x2: "12", y1: "8", y2: "12", key: "1pkeuh" }],
  ["line", { x1: "12", x2: "12.01", y1: "16", y2: "16", key: "4dfq90" }]
], e8 = e("circle-alert", Jl);
const t8 = [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "M12 8v8", key: "napkw2" }],
  ["path", { d: "m8 12 4 4 4-4", key: "k98ssh" }]
], a8 = e("circle-arrow-down", t8);
const o8 = [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "m12 8-4 4 4 4", key: "15vm53" }],
  ["path", { d: "M16 12H8", key: "1fr5h0" }]
], n8 = e("circle-arrow-left", o8);
const c8 = [
  ["path", { d: "M2 12a10 10 0 1 1 10 10", key: "1yn6ov" }],
  ["path", { d: "m2 22 10-10", key: "28ilpk" }],
  ["path", { d: "M8 22H2v-6", key: "sulq54" }]
], r8 = e("circle-arrow-out-down-left", c8);
const h8 = [
  ["path", { d: "M12 22a10 10 0 1 1 10-10", key: "130bv5" }],
  ["path", { d: "M22 22 12 12", key: "131aw7" }],
  ["path", { d: "M22 16v6h-6", key: "1gvm70" }]
], d8 = e("circle-arrow-out-down-right", h8);
const i8 = [
  ["path", { d: "M2 8V2h6", key: "hiwtdz" }],
  ["path", { d: "m2 2 10 10", key: "1oh8rs" }],
  ["path", { d: "M12 2A10 10 0 1 1 2 12", key: "rrk4fa" }]
], s8 = e("circle-arrow-out-up-left", i8);
const y8 = [
  ["path", { d: "M22 12A10 10 0 1 1 12 2", key: "1fm58d" }],
  ["path", { d: "M22 2 12 12", key: "yg2myt" }],
  ["path", { d: "M16 2h6v6", key: "zan5cs" }]
], p8 = e("circle-arrow-out-up-right", y8);
const k8 = [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "m12 16 4-4-4-4", key: "1i9zcv" }],
  ["path", { d: "M8 12h8", key: "1wcyev" }]
], l8 = e("circle-arrow-right", k8);
const u8 = [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "m16 12-4-4-4 4", key: "177agl" }],
  ["path", { d: "M12 16V8", key: "1sbj14" }]
], M8 = e("circle-arrow-up", u8);
const f8 = [
  ["path", { d: "M21.801 10A10 10 0 1 1 17 3.335", key: "yps3ct" }],
  ["path", { d: "m9 11 3 3L22 4", key: "1pflzl" }]
], m8 = e("circle-check-big", f8);
const v8 = [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "m9 12 2 2 4-4", key: "dzmm74" }]
], g8 = e("circle-check", v8);
const _8 = [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "m16 10-4 4-4-4", key: "894hmk" }]
], x8 = e("circle-chevron-down", _8);
const b8 = [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "m14 16-4-4 4-4", key: "ojs7w8" }]
], w8 = e("circle-chevron-left", b8);
const N8 = [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "m10 8 4 4-4 4", key: "1wy4r4" }]
], $8 = e("circle-chevron-right", N8);
const z8 = [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "m8 14 4-4 4 4", key: "fy2ptz" }]
], j8 = e("circle-chevron-up", z8);
const q8 = [
  ["path", { d: "M10.1 2.182a10 10 0 0 1 3.8 0", key: "5ilxe3" }],
  ["path", { d: "M13.9 21.818a10 10 0 0 1-3.8 0", key: "11zvb9" }],
  ["path", { d: "M17.609 3.721a10 10 0 0 1 2.69 2.7", key: "1iw5b2" }],
  ["path", { d: "M2.182 13.9a10 10 0 0 1 0-3.8", key: "c0bmvh" }],
  ["path", { d: "M20.279 17.609a10 10 0 0 1-2.7 2.69", key: "1ruxm7" }],
  ["path", { d: "M21.818 10.1a10 10 0 0 1 0 3.8", key: "qkgqxc" }],
  ["path", { d: "M3.721 6.391a10 10 0 0 1 2.7-2.69", key: "1mcia2" }],
  ["path", { d: "M6.391 20.279a10 10 0 0 1-2.69-2.7", key: "1fvljs" }]
], A8 = e("circle-dashed", q8);
const H8 = [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "M16 8h-6a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4H8", key: "1h4pet" }],
  ["path", { d: "M12 18V6", key: "zqpxq5" }]
], S8 = e("circle-dollar-sign", H8);
const C8 = [
  ["line", { x1: "8", x2: "16", y1: "12", y2: "12", key: "1jonct" }],
  ["line", { x1: "12", x2: "12", y1: "16", y2: "16", key: "aqc6ln" }],
  ["line", { x1: "12", x2: "12", y1: "8", y2: "8", key: "1mkcni" }],
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }]
], V8 = e("circle-divide", C8);
const R8 = [
  ["path", { d: "M10.1 2.18a9.93 9.93 0 0 1 3.8 0", key: "1qdqn0" }],
  ["path", { d: "M17.6 3.71a9.95 9.95 0 0 1 2.69 2.7", key: "1bq7p6" }],
  ["path", { d: "M21.82 10.1a9.93 9.93 0 0 1 0 3.8", key: "1rlaqf" }],
  ["path", { d: "M20.29 17.6a9.95 9.95 0 0 1-2.7 2.69", key: "1xk03u" }],
  ["path", { d: "M13.9 21.82a9.94 9.94 0 0 1-3.8 0", key: "l7re25" }],
  ["path", { d: "M6.4 20.29a9.95 9.95 0 0 1-2.69-2.7", key: "1v18p6" }],
  ["path", { d: "M2.18 13.9a9.93 9.93 0 0 1 0-3.8", key: "xdo6bj" }],
  ["path", { d: "M3.71 6.4a9.95 9.95 0 0 1 2.7-2.69", key: "1jjmaz" }],
  ["circle", { cx: "12", cy: "12", r: "1", key: "41hilf" }]
], E8 = e("circle-dot-dashed", R8);
const L8 = [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["circle", { cx: "12", cy: "12", r: "1", key: "41hilf" }]
], P8 = e("circle-dot", L8);
const T8 = [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "M17 12h.01", key: "1m0b6t" }],
  ["path", { d: "M12 12h.01", key: "1mp3jc" }],
  ["path", { d: "M7 12h.01", key: "eqddd0" }]
], O8 = e("circle-ellipsis", T8);
const D8 = [
  ["path", { d: "M7 10h10", key: "1101jm" }],
  ["path", { d: "M7 14h10", key: "1mhdw3" }],
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }]
], I8 = e("circle-equal", D8);
const F8 = [
  ["path", { d: "M12 2a10 10 0 0 1 7.38 16.75", key: "175t95" }],
  ["path", { d: "m16 12-4-4-4 4", key: "177agl" }],
  ["path", { d: "M12 16V8", key: "1sbj14" }],
  ["path", { d: "M2.5 8.875a10 10 0 0 0-.5 3", key: "1vce0s" }],
  ["path", { d: "M2.83 16a10 10 0 0 0 2.43 3.4", key: "o3fkw4" }],
  ["path", { d: "M4.636 5.235a10 10 0 0 1 .891-.857", key: "1szpfk" }],
  ["path", { d: "M8.644 21.42a10 10 0 0 0 7.631-.38", key: "9yhvd4" }]
], B8 = e("circle-fading-arrow-up", F8);
const U8 = [
  ["path", { d: "M12 2a10 10 0 0 1 7.38 16.75", key: "175t95" }],
  ["path", { d: "M12 8v8", key: "napkw2" }],
  ["path", { d: "M16 12H8", key: "1fr5h0" }],
  ["path", { d: "M2.5 8.875a10 10 0 0 0-.5 3", key: "1vce0s" }],
  ["path", { d: "M2.83 16a10 10 0 0 0 2.43 3.4", key: "o3fkw4" }],
  ["path", { d: "M4.636 5.235a10 10 0 0 1 .891-.857", key: "1szpfk" }],
  ["path", { d: "M8.644 21.42a10 10 0 0 0 7.631-.38", key: "9yhvd4" }]
], W8 = e("circle-fading-plus", U8);
const Z8 = [
  ["path", { d: "M15.6 2.7a10 10 0 1 0 5.7 5.7", key: "1e0p6d" }],
  ["circle", { cx: "12", cy: "12", r: "2", key: "1c9p78" }],
  ["path", { d: "M13.4 10.6 19 5", key: "1kr7tw" }]
], G8 = e("circle-gauge", Z8);
const X8 = [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "M8 12h8", key: "1wcyev" }]
], Y8 = e("circle-minus", X8);
const K8 = [
  ["path", { d: "m2 2 20 20", key: "1ooewy" }],
  ["path", { d: "M8.35 2.69A10 10 0 0 1 21.3 15.65", key: "1pfsoa" }],
  ["path", { d: "M19.08 19.08A10 10 0 1 1 4.92 4.92", key: "1ablyi" }]
], Q8 = e("circle-off", K8);
const J8 = [
  ["path", { d: "M12.656 7H13a3 3 0 0 1 2.984 3.307", key: "1sjx87" }],
  ["path", { d: "M13 13H9", key: "e2beee" }],
  ["path", { d: "M19.071 19.071A1 1 0 0 1 4.93 4.93", key: "1kb595" }],
  ["path", { d: "m2 2 20 20", key: "1ooewy" }],
  ["path", { d: "M8.357 2.687a10 10 0 0 1 12.956 12.956", key: "5bsfdx" }],
  ["path", { d: "M9 17V9", key: "ojradj" }]
], e6 = e("circle-parking-off", J8);
const t6 = [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "M9 17V7h4a3 3 0 0 1 0 6H9", key: "1dfk2c" }]
], a6 = e("circle-parking", t6);
const o6 = [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["line", { x1: "10", x2: "10", y1: "15", y2: "9", key: "c1nkhi" }],
  ["line", { x1: "14", x2: "14", y1: "15", y2: "9", key: "h65svq" }]
], n6 = e("circle-pause", o6);
const c6 = [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "m15 9-6 6", key: "1uzhvr" }],
  ["path", { d: "M9 9h.01", key: "1q5me6" }],
  ["path", { d: "M15 15h.01", key: "lqbp3k" }]
], r6 = e("circle-percent", c6);
const h6 = [
  ["circle", { cx: "12", cy: "19", r: "2", key: "13j0tp" }],
  ["circle", { cx: "12", cy: "5", r: "2", key: "f1ur92" }],
  ["circle", { cx: "16", cy: "12", r: "2", key: "4ma0v8" }],
  ["circle", { cx: "20", cy: "19", r: "2", key: "1obnsp" }],
  ["circle", { cx: "4", cy: "19", r: "2", key: "p3m9r0" }],
  ["circle", { cx: "8", cy: "12", r: "2", key: "1nvbw3" }]
], d6 = e("circle-pile", h6);
const i6 = [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "M8 12h8", key: "1wcyev" }],
  ["path", { d: "M12 8v8", key: "napkw2" }]
], s6 = e("circle-plus", i6);
const y6 = [
  [
    "path",
    {
      d: "M9 9.003a1 1 0 0 1 1.517-.859l4.997 2.997a1 1 0 0 1 0 1.718l-4.997 2.997A1 1 0 0 1 9 14.996z",
      key: "kmsa83"
    }
  ],
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }]
], p6 = e("circle-play", y6);
const k6 = [
  ["path", { d: "M10 16V9.5a1 1 0 0 1 5 0", key: "1i1are" }],
  ["path", { d: "M8 12h4", key: "qz6y1c" }],
  ["path", { d: "M8 16h7", key: "sbedsn" }],
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }]
], l6 = e("circle-pound-sterling", k6);
const u6 = [
  ["path", { d: "M12 7v4", key: "xawao1" }],
  ["path", { d: "M7.998 9.003a5 5 0 1 0 8-.005", key: "1pek45" }],
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }]
], M6 = e("circle-power", u6);
const f6 = [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3", key: "1u773s" }],
  ["path", { d: "M12 17h.01", key: "p32p05" }]
], m6 = e("circle-question-mark", f6);
const v6 = [
  ["path", { d: "M22 2 2 22", key: "y4kqgn" }],
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }]
], g6 = e("circle-slash-2", v6);
const _6 = [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["line", { x1: "9", x2: "15", y1: "15", y2: "9", key: "1dfufj" }]
], x6 = e("circle-slash", _6);
const b6 = [
  [
    "path",
    {
      d: "M11.051 7.616a1 1 0 0 1 1.909.024l.737 1.452a1 1 0 0 0 .737.535l1.634.256a1 1 0 0 1 .588 1.806l-1.172 1.168a1 1 0 0 0-.282.866l.259 1.613a1 1 0 0 1-1.541 1.134l-1.465-.75a1 1 0 0 0-.912 0l-1.465.75a1 1 0 0 1-1.539-1.133l.258-1.613a1 1 0 0 0-.282-.867l-1.156-1.152a1 1 0 0 1 .572-1.822l1.633-.256a1 1 0 0 0 .737-.535z",
      key: "285bvi"
    }
  ],
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }]
], w6 = e("circle-star", b6);
const N6 = [["circle", { cx: "12", cy: "12", r: "6", key: "1vlfrh" }]], $6 = e("circle-small", N6);
const z6 = [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["rect", { x: "9", y: "9", width: "6", height: "6", rx: "1", key: "1ssd4o" }]
], j6 = e("circle-stop", z6);
const q6 = [
  ["path", { d: "M18 20a6 6 0 0 0-12 0", key: "1qehca" }],
  ["circle", { cx: "12", cy: "10", r: "4", key: "1h16sb" }],
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }]
], A6 = e("circle-user-round", q6);
const H6 = [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["circle", { cx: "12", cy: "10", r: "3", key: "ilqhr7" }],
  ["path", { d: "M7 20.662V19a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v1.662", key: "154egf" }]
], S6 = e("circle-user", H6);
const C6 = [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "m15 9-6 6", key: "1uzhvr" }],
  ["path", { d: "m9 9 6 6", key: "z0biqf" }]
], V6 = e("circle-x", C6);
const R6 = [["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }]], E6 = e("circle", R6);
const L6 = [
  ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", key: "afitv7" }],
  ["path", { d: "M11 9h4a2 2 0 0 0 2-2V3", key: "1ve2rv" }],
  ["circle", { cx: "9", cy: "9", r: "2", key: "af1f0g" }],
  ["path", { d: "M7 21v-4a2 2 0 0 1 2-2h4", key: "1fwkro" }],
  ["circle", { cx: "15", cy: "15", r: "2", key: "3i40o0" }]
], P6 = e("circuit-board", L6);
const T6 = [
  [
    "path",
    {
      d: "M21.66 17.67a1.08 1.08 0 0 1-.04 1.6A12 12 0 0 1 4.73 2.38a1.1 1.1 0 0 1 1.61-.04z",
      key: "4ite01"
    }
  ],
  ["path", { d: "M19.65 15.66A8 8 0 0 1 8.35 4.34", key: "1gxipu" }],
  ["path", { d: "m14 10-5.5 5.5", key: "92pfem" }],
  ["path", { d: "M14 17.85V10H6.15", key: "xqmtsk" }]
], O6 = e("citrus", T6);
const D6 = [
  [
    "path",
    { d: "M20.2 6 3 11l-.9-2.4c-.3-1.1.3-2.2 1.3-2.5l13.5-4c1.1-.3 2.2.3 2.5 1.3Z", key: "1tn4o7" }
  ],
  ["path", { d: "m6.2 5.3 3.1 3.9", key: "iuk76l" }],
  ["path", { d: "m12.4 3.4 3.1 4", key: "6hsd6n" }],
  ["path", { d: "M3 11h18v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2Z", key: "ltgou9" }]
], I6 = e("clapperboard", D6);
const F6 = [
  ["rect", { width: "8", height: "4", x: "8", y: "2", rx: "1", ry: "1", key: "tgr4d6" }],
  [
    "path",
    {
      d: "M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2",
      key: "116196"
    }
  ],
  ["path", { d: "m9 14 2 2 4-4", key: "df797q" }]
], B6 = e("clipboard-check", F6);
const U6 = [
  ["path", { d: "M16 14v2.2l1.6 1", key: "fo4ql5" }],
  ["path", { d: "M16 4h2a2 2 0 0 1 2 2v.832", key: "1ujtp2" }],
  ["path", { d: "M8 4H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h2", key: "qvpao1" }],
  ["circle", { cx: "16", cy: "16", r: "6", key: "qoo3c4" }],
  ["rect", { x: "8", y: "2", width: "8", height: "4", rx: "1", key: "ublpy" }]
], W6 = e("clipboard-clock", U6);
const Z6 = [
  ["rect", { width: "8", height: "4", x: "8", y: "2", rx: "1", ry: "1", key: "tgr4d6" }],
  ["path", { d: "M8 4H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-2", key: "4jdomd" }],
  ["path", { d: "M16 4h2a2 2 0 0 1 2 2v4", key: "3hqy98" }],
  ["path", { d: "M21 14H11", key: "1bme5i" }],
  ["path", { d: "m15 10-4 4 4 4", key: "5dvupr" }]
], G6 = e("clipboard-copy", Z6);
const X6 = [
  ["rect", { width: "8", height: "4", x: "8", y: "2", rx: "1", ry: "1", key: "tgr4d6" }],
  [
    "path",
    {
      d: "M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2",
      key: "116196"
    }
  ],
  ["path", { d: "M12 11h4", key: "1jrz19" }],
  ["path", { d: "M12 16h4", key: "n85exb" }],
  ["path", { d: "M8 11h.01", key: "1dfujw" }],
  ["path", { d: "M8 16h.01", key: "18s6g9" }]
], Y6 = e("clipboard-list", X6);
const K6 = [
  ["rect", { width: "8", height: "4", x: "8", y: "2", rx: "1", ry: "1", key: "tgr4d6" }],
  [
    "path",
    {
      d: "M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2",
      key: "116196"
    }
  ],
  ["path", { d: "M9 14h6", key: "159ibu" }]
], Q6 = e("clipboard-minus", K6);
const J6 = [
  ["path", { d: "M11 14h10", key: "1w8e9d" }],
  ["path", { d: "M16 4h2a2 2 0 0 1 2 2v1.344", key: "1e62lh" }],
  ["path", { d: "m17 18 4-4-4-4", key: "z2g111" }],
  ["path", { d: "M8 4H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h12a2 2 0 0 0 1.793-1.113", key: "bjbb7m" }],
  ["rect", { x: "8", y: "2", width: "8", height: "4", rx: "1", key: "ublpy" }]
], e7 = e("clipboard-paste", J6);
const t7 = [
  ["rect", { width: "8", height: "4", x: "8", y: "2", rx: "1", key: "1oijnt" }],
  ["path", { d: "M8 4H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-.5", key: "1but9f" }],
  ["path", { d: "M16 4h2a2 2 0 0 1 1.73 1", key: "1p8n7l" }],
  ["path", { d: "M8 18h1", key: "13wk12" }],
  [
    "path",
    {
      d: "M21.378 12.626a1 1 0 0 0-3.004-3.004l-4.01 4.012a2 2 0 0 0-.506.854l-.837 2.87a.5.5 0 0 0 .62.62l2.87-.837a2 2 0 0 0 .854-.506z",
      key: "2t3380"
    }
  ]
], a7 = e("clipboard-pen-line", t7);
const o7 = [
  ["rect", { width: "8", height: "4", x: "8", y: "2", rx: "1", key: "1oijnt" }],
  ["path", { d: "M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-5.5", key: "cereej" }],
  ["path", { d: "M4 13.5V6a2 2 0 0 1 2-2h2", key: "5ua5vh" }],
  [
    "path",
    {
      d: "M13.378 15.626a1 1 0 1 0-3.004-3.004l-5.01 5.012a2 2 0 0 0-.506.854l-.837 2.87a.5.5 0 0 0 .62.62l2.87-.837a2 2 0 0 0 .854-.506z",
      key: "1y4qbx"
    }
  ]
], n7 = e("clipboard-pen", o7);
const c7 = [
  ["rect", { width: "8", height: "4", x: "8", y: "2", rx: "1", ry: "1", key: "tgr4d6" }],
  [
    "path",
    {
      d: "M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2",
      key: "116196"
    }
  ],
  ["path", { d: "M9 14h6", key: "159ibu" }],
  ["path", { d: "M12 17v-6", key: "1y8rbf" }]
], r7 = e("clipboard-plus", c7);
const h7 = [
  ["rect", { width: "8", height: "4", x: "8", y: "2", rx: "1", ry: "1", key: "tgr4d6" }],
  [
    "path",
    {
      d: "M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2",
      key: "116196"
    }
  ],
  ["path", { d: "M9 12v-1h6v1", key: "iehl6m" }],
  ["path", { d: "M11 17h2", key: "12w5me" }],
  ["path", { d: "M12 11v6", key: "1bwqyc" }]
], d7 = e("clipboard-type", h7);
const i7 = [
  ["rect", { width: "8", height: "4", x: "8", y: "2", rx: "1", ry: "1", key: "tgr4d6" }],
  [
    "path",
    {
      d: "M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2",
      key: "116196"
    }
  ],
  ["path", { d: "m15 11-6 6", key: "1toa9n" }],
  ["path", { d: "m9 11 6 6", key: "wlibny" }]
], s7 = e("clipboard-x", i7);
const y7 = [
  ["rect", { width: "8", height: "4", x: "8", y: "2", rx: "1", ry: "1", key: "tgr4d6" }],
  [
    "path",
    {
      d: "M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2",
      key: "116196"
    }
  ]
], p7 = e("clipboard", y7);
const k7 = [
  ["path", { d: "M12 6v6l2-4", key: "miptyd" }],
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }]
], l7 = e("clock-1", k7);
const u7 = [
  ["path", { d: "M12 6v6l-4-2", key: "cedpoo" }],
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }]
], M7 = e("clock-10", u7);
const f7 = [
  ["path", { d: "M12 6v6l-2-4", key: "ns39ag" }],
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }]
], m7 = e("clock-11", f7);
const v7 = [
  ["path", { d: "M12 6v6", key: "1ipuwl" }],
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }]
], g7 = e("clock-12", v7);
const _7 = [
  ["path", { d: "M12 6v6l4-2", key: "1r2kuh" }],
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }]
], x7 = e("clock-2", _7);
const b7 = [
  ["path", { d: "M12 6v6h4", key: "135r8i" }],
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }]
], w7 = e("clock-3", b7);
const N7 = [
  ["path", { d: "M12 6v6l4 2", key: "mmk7yg" }],
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }]
], $7 = e("clock-4", N7);
const z7 = [
  ["path", { d: "M12 6v6l2 4", key: "1287s9" }],
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }]
], j7 = e("clock-5", z7);
const q7 = [
  ["path", { d: "M12 6v10", key: "wf7rdh" }],
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }]
], A7 = e("clock-6", q7);
const H7 = [
  ["path", { d: "M12 6v6l-2 4", key: "1095bu" }],
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }]
], S7 = e("clock-7", H7);
const C7 = [
  ["path", { d: "M12 6v6l-4 2", key: "imc3wl" }],
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }]
], V7 = e("clock-8", C7);
const R7 = [
  ["path", { d: "M12 6v6H8", key: "u39vzm" }],
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }]
], E7 = e("clock-9", R7);
const L7 = [
  ["path", { d: "M12 6v6l4 2", key: "mmk7yg" }],
  ["path", { d: "M20 12v5", key: "12wsvk" }],
  ["path", { d: "M20 21h.01", key: "1p6o6n" }],
  ["path", { d: "M21.25 8.2A10 10 0 1 0 16 21.16", key: "17fp9f" }]
], P7 = e("clock-alert", L7);
const T7 = [
  ["path", { d: "M12 6v6l2 1", key: "19cm8n" }],
  ["path", { d: "M12.337 21.994a10 10 0 1 1 9.588-8.767", key: "28moa" }],
  ["path", { d: "m14 18 4 4 4-4", key: "1waygx" }],
  ["path", { d: "M18 14v8", key: "irew45" }]
], O7 = e("clock-arrow-down", T7);
const D7 = [
  ["path", { d: "M12 6v6l1.56.78", key: "14ed3g" }],
  ["path", { d: "M13.227 21.925a10 10 0 1 1 8.767-9.588", key: "jwkls1" }],
  ["path", { d: "m14 18 4-4 4 4", key: "ftkppy" }],
  ["path", { d: "M18 22v-8", key: "su0gjh" }]
], I7 = e("clock-arrow-up", D7);
const F7 = [
  ["path", { d: "M12 6v6l4 2", key: "mmk7yg" }],
  ["path", { d: "M22 12a10 10 0 1 0-11 9.95", key: "17dhok" }],
  ["path", { d: "m22 16-5.5 5.5L14 19", key: "1eibut" }]
], B7 = e("clock-check", F7);
const U7 = [
  ["path", { d: "M12 2a10 10 0 0 1 7.38 16.75", key: "175t95" }],
  ["path", { d: "M12 6v6l4 2", key: "mmk7yg" }],
  ["path", { d: "M2.5 8.875a10 10 0 0 0-.5 3", key: "1vce0s" }],
  ["path", { d: "M2.83 16a10 10 0 0 0 2.43 3.4", key: "o3fkw4" }],
  ["path", { d: "M4.636 5.235a10 10 0 0 1 .891-.857", key: "1szpfk" }],
  ["path", { d: "M8.644 21.42a10 10 0 0 0 7.631-.38", key: "9yhvd4" }]
], W7 = e("clock-fading", U7);
const Z7 = [
  ["path", { d: "M12 6v6l3.644 1.822", key: "1jmett" }],
  ["path", { d: "M16 19h6", key: "xwg31i" }],
  ["path", { d: "M19 16v6", key: "tddt3s" }],
  ["path", { d: "M21.92 13.267a10 10 0 1 0-8.653 8.653", key: "1u0osk" }]
], G7 = e("clock-plus", Z7);
const X7 = [
  ["path", { d: "M12 6v6l4 2", key: "mmk7yg" }],
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }]
], Y7 = e("clock", X7);
const K7 = [
  ["path", { d: "M10 9.17a3 3 0 1 0 0 5.66", key: "h9wayk" }],
  ["path", { d: "M17 9.17a3 3 0 1 0 0 5.66", key: "1v6zke" }],
  ["rect", { x: "2", y: "5", width: "20", height: "14", rx: "2", key: "qneu4z" }]
], Q7 = e("closed-caption", K7);
const J7 = [
  ["path", { d: "M12 12v4", key: "tww15h" }],
  ["path", { d: "M12 20h.01", key: "zekei9" }],
  ["path", { d: "M17 18h.5a1 1 0 0 0 0-9h-1.79A7 7 0 1 0 7 17.708", key: "xsb5ju" }]
], eu = e("cloud-alert", J7);
const tu = [
  ["path", { d: "M21 15.251A4.5 4.5 0 0 0 17.5 8h-1.79A7 7 0 1 0 3 13.607", key: "xpoh9y" }],
  ["path", { d: "M7 11v4h4", key: "q9yh32" }],
  [
    "path",
    {
      d: "M8 19a5 5 0 0 0 9-3 4.5 4.5 0 0 0-4.5-4.5 4.82 4.82 0 0 0-3.41 1.41L7 15",
      key: "1xm8iu"
    }
  ]
], au = e("cloud-backup", tu);
const ou = [
  ["path", { d: "m17 15-5.5 5.5L9 18", key: "15q87x" }],
  ["path", { d: "M5 17.743A7 7 0 1 1 15.71 10h1.79a4.5 4.5 0 0 1 1.5 8.742", key: "9ho6ki" }]
], nu = e("cloud-check", ou);
const cu = [
  ["path", { d: "m10.852 19.772-.383.924", key: "r7sl7d" }],
  ["path", { d: "m13.148 14.228.383-.923", key: "1d5zpm" }],
  ["path", { d: "M13.148 19.772a3 3 0 1 0-2.296-5.544l-.383-.923", key: "1ydik7" }],
  ["path", { d: "m13.53 20.696-.382-.924a3 3 0 1 1-2.296-5.544", key: "1m1vsf" }],
  ["path", { d: "m14.772 15.852.923-.383", key: "660p6e" }],
  ["path", { d: "m14.772 18.148.923.383", key: "hrcpis" }],
  [
    "path",
    {
      d: "M4.2 15.1a7 7 0 1 1 9.93-9.858A7 7 0 0 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.2",
      key: "j2q98n"
    }
  ],
  ["path", { d: "m9.228 15.852-.923-.383", key: "1p9ong" }],
  ["path", { d: "m9.228 18.148-.923.383", key: "6558rz" }]
], ru = e("cloud-cog", cu);
const hu = [
  ["path", { d: "M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242", key: "1pljnt" }],
  ["path", { d: "M8 19v1", key: "1dk2by" }],
  ["path", { d: "M8 14v1", key: "84yxot" }],
  ["path", { d: "M16 19v1", key: "v220m7" }],
  ["path", { d: "M16 14v1", key: "g12gj6" }],
  ["path", { d: "M12 21v1", key: "q8vafk" }],
  ["path", { d: "M12 16v1", key: "1mx6rx" }]
], du = e("cloud-drizzle", hu);
const iu = [
  ["path", { d: "M12 13v8l-4-4", key: "1f5nwf" }],
  ["path", { d: "m12 21 4-4", key: "1lfcce" }],
  ["path", { d: "M4.393 15.269A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.436 8.284", key: "ui1hmy" }]
], su = e("cloud-download", iu);
const yu = [
  ["path", { d: "M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242", key: "1pljnt" }],
  ["path", { d: "M16 17H7", key: "pygtm1" }],
  ["path", { d: "M17 21H9", key: "1u2q02" }]
], pu = e("cloud-fog", yu);
const ku = [
  ["path", { d: "M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242", key: "1pljnt" }],
  ["path", { d: "M16 14v2", key: "a1is7l" }],
  ["path", { d: "M8 14v2", key: "1e9m6t" }],
  ["path", { d: "M16 20h.01", key: "xwek51" }],
  ["path", { d: "M8 20h.01", key: "1vjney" }],
  ["path", { d: "M12 16v2", key: "z66u1j" }],
  ["path", { d: "M12 22h.01", key: "1urd7a" }]
], lu = e("cloud-hail", ku);
const uu = [
  ["path", { d: "M6 16.326A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 .5 8.973", key: "1cez44" }],
  ["path", { d: "m13 12-3 5h4l-3 5", key: "1t22er" }]
], Mu = e("cloud-lightning", uu);
const fu = [
  ["path", { d: "M11 20v2", key: "174qtz" }],
  [
    "path",
    {
      d: "M18.376 14.512a6 6 0 0 0 3.461-4.127c.148-.625-.659-.97-1.248-.714a4 4 0 0 1-5.259-5.26c.255-.589-.09-1.395-.716-1.248a6 6 0 0 0-4.594 5.36",
      key: "zwnc1e"
    }
  ],
  ["path", { d: "M3 20a5 5 0 1 1 8.9-4H13a3 3 0 0 1 2 5.24", key: "1qmrp3" }],
  ["path", { d: "M7 19v2", key: "12npes" }]
], mu = e("cloud-moon-rain", fu);
const vu = [
  ["path", { d: "M13 16a3 3 0 0 1 0 6H7a5 5 0 1 1 4.9-6z", key: "ie2ih4" }],
  [
    "path",
    {
      d: "M18.376 14.512a6 6 0 0 0 3.461-4.127c.148-.625-.659-.97-1.248-.714a4 4 0 0 1-5.259-5.26c.255-.589-.09-1.395-.716-1.248a6 6 0 0 0-4.594 5.36",
      key: "zwnc1e"
    }
  ]
], gu = e("cloud-moon", vu);
const _u = [
  ["path", { d: "M10.94 5.274A7 7 0 0 1 15.71 10h1.79a4.5 4.5 0 0 1 4.222 6.057", key: "1uxyv8" }],
  ["path", { d: "M18.796 18.81A4.5 4.5 0 0 1 17.5 19H9A7 7 0 0 1 5.79 5.78", key: "99tcn7" }],
  ["path", { d: "m2 2 20 20", key: "1ooewy" }]
], xu = e("cloud-off", _u);
const bu = [
  ["path", { d: "M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242", key: "1pljnt" }],
  ["path", { d: "m9.2 22 3-7", key: "sb5f6j" }],
  ["path", { d: "m9 13-3 7", key: "500co5" }],
  ["path", { d: "m17 13-3 7", key: "8t2fiy" }]
], wu = e("cloud-rain-wind", bu);
const Nu = [
  ["path", { d: "M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242", key: "1pljnt" }],
  ["path", { d: "M16 14v6", key: "1j4efv" }],
  ["path", { d: "M8 14v6", key: "17c4r9" }],
  ["path", { d: "M12 16v6", key: "c8a4gj" }]
], $u = e("cloud-rain", Nu);
const zu = [
  ["path", { d: "M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242", key: "1pljnt" }],
  ["path", { d: "M8 15h.01", key: "a7atzg" }],
  ["path", { d: "M8 19h.01", key: "puxtts" }],
  ["path", { d: "M12 17h.01", key: "p32p05" }],
  ["path", { d: "M12 21h.01", key: "h35vbk" }],
  ["path", { d: "M16 15h.01", key: "rnfrdf" }],
  ["path", { d: "M16 19h.01", key: "1vcnzz" }]
], ju = e("cloud-snow", zu);
const qu = [
  ["path", { d: "M12 2v2", key: "tus03m" }],
  ["path", { d: "m4.93 4.93 1.41 1.41", key: "149t6j" }],
  ["path", { d: "M20 12h2", key: "1q8mjw" }],
  ["path", { d: "m19.07 4.93-1.41 1.41", key: "1shlcs" }],
  ["path", { d: "M15.947 12.65a4 4 0 0 0-5.925-4.128", key: "dpwdj0" }],
  ["path", { d: "M3 20a5 5 0 1 1 8.9-4H13a3 3 0 0 1 2 5.24", key: "1qmrp3" }],
  ["path", { d: "M11 20v2", key: "174qtz" }],
  ["path", { d: "M7 19v2", key: "12npes" }]
], Au = e("cloud-sun-rain", qu);
const Hu = [
  ["path", { d: "M12 2v2", key: "tus03m" }],
  ["path", { d: "m4.93 4.93 1.41 1.41", key: "149t6j" }],
  ["path", { d: "M20 12h2", key: "1q8mjw" }],
  ["path", { d: "m19.07 4.93-1.41 1.41", key: "1shlcs" }],
  ["path", { d: "M15.947 12.65a4 4 0 0 0-5.925-4.128", key: "dpwdj0" }],
  ["path", { d: "M13 22H7a5 5 0 1 1 4.9-6H13a3 3 0 0 1 0 6Z", key: "s09mg5" }]
], Su = e("cloud-sun", Hu);
const Cu = [
  ["path", { d: "m17 18-1.535 1.605a5 5 0 0 1-8-1.5", key: "adpv5j" }],
  ["path", { d: "M17 22v-4h-4", key: "ex1ofj" }],
  [
    "path",
    { d: "M20.996 15.251A4.5 4.5 0 0 0 17.495 8h-1.79a7 7 0 1 0-12.709 5.607", key: "ziqt14" }
  ],
  ["path", { d: "M7 10v4h4", key: "1j6gx1" }],
  ["path", { d: "m7 14 1.535-1.605a5 5 0 0 1 8 1.5", key: "19q5h7" }]
], Vu = e("cloud-sync", Cu);
const Ru = [
  ["path", { d: "M12 13v8", key: "1l5pq0" }],
  ["path", { d: "M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242", key: "1pljnt" }],
  ["path", { d: "m8 17 4-4 4 4", key: "1quai1" }]
], Eu = e("cloud-upload", Ru);
const Lu = [
  ["path", { d: "M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z", key: "p7xjir" }]
], Pu = e("cloud", Lu);
const Tu = [
  ["path", { d: "M16.17 7.83 2 22", key: "t58vo8" }],
  [
    "path",
    {
      d: "M4.02 12a2.827 2.827 0 1 1 3.81-4.17A2.827 2.827 0 1 1 12 4.02a2.827 2.827 0 1 1 4.17 3.81A2.827 2.827 0 1 1 19.98 12a2.827 2.827 0 1 1-3.81 4.17A2.827 2.827 0 1 1 12 19.98a2.827 2.827 0 1 1-4.17-3.81A1 1 0 1 1 4 12",
      key: "17k36q"
    }
  ],
  ["path", { d: "m7.83 7.83 8.34 8.34", key: "1d7sxk" }]
], Ou = e("clover", Tu);
const Du = [
  ["path", { d: "M17.5 12a1 1 0 1 1 0 9H9.006a7 7 0 1 1 6.702-9z", key: "44yre2" }],
  ["path", { d: "M21.832 9A3 3 0 0 0 19 7h-2.207a5.5 5.5 0 0 0-10.72.61", key: "leugyv" }]
], Iu = e("cloudy", Du);
const Fu = [
  [
    "path",
    {
      d: "M17.28 9.05a5.5 5.5 0 1 0-10.56 0A5.5 5.5 0 1 0 12 17.66a5.5 5.5 0 1 0 5.28-8.6Z",
      key: "27yuqz"
    }
  ],
  ["path", { d: "M12 17.66L12 22", key: "ogfahf" }]
], Bu = e("club", Fu);
const Uu = [
  ["path", { d: "m18 16 4-4-4-4", key: "1inbqp" }],
  ["path", { d: "m6 8-4 4 4 4", key: "15zrgr" }],
  ["path", { d: "m14.5 4-5 16", key: "e7oirm" }]
], Wu = e("code-xml", Uu);
const Zu = [
  ["path", { d: "m16 18 6-6-6-6", key: "eg8j8" }],
  ["path", { d: "m8 6-6 6 6 6", key: "ppft3o" }]
], Gu = e("code", Zu);
const Xu = [
  ["polygon", { points: "12 2 22 8.5 22 15.5 12 22 2 15.5 2 8.5 12 2", key: "srzb37" }],
  ["line", { x1: "12", x2: "12", y1: "22", y2: "15.5", key: "1t73f2" }],
  ["polyline", { points: "22 8.5 12 15.5 2 8.5", key: "ajlxae" }],
  ["polyline", { points: "2 15.5 12 8.5 22 15.5", key: "susrui" }],
  ["line", { x1: "12", x2: "12", y1: "2", y2: "8.5", key: "2cldga" }]
], Yu = e("codepen", Xu);
const Ku = [
  [
    "path",
    {
      d: "M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z",
      key: "yt0hxn"
    }
  ],
  ["polyline", { points: "7.5 4.21 12 6.81 16.5 4.21", key: "fabo96" }],
  ["polyline", { points: "7.5 19.79 7.5 14.6 3 12", key: "z377f1" }],
  ["polyline", { points: "21 12 16.5 14.6 16.5 19.79", key: "9nrev1" }],
  ["polyline", { points: "3.27 6.96 12 12.01 20.73 6.96", key: "1180pa" }],
  ["line", { x1: "12", x2: "12", y1: "22.08", y2: "12", key: "3z3uq6" }]
], Qu = e("codesandbox", Ku);
const Ju = [
  ["path", { d: "M10 2v2", key: "7u0qdc" }],
  ["path", { d: "M14 2v2", key: "6buw04" }],
  [
    "path",
    {
      d: "M16 8a1 1 0 0 1 1 1v8a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V9a1 1 0 0 1 1-1h14a4 4 0 1 1 0 8h-1",
      key: "pwadti"
    }
  ],
  ["path", { d: "M6 2v2", key: "colzsn" }]
], e9 = e("coffee", Ju);
const t9 = [
  ["path", { d: "M11 10.27 7 3.34", key: "16pf9h" }],
  ["path", { d: "m11 13.73-4 6.93", key: "794ttg" }],
  ["path", { d: "M12 22v-2", key: "1osdcq" }],
  ["path", { d: "M12 2v2", key: "tus03m" }],
  ["path", { d: "M14 12h8", key: "4f43i9" }],
  ["path", { d: "m17 20.66-1-1.73", key: "eq3orb" }],
  ["path", { d: "m17 3.34-1 1.73", key: "2wel8s" }],
  ["path", { d: "M2 12h2", key: "1t8f8n" }],
  ["path", { d: "m20.66 17-1.73-1", key: "sg0v6f" }],
  ["path", { d: "m20.66 7-1.73 1", key: "1ow05n" }],
  ["path", { d: "m3.34 17 1.73-1", key: "nuk764" }],
  ["path", { d: "m3.34 7 1.73 1", key: "1ulond" }],
  ["circle", { cx: "12", cy: "12", r: "2", key: "1c9p78" }],
  ["circle", { cx: "12", cy: "12", r: "8", key: "46899m" }]
], a9 = e("cog", t9);
const o9 = [
  ["circle", { cx: "8", cy: "8", r: "6", key: "3yglwk" }],
  ["path", { d: "M18.09 10.37A6 6 0 1 1 10.34 18", key: "t5s6rm" }],
  ["path", { d: "M7 6h1v4", key: "1obek4" }],
  ["path", { d: "m16.71 13.88.7.71-2.82 2.82", key: "1rbuyh" }]
], n9 = e("coins", o9);
const c9 = [
  ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", key: "afitv7" }],
  ["path", { d: "M12 3v18", key: "108xh3" }]
], r9 = e("columns-2", c9);
const h9 = [
  ["path", { d: "M10.5 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v5.5", key: "1g2yzs" }],
  ["path", { d: "m14.3 19.6 1-.4", key: "11sv9r" }],
  ["path", { d: "M15 3v7.5", key: "7lm50a" }],
  ["path", { d: "m15.2 16.9-.9-.3", key: "1t7mvx" }],
  ["path", { d: "m16.6 21.7.3-.9", key: "1j67ps" }],
  ["path", { d: "m16.8 15.3-.4-1", key: "1ei7r6" }],
  ["path", { d: "m19.1 15.2.3-.9", key: "18r7jp" }],
  ["path", { d: "m19.6 21.7-.4-1", key: "z2vh2" }],
  ["path", { d: "m20.7 16.8 1-.4", key: "19m87a" }],
  ["path", { d: "m21.7 19.4-.9-.3", key: "1qgwi9" }],
  ["path", { d: "M9 3v18", key: "fh3hqa" }],
  ["circle", { cx: "18", cy: "18", r: "3", key: "1xkwt0" }]
], d9 = e("columns-3-cog", h9);
const i9 = [
  ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", key: "afitv7" }],
  ["path", { d: "M9 3v18", key: "fh3hqa" }],
  ["path", { d: "M15 3v18", key: "14nvp0" }]
], s9 = e("columns-3", i9);
const y9 = [
  ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", key: "afitv7" }],
  ["path", { d: "M7.5 3v18", key: "w0wo6v" }],
  ["path", { d: "M12 3v18", key: "108xh3" }],
  ["path", { d: "M16.5 3v18", key: "10tjh1" }]
], p9 = e("columns-4", y9);
const k9 = [
  ["path", { d: "M14 3a1 1 0 0 1 1 1v5a1 1 0 0 1-1 1", key: "1l7d7l" }],
  ["path", { d: "M19 3a1 1 0 0 1 1 1v5a1 1 0 0 1-1 1", key: "9955pe" }],
  ["path", { d: "m7 15 3 3", key: "4hkfgk" }],
  ["path", { d: "m7 21 3-3H5a2 2 0 0 1-2-2v-2", key: "1xljwe" }],
  ["rect", { x: "14", y: "14", width: "7", height: "7", rx: "1", key: "1cdgtw" }],
  ["rect", { x: "3", y: "3", width: "7", height: "7", rx: "1", key: "zi3rio" }]
], l9 = e("combine", k9);
const u9 = [
  [
    "path",
    { d: "M15 6v12a3 3 0 1 0 3-3H6a3 3 0 1 0 3 3V6a3 3 0 1 0-3 3h12a3 3 0 1 0-3-3", key: "11bfej" }
  ]
], M9 = e("command", u9);
const f9 = [
  [
    "path",
    {
      d: "m16.24 7.76-1.804 5.411a2 2 0 0 1-1.265 1.265L7.76 16.24l1.804-5.411a2 2 0 0 1 1.265-1.265z",
      key: "9ktpf1"
    }
  ],
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }]
], m9 = e("compass", f9);
const v9 = [
  [
    "path",
    {
      d: "M15.536 11.293a1 1 0 0 0 0 1.414l2.376 2.377a1 1 0 0 0 1.414 0l2.377-2.377a1 1 0 0 0 0-1.414l-2.377-2.377a1 1 0 0 0-1.414 0z",
      key: "1uwlt4"
    }
  ],
  [
    "path",
    {
      d: "M2.297 11.293a1 1 0 0 0 0 1.414l2.377 2.377a1 1 0 0 0 1.414 0l2.377-2.377a1 1 0 0 0 0-1.414L6.088 8.916a1 1 0 0 0-1.414 0z",
      key: "10291m"
    }
  ],
  [
    "path",
    {
      d: "M8.916 17.912a1 1 0 0 0 0 1.415l2.377 2.376a1 1 0 0 0 1.414 0l2.377-2.376a1 1 0 0 0 0-1.415l-2.377-2.376a1 1 0 0 0-1.414 0z",
      key: "1tqoq1"
    }
  ],
  [
    "path",
    {
      d: "M8.916 4.674a1 1 0 0 0 0 1.414l2.377 2.376a1 1 0 0 0 1.414 0l2.377-2.376a1 1 0 0 0 0-1.414l-2.377-2.377a1 1 0 0 0-1.414 0z",
      key: "1x6lto"
    }
  ]
], g9 = e("component", v9);
const _9 = [
  ["rect", { width: "14", height: "8", x: "5", y: "2", rx: "2", key: "wc9tft" }],
  ["rect", { width: "20", height: "8", x: "2", y: "14", rx: "2", key: "w68u3i" }],
  ["path", { d: "M6 18h2", key: "rwmk9e" }],
  ["path", { d: "M12 18h6", key: "aqd8w3" }]
], x9 = e("computer", _9);
const b9 = [
  [
    "path",
    { d: "M3 20a1 1 0 0 1-1-1v-1a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v1a1 1 0 0 1-1 1Z", key: "1pvr1r" }
  ],
  ["path", { d: "M20 16a8 8 0 1 0-16 0", key: "1pa543" }],
  ["path", { d: "M12 4v4", key: "1bq03y" }],
  ["path", { d: "M10 4h4", key: "1xpv9s" }]
], w9 = e("concierge-bell", b9);
const N9 = [
  ["path", { d: "m20.9 18.55-8-15.98a1 1 0 0 0-1.8 0l-8 15.98", key: "53pte7" }],
  ["ellipse", { cx: "12", cy: "19", rx: "9", ry: "3", key: "1ji25f" }]
], $9 = e("cone", N9);
const z9 = [
  ["rect", { x: "2", y: "6", width: "20", height: "8", rx: "1", key: "1estib" }],
  ["path", { d: "M17 14v7", key: "7m2elx" }],
  ["path", { d: "M7 14v7", key: "1cm7wv" }],
  ["path", { d: "M17 3v3", key: "1v4jwn" }],
  ["path", { d: "M7 3v3", key: "7o6guu" }],
  ["path", { d: "M10 14 2.3 6.3", key: "1023jk" }],
  ["path", { d: "m14 6 7.7 7.7", key: "1s8pl2" }],
  ["path", { d: "m8 6 8 8", key: "hl96qh" }]
], j9 = e("construction", z9);
const q9 = [
  ["path", { d: "M16 2v2", key: "scm5qe" }],
  ["path", { d: "M17.915 22a6 6 0 0 0-12 0", key: "suqz9p" }],
  ["path", { d: "M8 2v2", key: "pbkmx" }],
  ["circle", { cx: "12", cy: "12", r: "4", key: "4exip2" }],
  ["rect", { x: "3", y: "4", width: "18", height: "18", rx: "2", key: "12vinp" }]
], A9 = e("contact-round", q9);
const H9 = [
  ["path", { d: "M16 2v2", key: "scm5qe" }],
  ["path", { d: "M7 22v-2a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v2", key: "1waht3" }],
  ["path", { d: "M8 2v2", key: "pbkmx" }],
  ["circle", { cx: "12", cy: "11", r: "3", key: "itu57m" }],
  ["rect", { x: "3", y: "4", width: "18", height: "18", rx: "2", key: "12vinp" }]
], S9 = e("contact", H9);
const C9 = [
  [
    "path",
    {
      d: "M22 7.7c0-.6-.4-1.2-.8-1.5l-6.3-3.9a1.72 1.72 0 0 0-1.7 0l-10.3 6c-.5.2-.9.8-.9 1.4v6.6c0 .5.4 1.2.8 1.5l6.3 3.9a1.72 1.72 0 0 0 1.7 0l10.3-6c.5-.3.9-1 .9-1.5Z",
      key: "1t2lqe"
    }
  ],
  ["path", { d: "M10 21.9V14L2.1 9.1", key: "o7czzq" }],
  ["path", { d: "m10 14 11.9-6.9", key: "zm5e20" }],
  ["path", { d: "M14 19.8v-8.1", key: "159ecu" }],
  ["path", { d: "M18 17.5V9.4", key: "11uown" }]
], V9 = e("container", C9);
const R9 = [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "M12 18a6 6 0 0 0 0-12v12z", key: "j4l70d" }]
], E9 = e("contrast", R9);
const L9 = [
  ["path", { d: "M12 2a10 10 0 1 0 10 10 4 4 0 0 1-5-5 4 4 0 0 1-5-5", key: "laymnq" }],
  ["path", { d: "M8.5 8.5v.01", key: "ue8clq" }],
  ["path", { d: "M16 15.5v.01", key: "14dtrp" }],
  ["path", { d: "M12 12v.01", key: "u5ubse" }],
  ["path", { d: "M11 17v.01", key: "1hyl5a" }],
  ["path", { d: "M7 14v.01", key: "uct60s" }]
], P9 = e("cookie", L9);
const T9 = [
  ["path", { d: "M2 12h20", key: "9i4pu4" }],
  ["path", { d: "M20 12v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-8", key: "u0tga0" }],
  ["path", { d: "m4 8 16-4", key: "16g0ng" }],
  [
    "path",
    {
      d: "m8.86 6.78-.45-1.81a2 2 0 0 1 1.45-2.43l1.94-.48a2 2 0 0 1 2.43 1.46l.45 1.8",
      key: "12cejc"
    }
  ]
], O9 = e("cooking-pot", T9);
const D9 = [
  ["path", { d: "m12 15 2 2 4-4", key: "2c609p" }],
  ["rect", { width: "14", height: "14", x: "8", y: "8", rx: "2", ry: "2", key: "17jyea" }],
  ["path", { d: "M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2", key: "zix9uf" }]
], I9 = e("copy-check", D9);
const F9 = [
  ["line", { x1: "12", x2: "18", y1: "15", y2: "15", key: "1nscbv" }],
  ["rect", { width: "14", height: "14", x: "8", y: "8", rx: "2", ry: "2", key: "17jyea" }],
  ["path", { d: "M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2", key: "zix9uf" }]
], B9 = e("copy-minus", F9);
const U9 = [
  ["line", { x1: "15", x2: "15", y1: "12", y2: "18", key: "1p7wdc" }],
  ["line", { x1: "12", x2: "18", y1: "15", y2: "15", key: "1nscbv" }],
  ["rect", { width: "14", height: "14", x: "8", y: "8", rx: "2", ry: "2", key: "17jyea" }],
  ["path", { d: "M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2", key: "zix9uf" }]
], W9 = e("copy-plus", U9);
const Z9 = [
  ["line", { x1: "12", x2: "18", y1: "18", y2: "12", key: "ebkxgr" }],
  ["rect", { width: "14", height: "14", x: "8", y: "8", rx: "2", ry: "2", key: "17jyea" }],
  ["path", { d: "M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2", key: "zix9uf" }]
], G9 = e("copy-slash", Z9);
const X9 = [
  ["line", { x1: "12", x2: "18", y1: "12", y2: "18", key: "1rg63v" }],
  ["line", { x1: "12", x2: "18", y1: "18", y2: "12", key: "ebkxgr" }],
  ["rect", { width: "14", height: "14", x: "8", y: "8", rx: "2", ry: "2", key: "17jyea" }],
  ["path", { d: "M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2", key: "zix9uf" }]
], Y9 = e("copy-x", X9);
const K9 = [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "M9.17 14.83a4 4 0 1 0 0-5.66", key: "1sveal" }]
], Q9 = e("copyleft", K9);
const J9 = [
  ["rect", { width: "14", height: "14", x: "8", y: "8", rx: "2", ry: "2", key: "17jyea" }],
  ["path", { d: "M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2", key: "zix9uf" }]
], eM = e("copy", J9);
const tM = [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "M14.83 14.83a4 4 0 1 1 0-5.66", key: "1i56pz" }]
], aM = e("copyright", tM);
const oM = [
  ["path", { d: "M20 4v7a4 4 0 0 1-4 4H4", key: "6o5b7l" }],
  ["path", { d: "m9 10-5 5 5 5", key: "1kshq7" }]
], nM = e("corner-down-left", oM);
const cM = [
  ["path", { d: "m15 10 5 5-5 5", key: "qqa56n" }],
  ["path", { d: "M4 4v7a4 4 0 0 0 4 4h12", key: "z08zvw" }]
], rM = e("corner-down-right", cM);
const hM = [
  ["path", { d: "m14 15-5 5-5-5", key: "1eia93" }],
  ["path", { d: "M20 4h-7a4 4 0 0 0-4 4v12", key: "nbpdq2" }]
], dM = e("corner-left-down", hM);
const iM = [
  ["path", { d: "M14 9 9 4 4 9", key: "1af5af" }],
  ["path", { d: "M20 20h-7a4 4 0 0 1-4-4V4", key: "1blwi3" }]
], sM = e("corner-left-up", iM);
const yM = [
  ["path", { d: "m10 15 5 5 5-5", key: "1hpjnr" }],
  ["path", { d: "M4 4h7a4 4 0 0 1 4 4v12", key: "wcbgct" }]
], pM = e("corner-right-down", yM);
const kM = [
  ["path", { d: "m10 9 5-5 5 5", key: "9ctzwi" }],
  ["path", { d: "M4 20h7a4 4 0 0 0 4-4V4", key: "1plgdj" }]
], lM = e("corner-right-up", kM);
const uM = [
  ["path", { d: "M20 20v-7a4 4 0 0 0-4-4H4", key: "1nkjon" }],
  ["path", { d: "M9 14 4 9l5-5", key: "102s5s" }]
], MM = e("corner-up-left", uM);
const fM = [
  ["path", { d: "m15 14 5-5-5-5", key: "12vg1m" }],
  ["path", { d: "M4 20v-7a4 4 0 0 1 4-4h12", key: "1lu4f8" }]
], mM = e("corner-up-right", fM);
const vM = [
  ["path", { d: "M12 20v2", key: "1lh1kg" }],
  ["path", { d: "M12 2v2", key: "tus03m" }],
  ["path", { d: "M17 20v2", key: "1rnc9c" }],
  ["path", { d: "M17 2v2", key: "11trls" }],
  ["path", { d: "M2 12h2", key: "1t8f8n" }],
  ["path", { d: "M2 17h2", key: "7oei6x" }],
  ["path", { d: "M2 7h2", key: "asdhe0" }],
  ["path", { d: "M20 12h2", key: "1q8mjw" }],
  ["path", { d: "M20 17h2", key: "1fpfkl" }],
  ["path", { d: "M20 7h2", key: "1o8tra" }],
  ["path", { d: "M7 20v2", key: "4gnj0m" }],
  ["path", { d: "M7 2v2", key: "1i4yhu" }],
  ["rect", { x: "4", y: "4", width: "16", height: "16", rx: "2", key: "1vbyd7" }],
  ["rect", { x: "8", y: "8", width: "8", height: "8", rx: "1", key: "z9xiuo" }]
], gM = e("cpu", vM);
const _M = [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  [
    "path",
    { d: "M10 9.3a2.8 2.8 0 0 0-3.5 1 3.1 3.1 0 0 0 0 3.4 2.7 2.7 0 0 0 3.5 1", key: "1ss3eq" }
  ],
  [
    "path",
    { d: "M17 9.3a2.8 2.8 0 0 0-3.5 1 3.1 3.1 0 0 0 0 3.4 2.7 2.7 0 0 0 3.5 1", key: "1od56t" }
  ]
], xM = e("creative-commons", _M);
const bM = [
  ["rect", { width: "20", height: "14", x: "2", y: "5", rx: "2", key: "ynyp8z" }],
  ["line", { x1: "2", x2: "22", y1: "10", y2: "10", key: "1b3vmo" }]
], wM = e("credit-card", bM);
const NM = [
  ["path", { d: "M10.2 18H4.774a1.5 1.5 0 0 1-1.352-.97 11 11 0 0 1 .132-6.487", key: "14kkz9" }],
  ["path", { d: "M18 10.2V4.774a1.5 1.5 0 0 0-.97-1.352 11 11 0 0 0-6.486.132", key: "1g7v07" }],
  ["path", { d: "M18 5a4 3 0 0 1 4 3 2 2 0 0 1-2 2 10 10 0 0 0-5.139 1.42", key: "ratg6b" }],
  ["path", { d: "M5 18a3 4 0 0 0 3 4 2 2 0 0 0 2-2 10 10 0 0 1 1.42-5.14", key: "4454f0" }],
  [
    "path",
    {
      d: "M8.709 2.554a10 10 0 0 0-6.155 6.155 1.5 1.5 0 0 0 .676 1.626l9.807 5.42a2 2 0 0 0 2.718-2.718l-5.42-9.807a1.5 1.5 0 0 0-1.626-.676",
      key: "qmemie"
    }
  ]
], $M = e("croissant", NM);
const zM = [
  ["path", { d: "M6 2v14a2 2 0 0 0 2 2h14", key: "ron5a4" }],
  ["path", { d: "M18 22V8a2 2 0 0 0-2-2H2", key: "7s9ehn" }]
], jM = e("crop", zM);
const qM = [
  [
    "path",
    {
      d: "M4 9a2 2 0 0 0-2 2v2a2 2 0 0 0 2 2h4a1 1 0 0 1 1 1v4a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2v-4a1 1 0 0 1 1-1h4a2 2 0 0 0 2-2v-2a2 2 0 0 0-2-2h-4a1 1 0 0 1-1-1V4a2 2 0 0 0-2-2h-2a2 2 0 0 0-2 2v4a1 1 0 0 1-1 1z",
      key: "1xbrqy"
    }
  ]
], AM = e("cross", qM);
const HM = [
  [
    "path",
    {
      d: "M11.562 3.266a.5.5 0 0 1 .876 0L15.39 8.87a1 1 0 0 0 1.516.294L21.183 5.5a.5.5 0 0 1 .798.519l-2.834 10.246a1 1 0 0 1-.956.734H5.81a1 1 0 0 1-.957-.734L2.02 6.02a.5.5 0 0 1 .798-.519l4.276 3.664a1 1 0 0 0 1.516-.294z",
      key: "1vdc57"
    }
  ],
  ["path", { d: "M5 21h14", key: "11awu3" }]
], SM = e("crown", HM);
const CM = [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["line", { x1: "22", x2: "18", y1: "12", y2: "12", key: "l9bcsi" }],
  ["line", { x1: "6", x2: "2", y1: "12", y2: "12", key: "13hhkx" }],
  ["line", { x1: "12", x2: "12", y1: "6", y2: "2", key: "10w3f3" }],
  ["line", { x1: "12", x2: "12", y1: "22", y2: "18", key: "15g9kq" }]
], VM = e("crosshair", CM);
const RM = [
  [
    "path",
    {
      d: "m21.12 6.4-6.05-4.06a2 2 0 0 0-2.17-.05L2.95 8.41a2 2 0 0 0-.95 1.7v5.82a2 2 0 0 0 .88 1.66l6.05 4.07a2 2 0 0 0 2.17.05l9.95-6.12a2 2 0 0 0 .95-1.7V8.06a2 2 0 0 0-.88-1.66Z",
      key: "1u2ovd"
    }
  ],
  ["path", { d: "M10 22v-8L2.25 9.15", key: "11pn4q" }],
  ["path", { d: "m10 14 11.77-6.87", key: "1kt1wh" }]
], EM = e("cuboid", RM);
const LM = [
  ["path", { d: "m6 8 1.75 12.28a2 2 0 0 0 2 1.72h4.54a2 2 0 0 0 2-1.72L18 8", key: "8166m8" }],
  ["path", { d: "M5 8h14", key: "pcz4l3" }],
  ["path", { d: "M7 15a6.47 6.47 0 0 1 5 0 6.47 6.47 0 0 0 5 0", key: "yjz344" }],
  ["path", { d: "m12 8 1-6h2", key: "3ybfa4" }]
], PM = e("cup-soda", LM);
const TM = [
  ["circle", { cx: "12", cy: "12", r: "8", key: "46899m" }],
  ["line", { x1: "3", x2: "6", y1: "3", y2: "6", key: "1jkytn" }],
  ["line", { x1: "21", x2: "18", y1: "3", y2: "6", key: "14zfjt" }],
  ["line", { x1: "3", x2: "6", y1: "21", y2: "18", key: "iusuec" }],
  ["line", { x1: "21", x2: "18", y1: "21", y2: "18", key: "yj2dd7" }]
], OM = e("currency", TM);
const DM = [
  ["ellipse", { cx: "12", cy: "5", rx: "9", ry: "3", key: "msslwz" }],
  ["path", { d: "M3 5v14a9 3 0 0 0 18 0V5", key: "aqi0yr" }]
], IM = e("cylinder", DM);
const FM = [
  [
    "path",
    { d: "M11 11.31c1.17.56 1.54 1.69 3.5 1.69 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1", key: "157kva" }
  ],
  ["path", { d: "M11.75 18c.35.5 1.45 1 2.75 1 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1", key: "d7q6m6" }],
  ["path", { d: "M2 10h4", key: "l0bgd4" }],
  ["path", { d: "M2 14h4", key: "1gsvsf" }],
  ["path", { d: "M2 18h4", key: "1bu2t1" }],
  ["path", { d: "M2 6h4", key: "aawbzj" }],
  [
    "path",
    { d: "M7 3a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1L10 4a1 1 0 0 0-1-1z", key: "pr6s65" }
  ]
], BM = e("dam", FM);
const UM = [
  ["ellipse", { cx: "12", cy: "5", rx: "9", ry: "3", key: "msslwz" }],
  ["path", { d: "M3 12a9 3 0 0 0 5 2.69", key: "1ui2ym" }],
  ["path", { d: "M21 9.3V5", key: "6k6cib" }],
  ["path", { d: "M3 5v14a9 3 0 0 0 6.47 2.88", key: "i62tjy" }],
  ["path", { d: "M12 12v4h4", key: "1bxaet" }],
  [
    "path",
    {
      d: "M13 20a5 5 0 0 0 9-3 4.5 4.5 0 0 0-4.5-4.5c-1.33 0-2.54.54-3.41 1.41L12 16",
      key: "1f4ei9"
    }
  ]
], WM = e("database-backup", UM);
const ZM = [
  ["ellipse", { cx: "12", cy: "5", rx: "9", ry: "3", key: "msslwz" }],
  ["path", { d: "M3 5V19A9 3 0 0 0 15 21.84", key: "14ibmq" }],
  ["path", { d: "M21 5V8", key: "1marbg" }],
  ["path", { d: "M21 12L18 17H22L19 22", key: "zafso" }],
  ["path", { d: "M3 12A9 3 0 0 0 14.59 14.87", key: "1y4wr8" }]
], GM = e("database-zap", ZM);
const XM = [
  ["ellipse", { cx: "12", cy: "5", rx: "9", ry: "3", key: "msslwz" }],
  ["path", { d: "M3 5V19A9 3 0 0 0 21 19V5", key: "1wlel7" }],
  ["path", { d: "M3 12A9 3 0 0 0 21 12", key: "mv7ke4" }]
], YM = e("database", XM);
const KM = [
  ["path", { d: "m13 21-3-3 3-3", key: "s3o1nf" }],
  ["path", { d: "M20 18H10", key: "14r3mt" }],
  ["path", { d: "M3 11h.01", key: "1eifu7" }],
  ["rect", { x: "6", y: "3", width: "5", height: "8", rx: "2.5", key: "v9paqo" }]
], QM = e("decimals-arrow-left", KM);
const JM = [
  ["path", { d: "M10 18h10", key: "1y5s8o" }],
  ["path", { d: "m17 21 3-3-3-3", key: "1ammt0" }],
  ["path", { d: "M3 11h.01", key: "1eifu7" }],
  ["rect", { x: "15", y: "3", width: "5", height: "8", rx: "2.5", key: "76md6a" }],
  ["rect", { x: "6", y: "3", width: "5", height: "8", rx: "2.5", key: "v9paqo" }]
], ef = e("decimals-arrow-right", JM);
const tf = [
  [
    "path",
    {
      d: "M10 5a2 2 0 0 0-1.344.519l-6.328 5.74a1 1 0 0 0 0 1.481l6.328 5.741A2 2 0 0 0 10 19h10a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2z",
      key: "1yo7s0"
    }
  ],
  ["path", { d: "m12 9 6 6", key: "anjzzh" }],
  ["path", { d: "m18 9-6 6", key: "1fp51s" }]
], af = e("delete", tf);
const of = [
  [
    "path",
    {
      d: "M10.162 3.167A10 10 0 0 0 2 13a2 2 0 0 0 4 0v-1a2 2 0 0 1 4 0v4a2 2 0 0 0 4 0v-4a2 2 0 0 1 4 0v1a2 2 0 0 0 4-.006 10 10 0 0 0-8.161-9.826",
      key: "xi88qy"
    }
  ],
  ["path", { d: "M20.804 14.869a9 9 0 0 1-17.608 0", key: "1r28rg" }],
  ["circle", { cx: "12", cy: "4", r: "2", key: "muu5ef" }]
], nf = e("dessert", of);
const cf = [
  ["circle", { cx: "19", cy: "19", r: "2", key: "17f5cg" }],
  ["circle", { cx: "5", cy: "5", r: "2", key: "1gwv83" }],
  ["path", { d: "M6.48 3.66a10 10 0 0 1 13.86 13.86", key: "xr8kdq" }],
  ["path", { d: "m6.41 6.41 11.18 11.18", key: "uhpjw7" }],
  ["path", { d: "M3.66 6.48a10 10 0 0 0 13.86 13.86", key: "cldpwv" }]
], rf = e("diameter", cf);
const hf = [
  [
    "path",
    {
      d: "M2.7 10.3a2.41 2.41 0 0 0 0 3.41l7.59 7.59a2.41 2.41 0 0 0 3.41 0l7.59-7.59a2.41 2.41 0 0 0 0-3.41L13.7 2.71a2.41 2.41 0 0 0-3.41 0z",
      key: "1ey20j"
    }
  ],
  ["path", { d: "M8 12h8", key: "1wcyev" }]
], df = e("diamond-minus", hf);
const sf = [
  [
    "path",
    {
      d: "M2.7 10.3a2.41 2.41 0 0 0 0 3.41l7.59 7.59a2.41 2.41 0 0 0 3.41 0l7.59-7.59a2.41 2.41 0 0 0 0-3.41L13.7 2.71a2.41 2.41 0 0 0-3.41 0Z",
      key: "1tpxz2"
    }
  ],
  ["path", { d: "M9.2 9.2h.01", key: "1b7bvt" }],
  ["path", { d: "m14.5 9.5-5 5", key: "17q4r4" }],
  ["path", { d: "M14.7 14.8h.01", key: "17nsh4" }]
], yf = e("diamond-percent", sf);
const pf = [
  ["path", { d: "M12 8v8", key: "napkw2" }],
  [
    "path",
    {
      d: "M2.7 10.3a2.41 2.41 0 0 0 0 3.41l7.59 7.59a2.41 2.41 0 0 0 3.41 0l7.59-7.59a2.41 2.41 0 0 0 0-3.41L13.7 2.71a2.41 2.41 0 0 0-3.41 0z",
      key: "1ey20j"
    }
  ],
  ["path", { d: "M8 12h8", key: "1wcyev" }]
], kf = e("diamond-plus", pf);
const lf = [
  [
    "path",
    {
      d: "M2.7 10.3a2.41 2.41 0 0 0 0 3.41l7.59 7.59a2.41 2.41 0 0 0 3.41 0l7.59-7.59a2.41 2.41 0 0 0 0-3.41l-7.59-7.59a2.41 2.41 0 0 0-3.41 0Z",
      key: "1f1r0c"
    }
  ]
], uf = e("diamond", lf);
const Mf = [
  ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", ry: "2", key: "1m3agn" }],
  ["path", { d: "M12 12h.01", key: "1mp3jc" }]
], ff = e("dice-1", Mf);
const mf = [
  ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", ry: "2", key: "1m3agn" }],
  ["path", { d: "M15 9h.01", key: "x1ddxp" }],
  ["path", { d: "M9 15h.01", key: "fzyn71" }]
], vf = e("dice-2", mf);
const gf = [
  ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", ry: "2", key: "1m3agn" }],
  ["path", { d: "M16 8h.01", key: "cr5u4v" }],
  ["path", { d: "M12 12h.01", key: "1mp3jc" }],
  ["path", { d: "M8 16h.01", key: "18s6g9" }]
], _f = e("dice-3", gf);
const xf = [
  ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", ry: "2", key: "1m3agn" }],
  ["path", { d: "M16 8h.01", key: "cr5u4v" }],
  ["path", { d: "M8 8h.01", key: "1e4136" }],
  ["path", { d: "M8 16h.01", key: "18s6g9" }],
  ["path", { d: "M16 16h.01", key: "1f9h7w" }]
], bf = e("dice-4", xf);
const wf = [
  ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", ry: "2", key: "1m3agn" }],
  ["path", { d: "M16 8h.01", key: "cr5u4v" }],
  ["path", { d: "M8 8h.01", key: "1e4136" }],
  ["path", { d: "M8 16h.01", key: "18s6g9" }],
  ["path", { d: "M16 16h.01", key: "1f9h7w" }],
  ["path", { d: "M12 12h.01", key: "1mp3jc" }]
], Nf = e("dice-5", wf);
const $f = [
  ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", ry: "2", key: "1m3agn" }],
  ["path", { d: "M16 8h.01", key: "cr5u4v" }],
  ["path", { d: "M16 12h.01", key: "1l6xoz" }],
  ["path", { d: "M16 16h.01", key: "1f9h7w" }],
  ["path", { d: "M8 8h.01", key: "1e4136" }],
  ["path", { d: "M8 12h.01", key: "czm47f" }],
  ["path", { d: "M8 16h.01", key: "18s6g9" }]
], zf = e("dice-6", $f);
const jf = [
  ["rect", { width: "12", height: "12", x: "2", y: "10", rx: "2", ry: "2", key: "6agr2n" }],
  [
    "path",
    { d: "m17.92 14 3.5-3.5a2.24 2.24 0 0 0 0-3l-5-4.92a2.24 2.24 0 0 0-3 0L10 6", key: "1o487t" }
  ],
  ["path", { d: "M6 18h.01", key: "uhywen" }],
  ["path", { d: "M10 14h.01", key: "ssrbsk" }],
  ["path", { d: "M15 6h.01", key: "cblpky" }],
  ["path", { d: "M18 9h.01", key: "2061c0" }]
], qf = e("dices", jf);
const Af = [
  ["path", { d: "M12 3v14", key: "7cf3v8" }],
  ["path", { d: "M5 10h14", key: "elsbfy" }],
  ["path", { d: "M5 21h14", key: "11awu3" }]
], Hf = e("diff", Af);
const Sf = [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["circle", { cx: "12", cy: "12", r: "4", key: "4exip2" }],
  ["path", { d: "M12 12h.01", key: "1mp3jc" }]
], Cf = e("disc-2", Sf);
const Vf = [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "M6 12c0-1.7.7-3.2 1.8-4.2", key: "oqkarx" }],
  ["circle", { cx: "12", cy: "12", r: "2", key: "1c9p78" }],
  ["path", { d: "M18 12c0 1.7-.7 3.2-1.8 4.2", key: "1eah9h" }]
], Rf = e("disc-3", Vf);
const Ef = [
  ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", key: "afitv7" }],
  ["circle", { cx: "12", cy: "12", r: "5", key: "nd82uf" }],
  ["path", { d: "M12 12h.01", key: "1mp3jc" }]
], Lf = e("disc-album", Ef);
const Pf = [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["circle", { cx: "12", cy: "12", r: "2", key: "1c9p78" }]
], Tf = e("disc", Pf);
const Of = [
  ["circle", { cx: "12", cy: "6", r: "1", key: "1bh7o1" }],
  ["line", { x1: "5", x2: "19", y1: "12", y2: "12", key: "13b5wn" }],
  ["circle", { cx: "12", cy: "18", r: "1", key: "lqb9t5" }]
], Df = e("divide", Of);
const If = [
  ["path", { d: "M15 2c-1.35 1.5-2.092 3-2.5 4.5L14 8", key: "1bivrr" }],
  ["path", { d: "m17 6-2.891-2.891", key: "xu6p2f" }],
  ["path", { d: "M2 15c3.333-3 6.667-3 10-3", key: "nxix30" }],
  ["path", { d: "m2 2 20 20", key: "1ooewy" }],
  ["path", { d: "m20 9 .891.891", key: "3xwk7g" }],
  ["path", { d: "M22 9c-1.5 1.35-3 2.092-4.5 2.5l-1-1", key: "18cutr" }],
  ["path", { d: "M3.109 14.109 4 15", key: "q76aoh" }],
  ["path", { d: "m6.5 12.5 1 1", key: "cs35ky" }],
  ["path", { d: "m7 18 2.891 2.891", key: "1sisit" }],
  ["path", { d: "M9 22c1.35-1.5 2.092-3 2.5-4.5L10 16", key: "rlvei3" }]
], Ff = e("dna-off", If);
const Bf = [
  ["path", { d: "m10 16 1.5 1.5", key: "11lckj" }],
  ["path", { d: "m14 8-1.5-1.5", key: "1ohn8i" }],
  ["path", { d: "M15 2c-1.798 1.998-2.518 3.995-2.807 5.993", key: "80uv8i" }],
  ["path", { d: "m16.5 10.5 1 1", key: "696xn5" }],
  ["path", { d: "m17 6-2.891-2.891", key: "xu6p2f" }],
  ["path", { d: "M2 15c6.667-6 13.333 0 20-6", key: "1pyr53" }],
  ["path", { d: "m20 9 .891.891", key: "3xwk7g" }],
  ["path", { d: "M3.109 14.109 4 15", key: "q76aoh" }],
  ["path", { d: "m6.5 12.5 1 1", key: "cs35ky" }],
  ["path", { d: "m7 18 2.891 2.891", key: "1sisit" }],
  ["path", { d: "M9 22c1.798-1.998 2.518-3.995 2.807-5.993", key: "q3hbxp" }]
], Uf = e("dna", Bf);
const Wf = [
  ["path", { d: "M2 8h20", key: "d11cs7" }],
  ["rect", { width: "20", height: "16", x: "2", y: "4", rx: "2", key: "18n3k1" }],
  ["path", { d: "M6 16h12", key: "u522kt" }]
], Zf = e("dock", Wf);
const Gf = [
  ["path", { d: "M11.25 16.25h1.5L12 17z", key: "w7jh35" }],
  ["path", { d: "M16 14v.5", key: "1lajdz" }],
  [
    "path",
    {
      d: "M4.42 11.247A13.152 13.152 0 0 0 4 14.556C4 18.728 7.582 21 12 21s8-2.272 8-6.444a11.702 11.702 0 0 0-.493-3.309",
      key: "u7s9ue"
    }
  ],
  ["path", { d: "M8 14v.5", key: "1nzgdb" }],
  [
    "path",
    {
      d: "M8.5 8.5c-.384 1.05-1.083 2.028-2.344 2.5-1.931.722-3.576-.297-3.656-1-.113-.994 1.177-6.53 4-7 1.923-.321 3.651.845 3.651 2.235A7.497 7.497 0 0 1 14 5.277c0-1.39 1.844-2.598 3.767-2.277 2.823.47 4.113 6.006 4 7-.08.703-1.725 1.722-3.656 1-1.261-.472-1.855-1.45-2.239-2.5",
      key: "v8hric"
    }
  ]
], Xf = e("dog", Gf);
const Yf = [
  ["line", { x1: "12", x2: "12", y1: "2", y2: "22", key: "7eqyqh" }],
  ["path", { d: "M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6", key: "1b0p4s" }]
], Kf = e("dollar-sign", Yf);
const Qf = [
  [
    "path",
    {
      d: "M20.5 10a2.5 2.5 0 0 1-2.4-3H18a2.95 2.95 0 0 1-2.6-4.4 10 10 0 1 0 6.3 7.1c-.3.2-.8.3-1.2.3",
      key: "19sr3x"
    }
  ],
  ["circle", { cx: "12", cy: "12", r: "3", key: "1v7zrd" }]
], Jf = e("donut", Qf);
const em = [
  ["path", { d: "M10 12h.01", key: "1kxr2c" }],
  ["path", { d: "M18 9V6a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v14", key: "1bnhmg" }],
  ["path", { d: "M2 20h8", key: "10ntw1" }],
  ["path", { d: "M20 17v-2a2 2 0 1 0-4 0v2", key: "pwaxnr" }],
  ["rect", { x: "14", y: "17", width: "8", height: "5", rx: "1", key: "15pjcy" }]
], tm = e("door-closed-locked", em);
const am = [
  ["path", { d: "M10 12h.01", key: "1kxr2c" }],
  ["path", { d: "M18 20V6a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v14", key: "36qu9e" }],
  ["path", { d: "M2 20h20", key: "owomy5" }]
], om = e("door-closed", am);
const nm = [
  ["path", { d: "M11 20H2", key: "nlcfvz" }],
  [
    "path",
    {
      d: "M11 4.562v16.157a1 1 0 0 0 1.242.97L19 20V5.562a2 2 0 0 0-1.515-1.94l-4-1A2 2 0 0 0 11 4.561z",
      key: "au4z13"
    }
  ],
  ["path", { d: "M11 4H8a2 2 0 0 0-2 2v14", key: "74r1mk" }],
  ["path", { d: "M14 12h.01", key: "1jfl7z" }],
  ["path", { d: "M22 20h-3", key: "vhrsz" }]
], cm = e("door-open", nm);
const rm = [["circle", { cx: "12.1", cy: "12.1", r: "1", key: "18d7e5" }]], hm = e("dot", rm);
const dm = [
  ["path", { d: "M12 15V3", key: "m9g1x1" }],
  ["path", { d: "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4", key: "ih7n3h" }],
  ["path", { d: "m7 10 5 5 5-5", key: "brsn70" }]
], im = e("download", dm);
const sm = [
  ["path", { d: "m12.99 6.74 1.93 3.44", key: "iwagvd" }],
  ["path", { d: "M19.136 12a10 10 0 0 1-14.271 0", key: "ppmlo4" }],
  ["path", { d: "m21 21-2.16-3.84", key: "vylbct" }],
  ["path", { d: "m3 21 8.02-14.26", key: "1ssaw4" }],
  ["circle", { cx: "12", cy: "5", r: "2", key: "f1ur92" }]
], ym = e("drafting-compass", sm);
const pm = [
  ["path", { d: "M10 11h.01", key: "d2at3l" }],
  ["path", { d: "M14 6h.01", key: "k028ub" }],
  ["path", { d: "M18 6h.01", key: "1v4wsw" }],
  ["path", { d: "M6.5 13.1h.01", key: "1748ia" }],
  ["path", { d: "M22 5c0 9-4 12-6 12s-6-3-6-12c0-2 2-3 6-3s6 1 6 3", key: "172yzv" }],
  ["path", { d: "M17.4 9.9c-.8.8-2 .8-2.8 0", key: "1obv0w" }],
  [
    "path",
    {
      d: "M10.1 7.1C9 7.2 7.7 7.7 6 8.6c-3.5 2-4.7 3.9-3.7 5.6 4.5 7.8 9.5 8.4 11.2 7.4.9-.5 1.9-2.1 1.9-4.7",
      key: "rqjl8i"
    }
  ],
  ["path", { d: "M9.1 16.5c.3-1.1 1.4-1.7 2.4-1.4", key: "1mr6wy" }]
], km = e("drama", pm);
const lm = [
  [
    "path",
    { d: "M10 18a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H5a3 3 0 0 1-3-3 1 1 0 0 1 1-1z", key: "ioqxb1" }
  ],
  [
    "path",
    {
      d: "M13 10H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a1 1 0 0 1 1 1v6a1 1 0 0 1-1 1l-.81 3.242a1 1 0 0 1-.97.758H8",
      key: "1rs59n"
    }
  ],
  ["path", { d: "M14 4h3a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-3", key: "105ega" }],
  ["path", { d: "M18 6h4", key: "66u95g" }],
  ["path", { d: "m5 10-2 8", key: "xt2lic" }],
  ["path", { d: "m7 18 2-8", key: "1bzku2" }]
], um = e("drill", lm);
const Mm = [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "M19.13 5.09C15.22 9.14 10 10.44 2.25 10.94", key: "hpej1" }],
  ["path", { d: "M21.75 12.84c-6.62-1.41-12.14 1-16.38 6.32", key: "1tr44o" }],
  ["path", { d: "M8.56 2.75c4.37 6 6 9.42 8 17.72", key: "kbh691" }]
], fm = e("dribbble", Mm);
const mm = [
  ["path", { d: "M10 10 7 7", key: "zp14k7" }],
  ["path", { d: "m10 14-3 3", key: "1jrpxk" }],
  ["path", { d: "m14 10 3-3", key: "7tigam" }],
  ["path", { d: "m14 14 3 3", key: "vm23p3" }],
  ["path", { d: "M14.205 4.139a4 4 0 1 1 5.439 5.863", key: "1tm5p2" }],
  ["path", { d: "M19.637 14a4 4 0 1 1-5.432 5.868", key: "16egi2" }],
  ["path", { d: "M4.367 10a4 4 0 1 1 5.438-5.862", key: "1wta6a" }],
  ["path", { d: "M9.795 19.862a4 4 0 1 1-5.429-5.873", key: "q39hpv" }],
  ["rect", { x: "10", y: "8", width: "4", height: "8", rx: "1", key: "phrjt1" }]
], vm = e("drone", mm);
const gm = [
  [
    "path",
    {
      d: "M18.715 13.186C18.29 11.858 17.384 10.607 16 9.5c-2-1.6-3.5-4-4-6.5a10.7 10.7 0 0 1-.884 2.586",
      key: "8suz2t"
    }
  ],
  ["path", { d: "m2 2 20 20", key: "1ooewy" }],
  [
    "path",
    { d: "M8.795 8.797A11 11 0 0 1 8 9.5C6 11.1 5 13 5 15a7 7 0 0 0 13.222 3.208", key: "19dw9m" }
  ]
], _m = e("droplet-off", gm);
const xm = [
  [
    "path",
    {
      d: "M12 22a7 7 0 0 0 7-7c0-2-1-3.9-3-5.5s-3.5-4-4-6.5c-.5 2.5-2 4.9-4 6.5C6 11.1 5 13 5 15a7 7 0 0 0 7 7z",
      key: "c7niix"
    }
  ]
], bm = e("droplet", xm);
const wm = [
  [
    "path",
    {
      d: "M7 16.3c2.2 0 4-1.83 4-4.05 0-1.16-.57-2.26-1.71-3.19S7.29 6.75 7 5.3c-.29 1.45-1.14 2.84-2.29 3.76S3 11.1 3 12.25c0 2.22 1.8 4.05 4 4.05z",
      key: "1ptgy4"
    }
  ],
  [
    "path",
    {
      d: "M12.56 6.6A10.97 10.97 0 0 0 14 3.02c.5 2.5 2 4.9 4 6.5s3 3.5 3 5.5a6.98 6.98 0 0 1-11.91 4.97",
      key: "1sl1rz"
    }
  ]
], Nm = e("droplets", wm);
const $m = [
  ["path", { d: "m2 2 8 8", key: "1v6059" }],
  ["path", { d: "m22 2-8 8", key: "173r8a" }],
  ["ellipse", { cx: "12", cy: "9", rx: "10", ry: "5", key: "liohsx" }],
  ["path", { d: "M7 13.4v7.9", key: "1yi6u9" }],
  ["path", { d: "M12 14v8", key: "1tn2tj" }],
  ["path", { d: "M17 13.4v7.9", key: "eqz2v3" }],
  ["path", { d: "M2 9v8a10 5 0 0 0 20 0V9", key: "1750ul" }]
], zm = e("drum", $m);
const jm = [
  [
    "path",
    { d: "M15.4 15.63a7.875 6 135 1 1 6.23-6.23 4.5 3.43 135 0 0-6.23 6.23", key: "1dtqwm" }
  ],
  [
    "path",
    {
      d: "m8.29 12.71-2.6 2.6a2.5 2.5 0 1 0-1.65 4.65A2.5 2.5 0 1 0 8.7 18.3l2.59-2.59",
      key: "1oq1fw"
    }
  ]
], qm = e("drumstick", jm);
const Am = [
  [
    "path",
    {
      d: "M17.596 12.768a2 2 0 1 0 2.829-2.829l-1.768-1.767a2 2 0 0 0 2.828-2.829l-2.828-2.828a2 2 0 0 0-2.829 2.828l-1.767-1.768a2 2 0 1 0-2.829 2.829z",
      key: "9m4mmf"
    }
  ],
  ["path", { d: "m2.5 21.5 1.4-1.4", key: "17g3f0" }],
  ["path", { d: "m20.1 3.9 1.4-1.4", key: "1qn309" }],
  [
    "path",
    {
      d: "M5.343 21.485a2 2 0 1 0 2.829-2.828l1.767 1.768a2 2 0 1 0 2.829-2.829l-6.364-6.364a2 2 0 1 0-2.829 2.829l1.768 1.767a2 2 0 0 0-2.828 2.829z",
      key: "1t2c92"
    }
  ],
  ["path", { d: "m9.6 14.4 4.8-4.8", key: "6umqxw" }]
], Hm = e("dumbbell", Am);
const Sm = [
  ["path", { d: "M6 8.5a6.5 6.5 0 1 1 13 0c0 6-6 6-6 10a3.5 3.5 0 1 1-7 0", key: "1dfaln" }],
  ["path", { d: "M15 8.5a2.5 2.5 0 0 0-5 0v1a2 2 0 1 1 0 4", key: "1qnva7" }]
], Cm = e("ear", Sm);
const Vm = [
  ["path", { d: "M6 18.5a3.5 3.5 0 1 0 7 0c0-1.57.92-2.52 2.04-3.46", key: "1qngmn" }],
  ["path", { d: "M6 8.5c0-.75.13-1.47.36-2.14", key: "b06bma" }],
  ["path", { d: "M8.8 3.15A6.5 6.5 0 0 1 19 8.5c0 1.63-.44 2.81-1.09 3.76", key: "g10hsz" }],
  ["path", { d: "M12.5 6A2.5 2.5 0 0 1 15 8.5M10 13a2 2 0 0 0 1.82-1.18", key: "ygzou7" }],
  ["line", { x1: "2", x2: "22", y1: "2", y2: "22", key: "a6p6uj" }]
], Rm = e("ear-off", Vm);
const Em = [
  ["path", { d: "M7 3.34V5a3 3 0 0 0 3 3", key: "w732o8" }],
  ["path", { d: "M11 21.95V18a2 2 0 0 0-2-2 2 2 0 0 1-2-2v-1a2 2 0 0 0-2-2H2.05", key: "f02343" }],
  ["path", { d: "M21.54 15H17a2 2 0 0 0-2 2v4.54", key: "1djwo0" }],
  ["path", { d: "M12 2a10 10 0 1 0 9.54 13", key: "zjsr6q" }],
  ["path", { d: "M20 6V4a2 2 0 1 0-4 0v2", key: "1of5e8" }],
  ["rect", { width: "8", height: "5", x: "14", y: "6", rx: "1", key: "1fmf51" }]
], Lm = e("earth-lock", Em);
const Pm = [
  ["path", { d: "M21.54 15H17a2 2 0 0 0-2 2v4.54", key: "1djwo0" }],
  [
    "path",
    {
      d: "M7 3.34V5a3 3 0 0 0 3 3a2 2 0 0 1 2 2c0 1.1.9 2 2 2a2 2 0 0 0 2-2c0-1.1.9-2 2-2h3.17",
      key: "1tzkfa"
    }
  ],
  ["path", { d: "M11 21.95V18a2 2 0 0 0-2-2a2 2 0 0 1-2-2v-1a2 2 0 0 0-2-2H2.05", key: "14pb5j" }],
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }]
], Tm = e("earth", Pm);
const Om = [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "M12 2a7 7 0 1 0 10 10", key: "1yuj32" }]
], Dm = e("eclipse", Om);
const Im = [
  ["circle", { cx: "11.5", cy: "12.5", r: "3.5", key: "1cl1mi" }],
  [
    "path",
    {
      d: "M3 8c0-3.5 2.5-6 6.5-6 5 0 4.83 3 7.5 5s5 2 5 6c0 4.5-2.5 6.5-7 6.5-2.5 0-2.5 2.5-6 2.5s-7-2-7-5.5c0-3 1.5-3 1.5-5C3.5 10 3 9 3 8Z",
      key: "165ef9"
    }
  ]
], Fm = e("egg-fried", Im);
const Bm = [
  ["path", { d: "m2 2 20 20", key: "1ooewy" }],
  ["path", { d: "M20 14.347V14c0-6-4-12-8-12-1.078 0-2.157.436-3.157 1.19", key: "13g2jy" }],
  ["path", { d: "M6.206 6.21C4.871 8.4 4 11.2 4 14a8 8 0 0 0 14.568 4.568", key: "1581id" }]
], Um = e("egg-off", Bm);
const Wm = [
  ["path", { d: "M12 2C8 2 4 8 4 14a8 8 0 0 0 16 0c0-6-4-12-8-12", key: "1le142" }]
], Zm = e("egg", Wm);
const Gm = [
  ["circle", { cx: "12", cy: "12", r: "1", key: "41hilf" }],
  ["circle", { cx: "12", cy: "5", r: "1", key: "gxeob9" }],
  ["circle", { cx: "12", cy: "19", r: "1", key: "lyex9k" }]
], Xm = e("ellipsis-vertical", Gm);
const Ym = [
  ["circle", { cx: "12", cy: "12", r: "1", key: "41hilf" }],
  ["circle", { cx: "19", cy: "12", r: "1", key: "1wjl8i" }],
  ["circle", { cx: "5", cy: "12", r: "1", key: "1pcz8c" }]
], Km = e("ellipsis", Ym);
const Qm = [
  ["path", { d: "M5 15a6.5 6.5 0 0 1 7 0 6.5 6.5 0 0 0 7 0", key: "yrdkhy" }],
  ["path", { d: "M5 9a6.5 6.5 0 0 1 7 0 6.5 6.5 0 0 0 7 0", key: "gzkvyz" }]
], Jm = e("equal-approximately", Qm);
const ev = [
  ["line", { x1: "5", x2: "19", y1: "9", y2: "9", key: "1nwqeh" }],
  ["line", { x1: "5", x2: "19", y1: "15", y2: "15", key: "g8yjpy" }],
  ["line", { x1: "19", x2: "5", y1: "5", y2: "19", key: "1x9vlm" }]
], tv = e("equal-not", ev);
const av = [
  ["line", { x1: "5", x2: "19", y1: "9", y2: "9", key: "1nwqeh" }],
  ["line", { x1: "5", x2: "19", y1: "15", y2: "15", key: "g8yjpy" }]
], ov = e("equal", av);
const nv = [
  [
    "path",
    {
      d: "M21 21H8a2 2 0 0 1-1.42-.587l-3.994-3.999a2 2 0 0 1 0-2.828l10-10a2 2 0 0 1 2.829 0l5.999 6a2 2 0 0 1 0 2.828L12.834 21",
      key: "g5wo59"
    }
  ],
  ["path", { d: "m5.082 11.09 8.828 8.828", key: "1wx5vj" }]
], cv = e("eraser", nv);
const rv = [
  [
    "path",
    {
      d: "m15 20 3-3h2a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h2l3 3z",
      key: "rbahqx"
    }
  ],
  ["path", { d: "M6 8v1", key: "1636ez" }],
  ["path", { d: "M10 8v1", key: "1talb4" }],
  ["path", { d: "M14 8v1", key: "1rsfgr" }],
  ["path", { d: "M18 8v1", key: "gnkwox" }]
], hv = e("ethernet-port", rv);
const dv = [
  ["path", { d: "M4 10h12", key: "1y6xl8" }],
  ["path", { d: "M4 14h9", key: "1loblj" }],
  [
    "path",
    {
      d: "M19 6a7.7 7.7 0 0 0-5.2-2A7.9 7.9 0 0 0 6 12c0 4.4 3.5 8 7.8 8 2 0 3.8-.8 5.2-2",
      key: "1j6lzo"
    }
  ]
], iv = e("euro", dv);
const sv = [
  [
    "path",
    { d: "M14 13h2a2 2 0 0 1 2 2v2a2 2 0 0 0 4 0v-6.998a2 2 0 0 0-.59-1.42L18 5", key: "1wtuz0" }
  ],
  ["path", { d: "M14 21V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v16", key: "e09ifn" }],
  ["path", { d: "M2 21h13", key: "1x0fut" }],
  ["path", { d: "M3 7h11", key: "19efrr" }],
  ["path", { d: "m9 11-2 3h3l-2 3", key: "lmzxi1" }]
], yv = e("ev-charger", sv);
const pv = [
  ["path", { d: "m15 15 6 6", key: "1s409w" }],
  ["path", { d: "m15 9 6-6", key: "ko1vev" }],
  ["path", { d: "M21 16v5h-5", key: "1ck2sf" }],
  ["path", { d: "M21 8V3h-5", key: "1qoq8a" }],
  ["path", { d: "M3 16v5h5", key: "1t08am" }],
  ["path", { d: "m3 21 6-6", key: "wwnumi" }],
  ["path", { d: "M3 8V3h5", key: "1ln10m" }],
  ["path", { d: "M9 9 3 3", key: "v551iv" }]
], kv = e("expand", pv);
const lv = [
  ["path", { d: "M15 3h6v6", key: "1q9fwt" }],
  ["path", { d: "M10 14 21 3", key: "gplh6r" }],
  ["path", { d: "M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6", key: "a6xqqp" }]
], uv = e("external-link", lv);
const Mv = [
  ["path", { d: "m15 18-.722-3.25", key: "1j64jw" }],
  ["path", { d: "M2 8a10.645 10.645 0 0 0 20 0", key: "1e7gxb" }],
  ["path", { d: "m20 15-1.726-2.05", key: "1cnuld" }],
  ["path", { d: "m4 15 1.726-2.05", key: "1dsqqd" }],
  ["path", { d: "m9 18 .722-3.25", key: "ypw2yx" }]
], fv = e("eye-closed", Mv);
const mv = [
  [
    "path",
    {
      d: "M10.733 5.076a10.744 10.744 0 0 1 11.205 6.575 1 1 0 0 1 0 .696 10.747 10.747 0 0 1-1.444 2.49",
      key: "ct8e1f"
    }
  ],
  ["path", { d: "M14.084 14.158a3 3 0 0 1-4.242-4.242", key: "151rxh" }],
  [
    "path",
    {
      d: "M17.479 17.499a10.75 10.75 0 0 1-15.417-5.151 1 1 0 0 1 0-.696 10.75 10.75 0 0 1 4.446-5.143",
      key: "13bj9a"
    }
  ],
  ["path", { d: "m2 2 20 20", key: "1ooewy" }]
], vv = e("eye-off", mv);
const gv = [
  [
    "path",
    {
      d: "M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0",
      key: "1nclc0"
    }
  ],
  ["circle", { cx: "12", cy: "12", r: "3", key: "1v7zrd" }]
], _v = e("eye", gv);
const xv = [
  [
    "path",
    { d: "M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z", key: "1jg4f8" }
  ]
], bv = e("facebook", xv);
const wv = [
  ["path", { d: "M12 16h.01", key: "1drbdi" }],
  ["path", { d: "M16 16h.01", key: "1f9h7w" }],
  [
    "path",
    {
      d: "M3 19a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V8.5a.5.5 0 0 0-.769-.422l-4.462 2.844A.5.5 0 0 1 15 10.5v-2a.5.5 0 0 0-.769-.422L9.77 10.922A.5.5 0 0 1 9 10.5V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2z",
      key: "1iv0i2"
    }
  ],
  ["path", { d: "M8 16h.01", key: "18s6g9" }]
], Nv = e("factory", wv);
const $v = [
  [
    "path",
    {
      d: "M10.827 16.379a6.082 6.082 0 0 1-8.618-7.002l5.412 1.45a6.082 6.082 0 0 1 7.002-8.618l-1.45 5.412a6.082 6.082 0 0 1 8.618 7.002l-5.412-1.45a6.082 6.082 0 0 1-7.002 8.618l1.45-5.412Z",
      key: "484a7f"
    }
  ],
  ["path", { d: "M12 12v.01", key: "u5ubse" }]
], zv = e("fan", $v);
const jv = [
  [
    "path",
    { d: "M12 6a2 2 0 0 1 3.414-1.414l6 6a2 2 0 0 1 0 2.828l-6 6A2 2 0 0 1 12 18z", key: "b19h5q" }
  ],
  [
    "path",
    { d: "M2 6a2 2 0 0 1 3.414-1.414l6 6a2 2 0 0 1 0 2.828l-6 6A2 2 0 0 1 2 18z", key: "h7h5ge" }
  ]
], qv = e("fast-forward", jv);
const Av = [
  [
    "path",
    {
      d: "M12.67 19a2 2 0 0 0 1.416-.588l6.154-6.172a6 6 0 0 0-8.49-8.49L5.586 9.914A2 2 0 0 0 5 11.328V18a1 1 0 0 0 1 1z",
      key: "18jl4k"
    }
  ],
  ["path", { d: "M16 8 2 22", key: "vp34q" }],
  ["path", { d: "M17.5 15H9", key: "1oz8nu" }]
], Hv = e("feather", Av);
const Sv = [
  ["path", { d: "M4 3 2 5v15c0 .6.4 1 1 1h2c.6 0 1-.4 1-1V5Z", key: "1n2rgs" }],
  ["path", { d: "M6 8h4", key: "utf9t1" }],
  ["path", { d: "M6 18h4", key: "12yh4b" }],
  ["path", { d: "m12 3-2 2v15c0 .6.4 1 1 1h2c.6 0 1-.4 1-1V5Z", key: "3ha7mj" }],
  ["path", { d: "M14 8h4", key: "1r8wg2" }],
  ["path", { d: "M14 18h4", key: "1t3kbu" }],
  ["path", { d: "m20 3-2 2v15c0 .6.4 1 1 1h2c.6 0 1-.4 1-1V5Z", key: "dfd4e2" }]
], Cv = e("fence", Sv);
const Vv = [
  ["circle", { cx: "12", cy: "12", r: "2", key: "1c9p78" }],
  ["path", { d: "M12 2v4", key: "3427ic" }],
  ["path", { d: "m6.8 15-3.5 2", key: "hjy98k" }],
  ["path", { d: "m20.7 7-3.5 2", key: "f08gto" }],
  ["path", { d: "M6.8 9 3.3 7", key: "1aevh4" }],
  ["path", { d: "m20.7 17-3.5-2", key: "1liqo3" }],
  ["path", { d: "m9 22 3-8 3 8", key: "wees03" }],
  ["path", { d: "M8 22h8", key: "rmew8v" }],
  ["path", { d: "M18 18.7a9 9 0 1 0-12 0", key: "dhzg4g" }]
], Rv = e("ferris-wheel", Vv);
const Ev = [
  ["path", { d: "M5 5.5A3.5 3.5 0 0 1 8.5 2H12v7H8.5A3.5 3.5 0 0 1 5 5.5z", key: "1340ok" }],
  ["path", { d: "M12 2h3.5a3.5 3.5 0 1 1 0 7H12V2z", key: "1hz3m3" }],
  ["path", { d: "M12 12.5a3.5 3.5 0 1 1 7 0 3.5 3.5 0 1 1-7 0z", key: "1oz8n2" }],
  ["path", { d: "M5 19.5A3.5 3.5 0 0 1 8.5 16H12v3.5a3.5 3.5 0 1 1-7 0z", key: "1ff65i" }],
  ["path", { d: "M5 12.5A3.5 3.5 0 0 1 8.5 9H12v7H8.5A3.5 3.5 0 0 1 5 12.5z", key: "pdip6e" }]
], Lv = e("figma", Ev);
const Pv = [
  [
    "path",
    {
      d: "M13.659 22H18a2 2 0 0 0 2-2V8a2.4 2.4 0 0 0-.706-1.706l-3.588-3.588A2.4 2.4 0 0 0 14 2H6a2 2 0 0 0-2 2v11.5",
      key: "4pqfef"
    }
  ],
  ["path", { d: "M14 2v5a1 1 0 0 0 1 1h5", key: "wfsgrz" }],
  ["path", { d: "M8 12v-1", key: "1ej8lb" }],
  ["path", { d: "M8 18v-2", key: "qcmpov" }],
  ["path", { d: "M8 7V6", key: "1nbb54" }],
  ["circle", { cx: "8", cy: "20", r: "2", key: "ckkr5m" }]
], Tv = e("file-archive", Pv);
const Ov = [
  [
    "path",
    {
      d: "M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z",
      key: "1oefj6"
    }
  ],
  ["path", { d: "M14 2v5a1 1 0 0 0 1 1h5", key: "wfsgrz" }],
  ["path", { d: "m8 18 4-4", key: "12zab0" }],
  ["path", { d: "M8 10v8h8", key: "tlaukw" }]
], Dv = e("file-axis-3d", Ov);
const Iv = [
  [
    "path",
    {
      d: "M13 22h5a2 2 0 0 0 2-2V8a2.4 2.4 0 0 0-.706-1.706l-3.588-3.588A2.4 2.4 0 0 0 14 2H6a2 2 0 0 0-2 2v3.3",
      key: "cvl1xm"
    }
  ],
  ["path", { d: "M14 2v5a1 1 0 0 0 1 1h5", key: "wfsgrz" }],
  [
    "path",
    {
      d: "m7.69 16.479 1.29 4.88a.5.5 0 0 1-.698.591l-1.843-.849a1 1 0 0 0-.879.001l-1.846.85a.5.5 0 0 1-.692-.593l1.29-4.88",
      key: "1ff7gj"
    }
  ],
  ["circle", { cx: "6", cy: "14", r: "3", key: "a1xfv6" }]
], Fv = e("file-badge", Iv);
const Bv = [
  [
    "path",
    {
      d: "M14.5 22H18a2 2 0 0 0 2-2V8a2.4 2.4 0 0 0-.706-1.706l-3.588-3.588A2.4 2.4 0 0 0 14 2H6a2 2 0 0 0-2 2v3.8",
      key: "1kchwa"
    }
  ],
  ["path", { d: "M14 2v5a1 1 0 0 0 1 1h5", key: "wfsgrz" }],
  ["path", { d: "M11.7 14.2 7 17l-4.7-2.8", key: "1yk8tc" }],
  [
    "path",
    {
      d: "M3 13.1a2 2 0 0 0-.999 1.76v3.24a2 2 0 0 0 .969 1.78L6 21.7a2 2 0 0 0 2.03.01L11 19.9a2 2 0 0 0 1-1.76V14.9a2 2 0 0 0-.97-1.78L8 11.3a2 2 0 0 0-2.03-.01z",
      key: "19flxy"
    }
  ],
  ["path", { d: "M7 17v5", key: "1yj1jh" }]
], Uv = e("file-box", Bv);
const Wv = [
  [
    "path",
    {
      d: "M14 22h4a2 2 0 0 0 2-2V8a2.4 2.4 0 0 0-.706-1.706l-3.588-3.588A2.4 2.4 0 0 0 14 2H6a2 2 0 0 0-2 2v6",
      key: "14cnrg"
    }
  ],
  ["path", { d: "M14 2v5a1 1 0 0 0 1 1h5", key: "wfsgrz" }],
  [
    "path",
    { d: "M5 14a1 1 0 0 0-1 1v2a1 1 0 0 1-1 1 1 1 0 0 1 1 1v2a1 1 0 0 0 1 1", key: "sr0ebq" }
  ],
  [
    "path",
    { d: "M9 22a1 1 0 0 0 1-1v-2a1 1 0 0 1 1-1 1 1 0 0 1-1-1v-2a1 1 0 0 0-1-1", key: "w793db" }
  ]
], Zv = e("file-braces-corner", Wv);
const Gv = [
  [
    "path",
    {
      d: "M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z",
      key: "1oefj6"
    }
  ],
  ["path", { d: "M14 2v5a1 1 0 0 0 1 1h5", key: "wfsgrz" }],
  [
    "path",
    { d: "M10 12a1 1 0 0 0-1 1v1a1 1 0 0 1-1 1 1 1 0 0 1 1 1v1a1 1 0 0 0 1 1", key: "1oajmo" }
  ],
  [
    "path",
    { d: "M14 18a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1 1 1 0 0 1-1-1v-1a1 1 0 0 0-1-1", key: "mpwhp6" }
  ]
], Xv = e("file-braces", Gv);
const Yv = [
  [
    "path",
    {
      d: "M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z",
      key: "1oefj6"
    }
  ],
  ["path", { d: "M14 2v5a1 1 0 0 0 1 1h5", key: "wfsgrz" }],
  ["path", { d: "M8 18v-1", key: "zg0ygc" }],
  ["path", { d: "M12 18v-6", key: "17g6i2" }],
  ["path", { d: "M16 18v-3", key: "j5jt4h" }]
], Kv = e("file-chart-column", Yv);
const Qv = [
  [
    "path",
    {
      d: "M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z",
      key: "1oefj6"
    }
  ],
  ["path", { d: "M14 2v5a1 1 0 0 0 1 1h5", key: "wfsgrz" }],
  ["path", { d: "M8 18v-2", key: "qcmpov" }],
  ["path", { d: "M12 18v-4", key: "q1q25u" }],
  ["path", { d: "M16 18v-6", key: "15y0np" }]
], Jv = e("file-chart-column-increasing", Qv);
const eg = [
  [
    "path",
    {
      d: "M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z",
      key: "1oefj6"
    }
  ],
  ["path", { d: "M14 2v5a1 1 0 0 0 1 1h5", key: "wfsgrz" }],
  ["path", { d: "m16 13-3.5 3.5-2-2L8 17", key: "zz7yod" }]
], tg = e("file-chart-line", eg);
const ag = [
  [
    "path",
    {
      d: "M15.941 22H18a2 2 0 0 0 2-2V8a2.4 2.4 0 0 0-.706-1.704l-3.588-3.588A2.4 2.4 0 0 0 14 2H6a2 2 0 0 0-2 2v3.512",
      key: "13hoie"
    }
  ],
  ["path", { d: "M14 2v5a1 1 0 0 0 1 1h5", key: "wfsgrz" }],
  ["path", { d: "M4.017 11.512a6 6 0 1 0 8.466 8.475", key: "s6vs5t" }],
  [
    "path",
    {
      d: "M9 16a1 1 0 0 1-1-1v-4c0-.552.45-1.008.995-.917a6 6 0 0 1 4.922 4.922c.091.544-.365.995-.917.995z",
      key: "1dl6s6"
    }
  ]
], og = e("file-chart-pie", ag);
const ng = [
  [
    "path",
    {
      d: "M10.5 22H6a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.706.706l3.588 3.588A2.4 2.4 0 0 1 20 8v6",
      key: "g5mvt7"
    }
  ],
  ["path", { d: "M14 2v5a1 1 0 0 0 1 1h5", key: "wfsgrz" }],
  ["path", { d: "m14 20 2 2 4-4", key: "15kota" }]
], cg = e("file-check-corner", ng);
const rg = [
  [
    "path",
    {
      d: "M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z",
      key: "1oefj6"
    }
  ],
  ["path", { d: "M14 2v5a1 1 0 0 0 1 1h5", key: "wfsgrz" }],
  ["path", { d: "m9 15 2 2 4-4", key: "1grp1n" }]
], hg = e("file-check", rg);
const dg = [
  [
    "path",
    {
      d: "M16 22h2a2 2 0 0 0 2-2V8a2.4 2.4 0 0 0-.706-1.706l-3.588-3.588A2.4 2.4 0 0 0 14 2H6a2 2 0 0 0-2 2v2.85",
      key: "ryk6xj"
    }
  ],
  ["path", { d: "M14 2v5a1 1 0 0 0 1 1h5", key: "wfsgrz" }],
  ["path", { d: "M8 14v2.2l1.6 1", key: "6m4bie" }],
  ["circle", { cx: "8", cy: "16", r: "6", key: "10v15b" }]
], ig = e("file-clock", dg);
const sg = [
  [
    "path",
    {
      d: "M4 12.15V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.706.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2h-3.35",
      key: "1wthlu"
    }
  ],
  ["path", { d: "M14 2v5a1 1 0 0 0 1 1h5", key: "wfsgrz" }],
  ["path", { d: "m5 16-3 3 3 3", key: "331omg" }],
  ["path", { d: "m9 22 3-3-3-3", key: "lsp7cz" }]
], yg = e("file-code-corner", sg);
const pg = [
  [
    "path",
    {
      d: "M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z",
      key: "1oefj6"
    }
  ],
  ["path", { d: "M14 2v5a1 1 0 0 0 1 1h5", key: "wfsgrz" }],
  ["path", { d: "M10 12.5 8 15l2 2.5", key: "1tg20x" }],
  ["path", { d: "m14 12.5 2 2.5-2 2.5", key: "yinavb" }]
], kg = e("file-code", pg);
const lg = [
  [
    "path",
    {
      d: "M13.85 22H18a2 2 0 0 0 2-2V8a2 2 0 0 0-.586-1.414l-4-4A2 2 0 0 0 14 2H6a2 2 0 0 0-2 2v6.6",
      key: "1l4p50"
    }
  ],
  ["path", { d: "M14 2v5a1 1 0 0 0 1 1h5", key: "wfsgrz" }],
  ["path", { d: "m3.305 19.53.923-.382", key: "ao1pio" }],
  ["path", { d: "m4.228 16.852-.924-.383", key: "1fv9zy" }],
  ["path", { d: "m5.852 15.228-.383-.923", key: "1a9hc2" }],
  ["path", { d: "m5.852 20.772-.383.924", key: "1sh9ke" }],
  ["path", { d: "m8.148 15.228.383-.923", key: "4yu6lf" }],
  ["path", { d: "m8.53 21.696-.382-.924", key: "18b0s9" }],
  ["path", { d: "m9.773 16.852.922-.383", key: "ti6xop" }],
  ["path", { d: "m9.773 19.148.922.383", key: "rws47d" }],
  ["circle", { cx: "7", cy: "18", r: "3", key: "lvkj7j" }]
], ug = e("file-cog", lg);
const Mg = [
  [
    "path",
    {
      d: "M4 12V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.706.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2",
      key: "jrl274"
    }
  ],
  ["path", { d: "M14 2v5a1 1 0 0 0 1 1h5", key: "wfsgrz" }],
  ["path", { d: "M10 16h2v6", key: "1bxocy" }],
  ["path", { d: "M10 22h4", key: "ceow96" }],
  ["rect", { x: "2", y: "16", width: "4", height: "6", rx: "2", key: "r45zd0" }]
], fg = e("file-digit", Mg);
const mg = [
  [
    "path",
    {
      d: "M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z",
      key: "1oefj6"
    }
  ],
  ["path", { d: "M14 2v5a1 1 0 0 0 1 1h5", key: "wfsgrz" }],
  ["path", { d: "M12 18v-6", key: "17g6i2" }],
  ["path", { d: "m9 15 3 3 3-3", key: "1npd3o" }]
], vg = e("file-down", mg);
const gg = [
  [
    "path",
    {
      d: "M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z",
      key: "1oefj6"
    }
  ],
  ["path", { d: "M9 10h6", key: "9gxzsh" }],
  ["path", { d: "M12 13V7", key: "h0r20n" }],
  ["path", { d: "M9 17h6", key: "r8uit2" }]
], _g = e("file-diff", gg);
const xg = [
  [
    "path",
    {
      d: "M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z",
      key: "1oefj6"
    }
  ],
  ["path", { d: "M12 9v4", key: "juzpu7" }],
  ["path", { d: "M12 17h.01", key: "p32p05" }]
], bg = e("file-exclamation-point", xg);
const wg = [
  [
    "path",
    {
      d: "M4 6.835V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.706.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2h-.343",
      key: "1vfytu"
    }
  ],
  ["path", { d: "M14 2v5a1 1 0 0 0 1 1h5", key: "wfsgrz" }],
  [
    "path",
    {
      d: "M2 19a2 2 0 0 1 4 0v1a2 2 0 0 1-4 0v-4a6 6 0 0 1 12 0v4a2 2 0 0 1-4 0v-1a2 2 0 0 1 4 0",
      key: "1etmh7"
    }
  ]
], Ng = e("file-headphone", wg);
const $g = [
  [
    "path",
    {
      d: "M13 22h5a2 2 0 0 0 2-2V8a2.4 2.4 0 0 0-.706-1.706l-3.588-3.588A2.4 2.4 0 0 0 14 2H6a2 2 0 0 0-2 2v7",
      key: "oagw2b"
    }
  ],
  ["path", { d: "M14 2v5a1 1 0 0 0 1 1h5", key: "wfsgrz" }],
  [
    "path",
    {
      d: "M3.62 18.8A2.25 2.25 0 1 1 7 15.836a2.25 2.25 0 1 1 3.38 2.966l-2.626 2.856a1 1 0 0 1-1.507 0z",
      key: "rg3psg"
    }
  ]
], zg = e("file-heart", $g);
const jg = [
  [
    "path",
    {
      d: "M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z",
      key: "1oefj6"
    }
  ],
  ["path", { d: "M14 2v5a1 1 0 0 0 1 1h5", key: "wfsgrz" }],
  ["circle", { cx: "10", cy: "12", r: "2", key: "737tya" }],
  ["path", { d: "m20 17-1.296-1.296a2.41 2.41 0 0 0-3.408 0L9 22", key: "wt3hpn" }]
], qg = e("file-image", jg);
const Ag = [
  [
    "path",
    {
      d: "M4 11V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.706.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-1",
      key: "1q9hii"
    }
  ],
  ["path", { d: "M14 2v5a1 1 0 0 0 1 1h5", key: "wfsgrz" }],
  ["path", { d: "M2 15h10", key: "jfw4w8" }],
  ["path", { d: "m9 18 3-3-3-3", key: "112psh" }]
], Hg = e("file-input", Ag);
const Sg = [
  [
    "path",
    {
      d: "M10.65 22H18a2 2 0 0 0 2-2V8a2.4 2.4 0 0 0-.706-1.706l-3.588-3.588A2.4 2.4 0 0 0 14 2H6a2 2 0 0 0-2 2v10.1",
      key: "1a2hbp"
    }
  ],
  ["path", { d: "M14 2v5a1 1 0 0 0 1 1h5", key: "wfsgrz" }],
  ["path", { d: "m10 15 1 1", key: "1h4vmv" }],
  ["path", { d: "m11 14-4.586 4.586", key: "maylof" }],
  ["circle", { cx: "5", cy: "20", r: "2", key: "860zyv" }]
], Cg = e("file-key", Sg);
const Vg = [
  [
    "path",
    {
      d: "M4 9.8V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.706.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2h-3",
      key: "1432pc"
    }
  ],
  ["path", { d: "M14 2v5a1 1 0 0 0 1 1h5", key: "wfsgrz" }],
  ["path", { d: "M9 17v-2a2 2 0 0 0-4 0v2", key: "168m41" }],
  ["rect", { width: "8", height: "5", x: "3", y: "17", rx: "1", key: "o8vfew" }]
], Rg = e("file-lock", Vg);
const Eg = [
  [
    "path",
    {
      d: "M20 14V8a2.4 2.4 0 0 0-.706-1.706l-3.588-3.588A2.4 2.4 0 0 0 14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12",
      key: "l9p8hp"
    }
  ],
  ["path", { d: "M14 2v5a1 1 0 0 0 1 1h5", key: "wfsgrz" }],
  ["path", { d: "M14 18h6", key: "1m8k6r" }]
], Lg = e("file-minus-corner", Eg);
const Pg = [
  [
    "path",
    {
      d: "M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z",
      key: "1oefj6"
    }
  ],
  ["path", { d: "M14 2v5a1 1 0 0 0 1 1h5", key: "wfsgrz" }],
  ["path", { d: "M9 15h6", key: "cctwl0" }]
], Tg = e("file-minus", Pg);
const Og = [
  [
    "path",
    {
      d: "M11.65 22H18a2 2 0 0 0 2-2V8a2.4 2.4 0 0 0-.706-1.706l-3.588-3.588A2.4 2.4 0 0 0 14 2H6a2 2 0 0 0-2 2v10.35",
      key: "5ad7z2"
    }
  ],
  ["path", { d: "M14 2v5a1 1 0 0 0 1 1h5", key: "wfsgrz" }],
  ["path", { d: "M8 20v-7l3 1.474", key: "1ggyb9" }],
  ["circle", { cx: "6", cy: "20", r: "2", key: "j7wjp0" }]
], Dg = e("file-music", Og);
const Ig = [
  [
    "path",
    {
      d: "M4.226 20.925A2 2 0 0 0 6 22h12a2 2 0 0 0 2-2V8a2.4 2.4 0 0 0-.706-1.706l-3.588-3.588A2.4 2.4 0 0 0 14 2H6a2 2 0 0 0-2 2v3.127",
      key: "wfxp4w"
    }
  ],
  ["path", { d: "M14 2v5a1 1 0 0 0 1 1h5", key: "wfsgrz" }],
  ["path", { d: "m5 11-3 3", key: "1dgrs4" }],
  ["path", { d: "m5 17-3-3h10", key: "1mvvaf" }]
], Fg = e("file-output", Ig);
const Bg = [
  [
    "path",
    {
      d: "m18.226 5.226-2.52-2.52A2.4 2.4 0 0 0 14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-.351",
      key: "1k2beg"
    }
  ],
  [
    "path",
    {
      d: "M21.378 12.626a1 1 0 0 0-3.004-3.004l-4.01 4.012a2 2 0 0 0-.506.854l-.837 2.87a.5.5 0 0 0 .62.62l2.87-.837a2 2 0 0 0 .854-.506z",
      key: "2t3380"
    }
  ],
  ["path", { d: "M8 18h1", key: "13wk12" }]
], Ug = e("file-pen-line", Bg);
const Wg = [
  [
    "path",
    {
      d: "M12.659 22H18a2 2 0 0 0 2-2V8a2.4 2.4 0 0 0-.706-1.706l-3.588-3.588A2.4 2.4 0 0 0 14 2H6a2 2 0 0 0-2 2v9.34",
      key: "o6klzx"
    }
  ],
  ["path", { d: "M14 2v5a1 1 0 0 0 1 1h5", key: "wfsgrz" }],
  [
    "path",
    {
      d: "M10.378 12.622a1 1 0 0 1 3 3.003L8.36 20.637a2 2 0 0 1-.854.506l-2.867.837a.5.5 0 0 1-.62-.62l.836-2.869a2 2 0 0 1 .506-.853z",
      key: "zhnas1"
    }
  ]
], Zg = e("file-pen", Wg);
const Gg = [
  [
    "path",
    {
      d: "M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z",
      key: "1oefj6"
    }
  ],
  ["path", { d: "M14 2v5a1 1 0 0 0 1 1h5", key: "wfsgrz" }],
  [
    "path",
    {
      d: "M15.033 13.44a.647.647 0 0 1 0 1.12l-4.065 2.352a.645.645 0 0 1-.968-.56v-4.704a.645.645 0 0 1 .967-.56z",
      key: "1tzo1f"
    }
  ]
], Xg = e("file-play", Gg);
const Yg = [
  [
    "path",
    {
      d: "M11.35 22H6a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.706.706l3.588 3.588A2.4 2.4 0 0 1 20 8v5.35",
      key: "17jvcc"
    }
  ],
  ["path", { d: "M14 2v5a1 1 0 0 0 1 1h5", key: "wfsgrz" }],
  ["path", { d: "M14 19h6", key: "bvotb8" }],
  ["path", { d: "M17 16v6", key: "18yu1i" }]
], Kg = e("file-plus-corner", Yg);
const Qg = [
  [
    "path",
    {
      d: "M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z",
      key: "1oefj6"
    }
  ],
  ["path", { d: "M14 2v5a1 1 0 0 0 1 1h5", key: "wfsgrz" }],
  ["path", { d: "M9 15h6", key: "cctwl0" }],
  ["path", { d: "M12 18v-6", key: "17g6i2" }]
], Jg = e("file-plus", Qg);
const e_ = [
  [
    "path",
    {
      d: "M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z",
      key: "1oefj6"
    }
  ],
  ["path", { d: "M12 17h.01", key: "p32p05" }],
  ["path", { d: "M9.1 9a3 3 0 0 1 5.82 1c0 2-3 3-3 3", key: "mhlwft" }]
], t_ = e("file-question-mark", e_);
const a_ = [
  [
    "path",
    {
      d: "M20 10V8a2.4 2.4 0 0 0-.706-1.704l-3.588-3.588A2.4 2.4 0 0 0 14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h4.35",
      key: "1cdjst"
    }
  ],
  ["path", { d: "M14 2v5a1 1 0 0 0 1 1h5", key: "wfsgrz" }],
  ["path", { d: "M16 14a2 2 0 0 0-2 2", key: "ceaadl" }],
  ["path", { d: "M16 22a2 2 0 0 1-2-2", key: "1wqh5n" }],
  ["path", { d: "M20 14a2 2 0 0 1 2 2", key: "1ny6zw" }],
  ["path", { d: "M20 22a2 2 0 0 0 2-2", key: "1l9q4k" }]
], o_ = e("file-scan", a_);
const n_ = [
  [
    "path",
    {
      d: "M11.1 22H6a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.706.706l3.589 3.588A2.4 2.4 0 0 1 20 8v3.25",
      key: "uh4ikj"
    }
  ],
  ["path", { d: "M14 2v5a1 1 0 0 0 1 1h5", key: "wfsgrz" }],
  ["path", { d: "m21 22-2.88-2.88", key: "9dd25w" }],
  ["circle", { cx: "16", cy: "17", r: "3", key: "11br10" }]
], c_ = e("file-search-corner", n_);
const r_ = [
  [
    "path",
    {
      d: "M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z",
      key: "1oefj6"
    }
  ],
  ["path", { d: "M14 2v5a1 1 0 0 0 1 1h5", key: "wfsgrz" }],
  ["circle", { cx: "11.5", cy: "14.5", r: "2.5", key: "1bq0ko" }],
  ["path", { d: "M13.3 16.3 15 18", key: "2quom7" }]
], h_ = e("file-search", r_);
const d_ = [
  [
    "path",
    {
      d: "M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z",
      key: "1oefj6"
    }
  ],
  ["path", { d: "M14 2v5a1 1 0 0 0 1 1h5", key: "wfsgrz" }],
  ["path", { d: "M8 15h.01", key: "a7atzg" }],
  ["path", { d: "M11.5 13.5a2.5 2.5 0 0 1 0 3", key: "1fccat" }],
  ["path", { d: "M15 12a5 5 0 0 1 0 6", key: "ps46cm" }]
], i_ = e("file-signal", d_);
const s_ = [
  [
    "path",
    {
      d: "M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z",
      key: "1oefj6"
    }
  ],
  ["path", { d: "M14 2v5a1 1 0 0 0 1 1h5", key: "wfsgrz" }],
  ["path", { d: "M8 12h8", key: "1wcyev" }],
  ["path", { d: "M10 11v2", key: "1s651w" }],
  ["path", { d: "M8 17h8", key: "wh5c61" }],
  ["path", { d: "M14 16v2", key: "12fp5e" }]
], y_ = e("file-sliders", s_);
const p_ = [
  [
    "path",
    {
      d: "M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z",
      key: "1oefj6"
    }
  ],
  ["path", { d: "M14 2v5a1 1 0 0 0 1 1h5", key: "wfsgrz" }],
  ["path", { d: "M8 13h2", key: "yr2amv" }],
  ["path", { d: "M14 13h2", key: "un5t4a" }],
  ["path", { d: "M8 17h2", key: "2yhykz" }],
  ["path", { d: "M14 17h2", key: "10kma7" }]
], k_ = e("file-spreadsheet", p_);
const l_ = [
  ["path", { d: "M11 21a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1v-8a1 1 0 0 1 1-1", key: "likhh7" }],
  ["path", { d: "M16 16a1 1 0 0 1-1 1H9a1 1 0 0 1-1-1V8a1 1 0 0 1 1-1", key: "17ky3x" }],
  [
    "path",
    {
      d: "M21 6a2 2 0 0 0-.586-1.414l-2-2A2 2 0 0 0 17 2h-3a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1z",
      key: "1hyeo0"
    }
  ]
], u_ = e("file-stack", l_);
const M_ = [
  [
    "path",
    {
      d: "M4 11V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.706.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h7",
      key: "huwfnr"
    }
  ],
  ["path", { d: "M14 2v5a1 1 0 0 0 1 1h5", key: "wfsgrz" }],
  ["path", { d: "m10 18 3-3-3-3", key: "18f6ys" }]
], f_ = e("file-symlink", M_);
const m_ = [
  [
    "path",
    {
      d: "M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z",
      key: "1oefj6"
    }
  ],
  ["path", { d: "M14 2v5a1 1 0 0 0 1 1h5", key: "wfsgrz" }],
  ["path", { d: "m8 16 2-2-2-2", key: "10vzyd" }],
  ["path", { d: "M12 18h4", key: "1wd2n7" }]
], v_ = e("file-terminal", m_);
const g_ = [
  [
    "path",
    {
      d: "M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z",
      key: "1oefj6"
    }
  ],
  ["path", { d: "M14 2v5a1 1 0 0 0 1 1h5", key: "wfsgrz" }],
  ["path", { d: "M10 9H8", key: "b1mrlr" }],
  ["path", { d: "M16 13H8", key: "t4e002" }],
  ["path", { d: "M16 17H8", key: "z1uh3a" }]
], __ = e("file-text", g_);
const x_ = [
  [
    "path",
    {
      d: "M12 22h6a2 2 0 0 0 2-2V8a2.4 2.4 0 0 0-.706-1.706l-3.588-3.588A2.4 2.4 0 0 0 14 2H6a2 2 0 0 0-2 2v6",
      key: "15usau"
    }
  ],
  ["path", { d: "M14 2v5a1 1 0 0 0 1 1h5", key: "wfsgrz" }],
  ["path", { d: "M3 16v-1.5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 .5.5V16", key: "s1gz5" }],
  ["path", { d: "M6 22h2", key: "194x9m" }],
  ["path", { d: "M7 14v8", key: "11ixej" }]
], b_ = e("file-type-corner", x_);
const w_ = [
  [
    "path",
    {
      d: "M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z",
      key: "1oefj6"
    }
  ],
  ["path", { d: "M14 2v5a1 1 0 0 0 1 1h5", key: "wfsgrz" }],
  ["path", { d: "M11 18h2", key: "12mj7e" }],
  ["path", { d: "M12 12v6", key: "3ahymv" }],
  ["path", { d: "M9 13v-.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 .5.5v.5", key: "qbrxap" }]
], N_ = e("file-type", w_);
const $_ = [
  [
    "path",
    {
      d: "M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z",
      key: "1oefj6"
    }
  ],
  ["path", { d: "M14 2v5a1 1 0 0 0 1 1h5", key: "wfsgrz" }],
  ["path", { d: "M12 12v6", key: "3ahymv" }],
  ["path", { d: "m15 15-3-3-3 3", key: "15xj92" }]
], z_ = e("file-up", $_);
const j_ = [
  [
    "path",
    {
      d: "M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z",
      key: "1oefj6"
    }
  ],
  ["path", { d: "M14 2v5a1 1 0 0 0 1 1h5", key: "wfsgrz" }],
  ["path", { d: "M16 22a4 4 0 0 0-8 0", key: "7a83pg" }],
  ["circle", { cx: "12", cy: "15", r: "3", key: "g36mzq" }]
], q_ = e("file-user", j_);
const A_ = [
  [
    "path",
    {
      d: "M4 11.55V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.706.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2h-1.95",
      key: "44gpjv"
    }
  ],
  ["path", { d: "M14 2v5a1 1 0 0 0 1 1h5", key: "wfsgrz" }],
  ["path", { d: "M12 15a5 5 0 0 1 0 6", key: "oxg87a" }],
  [
    "path",
    {
      d: "M8 14.502a.5.5 0 0 0-.826-.381l-1.893 1.631a1 1 0 0 1-.651.243H3.5a.5.5 0 0 0-.5.501v3.006a.5.5 0 0 0 .5.501h1.129a1 1 0 0 1 .652.243l1.893 1.633a.5.5 0 0 0 .826-.38z",
      key: "8rtoi1"
    }
  ]
], H_ = e("file-volume", A_);
const S_ = [
  [
    "path",
    {
      d: "M4 12V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.706.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2",
      key: "jrl274"
    }
  ],
  ["path", { d: "M14 2v5a1 1 0 0 0 1 1h5", key: "wfsgrz" }],
  [
    "path",
    {
      d: "m10 17.843 3.033-1.755a.64.64 0 0 1 .967.56v4.704a.65.65 0 0 1-.967.56L10 20.157",
      key: "17aeo9"
    }
  ],
  ["rect", { width: "7", height: "6", x: "3", y: "16", rx: "1", key: "s27ndx" }]
], C_ = e("file-video-camera", S_);
const V_ = [
  [
    "path",
    {
      d: "M11 22H6a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.706.706l3.588 3.588A2.4 2.4 0 0 1 20 8v5",
      key: "1jo35a"
    }
  ],
  ["path", { d: "M14 2v5a1 1 0 0 0 1 1h5", key: "wfsgrz" }],
  ["path", { d: "m15 17 5 5", key: "36xl1x" }],
  ["path", { d: "m20 17-5 5", key: "vdz27y" }]
], R_ = e("file-x-corner", V_);
const E_ = [
  [
    "path",
    {
      d: "M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z",
      key: "1oefj6"
    }
  ],
  ["path", { d: "M14 2v5a1 1 0 0 0 1 1h5", key: "wfsgrz" }],
  ["path", { d: "m14.5 12.5-5 5", key: "b62r18" }],
  ["path", { d: "m9.5 12.5 5 5", key: "1rk7el" }]
], L_ = e("file-x", E_);
const P_ = [
  [
    "path",
    {
      d: "M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z",
      key: "1oefj6"
    }
  ],
  ["path", { d: "M14 2v5a1 1 0 0 0 1 1h5", key: "wfsgrz" }]
], T_ = e("file", P_);
const O_ = [
  ["path", { d: "M15 2h-4a2 2 0 0 0-2 2v11a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V8", key: "14sh0y" }],
  [
    "path",
    {
      d: "M16.706 2.706A2.4 2.4 0 0 0 15 2v5a1 1 0 0 0 1 1h5a2.4 2.4 0 0 0-.706-1.706z",
      key: "1970lx"
    }
  ],
  ["path", { d: "M5 7a2 2 0 0 0-2 2v11a2 2 0 0 0 2 2h8a2 2 0 0 0 1.732-1", key: "l4dndm" }]
], D_ = e("files", O_);
const I_ = [
  ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", key: "afitv7" }],
  ["path", { d: "M7 3v18", key: "bbkbws" }],
  ["path", { d: "M3 7.5h4", key: "zfgn84" }],
  ["path", { d: "M3 12h18", key: "1i2n21" }],
  ["path", { d: "M3 16.5h4", key: "1230mu" }],
  ["path", { d: "M17 3v18", key: "in4fa5" }],
  ["path", { d: "M17 7.5h4", key: "myr1c1" }],
  ["path", { d: "M17 16.5h4", key: "go4c1d" }]
], F_ = e("film", I_);
const B_ = [
  ["path", { d: "M12 10a2 2 0 0 0-2 2c0 1.02-.1 2.51-.26 4", key: "1nerag" }],
  ["path", { d: "M14 13.12c0 2.38 0 6.38-1 8.88", key: "o46ks0" }],
  ["path", { d: "M17.29 21.02c.12-.6.43-2.3.5-3.02", key: "ptglia" }],
  ["path", { d: "M2 12a10 10 0 0 1 18-6", key: "ydlgp0" }],
  ["path", { d: "M2 16h.01", key: "1gqxmh" }],
  ["path", { d: "M21.8 16c.2-2 .131-5.354 0-6", key: "drycrb" }],
  ["path", { d: "M5 19.5C5.5 18 6 15 6 12a6 6 0 0 1 .34-2", key: "1tidbn" }],
  ["path", { d: "M8.65 22c.21-.66.45-1.32.57-2", key: "13wd9y" }],
  ["path", { d: "M9 6.8a6 6 0 0 1 9 5.2v2", key: "1fr1j5" }]
], U_ = e("fingerprint-pattern", B_);
const W_ = [
  ["path", { d: "M15 6.5V3a1 1 0 0 0-1-1h-2a1 1 0 0 0-1 1v3.5", key: "sqyvz" }],
  ["path", { d: "M9 18h8", key: "i7pszb" }],
  ["path", { d: "M18 3h-3", key: "7idoqj" }],
  ["path", { d: "M11 3a6 6 0 0 0-6 6v11", key: "1v5je3" }],
  ["path", { d: "M5 13h4", key: "svpcxo" }],
  ["path", { d: "M17 10a4 4 0 0 0-8 0v10a2 2 0 0 0 2 2h4a2 2 0 0 0 2-2Z", key: "vsjego" }]
], Z_ = e("fire-extinguisher", W_);
const G_ = [
  [
    "path",
    {
      d: "M18 12.47v.03m0-.5v.47m-.475 5.056A6.744 6.744 0 0 1 15 18c-3.56 0-7.56-2.53-8.5-6 .348-1.28 1.114-2.433 2.121-3.38m3.444-2.088A8.802 8.802 0 0 1 15 6c3.56 0 6.06 2.54 7 6-.309 1.14-.786 2.177-1.413 3.058",
      key: "1j1hse"
    }
  ],
  [
    "path",
    {
      d: "M7 10.67C7 8 5.58 5.97 2.73 5.5c-1 1.5-1 5 .23 6.5-1.24 1.5-1.24 5-.23 6.5C5.58 18.03 7 16 7 13.33m7.48-4.372A9.77 9.77 0 0 1 16 6.07m0 11.86a9.77 9.77 0 0 1-1.728-3.618",
      key: "1q46z8"
    }
  ],
  [
    "path",
    {
      d: "m16.01 17.93-.23 1.4A2 2 0 0 1 13.8 21H9.5a5.96 5.96 0 0 0 1.49-3.98M8.53 3h5.27a2 2 0 0 1 1.98 1.67l.23 1.4M2 2l20 20",
      key: "1407gh"
    }
  ]
], X_ = e("fish-off", G_);
const Y_ = [
  ["path", { d: "M2 16s9-15 20-4C11 23 2 8 2 8", key: "h4oh4o" }]
], K_ = e("fish-symbol", Y_);
const Q_ = [
  [
    "path",
    {
      d: "M6.5 12c.94-3.46 4.94-6 8.5-6 3.56 0 6.06 2.54 7 6-.94 3.47-3.44 6-7 6s-7.56-2.53-8.5-6Z",
      key: "15baut"
    }
  ],
  ["path", { d: "M18 12v.5", key: "18hhni" }],
  ["path", { d: "M16 17.93a9.77 9.77 0 0 1 0-11.86", key: "16dt7o" }],
  [
    "path",
    {
      d: "M7 10.67C7 8 5.58 5.97 2.73 5.5c-1 1.5-1 5 .23 6.5-1.24 1.5-1.24 5-.23 6.5C5.58 18.03 7 16 7 13.33",
      key: "l9di03"
    }
  ],
  [
    "path",
    { d: "M10.46 7.26C10.2 5.88 9.17 4.24 8 3h5.8a2 2 0 0 1 1.98 1.67l.23 1.4", key: "1kjonw" }
  ],
  [
    "path",
    { d: "m16.01 17.93-.23 1.4A2 2 0 0 1 13.8 21H9.5a5.96 5.96 0 0 0 1.49-3.98", key: "1zlm23" }
  ]
], J_ = e("fish", Q_);
const ex = [
  [
    "path",
    {
      d: "m17.586 11.414-5.93 5.93a1 1 0 0 1-8-8l3.137-3.137a.707.707 0 0 1 1.207.5V10",
      key: "157y8s"
    }
  ],
  ["path", { d: "M20.414 8.586 22 7", key: "5g2s34" }],
  ["circle", { cx: "19", cy: "10", r: "2", key: "7363ft" }]
], tx = e("fishing-hook", ex);
const ax = [
  ["path", { d: "M16 16c-3 0-5-2-8-2a6 6 0 0 0-4 1.528", key: "1q158e" }],
  ["path", { d: "m2 2 20 20", key: "1ooewy" }],
  ["path", { d: "M4 22V4", key: "1plyxx" }],
  ["path", { d: "M7.656 2H8c3 0 5 2 7.333 2q2 0 3.067-.8A1 1 0 0 1 20 4v10.347", key: "xj1b71" }]
], ox = e("flag-off", ax);
const nx = [
  [
    "path",
    { d: "M18 22V2.8a.8.8 0 0 0-1.17-.71L5.45 7.78a.8.8 0 0 0 0 1.44L18 15.5", key: "rbbtmw" }
  ]
], cx = e("flag-triangle-left", nx);
const rx = [
  [
    "path",
    { d: "M6 22V2.8a.8.8 0 0 1 1.17-.71l11.38 5.69a.8.8 0 0 1 0 1.44L6 15.5", key: "kfjsu0" }
  ]
], hx = e("flag-triangle-right", rx);
const dx = [
  [
    "path",
    {
      d: "M4 22V4a1 1 0 0 1 .4-.8A6 6 0 0 1 8 2c3 0 5 2 7.333 2q2 0 3.067-.8A1 1 0 0 1 20 4v10a1 1 0 0 1-.4.8A6 6 0 0 1 16 16c-3 0-5-2-8-2a6 6 0 0 0-4 1.528",
      key: "1jaruq"
    }
  ]
], ix = e("flag", dx);
const sx = [
  [
    "path",
    {
      d: "M12 2c1 3 2.5 3.5 3.5 4.5A5 5 0 0 1 17 10a5 5 0 1 1-10 0c0-.3 0-.6.1-.9a2 2 0 1 0 3.3-2C8 4.5 11 2 12 2Z",
      key: "1ir223"
    }
  ],
  ["path", { d: "m5 22 14-4", key: "1brv4h" }],
  ["path", { d: "m5 18 14 4", key: "lgyyje" }]
], yx = e("flame-kindling", sx);
const px = [
  [
    "path",
    {
      d: "M12 3q1 4 4 6.5t3 5.5a1 1 0 0 1-14 0 5 5 0 0 1 1-3 1 1 0 0 0 5 0c0-2-1.5-3-1.5-5q0-2 2.5-4",
      key: "1slcih"
    }
  ]
], kx = e("flame", px);
const lx = [
  ["path", { d: "M11.652 6H18", key: "voqkpr" }],
  ["path", { d: "M12 13v1", key: "176q98" }],
  [
    "path",
    {
      d: "M16 16v4a2 2 0 0 1-2 2h-4a2 2 0 0 1-2-2v-8a4 4 0 0 0-.8-2.4l-.6-.8A3 3 0 0 1 6 7V6",
      key: "dzyf92"
    }
  ],
  ["path", { d: "m2 2 20 20", key: "1ooewy" }],
  [
    "path",
    { d: "M7.649 2H17a1 1 0 0 1 1 1v4a3 3 0 0 1-.6 1.8l-.6.8a4 4 0 0 0-.55 1.007", key: "1hvcfn" }
  ]
], ux = e("flashlight-off", lx);
const Mx = [
  ["path", { d: "M12 13v1", key: "176q98" }],
  [
    "path",
    {
      d: "M17 2a1 1 0 0 1 1 1v4a3 3 0 0 1-.6 1.8l-.6.8A4 4 0 0 0 16 12v8a2 2 0 0 1-2 2H10a2 2 0 0 1-2-2v-8a4 4 0 0 0-.8-2.4l-.6-.8A3 3 0 0 1 6 7V3a1 1 0 0 1 1-1z",
      key: "17vh7j"
    }
  ],
  ["path", { d: "M6 6h12", key: "n6hhss" }]
], fx = e("flashlight", Mx);
const mx = [
  ["path", { d: "M10 2v2.343", key: "15t272" }],
  ["path", { d: "M14 2v6.343", key: "sxr80q" }],
  ["path", { d: "m2 2 20 20", key: "1ooewy" }],
  ["path", { d: "M20 20a2 2 0 0 1-2 2H6a2 2 0 0 1-1.755-2.96l5.227-9.563", key: "k0duyd" }],
  ["path", { d: "M6.453 15H15", key: "1f0z33" }],
  ["path", { d: "M8.5 2h7", key: "csnxdl" }]
], vx = e("flask-conical-off", mx);
const gx = [
  [
    "path",
    {
      d: "M14 2v6a2 2 0 0 0 .245.96l5.51 10.08A2 2 0 0 1 18 22H6a2 2 0 0 1-1.755-2.96l5.51-10.08A2 2 0 0 0 10 8V2",
      key: "18mbvz"
    }
  ],
  ["path", { d: "M6.453 15h11.094", key: "3shlmq" }],
  ["path", { d: "M8.5 2h7", key: "csnxdl" }]
], _x = e("flask-conical", gx);
const xx = [
  ["path", { d: "M10 2v6.292a7 7 0 1 0 4 0V2", key: "1s42pc" }],
  ["path", { d: "M5 15h14", key: "m0yey3" }],
  ["path", { d: "M8.5 2h7", key: "csnxdl" }]
], bx = e("flask-round", xx);
const wx = [
  ["path", { d: "m3 7 5 5-5 5V7", key: "couhi7" }],
  ["path", { d: "m21 7-5 5 5 5V7", key: "6ouia7" }],
  ["path", { d: "M12 20v2", key: "1lh1kg" }],
  ["path", { d: "M12 14v2", key: "8jcxud" }],
  ["path", { d: "M12 8v2", key: "1woqiv" }],
  ["path", { d: "M12 2v2", key: "tus03m" }]
], Nx = e("flip-horizontal-2", wx);
const $x = [
  ["path", { d: "M8 3H5a2 2 0 0 0-2 2v14c0 1.1.9 2 2 2h3", key: "1i73f7" }],
  ["path", { d: "M16 3h3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-3", key: "saxlbk" }],
  ["path", { d: "M12 20v2", key: "1lh1kg" }],
  ["path", { d: "M12 14v2", key: "8jcxud" }],
  ["path", { d: "M12 8v2", key: "1woqiv" }],
  ["path", { d: "M12 2v2", key: "tus03m" }]
], zx = e("flip-horizontal", $x);
const jx = [
  ["path", { d: "m17 3-5 5-5-5h10", key: "1ftt6x" }],
  ["path", { d: "m17 21-5-5-5 5h10", key: "1m0wmu" }],
  ["path", { d: "M4 12H2", key: "rhcxmi" }],
  ["path", { d: "M10 12H8", key: "s88cx1" }],
  ["path", { d: "M16 12h-2", key: "10asgb" }],
  ["path", { d: "M22 12h-2", key: "14jgyd" }]
], qx = e("flip-vertical-2", jx);
const Ax = [
  ["path", { d: "M21 8V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v3", key: "14bfxa" }],
  ["path", { d: "M21 16v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-3", key: "14rx03" }],
  ["path", { d: "M4 12H2", key: "rhcxmi" }],
  ["path", { d: "M10 12H8", key: "s88cx1" }],
  ["path", { d: "M16 12h-2", key: "10asgb" }],
  ["path", { d: "M22 12h-2", key: "14jgyd" }]
], Hx = e("flip-vertical", Ax);
const Sx = [
  [
    "path",
    {
      d: "M12 5a3 3 0 1 1 3 3m-3-3a3 3 0 1 0-3 3m3-3v1M9 8a3 3 0 1 0 3 3M9 8h1m5 0a3 3 0 1 1-3 3m3-3h-1m-2 3v-1",
      key: "3pnvol"
    }
  ],
  ["circle", { cx: "12", cy: "8", r: "2", key: "1822b1" }],
  ["path", { d: "M12 10v12", key: "6ubwww" }],
  ["path", { d: "M12 22c4.2 0 7-1.667 7-5-4.2 0-7 1.667-7 5Z", key: "9hd38g" }],
  ["path", { d: "M12 22c-4.2 0-7-1.667-7-5 4.2 0 7 1.667 7 5Z", key: "ufn41s" }]
], Cx = e("flower-2", Sx);
const Vx = [
  ["circle", { cx: "12", cy: "12", r: "3", key: "1v7zrd" }],
  [
    "path",
    {
      d: "M12 16.5A4.5 4.5 0 1 1 7.5 12 4.5 4.5 0 1 1 12 7.5a4.5 4.5 0 1 1 4.5 4.5 4.5 4.5 0 1 1-4.5 4.5",
      key: "14wa3c"
    }
  ],
  ["path", { d: "M12 7.5V9", key: "1oy5b0" }],
  ["path", { d: "M7.5 12H9", key: "eltsq1" }],
  ["path", { d: "M16.5 12H15", key: "vk5kw4" }],
  ["path", { d: "M12 16.5V15", key: "k7eayi" }],
  ["path", { d: "m8 8 1.88 1.88", key: "nxy4qf" }],
  ["path", { d: "M14.12 9.88 16 8", key: "1lst6k" }],
  ["path", { d: "m8 16 1.88-1.88", key: "h2eex1" }],
  ["path", { d: "M14.12 14.12 16 16", key: "uqkrx3" }]
], Rx = e("flower", Vx);
const Ex = [
  ["circle", { cx: "12", cy: "12", r: "3", key: "1v7zrd" }],
  ["path", { d: "M3 7V5a2 2 0 0 1 2-2h2", key: "aa7l1z" }],
  ["path", { d: "M17 3h2a2 2 0 0 1 2 2v2", key: "4qcy5o" }],
  ["path", { d: "M21 17v2a2 2 0 0 1-2 2h-2", key: "6vwrx8" }],
  ["path", { d: "M7 21H5a2 2 0 0 1-2-2v-2", key: "ioqczr" }]
], Lx = e("focus", Ex);
const Px = [
  ["path", { d: "M12 22v-6", key: "6o8u61" }],
  ["path", { d: "M12 8V2", key: "1wkif3" }],
  ["path", { d: "M4 12H2", key: "rhcxmi" }],
  ["path", { d: "M10 12H8", key: "s88cx1" }],
  ["path", { d: "M16 12h-2", key: "10asgb" }],
  ["path", { d: "M22 12h-2", key: "14jgyd" }],
  ["path", { d: "m15 19-3-3-3 3", key: "e37ymu" }],
  ["path", { d: "m15 5-3 3-3-3", key: "19d6lf" }]
], Tx = e("fold-vertical", Px);
const Ox = [
  ["path", { d: "M2 12h6", key: "1wqiqv" }],
  ["path", { d: "M22 12h-6", key: "1eg9hc" }],
  ["path", { d: "M12 2v2", key: "tus03m" }],
  ["path", { d: "M12 8v2", key: "1woqiv" }],
  ["path", { d: "M12 14v2", key: "8jcxud" }],
  ["path", { d: "M12 20v2", key: "1lh1kg" }],
  ["path", { d: "m19 9-3 3 3 3", key: "12ol22" }],
  ["path", { d: "m5 15 3-3-3-3", key: "1kdhjc" }]
], Dx = e("fold-horizontal", Ox);
const Ix = [
  ["circle", { cx: "15", cy: "19", r: "2", key: "u2pros" }],
  [
    "path",
    {
      d: "M20.9 19.8A2 2 0 0 0 22 18V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2h5.1",
      key: "1jj40k"
    }
  ],
  ["path", { d: "M15 11v-1", key: "cntcp" }],
  ["path", { d: "M15 17v-2", key: "1279jj" }]
], Fx = e("folder-archive", Ix);
const Bx = [
  [
    "path",
    {
      d: "M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z",
      key: "1kt360"
    }
  ],
  ["path", { d: "m9 13 2 2 4-4", key: "6343dt" }]
], Ux = e("folder-check", Bx);
const Wx = [
  ["path", { d: "M16 14v2.2l1.6 1", key: "fo4ql5" }],
  [
    "path",
    {
      d: "M7 20H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H20a2 2 0 0 1 2 2",
      key: "1urifu"
    }
  ],
  ["circle", { cx: "16", cy: "16", r: "6", key: "qoo3c4" }]
], Zx = e("folder-clock", Wx);
const Gx = [
  [
    "path",
    {
      d: "M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z",
      key: "1kt360"
    }
  ],
  ["path", { d: "M2 10h20", key: "1ir3d8" }]
], Xx = e("folder-closed", Gx);
const Yx = [
  ["path", { d: "M10 10.5 8 13l2 2.5", key: "m4t9c1" }],
  ["path", { d: "m14 10.5 2 2.5-2 2.5", key: "14w2eb" }],
  [
    "path",
    {
      d: "M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2z",
      key: "1u1bxd"
    }
  ]
], Kx = e("folder-code", Yx);
const Qx = [
  [
    "path",
    {
      d: "M4 20h16a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.93a2 2 0 0 1-1.66-.9l-.82-1.2A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13c0 1.1.9 2 2 2Z",
      key: "1fr9dc"
    }
  ],
  ["circle", { cx: "12", cy: "13", r: "1", key: "49l61u" }]
], Jx = e("folder-dot", Qx);
const eb = [
  [
    "path",
    {
      d: "M10.3 20H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.98a2 2 0 0 1 1.69.9l.66 1.2A2 2 0 0 0 12 6h8a2 2 0 0 1 2 2v3.3",
      key: "128dxu"
    }
  ],
  ["path", { d: "m14.305 19.53.923-.382", key: "3m78fa" }],
  ["path", { d: "m15.228 16.852-.923-.383", key: "npixar" }],
  ["path", { d: "m16.852 15.228-.383-.923", key: "5xggr7" }],
  ["path", { d: "m16.852 20.772-.383.924", key: "dpfhf9" }],
  ["path", { d: "m19.148 15.228.383-.923", key: "1reyyz" }],
  ["path", { d: "m19.53 21.696-.382-.924", key: "1goivc" }],
  ["path", { d: "m20.772 16.852.924-.383", key: "htqkph" }],
  ["path", { d: "m20.772 19.148.924.383", key: "9w9pjp" }],
  ["circle", { cx: "18", cy: "18", r: "3", key: "1xkwt0" }]
], tb = e("folder-cog", eb);
const ab = [
  [
    "path",
    {
      d: "M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z",
      key: "1kt360"
    }
  ],
  ["path", { d: "M12 10v6", key: "1bos4e" }],
  ["path", { d: "m15 13-3 3-3-3", key: "6j2sf0" }]
], ob = e("folder-down", ab);
const nb = [
  ["path", { d: "M18 19a5 5 0 0 1-5-5v8", key: "sz5oeg" }],
  [
    "path",
    {
      d: "M9 20H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H20a2 2 0 0 1 2 2v5",
      key: "1w6njk"
    }
  ],
  ["circle", { cx: "13", cy: "12", r: "2", key: "1j92g6" }],
  ["circle", { cx: "20", cy: "19", r: "2", key: "1obnsp" }]
], cb = e("folder-git-2", nb);
const rb = [
  ["circle", { cx: "12", cy: "13", r: "2", key: "1c1ljs" }],
  [
    "path",
    {
      d: "M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z",
      key: "1kt360"
    }
  ],
  ["path", { d: "M14 13h3", key: "1dgedf" }],
  ["path", { d: "M7 13h3", key: "1pygq7" }]
], hb = e("folder-git", rb);
const db = [
  [
    "path",
    {
      d: "M10.638 20H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H20a2 2 0 0 1 2 2v3.417",
      key: "10r6g4"
    }
  ],
  [
    "path",
    {
      d: "M14.62 18.8A2.25 2.25 0 1 1 18 15.836a2.25 2.25 0 1 1 3.38 2.966l-2.626 2.856a.998.998 0 0 1-1.507 0z",
      key: "15cy7q"
    }
  ]
], ib = e("folder-heart", db);
const sb = [
  [
    "path",
    {
      d: "M2 9V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H20a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-1",
      key: "fm4g5t"
    }
  ],
  ["path", { d: "M2 13h10", key: "pgb2dq" }],
  ["path", { d: "m9 16 3-3-3-3", key: "6m91ic" }]
], yb = e("folder-input", sb);
const pb = [
  ["circle", { cx: "16", cy: "20", r: "2", key: "1vifvg" }],
  [
    "path",
    {
      d: "M10 20H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H20a2 2 0 0 1 2 2v2",
      key: "3hgo9p"
    }
  ],
  ["path", { d: "m22 14-4.5 4.5", key: "1ef6z8" }],
  ["path", { d: "m21 15 1 1", key: "1ejcpy" }]
], kb = e("folder-key", pb);
const lb = [
  [
    "path",
    {
      d: "M4 20h16a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.93a2 2 0 0 1-1.66-.9l-.82-1.2A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13c0 1.1.9 2 2 2Z",
      key: "1fr9dc"
    }
  ],
  ["path", { d: "M8 10v4", key: "tgpxqk" }],
  ["path", { d: "M12 10v2", key: "hh53o1" }],
  ["path", { d: "M16 10v6", key: "1d6xys" }]
], ub = e("folder-kanban", lb);
const Mb = [
  ["rect", { width: "8", height: "5", x: "14", y: "17", rx: "1", key: "19aais" }],
  [
    "path",
    {
      d: "M10 20H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H20a2 2 0 0 1 2 2v2.5",
      key: "1w6v7t"
    }
  ],
  ["path", { d: "M20 17v-2a2 2 0 1 0-4 0v2", key: "pwaxnr" }]
], fb = e("folder-lock", Mb);
const mb = [
  ["path", { d: "M9 13h6", key: "1uhe8q" }],
  [
    "path",
    {
      d: "M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z",
      key: "1kt360"
    }
  ]
], vb = e("folder-minus", mb);
const gb = [
  [
    "path",
    {
      d: "m6 14 1.45-2.9A2 2 0 0 1 9.24 10H20a2 2 0 0 1 1.94 2.5l-1.55 6a2 2 0 0 1-1.94 1.5H4a2 2 0 0 1-2-2V5c0-1.1.9-2 2-2h3.93a2 2 0 0 1 1.66.9l.82 1.2a2 2 0 0 0 1.66.9H18a2 2 0 0 1 2 2v2",
      key: "1nmvlm"
    }
  ],
  ["circle", { cx: "14", cy: "15", r: "1", key: "1gm4qj" }]
], _b = e("folder-open-dot", gb);
const xb = [
  [
    "path",
    {
      d: "m6 14 1.5-2.9A2 2 0 0 1 9.24 10H20a2 2 0 0 1 1.94 2.5l-1.54 6a2 2 0 0 1-1.95 1.5H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H18a2 2 0 0 1 2 2v2",
      key: "usdka0"
    }
  ]
], bb = e("folder-open", xb);
const wb = [
  [
    "path",
    {
      d: "M2 7.5V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H20a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-1.5",
      key: "1yk7aj"
    }
  ],
  ["path", { d: "M2 13h10", key: "pgb2dq" }],
  ["path", { d: "m5 10-3 3 3 3", key: "1r8ie0" }]
], Nb = e("folder-output", wb);
const $b = [
  [
    "path",
    {
      d: "M2 11.5V5a2 2 0 0 1 2-2h3.9c.7 0 1.3.3 1.7.9l.8 1.2c.4.6 1 .9 1.7.9H20a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-9.5",
      key: "a8xqs0"
    }
  ],
  [
    "path",
    {
      d: "M11.378 13.626a1 1 0 1 0-3.004-3.004l-5.01 5.012a2 2 0 0 0-.506.854l-.837 2.87a.5.5 0 0 0 .62.62l2.87-.837a2 2 0 0 0 .854-.506z",
      key: "1saktj"
    }
  ]
], zb = e("folder-pen", $b);
const jb = [
  ["path", { d: "M12 10v6", key: "1bos4e" }],
  ["path", { d: "M9 13h6", key: "1uhe8q" }],
  [
    "path",
    {
      d: "M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z",
      key: "1kt360"
    }
  ]
], qb = e("folder-plus", jb);
const Ab = [
  [
    "path",
    {
      d: "M4 20h16a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.93a2 2 0 0 1-1.66-.9l-.82-1.2A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13c0 1.1.9 2 2 2Z",
      key: "1fr9dc"
    }
  ],
  ["circle", { cx: "12", cy: "13", r: "2", key: "1c1ljs" }],
  ["path", { d: "M12 15v5", key: "11xva1" }]
], Hb = e("folder-root", Ab);
const Sb = [
  ["circle", { cx: "11.5", cy: "12.5", r: "2.5", key: "1ea5ju" }],
  [
    "path",
    {
      d: "M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z",
      key: "1kt360"
    }
  ],
  ["path", { d: "M13.3 14.3 15 16", key: "1y4v1n" }]
], Cb = e("folder-search-2", Sb);
const Vb = [
  [
    "path",
    {
      d: "M10.7 20H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H20a2 2 0 0 1 2 2v4.1",
      key: "1bw5m7"
    }
  ],
  ["path", { d: "m21 21-1.9-1.9", key: "1g2n9r" }],
  ["circle", { cx: "17", cy: "17", r: "3", key: "18b49y" }]
], Rb = e("folder-search", Vb);
const Eb = [
  [
    "path",
    {
      d: "M2 9.35V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H20a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h7",
      key: "y8kt7d"
    }
  ],
  ["path", { d: "m8 16 3-3-3-3", key: "rlqrt1" }]
], Lb = e("folder-symlink", Eb);
const Pb = [
  [
    "path",
    {
      d: "M9 20H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H20a2 2 0 0 1 2 2v.5",
      key: "1dkoa9"
    }
  ],
  ["path", { d: "M12 10v4h4", key: "1czhmt" }],
  ["path", { d: "m12 14 1.535-1.605a5 5 0 0 1 8 1.5", key: "lvuxfi" }],
  ["path", { d: "M22 22v-4h-4", key: "1ewp4q" }],
  ["path", { d: "m22 18-1.535 1.605a5 5 0 0 1-8-1.5", key: "14ync0" }]
], Tb = e("folder-sync", Pb);
const Ob = [
  [
    "path",
    {
      d: "M20 10a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1h-2.5a1 1 0 0 1-.8-.4l-.9-1.2A1 1 0 0 0 15 3h-2a1 1 0 0 0-1 1v5a1 1 0 0 0 1 1Z",
      key: "hod4my"
    }
  ],
  [
    "path",
    {
      d: "M20 21a1 1 0 0 0 1-1v-3a1 1 0 0 0-1-1h-2.9a1 1 0 0 1-.88-.55l-.42-.85a1 1 0 0 0-.92-.6H13a1 1 0 0 0-1 1v5a1 1 0 0 0 1 1Z",
      key: "w4yl2u"
    }
  ],
  ["path", { d: "M3 5a2 2 0 0 0 2 2h3", key: "f2jnh7" }],
  ["path", { d: "M3 3v13a2 2 0 0 0 2 2h3", key: "k8epm1" }]
], Db = e("folder-tree", Ob);
const Ib = [
  [
    "path",
    {
      d: "M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z",
      key: "1kt360"
    }
  ],
  ["path", { d: "M12 10v6", key: "1bos4e" }],
  ["path", { d: "m9 13 3-3 3 3", key: "1pxg3c" }]
], Fb = e("folder-up", Ib);
const Bb = [
  [
    "path",
    {
      d: "M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z",
      key: "1kt360"
    }
  ]
], Ub = e("folder", Bb);
const Wb = [
  [
    "path",
    {
      d: "M20 5a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2H9a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h2.5a1.5 1.5 0 0 1 1.2.6l.6.8a1.5 1.5 0 0 0 1.2.6z",
      key: "a4852j"
    }
  ],
  [
    "path",
    { d: "M3 8.268a2 2 0 0 0-1 1.738V19a2 2 0 0 0 2 2h11a2 2 0 0 0 1.732-1", key: "yxbcw3" }
  ]
], Zb = e("folders", Wb);
const Gb = [
  [
    "path",
    {
      d: "M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z",
      key: "1kt360"
    }
  ],
  ["path", { d: "m9.5 10.5 5 5", key: "ra9qjz" }],
  ["path", { d: "m14.5 10.5-5 5", key: "l2rkpq" }]
], Xb = e("folder-x", Gb);
const Yb = [
  [
    "path",
    {
      d: "M4 16v-2.38C4 11.5 2.97 10.5 3 8c.03-2.72 1.49-6 4.5-6C9.37 2 10 3.8 10 5.5c0 3.11-2 5.66-2 8.68V16a2 2 0 1 1-4 0Z",
      key: "1dudjm"
    }
  ],
  [
    "path",
    {
      d: "M20 20v-2.38c0-2.12 1.03-3.12 1-5.62-.03-2.72-1.49-6-4.5-6C14.63 6 14 7.8 14 9.5c0 3.11 2 5.66 2 8.68V20a2 2 0 1 0 4 0Z",
      key: "l2t8xc"
    }
  ],
  ["path", { d: "M16 17h4", key: "1dejxt" }],
  ["path", { d: "M4 13h4", key: "1bwh8b" }]
], Kb = e("footprints", Yb);
const Qb = [
  ["path", { d: "M12 12H5a2 2 0 0 0-2 2v5", key: "7zsz91" }],
  ["circle", { cx: "13", cy: "19", r: "2", key: "wjnkru" }],
  ["circle", { cx: "5", cy: "19", r: "2", key: "v8kfzx" }],
  ["path", { d: "M8 19h3m5-17v17h6M6 12V7c0-1.1.9-2 2-2h3l5 5", key: "13bk1p" }]
], Jb = e("forklift", Qb);
const ew = [
  ["path", { d: "M4 14h6", key: "77gv2w" }],
  ["path", { d: "M4 2h10", key: "a2b314" }],
  ["rect", { x: "4", y: "18", width: "16", height: "4", rx: "1", key: "sybzq6" }],
  ["rect", { x: "4", y: "6", width: "16", height: "4", rx: "1", key: "1osc9e" }]
], tw = e("form", ew);
const aw = [
  ["path", { d: "m15 17 5-5-5-5", key: "nf172w" }],
  ["path", { d: "M4 18v-2a4 4 0 0 1 4-4h12", key: "jmiej9" }]
], ow = e("forward", aw);
const nw = [
  ["line", { x1: "22", x2: "2", y1: "6", y2: "6", key: "15w7dq" }],
  ["line", { x1: "22", x2: "2", y1: "18", y2: "18", key: "1ip48p" }],
  ["line", { x1: "6", x2: "6", y1: "2", y2: "22", key: "a2lnyx" }],
  ["line", { x1: "18", x2: "18", y1: "2", y2: "22", key: "8vb6jd" }]
], cw = e("frame", nw);
const rw = [
  ["path", { d: "M5 16V9h14V2H5l14 14h-7m-7 0 7 7v-7m-7 0h7", key: "1a2nng" }]
], hw = e("framer", rw);
const dw = [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "M16 16s-1.5-2-4-2-4 2-4 2", key: "epbg0q" }],
  ["line", { x1: "9", x2: "9.01", y1: "9", y2: "9", key: "yxxnd0" }],
  ["line", { x1: "15", x2: "15.01", y1: "9", y2: "9", key: "1p4y9e" }]
], iw = e("frown", dw);
const sw = [
  [
    "path",
    { d: "M14 13h2a2 2 0 0 1 2 2v2a2 2 0 0 0 4 0v-6.998a2 2 0 0 0-.59-1.42L18 5", key: "1wtuz0" }
  ],
  ["path", { d: "M14 21V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v16", key: "e09ifn" }],
  ["path", { d: "M2 21h13", key: "1x0fut" }],
  ["path", { d: "M3 9h11", key: "1p7c0w" }]
], yw = e("fuel", sw);
const pw = [
  ["path", { d: "M3 7V5a2 2 0 0 1 2-2h2", key: "aa7l1z" }],
  ["path", { d: "M17 3h2a2 2 0 0 1 2 2v2", key: "4qcy5o" }],
  ["path", { d: "M21 17v2a2 2 0 0 1-2 2h-2", key: "6vwrx8" }],
  ["path", { d: "M7 21H5a2 2 0 0 1-2-2v-2", key: "ioqczr" }],
  ["rect", { width: "10", height: "8", x: "7", y: "8", rx: "1", key: "vys8me" }]
], kw = e("fullscreen", pw);
const lw = [
  [
    "path",
    {
      d: "M13.354 3H3a1 1 0 0 0-.742 1.67l7.225 7.989A2 2 0 0 1 10 14v6a1 1 0 0 0 .553.895l2 1A1 1 0 0 0 14 21v-7a2 2 0 0 1 .517-1.341l1.218-1.348",
      key: "8mvsmf"
    }
  ],
  ["path", { d: "M16 6h6", key: "1dogtp" }],
  ["path", { d: "M19 3v6", key: "1ytpjt" }]
], uw = e("funnel-plus", lw);
const Mw = [
  [
    "path",
    {
      d: "M12.531 3H3a1 1 0 0 0-.742 1.67l7.225 7.989A2 2 0 0 1 10 14v6a1 1 0 0 0 .553.895l2 1A1 1 0 0 0 14 21v-7a2 2 0 0 1 .517-1.341l.427-.473",
      key: "ol2ft2"
    }
  ],
  ["path", { d: "m16.5 3.5 5 5", key: "15e6fa" }],
  ["path", { d: "m21.5 3.5-5 5", key: "m0lwru" }]
], fw = e("funnel-x", Mw);
const mw = [
  ["path", { d: "M2 7v10", key: "a2pl2d" }],
  ["path", { d: "M6 5v14", key: "1kq3d7" }],
  ["rect", { width: "12", height: "18", x: "10", y: "3", rx: "2", key: "13i7bc" }]
], vw = e("gallery-horizontal-end", mw);
const gw = [
  [
    "path",
    {
      d: "M10 20a1 1 0 0 0 .553.895l2 1A1 1 0 0 0 14 21v-7a2 2 0 0 1 .517-1.341L21.74 4.67A1 1 0 0 0 21 3H3a1 1 0 0 0-.742 1.67l7.225 7.989A2 2 0 0 1 10 14z",
      key: "sc7q7i"
    }
  ]
], _w = e("funnel", gw);
const xw = [
  ["path", { d: "M2 3v18", key: "pzttux" }],
  ["rect", { width: "12", height: "18", x: "6", y: "3", rx: "2", key: "btr8bg" }],
  ["path", { d: "M22 3v18", key: "6jf3v" }]
], bw = e("gallery-horizontal", xw);
const ww = [
  ["rect", { width: "18", height: "14", x: "3", y: "3", rx: "2", key: "74y24f" }],
  ["path", { d: "M4 21h1", key: "16zlid" }],
  ["path", { d: "M9 21h1", key: "15o7lz" }],
  ["path", { d: "M14 21h1", key: "v9vybs" }],
  ["path", { d: "M19 21h1", key: "edywat" }]
], Nw = e("gallery-thumbnails", ww);
const $w = [
  ["path", { d: "M7 2h10", key: "nczekb" }],
  ["path", { d: "M5 6h14", key: "u2x4p" }],
  ["rect", { width: "18", height: "12", x: "3", y: "10", rx: "2", key: "l0tzu3" }]
], zw = e("gallery-vertical-end", $w);
const jw = [
  ["path", { d: "M3 2h18", key: "15qxfx" }],
  ["rect", { width: "18", height: "12", x: "3", y: "6", rx: "2", key: "1439r6" }],
  ["path", { d: "M3 22h18", key: "8prr45" }]
], qw = e("gallery-vertical", jw);
const Aw = [
  ["line", { x1: "6", x2: "10", y1: "11", y2: "11", key: "1gktln" }],
  ["line", { x1: "8", x2: "8", y1: "9", y2: "13", key: "qnk9ow" }],
  ["line", { x1: "15", x2: "15.01", y1: "12", y2: "12", key: "krot7o" }],
  ["line", { x1: "18", x2: "18.01", y1: "10", y2: "10", key: "1lcuu1" }],
  [
    "path",
    {
      d: "M17.32 5H6.68a4 4 0 0 0-3.978 3.59c-.006.052-.01.101-.017.152C2.604 9.416 2 14.456 2 16a3 3 0 0 0 3 3c1 0 1.5-.5 2-1l1.414-1.414A2 2 0 0 1 9.828 16h4.344a2 2 0 0 1 1.414.586L17 18c.5.5 1 1 2 1a3 3 0 0 0 3-3c0-1.545-.604-6.584-.685-7.258-.007-.05-.011-.1-.017-.151A4 4 0 0 0 17.32 5z",
      key: "mfqc10"
    }
  ]
], Hw = e("gamepad-2", Aw);
const Sw = [
  [
    "path",
    {
      d: "M11.146 15.854a1.207 1.207 0 0 1 1.708 0l1.56 1.56A2 2 0 0 1 15 18.828V21a1 1 0 0 1-1 1h-4a1 1 0 0 1-1-1v-2.172a2 2 0 0 1 .586-1.414z",
      key: "1re2og"
    }
  ],
  [
    "path",
    {
      d: "M18.828 15a2 2 0 0 1-1.414-.586l-1.56-1.56a1.207 1.207 0 0 1 0-1.708l1.56-1.56A2 2 0 0 1 18.828 9H21a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1z",
      key: "1pchrj"
    }
  ],
  [
    "path",
    {
      d: "M6.586 14.414A2 2 0 0 1 5.172 15H3a1 1 0 0 1-1-1v-4a1 1 0 0 1 1-1h2.172a2 2 0 0 1 1.414.586l1.56 1.56a1.207 1.207 0 0 1 0 1.708z",
      key: "16mt4c"
    }
  ],
  [
    "path",
    {
      d: "M9 3a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2.172a2 2 0 0 1-.586 1.414l-1.56 1.56a1.207 1.207 0 0 1-1.708 0l-1.56-1.56A2 2 0 0 1 9 5.172z",
      key: "19ox6c"
    }
  ]
], Cw = e("gamepad-directional", Sw);
const Vw = [
  ["line", { x1: "6", x2: "10", y1: "12", y2: "12", key: "161bw2" }],
  ["line", { x1: "8", x2: "8", y1: "10", y2: "14", key: "1i6ji0" }],
  ["line", { x1: "15", x2: "15.01", y1: "13", y2: "13", key: "dqpgro" }],
  ["line", { x1: "18", x2: "18.01", y1: "11", y2: "11", key: "meh2c" }],
  ["rect", { width: "20", height: "12", x: "2", y: "6", rx: "2", key: "9lu3g6" }]
], Rw = e("gamepad", Vw);
const Ew = [
  ["path", { d: "m12 14 4-4", key: "9kzdfg" }],
  ["path", { d: "M3.34 19a10 10 0 1 1 17.32 0", key: "19p75a" }]
], Lw = e("gauge", Ew);
const Pw = [
  ["path", { d: "M10.5 3 8 9l4 13 4-13-2.5-6", key: "b3dvk1" }],
  [
    "path",
    {
      d: "M17 3a2 2 0 0 1 1.6.8l3 4a2 2 0 0 1 .013 2.382l-7.99 10.986a2 2 0 0 1-3.247 0l-7.99-10.986A2 2 0 0 1 2.4 7.8l2.998-3.997A2 2 0 0 1 7 3z",
      key: "7w4byz"
    }
  ],
  ["path", { d: "M2 9h20", key: "16fsjt" }]
], Tw = e("gem", Pw);
const Ow = [
  ["path", { d: "m14 13-8.381 8.38a1 1 0 0 1-3.001-3l8.384-8.381", key: "pgg06f" }],
  ["path", { d: "m16 16 6-6", key: "vzrcl6" }],
  ["path", { d: "m21.5 10.5-8-8", key: "a17d9x" }],
  ["path", { d: "m8 8 6-6", key: "18bi4p" }],
  ["path", { d: "m8.5 7.5 8 8", key: "1oyaui" }]
], Dw = e("gavel", Ow);
const Iw = [
  ["path", { d: "M9 10h.01", key: "qbtxuw" }],
  ["path", { d: "M15 10h.01", key: "1qmjsl" }],
  [
    "path",
    {
      d: "M12 2a8 8 0 0 0-8 8v12l3-3 2.5 2.5L12 19l2.5 2.5L17 19l3 3V10a8 8 0 0 0-8-8z",
      key: "uwwb07"
    }
  ]
], Fw = e("ghost", Iw);
const Bw = [
  ["path", { d: "M11.5 21a7.5 7.5 0 1 1 7.35-9", key: "1gyj8k" }],
  ["path", { d: "M13 12V3", key: "18om2a" }],
  ["path", { d: "M4 21h16", key: "1h09gz" }],
  ["path", { d: "M9 12V3", key: "geutu0" }]
], Uw = e("georgian-lari", Bw);
const Ww = [
  ["rect", { x: "3", y: "8", width: "18", height: "4", rx: "1", key: "bkv52" }],
  ["path", { d: "M12 8v13", key: "1c76mn" }],
  ["path", { d: "M19 12v7a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-7", key: "6wjy6b" }],
  [
    "path",
    {
      d: "M7.5 8a2.5 2.5 0 0 1 0-5A4.8 8 0 0 1 12 8a4.8 8 0 0 1 4.5-5 2.5 2.5 0 0 1 0 5",
      key: "1ihvrl"
    }
  ]
], Zw = e("gift", Ww);
const Gw = [
  ["path", { d: "M15 6a9 9 0 0 0-9 9V3", key: "1cii5b" }],
  ["path", { d: "M21 18h-6", key: "139f0c" }],
  ["circle", { cx: "18", cy: "6", r: "3", key: "1h7g24" }],
  ["circle", { cx: "6", cy: "18", r: "3", key: "fqmcym" }]
], Xw = e("git-branch-minus", Gw);
const Yw = [
  ["path", { d: "M6 3v12", key: "qpgusn" }],
  ["path", { d: "M18 9a3 3 0 1 0 0-6 3 3 0 0 0 0 6z", key: "1d02ji" }],
  ["path", { d: "M6 21a3 3 0 1 0 0-6 3 3 0 0 0 0 6z", key: "chk6ph" }],
  ["path", { d: "M15 6a9 9 0 0 0-9 9", key: "or332x" }],
  ["path", { d: "M18 15v6", key: "9wciyi" }],
  ["path", { d: "M21 18h-6", key: "139f0c" }]
], Kw = e("git-branch-plus", Yw);
const Qw = [
  ["line", { x1: "6", x2: "6", y1: "3", y2: "15", key: "17qcm7" }],
  ["circle", { cx: "18", cy: "6", r: "3", key: "1h7g24" }],
  ["circle", { cx: "6", cy: "18", r: "3", key: "fqmcym" }],
  ["path", { d: "M18 9a9 9 0 0 1-9 9", key: "n2h4wq" }]
], Jw = e("git-branch", Qw);
const eN = [
  ["circle", { cx: "12", cy: "12", r: "3", key: "1v7zrd" }],
  ["line", { x1: "3", x2: "9", y1: "12", y2: "12", key: "1dyftd" }],
  ["line", { x1: "15", x2: "21", y1: "12", y2: "12", key: "oup4p8" }]
], tN = e("git-commit-horizontal", eN);
const aN = [
  ["path", { d: "M12 3v6", key: "1holv5" }],
  ["circle", { cx: "12", cy: "12", r: "3", key: "1v7zrd" }],
  ["path", { d: "M12 15v6", key: "a9ows0" }]
], oN = e("git-commit-vertical", aN);
const nN = [
  ["circle", { cx: "5", cy: "6", r: "3", key: "1qnov2" }],
  ["path", { d: "M12 6h5a2 2 0 0 1 2 2v7", key: "1yj91y" }],
  ["path", { d: "m15 9-3-3 3-3", key: "1lwv8l" }],
  ["circle", { cx: "19", cy: "18", r: "3", key: "1qljk2" }],
  ["path", { d: "M12 18H7a2 2 0 0 1-2-2V9", key: "16sdep" }],
  ["path", { d: "m9 15 3 3-3 3", key: "1m3kbl" }]
], cN = e("git-compare-arrows", nN);
const rN = [
  ["circle", { cx: "18", cy: "18", r: "3", key: "1xkwt0" }],
  ["circle", { cx: "6", cy: "6", r: "3", key: "1lh9wr" }],
  ["path", { d: "M13 6h3a2 2 0 0 1 2 2v7", key: "1yeb86" }],
  ["path", { d: "M11 18H8a2 2 0 0 1-2-2V9", key: "19pyzm" }]
], hN = e("git-compare", rN);
const dN = [
  ["circle", { cx: "12", cy: "18", r: "3", key: "1mpf1b" }],
  ["circle", { cx: "6", cy: "6", r: "3", key: "1lh9wr" }],
  ["circle", { cx: "18", cy: "6", r: "3", key: "1h7g24" }],
  ["path", { d: "M18 9v2c0 .6-.4 1-1 1H7c-.6 0-1-.4-1-1V9", key: "1uq4wg" }],
  ["path", { d: "M12 12v3", key: "158kv8" }]
], iN = e("git-fork", dN);
const sN = [
  ["circle", { cx: "5", cy: "6", r: "3", key: "1qnov2" }],
  ["path", { d: "M5 9v6", key: "158jrl" }],
  ["circle", { cx: "5", cy: "18", r: "3", key: "104gr9" }],
  ["path", { d: "M12 3v18", key: "108xh3" }],
  ["circle", { cx: "19", cy: "6", r: "3", key: "108a5v" }],
  ["path", { d: "M16 15.7A9 9 0 0 0 19 9", key: "1e3vqb" }]
], yN = e("git-graph", sN);
const pN = [
  ["circle", { cx: "18", cy: "18", r: "3", key: "1xkwt0" }],
  ["circle", { cx: "6", cy: "6", r: "3", key: "1lh9wr" }],
  ["path", { d: "M6 21V9a9 9 0 0 0 9 9", key: "7kw0sc" }]
], kN = e("git-merge", pN);
const lN = [
  ["circle", { cx: "5", cy: "6", r: "3", key: "1qnov2" }],
  ["path", { d: "M5 9v12", key: "ih889a" }],
  ["circle", { cx: "19", cy: "18", r: "3", key: "1qljk2" }],
  ["path", { d: "m15 9-3-3 3-3", key: "1lwv8l" }],
  ["path", { d: "M12 6h5a2 2 0 0 1 2 2v7", key: "1yj91y" }]
], uN = e("git-pull-request-arrow", lN);
const MN = [
  ["circle", { cx: "6", cy: "6", r: "3", key: "1lh9wr" }],
  ["path", { d: "M6 9v12", key: "1sc30k" }],
  ["path", { d: "m21 3-6 6", key: "16nqsk" }],
  ["path", { d: "m21 9-6-6", key: "9j17rh" }],
  ["path", { d: "M18 11.5V15", key: "65xf6f" }],
  ["circle", { cx: "18", cy: "18", r: "3", key: "1xkwt0" }]
], fN = e("git-pull-request-closed", MN);
const mN = [
  ["circle", { cx: "5", cy: "6", r: "3", key: "1qnov2" }],
  ["path", { d: "M5 9v12", key: "ih889a" }],
  ["path", { d: "m15 9-3-3 3-3", key: "1lwv8l" }],
  ["path", { d: "M12 6h5a2 2 0 0 1 2 2v3", key: "1rbwk6" }],
  ["path", { d: "M19 15v6", key: "10aioa" }],
  ["path", { d: "M22 18h-6", key: "1d5gi5" }]
], vN = e("git-pull-request-create-arrow", mN);
const gN = [
  ["circle", { cx: "6", cy: "6", r: "3", key: "1lh9wr" }],
  ["path", { d: "M6 9v12", key: "1sc30k" }],
  ["path", { d: "M13 6h3a2 2 0 0 1 2 2v3", key: "1jb6z3" }],
  ["path", { d: "M18 15v6", key: "9wciyi" }],
  ["path", { d: "M21 18h-6", key: "139f0c" }]
], _N = e("git-pull-request-create", gN);
const xN = [
  ["circle", { cx: "18", cy: "18", r: "3", key: "1xkwt0" }],
  ["circle", { cx: "6", cy: "6", r: "3", key: "1lh9wr" }],
  ["path", { d: "M18 6V5", key: "1oao2s" }],
  ["path", { d: "M18 11v-1", key: "11c8tz" }],
  ["line", { x1: "6", x2: "6", y1: "9", y2: "21", key: "rroup" }]
], bN = e("git-pull-request-draft", xN);
const wN = [
  ["circle", { cx: "18", cy: "18", r: "3", key: "1xkwt0" }],
  ["circle", { cx: "6", cy: "6", r: "3", key: "1lh9wr" }],
  ["path", { d: "M13 6h3a2 2 0 0 1 2 2v7", key: "1yeb86" }],
  ["line", { x1: "6", x2: "6", y1: "9", y2: "21", key: "rroup" }]
], NN = e("git-pull-request", wN);
const $N = [
  [
    "path",
    {
      d: "M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4",
      key: "tonef"
    }
  ],
  ["path", { d: "M9 18c-4.51 2-5-2-7-2", key: "9comsn" }]
], zN = e("github", $N);
const jN = [
  [
    "path",
    {
      d: "m22 13.29-3.33-10a.42.42 0 0 0-.14-.18.38.38 0 0 0-.22-.11.39.39 0 0 0-.23.07.42.42 0 0 0-.14.18l-2.26 6.67H8.32L6.1 3.26a.42.42 0 0 0-.1-.18.38.38 0 0 0-.26-.08.39.39 0 0 0-.23.07.42.42 0 0 0-.14.18L2 13.29a.74.74 0 0 0 .27.83L12 21l9.69-6.88a.71.71 0 0 0 .31-.83Z",
      key: "148pdi"
    }
  ]
], qN = e("gitlab", jN);
const AN = [
  [
    "path",
    {
      d: "M5.116 4.104A1 1 0 0 1 6.11 3h11.78a1 1 0 0 1 .994 1.105L17.19 20.21A2 2 0 0 1 15.2 22H8.8a2 2 0 0 1-2-1.79z",
      key: "p55z4y"
    }
  ],
  ["path", { d: "M6 12a5 5 0 0 1 6 0 5 5 0 0 0 6 0", key: "mjntcy" }]
], HN = e("glass-water", AN);
const SN = [
  ["circle", { cx: "6", cy: "15", r: "4", key: "vux9w4" }],
  ["circle", { cx: "18", cy: "15", r: "4", key: "18o8ve" }],
  ["path", { d: "M14 15a2 2 0 0 0-2-2 2 2 0 0 0-2 2", key: "1ag4bs" }],
  ["path", { d: "M2.5 13 5 7c.7-1.3 1.4-2 3-2", key: "1hm1gs" }],
  ["path", { d: "M21.5 13 19 7c-.7-1.3-1.5-2-3-2", key: "1r31ai" }]
], CN = e("glasses", SN);
const VN = [
  [
    "path",
    {
      d: "M15.686 15A14.5 14.5 0 0 1 12 22a14.5 14.5 0 0 1 0-20 10 10 0 1 0 9.542 13",
      key: "qkt0x6"
    }
  ],
  ["path", { d: "M2 12h8.5", key: "ovaggd" }],
  ["path", { d: "M20 6V4a2 2 0 1 0-4 0v2", key: "1of5e8" }],
  ["rect", { width: "8", height: "5", x: "14", y: "6", rx: "1", key: "1fmf51" }]
], RN = e("globe-lock", VN);
const EN = [
  ["path", { d: "m16 3 5 5", key: "1husv6" }],
  [
    "path",
    { d: "M2 12h20A10 10 0 1 1 12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 4-10", key: "46evmv" }
  ],
  ["path", { d: "m21 3-5 5", key: "1g5oa7" }]
], LN = e("globe-x", EN);
const PN = [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20", key: "13o1zl" }],
  ["path", { d: "M2 12h20", key: "9i4pu4" }]
], TN = e("globe", PN);
const ON = [
  ["path", { d: "M2 21V3", key: "1bzk4w" }],
  ["path", { d: "M2 5h18a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2.26", key: "1d64pi" }],
  ["path", { d: "M7 17v3a1 1 0 0 0 1 1h5a1 1 0 0 0 1-1v-3", key: "5hbqbf" }],
  ["circle", { cx: "16", cy: "11", r: "2", key: "qt15rb" }],
  ["circle", { cx: "8", cy: "11", r: "2", key: "ssideg" }]
], DN = e("gpu", ON);
const IN = [
  ["path", { d: "M12 13V2l8 4-8 4", key: "5wlwwj" }],
  ["path", { d: "M20.561 10.222a9 9 0 1 1-12.55-5.29", key: "1c0wjv" }],
  ["path", { d: "M8.002 9.997a5 5 0 1 0 8.9 2.02", key: "gb1g7m" }]
], FN = e("goal", IN);
const BN = [
  [
    "path",
    {
      d: "M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z",
      key: "j76jl0"
    }
  ],
  ["path", { d: "M22 10v6", key: "1lu8f3" }],
  ["path", { d: "M6 12.5V16a6 3 0 0 0 12 0v-3.5", key: "1r8lef" }]
], UN = e("graduation-cap", BN);
const WN = [
  ["path", { d: "M22 5V2l-5.89 5.89", key: "1eenpo" }],
  ["circle", { cx: "16.6", cy: "15.89", r: "3", key: "xjtalx" }],
  ["circle", { cx: "8.11", cy: "7.4", r: "3", key: "u2fv6i" }],
  ["circle", { cx: "12.35", cy: "11.65", r: "3", key: "i6i8g7" }],
  ["circle", { cx: "13.91", cy: "5.85", r: "3", key: "6ye0dv" }],
  ["circle", { cx: "18.15", cy: "10.09", r: "3", key: "snx9no" }],
  ["circle", { cx: "6.56", cy: "13.2", r: "3", key: "17x4xg" }],
  ["circle", { cx: "10.8", cy: "17.44", r: "3", key: "1hogw9" }],
  ["circle", { cx: "5", cy: "19", r: "3", key: "1sn6vo" }]
], ZN = e("grape", WN);
const GN = [
  [
    "path",
    {
      d: "M12 3v17a1 1 0 0 1-1 1H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v6a1 1 0 0 1-1 1H3",
      key: "11za1p"
    }
  ],
  ["path", { d: "m16 19 2 2 4-4", key: "1b14m6" }]
], XN = e("grid-2x2-check", GN);
const YN = [
  [
    "path",
    {
      d: "M12 3v17a1 1 0 0 1-1 1H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v6a1 1 0 0 1-1 1H3",
      key: "11za1p"
    }
  ],
  ["path", { d: "M16 19h6", key: "xwg31i" }],
  ["path", { d: "M19 22v-6", key: "qhmiwi" }]
], KN = e("grid-2x2-plus", YN);
const QN = [
  [
    "path",
    {
      d: "M12 3v17a1 1 0 0 1-1 1H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v6a1 1 0 0 1-1 1H3",
      key: "11za1p"
    }
  ],
  ["path", { d: "m16 16 5 5", key: "8tpb07" }],
  ["path", { d: "m16 21 5-5", key: "193jll" }]
], JN = e("grid-2x2-x", QN);
const e$ = [
  ["path", { d: "M12 3v18", key: "108xh3" }],
  ["path", { d: "M3 12h18", key: "1i2n21" }],
  ["rect", { x: "3", y: "3", width: "18", height: "18", rx: "2", key: "h1oib" }]
], t$ = e("grid-2x2", e$);
const a$ = [
  ["path", { d: "M15 3v18", key: "14nvp0" }],
  ["path", { d: "M3 12h18", key: "1i2n21" }],
  ["path", { d: "M9 3v18", key: "fh3hqa" }],
  ["rect", { x: "3", y: "3", width: "18", height: "18", rx: "2", key: "h1oib" }]
], o$ = e("grid-3x2", a$);
const n$ = [
  ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", key: "afitv7" }],
  ["path", { d: "M3 9h18", key: "1pudct" }],
  ["path", { d: "M3 15h18", key: "5xshup" }],
  ["path", { d: "M9 3v18", key: "fh3hqa" }],
  ["path", { d: "M15 3v18", key: "14nvp0" }]
], c$ = e("grid-3x3", n$);
const r$ = [
  ["circle", { cx: "12", cy: "9", r: "1", key: "124mty" }],
  ["circle", { cx: "19", cy: "9", r: "1", key: "1ruzo2" }],
  ["circle", { cx: "5", cy: "9", r: "1", key: "1a8b28" }],
  ["circle", { cx: "12", cy: "15", r: "1", key: "1e56xg" }],
  ["circle", { cx: "19", cy: "15", r: "1", key: "1a92ep" }],
  ["circle", { cx: "5", cy: "15", r: "1", key: "5r1jwy" }]
], h$ = e("grip-horizontal", r$);
const d$ = [
  ["circle", { cx: "9", cy: "12", r: "1", key: "1vctgf" }],
  ["circle", { cx: "9", cy: "5", r: "1", key: "hp0tcf" }],
  ["circle", { cx: "9", cy: "19", r: "1", key: "fkjjf6" }],
  ["circle", { cx: "15", cy: "12", r: "1", key: "1tmaij" }],
  ["circle", { cx: "15", cy: "5", r: "1", key: "19l28e" }],
  ["circle", { cx: "15", cy: "19", r: "1", key: "f4zoj3" }]
], i$ = e("grip-vertical", d$);
const s$ = [
  ["circle", { cx: "12", cy: "5", r: "1", key: "gxeob9" }],
  ["circle", { cx: "19", cy: "5", r: "1", key: "w8mnmm" }],
  ["circle", { cx: "5", cy: "5", r: "1", key: "lttvr7" }],
  ["circle", { cx: "12", cy: "12", r: "1", key: "41hilf" }],
  ["circle", { cx: "19", cy: "12", r: "1", key: "1wjl8i" }],
  ["circle", { cx: "5", cy: "12", r: "1", key: "1pcz8c" }],
  ["circle", { cx: "12", cy: "19", r: "1", key: "lyex9k" }],
  ["circle", { cx: "19", cy: "19", r: "1", key: "shf9b7" }],
  ["circle", { cx: "5", cy: "19", r: "1", key: "bfqh0e" }]
], y$ = e("grip", s$);
const p$ = [
  ["path", { d: "M3 7V5c0-1.1.9-2 2-2h2", key: "adw53z" }],
  ["path", { d: "M17 3h2c1.1 0 2 .9 2 2v2", key: "an4l38" }],
  ["path", { d: "M21 17v2c0 1.1-.9 2-2 2h-2", key: "144t0e" }],
  ["path", { d: "M7 21H5c-1.1 0-2-.9-2-2v-2", key: "rtnfgi" }],
  ["rect", { width: "7", height: "5", x: "7", y: "7", rx: "1", key: "1eyiv7" }],
  ["rect", { width: "7", height: "5", x: "10", y: "12", rx: "1", key: "1qlmkx" }]
], k$ = e("group", p$);
const l$ = [
  ["path", { d: "m11.9 12.1 4.514-4.514", key: "109xqo" }],
  [
    "path",
    {
      d: "M20.1 2.3a1 1 0 0 0-1.4 0l-1.114 1.114A2 2 0 0 0 17 4.828v1.344a2 2 0 0 1-.586 1.414A2 2 0 0 1 17.828 7h1.344a2 2 0 0 0 1.414-.586L21.7 5.3a1 1 0 0 0 0-1.4z",
      key: "txyc8t"
    }
  ],
  ["path", { d: "m6 16 2 2", key: "16qmzd" }],
  [
    "path",
    {
      d: "M8.23 9.85A3 3 0 0 1 11 8a5 5 0 0 1 5 5 3 3 0 0 1-1.85 2.77l-.92.38A2 2 0 0 0 12 18a4 4 0 0 1-4 4 6 6 0 0 1-6-6 4 4 0 0 1 4-4 2 2 0 0 0 1.85-1.23z",
      key: "1de1vg"
    }
  ]
], u$ = e("guitar", l$);
const M$ = [
  ["path", { d: "M13.144 21.144A7.274 10.445 45 1 0 2.856 10.856", key: "1k1t7q" }],
  [
    "path",
    {
      d: "M13.144 21.144A7.274 4.365 45 0 0 2.856 10.856a7.274 4.365 45 0 0 10.288 10.288",
      key: "153t1g"
    }
  ],
  [
    "path",
    {
      d: "M16.565 10.435 18.6 8.4a2.501 2.501 0 1 0 1.65-4.65 2.5 2.5 0 1 0-4.66 1.66l-2.024 2.025",
      key: "gzrt0n"
    }
  ],
  ["path", { d: "m8.5 16.5-1-1", key: "otr954" }]
], f$ = e("ham", M$);
const m$ = [
  ["path", { d: "M12 16H4a2 2 0 1 1 0-4h16a2 2 0 1 1 0 4h-4.25", key: "5dloqd" }],
  ["path", { d: "M5 12a2 2 0 0 1-2-2 9 7 0 0 1 18 0 2 2 0 0 1-2 2", key: "1vl3my" }],
  [
    "path",
    {
      d: "M5 16a2 2 0 0 0-2 2 3 3 0 0 0 3 3h12a3 3 0 0 0 3-3 2 2 0 0 0-2-2q0 0 0 0",
      key: "1us75o"
    }
  ],
  ["path", { d: "m6.67 12 6.13 4.6a2 2 0 0 0 2.8-.4l3.15-4.2", key: "qqzweh" }]
], v$ = e("hamburger", m$);
const g$ = [
  ["path", { d: "m15 12-9.373 9.373a1 1 0 0 1-3.001-3L12 9", key: "1hayfq" }],
  ["path", { d: "m18 15 4-4", key: "16gjal" }],
  [
    "path",
    {
      d: "m21.5 11.5-1.914-1.914A2 2 0 0 1 19 8.172v-.344a2 2 0 0 0-.586-1.414l-1.657-1.657A6 6 0 0 0 12.516 3H9l1.243 1.243A6 6 0 0 1 12 8.485V10l2 2h1.172a2 2 0 0 1 1.414.586L18.5 14.5",
      key: "15ts47"
    }
  ]
], _$ = e("hammer", g$);
const x$ = [
  ["path", { d: "M11 15h2a2 2 0 1 0 0-4h-3c-.6 0-1.1.2-1.4.6L3 17", key: "geh8rc" }],
  [
    "path",
    {
      d: "m7 21 1.6-1.4c.3-.4.8-.6 1.4-.6h4c1.1 0 2.1-.4 2.8-1.2l4.6-4.4a2 2 0 0 0-2.75-2.91l-4.2 3.9",
      key: "1fto5m"
    }
  ],
  ["path", { d: "m2 16 6 6", key: "1pfhp9" }],
  ["circle", { cx: "16", cy: "9", r: "2.9", key: "1n0dlu" }],
  ["circle", { cx: "6", cy: "5", r: "3", key: "151irh" }]
], b$ = e("hand-coins", x$);
const w$ = [
  [
    "path",
    {
      d: "M12.035 17.012a3 3 0 0 0-3-3l-.311-.002a.72.72 0 0 1-.505-1.229l1.195-1.195A2 2 0 0 1 10.828 11H12a2 2 0 0 0 0-4H9.243a3 3 0 0 0-2.122.879l-2.707 2.707A4.83 4.83 0 0 0 3 14a8 8 0 0 0 8 8h2a8 8 0 0 0 8-8V7a2 2 0 1 0-4 0v2a2 2 0 1 0 4 0",
      key: "1ff7rl"
    }
  ],
  ["path", { d: "M13.888 9.662A2 2 0 0 0 17 8V5A2 2 0 1 0 13 5", key: "1xmd21" }],
  ["path", { d: "M9 5A2 2 0 1 0 5 5V10", key: "f3wfjw" }],
  ["path", { d: "M9 7V4A2 2 0 1 1 13 4V7.268", key: "eaoucv" }]
], N$ = e("hand-fist", w$);
const $$ = [
  ["path", { d: "M18 11.5V9a2 2 0 0 0-2-2a2 2 0 0 0-2 2v1.4", key: "edstyy" }],
  ["path", { d: "M14 10V8a2 2 0 0 0-2-2a2 2 0 0 0-2 2v2", key: "19wdwo" }],
  ["path", { d: "M10 9.9V9a2 2 0 0 0-2-2a2 2 0 0 0-2 2v5", key: "1lugqo" }],
  ["path", { d: "M6 14a2 2 0 0 0-2-2a2 2 0 0 0-2 2", key: "1hbeus" }],
  [
    "path",
    { d: "M18 11a2 2 0 1 1 4 0v3a8 8 0 0 1-8 8h-4a8 8 0 0 1-8-8 2 2 0 1 1 4 0", key: "1etffm" }
  ]
], z$ = e("hand-grab", $$);
const j$ = [
  ["path", { d: "M11 14h2a2 2 0 0 0 0-4h-3c-.6 0-1.1.2-1.4.6L3 16", key: "1v1a37" }],
  [
    "path",
    {
      d: "m14.45 13.39 5.05-4.694C20.196 8 21 6.85 21 5.75a2.75 2.75 0 0 0-4.797-1.837.276.276 0 0 1-.406 0A2.75 2.75 0 0 0 11 5.75c0 1.2.802 2.248 1.5 2.946L16 11.95",
      key: "fhfbnt"
    }
  ],
  ["path", { d: "m2 15 6 6", key: "10dquu" }],
  [
    "path",
    {
      d: "m7 20 1.6-1.4c.3-.4.8-.6 1.4-.6h4c1.1 0 2.1-.4 2.8-1.2l4.6-4.4a1 1 0 0 0-2.75-2.91",
      key: "1x6kdw"
    }
  ]
], q$ = e("hand-heart", j$);
const A$ = [
  ["path", { d: "M11 12h2a2 2 0 1 0 0-4h-3c-.6 0-1.1.2-1.4.6L3 14", key: "1j4xps" }],
  [
    "path",
    {
      d: "m7 18 1.6-1.4c.3-.4.8-.6 1.4-.6h4c1.1 0 2.1-.4 2.8-1.2l4.6-4.4a2 2 0 0 0-2.75-2.91l-4.2 3.9",
      key: "uospg8"
    }
  ],
  ["path", { d: "m2 13 6 6", key: "16e5sb" }]
], H$ = e("hand-helping", A$);
const S$ = [
  ["path", { d: "M18 12.5V10a2 2 0 0 0-2-2a2 2 0 0 0-2 2v1.4", key: "wc6myp" }],
  ["path", { d: "M14 11V9a2 2 0 1 0-4 0v2", key: "94qvcw" }],
  ["path", { d: "M10 10.5V5a2 2 0 1 0-4 0v9", key: "m1ah89" }],
  [
    "path",
    {
      d: "m7 15-1.76-1.76a2 2 0 0 0-2.83 2.82l3.6 3.6C7.5 21.14 9.2 22 12 22h2a8 8 0 0 0 8-8V7a2 2 0 1 0-4 0v5",
      key: "t1skq1"
    }
  ]
], C$ = e("hand-metal", S$);
const V$ = [
  ["path", { d: "M12 3V2", key: "ar7q03" }],
  [
    "path",
    {
      d: "m15.4 17.4 3.2-2.8a2 2 0 1 1 2.8 2.9l-3.6 3.3c-.7.8-1.7 1.2-2.8 1.2h-4c-1.1 0-2.1-.4-2.8-1.2l-1.302-1.464A1 1 0 0 0 6.151 19H5",
      key: "n2g93r"
    }
  ],
  ["path", { d: "M2 14h12a2 2 0 0 1 0 4h-2", key: "1o2jem" }],
  ["path", { d: "M4 10h16", key: "img6z1" }],
  ["path", { d: "M5 10a7 7 0 0 1 14 0", key: "1ega1o" }],
  ["path", { d: "M5 14v6a1 1 0 0 1-1 1H2", key: "1hescx" }]
], R$ = e("hand-platter", V$);
const E$ = [
  ["path", { d: "M18 11V6a2 2 0 0 0-2-2a2 2 0 0 0-2 2", key: "1fvzgz" }],
  ["path", { d: "M14 10V4a2 2 0 0 0-2-2a2 2 0 0 0-2 2v2", key: "1kc0my" }],
  ["path", { d: "M10 10.5V6a2 2 0 0 0-2-2a2 2 0 0 0-2 2v8", key: "10h0bg" }],
  [
    "path",
    {
      d: "M18 8a2 2 0 1 1 4 0v6a8 8 0 0 1-8 8h-2c-2.8 0-4.5-.86-5.99-2.34l-3.6-3.6a2 2 0 0 1 2.83-2.82L7 15",
      key: "1s1gnw"
    }
  ]
], L$ = e("hand", E$);
const P$ = [
  [
    "path",
    {
      d: "M2.048 18.566A2 2 0 0 0 4 21h16a2 2 0 0 0 1.952-2.434l-2-9A2 2 0 0 0 18 8H6a2 2 0 0 0-1.952 1.566z",
      key: "1qbui5"
    }
  ],
  ["path", { d: "M8 11V6a4 4 0 0 1 8 0v5", key: "tcht90" }]
], T$ = e("handbag", P$);
const O$ = [
  ["path", { d: "m11 17 2 2a1 1 0 1 0 3-3", key: "efffak" }],
  [
    "path",
    {
      d: "m14 14 2.5 2.5a1 1 0 1 0 3-3l-3.88-3.88a3 3 0 0 0-4.24 0l-.88.88a1 1 0 1 1-3-3l2.81-2.81a5.79 5.79 0 0 1 7.06-.87l.47.28a2 2 0 0 0 1.42.25L21 4",
      key: "9pr0kb"
    }
  ],
  ["path", { d: "m21 3 1 11h-2", key: "1tisrp" }],
  ["path", { d: "M3 3 2 14l6.5 6.5a1 1 0 1 0 3-3", key: "1uvwmv" }],
  ["path", { d: "M3 4h8", key: "1ep09j" }]
], D$ = e("handshake", O$);
const I$ = [
  ["path", { d: "M12 2v8", key: "1q4o3n" }],
  ["path", { d: "m16 6-4 4-4-4", key: "6wukr" }],
  ["rect", { width: "20", height: "8", x: "2", y: "14", rx: "2", key: "w68u3i" }],
  ["path", { d: "M6 18h.01", key: "uhywen" }],
  ["path", { d: "M10 18h.01", key: "h775k" }]
], F$ = e("hard-drive-download", I$);
const B$ = [
  ["path", { d: "m16 6-4-4-4 4", key: "13yo43" }],
  ["path", { d: "M12 2v8", key: "1q4o3n" }],
  ["rect", { width: "20", height: "8", x: "2", y: "14", rx: "2", key: "w68u3i" }],
  ["path", { d: "M6 18h.01", key: "uhywen" }],
  ["path", { d: "M10 18h.01", key: "h775k" }]
], U$ = e("hard-drive-upload", B$);
const W$ = [
  ["path", { d: "M10 10V5a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v5", key: "1p9q5i" }],
  ["path", { d: "M14 6a6 6 0 0 1 6 6v3", key: "1hnv84" }],
  ["path", { d: "M4 15v-3a6 6 0 0 1 6-6", key: "9ciidu" }],
  ["rect", { x: "2", y: "15", width: "20", height: "4", rx: "1", key: "g3x8cw" }]
], Z$ = e("hard-hat", W$);
const G$ = [
  ["line", { x1: "22", x2: "2", y1: "12", y2: "12", key: "1y58io" }],
  [
    "path",
    {
      d: "M5.45 5.11 2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z",
      key: "oot6mr"
    }
  ],
  ["line", { x1: "6", x2: "6.01", y1: "16", y2: "16", key: "sgf278" }],
  ["line", { x1: "10", x2: "10.01", y1: "16", y2: "16", key: "1l4acy" }]
], X$ = e("hard-drive", G$);
const Y$ = [
  ["line", { x1: "4", x2: "20", y1: "9", y2: "9", key: "4lhtct" }],
  ["line", { x1: "4", x2: "20", y1: "15", y2: "15", key: "vyu0kd" }],
  ["line", { x1: "10", x2: "8", y1: "3", y2: "21", key: "1ggp8o" }],
  ["line", { x1: "16", x2: "14", y1: "3", y2: "21", key: "weycgp" }]
], K$ = e("hash", Y$);
const Q$ = [
  ["path", { d: "M14 18a2 2 0 0 0-4 0", key: "1v8fkw" }],
  [
    "path",
    {
      d: "m19 11-2.11-6.657a2 2 0 0 0-2.752-1.148l-1.276.61A2 2 0 0 1 12 4H8.5a2 2 0 0 0-1.925 1.456L5 11",
      key: "1fkr7p"
    }
  ],
  ["path", { d: "M2 11h20", key: "3eubbj" }],
  ["circle", { cx: "17", cy: "18", r: "3", key: "82mm0e" }],
  ["circle", { cx: "7", cy: "18", r: "3", key: "lvkj7j" }]
], J$ = e("hat-glasses", Q$);
const ez = [
  ["path", { d: "m5.2 6.2 1.4 1.4", key: "17imol" }],
  ["path", { d: "M2 13h2", key: "13gyu8" }],
  ["path", { d: "M20 13h2", key: "16rner" }],
  ["path", { d: "m17.4 7.6 1.4-1.4", key: "t4xlah" }],
  ["path", { d: "M22 17H2", key: "1gtaj3" }],
  ["path", { d: "M22 21H2", key: "1gy6en" }],
  ["path", { d: "M16 13a4 4 0 0 0-8 0", key: "1dyczq" }],
  ["path", { d: "M12 5V2.5", key: "1vytko" }]
], tz = e("haze", ez);
const az = [
  ["path", { d: "M10 12H6", key: "15f2ro" }],
  ["path", { d: "M10 15V9", key: "1lckn7" }],
  [
    "path",
    {
      d: "M14 14.5a.5.5 0 0 0 .5.5h1a2.5 2.5 0 0 0 2.5-2.5v-1A2.5 2.5 0 0 0 15.5 9h-1a.5.5 0 0 0-.5.5z",
      key: "b3f847"
    }
  ],
  ["path", { d: "M6 15V9", key: "12stmj" }],
  ["rect", { x: "2", y: "5", width: "20", height: "14", rx: "2", key: "qneu4z" }]
], oz = e("hd", az);
const nz = [
  [
    "path",
    {
      d: "M22 9a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1h1l2 2h12l2-2h1a1 1 0 0 0 1-1Z",
      key: "2128wb"
    }
  ],
  ["path", { d: "M7.5 12h9", key: "1t0ckc" }]
], cz = e("hdmi-port", nz);
const rz = [
  ["path", { d: "M4 12h8", key: "17cfdx" }],
  ["path", { d: "M4 18V6", key: "1rz3zl" }],
  ["path", { d: "M12 18V6", key: "zqpxq5" }],
  ["path", { d: "m17 12 3-2v8", key: "1hhhft" }]
], hz = e("heading-1", rz);
const dz = [
  ["path", { d: "M4 12h8", key: "17cfdx" }],
  ["path", { d: "M4 18V6", key: "1rz3zl" }],
  ["path", { d: "M12 18V6", key: "zqpxq5" }],
  ["path", { d: "M21 18h-4c0-4 4-3 4-6 0-1.5-2-2.5-4-1", key: "9jr5yi" }]
], iz = e("heading-2", dz);
const sz = [
  ["path", { d: "M4 12h8", key: "17cfdx" }],
  ["path", { d: "M4 18V6", key: "1rz3zl" }],
  ["path", { d: "M12 18V6", key: "zqpxq5" }],
  ["path", { d: "M17.5 10.5c1.7-1 3.5 0 3.5 1.5a2 2 0 0 1-2 2", key: "68ncm8" }],
  ["path", { d: "M17 17.5c2 1.5 4 .3 4-1.5a2 2 0 0 0-2-2", key: "1ejuhz" }]
], yz = e("heading-3", sz);
const pz = [
  ["path", { d: "M12 18V6", key: "zqpxq5" }],
  ["path", { d: "M17 10v3a1 1 0 0 0 1 1h3", key: "tj5zdr" }],
  ["path", { d: "M21 10v8", key: "1kdml4" }],
  ["path", { d: "M4 12h8", key: "17cfdx" }],
  ["path", { d: "M4 18V6", key: "1rz3zl" }]
], kz = e("heading-4", pz);
const lz = [
  ["path", { d: "M4 12h8", key: "17cfdx" }],
  ["path", { d: "M4 18V6", key: "1rz3zl" }],
  ["path", { d: "M12 18V6", key: "zqpxq5" }],
  ["path", { d: "M17 13v-3h4", key: "1nvgqp" }],
  [
    "path",
    { d: "M17 17.7c.4.2.8.3 1.3.3 1.5 0 2.7-1.1 2.7-2.5S19.8 13 18.3 13H17", key: "2nebdn" }
  ]
], uz = e("heading-5", lz);
const Mz = [
  ["path", { d: "M4 12h8", key: "17cfdx" }],
  ["path", { d: "M4 18V6", key: "1rz3zl" }],
  ["path", { d: "M12 18V6", key: "zqpxq5" }],
  ["circle", { cx: "19", cy: "16", r: "2", key: "15mx69" }],
  ["path", { d: "M20 10c-2 2-3 3.5-3 6", key: "f35dl0" }]
], fz = e("heading-6", Mz);
const mz = [
  ["path", { d: "M6 12h12", key: "8npq4p" }],
  ["path", { d: "M6 20V4", key: "1w1bmo" }],
  ["path", { d: "M18 20V4", key: "o2hl4u" }]
], vz = e("heading", mz);
const gz = [
  ["path", { d: "M21 14h-1.343", key: "1jdnxi" }],
  ["path", { d: "M9.128 3.47A9 9 0 0 1 21 12v3.343", key: "6kipu2" }],
  ["path", { d: "m2 2 20 20", key: "1ooewy" }],
  ["path", { d: "M20.414 20.414A2 2 0 0 1 19 21h-1a2 2 0 0 1-2-2v-3", key: "9x50f4" }],
  [
    "path",
    {
      d: "M3 14h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-7a9 9 0 0 1 2.636-6.364",
      key: "1bkxnm"
    }
  ]
], _z = e("headphone-off", gz);
const xz = [
  [
    "path",
    {
      d: "M3 14h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-7a9 9 0 0 1 18 0v7a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3",
      key: "1xhozi"
    }
  ]
], bz = e("headphones", xz);
const wz = [
  [
    "path",
    {
      d: "M3 11h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-5Zm0 0a9 9 0 1 1 18 0m0 0v5a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3Z",
      key: "12oyoe"
    }
  ],
  ["path", { d: "M21 16v2a4 4 0 0 1-4 4h-5", key: "1x7m43" }]
], Nz = e("headset", wz);
const $z = [
  [
    "path",
    {
      d: "M12.409 5.824c-.702.792-1.15 1.496-1.415 2.166l2.153 2.156a.5.5 0 0 1 0 .707l-2.293 2.293a.5.5 0 0 0 0 .707L12 15",
      key: "idzbju"
    }
  ],
  [
    "path",
    {
      d: "M13.508 20.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5a5.5 5.5 0 0 1 9.591-3.677.6.6 0 0 0 .818.001A5.5 5.5 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5z",
      key: "1su70f"
    }
  ]
], zz = e("heart-crack", $z);
const jz = [
  [
    "path",
    {
      d: "M19.414 14.414C21 12.828 22 11.5 22 9.5a5.5 5.5 0 0 0-9.591-3.676.6.6 0 0 1-.818.001A5.5 5.5 0 0 0 2 9.5c0 2.3 1.5 4 3 5.5l5.535 5.362a2 2 0 0 0 2.879.052 2.12 2.12 0 0 0-.004-3 2.124 2.124 0 1 0 3-3 2.124 2.124 0 0 0 3.004 0 2 2 0 0 0 0-2.828l-1.881-1.882a2.41 2.41 0 0 0-3.409 0l-1.71 1.71a2 2 0 0 1-2.828 0 2 2 0 0 1 0-2.828l2.823-2.762",
      key: "17lmqv"
    }
  ]
], qz = e("heart-handshake", jz);
const Az = [
  [
    "path",
    {
      d: "m14.876 18.99-1.368 1.323a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5a5.2 5.2 0 0 1-.244 1.572",
      key: "15yztm"
    }
  ],
  ["path", { d: "M15 15h6", key: "1u4692" }]
], Hz = e("heart-minus", Az);
const Sz = [
  [
    "path",
    {
      d: "M10.5 4.893a5.5 5.5 0 0 1 1.091.931.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 1.872-1.002 3.356-2.187 4.655",
      key: "1inpfl"
    }
  ],
  [
    "path",
    {
      d: "m16.967 16.967-3.459 3.346a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5a5.5 5.5 0 0 1 2.747-4.761",
      key: "vbc6x7"
    }
  ],
  ["path", { d: "m2 2 20 20", key: "1ooewy" }]
], Cz = e("heart-off", Sz);
const Vz = [
  [
    "path",
    {
      d: "m14.479 19.374-.971.939a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5a5.2 5.2 0 0 1-.219 1.49",
      key: "wg5jx"
    }
  ],
  ["path", { d: "M15 15h6", key: "1u4692" }],
  ["path", { d: "M18 12v6", key: "1houu1" }]
], Rz = e("heart-plus", Vz);
const Ez = [
  [
    "path",
    {
      d: "M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5",
      key: "mvr1a0"
    }
  ],
  ["path", { d: "M3.22 13H9.5l.5-1 2 4.5 2-7 1.5 3.5h5.27", key: "auskq0" }]
], Lz = e("heart-pulse", Ez);
const Pz = [
  [
    "path",
    {
      d: "M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5",
      key: "mvr1a0"
    }
  ]
], Tz = e("heart", Pz);
const Oz = [
  ["path", { d: "M11 8c2-3-2-3 0-6", key: "1ldv5m" }],
  ["path", { d: "M15.5 8c2-3-2-3 0-6", key: "1otqoz" }],
  ["path", { d: "M6 10h.01", key: "1lbq93" }],
  ["path", { d: "M6 14h.01", key: "zudwn7" }],
  ["path", { d: "M10 16v-4", key: "1c25yv" }],
  ["path", { d: "M14 16v-4", key: "1dkbt8" }],
  ["path", { d: "M18 16v-4", key: "1yg9me" }],
  [
    "path",
    { d: "M20 6a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h3", key: "1ubg90" }
  ],
  ["path", { d: "M5 20v2", key: "1abpe8" }],
  ["path", { d: "M19 20v2", key: "kqn6ft" }]
], Dz = e("heater", Oz);
const Iz = [
  ["path", { d: "M11 17v4", key: "14wq8k" }],
  ["path", { d: "M14 3v8a2 2 0 0 0 2 2h5.865", key: "12oo5h" }],
  ["path", { d: "M17 17v4", key: "hdt4hh" }],
  [
    "path",
    { d: "M18 17a4 4 0 0 0 4-4 8 6 0 0 0-8-6 6 5 0 0 0-6 5v3a2 2 0 0 0 2 2z", key: "yynif" }
  ],
  ["path", { d: "M2 10v5", key: "sa5akn" }],
  ["path", { d: "M6 3h16", key: "27qw71" }],
  ["path", { d: "M7 21h14", key: "1ugz0u" }],
  ["path", { d: "M8 13H2", key: "1thz1o" }]
], Fz = e("helicopter", Iz);
const Bz = [
  [
    "path",
    {
      d: "M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z",
      key: "yt0hxn"
    }
  ]
], Uz = e("hexagon", Bz);
const Wz = [
  ["path", { d: "m9 11-6 6v3h9l3-3", key: "1a3l36" }],
  ["path", { d: "m22 12-4.6 4.6a2 2 0 0 1-2.8 0l-5.2-5.2a2 2 0 0 1 0-2.8L14 4", key: "14a9rk" }]
], Zz = e("highlighter", Wz);
const Gz = [
  ["path", { d: "M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8", key: "1357e3" }],
  ["path", { d: "M3 3v5h5", key: "1xhq8a" }],
  ["path", { d: "M12 7v5l4 2", key: "1fdv2h" }]
], Xz = e("history", Gz);
const Yz = [
  ["path", { d: "M10.82 16.12c1.69.6 3.91.79 5.18.85.28.01.53-.09.7-.27", key: "qyzcap" }],
  [
    "path",
    {
      d: "M11.14 20.57c.52.24 2.44 1.12 4.08 1.37.46.06.86-.25.9-.71.12-1.52-.3-3.43-.5-4.28",
      key: "y078lb"
    }
  ],
  ["path", { d: "M16.13 21.05c1.65.63 3.68.84 4.87.91a.9.9 0 0 0 .7-.26", key: "1utre3" }],
  [
    "path",
    {
      d: "M17.99 5.52a20.83 20.83 0 0 1 3.15 4.5.8.8 0 0 1-.68 1.13c-1.17.1-2.5.02-3.9-.25",
      key: "17o9hm"
    }
  ],
  ["path", { d: "M20.57 11.14c.24.52 1.12 2.44 1.37 4.08.04.3-.08.59-.31.75", key: "1d1n4p" }],
  [
    "path",
    {
      d: "M4.93 4.93a10 10 0 0 0-.67 13.4c.35.43.96.4 1.17-.12.69-1.71 1.07-5.07 1.07-6.71 1.34.45 3.1.9 4.88.62a.85.85 0 0 0 .48-.24",
      key: "9uv3tt"
    }
  ],
  [
    "path",
    {
      d: "M5.52 17.99c1.05.95 2.91 2.42 4.5 3.15a.8.8 0 0 0 1.13-.68c.2-2.34-.33-5.3-1.57-8.28",
      key: "1292wz"
    }
  ],
  [
    "path",
    {
      d: "M8.35 2.68a10 10 0 0 1 9.98 1.58c.43.35.4.96-.12 1.17-1.5.6-4.3.98-6.07 1.05",
      key: "7ozu9p"
    }
  ],
  ["path", { d: "m2 2 20 20", key: "1ooewy" }]
], Kz = e("hop-off", Yz);
const Qz = [
  [
    "path",
    {
      d: "M10.82 16.12c1.69.6 3.91.79 5.18.85.55.03 1-.42.97-.97-.06-1.27-.26-3.5-.85-5.18",
      key: "18lxf1"
    }
  ],
  [
    "path",
    {
      d: "M11.5 6.5c1.64 0 5-.38 6.71-1.07.52-.2.55-.82.12-1.17A10 10 0 0 0 4.26 18.33c.35.43.96.4 1.17-.12.69-1.71 1.07-5.07 1.07-6.71 1.34.45 3.1.9 4.88.62a.88.88 0 0 0 .73-.74c.3-2.14-.15-3.5-.61-4.88",
      key: "vtfxrw"
    }
  ],
  [
    "path",
    {
      d: "M15.62 16.95c.2.85.62 2.76.5 4.28a.77.77 0 0 1-.9.7 16.64 16.64 0 0 1-4.08-1.36",
      key: "13hl71"
    }
  ],
  [
    "path",
    {
      d: "M16.13 21.05c1.65.63 3.68.84 4.87.91a.9.9 0 0 0 .96-.96 17.68 17.68 0 0 0-.9-4.87",
      key: "1sl8oj"
    }
  ],
  [
    "path",
    {
      d: "M16.94 15.62c.86.2 2.77.62 4.29.5a.77.77 0 0 0 .7-.9 16.64 16.64 0 0 0-1.36-4.08",
      key: "19c6kt"
    }
  ],
  [
    "path",
    {
      d: "M17.99 5.52a20.82 20.82 0 0 1 3.15 4.5.8.8 0 0 1-.68 1.13c-2.33.2-5.3-.32-8.27-1.57",
      key: "85ghs3"
    }
  ],
  ["path", { d: "M4.93 4.93 3 3a.7.7 0 0 1 0-1", key: "x087yj" }],
  [
    "path",
    {
      d: "M9.58 12.18c1.24 2.98 1.77 5.95 1.57 8.28a.8.8 0 0 1-1.13.68 20.82 20.82 0 0 1-4.5-3.15",
      key: "11xdqo"
    }
  ]
], Jz = e("hop", Qz);
const ej = [
  ["path", { d: "M12 7v4", key: "xawao1" }],
  ["path", { d: "M14 21v-3a2 2 0 0 0-4 0v3", key: "1rgiei" }],
  ["path", { d: "M14 9h-4", key: "1w2s2s" }],
  [
    "path",
    {
      d: "M18 11h2a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-9a2 2 0 0 1 2-2h2",
      key: "1tthqt"
    }
  ],
  ["path", { d: "M18 21V5a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v16", key: "dw4p4i" }]
], tj = e("hospital", ej);
const aj = [
  ["path", { d: "M10 22v-6.57", key: "1wmca3" }],
  ["path", { d: "M12 11h.01", key: "z322tv" }],
  ["path", { d: "M12 7h.01", key: "1ivr5q" }],
  ["path", { d: "M14 15.43V22", key: "1q2vjd" }],
  ["path", { d: "M15 16a5 5 0 0 0-6 0", key: "o9wqvi" }],
  ["path", { d: "M16 11h.01", key: "xkw8gn" }],
  ["path", { d: "M16 7h.01", key: "1kdx03" }],
  ["path", { d: "M8 11h.01", key: "1dfujw" }],
  ["path", { d: "M8 7h.01", key: "1vti4s" }],
  ["rect", { x: "4", y: "2", width: "16", height: "20", rx: "2", key: "1uxh74" }]
], oj = e("hotel", aj);
const nj = [
  ["path", { d: "M5 22h14", key: "ehvnwv" }],
  ["path", { d: "M5 2h14", key: "pdyrp9" }],
  [
    "path",
    {
      d: "M17 22v-4.172a2 2 0 0 0-.586-1.414L12 12l-4.414 4.414A2 2 0 0 0 7 17.828V22",
      key: "1d314k"
    }
  ],
  [
    "path",
    { d: "M7 2v4.172a2 2 0 0 0 .586 1.414L12 12l4.414-4.414A2 2 0 0 0 17 6.172V2", key: "1vvvr6" }
  ]
], cj = e("hourglass", nj);
const rj = [
  [
    "path",
    {
      d: "M8.62 13.8A2.25 2.25 0 1 1 12 10.836a2.25 2.25 0 1 1 3.38 2.966l-2.626 2.856a.998.998 0 0 1-1.507 0z",
      key: "n9s7kx"
    }
  ],
  [
    "path",
    {
      d: "M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z",
      key: "r6nss1"
    }
  ]
], hj = e("house-heart", rj);
const dj = [
  ["path", { d: "M10 12V8.964", key: "1vll13" }],
  ["path", { d: "M14 12V8.964", key: "1x3qvg" }],
  [
    "path",
    { d: "M15 12a1 1 0 0 1 1 1v2a2 2 0 0 1-2 2h-4a2 2 0 0 1-2-2v-2a1 1 0 0 1 1-1z", key: "ppykja" }
  ],
  [
    "path",
    {
      d: "M8.5 21H5a2 2 0 0 1-2-2v-9a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2h-5a2 2 0 0 1-2-2v-2",
      key: "365xoy"
    }
  ]
], ij = e("house-plug", dj);
const sj = [
  [
    "path",
    {
      d: "M12.35 21H5a2 2 0 0 1-2-2v-9a2 2 0 0 1 .71-1.53l7-6a2 2 0 0 1 2.58 0l7 6A2 2 0 0 1 21 10v2.35",
      key: "8ek5ge"
    }
  ],
  ["path", { d: "M14.8 12.4A1 1 0 0 0 14 12h-4a1 1 0 0 0-1 1v8", key: "1rbg29" }],
  ["path", { d: "M15 18h6", key: "3b3c90" }],
  ["path", { d: "M18 15v6", key: "9wciyi" }]
], yj = e("house-plus", sj);
const pj = [
  ["path", { d: "M9.5 13.866a4 4 0 0 1 5 .01", key: "1wy54i" }],
  ["path", { d: "M12 17h.01", key: "p32p05" }],
  [
    "path",
    {
      d: "M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z",
      key: "r6nss1"
    }
  ],
  ["path", { d: "M7 10.754a8 8 0 0 1 10 0", key: "exoy2g" }]
], kj = e("house-wifi", pj);
const lj = [
  ["path", { d: "M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8", key: "5wwlr5" }],
  [
    "path",
    {
      d: "M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z",
      key: "r6nss1"
    }
  ]
], uj = e("house", lj);
const Mj = [
  [
    "path",
    {
      d: "M12 17c5 0 8-2.69 8-6H4c0 3.31 3 6 8 6m-4 4h8m-4-3v3M5.14 11a3.5 3.5 0 1 1 6.71 0",
      key: "1uxfcu"
    }
  ],
  ["path", { d: "M12.14 11a3.5 3.5 0 1 1 6.71 0", key: "4k3m1s" }],
  ["path", { d: "M15.5 6.5a3.5 3.5 0 1 0-7 0", key: "zmuahr" }]
], fj = e("ice-cream-bowl", Mj);
const mj = [
  ["path", { d: "m7 11 4.08 10.35a1 1 0 0 0 1.84 0L17 11", key: "1v6356" }],
  ["path", { d: "M17 7A5 5 0 0 0 7 7", key: "151p3v" }],
  ["path", { d: "M17 7a2 2 0 0 1 0 4H7a2 2 0 0 1 0-4", key: "1sdaij" }]
], vj = e("ice-cream-cone", mj);
const gj = [
  ["path", { d: "M13.5 8h-3", key: "xvov4w" }],
  [
    "path",
    {
      d: "m15 2-1 2h3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h3",
      key: "16uttc"
    }
  ],
  ["path", { d: "M16.899 22A5 5 0 0 0 7.1 22", key: "1d0ppr" }],
  ["path", { d: "m9 2 3 6", key: "1o7bd9" }],
  ["circle", { cx: "12", cy: "15", r: "3", key: "g36mzq" }]
], _j = e("id-card-lanyard", gj);
const xj = [
  ["path", { d: "M16 10h2", key: "8sgtl7" }],
  ["path", { d: "M16 14h2", key: "epxaof" }],
  ["path", { d: "M6.17 15a3 3 0 0 1 5.66 0", key: "n6f512" }],
  ["circle", { cx: "9", cy: "11", r: "2", key: "yxgjnd" }],
  ["rect", { x: "2", y: "5", width: "20", height: "14", rx: "2", key: "qneu4z" }]
], bj = e("id-card", xj);
const wj = [
  [
    "path",
    {
      d: "M10.3 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v10l-3.1-3.1a2 2 0 0 0-2.814.014L6 21",
      key: "9csbqa"
    }
  ],
  ["path", { d: "m14 19 3 3v-5.5", key: "9ldu5r" }],
  ["path", { d: "m17 22 3-3", key: "1nkfve" }],
  ["circle", { cx: "9", cy: "9", r: "2", key: "af1f0g" }]
], Nj = e("image-down", wj);
const $j = [
  ["path", { d: "M21 9v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h7", key: "m87ecr" }],
  ["line", { x1: "16", x2: "22", y1: "5", y2: "5", key: "ez7e4s" }],
  ["circle", { cx: "9", cy: "9", r: "2", key: "af1f0g" }],
  ["path", { d: "m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21", key: "1xmnt7" }]
], zj = e("image-minus", $j);
const jj = [
  ["line", { x1: "2", x2: "22", y1: "2", y2: "22", key: "a6p6uj" }],
  ["path", { d: "M10.41 10.41a2 2 0 1 1-2.83-2.83", key: "1bzlo9" }],
  ["line", { x1: "13.5", x2: "6", y1: "13.5", y2: "21", key: "1q0aeu" }],
  ["line", { x1: "18", x2: "21", y1: "12", y2: "15", key: "5mozeu" }],
  [
    "path",
    {
      d: "M3.59 3.59A1.99 1.99 0 0 0 3 5v14a2 2 0 0 0 2 2h14c.55 0 1.052-.22 1.41-.59",
      key: "mmje98"
    }
  ],
  ["path", { d: "M21 15V5a2 2 0 0 0-2-2H9", key: "43el77" }]
], qj = e("image-off", jj);
const Aj = [
  [
    "path",
    {
      d: "M15 15.003a1 1 0 0 1 1.517-.859l4.997 2.997a1 1 0 0 1 0 1.718l-4.997 2.997a1 1 0 0 1-1.517-.86z",
      key: "nrt1m3"
    }
  ],
  ["path", { d: "M21 12.17V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h6", key: "99hgts" }],
  ["path", { d: "m6 21 5-5", key: "1wyjai" }],
  ["circle", { cx: "9", cy: "9", r: "2", key: "af1f0g" }]
], Hj = e("image-play", Aj);
const Sj = [
  ["path", { d: "M16 5h6", key: "1vod17" }],
  ["path", { d: "M19 2v6", key: "4bpg5p" }],
  ["path", { d: "M21 11.5V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h7.5", key: "1ue2ih" }],
  ["path", { d: "m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21", key: "1xmnt7" }],
  ["circle", { cx: "9", cy: "9", r: "2", key: "af1f0g" }]
], Cj = e("image-plus", Sj);
const Vj = [
  [
    "path",
    {
      d: "M10.3 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v10l-3.1-3.1a2 2 0 0 0-2.814.014L6 21",
      key: "9csbqa"
    }
  ],
  ["path", { d: "m14 19.5 3-3 3 3", key: "9vmjn0" }],
  ["path", { d: "M17 22v-5.5", key: "1aa6fl" }],
  ["circle", { cx: "9", cy: "9", r: "2", key: "af1f0g" }]
], Rj = e("image-up", Vj);
const Ej = [
  ["path", { d: "M16 3h5v5", key: "1806ms" }],
  ["path", { d: "M17 21h2a2 2 0 0 0 2-2", key: "130fy9" }],
  ["path", { d: "M21 12v3", key: "1wzk3p" }],
  ["path", { d: "m21 3-5 5", key: "1g5oa7" }],
  ["path", { d: "M3 7V5a2 2 0 0 1 2-2", key: "kk3yz1" }],
  ["path", { d: "m5 21 4.144-4.144a1.21 1.21 0 0 1 1.712 0L13 19", key: "fyekpt" }],
  ["path", { d: "M9 3h3", key: "d52fa" }],
  ["rect", { x: "3", y: "11", width: "10", height: "10", rx: "1", key: "1wpmix" }]
], Lj = e("image-upscale", Ej);
const Pj = [
  ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", ry: "2", key: "1m3agn" }],
  ["circle", { cx: "9", cy: "9", r: "2", key: "af1f0g" }],
  ["path", { d: "m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21", key: "1xmnt7" }]
], Tj = e("image", Pj);
const Oj = [
  ["path", { d: "m22 11-1.296-1.296a2.4 2.4 0 0 0-3.408 0L11 16", key: "9kzy35" }],
  ["path", { d: "M4 8a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2", key: "1t0f0t" }],
  ["circle", { cx: "13", cy: "7", r: "1", fill: "currentColor", key: "1obus6" }],
  ["rect", { x: "8", y: "2", width: "14", height: "14", rx: "2", key: "1gvhby" }]
], Dj = e("images", Oj);
const Ij = [
  ["path", { d: "M12 3v12", key: "1x0j5s" }],
  ["path", { d: "m8 11 4 4 4-4", key: "1dohi6" }],
  [
    "path",
    {
      d: "M8 5H4a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-4",
      key: "1ywtjm"
    }
  ]
], Fj = e("import", Ij);
const Bj = [
  ["polyline", { points: "22 12 16 12 14 15 10 15 8 12 2 12", key: "o97t9d" }],
  [
    "path",
    {
      d: "M5.45 5.11 2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z",
      key: "oot6mr"
    }
  ]
], Uj = e("inbox", Bj);
const Wj = [
  ["path", { d: "M6 3h12", key: "ggurg9" }],
  ["path", { d: "M6 8h12", key: "6g4wlu" }],
  ["path", { d: "m6 13 8.5 8", key: "u1kupk" }],
  ["path", { d: "M6 13h3", key: "wdp6ag" }],
  ["path", { d: "M9 13c6.667 0 6.667-10 0-10", key: "1nkvk2" }]
], Zj = e("indian-rupee", Wj);
const Gj = [
  ["path", { d: "M6 16c5 0 7-8 12-8a4 4 0 0 1 0 8c-5 0-7-8-12-8a4 4 0 1 0 0 8", key: "18ogeb" }]
], Xj = e("infinity", Gj);
const Yj = [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "M12 16v-4", key: "1dtifu" }],
  ["path", { d: "M12 8h.01", key: "e9boi3" }]
], Kj = e("info", Yj);
const Qj = [
  ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", key: "afitv7" }],
  ["path", { d: "M7 7h.01", key: "7u93v4" }],
  ["path", { d: "M17 7h.01", key: "14a9sn" }],
  ["path", { d: "M7 17h.01", key: "19xn7k" }],
  ["path", { d: "M17 17h.01", key: "1sd3ek" }]
], Jj = e("inspection-panel", Qj);
const eq = [
  ["rect", { width: "20", height: "20", x: "2", y: "2", rx: "5", ry: "5", key: "2e1cvw" }],
  ["path", { d: "M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z", key: "9exkf1" }],
  ["line", { x1: "17.5", x2: "17.51", y1: "6.5", y2: "6.5", key: "r4j83e" }]
], tq = e("instagram", eq);
const aq = [
  ["line", { x1: "19", x2: "10", y1: "4", y2: "4", key: "15jd3p" }],
  ["line", { x1: "14", x2: "5", y1: "20", y2: "20", key: "bu0au3" }],
  ["line", { x1: "15", x2: "9", y1: "4", y2: "20", key: "uljnxc" }]
], oq = e("italic", aq);
const nq = [
  ["path", { d: "m16 14 4 4-4 4", key: "hkso8o" }],
  ["path", { d: "M20 10a8 8 0 1 0-8 8h8", key: "1bik7b" }]
], cq = e("iteration-ccw", nq);
const rq = [
  ["path", { d: "M4 10a8 8 0 1 1 8 8H4", key: "svv66n" }],
  ["path", { d: "m8 22-4-4 4-4", key: "6g7gki" }]
], hq = e("iteration-cw", rq);
const dq = [
  ["path", { d: "M12 9.5V21m0-11.5L6 3m6 6.5L18 3", key: "2ej80x" }],
  ["path", { d: "M6 15h12", key: "1hwgt5" }],
  ["path", { d: "M6 11h12", key: "wf4gp6" }]
], iq = e("japanese-yen", dq);
const sq = [
  [
    "path",
    {
      d: "M21 17a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v2a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-2Z",
      key: "jg2n2t"
    }
  ],
  ["path", { d: "M6 15v-2", key: "gd6mvg" }],
  ["path", { d: "M12 15V9", key: "8c7uyn" }],
  ["circle", { cx: "12", cy: "6", r: "3", key: "1gm2ql" }]
], yq = e("joystick", sq);
const pq = [
  ["path", { d: "M5 3v14", key: "9nsxs2" }],
  ["path", { d: "M12 3v8", key: "1h2ygw" }],
  ["path", { d: "M19 3v18", key: "1sk56x" }]
], kq = e("kanban", pq);
const lq = [
  ["path", { d: "M18 17a1 1 0 0 0-1 1v1a2 2 0 1 0 2-2z", key: "skzb1g" }],
  [
    "path",
    {
      d: "M20.97 3.61a.45.45 0 0 0-.58-.58C10.2 6.6 6.6 10.2 3.03 20.39a.45.45 0 0 0 .58.58C13.8 17.4 17.4 13.8 20.97 3.61",
      key: "cv9jm7"
    }
  ],
  ["path", { d: "m6.707 6.707 10.586 10.586", key: "d2l993" }],
  ["path", { d: "M7 5a2 2 0 1 0-2 2h1a1 1 0 0 0 1-1z", key: "i0et4n" }]
], uq = e("kayak", lq);
const Mq = [
  [
    "path",
    {
      d: "M2.586 17.414A2 2 0 0 0 2 18.828V21a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h1a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h.172a2 2 0 0 0 1.414-.586l.814-.814a6.5 6.5 0 1 0-4-4z",
      key: "1s6t7t"
    }
  ],
  ["circle", { cx: "16.5", cy: "7.5", r: ".5", fill: "currentColor", key: "w0ekpg" }]
], fq = e("key-round", Mq);
const mq = [
  [
    "path",
    {
      d: "M12.4 2.7a2.5 2.5 0 0 1 3.4 0l5.5 5.5a2.5 2.5 0 0 1 0 3.4l-3.7 3.7a2.5 2.5 0 0 1-3.4 0L8.7 9.8a2.5 2.5 0 0 1 0-3.4z",
      key: "165ttr"
    }
  ],
  ["path", { d: "m14 7 3 3", key: "1r5n42" }],
  [
    "path",
    {
      d: "m9.4 10.6-6.814 6.814A2 2 0 0 0 2 18.828V21a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h1a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h.172a2 2 0 0 0 1.414-.586l.814-.814",
      key: "1ubxi2"
    }
  ]
], vq = e("key-square", mq);
const gq = [
  ["path", { d: "m15.5 7.5 2.3 2.3a1 1 0 0 0 1.4 0l2.1-2.1a1 1 0 0 0 0-1.4L19 4", key: "g0fldk" }],
  ["path", { d: "m21 2-9.6 9.6", key: "1j0ho8" }],
  ["circle", { cx: "7.5", cy: "15.5", r: "5.5", key: "yqb3hr" }]
], _q = e("key", gq);
const xq = [
  ["rect", { width: "20", height: "16", x: "2", y: "4", rx: "2", key: "18n3k1" }],
  ["path", { d: "M6 8h4", key: "utf9t1" }],
  ["path", { d: "M14 8h.01", key: "1primd" }],
  ["path", { d: "M18 8h.01", key: "emo2bl" }],
  ["path", { d: "M2 12h20", key: "9i4pu4" }],
  ["path", { d: "M6 12v4", key: "dy92yo" }],
  ["path", { d: "M10 12v4", key: "1fxnav" }],
  ["path", { d: "M14 12v4", key: "1hft58" }],
  ["path", { d: "M18 12v4", key: "tjjnbz" }]
], bq = e("keyboard-music", xq);
const wq = [
  ["path", { d: "M 20 4 A2 2 0 0 1 22 6", key: "1g1fkt" }],
  ["path", { d: "M 22 6 L 22 16.41", key: "1qjg3w" }],
  ["path", { d: "M 7 16 L 16 16", key: "n0yqwb" }],
  ["path", { d: "M 9.69 4 L 20 4", key: "kbpcgx" }],
  ["path", { d: "M14 8h.01", key: "1primd" }],
  ["path", { d: "M18 8h.01", key: "emo2bl" }],
  ["path", { d: "m2 2 20 20", key: "1ooewy" }],
  ["path", { d: "M20 20H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2", key: "s23sx2" }],
  ["path", { d: "M6 8h.01", key: "x9i8wu" }],
  ["path", { d: "M8 12h.01", key: "czm47f" }]
], Nq = e("keyboard-off", wq);
const $q = [
  ["path", { d: "M10 8h.01", key: "1r9ogq" }],
  ["path", { d: "M12 12h.01", key: "1mp3jc" }],
  ["path", { d: "M14 8h.01", key: "1primd" }],
  ["path", { d: "M16 12h.01", key: "1l6xoz" }],
  ["path", { d: "M18 8h.01", key: "emo2bl" }],
  ["path", { d: "M6 8h.01", key: "x9i8wu" }],
  ["path", { d: "M7 16h10", key: "wp8him" }],
  ["path", { d: "M8 12h.01", key: "czm47f" }],
  ["rect", { width: "20", height: "16", x: "2", y: "4", rx: "2", key: "18n3k1" }]
], zq = e("keyboard", $q);
const jq = [
  ["path", { d: "M12 2v5", key: "nd4vlx" }],
  ["path", { d: "M14.829 15.998a3 3 0 1 1-5.658 0", key: "1pybiy" }],
  [
    "path",
    {
      d: "M20.92 14.606A1 1 0 0 1 20 16H4a1 1 0 0 1-.92-1.394l3-7A1 1 0 0 1 7 7h10a1 1 0 0 1 .92.606z",
      key: "ma1wor"
    }
  ]
], qq = e("lamp-ceiling", jq);
const Aq = [
  [
    "path",
    {
      d: "M10.293 2.293a1 1 0 0 1 1.414 0l2.5 2.5 5.994 1.227a1 1 0 0 1 .506 1.687l-7 7a1 1 0 0 1-1.687-.506l-1.227-5.994-2.5-2.5a1 1 0 0 1 0-1.414z",
      key: "sb8slu"
    }
  ],
  ["path", { d: "m14.207 4.793-3.414 3.414", key: "m2x3oj" }],
  [
    "path",
    { d: "M3 20a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v1a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1z", key: "8b3myj" }
  ],
  ["path", { d: "m9.086 6.5-4.793 4.793a1 1 0 0 0-.18 1.17L7 18", key: "43s6cu" }]
], Hq = e("lamp-desk", Aq);
const Sq = [
  ["path", { d: "M12 10v12", key: "6ubwww" }],
  [
    "path",
    {
      d: "M17.929 7.629A1 1 0 0 1 17 9H7a1 1 0 0 1-.928-1.371l2-5A1 1 0 0 1 9 2h6a1 1 0 0 1 .928.629z",
      key: "1o95gh"
    }
  ],
  ["path", { d: "M9 22h6", key: "1rlq3v" }]
], Cq = e("lamp-floor", Sq);
const Vq = [
  [
    "path",
    {
      d: "M19.929 18.629A1 1 0 0 1 19 20H9a1 1 0 0 1-.928-1.371l2-5A1 1 0 0 1 11 13h6a1 1 0 0 1 .928.629z",
      key: "u4w2d7"
    }
  ],
  [
    "path",
    { d: "M6 3a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2H5a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1z", key: "15356w" }
  ],
  ["path", { d: "M8 6h4a2 2 0 0 1 2 2v5", key: "1m6m7x" }]
], Rq = e("lamp-wall-down", Vq);
const Eq = [
  [
    "path",
    {
      d: "M19.929 9.629A1 1 0 0 1 19 11H9a1 1 0 0 1-.928-1.371l2-5A1 1 0 0 1 11 4h6a1 1 0 0 1 .928.629z",
      key: "1uvrbf"
    }
  ],
  [
    "path",
    { d: "M6 15a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2H5a1 1 0 0 1-1-1v-4a1 1 0 0 1 1-1z", key: "154r2a" }
  ],
  ["path", { d: "M8 18h4a2 2 0 0 0 2-2v-5", key: "z9mbu0" }]
], Lq = e("lamp-wall-up", Eq);
const Pq = [
  ["path", { d: "M12 12v6", key: "3ahymv" }],
  [
    "path",
    {
      d: "M4.077 10.615A1 1 0 0 0 5 12h14a1 1 0 0 0 .923-1.385l-3.077-7.384A2 2 0 0 0 15 2H9a2 2 0 0 0-1.846 1.23Z",
      key: "1l7kg2"
    }
  ],
  [
    "path",
    { d: "M8 20a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v1a1 1 0 0 1-1 1H9a1 1 0 0 1-1-1z", key: "1mmzpi" }
  ]
], Tq = e("lamp", Pq);
const Oq = [
  ["path", { d: "m12 8 6-3-6-3v10", key: "mvpnpy" }],
  [
    "path",
    {
      d: "m8 11.99-5.5 3.14a1 1 0 0 0 0 1.74l8.5 4.86a2 2 0 0 0 2 0l8.5-4.86a1 1 0 0 0 0-1.74L16 12",
      key: "ek95tt"
    }
  ],
  ["path", { d: "m6.49 12.85 11.02 6.3", key: "1kt42w" }],
  ["path", { d: "M17.51 12.85 6.5 19.15", key: "v55bdg" }]
], Dq = e("land-plot", Oq);
const Iq = [
  ["path", { d: "M10 18v-7", key: "wt116b" }],
  [
    "path",
    {
      d: "M11.12 2.198a2 2 0 0 1 1.76.006l7.866 3.847c.476.233.31.949-.22.949H3.474c-.53 0-.695-.716-.22-.949z",
      key: "1m329m"
    }
  ],
  ["path", { d: "M14 18v-7", key: "vav6t3" }],
  ["path", { d: "M18 18v-7", key: "aexdmj" }],
  ["path", { d: "M3 22h18", key: "8prr45" }],
  ["path", { d: "M6 18v-7", key: "1ivflk" }]
], Fq = e("landmark", Iq);
const Bq = [
  ["path", { d: "m5 8 6 6", key: "1wu5hv" }],
  ["path", { d: "m4 14 6-6 2-3", key: "1k1g8d" }],
  ["path", { d: "M2 5h12", key: "or177f" }],
  ["path", { d: "M7 2h1", key: "1t2jsx" }],
  ["path", { d: "m22 22-5-10-5 10", key: "don7ne" }],
  ["path", { d: "M14 18h6", key: "1m8k6r" }]
], Uq = e("languages", Bq);
const Wq = [
  ["path", { d: "M2 20h20", key: "owomy5" }],
  ["path", { d: "m9 10 2 2 4-4", key: "1gnqz4" }],
  ["rect", { x: "3", y: "4", width: "18", height: "12", rx: "2", key: "8ur36m" }]
], Zq = e("laptop-minimal-check", Wq);
const Gq = [
  ["rect", { width: "18", height: "12", x: "3", y: "4", rx: "2", ry: "2", key: "1qhy41" }],
  ["line", { x1: "2", x2: "22", y1: "20", y2: "20", key: "ni3hll" }]
], Xq = e("laptop-minimal", Gq);
const Yq = [
  [
    "path",
    {
      d: "M18 5a2 2 0 0 1 2 2v8.526a2 2 0 0 0 .212.897l1.068 2.127a1 1 0 0 1-.9 1.45H3.62a1 1 0 0 1-.9-1.45l1.068-2.127A2 2 0 0 0 4 15.526V7a2 2 0 0 1 2-2z",
      key: "1pdavp"
    }
  ],
  ["path", { d: "M20.054 15.987H3.946", key: "14rxg9" }]
], Kq = e("laptop", Yq);
const Qq = [
  ["path", { d: "M7 22a5 5 0 0 1-2-4", key: "umushi" }],
  ["path", { d: "M7 16.93c.96.43 1.96.74 2.99.91", key: "ybbtv3" }],
  [
    "path",
    {
      d: "M3.34 14A6.8 6.8 0 0 1 2 10c0-4.42 4.48-8 10-8s10 3.58 10 8a7.19 7.19 0 0 1-.33 2",
      key: "gt5e1w"
    }
  ],
  ["path", { d: "M5 18a2 2 0 1 0 0-4 2 2 0 0 0 0 4z", key: "bq3ynw" }],
  [
    "path",
    {
      d: "M14.33 22h-.09a.35.35 0 0 1-.24-.32v-10a.34.34 0 0 1 .33-.34c.08 0 .15.03.21.08l7.34 6a.33.33 0 0 1-.21.59h-4.49l-2.57 3.85a.35.35 0 0 1-.28.14z",
      key: "72q637"
    }
  ]
], Jq = e("lasso-select", Qq);
const eA = [
  ["path", { d: "M3.704 14.467a10 8 0 1 1 3.115 2.375", key: "wxgc5m" }],
  ["path", { d: "M7 22a5 5 0 0 1-2-3.994", key: "1xp6a4" }],
  ["circle", { cx: "5", cy: "16", r: "2", key: "18csp3" }]
], tA = e("lasso", eA);
const aA = [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "M18 13a6 6 0 0 1-6 5 6 6 0 0 1-6-5h12Z", key: "b2q4dd" }],
  ["line", { x1: "9", x2: "9.01", y1: "9", y2: "9", key: "yxxnd0" }],
  ["line", { x1: "15", x2: "15.01", y1: "9", y2: "9", key: "1p4y9e" }]
], oA = e("laugh", aA);
const nA = [
  [
    "path",
    {
      d: "M13 13.74a2 2 0 0 1-2 0L2.5 8.87a1 1 0 0 1 0-1.74L11 2.26a2 2 0 0 1 2 0l8.5 4.87a1 1 0 0 1 0 1.74z",
      key: "15q6uc"
    }
  ],
  [
    "path",
    {
      d: "m20 14.285 1.5.845a1 1 0 0 1 0 1.74L13 21.74a2 2 0 0 1-2 0l-8.5-4.87a1 1 0 0 1 0-1.74l1.5-.845",
      key: "byia6g"
    }
  ]
], cA = e("layers-2", nA);
const rA = [
  [
    "path",
    {
      d: "M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 .83.18 2 2 0 0 0 .83-.18l8.58-3.9a1 1 0 0 0 0-1.831z",
      key: "zzgyd3"
    }
  ],
  ["path", { d: "M16 17h6", key: "1ook5g" }],
  ["path", { d: "M19 14v6", key: "1ckrd5" }],
  ["path", { d: "M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 .825.178", key: "1ia9y3" }],
  ["path", { d: "M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l2.116-.962", key: "jksky3" }]
], hA = e("layers-plus", rA);
const dA = [
  [
    "path",
    {
      d: "M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z",
      key: "zw3jo"
    }
  ],
  [
    "path",
    {
      d: "M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12",
      key: "1wduqc"
    }
  ],
  [
    "path",
    {
      d: "M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17",
      key: "kqbvx6"
    }
  ]
], iA = e("layers", dA);
const sA = [
  ["rect", { width: "7", height: "9", x: "3", y: "3", rx: "1", key: "10lvy0" }],
  ["rect", { width: "7", height: "5", x: "14", y: "3", rx: "1", key: "16une8" }],
  ["rect", { width: "7", height: "9", x: "14", y: "12", rx: "1", key: "1hutg5" }],
  ["rect", { width: "7", height: "5", x: "3", y: "16", rx: "1", key: "ldoo1y" }]
], yA = e("layout-dashboard", sA);
const pA = [
  ["rect", { width: "7", height: "7", x: "3", y: "3", rx: "1", key: "1g98yp" }],
  ["rect", { width: "7", height: "7", x: "14", y: "3", rx: "1", key: "6d4xhi" }],
  ["rect", { width: "7", height: "7", x: "14", y: "14", rx: "1", key: "nxv5o0" }],
  ["rect", { width: "7", height: "7", x: "3", y: "14", rx: "1", key: "1bb6yr" }]
], kA = e("layout-grid", pA);
const lA = [
  ["rect", { width: "7", height: "7", x: "3", y: "3", rx: "1", key: "1g98yp" }],
  ["rect", { width: "7", height: "7", x: "3", y: "14", rx: "1", key: "1bb6yr" }],
  ["path", { d: "M14 4h7", key: "3xa0d5" }],
  ["path", { d: "M14 9h7", key: "1icrd9" }],
  ["path", { d: "M14 15h7", key: "1mj8o2" }],
  ["path", { d: "M14 20h7", key: "11slyb" }]
], uA = e("layout-list", lA);
const MA = [
  ["rect", { width: "7", height: "18", x: "3", y: "3", rx: "1", key: "2obqm" }],
  ["rect", { width: "7", height: "7", x: "14", y: "3", rx: "1", key: "6d4xhi" }],
  ["rect", { width: "7", height: "7", x: "14", y: "14", rx: "1", key: "nxv5o0" }]
], fA = e("layout-panel-left", MA);
const mA = [
  ["rect", { width: "18", height: "7", x: "3", y: "3", rx: "1", key: "f1a2em" }],
  ["rect", { width: "7", height: "7", x: "3", y: "14", rx: "1", key: "1bb6yr" }],
  ["rect", { width: "7", height: "7", x: "14", y: "14", rx: "1", key: "nxv5o0" }]
], vA = e("layout-panel-top", mA);
const gA = [
  ["rect", { width: "18", height: "7", x: "3", y: "3", rx: "1", key: "f1a2em" }],
  ["rect", { width: "9", height: "7", x: "3", y: "14", rx: "1", key: "jqznyg" }],
  ["rect", { width: "5", height: "7", x: "16", y: "14", rx: "1", key: "q5h2i8" }]
], _A = e("layout-template", gA);
const xA = [
  [
    "path",
    {
      d: "M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z",
      key: "nnexq3"
    }
  ],
  ["path", { d: "M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12", key: "mt58a7" }]
], bA = e("leaf", xA);
const wA = [
  [
    "path",
    {
      d: "M2 22c1.25-.987 2.27-1.975 3.9-2.2a5.56 5.56 0 0 1 3.8 1.5 4 4 0 0 0 6.187-2.353 3.5 3.5 0 0 0 3.69-5.116A3.5 3.5 0 0 0 20.95 8 3.5 3.5 0 1 0 16 3.05a3.5 3.5 0 0 0-5.831 1.373 3.5 3.5 0 0 0-5.116 3.69 4 4 0 0 0-2.348 6.155C3.499 15.42 4.409 16.712 4.2 18.1 3.926 19.743 3.014 20.732 2 22",
      key: "1134nt"
    }
  ],
  ["path", { d: "M2 22 17 7", key: "1q7jp2" }]
], NA = e("leafy-green", wA);
const $A = [
  [
    "path",
    {
      d: "M16 12h3a2 2 0 0 0 1.902-1.38l1.056-3.333A1 1 0 0 0 21 6H3a1 1 0 0 0-.958 1.287l1.056 3.334A2 2 0 0 0 5 12h3",
      key: "13jjxg"
    }
  ],
  ["path", { d: "M18 6V3a1 1 0 0 0-1-1h-3", key: "1550fe" }],
  ["rect", { width: "8", height: "12", x: "8", y: "10", rx: "1", key: "qmu8b6" }]
], zA = e("lectern", $A);
const jA = [
  ["rect", { width: "8", height: "18", x: "3", y: "3", rx: "1", key: "oynpb5" }],
  ["path", { d: "M7 3v18", key: "bbkbws" }],
  [
    "path",
    {
      d: "M20.4 18.9c.2.5-.1 1.1-.6 1.3l-1.9.7c-.5.2-1.1-.1-1.3-.6L11.1 5.1c-.2-.5.1-1.1.6-1.3l1.9-.7c.5-.2 1.1.1 1.3.6Z",
      key: "1qboyk"
    }
  ]
], qA = e("library-big", jA);
const AA = [
  ["path", { d: "m16 6 4 14", key: "ji33uf" }],
  ["path", { d: "M12 6v14", key: "1n7gus" }],
  ["path", { d: "M8 8v12", key: "1gg7y9" }],
  ["path", { d: "M4 4v16", key: "6qkkli" }]
], HA = e("library", AA);
const SA = [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "m4.93 4.93 4.24 4.24", key: "1ymg45" }],
  ["path", { d: "m14.83 9.17 4.24-4.24", key: "1cb5xl" }],
  ["path", { d: "m14.83 14.83 4.24 4.24", key: "q42g0n" }],
  ["path", { d: "m9.17 14.83-4.24 4.24", key: "bqpfvv" }],
  ["circle", { cx: "12", cy: "12", r: "4", key: "4exip2" }]
], CA = e("life-buoy", SA);
const VA = [
  ["path", { d: "M14 12h2v8", key: "c1fccl" }],
  ["path", { d: "M14 20h4", key: "lzx1xo" }],
  ["path", { d: "M6 12h4", key: "a4o3ry" }],
  ["path", { d: "M6 20h4", key: "1i6q5t" }],
  ["path", { d: "M8 20V8a4 4 0 0 1 7.464-2", key: "wk9t6r" }]
], RA = e("ligature", VA);
const EA = [
  ["path", { d: "M16.8 11.2c.8-.9 1.2-2 1.2-3.2a6 6 0 0 0-9.3-5", key: "1fkcox" }],
  ["path", { d: "m2 2 20 20", key: "1ooewy" }],
  ["path", { d: "M6.3 6.3a4.67 4.67 0 0 0 1.2 5.2c.7.7 1.3 1.5 1.5 2.5", key: "10m8kw" }],
  ["path", { d: "M9 18h6", key: "x1upvd" }],
  ["path", { d: "M10 22h4", key: "ceow96" }]
], LA = e("lightbulb-off", EA);
const PA = [
  [
    "path",
    {
      d: "M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5",
      key: "1gvzjb"
    }
  ],
  ["path", { d: "M9 18h6", key: "x1upvd" }],
  ["path", { d: "M10 22h4", key: "ceow96" }]
], TA = e("lightbulb", PA);
const OA = [
  [
    "path",
    {
      d: "M7 3.5c5-2 7 2.5 3 4C1.5 10 2 15 5 16c5 2 9-10 14-7s.5 13.5-4 12c-5-2.5.5-11 6-2",
      key: "1lrphd"
    }
  ]
], DA = e("line-squiggle", OA);
const IA = [
  ["path", { d: "M9 17H7A5 5 0 0 1 7 7", key: "10o201" }],
  ["path", { d: "M15 7h2a5 5 0 0 1 4 8", key: "1d3206" }],
  ["line", { x1: "8", x2: "12", y1: "12", y2: "12", key: "rvw6j4" }],
  ["line", { x1: "2", x2: "22", y1: "2", y2: "22", key: "a6p6uj" }]
], FA = e("link-2-off", IA);
const BA = [
  ["path", { d: "M9 17H7A5 5 0 0 1 7 7h2", key: "8i5ue5" }],
  ["path", { d: "M15 7h2a5 5 0 1 1 0 10h-2", key: "1b9ql8" }],
  ["line", { x1: "8", x2: "16", y1: "12", y2: "12", key: "1jonct" }]
], UA = e("link-2", BA);
const WA = [
  ["path", { d: "M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71", key: "1cjeqo" }],
  ["path", { d: "M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71", key: "19qd67" }]
], ZA = e("link", WA);
const GA = [
  [
    "path",
    {
      d: "M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z",
      key: "c2jq9f"
    }
  ],
  ["rect", { width: "4", height: "12", x: "2", y: "9", key: "mk3on5" }],
  ["circle", { cx: "4", cy: "4", r: "2", key: "bt5ra8" }]
], XA = e("linkedin", GA);
const YA = [
  ["path", { d: "M16 5H3", key: "m91uny" }],
  ["path", { d: "M16 12H3", key: "1a2rj7" }],
  ["path", { d: "M11 19H3", key: "zflm78" }],
  ["path", { d: "m15 18 2 2 4-4", key: "1szwhi" }]
], KA = e("list-check", YA);
const QA = [
  ["path", { d: "M13 5h8", key: "a7qcls" }],
  ["path", { d: "M13 12h8", key: "h98zly" }],
  ["path", { d: "M13 19h8", key: "c3s6r1" }],
  ["path", { d: "m3 17 2 2 4-4", key: "1jhpwq" }],
  ["path", { d: "m3 7 2 2 4-4", key: "1obspn" }]
], JA = e("list-checks", QA);
const eH = [
  ["path", { d: "M3 5h8", key: "18g2rq" }],
  ["path", { d: "M3 12h8", key: "1xfjp6" }],
  ["path", { d: "M3 19h8", key: "fpbke4" }],
  ["path", { d: "m15 5 3 3 3-3", key: "1t4thf" }],
  ["path", { d: "m15 19 3-3 3 3", key: "y4ckd2" }]
], tH = e("list-chevrons-down-up", eH);
const aH = [
  ["path", { d: "M3 5h8", key: "18g2rq" }],
  ["path", { d: "M3 12h8", key: "1xfjp6" }],
  ["path", { d: "M3 19h8", key: "fpbke4" }],
  ["path", { d: "m15 8 3-3 3 3", key: "bc4io6" }],
  ["path", { d: "m15 16 3 3 3-3", key: "9wmg1l" }]
], oH = e("list-chevrons-up-down", aH);
const nH = [
  ["path", { d: "M10 5h11", key: "1hkqpe" }],
  ["path", { d: "M10 12h11", key: "6m4ad9" }],
  ["path", { d: "M10 19h11", key: "14g2nv" }],
  ["path", { d: "m3 10 3-3-3-3", key: "i7pm08" }],
  ["path", { d: "m3 20 3-3-3-3", key: "20gx1n" }]
], cH = e("list-collapse", nH);
const rH = [
  ["path", { d: "M16 5H3", key: "m91uny" }],
  ["path", { d: "M16 12H3", key: "1a2rj7" }],
  ["path", { d: "M9 19H3", key: "s61nz1" }],
  ["path", { d: "m16 16-3 3 3 3", key: "117b85" }],
  ["path", { d: "M21 5v12a2 2 0 0 1-2 2h-6", key: "hey24a" }]
], hH = e("list-end", rH);
const dH = [
  ["path", { d: "M12 5H2", key: "1o22fu" }],
  ["path", { d: "M6 12h12", key: "8npq4p" }],
  ["path", { d: "M9 19h6", key: "456am0" }],
  ["path", { d: "M16 5h6", key: "1vod17" }],
  ["path", { d: "M19 8V2", key: "1wcffq" }]
], iH = e("list-filter-plus", dH);
const sH = [
  ["path", { d: "M2 5h20", key: "1fs1ex" }],
  ["path", { d: "M6 12h12", key: "8npq4p" }],
  ["path", { d: "M9 19h6", key: "456am0" }]
], yH = e("list-filter", sH);
const pH = [
  ["path", { d: "M21 5H11", key: "us1j55" }],
  ["path", { d: "M21 12H11", key: "wd7e0v" }],
  ["path", { d: "M21 19H11", key: "saa85w" }],
  ["path", { d: "m7 8-4 4 4 4", key: "o5hrat" }]
], kH = e("list-indent-decrease", pH);
const lH = [
  ["path", { d: "M21 5H11", key: "us1j55" }],
  ["path", { d: "M21 12H11", key: "wd7e0v" }],
  ["path", { d: "M21 19H11", key: "saa85w" }],
  ["path", { d: "m3 8 4 4-4 4", key: "1a3j6y" }]
], uH = e("list-indent-increase", lH);
const MH = [
  ["path", { d: "M16 5H3", key: "m91uny" }],
  ["path", { d: "M11 12H3", key: "51ecnj" }],
  ["path", { d: "M16 19H3", key: "zzsher" }],
  ["path", { d: "M21 12h-6", key: "bt1uis" }]
], fH = e("list-minus", MH);
const mH = [
  ["path", { d: "M16 5H3", key: "m91uny" }],
  ["path", { d: "M11 12H3", key: "51ecnj" }],
  ["path", { d: "M11 19H3", key: "zflm78" }],
  ["path", { d: "M21 16V5", key: "yxg4q8" }],
  ["circle", { cx: "18", cy: "16", r: "3", key: "1hluhg" }]
], vH = e("list-music", mH);
const gH = [
  ["path", { d: "M11 5h10", key: "1cz7ny" }],
  ["path", { d: "M11 12h10", key: "1438ji" }],
  ["path", { d: "M11 19h10", key: "11t30w" }],
  ["path", { d: "M4 4h1v5", key: "10yrso" }],
  ["path", { d: "M4 9h2", key: "r1h2o0" }],
  ["path", { d: "M6.5 20H3.4c0-1 2.6-1.925 2.6-3.5a1.5 1.5 0 0 0-2.6-1.02", key: "xtkcd5" }]
], _H = e("list-ordered", gH);
const xH = [
  ["path", { d: "M16 5H3", key: "m91uny" }],
  ["path", { d: "M11 12H3", key: "51ecnj" }],
  ["path", { d: "M16 19H3", key: "zzsher" }],
  ["path", { d: "M18 9v6", key: "1twb98" }],
  ["path", { d: "M21 12h-6", key: "bt1uis" }]
], bH = e("list-plus", xH);
const wH = [
  ["path", { d: "M21 5H3", key: "1fi0y6" }],
  ["path", { d: "M7 12H3", key: "13ou7f" }],
  ["path", { d: "M7 19H3", key: "wbqt3n" }],
  [
    "path",
    {
      d: "M12 18a5 5 0 0 0 9-3 4.5 4.5 0 0 0-4.5-4.5c-1.33 0-2.54.54-3.41 1.41L11 14",
      key: "qth677"
    }
  ],
  ["path", { d: "M11 10v4h4", key: "172dkj" }]
], NH = e("list-restart", wH);
const $H = [
  ["path", { d: "M3 5h6", key: "1ltk0q" }],
  ["path", { d: "M3 12h13", key: "ppymz1" }],
  ["path", { d: "M3 19h13", key: "bpdczq" }],
  ["path", { d: "m16 8-3-3 3-3", key: "1pjpp6" }],
  ["path", { d: "M21 19V7a2 2 0 0 0-2-2h-6", key: "4zzq67" }]
], zH = e("list-start", $H);
const jH = [
  ["path", { d: "M13 5h8", key: "a7qcls" }],
  ["path", { d: "M13 12h8", key: "h98zly" }],
  ["path", { d: "M13 19h8", key: "c3s6r1" }],
  ["path", { d: "m3 17 2 2 4-4", key: "1jhpwq" }],
  ["rect", { x: "3", y: "4", width: "6", height: "6", rx: "1", key: "cif1o7" }]
], qH = e("list-todo", jH);
const AH = [
  ["path", { d: "M8 5h13", key: "1pao27" }],
  ["path", { d: "M13 12h8", key: "h98zly" }],
  ["path", { d: "M13 19h8", key: "c3s6r1" }],
  ["path", { d: "M3 10a2 2 0 0 0 2 2h3", key: "1npucw" }],
  ["path", { d: "M3 5v12a2 2 0 0 0 2 2h3", key: "x1gjn2" }]
], HH = e("list-tree", AH);
const SH = [
  ["path", { d: "M21 5H3", key: "1fi0y6" }],
  ["path", { d: "M10 12H3", key: "1ulcyk" }],
  ["path", { d: "M10 19H3", key: "108z41" }],
  [
    "path",
    {
      d: "M15 12.003a1 1 0 0 1 1.517-.859l4.997 2.997a1 1 0 0 1 0 1.718l-4.997 2.997a1 1 0 0 1-1.517-.86z",
      key: "ms4nik"
    }
  ]
], CH = e("list-video", SH);
const VH = [
  ["path", { d: "M16 5H3", key: "m91uny" }],
  ["path", { d: "M11 12H3", key: "51ecnj" }],
  ["path", { d: "M16 19H3", key: "zzsher" }],
  ["path", { d: "m15.5 9.5 5 5", key: "ytk86i" }],
  ["path", { d: "m20.5 9.5-5 5", key: "17o44f" }]
], RH = e("list-x", VH);
const EH = [
  ["path", { d: "M3 5h.01", key: "18ugdj" }],
  ["path", { d: "M3 12h.01", key: "nlz23k" }],
  ["path", { d: "M3 19h.01", key: "noohij" }],
  ["path", { d: "M8 5h13", key: "1pao27" }],
  ["path", { d: "M8 12h13", key: "1za7za" }],
  ["path", { d: "M8 19h13", key: "m83p4d" }]
], LH = e("list", EH);
const PH = [
  ["path", { d: "M22 12a1 1 0 0 1-10 0 1 1 0 0 0-10 0", key: "1lzz15" }],
  ["path", { d: "M7 20.7a1 1 0 1 1 5-8.7 1 1 0 1 0 5-8.6", key: "1gnrpi" }],
  ["path", { d: "M7 3.3a1 1 0 1 1 5 8.6 1 1 0 1 0 5 8.6", key: "u9yy5q" }],
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }]
], TH = e("loader-pinwheel", PH);
const OH = [["path", { d: "M21 12a9 9 0 1 1-6.219-8.56", key: "13zald" }]], DH = e("loader-circle", OH);
const IH = [
  ["path", { d: "M12 2v4", key: "3427ic" }],
  ["path", { d: "m16.2 7.8 2.9-2.9", key: "r700ao" }],
  ["path", { d: "M18 12h4", key: "wj9ykh" }],
  ["path", { d: "m16.2 16.2 2.9 2.9", key: "1bxg5t" }],
  ["path", { d: "M12 18v4", key: "jadmvz" }],
  ["path", { d: "m4.9 19.1 2.9-2.9", key: "bwix9q" }],
  ["path", { d: "M2 12h4", key: "j09sii" }],
  ["path", { d: "m4.9 4.9 2.9 2.9", key: "giyufr" }]
], FH = e("loader", IH);
const BH = [
  ["line", { x1: "2", x2: "5", y1: "12", y2: "12", key: "bvdh0s" }],
  ["line", { x1: "19", x2: "22", y1: "12", y2: "12", key: "1tbv5k" }],
  ["line", { x1: "12", x2: "12", y1: "2", y2: "5", key: "11lu5j" }],
  ["line", { x1: "12", x2: "12", y1: "19", y2: "22", key: "x3vr5v" }],
  ["circle", { cx: "12", cy: "12", r: "7", key: "fim9np" }],
  ["circle", { cx: "12", cy: "12", r: "3", key: "1v7zrd" }]
], UH = e("locate-fixed", BH);
const WH = [
  ["path", { d: "M12 19v3", key: "npa21l" }],
  ["path", { d: "M12 2v3", key: "qbqxhf" }],
  ["path", { d: "M18.89 13.24a7 7 0 0 0-8.13-8.13", key: "1v9jrh" }],
  ["path", { d: "M19 12h3", key: "osuazr" }],
  ["path", { d: "M2 12h3", key: "1wrr53" }],
  ["path", { d: "m2 2 20 20", key: "1ooewy" }],
  ["path", { d: "M7.05 7.05a7 7 0 0 0 9.9 9.9", key: "rc5l2e" }]
], ZH = e("locate-off", WH);
const GH = [
  ["line", { x1: "2", x2: "5", y1: "12", y2: "12", key: "bvdh0s" }],
  ["line", { x1: "19", x2: "22", y1: "12", y2: "12", key: "1tbv5k" }],
  ["line", { x1: "12", x2: "12", y1: "2", y2: "5", key: "11lu5j" }],
  ["line", { x1: "12", x2: "12", y1: "19", y2: "22", key: "x3vr5v" }],
  ["circle", { cx: "12", cy: "12", r: "7", key: "fim9np" }]
], XH = e("locate", GH);
const YH = [
  ["circle", { cx: "12", cy: "16", r: "1", key: "1au0dj" }],
  ["rect", { width: "18", height: "12", x: "3", y: "10", rx: "2", key: "l0tzu3" }],
  ["path", { d: "M7 10V7a5 5 0 0 1 9.33-2.5", key: "car5b7" }]
], KH = e("lock-keyhole-open", YH);
const QH = [
  ["circle", { cx: "12", cy: "16", r: "1", key: "1au0dj" }],
  ["rect", { x: "3", y: "10", width: "18", height: "12", rx: "2", key: "6s8ecr" }],
  ["path", { d: "M7 10V7a5 5 0 0 1 10 0v3", key: "1pqi11" }]
], JH = e("lock-keyhole", QH);
const eS = [
  ["rect", { width: "18", height: "11", x: "3", y: "11", rx: "2", ry: "2", key: "1w4ew1" }],
  ["path", { d: "M7 11V7a5 5 0 0 1 9.9-1", key: "1mm8w8" }]
], tS = e("lock-open", eS);
const aS = [
  ["rect", { width: "18", height: "11", x: "3", y: "11", rx: "2", ry: "2", key: "1w4ew1" }],
  ["path", { d: "M7 11V7a5 5 0 0 1 10 0v4", key: "fwvmzm" }]
], oS = e("lock", aS);
const nS = [
  ["path", { d: "m10 17 5-5-5-5", key: "1bsop3" }],
  ["path", { d: "M15 12H3", key: "6jk70r" }],
  ["path", { d: "M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4", key: "u53s6r" }]
], cS = e("log-in", nS);
const rS = [
  ["path", { d: "m16 17 5-5-5-5", key: "1bji2h" }],
  ["path", { d: "M21 12H9", key: "dn1m92" }],
  ["path", { d: "M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4", key: "1uf3rs" }]
], hS = e("log-out", rS);
const dS = [
  ["path", { d: "M3 5h1", key: "1mv5vm" }],
  ["path", { d: "M3 12h1", key: "lp3yf2" }],
  ["path", { d: "M3 19h1", key: "w6f3n9" }],
  ["path", { d: "M8 5h1", key: "1nxr5w" }],
  ["path", { d: "M8 12h1", key: "1con00" }],
  ["path", { d: "M8 19h1", key: "k7p10e" }],
  ["path", { d: "M13 5h8", key: "a7qcls" }],
  ["path", { d: "M13 12h8", key: "h98zly" }],
  ["path", { d: "M13 19h8", key: "c3s6r1" }]
], iS = e("logs", dS);
const sS = [
  ["circle", { cx: "11", cy: "11", r: "8", key: "4ej97u" }],
  ["path", { d: "m21 21-4.3-4.3", key: "1qie3q" }],
  ["path", { d: "M11 11a2 2 0 0 0 4 0 4 4 0 0 0-8 0 6 6 0 0 0 12 0", key: "107gwy" }]
], yS = e("lollipop", sS);
const pS = [
  [
    "path",
    { d: "M6 20a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2", key: "1m57jg" }
  ],
  ["path", { d: "M8 18V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v14", key: "1l99gc" }],
  ["path", { d: "M10 20h4", key: "ni2waw" }],
  ["circle", { cx: "16", cy: "20", r: "2", key: "1vifvg" }],
  ["circle", { cx: "8", cy: "20", r: "2", key: "ckkr5m" }]
], kS = e("luggage", pS);
const lS = [
  ["path", { d: "m12 15 4 4", key: "lnac28" }],
  [
    "path",
    {
      d: "M2.352 10.648a1.205 1.205 0 0 0 0 1.704l2.296 2.296a1.205 1.205 0 0 0 1.704 0l6.029-6.029a1 1 0 1 1 3 3l-6.029 6.029a1.205 1.205 0 0 0 0 1.704l2.296 2.296a1.205 1.205 0 0 0 1.704 0l6.365-6.367A1 1 0 0 0 8.716 4.282z",
      key: "nlhkjb"
    }
  ],
  ["path", { d: "m5 8 4 4", key: "j6kj7e" }]
], uS = e("magnet", lS);
const MS = [
  ["path", { d: "M22 13V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v12c0 1.1.9 2 2 2h8", key: "12jkf8" }],
  ["path", { d: "m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7", key: "1ocrg3" }],
  ["path", { d: "m16 19 2 2 4-4", key: "1b14m6" }]
], fS = e("mail-check", MS);
const mS = [
  ["path", { d: "M22 15V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v12c0 1.1.9 2 2 2h8", key: "fuxbkv" }],
  ["path", { d: "m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7", key: "1ocrg3" }],
  ["path", { d: "M16 19h6", key: "xwg31i" }]
], vS = e("mail-minus", mS);
const gS = [
  [
    "path",
    {
      d: "M21.2 8.4c.5.38.8.97.8 1.6v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V10a2 2 0 0 1 .8-1.6l8-6a2 2 0 0 1 2.4 0l8 6Z",
      key: "1jhwl8"
    }
  ],
  ["path", { d: "m22 10-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 10", key: "1qfld7" }]
], _S = e("mail-open", gS);
const xS = [
  ["path", { d: "M22 10.5V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v12c0 1.1.9 2 2 2h12.5", key: "e61zoh" }],
  ["path", { d: "m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7", key: "1ocrg3" }],
  [
    "path",
    {
      d: "M18 15.28c.2-.4.5-.8.9-1a2.1 2.1 0 0 1 2.6.4c.3.4.5.8.5 1.3 0 1.3-2 2-2 2",
      key: "7z9rxb"
    }
  ],
  ["path", { d: "M20 22v.01", key: "12bgn6" }]
], bS = e("mail-question-mark", xS);
const wS = [
  ["path", { d: "M22 13V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v12c0 1.1.9 2 2 2h8", key: "12jkf8" }],
  ["path", { d: "m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7", key: "1ocrg3" }],
  ["path", { d: "M19 16v6", key: "tddt3s" }],
  ["path", { d: "M16 19h6", key: "xwg31i" }]
], NS = e("mail-plus", wS);
const $S = [
  ["path", { d: "M22 12.5V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v12c0 1.1.9 2 2 2h7.5", key: "w80f2v" }],
  ["path", { d: "m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7", key: "1ocrg3" }],
  ["path", { d: "M18 21a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z", key: "8lzu5m" }],
  ["circle", { cx: "18", cy: "18", r: "3", key: "1xkwt0" }],
  ["path", { d: "m22 22-1.5-1.5", key: "1x83k4" }]
], zS = e("mail-search", $S);
const jS = [
  ["path", { d: "M22 10.5V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v12c0 1.1.9 2 2 2h12.5", key: "e61zoh" }],
  ["path", { d: "m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7", key: "1ocrg3" }],
  ["path", { d: "M20 14v4", key: "1hm744" }],
  ["path", { d: "M20 22v.01", key: "12bgn6" }]
], qS = e("mail-warning", jS);
const AS = [
  ["path", { d: "m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7", key: "132q7q" }],
  ["rect", { x: "2", y: "4", width: "20", height: "16", rx: "2", key: "izxlao" }]
], HS = e("mail", AS);
const SS = [
  ["path", { d: "M22 13V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v12c0 1.1.9 2 2 2h9", key: "1j9vog" }],
  ["path", { d: "m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7", key: "1ocrg3" }],
  ["path", { d: "m17 17 4 4", key: "1b3523" }],
  ["path", { d: "m21 17-4 4", key: "uinynz" }]
], CS = e("mail-x", SS);
const VS = [
  [
    "path",
    {
      d: "M22 17a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V9.5C2 7 4 5 6.5 5H18c2.2 0 4 1.8 4 4v8Z",
      key: "1lbycx"
    }
  ],
  ["polyline", { points: "15,9 18,9 18,11", key: "1pm9c0" }],
  ["path", { d: "M6.5 5C9 5 11 7 11 9.5V17a2 2 0 0 1-2 2", key: "15i455" }],
  ["line", { x1: "6", x2: "7", y1: "10", y2: "10", key: "1e2scm" }]
], RS = e("mailbox", VS);
const ES = [
  ["path", { d: "M17 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-8a2 2 0 0 1 1-1.732", key: "1vyzll" }],
  ["path", { d: "m22 5.5-6.419 4.179a2 2 0 0 1-2.162 0L7 5.5", key: "k7ramc" }],
  ["rect", { x: "7", y: "3", width: "15", height: "12", rx: "2", key: "17196g" }]
], LS = e("mails", ES);
const PS = [
  [
    "path",
    {
      d: "m11 19-1.106-.552a2 2 0 0 0-1.788 0l-3.659 1.83A1 1 0 0 1 3 19.381V6.618a1 1 0 0 1 .553-.894l4.553-2.277a2 2 0 0 1 1.788 0l4.212 2.106a2 2 0 0 0 1.788 0l3.659-1.83A1 1 0 0 1 21 4.619V14",
      key: "40pylx"
    }
  ],
  ["path", { d: "M15 5.764V14", key: "1bab71" }],
  ["path", { d: "M21 18h-6", key: "139f0c" }],
  ["path", { d: "M9 3.236v15", key: "1uimfh" }]
], TS = e("map-minus", PS);
const OS = [
  [
    "path",
    {
      d: "M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0",
      key: "1r0f0z"
    }
  ],
  ["path", { d: "m9 10 2 2 4-4", key: "1gnqz4" }]
], DS = e("map-pin-check-inside", OS);
const IS = [
  [
    "path",
    {
      d: "M19.43 12.935c.357-.967.57-1.955.57-2.935a8 8 0 0 0-16 0c0 4.993 5.539 10.193 7.399 11.799a1 1 0 0 0 1.202 0 32.197 32.197 0 0 0 .813-.728",
      key: "1dq61d"
    }
  ],
  ["circle", { cx: "12", cy: "10", r: "3", key: "ilqhr7" }],
  ["path", { d: "m16 18 2 2 4-4", key: "1mkfmb" }]
], FS = e("map-pin-check", IS);
const BS = [
  [
    "path",
    {
      d: "M15 22a1 1 0 0 1-1-1v-4a1 1 0 0 1 .445-.832l3-2a1 1 0 0 1 1.11 0l3 2A1 1 0 0 1 22 17v4a1 1 0 0 1-1 1z",
      key: "1p1rcz"
    }
  ],
  [
    "path",
    {
      d: "M18 10a8 8 0 0 0-16 0c0 4.993 5.539 10.193 7.399 11.799a1 1 0 0 0 .601.2",
      key: "mcbcs9"
    }
  ],
  ["path", { d: "M18 22v-3", key: "1t1ugv" }],
  ["circle", { cx: "10", cy: "10", r: "3", key: "1ns7v1" }]
], US = e("map-pin-house", BS);
const WS = [
  [
    "path",
    {
      d: "M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0",
      key: "1r0f0z"
    }
  ],
  ["path", { d: "M9 10h6", key: "9gxzsh" }]
], ZS = e("map-pin-minus-inside", WS);
const GS = [
  [
    "path",
    {
      d: "M18.977 14C19.6 12.701 20 11.343 20 10a8 8 0 0 0-16 0c0 4.993 5.539 10.193 7.399 11.799a1 1 0 0 0 1.202 0 32 32 0 0 0 .824-.738",
      key: "11uxia"
    }
  ],
  ["circle", { cx: "12", cy: "10", r: "3", key: "ilqhr7" }],
  ["path", { d: "M16 18h6", key: "987eiv" }]
], XS = e("map-pin-minus", GS);
const YS = [
  ["path", { d: "M12.75 7.09a3 3 0 0 1 2.16 2.16", key: "1d4wjd" }],
  [
    "path",
    {
      d: "M17.072 17.072c-1.634 2.17-3.527 3.912-4.471 4.727a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 1.432-4.568",
      key: "12yil7"
    }
  ],
  ["path", { d: "m2 2 20 20", key: "1ooewy" }],
  ["path", { d: "M8.475 2.818A8 8 0 0 1 20 10c0 1.183-.31 2.377-.81 3.533", key: "lhrkcz" }],
  ["path", { d: "M9.13 9.13a3 3 0 0 0 3.74 3.74", key: "13wojd" }]
], KS = e("map-pin-off", YS);
const QS = [
  [
    "path",
    {
      d: "M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0",
      key: "1r0f0z"
    }
  ],
  ["path", { d: "M12 7v6", key: "lw1j43" }],
  ["path", { d: "M9 10h6", key: "9gxzsh" }]
], JS = e("map-pin-plus-inside", QS);
const eC = [
  ["path", { d: "M17.97 9.304A8 8 0 0 0 2 10c0 4.69 4.887 9.562 7.022 11.468", key: "1fahp3" }],
  [
    "path",
    {
      d: "M21.378 16.626a1 1 0 0 0-3.004-3.004l-4.01 4.012a2 2 0 0 0-.506.854l-.837 2.87a.5.5 0 0 0 .62.62l2.87-.837a2 2 0 0 0 .854-.506z",
      key: "1817ys"
    }
  ],
  ["circle", { cx: "10", cy: "10", r: "3", key: "1ns7v1" }]
], tC = e("map-pin-pen", eC);
const aC = [
  [
    "path",
    {
      d: "M19.914 11.105A7.298 7.298 0 0 0 20 10a8 8 0 0 0-16 0c0 4.993 5.539 10.193 7.399 11.799a1 1 0 0 0 1.202 0 32 32 0 0 0 .824-.738",
      key: "fcdtly"
    }
  ],
  ["circle", { cx: "12", cy: "10", r: "3", key: "ilqhr7" }],
  ["path", { d: "M16 18h6", key: "987eiv" }],
  ["path", { d: "M19 15v6", key: "10aioa" }]
], oC = e("map-pin-plus", aC);
const nC = [
  [
    "path",
    {
      d: "M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0",
      key: "1r0f0z"
    }
  ],
  ["path", { d: "m14.5 7.5-5 5", key: "3lb6iw" }],
  ["path", { d: "m9.5 7.5 5 5", key: "ko136h" }]
], cC = e("map-pin-x-inside", nC);
const rC = [
  [
    "path",
    {
      d: "M19.752 11.901A7.78 7.78 0 0 0 20 10a8 8 0 0 0-16 0c0 4.993 5.539 10.193 7.399 11.799a1 1 0 0 0 1.202 0 19 19 0 0 0 .09-.077",
      key: "y0ewhp"
    }
  ],
  ["circle", { cx: "12", cy: "10", r: "3", key: "ilqhr7" }],
  ["path", { d: "m21.5 15.5-5 5", key: "11iqnx" }],
  ["path", { d: "m21.5 20.5-5-5", key: "1bylgx" }]
], hC = e("map-pin-x", rC);
const dC = [
  [
    "path",
    {
      d: "M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0",
      key: "1r0f0z"
    }
  ],
  ["circle", { cx: "12", cy: "10", r: "3", key: "ilqhr7" }]
], iC = e("map-pin", dC);
const sC = [
  [
    "path",
    {
      d: "M18 8c0 3.613-3.869 7.429-5.393 8.795a1 1 0 0 1-1.214 0C9.87 15.429 6 11.613 6 8a6 6 0 0 1 12 0",
      key: "11u0oz"
    }
  ],
  ["circle", { cx: "12", cy: "8", r: "2", key: "1822b1" }],
  [
    "path",
    {
      d: "M8.714 14h-3.71a1 1 0 0 0-.948.683l-2.004 6A1 1 0 0 0 3 22h18a1 1 0 0 0 .948-1.316l-2-6a1 1 0 0 0-.949-.684h-3.712",
      key: "q8zwxj"
    }
  ]
], yC = e("map-pinned", sC);
const pC = [
  [
    "path",
    {
      d: "m11 19-1.106-.552a2 2 0 0 0-1.788 0l-3.659 1.83A1 1 0 0 1 3 19.381V6.618a1 1 0 0 1 .553-.894l4.553-2.277a2 2 0 0 1 1.788 0l4.212 2.106a2 2 0 0 0 1.788 0l3.659-1.83A1 1 0 0 1 21 4.619V12",
      key: "svfegj"
    }
  ],
  ["path", { d: "M15 5.764V12", key: "1ocw4k" }],
  ["path", { d: "M18 15v6", key: "9wciyi" }],
  ["path", { d: "M21 18h-6", key: "139f0c" }],
  ["path", { d: "M9 3.236v15", key: "1uimfh" }]
], kC = e("map-plus", pC);
const lC = [
  [
    "path",
    {
      d: "M14.106 5.553a2 2 0 0 0 1.788 0l3.659-1.83A1 1 0 0 1 21 4.619v12.764a1 1 0 0 1-.553.894l-4.553 2.277a2 2 0 0 1-1.788 0l-4.212-2.106a2 2 0 0 0-1.788 0l-3.659 1.83A1 1 0 0 1 3 19.381V6.618a1 1 0 0 1 .553-.894l4.553-2.277a2 2 0 0 1 1.788 0z",
      key: "169xi5"
    }
  ],
  ["path", { d: "M15 5.764v15", key: "1pn4in" }],
  ["path", { d: "M9 3.236v15", key: "1uimfh" }]
], uC = e("map", lC);
const MC = [
  ["path", { d: "m14 6 4 4", key: "1q72g9" }],
  ["path", { d: "M17 3h4v4", key: "19p9u1" }],
  ["path", { d: "m21 3-7.75 7.75", key: "1cjbfd" }],
  ["circle", { cx: "9", cy: "15", r: "6", key: "bx5svt" }]
], fC = e("mars-stroke", MC);
const mC = [
  ["path", { d: "M16 3h5v5", key: "1806ms" }],
  ["path", { d: "m21 3-6.75 6.75", key: "pv0uzu" }],
  ["circle", { cx: "10", cy: "14", r: "6", key: "1qwbdc" }]
], vC = e("mars", mC);
const gC = [
  ["path", { d: "M8 22h8", key: "rmew8v" }],
  ["path", { d: "M12 11v11", key: "ur9y6a" }],
  ["path", { d: "m19 3-7 8-7-8Z", key: "1sgpiw" }]
], _C = e("martini", gC);
const xC = [
  ["path", { d: "M15 3h6v6", key: "1q9fwt" }],
  ["path", { d: "m21 3-7 7", key: "1l2asr" }],
  ["path", { d: "m3 21 7-7", key: "tjx5ai" }],
  ["path", { d: "M9 21H3v-6", key: "wtvkvv" }]
], bC = e("maximize-2", xC);
const wC = [
  ["path", { d: "M8 3H5a2 2 0 0 0-2 2v3", key: "1dcmit" }],
  ["path", { d: "M21 8V5a2 2 0 0 0-2-2h-3", key: "1e4gt3" }],
  ["path", { d: "M3 16v3a2 2 0 0 0 2 2h3", key: "wsl5sc" }],
  ["path", { d: "M16 21h3a2 2 0 0 0 2-2v-3", key: "18trek" }]
], NC = e("maximize", wC);
const $C = [
  [
    "path",
    {
      d: "M7.21 15 2.66 7.14a2 2 0 0 1 .13-2.2L4.4 2.8A2 2 0 0 1 6 2h12a2 2 0 0 1 1.6.8l1.6 2.14a2 2 0 0 1 .14 2.2L16.79 15",
      key: "143lza"
    }
  ],
  ["path", { d: "M11 12 5.12 2.2", key: "qhuxz6" }],
  ["path", { d: "m13 12 5.88-9.8", key: "hbye0f" }],
  ["path", { d: "M8 7h8", key: "i86dvs" }],
  ["circle", { cx: "12", cy: "17", r: "5", key: "qbz8iq" }],
  ["path", { d: "M12 18v-2h-.5", key: "fawc4q" }]
], zC = e("medal", $C);
const jC = [
  ["path", { d: "M11.636 6A13 13 0 0 0 19.4 3.2 1 1 0 0 1 21 4v11.344", key: "bycexp" }],
  [
    "path",
    { d: "M14.378 14.357A13 13 0 0 0 11 14H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h1", key: "1t17s6" }
  ],
  ["path", { d: "m2 2 20 20", key: "1ooewy" }],
  ["path", { d: "M6 14a12 12 0 0 0 2.4 7.2 2 2 0 0 0 3.2-2.4A8 8 0 0 1 10 14", key: "1853fq" }],
  ["path", { d: "M8 8v6", key: "aieo6v" }]
], qC = e("megaphone-off", jC);
const AC = [
  [
    "path",
    {
      d: "M11 6a13 13 0 0 0 8.4-2.8A1 1 0 0 1 21 4v12a1 1 0 0 1-1.6.8A13 13 0 0 0 11 14H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2z",
      key: "q8bfy3"
    }
  ],
  ["path", { d: "M6 14a12 12 0 0 0 2.4 7.2 2 2 0 0 0 3.2-2.4A8 8 0 0 1 10 14", key: "1853fq" }],
  ["path", { d: "M8 6v8", key: "15ugcq" }]
], HC = e("megaphone", AC);
const SC = [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["line", { x1: "8", x2: "16", y1: "15", y2: "15", key: "1xb1d9" }],
  ["line", { x1: "9", x2: "9.01", y1: "9", y2: "9", key: "yxxnd0" }],
  ["line", { x1: "15", x2: "15.01", y1: "9", y2: "9", key: "1p4y9e" }]
], CC = e("meh", SC);
const VC = [
  ["path", { d: "M12 12v-2", key: "fwoke6" }],
  ["path", { d: "M12 18v-2", key: "qj6yno" }],
  ["path", { d: "M16 12v-2", key: "heuere" }],
  ["path", { d: "M16 18v-2", key: "s1ct0w" }],
  ["path", { d: "M2 11h1.5", key: "15p63e" }],
  ["path", { d: "M20 18v-2", key: "12ehxp" }],
  ["path", { d: "M20.5 11H22", key: "khsy7a" }],
  ["path", { d: "M4 18v-2", key: "1c3oqr" }],
  ["path", { d: "M8 12v-2", key: "1mwtfd" }],
  ["path", { d: "M8 18v-2", key: "qcmpov" }],
  ["rect", { x: "2", y: "6", width: "20", height: "10", rx: "2", key: "1qcswk" }]
], RC = e("memory-stick", VC);
const EC = [
  ["path", { d: "M4 5h16", key: "1tepv9" }],
  ["path", { d: "M4 12h16", key: "1lakjw" }],
  ["path", { d: "M4 19h16", key: "1djgab" }]
], LC = e("menu", EC);
const PC = [
  ["path", { d: "m8 6 4-4 4 4", key: "ybng9g" }],
  ["path", { d: "M12 2v10.3a4 4 0 0 1-1.172 2.872L4 22", key: "1hyw0i" }],
  ["path", { d: "m20 22-5-5", key: "1m27yz" }]
], TC = e("merge", PC);
const OC = [
  ["path", { d: "m10 9-3 3 3 3", key: "1oro0q" }],
  ["path", { d: "m14 15 3-3-3-3", key: "bz13h7" }],
  [
    "path",
    {
      d: "M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 1 0-4.777-4.719",
      key: "1sd12s"
    }
  ]
], DC = e("message-circle-code", OC);
const IC = [
  ["path", { d: "M10.1 2.182a10 10 0 0 1 3.8 0", key: "5ilxe3" }],
  ["path", { d: "M13.9 21.818a10 10 0 0 1-3.8 0", key: "11zvb9" }],
  ["path", { d: "M17.609 3.72a10 10 0 0 1 2.69 2.7", key: "jiglxs" }],
  ["path", { d: "M2.182 13.9a10 10 0 0 1 0-3.8", key: "c0bmvh" }],
  ["path", { d: "M20.28 17.61a10 10 0 0 1-2.7 2.69", key: "elg7ff" }],
  ["path", { d: "M21.818 10.1a10 10 0 0 1 0 3.8", key: "qkgqxc" }],
  ["path", { d: "M3.721 6.391a10 10 0 0 1 2.7-2.69", key: "1mcia2" }],
  ["path", { d: "m6.163 21.117-2.906.85a1 1 0 0 1-1.236-1.169l.965-2.98", key: "1qsu07" }]
], FC = e("message-circle-dashed", IC);
const BC = [
  [
    "path",
    {
      d: "M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 1 0-4.777-4.719",
      key: "1sd12s"
    }
  ],
  [
    "path",
    {
      d: "M7.828 13.07A3 3 0 0 1 12 8.764a3 3 0 0 1 5.004 2.224 3 3 0 0 1-.832 2.083l-3.447 3.62a1 1 0 0 1-1.45-.001z",
      key: "hoo97p"
    }
  ]
], UC = e("message-circle-heart", BC);
const WC = [
  [
    "path",
    {
      d: "M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 1 0-4.777-4.719",
      key: "1sd12s"
    }
  ],
  ["path", { d: "M8 12h.01", key: "czm47f" }],
  ["path", { d: "M12 12h.01", key: "1mp3jc" }],
  ["path", { d: "M16 12h.01", key: "1l6xoz" }]
], ZC = e("message-circle-more", WC);
const GC = [
  ["path", { d: "m2 2 20 20", key: "1ooewy" }],
  [
    "path",
    {
      d: "M4.93 4.929a10 10 0 0 0-1.938 11.412 2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 0 0 11.302-1.989",
      key: "7il5tn"
    }
  ],
  ["path", { d: "M8.35 2.69A10 10 0 0 1 21.3 15.65", key: "1pfsoa" }]
], XC = e("message-circle-off", GC);
const YC = [
  [
    "path",
    {
      d: "M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 1 0-4.777-4.719",
      key: "1sd12s"
    }
  ],
  ["path", { d: "M8 12h8", key: "1wcyev" }],
  ["path", { d: "M12 8v8", key: "napkw2" }]
], KC = e("message-circle-plus", YC);
const QC = [
  [
    "path",
    {
      d: "M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 1 0-4.777-4.719",
      key: "1sd12s"
    }
  ],
  ["path", { d: "M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3", key: "1u773s" }],
  ["path", { d: "M12 17h.01", key: "p32p05" }]
], JC = e("message-circle-question-mark", QC);
const eV = [
  [
    "path",
    {
      d: "M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 1 0-4.777-4.719",
      key: "1sd12s"
    }
  ],
  ["path", { d: "m10 15-3-3 3-3", key: "1pgupc" }],
  ["path", { d: "M7 12h8a2 2 0 0 1 2 2v1", key: "89sh1g" }]
], tV = e("message-circle-reply", eV);
const aV = [
  [
    "path",
    {
      d: "M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 1 0-4.777-4.719",
      key: "1sd12s"
    }
  ],
  ["path", { d: "M12 8v4", key: "1got3b" }],
  ["path", { d: "M12 16h.01", key: "1drbdi" }]
], oV = e("message-circle-warning", aV);
const nV = [
  [
    "path",
    {
      d: "M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 1 0-4.777-4.719",
      key: "1sd12s"
    }
  ],
  ["path", { d: "m15 9-6 6", key: "1uzhvr" }],
  ["path", { d: "m9 9 6 6", key: "z0biqf" }]
], cV = e("message-circle-x", nV);
const rV = [
  [
    "path",
    {
      d: "M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 1 0-4.777-4.719",
      key: "1sd12s"
    }
  ]
], hV = e("message-circle", rV);
const dV = [
  [
    "path",
    {
      d: "M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z",
      key: "18887p"
    }
  ],
  ["path", { d: "m10 8-3 3 3 3", key: "fp6dz7" }],
  ["path", { d: "m14 14 3-3-3-3", key: "1yrceu" }]
], iV = e("message-square-code", dV);
const sV = [
  ["path", { d: "M14 3h2", key: "1d12a5" }],
  ["path", { d: "M16 19h-2", key: "1agirb" }],
  ["path", { d: "M2 12v-2", key: "1ey295" }],
  ["path", { d: "M2 16v5.286a.71.71 0 0 0 1.212.502l1.149-1.149", key: "120k8q" }],
  ["path", { d: "M20 19a2 2 0 0 0 2-2v-1", key: "ior8tn" }],
  ["path", { d: "M22 10v2", key: "rmlecy" }],
  ["path", { d: "M22 6V5a2 2 0 0 0-2-2", key: "sp3k6r" }],
  ["path", { d: "M4 3a2 2 0 0 0-2 2v1", key: "11zt7s" }],
  ["path", { d: "M8 19h2", key: "jnunrx" }],
  ["path", { d: "M8 3h2", key: "ysbsee" }]
], yV = e("message-square-dashed", sV);
const pV = [
  [
    "path",
    {
      d: "M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z",
      key: "18887p"
    }
  ],
  ["path", { d: "M10 15h4", key: "192ueg" }],
  ["path", { d: "M10 9h4", key: "u4k05v" }],
  ["path", { d: "M12 7v4", key: "xawao1" }]
], kV = e("message-square-diff", pV);
const lV = [
  [
    "path",
    {
      d: "M12.7 3H4a2 2 0 0 0-2 2v16.286a.71.71 0 0 0 1.212.502l2.202-2.202A2 2 0 0 1 6.828 19H20a2 2 0 0 0 2-2v-4.7",
      key: "wjb7ig"
    }
  ],
  ["circle", { cx: "19", cy: "6", r: "3", key: "108a5v" }]
], uV = e("message-square-dot", lV);
const MV = [
  [
    "path",
    {
      d: "M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z",
      key: "18887p"
    }
  ],
  [
    "path",
    {
      d: "M7.5 9.5c0 .687.265 1.383.697 1.844l3.009 3.264a1.14 1.14 0 0 0 .407.314 1 1 0 0 0 .783-.004 1.14 1.14 0 0 0 .398-.31l3.008-3.264A2.77 2.77 0 0 0 16.5 9.5 2.5 2.5 0 0 0 12 8a2.5 2.5 0 0 0-4.5 1.5",
      key: "1faxuh"
    }
  ]
], fV = e("message-square-heart", MV);
const mV = [
  [
    "path",
    {
      d: "M22 8.5V5a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v16.286a.71.71 0 0 0 1.212.502l2.202-2.202A2 2 0 0 1 6.828 19H10",
      key: "fu6chl"
    }
  ],
  ["path", { d: "M20 15v-2a2 2 0 0 0-4 0v2", key: "vl8a78" }],
  ["rect", { x: "14", y: "15", width: "8", height: "5", rx: "1", key: "37aafw" }]
], vV = e("message-square-lock", mV);
const gV = [
  [
    "path",
    {
      d: "M19 19H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.7.7 0 0 1 2 21.286V5a2 2 0 0 1 1.184-1.826",
      key: "1wyg69"
    }
  ],
  ["path", { d: "m2 2 20 20", key: "1ooewy" }],
  ["path", { d: "M8.656 3H20a2 2 0 0 1 2 2v11.344", key: "mhl4k6" }]
], _V = e("message-square-off", gV);
const xV = [
  [
    "path",
    {
      d: "M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z",
      key: "18887p"
    }
  ],
  ["path", { d: "M12 11h.01", key: "z322tv" }],
  ["path", { d: "M16 11h.01", key: "xkw8gn" }],
  ["path", { d: "M8 11h.01", key: "1dfujw" }]
], bV = e("message-square-more", xV);
const wV = [
  [
    "path",
    {
      d: "M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z",
      key: "18887p"
    }
  ],
  ["path", { d: "M12 8v6", key: "1ib9pf" }],
  ["path", { d: "M9 11h6", key: "1fldmi" }]
], NV = e("message-square-plus", wV);
const $V = [
  ["path", { d: "M14 14a2 2 0 0 0 2-2V8h-2", key: "1r06pg" }],
  [
    "path",
    {
      d: "M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z",
      key: "18887p"
    }
  ],
  ["path", { d: "M8 14a2 2 0 0 0 2-2V8H8", key: "1jzu5j" }]
], zV = e("message-square-quote", $V);
const jV = [
  [
    "path",
    {
      d: "M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z",
      key: "18887p"
    }
  ],
  ["path", { d: "m10 8-3 3 3 3", key: "fp6dz7" }],
  ["path", { d: "M17 14v-1a2 2 0 0 0-2-2H7", key: "1tkjnz" }]
], qV = e("message-square-reply", jV);
const AV = [
  [
    "path",
    {
      d: "M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z",
      key: "18887p"
    }
  ],
  ["path", { d: "M7 11h10", key: "1twpyw" }],
  ["path", { d: "M7 15h6", key: "d9of3u" }],
  ["path", { d: "M7 7h8", key: "af5zfr" }]
], HV = e("message-square-text", AV);
const SV = [
  [
    "path",
    {
      d: "M12 3H4a2 2 0 0 0-2 2v16.286a.71.71 0 0 0 1.212.502l2.202-2.202A2 2 0 0 1 6.828 19H20a2 2 0 0 0 2-2v-4",
      key: "11da1y"
    }
  ],
  ["path", { d: "M16 3h6v6", key: "1bx56c" }],
  ["path", { d: "m16 9 6-6", key: "m4dnic" }]
], CV = e("message-square-share", SV);
const VV = [
  [
    "path",
    {
      d: "M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z",
      key: "18887p"
    }
  ],
  ["path", { d: "M12 15h.01", key: "q59x07" }],
  ["path", { d: "M12 7v4", key: "xawao1" }]
], RV = e("message-square-warning", VV);
const EV = [
  [
    "path",
    {
      d: "M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z",
      key: "18887p"
    }
  ],
  ["path", { d: "m14.5 8.5-5 5", key: "19tnj2" }],
  ["path", { d: "m9.5 8.5 5 5", key: "1oa8ql" }]
], LV = e("message-square-x", EV);
const PV = [
  [
    "path",
    {
      d: "M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z",
      key: "18887p"
    }
  ]
], TV = e("message-square", PV);
const OV = [
  [
    "path",
    {
      d: "M16 10a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 14.286V4a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z",
      key: "1n2ejm"
    }
  ],
  [
    "path",
    {
      d: "M20 9a2 2 0 0 1 2 2v10.286a.71.71 0 0 1-1.212.502l-2.202-2.202A2 2 0 0 0 17.172 19H10a2 2 0 0 1-2-2v-1",
      key: "1qfcsi"
    }
  ]
], DV = e("messages-square", OV);
const IV = [
  ["path", { d: "M12 19v3", key: "npa21l" }],
  ["path", { d: "M15 9.34V5a3 3 0 0 0-5.68-1.33", key: "1gzdoj" }],
  ["path", { d: "M16.95 16.95A7 7 0 0 1 5 12v-2", key: "cqa7eg" }],
  ["path", { d: "M18.89 13.23A7 7 0 0 0 19 12v-2", key: "16hl24" }],
  ["path", { d: "m2 2 20 20", key: "1ooewy" }],
  ["path", { d: "M9 9v3a3 3 0 0 0 5.12 2.12", key: "r2i35w" }]
], FV = e("mic-off", IV);
const BV = [
  ["path", { d: "M12 19v3", key: "npa21l" }],
  ["path", { d: "M19 10v2a7 7 0 0 1-14 0v-2", key: "1vc78b" }],
  ["rect", { x: "9", y: "2", width: "6", height: "13", rx: "3", key: "s6n7sd" }]
], UV = e("mic", BV);
const WV = [
  [
    "path",
    {
      d: "m11 7.601-5.994 8.19a1 1 0 0 0 .1 1.298l.817.818a1 1 0 0 0 1.314.087L15.09 12",
      key: "80a601"
    }
  ],
  [
    "path",
    {
      d: "M16.5 21.174C15.5 20.5 14.372 20 13 20c-2.058 0-3.928 2.356-6 2-2.072-.356-2.775-3.369-1.5-4.5",
      key: "j0ngtp"
    }
  ],
  ["circle", { cx: "16", cy: "7", r: "5", key: "d08jfb" }]
], ZV = e("mic-vocal", WV);
const GV = [
  ["path", { d: "M10 12h4", key: "a56b0p" }],
  ["path", { d: "M10 17h4", key: "pvmtpo" }],
  ["path", { d: "M10 7h4", key: "1vgcok" }],
  ["path", { d: "M18 12h2", key: "quuxs7" }],
  ["path", { d: "M18 18h2", key: "4scel" }],
  ["path", { d: "M18 6h2", key: "1ptzki" }],
  ["path", { d: "M4 12h2", key: "1ltxp0" }],
  ["path", { d: "M4 18h2", key: "1xrofg" }],
  ["path", { d: "M4 6h2", key: "1cx33n" }],
  ["rect", { x: "6", y: "2", width: "12", height: "20", rx: "2", key: "749fme" }]
], XV = e("microchip", GV);
const YV = [
  ["path", { d: "M6 18h8", key: "1borvv" }],
  ["path", { d: "M3 22h18", key: "8prr45" }],
  ["path", { d: "M14 22a7 7 0 1 0 0-14h-1", key: "1jwaiy" }],
  ["path", { d: "M9 14h2", key: "197e7h" }],
  ["path", { d: "M9 12a2 2 0 0 1-2-2V6h6v4a2 2 0 0 1-2 2Z", key: "1bmzmy" }],
  ["path", { d: "M12 6V3a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v3", key: "1drr47" }]
], KV = e("microscope", YV);
const QV = [
  ["rect", { width: "20", height: "15", x: "2", y: "4", rx: "2", key: "2no95f" }],
  ["rect", { width: "8", height: "7", x: "6", y: "8", rx: "1", key: "zh9wx" }],
  ["path", { d: "M18 8v7", key: "o5zi4n" }],
  ["path", { d: "M6 19v2", key: "1loha6" }],
  ["path", { d: "M18 19v2", key: "1dawf0" }]
], JV = e("microwave", QV);
const eR = [
  ["path", { d: "M12 13v8", key: "1l5pq0" }],
  ["path", { d: "M12 3v3", key: "1n5kay" }],
  [
    "path",
    {
      d: "M4 6a1 1 0 0 0-1 1v5a1 1 0 0 0 1 1h13a2 2 0 0 0 1.152-.365l3.424-2.317a1 1 0 0 0 0-1.635l-3.424-2.318A2 2 0 0 0 17 6z",
      key: "1btarq"
    }
  ]
], tR = e("milestone", eR);
const aR = [
  ["path", { d: "M8 2h8", key: "1ssgc1" }],
  [
    "path",
    {
      d: "M9 2v1.343M15 2v2.789a4 4 0 0 0 .672 2.219l.656.984a4 4 0 0 1 .672 2.22v1.131M7.8 7.8l-.128.192A4 4 0 0 0 7 10.212V20a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2v-3",
      key: "y0ejgx"
    }
  ],
  ["path", { d: "M7 15a6.47 6.47 0 0 1 5 0 6.472 6.472 0 0 0 3.435.435", key: "iaxqsy" }],
  ["line", { x1: "2", x2: "22", y1: "2", y2: "22", key: "a6p6uj" }]
], oR = e("milk-off", aR);
const nR = [
  ["path", { d: "M8 2h8", key: "1ssgc1" }],
  [
    "path",
    {
      d: "M9 2v2.789a4 4 0 0 1-.672 2.219l-.656.984A4 4 0 0 0 7 10.212V20a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2v-9.789a4 4 0 0 0-.672-2.219l-.656-.984A4 4 0 0 1 15 4.788V2",
      key: "qtp12x"
    }
  ],
  ["path", { d: "M7 15a6.472 6.472 0 0 1 5 0 6.47 6.47 0 0 0 5 0", key: "ygeh44" }]
], cR = e("milk", nR);
const rR = [
  ["path", { d: "m14 10 7-7", key: "oa77jy" }],
  ["path", { d: "M20 10h-6V4", key: "mjg0md" }],
  ["path", { d: "m3 21 7-7", key: "tjx5ai" }],
  ["path", { d: "M4 14h6v6", key: "rmj7iw" }]
], hR = e("minimize-2", rR);
const dR = [
  ["path", { d: "M8 3v3a2 2 0 0 1-2 2H3", key: "hohbtr" }],
  ["path", { d: "M21 8h-3a2 2 0 0 1-2-2V3", key: "5jw1f3" }],
  ["path", { d: "M3 16h3a2 2 0 0 1 2 2v3", key: "198tvr" }],
  ["path", { d: "M16 21v-3a2 2 0 0 1 2-2h3", key: "ph8mxp" }]
], iR = e("minimize", dR);
const sR = [
  ["path", { d: "m9 10 2 2 4-4", key: "1gnqz4" }],
  ["rect", { width: "20", height: "14", x: "2", y: "3", rx: "2", key: "48i651" }],
  ["path", { d: "M12 17v4", key: "1riwvh" }],
  ["path", { d: "M8 21h8", key: "1ev6f3" }]
], yR = e("monitor-check", sR);
const pR = [["path", { d: "M5 12h14", key: "1ays0h" }]], kR = e("minus", pR);
const lR = [
  ["path", { d: "M11 13a3 3 0 1 1 2.83-4H14a2 2 0 0 1 0 4z", key: "1da4q6" }],
  ["path", { d: "M12 17v4", key: "1riwvh" }],
  ["path", { d: "M8 21h8", key: "1ev6f3" }],
  ["rect", { x: "2", y: "3", width: "20", height: "14", rx: "2", key: "x3v2xh" }]
], uR = e("monitor-cloud", lR);
const MR = [
  ["path", { d: "M12 17v4", key: "1riwvh" }],
  ["path", { d: "m14.305 7.53.923-.382", key: "1mlnsw" }],
  ["path", { d: "m15.228 4.852-.923-.383", key: "82mpwg" }],
  ["path", { d: "m16.852 3.228-.383-.924", key: "ln4sir" }],
  ["path", { d: "m16.852 8.772-.383.923", key: "1dejw0" }],
  ["path", { d: "m19.148 3.228.383-.924", key: "192kgf" }],
  ["path", { d: "m19.53 9.696-.382-.924", key: "fiavlr" }],
  ["path", { d: "m20.772 4.852.924-.383", key: "1j8mgp" }],
  ["path", { d: "m20.772 7.148.924.383", key: "zix9be" }],
  ["path", { d: "M22 13v2a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h7", key: "1tnzv8" }],
  ["path", { d: "M8 21h8", key: "1ev6f3" }],
  ["circle", { cx: "18", cy: "6", r: "3", key: "1h7g24" }]
], fR = e("monitor-cog", MR);
const mR = [
  ["path", { d: "M12 17v4", key: "1riwvh" }],
  [
    "path",
    { d: "M22 12.307V15a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h8.693", key: "1dx6ho" }
  ],
  ["path", { d: "M8 21h8", key: "1ev6f3" }],
  ["circle", { cx: "19", cy: "6", r: "3", key: "108a5v" }]
], vR = e("monitor-dot", mR);
const gR = [
  ["path", { d: "M12 13V7", key: "h0r20n" }],
  ["path", { d: "m15 10-3 3-3-3", key: "lzhmyn" }],
  ["rect", { width: "20", height: "14", x: "2", y: "3", rx: "2", key: "48i651" }],
  ["path", { d: "M12 17v4", key: "1riwvh" }],
  ["path", { d: "M8 21h8", key: "1ev6f3" }]
], _R = e("monitor-down", gR);
const xR = [
  ["path", { d: "M12 17v4", key: "1riwvh" }],
  ["path", { d: "M17 17H4a2 2 0 0 1-2-2V5a2 2 0 0 1 1.184-1.826", key: "cv7jms" }],
  ["path", { d: "m2 2 20 20", key: "1ooewy" }],
  ["path", { d: "M8 21h8", key: "1ev6f3" }],
  ["path", { d: "M8.656 3H20a2 2 0 0 1 2 2v10a2 2 0 0 1-.293 1.042", key: "z8ni2w" }]
], bR = e("monitor-off", xR);
const wR = [
  ["path", { d: "M10 13V7", key: "1u13u9" }],
  ["path", { d: "M14 13V7", key: "1vj9om" }],
  ["rect", { width: "20", height: "14", x: "2", y: "3", rx: "2", key: "48i651" }],
  ["path", { d: "M12 17v4", key: "1riwvh" }],
  ["path", { d: "M8 21h8", key: "1ev6f3" }]
], NR = e("monitor-pause", wR);
const $R = [
  [
    "path",
    {
      d: "M15.033 9.44a.647.647 0 0 1 0 1.12l-4.065 2.352a.645.645 0 0 1-.968-.56V7.648a.645.645 0 0 1 .967-.56z",
      key: "vbtd3f"
    }
  ],
  ["path", { d: "M12 17v4", key: "1riwvh" }],
  ["path", { d: "M8 21h8", key: "1ev6f3" }],
  ["rect", { x: "2", y: "3", width: "20", height: "14", rx: "2", key: "x3v2xh" }]
], zR = e("monitor-play", $R);
const jR = [
  ["path", { d: "M18 8V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h8", key: "10dyio" }],
  ["path", { d: "M10 19v-3.96 3.15", key: "1irgej" }],
  ["path", { d: "M7 19h5", key: "qswx4l" }],
  ["rect", { width: "6", height: "10", x: "16", y: "12", rx: "2", key: "1egngj" }]
], qR = e("monitor-smartphone", jR);
const AR = [
  ["path", { d: "M5.5 20H8", key: "1k40s5" }],
  ["path", { d: "M17 9h.01", key: "1j24nn" }],
  ["rect", { width: "10", height: "16", x: "12", y: "4", rx: "2", key: "ixliua" }],
  ["path", { d: "M8 6H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h4", key: "1mp6e1" }],
  ["circle", { cx: "17", cy: "15", r: "1", key: "tqvash" }]
], HR = e("monitor-speaker", AR);
const SR = [
  ["path", { d: "M12 17v4", key: "1riwvh" }],
  ["path", { d: "M8 21h8", key: "1ev6f3" }],
  ["rect", { x: "2", y: "3", width: "20", height: "14", rx: "2", key: "x3v2xh" }],
  ["rect", { x: "9", y: "7", width: "6", height: "6", rx: "1", key: "5m2oou" }]
], CR = e("monitor-stop", SR);
const VR = [
  ["path", { d: "m14.5 12.5-5-5", key: "1jahn5" }],
  ["path", { d: "m9.5 12.5 5-5", key: "1k2t7b" }],
  ["rect", { width: "20", height: "14", x: "2", y: "3", rx: "2", key: "48i651" }],
  ["path", { d: "M12 17v4", key: "1riwvh" }],
  ["path", { d: "M8 21h8", key: "1ev6f3" }]
], RR = e("monitor-x", VR);
const ER = [
  ["path", { d: "m9 10 3-3 3 3", key: "11gsxs" }],
  ["path", { d: "M12 13V7", key: "h0r20n" }],
  ["rect", { width: "20", height: "14", x: "2", y: "3", rx: "2", key: "48i651" }],
  ["path", { d: "M12 17v4", key: "1riwvh" }],
  ["path", { d: "M8 21h8", key: "1ev6f3" }]
], LR = e("monitor-up", ER);
const PR = [
  ["path", { d: "M18 5h4", key: "1lhgn2" }],
  ["path", { d: "M20 3v4", key: "1olli1" }],
  [
    "path",
    {
      d: "M20.985 12.486a9 9 0 1 1-9.473-9.472c.405-.022.617.46.402.803a6 6 0 0 0 8.268 8.268c.344-.215.825-.004.803.401",
      key: "kfwtm"
    }
  ]
], TR = e("moon-star", PR);
const OR = [
  ["rect", { width: "20", height: "14", x: "2", y: "3", rx: "2", key: "48i651" }],
  ["line", { x1: "8", x2: "16", y1: "21", y2: "21", key: "1svkeh" }],
  ["line", { x1: "12", x2: "12", y1: "17", y2: "21", key: "vw1qmm" }]
], DR = e("monitor", OR);
const IR = [
  [
    "path",
    {
      d: "M20.985 12.486a9 9 0 1 1-9.473-9.472c.405-.022.617.46.402.803a6 6 0 0 0 8.268 8.268c.344-.215.825-.004.803.401",
      key: "kfwtm"
    }
  ]
], FR = e("moon", IR);
const BR = [
  ["path", { d: "m18 14-1-3", key: "bdajw9" }],
  ["path", { d: "m3 9 6 2a2 2 0 0 1 2-2h2a2 2 0 0 1 1.99 1.81", key: "f5fotj" }],
  [
    "path",
    { d: "M8 17h3a1 1 0 0 0 1-1 6 6 0 0 1 6-6 1 1 0 0 0 1-1v-.75A5 5 0 0 0 17 5", key: "3i90e2" }
  ],
  ["circle", { cx: "19", cy: "17", r: "3", key: "1otbdv" }],
  ["circle", { cx: "5", cy: "17", r: "3", key: "1d8p0c" }]
], UR = e("motorbike", BR);
const WR = [
  ["path", { d: "m8 3 4 8 5-5 5 15H2L8 3z", key: "otkl63" }],
  [
    "path",
    { d: "M4.14 15.08c2.62-1.57 5.24-1.43 7.86.42 2.74 1.94 5.49 2 8.23.19", key: "1pvmmp" }
  ]
], ZR = e("mountain-snow", WR);
const GR = [["path", { d: "m8 3 4 8 5-5 5 15H2L8 3z", key: "otkl63" }]], XR = e("mountain", GR);
const YR = [
  ["path", { d: "M12 6v.343", key: "1gyhex" }],
  ["path", { d: "M18.218 18.218A7 7 0 0 1 5 15V9a7 7 0 0 1 .782-3.218", key: "ukzz01" }],
  ["path", { d: "M19 13.343V9A7 7 0 0 0 8.56 2.902", key: "104jy9" }],
  ["path", { d: "M22 22 2 2", key: "1r8tn9" }]
], KR = e("mouse-off", YR);
const QR = [
  [
    "path",
    {
      d: "m15.55 8.45 5.138 2.087a.5.5 0 0 1-.063.947l-6.124 1.58a2 2 0 0 0-1.438 1.435l-1.579 6.126a.5.5 0 0 1-.947.063L8.45 15.551",
      key: "1qoshx"
    }
  ],
  ["path", { d: "M22 2 2 22", key: "y4kqgn" }],
  ["path", { d: "m6.816 11.528-2.779-6.84a.495.495 0 0 1 .651-.651l6.84 2.779", key: "mymuvk" }]
], JR = e("mouse-pointer-2-off", QR);
const eE = [
  [
    "path",
    {
      d: "M4.037 4.688a.495.495 0 0 1 .651-.651l16 6.5a.5.5 0 0 1-.063.947l-6.124 1.58a2 2 0 0 0-1.438 1.435l-1.579 6.126a.5.5 0 0 1-.947.063z",
      key: "edeuup"
    }
  ]
], tE = e("mouse-pointer-2", eE);
const aE = [
  [
    "path",
    {
      d: "M2.034 2.681a.498.498 0 0 1 .647-.647l9 3.5a.5.5 0 0 1-.033.944L8.204 7.545a1 1 0 0 0-.66.66l-1.066 3.443a.5.5 0 0 1-.944.033z",
      key: "11pp1i"
    }
  ],
  ["circle", { cx: "16", cy: "16", r: "6", key: "qoo3c4" }],
  ["path", { d: "m11.8 11.8 8.4 8.4", key: "oogvdj" }]
], oE = e("mouse-pointer-ban", aE);
const nE = [
  ["path", { d: "M14 4.1 12 6", key: "ita8i4" }],
  ["path", { d: "m5.1 8-2.9-.8", key: "1go3kf" }],
  ["path", { d: "m6 12-1.9 2", key: "mnht97" }],
  ["path", { d: "M7.2 2.2 8 5.1", key: "1cfko1" }],
  [
    "path",
    {
      d: "M9.037 9.69a.498.498 0 0 1 .653-.653l11 4.5a.5.5 0 0 1-.074.949l-4.349 1.041a1 1 0 0 0-.74.739l-1.04 4.35a.5.5 0 0 1-.95.074z",
      key: "s0h3yz"
    }
  ]
], cE = e("mouse-pointer-click", nE);
const rE = [
  ["path", { d: "M12.586 12.586 19 19", key: "ea5xo7" }],
  [
    "path",
    {
      d: "M3.688 3.037a.497.497 0 0 0-.651.651l6.5 15.999a.501.501 0 0 0 .947-.062l1.569-6.083a2 2 0 0 1 1.448-1.479l6.124-1.579a.5.5 0 0 0 .063-.947z",
      key: "277e5u"
    }
  ]
], hE = e("mouse-pointer", rE);
const dE = [
  ["rect", { x: "5", y: "2", width: "14", height: "20", rx: "7", key: "11ol66" }],
  ["path", { d: "M12 6v4", key: "16clxf" }]
], iE = e("mouse", dE);
const sE = [
  ["path", { d: "M5 3v16h16", key: "1mqmf9" }],
  ["path", { d: "m5 19 6-6", key: "jh6hbb" }],
  ["path", { d: "m2 6 3-3 3 3", key: "tkyvxa" }],
  ["path", { d: "m18 16 3 3-3 3", key: "1d4glt" }]
], yE = e("move-3d", sE);
const pE = [
  ["path", { d: "M19 13v6h-6", key: "1hxl6d" }],
  ["path", { d: "M5 11V5h6", key: "12e2xe" }],
  ["path", { d: "m5 5 14 14", key: "11anup" }]
], kE = e("move-diagonal-2", pE);
const lE = [
  ["path", { d: "M11 19H5v-6", key: "8awifj" }],
  ["path", { d: "M13 5h6v6", key: "7voy1q" }],
  ["path", { d: "M19 5 5 19", key: "wwaj1z" }]
], uE = e("move-diagonal", lE);
const ME = [
  ["path", { d: "M11 19H5V13", key: "1akmht" }],
  ["path", { d: "M19 5L5 19", key: "72u4yj" }]
], fE = e("move-down-left", ME);
const mE = [
  ["path", { d: "M19 13V19H13", key: "10vkzq" }],
  ["path", { d: "M5 5L19 19", key: "5zm2fv" }]
], vE = e("move-down-right", mE);
const gE = [
  ["path", { d: "M8 18L12 22L16 18", key: "cskvfv" }],
  ["path", { d: "M12 2V22", key: "r89rzk" }]
], _E = e("move-down", gE);
const xE = [
  ["path", { d: "m18 8 4 4-4 4", key: "1ak13k" }],
  ["path", { d: "M2 12h20", key: "9i4pu4" }],
  ["path", { d: "m6 8-4 4 4 4", key: "15zrgr" }]
], bE = e("move-horizontal", xE);
const wE = [
  ["path", { d: "M6 8L2 12L6 16", key: "kyvwex" }],
  ["path", { d: "M2 12H22", key: "1m8cig" }]
], NE = e("move-left", wE);
const $E = [
  ["path", { d: "M18 8L22 12L18 16", key: "1r0oui" }],
  ["path", { d: "M2 12H22", key: "1m8cig" }]
], zE = e("move-right", $E);
const jE = [
  ["path", { d: "M5 11V5H11", key: "3q78g9" }],
  ["path", { d: "M5 5L19 19", key: "5zm2fv" }]
], qE = e("move-up-left", jE);
const AE = [
  ["path", { d: "M8 6L12 2L16 6", key: "1yvkyx" }],
  ["path", { d: "M12 2V22", key: "r89rzk" }]
], HE = e("move-up", AE);
const SE = [
  ["path", { d: "M13 5H19V11", key: "1n1gyv" }],
  ["path", { d: "M19 5L5 19", key: "72u4yj" }]
], CE = e("move-up-right", SE);
const VE = [
  ["path", { d: "M12 2v20", key: "t6zp3m" }],
  ["path", { d: "m15 19-3 3-3-3", key: "11eu04" }],
  ["path", { d: "m19 9 3 3-3 3", key: "1mg7y2" }],
  ["path", { d: "M2 12h20", key: "9i4pu4" }],
  ["path", { d: "m5 9-3 3 3 3", key: "j64kie" }],
  ["path", { d: "m9 5 3-3 3 3", key: "l8vdw6" }]
], RE = e("move", VE);
const EE = [
  ["path", { d: "M12 2v20", key: "t6zp3m" }],
  ["path", { d: "m8 18 4 4 4-4", key: "bh5tu3" }],
  ["path", { d: "m8 6 4-4 4 4", key: "ybng9g" }]
], LE = e("move-vertical", EE);
const PE = [
  ["circle", { cx: "8", cy: "18", r: "4", key: "1fc0mg" }],
  ["path", { d: "M12 18V2l7 4", key: "g04rme" }]
], TE = e("music-2", PE);
const OE = [
  ["circle", { cx: "12", cy: "18", r: "4", key: "m3r9ws" }],
  ["path", { d: "M16 18V2", key: "40x2m5" }]
], DE = e("music-3", OE);
const IE = [
  ["path", { d: "M9 18V5l12-2v13", key: "1jmyc2" }],
  ["path", { d: "m9 9 12-2", key: "1e64n2" }],
  ["circle", { cx: "6", cy: "18", r: "3", key: "fqmcym" }],
  ["circle", { cx: "18", cy: "16", r: "3", key: "1hluhg" }]
], FE = e("music-4", IE);
const BE = [
  ["path", { d: "M9 18V5l12-2v13", key: "1jmyc2" }],
  ["circle", { cx: "6", cy: "18", r: "3", key: "fqmcym" }],
  ["circle", { cx: "18", cy: "16", r: "3", key: "1hluhg" }]
], UE = e("music", BE);
const WE = [
  ["path", { d: "M9.31 9.31 5 21l7-4 7 4-1.17-3.17", key: "qoq2o2" }],
  ["path", { d: "M14.53 8.88 12 2l-1.17 3.17", key: "k3sjzy" }],
  ["line", { x1: "2", x2: "22", y1: "2", y2: "22", key: "a6p6uj" }]
], ZE = e("navigation-2-off", WE);
const GE = [
  ["polygon", { points: "12 2 19 21 12 17 5 21 12 2", key: "x8c0qg" }]
], XE = e("navigation-2", GE);
const YE = [
  ["path", { d: "M8.43 8.43 3 11l8 2 2 8 2.57-5.43", key: "1vdtb7" }],
  ["path", { d: "M17.39 11.73 22 2l-9.73 4.61", key: "tya3r6" }],
  ["line", { x1: "2", x2: "22", y1: "2", y2: "22", key: "a6p6uj" }]
], KE = e("navigation-off", YE);
const QE = [
  ["polygon", { points: "3 11 22 2 13 21 11 13 3 11", key: "1ltx0t" }]
], JE = e("navigation", QE);
const eL = [
  ["rect", { x: "16", y: "16", width: "6", height: "6", rx: "1", key: "4q2zg0" }],
  ["rect", { x: "2", y: "16", width: "6", height: "6", rx: "1", key: "8cvhb9" }],
  ["rect", { x: "9", y: "2", width: "6", height: "6", rx: "1", key: "1egb70" }],
  ["path", { d: "M5 16v-3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v3", key: "1jsf9p" }],
  ["path", { d: "M12 12V8", key: "2874zd" }]
], tL = e("network", eL);
const aL = [
  ["path", { d: "M15 18h-5", key: "95g1m2" }],
  ["path", { d: "M18 14h-8", key: "sponae" }],
  [
    "path",
    {
      d: "M4 22h16a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v16a2 2 0 0 1-4 0v-9a2 2 0 0 1 2-2h2",
      key: "39pd36"
    }
  ],
  ["rect", { width: "8", height: "4", x: "10", y: "6", rx: "1", key: "aywv1n" }]
], oL = e("newspaper", aL);
const nL = [
  ["path", { d: "M6 8.32a7.43 7.43 0 0 1 0 7.36", key: "9iaqei" }],
  ["path", { d: "M9.46 6.21a11.76 11.76 0 0 1 0 11.58", key: "1yha7l" }],
  ["path", { d: "M12.91 4.1a15.91 15.91 0 0 1 .01 15.8", key: "4iu2gk" }],
  ["path", { d: "M16.37 2a20.16 20.16 0 0 1 0 20", key: "sap9u2" }]
], cL = e("nfc", nL);
const rL = [
  ["path", { d: "M12 2v10", key: "mnfbl" }],
  ["path", { d: "m8.5 4 7 4", key: "m1xjk3" }],
  ["path", { d: "m8.5 8 7-4", key: "t0m5j6" }],
  ["circle", { cx: "12", cy: "17", r: "5", key: "qbz8iq" }]
], hL = e("non-binary", rL);
const dL = [
  ["path", { d: "M13.4 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-7.4", key: "re6nr2" }],
  ["path", { d: "M2 6h4", key: "aawbzj" }],
  ["path", { d: "M2 10h4", key: "l0bgd4" }],
  ["path", { d: "M2 14h4", key: "1gsvsf" }],
  ["path", { d: "M2 18h4", key: "1bu2t1" }],
  [
    "path",
    {
      d: "M21.378 5.626a1 1 0 1 0-3.004-3.004l-5.01 5.012a2 2 0 0 0-.506.854l-.837 2.87a.5.5 0 0 0 .62.62l2.87-.837a2 2 0 0 0 .854-.506z",
      key: "pqwjuv"
    }
  ]
], iL = e("notebook-pen", dL);
const sL = [
  ["path", { d: "M2 6h4", key: "aawbzj" }],
  ["path", { d: "M2 10h4", key: "l0bgd4" }],
  ["path", { d: "M2 14h4", key: "1gsvsf" }],
  ["path", { d: "M2 18h4", key: "1bu2t1" }],
  ["rect", { width: "16", height: "20", x: "4", y: "2", rx: "2", key: "1nb95v" }],
  ["path", { d: "M15 2v20", key: "dcj49h" }],
  ["path", { d: "M15 7h5", key: "1xj5lc" }],
  ["path", { d: "M15 12h5", key: "w5shd9" }],
  ["path", { d: "M15 17h5", key: "1qaofu" }]
], yL = e("notebook-tabs", sL);
const pL = [
  ["path", { d: "M2 6h4", key: "aawbzj" }],
  ["path", { d: "M2 10h4", key: "l0bgd4" }],
  ["path", { d: "M2 14h4", key: "1gsvsf" }],
  ["path", { d: "M2 18h4", key: "1bu2t1" }],
  ["rect", { width: "16", height: "20", x: "4", y: "2", rx: "2", key: "1nb95v" }],
  ["path", { d: "M9.5 8h5", key: "11mslq" }],
  ["path", { d: "M9.5 12H16", key: "ktog6x" }],
  ["path", { d: "M9.5 16H14", key: "p1seyn" }]
], kL = e("notebook-text", pL);
const lL = [
  ["path", { d: "M2 6h4", key: "aawbzj" }],
  ["path", { d: "M2 10h4", key: "l0bgd4" }],
  ["path", { d: "M2 14h4", key: "1gsvsf" }],
  ["path", { d: "M2 18h4", key: "1bu2t1" }],
  ["rect", { width: "16", height: "20", x: "4", y: "2", rx: "2", key: "1nb95v" }],
  ["path", { d: "M16 2v20", key: "rotuqe" }]
], uL = e("notebook", lL);
const ML = [
  ["path", { d: "M8 2v4", key: "1cmpym" }],
  ["path", { d: "M12 2v4", key: "3427ic" }],
  ["path", { d: "M16 2v4", key: "4m81vk" }],
  ["path", { d: "M16 4h2a2 2 0 0 1 2 2v2", key: "j91f56" }],
  ["path", { d: "M20 12v2", key: "w8o0tu" }],
  ["path", { d: "M20 18v2a2 2 0 0 1-2 2h-1", key: "1c9ggx" }],
  ["path", { d: "M13 22h-2", key: "191ugt" }],
  ["path", { d: "M7 22H6a2 2 0 0 1-2-2v-2", key: "1rt9px" }],
  ["path", { d: "M4 14v-2", key: "1v0sqh" }],
  ["path", { d: "M4 8V6a2 2 0 0 1 2-2h2", key: "1mwabg" }],
  ["path", { d: "M8 10h6", key: "3oa6kw" }],
  ["path", { d: "M8 14h8", key: "1fgep2" }],
  ["path", { d: "M8 18h5", key: "17enja" }]
], fL = e("notepad-text-dashed", ML);
const mL = [
  ["path", { d: "M8 2v4", key: "1cmpym" }],
  ["path", { d: "M12 2v4", key: "3427ic" }],
  ["path", { d: "M16 2v4", key: "4m81vk" }],
  ["rect", { width: "16", height: "18", x: "4", y: "4", rx: "2", key: "1u9h20" }],
  ["path", { d: "M8 10h6", key: "3oa6kw" }],
  ["path", { d: "M8 14h8", key: "1fgep2" }],
  ["path", { d: "M8 18h5", key: "17enja" }]
], vL = e("notepad-text", mL);
const gL = [
  ["path", { d: "M12 4V2", key: "1k5q1u" }],
  [
    "path",
    {
      d: "M5 10v4a7.004 7.004 0 0 0 5.277 6.787c.412.104.802.292 1.102.592L12 22l.621-.621c.3-.3.69-.488 1.102-.592a7.01 7.01 0 0 0 4.125-2.939",
      key: "1xcvy9"
    }
  ],
  ["path", { d: "M19 10v3.343", key: "163tfc" }],
  [
    "path",
    {
      d: "M12 12c-1.349-.573-1.905-1.005-2.5-2-.546.902-1.048 1.353-2.5 2-1.018-.644-1.46-1.08-2-2-1.028.71-1.69.918-3 1 1.081-1.048 1.757-2.03 2-3 .194-.776.84-1.551 1.79-2.21m11.654 5.997c.887-.457 1.28-.891 1.556-1.787 1.032.916 1.683 1.157 3 1-1.297-1.036-1.758-2.03-2-3-.5-2-4-4-8-4-.74 0-1.461.068-2.15.192",
      key: "17914v"
    }
  ],
  ["line", { x1: "2", x2: "22", y1: "2", y2: "22", key: "a6p6uj" }]
], _L = e("nut-off", gL);
const xL = [
  ["path", { d: "M12 4V2", key: "1k5q1u" }],
  [
    "path",
    {
      d: "M5 10v4a7.004 7.004 0 0 0 5.277 6.787c.412.104.802.292 1.102.592L12 22l.621-.621c.3-.3.69-.488 1.102-.592A7.003 7.003 0 0 0 19 14v-4",
      key: "1tgyif"
    }
  ],
  [
    "path",
    {
      d: "M12 4C8 4 4.5 6 4 8c-.243.97-.919 1.952-2 3 1.31-.082 1.972-.29 3-1 .54.92.982 1.356 2 2 1.452-.647 1.954-1.098 2.5-2 .595.995 1.151 1.427 2.5 2 1.31-.621 1.862-1.058 2.5-2 .629.977 1.162 1.423 2.5 2 1.209-.548 1.68-.967 2-2 1.032.916 1.683 1.157 3 1-1.297-1.036-1.758-2.03-2-3-.5-2-4-4-8-4Z",
      key: "tnsqj"
    }
  ]
], bL = e("nut", xL);
const wL = [
  ["path", { d: "M12 16h.01", key: "1drbdi" }],
  ["path", { d: "M12 8v4", key: "1got3b" }],
  [
    "path",
    {
      d: "M15.312 2a2 2 0 0 1 1.414.586l4.688 4.688A2 2 0 0 1 22 8.688v6.624a2 2 0 0 1-.586 1.414l-4.688 4.688a2 2 0 0 1-1.414.586H8.688a2 2 0 0 1-1.414-.586l-4.688-4.688A2 2 0 0 1 2 15.312V8.688a2 2 0 0 1 .586-1.414l4.688-4.688A2 2 0 0 1 8.688 2z",
      key: "1fd625"
    }
  ]
], NL = e("octagon-alert", wL);
const $L = [
  [
    "path",
    {
      d: "M2.586 16.726A2 2 0 0 1 2 15.312V8.688a2 2 0 0 1 .586-1.414l4.688-4.688A2 2 0 0 1 8.688 2h6.624a2 2 0 0 1 1.414.586l4.688 4.688A2 2 0 0 1 22 8.688v6.624a2 2 0 0 1-.586 1.414l-4.688 4.688a2 2 0 0 1-1.414.586H8.688a2 2 0 0 1-1.414-.586z",
      key: "2d38gg"
    }
  ],
  ["path", { d: "M8 12h8", key: "1wcyev" }]
], zL = e("octagon-minus", $L);
const jL = [
  ["path", { d: "M10 15V9", key: "1lckn7" }],
  ["path", { d: "M14 15V9", key: "1muqhk" }],
  [
    "path",
    {
      d: "M2.586 16.726A2 2 0 0 1 2 15.312V8.688a2 2 0 0 1 .586-1.414l4.688-4.688A2 2 0 0 1 8.688 2h6.624a2 2 0 0 1 1.414.586l4.688 4.688A2 2 0 0 1 22 8.688v6.624a2 2 0 0 1-.586 1.414l-4.688 4.688a2 2 0 0 1-1.414.586H8.688a2 2 0 0 1-1.414-.586z",
      key: "2d38gg"
    }
  ]
], qL = e("octagon-pause", jL);
const AL = [
  ["path", { d: "m15 9-6 6", key: "1uzhvr" }],
  [
    "path",
    {
      d: "M2.586 16.726A2 2 0 0 1 2 15.312V8.688a2 2 0 0 1 .586-1.414l4.688-4.688A2 2 0 0 1 8.688 2h6.624a2 2 0 0 1 1.414.586l4.688 4.688A2 2 0 0 1 22 8.688v6.624a2 2 0 0 1-.586 1.414l-4.688 4.688a2 2 0 0 1-1.414.586H8.688a2 2 0 0 1-1.414-.586z",
      key: "2d38gg"
    }
  ],
  ["path", { d: "m9 9 6 6", key: "z0biqf" }]
], HL = e("octagon-x", AL);
const SL = [
  [
    "path",
    {
      d: "M2.586 16.726A2 2 0 0 1 2 15.312V8.688a2 2 0 0 1 .586-1.414l4.688-4.688A2 2 0 0 1 8.688 2h6.624a2 2 0 0 1 1.414.586l4.688 4.688A2 2 0 0 1 22 8.688v6.624a2 2 0 0 1-.586 1.414l-4.688 4.688a2 2 0 0 1-1.414.586H8.688a2 2 0 0 1-1.414-.586z",
      key: "2d38gg"
    }
  ]
], CL = e("octagon", SL);
const VL = [
  [
    "path",
    {
      d: "M3 20h4.5a.5.5 0 0 0 .5-.5v-.282a.52.52 0 0 0-.247-.437 8 8 0 1 1 8.494-.001.52.52 0 0 0-.247.438v.282a.5.5 0 0 0 .5.5H21",
      key: "1x94xo"
    }
  ]
], RL = e("omega", VL);
const EL = [
  ["path", { d: "M3 3h6l6 18h6", key: "ph9rgk" }],
  ["path", { d: "M14 3h7", key: "16f0ms" }]
], LL = e("option", EL);
const PL = [
  ["path", { d: "M20.341 6.484A10 10 0 0 1 10.266 21.85", key: "1enhxb" }],
  ["path", { d: "M3.659 17.516A10 10 0 0 1 13.74 2.152", key: "1crzgf" }],
  ["circle", { cx: "12", cy: "12", r: "3", key: "1v7zrd" }],
  ["circle", { cx: "19", cy: "5", r: "2", key: "mhkx31" }],
  ["circle", { cx: "5", cy: "19", r: "2", key: "v8kfzx" }]
], TL = e("orbit", PL);
const OL = [
  ["path", { d: "M12 12V4a1 1 0 0 1 1-1h6.297a1 1 0 0 1 .651 1.759l-4.696 4.025", key: "1bx4vc" }],
  [
    "path",
    {
      d: "m12 21-7.414-7.414A2 2 0 0 1 4 12.172V6.415a1.002 1.002 0 0 1 1.707-.707L20 20.009",
      key: "1h3km6"
    }
  ],
  [
    "path",
    {
      d: "m12.214 3.381 8.414 14.966a1 1 0 0 1-.167 1.199l-1.168 1.163a1 1 0 0 1-.706.291H6.351a1 1 0 0 1-.625-.219L3.25 18.8a1 1 0 0 1 .631-1.781l4.165.027",
      key: "1hj4wg"
    }
  ]
], DL = e("origami", OL);
const IL = [
  ["path", { d: "M12 3v6", key: "1holv5" }],
  [
    "path",
    {
      d: "M16.76 3a2 2 0 0 1 1.8 1.1l2.23 4.479a2 2 0 0 1 .21.891V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V9.472a2 2 0 0 1 .211-.894L5.45 4.1A2 2 0 0 1 7.24 3z",
      key: "187q7i"
    }
  ],
  ["path", { d: "M3.054 9.013h17.893", key: "grwhos" }]
], FL = e("package-2", IL);
const BL = [
  ["path", { d: "m16 16 2 2 4-4", key: "gfu2re" }],
  [
    "path",
    {
      d: "M21 10V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l2-1.14",
      key: "e7tb2h"
    }
  ],
  ["path", { d: "m7.5 4.27 9 5.15", key: "1c824w" }],
  ["polyline", { points: "3.29 7 12 12 20.71 7", key: "ousv84" }],
  ["line", { x1: "12", x2: "12", y1: "22", y2: "12", key: "a4e8g8" }]
], UL = e("package-check", BL);
const WL = [
  ["path", { d: "M16 16h6", key: "100bgy" }],
  [
    "path",
    {
      d: "M21 10V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l2-1.14",
      key: "e7tb2h"
    }
  ],
  ["path", { d: "m7.5 4.27 9 5.15", key: "1c824w" }],
  ["polyline", { points: "3.29 7 12 12 20.71 7", key: "ousv84" }],
  ["line", { x1: "12", x2: "12", y1: "22", y2: "12", key: "a4e8g8" }]
], ZL = e("package-minus", WL);
const GL = [
  ["path", { d: "M12 22v-9", key: "x3hkom" }],
  [
    "path",
    {
      d: "M15.17 2.21a1.67 1.67 0 0 1 1.63 0L21 4.57a1.93 1.93 0 0 1 0 3.36L8.82 14.79a1.655 1.655 0 0 1-1.64 0L3 12.43a1.93 1.93 0 0 1 0-3.36z",
      key: "2ntwy6"
    }
  ],
  [
    "path",
    {
      d: "M20 13v3.87a2.06 2.06 0 0 1-1.11 1.83l-6 3.08a1.93 1.93 0 0 1-1.78 0l-6-3.08A2.06 2.06 0 0 1 4 16.87V13",
      key: "1pmm1c"
    }
  ],
  [
    "path",
    {
      d: "M21 12.43a1.93 1.93 0 0 0 0-3.36L8.83 2.2a1.64 1.64 0 0 0-1.63 0L3 4.57a1.93 1.93 0 0 0 0 3.36l12.18 6.86a1.636 1.636 0 0 0 1.63 0z",
      key: "12ttoo"
    }
  ]
], XL = e("package-open", GL);
const YL = [
  ["path", { d: "M16 16h6", key: "100bgy" }],
  ["path", { d: "M19 13v6", key: "85cyf1" }],
  [
    "path",
    {
      d: "M21 10V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l2-1.14",
      key: "e7tb2h"
    }
  ],
  ["path", { d: "m7.5 4.27 9 5.15", key: "1c824w" }],
  ["polyline", { points: "3.29 7 12 12 20.71 7", key: "ousv84" }],
  ["line", { x1: "12", x2: "12", y1: "22", y2: "12", key: "a4e8g8" }]
], KL = e("package-plus", YL);
const QL = [
  [
    "path",
    {
      d: "M21 10V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l2-1.14",
      key: "e7tb2h"
    }
  ],
  ["path", { d: "m7.5 4.27 9 5.15", key: "1c824w" }],
  ["polyline", { points: "3.29 7 12 12 20.71 7", key: "ousv84" }],
  ["line", { x1: "12", x2: "12", y1: "22", y2: "12", key: "a4e8g8" }],
  ["circle", { cx: "18.5", cy: "15.5", r: "2.5", key: "b5zd12" }],
  ["path", { d: "M20.27 17.27 22 19", key: "1l4muz" }]
], JL = e("package-search", QL);
const eP = [
  [
    "path",
    {
      d: "M21 10V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l2-1.14",
      key: "e7tb2h"
    }
  ],
  ["path", { d: "m7.5 4.27 9 5.15", key: "1c824w" }],
  ["polyline", { points: "3.29 7 12 12 20.71 7", key: "ousv84" }],
  ["line", { x1: "12", x2: "12", y1: "22", y2: "12", key: "a4e8g8" }],
  ["path", { d: "m17 13 5 5m-5 0 5-5", key: "im3w4b" }]
], tP = e("package-x", eP);
const aP = [
  [
    "path",
    {
      d: "M11 21.73a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73z",
      key: "1a0edw"
    }
  ],
  ["path", { d: "M12 22V12", key: "d0xqtd" }],
  ["polyline", { points: "3.29 7 12 12 20.71 7", key: "ousv84" }],
  ["path", { d: "m7.5 4.27 9 5.15", key: "1c824w" }]
], oP = e("package", aP);
const nP = [
  ["path", { d: "M11 7 6 2", key: "1jwth8" }],
  ["path", { d: "M18.992 12H2.041", key: "xw1gg" }],
  [
    "path",
    {
      d: "M21.145 18.38A3.34 3.34 0 0 1 20 16.5a3.3 3.3 0 0 1-1.145 1.88c-.575.46-.855 1.02-.855 1.595A2 2 0 0 0 20 22a2 2 0 0 0 2-2.025c0-.58-.285-1.13-.855-1.595",
      key: "1nkol4"
    }
  ],
  [
    "path",
    {
      d: "m8.5 4.5 2.148-2.148a1.205 1.205 0 0 1 1.704 0l7.296 7.296a1.205 1.205 0 0 1 0 1.704l-7.592 7.592a3.615 3.615 0 0 1-5.112 0l-3.888-3.888a3.615 3.615 0 0 1 0-5.112L5.67 7.33",
      key: "1nk1rd"
    }
  ]
], cP = e("paint-bucket", nP);
const rP = [
  ["rect", { width: "16", height: "6", x: "2", y: "2", rx: "2", key: "jcyz7m" }],
  ["path", { d: "M10 16v-2a2 2 0 0 1 2-2h8a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-2", key: "1b9h7c" }],
  ["rect", { width: "4", height: "6", x: "8", y: "16", rx: "1", key: "d6e7yl" }]
], hP = e("paint-roller", rP);
const dP = [
  ["path", { d: "M10 2v2", key: "7u0qdc" }],
  ["path", { d: "M14 2v4", key: "qmzblu" }],
  ["path", { d: "M17 2a1 1 0 0 1 1 1v9H6V3a1 1 0 0 1 1-1z", key: "ycvu00" }],
  [
    "path",
    {
      d: "M6 12a1 1 0 0 0-1 1v1a2 2 0 0 0 2 2h2a1 1 0 0 1 1 1v2.9a2 2 0 1 0 4 0V17a1 1 0 0 1 1-1h2a2 2 0 0 0 2-2v-1a1 1 0 0 0-1-1",
      key: "iw4wnp"
    }
  ]
], iP = e("paintbrush-vertical", dP);
const sP = [
  ["path", { d: "m14.622 17.897-10.68-2.913", key: "vj2p1u" }],
  [
    "path",
    {
      d: "M18.376 2.622a1 1 0 1 1 3.002 3.002L17.36 9.643a.5.5 0 0 0 0 .707l.944.944a2.41 2.41 0 0 1 0 3.408l-.944.944a.5.5 0 0 1-.707 0L8.354 7.348a.5.5 0 0 1 0-.707l.944-.944a2.41 2.41 0 0 1 3.408 0l.944.944a.5.5 0 0 0 .707 0z",
      key: "18tc5c"
    }
  ],
  [
    "path",
    {
      d: "M9 8c-1.804 2.71-3.97 3.46-6.583 3.948a.507.507 0 0 0-.302.819l7.32 8.883a1 1 0 0 0 1.185.204C12.735 20.405 16 16.792 16 15",
      key: "ytzfxy"
    }
  ]
], yP = e("paintbrush", sP);
const pP = [
  [
    "path",
    {
      d: "M12 22a1 1 0 0 1 0-20 10 9 0 0 1 10 9 5 5 0 0 1-5 5h-2.25a1.75 1.75 0 0 0-1.4 2.8l.3.4a1.75 1.75 0 0 1-1.4 2.8z",
      key: "e79jfc"
    }
  ],
  ["circle", { cx: "13.5", cy: "6.5", r: ".5", fill: "currentColor", key: "1okk4w" }],
  ["circle", { cx: "17.5", cy: "10.5", r: ".5", fill: "currentColor", key: "f64h9f" }],
  ["circle", { cx: "6.5", cy: "12.5", r: ".5", fill: "currentColor", key: "qy21gx" }],
  ["circle", { cx: "8.5", cy: "7.5", r: ".5", fill: "currentColor", key: "fotxhn" }]
], kP = e("palette", pP);
const lP = [
  ["path", { d: "M11.25 17.25h1.5L12 18z", key: "1wmwwj" }],
  ["path", { d: "m15 12 2 2", key: "k60wz4" }],
  ["path", { d: "M18 6.5a.5.5 0 0 0-.5-.5", key: "1ch4h4" }],
  [
    "path",
    {
      d: "M20.69 9.67a4.5 4.5 0 1 0-7.04-5.5 8.35 8.35 0 0 0-3.3 0 4.5 4.5 0 1 0-7.04 5.5C2.49 11.2 2 12.88 2 14.5 2 19.47 6.48 22 12 22s10-2.53 10-7.5c0-1.62-.48-3.3-1.3-4.83",
      key: "1c660l"
    }
  ],
  ["path", { d: "M6 6.5a.495.495 0 0 1 .5-.5", key: "eviuep" }],
  ["path", { d: "m9 12-2 2", key: "326nkw" }]
], uP = e("panda", lP);
const MP = [
  ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", key: "afitv7" }],
  ["path", { d: "M3 15h18", key: "5xshup" }],
  ["path", { d: "m15 8-3 3-3-3", key: "1oxy1z" }]
], fP = e("panel-bottom-close", MP);
const mP = [
  ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", key: "afitv7" }],
  ["path", { d: "M14 15h1", key: "171nev" }],
  ["path", { d: "M19 15h2", key: "1vnucp" }],
  ["path", { d: "M3 15h2", key: "8bym0q" }],
  ["path", { d: "M9 15h1", key: "1tg3ks" }]
], vP = e("panel-bottom-dashed", mP);
const gP = [
  ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", key: "afitv7" }],
  ["path", { d: "M3 15h18", key: "5xshup" }],
  ["path", { d: "m9 10 3-3 3 3", key: "11gsxs" }]
], _P = e("panel-bottom-open", gP);
const xP = [
  ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", key: "afitv7" }],
  ["path", { d: "M3 15h18", key: "5xshup" }]
], bP = e("panel-bottom", xP);
const wP = [
  ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", key: "afitv7" }],
  ["path", { d: "M9 3v18", key: "fh3hqa" }],
  ["path", { d: "m16 15-3-3 3-3", key: "14y99z" }]
], NP = e("panel-left-close", wP);
const $P = [
  ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", key: "afitv7" }],
  ["path", { d: "M9 14v1", key: "askpd8" }],
  ["path", { d: "M9 19v2", key: "16tejx" }],
  ["path", { d: "M9 3v2", key: "1noubl" }],
  ["path", { d: "M9 9v1", key: "19ebxg" }]
], zP = e("panel-left-dashed", $P);
const jP = [
  ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", key: "afitv7" }],
  ["path", { d: "M9 3v18", key: "fh3hqa" }],
  ["path", { d: "m14 9 3 3-3 3", key: "8010ee" }]
], qP = e("panel-left-open", jP);
const AP = [
  ["path", { d: "M15 10V9", key: "4dkmfx" }],
  ["path", { d: "M15 15v-1", key: "6a4afx" }],
  ["path", { d: "M15 21v-2", key: "1qshmc" }],
  ["path", { d: "M15 5V3", key: "1fk0mb" }],
  ["path", { d: "M9 10V9", key: "1lazqi" }],
  ["path", { d: "M9 15v-1", key: "9lx740" }],
  ["path", { d: "M9 21v-2", key: "1fwk0n" }],
  ["path", { d: "M9 5V3", key: "2q8zi6" }],
  ["rect", { x: "3", y: "3", width: "18", height: "18", rx: "2", key: "h1oib" }]
], HP = e("panel-left-right-dashed", AP);
const SP = [
  ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", key: "afitv7" }],
  ["path", { d: "M9 3v18", key: "fh3hqa" }]
], CP = e("panel-left", SP);
const VP = [
  ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", key: "afitv7" }],
  ["path", { d: "M15 3v18", key: "14nvp0" }],
  ["path", { d: "m8 9 3 3-3 3", key: "12hl5m" }]
], RP = e("panel-right-close", VP);
const EP = [
  ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", key: "afitv7" }],
  ["path", { d: "M15 14v1", key: "ilsfch" }],
  ["path", { d: "M15 19v2", key: "1fst2f" }],
  ["path", { d: "M15 3v2", key: "z204g4" }],
  ["path", { d: "M15 9v1", key: "z2a8b1" }]
], LP = e("panel-right-dashed", EP);
const PP = [
  ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", key: "afitv7" }],
  ["path", { d: "M15 3v18", key: "14nvp0" }],
  ["path", { d: "m10 15-3-3 3-3", key: "1pgupc" }]
], TP = e("panel-right-open", PP);
const OP = [
  ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", key: "afitv7" }],
  ["path", { d: "M15 3v18", key: "14nvp0" }]
], DP = e("panel-right", OP);
const IP = [
  ["path", { d: "M14 15h1", key: "171nev" }],
  ["path", { d: "M14 9h1", key: "l0svgy" }],
  ["path", { d: "M19 15h2", key: "1vnucp" }],
  ["path", { d: "M19 9h2", key: "te2zfg" }],
  ["path", { d: "M3 15h2", key: "8bym0q" }],
  ["path", { d: "M3 9h2", key: "1h4ldw" }],
  ["path", { d: "M9 15h1", key: "1tg3ks" }],
  ["path", { d: "M9 9h1", key: "15jzuz" }],
  ["rect", { x: "3", y: "3", width: "18", height: "18", rx: "2", key: "h1oib" }]
], FP = e("panel-top-bottom-dashed", IP);
const BP = [
  ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", key: "afitv7" }],
  ["path", { d: "M3 9h18", key: "1pudct" }],
  ["path", { d: "m9 16 3-3 3 3", key: "1idcnm" }]
], UP = e("panel-top-close", BP);
const WP = [
  ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", key: "afitv7" }],
  ["path", { d: "M14 9h1", key: "l0svgy" }],
  ["path", { d: "M19 9h2", key: "te2zfg" }],
  ["path", { d: "M3 9h2", key: "1h4ldw" }],
  ["path", { d: "M9 9h1", key: "15jzuz" }]
], ZP = e("panel-top-dashed", WP);
const GP = [
  ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", key: "afitv7" }],
  ["path", { d: "M3 9h18", key: "1pudct" }],
  ["path", { d: "m15 14-3 3-3-3", key: "g215vf" }]
], XP = e("panel-top-open", GP);
const YP = [
  ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", key: "afitv7" }],
  ["path", { d: "M3 9h18", key: "1pudct" }]
], KP = e("panel-top", YP);
const QP = [
  ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", key: "afitv7" }],
  ["path", { d: "M9 3v18", key: "fh3hqa" }],
  ["path", { d: "M9 15h12", key: "5ijen5" }]
], JP = e("panels-left-bottom", QP);
const eT = [
  ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", key: "afitv7" }],
  ["path", { d: "M3 15h12", key: "1wkqb3" }],
  ["path", { d: "M15 3v18", key: "14nvp0" }]
], tT = e("panels-right-bottom", eT);
const aT = [
  [
    "path",
    {
      d: "m16 6-8.414 8.586a2 2 0 0 0 2.829 2.829l8.414-8.586a4 4 0 1 0-5.657-5.657l-8.379 8.551a6 6 0 1 0 8.485 8.485l8.379-8.551",
      key: "1miecu"
    }
  ]
], oT = e("paperclip", aT);
const nT = [
  ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", key: "afitv7" }],
  ["path", { d: "M3 9h18", key: "1pudct" }],
  ["path", { d: "M9 21V9", key: "1oto5p" }]
], cT = e("panels-top-left", nT);
const rT = [
  ["path", { d: "M8 21s-4-3-4-9 4-9 4-9", key: "uto9ud" }],
  ["path", { d: "M16 3s4 3 4 9-4 9-4 9", key: "4w2vsq" }]
], hT = e("parentheses", rT);
const dT = [
  ["path", { d: "M11 15h2", key: "199qp6" }],
  ["path", { d: "M12 12v3", key: "158kv8" }],
  ["path", { d: "M12 19v3", key: "npa21l" }],
  [
    "path",
    {
      d: "M15.282 19a1 1 0 0 0 .948-.68l2.37-6.988a7 7 0 1 0-13.2 0l2.37 6.988a1 1 0 0 0 .948.68z",
      key: "1jofit"
    }
  ],
  ["path", { d: "M9 9a3 3 0 1 1 6 0", key: "jdoeu8" }]
], iT = e("parking-meter", dT);
const sT = [
  ["path", { d: "M5.8 11.3 2 22l10.7-3.79", key: "gwxi1d" }],
  ["path", { d: "M4 3h.01", key: "1vcuye" }],
  ["path", { d: "M22 8h.01", key: "1mrtc2" }],
  ["path", { d: "M15 2h.01", key: "1cjtqr" }],
  ["path", { d: "M22 20h.01", key: "1mrys2" }],
  [
    "path",
    {
      d: "m22 2-2.24.75a2.9 2.9 0 0 0-1.96 3.12c.1.86-.57 1.63-1.45 1.63h-.38c-.86 0-1.6.6-1.76 1.44L14 10",
      key: "hbicv8"
    }
  ],
  [
    "path",
    { d: "m22 13-.82-.33c-.86-.34-1.82.2-1.98 1.11c-.11.7-.72 1.22-1.43 1.22H17", key: "1i94pl" }
  ],
  ["path", { d: "m11 2 .33.82c.34.86-.2 1.82-1.11 1.98C9.52 4.9 9 5.52 9 6.23V7", key: "1cofks" }],
  [
    "path",
    {
      d: "M11 13c1.93 1.93 2.83 4.17 2 5-.83.83-3.07-.07-5-2-1.93-1.93-2.83-4.17-2-5 .83-.83 3.07.07 5 2Z",
      key: "4kbmks"
    }
  ]
], yT = e("party-popper", sT);
const pT = [
  ["rect", { x: "14", y: "3", width: "5", height: "18", rx: "1", key: "kaeet6" }],
  ["rect", { x: "5", y: "3", width: "5", height: "18", rx: "1", key: "1wsw3u" }]
], kT = e("pause", pT);
const lT = [
  ["circle", { cx: "11", cy: "4", r: "2", key: "vol9p0" }],
  ["circle", { cx: "18", cy: "8", r: "2", key: "17gozi" }],
  ["circle", { cx: "20", cy: "16", r: "2", key: "1v9bxh" }],
  [
    "path",
    {
      d: "M9 10a5 5 0 0 1 5 5v3.5a3.5 3.5 0 0 1-6.84 1.045Q6.52 17.48 4.46 16.84A3.5 3.5 0 0 1 5.5 10Z",
      key: "1ydw1z"
    }
  ]
], uT = e("paw-print", lT);
const MT = [
  ["rect", { width: "14", height: "20", x: "5", y: "2", rx: "2", key: "1uq1d7" }],
  ["path", { d: "M15 14h.01", key: "1kp3bh" }],
  ["path", { d: "M9 6h6", key: "dgm16u" }],
  ["path", { d: "M9 10h6", key: "9gxzsh" }]
], fT = e("pc-case", MT);
const mT = [
  ["path", { d: "M13 21h8", key: "1jsn5i" }],
  [
    "path",
    {
      d: "M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z",
      key: "1a8usu"
    }
  ]
], vT = e("pen-line", mT);
const gT = [
  [
    "path",
    {
      d: "m10 10-6.157 6.162a2 2 0 0 0-.5.833l-1.322 4.36a.5.5 0 0 0 .622.624l4.358-1.323a2 2 0 0 0 .83-.5L14 13.982",
      key: "bjo8r8"
    }
  ],
  ["path", { d: "m12.829 7.172 4.359-4.346a1 1 0 1 1 3.986 3.986l-4.353 4.353", key: "16h5ne" }],
  ["path", { d: "m2 2 20 20", key: "1ooewy" }]
], _T = e("pen-off", gT);
const xT = [
  [
    "path",
    {
      d: "M15.707 21.293a1 1 0 0 1-1.414 0l-1.586-1.586a1 1 0 0 1 0-1.414l5.586-5.586a1 1 0 0 1 1.414 0l1.586 1.586a1 1 0 0 1 0 1.414z",
      key: "nt11vn"
    }
  ],
  [
    "path",
    {
      d: "m18 13-1.375-6.874a1 1 0 0 0-.746-.776L3.235 2.028a1 1 0 0 0-1.207 1.207L5.35 15.879a1 1 0 0 0 .776.746L13 18",
      key: "15qc1e"
    }
  ],
  ["path", { d: "m2.3 2.3 7.286 7.286", key: "1wuzzi" }],
  ["circle", { cx: "11", cy: "11", r: "2", key: "xmgehs" }]
], bT = e("pen-tool", xT);
const wT = [
  [
    "path",
    {
      d: "M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z",
      key: "1a8usu"
    }
  ]
], NT = e("pen", wT);
const $T = [
  ["path", { d: "M13 21h8", key: "1jsn5i" }],
  ["path", { d: "m15 5 4 4", key: "1mk7zo" }],
  [
    "path",
    {
      d: "M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z",
      key: "1a8usu"
    }
  ]
], zT = e("pencil-line", $T);
const jT = [
  [
    "path",
    {
      d: "m10 10-6.157 6.162a2 2 0 0 0-.5.833l-1.322 4.36a.5.5 0 0 0 .622.624l4.358-1.323a2 2 0 0 0 .83-.5L14 13.982",
      key: "bjo8r8"
    }
  ],
  ["path", { d: "m12.829 7.172 4.359-4.346a1 1 0 1 1 3.986 3.986l-4.353 4.353", key: "16h5ne" }],
  ["path", { d: "m15 5 4 4", key: "1mk7zo" }],
  ["path", { d: "m2 2 20 20", key: "1ooewy" }]
], qT = e("pencil-off", jT);
const AT = [
  [
    "path",
    { d: "M13 7 8.7 2.7a2.41 2.41 0 0 0-3.4 0L2.7 5.3a2.41 2.41 0 0 0 0 3.4L7 13", key: "orapub" }
  ],
  ["path", { d: "m8 6 2-2", key: "115y1s" }],
  ["path", { d: "m18 16 2-2", key: "ee94s4" }],
  [
    "path",
    {
      d: "m17 11 4.3 4.3c.94.94.94 2.46 0 3.4l-2.6 2.6c-.94.94-2.46.94-3.4 0L11 17",
      key: "cfq27r"
    }
  ],
  [
    "path",
    {
      d: "M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z",
      key: "1a8usu"
    }
  ],
  ["path", { d: "m15 5 4 4", key: "1mk7zo" }]
], HT = e("pencil-ruler", AT);
const ST = [
  [
    "path",
    {
      d: "M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z",
      key: "1a8usu"
    }
  ],
  ["path", { d: "m15 5 4 4", key: "1mk7zo" }]
], CT = e("pencil", ST);
const VT = [
  [
    "path",
    {
      d: "M10.83 2.38a2 2 0 0 1 2.34 0l8 5.74a2 2 0 0 1 .73 2.25l-3.04 9.26a2 2 0 0 1-1.9 1.37H7.04a2 2 0 0 1-1.9-1.37L2.1 10.37a2 2 0 0 1 .73-2.25z",
      key: "2hea0t"
    }
  ]
], RT = e("pentagon", VT);
const ET = [
  ["line", { x1: "19", x2: "5", y1: "5", y2: "19", key: "1x9vlm" }],
  ["circle", { cx: "6.5", cy: "6.5", r: "2.5", key: "4mh3h7" }],
  ["circle", { cx: "17.5", cy: "17.5", r: "2.5", key: "1mdrzq" }]
], LT = e("percent", ET);
const PT = [
  ["circle", { cx: "12", cy: "5", r: "1", key: "gxeob9" }],
  ["path", { d: "m9 20 3-6 3 6", key: "se2kox" }],
  ["path", { d: "m6 8 6 2 6-2", key: "4o3us4" }],
  ["path", { d: "M12 10v4", key: "1kjpxc" }]
], TT = e("person-standing", PT);
const OT = [
  ["path", { d: "M20 11H4", key: "6ut86h" }],
  ["path", { d: "M20 7H4", key: "zbl0bi" }],
  ["path", { d: "M7 21V4a1 1 0 0 1 1-1h4a1 1 0 0 1 0 12H7", key: "1ana5r" }]
], DT = e("philippine-peso", OT);
const IT = [
  ["path", { d: "M13 2a9 9 0 0 1 9 9", key: "1itnx2" }],
  ["path", { d: "M13 6a5 5 0 0 1 5 5", key: "11nki7" }],
  [
    "path",
    {
      d: "M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384",
      key: "9njp5v"
    }
  ]
], FT = e("phone-call", IT);
const BT = [
  ["path", { d: "M14 6h8", key: "yd68k4" }],
  ["path", { d: "m18 2 4 4-4 4", key: "pucp1d" }],
  [
    "path",
    {
      d: "M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384",
      key: "9njp5v"
    }
  ]
], UT = e("phone-forwarded", BT);
const WT = [
  ["path", { d: "M16 2v6h6", key: "1mfrl5" }],
  ["path", { d: "m22 2-6 6", key: "6f0sa0" }],
  [
    "path",
    {
      d: "M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384",
      key: "9njp5v"
    }
  ]
], ZT = e("phone-incoming", WT);
const GT = [
  ["path", { d: "m16 2 6 6", key: "1gw87d" }],
  ["path", { d: "m22 2-6 6", key: "6f0sa0" }],
  [
    "path",
    {
      d: "M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384",
      key: "9njp5v"
    }
  ]
], XT = e("phone-missed", GT);
const YT = [
  [
    "path",
    {
      d: "M10.1 13.9a14 14 0 0 0 3.732 2.668 1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2 18 18 0 0 1-12.728-5.272",
      key: "1wngk7"
    }
  ],
  ["path", { d: "M22 2 2 22", key: "y4kqgn" }],
  [
    "path",
    {
      d: "M4.76 13.582A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 .244.473",
      key: "10hv5p"
    }
  ]
], KT = e("phone-off", YT);
const QT = [
  ["path", { d: "m16 8 6-6", key: "oawc05" }],
  ["path", { d: "M22 8V2h-6", key: "oqy2zc" }],
  [
    "path",
    {
      d: "M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384",
      key: "9njp5v"
    }
  ]
], JT = e("phone-outgoing", QT);
const eO = [
  [
    "path",
    {
      d: "M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384",
      key: "9njp5v"
    }
  ]
], tO = e("phone", eO);
const aO = [
  ["line", { x1: "9", x2: "9", y1: "4", y2: "20", key: "ovs5a5" }],
  ["path", { d: "M4 7c0-1.7 1.3-3 3-3h13", key: "10pag4" }],
  ["path", { d: "M18 20c-1.7 0-3-1.3-3-3V4", key: "1gaosr" }]
], oO = e("pi", aO);
const nO = [
  [
    "path",
    {
      d: "M18.5 8c-1.4 0-2.6-.8-3.2-2A6.87 6.87 0 0 0 2 9v11a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-8.5C22 9.6 20.4 8 18.5 8",
      key: "lag0yf"
    }
  ],
  ["path", { d: "M2 14h20", key: "myj16y" }],
  ["path", { d: "M6 14v4", key: "9ng0ue" }],
  ["path", { d: "M10 14v4", key: "1v8uk5" }],
  ["path", { d: "M14 14v4", key: "1tqops" }],
  ["path", { d: "M18 14v4", key: "18uqwm" }]
], cO = e("piano", nO);
const rO = [
  ["path", { d: "m14 13-8.381 8.38a1 1 0 0 1-3.001-3L11 9.999", key: "1lw9ds" }],
  [
    "path",
    {
      d: "M15.973 4.027A13 13 0 0 0 5.902 2.373c-1.398.342-1.092 2.158.277 2.601a19.9 19.9 0 0 1 5.822 3.024",
      key: "ffj4ej"
    }
  ],
  [
    "path",
    {
      d: "M16.001 11.999a19.9 19.9 0 0 1 3.024 5.824c.444 1.369 2.26 1.676 2.603.278A13 13 0 0 0 20 8.069",
      key: "8tj4zw"
    }
  ],
  [
    "path",
    {
      d: "M18.352 3.352a1.205 1.205 0 0 0-1.704 0l-5.296 5.296a1.205 1.205 0 0 0 0 1.704l2.296 2.296a1.205 1.205 0 0 0 1.704 0l5.296-5.296a1.205 1.205 0 0 0 0-1.704z",
      key: "hh6h97"
    }
  ]
], hO = e("pickaxe", rO);
const dO = [
  ["path", { d: "M21 9V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v10c0 1.1.9 2 2 2h4", key: "daa4of" }],
  ["rect", { width: "10", height: "7", x: "12", y: "13", rx: "2", key: "1nb8gs" }]
], iO = e("picture-in-picture-2", dO);
const sO = [
  ["path", { d: "M2 10h6V4", key: "zwrco" }],
  ["path", { d: "m2 4 6 6", key: "ug085t" }],
  ["path", { d: "M21 10V7a2 2 0 0 0-2-2h-7", key: "git5jr" }],
  ["path", { d: "M3 14v2a2 2 0 0 0 2 2h3", key: "1f7fh3" }],
  ["rect", { x: "12", y: "14", width: "10", height: "7", rx: "1", key: "1wjs3o" }]
], yO = e("picture-in-picture", sO);
const pO = [
  [
    "path",
    {
      d: "M11 17h3v2a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-3a3.16 3.16 0 0 0 2-2h1a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1h-1a5 5 0 0 0-2-4V3a4 4 0 0 0-3.2 1.6l-.3.4H11a6 6 0 0 0-6 6v1a5 5 0 0 0 2 4v3a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1z",
      key: "1piglc"
    }
  ],
  ["path", { d: "M16 10h.01", key: "1m94wz" }],
  ["path", { d: "M2 8v1a2 2 0 0 0 2 2h1", key: "1env43" }]
], kO = e("piggy-bank", pO);
const lO = [
  ["path", { d: "M14 3v11", key: "mlfb7b" }],
  ["path", { d: "M14 9h-3a3 3 0 0 1 0-6h9", key: "1ulc19" }],
  ["path", { d: "M18 3v11", key: "1phi0r" }],
  ["path", { d: "M22 18H2l4-4", key: "yt65j9" }],
  ["path", { d: "m6 22-4-4", key: "6jgyf5" }]
], uO = e("pilcrow-left", lO);
const MO = [
  ["path", { d: "M10 3v11", key: "o3l5kj" }],
  ["path", { d: "M10 9H7a1 1 0 0 1 0-6h8", key: "1wb1nc" }],
  ["path", { d: "M14 3v11", key: "mlfb7b" }],
  ["path", { d: "m18 14 4 4H2", key: "4r8io1" }],
  ["path", { d: "m22 18-4 4", key: "1hjjrd" }]
], fO = e("pilcrow-right", MO);
const mO = [
  ["path", { d: "M13 4v16", key: "8vvj80" }],
  ["path", { d: "M17 4v16", key: "7dpous" }],
  ["path", { d: "M19 4H9.5a4.5 4.5 0 0 0 0 9H13", key: "sh4n9v" }]
], vO = e("pilcrow", mO);
const gO = [
  ["path", { d: "M18 11h-4a1 1 0 0 0-1 1v5a1 1 0 0 0 1 1h4", key: "17ldeb" }],
  ["path", { d: "M6 7v13a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V7", key: "nc37y6" }],
  ["rect", { width: "16", height: "5", x: "4", y: "2", rx: "1", key: "3jeezo" }]
], _O = e("pill-bottle", gO);
const xO = [
  [
    "path",
    { d: "m10.5 20.5 10-10a4.95 4.95 0 1 0-7-7l-10 10a4.95 4.95 0 1 0 7 7Z", key: "wa1lgi" }
  ],
  ["path", { d: "m8.5 8.5 7 7", key: "rvfmvr" }]
], bO = e("pill", xO);
const wO = [
  ["path", { d: "M12 17v5", key: "bb1du9" }],
  ["path", { d: "M15 9.34V7a1 1 0 0 1 1-1 2 2 0 0 0 0-4H7.89", key: "znwnzq" }],
  ["path", { d: "m2 2 20 20", key: "1ooewy" }],
  [
    "path",
    {
      d: "M9 9v1.76a2 2 0 0 1-1.11 1.79l-1.78.9A2 2 0 0 0 5 15.24V16a1 1 0 0 0 1 1h11",
      key: "c9qhm2"
    }
  ]
], NO = e("pin-off", wO);
const $O = [
  ["path", { d: "M12 17v5", key: "bb1du9" }],
  [
    "path",
    {
      d: "M9 10.76a2 2 0 0 1-1.11 1.79l-1.78.9A2 2 0 0 0 5 15.24V16a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-.76a2 2 0 0 0-1.11-1.79l-1.78-.9A2 2 0 0 1 15 10.76V7a1 1 0 0 1 1-1 2 2 0 0 0 0-4H8a2 2 0 0 0 0 4 1 1 0 0 1 1 1z",
      key: "1nkz8b"
    }
  ]
], zO = e("pin", $O);
const jO = [
  [
    "path",
    {
      d: "m12 9-8.414 8.414A2 2 0 0 0 3 18.828v1.344a2 2 0 0 1-.586 1.414A2 2 0 0 1 3.828 21h1.344a2 2 0 0 0 1.414-.586L15 12",
      key: "1y3wsu"
    }
  ],
  [
    "path",
    {
      d: "m18 9 .4.4a1 1 0 1 1-3 3l-3.8-3.8a1 1 0 1 1 3-3l.4.4 3.4-3.4a1 1 0 1 1 3 3z",
      key: "110lr1"
    }
  ],
  ["path", { d: "m2 22 .414-.414", key: "jhxm08" }]
], qO = e("pipette", jO);
const AO = [
  ["path", { d: "m12 14-1 1", key: "11onhr" }],
  ["path", { d: "m13.75 18.25-1.25 1.42", key: "1yisr3" }],
  ["path", { d: "M17.775 5.654a15.68 15.68 0 0 0-12.121 12.12", key: "1qtqk6" }],
  ["path", { d: "M18.8 9.3a1 1 0 0 0 2.1 7.7", key: "fbbbr2" }],
  [
    "path",
    {
      d: "M21.964 20.732a1 1 0 0 1-1.232 1.232l-18-5a1 1 0 0 1-.695-1.232A19.68 19.68 0 0 1 15.732 2.037a1 1 0 0 1 1.232.695z",
      key: "1hyfdd"
    }
  ]
], HO = e("pizza", AO);
const SO = [
  ["path", { d: "M2 22h20", key: "272qi7" }],
  [
    "path",
    {
      d: "M3.77 10.77 2 9l2-4.5 1.1.55c.55.28.9.84.9 1.45s.35 1.17.9 1.45L8 8.5l3-6 1.05.53a2 2 0 0 1 1.09 1.52l.72 5.4a2 2 0 0 0 1.09 1.52l4.4 2.2c.42.22.78.55 1.01.96l.6 1.03c.49.88-.06 1.98-1.06 2.1l-1.18.15c-.47.06-.95-.02-1.37-.24L4.29 11.15a2 2 0 0 1-.52-.38Z",
      key: "1ma21e"
    }
  ]
], CO = e("plane-landing", SO);
const VO = [
  ["path", { d: "M2 22h20", key: "272qi7" }],
  [
    "path",
    {
      d: "M6.36 17.4 4 17l-2-4 1.1-.55a2 2 0 0 1 1.8 0l.17.1a2 2 0 0 0 1.8 0L8 12 5 6l.9-.45a2 2 0 0 1 2.09.2l4.02 3a2 2 0 0 0 2.1.2l4.19-2.06a2.41 2.41 0 0 1 1.73-.17L21 7a1.4 1.4 0 0 1 .87 1.99l-.38.76c-.23.46-.6.84-1.07 1.08L7.58 17.2a2 2 0 0 1-1.22.18Z",
      key: "fkigj9"
    }
  ]
], RO = e("plane-takeoff", VO);
const EO = [
  [
    "path",
    {
      d: "M17.8 19.2 16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.1-1.1.5l-.3.5c-.2.5-.1 1 .3 1.3L9 12l-2 3H4l-1 1 3 2 2 3 1-1v-3l3-2 3.5 5.3c.3.4.8.5 1.3.3l.5-.2c.4-.3.6-.7.5-1.2z",
      key: "1v9wt8"
    }
  ]
], LO = e("plane", EO);
const PO = [
  [
    "path",
    {
      d: "M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z",
      key: "10ikf1"
    }
  ]
], TO = e("play", PO);
const OO = [
  ["path", { d: "M9 2v6", key: "17ngun" }],
  ["path", { d: "M15 2v6", key: "s7yy2p" }],
  ["path", { d: "M12 17v5", key: "bb1du9" }],
  ["path", { d: "M5 8h14", key: "pcz4l3" }],
  ["path", { d: "M6 11V8h12v3a6 6 0 1 1-12 0Z", key: "wtfw2c" }]
], DO = e("plug-2", OO);
const IO = [
  [
    "path",
    { d: "M6.3 20.3a2.4 2.4 0 0 0 3.4 0L12 18l-6-6-2.3 2.3a2.4 2.4 0 0 0 0 3.4Z", key: "goz73y" }
  ],
  ["path", { d: "m2 22 3-3", key: "19mgm9" }],
  ["path", { d: "M7.5 13.5 10 11", key: "7xgeeb" }],
  ["path", { d: "M10.5 16.5 13 14", key: "10btkg" }],
  ["path", { d: "m18 3-4 4h6l-4 4", key: "16psg9" }]
], FO = e("plug-zap", IO);
const BO = [
  ["path", { d: "M12 22v-5", key: "1ega77" }],
  ["path", { d: "M15 8V2", key: "18g5xt" }],
  [
    "path",
    { d: "M17 8a1 1 0 0 1 1 1v4a4 4 0 0 1-4 4h-4a4 4 0 0 1-4-4V9a1 1 0 0 1 1-1z", key: "1xoxul" }
  ],
  ["path", { d: "M9 8V2", key: "14iosj" }]
], UO = e("plug", BO);
const WO = [
  ["path", { d: "M5 12h14", key: "1ays0h" }],
  ["path", { d: "M12 5v14", key: "s699le" }]
], ZO = e("plus", WO);
const GO = [
  ["path", { d: "M20 3a2 2 0 0 1 2 2v6a1 1 0 0 1-20 0V5a2 2 0 0 1 2-2z", key: "1uodqw" }],
  ["path", { d: "m8 10 4 4 4-4", key: "1mxd5q" }]
], XO = e("pocket", GO);
const YO = [
  ["path", { d: "M3 2v1c0 1 2 1 2 2S3 6 3 7s2 1 2 2-2 1-2 2 2 1 2 2", key: "19w3oe" }],
  ["path", { d: "M18 6h.01", key: "1v4wsw" }],
  ["path", { d: "M6 18h.01", key: "uhywen" }],
  ["path", { d: "M20.83 8.83a4 4 0 0 0-5.66-5.66l-12 12a4 4 0 1 0 5.66 5.66Z", key: "6fykxj" }],
  ["path", { d: "M18 11.66V22a4 4 0 0 0 4-4V6", key: "1utzek" }]
], KO = e("pocket-knife", YO);
const QO = [
  [
    "path",
    { d: "M13 17a1 1 0 1 0-2 0l.5 4.5a0.5 0.5 0 0 0 1 0z", fill: "currentColor", key: "x1mxqr" }
  ],
  ["path", { d: "M16.85 18.58a9 9 0 1 0-9.7 0", key: "d71mpg" }],
  ["path", { d: "M8 14a5 5 0 1 1 8 0", key: "fc81rn" }],
  ["circle", { cx: "12", cy: "11", r: "1", fill: "currentColor", key: "vqiwd" }]
], JO = e("podcast", QO);
const eD = [
  ["path", { d: "M10 4.5V4a2 2 0 0 0-2.41-1.957", key: "jsi14n" }],
  ["path", { d: "M13.9 8.4a2 2 0 0 0-1.26-1.295", key: "hirc7f" }],
  [
    "path",
    { d: "M21.7 16.2A8 8 0 0 0 22 14v-3a2 2 0 1 0-4 0v-1a2 2 0 0 0-3.63-1.158", key: "1jxb2e" }
  ],
  [
    "path",
    {
      d: "m7 15-1.8-1.8a2 2 0 0 0-2.79 2.86L6 19.7a7.74 7.74 0 0 0 6 2.3h2a8 8 0 0 0 5.657-2.343",
      key: "10r7hm"
    }
  ],
  ["path", { d: "M6 6v8", key: "tv5xkp" }],
  ["path", { d: "m2 2 20 20", key: "1ooewy" }]
], tD = e("pointer-off", eD);
const aD = [
  ["path", { d: "M22 14a8 8 0 0 1-8 8", key: "56vcr3" }],
  ["path", { d: "M18 11v-1a2 2 0 0 0-2-2a2 2 0 0 0-2 2", key: "1agjmk" }],
  ["path", { d: "M14 10V9a2 2 0 0 0-2-2a2 2 0 0 0-2 2v1", key: "wdbh2u" }],
  ["path", { d: "M10 9.5V4a2 2 0 0 0-2-2a2 2 0 0 0-2 2v10", key: "1ibuk9" }],
  [
    "path",
    {
      d: "M18 11a2 2 0 1 1 4 0v3a8 8 0 0 1-8 8h-2c-2.8 0-4.5-.86-5.99-2.34l-3.6-3.6a2 2 0 0 1 2.83-2.82L7 15",
      key: "g6ys72"
    }
  ]
], oD = e("pointer", aD);
const nD = [
  [
    "path",
    {
      d: "M18 8a2 2 0 0 0 0-4 2 2 0 0 0-4 0 2 2 0 0 0-4 0 2 2 0 0 0-4 0 2 2 0 0 0 0 4",
      key: "10td1f"
    }
  ],
  ["path", { d: "M10 22 9 8", key: "yjptiv" }],
  ["path", { d: "m14 22 1-14", key: "8jwc8b" }],
  [
    "path",
    {
      d: "M20 8c.5 0 .9.4.8 1l-2.6 12c-.1.5-.7 1-1.2 1H7c-.6 0-1.1-.4-1.2-1L3.2 9c-.1-.6.3-1 .8-1Z",
      key: "1qo33t"
    }
  ]
], cD = e("popcorn", nD);
const rD = [
  [
    "path",
    {
      d: "M18.6 14.4c.8-.8.8-2 0-2.8l-8.1-8.1a4.95 4.95 0 1 0-7.1 7.1l8.1 8.1c.9.7 2.1.7 2.9-.1Z",
      key: "1o68ps"
    }
  ],
  ["path", { d: "m22 22-5.5-5.5", key: "17o70y" }]
], hD = e("popsicle", rD);
const dD = [
  ["path", { d: "M18 7c0-5.333-8-5.333-8 0", key: "1prm2n" }],
  ["path", { d: "M10 7v14", key: "18tmcs" }],
  ["path", { d: "M6 21h12", key: "4dkmi1" }],
  ["path", { d: "M6 13h10", key: "ybwr4a" }]
], iD = e("pound-sterling", dD);
const sD = [
  ["path", { d: "M18.36 6.64A9 9 0 0 1 20.77 15", key: "dxknvb" }],
  ["path", { d: "M6.16 6.16a9 9 0 1 0 12.68 12.68", key: "1x7qb5" }],
  ["path", { d: "M12 2v4", key: "3427ic" }],
  ["path", { d: "m2 2 20 20", key: "1ooewy" }]
], yD = e("power-off", sD);
const pD = [
  ["path", { d: "M12 2v10", key: "mnfbl" }],
  ["path", { d: "M18.4 6.6a9 9 0 1 1-12.77.04", key: "obofu9" }]
], kD = e("power", pD);
const lD = [
  ["path", { d: "M2 3h20", key: "91anmk" }],
  ["path", { d: "M21 3v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V3", key: "2k9sn8" }],
  ["path", { d: "m7 21 5-5 5 5", key: "bip4we" }]
], uD = e("presentation", lD);
const MD = [
  ["path", { d: "M13.5 22H7a1 1 0 0 1-1-1v-6a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v.5", key: "qeb09x" }],
  ["path", { d: "m16 19 2 2 4-4", key: "1b14m6" }],
  ["path", { d: "M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v2", key: "1md90i" }],
  ["path", { d: "M6 9V3a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v6", key: "1itne7" }]
], fD = e("printer-check", MD);
const mD = [
  ["path", { d: "M12.531 22H7a1 1 0 0 1-1-1v-6a1 1 0 0 1 1-1h6.377", key: "1w39xo" }],
  ["path", { d: "m16.5 16.5 5 5", key: "zc9lw7" }],
  ["path", { d: "m16.5 21.5 5-5", key: "1fr29m" }],
  ["path", { d: "M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v1.5", key: "18he39" }],
  ["path", { d: "M6 9V3a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v6", key: "1itne7" }]
], vD = e("printer-x", mD);
const gD = [
  ["path", { d: "M5 7 3 5", key: "1yys58" }],
  ["path", { d: "M9 6V3", key: "1ptz9u" }],
  ["path", { d: "m13 7 2-2", key: "1w3vmq" }],
  ["circle", { cx: "9", cy: "13", r: "3", key: "1mma13" }],
  [
    "path",
    {
      d: "M11.83 12H20a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-4a2 2 0 0 1 2-2h2.17",
      key: "2frwzc"
    }
  ],
  ["path", { d: "M16 16h2", key: "dnq2od" }]
], _D = e("projector", gD);
const xD = [
  [
    "path",
    {
      d: "M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2",
      key: "143wyd"
    }
  ],
  ["path", { d: "M6 9V3a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v6", key: "1itne7" }],
  ["rect", { x: "6", y: "14", width: "12", height: "8", rx: "1", key: "1ue0tg" }]
], bD = e("printer", xD);
const wD = [
  ["rect", { width: "20", height: "16", x: "2", y: "4", rx: "2", key: "18n3k1" }],
  ["path", { d: "M12 9v11", key: "1fnkrn" }],
  ["path", { d: "M2 9h13a2 2 0 0 1 2 2v9", key: "11z3ex" }]
], ND = e("proportions", wD);
const $D = [
  [
    "path",
    {
      d: "M15.39 4.39a1 1 0 0 0 1.68-.474 2.5 2.5 0 1 1 3.014 3.015 1 1 0 0 0-.474 1.68l1.683 1.682a2.414 2.414 0 0 1 0 3.414L19.61 15.39a1 1 0 0 1-1.68-.474 2.5 2.5 0 1 0-3.014 3.015 1 1 0 0 1 .474 1.68l-1.683 1.682a2.414 2.414 0 0 1-3.414 0L8.61 19.61a1 1 0 0 0-1.68.474 2.5 2.5 0 1 1-3.014-3.015 1 1 0 0 0 .474-1.68l-1.683-1.682a2.414 2.414 0 0 1 0-3.414L4.39 8.61a1 1 0 0 1 1.68.474 2.5 2.5 0 1 0 3.014-3.015 1 1 0 0 1-.474-1.68l1.683-1.682a2.414 2.414 0 0 1 3.414 0z",
      key: "w46dr5"
    }
  ]
], zD = e("puzzle", $D);
const jD = [
  [
    "path",
    {
      d: "M2.5 16.88a1 1 0 0 1-.32-1.43l9-13.02a1 1 0 0 1 1.64 0l9 13.01a1 1 0 0 1-.32 1.44l-8.51 4.86a2 2 0 0 1-1.98 0Z",
      key: "aenxs0"
    }
  ],
  ["path", { d: "M12 2v20", key: "t6zp3m" }]
], qD = e("pyramid", jD);
const AD = [
  ["rect", { width: "5", height: "5", x: "3", y: "3", rx: "1", key: "1tu5fj" }],
  ["rect", { width: "5", height: "5", x: "16", y: "3", rx: "1", key: "1v8r4q" }],
  ["rect", { width: "5", height: "5", x: "3", y: "16", rx: "1", key: "1x03jg" }],
  ["path", { d: "M21 16h-3a2 2 0 0 0-2 2v3", key: "177gqh" }],
  ["path", { d: "M21 21v.01", key: "ents32" }],
  ["path", { d: "M12 7v3a2 2 0 0 1-2 2H7", key: "8crl2c" }],
  ["path", { d: "M3 12h.01", key: "nlz23k" }],
  ["path", { d: "M12 3h.01", key: "n36tog" }],
  ["path", { d: "M12 16v.01", key: "133mhm" }],
  ["path", { d: "M16 12h1", key: "1slzba" }],
  ["path", { d: "M21 12v.01", key: "1lwtk9" }],
  ["path", { d: "M12 21v-1", key: "1880an" }]
], HD = e("qr-code", AD);
const SD = [
  [
    "path",
    {
      d: "M16 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z",
      key: "rib7q0"
    }
  ],
  [
    "path",
    {
      d: "M5 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z",
      key: "1ymkrd"
    }
  ]
], CD = e("quote", SD);
const VD = [
  ["path", { d: "M13 16a3 3 0 0 1 2.24 5", key: "1epib5" }],
  ["path", { d: "M18 12h.01", key: "yjnet6" }],
  [
    "path",
    {
      d: "M18 21h-8a4 4 0 0 1-4-4 7 7 0 0 1 7-7h.2L9.6 6.4a1 1 0 1 1 2.8-2.8L15.8 7h.2c3.3 0 6 2.7 6 6v1a2 2 0 0 1-2 2h-1a3 3 0 0 0-3 3",
      key: "ue9ozu"
    }
  ],
  ["path", { d: "M20 8.54V4a2 2 0 1 0-4 0v3", key: "49iql8" }],
  ["path", { d: "M7.612 12.524a3 3 0 1 0-1.6 4.3", key: "1e33i0" }]
], RD = e("rabbit", VD);
const ED = [
  ["path", { d: "M19.07 4.93A10 10 0 0 0 6.99 3.34", key: "z3du51" }],
  ["path", { d: "M4 6h.01", key: "oypzma" }],
  ["path", { d: "M2.29 9.62A10 10 0 1 0 21.31 8.35", key: "qzzz0" }],
  ["path", { d: "M16.24 7.76A6 6 0 1 0 8.23 16.67", key: "1yjesh" }],
  ["path", { d: "M12 18h.01", key: "mhygvu" }],
  ["path", { d: "M17.99 11.66A6 6 0 0 1 15.77 16.67", key: "1u2y91" }],
  ["circle", { cx: "12", cy: "12", r: "2", key: "1c9p78" }],
  ["path", { d: "m13.41 10.59 5.66-5.66", key: "mhq4k0" }]
], LD = e("radar", ED);
const PD = [
  [
    "path",
    {
      d: "M3 12h3.28a1 1 0 0 1 .948.684l2.298 7.934a.5.5 0 0 0 .96-.044L13.82 4.771A1 1 0 0 1 14.792 4H21",
      key: "1mqj8i"
    }
  ]
], TD = e("radical", PD);
const OD = [
  ["path", { d: "M12 12h.01", key: "1mp3jc" }],
  [
    "path",
    {
      d: "M14 15.4641a4 4 0 0 1-4 0L7.52786 19.74597 A 1 1 0 0 0 7.99303 21.16211 10 10 0 0 0 16.00697 21.16211 1 1 0 0 0 16.47214 19.74597z",
      key: "1y4lzb"
    }
  ],
  [
    "path",
    {
      d: "M16 12a4 4 0 0 0-2-3.464l2.472-4.282a1 1 0 0 1 1.46-.305 10 10 0 0 1 4.006 6.94A1 1 0 0 1 21 12z",
      key: "163ggk"
    }
  ],
  [
    "path",
    {
      d: "M8 12a4 4 0 0 1 2-3.464L7.528 4.254a1 1 0 0 0-1.46-.305 10 10 0 0 0-4.006 6.94A1 1 0 0 0 3 12z",
      key: "1l9i0b"
    }
  ]
], DD = e("radiation", OD);
const ID = [
  ["path", { d: "M5 16v2", key: "g5qcv5" }],
  ["path", { d: "M19 16v2", key: "1gbaio" }],
  ["rect", { width: "20", height: "8", x: "2", y: "8", rx: "2", key: "vjsjur" }],
  ["path", { d: "M18 12h.01", key: "yjnet6" }]
], FD = e("radio-receiver", ID);
const BD = [
  ["path", { d: "M4.9 16.1C1 12.2 1 5.8 4.9 1.9", key: "s0qx1y" }],
  ["path", { d: "M7.8 4.7a6.14 6.14 0 0 0-.8 7.5", key: "1idnkw" }],
  ["circle", { cx: "12", cy: "9", r: "2", key: "1092wv" }],
  ["path", { d: "M16.2 4.8c2 2 2.26 5.11.8 7.47", key: "ojru2q" }],
  ["path", { d: "M19.1 1.9a9.96 9.96 0 0 1 0 14.1", key: "rhi7fg" }],
  ["path", { d: "M9.5 18h5", key: "mfy3pd" }],
  ["path", { d: "m8 22 4-11 4 11", key: "25yftu" }]
], UD = e("radio-tower", BD);
const WD = [
  ["path", { d: "M16.247 7.761a6 6 0 0 1 0 8.478", key: "1fwjs5" }],
  ["path", { d: "M19.075 4.933a10 10 0 0 1 0 14.134", key: "ehdyv1" }],
  ["path", { d: "M4.925 19.067a10 10 0 0 1 0-14.134", key: "1q22gi" }],
  ["path", { d: "M7.753 16.239a6 6 0 0 1 0-8.478", key: "r2q7qm" }],
  ["circle", { cx: "12", cy: "12", r: "2", key: "1c9p78" }]
], ZD = e("radio", WD);
const GD = [
  ["path", { d: "M20.34 17.52a10 10 0 1 0-2.82 2.82", key: "fydyku" }],
  ["circle", { cx: "19", cy: "19", r: "2", key: "17f5cg" }],
  ["path", { d: "m13.41 13.41 4.18 4.18", key: "1gqbwc" }],
  ["circle", { cx: "12", cy: "12", r: "2", key: "1c9p78" }]
], XD = e("radius", GD);
const YD = [
  ["path", { d: "M22 17a10 10 0 0 0-20 0", key: "ozegv" }],
  ["path", { d: "M6 17a6 6 0 0 1 12 0", key: "5giftw" }],
  ["path", { d: "M10 17a2 2 0 0 1 4 0", key: "gnsikk" }]
], KD = e("rainbow", YD);
const QD = [
  ["path", { d: "M5 15h14", key: "m0yey3" }],
  ["path", { d: "M5 9h14", key: "7tsvo6" }],
  ["path", { d: "m14 20-5-5 6-6-5-5", key: "1jo42i" }]
], JD = e("rail-symbol", QD);
const eI = [
  ["path", { d: "M13 22H4a2 2 0 0 1 0-4h12", key: "bt3f23" }],
  ["path", { d: "M13.236 18a3 3 0 0 0-2.2-5", key: "1tbvmo" }],
  ["path", { d: "M16 9h.01", key: "1bdo4e" }],
  [
    "path",
    {
      d: "M16.82 3.94a3 3 0 1 1 3.237 4.868l1.815 2.587a1.5 1.5 0 0 1-1.5 2.1l-2.872-.453a3 3 0 0 0-3.5 3",
      key: "9ch7kn"
    }
  ],
  ["path", { d: "M17 4.988a3 3 0 1 0-5.2 2.052A7 7 0 0 0 4 14.015 4 4 0 0 0 8 18", key: "3s7e9i" }]
], tI = e("rat", eI);
const aI = [
  ["rect", { width: "12", height: "20", x: "6", y: "2", rx: "2", key: "1oxtiu" }],
  ["rect", { width: "20", height: "12", x: "2", y: "6", rx: "2", key: "9lu3g6" }]
], oI = e("ratio", aI);
const nI = [
  [
    "path",
    { d: "M4 2v20l2-1 2 1 2-1 2 1 2-1 2 1 2-1 2 1V2l-2 1-2-1-2 1-2-1-2 1-2-1-2 1Z", key: "q3az6g" }
  ],
  ["path", { d: "M12 6.5v11", key: "ecfhkf" }],
  ["path", { d: "M15 9.4a4 4 0 1 0 0 5.2", key: "1makmb" }]
], cI = e("receipt-cent", nI);
const rI = [
  [
    "path",
    { d: "M4 2v20l2-1 2 1 2-1 2 1 2-1 2 1 2-1 2 1V2l-2 1-2-1-2 1-2-1-2 1-2-1-2 1Z", key: "q3az6g" }
  ],
  ["path", { d: "M8 12h5", key: "1g6qi8" }],
  ["path", { d: "M16 9.5a4 4 0 1 0 0 5.2", key: "b2px4r" }]
], hI = e("receipt-euro", rI);
const dI = [
  [
    "path",
    { d: "M4 2v20l2-1 2 1 2-1 2 1 2-1 2 1 2-1 2 1V2l-2 1-2-1-2 1-2-1-2 1-2-1-2 1Z", key: "q3az6g" }
  ],
  ["path", { d: "M8 7h8", key: "i86dvs" }],
  ["path", { d: "M12 17.5 8 15h1a4 4 0 0 0 0-8", key: "grpkl4" }],
  ["path", { d: "M8 11h8", key: "vwpz6n" }]
], iI = e("receipt-indian-rupee", dI);
const sI = [
  [
    "path",
    { d: "M4 2v20l2-1 2 1 2-1 2 1 2-1 2 1 2-1 2 1V2l-2 1-2-1-2 1-2-1-2 1-2-1-2 1Z", key: "q3az6g" }
  ],
  ["path", { d: "m12 10 3-3", key: "1mc12w" }],
  ["path", { d: "m9 7 3 3v7.5", key: "39i0xv" }],
  ["path", { d: "M9 11h6", key: "1fldmi" }],
  ["path", { d: "M9 15h6", key: "cctwl0" }]
], yI = e("receipt-japanese-yen", sI);
const pI = [
  [
    "path",
    { d: "M4 2v20l2-1 2 1 2-1 2 1 2-1 2 1 2-1 2 1V2l-2 1-2-1-2 1-2-1-2 1-2-1-2 1Z", key: "q3az6g" }
  ],
  ["path", { d: "M8 13h5", key: "1k9z8w" }],
  ["path", { d: "M10 17V9.5a2.5 2.5 0 0 1 5 0", key: "1dzgp0" }],
  ["path", { d: "M8 17h7", key: "8mjdqu" }]
], kI = e("receipt-pound-sterling", pI);
const lI = [
  [
    "path",
    { d: "M4 2v20l2-1 2 1 2-1 2 1 2-1 2 1 2-1 2 1V2l-2 1-2-1-2 1-2-1-2 1-2-1-2 1Z", key: "q3az6g" }
  ],
  ["path", { d: "M8 15h5", key: "vxg57a" }],
  ["path", { d: "M8 11h5a2 2 0 1 0 0-4h-3v10", key: "1usi5u" }]
], uI = e("receipt-russian-ruble", lI);
const MI = [
  [
    "path",
    { d: "M4 2v20l2-1 2 1 2-1 2 1 2-1 2 1 2-1 2 1V2l-2 1-2-1-2 1-2-1-2 1-2-1-2 1Z", key: "q3az6g" }
  ],
  ["path", { d: "M10 17V7h5", key: "k7jq18" }],
  ["path", { d: "M10 11h4", key: "1i0mka" }],
  ["path", { d: "M8 15h5", key: "vxg57a" }]
], fI = e("receipt-swiss-franc", MI);
const mI = [
  ["path", { d: "M13 16H8", key: "wsln4y" }],
  ["path", { d: "M14 8H8", key: "1l3xfs" }],
  ["path", { d: "M16 12H8", key: "1fr5h0" }],
  [
    "path",
    {
      d: "M4 3a1 1 0 0 1 1-1 1.3 1.3 0 0 1 .7.2l.933.6a1.3 1.3 0 0 0 1.4 0l.934-.6a1.3 1.3 0 0 1 1.4 0l.933.6a1.3 1.3 0 0 0 1.4 0l.933-.6a1.3 1.3 0 0 1 1.4 0l.934.6a1.3 1.3 0 0 0 1.4 0l.933-.6A1.3 1.3 0 0 1 19 2a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1 1.3 1.3 0 0 1-.7-.2l-.933-.6a1.3 1.3 0 0 0-1.4 0l-.934.6a1.3 1.3 0 0 1-1.4 0l-.933-.6a1.3 1.3 0 0 0-1.4 0l-.933.6a1.3 1.3 0 0 1-1.4 0l-.934-.6a1.3 1.3 0 0 0-1.4 0l-.933.6a1.3 1.3 0 0 1-.7.2 1 1 0 0 1-1-1z",
      key: "ycz6yz"
    }
  ]
], vI = e("receipt-text", mI);
const gI = [
  [
    "path",
    { d: "M4 2v20l2-1 2 1 2-1 2 1 2-1 2 1 2-1 2 1V2l-2 1-2-1-2 1-2-1-2 1-2-1-2 1Z", key: "q3az6g" }
  ],
  ["path", { d: "M16 8h-6a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4H8", key: "1h4pet" }],
  ["path", { d: "M12 17.5v-11", key: "1jc1ny" }]
], _I = e("receipt", gI);
const xI = [
  ["path", { d: "M10 6.5v11a5.5 5.5 0 0 0 5.5-5.5", key: "nw10mp" }],
  ["path", { d: "m14 8-6 3", key: "2tb98i" }],
  [
    "path",
    { d: "M4 2v20l2-1 2 1 2-1 2 1 2-1 2 1 2-1 2 1V2l-2 1-2-1-2 1-2-1-2 1-2-1-2 1z", key: "io9ry0" }
  ]
], bI = e("receipt-turkish-lira", xI);
const wI = [
  ["path", { d: "M14 4v16H3a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1z", key: "1m5n7q" }],
  ["circle", { cx: "14", cy: "12", r: "8", key: "1pag6k" }]
], NI = e("rectangle-circle", wI);
const $I = [
  ["rect", { width: "20", height: "12", x: "2", y: "6", rx: "2", key: "9lu3g6" }],
  ["path", { d: "M12 12h.01", key: "1mp3jc" }],
  ["path", { d: "M17 12h.01", key: "1m0b6t" }],
  ["path", { d: "M7 12h.01", key: "eqddd0" }]
], zI = e("rectangle-ellipsis", $I);
const jI = [
  [
    "path",
    {
      d: "M20 6a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-4a2 2 0 0 1-1.6-.8l-1.6-2.13a1 1 0 0 0-1.6 0L9.6 17.2A2 2 0 0 1 8 18H4a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2z",
      key: "d5y1f"
    }
  ]
], qI = e("rectangle-goggles", jI);
const AI = [
  ["rect", { width: "20", height: "12", x: "2", y: "6", rx: "2", key: "9lu3g6" }]
], HI = e("rectangle-horizontal", AI);
const SI = [
  ["rect", { width: "12", height: "20", x: "6", y: "2", rx: "2", key: "1oxtiu" }]
], CI = e("rectangle-vertical", SI);
const VI = [
  ["path", { d: "m15 14 5-5-5-5", key: "12vg1m" }],
  ["path", { d: "M20 9H9.5A5.5 5.5 0 0 0 4 14.5A5.5 5.5 0 0 0 9.5 20H13", key: "6uklza" }]
], RI = e("redo-2", VI);
const EI = [
  ["circle", { cx: "12", cy: "17", r: "1", key: "1ixnty" }],
  ["path", { d: "M21 7v6h-6", key: "3ptur4" }],
  ["path", { d: "M3 17a9 9 0 0 1 9-9 9 9 0 0 1 6 2.3l3 2.7", key: "1kgawr" }]
], LI = e("redo-dot", EI);
const PI = [
  [
    "path",
    {
      d: "M7 19H4.815a1.83 1.83 0 0 1-1.57-.881 1.785 1.785 0 0 1-.004-1.784L7.196 9.5",
      key: "x6z5xu"
    }
  ],
  [
    "path",
    {
      d: "M11 19h8.203a1.83 1.83 0 0 0 1.556-.89 1.784 1.784 0 0 0 0-1.775l-1.226-2.12",
      key: "1x4zh5"
    }
  ],
  ["path", { d: "m14 16-3 3 3 3", key: "f6jyew" }],
  ["path", { d: "M8.293 13.596 7.196 9.5 3.1 10.598", key: "wf1obh" }],
  [
    "path",
    {
      d: "m9.344 5.811 1.093-1.892A1.83 1.83 0 0 1 11.985 3a1.784 1.784 0 0 1 1.546.888l3.943 6.843",
      key: "9tzpgr"
    }
  ],
  ["path", { d: "m13.378 9.633 4.096 1.098 1.097-4.096", key: "1oe83g" }]
], TI = e("recycle", PI);
const OI = [
  ["path", { d: "M21 7v6h-6", key: "3ptur4" }],
  ["path", { d: "M3 17a9 9 0 0 1 9-9 9 9 0 0 1 6 2.3l3 2.7", key: "1kgawr" }]
], DI = e("redo", OI);
const II = [
  ["path", { d: "M21 12a9 9 0 0 0-9-9 9.75 9.75 0 0 0-6.74 2.74L3 8", key: "14sxne" }],
  ["path", { d: "M3 3v5h5", key: "1xhq8a" }],
  ["path", { d: "M3 12a9 9 0 0 0 9 9 9.75 9.75 0 0 0 6.74-2.74L21 16", key: "1hlbsb" }],
  ["path", { d: "M16 16h5v5", key: "ccwih5" }],
  ["circle", { cx: "12", cy: "12", r: "1", key: "41hilf" }]
], FI = e("refresh-ccw-dot", II);
const BI = [
  ["path", { d: "M21 12a9 9 0 0 0-9-9 9.75 9.75 0 0 0-6.74 2.74L3 8", key: "14sxne" }],
  ["path", { d: "M3 3v5h5", key: "1xhq8a" }],
  ["path", { d: "M3 12a9 9 0 0 0 9 9 9.75 9.75 0 0 0 6.74-2.74L21 16", key: "1hlbsb" }],
  ["path", { d: "M16 16h5v5", key: "ccwih5" }]
], UI = e("refresh-ccw", BI);
const WI = [
  ["path", { d: "M21 8L18.74 5.74A9.75 9.75 0 0 0 12 3C11 3 10.03 3.16 9.13 3.47", key: "1krf6h" }],
  ["path", { d: "M8 16H3v5", key: "1cv678" }],
  ["path", { d: "M3 12C3 9.51 4 7.26 5.64 5.64", key: "ruvoct" }],
  ["path", { d: "m3 16 2.26 2.26A9.75 9.75 0 0 0 12 21c2.49 0 4.74-1 6.36-2.64", key: "19q130" }],
  ["path", { d: "M21 12c0 1-.16 1.97-.47 2.87", key: "4w8emr" }],
  ["path", { d: "M21 3v5h-5", key: "1q7to0" }],
  ["path", { d: "M22 22 2 2", key: "1r8tn9" }]
], ZI = e("refresh-cw-off", WI);
const GI = [
  ["path", { d: "M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8", key: "v9h5vc" }],
  ["path", { d: "M21 3v5h-5", key: "1q7to0" }],
  ["path", { d: "M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16", key: "3uifl3" }],
  ["path", { d: "M8 16H3v5", key: "1cv678" }]
], XI = e("refresh-cw", GI);
const YI = [
  [
    "path",
    { d: "M5 6a4 4 0 0 1 4-4h6a4 4 0 0 1 4 4v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6Z", key: "fpq118" }
  ],
  ["path", { d: "M5 10h14", key: "elsbfy" }],
  ["path", { d: "M15 7v6", key: "1nx30x" }]
], KI = e("refrigerator", YI);
const QI = [
  ["path", { d: "M17 3v10", key: "15fgeh" }],
  ["path", { d: "m12.67 5.5 8.66 5", key: "1gpheq" }],
  ["path", { d: "m12.67 10.5 8.66-5", key: "1dkfa6" }],
  [
    "path",
    { d: "M9 17a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v2a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2v-2z", key: "swwfx4" }
  ]
], JI = e("regex", QI);
const eF = [
  ["path", { d: "M4 7V4h16v3", key: "9msm58" }],
  ["path", { d: "M5 20h6", key: "1h6pxn" }],
  ["path", { d: "M13 4 8 20", key: "kqq6aj" }],
  ["path", { d: "m15 15 5 5", key: "me55sn" }],
  ["path", { d: "m20 15-5 5", key: "11p7ol" }]
], tF = e("remove-formatting", eF);
const aF = [
  ["path", { d: "m17 2 4 4-4 4", key: "nntrym" }],
  ["path", { d: "M3 11v-1a4 4 0 0 1 4-4h14", key: "84bu3i" }],
  ["path", { d: "m7 22-4-4 4-4", key: "1wqhfi" }],
  ["path", { d: "M21 13v1a4 4 0 0 1-4 4H3", key: "1rx37r" }],
  ["path", { d: "M11 10h1v4", key: "70cz1p" }]
], oF = e("repeat-1", aF);
const nF = [
  ["path", { d: "m2 9 3-3 3 3", key: "1ltn5i" }],
  ["path", { d: "M13 18H7a2 2 0 0 1-2-2V6", key: "1r6tfw" }],
  ["path", { d: "m22 15-3 3-3-3", key: "4rnwn2" }],
  ["path", { d: "M11 6h6a2 2 0 0 1 2 2v10", key: "2f72bc" }]
], cF = e("repeat-2", nF);
const rF = [
  ["path", { d: "m17 2 4 4-4 4", key: "nntrym" }],
  ["path", { d: "M3 11v-1a4 4 0 0 1 4-4h14", key: "84bu3i" }],
  ["path", { d: "m7 22-4-4 4-4", key: "1wqhfi" }],
  ["path", { d: "M21 13v1a4 4 0 0 1-4 4H3", key: "1rx37r" }]
], hF = e("repeat", rF);
const dF = [
  ["path", { d: "M14 14a1 1 0 0 1 1 1v5a1 1 0 0 1-1 1", key: "zg1ipl" }],
  ["path", { d: "M14 4a1 1 0 0 1 1-1", key: "dhj8ez" }],
  ["path", { d: "M15 10a1 1 0 0 1-1-1", key: "1mnyi5" }],
  ["path", { d: "M19 14a1 1 0 0 1 1 1v5a1 1 0 0 1-1 1", key: "txt6k4" }],
  ["path", { d: "M21 4a1 1 0 0 0-1-1", key: "sfs9ap" }],
  ["path", { d: "M21 9a1 1 0 0 1-1 1", key: "mp6qeo" }],
  ["path", { d: "m3 7 3 3 3-3", key: "x25e72" }],
  ["path", { d: "M6 10V5a2 2 0 0 1 2-2h2", key: "15xut4" }],
  ["rect", { x: "3", y: "14", width: "7", height: "7", rx: "1", key: "1bkyp8" }]
], iF = e("replace-all", dF);
const sF = [
  ["path", { d: "M14 4a1 1 0 0 1 1-1", key: "dhj8ez" }],
  ["path", { d: "M15 10a1 1 0 0 1-1-1", key: "1mnyi5" }],
  ["path", { d: "M21 4a1 1 0 0 0-1-1", key: "sfs9ap" }],
  ["path", { d: "M21 9a1 1 0 0 1-1 1", key: "mp6qeo" }],
  ["path", { d: "m3 7 3 3 3-3", key: "x25e72" }],
  ["path", { d: "M6 10V5a2 2 0 0 1 2-2h2", key: "15xut4" }],
  ["rect", { x: "3", y: "14", width: "7", height: "7", rx: "1", key: "1bkyp8" }]
], yF = e("replace", sF);
const pF = [
  ["path", { d: "m12 17-5-5 5-5", key: "1s3y5u" }],
  ["path", { d: "M22 18v-2a4 4 0 0 0-4-4H7", key: "1fcyog" }],
  ["path", { d: "m7 17-5-5 5-5", key: "1ed8i2" }]
], kF = e("reply-all", pF);
const lF = [
  ["path", { d: "M20 18v-2a4 4 0 0 0-4-4H4", key: "5vmcpk" }],
  ["path", { d: "m9 17-5-5 5-5", key: "nvlc11" }]
], uF = e("reply", lF);
const MF = [
  [
    "path",
    { d: "M12 6a2 2 0 0 0-3.414-1.414l-6 6a2 2 0 0 0 0 2.828l6 6A2 2 0 0 0 12 18z", key: "2a1g8i" }
  ],
  [
    "path",
    { d: "M22 6a2 2 0 0 0-3.414-1.414l-6 6a2 2 0 0 0 0 2.828l6 6A2 2 0 0 0 22 18z", key: "rg3s36" }
  ]
], fF = e("rewind", MF);
const mF = [
  [
    "path",
    { d: "M12 11.22C11 9.997 10 9 10 8a2 2 0 0 1 4 0c0 1-.998 2.002-2.01 3.22", key: "1rnhq3" }
  ],
  ["path", { d: "m12 18 2.57-3.5", key: "116vt7" }],
  ["path", { d: "M6.243 9.016a7 7 0 0 1 11.507-.009", key: "10dq0b" }],
  ["path", { d: "M9.35 14.53 12 11.22", key: "tdsyp2" }],
  [
    "path",
    {
      d: "M9.35 14.53C7.728 12.246 6 10.221 6 7a6 5 0 0 1 12 0c-.005 3.22-1.778 5.235-3.43 7.5l3.557 4.527a1 1 0 0 1-.203 1.43l-1.894 1.36a1 1 0 0 1-1.384-.215L12 18l-2.679 3.593a1 1 0 0 1-1.39.213l-1.865-1.353a1 1 0 0 1-.203-1.422z",
      key: "nmifey"
    }
  ]
], vF = e("ribbon", mF);
const gF = [
  [
    "path",
    {
      d: "M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z",
      key: "m3kijz"
    }
  ],
  [
    "path",
    {
      d: "m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z",
      key: "1fmvmk"
    }
  ],
  ["path", { d: "M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0", key: "1f8sc4" }],
  ["path", { d: "M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5", key: "qeys4" }]
], _F = e("rocket", gF);
const xF = [
  ["polyline", { points: "3.5 2 6.5 12.5 18 12.5", key: "y3iy52" }],
  ["line", { x1: "9.5", x2: "5.5", y1: "12.5", y2: "20", key: "19vg5i" }],
  ["line", { x1: "15", x2: "18.5", y1: "12.5", y2: "20", key: "1inpmv" }],
  ["path", { d: "M2.75 18a13 13 0 0 0 18.5 0", key: "1nquas" }]
], bF = e("rocking-chair", xF);
const wF = [
  ["path", { d: "M6 19V5", key: "1r845m" }],
  ["path", { d: "M10 19V6.8", key: "9j2tfs" }],
  ["path", { d: "M14 19v-7.8", key: "10s8qv" }],
  ["path", { d: "M18 5v4", key: "1tajlv" }],
  ["path", { d: "M18 19v-6", key: "ielfq3" }],
  ["path", { d: "M22 19V9", key: "158nzp" }],
  ["path", { d: "M2 19V9a4 4 0 0 1 4-4c2 0 4 1.33 6 4s4 4 6 4a4 4 0 1 0-3-6.65", key: "1930oh" }]
], NF = e("roller-coaster", wF);
const $F = [
  ["path", { d: "M17 10h-1a4 4 0 1 1 4-4v.534", key: "7qf5zm" }],
  [
    "path",
    { d: "M17 6h1a4 4 0 0 1 1.42 7.74l-2.29.87a6 6 0 0 1-5.339-10.68l2.069-1.31", key: "1et29u" }
  ],
  [
    "path",
    {
      d: "M4.5 17c2.8-.5 4.4 0 5.5.8s1.8 2.2 2.3 3.7c-2 .4-3.5.4-4.8-.3-1.2-.6-2.3-1.9-3-4.2",
      key: "kiv2lz"
    }
  ],
  ["path", { d: "M9.77 12C4 15 2 22 2 22", key: "h28rw0" }],
  ["circle", { cx: "17", cy: "8", r: "2", key: "1330xn" }]
], zF = e("rose", $F);
const jF = [
  [
    "path",
    {
      d: "M16.466 7.5C15.643 4.237 13.952 2 12 2 9.239 2 7 6.477 7 12s2.239 10 5 10c.342 0 .677-.069 1-.2",
      key: "10n0gc"
    }
  ],
  ["path", { d: "m15.194 13.707 3.814 1.86-1.86 3.814", key: "16shm9" }],
  [
    "path",
    {
      d: "M19 15.57c-1.804.885-4.274 1.43-7 1.43-5.523 0-10-2.239-10-5s4.477-5 10-5c4.838 0 8.873 1.718 9.8 4",
      key: "1lxi77"
    }
  ]
], qF = e("rotate-3d", jF);
const AF = [
  ["path", { d: "m14.5 9.5 1 1", key: "159eiq" }],
  ["path", { d: "m15.5 8.5-4 4", key: "iirg3q" }],
  ["path", { d: "M3 12a9 9 0 1 0 9-9 9.74 9.74 0 0 0-6.74 2.74L3 8", key: "g2jlw" }],
  ["path", { d: "M3 3v5h5", key: "1xhq8a" }],
  ["circle", { cx: "10", cy: "14", r: "2", key: "1239so" }]
], HF = e("rotate-ccw-key", AF);
const SF = [
  ["path", { d: "M20 9V7a2 2 0 0 0-2-2h-6", key: "19z8uc" }],
  ["path", { d: "m15 2-3 3 3 3", key: "177bxs" }],
  ["path", { d: "M20 13v5a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h2", key: "d36hnl" }]
], CF = e("rotate-ccw-square", SF);
const VF = [
  ["path", { d: "M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8", key: "1357e3" }],
  ["path", { d: "M3 3v5h5", key: "1xhq8a" }]
], RF = e("rotate-ccw", VF);
const EF = [
  ["path", { d: "M12 5H6a2 2 0 0 0-2 2v3", key: "l96uqu" }],
  ["path", { d: "m9 8 3-3-3-3", key: "1gzgc3" }],
  ["path", { d: "M4 14v4a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-2", key: "1w2k5h" }]
], LF = e("rotate-cw-square", EF);
const PF = [
  ["path", { d: "M21 12a9 9 0 1 1-9-9c2.52 0 4.93 1 6.74 2.74L21 8", key: "1p45f6" }],
  ["path", { d: "M21 3v5h-5", key: "1q7to0" }]
], TF = e("rotate-cw", PF);
const OF = [
  ["circle", { cx: "6", cy: "19", r: "3", key: "1kj8tv" }],
  ["path", { d: "M9 19h8.5c.4 0 .9-.1 1.3-.2", key: "1effex" }],
  ["path", { d: "M5.2 5.2A3.5 3.53 0 0 0 6.5 12H12", key: "k9y2ds" }],
  ["path", { d: "m2 2 20 20", key: "1ooewy" }],
  ["path", { d: "M21 15.3a3.5 3.5 0 0 0-3.3-3.3", key: "11nlu2" }],
  ["path", { d: "M15 5h-4.3", key: "6537je" }],
  ["circle", { cx: "18", cy: "5", r: "3", key: "gq8acd" }]
], DF = e("route-off", OF);
const IF = [
  ["circle", { cx: "6", cy: "19", r: "3", key: "1kj8tv" }],
  ["path", { d: "M9 19h8.5a3.5 3.5 0 0 0 0-7h-11a3.5 3.5 0 0 1 0-7H15", key: "1d8sl" }],
  ["circle", { cx: "18", cy: "5", r: "3", key: "gq8acd" }]
], FF = e("route", IF);
const BF = [
  ["rect", { width: "20", height: "8", x: "2", y: "14", rx: "2", key: "w68u3i" }],
  ["path", { d: "M6.01 18H6", key: "19vcac" }],
  ["path", { d: "M10.01 18H10", key: "uamcmx" }],
  ["path", { d: "M15 10v4", key: "qjz1xs" }],
  ["path", { d: "M17.84 7.17a4 4 0 0 0-5.66 0", key: "1rif40" }],
  ["path", { d: "M20.66 4.34a8 8 0 0 0-11.31 0", key: "6a5xfq" }]
], UF = e("router", BF);
const WF = [
  ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", key: "afitv7" }],
  ["path", { d: "M3 12h18", key: "1i2n21" }]
], ZF = e("rows-2", WF);
const GF = [
  ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", key: "afitv7" }],
  ["path", { d: "M21 9H3", key: "1338ky" }],
  ["path", { d: "M21 15H3", key: "9uk58r" }]
], XF = e("rows-3", GF);
const YF = [
  ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", key: "afitv7" }],
  ["path", { d: "M21 7.5H3", key: "1hm9pq" }],
  ["path", { d: "M21 12H3", key: "2avoz0" }],
  ["path", { d: "M21 16.5H3", key: "n7jzkj" }]
], KF = e("rows-4", YF);
const QF = [
  ["path", { d: "M4 11a9 9 0 0 1 9 9", key: "pv89mb" }],
  ["path", { d: "M4 4a16 16 0 0 1 16 16", key: "k0647b" }],
  ["circle", { cx: "5", cy: "19", r: "1", key: "bfqh0e" }]
], JF = e("rss", QF);
const eB = [
  ["path", { d: "M10 15v-3", key: "1pjskw" }],
  ["path", { d: "M14 15v-3", key: "1o1mqj" }],
  ["path", { d: "M18 15v-3", key: "cws6he" }],
  ["path", { d: "M2 8V4", key: "3jv1jz" }],
  ["path", { d: "M22 6H2", key: "1iqbfk" }],
  ["path", { d: "M22 8V4", key: "16f4ou" }],
  ["path", { d: "M6 15v-3", key: "1ij1qe" }],
  ["rect", { x: "2", y: "12", width: "20", height: "8", rx: "2", key: "1tqiko" }]
], tB = e("ruler-dimension-line", eB);
const aB = [
  ["path", { d: "M6 11h8a4 4 0 0 0 0-8H9v18", key: "18ai8t" }],
  ["path", { d: "M6 15h8", key: "1y8f6l" }]
], oB = e("russian-ruble", aB);
const nB = [
  ["path", { d: "M10 2v15", key: "1qf71f" }],
  [
    "path",
    { d: "M7 22a4 4 0 0 1-4-4 1 1 0 0 1 1-1h16a1 1 0 0 1 1 1 4 4 0 0 1-4 4z", key: "1pxcvx" }
  ],
  [
    "path",
    {
      d: "M9.159 2.46a1 1 0 0 1 1.521-.193l9.977 8.98A1 1 0 0 1 20 13H4a1 1 0 0 1-.824-1.567z",
      key: "5oog16"
    }
  ]
], cB = e("sailboat", nB);
const rB = [
  ["path", { d: "M7 21h10", key: "1b0cd5" }],
  ["path", { d: "M12 21a9 9 0 0 0 9-9H3a9 9 0 0 0 9 9Z", key: "4rw317" }],
  [
    "path",
    {
      d: "M11.38 12a2.4 2.4 0 0 1-.4-4.77 2.4 2.4 0 0 1 3.2-2.77 2.4 2.4 0 0 1 3.47-.63 2.4 2.4 0 0 1 3.37 3.37 2.4 2.4 0 0 1-1.1 3.7 2.51 2.51 0 0 1 .03 1.1",
      key: "10xrj0"
    }
  ],
  ["path", { d: "m13 12 4-4", key: "1hckqy" }],
  ["path", { d: "M10.9 7.25A3.99 3.99 0 0 0 4 10c0 .73.2 1.41.54 2", key: "1p4srx" }]
], hB = e("salad", rB);
const dB = [
  [
    "path",
    {
      d: "M21.3 15.3a2.4 2.4 0 0 1 0 3.4l-2.6 2.6a2.4 2.4 0 0 1-3.4 0L2.7 8.7a2.41 2.41 0 0 1 0-3.4l2.6-2.6a2.41 2.41 0 0 1 3.4 0Z",
      key: "icamh8"
    }
  ],
  ["path", { d: "m14.5 12.5 2-2", key: "inckbg" }],
  ["path", { d: "m11.5 9.5 2-2", key: "fmmyf7" }],
  ["path", { d: "m8.5 6.5 2-2", key: "vc6u1g" }],
  ["path", { d: "m17.5 15.5 2-2", key: "wo5hmg" }]
], iB = e("ruler", dB);
const sB = [
  ["path", { d: "m2.37 11.223 8.372-6.777a2 2 0 0 1 2.516 0l8.371 6.777", key: "f1wd0e" }],
  ["path", { d: "M21 15a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-5.25", key: "1pfu07" }],
  ["path", { d: "M3 15a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h9", key: "1oq9qw" }],
  ["path", { d: "m6.67 15 6.13 4.6a2 2 0 0 0 2.8-.4l3.15-4.2", key: "1fnwu5" }],
  ["rect", { width: "20", height: "4", x: "2", y: "11", rx: "1", key: "itshg" }]
], yB = e("sandwich", sB);
const pB = [
  ["path", { d: "M4 10a7.31 7.31 0 0 0 10 10Z", key: "1fzpp3" }],
  ["path", { d: "m9 15 3-3", key: "88sc13" }],
  ["path", { d: "M17 13a6 6 0 0 0-6-6", key: "15cc6u" }],
  ["path", { d: "M21 13A10 10 0 0 0 11 3", key: "11nf8s" }]
], kB = e("satellite-dish", pB);
const lB = [
  [
    "path",
    {
      d: "m13.5 6.5-3.148-3.148a1.205 1.205 0 0 0-1.704 0L6.352 5.648a1.205 1.205 0 0 0 0 1.704L9.5 10.5",
      key: "dzhfyz"
    }
  ],
  ["path", { d: "M16.5 7.5 19 5", key: "1ltcjm" }],
  [
    "path",
    {
      d: "m17.5 10.5 3.148 3.148a1.205 1.205 0 0 1 0 1.704l-2.296 2.296a1.205 1.205 0 0 1-1.704 0L13.5 14.5",
      key: "nfoymv"
    }
  ],
  ["path", { d: "M9 21a6 6 0 0 0-6-6", key: "1iajcf" }],
  [
    "path",
    {
      d: "M9.352 10.648a1.205 1.205 0 0 0 0 1.704l2.296 2.296a1.205 1.205 0 0 0 1.704 0l4.296-4.296a1.205 1.205 0 0 0 0-1.704l-2.296-2.296a1.205 1.205 0 0 0-1.704 0z",
      key: "nv9zqy"
    }
  ]
], uB = e("satellite", lB);
const MB = [
  ["path", { d: "m20 19.5-5.5 1.2", key: "1aenhr" }],
  ["path", { d: "M14.5 4v11.22a1 1 0 0 0 1.242.97L20 15.2", key: "2rtezt" }],
  ["path", { d: "m2.978 19.351 5.549-1.363A2 2 0 0 0 10 16V2", key: "1kbm92" }],
  ["path", { d: "M20 10 4 13.5", key: "8nums9" }]
], fB = e("saudi-riyal", MB);
const mB = [
  ["path", { d: "M13 13H8a1 1 0 0 0-1 1v7", key: "h8g396" }],
  ["path", { d: "M14 8h1", key: "1lfen6" }],
  ["path", { d: "M17 21v-4", key: "1yknxs" }],
  ["path", { d: "m2 2 20 20", key: "1ooewy" }],
  [
    "path",
    { d: "M20.41 20.41A2 2 0 0 1 19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 .59-1.41", key: "1t4vdl" }
  ],
  ["path", { d: "M29.5 11.5s5 5 4 5", key: "zzn4i6" }],
  ["path", { d: "M9 3h6.2a2 2 0 0 1 1.4.6l3.8 3.8a2 2 0 0 1 .6 1.4V15", key: "24cby9" }]
], vB = e("save-off", mB);
const gB = [
  ["path", { d: "M10 2v3a1 1 0 0 0 1 1h5", key: "1xspal" }],
  ["path", { d: "M18 18v-6a1 1 0 0 0-1-1h-6a1 1 0 0 0-1 1v6", key: "1ra60u" }],
  ["path", { d: "M18 22H4a2 2 0 0 1-2-2V6", key: "pblm9e" }],
  [
    "path",
    {
      d: "M8 18a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9.172a2 2 0 0 1 1.414.586l2.828 2.828A2 2 0 0 1 22 6.828V16a2 2 0 0 1-2.01 2z",
      key: "1yve0x"
    }
  ]
], _B = e("save-all", gB);
const xB = [
  [
    "path",
    {
      d: "M15.2 3a2 2 0 0 1 1.4.6l3.8 3.8a2 2 0 0 1 .6 1.4V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z",
      key: "1c8476"
    }
  ],
  ["path", { d: "M17 21v-7a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1v7", key: "1ydtos" }],
  ["path", { d: "M7 3v4a1 1 0 0 0 1 1h7", key: "t51u73" }]
], bB = e("save", xB);
const wB = [
  ["path", { d: "M5 7v11a1 1 0 0 0 1 1h11", key: "13dt1j" }],
  ["path", { d: "M5.293 18.707 11 13", key: "ezgbsx" }],
  ["circle", { cx: "19", cy: "19", r: "2", key: "17f5cg" }],
  ["circle", { cx: "5", cy: "5", r: "2", key: "1gwv83" }]
], NB = e("scale-3d", wB);
const $B = [
  ["path", { d: "M12 3v18", key: "108xh3" }],
  ["path", { d: "m19 8 3 8a5 5 0 0 1-6 0zV7", key: "zcdpyk" }],
  ["path", { d: "M3 7h1a17 17 0 0 0 8-2 17 17 0 0 0 8 2h1", key: "1yorad" }],
  ["path", { d: "m5 8 3 8a5 5 0 0 1-6 0zV7", key: "eua70x" }],
  ["path", { d: "M7 21h10", key: "1b0cd5" }]
], zB = e("scale", $B);
const jB = [
  ["path", { d: "M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7", key: "1m0v6g" }],
  ["path", { d: "M14 15H9v-5", key: "pi4jk9" }],
  ["path", { d: "M16 3h5v5", key: "1806ms" }],
  ["path", { d: "M21 3 9 15", key: "15kdhq" }]
], qB = e("scaling", jB);
const AB = [
  ["path", { d: "M3 7V5a2 2 0 0 1 2-2h2", key: "aa7l1z" }],
  ["path", { d: "M17 3h2a2 2 0 0 1 2 2v2", key: "4qcy5o" }],
  ["path", { d: "M21 17v2a2 2 0 0 1-2 2h-2", key: "6vwrx8" }],
  ["path", { d: "M7 21H5a2 2 0 0 1-2-2v-2", key: "ioqczr" }],
  ["path", { d: "M8 7v10", key: "23sfjj" }],
  ["path", { d: "M12 7v10", key: "jspqdw" }],
  ["path", { d: "M17 7v10", key: "578dap" }]
], HB = e("scan-barcode", AB);
const SB = [
  ["path", { d: "M3 7V5a2 2 0 0 1 2-2h2", key: "aa7l1z" }],
  ["path", { d: "M17 3h2a2 2 0 0 1 2 2v2", key: "4qcy5o" }],
  ["path", { d: "M21 17v2a2 2 0 0 1-2 2h-2", key: "6vwrx8" }],
  ["path", { d: "M7 21H5a2 2 0 0 1-2-2v-2", key: "ioqczr" }],
  ["circle", { cx: "12", cy: "12", r: "1", key: "41hilf" }],
  [
    "path",
    {
      d: "M18.944 12.33a1 1 0 0 0 0-.66 7.5 7.5 0 0 0-13.888 0 1 1 0 0 0 0 .66 7.5 7.5 0 0 0 13.888 0",
      key: "11ak4c"
    }
  ]
], CB = e("scan-eye", SB);
const VB = [
  ["path", { d: "M3 7V5a2 2 0 0 1 2-2h2", key: "aa7l1z" }],
  ["path", { d: "M17 3h2a2 2 0 0 1 2 2v2", key: "4qcy5o" }],
  ["path", { d: "M21 17v2a2 2 0 0 1-2 2h-2", key: "6vwrx8" }],
  ["path", { d: "M7 21H5a2 2 0 0 1-2-2v-2", key: "ioqczr" }],
  ["path", { d: "M8 14s1.5 2 4 2 4-2 4-2", key: "1y1vjs" }],
  ["path", { d: "M9 9h.01", key: "1q5me6" }],
  ["path", { d: "M15 9h.01", key: "x1ddxp" }]
], RB = e("scan-face", VB);
const EB = [
  ["path", { d: "M17 3h2a2 2 0 0 1 2 2v2", key: "4qcy5o" }],
  ["path", { d: "M21 17v2a2 2 0 0 1-2 2h-2", key: "6vwrx8" }],
  ["path", { d: "M3 7V5a2 2 0 0 1 2-2h2", key: "aa7l1z" }],
  ["path", { d: "M7 21H5a2 2 0 0 1-2-2v-2", key: "ioqczr" }],
  [
    "path",
    {
      d: "M7.828 13.07A3 3 0 0 1 12 8.764a3 3 0 0 1 4.172 4.306l-3.447 3.62a1 1 0 0 1-1.449 0z",
      key: "1ak1ef"
    }
  ]
], LB = e("scan-heart", EB);
const PB = [
  ["path", { d: "M3 7V5a2 2 0 0 1 2-2h2", key: "aa7l1z" }],
  ["path", { d: "M17 3h2a2 2 0 0 1 2 2v2", key: "4qcy5o" }],
  ["path", { d: "M21 17v2a2 2 0 0 1-2 2h-2", key: "6vwrx8" }],
  ["path", { d: "M7 21H5a2 2 0 0 1-2-2v-2", key: "ioqczr" }],
  ["path", { d: "M7 12h10", key: "b7w52i" }]
], TB = e("scan-line", PB);
const OB = [
  ["path", { d: "M17 12v4a1 1 0 0 1-1 1h-4", key: "uk4fdo" }],
  ["path", { d: "M17 3h2a2 2 0 0 1 2 2v2", key: "4qcy5o" }],
  ["path", { d: "M17 8V7", key: "q2g9wo" }],
  ["path", { d: "M21 17v2a2 2 0 0 1-2 2h-2", key: "6vwrx8" }],
  ["path", { d: "M3 7V5a2 2 0 0 1 2-2h2", key: "aa7l1z" }],
  ["path", { d: "M7 17h.01", key: "19xn7k" }],
  ["path", { d: "M7 21H5a2 2 0 0 1-2-2v-2", key: "ioqczr" }],
  ["rect", { x: "7", y: "7", width: "5", height: "5", rx: "1", key: "m9kyts" }]
], DB = e("scan-qr-code", OB);
const IB = [
  ["path", { d: "M3 7V5a2 2 0 0 1 2-2h2", key: "aa7l1z" }],
  ["path", { d: "M17 3h2a2 2 0 0 1 2 2v2", key: "4qcy5o" }],
  ["path", { d: "M21 17v2a2 2 0 0 1-2 2h-2", key: "6vwrx8" }],
  ["path", { d: "M7 21H5a2 2 0 0 1-2-2v-2", key: "ioqczr" }],
  ["circle", { cx: "12", cy: "12", r: "3", key: "1v7zrd" }],
  ["path", { d: "m16 16-1.9-1.9", key: "1dq9hf" }]
], FB = e("scan-search", IB);
const BB = [
  ["path", { d: "M3 7V5a2 2 0 0 1 2-2h2", key: "aa7l1z" }],
  ["path", { d: "M17 3h2a2 2 0 0 1 2 2v2", key: "4qcy5o" }],
  ["path", { d: "M21 17v2a2 2 0 0 1-2 2h-2", key: "6vwrx8" }],
  ["path", { d: "M7 21H5a2 2 0 0 1-2-2v-2", key: "ioqczr" }]
], UB = e("scan", BB);
const WB = [
  ["path", { d: "M3 7V5a2 2 0 0 1 2-2h2", key: "aa7l1z" }],
  ["path", { d: "M17 3h2a2 2 0 0 1 2 2v2", key: "4qcy5o" }],
  ["path", { d: "M21 17v2a2 2 0 0 1-2 2h-2", key: "6vwrx8" }],
  ["path", { d: "M7 21H5a2 2 0 0 1-2-2v-2", key: "ioqczr" }],
  ["path", { d: "M7 8h8", key: "1jbsf9" }],
  ["path", { d: "M7 12h10", key: "b7w52i" }],
  ["path", { d: "M7 16h6", key: "1vyc9m" }]
], ZB = e("scan-text", WB);
const GB = [
  ["path", { d: "M5.42 9.42 8 12", key: "12pkuq" }],
  ["circle", { cx: "4", cy: "8", r: "2", key: "107mxr" }],
  ["path", { d: "m14 6-8.58 8.58", key: "gvzu5l" }],
  ["circle", { cx: "4", cy: "16", r: "2", key: "1ehqvc" }],
  ["path", { d: "M10.8 14.8 14 18", key: "ax7m9r" }],
  ["path", { d: "M16 12h-2", key: "10asgb" }],
  ["path", { d: "M22 12h-2", key: "14jgyd" }]
], XB = e("scissors-line-dashed", GB);
const YB = [
  ["path", { d: "M14 21v-3a2 2 0 0 0-4 0v3", key: "1rgiei" }],
  ["path", { d: "M18 5v16", key: "1ethyx" }],
  ["path", { d: "m4 6 7.106-3.79a2 2 0 0 1 1.788 0L20 6", key: "zywc2d" }],
  [
    "path",
    {
      d: "m6 11-3.52 2.147a1 1 0 0 0-.48.854V19a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-5a1 1 0 0 0-.48-.853L18 11",
      key: "1d4ql0"
    }
  ],
  ["path", { d: "M6 5v16", key: "1sn0nx" }],
  ["circle", { cx: "12", cy: "9", r: "2", key: "1092wv" }]
], KB = e("school", YB);
const QB = [
  ["circle", { cx: "6", cy: "6", r: "3", key: "1lh9wr" }],
  ["path", { d: "M8.12 8.12 12 12", key: "1alkpv" }],
  ["path", { d: "M20 4 8.12 15.88", key: "xgtan2" }],
  ["circle", { cx: "6", cy: "18", r: "3", key: "fqmcym" }],
  ["path", { d: "M14.8 14.8 20 20", key: "ptml3r" }]
], JB = e("scissors", QB);
const eU = [
  ["path", { d: "M21 4h-3.5l2 11.05", key: "1gktiw" }],
  [
    "path",
    { d: "M6.95 17h5.142c.523 0 .95-.406 1.063-.916a6.5 6.5 0 0 1 5.345-5.009", key: "1bq3u3" }
  ],
  ["circle", { cx: "19.5", cy: "17.5", r: "2.5", key: "e4zhv9" }],
  ["circle", { cx: "4.5", cy: "17.5", r: "2.5", key: "50vk4p" }]
], tU = e("scooter", eU);
const aU = [
  ["path", { d: "M13 3H4a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-3", key: "i8wdob" }],
  ["path", { d: "M8 21h8", key: "1ev6f3" }],
  ["path", { d: "M12 17v4", key: "1riwvh" }],
  ["path", { d: "m22 3-5 5", key: "12jva0" }],
  ["path", { d: "m17 3 5 5", key: "k36vhe" }]
], oU = e("screen-share-off", aU);
const nU = [
  ["path", { d: "M13 3H4a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-3", key: "i8wdob" }],
  ["path", { d: "M8 21h8", key: "1ev6f3" }],
  ["path", { d: "M12 17v4", key: "1riwvh" }],
  ["path", { d: "m17 8 5-5", key: "fqif7o" }],
  ["path", { d: "M17 3h5v5", key: "1o3tu8" }]
], cU = e("screen-share", nU);
const rU = [
  ["path", { d: "M19 17V5a2 2 0 0 0-2-2H4", key: "zz82l3" }],
  [
    "path",
    {
      d: "M8 21h12a2 2 0 0 0 2-2v-1a1 1 0 0 0-1-1H11a1 1 0 0 0-1 1v1a2 2 0 1 1-4 0V5a2 2 0 1 0-4 0v2a1 1 0 0 0 1 1h3",
      key: "1ph1d7"
    }
  ]
], hU = e("scroll", rU);
const dU = [
  ["circle", { cx: "11", cy: "11", r: "8", key: "4ej97u" }],
  ["path", { d: "m21 21-4.3-4.3", key: "1qie3q" }],
  ["path", { d: "M11 7v4", key: "m2edmq" }],
  ["path", { d: "M11 15h.01", key: "k85uqc" }]
], iU = e("search-alert", dU);
const sU = [
  ["path", { d: "M15 12h-5", key: "r7krc0" }],
  ["path", { d: "M15 8h-5", key: "1khuty" }],
  ["path", { d: "M19 17V5a2 2 0 0 0-2-2H4", key: "zz82l3" }],
  [
    "path",
    {
      d: "M8 21h12a2 2 0 0 0 2-2v-1a1 1 0 0 0-1-1H11a1 1 0 0 0-1 1v1a2 2 0 1 1-4 0V5a2 2 0 1 0-4 0v2a1 1 0 0 0 1 1h3",
      key: "1ph1d7"
    }
  ]
], yU = e("scroll-text", sU);
const pU = [
  ["path", { d: "m8 11 2 2 4-4", key: "1sed1v" }],
  ["circle", { cx: "11", cy: "11", r: "8", key: "4ej97u" }],
  ["path", { d: "m21 21-4.3-4.3", key: "1qie3q" }]
], kU = e("search-check", pU);
const lU = [
  ["path", { d: "m13 13.5 2-2.5-2-2.5", key: "1rvxrh" }],
  ["path", { d: "m21 21-4.3-4.3", key: "1qie3q" }],
  ["path", { d: "M9 8.5 7 11l2 2.5", key: "6ffwbx" }],
  ["circle", { cx: "11", cy: "11", r: "8", key: "4ej97u" }]
], uU = e("search-code", lU);
const MU = [
  ["path", { d: "m13.5 8.5-5 5", key: "1cs55j" }],
  ["circle", { cx: "11", cy: "11", r: "8", key: "4ej97u" }],
  ["path", { d: "m21 21-4.3-4.3", key: "1qie3q" }]
], fU = e("search-slash", MU);
const mU = [
  ["path", { d: "m13.5 8.5-5 5", key: "1cs55j" }],
  ["path", { d: "m8.5 8.5 5 5", key: "a8mexj" }],
  ["circle", { cx: "11", cy: "11", r: "8", key: "4ej97u" }],
  ["path", { d: "m21 21-4.3-4.3", key: "1qie3q" }]
], vU = e("search-x", mU);
const gU = [
  ["path", { d: "m21 21-4.34-4.34", key: "14j7rj" }],
  ["circle", { cx: "11", cy: "11", r: "8", key: "4ej97u" }]
], _U = e("search", gU);
const xU = [
  ["path", { d: "M16 5a4 3 0 0 0-8 0c0 4 8 3 8 7a4 3 0 0 1-8 0", key: "vqan6v" }],
  ["path", { d: "M8 19a4 3 0 0 0 8 0c0-4-8-3-8-7a4 3 0 0 1 8 0", key: "wdjd8o" }]
], bU = e("section", xU);
const wU = [
  [
    "path",
    {
      d: "M3.714 3.048a.498.498 0 0 0-.683.627l2.843 7.627a2 2 0 0 1 0 1.396l-2.842 7.627a.498.498 0 0 0 .682.627l18-8.5a.5.5 0 0 0 0-.904z",
      key: "117uat"
    }
  ],
  ["path", { d: "M6 12h16", key: "s4cdu5" }]
], NU = e("send-horizontal", wU);
const $U = [
  ["rect", { x: "14", y: "14", width: "8", height: "8", rx: "2", key: "1b0bso" }],
  ["rect", { x: "2", y: "2", width: "8", height: "8", rx: "2", key: "1x09vl" }],
  ["path", { d: "M7 14v1a2 2 0 0 0 2 2h1", key: "pao6x6" }],
  ["path", { d: "M14 7h1a2 2 0 0 1 2 2v1", key: "19tdru" }]
], zU = e("send-to-back", $U);
const jU = [
  [
    "path",
    {
      d: "M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z",
      key: "1ffxy3"
    }
  ],
  ["path", { d: "m21.854 2.147-10.94 10.939", key: "12cjpa" }]
], qU = e("send", jU);
const AU = [
  ["path", { d: "m16 16-4 4-4-4", key: "3dv8je" }],
  ["path", { d: "M3 12h18", key: "1i2n21" }],
  ["path", { d: "m8 8 4-4 4 4", key: "2bscm2" }]
], HU = e("separator-horizontal", AU);
const SU = [
  ["path", { d: "M12 3v18", key: "108xh3" }],
  ["path", { d: "m16 16 4-4-4-4", key: "1js579" }],
  ["path", { d: "m8 8-4 4 4 4", key: "1whems" }]
], CU = e("separator-vertical", SU);
const VU = [
  ["path", { d: "m10.852 14.772-.383.923", key: "11vil6" }],
  ["path", { d: "M13.148 14.772a3 3 0 1 0-2.296-5.544l-.383-.923", key: "1v3clb" }],
  ["path", { d: "m13.148 9.228.383-.923", key: "t2zzyc" }],
  ["path", { d: "m13.53 15.696-.382-.924a3 3 0 1 1-2.296-5.544", key: "1bxfiv" }],
  ["path", { d: "m14.772 10.852.923-.383", key: "k9m8cz" }],
  ["path", { d: "m14.772 13.148.923.383", key: "1xvhww" }],
  [
    "path",
    {
      d: "M4.5 10H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2h-.5",
      key: "tn8das"
    }
  ],
  [
    "path",
    {
      d: "M4.5 14H4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-4a2 2 0 0 0-2-2h-.5",
      key: "1g2pve"
    }
  ],
  ["path", { d: "M6 18h.01", key: "uhywen" }],
  ["path", { d: "M6 6h.01", key: "1utrut" }],
  ["path", { d: "m9.228 10.852-.923-.383", key: "1wtb30" }],
  ["path", { d: "m9.228 13.148-.923.383", key: "1a830x" }]
], RU = e("server-cog", VU);
const EU = [
  [
    "path",
    {
      d: "M6 10H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2h-2",
      key: "4b9dqc"
    }
  ],
  [
    "path",
    {
      d: "M6 14H4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-4a2 2 0 0 0-2-2h-2",
      key: "22nnkd"
    }
  ],
  ["path", { d: "M6 6h.01", key: "1utrut" }],
  ["path", { d: "M6 18h.01", key: "uhywen" }],
  ["path", { d: "m13 6-4 6h6l-4 6", key: "14hqih" }]
], LU = e("server-crash", EU);
const PU = [
  ["path", { d: "M7 2h13a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2h-5", key: "bt2siv" }],
  ["path", { d: "M10 10 2.5 2.5C2 2 2 2.5 2 5v3a2 2 0 0 0 2 2h6z", key: "1hjrv1" }],
  ["path", { d: "M22 17v-1a2 2 0 0 0-2-2h-1", key: "1iynyr" }],
  ["path", { d: "M4 14a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h16.5l1-.5.5.5-8-8H4z", key: "161ggg" }],
  ["path", { d: "M6 18h.01", key: "uhywen" }],
  ["path", { d: "m2 2 20 20", key: "1ooewy" }]
], TU = e("server-off", PU);
const OU = [
  ["rect", { width: "20", height: "8", x: "2", y: "2", rx: "2", ry: "2", key: "ngkwjq" }],
  ["rect", { width: "20", height: "8", x: "2", y: "14", rx: "2", ry: "2", key: "iecqi9" }],
  ["line", { x1: "6", x2: "6.01", y1: "6", y2: "6", key: "16zg32" }],
  ["line", { x1: "6", x2: "6.01", y1: "18", y2: "18", key: "nzw8ys" }]
], DU = e("server", OU);
const IU = [
  ["path", { d: "M14 17H5", key: "gfn3mx" }],
  ["path", { d: "M19 7h-9", key: "6i9tg" }],
  ["circle", { cx: "17", cy: "17", r: "3", key: "18b49y" }],
  ["circle", { cx: "7", cy: "7", r: "3", key: "dfmy0x" }]
], FU = e("settings-2", IU);
const BU = [
  [
    "path",
    {
      d: "M9.671 4.136a2.34 2.34 0 0 1 4.659 0 2.34 2.34 0 0 0 3.319 1.915 2.34 2.34 0 0 1 2.33 4.033 2.34 2.34 0 0 0 0 3.831 2.34 2.34 0 0 1-2.33 4.033 2.34 2.34 0 0 0-3.319 1.915 2.34 2.34 0 0 1-4.659 0 2.34 2.34 0 0 0-3.32-1.915 2.34 2.34 0 0 1-2.33-4.033 2.34 2.34 0 0 0 0-3.831A2.34 2.34 0 0 1 6.35 6.051a2.34 2.34 0 0 0 3.319-1.915",
      key: "1i5ecw"
    }
  ],
  ["circle", { cx: "12", cy: "12", r: "3", key: "1v7zrd" }]
], UU = e("settings", BU);
const WU = [
  [
    "path",
    {
      d: "M8.3 10a.7.7 0 0 1-.626-1.079L11.4 3a.7.7 0 0 1 1.198-.043L16.3 8.9a.7.7 0 0 1-.572 1.1Z",
      key: "1bo67w"
    }
  ],
  ["rect", { x: "3", y: "14", width: "7", height: "7", rx: "1", key: "1bkyp8" }],
  ["circle", { cx: "17.5", cy: "17.5", r: "3.5", key: "w3z12y" }]
], ZU = e("shapes", WU);
const GU = [
  ["circle", { cx: "18", cy: "5", r: "3", key: "gq8acd" }],
  ["circle", { cx: "6", cy: "12", r: "3", key: "w7nqdw" }],
  ["circle", { cx: "18", cy: "19", r: "3", key: "1xt0gg" }],
  ["line", { x1: "8.59", x2: "15.42", y1: "13.51", y2: "17.49", key: "47mynk" }],
  ["line", { x1: "15.41", x2: "8.59", y1: "6.51", y2: "10.49", key: "1n3mei" }]
], XU = e("share-2", GU);
const YU = [
  ["path", { d: "M12 2v13", key: "1km8f5" }],
  ["path", { d: "m16 6-4-4-4 4", key: "13yo43" }],
  ["path", { d: "M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8", key: "1b2hhj" }]
], KU = e("share", YU);
const QU = [
  ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", ry: "2", key: "1m3agn" }],
  ["line", { x1: "3", x2: "21", y1: "9", y2: "9", key: "1vqk6q" }],
  ["line", { x1: "3", x2: "21", y1: "15", y2: "15", key: "o2sbyz" }],
  ["line", { x1: "9", x2: "9", y1: "9", y2: "21", key: "1ib60c" }],
  ["line", { x1: "15", x2: "15", y1: "9", y2: "21", key: "1n26ft" }]
], JU = e("sheet", QU);
const eW = [
  [
    "path",
    {
      d: "M14 11a2 2 0 1 1-4 0 4 4 0 0 1 8 0 6 6 0 0 1-12 0 8 8 0 0 1 16 0 10 10 0 1 1-20 0 11.93 11.93 0 0 1 2.42-7.22 2 2 0 1 1 3.16 2.44",
      key: "1cn552"
    }
  ]
], tW = e("shell", eW);
const aW = [
  [
    "path",
    {
      d: "M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",
      key: "oel41y"
    }
  ],
  ["path", { d: "M12 8v4", key: "1got3b" }],
  ["path", { d: "M12 16h.01", key: "1drbdi" }]
], oW = e("shield-alert", aW);
const nW = [
  [
    "path",
    {
      d: "M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",
      key: "oel41y"
    }
  ],
  ["path", { d: "m4.243 5.21 14.39 12.472", key: "1c9a7c" }]
], cW = e("shield-ban", nW);
const rW = [
  [
    "path",
    {
      d: "M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",
      key: "oel41y"
    }
  ],
  ["path", { d: "m9 12 2 2 4-4", key: "dzmm74" }]
], hW = e("shield-check", rW);
const dW = [
  [
    "path",
    {
      d: "M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",
      key: "oel41y"
    }
  ],
  ["path", { d: "M12 22V2", key: "zs6s6o" }]
], iW = e("shield-half", dW);
const sW = [
  [
    "path",
    {
      d: "M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",
      key: "oel41y"
    }
  ],
  ["path", { d: "M8 12h.01", key: "czm47f" }],
  ["path", { d: "M12 12h.01", key: "1mp3jc" }],
  ["path", { d: "M16 12h.01", key: "1l6xoz" }]
], yW = e("shield-ellipsis", sW);
const pW = [
  [
    "path",
    {
      d: "M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",
      key: "oel41y"
    }
  ],
  ["path", { d: "M9 12h6", key: "1c52cq" }]
], kW = e("shield-minus", pW);
const lW = [
  ["path", { d: "m2 2 20 20", key: "1ooewy" }],
  [
    "path",
    {
      d: "M5 5a1 1 0 0 0-1 1v7c0 5 3.5 7.5 7.67 8.94a1 1 0 0 0 .67.01c2.35-.82 4.48-1.97 5.9-3.71",
      key: "1jlk70"
    }
  ],
  [
    "path",
    {
      d: "M9.309 3.652A12.252 12.252 0 0 0 11.24 2.28a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1v7a9.784 9.784 0 0 1-.08 1.264",
      key: "18rp1v"
    }
  ]
], uW = e("shield-off", lW);
const MW = [
  [
    "path",
    {
      d: "M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",
      key: "oel41y"
    }
  ],
  ["path", { d: "M9 12h6", key: "1c52cq" }],
  ["path", { d: "M12 9v6", key: "199k2o" }]
], fW = e("shield-plus", MW);
const mW = [
  [
    "path",
    {
      d: "M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",
      key: "oel41y"
    }
  ],
  ["path", { d: "M9.1 9a3 3 0 0 1 5.82 1c0 2-3 3-3 3", key: "mhlwft" }],
  ["path", { d: "M12 17h.01", key: "p32p05" }]
], vW = e("shield-question-mark", mW);
const gW = [
  [
    "path",
    {
      d: "M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",
      key: "oel41y"
    }
  ],
  ["path", { d: "M6.376 18.91a6 6 0 0 1 11.249.003", key: "hnjrf2" }],
  ["circle", { cx: "12", cy: "11", r: "4", key: "1gt34v" }]
], _W = e("shield-user", gW);
const xW = [
  [
    "path",
    {
      d: "M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",
      key: "oel41y"
    }
  ],
  ["path", { d: "m14.5 9.5-5 5", key: "17q4r4" }],
  ["path", { d: "m9.5 9.5 5 5", key: "18nt4w" }]
], bW = e("shield-x", xW);
const wW = [
  [
    "path",
    {
      d: "M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",
      key: "oel41y"
    }
  ]
], NW = e("shield", wW);
const $W = [
  ["circle", { cx: "12", cy: "12", r: "8", key: "46899m" }],
  ["path", { d: "M12 2v7.5", key: "1e5rl5" }],
  ["path", { d: "m19 5-5.23 5.23", key: "1ezxxf" }],
  ["path", { d: "M22 12h-7.5", key: "le1719" }],
  ["path", { d: "m19 19-5.23-5.23", key: "p3fmgn" }],
  ["path", { d: "M12 14.5V22", key: "dgcmos" }],
  ["path", { d: "M10.23 13.77 5 19", key: "qwopd4" }],
  ["path", { d: "M9.5 12H2", key: "r7bup8" }],
  ["path", { d: "M10.23 10.23 5 5", key: "k2y7lj" }],
  ["circle", { cx: "12", cy: "12", r: "2.5", key: "ix0uyj" }]
], zW = e("ship-wheel", $W);
const jW = [
  ["path", { d: "M12 10.189V14", key: "1p8cqu" }],
  ["path", { d: "M12 2v3", key: "qbqxhf" }],
  ["path", { d: "M19 13V7a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2v6", key: "qpkstq" }],
  [
    "path",
    {
      d: "M19.38 20A11.6 11.6 0 0 0 21 14l-8.188-3.639a2 2 0 0 0-1.624 0L3 14a11.6 11.6 0 0 0 2.81 7.76",
      key: "7tigtc"
    }
  ],
  [
    "path",
    {
      d: "M2 21c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1s1.2 1 2.5 1c2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1",
      key: "1924j5"
    }
  ]
], qW = e("ship", jW);
const AW = [
  [
    "path",
    {
      d: "M20.38 3.46 16 2a4 4 0 0 1-8 0L3.62 3.46a2 2 0 0 0-1.34 2.23l.58 3.47a1 1 0 0 0 .99.84H6v10c0 1.1.9 2 2 2h8a2 2 0 0 0 2-2V10h2.15a1 1 0 0 0 .99-.84l.58-3.47a2 2 0 0 0-1.34-2.23z",
      key: "1wgbhj"
    }
  ]
], HW = e("shirt", AW);
const SW = [
  ["path", { d: "M16 10a4 4 0 0 1-8 0", key: "1ltviw" }],
  ["path", { d: "M3.103 6.034h17.794", key: "awc11p" }],
  [
    "path",
    {
      d: "M3.4 5.467a2 2 0 0 0-.4 1.2V20a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6.667a2 2 0 0 0-.4-1.2l-2-2.667A2 2 0 0 0 17 2H7a2 2 0 0 0-1.6.8z",
      key: "o988cm"
    }
  ]
], CW = e("shopping-bag", SW);
const VW = [
  ["path", { d: "m15 11-1 9", key: "5wnq3a" }],
  ["path", { d: "m19 11-4-7", key: "cnml18" }],
  ["path", { d: "M2 11h20", key: "3eubbj" }],
  ["path", { d: "m3.5 11 1.6 7.4a2 2 0 0 0 2 1.6h9.8a2 2 0 0 0 2-1.6l1.7-7.4", key: "yiazzp" }],
  ["path", { d: "M4.5 15.5h15", key: "13mye1" }],
  ["path", { d: "m5 11 4-7", key: "116ra9" }],
  ["path", { d: "m9 11 1 9", key: "1ojof7" }]
], RW = e("shopping-basket", VW);
const EW = [
  ["circle", { cx: "8", cy: "21", r: "1", key: "jimo8o" }],
  ["circle", { cx: "19", cy: "21", r: "1", key: "13723u" }],
  [
    "path",
    {
      d: "M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12",
      key: "9zh506"
    }
  ]
], LW = e("shopping-cart", EW);
const PW = [
  [
    "path",
    {
      d: "M21.56 4.56a1.5 1.5 0 0 1 0 2.122l-.47.47a3 3 0 0 1-4.212-.03 3 3 0 0 1 0-4.243l.44-.44a1.5 1.5 0 0 1 2.121 0z",
      key: "1gcedi"
    }
  ],
  [
    "path",
    {
      d: "M3 22a1 1 0 0 1-1-1v-3.586a1 1 0 0 1 .293-.707l3.355-3.355a1.205 1.205 0 0 1 1.704 0l3.296 3.296a1.205 1.205 0 0 1 0 1.704l-3.355 3.355a1 1 0 0 1-.707.293z",
      key: "pg9kv3"
    }
  ],
  ["path", { d: "m9 15 7.879-7.878", key: "1o1zgh" }]
], TW = e("shovel", PW);
const OW = [
  ["path", { d: "m4 4 2.5 2.5", key: "uv2vmf" }],
  ["path", { d: "M13.5 6.5a4.95 4.95 0 0 0-7 7", key: "frdkwv" }],
  ["path", { d: "M15 5 5 15", key: "1ag8rq" }],
  ["path", { d: "M14 17v.01", key: "eokfpp" }],
  ["path", { d: "M10 16v.01", key: "14uyyl" }],
  ["path", { d: "M13 13v.01", key: "1v1k97" }],
  ["path", { d: "M16 10v.01", key: "5169yg" }],
  ["path", { d: "M11 20v.01", key: "cj92p8" }],
  ["path", { d: "M17 14v.01", key: "11cswd" }],
  ["path", { d: "M20 11v.01", key: "19e0od" }]
], DW = e("shower-head", OW);
const IW = [
  [
    "path",
    {
      d: "M4 13V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.706.706l3.588 3.588A2.4 2.4 0 0 1 20 8v5",
      key: "1eob4r"
    }
  ],
  ["path", { d: "M14 2v5a1 1 0 0 0 1 1h5", key: "wfsgrz" }],
  ["path", { d: "M10 22v-5", key: "sfixh4" }],
  ["path", { d: "M14 19v-2", key: "pdve8j" }],
  ["path", { d: "M18 20v-3", key: "uox2gk" }],
  ["path", { d: "M2 13h20", key: "5evz65" }],
  ["path", { d: "M6 20v-3", key: "c6pdcb" }]
], FW = e("shredder", IW);
const BW = [
  ["path", { d: "M11 12h.01", key: "1lr4k6" }],
  ["path", { d: "M13 22c.5-.5 1.12-1 2.5-1-1.38 0-2-.5-2.5-1", key: "fatpdi" }],
  [
    "path",
    {
      d: "M14 2a3.28 3.28 0 0 1-3.227 1.798l-6.17-.561A2.387 2.387 0 1 0 4.387 8H15.5a1 1 0 0 1 0 13 1 1 0 0 0 0-5H12a7 7 0 0 1-7-7V8",
      key: "kehrqe"
    }
  ],
  ["path", { d: "M14 8a8.5 8.5 0 0 1 0 8", key: "1imjx2" }],
  ["path", { d: "M16 16c2 0 4.5-4 4-6", key: "z0nejz" }]
], UW = e("shrimp", BW);
const WW = [
  ["path", { d: "m15 15 6 6m-6-6v4.8m0-4.8h4.8", key: "17vawe" }],
  ["path", { d: "M9 19.8V15m0 0H4.2M9 15l-6 6", key: "chjx8e" }],
  ["path", { d: "M15 4.2V9m0 0h4.8M15 9l6-6", key: "lav6yq" }],
  ["path", { d: "M9 4.2V9m0 0H4.2M9 9 3 3", key: "1pxi2q" }]
], ZW = e("shrink", WW);
const GW = [
  ["path", { d: "M12 22v-5.172a2 2 0 0 0-.586-1.414L9.5 13.5", key: "1p17fm" }],
  ["path", { d: "M14.5 14.5 12 17", key: "dy5w4y" }],
  ["path", { d: "M17 8.8A6 6 0 0 1 13.8 20H10A6.5 6.5 0 0 1 7 8a5 5 0 0 1 10 0z", key: "6z7b3o" }]
], XW = e("shrub", GW);
const YW = [
  ["path", { d: "m18 14 4 4-4 4", key: "10pe0f" }],
  ["path", { d: "m18 2 4 4-4 4", key: "pucp1d" }],
  ["path", { d: "M2 18h1.973a4 4 0 0 0 3.3-1.7l5.454-8.6a4 4 0 0 1 3.3-1.7H22", key: "1ailkh" }],
  ["path", { d: "M2 6h1.972a4 4 0 0 1 3.6 2.2", key: "km57vx" }],
  ["path", { d: "M22 18h-6.041a4 4 0 0 1-3.3-1.8l-.359-.45", key: "os18l9" }]
], KW = e("shuffle", YW);
const QW = [
  [
    "path",
    {
      d: "M18 7V5a1 1 0 0 0-1-1H6.5a.5.5 0 0 0-.4.8l4.5 6a2 2 0 0 1 0 2.4l-4.5 6a.5.5 0 0 0 .4.8H17a1 1 0 0 0 1-1v-2",
      key: "wuwx1p"
    }
  ]
], JW = e("sigma", QW);
const eZ = [
  ["path", { d: "M2 20h.01", key: "4haj6o" }],
  ["path", { d: "M7 20v-4", key: "j294jx" }],
  ["path", { d: "M12 20v-8", key: "i3yub9" }],
  ["path", { d: "M17 20V8", key: "1tkaf5" }]
], tZ = e("signal-high", eZ);
const aZ = [
  ["path", { d: "M2 20h.01", key: "4haj6o" }],
  ["path", { d: "M7 20v-4", key: "j294jx" }]
], oZ = e("signal-low", aZ);
const nZ = [
  ["path", { d: "M2 20h.01", key: "4haj6o" }],
  ["path", { d: "M7 20v-4", key: "j294jx" }],
  ["path", { d: "M12 20v-8", key: "i3yub9" }]
], cZ = e("signal-medium", nZ);
const rZ = [["path", { d: "M2 20h.01", key: "4haj6o" }]], hZ = e("signal-zero", rZ);
const dZ = [
  ["path", { d: "M2 20h.01", key: "4haj6o" }],
  ["path", { d: "M7 20v-4", key: "j294jx" }],
  ["path", { d: "M12 20v-8", key: "i3yub9" }],
  ["path", { d: "M17 20V8", key: "1tkaf5" }],
  ["path", { d: "M22 4v16", key: "sih9yq" }]
], iZ = e("signal", dZ);
const sZ = [
  [
    "path",
    {
      d: "m21 17-2.156-1.868A.5.5 0 0 0 18 15.5v.5a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1c0-2.545-3.991-3.97-8.5-4a1 1 0 0 0 0 5c4.153 0 4.745-11.295 5.708-13.5a2.5 2.5 0 1 1 3.31 3.284",
      key: "y32ogt"
    }
  ],
  ["path", { d: "M3 21h18", key: "itz85i" }]
], yZ = e("signature", sZ);
const pZ = [
  ["path", { d: "M10 9H4L2 7l2-2h6", key: "1hq7x2" }],
  ["path", { d: "M14 5h6l2 2-2 2h-6", key: "bv62ej" }],
  ["path", { d: "M10 22V4a2 2 0 1 1 4 0v18", key: "eqpcf2" }],
  ["path", { d: "M8 22h8", key: "rmew8v" }]
], kZ = e("signpost-big", pZ);
const lZ = [
  ["path", { d: "M12 13v8", key: "1l5pq0" }],
  ["path", { d: "M12 3v3", key: "1n5kay" }],
  [
    "path",
    {
      d: "M18 6a2 2 0 0 1 1.387.56l2.307 2.22a1 1 0 0 1 0 1.44l-2.307 2.22A2 2 0 0 1 18 13H6a2 2 0 0 1-1.387-.56l-2.306-2.22a1 1 0 0 1 0-1.44l2.306-2.22A2 2 0 0 1 6 6z",
      key: "gqqp9m"
    }
  ]
], uZ = e("signpost", lZ);
const MZ = [
  ["path", { d: "M7 18v-6a5 5 0 1 1 10 0v6", key: "pcx96s" }],
  [
    "path",
    { d: "M5 21a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-1a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2z", key: "1b4s83" }
  ],
  ["path", { d: "M21 12h1", key: "jtio3y" }],
  ["path", { d: "M18.5 4.5 18 5", key: "g5sp9y" }],
  ["path", { d: "M2 12h1", key: "1uaihz" }],
  ["path", { d: "M12 2v1", key: "11qlp1" }],
  ["path", { d: "m4.929 4.929.707.707", key: "1i51kw" }],
  ["path", { d: "M12 12v6", key: "3ahymv" }]
], fZ = e("siren", MZ);
const mZ = [
  [
    "path",
    {
      d: "M17.971 4.285A2 2 0 0 1 21 6v12a2 2 0 0 1-3.029 1.715l-9.997-5.998a2 2 0 0 1-.003-3.432z",
      key: "15892j"
    }
  ],
  ["path", { d: "M3 20V4", key: "1ptbpl" }]
], vZ = e("skip-back", mZ);
const gZ = [
  ["path", { d: "M21 4v16", key: "7j8fe9" }],
  [
    "path",
    {
      d: "M6.029 4.285A2 2 0 0 0 3 6v12a2 2 0 0 0 3.029 1.715l9.997-5.998a2 2 0 0 0 .003-3.432z",
      key: "zs4d6"
    }
  ]
], _Z = e("skip-forward", gZ);
const xZ = [
  ["path", { d: "m12.5 17-.5-1-.5 1h1z", key: "3me087" }],
  [
    "path",
    {
      d: "M15 22a1 1 0 0 0 1-1v-1a2 2 0 0 0 1.56-3.25 8 8 0 1 0-11.12 0A2 2 0 0 0 8 20v1a1 1 0 0 0 1 1z",
      key: "1o5pge"
    }
  ],
  ["circle", { cx: "15", cy: "12", r: "1", key: "1tmaij" }],
  ["circle", { cx: "9", cy: "12", r: "1", key: "1vctgf" }]
], bZ = e("skull", xZ);
const wZ = [
  ["rect", { width: "3", height: "8", x: "13", y: "2", rx: "1.5", key: "diqz80" }],
  ["path", { d: "M19 8.5V10h1.5A1.5 1.5 0 1 0 19 8.5", key: "183iwg" }],
  ["rect", { width: "3", height: "8", x: "8", y: "14", rx: "1.5", key: "hqg7r1" }],
  ["path", { d: "M5 15.5V14H3.5A1.5 1.5 0 1 0 5 15.5", key: "76g71w" }],
  ["rect", { width: "8", height: "3", x: "14", y: "13", rx: "1.5", key: "1kmz0a" }],
  ["path", { d: "M15.5 19H14v1.5a1.5 1.5 0 1 0 1.5-1.5", key: "jc4sz0" }],
  ["rect", { width: "8", height: "3", x: "2", y: "8", rx: "1.5", key: "1omvl4" }],
  ["path", { d: "M8.5 5H10V3.5A1.5 1.5 0 1 0 8.5 5", key: "16f3cl" }]
], NZ = e("slack", wZ);
const $Z = [["path", { d: "M22 2 2 22", key: "y4kqgn" }]], zZ = e("slash", $Z);
const jZ = [
  [
    "path",
    {
      d: "M11 16.586V19a1 1 0 0 1-1 1H2L18.37 3.63a1 1 0 1 1 3 3l-9.663 9.663a1 1 0 0 1-1.414 0L8 14",
      key: "1sllp5"
    }
  ]
], qZ = e("slice", jZ);
const AZ = [
  ["path", { d: "M10 5H3", key: "1qgfaw" }],
  ["path", { d: "M12 19H3", key: "yhmn1j" }],
  ["path", { d: "M14 3v4", key: "1sua03" }],
  ["path", { d: "M16 17v4", key: "1q0r14" }],
  ["path", { d: "M21 12h-9", key: "1o4lsq" }],
  ["path", { d: "M21 19h-5", key: "1rlt1p" }],
  ["path", { d: "M21 5h-7", key: "1oszz2" }],
  ["path", { d: "M8 10v4", key: "tgpxqk" }],
  ["path", { d: "M8 12H3", key: "a7s4jb" }]
], HZ = e("sliders-horizontal", AZ);
const SZ = [
  ["path", { d: "M10 8h4", key: "1sr2af" }],
  ["path", { d: "M12 21v-9", key: "17s77i" }],
  ["path", { d: "M12 8V3", key: "13r4qs" }],
  ["path", { d: "M17 16h4", key: "h1uq16" }],
  ["path", { d: "M19 12V3", key: "o1uvq1" }],
  ["path", { d: "M19 21v-5", key: "qua636" }],
  ["path", { d: "M3 14h4", key: "bcjad9" }],
  ["path", { d: "M5 10V3", key: "cb8scm" }],
  ["path", { d: "M5 21v-7", key: "1w1uti" }]
], CZ = e("sliders-vertical", SZ);
const VZ = [
  ["rect", { width: "14", height: "20", x: "5", y: "2", rx: "2", ry: "2", key: "1yt0o3" }],
  ["path", { d: "M12.667 8 10 12h4l-2.667 4", key: "h9lk2d" }]
], RZ = e("smartphone-charging", VZ);
const EZ = [
  ["rect", { width: "7", height: "12", x: "2", y: "6", rx: "1", key: "5nje8w" }],
  ["path", { d: "M13 8.32a7.43 7.43 0 0 1 0 7.36", key: "1g306n" }],
  ["path", { d: "M16.46 6.21a11.76 11.76 0 0 1 0 11.58", key: "uqvjvo" }],
  ["path", { d: "M19.91 4.1a15.91 15.91 0 0 1 .01 15.8", key: "ujntz3" }]
], LZ = e("smartphone-nfc", EZ);
const PZ = [
  ["path", { d: "M22 11v1a10 10 0 1 1-9-10", key: "ew0xw9" }],
  ["path", { d: "M8 14s1.5 2 4 2 4-2 4-2", key: "1y1vjs" }],
  ["line", { x1: "9", x2: "9.01", y1: "9", y2: "9", key: "yxxnd0" }],
  ["line", { x1: "15", x2: "15.01", y1: "9", y2: "9", key: "1p4y9e" }],
  ["path", { d: "M16 5h6", key: "1vod17" }],
  ["path", { d: "M19 2v6", key: "4bpg5p" }]
], TZ = e("smile-plus", PZ);
const OZ = [
  ["rect", { width: "14", height: "20", x: "5", y: "2", rx: "2", ry: "2", key: "1yt0o3" }],
  ["path", { d: "M12 18h.01", key: "mhygvu" }]
], DZ = e("smartphone", OZ);
const IZ = [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "M8 14s1.5 2 4 2 4-2 4-2", key: "1y1vjs" }],
  ["line", { x1: "9", x2: "9.01", y1: "9", y2: "9", key: "yxxnd0" }],
  ["line", { x1: "15", x2: "15.01", y1: "9", y2: "9", key: "1p4y9e" }]
], FZ = e("smile", IZ);
const BZ = [
  ["path", { d: "M2 13a6 6 0 1 0 12 0 4 4 0 1 0-8 0 2 2 0 0 0 4 0", key: "hneq2s" }],
  ["circle", { cx: "10", cy: "13", r: "8", key: "194lz3" }],
  ["path", { d: "M2 21h12c4.4 0 8-3.6 8-8V7a2 2 0 1 0-4 0v6", key: "ixqyt7" }],
  ["path", { d: "M18 3 19.1 5.2", key: "9tjm43" }],
  ["path", { d: "M22 3 20.9 5.2", key: "j3odrs" }]
], UZ = e("snail", BZ);
const WZ = [
  ["path", { d: "m10 20-1.25-2.5L6 18", key: "18frcb" }],
  ["path", { d: "M10 4 8.75 6.5 6 6", key: "7mghy3" }],
  ["path", { d: "m14 20 1.25-2.5L18 18", key: "1chtki" }],
  ["path", { d: "m14 4 1.25 2.5L18 6", key: "1b4wsy" }],
  ["path", { d: "m17 21-3-6h-4", key: "15hhxa" }],
  ["path", { d: "m17 3-3 6 1.5 3", key: "11697g" }],
  ["path", { d: "M2 12h6.5L10 9", key: "kv9z4n" }],
  ["path", { d: "m20 10-1.5 2 1.5 2", key: "1swlpi" }],
  ["path", { d: "M22 12h-6.5L14 15", key: "1mxi28" }],
  ["path", { d: "m4 10 1.5 2L4 14", key: "k9enpj" }],
  ["path", { d: "m7 21 3-6-1.5-3", key: "j8hb9u" }],
  ["path", { d: "m7 3 3 6h4", key: "1otusx" }]
], ZZ = e("snowflake", WZ);
const GZ = [
  ["path", { d: "M10.5 2v4", key: "1xt6in" }],
  ["path", { d: "M14 2H7a2 2 0 0 0-2 2", key: "e6xig3" }],
  [
    "path",
    {
      d: "M19.29 14.76A6.67 6.67 0 0 1 17 11a6.6 6.6 0 0 1-2.29 3.76c-1.15.92-1.71 2.04-1.71 3.19 0 2.22 1.8 4.05 4 4.05s4-1.83 4-4.05c0-1.16-.57-2.26-1.71-3.19",
      key: "adq7uc"
    }
  ],
  [
    "path",
    {
      d: "M9.607 21H6a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h7V7a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v3",
      key: "t9hm96"
    }
  ]
], XZ = e("soap-dispenser-droplet", GZ);
const YZ = [
  ["path", { d: "M20 9V6a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v3", key: "1dgpiv" }],
  [
    "path",
    {
      d: "M2 16a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-5a2 2 0 0 0-4 0v1.5a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5V11a2 2 0 0 0-4 0z",
      key: "xacw8m"
    }
  ],
  ["path", { d: "M4 18v2", key: "jwo5n2" }],
  ["path", { d: "M20 18v2", key: "1ar1qi" }],
  ["path", { d: "M12 4v9", key: "oqhhn3" }]
], KZ = e("sofa", YZ);
const QZ = [
  ["path", { d: "M11 2h2", key: "isr7bz" }],
  ["path", { d: "m14.28 14-4.56 8", key: "4anwcf" }],
  ["path", { d: "m21 22-1.558-4H4.558", key: "enk13h" }],
  ["path", { d: "M3 10v2", key: "w8mti9" }],
  [
    "path",
    {
      d: "M6.245 15.04A2 2 0 0 1 8 14h12a1 1 0 0 1 .864 1.505l-3.11 5.457A2 2 0 0 1 16 22H4a1 1 0 0 1-.863-1.506z",
      key: "pouggg"
    }
  ],
  ["path", { d: "M7 2a4 4 0 0 1-4 4", key: "78s8of" }],
  ["path", { d: "m8.66 7.66 1.41 1.41", key: "1vaqj8" }]
], JZ = e("solar-panel", QZ);
const eG = [
  ["path", { d: "M12 21a9 9 0 0 0 9-9H3a9 9 0 0 0 9 9Z", key: "4rw317" }],
  ["path", { d: "M7 21h10", key: "1b0cd5" }],
  ["path", { d: "M19.5 12 22 6", key: "shfsr5" }],
  [
    "path",
    {
      d: "M16.25 3c.27.1.8.53.75 1.36-.06.83-.93 1.2-1 2.02-.05.78.34 1.24.73 1.62",
      key: "rpc6vp"
    }
  ],
  [
    "path",
    {
      d: "M11.25 3c.27.1.8.53.74 1.36-.05.83-.93 1.2-.98 2.02-.06.78.33 1.24.72 1.62",
      key: "1lf63m"
    }
  ],
  [
    "path",
    { d: "M6.25 3c.27.1.8.53.75 1.36-.06.83-.93 1.2-1 2.02-.05.78.34 1.24.74 1.62", key: "97tijn" }
  ]
], tG = e("soup", eG);
const aG = [
  ["path", { d: "M22 17v1c0 .5-.5 1-1 1H3c-.5 0-1-.5-1-1v-1", key: "lt2kga" }]
], oG = e("space", aG);
const nG = [
  ["path", { d: "M12 18v4", key: "jadmvz" }],
  [
    "path",
    {
      d: "M2 14.499a5.5 5.5 0 0 0 9.591 3.675.6.6 0 0 1 .818.001A5.5 5.5 0 0 0 22 14.5c0-2.29-1.5-4-3-5.5l-5.492-5.312a2 2 0 0 0-3-.02L5 8.999c-1.5 1.5-3 3.2-3 5.5",
      key: "1aw2pz"
    }
  ]
], cG = e("spade", nG);
const rG = [
  [
    "path",
    {
      d: "M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z",
      key: "1s2grr"
    }
  ],
  ["path", { d: "M20 2v4", key: "1rf3ol" }],
  ["path", { d: "M22 4h-4", key: "gwowj6" }],
  ["circle", { cx: "4", cy: "20", r: "2", key: "6kqj1y" }]
], hG = e("sparkles", rG);
const dG = [
  [
    "path",
    {
      d: "M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z",
      key: "1s2grr"
    }
  ]
], iG = e("sparkle", dG);
const sG = [
  ["rect", { width: "16", height: "20", x: "4", y: "2", rx: "2", key: "1nb95v" }],
  ["path", { d: "M12 6h.01", key: "1vi96p" }],
  ["circle", { cx: "12", cy: "14", r: "4", key: "1jruaj" }],
  ["path", { d: "M12 14h.01", key: "1etili" }]
], yG = e("speaker", sG);
const pG = [
  [
    "path",
    {
      d: "M8.8 20v-4.1l1.9.2a2.3 2.3 0 0 0 2.164-2.1V8.3A5.37 5.37 0 0 0 2 8.25c0 2.8.656 3.054 1 4.55a5.77 5.77 0 0 1 .029 2.758L2 20",
      key: "11atix"
    }
  ],
  ["path", { d: "M19.8 17.8a7.5 7.5 0 0 0 .003-10.603", key: "yol142" }],
  ["path", { d: "M17 15a3.5 3.5 0 0 0-.025-4.975", key: "ssbmkc" }]
], kG = e("speech", pG);
const lG = [
  ["path", { d: "m6 16 6-12 6 12", key: "1b4byz" }],
  ["path", { d: "M8 12h8", key: "1wcyev" }],
  [
    "path",
    {
      d: "M4 21c1.1 0 1.1-1 2.3-1s1.1 1 2.3 1c1.1 0 1.1-1 2.3-1 1.1 0 1.1 1 2.3 1 1.1 0 1.1-1 2.3-1 1.1 0 1.1 1 2.3 1 1.1 0 1.1-1 2.3-1",
      key: "8mdmtu"
    }
  ]
], uG = e("spell-check-2", lG);
const MG = [
  ["path", { d: "m6 16 6-12 6 12", key: "1b4byz" }],
  ["path", { d: "M8 12h8", key: "1wcyev" }],
  ["path", { d: "m16 20 2 2 4-4", key: "13tcca" }]
], fG = e("spell-check", MG);
const mG = [
  [
    "path",
    {
      d: "M12.034 12.681a.498.498 0 0 1 .647-.647l9 3.5a.5.5 0 0 1-.033.943l-3.444 1.068a1 1 0 0 0-.66.66l-1.067 3.443a.5.5 0 0 1-.943.033z",
      key: "xwnzip"
    }
  ],
  ["path", { d: "M5 17A12 12 0 0 1 17 5", key: "1okkup" }],
  ["circle", { cx: "19", cy: "5", r: "2", key: "mhkx31" }],
  ["circle", { cx: "5", cy: "19", r: "2", key: "v8kfzx" }]
], vG = e("spline-pointer", mG);
const gG = [
  ["circle", { cx: "19", cy: "5", r: "2", key: "mhkx31" }],
  ["circle", { cx: "5", cy: "19", r: "2", key: "v8kfzx" }],
  ["path", { d: "M5 17A12 12 0 0 1 17 5", key: "1okkup" }]
], _G = e("spline", gG);
const xG = [
  [
    "path",
    {
      d: "M17 13.44 4.442 17.082A2 2 0 0 0 4.982 21H19a2 2 0 0 0 .558-3.921l-1.115-.32A2 2 0 0 1 17 14.837V7.66",
      key: "13vns8"
    }
  ],
  [
    "path",
    {
      d: "m7 10.56 12.558-3.642A2 2 0 0 0 19.018 3H5a2 2 0 0 0-.558 3.921l1.115.32A2 2 0 0 1 7 9.163v7.178",
      key: "s8x3u0"
    }
  ]
], bG = e("spool", xG);
const wG = [
  ["path", { d: "M16 3h5v5", key: "1806ms" }],
  ["path", { d: "M8 3H3v5", key: "15dfkv" }],
  ["path", { d: "M12 22v-8.3a4 4 0 0 0-1.172-2.872L3 3", key: "1qrqzj" }],
  ["path", { d: "m15 9 6-6", key: "ko1vev" }]
], NG = e("split", wG);
const $G = [
  ["path", { d: "M15.295 19.562 16 22", key: "31jsb7" }],
  ["path", { d: "m17 16 3.758 2.098", key: "121ar7" }],
  ["path", { d: "m19 12.5 3.026-.598", key: "19ukd3" }],
  [
    "path",
    {
      d: "M7.61 6.3a3 3 0 0 0-3.92 1.3l-1.38 2.79a3 3 0 0 0 1.3 3.91l6.89 3.597a1 1 0 0 0 1.342-.447l3.106-6.211a1 1 0 0 0-.447-1.341z",
      key: "lwb9l9"
    }
  ],
  ["path", { d: "M8 9V2", key: "1xa0v7" }]
], zG = e("spotlight", $G);
const jG = [
  ["path", { d: "M3 3h.01", key: "159qn6" }],
  ["path", { d: "M7 5h.01", key: "1hq22a" }],
  ["path", { d: "M11 7h.01", key: "1osv80" }],
  ["path", { d: "M3 7h.01", key: "1xzrh3" }],
  ["path", { d: "M7 9h.01", key: "19b3jx" }],
  ["path", { d: "M3 11h.01", key: "1eifu7" }],
  ["rect", { width: "4", height: "4", x: "15", y: "5", key: "mri9e4" }],
  ["path", { d: "m19 9 2 2v10c0 .6-.4 1-1 1h-6c-.6 0-1-.4-1-1V11l2-2", key: "aib6hk" }],
  ["path", { d: "m13 14 8-2", key: "1d7bmk" }],
  ["path", { d: "m13 19 8-2", key: "1y2vml" }]
], qG = e("spray-can", jG);
const AG = [
  [
    "path",
    {
      d: "M14 9.536V7a4 4 0 0 1 4-4h1.5a.5.5 0 0 1 .5.5V5a4 4 0 0 1-4 4 4 4 0 0 0-4 4c0 2 1 3 1 5a5 5 0 0 1-1 3",
      key: "139s4v"
    }
  ],
  ["path", { d: "M4 9a5 5 0 0 1 8 4 5 5 0 0 1-8-4", key: "1dlkgp" }],
  ["path", { d: "M5 21h14", key: "11awu3" }]
], HG = e("sprout", AG);
const SG = [
  ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", key: "afitv7" }],
  ["path", { d: "M17 12h-2l-2 5-2-10-2 5H7", key: "15hlnc" }]
], CG = e("square-activity", SG);
const VG = [
  ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", key: "afitv7" }],
  ["path", { d: "m16 8-8 8", key: "166keh" }],
  ["path", { d: "M16 16H8V8", key: "1w2ppm" }]
], RG = e("square-arrow-down-left", VG);
const EG = [
  ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", key: "afitv7" }],
  ["path", { d: "M12 8v8", key: "napkw2" }],
  ["path", { d: "m8 12 4 4 4-4", key: "k98ssh" }]
], LG = e("square-arrow-down", EG);
const PG = [
  ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", key: "afitv7" }],
  ["path", { d: "m8 8 8 8", key: "1imecy" }],
  ["path", { d: "M16 8v8H8", key: "1lbpgo" }]
], TG = e("square-arrow-down-right", PG);
const OG = [
  ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", key: "afitv7" }],
  ["path", { d: "m12 8-4 4 4 4", key: "15vm53" }],
  ["path", { d: "M16 12H8", key: "1fr5h0" }]
], DG = e("square-arrow-left", OG);
const IG = [
  ["path", { d: "M13 21h6a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v6", key: "14qz4y" }],
  ["path", { d: "m3 21 9-9", key: "1jfql5" }],
  ["path", { d: "M9 21H3v-6", key: "wtvkvv" }]
], FG = e("square-arrow-out-down-left", IG);
const BG = [
  ["path", { d: "M21 11V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h6", key: "14rsvq" }],
  ["path", { d: "m21 21-9-9", key: "1et2py" }],
  ["path", { d: "M21 15v6h-6", key: "1jko0i" }]
], UG = e("square-arrow-out-down-right", BG);
const WG = [
  ["path", { d: "M13 3h6a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-6", key: "14mv1t" }],
  ["path", { d: "m3 3 9 9", key: "rks13r" }],
  ["path", { d: "M3 9V3h6", key: "ira0h2" }]
], ZG = e("square-arrow-out-up-left", WG);
const GG = [
  ["path", { d: "M21 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h6", key: "y09zxi" }],
  ["path", { d: "m21 3-9 9", key: "mpx6sq" }],
  ["path", { d: "M15 3h6v6", key: "1q9fwt" }]
], XG = e("square-arrow-out-up-right", GG);
const YG = [
  ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", key: "afitv7" }],
  ["path", { d: "M8 12h8", key: "1wcyev" }],
  ["path", { d: "m12 16 4-4-4-4", key: "1i9zcv" }]
], KG = e("square-arrow-right", YG);
const QG = [
  ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", key: "afitv7" }],
  ["path", { d: "M8 16V8h8", key: "19xb1h" }],
  ["path", { d: "M16 16 8 8", key: "1qdy8n" }]
], JG = e("square-arrow-up-left", QG);
const eX = [
  ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", key: "afitv7" }],
  ["path", { d: "M8 8h8v8", key: "b65dnt" }],
  ["path", { d: "m8 16 8-8", key: "13b9ih" }]
], tX = e("square-arrow-up-right", eX);
const aX = [
  ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", key: "afitv7" }],
  ["path", { d: "m16 12-4-4-4 4", key: "177agl" }],
  ["path", { d: "M12 16V8", key: "1sbj14" }]
], oX = e("square-arrow-up", aX);
const nX = [
  ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", key: "afitv7" }],
  ["path", { d: "M12 8v8", key: "napkw2" }],
  ["path", { d: "m8.5 14 7-4", key: "12hpby" }],
  ["path", { d: "m8.5 10 7 4", key: "wwy2dy" }]
], cX = e("square-asterisk", nX);
const rX = [
  ["line", { x1: "5", y1: "3", x2: "19", y2: "3", key: "x74652" }],
  ["line", { x1: "3", y1: "5", x2: "3", y2: "19", key: "31ivqu" }],
  ["line", { x1: "21", y1: "5", x2: "21", y2: "19", key: "1am4cd" }],
  ["line", { x1: "9", y1: "21", x2: "10", y2: "21", key: "sb02er" }],
  ["line", { x1: "14", y1: "21", x2: "15", y2: "21", key: "1bvb1m" }],
  ["path", { d: "M 3 5 A2 2 0 0 1 5 3", key: "dbypyf" }],
  ["path", { d: "M 19 3 A2 2 0 0 1 21 5", key: "y6haui" }],
  ["path", { d: "M 5 21 A2 2 0 0 1 3 19", key: "kb75wq" }],
  ["path", { d: "M 21 19 A2 2 0 0 1 19 21", key: "1p3zbf" }],
  ["circle", { cx: "8.5", cy: "8.5", r: "1.5", key: "cn5opk" }],
  ["line", { x1: "9.56066", y1: "9.56066", x2: "12", y2: "12", key: "mksg6j" }],
  ["line", { x1: "17", y1: "17", x2: "14.82", y2: "14.82", key: "1lwi1d" }],
  ["circle", { cx: "8.5", cy: "15.5", r: "1.5", key: "12hfy1" }],
  ["line", { x1: "9.56066", y1: "14.43934", x2: "17", y2: "7", key: "4jyfgs" }]
], hX = e("square-bottom-dashed-scissors", rX);
const dX = [
  ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", key: "afitv7" }],
  ["path", { d: "M9 8h7", key: "kbo1nt" }],
  ["path", { d: "M8 12h6", key: "ikassy" }],
  ["path", { d: "M11 16h5", key: "oq65wt" }]
], iX = e("square-chart-gantt", dX);
const sX = [
  [
    "path",
    { d: "M21 10.656V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h12.344", key: "2acyp4" }
  ],
  ["path", { d: "m9 11 3 3L22 4", key: "1pflzl" }]
], yX = e("square-check-big", sX);
const pX = [
  ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", key: "afitv7" }],
  ["path", { d: "m9 12 2 2 4-4", key: "dzmm74" }]
], kX = e("square-check", pX);
const lX = [
  ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", key: "afitv7" }],
  ["path", { d: "m16 10-4 4-4-4", key: "894hmk" }]
], uX = e("square-chevron-down", lX);
const MX = [
  ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", key: "afitv7" }],
  ["path", { d: "m14 16-4-4 4-4", key: "ojs7w8" }]
], fX = e("square-chevron-left", MX);
const mX = [
  ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", key: "afitv7" }],
  ["path", { d: "m10 8 4 4-4 4", key: "1wy4r4" }]
], vX = e("square-chevron-right", mX);
const gX = [
  ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", key: "afitv7" }],
  ["path", { d: "m8 14 4-4 4 4", key: "fy2ptz" }]
], _X = e("square-chevron-up", gX);
const xX = [
  ["path", { d: "m10 9-3 3 3 3", key: "1oro0q" }],
  ["path", { d: "m14 15 3-3-3-3", key: "bz13h7" }],
  ["rect", { x: "3", y: "3", width: "18", height: "18", rx: "2", key: "h1oib" }]
], bX = e("square-code", xX);
const wX = [
  ["path", { d: "M10 9.5 8 12l2 2.5", key: "3mjy60" }],
  ["path", { d: "M14 21h1", key: "v9vybs" }],
  ["path", { d: "m14 9.5 2 2.5-2 2.5", key: "1bir2l" }],
  [
    "path",
    { d: "M5 21a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2", key: "as5y1o" }
  ],
  ["path", { d: "M9 21h1", key: "15o7lz" }]
], NX = e("square-dashed-bottom-code", wX);
const $X = [
  [
    "path",
    { d: "M5 21a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2", key: "as5y1o" }
  ],
  ["path", { d: "M9 21h1", key: "15o7lz" }],
  ["path", { d: "M14 21h1", key: "v9vybs" }]
], zX = e("square-dashed-bottom", $X);
const jX = [
  [
    "path",
    {
      d: "M12.034 12.681a.498.498 0 0 1 .647-.647l9 3.5a.5.5 0 0 1-.033.943l-3.444 1.068a1 1 0 0 0-.66.66l-1.067 3.443a.5.5 0 0 1-.943.033z",
      key: "xwnzip"
    }
  ],
  ["path", { d: "M5 3a2 2 0 0 0-2 2", key: "y57alp" }],
  ["path", { d: "M19 3a2 2 0 0 1 2 2", key: "18rm91" }],
  ["path", { d: "M5 21a2 2 0 0 1-2-2", key: "sbafld" }],
  ["path", { d: "M9 3h1", key: "1yesri" }],
  ["path", { d: "M9 21h2", key: "1qve2z" }],
  ["path", { d: "M14 3h1", key: "1ec4yj" }],
  ["path", { d: "M3 9v1", key: "1r0deq" }],
  ["path", { d: "M21 9v2", key: "p14lih" }],
  ["path", { d: "M3 14v1", key: "vnatye" }]
], qX = e("square-dashed-mouse-pointer", jX);
const AX = [
  ["path", { d: "M8 7v7", key: "1x2jlm" }],
  ["path", { d: "M12 7v4", key: "xawao1" }],
  ["path", { d: "M16 7v9", key: "1hp2iy" }],
  ["path", { d: "M5 3a2 2 0 0 0-2 2", key: "y57alp" }],
  ["path", { d: "M9 3h1", key: "1yesri" }],
  ["path", { d: "M14 3h1", key: "1ec4yj" }],
  ["path", { d: "M19 3a2 2 0 0 1 2 2", key: "18rm91" }],
  ["path", { d: "M21 9v1", key: "mxsmne" }],
  ["path", { d: "M21 14v1", key: "169vum" }],
  ["path", { d: "M21 19a2 2 0 0 1-2 2", key: "1j7049" }],
  ["path", { d: "M14 21h1", key: "v9vybs" }],
  ["path", { d: "M9 21h1", key: "15o7lz" }],
  ["path", { d: "M5 21a2 2 0 0 1-2-2", key: "sbafld" }],
  ["path", { d: "M3 14v1", key: "vnatye" }],
  ["path", { d: "M3 9v1", key: "1r0deq" }]
], HX = e("square-dashed-kanban", AX);
const SX = [
  ["path", { d: "M14 21h1", key: "v9vybs" }],
  ["path", { d: "M21 14v1", key: "169vum" }],
  ["path", { d: "M21 19a2 2 0 0 1-2 2", key: "1j7049" }],
  ["path", { d: "M21 9v1", key: "mxsmne" }],
  ["path", { d: "M3 14v1", key: "vnatye" }],
  ["path", { d: "M3 5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2", key: "89voep" }],
  ["path", { d: "M3 9v1", key: "1r0deq" }],
  ["path", { d: "M5 21a2 2 0 0 1-2-2", key: "sbafld" }],
  ["path", { d: "M9 21h1", key: "15o7lz" }]
], CX = e("square-dashed-top-solid", SX);
const VX = [
  ["path", { d: "M5 3a2 2 0 0 0-2 2", key: "y57alp" }],
  ["path", { d: "M19 3a2 2 0 0 1 2 2", key: "18rm91" }],
  ["path", { d: "M21 19a2 2 0 0 1-2 2", key: "1j7049" }],
  ["path", { d: "M5 21a2 2 0 0 1-2-2", key: "sbafld" }],
  ["path", { d: "M9 3h1", key: "1yesri" }],
  ["path", { d: "M9 21h1", key: "15o7lz" }],
  ["path", { d: "M14 3h1", key: "1ec4yj" }],
  ["path", { d: "M14 21h1", key: "v9vybs" }],
  ["path", { d: "M3 9v1", key: "1r0deq" }],
  ["path", { d: "M21 9v1", key: "mxsmne" }],
  ["path", { d: "M3 14v1", key: "vnatye" }],
  ["path", { d: "M21 14v1", key: "169vum" }]
], RX = e("square-dashed", VX);
const EX = [
  ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", ry: "2", key: "1m3agn" }],
  ["line", { x1: "8", x2: "16", y1: "12", y2: "12", key: "1jonct" }],
  ["line", { x1: "12", x2: "12", y1: "16", y2: "16", key: "aqc6ln" }],
  ["line", { x1: "12", x2: "12", y1: "8", y2: "8", key: "1mkcni" }]
], LX = e("square-divide", EX);
const PX = [
  ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", key: "afitv7" }],
  ["circle", { cx: "12", cy: "12", r: "1", key: "41hilf" }]
], TX = e("square-dot", PX);
const OX = [
  ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", key: "afitv7" }],
  ["path", { d: "M7 10h10", key: "1101jm" }],
  ["path", { d: "M7 14h10", key: "1mhdw3" }]
], DX = e("square-equal", OX);
const IX = [
  ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", ry: "2", key: "1m3agn" }],
  ["path", { d: "M9 17c2 0 2.8-1 2.8-2.8V10c0-2 1-3.3 3.2-3", key: "m1af9g" }],
  ["path", { d: "M9 11.2h5.7", key: "3zgcl2" }]
], FX = e("square-function", IX);
const BX = [
  ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", key: "afitv7" }],
  ["path", { d: "M7 7v10", key: "d5nglc" }],
  ["path", { d: "M11 7v10", key: "pptsnr" }],
  ["path", { d: "m15 7 2 10", key: "1m7qm5" }]
], UX = e("square-library", BX);
const WX = [
  ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", key: "afitv7" }],
  ["path", { d: "M8 7v7", key: "1x2jlm" }],
  ["path", { d: "M12 7v4", key: "xawao1" }],
  ["path", { d: "M16 7v9", key: "1hp2iy" }]
], ZX = e("square-kanban", WX);
const GX = [
  [
    "path",
    {
      d: "M8 16V8.5a.5.5 0 0 1 .9-.3l2.7 3.599a.5.5 0 0 0 .8 0l2.7-3.6a.5.5 0 0 1 .9.3V16",
      key: "1ywlsj"
    }
  ],
  ["rect", { x: "3", y: "3", width: "18", height: "18", rx: "2", key: "h1oib" }]
], XX = e("square-m", GX);
const YX = [
  ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", key: "afitv7" }],
  ["path", { d: "M7 8h10", key: "1jw688" }],
  ["path", { d: "M7 12h10", key: "b7w52i" }],
  ["path", { d: "M7 16h10", key: "wp8him" }]
], KX = e("square-menu", YX);
const QX = [
  ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", key: "afitv7" }],
  ["path", { d: "M8 12h8", key: "1wcyev" }]
], JX = e("square-minus", QX);
const eY = [
  [
    "path",
    {
      d: "M12.034 12.681a.498.498 0 0 1 .647-.647l9 3.5a.5.5 0 0 1-.033.943l-3.444 1.068a1 1 0 0 0-.66.66l-1.067 3.443a.5.5 0 0 1-.943.033z",
      key: "xwnzip"
    }
  ],
  ["path", { d: "M21 11V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h6", key: "14rsvq" }]
], tY = e("square-mouse-pointer", eY);
const aY = [
  ["path", { d: "M3.6 3.6A2 2 0 0 1 5 3h14a2 2 0 0 1 2 2v14a2 2 0 0 1-.59 1.41", key: "9l1ft6" }],
  ["path", { d: "M3 8.7V19a2 2 0 0 0 2 2h10.3", key: "17knke" }],
  ["path", { d: "m2 2 20 20", key: "1ooewy" }],
  ["path", { d: "M13 13a3 3 0 1 0 0-6H9v2", key: "uoagbd" }],
  ["path", { d: "M9 17v-2.3", key: "1jxgo2" }]
], oY = e("square-parking-off", aY);
const nY = [
  ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", key: "afitv7" }],
  ["path", { d: "M9 17V7h4a3 3 0 0 1 0 6H9", key: "1dfk2c" }]
], cY = e("square-parking", nY);
const rY = [
  ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", key: "afitv7" }],
  ["line", { x1: "10", x2: "10", y1: "15", y2: "9", key: "c1nkhi" }],
  ["line", { x1: "14", x2: "14", y1: "15", y2: "9", key: "h65svq" }]
], hY = e("square-pause", rY);
const dY = [
  ["path", { d: "M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7", key: "1m0v6g" }],
  [
    "path",
    {
      d: "M18.375 2.625a1 1 0 0 1 3 3l-9.013 9.014a2 2 0 0 1-.853.505l-2.873.84a.5.5 0 0 1-.62-.62l.84-2.873a2 2 0 0 1 .506-.852z",
      key: "ohrbg2"
    }
  ]
], iY = e("square-pen", dY);
const sY = [
  ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", key: "afitv7" }],
  ["path", { d: "m15 9-6 6", key: "1uzhvr" }],
  ["path", { d: "M9 9h.01", key: "1q5me6" }],
  ["path", { d: "M15 15h.01", key: "lqbp3k" }]
], yY = e("square-percent", sY);
const pY = [
  ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", key: "afitv7" }],
  ["path", { d: "M7 7h10", key: "udp07y" }],
  ["path", { d: "M10 7v10", key: "i1d9ee" }],
  ["path", { d: "M16 17a2 2 0 0 1-2-2V7", key: "ftwdc7" }]
], kY = e("square-pi", pY);
const lY = [
  ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", key: "afitv7" }],
  ["path", { d: "M12 12H9.5a2.5 2.5 0 0 1 0-5H17", key: "1l9586" }],
  ["path", { d: "M12 7v10", key: "jspqdw" }],
  ["path", { d: "M16 7v10", key: "lavkr4" }]
], uY = e("square-pilcrow", lY);
const MY = [
  ["rect", { x: "3", y: "3", width: "18", height: "18", rx: "2", key: "h1oib" }],
  [
    "path",
    {
      d: "M9 9.003a1 1 0 0 1 1.517-.859l4.997 2.997a1 1 0 0 1 0 1.718l-4.997 2.997A1 1 0 0 1 9 14.996z",
      key: "kmsa83"
    }
  ]
], fY = e("square-play", MY);
const mY = [
  ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", key: "afitv7" }],
  ["path", { d: "M8 12h8", key: "1wcyev" }],
  ["path", { d: "M12 8v8", key: "napkw2" }]
], vY = e("square-plus", mY);
const gY = [
  ["path", { d: "M12 7v4", key: "xawao1" }],
  ["path", { d: "M7.998 9.003a5 5 0 1 0 8-.005", key: "1pek45" }],
  ["rect", { x: "3", y: "3", width: "18", height: "18", rx: "2", key: "h1oib" }]
], _Y = e("square-power", gY);
const xY = [
  ["path", { d: "M7 12h2l2 5 2-10h4", key: "1fxv6h" }],
  ["rect", { x: "3", y: "3", width: "18", height: "18", rx: "2", key: "h1oib" }]
], bY = e("square-radical", xY);
const wY = [
  ["path", { d: "M21 11a8 8 0 0 0-8-8", key: "1lxwo5" }],
  ["path", { d: "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4", key: "1dv2y5" }]
], NY = e("square-round-corner", wY);
const $Y = [
  ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", key: "afitv7" }],
  ["circle", { cx: "8.5", cy: "8.5", r: "1.5", key: "cn5opk" }],
  ["line", { x1: "9.56066", y1: "9.56066", x2: "12", y2: "12", key: "mksg6j" }],
  ["line", { x1: "17", y1: "17", x2: "14.82", y2: "14.82", key: "1lwi1d" }],
  ["circle", { cx: "8.5", cy: "15.5", r: "1.5", key: "12hfy1" }],
  ["line", { x1: "9.56066", y1: "14.43934", x2: "17", y2: "7", key: "4jyfgs" }]
], zY = e("square-scissors", $Y);
const jY = [
  ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", key: "afitv7" }],
  ["path", { d: "M16 8.9V7H8l4 5-4 5h8v-1.9", key: "9nih0i" }]
], qY = e("square-sigma", jY);
const AY = [
  ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", key: "afitv7" }],
  ["line", { x1: "9", x2: "15", y1: "15", y2: "9", key: "1dfufj" }]
], HY = e("square-slash", AY);
const SY = [
  ["path", { d: "M8 19H5c-1 0-2-1-2-2V7c0-1 1-2 2-2h3", key: "lubmu8" }],
  ["path", { d: "M16 5h3c1 0 2 1 2 2v10c0 1-1 2-2 2h-3", key: "1ag34g" }],
  ["line", { x1: "12", x2: "12", y1: "4", y2: "20", key: "1tx1rr" }]
], CY = e("square-split-horizontal", SY);
const VY = [
  ["path", { d: "M5 8V5c0-1 1-2 2-2h10c1 0 2 1 2 2v3", key: "1pi83i" }],
  ["path", { d: "M19 16v3c0 1-1 2-2 2H7c-1 0-2-1-2-2v-3", key: "ido5k7" }],
  ["line", { x1: "4", x2: "20", y1: "12", y2: "12", key: "1e0a9i" }]
], RY = e("square-split-vertical", VY);
const EY = [
  ["rect", { x: "3", y: "3", width: "18", height: "18", rx: "2", key: "h1oib" }],
  ["rect", { x: "8", y: "8", width: "8", height: "8", rx: "1", key: "z9xiuo" }]
], LY = e("square-square", EY);
const PY = [
  ["path", { d: "M4 10c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h4c1.1 0 2 .9 2 2", key: "4i38lg" }],
  ["path", { d: "M10 16c-1.1 0-2-.9-2-2v-4c0-1.1.9-2 2-2h4c1.1 0 2 .9 2 2", key: "mlte4a" }],
  ["rect", { width: "8", height: "8", x: "14", y: "14", rx: "2", key: "1fa9i4" }]
], TY = e("square-stack", PY);
const OY = [
  [
    "path",
    {
      d: "M11.035 7.69a1 1 0 0 1 1.909.024l.737 1.452a1 1 0 0 0 .737.535l1.634.256a1 1 0 0 1 .588 1.806l-1.172 1.168a1 1 0 0 0-.282.866l.259 1.613a1 1 0 0 1-1.541 1.134l-1.465-.75a1 1 0 0 0-.912 0l-1.465.75a1 1 0 0 1-1.539-1.133l.258-1.613a1 1 0 0 0-.282-.866l-1.156-1.153a1 1 0 0 1 .572-1.822l1.633-.256a1 1 0 0 0 .737-.535z",
      key: "13edca"
    }
  ],
  ["rect", { x: "3", y: "3", width: "18", height: "18", rx: "2", key: "h1oib" }]
], DY = e("square-star", OY);
const IY = [
  ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", key: "afitv7" }],
  ["rect", { x: "9", y: "9", width: "6", height: "6", rx: "1", key: "1ssd4o" }]
], FY = e("square-stop", IY);
const BY = [
  ["path", { d: "m7 11 2-2-2-2", key: "1lz0vl" }],
  ["path", { d: "M11 13h4", key: "1p7l4v" }],
  ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", ry: "2", key: "1m3agn" }]
], UY = e("square-terminal", BY);
const WY = [
  ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", key: "afitv7" }],
  ["circle", { cx: "12", cy: "10", r: "3", key: "ilqhr7" }],
  ["path", { d: "M7 21v-2a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v2", key: "1m6ac2" }]
], ZY = e("square-user", WY);
const GY = [
  ["path", { d: "M18 21a6 6 0 0 0-12 0", key: "kaz2du" }],
  ["circle", { cx: "12", cy: "11", r: "4", key: "1gt34v" }],
  ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", key: "afitv7" }]
], XY = e("square-user-round", GY);
const YY = [
  ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", ry: "2", key: "1m3agn" }],
  ["path", { d: "m15 9-6 6", key: "1uzhvr" }],
  ["path", { d: "m9 9 6 6", key: "z0biqf" }]
], KY = e("square-x", YY);
const QY = [
  ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", key: "afitv7" }]
], JY = e("square", QY);
const eK = [
  [
    "path",
    {
      d: "M16 12v2a2 2 0 0 1-2 2H9a1 1 0 0 0-1 1v3a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V10a2 2 0 0 0-2-2h0",
      key: "1mcohs"
    }
  ],
  [
    "path",
    {
      d: "M4 16a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v3a1 1 0 0 1-1 1h-5a2 2 0 0 0-2 2v2",
      key: "1r1efp"
    }
  ]
], tK = e("squares-exclude", eK);
const aK = [
  ["path", { d: "M10 22a2 2 0 0 1-2-2", key: "i7yj1i" }],
  ["path", { d: "M14 2a2 2 0 0 1 2 2", key: "170a0m" }],
  ["path", { d: "M16 22h-2", key: "18d249" }],
  ["path", { d: "M2 10V8", key: "7yj4fe" }],
  ["path", { d: "M2 4a2 2 0 0 1 2-2", key: "ddgnws" }],
  ["path", { d: "M20 8a2 2 0 0 1 2 2", key: "1770vt" }],
  ["path", { d: "M22 14v2", key: "iot8ja" }],
  ["path", { d: "M22 20a2 2 0 0 1-2 2", key: "qj8q6g" }],
  ["path", { d: "M4 16a2 2 0 0 1-2-2", key: "1dnafg" }],
  [
    "path",
    { d: "M8 10a2 2 0 0 1 2-2h5a1 1 0 0 1 1 1v5a2 2 0 0 1-2 2H9a1 1 0 0 1-1-1z", key: "ci6f0b" }
  ],
  ["path", { d: "M8 2h2", key: "1gmkwm" }]
], oK = e("squares-intersect", aK);
const nK = [
  [
    "path",
    {
      d: "M4 16a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v3a1 1 0 0 0 1 1h3a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H10a2 2 0 0 1-2-2v-3a1 1 0 0 0-1-1z",
      key: "17jnth"
    }
  ]
], cK = e("squares-unite", nK);
const rK = [
  ["path", { d: "M10 22a2 2 0 0 1-2-2", key: "i7yj1i" }],
  ["path", { d: "M16 22h-2", key: "18d249" }],
  [
    "path",
    {
      d: "M16 4a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h3a1 1 0 0 0 1-1v-5a2 2 0 0 1 2-2h5a1 1 0 0 0 1-1z",
      key: "1njgbb"
    }
  ],
  ["path", { d: "M20 8a2 2 0 0 1 2 2", key: "1770vt" }],
  ["path", { d: "M22 14v2", key: "iot8ja" }],
  ["path", { d: "M22 20a2 2 0 0 1-2 2", key: "qj8q6g" }]
], hK = e("squares-subtract", rK);
const dK = [
  ["path", { d: "M13.77 3.043a34 34 0 0 0-3.54 0", key: "1oaobr" }],
  ["path", { d: "M13.771 20.956a33 33 0 0 1-3.541.001", key: "95iq0j" }],
  ["path", { d: "M20.18 17.74c-.51 1.15-1.29 1.93-2.439 2.44", key: "1u6qty" }],
  ["path", { d: "M20.18 6.259c-.51-1.148-1.291-1.929-2.44-2.438", key: "1ew6g6" }],
  ["path", { d: "M20.957 10.23a33 33 0 0 1 0 3.54", key: "1l9npr" }],
  ["path", { d: "M3.043 10.23a34 34 0 0 0 .001 3.541", key: "1it6jm" }],
  ["path", { d: "M6.26 20.179c-1.15-.508-1.93-1.29-2.44-2.438", key: "14uchd" }],
  ["path", { d: "M6.26 3.82c-1.149.51-1.93 1.291-2.44 2.44", key: "8k4agb" }]
], iK = e("squircle-dashed", dK);
const sK = [
  ["path", { d: "M12 3c7.2 0 9 1.8 9 9s-1.8 9-9 9-9-1.8-9-9 1.8-9 9-9", key: "garfkc" }]
], yK = e("squircle", sK);
const pK = [
  ["path", { d: "M15.236 22a3 3 0 0 0-2.2-5", key: "21bitc" }],
  ["path", { d: "M16 20a3 3 0 0 1 3-3h1a2 2 0 0 0 2-2v-2a4 4 0 0 0-4-4V4", key: "oh0fg0" }],
  ["path", { d: "M18 13h.01", key: "9veqaj" }],
  [
    "path",
    {
      d: "M18 6a4 4 0 0 0-4 4 7 7 0 0 0-7 7c0-5 4-5 4-10.5a4.5 4.5 0 1 0-9 0 2.5 2.5 0 0 0 5 0C7 10 3 11 3 17c0 2.8 2.2 5 5 5h10",
      key: "980v8a"
    }
  ]
], kK = e("squirrel", pK);
const lK = [
  ["path", { d: "M14 13V8.5C14 7 15 7 15 5a3 3 0 0 0-6 0c0 2 1 2 1 3.5V13", key: "i9gjdv" }],
  [
    "path",
    {
      d: "M20 15.5a2.5 2.5 0 0 0-2.5-2.5h-11A2.5 2.5 0 0 0 4 15.5V17a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1z",
      key: "1vzg3v"
    }
  ],
  ["path", { d: "M5 22h14", key: "ehvnwv" }]
], uK = e("stamp", lK);
const MK = [
  [
    "path",
    {
      d: "m10.344 4.688 1.181-2.393a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.237 3.152",
      key: "19ctli"
    }
  ],
  [
    "path",
    {
      d: "m17.945 17.945.43 2.505a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a8 8 0 0 0 .4-.099",
      key: "ptqqvy"
    }
  ],
  ["path", { d: "m2 2 20 20", key: "1ooewy" }]
], fK = e("star-off", MK);
const mK = [
  [
    "path",
    {
      d: "M12 18.338a2.1 2.1 0 0 0-.987.244L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16l2.309-4.679A.53.53 0 0 1 12 2",
      key: "2ksp49"
    }
  ]
], vK = e("star-half", mK);
const gK = [
  [
    "path",
    {
      d: "M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z",
      key: "r04s7s"
    }
  ]
], _K = e("star", gK);
const xK = [
  [
    "path",
    {
      d: "M13.971 4.285A2 2 0 0 1 17 6v12a2 2 0 0 1-3.029 1.715l-9.997-5.998a2 2 0 0 1-.003-3.432z",
      key: "19qhus"
    }
  ],
  ["path", { d: "M21 20V4", key: "cb8qj8" }]
], bK = e("step-back", xK);
const wK = [
  [
    "path",
    {
      d: "M10.029 4.285A2 2 0 0 0 7 6v12a2 2 0 0 0 3.029 1.715l9.997-5.998a2 2 0 0 0 .003-3.432z",
      key: "1ystz2"
    }
  ],
  ["path", { d: "M3 4v16", key: "1ph11n" }]
], NK = e("step-forward", wK);
const $K = [
  ["path", { d: "M11 2v2", key: "1539x4" }],
  ["path", { d: "M5 2v2", key: "1yf1q8" }],
  ["path", { d: "M5 3H4a2 2 0 0 0-2 2v4a6 6 0 0 0 12 0V5a2 2 0 0 0-2-2h-1", key: "rb5t3r" }],
  ["path", { d: "M8 15a6 6 0 0 0 12 0v-3", key: "x18d4x" }],
  ["circle", { cx: "20", cy: "10", r: "2", key: "ts1r5v" }]
], zK = e("stethoscope", $K);
const jK = [
  [
    "path",
    {
      d: "M21 9a2.4 2.4 0 0 0-.706-1.706l-3.588-3.588A2.4 2.4 0 0 0 15 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2z",
      key: "1dfntj"
    }
  ],
  ["path", { d: "M15 3v5a1 1 0 0 0 1 1h5", key: "6s6qgf" }],
  ["path", { d: "M8 13h.01", key: "1sbv64" }],
  ["path", { d: "M16 13h.01", key: "wip0gl" }],
  ["path", { d: "M10 16s.8 1 2 1c1.3 0 2-1 2-1", key: "1vvgv3" }]
], qK = e("sticker", jK);
const AK = [
  [
    "path",
    {
      d: "M21 9a2.4 2.4 0 0 0-.706-1.706l-3.588-3.588A2.4 2.4 0 0 0 15 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2z",
      key: "1dfntj"
    }
  ],
  ["path", { d: "M15 3v5a1 1 0 0 0 1 1h5", key: "6s6qgf" }]
], HK = e("sticky-note", AK);
const SK = [
  [
    "path",
    {
      d: "M11.264 2.205A4 4 0 0 0 6.42 4.211l-4 8a4 4 0 0 0 1.359 5.117l6 4a4 4 0 0 0 4.438 0l6-4a4 4 0 0 0 1.576-4.592l-2-6a4 4 0 0 0-2.53-2.53z",
      key: "1si4ox"
    }
  ],
  ["path", { d: "M11.99 22 14 12l7.822 3.184", key: "1u8to0" }],
  ["path", { d: "M14 12 8.47 2.302", key: "guo3d5" }]
], CK = e("stone", SK);
const VK = [
  ["path", { d: "M15 21v-5a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v5", key: "slp6dd" }],
  [
    "path",
    {
      d: "M17.774 10.31a1.12 1.12 0 0 0-1.549 0 2.5 2.5 0 0 1-3.451 0 1.12 1.12 0 0 0-1.548 0 2.5 2.5 0 0 1-3.452 0 1.12 1.12 0 0 0-1.549 0 2.5 2.5 0 0 1-3.77-3.248l2.889-4.184A2 2 0 0 1 7 2h10a2 2 0 0 1 1.653.873l2.895 4.192a2.5 2.5 0 0 1-3.774 3.244",
      key: "o0xfot"
    }
  ],
  ["path", { d: "M4 10.95V19a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8.05", key: "wn3emo" }]
], RK = e("store", VK);
const EK = [
  ["rect", { width: "20", height: "6", x: "2", y: "4", rx: "2", key: "qdearl" }],
  ["rect", { width: "20", height: "6", x: "2", y: "14", rx: "2", key: "1xrn6j" }]
], LK = e("stretch-horizontal", EK);
const PK = [
  ["rect", { width: "6", height: "20", x: "4", y: "2", rx: "2", key: "19qu7m" }],
  ["rect", { width: "6", height: "20", x: "14", y: "2", rx: "2", key: "24v0nk" }]
], TK = e("stretch-vertical", PK);
const OK = [
  ["path", { d: "M16 4H9a3 3 0 0 0-2.83 4", key: "43sutm" }],
  ["path", { d: "M14 12a4 4 0 0 1 0 8H6", key: "nlfj13" }],
  ["line", { x1: "4", x2: "20", y1: "12", y2: "12", key: "1e0a9i" }]
], DK = e("strikethrough", OK);
const IK = [
  ["path", { d: "m4 5 8 8", key: "1eunvl" }],
  ["path", { d: "m12 5-8 8", key: "1ah0jp" }],
  [
    "path",
    {
      d: "M20 19h-4c0-1.5.44-2 1.5-2.5S20 15.33 20 14c0-.47-.17-.93-.48-1.29a2.11 2.11 0 0 0-2.62-.44c-.42.24-.74.62-.9 1.07",
      key: "e8ta8j"
    }
  ]
], FK = e("subscript", IK);
const BK = [
  ["circle", { cx: "12", cy: "12", r: "4", key: "4exip2" }],
  ["path", { d: "M12 4h.01", key: "1ujb9j" }],
  ["path", { d: "M20 12h.01", key: "1ykeid" }],
  ["path", { d: "M12 20h.01", key: "zekei9" }],
  ["path", { d: "M4 12h.01", key: "158zrr" }],
  ["path", { d: "M17.657 6.343h.01", key: "31pqzk" }],
  ["path", { d: "M17.657 17.657h.01", key: "jehnf4" }],
  ["path", { d: "M6.343 17.657h.01", key: "gdk6ow" }],
  ["path", { d: "M6.343 6.343h.01", key: "1uurf0" }]
], UK = e("sun-dim", BK);
const WK = [
  ["path", { d: "M12 2v2", key: "tus03m" }],
  [
    "path",
    {
      d: "M14.837 16.385a6 6 0 1 1-7.223-7.222c.624-.147.97.66.715 1.248a4 4 0 0 0 5.26 5.259c.589-.255 1.396.09 1.248.715",
      key: "xlf6rm"
    }
  ],
  ["path", { d: "M16 12a4 4 0 0 0-4-4", key: "6vsxu" }],
  ["path", { d: "m19 5-1.256 1.256", key: "1yg6a6" }],
  ["path", { d: "M20 12h2", key: "1q8mjw" }]
], ZK = e("sun-moon", WK);
const GK = [
  ["circle", { cx: "12", cy: "12", r: "4", key: "4exip2" }],
  ["path", { d: "M12 3v1", key: "1asbbs" }],
  ["path", { d: "M12 20v1", key: "1wcdkc" }],
  ["path", { d: "M3 12h1", key: "lp3yf2" }],
  ["path", { d: "M20 12h1", key: "1vloll" }],
  ["path", { d: "m18.364 5.636-.707.707", key: "1hakh0" }],
  ["path", { d: "m6.343 17.657-.707.707", key: "18m9nf" }],
  ["path", { d: "m5.636 5.636.707.707", key: "1xv1c5" }],
  ["path", { d: "m17.657 17.657.707.707", key: "vl76zb" }]
], XK = e("sun-medium", GK);
const YK = [
  ["path", { d: "M10 21v-1", key: "1u8rkd" }],
  ["path", { d: "M10 4V3", key: "pkzwkn" }],
  ["path", { d: "M10 9a3 3 0 0 0 0 6", key: "gv75dk" }],
  ["path", { d: "m14 20 1.25-2.5L18 18", key: "1chtki" }],
  ["path", { d: "m14 4 1.25 2.5L18 6", key: "1b4wsy" }],
  ["path", { d: "m17 21-3-6 1.5-3H22", key: "o5qa3v" }],
  ["path", { d: "m17 3-3 6 1.5 3", key: "11697g" }],
  ["path", { d: "M2 12h1", key: "1uaihz" }],
  ["path", { d: "m20 10-1.5 2 1.5 2", key: "1swlpi" }],
  ["path", { d: "m3.64 18.36.7-.7", key: "105rm9" }],
  ["path", { d: "m4.34 6.34-.7-.7", key: "d3unjp" }]
], KK = e("sun-snow", YK);
const QK = [
  ["circle", { cx: "12", cy: "12", r: "4", key: "4exip2" }],
  ["path", { d: "M12 2v2", key: "tus03m" }],
  ["path", { d: "M12 20v2", key: "1lh1kg" }],
  ["path", { d: "m4.93 4.93 1.41 1.41", key: "149t6j" }],
  ["path", { d: "m17.66 17.66 1.41 1.41", key: "ptbguv" }],
  ["path", { d: "M2 12h2", key: "1t8f8n" }],
  ["path", { d: "M20 12h2", key: "1q8mjw" }],
  ["path", { d: "m6.34 17.66-1.41 1.41", key: "1m8zz5" }],
  ["path", { d: "m19.07 4.93-1.41 1.41", key: "1shlcs" }]
], JK = e("sun", QK);
const eQ = [
  ["path", { d: "M12 2v8", key: "1q4o3n" }],
  ["path", { d: "m4.93 10.93 1.41 1.41", key: "2a7f42" }],
  ["path", { d: "M2 18h2", key: "j10viu" }],
  ["path", { d: "M20 18h2", key: "wocana" }],
  ["path", { d: "m19.07 10.93-1.41 1.41", key: "15zs5n" }],
  ["path", { d: "M22 22H2", key: "19qnx5" }],
  ["path", { d: "m8 6 4-4 4 4", key: "ybng9g" }],
  ["path", { d: "M16 18a4 4 0 0 0-8 0", key: "1lzouq" }]
], tQ = e("sunrise", eQ);
const aQ = [
  ["path", { d: "M12 10V2", key: "16sf7g" }],
  ["path", { d: "m4.93 10.93 1.41 1.41", key: "2a7f42" }],
  ["path", { d: "M2 18h2", key: "j10viu" }],
  ["path", { d: "M20 18h2", key: "wocana" }],
  ["path", { d: "m19.07 10.93-1.41 1.41", key: "15zs5n" }],
  ["path", { d: "M22 22H2", key: "19qnx5" }],
  ["path", { d: "m16 6-4 4-4-4", key: "6wukr" }],
  ["path", { d: "M16 18a4 4 0 0 0-8 0", key: "1lzouq" }]
], oQ = e("sunset", aQ);
const nQ = [
  ["path", { d: "m4 19 8-8", key: "hr47gm" }],
  ["path", { d: "m12 19-8-8", key: "1dhhmo" }],
  [
    "path",
    {
      d: "M20 12h-4c0-1.5.442-2 1.5-2.5S20 8.334 20 7.002c0-.472-.17-.93-.484-1.29a2.105 2.105 0 0 0-2.617-.436c-.42.239-.738.614-.899 1.06",
      key: "1dfcux"
    }
  ]
], cQ = e("superscript", nQ);
const rQ = [
  ["path", { d: "M11 17a4 4 0 0 1-8 0V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2Z", key: "1ldrpk" }],
  ["path", { d: "M16.7 13H19a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2H7", key: "11i5po" }],
  ["path", { d: "M 7 17h.01", key: "1euzgo" }],
  [
    "path",
    {
      d: "m11 8 2.3-2.3a2.4 2.4 0 0 1 3.404.004L18.6 7.6a2.4 2.4 0 0 1 .026 3.434L9.9 19.8",
      key: "o2gii7"
    }
  ]
], hQ = e("swatch-book", rQ);
const dQ = [
  ["path", { d: "M10 21V3h8", key: "br2l0g" }],
  ["path", { d: "M6 16h9", key: "2py0wn" }],
  ["path", { d: "M10 9.5h7", key: "13dmhz" }]
], iQ = e("swiss-franc", dQ);
const sQ = [
  ["path", { d: "M11 19H4a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h5", key: "mtk2lu" }],
  ["path", { d: "M13 5h7a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-5", key: "120jsl" }],
  ["circle", { cx: "12", cy: "12", r: "3", key: "1v7zrd" }],
  ["path", { d: "m18 22-3-3 3-3", key: "kgdoj7" }],
  ["path", { d: "m6 2 3 3-3 3", key: "1fnbkv" }]
], yQ = e("switch-camera", sQ);
const pQ = [
  ["path", { d: "m11 19-6-6", key: "s7kpr" }],
  ["path", { d: "m5 21-2-2", key: "1kw20b" }],
  ["path", { d: "m8 16-4 4", key: "1oqv8h" }],
  ["path", { d: "M9.5 17.5 21 6V3h-3L6.5 14.5", key: "pkxemp" }]
], kQ = e("sword", pQ);
const lQ = [
  ["polyline", { points: "14.5 17.5 3 6 3 3 6 3 17.5 14.5", key: "1hfsw2" }],
  ["line", { x1: "13", x2: "19", y1: "19", y2: "13", key: "1vrmhu" }],
  ["line", { x1: "16", x2: "20", y1: "16", y2: "20", key: "1bron3" }],
  ["line", { x1: "19", x2: "21", y1: "21", y2: "19", key: "13pww6" }],
  ["polyline", { points: "14.5 6.5 18 3 21 3 21 6 17.5 9.5", key: "hbey2j" }],
  ["line", { x1: "5", x2: "9", y1: "14", y2: "18", key: "1hf58s" }],
  ["line", { x1: "7", x2: "4", y1: "17", y2: "20", key: "pidxm4" }],
  ["line", { x1: "3", x2: "5", y1: "19", y2: "21", key: "1pehsh" }]
], uQ = e("swords", lQ);
const MQ = [
  ["path", { d: "m18 2 4 4", key: "22kx64" }],
  ["path", { d: "m17 7 3-3", key: "1w1zoj" }],
  ["path", { d: "M19 9 8.7 19.3c-1 1-2.5 1-3.4 0l-.6-.6c-1-1-1-2.5 0-3.4L15 5", key: "1exhtz" }],
  ["path", { d: "m9 11 4 4", key: "rovt3i" }],
  ["path", { d: "m5 19-3 3", key: "59f2uf" }],
  ["path", { d: "m14 4 6 6", key: "yqp9t2" }]
], fQ = e("syringe", MQ);
const mQ = [
  [
    "path",
    {
      d: "M9 3H5a2 2 0 0 0-2 2v4m6-6h10a2 2 0 0 1 2 2v4M9 3v18m0 0h10a2 2 0 0 0 2-2V9M9 21H5a2 2 0 0 1-2-2V9m0 0h18",
      key: "gugj83"
    }
  ]
], vQ = e("table-2", mQ);
const gQ = [
  ["path", { d: "M12 21v-6", key: "lihzve" }],
  ["path", { d: "M12 9V3", key: "da5inc" }],
  ["path", { d: "M3 15h18", key: "5xshup" }],
  ["path", { d: "M3 9h18", key: "1pudct" }],
  ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", key: "afitv7" }]
], _Q = e("table-cells-merge", gQ);
const xQ = [
  ["path", { d: "M12 15V9", key: "8c7uyn" }],
  ["path", { d: "M3 15h18", key: "5xshup" }],
  ["path", { d: "M3 9h18", key: "1pudct" }],
  ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", key: "afitv7" }]
], bQ = e("table-cells-split", xQ);
const wQ = [
  ["path", { d: "M14 14v2", key: "w2a1xv" }],
  ["path", { d: "M14 20v2", key: "1lq872" }],
  ["path", { d: "M14 2v2", key: "6buw04" }],
  ["path", { d: "M14 8v2", key: "i67w9a" }],
  ["path", { d: "M2 15h8", key: "82wtch" }],
  ["path", { d: "M2 3h6a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H2", key: "up0l64" }],
  ["path", { d: "M2 9h8", key: "yelfik" }],
  ["path", { d: "M22 15h-4", key: "1es58f" }],
  ["path", { d: "M22 3h-2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h2", key: "pdjoqf" }],
  ["path", { d: "M22 9h-4", key: "1luja7" }],
  ["path", { d: "M5 3v18", key: "14hmio" }]
], NQ = e("table-columns-split", wQ);
const $Q = [
  ["path", { d: "M15 3v18", key: "14nvp0" }],
  ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", key: "afitv7" }],
  ["path", { d: "M21 9H3", key: "1338ky" }],
  ["path", { d: "M21 15H3", key: "9uk58r" }]
], zQ = e("table-properties", $Q);
const jQ = [
  ["path", { d: "M14 10h2", key: "1lstlu" }],
  ["path", { d: "M15 22v-8", key: "1fwwgm" }],
  ["path", { d: "M15 2v4", key: "1044rn" }],
  ["path", { d: "M2 10h2", key: "1r8dkt" }],
  ["path", { d: "M20 10h2", key: "1ug425" }],
  ["path", { d: "M3 19h18", key: "awlh7x" }],
  ["path", { d: "M3 22v-6a2 2 135 0 1 2-2h14a2 2 45 0 1 2 2v6", key: "ibqhof" }],
  ["path", { d: "M3 2v2a2 2 45 0 0 2 2h14a2 2 135 0 0 2-2V2", key: "1uenja" }],
  ["path", { d: "M8 10h2", key: "66od0" }],
  ["path", { d: "M9 22v-8", key: "fmnu31" }],
  ["path", { d: "M9 2v4", key: "j1yeou" }]
], qQ = e("table-rows-split", jQ);
const AQ = [
  ["path", { d: "M16 5H3", key: "m91uny" }],
  ["path", { d: "M16 12H3", key: "1a2rj7" }],
  ["path", { d: "M16 19H3", key: "zzsher" }],
  ["path", { d: "M21 5h.01", key: "wa75ra" }],
  ["path", { d: "M21 12h.01", key: "msek7k" }],
  ["path", { d: "M21 19h.01", key: "qvbq2j" }]
], HQ = e("table-of-contents", AQ);
const SQ = [
  ["path", { d: "M12 3v18", key: "108xh3" }],
  ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", key: "afitv7" }],
  ["path", { d: "M3 9h18", key: "1pudct" }],
  ["path", { d: "M3 15h18", key: "5xshup" }]
], CQ = e("table", SQ);
const VQ = [
  ["rect", { width: "10", height: "14", x: "3", y: "8", rx: "2", key: "1vrsiq" }],
  ["path", { d: "M5 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2h-2.4", key: "1j4zmg" }],
  ["path", { d: "M8 18h.01", key: "lrp35t" }]
], RQ = e("tablet-smartphone", VQ);
const EQ = [
  ["rect", { width: "16", height: "20", x: "4", y: "2", rx: "2", ry: "2", key: "76otgf" }],
  ["line", { x1: "12", x2: "12.01", y1: "18", y2: "18", key: "1dp563" }]
], LQ = e("tablet", EQ);
const PQ = [
  [
    "path",
    {
      d: "M12.586 2.586A2 2 0 0 0 11.172 2H4a2 2 0 0 0-2 2v7.172a2 2 0 0 0 .586 1.414l8.704 8.704a2.426 2.426 0 0 0 3.42 0l6.58-6.58a2.426 2.426 0 0 0 0-3.42z",
      key: "vktsd0"
    }
  ],
  ["circle", { cx: "7.5", cy: "7.5", r: ".5", fill: "currentColor", key: "kqv944" }]
], TQ = e("tag", PQ);
const OQ = [
  ["circle", { cx: "7", cy: "7", r: "5", key: "x29byf" }],
  ["circle", { cx: "17", cy: "17", r: "5", key: "1op1d2" }],
  ["path", { d: "M12 17h10", key: "ls21zv" }],
  ["path", { d: "m3.46 10.54 7.08-7.08", key: "1rehiu" }]
], DQ = e("tablets", OQ);
const IQ = [
  [
    "path",
    {
      d: "M13.172 2a2 2 0 0 1 1.414.586l6.71 6.71a2.4 2.4 0 0 1 0 3.408l-4.592 4.592a2.4 2.4 0 0 1-3.408 0l-6.71-6.71A2 2 0 0 1 6 9.172V3a1 1 0 0 1 1-1z",
      key: "16rjxf"
    }
  ],
  [
    "path",
    { d: "M2 7v6.172a2 2 0 0 0 .586 1.414l6.71 6.71a2.4 2.4 0 0 0 3.191.193", key: "178nd4" }
  ],
  ["circle", { cx: "10.5", cy: "6.5", r: ".5", fill: "currentColor", key: "12ikhr" }]
], FQ = e("tags", IQ);
const BQ = [["path", { d: "M4 4v16", key: "6qkkli" }]], UQ = e("tally-1", BQ);
const WQ = [
  ["path", { d: "M4 4v16", key: "6qkkli" }],
  ["path", { d: "M9 4v16", key: "81ygyz" }]
], ZQ = e("tally-2", WQ);
const GQ = [
  ["path", { d: "M4 4v16", key: "6qkkli" }],
  ["path", { d: "M9 4v16", key: "81ygyz" }],
  ["path", { d: "M14 4v16", key: "12vmem" }]
], XQ = e("tally-3", GQ);
const YQ = [
  ["path", { d: "M4 4v16", key: "6qkkli" }],
  ["path", { d: "M9 4v16", key: "81ygyz" }],
  ["path", { d: "M14 4v16", key: "12vmem" }],
  ["path", { d: "M19 4v16", key: "8ij5ei" }]
], KQ = e("tally-4", YQ);
const QQ = [
  ["path", { d: "M4 4v16", key: "6qkkli" }],
  ["path", { d: "M9 4v16", key: "81ygyz" }],
  ["path", { d: "M14 4v16", key: "12vmem" }],
  ["path", { d: "M19 4v16", key: "8ij5ei" }],
  ["path", { d: "M22 6 2 18", key: "h9moai" }]
], JQ = e("tally-5", QQ);
const eJ = [
  ["circle", { cx: "17", cy: "4", r: "2", key: "y5j2s2" }],
  ["path", { d: "M15.59 5.41 5.41 15.59", key: "l0vprr" }],
  ["circle", { cx: "4", cy: "17", r: "2", key: "9p4efm" }],
  ["path", { d: "M12 22s-4-9-1.5-11.5S22 12 22 12", key: "1twk4o" }]
], tJ = e("tangent", eJ);
const aJ = [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["circle", { cx: "12", cy: "12", r: "6", key: "1vlfrh" }],
  ["circle", { cx: "12", cy: "12", r: "2", key: "1c9p78" }]
], oJ = e("target", aJ);
const nJ = [
  [
    "path",
    {
      d: "m10.065 12.493-6.18 1.318a.934.934 0 0 1-1.108-.702l-.537-2.15a1.07 1.07 0 0 1 .691-1.265l13.504-4.44",
      key: "k4qptu"
    }
  ],
  ["path", { d: "m13.56 11.747 4.332-.924", key: "19l80z" }],
  ["path", { d: "m16 21-3.105-6.21", key: "7oh9d" }],
  [
    "path",
    {
      d: "M16.485 5.94a2 2 0 0 1 1.455-2.425l1.09-.272a1 1 0 0 1 1.212.727l1.515 6.06a1 1 0 0 1-.727 1.213l-1.09.272a2 2 0 0 1-2.425-1.455z",
      key: "m7xp4m"
    }
  ],
  ["path", { d: "m6.158 8.633 1.114 4.456", key: "74o979" }],
  ["path", { d: "m8 21 3.105-6.21", key: "1fvxut" }],
  ["circle", { cx: "12", cy: "13", r: "2", key: "1c1ljs" }]
], cJ = e("telescope", nJ);
const rJ = [
  ["circle", { cx: "4", cy: "4", r: "2", key: "bt5ra8" }],
  ["path", { d: "m14 5 3-3 3 3", key: "1sorif" }],
  ["path", { d: "m14 10 3-3 3 3", key: "1jyi9h" }],
  ["path", { d: "M17 14V2", key: "8ymqnk" }],
  ["path", { d: "M17 14H7l-5 8h20Z", key: "13ar7p" }],
  ["path", { d: "M8 14v8", key: "1ghmqk" }],
  ["path", { d: "m9 14 5 8", key: "13pgi6" }]
], hJ = e("tent-tree", rJ);
const dJ = [
  ["path", { d: "M3.5 21 14 3", key: "1szst5" }],
  ["path", { d: "M20.5 21 10 3", key: "1310c3" }],
  ["path", { d: "M15.5 21 12 15l-3.5 6", key: "1ddtfw" }],
  ["path", { d: "M2 21h20", key: "1nyx9w" }]
], iJ = e("tent", dJ);
const sJ = [
  ["path", { d: "M12 19h8", key: "baeox8" }],
  ["path", { d: "m4 17 6-6-6-6", key: "1yngyt" }]
], yJ = e("terminal", sJ);
const pJ = [
  [
    "path",
    { d: "M21 7 6.82 21.18a2.83 2.83 0 0 1-3.99-.01a2.83 2.83 0 0 1 0-4L17 3", key: "1ub6xw" }
  ],
  ["path", { d: "m16 2 6 6", key: "1gw87d" }],
  ["path", { d: "M12 16H4", key: "1cjfip" }]
], kJ = e("test-tube-diagonal", pJ);
const lJ = [
  ["path", { d: "M14.5 2v17.5c0 1.4-1.1 2.5-2.5 2.5c-1.4 0-2.5-1.1-2.5-2.5V2", key: "125lnx" }],
  ["path", { d: "M8.5 2h7", key: "csnxdl" }],
  ["path", { d: "M14.5 16h-5", key: "1ox875" }]
], uJ = e("test-tube", lJ);
const MJ = [
  ["path", { d: "M9 2v17.5A2.5 2.5 0 0 1 6.5 22A2.5 2.5 0 0 1 4 19.5V2", key: "1hjrqt" }],
  ["path", { d: "M20 2v17.5a2.5 2.5 0 0 1-2.5 2.5a2.5 2.5 0 0 1-2.5-2.5V2", key: "16lc8n" }],
  ["path", { d: "M3 2h7", key: "7s29d5" }],
  ["path", { d: "M14 2h7", key: "7sicin" }],
  ["path", { d: "M9 16H4", key: "1bfye3" }],
  ["path", { d: "M20 16h-5", key: "ddnjpe" }]
], fJ = e("test-tubes", MJ);
const mJ = [
  ["path", { d: "M21 5H3", key: "1fi0y6" }],
  ["path", { d: "M17 12H7", key: "16if0g" }],
  ["path", { d: "M19 19H5", key: "vjpgq2" }]
], vJ = e("text-align-center", mJ);
const gJ = [
  ["path", { d: "M21 5H3", key: "1fi0y6" }],
  ["path", { d: "M21 12H9", key: "dn1m92" }],
  ["path", { d: "M21 19H7", key: "4cu937" }]
], _J = e("text-align-end", gJ);
const xJ = [
  ["path", { d: "M3 5h18", key: "1u36vt" }],
  ["path", { d: "M3 12h18", key: "1i2n21" }],
  ["path", { d: "M3 19h18", key: "awlh7x" }]
], bJ = e("text-align-justify", xJ);
const wJ = [
  ["path", { d: "M21 5H3", key: "1fi0y6" }],
  ["path", { d: "M15 12H3", key: "6jk70r" }],
  ["path", { d: "M17 19H3", key: "z6ezky" }]
], NJ = e("text-align-start", wJ);
const $J = [
  ["path", { d: "M12 20h-1a2 2 0 0 1-2-2 2 2 0 0 1-2 2H6", key: "1528k5" }],
  ["path", { d: "M13 8h7a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2h-7", key: "13ksps" }],
  ["path", { d: "M5 16H4a2 2 0 0 1-2-2v-4a2 2 0 0 1 2-2h1", key: "1n9rhb" }],
  ["path", { d: "M6 4h1a2 2 0 0 1 2 2 2 2 0 0 1 2-2h1", key: "1mj8rg" }],
  ["path", { d: "M9 6v12", key: "velyjx" }]
], zJ = e("text-cursor-input", $J);
const jJ = [
  ["path", { d: "M17 22h-1a4 4 0 0 1-4-4V6a4 4 0 0 1 4-4h1", key: "uvaxm9" }],
  ["path", { d: "M7 22h1a4 4 0 0 0 4-4v-1", key: "11xy8d" }],
  ["path", { d: "M7 2h1a4 4 0 0 1 4 4v1", key: "1uw06m" }]
], qJ = e("text-cursor", jJ);
const AJ = [
  ["path", { d: "M15 5h6", key: "1pr8yx" }],
  ["path", { d: "M15 12h6", key: "upa0zy" }],
  ["path", { d: "M3 19h18", key: "awlh7x" }],
  ["path", { d: "m3 12 3.553-7.724a.5.5 0 0 1 .894 0L11 12", key: "6lvno8" }],
  ["path", { d: "M3.92 10h6.16", key: "1tl8ex" }]
], HJ = e("text-initial", AJ);
const SJ = [
  ["path", { d: "M17 5H3", key: "1cn7zz" }],
  ["path", { d: "M21 12H8", key: "scolzb" }],
  ["path", { d: "M21 19H8", key: "13qgcb" }],
  ["path", { d: "M3 12v7", key: "1ri8j3" }]
], CJ = e("text-quote", SJ);
const VJ = [
  ["path", { d: "M21 5H3", key: "1fi0y6" }],
  ["path", { d: "M10 12H3", key: "1ulcyk" }],
  ["path", { d: "M10 19H3", key: "108z41" }],
  ["circle", { cx: "17", cy: "15", r: "3", key: "1upz2a" }],
  ["path", { d: "m21 19-1.9-1.9", key: "dwi7p8" }]
], RJ = e("text-search", VJ);
const EJ = [
  ["path", { d: "M14 21h1", key: "v9vybs" }],
  ["path", { d: "M14 3h1", key: "1ec4yj" }],
  ["path", { d: "M19 3a2 2 0 0 1 2 2", key: "18rm91" }],
  ["path", { d: "M21 14v1", key: "169vum" }],
  ["path", { d: "M21 19a2 2 0 0 1-2 2", key: "1j7049" }],
  ["path", { d: "M21 9v1", key: "mxsmne" }],
  ["path", { d: "M3 14v1", key: "vnatye" }],
  ["path", { d: "M3 9v1", key: "1r0deq" }],
  ["path", { d: "M5 21a2 2 0 0 1-2-2", key: "sbafld" }],
  ["path", { d: "M5 3a2 2 0 0 0-2 2", key: "y57alp" }],
  ["path", { d: "M7 12h10", key: "b7w52i" }],
  ["path", { d: "M7 16h6", key: "1vyc9m" }],
  ["path", { d: "M7 8h8", key: "1jbsf9" }],
  ["path", { d: "M9 21h1", key: "15o7lz" }],
  ["path", { d: "M9 3h1", key: "1yesri" }]
], LJ = e("text-select", EJ);
const PJ = [
  ["path", { d: "m16 16-3 3 3 3", key: "117b85" }],
  ["path", { d: "M3 12h14.5a1 1 0 0 1 0 7H13", key: "18xa6z" }],
  ["path", { d: "M3 19h6", key: "1ygdsz" }],
  ["path", { d: "M3 5h18", key: "1u36vt" }]
], TJ = e("text-wrap", PJ);
const OJ = [
  ["path", { d: "M2 10s3-3 3-8", key: "3xiif0" }],
  ["path", { d: "M22 10s-3-3-3-8", key: "ioaa5q" }],
  ["path", { d: "M10 2c0 4.4-3.6 8-8 8", key: "16fkpi" }],
  ["path", { d: "M14 2c0 4.4 3.6 8 8 8", key: "b9eulq" }],
  ["path", { d: "M2 10s2 2 2 5", key: "1au1lb" }],
  ["path", { d: "M22 10s-2 2-2 5", key: "qi2y5e" }],
  ["path", { d: "M8 15h8", key: "45n4r" }],
  ["path", { d: "M2 22v-1a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v1", key: "1vsc2m" }],
  ["path", { d: "M14 22v-1a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v1", key: "hrha4u" }]
], DJ = e("theater", OJ);
const IJ = [
  ["path", { d: "m10 20-1.25-2.5L6 18", key: "18frcb" }],
  ["path", { d: "M10 4 8.75 6.5 6 6", key: "7mghy3" }],
  ["path", { d: "M10.585 15H10", key: "4nqulp" }],
  ["path", { d: "M2 12h6.5L10 9", key: "kv9z4n" }],
  ["path", { d: "M20 14.54a4 4 0 1 1-4 0V4a2 2 0 0 1 4 0z", key: "yu0u2z" }],
  ["path", { d: "m4 10 1.5 2L4 14", key: "k9enpj" }],
  ["path", { d: "m7 21 3-6-1.5-3", key: "j8hb9u" }],
  ["path", { d: "m7 3 3 6h2", key: "1bbqgq" }]
], FJ = e("thermometer-snowflake", IJ);
const BJ = [
  ["path", { d: "M12 2v2", key: "tus03m" }],
  ["path", { d: "M12 8a4 4 0 0 0-1.645 7.647", key: "wz5p04" }],
  ["path", { d: "M2 12h2", key: "1t8f8n" }],
  ["path", { d: "M20 14.54a4 4 0 1 1-4 0V4a2 2 0 0 1 4 0z", key: "yu0u2z" }],
  ["path", { d: "m4.93 4.93 1.41 1.41", key: "149t6j" }],
  ["path", { d: "m6.34 17.66-1.41 1.41", key: "1m8zz5" }]
], UJ = e("thermometer-sun", BJ);
const WJ = [
  ["path", { d: "M14 4v10.54a4 4 0 1 1-4 0V4a2 2 0 0 1 4 0Z", key: "17jzev" }]
], ZJ = e("thermometer", WJ);
const GJ = [
  [
    "path",
    {
      d: "M9 18.12 10 14H4.17a2 2 0 0 1-1.92-2.56l2.33-8A2 2 0 0 1 6.5 2H20a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-2.76a2 2 0 0 0-1.79 1.11L12 22a3.13 3.13 0 0 1-3-3.88Z",
      key: "m61m77"
    }
  ],
  ["path", { d: "M17 14V2", key: "8ymqnk" }]
], XJ = e("thumbs-down", GJ);
const YJ = [
  [
    "path",
    {
      d: "M15 5.88 14 10h5.83a2 2 0 0 1 1.92 2.56l-2.33 8A2 2 0 0 1 17.5 22H4a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h2.76a2 2 0 0 0 1.79-1.11L12 2a3.13 3.13 0 0 1 3 3.88Z",
      key: "emmmcr"
    }
  ],
  ["path", { d: "M7 10v12", key: "1qc93n" }]
], KJ = e("thumbs-up", YJ);
const QJ = [
  [
    "path",
    {
      d: "M2 9a3 3 0 0 1 0 6v2a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-2a3 3 0 0 1 0-6V7a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z",
      key: "qn84l0"
    }
  ],
  ["path", { d: "m9 12 2 2 4-4", key: "dzmm74" }]
], JJ = e("ticket-check", QJ);
const e11 = [
  [
    "path",
    {
      d: "M2 9a3 3 0 0 1 0 6v2a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-2a3 3 0 0 1 0-6V7a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z",
      key: "qn84l0"
    }
  ],
  ["path", { d: "M9 12h6", key: "1c52cq" }]
], t11 = e("ticket-minus", e11);
const a11 = [
  [
    "path",
    {
      d: "M2 9a3 3 0 1 1 0 6v2a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-2a3 3 0 1 1 0-6V7a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z",
      key: "1l48ns"
    }
  ],
  ["path", { d: "M9 9h.01", key: "1q5me6" }],
  ["path", { d: "m15 9-6 6", key: "1uzhvr" }],
  ["path", { d: "M15 15h.01", key: "lqbp3k" }]
], o11 = e("ticket-percent", a11);
const n11 = [
  [
    "path",
    {
      d: "M2 9a3 3 0 0 1 0 6v2a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-2a3 3 0 0 1 0-6V7a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z",
      key: "qn84l0"
    }
  ],
  ["path", { d: "M9 12h6", key: "1c52cq" }],
  ["path", { d: "M12 9v6", key: "199k2o" }]
], c11 = e("ticket-plus", n11);
const r11 = [
  [
    "path",
    {
      d: "M2 9a3 3 0 0 1 0 6v2a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-2a3 3 0 0 1 0-6V7a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z",
      key: "qn84l0"
    }
  ],
  ["path", { d: "m9.5 14.5 5-5", key: "qviqfa" }]
], h11 = e("ticket-slash", r11);
const d11 = [
  [
    "path",
    {
      d: "M2 9a3 3 0 0 1 0 6v2a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-2a3 3 0 0 1 0-6V7a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z",
      key: "qn84l0"
    }
  ],
  ["path", { d: "m9.5 14.5 5-5", key: "qviqfa" }],
  ["path", { d: "m9.5 9.5 5 5", key: "18nt4w" }]
], i11 = e("ticket-x", d11);
const s11 = [
  [
    "path",
    {
      d: "M2 9a3 3 0 0 1 0 6v2a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-2a3 3 0 0 1 0-6V7a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z",
      key: "qn84l0"
    }
  ],
  ["path", { d: "M13 5v2", key: "dyzc3o" }],
  ["path", { d: "M13 17v2", key: "1ont0d" }],
  ["path", { d: "M13 11v2", key: "1wjjxi" }]
], y11 = e("ticket", s11);
const p11 = [
  ["path", { d: "M10.5 17h1.227a2 2 0 0 0 1.345-.52L18 12", key: "16muxl" }],
  ["path", { d: "m12 13.5 3.794.506", key: "6v5z87" }],
  ["path", { d: "m3.173 8.18 11-5a2 2 0 0 1 2.647.993L18.56 8", key: "15hfpj" }],
  ["path", { d: "M6 10V8", key: "1y41hn" }],
  ["path", { d: "M6 14v1", key: "cao2tf" }],
  ["path", { d: "M6 19v2", key: "1loha6" }],
  ["rect", { x: "2", y: "8", width: "20", height: "13", rx: "2", key: "p3bz5l" }]
], k11 = e("tickets-plane", p11);
const l11 = [
  ["path", { d: "m3.173 8.18 11-5a2 2 0 0 1 2.647.993L18.56 8", key: "15hfpj" }],
  ["path", { d: "M6 10V8", key: "1y41hn" }],
  ["path", { d: "M6 14v1", key: "cao2tf" }],
  ["path", { d: "M6 19v2", key: "1loha6" }],
  ["rect", { x: "2", y: "8", width: "20", height: "13", rx: "2", key: "p3bz5l" }]
], u11 = e("tickets", l11);
const M11 = [
  ["path", { d: "M10 2h4", key: "n1abiw" }],
  ["path", { d: "M4.6 11a8 8 0 0 0 1.7 8.7 8 8 0 0 0 8.7 1.7", key: "10he05" }],
  ["path", { d: "M7.4 7.4a8 8 0 0 1 10.3 1 8 8 0 0 1 .9 10.2", key: "15f7sh" }],
  ["path", { d: "m2 2 20 20", key: "1ooewy" }],
  ["path", { d: "M12 12v-2", key: "fwoke6" }]
], f11 = e("timer-off", M11);
const m11 = [
  ["line", { x1: "10", x2: "14", y1: "2", y2: "2", key: "14vaq8" }],
  ["line", { x1: "12", x2: "15", y1: "14", y2: "11", key: "17fdiu" }],
  ["circle", { cx: "12", cy: "14", r: "8", key: "1e1u0o" }]
], v11 = e("timer", m11);
const g11 = [
  ["path", { d: "M10 2h4", key: "n1abiw" }],
  ["path", { d: "M12 14v-4", key: "1evpnu" }],
  ["path", { d: "M4 13a8 8 0 0 1 8-7 8 8 0 1 1-5.3 14L4 17.6", key: "1ts96g" }],
  ["path", { d: "M9 17H4v5", key: "8t5av" }]
], _11 = e("timer-reset", g11);
const x11 = [
  ["circle", { cx: "9", cy: "12", r: "3", key: "u3jwor" }],
  ["rect", { width: "20", height: "14", x: "2", y: "5", rx: "7", key: "g7kal2" }]
], b11 = e("toggle-left", x11);
const w11 = [
  ["circle", { cx: "15", cy: "12", r: "3", key: "1afu0r" }],
  ["rect", { width: "20", height: "14", x: "2", y: "5", rx: "7", key: "g7kal2" }]
], N11 = e("toggle-right", w11);
const $11 = [
  [
    "path",
    {
      d: "M7 12h13a1 1 0 0 1 1 1 5 5 0 0 1-5 5h-.598a.5.5 0 0 0-.424.765l1.544 2.47a.5.5 0 0 1-.424.765H5.402a.5.5 0 0 1-.424-.765L7 18",
      key: "kc4kqr"
    }
  ],
  ["path", { d: "M8 18a5 5 0 0 1-5-5V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v8", key: "1tqs57" }]
], z11 = e("toilet", $11);
const j11 = [
  ["path", { d: "M10 15h4", key: "192ueg" }],
  [
    "path",
    {
      d: "m14.817 10.995-.971-1.45 1.034-1.232a2 2 0 0 0-2.025-3.238l-1.82.364L9.91 3.885a2 2 0 0 0-3.625.748L6.141 6.55l-1.725.426a2 2 0 0 0-.19 3.756l.657.27",
      key: "xbnumr"
    }
  ],
  [
    "path",
    {
      d: "m18.822 10.995 2.26-5.38a1 1 0 0 0-.557-1.318L16.954 2.9a1 1 0 0 0-1.281.533l-.924 2.122",
      key: "eaw7gc"
    }
  ],
  [
    "path",
    {
      d: "M4 12.006A1 1 0 0 1 4.994 11H19a1 1 0 0 1 1 1v7a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2z",
      key: "1vaooh"
    }
  ]
], q11 = e("tool-case", j11);
const A11 = [
  ["path", { d: "M21 4H3", key: "1hwok0" }],
  ["path", { d: "M18 8H6", key: "41n648" }],
  ["path", { d: "M19 12H9", key: "1g4lpz" }],
  ["path", { d: "M16 16h-6", key: "1j5d54" }],
  ["path", { d: "M11 20H9", key: "39obr8" }]
], H11 = e("tornado", A11);
const S11 = [
  ["path", { d: "M16 12v4", key: "vf1vip" }],
  [
    "path",
    {
      d: "M16 6a2 2 0 0 1 1.414.586l4 4A2 2 0 0 1 22 12v7a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 .586-1.414l4-4A2 2 0 0 1 8 6z",
      key: "1h1rvn"
    }
  ],
  ["path", { d: "M16 6V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2", key: "1ksdt3" }],
  ["path", { d: "M2 14h20", key: "myj16y" }],
  ["path", { d: "M8 12v4", key: "1w4uao" }]
], C11 = e("toolbox", S11);
const V11 = [
  ["ellipse", { cx: "12", cy: "11", rx: "3", ry: "2", key: "1b2qxu" }],
  ["ellipse", { cx: "12", cy: "12.5", rx: "10", ry: "8.5", key: "h8emeu" }]
], R11 = e("torus", V11);
const E11 = [
  ["path", { d: "M12 20v-6", key: "1rm09r" }],
  ["path", { d: "M19.656 14H22", key: "170xzr" }],
  ["path", { d: "M2 14h12", key: "d8icqz" }],
  ["path", { d: "m2 2 20 20", key: "1ooewy" }],
  ["path", { d: "M20 20H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2", key: "s23sx2" }],
  ["path", { d: "M9.656 4H20a2 2 0 0 1 2 2v10.344", key: "ovjcvl" }]
], L11 = e("touchpad-off", E11);
const P11 = [
  ["rect", { width: "20", height: "16", x: "2", y: "4", rx: "2", key: "18n3k1" }],
  ["path", { d: "M2 14h20", key: "myj16y" }],
  ["path", { d: "M12 20v-6", key: "1rm09r" }]
], T11 = e("touchpad", P11);
const O11 = [
  [
    "path",
    { d: "M18.2 12.27 20 6H4l1.8 6.27a1 1 0 0 0 .95.73h10.5a1 1 0 0 0 .96-.73Z", key: "1pledb" }
  ],
  ["path", { d: "M8 13v9", key: "hmv0ci" }],
  ["path", { d: "M16 22v-9", key: "ylnf1u" }],
  ["path", { d: "m9 6 1 7", key: "dpdgam" }],
  ["path", { d: "m15 6-1 7", key: "ls7zgu" }],
  ["path", { d: "M12 6V2", key: "1pj48d" }],
  ["path", { d: "M13 2h-2", key: "mj6ths" }]
], D11 = e("tower-control", O11);
const I11 = [
  ["rect", { width: "18", height: "12", x: "3", y: "8", rx: "1", key: "158fvp" }],
  ["path", { d: "M10 8V5c0-.6-.4-1-1-1H6a1 1 0 0 0-1 1v3", key: "s0042v" }],
  ["path", { d: "M19 8V5c0-.6-.4-1-1-1h-3a1 1 0 0 0-1 1v3", key: "9wmeh2" }]
], F11 = e("toy-brick", I11);
const B11 = [
  ["path", { d: "m10 11 11 .9a1 1 0 0 1 .8 1.1l-.665 4.158a1 1 0 0 1-.988.842H20", key: "she1j9" }],
  ["path", { d: "M16 18h-5", key: "bq60fd" }],
  ["path", { d: "M18 5a1 1 0 0 0-1 1v5.573", key: "1kv8ia" }],
  ["path", { d: "M3 4h8.129a1 1 0 0 1 .99.863L13 11.246", key: "1q1ert" }],
  ["path", { d: "M4 11V4", key: "9ft8pt" }],
  ["path", { d: "M7 15h.01", key: "k5ht0j" }],
  ["path", { d: "M8 10.1V4", key: "1jgyzo" }],
  ["circle", { cx: "18", cy: "18", r: "2", key: "1emm8v" }],
  ["circle", { cx: "7", cy: "15", r: "5", key: "ddtuc" }]
], U11 = e("tractor", B11);
const W11 = [
  ["path", { d: "M16.05 10.966a5 2.5 0 0 1-8.1 0", key: "m5jpwb" }],
  [
    "path",
    {
      d: "m16.923 14.049 4.48 2.04a1 1 0 0 1 .001 1.831l-8.574 3.9a2 2 0 0 1-1.66 0l-8.574-3.91a1 1 0 0 1 0-1.83l4.484-2.04",
      key: "rbg3g8"
    }
  ],
  ["path", { d: "M16.949 14.14a5 2.5 0 1 1-9.9 0L10.063 3.5a2 2 0 0 1 3.874 0z", key: "vap8c8" }],
  ["path", { d: "M9.194 6.57a5 2.5 0 0 0 5.61 0", key: "15hn5c" }]
], Z11 = e("traffic-cone", W11);
const G11 = [
  ["path", { d: "M2 22V12a10 10 0 1 1 20 0v10", key: "o0fyp0" }],
  ["path", { d: "M15 6.8v1.4a3 2.8 0 1 1-6 0V6.8", key: "m8q3n9" }],
  ["path", { d: "M10 15h.01", key: "44in9x" }],
  ["path", { d: "M14 15h.01", key: "5mohn5" }],
  ["path", { d: "M10 19a4 4 0 0 1-4-4v-3a6 6 0 1 1 12 0v3a4 4 0 0 1-4 4Z", key: "hckbmu" }],
  ["path", { d: "m9 19-2 3", key: "iij7hm" }],
  ["path", { d: "m15 19 2 3", key: "npx8sa" }]
], X11 = e("train-front-tunnel", G11);
const Y11 = [
  ["path", { d: "M8 3.1V7a4 4 0 0 0 8 0V3.1", key: "1v71zp" }],
  ["path", { d: "m9 15-1-1", key: "1yrq24" }],
  ["path", { d: "m15 15 1-1", key: "1t0d6s" }],
  ["path", { d: "M9 19c-2.8 0-5-2.2-5-5v-4a8 8 0 0 1 16 0v4c0 2.8-2.2 5-5 5Z", key: "1p0hjs" }],
  ["path", { d: "m8 19-2 3", key: "13i0xs" }],
  ["path", { d: "m16 19 2 3", key: "xo31yx" }]
], K11 = e("train-front", Y11);
const Q11 = [
  ["path", { d: "M2 17 17 2", key: "18b09t" }],
  ["path", { d: "m2 14 8 8", key: "1gv9hu" }],
  ["path", { d: "m5 11 8 8", key: "189pqp" }],
  ["path", { d: "m8 8 8 8", key: "1imecy" }],
  ["path", { d: "m11 5 8 8", key: "ummqn6" }],
  ["path", { d: "m14 2 8 8", key: "1vk7dn" }],
  ["path", { d: "M7 22 22 7", key: "15mb1i" }]
], J11 = e("train-track", Q11);
const ee1 = [
  ["rect", { width: "16", height: "16", x: "4", y: "3", rx: "2", key: "1wxw4b" }],
  ["path", { d: "M4 11h16", key: "mpoxn0" }],
  ["path", { d: "M12 3v8", key: "1h2ygw" }],
  ["path", { d: "m8 19-2 3", key: "13i0xs" }],
  ["path", { d: "m18 22-2-3", key: "1p0ohu" }],
  ["path", { d: "M8 15h.01", key: "a7atzg" }],
  ["path", { d: "M16 15h.01", key: "rnfrdf" }]
], te1 = e("tram-front", ee1);
const ae1 = [
  ["path", { d: "M12 16v6", key: "c8a4gj" }],
  ["path", { d: "M14 20h-4", key: "m8m19d" }],
  ["path", { d: "M18 2h4v4", key: "1341mj" }],
  ["path", { d: "m2 2 7.17 7.17", key: "13q8l2" }],
  ["path", { d: "M2 5.355V2h3.357", key: "18136r" }],
  ["path", { d: "m22 2-7.17 7.17", key: "1epvy4" }],
  ["path", { d: "M8 5 5 8", key: "mgbjhz" }],
  ["circle", { cx: "12", cy: "12", r: "4", key: "4exip2" }]
], oe1 = e("transgender", ae1);
const ne1 = [
  ["path", { d: "M10 11v6", key: "nco0om" }],
  ["path", { d: "M14 11v6", key: "outv1u" }],
  ["path", { d: "M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6", key: "miytrc" }],
  ["path", { d: "M3 6h18", key: "d0wm0j" }],
  ["path", { d: "M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2", key: "e791ji" }]
], ce1 = e("trash-2", ne1);
const re1 = [
  ["path", { d: "M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6", key: "miytrc" }],
  ["path", { d: "M3 6h18", key: "d0wm0j" }],
  ["path", { d: "M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2", key: "e791ji" }]
], he1 = e("trash", re1);
const de1 = [
  [
    "path",
    {
      d: "M8 19a4 4 0 0 1-2.24-7.32A3.5 3.5 0 0 1 9 6.03V6a3 3 0 1 1 6 0v.04a3.5 3.5 0 0 1 3.24 5.65A4 4 0 0 1 16 19Z",
      key: "oadzkq"
    }
  ],
  ["path", { d: "M12 19v3", key: "npa21l" }]
], ie1 = e("tree-deciduous", de1);
const se1 = [
  ["path", { d: "M13 8c0-2.76-2.46-5-5.5-5S2 5.24 2 8h2l1-1 1 1h4", key: "foxbe7" }],
  [
    "path",
    { d: "M13 7.14A5.82 5.82 0 0 1 16.5 6c3.04 0 5.5 2.24 5.5 5h-3l-1-1-1 1h-3", key: "18arnh" }
  ],
  [
    "path",
    {
      d: "M5.89 9.71c-2.15 2.15-2.3 5.47-.35 7.43l4.24-4.25.7-.7.71-.71 2.12-2.12c-1.95-1.96-5.27-1.8-7.42.35",
      key: "ywahnh"
    }
  ],
  ["path", { d: "M11 15.5c.5 2.5-.17 4.5-1 6.5h4c2-5.5-.5-12-1-14", key: "ft0feo" }]
], ye1 = e("tree-palm", se1);
const pe1 = [
  [
    "path",
    {
      d: "m17 14 3 3.3a1 1 0 0 1-.7 1.7H4.7a1 1 0 0 1-.7-1.7L7 14h-.3a1 1 0 0 1-.7-1.7L9 9h-.2A1 1 0 0 1 8 7.3L12 3l4 4.3a1 1 0 0 1-.8 1.7H15l3 3.3a1 1 0 0 1-.7 1.7H17Z",
      key: "cpyugq"
    }
  ],
  ["path", { d: "M12 22v-3", key: "kmzjlo" }]
], ke1 = e("tree-pine", pe1);
const le1 = [
  ["path", { d: "M10 10v.2A3 3 0 0 1 8.9 16H5a3 3 0 0 1-1-5.8V10a3 3 0 0 1 6 0Z", key: "1l6gj6" }],
  ["path", { d: "M7 16v6", key: "1a82de" }],
  ["path", { d: "M13 19v3", key: "13sx9i" }],
  [
    "path",
    {
      d: "M12 19h8.3a1 1 0 0 0 .7-1.7L18 14h.3a1 1 0 0 0 .7-1.7L16 9h.2a1 1 0 0 0 .8-1.7L13 3l-1.4 1.5",
      key: "1sj9kv"
    }
  ]
], ue1 = e("trees", le1);
const Me1 = [
  ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", ry: "2", key: "1m3agn" }],
  ["rect", { width: "3", height: "9", x: "7", y: "7", key: "14n3xi" }],
  ["rect", { width: "3", height: "5", x: "14", y: "7", key: "s4azjd" }]
], fe1 = e("trello", Me1);
const me1 = [
  ["path", { d: "M16 17h6v-6", key: "t6n2it" }],
  ["path", { d: "m22 17-8.5-8.5-5 5L2 7", key: "x473p" }]
], ve1 = e("trending-down", me1);
const ge1 = [
  ["path", { d: "M14.828 14.828 21 21", key: "ar5fw7" }],
  ["path", { d: "M21 16v5h-5", key: "1ck2sf" }],
  ["path", { d: "m21 3-9 9-4-4-6 6", key: "1h02xo" }],
  ["path", { d: "M21 8V3h-5", key: "1qoq8a" }]
], _e1 = e("trending-up-down", ge1);
const xe1 = [
  ["path", { d: "M16 7h6v6", key: "box55l" }],
  ["path", { d: "m22 7-8.5 8.5-5-5L2 17", key: "1t1m79" }]
], be1 = e("trending-up", xe1);
const we1 = [
  [
    "path",
    {
      d: "m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3",
      key: "wmoenq"
    }
  ],
  ["path", { d: "M12 9v4", key: "juzpu7" }],
  ["path", { d: "M12 17h.01", key: "p32p05" }]
], Ne1 = e("triangle-alert", we1);
const $e1 = [
  ["path", { d: "M10.17 4.193a2 2 0 0 1 3.666.013", key: "pltmmw" }],
  ["path", { d: "M14 21h2", key: "v4qezv" }],
  ["path", { d: "m15.874 7.743 1 1.732", key: "10m0iw" }],
  ["path", { d: "m18.849 12.952 1 1.732", key: "zadnam" }],
  ["path", { d: "M21.824 18.18a2 2 0 0 1-1.835 2.824", key: "fvwuk4" }],
  ["path", { d: "M4.024 21a2 2 0 0 1-1.839-2.839", key: "1e1kah" }],
  ["path", { d: "m5.136 12.952-1 1.732", key: "1u4ldi" }],
  ["path", { d: "M8 21h2", key: "i9zjee" }],
  ["path", { d: "m8.102 7.743-1 1.732", key: "1zzo4u" }]
], ze1 = e("triangle-dashed", $e1);
const je1 = [
  [
    "path",
    {
      d: "M22 18a2 2 0 0 1-2 2H3c-1.1 0-1.3-.6-.4-1.3L20.4 4.3c.9-.7 1.6-.4 1.6.7Z",
      key: "183wce"
    }
  ]
], qe1 = e("triangle-right", je1);
const Ae1 = [
  [
    "path",
    { d: "M13.73 4a2 2 0 0 0-3.46 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z", key: "14u9p9" }
  ]
], He1 = e("triangle", Ae1);
const Se1 = [
  ["path", { d: "M10 14.66v1.626a2 2 0 0 1-.976 1.696A5 5 0 0 0 7 21.978", key: "1n3hpd" }],
  ["path", { d: "M14 14.66v1.626a2 2 0 0 0 .976 1.696A5 5 0 0 1 17 21.978", key: "rfe1zi" }],
  ["path", { d: "M18 9h1.5a1 1 0 0 0 0-5H18", key: "7xy6bh" }],
  ["path", { d: "M4 22h16", key: "57wxv0" }],
  ["path", { d: "M6 9a6 6 0 0 0 12 0V3a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1z", key: "1mhfuq" }],
  ["path", { d: "M6 9H4.5a1 1 0 0 1 0-5H6", key: "tex48p" }]
], Ce1 = e("trophy", Se1);
const Ve1 = [
  ["path", { d: "M14 19V7a2 2 0 0 0-2-2H9", key: "15peso" }],
  ["path", { d: "M15 19H9", key: "18q6dt" }],
  [
    "path",
    {
      d: "M19 19h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.62L18.3 9.38a1 1 0 0 0-.78-.38H14",
      key: "1dkp3j"
    }
  ],
  ["path", { d: "M2 13v5a1 1 0 0 0 1 1h2", key: "pkmmzz" }],
  [
    "path",
    { d: "M4 3 2.15 5.15a.495.495 0 0 0 .35.86h2.15a.47.47 0 0 1 .35.86L3 9.02", key: "1n26pd" }
  ],
  ["circle", { cx: "17", cy: "19", r: "2", key: "1nxcgd" }],
  ["circle", { cx: "7", cy: "19", r: "2", key: "gzo7y7" }]
], Re1 = e("truck-electric", Ve1);
const Ee1 = [
  ["path", { d: "M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2", key: "wrbu53" }],
  ["path", { d: "M15 18H9", key: "1lyqi6" }],
  [
    "path",
    {
      d: "M19 18h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.624l-3.48-4.35A1 1 0 0 0 17.52 8H14",
      key: "lysw3i"
    }
  ],
  ["circle", { cx: "17", cy: "18", r: "2", key: "332jqn" }],
  ["circle", { cx: "7", cy: "18", r: "2", key: "19iecd" }]
], Le1 = e("truck", Ee1);
const Pe1 = [
  ["path", { d: "M15 4 5 9", key: "14bkc9" }],
  ["path", { d: "m15 8.5-10 5", key: "1grtsx" }],
  ["path", { d: "M18 12a9 9 0 0 1-9 9V3", key: "1sst7f" }]
], Te1 = e("turkish-lira", Pe1);
const Oe1 = [
  ["path", { d: "M10 12.01h.01", key: "7rp0yl" }],
  ["path", { d: "M18 8v4a8 8 0 0 1-1.07 4", key: "1st48v" }],
  ["circle", { cx: "10", cy: "12", r: "4", key: "19levz" }],
  ["rect", { x: "2", y: "4", width: "20", height: "16", rx: "2", key: "izxlao" }]
], De1 = e("turntable", Oe1);
const Ie1 = [
  [
    "path",
    {
      d: "m12 10 2 4v3a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-3a8 8 0 1 0-16 0v3a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-3l2-4h4Z",
      key: "1lbbv7"
    }
  ],
  ["path", { d: "M4.82 7.9 8 10", key: "m9wose" }],
  ["path", { d: "M15.18 7.9 12 10", key: "p8dp2u" }],
  ["path", { d: "M16.93 10H20a2 2 0 0 1 0 4H2", key: "12nsm7" }]
], Fe1 = e("turtle", Ie1);
const Be1 = [
  [
    "path",
    {
      d: "M15.033 9.44a.647.647 0 0 1 0 1.12l-4.065 2.352a.645.645 0 0 1-.968-.56V7.648a.645.645 0 0 1 .967-.56z",
      key: "vbtd3f"
    }
  ],
  ["path", { d: "M7 21h10", key: "1b0cd5" }],
  ["rect", { width: "20", height: "14", x: "2", y: "3", rx: "2", key: "48i651" }]
], Ue1 = e("tv-minimal-play", Be1);
const We1 = [
  ["path", { d: "M7 21h10", key: "1b0cd5" }],
  ["rect", { width: "20", height: "14", x: "2", y: "3", rx: "2", key: "48i651" }]
], Ze1 = e("tv-minimal", We1);
const Ge1 = [
  ["path", { d: "m17 2-5 5-5-5", key: "16satq" }],
  ["rect", { width: "20", height: "15", x: "2", y: "7", rx: "2", key: "1e6viu" }]
], Xe1 = e("tv", Ge1);
const Ye1 = [
  ["path", { d: "M21 2H3v16h5v4l4-4h5l4-4V2zm-10 9V7m5 4V7", key: "c0yzno" }]
], Ke1 = e("twitch", Ye1);
const Qe1 = [
  [
    "path",
    {
      d: "M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z",
      key: "pff0z6"
    }
  ]
], Je1 = e("twitter", Qe1);
const e21 = [
  ["path", { d: "M12 4v16", key: "1654pz" }],
  ["path", { d: "M4 7V5a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v2", key: "e0r10z" }],
  ["path", { d: "M9 20h6", key: "s66wpe" }]
], t21 = e("type", e21);
const a21 = [
  [
    "path",
    {
      d: "M14 16.5a.5.5 0 0 0 .5.5h.5a2 2 0 0 1 0 4H9a2 2 0 0 1 0-4h.5a.5.5 0 0 0 .5-.5v-9a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5V8a2 2 0 0 1-4 0V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v3a2 2 0 0 1-4 0v-.5a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5Z",
      key: "1reda3"
    }
  ]
], o21 = e("type-outline", a21);
const n21 = [
  ["path", { d: "M12 13v7a2 2 0 0 0 4 0", key: "rpgb42" }],
  ["path", { d: "M12 2v2", key: "tus03m" }],
  [
    "path",
    { d: "M18.656 13h2.336a1 1 0 0 0 .97-1.274 10.284 10.284 0 0 0-12.07-7.51", key: "yawknk" }
  ],
  ["path", { d: "m2 2 20 20", key: "1ooewy" }],
  ["path", { d: "M5.961 5.957a10.28 10.28 0 0 0-3.922 5.769A1 1 0 0 0 3 13h10", key: "5sfalc" }]
], c21 = e("umbrella-off", n21);
const r21 = [
  ["path", { d: "M12 13v7a2 2 0 0 0 4 0", key: "rpgb42" }],
  ["path", { d: "M12 2v2", key: "tus03m" }],
  [
    "path",
    {
      d: "M20.992 13a1 1 0 0 0 .97-1.274 10.284 10.284 0 0 0-19.923 0A1 1 0 0 0 3 13z",
      key: "124nyo"
    }
  ]
], h21 = e("umbrella", r21);
const d21 = [
  ["path", { d: "M6 4v6a6 6 0 0 0 12 0V4", key: "9kb039" }],
  ["line", { x1: "4", x2: "20", y1: "20", y2: "20", key: "nun2al" }]
], i21 = e("underline", d21);
const s21 = [
  ["path", { d: "M9 14 4 9l5-5", key: "102s5s" }],
  ["path", { d: "M4 9h10.5a5.5 5.5 0 0 1 5.5 5.5a5.5 5.5 0 0 1-5.5 5.5H11", key: "f3b9sd" }]
], y21 = e("undo-2", s21);
const p21 = [
  ["path", { d: "M21 17a9 9 0 0 0-15-6.7L3 13", key: "8mp6z9" }],
  ["path", { d: "M3 7v6h6", key: "1v2h90" }],
  ["circle", { cx: "12", cy: "17", r: "1", key: "1ixnty" }]
], k21 = e("undo-dot", p21);
const l21 = [
  ["path", { d: "M3 7v6h6", key: "1v2h90" }],
  ["path", { d: "M21 17a9 9 0 0 0-9-9 9 9 0 0 0-6 2.3L3 13", key: "1r6uu6" }]
], u21 = e("undo", l21);
const M21 = [
  ["path", { d: "M16 12h6", key: "15xry1" }],
  ["path", { d: "M8 12H2", key: "1jqql6" }],
  ["path", { d: "M12 2v2", key: "tus03m" }],
  ["path", { d: "M12 8v2", key: "1woqiv" }],
  ["path", { d: "M12 14v2", key: "8jcxud" }],
  ["path", { d: "M12 20v2", key: "1lh1kg" }],
  ["path", { d: "m19 15 3-3-3-3", key: "wjy7rq" }],
  ["path", { d: "m5 9-3 3 3 3", key: "j64kie" }]
], f21 = e("unfold-horizontal", M21);
const m21 = [
  ["path", { d: "M12 22v-6", key: "6o8u61" }],
  ["path", { d: "M12 8V2", key: "1wkif3" }],
  ["path", { d: "M4 12H2", key: "rhcxmi" }],
  ["path", { d: "M10 12H8", key: "s88cx1" }],
  ["path", { d: "M16 12h-2", key: "10asgb" }],
  ["path", { d: "M22 12h-2", key: "14jgyd" }],
  ["path", { d: "m15 19-3 3-3-3", key: "11eu04" }],
  ["path", { d: "m15 5-3-3-3 3", key: "itvq4r" }]
], v21 = e("unfold-vertical", m21);
const g21 = [
  ["rect", { width: "8", height: "6", x: "5", y: "4", rx: "1", key: "nzclkv" }],
  ["rect", { width: "8", height: "6", x: "11", y: "14", rx: "1", key: "4tytwb" }]
], _21 = e("ungroup", g21);
const x21 = [
  ["path", { d: "M14 21v-3a2 2 0 0 0-4 0v3", key: "1rgiei" }],
  ["path", { d: "M18 12h.01", key: "yjnet6" }],
  ["path", { d: "M18 16h.01", key: "plv8zi" }],
  [
    "path",
    {
      d: "M22 7a1 1 0 0 0-1-1h-2a2 2 0 0 1-1.143-.359L13.143 2.36a2 2 0 0 0-2.286-.001L6.143 5.64A2 2 0 0 1 5 6H3a1 1 0 0 0-1 1v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2z",
      key: "1ogmi3"
    }
  ],
  ["path", { d: "M6 12h.01", key: "c2rlol" }],
  ["path", { d: "M6 16h.01", key: "1pmjb7" }],
  ["circle", { cx: "12", cy: "10", r: "2", key: "1yojzk" }]
], b21 = e("university", x21);
const w21 = [
  ["path", { d: "M15 7h2a5 5 0 0 1 0 10h-2m-6 0H7A5 5 0 0 1 7 7h2", key: "1re2ne" }]
], N21 = e("unlink-2", w21);
const $21 = [
  [
    "path",
    {
      d: "m18.84 12.25 1.72-1.71h-.02a5.004 5.004 0 0 0-.12-7.07 5.006 5.006 0 0 0-6.95 0l-1.72 1.71",
      key: "yqzxt4"
    }
  ],
  [
    "path",
    {
      d: "m5.17 11.75-1.71 1.71a5.004 5.004 0 0 0 .12 7.07 5.006 5.006 0 0 0 6.95 0l1.71-1.71",
      key: "4qinb0"
    }
  ],
  ["line", { x1: "8", x2: "8", y1: "2", y2: "5", key: "1041cp" }],
  ["line", { x1: "2", x2: "5", y1: "8", y2: "8", key: "14m1p5" }],
  ["line", { x1: "16", x2: "16", y1: "19", y2: "22", key: "rzdirn" }],
  ["line", { x1: "19", x2: "22", y1: "16", y2: "16", key: "ox905f" }]
], z21 = e("unlink", $21);
const j21 = [
  ["path", { d: "m19 5 3-3", key: "yk6iyv" }],
  ["path", { d: "m2 22 3-3", key: "19mgm9" }],
  [
    "path",
    { d: "M6.3 20.3a2.4 2.4 0 0 0 3.4 0L12 18l-6-6-2.3 2.3a2.4 2.4 0 0 0 0 3.4Z", key: "goz73y" }
  ],
  ["path", { d: "M7.5 13.5 10 11", key: "7xgeeb" }],
  ["path", { d: "M10.5 16.5 13 14", key: "10btkg" }],
  [
    "path",
    { d: "m12 6 6 6 2.3-2.3a2.4 2.4 0 0 0 0-3.4l-2.6-2.6a2.4 2.4 0 0 0-3.4 0Z", key: "1snsnr" }
  ]
], q21 = e("unplug", j21);
const A21 = [
  ["path", { d: "M12 3v12", key: "1x0j5s" }],
  ["path", { d: "m17 8-5-5-5 5", key: "7q97r8" }],
  ["path", { d: "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4", key: "ih7n3h" }]
], H21 = e("upload", A21);
const S21 = [
  ["circle", { cx: "10", cy: "7", r: "1", key: "dypaad" }],
  ["circle", { cx: "4", cy: "20", r: "1", key: "22iqad" }],
  ["path", { d: "M4.7 19.3 19 5", key: "1enqfc" }],
  ["path", { d: "m21 3-3 1 2 2Z", key: "d3ov82" }],
  ["path", { d: "M9.26 7.68 5 12l2 5", key: "1esawj" }],
  ["path", { d: "m10 14 5 2 3.5-3.5", key: "v8oal5" }],
  ["path", { d: "m18 12 1-1 1 1-1 1Z", key: "1bh22v" }]
], C21 = e("usb", S21);
const V21 = [
  ["path", { d: "m16 11 2 2 4-4", key: "9rsbq5" }],
  ["path", { d: "M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2", key: "1yyitq" }],
  ["circle", { cx: "9", cy: "7", r: "4", key: "nufk8" }]
], R21 = e("user-check", V21);
const E21 = [
  ["path", { d: "M10 15H6a4 4 0 0 0-4 4v2", key: "1nfge6" }],
  ["path", { d: "m14.305 16.53.923-.382", key: "1itpsq" }],
  ["path", { d: "m15.228 13.852-.923-.383", key: "eplpkm" }],
  ["path", { d: "m16.852 12.228-.383-.923", key: "13v3q0" }],
  ["path", { d: "m16.852 17.772-.383.924", key: "1i8mnm" }],
  ["path", { d: "m19.148 12.228.383-.923", key: "1q8j1v" }],
  ["path", { d: "m19.53 18.696-.382-.924", key: "vk1qj3" }],
  ["path", { d: "m20.772 13.852.924-.383", key: "n880s0" }],
  ["path", { d: "m20.772 16.148.924.383", key: "1g6xey" }],
  ["circle", { cx: "18", cy: "15", r: "3", key: "gjjjvw" }],
  ["circle", { cx: "9", cy: "7", r: "4", key: "nufk8" }]
], L21 = e("user-cog", E21);
const P21 = [
  ["circle", { cx: "10", cy: "7", r: "4", key: "e45bow" }],
  ["path", { d: "M10.3 15H7a4 4 0 0 0-4 4v2", key: "3bnktk" }],
  ["path", { d: "M15 15.5V14a2 2 0 0 1 4 0v1.5", key: "12ym5i" }],
  ["rect", { width: "8", height: "5", x: "13", y: "16", rx: ".899", key: "4p176n" }]
], T21 = e("user-lock", P21);
const O21 = [
  ["path", { d: "M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2", key: "1yyitq" }],
  ["circle", { cx: "9", cy: "7", r: "4", key: "nufk8" }],
  ["line", { x1: "22", x2: "16", y1: "11", y2: "11", key: "1shjgl" }]
], D21 = e("user-minus", O21);
const I21 = [
  ["path", { d: "M11.5 15H7a4 4 0 0 0-4 4v2", key: "15lzij" }],
  [
    "path",
    {
      d: "M21.378 16.626a1 1 0 0 0-3.004-3.004l-4.01 4.012a2 2 0 0 0-.506.854l-.837 2.87a.5.5 0 0 0 .62.62l2.87-.837a2 2 0 0 0 .854-.506z",
      key: "1817ys"
    }
  ],
  ["circle", { cx: "10", cy: "7", r: "4", key: "e45bow" }]
], F21 = e("user-pen", I21);
const B21 = [
  ["path", { d: "M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2", key: "1yyitq" }],
  ["circle", { cx: "9", cy: "7", r: "4", key: "nufk8" }],
  ["line", { x1: "19", x2: "19", y1: "8", y2: "14", key: "1bvyxn" }],
  ["line", { x1: "22", x2: "16", y1: "11", y2: "11", key: "1shjgl" }]
], U21 = e("user-plus", B21);
const W21 = [
  ["path", { d: "M2 21a8 8 0 0 1 13.292-6", key: "bjp14o" }],
  ["circle", { cx: "10", cy: "8", r: "5", key: "o932ke" }],
  ["path", { d: "m16 19 2 2 4-4", key: "1b14m6" }]
], Z21 = e("user-round-check", W21);
const G21 = [
  ["path", { d: "m14.305 19.53.923-.382", key: "3m78fa" }],
  ["path", { d: "m15.228 16.852-.923-.383", key: "npixar" }],
  ["path", { d: "m16.852 15.228-.383-.923", key: "5xggr7" }],
  ["path", { d: "m16.852 20.772-.383.924", key: "dpfhf9" }],
  ["path", { d: "m19.148 15.228.383-.923", key: "1reyyz" }],
  ["path", { d: "m19.53 21.696-.382-.924", key: "1goivc" }],
  ["path", { d: "M2 21a8 8 0 0 1 10.434-7.62", key: "1yezr2" }],
  ["path", { d: "m20.772 16.852.924-.383", key: "htqkph" }],
  ["path", { d: "m20.772 19.148.924.383", key: "9w9pjp" }],
  ["circle", { cx: "10", cy: "8", r: "5", key: "o932ke" }],
  ["circle", { cx: "18", cy: "18", r: "3", key: "1xkwt0" }]
], X21 = e("user-round-cog", G21);
const Y21 = [
  ["path", { d: "M2 21a8 8 0 0 1 13.292-6", key: "bjp14o" }],
  ["circle", { cx: "10", cy: "8", r: "5", key: "o932ke" }],
  ["path", { d: "M22 19h-6", key: "vcuq98" }]
], K21 = e("user-round-minus", Y21);
const Q21 = [
  ["path", { d: "M2 21a8 8 0 0 1 10.821-7.487", key: "1c8h7z" }],
  [
    "path",
    {
      d: "M21.378 16.626a1 1 0 0 0-3.004-3.004l-4.01 4.012a2 2 0 0 0-.506.854l-.837 2.87a.5.5 0 0 0 .62.62l2.87-.837a2 2 0 0 0 .854-.506z",
      key: "1817ys"
    }
  ],
  ["circle", { cx: "10", cy: "8", r: "5", key: "o932ke" }]
], J21 = e("user-round-pen", Q21);
const et1 = [
  ["path", { d: "M2 21a8 8 0 0 1 13.292-6", key: "bjp14o" }],
  ["circle", { cx: "10", cy: "8", r: "5", key: "o932ke" }],
  ["path", { d: "M19 16v6", key: "tddt3s" }],
  ["path", { d: "M22 19h-6", key: "vcuq98" }]
], tt1 = e("user-round-plus", et1);
const at1 = [
  ["circle", { cx: "10", cy: "8", r: "5", key: "o932ke" }],
  ["path", { d: "M2 21a8 8 0 0 1 10.434-7.62", key: "1yezr2" }],
  ["circle", { cx: "18", cy: "18", r: "3", key: "1xkwt0" }],
  ["path", { d: "m22 22-1.9-1.9", key: "1e5ubv" }]
], ot1 = e("user-round-search", at1);
const nt1 = [
  ["path", { d: "M2 21a8 8 0 0 1 11.873-7", key: "74fkxq" }],
  ["circle", { cx: "10", cy: "8", r: "5", key: "o932ke" }],
  ["path", { d: "m17 17 5 5", key: "p7ous7" }],
  ["path", { d: "m22 17-5 5", key: "gqnmv0" }]
], ct1 = e("user-round-x", nt1);
const rt1 = [
  ["circle", { cx: "12", cy: "8", r: "5", key: "1hypcn" }],
  ["path", { d: "M20 21a8 8 0 0 0-16 0", key: "rfgkzh" }]
], ht1 = e("user-round", rt1);
const dt1 = [
  ["circle", { cx: "10", cy: "7", r: "4", key: "e45bow" }],
  ["path", { d: "M10.3 15H7a4 4 0 0 0-4 4v2", key: "3bnktk" }],
  ["circle", { cx: "17", cy: "17", r: "3", key: "18b49y" }],
  ["path", { d: "m21 21-1.9-1.9", key: "1g2n9r" }]
], it1 = e("user-search", dt1);
const st1 = [
  [
    "path",
    {
      d: "M16.051 12.616a1 1 0 0 1 1.909.024l.737 1.452a1 1 0 0 0 .737.535l1.634.256a1 1 0 0 1 .588 1.806l-1.172 1.168a1 1 0 0 0-.282.866l.259 1.613a1 1 0 0 1-1.541 1.134l-1.465-.75a1 1 0 0 0-.912 0l-1.465.75a1 1 0 0 1-1.539-1.133l.258-1.613a1 1 0 0 0-.282-.866l-1.156-1.153a1 1 0 0 1 .572-1.822l1.633-.256a1 1 0 0 0 .737-.535z",
      key: "1m8t9f"
    }
  ],
  ["path", { d: "M8 15H7a4 4 0 0 0-4 4v2", key: "l9tmp8" }],
  ["circle", { cx: "10", cy: "7", r: "4", key: "e45bow" }]
], yt1 = e("user-star", st1);
const pt1 = [
  ["path", { d: "M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2", key: "1yyitq" }],
  ["circle", { cx: "9", cy: "7", r: "4", key: "nufk8" }],
  ["line", { x1: "17", x2: "22", y1: "8", y2: "13", key: "3nzzx3" }],
  ["line", { x1: "22", x2: "17", y1: "8", y2: "13", key: "1swrse" }]
], kt1 = e("user-x", pt1);
const lt1 = [
  ["path", { d: "M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2", key: "975kel" }],
  ["circle", { cx: "12", cy: "7", r: "4", key: "17ys0d" }]
], ut1 = e("user", lt1);
const Mt1 = [
  ["path", { d: "M18 21a8 8 0 0 0-16 0", key: "3ypg7q" }],
  ["circle", { cx: "10", cy: "8", r: "5", key: "o932ke" }],
  ["path", { d: "M22 20c0-3.37-2-6.5-4-8a5 5 0 0 0-.45-8.3", key: "10s06x" }]
], ft1 = e("users-round", Mt1);
const mt1 = [
  ["path", { d: "m16 2-2.3 2.3a3 3 0 0 0 0 4.2l1.8 1.8a3 3 0 0 0 4.2 0L22 8", key: "n7qcjb" }],
  [
    "path",
    { d: "M15 15 3.3 3.3a4.2 4.2 0 0 0 0 6l7.3 7.3c.7.7 2 .7 2.8 0L15 15Zm0 0 7 7", key: "d0u48b" }
  ],
  ["path", { d: "m2.1 21.8 6.4-6.3", key: "yn04lh" }],
  ["path", { d: "m19 5-7 7", key: "194lzd" }]
], vt1 = e("utensils-crossed", mt1);
const gt1 = [
  ["path", { d: "M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2", key: "1yyitq" }],
  ["path", { d: "M16 3.128a4 4 0 0 1 0 7.744", key: "16gr8j" }],
  ["path", { d: "M22 21v-2a4 4 0 0 0-3-3.87", key: "kshegd" }],
  ["circle", { cx: "9", cy: "7", r: "4", key: "nufk8" }]
], _t1 = e("users", gt1);
const xt1 = [
  ["path", { d: "M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2", key: "cjf0a3" }],
  ["path", { d: "M7 2v20", key: "1473qp" }],
  ["path", { d: "M21 15V2a5 5 0 0 0-5 5v6c0 1.1.9 2 2 2h3Zm0 0v7", key: "j28e5" }]
], bt1 = e("utensils", xt1);
const wt1 = [
  ["path", { d: "M12 2v20", key: "t6zp3m" }],
  ["path", { d: "M2 5h20", key: "1fs1ex" }],
  ["path", { d: "M3 3v2", key: "9imdir" }],
  ["path", { d: "M7 3v2", key: "n0os7" }],
  ["path", { d: "M17 3v2", key: "1l2re6" }],
  ["path", { d: "M21 3v2", key: "1duuac" }],
  ["path", { d: "m19 5-7 7-7-7", key: "133zxf" }]
], Nt1 = e("utility-pole", wt1);
const $t1 = [
  [
    "path",
    {
      d: "M13 6v5a1 1 0 0 0 1 1h6.102a1 1 0 0 1 .712.298l.898.91a1 1 0 0 1 .288.702V17a1 1 0 0 1-1 1h-3",
      key: "k3s650"
    }
  ],
  [
    "path",
    { d: "M5 18H3a1 1 0 0 1-1-1V8a2 2 0 0 1 2-2h12c1.1 0 2.1.8 2.4 1.8l1.176 4.2", key: "fnd93u" }
  ],
  ["path", { d: "M9 18h5", key: "lrx6i" }],
  ["circle", { cx: "16", cy: "18", r: "2", key: "1v4tcr" }],
  ["circle", { cx: "7", cy: "18", r: "2", key: "19iecd" }]
], zt1 = e("van", $t1);
const jt1 = [
  ["path", { d: "M8 21s-4-3-4-9 4-9 4-9", key: "uto9ud" }],
  ["path", { d: "M16 3s4 3 4 9-4 9-4 9", key: "4w2vsq" }],
  ["line", { x1: "15", x2: "9", y1: "9", y2: "15", key: "f7djnv" }],
  ["line", { x1: "9", x2: "15", y1: "9", y2: "15", key: "1shsy8" }]
], qt1 = e("variable", jt1);
const At1 = [
  ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", key: "afitv7" }],
  ["circle", { cx: "7.5", cy: "7.5", r: ".5", fill: "currentColor", key: "kqv944" }],
  ["path", { d: "m7.9 7.9 2.7 2.7", key: "hpeyl3" }],
  ["circle", { cx: "16.5", cy: "7.5", r: ".5", fill: "currentColor", key: "w0ekpg" }],
  ["path", { d: "m13.4 10.6 2.7-2.7", key: "264c1n" }],
  ["circle", { cx: "7.5", cy: "16.5", r: ".5", fill: "currentColor", key: "nkw3mc" }],
  ["path", { d: "m7.9 16.1 2.7-2.7", key: "p81g5e" }],
  ["circle", { cx: "16.5", cy: "16.5", r: ".5", fill: "currentColor", key: "fubopw" }],
  ["path", { d: "m13.4 13.4 2.7 2.7", key: "abhel3" }],
  ["circle", { cx: "12", cy: "12", r: "2", key: "1c9p78" }]
], Ht1 = e("vault", At1);
const St1 = [
  ["path", { d: "M19.5 7a24 24 0 0 1 0 10", key: "8n60xe" }],
  ["path", { d: "M4.5 7a24 24 0 0 0 0 10", key: "2lmadr" }],
  ["path", { d: "M7 19.5a24 24 0 0 0 10 0", key: "1q94o2" }],
  ["path", { d: "M7 4.5a24 24 0 0 1 10 0", key: "2z8ypa" }],
  ["rect", { x: "17", y: "17", width: "5", height: "5", rx: "1", key: "1ac74s" }],
  ["rect", { x: "17", y: "2", width: "5", height: "5", rx: "1", key: "1e7h5j" }],
  ["rect", { x: "2", y: "17", width: "5", height: "5", rx: "1", key: "1t4eah" }],
  ["rect", { x: "2", y: "2", width: "5", height: "5", rx: "1", key: "940dhs" }]
], Ct1 = e("vector-square", St1);
const Vt1 = [
  ["path", { d: "M16 8q6 0 6-6-6 0-6 6", key: "qsyyc4" }],
  ["path", { d: "M17.41 3.59a10 10 0 1 0 3 3", key: "41m9h7" }],
  ["path", { d: "M2 2a26.6 26.6 0 0 1 10 20c.9-6.82 1.5-9.5 4-14", key: "qiv7li" }]
], Rt1 = e("vegan", Vt1);
const Et1 = [
  ["path", { d: "M18 11c-1.5 0-2.5.5-3 2", key: "1fod00" }],
  [
    "path",
    {
      d: "M4 6a2 2 0 0 0-2 2v4a5 5 0 0 0 5 5 8 8 0 0 1 5 2 8 8 0 0 1 5-2 5 5 0 0 0 5-5V8a2 2 0 0 0-2-2h-3a8 8 0 0 0-5 2 8 8 0 0 0-5-2z",
      key: "d70hit"
    }
  ],
  ["path", { d: "M6 11c1.5 0 2.5.5 3 2", key: "136fht" }]
], Lt1 = e("venetian-mask", Et1);
const Pt1 = [
  ["path", { d: "M10 20h4", key: "ni2waw" }],
  ["path", { d: "M12 16v6", key: "c8a4gj" }],
  ["path", { d: "M17 2h4v4", key: "vhe59" }],
  ["path", { d: "m21 2-5.46 5.46", key: "19kypf" }],
  ["circle", { cx: "12", cy: "11", r: "5", key: "16gxyc" }]
], Tt1 = e("venus-and-mars", Pt1);
const Ot1 = [
  ["path", { d: "M12 15v7", key: "t2xh3l" }],
  ["path", { d: "M9 19h6", key: "456am0" }],
  ["circle", { cx: "12", cy: "9", r: "6", key: "1nw4tq" }]
], Dt1 = e("venus", Ot1);
const It1 = [
  ["path", { d: "m2 8 2 2-2 2 2 2-2 2", key: "sv1b1" }],
  ["path", { d: "m22 8-2 2 2 2-2 2 2 2", key: "101i4y" }],
  ["path", { d: "M8 8v10c0 .55.45 1 1 1h6c.55 0 1-.45 1-1v-2", key: "1hbad5" }],
  ["path", { d: "M16 10.34V6c0-.55-.45-1-1-1h-4.34", key: "1x5tf0" }],
  ["line", { x1: "2", x2: "22", y1: "2", y2: "22", key: "a6p6uj" }]
], Ft1 = e("vibrate-off", It1);
const Bt1 = [
  ["path", { d: "m2 8 2 2-2 2 2 2-2 2", key: "sv1b1" }],
  ["path", { d: "m22 8-2 2 2 2-2 2 2 2", key: "101i4y" }],
  ["rect", { width: "8", height: "14", x: "8", y: "5", rx: "1", key: "1oyrl4" }]
], Ut1 = e("vibrate", Bt1);
const Wt1 = [
  [
    "path",
    { d: "M10.66 6H14a2 2 0 0 1 2 2v2.5l5.248-3.062A.5.5 0 0 1 22 7.87v8.196", key: "w8jjjt" }
  ],
  ["path", { d: "M16 16a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h2", key: "1xawa7" }],
  ["path", { d: "m2 2 20 20", key: "1ooewy" }]
], Zt1 = e("video-off", Wt1);
const Gt1 = [
  ["rect", { width: "20", height: "16", x: "2", y: "4", rx: "2", key: "18n3k1" }],
  ["path", { d: "M2 8h20", key: "d11cs7" }],
  ["circle", { cx: "8", cy: "14", r: "2", key: "1k2qr5" }],
  ["path", { d: "M8 12h8", key: "1wcyev" }],
  ["circle", { cx: "16", cy: "14", r: "2", key: "14k7lr" }]
], Xt1 = e("videotape", Gt1);
const Yt1 = [
  [
    "path",
    {
      d: "m16 13 5.223 3.482a.5.5 0 0 0 .777-.416V7.87a.5.5 0 0 0-.752-.432L16 10.5",
      key: "ftymec"
    }
  ],
  ["rect", { x: "2", y: "6", width: "14", height: "12", rx: "2", key: "158x01" }]
], Kt1 = e("video", Yt1);
const Qt1 = [
  ["path", { d: "M21 17v2a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-2", key: "mrq65r" }],
  ["path", { d: "M21 7V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v2", key: "be3xqs" }],
  ["circle", { cx: "12", cy: "12", r: "1", key: "41hilf" }],
  [
    "path",
    {
      d: "M18.944 12.33a1 1 0 0 0 0-.66 7.5 7.5 0 0 0-13.888 0 1 1 0 0 0 0 .66 7.5 7.5 0 0 0 13.888 0",
      key: "11ak4c"
    }
  ]
], Jt1 = e("view", Qt1);
const e01 = [
  ["circle", { cx: "6", cy: "12", r: "4", key: "1ehtga" }],
  ["circle", { cx: "18", cy: "12", r: "4", key: "4vafl8" }],
  ["line", { x1: "6", x2: "18", y1: "16", y2: "16", key: "pmt8us" }]
], t01 = e("voicemail", e01);
const a01 = [
  ["path", { d: "M11.1 7.1a16.55 16.55 0 0 1 10.9 4", key: "2880wi" }],
  ["path", { d: "M12 12a12.6 12.6 0 0 1-8.7 5", key: "113sja" }],
  ["path", { d: "M16.8 13.6a16.55 16.55 0 0 1-9 7.5", key: "1qmsgl" }],
  ["path", { d: "M20.7 17a12.8 12.8 0 0 0-8.7-5 13.3 13.3 0 0 1 0-10", key: "1bmeqp" }],
  ["path", { d: "M6.3 3.8a16.55 16.55 0 0 0 1.9 11.5", key: "iekzv9" }],
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }]
], o01 = e("volleyball", a01);
const n01 = [
  [
    "path",
    {
      d: "M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z",
      key: "uqj9uw"
    }
  ],
  ["path", { d: "M16 9a5 5 0 0 1 0 6", key: "1q6k2b" }]
], c01 = e("volume-1", n01);
const r01 = [
  [
    "path",
    {
      d: "M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z",
      key: "uqj9uw"
    }
  ],
  ["path", { d: "M16 9a5 5 0 0 1 0 6", key: "1q6k2b" }],
  ["path", { d: "M19.364 18.364a9 9 0 0 0 0-12.728", key: "ijwkga" }]
], h01 = e("volume-2", r01);
const d01 = [
  ["path", { d: "M16 9a5 5 0 0 1 .95 2.293", key: "1fgyg8" }],
  ["path", { d: "M19.364 5.636a9 9 0 0 1 1.889 9.96", key: "l3zxae" }],
  ["path", { d: "m2 2 20 20", key: "1ooewy" }],
  [
    "path",
    {
      d: "m7 7-.587.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298V11",
      key: "1gbwow"
    }
  ],
  ["path", { d: "M9.828 4.172A.686.686 0 0 1 11 4.657v.686", key: "s2je0y" }]
], i01 = e("volume-off", d01);
const s01 = [
  [
    "path",
    {
      d: "M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z",
      key: "uqj9uw"
    }
  ],
  ["line", { x1: "22", x2: "16", y1: "9", y2: "15", key: "1ewh16" }],
  ["line", { x1: "16", x2: "22", y1: "9", y2: "15", key: "5ykzw1" }]
], y01 = e("volume-x", s01);
const p01 = [
  [
    "path",
    {
      d: "M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z",
      key: "uqj9uw"
    }
  ]
], k01 = e("volume", p01);
const l01 = [
  ["path", { d: "m9 12 2 2 4-4", key: "dzmm74" }],
  ["path", { d: "M5 7c0-1.1.9-2 2-2h10a2 2 0 0 1 2 2v12H5V7Z", key: "1ezoue" }],
  ["path", { d: "M22 19H2", key: "nuriw5" }]
], u01 = e("vote", l01);
const M01 = [
  ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", key: "afitv7" }],
  ["path", { d: "M3 9a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2", key: "4125el" }],
  [
    "path",
    {
      d: "M3 11h3c.8 0 1.6.3 2.1.9l1.1.9c1.6 1.6 4.1 1.6 5.7 0l1.1-.9c.5-.5 1.3-.9 2.1-.9H21",
      key: "1dpki6"
    }
  ]
], f01 = e("wallet-cards", M01);
const m01 = [
  ["path", { d: "M17 14h.01", key: "7oqj8z" }],
  [
    "path",
    {
      d: "M7 7h12a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14",
      key: "u1rqew"
    }
  ]
], v01 = e("wallet-minimal", m01);
const g01 = [
  [
    "path",
    {
      d: "M19 7V4a1 1 0 0 0-1-1H5a2 2 0 0 0 0 4h15a1 1 0 0 1 1 1v4h-3a2 2 0 0 0 0 4h3a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1",
      key: "18etb6"
    }
  ],
  ["path", { d: "M3 5v14a2 2 0 0 0 2 2h15a1 1 0 0 0 1-1v-4", key: "xoc0q4" }]
], _01 = e("wallet", g01);
const x01 = [
  ["path", { d: "M12 17v4", key: "1riwvh" }],
  ["path", { d: "M8 21h8", key: "1ev6f3" }],
  ["path", { d: "m9 17 6.1-6.1a2 2 0 0 1 2.81.01L22 15", key: "1sl52q" }],
  ["circle", { cx: "8", cy: "9", r: "2", key: "gjzl9d" }],
  ["rect", { x: "2", y: "3", width: "20", height: "14", rx: "2", key: "x3v2xh" }]
], b01 = e("wallpaper", x01);
const w01 = [
  [
    "path",
    {
      d: "m21.64 3.64-1.28-1.28a1.21 1.21 0 0 0-1.72 0L2.36 18.64a1.21 1.21 0 0 0 0 1.72l1.28 1.28a1.2 1.2 0 0 0 1.72 0L21.64 5.36a1.2 1.2 0 0 0 0-1.72",
      key: "ul74o6"
    }
  ],
  ["path", { d: "m14 7 3 3", key: "1r5n42" }],
  ["path", { d: "M5 6v4", key: "ilb8ba" }],
  ["path", { d: "M19 14v4", key: "blhpug" }],
  ["path", { d: "M10 2v2", key: "7u0qdc" }],
  ["path", { d: "M7 8H3", key: "zfb6yr" }],
  ["path", { d: "M21 16h-4", key: "1cnmox" }],
  ["path", { d: "M11 3H9", key: "1obp7u" }]
], N01 = e("wand-sparkles", w01);
const $01 = [
  ["path", { d: "M15 4V2", key: "z1p9b7" }],
  ["path", { d: "M15 16v-2", key: "px0unx" }],
  ["path", { d: "M8 9h2", key: "1g203m" }],
  ["path", { d: "M20 9h2", key: "19tzq7" }],
  ["path", { d: "M17.8 11.8 19 13", key: "yihg8r" }],
  ["path", { d: "M15 9h.01", key: "x1ddxp" }],
  ["path", { d: "M17.8 6.2 19 5", key: "fd4us0" }],
  ["path", { d: "m3 21 9-9", key: "1jfql5" }],
  ["path", { d: "M12.2 6.2 11 5", key: "i3da3b" }]
], z01 = e("wand", $01);
const j01 = [
  ["path", { d: "M18 21V10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1v11", key: "pb2vm6" }],
  [
    "path",
    {
      d: "M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V8a2 2 0 0 1 1.132-1.803l7.95-3.974a2 2 0 0 1 1.837 0l7.948 3.974A2 2 0 0 1 22 8z",
      key: "doq5xv"
    }
  ],
  ["path", { d: "M6 13h12", key: "yf64js" }],
  ["path", { d: "M6 17h12", key: "1jwigz" }]
], q01 = e("warehouse", j01);
const A01 = [
  ["path", { d: "M3 6h3", key: "155dbl" }],
  ["path", { d: "M17 6h.01", key: "e2y6kg" }],
  ["rect", { width: "18", height: "20", x: "3", y: "2", rx: "2", key: "od3kk9" }],
  ["circle", { cx: "12", cy: "13", r: "5", key: "nlbqau" }],
  ["path", { d: "M12 18a2.5 2.5 0 0 0 0-5 2.5 2.5 0 0 1 0-5", key: "17lach" }]
], H01 = e("washing-machine", A01);
const S01 = [
  ["path", { d: "M12 10L12 2", key: "jvb0aw" }],
  ["path", { d: "M16 6L12 10L8 6", key: "9j6vje" }],
  [
    "path",
    {
      d: "M2 15C2.6 15.5 3.2 16 4.5 16C7 16 7 14 9.5 14C12.1 14 11.9 16 14.5 16C17 16 17 14 19.5 14C20.8 14 21.4 14.5 22 15",
      key: "s2zepw"
    }
  ],
  [
    "path",
    {
      d: "M2 21C2.6 21.5 3.2 22 4.5 22C7 22 7 20 9.5 20C12.1 20 11.9 22 14.5 22C17 22 17 20 19.5 20C20.8 20 21.4 20.5 22 21",
      key: "u68omc"
    }
  ]
], C01 = e("waves-arrow-down", S01);
const V01 = [
  ["path", { d: "M12 10v2.2l1.6 1", key: "n3r21l" }],
  [
    "path",
    { d: "m16.13 7.66-.81-4.05a2 2 0 0 0-2-1.61h-2.68a2 2 0 0 0-2 1.61l-.78 4.05", key: "18k57s" }
  ],
  ["path", { d: "m7.88 16.36.8 4a2 2 0 0 0 2 1.61h2.72a2 2 0 0 0 2-1.61l.81-4.05", key: "16ny36" }],
  ["circle", { cx: "12", cy: "12", r: "6", key: "1vlfrh" }]
], R01 = e("watch", V01);
const E01 = [
  ["path", { d: "M12 2v8", key: "1q4o3n" }],
  [
    "path",
    {
      d: "M2 15c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1",
      key: "1p9f19"
    }
  ],
  [
    "path",
    {
      d: "M2 21c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1",
      key: "vbxynw"
    }
  ],
  ["path", { d: "m8 6 4-4 4 4", key: "ybng9g" }]
], L01 = e("waves-arrow-up", E01);
const P01 = [
  ["path", { d: "M19 5a2 2 0 0 0-2 2v11", key: "s41o68" }],
  [
    "path",
    {
      d: "M2 18c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1",
      key: "rd2r6e"
    }
  ],
  ["path", { d: "M7 13h10", key: "1rwob1" }],
  ["path", { d: "M7 9h10", key: "12czzb" }],
  ["path", { d: "M9 5a2 2 0 0 0-2 2v11", key: "x0q4gh" }]
], T01 = e("waves-ladder", P01);
const O01 = [
  [
    "path",
    {
      d: "M2 6c.6.5 1.2 1 2.5 1C7 7 7 5 9.5 5c2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1",
      key: "knzxuh"
    }
  ],
  [
    "path",
    {
      d: "M2 12c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1",
      key: "2jd2cc"
    }
  ],
  [
    "path",
    {
      d: "M2 18c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1",
      key: "rd2r6e"
    }
  ]
], D01 = e("waves", O01);
const I01 = [
  ["path", { d: "m10.586 5.414-5.172 5.172", key: "4mc350" }],
  ["path", { d: "m18.586 13.414-5.172 5.172", key: "8c96vv" }],
  ["path", { d: "M6 12h12", key: "8npq4p" }],
  ["circle", { cx: "12", cy: "20", r: "2", key: "144qzu" }],
  ["circle", { cx: "12", cy: "4", r: "2", key: "muu5ef" }],
  ["circle", { cx: "20", cy: "12", r: "2", key: "1xzzfp" }],
  ["circle", { cx: "4", cy: "12", r: "2", key: "1hvhnz" }]
], F01 = e("waypoints", I01);
const B01 = [
  ["circle", { cx: "12", cy: "10", r: "8", key: "1gshiw" }],
  ["circle", { cx: "12", cy: "10", r: "3", key: "ilqhr7" }],
  ["path", { d: "M7 22h10", key: "10w4w3" }],
  ["path", { d: "M12 22v-4", key: "1utk9m" }]
], U01 = e("webcam", B01);
const W01 = [
  ["path", { d: "M17 17h-5c-1.09-.02-1.94.92-2.5 1.9A3 3 0 1 1 2.57 15", key: "1tvl6x" }],
  ["path", { d: "M9 3.4a4 4 0 0 1 6.52.66", key: "q04jfq" }],
  ["path", { d: "m6 17 3.1-5.8a2.5 2.5 0 0 0 .057-2.05", key: "azowf0" }],
  ["path", { d: "M20.3 20.3a4 4 0 0 1-2.3.7", key: "5joiws" }],
  ["path", { d: "M18.6 13a4 4 0 0 1 3.357 3.414", key: "cangb8" }],
  ["path", { d: "m12 6 .6 1", key: "tpjl1n" }],
  ["path", { d: "m2 2 20 20", key: "1ooewy" }]
], Z01 = e("webhook-off", W01);
const G01 = [
  [
    "path",
    {
      d: "M18 16.98h-5.99c-1.1 0-1.95.94-2.48 1.9A4 4 0 0 1 2 17c.01-.7.2-1.4.57-2",
      key: "q3hayz"
    }
  ],
  ["path", { d: "m6 17 3.13-5.78c.53-.97.1-2.18-.5-3.1a4 4 0 1 1 6.89-4.06", key: "1go1hn" }],
  ["path", { d: "m12 6 3.13 5.73C15.66 12.7 16.9 13 18 13a4 4 0 0 1 0 8", key: "qlwsc0" }]
], X01 = e("webhook", G01);
const Y01 = [
  [
    "path",
    {
      d: "M6.5 8a2 2 0 0 0-1.906 1.46L2.1 18.5A2 2 0 0 0 4 21h16a2 2 0 0 0 1.925-2.54L19.4 9.5A2 2 0 0 0 17.48 8z",
      key: "1wl739"
    }
  ],
  ["path", { d: "M7.999 15a2.5 2.5 0 0 1 4 0 2.5 2.5 0 0 0 4 0", key: "1egezo" }],
  ["circle", { cx: "12", cy: "5", r: "3", key: "rqqgnr" }]
], K01 = e("weight-tilde", Y01);
const Q01 = [
  ["circle", { cx: "12", cy: "5", r: "3", key: "rqqgnr" }],
  [
    "path",
    {
      d: "M6.5 8a2 2 0 0 0-1.905 1.46L2.1 18.5A2 2 0 0 0 4 21h16a2 2 0 0 0 1.925-2.54L19.4 9.5A2 2 0 0 0 17.48 8Z",
      key: "56o5sh"
    }
  ]
], J01 = e("weight", Q01);
const ea1 = [
  ["path", { d: "m2 22 10-10", key: "28ilpk" }],
  ["path", { d: "m16 8-1.17 1.17", key: "1qqm82" }],
  [
    "path",
    {
      d: "M3.47 12.53 5 11l1.53 1.53a3.5 3.5 0 0 1 0 4.94L5 19l-1.53-1.53a3.5 3.5 0 0 1 0-4.94Z",
      key: "1rdhi6"
    }
  ],
  [
    "path",
    { d: "m8 8-.53.53a3.5 3.5 0 0 0 0 4.94L9 15l1.53-1.53c.55-.55.88-1.25.98-1.97", key: "4wz8re" }
  ],
  [
    "path",
    { d: "M10.91 5.26c.15-.26.34-.51.56-.73L13 3l1.53 1.53a3.5 3.5 0 0 1 .28 4.62", key: "rves66" }
  ],
  ["path", { d: "M20 2h2v2a4 4 0 0 1-4 4h-2V6a4 4 0 0 1 4-4Z", key: "19rau1" }],
  [
    "path",
    {
      d: "M11.47 17.47 13 19l-1.53 1.53a3.5 3.5 0 0 1-4.94 0L5 19l1.53-1.53a3.5 3.5 0 0 1 4.94 0Z",
      key: "tc8ph9"
    }
  ],
  [
    "path",
    {
      d: "m16 16-.53.53a3.5 3.5 0 0 1-4.94 0L9 15l1.53-1.53a3.49 3.49 0 0 1 1.97-.98",
      key: "ak46r"
    }
  ],
  [
    "path",
    {
      d: "M18.74 13.09c.26-.15.51-.34.73-.56L21 11l-1.53-1.53a3.5 3.5 0 0 0-4.62-.28",
      key: "1tw520"
    }
  ],
  ["line", { x1: "2", x2: "22", y1: "2", y2: "22", key: "a6p6uj" }]
], ta1 = e("wheat-off", ea1);
const aa1 = [
  ["path", { d: "M2 22 16 8", key: "60hf96" }],
  [
    "path",
    {
      d: "M3.47 12.53 5 11l1.53 1.53a3.5 3.5 0 0 1 0 4.94L5 19l-1.53-1.53a3.5 3.5 0 0 1 0-4.94Z",
      key: "1rdhi6"
    }
  ],
  [
    "path",
    {
      d: "M7.47 8.53 9 7l1.53 1.53a3.5 3.5 0 0 1 0 4.94L9 15l-1.53-1.53a3.5 3.5 0 0 1 0-4.94Z",
      key: "1sdzmb"
    }
  ],
  [
    "path",
    {
      d: "M11.47 4.53 13 3l1.53 1.53a3.5 3.5 0 0 1 0 4.94L13 11l-1.53-1.53a3.5 3.5 0 0 1 0-4.94Z",
      key: "eoatbi"
    }
  ],
  ["path", { d: "M20 2h2v2a4 4 0 0 1-4 4h-2V6a4 4 0 0 1 4-4Z", key: "19rau1" }],
  [
    "path",
    {
      d: "M11.47 17.47 13 19l-1.53 1.53a3.5 3.5 0 0 1-4.94 0L5 19l1.53-1.53a3.5 3.5 0 0 1 4.94 0Z",
      key: "tc8ph9"
    }
  ],
  [
    "path",
    {
      d: "M15.47 13.47 17 15l-1.53 1.53a3.5 3.5 0 0 1-4.94 0L9 15l1.53-1.53a3.5 3.5 0 0 1 4.94 0Z",
      key: "2m8kc5"
    }
  ],
  [
    "path",
    {
      d: "M19.47 9.47 21 11l-1.53 1.53a3.5 3.5 0 0 1-4.94 0L13 11l1.53-1.53a3.5 3.5 0 0 1 4.94 0Z",
      key: "vex3ng"
    }
  ]
], oa1 = e("wheat", aa1);
const na1 = [
  ["circle", { cx: "7", cy: "12", r: "3", key: "12clwm" }],
  ["path", { d: "M10 9v6", key: "17i7lo" }],
  ["circle", { cx: "17", cy: "12", r: "3", key: "gl7c2s" }],
  ["path", { d: "M14 7v8", key: "dl84cr" }],
  ["path", { d: "M22 17v1c0 .5-.5 1-1 1H3c-.5 0-1-.5-1-1v-1", key: "lt2kga" }]
], ca1 = e("whole-word", na1);
const ra1 = [
  ["path", { d: "m14.305 19.53.923-.382", key: "3m78fa" }],
  ["path", { d: "m15.228 16.852-.923-.383", key: "npixar" }],
  ["path", { d: "m16.852 15.228-.383-.923", key: "5xggr7" }],
  ["path", { d: "m16.852 20.772-.383.924", key: "dpfhf9" }],
  ["path", { d: "m19.148 15.228.383-.923", key: "1reyyz" }],
  ["path", { d: "m19.53 21.696-.382-.924", key: "1goivc" }],
  ["path", { d: "M2 7.82a15 15 0 0 1 20 0", key: "1ovjuk" }],
  ["path", { d: "m20.772 16.852.924-.383", key: "htqkph" }],
  ["path", { d: "m20.772 19.148.924.383", key: "9w9pjp" }],
  ["path", { d: "M5 11.858a10 10 0 0 1 11.5-1.785", key: "3sn16i" }],
  ["path", { d: "M8.5 15.429a5 5 0 0 1 2.413-1.31", key: "1pxovh" }],
  ["circle", { cx: "18", cy: "18", r: "3", key: "1xkwt0" }]
], ha1 = e("wifi-cog", ra1);
const da1 = [
  ["path", { d: "M12 20h.01", key: "zekei9" }],
  ["path", { d: "M5 12.859a10 10 0 0 1 14 0", key: "1x1e6c" }],
  ["path", { d: "M8.5 16.429a5 5 0 0 1 7 0", key: "1bycff" }]
], ia1 = e("wifi-high", da1);
const sa1 = [
  ["path", { d: "M12 20h.01", key: "zekei9" }],
  ["path", { d: "M8.5 16.429a5 5 0 0 1 7 0", key: "1bycff" }]
], ya1 = e("wifi-low", sa1);
const pa1 = [
  ["path", { d: "M12 20h.01", key: "zekei9" }],
  ["path", { d: "M8.5 16.429a5 5 0 0 1 7 0", key: "1bycff" }],
  ["path", { d: "M5 12.859a10 10 0 0 1 5.17-2.69", key: "1dl1wf" }],
  ["path", { d: "M19 12.859a10 10 0 0 0-2.007-1.523", key: "4k23kn" }],
  ["path", { d: "M2 8.82a15 15 0 0 1 4.177-2.643", key: "1grhjp" }],
  ["path", { d: "M22 8.82a15 15 0 0 0-11.288-3.764", key: "z3jwby" }],
  ["path", { d: "m2 2 20 20", key: "1ooewy" }]
], ka1 = e("wifi-off", pa1);
const la1 = [
  ["path", { d: "M2 8.82a15 15 0 0 1 20 0", key: "dnpr2z" }],
  [
    "path",
    {
      d: "M21.378 16.626a1 1 0 0 0-3.004-3.004l-4.01 4.012a2 2 0 0 0-.506.854l-.837 2.87a.5.5 0 0 0 .62.62l2.87-.837a2 2 0 0 0 .854-.506z",
      key: "1817ys"
    }
  ],
  ["path", { d: "M5 12.859a10 10 0 0 1 10.5-2.222", key: "rpb7oy" }],
  ["path", { d: "M8.5 16.429a5 5 0 0 1 3-1.406", key: "r8bmzl" }]
], ua1 = e("wifi-pen", la1);
const Ma1 = [
  ["path", { d: "M11.965 10.105v4L13.5 12.5a5 5 0 0 1 8 1.5", key: "1immaq" }],
  ["path", { d: "M11.965 14.105h4", key: "uejny8" }],
  ["path", { d: "M17.965 18.105h4L20.43 19.71a5 5 0 0 1-8-1.5", key: "1i3a7e" }],
  ["path", { d: "M2 8.82a15 15 0 0 1 20 0", key: "dnpr2z" }],
  ["path", { d: "M21.965 22.105v-4", key: "1ku6vx" }],
  ["path", { d: "M5 12.86a10 10 0 0 1 3-2.032", key: "pemdtu" }],
  ["path", { d: "M8.5 16.429h.01", key: "2bm739" }]
], fa1 = e("wifi-sync", Ma1);
const ma1 = [["path", { d: "M12 20h.01", key: "zekei9" }]], va1 = e("wifi-zero", ma1);
const ga1 = [
  ["path", { d: "M12 20h.01", key: "zekei9" }],
  ["path", { d: "M2 8.82a15 15 0 0 1 20 0", key: "dnpr2z" }],
  ["path", { d: "M5 12.859a10 10 0 0 1 14 0", key: "1x1e6c" }],
  ["path", { d: "M8.5 16.429a5 5 0 0 1 7 0", key: "1bycff" }]
], _a1 = e("wifi", ga1);
const xa1 = [
  ["path", { d: "M10 2v8", key: "d4bbey" }],
  ["path", { d: "M12.8 21.6A2 2 0 1 0 14 18H2", key: "19kp1d" }],
  ["path", { d: "M17.5 10a2.5 2.5 0 1 1 2 4H2", key: "19kpjc" }],
  ["path", { d: "m6 6 4 4 4-4", key: "k13n16" }]
], ba1 = e("wind-arrow-down", xa1);
const wa1 = [
  ["path", { d: "M12.8 19.6A2 2 0 1 0 14 16H2", key: "148xed" }],
  ["path", { d: "M17.5 8a2.5 2.5 0 1 1 2 4H2", key: "1u4tom" }],
  ["path", { d: "M9.8 4.4A2 2 0 1 1 11 8H2", key: "75valh" }]
], Na1 = e("wind", wa1);
const $a1 = [
  ["path", { d: "M8 22h8", key: "rmew8v" }],
  ["path", { d: "M7 10h3m7 0h-1.343", key: "v48bem" }],
  ["path", { d: "M12 15v7", key: "t2xh3l" }],
  [
    "path",
    {
      d: "M7.307 7.307A12.33 12.33 0 0 0 7 10a5 5 0 0 0 7.391 4.391M8.638 2.981C8.75 2.668 8.872 2.34 9 2h6c1.5 4 2 6 2 8 0 .407-.05.809-.145 1.198",
      key: "1ymjlu"
    }
  ],
  ["line", { x1: "2", x2: "22", y1: "2", y2: "22", key: "a6p6uj" }]
], za1 = e("wine-off", $a1);
const ja1 = [
  ["path", { d: "M8 22h8", key: "rmew8v" }],
  ["path", { d: "M7 10h10", key: "1101jm" }],
  ["path", { d: "M12 15v7", key: "t2xh3l" }],
  [
    "path",
    { d: "M12 15a5 5 0 0 0 5-5c0-2-.5-4-2-8H9c-1.5 4-2 6-2 8a5 5 0 0 0 5 5Z", key: "10ffi3" }
  ]
], qa1 = e("wine", ja1);
const Aa1 = [
  ["rect", { width: "8", height: "8", x: "3", y: "3", rx: "2", key: "by2w9f" }],
  ["path", { d: "M7 11v4a2 2 0 0 0 2 2h4", key: "xkn7yn" }],
  ["rect", { width: "8", height: "8", x: "13", y: "13", rx: "2", key: "1cgmvn" }]
], Ha1 = e("workflow", Aa1);
const Sa1 = [
  ["path", { d: "m19 12-1.5 3", key: "9bcu4o" }],
  ["path", { d: "M19.63 18.81 22 20", key: "121v98" }],
  [
    "path",
    {
      d: "M6.47 8.23a1.68 1.68 0 0 1 2.44 1.93l-.64 2.08a6.76 6.76 0 0 0 10.16 7.67l.42-.27a1 1 0 1 0-2.73-4.21l-.42.27a1.76 1.76 0 0 1-2.63-1.99l.64-2.08A6.66 6.66 0 0 0 3.94 3.9l-.7.4a1 1 0 1 0 2.55 4.34z",
      key: "1tij6q"
    }
  ]
], Ca1 = e("worm", Sa1);
const Va1 = [
  [
    "path",
    {
      d: "M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.106-3.105c.32-.322.863-.22.983.218a6 6 0 0 1-8.259 7.057l-7.91 7.91a1 1 0 0 1-2.999-3l7.91-7.91a6 6 0 0 1 7.057-8.259c.438.12.54.662.219.984z",
      key: "1ngwbx"
    }
  ]
], Ra1 = e("wrench", Va1);
const Ea1 = [
  ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
  ["path", { d: "m6 6 12 12", key: "d8bk6v" }]
], La1 = e("x", Ea1);
const Pa1 = [
  ["path", { d: "M10.513 4.856 13.12 2.17a.5.5 0 0 1 .86.46l-1.377 4.317", key: "193nxd" }],
  ["path", { d: "M15.656 10H20a1 1 0 0 1 .78 1.63l-1.72 1.773", key: "27a7lr" }],
  [
    "path",
    {
      d: "M16.273 16.273 10.88 21.83a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14H4a1 1 0 0 1-.78-1.63l4.507-4.643",
      key: "1e0qe9"
    }
  ],
  ["path", { d: "m2 2 20 20", key: "1ooewy" }]
], Ta1 = e("zap-off", Pa1);
const Oa1 = [
  [
    "path",
    {
      d: "M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17",
      key: "1q2vi4"
    }
  ],
  ["path", { d: "m10 15 5-3-5-3z", key: "1jp15x" }]
], Da1 = e("youtube", Oa1);
const Ia1 = [
  [
    "path",
    {
      d: "M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z",
      key: "1xq2db"
    }
  ]
], Fa1 = e("zap", Ia1);
const Ba1 = [
  ["circle", { cx: "11", cy: "11", r: "8", key: "4ej97u" }],
  ["line", { x1: "21", x2: "16.65", y1: "21", y2: "16.65", key: "13gj7c" }],
  ["line", { x1: "11", x2: "11", y1: "8", y2: "14", key: "1vmskp" }],
  ["line", { x1: "8", x2: "14", y1: "11", y2: "11", key: "durymu" }]
], Ua1 = e("zoom-in", Ba1);
const Wa1 = [
  ["circle", { cx: "11", cy: "11", r: "8", key: "4ej97u" }],
  ["line", { x1: "21", x2: "16.65", y1: "21", y2: "16.65", key: "13gj7c" }],
  ["line", { x1: "8", x2: "14", y1: "11", y2: "11", key: "durymu" }]
], Za1 = e("zoom-out", Wa1);
const Ga1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  AArrowDown: rc,
  AArrowUp: dc,
  ALargeSmall: sc,
  Accessibility: pc,
  Activity: lc,
  AirVent: Mc,
  Airplay: mc,
  AlarmClock: jc,
  AlarmClockCheck: gc,
  AlarmClockMinus: xc,
  AlarmClockOff: wc,
  AlarmClockPlus: $c,
  AlarmSmoke: Ac,
  Album: Sc,
  AlignCenterHorizontal: Vc,
  AlignCenterVertical: Ec,
  AlignEndHorizontal: Pc,
  AlignEndVertical: Oc,
  AlignHorizontalDistributeCenter: Ic,
  AlignHorizontalDistributeEnd: Bc,
  AlignHorizontalDistributeStart: Wc,
  AlignHorizontalJustifyCenter: Gc,
  AlignHorizontalJustifyEnd: Yc,
  AlignHorizontalJustifyStart: Qc,
  AlignHorizontalSpaceAround: er,
  AlignHorizontalSpaceBetween: ar,
  AlignStartHorizontal: nr,
  AlignStartVertical: rr,
  AlignVerticalDistributeCenter: dr,
  AlignVerticalDistributeEnd: sr,
  AlignVerticalDistributeStart: pr,
  AlignVerticalJustifyCenter: Mr,
  AlignVerticalJustifyEnd: lr,
  AlignVerticalJustifyStart: mr,
  AlignVerticalSpaceAround: gr,
  AlignVerticalSpaceBetween: xr,
  Ambulance: wr,
  Ampersand: $r,
  Ampersands: jr,
  Amphora: Ar,
  Anchor: Vr,
  Angry: Sr,
  Annoyed: Er,
  Antenna: Pr,
  Anvil: Or,
  Aperture: Ir,
  AppWindow: Wr,
  AppWindowMac: Br,
  Apple: Gr,
  Archive: eh,
  ArchiveRestore: Yr,
  ArchiveX: Qr,
  Armchair: ah,
  ArrowBigDown: rh,
  ArrowBigDownDash: nh,
  ArrowBigLeft: sh,
  ArrowBigLeftDash: dh,
  ArrowBigRight: lh,
  ArrowBigRightDash: ph,
  ArrowBigUp: mh,
  ArrowBigUpDash: Mh,
  ArrowDown: Bh,
  ArrowDown01: gh,
  ArrowDown10: xh,
  ArrowDownAZ: wh,
  ArrowDownFromLine: $h,
  ArrowDownLeft: jh,
  ArrowDownNarrowWide: Ah,
  ArrowDownRight: Sh,
  ArrowDownToDot: Vh,
  ArrowDownToLine: Eh,
  ArrowDownUp: Ph,
  ArrowDownWideNarrow: Oh,
  ArrowDownZA: Ih,
  ArrowLeft: Qh,
  ArrowLeftFromLine: Wh,
  ArrowLeftRight: Gh,
  ArrowLeftToLine: Yh,
  ArrowRight: nd,
  ArrowRightFromLine: ed,
  ArrowRightLeft: ad,
  ArrowRightToLine: rd,
  ArrowUp: Sd,
  ArrowUp01: dd,
  ArrowUp10: sd,
  ArrowUpAZ: pd,
  ArrowUpDown: ld,
  ArrowUpFromDot: Md,
  ArrowUpFromLine: md,
  ArrowUpLeft: gd,
  ArrowUpNarrowWide: xd,
  ArrowUpRight: wd,
  ArrowUpToLine: $d,
  ArrowUpWideNarrow: jd,
  ArrowUpZA: Ad,
  ArrowsUpFromLine: Vd,
  Asterisk: Ed,
  AtSign: Pd,
  Atom: Od,
  AudioLines: Id,
  AudioWaveform: Bd,
  Award: Wd,
  Axe: Gd,
  Axis3d: Yd,
  Baby: ei,
  Backpack: Qd,
  Badge: Pi,
  BadgeAlert: ai,
  BadgeCent: ni,
  BadgeCheck: ri,
  BadgeDollarSign: di,
  BadgeEuro: si,
  BadgeIndianRupee: pi,
  BadgeInfo: li,
  BadgeJapaneseYen: Mi,
  BadgeMinus: mi,
  BadgePercent: gi,
  BadgePlus: xi,
  BadgePoundSterling: wi,
  BadgeQuestionMark: $i,
  BadgeRussianRuble: ji,
  BadgeSwissFranc: Ai,
  BadgeTurkishLira: Si,
  BadgeX: Vi,
  BaggageClaim: Ei,
  Balloon: Oi,
  Ban: Ii,
  Banana: Bi,
  Bandage: Gi,
  Banknote: as,
  BanknoteArrowDown: Wi,
  BanknoteArrowUp: Yi,
  BanknoteX: Qi,
  Barcode: es,
  Barrel: ns,
  Baseline: rs,
  Bath: ds,
  Battery: ws,
  BatteryCharging: ss,
  BatteryFull: ps,
  BatteryLow: ls,
  BatteryMedium: Ms,
  BatteryPlus: ms,
  BatteryWarning: gs,
  Beaker: xs,
  Bean: js,
  BeanOff: $s,
  Bed: Vs,
  BedDouble: As,
  BedSingle: Ss,
  Beef: Es,
  Beer: Is,
  BeerOff: Ps,
  Bell: ey,
  BellDot: Os,
  BellElectric: Bs,
  BellMinus: Ws,
  BellOff: Gs,
  BellPlus: Ys,
  BellRing: Qs,
  BetweenHorizontalEnd: ay,
  BetweenHorizontalStart: ny,
  BetweenVerticalEnd: ry,
  BetweenVerticalStart: dy,
  BicepsFlexed: sy,
  Bike: py,
  Binary: ly,
  Binoculars: My,
  Biohazard: my,
  Bird: gy,
  Birdhouse: xy,
  Bitcoin: wy,
  Blend: $y,
  Blinds: jy,
  Blocks: Ay,
  Bluetooth: Oy,
  BluetoothConnected: Sy,
  BluetoothOff: Vy,
  BluetoothSearching: Ey,
  Bold: Py,
  Bolt: Iy,
  Bomb: Wy,
  Bone: By,
  Book: Bp,
  BookA: Gy,
  BookAlert: Yy,
  BookAudio: Qy,
  BookCheck: ep,
  BookCopy: ap,
  BookDashed: np,
  BookDown: rp,
  BookHeadphones: dp,
  BookHeart: sp,
  BookImage: pp,
  BookKey: lp,
  BookLock: Mp,
  BookMarked: gp,
  BookMinus: mp,
  BookOpen: wp,
  BookOpenCheck: xp,
  BookOpenText: $p,
  BookPlus: jp,
  BookSearch: Ap,
  BookText: Sp,
  BookType: Vp,
  BookUp: Pp,
  BookUp2: Ep,
  BookUser: Op,
  BookX: Ip,
  Bookmark: e4,
  BookmarkCheck: Wp,
  BookmarkMinus: Gp,
  BookmarkPlus: Yp,
  BookmarkX: Qp,
  BoomBox: a4,
  Bot: d4,
  BotMessageSquare: n4,
  BotOff: r4,
  BottleWine: p4,
  BowArrow: s4,
  Box: l4,
  Boxes: M4,
  Braces: m4,
  Brackets: g4,
  Brain: $4,
  BrainCircuit: x4,
  BrainCog: w4,
  BrickWall: S4,
  BrickWallFire: j4,
  BrickWallShield: A4,
  Briefcase: O4,
  BriefcaseBusiness: V4,
  BriefcaseConveyorBelt: E4,
  BriefcaseMedical: P4,
  BringToFront: I4,
  Brush: B4,
  BrushCleaning: W4,
  Bubbles: G4,
  Bug: e5,
  BugOff: Y4,
  BugPlay: Q4,
  Building: n5,
  Building2: a5,
  Bus: d5,
  BusFront: r5,
  Cable: p5,
  CableCar: s5,
  Cake: M5,
  CakeSlice: l5,
  Calculator: m5,
  Calendar: rk,
  Calendar1: g5,
  CalendarArrowDown: x5,
  CalendarArrowUp: w5,
  CalendarCheck: A5,
  CalendarCheck2: $5,
  CalendarClock: j5,
  CalendarCog: S5,
  CalendarDays: V5,
  CalendarFold: E5,
  CalendarHeart: P5,
  CalendarMinus: I5,
  CalendarMinus2: O5,
  CalendarOff: B5,
  CalendarPlus: G5,
  CalendarPlus2: W5,
  CalendarRange: Y5,
  CalendarSearch: Q5,
  CalendarSync: ak,
  CalendarX: nk,
  CalendarX2: ek,
  Calendars: dk,
  Camera: pk,
  CameraOff: sk,
  Candy: mk,
  CandyCane: Mk,
  CandyOff: lk,
  Cannabis: xk,
  CannabisOff: gk,
  Captions: $k,
  CaptionsOff: wk,
  Car: Ak,
  CarFront: jk,
  CarTaxiFront: Sk,
  Caravan: Ek,
  CardSim: Vk,
  Carrot: Pk,
  CaseLower: Ok,
  CaseSensitive: Ik,
  CaseUpper: Bk,
  CassetteTape: Wk,
  Cast: Gk,
  Castle: Yk,
  Cat: Qk,
  Cctv: e3,
  ChartArea: a3,
  ChartBar: p3,
  ChartBarBig: n3,
  ChartBarDecreasing: r3,
  ChartBarIncreasing: d3,
  ChartBarStacked: s3,
  ChartCandlestick: l3,
  ChartColumn: w3,
  ChartColumnBig: M3,
  ChartColumnDecreasing: m3,
  ChartColumnIncreasing: g3,
  ChartColumnStacked: x3,
  ChartGantt: $3,
  ChartLine: j3,
  ChartNetwork: A3,
  ChartNoAxesColumn: E3,
  ChartNoAxesColumnDecreasing: S3,
  ChartNoAxesColumnIncreasing: V3,
  ChartNoAxesCombined: P3,
  ChartNoAxesGantt: O3,
  ChartPie: I3,
  ChartScatter: B3,
  ChartSpline: W3,
  Check: Q3,
  CheckCheck: G3,
  CheckLine: Y3,
  ChefHat: el,
  Cherry: al,
  ChessBishop: nl,
  ChessKing: rl,
  ChessKnight: dl,
  ChessPawn: sl,
  ChessQueen: pl,
  ChessRook: ll,
  ChevronDown: Ml,
  ChevronFirst: ml,
  ChevronLast: gl,
  ChevronLeft: xl,
  ChevronRight: wl,
  ChevronUp: $l,
  ChevronsDown: Al,
  ChevronsDownUp: jl,
  ChevronsLeft: El,
  ChevronsLeftRight: Vl,
  ChevronsLeftRightEllipsis: Sl,
  ChevronsRight: Ol,
  ChevronsRightLeft: Pl,
  ChevronsUp: Bl,
  ChevronsUpDown: Il,
  Chromium: Wl,
  Church: Gl,
  Cigarette: Ql,
  CigaretteOff: Yl,
  Circle: E6,
  CircleAlert: e8,
  CircleArrowDown: a8,
  CircleArrowLeft: n8,
  CircleArrowOutDownLeft: r8,
  CircleArrowOutDownRight: d8,
  CircleArrowOutUpLeft: s8,
  CircleArrowOutUpRight: p8,
  CircleArrowRight: l8,
  CircleArrowUp: M8,
  CircleCheck: g8,
  CircleCheckBig: m8,
  CircleChevronDown: x8,
  CircleChevronLeft: w8,
  CircleChevronRight: $8,
  CircleChevronUp: j8,
  CircleDashed: A8,
  CircleDivide: V8,
  CircleDollarSign: S8,
  CircleDot: P8,
  CircleDotDashed: E8,
  CircleEllipsis: O8,
  CircleEqual: I8,
  CircleFadingArrowUp: B8,
  CircleFadingPlus: W8,
  CircleGauge: G8,
  CircleMinus: Y8,
  CircleOff: Q8,
  CircleParking: a6,
  CircleParkingOff: e6,
  CirclePause: n6,
  CirclePercent: r6,
  CirclePile: d6,
  CirclePlay: p6,
  CirclePlus: s6,
  CirclePoundSterling: l6,
  CirclePower: M6,
  CircleQuestionMark: m6,
  CircleSlash: x6,
  CircleSlash2: g6,
  CircleSmall: $6,
  CircleStar: w6,
  CircleStop: j6,
  CircleUser: S6,
  CircleUserRound: A6,
  CircleX: V6,
  CircuitBoard: P6,
  Citrus: O6,
  Clapperboard: I6,
  Clipboard: p7,
  ClipboardCheck: B6,
  ClipboardClock: W6,
  ClipboardCopy: G6,
  ClipboardList: Y6,
  ClipboardMinus: Q6,
  ClipboardPaste: e7,
  ClipboardPen: n7,
  ClipboardPenLine: a7,
  ClipboardPlus: r7,
  ClipboardType: d7,
  ClipboardX: s7,
  Clock: Y7,
  Clock1: l7,
  Clock10: M7,
  Clock11: m7,
  Clock12: g7,
  Clock2: x7,
  Clock3: w7,
  Clock4: $7,
  Clock5: j7,
  Clock6: A7,
  Clock7: S7,
  Clock8: V7,
  Clock9: E7,
  ClockAlert: P7,
  ClockArrowDown: O7,
  ClockArrowUp: I7,
  ClockCheck: B7,
  ClockFading: W7,
  ClockPlus: G7,
  ClosedCaption: Q7,
  Cloud: Pu,
  CloudAlert: eu,
  CloudBackup: au,
  CloudCheck: nu,
  CloudCog: ru,
  CloudDownload: su,
  CloudDrizzle: du,
  CloudFog: pu,
  CloudHail: lu,
  CloudLightning: Mu,
  CloudMoon: gu,
  CloudMoonRain: mu,
  CloudOff: xu,
  CloudRain: $u,
  CloudRainWind: wu,
  CloudSnow: ju,
  CloudSun: Su,
  CloudSunRain: Au,
  CloudSync: Vu,
  CloudUpload: Eu,
  Cloudy: Iu,
  Clover: Ou,
  Club: Bu,
  Code: Gu,
  CodeXml: Wu,
  Codepen: Yu,
  Codesandbox: Qu,
  Coffee: e9,
  Cog: a9,
  Coins: n9,
  Columns2: r9,
  Columns3: s9,
  Columns3Cog: d9,
  Columns4: p9,
  Combine: l9,
  Command: M9,
  Compass: m9,
  Component: g9,
  Computer: x9,
  ConciergeBell: w9,
  Cone: $9,
  Construction: j9,
  Contact: S9,
  ContactRound: A9,
  Container: V9,
  Contrast: E9,
  Cookie: P9,
  CookingPot: O9,
  Copy: eM,
  CopyCheck: I9,
  CopyMinus: B9,
  CopyPlus: W9,
  CopySlash: G9,
  CopyX: Y9,
  Copyleft: Q9,
  Copyright: aM,
  CornerDownLeft: nM,
  CornerDownRight: rM,
  CornerLeftDown: dM,
  CornerLeftUp: sM,
  CornerRightDown: pM,
  CornerRightUp: lM,
  CornerUpLeft: MM,
  CornerUpRight: mM,
  Cpu: gM,
  CreativeCommons: xM,
  CreditCard: wM,
  Croissant: $M,
  Crop: jM,
  Cross: AM,
  Crosshair: VM,
  Crown: SM,
  Cuboid: EM,
  CupSoda: PM,
  Currency: OM,
  Cylinder: IM,
  Dam: BM,
  Database: YM,
  DatabaseBackup: WM,
  DatabaseZap: GM,
  DecimalsArrowLeft: QM,
  DecimalsArrowRight: ef,
  Delete: af,
  Dessert: nf,
  Diameter: rf,
  Diamond: uf,
  DiamondMinus: df,
  DiamondPercent: yf,
  DiamondPlus: kf,
  Dice1: ff,
  Dice2: vf,
  Dice3: _f,
  Dice4: bf,
  Dice5: Nf,
  Dice6: zf,
  Dices: qf,
  Diff: Hf,
  Disc: Tf,
  Disc2: Cf,
  Disc3: Rf,
  DiscAlbum: Lf,
  Divide: Df,
  Dna: Uf,
  DnaOff: Ff,
  Dock: Zf,
  Dog: Xf,
  DollarSign: Kf,
  Donut: Jf,
  DoorClosed: om,
  DoorClosedLocked: tm,
  DoorOpen: cm,
  Dot: hm,
  Download: im,
  DraftingCompass: ym,
  Drama: km,
  Dribbble: fm,
  Drill: um,
  Drone: vm,
  Droplet: bm,
  DropletOff: _m,
  Droplets: Nm,
  Drum: zm,
  Drumstick: qm,
  Dumbbell: Hm,
  Ear: Cm,
  EarOff: Rm,
  Earth: Tm,
  EarthLock: Lm,
  Eclipse: Dm,
  Egg: Zm,
  EggFried: Fm,
  EggOff: Um,
  Ellipsis: Km,
  EllipsisVertical: Xm,
  Equal: ov,
  EqualApproximately: Jm,
  EqualNot: tv,
  Eraser: cv,
  EthernetPort: hv,
  Euro: iv,
  EvCharger: yv,
  Expand: kv,
  ExternalLink: uv,
  Eye: _v,
  EyeClosed: fv,
  EyeOff: vv,
  Facebook: bv,
  Factory: Nv,
  Fan: zv,
  FastForward: qv,
  Feather: Hv,
  Fence: Cv,
  FerrisWheel: Rv,
  Figma: Lv,
  File: T_,
  FileArchive: Tv,
  FileAxis3d: Dv,
  FileBadge: Fv,
  FileBox: Uv,
  FileBraces: Xv,
  FileBracesCorner: Zv,
  FileChartColumn: Kv,
  FileChartColumnIncreasing: Jv,
  FileChartLine: tg,
  FileChartPie: og,
  FileCheck: hg,
  FileCheckCorner: cg,
  FileClock: ig,
  FileCode: kg,
  FileCodeCorner: yg,
  FileCog: ug,
  FileDiff: _g,
  FileDigit: fg,
  FileDown: vg,
  FileExclamationPoint: bg,
  FileHeadphone: Ng,
  FileHeart: zg,
  FileImage: qg,
  FileInput: Hg,
  FileKey: Cg,
  FileLock: Rg,
  FileMinus: Tg,
  FileMinusCorner: Lg,
  FileMusic: Dg,
  FileOutput: Fg,
  FilePen: Zg,
  FilePenLine: Ug,
  FilePlay: Xg,
  FilePlus: Jg,
  FilePlusCorner: Kg,
  FileQuestionMark: t_,
  FileScan: o_,
  FileSearch: h_,
  FileSearchCorner: c_,
  FileSignal: i_,
  FileSliders: y_,
  FileSpreadsheet: k_,
  FileStack: u_,
  FileSymlink: f_,
  FileTerminal: v_,
  FileText: __,
  FileType: N_,
  FileTypeCorner: b_,
  FileUp: z_,
  FileUser: q_,
  FileVideoCamera: C_,
  FileVolume: H_,
  FileX: L_,
  FileXCorner: R_,
  Files: D_,
  Film: F_,
  FingerprintPattern: U_,
  FireExtinguisher: Z_,
  Fish: J_,
  FishOff: X_,
  FishSymbol: K_,
  FishingHook: tx,
  Flag: ix,
  FlagOff: ox,
  FlagTriangleLeft: cx,
  FlagTriangleRight: hx,
  Flame: kx,
  FlameKindling: yx,
  Flashlight: fx,
  FlashlightOff: ux,
  FlaskConical: _x,
  FlaskConicalOff: vx,
  FlaskRound: bx,
  FlipHorizontal: zx,
  FlipHorizontal2: Nx,
  FlipVertical: Hx,
  FlipVertical2: qx,
  Flower: Rx,
  Flower2: Cx,
  Focus: Lx,
  FoldHorizontal: Dx,
  FoldVertical: Tx,
  Folder: Ub,
  FolderArchive: Fx,
  FolderCheck: Ux,
  FolderClock: Zx,
  FolderClosed: Xx,
  FolderCode: Kx,
  FolderCog: tb,
  FolderDot: Jx,
  FolderDown: ob,
  FolderGit: hb,
  FolderGit2: cb,
  FolderHeart: ib,
  FolderInput: yb,
  FolderKanban: ub,
  FolderKey: kb,
  FolderLock: fb,
  FolderMinus: vb,
  FolderOpen: bb,
  FolderOpenDot: _b,
  FolderOutput: Nb,
  FolderPen: zb,
  FolderPlus: qb,
  FolderRoot: Hb,
  FolderSearch: Rb,
  FolderSearch2: Cb,
  FolderSymlink: Lb,
  FolderSync: Tb,
  FolderTree: Db,
  FolderUp: Fb,
  FolderX: Xb,
  Folders: Zb,
  Footprints: Kb,
  Forklift: Jb,
  Form: tw,
  Forward: ow,
  Frame: cw,
  Framer: hw,
  Frown: iw,
  Fuel: yw,
  Fullscreen: kw,
  Funnel: _w,
  FunnelPlus: uw,
  FunnelX: fw,
  GalleryHorizontal: bw,
  GalleryHorizontalEnd: vw,
  GalleryThumbnails: Nw,
  GalleryVertical: qw,
  GalleryVerticalEnd: zw,
  Gamepad: Rw,
  Gamepad2: Hw,
  GamepadDirectional: Cw,
  Gauge: Lw,
  Gavel: Dw,
  Gem: Tw,
  GeorgianLari: Uw,
  Ghost: Fw,
  Gift: Zw,
  GitBranch: Jw,
  GitBranchMinus: Xw,
  GitBranchPlus: Kw,
  GitCommitHorizontal: tN,
  GitCommitVertical: oN,
  GitCompare: hN,
  GitCompareArrows: cN,
  GitFork: iN,
  GitGraph: yN,
  GitMerge: kN,
  GitPullRequest: NN,
  GitPullRequestArrow: uN,
  GitPullRequestClosed: fN,
  GitPullRequestCreate: _N,
  GitPullRequestCreateArrow: vN,
  GitPullRequestDraft: bN,
  Github: zN,
  Gitlab: qN,
  GlassWater: HN,
  Glasses: CN,
  Globe: TN,
  GlobeLock: RN,
  GlobeX: LN,
  Goal: FN,
  Gpu: DN,
  GraduationCap: UN,
  Grape: ZN,
  Grid2x2: t$,
  Grid2x2Check: XN,
  Grid2x2Plus: KN,
  Grid2x2X: JN,
  Grid3x2: o$,
  Grid3x3: c$,
  Grip: y$,
  GripHorizontal: h$,
  GripVertical: i$,
  Group: k$,
  Guitar: u$,
  Ham: f$,
  Hamburger: v$,
  Hammer: _$,
  Hand: L$,
  HandCoins: b$,
  HandFist: N$,
  HandGrab: z$,
  HandHeart: q$,
  HandHelping: H$,
  HandMetal: C$,
  HandPlatter: R$,
  Handbag: T$,
  Handshake: D$,
  HardDrive: X$,
  HardDriveDownload: F$,
  HardDriveUpload: U$,
  HardHat: Z$,
  Hash: K$,
  HatGlasses: J$,
  Haze: tz,
  Hd: oz,
  HdmiPort: cz,
  Heading: vz,
  Heading1: hz,
  Heading2: iz,
  Heading3: yz,
  Heading4: kz,
  Heading5: uz,
  Heading6: fz,
  HeadphoneOff: _z,
  Headphones: bz,
  Headset: Nz,
  Heart: Tz,
  HeartCrack: zz,
  HeartHandshake: qz,
  HeartMinus: Hz,
  HeartOff: Cz,
  HeartPlus: Rz,
  HeartPulse: Lz,
  Heater: Dz,
  Helicopter: Fz,
  Hexagon: Uz,
  Highlighter: Zz,
  History: Xz,
  Hop: Jz,
  HopOff: Kz,
  Hospital: tj,
  Hotel: oj,
  Hourglass: cj,
  House: uj,
  HouseHeart: hj,
  HousePlug: ij,
  HousePlus: yj,
  HouseWifi: kj,
  IceCreamBowl: fj,
  IceCreamCone: vj,
  IdCard: bj,
  IdCardLanyard: _j,
  Image: Tj,
  ImageDown: Nj,
  ImageMinus: zj,
  ImageOff: qj,
  ImagePlay: Hj,
  ImagePlus: Cj,
  ImageUp: Rj,
  ImageUpscale: Lj,
  Images: Dj,
  Import: Fj,
  Inbox: Uj,
  IndianRupee: Zj,
  Infinity: Xj,
  Info: Kj,
  InspectionPanel: Jj,
  Instagram: tq,
  Italic: oq,
  IterationCcw: cq,
  IterationCw: hq,
  JapaneseYen: iq,
  Joystick: yq,
  Kanban: kq,
  Kayak: uq,
  Key: _q,
  KeyRound: fq,
  KeySquare: vq,
  Keyboard: zq,
  KeyboardMusic: bq,
  KeyboardOff: Nq,
  Lamp: Tq,
  LampCeiling: qq,
  LampDesk: Hq,
  LampFloor: Cq,
  LampWallDown: Rq,
  LampWallUp: Lq,
  LandPlot: Dq,
  Landmark: Fq,
  Languages: Uq,
  Laptop: Kq,
  LaptopMinimal: Xq,
  LaptopMinimalCheck: Zq,
  Lasso: tA,
  LassoSelect: Jq,
  Laugh: oA,
  Layers: iA,
  Layers2: cA,
  LayersPlus: hA,
  LayoutDashboard: yA,
  LayoutGrid: kA,
  LayoutList: uA,
  LayoutPanelLeft: fA,
  LayoutPanelTop: vA,
  LayoutTemplate: _A,
  Leaf: bA,
  LeafyGreen: NA,
  Lectern: zA,
  Library: HA,
  LibraryBig: qA,
  LifeBuoy: CA,
  Ligature: RA,
  Lightbulb: TA,
  LightbulbOff: LA,
  LineSquiggle: DA,
  Link: ZA,
  Link2: UA,
  Link2Off: FA,
  Linkedin: XA,
  List: LH,
  ListCheck: KA,
  ListChecks: JA,
  ListChevronsDownUp: tH,
  ListChevronsUpDown: oH,
  ListCollapse: cH,
  ListEnd: hH,
  ListFilter: yH,
  ListFilterPlus: iH,
  ListIndentDecrease: kH,
  ListIndentIncrease: uH,
  ListMinus: fH,
  ListMusic: vH,
  ListOrdered: _H,
  ListPlus: bH,
  ListRestart: NH,
  ListStart: zH,
  ListTodo: qH,
  ListTree: HH,
  ListVideo: CH,
  ListX: RH,
  Loader: FH,
  LoaderCircle: DH,
  LoaderPinwheel: TH,
  Locate: XH,
  LocateFixed: UH,
  LocateOff: ZH,
  Lock: oS,
  LockKeyhole: JH,
  LockKeyholeOpen: KH,
  LockOpen: tS,
  LogIn: cS,
  LogOut: hS,
  Logs: iS,
  Lollipop: yS,
  Luggage: kS,
  Magnet: uS,
  Mail: HS,
  MailCheck: fS,
  MailMinus: vS,
  MailOpen: _S,
  MailPlus: NS,
  MailQuestionMark: bS,
  MailSearch: zS,
  MailWarning: qS,
  MailX: CS,
  Mailbox: RS,
  Mails: LS,
  Map: uC,
  MapMinus: TS,
  MapPin: iC,
  MapPinCheck: FS,
  MapPinCheckInside: DS,
  MapPinHouse: US,
  MapPinMinus: XS,
  MapPinMinusInside: ZS,
  MapPinOff: KS,
  MapPinPen: tC,
  MapPinPlus: oC,
  MapPinPlusInside: JS,
  MapPinX: hC,
  MapPinXInside: cC,
  MapPinned: yC,
  MapPlus: kC,
  Mars: vC,
  MarsStroke: fC,
  Martini: _C,
  Maximize: NC,
  Maximize2: bC,
  Medal: zC,
  Megaphone: HC,
  MegaphoneOff: qC,
  Meh: CC,
  MemoryStick: RC,
  Menu: LC,
  Merge: TC,
  MessageCircle: hV,
  MessageCircleCode: DC,
  MessageCircleDashed: FC,
  MessageCircleHeart: UC,
  MessageCircleMore: ZC,
  MessageCircleOff: XC,
  MessageCirclePlus: KC,
  MessageCircleQuestionMark: JC,
  MessageCircleReply: tV,
  MessageCircleWarning: oV,
  MessageCircleX: cV,
  MessageSquare: TV,
  MessageSquareCode: iV,
  MessageSquareDashed: yV,
  MessageSquareDiff: kV,
  MessageSquareDot: uV,
  MessageSquareHeart: fV,
  MessageSquareLock: vV,
  MessageSquareMore: bV,
  MessageSquareOff: _V,
  MessageSquarePlus: NV,
  MessageSquareQuote: zV,
  MessageSquareReply: qV,
  MessageSquareShare: CV,
  MessageSquareText: HV,
  MessageSquareWarning: RV,
  MessageSquareX: LV,
  MessagesSquare: DV,
  Mic: UV,
  MicOff: FV,
  MicVocal: ZV,
  Microchip: XV,
  Microscope: KV,
  Microwave: JV,
  Milestone: tR,
  Milk: cR,
  MilkOff: oR,
  Minimize: iR,
  Minimize2: hR,
  Minus: kR,
  Monitor: DR,
  MonitorCheck: yR,
  MonitorCloud: uR,
  MonitorCog: fR,
  MonitorDot: vR,
  MonitorDown: _R,
  MonitorOff: bR,
  MonitorPause: NR,
  MonitorPlay: zR,
  MonitorSmartphone: qR,
  MonitorSpeaker: HR,
  MonitorStop: CR,
  MonitorUp: LR,
  MonitorX: RR,
  Moon: FR,
  MoonStar: TR,
  Motorbike: UR,
  Mountain: XR,
  MountainSnow: ZR,
  Mouse: iE,
  MouseOff: KR,
  MousePointer: hE,
  MousePointer2: tE,
  MousePointer2Off: JR,
  MousePointerBan: oE,
  MousePointerClick: cE,
  Move: RE,
  Move3d: yE,
  MoveDiagonal: uE,
  MoveDiagonal2: kE,
  MoveDown: _E,
  MoveDownLeft: fE,
  MoveDownRight: vE,
  MoveHorizontal: bE,
  MoveLeft: NE,
  MoveRight: zE,
  MoveUp: HE,
  MoveUpLeft: qE,
  MoveUpRight: CE,
  MoveVertical: LE,
  Music: UE,
  Music2: TE,
  Music3: DE,
  Music4: FE,
  Navigation: JE,
  Navigation2: XE,
  Navigation2Off: ZE,
  NavigationOff: KE,
  Network: tL,
  Newspaper: oL,
  Nfc: cL,
  NonBinary: hL,
  Notebook: uL,
  NotebookPen: iL,
  NotebookTabs: yL,
  NotebookText: kL,
  NotepadText: vL,
  NotepadTextDashed: fL,
  Nut: bL,
  NutOff: _L,
  Octagon: CL,
  OctagonAlert: NL,
  OctagonMinus: zL,
  OctagonPause: qL,
  OctagonX: HL,
  Omega: RL,
  Option: LL,
  Orbit: TL,
  Origami: DL,
  Package: oP,
  Package2: FL,
  PackageCheck: UL,
  PackageMinus: ZL,
  PackageOpen: XL,
  PackagePlus: KL,
  PackageSearch: JL,
  PackageX: tP,
  PaintBucket: cP,
  PaintRoller: hP,
  Paintbrush: yP,
  PaintbrushVertical: iP,
  Palette: kP,
  Panda: uP,
  PanelBottom: bP,
  PanelBottomClose: fP,
  PanelBottomDashed: vP,
  PanelBottomOpen: _P,
  PanelLeft: CP,
  PanelLeftClose: NP,
  PanelLeftDashed: zP,
  PanelLeftOpen: qP,
  PanelLeftRightDashed: HP,
  PanelRight: DP,
  PanelRightClose: RP,
  PanelRightDashed: LP,
  PanelRightOpen: TP,
  PanelTop: KP,
  PanelTopBottomDashed: FP,
  PanelTopClose: UP,
  PanelTopDashed: ZP,
  PanelTopOpen: XP,
  PanelsLeftBottom: JP,
  PanelsRightBottom: tT,
  PanelsTopLeft: cT,
  Paperclip: oT,
  Parentheses: hT,
  ParkingMeter: iT,
  PartyPopper: yT,
  Pause: kT,
  PawPrint: uT,
  PcCase: fT,
  Pen: NT,
  PenLine: vT,
  PenOff: _T,
  PenTool: bT,
  Pencil: CT,
  PencilLine: zT,
  PencilOff: qT,
  PencilRuler: HT,
  Pentagon: RT,
  Percent: LT,
  PersonStanding: TT,
  PhilippinePeso: DT,
  Phone: tO,
  PhoneCall: FT,
  PhoneForwarded: UT,
  PhoneIncoming: ZT,
  PhoneMissed: XT,
  PhoneOff: KT,
  PhoneOutgoing: JT,
  Pi: oO,
  Piano: cO,
  Pickaxe: hO,
  PictureInPicture: yO,
  PictureInPicture2: iO,
  PiggyBank: kO,
  Pilcrow: vO,
  PilcrowLeft: uO,
  PilcrowRight: fO,
  Pill: bO,
  PillBottle: _O,
  Pin: zO,
  PinOff: NO,
  Pipette: qO,
  Pizza: HO,
  Plane: LO,
  PlaneLanding: CO,
  PlaneTakeoff: RO,
  Play: TO,
  Plug: UO,
  Plug2: DO,
  PlugZap: FO,
  Plus: ZO,
  Pocket: XO,
  PocketKnife: KO,
  Podcast: JO,
  Pointer: oD,
  PointerOff: tD,
  Popcorn: cD,
  Popsicle: hD,
  PoundSterling: iD,
  Power: kD,
  PowerOff: yD,
  Presentation: uD,
  Printer: bD,
  PrinterCheck: fD,
  PrinterX: vD,
  Projector: _D,
  Proportions: ND,
  Puzzle: zD,
  Pyramid: qD,
  QrCode: HD,
  Quote: CD,
  Rabbit: RD,
  Radar: LD,
  Radiation: DD,
  Radical: TD,
  Radio: ZD,
  RadioReceiver: FD,
  RadioTower: UD,
  Radius: XD,
  RailSymbol: JD,
  Rainbow: KD,
  Rat: tI,
  Ratio: oI,
  Receipt: _I,
  ReceiptCent: cI,
  ReceiptEuro: hI,
  ReceiptIndianRupee: iI,
  ReceiptJapaneseYen: yI,
  ReceiptPoundSterling: kI,
  ReceiptRussianRuble: uI,
  ReceiptSwissFranc: fI,
  ReceiptText: vI,
  ReceiptTurkishLira: bI,
  RectangleCircle: NI,
  RectangleEllipsis: zI,
  RectangleGoggles: qI,
  RectangleHorizontal: HI,
  RectangleVertical: CI,
  Recycle: TI,
  Redo: DI,
  Redo2: RI,
  RedoDot: LI,
  RefreshCcw: UI,
  RefreshCcwDot: FI,
  RefreshCw: XI,
  RefreshCwOff: ZI,
  Refrigerator: KI,
  Regex: JI,
  RemoveFormatting: tF,
  Repeat: hF,
  Repeat1: oF,
  Repeat2: cF,
  Replace: yF,
  ReplaceAll: iF,
  Reply: uF,
  ReplyAll: kF,
  Rewind: fF,
  Ribbon: vF,
  Rocket: _F,
  RockingChair: bF,
  RollerCoaster: NF,
  Rose: zF,
  Rotate3d: qF,
  RotateCcw: RF,
  RotateCcwKey: HF,
  RotateCcwSquare: CF,
  RotateCw: TF,
  RotateCwSquare: LF,
  Route: FF,
  RouteOff: DF,
  Router: UF,
  Rows2: ZF,
  Rows3: XF,
  Rows4: KF,
  Rss: JF,
  Ruler: iB,
  RulerDimensionLine: tB,
  RussianRuble: oB,
  Sailboat: cB,
  Salad: hB,
  Sandwich: yB,
  Satellite: uB,
  SatelliteDish: kB,
  SaudiRiyal: fB,
  Save: bB,
  SaveAll: _B,
  SaveOff: vB,
  Scale: zB,
  Scale3d: NB,
  Scaling: qB,
  Scan: UB,
  ScanBarcode: HB,
  ScanEye: CB,
  ScanFace: RB,
  ScanHeart: LB,
  ScanLine: TB,
  ScanQrCode: DB,
  ScanSearch: FB,
  ScanText: ZB,
  School: KB,
  Scissors: JB,
  ScissorsLineDashed: XB,
  Scooter: tU,
  ScreenShare: cU,
  ScreenShareOff: oU,
  Scroll: hU,
  ScrollText: yU,
  Search: _U,
  SearchAlert: iU,
  SearchCheck: kU,
  SearchCode: uU,
  SearchSlash: fU,
  SearchX: vU,
  Section: bU,
  Send: qU,
  SendHorizontal: NU,
  SendToBack: zU,
  SeparatorHorizontal: HU,
  SeparatorVertical: CU,
  Server: DU,
  ServerCog: RU,
  ServerCrash: LU,
  ServerOff: TU,
  Settings: UU,
  Settings2: FU,
  Shapes: ZU,
  Share: KU,
  Share2: XU,
  Sheet: JU,
  Shell: tW,
  Shield: NW,
  ShieldAlert: oW,
  ShieldBan: cW,
  ShieldCheck: hW,
  ShieldEllipsis: yW,
  ShieldHalf: iW,
  ShieldMinus: kW,
  ShieldOff: uW,
  ShieldPlus: fW,
  ShieldQuestionMark: vW,
  ShieldUser: _W,
  ShieldX: bW,
  Ship: qW,
  ShipWheel: zW,
  Shirt: HW,
  ShoppingBag: CW,
  ShoppingBasket: RW,
  ShoppingCart: LW,
  Shovel: TW,
  ShowerHead: DW,
  Shredder: FW,
  Shrimp: UW,
  Shrink: ZW,
  Shrub: XW,
  Shuffle: KW,
  Sigma: JW,
  Signal: iZ,
  SignalHigh: tZ,
  SignalLow: oZ,
  SignalMedium: cZ,
  SignalZero: hZ,
  Signature: yZ,
  Signpost: uZ,
  SignpostBig: kZ,
  Siren: fZ,
  SkipBack: vZ,
  SkipForward: _Z,
  Skull: bZ,
  Slack: NZ,
  Slash: zZ,
  Slice: qZ,
  SlidersHorizontal: HZ,
  SlidersVertical: CZ,
  Smartphone: DZ,
  SmartphoneCharging: RZ,
  SmartphoneNfc: LZ,
  Smile: FZ,
  SmilePlus: TZ,
  Snail: UZ,
  Snowflake: ZZ,
  SoapDispenserDroplet: XZ,
  Sofa: KZ,
  SolarPanel: JZ,
  Soup: tG,
  Space: oG,
  Spade: cG,
  Sparkle: iG,
  Sparkles: hG,
  Speaker: yG,
  Speech: kG,
  SpellCheck: fG,
  SpellCheck2: uG,
  Spline: _G,
  SplinePointer: vG,
  Split: NG,
  Spool: bG,
  Spotlight: zG,
  SprayCan: qG,
  Sprout: HG,
  Square: JY,
  SquareActivity: CG,
  SquareArrowDown: LG,
  SquareArrowDownLeft: RG,
  SquareArrowDownRight: TG,
  SquareArrowLeft: DG,
  SquareArrowOutDownLeft: FG,
  SquareArrowOutDownRight: UG,
  SquareArrowOutUpLeft: ZG,
  SquareArrowOutUpRight: XG,
  SquareArrowRight: KG,
  SquareArrowUp: oX,
  SquareArrowUpLeft: JG,
  SquareArrowUpRight: tX,
  SquareAsterisk: cX,
  SquareBottomDashedScissors: hX,
  SquareChartGantt: iX,
  SquareCheck: kX,
  SquareCheckBig: yX,
  SquareChevronDown: uX,
  SquareChevronLeft: fX,
  SquareChevronRight: vX,
  SquareChevronUp: _X,
  SquareCode: bX,
  SquareDashed: RX,
  SquareDashedBottom: zX,
  SquareDashedBottomCode: NX,
  SquareDashedKanban: HX,
  SquareDashedMousePointer: qX,
  SquareDashedTopSolid: CX,
  SquareDivide: LX,
  SquareDot: TX,
  SquareEqual: DX,
  SquareFunction: FX,
  SquareKanban: ZX,
  SquareLibrary: UX,
  SquareM: XX,
  SquareMenu: KX,
  SquareMinus: JX,
  SquareMousePointer: tY,
  SquareParking: cY,
  SquareParkingOff: oY,
  SquarePause: hY,
  SquarePen: iY,
  SquarePercent: yY,
  SquarePi: kY,
  SquarePilcrow: uY,
  SquarePlay: fY,
  SquarePlus: vY,
  SquarePower: _Y,
  SquareRadical: bY,
  SquareRoundCorner: NY,
  SquareScissors: zY,
  SquareSigma: qY,
  SquareSlash: HY,
  SquareSplitHorizontal: CY,
  SquareSplitVertical: RY,
  SquareSquare: LY,
  SquareStack: TY,
  SquareStar: DY,
  SquareStop: FY,
  SquareTerminal: UY,
  SquareUser: ZY,
  SquareUserRound: XY,
  SquareX: KY,
  SquaresExclude: tK,
  SquaresIntersect: oK,
  SquaresSubtract: hK,
  SquaresUnite: cK,
  Squircle: yK,
  SquircleDashed: iK,
  Squirrel: kK,
  Stamp: uK,
  Star: _K,
  StarHalf: vK,
  StarOff: fK,
  StepBack: bK,
  StepForward: NK,
  Stethoscope: zK,
  Sticker: qK,
  StickyNote: HK,
  Stone: CK,
  Store: RK,
  StretchHorizontal: LK,
  StretchVertical: TK,
  Strikethrough: DK,
  Subscript: FK,
  Sun: JK,
  SunDim: UK,
  SunMedium: XK,
  SunMoon: ZK,
  SunSnow: KK,
  Sunrise: tQ,
  Sunset: oQ,
  Superscript: cQ,
  SwatchBook: hQ,
  SwissFranc: iQ,
  SwitchCamera: yQ,
  Sword: kQ,
  Swords: uQ,
  Syringe: fQ,
  Table: CQ,
  Table2: vQ,
  TableCellsMerge: _Q,
  TableCellsSplit: bQ,
  TableColumnsSplit: NQ,
  TableOfContents: HQ,
  TableProperties: zQ,
  TableRowsSplit: qQ,
  Tablet: LQ,
  TabletSmartphone: RQ,
  Tablets: DQ,
  Tag: TQ,
  Tags: FQ,
  Tally1: UQ,
  Tally2: ZQ,
  Tally3: XQ,
  Tally4: KQ,
  Tally5: JQ,
  Tangent: tJ,
  Target: oJ,
  Telescope: cJ,
  Tent: iJ,
  TentTree: hJ,
  Terminal: yJ,
  TestTube: uJ,
  TestTubeDiagonal: kJ,
  TestTubes: fJ,
  TextAlignCenter: vJ,
  TextAlignEnd: _J,
  TextAlignJustify: bJ,
  TextAlignStart: NJ,
  TextCursor: qJ,
  TextCursorInput: zJ,
  TextInitial: HJ,
  TextQuote: CJ,
  TextSearch: RJ,
  TextSelect: LJ,
  TextWrap: TJ,
  Theater: DJ,
  Thermometer: ZJ,
  ThermometerSnowflake: FJ,
  ThermometerSun: UJ,
  ThumbsDown: XJ,
  ThumbsUp: KJ,
  Ticket: y11,
  TicketCheck: JJ,
  TicketMinus: t11,
  TicketPercent: o11,
  TicketPlus: c11,
  TicketSlash: h11,
  TicketX: i11,
  Tickets: u11,
  TicketsPlane: k11,
  Timer: v11,
  TimerOff: f11,
  TimerReset: _11,
  ToggleLeft: b11,
  ToggleRight: N11,
  Toilet: z11,
  ToolCase: q11,
  Toolbox: C11,
  Tornado: H11,
  Torus: R11,
  Touchpad: T11,
  TouchpadOff: L11,
  TowerControl: D11,
  ToyBrick: F11,
  Tractor: U11,
  TrafficCone: Z11,
  TrainFront: K11,
  TrainFrontTunnel: X11,
  TrainTrack: J11,
  TramFront: te1,
  Transgender: oe1,
  Trash: he1,
  Trash2: ce1,
  TreeDeciduous: ie1,
  TreePalm: ye1,
  TreePine: ke1,
  Trees: ue1,
  Trello: fe1,
  TrendingDown: ve1,
  TrendingUp: be1,
  TrendingUpDown: _e1,
  Triangle: He1,
  TriangleAlert: Ne1,
  TriangleDashed: ze1,
  TriangleRight: qe1,
  Trophy: Ce1,
  Truck: Le1,
  TruckElectric: Re1,
  TurkishLira: Te1,
  Turntable: De1,
  Turtle: Fe1,
  Tv: Xe1,
  TvMinimal: Ze1,
  TvMinimalPlay: Ue1,
  Twitch: Ke1,
  Twitter: Je1,
  Type: t21,
  TypeOutline: o21,
  Umbrella: h21,
  UmbrellaOff: c21,
  Underline: i21,
  Undo: u21,
  Undo2: y21,
  UndoDot: k21,
  UnfoldHorizontal: f21,
  UnfoldVertical: v21,
  Ungroup: _21,
  University: b21,
  Unlink: z21,
  Unlink2: N21,
  Unplug: q21,
  Upload: H21,
  Usb: C21,
  User: ut1,
  UserCheck: R21,
  UserCog: L21,
  UserLock: T21,
  UserMinus: D21,
  UserPen: F21,
  UserPlus: U21,
  UserRound: ht1,
  UserRoundCheck: Z21,
  UserRoundCog: X21,
  UserRoundMinus: K21,
  UserRoundPen: J21,
  UserRoundPlus: tt1,
  UserRoundSearch: ot1,
  UserRoundX: ct1,
  UserSearch: it1,
  UserStar: yt1,
  UserX: kt1,
  Users: _t1,
  UsersRound: ft1,
  Utensils: bt1,
  UtensilsCrossed: vt1,
  UtilityPole: Nt1,
  Van: zt1,
  Variable: qt1,
  Vault: Ht1,
  VectorSquare: Ct1,
  Vegan: Rt1,
  VenetianMask: Lt1,
  Venus: Dt1,
  VenusAndMars: Tt1,
  Vibrate: Ut1,
  VibrateOff: Ft1,
  Video: Kt1,
  VideoOff: Zt1,
  Videotape: Xt1,
  View: Jt1,
  Voicemail: t01,
  Volleyball: o01,
  Volume: k01,
  Volume1: c01,
  Volume2: h01,
  VolumeOff: i01,
  VolumeX: y01,
  Vote: u01,
  Wallet: _01,
  WalletCards: f01,
  WalletMinimal: v01,
  Wallpaper: b01,
  Wand: z01,
  WandSparkles: N01,
  Warehouse: q01,
  WashingMachine: H01,
  Watch: R01,
  Waves: D01,
  WavesArrowDown: C01,
  WavesArrowUp: L01,
  WavesLadder: T01,
  Waypoints: F01,
  Webcam: U01,
  Webhook: X01,
  WebhookOff: Z01,
  Weight: J01,
  WeightTilde: K01,
  Wheat: oa1,
  WheatOff: ta1,
  WholeWord: ca1,
  Wifi: _a1,
  WifiCog: ha1,
  WifiHigh: ia1,
  WifiLow: ya1,
  WifiOff: ka1,
  WifiPen: ua1,
  WifiSync: fa1,
  WifiZero: va1,
  Wind: Na1,
  WindArrowDown: ba1,
  Wine: qa1,
  WineOff: za1,
  Workflow: Ha1,
  Worm: Ca1,
  Wrench: Ra1,
  X: La1,
  Youtube: Da1,
  Zap: Fa1,
  ZapOff: Ta1,
  ZoomIn: Ua1,
  ZoomOut: Za1
}, Symbol.toStringTag, { value: "Module" })), Uo1 = ({ name: t, color: a, size: o, className: n }) => {
  const c = Ga1[t];
  return /* @__PURE__ */ w.jsx(c, { color: a, size: o, className: n });
}, ye = W.span`
  display: inline-flex;
  flex-wrap: ${({ type: t }) => t === "checkbox" || t === "radio" ? "nowrap" : "wrap"};
  align-items: center;

  ${({ $label: t }) => t && V`
      gap: 5px;
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

  ${({ $fullWidth: t }) => _1(!!t)}
`, ee = W.label`
    display: inline-block;
    color: ${({ theme: t }) => t.colors.grayDark};
    font-size: ${({ theme: t }) => t.fontSizes.small.lg};
    line-height: ${({ theme: t }) => t.lineHeights.small.lg};
  `, Xa1 = W.input`
  ${v1};
  ${J2};
  font-family: inherit;
  display: inline-block;
  padding: 17px 15px;
  border-radius: ${({ theme: t }) => t.spacing.radius.xs};
  font-weight: 400;
  white-space: nowrap;
  hyphens: auto;
  color: ${({ theme: t }) => t.colors.dark};
  background: ${({ theme: t }) => t.colors.light};
  border: solid 2px ${({ theme: t }) => t.colors.grayLight};
  box-shadow: 0 0 0 0px ${({ theme: t }) => t.colors.primaryLight};
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
    color: ${({ theme: t }) => t.colors.gray};
  }

  &::-webkit-datetime-edit-month-field {
    &:focus {
      background: ${({ theme: t }) => t.colors.primary};
      color: ${({ theme: t }) => t.colors.light};
      border-radius: 4px;
    }
  }

  &::-webkit-datetime-edit-day-field {
    &:focus {
      background: ${({ theme: t }) => t.colors.primary};
      color: ${({ theme: t }) => t.colors.light};
      border-radius: 4px;
    }
  }

  &::-webkit-datetime-edit-year-field {
    &:focus {
      background: ${({ theme: t }) => t.colors.primary};
      color: ${({ theme: t }) => t.colors.light};
      border-radius: 4px;
    }
  }

  &::placeholder {
    color: ${({ theme: t }) => t.colors.gray};
  }

  @media (hover: hover) {
    &:hover:not([disabled]) {
      border-color: ${({ theme: t }) => t.colors.primary};
    }
  }

  &:focus:not([disabled]) {
    box-shadow: 0 0 0 4px ${({ theme: t }) => t.colors.primaryLight};
    border-color: ${({ theme: t }) => t.colors.primary};
  }

  &:active:not([disabled]) {
    box-shadow: 0 0 0 2px ${({ theme: t }) => t.colors.primaryLight};
  }

  ${({ $size: t }) => et(t)}

  ${({ $size: t, theme: a }) => t === "big" ? `font-size: ${a.fontSizes.inputBig.lg};
			line-height: ${a.lineHeights.inputBig.lg};
	` : `font-size: ${a.fontSizes.input.lg};
			line-height: ${a.lineHeights.input.lg};`}

	${({ $error: t, $success: a, theme: o }) => F1(
  !!t,
  !!a,
  o
)}

	${({ disabled: t, theme: a }) => t && `cursor: not-allowed;
		background: ${a.colors.grayLight};
		border-color: ${a.colors.gray};
		color: ${a.colors.gray};
	`}

	${({ $fullWidth: t }) => _1(!!t)}
`, Ya1 = W.span`
  display: inline-flex;
  position: relative;
  line-height: 0;
  min-width: fit-content;

  & em {
    display: block;
    border-radius: 50%;
    background: ${({ theme: t }) => t.colors.primary};
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
`, Ka1 = W.input`
  ${v1};
  display: inline-block;
  border: solid 2px ${({ theme: t }) => t.colors.grayLight};
  box-shadow: 0 0 0 0px ${({ theme: t }) => t.colors.primaryLight};
  transition: all 0.3s ease;

  @media (hover: hover) {
    &:hover:not([disabled]) {
      border-color: ${({ theme: t }) => t.colors.primary};
    }
  }

  &:focus:not([disabled]) {
    box-shadow: 0 0 0 4px ${({ theme: t }) => t.colors.primaryLight};
    border-color: ${({ theme: t }) => t.colors.primary};
  }

  &:active:not([disabled]) {
    box-shadow: 0 0 0 2px ${({ theme: t }) => t.colors.primaryLight};
  }

  ${({ type: t, theme: a }) => t === "checkbox" ? `border-radius: ${a.spacing.radius.xs};` : "border-radius: 50%;"}

  ${({ disabled: t, theme: a }) => t && `cursor: not-allowed;
		background: ${a.colors.grayLight};
    border: solid 2px ${a.colors.gray};
		color: ${a.colors.gray};
	`}

	${({ $error: t, $success: a, theme: o }) => F1(
  !!t,
  !!a,
  o
)}

	${({ $size: t }) => t === "big" ? `
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
`, Qa1 = W.span`
  position: relative;
  ${({ $fullWidth: t }) => _1(!!t)};

  & svg {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    pointer-events: none;
    width: 24px;
    height: 24px;
    object-fit: contain;
    color: ${({ theme: t }) => t.colors.primary};
  }

  ${({ $icon: t, $iconPosition: a }) => t && a === "right" ? V`
          & svg {
            right: 16px;
          }

          & input {
            padding-right: 50px;
          }
        ` : V`
          & svg {
            left: 16px;
          }

          & svg ~ input {
            padding-left: 50px;
          }
        `}
`;
function Ja1({ ...t }, a) {
  return t.type === "checkbox" || t.type === "radio" ? /* @__PURE__ */ w.jsxs(
    ye,
    {
      $fullWidth: t.$fullWidth,
      type: t.type,
      $label: t.$label,
      className: t.$wrapperClassName,
      children: [
        /* @__PURE__ */ w.jsxs(Ya1, { children: [
          /* @__PURE__ */ w.jsx(Ka1, { ...t, ref: a }),
          !t.disabled && t.type === "checkbox" ? /* @__PURE__ */ w.jsx(Uo, {}) : /* @__PURE__ */ w.jsx("em", {})
        ] }),
        t.$label && /* @__PURE__ */ w.jsx(ee, { htmlFor: t.id, children: t.$label })
      ]
    }
  ) : /* @__PURE__ */ w.jsxs(
    ye,
    {
      $fullWidth: t.$fullWidth,
      type: t.type,
      $label: t.$label,
      className: t.$wrapperClassName,
      children: [
        t.$label && /* @__PURE__ */ w.jsx(ee, { htmlFor: t.id, children: t.$label }),
        /* @__PURE__ */ w.jsxs(
          Qa1,
          {
            $fullWidth: t.$fullWidth,
            $iconPosition: t.$iconPosition,
            $icon: t.$icon,
            children: [
              t.$iconPosition !== "right" && t.$icon && t.$icon,
              /* @__PURE__ */ w.jsx(Xa1, { ...t, ref: a }),
              t.$iconPosition === "right" && t.$icon && t.$icon,
              t.type === "date" && /* @__PURE__ */ w.jsx(Zo, { className: "icon-calendar" })
            ]
          }
        )
      ]
    }
  );
}
const Wo1 = J(Ja1), Q0 = (t) => `max-width: ${t}px;`;
function eo1(t) {
  return Object.keys(t).filter((a) => a.startsWith("$")).map((a) => {
    const o = a.substring(1);
    return t[a] && P(o) + `{ ${Q0(t[a])} }`;
  }).join("");
}
const to1 = W.div`
  display: block;
  margin: ${({ $m0: t }) => t ? "0" : "auto"};

  ${({ $size: t }) => `
		${t && Q0(t)};
	`}
  ${(t) => eo1(t)}
`;
function ao1({ ...t }, a) {
  return /* @__PURE__ */ w.jsx(to1, { ...t, ref: a, children: t.children });
}
const Zo1 = J(ao1), oo1 = W.span`
  display: inline-flex;
  flex-wrap: ${({ type: t }) => t === "checkbox" || t === "radio" ? "fprnowrap" : "wrap"};
  gap: 10px;
  align-items: center;

  ${({ $fullWidth: t }) => _1(!!t)}
`, no1 = W.input`
  ${v1};
  padding: 0;
  height: 10px;
  font-size: 0;
  background: transparent;
  min-width: 100px;

  &::-webkit-slider-runnable-track {
    width: 100%;
    cursor: pointer;
    border-radius: ${({ theme: t }) => t.spacing.radius.xl};
    border: solid 2px ${({ theme: t }) => t.colors.grayLight};
    box-shadow: 0 0 0 0 ${({ theme: t }) => t.colors.primaryLight};
    transition: all 0.3s ease;
    ${({ $error: t, $success: a, theme: o }) => F1(
  !!t,
  !!a,
  o
)}
  }

  &::-moz-range-track {
    width: 100%;
    cursor: pointer;
    border-radius: ${({ theme: t }) => t.spacing.radius.xl};
    border: solid 2px ${({ theme: t }) => t.colors.grayLight};
    box-shadow: 0 0 0 0 ${({ theme: t }) => t.colors.primaryLight};
    transition: all 0.3s ease;
    ${({ $error: t, $success: a, theme: o }) => F1(
  !!t,
  !!a,
  o
)}
  }

  &::-webkit-slider-thumb {
    ${v1};
    background: ${({ theme: t }) => t.colors.primary};
    border: 0 solid transparent;
    border-radius: 50%;
    transition: all 0.3s ease;
  }

  &::-moz-range-thumb {
    ${v1};
    background: ${({ theme: t }) => t.colors.primary};
    border: 0 solid transparent;
    border-radius: 50%;
    transition: all 0.3s ease;
  }

  @media (hover: hover) {
    &:hover:not([disabled]) {
      &::-webkit-slider-runnable-track {
        border: solid 2px ${({ theme: t }) => t.colors.primary};
      }

      &::-moz-range-track {
        border: solid 2px ${({ theme: t }) => t.colors.primary};
      }
    }
  }

  &:focus:not([disabled]) {
    &::-webkit-slider-runnable-track {
      border: solid 2px ${({ theme: t }) => t.colors.primary};
      box-shadow: 0 0 0 4px ${({ theme: t }) => t.colors.primaryLight};
    }
    &::-webkit-slider-thumb {
      box-shadow: 0 0 0 4px ${({ theme: t }) => t.colors.primaryLight};
    }
    &::-moz-range-track {
      border: solid 2px ${({ theme: t }) => t.colors.primary};
      box-shadow: 0 0 0 4px ${({ theme: t }) => t.colors.primaryLight};
    }
    &::-moz-range-thumb {
      box-shadow: 0 0 0 4px ${({ theme: t }) => t.colors.primaryLight};
    }
  }

  &:active:not([disabled]) {
    &::-webkit-slider-runnable-track {
      box-shadow: 0 0 0 2px ${({ theme: t }) => t.colors.primaryLight};
    }
    &::-webkit-slider-thumb {
      box-shadow: 0 0 0 2px ${({ theme: t }) => t.colors.primaryLight};
    }
    &::-moz-range-track {
      box-shadow: 0 0 0 2px ${({ theme: t }) => t.colors.primaryLight};
    }
    &::-moz-range-thumb {
      box-shadow: 0 0 0 2px ${({ theme: t }) => t.colors.primaryLight};
    }
  }

  ${({ disabled: t, theme: a }) => t && `
		cursor: not-allowed;

		&::-webkit-slider-runnable-track {
			background: ${a.colors.grayLight};
			cursor: not-allowed;
		}

		&::-moz-range-track {
			background: ${a.colors.grayLight};
			cursor: not-allowed;
		}

		&::-webkit-slider-thumb {
			background: ${a.colors.gray};
			cursor: not-allowed;
		}

		&::-moz-range-thumb {
			background: ${a.colors.gray};
			cursor: not-allowed;
		}
	`}

  ${({ $fullWidth: t }) => _1(!!t)}

	${({ $size: t }) => t === "big" ? `
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
function co1({ ...t }, a) {
  return /* @__PURE__ */ w.jsxs(
    oo1,
    {
      $fullWidth: t.$fullWidth,
      className: t.$wrapperClassName,
      children: [
        t.$label && /* @__PURE__ */ w.jsx(ee, { htmlFor: t.id, children: t.$label }),
        /* @__PURE__ */ w.jsx(no1, { ...t, type: "range", ref: a })
      ]
    }
  );
}
const Go1 = J(co1), ro1 = W.select`
  ${v1};
  ${J2};
  font-family: inherit;
  display: inline-block;
  padding: 0 15px;
  border-radius: ${({ theme: t }) => t.spacing.radius.xs};
  font-weight: 400;
  white-space: nowrap;
  hyphens: auto;
  color: ${({ theme: t }) => t.colors.dark};
  background: ${({ theme: t }) => t.colors.light};
  border: solid 2px ${({ theme: t }) => t.colors.grayLight};
  box-shadow: 0 0 0 0px ${({ theme: t }) => t.colors.primaryLight};
  transition: all 0.3s ease;

  &::placeholder {
    color: ${({ theme: t }) => t.colors.gray};
  }

  @media (hover: hover) {
    &:hover:not([disabled]) {
      border-color: ${({ theme: t }) => t.colors.primary};
    }
  }

  &:focus:not([disabled]) {
    box-shadow: 0 0 0 4px ${({ theme: t }) => t.colors.primaryLight};
    border-color: ${({ theme: t }) => t.colors.primary};
  }

  &:active:not([disabled]) {
    box-shadow: 0 0 0 2px ${({ theme: t }) => t.colors.primaryLight};
  }

  ${({ $size: t }) => et(t)}

  ${({ $size: t, theme: a }) => t === "big" ? `font-size: ${a.fontSizes.inputBig.lg};` : `font-size: ${a.fontSizes.input.lg};`}

	${({ $error: t, $success: a, theme: o }) => F1(
  !!t,
  !!a,
  o
)}

	${({ disabled: t, theme: a }) => t && `cursor: not-allowed;
		background: ${a.colors.grayLight};
		border-color: ${a.colors.gray};
		color: ${a.colors.gray};
	`}

	${({ $fullWidth: t }) => _1(!!t)}
`, ho1 = W.span`
    position: relative;
    ${({ $fullWidth: t }) => _1(!!t)}

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
function do1({ ...t }, a) {
  return /* @__PURE__ */ w.jsxs(
    ye,
    {
      $fullWidth: t.$fullWidth,
      $label: t.$label,
      className: t.$wrapperClassName,
      children: [
        t.$label && /* @__PURE__ */ w.jsx(ee, { htmlFor: t.id, children: t.$label }),
        /* @__PURE__ */ w.jsxs(ho1, { $fullWidth: t.$fullWidth, children: [
          /* @__PURE__ */ w.jsx(ro1, { ...t, ref: a, children: t.children }),
          /* @__PURE__ */ w.jsx(Wo, {})
        ] })
      ]
    }
  );
}
const Xo1 = J(do1), J0 = (t, a) => a ? `display: inline-block;
			max-height: 0;
			min-width: ${t}px;
			max-width: ${t}px;` : `display: block;
			min-height: ${t}px;
			max-height: ${t}px;`;
function io1(t) {
  return Object.keys(t).filter((a) => a.startsWith("$")).map((a) => {
    const o = a.substring(1);
    return t[a] && P(o) + `{ ${J0(t[a], t.$horizontal || !1)} }`;
  }).join("");
}
const so1 = W.span`
  ${({ $horizontal: t, $size: a }) => `
		${a && a !== "none" && J0(a, t || !1)};
		${a === "none" && "display: none;"};
	`}
  ${(t) => io1(t)}
`;
function yo1({ ...t }, a) {
  return /* @__PURE__ */ w.jsx(so1, { ...t, ref: a });
}
const Yo1 = J(yo1), po1 = W.textarea`
  ${v1};
  ${J2};
  font-family: inherit;
  display: inline-block;
  padding: 15px;
  border-radius: ${({ theme: t }) => t.spacing.radius.xs};
  font-weight: 400;
  white-space: break-spaces;
  hyphens: none;
  color: ${({ theme: t }) => t.colors.dark};
  background: ${({ theme: t }) => t.colors.light};
  border: solid 2px ${({ theme: t }) => t.colors.grayLight};
  box-shadow: 0 0 0 0px ${({ theme: t }) => t.colors.primaryLight};
  transition: all 0.3s ease;
  min-height: 80px;

  &::placeholder {
    color: ${({ theme: t }) => t.colors.gray};
  }

  @media (hover: hover) {
    &:hover:not([disabled]) {
      border-color: ${({ theme: t }) => t.colors.primary};
    }
  }

  &:focus:not([disabled]) {
    box-shadow: 0 0 0 4px ${({ theme: t }) => t.colors.primaryLight};
    border-color: ${({ theme: t }) => t.colors.primary};
  }

  &:active:not([disabled]) {
    box-shadow: 0 0 0 2px ${({ theme: t }) => t.colors.primaryLight};
  }

  ${({ $size: t, theme: a }) => t === "big" ? `font-size: ${a.fontSizes.inputBig.lg};
			line-height: ${a.lineHeights.text.lg};
	` : `font-size: ${a.fontSizes.input.lg};
			line-height: ${a.lineHeights.text.lg};`}

  ${({ $error: t, $success: a, theme: o }) => F1(
  !!t,
  !!a,
  o
)}

	${({ disabled: t, theme: a }) => t && `cursor: not-allowed;
		background: ${a.colors.grayLight};
		border-color: ${a.colors.gray};
		color: ${a.colors.gray};
	`}

	${({ $fullWidth: t }) => _1(!!t)}
`;
function ko1({ ...t }, a) {
  return /* @__PURE__ */ w.jsxs(
    ye,
    {
      $fullWidth: t.$fullWidth,
      $label: t.$label,
      className: t.$wrapperClassName,
      children: [
        t.$label && /* @__PURE__ */ w.jsx(ee, { htmlFor: t.id, $label: t.$label, children: t.$label }),
        /* @__PURE__ */ w.jsx(po1, { ...t, ref: a, children: t.children })
      ]
    }
  );
}
const Ko1 = J(ko1), lo1 = W.span`
  display: inline-block;
  margin: auto 0;
  position: relative;
  vertical-align: middle;
`, uo1 = W.span`
  display: block;
  border: solid 2px ${({ theme: t }) => t.colors.grayLight};
  background: ${({ theme: t }) => t.colors.light};
  border-radius: ${({ theme: t }) => t.spacing.radius.xl};
  pointer-events: none;
  transition: all 0.3s ease;
  box-shadow: 0 0 0 0 ${({ theme: t }) => t.colors.primaryLight};
  transform: none;
  width: ${({ $size: t }) => t === "big" ? "56px" : "46px"};
  height: ${({ $size: t }) => t === "big" ? "32px" : "22px"};

  ${({ $error: t, $success: a, theme: o }) => F1(
  !!t,
  !!a,
  o
)}

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
    border-radius: ${({ theme: t }) => t.spacing.radius.xl};
    background: ${({ theme: t }) => t.colors.light};
    transition: all 0.3s ease;
  }

  &::after {
    left: 0;
    top: 0;
    border-radius: 50%;
    transition: all 0.3s ease;
    transform: translateX(0);
    background: ${({ theme: t }) => t.colors.primary};
    width: ${({ $size: t }) => t === "big" ? "32px" : "22px"};
    height: ${({ $size: t }) => t === "big" ? "32px" : "22px"};
  }
`, Mo1 = W.input`
  ${v1};
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
      background: ${({ theme: t }) => t.colors.primaryLight};
    }

    &::after {
      transform: translateX(25px);
    }
  }

  @media (hover: hover) {
    &:hover:not([disabled]) ~ .fake-toggle {
      border-color: ${({ theme: t }) => t.colors.primary};
    }
  }

  &:focus:not([disabled]) ~ .fake-toggle {
    outline: none;
    border-color: ${({ theme: t }) => t.colors.primary};
    box-shadow: 0 0 0 4px ${({ theme: t }) => t.colors.primaryLight};
  }

  &:active:not([disabled]) ~ .fake-toggle {
    box-shadow: 0 0 0 2px ${({ theme: t }) => t.colors.primaryLight};
  }

  ${({ disabled: t, theme: a }) => t && `cursor: not-allowed;

		& ~ .fake-toggle {
			border-color: ${a.colors.gray};

			&::before {
				background: ${a.colors.grayLight};
			}

			&::after {
				background: ${a.colors.gray};
			}
		}`}
`;
function fo1({ type: t = "checkbox", ...a }, o) {
  return /* @__PURE__ */ w.jsxs(
    ye,
    {
      $fullWidth: a.$fullWidth,
      $label: a.$label,
      className: a.$wrapperClassName,
      children: [
        /* @__PURE__ */ w.jsxs(lo1, { children: [
          /* @__PURE__ */ w.jsx(Mo1, { ...a, type: t, ref: o }),
          /* @__PURE__ */ w.jsx(
            uo1,
            {
              $error: a.$error,
              $success: a.$success,
              className: "fake-toggle",
              $size: a.$size
            }
          )
        ] }),
        a.$label && /* @__PURE__ */ w.jsx(ee, { htmlFor: a.id, children: a.$label })
      ]
    }
  );
}
const Qo1 = J(fo1);
export {
  Oo1 as Box,
  Do1 as Button,
  To1 as CherryThemeProvider,
  Io1 as Col,
  tn as Container,
  Fo1 as Flex,
  Bo as GlobalStyles,
  Bo1 as Grid,
  Uo1 as Icon,
  Wo as IconArrow,
  Zo as IconCalendar,
  Uo as IconCheck,
  Wo1 as Input,
  Zo1 as MaxWidth,
  Go1 as Range,
  Xo1 as Select,
  Yo1 as Space,
  vo1 as StyledComponentsRegistry,
  ho1 as StyledIconWrapper,
  ye as StyledInputWrapper,
  ee as StyledLabel,
  Ko1 as Textarea,
  Qo as ThemeContext,
  Qo1 as Toggle,
  Q2 as breakpoints,
  Un as buttonStyles,
  Go as colors,
  Xo as colorsDark,
  B0 as fontSizes,
  F0 as fonts,
  et as formElementHeightStyles,
  _1 as fullWidthStyles,
  V1 as generateColSpanStyles,
  C1 as generateColsStyles,
  a1 as generateGapStyles,
  E1 as generateJustifyContentStyles,
  R1 as generatePaddingStyles,
  U0 as lineHeights,
  P as mq,
  v1 as resetButton,
  J2 as resetInput,
  Yo as shadows,
  Ko as shadowsDark,
  I0 as spacing,
  F1 as statusBorderStyles,
  Co1 as styledBlockquote,
  Ro1 as styledButton,
  Eo1 as styledButtonBig,
  Vo1 as styledCode,
  wo1 as styledH1,
  No1 as styledH2,
  $o1 as styledH3,
  zo1 as styledH4,
  jo1 as styledH5,
  qo1 as styledH6,
  _o1 as styledHero1,
  xo1 as styledHero2,
  bo1 as styledHero3,
  Lo1 as styledInput,
  Po1 as styledInputBig,
  So1 as styledSmall,
  Ho1 as styledStrong,
  Ao1 as styledText,
  pe as theme,
  go1 as themeDark
};
