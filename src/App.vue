<script setup>
  import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>
    <div class="wrapper">
      <nav>
        <RouterLink to="/">Home</RouterLink> |
        <RouterLink to="/catalog">Catalog</RouterLink>
      </nav>
    </div>
  </header>
  <hr>
  <RouterView />
  <hr>
  <footer>
    &copy; 2024
  </footer>
</template>

<style scoped>
</style>
