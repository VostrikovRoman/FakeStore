<template>
    <div class="window product_background hide" @mousemove="Refresh(id)">
        <img class="close" src="../assets/close.png" @click="CloseWindow">
        <div class="trade">
            <div class="content_box">
                <div class="box image">
                    <img class="image_box product" :src="image">
                </div>
                <div class="box">
                    <p class="text title product" translate="no">{{ title }}</p>
                    <p class="text category product">{{ category }}</p>
                    <p class="text price product">{{ price }} &dollar;</p>
                    <p class="text description product">{{ description }}</p>
                    <div class="rate_box">
                        <img class="star product" src="../assets/star.png">
                        <p class="text rate product">{{ rate }}</p>
                    </div>
                    <p class="text count product">Оценок: {{ count }}</p>
                </div>
            </div>
            <button class="butt product" translate="no" v-if="!in_basket">В корзину</button>
            <button class="butt in_basket" translate="no" v-if="in_basket">В корзине</button>
        </div>
    </div>
    
</template>

<script setup>
import {defineProps} from 'vue'
import {ref} from 'vue'

defineProps({
  id: Number,
  title: String,
  price: Number,
  description: String,
  category: String,
  image: String,
  rate: Number,
  count: Number
})

let in_basket = ref(false)
let basket_data = ref(JSON.parse(localStorage.getItem('basket_data')))

function Refresh (id){
    let i= 0
    while (i<basket_data.value.length){
        if (basket_data.value[i].id == id){
            in_basket.value = true
        }
        i++
    }
}

function CloseWindow(){
  let elem = document.querySelectorAll(".window")
  let i = 0
  while (i< elem.length){
    if (!elem[i].classList.contains('hide')){
        elem[i].classList.add('hide')
    }
    i++
  }
}

</script>

<style>
.trade{
    width: 100%;
    font-family: 'Caviar Dreams Bold';
    z-index: 12;
    background: var(--white);
    margin: 15px;
    border-radius: 5px;
    padding: 30px;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
}
.product_background{
    background: #000000a8;
    width: 100%;
    height: 100%;
    position: fixed;
    top: 0;
    z-index: 12;
    display: flex;
}
.close{
    position: absolute;
    z-index: 13;
    right: 30px;
    top: 30px;
    width: 2%;
    cursor: pointer;
    transition: 0.25s;
}
.close:hover{
    transform: scale(1.1);
}
.box{
    width: 50%;
    margin: 10px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    overflow-y: scroll;
}
.box.image{
    overflow: hidden;
    align-items: center;
    justify-content: center;
}
.content_box{
    width: 100%;
    height: 90%;
    display: flex;
}
.butt.product{
    width:50%;
    height: 10%;
    margin-top: 10px;

}
.image_box.product{
    width: 75%;
}
.title.product{
    text-shadow: 0px 0px 10px var(--grey);
}
.category.product{
    color: var(--grey);
    font-size: 14px;
}
.price.product{
    font-size: 30px;
}
.text.product{
    margin-top:10px;
}
.rate.product{
    color: var(--purple);
    font-size: 12px;
}
.count.product{
    color: var(--light-purple);
    font-size: 12px;
}
.star.product{
    margin: 0px 10px 0px 0px;
}
</style>