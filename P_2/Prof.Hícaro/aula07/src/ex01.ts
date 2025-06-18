class Animal {
  private _nome: string;
  private _idade: number;

  constructor(nome: string, idade: number) {
    this._nome = nome;
    this._idade = idade;
  }
  public get nome() {
    return this._nome;
  }
  public set nome(novoNome) {
    this._nome = novoNome;
  }
  public get idade() {
    return this._idade;
  }
  public set idade(novaIdade) {
    this._idade = novaIdade;
  }

  fazerSom() {
    console.log("Som genérico de um animal");
  }
  apresentar() {
    console.log(`Este animal se chama ${this._nome} e tem ${this._idade} anos`);
  }
}

class Cachorro extends Animal {
  private _raca: string;
  private _peso: number;
  private _cor: string;

  constructor(
    nome: string,
    idade: number,
    raca: string,
    peso: number,
    cor: string
  ) {
    super(nome, idade);
    this._raca = raca;
    this._peso = peso;
    this._cor = cor;
  }

  public get raca() {
    return this._raca;
  }
  public set raca(raca) {
    this._raca = raca;
  }

  public get peso() {
    return this._peso;
  }
  public set peso(peso) {
    this._peso = peso;
  }

  public get cor() {
    return this._cor;
  }
  public set cor(cor) {
    this._cor = cor;
  }

  fazerSom(): void {
    console.log("Au au!");
  }
  apresentar(): void {
    console.log(
      `O cachorro se chama ${this.nome}, tem ${this.idade} anos, da raça ${this.raca}, pesa ${this.peso}kg e tem a cor ${this.cor}`
    );
  }
  farejar(): void {
    console.log(`${this.nome} está farejando algo...`);
  }
}

class Gato extends Animal {
  private _raca: string;
  private _peso: number;
  private _cor: string;

  constructor(
    nome: string,
    idade: number,
    raca: string,
    peso: number,
    cor: string
  ) {
    super(nome, idade);
    this._raca = raca;
    this._peso = peso;
    this._cor = cor;
  }

  public get raca() {
    return this._raca;
  }
  public set raca(raca) {
    this._raca = raca;
  }

  public get peso() {
    return this._peso;
  }
  public set peso(peso) {
    this._peso = peso;
  }

  public get cor() {
    return this._cor;
  }
  public set cor(cor) {
    this._cor = cor;
  }
  fazerSom(): void {
    console.log("Miau!");
  }
  apresentar(): void {
    console.log(
      `O gato se chama ${this.nome}, tem ${this.idade} anos, da raça ${this.raca}, pesa ${this.peso}kg e tem a cor ${this.cor}`
    );
  }
  arranhar(): void {
    console.log(`${this.nome} está arranhando o sofá!`);
  }
}

const cachorro = new Cachorro("Rex", 6, "Vira-lata", 10, "caramelo");
const gato = new Gato("Fabricio", 4, "Laranja", 5, "Laranja");

gato.apresentar();
gato.arranhar();

console.log("========================");

cachorro.apresentar();
cachorro.farejar();
