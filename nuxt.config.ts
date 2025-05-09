// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  app: {
    // layoutTransition: {
    //   name: "layout",
    //   mode: "out-in",
    //   duration: 1500,
    // },
  },
  devtools: { enabled: true },
  modules: ["@nuxtjs/tailwindcss", "@nuxt/image", "@vueuse/nuxt"],
  tailwindcss: {
    viewer: { endpoint: "/_tailwind", exportViewer: true },
    editorSupport: true,
  },
});
