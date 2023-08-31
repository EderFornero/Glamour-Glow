import {Router}  from "express";
import {deleteService, postService, getService, getServiceById, updateService} from "../../handlers/index.ts"

const router = Router()

router.get("/",getService)
router.get("/:id",getServiceById)
router.post("/",postService)
router.put("/:id",updateService)
router.delete("/:id",deleteService)

export default router