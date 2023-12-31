import { Router } from 'express'
import { schemaValidation } from '../../middlewares/schemaValidator.middleware'
import { createSellerSchema, loginSellerSchema, readAndDeleteSellerSchema, updateSellerSchema, resetSellerPasswordSchema, readAndActiveSellerSchema } from '../../schemas/sellerSchema'
import { getSellersController } from '../../controllers/sellers/getSellers'
import { postSellersController } from '../../controllers/sellers/postSeller'
import { getSellersByIdController } from '../../controllers/sellers/getSellerById'
import { putSellersController } from '../../controllers/sellers/putSeller'
import { logInSeller } from '../../controllers/sellers/loginSeller'
import { resetSellerPassword } from '../../controllers/sellers/resetSellerPassword'
import { forgotSellerPassword } from '../../controllers/sellers/forgotSellerPassword'
import { visitsLogger } from '../../middlewares/visitsLogger'
import passport from 'passport'
import { postReport } from '../../controllers/reports'
import { createReportSchema } from '../../schemas/reportSchema'
import { enableSellerHandler } from '../../handlers'
import { getClientsController } from '../../controllers/sellers/getClients'
import { disableSeller } from '../../controllers/sellers'
import { rolePermissions } from "../../middlewares/authorization.middleware";

const router = Router()

router.get('/', visitsLogger, getSellersController)
router.get('/:id',visitsLogger, schemaValidation(readAndDeleteSellerSchema), getSellersByIdController)
router.get('/:id/clients', visitsLogger, passport.authenticate('jwt', { session: false }), rolePermissions("seller"), getClientsController)
router.post('/', schemaValidation(createSellerSchema), postSellersController)
router.post('/login',schemaValidation(loginSellerSchema), logInSeller)
router.post("/forgotPassword", forgotSellerPassword)
router.post("/resetPassword/:id/:passwordResetCode",schemaValidation(resetSellerPasswordSchema), resetSellerPassword)
router.post("/reports",passport.authenticate('jwt', { session: false }), rolePermissions("seller"),schemaValidation(createReportSchema), postReport)
router.put('/:id', passport.authenticate('jwt', { session: false }), rolePermissions("seller"), schemaValidation(updateSellerSchema), putSellersController)
router.put('/disable/:id', passport.authenticate('jwt', { session: false }), schemaValidation(readAndDeleteSellerSchema), disableSeller)
router.put('/enable/:id', passport.authenticate('jwt', { session: false }), schemaValidation(readAndActiveSellerSchema), enableSellerHandler)
export default router;
