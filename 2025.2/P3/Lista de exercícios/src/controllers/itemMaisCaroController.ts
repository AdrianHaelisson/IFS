import { Request, Response } from "express";
import { carrinho } from "../utils/carrinho";

export const itemMaisCaro = (req: Request, res: Response) => {
    let indiceMaisCaro = -1;
    let precoAntigo = 0
    carrinho.forEach((element, indice) => {
        if(element.preco >= precoAntigo){
            indiceMaisCaro = indice;
        }
        res.json(carrinho[indiceMaisCaro])
    }
)}