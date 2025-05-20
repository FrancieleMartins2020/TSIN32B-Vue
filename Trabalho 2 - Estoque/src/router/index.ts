import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import CategoriesIndex    from '../views/categories/IndexView.vue'
import CreateCategoryView from '../views/categories/CreateView.vue'
const router = createRouter({
 history: createWebHistory(import.meta.env.BASE_URL),
 routes: [
   {
     path: '/',
     name: 'home',
     component: HomeView,
   },
   {
     path: '/categories',
     name: 'Categorias',
     component: CategoriesIndex,
   },
   {
     path: '/categories/create',
     name: 'CreateCategory',
     component: CreateCategoryView
   }

 ]
})
export default router
