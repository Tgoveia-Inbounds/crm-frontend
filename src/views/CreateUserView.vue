<template>
  <div class="register-view">
    <h1>Create user</h1>
    <RegisterForm />
  </div>
</template>

<script setup lang="ts">
import RegisterForm from '@/components/RegisterForm.vue'
</script>

<style lang="scss">
.register-view {
  display: flex;
  flex-direction: column;
  min-width: 500px;
  width: 100%;
  padding: 1rem;
  justify-content: flex-start;
}

.register-view h1 {
  color: #333;
  margin-bottom: 1rem;
  font-size: 2.5rem;
  font-weight: 500;
}
</style>
