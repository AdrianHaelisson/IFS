import express from 'express';
import escolaRouter from './rotas/escola.routes.js';
import cors from 'cors';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(cors());
app.use('/api', escolaRouter);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});