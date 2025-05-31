let notasBolsa: number [] = [80, 70, 90, 100]
let notaValida:number = 0
function verificarBolsa(notasBolsa:number[]){
    for(let i = 0; i < notasBolsa.length; i++){
        if (notasBolsa[i] <= 70){
            return 'Não elegível'
        }
    }return "Elegível para bolsa"
}
console.log(verificarBolsa(notasBolsa))