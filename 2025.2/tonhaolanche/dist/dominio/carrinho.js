export class Carrinho {
    constructor() {
        this.itens = [];
    }
    adicionar(item) {
        // Requisito: se o produto já existe, somar a quantidade
        const existente = this.itens.find(i => i.produtoId === item.produtoId);
        if (existente) {
            // TODO: somar quantidades
            existente.quantidade; /* preencha aqui */
        }
        else {
            // Inserir cópia para evitar mutações externas
            this.itens.push({ ...item });
        }
    }
    remover(produtoId) {
        // TODO: remover pelo produtoId (filtrando)
        /* preencha aqui */
    }
    listar() {
        // Retornar cópias para proteger o estado interno
        return this.itens.map(i => ({ ...i }));
    }
    total() {
        // TODO: somatório de preco * quantidade
        return; /* preencha aqui */
    }
    limpar() {
        this.itens = [];
    }
}
