<script setup lang="ts">
import { onMounted, ref } from "vue";
import { StockService, type Stock } from '@/services/StockService';
import router from "@/router";


const stockList = ref<Stock[]>([])

function remove(id:string) {
  if (confirm("Apagar categoria?")) {
    try {
      StockService.delete(id);
      router.go(0);
    } catch (error) {
      console.log(error)
    }
  }
  }

onMounted(async () => {
  stockList.value = await StockService.getAll()
})

</script>

<template>

  <header>
  <nav>
    <h5 class="max">Estoques</h5>

    <RouterLink to="/stock/create">
      <button class="border circle extra">
        <i>add</i>
      </button>
    </RouterLink>
  </nav>
</header>

<ul class="list no-space border">
  <li v-for="stock in stockList" :key="stock.id">
    <div class="max grid">
      <div class="s7">
        <h6 class="small">{{ stock.product?.name }}</h6>
        <div>{{ stock.quantity }}</div>
      </div>
      <div class="s3 center-align">
        <div class="chip">{{ new Date(stock.added).toLocaleDateString() }}</div>
        <div class="chip">{{ new Date(stock.expires).toLocaleDateString() }}</div>
      </div>

    </div>

    <RouterLink :to="`/stock/edit/${stock.id}`">
    <button>
      <i>edit</i>
    </button>
    </RouterLink>


    <button @click="remove(String(stock.id))" class="error">
      <i>delete</i>
    </button>

  </li>
</ul>

</template>
