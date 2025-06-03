<script setup lang="ts">
import router from '@/router'
import { CategoryService, type Category } from '@/services/CategoryService'
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'

const form = ref<Category>({
  id: '',
  name: ''
})

const route = useRoute()

const update = () => {
    CategoryService.update(form.value);
    router.push('/categories');
}

onMounted(async () => {
  try {
    const id = route.params.id
    const category = await CategoryService.get(String(id))
    form.value.id = category.id
    form.value.name = category.name
  } catch (error) {
    console.log(error)
  } 
})
</script>

<template>
<header>
    <nav>
      <RouterLink to="/categories">
      <button class="circle transparent">
        <i>arrow_back</i>
      </button>
      </RouterLink>
      
      <h5 class="max">Editar Categoria</h5>
    </nav>
  </header>

  <form>

    <div class="field label border">
      <input type="text" name="name" required v-model="form.name">
      <label for="name">Nome</label>
    </div>

    <button class="large" @click="update()">
      <i>update</i>
      <span>Atualizar</span>
    </button>

  </form>
</template>