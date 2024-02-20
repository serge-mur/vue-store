<script setup>
  import { useStore } from '@/stores/store'
  const store = useStore()
</script>

<template>
  <h1>Blank component</h1>
  {{ store.products }}
</template>