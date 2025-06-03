import { createRouter, createWebHistory } from 'vue-router'

import HomeView from '../views/HomeView.vue'

import CategoriesIndex from '@/views/categories/IndexView.vue'
import CreateCategory from '@/views/categories/CreateView.vue'
import EditCategory from '@/views/categories/EditView.vue'

import ProductsIndex from '@/views/products/IndexView.vue'
import CreateProduct from '@/views/products/CreateView.vue'
import EditProduct from '@/views/products/EditView.vue'

import CreateStock from '@/views/stock/CreateView.vue'
import EditStock from '@/views/stock/EditView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/stock/create',
      name: 'CriarEstoque',
      component: CreateStock,
    },
    {
      path: '/stock/edit/:id',
      name: 'AtualizarEstoque',
      component: EditStock,
    },
    {
      path: '/categories',
      name: 'Categorias',
      component: CategoriesIndex,
    },
    {
      path: '/categories/create',
      name: 'CriarCategoria',
      component: CreateCategory,
    },
    {
      path: '/categories/edit/:id',
      name: 'AtualizarCategoria',
      component: EditCategory,
    },
    {
      path: '/products',
      name: 'Produtos',
      component: ProductsIndex,
    },
    {
      path: '/products/create',
      name: 'CriarProduto',
      component: CreateProduct,
    },
    {
      path: '/products/edit/:id',
      name: 'AtualizarProduto',
      component: EditProduct,
    },
  ],
})

export default router
