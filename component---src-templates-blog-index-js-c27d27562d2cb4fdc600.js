(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{183:function(e,t,n){"use strict";n.r(t),n.d(t,"blogIndexQuery",function(){return h});var a=n(6),r=n.n(a),i=n(60),s=n.n(i),o=n(0),l=n.n(o),p=n(14),u=n.n(p),c=n(208),d=n(196),m=n(200),f=n(205),g=n(206),y=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props,t=e.data,n=e.location,a=e.pageContext,r=t.site.siteMetadata.title,i=t.allMarkdownRemark.edges;return l.a.createElement(d.a,{location:n,title:r},l.a.createElement(m.a,{title:"Stories",keywords:["blog","gatsby","javascript","react"]}),l.a.createElement(c.a,null),i.map(function(e){var t=e.node;return l.a.createElement(g.a,{post:t,key:t.fields.slug})}),l.a.createElement(f.a,{pageContext:a}))},t}(l.a.Component);s()(y,"propTypes",{location:u.a.shape({}).isRequired,data:u.a.shape({}).isRequired,pageContext:u.a.shape({}).isRequired}),t.default=y;var h="4186227133"},205:function(e,t,n){"use strict";n.d(t,"a",function(){return d});n(79);var a=n(6),r=n.n(a),i=n(60),s=n.n(i),o=n(0),l=n.n(o),p=n(193),u=n(14),c=n.n(u),d=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props.pageContext,t=e.currentPage,n=1===t,a=t===e.numPages,r=t-1==1?"/":(t-1).toString(),i=(t+1).toString();return l.a.createElement("ul",{style:{display:"flex",flexWrap:"wrap",justifyContent:"space-between",listStyle:"none",padding:0}},l.a.createElement("li",null,!n&&l.a.createElement(p.a,{to:"/stories"+r,rel:"prev"},"← Previous Page")),l.a.createElement("li",null,!a&&l.a.createElement(p.a,{to:"/stories/"+i,rel:"next"},"Next Page →")))},t}(o.Component);s()(d,"propTypes",{pageContext:c.a.shape({}).isRequired})},206:function(e,t,n){"use strict";n.d(t,"a",function(){return f});var a=n(6),r=n.n(a),i=n(60),s=n.n(i),o=n(0),l=n.n(o),p=n(193),u=n(14),c=n.n(u),d=n(180),m=n.n(d),f=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props.post,t=e.frontmatter.title||e.fields.slug;return l.a.createElement(p.a,{to:"/stories"+e.fields.slug,key:e.fields.slug},l.a.createElement("h3",{style:{marginTop:16,marginBottom:0,color:m.a.colorSecondary}},t),l.a.createElement("small",null,e.frontmatter.date),l.a.createElement("p",{className:"link-text",dangerouslySetInnerHTML:{__html:e.excerpt}}))},t}(o.Component);s()(f,"propTypes",{post:c.a.shape({frontmatter:c.a.shape({title:c.a.string,date:c.a.string.isRequired}).isRequired,fields:c.a.shape({slug:c.a.string.isRequired}).isRequired,excerpt:c.a.string.isRequired}).isRequired})}}]);
//# sourceMappingURL=component---src-templates-blog-index-js-c27d27562d2cb4fdc600.js.map