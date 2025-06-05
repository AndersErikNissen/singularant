// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  app: {
    head: {
      htmlAttrs: {
        lang: "en",
      },
      link: [{ rel: "icon", type: "image/x-icon" }],
    },
    pageTransition: {
      name: "page",
      mode: "out-in",
      duration: 1000,
    },
  },
  devtools: { enabled: true },
  modules: ["@nuxtjs/tailwindcss", "@nuxt/image", "@vueuse/nuxt"],
  tailwindcss: {
    viewer: { endpoint: "/_tailwind", exportViewer: true },
    editorSupport: true,
    exposeConfig: true,
  },
});
