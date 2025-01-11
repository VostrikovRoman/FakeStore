<template>
    <div>
        <h1 class="text title">Категории товаров</h1>
        <p class="text list" v-for="category in categories" :key="category" style="cursor:pointer;"
        @click="GetDataCategory(category)"
        >{{category.replace(category[0], category[0].toUpperCase())}}</p>
    </div>
</template>

<script setup>
import {defineProps} from 'vue'
import {ref} from 'vue'



defineProps({
  categories:String
})
function GetDataCategory(c){
    let data = ref(null)
  fetch(`https://fakestoreapi.com/products/category/${c}`)
            .then(res=>res.json())
            .then(json=>data.value = json)
    
}

</script>

<style>
.text.title{
    font-size: 20px;
    text-decoration: underline;
}
.text.list:hover{
    text-decoration:underline;
}

</style>