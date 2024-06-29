/*! For license information please see 495-d214134890c81ba85125.js.LICENSE.txt */
(self.webpackChunk_h4ad_portfolio=self.webpackChunk_h4ad_portfolio||[]).push([[495],{7495:function(t,e,r){"use strict";function n(t,e,r,n,o,i,a){try{var c=t[i](a),u=c.value}catch(t){return void r(t)}c.done?e(u):Promise.resolve(u).then(n,o)}r.r(e),r.d(e,{renderImageToString:function(){return y},swapPlaceholderImage:function(){return v}});var o,i=r(4756),a=r.n(i),c=r(978),u=r(6540),l=r(5848),s=(r(5147),new WeakMap),f=navigator.connection||navigator.mozConnection||navigator.webkitConnection,h=["image","loading","isLoading","isLoaded","imgClassName","imgStyle","objectPosition","backgroundColor","objectFit"];function p(t,e){t.style.opacity="1",e&&(e.style.opacity="0")}function d(t,e,r,n,o,i){var a=t.querySelector("[data-main-image]"),c=t.querySelector("[data-placeholder-image]"),u=r.has(e);function l(t){var e=this;this.removeEventListener("load",l);var r=t.currentTarget,n=new Image;n.src=r.currentSrc,n.decode?n.decode().then((function(){p(e,c),null==o||o({wasCached:u})})).catch((function(t){p(e,c),null==i||i(t)})):(p(this,c),null==o||o({wasCached:u}))}return a.addEventListener("load",l),null==n||n({wasCached:u}),Array.from(a.parentElement.children).forEach((function(t){var e=t.getAttribute("data-src"),r=t.getAttribute("data-srcset");e&&(t.removeAttribute("data-src"),t.setAttribute("src",e)),r&&(t.removeAttribute("data-srcset"),t.setAttribute("srcset",r))})),r.add(e),a.complete&&l.call(a,{currentTarget:a}),function(){a&&a.removeEventListener("load",l)}}function v(t,e,i,u,l,h,p){if(!(0,c.h)()){var v,y,g,m=(x=function(){v=d(t,e,i,l,h,p)},"IntersectionObserver"in window?(o||(o=new IntersectionObserver((function(t){t.forEach((function(t){var e;t.isIntersecting&&(null==(e=s.get(t.target))||e(),s.delete(t.target))}))}),{rootMargin:"4g"!==(null==f?void 0:f.effectiveType)||null!=f&&f.saveData?"2500px":"1250px"})),function(t){return s.set(t,x),o.observe(t),function(){o&&t&&(s.delete(t),o.unobserve(t))}}):function(){return x(),function(){}}),b=m(t);return"objectFit"in document.documentElement.style||(t.dataset.objectFit=null!=(y=u.objectFit)?y:"cover",t.dataset.objectPosition=""+(null!=(g=u.objectPosition)?g:"50% 50%"),(w=function(t){return function(){var e=this,r=arguments;return new Promise((function(o,i){var a=t.apply(e,r);function c(t){n(a,o,i,c,u,"next",t)}function u(t){n(a,o,i,c,u,"throw",t)}c(void 0)}))}}(a().mark((function t(e){return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(t.t0="objectFitPolyfill"in window,t.t0){t.next=4;break}return t.next=4,r.e(579).then(r.t.bind(r,579,23));case 4:window.objectFitPolyfill(e);case 5:case"end":return t.stop()}}),t)}))),function(t){return w.apply(this,arguments)})(t)),function(){v&&v(),b()}}var w,x;return d(t,e,i,l,h,p)}function y(t){var e=t.image,r=t.loading,n=void 0===r?"lazy":r,o=t.isLoading,i=t.isLoaded,a=t.imgClassName,s=t.imgStyle,f=void 0===s?{}:s,p=t.objectPosition,d=t.backgroundColor,v=t.objectFit,y=void 0===v?"cover":v,g=(0,c._)(t,h),m=e.width,b=e.height,w=e.layout,x=e.images,L=e.placeholder,E=e.backgroundColor;return f=(0,c.a)({objectFit:y,objectPosition:p,backgroundColor:d},f),(0,l.renderToStaticMarkup)(u.createElement(c.L,{layout:w,width:m,height:b},u.createElement(c.P,(0,c.a)({},(0,c.g)(L,i,w,m,b,E,y,p))),u.createElement(c.M,(0,c.a)({},g,{width:m,height:b,className:a},(0,c.b)(o,i,x,n,f)))))}},4633:function(t,e,r){var n=r(3738).default;function o(){"use strict";t.exports=o=function(){return r},t.exports.__esModule=!0,t.exports.default=t.exports;var e,r={},i=Object.prototype,a=i.hasOwnProperty,c=Object.defineProperty||function(t,e,r){t[e]=r.value},u="function"==typeof Symbol?Symbol:{},l=u.iterator||"@@iterator",s=u.asyncIterator||"@@asyncIterator",f=u.toStringTag||"@@toStringTag";function h(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{h({},"")}catch(e){h=function(t,e,r){return t[e]=r}}function p(t,e,r,n){var o=e&&e.prototype instanceof w?e:w,i=Object.create(o.prototype),a=new N(n||[]);return c(i,"_invoke",{value:O(t,r,a)}),i}function d(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}r.wrap=p;var v="suspendedStart",y="suspendedYield",g="executing",m="completed",b={};function w(){}function x(){}function L(){}var E={};h(E,l,(function(){return this}));var _=Object.getPrototypeOf,j=_&&_(_(A([])));j&&j!==i&&a.call(j,l)&&(E=j);var k=L.prototype=w.prototype=Object.create(E);function P(t){["next","throw","return"].forEach((function(e){h(t,e,(function(t){return this._invoke(e,t)}))}))}function S(t,e){function r(o,i,c,u){var l=d(t[o],t,i);if("throw"!==l.type){var s=l.arg,f=s.value;return f&&"object"==n(f)&&a.call(f,"__await")?e.resolve(f.__await).then((function(t){r("next",t,c,u)}),(function(t){r("throw",t,c,u)})):e.resolve(f).then((function(t){s.value=t,c(s)}),(function(t){return r("throw",t,c,u)}))}u(l.arg)}var o;c(this,"_invoke",{value:function(t,n){function i(){return new e((function(e,o){r(t,n,e,o)}))}return o=o?o.then(i,i):i()}})}function O(t,r,n){var o=v;return function(i,a){if(o===g)throw Error("Generator is already running");if(o===m){if("throw"===i)throw a;return{value:e,done:!0}}for(n.method=i,n.arg=a;;){var c=n.delegate;if(c){var u=F(c,n);if(u){if(u===b)continue;return u}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(o===v)throw o=m,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);o=g;var l=d(t,r,n);if("normal"===l.type){if(o=n.done?m:y,l.arg===b)continue;return{value:l.arg,done:n.done}}"throw"===l.type&&(o=m,n.method="throw",n.arg=l.arg)}}}function F(t,r){var n=r.method,o=t.iterator[n];if(o===e)return r.delegate=null,"throw"===n&&t.iterator.return&&(r.method="return",r.arg=e,F(t,r),"throw"===r.method)||"return"!==n&&(r.method="throw",r.arg=new TypeError("The iterator does not provide a '"+n+"' method")),b;var i=d(o,t.iterator,r.arg);if("throw"===i.type)return r.method="throw",r.arg=i.arg,r.delegate=null,b;var a=i.arg;return a?a.done?(r[t.resultName]=a.value,r.next=t.nextLoc,"return"!==r.method&&(r.method="next",r.arg=e),r.delegate=null,b):a:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,b)}function C(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function T(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function N(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(C,this),this.reset(!0)}function A(t){if(t||""===t){var r=t[l];if(r)return r.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var o=-1,i=function r(){for(;++o<t.length;)if(a.call(t,o))return r.value=t[o],r.done=!1,r;return r.value=e,r.done=!0,r};return i.next=i}}throw new TypeError(n(t)+" is not iterable")}return x.prototype=L,c(k,"constructor",{value:L,configurable:!0}),c(L,"constructor",{value:x,configurable:!0}),x.displayName=h(L,f,"GeneratorFunction"),r.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===x||"GeneratorFunction"===(e.displayName||e.name))},r.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,L):(t.__proto__=L,h(t,f,"GeneratorFunction")),t.prototype=Object.create(k),t},r.awrap=function(t){return{__await:t}},P(S.prototype),h(S.prototype,s,(function(){return this})),r.AsyncIterator=S,r.async=function(t,e,n,o,i){void 0===i&&(i=Promise);var a=new S(p(t,e,n,o),i);return r.isGeneratorFunction(e)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},P(k),h(k,f,"Generator"),h(k,l,(function(){return this})),h(k,"toString",(function(){return"[object Generator]"})),r.keys=function(t){var e=Object(t),r=[];for(var n in e)r.push(n);return r.reverse(),function t(){for(;r.length;){var n=r.pop();if(n in e)return t.value=n,t.done=!1,t}return t.done=!0,t}},r.values=A,N.prototype={constructor:N,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=e,this.done=!1,this.delegate=null,this.method="next",this.arg=e,this.tryEntries.forEach(T),!t)for(var r in this)"t"===r.charAt(0)&&a.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=e)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var r=this;function n(n,o){return c.type="throw",c.arg=t,r.next=n,o&&(r.method="next",r.arg=e),!!o}for(var o=this.tryEntries.length-1;o>=0;--o){var i=this.tryEntries[o],c=i.completion;if("root"===i.tryLoc)return n("end");if(i.tryLoc<=this.prev){var u=a.call(i,"catchLoc"),l=a.call(i,"finallyLoc");if(u&&l){if(this.prev<i.catchLoc)return n(i.catchLoc,!0);if(this.prev<i.finallyLoc)return n(i.finallyLoc)}else if(u){if(this.prev<i.catchLoc)return n(i.catchLoc,!0)}else{if(!l)throw Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return n(i.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var n=this.tryEntries[r];if(n.tryLoc<=this.prev&&a.call(n,"finallyLoc")&&this.prev<n.finallyLoc){var o=n;break}}o&&("break"===t||"continue"===t)&&o.tryLoc<=e&&e<=o.finallyLoc&&(o=null);var i=o?o.completion:{};return i.type=t,i.arg=e,o?(this.method="next",this.next=o.finallyLoc,b):this.complete(i)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),b},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),T(r),b}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;T(r)}return o}}throw Error("illegal catch attempt")},delegateYield:function(t,r,n){return this.delegate={iterator:A(t),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=e),b}},r}t.exports=o,t.exports.__esModule=!0,t.exports.default=t.exports},3738:function(t){function e(r){return t.exports=e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},t.exports.__esModule=!0,t.exports.default=t.exports,e(r)}t.exports=e,t.exports.__esModule=!0,t.exports.default=t.exports},4756:function(t,e,r){var n=r(4633)();t.exports=n;try{regeneratorRuntime=n}catch(o){"object"==typeof globalThis?globalThis.regeneratorRuntime=n:Function("r","regeneratorRuntime = r")(n)}}}]);
//# sourceMappingURL=495-d214134890c81ba85125.js.map