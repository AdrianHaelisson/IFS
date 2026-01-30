import { prisma } from "../prismaClient.js";
import { Saldo } from "@prisma/client";

export class SaldoRepository {
    async findByUsuarioId(usuarioId: number): Promise<Saldo | null> {
        return await prisma.saldo.findUnique({
            where: { usuarioId },
        });
    }
}
