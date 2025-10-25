"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.controladorDobrado = void 0;
const controladorDobrado = (req, res) => {
    const numero = Number(req.query.numero);
    res.send(numero * 2);
};
exports.controladorDobrado = controladorDobrado;
