"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.matriculaAluno = matriculaAluno;
exports.excluirAluno = excluirAluno;
exports.calcularMedia = calcularMedia;
exports.encontrarAlunoPorMatricula = encontrarAlunoPorMatricula;
exports.consultaSituacaoAluno = consultaSituacaoAluno;
const turmaDB_1 = require("../data/turmaDB");
function matriculaAluno(aluno) {
    turmaDB_1.turmaDB.push(aluno);
}
function excluirAluno(matricula) {
    for (let i = 0; i < turmaDB_1.turmaDB.length; i++) {
        if (turmaDB_1.turmaDB[i].matricula === matricula) {
            const alunoRemovido = turmaDB_1.turmaDB[i];
            turmaDB_1.turmaDB.splice(i, 1);
            return alunoRemovido;
        }
    }
    return { matricula: -1, nome: "Not found", notas: [] };
}
function calcularMedia(notas) {
    let soma = 0;
    for (let i = 0; i < notas.length; i++) {
        soma += notas[i];
    }
    return soma / notas.length;
}
function encontrarAlunoPorMatricula(matricula) {
    for (let i = 0; i < turmaDB_1.turmaDB.length; i++) {
        if (turmaDB_1.turmaDB[i].matricula === matricula) {
            return turmaDB_1.turmaDB[i];
        }
    }
    return null;
}
function consultaSituacaoAluno(matricula) {
    let aluno = encontrarAlunoPorMatricula(matricula);
    if (aluno === null) {
        console.log("Aluno não encontrado");
        return;
    }
    let media = calcularMedia(aluno.notas);
    if (media >= 6) {
        console.log(`A média do aluno ${aluno.nome} foi ${media.toFixed(2)}, o aluno está aprovado`);
    }
    else {
        console.log(`A média do aluno ${aluno.nome} foi ${media}, o aluno está reprovado`);
    }
}
