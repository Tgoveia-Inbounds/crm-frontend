import { createRouter, createWebHistory } from 'vue-router'
import LoginViewVue from '../views/LoginView.vue'
import DashboardViewVue from '@/views/DashboardView.vue'
import { useAuthStore } from '@/stores/auth'
import { useLoadStore } from '@/stores/load'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'dashboard',
      component: DashboardViewVue
    },
    {
      path: '/login',
      name: 'login',
      component: LoginViewVue
    },
    {
      path: '/users',
      name: 'users',
      component: () => import('@/views/UsersView.vue')
    },
    {
      path: '/users/create',
      name: 'create-user',
      component: () => import('@/views/RegisterView.vue')
    },
    {
      path: '/users/update/:id',
      name: 'update-user',
      component: () => import('@/views/UpdateUsersView.vue')
    },
    {
      path: '/campaigns',
      name: 'campaigns',
      component: () => import('@/views/CampaignsView.vue')
    },
    {
      path: '/reports',
      name: 'reports',
      component: () => import('@/views/ReportsView.vue')
    },
    {
      path: '/leads',
      name: 'leads',
      component: () => import('@/views/LeadsView.vue')
    }
  ]
})

router.beforeEach((to, from, next) => {
  const auth = useAuthStore()
  const loadStore = useLoadStore()
  loadStore.setLoading(true)
  if (to.name !== 'login' && auth.isSessionVerified && !auth.isAuthenticated) {
    next({ name: 'login' })
  } else {
    next()
  }
})

router.afterEach(() => {
  const loadStore = useLoadStore()
  loadStore.setLoading(false)
})

export default router
