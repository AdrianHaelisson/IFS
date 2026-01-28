
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
    try {
        console.log("Connecting to DB...");
        await prisma.$connect();
        console.log("Connected!");

        console.log("Listing users...");
        const users = await prisma.usuario.findMany();
        console.log("Users:", users);
    } catch (e) {
        console.error("DB Error:", e);
    } finally {
        await prisma.$disconnect();
    }
}

main();
