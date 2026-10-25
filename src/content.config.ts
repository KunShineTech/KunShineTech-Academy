import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';
const lessons = defineCollection({
  loader: glob({ pattern: '**/*.mdx', base: './src/content/lessons' }),
  schema: z.object({
    title: z.string(), level: z.number().int().min(1).max(8), order: z.number(), duration: z.number(), unit: z.string(),
    goals: z.array(z.string()), difficulty: z.enum(['入门','基础','进阶']).default('基础'),
    homework: z.string().optional(),
  }),
});
export const collections = { lessons };
