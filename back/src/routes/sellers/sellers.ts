import {Router}  from "express";
import { getSellersHandler } from "../../handlers/sellers/index.ts";
import { schemaValidation } from "../../middlewares/schemaValidator.middleware.ts";
import { CreateSellerSchema, updateSellerSchema } from "../../schemas/sellerSchema.ts";

const router = Router()

router.get("/", getSellersHandler)
router.get("/:id")
router.post("/", schemaValidation(CreateSellerSchema))
router.put("/:id", schemaValidation(updateSellerSchema))
router.delete("/:id")

export default router