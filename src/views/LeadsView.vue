<template>
  <div class="leads-view">
    <h1>Leads</h1>
    <LeadsTable />
  </div>
</template>

<script setup lang="ts">
import LeadsTable from '@/components/LeadsTable.vue'
</script>

<style scoped>
.leads-view h1 {
  padding: 1rem;
  margin: 0;
  font-size: 3.5rem;
  font-weight: 500;
  color: #333;
}
</style>
