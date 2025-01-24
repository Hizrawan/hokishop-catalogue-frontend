<template>
  <div class="flex h-full w-full flex-col items-center justify-center">
    <div
      class="sm:max-0 mx-4 grid w-full max-w-sm grid-cols-1 gap-y-4 rounded-lg bg-gray-50 p-4 dark:bg-gray-800"
    >
      <div class="flex flex-col items-center justify-center">
        <span class="text-2xl font-bold">
          {{ $t("auth.login.loginToService", { service: "Headless" }) }}
        </span>
      </div>
      <Button
        icon="uil:sign-in-alt"
        class="bg-primary dark:bg-primaryDark text-white hover:brightness-125 dark:text-gray-50 justify-center"
        @click="login"
      >
        {{ $t("auth.login.loginViaXinchuanAuth") }}
      </Button>
    </div>
  </div>
</template>

<script lang="ts" setup>
definePageMeta({
  layout: "blank",
  auth: "guest",
});

const login = () => {
  const config = useRuntimeConfig();

  const url = new URL(config.public.auth.url);
  url.searchParams.set("response_type", "code");
  url.searchParams.set("client_id", config.public.auth.clientId);
  url.searchParams.set("redirect_uri", config.public.auth.callbackUrl);

  window.location.replace(url.href);
};
</script>

<style></style>
