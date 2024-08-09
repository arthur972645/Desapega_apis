import "dotenv/config";
import express from "express";
import path from "node:path";
import { fileURLToPath } from "node:url";

const PORT = process.env.PORT;

//*importar conexçao
import conn from "./config/conn.js";

//*importacao dos modulos TABELA
import "./models/usuariomodel.js";
import "./models/objetoModel.js";
import "./models/objetoImageModel.js"

//*Importar as rotas
import usuarioRouter from "./routes/usuarioroutes.js";
import objetoRouter from "./routes/objetoRouter.js"
const app = express();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//*localizar onde está a pasta public
app.use("/public", express.static(path.join(__dirname, "public")));

//*utilizar as rotas
app.use("/usuarios", usuarioRouter);
app.use("/objetos", objetoRouter);

//*404
app.use((request, response) => {
  response.status(404).json({ message: "Rota nao encontrada" });
});

app.listen(PORT, () => {
  console.log("Servidor on PORT: " + PORT);
});
