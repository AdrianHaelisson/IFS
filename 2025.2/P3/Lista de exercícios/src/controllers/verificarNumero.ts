import { Request, Response } from "express";

// Verifica se um número é primo. Espera "numero" no corpo (POST)
export const verificarNumero = (req: Request, res: Response) => {
  const raw = (req.body as any)?.numero;
  if (raw === undefined)
    return res.status(400).json({ erro: 'Parâmetro "numero" é obrigatório no corpo (JSON).' });

  const numero = Number(raw);
  if (!Number.isFinite(numero))
    return res.status(400).json({ erro: 'Parâmetro "numero" deve ser numérico.' });

  if (numero < 2 || numero % 1)
    return res.json({ primo: false, numero: numero });

  for (let i = 2; i * i <= numero; i++)
    if (numero % i === 0) return res.json({ primo: false, numero: numero });

  return res.json({ primo: true, numero: numero });
};

