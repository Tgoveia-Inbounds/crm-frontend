<template>
  <p-confirm-popup />
  <p-data-table :value="items" :paginator="true" :rows="10" :paginatorTemplate="paginatorTemplate">
    <p-column
      v-for="column in columns"
      :key="column.field"
      :field="column.field"
      :header="column.header"
    >
      <template v-if="column.slotName" v-slot:[column.slotName]="slotProps">
        <slot :name="column.slotName" v-bind="slotProps"></slot>
      </template>
    </p-column>
  </p-data-table>
</template>

<script setup lang="ts">
import { defineProps } from 'vue'

interface TableColumn {
  field: string
  header: string
  slotName?: string
}

const props = defineProps({
  items: Array,
  columns: Array as () => TableColumn[],
  paginatorTemplate: String
})
</script>

<style lang="scss">
.p-datatable {
  overflow-x: auto;
  border-collapse: collapse;
  color: #333;
  font-family: Arial, sans-serif;
  font-size: 0.9em;
  min-width: 60vw;
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
  vertical-align: middle;
}

.p-datatable .p-datatable-tbody > tr:hover {
  background-color: #e9ecef;
}

.p-datatable .p-datatable-thead > tr > th:first-child {
  border-top-left-radius: 5px;
}

.p-datatable .p-datatable-thead > tr > th:last-child {
  border-top-right-radius: 5px;
}

.is-circle {
  border-radius: 50% !important;
  margin-right: 5px;
  max-width: 35px;
  max-height: 35px;
  padding: 0;
  aspect-ratio: 1/1;
}
</style>
