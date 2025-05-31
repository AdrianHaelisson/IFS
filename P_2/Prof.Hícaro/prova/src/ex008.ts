let n:number = 7

function imprimirTabuada(n:number){
    for(let i = 1; i <= 10; i++){
        let multiplicacao = i * n
        console.log(`A multiplicação de ${i} x ${n} é igual à ${multiplicacao}`)
    }
}
imprimirTabuada(n)