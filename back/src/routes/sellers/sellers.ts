import {Router}  from "express";
import { getSellersHandler } from "../../controllers/sellers/index.ts";

const router = Router()

router.get("/", getSellersHandler)
router.get("/:id")
router.post("/")
router.put("/:id")
router.delete("/:id")

export default router