(function(){"use strict";var e={9917:function(e,t,i){var r=i(5130),n=i(6768),s=i(144),c=i.p+"img/store_w.73fed77f.png",o=i.p+"img/options-lines.3e768a64.png",a=i.p+"img/basket.75074707.png",l=i.p+"img/waiting.e9bde6fd.png",u=i(4232),p=i.p+"img/star.5872b999.png";const d={class:"product_card"},g={class:"rate_box"},f={class:"text rate"},v={class:"image_box"},m=["src"],k={class:"text price"},h={class:"name text"},L={class:"text category"};var _={__name:"store_card",props:{title:String,price:Number,category:String,image:String,rate:Number},setup(e){return(t,i)=>((0,n.uX)(),(0,n.CE)("div",d,[(0,n.Lk)("div",g,[i[0]||(i[0]=(0,n.Lk)("img",{class:"star",src:p},null,-1)),(0,n.Lk)("p",f,(0,u.v_)(e.rate),1)]),(0,n.Lk)("div",v,[(0,n.Lk)("img",{src:e.image,class:"product_img"},null,8,m)]),(0,n.Lk)("p",k,(0,u.v_)(e.price)+" $",1),(0,n.Lk)("p",h,[(0,n.eW)((0,u.v_)(e.title)+" / ",1),(0,n.Lk)("span",L,(0,u.v_)(e.category),1)]),i[1]||(i[1]=(0,n.Lk)("button",{class:"butt"},"В корзину",-1))]))}};const y=_;var b=y;const x=["onClick"];var w={__name:"categories_bar",props:{categories:String},setup(e){function t(e){let t=(0,s.KR)(null);fetch(`https://fakestoreapi.com/products/category/${e}`).then((e=>e.json())).then((e=>t.value=e))}return(i,r)=>((0,n.uX)(),(0,n.CE)("div",null,[r[0]||(r[0]=(0,n.Lk)("h1",{class:"text title"},"Категории товаров",-1)),((0,n.uX)(!0),(0,n.CE)(n.FK,null,(0,n.pI)(e.categories,(e=>((0,n.uX)(),(0,n.CE)("p",{class:"text list",key:e,style:{cursor:"pointer"},onClick:i=>t(e)},(0,u.v_)(e.replace(e[0],e[0].toUpperCase())),9,x)))),128))]))}};const C=w;var S=C,R=i.p+"img/close.ed26b6bf.png";const E={class:"window product_background"},X={class:"trade"},j={class:"content_box"},O={class:"box image"},F=["src"],K={class:"box"},A={class:"text title product"},N={class:"text category product"},q={class:"text price product"},I={class:"text description product"},W={class:"rate_box"},M={class:"text rate product"},T={class:"text count product"};var B={__name:"trade_elem",props:{id:Number,title:String,price:Number,description:String,category:String,image:String,rate:Number,count:Number},setup(e){function t(){let e=document.querySelectorAll(".window"),t=0;while(t<e.length)e[t].classList.contains("hide")||e[t].classList.add("hide"),t++}return(i,r)=>((0,n.uX)(),(0,n.CE)("div",E,[(0,n.Lk)("img",{class:"close",src:R,onClick:t}),(0,n.Lk)("div",X,[(0,n.Lk)("div",j,[(0,n.Lk)("div",O,[(0,n.Lk)("img",{class:"image_box",src:e.image},null,8,F)]),(0,n.Lk)("div",K,[(0,n.Lk)("p",A,(0,u.v_)(e.title),1),(0,n.Lk)("p",N,(0,u.v_)(e.category),1),(0,n.Lk)("p",q,(0,u.v_)(e.price)+" $",1),(0,n.Lk)("p",I,(0,u.v_)(e.description),1),(0,n.Lk)("div",W,[r[0]||(r[0]=(0,n.Lk)("img",{class:"star product",src:p},null,-1)),(0,n.Lk)("p",M,(0,u.v_)(e.rate),1)]),(0,n.Lk)("p",T,"Оценок: "+(0,u.v_)(e.count),1)])]),r[1]||(r[1]=(0,n.Lk)("button",{class:"butt product"},"В корзину",-1))])]))}};const D=B;var J=D;const P={class:"menu_for hide window"},Y={key:1,class:"text"};var $={__name:"App",setup(e){let t=(0,s.KR)(null),i=(0,s.KR)(null),r=(0,s.KR)({id:1,title:"Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",price:109.95,description:"Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",category:"men's clothing",image:"https://downloader.disk.yandex.ru/preview/97c88a4cfc9963b57c2d16b02b36fc5aed001fdd4dde26d73c02eab1f2aed9c7/6783996f/9TJw-qJWe3yfaJOX77g7zS2Huj3wr5F-SMEE2IK8ux_A3qIsBfCrTxHAuMIfYZLox8g9i9D37ovSABcUvcAybw%3D%3D?uid=0&filename=81fPKd-2AYL._AC_SL1500_.jpg&disposition=inline&hash=&limit=0&content_type=image%2Fjpeg&owner_uid=0&tknv=v2&size=2048x2048",rating:{rate:3.9,count:120}});function u(){fetch("https://fakestoreapi.com/products").then((e=>e.json())).then((e=>t.value=e))}function p(){let e=document.querySelector(".menu_for");e.classList.contains("hide")?(e.classList.remove("hide"),fetch("https://fakestoreapi.com/products/categories").then((e=>e.json())).then((e=>i.value=e))):e.classList.add("hide")}function d(){let e=document.querySelector(".window");e.classList.contains("hide")||e.classList.add("hide")}function g(e){r.value=t.value[e-1];let i=document.querySelector(".product_background");i.classList.contains("hide")?i.classList.remove("hide"):i.classList.add("hide")}return(e,f)=>((0,n.uX)(),(0,n.CE)(n.FK,null,[(0,n.Lk)("div",{class:"header"},[f[2]||(f[2]=(0,n.Lk)("div",{class:"ico"},[(0,n.Lk)("img",{class:"logo",src:c})],-1)),(0,n.Lk)("div",{class:"menu_bar"},[(0,n.Lk)("div",{class:"menu_item",onClick:p},f[0]||(f[0]=[(0,n.Lk)("img",{class:"logo_menu",src:o},null,-1),(0,n.Lk)("p",{class:"text menu"},"Категории",-1)])),f[1]||(f[1]=(0,n.Lk)("div",{class:"menu_item"},[(0,n.Lk)("img",{class:"logo_menu",src:a}),(0,n.Lk)("p",{class:"text menu"},"Корзина")],-1))])]),(0,n.Lk)("div",P,[(0,s.R1)(i)?((0,n.uX)(),(0,n.Wv)(S,{key:0,style:{margin:"0px 20px"},categories:(0,s.R1)(i)},null,8,["categories"])):((0,n.uX)(),(0,n.CE)("p",Y,"Загрузка..."))]),(0,s.R1)(t)?((0,n.uX)(),(0,n.CE)("div",{key:0,class:"cards",onClick:d},[((0,n.uX)(!0),(0,n.CE)(n.FK,null,(0,n.pI)((0,s.R1)(t),(e=>((0,n.uX)(),(0,n.Wv)(b,{onClick:t=>g(e.id),key:e,title:e.title,price:e.price,category:e.category,image:e.image,rate:e.rating.rate},null,8,["onClick","title","price","category","image","rate"])))),128))])):((0,n.uX)(),(0,n.CE)("div",{key:1,style:{width:"90%",height:"75vh"},onMousemove:u},f[3]||(f[3]=[(0,n.Lk)("img",{src:l,style:{width:"10%",position:"absolute",left:"50%",top:"50%",animation:"loading 3s infinite"}},null,-1)]),32)),(0,s.R1)(r)?((0,n.uX)(),(0,n.Wv)(J,{key:2,id:(0,s.R1)(r).id,title:(0,s.R1)(r).title,price:(0,s.R1)(r).price,description:(0,s.R1)(r).description,category:(0,s.R1)(r).category,image:(0,s.R1)(r).image,rate:(0,s.R1)(r).rating.rate,count:(0,s.R1)(r).rating.count},null,8,["id","title","price","description","category","image","rate","count"])):(0,n.Q3)("",!0)],64))}};const z=$;var H=z;(0,r.Ef)(H).mount("#app")}},t={};function i(r){var n=t[r];if(void 0!==n)return n.exports;var s=t[r]={exports:{}};return e[r].call(s.exports,s,s.exports,i),s.exports}i.m=e,function(){var e=[];i.O=function(t,r,n,s){if(!r){var c=1/0;for(u=0;u<e.length;u++){r=e[u][0],n=e[u][1],s=e[u][2];for(var o=!0,a=0;a<r.length;a++)(!1&s||c>=s)&&Object.keys(i.O).every((function(e){return i.O[e](r[a])}))?r.splice(a--,1):(o=!1,s<c&&(c=s));if(o){e.splice(u--,1);var l=n();void 0!==l&&(t=l)}}return t}s=s||0;for(var u=e.length;u>0&&e[u-1][2]>s;u--)e[u]=e[u-1];e[u]=[r,n,s]}}(),function(){i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,{a:t}),t}}(),function(){i.d=function(e,t){for(var r in t)i.o(t,r)&&!i.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}}(),function(){i.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){i.p="/FakeStore/"}(),function(){var e={524:0};i.O.j=function(t){return 0===e[t]};var t=function(t,r){var n,s,c=r[0],o=r[1],a=r[2],l=0;if(c.some((function(t){return 0!==e[t]}))){for(n in o)i.o(o,n)&&(i.m[n]=o[n]);if(a)var u=a(i)}for(t&&t(r);l<c.length;l++)s=c[l],i.o(e,s)&&e[s]&&e[s][0](),e[s]=0;return i.O(u)},r=self["webpackChunkfake_store"]=self["webpackChunkfake_store"]||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))}();var r=i.O(void 0,[504],(function(){return i(9917)}));r=i.O(r)})();
//# sourceMappingURL=app.896dbdd2.js.map