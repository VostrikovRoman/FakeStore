<template>
  <div class="header" >
    <div class="ico">
      <img class="logo" src="./assets/store_w.png">
    </div>    
    <div class="menu_bar">
      <div class="menu_item" @click="OpenCategories">
        <img class="logo_menu" src="./assets/options-lines.png">
        <p class="text menu">Категории</p>
      </div>
      <div class="menu_item">
        <img class="logo_menu" src="./assets/basket.png">
        <p class="text menu">Корзина</p>
      </div>
    </div>
  </div>
  <div class="menu_for hide window">
    <categories_bar style="margin: 0px 20px;" :categories="categories" v-if="categories"></categories_bar>
    <p class="text" v-else>Загрузка...</p>
  </div>
  <div class="cards" @click="CloseWindow" v-if="data">
    <store_card 
      @click="LoadProduct(elem.id)"
      v-for="elem in data"
      :key="elem"
      :title="elem.title"
      :price="elem.price" 
      :category="elem.category" 
      :image="elem.image" 
      :rate="elem.rating.rate" 

    ></store_card>
  </div>
  <div style="width: 90%; height: 75vh;" v-else @mousemove="GetData">
    <img src="./assets/waiting.png" style="width: 10%;
    position: absolute;
    left: 50%;
    top: 50%;
    animation: loading 3s infinite;
    ">
  </div>
  <trade_elem
    v-if="product_data"
    :id="product_data.id" 
    :title="product_data.title"
    :price="product_data.price" 
    :description="product_data.description" 
    :category="product_data.category" 
    :image="product_data.image" 
    :rate="product_data.rating.rate" 
    :count="product_data.rating.count"
  ></trade_elem>
</template> 

<!--  -->

<script setup>
import {ref} from 'vue'
import store_card from './components/store_card.vue'
import categories_bar from './components/categories_bar.vue'
import trade_elem from './components/trade_elem.vue'

let data = ref(null)
let categories = ref(null)
let product_data = ref(
  {
    "id": 1,
    "title": "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
    "price": 109.95,
    "description": "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
    "category": "men's clothing",
    "image": "https://downloader.disk.yandex.ru/preview/97c88a4cfc9963b57c2d16b02b36fc5aed001fdd4dde26d73c02eab1f2aed9c7/6783996f/9TJw-qJWe3yfaJOX77g7zS2Huj3wr5F-SMEE2IK8ux_A3qIsBfCrTxHAuMIfYZLox8g9i9D37ovSABcUvcAybw%3D%3D?uid=0&filename=81fPKd-2AYL._AC_SL1500_.jpg&disposition=inline&hash=&limit=0&content_type=image%2Fjpeg&owner_uid=0&tknv=v2&size=2048x2048",
    "rating": {
      "rate": 3.9,
      "count": 120
    }
  }
)

// let product_data = ref(null)

function GetData(){
  fetch('https://fakestoreapi.com/products')
            .then(res=>res.json())
            .then(json=>data.value = json)
}
function OpenCategories(){
  let elem = document.querySelector(".menu_for")
  if (elem.classList.contains('hide')){
    elem.classList.remove('hide')
    fetch('https://fakestoreapi.com/products/categories')
            .then(res=>res.json())
            .then(json=>categories.value = json)
  }
  else{
    elem.classList.add('hide')
  }
}
function CloseWindow(){
  let elem = document.querySelector(".window")
  if (!elem.classList.contains('hide')){
    elem.classList.add('hide')
  }
}
function LoadProduct (id_product){
  product_data.value = data.value[id_product-1]
  let elem = document.querySelector(".product_background")
  if (elem.classList.contains('hide')){
    elem.classList.remove('hide')
  }
  else{
    elem.classList.add('hide')
  }
}





</script>

<style>
body{
  margin: 0px;
  background: var(--white);
  font-family: 'Caviar Dreams Bold';
}
:root{
 --purple:#802c6e;
 --light-purple:#bb8db2;
 --white:#fffdfd;
 --grey:#cbbcc1;
 --yellow:#f7aa35;
 --black:#3a3134;

}
.hide{
  display: none;
  transition: 0.25s;
}
.cards{
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  align-items: flex-start;
}
.header{
  background: var(--purple);
  position: sticky;
  top: 0px;
  width: 100%;
  display: flex;
  box-shadow: 0px 0px 10px 0px;
  font-family: 'Caviar Dreams Bold';
  z-index: 10;
;
}
.logo{
  width: 30%;
}
.menu_bar{
  display: flex;
  align-items: center;
  color: var(--white);
  justify-content: flex-end;
}
.text{
  font-size: 16px;
  color: var(--black);
}
.text.menu{
  color: var(--white);
}
.ico{
  display: flex;
  align-items: center;
  width: 30%;
  margin: 10px 5%;
}
.logo_menu{
  width: 15%;
  margin: 10px;
}
.menu_item{
  display: inline-flex;
  width: 20%;
  margin: 10px;
  align-items: center;
  cursor: pointer;
  transition: 0.25s;
}
.menu_item:hover{
  text-shadow: 0px 0px 10px;
}
.menu_for{
    position: fixed;
    width: 100%;
    background: var(--white);
    z-index: 9;
    box-shadow: 0px 0px 10px 0px;
    padding: 10px 20px;
}
@keyframes loading{
  0%{
    transform: translate(-50%, -50%) rotate(0deg) ;
  }
  100%{
    transform: translate(-50%, -50%) rotate(360deg) ;
  }
}












@font-face {
	font-family: 'Caviar Dreams Bold';
	src: url('./assets/fonts/caviar_dreams_bold.eot'); /* IE 9 Compatibility Mode */
	src: url('./assets/fonts/caviar_dreams_bold.eot?#iefix') format('embedded-opentype'), /* IE < 9 */
		url('./assets/fonts/caviar_dreams_bold.woff2') format('woff2'), /* Super Modern Browsers */
		url('./assets/fonts/caviar_dreams_bold.woff') format('woff'), /* Firefox >= 3.6, any other modern browser */
		url('./assets/fonts/caviar_dreams_bold.ttf') format('truetype'), /* Safari, Android, iOS */
		url('./assets/fonts/caviar_dreams_bold.svg#caviar_dreams_bold') format('svg'); /* Chrome < 4, Legacy iOS */
}
</style>
