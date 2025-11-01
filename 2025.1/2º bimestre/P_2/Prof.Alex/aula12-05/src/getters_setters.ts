export class ContaBancaria{
    private _titular: string;
    private _saldo: number;

    constructor (titular: string, saldo: number){
        this._titular = titular;
        this._saldo = saldo;
    }

// Getter do titular
    public get titular(){
        return this._titular;
    }

// Setter do titular
    public set titular(novoTitular){
     if (novoTitular.length > 0){
        this._titular = novoTitular;
     }else{
        console.log('Nome inválido.')
     }
    }
// Getter do saldo
    public get saldo (){
        return this._saldo;
    }

// Setter do saldo
    public set saldo(novoSaldo){
        if (novoSaldo >= 0){
            this._saldo = novoSaldo;
        }else{
            console.log('Saldo não pode ser negativo.');
        }
    }

// Método para depositar
    depositar(valor: number){
        if(valor > 0){
            this._saldo += valor;
        }else{
            console.log('Não é possível depositar um valor negativo.');
        }
    }

// Método para sacar
    sacar(valor: number){
        if(valor > 0 && valor <= this._saldo){
            this._saldo -= valor;
        }else{
            console.log('Saldo insuficiênte.');
        }
    }
}

// Exemplo de uso
const conta = new ContaBancaria ('João', 1000);

console.log(conta.titular);
console.log(conta.saldo);

conta.depositar(500);
console.log(conta.saldo);

conta.sacar(200);
console.log(conta.saldo);

conta.titular = 'Maria';
console.log(conta.titular);

// console.log(conta._saldo)