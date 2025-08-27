"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Produto = void 0;
class Produto {
    constructor(nome, preco) {
        this.nome = nome;
        this.preco = preco;
    }
    desconto(porcentagem) {
        const valorDesconto = this.preco * (porcentagem / 100);
        this.preco -= valorDesconto;
    }
}
exports.Produto = Produto;
