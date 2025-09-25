"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.matriculaAluno = matriculaAluno;
exports.consultaAlunoPorMatricula = consultaAlunoPorMatricula;
exports.avaliaSituacaoEstudante = avaliaSituacaoEstudante;
const turmaDB_1 = require("../data/turmaDB");
const math_1 = require("../utils/math");
function matriculaAluno(aluno) {
    turmaDB_1.turmaDB.push(aluno);
}
function consultaAlunoPorMatricula(matricula) {
    for (let i = 0; i < turmaDB_1.turmaDB.length; i++) {
        if (turmaDB_1.turmaDB[i].matricula === matricula) {
            return turmaDB_1.turmaDB[i];
        }
    }
    return { matricula: -1, nome: "Nao Encontrado", notas: [] };
}
function avaliaSituacaoEstudante(matricula) {
    let estudante = consultaAlunoPorMatricula(matricula);
    console.log(`Nome do estudante: ${estudante.nome}`);
    console.log(`Matrícula do estudante: ${estudante.matricula}`);
    let media = (0, math_1.calculaMedia)(estudante.notas);
    console.log(`Media do estudante: ${media}`);
    if (media > 6) {
        console.log(`Situação do estudante: aprovado`);
    }
    else {
        console.log(`Situação do estudante: reprovado`);
    }
}
