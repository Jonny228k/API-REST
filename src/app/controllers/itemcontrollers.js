import conexao from "../database/conexao.js"

class item {

    index(request, response) {
        const sql = "SELECT * FROM inventario"
        conexao.query(sql, (erro, result) => {
            if (erro) {
                response.status(404).json(`A pagina nao pode ser carregada: ${erro}`)
            } else {
                response.status(200).json(result)
            }
        })
    }

    show(request, response) {
    const id = request.params.id
    const sql = "SELECT * FROM inventario WHERE id = ?"
    conexao.query(sql, id, (erro, result) => {
        if (erro) {
            response.status(404).json(erro)
        } else {
            response.status(200).json(result)
        }
    })
}

store(request, response) {
    const item = request.body
    const sql = "INSERT INTO inventario SET ?"
    conexao.query(sql, item, (erro, result) => {
        if (erro) {
            response.status(404).json(`Ops, não foi possivel a inclusão no inventario ${erro}`)
        } else {
            response.status(200).json(result)
        }
    })
}

update(request, response) {
    const id = request.params.id
    const item = request.body
    const sql = "UPDATE inventario SET ? WHERE ID = ?"
    conexao.query(sql, [item, id], (erro, result) =>{
        if (erro) {
            response.status(404).json(`Ops, não foi possivel a inclusão no inventario ${erro}`)
        } else {
            response.status(200).json(result)
        }
    })
}

    delete(request, response) {
    const id = request.params.id
    const sql = "DELETE FROM inventario WHERE id = ?"
    conexao.query(sql, id, (erro, result) => {
        if (erro) {
            response.status(404).json(erro)
        } else {
            response.status(200).json(result)
        }
    })
}
    
}

export default new item() 