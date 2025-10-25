 import { Router } from "express"
 import { EscolaController } from "../controllers/escola.controller.js"
 
 const controller = new EscolaController()
 
const escolaRoutes = Router()
 
 escolaRoutes.get("/escolas", controller.listar)

 export default escolaRoutes