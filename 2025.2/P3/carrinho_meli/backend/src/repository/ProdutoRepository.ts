import { Produto } from "../entities/Produto.js";
import { carrinho } from "../utils/carrinho.js";

export class ProdutoRepository {
  listar(): Produto[] {
    return carrinho;
  }
  async atualizar(id: number, qty: number): Promise<Produto> {
    const produto = carrinho.find((item) => item.id == id);
    if (!produto) {
      throw new Error("Produto não encontrado");
    }
    produto.qty = qty;
    return produto;
  }
  async inserir(produto: Produto): Promise<void> {
    carrinho.push(produto);
  }
  async deletar(id: number): Promise<void> {
    const index = carrinho.findIndex((item) => item.id == id);
    if (index === -1) {
      throw new Error("Produto não encontrado");
    }
    carrinho.splice(index, 1);
  }
}
