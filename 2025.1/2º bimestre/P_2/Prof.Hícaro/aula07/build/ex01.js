"use strict";
class Animal {
    constructor(nome, idade) {
        this._nome = nome;
        this._idade = idade;
    }
    get nome() {
        return this._nome;
    }
    set nome(novoNome) {
        this._nome = novoNome;
    }
    get idade() {
        return this._idade;
    }
    set idade(novaIdade) {
        this._idade = novaIdade;
    }
    fazerSom() {
        console.log("Som genérico de um animal");
    }
}
class Cachorro extends Animal {
    constructor(nome, idade, capacidade) {
        super(nome, idade);
        this._capacidadeDeGuarda = capacidade;
    }
    get capacidadeDeGuarda() {
        return this._capacidadeDeGuarda;
    }
    set capacidadeDeGuarda(capacidade) {
        this._capacidadeDeGuarda = capacidade;
    }
    fazerSom() {
        console.log("Au au!");
    }
}
class Gato extends Animal {
    constructor(nome, idade, comportamentoNoturno) {
        super(nome, idade);
        this._comportamentoNoturno = comportamentoNoturno;
    }
    get comportamentoNoturno() {
        return this._comportamentoNoturno;
    }
    set comportamentoNoturno(comportamentoNoturno) {
        this._comportamentoNoturno = comportamentoNoturno;
    }
    fazerSom() {
        console.log("Miau!");
    }
}
const animal = new Animal("Humano", 30);
const cachorro = new Cachorro("Cachorro", 10, "Alta");
const gato = new Gato("Gato", 7, "Agitado");
console.log(animal.nome);
console.log(animal.idade);
console.log("================================");
console.log(cachorro.nome);
console.log(`${cachorro.idade} anos`);
console.log(`Capacidade de guarda: ${cachorro.capacidadeDeGuarda}`);
console.log("================================");
console.log(gato.nome);
console.log(`${gato.idade} anos`);
console.log(`Comportamento noturno: ${gato.comportamentoNoturno}`);
