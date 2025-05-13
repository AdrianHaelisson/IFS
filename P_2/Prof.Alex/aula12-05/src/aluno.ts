// Definindo a Classe Aluno

export class Aluno {
  nome: string;
  matricula: string;
  curso: string;
  nota1: number;
  nota2: number;

  constructor(
    nome: string,
    matricula: string,
    curso: string,
    nota1: number,
    nota2: number
  ) {
    this.nome = nome;
    this.matricula = matricula;
    this.curso = curso;
    this.nota1 = nota1;
    this.nota2 = nota2;
  }
  informacoesAluno() {
    return console.log(
      `O aluno ${this.nome} com matricula ${this.matricula}, do curso ${this.curso}, teve as seguintes notas: ${this.nota1} e ${this.nota2}`
    );
  }
  calcularMedia() {
    const media: number = (this.nota1 + this.nota2) / 2;
    return console.log(`A média do aluno ${this.nome} foi ${media}`);
  }
}
