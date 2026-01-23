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
        if (erro) {
            response.status(404).json(`A pagina nao pode ser carregada: ${erro}`)
        } else {
            response.status(200).json(result)
        }
    })
})

app.get("/inventario/:id", (request, response) => {
    const id = request.params.id
    const sql = "SELECT * FROM inventario WHERE id = ?"
    conexao.query(sql, id, (erro, result) => {
        if (erro) {
            response.status(404).json(erro)
        } else {
            response.status(200).json(result)
        }
    })
})

//Criando um get.POST para que possa ser adicionado item no inventario
app.post("/inventario", (request, response) => {
    const item = request.body
    const sql = "INSERT INTO FROM inventario SET ?"
    conexao.query(sql, item, (erro, result) => {
        if (erro) {
            response.status(404).json(`Ops, não foi possivel a inclusão no inventario ${erro}`)
        } else {
            response.status(200).json(result)
        }
    })
})

app.delete("/inventario/:id", (req, res) => {
    const id = request.params.id
    const sql = "DELETE FROM inventario WHERE id = ?"
    conexao.query(sql, id, (erro, result) => {
        if (erro) {
            response.status(404).json(erro)
        } else {
            response.status(200).json(result)
        }
    })
})

// Put de atualização de item do inventario
app.put("/inventario/:id", (req, res) => {
    const id = request.params.id
    const item = request.body
    const sql = "UPDATE inventario SET ? WHERE ID = ?"
    conexao.query(sql, [item, id], (erro, result) => {
        if (erro) {
            response.status(404).json(`Ops, não foi possivel a inclusão no inventario ${erro}`)
        } else {
            response.status(200).json(result)
        }
    })
})



export default app;