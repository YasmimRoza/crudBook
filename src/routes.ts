import { Router } from "express"
import { CreateBooksController } from "./controller/CreateBooksController"
import { CreateCategoryController } from "./controller/CreateCategoryController"
import { DeleteCategoryController } from "./controller/DeleteCategoryController"
import { GetAllBooksController } from "./controller/GetAllBooksController"
import { GetAllCategoriesController } from "./controller/GetAllCategoriesController"
import { UpdateCategoryController } from "./controller/UpdateCategoryController"

const routes = Router()

routes.post("/categories", new CreateCategoryController().handle)
routes.get("/categories", new GetAllCategoriesController().handle)
routes.delete("/categories/:id", new DeleteCategoryController().handle)
routes.put("/categories/:id", new UpdateCategoryController().handle)

routes.post("/books", new CreateBooksController().handle)
routes.get("/books", new GetAllBooksController().handle)

export { routes };