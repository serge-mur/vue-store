<script setup>
  import { useStore } from '@/stores/store'
  const store = useStore()
  import CardInCart from '@/components/CardInCart.vue'
  import { IMAGE_PRODUCTS_URL } from '@/constants/api'
</script>

<template>
  <h3>Cart</h3>
  <div>
    <span>Total cost: </span>
    {{ store.totalCost }}
  </div>

  <div v-if="store.cart.length!==0" class="cart">

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
  <div v-else>
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