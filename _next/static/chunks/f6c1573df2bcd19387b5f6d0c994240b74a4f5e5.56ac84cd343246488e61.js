(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[3],{"/0+H":function(e,t,n){"use strict";t.__esModule=!0,t.isInAmpMode=c,t.useAmp=function(){return c(a.default.useContext(o.AmpStateContext))};var r,a=(r=n("q1tI"))&&r.__esModule?r:{default:r},o=n("lwAK");function c(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.ampFirst,n=void 0!==t&&t,r=e.hybrid,a=void 0!==r&&r,o=e.hasQuery,c=void 0!==o&&o;return n||a&&c}},"0Zp1":function(e,t,n){"use strict";n.d(t,"a",(function(){return d}));var r=n("xvhg"),a=n("nKUr"),o=n("q1tI"),c=n.n(o),i=n("a6RD"),s=n.n(i),l=n("MvIS"),u=s()((function(){return n.e(4).then(n.t.bind(null,"/uVn",7))}),{ssr:!1,loadableGenerated:{webpack:function(){return["/uVn"]},modules:["react-lineicons"]}});function d(){var e=c.a.useContext(l.a),t=e.theme,n=e.setTheme,o=c.a.useState(),i=Object(r.a)(o,2),s=i[0],d=i[1];c.a.useEffect((function(){d("light"==t?Object(a.jsx)(u,{name:"night"}):Object(a.jsx)(u,{name:"sun"}))}),[t]);return Object(a.jsx)("button",{className:"font-bold bg-primary px-2 py-1 rounded-md focus:outline-none",onClick:function(){n("dark"==t?"light":"dark"),console.log(t),"dark"==t?(d(Object(a.jsx)(u,{name:"sun"})),setMode("Dark")):(d(Object(a.jsx)(u,{name:"night"})),setMode("Light"))},children:s})}},"2qu3":function(e,t,n){"use strict";var r=n("oI91"),a=n("/GRZ"),o=n("i2R6");function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){var n;if("undefined"===typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(n=function(e,t){if(!e)return;if("string"===typeof e)return l(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return l(e,t)}(e))||t&&e&&"number"===typeof e.length){n&&(e=n);var r=0,a=function(){};return{s:a,n:function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}},e:function(e){throw e},f:a}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,c=!0,i=!1;return{s:function(){n=e[Symbol.iterator]()},n:function(){var e=n.next();return c=e.done,e},e:function(e){i=!0,o=e},f:function(){try{c||null==n.return||n.return()}finally{if(i)throw o}}}}function l(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}t.__esModule=!0,t.default=void 0;var u,d=(u=n("q1tI"))&&u.__esModule?u:{default:u},f=n("8L3h"),h=n("jwwS");var p=[],b=[],m=!1;function j(e){var t=e(),n={loading:!0,loaded:null,error:null};return n.promise=t.then((function(e){return n.loading=!1,n.loaded=e,e})).catch((function(e){throw n.loading=!1,n.error=e,e})),n}function v(e){var t={loading:!1,loaded:{},error:null},n=[];try{Object.keys(e).forEach((function(r){var a=j(e[r]);a.loading?t.loading=!0:(t.loaded[r]=a.loaded,t.error=a.error),n.push(a.promise),a.promise.then((function(e){t.loaded[r]=e})).catch((function(e){t.error=e}))}))}catch(r){t.error=r}return t.promise=Promise.all(n).then((function(e){return t.loading=!1,e})).catch((function(e){throw t.loading=!1,e})),t}function y(e,t){return d.default.createElement(function(e){return e&&e.__esModule?e.default:e}(e),t)}function x(e,t){var n=Object.assign({loader:null,loading:null,delay:200,timeout:null,render:y,webpack:null,modules:null},t),r=null;function a(){if(!r){var t=new g(e,n);r={getCurrentValue:t.getCurrentValue.bind(t),subscribe:t.subscribe.bind(t),retry:t.retry.bind(t),promise:t.promise.bind(t)}}return r.promise()}if(!m&&"function"===typeof n.webpack){var o=n.webpack();b.push((function(e){var t,n=s(o);try{for(n.s();!(t=n.n()).done;){var r=t.value;if(-1!==e.indexOf(r))return a()}}catch(c){n.e(c)}finally{n.f()}}))}var c=function(e,t){a();var o=d.default.useContext(h.LoadableContext),c=(0,f.useSubscription)(r);return d.default.useImperativeHandle(t,(function(){return{retry:r.retry}}),[]),o&&Array.isArray(n.modules)&&n.modules.forEach((function(e){o(e)})),d.default.useMemo((function(){return c.loading||c.error?d.default.createElement(n.loading,{isLoading:c.loading,pastDelay:c.pastDelay,timedOut:c.timedOut,error:c.error,retry:r.retry}):c.loaded?n.render(c.loaded,e):null}),[e,c])};return c.preload=function(){return a()},c.displayName="LoadableComponent",d.default.forwardRef(c)}var g=function(){function e(t,n){a(this,e),this._loadFn=t,this._opts=n,this._callbacks=new Set,this._delay=null,this._timeout=null,this.retry()}return o(e,[{key:"promise",value:function(){return this._res.promise}},{key:"retry",value:function(){var e=this;this._clearTimeouts(),this._res=this._loadFn(this._opts.loader),this._state={pastDelay:!1,timedOut:!1};var t=this._res,n=this._opts;t.loading&&("number"===typeof n.delay&&(0===n.delay?this._state.pastDelay=!0:this._delay=setTimeout((function(){e._update({pastDelay:!0})}),n.delay)),"number"===typeof n.timeout&&(this._timeout=setTimeout((function(){e._update({timedOut:!0})}),n.timeout))),this._res.promise.then((function(){e._update({}),e._clearTimeouts()})).catch((function(t){e._update({}),e._clearTimeouts()})),this._update({})}},{key:"_update",value:function(e){this._state=i(i({},this._state),{},{error:this._res.error,loaded:this._res.loaded,loading:this._res.loading},e),this._callbacks.forEach((function(e){return e()}))}},{key:"_clearTimeouts",value:function(){clearTimeout(this._delay),clearTimeout(this._timeout)}},{key:"getCurrentValue",value:function(){return this._state}},{key:"subscribe",value:function(e){var t=this;return this._callbacks.add(e),function(){t._callbacks.delete(e)}}}]),e}();function O(e){return x(j,e)}function w(e,t){for(var n=[];e.length;){var r=e.pop();n.push(r(t))}return Promise.all(n).then((function(){if(e.length)return w(e,t)}))}O.Map=function(e){if("function"!==typeof e.render)throw new Error("LoadableMap requires a `render(loaded, props)` function");return x(v,e)},O.preloadAll=function(){return new Promise((function(e,t){w(p).then(e,t)}))},O.preloadReady=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return new Promise((function(t){var n=function(){return m=!0,t()};w(b,e).then(n,n)}))},window.__NEXT_PRELOADREADY=O.preloadReady;var k=O;t.default=k},"5fIB":function(e,t,n){var r=n("7eYB");e.exports=function(e){if(Array.isArray(e))return r(e)}},"8Kt/":function(e,t,n){"use strict";n("oI91");t.__esModule=!0,t.defaultHead=u,t.default=void 0;var r,a=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!==typeof e&&"function"!==typeof e)return{default:e};var t=l();if(t&&t.has(e))return t.get(e);var n={},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var a in e)if(Object.prototype.hasOwnProperty.call(e,a)){var o=r?Object.getOwnPropertyDescriptor(e,a):null;o&&(o.get||o.set)?Object.defineProperty(n,a,o):n[a]=e[a]}n.default=e,t&&t.set(e,n);return n}(n("q1tI")),o=(r=n("Xuae"))&&r.__esModule?r:{default:r},c=n("lwAK"),i=n("FYa8"),s=n("/0+H");function l(){if("function"!==typeof WeakMap)return null;var e=new WeakMap;return l=function(){return e},e}function u(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=[a.default.createElement("meta",{charSet:"utf-8"})];return e||t.push(a.default.createElement("meta",{name:"viewport",content:"width=device-width"})),t}function d(e,t){return"string"===typeof t||"number"===typeof t?e:t.type===a.default.Fragment?e.concat(a.default.Children.toArray(t.props.children).reduce((function(e,t){return"string"===typeof t||"number"===typeof t?e:e.concat(t)}),[])):e.concat(t)}var f=["name","httpEquiv","charSet","itemProp"];function h(e,t){return e.reduce((function(e,t){var n=a.default.Children.toArray(t.props.children);return e.concat(n)}),[]).reduce(d,[]).reverse().concat(u(t.inAmpMode)).filter(function(){var e=new Set,t=new Set,n=new Set,r={};return function(a){var o=!0;if(a.key&&"number"!==typeof a.key&&a.key.indexOf("$")>0){var c=a.key.slice(a.key.indexOf("$")+1);e.has(c)?o=!1:e.add(c)}switch(a.type){case"title":case"base":t.has(a.type)?o=!1:t.add(a.type);break;case"meta":for(var i=0,s=f.length;i<s;i++){var l=f[i];if(a.props.hasOwnProperty(l))if("charSet"===l)n.has(l)?o=!1:n.add(l);else{var u=a.props[l],d=r[l]||new Set;d.has(u)?o=!1:(d.add(u),r[l]=d)}}}return o}}()).reverse().map((function(e,t){var n=e.key||t;return a.default.cloneElement(e,{key:n})}))}function p(e){var t=e.children,n=(0,a.useContext)(c.AmpStateContext),r=(0,a.useContext)(i.HeadManagerContext);return a.default.createElement(o.default,{reduceComponentsToState:h,headManager:r,inAmpMode:(0,s.isInAmpMode)(n)},t)}p.rewind=function(){};var b=p;t.default=b},"8lYe":function(e,t,n){"use strict";var r=n("nKUr"),a=(n("q1tI"),n("0Zp1"));t.a=function(){return Object(r.jsx)(r.Fragment,{children:Object(r.jsxs)("div",{className:"pt-4 pb-10 mt-8 text-sm text-center bg-secondary md:text-base footer",children:[Object(r.jsx)("div",{className:"md:hidden mb-4",children:Object(r.jsx)(a.a,{})}),Object(r.jsx)("div",{className:"md:pt-4"}),"\xa9 2021 ",Object(r.jsx)("a",{href:"https://github.com/nekonako",target:"blank",className:"font-bold text-accent",children:"Nako"}),Object(r.jsx)("br",{}),"Powered by ",Object(r.jsx)("a",{href:"https://nextjs.org",className:"font-bold text-accent",children:"NextJS "})," | Source Code ",Object(r.jsx)("a",{href:"https://github.com/nekonako/nekonako.me",className:"font-bold text-accent",children:"Github"})]})})}},MvIS:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return l}));var r=n("xvhg"),a=n("nKUr"),o=n("q1tI"),c=n.n(o),i=function(e){if(window.localStorage){var t=window.localStorage.getItem("color-theme");if("string"===typeof t)return t;if(window.matchMedia("(prefers-color-scheme: dark)").matches)return"dark"}return"light"},s=c.a.createContext(),l=function(e){var t=e.initialTheme,n=e.children,o=c.a.useState(i),l=Object(r.a)(o,2),u=l[0],d=l[1],f=function(e){var t=window.document.documentElement,n="dark"===e;t.classList.remove(n?"light":"dark"),t.classList.add(e),localStorage.setItem("color-theme",e)};return t&&f(t),c.a.useEffect((function(e){f(u)}),[u]),Object(a.jsx)(s.Provider,{value:{theme:u,setTheme:d},children:n})}},"NqW+":function(e,t,n){"use strict";var r=n("nKUr"),a=n("YFqc"),o=n.n(a),c=n("dU0I"),i=n.n(c),s=n("a6RD"),l=n.n(s),u=n("0Zp1"),d=l()((function(){return n.e(4).then(n.t.bind(null,"/uVn",7))}),{ssr:!1,loadableGenerated:{webpack:function(){return["/uVn"]},modules:["react-lineicons"]}});t.a=function(){return Object(r.jsx)(r.Fragment,{children:Object(r.jsx)("div",{className:"z-10 invisible hidden w-1/3 bg-secondary md:visible md:inline-block",children:Object(r.jsxs)("div",{className:"sticky top-0 left-0 flex flex-col justify-center min-h-screen",children:[Object(r.jsx)("div",{className:"absolute top-0 left-0 inline-block px-2 m-4 text-lg",children:Object(r.jsx)(u.a,{})}),Object(r.jsxs)("div",{className:"w-full p-0 m-0",children:[Object(r.jsx)("div",{className:"block pt-6 pb-8 m-1 text-center",children:Object(r.jsx)("img",{src:"https://avatars.githubusercontent.com/u/46141275",alt:"nekonako",width:"180px",className:"relative inline-block rounded-full text-accent border-current",style:{borderWidth:"8px"}})}),Object(r.jsx)("div",{className:"text-3xl font-bold text-center latin",children:"Galih wisnuaji"}),Object(r.jsx)("div",{className:"font-light text-center latin",children:"Coffe and Code"}),Object(r.jsxs)("ul",{className:"pt-8 pb-4 text-center ",children:[Object(r.jsx)("li",{className:"p-2",children:Object(r.jsx)(o.a,{href:"/",className:"font-bold",children:"Home"})}),Object(r.jsx)("li",{className:"p-2",children:Object(r.jsx)(o.a,{href:"/projects",className:"font-bold",children:"Projects"})}),Object(r.jsx)("li",{className:"p-2",children:Object(r.jsx)(o.a,{href:"/friends",className:"font-bold",children:".Friends"})}),Object(r.jsx)("li",{className:"p-2",children:Object(r.jsx)(o.a,{href:"/about",className:"font-bold",children:"About"})})]}),Object(r.jsxs)("center",{className:"pt-4",children:[Object(r.jsx)("a",{href:i.a.contact.github,target:"blank",className:"font-bold",children:Object(r.jsx)("span",{className:"p-3 text-xl",children:Object(r.jsx)("i",{children:Object(r.jsx)(d,{name:"github"})})})}),Object(r.jsx)("a",{href:i.a.contact.twitter,target:"blank",className:"font-bold",children:Object(r.jsx)("span",{className:"p-3 text-xl",children:Object(r.jsx)("i",{children:Object(r.jsx)(d,{name:"twitter"})})})}),Object(r.jsx)("a",{href:i.a.contact.email,target:"blank",className:"font-bold",children:Object(r.jsx)("span",{className:"p-3 text-xl",children:Object(r.jsx)("i",{children:Object(r.jsx)(d,{name:"envelope"})})})}),Object(r.jsx)("a",{href:i.a.contact.telegram,target:"blank",className:"font-bold",children:Object(r.jsx)("span",{className:"p-3 text-xl",children:Object(r.jsx)("i",{children:Object(r.jsx)(d,{name:"telegram"})})})})]}),"          "]})]})})})}},Xuae:function(e,t,n){"use strict";var r=n("mPvQ"),a=n("/GRZ"),o=n("i2R6"),c=(n("qXWd"),n("48fX")),i=n("tCBg"),s=n("T0f4");function l(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=s(e);if(t){var a=s(this).constructor;n=Reflect.construct(r,arguments,a)}else n=r.apply(this,arguments);return i(this,n)}}t.__esModule=!0,t.default=void 0;var u=n("q1tI"),d=function(e){c(n,e);var t=l(n);function n(e){var o;return a(this,n),(o=t.call(this,e))._hasHeadManager=void 0,o.emitChange=function(){o._hasHeadManager&&o.props.headManager.updateHead(o.props.reduceComponentsToState(r(o.props.headManager.mountedInstances),o.props))},o._hasHeadManager=o.props.headManager&&o.props.headManager.mountedInstances,o}return o(n,[{key:"componentDidMount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.add(this),this.emitChange()}},{key:"componentDidUpdate",value:function(){this.emitChange()}},{key:"componentWillUnmount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.delete(this),this.emitChange()}},{key:"render",value:function(){return null}}]),n}(u.Component);t.default=d},YFqc:function(e,t,n){e.exports=n("cTJO")},a6RD:function(e,t,n){"use strict";var r=n("oI91");function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}t.__esModule=!0,t.noSSR=s,t.default=function(e,t){var n=c.default,r={loading:function(e){e.error,e.isLoading;return e.pastDelay,null}};e instanceof Promise?r.loader=function(){return e}:"function"===typeof e?r.loader=e:"object"===typeof e&&(r=o(o({},r),e));if(r=o(o({},r),t),"object"===typeof e&&!(e instanceof Promise)&&(e.render&&(r.render=function(t,n){return e.render(n,t)}),e.modules)){n=c.default.Map;var a={},i=e.modules();Object.keys(i).forEach((function(e){var t=i[e];"function"!==typeof t.then?a[e]=t:a[e]=function(){return t.then((function(e){return e.default||e}))}})),r.loader=a}r.loadableGenerated&&delete(r=o(o({},r),r.loadableGenerated)).loadableGenerated;if("boolean"===typeof r.ssr){if(!r.ssr)return delete r.ssr,s(n,r);delete r.ssr}return n(r)};i(n("q1tI"));var c=i(n("2qu3"));function i(e){return e&&e.__esModule?e:{default:e}}function s(e,t){return delete t.webpack,delete t.modules,e(t)}},cTJO:function(e,t,n){"use strict";var r=n("zoAU"),a=n("7KCV");t.__esModule=!0,t.default=void 0;var o=a(n("q1tI")),c=n("elyg"),i=n("nOHt"),s=n("vNVm"),l={};function u(e,t,n,r){if((0,c.isLocalURL)(t)){e.prefetch(t,n,r).catch((function(e){0}));var a=r&&"undefined"!==typeof r.locale?r.locale:e&&e.locale;l[t+"%"+n+(a?"%"+a:"")]=!0}}var d=function(e){var t=!1!==e.prefetch,n=(0,i.useRouter)(),a=n&&n.pathname||"/",d=o.default.useMemo((function(){var t=(0,c.resolveHref)(a,e.href,!0),n=r(t,2),o=n[0],i=n[1];return{href:o,as:e.as?(0,c.resolveHref)(a,e.as):i||o}}),[a,e.href,e.as]),f=d.href,h=d.as,p=e.children,b=e.replace,m=e.shallow,j=e.scroll,v=e.locale;"string"===typeof p&&(p=o.default.createElement("a",null,p));var y=o.Children.only(p),x=y&&"object"===typeof y&&y.ref,g=(0,s.useIntersection)({rootMargin:"200px"}),O=r(g,2),w=O[0],k=O[1],_=o.default.useCallback((function(e){w(e),x&&("function"===typeof x?x(e):"object"===typeof x&&(x.current=e))}),[x,w]);(0,o.useEffect)((function(){var e=k&&t&&(0,c.isLocalURL)(f),r="undefined"!==typeof v?v:n&&n.locale,a=l[f+"%"+h+(r?"%"+r:"")];e&&!a&&u(n,f,h,{locale:r})}),[h,f,k,v,t,n]);var N={ref:_,onClick:function(e){y.props&&"function"===typeof y.props.onClick&&y.props.onClick(e),e.defaultPrevented||function(e,t,n,r,a,o,i,s){("A"!==e.currentTarget.nodeName||!function(e){var t=e.currentTarget.target;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&(0,c.isLocalURL)(n))&&(e.preventDefault(),null==i&&(i=r.indexOf("#")<0),t[a?"replace":"push"](n,r,{shallow:o,locale:s}).then((function(e){e&&i&&(window.scrollTo(0,0),document.body.focus())})))}(e,n,f,h,b,m,j,v)},onMouseEnter:function(e){(0,c.isLocalURL)(f)&&(y.props&&"function"===typeof y.props.onMouseEnter&&y.props.onMouseEnter(e),u(n,f,h,{priority:!0}))}};return(e.passHref||"a"===y.type&&!("href"in y.props))&&(N.href=(0,c.addBasePath)((0,c.addLocale)(h,"undefined"!==typeof v?v:n&&n.locale,n&&n.defaultLocale))),o.default.cloneElement(y,N)};t.default=d},dU0I:function(e,t){e.exports={name:"Nekonako",baseUrl:"/",logo:"/assets/icon.png",description:"Nako Personal Website.",contact:{facebook:"https://facebook.com/galihx11",telegram:"https://t.me/nekonakooo",twitter:"https://twitter.com/@nekonako_",github:"https://github.com/nekonako",email:"mailto:ne.nekonako@gmail.com"}}},jwwS:function(e,t,n){"use strict";var r;t.__esModule=!0,t.LoadableContext=void 0;var a=((r=n("q1tI"))&&r.__esModule?r:{default:r}).default.createContext(null);t.LoadableContext=a},kG2m:function(e,t){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},lwAK:function(e,t,n){"use strict";var r;t.__esModule=!0,t.AmpStateContext=void 0;var a=((r=n("q1tI"))&&r.__esModule?r:{default:r}).default.createContext({});t.AmpStateContext=a},mPvQ:function(e,t,n){var r=n("5fIB"),a=n("rlHP"),o=n("KckH"),c=n("kG2m");e.exports=function(e){return r(e)||a(e)||o(e)||c()}},oI91:function(e,t){e.exports=function(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}},rlHP:function(e,t){e.exports=function(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}},vNVm:function(e,t,n){"use strict";var r=n("zoAU"),a=n("AroE");t.__esModule=!0,t.useIntersection=function(e){var t=e.rootMargin,n=e.disabled||!i,a=(0,o.useRef)(),l=(0,o.useState)(!1),u=r(l,2),d=u[0],f=u[1],h=(0,o.useCallback)((function(e){a.current&&(a.current(),a.current=void 0),n||d||e&&e.tagName&&(a.current=function(e,t,n){var r=function(e){var t=e.rootMargin||"",n=s.get(t);if(n)return n;var r=new Map,a=new IntersectionObserver((function(e){e.forEach((function(e){var t=r.get(e.target),n=e.isIntersecting||e.intersectionRatio>0;t&&n&&t(n)}))}),e);return s.set(t,n={id:t,observer:a,elements:r}),n}(n),a=r.id,o=r.observer,c=r.elements;return c.set(e,t),o.observe(e),function(){o.unobserve(e),0===c.size&&(o.disconnect(),s.delete(a))}}(e,(function(e){return e&&f(e)}),{rootMargin:t}))}),[n,t,d]);return(0,o.useEffect)((function(){i||d||(0,c.default)((function(){return f(!0)}))}),[d]),[h,d]};var o=n("q1tI"),c=a(n("0G5g")),i="undefined"!==typeof IntersectionObserver;var s=new Map},xvhg:function(e,t,n){"use strict";function r(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function a(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e)){var n=[],r=!0,a=!1,o=void 0;try{for(var c,i=e[Symbol.iterator]();!(r=(c=i.next()).done)&&(n.push(c.value),!t||n.length!==t);r=!0);}catch(s){a=!0,o=s}finally{try{r||null==i.return||i.return()}finally{if(a)throw o}}return n}}(e,t)||function(e,t){if(e){if("string"===typeof e)return r(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?r(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}n.d(t,"a",(function(){return a}))},zYID:function(e,t,n){"use strict";var r=n("nKUr"),a=(n("q1tI"),n("YFqc")),o=n.n(a),c=n("dU0I"),i=n.n(c),s=n("a6RD"),l=n.n(s)()((function(){return n.e(4).then(n.t.bind(null,"/uVn",7))}),{ssr:!1,loadableGenerated:{webpack:function(){return["/uVn"]},modules:["react-lineicons"]}});function u(){document.getElementById("sideNav").style.height="100%"}function d(){document.getElementById("sideNav").style.height="0"}t.a=function(){return Object(r.jsx)(r.Fragment,{children:Object(r.jsxs)("div",{id:"navbar",className:"fixed z-10 flex-row w-full align-middle md:hidden lg:hidden xl:hidden ",children:[Object(r.jsxs)("div",{className:"flex items-center justify-between px-6 h-14 bg-secondary",children:[Object(r.jsx)("a",{href:"https://github.com/nekonako",children:Object(r.jsx)("img",{src:"https://avatars.githubusercontent.com/u/46141275",alt:"nekonako",width:"32px",className:"border-2 rounded-full text-accent border-current"})}),Object(r.jsx)("span",{className:"text-2xl font-bold",children:Object(r.jsx)(o.a,{href:"/",children:"nekonako"})}),Object(r.jsx)("a",{onClick:u,className:"md:hidden","data-target":"navMenu",children:Object(r.jsx)("i",{className:"font-bold",children:Object(r.jsx)(l,{name:"menu"})})})]}),Object(r.jsx)("div",{id:"sideNav",className:"flex flex-col justify-center inline-block w-full text-center mt-14 bg-primary sidenav",children:Object(r.jsxs)("div",{className:"sidenav-content",children:[Object(r.jsx)(o.a,{href:"/",children:"Home"}),Object(r.jsx)(o.a,{href:"/projects",children:"Projects"}),Object(r.jsx)(o.a,{href:"/friends",children:"friends"}),Object(r.jsx)(o.a,{href:"/about",children:"About"}),Object(r.jsxs)("div",{style:{marginTop:"20%"},className:"flex flex-row items-center justify-center inline-block align-middle",children:[Object(r.jsx)("a",{href:i.a.contact.github,target:"blank",className:"font-bold ",children:Object(r.jsx)("span",{className:"p-0 text-xl",children:Object(r.jsx)("i",{children:Object(r.jsx)(l,{name:"github"})})})}),Object(r.jsx)("a",{href:i.a.contact.twitter,target:"blank",className:"font-bold",children:Object(r.jsx)("span",{className:"p-0 text-xl",children:Object(r.jsx)("i",{children:Object(r.jsx)(l,{name:"twitter"})})})}),Object(r.jsx)("a",{href:i.a.contact.email,target:"blank",className:"font-bold ",children:Object(r.jsx)("span",{className:"p-0 text-xl",children:Object(r.jsx)("i",{children:Object(r.jsx)(l,{name:"envelope"})})})}),Object(r.jsx)("a",{href:i.a.contact.telegram,target:"blank",className:"font-bold ",children:Object(r.jsx)("span",{className:"p-0 text-xl",children:Object(r.jsx)("i",{children:Object(r.jsx)(l,{name:"telegram"})})})})]}),Object(r.jsx)("a",{onClick:d,style:{marginTop:"5%"},className:"text-xl font-bold contents closebtn",children:Object(r.jsx)("i",{className:" has-text-dark is-size-3",children:Object(r.jsx)(l,{name:"chevron-down"})})})]})})]})})}}}]);