<script setup>
import { useStore } from '@/stores/store'
const store = useStore()
import CardInCart from '@/components/CardInCart.vue'
import { IMAGE_PRODUCTS_URL } from '@/constants/api'

</script>

<template>

  <div v-if="store.cart.length !== 0">
    <div class="cart-info">
      <div class="cart-info__total-cost">
        Total cost: <span>{{ store.totalCost }} &#8366;</span>
      </div>
      <div class="cart-info__total-count">
        Count: <span>{{ store.countProductsCart }} items</span>
      </div>
    </div>

    <div class="cart-items">

      <CardInCart v-for="(product, index) in store.cart" :cartId="index" :key="product.id" :id="product.id"
        :name="product.name" :price="product.price" :image="`${IMAGE_PRODUCTS_URL}${product.image.path}`" />

    </div>

    <form v-if="!store.complete" class="order-form" @submit.prevent="store.order()">
      <input class="order-form__input" v-model="store.orderForm.name" type="text" placeholder="name" required>
      <input class="order-form__input" v-model="store.orderForm.contacts" type="text" placeholder="contacts" required>
      <button class="order-form__btn" type="submit">Send order</button>
    </form>

  </div>
  <div v-else>
    <p>Empty</p>
  </div>

  <div v-if="store.complete"
    class="flex items-center p-4 mb-4 text-sm text-green-800 border border-green-300 rounded-lg bg-green-50 dark:bg-gray-800 dark:text-green-400 dark:border-green-800"
    role="alert">
    <svg class="flex-shrink-0 inline w-4 h-4 me-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
      fill="currentColor" viewBox="0 0 20 20">
      <path
        d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z" />
    </svg>
    <span class="sr-only">Info</span>
    <div>
      <span class="font-medium">Order complete!</span>
    </div>
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