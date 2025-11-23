import * as PrismaGenerated from "../generated/client/client";

const prismaClientSingleton = new PrismaGenerated.PrismaClient({
  log: ["query"],
});

export const prisma = prismaClientSingleton;