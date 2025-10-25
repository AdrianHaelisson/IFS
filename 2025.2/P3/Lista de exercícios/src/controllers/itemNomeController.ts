import { Request, Response } from "express";
import { carrinho } from "../utils/carrinho";
import { profileEnd } from "console";

export const itemCarrinhoNome = (req: Request, res: Response) => {
    const nome = "agua"
    let indiceEncontrado = -1;
    const produto = carrinho.find(item => item.nome === nome)
    res.json(produto)
}