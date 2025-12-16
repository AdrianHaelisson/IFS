import { Router } from "express";
import { SaldoController } from "../controllers/saldoController.js";
import { saldoMiddleware } from "../middlewares/saldoMiddleware.js";

const saldoController = new SaldoController();
export const saldoRoutes = Router();

saldoRoutes.use(saldoMiddleware);

saldoRoutes.get("/saldos/:usuarioId", saldoController.getByUsuarioId)
