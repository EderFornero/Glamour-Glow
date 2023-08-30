import express from 'express'

const userRouter = express.Router()
import users from './users';

userRouter.use("/users", users)

export default userRouter;