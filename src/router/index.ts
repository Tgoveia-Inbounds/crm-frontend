import { createRouter, createWebHistory } from 'vue-router'
import LoginViewVue from '../views/LoginView.vue'
// import UsersTableVue from '@/components/UsersTable.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/login',
      name: 'login',
      component: LoginViewVue
    }
    // {
    //   path: '/test',
    //   name: 'test',
    //   component: UsersTableVue
    // }
  ]
})

export default router
