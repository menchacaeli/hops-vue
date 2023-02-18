import { createRouter, createWebHistory } from 'vue-router'
import DashboardView from '../views/DashboardView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'dashboard',
      component: DashboardView
    },
    {
      path: '/beer',
      name: 'beer',
      component: () => import('../views/BeerView.vue')
    },
    {
      path: '/brewery',
      name: 'brewery',
      component: () => import('../views/BreweryView.vue')
    }
  ]
})

export default router
