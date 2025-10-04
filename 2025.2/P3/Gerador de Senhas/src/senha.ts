import { Router } from 'express';

const router = Router();

router.get('/senha', (req, res) => {
  const char = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
  let senha = "";
  let tamanho = Number(req.query.tamanho);

  for (let i = 0; i < tamanho; i++) {
    let numAleatorio = Math.floor(Math.random() * char.length);
    senha += char[numAleatorio];
  }
  res.send(senha);
});

router.post('/senha', (req, res) => {
  const char = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
  let senha = "";
  const tamanhoRaw = req.body && req.body.tamanho;
  const tamanho = Number(tamanhoRaw);

  for (let i = 0; i < tamanho; i++) {
    let numAleatorio = Math.floor(Math.random() * char.length);
    senha += char[numAleatorio];
  }
  res.send(senha);
});

export default router;
