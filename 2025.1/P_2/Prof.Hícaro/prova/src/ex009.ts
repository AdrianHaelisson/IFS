function calcularMedia(arrayNotas:number[]): number{
    let soma: number = 0
    
    if (arrayNotas.length === 0) {
        console.warn("Erro: O array de notas está vazio.");
        return 0;
    }

    for(let i: number = 0; i < arrayNotas.length; i++){
        soma += arrayNotas[i]
    }
    const media: number = soma / arrayNotas.length
    return media
}
const arrayNotas: number[] = []
console.log(`A média é:`, calcularMedia(arrayNotas))