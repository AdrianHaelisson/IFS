import { Router } from "express";
import { verificarNumero } from "../controllers/verificarNumero";
import { controller } from "../controllers/conversaoController";
import { controladorDobrado } from "../controllers/dobradoController";
import { validarNumeroMiddleware, validarDolarMiddleware } from "../middleware/validaNumero";
import { negativoMiddleware } from "../middleware/validaNegativos";
import { paresController } from "../controllers/paresController";
import { comprasController } from "../controllers/comprasController";
import { deleteController } from "../controllers/deleteController";
import { adicionarItemController } from "../controllers/adicionarItemController";
import { updateController } from "../controllers/updateController";
import { listaItens } from "../controllers/listarItensController";
import { itemMaisCaro } from "../controllers/itemMaisCaroController";
import { itemMaisBarato } from "../controllers/itemMaisBaratoController";
import { itemCarrinhoID } from "../controllers/itemIDController";
import { itemCarrinhoNome } from "../controllers/itemNomeController";

const route = Router();

route.get("/nome", (req, res) => {
  res.send("Meu nome é Adrian");
});

// Dobra um número com validação de entrada
route.get("/dobrado", validarNumeroMiddleware, controladorDobrado);

// Variação com validação de negativos
route.get("/dobrado2", validarNumeroMiddleware, negativoMiddleware, controladorDobrado);

// Converte dólar para real (dolar via query param)
route.get("/conversao", validarDolarMiddleware, controller);

// Verifica se é primo (via corpo JSON { numero })
route.post("/primo", verificarNumero);

//Retorna os pares
route.get("/pares", paresController)

// Valor total carrinho de compras
route.post("/compras", comprasController)

// Remover item do carrinho pelo id
route.delete("/compras/:indice", deleteController)

// Adiciona item ao carrinho
route.post("/carrinho", adicionarItemController)

// Atualiza item do carrinho
route.put("/carrinho/:id", updateController)

// Lista itens do carrinho
route.get("/carrinho", listaItens)

// Item mais caro do carrinho
route.get("/carrinho/maiscaro", itemMaisCaro)

// Item mais barato do carrinho
route.get("/carrinho/maisbarato", itemMaisBarato)

// Item por iD carrinho
route.get("/carrinho/:id", itemCarrinhoID)

// Item por Nome carrinho
route.get("/carrinho/busca", itemCarrinhoNome)

export default route;

