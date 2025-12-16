import { Request, Response } from "express";
import {SaldoRepository} from "../repository/SaldoRepository.js";

export class SaldoController{
    saldoRepository: SaldoRepository;

    constructor(){
        this.saldoRepository = new SaldoRepository()
    }
    getByUsuarioId = async (req: Request, res: Response) => {
        const usuarioId = Number(req.params.usuarioId);

        const saldo = await this.saldoRepository.findByUsuarioId(usuarioId)

        return res.json(saldo)
    }
}