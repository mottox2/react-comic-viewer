(this["webpackJsonpreact-comic-viewer"]=this["webpackJsonpreact-comic-viewer"]||[]).push([[0],{30:function(n,t,e){},31:function(n,t,e){"use strict";e.r(t);var i=e(2),c=e(1),r=e(10),o=function(n){n&&n instanceof Function&&e.e(3).then(e.bind(null,34)).then((function(t){var e=t.getCLS,i=t.getFID,c=t.getFCP,r=t.getLCP,o=t.getTTFB;e(n),i(n),c(n),r(n),o(n)}))},a=e(8),u=e(5),s=e(33),j=e(12),b=function(){var n=Object(c.useState)({windowHeight:0,windowWidth:0}),t=Object(u.a)(n,2),e=t[0],i=t[1],r=Object(s.a)((function(){i({windowHeight:window.innerHeight,windowWidth:window.innerWidth})}),100);return Object(j.a)("resize",r.callback),Object(c.useEffect)((function(){r.callback()}),[r]),e},f=e(3),l=e(4);function d(){var n=Object(f.a)(["\n  background: transparent;\n  border: 0;\n  cursor: pointer;\n  padding: 12px 12px;\n  position: absolute;\n  right: 0;\n  top: 0;\n"]);return d=function(){return n},n}function h(){var n=Object(f.a)(["\n  align-items: center;\n  background: transparent;\n  border: 0;\n  color: #ccc;\n  cursor: pointer;\n  display: grid;\n  font-size: 14px;\n  gap: 8px;\n  grid-template: auto / auto auto;\n  height: 100%;\n"]);return h=function(){return n},n}function g(){var n=Object(f.a)(["\n  display: grid;\n  gap: 8px;\n  grid-auto-flow: column;\n  height: 100%;\n"]);return g=function(){return n},n}function O(){var n=Object(f.a)(["\n  cursor: pointer;\n  max-width: 1024px;\n  transform: rotate(180deg);\n  width: 100%;\n"]);return O=function(){return n},n}function p(){var n=Object(f.a)(["\n  align-items: center;\n  display: flex;\n  height: 100%;\n  justify-content: space-between;\n"]);return p=function(){return n},n}function x(){var n=Object(f.a)(["\n  align-items: center;\n  display: flex;\n  height: 100%;\n  justify-content: center;\n"]);return x=function(){return n},n}function v(){var n=Object(f.a)(["\n  bottom: 0;\n  box-sizing: border-box;\n  height: 40px;\n  left: 0;\n  padding: 0 16px;\n  position: absolute;\n  width: 100%;\n"]);return v=function(){return n},n}function m(){var n=Object(f.a)(["\n  height: 100%;\n  object-fit: contain;\n  object-position: ",";\n  width: 100%;\n"]);return m=function(){return n},n}function w(){var n=Object(f.a)(["\n  overflow: hidden;\n  width: ",";\n"]);return w=function(){return n},n}function k(){var n=Object(f.a)(["\n  align-items: center;\n  background: transparent;\n  border: 0;\n  cursor: pointer;\n  display: flex;\n  height: 100%;\n  justify-content: ",";\n  opacity: 0.5;\n  right: ",";\n  padding: 0;\n  position: absolute;\n  transition: 250ms;\n  width: calc(100% / 3);\n  :hover {\n    opacity: 1;\n  }\n  @media (max-width: 980px) {\n    opacity: 0;\n    :hover {\n      opacity: 0;\n    }\n  }\n"]);return k=function(){return n},n}function y(){var n=Object(f.a)(["\n  direction: rtl;\n  display: grid;\n  grid-auto-flow: column;\n  height: 100%;\n  overflow: hidden;\n  position: absolute;\n  right: 0;\n  transform: translateX(\n    calc(",")\n  );\n  transition: 250ms;\n"]);return y=function(){return n},n}function C(){var n=Object(f.a)(["\n  height: 100%;\n  position: relative;\n"]);return C=function(){return n},n}function S(){var n=Object(f.a)(["\n  background: #333;\n  color: #fff;\n  display: grid;\n  grid-template: ",";\n  height: ",";\n  max-height: ",";\n  min-height: ",";\n  overflow: hidden;\n  position: relative;\n  transition: 250ms;\n"]);return S=function(){return n},n}var M=l.a.div(S(),(function(n){var t=n.isFullScreen;return"1fr ".concat(t?"0":"40px"," / 1fr")}),(function(n){var t=n.height,e=n.isExpansion;return"".concat(t-(e?0:95),"px")}),(function(n){var t=n.height,e=n.isExpansion;return"".concat(e?t:840,"px")}),(function(n){var t=n.isExpansion;return"".concat(t?0:440,"px")})),z=l.a.div(C()),E=l.a.div(y(),(function(n){var t=n.currentPage,e=n.pageWidth;return"".concat(t*e,"px")})),F=l.a.a(k(),(function(n){return"next"===n.navigation?"flex-start":"flex-end"}),(function(n){return"next"===n.navigation?"auto":"0"})),H=l.a.div(w(),(function(n){var t=n.width;return"".concat(t,"px")})),W=l.a.img(m(),(function(n){var t=n.isOdd;return n.isSingleView?"center":t?"left":"right"})),L=l.a.aside(v()),I=l.a.div(x()),P=l.a.div(p()),R=l.a.input(O()),T=l.a.div(g()),B=l.a.button(h()),J=l.a.button(d()),V=e(11),D=e(14),X=e.n(D),q=e(7),A=e(15),G=e(16),K=e(18),N=e(17),Q=function(n){var t=n.pages,e=n.switchingRatio,r=void 0===e?1:e,o=b(),s=o.windowHeight,j=o.windowWidth,f=Object(c.useState)(!1),l=Object(u.a)(f,2),d=l[0],h=l[1],g=Object(V.b)(),O=Object(c.useMemo)((function(){return Object(a.a)({},g)}),[g]),p=O.active,x=O.enter,v=O.exit,m=Object(c.useCallback)((function(){h((function(n){return!n}))}),[]),w=Object(c.useCallback)((function(){x()}),[x]),k=Object(c.useCallback)((function(){v()}),[v]),y=Object(c.useMemo)((function(){return s>j*r?j:j/2}),[r,s,j]),C=Object(c.useMemo)((function(){return d?"\u901a\u5e38":"\u62e1\u5927"}),[d]),S=Object(c.useMemo)((function(){return p?"\u623b\u308b":"\u5168\u753b\u9762"}),[p]),D=Object(c.useMemo)((function(){return s>j*r}),[r,s,j]),Q=Object(c.useMemo)((function(){return t.map((function(n,t){return Object(i.jsx)(H,{width:y,children:"string"===typeof n?Object(i.jsx)(G.LazyLoadComponent,{threshold:0,children:Object(i.jsx)(W,{alt:n,isOdd:!(t%2),isSingleView:D,src:n})}):n},X()())}))}),[D,y,t]),U=Object(c.useState)(),Y=Object(u.a)(U,2),Z=Y[0],$=Y[1],_=Object(c.useState)(0),nn=Object(u.a)(_,2),tn=nn[0],en=nn[1],cn=Object(c.useMemo)((function(){return D&&tn>=t.length-1||!D&&tn>=t.length-2}),[tn,D,t.length]),rn=Object(c.useCallback)((function(){cn||en((function(n){return n+(D?1:2)}))}),[cn,D]),on=Object(c.useMemo)((function(){return 0===tn}),[tn]),an=Object(c.useCallback)((function(){on||en((function(n){return n-(D?1:2)}))}),[on,D]),un=Object(c.useState)(!1),sn=Object(u.a)(un,2),jn=sn[0],bn=sn[1],fn=Object(c.useCallback)((function(){bn(!0)}),[]),ln=Object(c.useCallback)((function(n){var t=n.currentTarget.value;en(D?parseInt(t,10)-1:2*(parseInt(t,10)-1))}),[D]),dn=Object(c.useCallback)((function(){bn(!1)}),[]),hn=Object(A.a)(dn),gn=Object(u.a)(hn,1)[0],On=Object(N.useSwipeable)({onSwipedLeft:function(){on||en((function(n){return n-(D?1:2)}))},onSwipedRight:function(){cn||en((function(n){return n+(D?1:2)}))}});return Object(c.useEffect)((function(){if(!p){if("boolean"!==typeof Z)return;return $(void 0),void h(Z)}"boolean"!==typeof Z&&($(d),h(!0))}),[p,d,Z]),Object(c.useEffect)((function(){D||en((function(n){return 2*Math.floor(n/2)}))}),[D]),Object(i.jsx)(V.a,{handle:g,children:Object(i.jsxs)(M,Object(a.a)(Object(a.a)({height:s,isExpansion:d,isFullScreen:p},On),{},{children:[Object(i.jsxs)(z,{children:[Object(i.jsx)(E,{currentPage:tn,pageWidth:y,children:Q}),cn?null:Object(i.jsx)(F,{navigation:"next",onClick:rn,children:Object(i.jsx)(q.a,{color:"#888",size:64})}),on?null:Object(i.jsx)(F,{navigation:"prev",onClick:an,children:Object(i.jsx)(q.b,{color:"#888",size:64})})]}),p?Object(i.jsx)(J,{onClick:k,children:Object(i.jsx)(K.a,{color:"#fff",size:36})}):Object(i.jsx)(L,{children:jn?Object(i.jsx)(I,{ref:gn,children:Object(i.jsx)(R,{onChange:ln,max:D?t.length:Math.ceil(t.length/2),min:1,step:1,type:"range",value:D?tn+1:Math.floor(tn/2)+1})}):Object(i.jsxs)(P,{children:[Object(i.jsxs)(T,{children:[Object(i.jsxs)(B,{onClick:m,children:[Object(i.jsx)(q.c,{color:"#fff",size:24}),C]}),Object(i.jsxs)(B,{onClick:w,children:[Object(i.jsx)(q.d,{color:"#fff",size:24}),S]})]}),Object(i.jsxs)(B,{onClick:fn,children:[Object(i.jsx)(q.e,{color:"#fff",size:24}),"\u79fb\u52d5"]})]})})]}))})},U=function(n){var t=n.children,e=b().windowHeight,r=Object(c.useMemo)((function(){return{minHeight:e}}),[e]);return Object(i.jsx)("div",{style:r,children:t})},Y=function(){return Object(i.jsxs)(U,{children:[Object(i.jsx)(Q,{pages:["/comics/0.jpg","/comics/1.jpg","/comics/2.jpg","/comics/3.jpg","/comics/4.jpg","/comics/5.jpg","/comics/6.jpg"],switchingRatio:.75}),Object(i.jsxs)("p",{children:["hoge",Object(i.jsx)("br",{}),"hoge",Object(i.jsx)("br",{}),"hoge",Object(i.jsx)("br",{}),"hoge",Object(i.jsx)("br",{}),"hoge",Object(i.jsx)("br",{}),"hoge",Object(i.jsx)("br",{}),"hoge",Object(i.jsx)("br",{}),"hoge",Object(i.jsx)("br",{}),"hoge"]})]})};e(30);Object(r.render)(Object(i.jsx)(c.StrictMode,{children:Object(i.jsx)(Y,{})}),document.getElementById("root")),o()}},[[31,1,2]]]);
//# sourceMappingURL=main.d8c3d327.chunk.js.map