<template>
    <div class="product_card">
        <img :src="image" class="product_img">
        <p>{{ title }}</p>
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
    background: var(--grey);
    display: inline-block;
    box-shadow: inset 0px 0px 5px 0px;
    margin: 10px;
    padding: 10px;
}
.product_img{
    width: 100%;
}

</style>