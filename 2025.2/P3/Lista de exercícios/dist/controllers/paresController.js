"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.paresController = void 0;
const paresController = (req, res) => {
    const numero = Number(req.query.numero);
    const pares = [];
    for (let i = 0; i <= numero; i++) {
        if (i % 2 === 0) {
            pares.push(i);
        }
    }
    res.send({ pares });
};
exports.paresController = paresController;
