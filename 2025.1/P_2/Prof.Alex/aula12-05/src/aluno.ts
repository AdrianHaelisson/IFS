// ATIVIDADE:
// Criar uma classe de cursos, com métodos e funções específicas

import { Curso } from "./curso";

// Definindo a Classe Aluno

export class Aluno {
  nome: string;
  matricula: string;
  curso: Curso;
  nota1: number;
  nota2: number;

  constructor(
    nome: string,
    matricula: string,
    curso: Curso,
    nota1: number,
    nota2: number
  ) {
    this.nome = nome;
    this.matricula = matricula;
    this.curso = curso;
    this.nota1 = nota1;
    this.nota2 = nota2;

    this.curso.adicionarAluno(this)
  }
  informacoesAluno() {
    return console.log(
      `O aluno ${this.nome} com matricula ${this.matricula}, do curso ${this.curso.nome}, teve as seguintes notas: ${this.nota1} e ${this.nota2}`
    );
  }
  calcularMedia() {
    const media = (this.nota1 + this.nota2) / 2;
    return media
  }
  
  verificarAprovacao() {
      const media = this.calcularMedia();
      return media >= 6 ? "Aprovado" : "Reprovado";
    }

  mostrarDados() {
      console.log("Nome:", this.nome);
      console.log("Matrícula:", this.matricula);
      console.log("Curso:", this.curso.nome);
      console.log("Média:", this.calcularMedia());
      console.log("Situação:", this.verificarAprovacao());
      console.log("-----------------------------");
    }
}
