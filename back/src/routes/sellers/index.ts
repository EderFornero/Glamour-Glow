import {Router} from 'express'
import sellers from './sellers';

export const sellerRouter = Router()
sellerRouter.use("/sellers", sellers)



