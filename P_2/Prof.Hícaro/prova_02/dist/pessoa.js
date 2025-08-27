"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Pessoa = void 0;
class Pessoa {
    constructor(nome, idade) {
        this.nome = nome;
        this.idade = idade;
        console.log(this.apresentar());
    }
    apresentar() {
        return `Olá, meu nome é ${this.nome} e tenho ${this.idade} anos`;
    }
}
exports.Pessoa = Pessoa;
