<script setup>
  defineProps({
    id: Number,
    name: String,
    image: String,
    price: Number
  })
</script>

<template>
  <div class="card">
    <img :src="image">
    <div>{{ id }}</div>
    <div>{{ name }}</div>
    <div>{{ price }}</div>    
  </div>
</template>

<style scoped>
  .card {
    background-color: beige;
    img {
      max-width: 100px;
    }
  }
</style>