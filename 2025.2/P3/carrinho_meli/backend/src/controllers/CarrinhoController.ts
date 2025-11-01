import { Request, Response } from "express";
import { ProdutoRepository } from "../repository/ProdutoRepository.js";
import { negativosAtualizar } from "../middleware/validarNegativos.js";

export class CarrinhoController {
  private repo: ProdutoRepository;

  constructor() {
    this.repo = new ProdutoRepository();
  }

  listar = (req: Request, res: Response) => {
    // retornar o conteúdo atual do carrinho
    res.status(200).json(this.repo.listar());
  };

  inserir = async (req: Request, res: Response) => {
    const produto = req.body;

    const itensAtuais = this.repo.listar();
    const existeItem = itensAtuais.find((item) => item.id == produto.id);

    if (existeItem) {
      return res.status(400).json({ message: "Produto já existe no carrinho" });
    }

    try {
      await this.repo.inserir(produto);
      res
        .status(201)
        .json({ message: "Produto inserido no carrinho", item: produto });
    } catch (error: any) {
      res.status(500).json({ message: "Erro ao inserir produto no carrinho" });
    }
  };

  deletar = async (req: Request, res: Response) => {
    const id = Number(req.params.id);
    const produto = this.repo.listar().find((item) => item.id == id);
    try {
      await this.repo.deletar(id);
      res
        .status(200)
        .json({
          message: `Produto de id ${id} removido do carrinho`,
          item: produto,
        });
    } catch (error: any) {
      if (error && error.message === "Produto não encontrado") {
        return res
          .status(404)
          .json({ message: "Produto não encontrado no carrinho" });
      }
      return res
        .status(500)
        .json({ message: "Erro ao remover o produto do carrinho" });
    }
  };

  atualizar = async (req: Request, res: Response) => {
    const id = Number(req.params.id);
    const { qty } = req.body;

    // validar tipo antes de comparar
    if (typeof qty !== "number" || !Number.isFinite(qty)) {
      return res.status(400).json({ message: "Quantidade inválida" });
    }
    try {
      const itemAtualizado = await this.repo.atualizar(id, qty);
      if (!itemAtualizado) {
        return res
          .status(404)
          .json({ message: "Produto não encontrado no carrinho" });
      }
      res
        .status(200)
        .json({
          message: `Produto de id ${id} atualizado no carrinho`,
          item: itemAtualizado,
        });
    } catch (error: any) {
      if (error && error.message === "Produto não encontrado") {
        return res
          .status(404)
          .json({ message: "Produto não encontrado no carrinho" });
      }
      res
        .status(500)
        .json({ message: "Erro ao atualizar o produto no carrinho" });
    }
  };
}
