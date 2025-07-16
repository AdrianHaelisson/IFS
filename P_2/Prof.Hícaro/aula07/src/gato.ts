import { Animal } from "./animal";

export class Gato extends Animal {
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
