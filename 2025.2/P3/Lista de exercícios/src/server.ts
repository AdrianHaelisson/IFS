import express from 'express';
import dotenv from 'dotenv';
import listaExercicio from './routes/listaExercicio';
dotenv.config(); // Carrega as variáveis do .env

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use('/', listaExercicio);

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
