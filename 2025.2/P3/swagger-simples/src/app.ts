import express from "express";
import swaggerUi from "swagger-ui-express";
import { swaggerSpec } from "./swagger";

export const app = express();
app.use(express.json());

// Swagger UI em /docs
app.use("/docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

/**
 * @openapi
 * /soma:
 *   get:
 *     summary: Soma dois números
 *     description: Recebe a e b via query string e retorna a soma.
 *     parameters:
 *       - in: query
 *         name: a
 *         required: true
 *         schema:
 *           type: number
 *         example: 2
 *       - in: query
 *         name: b
 *         required: true
 *         schema:
 *           type: number
 *         example: 3
 *     responses:
 *       200:
 *         description: Soma calculada
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 result:
 *                   type: number
 *             example:
 *               result: 5
 * 400:
 * description: Parâmetros inválidos
 * content:
 *  application/json:
 *    schema:
 *      type: object
 *      properties:
 *      message:
 *        type: string
 *      example:
 *          message: a e b devem ser números
 */

// GET /soma?a=2&b=3 -> { result: 5 }
app.get("/soma", (req, res) => {
  const a = Number(req.query.a);
  const b = Number(req.query.b);
  if (Number.isNaN(a) || Number.isNaN(b)) {
    return res.status(400).json({ message: "a e b devem ser números" });
  }
  return res.json({ result: a + b });
});

/**
 * @openapi
 * /dobra/{n}:
 *   get:
 *     summary: Dobra um número
 *     description: Recebe n via path param e retorna n * 2.
 *     parameters:
 *       - in: path
 *         name: n
 *         required: true
 *         schema:
 *           type: number
 *         example: 10
 *     responses:
 *       200:
 *         description: Dobro calculado
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 result:
 *                   type: number
 *             example:
 *               result: 20
 */
// GET /dobra/10 -> { result: 20 }
app.get("/dobra/:n", (req, res) => {
  const n = Number(req.params.n);
  const result = n * 2;
  return res.json({ result });
});
