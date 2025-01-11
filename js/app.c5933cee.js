(function(){"use strict";var t={4061:function(t,e,n){var i=n(5130),r=n(6768),o=n(144),c=n.p+"img/store_w.73fed77f.png",s=n.p+"img/options-lines.3e768a64.png",a=n.p+"img/basket.75074707.png",u=n.p+"img/waiting.e9bde6fd.png",l=n(4232),p=n.p+"img/star.5872b999.png";const d={class:"product_card"},g={class:"rate_box"},f={class:"text rate"},m={class:"image_box"},v=["src"],k={class:"text price"},h={class:"name text"},_={class:"text category"};var b={__name:"store_card",props:{id:Number,title:String,price:Number,description:String,category:String,image:String,rate:Number,count:Number},setup(t){return(e,n)=>((0,r.uX)(),(0,r.CE)("div",d,[(0,r.Lk)("div",g,[n[0]||(n[0]=(0,r.Lk)("img",{class:"star",src:p},null,-1)),(0,r.Lk)("p",f,(0,l.v_)(t.rate),1)]),(0,r.Lk)("div",m,[(0,r.Lk)("img",{src:t.image,class:"product_img"},null,8,v)]),(0,r.Lk)("p",k,(0,l.v_)(t.price)+" $",1),(0,r.Lk)("p",h,[(0,r.eW)((0,l.v_)(t.title)+" / ",1),(0,r.Lk)("span",_,(0,l.v_)(t.category),1)]),n[1]||(n[1]=(0,r.Lk)("button",{class:"butt"},"В корзину",-1))]))}};const y=b;var L=y;const C=["onClick"];var w={__name:"categories_bar",props:{categories:String},setup(t){function e(t){let e=(0,o.KR)(null);fetch(`https://fakestoreapi.com/products/category/${t}`).then((t=>t.json())).then((t=>e.value=t))}return(n,i)=>((0,r.uX)(),(0,r.CE)("div",null,[i[0]||(i[0]=(0,r.Lk)("h1",{class:"text title"},"Категории товаров",-1)),((0,r.uX)(!0),(0,r.CE)(r.FK,null,(0,r.pI)(t.categories,(t=>((0,r.uX)(),(0,r.CE)("p",{class:"text list",key:t,style:{cursor:"pointer"},onClick:n=>e(t)},(0,l.v_)(t.replace(t[0],t[0].toUpperCase())),9,C)))),128))]))}};const x=w;var R=x;const S={class:"window hide product_background"};var X={__name:"trade_elem",props:{id:Number,title:String,price:Number,description:String,category:String,image:String,rate:Number,count:Number},setup(t){return(t,e)=>((0,r.uX)(),(0,r.CE)("div",S,e[0]||(e[0]=[(0,r.Lk)("div",{class:"trade"},null,-1)])))}};const E=X;var O=E;const j={class:"menu_for hide window"},N={key:1,class:"text"};var K={__name:"App",setup(t){let e=(0,o.KR)(null),n=(0,o.KR)(null),i=(0,o.KR)(null);function l(){fetch("https://fakestoreapi.com/products").then((t=>t.json())).then((t=>e.value=t))}function p(){let t=document.querySelector(".menu_for");t.classList.contains("hide")?(t.classList.remove("hide"),fetch("https://fakestoreapi.com/products/categories").then((t=>t.json())).then((t=>n.value=t))):t.classList.add("hide")}function d(){let t=document.querySelector(".window");t.classList.contains("hide")||t.classList.add("hide")}function g(t){i.value=e.value[t-1];let n=document.querySelector(".product_background");n.classList.contains("hide")?n.classList.remove("hide"):n.classList.add("hide")}return(t,f)=>((0,r.uX)(),(0,r.CE)(r.FK,null,[(0,r.Lk)("div",{class:"header"},[f[2]||(f[2]=(0,r.Lk)("div",{class:"ico"},[(0,r.Lk)("img",{class:"logo",src:c})],-1)),(0,r.Lk)("div",{class:"menu_bar"},[(0,r.Lk)("div",{class:"menu_item",onClick:p},f[0]||(f[0]=[(0,r.Lk)("img",{class:"logo_menu",src:s},null,-1),(0,r.Lk)("p",{class:"text menu"},"Категории",-1)])),f[1]||(f[1]=(0,r.Lk)("div",{class:"menu_item"},[(0,r.Lk)("img",{class:"logo_menu",src:a}),(0,r.Lk)("p",{class:"text menu"},"Корзина")],-1))])]),(0,r.Lk)("div",j,[(0,o.R1)(n)?((0,r.uX)(),(0,r.Wv)(R,{key:0,style:{margin:"0px 20px"},categories:(0,o.R1)(n)},null,8,["categories"])):((0,r.uX)(),(0,r.CE)("p",N,"Загрузка..."))]),(0,o.R1)(e)?((0,r.uX)(),(0,r.CE)("div",{key:0,class:"cards",onClick:d},[((0,r.uX)(!0),(0,r.CE)(r.FK,null,(0,r.pI)((0,o.R1)(e),(t=>((0,r.uX)(),(0,r.Wv)(L,{onClick:e=>g(t.id),key:t,id:t.id,title:t.title,price:t.price,description:t.description,category:t.category,image:t.image,rate:t.rating.rate,count:t.rating.count},null,8,["onClick","id","title","price","description","category","image","rate","count"])))),128))])):((0,r.uX)(),(0,r.CE)("div",{key:1,style:{width:"90%",height:"75vh"},onMousemove:l},f[3]||(f[3]=[(0,r.Lk)("img",{src:u,style:{width:"10%",position:"absolute",left:"50%",top:"50%",animation:"loading 3s infinite"}},null,-1)]),32)),(0,o.R1)(i)?((0,r.uX)(),(0,r.Wv)(O,{key:2,id:(0,o.R1)(i).id,title:(0,o.R1)(i).title,price:(0,o.R1)(i).price,description:(0,o.R1)(i).description,category:(0,o.R1)(i).category,image:(0,o.R1)(i).image,rate:(0,o.R1)(i).rating.rate,count:(0,o.R1)(i).rating.count},null,8,["id","title","price","description","category","image","rate","count"])):(0,r.Q3)("",!0)],64))}};const F=K;var W=F;(0,i.Ef)(W).mount("#app")}},e={};function n(i){var r=e[i];if(void 0!==r)return r.exports;var o=e[i]={exports:{}};return t[i].call(o.exports,o,o.exports,n),o.exports}n.m=t,function(){var t=[];n.O=function(e,i,r,o){if(!i){var c=1/0;for(l=0;l<t.length;l++){i=t[l][0],r=t[l][1],o=t[l][2];for(var s=!0,a=0;a<i.length;a++)(!1&o||c>=o)&&Object.keys(n.O).every((function(t){return n.O[t](i[a])}))?i.splice(a--,1):(s=!1,o<c&&(c=o));if(s){t.splice(l--,1);var u=r();void 0!==u&&(e=u)}}return e}o=o||0;for(var l=t.length;l>0&&t[l-1][2]>o;l--)t[l]=t[l-1];t[l]=[i,r,o]}}(),function(){n.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return n.d(e,{a:e}),e}}(),function(){n.d=function(t,e){for(var i in e)n.o(e,i)&&!n.o(t,i)&&Object.defineProperty(t,i,{enumerable:!0,get:e[i]})}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){n.p="/FakeStore/"}(),function(){var t={524:0};n.O.j=function(e){return 0===t[e]};var e=function(e,i){var r,o,c=i[0],s=i[1],a=i[2],u=0;if(c.some((function(e){return 0!==t[e]}))){for(r in s)n.o(s,r)&&(n.m[r]=s[r]);if(a)var l=a(n)}for(e&&e(i);u<c.length;u++)o=c[u],n.o(t,o)&&t[o]&&t[o][0](),t[o]=0;return n.O(l)},i=self["webpackChunkfake_store"]=self["webpackChunkfake_store"]||[];i.forEach(e.bind(null,0)),i.push=e.bind(null,i.push.bind(i))}();var i=n.O(void 0,[504],(function(){return n(4061)}));i=n.O(i)})();
//# sourceMappingURL=app.c5933cee.js.map