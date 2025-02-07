export default defineNuxtConfig({
  devtools: { enabled: true },

  modules: ["@nuxt/ui", "@nuxt/eslint", "@pinia/nuxt"],

  css: ["~/assets/css/main.css"],

  future: {
    compatibilityVersion: 4,
  },

  pinia: {
    storesDirs: ["./app/stores/**"],
  },

  compatibilityDate: "2024-11-27",

  colorMode: {
    classSuffix: "",
  }
});
