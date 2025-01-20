<template>
    <div class="product_card" @mousemove="Refresh(id)">
        <div class="rate_box">
            <img class="star" src="../assets/star.png">
            <p class="text rate">{{ rate }}</p>
        </div>
        <div class="image_box">
            <img :src="image" class="product_img">
        </div>
        <p class="text price">{{ price }} &dollar;</p>
        <p class="name text" translate="no">{{ title }} / <span class="text category" translate="yes">{{ category }}</span></p>
        <button class="butt" translate="no" @click="InBasket(id, title, price)" v-if="!in_basket">В корзину</button>
        <button class="butt in_basket" translate="no" v-if="in_basket">В корзине</button>
    </div>
</template>

<script setup>
import {ref} from 'vue'
import {defineProps} from 'vue'

defineProps({
  id:Number,
  title: String,
  price: Number,
  category: String,
  image: String,
  rate: Number
})

let in_basket = ref(false)
let basket_data = ref(JSON.parse(localStorage.getItem('basket_data')))

function InBasket(id, title, price){
    let this_data = {
        "id": id,
        "title": title,
        "price": price
    }
    basket_data.value.push(this_data)
    localStorage.setItem('basket_data', JSON.stringify(basket_data.value))
    in_basket.value = true
}
function Refresh (id){
    let i = 0
    while (i<basket_data.value.length){
        if (basket_data.value[i].id == id){
            in_basket.value = true
        }
        i++
    }
}

</script>

<style>
.product_card{
    background: var(--white);
    display: inline-block;
    margin: 20px;
    padding: 10px;
    width: 25%;
    border-radius: 5px;
    box-shadow: 0px 0px 10px var(--grey);
    cursor: pointer;
    transition: 0.25s;
}
.product_card:hover{
    transform: scale(1.05);
}
.product_img{
    width: 100%;
}
.text.price{
    font-size: 20px;
    color: var(--purple);
}
.text.category{
    color:var(--light-purple);
}
.star{
    width: 20px;
    display: inline-block;
    margin: 0px 15px 0px 0px;
}
.butt{
    width: 100%;
    padding: 10px;
    background: none;
    border: solid 2px var(--purple);
    color: var(--purple);
    font-size: 16px;
    font-family: 'Caviar Dreams Bold';
    transition: 0.25s;
    cursor: pointer;
}
.butt.in_basket{
    background: var(--light-purple);
    border: var(--grey);
    color: var(--white);
    cursor: initial !important;
}
.butt.in_basket:hover{
    background: var(--light-purple);
}
.butt:hover{
    background: var(--purple);
    color: var(--white);
}
.rate_box{
    width: 100%;
    display: flex;
    align-items: center;
}
</style>