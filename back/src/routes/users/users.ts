import { Router } from "express";
import { schemaValidation } from "../../middlewares/schemaValidator.middleware";
import {
  CreateUserSchema,
  loginUserSchema,
  readAndDeleteUserSchema,
  resetPasswordSchema,
  updateUserSchema,
  readAndReActiveUserSchema
} from "../../schemas/userSchema";
import {
  disableUser,
  getUser,
  postUser,
  getUserByid,
  putUser,
  logInUser,
  logInUserGoogle,
  forgotPassword,
} from "../../controllers/users/index";
import { rolePermissions } from "../../middlewares/authorization.middleware";
import passport from "passport";
import { resetPassword } from "../../controllers/users/resetPassword";
import { enableUser } from "../../controllers/users/reActiveUser";
import { visitsLogger } from "../../middlewares/visitsLogger";

const router = Router();

router.get("/",  getUser);
router.get(
  "/:id",
  passport.authenticate("jwt", { session: false }),
  rolePermissions("customer"),
  schemaValidation(readAndDeleteUserSchema),
  getUserByid
);
router.post("/forgotPassword", forgotPassword)
router.post("/resetPassword/:id/:passwordResetCode",schemaValidation(resetPasswordSchema), resetPassword)
router.post("/", visitsLogger, schemaValidation(CreateUserSchema), postUser);
router.post("/login",schemaValidation(loginUserSchema) ,logInUser);
router.post("/auth/login", logInUserGoogle);
router.put(
  "/:id",
  passport.authenticate("jwt", { session: false }),
  rolePermissions("customer"),
  schemaValidation(updateUserSchema),
  putUser
);
router.put(
  "/disable/:id",
  passport.authenticate("jwt", { session: false }),
  rolePermissions("admin"),
  schemaValidation(readAndDeleteUserSchema),
  disableUser
);
router.put("/enable/:id",passport.authenticate("jwt", { session: false }),
rolePermissions("customer"),
schemaValidation(readAndReActiveUserSchema),
enableUser)


export default router;
