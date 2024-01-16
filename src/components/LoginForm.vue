<template>
  <div class="login-form">
    <form>
      <label class="label" for="email-input">
        Email
        <p-input-text id="email-input" class="input" placeholder="Email" />
      </label>
      <label class="label" for="password-input">
        Password
        <p-input-text id="password-input" class="input" type="password" placeholder="Password" />
      </label>
      <p-button class="button is-info" label="Login" />
    </form>
  </div>
</template>

<script lang="ts">
export default {
  name: 'LoginForm'
}
</script>

<style scoped>
.login-form form {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}
</style>
