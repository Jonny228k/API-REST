import express from "express";
const app = express();


//Habilitando a leitura de json com express
app.use(express.json())

//Mock do inventario
const inventario = [
    { id: 1, nome: "Picareta", quantidade: 1, durabilidade: 52 },
    { id: 2, nome: "Tocha", quantidade: 6 },
    { id: 3, nome: "Espada", quantidade: 1, durabilidade: 30 },
    { id: 4, nome: "Mapa", quantidade: 1, durabilidade: 12 },
]

//retornar objeto pelo id
function buscarItemporId(id) {
    return inventario.filter(item => item.id == id)
}

//retorna a posicao do item no array
function buscarIdporItem(id) {
    return inventario.findIndex(item => item.id == id)
}

//criando uma rota padrão/raiz
app.get("/", (req, res) => {
    res.send("Bem-vindo ao Inventário do Minecraft!")
})

//Criando uma rota para o inventario
app.get("/inventario", (request, response) => {
    response.status(200).send(Inventario)
})

app.get("/inventario/:id", (request, response) => {
    //let index = request.params.id
    response.json(burcarItemporId(request.params.id))
})

//Criando um get.POST para que possa ser adicionado item no inventario
app.post("/inventario", (request, response) => {
    Inventario.push(request.body),
        response.status(201).send("Novo item adicionado com sucesso!")
})

app.delete("/inventario/:id", (req, res) => {
    let index = buscarIdporItem(req.params.id)
    Inventario.splice(index, 1)
    res.status(200).send("Item removido com sucesso!")
})

// Put de atualização de item do inventario
app.put("/inventario/:id", (req, res) => {
    let index = buscarIdporItem(req.params.id)
    inventario[index] = req.body.item
    invenntario[index] = req.body.quantidade
    inventario[index] = req.body.durabilidade
    response.json(inventario)
})



export default app;