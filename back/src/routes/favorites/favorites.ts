import { Router } from "express";
import { postFavoriteController, deleteFavoritesController } from "../../controllers/index";
import { schemaValidation } from "../../middlewares/schemaValidator.middleware";
import { createFavoritesSchema, deleteFavoritesSchema } from "../../schemas/favoritesSchema";
const router = Router(); 

router.post("/", schemaValidation(createFavoritesSchema),postFavoriteController)
router.delete("/:id", schemaValidation(deleteFavoritesSchema), deleteFavoritesController)

export default router;