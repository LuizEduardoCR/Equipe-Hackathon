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
      path: '/membro1',
      name: 'membro1',
      component: () => import('../views/PaginaMembro1.vue')
    },
    {
      path: '/membro2',
      name: 'Francisco Vargas',
      component: () => import('../views/PaginaMembro2.vue')
    },
    {
      path: '/membro3',
      name: 'membro3',
      component: () => import('../views/PaginaMembro3.vue')
    },
    {
      path: '/membro4',
      name: 'membro4',
      component: () => import('../views/PaginaMembro4.vue')
    },
    {
      path: '/membro5',
      name: 'membro5',
      component: () => import('../views/PaginaMembro5.vue')
    },
    {
      path: '/membro6',
      name: 'membro6',
      component: () => import('../views/PaginaMembro6.vue')
    }
  ]
})

export default router
