import express from 'express';
import dotenv from 'dotenv';
import senhaRota from './routes/senha'
dotenv.config(); // Carrega as variáveis do .env

const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
res.send('Hello GET, TypeScript + Express!');
});
app.post('/', (req, res) => {
res.send('Hello POST, TypeScript + Express!');
});
app.use(senhaRota)


app.listen(PORT, () => {
console.log(`Servidor rodando na porta ${PORT}`);
});