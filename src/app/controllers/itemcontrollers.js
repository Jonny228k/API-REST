
import Itemrepositories from "../repositories/itemrepositories.js"
const itemrepositories = new Itemrepositories()

class item {

    async index(request, response) {
        const row = await itemrepositories.findAll()
        response.json(row)
    }

    async show(request, response) {
        const id = request.params.id
        const row = await itemrepositories.findById(id)
        response.json(row)
    }

    async store(request, response) {
        const item = request.body
        const row = await itemrepositories.create(item)
        response.json(row)
    }

    async update(request, response) {
        const id = request.params.id
        const item = request.body
        const row = await itemrepositories.update(id, item)
        response.json(row)
    }

    async delete(request, response) {
        const id = request.params.id
        const row = await itemrepositories.delete(id)
        response.json(row)
    }

}

export default new item() 