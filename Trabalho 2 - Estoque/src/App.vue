<script setup lang="ts">
import { RouterView } from 'vue-router'
import mainNav from './components/MainNav.vue';
</script>
<template>
<mainNav />
<main class="responsive">
 <RouterView />
</main>
</template>
