(()=>{"use strict";var e,b={},m={};function r(e){var i=m[e];if(void 0!==i)return i.exports;var t=m[e]={exports:{}};return b[e](t,t.exports,r),t.exports}r.m=b,e=[],r.O=(i,t,o,u)=>{if(!t){var a=1/0;for(n=0;n<e.length;n++){for(var[t,o,u]=e[n],s=!0,f=0;f<t.length;f++)(!1&u||a>=u)&&Object.keys(r.O).every(v=>r.O[v](t[f]))?t.splice(f--,1):(s=!1,u<a&&(a=u));if(s){e.splice(n--,1);var l=o();void 0!==l&&(i=l)}}return i}u=u||0;for(var n=e.length;n>0&&e[n-1][2]>u;n--)e[n]=e[n-1];e[n]=[t,o,u]},r.n=e=>{var i=e&&e.__esModule?()=>e.default:()=>e;return r.d(i,{a:i}),i},r.d=(e,i)=>{for(var t in i)r.o(i,t)&&!r.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:i[t]})},r.f={},r.e=e=>Promise.all(Object.keys(r.f).reduce((i,t)=>(r.f[t](e,i),i),[])),r.u=e=>e+".js",r.miniCssF=e=>{},r.o=(e,i)=>Object.prototype.hasOwnProperty.call(e,i),(()=>{var e={},i="demo-page:";r.l=(t,o,u,n)=>{if(e[t])e[t].push(o);else{var a,s;if(void 0!==u)for(var f=document.getElementsByTagName("script"),l=0;l<f.length;l++){var d=f[l];if(d.getAttribute("src")==t||d.getAttribute("data-webpack")==i+u){a=d;break}}a||(s=!0,(a=document.createElement("script")).type="module",a.charset="utf-8",a.timeout=120,r.nc&&a.setAttribute("nonce",r.nc),a.setAttribute("data-webpack",i+u),a.src=r.tu(t)),e[t]=[o];var c=(g,v)=>{a.onerror=a.onload=null,clearTimeout(p);var _=e[t];if(delete e[t],a.parentNode&&a.parentNode.removeChild(a),_&&_.forEach(h=>h(v)),g)return g(v)},p=setTimeout(c.bind(null,void 0,{type:"timeout",target:a}),12e4);a.onerror=c.bind(null,a.onerror),a.onload=c.bind(null,a.onload),s&&document.head.appendChild(a)}}})(),r.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},(()=>{var e;r.tu=i=>(void 0===e&&(e={createScriptURL:t=>t},"undefined"!=typeof trustedTypes&&trustedTypes.createPolicy&&(e=trustedTypes.createPolicy("angular#bundler",e))),e.createScriptURL(i))})(),r.p="",(()=>{var e={666:0};r.f.j=(o,u)=>{var n=r.o(e,o)?e[o]:void 0;if(0!==n)if(n)u.push(n[2]);else if(666!=o){var a=new Promise((d,c)=>n=e[o]=[d,c]);u.push(n[2]=a);var s=r.p+r.u(o),f=new Error;r.l(s,d=>{if(r.o(e,o)&&(0!==(n=e[o])&&(e[o]=void 0),n)){var c=d&&("load"===d.type?"missing":d.type),p=d&&d.target&&d.target.src;f.message="Loading chunk "+o+" failed.\n("+c+": "+p+")",f.name="ChunkLoadError",f.type=c,f.request=p,n[1](f)}},"chunk-"+o,o)}else e[o]=0},r.O.j=o=>0===e[o];var i=(o,u)=>{var f,l,[n,a,s]=u,d=0;if(n.some(p=>0!==e[p])){for(f in a)r.o(a,f)&&(r.m[f]=a[f]);if(s)var c=s(r)}for(o&&o(u);d<n.length;d++)r.o(e,l=n[d])&&e[l]&&e[l][0](),e[n[d]]=0;return r.O(c)},t=self.webpackChunkdemo_page=self.webpackChunkdemo_page||[];t.forEach(i.bind(null,0)),t.push=i.bind(null,t.push.bind(t))})()})();