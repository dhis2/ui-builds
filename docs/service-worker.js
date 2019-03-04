"use strict";var precacheConfig=[["./index.html","1a5ba8682563b734bd9eba20a26242fd"],["./static/css/main.7883b5e9.css","1da6fd57b1f42e58661dc68e526c87cc"],["./static/js/main.037b4e43.js","3e3f729e92dabb00384e656cc20527f3"],["./static/media/MaterialIcons-Regular.586090b3.ttf","586090b38a233ce0201fb221eb117a36"],["./static/media/MaterialIcons-Regular.9219a80f.woff","9219a80f0478e0bfdee5f4c753ce8535"],["./static/media/MaterialIcons-Regular.b661c28b.eot","b661c28b0f28606a96722ad2d9588b70"],["./static/media/MaterialIcons-Regular.bca3a187.woff2","bca3a1873ac988faff0817eca96b2d86"],["./static/media/roboto-latin-100.987b8457.woff2","987b84570ea69ee660455b8d5e91f5f1"],["./static/media/roboto-latin-100.e9dbbe8a.woff","e9dbbe8a693dd275c16d32feb101f1c1"],["./static/media/roboto-latin-100italic.6232f43d.woff2","6232f43d15b0e7a0bf0fe82e295bdd06"],["./static/media/roboto-latin-100italic.d704bb3d.woff","d704bb3d579b7d5e40880c75705c8a71"],["./static/media/roboto-latin-300.55536c8e.woff2","55536c8e9e9a532651e3cf374f290ea3"],["./static/media/roboto-latin-300.a1471d1d.woff","a1471d1d6431c893582a5f6a250db3f9"],["./static/media/roboto-latin-300italic.210a7c78.woff","210a7c781f5a354a0e4985656ab456d9"],["./static/media/roboto-latin-300italic.d69924b9.woff2","d69924b98acd849cdeba9fbff3f88ea6"],["./static/media/roboto-latin-400.5d4aeb4e.woff2","5d4aeb4e5f5ef754e307d7ffaef688bd"],["./static/media/roboto-latin-400.bafb105b.woff","bafb105baeb22d965c70fe52ba6b49d9"],["./static/media/roboto-latin-400italic.9680d5a0.woff","9680d5a0c32d2fd084e07bbc4c8b2923"],["./static/media/roboto-latin-400italic.d8bcbe72.woff2","d8bcbe724fd6f4ba44d0ee6a2675890f"],["./static/media/roboto-latin-500.28546717.woff2","285467176f7fe6bb6a9c6873b3dad2cc"],["./static/media/roboto-latin-500.de8b7431.woff","de8b7431b74642e830af4d4f4b513ec9"],["./static/media/roboto-latin-500italic.510dec37.woff2","510dec37fa69fba39593e01a469ee018"],["./static/media/roboto-latin-500italic.ffcc050b.woff","ffcc050b2d92d4b14a4fcb527ee0bcc8"],["./static/media/roboto-latin-700.037d8304.woff2","037d830416495def72b7881024c14b7b"],["./static/media/roboto-latin-700.cf6613d1.woff","cf6613d1adf490972c557a8e318e0868"],["./static/media/roboto-latin-700italic.010c1aee.woff2","010c1aeee3c6d1cbb1d5761d80353823"],["./static/media/roboto-latin-700italic.846d1890.woff","846d1890aee87fde5d8ced8eba360c3a"],["./static/media/roboto-latin-900.19b7a0ad.woff2","19b7a0adfdd4f808b53af7e2ce2ad4e5"],["./static/media/roboto-latin-900.8c2ade50.woff","8c2ade503b34e31430d6c98aa29a52a3"],["./static/media/roboto-latin-900italic.7b770d6c.woff2","7b770d6c53423deb1a8e49d3c9175184"],["./static/media/roboto-latin-900italic.bc833e72.woff","bc833e725c137257c2c42a789845d82f"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var a=new URL(e);return"/"===a.pathname.slice(-1)&&(a.pathname+=t),a.toString()},cleanResponse=function(t){return t.redirected?("body"in t?Promise.resolve(t.body):t.blob()).then(function(e){return new Response(e,{headers:t.headers,status:t.status,statusText:t.statusText})}):Promise.resolve(t)},createCacheKey=function(e,t,a,c){var i=new URL(e);return c&&i.pathname.match(c)||(i.search+=(i.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(a)),i.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var a=new URL(t).pathname;return e.some(function(e){return a.match(e)})},stripIgnoredUrlParameters=function(e,a){var t=new URL(e);return t.hash="",t.search=t.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(t){return a.every(function(e){return!e.test(t[0])})}).map(function(e){return e.join("=")}).join("&"),t.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],a=e[1],c=new URL(t,self.location),i=createCacheKey(c,hashParamName,a,/\.\w{8}\./);return[c.toString(),i]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(c){return setOfCachedUrls(c).then(function(a){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(t){if(!a.has(t)){var e=new Request(t,{credentials:"same-origin"});return fetch(e).then(function(e){if(!e.ok)throw new Error("Request for "+t+" returned a response with status "+e.status);return cleanResponse(e).then(function(e){return c.put(t,e)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var a=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(t){return t.keys().then(function(e){return Promise.all(e.map(function(e){if(!a.has(e.url))return t.delete(e)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(t){if("GET"===t.request.method){var e,a=stripIgnoredUrlParameters(t.request.url,ignoreUrlParametersMatching),c="index.html";(e=urlsToCacheKeys.has(a))||(a=addDirectoryIndex(a,c),e=urlsToCacheKeys.has(a));var i="./index.html";!e&&"navigate"===t.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],t.request.url)&&(a=new URL(i,self.location).toString(),e=urlsToCacheKeys.has(a)),e&&t.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(a)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(e){return console.warn('Couldn\'t serve response for "%s" from cache: %O',t.request.url,e),fetch(t.request)}))}});