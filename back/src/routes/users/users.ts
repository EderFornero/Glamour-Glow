import { Router } from "express";
import { schemaValidation } from "../../middlewares/schemaValidator.middleware";
import { CreateUserSchema, updateUserSchema } from "../../schemas/userSchema";
import {
  deleteUser,
  getUser,
  postUser,
  getUserByid,
  updateUser,
} from "../../controllers/users/index";

const router = Router();

router.get("/", getUser);
router.get("/:id", getUserByid);
router.post("/", schemaValidation(CreateUserSchema), postUser);
router.put("/:id", schemaValidation(updateUserSchema), updateUser);
router.delete("/:id", deleteUser);

export default router;
