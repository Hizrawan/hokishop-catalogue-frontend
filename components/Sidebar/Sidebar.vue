<template>
  <aside
    class="flex min-h-screen w-64 flex-col justify-between border-r p-2 dark:border-gray-800 dark:bg-gray-900"
  >
    <div class="flex flex-col items-center justify-center gap-2 -space-y-2">
      <span class="text-2xl font-bold">Catalogues</span>
      <span class="text-sm">Admin Panel</span>
    </div>
    <div class="flex flex-1 flex-col gap-2 py-8">
      <template v-for="item in menu">
        <SidebarLink v-if="'to' in item" :link="item" />
        <SidebarSection v-if="'links' in item" :item="item" />
      </template>
    </div>
    <div>
      <Button
        @click="logout"
        icon="uil:sign-out-alt"
        icon-class="text-red-500"
        class="w-full hover:bg-gray-100 dark:hover:bg-gray-700"
      >
        {{ $t("auth.logout") }}
      </Button>
    </div>
  </aside>
</template>

<script lang="ts" setup>
const { logout } = useAuthStore();
import type { Section, Link } from "~/components/Sidebar/sidebarMeta";

const menu = <Section[] | Link[]>[
  {
    label: "sidebar.dashboard",
    to: "/",
    icon: "uil:home",
  },
  {
    label: "sidebar.products",
    to: "/products",
    icon: "uil:mobile-android",
  },
  {
    label: "Templates",
    icon: "uil:file",
    links: [
      { label: "DataTable", to: "/table", icon: "uil:table" },
      { label: "Form", to: "/form", icon: "uil:book" },
      { label: "Toast", to: "/toast", icon: "uil:bell" },
      { label: "Modal", to: "/modal", icon: "uil:window" },
    ],
  },
];
</script>

<style></style>
