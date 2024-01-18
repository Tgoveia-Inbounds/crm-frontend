<script setup lang="ts">
import SidebarComponent from './components/SidebarComponent.vue'
import { computed } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useAuthStore } from './stores/auth'
import { useLoadStore } from './stores/load'
import { onMounted } from 'vue'
import { storeToRefs } from 'pinia'

const router = useRouter()
const route = useRoute()
const isLoginView = computed(() => route.name !== 'login')

const auth = useAuthStore()
const load = useLoadStore()
const { isAuthenticated, isSessionVerified } = storeToRefs(auth)

const { isLoading } = storeToRefs(load)
onMounted(async () => {
  if (!isSessionVerified.value) {
    await auth.verifySession()
  }
  if (!isAuthenticated.value) {
    router.push({ name: 'login' })
  }
})
</script>

<template>
  <div class="progress-spinner" v-if="isLoading">
    <p-progress-spinner aria-label="Loading" />
  </div>
  <div id="layout-container">
    <sidebar-component v-if="isLoginView" />
    <div>
      <router-view />
    </div>
  </div>
</template>

<style>
#layout-container {
  display: flex;
  flex-direction: row;
  height: 100vh;
}

.progress-spinner {
  position: fixed;
  z-index: 999;
  height: 2em;
  width: 2em;
  overflow: show;
  margin: auto;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
}

.progress-spinner:before {
  content: '';
  display: block;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.53);
}
</style>
