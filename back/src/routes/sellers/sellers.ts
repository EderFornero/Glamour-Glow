import {Router}  from "express";
import { schemaValidation } from "../../middlewares/schemaValidator.middleware.ts";
import { CreateSellerSchema, updateSellerSchema } from "../../schemas/sellerSchema.ts";
import { getSellersController } from "../../controllers/sellers/getSellers.ts";
import { postSellersController } from "../../controllers/sellers/postSeller.ts";

const router = Router()

router.get("/", getSellersController)
router.get("/:id")
router.post("/", schemaValidation(CreateSellerSchema), postSellersController)
router.put("/:id", schemaValidation(updateSellerSchema))
router.delete("/:id")

export default router;
