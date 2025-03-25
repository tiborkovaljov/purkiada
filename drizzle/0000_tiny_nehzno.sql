CREATE TABLE "purkiada_competition_assignments" (
	"id" integer PRIMARY KEY GENERATED ALWAYS AS IDENTITY (sequence name "purkiada_competition_assignments_id_seq" INCREMENT BY 1 MINVALUE 1 MAXVALUE 2147483647 START WITH 1 CACHE 1),
	"yearName" integer NOT NULL,
	"fileLink" varchar(255) NOT NULL,
	"resultsLink" varchar(255) NOT NULL
);
--> statement-breakpoint
CREATE TABLE "purkiada_homepage_images" (
	"id" integer PRIMARY KEY GENERATED ALWAYS AS IDENTITY (sequence name "purkiada_homepage_images_id_seq" INCREMENT BY 1 MINVALUE 1 MAXVALUE 2147483647 START WITH 1 CACHE 1),
	"title" varchar(255) NOT NULL,
	"imageUrl" varchar(255) NOT NULL,
	"altText" varchar(255) NOT NULL
);
--> statement-breakpoint
CREATE TABLE "purkiada_users" (
	"id" integer PRIMARY KEY GENERATED ALWAYS AS IDENTITY (sequence name "purkiada_users_id_seq" INCREMENT BY 1 MINVALUE 1 MAXVALUE 2147483647 START WITH 1 CACHE 1),
	"name" varchar(255) NOT NULL,
	"age" integer NOT NULL,
	"password" varchar(255) NOT NULL,
	"email" varchar(255) NOT NULL,
	"isAdmin" boolean,
	CONSTRAINT "purkiada_users_email_unique" UNIQUE("email")
);
