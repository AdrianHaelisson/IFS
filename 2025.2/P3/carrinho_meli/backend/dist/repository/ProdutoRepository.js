import { carrinho } from "../utils/carrinho.js";
export class ProdutoRepository {
    listar() {
        return carrinho;
    }
    async atualizar(id, qty) {
        const produto = carrinho.find(item => item.id === id);
        if (!produto) {
            return null;
        }
        produto.qty = qty;
        return produto;
    }
}
//# sourceMappingURL=ProdutoRepository.js.map