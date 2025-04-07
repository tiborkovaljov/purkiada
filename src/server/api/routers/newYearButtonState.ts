import { and, eq } from 'drizzle-orm';
import { z } from 'zod';
import { createTRPCRouter, publicProcedure } from '~/server/api/trpc';
import { newYearButtonState } from '~/server/db/schema';

export const newYearButtonStateRouter = createTRPCRouter({
  hello: publicProcedure
    .input(z.object({ text: z.string() }))
    .query(({ input }) => {
      return {
        greeting: `Hello ${input.text}`,
      };
    }),

  toggle: publicProcedure
    .input(
      z.object({
        pressed: z.boolean(),
      })
    )
    .mutation(async ({ ctx, input }) => {
      await ctx.db.update(newYearButtonState).set({
        isDisplayed: input.pressed
      }).where(eq(newYearButtonState.id, 1));
      console.log(input.pressed);
    }),

  getAll: publicProcedure.query(async ({ ctx }) => {
    return await ctx.db.query.newYearButtonState.findFirst();
  }),
});
