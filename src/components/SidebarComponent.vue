<template>
  <div :class="`sidebar ${sidebarClass}`">
    <div class="top-row">
      <p-button
        class="button sidebar-toggle-btn is-info"
        icon="pi pi-bars"
        @click="toggleSidebar"
      />
    </div>
    <div class="sidebar-logo">
      <img :src="`${logoSrc}`" alt="Inbounds logo" />
    </div>
    <div class="sidebar-column">
      <p-button :class="buttonClass('Dashboard')" @click="setActiveButton('Dashboard')">
        <span class="icon"> <i class="pi pi-home"></i> </span>
        <span v-if="isCollapsed">Dashboard</span>
      </p-button>
      <p-button :class="buttonClass('Leads')" @click="setActiveButton('Leads')">
        <span class="icon"> <i class="pi pi-users"></i> </span>
        <span v-if="isCollapsed">Leads</span>
      </p-button>
      <p-button :class="buttonClass('Calls')" @click="setActiveButton('Calls')">
        <span class="icon"> <i class="pi pi-phone"></i> </span>
        <span v-if="isCollapsed">Calls</span>
      </p-button>
      <p-button :class="buttonClass('Campaigns')" @click="setActiveButton('Campaigns')">
        <span class="icon"> <i class="pi pi-sitemap"></i> </span>
        <span v-if="isCollapsed">Campaigns</span>
      </p-button>
      <p-button :class="buttonClass('Reports')" @click="setActiveButton('Reports')">
        <span class="icon"> <i class="pi pi-chart-line"></i> </span>
        <span v-if="isCollapsed">Reports</span>
      </p-button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'

const isCollapsed = ref(true)
const sidebarClass = computed(() => (!isCollapsed.value ? 'closed' : 'open'))
const activeButton = ref('Dashboard')

const toggleSidebar = () => {
  isCollapsed.value = !isCollapsed.value
}

const setActiveButton = (buttonName: string) => {
  activeButton.value = buttonName
}

const buttonClass = (buttonName: string) => ({
  button: true,
  'is-white': true,
  'sidebar-btn': true,
  'is-info': activeButton.value === buttonName
})

const logoSrc = computed(() => {
  return isCollapsed.value ? 'src/assets/Inbounds-all-blue.png' : 'src/assets/Inbounds-blue-o.png'
})
</script>

<style>
.sidebar {
  width: 102px;
  transition: width 0.4s;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
  height: 100vh;
  position: flex;
  flex-direction: column;
}

.sidebar-column {
  display: flex;
  flex-direction: column;
}

.sidebar-btn {
  margin-left: 28px;
  margin-top: 10px;
  width: 250px;
  justify-content: flex-start !important;
  transition: width 0.45s;
}

.sidebar-logo img {
  margin-left: 30px;
  width: 80%;
  transition:
    height 0.25s ease-in-out,
    opacity 0.5s ease-in-out;
}

.top-row {
  display: flex;
  justify-content: flex-end;
  margin: 25px 28px;
}

.sidebar-toggle-btn {
  width: 41px;
}

.open {
  width: 306px;
}

.closed {
  width: 102px;
}

.closed .sidebar-btn {
  width: 41px;
  transition: width 0.25s;
}

.closed .top-row {
  display: flex;
  justify-content: flex-end;
  margin: 25px 33px 25px 28px;
}

.closed .sidebar-logo img {
  margin-left: 24px;
  width: 50px;
  transition:
    height 0.25s ease-in-out,
    opacity 0.5s ease-in-out;
}
</style>
