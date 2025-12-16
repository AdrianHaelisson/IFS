import { Request, Response } from "express";
import { ManifestacaoRepository } from "../repositories/manifestacao.repository.js";
import { IManifestacao } from "../entities/IManifestacao.js";

export class ManifestacaoController {

    private repo: ManifestacaoRepository;

    constructor(){
        this.repo = new ManifestacaoRepository();
    }

    listar = async (req: Request, res: Response) => {
      const limit = Number(req.query.limit ?? 50)
      const offset = Number(req.query.offset ?? 0)
      const manifestacoes = await this.repo.listar(limit, offset)
      res.json(manifestacoes)
    }

    cadastrar = async (req: Request, res: Response) => {
      const manifestacao:Partial<IManifestacao> = req.body
      const manifestacoes = await this.repo.cadastrar(manifestacao)
      res.json(manifestacoes)
    }

    deletar = async (req: Request, res: Response) => {
      const id = Number(req.params.id)
      const manifestacoes = await this.repo.deletar(id)
      res.json(manifestacoes)
    }
}