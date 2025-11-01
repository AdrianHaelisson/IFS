const n: number = 7

function imprimirTabuada(n:number){
    for(let i: number = 1; i <= 10; i++){
        const multiplicacao: number = i * n
        console.log(`A multiplicação de ${i} x ${n} é igual à ${multiplicacao}`)
    }
}
imprimirTabuada(n)