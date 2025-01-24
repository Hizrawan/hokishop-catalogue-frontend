// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },
  runtimeConfig: {
    public: {
      app: {
        name: "",
      },
      auth: {
        url: "",
        callbackUrl: "",
        clientId: "",
      },
      apiBaseUrl: "",
    },
  },
  modules: [
    "@pinia/nuxt",
    "@nuxtjs/tailwindcss",
    "nuxt-headlessui",
    "@nuxtjs/i18n",
    "@nuxtjs/color-mode",
    "pinia-plugin-persistedstate",
    "@nuxt/icon",
    "dayjs-nuxt",
  ],
  tailwindcss: {
    config: {
      theme: {
        extend: {
          colors: {
            primary: "#0466FF",
            primaryDark: "#0044CC",
            babyBlue: "#A4C4F7",
          },
        },
      },
    },
    editorSupport: true,
  },
  i18n: {
    strategy: "no_prefix",
    defaultLocale: "en",
    locales: ["en", "id", "zh-Hant-TW"],
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: "i18n_lang",
    },
    vueI18n: "./i18n.config.ts",
  },
  colorMode: {
    storage: "localStorage",
    storageKey: "__app_theme__",
  },
  dayjs: {
    plugins: ["utc", "timezone"],
  },
});
