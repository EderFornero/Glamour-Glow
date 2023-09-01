import {Router}  from "express";
import {deleteService, postService, getService, getServiceById, putService} from "../../controllers/index.ts";
import { schemaValidation } from "../../middlewares/schemaValidator.middleware.ts";
import { createServiceSchema, updateServiceSchema } from "../../schemas/serviceSchema.ts";

const router = Router()

router.get("/",getService)
router.get("/:id",getServiceById)
router.post("/", schemaValidation(createServiceSchema),postService)
router.put("/:id",schemaValidation(updateServiceSchema),putService)
router.delete("/:id",deleteService)

export default router