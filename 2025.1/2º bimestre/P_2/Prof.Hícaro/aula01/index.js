let prompt = require('prompt-sync')()

function CalcularMedia(){
    let nota1 = Number(prompt('Primeira nota ')) 
    let nota2 = Number(prompt('Segunda nota ')) 
    let nota3 = Number(prompt('Terceira nota ')) 

    let media = (nota1+nota2+nota3)/3

    console.log(`Sua média final é ${media}`)
    return media
}
function verificaSituacao(){

    let nome = prompt('Digite o nome do aluno: ')
    let media = CalcularMedia()

    if (media >= 7){
        console.log('Aluno Passou')
    }else{
        console.log('Aluno Reprovou')
    }
    
    return {nome, media}
}
//turma é um array de objetos de alunos
//um objeto do tipo aluno possui os campos nome e media
function melhorAluno(turma){
    var bestAluno = turma[0]
    for (let i = 0; i < turma.length; i++){
        
        if(turma[i].media > bestAluno.media){
            bestAluno = turma[i]
        }
    }
    return bestAluno
}

const turma = []

let aluno = verificaSituacao()
turma.push(aluno);
aluno = verificaSituacao()
turma.push(aluno);
console.log(turma)

let melhoraluno = melhorAluno(turma)
console.log(`O(a) melhor aluno(a) é ${melhoraluno.nome}`)