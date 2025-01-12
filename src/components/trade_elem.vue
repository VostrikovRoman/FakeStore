<template>
    <div class="window product_background">
        <img class="close" src="../assets/close.png" @click="CloseWindow">
        <div class="trade">
            <div class="content_box">
                <div class="box image">
                    <img class="image_box" :src="image">
                </div>
                <div class="box">
                    <p class="text title product">{{ title }}</p>
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
            <button class="butt product">В корзину</button>
        </div>
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

function CloseWindow(){
  let elem = document.querySelectorAll(".window")
  let i = 0
  while (i< elem.length){
    if (!elem[i].classList.contains('hide')){
        elem[i].classList.add('hide')
    }
    i++
  }
//   console.log(elem)
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
    justify-content: center;
}
.box.image{
    overflow: hidden;
    align-items: center;
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
.image_box{
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