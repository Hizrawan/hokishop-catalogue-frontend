<template>
  <div>Modaaal</div>
  <div>
    <Button class="bg-primary" @click="openModal">Toggle Modal</Button>
  </div>
  <HeadlessDialog :open="modalOpen" @close="closeModal">
    <div
      class="fixed inset-0 flex w-screen items-center justify-center p-4 backdrop-blur-sm"
    >
      <HeadlessDialogPanel
        class="min-w-96 rounded-lg border-gray-200 bg-white p-4 shadow-md dark:border dark:border-gray-800 dark:bg-gray-900 dark:text-gray-50"
      >
        <HeadlessDialogTitle>Modal Title</HeadlessDialogTitle>
        <HeadlessDialogDescription>
          This is a modal description
        </HeadlessDialogDescription>
        <button
          @click="closeModal"
          class="bg-primary rounded-lg px-2 py-1 text-white"
        >
          Close
        </button>
      </HeadlessDialogPanel>
    </div>
  </HeadlessDialog>
</template>

<script lang="ts" setup>
definePageMeta({
  title: "Modal",
});

const modalOpen = ref(false);

const openModal = () => {
  modalOpen.value = true;
};

const closeModal = () => {
  modalOpen.value = false;
};
</script>

<style></style>
