import { estudante } from "../model/student";
import { turmaDB } from "../data/turmaDB";

function matriculaAluno(aluno: estudante) {
  turmaDB.push(aluno);
}
