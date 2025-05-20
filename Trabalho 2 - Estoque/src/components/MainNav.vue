<script setup lang="ts">
import { RouterLink } from 'vue-router'
</script>
<template>
  <nav class="top">
    <!--pode mudar a class para left-->
    <RouterLink to="/">
      <i>home</i>
      <div>Home</div>
    </RouterLink>
    <RouterLink to="/categories">
      <i>about</i>
      <div>Sobre</div>
    </RouterLink>
  </nav>
</template>
