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
        imageUrl: z.string().min(1),
        altText: z.string().min(1),
      })
    )
    .mutation(async ({ ctx, input }) => {
      await ctx.db.insert(homepageImages).values({
        imageUrl: input.imageUrl,
        altText: input.altText,
      });
    }),

  update: publicProcedure
    .input(
      z.object({
        imageUrl: z.string(),
        altText: z.string(),
      })
    )
    .mutation(async ({ ctx, input }) => {
      await ctx.db
        .update(homepageImages)
        .set({ imageUrl: input.imageUrl })
        .where(eq(homepageImages.altText, input.altText));
    }),

  getAll: publicProcedure.query(async ({ ctx }) => {
    return await ctx.db.query.homepageImages.findMany();
  }),
});
