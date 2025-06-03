// Classe ABSTRATA que define o modelo de uma conta bancária
class ContaBancaria{
    titular: string;
    saldo: number;
    constructor(titular: string, saldoInicial: number = 0){
        if (this.constructor === ContaBancaria){
            throw new Error ('Não pode instanciar uma classe abstrata diretamente!');
        }
        this.titular = titular;
        this.saldo = saldoInicial;
        }

    depositar(valor: number) {
        throw new Error ("Método 'depositar' deve ser implementado!")
    }
    sacar(valor: number){
        throw new Error ("Método 'sacar' deve ser implementado")
    }
    consultarSaldo(){
        return this.saldo;
    }
}

class ContaCorrente extends ContaBancaria{
    limiteChequeEspecial: number;
    constructor(titular: string, saldoInicial = 0, limiteChequeEspecial = 500){
        super (titular, saldoInicial);
        this.limiteChequeEspecial = limiteChequeEspecial;
    }
    depositar(valor: number): void {
        this.saldo += valor;
        console.log(`Depósito de R$ ${valor.toFixed(2)} realizado. ${this.consultarSaldo()}`);
    }
    sacar(valor: number){
        const saldoDisponivel = this.saldo + this.limiteChequeEspecial;
        if (valor <= saldoDisponivel){
            this.saldo -= valor;
            console.log(`Saque de R$ ${valor.toFixed(2)} realizado. ${this.consultarSaldo()}`);
        }else {
            console.log("Saldo insuficiente (incluindo cheque especial)!");
        }
    }
}

const contaJoao = new ContaCorrente('João Silva', 1000);
contaJoao.depositar(500);
contaJoao.sacar(2000);
contaJoao.sacar(1000);