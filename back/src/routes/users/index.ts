import {Router} from 'express'
import users from './users.ts';

export const userRouter = Router()
userRouter.use("/users", users)

