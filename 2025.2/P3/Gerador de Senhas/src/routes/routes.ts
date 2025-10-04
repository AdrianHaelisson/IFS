import { Router } from 'express';

const router = Router();

router.get('/senha', (req, res) => {
  res.send('Hello nova rota!');
});

export default router;
