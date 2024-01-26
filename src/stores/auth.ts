import { defineStore } from 'pinia'
import { AuthenticationApiFactory } from 'backend-sdk'
import { ref } from 'vue'
import { AxiosInstance } from '@/helpers/axios'

const auth = AuthenticationApiFactory(undefined, import.meta.env.VITE_BE_BASE_URL, AxiosInstance)

export const useAuthStore = defineStore('auth', () => {
  const isAuthenticated = ref(false)
  const isSessionVerified = ref(false)

  async function login(email: string, password: string) {
    try {
      await auth.login({
        email,
        password
      })
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
      await auth.verifySession()
      isAuthenticated.value = true
      isSessionVerified.value = true
      return true
    } catch {
      return false
    }
  }

  return { isSessionVerified, isAuthenticated, login, logout, verifySession }
})
