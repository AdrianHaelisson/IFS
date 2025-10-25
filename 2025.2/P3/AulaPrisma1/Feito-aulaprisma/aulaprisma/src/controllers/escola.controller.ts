import { Request, Response } from "express";
import { EscolaRepository } from "../repositories/escola.repository.js";

export class EscolaController {

    private repo: EscolaRepository;

    constructor(){
        this.repo = new EscolaRepository();
    }

    listar = async (req: Request, res: Response) => {
    const limit = Number(req.query.limit ?? 50)
    const offset = Number(req.query.offset ?? 0)
    const escolas = await this.repo.listar(limit, offset)
    res.json(escolas)
  } 
}