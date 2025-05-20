<script setup lang="ts">
 import { onMounted, ref } from 'vue';
 import { CategoryService, type Category } from '../../services/CategoryService';
  const categories = ref<Category[]>();
  onMounted(async () => {
   categories.value = await CategoryService.getAll();
 });
</script>
<template>
<header>
 <nav>
   <h5 class="max">Categorias</h5>
   <RouterLink to="/categories/create">
     <button class="border circle extra">
       <i>add</i>
     </button>
   </RouterLink>
   <button class="border circle extra">
     <i>add</i>
   </button>
 </nav>
</header>
<ul class="list no-space border">
 <li v-for="category in categories" :key="category.id">
   <div class="max">
     <h6 class="small">{{ category.name }}</h6>
   </div>
   <button>Editar</button>
   <button>Deletar</button>
 </li>
</ul>
</template>
