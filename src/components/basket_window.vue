<template>
    <div class="window basket_background hide">
        <img class="close" src="../assets/close.png" @click="CloseWindow">
        <div class="basket">
            <div class="basket_box">
                <p class="text basket_text">Корзина</p>
                <div class="cart" @mousemove="Cost">
                    <table style="width:95%;">
                        <tr v-for="elem in data" :key="elem">
                            <td class="text cart_text" translate="no">{{elem.title}}</td>
                            <td class="text cart_price">{{elem.price}} &dollar;</td>
                            <td><button class="butt" translate="no" @click="DeleteElem(elem.id)">Удалить</button></td>
                        </tr>
                    </table>
                </div>
            </div>
            <button class="butt product" translate="no" >К оплате: {{final_price}} &dollar;</button>
        </div>
    </div>
</template>

<script setup>
import {ref} from 'vue'

let data = ref(JSON.parse(localStorage.getItem('basket_data')))
let final_price = ref(0)

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

function Cost (){
    let inputs = document.querySelectorAll(".text.cart_text")
    final_price.value=0
    let i = 0
    while (i<inputs.length){
        final_price.value += data.value[i].price
        i++
    }
    if (final_price.value != 0){
        final_price.value = final_price.value.toFixed(2)
    }
}
function DeleteElem(id){
    let i = 0
    while (i<data.value.length){
        if (id == data.value[i].id){
            data.value.splice(i,1)
            break
        }
        else{
            i++
        }
    }
    localStorage.setItem('basket_data', JSON.stringify(data.value));
}

</script>

<style>
.basket_background{
    background: #000000a8;
    width: 100%;
    height: 100%;
    position: fixed;
    top: 0;
    z-index: 12;
    display: flex;
}
.basket{
    width: 100%;
    font-family: 'Caviar Dreams Bold';
    z-index: 12;
    background: var(--white);
    margin: 15px;
    border-radius: 5px;
    padding: 30px;
    display: flex;
    align-items: center;
    flex-direction: column;
}
.basket_box{
    width: 100%;
    height: 90%;
    display: flex;
    flex-direction: column;
}
.basket_text{
    font-size: 25px !important;
    text-decoration: underline;
    margin: 0px 30px;
}
.cart{
    width:95%;
    height: 100%;
    display:flex;
    margin:30px;
    align-items: flex-start;
    flex-direction: column;
    overflow-y: scroll;
    overflow-x: hidden;
}
.cart_elem{
    border-bottom:dashed var(--light-purple);
    display:flex;
    margin: 10px 0px;
}
.text.cart_text{
    margin-left: 15px;
    width:75%;
    cursor:pointer;
}
.text.cart_price{
    color: var(--purple);
    margin: 0px 30px;
    font-size:18px;
}
.text.cart_text:checked{
    border-bottom:dashed;
}
</style>