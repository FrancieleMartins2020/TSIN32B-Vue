<script setup lang="ts">
  import { onMounted, ref } from 'vue';
  import { CategoryService, type Category } from '../../services/CategoryService';
import router from '@/router';

  const categories = ref<Category[]>();

  function remove(id:string) {
  if (confirm("Apagar categoria?")) {
    try {
      CategoryService.delete(id);
      router.go(0);
    } catch (error) {
      console.log(error)      
    }
  }
  }

  onMounted(async () => {
    categories.value = await CategoryService.getAll();
    //console.log(categories.value);
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
  </nav>
</header>

<ul class="list no-space border">
  <li v-for="category in categories" :key="category.id">
    <div class="max">
      <h6 class="small">{{ category.name }}</h6>
    </div>
    
    <RouterLink :to="`/categories/edit/${category.id}`">
    <button>
      <i>edit</i>
    </button>
    </RouterLink>

    
    <button @click="remove(String(category.id))" class="error">
      <i>delete</i>  
    </button>
    
  </li>
</ul>



</template>