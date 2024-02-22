<script setup>
  import { useStore } from '@/stores/store'

  defineProps({
    cartId: Number,
    id: Number,
    name: String,
    image: String,
    price: Number
  })

  const store = useStore()

</script>

<template>
  <div class="card">
    <div>{{ cartId }}</div>
    <img :src="image">
    <div>{{ id }}</div>
    <div>{{ name }}</div>
    <div>{{ price }}</div>
    <button @click="store.delFromCart(cartId)">del</button>
  </div>
</template>

<style lang="scss" scoped>
  .card {
    background-color: beige;
    img {
      max-width: 50px;
    }
  }
</style>