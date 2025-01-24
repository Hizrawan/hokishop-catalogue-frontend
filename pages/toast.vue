<template>
  <FormInput
    v-model="toastTitle"
    placeholder="Enter your title"
    class="w-full"
  />
  <FormInput
    v-model="toastMessage"
    placeholder="Enter your message"
    class="w-full"
  />
  <select
    v-model="type"
    class="rounded-lg bg-gray-50 px-2 py-1 dark:bg-gray-800"
  >
    <option v-for="toastType in toastTypes" :key="toastType" :value="toastType">
      {{ toastType }}
    </option>
  </select><br/>
  <label for="persist">Persist</label
  ><input name="persist" type="checkbox" v-model="persist" /><br/>
  <Button @click="displayToast" class="bg-primary text-gray-50"
    >Show Toast</Button
  >
  <OverlayToastContainer />
</template>

<script lang="ts" setup>
const toast = useToast();
const toastTypes = ["success", "error", "warning", "info", "default"] as const;
const toastMessage = ref("Message");
const toastTitle = ref("Title");
const persist = ref(false);
const type = ref<"success" | "error" | "warning" | "info" | "default">(
  "default",
);

const displayToast = () => {
  toast.add({
    title: toastTitle.value,
    message: toastMessage.value,
    type: type.value,
    persist: persist.value,
  });
};
</script>

<style></style>
