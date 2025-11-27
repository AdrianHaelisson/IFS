import { Router } from "express";
import { ManifestacaoController } from "../controllers/manifestacao.controller.js";

const manifestacaoRouter = Router();
const manifestacaoController = new ManifestacaoController();

manifestacaoRouter.get("/manifestacao", manifestacaoController.listar);
manifestacaoRouter.post("/manifestacao", manifestacaoController.cadastrar);
manifestacaoRouter.delete("/manifestacao/:id", manifestacaoController.deletar);

export default manifestacaoRouter;