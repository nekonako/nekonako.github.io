if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let s=Promise.resolve();return a[e]||(s=new Promise(async s=>{if("document"in self){const a=document.createElement("script");a.src=e,document.head.appendChild(a),a.onload=s}else importScripts(e),s()})),s.then(()=>{if(!a[e])throw new Error(`Module ${e} didn’t register its module`);return a[e]})},s=(s,a)=>{Promise.all(s.map(e)).then(e=>a(1===e.length?e[0]:e))},a={require:Promise.resolve(s)};self.define=(s,c,r)=>{a[s]||(a[s]=Promise.resolve().then(()=>{let a={};const n={uri:location.origin+s.slice(1)};return Promise.all(c.map(s=>{switch(s){case"exports":return a;case"module":return n;default:return e(s)}})).then(e=>{const s=r(...e);return a.default||(a.default=s),a})}))}}define("./service-worker.js",["./workbox-c2b5e142"],(function(e){"use strict";importScripts(),e.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/2895ea5fb626db97f5174291a2d597b5.html",revision:"d41d8cd98f00b204e9800998ecf8427e"},{url:"/_next/static/EGCOHObFR7GzjqULJMZhB/_buildManifest.js",revision:"952d2d94a1bc486d5cd299f78dcd6f86"},{url:"/_next/static/EGCOHObFR7GzjqULJMZhB/_ssgManifest.js",revision:"abee47769bf307639ace4945f9cfd4ff"},{url:"/_next/static/chunks/04382cea7eedbf2a09e731028c2ee4334c25a583.629857b7db446aefce74.js",revision:"22ee622f8c6671d9d0c5c5d7723c020f"},{url:"/_next/static/chunks/4.6de060e04351ad1d3b3e.js",revision:"b901dd8d764ede280ac0f1ca2de16d4c"},{url:"/_next/static/chunks/68b1f8c8af300bee8afbbfa99097b27cc067ee5e.575d480505371ab1b719.js",revision:"bfa70089d303889bc1fe086d6a6a600e"},{url:"/_next/static/chunks/f6c1573df2bcd19387b5f6d0c994240b74a4f5e5.da3eaf86be6a77cfb8ac.js",revision:"33581e28e6d874e1d45be7bea89940c7"},{url:"/_next/static/chunks/framework.d5b3049ec8e67eb8b888.js",revision:"55bdba2c40c93ef046e9be21abc440b8"},{url:"/_next/static/chunks/main-2b8b8352519d7b781b87.js",revision:"4e9cea587ec3853845b75cb15e637318"},{url:"/_next/static/chunks/pages/_app-cddf38d516e17a71c9ac.js",revision:"bd6f89eed1226b6cde9368d4289bf770"},{url:"/_next/static/chunks/pages/_error-0da53c34138717f84040.js",revision:"0ffc5512b987cb9dbdf2f00ea42a8761"},{url:"/_next/static/chunks/pages/about-100a9615661f157580bc.js",revision:"60a6c8277d9d7ad066f15a18ccc94c5d"},{url:"/_next/static/chunks/pages/friends-72b92477db308a22f4dc.js",revision:"d4d0493af90cbd4543d0b2c6acd81ad5"},{url:"/_next/static/chunks/pages/index-dd136fccb429cbdd99a9.js",revision:"93ea488070bc77465b6e4fb20e436949"},{url:"/_next/static/chunks/pages/moehouse-3128a610cc1c1fcda2c6.js",revision:"9e6d454f6332eb92d4981fcc2237a8a2"},{url:"/_next/static/chunks/pages/post/%5Bslug%5D-c8c63299524c8c65bb21.js",revision:"7519b3795fd3813689dcbf40bfafe796"},{url:"/_next/static/chunks/pages/posts-a062515309a4bf1d03e9.js",revision:"ad846fa0b40ce6f2f05ea135aad36bd4"},{url:"/_next/static/chunks/pages/project/%5Bslug%5D-4887a91dc4eb073924ea.js",revision:"dffebf9778c0f9a278a9422da722c664"},{url:"/_next/static/chunks/pages/projects-4b25a9a048000682f97a.js",revision:"51df2ce1db8f1b7bc6f09993c6602642"},{url:"/_next/static/chunks/polyfills-ff58146f96da6d6b6775.js",revision:"14bbf53b8657470c8c5e7351a19ccce7"},{url:"/_next/static/chunks/webpack-9f3f99755500b0768771.js",revision:"3364daefa3e01a7365b08e128d000f85"},{url:"/_next/static/css/10ace6f9a789c81cfbdd.css",revision:"caf668ada227760e5c4a80209bb33e5b"},{url:"/assets/furare-girl.png",revision:"a31ddfc5435ffc2f1d2185e2024b1af5"},{url:"/assets/icon192.png",revision:"3c166c8e3c7f4f1a1be14502634e3101"},{url:"/assets/icon384.png",revision:"6d77c460683da542b798ba4b5678c4e7"},{url:"/assets/icon512.png",revision:"a356a9fa0bd385c1f16bbb13285e8158"},{url:"/assets/nako.jpg",revision:"21d78081c8975232672cc64dcf19f230"},{url:"/assets/post/1-tutorial-awesomewm/cover.png",revision:"c1d87228ae931445c00b37ab9b9cfd50"},{url:"/assets/post/1-tutorial-awesomewm/hello-world-1.png",revision:"fe328aa7ea201d8361d888ea19e5abc1"},{url:"/assets/post/1-tutorial-awesomewm/hello-world-2.png",revision:"84c5f66a091b03bf9345a063fb635372"},{url:"/assets/post/1-tutorial-awesomewm/hello-world-3.png",revision:"3869b8c898201acab07e643f49fee864"},{url:"/assets/post/hal-yang-dilakukan-setelah-install-arch-linux/cover.png",revision:"54be11f25ab2a6abaccc0e1ae82f3785"},{url:"/assets/post/how-i-rebuild-this-site-from-gatsby-to-nextsjs/cover.png",revision:"baca32f914a565071643eb667f4c7fdb"},{url:"/assets/post/memahami-asynchronus-programming/cover.png",revision:"930cd22d6bf4ab7ee2388874bca4d9a2"},{url:"/assets/post/mengenal-lebih-lauh-x-system-pada-linux/cover.png",revision:"81ba3f25ad36bc418485b5b3bf35daeb"},{url:"/assets/post/setup-xfwm-standalone/cover.png",revision:"2e406a80e4edd46abd42fdd43451bb91"},{url:"/assets/post/setup-xfwm-standalone/xfwm-tiling.png",revision:"3da36dc16ae11ca2d543905cfb25eafe"},{url:"/assets/post/setup-xfwm-standalone/xfwm.png",revision:"b402d95047cfa5b0e082c6715bcc817e"},{url:"/assets/post/workflow-neovim-saya/cover.png",revision:"fcc7fc9511527430e0591417c6eab64d"},{url:"/assets/project/autofil/cover.png",revision:"ea1009e7d93bc5a392e7dcbc8d4d6e23"},{url:"/assets/project/calc/cover.png",revision:"6a16b0deadadadadd54bd62e58ceaf7c"},{url:"/assets/project/covid-ingfo/cover.png",revision:"fdef59503d577ed0684364f8b51c22a8"},{url:"/assets/project/dotfiles/cover.png",revision:"c7a6c138a5e0e9044eda6f4c8777fccc"},{url:"/assets/project/gotodo/cover.png",revision:"7b0523106437c5af0ae9cd9d5a751874"},{url:"/assets/project/jasabase/cover.png",revision:"7c072c2a86117d96657097d8ca2f60c0"},{url:"/assets/project/moechat/cover.png",revision:"08b23f7446443986664d0fdf83785817"},{url:"/assets/project/moemeet/cover.png",revision:"72c689af659e92d68fcaf220611e2db0"},{url:"/assets/project/nako-notes/cover.png",revision:"235a5a7ffbbb1326d3808e4c2c2d9d14"},{url:"/assets/project/nekonako.me/cover.png",revision:"5ec250508686e946bac81cc47f79b804"},{url:"/assets/project/nrc/cover.png",revision:"5c257e55dc03fab1f5e394adc8a33148"},{url:"/assets/project/subnet/cover.png",revision:"3c4ce6c58a5fb5f2e8eb264dc36f0e64"},{url:"/assets/project/xresources-nvim/cover.png",revision:"79b60883507c7e7629216841b09527a8"},{url:"/assets/ricing/fuel.png",revision:"27311237c3e26d37ee0b03a4f0859808"},{url:"/assets/ricing/furare-girl.png",revision:"2e0cac9427fe4be21ce751ef878f7991"},{url:"/assets/ricing/nako-classic.png",revision:"58158248189844220b8cd88936366781"},{url:"/assets/ricing/palenight-i3.png",revision:"d89482c61c69ce6cf06fa56fe7b6bf91"},{url:"/favicon.ico",revision:"3c166c8e3c7f4f1a1be14502634e3101"},{url:"/manifest.json",revision:"7fb62f80719d864a09a3c99bd2198fd8"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[new e.ExpirationPlugin({maxEntries:1,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis|gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\/api\/.*$/i,new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/.*/i,new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET")}));
