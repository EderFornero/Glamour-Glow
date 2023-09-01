import {Router}  from "express";
import { schemaValidation } from "../../middlewares/schemaValidator.middleware.ts";
import { createSellerSchema, updateSellerSchema } from "../../schemas/sellerSchema.ts";
import { getSellersController } from "../../controllers/sellers/getSellers.ts";
import { postSellersController } from "../../controllers/sellers/postSeller.ts";
import { getSellersByIdController } from "../../controllers/sellers/getSellerById.ts";
import { putSellersController } from "../../controllers/sellers/updateSeller.ts";
import { deleteSellerController } from "../../controllers/sellers/deleteSeller.ts";

const router = Router()

router.get("/", getSellersController)
router.get("/:id", getSellersByIdController)
router.post("/", schemaValidation(createSellerSchema), postSellersController)
router.put("/:id", schemaValidation(updateSellerSchema),putSellersController)
router.delete("/:id", deleteSellerController)

export default router;
