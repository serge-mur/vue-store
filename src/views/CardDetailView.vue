<script setup>
  import { useRoute } from 'vue-router'
  import CardDetail from '@/components/CardDetail.vue'

  defineOptions({
    inheritAttrs: false
  })

  const route = useRoute()   

</script>

<template>

  <h1>Product Page</h1>
  <CardDetail :id="route.params.id" />

</template>

<style scoped>
</style>
