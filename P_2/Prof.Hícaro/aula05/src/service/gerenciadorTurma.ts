import { estudante } from "../model/student";
import { turmaDB } from "../data/turmaDB";

export function matriculaAluno(aluno: estudante) {
  turmaDB.push(aluno);
}

export function excluirAluno(matricula: number): estudante {
  for (let i = 0; i < turmaDB.length; i++) {
    if (turmaDB[i].matricula === matricula) {
      turmaDB.splice(i, 1);
      return turmaDB[i];
    }
  }
  return { matricula: -1, nome: "Not found", notas: [] };
}

export function encontrarAlunoPorMatricula(matricula: number): estudante {
  for (let i = 0; i < turmaDB.length; i++) {
    if (turmaDB[i].matricula === matricula) {
      return turmaDB[i];
    }
  }
  return { matricula: -1, nome: "Not found", notas: [] };
}

export function consultaSituacaoAluno(matricula: number) {
  let aluno = encontrarAlunoPorMatricula(matricula);

  let media = calculaMedia(aluno.media);
  if (media >= 6) {
    console.log("Aluno aprovado!");
  } else {
    console.log("Aluno reprovado!");
  }
}
