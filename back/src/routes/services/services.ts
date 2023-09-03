import {Router}  from "express";
import {deleteService, postService, getService, getServiceById, putService} from "../../controllers/index.ts";
import { schemaValidation } from "../../middlewares/schemaValidator.middleware.ts";
import { createServiceSchema, readAndDeleteServiceSchema, updateServiceSchema } from "../../schemas/serviceSchema.ts";

const router = Router()

router.get("/",getService)
router.get("/:id",schemaValidation(readAndDeleteServiceSchema),getServiceById)
router.post("/", schemaValidation(createServiceSchema),postService)
router.put("/:id",schemaValidation(updateServiceSchema),putService)
router.delete("/:id",schemaValidation(readAndDeleteServiceSchema),deleteService)

export default router