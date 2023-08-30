import express from 'express'

const sellerRouter = express.Router()
import sellers from './sellers';

sellerRouter.use("/sellers", sellers)

export default sellerRouter;