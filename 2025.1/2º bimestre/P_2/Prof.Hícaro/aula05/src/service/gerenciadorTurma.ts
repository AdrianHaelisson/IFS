import { estudante } from "../model/student";
import { turmaDB } from "../data/turmaDB";
import { Result } from "../utils/results";

export function matriculaAluno(aluno: estudante) {
  turmaDB.push(aluno);
}

export function excluirAluno(matricula: number): estudante {
  for (let i = 0; i < turmaDB.length; i++) {
    if (turmaDB[i].matricula === matricula) {
      const alunoRemovido = turmaDB[i];
      turmaDB.splice(i, 1);
      return alunoRemovido;
    }
  }
  return { matricula: -1, nome: "Not found", notas: [] };
}

export function calcularMedia(notas: number[]): number {
  let soma = 0;
  for (let i = 0; i < notas.length; i++) {
    soma += notas[i];
  }
  return soma / notas.length;
}

export function encontrarAlunoPorMatricula(
  matricula: number
): Result<estudante> {
  for (let i = 0; i < turmaDB.length; i++) {
    if (turmaDB[i].matricula === matricula) {
      return {sucesso:true, dado:turmaDB[i]};
    }
  }
  return {sucesso:false, erro:'Aluno não encontrado'};
}
export function consultaSituacaoAluno(matricula: number) {
  let aluno = encontrarAlunoPorMatricula(matricula);
  if (aluno === null) {
    console.log("Aluno não encontrado");
    return;
  }
  let media = calcularMedia(aluno.notas);
  if (media >= 6) {
    console.log(
      `A média do aluno ${aluno.nome} foi ${media.toFixed(
        2
      )}, o aluno está aprovado`
    );
  } else {
    console.log(
      `A média do aluno ${aluno.nome} foi ${media.toFixed(
        2
      )}, o aluno está reprovado`
    );
  }
}
