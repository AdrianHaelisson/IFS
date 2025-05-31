const nomeAluno:string = 'Adrian'
const listaDeAlunos:string [] = ['Adrian', 'Paulo', 'João', 'Marcelo', 'Luiza']

function buscarAluno(nomeAluno:string, listaDeAlunos: string[]): string{
    for(let i: number = 0; i < listaDeAlunos.length; i++){
        const alunoAtual: string = listaDeAlunos[i]
        if(alunoAtual === nomeAluno){
            return `${nomeAluno} encontrado`
        }
    }
    return "Aluno não encontrado";
}
console.log(buscarAluno(nomeAluno, listaDeAlunos))