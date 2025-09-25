const notasBolsa: number [] = [80, 70, 90, 100]

function verificarBolsa(notasBolsa:number[]): string{
    if (notasBolsa.length === 0) {
        return 'Não elegível (sem notas)'; 
    }
    for(let i = 0; i < notasBolsa.length; i++){
        if (notasBolsa[i] <= 70){
            return 'Não elegível'
        }
    }return "Elegível para bolsa"
}
console.log(verificarBolsa(notasBolsa))