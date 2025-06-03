class ContaBancaria2 {
// Atributos privados (encapsulados)
    #senha: string;
    #saldo: number;
    constructor(saldoInicial: number, senha: string){
        this.#saldo = saldoInicial;
        this.#senha = senha;
    }
// Método público para depositar
    depositar(valor: number){
        if(valor > 0){
            this.#saldo += valor;
            console.log(`Depósito de R$ ${valor} realizado. Novo saldo: R$ ${this.#saldo}`);
        }else{
            console.log("Valor de depósito inválido!");
        }
    }
// Método público para sacar (com verificação de senha)
    sacar(valor: number, senha: string){
        if(senha !== this.#senha){
            console.log('Senha incorreta');
            return;
        }
        if (valor > 0 && valor <= this.#saldo){
            this.#saldo -= valor;
            console.log(`Saque de R$ ${valor} realizado. Novo saldo: R$ ${this.#saldo}`)
        }else{
            console.log("O valor de saque inválido ou saldo insuficiente!")
        }
    }

// Método público para consultar saldo (com verificação de senha)
    consultarSaldo(senha: string){
        if (senha !== this.#senha){
            return "Senha incorreta, acesso negado.";
        }
        return this.#saldo;
    }
}
// Uso da classe

const minhaConta = new ContaBancaria2(1000, "1234");

minhaConta.depositar(500);
minhaConta.sacar(200, "1234");
minhaConta.sacar(200, "0000");

console.log(minhaConta.consultarSaldo("1234"));
console.log(minhaConta.consultarSaldo("1111"));
