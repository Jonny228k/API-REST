import { consulta } from "../database/conexao.js"

class itemrepositories {
//CRUD
    create(item) {
        const sql = "INSERT INTO inventario SET ?"
        return consulta(sql, item, "Não foi possivel cadastrar o item")
    }


    findAll() {
        const sql = "SELECT * FROM inventario"
        return consulta(sql, "Não foi possivel Localizar o item")
    }

    findById(id) {
        const sql = "SELECT * FROM inventario WHERE id = ?"
        return consulta(sql, id, "Não foi possivel Localizar o item")
    }
    update(id, item) {
        const sql = "UPDATE inventario SET ? WHERE ID = ?"
        return consulta(sql, [item, id], "Não foi possivel atualizar o item")
    }
    delete(id) {
        const sql = "DELETE FROM inventario WHERE id = ?"
        return consulta(sql, id, "Não foi possivel deletar o item")
    }
}

export default itemrepositories;