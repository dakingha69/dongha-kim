(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{149:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),o=n(238),i=n(151),l=n(164),c=n(207),u=n(154),s=Object(i.css)(["color:",";"],function(e){return Object(l.c)(e.colorProp,e.theme)}),f={center:"center",end:"right",start:"left"},h=Object(i.css)(["text-align:",";"],function(e){return f[e.textAlign]}),m=i.default.p.withConfig({displayName:"StyledParagraph",componentId:"tbetod-0"})([""," "," "," "," ",""],c.e,function(e){return function(e){var t=e.size||"medium",n=e.theme.paragraph[t];return Object(i.css)(["font-size:",";line-height:",";max-width:",";"],n.size,n.height,n.maxWidth)}(e)},function(e){return e.textAlign&&h},function(e){return e.colorProp&&s},function(e){return e.theme.paragraph&&e.theme.paragraph.extend});function d(){return(d=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}m.defaultProps={},Object.setPrototypeOf(m.defaultProps,u.a);var p=function(e){var t=e.color,n=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,["color"]);return a.a.createElement(m,d({colorProp:t},n))},g=n(240),v=n(239),b=n(160),y=n(7),k=n.n(y),O=(n(159),n(163)),w=n(162),E=n(206),j=Object(i.css)(["border-radius:",";"],function(e){return e.theme.global.edgeSize[e.round.size]}),x=i.default.svg.withConfig({displayName:"StyledMeter",componentId:"nsxarx-0"})(["max-width:100%;overflow:hidden;"," "," path{transition:stroke 0.3s,stroke-width 0.3s;}",";"],c.e,function(e){return e.round&&j},function(e){return e.theme.meter&&e.theme.meter.extend});x.defaultProps={},Object.setPrototypeOf(x.defaultProps,u.a);var P=function(e,t){var n={};return e&&("object"==typeof e?(n.stroke=Object(l.c)(e.color,t),e.opacity&&(n.strokeOpacity=""+(!0===e.opacity?t.global.opacity.medium:t.global.opacity[e.opacity]))):n.stroke=Object(l.c)(e,t)),n},C=/^neutral-\d+/,z=function(e,t){var n=Object.keys(t.global.colors).filter(function(e){return C.test(e)});return n[e%n.length]};function T(){return(T=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function M(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}var S=function(e){var t=e.background,n=e.max,r=e.round,o=e.size,i=e.theme,l=e.thickness,c=e.values,u=M(e,["background","max","round","size","theme","thickness","values"]),s="full"===o?288:Object(E.b)(i.global.size[o]||o),f=Object(E.b)(i.global.edgeSize[l]||l),h=r?f/2:0,m=f/2,d=(c||[]).some(function(e){return e.highlight}),p=h,g=(c||[]).filter(function(e){return e.value>0}).map(function(e,o){var l,u=e.color,g=e.highlight,v=(e.label,e.onHover),b=e.value,y=M(e,["color","highlight","label","onHover","value"]),k="p-"+o,O=b*(s-2*h)/n,w="M "+p+","+m+" L "+(p+O)+","+m,E=u||(o===c.length-1?i.meter.color:z(o,i));return v&&(l={onMouseOver:function(){return v(!0)},onMouseLeave:function(){return v(!1)}}),p+=O,a.a.createElement("path",T({key:k,d:w,fill:"none"},P(d&&!g?t:E,i),{strokeWidth:f,strokeLinecap:r?"round":"butt"},l,y))}).reverse();return a.a.createElement(x,T({viewBox:"0 0 "+s+" "+f,preserveAspectRatio:"none",width:"full"===o?"100%":s,height:f,round:r?{size:l}:void 0},u),a.a.createElement("path",T({d:"M "+h+","+m+" L "+(s-h)+","+m,fill:"none"},P(t,i),{strokeWidth:f,strokeLinecap:r?"round":"square"})),g)};S.defaultProps={background:"light-1"},Object.setPrototypeOf(S.defaultProps,u.a);var I=Object(w.a)(i.withTheme)(S),L=function(e,t,n,r){var a=(r-90)*Math.PI/180;return{x:e+n*Math.cos(a),y:t+n*Math.sin(a)}},B=function(e,t,n,r,a){var o=a;a-r>=360&&(o=r+359.99);var i=L(e,t,n,o),l=L(e,t,n,r),c=o-r<=180?"0":"1";return["M",i.x.toFixed(10),i.y.toFixed(10),"A",n.toFixed(10),n.toFixed(10),0,c,0,l.x.toFixed(10),l.y.toFixed(10)].join(" ")};function A(){return(A=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function H(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}var F=function(e){var t=e.background,n=e.max,r=e.round,o=e.size,i=e.theme,l=e.thickness,c=e.values,u=H(e,["background","max","round","size","theme","thickness","values"]),s="full"===o?288:Object(E.b)(i.global.size[o]||o),f=Object(E.b)(i.global.edgeSize[l]||l),h=s/2,m=s/2-f/2,d=360/n,p=(c||[]).some(function(e){return e.highlight}),g=0,v=0,b=[],y=[];return(c||[]).filter(function(e){return e.value>0}).forEach(function(e,o){var l,u,h=e.color,k=e.highlight,O=(e.label,e.onHover),w=e.value,E=H(e,["color","highlight","label","onHover","value"]),j="p-"+o,x=h||(o===c.length-1?i.meter.color:z(o,i));l=g+w>=n?360:Math.min(360,function(e,t,n){return Math.min(360,Math.max(0,e+t*n))}(v,d,w)),O&&(u={onMouseOver:function(){return O(!0)},onMouseLeave:function(){return O(!1)}});var C=P(p&&!k?t:x,i);if(r){var T=B(s/2,s/2,m,v,l);b.unshift(a.a.createElement("path",A({key:j,d:T,fill:"none"},C,{strokeWidth:f,strokeLinecap:"round"},u,E)));var M=B(s/2,s/2,m,l-.5,l),S=a.a.createElement("path",A({key:j+"-",d:M,fill:"none"},C,{strokeWidth:f,strokeLinecap:"round"},u,E));l-v>2*d&&(y=[]),y.unshift(S)}else{var I=B(s/2,s/2,m,v,l);b.push(a.a.createElement("path",A({key:j,d:I,fill:"none"},C,{strokeWidth:f,strokeLinecap:"butt"},u,E)))}g+=w,v=l}),a.a.createElement(x,A({viewBox:"0 0 "+s+" "+s,width:"full"===o?"100%":s,height:"full"===o?"100%":s},u),a.a.createElement("circle",A({cx:h,cy:h,r:m},P(t,i),{strokeWidth:f,strokeLinecap:r?"round":"square",fill:"none"})),b,y)};F.defaultProps={},Object.setPrototypeOf(F.defaultProps,u.a);var J=Object(w.a)(i.withTheme)(F);function W(){return(W=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function D(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var N=function(e){var t,n;function r(){for(var t,n=arguments.length,r=new Array(n),a=0;a<n;a++)r[a]=arguments[a];return D(function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(t=e.call.apply(e,[this].concat(r))||this),"state",{}),t}return n=e,(t=r).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n,r.getDerivedStateFromProps=function(e,t){var n=t.max,r=function(e){var t=100;return e&&e.length>1&&(t=0,e.forEach(function(e){t+=e.value})),t}(e.values);return n&&r===n?null:{max:r}},r.prototype.render=function(){var e,t=this.props,n=t.type,r=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(t,["type"]),o=this.state.max;return"bar"===n?e=a.a.createElement(I,W({max:o},r)):"circle"===n&&(e=a.a.createElement(J,W({max:o},r))),e},r}(r.Component);D(N,"defaultProps",{background:{color:"light-2",opacity:"medium"},size:"medium",thickness:"medium",type:"bar"});var R=N,_=function(e){var t=e.name,n=e.level;return a.a.createElement(o.a,null,a.a.createElement(O.a,null,t),a.a.createElement(R,{type:"bar",values:[{value:n}],margin:{vertical:"small"},background:"light-2"}))},G=function(e){var t=e.category,n=e.skills;return a.a.createElement(o.a,{align:"center",pad:{vertical:"medium"}},a.a.createElement(v.a,{size:"small"},t),n&&n.map(function(e){var t=e.name,n=e.level;return a.a.createElement(_,{key:t,name:t,level:n})}))},K=function(e){var t=e.skills;return e.skillCategories.map(function(e,n){return a.a.createElement(G,{key:n,category:e,skills:t.filter(function(t){return t.category===e})})})},U=n(156),q=function(e){function t(){return e.apply(this,arguments)||this}return k()(t,e),t.prototype.render=function(){return a.a.createElement(K,{skills:U.c,skillCategories:U.d})},t}(r.Component),Y=n(158);t.default=function(){return a.a.createElement(Y.a,{title:"About"},a.a.createElement(b.a,{title:"Hello world!"},a.a.createElement(o.a,{align:"center",pad:{horizontal:"small"}},a.a.createElement(p,null,"Welcome to my website. My name is Dong-Ha Kim and I am a Fullstack Javascript Developer, Blockchain Enthusiast and M. Sc. Student at the TU Berlin."),a.a.createElement(p,null,"This site is unfortunately still WIP. You will find different projects and blog posts of mine in the near future here. Until then check out my   ",a.a.createElement(g.a,{label:"GitHub",href:"https://github.com/dakingha69"}),"   or  "," ",a.a.createElement(g.a,{label:"LinkedIn",href:"https://www.linkedin.com/in/dhkim0210"}),"."),a.a.createElement(v.a,null,"Skills"),a.a.createElement(p,null,"Below you can find a list of my skills with an estimated proficiency level."),a.a.createElement(q,null))))}},156:function(e,t,n){"use strict";n.d(t,"a",function(){return r}),n.d(t,"d",function(){return a}),n.d(t,"c",function(){return o}),n.d(t,"b",function(){return i});var r=[{to:"/",name:"HOME"},{to:"/about",name:"ABOUT"},{to:"/blog",name:"BLOG"},{to:"/contact",name:"CONTACT"},{to:"/projects",name:"PROJECTS"}],a=["Javascript","Ethereum","Tools"],o=[{category:"Javascript",name:"ES6+",level:85},{category:"Javascript",name:"TypeScript",level:85},{category:"Javascript",name:"React / React Native",level:80},{category:"Javascript",name:"Node",level:70},{category:"Tools",name:"Git",level:75},{category:"Tools",name:"Travis CI / Circle CI",level:60},{category:"Tools",name:"Docker",level:60},{category:"Ethereum",name:"Solidity",level:70},{category:"Ethereum",name:"Truffle Framework",level:80},{category:"Ethereum",name:"web3.js",level:85}],i=[{title:"dongha.kim",description:"My personal website built with gatsby.",keywords:["react","gatsby"],links:{github:"https://github.com/dakingha69/dakingha69.github.io",url:"dongha.kim"}},{title:"trustlines.network clientlib",description:"People powered money - Ethereum based social credit protocol, where I contributed a lot to the TypeScript client library.",keywords:["ethereum","web3","typescript"],links:{github:"https://github.com/trustlines-network/clientlib"}},{title:"CITES Blockchain Challenge",description:"",keywords:["ethereum","web3","truffle","solidity"],links:{github:"https://github.com/cites-on-blocks/cites-on-blocks_dapp"}},{title:"CITES Blockchain Challenge Paper",description:"",keywords:["ethereum","scientific paper"],links:{file:""}}]},158:function(e,t,n){"use strict";var r=n(0),a=n.n(r),o=n(161),i=n.n(o),l=n(237),c=n(157),u=n(55);t.a=function(e){var t=e.children,n=e.title,o=Object(r.useContext)(u.a).theme;return a.a.createElement(l.a,{theme:c[o],style:{height:"100%"}},a.a.createElement(i.a,{title:(n&&n+" | ")+"DH.Kim",meta:[{name:"keywords",content:"web development, blockchain, student, blog, javascript, dongha, kim, dong-ha"}]}),t)}},160:function(e,t,n){"use strict";var r=n(0),a=n.n(r),o=n(238),i=n(239),l=n(157),c=n(55),u=(n(159),n(33)),s=n(240),f=n(163),h=n(156),m=function(e){return a.a.createElement(o.a,{direction:"row",style:{justifyContent:"space-around"}},a.a.createElement(o.a,{pad:"small"},a.a.createElement(s.a,{onClick:function(){return Object(u.navigate)("/")}},a.a.createElement(f.a,{color:"dark-1"},"DH"),a.a.createElement(f.a,{color:"brand"},"."),a.a.createElement(f.a,{color:"dark-1"},"Kim"))),a.a.createElement(o.a,{direction:"row"},h.a.map(function(e,t){var n=e.to,r=e.name;return a.a.createElement(o.a,{pad:"small",key:t},a.a.createElement(s.a,{label:r,onClick:function(){return Object(u.navigate)(n)}}))})))};t.a=function(e){var t=e.title,n=e.children,u=Object(r.useContext)(c.a).theme;return a.a.createElement(o.a,{animation:"fadeIn",background:l[u].global.colors.background},a.a.createElement(m,null),a.a.createElement(i.a,{alignSelf:"center"},t),n)}},163:function(e,t,n){"use strict";var r=n(0),a=n.n(r),o=n(151),i=n(164),l=n(207),c=n(154),u={center:"center",end:"right",start:"left"},s=Object(o.css)(["text-align:",";"],function(e){return u[e.textAlign]}),f=Object(o.css)(["color:",";"],function(e){return Object(i.c)(e.colorProp,e.theme)}),h=Object(o.css)(["font-weight:",";"],function(e){return e.weight}),m=Object(o.css)(["word-break:",";"],function(e){return e.wordBreak}),d=o.default.span.withConfig({displayName:"StyledText",componentId:"sc-1sadyjn-0"})([""," "," "," "," "," "," "," ",""],l.e,function(e){return function(e){var t=e.size||"medium",n=e.theme.text[t];return n?Object(o.css)(["font-size:",";line-height:",";"],n.size,n.height):Object(o.css)(["font-size:",";line-height:normal;"],t)}(e)},function(e){return e.textAlign&&s},function(e){return e.truncate&&"\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n"},function(e){return e.colorProp&&f},function(e){return e.weight&&h},function(e){return e.wordBreak&&m},function(e){return e.theme.text&&e.theme.text.extend});function p(){return(p=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}d.defaultProps={},Object.setPrototypeOf(d.defaultProps,c.a),n.d(t,"a",function(){return v});var g=function(e){var t=e.color,n=e.tag,r=e.as,o=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,["color","tag","as"]);return a.a.createElement(d,p({as:!r&&n?n:r,colorProp:t},o))};g.defaultProps={level:1};var v=g}}]);
//# sourceMappingURL=component---src-pages-about-js-d72840a32789731133cf.js.map