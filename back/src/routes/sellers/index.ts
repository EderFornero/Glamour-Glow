import express from 'express'

const sellerRouter = express.Router()
import sellers from './sellers';

sellerRouter.use("/sellers", sellers)

module.exports = sellerRouter;