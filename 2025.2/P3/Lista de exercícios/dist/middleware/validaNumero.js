"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validarDolarMiddleware = exports.validarNumeroMiddleware = void 0;
// Valida se existe um "numero" (em query para GET ou em body para POST)
// e se ele é um número válido. Em caso de sucesso, segue para o próximo handler.
const validarNumeroMiddleware = (req, res, next) => {
    const rawValue = req.method === "GET" ? req.query?.numero : req.body?.numero;
    if (rawValue === undefined) {
        return res.status(400).json({ erro: 'Parâmetro "numero" é obrigatório.' });
    }
    const numero = Number(rawValue);
    if (!Number.isFinite(numero)) {
        return res.status(400).json({ erro: 'Parâmetro "numero" deve ser numérico.' });
    }
    // Disponibiliza o número já convertido para próximos middlewares/handlers
    res.locals.numero = numero;
    next();
};
exports.validarNumeroMiddleware = validarNumeroMiddleware;
// Valida um parâmetro de query chamado "dolar" (usado na conversão)
const validarDolarMiddleware = (req, res, next) => {
    const raw = req.query?.dolar;
    if (raw === undefined) {
        return res.status(400).json({ erro: 'Parâmetro "dolar" é obrigatório.' });
    }
    const dolar = Number(raw);
    if (!Number.isFinite(dolar)) {
        return res.status(400).json({ erro: 'Parâmetro "dolar" deve ser numérico.' });
    }
    res.locals.dolar = dolar;
    next();
};
exports.validarDolarMiddleware = validarDolarMiddleware;
