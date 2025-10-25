import { Request, Response } from "express";

export const controller = (request: Request, response: Response) => {
    const fromLocals = (response.locals as any)?.dolar;
    const dolar = fromLocals !== undefined ? Number(fromLocals) : Number((request.query as any)?.dolar);

    if (!Number.isFinite(dolar)) {
        return response.status(400).json({ erro: 'Parâmetro "dolar" deve ser numérico.' });
    }

    response.send(dolar * 5.3);
}
