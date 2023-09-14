import { Router } from "express";
import payment from "./payment";

export const paymentRouter = Router();
paymentRouter.use("/payment", payment)



