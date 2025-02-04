// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },

  modules: ["@nuxt/ui", "@nuxt/eslint", "@pinia/nuxt"],

  css: ["~/assets/css/main.css"],

  future: {
    compatibilityVersion: 4,
  },

  pinia: {
    storeDirs: ["./app/stores/**"],
  },

  compatibilityDate: "2024-11-27",
});
