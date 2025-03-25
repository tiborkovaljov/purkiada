// Example model schema from the Drizzle docs
// https://orm.drizzle.team/docs/sql-schema-declaration

import {
  index,
  boolean,
  pgTableCreator,
  integer,
  pgTable,
  varchar,
} from 'drizzle-orm/pg-core';

/**
 * This is an example of how to use the multi-project schema feature of Drizzle ORM. Use the same
 * database instance for multiple projects.
 *
 * @see https://orm.drizzle.team/docs/goodies#multi-project-schema
 */
export const createTable = pgTableCreator((name) => `purkiada_${name}`);

export const users = createTable('users', {
  id: integer().primaryKey().generatedAlwaysAsIdentity(),
  name: varchar({ length: 255 }).notNull(),
  username: varchar({ length: 255 }).notNull(),
  password: varchar({ length: 255 }).notNull(),
  email: varchar({ length: 255 }).notNull().unique(),
  school: varchar({ length: 255 }).notNull(),
  isAdmin: boolean(),
});

export const competitionAssignments = createTable('competition_assignments', {
  id: integer().primaryKey().generatedAlwaysAsIdentity(),
  yearName: integer().notNull(),
  fileLink: varchar({ length: 255 }).notNull(),
  resultsLink: varchar({ length: 255 }).notNull(),
});

export const homepageImages = createTable('homepage_images', {
  id: integer().primaryKey().generatedAlwaysAsIdentity(),
  title: varchar({ length: 255 }).notNull(),
  imageUrl: varchar({ length: 255 }).notNull(),
  altText: varchar({ length: 255 }).notNull(),
});
