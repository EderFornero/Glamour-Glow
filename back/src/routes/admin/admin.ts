import { Router } from "express";
import { schemaValidation } from "../../middlewares/schemaValidator.middleware";
import { rolePermissions } from "../../middlewares/authorization.middleware";
import passport from "passport";
import { readAndDeleteUserSchema } from "../../schemas/userSchema";
import { readAndDeleteSellerSchema } from "../../schemas/sellerSchema";
import {
  deleteUser,
  deleteSellerController,
  deleteReviewsAdminController,
  deleteServiceAdminController,
  readSellersMetricsController,
  readUsersMetricsController,
  getPagesVisitsController,
  getPaymentsController
} from "../../controllers/admin";
import { deleteReviewSchema } from "../../schemas/reviewSchema";
import { readAndDeleteServiceSchema } from "../../schemas/serviceSchema";
import { deleteReportSchema } from "../../schemas/reportSchema";
import { deleteReport, getReports} from "../../controllers/reports";

const router = Router();

router.get("/payments",
passport.authenticate("jwt", {session: false}),
rolePermissions("admin"),
getPaymentsController)

router.get(
  "/userMetrics",
  passport.authenticate("jwt", { session: false }),
  rolePermissions("admin"),
  readUsersMetricsController
);

router.get(
  "/sellerMetrics",
  passport.authenticate("jwt", { session: false }),
  rolePermissions("admin"),
  readSellersMetricsController
);
router.get("/visits",
 passport.authenticate("jwt", { session: false }),
rolePermissions("admin"),
getPagesVisitsController)

router.delete(
  "/dropUser/:id",
  passport.authenticate("jwt", { session: false }),
  rolePermissions("admin"),
  schemaValidation(readAndDeleteUserSchema),
  deleteUser
);
router.delete(
  "/dropSeller/:id",
  passport.authenticate("jwt", { session: false }),
  rolePermissions("admin"),
  schemaValidation(readAndDeleteSellerSchema),
  deleteSellerController
);

router.delete(
  "/dropReview/:id",
  passport.authenticate("jwt", { session: false }),
  rolePermissions("admin"),
  schemaValidation(deleteReviewSchema),
  deleteReviewsAdminController
);

router.delete(
  "/dropService/:id",
  passport.authenticate("jwt", { session: false }),
  rolePermissions("admin"),
  schemaValidation(readAndDeleteServiceSchema),
  deleteServiceAdminController
);

router.get(
  "/reports",
  passport.authenticate("jwt", { session: false }),
  rolePermissions("admin"),
  getReports
);
router.delete(
  "/reports/:id",
  passport.authenticate("jwt", { session: false }),
  rolePermissions("admin"),
  schemaValidation(deleteReportSchema),
  deleteReport
);

export default router;
