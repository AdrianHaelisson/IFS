import { turmaDB } from "./data/turmaDB";
import { estudante } from "./model/student";
import { matriculaAluno } from "./service/gerenciadorTurma";

let pessoa: estudante = { matricula: 1234, nome: "Vitor", notas: [2, 3, 4] };

console.log(turmaDB);
matriculaAluno(pessoa);
console.log(turmaDB);
