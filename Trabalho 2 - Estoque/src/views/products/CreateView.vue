<script setup lang="ts">
import { onMounted, ref, watch } from 'vue'
import { ProductService, type Product } from '@/services/ProductService'
import router from '@/router'
import { CategoryService, type Category } from '@/services/CategoryService'

const categories = ref<Category[]>([])

const form = ref<Product>({
  name: '',
  supplier: '',
  categoryId: '',
})


onMounted(async () => {
  categories.value = await CategoryService.getAll()
})

const save = () => {
  
    const result = ProductService.create(form.value)
    router.push('/products')
  
}
</script>

<template>
  <header>
    <nav>
      <RouterLink to="/products">
        <button class="circle transparent">
          <i>arrow_back</i>
        </button>
      </RouterLink>

      <h5 class="max">Criar Produto</h5>
    </nav>
  </header>

  <form>
    <div class="grid">
      <div class="s12">
        <div class="field label border">
          <input type="text" name="name" required v-model="form.name" />
          <label for="name">Nome</label>

        </div>
      </div>

      <div class="s6">
        <div class="field label border">
          <input type="text" name="supplier" v-model="form.supplier" />
          <label for="supplier">Fornecedor</label>
        </div>
      </div>

      <div class="s6">
        <div class="field label suffix border">
          <select
            name="categories"
            aria-label="Select category..."
            v-model="form.categoryId"
            required
          >
            <option v-for="category in categories" :key="category.id" :value="category.id">
              {{ category.name }}
            </option>
          </select>

          <label>Categorias</label>
          <i>arrow_drop_down</i>
        </div>
      </div>
    </div>

    <button class="large" @click="save()">
      <i>add</i>
      <span>Criar</span>
    </button>
  </form>
</template>
