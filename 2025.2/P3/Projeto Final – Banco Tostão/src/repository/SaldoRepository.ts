import { prisma } from "../prismaClient.js";

export class SaldoRepository {
  async findByUsuarioId(usuarioId: number) {
    const saldo = await prisma.saldo.findUnique({
      where: { usuarioId },
    });
    return saldo;
  }

  async cadastroInicial(usuarioId: number, valor: number) {
    const saldo = await prisma.saldo.create({
      data: {
        usuarioId,
        valor,
      },
    });
    return saldo;
  }

  async atualizarValor(usuarioId: number, novoValor: number) {
    await prisma.saldo.update({
      where: { usuarioId },
      data: { valor: novoValor },
    });
  }
}
