export function calculaMedia(numeros:number[]):number{
    let somatorio = 0

    for(let i =0; i<numeros.length;i++){
        somatorio+= numeros[i]
    }

    let media = somatorio/numeros.length
    return media
}