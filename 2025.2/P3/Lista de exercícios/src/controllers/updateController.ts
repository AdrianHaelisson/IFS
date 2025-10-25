import { Request, Response } from "express";
import { carrinho } from "../utils/carrinho";

interface Produto  { id: number; nome: string, preco: number, quantidade: number };

export const updateController = (req: Request, res: Response) => {
    const id = Number(req.params.id);
    let indiceEncontrado = -1;
    carrinho.forEach((element, indice) => {
        if(element.id == id){
            indiceEncontrado = indice;
        }
    });
    carrinho[indiceEncontrado] = req.body;
    res.json(carrinho)
}