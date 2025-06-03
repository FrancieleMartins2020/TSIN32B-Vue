<script setup lang="ts">
import router from '@/router'
import { CategoryService, type Category } from '@/services/CategoryService'
import { ProductService, type Product } from '@/services/ProductService'
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'

const form = ref<Product>({
  id: '',
  name: '',
  categoryId: '',
  supplier: ''
})

const categories = ref<Category[]>([])

const route = useRoute()

const update = () => {
    ProductService.update(form.value);
    router.push('/products');
}

onMounted(async () => {
  try {
    const id = route.params.id
    const product = await ProductService.get(String(id))
    form.value.id = product.id
    form.value.name = product.name
    form.value.supplier = product.supplier
    form.value.categoryId = product.categoryId
    categories.value = await CategoryService.getAll();



  } catch (error) {
    console.log(error)
  }
})
</script>

<template>
<header>
    <nav>
      <RouterLink to="/products">
      <button class="circle transparent">
        <i>arrow_back</i>
      </button>
      </RouterLink>

      <h5 class="max">Editar Categoria</h5>
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



    <button class="large" @click="update()">
      <i>update</i>
      <span>Atualizar</span>
    </button>

  </form>
</template>
