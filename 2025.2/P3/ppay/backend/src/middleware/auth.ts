import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";

export const authMiddleware = (req: Request, res: Response, next: NextFunction) => {
    const authHeader = req.headers.authorization;

    if (!authHeader) {
        return res.status(401).json({ error: "Token não fornecido" });
    }

    const [, token] = authHeader.split(" ");

    if (!token) {
        return res.status(401).json({ error: "Token malformatado" });
    }

    try {
        jwt.verify(token, process.env.JWT_SECRET || "segredo");
        next();
    } catch (err) {
        return res.status(401).json({ error: "Token inválido" });
    }
};
