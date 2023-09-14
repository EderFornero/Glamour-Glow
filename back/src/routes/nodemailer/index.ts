import { Router } from "express";
import nodemailer from "./nodemailer"

export const nodemailerRouter = Router();
nodemailerRouter.use("/", nodemailer); 
