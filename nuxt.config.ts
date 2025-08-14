// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  srcDir: "app/",
  components: true, // 👈 auto-import components
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },

  content: {
    build: {
      markdown: {
        toc: {
          depth: 3, // include h3 headings
        },
        remarkPlugins: {
          // Override remark-emoji options
          "remark-emoji": {
            options: {
              emoticon: true,
            },
          },
          // Disable remark-gfm
          "remark-gfm": false,
        },
      },
    },
  },

  site: {
    url: "https://josh-hudson.co.uk",
    name: "Josh Hudson Dev",
  },

  app: {
    head: {
      title: "Josh Hudson Dev", // default fallback title
      htmlAttrs: {
        lang: "en-GB",
      },
      link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
      charset: "utf-16",
      viewport: "width=device-width, initial-scale=1, maximum-scale=2",
    },
  },

  modules: [
    //"@nuxt/content", // Temporarily disabled due to Node.js version compatibility
    "@nuxt/image", // Used for <NuxtImg> components in cards
    "@vueuse/motion/nuxt", // Essential for site animations
    "@nuxt/ui",
    "@nuxtjs/sitemap",
    "@nuxt/content",
  ],

  // GitHub Pages static generation
  nitro: {
    prerender: {
      routes: ["/"],
    },
  },
});
