(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{10:function(e,t,n){},11:function(e,t,n){},12:function(e,t,n){"use strict";n.r(t);var r=n(0),i=n(1),c=n.n(i),s=n(4),o=n.n(s),u=(n(10),n(3));n(11);function l(e){var t=Object(i.useRef)(null);return Object(r.jsxs)("div",{ref:t,className:"anchor",children:[Object(r.jsx)("div",{className:"content",children:e.children}),Object(r.jsx)(a,{className:"toolip",targetRef:t,children:"TOOLIP"})]})}function a(e){var t=e.targetRef,n=e.children,c=Object(i.useRef)(null),s=Object(i.useState)({style:{left:0,top:0,visibility:"hidden"}}),o=Object(u.a)(s,2),l=o[0],a=o[1],v=Object(i.useState)({visible:!1}),d=Object(u.a)(v,2),f=d[0],j=d[1];function b(e){j({visible:!1})}function h(e){return e.preventDefault(),e.stopPropagation(),j({visible:!0}),!1}Object(i.useEffect)((function(){return t.current&&(t.current.addEventListener("mouseover",h),t.current.addEventListener("mouseout",O),t.current.addEventListener("mouseleave",O),t.current.addEventListener("wheel",b)),function(){t.current&&(t.current.removeEventListener("mouseover",h),t.current.removeEventListener("mouseout",O),t.current.removeEventListener("mouseleave",O),t.current.removeEventListener("wheel",b))}}),[t]),Object(i.useEffect)((function(){if(f.visible&&c.current){var e=c.current.getBoundingClientRect(),n=t.current.getBoundingClientRect();a({style:{left:"".concat(Math.floor(n.x+n.width+10),"px"),top:"".concat(Math.floor(n.y+n.height/2-e.height/2),"px"),visibility:"visible"}})}}),[f]);var O=function(e){return e.preventDefault(),e.stopPropagation(),j({visible:!1}),!1};return f.visible?Object(r.jsx)("div",{ref:c,onMouseOver:h,onMouseOut:O,className:"toolip",style:l.style,children:n}):null}var v=function(){return Object(r.jsxs)("div",{className:"App",children:[Object(r.jsxs)("div",{className:"container-2",children:["part of the Container for #2 with overflow",Object(r.jsx)(l,{children:"ANCHOR"})]}),Object(r.jsxs)("div",{className:"container-3",children:["part of the Container for #3",Object(r.jsx)(l,{children:"ANCHOR"}),Object(r.jsx)(l,{children:"ANCHOR item 2"}),Object(r.jsx)(l,{children:"ANCHOR item 3"}),Object(r.jsx)(l,{children:"ANCHOR item 4"})]})]})},d=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,13)).then((function(t){var n=t.getCLS,r=t.getFID,i=t.getFCP,c=t.getLCP,s=t.getTTFB;n(e),r(e),i(e),c(e),s(e)}))};o.a.render(Object(r.jsx)(c.a.StrictMode,{children:Object(r.jsx)(v,{})}),document.getElementById("root")),d()}},[[12,1,2]]]);
//# sourceMappingURL=main.ab8cc08c.chunk.js.map