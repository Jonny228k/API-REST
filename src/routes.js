import {Router} from "express";
import itemcontrollers from "./app/controllers/itemcontrollers.js";

const routes = Router()

routes.get("/inventario", itemcontrollers.index)
routes.get("/inventario/:id", itemcontrollers.show)
routes.post("/inventario", itemcontrollers.store)
routes.put("/inventario/:id", itemcontrollers.update)
routes.delete("/inventario/:id", itemcontrollers.delete)

export default routes;