import { Router } from "express";
import { schemaValidation } from "../../middlewares/schemaValidator.middleware";
import {
  createSellerSchema,
  readAndDeleteSellerSchema,
  updateSellerSchema,
} from "../../schemas/sellerSchema";
import { getSellersController } from "../../controllers/sellers/getSellers";
import { postSellersController } from "../../controllers/sellers/postSeller";
import { getSellersByIdController } from "../../controllers/sellers/getSellerById";
import { putSellersController } from "../../controllers/sellers/putSeller";
import { deleteSellerController } from "../../controllers/sellers/deleteSeller";
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
