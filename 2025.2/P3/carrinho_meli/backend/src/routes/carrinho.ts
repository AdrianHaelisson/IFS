import { Router } from "express";
import { CarrinhoController } from "../controllers/CarrinhoController.js";
import { negativosAtualizar } from "../middleware/validarNegativos.js";

export const carrinhorouter = Router();
const carrinhoController = new CarrinhoController();

carrinhorouter.get('/carrinho', carrinhoController.listar);
carrinhorouter.post('/carrinho', carrinhoController.inserir);
carrinhorouter.delete('/carrinho/:id', carrinhoController.deletar);
carrinhorouter.put('/carrinho/:id', negativosAtualizar ,carrinhoController.atualizar);