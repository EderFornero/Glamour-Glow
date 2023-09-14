import { Router } from "express";
import reviews from "./reviews"

 export const reviewsRouter = Router()
reviewsRouter.use("/reviews", reviews)