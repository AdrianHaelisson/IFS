import { Request, Response } from "express";
import { SaldoRepository } from "../repository/SaldoRepository.js";

const saldoRepository = new SaldoRepository();

export class SaldoController {
    async getUsuarioSaldo(req: Request, res: Response) {
        try {
            const { usuarioid } = req.params;

            if (!usuarioid || isNaN(Number(usuarioid))) {
                return res.status(400).json({ error: "ID do usuário inválido" });
            }

            const saldo = await saldoRepository.findByUsuarioId(Number(usuarioid));

            if (!saldo) {
                return res.status(404).json({ error: "Saldo não encontrado para este usuário" });
            }

            res.json(saldo);
        } catch (error) {
            res.status(500).json({ error: "Erro ao buscar saldo" });
        }
    }
}
