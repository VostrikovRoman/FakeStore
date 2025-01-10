<template>
    <div>
        <h1 class="text title">Категории товаров</h1>
        <p class="text list" v-for="category in categories" :key="category" style="cursor:pointer;">{{category.replace(category[0], category[0].toUpperCase())}}</p>
    </div>
</template>

<script setup>

let categories = [
  "electronics",
  "jewelery",
  "men's clothing",
  "women's clothing"
]

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