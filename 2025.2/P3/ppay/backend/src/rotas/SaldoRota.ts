import { Router } from "express";
import { SaldoController } from "../controller/SaldoController.js";
import { authMiddleware } from "../middleware/auth.js";

export const saldoRota = Router();
const controller = new SaldoController();

saldoRota.get("/wallet/:usuarioid", authMiddleware, controller.getUsuarioSaldo);
