<template>
  <p-data-table :value="leads" :paginator="true" :rows="10" :paginatorTemplate="paginatorTemplate">
    <p-column field="phoneNumber" header="Phone Number"></p-column>
    <p-column field="email" header="Email"></p-column>
    <p-column field="campaign" header="Campaign"></p-column>
    <p-column field="attempts" header="Attempts"></p-column>
    <p-column field="leadStatus" header="Lead Status"></p-column>
    <p-column field="isDuplicate" header="Duplicate"></p-column>
    <p-column field="isTransferred" header="Transferred"></p-column>
    <p-column field="doNotCall" header="DNC"></p-column>
    <p-column field="actions" header="Actions"></p-column>
    <p-column field="createdAt" header="Created At"></p-column>
    <p-column field="updatedAt" header="Updated At"></p-column>
  </p-data-table>
</template>

<script setup lang="ts">
import { ref } from 'vue'

enum Actions {
  VIEW_LEAD = 'View Lead',
  DNC_LEAD = 'DNC Lead',
  STOP_CALLING = 'Stop Calling'
}

enum LeadStatus {
  NOT_STARTED = 'Not started',
  NOT_INJURED = 'Not injured',
  TRANSFERRED = 'Transferred',
  IN_PROGRESS = 'In progress',
  SUPPRESSED = 'Suppressed',
  DNC = 'DNC',
  ALREADY_DNC = 'Already DNC',
  DONE = 'Done'
}

const leads = ref(
  [] as {
    phoneNumber: string
    email: string
    campaign: string
    attempts: number
    leadStatus: LeadStatus
    isDuplicate: string
    isTransferred: string
    doNotCall: string
    actions: Actions
    createdAt: string
    updatedAt: string
  }[]
)

const paginatorTemplate =
  'CurrentPageReport PrevPageLink PageLinks NextPageLink RowsPerPageDropdown'

const formatDateTime = (date: Date) => {
  return new Date(date).toISOString().replace('T', ' ').substring(0, 16)
}

leads.value = [...Array(30)].map(() => ({
  phoneNumber: '123-456-7890',
  email: 'example@example.com',
  campaign: 'Campaign Name',
  attempts: 0,
  leadStatus: LeadStatus.NOT_STARTED,
  isDuplicate: 'No',
  isTransferred: 'No',
  doNotCall: 'No',
  actions: Actions.VIEW_LEAD,
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
