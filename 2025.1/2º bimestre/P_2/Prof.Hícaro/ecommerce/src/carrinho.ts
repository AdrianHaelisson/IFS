import Produto from "./produto";

export default class Carinho {
  private _produtos: string[];

  constructor(produtos: string[]) {
    this._produtos = produtos;
  }

  public get produto(): string[] {
    return this._produtos;
  }
  public set produto(novoProduto: string[]) {
    this._produtos = novoProduto;
  }

  adicionarProduto(prod: Produto) {}

  calcularTotal(): number {
    return 1; //Editar
  }
}
