import { createRouter, createWebHistory } from 'vue-router'
import LoginViewVue from '../views/LoginView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/login',
      name: 'home',
      component: LoginViewVue
    }
  ]
})

export default router
