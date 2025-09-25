export type ItemCarrinho = {
  produtoId: number;
  nome: string;
  preco: number;
  quantidade: number;
};

export class Carrinho {
  private itens: ItemCarrinho[] = [];

  adicionar(item: ItemCarrinho): void {
    // Requisito: se o produto já existe, somar a quantidade
    const existente = this.itens.find(i => i.produtoId === item.produtoId);
    if (existente) {
      // TODO: somar quantidades
      existente.quantidade += item.quantidade/* preencha aqui */ 
    } else {
      // Inserir cópia para evitar mutações externas
      this.itens.push({ ...item });
    }
  }

  remover(produtoId: number): void {
    // TODO: remover pelo produtoId (filtrando)
     /* preencha aqui */
  }

  listar(): ItemCarrinho[] {
    // Retornar cópias para proteger o estado interno
    return this.itens.map(i => ({ ...i }));
  }

  total(): number {
    // TODO: somatório de preco * quantidade
    return /* preencha aqui */
  }

  limpar(): void {
    this.itens = [];
  }
}
