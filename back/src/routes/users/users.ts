import express  from "express";
import { schemaValidation } from "../../middlewares/schemaValidator.middleware";
import { userSchema } from "../../schemas/userSchema";
import {deleteUser, getUser, postUser, updateUser} from "../../handlers/users/index"

const router = express.Router()

router.get("/", schemaValidation(userSchema), getUser)
/* router.get("/:id", schemaValidation(userSchema), getUserById) */
router.post("/", schemaValidation(userSchema), postUser)
router.put("/:id", schemaValidation(userSchema), updateUser)
router.delete("/:id", schemaValidation(userSchema), deleteUser)

export default router