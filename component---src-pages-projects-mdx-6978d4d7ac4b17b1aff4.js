"use strict";(self.webpackChunk_h4ad_portfolio=self.webpackChunk_h4ad_portfolio||[]).push([[153],{8870:function(e,t,n){var o=n(6540),r=n(6635),a=n(5702),m=n(5022),i=n(7330),d=n(3064),s=n(8952);t.A=function(e){var t=e.children,n=(0,s.UK)().site.siteMetadata,l=n.name,x=n.description,p=n.keywords,c=n.siteUrl,u=n.siteImage,f=n.lang;return(0,r.jsx)(m.D,null,(0,r.jsx)(d.g,null,(0,r.jsx)(a.Location,null,(function(e){var t=e.location.pathname,n=t.replace(/\//gm,"");return(0,r.jsx)(o.Fragment,null,(0,r.jsx)(i.G,{type:"website",title:l,titleTemplate:n,description:x,siteUrl:c,canonical:t,image:u,path:t,keywords:p||[""],lang:f}))})),t))}},2647:function(e,t,n){n.r(t),n.d(t,{_frontmatter:function(){return l},default:function(){return w}});var o=n(4506),r=n(8587),a=(n(6540),n(8619)),m=n(8870),i=n(7327),d=n(2350),s=["components"],l={},x=function(e){return function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,a.mdx)("div",t)}},p=x("SourceList"),c=x("Box"),u=x("Link"),f=x("Card"),y=x("GatsbyImage"),g=x("Heading"),T=x("Text"),h={_frontmatter:l},b=m.A;function w(e){var t=e.components,n=(0,r.A)(e,s);return(0,a.mdx)(b,Object.assign({},h,n,{components:t,mdxType:"MDXLayout"}),(0,a.mdx)("h1",null,"My Projects"),(0,a.mdx)("p",null,"Below is the list of professional and personal projects I've worked on in recent years."),(0,a.mdx)(p,{filter:"projects",mdxType:"SourceList"},(function(e){return(0,a.mdx)(d.A,{breakpointCols:3,style:{display:"flex",width:"auto"},className:"mansory",columnClassName:"mansory__column",mdxType:"Masonry"},e.filter((function(e){return!e.node.frontmatter.isPrivate})).reduce((function(e,t){return t.node.frontmatter.pinned?[t].concat((0,o.A)(e)):[].concat((0,o.A)(e),[t])}),[]).map((function(e,t){var n=e.node,o=n.featuredImageUrl,r=n.frontmatter,m=r.title,d=r.featuredImage,s=(r.tags,r.date),l=r.pinned,x=n.excerpt,p=n.fields.slug;return(0,a.mdx)(c,{key:t,sx:{mb:3,width:"100%"},mdxType:"Box"},(0,a.mdx)(u,{href:p,sx:{textDecoration:"none"},mdxType:"Link"},(0,a.mdx)(f,{sx:{ml:2,mr:2,mb:3},mdxType:"Card"},(0,a.mdx)(c,{sx:{minHeight:"1px"},mdxType:"Box"},d?(0,a.mdx)(y,{alt:m,image:d.childImageSharp,mdxType:"GatsbyImage"}):null,o?(0,a.mdx)(y,{alt:m,image:o.url.childImageSharp,mdxType:"GatsbyImage"}):null),(0,a.mdx)(c,{sx:{display:"flex",flex:"1 1 auto",flexDirection:"column",p:3},mdxType:"Box"},(0,a.mdx)(g,{variant:"styles.h4",sx:{color:l?"primary":"text"},mdxType:"Heading"},m),(0,a.mdx)(T,{sx:{mb:1,color:"muted"},mdxType:"Text"},(0,i.A)(new Date(s),"d-MMM-u")),(0,a.mdx)(T,{sx:{mb:1,color:"text"},mdxType:"Text"},x)),(0,a.mdx)(c,{sx:{p:3},mdxType:"Box"},(0,a.mdx)(T,{mdxType:"Text"},"View project")))))})))})))}w.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-projects-mdx-6978d4d7ac4b17b1aff4.js.map