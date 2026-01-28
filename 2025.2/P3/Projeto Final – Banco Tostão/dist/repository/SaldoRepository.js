import { prisma } from "../prismaClient.js";
export class SaldoRepository {
    async findByUsuarioId(usuarioId) {
        const saldo = await prisma.saldo.findUnique({
            where: { usuarioId },
        });
        return saldo;
    }
    async cadastroInicial(usuarioId, valor) {
        const saldo = await prisma.saldo.create({
            data: {
                usuarioId,
                valor,
            },
        });
        return saldo;
    }
    async atualizarValor(usuarioId, novoValor) {
        await prisma.saldo.update({
            where: { usuarioId },
            data: { valor: novoValor },
        });
    }
}
//# sourceMappingURL=SaldoRepository.js.map