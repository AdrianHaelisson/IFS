"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ContaBancaria = void 0;
class ContaBancaria {
    constructor(titular) {
        this.titular = titular;
        this.saldo = 0;
    }
    depositar(valor) {
        if (valor > 0) {
            this.saldo += valor;
            console.log(`Deposito de R$${valor} realizado com sucesso.`);
        }
        else {
            console.log("O valor do depósito deve ser positivo.");
        }
    }
    sacar(valor) {
        if (valor > 0 && valor <= this.saldo) {
            this.saldo -= valor;
            console.log(`Saque de R$${valor} realizado com sucesso.`);
        }
        else if (valor > this.saldo) {
            console.log("Saldo insuficiente.");
        }
        else {
            console.log("O valor do saque deve ser positivo.");
        }
    }
    verSaldo() {
        console.log(`Saldo em conta: R$${this.saldo}`);
    }
}
exports.ContaBancaria = ContaBancaria;
