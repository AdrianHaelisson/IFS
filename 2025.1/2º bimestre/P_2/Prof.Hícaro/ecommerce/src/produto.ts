export default class Produto {
  private _nome: string;
  private _quantidade: number;
  private _cor: string;

  constructor(nome: string, quantidade: number, cor: string) {
    this._nome = nome;
    this._quantidade = quantidade;
    this._cor = cor;
  }

  public get nome(): string {
    return this._nome;
  }
  public set nome(novoNome: string) {
    this._nome = novoNome;
  }

  public get quantidade(): number {
    return this._quantidade;
  }
  public set quantidade(novaQuantidade: number) {
    this._quantidade = novaQuantidade;
  }

  public get cor(): string {
    return this._cor;
  }
  public set cor(novaCor: string) {
    this._cor = novaCor;
  }

  cadastrarProduto() {
    console.log("produto cadastrado");
  }
  excluirProduto() {
    console.log("Produto excluido");
  }
  listarProdutos() {
    console.log("Lista de produtos:");
  }
  atualizarProduto() {
    console.log("Produto atualizado");
  }
}

export const p1 = new Produto("Camisa", 2, "Cinza");
