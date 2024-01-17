import { createRouter, createWebHistory } from 'vue-router'
import LoginViewVue from '../views/LoginView.vue'
import LeadsViewVue from '../views/LeadsView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/login',
      name: 'home',
      component: LoginViewVue
    },
    {
      path: '/leads',
      name: 'leads',
      component: LeadsViewVue
    }
  ]
})

export default router
