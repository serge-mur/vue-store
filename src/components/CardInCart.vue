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

    <div class="card__left">
      <div class="card__image">
        <img :src="image">
      </div>
      <div class="card__name">
        {{ name }}
      </div>      
      <div v-if="false">{{ cartId }}</div>    
    </div>
   
    <div class="card__right"> 
      <div class="card__price">{{ price }}</div>   
      <button class="card__del-btn" @click="store.delFromCart(cartId)">del</button>  
    </div>

  </div>
</template>

<style scoped>
  .card {
    @apply flex justify-between text-center border-2 rounded-lg p-2
  }
  .card__image {
    @apply object-contain w-16 h-16
  }
  .card__name {
    @apply block font-bold no-underline text-blue-700 pb-2
  }
  .card__right {
    @apply flex flex-col justify-between
  }
  .card__price {
    @apply font-bold
  }
  .card__price::after {
    content: " \20AE";
  }
  .card__del-btn {
    @apply focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-2 py-1
  }
</style>