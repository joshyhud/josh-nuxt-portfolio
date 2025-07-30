// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  srcDir: "app/",
  css: ["~/assets/scss/main.scss"],
  components: true, // 👈 auto-import components
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },

  routeRules: {
    "/": {
      headers: {
        "Cache-Control": "max-age=600 Public",
      },
    },
  },

  app: {
    head: {
      title: "Josh Hudson Dev", // default fallback title
      htmlAttrs: {
        lang: "en-GB",
      },
      link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
      charset: "utf-16",
      viewport: "width=device-width, initial-scale=1, maximum-scale=1",
    },
  },

  modules: [
    //"@nuxt/content", // Temporarily disabled due to Node.js version compatibility
    "@nuxt/image", // Used for <NuxtImg> components in cards
    "@vueuse/motion/nuxt", // Essential for site animations
    "@nuxtjs/sitemap",
  ],

  // GitHub Pages static generation
  nitro: {
    prerender: {
      routes: ["/"],
    },
  },
});