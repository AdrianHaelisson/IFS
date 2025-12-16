import "dotenv/config";
import express from "express";
import cors from "cors";
import { userRoutes } from "./routes/userRoutes.js";
import { saldoRoutes } from "./routes/saldoRoutes.js";
import { authRoutes } from "./routes/authRoutes.js";
const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());

app.use(authRoutes)
app.use(userRoutes)
app.use(saldoRoutes)

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});