import express  from "express";
import { getSellersHandler } from "../../handlers/sellers/index.ts";

const router = express.Router()

router.get("/", getSellersHandler)
router.get("/:id")
router.post("/")
router.put("/:id")
router.delete("/:id")

export default router