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
  putUser,
  logInUser,
} from "../../controllers/users/index";
<<<<<<< HEAD
//import { rolePermissions } from "../../middlewares/rolePermissions.middleware";
=======
import { rolePermissions } from "../../middlewares/rolePermissions.middleware";
>>>>>>> 099e852aa3bcdbe60cd5173811f671b3505a7e10
import passport from "passport";

const router = Router();

router.get("/", passport.authenticate("jwt", { session: false }), getUser);
router.get(
  "/:id",
  passport.authenticate("jwt", { session: false }),
<<<<<<< HEAD
  //rolePermissions("customer"),
=======
  rolePermissions("customer"),
>>>>>>> 099e852aa3bcdbe60cd5173811f671b3505a7e10
  schemaValidation(readAndDeleteUserSchema),
  getUserByid
);
router.post("/", schemaValidation(CreateUserSchema), postUser);
router.post("/login", logInUser);

router.put(
  "/:id",
  passport.authenticate("jwt", { session: false }),
  rolePermissions("customer"),
  schemaValidation(updateUserSchema),
  putUser
);
router.delete(
  "/:id",
  passport.authenticate("jwt", { session: false }),
  rolePermissions("customer"),
  schemaValidation(readAndDeleteUserSchema),
  deleteUser
);

export default router;
