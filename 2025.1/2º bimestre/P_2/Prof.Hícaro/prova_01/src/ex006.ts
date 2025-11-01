const idadeMotorista: number = 18
function podeDirigir(idadeMotorista: number): boolean{
    return idadeMotorista >= 18
}
const dirigir = podeDirigir(idadeMotorista)
console.log(dirigir)