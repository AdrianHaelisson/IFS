import { Request, Response, NextFunction } from "express";
export const negativosAtualizar = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { qty } = req.body;
  if (qty < 0) {
    res.status(400).json({ mensagem: "Foi informado uma quantidade negativa" });
  } else {
    next();
  }
};
