import { estudante } from "../model/student";
import { turmaDB } from "../data/turmaDB";

export function matriculaAluno(aluno: estudante) {
  turmaDB.push(aluno);
}
