import { defineConfig } from "drizzle-kit";
import { neonConfig } from "@neondatabase/serverless";


export default defineConfig({
  schema: "./src/db/schema",
  out: "./drizzle",
  dialect: "postgresql",
  dbCredentials: {
    url: process.env.DATABASE_URL!,
  },
});