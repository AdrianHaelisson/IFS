"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.verificarNumero = void 0;
// Verifica se um número é primo. Espera "numero" no corpo (POST)
const verificarNumero = (req, res) => {
    const raw = req.body?.numero;
    if (raw === undefined)
        return res.status(400).json({ erro: 'Parâmetro "numero" é obrigatório no corpo (JSON).' });
    const n = Number(raw);
    if (!Number.isFinite(n))
        return res.status(400).json({ erro: 'Parâmetro "numero" deve ser numérico.' });
    if (n < 2 || n % 1)
        return res.json({ primo: false, numero: n });
    for (let i = 2; i * i <= n; i++)
        if (n % i === 0)
            return res.json({ primo: false, numero: n });
    return res.json({ primo: true, numero: n });
};
exports.verificarNumero = verificarNumero;
