import"./modulepreload-polyfill.c7c6310f.js";import{c as x,g as v,s as d,i as N,j as w,a as u,b as j,r as S}from"./jsx-runtime.24e52c1c.js";function h(s,c){if(s.inserted[c.name]===void 0)return s.insert("",c,s.sheet,!0)}function b(s,c,e){var n=[],i=v(s,n,e);return n.length<2?e:i+c(n)}var E=function(c){var e=x(c);e.sheet.speedy=function(l){this.isSpeedy=l},e.compat=!0;var n=function(){for(var a=arguments.length,t=new Array(a),r=0;r<a;r++)t[r]=arguments[r];var o=d(t,e.registered,void 0);return N(e,o,!1),e.key+"-"+o.name},i=function(){for(var a=arguments.length,t=new Array(a),r=0;r<a;r++)t[r]=arguments[r];var o=d(t,e.registered),g="animation-"+o.name;return h(e,{name:o.name,styles:"@keyframes "+g+"{"+o.styles+"}"}),g},m=function(){for(var a=arguments.length,t=new Array(a),r=0;r<a;r++)t[r]=arguments[r];var o=d(t,e.registered);h(e,o)},f=function(){for(var a=arguments.length,t=new Array(a),r=0;r<a;r++)t[r]=arguments[r];return b(e.registered,n,z(t))};return{css:n,cx:f,injectGlobal:m,keyframes:i,hydrate:function(a){a.forEach(function(t){e.inserted[t]=!0})},flush:function(){e.registered={},e.inserted={},e.sheet.flush()},sheet:e.sheet,cache:e,getRegisteredStyles:v.bind(null,e.registered),merge:b.bind(null,e.registered,n)}},z=function s(c){for(var e="",n=0;n<c.length;n++){var i=c[n];if(i!=null){var m=void 0;switch(typeof i){case"boolean":break;case"object":{if(Array.isArray(i))m=s(i);else{m="";for(var f in i)i[f]&&f&&(m&&(m+=" "),m+=f)}break}default:m=i}m&&(e&&(e+=" "),e+=m)}}return e},p=E({key:"css"}),C=p.cx,y=p.css;const G=y`
  box-sizing: border-box;
  background-color: #000;
  width: 4rem;
  height: 4rem;
  display: flex;
  padding: .5rem 1rem;
  flex-wrap: wrap;
  border-radius: .75rem;

  .item {
    width: 1rem;
    height: 1rem;
  }

  .item1 {
    background-color: rgba(248, 113, 113);
    border-radius: .5rem 0 0 .5rem;
  }

  .item2 {
    background-color: rgba(244, 114, 182);
    border-radius: 0 .5rem .5rem 0;
  }

  .item3 {
    background-color: rgba(167, 139, 250);
    border-radius: .5rem 0 0 .5rem;
  }

  .item4 {
    background-color: rgba(96, 165, 250);
    border-radius: .5rem;
  }

  .item5 {
    background-color: rgba(52, 211, 153);
    border-radius: .5rem 0 .5rem .5rem;
  }
`;function R(s={className:""}){return w("div",{className:C(G,s.className),children:[u("span",{className:"item item1"}),u("span",{className:"item item2"}),u("span",{className:"item item3"}),u("span",{className:"item item4"}),u("span",{className:"item item5"})]})}const F=y`
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;

  & > .figma {
    position: relative;
    bottom: 10vh;
  }
`;function q(s){return u("div",{className:F,children:u(R,{className:"figma"})})}j(document.querySelector("#app")).render(S.exports.createElement(q));
