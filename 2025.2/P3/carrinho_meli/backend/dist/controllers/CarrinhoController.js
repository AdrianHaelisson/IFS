import { ProdutoRepository } from "../repository/ProdutoRepository.js";
export class CarrinhoController {
    repo;
    constructor() {
        this.repo = new ProdutoRepository();
    }
    listar = (req, res) => {
        this.repo.listar();
        res.status(200).json(this.repo.listar());
    };
    inserir = (req, res) => {
        res.status(201).json({ message: "Produto inserido no carrinho" });
    };
    deletar = (req, res) => {
        const id = Number(req.params.id);
        res.status(204).json({ message: `Produto de id ${id} removido do carrinho` });
    };
    atualizar = async (req, res) => {
        const id = Number(req.params.id);
        const { qty } = req.body;
        if (qty <= 0 || typeof qty !== 'number' || qty === undefined) {
            return res.status(400).json({ message: "Quantidade inválida" });
        }
        try {
            const itemAtualizado = await this.repo.atualizar(id, qty);
            if (!itemAtualizado) {
                return res.status(404).json({ message: "Produto não encontrado no carrinho" });
            }
            res.status(200).json({ message: `Produto de id ${id} atualizado no carrinho` });
        }
        catch (error) {
            res.status(500).json({ message: "Erro ao atualizar o produto no carrinho" });
        }
    };
}
//# sourceMappingURL=CarrinhoController.js.map