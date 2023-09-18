import { Router } from 'express'
import { schemaValidation } from '../../middlewares/schemaValidator.middleware'
import { createSellerSchema, loginSellerSchema, readAndDeleteSellerSchema, updateSellerSchema, resetSellerPasswordSchema, readAndActiveSellerSchema } from '../../schemas/sellerSchema'
import { getSellersController } from '../../controllers/sellers/getSellers'
import { postSellersController } from '../../controllers/sellers/postSeller'
import { getSellersByIdController } from '../../controllers/sellers/getSellerById'
import { putSellersController } from '../../controllers/sellers/putSeller'
import { disableSellerController } from '../../controllers/sellers/deleteSeller'
import { logInSeller } from '../../controllers/sellers/loginSeller'
import { resetSellerPassword } from '../../controllers/sellers/resetSellerPassword'
import { forgotSellerPassword } from '../../controllers/sellers/forgotSellerPassword'
import { paymentRequest } from '../../controllers/sellers/paymentRequest'
import { visitsLogger } from '../../middlewares/visitsLogger'
import passport from 'passport'
import { createReportSchema } from "../../schemas/reportSchema";
import { postReport } from "../../controllers/reports";

const router = Router()

router.get('/', visitsLogger, getSellersController)
router.get('/:id',visitsLogger, schemaValidation(readAndDeleteSellerSchema), getSellersByIdController)
router.post('/', schemaValidation(createSellerSchema), postSellersController)
router.post('/login',schemaValidation(loginSellerSchema), logInSeller)
router.post("/forgotPassword", forgotSellerPassword)
router.post("/resetPassword/:id/:passwordResetCode",schemaValidation(resetSellerPasswordSchema), resetSellerPassword)
router.post("/payment/:id", paymentRequest)
router.post("/reports",schemaValidation(createReportSchema), postReport)
router.put('/:id', passport.authenticate('jwt', { session: false }), schemaValidation(updateSellerSchema), putSellersController)
router.put('/disable/:id', passport.authenticate('jwt', { session: false }), schemaValidation(readAndDeleteSellerSchema), disableSellerController)
router.put('/enable/:id', passport.authenticate('jwt', { session: false }), schemaValidation(readAndActiveSellerSchema), disableSellerController)

export default router;
