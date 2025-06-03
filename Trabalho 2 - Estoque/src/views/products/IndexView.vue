<script setup lang="ts">
  import { onMounted, ref } from 'vue';
  import { ProductService, type Product } from '../../services/ProductService';
import router from '@/router';

  const products = ref<Product[]>();

  function remove(id:string) {
  if (confirm("Apagar categoria?")) {
    try {
      ProductService.delete(id);
      router.go(0);
    } catch (error) {
      console.log(error)      
    }
  }
  }

  onMounted(async () => {
    products.value = await ProductService.getAll();
    //console.log(products.value);
  });
</script>

<template>

<header>
  <nav>
    <h5 class="max">Produtos</h5>
    
    <RouterLink to="/products/create">
      <button class="border circle extra">
        <i>add</i>
      </button>
    </RouterLink>
  </nav>
</header>

<ul class="list no-space border">
  <li v-for="product in products" :key="product.id">
    <div class="max grid">
      <div class="s9">
        <h6 class="small">{{ product.name }}</h6>
        <div>{{ product.supplier }}</div>
      </div>
      <div class="s3 center-align">
        <div class="chip">{{ product.category?.name }}</div>
      </div>
      
    </div>
    
    <RouterLink :to="`/products/edit/${product.id}`">
    <button>
      <i>edit</i>
    </button>
    </RouterLink>

    
    <button @click="remove(String(product.id))" class="error">
      <i>delete</i>  
    </button>
    
  </li>
</ul>



</template>