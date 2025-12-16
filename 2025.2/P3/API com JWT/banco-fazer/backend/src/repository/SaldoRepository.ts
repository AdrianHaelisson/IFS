import { prisma } from "../prismaClient.js";
import { Saldo } from "../entities/ISaldo.js";

export class SaldoRepository {
  async findByUsuarioId(usuarioId: number): Promise<Saldo | null> {
    const rows = (await prisma.$queryRaw`
        SELECT id, "usuarioId", valor
        FROM "Saldo"
        WHERE "usuarioId" = ${usuarioId}
        `) as Saldo[];
    if (rows.length === 0) {
      return null;
    }
    return rows[0];
  }
  async cadastroInicial(usuarioId: number, valor: number): Promise<Saldo> {
    const saldo = await prisma.saldo.create({
      data: {
        usuarioId,
        valor,
      },
    });
    return saldo;
  }

  async atualizarValor(usuarioId: number, novoValor: number): Promise<void> {
    await prisma.saldo.update({
      where: { usuarioId },
      data: { valor: novoValor },
    });
  }
}
