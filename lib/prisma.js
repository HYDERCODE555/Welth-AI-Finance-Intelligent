import { PrismaClient } from "./generated/prisma";

export const db =  globalThis.prisma || new PrismaClient();  // due to next js has global reload therefore we won't create an new client every time 

if (process.env.NODE_ENV !== "production" ){
    globalThis.prisma = db;
}