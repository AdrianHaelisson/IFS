let arrayNotas: number[] = [8, 9, 10]

function calcularMedia(arrayNotas:number[]){
    let soma = 0
    for(let i = 0; i < arrayNotas.length; i++){
        soma += arrayNotas[i]
    }
    let media = soma / arrayNotas.length
    return media
}
console.log(`A média é:`, calcularMedia(arrayNotas))