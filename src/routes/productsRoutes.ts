import { Router } from "express";
import { myMiddleware } from "../middlewares/myMiddleware.js";
import { ProductsController } from "../controllers/ProductsController.js";

const productsController = new ProductsController()

const productsRoutes = Router()

productsRoutes.get("", productsController.index)

// Middleware local
productsRoutes.post("", myMiddleware, productsController.create)

export {productsRoutes}