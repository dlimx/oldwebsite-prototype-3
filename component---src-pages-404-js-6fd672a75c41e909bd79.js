(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{189:function(A,e,a){"use strict";a.r(e);var t=a(0),g=a.n(t),B=a(195),Q=a(198),n=a(203);e.default=function(){return g.a.createElement(Q.a,null,g.a.createElement(n.a,{title:"Not Found"}),g.a.createElement("h1",null,"Not Found"),g.a.createElement("p",null,"You just hit a route that doesn't exist... unfortunate."),g.a.createElement(B.a,{to:"/"},"Let's go home."))}},195:function(A,e,a){"use strict";a.d(e,"b",function(){return I});var t=a(0),g=a.n(t),B=a(11),Q=a.n(B),n=a(61),o=a.n(n);a.d(e,"a",function(){return o.a}),a.d(e,"c",function(){return n.withPrefix});a(196),a(8).default.enqueue;var E=g.a.createContext({});function C(A){var e=A.staticQueryData,a=A.data,t=A.query,B=A.render,Q=a?a.data:e[t]&&e[t].data;return g.a.createElement(g.a.Fragment,null,Q&&B(Q),!Q&&g.a.createElement("div",null,"Loading (StaticQuery)"))}var I=function(A){var e=A.data,a=A.query,t=A.render,B=A.children;return g.a.createElement(E.Consumer,null,function(A){return g.a.createElement(C,{data:e,query:a,render:t||B,staticQueryData:A})})};I.propTypes={data:Q.a.object,query:Q.a.string.isRequired,render:Q.a.func,children:Q.a.func}},196:function(A,e,a){var t;A.exports=(t=a(199))&&t.default||t},198:function(A,e,a){"use strict";a(23);var t=a(5),g=a.n(t),B=a(200),Q=a(0),n=a.n(Q),o=a(195),E=(a(205),a(206),a(13)),C=a.n(E),I=a(18),r=a.n(I),i=a(11),c=a.n(i),l=a(207),s=a(197),N=a.n(s),m=(a(208),a(182)),u=a.n(m),d=a(201),R=a.n(d),D=a(202),k=a.n(D),S=function(){return n.a.createElement("div",{className:N()(u.a.header)},n.a.createElement("div",{className:N()("main--container",u.a.headerLinks)},n.a.createElement(o.a,{to:"/",className:""+u.a.headerImage},n.a.createElement("img",{src:k.a,alt:"logo",className:""+u.a.headerImage})),n.a.createElement("div",{className:u.a.linkContainer},n.a.createElement(o.a,{to:"/",className:N()("header-link",u.a.link),activeClassName:u.a.linkActive},"About"),R.a.blogActive&&n.a.createElement(o.a,{to:"/stories/",className:N()("header-link",u.a.link),activeClassName:u.a.linkActive},"Stories"),n.a.createElement(o.a,{to:"/work/",className:N()("header-link",u.a.link),activeClassName:u.a.linkActive},"Work"))))},j=a(119),p=a.n(j),G=a(183),f=a.n(G),y=function(A){function e(){for(var e,a=arguments.length,t=new Array(a),g=0;g<a;g++)t[g]=arguments[g];return e=A.call.apply(A,[this].concat(t))||this,r()(C()(C()(e)),"defaultOffset",200),e}return g()(e,A),e.prototype.render=function(){var A=this.props,e=A.data,a=A.children,t=A.windowContext,g=A.right,B=A.fixedRight,Q=t.width<Number.parseInt(p.a.mdValue,10);return n.a.createElement("div",{className:N()(!!g&&"layout--grid-row")},n.a.createElement("div",{style:{width:!g||Q?"100%":"70%",paddingLeft:"10%"}},n.a.createElement("div",{className:f.a.placeholder}),n.a.createElement(l.StickyContainer,null,n.a.createElement(l.Sticky,{topOffset:Q?0:this.defaultOffset},function(A){var a=A.style;A.isSticky,A.wasSticky,A.distanceFromTop,A.distanceFromBottom,A.calculatedHeight;return n.a.createElement("header",{style:a},n.a.createElement(S,{siteTitle:e.site.siteMetadata.title}))}),n.a.createElement("div",{className:"main--container"},n.a.createElement("div",{className:"layout--container"},a)))),!Q&&!!g&&n.a.createElement("div",{className:f.a.rightPlaceholder},n.a.createElement("div",{className:f.a.rightContainer,style:{position:B?"fixed":"relative"}},g)))},e}(Q.Component);r()(y,"propTypes",{data:c.a.object.isRequired,children:c.a.node.isRequired,right:c.a.oneOfType([c.a.node,c.a.func]),fixedRight:c.a.bool,windowContext:c.a.shape({width:c.a.number.isRequired}).isRequired}),r()(y,"defaultProps",{right:null,fixedRight:!0});var U=y,J=a(78),q=function(A){function e(){return A.apply(this,arguments)||this}return g()(e,A),e.prototype.render=function(){var A=this;return n.a.createElement(o.b,{query:"1044757290",render:function(e){return n.a.createElement(J.b.Consumer,null,function(a){return n.a.createElement(U,Object.assign({},A.props,{data:e,windowContext:a}))})},data:B})},e}(Q.Component);e.a=q},199:function(A,e,a){"use strict";a.r(e);a(23);var t=a(0),g=a.n(t),B=a(11),Q=a.n(B),n=a(79),o=function(A){var e=A.location,a=A.pageResources;return a?g.a.createElement(n.a,Object.assign({location:e,pageResources:a},a.json)):null};o.propTypes={location:Q.a.shape({pathname:Q.a.string.isRequired}).isRequired},e.default=o},200:function(A){A.exports={data:{site:{siteMetadata:{title:"David Li"}}}}},201:function(A,e){A.exports={blogActive:!0,blogPostsPerPage:6}},202:function(A,e){A.exports="data:image/png;base64,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AGCW9oweAGwfZQwAANQIEAAAoEaAAAAANQIEAACoESAAAECNAAEAAGoECAAAUCNAAACAGgECAADUCBAAAKBGgAAAADUCBAAAqBEgAABAjQABAABqBAgAAFAjQAAAgBoBAgAA1AgQAACgRoAAAAA1AgQAAKgRIAAAQI0AAQAAagQIAABQI0AAAIAaAQIAANQIEAAAoEaAAAAANQIEAACoESAAAECNAAEAAGoECAAAUCNAAACAGgECAADUCBAAAKBGgAAAADUCBAAAqBEgAABAjQABAABqBAgAAFAjQAAAgBoBAgAA1AgQAACgRoAAAAA1AgQAAKgRIAAAQI0AAQAAagQIAABQI0AAAIAaAQIAANQIEAAAoEaAAAAANQIEAACoESAAAECNAAEAAGoECAAAUCNAAACAGgECAADUCBAAAKBGgAAAADUCBAAAqBEgAABAjQABAABqBAgAAFAjQAAAgBoBAgAA1AgQAACgRoAAAAA1AgQAAKgRIAAAQI0AAQAAagQIAABQI0AAAIAaAQIAANQIEAAAoEaAAAAANQIEAACoESAAAECNAAEAAGoECAAAUCNAAACAGgECAADUCBAAAKBGgAAAADUCBAAAqBEgAABAjQABAABqBAgAAFAjQAAAgBoBAgAA1AgQAACgRoAAAAA1AgQAAKgRIAAAQI0AAQAAagQIAABQI0AAAIAaAQIAANQIEAAAoEaAAAAANQIEAACoESAAAECNAAEAAGoECAAAUCNAAACAGgECAADUCBAAAKBGgAAAADUCBAAAqBEgAABAjQABAABqBAgAAFAjQAAAgBoBAgAA1AgQAACgRoAAAAA1AgQAAKgRIAAAQI0AAQAAagQIAABQI0AAAIAaAQIAANQIEAAAoEaAAAAANQIEAACoESAAAECNAAEAAGoECAAAUCNAAACAGgECAADUCBAAAKBGgAAAADUCBAAAqBEgAABAjQABAABqBAgAAFAjQAAAgBoBAgAA1AgQAACgRoAAAAA1AgQAAKgRIAAAQI0AAQAAagQIAABQI0AAAIAaAQIAANQIEAAAoEaAAAAANQIEAACoESAAAEDN/wOG6lPCFVibCQAAAABJRU5ErkJggg=="},203:function(A,e,a){"use strict";var t=a(204),g=a(0),B=a.n(g),Q=a(11),n=a.n(Q),o=a(209),E=a.n(o),C=a(195),I="1025518380";function r(A){var e=A.description,a=A.lang,g=A.meta,Q=A.keywords,n=A.title;return B.a.createElement(C.b,{query:I,render:function(A){var t=e||A.site.siteMetadata.description;return B.a.createElement(E.a,{htmlAttributes:{lang:a},title:n,titleTemplate:"%s | "+A.site.siteMetadata.title,meta:[{name:"description",content:t},{property:"og:title",content:n},{property:"og:description",content:t},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:A.site.siteMetadata.author},{name:"twitter:title",content:n},{name:"twitter:description",content:t}].concat(Q.length>0?{name:"keywords",content:Q.join(", ")}:[]).concat(g)},B.a.createElement("link",{rel:"apple-touch-icon",sizes:"180x180",href:"/apple-touch-icon.png"}),B.a.createElement("link",{rel:"icon",type:"image/png",sizes:"32x32",href:"/favicon-32x32.png"}),B.a.createElement("link",{rel:"icon",type:"image/png",sizes:"16x16",href:"/favicon-16x16.png"}),B.a.createElement("link",{rel:"manifest",href:"/site.webmanifest"}),B.a.createElement("link",{rel:"mask-icon",href:"/safari-pinned-tab.svg",color:"#3198e8"}),B.a.createElement("meta",{name:"apple-mobile-web-app-title",content:"David Li"}),B.a.createElement("meta",{name:"application-name",content:"David Li"}),B.a.createElement("meta",{name:"msapplication-TileColor",content:"#203757"}),B.a.createElement("meta",{name:"theme-color",content:"#ffffff"}))},data:t})}r.defaultProps={description:"",lang:"en",meta:[],keywords:[]},r.propTypes={description:n.a.string,lang:n.a.string,meta:n.a.array,keywords:n.a.arrayOf(n.a.string),title:n.a.string.isRequired},e.a=r},204:function(A){A.exports={data:{site:{siteMetadata:{title:"David Li",description:"A starter blog demonstrating what Gatsby can do.",author:"David Li"}}}}}}]);
//# sourceMappingURL=component---src-pages-404-js-6fd672a75c41e909bd79.js.map