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
// carro1.acelerar(10);
// console.log(`A velocidade atual do carro é ${carro1.velocidadeAtual}km/h`);

import { Funcionario, Gerente } from "./funcionario";
const func1 = new Funcionario("João", 1800);
const ger1 = new Gerente("Vinicius", 1800, 600);
// console.log(func1.mostrarInfo());
// console.log(ger1.mostrarInfo());

import { Livro, Usuario, Biblioteca } from "./livro";
const livro1 = new Livro("Um estudo em vermelho", "Árthur Conan Doyle", 176);
const livro2 = new Livro("O Cão dos Baskervilles", "Árthur Conan Doyle", 192);
const livro3 = new Livro(
  "Harry Potter e a Pedra Filosofal",
  "J.K. Rowling",
  223
);

const biblioteca = new Biblioteca([livro1, livro2, livro3]);

const usuario1 = new Usuario("Adrian");

biblioteca.emprestarLivro("O Cão dos Baskervilles", usuario1);
//biblioteca.devolverLivro("O Cão dos Baskervilles", usuario1);
console.log(
  "Livros de Adrian:",
  usuario1.listarLivrosEmprestados().map((l) => l.titulo)
);
