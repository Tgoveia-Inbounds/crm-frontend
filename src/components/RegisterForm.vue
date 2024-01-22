<template>
  <div class="register-form">
    <p-toast position="bottom-center" />
    <form @submit.prevent="handleRegister">
      <label class="label" for="fname-input">
        First Name
        <p-input-text
          v-model="firstName"
          id="fname-input"
          class="input"
          placeholder="First Name"
          :class="{ 'is-danger': v$.firstName.$error }"
        />
        <span v-if="v$.firstName.$error" class="help is-danger has-text-weight-light"
          >First name is required</span
        >
      </label>

      <label class="label" for="lname-input">
        Last Name
        <p-input-text
          v-model="lastName"
          id="lname-input"
          class="input"
          placeholder="Last Name"
          :class="{ 'is-danger': v$.lastName.$error }"
        />
        <span v-if="v$.lastName.$error" class="help is-danger has-text-weight-light"
          >Last name is required</span
        >
      </label>

      <label class="label" for="email-input">
        Email
        <p-input-text
          v-model="email"
          id="email-input"
          class="input"
          placeholder="Email"
          :class="{ 'is-danger': v$.email.$error }"
        />
        <span v-if="v$.email.$error" class="help is-danger has-text-weight-light">
          <p v-if="v$.email.required.$invalid">Email is required</p>
          <p v-if="v$.email.email.$invalid">Email must be valid</p>
        </span>
      </label>

      <label class="label" for="role-input">
        Role
        <p-dropdown
          v-model="role"
          :options="roleOptions"
          optionLabel="label"
          optionValue="value"
          id="role-input"
          class="input"
          placeholder="Role"
          :class="{ 'is-danger': v$.role.$error }"
        />
        <span v-if="v$.role.$error" class="help is-danger has-text-weight-light"
          >Role selection is required</span
        >
      </label>

      <label class="label" for="password-input">
        Password
        <p-input-text
          v-model="password"
          id="password-input"
          class="input"
          type="password"
          placeholder="Password"
          :class="{ 'is-danger': v$.password.$error }"
        />
        <span v-if="v$.password.$error">
          <p
            class="help is-danger has-text-weight-light is-flex"
            v-if="v$.password.minLength.$invalid"
          >
            Password must be at least 8 characters long.
          </p>
          <p
            class="help is-danger has-text-weight-light is-flex"
            v-if="v$.password.hasLowercase.$invalid"
          >
            Password must include at least one lowercase letter.
          </p>
          <p
            class="help is-danger has-text-weight-light is-flex"
            v-if="v$.password.hasUppercase.$invalid"
          >
            Password must include at least one uppercase letter.
          </p>
          <p
            class="help is-danger has-text-weight-light is-flex"
            v-if="v$.password.hasNumber.$invalid"
          >
            Password must include at least one number.
          </p>
          <p
            class="help is-danger has-text-weight-light is-flex"
            v-if="v$.password.hasSymbol.$invalid"
          >
            Password must include at least one symbol (e.g., !@#$%^&*).
          </p>
        </span>
      </label>

      <p-button type="submit" class="button is-info" label="Register" />
    </form>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { useVuelidate } from '@vuelidate/core'
import { required, email as emailValidator } from '@vuelidate/validators'
import { useUserStore } from '@/stores/user'
import { Role } from 'backend-sdk'
import { userPasswordValidators } from '@/helpers/password.helper'
import { isErrorResponse } from '@/helpers/errors.helper'
import { useToast } from 'primevue/usetoast'
import { useRouter } from 'vue-router'

const userStore = useUserStore()
const toast = useToast()
const router = useRouter()

const firstName = ref('')
const lastName = ref('')
const email = ref('')
const password = ref('')
const role = ref<Role>(Role.Agent)

const roleOptions = [
  { label: 'Agent', value: Role.Agent },
  { label: 'Manager', value: Role.Manager }
]

const rules = computed(() => ({
  firstName: { required },
  lastName: { required },
  email: { required, email: emailValidator },
  password: { required, ...userPasswordValidators() },
  role: { required }
}))

const v$ = useVuelidate(rules, { firstName, lastName, email, password, role })

const showErrorMessage = (message: string, severity: 'success' | 'error', summary?: string) => {
  toast.add({
    severity: severity,
    summary: summary,
    detail: message,
    life: 3000
  })
}

const handleRegister = async () => {
  const isValid = await v$.value.$validate()
  if (!isValid) return
  const response = await userStore.create({
    firstName: firstName.value,
    lastName: lastName.value,
    email: email.value,
    password: password.value,
    role: role.value
  })

  if (isErrorResponse(response)) {
    showErrorMessage(response.message, 'error', 'Registration Failed')
  } else {
    showErrorMessage('Registration successful', 'success')
    router.push({ name: 'users' })
  }
}
</script>

<style scoped>
.register-form form {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}
</style>
