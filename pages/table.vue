<template>
  <div>
    <div>
      <span> Datatable Example </span>
      <Button class="bg-primary text-gray-50" @click="loading = !loading"
        >Toggle Loading State</Button
      >
    </div>
    <DataTable
      :columns="exampleColumns"
      :rows="exampleRows"
      :pagination="examplePagination"
      key-prop="id"
      class="w-full"
      expandable
      :loading="loading"
      @navigate="handlePagination"
    >
      <template #cell-actions="{ entry }">
        <Button
          class="bg-primary text-gray-50 hover:brightness-125"
          @click="console.log(entry)"
          >View</Button
        >
      </template>
      <template #detail="{ entry }">
        This is expanded row for {{ entry.name }}
      </template>
    </DataTable>
  </div>
</template>

<script lang="ts" setup>
import type {
  ColumnDefinition,
  Pagination,
} from "~/components/DataTable/datatableMeta";

const loading = ref(true);

interface ExampleInterface {
  id: string;
  name: string;
  age: number;
  nationality: string;
}

const exampleColumns = <ColumnDefinition<ExampleInterface>[]>[
  {
    key: "name",
    label: "Name",
  },
  {
    key: "age",
    label: "Age",
  },
  {
    key: "nationality",
    label: "Nationality",
  },
  {
    key: "actions",
    label: "Actions",
  },
];

const exampleRows = ref<ExampleInterface[]>([
  {
    id: "1",
    name: "John Doe",
    age: 25,
    nationality: "USA",
  },
  {
    id: "2",
    name: "Jane Doe",
    age: 22,
    nationality: "UK",
  },
  {
    id: "3",
    name: "Max Mustermann",
    age: 30,
    nationality: "Germany",
  },
]);

const handlePagination = (page: number) => {
  examplePagination.value.page = page;
};

const examplePagination = ref<Pagination>({
  page: 1,
  perPage: 20,
  totalPages: 5,
});
</script>

<style></style>
