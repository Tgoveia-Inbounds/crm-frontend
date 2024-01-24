<template>
  <div class="campaigns-view">
    <div class="campaigns-header">
      <h1>Campaigns</h1>
      <p-button
        class="button is-info create-campaign-button"
        label="Create campaign"
        title="Create campaign"
        icon="pi pi-plus"
        @click="() => $router.push({ name: 'create-campaign' })"
      />
    </div>
    <campaigns-table />
  </div>
</template>

<script setup lang="ts">
import CampaignsTable from '@/components/CampaignsTable.vue'
</script>

<style scoped lang="scss">
.campaigns-view {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  gap: 1rem;
  align-self: center;
  width: 100%;
}
.campaigns-view h1 {
  color: #333;
  margin: 1rem 0 1rem 1rem;
  font-size: 2.5rem;
  font-weight: 500;
}
.campaigns-header {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}
.create-campaign-button {
  width: 200px;
  align-self: flex-end;
  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
}
</style>
