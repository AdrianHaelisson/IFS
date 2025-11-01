"use strict";
// Definindo a Classe Aluno
Object.defineProperty(exports, "__esModule", { value: true });
exports.Aluno = void 0;
class Aluno {
    constructor(nome, matricula, curso, nota1, nota2) {
        this.nome = nome;
        this.matricula = matricula;
        this.curso = curso;
        this.nota1 = nota1;
        this.nota2 = nota2;
    }
    informacoesAluno() {
        return console.log(`O aluno ${this.nome} com matricula ${this.matricula}, do curso ${this.curso}, teve as seguintes notas: ${this.nota1} e ${this.nota2}`);
    }
    calcularMedia() {
        const media = (this.nota1 + this.nota2) / 2;
        return console.log(`A média do aluno ${this.nome} foi ${media}`);
    }
}
exports.Aluno = Aluno;
