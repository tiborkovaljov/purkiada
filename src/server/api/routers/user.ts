import { and, eq } from 'drizzle-orm';
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
        username: z.string().min(1),
        email: z.string().email(),
        password: z.string().min(1),
        school: z.string().min(1),
      })
    )
    .mutation(async ({ ctx, input }) => {
      await ctx.db.insert(users).values({
        name: input.name,
        username: input.username,
        email: input.email,
        password: input.password,
        school: input.school,
      });
    }),

  check: publicProcedure
    .input(
      z.object({
        username: z.string().min(1),
        password: z.string().min(1),
      })
    )
    .mutation(async ({ ctx, input }) => {
      const user = await ctx.db.query.users.findMany({
        where: and(
          eq(users.username, input.username),
          eq(users.password, input.password)
        ),
      });

      if (!user) {
        return false;
      }

      if (user.length > 1) {
        return false;
      }

      if (user[0]?.isAdmin) {
        return true;
      }

      return false;
    }),

  getAll: publicProcedure.query(async ({ ctx }) => {
    return await ctx.db.query.users.findMany();
  }),

  getAllData: publicProcedure.input(z.object({
    userId: z.number()
  })).query(async ({ ctx, input }) => {
      return await ctx.db.query.users.findFirst({
        where: eq(users.id, input.userId)
      });
  }),

  getUserIdByUserame: publicProcedure.input(
    z.object({
      username: z.string().min(1),
    })
  )
  .mutation(async ({ ctx, input }) => {
    const user = await ctx.db.query.users.findMany({
      where: eq(users.username, input.username),
    });

    if (user.length > 1) {
      return undefined;
    }

    const oneUser = user[0];

    if (!oneUser) {
      return undefined;
    }

    return oneUser.id;
  }),
});
