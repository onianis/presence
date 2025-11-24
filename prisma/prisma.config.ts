import "dotenv/config";
import { defineConfig } from "@prisma/config";

const databaseUrl = process.env.DATABASE_URL;

// Narrow the type so TS knows it's a string
if (!databaseUrl) {
  throw new Error("DATABASE_URL is not set in the environment");
}

export default defineConfig({
  // Relative to this file
  schema: "./schema.prisma",
  datasource: {
    url: databaseUrl,
  },
});