import { z } from 'zod';

import { createTRPCRouter, publicProcedure } from '~/server/api/trpc';
import { users } from '~/server/db/schema';

export const userRouter = createTRPCRouter({
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
        name: z.string().min(1),
        age: z.number().min(0),
        email: z.string().email(),
      })
    )
    .mutation(async ({ ctx, input }) => {
      await ctx.db.insert(users).values({
        name: input.name,
        age: input.age,
        email: input.email,
      });
    }),

  getAll: publicProcedure.query(async ({ ctx }) => {
    return await ctx.db.query.users.findMany();
  }),
});
