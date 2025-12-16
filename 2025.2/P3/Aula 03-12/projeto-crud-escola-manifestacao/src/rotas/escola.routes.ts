import { Router } from "express";
import { EscolaController } from "../controllers/escola.controller.js";

const escolaRouter = Router();
const escolaController = new EscolaController();

escolaRouter.get("/escolas", escolaController.listar);
escolaRouter.get("/escolas/bymunicipio", escolaController.findescolabymunicipio);
escolaRouter.get("/escolas/maismanifestacao", escolaController.getEscolaMaisManifestacao);
escolaRouter.get("/escolas/maisalunos", escolaController.getEscolaMaisAlunos);
escolaRouter.get("/escolas/:id", escolaController.porId);
escolaRouter.post("/escolas", escolaController.inserir);
escolaRouter.put("/escolas/:id", escolaController.atualizar);
escolaRouter.delete("/escolas/:id", escolaController.deletar);

export default escolaRouter;