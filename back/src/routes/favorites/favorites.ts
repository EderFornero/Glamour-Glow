import { Router } from "express";
import { postFavoriteController, deleteFavoritesController } from "../../controllers/index";

const router = Router(); 

router.post("/", postFavoriteController)
router.delete("/:id", deleteFavoritesController)

export default router;