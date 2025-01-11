<template>
    <div class="window hide product_background">
        <div class="trade">
            
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

</script>

<style>
.trade{
    width: 100%;
    font-family: 'Caviar Dreams Bold';
    z-index: 12;
    background: var(--white);
    margin: 15px;
    border-radius: 5px;
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
</style>