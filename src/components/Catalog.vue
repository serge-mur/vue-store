<script setup>
  import { storeToRefs } from 'pinia'
  import { useStore } from '@/stores/store'
  import { IMAGE_PRODUCTS_URL } from '@/constants/api'
  import { onMounted, watch } from 'vue';
  import Card from '@/components/Card.vue'

  const store = useStore()
  const { products } = storeToRefs(store)

  onMounted(store.getProducts)
  
  const onChangeSortSelect = (event) => {
    store.filters.sort = event.target.value
  }

  const onChangeSearchInput = (event) => {
    store.filters.search = event.target.value
  }

  watch(store.filters, () => {
	  store.getProducts()
  })

</script>

<template>
<!--   <pre>
    {{ products }}
  </pre> -->
  <div>
    <select @change="onChangeSortSelect">
      <option value="name">name</option>
      <option value="price">price</option>
    </select> 
    
    <input @input="onChangeSearchInput" type="text" placeholder="Filter by name">
  </div>


  <div class="catalog">

      <Card
        v-for="product in products"
        :key="product.id"
        :id="product.id"
        :name="product.name"
        :price="product.price"
        :image="`${IMAGE_PRODUCTS_URL}${product.image.path}`"
      />

  </div>

</template>

<style lang="scss" scoped>
.catalog {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 10px;
}
</style>