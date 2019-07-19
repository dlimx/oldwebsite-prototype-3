(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{192:function(A,e,a){"use strict";a.r(e);var t=a(6),g=a.n(t),n=a(0),o=a.n(n),B=(a(193),a(14)),E=a.n(B),Q=a(196),r=a(200),C=function(A){function e(){return A.apply(this,arguments)||this}return g()(e,A),e.prototype.render=function(){return o.a.createElement("div",null,o.a.createElement("h3",null,this.props.title),o.a.createElement("img",{className:"img",src:this.props.image}))},e}(o.a.Component);C.propTypes={title:E.a.string.isRequired,image:E.a.string.isRequired};var i=C;a.d(e,"dinnerPhotoQuery",function(){return c});var I=function(A){function e(){return A.apply(this,arguments)||this}return g()(e,A),e.prototype.render=function(){return o.a.createElement(Q.a,null,o.a.createElement(r.a,{title:"Dinner Club",keywords:["work","gatsby","javascript","react"]}),o.a.createElement("div",null,o.a.createElement("h2",null,"Dinner Club"),o.a.createElement("blockquote",null,"Every week, my fellow cooks and I each invite one person. The only rule? It has to be someone the other two don't know."),o.a.createElement("blockquote",null,"Themed, home-cooked meals, and warm, delightful friendship. No strings attached, and anyone is welcome to join."),o.a.createElement("div",null,o.a.createElement("a",{href:"mailto:david.minxiao.li@gmail.com",target:"new"},o.a.createElement("span",null,"Email me and come for dinner!")))),o.a.createElement("div",null,o.a.createElement(i,{title:"Cool for the Summer",image:"https://imgur.com/rKImiy8.jpg"}),o.a.createElement(i,{title:"Formal",image:"https://imgur.com/j3GKFUa.jpg"}),o.a.createElement(i,{title:"Taco (Sundays)",image:"https://imgur.com/vSsydoo.jpg"}),o.a.createElement(i,{title:"New Year New Food",image:"https://imgur.com/tJVbDZl.jpg"}),o.a.createElement(i,{title:"A Christmas Special",image:"https://imgur.com/XeLb8w5.jpg"}),o.a.createElement(i,{title:"All-American Edition",image:"https://imgur.com/7XAO4J0.jpg"}),o.a.createElement(i,{title:"Fall Eats",image:"https://imgur.com/QFeTAtD.jpg"}),o.a.createElement(i,{title:"The First",image:"https://imgur.com/7SEMuko.jpg"})))},e}(n.Component),c=(e.default=I,"1521824853")},193:function(A,e,a){"use strict";a.d(e,"b",function(){return C});var t=a(0),g=a.n(t),n=a(14),o=a.n(n),B=a(59),E=a.n(B);a.d(e,"a",function(){return E.a}),a.d(e,"c",function(){return B.withPrefix});a(194),a(8).default.enqueue;var Q=g.a.createContext({});function r(A){var e=A.staticQueryData,a=A.data,t=A.query,n=A.render,o=a?a.data:e[t]&&e[t].data;return g.a.createElement(g.a.Fragment,null,o&&n(o),!o&&g.a.createElement("div",null,"Loading (StaticQuery)"))}var C=function(A){var e=A.data,a=A.query,t=A.render,n=A.children;return g.a.createElement(Q.Consumer,null,function(A){return g.a.createElement(r,{data:e,query:a,render:t||n,staticQueryData:A})})};C.propTypes={data:o.a.object,query:o.a.string.isRequired,render:o.a.func,children:o.a.func}},194:function(A,e,a){var t;A.exports=(t=a(197))&&t.default||t},195:function(A,e){A.exports={blogActive:!0,blogPostsPerPage:6}},196:function(A,e,a){"use strict";var t=a(198),g=a(0),n=a.n(g),o=a(14),B=a.n(o),E=a(193),Q=(a(180),a(202),a(195)),r=a.n(Q),C=a(181),i=a.n(C),I=a(199),c=a.n(I),l=(a(26),a(203)),m=function(A){var e=A.name,a=l["Io"+e];return e&&a?n.a.createElement(a,A):(console.warn("No Icon of "+e+" found"),null)};m.propTypes={name:B.a.string.isRequired};var s=m,N=function(){return n.a.createElement("div",{className:""+i.a.container},n.a.createElement("div",{className:""+i.a.header},n.a.createElement("div",{className:""+i.a.headerLinks},n.a.createElement(E.a,{to:"/"},n.a.createElement("img",{src:c.a,alt:"logo",className:""+i.a.headerImage})),n.a.createElement("div",{className:i.a.linkContainer},n.a.createElement(E.a,{to:"/",className:i.a.link,activeClassName:i.a.linkActive},"About"),r.a.blogActive&&n.a.createElement(E.a,{to:"/stories/",className:i.a.link,activeClassName:i.a.linkActive},"Stories"),n.a.createElement(E.a,{to:"/work/",className:i.a.link,activeClassName:i.a.linkActive},"Work"))),n.a.createElement("div",{className:""+i.a.headerContent},n.a.createElement("a",{className:""+i.a.headerContentIcon,title:"Email",href:"mailto:me@davidli.io?subject=Hello!"},n.a.createElement(s,{size:24,name:"MdMail"})),n.a.createElement("a",{className:""+i.a.headerContentIcon,title:"LinkedIn",href:"https://www.linkedin.com/in/dlimx/"},n.a.createElement(s,{size:26,name:"LogoLinkedin"})),n.a.createElement("a",{className:""+i.a.headerContentIcon,title:"Instagram",href:"https://www.instagram.com/dli.mx/"},n.a.createElement(s,{size:26,name:"LogoInstagram"})))))},u=function(A){var e=A.children;return n.a.createElement(E.b,{query:"755544856",render:function(A){return n.a.createElement("div",{className:"layout--grid-row main--container"},n.a.createElement(N,{siteTitle:A.site.siteMetadata.title}),n.a.createElement("div",{className:"layout--container"},e))},data:t})};u.propTypes={children:B.a.node.isRequired};e.a=u},197:function(A,e,a){"use strict";a.r(e);a(21);var t=a(0),g=a.n(t),n=a(14),o=a.n(n),B=a(78),E=function(A){var e=A.location,a=A.pageResources;return a?g.a.createElement(B.a,Object.assign({location:e,pageResources:a},a.json)):null};E.propTypes={location:o.a.shape({pathname:o.a.string.isRequired}).isRequired},e.default=E},198:function(A){A.exports={data:{site:{siteMetadata:{title:"David Li"}}}}},199:function(A,e){A.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAyAAAAMgCAYAAADbcAZoAAABG2lUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4KPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iWE1QIENvcmUgNS41LjAiPgogPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4KICA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIi8+CiA8L3JkZjpSREY+CjwveDp4bXBtZXRhPgo8P3hwYWNrZXQgZW5kPSJyIj8+Gkqr6gAAAYFpQ0NQc1JHQiBJRUM2MTk2Ni0yLjEAACiRdZHPK0RRFMc/M0MmP6JYWFhMwmrIj4iNMpNQk6Yxyq/Nm2t+qJnxem8mTbbKdooSG78W/AVslbVSREo2NtbEBj3neWokc2733M/93nNO954L7mhaZcyKbshkc0ZkLOCbmZ3zVT3iogLw0q8pUx8Jh0OUtbcbiRa76rRrlY/712oW46YCl1d4WOlGTnhcOLSS023eFG5SKW1R+FjYb8gFha9tPebwk81Jhz9sNqKRILgbhH3JXxz7xSplZITl5bRl0nn1cx/7JbXx7PSUrK0yWzCJMEYAHxOMEmSAHobED9BJL12yo0x+93f+JMuSq8TrFDBYIkmKHH5R81I9LmtC9LiMNAW7/3/7aib6ep3qtQGofLCsl3ao2oDPomW971vW5wF47uEsW8pf3oPBV9GLJa1tF+rX4OS8pMW24HQdmu90zdC+JY9MdyIBz0dQNwuNl1A97/Ts55zDW4iuylddwPYOdEh8/cIXAcdnuGCaRvYAAAAJcEhZcwAACxMAAAsTAQCanBgAABjaSURBVHic7d19qF/3QcfxT5LbZs36bFsn7bSztA4sWydjuv1jO4dYu2orVBzqnAgO8RHpxL9k/qNMhkO0iHOID0NxPqybTDvphhPnnI+Tqq0Pc4PidG3Wrm2apEmb6x/nhoWQPqS9+XzPOff1gh8Noc39EGi475zzPWfX5re9fTMAAAAFu0cPAAAAdg4BAgAA1AgQAACgRoAAAAA1AgQAAKgRIAAAQI0AAQAAagQIAABQI0AAAIAaAQIAANQIEAAAoEaAAAAANQIEAACoESAAAECNAAEAAGoECAAAUCNAAACAGgECAADUCBAAAKBGgAAAADUCBAAAqBEgAABAjQABAABqBAgAAFAjQAAAgBoBAgAA1AgQAACgRoAAAAA1AgQAAKgRIAAAQI0AAQAAagQIAABQI0AAAIAaAQIAANQIEAAAoEaAAAAANQIEAACoESAAAECNAAEAAGoECAAAUCNAAACAGgECAADUCBAAAKBGgAAAADUCBAAAqBEgAABAjQABAABqBAgAAFAjQAAAgBoBAgAA1AgQAACgRoAAAAA1AgQAAKgRIAAAQI0AAQAAagQIAABQI0AAAIAaAQIAANQIEAAAoEaAAAAANQIEAACoESAAAECNAAEAAGoECAAAUCNAAACAGgECAADUCBAAAKBGgAAAADUCBAAAqBEgAABAjQABAABqBAgAAFAjQAAAgBoBAgAA1AgQAACgRoAAAAA1AgQAAKgRIAAAQI0AAQAAagQIAABQI0AAAIAaAQIAANQIEAAAoEaAAAAANQIEAACoESAAAECNAAEAAGoECAAAUCNAAACAGgECAADUCBAAAKBGgAAAADUCBAAAqBEgAABAjQABAABqBAgAAFAjQAAAgBoBAgAA1AgQAACgRoAAAAA1AgQAAKgRIAAAQI0AAQAAagQIAABQI0AAAIAaAQIAANQIEAAAoEaAAAAANQIEAACoESAAAECNAAEAAGoECAAAUCNAAACAGgECAADUCBAAAKBGgAAAADUCBAAAqBEgAABAjQABAABqBAgAAFAjQAAAgBoBAgAA1AgQAACgRoAAAAA1AgQAAKgRIAAAQI0AAQAAagQIAABQI0AAAIAaAQIAANQIEAAAoEaAAAAANQIEAACoESAAAECNAAEAAGoECAAAUCNAAACAGgECAADUCBAAAKBGgAAAADUCBAAAqBEgAABAjQABAABqBAgAAFAjQAAAgBoBAgAA1AgQAACgRoAAAAA1AgQAAKjZGD0AttyX5GeTbI4eQi5MckeSPaOHAADrI0CYi79N8v4kT4weQjaSvCPJBaOHAADr4xYs5uSs0QNI4s8FAOAM8o0GAABQI0AAAIAaAQIAANQIEAAAoEaAAAAANQIEAACoESAAAECNAAEAAGoECAAAUCNAAACAGgECAADUCBAAAKBGgAAAADUCBAAAqBEgAABAjQABAABqBAgAAFAjQAAAgBoBAgAA1AgQAACgRoAAAAA1AgQAAKgRIAAAQI0AAQAAagQIAABQI0AAAIAaAQIAANQIEAAAoEaAAAAANQIEAACoESAAAECNAAEAAGoECAAAUCNAAACAGgECAADUCBAAAKBGgAAAADUCBAAAqBEgAABAjQABAABqBAgAAFAjQAAAgBoBAgAA1AgQAACgRoAAAAA1AgQAAKgRIAAAQI0AAQAAagQIAABQI0AAAIAaAQIAANQIEAAAoEaAAAAANQIEAACoESAAAECNAAEAAGoECAAAUCNAAACAGgECAADUCBAAAKBGgAAAADUCBAAAqBEgAABAjQABAABqBAgAAFAjQAAAgBoBAgAA1AgQAACgRoAAAAA1AgQAAKgRIAAAQM3G6AEAAAtwOMn+JA9ufY7/eDPJpUku2/rn8c/ZY2bC/AkQAIDJZpJPJ/lwkg8m+WySh5I8luRokhdl+t5pV5JjSY5s/TdnJ9mz9eOjSZ7Y+rkLklyc5NoktyR5Q6ZQgR1NgAAAO9nDST6a5ANJ7kpyIFNgHDzFv3uqn0umEDnZ4a3P55Pcu/VrH0ny0kwxclOS18WVEnYgAQIA7DSfS3JHkj9O8t+Zrmw8eoa/5mNb//yvJO9K8u5MQfL1Sb4nyZsjRtghHEIHAHaKB5L8SJKrkrwzyX2ZIuBMx8fJntr6moeTfCzJTyS5IslvJHmyvAXqBAgAsHYPJ3lbkiuTvCfTN/6num1qlMczHWj/8SRfleR3M50xgVUSIADAWj2a5Gcynbv4lSSHMh0Qn6sDmW4Pe2umqzTvz3SwHVZFgAAAa/TeTLc1vTPTFYbDY+eclgOZnsD15iRfm+Q/hq6BbSZAAIA1OZbk9kxXER7LdNVjqQ4k+fckr870aGBYBQECAKzF40m+Ncmv5ukfmbs0xzKF1K1JfjFuyWIFBAgAsAb3J3lVpqdKrSU+TnQo03mW7828DtDDaRMgAMDSfTLJKzO902NJZz1O1+OZ3l3y2kxPzYJFEiAAwJL9QZIbMj1q96nBWxoOJbkn0+H0fxu8BZ4XAQIALNUnk3xfln3Q/Pk4mukKyA1J9g/eAqdNgAAAS/RAkpuy8+LjRF9M8sZ4ezoLI0AAgKV5MsnNmV40uJMdyXQ71o+NHgKnQ4AAAEtze5J/yXQr0k53MMlvbX1gEQQIALAkf5jk17POR+0+XweT/FCSvx89BJ4LAQIALMW9Sd4S8XEqh5LcmOlsDMyaAAEAluBYkm+P+HgmjyR50+gR8GwECACwBHcm+d8km6OHzNjRJH+T6fHEMFsCBACYu80kP53kwOghC3Ao0yF9mC0BAgDM3YcyXf3g2W0m+ccknxg9BJ6OAAEA5mwzyU/F1Y/TcTCugjBjAgQAmLMPJ7l/9IgF+lSSvx49Ak5FgAAAc7WZ5G1x9eP5OJjkJ0ePgFMRIADAXP1Fks+MHrFg9yT5+OgRcDIBAgDM1e/Eez9eiENJ3jt6BJxMgAAAc3VXvPfjhdjM9AQxmBUBAgDM0f1JHh49YgUeSPI/o0fAiQQIADBHH0myMXrECpyV5O7RI+BEAgQAmKMPxtOvtsOBJHeOHgEnEiAAwNxsJvno6BEr8pE4S8OMCBAAYG7uTfLk6BErspnpkbwwCwIEAJibu5McGz1iRY5meqM8zIIAAQDm5uOZ3mHB9ngiyV+OHgHHCRAAYG7+b/SAFfr86AFwnAABAObmwdEDVmj/6AFwnAABAObmodEDVshLHZkNAQIAzM2jowes0GPxKF5mQoAAAHNyNNOhabbX7kwRAsMJEABgTr6QZO/oESu0N86BMBMCBACYk/1Jzho9YoX2xOF+ZkKAAABzsj/JrtEjVkqAMAsCBACYE+cUzoxjcbifmRAgAMCcXDR6wErtTnLx6BGQCBAAYF4uyfS39WyvzSSXjh4BiQABAOblkkyP4mV7PRUBwkwIEABgTi5KcmT0iBU6nCnuYDgBAgDMyZ4k+0aPWKHd8fvKTAgQAGBuLhg9YIXOHz0AjhMgAMDceBLW9vMELGZDgAAAc3PZ6AEr5AA6syFAAIC5uWL0gBW6fPQAOE6AAABz8/ok544esSIvTvKG0SPgOAECAMzNNyV5cvSIFTmW5JtHj4DjBAgAMDdXxEH07XRBkitHj4DjBAgAMEc3Jtk1esQK7Mr0ewmzIUAAgDm6Kcl5o0eswHlJbh49Ak4kQACAObo+yeHRI1bgcJIbRo+AEwkQAGCOLo5zC9vhqiQXjh4BJxIgAMBcvTHJntEjFmwjyS2jR8DJBAgAMFffn+Ts0SMWbCPJW0aPgJMJEABgrq5N8o3x/crzsZHpIP81o4fAyfwPDQDM2c8n2Tt6xAJtZPq9g9kRIADAnF2X5LXxTpDTsZHp0btXjx4CpyJAAIC5e0eSc0aPWBBXP5g1AQIAzN2rtz6ugjy740++umr0EHg6AgQAWAJXQZ6bjSQ/N3oEPBMBAgAswTdkOgvisbxP75wk353kZaOHwDMRIADAUvx+vNX76Wxkuu3qjtFD4NkIEABgKb4syZ/FrVincm6Su+KRxSyAAAEAluTrkvxykn2jh8zIOUk+lOTy0UPguRAgAMDS/ECS2+JKSDKF2LuSvG70EHiuBAgAsES/luSrk+wZPWSgfUm+M8lbRw+B0yFAAIAl2pvpPMi5o4cMcnaSazKFGCyKAAEAluqlST6W5JIkZw3e0rQvyXVJ7o7HErNAAgQAWLJXJrknyddkZ5wJ2ZfkTUn+KtNTwWBxBAgAsHQvSfJ3Sb4lyYsHbzmTzknyC0nek511xYeVESAAwBq8KMkfJbk963tE7+4k5yf50yQ/PHgLvGACBABYi11J3p7kN7OeCNmb5CuT/FOS68dOge0hQACAtbkt0xmJV2S5T8nayHRV57uS/HOmRw7DKggQAGCNXpXkU0nel+lxtUsJkT2ZwuPWJP+a6WrO+SMHwXYTIADAWu1KcmOS+5L8dpIrM98Q2Z3pkPmNmW63el9c9WClBAgAsHa7Ml1R+HSSdye5PMl5Wz8/2lmZzqtcn+QTSf4kyctHDoIzbWP0AACAkt2Z3qFxW6a3qH8g05OlHs5069PjpR3nJzmc5Ook37H1ua70tWE4AQIA7DQbSW7e+iTJZ5P8eZI7M71ZfU+SJ5Ic2aavd06mqy37Mt1idUuS1ye5cJt+fVgUAQIA7HRXJvnBrc9TSf4hyd1J/jPJ55I8kOQLSR5JciDT909786Vb2Z/KFCtPZjpjclGmt5S/JNPtXtdmekni1ZnHbV8wlAABAPiSPUles/U5lWNJvphkf5IHk2wmuTTJZZmuaAgMeBYCBADgudud5OKtzzWDt8AieQoWAABQI0AAAIAaAQIAANQIEAAAoEaAAAAANQIEAACoESAAAECNAAEAAGoECAAAUCNAAACAGgECAADUCBAAAKBGgAAAADUCBAAAqBEgAABAjQABAABqBAgAAFAjQAAAgBoBAgAA1AgQAACgRoAAAAA1AgQAAKgRIAAAQI0AAQAAagQIAABQI0AAAIAaAQIAANQIEAAAoEaAAAAANQIEAACoESAAAECNAAEAAGo2Rg8AAHgGm0nuTXJk9JAF+vIkXzF6BJxMgAAAc/aZJK9Icu7oIQvzZJKXJbln9BA4mQABAObsaJJ9SR4ZPWSBDo8eAKfiDAgAAFAjQAAAgBoBAgAA1AgQAACgRoAAAAA1AgQAAKgRIAAAQI0AAQAAagQIAABQI0AAAIAaAQIAANQIEAAAoEaAAAAANQIEAACoESAAAECNAAEAAGoECAAAUCNAAACAGgECAADUCBAAAKBGgAAAADUCBAAAqBEgAABAjQABAABqBAgAAFAjQAAAgBoBAgAA1AgQAACgRoAAAAA1AgQAAKgRIAAAQI0AAQAAagQIAABQI0AAAIAaAQIAANQIEAAAoEaAAAAANQIEAACoESAAAECNAAEAAGoECAAAUCNAAACAGgECAADUCBAAAKBGgAAAADUCBAAAqBEgAABAjQABAABqBAgAAFAjQAAAgBoBAgAA1AgQAACgRoAAAAA1AgQAAKgRIAAAQI0AAQAAagQIAABQI0AAAIAaAQIAANQIEAAAoEaAAAAANQIEAACoESAAAECNAAEAAGoECAAAUCNAAACAGgECAADUCBAAAKBGgAAAADUCBAAAqBEgAABAjQABAABqBAgAAFAjQAAAgBoBAgAA1AgQAACgRoAAAAA1AgQAAKgRIAAAQI0AAQAAagQIAABQI0AAAIAaAQIAANQIEAAAoEaAAAAANQIEAACoESAAAECNAAEAAGoECAAAUCNAAACAGgECAADUCBAAAKBGgAAAADUCBAAAqBEgAABAjQABAABqBAgAAFAjQAAAgBoBAgAA1AgQAACgRoAAAAA1AgQAAKgRIAAAQI0AAQAAagQIAABQI0AAAIAaAQIAANQIEAAAoEaAAAAANQIEAACoESAAAECNAAEAAGoECAAAUCNAAACAGgECAADUCBAAAKBGgAAAADUCBAAAqBEgAABAjQABAABqBAgAAFAjQAAAgBoBAgAA1AgQAACgRoAAAAA1AgQAAKgRIAAAQI0AAQAAagQIAABQI0AAAIAaAQIAANQIEAAAoEaAAAAANQIEAACoESAAAECNAAEAAGoECAAAUCNAAACAGgECAADUCBAAAKBGgAAAADUCBAAAqBEgAABAjQABAABqBAgAAFAjQAAAgBoBAgAA1AgQAACgRoAAAAA1AgQAAKgRIAAAQI0AAQAAagQIAABQI0AAAIAaAQIAANQIEAAAoEaAAAAANQIEAACoESAAAECNAAEAAGoECAAAUCNAAACAGgECAADUCBAAAKBGgAAAADUCBAAAqBEgAABAjQABAABqBAgAAFAjQAAAgBoBAgAA1AgQAACgRoAAAAA1AgQAAKgRIAAAQI0AAQAAagQIAABQI0AAAIAaAQIAANQIEAAAoEaAAAAANQIEAACoESAAAECNAAEAAGoECAAAUCNAAACAGgECAADUCBAAAKBGgAAAADUCBAAAqBEgAABAjQABAABqBAgAAFAjQAAAgBoBAgAA1AgQAACgRoAAAAA1AgQAAKgRIAAAQM3G6AHALB1Osnf0CFips+MvAIEdTIAAJ9ud5PLRI2CljiX50SS/NHoIwCgCBDjZ4dEDYOUeGj0AYCSXgAEAgBoBAgAA1AgQAACgRoAAAAA1AgQAAKgRIAAAQI0AAQAAagQIAABQI0AAAIAaAQIAANQIEAAAoEaAAAAANQIEAACoESAAAECNAAEAAGoECAAAUCNAAACAGgECAADUCBAAAKBGgAAAADUCBAAAqBEgAABAjQABAABqBAgAAFAjQAAAgBoBAgAA1AgQAACgRoAAAAA1AgQAAKgRIAAAQI0AAQAAagQIAABQI0AAAIAaAQIAANQIEAAAoEaAAAAANQIEAACoESAAAECNAAEAAGoECAAAUCNAAACAGgECAADUCBAAAKBGgAAAADUCBAAAqBEgAABAjQABAABqBAgAAFAjQAAAgBoBAgAA1AgQAACgRoAAAAA1AgQAAKgRIAAAQI0AAQAAagQIAABQI0AAAIAaAQIAANQIEAAAoEaAAAAANQIEAACoESAAAECNAAEAAGoECAAAUCNAAACAGgECAADUCBAAAKBGgAAAADUCBAAAqBEgAABAjQABAABqBAgAAFAjQAAAgBoBAgAA1AgQAACgRoAAAAA1AgQAAKgRIAAAQI0AAQAAagQIAABQI0AAAIAaAQIAANQIEAAAoEaAAAAANQIEAACoESAAAECNAAEAAGoECAAAUCNAAACAGgECAADUCBAAAKBGgAAAADUCBAAAqBEgAABAjQABAABqBAgAAFAjQAAAgJqN0QPgBEdHDwBgds5NcjDJrtFDFmYzyWWjR8CpCBDm4jVJbs30BybAmt02esDCXJ7kidEjFsqdLsySAGEuXp7k90aPAGCW9oweAGwfZQwAANQIEAAAoEaAAAAANQIEAACoESAAAECNAAEAAGoECAAAUCNAAACAGgECAADUCBAAAKBGgAAAADUCBAAAqBEgAABAjQABAABqBAgAAFAjQAAAgBoBAgAA1AgQAACgRoAAAAA1AgQAAKgRIAAAQI0AAQAAagQIAABQI0AAAIAaAQIAANQIEAAAoEaAAAAANQIEAACoESAAAECNAAEAAGoECAAAUCNAAACAGgECAADUCBAAAKBGgAAAADUCBAAAqBEgAABAjQABAABqBAgAAFAjQAAAgBoBAgAA1AgQAACgRoAAAAA1AgQAAKgRIAAAQI0AAQAAagQIAABQI0AAAIAaAQIAANQIEAAAoEaAAAAANQIEAACoESAAAECNAAEAAGoECAAAUCNAAACAGgECAADUCBAAAKBGgAAAADUCBAAAqBEgAABAjQABAABqBAgAAFAjQAAAgBoBAgAA1AgQAACgRoAAAAA1AgQAAKgRIAAAQI0AAQAAagQIAABQI0AAAIAaAQIAANQIEAAAoEaAAAAANQIEAACoESAAAECNAAEAAGoECAAAUCNAAACAGgECAADUCBAAAKBGgAAAADUCBAAAqBEgAABAjQABAABqBAgAAFAjQAAAgBoBAgAA1AgQAACgRoAAAAA1AgQAAKgRIAAAQI0AAQAAagQIAABQI0AAAIAaAQIAANQIEAAAoEaAAAAANQIEAACoESAAAECNAAEAAGoECAAAUCNAAACAGgECAADUCBAAAKBGgAAAADUCBAAAqBEgAABAjQABAABqBAgAAFAjQAAAgBoBAgAA1AgQAACgRoAAAAA1AgQAAKgRIAAAQI0AAQAAagQIAABQI0AAAIAaAQIAANQIEAAAoEaAAAAANQIEAACoESAAAECNAAEAAGoECAAAUCNAAACAGgECAADUCBAAAKBGgAAAADUCBAAAqBEgAABAjQABAABqBAgAAFAjQAAAgBoBAgAA1AgQAACgRoAAAAA1AgQAAKgRIAAAQI0AAQAAagQIAABQI0AAAIAaAQIAANQIEAAAoEaAAAAANQIEAACoESAAAEDN/wOG6lPCFVibCQAAAABJRU5ErkJggg=="},200:function(A,e,a){"use strict";var t=a(201),g=a(0),n=a.n(g),o=a(14),B=a.n(o),E=a(204),Q=a.n(E),r=a(193),C="1025518380";function i(A){var e=A.description,a=A.lang,g=A.meta,o=A.keywords,B=A.title;return n.a.createElement(r.b,{query:C,render:function(A){var t=e||A.site.siteMetadata.description;return n.a.createElement(Q.a,{htmlAttributes:{lang:a},title:B,titleTemplate:"%s | "+A.site.siteMetadata.title,meta:[{name:"description",content:t},{property:"og:title",content:B},{property:"og:description",content:t},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:A.site.siteMetadata.author},{name:"twitter:title",content:B},{name:"twitter:description",content:t}].concat(o.length>0?{name:"keywords",content:o.join(", ")}:[]).concat(g)},n.a.createElement("link",{rel:"apple-touch-icon",sizes:"180x180",href:"/apple-touch-icon.png"}),n.a.createElement("link",{rel:"icon",type:"image/png",sizes:"32x32",href:"/favicon-32x32.png"}),n.a.createElement("link",{rel:"icon",type:"image/png",sizes:"16x16",href:"/favicon-16x16.png"}),n.a.createElement("link",{rel:"manifest",href:"/site.webmanifest"}),n.a.createElement("link",{rel:"mask-icon",href:"/safari-pinned-tab.svg",color:"#3198e8"}),n.a.createElement("meta",{name:"apple-mobile-web-app-title",content:"David Li"}),n.a.createElement("meta",{name:"application-name",content:"David Li"}),n.a.createElement("meta",{name:"msapplication-TileColor",content:"#203757"}),n.a.createElement("meta",{name:"theme-color",content:"#ffffff"}))},data:t})}i.defaultProps={description:"",lang:"en",meta:[],keywords:[]},i.propTypes={description:B.a.string,lang:B.a.string,meta:B.a.array,keywords:B.a.arrayOf(B.a.string),title:B.a.string.isRequired},e.a=i},201:function(A){A.exports={data:{site:{siteMetadata:{title:"David Li",description:"A starter blog demonstrating what Gatsby can do.",author:"David Li"}}}}}}]);
//# sourceMappingURL=component---src-pages-about-dinner-club-js-5e7867f1a62658c49ca9.js.map