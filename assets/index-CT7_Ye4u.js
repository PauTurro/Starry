(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))a(o);new MutationObserver(o=>{for(const c of o)if(c.type==="childList")for(const h of c.addedNodes)h.tagName==="LINK"&&h.rel==="modulepreload"&&a(h)}).observe(document,{childList:!0,subtree:!0});function i(o){const c={};return o.integrity&&(c.integrity=o.integrity),o.referrerPolicy&&(c.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?c.credentials="include":o.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function a(o){if(o.ep)return;o.ep=!0;const c=i(o);fetch(o.href,c)}})();function pv(s){return s&&s.__esModule&&Object.prototype.hasOwnProperty.call(s,"default")?s.default:s}var yf={exports:{}},oa={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Wg;function YS(){if(Wg)return oa;Wg=1;var s=Symbol.for("react.transitional.element"),t=Symbol.for("react.fragment");function i(a,o,c){var h=null;if(c!==void 0&&(h=""+c),o.key!==void 0&&(h=""+o.key),"key"in o){c={};for(var d in o)d!=="key"&&(c[d]=o[d])}else c=o;return o=c.ref,{$$typeof:s,type:a,key:h,ref:o!==void 0?o:null,props:c}}return oa.Fragment=t,oa.jsx=i,oa.jsxs=i,oa}var Zg;function QS(){return Zg||(Zg=1,yf.exports=YS()),yf.exports}var xe=QS(),Ef={exports:{}},J={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Jg;function FS(){if(Jg)return J;Jg=1;var s=Symbol.for("react.transitional.element"),t=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),a=Symbol.for("react.strict_mode"),o=Symbol.for("react.profiler"),c=Symbol.for("react.consumer"),h=Symbol.for("react.context"),d=Symbol.for("react.forward_ref"),p=Symbol.for("react.suspense"),g=Symbol.for("react.memo"),v=Symbol.for("react.lazy"),E=Symbol.iterator;function b(S){return S===null||typeof S!="object"?null:(S=E&&S[E]||S["@@iterator"],typeof S=="function"?S:null)}var x={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},L=Object.assign,X={};function se(S,k,P){this.props=S,this.context=k,this.refs=X,this.updater=P||x}se.prototype.isReactComponent={},se.prototype.setState=function(S,k){if(typeof S!="object"&&typeof S!="function"&&S!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,S,k,"setState")},se.prototype.forceUpdate=function(S){this.updater.enqueueForceUpdate(this,S,"forceUpdate")};function je(){}je.prototype=se.prototype;function Ye(S,k,P){this.props=S,this.context=k,this.refs=X,this.updater=P||x}var Ae=Ye.prototype=new je;Ae.constructor=Ye,L(Ae,se.prototype),Ae.isPureReactComponent=!0;var Ze=Array.isArray,ee={H:null,A:null,T:null,S:null,V:null},Qe=Object.prototype.hasOwnProperty;function Z(S,k,P,z,V,fe){return P=fe.ref,{$$typeof:s,type:S,key:k,ref:P!==void 0?P:null,props:fe}}function re(S,k){return Z(S.type,k,void 0,void 0,void 0,S.props)}function ae(S){return typeof S=="object"&&S!==null&&S.$$typeof===s}function Te(S){var k={"=":"=0",":":"=2"};return"$"+S.replace(/[=:]/g,function(P){return k[P]})}var Ue=/\/+/g;function Re(S,k){return typeof S=="object"&&S!==null&&S.key!=null?Te(""+S.key):k.toString(36)}function Qt(){}function Ai(S){switch(S.status){case"fulfilled":return S.value;case"rejected":throw S.reason;default:switch(typeof S.status=="string"?S.then(Qt,Qt):(S.status="pending",S.then(function(k){S.status==="pending"&&(S.status="fulfilled",S.value=k)},function(k){S.status==="pending"&&(S.status="rejected",S.reason=k)})),S.status){case"fulfilled":return S.value;case"rejected":throw S.reason}}throw S}function ut(S,k,P,z,V){var fe=typeof S;(fe==="undefined"||fe==="boolean")&&(S=null);var W=!1;if(S===null)W=!0;else switch(fe){case"bigint":case"string":case"number":W=!0;break;case"object":switch(S.$$typeof){case s:case t:W=!0;break;case v:return W=S._init,ut(W(S._payload),k,P,z,V)}}if(W)return V=V(S),W=z===""?"."+Re(S,0):z,Ze(V)?(P="",W!=null&&(P=W.replace(Ue,"$&/")+"/"),ut(V,k,P,"",function(zn){return zn})):V!=null&&(ae(V)&&(V=re(V,P+(V.key==null||S&&S.key===V.key?"":(""+V.key).replace(Ue,"$&/")+"/")+W)),k.push(V)),1;W=0;var Ct=z===""?".":z+":";if(Ze(S))for(var De=0;De<S.length;De++)z=S[De],fe=Ct+Re(z,De),W+=ut(z,k,P,fe,V);else if(De=b(S),typeof De=="function")for(S=De.call(S),De=0;!(z=S.next()).done;)z=z.value,fe=Ct+Re(z,De++),W+=ut(z,k,P,fe,V);else if(fe==="object"){if(typeof S.then=="function")return ut(Ai(S),k,P,z,V);throw k=String(S),Error("Objects are not valid as a React child (found: "+(k==="[object Object]"?"object with keys {"+Object.keys(S).join(", ")+"}":k)+"). If you meant to render a collection of children, use an array instead.")}return W}function D(S,k,P){if(S==null)return S;var z=[],V=0;return ut(S,z,"","",function(fe){return k.call(P,fe,V++)}),z}function H(S){if(S._status===-1){var k=S._result;k=k(),k.then(function(P){(S._status===0||S._status===-1)&&(S._status=1,S._result=P)},function(P){(S._status===0||S._status===-1)&&(S._status=2,S._result=P)}),S._status===-1&&(S._status=0,S._result=k)}if(S._status===1)return S._result.default;throw S._result}var Y=typeof reportError=="function"?reportError:function(S){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var k=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof S=="object"&&S!==null&&typeof S.message=="string"?String(S.message):String(S),error:S});if(!window.dispatchEvent(k))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",S);return}console.error(S)};function be(){}return J.Children={map:D,forEach:function(S,k,P){D(S,function(){k.apply(this,arguments)},P)},count:function(S){var k=0;return D(S,function(){k++}),k},toArray:function(S){return D(S,function(k){return k})||[]},only:function(S){if(!ae(S))throw Error("React.Children.only expected to receive a single React element child.");return S}},J.Component=se,J.Fragment=i,J.Profiler=o,J.PureComponent=Ye,J.StrictMode=a,J.Suspense=p,J.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=ee,J.__COMPILER_RUNTIME={__proto__:null,c:function(S){return ee.H.useMemoCache(S)}},J.cache=function(S){return function(){return S.apply(null,arguments)}},J.cloneElement=function(S,k,P){if(S==null)throw Error("The argument must be a React element, but you passed "+S+".");var z=L({},S.props),V=S.key,fe=void 0;if(k!=null)for(W in k.ref!==void 0&&(fe=void 0),k.key!==void 0&&(V=""+k.key),k)!Qe.call(k,W)||W==="key"||W==="__self"||W==="__source"||W==="ref"&&k.ref===void 0||(z[W]=k[W]);var W=arguments.length-2;if(W===1)z.children=P;else if(1<W){for(var Ct=Array(W),De=0;De<W;De++)Ct[De]=arguments[De+2];z.children=Ct}return Z(S.type,V,void 0,void 0,fe,z)},J.createContext=function(S){return S={$$typeof:h,_currentValue:S,_currentValue2:S,_threadCount:0,Provider:null,Consumer:null},S.Provider=S,S.Consumer={$$typeof:c,_context:S},S},J.createElement=function(S,k,P){var z,V={},fe=null;if(k!=null)for(z in k.key!==void 0&&(fe=""+k.key),k)Qe.call(k,z)&&z!=="key"&&z!=="__self"&&z!=="__source"&&(V[z]=k[z]);var W=arguments.length-2;if(W===1)V.children=P;else if(1<W){for(var Ct=Array(W),De=0;De<W;De++)Ct[De]=arguments[De+2];V.children=Ct}if(S&&S.defaultProps)for(z in W=S.defaultProps,W)V[z]===void 0&&(V[z]=W[z]);return Z(S,fe,void 0,void 0,null,V)},J.createRef=function(){return{current:null}},J.forwardRef=function(S){return{$$typeof:d,render:S}},J.isValidElement=ae,J.lazy=function(S){return{$$typeof:v,_payload:{_status:-1,_result:S},_init:H}},J.memo=function(S,k){return{$$typeof:g,type:S,compare:k===void 0?null:k}},J.startTransition=function(S){var k=ee.T,P={};ee.T=P;try{var z=S(),V=ee.S;V!==null&&V(P,z),typeof z=="object"&&z!==null&&typeof z.then=="function"&&z.then(be,Y)}catch(fe){Y(fe)}finally{ee.T=k}},J.unstable_useCacheRefresh=function(){return ee.H.useCacheRefresh()},J.use=function(S){return ee.H.use(S)},J.useActionState=function(S,k,P){return ee.H.useActionState(S,k,P)},J.useCallback=function(S,k){return ee.H.useCallback(S,k)},J.useContext=function(S){return ee.H.useContext(S)},J.useDebugValue=function(){},J.useDeferredValue=function(S,k){return ee.H.useDeferredValue(S,k)},J.useEffect=function(S,k,P){var z=ee.H;if(typeof P=="function")throw Error("useEffect CRUD overload is not enabled in this build of React.");return z.useEffect(S,k)},J.useId=function(){return ee.H.useId()},J.useImperativeHandle=function(S,k,P){return ee.H.useImperativeHandle(S,k,P)},J.useInsertionEffect=function(S,k){return ee.H.useInsertionEffect(S,k)},J.useLayoutEffect=function(S,k){return ee.H.useLayoutEffect(S,k)},J.useMemo=function(S,k){return ee.H.useMemo(S,k)},J.useOptimistic=function(S,k){return ee.H.useOptimistic(S,k)},J.useReducer=function(S,k,P){return ee.H.useReducer(S,k,P)},J.useRef=function(S){return ee.H.useRef(S)},J.useState=function(S){return ee.H.useState(S)},J.useSyncExternalStore=function(S,k,P){return ee.H.useSyncExternalStore(S,k,P)},J.useTransition=function(){return ee.H.useTransition()},J.version="19.1.0",J}var $g;function uh(){return $g||($g=1,Ef.exports=FS()),Ef.exports}var ke=uh();const KS=pv(ke);var Sf={exports:{}},ua={},Tf={exports:{}},bf={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var em;function XS(){return em||(em=1,function(s){function t(D,H){var Y=D.length;D.push(H);e:for(;0<Y;){var be=Y-1>>>1,S=D[be];if(0<o(S,H))D[be]=H,D[Y]=S,Y=be;else break e}}function i(D){return D.length===0?null:D[0]}function a(D){if(D.length===0)return null;var H=D[0],Y=D.pop();if(Y!==H){D[0]=Y;e:for(var be=0,S=D.length,k=S>>>1;be<k;){var P=2*(be+1)-1,z=D[P],V=P+1,fe=D[V];if(0>o(z,Y))V<S&&0>o(fe,z)?(D[be]=fe,D[V]=Y,be=V):(D[be]=z,D[P]=Y,be=P);else if(V<S&&0>o(fe,Y))D[be]=fe,D[V]=Y,be=V;else break e}}return H}function o(D,H){var Y=D.sortIndex-H.sortIndex;return Y!==0?Y:D.id-H.id}if(s.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var c=performance;s.unstable_now=function(){return c.now()}}else{var h=Date,d=h.now();s.unstable_now=function(){return h.now()-d}}var p=[],g=[],v=1,E=null,b=3,x=!1,L=!1,X=!1,se=!1,je=typeof setTimeout=="function"?setTimeout:null,Ye=typeof clearTimeout=="function"?clearTimeout:null,Ae=typeof setImmediate<"u"?setImmediate:null;function Ze(D){for(var H=i(g);H!==null;){if(H.callback===null)a(g);else if(H.startTime<=D)a(g),H.sortIndex=H.expirationTime,t(p,H);else break;H=i(g)}}function ee(D){if(X=!1,Ze(D),!L)if(i(p)!==null)L=!0,Qe||(Qe=!0,Re());else{var H=i(g);H!==null&&ut(ee,H.startTime-D)}}var Qe=!1,Z=-1,re=5,ae=-1;function Te(){return se?!0:!(s.unstable_now()-ae<re)}function Ue(){if(se=!1,Qe){var D=s.unstable_now();ae=D;var H=!0;try{e:{L=!1,X&&(X=!1,Ye(Z),Z=-1),x=!0;var Y=b;try{t:{for(Ze(D),E=i(p);E!==null&&!(E.expirationTime>D&&Te());){var be=E.callback;if(typeof be=="function"){E.callback=null,b=E.priorityLevel;var S=be(E.expirationTime<=D);if(D=s.unstable_now(),typeof S=="function"){E.callback=S,Ze(D),H=!0;break t}E===i(p)&&a(p),Ze(D)}else a(p);E=i(p)}if(E!==null)H=!0;else{var k=i(g);k!==null&&ut(ee,k.startTime-D),H=!1}}break e}finally{E=null,b=Y,x=!1}H=void 0}}finally{H?Re():Qe=!1}}}var Re;if(typeof Ae=="function")Re=function(){Ae(Ue)};else if(typeof MessageChannel<"u"){var Qt=new MessageChannel,Ai=Qt.port2;Qt.port1.onmessage=Ue,Re=function(){Ai.postMessage(null)}}else Re=function(){je(Ue,0)};function ut(D,H){Z=je(function(){D(s.unstable_now())},H)}s.unstable_IdlePriority=5,s.unstable_ImmediatePriority=1,s.unstable_LowPriority=4,s.unstable_NormalPriority=3,s.unstable_Profiling=null,s.unstable_UserBlockingPriority=2,s.unstable_cancelCallback=function(D){D.callback=null},s.unstable_forceFrameRate=function(D){0>D||125<D?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):re=0<D?Math.floor(1e3/D):5},s.unstable_getCurrentPriorityLevel=function(){return b},s.unstable_next=function(D){switch(b){case 1:case 2:case 3:var H=3;break;default:H=b}var Y=b;b=H;try{return D()}finally{b=Y}},s.unstable_requestPaint=function(){se=!0},s.unstable_runWithPriority=function(D,H){switch(D){case 1:case 2:case 3:case 4:case 5:break;default:D=3}var Y=b;b=D;try{return H()}finally{b=Y}},s.unstable_scheduleCallback=function(D,H,Y){var be=s.unstable_now();switch(typeof Y=="object"&&Y!==null?(Y=Y.delay,Y=typeof Y=="number"&&0<Y?be+Y:be):Y=be,D){case 1:var S=-1;break;case 2:S=250;break;case 5:S=1073741823;break;case 4:S=1e4;break;default:S=5e3}return S=Y+S,D={id:v++,callback:H,priorityLevel:D,startTime:Y,expirationTime:S,sortIndex:-1},Y>be?(D.sortIndex=Y,t(g,D),i(p)===null&&D===i(g)&&(X?(Ye(Z),Z=-1):X=!0,ut(ee,Y-be))):(D.sortIndex=S,t(p,D),L||x||(L=!0,Qe||(Qe=!0,Re()))),D},s.unstable_shouldYield=Te,s.unstable_wrapCallback=function(D){var H=b;return function(){var Y=b;b=H;try{return D.apply(this,arguments)}finally{b=Y}}}}(bf)),bf}var tm;function WS(){return tm||(tm=1,Tf.exports=XS()),Tf.exports}var Cf={exports:{}},ht={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var nm;function ZS(){if(nm)return ht;nm=1;var s=uh();function t(p){var g="https://react.dev/errors/"+p;if(1<arguments.length){g+="?args[]="+encodeURIComponent(arguments[1]);for(var v=2;v<arguments.length;v++)g+="&args[]="+encodeURIComponent(arguments[v])}return"Minified React error #"+p+"; visit "+g+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function i(){}var a={d:{f:i,r:function(){throw Error(t(522))},D:i,C:i,L:i,m:i,X:i,S:i,M:i},p:0,findDOMNode:null},o=Symbol.for("react.portal");function c(p,g,v){var E=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:o,key:E==null?null:""+E,children:p,containerInfo:g,implementation:v}}var h=s.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function d(p,g){if(p==="font")return"";if(typeof g=="string")return g==="use-credentials"?g:""}return ht.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=a,ht.createPortal=function(p,g){var v=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!g||g.nodeType!==1&&g.nodeType!==9&&g.nodeType!==11)throw Error(t(299));return c(p,g,null,v)},ht.flushSync=function(p){var g=h.T,v=a.p;try{if(h.T=null,a.p=2,p)return p()}finally{h.T=g,a.p=v,a.d.f()}},ht.preconnect=function(p,g){typeof p=="string"&&(g?(g=g.crossOrigin,g=typeof g=="string"?g==="use-credentials"?g:"":void 0):g=null,a.d.C(p,g))},ht.prefetchDNS=function(p){typeof p=="string"&&a.d.D(p)},ht.preinit=function(p,g){if(typeof p=="string"&&g&&typeof g.as=="string"){var v=g.as,E=d(v,g.crossOrigin),b=typeof g.integrity=="string"?g.integrity:void 0,x=typeof g.fetchPriority=="string"?g.fetchPriority:void 0;v==="style"?a.d.S(p,typeof g.precedence=="string"?g.precedence:void 0,{crossOrigin:E,integrity:b,fetchPriority:x}):v==="script"&&a.d.X(p,{crossOrigin:E,integrity:b,fetchPriority:x,nonce:typeof g.nonce=="string"?g.nonce:void 0})}},ht.preinitModule=function(p,g){if(typeof p=="string")if(typeof g=="object"&&g!==null){if(g.as==null||g.as==="script"){var v=d(g.as,g.crossOrigin);a.d.M(p,{crossOrigin:v,integrity:typeof g.integrity=="string"?g.integrity:void 0,nonce:typeof g.nonce=="string"?g.nonce:void 0})}}else g==null&&a.d.M(p)},ht.preload=function(p,g){if(typeof p=="string"&&typeof g=="object"&&g!==null&&typeof g.as=="string"){var v=g.as,E=d(v,g.crossOrigin);a.d.L(p,v,{crossOrigin:E,integrity:typeof g.integrity=="string"?g.integrity:void 0,nonce:typeof g.nonce=="string"?g.nonce:void 0,type:typeof g.type=="string"?g.type:void 0,fetchPriority:typeof g.fetchPriority=="string"?g.fetchPriority:void 0,referrerPolicy:typeof g.referrerPolicy=="string"?g.referrerPolicy:void 0,imageSrcSet:typeof g.imageSrcSet=="string"?g.imageSrcSet:void 0,imageSizes:typeof g.imageSizes=="string"?g.imageSizes:void 0,media:typeof g.media=="string"?g.media:void 0})}},ht.preloadModule=function(p,g){if(typeof p=="string")if(g){var v=d(g.as,g.crossOrigin);a.d.m(p,{as:typeof g.as=="string"&&g.as!=="script"?g.as:void 0,crossOrigin:v,integrity:typeof g.integrity=="string"?g.integrity:void 0})}else a.d.m(p)},ht.requestFormReset=function(p){a.d.r(p)},ht.unstable_batchedUpdates=function(p,g){return p(g)},ht.useFormState=function(p,g,v){return h.H.useFormState(p,g,v)},ht.useFormStatus=function(){return h.H.useHostTransitionStatus()},ht.version="19.1.0",ht}var im;function JS(){if(im)return Cf.exports;im=1;function s(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s)}catch(t){console.error(t)}}return s(),Cf.exports=ZS(),Cf.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var sm;function $S(){if(sm)return ua;sm=1;var s=WS(),t=uh(),i=JS();function a(e){var n="https://react.dev/errors/"+e;if(1<arguments.length){n+="?args[]="+encodeURIComponent(arguments[1]);for(var r=2;r<arguments.length;r++)n+="&args[]="+encodeURIComponent(arguments[r])}return"Minified React error #"+e+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function o(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function c(e){var n=e,r=e;if(e.alternate)for(;n.return;)n=n.return;else{e=n;do n=e,(n.flags&4098)!==0&&(r=n.return),e=n.return;while(e)}return n.tag===3?r:null}function h(e){if(e.tag===13){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function d(e){if(c(e)!==e)throw Error(a(188))}function p(e){var n=e.alternate;if(!n){if(n=c(e),n===null)throw Error(a(188));return n!==e?null:e}for(var r=e,l=n;;){var u=r.return;if(u===null)break;var f=u.alternate;if(f===null){if(l=u.return,l!==null){r=l;continue}break}if(u.child===f.child){for(f=u.child;f;){if(f===r)return d(u),e;if(f===l)return d(u),n;f=f.sibling}throw Error(a(188))}if(r.return!==l.return)r=u,l=f;else{for(var _=!1,m=u.child;m;){if(m===r){_=!0,r=u,l=f;break}if(m===l){_=!0,l=u,r=f;break}m=m.sibling}if(!_){for(m=f.child;m;){if(m===r){_=!0,r=f,l=u;break}if(m===l){_=!0,l=f,r=u;break}m=m.sibling}if(!_)throw Error(a(189))}}if(r.alternate!==l)throw Error(a(190))}if(r.tag!==3)throw Error(a(188));return r.stateNode.current===r?e:n}function g(e){var n=e.tag;if(n===5||n===26||n===27||n===6)return e;for(e=e.child;e!==null;){if(n=g(e),n!==null)return n;e=e.sibling}return null}var v=Object.assign,E=Symbol.for("react.element"),b=Symbol.for("react.transitional.element"),x=Symbol.for("react.portal"),L=Symbol.for("react.fragment"),X=Symbol.for("react.strict_mode"),se=Symbol.for("react.profiler"),je=Symbol.for("react.provider"),Ye=Symbol.for("react.consumer"),Ae=Symbol.for("react.context"),Ze=Symbol.for("react.forward_ref"),ee=Symbol.for("react.suspense"),Qe=Symbol.for("react.suspense_list"),Z=Symbol.for("react.memo"),re=Symbol.for("react.lazy"),ae=Symbol.for("react.activity"),Te=Symbol.for("react.memo_cache_sentinel"),Ue=Symbol.iterator;function Re(e){return e===null||typeof e!="object"?null:(e=Ue&&e[Ue]||e["@@iterator"],typeof e=="function"?e:null)}var Qt=Symbol.for("react.client.reference");function Ai(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===Qt?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case L:return"Fragment";case se:return"Profiler";case X:return"StrictMode";case ee:return"Suspense";case Qe:return"SuspenseList";case ae:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case x:return"Portal";case Ae:return(e.displayName||"Context")+".Provider";case Ye:return(e._context.displayName||"Context")+".Consumer";case Ze:var n=e.render;return e=e.displayName,e||(e=n.displayName||n.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Z:return n=e.displayName||null,n!==null?n:Ai(e.type)||"Memo";case re:n=e._payload,e=e._init;try{return Ai(e(n))}catch{}}return null}var ut=Array.isArray,D=t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,H=i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,Y={pending:!1,data:null,method:null,action:null},be=[],S=-1;function k(e){return{current:e}}function P(e){0>S||(e.current=be[S],be[S]=null,S--)}function z(e,n){S++,be[S]=e.current,e.current=n}var V=k(null),fe=k(null),W=k(null),Ct=k(null);function De(e,n){switch(z(W,n),z(fe,e),z(V,null),n.nodeType){case 9:case 11:e=(e=n.documentElement)&&(e=e.namespaceURI)?Cg(e):0;break;default:if(e=n.tagName,n=n.namespaceURI)n=Cg(n),e=Ag(n,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}P(V),z(V,e)}function zn(){P(V),P(fe),P(W)}function iu(e){e.memoizedState!==null&&z(Ct,e);var n=V.current,r=Ag(n,e.type);n!==r&&(z(fe,e),z(V,r))}function Qa(e){fe.current===e&&(P(V),P(fe)),Ct.current===e&&(P(Ct),ia._currentValue=Y)}var su=Object.prototype.hasOwnProperty,ru=s.unstable_scheduleCallback,au=s.unstable_cancelCallback,bE=s.unstable_shouldYield,CE=s.unstable_requestPaint,tn=s.unstable_now,AE=s.unstable_getCurrentPriorityLevel,sd=s.unstable_ImmediatePriority,rd=s.unstable_UserBlockingPriority,Fa=s.unstable_NormalPriority,RE=s.unstable_LowPriority,ad=s.unstable_IdlePriority,wE=s.log,NE=s.unstable_setDisableYieldValue,fr=null,At=null;function Hn(e){if(typeof wE=="function"&&NE(e),At&&typeof At.setStrictMode=="function")try{At.setStrictMode(fr,e)}catch{}}var Rt=Math.clz32?Math.clz32:IE,OE=Math.log,DE=Math.LN2;function IE(e){return e>>>=0,e===0?32:31-(OE(e)/DE|0)|0}var Ka=256,Xa=4194304;function Ri(e){var n=e&42;if(n!==0)return n;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194048;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function Wa(e,n,r){var l=e.pendingLanes;if(l===0)return 0;var u=0,f=e.suspendedLanes,_=e.pingedLanes;e=e.warmLanes;var m=l&134217727;return m!==0?(l=m&~f,l!==0?u=Ri(l):(_&=m,_!==0?u=Ri(_):r||(r=m&~e,r!==0&&(u=Ri(r))))):(m=l&~f,m!==0?u=Ri(m):_!==0?u=Ri(_):r||(r=l&~e,r!==0&&(u=Ri(r)))),u===0?0:n!==0&&n!==u&&(n&f)===0&&(f=u&-u,r=n&-n,f>=r||f===32&&(r&4194048)!==0)?n:u}function hr(e,n){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&n)===0}function ME(e,n){switch(e){case 1:case 2:case 4:case 8:case 64:return n+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function ld(){var e=Ka;return Ka<<=1,(Ka&4194048)===0&&(Ka=256),e}function od(){var e=Xa;return Xa<<=1,(Xa&62914560)===0&&(Xa=4194304),e}function lu(e){for(var n=[],r=0;31>r;r++)n.push(e);return n}function dr(e,n){e.pendingLanes|=n,n!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function kE(e,n,r,l,u,f){var _=e.pendingLanes;e.pendingLanes=r,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=r,e.entangledLanes&=r,e.errorRecoveryDisabledLanes&=r,e.shellSuspendCounter=0;var m=e.entanglements,y=e.expirationTimes,R=e.hiddenUpdates;for(r=_&~r;0<r;){var O=31-Rt(r),M=1<<O;m[O]=0,y[O]=-1;var w=R[O];if(w!==null)for(R[O]=null,O=0;O<w.length;O++){var N=w[O];N!==null&&(N.lane&=-536870913)}r&=~M}l!==0&&ud(e,l,0),f!==0&&u===0&&e.tag!==0&&(e.suspendedLanes|=f&~(_&~n))}function ud(e,n,r){e.pendingLanes|=n,e.suspendedLanes&=~n;var l=31-Rt(n);e.entangledLanes|=n,e.entanglements[l]=e.entanglements[l]|1073741824|r&4194090}function cd(e,n){var r=e.entangledLanes|=n;for(e=e.entanglements;r;){var l=31-Rt(r),u=1<<l;u&n|e[l]&n&&(e[l]|=n),r&=~u}}function ou(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function uu(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function fd(){var e=H.p;return e!==0?e:(e=window.event,e===void 0?32:jg(e.type))}function xE(e,n){var r=H.p;try{return H.p=e,n()}finally{H.p=r}}var Pn=Math.random().toString(36).slice(2),ct="__reactFiber$"+Pn,vt="__reactProps$"+Pn,is="__reactContainer$"+Pn,cu="__reactEvents$"+Pn,UE="__reactListeners$"+Pn,LE="__reactHandles$"+Pn,hd="__reactResources$"+Pn,_r="__reactMarker$"+Pn;function fu(e){delete e[ct],delete e[vt],delete e[cu],delete e[UE],delete e[LE]}function ss(e){var n=e[ct];if(n)return n;for(var r=e.parentNode;r;){if(n=r[is]||r[ct]){if(r=n.alternate,n.child!==null||r!==null&&r.child!==null)for(e=Og(e);e!==null;){if(r=e[ct])return r;e=Og(e)}return n}e=r,r=e.parentNode}return null}function rs(e){if(e=e[ct]||e[is]){var n=e.tag;if(n===5||n===6||n===13||n===26||n===27||n===3)return e}return null}function pr(e){var n=e.tag;if(n===5||n===26||n===27||n===6)return e.stateNode;throw Error(a(33))}function as(e){var n=e[hd];return n||(n=e[hd]={hoistableStyles:new Map,hoistableScripts:new Map}),n}function Je(e){e[_r]=!0}var dd=new Set,_d={};function wi(e,n){ls(e,n),ls(e+"Capture",n)}function ls(e,n){for(_d[e]=n,e=0;e<n.length;e++)dd.add(n[e])}var zE=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),pd={},gd={};function HE(e){return su.call(gd,e)?!0:su.call(pd,e)?!1:zE.test(e)?gd[e]=!0:(pd[e]=!0,!1)}function Za(e,n,r){if(HE(n))if(r===null)e.removeAttribute(n);else{switch(typeof r){case"undefined":case"function":case"symbol":e.removeAttribute(n);return;case"boolean":var l=n.toLowerCase().slice(0,5);if(l!=="data-"&&l!=="aria-"){e.removeAttribute(n);return}}e.setAttribute(n,""+r)}}function Ja(e,n,r){if(r===null)e.removeAttribute(n);else{switch(typeof r){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(n);return}e.setAttribute(n,""+r)}}function fn(e,n,r,l){if(l===null)e.removeAttribute(r);else{switch(typeof l){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(r);return}e.setAttributeNS(n,r,""+l)}}var hu,md;function os(e){if(hu===void 0)try{throw Error()}catch(r){var n=r.stack.trim().match(/\n( *(at )?)/);hu=n&&n[1]||"",md=-1<r.stack.indexOf(`
    at`)?" (<anonymous>)":-1<r.stack.indexOf("@")?"@unknown:0:0":""}return`
`+hu+e+md}var du=!1;function _u(e,n){if(!e||du)return"";du=!0;var r=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var l={DetermineComponentFrameRoot:function(){try{if(n){var M=function(){throw Error()};if(Object.defineProperty(M.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(M,[])}catch(N){var w=N}Reflect.construct(e,[],M)}else{try{M.call()}catch(N){w=N}e.call(M.prototype)}}else{try{throw Error()}catch(N){w=N}(M=e())&&typeof M.catch=="function"&&M.catch(function(){})}}catch(N){if(N&&w&&typeof N.stack=="string")return[N.stack,w.stack]}return[null,null]}};l.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var u=Object.getOwnPropertyDescriptor(l.DetermineComponentFrameRoot,"name");u&&u.configurable&&Object.defineProperty(l.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var f=l.DetermineComponentFrameRoot(),_=f[0],m=f[1];if(_&&m){var y=_.split(`
`),R=m.split(`
`);for(u=l=0;l<y.length&&!y[l].includes("DetermineComponentFrameRoot");)l++;for(;u<R.length&&!R[u].includes("DetermineComponentFrameRoot");)u++;if(l===y.length||u===R.length)for(l=y.length-1,u=R.length-1;1<=l&&0<=u&&y[l]!==R[u];)u--;for(;1<=l&&0<=u;l--,u--)if(y[l]!==R[u]){if(l!==1||u!==1)do if(l--,u--,0>u||y[l]!==R[u]){var O=`
`+y[l].replace(" at new "," at ");return e.displayName&&O.includes("<anonymous>")&&(O=O.replace("<anonymous>",e.displayName)),O}while(1<=l&&0<=u);break}}}finally{du=!1,Error.prepareStackTrace=r}return(r=e?e.displayName||e.name:"")?os(r):""}function PE(e){switch(e.tag){case 26:case 27:case 5:return os(e.type);case 16:return os("Lazy");case 13:return os("Suspense");case 19:return os("SuspenseList");case 0:case 15:return _u(e.type,!1);case 11:return _u(e.type.render,!1);case 1:return _u(e.type,!0);case 31:return os("Activity");default:return""}}function vd(e){try{var n="";do n+=PE(e),e=e.return;while(e);return n}catch(r){return`
Error generating stack: `+r.message+`
`+r.stack}}function xt(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function yd(e){var n=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function BE(e){var n=yd(e)?"checked":"value",r=Object.getOwnPropertyDescriptor(e.constructor.prototype,n),l=""+e[n];if(!e.hasOwnProperty(n)&&typeof r<"u"&&typeof r.get=="function"&&typeof r.set=="function"){var u=r.get,f=r.set;return Object.defineProperty(e,n,{configurable:!0,get:function(){return u.call(this)},set:function(_){l=""+_,f.call(this,_)}}),Object.defineProperty(e,n,{enumerable:r.enumerable}),{getValue:function(){return l},setValue:function(_){l=""+_},stopTracking:function(){e._valueTracker=null,delete e[n]}}}}function $a(e){e._valueTracker||(e._valueTracker=BE(e))}function Ed(e){if(!e)return!1;var n=e._valueTracker;if(!n)return!0;var r=n.getValue(),l="";return e&&(l=yd(e)?e.checked?"true":"false":e.value),e=l,e!==r?(n.setValue(e),!0):!1}function el(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var qE=/[\n"\\]/g;function Ut(e){return e.replace(qE,function(n){return"\\"+n.charCodeAt(0).toString(16)+" "})}function pu(e,n,r,l,u,f,_,m){e.name="",_!=null&&typeof _!="function"&&typeof _!="symbol"&&typeof _!="boolean"?e.type=_:e.removeAttribute("type"),n!=null?_==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+xt(n)):e.value!==""+xt(n)&&(e.value=""+xt(n)):_!=="submit"&&_!=="reset"||e.removeAttribute("value"),n!=null?gu(e,_,xt(n)):r!=null?gu(e,_,xt(r)):l!=null&&e.removeAttribute("value"),u==null&&f!=null&&(e.defaultChecked=!!f),u!=null&&(e.checked=u&&typeof u!="function"&&typeof u!="symbol"),m!=null&&typeof m!="function"&&typeof m!="symbol"&&typeof m!="boolean"?e.name=""+xt(m):e.removeAttribute("name")}function Sd(e,n,r,l,u,f,_,m){if(f!=null&&typeof f!="function"&&typeof f!="symbol"&&typeof f!="boolean"&&(e.type=f),n!=null||r!=null){if(!(f!=="submit"&&f!=="reset"||n!=null))return;r=r!=null?""+xt(r):"",n=n!=null?""+xt(n):r,m||n===e.value||(e.value=n),e.defaultValue=n}l=l??u,l=typeof l!="function"&&typeof l!="symbol"&&!!l,e.checked=m?e.checked:!!l,e.defaultChecked=!!l,_!=null&&typeof _!="function"&&typeof _!="symbol"&&typeof _!="boolean"&&(e.name=_)}function gu(e,n,r){n==="number"&&el(e.ownerDocument)===e||e.defaultValue===""+r||(e.defaultValue=""+r)}function us(e,n,r,l){if(e=e.options,n){n={};for(var u=0;u<r.length;u++)n["$"+r[u]]=!0;for(r=0;r<e.length;r++)u=n.hasOwnProperty("$"+e[r].value),e[r].selected!==u&&(e[r].selected=u),u&&l&&(e[r].defaultSelected=!0)}else{for(r=""+xt(r),n=null,u=0;u<e.length;u++){if(e[u].value===r){e[u].selected=!0,l&&(e[u].defaultSelected=!0);return}n!==null||e[u].disabled||(n=e[u])}n!==null&&(n.selected=!0)}}function Td(e,n,r){if(n!=null&&(n=""+xt(n),n!==e.value&&(e.value=n),r==null)){e.defaultValue!==n&&(e.defaultValue=n);return}e.defaultValue=r!=null?""+xt(r):""}function bd(e,n,r,l){if(n==null){if(l!=null){if(r!=null)throw Error(a(92));if(ut(l)){if(1<l.length)throw Error(a(93));l=l[0]}r=l}r==null&&(r=""),n=r}r=xt(n),e.defaultValue=r,l=e.textContent,l===r&&l!==""&&l!==null&&(e.value=l)}function cs(e,n){if(n){var r=e.firstChild;if(r&&r===e.lastChild&&r.nodeType===3){r.nodeValue=n;return}}e.textContent=n}var VE=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Cd(e,n,r){var l=n.indexOf("--")===0;r==null||typeof r=="boolean"||r===""?l?e.setProperty(n,""):n==="float"?e.cssFloat="":e[n]="":l?e.setProperty(n,r):typeof r!="number"||r===0||VE.has(n)?n==="float"?e.cssFloat=r:e[n]=(""+r).trim():e[n]=r+"px"}function Ad(e,n,r){if(n!=null&&typeof n!="object")throw Error(a(62));if(e=e.style,r!=null){for(var l in r)!r.hasOwnProperty(l)||n!=null&&n.hasOwnProperty(l)||(l.indexOf("--")===0?e.setProperty(l,""):l==="float"?e.cssFloat="":e[l]="");for(var u in n)l=n[u],n.hasOwnProperty(u)&&r[u]!==l&&Cd(e,u,l)}else for(var f in n)n.hasOwnProperty(f)&&Cd(e,f,n[f])}function mu(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var GE=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),jE=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function tl(e){return jE.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}var vu=null;function yu(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var fs=null,hs=null;function Rd(e){var n=rs(e);if(n&&(e=n.stateNode)){var r=e[vt]||null;e:switch(e=n.stateNode,n.type){case"input":if(pu(e,r.value,r.defaultValue,r.defaultValue,r.checked,r.defaultChecked,r.type,r.name),n=r.name,r.type==="radio"&&n!=null){for(r=e;r.parentNode;)r=r.parentNode;for(r=r.querySelectorAll('input[name="'+Ut(""+n)+'"][type="radio"]'),n=0;n<r.length;n++){var l=r[n];if(l!==e&&l.form===e.form){var u=l[vt]||null;if(!u)throw Error(a(90));pu(l,u.value,u.defaultValue,u.defaultValue,u.checked,u.defaultChecked,u.type,u.name)}}for(n=0;n<r.length;n++)l=r[n],l.form===e.form&&Ed(l)}break e;case"textarea":Td(e,r.value,r.defaultValue);break e;case"select":n=r.value,n!=null&&us(e,!!r.multiple,n,!1)}}}var Eu=!1;function wd(e,n,r){if(Eu)return e(n,r);Eu=!0;try{var l=e(n);return l}finally{if(Eu=!1,(fs!==null||hs!==null)&&(Bl(),fs&&(n=fs,e=hs,hs=fs=null,Rd(n),e)))for(n=0;n<e.length;n++)Rd(e[n])}}function gr(e,n){var r=e.stateNode;if(r===null)return null;var l=r[vt]||null;if(l===null)return null;r=l[n];e:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(l=!l.disabled)||(e=e.type,l=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!l;break e;default:e=!1}if(e)return null;if(r&&typeof r!="function")throw Error(a(231,n,typeof r));return r}var hn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Su=!1;if(hn)try{var mr={};Object.defineProperty(mr,"passive",{get:function(){Su=!0}}),window.addEventListener("test",mr,mr),window.removeEventListener("test",mr,mr)}catch{Su=!1}var Bn=null,Tu=null,nl=null;function Nd(){if(nl)return nl;var e,n=Tu,r=n.length,l,u="value"in Bn?Bn.value:Bn.textContent,f=u.length;for(e=0;e<r&&n[e]===u[e];e++);var _=r-e;for(l=1;l<=_&&n[r-l]===u[f-l];l++);return nl=u.slice(e,1<l?1-l:void 0)}function il(e){var n=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&n===13&&(e=13)):e=n,e===10&&(e=13),32<=e||e===13?e:0}function sl(){return!0}function Od(){return!1}function yt(e){function n(r,l,u,f,_){this._reactName=r,this._targetInst=u,this.type=l,this.nativeEvent=f,this.target=_,this.currentTarget=null;for(var m in e)e.hasOwnProperty(m)&&(r=e[m],this[m]=r?r(f):f[m]);return this.isDefaultPrevented=(f.defaultPrevented!=null?f.defaultPrevented:f.returnValue===!1)?sl:Od,this.isPropagationStopped=Od,this}return v(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var r=this.nativeEvent;r&&(r.preventDefault?r.preventDefault():typeof r.returnValue!="unknown"&&(r.returnValue=!1),this.isDefaultPrevented=sl)},stopPropagation:function(){var r=this.nativeEvent;r&&(r.stopPropagation?r.stopPropagation():typeof r.cancelBubble!="unknown"&&(r.cancelBubble=!0),this.isPropagationStopped=sl)},persist:function(){},isPersistent:sl}),n}var Ni={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},rl=yt(Ni),vr=v({},Ni,{view:0,detail:0}),YE=yt(vr),bu,Cu,yr,al=v({},vr,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Ru,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==yr&&(yr&&e.type==="mousemove"?(bu=e.screenX-yr.screenX,Cu=e.screenY-yr.screenY):Cu=bu=0,yr=e),bu)},movementY:function(e){return"movementY"in e?e.movementY:Cu}}),Dd=yt(al),QE=v({},al,{dataTransfer:0}),FE=yt(QE),KE=v({},vr,{relatedTarget:0}),Au=yt(KE),XE=v({},Ni,{animationName:0,elapsedTime:0,pseudoElement:0}),WE=yt(XE),ZE=v({},Ni,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),JE=yt(ZE),$E=v({},Ni,{data:0}),Id=yt($E),e0={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},t0={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},n0={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function i0(e){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(e):(e=n0[e])?!!n[e]:!1}function Ru(){return i0}var s0=v({},vr,{key:function(e){if(e.key){var n=e0[e.key]||e.key;if(n!=="Unidentified")return n}return e.type==="keypress"?(e=il(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?t0[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Ru,charCode:function(e){return e.type==="keypress"?il(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?il(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),r0=yt(s0),a0=v({},al,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Md=yt(a0),l0=v({},vr,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Ru}),o0=yt(l0),u0=v({},Ni,{propertyName:0,elapsedTime:0,pseudoElement:0}),c0=yt(u0),f0=v({},al,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),h0=yt(f0),d0=v({},Ni,{newState:0,oldState:0}),_0=yt(d0),p0=[9,13,27,32],wu=hn&&"CompositionEvent"in window,Er=null;hn&&"documentMode"in document&&(Er=document.documentMode);var g0=hn&&"TextEvent"in window&&!Er,kd=hn&&(!wu||Er&&8<Er&&11>=Er),xd=" ",Ud=!1;function Ld(e,n){switch(e){case"keyup":return p0.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function zd(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var ds=!1;function m0(e,n){switch(e){case"compositionend":return zd(n);case"keypress":return n.which!==32?null:(Ud=!0,xd);case"textInput":return e=n.data,e===xd&&Ud?null:e;default:return null}}function v0(e,n){if(ds)return e==="compositionend"||!wu&&Ld(e,n)?(e=Nd(),nl=Tu=Bn=null,ds=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return kd&&n.locale!=="ko"?null:n.data;default:return null}}var y0={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Hd(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n==="input"?!!y0[e.type]:n==="textarea"}function Pd(e,n,r,l){fs?hs?hs.push(l):hs=[l]:fs=l,n=Ql(n,"onChange"),0<n.length&&(r=new rl("onChange","change",null,r,l),e.push({event:r,listeners:n}))}var Sr=null,Tr=null;function E0(e){yg(e,0)}function ll(e){var n=pr(e);if(Ed(n))return e}function Bd(e,n){if(e==="change")return n}var qd=!1;if(hn){var Nu;if(hn){var Ou="oninput"in document;if(!Ou){var Vd=document.createElement("div");Vd.setAttribute("oninput","return;"),Ou=typeof Vd.oninput=="function"}Nu=Ou}else Nu=!1;qd=Nu&&(!document.documentMode||9<document.documentMode)}function Gd(){Sr&&(Sr.detachEvent("onpropertychange",jd),Tr=Sr=null)}function jd(e){if(e.propertyName==="value"&&ll(Tr)){var n=[];Pd(n,Tr,e,yu(e)),wd(E0,n)}}function S0(e,n,r){e==="focusin"?(Gd(),Sr=n,Tr=r,Sr.attachEvent("onpropertychange",jd)):e==="focusout"&&Gd()}function T0(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return ll(Tr)}function b0(e,n){if(e==="click")return ll(n)}function C0(e,n){if(e==="input"||e==="change")return ll(n)}function A0(e,n){return e===n&&(e!==0||1/e===1/n)||e!==e&&n!==n}var wt=typeof Object.is=="function"?Object.is:A0;function br(e,n){if(wt(e,n))return!0;if(typeof e!="object"||e===null||typeof n!="object"||n===null)return!1;var r=Object.keys(e),l=Object.keys(n);if(r.length!==l.length)return!1;for(l=0;l<r.length;l++){var u=r[l];if(!su.call(n,u)||!wt(e[u],n[u]))return!1}return!0}function Yd(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Qd(e,n){var r=Yd(e);e=0;for(var l;r;){if(r.nodeType===3){if(l=e+r.textContent.length,e<=n&&l>=n)return{node:r,offset:n-e};e=l}e:{for(;r;){if(r.nextSibling){r=r.nextSibling;break e}r=r.parentNode}r=void 0}r=Yd(r)}}function Fd(e,n){return e&&n?e===n?!0:e&&e.nodeType===3?!1:n&&n.nodeType===3?Fd(e,n.parentNode):"contains"in e?e.contains(n):e.compareDocumentPosition?!!(e.compareDocumentPosition(n)&16):!1:!1}function Kd(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var n=el(e.document);n instanceof e.HTMLIFrameElement;){try{var r=typeof n.contentWindow.location.href=="string"}catch{r=!1}if(r)e=n.contentWindow;else break;n=el(e.document)}return n}function Du(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n&&(n==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||n==="textarea"||e.contentEditable==="true")}var R0=hn&&"documentMode"in document&&11>=document.documentMode,_s=null,Iu=null,Cr=null,Mu=!1;function Xd(e,n,r){var l=r.window===r?r.document:r.nodeType===9?r:r.ownerDocument;Mu||_s==null||_s!==el(l)||(l=_s,"selectionStart"in l&&Du(l)?l={start:l.selectionStart,end:l.selectionEnd}:(l=(l.ownerDocument&&l.ownerDocument.defaultView||window).getSelection(),l={anchorNode:l.anchorNode,anchorOffset:l.anchorOffset,focusNode:l.focusNode,focusOffset:l.focusOffset}),Cr&&br(Cr,l)||(Cr=l,l=Ql(Iu,"onSelect"),0<l.length&&(n=new rl("onSelect","select",null,n,r),e.push({event:n,listeners:l}),n.target=_s)))}function Oi(e,n){var r={};return r[e.toLowerCase()]=n.toLowerCase(),r["Webkit"+e]="webkit"+n,r["Moz"+e]="moz"+n,r}var ps={animationend:Oi("Animation","AnimationEnd"),animationiteration:Oi("Animation","AnimationIteration"),animationstart:Oi("Animation","AnimationStart"),transitionrun:Oi("Transition","TransitionRun"),transitionstart:Oi("Transition","TransitionStart"),transitioncancel:Oi("Transition","TransitionCancel"),transitionend:Oi("Transition","TransitionEnd")},ku={},Wd={};hn&&(Wd=document.createElement("div").style,"AnimationEvent"in window||(delete ps.animationend.animation,delete ps.animationiteration.animation,delete ps.animationstart.animation),"TransitionEvent"in window||delete ps.transitionend.transition);function Di(e){if(ku[e])return ku[e];if(!ps[e])return e;var n=ps[e],r;for(r in n)if(n.hasOwnProperty(r)&&r in Wd)return ku[e]=n[r];return e}var Zd=Di("animationend"),Jd=Di("animationiteration"),$d=Di("animationstart"),w0=Di("transitionrun"),N0=Di("transitionstart"),O0=Di("transitioncancel"),e_=Di("transitionend"),t_=new Map,xu="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");xu.push("scrollEnd");function Ft(e,n){t_.set(e,n),wi(n,[e])}var n_=new WeakMap;function Lt(e,n){if(typeof e=="object"&&e!==null){var r=n_.get(e);return r!==void 0?r:(n={value:e,source:n,stack:vd(n)},n_.set(e,n),n)}return{value:e,source:n,stack:vd(n)}}var zt=[],gs=0,Uu=0;function ol(){for(var e=gs,n=Uu=gs=0;n<e;){var r=zt[n];zt[n++]=null;var l=zt[n];zt[n++]=null;var u=zt[n];zt[n++]=null;var f=zt[n];if(zt[n++]=null,l!==null&&u!==null){var _=l.pending;_===null?u.next=u:(u.next=_.next,_.next=u),l.pending=u}f!==0&&i_(r,u,f)}}function ul(e,n,r,l){zt[gs++]=e,zt[gs++]=n,zt[gs++]=r,zt[gs++]=l,Uu|=l,e.lanes|=l,e=e.alternate,e!==null&&(e.lanes|=l)}function Lu(e,n,r,l){return ul(e,n,r,l),cl(e)}function ms(e,n){return ul(e,null,null,n),cl(e)}function i_(e,n,r){e.lanes|=r;var l=e.alternate;l!==null&&(l.lanes|=r);for(var u=!1,f=e.return;f!==null;)f.childLanes|=r,l=f.alternate,l!==null&&(l.childLanes|=r),f.tag===22&&(e=f.stateNode,e===null||e._visibility&1||(u=!0)),e=f,f=f.return;return e.tag===3?(f=e.stateNode,u&&n!==null&&(u=31-Rt(r),e=f.hiddenUpdates,l=e[u],l===null?e[u]=[n]:l.push(n),n.lane=r|536870912),f):null}function cl(e){if(50<Xr)throw Xr=0,Vc=null,Error(a(185));for(var n=e.return;n!==null;)e=n,n=e.return;return e.tag===3?e.stateNode:null}var vs={};function D0(e,n,r,l){this.tag=e,this.key=r,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=l,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Nt(e,n,r,l){return new D0(e,n,r,l)}function zu(e){return e=e.prototype,!(!e||!e.isReactComponent)}function dn(e,n){var r=e.alternate;return r===null?(r=Nt(e.tag,n,e.key,e.mode),r.elementType=e.elementType,r.type=e.type,r.stateNode=e.stateNode,r.alternate=e,e.alternate=r):(r.pendingProps=n,r.type=e.type,r.flags=0,r.subtreeFlags=0,r.deletions=null),r.flags=e.flags&65011712,r.childLanes=e.childLanes,r.lanes=e.lanes,r.child=e.child,r.memoizedProps=e.memoizedProps,r.memoizedState=e.memoizedState,r.updateQueue=e.updateQueue,n=e.dependencies,r.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},r.sibling=e.sibling,r.index=e.index,r.ref=e.ref,r.refCleanup=e.refCleanup,r}function s_(e,n){e.flags&=65011714;var r=e.alternate;return r===null?(e.childLanes=0,e.lanes=n,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=r.childLanes,e.lanes=r.lanes,e.child=r.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=r.memoizedProps,e.memoizedState=r.memoizedState,e.updateQueue=r.updateQueue,e.type=r.type,n=r.dependencies,e.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),e}function fl(e,n,r,l,u,f){var _=0;if(l=e,typeof e=="function")zu(e)&&(_=1);else if(typeof e=="string")_=MS(e,r,V.current)?26:e==="html"||e==="head"||e==="body"?27:5;else e:switch(e){case ae:return e=Nt(31,r,n,u),e.elementType=ae,e.lanes=f,e;case L:return Ii(r.children,u,f,n);case X:_=8,u|=24;break;case se:return e=Nt(12,r,n,u|2),e.elementType=se,e.lanes=f,e;case ee:return e=Nt(13,r,n,u),e.elementType=ee,e.lanes=f,e;case Qe:return e=Nt(19,r,n,u),e.elementType=Qe,e.lanes=f,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case je:case Ae:_=10;break e;case Ye:_=9;break e;case Ze:_=11;break e;case Z:_=14;break e;case re:_=16,l=null;break e}_=29,r=Error(a(130,e===null?"null":typeof e,"")),l=null}return n=Nt(_,r,n,u),n.elementType=e,n.type=l,n.lanes=f,n}function Ii(e,n,r,l){return e=Nt(7,e,l,n),e.lanes=r,e}function Hu(e,n,r){return e=Nt(6,e,null,n),e.lanes=r,e}function Pu(e,n,r){return n=Nt(4,e.children!==null?e.children:[],e.key,n),n.lanes=r,n.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},n}var ys=[],Es=0,hl=null,dl=0,Ht=[],Pt=0,Mi=null,_n=1,pn="";function ki(e,n){ys[Es++]=dl,ys[Es++]=hl,hl=e,dl=n}function r_(e,n,r){Ht[Pt++]=_n,Ht[Pt++]=pn,Ht[Pt++]=Mi,Mi=e;var l=_n;e=pn;var u=32-Rt(l)-1;l&=~(1<<u),r+=1;var f=32-Rt(n)+u;if(30<f){var _=u-u%5;f=(l&(1<<_)-1).toString(32),l>>=_,u-=_,_n=1<<32-Rt(n)+u|r<<u|l,pn=f+e}else _n=1<<f|r<<u|l,pn=e}function Bu(e){e.return!==null&&(ki(e,1),r_(e,1,0))}function qu(e){for(;e===hl;)hl=ys[--Es],ys[Es]=null,dl=ys[--Es],ys[Es]=null;for(;e===Mi;)Mi=Ht[--Pt],Ht[Pt]=null,pn=Ht[--Pt],Ht[Pt]=null,_n=Ht[--Pt],Ht[Pt]=null}var dt=null,Le=null,_e=!1,xi=null,nn=!1,Vu=Error(a(519));function Ui(e){var n=Error(a(418,""));throw wr(Lt(n,e)),Vu}function a_(e){var n=e.stateNode,r=e.type,l=e.memoizedProps;switch(n[ct]=e,n[vt]=l,r){case"dialog":oe("cancel",n),oe("close",n);break;case"iframe":case"object":case"embed":oe("load",n);break;case"video":case"audio":for(r=0;r<Zr.length;r++)oe(Zr[r],n);break;case"source":oe("error",n);break;case"img":case"image":case"link":oe("error",n),oe("load",n);break;case"details":oe("toggle",n);break;case"input":oe("invalid",n),Sd(n,l.value,l.defaultValue,l.checked,l.defaultChecked,l.type,l.name,!0),$a(n);break;case"select":oe("invalid",n);break;case"textarea":oe("invalid",n),bd(n,l.value,l.defaultValue,l.children),$a(n)}r=l.children,typeof r!="string"&&typeof r!="number"&&typeof r!="bigint"||n.textContent===""+r||l.suppressHydrationWarning===!0||bg(n.textContent,r)?(l.popover!=null&&(oe("beforetoggle",n),oe("toggle",n)),l.onScroll!=null&&oe("scroll",n),l.onScrollEnd!=null&&oe("scrollend",n),l.onClick!=null&&(n.onclick=Fl),n=!0):n=!1,n||Ui(e)}function l_(e){for(dt=e.return;dt;)switch(dt.tag){case 5:case 13:nn=!1;return;case 27:case 3:nn=!0;return;default:dt=dt.return}}function Ar(e){if(e!==dt)return!1;if(!_e)return l_(e),_e=!0,!1;var n=e.tag,r;if((r=n!==3&&n!==27)&&((r=n===5)&&(r=e.type,r=!(r!=="form"&&r!=="button")||rf(e.type,e.memoizedProps)),r=!r),r&&Le&&Ui(e),l_(e),n===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(a(317));e:{for(e=e.nextSibling,n=0;e;){if(e.nodeType===8)if(r=e.data,r==="/$"){if(n===0){Le=Xt(e.nextSibling);break e}n--}else r!=="$"&&r!=="$!"&&r!=="$?"||n++;e=e.nextSibling}Le=null}}else n===27?(n=Le,ni(e.type)?(e=uf,uf=null,Le=e):Le=n):Le=dt?Xt(e.stateNode.nextSibling):null;return!0}function Rr(){Le=dt=null,_e=!1}function o_(){var e=xi;return e!==null&&(Tt===null?Tt=e:Tt.push.apply(Tt,e),xi=null),e}function wr(e){xi===null?xi=[e]:xi.push(e)}var Gu=k(null),Li=null,gn=null;function qn(e,n,r){z(Gu,n._currentValue),n._currentValue=r}function mn(e){e._currentValue=Gu.current,P(Gu)}function ju(e,n,r){for(;e!==null;){var l=e.alternate;if((e.childLanes&n)!==n?(e.childLanes|=n,l!==null&&(l.childLanes|=n)):l!==null&&(l.childLanes&n)!==n&&(l.childLanes|=n),e===r)break;e=e.return}}function Yu(e,n,r,l){var u=e.child;for(u!==null&&(u.return=e);u!==null;){var f=u.dependencies;if(f!==null){var _=u.child;f=f.firstContext;e:for(;f!==null;){var m=f;f=u;for(var y=0;y<n.length;y++)if(m.context===n[y]){f.lanes|=r,m=f.alternate,m!==null&&(m.lanes|=r),ju(f.return,r,e),l||(_=null);break e}f=m.next}}else if(u.tag===18){if(_=u.return,_===null)throw Error(a(341));_.lanes|=r,f=_.alternate,f!==null&&(f.lanes|=r),ju(_,r,e),_=null}else _=u.child;if(_!==null)_.return=u;else for(_=u;_!==null;){if(_===e){_=null;break}if(u=_.sibling,u!==null){u.return=_.return,_=u;break}_=_.return}u=_}}function Nr(e,n,r,l){e=null;for(var u=n,f=!1;u!==null;){if(!f){if((u.flags&524288)!==0)f=!0;else if((u.flags&262144)!==0)break}if(u.tag===10){var _=u.alternate;if(_===null)throw Error(a(387));if(_=_.memoizedProps,_!==null){var m=u.type;wt(u.pendingProps.value,_.value)||(e!==null?e.push(m):e=[m])}}else if(u===Ct.current){if(_=u.alternate,_===null)throw Error(a(387));_.memoizedState.memoizedState!==u.memoizedState.memoizedState&&(e!==null?e.push(ia):e=[ia])}u=u.return}e!==null&&Yu(n,e,r,l),n.flags|=262144}function _l(e){for(e=e.firstContext;e!==null;){if(!wt(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function zi(e){Li=e,gn=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function ft(e){return u_(Li,e)}function pl(e,n){return Li===null&&zi(e),u_(e,n)}function u_(e,n){var r=n._currentValue;if(n={context:n,memoizedValue:r,next:null},gn===null){if(e===null)throw Error(a(308));gn=n,e.dependencies={lanes:0,firstContext:n},e.flags|=524288}else gn=gn.next=n;return r}var I0=typeof AbortController<"u"?AbortController:function(){var e=[],n=this.signal={aborted:!1,addEventListener:function(r,l){e.push(l)}};this.abort=function(){n.aborted=!0,e.forEach(function(r){return r()})}},M0=s.unstable_scheduleCallback,k0=s.unstable_NormalPriority,Fe={$$typeof:Ae,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Qu(){return{controller:new I0,data:new Map,refCount:0}}function Or(e){e.refCount--,e.refCount===0&&M0(k0,function(){e.controller.abort()})}var Dr=null,Fu=0,Ss=0,Ts=null;function x0(e,n){if(Dr===null){var r=Dr=[];Fu=0,Ss=Xc(),Ts={status:"pending",value:void 0,then:function(l){r.push(l)}}}return Fu++,n.then(c_,c_),n}function c_(){if(--Fu===0&&Dr!==null){Ts!==null&&(Ts.status="fulfilled");var e=Dr;Dr=null,Ss=0,Ts=null;for(var n=0;n<e.length;n++)(0,e[n])()}}function U0(e,n){var r=[],l={status:"pending",value:null,reason:null,then:function(u){r.push(u)}};return e.then(function(){l.status="fulfilled",l.value=n;for(var u=0;u<r.length;u++)(0,r[u])(n)},function(u){for(l.status="rejected",l.reason=u,u=0;u<r.length;u++)(0,r[u])(void 0)}),l}var f_=D.S;D.S=function(e,n){typeof n=="object"&&n!==null&&typeof n.then=="function"&&x0(e,n),f_!==null&&f_(e,n)};var Hi=k(null);function Ku(){var e=Hi.current;return e!==null?e:we.pooledCache}function gl(e,n){n===null?z(Hi,Hi.current):z(Hi,n.pool)}function h_(){var e=Ku();return e===null?null:{parent:Fe._currentValue,pool:e}}var Ir=Error(a(460)),d_=Error(a(474)),ml=Error(a(542)),Xu={then:function(){}};function __(e){return e=e.status,e==="fulfilled"||e==="rejected"}function vl(){}function p_(e,n,r){switch(r=e[r],r===void 0?e.push(n):r!==n&&(n.then(vl,vl),n=r),n.status){case"fulfilled":return n.value;case"rejected":throw e=n.reason,m_(e),e;default:if(typeof n.status=="string")n.then(vl,vl);else{if(e=we,e!==null&&100<e.shellSuspendCounter)throw Error(a(482));e=n,e.status="pending",e.then(function(l){if(n.status==="pending"){var u=n;u.status="fulfilled",u.value=l}},function(l){if(n.status==="pending"){var u=n;u.status="rejected",u.reason=l}})}switch(n.status){case"fulfilled":return n.value;case"rejected":throw e=n.reason,m_(e),e}throw Mr=n,Ir}}var Mr=null;function g_(){if(Mr===null)throw Error(a(459));var e=Mr;return Mr=null,e}function m_(e){if(e===Ir||e===ml)throw Error(a(483))}var Vn=!1;function Wu(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Zu(e,n){e=e.updateQueue,n.updateQueue===e&&(n.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function Gn(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function jn(e,n,r){var l=e.updateQueue;if(l===null)return null;if(l=l.shared,(pe&2)!==0){var u=l.pending;return u===null?n.next=n:(n.next=u.next,u.next=n),l.pending=n,n=cl(e),i_(e,null,r),n}return ul(e,l,n,r),cl(e)}function kr(e,n,r){if(n=n.updateQueue,n!==null&&(n=n.shared,(r&4194048)!==0)){var l=n.lanes;l&=e.pendingLanes,r|=l,n.lanes=r,cd(e,r)}}function Ju(e,n){var r=e.updateQueue,l=e.alternate;if(l!==null&&(l=l.updateQueue,r===l)){var u=null,f=null;if(r=r.firstBaseUpdate,r!==null){do{var _={lane:r.lane,tag:r.tag,payload:r.payload,callback:null,next:null};f===null?u=f=_:f=f.next=_,r=r.next}while(r!==null);f===null?u=f=n:f=f.next=n}else u=f=n;r={baseState:l.baseState,firstBaseUpdate:u,lastBaseUpdate:f,shared:l.shared,callbacks:l.callbacks},e.updateQueue=r;return}e=r.lastBaseUpdate,e===null?r.firstBaseUpdate=n:e.next=n,r.lastBaseUpdate=n}var $u=!1;function xr(){if($u){var e=Ts;if(e!==null)throw e}}function Ur(e,n,r,l){$u=!1;var u=e.updateQueue;Vn=!1;var f=u.firstBaseUpdate,_=u.lastBaseUpdate,m=u.shared.pending;if(m!==null){u.shared.pending=null;var y=m,R=y.next;y.next=null,_===null?f=R:_.next=R,_=y;var O=e.alternate;O!==null&&(O=O.updateQueue,m=O.lastBaseUpdate,m!==_&&(m===null?O.firstBaseUpdate=R:m.next=R,O.lastBaseUpdate=y))}if(f!==null){var M=u.baseState;_=0,O=R=y=null,m=f;do{var w=m.lane&-536870913,N=w!==m.lane;if(N?(ce&w)===w:(l&w)===w){w!==0&&w===Ss&&($u=!0),O!==null&&(O=O.next={lane:0,tag:m.tag,payload:m.payload,callback:null,next:null});e:{var K=e,G=m;w=n;var ye=r;switch(G.tag){case 1:if(K=G.payload,typeof K=="function"){M=K.call(ye,M,w);break e}M=K;break e;case 3:K.flags=K.flags&-65537|128;case 0:if(K=G.payload,w=typeof K=="function"?K.call(ye,M,w):K,w==null)break e;M=v({},M,w);break e;case 2:Vn=!0}}w=m.callback,w!==null&&(e.flags|=64,N&&(e.flags|=8192),N=u.callbacks,N===null?u.callbacks=[w]:N.push(w))}else N={lane:w,tag:m.tag,payload:m.payload,callback:m.callback,next:null},O===null?(R=O=N,y=M):O=O.next=N,_|=w;if(m=m.next,m===null){if(m=u.shared.pending,m===null)break;N=m,m=N.next,N.next=null,u.lastBaseUpdate=N,u.shared.pending=null}}while(!0);O===null&&(y=M),u.baseState=y,u.firstBaseUpdate=R,u.lastBaseUpdate=O,f===null&&(u.shared.lanes=0),Jn|=_,e.lanes=_,e.memoizedState=M}}function v_(e,n){if(typeof e!="function")throw Error(a(191,e));e.call(n)}function y_(e,n){var r=e.callbacks;if(r!==null)for(e.callbacks=null,e=0;e<r.length;e++)v_(r[e],n)}var bs=k(null),yl=k(0);function E_(e,n){e=Cn,z(yl,e),z(bs,n),Cn=e|n.baseLanes}function ec(){z(yl,Cn),z(bs,bs.current)}function tc(){Cn=yl.current,P(bs),P(yl)}var Yn=0,$=null,me=null,Ve=null,El=!1,Cs=!1,Pi=!1,Sl=0,Lr=0,As=null,L0=0;function Be(){throw Error(a(321))}function nc(e,n){if(n===null)return!1;for(var r=0;r<n.length&&r<e.length;r++)if(!wt(e[r],n[r]))return!1;return!0}function ic(e,n,r,l,u,f){return Yn=f,$=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,D.H=e===null||e.memoizedState===null?ip:sp,Pi=!1,f=r(l,u),Pi=!1,Cs&&(f=T_(n,r,l,u)),S_(e),f}function S_(e){D.H=wl;var n=me!==null&&me.next!==null;if(Yn=0,Ve=me=$=null,El=!1,Lr=0,As=null,n)throw Error(a(300));e===null||$e||(e=e.dependencies,e!==null&&_l(e)&&($e=!0))}function T_(e,n,r,l){$=e;var u=0;do{if(Cs&&(As=null),Lr=0,Cs=!1,25<=u)throw Error(a(301));if(u+=1,Ve=me=null,e.updateQueue!=null){var f=e.updateQueue;f.lastEffect=null,f.events=null,f.stores=null,f.memoCache!=null&&(f.memoCache.index=0)}D.H=G0,f=n(r,l)}while(Cs);return f}function z0(){var e=D.H,n=e.useState()[0];return n=typeof n.then=="function"?zr(n):n,e=e.useState()[0],(me!==null?me.memoizedState:null)!==e&&($.flags|=1024),n}function sc(){var e=Sl!==0;return Sl=0,e}function rc(e,n,r){n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~r}function ac(e){if(El){for(e=e.memoizedState;e!==null;){var n=e.queue;n!==null&&(n.pending=null),e=e.next}El=!1}Yn=0,Ve=me=$=null,Cs=!1,Lr=Sl=0,As=null}function Et(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ve===null?$.memoizedState=Ve=e:Ve=Ve.next=e,Ve}function Ge(){if(me===null){var e=$.alternate;e=e!==null?e.memoizedState:null}else e=me.next;var n=Ve===null?$.memoizedState:Ve.next;if(n!==null)Ve=n,me=e;else{if(e===null)throw $.alternate===null?Error(a(467)):Error(a(310));me=e,e={memoizedState:me.memoizedState,baseState:me.baseState,baseQueue:me.baseQueue,queue:me.queue,next:null},Ve===null?$.memoizedState=Ve=e:Ve=Ve.next=e}return Ve}function lc(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function zr(e){var n=Lr;return Lr+=1,As===null&&(As=[]),e=p_(As,e,n),n=$,(Ve===null?n.memoizedState:Ve.next)===null&&(n=n.alternate,D.H=n===null||n.memoizedState===null?ip:sp),e}function Tl(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return zr(e);if(e.$$typeof===Ae)return ft(e)}throw Error(a(438,String(e)))}function oc(e){var n=null,r=$.updateQueue;if(r!==null&&(n=r.memoCache),n==null){var l=$.alternate;l!==null&&(l=l.updateQueue,l!==null&&(l=l.memoCache,l!=null&&(n={data:l.data.map(function(u){return u.slice()}),index:0})))}if(n==null&&(n={data:[],index:0}),r===null&&(r=lc(),$.updateQueue=r),r.memoCache=n,r=n.data[n.index],r===void 0)for(r=n.data[n.index]=Array(e),l=0;l<e;l++)r[l]=Te;return n.index++,r}function vn(e,n){return typeof n=="function"?n(e):n}function bl(e){var n=Ge();return uc(n,me,e)}function uc(e,n,r){var l=e.queue;if(l===null)throw Error(a(311));l.lastRenderedReducer=r;var u=e.baseQueue,f=l.pending;if(f!==null){if(u!==null){var _=u.next;u.next=f.next,f.next=_}n.baseQueue=u=f,l.pending=null}if(f=e.baseState,u===null)e.memoizedState=f;else{n=u.next;var m=_=null,y=null,R=n,O=!1;do{var M=R.lane&-536870913;if(M!==R.lane?(ce&M)===M:(Yn&M)===M){var w=R.revertLane;if(w===0)y!==null&&(y=y.next={lane:0,revertLane:0,action:R.action,hasEagerState:R.hasEagerState,eagerState:R.eagerState,next:null}),M===Ss&&(O=!0);else if((Yn&w)===w){R=R.next,w===Ss&&(O=!0);continue}else M={lane:0,revertLane:R.revertLane,action:R.action,hasEagerState:R.hasEagerState,eagerState:R.eagerState,next:null},y===null?(m=y=M,_=f):y=y.next=M,$.lanes|=w,Jn|=w;M=R.action,Pi&&r(f,M),f=R.hasEagerState?R.eagerState:r(f,M)}else w={lane:M,revertLane:R.revertLane,action:R.action,hasEagerState:R.hasEagerState,eagerState:R.eagerState,next:null},y===null?(m=y=w,_=f):y=y.next=w,$.lanes|=M,Jn|=M;R=R.next}while(R!==null&&R!==n);if(y===null?_=f:y.next=m,!wt(f,e.memoizedState)&&($e=!0,O&&(r=Ts,r!==null)))throw r;e.memoizedState=f,e.baseState=_,e.baseQueue=y,l.lastRenderedState=f}return u===null&&(l.lanes=0),[e.memoizedState,l.dispatch]}function cc(e){var n=Ge(),r=n.queue;if(r===null)throw Error(a(311));r.lastRenderedReducer=e;var l=r.dispatch,u=r.pending,f=n.memoizedState;if(u!==null){r.pending=null;var _=u=u.next;do f=e(f,_.action),_=_.next;while(_!==u);wt(f,n.memoizedState)||($e=!0),n.memoizedState=f,n.baseQueue===null&&(n.baseState=f),r.lastRenderedState=f}return[f,l]}function b_(e,n,r){var l=$,u=Ge(),f=_e;if(f){if(r===void 0)throw Error(a(407));r=r()}else r=n();var _=!wt((me||u).memoizedState,r);_&&(u.memoizedState=r,$e=!0),u=u.queue;var m=R_.bind(null,l,u,e);if(Hr(2048,8,m,[e]),u.getSnapshot!==n||_||Ve!==null&&Ve.memoizedState.tag&1){if(l.flags|=2048,Rs(9,Cl(),A_.bind(null,l,u,r,n),null),we===null)throw Error(a(349));f||(Yn&124)!==0||C_(l,n,r)}return r}function C_(e,n,r){e.flags|=16384,e={getSnapshot:n,value:r},n=$.updateQueue,n===null?(n=lc(),$.updateQueue=n,n.stores=[e]):(r=n.stores,r===null?n.stores=[e]:r.push(e))}function A_(e,n,r,l){n.value=r,n.getSnapshot=l,w_(n)&&N_(e)}function R_(e,n,r){return r(function(){w_(n)&&N_(e)})}function w_(e){var n=e.getSnapshot;e=e.value;try{var r=n();return!wt(e,r)}catch{return!0}}function N_(e){var n=ms(e,2);n!==null&&kt(n,e,2)}function fc(e){var n=Et();if(typeof e=="function"){var r=e;if(e=r(),Pi){Hn(!0);try{r()}finally{Hn(!1)}}}return n.memoizedState=n.baseState=e,n.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:vn,lastRenderedState:e},n}function O_(e,n,r,l){return e.baseState=r,uc(e,me,typeof l=="function"?l:vn)}function H0(e,n,r,l,u){if(Rl(e))throw Error(a(485));if(e=n.action,e!==null){var f={payload:u,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(_){f.listeners.push(_)}};D.T!==null?r(!0):f.isTransition=!1,l(f),r=n.pending,r===null?(f.next=n.pending=f,D_(n,f)):(f.next=r.next,n.pending=r.next=f)}}function D_(e,n){var r=n.action,l=n.payload,u=e.state;if(n.isTransition){var f=D.T,_={};D.T=_;try{var m=r(u,l),y=D.S;y!==null&&y(_,m),I_(e,n,m)}catch(R){hc(e,n,R)}finally{D.T=f}}else try{f=r(u,l),I_(e,n,f)}catch(R){hc(e,n,R)}}function I_(e,n,r){r!==null&&typeof r=="object"&&typeof r.then=="function"?r.then(function(l){M_(e,n,l)},function(l){return hc(e,n,l)}):M_(e,n,r)}function M_(e,n,r){n.status="fulfilled",n.value=r,k_(n),e.state=r,n=e.pending,n!==null&&(r=n.next,r===n?e.pending=null:(r=r.next,n.next=r,D_(e,r)))}function hc(e,n,r){var l=e.pending;if(e.pending=null,l!==null){l=l.next;do n.status="rejected",n.reason=r,k_(n),n=n.next;while(n!==l)}e.action=null}function k_(e){e=e.listeners;for(var n=0;n<e.length;n++)(0,e[n])()}function x_(e,n){return n}function U_(e,n){if(_e){var r=we.formState;if(r!==null){e:{var l=$;if(_e){if(Le){t:{for(var u=Le,f=nn;u.nodeType!==8;){if(!f){u=null;break t}if(u=Xt(u.nextSibling),u===null){u=null;break t}}f=u.data,u=f==="F!"||f==="F"?u:null}if(u){Le=Xt(u.nextSibling),l=u.data==="F!";break e}}Ui(l)}l=!1}l&&(n=r[0])}}return r=Et(),r.memoizedState=r.baseState=n,l={pending:null,lanes:0,dispatch:null,lastRenderedReducer:x_,lastRenderedState:n},r.queue=l,r=ep.bind(null,$,l),l.dispatch=r,l=fc(!1),f=mc.bind(null,$,!1,l.queue),l=Et(),u={state:n,dispatch:null,action:e,pending:null},l.queue=u,r=H0.bind(null,$,u,f,r),u.dispatch=r,l.memoizedState=e,[n,r,!1]}function L_(e){var n=Ge();return z_(n,me,e)}function z_(e,n,r){if(n=uc(e,n,x_)[0],e=bl(vn)[0],typeof n=="object"&&n!==null&&typeof n.then=="function")try{var l=zr(n)}catch(_){throw _===Ir?ml:_}else l=n;n=Ge();var u=n.queue,f=u.dispatch;return r!==n.memoizedState&&($.flags|=2048,Rs(9,Cl(),P0.bind(null,u,r),null)),[l,f,e]}function P0(e,n){e.action=n}function H_(e){var n=Ge(),r=me;if(r!==null)return z_(n,r,e);Ge(),n=n.memoizedState,r=Ge();var l=r.queue.dispatch;return r.memoizedState=e,[n,l,!1]}function Rs(e,n,r,l){return e={tag:e,create:r,deps:l,inst:n,next:null},n=$.updateQueue,n===null&&(n=lc(),$.updateQueue=n),r=n.lastEffect,r===null?n.lastEffect=e.next=e:(l=r.next,r.next=e,e.next=l,n.lastEffect=e),e}function Cl(){return{destroy:void 0,resource:void 0}}function P_(){return Ge().memoizedState}function Al(e,n,r,l){var u=Et();l=l===void 0?null:l,$.flags|=e,u.memoizedState=Rs(1|n,Cl(),r,l)}function Hr(e,n,r,l){var u=Ge();l=l===void 0?null:l;var f=u.memoizedState.inst;me!==null&&l!==null&&nc(l,me.memoizedState.deps)?u.memoizedState=Rs(n,f,r,l):($.flags|=e,u.memoizedState=Rs(1|n,f,r,l))}function B_(e,n){Al(8390656,8,e,n)}function q_(e,n){Hr(2048,8,e,n)}function V_(e,n){return Hr(4,2,e,n)}function G_(e,n){return Hr(4,4,e,n)}function j_(e,n){if(typeof n=="function"){e=e();var r=n(e);return function(){typeof r=="function"?r():n(null)}}if(n!=null)return e=e(),n.current=e,function(){n.current=null}}function Y_(e,n,r){r=r!=null?r.concat([e]):null,Hr(4,4,j_.bind(null,n,e),r)}function dc(){}function Q_(e,n){var r=Ge();n=n===void 0?null:n;var l=r.memoizedState;return n!==null&&nc(n,l[1])?l[0]:(r.memoizedState=[e,n],e)}function F_(e,n){var r=Ge();n=n===void 0?null:n;var l=r.memoizedState;if(n!==null&&nc(n,l[1]))return l[0];if(l=e(),Pi){Hn(!0);try{e()}finally{Hn(!1)}}return r.memoizedState=[l,n],l}function _c(e,n,r){return r===void 0||(Yn&1073741824)!==0?e.memoizedState=n:(e.memoizedState=r,e=Wp(),$.lanes|=e,Jn|=e,r)}function K_(e,n,r,l){return wt(r,n)?r:bs.current!==null?(e=_c(e,r,l),wt(e,n)||($e=!0),e):(Yn&42)===0?($e=!0,e.memoizedState=r):(e=Wp(),$.lanes|=e,Jn|=e,n)}function X_(e,n,r,l,u){var f=H.p;H.p=f!==0&&8>f?f:8;var _=D.T,m={};D.T=m,mc(e,!1,n,r);try{var y=u(),R=D.S;if(R!==null&&R(m,y),y!==null&&typeof y=="object"&&typeof y.then=="function"){var O=U0(y,l);Pr(e,n,O,Mt(e))}else Pr(e,n,l,Mt(e))}catch(M){Pr(e,n,{then:function(){},status:"rejected",reason:M},Mt())}finally{H.p=f,D.T=_}}function B0(){}function pc(e,n,r,l){if(e.tag!==5)throw Error(a(476));var u=W_(e).queue;X_(e,u,n,Y,r===null?B0:function(){return Z_(e),r(l)})}function W_(e){var n=e.memoizedState;if(n!==null)return n;n={memoizedState:Y,baseState:Y,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:vn,lastRenderedState:Y},next:null};var r={};return n.next={memoizedState:r,baseState:r,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:vn,lastRenderedState:r},next:null},e.memoizedState=n,e=e.alternate,e!==null&&(e.memoizedState=n),n}function Z_(e){var n=W_(e).next.queue;Pr(e,n,{},Mt())}function gc(){return ft(ia)}function J_(){return Ge().memoizedState}function $_(){return Ge().memoizedState}function q0(e){for(var n=e.return;n!==null;){switch(n.tag){case 24:case 3:var r=Mt();e=Gn(r);var l=jn(n,e,r);l!==null&&(kt(l,n,r),kr(l,n,r)),n={cache:Qu()},e.payload=n;return}n=n.return}}function V0(e,n,r){var l=Mt();r={lane:l,revertLane:0,action:r,hasEagerState:!1,eagerState:null,next:null},Rl(e)?tp(n,r):(r=Lu(e,n,r,l),r!==null&&(kt(r,e,l),np(r,n,l)))}function ep(e,n,r){var l=Mt();Pr(e,n,r,l)}function Pr(e,n,r,l){var u={lane:l,revertLane:0,action:r,hasEagerState:!1,eagerState:null,next:null};if(Rl(e))tp(n,u);else{var f=e.alternate;if(e.lanes===0&&(f===null||f.lanes===0)&&(f=n.lastRenderedReducer,f!==null))try{var _=n.lastRenderedState,m=f(_,r);if(u.hasEagerState=!0,u.eagerState=m,wt(m,_))return ul(e,n,u,0),we===null&&ol(),!1}catch{}finally{}if(r=Lu(e,n,u,l),r!==null)return kt(r,e,l),np(r,n,l),!0}return!1}function mc(e,n,r,l){if(l={lane:2,revertLane:Xc(),action:l,hasEagerState:!1,eagerState:null,next:null},Rl(e)){if(n)throw Error(a(479))}else n=Lu(e,r,l,2),n!==null&&kt(n,e,2)}function Rl(e){var n=e.alternate;return e===$||n!==null&&n===$}function tp(e,n){Cs=El=!0;var r=e.pending;r===null?n.next=n:(n.next=r.next,r.next=n),e.pending=n}function np(e,n,r){if((r&4194048)!==0){var l=n.lanes;l&=e.pendingLanes,r|=l,n.lanes=r,cd(e,r)}}var wl={readContext:ft,use:Tl,useCallback:Be,useContext:Be,useEffect:Be,useImperativeHandle:Be,useLayoutEffect:Be,useInsertionEffect:Be,useMemo:Be,useReducer:Be,useRef:Be,useState:Be,useDebugValue:Be,useDeferredValue:Be,useTransition:Be,useSyncExternalStore:Be,useId:Be,useHostTransitionStatus:Be,useFormState:Be,useActionState:Be,useOptimistic:Be,useMemoCache:Be,useCacheRefresh:Be},ip={readContext:ft,use:Tl,useCallback:function(e,n){return Et().memoizedState=[e,n===void 0?null:n],e},useContext:ft,useEffect:B_,useImperativeHandle:function(e,n,r){r=r!=null?r.concat([e]):null,Al(4194308,4,j_.bind(null,n,e),r)},useLayoutEffect:function(e,n){return Al(4194308,4,e,n)},useInsertionEffect:function(e,n){Al(4,2,e,n)},useMemo:function(e,n){var r=Et();n=n===void 0?null:n;var l=e();if(Pi){Hn(!0);try{e()}finally{Hn(!1)}}return r.memoizedState=[l,n],l},useReducer:function(e,n,r){var l=Et();if(r!==void 0){var u=r(n);if(Pi){Hn(!0);try{r(n)}finally{Hn(!1)}}}else u=n;return l.memoizedState=l.baseState=u,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:u},l.queue=e,e=e.dispatch=V0.bind(null,$,e),[l.memoizedState,e]},useRef:function(e){var n=Et();return e={current:e},n.memoizedState=e},useState:function(e){e=fc(e);var n=e.queue,r=ep.bind(null,$,n);return n.dispatch=r,[e.memoizedState,r]},useDebugValue:dc,useDeferredValue:function(e,n){var r=Et();return _c(r,e,n)},useTransition:function(){var e=fc(!1);return e=X_.bind(null,$,e.queue,!0,!1),Et().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,n,r){var l=$,u=Et();if(_e){if(r===void 0)throw Error(a(407));r=r()}else{if(r=n(),we===null)throw Error(a(349));(ce&124)!==0||C_(l,n,r)}u.memoizedState=r;var f={value:r,getSnapshot:n};return u.queue=f,B_(R_.bind(null,l,f,e),[e]),l.flags|=2048,Rs(9,Cl(),A_.bind(null,l,f,r,n),null),r},useId:function(){var e=Et(),n=we.identifierPrefix;if(_e){var r=pn,l=_n;r=(l&~(1<<32-Rt(l)-1)).toString(32)+r,n="«"+n+"R"+r,r=Sl++,0<r&&(n+="H"+r.toString(32)),n+="»"}else r=L0++,n="«"+n+"r"+r.toString(32)+"»";return e.memoizedState=n},useHostTransitionStatus:gc,useFormState:U_,useActionState:U_,useOptimistic:function(e){var n=Et();n.memoizedState=n.baseState=e;var r={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return n.queue=r,n=mc.bind(null,$,!0,r),r.dispatch=n,[e,n]},useMemoCache:oc,useCacheRefresh:function(){return Et().memoizedState=q0.bind(null,$)}},sp={readContext:ft,use:Tl,useCallback:Q_,useContext:ft,useEffect:q_,useImperativeHandle:Y_,useInsertionEffect:V_,useLayoutEffect:G_,useMemo:F_,useReducer:bl,useRef:P_,useState:function(){return bl(vn)},useDebugValue:dc,useDeferredValue:function(e,n){var r=Ge();return K_(r,me.memoizedState,e,n)},useTransition:function(){var e=bl(vn)[0],n=Ge().memoizedState;return[typeof e=="boolean"?e:zr(e),n]},useSyncExternalStore:b_,useId:J_,useHostTransitionStatus:gc,useFormState:L_,useActionState:L_,useOptimistic:function(e,n){var r=Ge();return O_(r,me,e,n)},useMemoCache:oc,useCacheRefresh:$_},G0={readContext:ft,use:Tl,useCallback:Q_,useContext:ft,useEffect:q_,useImperativeHandle:Y_,useInsertionEffect:V_,useLayoutEffect:G_,useMemo:F_,useReducer:cc,useRef:P_,useState:function(){return cc(vn)},useDebugValue:dc,useDeferredValue:function(e,n){var r=Ge();return me===null?_c(r,e,n):K_(r,me.memoizedState,e,n)},useTransition:function(){var e=cc(vn)[0],n=Ge().memoizedState;return[typeof e=="boolean"?e:zr(e),n]},useSyncExternalStore:b_,useId:J_,useHostTransitionStatus:gc,useFormState:H_,useActionState:H_,useOptimistic:function(e,n){var r=Ge();return me!==null?O_(r,me,e,n):(r.baseState=e,[e,r.queue.dispatch])},useMemoCache:oc,useCacheRefresh:$_},ws=null,Br=0;function Nl(e){var n=Br;return Br+=1,ws===null&&(ws=[]),p_(ws,e,n)}function qr(e,n){n=n.props.ref,e.ref=n!==void 0?n:null}function Ol(e,n){throw n.$$typeof===E?Error(a(525)):(e=Object.prototype.toString.call(n),Error(a(31,e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e)))}function rp(e){var n=e._init;return n(e._payload)}function ap(e){function n(C,T){if(e){var A=C.deletions;A===null?(C.deletions=[T],C.flags|=16):A.push(T)}}function r(C,T){if(!e)return null;for(;T!==null;)n(C,T),T=T.sibling;return null}function l(C){for(var T=new Map;C!==null;)C.key!==null?T.set(C.key,C):T.set(C.index,C),C=C.sibling;return T}function u(C,T){return C=dn(C,T),C.index=0,C.sibling=null,C}function f(C,T,A){return C.index=A,e?(A=C.alternate,A!==null?(A=A.index,A<T?(C.flags|=67108866,T):A):(C.flags|=67108866,T)):(C.flags|=1048576,T)}function _(C){return e&&C.alternate===null&&(C.flags|=67108866),C}function m(C,T,A,I){return T===null||T.tag!==6?(T=Hu(A,C.mode,I),T.return=C,T):(T=u(T,A),T.return=C,T)}function y(C,T,A,I){var B=A.type;return B===L?O(C,T,A.props.children,I,A.key):T!==null&&(T.elementType===B||typeof B=="object"&&B!==null&&B.$$typeof===re&&rp(B)===T.type)?(T=u(T,A.props),qr(T,A),T.return=C,T):(T=fl(A.type,A.key,A.props,null,C.mode,I),qr(T,A),T.return=C,T)}function R(C,T,A,I){return T===null||T.tag!==4||T.stateNode.containerInfo!==A.containerInfo||T.stateNode.implementation!==A.implementation?(T=Pu(A,C.mode,I),T.return=C,T):(T=u(T,A.children||[]),T.return=C,T)}function O(C,T,A,I,B){return T===null||T.tag!==7?(T=Ii(A,C.mode,I,B),T.return=C,T):(T=u(T,A),T.return=C,T)}function M(C,T,A){if(typeof T=="string"&&T!==""||typeof T=="number"||typeof T=="bigint")return T=Hu(""+T,C.mode,A),T.return=C,T;if(typeof T=="object"&&T!==null){switch(T.$$typeof){case b:return A=fl(T.type,T.key,T.props,null,C.mode,A),qr(A,T),A.return=C,A;case x:return T=Pu(T,C.mode,A),T.return=C,T;case re:var I=T._init;return T=I(T._payload),M(C,T,A)}if(ut(T)||Re(T))return T=Ii(T,C.mode,A,null),T.return=C,T;if(typeof T.then=="function")return M(C,Nl(T),A);if(T.$$typeof===Ae)return M(C,pl(C,T),A);Ol(C,T)}return null}function w(C,T,A,I){var B=T!==null?T.key:null;if(typeof A=="string"&&A!==""||typeof A=="number"||typeof A=="bigint")return B!==null?null:m(C,T,""+A,I);if(typeof A=="object"&&A!==null){switch(A.$$typeof){case b:return A.key===B?y(C,T,A,I):null;case x:return A.key===B?R(C,T,A,I):null;case re:return B=A._init,A=B(A._payload),w(C,T,A,I)}if(ut(A)||Re(A))return B!==null?null:O(C,T,A,I,null);if(typeof A.then=="function")return w(C,T,Nl(A),I);if(A.$$typeof===Ae)return w(C,T,pl(C,A),I);Ol(C,A)}return null}function N(C,T,A,I,B){if(typeof I=="string"&&I!==""||typeof I=="number"||typeof I=="bigint")return C=C.get(A)||null,m(T,C,""+I,B);if(typeof I=="object"&&I!==null){switch(I.$$typeof){case b:return C=C.get(I.key===null?A:I.key)||null,y(T,C,I,B);case x:return C=C.get(I.key===null?A:I.key)||null,R(T,C,I,B);case re:var te=I._init;return I=te(I._payload),N(C,T,A,I,B)}if(ut(I)||Re(I))return C=C.get(A)||null,O(T,C,I,B,null);if(typeof I.then=="function")return N(C,T,A,Nl(I),B);if(I.$$typeof===Ae)return N(C,T,A,pl(T,I),B);Ol(T,I)}return null}function K(C,T,A,I){for(var B=null,te=null,q=T,j=T=0,tt=null;q!==null&&j<A.length;j++){q.index>j?(tt=q,q=null):tt=q.sibling;var he=w(C,q,A[j],I);if(he===null){q===null&&(q=tt);break}e&&q&&he.alternate===null&&n(C,q),T=f(he,T,j),te===null?B=he:te.sibling=he,te=he,q=tt}if(j===A.length)return r(C,q),_e&&ki(C,j),B;if(q===null){for(;j<A.length;j++)q=M(C,A[j],I),q!==null&&(T=f(q,T,j),te===null?B=q:te.sibling=q,te=q);return _e&&ki(C,j),B}for(q=l(q);j<A.length;j++)tt=N(q,C,j,A[j],I),tt!==null&&(e&&tt.alternate!==null&&q.delete(tt.key===null?j:tt.key),T=f(tt,T,j),te===null?B=tt:te.sibling=tt,te=tt);return e&&q.forEach(function(li){return n(C,li)}),_e&&ki(C,j),B}function G(C,T,A,I){if(A==null)throw Error(a(151));for(var B=null,te=null,q=T,j=T=0,tt=null,he=A.next();q!==null&&!he.done;j++,he=A.next()){q.index>j?(tt=q,q=null):tt=q.sibling;var li=w(C,q,he.value,I);if(li===null){q===null&&(q=tt);break}e&&q&&li.alternate===null&&n(C,q),T=f(li,T,j),te===null?B=li:te.sibling=li,te=li,q=tt}if(he.done)return r(C,q),_e&&ki(C,j),B;if(q===null){for(;!he.done;j++,he=A.next())he=M(C,he.value,I),he!==null&&(T=f(he,T,j),te===null?B=he:te.sibling=he,te=he);return _e&&ki(C,j),B}for(q=l(q);!he.done;j++,he=A.next())he=N(q,C,j,he.value,I),he!==null&&(e&&he.alternate!==null&&q.delete(he.key===null?j:he.key),T=f(he,T,j),te===null?B=he:te.sibling=he,te=he);return e&&q.forEach(function(jS){return n(C,jS)}),_e&&ki(C,j),B}function ye(C,T,A,I){if(typeof A=="object"&&A!==null&&A.type===L&&A.key===null&&(A=A.props.children),typeof A=="object"&&A!==null){switch(A.$$typeof){case b:e:{for(var B=A.key;T!==null;){if(T.key===B){if(B=A.type,B===L){if(T.tag===7){r(C,T.sibling),I=u(T,A.props.children),I.return=C,C=I;break e}}else if(T.elementType===B||typeof B=="object"&&B!==null&&B.$$typeof===re&&rp(B)===T.type){r(C,T.sibling),I=u(T,A.props),qr(I,A),I.return=C,C=I;break e}r(C,T);break}else n(C,T);T=T.sibling}A.type===L?(I=Ii(A.props.children,C.mode,I,A.key),I.return=C,C=I):(I=fl(A.type,A.key,A.props,null,C.mode,I),qr(I,A),I.return=C,C=I)}return _(C);case x:e:{for(B=A.key;T!==null;){if(T.key===B)if(T.tag===4&&T.stateNode.containerInfo===A.containerInfo&&T.stateNode.implementation===A.implementation){r(C,T.sibling),I=u(T,A.children||[]),I.return=C,C=I;break e}else{r(C,T);break}else n(C,T);T=T.sibling}I=Pu(A,C.mode,I),I.return=C,C=I}return _(C);case re:return B=A._init,A=B(A._payload),ye(C,T,A,I)}if(ut(A))return K(C,T,A,I);if(Re(A)){if(B=Re(A),typeof B!="function")throw Error(a(150));return A=B.call(A),G(C,T,A,I)}if(typeof A.then=="function")return ye(C,T,Nl(A),I);if(A.$$typeof===Ae)return ye(C,T,pl(C,A),I);Ol(C,A)}return typeof A=="string"&&A!==""||typeof A=="number"||typeof A=="bigint"?(A=""+A,T!==null&&T.tag===6?(r(C,T.sibling),I=u(T,A),I.return=C,C=I):(r(C,T),I=Hu(A,C.mode,I),I.return=C,C=I),_(C)):r(C,T)}return function(C,T,A,I){try{Br=0;var B=ye(C,T,A,I);return ws=null,B}catch(q){if(q===Ir||q===ml)throw q;var te=Nt(29,q,null,C.mode);return te.lanes=I,te.return=C,te}finally{}}}var Ns=ap(!0),lp=ap(!1),Bt=k(null),sn=null;function Qn(e){var n=e.alternate;z(Ke,Ke.current&1),z(Bt,e),sn===null&&(n===null||bs.current!==null||n.memoizedState!==null)&&(sn=e)}function op(e){if(e.tag===22){if(z(Ke,Ke.current),z(Bt,e),sn===null){var n=e.alternate;n!==null&&n.memoizedState!==null&&(sn=e)}}else Fn()}function Fn(){z(Ke,Ke.current),z(Bt,Bt.current)}function yn(e){P(Bt),sn===e&&(sn=null),P(Ke)}var Ke=k(0);function Dl(e){for(var n=e;n!==null;){if(n.tag===13){var r=n.memoizedState;if(r!==null&&(r=r.dehydrated,r===null||r.data==="$?"||of(r)))return n}else if(n.tag===19&&n.memoizedProps.revealOrder!==void 0){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}function vc(e,n,r,l){n=e.memoizedState,r=r(l,n),r=r==null?n:v({},n,r),e.memoizedState=r,e.lanes===0&&(e.updateQueue.baseState=r)}var yc={enqueueSetState:function(e,n,r){e=e._reactInternals;var l=Mt(),u=Gn(l);u.payload=n,r!=null&&(u.callback=r),n=jn(e,u,l),n!==null&&(kt(n,e,l),kr(n,e,l))},enqueueReplaceState:function(e,n,r){e=e._reactInternals;var l=Mt(),u=Gn(l);u.tag=1,u.payload=n,r!=null&&(u.callback=r),n=jn(e,u,l),n!==null&&(kt(n,e,l),kr(n,e,l))},enqueueForceUpdate:function(e,n){e=e._reactInternals;var r=Mt(),l=Gn(r);l.tag=2,n!=null&&(l.callback=n),n=jn(e,l,r),n!==null&&(kt(n,e,r),kr(n,e,r))}};function up(e,n,r,l,u,f,_){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(l,f,_):n.prototype&&n.prototype.isPureReactComponent?!br(r,l)||!br(u,f):!0}function cp(e,n,r,l){e=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(r,l),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(r,l),n.state!==e&&yc.enqueueReplaceState(n,n.state,null)}function Bi(e,n){var r=n;if("ref"in n){r={};for(var l in n)l!=="ref"&&(r[l]=n[l])}if(e=e.defaultProps){r===n&&(r=v({},r));for(var u in e)r[u]===void 0&&(r[u]=e[u])}return r}var Il=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var n=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(n))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)};function fp(e){Il(e)}function hp(e){console.error(e)}function dp(e){Il(e)}function Ml(e,n){try{var r=e.onUncaughtError;r(n.value,{componentStack:n.stack})}catch(l){setTimeout(function(){throw l})}}function _p(e,n,r){try{var l=e.onCaughtError;l(r.value,{componentStack:r.stack,errorBoundary:n.tag===1?n.stateNode:null})}catch(u){setTimeout(function(){throw u})}}function Ec(e,n,r){return r=Gn(r),r.tag=3,r.payload={element:null},r.callback=function(){Ml(e,n)},r}function pp(e){return e=Gn(e),e.tag=3,e}function gp(e,n,r,l){var u=r.type.getDerivedStateFromError;if(typeof u=="function"){var f=l.value;e.payload=function(){return u(f)},e.callback=function(){_p(n,r,l)}}var _=r.stateNode;_!==null&&typeof _.componentDidCatch=="function"&&(e.callback=function(){_p(n,r,l),typeof u!="function"&&($n===null?$n=new Set([this]):$n.add(this));var m=l.stack;this.componentDidCatch(l.value,{componentStack:m!==null?m:""})})}function j0(e,n,r,l,u){if(r.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){if(n=r.alternate,n!==null&&Nr(n,r,u,!0),r=Bt.current,r!==null){switch(r.tag){case 13:return sn===null?jc():r.alternate===null&&ze===0&&(ze=3),r.flags&=-257,r.flags|=65536,r.lanes=u,l===Xu?r.flags|=16384:(n=r.updateQueue,n===null?r.updateQueue=new Set([l]):n.add(l),Qc(e,l,u)),!1;case 22:return r.flags|=65536,l===Xu?r.flags|=16384:(n=r.updateQueue,n===null?(n={transitions:null,markerInstances:null,retryQueue:new Set([l])},r.updateQueue=n):(r=n.retryQueue,r===null?n.retryQueue=new Set([l]):r.add(l)),Qc(e,l,u)),!1}throw Error(a(435,r.tag))}return Qc(e,l,u),jc(),!1}if(_e)return n=Bt.current,n!==null?((n.flags&65536)===0&&(n.flags|=256),n.flags|=65536,n.lanes=u,l!==Vu&&(e=Error(a(422),{cause:l}),wr(Lt(e,r)))):(l!==Vu&&(n=Error(a(423),{cause:l}),wr(Lt(n,r))),e=e.current.alternate,e.flags|=65536,u&=-u,e.lanes|=u,l=Lt(l,r),u=Ec(e.stateNode,l,u),Ju(e,u),ze!==4&&(ze=2)),!1;var f=Error(a(520),{cause:l});if(f=Lt(f,r),Kr===null?Kr=[f]:Kr.push(f),ze!==4&&(ze=2),n===null)return!0;l=Lt(l,r),r=n;do{switch(r.tag){case 3:return r.flags|=65536,e=u&-u,r.lanes|=e,e=Ec(r.stateNode,l,e),Ju(r,e),!1;case 1:if(n=r.type,f=r.stateNode,(r.flags&128)===0&&(typeof n.getDerivedStateFromError=="function"||f!==null&&typeof f.componentDidCatch=="function"&&($n===null||!$n.has(f))))return r.flags|=65536,u&=-u,r.lanes|=u,u=pp(u),gp(u,e,r,l),Ju(r,u),!1}r=r.return}while(r!==null);return!1}var mp=Error(a(461)),$e=!1;function st(e,n,r,l){n.child=e===null?lp(n,null,r,l):Ns(n,e.child,r,l)}function vp(e,n,r,l,u){r=r.render;var f=n.ref;if("ref"in l){var _={};for(var m in l)m!=="ref"&&(_[m]=l[m])}else _=l;return zi(n),l=ic(e,n,r,_,f,u),m=sc(),e!==null&&!$e?(rc(e,n,u),En(e,n,u)):(_e&&m&&Bu(n),n.flags|=1,st(e,n,l,u),n.child)}function yp(e,n,r,l,u){if(e===null){var f=r.type;return typeof f=="function"&&!zu(f)&&f.defaultProps===void 0&&r.compare===null?(n.tag=15,n.type=f,Ep(e,n,f,l,u)):(e=fl(r.type,null,l,n,n.mode,u),e.ref=n.ref,e.return=n,n.child=e)}if(f=e.child,!Nc(e,u)){var _=f.memoizedProps;if(r=r.compare,r=r!==null?r:br,r(_,l)&&e.ref===n.ref)return En(e,n,u)}return n.flags|=1,e=dn(f,l),e.ref=n.ref,e.return=n,n.child=e}function Ep(e,n,r,l,u){if(e!==null){var f=e.memoizedProps;if(br(f,l)&&e.ref===n.ref)if($e=!1,n.pendingProps=l=f,Nc(e,u))(e.flags&131072)!==0&&($e=!0);else return n.lanes=e.lanes,En(e,n,u)}return Sc(e,n,r,l,u)}function Sp(e,n,r){var l=n.pendingProps,u=l.children,f=e!==null?e.memoizedState:null;if(l.mode==="hidden"){if((n.flags&128)!==0){if(l=f!==null?f.baseLanes|r:r,e!==null){for(u=n.child=e.child,f=0;u!==null;)f=f|u.lanes|u.childLanes,u=u.sibling;n.childLanes=f&~l}else n.childLanes=0,n.child=null;return Tp(e,n,l,r)}if((r&536870912)!==0)n.memoizedState={baseLanes:0,cachePool:null},e!==null&&gl(n,f!==null?f.cachePool:null),f!==null?E_(n,f):ec(),op(n);else return n.lanes=n.childLanes=536870912,Tp(e,n,f!==null?f.baseLanes|r:r,r)}else f!==null?(gl(n,f.cachePool),E_(n,f),Fn(),n.memoizedState=null):(e!==null&&gl(n,null),ec(),Fn());return st(e,n,u,r),n.child}function Tp(e,n,r,l){var u=Ku();return u=u===null?null:{parent:Fe._currentValue,pool:u},n.memoizedState={baseLanes:r,cachePool:u},e!==null&&gl(n,null),ec(),op(n),e!==null&&Nr(e,n,l,!0),null}function kl(e,n){var r=n.ref;if(r===null)e!==null&&e.ref!==null&&(n.flags|=4194816);else{if(typeof r!="function"&&typeof r!="object")throw Error(a(284));(e===null||e.ref!==r)&&(n.flags|=4194816)}}function Sc(e,n,r,l,u){return zi(n),r=ic(e,n,r,l,void 0,u),l=sc(),e!==null&&!$e?(rc(e,n,u),En(e,n,u)):(_e&&l&&Bu(n),n.flags|=1,st(e,n,r,u),n.child)}function bp(e,n,r,l,u,f){return zi(n),n.updateQueue=null,r=T_(n,l,r,u),S_(e),l=sc(),e!==null&&!$e?(rc(e,n,f),En(e,n,f)):(_e&&l&&Bu(n),n.flags|=1,st(e,n,r,f),n.child)}function Cp(e,n,r,l,u){if(zi(n),n.stateNode===null){var f=vs,_=r.contextType;typeof _=="object"&&_!==null&&(f=ft(_)),f=new r(l,f),n.memoizedState=f.state!==null&&f.state!==void 0?f.state:null,f.updater=yc,n.stateNode=f,f._reactInternals=n,f=n.stateNode,f.props=l,f.state=n.memoizedState,f.refs={},Wu(n),_=r.contextType,f.context=typeof _=="object"&&_!==null?ft(_):vs,f.state=n.memoizedState,_=r.getDerivedStateFromProps,typeof _=="function"&&(vc(n,r,_,l),f.state=n.memoizedState),typeof r.getDerivedStateFromProps=="function"||typeof f.getSnapshotBeforeUpdate=="function"||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(_=f.state,typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount(),_!==f.state&&yc.enqueueReplaceState(f,f.state,null),Ur(n,l,f,u),xr(),f.state=n.memoizedState),typeof f.componentDidMount=="function"&&(n.flags|=4194308),l=!0}else if(e===null){f=n.stateNode;var m=n.memoizedProps,y=Bi(r,m);f.props=y;var R=f.context,O=r.contextType;_=vs,typeof O=="object"&&O!==null&&(_=ft(O));var M=r.getDerivedStateFromProps;O=typeof M=="function"||typeof f.getSnapshotBeforeUpdate=="function",m=n.pendingProps!==m,O||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(m||R!==_)&&cp(n,f,l,_),Vn=!1;var w=n.memoizedState;f.state=w,Ur(n,l,f,u),xr(),R=n.memoizedState,m||w!==R||Vn?(typeof M=="function"&&(vc(n,r,M,l),R=n.memoizedState),(y=Vn||up(n,r,y,l,w,R,_))?(O||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount()),typeof f.componentDidMount=="function"&&(n.flags|=4194308)):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=l,n.memoizedState=R),f.props=l,f.state=R,f.context=_,l=y):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),l=!1)}else{f=n.stateNode,Zu(e,n),_=n.memoizedProps,O=Bi(r,_),f.props=O,M=n.pendingProps,w=f.context,R=r.contextType,y=vs,typeof R=="object"&&R!==null&&(y=ft(R)),m=r.getDerivedStateFromProps,(R=typeof m=="function"||typeof f.getSnapshotBeforeUpdate=="function")||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(_!==M||w!==y)&&cp(n,f,l,y),Vn=!1,w=n.memoizedState,f.state=w,Ur(n,l,f,u),xr();var N=n.memoizedState;_!==M||w!==N||Vn||e!==null&&e.dependencies!==null&&_l(e.dependencies)?(typeof m=="function"&&(vc(n,r,m,l),N=n.memoizedState),(O=Vn||up(n,r,O,l,w,N,y)||e!==null&&e.dependencies!==null&&_l(e.dependencies))?(R||typeof f.UNSAFE_componentWillUpdate!="function"&&typeof f.componentWillUpdate!="function"||(typeof f.componentWillUpdate=="function"&&f.componentWillUpdate(l,N,y),typeof f.UNSAFE_componentWillUpdate=="function"&&f.UNSAFE_componentWillUpdate(l,N,y)),typeof f.componentDidUpdate=="function"&&(n.flags|=4),typeof f.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof f.componentDidUpdate!="function"||_===e.memoizedProps&&w===e.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||_===e.memoizedProps&&w===e.memoizedState||(n.flags|=1024),n.memoizedProps=l,n.memoizedState=N),f.props=l,f.state=N,f.context=y,l=O):(typeof f.componentDidUpdate!="function"||_===e.memoizedProps&&w===e.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||_===e.memoizedProps&&w===e.memoizedState||(n.flags|=1024),l=!1)}return f=l,kl(e,n),l=(n.flags&128)!==0,f||l?(f=n.stateNode,r=l&&typeof r.getDerivedStateFromError!="function"?null:f.render(),n.flags|=1,e!==null&&l?(n.child=Ns(n,e.child,null,u),n.child=Ns(n,null,r,u)):st(e,n,r,u),n.memoizedState=f.state,e=n.child):e=En(e,n,u),e}function Ap(e,n,r,l){return Rr(),n.flags|=256,st(e,n,r,l),n.child}var Tc={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function bc(e){return{baseLanes:e,cachePool:h_()}}function Cc(e,n,r){return e=e!==null?e.childLanes&~r:0,n&&(e|=qt),e}function Rp(e,n,r){var l=n.pendingProps,u=!1,f=(n.flags&128)!==0,_;if((_=f)||(_=e!==null&&e.memoizedState===null?!1:(Ke.current&2)!==0),_&&(u=!0,n.flags&=-129),_=(n.flags&32)!==0,n.flags&=-33,e===null){if(_e){if(u?Qn(n):Fn(),_e){var m=Le,y;if(y=m){e:{for(y=m,m=nn;y.nodeType!==8;){if(!m){m=null;break e}if(y=Xt(y.nextSibling),y===null){m=null;break e}}m=y}m!==null?(n.memoizedState={dehydrated:m,treeContext:Mi!==null?{id:_n,overflow:pn}:null,retryLane:536870912,hydrationErrors:null},y=Nt(18,null,null,0),y.stateNode=m,y.return=n,n.child=y,dt=n,Le=null,y=!0):y=!1}y||Ui(n)}if(m=n.memoizedState,m!==null&&(m=m.dehydrated,m!==null))return of(m)?n.lanes=32:n.lanes=536870912,null;yn(n)}return m=l.children,l=l.fallback,u?(Fn(),u=n.mode,m=xl({mode:"hidden",children:m},u),l=Ii(l,u,r,null),m.return=n,l.return=n,m.sibling=l,n.child=m,u=n.child,u.memoizedState=bc(r),u.childLanes=Cc(e,_,r),n.memoizedState=Tc,l):(Qn(n),Ac(n,m))}if(y=e.memoizedState,y!==null&&(m=y.dehydrated,m!==null)){if(f)n.flags&256?(Qn(n),n.flags&=-257,n=Rc(e,n,r)):n.memoizedState!==null?(Fn(),n.child=e.child,n.flags|=128,n=null):(Fn(),u=l.fallback,m=n.mode,l=xl({mode:"visible",children:l.children},m),u=Ii(u,m,r,null),u.flags|=2,l.return=n,u.return=n,l.sibling=u,n.child=l,Ns(n,e.child,null,r),l=n.child,l.memoizedState=bc(r),l.childLanes=Cc(e,_,r),n.memoizedState=Tc,n=u);else if(Qn(n),of(m)){if(_=m.nextSibling&&m.nextSibling.dataset,_)var R=_.dgst;_=R,l=Error(a(419)),l.stack="",l.digest=_,wr({value:l,source:null,stack:null}),n=Rc(e,n,r)}else if($e||Nr(e,n,r,!1),_=(r&e.childLanes)!==0,$e||_){if(_=we,_!==null&&(l=r&-r,l=(l&42)!==0?1:ou(l),l=(l&(_.suspendedLanes|r))!==0?0:l,l!==0&&l!==y.retryLane))throw y.retryLane=l,ms(e,l),kt(_,e,l),mp;m.data==="$?"||jc(),n=Rc(e,n,r)}else m.data==="$?"?(n.flags|=192,n.child=e.child,n=null):(e=y.treeContext,Le=Xt(m.nextSibling),dt=n,_e=!0,xi=null,nn=!1,e!==null&&(Ht[Pt++]=_n,Ht[Pt++]=pn,Ht[Pt++]=Mi,_n=e.id,pn=e.overflow,Mi=n),n=Ac(n,l.children),n.flags|=4096);return n}return u?(Fn(),u=l.fallback,m=n.mode,y=e.child,R=y.sibling,l=dn(y,{mode:"hidden",children:l.children}),l.subtreeFlags=y.subtreeFlags&65011712,R!==null?u=dn(R,u):(u=Ii(u,m,r,null),u.flags|=2),u.return=n,l.return=n,l.sibling=u,n.child=l,l=u,u=n.child,m=e.child.memoizedState,m===null?m=bc(r):(y=m.cachePool,y!==null?(R=Fe._currentValue,y=y.parent!==R?{parent:R,pool:R}:y):y=h_(),m={baseLanes:m.baseLanes|r,cachePool:y}),u.memoizedState=m,u.childLanes=Cc(e,_,r),n.memoizedState=Tc,l):(Qn(n),r=e.child,e=r.sibling,r=dn(r,{mode:"visible",children:l.children}),r.return=n,r.sibling=null,e!==null&&(_=n.deletions,_===null?(n.deletions=[e],n.flags|=16):_.push(e)),n.child=r,n.memoizedState=null,r)}function Ac(e,n){return n=xl({mode:"visible",children:n},e.mode),n.return=e,e.child=n}function xl(e,n){return e=Nt(22,e,null,n),e.lanes=0,e.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null},e}function Rc(e,n,r){return Ns(n,e.child,null,r),e=Ac(n,n.pendingProps.children),e.flags|=2,n.memoizedState=null,e}function wp(e,n,r){e.lanes|=n;var l=e.alternate;l!==null&&(l.lanes|=n),ju(e.return,n,r)}function wc(e,n,r,l,u){var f=e.memoizedState;f===null?e.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:l,tail:r,tailMode:u}:(f.isBackwards=n,f.rendering=null,f.renderingStartTime=0,f.last=l,f.tail=r,f.tailMode=u)}function Np(e,n,r){var l=n.pendingProps,u=l.revealOrder,f=l.tail;if(st(e,n,l.children,r),l=Ke.current,(l&2)!==0)l=l&1|2,n.flags|=128;else{if(e!==null&&(e.flags&128)!==0)e:for(e=n.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&wp(e,r,n);else if(e.tag===19)wp(e,r,n);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break e;for(;e.sibling===null;){if(e.return===null||e.return===n)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}l&=1}switch(z(Ke,l),u){case"forwards":for(r=n.child,u=null;r!==null;)e=r.alternate,e!==null&&Dl(e)===null&&(u=r),r=r.sibling;r=u,r===null?(u=n.child,n.child=null):(u=r.sibling,r.sibling=null),wc(n,!1,u,r,f);break;case"backwards":for(r=null,u=n.child,n.child=null;u!==null;){if(e=u.alternate,e!==null&&Dl(e)===null){n.child=u;break}e=u.sibling,u.sibling=r,r=u,u=e}wc(n,!0,r,null,f);break;case"together":wc(n,!1,null,null,void 0);break;default:n.memoizedState=null}return n.child}function En(e,n,r){if(e!==null&&(n.dependencies=e.dependencies),Jn|=n.lanes,(r&n.childLanes)===0)if(e!==null){if(Nr(e,n,r,!1),(r&n.childLanes)===0)return null}else return null;if(e!==null&&n.child!==e.child)throw Error(a(153));if(n.child!==null){for(e=n.child,r=dn(e,e.pendingProps),n.child=r,r.return=n;e.sibling!==null;)e=e.sibling,r=r.sibling=dn(e,e.pendingProps),r.return=n;r.sibling=null}return n.child}function Nc(e,n){return(e.lanes&n)!==0?!0:(e=e.dependencies,!!(e!==null&&_l(e)))}function Y0(e,n,r){switch(n.tag){case 3:De(n,n.stateNode.containerInfo),qn(n,Fe,e.memoizedState.cache),Rr();break;case 27:case 5:iu(n);break;case 4:De(n,n.stateNode.containerInfo);break;case 10:qn(n,n.type,n.memoizedProps.value);break;case 13:var l=n.memoizedState;if(l!==null)return l.dehydrated!==null?(Qn(n),n.flags|=128,null):(r&n.child.childLanes)!==0?Rp(e,n,r):(Qn(n),e=En(e,n,r),e!==null?e.sibling:null);Qn(n);break;case 19:var u=(e.flags&128)!==0;if(l=(r&n.childLanes)!==0,l||(Nr(e,n,r,!1),l=(r&n.childLanes)!==0),u){if(l)return Np(e,n,r);n.flags|=128}if(u=n.memoizedState,u!==null&&(u.rendering=null,u.tail=null,u.lastEffect=null),z(Ke,Ke.current),l)break;return null;case 22:case 23:return n.lanes=0,Sp(e,n,r);case 24:qn(n,Fe,e.memoizedState.cache)}return En(e,n,r)}function Op(e,n,r){if(e!==null)if(e.memoizedProps!==n.pendingProps)$e=!0;else{if(!Nc(e,r)&&(n.flags&128)===0)return $e=!1,Y0(e,n,r);$e=(e.flags&131072)!==0}else $e=!1,_e&&(n.flags&1048576)!==0&&r_(n,dl,n.index);switch(n.lanes=0,n.tag){case 16:e:{e=n.pendingProps;var l=n.elementType,u=l._init;if(l=u(l._payload),n.type=l,typeof l=="function")zu(l)?(e=Bi(l,e),n.tag=1,n=Cp(null,n,l,e,r)):(n.tag=0,n=Sc(null,n,l,e,r));else{if(l!=null){if(u=l.$$typeof,u===Ze){n.tag=11,n=vp(null,n,l,e,r);break e}else if(u===Z){n.tag=14,n=yp(null,n,l,e,r);break e}}throw n=Ai(l)||l,Error(a(306,n,""))}}return n;case 0:return Sc(e,n,n.type,n.pendingProps,r);case 1:return l=n.type,u=Bi(l,n.pendingProps),Cp(e,n,l,u,r);case 3:e:{if(De(n,n.stateNode.containerInfo),e===null)throw Error(a(387));l=n.pendingProps;var f=n.memoizedState;u=f.element,Zu(e,n),Ur(n,l,null,r);var _=n.memoizedState;if(l=_.cache,qn(n,Fe,l),l!==f.cache&&Yu(n,[Fe],r,!0),xr(),l=_.element,f.isDehydrated)if(f={element:l,isDehydrated:!1,cache:_.cache},n.updateQueue.baseState=f,n.memoizedState=f,n.flags&256){n=Ap(e,n,l,r);break e}else if(l!==u){u=Lt(Error(a(424)),n),wr(u),n=Ap(e,n,l,r);break e}else{switch(e=n.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName==="HTML"?e.ownerDocument.body:e}for(Le=Xt(e.firstChild),dt=n,_e=!0,xi=null,nn=!0,r=lp(n,null,l,r),n.child=r;r;)r.flags=r.flags&-3|4096,r=r.sibling}else{if(Rr(),l===u){n=En(e,n,r);break e}st(e,n,l,r)}n=n.child}return n;case 26:return kl(e,n),e===null?(r=kg(n.type,null,n.pendingProps,null))?n.memoizedState=r:_e||(r=n.type,e=n.pendingProps,l=Kl(W.current).createElement(r),l[ct]=n,l[vt]=e,at(l,r,e),Je(l),n.stateNode=l):n.memoizedState=kg(n.type,e.memoizedProps,n.pendingProps,e.memoizedState),null;case 27:return iu(n),e===null&&_e&&(l=n.stateNode=Dg(n.type,n.pendingProps,W.current),dt=n,nn=!0,u=Le,ni(n.type)?(uf=u,Le=Xt(l.firstChild)):Le=u),st(e,n,n.pendingProps.children,r),kl(e,n),e===null&&(n.flags|=4194304),n.child;case 5:return e===null&&_e&&((u=l=Le)&&(l=yS(l,n.type,n.pendingProps,nn),l!==null?(n.stateNode=l,dt=n,Le=Xt(l.firstChild),nn=!1,u=!0):u=!1),u||Ui(n)),iu(n),u=n.type,f=n.pendingProps,_=e!==null?e.memoizedProps:null,l=f.children,rf(u,f)?l=null:_!==null&&rf(u,_)&&(n.flags|=32),n.memoizedState!==null&&(u=ic(e,n,z0,null,null,r),ia._currentValue=u),kl(e,n),st(e,n,l,r),n.child;case 6:return e===null&&_e&&((e=r=Le)&&(r=ES(r,n.pendingProps,nn),r!==null?(n.stateNode=r,dt=n,Le=null,e=!0):e=!1),e||Ui(n)),null;case 13:return Rp(e,n,r);case 4:return De(n,n.stateNode.containerInfo),l=n.pendingProps,e===null?n.child=Ns(n,null,l,r):st(e,n,l,r),n.child;case 11:return vp(e,n,n.type,n.pendingProps,r);case 7:return st(e,n,n.pendingProps,r),n.child;case 8:return st(e,n,n.pendingProps.children,r),n.child;case 12:return st(e,n,n.pendingProps.children,r),n.child;case 10:return l=n.pendingProps,qn(n,n.type,l.value),st(e,n,l.children,r),n.child;case 9:return u=n.type._context,l=n.pendingProps.children,zi(n),u=ft(u),l=l(u),n.flags|=1,st(e,n,l,r),n.child;case 14:return yp(e,n,n.type,n.pendingProps,r);case 15:return Ep(e,n,n.type,n.pendingProps,r);case 19:return Np(e,n,r);case 31:return l=n.pendingProps,r=n.mode,l={mode:l.mode,children:l.children},e===null?(r=xl(l,r),r.ref=n.ref,n.child=r,r.return=n,n=r):(r=dn(e.child,l),r.ref=n.ref,n.child=r,r.return=n,n=r),n;case 22:return Sp(e,n,r);case 24:return zi(n),l=ft(Fe),e===null?(u=Ku(),u===null&&(u=we,f=Qu(),u.pooledCache=f,f.refCount++,f!==null&&(u.pooledCacheLanes|=r),u=f),n.memoizedState={parent:l,cache:u},Wu(n),qn(n,Fe,u)):((e.lanes&r)!==0&&(Zu(e,n),Ur(n,null,null,r),xr()),u=e.memoizedState,f=n.memoizedState,u.parent!==l?(u={parent:l,cache:l},n.memoizedState=u,n.lanes===0&&(n.memoizedState=n.updateQueue.baseState=u),qn(n,Fe,l)):(l=f.cache,qn(n,Fe,l),l!==u.cache&&Yu(n,[Fe],r,!0))),st(e,n,n.pendingProps.children,r),n.child;case 29:throw n.pendingProps}throw Error(a(156,n.tag))}function Sn(e){e.flags|=4}function Dp(e,n){if(n.type!=="stylesheet"||(n.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!Hg(n)){if(n=Bt.current,n!==null&&((ce&4194048)===ce?sn!==null:(ce&62914560)!==ce&&(ce&536870912)===0||n!==sn))throw Mr=Xu,d_;e.flags|=8192}}function Ul(e,n){n!==null&&(e.flags|=4),e.flags&16384&&(n=e.tag!==22?od():536870912,e.lanes|=n,Ms|=n)}function Vr(e,n){if(!_e)switch(e.tailMode){case"hidden":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e.tail=null:r.sibling=null;break;case"collapsed":r=e.tail;for(var l=null;r!==null;)r.alternate!==null&&(l=r),r=r.sibling;l===null?n||e.tail===null?e.tail=null:e.tail.sibling=null:l.sibling=null}}function Me(e){var n=e.alternate!==null&&e.alternate.child===e.child,r=0,l=0;if(n)for(var u=e.child;u!==null;)r|=u.lanes|u.childLanes,l|=u.subtreeFlags&65011712,l|=u.flags&65011712,u.return=e,u=u.sibling;else for(u=e.child;u!==null;)r|=u.lanes|u.childLanes,l|=u.subtreeFlags,l|=u.flags,u.return=e,u=u.sibling;return e.subtreeFlags|=l,e.childLanes=r,n}function Q0(e,n,r){var l=n.pendingProps;switch(qu(n),n.tag){case 31:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Me(n),null;case 1:return Me(n),null;case 3:return r=n.stateNode,l=null,e!==null&&(l=e.memoizedState.cache),n.memoizedState.cache!==l&&(n.flags|=2048),mn(Fe),zn(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(Ar(n)?Sn(n):e===null||e.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,o_())),Me(n),null;case 26:return r=n.memoizedState,e===null?(Sn(n),r!==null?(Me(n),Dp(n,r)):(Me(n),n.flags&=-16777217)):r?r!==e.memoizedState?(Sn(n),Me(n),Dp(n,r)):(Me(n),n.flags&=-16777217):(e.memoizedProps!==l&&Sn(n),Me(n),n.flags&=-16777217),null;case 27:Qa(n),r=W.current;var u=n.type;if(e!==null&&n.stateNode!=null)e.memoizedProps!==l&&Sn(n);else{if(!l){if(n.stateNode===null)throw Error(a(166));return Me(n),null}e=V.current,Ar(n)?a_(n):(e=Dg(u,l,r),n.stateNode=e,Sn(n))}return Me(n),null;case 5:if(Qa(n),r=n.type,e!==null&&n.stateNode!=null)e.memoizedProps!==l&&Sn(n);else{if(!l){if(n.stateNode===null)throw Error(a(166));return Me(n),null}if(e=V.current,Ar(n))a_(n);else{switch(u=Kl(W.current),e){case 1:e=u.createElementNS("http://www.w3.org/2000/svg",r);break;case 2:e=u.createElementNS("http://www.w3.org/1998/Math/MathML",r);break;default:switch(r){case"svg":e=u.createElementNS("http://www.w3.org/2000/svg",r);break;case"math":e=u.createElementNS("http://www.w3.org/1998/Math/MathML",r);break;case"script":e=u.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild);break;case"select":e=typeof l.is=="string"?u.createElement("select",{is:l.is}):u.createElement("select"),l.multiple?e.multiple=!0:l.size&&(e.size=l.size);break;default:e=typeof l.is=="string"?u.createElement(r,{is:l.is}):u.createElement(r)}}e[ct]=n,e[vt]=l;e:for(u=n.child;u!==null;){if(u.tag===5||u.tag===6)e.appendChild(u.stateNode);else if(u.tag!==4&&u.tag!==27&&u.child!==null){u.child.return=u,u=u.child;continue}if(u===n)break e;for(;u.sibling===null;){if(u.return===null||u.return===n)break e;u=u.return}u.sibling.return=u.return,u=u.sibling}n.stateNode=e;e:switch(at(e,r,l),r){case"button":case"input":case"select":case"textarea":e=!!l.autoFocus;break e;case"img":e=!0;break e;default:e=!1}e&&Sn(n)}}return Me(n),n.flags&=-16777217,null;case 6:if(e&&n.stateNode!=null)e.memoizedProps!==l&&Sn(n);else{if(typeof l!="string"&&n.stateNode===null)throw Error(a(166));if(e=W.current,Ar(n)){if(e=n.stateNode,r=n.memoizedProps,l=null,u=dt,u!==null)switch(u.tag){case 27:case 5:l=u.memoizedProps}e[ct]=n,e=!!(e.nodeValue===r||l!==null&&l.suppressHydrationWarning===!0||bg(e.nodeValue,r)),e||Ui(n)}else e=Kl(e).createTextNode(l),e[ct]=n,n.stateNode=e}return Me(n),null;case 13:if(l=n.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(u=Ar(n),l!==null&&l.dehydrated!==null){if(e===null){if(!u)throw Error(a(318));if(u=n.memoizedState,u=u!==null?u.dehydrated:null,!u)throw Error(a(317));u[ct]=n}else Rr(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;Me(n),u=!1}else u=o_(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=u),u=!0;if(!u)return n.flags&256?(yn(n),n):(yn(n),null)}if(yn(n),(n.flags&128)!==0)return n.lanes=r,n;if(r=l!==null,e=e!==null&&e.memoizedState!==null,r){l=n.child,u=null,l.alternate!==null&&l.alternate.memoizedState!==null&&l.alternate.memoizedState.cachePool!==null&&(u=l.alternate.memoizedState.cachePool.pool);var f=null;l.memoizedState!==null&&l.memoizedState.cachePool!==null&&(f=l.memoizedState.cachePool.pool),f!==u&&(l.flags|=2048)}return r!==e&&r&&(n.child.flags|=8192),Ul(n,n.updateQueue),Me(n),null;case 4:return zn(),e===null&&$c(n.stateNode.containerInfo),Me(n),null;case 10:return mn(n.type),Me(n),null;case 19:if(P(Ke),u=n.memoizedState,u===null)return Me(n),null;if(l=(n.flags&128)!==0,f=u.rendering,f===null)if(l)Vr(u,!1);else{if(ze!==0||e!==null&&(e.flags&128)!==0)for(e=n.child;e!==null;){if(f=Dl(e),f!==null){for(n.flags|=128,Vr(u,!1),e=f.updateQueue,n.updateQueue=e,Ul(n,e),n.subtreeFlags=0,e=r,r=n.child;r!==null;)s_(r,e),r=r.sibling;return z(Ke,Ke.current&1|2),n.child}e=e.sibling}u.tail!==null&&tn()>Hl&&(n.flags|=128,l=!0,Vr(u,!1),n.lanes=4194304)}else{if(!l)if(e=Dl(f),e!==null){if(n.flags|=128,l=!0,e=e.updateQueue,n.updateQueue=e,Ul(n,e),Vr(u,!0),u.tail===null&&u.tailMode==="hidden"&&!f.alternate&&!_e)return Me(n),null}else 2*tn()-u.renderingStartTime>Hl&&r!==536870912&&(n.flags|=128,l=!0,Vr(u,!1),n.lanes=4194304);u.isBackwards?(f.sibling=n.child,n.child=f):(e=u.last,e!==null?e.sibling=f:n.child=f,u.last=f)}return u.tail!==null?(n=u.tail,u.rendering=n,u.tail=n.sibling,u.renderingStartTime=tn(),n.sibling=null,e=Ke.current,z(Ke,l?e&1|2:e&1),n):(Me(n),null);case 22:case 23:return yn(n),tc(),l=n.memoizedState!==null,e!==null?e.memoizedState!==null!==l&&(n.flags|=8192):l&&(n.flags|=8192),l?(r&536870912)!==0&&(n.flags&128)===0&&(Me(n),n.subtreeFlags&6&&(n.flags|=8192)):Me(n),r=n.updateQueue,r!==null&&Ul(n,r.retryQueue),r=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(r=e.memoizedState.cachePool.pool),l=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(l=n.memoizedState.cachePool.pool),l!==r&&(n.flags|=2048),e!==null&&P(Hi),null;case 24:return r=null,e!==null&&(r=e.memoizedState.cache),n.memoizedState.cache!==r&&(n.flags|=2048),mn(Fe),Me(n),null;case 25:return null;case 30:return null}throw Error(a(156,n.tag))}function F0(e,n){switch(qu(n),n.tag){case 1:return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 3:return mn(Fe),zn(),e=n.flags,(e&65536)!==0&&(e&128)===0?(n.flags=e&-65537|128,n):null;case 26:case 27:case 5:return Qa(n),null;case 13:if(yn(n),e=n.memoizedState,e!==null&&e.dehydrated!==null){if(n.alternate===null)throw Error(a(340));Rr()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 19:return P(Ke),null;case 4:return zn(),null;case 10:return mn(n.type),null;case 22:case 23:return yn(n),tc(),e!==null&&P(Hi),e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 24:return mn(Fe),null;case 25:return null;default:return null}}function Ip(e,n){switch(qu(n),n.tag){case 3:mn(Fe),zn();break;case 26:case 27:case 5:Qa(n);break;case 4:zn();break;case 13:yn(n);break;case 19:P(Ke);break;case 10:mn(n.type);break;case 22:case 23:yn(n),tc(),e!==null&&P(Hi);break;case 24:mn(Fe)}}function Gr(e,n){try{var r=n.updateQueue,l=r!==null?r.lastEffect:null;if(l!==null){var u=l.next;r=u;do{if((r.tag&e)===e){l=void 0;var f=r.create,_=r.inst;l=f(),_.destroy=l}r=r.next}while(r!==u)}}catch(m){Ce(n,n.return,m)}}function Kn(e,n,r){try{var l=n.updateQueue,u=l!==null?l.lastEffect:null;if(u!==null){var f=u.next;l=f;do{if((l.tag&e)===e){var _=l.inst,m=_.destroy;if(m!==void 0){_.destroy=void 0,u=n;var y=r,R=m;try{R()}catch(O){Ce(u,y,O)}}}l=l.next}while(l!==f)}}catch(O){Ce(n,n.return,O)}}function Mp(e){var n=e.updateQueue;if(n!==null){var r=e.stateNode;try{y_(n,r)}catch(l){Ce(e,e.return,l)}}}function kp(e,n,r){r.props=Bi(e.type,e.memoizedProps),r.state=e.memoizedState;try{r.componentWillUnmount()}catch(l){Ce(e,n,l)}}function jr(e,n){try{var r=e.ref;if(r!==null){switch(e.tag){case 26:case 27:case 5:var l=e.stateNode;break;case 30:l=e.stateNode;break;default:l=e.stateNode}typeof r=="function"?e.refCleanup=r(l):r.current=l}}catch(u){Ce(e,n,u)}}function rn(e,n){var r=e.ref,l=e.refCleanup;if(r!==null)if(typeof l=="function")try{l()}catch(u){Ce(e,n,u)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof r=="function")try{r(null)}catch(u){Ce(e,n,u)}else r.current=null}function xp(e){var n=e.type,r=e.memoizedProps,l=e.stateNode;try{e:switch(n){case"button":case"input":case"select":case"textarea":r.autoFocus&&l.focus();break e;case"img":r.src?l.src=r.src:r.srcSet&&(l.srcset=r.srcSet)}}catch(u){Ce(e,e.return,u)}}function Oc(e,n,r){try{var l=e.stateNode;_S(l,e.type,r,n),l[vt]=n}catch(u){Ce(e,e.return,u)}}function Up(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&ni(e.type)||e.tag===4}function Dc(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Up(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&ni(e.type)||e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Ic(e,n,r){var l=e.tag;if(l===5||l===6)e=e.stateNode,n?(r.nodeType===9?r.body:r.nodeName==="HTML"?r.ownerDocument.body:r).insertBefore(e,n):(n=r.nodeType===9?r.body:r.nodeName==="HTML"?r.ownerDocument.body:r,n.appendChild(e),r=r._reactRootContainer,r!=null||n.onclick!==null||(n.onclick=Fl));else if(l!==4&&(l===27&&ni(e.type)&&(r=e.stateNode,n=null),e=e.child,e!==null))for(Ic(e,n,r),e=e.sibling;e!==null;)Ic(e,n,r),e=e.sibling}function Ll(e,n,r){var l=e.tag;if(l===5||l===6)e=e.stateNode,n?r.insertBefore(e,n):r.appendChild(e);else if(l!==4&&(l===27&&ni(e.type)&&(r=e.stateNode),e=e.child,e!==null))for(Ll(e,n,r),e=e.sibling;e!==null;)Ll(e,n,r),e=e.sibling}function Lp(e){var n=e.stateNode,r=e.memoizedProps;try{for(var l=e.type,u=n.attributes;u.length;)n.removeAttributeNode(u[0]);at(n,l,r),n[ct]=e,n[vt]=r}catch(f){Ce(e,e.return,f)}}var Tn=!1,qe=!1,Mc=!1,zp=typeof WeakSet=="function"?WeakSet:Set,et=null;function K0(e,n){if(e=e.containerInfo,nf=eo,e=Kd(e),Du(e)){if("selectionStart"in e)var r={start:e.selectionStart,end:e.selectionEnd};else e:{r=(r=e.ownerDocument)&&r.defaultView||window;var l=r.getSelection&&r.getSelection();if(l&&l.rangeCount!==0){r=l.anchorNode;var u=l.anchorOffset,f=l.focusNode;l=l.focusOffset;try{r.nodeType,f.nodeType}catch{r=null;break e}var _=0,m=-1,y=-1,R=0,O=0,M=e,w=null;t:for(;;){for(var N;M!==r||u!==0&&M.nodeType!==3||(m=_+u),M!==f||l!==0&&M.nodeType!==3||(y=_+l),M.nodeType===3&&(_+=M.nodeValue.length),(N=M.firstChild)!==null;)w=M,M=N;for(;;){if(M===e)break t;if(w===r&&++R===u&&(m=_),w===f&&++O===l&&(y=_),(N=M.nextSibling)!==null)break;M=w,w=M.parentNode}M=N}r=m===-1||y===-1?null:{start:m,end:y}}else r=null}r=r||{start:0,end:0}}else r=null;for(sf={focusedElem:e,selectionRange:r},eo=!1,et=n;et!==null;)if(n=et,e=n.child,(n.subtreeFlags&1024)!==0&&e!==null)e.return=n,et=e;else for(;et!==null;){switch(n=et,f=n.alternate,e=n.flags,n.tag){case 0:break;case 11:case 15:break;case 1:if((e&1024)!==0&&f!==null){e=void 0,r=n,u=f.memoizedProps,f=f.memoizedState,l=r.stateNode;try{var K=Bi(r.type,u,r.elementType===r.type);e=l.getSnapshotBeforeUpdate(K,f),l.__reactInternalSnapshotBeforeUpdate=e}catch(G){Ce(r,r.return,G)}}break;case 3:if((e&1024)!==0){if(e=n.stateNode.containerInfo,r=e.nodeType,r===9)lf(e);else if(r===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":lf(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(a(163))}if(e=n.sibling,e!==null){e.return=n.return,et=e;break}et=n.return}}function Hp(e,n,r){var l=r.flags;switch(r.tag){case 0:case 11:case 15:Xn(e,r),l&4&&Gr(5,r);break;case 1:if(Xn(e,r),l&4)if(e=r.stateNode,n===null)try{e.componentDidMount()}catch(_){Ce(r,r.return,_)}else{var u=Bi(r.type,n.memoizedProps);n=n.memoizedState;try{e.componentDidUpdate(u,n,e.__reactInternalSnapshotBeforeUpdate)}catch(_){Ce(r,r.return,_)}}l&64&&Mp(r),l&512&&jr(r,r.return);break;case 3:if(Xn(e,r),l&64&&(e=r.updateQueue,e!==null)){if(n=null,r.child!==null)switch(r.child.tag){case 27:case 5:n=r.child.stateNode;break;case 1:n=r.child.stateNode}try{y_(e,n)}catch(_){Ce(r,r.return,_)}}break;case 27:n===null&&l&4&&Lp(r);case 26:case 5:Xn(e,r),n===null&&l&4&&xp(r),l&512&&jr(r,r.return);break;case 12:Xn(e,r);break;case 13:Xn(e,r),l&4&&qp(e,r),l&64&&(e=r.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(r=iS.bind(null,r),SS(e,r))));break;case 22:if(l=r.memoizedState!==null||Tn,!l){n=n!==null&&n.memoizedState!==null||qe,u=Tn;var f=qe;Tn=l,(qe=n)&&!f?Wn(e,r,(r.subtreeFlags&8772)!==0):Xn(e,r),Tn=u,qe=f}break;case 30:break;default:Xn(e,r)}}function Pp(e){var n=e.alternate;n!==null&&(e.alternate=null,Pp(n)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(n=e.stateNode,n!==null&&fu(n)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var Ie=null,St=!1;function bn(e,n,r){for(r=r.child;r!==null;)Bp(e,n,r),r=r.sibling}function Bp(e,n,r){if(At&&typeof At.onCommitFiberUnmount=="function")try{At.onCommitFiberUnmount(fr,r)}catch{}switch(r.tag){case 26:qe||rn(r,n),bn(e,n,r),r.memoizedState?r.memoizedState.count--:r.stateNode&&(r=r.stateNode,r.parentNode.removeChild(r));break;case 27:qe||rn(r,n);var l=Ie,u=St;ni(r.type)&&(Ie=r.stateNode,St=!1),bn(e,n,r),$r(r.stateNode),Ie=l,St=u;break;case 5:qe||rn(r,n);case 6:if(l=Ie,u=St,Ie=null,bn(e,n,r),Ie=l,St=u,Ie!==null)if(St)try{(Ie.nodeType===9?Ie.body:Ie.nodeName==="HTML"?Ie.ownerDocument.body:Ie).removeChild(r.stateNode)}catch(f){Ce(r,n,f)}else try{Ie.removeChild(r.stateNode)}catch(f){Ce(r,n,f)}break;case 18:Ie!==null&&(St?(e=Ie,Ng(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,r.stateNode),la(e)):Ng(Ie,r.stateNode));break;case 4:l=Ie,u=St,Ie=r.stateNode.containerInfo,St=!0,bn(e,n,r),Ie=l,St=u;break;case 0:case 11:case 14:case 15:qe||Kn(2,r,n),qe||Kn(4,r,n),bn(e,n,r);break;case 1:qe||(rn(r,n),l=r.stateNode,typeof l.componentWillUnmount=="function"&&kp(r,n,l)),bn(e,n,r);break;case 21:bn(e,n,r);break;case 22:qe=(l=qe)||r.memoizedState!==null,bn(e,n,r),qe=l;break;default:bn(e,n,r)}}function qp(e,n){if(n.memoizedState===null&&(e=n.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{la(e)}catch(r){Ce(n,n.return,r)}}function X0(e){switch(e.tag){case 13:case 19:var n=e.stateNode;return n===null&&(n=e.stateNode=new zp),n;case 22:return e=e.stateNode,n=e._retryCache,n===null&&(n=e._retryCache=new zp),n;default:throw Error(a(435,e.tag))}}function kc(e,n){var r=X0(e);n.forEach(function(l){var u=sS.bind(null,e,l);r.has(l)||(r.add(l),l.then(u,u))})}function Ot(e,n){var r=n.deletions;if(r!==null)for(var l=0;l<r.length;l++){var u=r[l],f=e,_=n,m=_;e:for(;m!==null;){switch(m.tag){case 27:if(ni(m.type)){Ie=m.stateNode,St=!1;break e}break;case 5:Ie=m.stateNode,St=!1;break e;case 3:case 4:Ie=m.stateNode.containerInfo,St=!0;break e}m=m.return}if(Ie===null)throw Error(a(160));Bp(f,_,u),Ie=null,St=!1,f=u.alternate,f!==null&&(f.return=null),u.return=null}if(n.subtreeFlags&13878)for(n=n.child;n!==null;)Vp(n,e),n=n.sibling}var Kt=null;function Vp(e,n){var r=e.alternate,l=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:Ot(n,e),Dt(e),l&4&&(Kn(3,e,e.return),Gr(3,e),Kn(5,e,e.return));break;case 1:Ot(n,e),Dt(e),l&512&&(qe||r===null||rn(r,r.return)),l&64&&Tn&&(e=e.updateQueue,e!==null&&(l=e.callbacks,l!==null&&(r=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=r===null?l:r.concat(l))));break;case 26:var u=Kt;if(Ot(n,e),Dt(e),l&512&&(qe||r===null||rn(r,r.return)),l&4){var f=r!==null?r.memoizedState:null;if(l=e.memoizedState,r===null)if(l===null)if(e.stateNode===null){e:{l=e.type,r=e.memoizedProps,u=u.ownerDocument||u;t:switch(l){case"title":f=u.getElementsByTagName("title")[0],(!f||f[_r]||f[ct]||f.namespaceURI==="http://www.w3.org/2000/svg"||f.hasAttribute("itemprop"))&&(f=u.createElement(l),u.head.insertBefore(f,u.querySelector("head > title"))),at(f,l,r),f[ct]=e,Je(f),l=f;break e;case"link":var _=Lg("link","href",u).get(l+(r.href||""));if(_){for(var m=0;m<_.length;m++)if(f=_[m],f.getAttribute("href")===(r.href==null||r.href===""?null:r.href)&&f.getAttribute("rel")===(r.rel==null?null:r.rel)&&f.getAttribute("title")===(r.title==null?null:r.title)&&f.getAttribute("crossorigin")===(r.crossOrigin==null?null:r.crossOrigin)){_.splice(m,1);break t}}f=u.createElement(l),at(f,l,r),u.head.appendChild(f);break;case"meta":if(_=Lg("meta","content",u).get(l+(r.content||""))){for(m=0;m<_.length;m++)if(f=_[m],f.getAttribute("content")===(r.content==null?null:""+r.content)&&f.getAttribute("name")===(r.name==null?null:r.name)&&f.getAttribute("property")===(r.property==null?null:r.property)&&f.getAttribute("http-equiv")===(r.httpEquiv==null?null:r.httpEquiv)&&f.getAttribute("charset")===(r.charSet==null?null:r.charSet)){_.splice(m,1);break t}}f=u.createElement(l),at(f,l,r),u.head.appendChild(f);break;default:throw Error(a(468,l))}f[ct]=e,Je(f),l=f}e.stateNode=l}else zg(u,e.type,e.stateNode);else e.stateNode=Ug(u,l,e.memoizedProps);else f!==l?(f===null?r.stateNode!==null&&(r=r.stateNode,r.parentNode.removeChild(r)):f.count--,l===null?zg(u,e.type,e.stateNode):Ug(u,l,e.memoizedProps)):l===null&&e.stateNode!==null&&Oc(e,e.memoizedProps,r.memoizedProps)}break;case 27:Ot(n,e),Dt(e),l&512&&(qe||r===null||rn(r,r.return)),r!==null&&l&4&&Oc(e,e.memoizedProps,r.memoizedProps);break;case 5:if(Ot(n,e),Dt(e),l&512&&(qe||r===null||rn(r,r.return)),e.flags&32){u=e.stateNode;try{cs(u,"")}catch(N){Ce(e,e.return,N)}}l&4&&e.stateNode!=null&&(u=e.memoizedProps,Oc(e,u,r!==null?r.memoizedProps:u)),l&1024&&(Mc=!0);break;case 6:if(Ot(n,e),Dt(e),l&4){if(e.stateNode===null)throw Error(a(162));l=e.memoizedProps,r=e.stateNode;try{r.nodeValue=l}catch(N){Ce(e,e.return,N)}}break;case 3:if(Zl=null,u=Kt,Kt=Xl(n.containerInfo),Ot(n,e),Kt=u,Dt(e),l&4&&r!==null&&r.memoizedState.isDehydrated)try{la(n.containerInfo)}catch(N){Ce(e,e.return,N)}Mc&&(Mc=!1,Gp(e));break;case 4:l=Kt,Kt=Xl(e.stateNode.containerInfo),Ot(n,e),Dt(e),Kt=l;break;case 12:Ot(n,e),Dt(e);break;case 13:Ot(n,e),Dt(e),e.child.flags&8192&&e.memoizedState!==null!=(r!==null&&r.memoizedState!==null)&&(Pc=tn()),l&4&&(l=e.updateQueue,l!==null&&(e.updateQueue=null,kc(e,l)));break;case 22:u=e.memoizedState!==null;var y=r!==null&&r.memoizedState!==null,R=Tn,O=qe;if(Tn=R||u,qe=O||y,Ot(n,e),qe=O,Tn=R,Dt(e),l&8192)e:for(n=e.stateNode,n._visibility=u?n._visibility&-2:n._visibility|1,u&&(r===null||y||Tn||qe||qi(e)),r=null,n=e;;){if(n.tag===5||n.tag===26){if(r===null){y=r=n;try{if(f=y.stateNode,u)_=f.style,typeof _.setProperty=="function"?_.setProperty("display","none","important"):_.display="none";else{m=y.stateNode;var M=y.memoizedProps.style,w=M!=null&&M.hasOwnProperty("display")?M.display:null;m.style.display=w==null||typeof w=="boolean"?"":(""+w).trim()}}catch(N){Ce(y,y.return,N)}}}else if(n.tag===6){if(r===null){y=n;try{y.stateNode.nodeValue=u?"":y.memoizedProps}catch(N){Ce(y,y.return,N)}}}else if((n.tag!==22&&n.tag!==23||n.memoizedState===null||n===e)&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break e;for(;n.sibling===null;){if(n.return===null||n.return===e)break e;r===n&&(r=null),n=n.return}r===n&&(r=null),n.sibling.return=n.return,n=n.sibling}l&4&&(l=e.updateQueue,l!==null&&(r=l.retryQueue,r!==null&&(l.retryQueue=null,kc(e,r))));break;case 19:Ot(n,e),Dt(e),l&4&&(l=e.updateQueue,l!==null&&(e.updateQueue=null,kc(e,l)));break;case 30:break;case 21:break;default:Ot(n,e),Dt(e)}}function Dt(e){var n=e.flags;if(n&2){try{for(var r,l=e.return;l!==null;){if(Up(l)){r=l;break}l=l.return}if(r==null)throw Error(a(160));switch(r.tag){case 27:var u=r.stateNode,f=Dc(e);Ll(e,f,u);break;case 5:var _=r.stateNode;r.flags&32&&(cs(_,""),r.flags&=-33);var m=Dc(e);Ll(e,m,_);break;case 3:case 4:var y=r.stateNode.containerInfo,R=Dc(e);Ic(e,R,y);break;default:throw Error(a(161))}}catch(O){Ce(e,e.return,O)}e.flags&=-3}n&4096&&(e.flags&=-4097)}function Gp(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var n=e;Gp(n),n.tag===5&&n.flags&1024&&n.stateNode.reset(),e=e.sibling}}function Xn(e,n){if(n.subtreeFlags&8772)for(n=n.child;n!==null;)Hp(e,n.alternate,n),n=n.sibling}function qi(e){for(e=e.child;e!==null;){var n=e;switch(n.tag){case 0:case 11:case 14:case 15:Kn(4,n,n.return),qi(n);break;case 1:rn(n,n.return);var r=n.stateNode;typeof r.componentWillUnmount=="function"&&kp(n,n.return,r),qi(n);break;case 27:$r(n.stateNode);case 26:case 5:rn(n,n.return),qi(n);break;case 22:n.memoizedState===null&&qi(n);break;case 30:qi(n);break;default:qi(n)}e=e.sibling}}function Wn(e,n,r){for(r=r&&(n.subtreeFlags&8772)!==0,n=n.child;n!==null;){var l=n.alternate,u=e,f=n,_=f.flags;switch(f.tag){case 0:case 11:case 15:Wn(u,f,r),Gr(4,f);break;case 1:if(Wn(u,f,r),l=f,u=l.stateNode,typeof u.componentDidMount=="function")try{u.componentDidMount()}catch(R){Ce(l,l.return,R)}if(l=f,u=l.updateQueue,u!==null){var m=l.stateNode;try{var y=u.shared.hiddenCallbacks;if(y!==null)for(u.shared.hiddenCallbacks=null,u=0;u<y.length;u++)v_(y[u],m)}catch(R){Ce(l,l.return,R)}}r&&_&64&&Mp(f),jr(f,f.return);break;case 27:Lp(f);case 26:case 5:Wn(u,f,r),r&&l===null&&_&4&&xp(f),jr(f,f.return);break;case 12:Wn(u,f,r);break;case 13:Wn(u,f,r),r&&_&4&&qp(u,f);break;case 22:f.memoizedState===null&&Wn(u,f,r),jr(f,f.return);break;case 30:break;default:Wn(u,f,r)}n=n.sibling}}function xc(e,n){var r=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(r=e.memoizedState.cachePool.pool),e=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(e=n.memoizedState.cachePool.pool),e!==r&&(e!=null&&e.refCount++,r!=null&&Or(r))}function Uc(e,n){e=null,n.alternate!==null&&(e=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==e&&(n.refCount++,e!=null&&Or(e))}function an(e,n,r,l){if(n.subtreeFlags&10256)for(n=n.child;n!==null;)jp(e,n,r,l),n=n.sibling}function jp(e,n,r,l){var u=n.flags;switch(n.tag){case 0:case 11:case 15:an(e,n,r,l),u&2048&&Gr(9,n);break;case 1:an(e,n,r,l);break;case 3:an(e,n,r,l),u&2048&&(e=null,n.alternate!==null&&(e=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==e&&(n.refCount++,e!=null&&Or(e)));break;case 12:if(u&2048){an(e,n,r,l),e=n.stateNode;try{var f=n.memoizedProps,_=f.id,m=f.onPostCommit;typeof m=="function"&&m(_,n.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(y){Ce(n,n.return,y)}}else an(e,n,r,l);break;case 13:an(e,n,r,l);break;case 23:break;case 22:f=n.stateNode,_=n.alternate,n.memoizedState!==null?f._visibility&2?an(e,n,r,l):Yr(e,n):f._visibility&2?an(e,n,r,l):(f._visibility|=2,Os(e,n,r,l,(n.subtreeFlags&10256)!==0)),u&2048&&xc(_,n);break;case 24:an(e,n,r,l),u&2048&&Uc(n.alternate,n);break;default:an(e,n,r,l)}}function Os(e,n,r,l,u){for(u=u&&(n.subtreeFlags&10256)!==0,n=n.child;n!==null;){var f=e,_=n,m=r,y=l,R=_.flags;switch(_.tag){case 0:case 11:case 15:Os(f,_,m,y,u),Gr(8,_);break;case 23:break;case 22:var O=_.stateNode;_.memoizedState!==null?O._visibility&2?Os(f,_,m,y,u):Yr(f,_):(O._visibility|=2,Os(f,_,m,y,u)),u&&R&2048&&xc(_.alternate,_);break;case 24:Os(f,_,m,y,u),u&&R&2048&&Uc(_.alternate,_);break;default:Os(f,_,m,y,u)}n=n.sibling}}function Yr(e,n){if(n.subtreeFlags&10256)for(n=n.child;n!==null;){var r=e,l=n,u=l.flags;switch(l.tag){case 22:Yr(r,l),u&2048&&xc(l.alternate,l);break;case 24:Yr(r,l),u&2048&&Uc(l.alternate,l);break;default:Yr(r,l)}n=n.sibling}}var Qr=8192;function Ds(e){if(e.subtreeFlags&Qr)for(e=e.child;e!==null;)Yp(e),e=e.sibling}function Yp(e){switch(e.tag){case 26:Ds(e),e.flags&Qr&&e.memoizedState!==null&&xS(Kt,e.memoizedState,e.memoizedProps);break;case 5:Ds(e);break;case 3:case 4:var n=Kt;Kt=Xl(e.stateNode.containerInfo),Ds(e),Kt=n;break;case 22:e.memoizedState===null&&(n=e.alternate,n!==null&&n.memoizedState!==null?(n=Qr,Qr=16777216,Ds(e),Qr=n):Ds(e));break;default:Ds(e)}}function Qp(e){var n=e.alternate;if(n!==null&&(e=n.child,e!==null)){n.child=null;do n=e.sibling,e.sibling=null,e=n;while(e!==null)}}function Fr(e){var n=e.deletions;if((e.flags&16)!==0){if(n!==null)for(var r=0;r<n.length;r++){var l=n[r];et=l,Kp(l,e)}Qp(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)Fp(e),e=e.sibling}function Fp(e){switch(e.tag){case 0:case 11:case 15:Fr(e),e.flags&2048&&Kn(9,e,e.return);break;case 3:Fr(e);break;case 12:Fr(e);break;case 22:var n=e.stateNode;e.memoizedState!==null&&n._visibility&2&&(e.return===null||e.return.tag!==13)?(n._visibility&=-3,zl(e)):Fr(e);break;default:Fr(e)}}function zl(e){var n=e.deletions;if((e.flags&16)!==0){if(n!==null)for(var r=0;r<n.length;r++){var l=n[r];et=l,Kp(l,e)}Qp(e)}for(e=e.child;e!==null;){switch(n=e,n.tag){case 0:case 11:case 15:Kn(8,n,n.return),zl(n);break;case 22:r=n.stateNode,r._visibility&2&&(r._visibility&=-3,zl(n));break;default:zl(n)}e=e.sibling}}function Kp(e,n){for(;et!==null;){var r=et;switch(r.tag){case 0:case 11:case 15:Kn(8,r,n);break;case 23:case 22:if(r.memoizedState!==null&&r.memoizedState.cachePool!==null){var l=r.memoizedState.cachePool.pool;l!=null&&l.refCount++}break;case 24:Or(r.memoizedState.cache)}if(l=r.child,l!==null)l.return=r,et=l;else e:for(r=e;et!==null;){l=et;var u=l.sibling,f=l.return;if(Pp(l),l===r){et=null;break e}if(u!==null){u.return=f,et=u;break e}et=f}}}var W0={getCacheForType:function(e){var n=ft(Fe),r=n.data.get(e);return r===void 0&&(r=e(),n.data.set(e,r)),r}},Z0=typeof WeakMap=="function"?WeakMap:Map,pe=0,we=null,le=null,ce=0,ge=0,It=null,Zn=!1,Is=!1,Lc=!1,Cn=0,ze=0,Jn=0,Vi=0,zc=0,qt=0,Ms=0,Kr=null,Tt=null,Hc=!1,Pc=0,Hl=1/0,Pl=null,$n=null,rt=0,ei=null,ks=null,xs=0,Bc=0,qc=null,Xp=null,Xr=0,Vc=null;function Mt(){if((pe&2)!==0&&ce!==0)return ce&-ce;if(D.T!==null){var e=Ss;return e!==0?e:Xc()}return fd()}function Wp(){qt===0&&(qt=(ce&536870912)===0||_e?ld():536870912);var e=Bt.current;return e!==null&&(e.flags|=32),qt}function kt(e,n,r){(e===we&&(ge===2||ge===9)||e.cancelPendingCommit!==null)&&(Us(e,0),ti(e,ce,qt,!1)),dr(e,r),((pe&2)===0||e!==we)&&(e===we&&((pe&2)===0&&(Vi|=r),ze===4&&ti(e,ce,qt,!1)),ln(e))}function Zp(e,n,r){if((pe&6)!==0)throw Error(a(327));var l=!r&&(n&124)===0&&(n&e.expiredLanes)===0||hr(e,n),u=l?eS(e,n):Yc(e,n,!0),f=l;do{if(u===0){Is&&!l&&ti(e,n,0,!1);break}else{if(r=e.current.alternate,f&&!J0(r)){u=Yc(e,n,!1),f=!1;continue}if(u===2){if(f=n,e.errorRecoveryDisabledLanes&f)var _=0;else _=e.pendingLanes&-536870913,_=_!==0?_:_&536870912?536870912:0;if(_!==0){n=_;e:{var m=e;u=Kr;var y=m.current.memoizedState.isDehydrated;if(y&&(Us(m,_).flags|=256),_=Yc(m,_,!1),_!==2){if(Lc&&!y){m.errorRecoveryDisabledLanes|=f,Vi|=f,u=4;break e}f=Tt,Tt=u,f!==null&&(Tt===null?Tt=f:Tt.push.apply(Tt,f))}u=_}if(f=!1,u!==2)continue}}if(u===1){Us(e,0),ti(e,n,0,!0);break}e:{switch(l=e,f=u,f){case 0:case 1:throw Error(a(345));case 4:if((n&4194048)!==n)break;case 6:ti(l,n,qt,!Zn);break e;case 2:Tt=null;break;case 3:case 5:break;default:throw Error(a(329))}if((n&62914560)===n&&(u=Pc+300-tn(),10<u)){if(ti(l,n,qt,!Zn),Wa(l,0,!0)!==0)break e;l.timeoutHandle=Rg(Jp.bind(null,l,r,Tt,Pl,Hc,n,qt,Vi,Ms,Zn,f,2,-0,0),u);break e}Jp(l,r,Tt,Pl,Hc,n,qt,Vi,Ms,Zn,f,0,-0,0)}}break}while(!0);ln(e)}function Jp(e,n,r,l,u,f,_,m,y,R,O,M,w,N){if(e.timeoutHandle=-1,M=n.subtreeFlags,(M&8192||(M&16785408)===16785408)&&(na={stylesheets:null,count:0,unsuspend:kS},Yp(n),M=US(),M!==null)){e.cancelPendingCommit=M(rg.bind(null,e,n,f,r,l,u,_,m,y,O,1,w,N)),ti(e,f,_,!R);return}rg(e,n,f,r,l,u,_,m,y)}function J0(e){for(var n=e;;){var r=n.tag;if((r===0||r===11||r===15)&&n.flags&16384&&(r=n.updateQueue,r!==null&&(r=r.stores,r!==null)))for(var l=0;l<r.length;l++){var u=r[l],f=u.getSnapshot;u=u.value;try{if(!wt(f(),u))return!1}catch{return!1}}if(r=n.child,n.subtreeFlags&16384&&r!==null)r.return=n,n=r;else{if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function ti(e,n,r,l){n&=~zc,n&=~Vi,e.suspendedLanes|=n,e.pingedLanes&=~n,l&&(e.warmLanes|=n),l=e.expirationTimes;for(var u=n;0<u;){var f=31-Rt(u),_=1<<f;l[f]=-1,u&=~_}r!==0&&ud(e,r,n)}function Bl(){return(pe&6)===0?(Wr(0),!1):!0}function Gc(){if(le!==null){if(ge===0)var e=le.return;else e=le,gn=Li=null,ac(e),ws=null,Br=0,e=le;for(;e!==null;)Ip(e.alternate,e),e=e.return;le=null}}function Us(e,n){var r=e.timeoutHandle;r!==-1&&(e.timeoutHandle=-1,gS(r)),r=e.cancelPendingCommit,r!==null&&(e.cancelPendingCommit=null,r()),Gc(),we=e,le=r=dn(e.current,null),ce=n,ge=0,It=null,Zn=!1,Is=hr(e,n),Lc=!1,Ms=qt=zc=Vi=Jn=ze=0,Tt=Kr=null,Hc=!1,(n&8)!==0&&(n|=n&32);var l=e.entangledLanes;if(l!==0)for(e=e.entanglements,l&=n;0<l;){var u=31-Rt(l),f=1<<u;n|=e[u],l&=~f}return Cn=n,ol(),r}function $p(e,n){$=null,D.H=wl,n===Ir||n===ml?(n=g_(),ge=3):n===d_?(n=g_(),ge=4):ge=n===mp?8:n!==null&&typeof n=="object"&&typeof n.then=="function"?6:1,It=n,le===null&&(ze=1,Ml(e,Lt(n,e.current)))}function eg(){var e=D.H;return D.H=wl,e===null?wl:e}function tg(){var e=D.A;return D.A=W0,e}function jc(){ze=4,Zn||(ce&4194048)!==ce&&Bt.current!==null||(Is=!0),(Jn&134217727)===0&&(Vi&134217727)===0||we===null||ti(we,ce,qt,!1)}function Yc(e,n,r){var l=pe;pe|=2;var u=eg(),f=tg();(we!==e||ce!==n)&&(Pl=null,Us(e,n)),n=!1;var _=ze;e:do try{if(ge!==0&&le!==null){var m=le,y=It;switch(ge){case 8:Gc(),_=6;break e;case 3:case 2:case 9:case 6:Bt.current===null&&(n=!0);var R=ge;if(ge=0,It=null,Ls(e,m,y,R),r&&Is){_=0;break e}break;default:R=ge,ge=0,It=null,Ls(e,m,y,R)}}$0(),_=ze;break}catch(O){$p(e,O)}while(!0);return n&&e.shellSuspendCounter++,gn=Li=null,pe=l,D.H=u,D.A=f,le===null&&(we=null,ce=0,ol()),_}function $0(){for(;le!==null;)ng(le)}function eS(e,n){var r=pe;pe|=2;var l=eg(),u=tg();we!==e||ce!==n?(Pl=null,Hl=tn()+500,Us(e,n)):Is=hr(e,n);e:do try{if(ge!==0&&le!==null){n=le;var f=It;t:switch(ge){case 1:ge=0,It=null,Ls(e,n,f,1);break;case 2:case 9:if(__(f)){ge=0,It=null,ig(n);break}n=function(){ge!==2&&ge!==9||we!==e||(ge=7),ln(e)},f.then(n,n);break e;case 3:ge=7;break e;case 4:ge=5;break e;case 7:__(f)?(ge=0,It=null,ig(n)):(ge=0,It=null,Ls(e,n,f,7));break;case 5:var _=null;switch(le.tag){case 26:_=le.memoizedState;case 5:case 27:var m=le;if(!_||Hg(_)){ge=0,It=null;var y=m.sibling;if(y!==null)le=y;else{var R=m.return;R!==null?(le=R,ql(R)):le=null}break t}}ge=0,It=null,Ls(e,n,f,5);break;case 6:ge=0,It=null,Ls(e,n,f,6);break;case 8:Gc(),ze=6;break e;default:throw Error(a(462))}}tS();break}catch(O){$p(e,O)}while(!0);return gn=Li=null,D.H=l,D.A=u,pe=r,le!==null?0:(we=null,ce=0,ol(),ze)}function tS(){for(;le!==null&&!bE();)ng(le)}function ng(e){var n=Op(e.alternate,e,Cn);e.memoizedProps=e.pendingProps,n===null?ql(e):le=n}function ig(e){var n=e,r=n.alternate;switch(n.tag){case 15:case 0:n=bp(r,n,n.pendingProps,n.type,void 0,ce);break;case 11:n=bp(r,n,n.pendingProps,n.type.render,n.ref,ce);break;case 5:ac(n);default:Ip(r,n),n=le=s_(n,Cn),n=Op(r,n,Cn)}e.memoizedProps=e.pendingProps,n===null?ql(e):le=n}function Ls(e,n,r,l){gn=Li=null,ac(n),ws=null,Br=0;var u=n.return;try{if(j0(e,u,n,r,ce)){ze=1,Ml(e,Lt(r,e.current)),le=null;return}}catch(f){if(u!==null)throw le=u,f;ze=1,Ml(e,Lt(r,e.current)),le=null;return}n.flags&32768?(_e||l===1?e=!0:Is||(ce&536870912)!==0?e=!1:(Zn=e=!0,(l===2||l===9||l===3||l===6)&&(l=Bt.current,l!==null&&l.tag===13&&(l.flags|=16384))),sg(n,e)):ql(n)}function ql(e){var n=e;do{if((n.flags&32768)!==0){sg(n,Zn);return}e=n.return;var r=Q0(n.alternate,n,Cn);if(r!==null){le=r;return}if(n=n.sibling,n!==null){le=n;return}le=n=e}while(n!==null);ze===0&&(ze=5)}function sg(e,n){do{var r=F0(e.alternate,e);if(r!==null){r.flags&=32767,le=r;return}if(r=e.return,r!==null&&(r.flags|=32768,r.subtreeFlags=0,r.deletions=null),!n&&(e=e.sibling,e!==null)){le=e;return}le=e=r}while(e!==null);ze=6,le=null}function rg(e,n,r,l,u,f,_,m,y){e.cancelPendingCommit=null;do Vl();while(rt!==0);if((pe&6)!==0)throw Error(a(327));if(n!==null){if(n===e.current)throw Error(a(177));if(f=n.lanes|n.childLanes,f|=Uu,kE(e,r,f,_,m,y),e===we&&(le=we=null,ce=0),ks=n,ei=e,xs=r,Bc=f,qc=u,Xp=l,(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,rS(Fa,function(){return cg(),null})):(e.callbackNode=null,e.callbackPriority=0),l=(n.flags&13878)!==0,(n.subtreeFlags&13878)!==0||l){l=D.T,D.T=null,u=H.p,H.p=2,_=pe,pe|=4;try{K0(e,n,r)}finally{pe=_,H.p=u,D.T=l}}rt=1,ag(),lg(),og()}}function ag(){if(rt===1){rt=0;var e=ei,n=ks,r=(n.flags&13878)!==0;if((n.subtreeFlags&13878)!==0||r){r=D.T,D.T=null;var l=H.p;H.p=2;var u=pe;pe|=4;try{Vp(n,e);var f=sf,_=Kd(e.containerInfo),m=f.focusedElem,y=f.selectionRange;if(_!==m&&m&&m.ownerDocument&&Fd(m.ownerDocument.documentElement,m)){if(y!==null&&Du(m)){var R=y.start,O=y.end;if(O===void 0&&(O=R),"selectionStart"in m)m.selectionStart=R,m.selectionEnd=Math.min(O,m.value.length);else{var M=m.ownerDocument||document,w=M&&M.defaultView||window;if(w.getSelection){var N=w.getSelection(),K=m.textContent.length,G=Math.min(y.start,K),ye=y.end===void 0?G:Math.min(y.end,K);!N.extend&&G>ye&&(_=ye,ye=G,G=_);var C=Qd(m,G),T=Qd(m,ye);if(C&&T&&(N.rangeCount!==1||N.anchorNode!==C.node||N.anchorOffset!==C.offset||N.focusNode!==T.node||N.focusOffset!==T.offset)){var A=M.createRange();A.setStart(C.node,C.offset),N.removeAllRanges(),G>ye?(N.addRange(A),N.extend(T.node,T.offset)):(A.setEnd(T.node,T.offset),N.addRange(A))}}}}for(M=[],N=m;N=N.parentNode;)N.nodeType===1&&M.push({element:N,left:N.scrollLeft,top:N.scrollTop});for(typeof m.focus=="function"&&m.focus(),m=0;m<M.length;m++){var I=M[m];I.element.scrollLeft=I.left,I.element.scrollTop=I.top}}eo=!!nf,sf=nf=null}finally{pe=u,H.p=l,D.T=r}}e.current=n,rt=2}}function lg(){if(rt===2){rt=0;var e=ei,n=ks,r=(n.flags&8772)!==0;if((n.subtreeFlags&8772)!==0||r){r=D.T,D.T=null;var l=H.p;H.p=2;var u=pe;pe|=4;try{Hp(e,n.alternate,n)}finally{pe=u,H.p=l,D.T=r}}rt=3}}function og(){if(rt===4||rt===3){rt=0,CE();var e=ei,n=ks,r=xs,l=Xp;(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?rt=5:(rt=0,ks=ei=null,ug(e,e.pendingLanes));var u=e.pendingLanes;if(u===0&&($n=null),uu(r),n=n.stateNode,At&&typeof At.onCommitFiberRoot=="function")try{At.onCommitFiberRoot(fr,n,void 0,(n.current.flags&128)===128)}catch{}if(l!==null){n=D.T,u=H.p,H.p=2,D.T=null;try{for(var f=e.onRecoverableError,_=0;_<l.length;_++){var m=l[_];f(m.value,{componentStack:m.stack})}}finally{D.T=n,H.p=u}}(xs&3)!==0&&Vl(),ln(e),u=e.pendingLanes,(r&4194090)!==0&&(u&42)!==0?e===Vc?Xr++:(Xr=0,Vc=e):Xr=0,Wr(0)}}function ug(e,n){(e.pooledCacheLanes&=n)===0&&(n=e.pooledCache,n!=null&&(e.pooledCache=null,Or(n)))}function Vl(e){return ag(),lg(),og(),cg()}function cg(){if(rt!==5)return!1;var e=ei,n=Bc;Bc=0;var r=uu(xs),l=D.T,u=H.p;try{H.p=32>r?32:r,D.T=null,r=qc,qc=null;var f=ei,_=xs;if(rt=0,ks=ei=null,xs=0,(pe&6)!==0)throw Error(a(331));var m=pe;if(pe|=4,Fp(f.current),jp(f,f.current,_,r),pe=m,Wr(0,!1),At&&typeof At.onPostCommitFiberRoot=="function")try{At.onPostCommitFiberRoot(fr,f)}catch{}return!0}finally{H.p=u,D.T=l,ug(e,n)}}function fg(e,n,r){n=Lt(r,n),n=Ec(e.stateNode,n,2),e=jn(e,n,2),e!==null&&(dr(e,2),ln(e))}function Ce(e,n,r){if(e.tag===3)fg(e,e,r);else for(;n!==null;){if(n.tag===3){fg(n,e,r);break}else if(n.tag===1){var l=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof l.componentDidCatch=="function"&&($n===null||!$n.has(l))){e=Lt(r,e),r=pp(2),l=jn(n,r,2),l!==null&&(gp(r,l,n,e),dr(l,2),ln(l));break}}n=n.return}}function Qc(e,n,r){var l=e.pingCache;if(l===null){l=e.pingCache=new Z0;var u=new Set;l.set(n,u)}else u=l.get(n),u===void 0&&(u=new Set,l.set(n,u));u.has(r)||(Lc=!0,u.add(r),e=nS.bind(null,e,n,r),n.then(e,e))}function nS(e,n,r){var l=e.pingCache;l!==null&&l.delete(n),e.pingedLanes|=e.suspendedLanes&r,e.warmLanes&=~r,we===e&&(ce&r)===r&&(ze===4||ze===3&&(ce&62914560)===ce&&300>tn()-Pc?(pe&2)===0&&Us(e,0):zc|=r,Ms===ce&&(Ms=0)),ln(e)}function hg(e,n){n===0&&(n=od()),e=ms(e,n),e!==null&&(dr(e,n),ln(e))}function iS(e){var n=e.memoizedState,r=0;n!==null&&(r=n.retryLane),hg(e,r)}function sS(e,n){var r=0;switch(e.tag){case 13:var l=e.stateNode,u=e.memoizedState;u!==null&&(r=u.retryLane);break;case 19:l=e.stateNode;break;case 22:l=e.stateNode._retryCache;break;default:throw Error(a(314))}l!==null&&l.delete(n),hg(e,r)}function rS(e,n){return ru(e,n)}var Gl=null,zs=null,Fc=!1,jl=!1,Kc=!1,Gi=0;function ln(e){e!==zs&&e.next===null&&(zs===null?Gl=zs=e:zs=zs.next=e),jl=!0,Fc||(Fc=!0,lS())}function Wr(e,n){if(!Kc&&jl){Kc=!0;do for(var r=!1,l=Gl;l!==null;){if(e!==0){var u=l.pendingLanes;if(u===0)var f=0;else{var _=l.suspendedLanes,m=l.pingedLanes;f=(1<<31-Rt(42|e)+1)-1,f&=u&~(_&~m),f=f&201326741?f&201326741|1:f?f|2:0}f!==0&&(r=!0,gg(l,f))}else f=ce,f=Wa(l,l===we?f:0,l.cancelPendingCommit!==null||l.timeoutHandle!==-1),(f&3)===0||hr(l,f)||(r=!0,gg(l,f));l=l.next}while(r);Kc=!1}}function aS(){dg()}function dg(){jl=Fc=!1;var e=0;Gi!==0&&(pS()&&(e=Gi),Gi=0);for(var n=tn(),r=null,l=Gl;l!==null;){var u=l.next,f=_g(l,n);f===0?(l.next=null,r===null?Gl=u:r.next=u,u===null&&(zs=r)):(r=l,(e!==0||(f&3)!==0)&&(jl=!0)),l=u}Wr(e)}function _g(e,n){for(var r=e.suspendedLanes,l=e.pingedLanes,u=e.expirationTimes,f=e.pendingLanes&-62914561;0<f;){var _=31-Rt(f),m=1<<_,y=u[_];y===-1?((m&r)===0||(m&l)!==0)&&(u[_]=ME(m,n)):y<=n&&(e.expiredLanes|=m),f&=~m}if(n=we,r=ce,r=Wa(e,e===n?r:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),l=e.callbackNode,r===0||e===n&&(ge===2||ge===9)||e.cancelPendingCommit!==null)return l!==null&&l!==null&&au(l),e.callbackNode=null,e.callbackPriority=0;if((r&3)===0||hr(e,r)){if(n=r&-r,n===e.callbackPriority)return n;switch(l!==null&&au(l),uu(r)){case 2:case 8:r=rd;break;case 32:r=Fa;break;case 268435456:r=ad;break;default:r=Fa}return l=pg.bind(null,e),r=ru(r,l),e.callbackPriority=n,e.callbackNode=r,n}return l!==null&&l!==null&&au(l),e.callbackPriority=2,e.callbackNode=null,2}function pg(e,n){if(rt!==0&&rt!==5)return e.callbackNode=null,e.callbackPriority=0,null;var r=e.callbackNode;if(Vl()&&e.callbackNode!==r)return null;var l=ce;return l=Wa(e,e===we?l:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),l===0?null:(Zp(e,l,n),_g(e,tn()),e.callbackNode!=null&&e.callbackNode===r?pg.bind(null,e):null)}function gg(e,n){if(Vl())return null;Zp(e,n,!0)}function lS(){mS(function(){(pe&6)!==0?ru(sd,aS):dg()})}function Xc(){return Gi===0&&(Gi=ld()),Gi}function mg(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:tl(""+e)}function vg(e,n){var r=n.ownerDocument.createElement("input");return r.name=n.name,r.value=n.value,e.id&&r.setAttribute("form",e.id),n.parentNode.insertBefore(r,n),e=new FormData(e),r.parentNode.removeChild(r),e}function oS(e,n,r,l,u){if(n==="submit"&&r&&r.stateNode===u){var f=mg((u[vt]||null).action),_=l.submitter;_&&(n=(n=_[vt]||null)?mg(n.formAction):_.getAttribute("formAction"),n!==null&&(f=n,_=null));var m=new rl("action","action",null,l,u);e.push({event:m,listeners:[{instance:null,listener:function(){if(l.defaultPrevented){if(Gi!==0){var y=_?vg(u,_):new FormData(u);pc(r,{pending:!0,data:y,method:u.method,action:f},null,y)}}else typeof f=="function"&&(m.preventDefault(),y=_?vg(u,_):new FormData(u),pc(r,{pending:!0,data:y,method:u.method,action:f},f,y))},currentTarget:u}]})}}for(var Wc=0;Wc<xu.length;Wc++){var Zc=xu[Wc],uS=Zc.toLowerCase(),cS=Zc[0].toUpperCase()+Zc.slice(1);Ft(uS,"on"+cS)}Ft(Zd,"onAnimationEnd"),Ft(Jd,"onAnimationIteration"),Ft($d,"onAnimationStart"),Ft("dblclick","onDoubleClick"),Ft("focusin","onFocus"),Ft("focusout","onBlur"),Ft(w0,"onTransitionRun"),Ft(N0,"onTransitionStart"),Ft(O0,"onTransitionCancel"),Ft(e_,"onTransitionEnd"),ls("onMouseEnter",["mouseout","mouseover"]),ls("onMouseLeave",["mouseout","mouseover"]),ls("onPointerEnter",["pointerout","pointerover"]),ls("onPointerLeave",["pointerout","pointerover"]),wi("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),wi("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),wi("onBeforeInput",["compositionend","keypress","textInput","paste"]),wi("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),wi("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),wi("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Zr="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),fS=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Zr));function yg(e,n){n=(n&4)!==0;for(var r=0;r<e.length;r++){var l=e[r],u=l.event;l=l.listeners;e:{var f=void 0;if(n)for(var _=l.length-1;0<=_;_--){var m=l[_],y=m.instance,R=m.currentTarget;if(m=m.listener,y!==f&&u.isPropagationStopped())break e;f=m,u.currentTarget=R;try{f(u)}catch(O){Il(O)}u.currentTarget=null,f=y}else for(_=0;_<l.length;_++){if(m=l[_],y=m.instance,R=m.currentTarget,m=m.listener,y!==f&&u.isPropagationStopped())break e;f=m,u.currentTarget=R;try{f(u)}catch(O){Il(O)}u.currentTarget=null,f=y}}}}function oe(e,n){var r=n[cu];r===void 0&&(r=n[cu]=new Set);var l=e+"__bubble";r.has(l)||(Eg(n,e,2,!1),r.add(l))}function Jc(e,n,r){var l=0;n&&(l|=4),Eg(r,e,l,n)}var Yl="_reactListening"+Math.random().toString(36).slice(2);function $c(e){if(!e[Yl]){e[Yl]=!0,dd.forEach(function(r){r!=="selectionchange"&&(fS.has(r)||Jc(r,!1,e),Jc(r,!0,e))});var n=e.nodeType===9?e:e.ownerDocument;n===null||n[Yl]||(n[Yl]=!0,Jc("selectionchange",!1,n))}}function Eg(e,n,r,l){switch(jg(n)){case 2:var u=HS;break;case 8:u=PS;break;default:u=_f}r=u.bind(null,n,r,e),u=void 0,!Su||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(u=!0),l?u!==void 0?e.addEventListener(n,r,{capture:!0,passive:u}):e.addEventListener(n,r,!0):u!==void 0?e.addEventListener(n,r,{passive:u}):e.addEventListener(n,r,!1)}function ef(e,n,r,l,u){var f=l;if((n&1)===0&&(n&2)===0&&l!==null)e:for(;;){if(l===null)return;var _=l.tag;if(_===3||_===4){var m=l.stateNode.containerInfo;if(m===u)break;if(_===4)for(_=l.return;_!==null;){var y=_.tag;if((y===3||y===4)&&_.stateNode.containerInfo===u)return;_=_.return}for(;m!==null;){if(_=ss(m),_===null)return;if(y=_.tag,y===5||y===6||y===26||y===27){l=f=_;continue e}m=m.parentNode}}l=l.return}wd(function(){var R=f,O=yu(r),M=[];e:{var w=t_.get(e);if(w!==void 0){var N=rl,K=e;switch(e){case"keypress":if(il(r)===0)break e;case"keydown":case"keyup":N=r0;break;case"focusin":K="focus",N=Au;break;case"focusout":K="blur",N=Au;break;case"beforeblur":case"afterblur":N=Au;break;case"click":if(r.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":N=Dd;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":N=FE;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":N=o0;break;case Zd:case Jd:case $d:N=WE;break;case e_:N=c0;break;case"scroll":case"scrollend":N=YE;break;case"wheel":N=h0;break;case"copy":case"cut":case"paste":N=JE;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":N=Md;break;case"toggle":case"beforetoggle":N=_0}var G=(n&4)!==0,ye=!G&&(e==="scroll"||e==="scrollend"),C=G?w!==null?w+"Capture":null:w;G=[];for(var T=R,A;T!==null;){var I=T;if(A=I.stateNode,I=I.tag,I!==5&&I!==26&&I!==27||A===null||C===null||(I=gr(T,C),I!=null&&G.push(Jr(T,I,A))),ye)break;T=T.return}0<G.length&&(w=new N(w,K,null,r,O),M.push({event:w,listeners:G}))}}if((n&7)===0){e:{if(w=e==="mouseover"||e==="pointerover",N=e==="mouseout"||e==="pointerout",w&&r!==vu&&(K=r.relatedTarget||r.fromElement)&&(ss(K)||K[is]))break e;if((N||w)&&(w=O.window===O?O:(w=O.ownerDocument)?w.defaultView||w.parentWindow:window,N?(K=r.relatedTarget||r.toElement,N=R,K=K?ss(K):null,K!==null&&(ye=c(K),G=K.tag,K!==ye||G!==5&&G!==27&&G!==6)&&(K=null)):(N=null,K=R),N!==K)){if(G=Dd,I="onMouseLeave",C="onMouseEnter",T="mouse",(e==="pointerout"||e==="pointerover")&&(G=Md,I="onPointerLeave",C="onPointerEnter",T="pointer"),ye=N==null?w:pr(N),A=K==null?w:pr(K),w=new G(I,T+"leave",N,r,O),w.target=ye,w.relatedTarget=A,I=null,ss(O)===R&&(G=new G(C,T+"enter",K,r,O),G.target=A,G.relatedTarget=ye,I=G),ye=I,N&&K)t:{for(G=N,C=K,T=0,A=G;A;A=Hs(A))T++;for(A=0,I=C;I;I=Hs(I))A++;for(;0<T-A;)G=Hs(G),T--;for(;0<A-T;)C=Hs(C),A--;for(;T--;){if(G===C||C!==null&&G===C.alternate)break t;G=Hs(G),C=Hs(C)}G=null}else G=null;N!==null&&Sg(M,w,N,G,!1),K!==null&&ye!==null&&Sg(M,ye,K,G,!0)}}e:{if(w=R?pr(R):window,N=w.nodeName&&w.nodeName.toLowerCase(),N==="select"||N==="input"&&w.type==="file")var B=Bd;else if(Hd(w))if(qd)B=C0;else{B=T0;var te=S0}else N=w.nodeName,!N||N.toLowerCase()!=="input"||w.type!=="checkbox"&&w.type!=="radio"?R&&mu(R.elementType)&&(B=Bd):B=b0;if(B&&(B=B(e,R))){Pd(M,B,r,O);break e}te&&te(e,w,R),e==="focusout"&&R&&w.type==="number"&&R.memoizedProps.value!=null&&gu(w,"number",w.value)}switch(te=R?pr(R):window,e){case"focusin":(Hd(te)||te.contentEditable==="true")&&(_s=te,Iu=R,Cr=null);break;case"focusout":Cr=Iu=_s=null;break;case"mousedown":Mu=!0;break;case"contextmenu":case"mouseup":case"dragend":Mu=!1,Xd(M,r,O);break;case"selectionchange":if(R0)break;case"keydown":case"keyup":Xd(M,r,O)}var q;if(wu)e:{switch(e){case"compositionstart":var j="onCompositionStart";break e;case"compositionend":j="onCompositionEnd";break e;case"compositionupdate":j="onCompositionUpdate";break e}j=void 0}else ds?Ld(e,r)&&(j="onCompositionEnd"):e==="keydown"&&r.keyCode===229&&(j="onCompositionStart");j&&(kd&&r.locale!=="ko"&&(ds||j!=="onCompositionStart"?j==="onCompositionEnd"&&ds&&(q=Nd()):(Bn=O,Tu="value"in Bn?Bn.value:Bn.textContent,ds=!0)),te=Ql(R,j),0<te.length&&(j=new Id(j,e,null,r,O),M.push({event:j,listeners:te}),q?j.data=q:(q=zd(r),q!==null&&(j.data=q)))),(q=g0?m0(e,r):v0(e,r))&&(j=Ql(R,"onBeforeInput"),0<j.length&&(te=new Id("onBeforeInput","beforeinput",null,r,O),M.push({event:te,listeners:j}),te.data=q)),oS(M,e,R,r,O)}yg(M,n)})}function Jr(e,n,r){return{instance:e,listener:n,currentTarget:r}}function Ql(e,n){for(var r=n+"Capture",l=[];e!==null;){var u=e,f=u.stateNode;if(u=u.tag,u!==5&&u!==26&&u!==27||f===null||(u=gr(e,r),u!=null&&l.unshift(Jr(e,u,f)),u=gr(e,n),u!=null&&l.push(Jr(e,u,f))),e.tag===3)return l;e=e.return}return[]}function Hs(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function Sg(e,n,r,l,u){for(var f=n._reactName,_=[];r!==null&&r!==l;){var m=r,y=m.alternate,R=m.stateNode;if(m=m.tag,y!==null&&y===l)break;m!==5&&m!==26&&m!==27||R===null||(y=R,u?(R=gr(r,f),R!=null&&_.unshift(Jr(r,R,y))):u||(R=gr(r,f),R!=null&&_.push(Jr(r,R,y)))),r=r.return}_.length!==0&&e.push({event:n,listeners:_})}var hS=/\r\n?/g,dS=/\u0000|\uFFFD/g;function Tg(e){return(typeof e=="string"?e:""+e).replace(hS,`
`).replace(dS,"")}function bg(e,n){return n=Tg(n),Tg(e)===n}function Fl(){}function ve(e,n,r,l,u,f){switch(r){case"children":typeof l=="string"?n==="body"||n==="textarea"&&l===""||cs(e,l):(typeof l=="number"||typeof l=="bigint")&&n!=="body"&&cs(e,""+l);break;case"className":Ja(e,"class",l);break;case"tabIndex":Ja(e,"tabindex",l);break;case"dir":case"role":case"viewBox":case"width":case"height":Ja(e,r,l);break;case"style":Ad(e,l,f);break;case"data":if(n!=="object"){Ja(e,"data",l);break}case"src":case"href":if(l===""&&(n!=="a"||r!=="href")){e.removeAttribute(r);break}if(l==null||typeof l=="function"||typeof l=="symbol"||typeof l=="boolean"){e.removeAttribute(r);break}l=tl(""+l),e.setAttribute(r,l);break;case"action":case"formAction":if(typeof l=="function"){e.setAttribute(r,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof f=="function"&&(r==="formAction"?(n!=="input"&&ve(e,n,"name",u.name,u,null),ve(e,n,"formEncType",u.formEncType,u,null),ve(e,n,"formMethod",u.formMethod,u,null),ve(e,n,"formTarget",u.formTarget,u,null)):(ve(e,n,"encType",u.encType,u,null),ve(e,n,"method",u.method,u,null),ve(e,n,"target",u.target,u,null)));if(l==null||typeof l=="symbol"||typeof l=="boolean"){e.removeAttribute(r);break}l=tl(""+l),e.setAttribute(r,l);break;case"onClick":l!=null&&(e.onclick=Fl);break;case"onScroll":l!=null&&oe("scroll",e);break;case"onScrollEnd":l!=null&&oe("scrollend",e);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(a(61));if(r=l.__html,r!=null){if(u.children!=null)throw Error(a(60));e.innerHTML=r}}break;case"multiple":e.multiple=l&&typeof l!="function"&&typeof l!="symbol";break;case"muted":e.muted=l&&typeof l!="function"&&typeof l!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(l==null||typeof l=="function"||typeof l=="boolean"||typeof l=="symbol"){e.removeAttribute("xlink:href");break}r=tl(""+l),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",r);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":l!=null&&typeof l!="function"&&typeof l!="symbol"?e.setAttribute(r,""+l):e.removeAttribute(r);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":l&&typeof l!="function"&&typeof l!="symbol"?e.setAttribute(r,""):e.removeAttribute(r);break;case"capture":case"download":l===!0?e.setAttribute(r,""):l!==!1&&l!=null&&typeof l!="function"&&typeof l!="symbol"?e.setAttribute(r,l):e.removeAttribute(r);break;case"cols":case"rows":case"size":case"span":l!=null&&typeof l!="function"&&typeof l!="symbol"&&!isNaN(l)&&1<=l?e.setAttribute(r,l):e.removeAttribute(r);break;case"rowSpan":case"start":l==null||typeof l=="function"||typeof l=="symbol"||isNaN(l)?e.removeAttribute(r):e.setAttribute(r,l);break;case"popover":oe("beforetoggle",e),oe("toggle",e),Za(e,"popover",l);break;case"xlinkActuate":fn(e,"http://www.w3.org/1999/xlink","xlink:actuate",l);break;case"xlinkArcrole":fn(e,"http://www.w3.org/1999/xlink","xlink:arcrole",l);break;case"xlinkRole":fn(e,"http://www.w3.org/1999/xlink","xlink:role",l);break;case"xlinkShow":fn(e,"http://www.w3.org/1999/xlink","xlink:show",l);break;case"xlinkTitle":fn(e,"http://www.w3.org/1999/xlink","xlink:title",l);break;case"xlinkType":fn(e,"http://www.w3.org/1999/xlink","xlink:type",l);break;case"xmlBase":fn(e,"http://www.w3.org/XML/1998/namespace","xml:base",l);break;case"xmlLang":fn(e,"http://www.w3.org/XML/1998/namespace","xml:lang",l);break;case"xmlSpace":fn(e,"http://www.w3.org/XML/1998/namespace","xml:space",l);break;case"is":Za(e,"is",l);break;case"innerText":case"textContent":break;default:(!(2<r.length)||r[0]!=="o"&&r[0]!=="O"||r[1]!=="n"&&r[1]!=="N")&&(r=GE.get(r)||r,Za(e,r,l))}}function tf(e,n,r,l,u,f){switch(r){case"style":Ad(e,l,f);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(a(61));if(r=l.__html,r!=null){if(u.children!=null)throw Error(a(60));e.innerHTML=r}}break;case"children":typeof l=="string"?cs(e,l):(typeof l=="number"||typeof l=="bigint")&&cs(e,""+l);break;case"onScroll":l!=null&&oe("scroll",e);break;case"onScrollEnd":l!=null&&oe("scrollend",e);break;case"onClick":l!=null&&(e.onclick=Fl);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!_d.hasOwnProperty(r))e:{if(r[0]==="o"&&r[1]==="n"&&(u=r.endsWith("Capture"),n=r.slice(2,u?r.length-7:void 0),f=e[vt]||null,f=f!=null?f[r]:null,typeof f=="function"&&e.removeEventListener(n,f,u),typeof l=="function")){typeof f!="function"&&f!==null&&(r in e?e[r]=null:e.hasAttribute(r)&&e.removeAttribute(r)),e.addEventListener(n,l,u);break e}r in e?e[r]=l:l===!0?e.setAttribute(r,""):Za(e,r,l)}}}function at(e,n,r){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":oe("error",e),oe("load",e);var l=!1,u=!1,f;for(f in r)if(r.hasOwnProperty(f)){var _=r[f];if(_!=null)switch(f){case"src":l=!0;break;case"srcSet":u=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(a(137,n));default:ve(e,n,f,_,r,null)}}u&&ve(e,n,"srcSet",r.srcSet,r,null),l&&ve(e,n,"src",r.src,r,null);return;case"input":oe("invalid",e);var m=f=_=u=null,y=null,R=null;for(l in r)if(r.hasOwnProperty(l)){var O=r[l];if(O!=null)switch(l){case"name":u=O;break;case"type":_=O;break;case"checked":y=O;break;case"defaultChecked":R=O;break;case"value":f=O;break;case"defaultValue":m=O;break;case"children":case"dangerouslySetInnerHTML":if(O!=null)throw Error(a(137,n));break;default:ve(e,n,l,O,r,null)}}Sd(e,f,m,y,R,_,u,!1),$a(e);return;case"select":oe("invalid",e),l=_=f=null;for(u in r)if(r.hasOwnProperty(u)&&(m=r[u],m!=null))switch(u){case"value":f=m;break;case"defaultValue":_=m;break;case"multiple":l=m;default:ve(e,n,u,m,r,null)}n=f,r=_,e.multiple=!!l,n!=null?us(e,!!l,n,!1):r!=null&&us(e,!!l,r,!0);return;case"textarea":oe("invalid",e),f=u=l=null;for(_ in r)if(r.hasOwnProperty(_)&&(m=r[_],m!=null))switch(_){case"value":l=m;break;case"defaultValue":u=m;break;case"children":f=m;break;case"dangerouslySetInnerHTML":if(m!=null)throw Error(a(91));break;default:ve(e,n,_,m,r,null)}bd(e,l,u,f),$a(e);return;case"option":for(y in r)if(r.hasOwnProperty(y)&&(l=r[y],l!=null))switch(y){case"selected":e.selected=l&&typeof l!="function"&&typeof l!="symbol";break;default:ve(e,n,y,l,r,null)}return;case"dialog":oe("beforetoggle",e),oe("toggle",e),oe("cancel",e),oe("close",e);break;case"iframe":case"object":oe("load",e);break;case"video":case"audio":for(l=0;l<Zr.length;l++)oe(Zr[l],e);break;case"image":oe("error",e),oe("load",e);break;case"details":oe("toggle",e);break;case"embed":case"source":case"link":oe("error",e),oe("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(R in r)if(r.hasOwnProperty(R)&&(l=r[R],l!=null))switch(R){case"children":case"dangerouslySetInnerHTML":throw Error(a(137,n));default:ve(e,n,R,l,r,null)}return;default:if(mu(n)){for(O in r)r.hasOwnProperty(O)&&(l=r[O],l!==void 0&&tf(e,n,O,l,r,void 0));return}}for(m in r)r.hasOwnProperty(m)&&(l=r[m],l!=null&&ve(e,n,m,l,r,null))}function _S(e,n,r,l){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var u=null,f=null,_=null,m=null,y=null,R=null,O=null;for(N in r){var M=r[N];if(r.hasOwnProperty(N)&&M!=null)switch(N){case"checked":break;case"value":break;case"defaultValue":y=M;default:l.hasOwnProperty(N)||ve(e,n,N,null,l,M)}}for(var w in l){var N=l[w];if(M=r[w],l.hasOwnProperty(w)&&(N!=null||M!=null))switch(w){case"type":f=N;break;case"name":u=N;break;case"checked":R=N;break;case"defaultChecked":O=N;break;case"value":_=N;break;case"defaultValue":m=N;break;case"children":case"dangerouslySetInnerHTML":if(N!=null)throw Error(a(137,n));break;default:N!==M&&ve(e,n,w,N,l,M)}}pu(e,_,m,y,R,O,f,u);return;case"select":N=_=m=w=null;for(f in r)if(y=r[f],r.hasOwnProperty(f)&&y!=null)switch(f){case"value":break;case"multiple":N=y;default:l.hasOwnProperty(f)||ve(e,n,f,null,l,y)}for(u in l)if(f=l[u],y=r[u],l.hasOwnProperty(u)&&(f!=null||y!=null))switch(u){case"value":w=f;break;case"defaultValue":m=f;break;case"multiple":_=f;default:f!==y&&ve(e,n,u,f,l,y)}n=m,r=_,l=N,w!=null?us(e,!!r,w,!1):!!l!=!!r&&(n!=null?us(e,!!r,n,!0):us(e,!!r,r?[]:"",!1));return;case"textarea":N=w=null;for(m in r)if(u=r[m],r.hasOwnProperty(m)&&u!=null&&!l.hasOwnProperty(m))switch(m){case"value":break;case"children":break;default:ve(e,n,m,null,l,u)}for(_ in l)if(u=l[_],f=r[_],l.hasOwnProperty(_)&&(u!=null||f!=null))switch(_){case"value":w=u;break;case"defaultValue":N=u;break;case"children":break;case"dangerouslySetInnerHTML":if(u!=null)throw Error(a(91));break;default:u!==f&&ve(e,n,_,u,l,f)}Td(e,w,N);return;case"option":for(var K in r)if(w=r[K],r.hasOwnProperty(K)&&w!=null&&!l.hasOwnProperty(K))switch(K){case"selected":e.selected=!1;break;default:ve(e,n,K,null,l,w)}for(y in l)if(w=l[y],N=r[y],l.hasOwnProperty(y)&&w!==N&&(w!=null||N!=null))switch(y){case"selected":e.selected=w&&typeof w!="function"&&typeof w!="symbol";break;default:ve(e,n,y,w,l,N)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var G in r)w=r[G],r.hasOwnProperty(G)&&w!=null&&!l.hasOwnProperty(G)&&ve(e,n,G,null,l,w);for(R in l)if(w=l[R],N=r[R],l.hasOwnProperty(R)&&w!==N&&(w!=null||N!=null))switch(R){case"children":case"dangerouslySetInnerHTML":if(w!=null)throw Error(a(137,n));break;default:ve(e,n,R,w,l,N)}return;default:if(mu(n)){for(var ye in r)w=r[ye],r.hasOwnProperty(ye)&&w!==void 0&&!l.hasOwnProperty(ye)&&tf(e,n,ye,void 0,l,w);for(O in l)w=l[O],N=r[O],!l.hasOwnProperty(O)||w===N||w===void 0&&N===void 0||tf(e,n,O,w,l,N);return}}for(var C in r)w=r[C],r.hasOwnProperty(C)&&w!=null&&!l.hasOwnProperty(C)&&ve(e,n,C,null,l,w);for(M in l)w=l[M],N=r[M],!l.hasOwnProperty(M)||w===N||w==null&&N==null||ve(e,n,M,w,l,N)}var nf=null,sf=null;function Kl(e){return e.nodeType===9?e:e.ownerDocument}function Cg(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function Ag(e,n){if(e===0)switch(n){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&n==="foreignObject"?0:e}function rf(e,n){return e==="textarea"||e==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.children=="bigint"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var af=null;function pS(){var e=window.event;return e&&e.type==="popstate"?e===af?!1:(af=e,!0):(af=null,!1)}var Rg=typeof setTimeout=="function"?setTimeout:void 0,gS=typeof clearTimeout=="function"?clearTimeout:void 0,wg=typeof Promise=="function"?Promise:void 0,mS=typeof queueMicrotask=="function"?queueMicrotask:typeof wg<"u"?function(e){return wg.resolve(null).then(e).catch(vS)}:Rg;function vS(e){setTimeout(function(){throw e})}function ni(e){return e==="head"}function Ng(e,n){var r=n,l=0,u=0;do{var f=r.nextSibling;if(e.removeChild(r),f&&f.nodeType===8)if(r=f.data,r==="/$"){if(0<l&&8>l){r=l;var _=e.ownerDocument;if(r&1&&$r(_.documentElement),r&2&&$r(_.body),r&4)for(r=_.head,$r(r),_=r.firstChild;_;){var m=_.nextSibling,y=_.nodeName;_[_r]||y==="SCRIPT"||y==="STYLE"||y==="LINK"&&_.rel.toLowerCase()==="stylesheet"||r.removeChild(_),_=m}}if(u===0){e.removeChild(f),la(n);return}u--}else r==="$"||r==="$?"||r==="$!"?u++:l=r.charCodeAt(0)-48;else l=0;r=f}while(r);la(n)}function lf(e){var n=e.firstChild;for(n&&n.nodeType===10&&(n=n.nextSibling);n;){var r=n;switch(n=n.nextSibling,r.nodeName){case"HTML":case"HEAD":case"BODY":lf(r),fu(r);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(r.rel.toLowerCase()==="stylesheet")continue}e.removeChild(r)}}function yS(e,n,r,l){for(;e.nodeType===1;){var u=r;if(e.nodeName.toLowerCase()!==n.toLowerCase()){if(!l&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(l){if(!e[_r])switch(n){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(f=e.getAttribute("rel"),f==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(f!==u.rel||e.getAttribute("href")!==(u.href==null||u.href===""?null:u.href)||e.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin)||e.getAttribute("title")!==(u.title==null?null:u.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(f=e.getAttribute("src"),(f!==(u.src==null?null:u.src)||e.getAttribute("type")!==(u.type==null?null:u.type)||e.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin))&&f&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(n==="input"&&e.type==="hidden"){var f=u.name==null?null:""+u.name;if(u.type==="hidden"&&e.getAttribute("name")===f)return e}else return e;if(e=Xt(e.nextSibling),e===null)break}return null}function ES(e,n,r){if(n==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!r||(e=Xt(e.nextSibling),e===null))return null;return e}function of(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState==="complete"}function SS(e,n){var r=e.ownerDocument;if(e.data!=="$?"||r.readyState==="complete")n();else{var l=function(){n(),r.removeEventListener("DOMContentLoaded",l)};r.addEventListener("DOMContentLoaded",l),e._reactRetry=l}}function Xt(e){for(;e!=null;e=e.nextSibling){var n=e.nodeType;if(n===1||n===3)break;if(n===8){if(n=e.data,n==="$"||n==="$!"||n==="$?"||n==="F!"||n==="F")break;if(n==="/$")return null}}return e}var uf=null;function Og(e){e=e.previousSibling;for(var n=0;e;){if(e.nodeType===8){var r=e.data;if(r==="$"||r==="$!"||r==="$?"){if(n===0)return e;n--}else r==="/$"&&n++}e=e.previousSibling}return null}function Dg(e,n,r){switch(n=Kl(r),e){case"html":if(e=n.documentElement,!e)throw Error(a(452));return e;case"head":if(e=n.head,!e)throw Error(a(453));return e;case"body":if(e=n.body,!e)throw Error(a(454));return e;default:throw Error(a(451))}}function $r(e){for(var n=e.attributes;n.length;)e.removeAttributeNode(n[0]);fu(e)}var Vt=new Map,Ig=new Set;function Xl(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var An=H.d;H.d={f:TS,r:bS,D:CS,C:AS,L:RS,m:wS,X:OS,S:NS,M:DS};function TS(){var e=An.f(),n=Bl();return e||n}function bS(e){var n=rs(e);n!==null&&n.tag===5&&n.type==="form"?Z_(n):An.r(e)}var Ps=typeof document>"u"?null:document;function Mg(e,n,r){var l=Ps;if(l&&typeof n=="string"&&n){var u=Ut(n);u='link[rel="'+e+'"][href="'+u+'"]',typeof r=="string"&&(u+='[crossorigin="'+r+'"]'),Ig.has(u)||(Ig.add(u),e={rel:e,crossOrigin:r,href:n},l.querySelector(u)===null&&(n=l.createElement("link"),at(n,"link",e),Je(n),l.head.appendChild(n)))}}function CS(e){An.D(e),Mg("dns-prefetch",e,null)}function AS(e,n){An.C(e,n),Mg("preconnect",e,n)}function RS(e,n,r){An.L(e,n,r);var l=Ps;if(l&&e&&n){var u='link[rel="preload"][as="'+Ut(n)+'"]';n==="image"&&r&&r.imageSrcSet?(u+='[imagesrcset="'+Ut(r.imageSrcSet)+'"]',typeof r.imageSizes=="string"&&(u+='[imagesizes="'+Ut(r.imageSizes)+'"]')):u+='[href="'+Ut(e)+'"]';var f=u;switch(n){case"style":f=Bs(e);break;case"script":f=qs(e)}Vt.has(f)||(e=v({rel:"preload",href:n==="image"&&r&&r.imageSrcSet?void 0:e,as:n},r),Vt.set(f,e),l.querySelector(u)!==null||n==="style"&&l.querySelector(ea(f))||n==="script"&&l.querySelector(ta(f))||(n=l.createElement("link"),at(n,"link",e),Je(n),l.head.appendChild(n)))}}function wS(e,n){An.m(e,n);var r=Ps;if(r&&e){var l=n&&typeof n.as=="string"?n.as:"script",u='link[rel="modulepreload"][as="'+Ut(l)+'"][href="'+Ut(e)+'"]',f=u;switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":f=qs(e)}if(!Vt.has(f)&&(e=v({rel:"modulepreload",href:e},n),Vt.set(f,e),r.querySelector(u)===null)){switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(r.querySelector(ta(f)))return}l=r.createElement("link"),at(l,"link",e),Je(l),r.head.appendChild(l)}}}function NS(e,n,r){An.S(e,n,r);var l=Ps;if(l&&e){var u=as(l).hoistableStyles,f=Bs(e);n=n||"default";var _=u.get(f);if(!_){var m={loading:0,preload:null};if(_=l.querySelector(ea(f)))m.loading=5;else{e=v({rel:"stylesheet",href:e,"data-precedence":n},r),(r=Vt.get(f))&&cf(e,r);var y=_=l.createElement("link");Je(y),at(y,"link",e),y._p=new Promise(function(R,O){y.onload=R,y.onerror=O}),y.addEventListener("load",function(){m.loading|=1}),y.addEventListener("error",function(){m.loading|=2}),m.loading|=4,Wl(_,n,l)}_={type:"stylesheet",instance:_,count:1,state:m},u.set(f,_)}}}function OS(e,n){An.X(e,n);var r=Ps;if(r&&e){var l=as(r).hoistableScripts,u=qs(e),f=l.get(u);f||(f=r.querySelector(ta(u)),f||(e=v({src:e,async:!0},n),(n=Vt.get(u))&&ff(e,n),f=r.createElement("script"),Je(f),at(f,"link",e),r.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},l.set(u,f))}}function DS(e,n){An.M(e,n);var r=Ps;if(r&&e){var l=as(r).hoistableScripts,u=qs(e),f=l.get(u);f||(f=r.querySelector(ta(u)),f||(e=v({src:e,async:!0,type:"module"},n),(n=Vt.get(u))&&ff(e,n),f=r.createElement("script"),Je(f),at(f,"link",e),r.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},l.set(u,f))}}function kg(e,n,r,l){var u=(u=W.current)?Xl(u):null;if(!u)throw Error(a(446));switch(e){case"meta":case"title":return null;case"style":return typeof r.precedence=="string"&&typeof r.href=="string"?(n=Bs(r.href),r=as(u).hoistableStyles,l=r.get(n),l||(l={type:"style",instance:null,count:0,state:null},r.set(n,l)),l):{type:"void",instance:null,count:0,state:null};case"link":if(r.rel==="stylesheet"&&typeof r.href=="string"&&typeof r.precedence=="string"){e=Bs(r.href);var f=as(u).hoistableStyles,_=f.get(e);if(_||(u=u.ownerDocument||u,_={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},f.set(e,_),(f=u.querySelector(ea(e)))&&!f._p&&(_.instance=f,_.state.loading=5),Vt.has(e)||(r={rel:"preload",as:"style",href:r.href,crossOrigin:r.crossOrigin,integrity:r.integrity,media:r.media,hrefLang:r.hrefLang,referrerPolicy:r.referrerPolicy},Vt.set(e,r),f||IS(u,e,r,_.state))),n&&l===null)throw Error(a(528,""));return _}if(n&&l!==null)throw Error(a(529,""));return null;case"script":return n=r.async,r=r.src,typeof r=="string"&&n&&typeof n!="function"&&typeof n!="symbol"?(n=qs(r),r=as(u).hoistableScripts,l=r.get(n),l||(l={type:"script",instance:null,count:0,state:null},r.set(n,l)),l):{type:"void",instance:null,count:0,state:null};default:throw Error(a(444,e))}}function Bs(e){return'href="'+Ut(e)+'"'}function ea(e){return'link[rel="stylesheet"]['+e+"]"}function xg(e){return v({},e,{"data-precedence":e.precedence,precedence:null})}function IS(e,n,r,l){e.querySelector('link[rel="preload"][as="style"]['+n+"]")?l.loading=1:(n=e.createElement("link"),l.preload=n,n.addEventListener("load",function(){return l.loading|=1}),n.addEventListener("error",function(){return l.loading|=2}),at(n,"link",r),Je(n),e.head.appendChild(n))}function qs(e){return'[src="'+Ut(e)+'"]'}function ta(e){return"script[async]"+e}function Ug(e,n,r){if(n.count++,n.instance===null)switch(n.type){case"style":var l=e.querySelector('style[data-href~="'+Ut(r.href)+'"]');if(l)return n.instance=l,Je(l),l;var u=v({},r,{"data-href":r.href,"data-precedence":r.precedence,href:null,precedence:null});return l=(e.ownerDocument||e).createElement("style"),Je(l),at(l,"style",u),Wl(l,r.precedence,e),n.instance=l;case"stylesheet":u=Bs(r.href);var f=e.querySelector(ea(u));if(f)return n.state.loading|=4,n.instance=f,Je(f),f;l=xg(r),(u=Vt.get(u))&&cf(l,u),f=(e.ownerDocument||e).createElement("link"),Je(f);var _=f;return _._p=new Promise(function(m,y){_.onload=m,_.onerror=y}),at(f,"link",l),n.state.loading|=4,Wl(f,r.precedence,e),n.instance=f;case"script":return f=qs(r.src),(u=e.querySelector(ta(f)))?(n.instance=u,Je(u),u):(l=r,(u=Vt.get(f))&&(l=v({},r),ff(l,u)),e=e.ownerDocument||e,u=e.createElement("script"),Je(u),at(u,"link",l),e.head.appendChild(u),n.instance=u);case"void":return null;default:throw Error(a(443,n.type))}else n.type==="stylesheet"&&(n.state.loading&4)===0&&(l=n.instance,n.state.loading|=4,Wl(l,r.precedence,e));return n.instance}function Wl(e,n,r){for(var l=r.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),u=l.length?l[l.length-1]:null,f=u,_=0;_<l.length;_++){var m=l[_];if(m.dataset.precedence===n)f=m;else if(f!==u)break}f?f.parentNode.insertBefore(e,f.nextSibling):(n=r.nodeType===9?r.head:r,n.insertBefore(e,n.firstChild))}function cf(e,n){e.crossOrigin==null&&(e.crossOrigin=n.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=n.referrerPolicy),e.title==null&&(e.title=n.title)}function ff(e,n){e.crossOrigin==null&&(e.crossOrigin=n.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=n.referrerPolicy),e.integrity==null&&(e.integrity=n.integrity)}var Zl=null;function Lg(e,n,r){if(Zl===null){var l=new Map,u=Zl=new Map;u.set(r,l)}else u=Zl,l=u.get(r),l||(l=new Map,u.set(r,l));if(l.has(e))return l;for(l.set(e,null),r=r.getElementsByTagName(e),u=0;u<r.length;u++){var f=r[u];if(!(f[_r]||f[ct]||e==="link"&&f.getAttribute("rel")==="stylesheet")&&f.namespaceURI!=="http://www.w3.org/2000/svg"){var _=f.getAttribute(n)||"";_=e+_;var m=l.get(_);m?m.push(f):l.set(_,[f])}}return l}function zg(e,n,r){e=e.ownerDocument||e,e.head.insertBefore(r,n==="title"?e.querySelector("head > title"):null)}function MS(e,n,r){if(r===1||n.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof n.precedence!="string"||typeof n.href!="string"||n.href==="")break;return!0;case"link":if(typeof n.rel!="string"||typeof n.href!="string"||n.href===""||n.onLoad||n.onError)break;switch(n.rel){case"stylesheet":return e=n.disabled,typeof n.precedence=="string"&&e==null;default:return!0}case"script":if(n.async&&typeof n.async!="function"&&typeof n.async!="symbol"&&!n.onLoad&&!n.onError&&n.src&&typeof n.src=="string")return!0}return!1}function Hg(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}var na=null;function kS(){}function xS(e,n,r){if(na===null)throw Error(a(475));var l=na;if(n.type==="stylesheet"&&(typeof r.media!="string"||matchMedia(r.media).matches!==!1)&&(n.state.loading&4)===0){if(n.instance===null){var u=Bs(r.href),f=e.querySelector(ea(u));if(f){e=f._p,e!==null&&typeof e=="object"&&typeof e.then=="function"&&(l.count++,l=Jl.bind(l),e.then(l,l)),n.state.loading|=4,n.instance=f,Je(f);return}f=e.ownerDocument||e,r=xg(r),(u=Vt.get(u))&&cf(r,u),f=f.createElement("link"),Je(f);var _=f;_._p=new Promise(function(m,y){_.onload=m,_.onerror=y}),at(f,"link",r),n.instance=f}l.stylesheets===null&&(l.stylesheets=new Map),l.stylesheets.set(n,e),(e=n.state.preload)&&(n.state.loading&3)===0&&(l.count++,n=Jl.bind(l),e.addEventListener("load",n),e.addEventListener("error",n))}}function US(){if(na===null)throw Error(a(475));var e=na;return e.stylesheets&&e.count===0&&hf(e,e.stylesheets),0<e.count?function(n){var r=setTimeout(function(){if(e.stylesheets&&hf(e,e.stylesheets),e.unsuspend){var l=e.unsuspend;e.unsuspend=null,l()}},6e4);return e.unsuspend=n,function(){e.unsuspend=null,clearTimeout(r)}}:null}function Jl(){if(this.count--,this.count===0){if(this.stylesheets)hf(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var $l=null;function hf(e,n){e.stylesheets=null,e.unsuspend!==null&&(e.count++,$l=new Map,n.forEach(LS,e),$l=null,Jl.call(e))}function LS(e,n){if(!(n.state.loading&4)){var r=$l.get(e);if(r)var l=r.get(null);else{r=new Map,$l.set(e,r);for(var u=e.querySelectorAll("link[data-precedence],style[data-precedence]"),f=0;f<u.length;f++){var _=u[f];(_.nodeName==="LINK"||_.getAttribute("media")!=="not all")&&(r.set(_.dataset.precedence,_),l=_)}l&&r.set(null,l)}u=n.instance,_=u.getAttribute("data-precedence"),f=r.get(_)||l,f===l&&r.set(null,u),r.set(_,u),this.count++,l=Jl.bind(this),u.addEventListener("load",l),u.addEventListener("error",l),f?f.parentNode.insertBefore(u,f.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(u,e.firstChild)),n.state.loading|=4}}var ia={$$typeof:Ae,Provider:null,Consumer:null,_currentValue:Y,_currentValue2:Y,_threadCount:0};function zS(e,n,r,l,u,f,_,m){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=lu(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=lu(0),this.hiddenUpdates=lu(null),this.identifierPrefix=l,this.onUncaughtError=u,this.onCaughtError=f,this.onRecoverableError=_,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=m,this.incompleteTransitions=new Map}function Pg(e,n,r,l,u,f,_,m,y,R,O,M){return e=new zS(e,n,r,_,m,y,R,M),n=1,f===!0&&(n|=24),f=Nt(3,null,null,n),e.current=f,f.stateNode=e,n=Qu(),n.refCount++,e.pooledCache=n,n.refCount++,f.memoizedState={element:l,isDehydrated:r,cache:n},Wu(f),e}function Bg(e){return e?(e=vs,e):vs}function qg(e,n,r,l,u,f){u=Bg(u),l.context===null?l.context=u:l.pendingContext=u,l=Gn(n),l.payload={element:r},f=f===void 0?null:f,f!==null&&(l.callback=f),r=jn(e,l,n),r!==null&&(kt(r,e,n),kr(r,e,n))}function Vg(e,n){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var r=e.retryLane;e.retryLane=r!==0&&r<n?r:n}}function df(e,n){Vg(e,n),(e=e.alternate)&&Vg(e,n)}function Gg(e){if(e.tag===13){var n=ms(e,67108864);n!==null&&kt(n,e,67108864),df(e,67108864)}}var eo=!0;function HS(e,n,r,l){var u=D.T;D.T=null;var f=H.p;try{H.p=2,_f(e,n,r,l)}finally{H.p=f,D.T=u}}function PS(e,n,r,l){var u=D.T;D.T=null;var f=H.p;try{H.p=8,_f(e,n,r,l)}finally{H.p=f,D.T=u}}function _f(e,n,r,l){if(eo){var u=pf(l);if(u===null)ef(e,n,l,to,r),Yg(e,l);else if(qS(u,e,n,r,l))l.stopPropagation();else if(Yg(e,l),n&4&&-1<BS.indexOf(e)){for(;u!==null;){var f=rs(u);if(f!==null)switch(f.tag){case 3:if(f=f.stateNode,f.current.memoizedState.isDehydrated){var _=Ri(f.pendingLanes);if(_!==0){var m=f;for(m.pendingLanes|=2,m.entangledLanes|=2;_;){var y=1<<31-Rt(_);m.entanglements[1]|=y,_&=~y}ln(f),(pe&6)===0&&(Hl=tn()+500,Wr(0))}}break;case 13:m=ms(f,2),m!==null&&kt(m,f,2),Bl(),df(f,2)}if(f=pf(l),f===null&&ef(e,n,l,to,r),f===u)break;u=f}u!==null&&l.stopPropagation()}else ef(e,n,l,null,r)}}function pf(e){return e=yu(e),gf(e)}var to=null;function gf(e){if(to=null,e=ss(e),e!==null){var n=c(e);if(n===null)e=null;else{var r=n.tag;if(r===13){if(e=h(n),e!==null)return e;e=null}else if(r===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;e=null}else n!==e&&(e=null)}}return to=e,null}function jg(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(AE()){case sd:return 2;case rd:return 8;case Fa:case RE:return 32;case ad:return 268435456;default:return 32}default:return 32}}var mf=!1,ii=null,si=null,ri=null,sa=new Map,ra=new Map,ai=[],BS="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function Yg(e,n){switch(e){case"focusin":case"focusout":ii=null;break;case"dragenter":case"dragleave":si=null;break;case"mouseover":case"mouseout":ri=null;break;case"pointerover":case"pointerout":sa.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":ra.delete(n.pointerId)}}function aa(e,n,r,l,u,f){return e===null||e.nativeEvent!==f?(e={blockedOn:n,domEventName:r,eventSystemFlags:l,nativeEvent:f,targetContainers:[u]},n!==null&&(n=rs(n),n!==null&&Gg(n)),e):(e.eventSystemFlags|=l,n=e.targetContainers,u!==null&&n.indexOf(u)===-1&&n.push(u),e)}function qS(e,n,r,l,u){switch(n){case"focusin":return ii=aa(ii,e,n,r,l,u),!0;case"dragenter":return si=aa(si,e,n,r,l,u),!0;case"mouseover":return ri=aa(ri,e,n,r,l,u),!0;case"pointerover":var f=u.pointerId;return sa.set(f,aa(sa.get(f)||null,e,n,r,l,u)),!0;case"gotpointercapture":return f=u.pointerId,ra.set(f,aa(ra.get(f)||null,e,n,r,l,u)),!0}return!1}function Qg(e){var n=ss(e.target);if(n!==null){var r=c(n);if(r!==null){if(n=r.tag,n===13){if(n=h(r),n!==null){e.blockedOn=n,xE(e.priority,function(){if(r.tag===13){var l=Mt();l=ou(l);var u=ms(r,l);u!==null&&kt(u,r,l),df(r,l)}});return}}else if(n===3&&r.stateNode.current.memoizedState.isDehydrated){e.blockedOn=r.tag===3?r.stateNode.containerInfo:null;return}}}e.blockedOn=null}function no(e){if(e.blockedOn!==null)return!1;for(var n=e.targetContainers;0<n.length;){var r=pf(e.nativeEvent);if(r===null){r=e.nativeEvent;var l=new r.constructor(r.type,r);vu=l,r.target.dispatchEvent(l),vu=null}else return n=rs(r),n!==null&&Gg(n),e.blockedOn=r,!1;n.shift()}return!0}function Fg(e,n,r){no(e)&&r.delete(n)}function VS(){mf=!1,ii!==null&&no(ii)&&(ii=null),si!==null&&no(si)&&(si=null),ri!==null&&no(ri)&&(ri=null),sa.forEach(Fg),ra.forEach(Fg)}function io(e,n){e.blockedOn===n&&(e.blockedOn=null,mf||(mf=!0,s.unstable_scheduleCallback(s.unstable_NormalPriority,VS)))}var so=null;function Kg(e){so!==e&&(so=e,s.unstable_scheduleCallback(s.unstable_NormalPriority,function(){so===e&&(so=null);for(var n=0;n<e.length;n+=3){var r=e[n],l=e[n+1],u=e[n+2];if(typeof l!="function"){if(gf(l||r)===null)continue;break}var f=rs(r);f!==null&&(e.splice(n,3),n-=3,pc(f,{pending:!0,data:u,method:r.method,action:l},l,u))}}))}function la(e){function n(y){return io(y,e)}ii!==null&&io(ii,e),si!==null&&io(si,e),ri!==null&&io(ri,e),sa.forEach(n),ra.forEach(n);for(var r=0;r<ai.length;r++){var l=ai[r];l.blockedOn===e&&(l.blockedOn=null)}for(;0<ai.length&&(r=ai[0],r.blockedOn===null);)Qg(r),r.blockedOn===null&&ai.shift();if(r=(e.ownerDocument||e).$$reactFormReplay,r!=null)for(l=0;l<r.length;l+=3){var u=r[l],f=r[l+1],_=u[vt]||null;if(typeof f=="function")_||Kg(r);else if(_){var m=null;if(f&&f.hasAttribute("formAction")){if(u=f,_=f[vt]||null)m=_.formAction;else if(gf(u)!==null)continue}else m=_.action;typeof m=="function"?r[l+1]=m:(r.splice(l,3),l-=3),Kg(r)}}}function vf(e){this._internalRoot=e}ro.prototype.render=vf.prototype.render=function(e){var n=this._internalRoot;if(n===null)throw Error(a(409));var r=n.current,l=Mt();qg(r,l,e,n,null,null)},ro.prototype.unmount=vf.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var n=e.containerInfo;qg(e.current,2,null,e,null,null),Bl(),n[is]=null}};function ro(e){this._internalRoot=e}ro.prototype.unstable_scheduleHydration=function(e){if(e){var n=fd();e={blockedOn:null,target:e,priority:n};for(var r=0;r<ai.length&&n!==0&&n<ai[r].priority;r++);ai.splice(r,0,e),r===0&&Qg(e)}};var Xg=t.version;if(Xg!=="19.1.0")throw Error(a(527,Xg,"19.1.0"));H.findDOMNode=function(e){var n=e._reactInternals;if(n===void 0)throw typeof e.render=="function"?Error(a(188)):(e=Object.keys(e).join(","),Error(a(268,e)));return e=p(n),e=e!==null?g(e):null,e=e===null?null:e.stateNode,e};var GS={bundleType:0,version:"19.1.0",rendererPackageName:"react-dom",currentDispatcherRef:D,reconcilerVersion:"19.1.0"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var ao=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!ao.isDisabled&&ao.supportsFiber)try{fr=ao.inject(GS),At=ao}catch{}}return ua.createRoot=function(e,n){if(!o(e))throw Error(a(299));var r=!1,l="",u=fp,f=hp,_=dp,m=null;return n!=null&&(n.unstable_strictMode===!0&&(r=!0),n.identifierPrefix!==void 0&&(l=n.identifierPrefix),n.onUncaughtError!==void 0&&(u=n.onUncaughtError),n.onCaughtError!==void 0&&(f=n.onCaughtError),n.onRecoverableError!==void 0&&(_=n.onRecoverableError),n.unstable_transitionCallbacks!==void 0&&(m=n.unstable_transitionCallbacks)),n=Pg(e,1,!1,null,null,r,l,u,f,_,m,null),e[is]=n.current,$c(e),new vf(n)},ua.hydrateRoot=function(e,n,r){if(!o(e))throw Error(a(299));var l=!1,u="",f=fp,_=hp,m=dp,y=null,R=null;return r!=null&&(r.unstable_strictMode===!0&&(l=!0),r.identifierPrefix!==void 0&&(u=r.identifierPrefix),r.onUncaughtError!==void 0&&(f=r.onUncaughtError),r.onCaughtError!==void 0&&(_=r.onCaughtError),r.onRecoverableError!==void 0&&(m=r.onRecoverableError),r.unstable_transitionCallbacks!==void 0&&(y=r.unstable_transitionCallbacks),r.formState!==void 0&&(R=r.formState)),n=Pg(e,1,!0,n,r??null,l,u,f,_,m,y,R),n.context=Bg(null),r=n.current,l=Mt(),l=ou(l),u=Gn(l),u.callback=null,jn(r,u,l),r=l,n.current.lanes=r,dr(n,r),ln(n),e[is]=n.current,$c(e),new ro(n)},ua.version="19.1.0",ua}var rm;function eT(){if(rm)return Sf.exports;rm=1;function s(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s)}catch(t){console.error(t)}}return s(),Sf.exports=$S(),Sf.exports}var tT=eT();const nT=pv(tT);function iT({onLogin:s,onRegister:t,error:i,setError:a}){const[o,c]=ke.useState(""),[h,d]=ke.useState(""),p=async()=>{if(!o||!h){a("Please enter both email and password.");return}a(null),await t(o,h)},g=async()=>{if(!o||!h){a("Please enter both email and password.");return}a(null),await s(o,h)};return xe.jsx("div",{id:"authSection",children:xe.jsxs("div",{className:"auth-horizontal",children:[xe.jsx("input",{type:"email",id:"email",placeholder:"Email",value:o,onChange:v=>c(v.target.value)}),xe.jsx("input",{type:"password",id:"password",placeholder:"Password",value:h,onChange:v=>d(v.target.value)}),xe.jsx("button",{id:"registerBtn",className:"register-btn",onClick:p,disabled:!o||!h,children:"Register"}),xe.jsx("button",{id:"loginBtn",className:"login-btn",onClick:g,disabled:!o||!h,children:"Go"})]})})}function sT({tokens:s,buttonState:t,isButtonDataLoaded:i,onToggle:a,onLogout:o}){const[c,h]=ke.useState(!1),[d,p]=ke.useState({}),g=ke.useRef({});return ke.useEffect(()=>{if(!i)return;const v={},E={};s.forEach(b=>{v[b]=!1,E[b]=t[b]??"closed"}),p(v),g.current=E},[i,s]),ke.useEffect(()=>{i&&s.forEach(v=>{const E=t[v]??"closed",b=g.current[v];b!==void 0&&E!==b&&!d[v]&&p(x=>({...x,[v]:!0}))})},[t,i,s,d]),ke.useEffect(()=>{i&&s.forEach(v=>{const E=t[v]??"closed",b=g.current[v];E!==b&&!d[v]&&p(x=>({...x,[v]:!0}))})},[t,i,s,d]),xe.jsxs("div",{id:"controlSection",className:"control-panel",children:[xe.jsx("div",{className:"token-header",children:xe.jsx("button",{className:"plus-button",onClick:()=>h(v=>!v),children:"+"})}),xe.jsx("div",{className:"toggle-buttons",children:s.map((v,E)=>d[v]&&xe.jsxs("button",{id:`toggle-${v}`,className:`toggle-btn ${t[v]==="open"?"open":"closed"}`,onClick:()=>a(v),children:["Button ",E+1," ",t[v]==="open"?"Open":"Closed"]},v))}),xe.jsx("button",{id:"logoutBtn",onClick:o,children:"Logout"}),xe.jsx("div",{className:`token-list-container ${c?"visible":""}`,children:xe.jsx("ul",{className:"token-list",children:s.map(v=>xe.jsx("li",{children:v},v))})})]})}const rT=()=>{};var am={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gv={NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const U=function(s,t){if(!s)throw sr(t)},sr=function(s){return new Error("Firebase Database ("+gv.SDK_VERSION+") INTERNAL ASSERT FAILED: "+s)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mv=function(s){const t=[];let i=0;for(let a=0;a<s.length;a++){let o=s.charCodeAt(a);o<128?t[i++]=o:o<2048?(t[i++]=o>>6|192,t[i++]=o&63|128):(o&64512)===55296&&a+1<s.length&&(s.charCodeAt(a+1)&64512)===56320?(o=65536+((o&1023)<<10)+(s.charCodeAt(++a)&1023),t[i++]=o>>18|240,t[i++]=o>>12&63|128,t[i++]=o>>6&63|128,t[i++]=o&63|128):(t[i++]=o>>12|224,t[i++]=o>>6&63|128,t[i++]=o&63|128)}return t},aT=function(s){const t=[];let i=0,a=0;for(;i<s.length;){const o=s[i++];if(o<128)t[a++]=String.fromCharCode(o);else if(o>191&&o<224){const c=s[i++];t[a++]=String.fromCharCode((o&31)<<6|c&63)}else if(o>239&&o<365){const c=s[i++],h=s[i++],d=s[i++],p=((o&7)<<18|(c&63)<<12|(h&63)<<6|d&63)-65536;t[a++]=String.fromCharCode(55296+(p>>10)),t[a++]=String.fromCharCode(56320+(p&1023))}else{const c=s[i++],h=s[i++];t[a++]=String.fromCharCode((o&15)<<12|(c&63)<<6|h&63)}}return t.join("")},ch={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(s,t){if(!Array.isArray(s))throw Error("encodeByteArray takes an array as a parameter");this.init_();const i=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,a=[];for(let o=0;o<s.length;o+=3){const c=s[o],h=o+1<s.length,d=h?s[o+1]:0,p=o+2<s.length,g=p?s[o+2]:0,v=c>>2,E=(c&3)<<4|d>>4;let b=(d&15)<<2|g>>6,x=g&63;p||(x=64,h||(b=64)),a.push(i[v],i[E],i[b],i[x])}return a.join("")},encodeString(s,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(s):this.encodeByteArray(mv(s),t)},decodeString(s,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(s):aT(this.decodeStringToByteArray(s,t))},decodeStringToByteArray(s,t){this.init_();const i=t?this.charToByteMapWebSafe_:this.charToByteMap_,a=[];for(let o=0;o<s.length;){const c=i[s.charAt(o++)],d=o<s.length?i[s.charAt(o)]:0;++o;const g=o<s.length?i[s.charAt(o)]:64;++o;const E=o<s.length?i[s.charAt(o)]:64;if(++o,c==null||d==null||g==null||E==null)throw new lT;const b=c<<2|d>>4;if(a.push(b),g!==64){const x=d<<4&240|g>>2;if(a.push(x),E!==64){const L=g<<6&192|E;a.push(L)}}}return a},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let s=0;s<this.ENCODED_VALS.length;s++)this.byteToCharMap_[s]=this.ENCODED_VALS.charAt(s),this.charToByteMap_[this.byteToCharMap_[s]]=s,this.byteToCharMapWebSafe_[s]=this.ENCODED_VALS_WEBSAFE.charAt(s),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[s]]=s,s>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(s)]=s,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(s)]=s)}}};class lT extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const vv=function(s){const t=mv(s);return ch.encodeByteArray(t,!0)},vo=function(s){return vv(s).replace(/\./g,"")},yo=function(s){try{return ch.decodeString(s,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function oT(s){return yv(void 0,s)}function yv(s,t){if(!(t instanceof Object))return t;switch(t.constructor){case Date:const i=t;return new Date(i.getTime());case Object:s===void 0&&(s={});break;case Array:s=[];break;default:return t}for(const i in t)!t.hasOwnProperty(i)||!uT(i)||(s[i]=yv(s[i],t[i]));return s}function uT(s){return s!=="__proto__"}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cT(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fT=()=>cT().__FIREBASE_DEFAULTS__,hT=()=>{if(typeof process>"u"||typeof am>"u")return;const s=am.__FIREBASE_DEFAULTS__;if(s)return JSON.parse(s)},dT=()=>{if(typeof document>"u")return;let s;try{s=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const t=s&&yo(s[1]);return t&&JSON.parse(t)},fh=()=>{try{return rT()||fT()||hT()||dT()}catch(s){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${s}`);return}},Ev=s=>{var t,i;return(i=(t=fh())===null||t===void 0?void 0:t.emulatorHosts)===null||i===void 0?void 0:i[s]},_T=s=>{const t=Ev(s);if(!t)return;const i=t.lastIndexOf(":");if(i<=0||i+1===t.length)throw new Error(`Invalid host ${t} with no separate hostname and port!`);const a=parseInt(t.substring(i+1),10);return t[0]==="["?[t.substring(1,i-1),a]:[t.substring(0,i),a]},Sv=()=>{var s;return(s=fh())===null||s===void 0?void 0:s.config},Tv=s=>{var t;return(t=fh())===null||t===void 0?void 0:t[`_${s}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xa{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((t,i)=>{this.resolve=t,this.reject=i})}wrapCallback(t){return(i,a)=>{i?this.reject(i):this.resolve(a),typeof t=="function"&&(this.promise.catch(()=>{}),t.length===1?t(i):t(i,a))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pT(s,t){if(s.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const i={alg:"none",type:"JWT"},a=t||"demo-project",o=s.iat||0,c=s.sub||s.user_id;if(!c)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const h=Object.assign({iss:`https://securetoken.google.com/${a}`,aud:a,iat:o,exp:o+3600,auth_time:o,sub:c,user_id:c,firebase:{sign_in_provider:"custom",identities:{}}},s);return[vo(JSON.stringify(i)),vo(JSON.stringify(h)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gt(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function hh(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(gt())}function gT(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function mT(){const s=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof s=="object"&&s.id!==void 0}function bv(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function vT(){const s=gt();return s.indexOf("MSIE ")>=0||s.indexOf("Trident/")>=0}function yT(){return gv.NODE_ADMIN===!0}function ET(){try{return typeof indexedDB=="object"}catch{return!1}}function ST(){return new Promise((s,t)=>{try{let i=!0;const a="validate-browser-context-for-indexeddb-analytics-module",o=self.indexedDB.open(a);o.onsuccess=()=>{o.result.close(),i||self.indexedDB.deleteDatabase(a),s(!0)},o.onupgradeneeded=()=>{i=!1},o.onerror=()=>{var c;t(((c=o.error)===null||c===void 0?void 0:c.message)||"")}}catch(i){t(i)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const TT="FirebaseError";class Ti extends Error{constructor(t,i,a){super(i),this.code=t,this.customData=a,this.name=TT,Object.setPrototypeOf(this,Ti.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Ua.prototype.create)}}class Ua{constructor(t,i,a){this.service=t,this.serviceName=i,this.errors=a}create(t,...i){const a=i[0]||{},o=`${this.service}/${t}`,c=this.errors[t],h=c?bT(c,a):"Error",d=`${this.serviceName}: ${h} (${o}).`;return new Ti(o,d,a)}}function bT(s,t){return s.replace(CT,(i,a)=>{const o=t[a];return o!=null?String(o):`<${a}?>`})}const CT=/\{\$([^}]+)}/g;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ta(s){return JSON.parse(s)}function We(s){return JSON.stringify(s)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Cv=function(s){let t={},i={},a={},o="";try{const c=s.split(".");t=Ta(yo(c[0])||""),i=Ta(yo(c[1])||""),o=c[2],a=i.d||{},delete i.d}catch{}return{header:t,claims:i,data:a,signature:o}},AT=function(s){const t=Cv(s),i=t.claims;return!!i&&typeof i=="object"&&i.hasOwnProperty("iat")},RT=function(s){const t=Cv(s).claims;return typeof t=="object"&&t.admin===!0};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cn(s,t){return Object.prototype.hasOwnProperty.call(s,t)}function Zs(s,t){if(Object.prototype.hasOwnProperty.call(s,t))return s[t]}function Pf(s){for(const t in s)if(Object.prototype.hasOwnProperty.call(s,t))return!1;return!0}function Eo(s,t,i){const a={};for(const o in s)Object.prototype.hasOwnProperty.call(s,o)&&(a[o]=t.call(i,s[o],o,s));return a}function Fi(s,t){if(s===t)return!0;const i=Object.keys(s),a=Object.keys(t);for(const o of i){if(!a.includes(o))return!1;const c=s[o],h=t[o];if(lm(c)&&lm(h)){if(!Fi(c,h))return!1}else if(c!==h)return!1}for(const o of a)if(!i.includes(o))return!1;return!0}function lm(s){return s!==null&&typeof s=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rr(s){const t=[];for(const[i,a]of Object.entries(s))Array.isArray(a)?a.forEach(o=>{t.push(encodeURIComponent(i)+"="+encodeURIComponent(o))}):t.push(encodeURIComponent(i)+"="+encodeURIComponent(a));return t.length?"&"+t.join("&"):""}function _a(s){const t={};return s.replace(/^\?/,"").split("&").forEach(a=>{if(a){const[o,c]=a.split("=");t[decodeURIComponent(o)]=decodeURIComponent(c)}}),t}function pa(s){const t=s.indexOf("?");if(!t)return"";const i=s.indexOf("#",t);return s.substring(t,i>0?i:void 0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wT{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let t=1;t<this.blockSize;++t)this.pad_[t]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(t,i){i||(i=0);const a=this.W_;if(typeof t=="string")for(let E=0;E<16;E++)a[E]=t.charCodeAt(i)<<24|t.charCodeAt(i+1)<<16|t.charCodeAt(i+2)<<8|t.charCodeAt(i+3),i+=4;else for(let E=0;E<16;E++)a[E]=t[i]<<24|t[i+1]<<16|t[i+2]<<8|t[i+3],i+=4;for(let E=16;E<80;E++){const b=a[E-3]^a[E-8]^a[E-14]^a[E-16];a[E]=(b<<1|b>>>31)&4294967295}let o=this.chain_[0],c=this.chain_[1],h=this.chain_[2],d=this.chain_[3],p=this.chain_[4],g,v;for(let E=0;E<80;E++){E<40?E<20?(g=d^c&(h^d),v=1518500249):(g=c^h^d,v=1859775393):E<60?(g=c&h|d&(c|h),v=2400959708):(g=c^h^d,v=3395469782);const b=(o<<5|o>>>27)+g+p+v+a[E]&4294967295;p=d,d=h,h=(c<<30|c>>>2)&4294967295,c=o,o=b}this.chain_[0]=this.chain_[0]+o&4294967295,this.chain_[1]=this.chain_[1]+c&4294967295,this.chain_[2]=this.chain_[2]+h&4294967295,this.chain_[3]=this.chain_[3]+d&4294967295,this.chain_[4]=this.chain_[4]+p&4294967295}update(t,i){if(t==null)return;i===void 0&&(i=t.length);const a=i-this.blockSize;let o=0;const c=this.buf_;let h=this.inbuf_;for(;o<i;){if(h===0)for(;o<=a;)this.compress_(t,o),o+=this.blockSize;if(typeof t=="string"){for(;o<i;)if(c[h]=t.charCodeAt(o),++h,++o,h===this.blockSize){this.compress_(c),h=0;break}}else for(;o<i;)if(c[h]=t[o],++h,++o,h===this.blockSize){this.compress_(c),h=0;break}}this.inbuf_=h,this.total_+=i}digest(){const t=[];let i=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let o=this.blockSize-1;o>=56;o--)this.buf_[o]=i&255,i/=256;this.compress_(this.buf_);let a=0;for(let o=0;o<5;o++)for(let c=24;c>=0;c-=8)t[a]=this.chain_[o]>>c&255,++a;return t}}function NT(s,t){const i=new OT(s,t);return i.subscribe.bind(i)}class OT{constructor(t,i){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=i,this.task.then(()=>{t(this)}).catch(a=>{this.error(a)})}next(t){this.forEachObserver(i=>{i.next(t)})}error(t){this.forEachObserver(i=>{i.error(t)}),this.close(t)}complete(){this.forEachObserver(t=>{t.complete()}),this.close()}subscribe(t,i,a){let o;if(t===void 0&&i===void 0&&a===void 0)throw new Error("Missing Observer.");DT(t,["next","error","complete"])?o=t:o={next:t,error:i,complete:a},o.next===void 0&&(o.next=Af),o.error===void 0&&(o.error=Af),o.complete===void 0&&(o.complete=Af);const c=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?o.error(this.finalError):o.complete()}catch{}}),this.observers.push(o),c}unsubscribeOne(t){this.observers===void 0||this.observers[t]===void 0||(delete this.observers[t],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(t){if(!this.finalized)for(let i=0;i<this.observers.length;i++)this.sendOne(i,t)}sendOne(t,i){this.task.then(()=>{if(this.observers!==void 0&&this.observers[t]!==void 0)try{i(this.observers[t])}catch(a){typeof console<"u"&&console.error&&console.error(a)}})}close(t){this.finalized||(this.finalized=!0,t!==void 0&&(this.finalError=t),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function DT(s,t){if(typeof s!="object"||s===null)return!1;for(const i of t)if(i in s&&typeof s[i]=="function")return!0;return!1}function Af(){}function qo(s,t){return`${s} failed: ${t} argument `}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const IT=function(s){const t=[];let i=0;for(let a=0;a<s.length;a++){let o=s.charCodeAt(a);if(o>=55296&&o<=56319){const c=o-55296;a++,U(a<s.length,"Surrogate pair missing trail surrogate.");const h=s.charCodeAt(a)-56320;o=65536+(c<<10)+h}o<128?t[i++]=o:o<2048?(t[i++]=o>>6|192,t[i++]=o&63|128):o<65536?(t[i++]=o>>12|224,t[i++]=o>>6&63|128,t[i++]=o&63|128):(t[i++]=o>>18|240,t[i++]=o>>12&63|128,t[i++]=o>>6&63|128,t[i++]=o&63|128)}return t},Vo=function(s){let t=0;for(let i=0;i<s.length;i++){const a=s.charCodeAt(i);a<128?t++:a<2048?t+=2:a>=55296&&a<=56319?(t+=4,i++):t+=3}return t};/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mt(s){return s&&s._delegate?s._delegate:s}class Ki{constructor(t,i,a){this.name=t,this.instanceFactory=i,this.type=a,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ji="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class MT{constructor(t,i){this.name=t,this.container=i,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const i=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(i)){const a=new xa;if(this.instancesDeferred.set(i,a),this.isInitialized(i)||this.shouldAutoInitialize())try{const o=this.getOrInitializeService({instanceIdentifier:i});o&&a.resolve(o)}catch{}}return this.instancesDeferred.get(i).promise}getImmediate(t){var i;const a=this.normalizeInstanceIdentifier(t==null?void 0:t.identifier),o=(i=t==null?void 0:t.optional)!==null&&i!==void 0?i:!1;if(this.isInitialized(a)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:a})}catch(c){if(o)return null;throw c}else{if(o)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,!!this.shouldAutoInitialize()){if(xT(t))try{this.getOrInitializeService({instanceIdentifier:ji})}catch{}for(const[i,a]of this.instancesDeferred.entries()){const o=this.normalizeInstanceIdentifier(i);try{const c=this.getOrInitializeService({instanceIdentifier:o});a.resolve(c)}catch{}}}}clearInstance(t=ji){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter(i=>"INTERNAL"in i).map(i=>i.INTERNAL.delete()),...t.filter(i=>"_delete"in i).map(i=>i._delete())])}isComponentSet(){return this.component!=null}isInitialized(t=ji){return this.instances.has(t)}getOptions(t=ji){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:i={}}=t,a=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(a))throw Error(`${this.name}(${a}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const o=this.getOrInitializeService({instanceIdentifier:a,options:i});for(const[c,h]of this.instancesDeferred.entries()){const d=this.normalizeInstanceIdentifier(c);a===d&&h.resolve(o)}return o}onInit(t,i){var a;const o=this.normalizeInstanceIdentifier(i),c=(a=this.onInitCallbacks.get(o))!==null&&a!==void 0?a:new Set;c.add(t),this.onInitCallbacks.set(o,c);const h=this.instances.get(o);return h&&t(h,o),()=>{c.delete(t)}}invokeOnInitCallbacks(t,i){const a=this.onInitCallbacks.get(i);if(a)for(const o of a)try{o(t,i)}catch{}}getOrInitializeService({instanceIdentifier:t,options:i={}}){let a=this.instances.get(t);if(!a&&this.component&&(a=this.component.instanceFactory(this.container,{instanceIdentifier:kT(t),options:i}),this.instances.set(t,a),this.instancesOptions.set(t,i),this.invokeOnInitCallbacks(a,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,a)}catch{}return a||null}normalizeInstanceIdentifier(t=ji){return this.component?this.component.multipleInstances?t:ji:t}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function kT(s){return s===ji?void 0:s}function xT(s){return s.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class UT{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const i=this.getProvider(t.name);if(i.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);i.setComponent(t)}addOrOverwriteComponent(t){this.getProvider(t.name).isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const i=new MT(t,this);return this.providers.set(t,i),i}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Ee;(function(s){s[s.DEBUG=0]="DEBUG",s[s.VERBOSE=1]="VERBOSE",s[s.INFO=2]="INFO",s[s.WARN=3]="WARN",s[s.ERROR=4]="ERROR",s[s.SILENT=5]="SILENT"})(Ee||(Ee={}));const LT={debug:Ee.DEBUG,verbose:Ee.VERBOSE,info:Ee.INFO,warn:Ee.WARN,error:Ee.ERROR,silent:Ee.SILENT},zT=Ee.INFO,HT={[Ee.DEBUG]:"log",[Ee.VERBOSE]:"log",[Ee.INFO]:"info",[Ee.WARN]:"warn",[Ee.ERROR]:"error"},PT=(s,t,...i)=>{if(t<s.logLevel)return;const a=new Date().toISOString(),o=HT[t];if(o)console[o](`[${a}]  ${s.name}:`,...i);else throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`)};class dh{constructor(t){this.name=t,this._logLevel=zT,this._logHandler=PT,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in Ee))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel=typeof t=="string"?LT[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if(typeof t!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,Ee.DEBUG,...t),this._logHandler(this,Ee.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,Ee.VERBOSE,...t),this._logHandler(this,Ee.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,Ee.INFO,...t),this._logHandler(this,Ee.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,Ee.WARN,...t),this._logHandler(this,Ee.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,Ee.ERROR,...t),this._logHandler(this,Ee.ERROR,...t)}}const BT=(s,t)=>t.some(i=>s instanceof i);let om,um;function qT(){return om||(om=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function VT(){return um||(um=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Av=new WeakMap,Bf=new WeakMap,Rv=new WeakMap,Rf=new WeakMap,_h=new WeakMap;function GT(s){const t=new Promise((i,a)=>{const o=()=>{s.removeEventListener("success",c),s.removeEventListener("error",h)},c=()=>{i(_i(s.result)),o()},h=()=>{a(s.error),o()};s.addEventListener("success",c),s.addEventListener("error",h)});return t.then(i=>{i instanceof IDBCursor&&Av.set(i,s)}).catch(()=>{}),_h.set(t,s),t}function jT(s){if(Bf.has(s))return;const t=new Promise((i,a)=>{const o=()=>{s.removeEventListener("complete",c),s.removeEventListener("error",h),s.removeEventListener("abort",h)},c=()=>{i(),o()},h=()=>{a(s.error||new DOMException("AbortError","AbortError")),o()};s.addEventListener("complete",c),s.addEventListener("error",h),s.addEventListener("abort",h)});Bf.set(s,t)}let qf={get(s,t,i){if(s instanceof IDBTransaction){if(t==="done")return Bf.get(s);if(t==="objectStoreNames")return s.objectStoreNames||Rv.get(s);if(t==="store")return i.objectStoreNames[1]?void 0:i.objectStore(i.objectStoreNames[0])}return _i(s[t])},set(s,t,i){return s[t]=i,!0},has(s,t){return s instanceof IDBTransaction&&(t==="done"||t==="store")?!0:t in s}};function YT(s){qf=s(qf)}function QT(s){return s===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(t,...i){const a=s.call(wf(this),t,...i);return Rv.set(a,t.sort?t.sort():[t]),_i(a)}:VT().includes(s)?function(...t){return s.apply(wf(this),t),_i(Av.get(this))}:function(...t){return _i(s.apply(wf(this),t))}}function FT(s){return typeof s=="function"?QT(s):(s instanceof IDBTransaction&&jT(s),BT(s,qT())?new Proxy(s,qf):s)}function _i(s){if(s instanceof IDBRequest)return GT(s);if(Rf.has(s))return Rf.get(s);const t=FT(s);return t!==s&&(Rf.set(s,t),_h.set(t,s)),t}const wf=s=>_h.get(s);function KT(s,t,{blocked:i,upgrade:a,blocking:o,terminated:c}={}){const h=indexedDB.open(s,t),d=_i(h);return a&&h.addEventListener("upgradeneeded",p=>{a(_i(h.result),p.oldVersion,p.newVersion,_i(h.transaction),p)}),i&&h.addEventListener("blocked",p=>i(p.oldVersion,p.newVersion,p)),d.then(p=>{c&&p.addEventListener("close",()=>c()),o&&p.addEventListener("versionchange",g=>o(g.oldVersion,g.newVersion,g))}).catch(()=>{}),d}const XT=["get","getKey","getAll","getAllKeys","count"],WT=["put","add","delete","clear"],Nf=new Map;function cm(s,t){if(!(s instanceof IDBDatabase&&!(t in s)&&typeof t=="string"))return;if(Nf.get(t))return Nf.get(t);const i=t.replace(/FromIndex$/,""),a=t!==i,o=WT.includes(i);if(!(i in(a?IDBIndex:IDBObjectStore).prototype)||!(o||XT.includes(i)))return;const c=async function(h,...d){const p=this.transaction(h,o?"readwrite":"readonly");let g=p.store;return a&&(g=g.index(d.shift())),(await Promise.all([g[i](...d),o&&p.done]))[0]};return Nf.set(t,c),c}YT(s=>({...s,get:(t,i,a)=>cm(t,i)||s.get(t,i,a),has:(t,i)=>!!cm(t,i)||s.has(t,i)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ZT{constructor(t){this.container=t}getPlatformInfoString(){return this.container.getProviders().map(i=>{if(JT(i)){const a=i.getImmediate();return`${a.library}/${a.version}`}else return null}).filter(i=>i).join(" ")}}function JT(s){const t=s.getComponent();return(t==null?void 0:t.type)==="VERSION"}const Vf="@firebase/app",fm="0.11.4";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kn=new dh("@firebase/app"),$T="@firebase/app-compat",eb="@firebase/analytics-compat",tb="@firebase/analytics",nb="@firebase/app-check-compat",ib="@firebase/app-check",sb="@firebase/auth",rb="@firebase/auth-compat",ab="@firebase/database",lb="@firebase/data-connect",ob="@firebase/database-compat",ub="@firebase/functions",cb="@firebase/functions-compat",fb="@firebase/installations",hb="@firebase/installations-compat",db="@firebase/messaging",_b="@firebase/messaging-compat",pb="@firebase/performance",gb="@firebase/performance-compat",mb="@firebase/remote-config",vb="@firebase/remote-config-compat",yb="@firebase/storage",Eb="@firebase/storage-compat",Sb="@firebase/firestore",Tb="@firebase/vertexai",bb="@firebase/firestore-compat",Cb="firebase",Ab="11.6.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gf="[DEFAULT]",Rb={[Vf]:"fire-core",[$T]:"fire-core-compat",[tb]:"fire-analytics",[eb]:"fire-analytics-compat",[ib]:"fire-app-check",[nb]:"fire-app-check-compat",[sb]:"fire-auth",[rb]:"fire-auth-compat",[ab]:"fire-rtdb",[lb]:"fire-data-connect",[ob]:"fire-rtdb-compat",[ub]:"fire-fn",[cb]:"fire-fn-compat",[fb]:"fire-iid",[hb]:"fire-iid-compat",[db]:"fire-fcm",[_b]:"fire-fcm-compat",[pb]:"fire-perf",[gb]:"fire-perf-compat",[mb]:"fire-rc",[vb]:"fire-rc-compat",[yb]:"fire-gcs",[Eb]:"fire-gcs-compat",[Sb]:"fire-fst",[bb]:"fire-fst-compat",[Tb]:"fire-vertex","fire-js":"fire-js",[Cb]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const So=new Map,wb=new Map,jf=new Map;function hm(s,t){try{s.container.addComponent(t)}catch(i){kn.debug(`Component ${t.name} failed to register with FirebaseApp ${s.name}`,i)}}function Js(s){const t=s.name;if(jf.has(t))return kn.debug(`There were multiple attempts to register component ${t}.`),!1;jf.set(t,s);for(const i of So.values())hm(i,s);for(const i of wb.values())hm(i,s);return!0}function ph(s,t){const i=s.container.getProvider("heartbeat").getImmediate({optional:!0});return i&&i.triggerHeartbeat(),s.container.getProvider(t)}function Gt(s){return s==null?!1:s.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Nb={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},pi=new Ua("app","Firebase",Nb);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ob{constructor(t,i,a){this._isDeleted=!1,this._options=Object.assign({},t),this._config=Object.assign({},i),this._name=i.name,this._automaticDataCollectionEnabled=i.automaticDataCollectionEnabled,this._container=a,this.container.addComponent(new Ki("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw pi.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ar=Ab;function wv(s,t={}){let i=s;typeof t!="object"&&(t={name:t});const a=Object.assign({name:Gf,automaticDataCollectionEnabled:!1},t),o=a.name;if(typeof o!="string"||!o)throw pi.create("bad-app-name",{appName:String(o)});if(i||(i=Sv()),!i)throw pi.create("no-options");const c=So.get(o);if(c){if(Fi(i,c.options)&&Fi(a,c.config))return c;throw pi.create("duplicate-app",{appName:o})}const h=new UT(o);for(const p of jf.values())h.addComponent(p);const d=new Ob(i,a,h);return So.set(o,d),d}function Nv(s=Gf){const t=So.get(s);if(!t&&s===Gf&&Sv())return wv();if(!t)throw pi.create("no-app",{appName:s});return t}function gi(s,t,i){var a;let o=(a=Rb[s])!==null&&a!==void 0?a:s;i&&(o+=`-${i}`);const c=o.match(/\s|\//),h=t.match(/\s|\//);if(c||h){const d=[`Unable to register library "${o}" with version "${t}":`];c&&d.push(`library name "${o}" contains illegal characters (whitespace or "/")`),c&&h&&d.push("and"),h&&d.push(`version name "${t}" contains illegal characters (whitespace or "/")`),kn.warn(d.join(" "));return}Js(new Ki(`${o}-version`,()=>({library:o,version:t}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Db="firebase-heartbeat-database",Ib=1,ba="firebase-heartbeat-store";let Of=null;function Ov(){return Of||(Of=KT(Db,Ib,{upgrade:(s,t)=>{switch(t){case 0:try{s.createObjectStore(ba)}catch(i){console.warn(i)}}}}).catch(s=>{throw pi.create("idb-open",{originalErrorMessage:s.message})})),Of}async function Mb(s){try{const i=(await Ov()).transaction(ba),a=await i.objectStore(ba).get(Dv(s));return await i.done,a}catch(t){if(t instanceof Ti)kn.warn(t.message);else{const i=pi.create("idb-get",{originalErrorMessage:t==null?void 0:t.message});kn.warn(i.message)}}}async function dm(s,t){try{const a=(await Ov()).transaction(ba,"readwrite");await a.objectStore(ba).put(t,Dv(s)),await a.done}catch(i){if(i instanceof Ti)kn.warn(i.message);else{const a=pi.create("idb-set",{originalErrorMessage:i==null?void 0:i.message});kn.warn(a.message)}}}function Dv(s){return`${s.name}!${s.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kb=1024,xb=30;class Ub{constructor(t){this.container=t,this._heartbeatsCache=null;const i=this.container.getProvider("app").getImmediate();this._storage=new zb(i),this._heartbeatsCachePromise=this._storage.read().then(a=>(this._heartbeatsCache=a,a))}async triggerHeartbeat(){var t,i;try{const o=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),c=_m();if(((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((i=this._heartbeatsCache)===null||i===void 0?void 0:i.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===c||this._heartbeatsCache.heartbeats.some(h=>h.date===c))return;if(this._heartbeatsCache.heartbeats.push({date:c,agent:o}),this._heartbeatsCache.heartbeats.length>xb){const h=Hb(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(h,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(a){kn.warn(a)}}async getHeartbeatsHeader(){var t;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const i=_m(),{heartbeatsToSend:a,unsentEntries:o}=Lb(this._heartbeatsCache.heartbeats),c=vo(JSON.stringify({version:2,heartbeats:a}));return this._heartbeatsCache.lastSentHeartbeatDate=i,o.length>0?(this._heartbeatsCache.heartbeats=o,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),c}catch(i){return kn.warn(i),""}}}function _m(){return new Date().toISOString().substring(0,10)}function Lb(s,t=kb){const i=[];let a=s.slice();for(const o of s){const c=i.find(h=>h.agent===o.agent);if(c){if(c.dates.push(o.date),pm(i)>t){c.dates.pop();break}}else if(i.push({agent:o.agent,dates:[o.date]}),pm(i)>t){i.pop();break}a=a.slice(1)}return{heartbeatsToSend:i,unsentEntries:a}}class zb{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return ET()?ST().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const i=await Mb(this.app);return i!=null&&i.heartbeats?i:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(t){var i;if(await this._canUseIndexedDBPromise){const o=await this.read();return dm(this.app,{lastSentHeartbeatDate:(i=t.lastSentHeartbeatDate)!==null&&i!==void 0?i:o.lastSentHeartbeatDate,heartbeats:t.heartbeats})}else return}async add(t){var i;if(await this._canUseIndexedDBPromise){const o=await this.read();return dm(this.app,{lastSentHeartbeatDate:(i=t.lastSentHeartbeatDate)!==null&&i!==void 0?i:o.lastSentHeartbeatDate,heartbeats:[...o.heartbeats,...t.heartbeats]})}else return}}function pm(s){return vo(JSON.stringify({version:2,heartbeats:s})).length}function Hb(s){if(s.length===0)return-1;let t=0,i=s[0].date;for(let a=1;a<s.length;a++)s[a].date<i&&(i=s[a].date,t=a);return t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pb(s){Js(new Ki("platform-logger",t=>new ZT(t),"PRIVATE")),Js(new Ki("heartbeat",t=>new Ub(t),"PRIVATE")),gi(Vf,fm,s),gi(Vf,fm,"esm2017"),gi("fire-js","")}Pb("");function gh(s,t){var i={};for(var a in s)Object.prototype.hasOwnProperty.call(s,a)&&t.indexOf(a)<0&&(i[a]=s[a]);if(s!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,a=Object.getOwnPropertySymbols(s);o<a.length;o++)t.indexOf(a[o])<0&&Object.prototype.propertyIsEnumerable.call(s,a[o])&&(i[a[o]]=s[a[o]]);return i}function Iv(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const Bb=Iv,Mv=new Ua("auth","Firebase",Iv());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const To=new dh("@firebase/auth");function qb(s,...t){To.logLevel<=Ee.WARN&&To.warn(`Auth (${ar}): ${s}`,...t)}function ho(s,...t){To.logLevel<=Ee.ERROR&&To.error(`Auth (${ar}): ${s}`,...t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function en(s,...t){throw mh(s,...t)}function on(s,...t){return mh(s,...t)}function kv(s,t,i){const a=Object.assign(Object.assign({},Bb()),{[t]:i});return new Ua("auth","Firebase",a).create(t,{appName:s.name})}function In(s){return kv(s,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function mh(s,...t){if(typeof s!="string"){const i=t[0],a=[...t.slice(1)];return a[0]&&(a[0].appName=s.name),s._errorFactory.create(i,...a)}return Mv.create(s,...t)}function Q(s,t,...i){if(!s)throw mh(t,...i)}function Nn(s){const t="INTERNAL ASSERTION FAILED: "+s;throw ho(t),new Error(t)}function xn(s,t){s||Nn(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Yf(){var s;return typeof self<"u"&&((s=self.location)===null||s===void 0?void 0:s.href)||""}function Vb(){return gm()==="http:"||gm()==="https:"}function gm(){var s;return typeof self<"u"&&((s=self.location)===null||s===void 0?void 0:s.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gb(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(Vb()||mT()||"connection"in navigator)?navigator.onLine:!0}function jb(){if(typeof navigator>"u")return null;const s=navigator;return s.languages&&s.languages[0]||s.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class La{constructor(t,i){this.shortDelay=t,this.longDelay=i,xn(i>t,"Short delay should be less than long delay!"),this.isMobile=hh()||bv()}get(){return Gb()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vh(s,t){xn(s.emulator,"Emulator should always be set here");const{url:i}=s.emulator;return t?`${i}${t.startsWith("/")?t.slice(1):t}`:i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xv{static initialize(t,i,a){this.fetchImpl=t,i&&(this.headersImpl=i),a&&(this.responseImpl=a)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Nn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Nn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Nn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yb={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qb=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],Fb=new La(3e4,6e4);function bi(s,t){return s.tenantId&&!t.tenantId?Object.assign(Object.assign({},t),{tenantId:s.tenantId}):t}async function Ci(s,t,i,a,o={}){return Uv(s,o,async()=>{let c={},h={};a&&(t==="GET"?h=a:c={body:JSON.stringify(a)});const d=rr(Object.assign({key:s.config.apiKey},h)).slice(1),p=await s._getAdditionalHeaders();p["Content-Type"]="application/json",s.languageCode&&(p["X-Firebase-Locale"]=s.languageCode);const g=Object.assign({method:t,headers:p},c);return gT()||(g.referrerPolicy="no-referrer"),xv.fetch()(await Lv(s,s.config.apiHost,i,d),g)})}async function Uv(s,t,i){s._canInitEmulator=!1;const a=Object.assign(Object.assign({},Yb),t);try{const o=new Xb(s),c=await Promise.race([i(),o.promise]);o.clearNetworkTimeout();const h=await c.json();if("needConfirmation"in h)throw lo(s,"account-exists-with-different-credential",h);if(c.ok&&!("errorMessage"in h))return h;{const d=c.ok?h.errorMessage:h.error.message,[p,g]=d.split(" : ");if(p==="FEDERATED_USER_ID_ALREADY_LINKED")throw lo(s,"credential-already-in-use",h);if(p==="EMAIL_EXISTS")throw lo(s,"email-already-in-use",h);if(p==="USER_DISABLED")throw lo(s,"user-disabled",h);const v=a[p]||p.toLowerCase().replace(/[_\s]+/g,"-");if(g)throw kv(s,v,g);en(s,v)}}catch(o){if(o instanceof Ti)throw o;en(s,"network-request-failed",{message:String(o)})}}async function za(s,t,i,a,o={}){const c=await Ci(s,t,i,a,o);return"mfaPendingCredential"in c&&en(s,"multi-factor-auth-required",{_serverResponse:c}),c}async function Lv(s,t,i,a){const o=`${t}${i}?${a}`,c=s,h=c.config.emulator?vh(s.config,o):`${s.config.apiScheme}://${o}`;return Qb.includes(i)&&(await c._persistenceManagerAvailable,c._getPersistenceType()==="COOKIE")?c._getPersistence()._getFinalTarget(h).toString():h}function Kb(s){switch(s){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class Xb{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(t){this.auth=t,this.timer=null,this.promise=new Promise((i,a)=>{this.timer=setTimeout(()=>a(on(this.auth,"network-request-failed")),Fb.get())})}}function lo(s,t,i){const a={appName:s.name};i.email&&(a.email=i.email),i.phoneNumber&&(a.phoneNumber=i.phoneNumber);const o=on(s,t,a);return o.customData._tokenResponse=i,o}function mm(s){return s!==void 0&&s.enterprise!==void 0}class Wb{constructor(t){if(this.siteKey="",this.recaptchaEnforcementState=[],t.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=t.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=t.recaptchaEnforcementState}getProviderEnforcementState(t){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const i of this.recaptchaEnforcementState)if(i.provider&&i.provider===t)return Kb(i.enforcementState);return null}isProviderEnabled(t){return this.getProviderEnforcementState(t)==="ENFORCE"||this.getProviderEnforcementState(t)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function Zb(s,t){return Ci(s,"GET","/v2/recaptchaConfig",bi(s,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Jb(s,t){return Ci(s,"POST","/v1/accounts:delete",t)}async function bo(s,t){return Ci(s,"POST","/v1/accounts:lookup",t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ga(s){if(s)try{const t=new Date(Number(s));if(!isNaN(t.getTime()))return t.toUTCString()}catch{}}async function $b(s,t=!1){const i=mt(s),a=await i.getIdToken(t),o=yh(a);Q(o&&o.exp&&o.auth_time&&o.iat,i.auth,"internal-error");const c=typeof o.firebase=="object"?o.firebase:void 0,h=c==null?void 0:c.sign_in_provider;return{claims:o,token:a,authTime:ga(Df(o.auth_time)),issuedAtTime:ga(Df(o.iat)),expirationTime:ga(Df(o.exp)),signInProvider:h||null,signInSecondFactor:(c==null?void 0:c.sign_in_second_factor)||null}}function Df(s){return Number(s)*1e3}function yh(s){const[t,i,a]=s.split(".");if(t===void 0||i===void 0||a===void 0)return ho("JWT malformed, contained fewer than 3 sections"),null;try{const o=yo(i);return o?JSON.parse(o):(ho("Failed to decode base64 JWT payload"),null)}catch(o){return ho("Caught error parsing JWT payload as JSON",o==null?void 0:o.toString()),null}}function vm(s){const t=yh(s);return Q(t,"internal-error"),Q(typeof t.exp<"u","internal-error"),Q(typeof t.iat<"u","internal-error"),Number(t.exp)-Number(t.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ca(s,t,i=!1){if(i)return t;try{return await t}catch(a){throw a instanceof Ti&&eC(a)&&s.auth.currentUser===s&&await s.auth.signOut(),a}}function eC({code:s}){return s==="auth/user-disabled"||s==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tC{constructor(t){this.user=t,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(t){var i;if(t){const a=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),a}else{this.errorBackoff=3e4;const o=((i=this.user.stsTokenManager.expirationTime)!==null&&i!==void 0?i:0)-Date.now()-3e5;return Math.max(0,o)}}schedule(t=!1){if(!this.isRunning)return;const i=this.getInterval(t);this.timerId=setTimeout(async()=>{await this.iteration()},i)}async iteration(){try{await this.user.getIdToken(!0)}catch(t){(t==null?void 0:t.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qf{constructor(t,i){this.createdAt=t,this.lastLoginAt=i,this._initializeTime()}_initializeTime(){this.lastSignInTime=ga(this.lastLoginAt),this.creationTime=ga(this.createdAt)}_copy(t){this.createdAt=t.createdAt,this.lastLoginAt=t.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Co(s){var t;const i=s.auth,a=await s.getIdToken(),o=await Ca(s,bo(i,{idToken:a}));Q(o==null?void 0:o.users.length,i,"internal-error");const c=o.users[0];s._notifyReloadListener(c);const h=!((t=c.providerUserInfo)===null||t===void 0)&&t.length?zv(c.providerUserInfo):[],d=iC(s.providerData,h),p=s.isAnonymous,g=!(s.email&&c.passwordHash)&&!(d!=null&&d.length),v=p?g:!1,E={uid:c.localId,displayName:c.displayName||null,photoURL:c.photoUrl||null,email:c.email||null,emailVerified:c.emailVerified||!1,phoneNumber:c.phoneNumber||null,tenantId:c.tenantId||null,providerData:d,metadata:new Qf(c.createdAt,c.lastLoginAt),isAnonymous:v};Object.assign(s,E)}async function nC(s){const t=mt(s);await Co(t),await t.auth._persistUserIfCurrent(t),t.auth._notifyListenersIfCurrent(t)}function iC(s,t){return[...s.filter(a=>!t.some(o=>o.providerId===a.providerId)),...t]}function zv(s){return s.map(t=>{var{providerId:i}=t,a=gh(t,["providerId"]);return{providerId:i,uid:a.rawId||"",displayName:a.displayName||null,email:a.email||null,phoneNumber:a.phoneNumber||null,photoURL:a.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function sC(s,t){const i=await Uv(s,{},async()=>{const a=rr({grant_type:"refresh_token",refresh_token:t}).slice(1),{tokenApiHost:o,apiKey:c}=s.config,h=await Lv(s,o,"/v1/token",`key=${c}`),d=await s._getAdditionalHeaders();return d["Content-Type"]="application/x-www-form-urlencoded",xv.fetch()(h,{method:"POST",headers:d,body:a})});return{accessToken:i.access_token,expiresIn:i.expires_in,refreshToken:i.refresh_token}}async function rC(s,t){return Ci(s,"POST","/v2/accounts:revokeToken",bi(s,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qs{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(t){Q(t.idToken,"internal-error"),Q(typeof t.idToken<"u","internal-error"),Q(typeof t.refreshToken<"u","internal-error");const i="expiresIn"in t&&typeof t.expiresIn<"u"?Number(t.expiresIn):vm(t.idToken);this.updateTokensAndExpiration(t.idToken,t.refreshToken,i)}updateFromIdToken(t){Q(t.length!==0,"internal-error");const i=vm(t);this.updateTokensAndExpiration(t,null,i)}async getToken(t,i=!1){return!i&&this.accessToken&&!this.isExpired?this.accessToken:(Q(this.refreshToken,t,"user-token-expired"),this.refreshToken?(await this.refresh(t,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(t,i){const{accessToken:a,refreshToken:o,expiresIn:c}=await sC(t,i);this.updateTokensAndExpiration(a,o,Number(c))}updateTokensAndExpiration(t,i,a){this.refreshToken=i||null,this.accessToken=t||null,this.expirationTime=Date.now()+a*1e3}static fromJSON(t,i){const{refreshToken:a,accessToken:o,expirationTime:c}=i,h=new Qs;return a&&(Q(typeof a=="string","internal-error",{appName:t}),h.refreshToken=a),o&&(Q(typeof o=="string","internal-error",{appName:t}),h.accessToken=o),c&&(Q(typeof c=="number","internal-error",{appName:t}),h.expirationTime=c),h}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(t){this.accessToken=t.accessToken,this.refreshToken=t.refreshToken,this.expirationTime=t.expirationTime}_clone(){return Object.assign(new Qs,this.toJSON())}_performRefresh(){return Nn("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function oi(s,t){Q(typeof s=="string"||typeof s>"u","internal-error",{appName:t})}class Zt{constructor(t){var{uid:i,auth:a,stsTokenManager:o}=t,c=gh(t,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new tC(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=i,this.auth=a,this.stsTokenManager=o,this.accessToken=o.accessToken,this.displayName=c.displayName||null,this.email=c.email||null,this.emailVerified=c.emailVerified||!1,this.phoneNumber=c.phoneNumber||null,this.photoURL=c.photoURL||null,this.isAnonymous=c.isAnonymous||!1,this.tenantId=c.tenantId||null,this.providerData=c.providerData?[...c.providerData]:[],this.metadata=new Qf(c.createdAt||void 0,c.lastLoginAt||void 0)}async getIdToken(t){const i=await Ca(this,this.stsTokenManager.getToken(this.auth,t));return Q(i,this.auth,"internal-error"),this.accessToken!==i&&(this.accessToken=i,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),i}getIdTokenResult(t){return $b(this,t)}reload(){return nC(this)}_assign(t){this!==t&&(Q(this.uid===t.uid,this.auth,"internal-error"),this.displayName=t.displayName,this.photoURL=t.photoURL,this.email=t.email,this.emailVerified=t.emailVerified,this.phoneNumber=t.phoneNumber,this.isAnonymous=t.isAnonymous,this.tenantId=t.tenantId,this.providerData=t.providerData.map(i=>Object.assign({},i)),this.metadata._copy(t.metadata),this.stsTokenManager._assign(t.stsTokenManager))}_clone(t){const i=new Zt(Object.assign(Object.assign({},this),{auth:t,stsTokenManager:this.stsTokenManager._clone()}));return i.metadata._copy(this.metadata),i}_onReload(t){Q(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=t,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(t){this.reloadListener?this.reloadListener(t):this.reloadUserInfo=t}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(t,i=!1){let a=!1;t.idToken&&t.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(t),a=!0),i&&await Co(this),await this.auth._persistUserIfCurrent(this),a&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Gt(this.auth.app))return Promise.reject(In(this.auth));const t=await this.getIdToken();return await Ca(this,Jb(this.auth,{idToken:t})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(t=>Object.assign({},t)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(t,i){var a,o,c,h,d,p,g,v;const E=(a=i.displayName)!==null&&a!==void 0?a:void 0,b=(o=i.email)!==null&&o!==void 0?o:void 0,x=(c=i.phoneNumber)!==null&&c!==void 0?c:void 0,L=(h=i.photoURL)!==null&&h!==void 0?h:void 0,X=(d=i.tenantId)!==null&&d!==void 0?d:void 0,se=(p=i._redirectEventId)!==null&&p!==void 0?p:void 0,je=(g=i.createdAt)!==null&&g!==void 0?g:void 0,Ye=(v=i.lastLoginAt)!==null&&v!==void 0?v:void 0,{uid:Ae,emailVerified:Ze,isAnonymous:ee,providerData:Qe,stsTokenManager:Z}=i;Q(Ae&&Z,t,"internal-error");const re=Qs.fromJSON(this.name,Z);Q(typeof Ae=="string",t,"internal-error"),oi(E,t.name),oi(b,t.name),Q(typeof Ze=="boolean",t,"internal-error"),Q(typeof ee=="boolean",t,"internal-error"),oi(x,t.name),oi(L,t.name),oi(X,t.name),oi(se,t.name),oi(je,t.name),oi(Ye,t.name);const ae=new Zt({uid:Ae,auth:t,email:b,emailVerified:Ze,displayName:E,isAnonymous:ee,photoURL:L,phoneNumber:x,tenantId:X,stsTokenManager:re,createdAt:je,lastLoginAt:Ye});return Qe&&Array.isArray(Qe)&&(ae.providerData=Qe.map(Te=>Object.assign({},Te))),se&&(ae._redirectEventId=se),ae}static async _fromIdTokenResponse(t,i,a=!1){const o=new Qs;o.updateFromServerResponse(i);const c=new Zt({uid:i.localId,auth:t,stsTokenManager:o,isAnonymous:a});return await Co(c),c}static async _fromGetAccountInfoResponse(t,i,a){const o=i.users[0];Q(o.localId!==void 0,"internal-error");const c=o.providerUserInfo!==void 0?zv(o.providerUserInfo):[],h=!(o.email&&o.passwordHash)&&!(c!=null&&c.length),d=new Qs;d.updateFromIdToken(a);const p=new Zt({uid:o.localId,auth:t,stsTokenManager:d,isAnonymous:h}),g={uid:o.localId,displayName:o.displayName||null,photoURL:o.photoUrl||null,email:o.email||null,emailVerified:o.emailVerified||!1,phoneNumber:o.phoneNumber||null,tenantId:o.tenantId||null,providerData:c,metadata:new Qf(o.createdAt,o.lastLoginAt),isAnonymous:!(o.email&&o.passwordHash)&&!(c!=null&&c.length)};return Object.assign(p,g),p}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ym=new Map;function On(s){xn(s instanceof Function,"Expected a class definition");let t=ym.get(s);return t?(xn(t instanceof s,"Instance stored in cache mismatched with class"),t):(t=new s,ym.set(s,t),t)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hv{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(t,i){this.storage[t]=i}async _get(t){const i=this.storage[t];return i===void 0?null:i}async _remove(t){delete this.storage[t]}_addListener(t,i){}_removeListener(t,i){}}Hv.type="NONE";const Em=Hv;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _o(s,t,i){return`firebase:${s}:${t}:${i}`}class Fs{constructor(t,i,a){this.persistence=t,this.auth=i,this.userKey=a;const{config:o,name:c}=this.auth;this.fullUserKey=_o(this.userKey,o.apiKey,c),this.fullPersistenceKey=_o("persistence",o.apiKey,c),this.boundEventHandler=i._onStorageEvent.bind(i),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(t){return this.persistence._set(this.fullUserKey,t.toJSON())}async getCurrentUser(){const t=await this.persistence._get(this.fullUserKey);if(!t)return null;if(typeof t=="string"){const i=await bo(this.auth,{idToken:t}).catch(()=>{});return i?Zt._fromGetAccountInfoResponse(this.auth,i,t):null}return Zt._fromJSON(this.auth,t)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(t){if(this.persistence===t)return;const i=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=t,i)return this.setCurrentUser(i)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(t,i,a="authUser"){if(!i.length)return new Fs(On(Em),t,a);const o=(await Promise.all(i.map(async g=>{if(await g._isAvailable())return g}))).filter(g=>g);let c=o[0]||On(Em);const h=_o(a,t.config.apiKey,t.name);let d=null;for(const g of i)try{const v=await g._get(h);if(v){let E;if(typeof v=="string"){const b=await bo(t,{idToken:v}).catch(()=>{});if(!b)break;E=await Zt._fromGetAccountInfoResponse(t,b,v)}else E=Zt._fromJSON(t,v);g!==c&&(d=E),c=g;break}}catch{}const p=o.filter(g=>g._shouldAllowMigration);return!c._shouldAllowMigration||!p.length?new Fs(c,t,a):(c=p[0],d&&await c._set(h,d.toJSON()),await Promise.all(i.map(async g=>{if(g!==c)try{await g._remove(h)}catch{}})),new Fs(c,t,a))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Sm(s){const t=s.toLowerCase();if(t.includes("opera/")||t.includes("opr/")||t.includes("opios/"))return"Opera";if(Vv(t))return"IEMobile";if(t.includes("msie")||t.includes("trident/"))return"IE";if(t.includes("edge/"))return"Edge";if(Pv(t))return"Firefox";if(t.includes("silk/"))return"Silk";if(jv(t))return"Blackberry";if(Yv(t))return"Webos";if(Bv(t))return"Safari";if((t.includes("chrome/")||qv(t))&&!t.includes("edge/"))return"Chrome";if(Gv(t))return"Android";{const i=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,a=s.match(i);if((a==null?void 0:a.length)===2)return a[1]}return"Other"}function Pv(s=gt()){return/firefox\//i.test(s)}function Bv(s=gt()){const t=s.toLowerCase();return t.includes("safari/")&&!t.includes("chrome/")&&!t.includes("crios/")&&!t.includes("android")}function qv(s=gt()){return/crios\//i.test(s)}function Vv(s=gt()){return/iemobile/i.test(s)}function Gv(s=gt()){return/android/i.test(s)}function jv(s=gt()){return/blackberry/i.test(s)}function Yv(s=gt()){return/webos/i.test(s)}function Eh(s=gt()){return/iphone|ipad|ipod/i.test(s)||/macintosh/i.test(s)&&/mobile/i.test(s)}function aC(s=gt()){var t;return Eh(s)&&!!(!((t=window.navigator)===null||t===void 0)&&t.standalone)}function lC(){return vT()&&document.documentMode===10}function Qv(s=gt()){return Eh(s)||Gv(s)||Yv(s)||jv(s)||/windows phone/i.test(s)||Vv(s)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fv(s,t=[]){let i;switch(s){case"Browser":i=Sm(gt());break;case"Worker":i=`${Sm(gt())}-${s}`;break;default:i=s}const a=t.length?t.join(","):"FirebaseCore-web";return`${i}/JsCore/${ar}/${a}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oC{constructor(t){this.auth=t,this.queue=[]}pushCallback(t,i){const a=c=>new Promise((h,d)=>{try{const p=t(c);h(p)}catch(p){d(p)}});a.onAbort=i,this.queue.push(a);const o=this.queue.length-1;return()=>{this.queue[o]=()=>Promise.resolve()}}async runMiddleware(t){if(this.auth.currentUser===t)return;const i=[];try{for(const a of this.queue)await a(t),a.onAbort&&i.push(a.onAbort)}catch(a){i.reverse();for(const o of i)try{o()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:a==null?void 0:a.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function uC(s,t={}){return Ci(s,"GET","/v2/passwordPolicy",bi(s,t))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cC=6;class fC{constructor(t){var i,a,o,c;const h=t.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(i=h.minPasswordLength)!==null&&i!==void 0?i:cC,h.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=h.maxPasswordLength),h.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=h.containsLowercaseCharacter),h.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=h.containsUppercaseCharacter),h.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=h.containsNumericCharacter),h.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=h.containsNonAlphanumericCharacter),this.enforcementState=t.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(o=(a=t.allowedNonAlphanumericCharacters)===null||a===void 0?void 0:a.join(""))!==null&&o!==void 0?o:"",this.forceUpgradeOnSignin=(c=t.forceUpgradeOnSignin)!==null&&c!==void 0?c:!1,this.schemaVersion=t.schemaVersion}validatePassword(t){var i,a,o,c,h,d;const p={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(t,p),this.validatePasswordCharacterOptions(t,p),p.isValid&&(p.isValid=(i=p.meetsMinPasswordLength)!==null&&i!==void 0?i:!0),p.isValid&&(p.isValid=(a=p.meetsMaxPasswordLength)!==null&&a!==void 0?a:!0),p.isValid&&(p.isValid=(o=p.containsLowercaseLetter)!==null&&o!==void 0?o:!0),p.isValid&&(p.isValid=(c=p.containsUppercaseLetter)!==null&&c!==void 0?c:!0),p.isValid&&(p.isValid=(h=p.containsNumericCharacter)!==null&&h!==void 0?h:!0),p.isValid&&(p.isValid=(d=p.containsNonAlphanumericCharacter)!==null&&d!==void 0?d:!0),p}validatePasswordLengthOptions(t,i){const a=this.customStrengthOptions.minPasswordLength,o=this.customStrengthOptions.maxPasswordLength;a&&(i.meetsMinPasswordLength=t.length>=a),o&&(i.meetsMaxPasswordLength=t.length<=o)}validatePasswordCharacterOptions(t,i){this.updatePasswordCharacterOptionsStatuses(i,!1,!1,!1,!1);let a;for(let o=0;o<t.length;o++)a=t.charAt(o),this.updatePasswordCharacterOptionsStatuses(i,a>="a"&&a<="z",a>="A"&&a<="Z",a>="0"&&a<="9",this.allowedNonAlphanumericCharacters.includes(a))}updatePasswordCharacterOptionsStatuses(t,i,a,o,c){this.customStrengthOptions.containsLowercaseLetter&&(t.containsLowercaseLetter||(t.containsLowercaseLetter=i)),this.customStrengthOptions.containsUppercaseLetter&&(t.containsUppercaseLetter||(t.containsUppercaseLetter=a)),this.customStrengthOptions.containsNumericCharacter&&(t.containsNumericCharacter||(t.containsNumericCharacter=o)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(t.containsNonAlphanumericCharacter||(t.containsNonAlphanumericCharacter=c))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hC{constructor(t,i,a,o){this.app=t,this.heartbeatServiceProvider=i,this.appCheckServiceProvider=a,this.config=o,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Tm(this),this.idTokenSubscription=new Tm(this),this.beforeStateQueue=new oC(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Mv,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=t.name,this.clientVersion=o.sdkClientVersion,this._persistenceManagerAvailable=new Promise(c=>this._resolvePersistenceManagerAvailable=c)}_initializeWithPersistence(t,i){return i&&(this._popupRedirectResolver=On(i)),this._initializationPromise=this.queue(async()=>{var a,o,c;if(!this._deleted&&(this.persistenceManager=await Fs.create(this,t),(a=this._resolvePersistenceManagerAvailable)===null||a===void 0||a.call(this),!this._deleted)){if(!((o=this._popupRedirectResolver)===null||o===void 0)&&o._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(i),this.lastNotifiedUid=((c=this.currentUser)===null||c===void 0?void 0:c.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const t=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!t)){if(this.currentUser&&t&&this.currentUser.uid===t.uid){this._currentUser._assign(t),await this.currentUser.getIdToken();return}await this._updateCurrentUser(t,!0)}}async initializeCurrentUserFromIdToken(t){try{const i=await bo(this,{idToken:t}),a=await Zt._fromGetAccountInfoResponse(this,i,t);await this.directlySetCurrentUser(a)}catch(i){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",i),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(t){var i;if(Gt(this.app)){const h=this.app.settings.authIdToken;return h?new Promise(d=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(h).then(d,d))}):this.directlySetCurrentUser(null)}const a=await this.assertedPersistence.getCurrentUser();let o=a,c=!1;if(t&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const h=(i=this.redirectUser)===null||i===void 0?void 0:i._redirectEventId,d=o==null?void 0:o._redirectEventId,p=await this.tryRedirectSignIn(t);(!h||h===d)&&(p!=null&&p.user)&&(o=p.user,c=!0)}if(!o)return this.directlySetCurrentUser(null);if(!o._redirectEventId){if(c)try{await this.beforeStateQueue.runMiddleware(o)}catch(h){o=a,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(h))}return o?this.reloadAndSetCurrentUserOrClear(o):this.directlySetCurrentUser(null)}return Q(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===o._redirectEventId?this.directlySetCurrentUser(o):this.reloadAndSetCurrentUserOrClear(o)}async tryRedirectSignIn(t){let i=null;try{i=await this._popupRedirectResolver._completeRedirectFn(this,t,!0)}catch{await this._setRedirectUser(null)}return i}async reloadAndSetCurrentUserOrClear(t){try{await Co(t)}catch(i){if((i==null?void 0:i.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(t)}useDeviceLanguage(){this.languageCode=jb()}async _delete(){this._deleted=!0}async updateCurrentUser(t){if(Gt(this.app))return Promise.reject(In(this));const i=t?mt(t):null;return i&&Q(i.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(i&&i._clone(this))}async _updateCurrentUser(t,i=!1){if(!this._deleted)return t&&Q(this.tenantId===t.tenantId,this,"tenant-id-mismatch"),i||await this.beforeStateQueue.runMiddleware(t),this.queue(async()=>{await this.directlySetCurrentUser(t),this.notifyAuthListeners()})}async signOut(){return Gt(this.app)?Promise.reject(In(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(t){return Gt(this.app)?Promise.reject(In(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(On(t))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(t){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const i=this._getPasswordPolicyInternal();return i.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):i.validatePassword(t)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const t=await uC(this),i=new fC(t);this.tenantId===null?this._projectPasswordPolicy=i:this._tenantPasswordPolicies[this.tenantId]=i}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(t){this._errorFactory=new Ua("auth","Firebase",t())}onAuthStateChanged(t,i,a){return this.registerStateListener(this.authStateSubscription,t,i,a)}beforeAuthStateChanged(t,i){return this.beforeStateQueue.pushCallback(t,i)}onIdTokenChanged(t,i,a){return this.registerStateListener(this.idTokenSubscription,t,i,a)}authStateReady(){return new Promise((t,i)=>{if(this.currentUser)t();else{const a=this.onAuthStateChanged(()=>{a(),t()},i)}})}async revokeAccessToken(t){if(this.currentUser){const i=await this.currentUser.getIdToken(),a={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:t,idToken:i};this.tenantId!=null&&(a.tenantId=this.tenantId),await rC(this,a)}}toJSON(){var t;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(t=this._currentUser)===null||t===void 0?void 0:t.toJSON()}}async _setRedirectUser(t,i){const a=await this.getOrInitRedirectPersistenceManager(i);return t===null?a.removeCurrentUser():a.setCurrentUser(t)}async getOrInitRedirectPersistenceManager(t){if(!this.redirectPersistenceManager){const i=t&&On(t)||this._popupRedirectResolver;Q(i,this,"argument-error"),this.redirectPersistenceManager=await Fs.create(this,[On(i._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(t){var i,a;return this._isInitialized&&await this.queue(async()=>{}),((i=this._currentUser)===null||i===void 0?void 0:i._redirectEventId)===t?this._currentUser:((a=this.redirectUser)===null||a===void 0?void 0:a._redirectEventId)===t?this.redirectUser:null}async _persistUserIfCurrent(t){if(t===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(t))}_notifyListenersIfCurrent(t){t===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var t,i;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const a=(i=(t=this.currentUser)===null||t===void 0?void 0:t.uid)!==null&&i!==void 0?i:null;this.lastNotifiedUid!==a&&(this.lastNotifiedUid=a,this.authStateSubscription.next(this.currentUser))}registerStateListener(t,i,a,o){if(this._deleted)return()=>{};const c=typeof i=="function"?i:i.next.bind(i);let h=!1;const d=this._isInitialized?Promise.resolve():this._initializationPromise;if(Q(d,this,"internal-error"),d.then(()=>{h||c(this.currentUser)}),typeof i=="function"){const p=t.addObserver(i,a,o);return()=>{h=!0,p()}}else{const p=t.addObserver(i);return()=>{h=!0,p()}}}async directlySetCurrentUser(t){this.currentUser&&this.currentUser!==t&&this._currentUser._stopProactiveRefresh(),t&&this.isProactiveRefreshEnabled&&t._startProactiveRefresh(),this.currentUser=t,t?await this.assertedPersistence.setCurrentUser(t):await this.assertedPersistence.removeCurrentUser()}queue(t){return this.operations=this.operations.then(t,t),this.operations}get assertedPersistence(){return Q(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(t){!t||this.frameworks.includes(t)||(this.frameworks.push(t),this.frameworks.sort(),this.clientVersion=Fv(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var t;const i={"X-Client-Version":this.clientVersion};this.app.options.appId&&(i["X-Firebase-gmpid"]=this.app.options.appId);const a=await((t=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||t===void 0?void 0:t.getHeartbeatsHeader());a&&(i["X-Firebase-Client"]=a);const o=await this._getAppCheckToken();return o&&(i["X-Firebase-AppCheck"]=o),i}async _getAppCheckToken(){var t;if(Gt(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const i=await((t=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||t===void 0?void 0:t.getToken());return i!=null&&i.error&&qb(`Error while retrieving App Check token: ${i.error}`),i==null?void 0:i.token}}function es(s){return mt(s)}class Tm{constructor(t){this.auth=t,this.observer=null,this.addObserver=NT(i=>this.observer=i)}get next(){return Q(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Go={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function dC(s){Go=s}function Kv(s){return Go.loadJS(s)}function _C(){return Go.recaptchaEnterpriseScript}function pC(){return Go.gapiScript}function gC(s){return`__${s}${Math.floor(Math.random()*1e6)}`}class mC{constructor(){this.enterprise=new vC}ready(t){t()}execute(t,i){return Promise.resolve("token")}render(t,i){return""}}class vC{ready(t){t()}execute(t,i){return Promise.resolve("token")}render(t,i){return""}}const yC="recaptcha-enterprise",Xv="NO_RECAPTCHA";class EC{constructor(t){this.type=yC,this.auth=es(t)}async verify(t="verify",i=!1){async function a(c){if(!i){if(c.tenantId==null&&c._agentRecaptchaConfig!=null)return c._agentRecaptchaConfig.siteKey;if(c.tenantId!=null&&c._tenantRecaptchaConfigs[c.tenantId]!==void 0)return c._tenantRecaptchaConfigs[c.tenantId].siteKey}return new Promise(async(h,d)=>{Zb(c,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(p=>{if(p.recaptchaKey===void 0)d(new Error("recaptcha Enterprise site key undefined"));else{const g=new Wb(p);return c.tenantId==null?c._agentRecaptchaConfig=g:c._tenantRecaptchaConfigs[c.tenantId]=g,h(g.siteKey)}}).catch(p=>{d(p)})})}function o(c,h,d){const p=window.grecaptcha;mm(p)?p.enterprise.ready(()=>{p.enterprise.execute(c,{action:t}).then(g=>{h(g)}).catch(()=>{h(Xv)})}):d(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new mC().execute("siteKey",{action:"verify"}):new Promise((c,h)=>{a(this.auth).then(d=>{if(!i&&mm(window.grecaptcha))o(d,c,h);else{if(typeof window>"u"){h(new Error("RecaptchaVerifier is only supported in browser"));return}let p=_C();p.length!==0&&(p+=d),Kv(p).then(()=>{o(d,c,h)}).catch(g=>{h(g)})}}).catch(d=>{h(d)})})}}async function bm(s,t,i,a=!1,o=!1){const c=new EC(s);let h;if(o)h=Xv;else try{h=await c.verify(i)}catch{h=await c.verify(i,!0)}const d=Object.assign({},t);if(i==="mfaSmsEnrollment"||i==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in d){const p=d.phoneEnrollmentInfo.phoneNumber,g=d.phoneEnrollmentInfo.recaptchaToken;Object.assign(d,{phoneEnrollmentInfo:{phoneNumber:p,recaptchaToken:g,captchaResponse:h,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in d){const p=d.phoneSignInInfo.recaptchaToken;Object.assign(d,{phoneSignInInfo:{recaptchaToken:p,captchaResponse:h,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return d}return a?Object.assign(d,{captchaResp:h}):Object.assign(d,{captchaResponse:h}),Object.assign(d,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(d,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),d}async function Ff(s,t,i,a,o){var c;if(!((c=s._getRecaptchaConfig())===null||c===void 0)&&c.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const h=await bm(s,t,i,i==="getOobCode");return a(s,h)}else return a(s,t).catch(async h=>{if(h.code==="auth/missing-recaptcha-token"){console.log(`${i} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const d=await bm(s,t,i,i==="getOobCode");return a(s,d)}else return Promise.reject(h)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function SC(s,t){const i=ph(s,"auth");if(i.isInitialized()){const o=i.getImmediate(),c=i.getOptions();if(Fi(c,t??{}))return o;en(o,"already-initialized")}return i.initialize({options:t})}function TC(s,t){const i=(t==null?void 0:t.persistence)||[],a=(Array.isArray(i)?i:[i]).map(On);t!=null&&t.errorMap&&s._updateErrorMap(t.errorMap),s._initializeWithPersistence(a,t==null?void 0:t.popupRedirectResolver)}function bC(s,t,i){const a=es(s);Q(/^https?:\/\//.test(t),a,"invalid-emulator-scheme");const o=!1,c=Wv(t),{host:h,port:d}=CC(t),p=d===null?"":`:${d}`,g={url:`${c}//${h}${p}/`},v=Object.freeze({host:h,port:d,protocol:c.replace(":",""),options:Object.freeze({disableWarnings:o})});if(!a._canInitEmulator){Q(a.config.emulator&&a.emulatorConfig,a,"emulator-config-failed"),Q(Fi(g,a.config.emulator)&&Fi(v,a.emulatorConfig),a,"emulator-config-failed");return}a.config.emulator=g,a.emulatorConfig=v,a.settings.appVerificationDisabledForTesting=!0,AC()}function Wv(s){const t=s.indexOf(":");return t<0?"":s.substr(0,t+1)}function CC(s){const t=Wv(s),i=/(\/\/)?([^?#/]+)/.exec(s.substr(t.length));if(!i)return{host:"",port:null};const a=i[2].split("@").pop()||"",o=/^(\[[^\]]+\])(:|$)/.exec(a);if(o){const c=o[1];return{host:c,port:Cm(a.substr(c.length+1))}}else{const[c,h]=a.split(":");return{host:c,port:Cm(h)}}}function Cm(s){if(!s)return null;const t=Number(s);return isNaN(t)?null:t}function AC(){function s(){const t=document.createElement("p"),i=t.style;t.innerText="Running in emulator mode. Do not use with production credentials.",i.position="fixed",i.width="100%",i.backgroundColor="#ffffff",i.border=".1em solid #000000",i.color="#b50000",i.bottom="0px",i.left="0px",i.margin="0px",i.zIndex="10000",i.textAlign="center",t.classList.add("firebase-emulator-warning"),document.body.appendChild(t)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",s):s())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sh{constructor(t,i){this.providerId=t,this.signInMethod=i}toJSON(){return Nn("not implemented")}_getIdTokenResponse(t){return Nn("not implemented")}_linkToIdToken(t,i){return Nn("not implemented")}_getReauthenticationResolver(t){return Nn("not implemented")}}async function RC(s,t){return Ci(s,"POST","/v1/accounts:signUp",t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function wC(s,t){return za(s,"POST","/v1/accounts:signInWithPassword",bi(s,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function NC(s,t){return za(s,"POST","/v1/accounts:signInWithEmailLink",bi(s,t))}async function OC(s,t){return za(s,"POST","/v1/accounts:signInWithEmailLink",bi(s,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Aa extends Sh{constructor(t,i,a,o=null){super("password",a),this._email=t,this._password=i,this._tenantId=o}static _fromEmailAndPassword(t,i){return new Aa(t,i,"password")}static _fromEmailAndCode(t,i,a=null){return new Aa(t,i,"emailLink",a)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(t){const i=typeof t=="string"?JSON.parse(t):t;if(i!=null&&i.email&&(i!=null&&i.password)){if(i.signInMethod==="password")return this._fromEmailAndPassword(i.email,i.password);if(i.signInMethod==="emailLink")return this._fromEmailAndCode(i.email,i.password,i.tenantId)}return null}async _getIdTokenResponse(t){switch(this.signInMethod){case"password":const i={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Ff(t,i,"signInWithPassword",wC);case"emailLink":return NC(t,{email:this._email,oobCode:this._password});default:en(t,"internal-error")}}async _linkToIdToken(t,i){switch(this.signInMethod){case"password":const a={idToken:i,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Ff(t,a,"signUpPassword",RC);case"emailLink":return OC(t,{idToken:i,email:this._email,oobCode:this._password});default:en(t,"internal-error")}}_getReauthenticationResolver(t){return this._getIdTokenResponse(t)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ks(s,t){return za(s,"POST","/v1/accounts:signInWithIdp",bi(s,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const DC="http://localhost";class Xi extends Sh{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(t){const i=new Xi(t.providerId,t.signInMethod);return t.idToken||t.accessToken?(t.idToken&&(i.idToken=t.idToken),t.accessToken&&(i.accessToken=t.accessToken),t.nonce&&!t.pendingToken&&(i.nonce=t.nonce),t.pendingToken&&(i.pendingToken=t.pendingToken)):t.oauthToken&&t.oauthTokenSecret?(i.accessToken=t.oauthToken,i.secret=t.oauthTokenSecret):en("argument-error"),i}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(t){const i=typeof t=="string"?JSON.parse(t):t,{providerId:a,signInMethod:o}=i,c=gh(i,["providerId","signInMethod"]);if(!a||!o)return null;const h=new Xi(a,o);return h.idToken=c.idToken||void 0,h.accessToken=c.accessToken||void 0,h.secret=c.secret,h.nonce=c.nonce,h.pendingToken=c.pendingToken||null,h}_getIdTokenResponse(t){const i=this.buildRequest();return Ks(t,i)}_linkToIdToken(t,i){const a=this.buildRequest();return a.idToken=i,Ks(t,a)}_getReauthenticationResolver(t){const i=this.buildRequest();return i.autoCreate=!1,Ks(t,i)}buildRequest(){const t={requestUri:DC,returnSecureToken:!0};if(this.pendingToken)t.pendingToken=this.pendingToken;else{const i={};this.idToken&&(i.id_token=this.idToken),this.accessToken&&(i.access_token=this.accessToken),this.secret&&(i.oauth_token_secret=this.secret),i.providerId=this.providerId,this.nonce&&!this.pendingToken&&(i.nonce=this.nonce),t.postBody=rr(i)}return t}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function IC(s){switch(s){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function MC(s){const t=_a(pa(s)).link,i=t?_a(pa(t)).deep_link_id:null,a=_a(pa(s)).deep_link_id;return(a?_a(pa(a)).link:null)||a||i||t||s}class Th{constructor(t){var i,a,o,c,h,d;const p=_a(pa(t)),g=(i=p.apiKey)!==null&&i!==void 0?i:null,v=(a=p.oobCode)!==null&&a!==void 0?a:null,E=IC((o=p.mode)!==null&&o!==void 0?o:null);Q(g&&v&&E,"argument-error"),this.apiKey=g,this.operation=E,this.code=v,this.continueUrl=(c=p.continueUrl)!==null&&c!==void 0?c:null,this.languageCode=(h=p.languageCode)!==null&&h!==void 0?h:null,this.tenantId=(d=p.tenantId)!==null&&d!==void 0?d:null}static parseLink(t){const i=MC(t);try{return new Th(i)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lr{constructor(){this.providerId=lr.PROVIDER_ID}static credential(t,i){return Aa._fromEmailAndPassword(t,i)}static credentialWithLink(t,i){const a=Th.parseLink(i);return Q(a,"argument-error"),Aa._fromEmailAndCode(t,a.code,a.tenantId)}}lr.PROVIDER_ID="password";lr.EMAIL_PASSWORD_SIGN_IN_METHOD="password";lr.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zv{constructor(t){this.providerId=t,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(t){this.defaultLanguageCode=t}setCustomParameters(t){return this.customParameters=t,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ha extends Zv{constructor(){super(...arguments),this.scopes=[]}addScope(t){return this.scopes.includes(t)||this.scopes.push(t),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ui extends Ha{constructor(){super("facebook.com")}static credential(t){return Xi._fromParams({providerId:ui.PROVIDER_ID,signInMethod:ui.FACEBOOK_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return ui.credentialFromTaggedObject(t)}static credentialFromError(t){return ui.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t)||!t.oauthAccessToken)return null;try{return ui.credential(t.oauthAccessToken)}catch{return null}}}ui.FACEBOOK_SIGN_IN_METHOD="facebook.com";ui.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ci extends Ha{constructor(){super("google.com"),this.addScope("profile")}static credential(t,i){return Xi._fromParams({providerId:ci.PROVIDER_ID,signInMethod:ci.GOOGLE_SIGN_IN_METHOD,idToken:t,accessToken:i})}static credentialFromResult(t){return ci.credentialFromTaggedObject(t)}static credentialFromError(t){return ci.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthIdToken:i,oauthAccessToken:a}=t;if(!i&&!a)return null;try{return ci.credential(i,a)}catch{return null}}}ci.GOOGLE_SIGN_IN_METHOD="google.com";ci.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fi extends Ha{constructor(){super("github.com")}static credential(t){return Xi._fromParams({providerId:fi.PROVIDER_ID,signInMethod:fi.GITHUB_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return fi.credentialFromTaggedObject(t)}static credentialFromError(t){return fi.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t)||!t.oauthAccessToken)return null;try{return fi.credential(t.oauthAccessToken)}catch{return null}}}fi.GITHUB_SIGN_IN_METHOD="github.com";fi.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hi extends Ha{constructor(){super("twitter.com")}static credential(t,i){return Xi._fromParams({providerId:hi.PROVIDER_ID,signInMethod:hi.TWITTER_SIGN_IN_METHOD,oauthToken:t,oauthTokenSecret:i})}static credentialFromResult(t){return hi.credentialFromTaggedObject(t)}static credentialFromError(t){return hi.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthAccessToken:i,oauthTokenSecret:a}=t;if(!i||!a)return null;try{return hi.credential(i,a)}catch{return null}}}hi.TWITTER_SIGN_IN_METHOD="twitter.com";hi.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function kC(s,t){return za(s,"POST","/v1/accounts:signUp",bi(s,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wi{constructor(t){this.user=t.user,this.providerId=t.providerId,this._tokenResponse=t._tokenResponse,this.operationType=t.operationType}static async _fromIdTokenResponse(t,i,a,o=!1){const c=await Zt._fromIdTokenResponse(t,a,o),h=Am(a);return new Wi({user:c,providerId:h,_tokenResponse:a,operationType:i})}static async _forOperation(t,i,a){await t._updateTokensIfNecessary(a,!0);const o=Am(a);return new Wi({user:t,providerId:o,_tokenResponse:a,operationType:i})}}function Am(s){return s.providerId?s.providerId:"phoneNumber"in s?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ao extends Ti{constructor(t,i,a,o){var c;super(i.code,i.message),this.operationType=a,this.user=o,Object.setPrototypeOf(this,Ao.prototype),this.customData={appName:t.name,tenantId:(c=t.tenantId)!==null&&c!==void 0?c:void 0,_serverResponse:i.customData._serverResponse,operationType:a}}static _fromErrorAndOperation(t,i,a,o){return new Ao(t,i,a,o)}}function Jv(s,t,i,a){return(t==="reauthenticate"?i._getReauthenticationResolver(s):i._getIdTokenResponse(s)).catch(c=>{throw c.code==="auth/multi-factor-auth-required"?Ao._fromErrorAndOperation(s,c,t,a):c})}async function xC(s,t,i=!1){const a=await Ca(s,t._linkToIdToken(s.auth,await s.getIdToken()),i);return Wi._forOperation(s,"link",a)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function UC(s,t,i=!1){const{auth:a}=s;if(Gt(a.app))return Promise.reject(In(a));const o="reauthenticate";try{const c=await Ca(s,Jv(a,o,t,s),i);Q(c.idToken,a,"internal-error");const h=yh(c.idToken);Q(h,a,"internal-error");const{sub:d}=h;return Q(s.uid===d,a,"user-mismatch"),Wi._forOperation(s,o,c)}catch(c){throw(c==null?void 0:c.code)==="auth/user-not-found"&&en(a,"user-mismatch"),c}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function $v(s,t,i=!1){if(Gt(s.app))return Promise.reject(In(s));const a="signIn",o=await Jv(s,a,t),c=await Wi._fromIdTokenResponse(s,a,o);return i||await s._updateCurrentUser(c.user),c}async function LC(s,t){return $v(es(s),t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ey(s){const t=es(s);t._getPasswordPolicyInternal()&&await t._updatePasswordPolicy()}async function zC(s,t,i){if(Gt(s.app))return Promise.reject(In(s));const a=es(s),h=await Ff(a,{returnSecureToken:!0,email:t,password:i,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",kC).catch(p=>{throw p.code==="auth/password-does-not-meet-requirements"&&ey(s),p}),d=await Wi._fromIdTokenResponse(a,"signIn",h);return await a._updateCurrentUser(d.user),d}function HC(s,t,i){return Gt(s.app)?Promise.reject(In(s)):LC(mt(s),lr.credential(t,i)).catch(async a=>{throw a.code==="auth/password-does-not-meet-requirements"&&ey(s),a})}function PC(s,t,i,a){return mt(s).onIdTokenChanged(t,i,a)}function BC(s,t,i){return mt(s).beforeAuthStateChanged(t,i)}function qC(s,t,i,a){return mt(s).onAuthStateChanged(t,i,a)}function VC(s){return mt(s).signOut()}const Ro="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ty{constructor(t,i){this.storageRetriever=t,this.type=i}_isAvailable(){try{return this.storage?(this.storage.setItem(Ro,"1"),this.storage.removeItem(Ro),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(t,i){return this.storage.setItem(t,JSON.stringify(i)),Promise.resolve()}_get(t){const i=this.storage.getItem(t);return Promise.resolve(i?JSON.parse(i):null)}_remove(t){return this.storage.removeItem(t),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const GC=1e3,jC=10;class ny extends ty{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(t,i)=>this.onStorageEvent(t,i),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=Qv(),this._shouldAllowMigration=!0}forAllChangedKeys(t){for(const i of Object.keys(this.listeners)){const a=this.storage.getItem(i),o=this.localCache[i];a!==o&&t(i,o,a)}}onStorageEvent(t,i=!1){if(!t.key){this.forAllChangedKeys((h,d,p)=>{this.notifyListeners(h,p)});return}const a=t.key;i?this.detachListener():this.stopPolling();const o=()=>{const h=this.storage.getItem(a);!i&&this.localCache[a]===h||this.notifyListeners(a,h)},c=this.storage.getItem(a);lC()&&c!==t.newValue&&t.newValue!==t.oldValue?setTimeout(o,jC):o()}notifyListeners(t,i){this.localCache[t]=i;const a=this.listeners[t];if(a)for(const o of Array.from(a))o(i&&JSON.parse(i))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((t,i,a)=>{this.onStorageEvent(new StorageEvent("storage",{key:t,oldValue:i,newValue:a}),!0)})},GC)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(t,i){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[t]||(this.listeners[t]=new Set,this.localCache[t]=this.storage.getItem(t)),this.listeners[t].add(i)}_removeListener(t,i){this.listeners[t]&&(this.listeners[t].delete(i),this.listeners[t].size===0&&delete this.listeners[t]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(t,i){await super._set(t,i),this.localCache[t]=JSON.stringify(i)}async _get(t){const i=await super._get(t);return this.localCache[t]=JSON.stringify(i),i}async _remove(t){await super._remove(t),delete this.localCache[t]}}ny.type="LOCAL";const YC=ny;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iy extends ty{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(t,i){}_removeListener(t,i){}}iy.type="SESSION";const sy=iy;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function QC(s){return Promise.all(s.map(async t=>{try{return{fulfilled:!0,value:await t}}catch(i){return{fulfilled:!1,reason:i}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jo{constructor(t){this.eventTarget=t,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(t){const i=this.receivers.find(o=>o.isListeningto(t));if(i)return i;const a=new jo(t);return this.receivers.push(a),a}isListeningto(t){return this.eventTarget===t}async handleEvent(t){const i=t,{eventId:a,eventType:o,data:c}=i.data,h=this.handlersMap[o];if(!(h!=null&&h.size))return;i.ports[0].postMessage({status:"ack",eventId:a,eventType:o});const d=Array.from(h).map(async g=>g(i.origin,c)),p=await QC(d);i.ports[0].postMessage({status:"done",eventId:a,eventType:o,response:p})}_subscribe(t,i){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[t]||(this.handlersMap[t]=new Set),this.handlersMap[t].add(i)}_unsubscribe(t,i){this.handlersMap[t]&&i&&this.handlersMap[t].delete(i),(!i||this.handlersMap[t].size===0)&&delete this.handlersMap[t],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}jo.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bh(s="",t=10){let i="";for(let a=0;a<t;a++)i+=Math.floor(Math.random()*10);return s+i}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class FC{constructor(t){this.target=t,this.handlers=new Set}removeMessageHandler(t){t.messageChannel&&(t.messageChannel.port1.removeEventListener("message",t.onMessage),t.messageChannel.port1.close()),this.handlers.delete(t)}async _send(t,i,a=50){const o=typeof MessageChannel<"u"?new MessageChannel:null;if(!o)throw new Error("connection_unavailable");let c,h;return new Promise((d,p)=>{const g=bh("",20);o.port1.start();const v=setTimeout(()=>{p(new Error("unsupported_event"))},a);h={messageChannel:o,onMessage(E){const b=E;if(b.data.eventId===g)switch(b.data.status){case"ack":clearTimeout(v),c=setTimeout(()=>{p(new Error("timeout"))},3e3);break;case"done":clearTimeout(c),d(b.data.response);break;default:clearTimeout(v),clearTimeout(c),p(new Error("invalid_response"));break}}},this.handlers.add(h),o.port1.addEventListener("message",h.onMessage),this.target.postMessage({eventType:t,eventId:g,data:i},[o.port2])}).finally(()=>{h&&this.removeMessageHandler(h)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function un(){return window}function KC(s){un().location.href=s}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ry(){return typeof un().WorkerGlobalScope<"u"&&typeof un().importScripts=="function"}async function XC(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function WC(){var s;return((s=navigator==null?void 0:navigator.serviceWorker)===null||s===void 0?void 0:s.controller)||null}function ZC(){return ry()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ay="firebaseLocalStorageDb",JC=1,wo="firebaseLocalStorage",ly="fbase_key";class Pa{constructor(t){this.request=t}toPromise(){return new Promise((t,i)=>{this.request.addEventListener("success",()=>{t(this.request.result)}),this.request.addEventListener("error",()=>{i(this.request.error)})})}}function Yo(s,t){return s.transaction([wo],t?"readwrite":"readonly").objectStore(wo)}function $C(){const s=indexedDB.deleteDatabase(ay);return new Pa(s).toPromise()}function Kf(){const s=indexedDB.open(ay,JC);return new Promise((t,i)=>{s.addEventListener("error",()=>{i(s.error)}),s.addEventListener("upgradeneeded",()=>{const a=s.result;try{a.createObjectStore(wo,{keyPath:ly})}catch(o){i(o)}}),s.addEventListener("success",async()=>{const a=s.result;a.objectStoreNames.contains(wo)?t(a):(a.close(),await $C(),t(await Kf()))})})}async function Rm(s,t,i){const a=Yo(s,!0).put({[ly]:t,value:i});return new Pa(a).toPromise()}async function eA(s,t){const i=Yo(s,!1).get(t),a=await new Pa(i).toPromise();return a===void 0?null:a.value}function wm(s,t){const i=Yo(s,!0).delete(t);return new Pa(i).toPromise()}const tA=800,nA=3;class oy{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Kf(),this.db)}async _withRetries(t){let i=0;for(;;)try{const a=await this._openDb();return await t(a)}catch(a){if(i++>nA)throw a;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return ry()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=jo._getInstance(ZC()),this.receiver._subscribe("keyChanged",async(t,i)=>({keyProcessed:(await this._poll()).includes(i.key)})),this.receiver._subscribe("ping",async(t,i)=>["keyChanged"])}async initializeSender(){var t,i;if(this.activeServiceWorker=await XC(),!this.activeServiceWorker)return;this.sender=new FC(this.activeServiceWorker);const a=await this.sender._send("ping",{},800);a&&!((t=a[0])===null||t===void 0)&&t.fulfilled&&!((i=a[0])===null||i===void 0)&&i.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(t){if(!(!this.sender||!this.activeServiceWorker||WC()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:t},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const t=await Kf();return await Rm(t,Ro,"1"),await wm(t,Ro),!0}catch{}return!1}async _withPendingWrite(t){this.pendingWrites++;try{await t()}finally{this.pendingWrites--}}async _set(t,i){return this._withPendingWrite(async()=>(await this._withRetries(a=>Rm(a,t,i)),this.localCache[t]=i,this.notifyServiceWorker(t)))}async _get(t){const i=await this._withRetries(a=>eA(a,t));return this.localCache[t]=i,i}async _remove(t){return this._withPendingWrite(async()=>(await this._withRetries(i=>wm(i,t)),delete this.localCache[t],this.notifyServiceWorker(t)))}async _poll(){const t=await this._withRetries(o=>{const c=Yo(o,!1).getAll();return new Pa(c).toPromise()});if(!t)return[];if(this.pendingWrites!==0)return[];const i=[],a=new Set;if(t.length!==0)for(const{fbase_key:o,value:c}of t)a.add(o),JSON.stringify(this.localCache[o])!==JSON.stringify(c)&&(this.notifyListeners(o,c),i.push(o));for(const o of Object.keys(this.localCache))this.localCache[o]&&!a.has(o)&&(this.notifyListeners(o,null),i.push(o));return i}notifyListeners(t,i){this.localCache[t]=i;const a=this.listeners[t];if(a)for(const o of Array.from(a))o(i)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),tA)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(t,i){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[t]||(this.listeners[t]=new Set,this._get(t)),this.listeners[t].add(i)}_removeListener(t,i){this.listeners[t]&&(this.listeners[t].delete(i),this.listeners[t].size===0&&delete this.listeners[t]),Object.keys(this.listeners).length===0&&this.stopPolling()}}oy.type="LOCAL";const iA=oy;new La(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sA(s,t){return t?On(t):(Q(s._popupRedirectResolver,s,"argument-error"),s._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ch extends Sh{constructor(t){super("custom","custom"),this.params=t}_getIdTokenResponse(t){return Ks(t,this._buildIdpRequest())}_linkToIdToken(t,i){return Ks(t,this._buildIdpRequest(i))}_getReauthenticationResolver(t){return Ks(t,this._buildIdpRequest())}_buildIdpRequest(t){const i={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return t&&(i.idToken=t),i}}function rA(s){return $v(s.auth,new Ch(s),s.bypassAuthState)}function aA(s){const{auth:t,user:i}=s;return Q(i,t,"internal-error"),UC(i,new Ch(s),s.bypassAuthState)}async function lA(s){const{auth:t,user:i}=s;return Q(i,t,"internal-error"),xC(i,new Ch(s),s.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uy{constructor(t,i,a,o,c=!1){this.auth=t,this.resolver=a,this.user=o,this.bypassAuthState=c,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(i)?i:[i]}execute(){return new Promise(async(t,i)=>{this.pendingPromise={resolve:t,reject:i};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(a){this.reject(a)}})}async onAuthEvent(t){const{urlResponse:i,sessionId:a,postBody:o,tenantId:c,error:h,type:d}=t;if(h){this.reject(h);return}const p={auth:this.auth,requestUri:i,sessionId:a,tenantId:c||void 0,postBody:o||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(d)(p))}catch(g){this.reject(g)}}onError(t){this.reject(t)}getIdpTask(t){switch(t){case"signInViaPopup":case"signInViaRedirect":return rA;case"linkViaPopup":case"linkViaRedirect":return lA;case"reauthViaPopup":case"reauthViaRedirect":return aA;default:en(this.auth,"internal-error")}}resolve(t){xn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(t),this.unregisterAndCleanUp()}reject(t){xn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(t),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oA=new La(2e3,1e4);class js extends uy{constructor(t,i,a,o,c){super(t,i,o,c),this.provider=a,this.authWindow=null,this.pollId=null,js.currentPopupAction&&js.currentPopupAction.cancel(),js.currentPopupAction=this}async executeNotNull(){const t=await this.execute();return Q(t,this.auth,"internal-error"),t}async onExecution(){xn(this.filter.length===1,"Popup operations only handle one event");const t=bh();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],t),this.authWindow.associatedEvent=t,this.resolver._originValidation(this.auth).catch(i=>{this.reject(i)}),this.resolver._isIframeWebStorageSupported(this.auth,i=>{i||this.reject(on(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var t;return((t=this.authWindow)===null||t===void 0?void 0:t.associatedEvent)||null}cancel(){this.reject(on(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,js.currentPopupAction=null}pollUserCancellation(){const t=()=>{var i,a;if(!((a=(i=this.authWindow)===null||i===void 0?void 0:i.window)===null||a===void 0)&&a.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(on(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(t,oA.get())};t()}}js.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uA="pendingRedirect",po=new Map;class cA extends uy{constructor(t,i,a=!1){super(t,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],i,void 0,a),this.eventId=null}async execute(){let t=po.get(this.auth._key());if(!t){try{const a=await fA(this.resolver,this.auth)?await super.execute():null;t=()=>Promise.resolve(a)}catch(i){t=()=>Promise.reject(i)}po.set(this.auth._key(),t)}return this.bypassAuthState||po.set(this.auth._key(),()=>Promise.resolve(null)),t()}async onAuthEvent(t){if(t.type==="signInViaRedirect")return super.onAuthEvent(t);if(t.type==="unknown"){this.resolve(null);return}if(t.eventId){const i=await this.auth._redirectUserForId(t.eventId);if(i)return this.user=i,super.onAuthEvent(t);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function fA(s,t){const i=_A(t),a=dA(s);if(!await a._isAvailable())return!1;const o=await a._get(i)==="true";return await a._remove(i),o}function hA(s,t){po.set(s._key(),t)}function dA(s){return On(s._redirectPersistence)}function _A(s){return _o(uA,s.config.apiKey,s.name)}async function pA(s,t,i=!1){if(Gt(s.app))return Promise.reject(In(s));const a=es(s),o=sA(a,t),h=await new cA(a,o,i).execute();return h&&!i&&(delete h.user._redirectEventId,await a._persistUserIfCurrent(h.user),await a._setRedirectUser(null,t)),h}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gA=10*60*1e3;class mA{constructor(t){this.auth=t,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(t){this.consumers.add(t),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,t)&&(this.sendToConsumer(this.queuedRedirectEvent,t),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(t){this.consumers.delete(t)}onEvent(t){if(this.hasEventBeenHandled(t))return!1;let i=!1;return this.consumers.forEach(a=>{this.isEventForConsumer(t,a)&&(i=!0,this.sendToConsumer(t,a),this.saveEventToCache(t))}),this.hasHandledPotentialRedirect||!vA(t)||(this.hasHandledPotentialRedirect=!0,i||(this.queuedRedirectEvent=t,i=!0)),i}sendToConsumer(t,i){var a;if(t.error&&!cy(t)){const o=((a=t.error.code)===null||a===void 0?void 0:a.split("auth/")[1])||"internal-error";i.onError(on(this.auth,o))}else i.onAuthEvent(t)}isEventForConsumer(t,i){const a=i.eventId===null||!!t.eventId&&t.eventId===i.eventId;return i.filter.includes(t.type)&&a}hasEventBeenHandled(t){return Date.now()-this.lastProcessedEventTime>=gA&&this.cachedEventUids.clear(),this.cachedEventUids.has(Nm(t))}saveEventToCache(t){this.cachedEventUids.add(Nm(t)),this.lastProcessedEventTime=Date.now()}}function Nm(s){return[s.type,s.eventId,s.sessionId,s.tenantId].filter(t=>t).join("-")}function cy({type:s,error:t}){return s==="unknown"&&(t==null?void 0:t.code)==="auth/no-auth-event"}function vA(s){switch(s.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return cy(s);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function yA(s,t={}){return Ci(s,"GET","/v1/projects",t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const EA=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,SA=/^https?/;async function TA(s){if(s.config.emulator)return;const{authorizedDomains:t}=await yA(s);for(const i of t)try{if(bA(i))return}catch{}en(s,"unauthorized-domain")}function bA(s){const t=Yf(),{protocol:i,hostname:a}=new URL(t);if(s.startsWith("chrome-extension://")){const h=new URL(s);return h.hostname===""&&a===""?i==="chrome-extension:"&&s.replace("chrome-extension://","")===t.replace("chrome-extension://",""):i==="chrome-extension:"&&h.hostname===a}if(!SA.test(i))return!1;if(EA.test(s))return a===s;const o=s.replace(/\./g,"\\.");return new RegExp("^(.+\\."+o+"|"+o+")$","i").test(a)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const CA=new La(3e4,6e4);function Om(){const s=un().___jsl;if(s!=null&&s.H){for(const t of Object.keys(s.H))if(s.H[t].r=s.H[t].r||[],s.H[t].L=s.H[t].L||[],s.H[t].r=[...s.H[t].L],s.CP)for(let i=0;i<s.CP.length;i++)s.CP[i]=null}}function AA(s){return new Promise((t,i)=>{var a,o,c;function h(){Om(),gapi.load("gapi.iframes",{callback:()=>{t(gapi.iframes.getContext())},ontimeout:()=>{Om(),i(on(s,"network-request-failed"))},timeout:CA.get()})}if(!((o=(a=un().gapi)===null||a===void 0?void 0:a.iframes)===null||o===void 0)&&o.Iframe)t(gapi.iframes.getContext());else if(!((c=un().gapi)===null||c===void 0)&&c.load)h();else{const d=gC("iframefcb");return un()[d]=()=>{gapi.load?h():i(on(s,"network-request-failed"))},Kv(`${pC()}?onload=${d}`).catch(p=>i(p))}}).catch(t=>{throw go=null,t})}let go=null;function RA(s){return go=go||AA(s),go}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wA=new La(5e3,15e3),NA="__/auth/iframe",OA="emulator/auth/iframe",DA={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},IA=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function MA(s){const t=s.config;Q(t.authDomain,s,"auth-domain-config-required");const i=t.emulator?vh(t,OA):`https://${s.config.authDomain}/${NA}`,a={apiKey:t.apiKey,appName:s.name,v:ar},o=IA.get(s.config.apiHost);o&&(a.eid=o);const c=s._getFrameworks();return c.length&&(a.fw=c.join(",")),`${i}?${rr(a).slice(1)}`}async function kA(s){const t=await RA(s),i=un().gapi;return Q(i,s,"internal-error"),t.open({where:document.body,url:MA(s),messageHandlersFilter:i.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:DA,dontclear:!0},a=>new Promise(async(o,c)=>{await a.restyle({setHideOnLeave:!1});const h=on(s,"network-request-failed"),d=un().setTimeout(()=>{c(h)},wA.get());function p(){un().clearTimeout(d),o(a)}a.ping(p).then(p,()=>{c(h)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xA={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},UA=500,LA=600,zA="_blank",HA="http://localhost";class Dm{constructor(t){this.window=t,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function PA(s,t,i,a=UA,o=LA){const c=Math.max((window.screen.availHeight-o)/2,0).toString(),h=Math.max((window.screen.availWidth-a)/2,0).toString();let d="";const p=Object.assign(Object.assign({},xA),{width:a.toString(),height:o.toString(),top:c,left:h}),g=gt().toLowerCase();i&&(d=qv(g)?zA:i),Pv(g)&&(t=t||HA,p.scrollbars="yes");const v=Object.entries(p).reduce((b,[x,L])=>`${b}${x}=${L},`,"");if(aC(g)&&d!=="_self")return BA(t||"",d),new Dm(null);const E=window.open(t||"",d,v);Q(E,s,"popup-blocked");try{E.focus()}catch{}return new Dm(E)}function BA(s,t){const i=document.createElement("a");i.href=s,i.target=t;const a=document.createEvent("MouseEvent");a.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),i.dispatchEvent(a)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qA="__/auth/handler",VA="emulator/auth/handler",GA=encodeURIComponent("fac");async function Im(s,t,i,a,o,c){Q(s.config.authDomain,s,"auth-domain-config-required"),Q(s.config.apiKey,s,"invalid-api-key");const h={apiKey:s.config.apiKey,appName:s.name,authType:i,redirectUrl:a,v:ar,eventId:o};if(t instanceof Zv){t.setDefaultLanguage(s.languageCode),h.providerId=t.providerId||"",Pf(t.getCustomParameters())||(h.customParameters=JSON.stringify(t.getCustomParameters()));for(const[v,E]of Object.entries({}))h[v]=E}if(t instanceof Ha){const v=t.getScopes().filter(E=>E!=="");v.length>0&&(h.scopes=v.join(","))}s.tenantId&&(h.tid=s.tenantId);const d=h;for(const v of Object.keys(d))d[v]===void 0&&delete d[v];const p=await s._getAppCheckToken(),g=p?`#${GA}=${encodeURIComponent(p)}`:"";return`${jA(s)}?${rr(d).slice(1)}${g}`}function jA({config:s}){return s.emulator?vh(s,VA):`https://${s.authDomain}/${qA}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const If="webStorageSupport";class YA{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=sy,this._completeRedirectFn=pA,this._overrideRedirectResult=hA}async _openPopup(t,i,a,o){var c;xn((c=this.eventManagers[t._key()])===null||c===void 0?void 0:c.manager,"_initialize() not called before _openPopup()");const h=await Im(t,i,a,Yf(),o);return PA(t,h,bh())}async _openRedirect(t,i,a,o){await this._originValidation(t);const c=await Im(t,i,a,Yf(),o);return KC(c),new Promise(()=>{})}_initialize(t){const i=t._key();if(this.eventManagers[i]){const{manager:o,promise:c}=this.eventManagers[i];return o?Promise.resolve(o):(xn(c,"If manager is not set, promise should be"),c)}const a=this.initAndGetManager(t);return this.eventManagers[i]={promise:a},a.catch(()=>{delete this.eventManagers[i]}),a}async initAndGetManager(t){const i=await kA(t),a=new mA(t);return i.register("authEvent",o=>(Q(o==null?void 0:o.authEvent,t,"invalid-auth-event"),{status:a.onEvent(o.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[t._key()]={manager:a},this.iframes[t._key()]=i,a}_isIframeWebStorageSupported(t,i){this.iframes[t._key()].send(If,{type:If},o=>{var c;const h=(c=o==null?void 0:o[0])===null||c===void 0?void 0:c[If];h!==void 0&&i(!!h),en(t,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(t){const i=t._key();return this.originValidationPromises[i]||(this.originValidationPromises[i]=TA(t)),this.originValidationPromises[i]}get _shouldInitProactively(){return Qv()||Bv()||Eh()}}const QA=YA;var Mm="@firebase/auth",km="1.10.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class FA{constructor(t){this.auth=t,this.internalListeners=new Map}getUid(){var t;return this.assertAuthConfigured(),((t=this.auth.currentUser)===null||t===void 0?void 0:t.uid)||null}async getToken(t){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(t)}:null}addAuthTokenListener(t){if(this.assertAuthConfigured(),this.internalListeners.has(t))return;const i=this.auth.onIdTokenChanged(a=>{t((a==null?void 0:a.stsTokenManager.accessToken)||null)});this.internalListeners.set(t,i),this.updateProactiveRefresh()}removeAuthTokenListener(t){this.assertAuthConfigured();const i=this.internalListeners.get(t);i&&(this.internalListeners.delete(t),i(),this.updateProactiveRefresh())}assertAuthConfigured(){Q(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function KA(s){switch(s){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function XA(s){Js(new Ki("auth",(t,{options:i})=>{const a=t.getProvider("app").getImmediate(),o=t.getProvider("heartbeat"),c=t.getProvider("app-check-internal"),{apiKey:h,authDomain:d}=a.options;Q(h&&!h.includes(":"),"invalid-api-key",{appName:a.name});const p={apiKey:h,authDomain:d,clientPlatform:s,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Fv(s)},g=new hC(a,o,c,p);return TC(g,i),g},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((t,i,a)=>{t.getProvider("auth-internal").initialize()})),Js(new Ki("auth-internal",t=>{const i=es(t.getProvider("auth").getImmediate());return(a=>new FA(a))(i)},"PRIVATE").setInstantiationMode("EXPLICIT")),gi(Mm,km,KA(s)),gi(Mm,km,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const WA=5*60,ZA=Tv("authIdTokenMaxAge")||WA;let xm=null;const JA=s=>async t=>{const i=t&&await t.getIdTokenResult(),a=i&&(new Date().getTime()-Date.parse(i.issuedAtTime))/1e3;if(a&&a>ZA)return;const o=i==null?void 0:i.token;xm!==o&&(xm=o,await fetch(s,{method:o?"POST":"DELETE",headers:o?{Authorization:`Bearer ${o}`}:{}}))};function $A(s=Nv()){const t=ph(s,"auth");if(t.isInitialized())return t.getImmediate();const i=SC(s,{popupRedirectResolver:QA,persistence:[iA,YC,sy]}),a=Tv("authTokenSyncURL");if(a&&typeof isSecureContext=="boolean"&&isSecureContext){const c=new URL(a,location.origin);if(location.origin===c.origin){const h=JA(c.toString());BC(i,h,()=>h(i.currentUser)),PC(i,d=>h(d))}}const o=Ev("auth");return o&&bC(i,`http://${o}`),i}function eR(){var s,t;return(t=(s=document.getElementsByTagName("head"))===null||s===void 0?void 0:s[0])!==null&&t!==void 0?t:document}dC({loadJS(s){return new Promise((t,i)=>{const a=document.createElement("script");a.setAttribute("src",s),a.onload=t,a.onerror=o=>{const c=on("internal-error");c.customData=o,i(c)},a.type="text/javascript",a.charset="UTF-8",eR().appendChild(a)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});XA("Browser");var Um={};const Lm="@firebase/database",zm="1.0.14";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let fy="";function tR(s){fy=s}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nR{constructor(t){this.domStorage_=t,this.prefix_="firebase:"}set(t,i){i==null?this.domStorage_.removeItem(this.prefixedName_(t)):this.domStorage_.setItem(this.prefixedName_(t),We(i))}get(t){const i=this.domStorage_.getItem(this.prefixedName_(t));return i==null?null:Ta(i)}remove(t){this.domStorage_.removeItem(this.prefixedName_(t))}prefixedName_(t){return this.prefix_+t}toString(){return this.domStorage_.toString()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iR{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(t,i){i==null?delete this.cache_[t]:this.cache_[t]=i}get(t){return cn(this.cache_,t)?this.cache_[t]:null}remove(t){delete this.cache_[t]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hy=function(s){try{if(typeof window<"u"&&typeof window[s]<"u"){const t=window[s];return t.setItem("firebase:sentinel","cache"),t.removeItem("firebase:sentinel"),new nR(t)}}catch{}return new iR},Qi=hy("localStorage"),sR=hy("sessionStorage");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xs=new dh("@firebase/database"),rR=function(){let s=1;return function(){return s++}}(),dy=function(s){const t=IT(s),i=new wT;i.update(t);const a=i.digest();return ch.encodeByteArray(a)},Ba=function(...s){let t="";for(let i=0;i<s.length;i++){const a=s[i];Array.isArray(a)||a&&typeof a=="object"&&typeof a.length=="number"?t+=Ba.apply(null,a):typeof a=="object"?t+=We(a):t+=a,t+=" "}return t};let ma=null,Hm=!0;const aR=function(s,t){U(!0,"Can't turn on custom loggers persistently."),Xs.logLevel=Ee.VERBOSE,ma=Xs.log.bind(Xs)},lt=function(...s){if(Hm===!0&&(Hm=!1,ma===null&&sR.get("logging_enabled")===!0&&aR()),ma){const t=Ba.apply(null,s);ma(t)}},qa=function(s){return function(...t){lt(s,...t)}},Xf=function(...s){const t="FIREBASE INTERNAL ERROR: "+Ba(...s);Xs.error(t)},Un=function(...s){const t=`FIREBASE FATAL ERROR: ${Ba(...s)}`;throw Xs.error(t),new Error(t)},pt=function(...s){const t="FIREBASE WARNING: "+Ba(...s);Xs.warn(t)},lR=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&pt("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},Ah=function(s){return typeof s=="number"&&(s!==s||s===Number.POSITIVE_INFINITY||s===Number.NEGATIVE_INFINITY)},oR=function(s){if(document.readyState==="complete")s();else{let t=!1;const i=function(){if(!document.body){setTimeout(i,Math.floor(10));return}t||(t=!0,s())};document.addEventListener?(document.addEventListener("DOMContentLoaded",i,!1),window.addEventListener("load",i,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&i()}),window.attachEvent("onload",i))}},$s="[MIN_NAME]",Zi="[MAX_NAME]",ts=function(s,t){if(s===t)return 0;if(s===$s||t===Zi)return-1;if(t===$s||s===Zi)return 1;{const i=Pm(s),a=Pm(t);return i!==null?a!==null?i-a===0?s.length-t.length:i-a:-1:a!==null?1:s<t?-1:1}},uR=function(s,t){return s===t?0:s<t?-1:1},ca=function(s,t){if(t&&s in t)return t[s];throw new Error("Missing required key ("+s+") in object: "+We(t))},Rh=function(s){if(typeof s!="object"||s===null)return We(s);const t=[];for(const a in s)t.push(a);t.sort();let i="{";for(let a=0;a<t.length;a++)a!==0&&(i+=","),i+=We(t[a]),i+=":",i+=Rh(s[t[a]]);return i+="}",i},_y=function(s,t){const i=s.length;if(i<=t)return[s];const a=[];for(let o=0;o<i;o+=t)o+t>i?a.push(s.substring(o,i)):a.push(s.substring(o,o+t));return a};function ot(s,t){for(const i in s)s.hasOwnProperty(i)&&t(i,s[i])}const py=function(s){U(!Ah(s),"Invalid JSON number");const t=11,i=52,a=(1<<t-1)-1;let o,c,h,d,p;s===0?(c=0,h=0,o=1/s===-1/0?1:0):(o=s<0,s=Math.abs(s),s>=Math.pow(2,1-a)?(d=Math.min(Math.floor(Math.log(s)/Math.LN2),a),c=d+a,h=Math.round(s*Math.pow(2,i-d)-Math.pow(2,i))):(c=0,h=Math.round(s/Math.pow(2,1-a-i))));const g=[];for(p=i;p;p-=1)g.push(h%2?1:0),h=Math.floor(h/2);for(p=t;p;p-=1)g.push(c%2?1:0),c=Math.floor(c/2);g.push(o?1:0),g.reverse();const v=g.join("");let E="";for(p=0;p<64;p+=8){let b=parseInt(v.substr(p,8),2).toString(16);b.length===1&&(b="0"+b),E=E+b}return E.toLowerCase()},cR=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},fR=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"};function hR(s,t){let i="Unknown Error";s==="too_big"?i="The data requested exceeds the maximum size that can be accessed with a single request.":s==="permission_denied"?i="Client doesn't have permission to access the desired data.":s==="unavailable"&&(i="The service is unavailable");const a=new Error(s+" at "+t._path.toString()+": "+i);return a.code=s.toUpperCase(),a}const dR=new RegExp("^-?(0*)\\d{1,10}$"),_R=-2147483648,pR=2147483647,Pm=function(s){if(dR.test(s)){const t=Number(s);if(t>=_R&&t<=pR)return t}return null},or=function(s){try{s()}catch(t){setTimeout(()=>{const i=t.stack||"";throw pt("Exception was thrown by user callback.",i),t},Math.floor(0))}},gR=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},va=function(s,t){const i=setTimeout(s,t);return typeof i=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(i):typeof i=="object"&&i.unref&&i.unref(),i};/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mR{constructor(t,i){this.appCheckProvider=i,this.appName=t.name,Gt(t)&&t.settings.appCheckToken&&(this.serverAppAppCheckToken=t.settings.appCheckToken),this.appCheck=i==null?void 0:i.getImmediate({optional:!0}),this.appCheck||i==null||i.get().then(a=>this.appCheck=a)}getToken(t){if(this.serverAppAppCheckToken){if(t)throw new Error("Attempted reuse of `FirebaseServerApp.appCheckToken` after previous usage failed.");return Promise.resolve({token:this.serverAppAppCheckToken})}return this.appCheck?this.appCheck.getToken(t):new Promise((i,a)=>{setTimeout(()=>{this.appCheck?this.getToken(t).then(i,a):i(null)},0)})}addTokenChangeListener(t){var i;(i=this.appCheckProvider)===null||i===void 0||i.get().then(a=>a.addTokenListener(t))}notifyForInvalidToken(){pt(`Provided AppCheck credentials for the app named "${this.appName}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vR{constructor(t,i,a){this.appName_=t,this.firebaseOptions_=i,this.authProvider_=a,this.auth_=null,this.auth_=a.getImmediate({optional:!0}),this.auth_||a.onInit(o=>this.auth_=o)}getToken(t){return this.auth_?this.auth_.getToken(t).catch(i=>i&&i.code==="auth/token-not-initialized"?(lt("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(i)):new Promise((i,a)=>{setTimeout(()=>{this.auth_?this.getToken(t).then(i,a):i(null)},0)})}addTokenChangeListener(t){this.auth_?this.auth_.addAuthTokenListener(t):this.authProvider_.get().then(i=>i.addAuthTokenListener(t))}removeTokenChangeListener(t){this.authProvider_.get().then(i=>i.removeAuthTokenListener(t))}notifyForInvalidToken(){let t='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?t+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?t+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':t+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',pt(t)}}class mo{constructor(t){this.accessToken=t}getToken(t){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(t){t(this.accessToken)}removeTokenChangeListener(t){}notifyForInvalidToken(){}}mo.OWNER="owner";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wh="5",gy="v",my="s",vy="r",yy="f",Ey=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,Sy="ls",Ty="p",Wf="ac",by="websocket",Cy="long_polling";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ay{constructor(t,i,a,o,c=!1,h="",d=!1,p=!1,g=null){this.secure=i,this.namespace=a,this.webSocketOnly=o,this.nodeAdmin=c,this.persistenceKey=h,this.includeNamespaceInQueryParams=d,this.isUsingEmulator=p,this.emulatorOptions=g,this._host=t.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=Qi.get("host:"+t)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(t){t!==this.internalHost&&(this.internalHost=t,this.isCacheableHost()&&Qi.set("host:"+this._host,this.internalHost))}toString(){let t=this.toURLString();return this.persistenceKey&&(t+="<"+this.persistenceKey+">"),t}toURLString(){const t=this.secure?"https://":"http://",i=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${t}${this.host}/${i}`}}function yR(s){return s.host!==s.internalHost||s.isCustomHost()||s.includeNamespaceInQueryParams}function Ry(s,t,i){U(typeof t=="string","typeof type must == string"),U(typeof i=="object","typeof params must == object");let a;if(t===by)a=(s.secure?"wss://":"ws://")+s.internalHost+"/.ws?";else if(t===Cy)a=(s.secure?"https://":"http://")+s.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+t);yR(s)&&(i.ns=s.namespace);const o=[];return ot(i,(c,h)=>{o.push(c+"="+h)}),a+o.join("&")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ER{constructor(){this.counters_={}}incrementCounter(t,i=1){cn(this.counters_,t)||(this.counters_[t]=0),this.counters_[t]+=i}get(){return oT(this.counters_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mf={},kf={};function Nh(s){const t=s.toString();return Mf[t]||(Mf[t]=new ER),Mf[t]}function SR(s,t){const i=s.toString();return kf[i]||(kf[i]=t()),kf[i]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class TR{constructor(t){this.onMessage_=t,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(t,i){this.closeAfterResponse=t,this.onClose=i,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(t,i){for(this.pendingResponses[t]=i;this.pendingResponses[this.currentResponseNum];){const a=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let o=0;o<a.length;++o)a[o]&&or(()=>{this.onMessage_(a[o])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bm="start",bR="close",CR="pLPCommand",AR="pRTLPCB",wy="id",Ny="pw",Oy="ser",RR="cb",wR="seg",NR="ts",OR="d",DR="dframe",Dy=1870,Iy=30,IR=Dy-Iy,MR=25e3,kR=3e4;class Ys{constructor(t,i,a,o,c,h,d){this.connId=t,this.repoInfo=i,this.applicationId=a,this.appCheckToken=o,this.authToken=c,this.transportSessionId=h,this.lastSessionId=d,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=qa(t),this.stats_=Nh(i),this.urlFn=p=>(this.appCheckToken&&(p[Wf]=this.appCheckToken),Ry(i,Cy,p))}open(t,i){this.curSegmentNum=0,this.onDisconnect_=i,this.myPacketOrderer=new TR(t),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(kR)),oR(()=>{if(this.isClosed_)return;this.scriptTagHolder=new Oh((...c)=>{const[h,d,p,g,v]=c;if(this.incrementIncomingBytes_(c),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,h===Bm)this.id=d,this.password=p;else if(h===bR)d?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(d,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+h)},(...c)=>{const[h,d]=c;this.incrementIncomingBytes_(c),this.myPacketOrderer.handleResponse(h,d)},()=>{this.onClosed_()},this.urlFn);const a={};a[Bm]="t",a[Oy]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(a[RR]=this.scriptTagHolder.uniqueCallbackIdentifier),a[gy]=wh,this.transportSessionId&&(a[my]=this.transportSessionId),this.lastSessionId&&(a[Sy]=this.lastSessionId),this.applicationId&&(a[Ty]=this.applicationId),this.appCheckToken&&(a[Wf]=this.appCheckToken),typeof location<"u"&&location.hostname&&Ey.test(location.hostname)&&(a[vy]=yy);const o=this.urlFn(a);this.log_("Connecting via long-poll to "+o),this.scriptTagHolder.addTag(o,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){Ys.forceAllow_=!0}static forceDisallow(){Ys.forceDisallow_=!0}static isAvailable(){return Ys.forceAllow_?!0:!Ys.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!cR()&&!fR()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(t){const i=We(t);this.bytesSent+=i.length,this.stats_.incrementCounter("bytes_sent",i.length);const a=vv(i),o=_y(a,IR);for(let c=0;c<o.length;c++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,o.length,o[c]),this.curSegmentNum++}addDisconnectPingFrame(t,i){this.myDisconnFrame=document.createElement("iframe");const a={};a[DR]="t",a[wy]=t,a[Ny]=i,this.myDisconnFrame.src=this.urlFn(a),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(t){const i=We(t).length;this.bytesReceived+=i,this.stats_.incrementCounter("bytes_received",i)}}class Oh{constructor(t,i,a,o){this.onDisconnect=a,this.urlFn=o,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=rR(),window[CR+this.uniqueCallbackIdentifier]=t,window[AR+this.uniqueCallbackIdentifier]=i,this.myIFrame=Oh.createIFrame_();let c="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(c='<script>document.domain="'+document.domain+'";<\/script>');const h="<html><body>"+c+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(h),this.myIFrame.doc.close()}catch(d){lt("frame writing exception"),d.stack&&lt(d.stack),lt(d)}}}static createIFrame_(){const t=document.createElement("iframe");if(t.style.display="none",document.body){document.body.appendChild(t);try{t.contentWindow.document||lt("No IE domain setting required")}catch{const a=document.domain;t.src="javascript:void((function(){document.open();document.domain='"+a+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return t.contentDocument?t.doc=t.contentDocument:t.contentWindow?t.doc=t.contentWindow.document:t.document&&(t.doc=t.document),t}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const t=this.onDisconnect;t&&(this.onDisconnect=null,t())}startLongPoll(t,i){for(this.myID=t,this.myPW=i,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const t={};t[wy]=this.myID,t[Ny]=this.myPW,t[Oy]=this.currentSerial;let i=this.urlFn(t),a="",o=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+Iy+a.length<=Dy;){const h=this.pendingSegs.shift();a=a+"&"+wR+o+"="+h.seg+"&"+NR+o+"="+h.ts+"&"+OR+o+"="+h.d,o++}return i=i+a,this.addLongPollTag_(i,this.currentSerial),!0}else return!1}enqueueSegment(t,i,a){this.pendingSegs.push({seg:t,ts:i,d:a}),this.alive&&this.newRequest_()}addLongPollTag_(t,i){this.outstandingRequests.add(i);const a=()=>{this.outstandingRequests.delete(i),this.newRequest_()},o=setTimeout(a,Math.floor(MR)),c=()=>{clearTimeout(o),a()};this.addTag(t,c)}addTag(t,i){setTimeout(()=>{try{if(!this.sendNewPolls)return;const a=this.myIFrame.doc.createElement("script");a.type="text/javascript",a.async=!0,a.src=t,a.onload=a.onreadystatechange=function(){const o=a.readyState;(!o||o==="loaded"||o==="complete")&&(a.onload=a.onreadystatechange=null,a.parentNode&&a.parentNode.removeChild(a),i())},a.onerror=()=>{lt("Long-poll script failed to load: "+t),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(a)}catch{}},Math.floor(1))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xR=16384,UR=45e3;let No=null;typeof MozWebSocket<"u"?No=MozWebSocket:typeof WebSocket<"u"&&(No=WebSocket);class Wt{constructor(t,i,a,o,c,h,d){this.connId=t,this.applicationId=a,this.appCheckToken=o,this.authToken=c,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=qa(this.connId),this.stats_=Nh(i),this.connURL=Wt.connectionURL_(i,h,d,o,a),this.nodeAdmin=i.nodeAdmin}static connectionURL_(t,i,a,o,c){const h={};return h[gy]=wh,typeof location<"u"&&location.hostname&&Ey.test(location.hostname)&&(h[vy]=yy),i&&(h[my]=i),a&&(h[Sy]=a),o&&(h[Wf]=o),c&&(h[Ty]=c),Ry(t,by,h)}open(t,i){this.onDisconnect=i,this.onMessage=t,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,Qi.set("previous_websocket_failure",!0);try{let a;yT(),this.mySock=new No(this.connURL,[],a)}catch(a){this.log_("Error instantiating WebSocket.");const o=a.message||a.data;o&&this.log_(o),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=a=>{this.handleIncomingFrame(a)},this.mySock.onerror=a=>{this.log_("WebSocket error.  Closing connection.");const o=a.message||a.data;o&&this.log_(o),this.onClosed_()}}start(){}static forceDisallow(){Wt.forceDisallow_=!0}static isAvailable(){let t=!1;if(typeof navigator<"u"&&navigator.userAgent){const i=/Android ([0-9]{0,}\.[0-9]{0,})/,a=navigator.userAgent.match(i);a&&a.length>1&&parseFloat(a[1])<4.4&&(t=!0)}return!t&&No!==null&&!Wt.forceDisallow_}static previouslyFailed(){return Qi.isInMemoryStorage||Qi.get("previous_websocket_failure")===!0}markConnectionHealthy(){Qi.remove("previous_websocket_failure")}appendFrame_(t){if(this.frames.push(t),this.frames.length===this.totalFrames){const i=this.frames.join("");this.frames=null;const a=Ta(i);this.onMessage(a)}}handleNewFrameCount_(t){this.totalFrames=t,this.frames=[]}extractFrameCount_(t){if(U(this.frames===null,"We already have a frame buffer"),t.length<=6){const i=Number(t);if(!isNaN(i))return this.handleNewFrameCount_(i),null}return this.handleNewFrameCount_(1),t}handleIncomingFrame(t){if(this.mySock===null)return;const i=t.data;if(this.bytesReceived+=i.length,this.stats_.incrementCounter("bytes_received",i.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(i);else{const a=this.extractFrameCount_(i);a!==null&&this.appendFrame_(a)}}send(t){this.resetKeepAlive();const i=We(t);this.bytesSent+=i.length,this.stats_.incrementCounter("bytes_sent",i.length);const a=_y(i,xR);a.length>1&&this.sendString_(String(a.length));for(let o=0;o<a.length;o++)this.sendString_(a[o])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(UR))}sendString_(t){try{this.mySock.send(t)}catch(i){this.log_("Exception thrown from WebSocket.send():",i.message||i.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}Wt.responsesRequiredToBeHealthy=2;Wt.healthyTimeout=3e4;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ra{static get ALL_TRANSPORTS(){return[Ys,Wt]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}constructor(t){this.initTransports_(t)}initTransports_(t){const i=Wt&&Wt.isAvailable();let a=i&&!Wt.previouslyFailed();if(t.webSocketOnly&&(i||pt("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),a=!0),a)this.transports_=[Wt];else{const o=this.transports_=[];for(const c of Ra.ALL_TRANSPORTS)c&&c.isAvailable()&&o.push(c);Ra.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}Ra.globalTransportInitialized_=!1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const LR=6e4,zR=5e3,HR=10*1024,PR=100*1024,xf="t",qm="d",BR="s",Vm="r",qR="e",Gm="o",jm="a",Ym="n",Qm="p",VR="h";class GR{constructor(t,i,a,o,c,h,d,p,g,v){this.id=t,this.repoInfo_=i,this.applicationId_=a,this.appCheckToken_=o,this.authToken_=c,this.onMessage_=h,this.onReady_=d,this.onDisconnect_=p,this.onKill_=g,this.lastSessionId=v,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=qa("c:"+this.id+":"),this.transportManager_=new Ra(i),this.log_("Connection created"),this.start_()}start_(){const t=this.transportManager_.initialTransport();this.conn_=new t(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=t.responsesRequiredToBeHealthy||0;const i=this.connReceiver_(this.conn_),a=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(i,a)},Math.floor(0));const o=t.healthyTimeout||0;o>0&&(this.healthyTimeout_=va(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>PR?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>HR?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(o)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(t){return i=>{t===this.conn_?this.onConnectionLost_(i):t===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(t){return i=>{this.state_!==2&&(t===this.rx_?this.onPrimaryMessageReceived_(i):t===this.secondaryConn_?this.onSecondaryMessageReceived_(i):this.log_("message on old connection"))}}sendRequest(t){const i={t:"d",d:t};this.sendData_(i)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(t){if(xf in t){const i=t[xf];i===jm?this.upgradeIfSecondaryHealthy_():i===Vm?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):i===Gm&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(t){const i=ca("t",t),a=ca("d",t);if(i==="c")this.onSecondaryControl_(a);else if(i==="d")this.pendingDataMessages.push(a);else throw new Error("Unknown protocol layer: "+i)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:Qm,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:jm,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:Ym,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(t){const i=ca("t",t),a=ca("d",t);i==="c"?this.onControl_(a):i==="d"&&this.onDataMessage_(a)}onDataMessage_(t){this.onPrimaryResponse_(),this.onMessage_(t)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(t){const i=ca(xf,t);if(qm in t){const a=t[qm];if(i===VR){const o=Object.assign({},a);this.repoInfo_.isUsingEmulator&&(o.h=this.repoInfo_.host),this.onHandshake_(o)}else if(i===Ym){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let o=0;o<this.pendingDataMessages.length;++o)this.onDataMessage_(this.pendingDataMessages[o]);this.pendingDataMessages=[],this.tryCleanupConnection()}else i===BR?this.onConnectionShutdown_(a):i===Vm?this.onReset_(a):i===qR?Xf("Server Error: "+a):i===Gm?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):Xf("Unknown control packet command: "+i)}}onHandshake_(t){const i=t.ts,a=t.v,o=t.h;this.sessionId=t.s,this.repoInfo_.host=o,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,i),wh!==a&&pt("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const t=this.transportManager_.upgradeTransport();t&&this.startUpgrade_(t)}startUpgrade_(t){this.secondaryConn_=new t(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=t.responsesRequiredToBeHealthy||0;const i=this.connReceiver_(this.secondaryConn_),a=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(i,a),va(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(LR))}onReset_(t){this.log_("Reset packet received.  New host: "+t),this.repoInfo_.host=t,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(t,i){this.log_("Realtime connection established."),this.conn_=t,this.state_=1,this.onReady_&&(this.onReady_(i,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):va(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(zR))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:Qm,d:{}}}))}onSecondaryConnectionLost_(){const t=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===t||this.rx_===t)&&this.close()}onConnectionLost_(t){this.conn_=null,!t&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(Qi.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(t){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(t),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(t){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(t)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class My{put(t,i,a,o){}merge(t,i,a,o){}refreshAuthToken(t){}refreshAppCheckToken(t){}onDisconnectPut(t,i,a){}onDisconnectMerge(t,i,a){}onDisconnectCancel(t,i){}reportStats(t){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ky{constructor(t){this.allowedEvents_=t,this.listeners_={},U(Array.isArray(t)&&t.length>0,"Requires a non-empty array")}trigger(t,...i){if(Array.isArray(this.listeners_[t])){const a=[...this.listeners_[t]];for(let o=0;o<a.length;o++)a[o].callback.apply(a[o].context,i)}}on(t,i,a){this.validateEventType_(t),this.listeners_[t]=this.listeners_[t]||[],this.listeners_[t].push({callback:i,context:a});const o=this.getInitialEvent(t);o&&i.apply(a,o)}off(t,i,a){this.validateEventType_(t);const o=this.listeners_[t]||[];for(let c=0;c<o.length;c++)if(o[c].callback===i&&(!a||a===o[c].context)){o.splice(c,1);return}}validateEventType_(t){U(this.allowedEvents_.find(i=>i===t),"Unknown event: "+t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oo extends ky{static getInstance(){return new Oo}constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!hh()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}getInitialEvent(t){return U(t==="online","Unknown event type: "+t),[this.online_]}currentlyOnline(){return this.online_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fm=32,Km=768;class Se{constructor(t,i){if(i===void 0){this.pieces_=t.split("/");let a=0;for(let o=0;o<this.pieces_.length;o++)this.pieces_[o].length>0&&(this.pieces_[a]=this.pieces_[o],a++);this.pieces_.length=a,this.pieceNum_=0}else this.pieces_=t,this.pieceNum_=i}toString(){let t="";for(let i=this.pieceNum_;i<this.pieces_.length;i++)this.pieces_[i]!==""&&(t+="/"+this.pieces_[i]);return t||"/"}}function de(){return new Se("")}function ne(s){return s.pieceNum_>=s.pieces_.length?null:s.pieces_[s.pieceNum_]}function yi(s){return s.pieces_.length-s.pieceNum_}function Oe(s){let t=s.pieceNum_;return t<s.pieces_.length&&t++,new Se(s.pieces_,t)}function Dh(s){return s.pieceNum_<s.pieces_.length?s.pieces_[s.pieces_.length-1]:null}function jR(s){let t="";for(let i=s.pieceNum_;i<s.pieces_.length;i++)s.pieces_[i]!==""&&(t+="/"+encodeURIComponent(String(s.pieces_[i])));return t||"/"}function wa(s,t=0){return s.pieces_.slice(s.pieceNum_+t)}function xy(s){if(s.pieceNum_>=s.pieces_.length)return null;const t=[];for(let i=s.pieceNum_;i<s.pieces_.length-1;i++)t.push(s.pieces_[i]);return new Se(t,0)}function He(s,t){const i=[];for(let a=s.pieceNum_;a<s.pieces_.length;a++)i.push(s.pieces_[a]);if(t instanceof Se)for(let a=t.pieceNum_;a<t.pieces_.length;a++)i.push(t.pieces_[a]);else{const a=t.split("/");for(let o=0;o<a.length;o++)a[o].length>0&&i.push(a[o])}return new Se(i,0)}function ue(s){return s.pieceNum_>=s.pieces_.length}function _t(s,t){const i=ne(s),a=ne(t);if(i===null)return t;if(i===a)return _t(Oe(s),Oe(t));throw new Error("INTERNAL ERROR: innerPath ("+t+") is not within outerPath ("+s+")")}function YR(s,t){const i=wa(s,0),a=wa(t,0);for(let o=0;o<i.length&&o<a.length;o++){const c=ts(i[o],a[o]);if(c!==0)return c}return i.length===a.length?0:i.length<a.length?-1:1}function Ih(s,t){if(yi(s)!==yi(t))return!1;for(let i=s.pieceNum_,a=t.pieceNum_;i<=s.pieces_.length;i++,a++)if(s.pieces_[i]!==t.pieces_[a])return!1;return!0}function jt(s,t){let i=s.pieceNum_,a=t.pieceNum_;if(yi(s)>yi(t))return!1;for(;i<s.pieces_.length;){if(s.pieces_[i]!==t.pieces_[a])return!1;++i,++a}return!0}class QR{constructor(t,i){this.errorPrefix_=i,this.parts_=wa(t,0),this.byteLength_=Math.max(1,this.parts_.length);for(let a=0;a<this.parts_.length;a++)this.byteLength_+=Vo(this.parts_[a]);Uy(this)}}function FR(s,t){s.parts_.length>0&&(s.byteLength_+=1),s.parts_.push(t),s.byteLength_+=Vo(t),Uy(s)}function KR(s){const t=s.parts_.pop();s.byteLength_-=Vo(t),s.parts_.length>0&&(s.byteLength_-=1)}function Uy(s){if(s.byteLength_>Km)throw new Error(s.errorPrefix_+"has a key path longer than "+Km+" bytes ("+s.byteLength_+").");if(s.parts_.length>Fm)throw new Error(s.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+Fm+") or object contains a cycle "+Yi(s))}function Yi(s){return s.parts_.length===0?"":"in property '"+s.parts_.join(".")+"'"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mh extends ky{static getInstance(){return new Mh}constructor(){super(["visible"]);let t,i;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(i="visibilitychange",t="hidden"):typeof document.mozHidden<"u"?(i="mozvisibilitychange",t="mozHidden"):typeof document.msHidden<"u"?(i="msvisibilitychange",t="msHidden"):typeof document.webkitHidden<"u"&&(i="webkitvisibilitychange",t="webkitHidden")),this.visible_=!0,i&&document.addEventListener(i,()=>{const a=!document[t];a!==this.visible_&&(this.visible_=a,this.trigger("visible",a))},!1)}getInitialEvent(t){return U(t==="visible","Unknown event type: "+t),[this.visible_]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fa=1e3,XR=60*5*1e3,Xm=30*1e3,WR=1.3,ZR=3e4,JR="server_kill",Wm=3;class Mn extends My{constructor(t,i,a,o,c,h,d,p){if(super(),this.repoInfo_=t,this.applicationId_=i,this.onDataUpdate_=a,this.onConnectStatus_=o,this.onServerInfoUpdate_=c,this.authTokenProvider_=h,this.appCheckTokenProvider_=d,this.authOverride_=p,this.id=Mn.nextPersistentConnectionId_++,this.log_=qa("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=fa,this.maxReconnectDelay_=XR,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,p)throw new Error("Auth override specified in options, but not supported on non Node.js platforms");Mh.getInstance().on("visible",this.onVisible_,this),t.host.indexOf("fblocal")===-1&&Oo.getInstance().on("online",this.onOnline_,this)}sendRequest(t,i,a){const o=++this.requestNumber_,c={r:o,a:t,b:i};this.log_(We(c)),U(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(c),a&&(this.requestCBHash_[o]=a)}get(t){this.initConnection_();const i=new xa,o={action:"g",request:{p:t._path.toString(),q:t._queryObject},onComplete:h=>{const d=h.d;h.s==="ok"?i.resolve(d):i.reject(d)}};this.outstandingGets_.push(o),this.outstandingGetCount_++;const c=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(c),i.promise}listen(t,i,a,o){this.initConnection_();const c=t._queryIdentifier,h=t._path.toString();this.log_("Listen called for "+h+" "+c),this.listens.has(h)||this.listens.set(h,new Map),U(t._queryParams.isDefault()||!t._queryParams.loadsAllData(),"listen() called for non-default but complete query"),U(!this.listens.get(h).has(c),"listen() called twice for same path/queryId.");const d={onComplete:o,hashFn:i,query:t,tag:a};this.listens.get(h).set(c,d),this.connected_&&this.sendListen_(d)}sendGet_(t){const i=this.outstandingGets_[t];this.sendRequest("g",i.request,a=>{delete this.outstandingGets_[t],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),i.onComplete&&i.onComplete(a)})}sendListen_(t){const i=t.query,a=i._path.toString(),o=i._queryIdentifier;this.log_("Listen on "+a+" for "+o);const c={p:a},h="q";t.tag&&(c.q=i._queryObject,c.t=t.tag),c.h=t.hashFn(),this.sendRequest(h,c,d=>{const p=d.d,g=d.s;Mn.warnOnListenWarnings_(p,i),(this.listens.get(a)&&this.listens.get(a).get(o))===t&&(this.log_("listen response",d),g!=="ok"&&this.removeListen_(a,o),t.onComplete&&t.onComplete(g,p))})}static warnOnListenWarnings_(t,i){if(t&&typeof t=="object"&&cn(t,"w")){const a=Zs(t,"w");if(Array.isArray(a)&&~a.indexOf("no_index")){const o='".indexOn": "'+i._queryParams.getIndex().toString()+'"',c=i._path.toString();pt(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${o} at ${c} to your security rules for better performance.`)}}}refreshAuthToken(t){this.authToken_=t,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(t)}reduceReconnectDelayIfAdminCredential_(t){(t&&t.length===40||RT(t))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=Xm)}refreshAppCheckToken(t){this.appCheckToken_=t,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const t=this.authToken_,i=AT(t)?"auth":"gauth",a={cred:t};this.authOverride_===null?a.noauth=!0:typeof this.authOverride_=="object"&&(a.authvar=this.authOverride_),this.sendRequest(i,a,o=>{const c=o.s,h=o.d||"error";this.authToken_===t&&(c==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(c,h))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},t=>{const i=t.s,a=t.d||"error";i==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(i,a)})}unlisten(t,i){const a=t._path.toString(),o=t._queryIdentifier;this.log_("Unlisten called for "+a+" "+o),U(t._queryParams.isDefault()||!t._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(a,o)&&this.connected_&&this.sendUnlisten_(a,o,t._queryObject,i)}sendUnlisten_(t,i,a,o){this.log_("Unlisten on "+t+" for "+i);const c={p:t},h="n";o&&(c.q=a,c.t=o),this.sendRequest(h,c)}onDisconnectPut(t,i,a){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",t,i,a):this.onDisconnectRequestQueue_.push({pathString:t,action:"o",data:i,onComplete:a})}onDisconnectMerge(t,i,a){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",t,i,a):this.onDisconnectRequestQueue_.push({pathString:t,action:"om",data:i,onComplete:a})}onDisconnectCancel(t,i){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",t,null,i):this.onDisconnectRequestQueue_.push({pathString:t,action:"oc",data:null,onComplete:i})}sendOnDisconnect_(t,i,a,o){const c={p:i,d:a};this.log_("onDisconnect "+t,c),this.sendRequest(t,c,h=>{o&&setTimeout(()=>{o(h.s,h.d)},Math.floor(0))})}put(t,i,a,o){this.putInternal("p",t,i,a,o)}merge(t,i,a,o){this.putInternal("m",t,i,a,o)}putInternal(t,i,a,o,c){this.initConnection_();const h={p:i,d:a};c!==void 0&&(h.h=c),this.outstandingPuts_.push({action:t,request:h,onComplete:o}),this.outstandingPutCount_++;const d=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(d):this.log_("Buffering put: "+i)}sendPut_(t){const i=this.outstandingPuts_[t].action,a=this.outstandingPuts_[t].request,o=this.outstandingPuts_[t].onComplete;this.outstandingPuts_[t].queued=this.connected_,this.sendRequest(i,a,c=>{this.log_(i+" response",c),delete this.outstandingPuts_[t],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),o&&o(c.s,c.d)})}reportStats(t){if(this.connected_){const i={c:t};this.log_("reportStats",i),this.sendRequest("s",i,a=>{if(a.s!=="ok"){const c=a.d;this.log_("reportStats","Error sending stats: "+c)}})}}onDataMessage_(t){if("r"in t){this.log_("from server: "+We(t));const i=t.r,a=this.requestCBHash_[i];a&&(delete this.requestCBHash_[i],a(t.b))}else{if("error"in t)throw"A server-side error has occurred: "+t.error;"a"in t&&this.onDataPush_(t.a,t.b)}}onDataPush_(t,i){this.log_("handleServerMessage",t,i),t==="d"?this.onDataUpdate_(i.p,i.d,!1,i.t):t==="m"?this.onDataUpdate_(i.p,i.d,!0,i.t):t==="c"?this.onListenRevoked_(i.p,i.q):t==="ac"?this.onAuthRevoked_(i.s,i.d):t==="apc"?this.onAppCheckRevoked_(i.s,i.d):t==="sd"?this.onSecurityDebugPacket_(i):Xf("Unrecognized action received from server: "+We(t)+`
Are you using the latest client?`)}onReady_(t,i){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(t),this.lastSessionId=i,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(t){U(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(t))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(t){t&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=fa,this.realtime_||this.scheduleConnect_(0)),this.visible_=t}onOnline_(t){t?(this.log_("Browser went online."),this.reconnectDelay_=fa,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>ZR&&(this.reconnectDelay_=fa),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const t=Math.max(0,new Date().getTime()-this.lastConnectionAttemptTime_);let i=Math.max(0,this.reconnectDelay_-t);i=Math.random()*i,this.log_("Trying to reconnect in "+i+"ms"),this.scheduleConnect_(i),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*WR)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const t=this.onDataMessage_.bind(this),i=this.onReady_.bind(this),a=this.onRealtimeDisconnect_.bind(this),o=this.id+":"+Mn.nextConnectionId_++,c=this.lastSessionId;let h=!1,d=null;const p=function(){d?d.close():(h=!0,a())},g=function(E){U(d,"sendRequest call when we're not connected not allowed."),d.sendRequest(E)};this.realtime_={close:p,sendRequest:g};const v=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[E,b]=await Promise.all([this.authTokenProvider_.getToken(v),this.appCheckTokenProvider_.getToken(v)]);h?lt("getToken() completed but was canceled"):(lt("getToken() completed. Creating connection."),this.authToken_=E&&E.accessToken,this.appCheckToken_=b&&b.token,d=new GR(o,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,t,i,a,x=>{pt(x+" ("+this.repoInfo_.toString()+")"),this.interrupt(JR)},c))}catch(E){this.log_("Failed to get token: "+E),h||(this.repoInfo_.nodeAdmin&&pt(E),p())}}}interrupt(t){lt("Interrupting connection for reason: "+t),this.interruptReasons_[t]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(t){lt("Resuming connection for reason: "+t),delete this.interruptReasons_[t],Pf(this.interruptReasons_)&&(this.reconnectDelay_=fa,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(t){const i=t-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:i})}cancelSentTransactions_(){for(let t=0;t<this.outstandingPuts_.length;t++){const i=this.outstandingPuts_[t];i&&"h"in i.request&&i.queued&&(i.onComplete&&i.onComplete("disconnect"),delete this.outstandingPuts_[t],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(t,i){let a;i?a=i.map(c=>Rh(c)).join("$"):a="default";const o=this.removeListen_(t,a);o&&o.onComplete&&o.onComplete("permission_denied")}removeListen_(t,i){const a=new Se(t).toString();let o;if(this.listens.has(a)){const c=this.listens.get(a);o=c.get(i),c.delete(i),c.size===0&&this.listens.delete(a)}else o=void 0;return o}onAuthRevoked_(t,i){lt("Auth token revoked: "+t+"/"+i),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(t==="invalid_token"||t==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=Wm&&(this.reconnectDelay_=Xm,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(t,i){lt("App check token revoked: "+t+"/"+i),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(t==="invalid_token"||t==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=Wm&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(t){this.securityDebugCallback_?this.securityDebugCallback_(t):"msg"in t&&console.log("FIREBASE: "+t.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const t of this.listens.values())for(const i of t.values())this.sendListen_(i);for(let t=0;t<this.outstandingPuts_.length;t++)this.outstandingPuts_[t]&&this.sendPut_(t);for(;this.onDisconnectRequestQueue_.length;){const t=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(t.action,t.pathString,t.data,t.onComplete)}for(let t=0;t<this.outstandingGets_.length;t++)this.outstandingGets_[t]&&this.sendGet_(t)}sendConnectStats_(){const t={};let i="js";t["sdk."+i+"."+fy.replace(/\./g,"-")]=1,hh()?t["framework.cordova"]=1:bv()&&(t["framework.reactnative"]=1),this.reportStats(t)}shouldReconnect_(){const t=Oo.getInstance().currentlyOnline();return Pf(this.interruptReasons_)&&t}}Mn.nextPersistentConnectionId_=0;Mn.nextConnectionId_=0;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ie{constructor(t,i){this.name=t,this.node=i}static Wrap(t,i){return new ie(t,i)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qo{getCompare(){return this.compare.bind(this)}indexedValueChanged(t,i){const a=new ie($s,t),o=new ie($s,i);return this.compare(a,o)!==0}minPost(){return ie.MIN}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let oo;class Ly extends Qo{static get __EMPTY_NODE(){return oo}static set __EMPTY_NODE(t){oo=t}compare(t,i){return ts(t.name,i.name)}isDefinedOn(t){throw sr("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(t,i){return!1}minPost(){return ie.MIN}maxPost(){return new ie(Zi,oo)}makePost(t,i){return U(typeof t=="string","KeyIndex indexValue must always be a string."),new ie(t,oo)}toString(){return".key"}}const Ws=new Ly;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uo{constructor(t,i,a,o,c=null){this.isReverse_=o,this.resultGenerator_=c,this.nodeStack_=[];let h=1;for(;!t.isEmpty();)if(t=t,h=i?a(t.key,i):1,o&&(h*=-1),h<0)this.isReverse_?t=t.left:t=t.right;else if(h===0){this.nodeStack_.push(t);break}else this.nodeStack_.push(t),this.isReverse_?t=t.right:t=t.left}getNext(){if(this.nodeStack_.length===0)return null;let t=this.nodeStack_.pop(),i;if(this.resultGenerator_?i=this.resultGenerator_(t.key,t.value):i={key:t.key,value:t.value},this.isReverse_)for(t=t.left;!t.isEmpty();)this.nodeStack_.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack_.push(t),t=t.left;return i}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const t=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(t.key,t.value):{key:t.key,value:t.value}}}class it{constructor(t,i,a,o,c){this.key=t,this.value=i,this.color=a??it.RED,this.left=o??bt.EMPTY_NODE,this.right=c??bt.EMPTY_NODE}copy(t,i,a,o,c){return new it(t??this.key,i??this.value,a??this.color,o??this.left,c??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(t){return this.left.inorderTraversal(t)||!!t(this.key,this.value)||this.right.inorderTraversal(t)}reverseTraversal(t){return this.right.reverseTraversal(t)||t(this.key,this.value)||this.left.reverseTraversal(t)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(t,i,a){let o=this;const c=a(t,o.key);return c<0?o=o.copy(null,null,null,o.left.insert(t,i,a),null):c===0?o=o.copy(null,i,null,null,null):o=o.copy(null,null,null,null,o.right.insert(t,i,a)),o.fixUp_()}removeMin_(){if(this.left.isEmpty())return bt.EMPTY_NODE;let t=this;return!t.left.isRed_()&&!t.left.left.isRed_()&&(t=t.moveRedLeft_()),t=t.copy(null,null,null,t.left.removeMin_(),null),t.fixUp_()}remove(t,i){let a,o;if(a=this,i(t,a.key)<0)!a.left.isEmpty()&&!a.left.isRed_()&&!a.left.left.isRed_()&&(a=a.moveRedLeft_()),a=a.copy(null,null,null,a.left.remove(t,i),null);else{if(a.left.isRed_()&&(a=a.rotateRight_()),!a.right.isEmpty()&&!a.right.isRed_()&&!a.right.left.isRed_()&&(a=a.moveRedRight_()),i(t,a.key)===0){if(a.right.isEmpty())return bt.EMPTY_NODE;o=a.right.min_(),a=a.copy(o.key,o.value,null,null,a.right.removeMin_())}a=a.copy(null,null,null,null,a.right.remove(t,i))}return a.fixUp_()}isRed_(){return this.color}fixUp_(){let t=this;return t.right.isRed_()&&!t.left.isRed_()&&(t=t.rotateLeft_()),t.left.isRed_()&&t.left.left.isRed_()&&(t=t.rotateRight_()),t.left.isRed_()&&t.right.isRed_()&&(t=t.colorFlip_()),t}moveRedLeft_(){let t=this.colorFlip_();return t.right.left.isRed_()&&(t=t.copy(null,null,null,null,t.right.rotateRight_()),t=t.rotateLeft_(),t=t.colorFlip_()),t}moveRedRight_(){let t=this.colorFlip_();return t.left.left.isRed_()&&(t=t.rotateRight_(),t=t.colorFlip_()),t}rotateLeft_(){const t=this.copy(null,null,it.RED,null,this.right.left);return this.right.copy(null,null,this.color,t,null)}rotateRight_(){const t=this.copy(null,null,it.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,t)}colorFlip_(){const t=this.left.copy(null,null,!this.left.color,null,null),i=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,t,i)}checkMaxDepth_(){const t=this.check_();return Math.pow(2,t)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const t=this.left.check_();if(t!==this.right.check_())throw new Error("Black depths differ");return t+(this.isRed_()?0:1)}}it.RED=!0;it.BLACK=!1;class $R{copy(t,i,a,o,c){return this}insert(t,i,a){return new it(t,i,null)}remove(t,i){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class bt{constructor(t,i=bt.EMPTY_NODE){this.comparator_=t,this.root_=i}insert(t,i){return new bt(this.comparator_,this.root_.insert(t,i,this.comparator_).copy(null,null,it.BLACK,null,null))}remove(t){return new bt(this.comparator_,this.root_.remove(t,this.comparator_).copy(null,null,it.BLACK,null,null))}get(t){let i,a=this.root_;for(;!a.isEmpty();){if(i=this.comparator_(t,a.key),i===0)return a.value;i<0?a=a.left:i>0&&(a=a.right)}return null}getPredecessorKey(t){let i,a=this.root_,o=null;for(;!a.isEmpty();)if(i=this.comparator_(t,a.key),i===0){if(a.left.isEmpty())return o?o.key:null;for(a=a.left;!a.right.isEmpty();)a=a.right;return a.key}else i<0?a=a.left:i>0&&(o=a,a=a.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(t){return this.root_.inorderTraversal(t)}reverseTraversal(t){return this.root_.reverseTraversal(t)}getIterator(t){return new uo(this.root_,null,this.comparator_,!1,t)}getIteratorFrom(t,i){return new uo(this.root_,t,this.comparator_,!1,i)}getReverseIteratorFrom(t,i){return new uo(this.root_,t,this.comparator_,!0,i)}getReverseIterator(t){return new uo(this.root_,null,this.comparator_,!0,t)}}bt.EMPTY_NODE=new $R;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ew(s,t){return ts(s.name,t.name)}function kh(s,t){return ts(s,t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Zf;function tw(s){Zf=s}const zy=function(s){return typeof s=="number"?"number:"+py(s):"string:"+s},Hy=function(s){if(s.isLeafNode()){const t=s.val();U(typeof t=="string"||typeof t=="number"||typeof t=="object"&&cn(t,".sv"),"Priority must be a string or number.")}else U(s===Zf||s.isEmpty(),"priority of unexpected type.");U(s===Zf||s.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Zm;class nt{static set __childrenNodeConstructor(t){Zm=t}static get __childrenNodeConstructor(){return Zm}constructor(t,i=nt.__childrenNodeConstructor.EMPTY_NODE){this.value_=t,this.priorityNode_=i,this.lazyHash_=null,U(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),Hy(this.priorityNode_)}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(t){return new nt(this.value_,t)}getImmediateChild(t){return t===".priority"?this.priorityNode_:nt.__childrenNodeConstructor.EMPTY_NODE}getChild(t){return ue(t)?this:ne(t)===".priority"?this.priorityNode_:nt.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(t,i){return null}updateImmediateChild(t,i){return t===".priority"?this.updatePriority(i):i.isEmpty()&&t!==".priority"?this:nt.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(t,i).updatePriority(this.priorityNode_)}updateChild(t,i){const a=ne(t);return a===null?i:i.isEmpty()&&a!==".priority"?this:(U(a!==".priority"||yi(t)===1,".priority must be the last token in a path"),this.updateImmediateChild(a,nt.__childrenNodeConstructor.EMPTY_NODE.updateChild(Oe(t),i)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(t,i){return!1}val(t){return t&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let t="";this.priorityNode_.isEmpty()||(t+="priority:"+zy(this.priorityNode_.val())+":");const i=typeof this.value_;t+=i+":",i==="number"?t+=py(this.value_):t+=this.value_,this.lazyHash_=dy(t)}return this.lazyHash_}getValue(){return this.value_}compareTo(t){return t===nt.__childrenNodeConstructor.EMPTY_NODE?1:t instanceof nt.__childrenNodeConstructor?-1:(U(t.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(t))}compareToLeafNode_(t){const i=typeof t.value_,a=typeof this.value_,o=nt.VALUE_TYPE_ORDER.indexOf(i),c=nt.VALUE_TYPE_ORDER.indexOf(a);return U(o>=0,"Unknown leaf type: "+i),U(c>=0,"Unknown leaf type: "+a),o===c?a==="object"?0:this.value_<t.value_?-1:this.value_===t.value_?0:1:c-o}withIndex(){return this}isIndexed(){return!0}equals(t){if(t===this)return!0;if(t.isLeafNode()){const i=t;return this.value_===i.value_&&this.priorityNode_.equals(i.priorityNode_)}else return!1}}nt.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Py,By;function nw(s){Py=s}function iw(s){By=s}class sw extends Qo{compare(t,i){const a=t.node.getPriority(),o=i.node.getPriority(),c=a.compareTo(o);return c===0?ts(t.name,i.name):c}isDefinedOn(t){return!t.getPriority().isEmpty()}indexedValueChanged(t,i){return!t.getPriority().equals(i.getPriority())}minPost(){return ie.MIN}maxPost(){return new ie(Zi,new nt("[PRIORITY-POST]",By))}makePost(t,i){const a=Py(t);return new ie(i,new nt("[PRIORITY-POST]",a))}toString(){return".priority"}}const Pe=new sw;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rw=Math.log(2);class aw{constructor(t){const i=c=>parseInt(Math.log(c)/rw,10),a=c=>parseInt(Array(c+1).join("1"),2);this.count=i(t+1),this.current_=this.count-1;const o=a(this.count);this.bits_=t+1&o}nextBitIsOne(){const t=!(this.bits_&1<<this.current_);return this.current_--,t}}const Do=function(s,t,i,a){s.sort(t);const o=function(p,g){const v=g-p;let E,b;if(v===0)return null;if(v===1)return E=s[p],b=i?i(E):E,new it(b,E.node,it.BLACK,null,null);{const x=parseInt(v/2,10)+p,L=o(p,x),X=o(x+1,g);return E=s[x],b=i?i(E):E,new it(b,E.node,it.BLACK,L,X)}},c=function(p){let g=null,v=null,E=s.length;const b=function(L,X){const se=E-L,je=E;E-=L;const Ye=o(se+1,je),Ae=s[se],Ze=i?i(Ae):Ae;x(new it(Ze,Ae.node,X,null,Ye))},x=function(L){g?(g.left=L,g=L):(v=L,g=L)};for(let L=0;L<p.count;++L){const X=p.nextBitIsOne(),se=Math.pow(2,p.count-(L+1));X?b(se,it.BLACK):(b(se,it.BLACK),b(se,it.RED))}return v},h=new aw(s.length),d=c(h);return new bt(a||t,d)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Uf;const Vs={};class Dn{static get Default(){return U(Vs&&Pe,"ChildrenNode.ts has not been loaded"),Uf=Uf||new Dn({".priority":Vs},{".priority":Pe}),Uf}constructor(t,i){this.indexes_=t,this.indexSet_=i}get(t){const i=Zs(this.indexes_,t);if(!i)throw new Error("No index defined for "+t);return i instanceof bt?i:null}hasIndex(t){return cn(this.indexSet_,t.toString())}addIndex(t,i){U(t!==Ws,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const a=[];let o=!1;const c=i.getIterator(ie.Wrap);let h=c.getNext();for(;h;)o=o||t.isDefinedOn(h.node),a.push(h),h=c.getNext();let d;o?d=Do(a,t.getCompare()):d=Vs;const p=t.toString(),g=Object.assign({},this.indexSet_);g[p]=t;const v=Object.assign({},this.indexes_);return v[p]=d,new Dn(v,g)}addToIndexes(t,i){const a=Eo(this.indexes_,(o,c)=>{const h=Zs(this.indexSet_,c);if(U(h,"Missing index implementation for "+c),o===Vs)if(h.isDefinedOn(t.node)){const d=[],p=i.getIterator(ie.Wrap);let g=p.getNext();for(;g;)g.name!==t.name&&d.push(g),g=p.getNext();return d.push(t),Do(d,h.getCompare())}else return Vs;else{const d=i.get(t.name);let p=o;return d&&(p=p.remove(new ie(t.name,d))),p.insert(t,t.node)}});return new Dn(a,this.indexSet_)}removeFromIndexes(t,i){const a=Eo(this.indexes_,o=>{if(o===Vs)return o;{const c=i.get(t.name);return c?o.remove(new ie(t.name,c)):o}});return new Dn(a,this.indexSet_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ha;class F{static get EMPTY_NODE(){return ha||(ha=new F(new bt(kh),null,Dn.Default))}constructor(t,i,a){this.children_=t,this.priorityNode_=i,this.indexMap_=a,this.lazyHash_=null,this.priorityNode_&&Hy(this.priorityNode_),this.children_.isEmpty()&&U(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}isLeafNode(){return!1}getPriority(){return this.priorityNode_||ha}updatePriority(t){return this.children_.isEmpty()?this:new F(this.children_,t,this.indexMap_)}getImmediateChild(t){if(t===".priority")return this.getPriority();{const i=this.children_.get(t);return i===null?ha:i}}getChild(t){const i=ne(t);return i===null?this:this.getImmediateChild(i).getChild(Oe(t))}hasChild(t){return this.children_.get(t)!==null}updateImmediateChild(t,i){if(U(i,"We should always be passing snapshot nodes"),t===".priority")return this.updatePriority(i);{const a=new ie(t,i);let o,c;i.isEmpty()?(o=this.children_.remove(t),c=this.indexMap_.removeFromIndexes(a,this.children_)):(o=this.children_.insert(t,i),c=this.indexMap_.addToIndexes(a,this.children_));const h=o.isEmpty()?ha:this.priorityNode_;return new F(o,h,c)}}updateChild(t,i){const a=ne(t);if(a===null)return i;{U(ne(t)!==".priority"||yi(t)===1,".priority must be the last token in a path");const o=this.getImmediateChild(a).updateChild(Oe(t),i);return this.updateImmediateChild(a,o)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(t){if(this.isEmpty())return null;const i={};let a=0,o=0,c=!0;if(this.forEachChild(Pe,(h,d)=>{i[h]=d.val(t),a++,c&&F.INTEGER_REGEXP_.test(h)?o=Math.max(o,Number(h)):c=!1}),!t&&c&&o<2*a){const h=[];for(const d in i)h[d]=i[d];return h}else return t&&!this.getPriority().isEmpty()&&(i[".priority"]=this.getPriority().val()),i}hash(){if(this.lazyHash_===null){let t="";this.getPriority().isEmpty()||(t+="priority:"+zy(this.getPriority().val())+":"),this.forEachChild(Pe,(i,a)=>{const o=a.hash();o!==""&&(t+=":"+i+":"+o)}),this.lazyHash_=t===""?"":dy(t)}return this.lazyHash_}getPredecessorChildName(t,i,a){const o=this.resolveIndex_(a);if(o){const c=o.getPredecessorKey(new ie(t,i));return c?c.name:null}else return this.children_.getPredecessorKey(t)}getFirstChildName(t){const i=this.resolveIndex_(t);if(i){const a=i.minKey();return a&&a.name}else return this.children_.minKey()}getFirstChild(t){const i=this.getFirstChildName(t);return i?new ie(i,this.children_.get(i)):null}getLastChildName(t){const i=this.resolveIndex_(t);if(i){const a=i.maxKey();return a&&a.name}else return this.children_.maxKey()}getLastChild(t){const i=this.getLastChildName(t);return i?new ie(i,this.children_.get(i)):null}forEachChild(t,i){const a=this.resolveIndex_(t);return a?a.inorderTraversal(o=>i(o.name,o.node)):this.children_.inorderTraversal(i)}getIterator(t){return this.getIteratorFrom(t.minPost(),t)}getIteratorFrom(t,i){const a=this.resolveIndex_(i);if(a)return a.getIteratorFrom(t,o=>o);{const o=this.children_.getIteratorFrom(t.name,ie.Wrap);let c=o.peek();for(;c!=null&&i.compare(c,t)<0;)o.getNext(),c=o.peek();return o}}getReverseIterator(t){return this.getReverseIteratorFrom(t.maxPost(),t)}getReverseIteratorFrom(t,i){const a=this.resolveIndex_(i);if(a)return a.getReverseIteratorFrom(t,o=>o);{const o=this.children_.getReverseIteratorFrom(t.name,ie.Wrap);let c=o.peek();for(;c!=null&&i.compare(c,t)>0;)o.getNext(),c=o.peek();return o}}compareTo(t){return this.isEmpty()?t.isEmpty()?0:-1:t.isLeafNode()||t.isEmpty()?1:t===Va?-1:0}withIndex(t){if(t===Ws||this.indexMap_.hasIndex(t))return this;{const i=this.indexMap_.addIndex(t,this.children_);return new F(this.children_,this.priorityNode_,i)}}isIndexed(t){return t===Ws||this.indexMap_.hasIndex(t)}equals(t){if(t===this)return!0;if(t.isLeafNode())return!1;{const i=t;if(this.getPriority().equals(i.getPriority()))if(this.children_.count()===i.children_.count()){const a=this.getIterator(Pe),o=i.getIterator(Pe);let c=a.getNext(),h=o.getNext();for(;c&&h;){if(c.name!==h.name||!c.node.equals(h.node))return!1;c=a.getNext(),h=o.getNext()}return c===null&&h===null}else return!1;else return!1}}resolveIndex_(t){return t===Ws?null:this.indexMap_.get(t.toString())}}F.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class lw extends F{constructor(){super(new bt(kh),F.EMPTY_NODE,Dn.Default)}compareTo(t){return t===this?0:1}equals(t){return t===this}getPriority(){return this}getImmediateChild(t){return F.EMPTY_NODE}isEmpty(){return!1}}const Va=new lw;Object.defineProperties(ie,{MIN:{value:new ie($s,F.EMPTY_NODE)},MAX:{value:new ie(Zi,Va)}});Ly.__EMPTY_NODE=F.EMPTY_NODE;nt.__childrenNodeConstructor=F;tw(Va);iw(Va);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ow=!0;function Xe(s,t=null){if(s===null)return F.EMPTY_NODE;if(typeof s=="object"&&".priority"in s&&(t=s[".priority"]),U(t===null||typeof t=="string"||typeof t=="number"||typeof t=="object"&&".sv"in t,"Invalid priority type found: "+typeof t),typeof s=="object"&&".value"in s&&s[".value"]!==null&&(s=s[".value"]),typeof s!="object"||".sv"in s){const i=s;return new nt(i,Xe(t))}if(!(s instanceof Array)&&ow){const i=[];let a=!1;if(ot(s,(h,d)=>{if(h.substring(0,1)!=="."){const p=Xe(d);p.isEmpty()||(a=a||!p.getPriority().isEmpty(),i.push(new ie(h,p)))}}),i.length===0)return F.EMPTY_NODE;const c=Do(i,ew,h=>h.name,kh);if(a){const h=Do(i,Pe.getCompare());return new F(c,Xe(t),new Dn({".priority":h},{".priority":Pe}))}else return new F(c,Xe(t),Dn.Default)}else{let i=F.EMPTY_NODE;return ot(s,(a,o)=>{if(cn(s,a)&&a.substring(0,1)!=="."){const c=Xe(o);(c.isLeafNode()||!c.isEmpty())&&(i=i.updateImmediateChild(a,c))}}),i.updatePriority(Xe(t))}}nw(Xe);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uw extends Qo{constructor(t){super(),this.indexPath_=t,U(!ue(t)&&ne(t)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(t){return t.getChild(this.indexPath_)}isDefinedOn(t){return!t.getChild(this.indexPath_).isEmpty()}compare(t,i){const a=this.extractChild(t.node),o=this.extractChild(i.node),c=a.compareTo(o);return c===0?ts(t.name,i.name):c}makePost(t,i){const a=Xe(t),o=F.EMPTY_NODE.updateChild(this.indexPath_,a);return new ie(i,o)}maxPost(){const t=F.EMPTY_NODE.updateChild(this.indexPath_,Va);return new ie(Zi,t)}toString(){return wa(this.indexPath_,0).join("/")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cw extends Qo{compare(t,i){const a=t.node.compareTo(i.node);return a===0?ts(t.name,i.name):a}isDefinedOn(t){return!0}indexedValueChanged(t,i){return!t.equals(i)}minPost(){return ie.MIN}maxPost(){return ie.MAX}makePost(t,i){const a=Xe(t);return new ie(i,a)}toString(){return".value"}}const fw=new cw;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qy(s){return{type:"value",snapshotNode:s}}function er(s,t){return{type:"child_added",snapshotNode:t,childName:s}}function Na(s,t){return{type:"child_removed",snapshotNode:t,childName:s}}function Oa(s,t,i){return{type:"child_changed",snapshotNode:t,childName:s,oldSnap:i}}function hw(s,t){return{type:"child_moved",snapshotNode:t,childName:s}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xh{constructor(t){this.index_=t}updateChild(t,i,a,o,c,h){U(t.isIndexed(this.index_),"A node must be indexed if only a child is updated");const d=t.getImmediateChild(i);return d.getChild(o).equals(a.getChild(o))&&d.isEmpty()===a.isEmpty()||(h!=null&&(a.isEmpty()?t.hasChild(i)?h.trackChildChange(Na(i,d)):U(t.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):d.isEmpty()?h.trackChildChange(er(i,a)):h.trackChildChange(Oa(i,a,d))),t.isLeafNode()&&a.isEmpty())?t:t.updateImmediateChild(i,a).withIndex(this.index_)}updateFullNode(t,i,a){return a!=null&&(t.isLeafNode()||t.forEachChild(Pe,(o,c)=>{i.hasChild(o)||a.trackChildChange(Na(o,c))}),i.isLeafNode()||i.forEachChild(Pe,(o,c)=>{if(t.hasChild(o)){const h=t.getImmediateChild(o);h.equals(c)||a.trackChildChange(Oa(o,c,h))}else a.trackChildChange(er(o,c))})),i.withIndex(this.index_)}updatePriority(t,i){return t.isEmpty()?F.EMPTY_NODE:t.updatePriority(i)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Da{constructor(t){this.indexedFilter_=new xh(t.getIndex()),this.index_=t.getIndex(),this.startPost_=Da.getStartPost_(t),this.endPost_=Da.getEndPost_(t),this.startIsInclusive_=!t.startAfterSet_,this.endIsInclusive_=!t.endBeforeSet_}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(t){const i=this.startIsInclusive_?this.index_.compare(this.getStartPost(),t)<=0:this.index_.compare(this.getStartPost(),t)<0,a=this.endIsInclusive_?this.index_.compare(t,this.getEndPost())<=0:this.index_.compare(t,this.getEndPost())<0;return i&&a}updateChild(t,i,a,o,c,h){return this.matches(new ie(i,a))||(a=F.EMPTY_NODE),this.indexedFilter_.updateChild(t,i,a,o,c,h)}updateFullNode(t,i,a){i.isLeafNode()&&(i=F.EMPTY_NODE);let o=i.withIndex(this.index_);o=o.updatePriority(F.EMPTY_NODE);const c=this;return i.forEachChild(Pe,(h,d)=>{c.matches(new ie(h,d))||(o=o.updateImmediateChild(h,F.EMPTY_NODE))}),this.indexedFilter_.updateFullNode(t,o,a)}updatePriority(t,i){return t}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(t){if(t.hasStart()){const i=t.getIndexStartName();return t.getIndex().makePost(t.getIndexStartValue(),i)}else return t.getIndex().minPost()}static getEndPost_(t){if(t.hasEnd()){const i=t.getIndexEndName();return t.getIndex().makePost(t.getIndexEndValue(),i)}else return t.getIndex().maxPost()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dw{constructor(t){this.withinDirectionalStart=i=>this.reverse_?this.withinEndPost(i):this.withinStartPost(i),this.withinDirectionalEnd=i=>this.reverse_?this.withinStartPost(i):this.withinEndPost(i),this.withinStartPost=i=>{const a=this.index_.compare(this.rangedFilter_.getStartPost(),i);return this.startIsInclusive_?a<=0:a<0},this.withinEndPost=i=>{const a=this.index_.compare(i,this.rangedFilter_.getEndPost());return this.endIsInclusive_?a<=0:a<0},this.rangedFilter_=new Da(t),this.index_=t.getIndex(),this.limit_=t.getLimit(),this.reverse_=!t.isViewFromLeft(),this.startIsInclusive_=!t.startAfterSet_,this.endIsInclusive_=!t.endBeforeSet_}updateChild(t,i,a,o,c,h){return this.rangedFilter_.matches(new ie(i,a))||(a=F.EMPTY_NODE),t.getImmediateChild(i).equals(a)?t:t.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(t,i,a,o,c,h):this.fullLimitUpdateChild_(t,i,a,c,h)}updateFullNode(t,i,a){let o;if(i.isLeafNode()||i.isEmpty())o=F.EMPTY_NODE.withIndex(this.index_);else if(this.limit_*2<i.numChildren()&&i.isIndexed(this.index_)){o=F.EMPTY_NODE.withIndex(this.index_);let c;this.reverse_?c=i.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):c=i.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let h=0;for(;c.hasNext()&&h<this.limit_;){const d=c.getNext();if(this.withinDirectionalStart(d))if(this.withinDirectionalEnd(d))o=o.updateImmediateChild(d.name,d.node),h++;else break;else continue}}else{o=i.withIndex(this.index_),o=o.updatePriority(F.EMPTY_NODE);let c;this.reverse_?c=o.getReverseIterator(this.index_):c=o.getIterator(this.index_);let h=0;for(;c.hasNext();){const d=c.getNext();h<this.limit_&&this.withinDirectionalStart(d)&&this.withinDirectionalEnd(d)?h++:o=o.updateImmediateChild(d.name,F.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(t,o,a)}updatePriority(t,i){return t}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(t,i,a,o,c){let h;if(this.reverse_){const E=this.index_.getCompare();h=(b,x)=>E(x,b)}else h=this.index_.getCompare();const d=t;U(d.numChildren()===this.limit_,"");const p=new ie(i,a),g=this.reverse_?d.getFirstChild(this.index_):d.getLastChild(this.index_),v=this.rangedFilter_.matches(p);if(d.hasChild(i)){const E=d.getImmediateChild(i);let b=o.getChildAfterChild(this.index_,g,this.reverse_);for(;b!=null&&(b.name===i||d.hasChild(b.name));)b=o.getChildAfterChild(this.index_,b,this.reverse_);const x=b==null?1:h(b,p);if(v&&!a.isEmpty()&&x>=0)return c!=null&&c.trackChildChange(Oa(i,a,E)),d.updateImmediateChild(i,a);{c!=null&&c.trackChildChange(Na(i,E));const X=d.updateImmediateChild(i,F.EMPTY_NODE);return b!=null&&this.rangedFilter_.matches(b)?(c!=null&&c.trackChildChange(er(b.name,b.node)),X.updateImmediateChild(b.name,b.node)):X}}else return a.isEmpty()?t:v&&h(g,p)>=0?(c!=null&&(c.trackChildChange(Na(g.name,g.node)),c.trackChildChange(er(i,a))),d.updateImmediateChild(i,a).updateImmediateChild(g.name,F.EMPTY_NODE)):t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Uh{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=Pe}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return U(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return U(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:$s}hasEnd(){return this.endSet_}getIndexEndValue(){return U(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return U(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:Zi}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return U(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===Pe}copy(){const t=new Uh;return t.limitSet_=this.limitSet_,t.limit_=this.limit_,t.startSet_=this.startSet_,t.startAfterSet_=this.startAfterSet_,t.indexStartValue_=this.indexStartValue_,t.startNameSet_=this.startNameSet_,t.indexStartName_=this.indexStartName_,t.endSet_=this.endSet_,t.endBeforeSet_=this.endBeforeSet_,t.indexEndValue_=this.indexEndValue_,t.endNameSet_=this.endNameSet_,t.indexEndName_=this.indexEndName_,t.index_=this.index_,t.viewFrom_=this.viewFrom_,t}}function _w(s){return s.loadsAllData()?new xh(s.getIndex()):s.hasLimit()?new dw(s):new Da(s)}function Jm(s){const t={};if(s.isDefault())return t;let i;if(s.index_===Pe?i="$priority":s.index_===fw?i="$value":s.index_===Ws?i="$key":(U(s.index_ instanceof uw,"Unrecognized index type!"),i=s.index_.toString()),t.orderBy=We(i),s.startSet_){const a=s.startAfterSet_?"startAfter":"startAt";t[a]=We(s.indexStartValue_),s.startNameSet_&&(t[a]+=","+We(s.indexStartName_))}if(s.endSet_){const a=s.endBeforeSet_?"endBefore":"endAt";t[a]=We(s.indexEndValue_),s.endNameSet_&&(t[a]+=","+We(s.indexEndName_))}return s.limitSet_&&(s.isViewFromLeft()?t.limitToFirst=s.limit_:t.limitToLast=s.limit_),t}function $m(s){const t={};if(s.startSet_&&(t.sp=s.indexStartValue_,s.startNameSet_&&(t.sn=s.indexStartName_),t.sin=!s.startAfterSet_),s.endSet_&&(t.ep=s.indexEndValue_,s.endNameSet_&&(t.en=s.indexEndName_),t.ein=!s.endBeforeSet_),s.limitSet_){t.l=s.limit_;let i=s.viewFrom_;i===""&&(s.isViewFromLeft()?i="l":i="r"),t.vf=i}return s.index_!==Pe&&(t.i=s.index_.toString()),t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Io extends My{reportStats(t){throw new Error("Method not implemented.")}static getListenId_(t,i){return i!==void 0?"tag$"+i:(U(t._queryParams.isDefault(),"should have a tag if it's not a default query."),t._path.toString())}constructor(t,i,a,o){super(),this.repoInfo_=t,this.onDataUpdate_=i,this.authTokenProvider_=a,this.appCheckTokenProvider_=o,this.log_=qa("p:rest:"),this.listens_={}}listen(t,i,a,o){const c=t._path.toString();this.log_("Listen called for "+c+" "+t._queryIdentifier);const h=Io.getListenId_(t,a),d={};this.listens_[h]=d;const p=Jm(t._queryParams);this.restRequest_(c+".json",p,(g,v)=>{let E=v;if(g===404&&(E=null,g=null),g===null&&this.onDataUpdate_(c,E,!1,a),Zs(this.listens_,h)===d){let b;g?g===401?b="permission_denied":b="rest_error:"+g:b="ok",o(b,null)}})}unlisten(t,i){const a=Io.getListenId_(t,i);delete this.listens_[a]}get(t){const i=Jm(t._queryParams),a=t._path.toString(),o=new xa;return this.restRequest_(a+".json",i,(c,h)=>{let d=h;c===404&&(d=null,c=null),c===null?(this.onDataUpdate_(a,d,!1,null),o.resolve(d)):o.reject(new Error(d))}),o.promise}refreshAuthToken(t){}restRequest_(t,i={},a){return i.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([o,c])=>{o&&o.accessToken&&(i.auth=o.accessToken),c&&c.token&&(i.ac=c.token);const h=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+t+"?ns="+this.repoInfo_.namespace+rr(i);this.log_("Sending REST request for "+h);const d=new XMLHttpRequest;d.onreadystatechange=()=>{if(a&&d.readyState===4){this.log_("REST Response for "+h+" received. status:",d.status,"response:",d.responseText);let p=null;if(d.status>=200&&d.status<300){try{p=Ta(d.responseText)}catch{pt("Failed to parse JSON response for "+h+": "+d.responseText)}a(null,p)}else d.status!==401&&d.status!==404&&pt("Got unsuccessful REST response for "+h+" Status: "+d.status),a(d.status);a=null}},d.open("GET",h,!0),d.send()})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pw{constructor(){this.rootNode_=F.EMPTY_NODE}getNode(t){return this.rootNode_.getChild(t)}updateSnapshot(t,i){this.rootNode_=this.rootNode_.updateChild(t,i)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Mo(){return{value:null,children:new Map}}function Vy(s,t,i){if(ue(t))s.value=i,s.children.clear();else if(s.value!==null)s.value=s.value.updateChild(t,i);else{const a=ne(t);s.children.has(a)||s.children.set(a,Mo());const o=s.children.get(a);t=Oe(t),Vy(o,t,i)}}function Jf(s,t,i){s.value!==null?i(t,s.value):gw(s,(a,o)=>{const c=new Se(t.toString()+"/"+a);Jf(o,c,i)})}function gw(s,t){s.children.forEach((i,a)=>{t(a,i)})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mw{constructor(t){this.collection_=t,this.last_=null}get(){const t=this.collection_.get(),i=Object.assign({},t);return this.last_&&ot(this.last_,(a,o)=>{i[a]=i[a]-o}),this.last_=t,i}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ev=10*1e3,vw=30*1e3,yw=5*60*1e3;class Ew{constructor(t,i){this.server_=i,this.statsToReport_={},this.statsListener_=new mw(t);const a=ev+(vw-ev)*Math.random();va(this.reportStats_.bind(this),Math.floor(a))}reportStats_(){const t=this.statsListener_.get(),i={};let a=!1;ot(t,(o,c)=>{c>0&&cn(this.statsToReport_,o)&&(i[o]=c,a=!0)}),a&&this.server_.reportStats(i),va(this.reportStats_.bind(this),Math.floor(Math.random()*2*yw))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Jt;(function(s){s[s.OVERWRITE=0]="OVERWRITE",s[s.MERGE=1]="MERGE",s[s.ACK_USER_WRITE=2]="ACK_USER_WRITE",s[s.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(Jt||(Jt={}));function Lh(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function zh(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function Hh(s){return{fromUser:!1,fromServer:!0,queryId:s,tagged:!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ko{constructor(t,i,a){this.path=t,this.affectedTree=i,this.revert=a,this.type=Jt.ACK_USER_WRITE,this.source=Lh()}operationForChild(t){if(ue(this.path)){if(this.affectedTree.value!=null)return U(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const i=this.affectedTree.subtree(new Se(t));return new ko(de(),i,this.revert)}}else return U(ne(this.path)===t,"operationForChild called for unrelated child."),new ko(Oe(this.path),this.affectedTree,this.revert)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ia{constructor(t,i){this.source=t,this.path=i,this.type=Jt.LISTEN_COMPLETE}operationForChild(t){return ue(this.path)?new Ia(this.source,de()):new Ia(this.source,Oe(this.path))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ji{constructor(t,i,a){this.source=t,this.path=i,this.snap=a,this.type=Jt.OVERWRITE}operationForChild(t){return ue(this.path)?new Ji(this.source,de(),this.snap.getImmediateChild(t)):new Ji(this.source,Oe(this.path),this.snap)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tr{constructor(t,i,a){this.source=t,this.path=i,this.children=a,this.type=Jt.MERGE}operationForChild(t){if(ue(this.path)){const i=this.children.subtree(new Se(t));return i.isEmpty()?null:i.value?new Ji(this.source,de(),i.value):new tr(this.source,de(),i)}else return U(ne(this.path)===t,"Can't get a merge for a child not on the path of the operation"),new tr(this.source,Oe(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ei{constructor(t,i,a){this.node_=t,this.fullyInitialized_=i,this.filtered_=a}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(t){if(ue(t))return this.isFullyInitialized()&&!this.filtered_;const i=ne(t);return this.isCompleteForChild(i)}isCompleteForChild(t){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(t)}getNode(){return this.node_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sw{constructor(t){this.query_=t,this.index_=this.query_._queryParams.getIndex()}}function Tw(s,t,i,a){const o=[],c=[];return t.forEach(h=>{h.type==="child_changed"&&s.index_.indexedValueChanged(h.oldSnap,h.snapshotNode)&&c.push(hw(h.childName,h.snapshotNode))}),da(s,o,"child_removed",t,a,i),da(s,o,"child_added",t,a,i),da(s,o,"child_moved",c,a,i),da(s,o,"child_changed",t,a,i),da(s,o,"value",t,a,i),o}function da(s,t,i,a,o,c){const h=a.filter(d=>d.type===i);h.sort((d,p)=>Cw(s,d,p)),h.forEach(d=>{const p=bw(s,d,c);o.forEach(g=>{g.respondsTo(d.type)&&t.push(g.createEvent(p,s.query_))})})}function bw(s,t,i){return t.type==="value"||t.type==="child_removed"||(t.prevName=i.getPredecessorChildName(t.childName,t.snapshotNode,s.index_)),t}function Cw(s,t,i){if(t.childName==null||i.childName==null)throw sr("Should only compare child_ events.");const a=new ie(t.childName,t.snapshotNode),o=new ie(i.childName,i.snapshotNode);return s.index_.compare(a,o)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fo(s,t){return{eventCache:s,serverCache:t}}function ya(s,t,i,a){return Fo(new Ei(t,i,a),s.serverCache)}function Gy(s,t,i,a){return Fo(s.eventCache,new Ei(t,i,a))}function xo(s){return s.eventCache.isFullyInitialized()?s.eventCache.getNode():null}function $i(s){return s.serverCache.isFullyInitialized()?s.serverCache.getNode():null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Lf;const Aw=()=>(Lf||(Lf=new bt(uR)),Lf);class Ne{static fromObject(t){let i=new Ne(null);return ot(t,(a,o)=>{i=i.set(new Se(a),o)}),i}constructor(t,i=Aw()){this.value=t,this.children=i}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(t,i){if(this.value!=null&&i(this.value))return{path:de(),value:this.value};if(ue(t))return null;{const a=ne(t),o=this.children.get(a);if(o!==null){const c=o.findRootMostMatchingPathAndValue(Oe(t),i);return c!=null?{path:He(new Se(a),c.path),value:c.value}:null}else return null}}findRootMostValueAndPath(t){return this.findRootMostMatchingPathAndValue(t,()=>!0)}subtree(t){if(ue(t))return this;{const i=ne(t),a=this.children.get(i);return a!==null?a.subtree(Oe(t)):new Ne(null)}}set(t,i){if(ue(t))return new Ne(i,this.children);{const a=ne(t),c=(this.children.get(a)||new Ne(null)).set(Oe(t),i),h=this.children.insert(a,c);return new Ne(this.value,h)}}remove(t){if(ue(t))return this.children.isEmpty()?new Ne(null):new Ne(null,this.children);{const i=ne(t),a=this.children.get(i);if(a){const o=a.remove(Oe(t));let c;return o.isEmpty()?c=this.children.remove(i):c=this.children.insert(i,o),this.value===null&&c.isEmpty()?new Ne(null):new Ne(this.value,c)}else return this}}get(t){if(ue(t))return this.value;{const i=ne(t),a=this.children.get(i);return a?a.get(Oe(t)):null}}setTree(t,i){if(ue(t))return i;{const a=ne(t),c=(this.children.get(a)||new Ne(null)).setTree(Oe(t),i);let h;return c.isEmpty()?h=this.children.remove(a):h=this.children.insert(a,c),new Ne(this.value,h)}}fold(t){return this.fold_(de(),t)}fold_(t,i){const a={};return this.children.inorderTraversal((o,c)=>{a[o]=c.fold_(He(t,o),i)}),i(t,this.value,a)}findOnPath(t,i){return this.findOnPath_(t,de(),i)}findOnPath_(t,i,a){const o=this.value?a(i,this.value):!1;if(o)return o;if(ue(t))return null;{const c=ne(t),h=this.children.get(c);return h?h.findOnPath_(Oe(t),He(i,c),a):null}}foreachOnPath(t,i){return this.foreachOnPath_(t,de(),i)}foreachOnPath_(t,i,a){if(ue(t))return this;{this.value&&a(i,this.value);const o=ne(t),c=this.children.get(o);return c?c.foreachOnPath_(Oe(t),He(i,o),a):new Ne(null)}}foreach(t){this.foreach_(de(),t)}foreach_(t,i){this.children.inorderTraversal((a,o)=>{o.foreach_(He(t,a),i)}),this.value&&i(t,this.value)}foreachChild(t){this.children.inorderTraversal((i,a)=>{a.value&&t(i,a.value)})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $t{constructor(t){this.writeTree_=t}static empty(){return new $t(new Ne(null))}}function Ea(s,t,i){if(ue(t))return new $t(new Ne(i));{const a=s.writeTree_.findRootMostValueAndPath(t);if(a!=null){const o=a.path;let c=a.value;const h=_t(o,t);return c=c.updateChild(h,i),new $t(s.writeTree_.set(o,c))}else{const o=new Ne(i),c=s.writeTree_.setTree(t,o);return new $t(c)}}}function $f(s,t,i){let a=s;return ot(i,(o,c)=>{a=Ea(a,He(t,o),c)}),a}function tv(s,t){if(ue(t))return $t.empty();{const i=s.writeTree_.setTree(t,new Ne(null));return new $t(i)}}function eh(s,t){return ns(s,t)!=null}function ns(s,t){const i=s.writeTree_.findRootMostValueAndPath(t);return i!=null?s.writeTree_.get(i.path).getChild(_t(i.path,t)):null}function nv(s){const t=[],i=s.writeTree_.value;return i!=null?i.isLeafNode()||i.forEachChild(Pe,(a,o)=>{t.push(new ie(a,o))}):s.writeTree_.children.inorderTraversal((a,o)=>{o.value!=null&&t.push(new ie(a,o.value))}),t}function mi(s,t){if(ue(t))return s;{const i=ns(s,t);return i!=null?new $t(new Ne(i)):new $t(s.writeTree_.subtree(t))}}function th(s){return s.writeTree_.isEmpty()}function nr(s,t){return jy(de(),s.writeTree_,t)}function jy(s,t,i){if(t.value!=null)return i.updateChild(s,t.value);{let a=null;return t.children.inorderTraversal((o,c)=>{o===".priority"?(U(c.value!==null,"Priority writes must always be leaf nodes"),a=c.value):i=jy(He(s,o),c,i)}),!i.getChild(s).isEmpty()&&a!==null&&(i=i.updateChild(He(s,".priority"),a)),i}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ko(s,t){return Ky(t,s)}function Rw(s,t,i,a,o){U(a>s.lastWriteId,"Stacking an older write on top of newer ones"),o===void 0&&(o=!0),s.allWrites.push({path:t,snap:i,writeId:a,visible:o}),o&&(s.visibleWrites=Ea(s.visibleWrites,t,i)),s.lastWriteId=a}function ww(s,t,i,a){U(a>s.lastWriteId,"Stacking an older merge on top of newer ones"),s.allWrites.push({path:t,children:i,writeId:a,visible:!0}),s.visibleWrites=$f(s.visibleWrites,t,i),s.lastWriteId=a}function Nw(s,t){for(let i=0;i<s.allWrites.length;i++){const a=s.allWrites[i];if(a.writeId===t)return a}return null}function Ow(s,t){const i=s.allWrites.findIndex(d=>d.writeId===t);U(i>=0,"removeWrite called with nonexistent writeId.");const a=s.allWrites[i];s.allWrites.splice(i,1);let o=a.visible,c=!1,h=s.allWrites.length-1;for(;o&&h>=0;){const d=s.allWrites[h];d.visible&&(h>=i&&Dw(d,a.path)?o=!1:jt(a.path,d.path)&&(c=!0)),h--}if(o){if(c)return Iw(s),!0;if(a.snap)s.visibleWrites=tv(s.visibleWrites,a.path);else{const d=a.children;ot(d,p=>{s.visibleWrites=tv(s.visibleWrites,He(a.path,p))})}return!0}else return!1}function Dw(s,t){if(s.snap)return jt(s.path,t);for(const i in s.children)if(s.children.hasOwnProperty(i)&&jt(He(s.path,i),t))return!0;return!1}function Iw(s){s.visibleWrites=Yy(s.allWrites,Mw,de()),s.allWrites.length>0?s.lastWriteId=s.allWrites[s.allWrites.length-1].writeId:s.lastWriteId=-1}function Mw(s){return s.visible}function Yy(s,t,i){let a=$t.empty();for(let o=0;o<s.length;++o){const c=s[o];if(t(c)){const h=c.path;let d;if(c.snap)jt(i,h)?(d=_t(i,h),a=Ea(a,d,c.snap)):jt(h,i)&&(d=_t(h,i),a=Ea(a,de(),c.snap.getChild(d)));else if(c.children){if(jt(i,h))d=_t(i,h),a=$f(a,d,c.children);else if(jt(h,i))if(d=_t(h,i),ue(d))a=$f(a,de(),c.children);else{const p=Zs(c.children,ne(d));if(p){const g=p.getChild(Oe(d));a=Ea(a,de(),g)}}}else throw sr("WriteRecord should have .snap or .children")}}return a}function Qy(s,t,i,a,o){if(!a&&!o){const c=ns(s.visibleWrites,t);if(c!=null)return c;{const h=mi(s.visibleWrites,t);if(th(h))return i;if(i==null&&!eh(h,de()))return null;{const d=i||F.EMPTY_NODE;return nr(h,d)}}}else{const c=mi(s.visibleWrites,t);if(!o&&th(c))return i;if(!o&&i==null&&!eh(c,de()))return null;{const h=function(g){return(g.visible||o)&&(!a||!~a.indexOf(g.writeId))&&(jt(g.path,t)||jt(t,g.path))},d=Yy(s.allWrites,h,t),p=i||F.EMPTY_NODE;return nr(d,p)}}}function kw(s,t,i){let a=F.EMPTY_NODE;const o=ns(s.visibleWrites,t);if(o)return o.isLeafNode()||o.forEachChild(Pe,(c,h)=>{a=a.updateImmediateChild(c,h)}),a;if(i){const c=mi(s.visibleWrites,t);return i.forEachChild(Pe,(h,d)=>{const p=nr(mi(c,new Se(h)),d);a=a.updateImmediateChild(h,p)}),nv(c).forEach(h=>{a=a.updateImmediateChild(h.name,h.node)}),a}else{const c=mi(s.visibleWrites,t);return nv(c).forEach(h=>{a=a.updateImmediateChild(h.name,h.node)}),a}}function xw(s,t,i,a,o){U(a||o,"Either existingEventSnap or existingServerSnap must exist");const c=He(t,i);if(eh(s.visibleWrites,c))return null;{const h=mi(s.visibleWrites,c);return th(h)?o.getChild(i):nr(h,o.getChild(i))}}function Uw(s,t,i,a){const o=He(t,i),c=ns(s.visibleWrites,o);if(c!=null)return c;if(a.isCompleteForChild(i)){const h=mi(s.visibleWrites,o);return nr(h,a.getNode().getImmediateChild(i))}else return null}function Lw(s,t){return ns(s.visibleWrites,t)}function zw(s,t,i,a,o,c,h){let d;const p=mi(s.visibleWrites,t),g=ns(p,de());if(g!=null)d=g;else if(i!=null)d=nr(p,i);else return[];if(d=d.withIndex(h),!d.isEmpty()&&!d.isLeafNode()){const v=[],E=h.getCompare(),b=c?d.getReverseIteratorFrom(a,h):d.getIteratorFrom(a,h);let x=b.getNext();for(;x&&v.length<o;)E(x,a)!==0&&v.push(x),x=b.getNext();return v}else return[]}function Hw(){return{visibleWrites:$t.empty(),allWrites:[],lastWriteId:-1}}function Uo(s,t,i,a){return Qy(s.writeTree,s.treePath,t,i,a)}function Ph(s,t){return kw(s.writeTree,s.treePath,t)}function iv(s,t,i,a){return xw(s.writeTree,s.treePath,t,i,a)}function Lo(s,t){return Lw(s.writeTree,He(s.treePath,t))}function Pw(s,t,i,a,o,c){return zw(s.writeTree,s.treePath,t,i,a,o,c)}function Bh(s,t,i){return Uw(s.writeTree,s.treePath,t,i)}function Fy(s,t){return Ky(He(s.treePath,t),s.writeTree)}function Ky(s,t){return{treePath:s,writeTree:t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bw{constructor(){this.changeMap=new Map}trackChildChange(t){const i=t.type,a=t.childName;U(i==="child_added"||i==="child_changed"||i==="child_removed","Only child changes supported for tracking"),U(a!==".priority","Only non-priority child changes can be tracked.");const o=this.changeMap.get(a);if(o){const c=o.type;if(i==="child_added"&&c==="child_removed")this.changeMap.set(a,Oa(a,t.snapshotNode,o.snapshotNode));else if(i==="child_removed"&&c==="child_added")this.changeMap.delete(a);else if(i==="child_removed"&&c==="child_changed")this.changeMap.set(a,Na(a,o.oldSnap));else if(i==="child_changed"&&c==="child_added")this.changeMap.set(a,er(a,t.snapshotNode));else if(i==="child_changed"&&c==="child_changed")this.changeMap.set(a,Oa(a,t.snapshotNode,o.oldSnap));else throw sr("Illegal combination of changes: "+t+" occurred after "+o)}else this.changeMap.set(a,t)}getChanges(){return Array.from(this.changeMap.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qw{getCompleteChild(t){return null}getChildAfterChild(t,i,a){return null}}const Xy=new qw;class qh{constructor(t,i,a=null){this.writes_=t,this.viewCache_=i,this.optCompleteServerCache_=a}getCompleteChild(t){const i=this.viewCache_.eventCache;if(i.isCompleteForChild(t))return i.getNode().getImmediateChild(t);{const a=this.optCompleteServerCache_!=null?new Ei(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return Bh(this.writes_,t,a)}}getChildAfterChild(t,i,a){const o=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:$i(this.viewCache_),c=Pw(this.writes_,o,i,1,a,t);return c.length===0?null:c[0]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vw(s){return{filter:s}}function Gw(s,t){U(t.eventCache.getNode().isIndexed(s.filter.getIndex()),"Event snap not indexed"),U(t.serverCache.getNode().isIndexed(s.filter.getIndex()),"Server snap not indexed")}function jw(s,t,i,a,o){const c=new Bw;let h,d;if(i.type===Jt.OVERWRITE){const g=i;g.source.fromUser?h=nh(s,t,g.path,g.snap,a,o,c):(U(g.source.fromServer,"Unknown source."),d=g.source.tagged||t.serverCache.isFiltered()&&!ue(g.path),h=zo(s,t,g.path,g.snap,a,o,d,c))}else if(i.type===Jt.MERGE){const g=i;g.source.fromUser?h=Qw(s,t,g.path,g.children,a,o,c):(U(g.source.fromServer,"Unknown source."),d=g.source.tagged||t.serverCache.isFiltered(),h=ih(s,t,g.path,g.children,a,o,d,c))}else if(i.type===Jt.ACK_USER_WRITE){const g=i;g.revert?h=Xw(s,t,g.path,a,o,c):h=Fw(s,t,g.path,g.affectedTree,a,o,c)}else if(i.type===Jt.LISTEN_COMPLETE)h=Kw(s,t,i.path,a,c);else throw sr("Unknown operation type: "+i.type);const p=c.getChanges();return Yw(t,h,p),{viewCache:h,changes:p}}function Yw(s,t,i){const a=t.eventCache;if(a.isFullyInitialized()){const o=a.getNode().isLeafNode()||a.getNode().isEmpty(),c=xo(s);(i.length>0||!s.eventCache.isFullyInitialized()||o&&!a.getNode().equals(c)||!a.getNode().getPriority().equals(c.getPriority()))&&i.push(qy(xo(t)))}}function Wy(s,t,i,a,o,c){const h=t.eventCache;if(Lo(a,i)!=null)return t;{let d,p;if(ue(i))if(U(t.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),t.serverCache.isFiltered()){const g=$i(t),v=g instanceof F?g:F.EMPTY_NODE,E=Ph(a,v);d=s.filter.updateFullNode(t.eventCache.getNode(),E,c)}else{const g=Uo(a,$i(t));d=s.filter.updateFullNode(t.eventCache.getNode(),g,c)}else{const g=ne(i);if(g===".priority"){U(yi(i)===1,"Can't have a priority with additional path components");const v=h.getNode();p=t.serverCache.getNode();const E=iv(a,i,v,p);E!=null?d=s.filter.updatePriority(v,E):d=h.getNode()}else{const v=Oe(i);let E;if(h.isCompleteForChild(g)){p=t.serverCache.getNode();const b=iv(a,i,h.getNode(),p);b!=null?E=h.getNode().getImmediateChild(g).updateChild(v,b):E=h.getNode().getImmediateChild(g)}else E=Bh(a,g,t.serverCache);E!=null?d=s.filter.updateChild(h.getNode(),g,E,v,o,c):d=h.getNode()}}return ya(t,d,h.isFullyInitialized()||ue(i),s.filter.filtersNodes())}}function zo(s,t,i,a,o,c,h,d){const p=t.serverCache;let g;const v=h?s.filter:s.filter.getIndexedFilter();if(ue(i))g=v.updateFullNode(p.getNode(),a,null);else if(v.filtersNodes()&&!p.isFiltered()){const x=p.getNode().updateChild(i,a);g=v.updateFullNode(p.getNode(),x,null)}else{const x=ne(i);if(!p.isCompleteForPath(i)&&yi(i)>1)return t;const L=Oe(i),se=p.getNode().getImmediateChild(x).updateChild(L,a);x===".priority"?g=v.updatePriority(p.getNode(),se):g=v.updateChild(p.getNode(),x,se,L,Xy,null)}const E=Gy(t,g,p.isFullyInitialized()||ue(i),v.filtersNodes()),b=new qh(o,E,c);return Wy(s,E,i,o,b,d)}function nh(s,t,i,a,o,c,h){const d=t.eventCache;let p,g;const v=new qh(o,t,c);if(ue(i))g=s.filter.updateFullNode(t.eventCache.getNode(),a,h),p=ya(t,g,!0,s.filter.filtersNodes());else{const E=ne(i);if(E===".priority")g=s.filter.updatePriority(t.eventCache.getNode(),a),p=ya(t,g,d.isFullyInitialized(),d.isFiltered());else{const b=Oe(i),x=d.getNode().getImmediateChild(E);let L;if(ue(b))L=a;else{const X=v.getCompleteChild(E);X!=null?Dh(b)===".priority"&&X.getChild(xy(b)).isEmpty()?L=X:L=X.updateChild(b,a):L=F.EMPTY_NODE}if(x.equals(L))p=t;else{const X=s.filter.updateChild(d.getNode(),E,L,b,v,h);p=ya(t,X,d.isFullyInitialized(),s.filter.filtersNodes())}}}return p}function sv(s,t){return s.eventCache.isCompleteForChild(t)}function Qw(s,t,i,a,o,c,h){let d=t;return a.foreach((p,g)=>{const v=He(i,p);sv(t,ne(v))&&(d=nh(s,d,v,g,o,c,h))}),a.foreach((p,g)=>{const v=He(i,p);sv(t,ne(v))||(d=nh(s,d,v,g,o,c,h))}),d}function rv(s,t,i){return i.foreach((a,o)=>{t=t.updateChild(a,o)}),t}function ih(s,t,i,a,o,c,h,d){if(t.serverCache.getNode().isEmpty()&&!t.serverCache.isFullyInitialized())return t;let p=t,g;ue(i)?g=a:g=new Ne(null).setTree(i,a);const v=t.serverCache.getNode();return g.children.inorderTraversal((E,b)=>{if(v.hasChild(E)){const x=t.serverCache.getNode().getImmediateChild(E),L=rv(s,x,b);p=zo(s,p,new Se(E),L,o,c,h,d)}}),g.children.inorderTraversal((E,b)=>{const x=!t.serverCache.isCompleteForChild(E)&&b.value===null;if(!v.hasChild(E)&&!x){const L=t.serverCache.getNode().getImmediateChild(E),X=rv(s,L,b);p=zo(s,p,new Se(E),X,o,c,h,d)}}),p}function Fw(s,t,i,a,o,c,h){if(Lo(o,i)!=null)return t;const d=t.serverCache.isFiltered(),p=t.serverCache;if(a.value!=null){if(ue(i)&&p.isFullyInitialized()||p.isCompleteForPath(i))return zo(s,t,i,p.getNode().getChild(i),o,c,d,h);if(ue(i)){let g=new Ne(null);return p.getNode().forEachChild(Ws,(v,E)=>{g=g.set(new Se(v),E)}),ih(s,t,i,g,o,c,d,h)}else return t}else{let g=new Ne(null);return a.foreach((v,E)=>{const b=He(i,v);p.isCompleteForPath(b)&&(g=g.set(v,p.getNode().getChild(b)))}),ih(s,t,i,g,o,c,d,h)}}function Kw(s,t,i,a,o){const c=t.serverCache,h=Gy(t,c.getNode(),c.isFullyInitialized()||ue(i),c.isFiltered());return Wy(s,h,i,a,Xy,o)}function Xw(s,t,i,a,o,c){let h;if(Lo(a,i)!=null)return t;{const d=new qh(a,t,o),p=t.eventCache.getNode();let g;if(ue(i)||ne(i)===".priority"){let v;if(t.serverCache.isFullyInitialized())v=Uo(a,$i(t));else{const E=t.serverCache.getNode();U(E instanceof F,"serverChildren would be complete if leaf node"),v=Ph(a,E)}v=v,g=s.filter.updateFullNode(p,v,c)}else{const v=ne(i);let E=Bh(a,v,t.serverCache);E==null&&t.serverCache.isCompleteForChild(v)&&(E=p.getImmediateChild(v)),E!=null?g=s.filter.updateChild(p,v,E,Oe(i),d,c):t.eventCache.getNode().hasChild(v)?g=s.filter.updateChild(p,v,F.EMPTY_NODE,Oe(i),d,c):g=p,g.isEmpty()&&t.serverCache.isFullyInitialized()&&(h=Uo(a,$i(t)),h.isLeafNode()&&(g=s.filter.updateFullNode(g,h,c)))}return h=t.serverCache.isFullyInitialized()||Lo(a,de())!=null,ya(t,g,h,s.filter.filtersNodes())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ww{constructor(t,i){this.query_=t,this.eventRegistrations_=[];const a=this.query_._queryParams,o=new xh(a.getIndex()),c=_w(a);this.processor_=Vw(c);const h=i.serverCache,d=i.eventCache,p=o.updateFullNode(F.EMPTY_NODE,h.getNode(),null),g=c.updateFullNode(F.EMPTY_NODE,d.getNode(),null),v=new Ei(p,h.isFullyInitialized(),o.filtersNodes()),E=new Ei(g,d.isFullyInitialized(),c.filtersNodes());this.viewCache_=Fo(E,v),this.eventGenerator_=new Sw(this.query_)}get query(){return this.query_}}function Zw(s){return s.viewCache_.serverCache.getNode()}function Jw(s){return xo(s.viewCache_)}function $w(s,t){const i=$i(s.viewCache_);return i&&(s.query._queryParams.loadsAllData()||!ue(t)&&!i.getImmediateChild(ne(t)).isEmpty())?i.getChild(t):null}function av(s){return s.eventRegistrations_.length===0}function e1(s,t){s.eventRegistrations_.push(t)}function lv(s,t,i){const a=[];if(i){U(t==null,"A cancel should cancel all event registrations.");const o=s.query._path;s.eventRegistrations_.forEach(c=>{const h=c.createCancelEvent(i,o);h&&a.push(h)})}if(t){let o=[];for(let c=0;c<s.eventRegistrations_.length;++c){const h=s.eventRegistrations_[c];if(!h.matches(t))o.push(h);else if(t.hasAnyCallback()){o=o.concat(s.eventRegistrations_.slice(c+1));break}}s.eventRegistrations_=o}else s.eventRegistrations_=[];return a}function ov(s,t,i,a){t.type===Jt.MERGE&&t.source.queryId!==null&&(U($i(s.viewCache_),"We should always have a full cache before handling merges"),U(xo(s.viewCache_),"Missing event cache, even though we have a server cache"));const o=s.viewCache_,c=jw(s.processor_,o,t,i,a);return Gw(s.processor_,c.viewCache),U(c.viewCache.serverCache.isFullyInitialized()||!o.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),s.viewCache_=c.viewCache,Zy(s,c.changes,c.viewCache.eventCache.getNode(),null)}function t1(s,t){const i=s.viewCache_.eventCache,a=[];return i.getNode().isLeafNode()||i.getNode().forEachChild(Pe,(c,h)=>{a.push(er(c,h))}),i.isFullyInitialized()&&a.push(qy(i.getNode())),Zy(s,a,i.getNode(),t)}function Zy(s,t,i,a){const o=a?[a]:s.eventRegistrations_;return Tw(s.eventGenerator_,t,i,o)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ho;class Jy{constructor(){this.views=new Map}}function n1(s){U(!Ho,"__referenceConstructor has already been defined"),Ho=s}function i1(){return U(Ho,"Reference.ts has not been loaded"),Ho}function s1(s){return s.views.size===0}function Vh(s,t,i,a){const o=t.source.queryId;if(o!==null){const c=s.views.get(o);return U(c!=null,"SyncTree gave us an op for an invalid query."),ov(c,t,i,a)}else{let c=[];for(const h of s.views.values())c=c.concat(ov(h,t,i,a));return c}}function $y(s,t,i,a,o){const c=t._queryIdentifier,h=s.views.get(c);if(!h){let d=Uo(i,o?a:null),p=!1;d?p=!0:a instanceof F?(d=Ph(i,a),p=!1):(d=F.EMPTY_NODE,p=!1);const g=Fo(new Ei(d,p,!1),new Ei(a,o,!1));return new Ww(t,g)}return h}function r1(s,t,i,a,o,c){const h=$y(s,t,a,o,c);return s.views.has(t._queryIdentifier)||s.views.set(t._queryIdentifier,h),e1(h,i),t1(h,i)}function a1(s,t,i,a){const o=t._queryIdentifier,c=[];let h=[];const d=Si(s);if(o==="default")for(const[p,g]of s.views.entries())h=h.concat(lv(g,i,a)),av(g)&&(s.views.delete(p),g.query._queryParams.loadsAllData()||c.push(g.query));else{const p=s.views.get(o);p&&(h=h.concat(lv(p,i,a)),av(p)&&(s.views.delete(o),p.query._queryParams.loadsAllData()||c.push(p.query)))}return d&&!Si(s)&&c.push(new(i1())(t._repo,t._path)),{removed:c,events:h}}function eE(s){const t=[];for(const i of s.views.values())i.query._queryParams.loadsAllData()||t.push(i);return t}function vi(s,t){let i=null;for(const a of s.views.values())i=i||$w(a,t);return i}function tE(s,t){if(t._queryParams.loadsAllData())return Xo(s);{const a=t._queryIdentifier;return s.views.get(a)}}function nE(s,t){return tE(s,t)!=null}function Si(s){return Xo(s)!=null}function Xo(s){for(const t of s.views.values())if(t.query._queryParams.loadsAllData())return t;return null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Po;function l1(s){U(!Po,"__referenceConstructor has already been defined"),Po=s}function o1(){return U(Po,"Reference.ts has not been loaded"),Po}let u1=1;class uv{constructor(t){this.listenProvider_=t,this.syncPointTree_=new Ne(null),this.pendingWriteTree_=Hw(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function iE(s,t,i,a,o){return Rw(s.pendingWriteTree_,t,i,a,o),o?ur(s,new Ji(Lh(),t,i)):[]}function c1(s,t,i,a){ww(s.pendingWriteTree_,t,i,a);const o=Ne.fromObject(i);return ur(s,new tr(Lh(),t,o))}function di(s,t,i=!1){const a=Nw(s.pendingWriteTree_,t);if(Ow(s.pendingWriteTree_,t)){let c=new Ne(null);return a.snap!=null?c=c.set(de(),!0):ot(a.children,h=>{c=c.set(new Se(h),!0)}),ur(s,new ko(a.path,c,i))}else return[]}function Ga(s,t,i){return ur(s,new Ji(zh(),t,i))}function f1(s,t,i){const a=Ne.fromObject(i);return ur(s,new tr(zh(),t,a))}function h1(s,t){return ur(s,new Ia(zh(),t))}function d1(s,t,i){const a=jh(s,i);if(a){const o=Yh(a),c=o.path,h=o.queryId,d=_t(c,t),p=new Ia(Hh(h),d);return Qh(s,c,p)}else return[]}function Bo(s,t,i,a,o=!1){const c=t._path,h=s.syncPointTree_.get(c);let d=[];if(h&&(t._queryIdentifier==="default"||nE(h,t))){const p=a1(h,t,i,a);s1(h)&&(s.syncPointTree_=s.syncPointTree_.remove(c));const g=p.removed;if(d=p.events,!o){const v=g.findIndex(b=>b._queryParams.loadsAllData())!==-1,E=s.syncPointTree_.findOnPath(c,(b,x)=>Si(x));if(v&&!E){const b=s.syncPointTree_.subtree(c);if(!b.isEmpty()){const x=g1(b);for(let L=0;L<x.length;++L){const X=x[L],se=X.query,je=lE(s,X);s.listenProvider_.startListening(Sa(se),Ma(s,se),je.hashFn,je.onComplete)}}}!E&&g.length>0&&!a&&(v?s.listenProvider_.stopListening(Sa(t),null):g.forEach(b=>{const x=s.queryToTagMap.get(Wo(b));s.listenProvider_.stopListening(Sa(b),x)}))}m1(s,g)}return d}function sE(s,t,i,a){const o=jh(s,a);if(o!=null){const c=Yh(o),h=c.path,d=c.queryId,p=_t(h,t),g=new Ji(Hh(d),p,i);return Qh(s,h,g)}else return[]}function _1(s,t,i,a){const o=jh(s,a);if(o){const c=Yh(o),h=c.path,d=c.queryId,p=_t(h,t),g=Ne.fromObject(i),v=new tr(Hh(d),p,g);return Qh(s,h,v)}else return[]}function sh(s,t,i,a=!1){const o=t._path;let c=null,h=!1;s.syncPointTree_.foreachOnPath(o,(b,x)=>{const L=_t(b,o);c=c||vi(x,L),h=h||Si(x)});let d=s.syncPointTree_.get(o);d?(h=h||Si(d),c=c||vi(d,de())):(d=new Jy,s.syncPointTree_=s.syncPointTree_.set(o,d));let p;c!=null?p=!0:(p=!1,c=F.EMPTY_NODE,s.syncPointTree_.subtree(o).foreachChild((x,L)=>{const X=vi(L,de());X&&(c=c.updateImmediateChild(x,X))}));const g=nE(d,t);if(!g&&!t._queryParams.loadsAllData()){const b=Wo(t);U(!s.queryToTagMap.has(b),"View does not exist, but we have a tag");const x=v1();s.queryToTagMap.set(b,x),s.tagToQueryMap.set(x,b)}const v=Ko(s.pendingWriteTree_,o);let E=r1(d,t,i,v,c,p);if(!g&&!h&&!a){const b=tE(d,t);E=E.concat(y1(s,t,b))}return E}function Gh(s,t,i){const o=s.pendingWriteTree_,c=s.syncPointTree_.findOnPath(t,(h,d)=>{const p=_t(h,t),g=vi(d,p);if(g)return g});return Qy(o,t,c,i,!0)}function p1(s,t){const i=t._path;let a=null;s.syncPointTree_.foreachOnPath(i,(g,v)=>{const E=_t(g,i);a=a||vi(v,E)});let o=s.syncPointTree_.get(i);o?a=a||vi(o,de()):(o=new Jy,s.syncPointTree_=s.syncPointTree_.set(i,o));const c=a!=null,h=c?new Ei(a,!0,!1):null,d=Ko(s.pendingWriteTree_,t._path),p=$y(o,t,d,c?h.getNode():F.EMPTY_NODE,c);return Jw(p)}function ur(s,t){return rE(t,s.syncPointTree_,null,Ko(s.pendingWriteTree_,de()))}function rE(s,t,i,a){if(ue(s.path))return aE(s,t,i,a);{const o=t.get(de());i==null&&o!=null&&(i=vi(o,de()));let c=[];const h=ne(s.path),d=s.operationForChild(h),p=t.children.get(h);if(p&&d){const g=i?i.getImmediateChild(h):null,v=Fy(a,h);c=c.concat(rE(d,p,g,v))}return o&&(c=c.concat(Vh(o,s,a,i))),c}}function aE(s,t,i,a){const o=t.get(de());i==null&&o!=null&&(i=vi(o,de()));let c=[];return t.children.inorderTraversal((h,d)=>{const p=i?i.getImmediateChild(h):null,g=Fy(a,h),v=s.operationForChild(h);v&&(c=c.concat(aE(v,d,p,g)))}),o&&(c=c.concat(Vh(o,s,a,i))),c}function lE(s,t){const i=t.query,a=Ma(s,i);return{hashFn:()=>(Zw(t)||F.EMPTY_NODE).hash(),onComplete:o=>{if(o==="ok")return a?d1(s,i._path,a):h1(s,i._path);{const c=hR(o,i);return Bo(s,i,null,c)}}}}function Ma(s,t){const i=Wo(t);return s.queryToTagMap.get(i)}function Wo(s){return s._path.toString()+"$"+s._queryIdentifier}function jh(s,t){return s.tagToQueryMap.get(t)}function Yh(s){const t=s.indexOf("$");return U(t!==-1&&t<s.length-1,"Bad queryKey."),{queryId:s.substr(t+1),path:new Se(s.substr(0,t))}}function Qh(s,t,i){const a=s.syncPointTree_.get(t);U(a,"Missing sync point for query tag that we're tracking");const o=Ko(s.pendingWriteTree_,t);return Vh(a,i,o,null)}function g1(s){return s.fold((t,i,a)=>{if(i&&Si(i))return[Xo(i)];{let o=[];return i&&(o=eE(i)),ot(a,(c,h)=>{o=o.concat(h)}),o}})}function Sa(s){return s._queryParams.loadsAllData()&&!s._queryParams.isDefault()?new(o1())(s._repo,s._path):s}function m1(s,t){for(let i=0;i<t.length;++i){const a=t[i];if(!a._queryParams.loadsAllData()){const o=Wo(a),c=s.queryToTagMap.get(o);s.queryToTagMap.delete(o),s.tagToQueryMap.delete(c)}}}function v1(){return u1++}function y1(s,t,i){const a=t._path,o=Ma(s,t),c=lE(s,i),h=s.listenProvider_.startListening(Sa(t),o,c.hashFn,c.onComplete),d=s.syncPointTree_.subtree(a);if(o)U(!Si(d.value),"If we're adding a query, it shouldn't be shadowed");else{const p=d.fold((g,v,E)=>{if(!ue(g)&&v&&Si(v))return[Xo(v).query];{let b=[];return v&&(b=b.concat(eE(v).map(x=>x.query))),ot(E,(x,L)=>{b=b.concat(L)}),b}});for(let g=0;g<p.length;++g){const v=p[g];s.listenProvider_.stopListening(Sa(v),Ma(s,v))}}return h}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fh{constructor(t){this.node_=t}getImmediateChild(t){const i=this.node_.getImmediateChild(t);return new Fh(i)}node(){return this.node_}}class Kh{constructor(t,i){this.syncTree_=t,this.path_=i}getImmediateChild(t){const i=He(this.path_,t);return new Kh(this.syncTree_,i)}node(){return Gh(this.syncTree_,this.path_)}}const E1=function(s){return s=s||{},s.timestamp=s.timestamp||new Date().getTime(),s},cv=function(s,t,i){if(!s||typeof s!="object")return s;if(U(".sv"in s,"Unexpected leaf node or priority contents"),typeof s[".sv"]=="string")return S1(s[".sv"],t,i);if(typeof s[".sv"]=="object")return T1(s[".sv"],t);U(!1,"Unexpected server value: "+JSON.stringify(s,null,2))},S1=function(s,t,i){switch(s){case"timestamp":return i.timestamp;default:U(!1,"Unexpected server value: "+s)}},T1=function(s,t,i){s.hasOwnProperty("increment")||U(!1,"Unexpected server value: "+JSON.stringify(s,null,2));const a=s.increment;typeof a!="number"&&U(!1,"Unexpected increment value: "+a);const o=t.node();if(U(o!==null&&typeof o<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!o.isLeafNode())return a;const h=o.getValue();return typeof h!="number"?a:h+a},oE=function(s,t,i,a){return Xh(t,new Kh(i,s),a)},uE=function(s,t,i){return Xh(s,new Fh(t),i)};function Xh(s,t,i){const a=s.getPriority().val(),o=cv(a,t.getImmediateChild(".priority"),i);let c;if(s.isLeafNode()){const h=s,d=cv(h.getValue(),t,i);return d!==h.getValue()||o!==h.getPriority().val()?new nt(d,Xe(o)):s}else{const h=s;return c=h,o!==h.getPriority().val()&&(c=c.updatePriority(new nt(o))),h.forEachChild(Pe,(d,p)=>{const g=Xh(p,t.getImmediateChild(d),i);g!==p&&(c=c.updateImmediateChild(d,g))}),c}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wh{constructor(t="",i=null,a={children:{},childCount:0}){this.name=t,this.parent=i,this.node=a}}function Zh(s,t){let i=t instanceof Se?t:new Se(t),a=s,o=ne(i);for(;o!==null;){const c=Zs(a.node.children,o)||{children:{},childCount:0};a=new Wh(o,a,c),i=Oe(i),o=ne(i)}return a}function cr(s){return s.node.value}function cE(s,t){s.node.value=t,rh(s)}function fE(s){return s.node.childCount>0}function b1(s){return cr(s)===void 0&&!fE(s)}function Zo(s,t){ot(s.node.children,(i,a)=>{t(new Wh(i,s,a))})}function hE(s,t,i,a){i&&t(s),Zo(s,o=>{hE(o,t,!0)})}function C1(s,t,i){let a=s.parent;for(;a!==null;){if(t(a))return!0;a=a.parent}return!1}function ja(s){return new Se(s.parent===null?s.name:ja(s.parent)+"/"+s.name)}function rh(s){s.parent!==null&&A1(s.parent,s.name,s)}function A1(s,t,i){const a=b1(i),o=cn(s.node.children,t);a&&o?(delete s.node.children[t],s.node.childCount--,rh(s)):!a&&!o&&(s.node.children[t]=i.node,s.node.childCount++,rh(s))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const R1=/[\[\].#$\/\u0000-\u001F\u007F]/,w1=/[\[\].#$\u0000-\u001F\u007F]/,zf=10*1024*1024,Jh=function(s){return typeof s=="string"&&s.length!==0&&!R1.test(s)},dE=function(s){return typeof s=="string"&&s.length!==0&&!w1.test(s)},N1=function(s){return s&&(s=s.replace(/^\/*\.info(\/|$)/,"/")),dE(s)},O1=function(s){return s===null||typeof s=="string"||typeof s=="number"&&!Ah(s)||s&&typeof s=="object"&&cn(s,".sv")},D1=function(s,t,i,a){Jo(qo(s,"value"),t,i)},Jo=function(s,t,i){const a=i instanceof Se?new QR(i,s):i;if(t===void 0)throw new Error(s+"contains undefined "+Yi(a));if(typeof t=="function")throw new Error(s+"contains a function "+Yi(a)+" with contents = "+t.toString());if(Ah(t))throw new Error(s+"contains "+t.toString()+" "+Yi(a));if(typeof t=="string"&&t.length>zf/3&&Vo(t)>zf)throw new Error(s+"contains a string greater than "+zf+" utf8 bytes "+Yi(a)+" ('"+t.substring(0,50)+"...')");if(t&&typeof t=="object"){let o=!1,c=!1;if(ot(t,(h,d)=>{if(h===".value")o=!0;else if(h!==".priority"&&h!==".sv"&&(c=!0,!Jh(h)))throw new Error(s+" contains an invalid key ("+h+") "+Yi(a)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);FR(a,h),Jo(s,d,a),KR(a)}),o&&c)throw new Error(s+' contains ".value" child '+Yi(a)+" in addition to actual children.")}},I1=function(s,t){let i,a;for(i=0;i<t.length;i++){a=t[i];const c=wa(a);for(let h=0;h<c.length;h++)if(!(c[h]===".priority"&&h===c.length-1)){if(!Jh(c[h]))throw new Error(s+"contains an invalid key ("+c[h]+") in path "+a.toString()+`. Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`)}}t.sort(YR);let o=null;for(i=0;i<t.length;i++){if(a=t[i],o!==null&&jt(o,a))throw new Error(s+"contains a path "+o.toString()+" that is ancestor of another path "+a.toString());o=a}},M1=function(s,t,i,a){const o=qo(s,"values");if(!(t&&typeof t=="object")||Array.isArray(t))throw new Error(o+" must be an object containing the children to replace.");const c=[];ot(t,(h,d)=>{const p=new Se(h);if(Jo(o,d,He(i,p)),Dh(p)===".priority"&&!O1(d))throw new Error(o+"contains an invalid value for '"+p.toString()+"', which must be a valid Firebase priority (a string, finite number, server value, or null).");c.push(p)}),I1(o,c)},_E=function(s,t,i,a){if(!dE(i))throw new Error(qo(s,t)+'was an invalid path = "'+i+`". Paths must be non-empty strings and can't contain ".", "#", "$", "[", or "]"`)},k1=function(s,t,i,a){i&&(i=i.replace(/^\/*\.info(\/|$)/,"/")),_E(s,t,i)},x1=function(s,t){if(ne(t)===".info")throw new Error(s+" failed = Can't modify data under /.info/")},U1=function(s,t){const i=t.path.toString();if(typeof t.repoInfo.host!="string"||t.repoInfo.host.length===0||!Jh(t.repoInfo.namespace)&&t.repoInfo.host.split(":")[0]!=="localhost"||i.length!==0&&!N1(i))throw new Error(qo(s,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class L1{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function $o(s,t){let i=null;for(let a=0;a<t.length;a++){const o=t[a],c=o.getPath();i!==null&&!Ih(c,i.path)&&(s.eventLists_.push(i),i=null),i===null&&(i={events:[],path:c}),i.events.push(o)}i&&s.eventLists_.push(i)}function pE(s,t,i){$o(s,i),gE(s,a=>Ih(a,t))}function Yt(s,t,i){$o(s,i),gE(s,a=>jt(a,t)||jt(t,a))}function gE(s,t){s.recursionDepth_++;let i=!0;for(let a=0;a<s.eventLists_.length;a++){const o=s.eventLists_[a];if(o){const c=o.path;t(c)?(z1(s.eventLists_[a]),s.eventLists_[a]=null):i=!1}}i&&(s.eventLists_=[]),s.recursionDepth_--}function z1(s){for(let t=0;t<s.events.length;t++){const i=s.events[t];if(i!==null){s.events[t]=null;const a=i.getEventRunner();ma&&lt("event: "+i.toString()),or(a)}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const H1="repo_interrupt",P1=25;class B1{constructor(t,i,a,o){this.repoInfo_=t,this.forceRestClient_=i,this.authTokenProvider_=a,this.appCheckProvider_=o,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new L1,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=Mo(),this.transactionQueueTree_=new Wh,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function q1(s,t,i){if(s.stats_=Nh(s.repoInfo_),s.forceRestClient_||gR())s.server_=new Io(s.repoInfo_,(a,o,c,h)=>{fv(s,a,o,c,h)},s.authTokenProvider_,s.appCheckProvider_),setTimeout(()=>hv(s,!0),0);else{if(typeof i<"u"&&i!==null){if(typeof i!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{We(i)}catch(a){throw new Error("Invalid authOverride provided: "+a)}}s.persistentConnection_=new Mn(s.repoInfo_,t,(a,o,c,h)=>{fv(s,a,o,c,h)},a=>{hv(s,a)},a=>{G1(s,a)},s.authTokenProvider_,s.appCheckProvider_,i),s.server_=s.persistentConnection_}s.authTokenProvider_.addTokenChangeListener(a=>{s.server_.refreshAuthToken(a)}),s.appCheckProvider_.addTokenChangeListener(a=>{s.server_.refreshAppCheckToken(a.token)}),s.statsReporter_=SR(s.repoInfo_,()=>new Ew(s.stats_,s.server_)),s.infoData_=new pw,s.infoSyncTree_=new uv({startListening:(a,o,c,h)=>{let d=[];const p=s.infoData_.getNode(a._path);return p.isEmpty()||(d=Ga(s.infoSyncTree_,a._path,p),setTimeout(()=>{h("ok")},0)),d},stopListening:()=>{}}),$h(s,"connected",!1),s.serverSyncTree_=new uv({startListening:(a,o,c,h)=>(s.server_.listen(a,c,o,(d,p)=>{const g=h(d,p);Yt(s.eventQueue_,a._path,g)}),[]),stopListening:(a,o)=>{s.server_.unlisten(a,o)}})}function V1(s){const i=s.infoData_.getNode(new Se(".info/serverTimeOffset")).val()||0;return new Date().getTime()+i}function eu(s){return E1({timestamp:V1(s)})}function fv(s,t,i,a,o){s.dataUpdateCount++;const c=new Se(t);i=s.interceptServerDataCallback_?s.interceptServerDataCallback_(t,i):i;let h=[];if(o)if(a){const p=Eo(i,g=>Xe(g));h=_1(s.serverSyncTree_,c,p,o)}else{const p=Xe(i);h=sE(s.serverSyncTree_,c,p,o)}else if(a){const p=Eo(i,g=>Xe(g));h=f1(s.serverSyncTree_,c,p)}else{const p=Xe(i);h=Ga(s.serverSyncTree_,c,p)}let d=c;h.length>0&&(d=ir(s,c)),Yt(s.eventQueue_,d,h)}function hv(s,t){$h(s,"connected",t),t===!1&&F1(s)}function G1(s,t){ot(t,(i,a)=>{$h(s,i,a)})}function $h(s,t,i){const a=new Se("/.info/"+t),o=Xe(i);s.infoData_.updateSnapshot(a,o);const c=Ga(s.infoSyncTree_,a,o);Yt(s.eventQueue_,a,c)}function ed(s){return s.nextWriteId_++}function j1(s,t,i){const a=p1(s.serverSyncTree_,t);return a!=null?Promise.resolve(a):s.server_.get(t).then(o=>{const c=Xe(o).withIndex(t._queryParams.getIndex());sh(s.serverSyncTree_,t,i,!0);let h;if(t._queryParams.loadsAllData())h=Ga(s.serverSyncTree_,t._path,c);else{const d=Ma(s.serverSyncTree_,t);h=sE(s.serverSyncTree_,t._path,c,d)}return Yt(s.eventQueue_,t._path,h),Bo(s.serverSyncTree_,t,i,null,!0),c},o=>(Ya(s,"get for query "+We(t)+" failed: "+o),Promise.reject(new Error(o))))}function Y1(s,t,i,a,o){Ya(s,"set",{path:t.toString(),value:i,priority:a});const c=eu(s),h=Xe(i,a),d=Gh(s.serverSyncTree_,t),p=uE(h,d,c),g=ed(s),v=iE(s.serverSyncTree_,t,p,g,!0);$o(s.eventQueue_,v),s.server_.put(t.toString(),h.val(!0),(b,x)=>{const L=b==="ok";L||pt("set at "+t+" failed: "+b);const X=di(s.serverSyncTree_,g,!L);Yt(s.eventQueue_,t,X),ah(s,o,b,x)});const E=nd(s,t);ir(s,E),Yt(s.eventQueue_,E,[])}function Q1(s,t,i,a){Ya(s,"update",{path:t.toString(),value:i});let o=!0;const c=eu(s),h={};if(ot(i,(d,p)=>{o=!1,h[d]=oE(He(t,d),Xe(p),s.serverSyncTree_,c)}),o)lt("update() called with empty data.  Don't do anything."),ah(s,a,"ok",void 0);else{const d=ed(s),p=c1(s.serverSyncTree_,t,h,d);$o(s.eventQueue_,p),s.server_.merge(t.toString(),i,(g,v)=>{const E=g==="ok";E||pt("update at "+t+" failed: "+g);const b=di(s.serverSyncTree_,d,!E),x=b.length>0?ir(s,t):t;Yt(s.eventQueue_,x,b),ah(s,a,g,v)}),ot(i,g=>{const v=nd(s,He(t,g));ir(s,v)}),Yt(s.eventQueue_,t,[])}}function F1(s){Ya(s,"onDisconnectEvents");const t=eu(s),i=Mo();Jf(s.onDisconnect_,de(),(o,c)=>{const h=oE(o,c,s.serverSyncTree_,t);Vy(i,o,h)});let a=[];Jf(i,de(),(o,c)=>{a=a.concat(Ga(s.serverSyncTree_,o,c));const h=nd(s,o);ir(s,h)}),s.onDisconnect_=Mo(),Yt(s.eventQueue_,de(),a)}function K1(s,t,i){let a;ne(t._path)===".info"?a=sh(s.infoSyncTree_,t,i):a=sh(s.serverSyncTree_,t,i),pE(s.eventQueue_,t._path,a)}function dv(s,t,i){let a;ne(t._path)===".info"?a=Bo(s.infoSyncTree_,t,i):a=Bo(s.serverSyncTree_,t,i),pE(s.eventQueue_,t._path,a)}function X1(s){s.persistentConnection_&&s.persistentConnection_.interrupt(H1)}function Ya(s,...t){let i="";s.persistentConnection_&&(i=s.persistentConnection_.id+":"),lt(i,...t)}function ah(s,t,i,a){t&&or(()=>{if(i==="ok")t(null);else{const o=(i||"error").toUpperCase();let c=o;a&&(c+=": "+a);const h=new Error(c);h.code=o,t(h)}})}function mE(s,t,i){return Gh(s.serverSyncTree_,t,i)||F.EMPTY_NODE}function td(s,t=s.transactionQueueTree_){if(t||tu(s,t),cr(t)){const i=yE(s,t);U(i.length>0,"Sending zero length transaction queue"),i.every(o=>o.status===0)&&W1(s,ja(t),i)}else fE(t)&&Zo(t,i=>{td(s,i)})}function W1(s,t,i){const a=i.map(g=>g.currentWriteId),o=mE(s,t,a);let c=o;const h=o.hash();for(let g=0;g<i.length;g++){const v=i[g];U(v.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),v.status=1,v.retryCount++;const E=_t(t,v.path);c=c.updateChild(E,v.currentOutputSnapshotRaw)}const d=c.val(!0),p=t;s.server_.put(p.toString(),d,g=>{Ya(s,"transaction put response",{path:p.toString(),status:g});let v=[];if(g==="ok"){const E=[];for(let b=0;b<i.length;b++)i[b].status=2,v=v.concat(di(s.serverSyncTree_,i[b].currentWriteId)),i[b].onComplete&&E.push(()=>i[b].onComplete(null,!0,i[b].currentOutputSnapshotResolved)),i[b].unwatcher();tu(s,Zh(s.transactionQueueTree_,t)),td(s,s.transactionQueueTree_),Yt(s.eventQueue_,t,v);for(let b=0;b<E.length;b++)or(E[b])}else{if(g==="datastale")for(let E=0;E<i.length;E++)i[E].status===3?i[E].status=4:i[E].status=0;else{pt("transaction at "+p.toString()+" failed: "+g);for(let E=0;E<i.length;E++)i[E].status=4,i[E].abortReason=g}ir(s,t)}},h)}function ir(s,t){const i=vE(s,t),a=ja(i),o=yE(s,i);return Z1(s,o,a),a}function Z1(s,t,i){if(t.length===0)return;const a=[];let o=[];const h=t.filter(d=>d.status===0).map(d=>d.currentWriteId);for(let d=0;d<t.length;d++){const p=t[d],g=_t(i,p.path);let v=!1,E;if(U(g!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),p.status===4)v=!0,E=p.abortReason,o=o.concat(di(s.serverSyncTree_,p.currentWriteId,!0));else if(p.status===0)if(p.retryCount>=P1)v=!0,E="maxretry",o=o.concat(di(s.serverSyncTree_,p.currentWriteId,!0));else{const b=mE(s,p.path,h);p.currentInputSnapshot=b;const x=t[d].update(b.val());if(x!==void 0){Jo("transaction failed: Data returned ",x,p.path);let L=Xe(x);typeof x=="object"&&x!=null&&cn(x,".priority")||(L=L.updatePriority(b.getPriority()));const se=p.currentWriteId,je=eu(s),Ye=uE(L,b,je);p.currentOutputSnapshotRaw=L,p.currentOutputSnapshotResolved=Ye,p.currentWriteId=ed(s),h.splice(h.indexOf(se),1),o=o.concat(iE(s.serverSyncTree_,p.path,Ye,p.currentWriteId,p.applyLocally)),o=o.concat(di(s.serverSyncTree_,se,!0))}else v=!0,E="nodata",o=o.concat(di(s.serverSyncTree_,p.currentWriteId,!0))}Yt(s.eventQueue_,i,o),o=[],v&&(t[d].status=2,function(b){setTimeout(b,Math.floor(0))}(t[d].unwatcher),t[d].onComplete&&(E==="nodata"?a.push(()=>t[d].onComplete(null,!1,t[d].currentInputSnapshot)):a.push(()=>t[d].onComplete(new Error(E),!1,null))))}tu(s,s.transactionQueueTree_);for(let d=0;d<a.length;d++)or(a[d]);td(s,s.transactionQueueTree_)}function vE(s,t){let i,a=s.transactionQueueTree_;for(i=ne(t);i!==null&&cr(a)===void 0;)a=Zh(a,i),t=Oe(t),i=ne(t);return a}function yE(s,t){const i=[];return EE(s,t,i),i.sort((a,o)=>a.order-o.order),i}function EE(s,t,i){const a=cr(t);if(a)for(let o=0;o<a.length;o++)i.push(a[o]);Zo(t,o=>{EE(s,o,i)})}function tu(s,t){const i=cr(t);if(i){let a=0;for(let o=0;o<i.length;o++)i[o].status!==2&&(i[a]=i[o],a++);i.length=a,cE(t,i.length>0?i:void 0)}Zo(t,a=>{tu(s,a)})}function nd(s,t){const i=ja(vE(s,t)),a=Zh(s.transactionQueueTree_,t);return C1(a,o=>{Hf(s,o)}),Hf(s,a),hE(a,o=>{Hf(s,o)}),i}function Hf(s,t){const i=cr(t);if(i){const a=[];let o=[],c=-1;for(let h=0;h<i.length;h++)i[h].status===3||(i[h].status===1?(U(c===h-1,"All SENT items should be at beginning of queue."),c=h,i[h].status=3,i[h].abortReason="set"):(U(i[h].status===0,"Unexpected transaction status in abort"),i[h].unwatcher(),o=o.concat(di(s.serverSyncTree_,i[h].currentWriteId,!0)),i[h].onComplete&&a.push(i[h].onComplete.bind(null,new Error("set"),!1,null))));c===-1?cE(t,void 0):i.length=c+1,Yt(s.eventQueue_,ja(t),o);for(let h=0;h<a.length;h++)or(a[h])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function J1(s){let t="";const i=s.split("/");for(let a=0;a<i.length;a++)if(i[a].length>0){let o=i[a];try{o=decodeURIComponent(o.replace(/\+/g," "))}catch{}t+="/"+o}return t}function $1(s){const t={};s.charAt(0)==="?"&&(s=s.substring(1));for(const i of s.split("&")){if(i.length===0)continue;const a=i.split("=");a.length===2?t[decodeURIComponent(a[0])]=decodeURIComponent(a[1]):pt(`Invalid query segment '${i}' in query '${s}'`)}return t}const _v=function(s,t){const i=eN(s),a=i.namespace;i.domain==="firebase.com"&&Un(i.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!a||a==="undefined")&&i.domain!=="localhost"&&Un("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),i.secure||lR();const o=i.scheme==="ws"||i.scheme==="wss";return{repoInfo:new Ay(i.host,i.secure,a,o,t,"",a!==i.subdomain),path:new Se(i.pathString)}},eN=function(s){let t="",i="",a="",o="",c="",h=!0,d="https",p=443;if(typeof s=="string"){let g=s.indexOf("//");g>=0&&(d=s.substring(0,g-1),s=s.substring(g+2));let v=s.indexOf("/");v===-1&&(v=s.length);let E=s.indexOf("?");E===-1&&(E=s.length),t=s.substring(0,Math.min(v,E)),v<E&&(o=J1(s.substring(v,E)));const b=$1(s.substring(Math.min(s.length,E)));g=t.indexOf(":"),g>=0?(h=d==="https"||d==="wss",p=parseInt(t.substring(g+1),10)):g=t.length;const x=t.slice(0,g);if(x.toLowerCase()==="localhost")i="localhost";else if(x.split(".").length<=2)i=x;else{const L=t.indexOf(".");a=t.substring(0,L).toLowerCase(),i=t.substring(L+1),c=a}"ns"in b&&(c=b.ns)}return{host:t,port:p,domain:i,subdomain:a,secure:h,scheme:d,pathString:o,namespace:c}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tN{constructor(t,i,a,o){this.eventType=t,this.eventRegistration=i,this.snapshot=a,this.prevName=o}getPath(){const t=this.snapshot.ref;return this.eventType==="value"?t._path:t.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+We(this.snapshot.exportVal())}}class nN{constructor(t,i,a){this.eventRegistration=t,this.error=i,this.path=a}getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class SE{constructor(t,i){this.snapshotCallback=t,this.cancelCallback=i}onValue(t,i){this.snapshotCallback.call(null,t,i)}onCancel(t){return U(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,t)}get hasCancelCallback(){return!!this.cancelCallback}matches(t){return this.snapshotCallback===t.snapshotCallback||this.snapshotCallback.userCallback!==void 0&&this.snapshotCallback.userCallback===t.snapshotCallback.userCallback&&this.snapshotCallback.context===t.snapshotCallback.context}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class id{constructor(t,i,a,o){this._repo=t,this._path=i,this._queryParams=a,this._orderByCalled=o}get key(){return ue(this._path)?null:Dh(this._path)}get ref(){return new Ln(this._repo,this._path)}get _queryIdentifier(){const t=$m(this._queryParams),i=Rh(t);return i==="{}"?"default":i}get _queryObject(){return $m(this._queryParams)}isEqual(t){if(t=mt(t),!(t instanceof id))return!1;const i=this._repo===t._repo,a=Ih(this._path,t._path),o=this._queryIdentifier===t._queryIdentifier;return i&&a&&o}toJSON(){return this.toString()}toString(){return this._repo.toString()+jR(this._path)}}class Ln extends id{constructor(t,i){super(t,i,new Uh,!1)}get parent(){const t=xy(this._path);return t===null?null:new Ln(this._repo,t)}get root(){let t=this;for(;t.parent!==null;)t=t.parent;return t}}class ka{constructor(t,i,a){this._node=t,this.ref=i,this._index=a}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(t){const i=new Se(t),a=lh(this.ref,t);return new ka(this._node.getChild(i),a,Pe)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(t){return this._node.isLeafNode()?!1:!!this._node.forEachChild(this._index,(a,o)=>t(new ka(o,lh(this.ref,a),Pe)))}hasChild(t){const i=new Se(t);return!this._node.getChild(i).isEmpty()}hasChildren(){return this._node.isLeafNode()?!1:!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}}function Rn(s,t){return s=mt(s),s._checkNotDeleted("ref"),t!==void 0?lh(s._root,t):s._root}function lh(s,t){return s=mt(s),ne(s._path)===null?k1("child","path",t):_E("child","path",t),new Ln(s._repo,He(s._path,t))}function Gs(s,t){s=mt(s),x1("set",s._path),D1("set",t,s._path);const i=new xa;return Y1(s._repo,s._path,t,null,i.wrapCallback(()=>{})),i.promise}function iN(s,t){M1("update",t,s._path);const i=new xa;return Q1(s._repo,s._path,t,i.wrapCallback(()=>{})),i.promise}function co(s){s=mt(s);const t=new SE(()=>{}),i=new nu(t);return j1(s._repo,s,i).then(a=>new ka(a,new Ln(s._repo,s._path),s._queryParams.getIndex()))}class nu{constructor(t){this.callbackContext=t}respondsTo(t){return t==="value"}createEvent(t,i){const a=i._queryParams.getIndex();return new tN("value",this,new ka(t.snapshotNode,new Ln(i._repo,i._path),a))}getEventRunner(t){return t.getEventType()==="cancel"?()=>this.callbackContext.onCancel(t.error):()=>this.callbackContext.onValue(t.snapshot,null)}createCancelEvent(t,i){return this.callbackContext.hasCancelCallback?new nN(this,t,i):null}matches(t){return t instanceof nu?!t.callbackContext||!this.callbackContext?!0:t.callbackContext.matches(this.callbackContext):!1}hasAnyCallback(){return this.callbackContext!==null}}function sN(s,t,i,a,o){let c;if(typeof a=="object"&&(c=void 0,o=a),typeof a=="function"&&(c=a),o&&o.onlyOnce){const p=i,g=(v,E)=>{dv(s._repo,s,d),p(v,E)};g.userCallback=i.userCallback,g.context=i.context,i=g}const h=new SE(i,c||void 0),d=new nu(h);return K1(s._repo,s,d),()=>dv(s._repo,s,d)}function rN(s,t,i,a){return sN(s,"value",t,i,a)}n1(Ln);l1(Ln);/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const aN="FIREBASE_DATABASE_EMULATOR_HOST",oh={};let lN=!1;function oN(s,t,i,a){s.repoInfo_=new Ay(t,!1,s.repoInfo_.namespace,s.repoInfo_.webSocketOnly,s.repoInfo_.nodeAdmin,s.repoInfo_.persistenceKey,s.repoInfo_.includeNamespaceInQueryParams,!0,i),a&&(s.authTokenProvider_=a)}function uN(s,t,i,a,o){let c=a||s.options.databaseURL;c===void 0&&(s.options.projectId||Un("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),lt("Using default host for project ",s.options.projectId),c=`${s.options.projectId}-default-rtdb.firebaseio.com`);let h=_v(c,o),d=h.repoInfo,p;typeof process<"u"&&Um&&(p=Um[aN]),p?(c=`http://${p}?ns=${d.namespace}`,h=_v(c,o),d=h.repoInfo):h.repoInfo.secure;const g=new vR(s.name,s.options,t);U1("Invalid Firebase Database URL",h),ue(h.path)||Un("Database URL must point to the root of a Firebase Database (not including a child path).");const v=fN(d,s,g,new mR(s,i));return new hN(v,s)}function cN(s,t){const i=oh[t];(!i||i[s.key]!==s)&&Un(`Database ${t}(${s.repoInfo_}) has already been deleted.`),X1(s),delete i[s.key]}function fN(s,t,i,a){let o=oh[t.name];o||(o={},oh[t.name]=o);let c=o[s.toURLString()];return c&&Un("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),c=new B1(s,lN,i,a),o[s.toURLString()]=c,c}class hN{constructor(t,i){this._repoInternal=t,this.app=i,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(q1(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new Ln(this._repo,de())),this._rootInternal}_delete(){return this._rootInternal!==null&&(cN(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(t){this._rootInternal===null&&Un("Cannot call "+t+" on a deleted database.")}}function dN(s=Nv(),t){const i=ph(s,"database").getImmediate({identifier:t});if(!i._instanceStarted){const a=_T("database");a&&_N(i,...a)}return i}function _N(s,t,i,a={}){s=mt(s),s._checkNotDeleted("useEmulator");const o=`${t}:${i}`,c=s._repoInternal;if(s._instanceStarted){if(o===s._repoInternal.repoInfo_.host&&Fi(a,c.repoInfo_.emulatorOptions))return;Un("connectDatabaseEmulator() cannot initialize or alter the emulator configuration after the database instance has started.")}let h;if(c.repoInfo_.nodeAdmin)a.mockUserToken&&Un('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),h=new mo(mo.OWNER);else if(a.mockUserToken){const d=typeof a.mockUserToken=="string"?a.mockUserToken:pT(a.mockUserToken,s.app.options.projectId);h=new mo(d)}oN(c,o,a,h)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pN(s){tR(ar),Js(new Ki("database",(t,{instanceIdentifier:i})=>{const a=t.getProvider("app").getImmediate(),o=t.getProvider("auth-internal"),c=t.getProvider("app-check-internal");return uN(a,o,c,i)},"PUBLIC").setMultipleInstances(!0)),gi(Lm,zm,s),gi(Lm,zm,"esm2017")}Mn.prototype.simpleListen=function(s,t){this.sendRequest("q",{p:s},t)};Mn.prototype.echo=function(s,t){this.sendRequest("echo",{d:s},t)};pN();var gN="firebase",mN="11.6.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */gi(gN,mN,"app");const vN={apiKey:"AIzaSyDWMkL3P7OWlosSFXXRg8gvUQg6-7Y9uu8",authDomain:"esp32door-control.firebaseapp.com",databaseURL:"https://esp32door-control-default-rtdb.firebaseio.com/",projectId:"esp32door-control",storageBucket:"esp32door-control.appspot.com",messagingSenderId:"605127991992",appId:"1:605127991992:web:4d0dccf6ae2d874603ca4d",measurementId:"G-91SJ3GLZ0Z"},TE=wv(vN),fo=$A(TE),wn=dN(TE),yN=15,EN=()=>Array.from({length:8},()=>"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".charAt(Math.floor(Math.random()*62))).join("");function SN(){const[s,t]=ke.useState(null),[i,a]=ke.useState([]),[o,c]=ke.useState({}),[h,d]=ke.useState(!1),[p,g]=ke.useState(!1),[v,E]=ke.useState(null),b=ke.useRef(null),x=ke.useCallback(()=>{b.current&&(clearTimeout(b.current),b.current=null),E(null)},[]),L=ke.useCallback(Z=>{b.current&&clearTimeout(b.current),E(Z),Z&&(b.current=setTimeout(()=>{E(null),b.current=null},4e3))},[]),X=async(Z,re)=>{x();try{await zC(fo,Z,re)}catch(ae){ae.code==="auth/email-already-in-use"?L("Email already registered"):ae.code==="auth/weak-password"?L("6 characters or more"):ae.code==="auth/invalid-email"?L("Invalid email"):L("Registration failed. Please try again.")}},se=async(Z,re)=>{x();try{await HC(fo,Z,re)}catch(ae){["auth/user-not-found","auth/invalid-credential","auth/wrong-password","auth/invalid-email"].includes(ae.code),L("Wrong email or password")}},je=async()=>{x(),await VC(fo)},Ye=async Z=>{const re=`tokens/${Z}/buttonStatus`,ae=await co(Rn(wn,re)),Ue=(ae.exists()?ae.val():"closed")==="open"?"closed":"open";await Gs(Rn(wn,re),Ue)},Ae=async(Z,re)=>{await Gs(Rn(wn,`tokens/${Z}/authorizedUsers/${re}`),!0);const ae=Rn(wn,`users/${re}/deviceTokens`),Te=await co(ae),Ue=Te.exists()&&Array.isArray(Te.val())?Te.val():[];Ue.includes(Z)||await Gs(ae,[...Ue,Z])},Ze=async(Z,re)=>{await Gs(Rn(wn,`tokens/${Z}/authorizedUsers/${re}`),null);const ae=Rn(wn,`users/${re}/deviceTokens`),Te=await co(ae),Ue=Te.exists()&&Array.isArray(Te.val())?Te.val():[];Ue.includes(Z)&&await Gs(ae,Ue.filter(Re=>Re!==Z))},ee=ke.useCallback(async Z=>{const re=Rn(wn,`users/${Z}/deviceTokens`),ae=await co(re);let Te=[];if(ae.exists()&&Array.isArray(ae.val()))Te=ae.val();else{const Ue=Array.from({length:yN},EN);Te=Ue;const Re={[`/users/${Z}/deviceTokens`]:Te};Ue.forEach(Qt=>{Re[`/tokens/${Qt}`]={owner:Z,authorizedUsers:{[Z]:!0},buttonStatus:"closed"}}),await iN(Rn(wn),Re)}a(Te),d(!1),Qe(Te)},[]),Qe=Z=>{const re={};if(c({}),d(!1),Z.length===0){d(!0);return}Z.forEach(ae=>{const Te=Rn(wn,`tokens/${ae}/buttonStatus`);rN(Te,Ue=>{let Re=Ue.val();typeof Re!="string"&&(Re="closed",Gs(Te,Re)),c(Qt=>({...Qt,[ae]:Re})),re[ae]=!0,Object.keys(re).length===Z.length&&d(!0)},console.error)})};return ke.useEffect(()=>qC(fo,re=>{t(re),re?ee(re.uid):(a([]),c({}),d(!1),x()),g(!0)}),[ee,x]),ke.useEffect(()=>()=>{b.current&&clearTimeout(b.current)},[]),{user:s,tokens:i,buttonState:o,isButtonDataLoaded:h,authChecked:p,error:v,register:X,login:se,logout:je,toggleButton:Ye,shareToken:Ae,revokeShare:Ze,clearError:x}}function TN(){const{user:s,token:t,tokens:i,buttonState:a,isButtonDataLoaded:o,error:c,register:h,login:d,logout:p,toggleButton:g,clearError:v}=SN(),[E,b]=ke.useState(!1);return ke.useEffect(()=>{if(c){b(!0);const x=setTimeout(()=>b(!1),3500);return()=>clearTimeout(x)}else b(!1)},[c]),xe.jsxs("div",{id:"appContainer",className:"fade-in background",children:[c&&xe.jsx("div",{className:`error-banner ${E?"visible":"fade-out"}`,children:c}),xe.jsxs("div",{className:s?"control-panel-screen":"container",id:"containerEl",children:[xe.jsx("h1",{className:"title",children:s?"":"Welcome to the future"}),s?xe.jsx(sT,{token:t,tokens:i,buttonState:a,isButtonDataLoaded:o,onToggle:g,onLogout:p}):xe.jsx(iT,{onLogin:d,onRegister:h,error:c,setError:v})]})]})}nT.createRoot(document.getElementById("root")).render(xe.jsx(KS.StrictMode,{children:xe.jsx(TN,{})}));
