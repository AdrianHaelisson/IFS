import express from 'express';
import CPFRota from './routes/cpf.routes';

const app = express();

app.use(express.json());
app.use(CPFRota);

export default app;
