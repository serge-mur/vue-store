<script setup>
  import { useStore } from '@/stores/store'  
  import { storeToRefs } from 'pinia'
  import { IMAGE_PRODUCTS_URL } from '@/constants/api'

  const props = defineProps({
    id: String
  })

  const store = useStore() 
  const { product } = storeToRefs(store)

  store.getProduct(props.id)

</script>

<template>
  <div class="card-detail">
    {{ product.name }}
    {{ product.price }}
    <img :src="`${IMAGE_PRODUCTS_URL}${product.imagePath}`">
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