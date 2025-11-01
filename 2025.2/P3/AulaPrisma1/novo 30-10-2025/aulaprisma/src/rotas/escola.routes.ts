import { Router } from "express";
import { EscolaController } from "../controllers/escola.controller.js";

const escolaRouter = Router();
const escolaController = new EscolaController();

escolaRouter.get("/escolas", escolaController.listar);
escolaRouter.post("/escolas", escolaController.inserir);


export default escolaRouter;