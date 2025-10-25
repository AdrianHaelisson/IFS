"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const verificarNumero_1 = require("../controllers/verificarNumero");
const conversaoController_1 = require("../controllers/conversaoController");
const dobradoController_1 = require("../controllers/dobradoController");
const validaNumero_1 = require("../middleware/validaNumero");
const validaNegativos_1 = require("../middleware/validaNegativos");
const paresController_1 = require("../controllers/paresController");
const route = (0, express_1.Router)();
route.get("/nome", (req, res) => {
    res.send("Meu nome é Adrian");
});
// Dobra um número com validação de entrada
route.get("/dobrado", validaNumero_1.validarNumeroMiddleware, dobradoController_1.controladorDobrado);
// Variação com validação de negativos
route.get("/dobrado2", validaNumero_1.validarNumeroMiddleware, validaNegativos_1.negativoMiddleware, dobradoController_1.controladorDobrado);
// Converte dólar para real (dolar via query param)
route.get("/conversao", validaNumero_1.validarDolarMiddleware, conversaoController_1.controller);
// Verifica se é primo (via corpo JSON { numero })
route.post("/primo", verificarNumero_1.verificarNumero);
route.get("/pares", paresController_1.paresController);
exports.default = route;
