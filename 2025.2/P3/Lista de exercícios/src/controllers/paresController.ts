import { Request, Response } from "express";

export const paresController = (req: Request, res: Response) => {

    const numero = Number(req.query.numero);
    const pares: number[] = [];

    for (let i = 0; i <= numero; i++) {
        if (i % 2 === 0) {
            pares.push(i);
        }
    }
    res.send({ pares })
}