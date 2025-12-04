import { Router } from "express";
import { EscolaController } from "../controllers/escola.controller.js";

const escolaRouter = Router();
const escolaController = new EscolaController();

escolaRouter.get("/escolas", escolaController.listar);
escolaRouter.get("/escolas/:id", escolaController.porId);
escolaRouter.get("/escolas/bymunicipio", escolaController.findEscolaByMunicipio);
escolaRouter.get("/escolas/maismanifestacao", escolaController.getEscolaMaisManifestacao);
escolaRouter.post("/escolas", escolaController.inserir);
escolaRouter.put("/escolas/:id", escolaController.atualizar);
escolaRouter.delete("/escolas/:id", escolaController.deletar);

export default escolaRouter;