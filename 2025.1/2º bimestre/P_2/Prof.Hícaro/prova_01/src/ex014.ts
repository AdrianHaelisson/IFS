const alunos: {nome: string, nota: number}[]= [
{nome: 'Adrian', nota: 75},
{nome: 'Alex', nota: 59},
{nome: 'Ana', nota: 92},
]

function gerarRelatorio(alunos: {nome: string, nota: number}[]){
    let somaDasNotas: number = 0;
    
    if (alunos.length === 0) {
        return console.log("Nenhum aluno na lista para gerar a média.");
    }

    for(let i = 0; i < alunos.length; i++){
        const aluno = alunos[i];
        const status = aluno.nota >= 60 ? 'Aprovado' : 'Reprovado';
        console.log(`${aluno.nome}: Nota ${aluno.nota} - Status: ${status}`);
        somaDasNotas += aluno.nota;
    }
    const mediaTurma = somaDasNotas / alunos.length
    console.log(`Média da turma: ${mediaTurma.toFixed(2)}`)
}

gerarRelatorio(alunos)