"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.matriculaAluno = matriculaAluno;
exports.excluirAluno = excluirAluno;
exports.encontrarAlunoPorMatricula = encontrarAlunoPorMatricula;
const turmaDB_1 = require("../data/turmaDB");
function matriculaAluno(aluno) {
    turmaDB_1.turmaDB.push(aluno);
}
function excluirAluno(matricula) {
    for (let i = 0; i < turmaDB_1.turmaDB.length; i++) {
        if (turmaDB_1.turmaDB[i].matricula === matricula) {
            turmaDB_1.turmaDB.splice(i, 1);
            return turmaDB_1.turmaDB[i];
        }
    }
}
function encontrarAlunoPorMatricula(matricula) {
    for (let i = 0; i < turmaDB_1.turmaDB.length; i++) {
        if (turmaDB_1.turmaDB[i].matricula === matricula) {
            return turmaDB_1.turmaDB[i];
        }
    }
    return { matricula: -1, nome: "Not found", notas: [] };
}
