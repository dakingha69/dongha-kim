(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{144:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),o=n(160),c=n(158);t.default=function(){return a.a.createElement(c.a,{title:"404"},a.a.createElement(o.a,{title:"NOT FOUND"},a.a.createElement("p",null,"You just hit a route that doesn't exist... the sadness.")))}},156:function(e,t,n){"use strict";n.d(t,"a",function(){return r}),n.d(t,"d",function(){return a}),n.d(t,"c",function(){return o}),n.d(t,"b",function(){return c});var r=[{to:"/",name:"HOME"},{to:"/about",name:"ABOUT"},{to:"/blog",name:"BLOG"},{to:"/contact",name:"CONTACT"},{to:"/projects",name:"PROJECTS"}],a=["Javascript","Ethereum","Tools"],o=[{category:"Javascript",name:"ES6+",level:85},{category:"Javascript",name:"TypeScript",level:85},{category:"Javascript",name:"React / React Native",level:80},{category:"Javascript",name:"Node",level:70},{category:"Tools",name:"Git",level:75},{category:"Tools",name:"Travis CI / Circle CI",level:60},{category:"Tools",name:"Docker",level:60},{category:"Ethereum",name:"Solidity",level:70},{category:"Ethereum",name:"Truffle Framework",level:80},{category:"Ethereum",name:"web3.js",level:85}],c=[{title:"dongha.kim",description:"My personal website built with gatsby.",keywords:["react","gatsby"],links:{github:"https://github.com/dakingha69/dakingha69.github.io",url:"dongha.kim"}},{title:"trustlines.network clientlib",description:"People powered money - Ethereum based social credit protocol, where I contributed a lot to the TypeScript client library.",keywords:["ethereum","web3","typescript"],links:{github:"https://github.com/trustlines-network/clientlib"}},{title:"CITES Blockchain Challenge",description:"",keywords:["ethereum","web3","truffle","solidity"],links:{github:"https://github.com/cites-on-blocks/cites-on-blocks_dapp"}},{title:"CITES Blockchain Challenge Paper",description:"",keywords:["ethereum","scientific paper"],links:{file:""}}]},158:function(e,t,n){"use strict";var r=n(0),a=n.n(r),o=n(161),c=n.n(o),i=n(237),l=n(157),s=n(55);t.a=function(e){var t=e.children,n=e.title,o=Object(r.useContext)(s.a).theme;return a.a.createElement(i.a,{theme:l[o],style:{height:"100%"}},a.a.createElement(c.a,{title:(n&&n+" | ")+"DH.Kim",meta:[{name:"keywords",content:"web development, blockchain, student, blog, javascript, dongha, kim, dong-ha"}]}),t)}},160:function(e,t,n){"use strict";var r=n(0),a=n.n(r),o=n(238),c=n(239),i=n(157),l=n(55),s=(n(159),n(33)),u=n(240),m=n(163),d=n(156),h=function(e){return a.a.createElement(o.a,{direction:"row",style:{justifyContent:"space-around"}},a.a.createElement(o.a,{pad:"small"},a.a.createElement(u.a,{onClick:function(){return Object(s.navigate)("/")}},a.a.createElement(m.a,{color:"dark-1"},"DH"),a.a.createElement(m.a,{color:"brand"},"."),a.a.createElement(m.a,{color:"dark-1"},"Kim"))),a.a.createElement(o.a,{direction:"row"},d.a.map(function(e,t){var n=e.to,r=e.name;return a.a.createElement(o.a,{pad:"small",key:t},a.a.createElement(u.a,{label:r,onClick:function(){return Object(s.navigate)(n)}}))})))};t.a=function(e){var t=e.title,n=e.children,s=Object(r.useContext)(l.a).theme;return a.a.createElement(o.a,{animation:"fadeIn",background:i[s].global.colors.background},a.a.createElement(h,null),a.a.createElement(c.a,{alignSelf:"center"},t),n)}},163:function(e,t,n){"use strict";var r=n(0),a=n.n(r),o=n(151),c=n(164),i=n(207),l=n(154),s={center:"center",end:"right",start:"left"},u=Object(o.css)(["text-align:",";"],function(e){return s[e.textAlign]}),m=Object(o.css)(["color:",";"],function(e){return Object(c.c)(e.colorProp,e.theme)}),d=Object(o.css)(["font-weight:",";"],function(e){return e.weight}),h=Object(o.css)(["word-break:",";"],function(e){return e.wordBreak}),f=o.default.span.withConfig({displayName:"StyledText",componentId:"sc-1sadyjn-0"})([""," "," "," "," "," "," "," ",""],i.e,function(e){return function(e){var t=e.size||"medium",n=e.theme.text[t];return n?Object(o.css)(["font-size:",";line-height:",";"],n.size,n.height):Object(o.css)(["font-size:",";line-height:normal;"],t)}(e)},function(e){return e.textAlign&&u},function(e){return e.truncate&&"\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n"},function(e){return e.colorProp&&m},function(e){return e.weight&&d},function(e){return e.wordBreak&&h},function(e){return e.theme.text&&e.theme.text.extend});function p(){return(p=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}f.defaultProps={},Object.setPrototypeOf(f.defaultProps,l.a),n.d(t,"a",function(){return b});var g=function(e){var t=e.color,n=e.tag,r=e.as,o=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,["color","tag","as"]);return a.a.createElement(f,p({as:!r&&n?n:r,colorProp:t},o))};g.defaultProps={level:1};var b=g}}]);
//# sourceMappingURL=component---src-pages-404-js-7598185ed20be6a87d48.js.map