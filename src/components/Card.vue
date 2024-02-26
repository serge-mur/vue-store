<script setup>
  import { useStore } from '@/stores/store'

  defineProps({
    id: String,
    name: String,
    image: String,
    price: Number
  })

  const store = useStore()

</script>

<template>
  <div class="card">
    <img :src="image">
    <div>{{ id }}</div>
    <RouterLink :to="{name: 'detail', params: {id: id}}">
      {{ name }}
    </RouterLink>
    
    <div>{{ price }}</div> 
    <button @click="store.addToCart(id)">Buy</button>
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