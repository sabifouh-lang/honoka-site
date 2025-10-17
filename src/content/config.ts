import { z, defineCollection } from "astro:content";

const newsCollection = defineCollection({
  schema: z.object({
    title: z.string(),
    pubDate: z.date(),
  }),
});

export const collections = {
  news: newsCollection,
};
