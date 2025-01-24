<template>
  <Teleport to="body">
    <div
      class="fixed bottom-4 right-4 flex-row space-y-2 p-2 dark:text-gray-50"
      v-if="notifications.length"
    >
      <OverlayToast
        v-for="notification in notifications"
        :key="notification.id"
        :notification="notification"
      />
    </div>
  </Teleport>
</template>

<script lang="ts" setup>
import type { Notification } from "~/types/notification";
const notifications = useState<Notification[]>("notifications", () => []);
</script>

<style></style>
