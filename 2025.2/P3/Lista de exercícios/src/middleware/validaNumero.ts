import { Request, Response, NextFunction } from "express";

// Valida se existe um "numero" (em query para GET ou em body para POST)
// e se ele é um número válido. Em caso de sucesso, segue para o próximo handler.
export const validarNumeroMiddleware = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const rawValue = req.method === "GET" ? (req.query as any)?.numero : (req.body as any)?.numero;

  if (rawValue === undefined) {
    return res.status(400).json({ erro: 'Parâmetro "numero" é obrigatório.' });
  }

  const numero = Number(rawValue);
  if (!Number.isFinite(numero)) {
    return res.status(400).json({ erro: 'Parâmetro "numero" deve ser numérico.' });
  }

  // Disponibiliza o número já convertido para próximos middlewares/handlers
  (res.locals as any).numero = numero;
  next();
};

// Valida um parâmetro de query chamado "dolar" (usado na conversão)
export const validarDolarMiddleware = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const raw = (req.query as any)?.dolar;
  if (raw === undefined) {
    return res.status(400).json({ erro: 'Parâmetro "dolar" é obrigatório.' });
  }

  const dolar = Number(raw);
  if (!Number.isFinite(dolar)) {
    return res.status(400).json({ erro: 'Parâmetro "dolar" deve ser numérico.' });
  }

  (res.locals as any).dolar = dolar;
  next();
};
