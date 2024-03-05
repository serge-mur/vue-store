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

    <div class="card__image">
       <img :src="image">
    </div>
   
    <div v-if="false">{{ id }}</div>

    <RouterLink class="card__name" :to="{name: 'detail', params: {id: id}}">
      {{ name }}
    </RouterLink>

    <div class="card__bottom">
      <div class="card__price">{{ price }}</div> 
      <button class="card__buy-btn" @click="store.addToCart(id)">Buy</button>      
    </div>
  
  </div>
</template>

<style scoped>
  .card {
    @apply text-center border-2 rounded-lg p-2
  }
  .card__image {
    @apply object-contain w-32 h-32 mx-auto
  }
  .card__name {
    @apply block font-bold no-underline text-blue-700 pb-2
  }
  .card__bottom {
    @apply flex items-center justify-between
  }
  .card__price {
    @apply font-bold
  }
  .card__price::after {
    content: " \20AE";
  }
  .card__buy-btn {
    @apply focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5
  }
</style>