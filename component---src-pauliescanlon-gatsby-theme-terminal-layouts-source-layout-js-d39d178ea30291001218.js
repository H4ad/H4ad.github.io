(self.webpackChunk_h4ad_portfolio=self.webpackChunk_h4ad_portfolio||[]).push([[513],{5320:function(e,t,r){"use strict";var n=r(4994);t.__esModule=!0,t.default=void 0;var o=n(r(4634)),i=n(r(4893)),a=n(r(6221)),s=n(r(6540)),d=n(r(5556)),l=r(868),c=(0,l.debounce)((function(){window.DISQUSWIDGETS&&window.DISQUSWIDGETS.getCount({reset:!0})}),300,!1),u=function(e){function t(t){var r;return(r=e.call(this,t)||this).shortname="viniciusl-com-br",r}(0,a.default)(t,e);var r=t.prototype;return r.componentDidMount=function(){this.loadInstance()},r.shouldComponentUpdate=function(e){return this.props!==e&&(0,l.shallowComparison)(this.props,e)},r.componentDidUpdate=function(){this.loadInstance()},r.componentWillUnmount=function(){this.cleanInstance()},r.loadInstance=function(){window.document.getElementById("dsq-count-scr")?c():(0,l.insertScript)("https://"+this.shortname+".disqus.com/count.js","dsq-count-scr",window.document.body)},r.cleanInstance=function(){(0,l.removeScript)("dsq-count-scr",window.document.body),window.DISQUSWIDGETS=void 0},r.render=function(){var e=this.props,t=e.config,r=e.className,n=e.placeholder,a=(0,i.default)(e,["config","className","placeholder"]),d="disqus-comment-count"+(r?" "+r:"");return s.default.createElement("span",(0,o.default)({className:d,"data-disqus-identifier":t.identifier,"data-disqus-url":t.url},a),n)},t}(s.default.Component);t.default=u,u.defaultProps={placeholder:"..."},u.propTypes={config:d.default.shape({identifier:d.default.string,title:d.default.string,url:d.default.string}),placeholder:d.default.string,className:d.default.string}},7898:function(e,t,r){"use strict";var n=r(4994);t.__esModule=!0,t.default=void 0;var o=n(r(4634)),i=n(r(4893)),a=n(r(6221)),s=n(r(6540)),d=n(r(5556)),l=function(e){function t(){return e.apply(this,arguments)||this}(0,a.default)(t,e);var r=t.prototype;return r.getSrc=function(){return"https://embed.disqus.com/p/"+Number(this.props.commentId).toString(36)+"?p="+(this.props.showParentComment?"1":"0")+"&m="+(this.props.showMedia?"1":"0")},r.render=function(){var e=this.props,t=(e.commentId,e.showMedia,e.showParentComment,(0,i.default)(e,["commentId","showMedia","showParentComment"]));return s.default.createElement("iframe",(0,o.default)({src:this.getSrc(),width:this.props.width,height:this.props.height,seamless:"seamless",scrolling:"no",frameBorder:"0",title:"embedded-comment"},t))},t}(s.default.Component);t.default=l,l.defaultProps={width:420,height:320,showMedia:!0,showParentComment:!0},l.propTypes={commentId:d.default.oneOfType([d.default.number,d.default.string]).isRequired,width:d.default.number,height:d.default.number,showMedia:d.default.bool,showParentComment:d.default.bool}},7759:function(e,t,r){"use strict";var n=r(4994);t.__esModule=!0,t.default=void 0;var o=n(r(4634)),i=n(r(4893)),a=n(r(6221)),s=n(r(6540)),d=n(r(5556)),l=r(868),c=function(e){function t(t){var r;return(r=e.call(this,t)||this).shortname="viniciusl-com-br",r.embedUrl="https://"+r.shortname+".disqus.com/embed.js",r}(0,a.default)(t,e);var r=t.prototype;return r.componentDidMount=function(){this.loadInstance()},r.shouldComponentUpdate=function(e){return this.props!==e&&(0,l.shallowComparison)(this.props,e)},r.componentDidUpdate=function(){this.loadInstance()},r.componentWillUnmount=function(){this.cleanInstance()},r.getDisqusConfig=function(e){return function(){this.page.identifier=e.identifier,this.page.url=e.url,this.page.title=e.title,this.page.remote_auth_s3=e.remoteAuthS3,this.page.api_key=e.apiKey,this.language=e.language}},r.loadInstance=function(){"undefined"!=typeof window&&window.document&&(window.disqus_config=this.getDisqusConfig(this.props.config),window.document.getElementById("dsq-embed-scr")?this.reloadInstance():(0,l.insertScript)(this.embedUrl,"dsq-embed-scr",window.document.body))},r.reloadInstance=function(){window&&window.DISQUS&&window.DISQUS.reset({reload:!0})},r.cleanInstance=function(){(0,l.removeScript)("dsq-embed-scr",window.document.body);try{delete window.DISQUS}catch(n){window.DISQUS=void 0}var e=window.document.getElementById("disqus_thread");if(e)for(;e.hasChildNodes();)e.removeChild(e.firstChild);var t=window.document.querySelector('[id^="dsq-app"]');if(t){var r=window.document.getElementById(t.id);r.parentNode.removeChild(r)}},r.render=function(){var e=this.props,t=(e.config,(0,i.default)(e,["config"]));return s.default.createElement("div",(0,o.default)({id:"disqus_thread"},t))},t}(s.default.Component);t.default=c,c.propTypes={config:d.default.shape({identifier:d.default.string,title:d.default.string,url:d.default.string,language:d.default.string,remoteAuthS3:d.default.string,apiKey:d.default.string}),className:d.default.string}},9849:function(e,t,r){"use strict";var n=r(4994);var o=n(r(7759));t.E8=o.default,n(r(5320)).default,n(r(7898)).default,o.default},868:function(e,t,r){"use strict";var n=r(4994);t.__esModule=!0,t.insertScript=function(e,t,r){var n=window.document.createElement("script");return n.async=!0,n.src=e,n.id=t,r.appendChild(n),n},t.removeScript=function(e,t){var r=window.document.getElementById(e);r&&t.removeChild(r)},t.debounce=function(e,t,r){var n;return function(){for(var o=arguments.length,i=new Array(o),a=0;a<o;a++)i[a]=arguments[a];var s=this,d=r&&!n;window.clearTimeout(n),n=setTimeout((function(){n=null,r||e.apply(s,i)}),t),d&&e.apply(s,i)}},t.isReactElement=a,t.shallowComparison=function e(t,r){var n,i=new Set(Object.keys(t).concat(Object.keys(r))),s=(n=[]).concat.apply(n,(0,o.default)(i)).filter((function(n){if("object"==typeof t[n]){if(e(t[n],r[n]))return!0}else if(t[n]!==r[n]&&!a(t[n]))return!0;return!1}));return 0!==s.length};var o=n(r(1132)),i=n(r(6540));function a(e){return!!i.default.isValidElement(e)||!!Array.isArray(e)&&e.some((function(e){return i.default.isValidElement(e)}))}},684:function(e,t,r){var n=r(8708);e.exports={MDXRenderer:n}},8708:function(e,t,r){var n=r(1132),o=r(9646),i=r(3693),a=r(4893),s=["scope","children"];function d(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?d(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):d(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var c=r(6540),u=r(8619).mdx,p=r(3327).useMDXScope;e.exports=function(e){var t=e.scope,r=e.children,i=a(e,s),d=p(t),f=c.useMemo((function(){if(!r)return null;var e=l({React:c,mdx:u},d),t=Object.keys(e),i=t.map((function(t){return e[t]}));return o(Function,["_fn"].concat(t,[""+r])).apply(void 0,[{}].concat(n(i)))}),[r,t]);return c.createElement(f,l({},i))}},6477:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return ie}});var n=r(4467),o=r(4506),i=r(6540),a=r(5702),s=r(5022),d=r(7330),l=r(684),c=r(8619),u=r(45),p=r(7666);function f(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function m(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?f(Object(r),!0).forEach((function(t){(0,n.A)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):f(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var g="__default",h=function(e){return"object"==typeof e&&null!==e&&g in e};function b(e,t,r,n,o){var i=t&&"string"==typeof t?t.split("."):[t];for(n=0;n<i.length;n++)e=e?e[i[n]]:o;return e===o?r:h(e)?e[g]:e}var y=function e(t,r){if(t&&t.variant){var n={};for(var o in t){var i=t[o];if("variant"===o){var a=e(b(r,"function"==typeof i?i(r):i),r);n=m(m({},n),a)}else n[o]=i}return n}return t},v=[40,52,64].map((function(e){return e+"em"})),w={space:[0,4,8,16,32,64,128,256,512],fontSizes:[12,14,16,20,24,32,48,64,72]},S={bg:"backgroundColor",m:"margin",mt:"marginTop",mr:"marginRight",mb:"marginBottom",ml:"marginLeft",mx:"marginX",my:"marginY",p:"padding",pt:"paddingTop",pr:"paddingRight",pb:"paddingBottom",pl:"paddingLeft",px:"paddingX",py:"paddingY"},x={marginX:["marginLeft","marginRight"],marginY:["marginTop","marginBottom"],paddingX:["paddingLeft","paddingRight"],paddingY:["paddingTop","paddingBottom"],scrollMarginX:["scrollMarginLeft","scrollMarginRight"],scrollMarginY:["scrollMarginTop","scrollMarginBottom"],scrollPaddingX:["scrollPaddingLeft","scrollPaddingRight"],scrollPaddingY:["scrollPaddingTop","scrollPaddingBottom"],size:["width","height"]},I={color:"colors",background:"colors",backgroundColor:"colors",borderColor:"colors",caretColor:"colors",columnRuleColor:"colors",outlineColor:"colors",textDecorationColor:"colors",opacity:"opacities",transition:"transitions",margin:"space",marginTop:"space",marginRight:"space",marginBottom:"space",marginLeft:"space",marginX:"space",marginY:"space",marginBlock:"space",marginBlockEnd:"space",marginBlockStart:"space",marginInline:"space",marginInlineEnd:"space",marginInlineStart:"space",padding:"space",paddingTop:"space",paddingRight:"space",paddingBottom:"space",paddingLeft:"space",paddingX:"space",paddingY:"space",paddingBlock:"space",paddingBlockEnd:"space",paddingBlockStart:"space",paddingInline:"space",paddingInlineEnd:"space",paddingInlineStart:"space",scrollMargin:"space",scrollMarginTop:"space",scrollMarginRight:"space",scrollMarginBottom:"space",scrollMarginLeft:"space",scrollMarginX:"space",scrollMarginY:"space",scrollPadding:"space",scrollPaddingTop:"space",scrollPaddingRight:"space",scrollPaddingBottom:"space",scrollPaddingLeft:"space",scrollPaddingX:"space",scrollPaddingY:"space",inset:"space",insetBlock:"space",insetBlockEnd:"space",insetBlockStart:"space",insetInline:"space",insetInlineEnd:"space",insetInlineStart:"space",top:"space",right:"space",bottom:"space",left:"space",gridGap:"space",gridColumnGap:"space",gridRowGap:"space",gap:"space",columnGap:"space",rowGap:"space",fontFamily:"fonts",fontSize:"fontSizes",fontWeight:"fontWeights",lineHeight:"lineHeights",letterSpacing:"letterSpacings",border:"borders",borderTop:"borders",borderRight:"borders",borderBottom:"borders",borderLeft:"borders",borderWidth:"borderWidths",borderStyle:"borderStyles",borderRadius:"radii",borderTopRightRadius:"radii",borderTopLeftRadius:"radii",borderBottomRightRadius:"radii",borderBottomLeftRadius:"radii",borderTopWidth:"borderWidths",borderTopColor:"colors",borderTopStyle:"borderStyles",borderBottomWidth:"borderWidths",borderBottomColor:"colors",borderBottomStyle:"borderStyles",borderLeftWidth:"borderWidths",borderLeftColor:"colors",borderLeftStyle:"borderStyles",borderRightWidth:"borderWidths",borderRightColor:"colors",borderRightStyle:"borderStyles",borderBlock:"borders",borderBlockColor:"colors",borderBlockEnd:"borders",borderBlockEndColor:"colors",borderBlockEndStyle:"borderStyles",borderBlockEndWidth:"borderWidths",borderBlockStart:"borders",borderBlockStartColor:"colors",borderBlockStartStyle:"borderStyles",borderBlockStartWidth:"borderWidths",borderBlockStyle:"borderStyles",borderBlockWidth:"borderWidths",borderEndEndRadius:"radii",borderEndStartRadius:"radii",borderInline:"borders",borderInlineColor:"colors",borderInlineEnd:"borders",borderInlineEndColor:"colors",borderInlineEndStyle:"borderStyles",borderInlineEndWidth:"borderWidths",borderInlineStart:"borders",borderInlineStartColor:"colors",borderInlineStartStyle:"borderStyles",borderInlineStartWidth:"borderWidths",borderInlineStyle:"borderStyles",borderInlineWidth:"borderWidths",borderStartEndRadius:"radii",borderStartStartRadius:"radii",columnRuleWidth:"borderWidths",boxShadow:"shadows",textShadow:"shadows",zIndex:"zIndices",width:"sizes",minWidth:"sizes",maxWidth:"sizes",height:"sizes",minHeight:"sizes",maxHeight:"sizes",flexBasis:"sizes",size:"sizes",blockSize:"sizes",inlineSize:"sizes",maxBlockSize:"sizes",maxInlineSize:"sizes",minBlockSize:"sizes",minInlineSize:"sizes",columnWidth:"sizes",fill:"colors",stroke:"colors"},E=function(e,t){if("number"!=typeof t||t>=0){if("string"==typeof t&&t.startsWith("-")){var r=t.substring(1),n=b(e,r,r);return"number"==typeof n?-1*n:"-".concat(n)}return b(e,t,t)}var o=Math.abs(t),i=b(e,o,o);return"string"==typeof i?"-"+i:-1*Number(i)},_=["margin","marginTop","marginRight","marginBottom","marginLeft","marginX","marginY","marginBlock","marginBlockEnd","marginBlockStart","marginInline","marginInlineEnd","marginInlineStart","top","bottom","left","right"].reduce((function(e,t){return m(m({},e),{},(0,n.A)({},t,E))}),{}),O=function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return function(){var r=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=m(m({},w),"theme"in r?r.theme:r),i=function(e){return function(t){var r={},n=t&&t.breakpoints||v,i=[null].concat((0,o.A)(n.map((function(e){return e.includes("@media")?e:"@media screen and (min-width: ".concat(e,")")}))));for(var a in e){var s=a,d=e[s];if("function"==typeof d&&(d=d(t||{})),!1!==d&&null!=d)if(Array.isArray(d))for(var l=0;l<d.slice(0,i.length).length;l++){var c=i[l];c?(r[c]=r[c]||{},null!=d[l]&&(r[c][s]=d[l])):r[s]=d[l]}else r[s]=d}return r}}(y("function"==typeof t?t(n):t,n))(n),a={};for(var s in i){var d=i[s],l="function"==typeof d?d(n):d;if(l&&"object"==typeof l){if(h(l)){a[s]=l[g];continue}a[s]=e(l)(n)}else{var c=s in S?S[s]:s,u=c in I?I[c]:void 0,p=u?null==n?void 0:n[u]:b(n,c,{}),f=b(_,c,b)(p,l,l);if(c in x)for(var E=x[c],O=0;O<E.length;O++)a[E[O]]=f;else a[c]=f}}return a}},B=r(2249),M=r(3052),P=r(7143),j=r(4184),k=["size"];var C=[].concat((0,o.A)(M.Ay.propNames),(0,o.A)(P.A.propNames)),R=function(e){return C.includes(e)},W=(0,B.aX)(C),D=(0,p.A)("div",{shouldForwardProp:W})({boxSizing:"border-box",margin:0,minWidth:0},(function(e){return O(e.__css)(e.theme)}),(function(e){var t=e.theme,r=e.variant,n=e.__themeKey;return O(b(t,(void 0===n?"variants":n)+"."+r,b(t,r)))}),M.Ay,P.A,(function(e){return O(e.sx)(e.theme)}),(function(e){return e.css}));D.displayName="Box";var A=(0,p.A)(D)({display:"flex"});function T(){return T=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},T.apply(this,arguments)}A.displayName="Flex";var z=i.forwardRef((function(e,t){return i.createElement(D,T({as:"span",ref:t,variant:"default"},e,{__themeKey:"text"}))})),U=i.forwardRef((function(e,t){return i.createElement(D,T({ref:t,as:"h2",variant:"heading"},e,{__themeKey:"text",__css:{fontFamily:"heading",fontWeight:"heading",lineHeight:"heading"}}))})),q=function(e){var t=e.size,r=void 0===t?24:t,n=(0,u.A)(e,k);return i.createElement(D,T({as:"svg",xmlns:"http://www.w3.org/2000/svg",width:r+"",height:r+"",viewBox:"0 0 24 24",fill:"currentcolor"},n))};q.displayName="SVG";var L=function(e){return function(t){var r={};for(var n in t)e(n||"")&&(r[n]=t[n]);return r}},X=/^m[trblxy]?$/,N=(L((function(e){return X.test(e)})),L((function(e){return!X.test(e)})),(0,j.i7)({from:{transform:"rotate(0deg)"},to:{transform:"rotate(360deg)"}}),i.forwardRef((function(e,t){return i.createElement(D,T({ref:t,variant:"primary"},e,{__themeKey:"badges",__css:{display:"inline-block",verticalAlign:"baseline",fontSize:0,fontWeight:"bold",whiteSpace:"nowrap",px:1,borderRadius:2,color:"white",bg:"primary"}}))}))),G=i.forwardRef((function(e,t){return i.createElement(D,T({ref:t,variant:"primary"},e,{__themeKey:"alerts",__css:{display:"flex",alignItems:"center",px:3,py:2,fontWeight:"bold",color:"white",bg:"primary",borderRadius:4}}))})),F=i.forwardRef((function(e,t){return i.createElement(D,T({ref:t,as:"hr",variant:"styles.hr"},e,{__css:{color:"gray",m:0,my:2,border:0,borderBottom:"1px solid"}}))})),Y=(L(R),L((function(e){return!R(e)})),r(1844)),K=r(7327),Q=r(8952),H=r(9849),V={backgroundColor:"#FFF",padding:"1rem",borderRadius:"8px"};function $(e){var t=e.frontmatter,r=e.pathname,n={url:""+((0,Q.UK)().site.siteMetadata.siteUrl+r),identifier:t.id,title:t.title};return i.createElement("div",{style:V},i.createElement(H.E8,{config:n}))}var J=r(3064),Z=r(978),ee=function(e){return(0,K.A)(new Date(e),"d-MMM-u")},te=function(e){var t=e.title,r=e.tags,n=e.date,o=e.dateModified,a=e.author,s=e.isPrivate,d=e.featuredImage,u=e.featuredImageUrl,p=e.embedded,f=e.body,m=e.timeToRead,g=e.wordCount,h=e.location,b=e.frontmatter;e.slug;return i.createElement(J.g,null,t?i.createElement(i.Fragment,null,s&&i.createElement(i.Fragment,null,i.createElement(G,{variant:"error",sx:{mb:4}},"This is a private post")),i.createElement(D,{sx:{mb:4}},d&&d.childImageSharp&&i.createElement(Z.G,{alt:t+"-image",image:d.childImageSharp.gatsbyImageData}),u&&u.childImageSharp&&i.createElement(Z.G,{alt:t+"-image",image:u.childImageSharp.gatsbyImageData})),i.createElement(U,{as:"h1",variant:"styles.h1",sx:{mb:4}},t),i.createElement(A,{sx:{flexWrap:"wrap",mb:1}},i.createElement(D,{sx:{width:["100%","50%"]}},n&&i.createElement(z,{as:"div",sx:{color:"muted"}},"Published At: ",ee(n))),i.createElement(D,{sx:{width:["100%","50%"]}},o&&i.createElement(z,{as:"div",sx:{color:"muted",textAlign:["left","right"]}},"Modified At: ",ee(o)))),i.createElement(A,{sx:{flexWrap:"wrap",mb:3}},i.createElement(D,{sx:{width:["100%","50%"]}},i.createElement(z,{as:"div",sx:{color:"muted"}},m+" min read / "+g.words+" words")),a&&i.createElement(D,{sx:{width:["100%","50%"]}},i.createElement(z,{as:"div",sx:{color:"muted",textAlign:["left","right"]}},"Author: ",a)))):null,r?i.createElement(D,{sx:{mb:3}},r.map((function(e,t){return i.createElement(N,{key:t,variant:"primary",sx:{mb:2,mr:2,color:(0,Y.jh)("muted","primary",""+t/r.length),borderColor:(0,Y.jh)("muted","primary",""+t/r.length)}},e)}))):null,i.createElement(c.MDXProvider,null,i.createElement(l.MDXRenderer,{embedded:p,frontmatter:b},f)),i.createElement(F,null),i.createElement($,{frontmatter:b,pathname:h.pathname}))},re="image";function ne(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function oe(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?ne(Object(r),!0).forEach((function(t){(0,n.A)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):ne(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var ie=function(e){var t=e.data.mdx,r=t.id,n=t.body,l=t.excerpt,c=t.frontmatter,u=t.featuredImageUrl,p=t.embeddedImageUrls,f=t.fields.slug,m=t.timeToRead,g=t.wordCount,h=(0,Q.UK)().site.siteMetadata,b=h.name,y=h.siteUrl,v=h.siteImage,w=h.lang,S=c.title,x=c.tags,I=c.date,E=c.dateModified,_=c.author,O=c.isPrivate,B=c.featuredImage,M=c.embeddedImages,P=[].concat((0,o.A)(M||[]),(0,o.A)(p||[])).filter((function(e){return e}));return i.createElement(s.D,null,i.createElement(a.Location,null,(function(e){var t,o,a=e.location,s=a.pathname;return i.createElement(i.Fragment,null,i.createElement(d.G,((t={type:"article",title:b,titleTemplate:S,description:l,siteUrl:y,canonical:f,image:""}).image=B?""+y+B.childImageSharp.gatsbyImageData.images.fallback.src:u?""+y+u.childImageSharp.gatsbyImageData.images.fallback.src:v,t.path=s,t.keywords=x||[""],t.lang=w,t)),i.createElement(te,{location:a,frontmatter:oe(oe({},c),{},{id:r}),title:S,tags:x,date:I,dateModified:E,author:_,isPrivate:O,featuredImage:B,featuredImageUrl:u,embedded:(o=P,Array.isArray(o)?o.reduce((function(e,t,r){return e[""+re+(r+1)]=e[""+re+(r+1)]||t?t.url?t.url[0].childImageSharp:t.childImageSharp:null,e}),{}):{}),body:n,timeToRead:m,wordCount:g,slug:f}))})))}},79:function(e){e.exports=function(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=Array(t);r<t;r++)n[r]=e[r];return n},e.exports.__esModule=!0,e.exports.default=e.exports},5901:function(e,t,r){var n=r(79);e.exports=function(e){if(Array.isArray(e))return n(e)},e.exports.__esModule=!0,e.exports.default=e.exports},9646:function(e,t,r){var n=r(7550),o=r(5636);e.exports=function(e,t,r){if(n())return Reflect.construct.apply(null,arguments);var i=[null];i.push.apply(i,t);var a=new(e.bind.apply(e,i));return r&&o(a,r.prototype),a},e.exports.__esModule=!0,e.exports.default=e.exports},3693:function(e,t,r){var n=r(7736);e.exports=function(e,t,r){return(t=n(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e},e.exports.__esModule=!0,e.exports.default=e.exports},7550:function(e){function t(){try{var r=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(r){}return(e.exports=t=function(){return!!r},e.exports.__esModule=!0,e.exports.default=e.exports)()}e.exports=t,e.exports.__esModule=!0,e.exports.default=e.exports},9291:function(e){e.exports=function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)},e.exports.__esModule=!0,e.exports.default=e.exports},1869:function(e){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")},e.exports.__esModule=!0,e.exports.default=e.exports},4893:function(e){e.exports=function(e,t){if(null==e)return{};var r={};for(var n in e)if({}.hasOwnProperty.call(e,n)){if(t.indexOf(n)>=0)continue;r[n]=e[n]}return r},e.exports.__esModule=!0,e.exports.default=e.exports},1132:function(e,t,r){var n=r(5901),o=r(9291),i=r(7122),a=r(1869);e.exports=function(e){return n(e)||o(e)||i(e)||a()},e.exports.__esModule=!0,e.exports.default=e.exports},9045:function(e,t,r){var n=r(3738).default;e.exports=function(e,t){if("object"!=n(e)||!e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var o=r.call(e,t||"default");if("object"!=n(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)},e.exports.__esModule=!0,e.exports.default=e.exports},7736:function(e,t,r){var n=r(3738).default,o=r(9045);e.exports=function(e){var t=o(e,"string");return"symbol"==n(t)?t:t+""},e.exports.__esModule=!0,e.exports.default=e.exports},3738:function(e){function t(r){return e.exports=t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},e.exports.__esModule=!0,e.exports.default=e.exports,t(r)}e.exports=t,e.exports.__esModule=!0,e.exports.default=e.exports},7122:function(e,t,r){var n=r(79);e.exports=function(e,t){if(e){if("string"==typeof e)return n(e,t);var r={}.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?n(e,t):void 0}},e.exports.__esModule=!0,e.exports.default=e.exports}}]);
//# sourceMappingURL=component---src-pauliescanlon-gatsby-theme-terminal-layouts-source-layout-js-d39d178ea30291001218.js.map