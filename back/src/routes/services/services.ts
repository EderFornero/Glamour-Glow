import { Router } from 'express'
import { deleteService, postService, getService, getServiceById, putService } from '../../controllers/index'
import { schemaValidation } from '../../middlewares/schemaValidator.middleware'
import { createServiceSchema, readAndDeleteServiceSchema, updateServiceSchema } from '../../schemas/serviceSchema'
import passport from 'passport'

const router = Router()

router.get('/', getService)
router.get('/:id', passport.authenticate('jwt', { session: false }), schemaValidation(readAndDeleteServiceSchema), getServiceById)
router.post('/', /*passport.authenticate('jwt',{session: false}),*/ schemaValidation(createServiceSchema), postService)
router.put('/:id', passport.authenticate('jwt', { session: false }), schemaValidation(updateServiceSchema), putService)
router.delete('/:id', passport.authenticate('jwt', { session: false }), schemaValidation(readAndDeleteServiceSchema), deleteService)

export default router
