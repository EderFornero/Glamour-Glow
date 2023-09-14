import { Router } from "express";
import admin from "./admin"

export const adminRouter = Router();
adminRouter.use("/admin", admin)