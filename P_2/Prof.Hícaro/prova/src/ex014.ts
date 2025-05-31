let alunos: {nome: string, nota: number}[]= [
{nome: 'Adrian', nota: 75},
{nome: 'Alex', nota: 59},
{nome: 'Ana', nota: 92},
]

function gerarRelatorio(alunos: {nome: string, nota: number}[]){
    let somaDasNotas = 0;

    for(let i = 0; i < alunos.length; i++){
        let aluno = alunos[i];
        let status = aluno.nota >= 60 ? 'Aprovado' : 'Reprovado';
        console.log(`${aluno.nome}: Nota ${aluno.nota} - Status: ${status}`);
        somaDasNotas += aluno.nota;
    }
    let mediaTurma = somaDasNotas / alunos.length
    console.log(`Média da turma: ${mediaTurma.toFixed(2)}`)
}

gerarRelatorio(alunos)