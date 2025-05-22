"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const gerenciadorTurma_1 = require("./service/gerenciadorTurma");
let pessoa = { matricula: 1234, nome: "Vitor", notas: [9, 10, 4] };
(0, gerenciadorTurma_1.matriculaAluno)(pessoa);
(0, gerenciadorTurma_1.consultaSituacaoAluno)(1234);
