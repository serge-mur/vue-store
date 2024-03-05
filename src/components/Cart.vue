<script setup>
  import { useStore } from '@/stores/store'
  const store = useStore()
  import CardInCart from '@/components/CardInCart.vue'
  import { IMAGE_PRODUCTS_URL } from '@/constants/api'

</script>

<template>
  
  <div v-if="store.cart.length!==0">
    <div class="cart-info">
      <div class="cart-info__total-cost">
        Total cost: <span>{{ store.totalCost }} &#8366;</span> 
      </div>
      <div class="cart-info__total-count">
        Count: <span>{{ store.countProductsCart }} items</span>
      </div>     
    </div>

    <div class="cart-items">

      <CardInCart
        v-for="(product, index) in store.cart"
        :cartId="index"
        :key="product.id"
        :id="product.id"
        :name="product.name"
        :price="product.price"
        :image="`${IMAGE_PRODUCTS_URL}${product.image.path}`"
      />
    
    </div>

    <form class="order-form" @submit.prevent="store.order()">
      <input class="order-form__input" v-model="store.orderForm.name" type="text" placeholder="name" required>
      <input class="order-form__input" v-model="store.orderForm.contacts" type="text" placeholder="contacts" required>
      <button class="order-form__btn" type="submit">Send order</button>
    </form>

  </div>
  <div v-else>
    <div v-if="!store.orderComplete.value">
      <p>Order complete</p>
    </div>
    <p>Empty</p>
  </div>

</template>

<style scoped>
  .cart-info {
    @apply pb-4
  }
  .cart-info__total-cost span {
    @apply font-bold
  }
  .cart-info__total-count span {
    @apply font-bold
  }
  .cart-items {
    @apply grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 py-6
  }
  .order-form {
    @apply py-4
  }
  .order-form__input {
    @apply w-64 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 mb-4
  }
  .order-form__btn {
    @apply focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5
  }
</style>