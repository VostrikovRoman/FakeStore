<template>
    <div class="product_card">
        <div class="rate_box">
            <img class="star" src="../assets/star.png">
            <p class="text rate">{{ rate }}</p>
        </div>
        <div class="image_box">
            <img :src="image" class="product_img">
        </div>
        <p class="text price">{{ price }} &dollar;</p>
        <p class="name text">{{ title }} / <span class="text category">{{ category }}</span></p>
        <button class="butt">В корзину</button>
    </div>
</template>

<script setup>
import {defineProps} from 'vue'

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
.image_box{

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