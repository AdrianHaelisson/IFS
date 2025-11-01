import { Animal } from "./animal";

export class Cachorro extends Animal {
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
  public apresentar(): void {
    console.log(
      `O cachorro se chama ${this.nome}, tem ${this.idade} anos, da raça ${this._raca}, pesa ${this._peso}kg e tem a cor ${this._cor}`
    );
  }
  public farejar(): void {
    console.log(`${this.nome} está farejando algo...`);
  }
}
