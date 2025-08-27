import { Pessoa } from "./pessoa";
const p1 = new Pessoa("Adrian", 23);
//console.log(p1.apresentar());

import { Produto } from "./produto";
const prod1 = new Produto("camisa", 100);
//prod1.desconto(10);
//console.log(prod1.preco);

import { ContaBancaria } from "./contaBancaria";
const conta1 = new ContaBancaria("Adrian");
// conta1.depositar(100);
// conta1.sacar(100);
// conta1.verSaldo();

import { Carro } from "./carro";
const carro1 = new Carro("BYD", "Dolphin");
carro1.acelerar(10);
console.log(`A velocidade atual do carro é ${carro1.velocidadeAtual}km/h`);
