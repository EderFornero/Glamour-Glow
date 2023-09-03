import { Router } from "express"
import categories from "./categories"

 export const categoriesRouter = Router();

categoriesRouter.use("/categories", categories)

