import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const blog = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/blog' }),
  schema: z.object({
    title: z.string(),
    /** Shorter <title> for search results when `title` is long (Bing flags titles over 70 characters with " | AdMobot"). */
    seoTitle: z.string().max(60).optional(),
    description: z.string(),
    date: z.coerce.date(),
    updated: z.coerce.date().optional(),
    category: z.string(),
    readMinutes: z.number(),
    draft: z.boolean().default(false),
  }),
});

export const collections = { blog };
