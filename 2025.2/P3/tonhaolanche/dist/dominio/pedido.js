import { Carrinho } from "./carrinho.js";
export var StatusPedido;
(function (StatusPedido) {
    StatusPedido[StatusPedido["Pendente"] = 0] = "Pendente";
    StatusPedido[StatusPedido["EmPreparacao"] = 1] = "EmPreparacao";
    StatusPedido[StatusPedido["Pronto"] = 2] = "Pronto";
    StatusPedido[StatusPedido["Concluido"] = 3] = "Concluido";
})(StatusPedido || (StatusPedido = {}));
export function avancarStatus(atual) {
    // TODO: avançar a máquina de estados até Concluido
    if (atual === StatusPedido.Pendente)
        return 1; /* preencha aqui */
    if (atual === StatusPedido.EmPreparacao)
        return 2; /* preencha aqui */
    if (atual === StatusPedido.Pronto)
        return 3; /* preencha aqui */
    return StatusPedido.Concluido;
}
export class Pedido {
    constructor() {
        this.status = StatusPedido.Pendente;
        this.carrinho = new Carrinho();
    }
    getStatus() {
        return this.status;
    }
    adicionarItem(item) {
        this.carrinho.adicionar(item);
    }
    removerItem(produtoId) {
        this.carrinho.remover(produtoId);
    }
    itens() {
        return this.carrinho.listar();
    }
    total() {
        return this.carrinho.total();
    }
    avancar() {
        // TODO: atualizar this.status usando avancarStatus
        this.status = avancarStatus(this.status); /* preencha aqui */
    }
}
