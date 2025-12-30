import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    category: z.enum(['Product', 'Research', 'Company', 'News']),
    date: z.coerce.date(),
    author: z.string().default('Shadow Team'),
  }),
});

export const collections = {
  blog,
};
