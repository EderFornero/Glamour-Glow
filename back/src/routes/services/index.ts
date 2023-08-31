import {Router} from 'express'
import services from './services';

export const serviceRouter = Router()
serviceRouter.use("/services", services)
