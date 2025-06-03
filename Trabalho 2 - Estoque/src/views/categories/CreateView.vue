<script setup lang="ts">
  import { ref, watch } from "vue";
  import { CategoryService, type Category } from "@/services/CategoryService";
  import router from "@/router";
  
  const form = ref<Category>({
    name: ''
  });

  interface FormValidation {
  valid: boolean
  name: {
    valid: boolean
    empty: boolean
    minLength: boolean
  }
}

// fv = formValidation
const fv = ref<FormValidation>({
  valid: true,
  name: {
    valid: true,
    empty: false,
    minLength: false
  }
})

const validate = () => {
  fv.value.valid = true
  fv.value.name.valid = true
  fv.value.name.empty = false
  fv.value.name.minLength = false
  
  if (form.value.name === '') {
    fv.value.valid = false
    fv.value.name.valid = false
    fv.value.name.empty = true
  }
  if (form.value.name.trim() === '') {
    fv.value.valid = false
    fv.value.name.valid = false
    fv.value.name.empty = true
  }
  if (fv.value.valid && form.value.name.length<2){
    fv.value.valid = false
    fv.value.name.valid = false
    fv.value.name.minLength = true
  }
  return fv.value.valid
}


  const save = () => {
    
    if (validate()) {
      const result = CategoryService.create(form.value);  
      router.push('/categories');
    }    
  }

</script>

<template>
  <header>
    <nav>
      <RouterLink to="/categories">
      <button class="circle transparent">
        <i>arrow_back</i>
      </button>
      </RouterLink>
      
      <h5 class="max">Criar Categoria</h5>
    </nav>
  </header>

  <form>

    <div class="field label border">
      <input type="text" name="name" required v-model="form.name">
      <label for="name">Nome</label>

      <span class="error" v-if="fv.name.empty">Não pode ser vazio</span>
      <span class="error" v-if="fv.name.minLength">Não pode ser curto</span>
    </div>

    <button class="large" @click="save()">
      <i>add</i>
      <span>Criar</span>
    </button>

  </form>
</template>