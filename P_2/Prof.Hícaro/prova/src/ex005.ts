const notas:number[] = [75, 80, 55, 60, 45]
let i: number = 0

while(i < notas.length){
    let nota: number = notas[i];
    if (nota >= 60){
        console.log(`A nota ${i+1} (${nota}) é: Aprovado`)
    }else{
        console.log(`A nota ${i+1} (${nota}) é: Reprovado`)
    }
    i++
}