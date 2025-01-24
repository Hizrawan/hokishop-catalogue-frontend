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
        <div>
          <p>This is expanded row for {{ entry.name }}</p>
          <ul>
            <li>Screen Size: {{ entry.specifications.screen_size }}</li>
            <li>Front Camera: {{ entry.specifications.front_camera }}</li>
            <li>Rear Camera: {{ entry.specifications.rear_camera }}</li>
            <li>RAM: {{ entry.specifications.ram }}</li>
            <li>Storage: {{ entry.specifications.storage }}</li>
            <li>Battery: {{ entry.specifications.battery }}</li>
            <li>OS: {{ entry.specifications.os }}</li>
            <li>Product Code: {{ entry.specifications.product_code }}</li>
            <li>Color: {{ entry.specifications.color }}</li>
          </ul>
        </div>
      </template>
    </DataTable>
  </div>
</template>

<script lang="ts" setup>
import type {
  ColumnDefinition,
  Pagination,
} from "~/components/DataTable/datatableMeta";
import type { CatalogueResponse, Catalogue } from "~/models/catalogue";

const loading = ref(true);

const exampleColumns = <ColumnDefinition<Catalogue>[]>[
  {
    key: "name",
    label: "Name",
  },
  {
    key: "brand_name",
    label: "Brand Name",
  },
  {
    key: "price",
    label: "Price",
  },
  {
    key: "actions",
    label: "Actions",
  },
];
const exampleRows = ref<Catalogue[]>([]);
const { data, error } = useApi<CatalogueResponse>(
  "http://localhost:6004/catalogues",
);

if (data.value) {
  exampleRows.value = data.value.data;
}

if (error.value) {
  console.error("Error fetching catalogues:", error.value);
}

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
