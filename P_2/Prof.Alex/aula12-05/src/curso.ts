import { Aluno } from "./aluno"

export class Curso{
    nome: string
    codigo: string
    professor: string
    cargaHoraria: number
    alunos: Aluno[] = []
    
    constructor(
    nome: string,
    codigo: string,
    professor: string,
    cargaHoraria: number
    )
    {
    this.nome = nome,
    this.codigo = codigo,
    this.professor = professor,
    this.cargaHoraria = cargaHoraria
    }
    
    adicionarAluno(aluno: Aluno){
        this.alunos.push(aluno)
    }
    
    removerAluno(matricula: string){
        const index = this.alunos.findIndex((aluno) => aluno.matricula === matricula);

        if (index !== -1){
            const removido = this.alunos.splice(index, 1)[0];
            console.log(`Aluno ${removido.nome} removido do curso ${this.nome}.`);
        }else{
            console.log(`Aluno com matrícula ${matricula} não encontrado no cursos ${this.nome}.`);
        }
    }
    
    listarAlunos(){
        console.log(`Alunos do curso ${this.nome}: `);
        this.alunos.forEach((aluno) => {
            console.log(`- ${aluno.nome} (Matricula: ${aluno.matricula})`)
        })
    }









}