<template>
  <div class="update-user-view">
    <h1>Update User</h1>
    <UpdateForm />
  </div>
</template>

<script setup lang="ts">
import UpdateForm from '@/components/UpdateForm.vue'
</script>

<style lang="scss">
.update-user-view {
  display: flex;
  flex-direction: column;
  min-width: 500px;
  width: 100%;
  padding: 1rem;
  justify-content: flex-start;
}

.update-user-view h1 {
  color: #333;
  margin-bottom: 1rem;
  font-size: 2.5rem;
  font-weight: 500;
}
</style>
