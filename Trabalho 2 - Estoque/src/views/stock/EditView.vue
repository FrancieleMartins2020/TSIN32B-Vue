<script setup lang="ts">
import router from '@/router';
import { ProductService, type Product } from '@/services/ProductService';
import { StockService, type Stock } from '@/services/StockService';
import { onMounted, ref } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute()
const products = ref<Product[]>([])

const form = ref<Stock>({
  productId: '',
  price: 0,
  quantity: 1,
  added: new Date().toISOString().slice(0,10),
  expires: ''
})

onMounted( async () => {
  products.value = await ProductService.getAll()
  const id = route.params.id
  form.value = await StockService.get(String(id));
})

const save = () => {
  StockService.update(form.value)
  router.push('/')
}
</script>

<template>
  <header>
    <nav>
      <RouterLink to="/">
        <button class="circle transparent">
          <i>arrow_back</i>
        </button>
      </RouterLink>

      <h5 class="max">Criar Estoque</h5>
    </nav>
  </header>

  <form>
    <div class="grid">
      <div class="s12">
        <div class="field label suffix border">
          <select
            name="product"
            aria-label="Select category..."
            v-model="form.productId"
            required
          >
            <option v-for="product in products" :key="product.id" :value="product.id">
              {{ product.name }} ({{ product.supplier }})
            </option>
          </select>

          <label>Produtos</label>
          <i>arrow_drop_down</i>
        </div>
      </div>

      <div class="s6">
        <div class="field label border">
          <input type="float" name="price" v-model="form.price" />
          <label for="price">Preço</label>
        </div>
      </div>

      <div class="s6">
        <div class="field label border">
          <input type="number" name="quantity" v-model="form.quantity" />
          <label for="quantity">Quantidade</label>
        </div>
      </div>

      <div class="s6">
        <div class="field label border">
          <input type="date" name="quantity" v-model="form.added" />
          <label for="quantity">Data de adição</label>
        </div>
      </div>

      <div class="s6">
        <div class="field label border">
          <input type="date" name="quantity" v-model="form.expires" />
          <label for="quantity">Data de validade</label>
        </div>
      </div>
    </div>

    <button class="large" @click="save()">
      <i>update</i>
      <span>Atualizar</span>
    </button>
  </form>
</template>