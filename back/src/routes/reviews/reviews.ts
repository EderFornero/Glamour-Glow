import { Router } from "express";
import { postReviewController, deleteReviewController} from "../../controllers/index";
import { schemaValidation } from "../../middlewares/schemaValidator.middleware";
import { createReviewSchema, deleteReviewSchema } from "../../schemas/reviewSchema";

const router = Router()

router.delete("/:id",schemaValidation(deleteReviewSchema),deleteReviewController )
router.post("/", schemaValidation(createReviewSchema), postReviewController)

export default router
