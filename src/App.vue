<script setup lang="ts">
import SidebarComponent from './components/SidebarComponent.vue'
import { computed } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const showMenu = computed(() => route.name !== 'login')
</script>

<template>
  <div id="layout-container">
    <sidebar-component v-if="showMenu" />
    <router-view />
  </div>
</template>

<style>
#layout-container {
  display: flex;
  flex-direction: row;
  height: 100vh;
}
</style>
