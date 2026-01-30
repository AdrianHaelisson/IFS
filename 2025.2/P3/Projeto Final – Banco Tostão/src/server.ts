import "dotenv/config";
import express from "express";
import cors from "cors";
import { userRoutes } from "./routes/userRoutes.js";
import { saldoRoutes } from "./routes/saldoRoutes.js";
import { authRoutes } from "./routes/authRoutes.js";
import { transactionRoutes } from "./routes/transactionRoutes.js";
import { errorMiddleware } from "./middlewares/errorMiddleware.js";

const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());

app.use(authRoutes);
app.use(userRoutes);
app.use(saldoRoutes);
app.use(transactionRoutes);

app.use(errorMiddleware);

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});