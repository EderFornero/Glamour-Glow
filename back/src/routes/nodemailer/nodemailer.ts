
import { Router } from "express";
import { sendEmail } from "../../controllers/nodemailer";

const router = Router();
router.post("/welcomeEmail", sendEmail)

export default router; 