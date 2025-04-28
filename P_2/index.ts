const prompt = require('prompt-sync')();
export default prompt;
function CalcularMedia(){
    const nota1 = Number(prompt("Primeira nota ")) 
    const nota2 = Number(prompt('Segunda nota ')) 
    const nota3 = Number(prompt('Terceira nota ')) 

    const media = (nota1+nota2+nota3)/3

    console.log(`Sua média final é ${media}`)
    return media
}
function verificaSituacao(){

    const nome = prompt('Digite o nome do aluno: ')
    const media = CalcularMedia()

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
    let bestAluno = turma[0]
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

const melhoraluno = melhorAluno(turma)
console.log(`O(a) melhor aluno(a) é ${melhoraluno.nome}`)