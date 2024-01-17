<template>
  <p-data-table :value="users" :paginator="true" :rows="10" :paginatorTemplate="paginatorTemplate">
    <p-column field="firstName" header="First Name"></p-column>
    <p-column field="lastName" header="Campaign"></p-column>
    <p-column field="email" header="Email"></p-column>
    <p-column field="role" header="Role"></p-column>
    <p-column field="createdAt" header="Created At"></p-column>
    <p-column field="updatedAt" header="Updated At"></p-column>
  </p-data-table>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const users = ref(
  [] as {
    firstName: string
    lastName: string
    email: string
    role: string
    createdAt: string
    updatedAt: string
  }[]
)

const paginatorTemplate =
  'CurrentPageReport PrevPageLink PageLinks NextPageLink RowsPerPageDropdown'

const formatDateTime = (date: Date) => {
  return new Date(date).toISOString().replace('T', ' ').substring(0, 16)
}

users.value = [...Array(30)].map(() => ({
  firstName: 'John',
  lastName: 'Doe',
  email: 'example@example.com',
  role: 'agent',
  createdAt: formatDateTime(new Date()),
  updatedAt: formatDateTime(new Date())
}))
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
</style>
