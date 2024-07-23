import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/Emili',
      name: 'Emili',
      component: () => import('../views/Emili.vue')
    },
    {
      path: '/Francisco',
      name: 'Francisco',
      component: () => import('../views/Francisco.vue')
    },
    {
      path: '/Heloisa',
      name: 'Heloisa',
      component: () => import('../views/Heloisa.vue')
    },
    {
      path: '/Luiz',
      name: 'Luiz',
      component: () => import('../views/Luiz.vue')
    },
    {
      path: '/Luna',
      name: 'Luna',
      component: () => import('../views/Luna.vue')
    },
    {
      path: '/Sara',
      name: 'Sara',
      component: () => import('../views/Sara.vue')
    }
  ]
})

export default router
