import { Router } from "express";
import { CarrinhoController } from "../controllers/CarrinhoController.js";
export const carrinhorouter = Router();
const carrinhoController = new CarrinhoController();
carrinhorouter.get('/carrinho', carrinhoController.listar);
carrinhorouter.post('/carrinho', carrinhoController.inserir);
carrinhorouter.delete('/carrinho/:id', carrinhoController.deletar);
carrinhorouter.put('/carrinho/:id', carrinhoController.atualizar);
//# sourceMappingURL=carrinho.js.map