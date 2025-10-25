import express from "express";
import escolaRoutes from "./rotas/escola.routes.js"
import cors from "cors"

const app = express();
app.use(express.json);

// app.use("/api", escolaRoutes)

app.get("/test", (req, res) => {
        res.send("QUalquurrr")
    })

const PORT = process.env.PORT || 8081
app.listen(PORT, () => console.log(`Servidor rodando em
http://localhost:${PORT}`))
