import { Request, Response } from "express";
import { carrinho } from "../utils/carrinho";

interface CartItem  { id: number; nome: string, preco: number, quantidade: number };

export const deleteController = (req: Request, res: Response) => {
    const id = Number(req.params.indice);
    let indiceEncontrado = -1;
    carrinho.forEach((element, indice) => {
        if(element.id === id){
            indiceEncontrado = indice;
        }
        if(indiceEncontrado >= 0){
            carrinho.splice(indiceEncontrado, 1)
        }
    });
    res.send({carrinho})
}

    //Como fiz

    //interface CartItem  { id: number; nome: string, preco: number, quantidade: number };

    // const idToRemove  = Number(req.params.id)
    // const items =  (cart as any).itens as CartItem[];
    // const index = items.findIndex((obj) => obj.id === idToRemove);
    // if (index >= 0) items.splice(index, 1);
    // res.send({ cart });
    //};


