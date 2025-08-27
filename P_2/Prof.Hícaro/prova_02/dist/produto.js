"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Produto = void 0;
class Produto {
    constructor(nome, preco) {
        this.nome = nome;
        this.preco = preco;
    }
    desconto(porcentagem) {
        const desconto = this.preco - this.preco * porcentagem;
        return desconto;
    }
}
exports.Produto = Produto;
