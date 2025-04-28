"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = prompt;
var prompt = require('prompt-sync')();
function CalcularMedia() {
    var nota1 = Number(prompt('Primeira nota '));
    var nota2 = Number(prompt('Segunda nota '));
    var nota3 = Number(prompt('Terceira nota '));
    var media = (nota1 + nota2 + nota3) / 3;
    console.log("Sua m\u00E9dia final \u00E9 ".concat(media));
    return media;
}
function verificaSituacao() {
    var nome = prompt('Digite o nome do aluno: ');
    var media = CalcularMedia();
    if (media >= 7) {
        console.log('Aluno Passou');
    }
    else {
        console.log('Aluno Reprovou');
    }
    return { nome: nome, media: media };
}
//turma é um array de objetos de alunos
//um objeto do tipo aluno possui os campos nome e media
function melhorAluno(turma) {
    var bestAluno = turma[0];
    for (var i = 0; i < turma.length; i++) {
        if (turma[i].media > bestAluno.media) {
            bestAluno = turma[i];
        }
    }
    return bestAluno;
}
var turma = [];
var aluno = verificaSituacao();
turma.push(aluno);
aluno = verificaSituacao();
turma.push(aluno);
console.log(turma);
var melhoraluno = melhorAluno(turma);
console.log("O(a) melhor aluno(a) \u00E9 ".concat(melhoraluno.nome));
