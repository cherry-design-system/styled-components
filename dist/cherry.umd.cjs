(function(h,w){typeof exports=="object"&&typeof module<"u"?w(exports,require("react")):typeof define=="function"&&define.amd?define(["exports","react"],w):(h=typeof globalThis<"u"?globalThis:h||self,w(h.Cherry={},h.React))})(this,function(h,w){"use strict";function Ho(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var ut={exports:{}},tt={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Fr;function Bo(){if(Fr)return tt;Fr=1;var e=Symbol.for("react.transitional.element"),t=Symbol.for("react.fragment");function r(n,o,i){var s=null;if(i!==void 0&&(s=""+i),o.key!==void 0&&(s=""+o.key),"key"in o){i={};for(var c in o)c!=="key"&&(i[c]=o[c])}else i=o;return o=i.ref,{$$typeof:e,type:n,key:s,ref:o!==void 0?o:null,props:i}}return tt.Fragment=t,tt.jsx=r,tt.jsxs=r,tt}var rt={};/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ur;function Wo(){return Ur||(Ur=1,process.env.NODE_ENV!=="production"&&function(){function e(a){if(a==null)return null;if(typeof a=="function")return a.$$typeof===He?null:a.displayName||a.name||null;if(typeof a=="string")return a;switch(a){case R:return"Fragment";case D:return"Portal";case G:return"Profiler";case $:return"StrictMode";case Ae:return"Suspense";case ye:return"SuspenseList"}if(typeof a=="object")switch(typeof a.tag=="number"&&console.error("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."),a.$$typeof){case ge:return(a.displayName||"Context")+".Provider";case X:return(a._context.displayName||"Context")+".Consumer";case Oe:var b=a.render;return a=a.displayName,a||(a=b.displayName||b.name||"",a=a!==""?"ForwardRef("+a+")":"ForwardRef"),a;case ze:return b=a.displayName||null,b!==null?b:e(a.type)||"Memo";case qe:b=a._payload,a=a._init;try{return e(a(b))}catch{}}return null}function t(a){return""+a}function r(a){try{t(a);var b=!1}catch{b=!0}if(b){b=console;var x=b.error,N=typeof Symbol=="function"&&Symbol.toStringTag&&a[Symbol.toStringTag]||a.constructor.name||"Object";return x.call(b,"The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",N),t(a)}}function n(){}function o(){if(ie===0){be=console.log,de=console.info,xe=console.warn,ae=console.error,d=console.group,f=console.groupCollapsed,g=console.groupEnd;var a={configurable:!0,enumerable:!0,value:n,writable:!0};Object.defineProperties(console,{info:a,log:a,warn:a,error:a,group:a,groupCollapsed:a,groupEnd:a})}ie++}function i(){if(ie--,ie===0){var a={configurable:!0,enumerable:!0,writable:!0};Object.defineProperties(console,{log:Q({},a,{value:be}),info:Q({},a,{value:de}),warn:Q({},a,{value:xe}),error:Q({},a,{value:ae}),group:Q({},a,{value:d}),groupCollapsed:Q({},a,{value:f}),groupEnd:Q({},a,{value:g})})}0>ie&&console.error("disabledDepth fell below zero. This is a bug in React. Please file an issue.")}function s(a){if(A===void 0)try{throw Error()}catch(x){var b=x.stack.trim().match(/\n( *(at )?)/);A=b&&b[1]||"",z=-1<x.stack.indexOf(`
    at`)?" (<anonymous>)":-1<x.stack.indexOf("@")?"@unknown:0:0":""}return`
`+A+a+z}function c(a,b){if(!a||ee)return"";var x=fe.get(a);if(x!==void 0)return x;ee=!0,x=Error.prepareStackTrace,Error.prepareStackTrace=void 0;var N=null;N=Y.H,Y.H=null,o();try{var J={DetermineComponentFrameRoot:function(){try{if(b){var Ce=function(){throw Error()};if(Object.defineProperty(Ce.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(Ce,[])}catch(we){var Xt=we}Reflect.construct(a,[],Ce)}else{try{Ce.call()}catch(we){Xt=we}a.call(Ce.prototype)}}else{try{throw Error()}catch(we){Xt=we}(Ce=a())&&typeof Ce.catch=="function"&&Ce.catch(function(){})}}catch(we){if(we&&Xt&&typeof we.stack=="string")return[we.stack,Xt.stack]}return[null,null]}};J.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var W=Object.getOwnPropertyDescriptor(J.DetermineComponentFrameRoot,"name");W&&W.configurable&&Object.defineProperty(J.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var T=J.DetermineComponentFrameRoot(),ve=T[0],et=T[1];if(ve&&et){var te=ve.split(`
`),Be=et.split(`
`);for(T=W=0;W<te.length&&!te[W].includes("DetermineComponentFrameRoot");)W++;for(;T<Be.length&&!Be[T].includes("DetermineComponentFrameRoot");)T++;if(W===te.length||T===Be.length)for(W=te.length-1,T=Be.length-1;1<=W&&0<=T&&te[W]!==Be[T];)T--;for(;1<=W&&0<=T;W--,T--)if(te[W]!==Be[T]){if(W!==1||T!==1)do if(W--,T--,0>T||te[W]!==Be[T]){var ct=`
`+te[W].replace(" at new "," at ");return a.displayName&&ct.includes("<anonymous>")&&(ct=ct.replace("<anonymous>",a.displayName)),typeof a=="function"&&fe.set(a,ct),ct}while(1<=W&&0<=T);break}}}finally{ee=!1,Y.H=N,i(),Error.prepareStackTrace=x}return te=(te=a?a.displayName||a.name:"")?s(te):"",typeof a=="function"&&fe.set(a,te),te}function u(a){if(a==null)return"";if(typeof a=="function"){var b=a.prototype;return c(a,!(!b||!b.isReactComponent))}if(typeof a=="string")return s(a);switch(a){case Ae:return s("Suspense");case ye:return s("SuspenseList")}if(typeof a=="object")switch(a.$$typeof){case Oe:return a=c(a.render,!1),a;case ze:return u(a.type);case qe:b=a._payload,a=a._init;try{return u(a(b))}catch{}}return""}function l(){var a=Y.A;return a===null?null:a.getOwner()}function p(a){if(le.call(a,"key")){var b=Object.getOwnPropertyDescriptor(a,"key").get;if(b&&b.isReactWarning)return!1}return a.key!==void 0}function m(a,b){function x(){Qe||(Qe=!0,console.error("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",b))}x.isReactWarning=!0,Object.defineProperty(a,"key",{get:x,configurable:!0})}function y(){var a=e(this.type);return Mo[a]||(Mo[a]=!0,console.error("Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release.")),a=this.props.ref,a!==void 0?a:null}function S(a,b,x,N,J,W){return x=W.ref,a={$$typeof:k,type:a,key:b,props:W,_owner:J},(x!==void 0?x:null)!==null?Object.defineProperty(a,"ref",{enumerable:!1,get:y}):Object.defineProperty(a,"ref",{enumerable:!1,value:null}),a._store={},Object.defineProperty(a._store,"validated",{configurable:!1,enumerable:!1,writable:!0,value:0}),Object.defineProperty(a,"_debugInfo",{configurable:!1,enumerable:!1,writable:!0,value:null}),Object.freeze&&(Object.freeze(a.props),Object.freeze(a)),a}function O(a,b,x,N,J,W){if(typeof a=="string"||typeof a=="function"||a===R||a===G||a===$||a===Ae||a===ye||a===at||typeof a=="object"&&a!==null&&(a.$$typeof===qe||a.$$typeof===ze||a.$$typeof===ge||a.$$typeof===X||a.$$typeof===Oe||a.$$typeof===K||a.getModuleId!==void 0)){var T=b.children;if(T!==void 0)if(N)if(me(T)){for(N=0;N<T.length;N++)j(T[N],a);Object.freeze&&Object.freeze(T)}else console.error("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");else j(T,a)}else T="",(a===void 0||typeof a=="object"&&a!==null&&Object.keys(a).length===0)&&(T+=" You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports."),a===null?N="null":me(a)?N="array":a!==void 0&&a.$$typeof===k?(N="<"+(e(a.type)||"Unknown")+" />",T=" Did you accidentally export a JSX literal instead of a component?"):N=typeof a,console.error("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s",N,T);if(le.call(b,"key")){T=e(a);var ve=Object.keys(b).filter(function(te){return te!=="key"});N=0<ve.length?"{key: someKey, "+ve.join(": ..., ")+": ...}":"{key: someKey}",zo[T+N]||(ve=0<ve.length?"{"+ve.join(": ..., ")+": ...}":"{}",console.error(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,N,T,ve,T),zo[T+N]=!0)}if(T=null,x!==void 0&&(r(x),T=""+x),p(b)&&(r(b.key),T=""+b.key),"key"in b){x={};for(var et in b)et!=="key"&&(x[et]=b[et])}else x=b;return T&&m(x,typeof a=="function"?a.displayName||a.name||"Unknown":a),S(a,T,W,J,l(),x)}function j(a,b){if(typeof a=="object"&&a&&a.$$typeof!==st){if(me(a))for(var x=0;x<a.length;x++){var N=a[x];B(N)&&M(N,b)}else if(B(a))a._store&&(a._store.validated=1);else if(a===null||typeof a!="object"?x=null:(x=Te&&a[Te]||a["@@iterator"],x=typeof x=="function"?x:null),typeof x=="function"&&x!==a.entries&&(x=x.call(a),x!==a))for(;!(a=x.next()).done;)B(a.value)&&M(a.value,b)}}function B(a){return typeof a=="object"&&a!==null&&a.$$typeof===k}function M(a,b){if(a._store&&!a._store.validated&&a.key==null&&(a._store.validated=1,b=_(b),!qo[b])){qo[b]=!0;var x="";a&&a._owner!=null&&a._owner!==l()&&(x=null,typeof a._owner.tag=="number"?x=e(a._owner.type):typeof a._owner.name=="string"&&(x=a._owner.name),x=" It was passed a child from "+x+".");var N=Y.getCurrentStack;Y.getCurrentStack=function(){var J=u(a.type);return N&&(J+=N()||""),J},console.error('Each child in a list should have a unique "key" prop.%s%s See https://react.dev/link/warning-keys for more information.',b,x),Y.getCurrentStack=N}}function _(a){var b="",x=l();return x&&(x=e(x.type))&&(b=`

Check the render method of \``+x+"`."),b||(a=e(a))&&(b=`

Check the top-level render call using <`+a+">."),b}var E=w,k=Symbol.for("react.transitional.element"),D=Symbol.for("react.portal"),R=Symbol.for("react.fragment"),$=Symbol.for("react.strict_mode"),G=Symbol.for("react.profiler"),X=Symbol.for("react.consumer"),ge=Symbol.for("react.context"),Oe=Symbol.for("react.forward_ref"),Ae=Symbol.for("react.suspense"),ye=Symbol.for("react.suspense_list"),ze=Symbol.for("react.memo"),qe=Symbol.for("react.lazy"),at=Symbol.for("react.offscreen"),Te=Symbol.iterator,He=Symbol.for("react.client.reference"),Y=E.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,le=Object.prototype.hasOwnProperty,Q=Object.assign,K=Symbol.for("react.client.reference"),me=Array.isArray,ie=0,be,de,xe,ae,d,f,g;n.__reactDisabledLog=!0;var A,z,ee=!1,fe=new(typeof WeakMap=="function"?WeakMap:Map),st=Symbol.for("react.client.reference"),Qe,Mo={},zo={},qo={};rt.Fragment=R,rt.jsx=function(a,b,x,N,J){return O(a,b,x,!1,N,J)},rt.jsxs=function(a,b,x,N,J){return O(a,b,x,!0,N,J)}}()),rt}var Gr;function Fo(){return Gr||(Gr=1,process.env.NODE_ENV==="production"?ut.exports=Bo():ut.exports=Wo()),ut.exports}var v=Fo(),lt={exports:{}},Kt={},Jt={},Yr;function Uo(){if(Yr)return Jt;Yr=1;function e(t){return t&&t.__esModule?t:{default:t}}return Jt._=e,Jt}var Vr;function Go(){return Vr||(Vr=1,function(e){"use client";Object.defineProperty(e,"__esModule",{value:!0});function t(l,p){for(var m in p)Object.defineProperty(l,m,{enumerable:!0,get:p[m]})}t(e,{AppRouterContext:function(){return o},GlobalLayoutRouterContext:function(){return s},LayoutRouterContext:function(){return i},MissingSlotContext:function(){return u},TemplateContext:function(){return c}});const n=Uo()._(w),o=n.default.createContext(null),i=n.default.createContext(null),s=n.default.createContext(null),c=n.default.createContext(null);process.env.NODE_ENV!=="production"&&(o.displayName="AppRouterContext",i.displayName="LayoutRouterContext",s.displayName="GlobalLayoutRouterContext",c.displayName="TemplateContext");const u=n.default.createContext(new Set)}(Kt)),Kt}var Zt={},Xr;function Yo(){return Xr||(Xr=1,function(e){"use client";Object.defineProperty(e,"__esModule",{value:!0});function t(s,c){for(var u in c)Object.defineProperty(s,u,{enumerable:!0,get:c[u]})}t(e,{PathParamsContext:function(){return i},PathnameContext:function(){return o},SearchParamsContext:function(){return n}});const r=w,n=(0,r.createContext)(null),o=(0,r.createContext)(null),i=(0,r.createContext)(null);process.env.NODE_ENV!=="production"&&(n.displayName="SearchParamsContext",o.displayName="PathnameContext",i.displayName="PathParamsContext")}(Zt)),Zt}var dt={exports:{}},Kr;function Vo(){return Kr||(Kr=1,function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"getSegmentValue",{enumerable:!0,get:function(){return r}});function r(n){return Array.isArray(n)?n[1]:n}(typeof t.default=="function"||typeof t.default=="object"&&t.default!==null)&&typeof t.default.__esModule>"u"&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)}(dt,dt.exports)),dt.exports}var Qt={},Jr;function Xo(){return Jr||(Jr=1,function(e){Object.defineProperty(e,"__esModule",{value:!0});function t(c,u){for(var l in u)Object.defineProperty(c,l,{enumerable:!0,get:u[l]})}t(e,{DEFAULT_SEGMENT_KEY:function(){return s},PAGE_SEGMENT_KEY:function(){return i},addSearchParamsIfPageSegment:function(){return o},isGroupSegment:function(){return r},isParallelRouteSegment:function(){return n}});function r(c){return c[0]==="("&&c.endsWith(")")}function n(c){return c.startsWith("@")&&c!=="@children"}function o(c,u){if(c.includes(i)){const p=JSON.stringify(u);return p!=="{}"?i+"?"+p:i}return c}const i="__PAGE__",s="__DEFAULT__"}(Qt)),Qt}var ft={exports:{}},pt={exports:{}},er={},tr={},rr={},Zr;function nr(){return Zr||(Zr=1,function(e){Object.defineProperty(e,"__esModule",{value:!0});function t(u,l){for(var p in l)Object.defineProperty(u,p,{enumerable:!0,get:l[p]})}t(e,{bindSnapshot:function(){return s},createAsyncLocalStorage:function(){return i},createSnapshot:function(){return c}});const r=new Error("Invariant: AsyncLocalStorage accessed in runtime where it is not available");class n{disable(){throw r}getStore(){}run(){throw r}exit(){throw r}enterWith(){throw r}static bind(l){return l}}const o=typeof globalThis<"u"&&globalThis.AsyncLocalStorage;function i(){return o?new o:new n}function s(u){return o?o.bind(u):n.bind(u)}function c(){return o?o.snapshot():function(u,...l){return u(...l)}}}(rr)),rr}var Qr;function Ko(){return Qr||(Qr=1,function(e){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"actionAsyncStorageInstance",{enumerable:!0,get:function(){return r}});const r=(0,nr().createAsyncLocalStorage)()}(tr)),tr}var en;function Jo(){return en||(en=1,function(e){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"actionAsyncStorage",{enumerable:!0,get:function(){return t.actionAsyncStorageInstance}});const t=Ko()}(er)),er}var ht={exports:{}},tn;function rn(){return tn||(tn=1,function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"RedirectStatusCode",{enumerable:!0,get:function(){return r}});var r=function(n){return n[n.SeeOther=303]="SeeOther",n[n.TemporaryRedirect=307]="TemporaryRedirect",n[n.PermanentRedirect=308]="PermanentRedirect",n}({});(typeof t.default=="function"||typeof t.default=="object"&&t.default!==null)&&typeof t.default.__esModule>"u"&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)}(ht,ht.exports)),ht.exports}var gt={exports:{}},nn;function or(){return nn||(nn=1,function(e,t){Object.defineProperty(t,"__esModule",{value:!0});function r(c,u){for(var l in u)Object.defineProperty(c,l,{enumerable:!0,get:u[l]})}r(t,{REDIRECT_ERROR_CODE:function(){return o},RedirectType:function(){return i},isRedirectError:function(){return s}});const n=rn(),o="NEXT_REDIRECT";var i=function(c){return c.push="push",c.replace="replace",c}({});function s(c){if(typeof c!="object"||c===null||!("digest"in c)||typeof c.digest!="string")return!1;const u=c.digest.split(";"),[l,p]=u,m=u.slice(2,-2).join(";"),y=u.at(-2),S=Number(y);return l===o&&(p==="replace"||p==="push")&&typeof m=="string"&&!isNaN(S)&&S in n.RedirectStatusCode}(typeof t.default=="function"||typeof t.default=="object"&&t.default!==null)&&typeof t.default.__esModule>"u"&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)}(gt,gt.exports)),gt.exports}var on;function Zo(){return on||(on=1,function(e,t){Object.defineProperty(t,"__esModule",{value:!0});function r(y,S){for(var O in S)Object.defineProperty(y,O,{enumerable:!0,get:S[O]})}r(t,{getRedirectError:function(){return s},getRedirectStatusCodeFromError:function(){return m},getRedirectTypeFromError:function(){return p},getURLFromRedirectError:function(){return l},permanentRedirect:function(){return u},redirect:function(){return c}});const n=Jo(),o=rn(),i=or();function s(y,S,O){O===void 0&&(O=o.RedirectStatusCode.TemporaryRedirect);const j=new Error(i.REDIRECT_ERROR_CODE);return j.digest=i.REDIRECT_ERROR_CODE+";"+S+";"+y+";"+O+";",j}function c(y,S){const O=n.actionAsyncStorage.getStore(),j=S||(O!=null&&O.isAction?i.RedirectType.push:i.RedirectType.replace);throw s(y,j,o.RedirectStatusCode.TemporaryRedirect)}function u(y,S){throw S===void 0&&(S=i.RedirectType.replace),s(y,S,o.RedirectStatusCode.PermanentRedirect)}function l(y){return(0,i.isRedirectError)(y)?y.digest.split(";").slice(2,-2).join(";"):null}function p(y){if(!(0,i.isRedirectError)(y))throw new Error("Not a redirect error");return y.digest.split(";",2)[1]}function m(y){if(!(0,i.isRedirectError)(y))throw new Error("Not a redirect error");return Number(y.digest.split(";").at(-2))}(typeof t.default=="function"||typeof t.default=="object"&&t.default!==null)&&typeof t.default.__esModule>"u"&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)}(pt,pt.exports)),pt.exports}var yt={exports:{}},mt={exports:{}},an;function bt(){return an||(an=1,function(e,t){Object.defineProperty(t,"__esModule",{value:!0});function r(l,p){for(var m in p)Object.defineProperty(l,m,{enumerable:!0,get:p[m]})}r(t,{HTTPAccessErrorStatus:function(){return n},HTTP_ERROR_FALLBACK_ERROR_CODE:function(){return i},getAccessFallbackErrorTypeByStatus:function(){return u},getAccessFallbackHTTPStatus:function(){return c},isHTTPAccessFallbackError:function(){return s}});const n={NOT_FOUND:404,FORBIDDEN:403,UNAUTHORIZED:401},o=new Set(Object.values(n)),i="NEXT_HTTP_ERROR_FALLBACK";function s(l){if(typeof l!="object"||l===null||!("digest"in l)||typeof l.digest!="string")return!1;const[p,m]=l.digest.split(";");return p===i&&o.has(Number(m))}function c(l){const p=l.digest.split(";")[1];return Number(p)}function u(l){switch(l){case 401:return"unauthorized";case 403:return"forbidden";case 404:return"not-found";default:return}}(typeof t.default=="function"||typeof t.default=="object"&&t.default!==null)&&typeof t.default.__esModule>"u"&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)}(mt,mt.exports)),mt.exports}var sn;function Qo(){return sn||(sn=1,function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"notFound",{enumerable:!0,get:function(){return o}});const n=""+bt().HTTP_ERROR_FALLBACK_ERROR_CODE+";404";function o(){const i=new Error(n);throw i.digest=n,i}(typeof t.default=="function"||typeof t.default=="object"&&t.default!==null)&&typeof t.default.__esModule>"u"&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)}(yt,yt.exports)),yt.exports}var xt={exports:{}},cn;function ei(){return cn||(cn=1,function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"forbidden",{enumerable:!0,get:function(){return o}});const n=""+bt().HTTP_ERROR_FALLBACK_ERROR_CODE+";403";function o(){if(!process.env.__NEXT_EXPERIMENTAL_AUTH_INTERRUPTS)throw new Error("`forbidden()` is experimental and only allowed to be enabled when `experimental.authInterrupts` is enabled.");const i=new Error(n);throw i.digest=n,i}(typeof t.default=="function"||typeof t.default=="object"&&t.default!==null)&&typeof t.default.__esModule>"u"&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)}(xt,xt.exports)),xt.exports}var vt={exports:{}},un;function ti(){return un||(un=1,function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"unauthorized",{enumerable:!0,get:function(){return o}});const n=""+bt().HTTP_ERROR_FALLBACK_ERROR_CODE+";401";function o(){if(!process.env.__NEXT_EXPERIMENTAL_AUTH_INTERRUPTS)throw new Error("`unauthorized()` is experimental and only allowed to be used when `experimental.authInterrupts` is enabled.");const i=new Error(n);throw i.digest=n,i}(typeof t.default=="function"||typeof t.default=="object"&&t.default!==null)&&typeof t.default.__esModule>"u"&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)}(vt,vt.exports)),vt.exports}var wt={exports:{}},ir={},St={exports:{}},ln;function dn(){return ln||(ln=1,function(e,t){Object.defineProperty(t,"__esModule",{value:!0});function r(s,c){for(var u in c)Object.defineProperty(s,u,{enumerable:!0,get:c[u]})}r(t,{DynamicServerError:function(){return o},isDynamicServerError:function(){return i}});const n="DYNAMIC_SERVER_USAGE";class o extends Error{constructor(c){super("Dynamic server usage: "+c),this.description=c,this.digest=n}}function i(s){return typeof s!="object"||s===null||!("digest"in s)||typeof s.digest!="string"?!1:s.digest===n}(typeof t.default=="function"||typeof t.default=="object"&&t.default!==null)&&typeof t.default.__esModule>"u"&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)}(St,St.exports)),St.exports}var ar={},fn;function sr(){return fn||(fn=1,function(e){Object.defineProperty(e,"__esModule",{value:!0});function t(i,s){for(var c in s)Object.defineProperty(i,c,{enumerable:!0,get:s[c]})}t(e,{BailoutToCSRError:function(){return n},isBailoutToCSRError:function(){return o}});const r="BAILOUT_TO_CLIENT_SIDE_RENDERING";class n extends Error{constructor(s){super("Bail out to client-side rendering: "+s),this.reason=s,this.digest=r}}function o(i){return typeof i!="object"||i===null||!("digest"in i)?!1:i.digest===r}}(ar)),ar}var _t={exports:{}},pn;function hn(){return pn||(pn=1,function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"isNextRouterError",{enumerable:!0,get:function(){return o}});const r=bt(),n=or();function o(i){return(0,n.isRedirectError)(i)||(0,r.isHTTPAccessFallbackError)(i)}(typeof t.default=="function"||typeof t.default=="object"&&t.default!==null)&&typeof t.default.__esModule>"u"&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)}(_t,_t.exports)),_t.exports}var cr={},$t={exports:{}},gn;function ri(){return gn||(gn=1,function(e,t){Object.defineProperty(t,"__esModule",{value:!0});function r(s,c){for(var u in c)Object.defineProperty(s,u,{enumerable:!0,get:c[u]})}r(t,{StaticGenBailoutError:function(){return o},isStaticGenBailoutError:function(){return i}});const n="NEXT_STATIC_GEN_BAILOUT";class o extends Error{constructor(...c){super(...c),this.code=n}}function i(s){return typeof s!="object"||s===null||!("code"in s)?!1:s.code===n}(typeof t.default=="function"||typeof t.default=="object"&&t.default!==null)&&typeof t.default.__esModule>"u"&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)}($t,$t.exports)),$t.exports}var ur={},lr={},yn;function ni(){return yn||(yn=1,function(e){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"workUnitAsyncStorageInstance",{enumerable:!0,get:function(){return r}});const r=(0,nr().createAsyncLocalStorage)()}(lr)),lr}var mn;function oi(){return mn||(mn=1,function(e){Object.defineProperty(e,"__esModule",{value:!0});function t(s,c){for(var u in c)Object.defineProperty(s,u,{enumerable:!0,get:c[u]})}t(e,{getExpectedRequestStore:function(){return n},getPrerenderResumeDataCache:function(){return o},getRenderResumeDataCache:function(){return i},workUnitAsyncStorage:function(){return r.workUnitAsyncStorageInstance}});const r=ni();function n(s){const c=r.workUnitAsyncStorageInstance.getStore();if(c){if(c.type==="request")return c;if(c.type==="prerender"||c.type==="prerender-ppr"||c.type==="prerender-legacy")throw new Error(`\`${s}\` cannot be called inside a prerender. This is a bug in Next.js.`);if(c.type==="cache")throw new Error(`\`${s}\` cannot be called inside "use cache". Call it outside and pass an argument instead. Read more: https://nextjs.org/docs/messages/next-request-in-use-cache`);if(c.type==="unstable-cache")throw new Error(`\`${s}\` cannot be called inside unstable_cache. Call it outside and pass an argument instead. Read more: https://nextjs.org/docs/app/api-reference/functions/unstable_cache`)}throw new Error(`\`${s}\` was called outside a request scope. Read more: https://nextjs.org/docs/messages/next-dynamic-api-wrong-context`)}function o(s){return s.type==="prerender"||s.type==="prerender-ppr"?s.prerenderResumeDataCache:null}function i(s){return s.type!=="prerender-legacy"&&s.type!=="cache"&&s.type!=="unstable-cache"?s.type==="request"?s.renderResumeDataCache:s.prerenderResumeDataCache:null}}(ur)),ur}var dr={},fr={},bn;function ii(){return bn||(bn=1,function(e){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"workAsyncStorageInstance",{enumerable:!0,get:function(){return r}});const r=(0,nr().createAsyncLocalStorage)()}(fr)),fr}var xn;function vn(){return xn||(xn=1,function(e){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"workAsyncStorage",{enumerable:!0,get:function(){return t.workAsyncStorageInstance}});const t=ii()}(dr)),dr}var pr={},wn;function ai(){return wn||(wn=1,function(e){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"makeHangingPromise",{enumerable:!0,get:function(){return t}});function t(n,o){const i=new Promise((s,c)=>{n.addEventListener("abort",()=>{c(new Error(`During prerendering, ${o} rejects when the prerender is complete. Typically these errors are handled by React but if you move ${o} to a different context by using \`setTimeout\`, \`after\`, or similar functions you may observe this error and you should handle it in that context.`))},{once:!0})});return i.catch(r),i}function r(){}}(pr)),pr}var hr={},Sn;function si(){return Sn||(Sn=1,function(e){Object.defineProperty(e,"__esModule",{value:!0});function t(i,s){for(var c in s)Object.defineProperty(i,c,{enumerable:!0,get:s[c]})}t(e,{METADATA_BOUNDARY_NAME:function(){return r},OUTLET_BOUNDARY_NAME:function(){return o},VIEWPORT_BOUNDARY_NAME:function(){return n}});const r="__next_metadata_boundary__",n="__next_viewport_boundary__",o="__next_outlet_boundary__"}(hr)),hr}var _n;function $n(){return _n||(_n=1,function(e){Object.defineProperty(e,"__esModule",{value:!0});function t(d,f){for(var g in f)Object.defineProperty(d,g,{enumerable:!0,get:f[g]})}t(e,{Postpone:function(){return $},abortAndThrowOnSynchronousRequestDataAccess:function(){return D},abortOnSynchronousPlatformIOAccess:function(){return E},accessedDynamicData:function(){return qe},annotateDynamicAccess:function(){return le},consumeDynamicAccess:function(){return at},createDynamicTrackingState:function(){return m},createDynamicValidationState:function(){return y},createPostponedAbortSignal:function(){return Y},formatDynamicAPIAccesses:function(){return Te},getFirstDynamicReason:function(){return S},isDynamicPostpone:function(){return ge},isPrerenderInterruptedError:function(){return ze},markCurrentScopeAsDynamic:function(){return O},postponeWithTracking:function(){return G},throwIfDisallowedDynamic:function(){return ae},throwToInterruptStaticGeneration:function(){return B},trackAllowedDynamicAccess:function(){return de},trackDynamicDataInDynamicRender:function(){return M},trackFallbackParamAccessed:function(){return j},trackSynchronousPlatformIOAccessInDev:function(){return k},trackSynchronousRequestDataAccessInDev:function(){return R},useDynamicRouteParams:function(){return Q}});const r=l(w),n=dn(),o=ri(),i=oi(),s=vn(),c=ai(),u=si();function l(d){return d&&d.__esModule?d:{default:d}}const p=typeof r.default.unstable_postpone=="function";function m(d){return{isDebugDynamicAccesses:d,dynamicAccesses:[],syncDynamicExpression:void 0,syncDynamicErrorWithStack:null}}function y(){return{hasSuspendedDynamic:!1,hasDynamicMetadata:!1,hasDynamicViewport:!1,hasSyncDynamicErrors:!1,dynamicErrors:[]}}function S(d){var f;return(f=d.dynamicAccesses[0])==null?void 0:f.expression}function O(d,f,g){if(!(f&&(f.type==="cache"||f.type==="unstable-cache"))&&!(d.forceDynamic||d.forceStatic)){if(d.dynamicShouldError)throw new o.StaticGenBailoutError(`Route ${d.route} with \`dynamic = "error"\` couldn't be rendered statically because it used \`${g}\`. See more info here: https://nextjs.org/docs/app/building-your-application/rendering/static-and-dynamic#dynamic-rendering`);if(f)if(f.type==="prerender-ppr")G(d.route,g,f.dynamicTracking);else if(f.type==="prerender-legacy"){f.revalidate=0;const A=new n.DynamicServerError(`Route ${d.route} couldn't be rendered statically because it used ${g}. See more info here: https://nextjs.org/docs/messages/dynamic-server-error`);throw d.dynamicUsageDescription=g,d.dynamicUsageStack=A.stack,A}else process.env.NODE_ENV==="development"&&f&&f.type==="request"&&(f.usedDynamic=!0)}}function j(d,f){const g=i.workUnitAsyncStorage.getStore();!g||g.type!=="prerender-ppr"||G(d.route,f,g.dynamicTracking)}function B(d,f,g){const A=new n.DynamicServerError(`Route ${f.route} couldn't be rendered statically because it used \`${d}\`. See more info here: https://nextjs.org/docs/messages/dynamic-server-error`);throw g.revalidate=0,f.dynamicUsageDescription=d,f.dynamicUsageStack=A.stack,A}function M(d,f){if(f){if(f.type==="cache"||f.type==="unstable-cache")return;(f.type==="prerender"||f.type==="prerender-legacy")&&(f.revalidate=0),process.env.NODE_ENV==="development"&&f.type==="request"&&(f.usedDynamic=!0)}}function _(d,f,g){const A=`Route ${d} needs to bail out of prerendering at this point because it used ${f}.`,z=ye(A);g.controller.abort(z);const ee=g.dynamicTracking;ee&&ee.dynamicAccesses.push({stack:ee.isDebugDynamicAccesses?new Error().stack:void 0,expression:f})}function E(d,f,g,A){const z=A.dynamicTracking;return z&&z.syncDynamicErrorWithStack===null&&(z.syncDynamicExpression=f,z.syncDynamicErrorWithStack=g),_(d,f,A)}function k(d){d.prerenderPhase=!1}function D(d,f,g,A){const z=A.dynamicTracking;throw z&&z.syncDynamicErrorWithStack===null&&(z.syncDynamicExpression=f,z.syncDynamicErrorWithStack=g,A.validating===!0&&(z.syncDynamicLogged=!0)),_(d,f,A),ye(`Route ${d} needs to bail out of prerendering at this point because it used ${f}.`)}const R=k;function $({reason:d,route:f}){const g=i.workUnitAsyncStorage.getStore(),A=g&&g.type==="prerender-ppr"?g.dynamicTracking:null;G(f,d,A)}function G(d,f,g){He(),g&&g.dynamicAccesses.push({stack:g.isDebugDynamicAccesses?new Error().stack:void 0,expression:f}),r.default.unstable_postpone(X(d,f))}function X(d,f){return`Route ${d} needs to bail out of prerendering at this point because it used ${f}. React throws this special object to indicate where. It should not be caught by your own try/catch. Learn more: https://nextjs.org/docs/messages/ppr-caught-error`}function ge(d){return typeof d=="object"&&d!==null&&typeof d.message=="string"?Oe(d.message):!1}function Oe(d){return d.includes("needs to bail out of prerendering at this point because it used")&&d.includes("Learn more: https://nextjs.org/docs/messages/ppr-caught-error")}if(Oe(X("%%%","^^^"))===!1)throw new Error("Invariant: isDynamicPostpone misidentified a postpone reason. This is a bug in Next.js");const Ae="NEXT_PRERENDER_INTERRUPTED";function ye(d){const f=new Error(d);return f.digest=Ae,f}function ze(d){return typeof d=="object"&&d!==null&&d.digest===Ae&&"name"in d&&"message"in d&&d instanceof Error}function qe(d){return d.length>0}function at(d,f){return d.dynamicAccesses.push(...f.dynamicAccesses),d.dynamicAccesses}function Te(d){return d.filter(f=>typeof f.stack=="string"&&f.stack.length>0).map(({expression:f,stack:g})=>(g=g.split(`
`).slice(4).filter(A=>!(A.includes("node_modules/next/")||A.includes(" (<anonymous>)")||A.includes(" (node:"))).join(`
`),`Dynamic API Usage Debug - ${f}:
${g}`))}function He(){if(!p)throw new Error("Invariant: React.unstable_postpone is not defined. This suggests the wrong version of React was loaded. This is a bug in Next.js")}function Y(d){He();const f=new AbortController;try{r.default.unstable_postpone(d)}catch(g){f.abort(g)}return f.signal}function le(d,f){const g=f.dynamicTracking;g&&g.dynamicAccesses.push({stack:g.isDebugDynamicAccesses?new Error().stack:void 0,expression:d})}function Q(d){if(typeof window>"u"){const f=s.workAsyncStorage.getStore();if(f&&f.isStaticGeneration&&f.fallbackRouteParams&&f.fallbackRouteParams.size>0){const g=i.workUnitAsyncStorage.getStore();g&&(g.type==="prerender"?r.default.use((0,c.makeHangingPromise)(g.renderSignal,d)):g.type==="prerender-ppr"?G(f.route,d,g.dynamicTracking):g.type==="prerender-legacy"&&B(d,f,g))}}}const K=/\n\s+at Suspense \(<anonymous>\)/,me=new RegExp(`\\n\\s+at ${u.METADATA_BOUNDARY_NAME}[\\n\\s]`),ie=new RegExp(`\\n\\s+at ${u.VIEWPORT_BOUNDARY_NAME}[\\n\\s]`),be=new RegExp(`\\n\\s+at ${u.OUTLET_BOUNDARY_NAME}[\\n\\s]`);function de(d,f,g,A,z){if(!be.test(f))if(me.test(f)){g.hasDynamicMetadata=!0;return}else if(ie.test(f)){g.hasDynamicViewport=!0;return}else if(K.test(f)){g.hasSuspendedDynamic=!0;return}else if(A.syncDynamicErrorWithStack||z.syncDynamicErrorWithStack){g.hasSyncDynamicErrors=!0;return}else{const ee=`Route "${d}": A component accessed data, headers, params, searchParams, or a short-lived cache without a Suspense boundary nor a "use cache" above it. We don't have the exact line number added to error messages yet but you can see which component in the stack below. See more info: https://nextjs.org/docs/messages/next-prerender-missing-suspense`,fe=xe(ee,f);g.dynamicErrors.push(fe);return}}function xe(d,f){const g=new Error(d);return g.stack="Error: "+d+f,g}function ae(d,f,g,A){let z,ee,fe;if(g.syncDynamicErrorWithStack?(z=g.syncDynamicErrorWithStack,ee=g.syncDynamicExpression,fe=g.syncDynamicLogged===!0):A.syncDynamicErrorWithStack?(z=A.syncDynamicErrorWithStack,ee=A.syncDynamicExpression,fe=A.syncDynamicLogged===!0):(z=null,ee=void 0,fe=!1),f.hasSyncDynamicErrors&&z)throw fe||console.error(z),new o.StaticGenBailoutError;const st=f.dynamicErrors;if(st.length){for(let Qe=0;Qe<st.length;Qe++)console.error(st[Qe]);throw new o.StaticGenBailoutError}if(!f.hasSuspendedDynamic){if(f.hasDynamicMetadata)throw z?(console.error(z),new o.StaticGenBailoutError(`Route "${d}" has a \`generateMetadata\` that could not finish rendering before ${ee} was used. Follow the instructions in the error for this expression to resolve.`)):new o.StaticGenBailoutError(`Route "${d}" has a \`generateMetadata\` that depends on Request data (\`cookies()\`, etc...) or external data (\`fetch(...)\`, etc...) but the rest of the route was static or only used cached data (\`"use cache"\`). If you expected this route to be prerenderable update your \`generateMetadata\` to not use Request data and only use cached external data. Otherwise, add \`await connection()\` somewhere within this route to indicate explicitly it should not be prerendered.`);if(f.hasDynamicViewport)throw z?(console.error(z),new o.StaticGenBailoutError(`Route "${d}" has a \`generateViewport\` that could not finish rendering before ${ee} was used. Follow the instructions in the error for this expression to resolve.`)):new o.StaticGenBailoutError(`Route "${d}" has a \`generateViewport\` that depends on Request data (\`cookies()\`, etc...) or external data (\`fetch(...)\`, etc...) but the rest of the route was static or only used cached data (\`"use cache"\`). If you expected this route to be prerenderable update your \`generateViewport\` to not use Request data and only use cached external data. Otherwise, add \`await connection()\` somewhere within this route to indicate explicitly it should not be prerendered.`)}}}(cr)),cr}var En;function ci(){return En||(En=1,function(e){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"isDynamicUsageError",{enumerable:!0,get:function(){return i}});const t=dn(),r=sr(),n=hn(),o=$n(),i=s=>(0,t.isDynamicServerError)(s)||(0,r.isBailoutToCSRError)(s)||(0,n.isNextRouterError)(s)||(0,o.isDynamicPostpone)(s)}(ir)),ir}var gr={},Rn;function ui(){return Rn||(Rn=1,function(e){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"isPostpone",{enumerable:!0,get:function(){return r}});const t=Symbol.for("react.postpone");function r(n){return typeof n=="object"&&n!==null&&n.$$typeof===t}}(gr)),gr}var kn;function li(){return kn||(kn=1,function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"unstable_rethrow",{enumerable:!0,get:function(){return s}});const r=ci(),n=ui(),o=sr(),i=hn();function s(c){if((0,i.isNextRouterError)(c)||(0,o.isBailoutToCSRError)(c)||(0,r.isDynamicUsageError)(c)||(0,n.isPostpone)(c))throw c;c instanceof Error&&"cause"in c&&s(c.cause)}(typeof t.default=="function"||typeof t.default=="object"&&t.default!==null)&&typeof t.default.__esModule>"u"&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)}(wt,wt.exports)),wt.exports}var Pn;function di(){return Pn||(Pn=1,function(e,t){Object.defineProperty(t,"__esModule",{value:!0});function r(m,y){for(var S in y)Object.defineProperty(m,S,{enumerable:!0,get:y[S]})}r(t,{ReadonlyURLSearchParams:function(){return p},RedirectType:function(){return o.RedirectType},forbidden:function(){return s.forbidden},notFound:function(){return i.notFound},permanentRedirect:function(){return n.permanentRedirect},redirect:function(){return n.redirect},unauthorized:function(){return c.unauthorized},unstable_rethrow:function(){return u.unstable_rethrow}});const n=Zo(),o=or(),i=Qo(),s=ei(),c=ti(),u=li();class l extends Error{constructor(){super("Method unavailable on `ReadonlyURLSearchParams`. Read more: https://nextjs.org/docs/app/api-reference/functions/use-search-params#updating-searchparams")}}class p extends URLSearchParams{append(){throw new l}delete(){throw new l}set(){throw new l}sort(){throw new l}}(typeof t.default=="function"||typeof t.default=="object"&&t.default!==null)&&typeof t.default.__esModule>"u"&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)}(ft,ft.exports)),ft.exports}var yr={},mr={},On;function fi(){if(On)return mr;On=1;function e(r){if(typeof WeakMap!="function")return null;var n=new WeakMap,o=new WeakMap;return(e=function(i){return i?o:n})(r)}function t(r,n){if(!n&&r&&r.__esModule)return r;if(r===null||typeof r!="object"&&typeof r!="function")return{default:r};var o=e(n);if(o&&o.has(r))return o.get(r);var i={__proto__:null},s=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var c in r)if(c!=="default"&&Object.prototype.hasOwnProperty.call(r,c)){var u=s?Object.getOwnPropertyDescriptor(r,c):null;u&&(u.get||u.set)?Object.defineProperty(i,c,u):i[c]=r[c]}return i.default=r,o&&o.set(r,i),i}return mr._=t,mr}var An;function pi(){return An||(An=1,function(e){"use client";Object.defineProperty(e,"__esModule",{value:!0});function t(s,c){for(var u in c)Object.defineProperty(s,u,{enumerable:!0,get:c[u]})}t(e,{ServerInsertedHTMLContext:function(){return o},useServerInsertedHTML:function(){return i}});const n=fi()._(w),o=n.default.createContext(null);function i(s){const c=(0,n.useContext)(o);c&&c(s)}}(yr)),yr}var Et={exports:{}},Tn;function hi(){return Tn||(Tn=1,function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"bailoutToClientRendering",{enumerable:!0,get:function(){return o}});const r=sr(),n=vn();function o(i){const s=n.workAsyncStorage.getStore();if(!(s!=null&&s.forceStatic)&&s!=null&&s.isStaticGeneration)throw new r.BailoutToCSRError(i)}(typeof t.default=="function"||typeof t.default=="object"&&t.default!==null)&&typeof t.default.__esModule>"u"&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)}(Et,Et.exports)),Et.exports}var Cn;function gi(){return Cn||(Cn=1,function(e,t){Object.defineProperty(t,"__esModule",{value:!0});function r(_,E){for(var k in E)Object.defineProperty(_,k,{enumerable:!0,get:E[k]})}r(t,{ReadonlyURLSearchParams:function(){return u.ReadonlyURLSearchParams},RedirectType:function(){return u.RedirectType},ServerInsertedHTMLContext:function(){return p.ServerInsertedHTMLContext},forbidden:function(){return u.forbidden},notFound:function(){return u.notFound},permanentRedirect:function(){return u.permanentRedirect},redirect:function(){return u.redirect},unauthorized:function(){return u.unauthorized},unstable_rethrow:function(){return u.unstable_rethrow},useParams:function(){return O},usePathname:function(){return y},useRouter:function(){return S},useSearchParams:function(){return m},useSelectedLayoutSegment:function(){return M},useSelectedLayoutSegments:function(){return B},useServerInsertedHTML:function(){return p.useServerInsertedHTML}});const n=w,o=Go(),i=Yo(),s=Vo(),c=Xo(),u=di(),l=$n(),p=pi();function m(){const _=(0,n.useContext)(i.SearchParamsContext),E=(0,n.useMemo)(()=>_?new u.ReadonlyURLSearchParams(_):null,[_]);if(typeof window>"u"){const{bailoutToClientRendering:k}=hi();k("useSearchParams()")}return E}function y(){return(0,l.useDynamicRouteParams)("usePathname()"),(0,n.useContext)(i.PathnameContext)}function S(){const _=(0,n.useContext)(o.AppRouterContext);if(_===null)throw new Error("invariant expected app router to be mounted");return _}function O(){return(0,l.useDynamicRouteParams)("useParams()"),(0,n.useContext)(i.PathParamsContext)}function j(_,E,k,D){k===void 0&&(k=!0),D===void 0&&(D=[]);let R;if(k)R=_[1][E];else{const ge=_[1];var $;R=($=ge.children)!=null?$:Object.values(ge)[0]}if(!R)return D;const G=R[0];let X=(0,s.getSegmentValue)(G);return!X||X.startsWith(c.PAGE_SEGMENT_KEY)?D:(D.push(X),j(R,E,!1,D))}function B(_){_===void 0&&(_="children"),(0,l.useDynamicRouteParams)("useSelectedLayoutSegments()");const E=(0,n.useContext)(o.LayoutRouterContext);return E?j(E.tree,_):null}function M(_){_===void 0&&(_="children"),(0,l.useDynamicRouteParams)("useSelectedLayoutSegment()");const E=B(_);if(!E||E.length===0)return null;const k=_==="children"?E[0]:E[E.length-1];return k===c.DEFAULT_SEGMENT_KEY?null:k}(typeof t.default=="function"||typeof t.default=="object"&&t.default!==null)&&typeof t.default.__esModule>"u"&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)}(lt,lt.exports)),lt.exports}var br,jn;function yi(){return jn||(jn=1,br=gi()),br}var mi=yi(),U=function(){return U=Object.assign||function(t){for(var r,n=1,o=arguments.length;n<o;n++){r=arguments[n];for(var i in r)Object.prototype.hasOwnProperty.call(r,i)&&(t[i]=r[i])}return t},U.apply(this,arguments)};function je(e,t,r){if(r||arguments.length===2)for(var n=0,o=t.length,i;n<o;n++)(i||!(n in t))&&(i||(i=Array.prototype.slice.call(t,0,n)),i[n]=t[n]);return e.concat(i||Array.prototype.slice.call(t))}typeof SuppressedError=="function"&&SuppressedError;function bi(e){var t=Object.create(null);return function(r){return t[r]===void 0&&(t[r]=e(r)),t[r]}}var xi=/^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|disableRemotePlayback|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/,vi=bi(function(e){return xi.test(e)||e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&e.charCodeAt(2)<91}),xr,Dn;function wi(){return Dn||(Dn=1,xr=function(t,r,n,o){var i=n?n.call(o,t,r):void 0;if(i!==void 0)return!!i;if(t===r)return!0;if(typeof t!="object"||!t||typeof r!="object"||!r)return!1;var s=Object.keys(t),c=Object.keys(r);if(s.length!==c.length)return!1;for(var u=Object.prototype.hasOwnProperty.bind(r),l=0;l<s.length;l++){var p=s[l];if(!u(p))return!1;var m=t[p],y=r[p];if(i=n?n.call(o,m,y,p):void 0,i===!1||i===void 0&&m!==y)return!1}return!0}),xr}var Si=wi();const _i=Ho(Si);var q="-ms-",nt="-moz-",I="-webkit-",Nn="comm",Rt="rule",vr="decl",$i="@import",In="@keyframes",Ei="@layer",Ln=Math.abs,wr=String.fromCharCode,Sr=Object.assign;function Ri(e,t){return V(e,0)^45?(((t<<2^V(e,0))<<2^V(e,1))<<2^V(e,2))<<2^V(e,3):0}function Mn(e){return e.trim()}function pe(e,t){return(e=t.exec(e))?e[0]:e}function P(e,t,r){return e.replace(t,r)}function kt(e,t,r){return e.indexOf(t,r)}function V(e,t){return e.charCodeAt(t)|0}function We(e,t,r){return e.slice(t,r)}function se(e){return e.length}function zn(e){return e.length}function ot(e,t){return t.push(e),e}function ki(e,t){return e.map(t).join("")}function qn(e,t){return e.filter(function(r){return!pe(r,t)})}var Pt=1,Fe=1,Hn=0,ne=0,F=0,Ue="";function Ot(e,t,r,n,o,i,s,c){return{value:e,root:t,parent:r,type:n,props:o,children:i,line:Pt,column:Fe,length:s,return:"",siblings:c}}function Se(e,t){return Sr(Ot("",null,null,"",null,null,0,e.siblings),e,{length:-e.length},t)}function Ge(e){for(;e.root;)e=Se(e.root,{children:[e]});ot(e,e.siblings)}function Pi(){return F}function Oi(){return F=ne>0?V(Ue,--ne):0,Fe--,F===10&&(Fe=1,Pt--),F}function oe(){return F=ne<Hn?V(Ue,ne++):0,Fe++,F===10&&(Fe=1,Pt++),F}function De(){return V(Ue,ne)}function At(){return ne}function Tt(e,t){return We(Ue,e,t)}function _r(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function Ai(e){return Pt=Fe=1,Hn=se(Ue=e),ne=0,[]}function Ti(e){return Ue="",e}function $r(e){return Mn(Tt(ne-1,Er(e===91?e+2:e===40?e+1:e)))}function Ci(e){for(;(F=De())&&F<33;)oe();return _r(e)>2||_r(F)>3?"":" "}function ji(e,t){for(;--t&&oe()&&!(F<48||F>102||F>57&&F<65||F>70&&F<97););return Tt(e,At()+(t<6&&De()==32&&oe()==32))}function Er(e){for(;oe();)switch(F){case e:return ne;case 34:case 39:e!==34&&e!==39&&Er(F);break;case 40:e===41&&Er(e);break;case 92:oe();break}return ne}function Di(e,t){for(;oe()&&e+F!==57;)if(e+F===84&&De()===47)break;return"/*"+Tt(t,ne-1)+"*"+wr(e===47?e:oe())}function Ni(e){for(;!_r(De());)oe();return Tt(e,ne)}function Ii(e){return Ti(Ct("",null,null,null,[""],e=Ai(e),0,[0],e))}function Ct(e,t,r,n,o,i,s,c,u){for(var l=0,p=0,m=s,y=0,S=0,O=0,j=1,B=1,M=1,_=0,E="",k=o,D=i,R=n,$=E;B;)switch(O=_,_=oe()){case 40:if(O!=108&&V($,m-1)==58){kt($+=P($r(_),"&","&\f"),"&\f",Ln(l?c[l-1]:0))!=-1&&(M=-1);break}case 34:case 39:case 91:$+=$r(_);break;case 9:case 10:case 13:case 32:$+=Ci(O);break;case 92:$+=ji(At()-1,7);continue;case 47:switch(De()){case 42:case 47:ot(Li(Di(oe(),At()),t,r,u),u);break;default:$+="/"}break;case 123*j:c[l++]=se($)*M;case 125*j:case 59:case 0:switch(_){case 0:case 125:B=0;case 59+p:M==-1&&($=P($,/\f/g,"")),S>0&&se($)-m&&ot(S>32?Wn($+";",n,r,m-1,u):Wn(P($," ","")+";",n,r,m-2,u),u);break;case 59:$+=";";default:if(ot(R=Bn($,t,r,l,p,o,c,E,k=[],D=[],m,i),i),_===123)if(p===0)Ct($,t,R,R,k,i,m,c,D);else switch(y===99&&V($,3)===110?100:y){case 100:case 108:case 109:case 115:Ct(e,R,R,n&&ot(Bn(e,R,R,0,0,o,c,E,o,k=[],m,D),D),o,D,m,c,n?k:D);break;default:Ct($,R,R,R,[""],D,0,c,D)}}l=p=S=0,j=M=1,E=$="",m=s;break;case 58:m=1+se($),S=O;default:if(j<1){if(_==123)--j;else if(_==125&&j++==0&&Oi()==125)continue}switch($+=wr(_),_*j){case 38:M=p>0?1:($+="\f",-1);break;case 44:c[l++]=(se($)-1)*M,M=1;break;case 64:De()===45&&($+=$r(oe())),y=De(),p=m=se(E=$+=Ni(At())),_++;break;case 45:O===45&&se($)==2&&(j=0)}}return i}function Bn(e,t,r,n,o,i,s,c,u,l,p,m){for(var y=o-1,S=o===0?i:[""],O=zn(S),j=0,B=0,M=0;j<n;++j)for(var _=0,E=We(e,y+1,y=Ln(B=s[j])),k=e;_<O;++_)(k=Mn(B>0?S[_]+" "+E:P(E,/&\f/g,S[_])))&&(u[M++]=k);return Ot(e,t,r,o===0?Rt:c,u,l,p,m)}function Li(e,t,r,n){return Ot(e,t,r,Nn,wr(Pi()),We(e,2,-2),0,n)}function Wn(e,t,r,n,o){return Ot(e,t,r,vr,We(e,0,n),We(e,n+1,-1),n,o)}function Fn(e,t,r){switch(Ri(e,t)){case 5103:return I+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return I+e+e;case 4789:return nt+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return I+e+nt+e+q+e+e;case 5936:switch(V(e,t+11)){case 114:return I+e+q+P(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return I+e+q+P(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return I+e+q+P(e,/[svh]\w+-[tblr]{2}/,"lr")+e}case 6828:case 4268:case 2903:return I+e+q+e+e;case 6165:return I+e+q+"flex-"+e+e;case 5187:return I+e+P(e,/(\w+).+(:[^]+)/,I+"box-$1$2"+q+"flex-$1$2")+e;case 5443:return I+e+q+"flex-item-"+P(e,/flex-|-self/g,"")+(pe(e,/flex-|baseline/)?"":q+"grid-row-"+P(e,/flex-|-self/g,""))+e;case 4675:return I+e+q+"flex-line-pack"+P(e,/align-content|flex-|-self/g,"")+e;case 5548:return I+e+q+P(e,"shrink","negative")+e;case 5292:return I+e+q+P(e,"basis","preferred-size")+e;case 6060:return I+"box-"+P(e,"-grow","")+I+e+q+P(e,"grow","positive")+e;case 4554:return I+P(e,/([^-])(transform)/g,"$1"+I+"$2")+e;case 6187:return P(P(P(e,/(zoom-|grab)/,I+"$1"),/(image-set)/,I+"$1"),e,"")+e;case 5495:case 3959:return P(e,/(image-set\([^]*)/,I+"$1$`$1");case 4968:return P(P(e,/(.+:)(flex-)?(.*)/,I+"box-pack:$3"+q+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+I+e+e;case 4200:if(!pe(e,/flex-|baseline/))return q+"grid-column-align"+We(e,t)+e;break;case 2592:case 3360:return q+P(e,"template-","")+e;case 4384:case 3616:return r&&r.some(function(n,o){return t=o,pe(n.props,/grid-\w+-end/)})?~kt(e+(r=r[t].value),"span",0)?e:q+P(e,"-start","")+e+q+"grid-row-span:"+(~kt(r,"span",0)?pe(r,/\d+/):+pe(r,/\d+/)-+pe(e,/\d+/))+";":q+P(e,"-start","")+e;case 4896:case 4128:return r&&r.some(function(n){return pe(n.props,/grid-\w+-start/)})?e:q+P(P(e,"-end","-span"),"span ","")+e;case 4095:case 3583:case 4068:case 2532:return P(e,/(.+)-inline(.+)/,I+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(se(e)-1-t>6)switch(V(e,t+1)){case 109:if(V(e,t+4)!==45)break;case 102:return P(e,/(.+:)(.+)-([^]+)/,"$1"+I+"$2-$3$1"+nt+(V(e,t+3)==108?"$3":"$2-$3"))+e;case 115:return~kt(e,"stretch",0)?Fn(P(e,"stretch","fill-available"),t,r)+e:e}break;case 5152:case 5920:return P(e,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(n,o,i,s,c,u,l){return q+o+":"+i+l+(s?q+o+"-span:"+(c?u:+u-+i)+l:"")+e});case 4949:if(V(e,t+6)===121)return P(e,":",":"+I)+e;break;case 6444:switch(V(e,V(e,14)===45?18:11)){case 120:return P(e,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+I+(V(e,14)===45?"inline-":"")+"box$3$1"+I+"$2$3$1"+q+"$2box$3")+e;case 100:return P(e,":",":"+q)+e}break;case 5719:case 2647:case 2135:case 3927:case 2391:return P(e,"scroll-","scroll-snap-")+e}return e}function jt(e,t){for(var r="",n=0;n<e.length;n++)r+=t(e[n],n,e,t)||"";return r}function Mi(e,t,r,n){switch(e.type){case Ei:if(e.children.length)break;case $i:case vr:return e.return=e.return||e.value;case Nn:return"";case In:return e.return=e.value+"{"+jt(e.children,n)+"}";case Rt:if(!se(e.value=e.props.join(",")))return""}return se(r=jt(e.children,n))?e.return=e.value+"{"+r+"}":""}function zi(e){var t=zn(e);return function(r,n,o,i){for(var s="",c=0;c<t;c++)s+=e[c](r,n,o,i)||"";return s}}function qi(e){return function(t){t.root||(t=t.return)&&e(t)}}function Hi(e,t,r,n){if(e.length>-1&&!e.return)switch(e.type){case vr:e.return=Fn(e.value,e.length,r);return;case In:return jt([Se(e,{value:P(e.value,"@","@"+I)})],n);case Rt:if(e.length)return ki(r=e.props,function(o){switch(pe(o,n=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":Ge(Se(e,{props:[P(o,/:(read-\w+)/,":"+nt+"$1")]})),Ge(Se(e,{props:[o]})),Sr(e,{props:qn(r,n)});break;case"::placeholder":Ge(Se(e,{props:[P(o,/:(plac\w+)/,":"+I+"input-$1")]})),Ge(Se(e,{props:[P(o,/:(plac\w+)/,":"+nt+"$1")]})),Ge(Se(e,{props:[P(o,/:(plac\w+)/,q+"input-$1")]})),Ge(Se(e,{props:[o]})),Sr(e,{props:qn(r,n)});break}return""})}}var Bi={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},he=typeof process<"u"&&process.env!==void 0&&(process.env.REACT_APP_SC_ATTR||process.env.SC_ATTR)||"data-styled",Un="active",Dt="data-styled-version",Ye="6.1.14",Rr=`/*!sc*/
`,Nt=typeof window<"u"&&"HTMLElement"in window,Wi=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&process.env!==void 0&&process.env.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&process.env.REACT_APP_SC_DISABLE_SPEEDY!==""?process.env.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&process.env.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&process.env!==void 0&&process.env.SC_DISABLE_SPEEDY!==void 0&&process.env.SC_DISABLE_SPEEDY!==""?process.env.SC_DISABLE_SPEEDY!=="false"&&process.env.SC_DISABLE_SPEEDY:process.env.NODE_ENV!=="production"),Fi={},Gn=/invalid hook call/i,It=new Set,Yn=function(e,t){if(process.env.NODE_ENV!=="production"){var r=t?' with the id of "'.concat(t,'"'):"",n="The component ".concat(e).concat(r,` has been created dynamically.
`)+`You may see this warning because you've called styled inside another component.
To resolve this only create new StyledComponents outside of any render method and function component.`,o=console.error;try{var i=!0;console.error=function(s){for(var c=[],u=1;u<arguments.length;u++)c[u-1]=arguments[u];Gn.test(s)?(i=!1,It.delete(n)):o.apply(void 0,je([s],c,!1))},w.useRef(),i&&!It.has(n)&&(console.warn(n),It.add(n))}catch(s){Gn.test(s.message)&&It.delete(n)}finally{console.error=o}}},Lt=Object.freeze([]),Ve=Object.freeze({});function Vn(e,t,r){return r===void 0&&(r=Ve),e.theme!==r.theme&&e.theme||t||r.theme}var kr=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),Ui=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,Gi=/(^-|-$)/g;function Xn(e){return e.replace(Ui,"-").replace(Gi,"")}var Yi=/(a)(d)/gi,Mt=52,Kn=function(e){return String.fromCharCode(e+(e>25?39:97))};function Pr(e){var t,r="";for(t=Math.abs(e);t>Mt;t=t/Mt|0)r=Kn(t%Mt)+r;return(Kn(t%Mt)+r).replace(Yi,"$1-$2")}var Or,Jn=5381,Ne=function(e,t){for(var r=t.length;r;)e=33*e^t.charCodeAt(--r);return e},Zn=function(e){return Ne(Jn,e)};function Qn(e){return Pr(Zn(e)>>>0)}function eo(e){return process.env.NODE_ENV!=="production"&&typeof e=="string"&&e||e.displayName||e.name||"Component"}function Ar(e){return typeof e=="string"&&(process.env.NODE_ENV==="production"||e.charAt(0)===e.charAt(0).toLowerCase())}var to=typeof Symbol=="function"&&Symbol.for,ro=to?Symbol.for("react.memo"):60115,Vi=to?Symbol.for("react.forward_ref"):60112,Xi={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},Ki={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},no={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},Ji=((Or={})[Vi]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},Or[ro]=no,Or);function oo(e){return("type"in(t=e)&&t.type.$$typeof)===ro?no:"$$typeof"in e?Ji[e.$$typeof]:Xi;var t}var Zi=Object.defineProperty,Qi=Object.getOwnPropertyNames,io=Object.getOwnPropertySymbols,ea=Object.getOwnPropertyDescriptor,ta=Object.getPrototypeOf,ao=Object.prototype;function so(e,t,r){if(typeof t!="string"){if(ao){var n=ta(t);n&&n!==ao&&so(e,n,r)}var o=Qi(t);io&&(o=o.concat(io(t)));for(var i=oo(e),s=oo(t),c=0;c<o.length;++c){var u=o[c];if(!(u in Ki||r&&r[u]||s&&u in s||i&&u in i)){var l=ea(t,u);try{Zi(e,u,l)}catch{}}}}return e}function Ie(e){return typeof e=="function"}function Tr(e){return typeof e=="object"&&"styledComponentId"in e}function Le(e,t){return e&&t?"".concat(e," ").concat(t):e||t||""}function zt(e,t){if(e.length===0)return"";for(var r=e[0],n=1;n<e.length;n++)r+=t?t+e[n]:e[n];return r}function Xe(e){return e!==null&&typeof e=="object"&&e.constructor.name===Object.name&&!("props"in e&&e.$$typeof)}function Cr(e,t,r){if(r===void 0&&(r=!1),!r&&!Xe(e)&&!Array.isArray(e))return t;if(Array.isArray(t))for(var n=0;n<t.length;n++)e[n]=Cr(e[n],t[n]);else if(Xe(t))for(var n in t)e[n]=Cr(e[n],t[n]);return e}function jr(e,t){Object.defineProperty(e,"toString",{value:t})}var ra=process.env.NODE_ENV!=="production"?{1:`Cannot create styled-component for component: %s.

`,2:`Can't collect styles once you've consumed a \`ServerStyleSheet\`'s styles! \`ServerStyleSheet\` is a one off instance for each server-side render cycle.

- Are you trying to reuse it across renders?
- Are you accidentally calling collectStyles twice?

`,3:`Streaming SSR is only supported in a Node.js environment; Please do not try to call this method in the browser.

`,4:`The \`StyleSheetManager\` expects a valid target or sheet prop!

- Does this error occur on the client and is your target falsy?
- Does this error occur on the server and is the sheet falsy?

`,5:`The clone method cannot be used on the client!

- Are you running in a client-like environment on the server?
- Are you trying to run SSR on the client?

`,6:`Trying to insert a new style tag, but the given Node is unmounted!

- Are you using a custom target that isn't mounted?
- Does your document not have a valid head element?
- Have you accidentally removed a style tag manually?

`,7:'ThemeProvider: Please return an object from your "theme" prop function, e.g.\n\n```js\ntheme={() => ({})}\n```\n\n',8:`ThemeProvider: Please make your "theme" prop an object.

`,9:"Missing document `<head>`\n\n",10:`Cannot find a StyleSheet instance. Usually this happens if there are multiple copies of styled-components loaded at once. Check out this issue for how to troubleshoot and fix the common cases where this situation can happen: https://github.com/styled-components/styled-components/issues/1941#issuecomment-417862021

`,11:`_This error was replaced with a dev-time warning, it will be deleted for v4 final._ [createGlobalStyle] received children which will not be rendered. Please use the component without passing children elements.

`,12:"It seems you are interpolating a keyframe declaration (%s) into an untagged string. This was supported in styled-components v3, but is not longer supported in v4 as keyframes are now injected on-demand. Please wrap your string in the css\\`\\` helper which ensures the styles are injected correctly. See https://www.styled-components.com/docs/api#css\n\n",13:`%s is not a styled component and cannot be referred to via component selector. See https://www.styled-components.com/docs/advanced#referring-to-other-components for more details.

`,14:`ThemeProvider: "theme" prop is required.

`,15:"A stylis plugin has been supplied that is not named. We need a name for each plugin to be able to prevent styling collisions between different stylis configurations within the same app. Before you pass your plugin to `<StyleSheetManager stylisPlugins={[]}>`, please make sure each plugin is uniquely-named, e.g.\n\n```js\nObject.defineProperty(importedPlugin, 'name', { value: 'some-unique-name' });\n```\n\n",16:`Reached the limit of how many styled components may be created at group %s.
You may only create up to 1,073,741,824 components. If you're creating components dynamically,
as for instance in your render method then you may be running into this limitation.

`,17:`CSSStyleSheet could not be found on HTMLStyleElement.
Has styled-components' style tag been unmounted or altered by another script?
`,18:"ThemeProvider: Please make sure your useTheme hook is within a `<ThemeProvider>`"}:{};function na(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];for(var r=e[0],n=[],o=1,i=e.length;o<i;o+=1)n.push(e[o]);return n.forEach(function(s){r=r.replace(/%[a-z]/,s)}),r}function re(e){for(var t=[],r=1;r<arguments.length;r++)t[r-1]=arguments[r];return process.env.NODE_ENV==="production"?new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(e," for more information.").concat(t.length>0?" Args: ".concat(t.join(", ")):"")):new Error(na.apply(void 0,je([ra[e]],t,!1)).trim())}var oa=function(){function e(t){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=t}return e.prototype.indexOfGroup=function(t){for(var r=0,n=0;n<t;n++)r+=this.groupSizes[n];return r},e.prototype.insertRules=function(t,r){if(t>=this.groupSizes.length){for(var n=this.groupSizes,o=n.length,i=o;t>=i;)if((i<<=1)<0)throw re(16,"".concat(t));this.groupSizes=new Uint32Array(i),this.groupSizes.set(n),this.length=i;for(var s=o;s<i;s++)this.groupSizes[s]=0}for(var c=this.indexOfGroup(t+1),u=(s=0,r.length);s<u;s++)this.tag.insertRule(c,r[s])&&(this.groupSizes[t]++,c++)},e.prototype.clearGroup=function(t){if(t<this.length){var r=this.groupSizes[t],n=this.indexOfGroup(t),o=n+r;this.groupSizes[t]=0;for(var i=n;i<o;i++)this.tag.deleteRule(n)}},e.prototype.getGroup=function(t){var r="";if(t>=this.length||this.groupSizes[t]===0)return r;for(var n=this.groupSizes[t],o=this.indexOfGroup(t),i=o+n,s=o;s<i;s++)r+="".concat(this.tag.getRule(s)).concat(Rr);return r},e}(),ia=1<<30,qt=new Map,Ht=new Map,Bt=1,Wt=function(e){if(qt.has(e))return qt.get(e);for(;Ht.has(Bt);)Bt++;var t=Bt++;if(process.env.NODE_ENV!=="production"&&((0|t)<0||t>ia))throw re(16,"".concat(t));return qt.set(e,t),Ht.set(t,e),t},aa=function(e,t){Bt=t+1,qt.set(e,t),Ht.set(t,e)},sa="style[".concat(he,"][").concat(Dt,'="').concat(Ye,'"]'),ca=new RegExp("^".concat(he,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),ua=function(e,t,r){for(var n,o=r.split(","),i=0,s=o.length;i<s;i++)(n=o[i])&&e.registerName(t,n)},la=function(e,t){for(var r,n=((r=t.textContent)!==null&&r!==void 0?r:"").split(Rr),o=[],i=0,s=n.length;i<s;i++){var c=n[i].trim();if(c){var u=c.match(ca);if(u){var l=0|parseInt(u[1],10),p=u[2];l!==0&&(aa(p,l),ua(e,p,u[3]),e.getTag().insertRules(l,o)),o.length=0}else o.push(c)}}},co=function(e){for(var t=document.querySelectorAll(sa),r=0,n=t.length;r<n;r++){var o=t[r];o&&o.getAttribute(he)!==Un&&(la(e,o),o.parentNode&&o.parentNode.removeChild(o))}};function Dr(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null}var uo=function(e){var t=document.head,r=e||t,n=document.createElement("style"),o=function(c){var u=Array.from(c.querySelectorAll("style[".concat(he,"]")));return u[u.length-1]}(r),i=o!==void 0?o.nextSibling:null;n.setAttribute(he,Un),n.setAttribute(Dt,Ye);var s=Dr();return s&&n.setAttribute("nonce",s),r.insertBefore(n,i),n},da=function(){function e(t){this.element=uo(t),this.element.appendChild(document.createTextNode("")),this.sheet=function(r){if(r.sheet)return r.sheet;for(var n=document.styleSheets,o=0,i=n.length;o<i;o++){var s=n[o];if(s.ownerNode===r)return s}throw re(17)}(this.element),this.length=0}return e.prototype.insertRule=function(t,r){try{return this.sheet.insertRule(r,t),this.length++,!0}catch{return!1}},e.prototype.deleteRule=function(t){this.sheet.deleteRule(t),this.length--},e.prototype.getRule=function(t){var r=this.sheet.cssRules[t];return r&&r.cssText?r.cssText:""},e}(),fa=function(){function e(t){this.element=uo(t),this.nodes=this.element.childNodes,this.length=0}return e.prototype.insertRule=function(t,r){if(t<=this.length&&t>=0){var n=document.createTextNode(r);return this.element.insertBefore(n,this.nodes[t]||null),this.length++,!0}return!1},e.prototype.deleteRule=function(t){this.element.removeChild(this.nodes[t]),this.length--},e.prototype.getRule=function(t){return t<this.length?this.nodes[t].textContent:""},e}(),pa=function(){function e(t){this.rules=[],this.length=0}return e.prototype.insertRule=function(t,r){return t<=this.length&&(this.rules.splice(t,0,r),this.length++,!0)},e.prototype.deleteRule=function(t){this.rules.splice(t,1),this.length--},e.prototype.getRule=function(t){return t<this.length?this.rules[t]:""},e}(),lo=Nt,ha={isServer:!Nt,useCSSOMInjection:!Wi},it=function(){function e(t,r,n){t===void 0&&(t=Ve),r===void 0&&(r={});var o=this;this.options=U(U({},ha),t),this.gs=r,this.names=new Map(n),this.server=!!t.isServer,!this.server&&Nt&&lo&&(lo=!1,co(this)),jr(this,function(){return function(i){for(var s=i.getTag(),c=s.length,u="",l=function(m){var y=function(M){return Ht.get(M)}(m);if(y===void 0)return"continue";var S=i.names.get(y),O=s.getGroup(m);if(S===void 0||!S.size||O.length===0)return"continue";var j="".concat(he,".g").concat(m,'[id="').concat(y,'"]'),B="";S!==void 0&&S.forEach(function(M){M.length>0&&(B+="".concat(M,","))}),u+="".concat(O).concat(j,'{content:"').concat(B,'"}').concat(Rr)},p=0;p<c;p++)l(p);return u}(o)})}return e.registerId=function(t){return Wt(t)},e.prototype.rehydrate=function(){!this.server&&Nt&&co(this)},e.prototype.reconstructWithOptions=function(t,r){return r===void 0&&(r=!0),new e(U(U({},this.options),t),this.gs,r&&this.names||void 0)},e.prototype.allocateGSInstance=function(t){return this.gs[t]=(this.gs[t]||0)+1},e.prototype.getTag=function(){return this.tag||(this.tag=(t=function(r){var n=r.useCSSOMInjection,o=r.target;return r.isServer?new pa(o):n?new da(o):new fa(o)}(this.options),new oa(t)));var t},e.prototype.hasNameForId=function(t,r){return this.names.has(t)&&this.names.get(t).has(r)},e.prototype.registerName=function(t,r){if(Wt(t),this.names.has(t))this.names.get(t).add(r);else{var n=new Set;n.add(r),this.names.set(t,n)}},e.prototype.insertRules=function(t,r,n){this.registerName(t,r),this.getTag().insertRules(Wt(t),n)},e.prototype.clearNames=function(t){this.names.has(t)&&this.names.get(t).clear()},e.prototype.clearRules=function(t){this.getTag().clearGroup(Wt(t)),this.clearNames(t)},e.prototype.clearTag=function(){this.tag=void 0},e}(),ga=/&/g,ya=/^\s*\/\/.*$/gm;function fo(e,t){return e.map(function(r){return r.type==="rule"&&(r.value="".concat(t," ").concat(r.value),r.value=r.value.replaceAll(",",",".concat(t," ")),r.props=r.props.map(function(n){return"".concat(t," ").concat(n)})),Array.isArray(r.children)&&r.type!=="@keyframes"&&(r.children=fo(r.children,t)),r})}function po(e){var t,r,n,o=e===void 0?Ve:e,i=o.options,s=i===void 0?Ve:i,c=o.plugins,u=c===void 0?Lt:c,l=function(y,S,O){return O.startsWith(r)&&O.endsWith(r)&&O.replaceAll(r,"").length>0?".".concat(t):y},p=u.slice();p.push(function(y){y.type===Rt&&y.value.includes("&")&&(y.props[0]=y.props[0].replace(ga,r).replace(n,l))}),s.prefix&&p.push(Hi),p.push(Mi);var m=function(y,S,O,j){S===void 0&&(S=""),O===void 0&&(O=""),j===void 0&&(j="&"),t=j,r=S,n=new RegExp("\\".concat(r,"\\b"),"g");var B=y.replace(ya,""),M=Ii(O||S?"".concat(O," ").concat(S," { ").concat(B," }"):B);s.namespace&&(M=fo(M,s.namespace));var _=[];return jt(M,zi(p.concat(qi(function(E){return _.push(E)})))),_};return m.hash=u.length?u.reduce(function(y,S){return S.name||re(15),Ne(y,S.name)},Jn).toString():"",m}var ma=new it,Nr=po(),Ir=w.createContext({shouldForwardProp:void 0,styleSheet:ma,stylis:Nr});Ir.Consumer;var ba=w.createContext(void 0);function Ft(){return w.useContext(Ir)}function ho(e){var t=w.useState(e.stylisPlugins),r=t[0],n=t[1],o=Ft().styleSheet,i=w.useMemo(function(){var u=o;return e.sheet?u=e.sheet:e.target&&(u=u.reconstructWithOptions({target:e.target},!1)),e.disableCSSOMInjection&&(u=u.reconstructWithOptions({useCSSOMInjection:!1})),u},[e.disableCSSOMInjection,e.sheet,e.target,o]),s=w.useMemo(function(){return po({options:{namespace:e.namespace,prefix:e.enableVendorPrefixes},plugins:r})},[e.enableVendorPrefixes,e.namespace,r]);w.useEffect(function(){_i(r,e.stylisPlugins)||n(e.stylisPlugins)},[e.stylisPlugins]);var c=w.useMemo(function(){return{shouldForwardProp:e.shouldForwardProp,styleSheet:i,stylis:s}},[e.shouldForwardProp,i,s]);return w.createElement(Ir.Provider,{value:c},w.createElement(ba.Provider,{value:s},e.children))}var go=function(){function e(t,r){var n=this;this.inject=function(o,i){i===void 0&&(i=Nr);var s=n.name+i.hash;o.hasNameForId(n.id,s)||o.insertRules(n.id,s,i(n.rules,s,"@keyframes"))},this.name=t,this.id="sc-keyframes-".concat(t),this.rules=r,jr(this,function(){throw re(12,String(n.name))})}return e.prototype.getName=function(t){return t===void 0&&(t=Nr),this.name+t.hash},e}(),xa=function(e){return e>="A"&&e<="Z"};function yo(e){for(var t="",r=0;r<e.length;r++){var n=e[r];if(r===1&&n==="-"&&e[0]==="-")return e;xa(n)?t+="-"+n.toLowerCase():t+=n}return t.startsWith("ms-")?"-"+t:t}var mo=function(e){return e==null||e===!1||e===""},bo=function(e){var t,r,n=[];for(var o in e){var i=e[o];e.hasOwnProperty(o)&&!mo(i)&&(Array.isArray(i)&&i.isCss||Ie(i)?n.push("".concat(yo(o),":"),i,";"):Xe(i)?n.push.apply(n,je(je(["".concat(o," {")],bo(i),!1),["}"],!1)):n.push("".concat(yo(o),": ").concat((t=o,(r=i)==null||typeof r=="boolean"||r===""?"":typeof r!="number"||r===0||t in Bi||t.startsWith("--")?String(r).trim():"".concat(r,"px")),";")))}return n};function _e(e,t,r,n){if(mo(e))return[];if(Tr(e))return[".".concat(e.styledComponentId)];if(Ie(e)){if(!Ie(i=e)||i.prototype&&i.prototype.isReactComponent||!t)return[e];var o=e(t);return process.env.NODE_ENV==="production"||typeof o!="object"||Array.isArray(o)||o instanceof go||Xe(o)||o===null||console.error("".concat(eo(e)," is not a styled component and cannot be referred to via component selector. See https://www.styled-components.com/docs/advanced#referring-to-other-components for more details.")),_e(o,t,r,n)}var i;return e instanceof go?r?(e.inject(r,n),[e.getName(n)]):[e]:Xe(e)?bo(e):Array.isArray(e)?Array.prototype.concat.apply(Lt,e.map(function(s){return _e(s,t,r,n)})):[e.toString()]}function xo(e){for(var t=0;t<e.length;t+=1){var r=e[t];if(Ie(r)&&!Tr(r))return!1}return!0}var va=Zn(Ye),wa=function(){function e(t,r,n){this.rules=t,this.staticRulesId="",this.isStatic=process.env.NODE_ENV==="production"&&(n===void 0||n.isStatic)&&xo(t),this.componentId=r,this.baseHash=Ne(va,r),this.baseStyle=n,it.registerId(r)}return e.prototype.generateAndInjectStyles=function(t,r,n){var o=this.baseStyle?this.baseStyle.generateAndInjectStyles(t,r,n):"";if(this.isStatic&&!n.hash)if(this.staticRulesId&&r.hasNameForId(this.componentId,this.staticRulesId))o=Le(o,this.staticRulesId);else{var i=zt(_e(this.rules,t,r,n)),s=Pr(Ne(this.baseHash,i)>>>0);if(!r.hasNameForId(this.componentId,s)){var c=n(i,".".concat(s),void 0,this.componentId);r.insertRules(this.componentId,s,c)}o=Le(o,s),this.staticRulesId=s}else{for(var u=Ne(this.baseHash,n.hash),l="",p=0;p<this.rules.length;p++){var m=this.rules[p];if(typeof m=="string")l+=m,process.env.NODE_ENV!=="production"&&(u=Ne(u,m));else if(m){var y=zt(_e(m,t,r,n));u=Ne(u,y+p),l+=y}}if(l){var S=Pr(u>>>0);r.hasNameForId(this.componentId,S)||r.insertRules(this.componentId,S,n(l,".".concat(S),void 0,this.componentId)),o=Le(o,S)}}return o},e}(),Ke=w.createContext(void 0);Ke.Consumer;function Lr(){var e=w.useContext(Ke);if(!e)throw re(18);return e}function Sa(e){var t=w.useContext(Ke),r=w.useMemo(function(){return function(n,o){if(!n)throw re(14);if(Ie(n)){var i=n(o);if(process.env.NODE_ENV!=="production"&&(i===null||Array.isArray(i)||typeof i!="object"))throw re(7);return i}if(Array.isArray(n)||typeof n!="object")throw re(8);return o?U(U({},o),n):n}(e.theme,t)},[e.theme,t]);return e.children?w.createElement(Ke.Provider,{value:r},e.children):null}var Mr={},vo=new Set;function _a(e,t,r){var n=Tr(e),o=e,i=!Ar(e),s=t.attrs,c=s===void 0?Lt:s,u=t.componentId,l=u===void 0?function(k,D){var R=typeof k!="string"?"sc":Xn(k);Mr[R]=(Mr[R]||0)+1;var $="".concat(R,"-").concat(Qn(Ye+R+Mr[R]));return D?"".concat(D,"-").concat($):$}(t.displayName,t.parentComponentId):u,p=t.displayName,m=p===void 0?function(k){return Ar(k)?"styled.".concat(k):"Styled(".concat(eo(k),")")}(e):p,y=t.displayName&&t.componentId?"".concat(Xn(t.displayName),"-").concat(t.componentId):t.componentId||l,S=n&&o.attrs?o.attrs.concat(c).filter(Boolean):c,O=t.shouldForwardProp;if(n&&o.shouldForwardProp){var j=o.shouldForwardProp;if(t.shouldForwardProp){var B=t.shouldForwardProp;O=function(k,D){return j(k,D)&&B(k,D)}}else O=j}var M=new wa(r,y,n?o.componentStyle:void 0);function _(k,D){return function(R,$,G){var X=R.attrs,ge=R.componentStyle,Oe=R.defaultProps,Ae=R.foldedComponentIds,ye=R.styledComponentId,ze=R.target,qe=w.useContext(Ke),at=Ft(),Te=R.shouldForwardProp||at.shouldForwardProp;process.env.NODE_ENV!=="production"&&w.useDebugValue(ye);var He=Vn($,qe,Oe)||Ve,Y=function(be,de,xe){for(var ae,d=U(U({},de),{className:void 0,theme:xe}),f=0;f<be.length;f+=1){var g=Ie(ae=be[f])?ae(d):ae;for(var A in g)d[A]=A==="className"?Le(d[A],g[A]):A==="style"?U(U({},d[A]),g[A]):g[A]}return de.className&&(d.className=Le(d.className,de.className)),d}(X,$,He),le=Y.as||ze,Q={};for(var K in Y)Y[K]===void 0||K[0]==="$"||K==="as"||K==="theme"&&Y.theme===He||(K==="forwardedAs"?Q.as=Y.forwardedAs:Te&&!Te(K,le)||(Q[K]=Y[K],Te||process.env.NODE_ENV!=="development"||vi(K)||vo.has(K)||!kr.has(le)||(vo.add(K),console.warn('styled-components: it looks like an unknown prop "'.concat(K,'" is being sent through to the DOM, which will likely trigger a React console error. If you would like automatic filtering of unknown props, you can opt-into that behavior via `<StyleSheetManager shouldForwardProp={...}>` (connect an API like `@emotion/is-prop-valid`) or consider using transient props (`$` prefix for automatic filtering.)')))));var me=function(be,de){var xe=Ft(),ae=be.generateAndInjectStyles(de,xe.styleSheet,xe.stylis);return process.env.NODE_ENV!=="production"&&w.useDebugValue(ae),ae}(ge,Y);process.env.NODE_ENV!=="production"&&R.warnTooManyClasses&&R.warnTooManyClasses(me);var ie=Le(Ae,ye);return me&&(ie+=" "+me),Y.className&&(ie+=" "+Y.className),Q[Ar(le)&&!kr.has(le)?"class":"className"]=ie,G&&(Q.ref=G),w.createElement(le,Q)}(E,k,D)}_.displayName=m;var E=w.forwardRef(_);return E.attrs=S,E.componentStyle=M,E.displayName=m,E.shouldForwardProp=O,E.foldedComponentIds=n?Le(o.foldedComponentIds,o.styledComponentId):"",E.styledComponentId=y,E.target=n?o.target:e,Object.defineProperty(E,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(k){this._foldedDefaultProps=n?function(D){for(var R=[],$=1;$<arguments.length;$++)R[$-1]=arguments[$];for(var G=0,X=R;G<X.length;G++)Cr(D,X[G],!0);return D}({},o.defaultProps,k):k}}),process.env.NODE_ENV!=="production"&&(Yn(m,y),E.warnTooManyClasses=function(k,D){var R={},$=!1;return function(G){if(!$&&(R[G]=!0,Object.keys(R).length>=200)){var X=D?' with the id of "'.concat(D,'"'):"";console.warn("Over ".concat(200," classes were generated for component ").concat(k).concat(X,`.
`)+`Consider using the attrs method, together with a style object for frequently changed styles.
Example:
  const Component = styled.div.attrs(props => ({
    style: {
      background: props.background,
    },
  }))\`width: 100%;\`

  <Component />`),$=!0,R={}}}}(m,y)),jr(E,function(){return".".concat(E.styledComponentId)}),i&&so(E,e,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),E}function wo(e,t){for(var r=[e[0]],n=0,o=t.length;n<o;n+=1)r.push(t[n],e[n+1]);return r}var So=function(e){return Object.assign(e,{isCss:!0})};function C(e){for(var t=[],r=1;r<arguments.length;r++)t[r-1]=arguments[r];if(Ie(e)||Xe(e))return So(_e(wo(Lt,je([e],t,!0))));var n=e;return t.length===0&&n.length===1&&typeof n[0]=="string"?_e(n):So(_e(wo(n,t)))}function zr(e,t,r){if(r===void 0&&(r=Ve),!t)throw re(1,t);var n=function(o){for(var i=[],s=1;s<arguments.length;s++)i[s-1]=arguments[s];return e(t,r,C.apply(void 0,je([o],i,!1)))};return n.attrs=function(o){return zr(e,t,U(U({},r),{attrs:Array.prototype.concat(r.attrs,o).filter(Boolean)}))},n.withConfig=function(o){return zr(e,t,U(U({},r),o))},n}var _o=function(e){return zr(_a,e)},H=_o;kr.forEach(function(e){H[e]=_o(e)});var $a=function(){function e(t,r){this.rules=t,this.componentId=r,this.isStatic=xo(t),it.registerId(this.componentId+1)}return e.prototype.createStyles=function(t,r,n,o){var i=o(zt(_e(this.rules,r,n,o)),""),s=this.componentId+t;n.insertRules(s,s,i)},e.prototype.removeStyles=function(t,r){r.clearRules(this.componentId+t)},e.prototype.renderStyles=function(t,r,n,o){t>2&&it.registerId(this.componentId+t),this.removeStyles(t,n),this.createStyles(t,r,n,o)},e}();function Ea(e){for(var t=[],r=1;r<arguments.length;r++)t[r-1]=arguments[r];var n=C.apply(void 0,je([e],t,!1)),o="sc-global-".concat(Qn(JSON.stringify(n))),i=new $a(n,o);process.env.NODE_ENV!=="production"&&Yn(o);var s=function(u){var l=Ft(),p=w.useContext(Ke),m=w.useRef(l.styleSheet.allocateGSInstance(o)).current;return process.env.NODE_ENV!=="production"&&w.Children.count(u.children)&&console.warn("The global style component ".concat(o," was given child JSX. createGlobalStyle does not render children.")),process.env.NODE_ENV!=="production"&&n.some(function(y){return typeof y=="string"&&y.indexOf("@import")!==-1})&&console.warn("Please do not use @import CSS syntax in createGlobalStyle at this time, as the CSSOM APIs we use in production do not handle it well. Instead, we recommend using a library such as react-helmet to inject a typical <link> meta tag to the stylesheet, or simply embedding it manually in your index.html <head> section for a simpler app."),l.styleSheet.server&&c(m,u,l.styleSheet,p,l.stylis),w.useLayoutEffect(function(){if(!l.styleSheet.server)return c(m,u,l.styleSheet,p,l.stylis),function(){return i.removeStyles(m,l.styleSheet)}},[m,u,l.styleSheet,p,l.stylis]),null};function c(u,l,p,m,y){if(i.isStatic)i.renderStyles(u,Fi,p,y);else{var S=U(U({},l),{theme:Vn(l,m,s.defaultProps)});i.renderStyles(u,S,p,y)}}return w.memo(s)}var Ra=function(){function e(){var t=this;this._emitSheetCSS=function(){var r=t.instance.toString();if(!r)return"";var n=Dr(),o=zt([n&&'nonce="'.concat(n,'"'),"".concat(he,'="true"'),"".concat(Dt,'="').concat(Ye,'"')].filter(Boolean)," ");return"<style ".concat(o,">").concat(r,"</style>")},this.getStyleTags=function(){if(t.sealed)throw re(2);return t._emitSheetCSS()},this.getStyleElement=function(){var r;if(t.sealed)throw re(2);var n=t.instance.toString();if(!n)return[];var o=((r={})[he]="",r[Dt]=Ye,r.dangerouslySetInnerHTML={__html:n},r),i=Dr();return i&&(o.nonce=i),[w.createElement("style",U({},o,{key:"sc-0-0"}))]},this.seal=function(){t.sealed=!0},this.instance=new it({isServer:!0}),this.sealed=!1}return e.prototype.collectStyles=function(t){if(this.sealed)throw re(2);return w.createElement(ho,{sheet:this.instance},t)},e.prototype.interleaveWithNodeStream=function(t){throw re(3)},e}();process.env.NODE_ENV!=="production"&&typeof navigator<"u"&&navigator.product==="ReactNative"&&console.warn(`It looks like you've imported 'styled-components' on React Native.
Perhaps you're looking to import 'styled-components/native'?
Read more about this at https://www.styled-components.com/docs/basics#react-native`);var Ut="__sc-".concat(he,"__");process.env.NODE_ENV!=="production"&&process.env.NODE_ENV!=="test"&&typeof window<"u"&&(window[Ut]||(window[Ut]=0),window[Ut]===1&&console.warn(`It looks like there are several instances of 'styled-components' initialized in this application. This may cause dynamic styles to not render properly, errors during the rehydration process, a missing theme prop, and makes your application bigger without good reason.

See https://s-c.sh/2BAXzed for more info.`),window[Ut]+=1);function ka({children:e}){const[t]=w.useState(()=>new Ra);return mi.useServerInsertedHTML(()=>{const r=t.getStyleElement();return t.instance.clearTag(),v.jsx(v.Fragment,{children:r})}),typeof window<"u"?v.jsx(v.Fragment,{children:e}):v.jsx(ho,{sheet:t.instance,enableVendorPrefixes:!0,children:e})}const $o=e=>Ea`
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
	color: ${e.isDark?e.colors.dark:e.colors.primary};
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
`;function Eo({...e}){const t=Lr();return v.jsx("svg",{width:"12",height:"10",viewBox:"0 0 12 10",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e,children:v.jsx("path",{d:"M10 2L4.4 8L2 5.75",stroke:t.colors.primary,strokeWidth:"3",strokeLinecap:"round",strokeLinejoin:"round"})})}function Ro({...e}){const t=Lr();return v.jsx("svg",{width:"16",height:"10",viewBox:"0 0 16 10",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e,children:v.jsx("path",{d:"M2 2L8 8L14 2",stroke:t.colors.primary,strokeWidth:"3",strokeLinecap:"round",strokeLinejoin:"round"})})}function ko({...e}){const t=Lr();return v.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:t.colors.primary,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",...e,children:[v.jsx("path",{d:"M8 2v4"}),v.jsx("path",{d:"M16 2v4"}),v.jsx("rect",{width:"18",height:"18",x:"3",y:"4",rx:"2"}),v.jsx("path",{d:"M3 10h18"}),v.jsx("path",{d:"M8 14h.01"}),v.jsx("path",{d:"M12 14h.01"}),v.jsx("path",{d:"M16 14h.01"}),v.jsx("path",{d:"M8 18h.01"}),v.jsx("path",{d:"M12 18h.01"}),v.jsx("path",{d:"M16 18h.01"})]})}const Gt={xs:0,sm:576,md:768,lg:992,xl:1200,xxl:1440,xxxl:1920};function L(e){return`@media screen and (min-width: ${Gt[e]}px)`}const qr={maxWidth:{xs:"1280px",xxxl:"1440px"},padding:{xs:"20px",lg:"40px"},radius:{xs:"6px",lg:"12px",xl:"30px"},gridGap:{xs:"20px",lg:"40px"}},Po={primaryLight:"#91aec4",primary:"#4d6f8b",primaryDark:"#194569",secondaryLight:"#a4b17b",secondary:"#5c6e46",secondaryDark:"#354c2b",tertiaryLight:"#ebccb9",tertiary:"#816b5a",tertiaryDark:"#675445",grayLight:"#e5e7eb",gray:"#9ca3af",grayDark:"#4b5563",success:"#84cc16",error:"#ef4444",warning:"#eab308",info:"#06b6d4",dark:"#000000",light:"#ffffff"},Oo={primaryLight:"#79C5FF",primary:"#6198C6",primaryDark:"#339DF4",secondaryLight:"#a4b17b",secondary:"#5c6e46",secondaryDark:"#354c2b",tertiaryLight:"#ebccb9",tertiary:"#816b5a",tertiaryDark:"#675445",grayLight:"#1a1a1a",gray:"#454444",grayDark:"#808080",success:"#84cc16",error:"#ef4444",warning:"#eab308",info:"#06b6d4",dark:"#ffffff",light:"#000000"},Ao={xs:"0px 4px 4px 0px rgba(18, 18, 18, 0.04), 0px 1px 3px 0px rgba(39, 41, 45, 0.02)",sm:"0px 4px 4px 0px rgba(18, 18, 18, 0.08), 0px 1px 3px 0px rgba(39, 41, 45, 0.04)",md:"0px 8px 8px 0px rgba(18, 18, 18, 0.16), 0px 2px 3px 0px rgba(39, 41, 45, 0.06)",lg:"0px 16px 24px 0px rgba(18, 18, 18, 0.20), 0px 2px 3px 0px rgba(39, 41, 45, 0.08)",xl:"0px 24px 32px 0px rgba(18, 18, 18, 0.24), 0px 2px 3px 0px rgba(39, 41, 45, 0.12)"},To={xs:"0px 4px 4px 0px rgba(255, 255, 255, 0.04), 0px 1px 3px 0px rgba(255, 255, 255, 0.02)",sm:"0px 4px 4px 0px rgba(255, 255, 255, 0.08), 0px 1px 3px 0px rgba(255, 255, 255, 0.04)",md:"0px 8px 8px 0px rgba(255, 255, 255, 0.16), 0px 2px 3px 0px rgba(255, 255, 255, 0.06)",lg:"0px 16px 24px 0px rgba(255, 255, 255, 0.20), 0px 2px 3px 0px rgba(255, 255, 255, 0.08)",xl:"0px 24px 32px 0px rgba(255, 255, 255, 0.24), 0px 2px 3px 0px rgba(255, 255, 255, 0.12)"},Hr={text:"Inter",head:"Inter",mono:"monospace"},Br={hero1:{xs:"72px",lg:"128px"},hero2:{xs:"60px",lg:"96px"},hero3:{xs:"36px",lg:"72px"},h1:{xs:"40px",lg:"60px"},h2:{xs:"30px",lg:"36px"},h3:{xs:"28px",lg:"30px"},h4:{xs:"26px",lg:"24px"},h5:{xs:"18px",lg:"20px"},h6:{xs:"16px",lg:"18px"},text:{xs:"14px",lg:"16px"},strong:{xs:"14px",lg:"16px"},small:{xs:"12px",lg:"14px"},blockquote:{xs:"16px",lg:"18px"},code:{xs:"14px",lg:"16px"},button:{xs:"16px",lg:"16px"},buttonBig:{xs:"18px",lg:"18px"},input:{xs:"16px",lg:"16px"},inputBig:{xs:"18px",lg:"18px"}},Wr={hero1:{xs:"1.10",lg:"1.10"},hero2:{xs:"1.10",lg:"1.10"},hero3:{xs:"1.20",lg:"1.10"},h1:{xs:"1.50",lg:"1.40"},h2:{xs:"1.50",lg:"1.50"},h3:{xs:"1.30",lg:"1.50"},h4:{xs:"1.30",lg:"1.50"},h5:{xs:"1.60",lg:"1.50"},h6:{xs:"1.60",lg:"1.60"},text:{xs:"1.70",lg:"1.70"},strong:{xs:"1.70",lg:"1.70"},small:{xs:"1.70",lg:"1.70"},blockquote:{xs:"1.70",lg:"1.70"},code:{xs:"1.70",lg:"1.70"},button:{xs:"1.00",lg:"1.00"},buttonBig:{xs:"1.00",lg:"1.00"},input:{xs:"1.00",lg:"1.00"},inputBig:{xs:"1.00",lg:"1.00"}},Je={breakpoints:Gt,spacing:qr,colors:Po,shadows:Ao,fonts:Hr,fontSizes:Br,lineHeights:Wr,isDark:!1},Pa={breakpoints:Gt,spacing:qr,colors:Oo,shadows:To,fonts:Hr,fontSizes:Br,lineHeights:Wr,isDark:!0},ce=C`
  box-sizing: border-box;
  appearance: none;
  border: none;
  background: none;
  padding: 0;
  margin: 0;
  cursor: pointer;
  outline: none;
`,Yt=C`
  cursor: text;
  min-width: 100px;
`,ue=e=>{if(e)return C`
      width: 100%;
    `},$e=(e,t,r)=>{if(e)return C`
      border-color: ${r==null?void 0:r.colors.error};
    `;if(t)return C`
      border-color: ${r==null?void 0:r.colors.success};
    `},Vt=e=>e==="big"?C`
      height: 60px;
    `:C`
    height: 50px;
  `,Z=(e,t)=>C`
  ${L(e)} {
    gap: ${t==="none"?"0":`${t}px`};
  }
`,Ee=(e,t)=>C`
  ${L(e)} {
    grid-template-columns: repeat(${t||3}, minmax(0, 1fr));
  }
`,Re=(e,t)=>C`
  ${L(e)} {
    grid-column: span ${t};
  }
`,ke=(e,t)=>C`
  ${L(e)} {
    padding: ${t==="none"?"0":`${t}px`};
  }
`,Pe=(e,t)=>C`
  ${L(e)} {
    justify-content: ${t&&`${t}`};
  }
`,Oa=e=>C`
  font-size: ${e.fontSizes.hero1.xs};
  line-height: ${e.lineHeights.hero1.xs};

  ${L("lg")} {
    font-size: ${e.fontSizes.hero1.lg};
    line-height: ${e.lineHeights.hero1.lg};
  }
`,Aa=e=>C`
  font-size: ${e.fontSizes.hero2.xs};
  line-height: ${e.lineHeights.hero2.xs};

  ${L("lg")} {
    font-size: ${e.fontSizes.hero2.lg};
    line-height: ${e.lineHeights.hero2.lg};
  }
`,Ta=e=>C`
  font-size: ${e.fontSizes.hero3.xs};
  line-height: ${e.lineHeights.hero3.xs};

  ${L("lg")} {
    font-size: ${e.fontSizes.hero3.lg};
    line-height: ${e.lineHeights.hero3.lg};
  }
`,Ca=e=>C`
  font-size: ${e.fontSizes.h1.xs};
  line-height: ${e.lineHeights.h1.xs};

  ${L("lg")} {
    font-size: ${e.fontSizes.h1.lg};
    line-height: ${e.lineHeights.h1.lg};
  }
`,ja=e=>C`
  font-size: ${e.fontSizes.h2.xs};
  line-height: ${e.lineHeights.h2.xs};

  ${L("lg")} {
    font-size: ${e.fontSizes.h2.lg};
    line-height: ${e.lineHeights.h2.lg};
  }
`,Da=e=>C`
  font-size: ${e.fontSizes.h3.xs};
  line-height: ${e.lineHeights.h3.xs};

  ${L("lg")} {
    font-size: ${e.fontSizes.h3.lg};
    line-height: ${e.lineHeights.h3.lg};
  }
`,Na=e=>C`
  font-size: ${e.fontSizes.h4.xs};
  line-height: ${e.lineHeights.h4.xs};

  ${L("lg")} {
    font-size: ${e.fontSizes.h4.lg};
    line-height: ${e.lineHeights.h4.lg};
  }
`,Ia=e=>C`
  font-size: ${e.fontSizes.h5.xs};
  line-height: ${e.lineHeights.h5.xs};

  ${L("lg")} {
    font-size: ${e.fontSizes.h5.lg};
    line-height: ${e.lineHeights.h5.lg};
  }
`,La=e=>C`
  font-size: ${e.fontSizes.h6.xs};
  line-height: ${e.lineHeights.h6.xs};

  ${L("lg")} {
    font-size: ${e.fontSizes.h6.lg};
    line-height: ${e.lineHeights.h6.lg};
  }
`,Ma=e=>C`
  font-size: ${e.fontSizes.text.xs};
  line-height: ${e.lineHeights.text.xs};

  ${L("lg")} {
    font-size: ${e.fontSizes.text.lg};
    line-height: ${e.lineHeights.text.lg};
  }
`,za=e=>C`
  font-size: ${e.fontSizes.strong.xs};
  line-height: ${e.lineHeights.strong.xs};

  ${L("lg")} {
    font-size: ${e.fontSizes.strong.lg};
    line-height: ${e.lineHeights.strong.lg};
  }
`,qa=e=>C`
  font-size: ${e.fontSizes.small.xs};
  line-height: ${e.lineHeights.small.xs};

  ${L("lg")} {
    font-size: ${e.fontSizes.small.lg};
    line-height: ${e.lineHeights.small.lg};
  }
`,Ha=e=>C`
  font-size: ${e.fontSizes.blockquote.xs};
  line-height: ${e.lineHeights.blockquote.xs};

  ${L("lg")} {
    font-size: ${e.fontSizes.blockquote.lg};
    line-height: ${e.lineHeights.blockquote.lg};
  }
`,Ba=e=>C`
  font-size: ${e.fontSizes.code.xs};
  line-height: ${e.lineHeights.code.xs};

  ${L("lg")} {
    font-size: ${e.fontSizes.code.lg};
    line-height: ${e.lineHeights.code.lg};
  }
`,Wa=e=>C`
  font-size: ${e.fontSizes.button.xs};
  line-height: ${e.lineHeights.button.xs};

  ${L("lg")} {
    font-size: ${e.fontSizes.button.lg};
    line-height: ${e.lineHeights.button.lg};
  }
`,Fa=e=>C`
  font-size: ${e.fontSizes.buttonBig.xs};
  line-height: ${e.lineHeights.buttonBig.xs};

  ${L("lg")} {
    font-size: ${e.fontSizes.buttonBig.lg};
    line-height: ${e.lineHeights.buttonBig.lg};
  }
`,Ua=e=>C`
  font-size: ${e.fontSizes.input.xs};
  line-height: ${e.lineHeights.input.xs};

  ${L("lg")} {
    font-size: ${e.fontSizes.input.lg};
    line-height: ${e.lineHeights.input.lg};
  }
`,Ga=e=>C`
  font-size: ${e.fontSizes.inputBig.xs};
  line-height: ${e.lineHeights.inputBig.xs};

  ${L("lg")} {
    font-size: ${e.fontSizes.inputBig.lg};
    line-height: ${e.lineHeights.inputBig.lg};
  }
`,Co=w.createContext({setTheme:null});function Ya({children:e,theme:t,themeDark:r}){const[n,o]=w.useState(t);w.useEffect(()=>{if(!r)return o(t);localStorage.theme==="dark"||!("theme"in localStorage)&&window.matchMedia("(prefers-color-scheme: dark)").matches?(document.documentElement.classList.add("dark"),o(r)):(document.documentElement.classList.remove("dark"),o(t))},[]);const i=$o(n);return v.jsx(Sa,{theme:n,children:v.jsxs(Co.Provider,{value:{setTheme:o},children:[v.jsx(i,{}),e]})})}const Va=H.div`
  margin: auto;
  width: 100%;
  max-width: ${({theme:e,$fluid:t})=>t?"100%":e.spacing.maxWidth.xs};
  ${({$textAlign:e})=>e&&`text-align: ${e}`};
  padding: ${({$padding:e,theme:t})=>e&&`${e}px`||t.spacing.padding.xs};

  ${L("lg")} {
    padding: ${({$padding:e,theme:t})=>e&&`${e}px`||t.spacing.padding.lg};
  }

  ${L("xxxl")} {
    max-width: ${({theme:e,$fluid:t})=>t?"100%":e.spacing.maxWidth.xxxl};
  }

  ${({$xsPadding:e})=>e&&ke("xs",e)}
  ${({$smPadding:e})=>e&&ke("sm",e)}
	${({$mdPadding:e})=>e&&ke("md",e)}
	${({$lgPadding:e})=>e&&ke("lg",e)}
	${({$xlPadding:e})=>e&&ke("xl",e)}
	${({$xxlPadding:e})=>e&&ke("xxl",e)}
	${({$xxxlPadding:e})=>e&&ke("xxxl",e)}
`;function Xa({theme:e=Je,...t},r){return v.jsx(Va,{...t,theme:e,ref:r,children:t.children})}const jo=w.forwardRef(Xa),Ka=H(jo)`
  background: ${({theme:e})=>e.colors.light};
  border-radius: ${({theme:e})=>e.spacing.radius.lg};
  border: solid 1px ${({theme:e})=>e.colors.grayLight};
`;function Ja({theme:e=Je,...t},r){return v.jsx(Ka,{...t,theme:e,ref:r,children:t.children})}const Za=w.forwardRef(Ja),Do=(e,t,r,n,o,i)=>C`
  ${ce};
  font-family: inherit;
  display: inline-flex;
  padding: 15px 30px;
  border-radius: 100px;
  font-weight: 600;
  white-space: nowrap;
  hyphens: auto;
  color: ${e.isDark?e.colors.dark:e.colors.light};
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

  ${!i&&t==="primary"&&C`
    color: ${n?e.colors.primary:e.colors.light};
    background: ${n?"transparent":e.colors.primary};
    border: solid 2px ${e.colors.primary};
    box-shadow: 0 0 0 0px ${e.colors.primary};

    @media (hover: hover) {
      &:hover {
        background: ${n?"transparent":e.colors.primaryDark};
        border-color: ${e.colors.primaryDark};
        ${n&&`color: ${e.colors.primaryDark}`};
      }
    }

    &:focus {
      box-shadow: 0 0 0 4px ${e.colors.primaryLight};
    }

    &:active {
      box-shadow: 0 0 0 2px ${e.colors.primaryLight};
    }
  `}

  ${!i&&t==="secondary"&&C`
    color: ${n?e.colors.secondary:e.colors.light};
    background: ${n?"transparent":e.colors.secondary};
    border: solid 2px ${e.colors.secondary};
    box-shadow: 0 0 0 0px ${e.colors.secondary};

    @media (hover: hover) {
      &:hover {
        background: ${n?"transparent":e.colors.secondaryDark};
        border-color: ${e.colors.secondaryDark};
        ${n&&`color: ${e.colors.secondaryDark}`};
      }
    }

    &:focus {
      box-shadow: 0 0 0 4px ${e.colors.secondaryLight};
    }

    &:active {
      box-shadow: 0 0 0 2px ${e.colors.secondaryLight};
    }
  `}

	${!i&&t==="tertiary"&&C`
    color: ${n?e.colors.tertiary:e.colors.light};
    background: ${n?"transparent":e.colors.tertiary};
    border: solid 2px ${e.colors.tertiary};
    box-shadow: 0 0 0 0px ${e.colors.tertiary};

    @media (hover: hover) {
      &:hover {
        background: ${n?"transparent":e.colors.tertiaryDark};
        border-color: ${e.colors.tertiaryDark};
        ${n&&`color: ${e.colors.tertiaryDark}`};
      }
    }

    &:focus {
      box-shadow: 0 0 0 4px ${e.colors.tertiaryLight};
    }

    &:active {
      box-shadow: 0 0 0 2px ${e.colors.tertiaryLight};
    }
  `}

	${Vt(r)}

	${r==="big"?`font-size: ${e.fontSizes.buttonBig.lg};
			line-height: ${e.lineHeights.buttonBig.lg};
      padding: 18px 30px;
	`:`font-size: ${e.fontSizes.button.lg};
			line-height: ${e.lineHeights.button.lg};`}

	${i&&`
		cursor: not-allowed;
		background: ${e.colors.grayLight};
    border: solid 2px ${e.colors.grayLight};
		color: ${e.colors.gray};
	`}

	${o&&"width: 100%;"}
`,Qa=H.button`
  ${({theme:e,$variant:t,$size:r,$outline:n,$fullWidth:o,disabled:i})=>Do(e,t,r,n,o,i)}
`;function es({$variant:e="primary",...t},r){return v.jsxs(Qa,{$variant:e,...t,ref:r,children:[t.$iconPosition!=="right"&&t.$icon&&t.$icon,t.children,t.$iconPosition==="right"&&t.$icon&&t.$icon]})}const ts=w.forwardRef(es),rs=H.div`
  ${({$span:e})=>e&&`
		grid-column: span ${e};
	`}

  ${({$xsSpan:e})=>e&&Re("xs",e)}
	${({$smSpan:e})=>e&&Re("sm",e)}
	${({$mdSpan:e})=>e&&Re("md",e)}
	${({$lgSpan:e})=>e&&Re("lg",e)}
	${({$xlSpan:e})=>e&&Re("xl",e)}
	${({$xxlSpan:e})=>e&&Re("xxl",e)}
	${({$xxxlSpan:e})=>e&&Re("xxxl",e)}
`;function ns({theme:e=Je,...t},r){return v.jsx(rs,{...t,theme:e,ref:r,children:t.children})}const os=w.forwardRef(ns),is=H.div`
  display: flex;
  justify-content: ${({$justifyContent:e})=>e||"flex-start"};
  flex-wrap: ${({$wrap:e})=>e||"wrap"};
  gap: ${({$gap:e,theme:t})=>e&&`${e}px`||t.spacing.gridGap.xs};
  flex-direction: ${({$direction:e})=>e||"row"};

  ${L("lg")} {
    gap: ${({$gap:e,theme:t})=>e&&`${e}px`||t.spacing.gridGap.lg};
  }

  ${({$xsGap:e})=>e&&Z("xs",e)}
  ${({$xsJustifyContent:e})=>e&&Pe("xs",e)}
	${({$smGap:e})=>e&&Z("sm",e)}
	${({$smJustifyContent:e})=>e&&Pe("sm",e)}
	${({$mdGap:e})=>e&&Z("md",e)}
	${({$mdJustifyContent:e})=>e&&Pe("md",e)}
	${({$lgGap:e})=>e&&Z("lg",e)}
	${({$lgJustifyContent:e})=>e&&Pe("lg",e)}
	${({$xlGap:e})=>e&&Z("xl",e)}
	${({$xlJustifyContent:e})=>e&&Pe("xl",e)}
	${({$xxlGap:e})=>e&&Z("xxl",e)}
	${({$xxlJustifyContent:e})=>e&&Pe("xxl",e)}
	${({$xxxlGap:e})=>e&&Z("xxxl",e)}
	${({$xxxlJustifyContent:e})=>e&&Pe("xxxl",e)}
  ${({$fullWidth:e})=>ue(!!e)}
`;function as({theme:e=Je,...t},r){return v.jsx(is,{...t,theme:e,ref:r,children:t.children})}const ss=w.forwardRef(as),cs=H.div`
  width: 100%;
  display: grid;
  grid-template-columns: ${({$cols:e})=>`repeat(${e||3}, minmax(0, 1fr))`};
  gap: ${({$gap:e,theme:t})=>e&&`${e}px`||t.spacing.gridGap.xs};

  ${L("lg")} {
    gap: ${({$gap:e,theme:t})=>e&&`${e}px`||t.spacing.gridGap.lg};
  }

  ${({$xsGap:e})=>e&&Z("xs",e)}
  ${({$smGap:e})=>e&&Z("sm",e)}
	${({$mdGap:e})=>e&&Z("md",e)}
	${({$lgGap:e})=>e&&Z("lg",e)}
	${({$xlGap:e})=>e&&Z("xl",e)}
	${({$xxlGap:e})=>e&&Z("xxl",e)}
	${({$xxxlGap:e})=>e&&Z("xxxl",e)}

	${({$xsCols:e})=>e&&Ee("xs",e)}
	${({$smCols:e})=>e&&Ee("sm",e)}
	${({$mdCols:e})=>e&&Ee("md",e)}
	${({$lgCols:e})=>e&&Ee("lg",e)}
	${({$xlCols:e})=>e&&Ee("xl",e)}
	${({$xxlCols:e})=>e&&Ee("xxl",e)}
	${({$xxxlCols:e})=>e&&Ee("xxxl",e)}
`;function us({theme:e=Je,...t},r){return v.jsx(cs,{...t,theme:e,ref:r,children:t.children})}const ls=w.forwardRef(us),Ze=H.span`
  display: inline-flex;
  flex-wrap: ${({type:e})=>e==="checkbox"||e==="radio"?"nowrap":"wrap"};
  align-items: center;

  ${({$label:e})=>e&&C`
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

  ${({$fullWidth:e})=>ue(!!e)}
`,Me=H.label`
  display: inline-block;
  color: ${({theme:e})=>e.colors.grayDark};
  font-size: ${({theme:e})=>e.fontSizes.text.lg};
  line-height: ${({theme:e})=>e.lineHeights.text.lg};
  margin-top: ${({type:e})=>e==="checkbox"||e==="radio"?"-2px":"0"};
`,ds=H.input`
  ${ce};
  ${Yt};
  font-family: inherit;
  display: inline-block;
  padding: 17px 15px;
  border-radius: ${({theme:e})=>e.spacing.radius.xs};
  font-weight: 400;
  white-space: nowrap;
  hyphens: auto;
  color: ${({theme:e})=>e.colors.dark};
  background: ${({theme:e})=>e.colors.light};
  border: solid 2px ${({theme:e})=>e.colors.grayLight};
  box-shadow: 0 0 0 0px ${({theme:e})=>e.colors.primaryLight};
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
    color: ${({theme:e})=>e.colors.gray};
  }

  &::-webkit-datetime-edit-month-field {
    &:focus {
      background: ${({theme:e})=>e.colors.primary};
      color: ${({theme:e})=>e.colors.light};
      border-radius: 4px;
    }
  }

  &::-webkit-datetime-edit-day-field {
    &:focus {
      background: ${({theme:e})=>e.colors.primary};
      color: ${({theme:e})=>e.colors.light};
      border-radius: 4px;
    }
  }

  &::-webkit-datetime-edit-year-field {
    &:focus {
      background: ${({theme:e})=>e.colors.primary};
      color: ${({theme:e})=>e.colors.light};
      border-radius: 4px;
    }
  }

  &::placeholder {
    color: ${({theme:e})=>e.colors.gray};
  }

  @media (hover: hover) {
    &:hover:not([disabled]) {
      border-color: ${({theme:e})=>e.colors.primary};
    }
  }

  &:focus:not([disabled]) {
    box-shadow: 0 0 0 4px ${({theme:e})=>e.colors.primaryLight};
    border-color: ${({theme:e})=>e.colors.primary};
  }

  &:active:not([disabled]) {
    box-shadow: 0 0 0 2px ${({theme:e})=>e.colors.primaryLight};
  }

  ${({$size:e})=>Vt(e)}

  ${({$size:e,theme:t})=>e==="big"?`font-size: ${t.fontSizes.inputBig.lg};
			line-height: ${t.lineHeights.inputBig.lg};
	`:`font-size: ${t.fontSizes.input.lg};
			line-height: ${t.lineHeights.input.lg};`}

	${({$error:e,$success:t,theme:r})=>$e(!!e,!!t,r)}

	${({disabled:e,theme:t})=>e&&`cursor: not-allowed;
		background: ${t.colors.grayLight};
		border-color: ${t.colors.gray};
		color: ${t.colors.gray};
	`}

	${({$fullWidth:e})=>ue(!!e)}
`,fs=H.span`
  display: inline-flex;
  position: relative;
  line-height: 0;
  min-width: fit-content;

  & em {
    display: block;
    border-radius: 50%;
    background: ${({theme:e})=>e.colors.primary};
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
`,ps=H.input`
  ${ce};
  display: inline-block;
  border: solid 2px ${({theme:e})=>e.colors.grayLight};
  box-shadow: 0 0 0 0px ${({theme:e})=>e.colors.primaryLight};
  transition: all 0.3s ease;

  @media (hover: hover) {
    &:hover:not([disabled]) {
      border-color: ${({theme:e})=>e.colors.primary};
    }
  }

  &:focus:not([disabled]) {
    box-shadow: 0 0 0 4px ${({theme:e})=>e.colors.primaryLight};
    border-color: ${({theme:e})=>e.colors.primary};
  }

  &:active:not([disabled]) {
    box-shadow: 0 0 0 2px ${({theme:e})=>e.colors.primaryLight};
  }

  ${({type:e,theme:t})=>e==="checkbox"?`border-radius: ${t.spacing.radius.xs};`:"border-radius: 50%;"}

  ${({disabled:e,theme:t})=>e&&`cursor: not-allowed;
		background: ${t.colors.grayLight};
    border: solid 2px ${t.colors.gray};
		color: ${t.colors.gray};
	`}

	${({$error:e,$success:t,theme:r})=>$e(!!e,!!t,r)}

	${({$size:e})=>e==="big"?`
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
				`:`
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
`,hs=H.span`
  position: relative;
  ${({$fullWidth:e})=>ue(!!e)};

  & svg {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    pointer-events: none;
    width: 24px;
    height: 24px;
    object-fit: contain;
    color: ${({theme:e})=>e.colors.primary};
  }

  ${({$icon:e,$iconPosition:t})=>e&&t==="right"?C`
          & svg {
            right: 16px;
          }

          & input {
            padding-right: 50px;
          }
        `:C`
          & svg {
            left: 16px;
          }

          & svg ~ input {
            padding-left: 50px;
          }
        `}
`;function gs({...e},t){return e.type==="checkbox"||e.type==="radio"?v.jsxs(Ze,{$fullWidth:e.$fullWidth,type:e.type,$label:e.$label,children:[v.jsxs(fs,{children:[v.jsx(ps,{...e,ref:t}),!e.disabled&&e.type==="checkbox"?v.jsx(Eo,{}):v.jsx("em",{})]}),e.$label&&v.jsx(Me,{htmlFor:e.id,...e,children:e.$label})]}):v.jsxs(Ze,{$fullWidth:e.$fullWidth,type:e.type,$label:e.$label,children:[e.$label&&v.jsx(Me,{htmlFor:e.id,children:e.$label}),v.jsxs(hs,{$fullWidth:e.$fullWidth,$iconPosition:e.$iconPosition,$icon:e.$icon,children:[e.$iconPosition!=="right"&&e.$icon&&e.$icon,v.jsx(ds,{...e,ref:t}),e.$iconPosition==="right"&&e.$icon&&e.$icon,e.type==="date"&&v.jsx(ko,{className:"icon-calendar"})]})]})}const ys=w.forwardRef(gs),No=e=>`max-width: ${e}px;`;function ms(e){return Object.keys(e).filter(t=>t.startsWith("$")).map(t=>{const r=t.substring(1);return e[t]&&L(r)+`{ ${No(e[t])} }`}).join("")}const bs=H.div`
  display: block;
  margin: ${({$m0:e})=>e?"0":"auto"};

  ${({$size:e})=>`
		${e&&No(e)};
	`}
  ${e=>ms(e)}
`;function xs({...e},t){return v.jsx(bs,{...e,ref:t,children:e.children})}const vs=w.forwardRef(xs),ws=H.span`
  display: inline-flex;
  flex-wrap: ${({type:e})=>e==="checkbox"||e==="radio"?"fprnowrap":"wrap"};
  gap: 10px;
  align-items: center;

  ${({$fullWidth:e})=>ue(!!e)}
`,Ss=H.input`
  ${ce};
  padding: 0;
  height: 10px;
  font-size: 0;
  background: transparent;
  min-width: 100px;

  &::-webkit-slider-runnable-track {
    width: 100%;
    cursor: pointer;
    border-radius: ${({theme:e})=>e.spacing.radius.xl};
    border: solid 2px ${({theme:e})=>e.colors.grayLight};
    box-shadow: 0 0 0 0 ${({theme:e})=>e.colors.primaryLight};
    transition: all 0.3s ease;
    ${({$error:e,$success:t,theme:r})=>$e(!!e,!!t,r)}
  }

  &::-moz-range-track {
    width: 100%;
    cursor: pointer;
    border-radius: ${({theme:e})=>e.spacing.radius.xl};
    border: solid 2px ${({theme:e})=>e.colors.grayLight};
    box-shadow: 0 0 0 0 ${({theme:e})=>e.colors.primaryLight};
    transition: all 0.3s ease;
    ${({$error:e,$success:t,theme:r})=>$e(!!e,!!t,r)}
  }

  &::-webkit-slider-thumb {
    ${ce};
    background: ${({theme:e})=>e.colors.primary};
    border: 0 solid transparent;
    border-radius: 50%;
    transition: all 0.3s ease;
  }

  &::-moz-range-thumb {
    ${ce};
    background: ${({theme:e})=>e.colors.primary};
    border: 0 solid transparent;
    border-radius: 50%;
    transition: all 0.3s ease;
  }

  @media (hover: hover) {
    &:hover:not([disabled]) {
      &::-webkit-slider-runnable-track {
        border: solid 2px ${({theme:e})=>e.colors.primary};
      }

      &::-moz-range-track {
        border: solid 2px ${({theme:e})=>e.colors.primary};
      }
    }
  }

  &:focus:not([disabled]) {
    &::-webkit-slider-runnable-track {
      border: solid 2px ${({theme:e})=>e.colors.primary};
      box-shadow: 0 0 0 4px ${({theme:e})=>e.colors.primaryLight};
    }
    &::-webkit-slider-thumb {
      box-shadow: 0 0 0 4px ${({theme:e})=>e.colors.primaryLight};
    }
    &::-moz-range-track {
      border: solid 2px ${({theme:e})=>e.colors.primary};
      box-shadow: 0 0 0 4px ${({theme:e})=>e.colors.primaryLight};
    }
    &::-moz-range-thumb {
      box-shadow: 0 0 0 4px ${({theme:e})=>e.colors.primaryLight};
    }
  }

  &:active:not([disabled]) {
    &::-webkit-slider-runnable-track {
      box-shadow: 0 0 0 2px ${({theme:e})=>e.colors.primaryLight};
    }
    &::-webkit-slider-thumb {
      box-shadow: 0 0 0 2px ${({theme:e})=>e.colors.primaryLight};
    }
    &::-moz-range-track {
      box-shadow: 0 0 0 2px ${({theme:e})=>e.colors.primaryLight};
    }
    &::-moz-range-thumb {
      box-shadow: 0 0 0 2px ${({theme:e})=>e.colors.primaryLight};
    }
  }

  ${({disabled:e,theme:t})=>e&&`
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

  ${({$fullWidth:e})=>ue(!!e)}

	${({$size:e})=>e==="big"?`
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
				`:`
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
`;function _s({...e},t){return v.jsxs(ws,{$fullWidth:e.$fullWidth,children:[e.$label&&v.jsx(Me,{htmlFor:e.id,children:e.$label}),v.jsx(Ss,{...e,type:"range",ref:t})]})}const $s=w.forwardRef(_s),Es=H.select`
  ${ce};
  ${Yt};
  font-family: inherit;
  display: inline-block;
  padding: 0 15px;
  border-radius: ${({theme:e})=>e.spacing.radius.xs};
  font-weight: 400;
  white-space: nowrap;
  hyphens: auto;
  color: ${({theme:e})=>e.colors.dark};
  background: ${({theme:e})=>e.colors.light};
  border: solid 2px ${({theme:e})=>e.colors.grayLight};
  box-shadow: 0 0 0 0px ${({theme:e})=>e.colors.primaryLight};
  transition: all 0.3s ease;

  &::placeholder {
    color: ${({theme:e})=>e.colors.gray};
  }

  @media (hover: hover) {
    &:hover:not([disabled]) {
      border-color: ${({theme:e})=>e.colors.primary};
    }
  }

  &:focus:not([disabled]) {
    box-shadow: 0 0 0 4px ${({theme:e})=>e.colors.primaryLight};
    border-color: ${({theme:e})=>e.colors.primary};
  }

  &:active:not([disabled]) {
    box-shadow: 0 0 0 2px ${({theme:e})=>e.colors.primaryLight};
  }

  ${({$size:e})=>Vt(e)}

  ${({$size:e,theme:t})=>e==="big"?`font-size: ${t.fontSizes.inputBig.lg};`:`font-size: ${t.fontSizes.input.lg};`}

	${({$error:e,$success:t,theme:r})=>$e(!!e,!!t,r)}

	${({disabled:e,theme:t})=>e&&`cursor: not-allowed;
		background: ${t.colors.grayLight};
		border-color: ${t.colors.gray};
		color: ${t.colors.gray};
	`}

	${({$fullWidth:e})=>ue(!!e)}
`,Io=H.span`
  position: relative;
  ${({$fullWidth:e})=>ue(!!e)}

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
`;function Rs({...e},t){return v.jsxs(Ze,{$fullWidth:e.$fullWidth,$label:e.$label,children:[e.$label&&v.jsx(Me,{htmlFor:e.id,children:e.$label}),v.jsxs(Io,{$fullWidth:e.$fullWidth,children:[v.jsx(Es,{...e,ref:t,children:e.children}),v.jsx(Ro,{})]})]})}const ks=w.forwardRef(Rs),Lo=(e,t)=>t?`display: inline-block;
			max-height: 0;
			min-width: ${e}px;
			max-width: ${e}px;`:`display: block;
			min-height: ${e}px;
			max-height: ${e}px;`;function Ps(e){return Object.keys(e).filter(t=>t.startsWith("$")).map(t=>{const r=t.substring(1);return e[t]&&L(r)+`{ ${Lo(e[t],e.$horizontal||!1)} }`}).join("")}const Os=H.span`
  ${({$horizontal:e,$size:t})=>`
		${t&&t!=="none"&&Lo(t,e||!1)};
		${t==="none"&&"display: none;"};
	`}
  ${e=>Ps(e)}
`;function As({...e},t){return v.jsx(Os,{...e,ref:t})}const Ts=w.forwardRef(As),Cs=H.textarea`
  ${ce};
  ${Yt};
  font-family: inherit;
  display: inline-block;
  padding: 15px;
  border-radius: ${({theme:e})=>e.spacing.radius.xs};
  font-weight: 400;
  white-space: break-spaces;
  hyphens: none;
  color: ${({theme:e})=>e.colors.dark};
  background: ${({theme:e})=>e.colors.light};
  border: solid 2px ${({theme:e})=>e.colors.grayLight};
  box-shadow: 0 0 0 0px ${({theme:e})=>e.colors.primaryLight};
  transition: all 0.3s ease;
  min-height: 80px;

  &::placeholder {
    color: ${({theme:e})=>e.colors.gray};
  }

  @media (hover: hover) {
    &:hover:not([disabled]) {
      border-color: ${({theme:e})=>e.colors.primary};
    }
  }

  &:focus:not([disabled]) {
    box-shadow: 0 0 0 4px ${({theme:e})=>e.colors.primaryLight};
    border-color: ${({theme:e})=>e.colors.primary};
  }

  &:active:not([disabled]) {
    box-shadow: 0 0 0 2px ${({theme:e})=>e.colors.primaryLight};
  }

  ${({$size:e,theme:t})=>e==="big"?`font-size: ${t.fontSizes.inputBig.lg};
			line-height: ${t.lineHeights.text.lg};
	`:`font-size: ${t.fontSizes.input.lg};
			line-height: ${t.lineHeights.text.lg};`}

  ${({$error:e,$success:t,theme:r})=>$e(!!e,!!t,r)}

	${({disabled:e,theme:t})=>e&&`cursor: not-allowed;
		background: ${t.colors.grayLight};
		border-color: ${t.colors.gray};
		color: ${t.colors.gray};
	`}

	${({$fullWidth:e})=>ue(!!e)}
`;function js({...e},t){return v.jsxs(Ze,{$fullWidth:e.$fullWidth,$label:e.$label,children:[e.$label&&v.jsx(Me,{htmlFor:e.id,$label:e.$label,children:e.$label}),v.jsx(Cs,{...e,ref:t,children:e.children})]})}const Ds=w.forwardRef(js),Ns=H.span`
  display: inline-block;
  margin: auto 0;
  position: relative;
  vertical-align: middle;
`,Is=H.span`
  display: block;
  border: solid 2px ${({theme:e})=>e.colors.grayLight};
  background: ${({theme:e})=>e.colors.light};
  border-radius: ${({theme:e})=>e.spacing.radius.xl};
  pointer-events: none;
  transition: all 0.3s ease;
  box-shadow: 0 0 0 0 ${({theme:e})=>e.colors.primaryLight};
  transform: none;
  width: ${({$size:e})=>e==="big"?"56px":"46px"};
  height: ${({$size:e})=>e==="big"?"32px":"22px"};

  ${({$error:e,$success:t,theme:r})=>$e(!!e,!!t,r)}

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
    border-radius: ${({theme:e})=>e.spacing.radius.xl};
    background: ${({theme:e})=>e.colors.light};
    transition: all 0.3s ease;
  }

  &::after {
    left: 0;
    top: 0;
    border-radius: 50%;
    transition: all 0.3s ease;
    transform: translateX(0);
    background: ${({theme:e})=>e.colors.primary};
    width: ${({$size:e})=>e==="big"?"32px":"22px"};
    height: ${({$size:e})=>e==="big"?"32px":"22px"};
  }
`,Ls=H.input`
  ${ce};
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
      background: ${({theme:e})=>e.colors.primaryLight};
    }

    &::after {
      transform: translateX(25px);
    }
  }

  @media (hover: hover) {
    &:hover:not([disabled]) ~ .fake-toggle {
      border-color: ${({theme:e})=>e.colors.primary};
    }
  }

  &:focus:not([disabled]) ~ .fake-toggle {
    outline: none;
    border-color: ${({theme:e})=>e.colors.primary};
    box-shadow: 0 0 0 4px ${({theme:e})=>e.colors.primaryLight};
  }

  &:active:not([disabled]) ~ .fake-toggle {
    box-shadow: 0 0 0 2px ${({theme:e})=>e.colors.primaryLight};
  }

  ${({disabled:e,theme:t})=>e&&`cursor: not-allowed;

		& ~ .fake-toggle {
			border-color: ${t.colors.gray};

			&::before {
				background: ${t.colors.grayLight};
			}

			&::after {
				background: ${t.colors.gray};
			}
		}`}
`;function Ms({type:e="checkbox",...t},r){return v.jsxs(Ze,{$fullWidth:t.$fullWidth,$label:t.$label,children:[v.jsxs(Ns,{children:[v.jsx(Ls,{...t,type:e,ref:r}),v.jsx(Is,{$error:t.$error,$success:t.$success,className:"fake-toggle",$size:t.$size})]}),t.$label&&v.jsx(Me,{htmlFor:t.id,children:t.$label})]})}const zs=w.forwardRef(Ms);h.Box=Za,h.Button=ts,h.CherryThemeProvider=Ya,h.Col=os,h.Container=jo,h.Flex=ss,h.GlobalStyles=$o,h.Grid=ls,h.IconArrow=Ro,h.IconCalendar=ko,h.IconCheck=Eo,h.Input=ys,h.MaxWidth=vs,h.Range=$s,h.Select=ks,h.Space=Ts,h.StyledComponentsRegistry=ka,h.StyledIconWrapper=Io,h.StyledInputWrapper=Ze,h.StyledLabel=Me,h.Textarea=Ds,h.ThemeContext=Co,h.Toggle=zs,h.breakpoints=Gt,h.buttonStyles=Do,h.colors=Po,h.colorsDark=Oo,h.fontSizes=Br,h.fonts=Hr,h.formElementHeightStyles=Vt,h.fullWidthStyles=ue,h.generateColSpanStyles=Re,h.generateColsStyles=Ee,h.generateGapStyles=Z,h.generateJustifyContentStyles=Pe,h.generatePaddingStyles=ke,h.lineHeights=Wr,h.mq=L,h.resetButton=ce,h.resetInput=Yt,h.shadows=Ao,h.shadowsDark=To,h.spacing=qr,h.statusBorderStyles=$e,h.styledBlockquote=Ha,h.styledButton=Wa,h.styledButtonBig=Fa,h.styledCode=Ba,h.styledH1=Ca,h.styledH2=ja,h.styledH3=Da,h.styledH4=Na,h.styledH5=Ia,h.styledH6=La,h.styledHero1=Oa,h.styledHero2=Aa,h.styledHero3=Ta,h.styledInput=Ua,h.styledInputBig=Ga,h.styledSmall=qa,h.styledStrong=za,h.styledText=Ma,h.theme=Je,h.themeDark=Pa,Object.defineProperty(h,Symbol.toStringTag,{value:"Module"})});
