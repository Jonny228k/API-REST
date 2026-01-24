import express from "express";
import conexao from "./app/database/conexao.js"
import itemcontrollers from "./app/controllers/itemcontrollers.js"
const app = express();


//Habilitando a leitura de json com express
app.use(express.json())

//rotas
app.get("/inventario", itemcontrollers.index)
app.get("/inventario/:id", itemcontrollers.show)
app.post("/inventario", itemcontrollers.store)
app.put("/inventario/:id", itemcontrollers.update)
app.delete("/inventario/:id", itemcontrollers.delete)






export default app;
