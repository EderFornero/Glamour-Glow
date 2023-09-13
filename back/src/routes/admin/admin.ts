import { Router } from "express";
import { schemaValidation } from "../../middlewares/schemaValidator.middleware";
import { rolePermissions } from "../../middlewares/authorization.middleware";
import passport from "passport"
import { readAndDeleteUserSchema } from "../../schemas/userSchema";
import { readAndDeleteSellerSchema } from "../../schemas/sellerSchema";
import { deleteUser, deleteSellerController } from "../../controllers/admin";
const router = Router()

router.delete("/dropUser/:id", passport.authenticate("jwt", {session: false}),
rolePermissions("customer"),
schemaValidation(readAndDeleteUserSchema),
deleteUser
);
router.delete("/dropSeller/:id", passport.authenticate("jwt", {session: false}), schemaValidation(readAndDeleteSellerSchema), deleteSellerController )

export default router