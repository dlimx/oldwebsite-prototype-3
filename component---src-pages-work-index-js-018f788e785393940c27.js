(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{199:function(A,e,t){"use strict";t.r(e);var a=t(5),g=t.n(a),n=t(19),o=t.n(n),r=t(0),B=t.n(r),Q=t(12),E=t.n(Q),i=t(205),C=t(210),I=(t(201),t(202)),c=function(A){function e(){return A.apply(this,arguments)||this}return g()(e,A),e.prototype.render=function(){var A=this.props.post,e=A.frontmatter.title||A.fields.slug;return B.a.createElement("div",{key:A.fields.slug},B.a.createElement("h3",{style:{marginBottom:16}},B.a.createElement(I.a,{style:{boxShadow:"none"},to:"/work"+A.fields.slug},e)),B.a.createElement("small",null,A.frontmatter.date),B.a.createElement("p",{dangerouslySetInnerHTML:{__html:A.excerpt}}))},e}(r.Component);o()(c,"propTypes",{post:E.a.shape({frontmatter:E.a.shape({title:E.a.string,date:E.a.string.isRequired}).isRequired,fields:E.a.shape({slug:E.a.string.isRequired}).isRequired,excerpt:E.a.string.isRequired}).isRequired});var s=t(212),l=t.n(s);t.d(e,"projectListQuery",function(){return m});var u=function(A){function e(){return A.apply(this,arguments)||this}return g()(e,A),e.prototype.render=function(){var A=this.props.data.allMarkdownRemark.edges;return B.a.createElement(i.a,{right:function(){return B.a.createElement("img",{src:l.a,style:{height:"100vh",width:"100%",objectFit:"cover"}})}},B.a.createElement(C.a,{title:"Work",keywords:["work","gatsby","javascript","react"]}),B.a.createElement("h1",null,"Work"),B.a.createElement("p",null,"I am a software engineer currently at"," ",B.a.createElement("a",{href:"https://quartermaster.com"},"Quartermaster"),"."),B.a.createElement("p",null,"I graduated ",B.a.createElement("a",{href:"https://mcgill.ca"},"McGill University")," with a degree in Honours Biochemistry. I had initially planned on pursuing medicine - but I found that my passions lie with software."),A.map(function(A){var e=A.node;return B.a.createElement(c,{post:e,key:e.fields.slug})}))},e}(r.Component);o()(u,"propTypes",{data:E.a.shape({}).isRequired});e.default=u;var m="1507152577"},201:function(A,e,t){"use strict";t.d(e,"b",function(){return i});var a=t(0),g=t.n(a),n=t(12),o=t.n(n),r=t(63),B=t.n(r);t.d(e,"a",function(){return B.a}),t.d(e,"c",function(){return r.withPrefix});t(203),t(9).default.enqueue;var Q=g.a.createContext({});function E(A){var e=A.staticQueryData,t=A.data,a=A.query,n=A.render,o=t?t.data:e[a]&&e[a].data;return g.a.createElement(g.a.Fragment,null,o&&n(o),!o&&g.a.createElement("div",null,"Loading (StaticQuery)"))}var i=function(A){var e=A.data,t=A.query,a=A.render,n=A.children;return g.a.createElement(Q.Consumer,null,function(A){return g.a.createElement(E,{data:e,query:t,render:a||n,staticQueryData:A})})};i.propTypes={data:o.a.object,query:o.a.string.isRequired,render:o.a.func,children:o.a.func}},202:function(A,e,t){"use strict";t.d(e,"a",function(){return C});var a=t(5),g=t.n(a),n=t(19),o=t.n(n),r=t(0),B=t.n(r),Q=t(201),E=t(12),i=t.n(E),C=function(A){function e(){return A.apply(this,arguments)||this}return g()(e,A),e.prototype.render=function(){return B.a.createElement(Q.a,this.props)},e}(r.Component);o()(C,"propTypes",{animation:i.a.string,to:i.a.string.isRequired})},203:function(A,e,t){var a;A.exports=(a=t(206))&&a.default||a},205:function(A,e,t){"use strict";t(23);var a=t(5),g=t.n(a),n=t(207),o=t(0),r=t.n(o),B=t(201),Q=(t(123),t(124),t(15)),E=t.n(Q),i=t(19),C=t.n(i),I=t(12),c=t.n(I),s=t(213),l=t(204),u=t.n(l),m=(t(214),t(187)),d=t.n(m),N=t(208),p=t.n(N),R=t(209),f=t.n(R),k=t(202),y=function(){return r.a.createElement("div",{className:u()(d.a.header)},r.a.createElement("div",{className:u()(d.a.headerLinks)},r.a.createElement(k.a,{to:"/",className:""+d.a.headerImage},r.a.createElement("img",{src:f.a,alt:"logo",className:""+d.a.headerImage})),r.a.createElement("div",{className:d.a.linkContainer},r.a.createElement(k.a,{to:"/",className:u()("header-link",d.a.link),activeClassName:d.a.linkActive},"About"),p.a.blogActive&&r.a.createElement(k.a,{to:"/stories/",className:u()("header-link",d.a.link),activeClassName:d.a.linkActive},"Stories"),r.a.createElement(k.a,{to:"/work/",className:u()("header-link",d.a.link),activeClassName:d.a.linkActive},"Work"))))},j=t(64),D=t.n(j),S=t(188),G=t.n(S),h=function(A){function e(){for(var e,t=arguments.length,a=new Array(t),g=0;g<t;g++)a[g]=arguments[g];return e=A.call.apply(A,[this].concat(a))||this,C()(E()(E()(e)),"defaultOffset",D.a.headerPaddingValue),e}return g()(e,A),e.prototype.render=function(){var A=this.props,e=A.data,t=A.children,a=A.windowContext,g=A.right,n=A.fixedRight,o=a.width<Number.parseInt(D.a.mdValue,10),B=!o&&!!g;return r.a.createElement("div",{className:u()(B&&"layout--grid-row")},r.a.createElement("div",{style:{width:B?"70%":"100%",paddingLeft:B?"5%":0}},r.a.createElement("div",{className:G.a.placeholder}),r.a.createElement(s.StickyContainer,null,r.a.createElement(s.Sticky,{topOffset:0},function(A){var t=A.style;return r.a.createElement("header",{style:Object.assign({},t)},r.a.createElement("div",{style:{width:o||g?"100%":"70%",paddingLeft:o||g?0:"5%"}},r.a.createElement("div",{className:"main--container"},r.a.createElement(y,{siteTitle:e.site.siteMetadata.title}))))}),r.a.createElement("div",{className:"main--container"},r.a.createElement("div",{className:"layout--container"},t)))),B&&r.a.createElement("div",{className:G.a.rightPlaceholder},r.a.createElement("div",{className:G.a.rightContainer,style:{position:n?"fixed":"relative"}},g instanceof Function?g():g)))},e}(o.Component);C()(h,"propTypes",{data:c.a.object.isRequired,children:c.a.node.isRequired,right:c.a.oneOfType([c.a.node,c.a.func]),fixedRight:c.a.bool,windowContext:c.a.shape({width:c.a.number.isRequired,scrollY:c.a.number.isRequired}).isRequired}),C()(h,"defaultProps",{right:null,fixedRight:!0});var U=h,q=t(81),J=function(A){function e(){return A.apply(this,arguments)||this}return g()(e,A),e.prototype.render=function(){var A=this;return r.a.createElement(B.b,{query:"615262718",render:function(e){return r.a.createElement(q.b.Consumer,null,function(t){return r.a.createElement(U,Object.assign({},A.props,{data:e,windowContext:t}))})},data:n})},e}(o.Component);e.a=J},206:function(A,e,t){"use strict";t.r(e);t(23);var a=t(0),g=t.n(a),n=t(12),o=t.n(n),r=t(82),B=function(A){var e=A.location,t=A.pageResources;return t?g.a.createElement(r.a,Object.assign({location:e,pageResources:t},t.json)):null};B.propTypes={location:o.a.shape({pathname:o.a.string.isRequired}).isRequired},e.default=B},207:function(A){A.exports={data:{site:{siteMetadata:{title:"David Li"}}}}},208:function(A,e){A.exports={blogActive:!0,blogPostsPerPage:6,headerHeight:200}},209:function(A,e){A.exports="data:image/png;base64,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AGCW9oweAGwfZQwAANQIEAAAoEaAAAAANQIEAACoESAAAECNAAEAAGoECAAAUCNAAACAGgECAADUCBAAAKBGgAAAADUCBAAAqBEgAABAjQABAABqBAgAAFAjQAAAgBoBAgAA1AgQAACgRoAAAAA1AgQAAKgRIAAAQI0AAQAAagQIAABQI0AAAIAaAQIAANQIEAAAoEaAAAAANQIEAACoESAAAECNAAEAAGoECAAAUCNAAACAGgECAADUCBAAAKBGgAAAADUCBAAAqBEgAABAjQABAABqBAgAAFAjQAAAgBoBAgAA1AgQAACgRoAAAAA1AgQAAKgRIAAAQI0AAQAAagQIAABQI0AAAIAaAQIAANQIEAAAoEaAAAAANQIEAACoESAAAECNAAEAAGoECAAAUCNAAACAGgECAADUCBAAAKBGgAAAADUCBAAAqBEgAABAjQABAABqBAgAAFAjQAAAgBoBAgAA1AgQAACgRoAAAAA1AgQAAKgRIAAAQI0AAQAAagQIAABQI0AAAIAaAQIAANQIEAAAoEaAAAAANQIEAACoESAAAECNAAEAAGoECAAAUCNAAACAGgECAADUCBAAAKBGgAAAADUCBAAAqBEgAABAjQABAABqBAgAAFAjQAAAgBoBAgAA1AgQAACgRoAAAAA1AgQAAKgRIAAAQI0AAQAAagQIAABQI0AAAIAaAQIAANQIEAAAoEaAAAAANQIEAACoESAAAECNAAEAAGoECAAAUCNAAACAGgECAADUCBAAAKBGgAAAADUCBAAAqBEgAABAjQABAABqBAgAAFAjQAAAgBoBAgAA1AgQAACgRoAAAAA1AgQAAKgRIAAAQI0AAQAAagQIAABQI0AAAIAaAQIAANQIEAAAoEaAAAAANQIEAACoESAAAECNAAEAAGoECAAAUCNAAACAGgECAADUCBAAAKBGgAAAADUCBAAAqBEgAABAjQABAABqBAgAAFAjQAAAgBoBAgAA1AgQAACgRoAAAAA1AgQAAKgRIAAAQI0AAQAAagQIAABQI0AAAIAaAQIAANQIEAAAoEaAAAAANQIEAACoESAAAEDN/wOG6lPCFVibCQAAAABJRU5ErkJggg=="},210:function(A,e,t){"use strict";var a=t(211),g=t(0),n=t.n(g),o=t(12),r=t.n(o),B=t(215),Q=t.n(B),E=t(201),i="1025518380";function C(A){var e=A.description,t=A.lang,g=A.meta,o=A.keywords,r=A.title;return n.a.createElement(E.b,{query:i,render:function(A){var a=e||A.site.siteMetadata.description;return n.a.createElement(Q.a,{htmlAttributes:{lang:t},title:r,titleTemplate:"%s | "+A.site.siteMetadata.title,meta:[{name:"description",content:a},{property:"og:title",content:r},{property:"og:description",content:a},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:A.site.siteMetadata.author},{name:"twitter:title",content:r},{name:"twitter:description",content:a}].concat(o.length>0?{name:"keywords",content:o.join(", ")}:[]).concat(g)},n.a.createElement("link",{rel:"apple-touch-icon",sizes:"180x180",href:"/apple-touch-icon.png"}),n.a.createElement("link",{rel:"icon",type:"image/png",sizes:"32x32",href:"/favicon-32x32.png"}),n.a.createElement("link",{rel:"icon",type:"image/png",sizes:"16x16",href:"/favicon-16x16.png"}),n.a.createElement("link",{rel:"manifest",href:"/site.webmanifest"}),n.a.createElement("link",{rel:"mask-icon",href:"/safari-pinned-tab.svg",color:"#3198e8"}),n.a.createElement("meta",{name:"apple-mobile-web-app-title",content:"David Li"}),n.a.createElement("meta",{name:"application-name",content:"David Li"}),n.a.createElement("meta",{name:"msapplication-TileColor",content:"#203757"}),n.a.createElement("meta",{name:"theme-color",content:"#ffffff"}))},data:a})}C.defaultProps={description:"",lang:"en",meta:[],keywords:[]},C.propTypes={description:r.a.string,lang:r.a.string,meta:r.a.array,keywords:r.a.arrayOf(r.a.string),title:r.a.string.isRequired},e.a=C},211:function(A){A.exports={data:{site:{siteMetadata:{title:"David Li",description:"A starter blog demonstrating what Gatsby can do.",author:"David Li"}}}}},212:function(A,e,t){A.exports=t.p+"static/IMG_2223-ConvertImage-40d20106e60d0005f640b72961c12a44.jpg"}}]);
//# sourceMappingURL=component---src-pages-work-index-js-018f788e785393940c27.js.map