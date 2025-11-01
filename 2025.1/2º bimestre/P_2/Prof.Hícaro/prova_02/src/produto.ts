export class Produto {
  nome: string;
  preco: number;

  constructor(nome: string, preco: number) {
    this.nome = nome;
    this.preco = preco;
  }

  desconto(porcentagem: number): void {
    const valorDesconto = this.preco * (porcentagem / 100);
    this.preco -= valorDesconto;
  }
}
