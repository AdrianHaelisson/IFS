import "dotenv/config";
import express from "express";
import cors from "cors";
import { saldoRota } from "./rotas/SaldoRota.js";
import { usuarioRota } from "./rotas/UsuarioRota.js";
const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());

app.use(usuarioRota);
app.use(saldoRota);

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});