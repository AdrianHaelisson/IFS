import { Request, Response } from "express";
import { carrinho } from "../utils/carrinho";

export const itemMaisBarato = (req: Request, res: Response) => {
    let indiceMaisBarato = 0;
    let precoAntigo = carrinho[0].preco;
    carrinho.forEach((element, indice) => {
        if(element.preco < precoAntigo) {
            precoAntigo = element.preco
            indiceMaisBarato = indice;
        }
    })
    res.json(carrinho[indiceMaisBarato]);
}