_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[7],{"/0+H":function(e,t,n){"use strict";t.__esModule=!0,t.isInAmpMode=i,t.useAmp=function(){return i(a.default.useContext(o.AmpStateContext))};var r,a=(r=n("q1tI"))&&r.__esModule?r:{default:r},o=n("lwAK");function i(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.ampFirst,n=void 0!==t&&t,r=e.hybrid,a=void 0!==r&&r,o=e.hasQuery,i=void 0!==o&&o;return n||a&&i}},1:function(e,t,n){n("GcxT"),e.exports=n("nOHt")},"1FhO":function(e,t,n){},"1TCz":function(e,t,n){"use strict";function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}n.r(t);var a=n("nKUr"),o=(n("Rpix"),n("RDVA"),n("1FhO"),n("8Kt/")),i=n.n(o),c=n("MvIS");function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function u(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}t.default=function(e){var t=e.Component,n=e.pageProps;return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsxs)(i.a,{children:[Object(a.jsx)("meta",{name:"application-name",content:"nekonako"}),Object(a.jsx)("meta",{name:"apple-mobile-web-app-capable",content:"yes"}),Object(a.jsx)("meta",{name:"apple-mobile-web-app-status-bar-style",content:"default"}),Object(a.jsx)("meta",{name:"format-detection",content:"telephone=no"}),Object(a.jsx)("meta",{name:"mobile-web-app-capable",content:"yes"}),Object(a.jsx)("meta",{name:"msapplication-config",content:"/static/icons/browserconfig.xml"}),Object(a.jsx)("meta",{name:"msapplication-TileColor",content:"#25293A"}),Object(a.jsx)("meta",{name:"msapplication-tap-highlight",content:"no"}),Object(a.jsx)("meta",{name:"theme-color",content:"#25293A"}),Object(a.jsx)("link",{rel:"apple-touch-icon",sizes:"180x180",href:"/assets/icon192.png"}),Object(a.jsx)("link",{rel:"icon",type:"image/png",sizes:"32x32",href:"/assets/icon192.png"}),Object(a.jsx)("link",{rel:"icon",type:"image/png",sizes:"16x16",href:"/assets/icon192.png"}),Object(a.jsx)("link",{rel:"manifest",href:"/manifest.json"}),Object(a.jsx)("link",{rel:"mask-icon",href:"/assets/icon192.png",color:"#25293A"}),Object(a.jsx)("link",{rel:"shortcut icon",href:"/static/icons/safari-pinned-tab.svg"}),Object(a.jsx)("meta",{name:"twitter:card",content:"Hey! there"}),Object(a.jsx)("meta",{name:"twitter:url",content:"https://nekonako.me"}),Object(a.jsx)("meta",{name:"twitter:title",content:"Galih wisnuaji"}),Object(a.jsx)("meta",{name:"twitter:description",content:"Penikmat kopi dan drama"}),Object(a.jsx)("meta",{name:"twitter:image",content:"/assets/icon192.png"}),Object(a.jsx)("meta",{name:"twitter:creator",content:"@Galih_wisnuA"}),Object(a.jsx)("meta",{property:"og:type",content:"website"}),Object(a.jsx)("meta",{property:"og:site_name",content:"nekonako"}),Object(a.jsx)("meta",{property:"og:url",content:"https://nekonako.me"})]}),Object(a.jsx)(c.b,{children:Object(a.jsx)("div",{className:"flex flex-col h-full min-h-screen font-sans text-base antialiased bg-primary text-primary transition-all duration-300 md:flex-row",children:Object(a.jsx)(t,u({},n))})})]})}},"5fIB":function(e,t,n){var r=n("7eYB");e.exports=function(e){if(Array.isArray(e))return r(e)}},"8Kt/":function(e,t,n){"use strict";n("oI91");t.__esModule=!0,t.defaultHead=l,t.default=void 0;var r,a=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!==typeof e&&"function"!==typeof e)return{default:e};var t=u();if(t&&t.has(e))return t.get(e);var n={},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var a in e)if(Object.prototype.hasOwnProperty.call(e,a)){var o=r?Object.getOwnPropertyDescriptor(e,a):null;o&&(o.get||o.set)?Object.defineProperty(n,a,o):n[a]=e[a]}n.default=e,t&&t.set(e,n);return n}(n("q1tI")),o=(r=n("Xuae"))&&r.__esModule?r:{default:r},i=n("lwAK"),c=n("FYa8"),s=n("/0+H");function u(){if("function"!==typeof WeakMap)return null;var e=new WeakMap;return u=function(){return e},e}function l(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=[a.default.createElement("meta",{charSet:"utf-8"})];return e||t.push(a.default.createElement("meta",{name:"viewport",content:"width=device-width"})),t}function f(e,t){return"string"===typeof t||"number"===typeof t?e:t.type===a.default.Fragment?e.concat(a.default.Children.toArray(t.props.children).reduce((function(e,t){return"string"===typeof t||"number"===typeof t?e:e.concat(t)}),[])):e.concat(t)}var p=["name","httpEquiv","charSet","itemProp"];function d(e,t){return e.reduce((function(e,t){var n=a.default.Children.toArray(t.props.children);return e.concat(n)}),[]).reduce(f,[]).reverse().concat(l(t.inAmpMode)).filter(function(){var e=new Set,t=new Set,n=new Set,r={};return function(a){var o=!0;if(a.key&&"number"!==typeof a.key&&a.key.indexOf("$")>0){var i=a.key.slice(a.key.indexOf("$")+1);e.has(i)?o=!1:e.add(i)}switch(a.type){case"title":case"base":t.has(a.type)?o=!1:t.add(a.type);break;case"meta":for(var c=0,s=p.length;c<s;c++){var u=p[c];if(a.props.hasOwnProperty(u))if("charSet"===u)n.has(u)?o=!1:n.add(u);else{var l=a.props[u],f=r[u]||new Set;f.has(l)?o=!1:(f.add(l),r[u]=f)}}}return o}}()).reverse().map((function(e,t){var n=e.key||t;return a.default.cloneElement(e,{key:n})}))}function m(e){var t=e.children,n=(0,a.useContext)(i.AmpStateContext),r=(0,a.useContext)(c.HeadManagerContext);return a.default.createElement(o.default,{reduceComponentsToState:d,headManager:r,inAmpMode:(0,s.isInAmpMode)(n)},t)}m.rewind=function(){};var h=m;t.default=h},GcxT:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/_app",function(){return n("1TCz")}])},MvIS:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return u}));var r=n("xvhg"),a=n("nKUr"),o=n("q1tI"),i=n.n(o),c=function(e){if(window.localStorage){var t=window.localStorage.getItem("color-theme");if("string"===typeof t)return t;if(window.matchMedia("(prefers-color-scheme: dark)").matches)return"dark"}return"light"},s=i.a.createContext(),u=function(e){var t=e.initialTheme,n=e.children,o=i.a.useState(c),u=Object(r.a)(o,2),l=u[0],f=u[1],p=function(e){var t=window.document.documentElement,n="dark"===e;t.classList.remove(n?"light":"dark"),t.classList.add(e),localStorage.setItem("color-theme",e)};return t&&p(t),i.a.useEffect((function(e){p(l)}),[l]),Object(a.jsx)(s.Provider,{value:{theme:l,setTheme:f},children:n})}},RDVA:function(e,t,n){},Rpix:function(e,t,n){},Xuae:function(e,t,n){"use strict";var r=n("mPvQ"),a=n("/GRZ"),o=n("i2R6"),i=(n("qXWd"),n("48fX")),c=n("tCBg"),s=n("T0f4");function u(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=s(e);if(t){var a=s(this).constructor;n=Reflect.construct(r,arguments,a)}else n=r.apply(this,arguments);return c(this,n)}}t.__esModule=!0,t.default=void 0;var l=n("q1tI"),f=function(e){i(n,e);var t=u(n);function n(e){var o;return a(this,n),(o=t.call(this,e))._hasHeadManager=void 0,o.emitChange=function(){o._hasHeadManager&&o.props.headManager.updateHead(o.props.reduceComponentsToState(r(o.props.headManager.mountedInstances),o.props))},o._hasHeadManager=o.props.headManager&&o.props.headManager.mountedInstances,o}return o(n,[{key:"componentDidMount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.add(this),this.emitChange()}},{key:"componentDidUpdate",value:function(){this.emitChange()}},{key:"componentWillUnmount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.delete(this),this.emitChange()}},{key:"render",value:function(){return null}}]),n}(l.Component);t.default=f},kG2m:function(e,t){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},lwAK:function(e,t,n){"use strict";var r;t.__esModule=!0,t.AmpStateContext=void 0;var a=((r=n("q1tI"))&&r.__esModule?r:{default:r}).default.createContext({});t.AmpStateContext=a},mPvQ:function(e,t,n){var r=n("5fIB"),a=n("rlHP"),o=n("KckH"),i=n("kG2m");e.exports=function(e){return r(e)||a(e)||o(e)||i()}},oI91:function(e,t){e.exports=function(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}},rlHP:function(e,t){e.exports=function(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}},xvhg:function(e,t,n){"use strict";function r(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function a(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e)){var n=[],r=!0,a=!1,o=void 0;try{for(var i,c=e[Symbol.iterator]();!(r=(i=c.next()).done)&&(n.push(i.value),!t||n.length!==t);r=!0);}catch(s){a=!0,o=s}finally{try{r||null==c.return||c.return()}finally{if(a)throw o}}return n}}(e,t)||function(e,t){if(e){if("string"===typeof e)return r(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?r(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}n.d(t,"a",(function(){return a}))}},[[1,0,1,2]]]);