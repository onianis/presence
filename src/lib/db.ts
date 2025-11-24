import * as PrismaGenerated from "../generated/client/client";
import { Pool } from "pg";
import { PrismaPg } from "@prisma/adapter-pg";

const databaseUrl = process.env.DATABASE_URL;

if (!databaseUrl) {
  throw new Error("DATABASE_URL is not set in the environment");
}

const pool = new Pool({
  connectionString: databaseUrl,
});

const adapter = new PrismaPg(pool);

const prismaClientSingleton = new PrismaGenerated.PrismaClient({
  adapter,
  log: ["query"],
});

export const prisma = prismaClientSingleton;