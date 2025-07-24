import { defineContentConfig, defineCollection, z } from "@nuxt/content";

export default defineContentConfig({
  collections: {
    blog: defineCollection({
      source: "**/*.md",
      type: "page",
      // Define custom schema for docs collection
      schema: z.object({
        tags: z.array(z.string()),
        image: z.string(),
        date: z.string(), // Changed from z.Date() to z.string()
      }),
    }),
  },
});
