import { Router } from "express";
import { schemaValidation } from "../../middlewares/schemaValidator.middleware.ts";
import {
  createSellerSchema,
  readAndDeleteSellerSchema,
  updateSellerSchema,
} from "../../schemas/sellerSchema.ts";
import { getSellersController } from "../../controllers/sellers/getSellers.ts";
import { postSellersController } from "../../controllers/sellers/postSeller.ts";
import { getSellersByIdController } from "../../controllers/sellers/getSellerById.ts";
import { putSellersController } from "../../controllers/sellers/putSeller.ts";
import { deleteSellerController } from "../../controllers/sellers/deleteSeller.ts";
import passport from "passport";
const router = Router();

router.get("/", getSellersController);
router.get(
  "/:id",
  schemaValidation(readAndDeleteSellerSchema),
  getSellersByIdController
);
router.post(
  "/",
  passport.authenticate("jwt", { session: false }),
  schemaValidation(createSellerSchema),
  postSellersController
);
router.put(
  "/:id",
  passport.authenticate("jwt", { session: false }),
  schemaValidation(updateSellerSchema),
  putSellersController
);
router.delete(
  "/:id",
  passport.authenticate("jwt", { session: false }),
  schemaValidation(readAndDeleteSellerSchema),
  deleteSellerController
);

export default router;
