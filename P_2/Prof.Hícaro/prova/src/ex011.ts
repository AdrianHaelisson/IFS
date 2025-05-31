let nomeAluno:string = 'Adrian'
let listaDeAlunos:string [] = ['Adrian', 'Paulo', 'João', 'Marcelo', 'Luiza']

function buscarAluno(nomeAluno:string, lista:string[]){
    for(let i = 0; i < lista.length; i++){
        const alunoAtual:string = listaDeAlunos[i]
        if(alunoAtual === nomeAluno){
            return `${nomeAluno} encontrado`
        }
    }
    return "Aluno não encontrado";
}
console.log(buscarAluno(nomeAluno, listaDeAlunos))