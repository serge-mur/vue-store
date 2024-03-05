<script setup>
  import { useStore } from '@/stores/store'  
  import { storeToRefs } from 'pinia'
  import { IMAGE_PRODUCTS_URL } from '@/constants/api'
  import { useRouter } from 'vue-router'
  const router = useRouter()

  const props = defineProps({
    id: String
  })

  const store = useStore() 
  const { product } = storeToRefs(store)

  store.getProduct(props.id)

</script>

<template>
  <div class="card">

    <div class="card__left">
      <div class="card__image">
        <img :src="`${IMAGE_PRODUCTS_URL}${product.imagePath}`">
      </div>
      <div v-if="false">{{ id }}</div>    
    </div>
   
    <div class="card__right">
      <div class="card__name">{{ product.name }}</div> 
      <div class="card__price">{{ product.price }}</div>   
      <button class="card__buy-btn" @click="store.addToCart(id)">Buy</button>     
    </div>
  </div>
  <a href="#!" @click="router.push('/catalog')" class="nav-link">&#8592; catalog</a>
</template>

<style scoped>
  .card {
    @apply flex gap-4 p-4
  }
  .card__left {
    @apply basis-1/2
  }
  .card__image {
    @apply object-contain w-full
  }
  .card__right {
    @apply flex basis-1/2 flex-col justify-center
  }
  .card__name {
    @apply block text-2xl font-bold no-underline text-blue-700 pb-2
  }  
  .card__price {
    @apply text-2xl font-bold pb-4
  }
  .card__price::after {
    content: " \20AE";
  }
  .card__buy-btn {
    @apply w-1/2 focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-xl px-5 py-2.5
  }
  .nav-link {
    @apply block text-center text-2xl text-blue-700
  }
</style>