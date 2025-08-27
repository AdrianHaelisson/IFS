"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const pessoa_1 = require("./pessoa");
const produto_1 = require("./produto");
const p1 = new pessoa_1.Pessoa("Adrian", 23);
p1.apresentar();
const prod1 = new produto_1.Produto("camisa", 100);
const precoFinal = prod1.desconto(0.3);
console.log(precoFinal);
