if(!self.define){let e,s={};const l=(l,t)=>(l=new URL(l+".js",t).href,s[l]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=l,e.onload=s,document.head.appendChild(e)}else e=l,importScripts(l),s()})).then((()=>{let e=s[l];if(!e)throw new Error(`Module ${l} didn’t register its module`);return e})));self.define=(t,n)=>{const i=e||("document"in self?document.currentScript.src:"")||location.href;if(s[i])return;let o={};const r=e=>l(e,i),u={module:{uri:i},exports:o,require:r};s[i]=Promise.all(t.map((e=>u[e]||r(e)))).then((e=>(n(...e),o)))}}define(["./workbox-db5fc017"],(function(e){"use strict";e.setCacheNameDetails({prefix:"employcity"}),self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"/ectest/css/about.5a56269c.css",revision:null},{url:"/ectest/css/app.de835688.css",revision:null},{url:"/ectest/fonts/Raleway-300.6a9ae5cf.woff2",revision:null},{url:"/ectest/fonts/Raleway-300.735b5a13.woff",revision:null},{url:"/ectest/fonts/Raleway-400.b6956e76.woff",revision:null},{url:"/ectest/fonts/Raleway-400.e28c35f3.woff2",revision:null},{url:"/ectest/fonts/Raleway-500.42aa4666.woff",revision:null},{url:"/ectest/fonts/Raleway-500.a82bdb7e.woff2",revision:null},{url:"/ectest/fonts/Raleway-600.a1fd4ecf.woff2",revision:null},{url:"/ectest/fonts/Raleway-600.e3e8a7f3.woff",revision:null},{url:"/ectest/fonts/Raleway-700.9744eba2.woff",revision:null},{url:"/ectest/fonts/Raleway-700.ec488335.woff2",revision:null},{url:"/ectest/fonts/Raleway-800.d70b11da.woff",revision:null},{url:"/ectest/fonts/Raleway-800.f2e7597b.woff2",revision:null},{url:"/ectest/fonts/Raleway-900.2cc6d17e.woff2",revision:null},{url:"/ectest/fonts/Raleway-900.c8864412.woff",revision:null},{url:"/ectest/img/document.4f3bf399.svg",revision:null},{url:"/ectest/img/file.77ad6d88.svg",revision:null},{url:"/ectest/img/hero-bg.ba91688d.png",revision:null},{url:"/ectest/img/mail.4f5d85d3.svg",revision:null},{url:"/ectest/img/message.8b752531.svg",revision:null},{url:"/ectest/img/money.c75871b8.svg",revision:null},{url:"/ectest/img/order-bg.b0ca77ce.png",revision:null},{url:"/ectest/img/percent.885dd116.svg",revision:null},{url:"/ectest/img/qiwi.2c8d8227.svg",revision:null},{url:"/ectest/img/search.698434d3.svg",revision:null},{url:"/ectest/img/vk.d26cb991.svg",revision:null},{url:"/ectest/img/web-money.08d1346a.svg",revision:null},{url:"/ectest/img/yandex-money.e60f5096.svg",revision:null},{url:"/ectest/index.html",revision:"027e80b7c1099f9a751fa3b68a43a1e8"},{url:"/ectest/js/about.b67f46c3.js",revision:null},{url:"/ectest/js/app.9b28aaaf.js",revision:null},{url:"/ectest/js/chunk-vendors.a4917802.js",revision:null},{url:"/ectest/manifest.json",revision:"2fe45c8757ab6a1dbf5b352507d8e485"},{url:"/ectest/robots.txt",revision:"b6216d61c03e6ce0c9aea6ca7808f7ca"}],{})}));
//# sourceMappingURL=service-worker.js.map
