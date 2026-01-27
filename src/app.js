import express from "express";
import routes from "./routes.js";
const app = express();

//Habilitando a leitura de json com express
app.use(express.json())

//caminho para rotas
app.use(routes)

export default app;
