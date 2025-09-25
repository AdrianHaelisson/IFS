class Animal {
    private _idade: number;
    private _nome: string;

    constructor(nome: string, idade: number){
        this._nome = nome;
        this._idade = idade;
    }
    public get nome (){
        return this._nome;
    }
    public set nome(novoNome){
        this._nome = novoNome;
    }
    public get idade (){
        return this._idade;
    }
    public set idade(novaIdade){
        this._idade = novaIdade;
    }

    fazerSom() {
        console.log('Som genérico de um animal');
    }
}

class Cachorro extends Animal {
    private _capacidadeDeGuarda: string;
    
    constructor(nome: string, idade: number, capacidade: string){
        super(nome, idade);
        this._capacidadeDeGuarda = capacidade
    }
    
    public get capacidadeDeGuarda(){
        return this._capacidadeDeGuarda
    }
    
    public set capacidadeDeGuarda(capacidade){
        this._capacidadeDeGuarda = capacidade;
    }

    fazerSom(): void {
        console.log('Au au!');
    }
}

class Gato extends Animal{
    private _comportamentoNoturno: string;
    
    constructor(nome: string, idade: number, comportamentoNoturno: string){
        super(nome, idade);
        this._comportamentoNoturno = comportamentoNoturno;
    }

    public get comportamentoNoturno (){
        return this._comportamentoNoturno
    }

    public set comportamentoNoturno(comportamentoNoturno){
        this._comportamentoNoturno = comportamentoNoturno;
    }

    fazerSom(): void {
        console.log('Miau!')
    }
}

const animal = new Animal('Humano', 30);
const cachorro = new Cachorro('Cachorro', 10, 'Alta');
const gato = new Gato('Gato', 7, 'Agitado');

console.log(animal.nome);
console.log(animal.idade);

console.log('================================')
console.log(cachorro.nome);
console.log(`${cachorro.idade} anos`);
console.log(`Capacidade de guarda: ${cachorro.capacidadeDeGuarda}`);

console.log('================================')
console.log(gato.nome);
console.log(`${gato.idade} anos`);
console.log(`Comportamento noturno: ${gato.comportamentoNoturno}`);

