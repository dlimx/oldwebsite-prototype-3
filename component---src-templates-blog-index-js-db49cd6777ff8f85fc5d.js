(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{190:function(e,t,n){"use strict";n.r(t),n.d(t,"blogIndexQuery",function(){return x});var a=n(5),r=n.n(a),i=n(19),s=n.n(i),o=n(0),l=n.n(o),p=n(12),u=n.n(p),c=n(226),d=n(205),g=n(210),m=n(223),f=n(224),h=n(217),y=n.n(h),E=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props,t=e.data,n=e.location,a=e.pageContext,r=t.site.siteMetadata.title,i=t.allMarkdownRemark.edges;return l.a.createElement(d.a,{right:l.a.createElement("img",{src:y.a,style:{height:"100vh",width:"100%",objectFit:"cover"}}),location:n,title:r},l.a.createElement(g.a,{title:"Stories",keywords:["blog","gatsby","javascript","react"]}),l.a.createElement(c.a,null),i.map(function(e){var t=e.node;return l.a.createElement(f.a,{post:t,key:t.fields.slug})}),l.a.createElement(m.a,{pageContext:a}))},t}(l.a.Component);s()(E,"propTypes",{location:u.a.shape({}).isRequired,data:u.a.shape({}).isRequired,pageContext:u.a.shape({}).isRequired}),t.default=E;var x="4186227133"},223:function(e,t,n){"use strict";n.d(t,"a",function(){return d});n(83);var a=n(5),r=n.n(a),i=n(19),s=n.n(i),o=n(0),l=n.n(o),p=(n(201),n(12)),u=n.n(p),c=n(202),d=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props.pageContext,t=e.currentPage,n=1===t,a=t===e.numPages,r=t-1==1?"/":(t-1).toString(),i=(t+1).toString();return l.a.createElement("ul",{style:{display:"flex",flexWrap:"wrap",justifyContent:"space-between",listStyle:"none",padding:0}},l.a.createElement("li",null,!n&&l.a.createElement(c.a,{to:"/stories"+r,rel:"prev"},"← Previous Page")),l.a.createElement("li",null,!a&&l.a.createElement(c.a,{to:"/stories/"+i,rel:"next"},"Next Page →")))},t}(o.Component);s()(d,"propTypes",{pageContext:u.a.shape({}).isRequired})},224:function(e,t,n){"use strict";n.d(t,"a",function(){return m});var a=n(5),r=n.n(a),i=n(19),s=n.n(i),o=n(0),l=n.n(o),p=(n(201),n(12)),u=n.n(p),c=n(64),d=n.n(c),g=n(202),m=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props.post,t=e.frontmatter.title||e.fields.slug;return l.a.createElement(g.a,{to:"/stories"+e.fields.slug,key:e.fields.slug},l.a.createElement("h3",{style:{marginTop:16,marginBottom:0,color:d.a.colorTextHeader}},t),l.a.createElement("small",null,e.frontmatter.date),l.a.createElement("p",{className:"link-text",dangerouslySetInnerHTML:{__html:e.excerpt},style:{paddingBottom:32}}))},t}(o.Component);s()(m,"propTypes",{post:u.a.shape({frontmatter:u.a.shape({title:u.a.string,date:u.a.string.isRequired}).isRequired,fields:u.a.shape({slug:u.a.string.isRequired}).isRequired,excerpt:u.a.string.isRequired}).isRequired})}}]);
//# sourceMappingURL=component---src-templates-blog-index-js-db49cd6777ff8f85fc5d.js.map