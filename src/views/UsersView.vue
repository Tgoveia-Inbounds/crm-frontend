<template>
  <div class="users-view">
    <p-button
      class="button is-info create-user-button"
      label="Create user"
      icon="pi pi-plus"
      @click="() => $router.push({ name: 'create-user' })"
    />
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
  margin-top: 2rem;
  margin-left: 2rem;
  max-width: 80vw;
  width: 100%;
  justify-content: flex-start;
  gap: 1rem;
}

.create-user-button {
  width: 200px;
  align-self: flex-end;
}
</style>
