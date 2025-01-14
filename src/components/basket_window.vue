<template>
    <div class="window basket_background">
        <img class="close" src="../assets/close.png" @click="CloseWindow">
        <div class="basket">
            <div class="basket_box">
                <p class="text basket_text">Корзина</p>
                <div class="cart">
                    <table style="width:95%;">
                        <tr>
                            <td><input type="checkbox" id="1_b" class="cart_input"></td>
                            <td class="text cart_text">Охрененный товар</td>
                            <td class="text cart_price">{{100}} &dollar;</td>
                            <td><button class="butt">Удалить</button></td>
                        </tr>
                        <tr>
                            <td><input type="checkbox" id="1_b" class="cart_input"></td>
                            <td class="text cart_text">Нихуа себе</td>
                            <td class="text cart_price">{{50}} &dollar;</td>
                            <td><button class="butt">Удалить</button></td>
                        </tr>
                        <tr>
                            <td><input type="checkbox" id="1_b" class="cart_input"></td>
                            <td class="text cart_text">Полный зашквар молоко за рубль</td>
                            <td class="text cart_price">{{100}} &dollar;</td>
                            <td><button class="butt">Удалить</button></td>
                        </tr>
                    </table>
                    <!-- <div class="cart_elem">
                        <input type="checkbox" id="1_b" class="cart_input">
                        <p class="text cart_text">Охрененный товар<span class="text cart_price">{{100}} &dollar;</span></p>
                    </div>
                    <div class="cart_elem">
                        <input type="checkbox" id="1_b" class="cart_input">
                        <p class="text cart_text">Нихуа себе<span class="text cart_price">{{50}} &dollar;</span></p>
                    </div>
                    <div class="cart_elem">
                        <input type="checkbox" id="1_b" class="cart_input">
                        <p class="text cart_text">Полный зашквар молоко за рубль<span class="text cart_price">{{1}} &dollar;</span></p>
                    </div> -->
                </div>
            </div>
            <button class="butt product" translate="no">К оплате: {{1}} &dollar;</button>
        </div>
    </div>
</template>

<script setup>
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
}
.text.cart_price{
    color: var(--purple);
    margin: 0px 30px;
    font-size:18px;
}
</style>