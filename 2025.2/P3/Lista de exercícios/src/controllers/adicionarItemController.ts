import { Request, Response } from "express";
import { carrinho } from "../utils/carrinho";

interface Item {
    id: number
    nome: string;
    preco: number;
    quantidade: number;
}

export const adicionarItemController = (req: Request, res: Response) => {
    let novoItem: Item = req.body;
    carrinho.push(novoItem)
    res.send({carrinho})
}
