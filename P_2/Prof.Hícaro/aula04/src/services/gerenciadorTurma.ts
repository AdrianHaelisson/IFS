import { turmaDB } from "../data/turmaDB";
import { student } from "../model/student";
import { calculaMedia } from "../utils/math";

export function matriculaAluno(aluno:student){
    turmaDB.push(aluno)
}
export function consultaAlunoPorMatricula(matricula:number): student {
    for(let i = 0; i< turmaDB.length; i++){
        if(turmaDB[i].matricula === matricula){
            return turmaDB[i]
        }
    }
    return {matricula:-1, nome:"Nao Encontrado", notas:[]}
}

export function avaliaSituacaoEstudante(matricula:number){
    let estudante = consultaAlunoPorMatricula(matricula)

    console.log(`Nome do estudante: ${estudante.nome}`)
    console.log(`Matrícula do estudante: ${estudante.matricula}`)

    let media = calculaMedia(estudante.notas)
    console.log(`Media do estudante: ${media}`)
    if(media>6){
        console.log(`Situação do estudante: aprovado`)
    }else{
        console.log(`Situação do estudante: reprovado`)
    }
}