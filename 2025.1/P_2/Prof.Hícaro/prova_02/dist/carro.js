"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Carro = void 0;
class Carro {
    constructor(marca, modelo) {
        this.marca = marca;
        this.modelo = modelo;
        this.velocidade = 0;
    }
    acelerar(valor) {
        if (valor > 0) {
            this.velocidade += valor;
        }
    }
    frear(valor) {
        if (valor > 0) {
            this.velocidade = Math.max(0, this.velocidade - valor);
        }
    }
    get velocidadeAtual() {
        return this.velocidade;
    }
}
exports.Carro = Carro;
