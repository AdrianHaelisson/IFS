import express from 'express';
import dotenv from 'dotenv';
import senhaRandom from './senha'; // Suponho que seja a geração de senha aleatória

dotenv.config(); // Carrega as variáveis do .env

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello GET, TypeScript + Express!');
});

app.post('/', (req, res) => {
  res.send('Hello POST, TypeScript + Express!');
});

// Use as rotas de senha
app.use(senhaRandom);  // Aqui estou associando um prefixo '/senha'

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
