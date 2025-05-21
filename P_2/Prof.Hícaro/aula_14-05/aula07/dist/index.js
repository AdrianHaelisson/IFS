"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const gerenciadorTurma_1 = require("./service/gerenciadorTurma");
let pessoa = { matricula: 1234, nome: "Vitor", notas: [2, 3, 4] };
(0, gerenciadorTurma_1.matriculaAluno)(pessoa);
let pesquisa = (0, gerenciadorTurma_1.encontrarAlunoPorMatricula)(1234);
console.log(pesquisa);
let alunoExcluido = (0, gerenciadorTurma_1.excluirAluno)(1234);
console.log(alunoExcluido);
