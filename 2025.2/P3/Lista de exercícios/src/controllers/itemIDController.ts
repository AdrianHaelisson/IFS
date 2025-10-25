import { Request, Response } from "express";
import { carrinho } from "../utils/carrinho";

export const itemCarrinhoID = (req: Request, res: Response) => {
    const id = Number(req.params.id)
    let indiceEncontrado = -1;
    carrinho.forEach((item, index) => {
        if(item.id === id){
            indiceEncontrado = index;
        }
    })
    res.json(carrinho[indiceEncontrado])
}