if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let s=Promise.resolve();return a[e]||(s=new Promise(async s=>{if("document"in self){const a=document.createElement("script");a.src=e,document.head.appendChild(a),a.onload=s}else importScripts(e),s()})),s.then(()=>{if(!a[e])throw new Error(`Module ${e} didn’t register its module`);return a[e]})},s=(s,a)=>{Promise.all(s.map(e)).then(e=>a(1===e.length?e[0]:e))},a={require:Promise.resolve(s)};self.define=(s,c,n)=>{a[s]||(a[s]=Promise.resolve().then(()=>{let a={};const r={uri:location.origin+s.slice(1)};return Promise.all(c.map(s=>{switch(s){case"exports":return a;case"module":return r;default:return e(s)}})).then(e=>{const s=n(...e);return a.default||(a.default=s),a})}))}}define("./service-worker.js",["./workbox-c2b5e142"],(function(e){"use strict";importScripts(),e.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/static/PxGLm50-SJV_LCOCfYEyP/_buildManifest.js",revision:"009d44dd98fc21a6b64e2cf20effc4c2"},{url:"/_next/static/PxGLm50-SJV_LCOCfYEyP/_ssgManifest.js",revision:"abee47769bf307639ace4945f9cfd4ff"},{url:"/_next/static/chunks/04382cea7eedbf2a09e731028c2ee4334c25a583.dcf8db7cb8f24e28390c.js",revision:"1c3c4656dc9ae8fdd202b25f53c09059"},{url:"/_next/static/chunks/4.6de060e04351ad1d3b3e.js",revision:"b901dd8d764ede280ac0f1ca2de16d4c"},{url:"/_next/static/chunks/a126a9a532a3b1afc256d651e7adb4251496e70b.1666a688ec2cd153544b.js",revision:"0129c9a55026b0044609f8c44282af98"},{url:"/_next/static/chunks/commons.66cfb1557ea573a689d6.js",revision:"cca48cf0ab287995bc148b238852c94f"},{url:"/_next/static/chunks/framework.566d9b9bf0d986dd7c89.js",revision:"84b32afca23e8225e455a1f61cf4d66d"},{url:"/_next/static/chunks/main-1874c89ad3a11e884718.js",revision:"71cfaabaf8ffa4d1a05e97a9306fd512"},{url:"/_next/static/chunks/pages/_app-7904a85e0292e80ba4a4.js",revision:"accdba113f0d65f5d064b86f27f854aa"},{url:"/_next/static/chunks/pages/_error-30be93fe0953d681efdc.js",revision:"37ff4110c28fe3e7893db31a8540ac96"},{url:"/_next/static/chunks/pages/about-dc3fc14139dd18542be2.js",revision:"6d575d6d65e9d4cc31e1541dbcd32140"},{url:"/_next/static/chunks/pages/friends-ed4532e27df301f2ec2b.js",revision:"66e2b41436b0bb2d12a6db7686a56579"},{url:"/_next/static/chunks/pages/index-0808fac46b2ad453a45f.js",revision:"80965a25c05cfe124ffe1e29ca5028fe"},{url:"/_next/static/chunks/pages/post/%5Bslug%5D-b873cb2f3462385aab0b.js",revision:"a9e809eaed26955b95a599183e07cb97"},{url:"/_next/static/chunks/pages/posts-9de2cf3fd6e1524c0b2b.js",revision:"812a5eda0fc3c4cefdd0d904a11c10aa"},{url:"/_next/static/chunks/pages/project/%5Bslug%5D-034aae8ae5e641e45e42.js",revision:"d1b93bb210e5dac7b30ce4fd612ae6de"},{url:"/_next/static/chunks/polyfills-e5012cf49fbb0a2642db.js",revision:"03cf8d0f2720a3ed786ea3c4fd75711d"},{url:"/_next/static/chunks/webpack-9f3f99755500b0768771.js",revision:"3364daefa3e01a7365b08e128d000f85"},{url:"/_next/static/css/cce49933898963cf3e09.css",revision:"128dd57846e334b8edcec3cb8ad484d7"},{url:"/assets/furare-girl.png",revision:"a31ddfc5435ffc2f1d2185e2024b1af5"},{url:"/assets/icon192.png",revision:"3c166c8e3c7f4f1a1be14502634e3101"},{url:"/assets/icon384.png",revision:"6d77c460683da542b798ba4b5678c4e7"},{url:"/assets/icon512.png",revision:"a356a9fa0bd385c1f16bbb13285e8158"},{url:"/assets/nako.jpg",revision:"21d78081c8975232672cc64dcf19f230"},{url:"/assets/post/1-tutorial-awesomewm/cover.png",revision:"c1d87228ae931445c00b37ab9b9cfd50"},{url:"/assets/post/1-tutorial-awesomewm/hello-world-1.png",revision:"fe328aa7ea201d8361d888ea19e5abc1"},{url:"/assets/post/1-tutorial-awesomewm/hello-world-2.png",revision:"84c5f66a091b03bf9345a063fb635372"},{url:"/assets/post/1-tutorial-awesomewm/hello-world-3.png",revision:"3869b8c898201acab07e643f49fee864"},{url:"/assets/post/hal-yang-dilakukan-setelah-install-arch-linux/cover.png",revision:"54be11f25ab2a6abaccc0e1ae82f3785"},{url:"/assets/post/how-i-rebuild-this-site-from-gatsby-to-nextsjs/cover.png",revision:"baca32f914a565071643eb667f4c7fdb"},{url:"/assets/post/memahami-asynchronus-programming/cover.png",revision:"930cd22d6bf4ab7ee2388874bca4d9a2"},{url:"/assets/post/mengenal-lebih-lauh-x-system-pada-linux/cover.png",revision:"81ba3f25ad36bc418485b5b3bf35daeb"},{url:"/assets/post/setup-xfwm-standalone/cover.png",revision:"2e406a80e4edd46abd42fdd43451bb91"},{url:"/assets/post/setup-xfwm-standalone/xfwm-tiling.png",revision:"3da36dc16ae11ca2d543905cfb25eafe"},{url:"/assets/post/setup-xfwm-standalone/xfwm.png",revision:"b402d95047cfa5b0e082c6715bcc817e"},{url:"/assets/post/workflow-neovim-saya/cover.png",revision:"fcc7fc9511527430e0591417c6eab64d"},{url:"/assets/project/nako-notes/cover.png",revision:"004e925d31054ce6c8b4377258ba2f10"},{url:"/assets/ricing/fuel.png",revision:"27311237c3e26d37ee0b03a4f0859808"},{url:"/assets/ricing/furare-girl.png",revision:"2e0cac9427fe4be21ce751ef878f7991"},{url:"/assets/ricing/nako-classic.png",revision:"58158248189844220b8cd88936366781"},{url:"/assets/ricing/palenight-i3.png",revision:"d89482c61c69ce6cf06fa56fe7b6bf91"},{url:"/favicon.ico",revision:"3c166c8e3c7f4f1a1be14502634e3101"},{url:"/manifest.json",revision:"7fb62f80719d864a09a3c99bd2198fd8"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[new e.ExpirationPlugin({maxEntries:1,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis|gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\/api\/.*$/i,new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/.*/i,new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET")}));
