import { Router } from "express";
import { SaldoController } from "../controllers/saldoController.js";
import { authMiddleware } from "../middlewares/authMiddleware.js";
const saldoController = new SaldoController();
export const saldoRoutes = Router();
saldoRoutes.use(authMiddleware);
saldoRoutes.get("/saldos/:usuarioId", saldoController.getByUsuarioId);
//# sourceMappingURL=saldoRoutes.js.map