import { Router } from "express";
import { postFavoriteController, readFavoritesController, deleteFavoritesController } from "../../controllers/index";

const router = Router(); 

router.post("/", postFavoriteController)
router.get("/", readFavoritesController)
router.delete("/:id", deleteFavoritesController)

export default router;