// src/controllers/escola.controller.ts
import { Request, Response } from "express"
import { EscolaRepository } from "../repositories/escola.repository.js"

export class EscolaController {    
    private repo: EscolaRepository

    constructor() {
        this.repo = new EscolaRepository()
    }

    // GET /escolas
    listar = async (req: Request, res: Response) => {
        const limit = Number(req.query.limit ?? 50)
        const offset = Number(req.query.offset ?? 0)
        const escolas = await this.repo.listar(limit, offset)
        res.json(escolas)
    }

    // GET /escolas/:id
    obter = async (req: Request, res: Response) => {
        const id = Number(req.params.id)
        const escola = await this.repo.buscarPorId(id)
        if (!escola) return res.status(404).json({
            erro: "Escola não encontrada"})
        res.json(escola)
    }

    // POST /escolas
    criar = async (req: Request, res: Response) => {
        const nova = await this.repo.criar(req.body)
        res.status(201).json(nova)
    }

    // PUT /escolas/:id
    atualizar = async (req: Request, res: Response) => {
        const id = Number(req.params.id)
        const att = await this.repo.atualizar(id, req.body)
        res.json(att)
    }
    
    // DELETE /escolas/:id
    deletar = async (req: Request, res: Response) => {
        const id = Number(req.params.id)
        await this.repo.deletar(id)
        res.status(204).send()
    }
    }