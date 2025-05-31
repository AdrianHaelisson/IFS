let idadeMotorista:number = 17
function podeDirigir(idadeMotorista:number){
    if (idadeMotorista >= 18){
        return true
    }else{
        return false
    }
}
let dirigir = podeDirigir(idadeMotorista)
console.log(dirigir)