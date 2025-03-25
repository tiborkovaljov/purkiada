import { eq } from 'drizzle-orm';
import { z } from 'zod';

import { createTRPCRouter, publicProcedure } from '~/server/api/trpc';
import { homepageImages } from '~/server/db/schema';

export const homepageImagesRouter = createTRPCRouter({
  hello: publicProcedure
    .input(z.object({ text: z.string() }))
    .query(({ input }) => {
      return {
        greeting: `Hello ${input.text}`,
      };
    }),

  create: publicProcedure
    .input(
      z.object({
        title: z.string().min(1),
        imageUrl: z.string().min(1),
        altText: z.string().min(1),
      })
    )
    .mutation(async ({ ctx, input }) => {
      await ctx.db.insert(homepageImages).values({
        title: input.title,
        imageUrl: input.imageUrl,
        altText: input.altText,
      });
    }),

  update: publicProcedure
    .input(
      z.object({
        title: z.string(),
        imageUrl: z.string(),
        altText: z.string(),
      })
    )
    .mutation(async ({ ctx, input }) => {
      await ctx.db
        .update(homepageImages)
        .set({ imageUrl: input.imageUrl, altText: input.altText })
        .where(eq(homepageImages.title, input.title));
    }),

  getAll: publicProcedure.query(async ({ ctx }) => {
    return await ctx.db.query.homepageImages.findMany();
  }),
});
