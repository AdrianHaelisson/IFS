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
      const busca = String(req.query.busca)
      const escolas = await this.repo.listar(limit, offset, busca)
      res.json(escolas)
    } 

    porId = async (req: Request, res: Response) => {
      const id = Number(req.params.id)
      const escolas = await this.repo.buscarPorId(id)
      res.json(escolas)
    } 

    inserir = async (req: Request, res: Response) => {
      const escolas = await this.repo.criar(req.body)
      res.json(escolas)
    } 

    atualizar = async (req: Request, res: Response) => {
      const id = Number(req.params.id)
      const escolas = await this.repo.atualizar(id,req.body)
      res.json(escolas)
    } 

    deletar = async (req: Request, res: Response) => {
      await this.repo.deletar(Number(req.params.id))
      res.status(200).send("Escola deletada!");
    } 
}