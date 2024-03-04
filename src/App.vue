<script setup>
  import { RouterLink, RouterView } from 'vue-router'
</script>

<template>

  <header class="header">

      <div class="header__logo">VUE Store</div>

      <nav class="menu">
        <RouterLink class="menu__link" to="/">Home</RouterLink> |
        <RouterLink class="menu__link" to="/catalog">Catalog</RouterLink> |
        <RouterLink class="menu__link" to="/cart">Cart</RouterLink> 
      </nav>

  </header>

  <main class="main">
    <RouterView />
  </main>

  <footer class="footer">
    &copy; 2024
  </footer>

</template>

<style scoped>
  .header {
    @apply flex justify-between items-center py-4
  }
  .header__logo {
    @apply text-3xl border-2
  }
  .menu__link {
    @apply text-blue-700
  }
  .main {
    @apply flex-grow
  }
  .footer {
    @apply text-center p-4
  }
</style>
