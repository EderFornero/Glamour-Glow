import { Router } from "express";
import nodemailer from "./nodemailer";

 export const nodemailerRouter = Router();
nodemailer.use("/nodemailer", nodemailer) 