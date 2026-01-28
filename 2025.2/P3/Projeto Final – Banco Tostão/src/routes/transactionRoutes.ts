import { Router } from "express";
import { TransactionController } from "../controllers/TransactionController.js";
import { authMiddleware } from "../middlewares/authMiddleware.js";

const transactionController = new TransactionController();
export const transactionRoutes = Router();

transactionRoutes.use(authMiddleware);

transactionRoutes.post("/depositar", transactionController.depositar);
transactionRoutes.post("/sacar", transactionController.sacar);
transactionRoutes.post("/transferir", transactionController.transferir);
transactionRoutes.get("/extrato", transactionController.extrato);
