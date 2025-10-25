"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.controller = void 0;
const controller = (request, response) => {
    const fromLocals = response.locals?.dolar;
    const dolar = fromLocals !== undefined ? Number(fromLocals) : Number(request.query?.dolar);
    if (!Number.isFinite(dolar)) {
        return response.status(400).json({ erro: 'Parâmetro "dolar" deve ser numérico.' });
    }
    response.send(dolar * 5.3);
};
exports.controller = controller;
