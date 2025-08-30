// db/schema.ts
import { pgTable, uuid, varchar, text, timestamp, integer, pgEnum } from "drizzle-orm/pg-core";

// ------------------------------------
// Enums
// ------------------------------------
export const jobStatusEnum = pgEnum("job_status", [
  "pending",
  "processing",
  "completed",
  "failed",
]);

// ------------------------------------
// Users Table
// ------------------------------------
export const users = pgTable("users", {
  id: uuid("id").defaultRandom().primaryKey(),
  clerkId: varchar("clerk_id", { length: 255 }).notNull().unique(), // Clerk user ID
  email: varchar("email", { length: 255 }).notNull(),
  credits: integer("credits").default(10), // optional credit system
  createdAt: timestamp("created_at").defaultNow().notNull(),
});

// ------------------------------------
// Jobs Table
// ------------------------------------
export const jobs = pgTable("jobs", {
  id: uuid("id").defaultRandom().primaryKey(),
  userId: uuid("user_id")
    .references(() => users.id, { onDelete: "cascade" })
    .notNull(),
  prompt: text("prompt"), 
  inputImageUrl: text("input_image_url"), 
  status: jobStatusEnum("status").default("pending").notNull(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
  updatedAt: timestamp("updated_at").defaultNow().notNull().$onUpdate(() => new Date()),

});

// ------------------------------------
// Results Table
// ------------------------------------
export const results = pgTable("results", {
  id: uuid("id").defaultRandom().primaryKey(),
  jobId: uuid("job_id")
    .references(() => jobs.id, { onDelete: "cascade" })
    .notNull(),
  imageUrl: text("image_url").notNull(), // stored ImageKit URL
  metadata: text("metadata"), // optional (e.g. model used, size, etc.)
  createdAt: timestamp("created_at").defaultNow().notNull(),
});
