(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{194:function(A,e,t){"use strict";t.r(e);var a=t(5),g=t.n(a),n=t(0),o=t.n(n),B=(t(195),t(11)),E=t.n(B),Q=t(198),r=t(203),i=function(A){function e(){return A.apply(this,arguments)||this}return g()(e,A),e.prototype.render=function(){return o.a.createElement("div",null,o.a.createElement("h3",null,this.props.title),o.a.createElement("img",{className:"img",src:this.props.image}))},e}(o.a.Component);i.propTypes={title:E.a.string.isRequired,image:E.a.string.isRequired};var C=i;t.d(e,"dinnerPhotoQuery",function(){return c});var I=function(A){function e(){return A.apply(this,arguments)||this}return g()(e,A),e.prototype.render=function(){return o.a.createElement(Q.a,null,o.a.createElement(r.a,{title:"Dinner Club",keywords:["work","gatsby","javascript","react"]}),o.a.createElement("div",null,o.a.createElement("h2",null,"Dinner Club"),o.a.createElement("blockquote",null,"Every week, my fellow cooks and I each invite one person. The only rule? It has to be someone the other two don't know."),o.a.createElement("blockquote",null,"Themed, home-cooked meals, and warm, delightful friendship. No strings attached, and anyone is welcome to join."),o.a.createElement("div",null,o.a.createElement("a",{href:"mailto:david.minxiao.li@gmail.com",target:"new"},o.a.createElement("span",null,"Email me and come for dinner!")))),o.a.createElement("div",null,o.a.createElement(C,{title:"Cool for the Summer",image:"https://imgur.com/rKImiy8.jpg"}),o.a.createElement(C,{title:"Formal",image:"https://imgur.com/j3GKFUa.jpg"}),o.a.createElement(C,{title:"Taco (Sundays)",image:"https://imgur.com/vSsydoo.jpg"}),o.a.createElement(C,{title:"New Year New Food",image:"https://imgur.com/tJVbDZl.jpg"}),o.a.createElement(C,{title:"A Christmas Special",image:"https://imgur.com/XeLb8w5.jpg"}),o.a.createElement(C,{title:"All-American Edition",image:"https://imgur.com/7XAO4J0.jpg"}),o.a.createElement(C,{title:"Fall Eats",image:"https://imgur.com/QFeTAtD.jpg"}),o.a.createElement(C,{title:"The First",image:"https://imgur.com/7SEMuko.jpg"})))},e}(n.Component),c=(e.default=I,"1521824853")},195:function(A,e,t){"use strict";t.d(e,"b",function(){return i});var a=t(0),g=t.n(a),n=t(11),o=t.n(n),B=t(61),E=t.n(B);t.d(e,"a",function(){return E.a}),t.d(e,"c",function(){return B.withPrefix});t(196),t(8).default.enqueue;var Q=g.a.createContext({});function r(A){var e=A.staticQueryData,t=A.data,a=A.query,n=A.render,o=t?t.data:e[a]&&e[a].data;return g.a.createElement(g.a.Fragment,null,o&&n(o),!o&&g.a.createElement("div",null,"Loading (StaticQuery)"))}var i=function(A){var e=A.data,t=A.query,a=A.render,n=A.children;return g.a.createElement(Q.Consumer,null,function(A){return g.a.createElement(r,{data:e,query:t,render:a||n,staticQueryData:A})})};i.propTypes={data:o.a.object,query:o.a.string.isRequired,render:o.a.func,children:o.a.func}},196:function(A,e,t){var a;A.exports=(a=t(199))&&a.default||a},198:function(A,e,t){"use strict";t(23);var a=t(5),g=t.n(a),n=t(200),o=t(0),B=t.n(o),E=t(195),Q=(t(205),t(206),t(13)),r=t.n(Q),i=t(18),C=t.n(i),I=t(11),c=t.n(I),l=t(207),m=t(197),s=t.n(m),u=(t(208),t(182)),N=t.n(u),d=t(201),p=t.n(d),k=t(202),j=t.n(k),R=function(){return B.a.createElement("div",{className:s()(N.a.header)},B.a.createElement("div",{className:s()("main--container",N.a.headerLinks)},B.a.createElement(E.a,{to:"/",className:""+N.a.headerImage},B.a.createElement("img",{src:j.a,alt:"logo",className:""+N.a.headerImage})),B.a.createElement("div",{className:N.a.linkContainer},B.a.createElement(E.a,{to:"/",className:s()("header-link",N.a.link),activeClassName:N.a.linkActive},"About"),p.a.blogActive&&B.a.createElement(E.a,{to:"/stories/",className:s()("header-link",N.a.link),activeClassName:N.a.linkActive},"Stories"),B.a.createElement(E.a,{to:"/work/",className:s()("header-link",N.a.link),activeClassName:N.a.linkActive},"Work"))))},D=t(119),S=t.n(D),y=t(183),f=t.n(y),G=function(A){function e(){for(var e,t=arguments.length,a=new Array(t),g=0;g<t;g++)a[g]=arguments[g];return e=A.call.apply(A,[this].concat(a))||this,C()(r()(r()(e)),"defaultOffset",200),e}return g()(e,A),e.prototype.render=function(){var A=this.props,e=A.data,t=A.children,a=A.windowContext,g=A.right,n=A.fixedRight,o=a.width<Number.parseInt(S.a.mdValue,10),E=!o&&!!g;return B.a.createElement("div",{className:s()(E&&"layout--grid-row")},B.a.createElement("div",{style:{width:E?"70%":"100%",paddingLeft:E?"10%":0}},B.a.createElement("div",{className:f.a.placeholder}),B.a.createElement(l.StickyContainer,null,B.a.createElement(l.Sticky,{topOffset:o?0:this.defaultOffset},function(A){var t=A.style;A.isSticky,A.wasSticky,A.distanceFromTop,A.distanceFromBottom,A.calculatedHeight;return B.a.createElement("header",{style:t},B.a.createElement(R,{siteTitle:e.site.siteMetadata.title}))}),B.a.createElement("div",{className:"main--container"},B.a.createElement("div",{className:"layout--container"},t)))),E&&B.a.createElement("div",{className:f.a.rightPlaceholder},B.a.createElement("div",{className:f.a.rightContainer,style:{position:n?"fixed":"relative"}},g)))},e}(o.Component);C()(G,"propTypes",{data:c.a.object.isRequired,children:c.a.node.isRequired,right:c.a.oneOfType([c.a.node,c.a.func]),fixedRight:c.a.bool,windowContext:c.a.shape({width:c.a.number.isRequired}).isRequired}),C()(G,"defaultProps",{right:null,fixedRight:!0});var h=G,U=t(78),J=function(A){function e(){return A.apply(this,arguments)||this}return g()(e,A),e.prototype.render=function(){var A=this;return B.a.createElement(E.b,{query:"1044757290",render:function(e){return B.a.createElement(U.b.Consumer,null,function(t){return B.a.createElement(h,Object.assign({},A.props,{data:e,windowContext:t}))})},data:n})},e}(o.Component);e.a=J},199:function(A,e,t){"use strict";t.r(e);t(23);var a=t(0),g=t.n(a),n=t(11),o=t.n(n),B=t(79),E=function(A){var e=A.location,t=A.pageResources;return t?g.a.createElement(B.a,Object.assign({location:e,pageResources:t},t.json)):null};E.propTypes={location:o.a.shape({pathname:o.a.string.isRequired}).isRequired},e.default=E},200:function(A){A.exports={data:{site:{siteMetadata:{title:"David Li"}}}}},201:function(A,e){A.exports={blogActive:!0,blogPostsPerPage:6}},202:function(A,e){A.exports="data:image/png;base64,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AGCW9oweAGwfZQwAANQIEAAAoEaAAAAANQIEAACoESAAAECNAAEAAGoECAAAUCNAAACAGgECAADUCBAAAKBGgAAAADUCBAAAqBEgAABAjQABAABqBAgAAFAjQAAAgBoBAgAA1AgQAACgRoAAAAA1AgQAAKgRIAAAQI0AAQAAagQIAABQI0AAAIAaAQIAANQIEAAAoEaAAAAANQIEAACoESAAAECNAAEAAGoECAAAUCNAAACAGgECAADUCBAAAKBGgAAAADUCBAAAqBEgAABAjQABAABqBAgAAFAjQAAAgBoBAgAA1AgQAACgRoAAAAA1AgQAAKgRIAAAQI0AAQAAagQIAABQI0AAAIAaAQIAANQIEAAAoEaAAAAANQIEAACoESAAAECNAAEAAGoECAAAUCNAAACAGgECAADUCBAAAKBGgAAAADUCBAAAqBEgAABAjQABAABqBAgAAFAjQAAAgBoBAgAA1AgQAACgRoAAAAA1AgQAAKgRIAAAQI0AAQAAagQIAABQI0AAAIAaAQIAANQIEAAAoEaAAAAANQIEAACoESAAAECNAAEAAGoECAAAUCNAAACAGgECAADUCBAAAKBGgAAAADUCBAAAqBEgAABAjQABAABqBAgAAFAjQAAAgBoBAgAA1AgQAACgRoAAAAA1AgQAAKgRIAAAQI0AAQAAagQIAABQI0AAAIAaAQIAANQIEAAAoEaAAAAANQIEAACoESAAAECNAAEAAGoECAAAUCNAAACAGgECAADUCBAAAKBGgAAAADUCBAAAqBEgAABAjQABAABqBAgAAFAjQAAAgBoBAgAA1AgQAACgRoAAAAA1AgQAAKgRIAAAQI0AAQAAagQIAABQI0AAAIAaAQIAANQIEAAAoEaAAAAANQIEAACoESAAAECNAAEAAGoECAAAUCNAAACAGgECAADUCBAAAKBGgAAAADUCBAAAqBEgAABAjQABAABqBAgAAFAjQAAAgBoBAgAA1AgQAACgRoAAAAA1AgQAAKgRIAAAQI0AAQAAagQIAABQI0AAAIAaAQIAANQIEAAAoEaAAAAANQIEAACoESAAAEDN/wOG6lPCFVibCQAAAABJRU5ErkJggg=="},203:function(A,e,t){"use strict";var a=t(204),g=t(0),n=t.n(g),o=t(11),B=t.n(o),E=t(209),Q=t.n(E),r=t(195),i="1025518380";function C(A){var e=A.description,t=A.lang,g=A.meta,o=A.keywords,B=A.title;return n.a.createElement(r.b,{query:i,render:function(A){var a=e||A.site.siteMetadata.description;return n.a.createElement(Q.a,{htmlAttributes:{lang:t},title:B,titleTemplate:"%s | "+A.site.siteMetadata.title,meta:[{name:"description",content:a},{property:"og:title",content:B},{property:"og:description",content:a},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:A.site.siteMetadata.author},{name:"twitter:title",content:B},{name:"twitter:description",content:a}].concat(o.length>0?{name:"keywords",content:o.join(", ")}:[]).concat(g)},n.a.createElement("link",{rel:"apple-touch-icon",sizes:"180x180",href:"/apple-touch-icon.png"}),n.a.createElement("link",{rel:"icon",type:"image/png",sizes:"32x32",href:"/favicon-32x32.png"}),n.a.createElement("link",{rel:"icon",type:"image/png",sizes:"16x16",href:"/favicon-16x16.png"}),n.a.createElement("link",{rel:"manifest",href:"/site.webmanifest"}),n.a.createElement("link",{rel:"mask-icon",href:"/safari-pinned-tab.svg",color:"#3198e8"}),n.a.createElement("meta",{name:"apple-mobile-web-app-title",content:"David Li"}),n.a.createElement("meta",{name:"application-name",content:"David Li"}),n.a.createElement("meta",{name:"msapplication-TileColor",content:"#203757"}),n.a.createElement("meta",{name:"theme-color",content:"#ffffff"}))},data:a})}C.defaultProps={description:"",lang:"en",meta:[],keywords:[]},C.propTypes={description:B.a.string,lang:B.a.string,meta:B.a.array,keywords:B.a.arrayOf(B.a.string),title:B.a.string.isRequired},e.a=C},204:function(A){A.exports={data:{site:{siteMetadata:{title:"David Li",description:"A starter blog demonstrating what Gatsby can do.",author:"David Li"}}}}}}]);
//# sourceMappingURL=component---src-pages-about-dinner-club-js-5ce91d7a92c57ee1dd5e.js.map