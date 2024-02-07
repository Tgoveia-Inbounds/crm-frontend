import { defineStore } from 'pinia'
import { AuthenticationApiFactory, PermissionsValueEnum, type User } from 'backend-sdk'
import { ref, type Ref, computed } from 'vue'
import { AxiosInstance } from '@/helpers/axios'

const auth = AuthenticationApiFactory(undefined, import.meta.env.VITE_BE_BASE_URL, AxiosInstance)

export const useAuthStore = defineStore('auth', () => {
  const user: Ref<User | null> = ref(null)
  const isAuthenticated = ref(false)
  const isSessionVerified = ref(false)

  async function login(email: string, password: string) {
    try {
      const { data } = await auth.login({
        email,
        password
      })
      user.value = data.user
      isAuthenticated.value = true
      isSessionVerified.value = true
      return true
    } catch (error) {
      return false
    }
  }

  async function logout() {
    try {
      await auth.logout()
      isAuthenticated.value = false
      return true
    } catch {
      return false
    }
  }

  async function verifySession() {
    try {
      const { data } = await auth.verifySession()
      user.value = data.user
      isAuthenticated.value = true
      isSessionVerified.value = true
      return true
    } catch {
      return false
    }
  }

  function hasPermission(permission: PermissionsValueEnum) {
    return !!user.value?.permissions.value[permission]
  }

  const permissions = computed(() => ({
    [PermissionsValueEnum.ManageUsers]: hasPermission(PermissionsValueEnum.ManageUsers)
  }))

  return {
    hasPermission,
    isSessionVerified,
    isAuthenticated,
    login,
    logout,
    verifySession,
    user,
    permissions
  }
})
