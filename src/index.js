import express from "express";
const app = express();


//Habilitando a leitura de json com express
app.use(express.json())

//Mock do inventario
const Inventario = [
    {id: 1, nome: "Picareta", quantidade: 1, durabilidade: 52},
    {id: 2, nome: "Tocha", quantidade: 6},
    {id: 3, nome: "Espada", quantidade: 1, durabilidade: 30},
    {id: 4, nome: "Mapa", quantidade: 1, durabilidade: 12},
]

//criando uma rota padrão/raiz
app.get("/", (req, res)=> {
    res.send("Servidor online e operando na porta 3000")
})

//Criando uma rota para o inventario
app.get("/inventario", (request, response) => {
    response.status(200).send(Inventario)
})

//Criando um get.POST para que possa ser adicionado item no inventario
app.post("/inventario", (request, response) => {
    Inventario.push(request.body),
    response.status(201).send("Novo item adicionado com sucesso!")
})

export default app;