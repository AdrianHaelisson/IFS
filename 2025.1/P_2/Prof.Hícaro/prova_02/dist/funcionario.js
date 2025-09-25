"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Gerente = exports.Funcionario = void 0;
class Funcionario {
    constructor(nome, salario) {
        this.nome = nome;
        this.salario = salario;
    }
    mostrarInfo() {
        return `Nome: ${this.nome}, Salário: R$${this.salario}`;
    }
}
exports.Funcionario = Funcionario;
class Gerente extends Funcionario {
    constructor(nome, salario, bonus) {
        super(nome, salario);
        this.bonus = bonus;
    }
    mostrarInfo() {
        return `${super.mostrarInfo()}, Bônus R$${this.bonus}`;
    }
}
exports.Gerente = Gerente;
