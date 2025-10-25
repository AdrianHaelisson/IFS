import { Request, Response } from "express";

export const controladorDobrado = (req: Request, res: Response) =>{

    const numero = Number(req.query.numero);
    res.send(numero * 2)
}