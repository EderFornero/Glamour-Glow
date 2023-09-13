import { Router } from 'express'
import { schemaValidation } from '../../middlewares/schemaValidator.middleware'
import { createSellerSchema, loginSellerSchema, readAndDeleteSellerSchema, updateSellerSchema, resetSellerPasswordSchema } from '../../schemas/sellerSchema'
import { getSellersController } from '../../controllers/sellers/getSellers'
import { postSellersController } from '../../controllers/sellers/postSeller'
import { getSellersByIdController } from '../../controllers/sellers/getSellerById'
import { putSellersController } from '../../controllers/sellers/putSeller'
import { deleteSellerController } from '../../controllers/sellers/deleteSeller'
import { logInSeller } from '../../controllers/sellers/loginSeller'
import { resetSellerPassword } from '../../controllers/sellers/resetSellerPassword'
import { forgotSellerPassword } from '../../controllers/sellers/forgotSellerPassword'
import passport from 'passport'

const router = Router()

router.get('/', getSellersController)
router.get('/:id', schemaValidation(readAndDeleteSellerSchema), getSellersByIdController)
router.post('/', schemaValidation(createSellerSchema), postSellersController)
router.post('/login',schemaValidation(loginSellerSchema), logInSeller)
router.post("/forgotPassword", forgotSellerPassword)
router.post("/resetPassword/:id/:passwordResetCode",schemaValidation(resetSellerPasswordSchema), resetSellerPassword)
router.put('/:id',/*  passport.authenticate('jwt', { session: false }), */ schemaValidation(updateSellerSchema), putSellersController)
router.delete('/:id',  passport.authenticate('jwt', { session: false }), schemaValidation(readAndDeleteSellerSchema), deleteSellerController)

export default router
