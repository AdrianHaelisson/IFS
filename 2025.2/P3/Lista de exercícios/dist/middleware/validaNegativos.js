"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.negativoMiddleware = void 0;
// Impede números negativos para o campo "numero" (query/body)
const negativoMiddleware = (req, res, next) => {
    const fromLocals = res.locals?.numero;
    const raw = fromLocals !== undefined
        ? fromLocals
        : req.method === "GET"
            ? req.query?.numero
            : req.body?.numero;
    const numero = Number(raw);
    if (!Number.isFinite(numero)) {
        return res.status(400).json({ erro: 'Parâmetro "numero" deve ser numérico.' });
    }
    if (numero < 0) {
        return res.status(400).json({ erro: 'O número não pode ser negativo.' });
    }
    next();
};
exports.negativoMiddleware = negativoMiddleware;
