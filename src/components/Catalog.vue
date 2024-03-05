<script setup>
import { storeToRefs } from 'pinia'
import { useStore } from '@/stores/store'
import debounce from 'lodash.debounce'
import { IMAGE_PRODUCTS_URL } from '@/constants/api'
import { onMounted, watch } from 'vue'
import Card from '@/components/Card.vue'

const store = useStore()
const { products } = storeToRefs(store)

// onMounted(() => {
store.getProducts()
// })

const onChangeSortSelect = (event) => {
  store.filters.sort = event.target.value
}

const onChangeSearchInput = debounce((event) => {
  store.filters.search = event.target.value
}, 1000)

watch(store.filters, () => {
  store.getProducts()
})

</script>

<template>

  <div class="input-control">

    <select class="input-control__sort" @change="onChangeSortSelect">
      <option value="name">name</option>
      <option value="price">price</option>
    </select>

    <input class="input-control__filter" @input="onChangeSearchInput" type="text" placeholder="Filter by name">
  </div>


  <div class="catalog">

    <Card v-for="product in products" :key="product._id" :id="product._id" :name="product.name" :price="product.price"
      :image="`${IMAGE_PRODUCTS_URL}${product.image.path}`" />

  </div>

</template>

<style scoped>
.input-control {
  @apply flex gap-4 py-4
}

.input-control__sort {
  @apply w-32 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5
}

.input-control__filter {
  @apply w-64 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5
}

.catalog {
  @apply grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4
}
</style>