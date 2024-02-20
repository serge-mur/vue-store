<script setup>
  import { storeToRefs } from 'pinia'
  import { useStore } from '@/stores/store'
  import { IMAGE_PRODUCTS_URL } from '@/constants/api'

  const store = useStore()

  store.getProducts()

  const { products } = storeToRefs(store) 
  
</script>

<template>
<!--   <pre>
    {{ products }}
  </pre> -->
  <div class="catalog">
    <div
    v-for="product in products"
    :key="product._id"
    class="card"
    >
    <img :src="`${IMAGE_PRODUCTS_URL}${product.image.path}`" :alt="product.image.title">
    <div>{{ product.id }}</div>
    <div>{{ product.name }}</div>
    <div>{{ product.price }}</div>

    </div>
  </div>

</template>

<style lang="scss" scoped>
.catalog {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 10px;
  .card {
    background-color: beige;
    img {
      max-width: 100px;
    }
  }
}
</style>