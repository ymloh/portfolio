(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[0],[,,,,,,,,,function(e,t,i){},,function(e,t,i){},function(e,t,i){},function(e,t,i){},function(e,t,i){"use strict";i.r(t);var n=i(1),o=i.n(n),c=i(4),a=i.n(c),r=(i(9),i(2)),l=i(0),s=["mp4","m4v","webm"];var d=function(e){var t=e.source&&e.source.split(".");t=t&&t[t.length-1].toLowerCase();var i=s.includes(t),o=Object(n.useRef)(),c=function(){var e=(window.innerHeight-o.current.getBoundingClientRect().height)/2;o.current.style.top="".concat(e,"px"),console.table(o.current.getBoundingClientRect())};return i?Object(l.jsx)("video",{className:"item-media ".concat([(e.isActive||e.isModal)&&"active",e.isModal&&"front-and-center"].join(" ")),autoPlay:!0,loop:!0,playsInline:!0,muted:!0,onClick:e.onClick,ref:o,onLoadedData:c,children:Object(l.jsx)("source",{src:e.source,type:"video/".concat(e.ext||"webm")})}):Object(l.jsx)("img",{className:"item-media ".concat([(e.isActive||e.isModal)&&"active",e.isModal&&"front-and-center"].join(" ")),src:e.source,alt:"Project thumbnail",onClick:e.onClick,ref:o,onLoad:c})};i(11);var u=function(e){var t=Object(n.useState)(!1),i=Object(r.a)(t,2),o=i[0],c=i[1];return Object(l.jsxs)("div",{className:"item ".concat(o&&"active"),onMouseEnter:function(e){c(!0)},onMouseLeave:function(e){c(!1)},children:[Object(l.jsx)("span",{className:"item-title ".concat(o&&"active"),children:e.title}),Object(l.jsx)("div",{className:"item-thumb",children:Object(l.jsx)(d,{source:e.mediaSource,isActive:o,onClick:function(t){e.toggleModal(e.projId)}})}),Object(l.jsxs)("div",{className:"item-links",children:[Object(l.jsx)("a",{className:"".concat(o&&"active"),href:e.pagelink,target:"_blank",rel:"noreferrer",children:Object(l.jsx)("div",{children:"View Page"})}),Object(l.jsx)("a",{className:"".concat(o&&"active"),href:e.repolink,target:"_blank",rel:"noreferrer",children:Object(l.jsx)("div",{children:"View Repo"})})]}),Object(l.jsx)("div",{className:"item-desc",children:e.desc})]})},m=(i(12),i(13),[{id:1,title:"Recipe Logger",mediaSource:"./video/recipe-logger-demo-low.webm",desc:"Quick React app designed as a 72-hour challenge to simulate pre-interview technical challenge. This is the first React app I built from the ground up. Double-click the background to add a recipe.",pagelink:"https://jwd05meng.github.io/recipe-logger/",repolink:"https://github.com/JWD05Meng/recipe-logger"},{id:2,title:"Template Mimic",mediaSource:"./video/template-challenge-low.webm",desc:"48-hour challenge: mimic an existing template in HTML and Bootstrap. The \u2196 left side of the thumbnail shows my attempt; the right \u2197 side shows the actual page.",pagelink:"https://jwd05meng.github.io/week7challenge/",repolink:"https://github.com/JWD05Meng/week7challenge"},{id:3,title:"Task Planner",mediaSource:"./video/task-planner-demo.webm",desc:"Final team project for Generation / Academy Xi programme. The goal was to work in teams of two to produce a Task Planner app within three sprints. I learnt a lot from this experience and made a most wonderful new friend :)",pagelink:"https://hlc64.github.io/taskplannerproject/",repolink:"https://github.com/hlc64/taskplannerproject"},{id:4,title:"Website Mockup",mediaSource:"./video/justloud-demo.webm",desc:"A quick mockup created for a company looking to get their website published quickly. Work was carried out part-time over several days. Unfortunately, the company's liason has since been tied up with other matters, and site development has been put on hold.",pagelink:"https://ymloh.github.io/justloud/",repolink:"https://github.com/ymloh/justloud"}]);var h=function(){var e=Object(n.useState)(!1),t=Object(r.a)(e,2),i=t[0],o=t[1],c=Object(n.useState)(null),a=Object(r.a)(c,2),s=a[0],h=a[1],p=function(e){h(m.find((function(t){return t.id===e}))),o(!i),console.log("toggleModal called")};return Object(l.jsxs)("div",{className:"portfolio",children:[m.map((function(e){return Object(l.jsx)(u,{title:e.title,mediaSource:e.mediaSource,desc:e.desc,pagelink:e.pagelink,repolink:e.repolink,projId:e.id,toggleModal:p},e.id)})),Object(l.jsx)("div",{id:"modal",className:"modal ".concat(i?"":"hidden"),onClick:function(){return o(!1)},children:i&&Object(l.jsx)(d,{source:s.mediaSource,isModal:!0})})]})},p=function(e){e&&e instanceof Function&&i.e(3).then(i.bind(null,15)).then((function(t){var i=t.getCLS,n=t.getFID,o=t.getFCP,c=t.getLCP,a=t.getTTFB;i(e),n(e),o(e),c(e),a(e)}))};a.a.render(Object(l.jsx)(o.a.StrictMode,{children:Object(l.jsx)(h,{})}),document.getElementById("root")),p()}],[[14,1,2]]]);
//# sourceMappingURL=main.61dd5af0.chunk.js.map