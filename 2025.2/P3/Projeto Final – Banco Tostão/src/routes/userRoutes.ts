import { Router } from "express";
import { UserController } from "../controllers/userController.js";

const userController = new UserController();
export const userRoutes = Router();

userRoutes.post("/usuarios", userController.criar)
userRoutes.get("/usuarios", userController.listar)