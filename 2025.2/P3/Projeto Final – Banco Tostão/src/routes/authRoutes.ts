import { Router } from "express";
import { AuthController } from "../controllers/authController.js";

const authController = new AuthController();
export const authRoutes = Router();

authRoutes.post("/login", authController.login)