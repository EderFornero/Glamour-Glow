import { Router } from "express";
import { schemaValidation } from "../../middlewares/schemaValidator.middleware";
import {
  CreateUserSchema,
  readAndDeleteUserSchema,
  updateUserSchema,
} from "../../schemas/userSchema";
import {
  deleteUser,
  getUser,
  postUser,
  getUserByid,
  updateUser,
  logInUser,
} from "../../controllers/users/index";

const router = Router();

router.get("/", getUser);
router.get("/:id", schemaValidation(readAndDeleteUserSchema), getUserByid);
router.post("/", schemaValidation(CreateUserSchema), postUser);
router.post("/login", logInUser);
router.put("/:id", schemaValidation(updateUserSchema), updateUser);
router.delete("/:id", schemaValidation(readAndDeleteUserSchema), deleteUser);

export default router;
