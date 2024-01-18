<template>
  <p-data-table :value="users" :paginator="true" :rows="10" :paginatorTemplate="paginatorTemplate">
    <p-column field="firstName" header="First Name"></p-column>
    <p-column field="lastName" header="Campaign"></p-column>
    <p-column field="email" header="Email"></p-column>
    <p-column field="role" header="Role"></p-column>
    <p-column field="createdAt" header="Created At"></p-column>
    <p-column field="actions" header="Actions">
      <template #body="slotProps">
        <span class="is-flex is-justify-content-flex-start">
          <p-button
            class="button is-info is-circle"
            icon="pi pi-pencil"
            @click="handleUpdate(slotProps.data)"
          />
          <p-button
            class="button is-danger is-circle"
            icon="pi pi-trash"
            @click="handleDelete(slotProps.data)"
          />
        </span>
      </template>
    </p-column>
  </p-data-table>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { useUserStore } from '@/stores/user'
import { useRouter } from 'vue-router'
import type { User } from 'backend-sdk'
const userStore = useUserStore()
const router = useRouter()

const users = ref(
  [] as {
    id: string
    firstName: string
    lastName: string
    email: string
    role: string
    createdAt: string
  }[]
)

const paginatorTemplate =
  'CurrentPageReport PrevPageLink PageLinks NextPageLink RowsPerPageDropdown'

const formatDateTime = (date: string) => {
  return new Date(date).toISOString().replace('T', ' ').substring(0, 16)
}

const handleUpdate = (user: User) => {
  router.push({ name: 'users-update', params: { id: user.id } })
}

const handleDelete = async (user: User) => {
  console.log('delete user', user)
  await userStore.remove(user)
}

onMounted(async () => {
  const loadedUsers = (await userStore.findAll()) || []
  users.value = loadedUsers.map((user) => ({
    id: user.id,
    firstName: user.firstName,
    lastName: user.lastName,
    email: user.email,
    role: user.role,
    createdAt: formatDateTime(user.createdAt)
  }))
})
</script>

<style lang="scss">
.p-datatable {
  overflow-x: auto;
  border-collapse: collapse;
  background-color: #f4f4f4;
  color: #333;
  font-family: Arial, sans-serif;
  font-size: 0.9em;
}

.p-datatable .p-datatable-thead > tr > th {
  background-color: $info;
  color: white;
  padding: 1rem;
  text-align: left;
  border-bottom: 2px solid #ddd;
}

.p-datatable .p-datatable-tbody > tr > td {
  padding: 0.75rem;
  margin: 10px 0px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  border-bottom: 1px solid #ddd;
}

.p-datatable .p-datatable-tbody > tr:hover {
  background-color: #e9ecef;
}

.p-datatable {
  overflow-x: auto;
}

.is-circle {
  border-radius: 50% !important;
  margin-right: 5px;
}
</style>
