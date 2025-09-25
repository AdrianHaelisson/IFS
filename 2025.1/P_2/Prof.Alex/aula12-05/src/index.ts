import { Aluno } from "./aluno";
import { Curso } from "./curso";

const cursoInf = new Curso('Informática', 'INF001', 'Alex Paixão', 2000);
const cursoAdm = new Curso ('Administração', 'ADM001', 'Everaldo', 500)

const aluno1 = new Aluno("João Silva", "2023001", cursoInf, 7.5, 8.0);
const aluno2 = new Aluno("Maria Oliveira", "2023002", cursoAdm, 5.0, 6.0);
const aluno3 = new Aluno("Adrian", "123", cursoInf, 8, 10);

cursoInf.listarAlunos();
aluno1.informacoesAluno();
aluno1.mostrarDados()
cursoInf.removerAluno('2023001')
cursoInf.listarAlunos()