import { Router } from "express";
import { getCategories } from "../../controllers/categories/getCategory";

 const router = Router();

router.get("/", getCategories)

export default router 