<script setup lang="ts">
import { RouterLink } from 'vue-router'
</script>

<template>
<nav class="left">
  <RouterLink to="/">
    <i>home</i>
    <div>Home</div>
  </RouterLink>
  <RouterLink to="/categories">
    <i>category</i>
    <div>Categorias</div>
  </RouterLink>
  <RouterLink to="/products">
    <i>inventory_2</i>
    <div>Produtos</div>
  </RouterLink>
</nav>
</template>
