import conexao from "../database/conexao.js"
import itemcontrollers from "../controllers/itemcontrollers.js" 

class itemrepositories {

    create(item) {
        const sql = "INSERT INTO inventario SET ?"
        return new Promise((resolve, reject) => {
            conexao.query(sql, item, (erro, result) => {
                if (erro) {
                    return reject(`Não foi possivel adicionar o item: ${erro}`)
                } else {
                    const row = JSON.parse(JSON.stringify(result))
                    return resolve(row)
                }
            })
        })
    }


    findAll() {
        const sql = "SELECT * FROM inventario"
        return new Promise((resolve, reject) => {
            conexao.query(sql, (erro, result) => {
                if (erro) {
                    return reject(erro)
                } else {
                    const row = JSON.parse(JSON.stringify(result))
                    return resolve(row)
                }
            })
        })
    }

    findById(id) {
        const sql = "SELECT * FROM inventario WHERE id = ?"
        return new Promise((resolve, reject) => {
            conexao.query(sql, id, (erro, result) => {
                if (erro) {
                    return reject(`Não foi possivel encontar o item buscado: ${erro}`)
                } else {
                    const row = JSON.parse(JSON.stringify(result))
                    return resolve(row)
                }
            })
        })
    }
    update(id, item) {
        const sql = "UPDATE inventario SET ? WHERE ID = ?"
        return new Promise((resolve, reject) => {
            conexao.query(sql, [item, id], (erro, result) => {
                if (erro) {
                    return reject(`Não foi possivel atualizar o item: ${erro}`)
                } else {
                    const row = JSON.parse(JSON.stringify(result))
                    return resolve(row)
                }
            })
        })
    }
    delete(id) {
        const sql = "DELETE FROM inventario WHERE id = ?"
        return new Promise((resolve, reject) => {
            conexao.query(sql, id, (erro, result) => {
                if (erro) {
                    return reject (`Não foi possivel deletar o item: ${erro}`)
                } else {
                    return resolve (result)
                }
            })
        })
    }
}

export default itemrepositories;