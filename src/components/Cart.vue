<script setup>
  import { useStore } from '@/stores/store'
  const store = useStore()
  import CardInCart from '@/components/CardInCart.vue'
  import { IMAGE_PRODUCTS_URL } from '@/constants/api'

</script>

<template>
  <h3>Cart</h3>
  
  <div v-if="store.cart.length!==0">
    <div>
      <span>Total cost: </span> {{ store.totalCost }}
      <br>
      <span>Count: </span> {{ store.countProductsCart }}
    </div>

    <div class="cart">

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

    <hr>
      <form @submit.prevent="store.order()">
        <input v-model="store.orderForm.name" type="text" placeholder="name" required>
        <input v-model="store.orderForm.contacts" type="text" placeholder="contacts" required>
        <button type="submit">Send order</button>
      </form>
    <hr>

  </div>
  <div v-else>
    <div v-if="!store.orderComplete.value">
      <p>Order complete</p>
    </div>
    <p>Empty</p>
  </div>

</template>

<style>
  .cart {
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    gap: 10px;
  }
</style>