export class Animal implements AnimalInterface {
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

interface AnimalInterface {}
