import { Router } from "express";
import { UsuarioController } from "../controller/UsuarioController.js";

export const usuarioRota = Router();
const controller = new UsuarioController();

usuarioRota.post("/users", controller.criar);
usuarioRota.get("/users", controller.listar);
usuarioRota.post("/login", controller.login);
