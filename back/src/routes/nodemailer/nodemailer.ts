
import { Router } from "express";
import { sendEmail, sendSuccessfulPaymentEmail, sendSuccessfulSaleEmail } from "../../controllers/nodemailer";

const router = Router();
router.post("/welcomeEmail", sendEmail)
router.post("/successfulPayment", sendSuccessfulPaymentEmail)
router.post("/successfulSale", sendSuccessfulSaleEmail)

export default router; 