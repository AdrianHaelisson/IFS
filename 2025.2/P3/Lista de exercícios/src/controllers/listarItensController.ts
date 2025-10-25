import { Request, Response } from "express";
import { carrinho } from "../utils/carrinho";

export const listaItens = (req: Request, res: Response) => {
    res.json(carrinho)
}