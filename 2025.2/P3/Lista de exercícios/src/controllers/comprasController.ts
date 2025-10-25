import { Request, Response } from "express";

interface Item {
    nome: string;
    valor: number;
}

export const comprasController = (request: Request, response: Response) => {
    const carrinho:  Item[] = request.body;
    let total = 0
    carrinho.forEach (i => {
        total += i.valor
    })
    response.send(total)

}
