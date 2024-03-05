<script setup>
  import { RouterLink, RouterView } from 'vue-router'
  import { useStore } from '@/stores/store'
  const store = useStore()
</script>

<template>

  <header class="header">

      <div class="header__logo">VUE <span>Store</span></div>

      <nav class="menu">
        <RouterLink class="menu__link" to="/">Home</RouterLink>
        <RouterLink class="menu__link" to="/catalog">Catalog</RouterLink>
        
      </nav>

      <RouterLink class="header__cart-link" to="/cart">
        cart
        {{ store.totalCost }} &#8366;
      </RouterLink>

  </header>
  <hr>
  <main class="main">
    <RouterView />
  </main>
  <hr>
  <footer class="footer">
    &copy; 2024
  </footer>

</template>

<style scoped>
  .header {
    @apply flex flex-wrap items-center justify-between py-4
  }
  .header__logo {
    @apply basis-full text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r to-green-700 from-blue-700 sm:basis-auto pb-4
  }
  .menu {
    @apply flex gap-4 items-center
  }
  .header__cart-link {
    @apply focus:outline-none text-white bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:focus:ring-yellow-900
  }
  .menu__link {
    @apply text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5  dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800
  }
  .main {
    @apply flex-grow
  }
  .footer {
    @apply text-center text-gray-500 p-4
  }
</style>
