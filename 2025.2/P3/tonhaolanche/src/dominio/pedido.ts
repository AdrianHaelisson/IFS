import { Carrinho, ItemCarrinho } from "./carrinho.js";

export enum StatusPedido {
  Pendente,
  EmPreparacao,
  Pronto,
  Concluido
}

export function avancarStatus(atual: StatusPedido): StatusPedido {
  // TODO: avançar a máquina de estados até Concluido
  if (atual === StatusPedido.Pendente) return 1 /* preencha aqui */ 
  if (atual === StatusPedido.EmPreparacao) return 2 /* preencha aqui */ 
  if (atual === StatusPedido.Pronto) return 3 /* preencha aqui */ 
  return StatusPedido.Concluido;
}

export class Pedido {
  private status: StatusPedido = /* preencha aqui */ StatusPedido.Pendente;
  private carrinho = new Carrinho();

  getStatus(): StatusPedido {
    return this.status;
  }

  adicionarItem(item: ItemCarrinho): void {
    this.carrinho.adicionar(item);
  }

  removerItem(produtoId: number): void {
    this.carrinho.remover(produtoId);
  }

  itens(): ItemCarrinho[] {
    return this.carrinho.listar();
  }

  total(): number {
    return this.carrinho.total();
  }

  avancar(): void {
    // TODO: atualizar this.status usando avancarStatus
    this.status = avancarStatus(this.status) /* preencha aqui */
  }
}
