import { Router } from "express";
import favorites from "./favorites"

 export const favoritesRouter = Router();
 favoritesRouter.use("/favorites", favorites)
