(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{126:function(e,t,n){"use strict";n.r(t);n(28);var a=n(6),r=n.n(a),i=n(0),o=n.n(i),c=n(139),u=n.n(c),l=n(136),s=n(145),d=function(e){function t(){for(var t,n=arguments.length,a=new Array(n),r=0;r<n;r++)a[r]=arguments[r];return(t=e.call.apply(e,[this].concat(a))||this).state={in:!1},t}r()(t,e);var n=t.prototype;return n.componentDidMount=function(){this.setState({in:!0})},n.render=function(){return o.a.createElement(l.a,null,o.a.createElement(u.a,{in:this.state.in,timeout:100},function(e){return o.a.createElement("div",{style:Object.assign({},m,p[e])},o.a.createElement(s.a,null),o.a.createElement("div",{style:f.container},o.a.createElement("h1",null,"Hello world!"),o.a.createElement("div",{style:f.textContainer},o.a.createElement("p",null,"My name is Dong-Ha Kim and I am a",o.a.createElement("p",null),o.a.createElement("div",null,"Fullstack Developer"),o.a.createElement("div",null,"Blockchain Enthusiast"),o.a.createElement("div",null,"M. Sc. Information Systems Management Student")),o.a.createElement("p",null,"I love writing applications - from prototypes to production ready."),o.a.createElement("p",null,"I am also a BIG fan and believer of blockchain technology, especially Ethereum ♥"))))}))},t}(i.Component),m={transition:"opacity 500ms",opacity:0},p={entering:{opacity:0},entered:{opacity:1}},f={container:{textAlign:"center"},textContainer:{}};t.default=d},134:function(e,t,n){var a;e.exports=(a=n(138))&&a.default||a},136:function(e,t,n){"use strict";var a=n(0),r=n.n(a),i=n(142),o=n.n(i),c=n(231),u=n(143);n(137);t.a=function(e){var t=e.children;return r.a.createElement(c.a,{theme:u.grommet,style:{height:"100%"}},r.a.createElement(o.a,{title:"DH.Kim",meta:[{name:"description",content:"Website of Dong-Ha Kim"},{name:"keywords",content:"web development, blockchain, student, blog, javascript"}]}),t)}},137:function(e,t,n){},138:function(e,t,n){"use strict";n.r(t);n(28);var a=n(0),r=n.n(a),i=n(4),o=n.n(i),c=n(45),u=n(2),l=function(e){var t=e.location,n=u.default.getResourcesForPathnameSync(t.pathname);return r.a.createElement(c.a,Object.assign({location:t,pageResources:n},n.json))};l.propTypes={location:o.a.shape({pathname:o.a.string.isRequired}).isRequired},t.default=l},140:function(e,t,n){"use strict";n.r(t),n.d(t,"graphql",function(){return f}),n.d(t,"StaticQueryContext",function(){return m}),n.d(t,"StaticQuery",function(){return p});var a=n(0),r=n.n(a),i=n(4),o=n.n(i),c=n(133),u=n.n(c);n.d(t,"Link",function(){return u.a}),n.d(t,"withPrefix",function(){return c.withPrefix}),n.d(t,"navigate",function(){return c.navigate}),n.d(t,"push",function(){return c.push}),n.d(t,"replace",function(){return c.replace}),n.d(t,"navigateTo",function(){return c.navigateTo});var l=n(134),s=n.n(l);n.d(t,"PageRenderer",function(){return s.a});var d=n(29);n.d(t,"parsePath",function(){return d.a});var m=r.a.createContext({}),p=function(e){return r.a.createElement(m.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};function f(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}p.propTypes={data:o.a.object,query:o.a.string.isRequired,render:o.a.func,children:o.a.func}},145:function(e,t,n){"use strict";var a=n(0),r=n.n(a),i=n(133),o=n(168);t.a=function(e){var t=e.backTo,n=void 0===t?"/":t;return r.a.createElement("div",{onClick:function(){return Object(i.navigate)(n)}},r.a.createElement(o.a,{className:"pointer",size:"3em"}))}}}]);
//# sourceMappingURL=component---src-pages-about-js-11fef13c8062641aea8a.js.map