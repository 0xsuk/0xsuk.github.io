

const pages = JSON.parse('[{"revision":"45130ec93c6a9d5754877bb849747372","url":"https://0xsuk.github.io/agitcms/bugs-and-questions/"},{"revision":"b05eb0183013a691b5bb1664bd4c133e","url":"https://0xsuk.github.io/agitcms/integrated-terminal/"},{"revision":"bd64d46512b46408ea4415b73ef44b7e","url":"https://0xsuk.github.io/agitcms/editor/"},{"revision":"08bb691b8f641f3b9e577417e3126033","url":"https://0xsuk.github.io/agitcms/configuration/"},{"revision":"d1ca5bb5953c50cd9fcf6ae384c4b99a","url":"https://0xsuk.github.io/agitcms/quick-start/"},{"revision":"6cd45ac285825b4ebbdd362a8f37551d","url":"https://0xsuk.github.io/agitcms/overview/"},{"revision":"bd234df41edb60bc0b658744378dbad9","url":"https://0xsuk.github.io/posts/2022-07-19-how-to-install-ch340-on-ubuntu-22.04/"},{"revision":1658216165,"url":"https://0xsuk.github.io/"},{"revision":"a74dbcb35ee06db2c5314e7ff0d9268f","url":"https://0xsuk.github.io/posts/"},{"revision":1658216165,"url":"https://0xsuk.github.io/agitcms/"},{"revision":1658216165,"url":"https://0xsuk.github.io/agitcms-v0.0.2-alpha/"},{"revision":"1a8452ec6f3ddad9e63150c7bd6a3e63","url":"https://0xsuk.github.io/categories/"},{"revision":"45ef9a3332d6fa42dcc9bec3c2be18ac","url":"https://0xsuk.github.io/agitcms-v0.0.2-alpha/how-to-use-agitcms/"},{"revision":1658216165,"url":"https://0xsuk.github.io/tags/react.js/"},{"revision":"7583ef16a0e1773b488dc60e944e0e59","url":"https://0xsuk.github.io/tags/"},{"revision":1658216165,"url":"https://0xsuk.github.io/categories/web-dev/"},{"revision":"e6baafad3c5856cc818f14aba81d427c","url":"https://0xsuk.github.io/posts/2022-03-25-build-your-own-markdown-editor-with-react.js-and-codemirror-6/"},{"revision":1658216165,"url":"https://0xsuk.github.io/tags/build-your-own-x/"},{"revision":"fc4a2ea59ed03b90c7563339d0216872","url":"https://0xsuk.github.io/posts/2022-02-11-creating-a-blog-with-hugo/"},{"revision":"8576ec274c98b3831668a172fa632d80","url":"https://0xsuk.github.io/about/"},{"revision":"68c608ad8e6e222c34de5d3f3282091f","url":"https://0xsuk.github.io/archives/"},{"revision":"f5cac2ff67c889ba3433e666ed02b05d","url":"https://0xsuk.github.io/_contact/"},{"revision":"99164aa93168970c88f60ddb5e9971aa","url":"https://0xsuk.github.io/offline/"},{"revision":"e70fff4f74e107cdcde5c9e2abcfc149","url":"https://0xsuk.github.io/search/"},{"revision":"861711179d6e82dbffb8ae916fa33174","url":"https://0xsuk.github.io/series/"},{"revision":1658216165,"url":"https://0xsuk.github.io/manifest.json"}]');
const assets = JSON.parse('[{"revision":null,"url":"https://0xsuk.github.io/css/main.min.239845ebcdf55d80533cc70a2fe96cc1a9d70410c9b478774bb3f19fc13eb4f5.css"},{"revision":null,"url":"https://0xsuk.github.io/js/main.63de5e46379791c474cfb750221ee20c6c2b8cfcf2d28b115e7197b95b2f910b.js"},{"revision":null,"url":"https://0xsuk.github.io/js/icons.min.8ddcaafc364ff0296c2209c5495287f0de039b852da9b24847f94c198b7639b6.js"},{"revision":"e7e30ba1518d5c7e41a4ba56813cad48","url":"/images/icons_archive/favicon.ico"},{"revision":"30f3e9c9333635244a529e1f8a278669","url":"/images/icons_archive/icon-144x144.png"},{"revision":"1e8e6dc66fd1f03f2f275d163e281b8c","url":"/images/icons_archive/icon-168x168.png"},{"revision":"5675e36f11a529bcbecb4e1fae90c416","url":"/images/icons_archive/icon-192x192.png"},{"revision":"8dd2e5f3978781fa5f222c21167ca2c6","url":"/images/icons_archive/icon-256x256.png"},{"revision":"ce9105554973230bbdbaf19bde9ee49f","url":"/images/icons_archive/icon-384x384.png"},{"revision":"8e287e09e7e234aac91f59d3272c3aaa","url":"/images/icons_archive/icon-48x48.png"},{"revision":"aca31f41b58d17e6de62ffd336e4f2b7","url":"/images/icons_archive/icon-512x512.png"},{"revision":"574cdfc8581837210bd85d4df5e44c73","url":"/images/icons_archive/icon-72x72.png"},{"revision":"c2b414b77255f6d67a985cf549a37def","url":"/images/icons_archive/icon-96x96.png"},{"revision":"2aadfa4e096b8e591bdccb77ec851550","url":"/images/logo.webp"},{"revision":"78cb0d82a37cd4aeac7b65556172622a","url":"/images/markdown.png"},{"revision":"a85b5d7f924494174be05d1238879f6d","url":"/images/profile.png"},{"revision":"afb8b1a69991f0665ef9be0410584531","url":"/images/profile.webp"},{"revision":"add64ebc5331a30372df599df3f203fa","url":"/images/reward/alipay.png"},{"revision":"49e2406a96cfe50f82a60b07f2f028f6","url":"/images/reward/wechat.png"},{"revision":"81d1ef9c2180622aebbe7845dd404165","url":"/images/shortcode.png"},{"revision":"7ff6a1b3b684de7105a47799b02c6e6d","url":"/uploads/2022-02-11-01-39-09.png"},{"revision":"806ad2c079ae0de43de8a8ab4b532643","url":"/uploads/2022-02-11-02-43-09.png"},{"revision":"3513fb993bf63c7d8567c691eeef9db4","url":"/uploads/2022-03-25-12-13-39.png"},{"revision":"7afd48c85f673e9cad4aca0ce329247e","url":"/uploads/2022-03-25-12-45-53.png"},{"revision":"8b9147b6b696cd2d1e7311f3613109bc","url":"/uploads/2022-06-29-19:53:03.png"},{"revision":"b4a0010dd1eb5dde8e6f90c8f444ea18","url":"/uploads/2022-07-03-16:21:07.png"},{"revision":"88417ff94fd4b4bc9cd01eeb65c9eafc","url":"/uploads/2022-07-03-16:38:13.png"},{"revision":"d61c3606ded1c876d9f5d66ed4457a7f","url":"/uploads/2022-07-03-16:50:25.png"},{"revision":"13319af2964064ccfbe8eedc7582f02c","url":"/uploads/2022-07-03-19:10:57.png"},{"revision":"960d5325504263c3334eccb46cd752bb","url":"/uploads/2022-07-03-19:13:27.png"},{"revision":"01ce31988bfb7d88c3cad2e9a0ebe12d","url":"/uploads/2022-07-19-16:33:46.png"},{"revision":"c44a5a4c7cb8f218100a59c5a5c2289a","url":"/uploads/2022-07-19-16:34:48.png"},{"revision":"36d790e309ce55262defe37aa9ff32af","url":"/uploads/agitcms.png"},{"revision":"8b9147b6b696cd2d1e7311f3613109bc","url":"/uploads/agitv1.0.0.png"},{"revision":"2b2c5961d924299883999fbfb92dd2fd","url":"/uploads/byome.gif"},{"revision":"dc7528c8976c87ddec061c8e06ab253d","url":"/uploads/byome_alpha.gif"},{"revision":"82d66a4d553277178f88d72033aadc6d","url":"/uploads/createnew.png"},{"revision":"ad0e01075c9babeb5116b823bb7bedfd","url":"/uploads/createnew.png:Zone.Identifier"},{"revision":"9df7c5b5664fb088c82f8cc044e79724","url":"/uploads/frontmatter_agitcms.png"},{"revision":"ad0e01075c9babeb5116b823bb7bedfd","url":"/uploads/frontmatter_agitcms.png:Zone.Identifier"},{"revision":"2268153fc2dac82dfaa8b7628d0ebc49","url":"/uploads/frontmatterv1.0.0.png"},{"revision":"556ed1daeb5ca94923d974f2cbf2e271","url":"/uploads/image.png"},{"revision":"deddd6723c6ff0d6119a4c6ce0aae444","url":"/uploads/img_2022-02-02_ultimate_minesweeper.png"},{"revision":"9eb2e0ee03807862df3380d294862bad","url":"/uploads/interv1.0.0.png"},{"revision":"828ee6eabf42d2bb9263e7b424564fbc","url":"/uploads/screenshot16.png"},{"revision":"e1b94773f9a87dcd131f676d67f9c6bc","url":"/uploads/world.png"},{"revision":"ad0e01075c9babeb5116b823bb7bedfd","url":"/uploads/スクリーンショット (16).png:Zone.Identifier"}]');
const multilingual = false;
const config = {
    version: 1658216165,
    multilingual: false,
    pages: pages,
    assets: assets
};

;
(()=>{"use strict";var e={895:()=>{try{self["workbox:cacheable-response:6.4.1"]&&_()}catch(e){}},913:()=>{try{self["workbox:core:6.4.1"]&&_()}catch(e){}},550:()=>{try{self["workbox:expiration:6.4.1"]&&_()}catch(e){}},977:()=>{try{self["workbox:precaching:6.4.1"]&&_()}catch(e){}},80:()=>{try{self["workbox:routing:6.4.1"]&&_()}catch(e){}},873:()=>{try{self["workbox:strategies:6.4.1"]&&_()}catch(e){}}},t={};function s(n){var a=t[n];if(void 0!==a)return a.exports;var r=t[n]={exports:{}};return e[n](r,r.exports,s),r.exports}(()=>{s(913);const e=(e,...t)=>{let s=e;return t.length>0&&(s+=` :: ${JSON.stringify(t)}`),s};class t extends Error{constructor(t,s){super(e(t,s)),this.name=t,this.details=s}}const n=new Set;const a={googleAnalytics:"googleAnalytics",precache:"precache-v2",prefix:"workbox",runtime:"runtime",suffix:"undefined"!=typeof registration?registration.scope:""},r=e=>[a.prefix,e,a.suffix].filter((e=>e&&e.length>0)).join("-"),i=e=>e||r(a.googleAnalytics),c=e=>e||r(a.precache),o=()=>a.prefix,h=e=>e||r(a.runtime),l=()=>a.suffix;function u(e,t){const s=new URL(e);for(const e of t)s.searchParams.delete(e);return s.href}let d;function f(e){e.then((()=>{}))}class p{constructor(){this.promise=new Promise(((e,t)=>{this.resolve=e,this.reject=t}))}}const g=e=>new URL(String(e),location.href).href.replace(new RegExp(`^${location.origin}`),"");function w(e,t){const s=t();return e.waitUntil(s),s}const m={get googleAnalytics(){return i()},get precache(){return c()},get prefix(){return o()},get runtime(){return h()},get suffix(){return l()}};async function y(e,s){let n=null;if(e.url){n=new URL(e.url).origin}if(n!==self.location.origin)throw new t("cross-origin-copy-response",{origin:n});const a=e.clone(),r={headers:new Headers(a.headers),status:a.status,statusText:a.statusText},i=s?s(r):r,c=function(){if(void 0===d){const e=new Response("");if("body"in e)try{new Response(e.body),d=!0}catch(e){d=!1}d=!1}return d}()?a.body:await a.blob();return new Response(c,i)}s(80);const _=e=>e&&"object"==typeof e?e:{handle:e};class v{constructor(e,t,s="GET"){this.handler=_(t),this.match=e,this.method=s}setCatchHandler(e){this.catchHandler=_(e)}}class b extends v{constructor(e,t,s){super((({url:t})=>{const s=e.exec(t.href);if(s&&(t.origin===location.origin||0===s.index))return s.slice(1)}),t,s)}}class R{constructor(){this._routes=new Map,this._defaultHandlerMap=new Map}get routes(){return this._routes}addFetchListener(){self.addEventListener("fetch",(e=>{const{request:t}=e,s=this.handleRequest({request:t,event:e});s&&e.respondWith(s)}))}addCacheListener(){self.addEventListener("message",(e=>{if(e.data&&"CACHE_URLS"===e.data.type){const{payload:t}=e.data;0;const s=Promise.all(t.urlsToCache.map((t=>{"string"==typeof t&&(t=[t]);const s=new Request(...t);return this.handleRequest({request:s,event:e})})));e.waitUntil(s),e.ports&&e.ports[0]&&s.then((()=>e.ports[0].postMessage(!0)))}}))}handleRequest({request:e,event:t}){const s=new URL(e.url,location.href);if(!s.protocol.startsWith("http"))return void 0;const n=s.origin===location.origin,{params:a,route:r}=this.findMatchingRoute({event:t,request:e,sameOrigin:n,url:s});let i=r&&r.handler;const c=e.method;if(!i&&this._defaultHandlerMap.has(c)&&(i=this._defaultHandlerMap.get(c)),!i)return void 0;let o;try{o=i.handle({url:s,request:e,event:t,params:a})}catch(e){o=Promise.reject(e)}const h=r&&r.catchHandler;return o instanceof Promise&&(this._catchHandler||h)&&(o=o.catch((async n=>{if(h){0;try{return await h.handle({url:s,request:e,event:t,params:a})}catch(e){e instanceof Error&&(n=e)}}if(this._catchHandler)return this._catchHandler.handle({url:s,request:e,event:t});throw n}))),o}findMatchingRoute({url:e,sameOrigin:t,request:s,event:n}){const a=this._routes.get(s.method)||[];for(const r of a){let a;const i=r.match({url:e,sameOrigin:t,request:s,event:n});if(i)return a=i,(Array.isArray(a)&&0===a.length||i.constructor===Object&&0===Object.keys(i).length||"boolean"==typeof i)&&(a=void 0),{route:r,params:a}}return{}}setDefaultHandler(e,t="GET"){this._defaultHandlerMap.set(t,_(e))}setCatchHandler(e){this._catchHandler=_(e)}registerRoute(e){this._routes.has(e.method)||this._routes.set(e.method,[]),this._routes.get(e.method).push(e)}unregisterRoute(e){if(!this._routes.has(e.method))throw new t("unregister-route-but-not-found-with-method",{method:e.method});const s=this._routes.get(e.method).indexOf(e);if(!(s>-1))throw new t("unregister-route-route-not-registered");this._routes.get(e.method).splice(s,1)}}let x;const C=()=>(x||(x=new R,x.addFetchListener(),x.addCacheListener()),x);function L(e,s,n){let a;if("string"==typeof e){const t=new URL(e,location.href);0;a=new v((({url:e})=>e.href===t.href),s,n)}else if(e instanceof RegExp)a=new b(e,s,n);else if("function"==typeof e)a=new v(e,s,n);else{if(!(e instanceof v))throw new t("unsupported-route-type",{moduleName:"workbox-routing",funcName:"registerRoute",paramName:"capture"});a=e}return C().registerRoute(a),a}s(873);function E(e){return"string"==typeof e?new Request(e):e}class q{constructor(e,t){this._cacheKeys={},Object.assign(this,t),this.event=t.event,this._strategy=e,this._handlerDeferred=new p,this._extendLifetimePromises=[],this._plugins=[...e.plugins],this._pluginStateMap=new Map;for(const e of this._plugins)this._pluginStateMap.set(e,{});this.event.waitUntil(this._handlerDeferred.promise)}async fetch(e){const{event:s}=this;let n=E(e);if("navigate"===n.mode&&s instanceof FetchEvent&&s.preloadResponse){const e=await s.preloadResponse;if(e)return e}const a=this.hasCallback("fetchDidFail")?n.clone():null;try{for(const e of this.iterateCallbacks("requestWillFetch"))n=await e({request:n.clone(),event:s})}catch(e){if(e instanceof Error)throw new t("plugin-error-request-will-fetch",{thrownErrorMessage:e.message})}const r=n.clone();try{let e;e=await fetch(n,"navigate"===n.mode?void 0:this._strategy.fetchOptions);for(const t of this.iterateCallbacks("fetchDidSucceed"))e=await t({event:s,request:r,response:e});return e}catch(e){throw a&&await this.runCallbacks("fetchDidFail",{error:e,event:s,originalRequest:a.clone(),request:r.clone()}),e}}async fetchAndCachePut(e){const t=await this.fetch(e),s=t.clone();return this.waitUntil(this.cachePut(e,s)),t}async cacheMatch(e){const t=E(e);let s;const{cacheName:n,matchOptions:a}=this._strategy,r=await this.getCacheKey(t,"read"),i=Object.assign(Object.assign({},a),{cacheName:n});s=await caches.match(r,i);for(const e of this.iterateCallbacks("cachedResponseWillBeUsed"))s=await e({cacheName:n,matchOptions:a,cachedResponse:s,request:r,event:this.event})||void 0;return s}async cachePut(e,s){const a=E(e);var r;await(r=0,new Promise((e=>setTimeout(e,r))));const i=await this.getCacheKey(a,"write");if(!s)throw new t("cache-put-with-no-response",{url:g(i.url)});const c=await this._ensureResponseSafeToCache(s);if(!c)return!1;const{cacheName:o,matchOptions:h}=this._strategy,l=await self.caches.open(o),d=this.hasCallback("cacheDidUpdate"),f=d?await async function(e,t,s,n){const a=u(t.url,s);if(t.url===a)return e.match(t,n);const r=Object.assign(Object.assign({},n),{ignoreSearch:!0}),i=await e.keys(t,r);for(const t of i)if(a===u(t.url,s))return e.match(t,n)}(l,i.clone(),["__WB_REVISION__"],h):null;try{await l.put(i,d?c.clone():c)}catch(e){if(e instanceof Error)throw"QuotaExceededError"===e.name&&await async function(){for(const e of n)await e()}(),e}for(const e of this.iterateCallbacks("cacheDidUpdate"))await e({cacheName:o,oldResponse:f,newResponse:c.clone(),request:i,event:this.event});return!0}async getCacheKey(e,t){const s=`${e.url} | ${t}`;if(!this._cacheKeys[s]){let n=e;for(const e of this.iterateCallbacks("cacheKeyWillBeUsed"))n=E(await e({mode:t,request:n,event:this.event,params:this.params}));this._cacheKeys[s]=n}return this._cacheKeys[s]}hasCallback(e){for(const t of this._strategy.plugins)if(e in t)return!0;return!1}async runCallbacks(e,t){for(const s of this.iterateCallbacks(e))await s(t)}*iterateCallbacks(e){for(const t of this._strategy.plugins)if("function"==typeof t[e]){const s=this._pluginStateMap.get(t),n=n=>{const a=Object.assign(Object.assign({},n),{state:s});return t[e](a)};yield n}}waitUntil(e){return this._extendLifetimePromises.push(e),e}async doneWaiting(){let e;for(;e=this._extendLifetimePromises.shift();)await e}destroy(){this._handlerDeferred.resolve(null)}async _ensureResponseSafeToCache(e){let t=e,s=!1;for(const e of this.iterateCallbacks("cacheWillUpdate"))if(t=await e({request:this.request,response:t,event:this.event})||void 0,s=!0,!t)break;return s||t&&200!==t.status&&(t=void 0),t}}class U{constructor(e={}){this.cacheName=h(e.cacheName),this.plugins=e.plugins||[],this.fetchOptions=e.fetchOptions,this.matchOptions=e.matchOptions}handle(e){const[t]=this.handleAll(e);return t}handleAll(e){e instanceof FetchEvent&&(e={event:e,request:e.request});const t=e.event,s="string"==typeof e.request?new Request(e.request):e.request,n="params"in e?e.params:void 0,a=new q(this,{event:t,request:s,params:n}),r=this._getResponse(a,s,t);return[r,this._awaitComplete(r,a,s,t)]}async _getResponse(e,s,n){let a;await e.runCallbacks("handlerWillStart",{event:n,request:s});try{if(a=await this._handle(s,e),!a||"error"===a.type)throw new t("no-response",{url:s.url})}catch(t){if(t instanceof Error)for(const r of e.iterateCallbacks("handlerDidError"))if(a=await r({error:t,event:n,request:s}),a)break;if(!a)throw t}for(const t of e.iterateCallbacks("handlerWillRespond"))a=await t({event:n,request:s,response:a});return a}async _awaitComplete(e,t,s,n){let a,r;try{a=await e}catch(r){}try{await t.runCallbacks("handlerDidRespond",{event:n,request:s,response:a}),await t.doneWaiting()}catch(e){e instanceof Error&&(r=e)}if(await t.runCallbacks("handlerDidComplete",{event:n,request:s,response:a,error:r}),t.destroy(),r)throw r}}class D extends U{async _handle(e,s){let n,a=await s.cacheMatch(e);if(a)0;else{0;try{a=await s.fetchAndCachePut(e)}catch(e){e instanceof Error&&(n=e)}0}if(!a)throw new t("no-response",{url:e.url,error:n});return a}}const k={cacheWillUpdate:async({response:e})=>200===e.status||0===e.status?e:null};s(895);class N{constructor(e={}){this._statuses=e.statuses,this._headers=e.headers}isResponseCacheable(e){let t=!0;return this._statuses&&(t=this._statuses.includes(e.status)),this._headers&&t&&(t=Object.keys(this._headers).some((t=>e.headers.get(t)===this._headers[t]))),t}}class T{constructor(e){this.cacheWillUpdate=async({response:e})=>this._cacheableResponse.isResponseCacheable(e)?e:null,this._cacheableResponse=new N(e)}}let I,K;const P=new WeakMap,M=new WeakMap,A=new WeakMap,O=new WeakMap,S=new WeakMap;let W={get(e,t,s){if(e instanceof IDBTransaction){if("done"===t)return M.get(e);if("objectStoreNames"===t)return e.objectStoreNames||A.get(e);if("store"===t)return s.objectStoreNames[1]?void 0:s.objectStore(s.objectStoreNames[0])}return H(e[t])},set:(e,t,s)=>(e[t]=s,!0),has:(e,t)=>e instanceof IDBTransaction&&("done"===t||"store"===t)||t in e};function B(e){return e!==IDBDatabase.prototype.transaction||"objectStoreNames"in IDBTransaction.prototype?(K||(K=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])).includes(e)?function(...t){return e.apply(F(this),t),H(P.get(this))}:function(...t){return H(e.apply(F(this),t))}:function(t,...s){const n=e.call(F(this),t,...s);return A.set(n,t.sort?t.sort():[t]),H(n)}}function j(e){return"function"==typeof e?B(e):(e instanceof IDBTransaction&&function(e){if(M.has(e))return;const t=new Promise(((t,s)=>{const n=()=>{e.removeEventListener("complete",a),e.removeEventListener("error",r),e.removeEventListener("abort",r)},a=()=>{t(),n()},r=()=>{s(e.error||new DOMException("AbortError","AbortError")),n()};e.addEventListener("complete",a),e.addEventListener("error",r),e.addEventListener("abort",r)}));M.set(e,t)}(e),t=e,(I||(I=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])).some((e=>t instanceof e))?new Proxy(e,W):e);var t}function H(e){if(e instanceof IDBRequest)return function(e){const t=new Promise(((t,s)=>{const n=()=>{e.removeEventListener("success",a),e.removeEventListener("error",r)},a=()=>{t(H(e.result)),n()},r=()=>{s(e.error),n()};e.addEventListener("success",a),e.addEventListener("error",r)}));return t.then((t=>{t instanceof IDBCursor&&P.set(t,e)})).catch((()=>{})),S.set(t,e),t}(e);if(O.has(e))return O.get(e);const t=j(e);return t!==e&&(O.set(e,t),S.set(t,e)),t}const F=e=>S.get(e);const $=["get","getKey","getAll","getAllKeys","count"],V=["put","add","delete","clear"],G=new Map;function Q(e,t){if(!(e instanceof IDBDatabase)||t in e||"string"!=typeof t)return;if(G.get(t))return G.get(t);const s=t.replace(/FromIndex$/,""),n=t!==s,a=V.includes(s);if(!(s in(n?IDBIndex:IDBObjectStore).prototype)||!a&&!$.includes(s))return;const r=async function(e,...t){const r=this.transaction(e,a?"readwrite":"readonly");let i=r.store;return n&&(i=i.index(t.shift())),(await Promise.all([i[s](...t),a&&r.done]))[0]};return G.set(t,r),r}W=(e=>({...e,get:(t,s,n)=>Q(t,s)||e.get(t,s,n),has:(t,s)=>!!Q(t,s)||e.has(t,s)}))(W);s(550);const J="cache-entries",z=e=>{const t=new URL(e,location.href);return t.hash="",t.href};class X{constructor(e){this._db=null,this._cacheName=e}_upgradeDb(e){const t=e.createObjectStore(J,{keyPath:"id"});t.createIndex("cacheName","cacheName",{unique:!1}),t.createIndex("timestamp","timestamp",{unique:!1})}_upgradeDbAndDeleteOldDbs(e){this._upgradeDb(e),this._cacheName&&function(e,{blocked:t}={}){const s=indexedDB.deleteDatabase(e);t&&s.addEventListener("blocked",(()=>t())),H(s).then((()=>{}))}(this._cacheName)}async setTimestamp(e,t){const s={url:e=z(e),timestamp:t,cacheName:this._cacheName,id:this._getId(e)},n=(await this.getDb()).transaction(J,"readwrite",{durability:"relaxed"});await n.store.put(s),await n.done}async getTimestamp(e){const t=await this.getDb(),s=await t.get(J,this._getId(e));return null==s?void 0:s.timestamp}async expireEntries(e,t){const s=await this.getDb();let n=await s.transaction(J).store.index("timestamp").openCursor(null,"prev");const a=[];let r=0;for(;n;){const s=n.value;s.cacheName===this._cacheName&&(e&&s.timestamp<e||t&&r>=t?a.push(n.value):r++),n=await n.continue()}const i=[];for(const e of a)await s.delete(J,e.id),i.push(e.url);return i}_getId(e){return this._cacheName+"|"+z(e)}async getDb(){return this._db||(this._db=await function(e,t,{blocked:s,upgrade:n,blocking:a,terminated:r}={}){const i=indexedDB.open(e,t),c=H(i);return n&&i.addEventListener("upgradeneeded",(e=>{n(H(i.result),e.oldVersion,e.newVersion,H(i.transaction))})),s&&i.addEventListener("blocked",(()=>s())),c.then((e=>{r&&e.addEventListener("close",(()=>r())),a&&e.addEventListener("versionchange",(()=>a()))})).catch((()=>{})),c}("workbox-expiration",1,{upgrade:this._upgradeDbAndDeleteOldDbs.bind(this)})),this._db}}class Y{constructor(e,t={}){this._isRunning=!1,this._rerunRequested=!1,this._maxEntries=t.maxEntries,this._maxAgeSeconds=t.maxAgeSeconds,this._matchOptions=t.matchOptions,this._cacheName=e,this._timestampModel=new X(e)}async expireEntries(){if(this._isRunning)return void(this._rerunRequested=!0);this._isRunning=!0;const e=this._maxAgeSeconds?Date.now()-1e3*this._maxAgeSeconds:0,t=await this._timestampModel.expireEntries(e,this._maxEntries),s=await self.caches.open(this._cacheName);for(const e of t)await s.delete(e,this._matchOptions);this._isRunning=!1,this._rerunRequested&&(this._rerunRequested=!1,f(this.expireEntries()))}async updateTimestamp(e){await this._timestampModel.setTimestamp(e,Date.now())}async isURLExpired(e){if(this._maxAgeSeconds){const t=await this._timestampModel.getTimestamp(e),s=Date.now()-1e3*this._maxAgeSeconds;return void 0===t||t<s}return!1}async delete(){this._rerunRequested=!1,await this._timestampModel.expireEntries(1/0)}}s(977);function Z(e){if(!e)throw new t("add-to-cache-list-unexpected-type",{entry:e});if("string"==typeof e){const t=new URL(e,location.href);return{cacheKey:t.href,url:t.href}}const{revision:s,url:n}=e;if(!n)throw new t("add-to-cache-list-unexpected-type",{entry:e});if(!s){const e=new URL(n,location.href);return{cacheKey:e.href,url:e.href}}const a=new URL(n,location.href),r=new URL(n,location.href);return a.searchParams.set("__WB_REVISION__",s),{cacheKey:a.href,url:r.href}}class ee{constructor(){this.updatedURLs=[],this.notUpdatedURLs=[],this.handlerWillStart=async({request:e,state:t})=>{t&&(t.originalRequest=e)},this.cachedResponseWillBeUsed=async({event:e,state:t,cachedResponse:s})=>{if("install"===e.type&&t&&t.originalRequest&&t.originalRequest instanceof Request){const e=t.originalRequest.url;s?this.notUpdatedURLs.push(e):this.updatedURLs.push(e)}return s}}}class te{constructor({precacheController:e}){this.cacheKeyWillBeUsed=async({request:e,params:t})=>{const s=(null==t?void 0:t.cacheKey)||this._precacheController.getCacheKeyForURL(e.url);return s?new Request(s,{headers:e.headers}):e},this._precacheController=e}}class se extends U{constructor(e={}){e.cacheName=c(e.cacheName),super(e),this._fallbackToNetwork=!1!==e.fallbackToNetwork,this.plugins.push(se.copyRedirectedCacheableResponsesPlugin)}async _handle(e,t){const s=await t.cacheMatch(e);return s||(t.event&&"install"===t.event.type?await this._handleInstall(e,t):await this._handleFetch(e,t))}async _handleFetch(e,s){let n;const a=s.params||{};if(!this._fallbackToNetwork)throw new t("missing-precache-entry",{cacheName:this.cacheName,url:e.url});{0;const t=a.integrity,r=e.integrity,i=!r||r===t;if(n=await s.fetch(new Request(e,{integrity:r||t})),t&&i){this._useDefaultCacheabilityPluginIfNeeded();await s.cachePut(e,n.clone());0}}return n}async _handleInstall(e,s){this._useDefaultCacheabilityPluginIfNeeded();const n=await s.fetch(e);if(!await s.cachePut(e,n.clone()))throw new t("bad-precaching-response",{url:e.url,status:n.status});return n}_useDefaultCacheabilityPluginIfNeeded(){let e=null,t=0;for(const[s,n]of this.plugins.entries())n!==se.copyRedirectedCacheableResponsesPlugin&&(n===se.defaultPrecacheCacheabilityPlugin&&(e=s),n.cacheWillUpdate&&t++);0===t?this.plugins.push(se.defaultPrecacheCacheabilityPlugin):t>1&&null!==e&&this.plugins.splice(e,1)}}se.defaultPrecacheCacheabilityPlugin={cacheWillUpdate:async({response:e})=>!e||e.status>=400?null:e},se.copyRedirectedCacheableResponsesPlugin={cacheWillUpdate:async({response:e})=>e.redirected?await y(e):e};class ne{constructor({cacheName:e,plugins:t=[],fallbackToNetwork:s=!0}={}){this._urlsToCacheKeys=new Map,this._urlsToCacheModes=new Map,this._cacheKeysToIntegrities=new Map,this._strategy=new se({cacheName:c(e),plugins:[...t,new te({precacheController:this})],fallbackToNetwork:s}),this.install=this.install.bind(this),this.activate=this.activate.bind(this)}get strategy(){return this._strategy}precache(e){this.addToCacheList(e),this._installAndActiveListenersAdded||(self.addEventListener("install",this.install),self.addEventListener("activate",this.activate),this._installAndActiveListenersAdded=!0)}addToCacheList(e){const s=[];for(const n of e){"string"==typeof n?s.push(n):n&&void 0===n.revision&&s.push(n.url);const{cacheKey:e,url:a}=Z(n),r="string"!=typeof n&&n.revision?"reload":"default";if(this._urlsToCacheKeys.has(a)&&this._urlsToCacheKeys.get(a)!==e)throw new t("add-to-cache-list-conflicting-entries",{firstEntry:this._urlsToCacheKeys.get(a),secondEntry:e});if("string"!=typeof n&&n.integrity){if(this._cacheKeysToIntegrities.has(e)&&this._cacheKeysToIntegrities.get(e)!==n.integrity)throw new t("add-to-cache-list-conflicting-integrities",{url:a});this._cacheKeysToIntegrities.set(e,n.integrity)}if(this._urlsToCacheKeys.set(a,e),this._urlsToCacheModes.set(a,r),s.length>0){const e=`Workbox is precaching URLs without revision info: ${s.join(", ")}\nThis is generally NOT safe. Learn more at https://bit.ly/wb-precache`;console.warn(e)}}}install(e){return w(e,(async()=>{const t=new ee;this.strategy.plugins.push(t);for(const[t,s]of this._urlsToCacheKeys){const n=this._cacheKeysToIntegrities.get(s),a=this._urlsToCacheModes.get(t),r=new Request(t,{integrity:n,cache:a,credentials:"same-origin"});await Promise.all(this.strategy.handleAll({params:{cacheKey:s},request:r,event:e}))}const{updatedURLs:s,notUpdatedURLs:n}=t;return{updatedURLs:s,notUpdatedURLs:n}}))}activate(e){return w(e,(async()=>{const e=await self.caches.open(this.strategy.cacheName),t=await e.keys(),s=new Set(this._urlsToCacheKeys.values()),n=[];for(const a of t)s.has(a.url)||(await e.delete(a),n.push(a.url));return{deletedURLs:n}}))}getURLsToCacheKeys(){return this._urlsToCacheKeys}getCachedURLs(){return[...this._urlsToCacheKeys.keys()]}getCacheKeyForURL(e){const t=new URL(e,location.href);return this._urlsToCacheKeys.get(t.href)}getIntegrityForCacheKey(e){return this._cacheKeysToIntegrities.get(e)}async matchPrecache(e){const t=e instanceof Request?e.url:e,s=this.getCacheKeyForURL(t);if(s){return(await self.caches.open(this.strategy.cacheName)).match(s)}}createHandlerBoundToURL(e){const s=this.getCacheKeyForURL(e);if(!s)throw new t("non-precached-url",{url:e});return t=>(t.request=new Request(e),t.params=Object.assign({cacheKey:s},t.params),this.strategy.handle(t))}}let ae;const re=()=>(ae||(ae=new ne),ae);class ie extends v{constructor(e,t){super((({request:s})=>{const n=e.getURLsToCacheKeys();for(const a of function*(e,{ignoreURLParametersMatching:t=[/^utm_/,/^fbclid$/],directoryIndex:s="index.html",cleanURLs:n=!0,urlManipulation:a}={}){const r=new URL(e,location.href);r.hash="",yield r.href;const i=function(e,t=[]){for(const s of[...e.searchParams.keys()])t.some((e=>e.test(s)))&&e.searchParams.delete(s);return e}(r,t);if(yield i.href,s&&i.pathname.endsWith("/")){const e=new URL(i.href);e.pathname+=s,yield e.href}if(n){const e=new URL(i.href);e.pathname+=".html",yield e.href}if(a){const e=a({url:r});for(const t of e)yield t.href}}(s.url,t)){const t=n.get(a);if(t){return{cacheKey:t,integrity:e.getIntegrityForCacheKey(t)}}}}),e.strategy)}}function ce(e){return re().matchPrecache(e)}function oe(e,t){!function(e){re().precache(e)}(e),function(e){const t=re();L(new ie(t,e))}(t)}var he,le=function(e,t,s,n){return new(s||(s=Promise))((function(a,r){function i(e){try{o(n.next(e))}catch(e){r(e)}}function c(e){try{o(n.throw(e))}catch(e){r(e)}}function o(e){var t;e.done?a(e.value):(t=e.value,t instanceof s?t:new s((function(e){e(t)}))).then(i,c)}o((n=n.apply(e,t||[])).next())}))};self.addEventListener("activate",(()=>self.clients.claim())),self.addEventListener("install",(function(e){self.skipWaiting()})),self.addEventListener("activate",(e=>{const t=c();e.waitUntil((async(e,t="-precache-")=>{const s=(await self.caches.keys()).filter((s=>s.includes(t)&&s.includes(self.registration.scope)&&s!==e));return await Promise.all(s.map((e=>self.caches.delete(e)))),s})(t).then((e=>{})))})),he=({request:e})=>le(void 0,void 0,void 0,(function*(){if("document"===e.destination){if(config.multilingual){var t="";const s=new URL(e.url).pathname.split("/");return s.length>1&&(t="/"+s[1]+"/"),ce(t+"offline/")}return ce("/offline/")}return Response.error()})),C().setCatchHandler(he),L((({request:e})=>"navigate"===e.mode),new class extends U{constructor(e={}){super(e),this.plugins.some((e=>"cacheWillUpdate"in e))||this.plugins.unshift(k)}async _handle(e,s){const n=s.fetchAndCachePut(e).catch((()=>{}));let a,r=await s.cacheMatch(e);if(r)0;else{0;try{r=await n}catch(e){e instanceof Error&&(a=e)}}if(!r)throw new t("no-response",{url:e.url,error:a});return r}}({cacheName:m.precache,plugins:[new T({statuses:[200]})]})),L((({request:e})=>"style"===e.destination||"script"===e.destination||"worker"===e.destination),new D({cacheName:m.precache,plugins:[new T({statuses:[200]})]})),L((({request:e})=>"image"===e.destination),new D({cacheName:m.precache,plugins:[new T({statuses:[200]}),new class{constructor(e={}){this.cachedResponseWillBeUsed=async({event:e,request:t,cacheName:s,cachedResponse:n})=>{if(!n)return null;const a=this._isResponseDateFresh(n),r=this._getCacheExpiration(s);f(r.expireEntries());const i=r.updateTimestamp(t.url);if(e)try{e.waitUntil(i)}catch(e){0}return a?n:null},this.cacheDidUpdate=async({cacheName:e,request:t})=>{const s=this._getCacheExpiration(e);await s.updateTimestamp(t.url),await s.expireEntries()},this._config=e,this._maxAgeSeconds=e.maxAgeSeconds,this._cacheExpirations=new Map,e.purgeOnQuotaError&&function(e){n.add(e)}((()=>this.deleteCacheAndMetadata()))}_getCacheExpiration(e){if(e===h())throw new t("expire-custom-caches-only");let s=this._cacheExpirations.get(e);return s||(s=new Y(e,this._config),this._cacheExpirations.set(e,s)),s}_isResponseDateFresh(e){if(!this._maxAgeSeconds)return!0;const t=this._getDateHeaderTimestamp(e);if(null===t)return!0;return t>=Date.now()-1e3*this._maxAgeSeconds}_getDateHeaderTimestamp(e){if(!e.headers.has("date"))return null;const t=e.headers.get("date"),s=new Date(t).getTime();return isNaN(s)?null:s}async deleteCacheAndMetadata(){for(const[e,t]of this._cacheExpirations)await self.caches.delete(e),await t.delete();this._cacheExpirations=new Map}}({maxEntries:50,maxAgeSeconds:2592e3})]})),oe(config.pages),oe(config.assets)})()})();