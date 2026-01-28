import { Request, Response } from "express";
import { prisma } from "../prismaClient.js";
import { TransactionSchema } from "../schemas/transactionSchema.js";

export class TransactionController {

    depositar = async (req: Request, res: Response) => {
        const { valor, tipo } = TransactionSchema.parse(req.body);

        if (tipo !== "DEPOSITO") {
            return res.status(400).json({ message: "Tipo de transação incorreto" });
        }

        const { userId } = req as any;

        const saldo = await prisma.saldo.upsert({
            where: { usuarioId: userId },
            update: { valor: { increment: valor } },
            create: { usuarioId: userId, valor: valor }
        });

        await prisma.transacao.create({
            data: {
                valor,
                tipo,
                destinatarioId: userId
            }
        });

        return res.json(saldo);
    }

    sacar = async (req: Request, res: Response) => {
        const { valor, tipo } = TransactionSchema.parse(req.body);

        if (tipo !== "SAQUE") {
            return res.status(400).json({ message: "Tipo de transação incorreto" });
        }

        const { userId } = req as any;

        const saldoAtual = await prisma.saldo.findUnique({ where: { usuarioId: userId } });
        if (!saldoAtual || saldoAtual.valor < valor) {
            return res.status(400).json({ message: "Saldo insuficiente" });
        }

        const saldo = await prisma.saldo.update({
            where: { usuarioId: userId },
            data: { valor: { decrement: valor } }
        });

        await prisma.transacao.create({
            data: {
                valor,
                tipo,
                remetenteId: userId
            }
        });

        return res.json(saldo);
    }

    transferir = async (req: Request, res: Response) => {
        const { valor, tipo, destinatarioLogin } = TransactionSchema.parse(req.body);

        if (tipo !== "TRANSFERENCIA") {
            return res.status(400).json({ message: "Tipo de transação incorreto" });
        }

        const { userId } = req as any;

        const destinatarioUser = await prisma.usuario.findUnique({ where: { login: destinatarioLogin } });
        if (!destinatarioUser) {
            return res.status(404).json({ message: "Destinatário não encontrado" });
        }
        if (destinatarioUser.id === userId) {
            return res.status(400).json({ message: "Não pode transferir para si mesmo" });
        }

        try {
            const result = await prisma.$transaction(async (tx) => {
                const remetenteSaldo = await tx.saldo.findUnique({ where: { usuarioId: userId } });
                if (!remetenteSaldo || remetenteSaldo.valor < valor) {
                    throw new Error("Saldo insuficiente");
                }

                await tx.saldo.update({
                    where: { usuarioId: userId },
                    data: { valor: { decrement: valor } }
                });

                await tx.saldo.upsert({
                    where: { usuarioId: destinatarioUser.id },
                    update: { valor: { increment: valor } },
                    create: { usuarioId: destinatarioUser.id, valor: valor }
                });

                const transacao = await tx.transacao.create({
                    data: {
                        valor,
                        tipo,
                        remetenteId: userId,
                        destinatarioId: destinatarioUser.id
                    }
                });

                return transacao;
            });
            return res.json(result);
        } catch (e: any) {
            return res.status(400).json({ message: e.message });
        }
    }

    extrato = async (req: Request, res: Response) => {
        const { userId } = req as any;
        const transacoes = await prisma.transacao.findMany({
            where: {
                OR: [
                    { remetenteId: userId },
                    { destinatarioId: userId }
                ]
            },
            orderBy: { data: 'desc' },
            include: {
                remetente: { select: { login: true } },
                destinatario: { select: { login: true } }
            }
        });
        return res.json(transacoes);
    }
}
