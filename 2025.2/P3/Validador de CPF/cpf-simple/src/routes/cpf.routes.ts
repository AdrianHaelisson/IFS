import { Router } from 'express';
import { isValidCPF } from '../utils/cpf';
import { formatCPF } from '../utils/cpf';

const router = Router();

// POST /validate  { cpf: '123.456.789-09' }
router.post('/validate', (req, res) => {
  const  { cpf }  = req.body || {};
  if (!cpf) {
    return res.status(400).json({ ok: false, error: 'Campo "cpf" é obrigatório no corpo da requisição.' });
  }

  const valid = isValidCPF(cpf);
  return res.json({ ok: true, valid, cpf: formatCPF(cpf) });
});

export default router;
