import { turmaDB } from "./data/turmaDB";
import { estudante } from "./model/student";
import {
  consultaSituacaoAluno,
  encontrarAlunoPorMatricula,
  excluirAluno,
  matriculaAluno,
} from "./service/gerenciadorTurma";

let pessoa: estudante = { matricula: 1234, nome: "Vitor", notas: [9, 10, 4] };

matriculaAluno(pessoa);
consultaSituacaoAluno(1234);
