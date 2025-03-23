import { z } from 'zod';

import { createTRPCRouter, publicProcedure } from '~/server/api/trpc';
import { competitionAssignments, users } from '~/server/db/schema';

export const yearRouter = createTRPCRouter({
  create: publicProcedure
    .input(
      z.object({
        yearName: z.number().min(1),
        fileLink: z.string().min(1),
        resultsLink: z.string().min(1),
      })
    )
    .mutation(async ({ ctx, input }) => {
      await ctx.db.insert(competitionAssignments).values({
        yearName: input.yearName,
        fileLink: input.fileLink,
        resultsLink: input.resultsLink,
      });
    }),

  getAll: publicProcedure.query(async ({ ctx }) => {
    return await ctx.db.query.competitionAssignments.findMany();
  }),
});
