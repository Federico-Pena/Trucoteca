if(!self.define){let e,i={};const n=(n,s)=>(n=new URL(n+".js",s).href,i[n]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=n,e.onload=i,document.head.appendChild(e)}else e=n,importScripts(n),i()})).then((()=>{let e=i[n];if(!e)throw new Error(`Module ${n} didn’t register its module`);return e})));self.define=(s,c)=>{const o=e||("document"in self?document.currentScript.src:"")||location.href;if(i[o])return;let r={};const t=e=>n(e,o),f={module:{uri:o},exports:r,require:t};i[o]=Promise.all(s.map((e=>f[e]||t(e)))).then((e=>(c(...e),r)))}}define(["./workbox-5ffe50d4"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"assets/index-BFUJJ4PS.js",revision:null},{url:"assets/index-CqrHAVh1.css",revision:null},{url:"index.html",revision:"acab92829c5aa6e094ce86fb686bd6f3"},{url:"registerSW.js",revision:"1872c500de691dce40960bb85481de07"},{url:"icons/favicon.ico",revision:"47d66a094ff5ce0c04a329829b7cee71"},{url:"icons/icon-192-maskable.png",revision:"55c742bf1836e82f1576507e8e22b48a"},{url:"icons/icon-192.png",revision:"6944603f55db4ffca348c116c2e48e53"},{url:"icons/icon-512-maskable.png",revision:"3793e13cbf311e067dc029b7fc628cd7"},{url:"icons/icon-512.png",revision:"c73ff1c5aecd6b37a7160235c27e9d35"},{url:"manifest.webmanifest",revision:"ef4e04be0e1cba1f4e9855b3bdea6b4f"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));
