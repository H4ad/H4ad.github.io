(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{"A2+M":function(e,t,r){var n=r("X8hv");e.exports={MDXRenderer:n}},Bnag:function(e,t){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},EbDI:function(e,t){e.exports=function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}},Ijbi:function(e,t,r){var n=r("WkPL");e.exports=function(e){if(Array.isArray(e))return n(e)}},RIqP:function(e,t,r){var n=r("Ijbi"),a=r("EbDI"),o=r("ZhPi"),c=r("Bnag");e.exports=function(e){return n(e)||a(e)||o(e)||c()}},SksO:function(e,t){function r(t,n){return e.exports=r=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},r(t,n)}e.exports=r},WkPL:function(e,t){e.exports=function(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}},X8hv:function(e,t,r){var n=r("sXyB"),a=r("RIqP"),o=r("lSNA"),c=r("8OQS");function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var u=r("q1tI"),s=r("7ljp"),p=s.useMDXComponents,f=s.mdx,d=r("BfwJ").useMDXScope;e.exports=function(e){var t=e.scope,r=e.components,o=e.children,i=c(e,["scope","components","children"]),s=p(r),m=d(t),b=u.useMemo((function(){if(!o)return null;var e=l({React:u,mdx:f},m),t=Object.keys(e),r=t.map((function(t){return e[t]}));return n(Function,["_fn"].concat(a(t),[""+o])).apply(void 0,[{}].concat(a(r)))}),[o,t]);return u.createElement(b,l({components:s},i))}},ZhPi:function(e,t,r){var n=r("WkPL");e.exports=function(e,t){if(e){if("string"==typeof e)return n(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?n(e,t):void 0}}},b48C:function(e,t){e.exports=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}},qNtW:function(e,t,r){"use strict";r.r(t),r.d(t,"singleMdx",(function(){return j}));var n=r("rePB"),a=r("q1tI"),o=r.n(a),c=r("YwZP"),i=r("ugCE"),l=r("WHxd"),u=r("A2+M"),s=r("7ljp"),p=r("izhR"),f=r("Twun"),d=r("sWYD"),m=r("9eSz"),b=r.n(m),y=r("ipYL"),h=function(e){return Object(d.a)(new Date(e),"d-MMM-u")},g=function(e){var t=e.title,r=e.tags,n=e.date,c=e.dateModified,i=e.author,l=e.isPrivate,d=e.featuredImage,m=e.embedded,g=e.body,O=e.timeToRead,v=e.wordCount;return o.a.createElement(y.a,null,l&&o.a.createElement(a.Fragment,null,o.a.createElement(p.a,{variant:"error"},"This is a private post"),o.a.createElement(p.l,null)),o.a.createElement(p.f,{sx:{mb:4}},d&&d.childImageSharp&&o.a.createElement(b.a,{fluid:d.childImageSharp.fluid,alt:d.childImageSharp.fluid.originalName})),o.a.createElement(p.r,{as:"h1",variant:"styles.h1",sx:{mb:4}},t),o.a.createElement(p.p,{sx:{flexWrap:"wrap"}},o.a.createElement(p.f,{sx:{width:["100%","50%"]}},n&&o.a.createElement(p.F,{sx:{color:"muted"}},"Date published: ",h(n))),o.a.createElement(p.f,{sx:{width:["100%","50%"]}},c&&o.a.createElement(p.F,{sx:{color:"muted",textAlign:["left","right"]}},"Date modified: ",h(c)))),o.a.createElement(p.p,{sx:{flexWrap:"wrap"}},o.a.createElement(p.f,{sx:{width:["100%","50%"]}},o.a.createElement(p.F,{sx:{color:"muted"}},O+" min read / "+v.words+" words")),i&&o.a.createElement(p.f,{sx:{width:["100%","50%"]}},o.a.createElement(p.F,{sx:{color:"muted",textAlign:["left","right"]}},"Author: ",i))),o.a.createElement(p.l,null),r&&r.map((function(e,t){return o.a.createElement(p.e,{key:t,variant:"primary",sx:{mb:2,mr:2,color:Object(f.b)("muted","primary",""+t/r.length),borderColor:Object(f.b)("muted","primary",""+t/r.length)}},e)})),o.a.createElement(p.l,null),o.a.createElement(s.MDXProvider,null,o.a.createElement(u.MDXRenderer,{embedded:m},g)))},O=r("ORj/");function v(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}var j="706436841";t.default=function(e){var t=e.data.mdx,r=t.body,u=t.excerpt,s=t.frontmatter,p=t.timeToRead,f=t.wordCount,d=Object(O.b)().site.siteMetadata,m=d.name,b=d.siteUrl,y=d.siteImage,h=d.lang,j=s.title,w=s.tags,x=s.date,E=s.dateModified,P=s.author,I=s.isPrivate,S=s.featuredImage,D=s.embeddedImages,M=D&&D.reduce((function(e,t,r){return e["image"+(r+1)]=e["image"+(r+1)]||function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?v(Object(r),!0).forEach((function(t){Object(n.a)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):v(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}({},t.childImageSharp),e}),{});return o.a.createElement(i.b,null,o.a.createElement(c.Location,null,(function(e){var t=e.location.pathname;return o.a.createElement(a.Fragment,null,o.a.createElement(l.a,{type:"article",title:m,titleTemplate:j,description:u,siteUrl:b,image:S&&S.childImageSharp?S.childImageSharp.fluid.src:y,path:t,keywords:w,lang:h}),o.a.createElement(g,{title:j,tags:w,date:x,dateModified:E,author:P,isPrivate:I,featuredImage:S,embedded:M,body:r,timeToRead:p,wordCount:f}))})))}},sXyB:function(e,t,r){var n=r("SksO"),a=r("b48C");function o(t,r,c){return a()?e.exports=o=Reflect.construct:e.exports=o=function(e,t,r){var a=[null];a.push.apply(a,t);var o=new(Function.bind.apply(e,a));return r&&n(o,r.prototype),o},o.apply(null,arguments)}e.exports=o}}]);
//# sourceMappingURL=component---node-modules-pauliescanlon-gatsby-theme-terminal-src-layouts-source-layout-js-87ff8de195b803e0e725.js.map