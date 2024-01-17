<template>
  <div class="register-form">
    <form @submit.prevent="handleRegister">
      <label class="label" for="fname-input">
        First Name
        <p-input-text v-model="firstName" id="fname-input" class="input" placeholder="First Name" />
      </label>
      <label class="label" for="lname-input">
        Last Name
        <p-input-text v-model="lastName" id="lname-input" class="input" placeholder="Last Name" />
      </label>
      <label class="label" for="email-input">
        Email
        <p-input-text v-model="email" id="email-input" class="input" placeholder="Email" />
      </label>
      <label class="label" for="email-input">
        Role
        <p-dropdown
          v-model="role"
          :options="roleOptions"
          optionLabel="label"
          id="role-input"
          class="input"
          placeholder="Role"
        />
      </label>
      <label class="label" for="password-input">
        Password
        <p-input-text
          v-model="password"
          id="password-input"
          class="input"
          type="password"
          placeholder="Password"
        />
      </label>
      <p-button type="submit" class="button is-info" label="Register" />
    </form>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const roleOptions = [
  { label: 'Agent', value: 'agent' },
  { label: 'Manager', value: 'manager' }
]

const firstName = ref('')
const lastName = ref('')
const email = ref('')
const password = ref('')
const role = ref('')

const handleRegister = () => {
  console.log('Registering...')
}
</script>

<style scoped>
.register-form form {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}
</style>
