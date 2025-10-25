import { Request, Response, NextFunction } from "express";

// Impede números negativos para o campo "numero" (query/body)
export const negativoMiddleware = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const fromLocals = (res.locals as any)?.numero;
  const raw = fromLocals !== undefined
    ? fromLocals
    : req.method === "GET"
      ? (req.query as any)?.numero
      : (req.body as any)?.numero;

  const numero = Number(raw);
  if (!Number.isFinite(numero)) {
    return res.status(400).json({ erro: 'Parâmetro "numero" deve ser numérico.' });
  }

  if (numero < 0) {
    return res.status(400).json({ erro: 'O número não pode ser negativo.' });
  }

  next();
};
