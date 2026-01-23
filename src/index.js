import express from "express";
import conexao from "../infra/conexao.js"
const app = express();


//Habilitando a leitura de json com express
app.use(express.json())



//retornar objeto pelo id
function buscarItemporId(id) {
    return inventario.filter(item => item.id == id)
}

//retorna a posicao do item no array
function buscarIdporItem(id) {
    return inventario.findIndex(item => item.id == id)
}


//Criando uma rota para o inventario
app.get("/inventario", (request, response) => {
    const sql = "SELECT * FROM inventario"
    conexao.query(sql, (erro, result) => {
        if(erro) {
            response.status(404).json(`A pagina nao pode ser carregada: ${erro}`)
        } else {
            response.status(200).json(result)
        }
    })
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