import {Router} from 'express'
import users from './users';

export const userRouter = Router()
userRouter.use("/users", users)

