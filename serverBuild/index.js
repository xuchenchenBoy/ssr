module.exports=function(e){var t={};function r(n){if(t[n])return t[n].exports;var o=t[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}return r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)r.d(n,o,function(t){return e[t]}.bind(null,o));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=38)}([function(e,t){e.exports=require("react")},function(e,t){e.exports=require("core-js/modules/es6.object.to-string")},function(e,t){e.exports=require("redux")},function(e,t){e.exports=require("core-js/modules/web.dom.iterable")},function(e,t){e.exports=require("core-js/modules/es6.array.iterator")},function(e,t){e.exports=require("core-js/modules/es6.array.for-each")},function(e,t){e.exports=require("core-js/modules/es6.symbol")},function(e,t){e.exports=require("core-js/modules/es6.object.define-property")},function(e,t){e.exports=require("react-helmet")},function(e,t){e.exports=require("core-js/modules/es6.array.filter")},function(e,t){e.exports=require("core-js/modules/es6.object.keys")},function(e,t){e.exports=require("react-router")},function(e,t){e.exports=require("fs")},function(e,t){e.exports=require("path")},function(e,t){e.exports=require("react-redux")},function(e,t){e.exports=require("redux-saga/effects")},function(e,t){e.exports=require("react-router-config")},function(e,t){e.exports=require("express")},function(e,t){e.exports=require("core-js/modules/es6.promise")},function(e,t){e.exports=require("regenerator-runtime/runtime")},function(e,t){e.exports=require("axios")},function(e,t){e.exports=require("qs")},function(e,t){e.exports=require("redux-saga")},function(e,t){e.exports=require("core-js/modules/es7.symbol.async-iterator")},function(e,t){e.exports=require("core-js/modules/es6.object.create")},function(e,t,r){"use strict";r.r(t),function(e){r(34);e.exports=function(e){var t=[];return t.toString=function(){return this.map(function(t){var r=function(e,t){var r=e[1]||"",n=e[3];if(!n)return r;if(t&&"function"==typeof btoa){var o=(i=n,"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(i))))+" */"),u=n.sources.map(function(e){return"/*# sourceURL="+n.sourceRoot+e+" */"});return[r].concat(u).concat([o]).join("\n")}var i;return[r].join("\n")}(t,e);return t[2]?"@media "+t[2]+"{"+r+"}":r}).join("")},t.i=function(e,r){"string"==typeof e&&(e=[[null,e,""]]);for(var n={},o=0;o<this.length;o++){var u=this[o][0];null!=u&&(n[u]=!0)}for(o=0;o<e.length;o++){var i=e[o];null!=i[0]&&n[i[0]]||(r&&!i[2]?i[2]=r:r&&(i[2]="("+i[2]+") and ("+r+")"),t.push(i))}},t}}.call(this,r(26)(e))},function(e,t,r){"use strict";r.r(t),function(e){r(7),r(24);e.exports=function(e){if(!e.webpackPolyfill){var t=Object.create(e);t.children||(t.children=[]),Object.defineProperty(t,"loaded",{enumerable:!0,get:function(){return t.l}}),Object.defineProperty(t,"id",{enumerable:!0,get:function(){return t.i}}),Object.defineProperty(t,"exports",{enumerable:!0}),t.webpackPolyfill=1}return t}}.call(this,r(26)(e))},function(e,t){e.exports=require("react-dom/server")},function(e,t){e.exports=require("core-js/modules/es6.regexp.replace")},function(e,t){e.exports=require("core-js/modules/es6.regexp.to-string")},function(e,t){e.exports=require("core-js/modules/es6.date.to-string")},function(e,t){e.exports=require("core-js/modules/es6.string.iterator")},function(e,t){e.exports=require("core-js/modules/es6.object.set-prototype-of")},function(e,t,r){(e.exports=r(25)(!1)).push([e.i,".container {\n  background: #999;\n  -webkit-transform: scale(1);\n          transform: scale(1);\n}\n",""])},function(e,t){e.exports=require("core-js/modules/es6.array.map")},function(e,t,r){(e.exports=r(25)(!1)).push([e.i,".page-404 {\n  background: #f00;\n}\n",""])},function(e,t){e.exports=require("log4js")},function(e,t,r){var n=r(12),o=r(13),u=n.realpathSync(process.cwd()),i=function(e){return o.resolve(u,e)},a=i("client/static");e.exports={clientBuild:i("clientBuild"),serverBuild:i("serverBuild"),appPath:i("."),appNodeModules:i("node_modules"),appIndexJs:i("client/index.js"),serverIndexJs:i("server/server.js"),publicPath:"/",logPath:i("logs"),templateHtml:i("client/index.html"),staticPath:a,favPath:o.resolve(a,"favicon.ico")}},function(e,t,r){"use strict";r.r(t);var n={};r.r(n),r.d(n,"homeInfo",function(){return W});r(28),r(29),r(30),r(18),r(3),r(4),r(1),r(31),r(5);var o=r(13),u=r.n(o),i=r(12),a=r.n(i),c=r(17),s=r.n(c),l=r(0),f=r.n(l),p=r(27),d=r(11),b=r(8),m=r.n(b),y=r(14),g=(r(9),r(10),r(23),r(6),r(7),r(24),r(32),r(33),Symbol()),v=Symbol(),h=Symbol(),j=(r(19),r(15)),O=r(20),x=r.n(O),w=r(21),P=r.n(w);function S(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter(function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable}))),n.forEach(function(t){q(e,t,r[t])})}return e}function q(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var E=function(e){var t=e.method,r=void 0===t?"GET":t,n=e.url,o=e.params,u=void 0===o?{}:o,i=e.headers;return new Promise(function(e,t){var o={};"GET"===r?n+=P.a.stringify(u):o=u,x()({method:r,url:n,data:o,baseURL:"",headers:i}).then(function(t){e(t)}).catch(function(e){t(o)})})},_=function(e){return E(S({method:"GET"},e))},k=regeneratorRuntime.mark(R);function R(){return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:case"end":return e.stop()}},k)}function D(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function T(e){return(T="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function M(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function I(e,t){return!t||"object"!==T(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function L(e){return(L=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function B(e,t){return(B=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var N=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),I(this,L(t).apply(this,arguments))}var r,n,o;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&B(e,t)}(t,f.a.PureComponent),r=t,(n=[{key:"render",value:function(){var e=this.props.homeInfo.status;return f.a.createElement("div",null,f.a.createElement(m.a,null,f.a.createElement("title",null,"home")),f.a.createElement("div",{className:"container"},e))}}])&&M(r.prototype,n),o&&M(r,o),t}();N.loadData=function(e){return new Promise(function(t){_({url:"http://rap2api.taobao.org/app/mock/10621/integral/user/statRankName"}).then(function(r){e.dispatch({type:v,payload:r.data.status}),t()})})};var C=Object(y.connect)(function(e){return function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter(function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable}))),n.forEach(function(t){D(e,t,r[t])})}return e}({},e.home)},function(e){return{}})(N),F=(r(35),[{path:"/",component:C,loadData:C.loadData},{path:"/home",component:C,loadData:C.loadData},{component:function(e){var t=e.staticContext;return(void 0===t?{}:t).status=404,f.a.createElement("div",null,f.a.createElement(m.a,null,f.a.createElement("title",null,"404 no found")),f.a.createElement("h1",null,"404 not found"))}}]),J=r(16),U=function(){return f.a.createElement(d.Switch,null,Object(J.renderRoutes)(F))},G=r(36),A=(r(12),r(37));G.configure({appenders:{console:{type:"console"},info_file:{type:"file",filename:"".concat(A.logPath,"/info/info.log"),maxLogSize:20971520,backups:3},warn_file:{type:"dateFile",filename:"".concat(A.logPath,"/warns/log"),pattern:"yyyy-MM-dd.log",alwaysIncludePattern:!0,daysToKeep:30},error_file:{type:"dateFile",filename:"".concat(A.logPath,"/errors/log"),alwaysIncludePattern:!0,daysToKeep:30,pattern:"yyyy-MM-dd.log"}},categories:{default:{appenders:["console"],level:"info"},info:{appenders:["info_file"],level:"info"},warn:{appenders:["warn_file"],level:"warn"},error:{appenders:["error_file"],level:"error"}}});var K=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";e.use(G.connectLogger(G.getLogger(t),{format:":method :url :status :response-time ms"}))},z=r(2);function H(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter(function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable}))),n.forEach(function(t){Q(e,t,r[t])})}return e}function Q(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var V={page:"home"},W=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:V,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case g:return H({},e,Q({status:"reqIng"},"status",0));case v:return H({},e,Q({status:"reqSuc"},"status",t.payload));case h:return H({},e,Q({status:"reqFail"},"status",2));default:return e}};function X(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var Y={name:"home",reducer:Object(z.combineReducers)(function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter(function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable}))),n.forEach(function(t){X(e,t,r[t])})}return e}({},n)),saga:R},Z=Object(z.combineReducers)({home:Y.reducer}),$=r(22),ee=r.n($);function te(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var re=function(e,t){var r=ee()(),n=Object(z.createStore)(e,t,Object(z.applyMiddleware)(r));return function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter(function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable}))),n.forEach(function(t){te(e,t,r[t])})}return e}({},n,{runSaga:r.run,close:function(){return n.dispatch($.END)}})},ne=regeneratorRuntime.mark(oe);function oe(){return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(j.all)([Object(j.fork)(Y.saga)]);case 2:case"end":return e.stop()}},ne)}var ue=s()(),ie=s.a.Router();ue.use(s.a.static(u.a.resolve("./clientBuild"),{index:!1})),ie.get("/*",function(e,t){var r={},n=re(Z,{});n.runSaga(oe);var o=Object(J.matchRoutes)(F,e.url),i=[];o.forEach(function(e){var t=e.route;t.loadData&&i.push(t.loadData(n))}),Promise.all(i).then(function(o){var i=f.a.createElement(y.Provider,{store:n},f.a.createElement(d.StaticRouter,{location:e.url,context:r},f.a.createElement(U,null)));a.a.readFile(u.a.resolve("./clientBuild/index.html"),"utf8",function(e,o){if(e)return console.error(e),t.status(500).send("出错啦");404===r.status&&t.status(404);var u=n.getState(),a=m.a.renderStatic(),c=ae(o,{title:a.title.toString(),body:i,preloadedState:u});n.close(),t.send(c)})})});var ae=function(e,t){var r=t.title,n=t.body,o=t.preloadedState;return e=(e=e.replace(/<title>.*?<\/title>/g,r)).replace('<div id="root"></div>','<div id="root">\n      '.concat(Object(p.renderToString)(n),"\n      <script>\n        window.__PRELOADED_STATE__=").concat(JSON.stringify(o).replace(/</g,"\\u003c"),"\n      <\/script>\n    </div>"))};K(ue),ue.use(ie),ue.listen(8090,function(){console.log("SSR running on port ".concat(8090))})}]);