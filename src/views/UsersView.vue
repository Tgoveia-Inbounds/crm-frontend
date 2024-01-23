<template>
  <div class="users-view">
    <div class="users-header">
      <h1>Users</h1>
      <p-button
        class="button is-info create-user-button"
        label="Create user"
        title="Create user"
        icon="pi pi-plus"
        @click="() => $router.push({ name: 'create-user' })"
      />
    </div>
    <users-table />
  </div>
</template>

<script setup lang="ts">
import UsersTable from '@/components/UsersTable.vue'
</script>

<style scoped lang="scss">
.users-view {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  gap: 1rem;
  align-self: center;
  width: 100%;
}
.users-view h1 {
  color: #333;
  margin: 1rem 0 1rem 1rem;
  font-size: 2.5rem;
  font-weight: 500;
}
.users-header {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}
.create-user-button {
  width: 200px;
  align-self: flex-end;
  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
}
</style>
