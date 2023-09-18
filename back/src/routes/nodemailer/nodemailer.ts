
import { Router } from "express";
import { sendEmail, sendSuccessfulPaymentEmail, sendSuccessfulSaleEmail, sendConfirmedTransferEmail, sendPaymentRequestEmail } from "../../controllers/nodemailer";

const router = Router();
router.post("/welcomeEmail", sendEmail)
router.post("/successfulPayment", sendSuccessfulPaymentEmail)
router.post("/successfulSale", sendSuccessfulSaleEmail)
router.post("/paymentRequested",sendPaymentRequestEmail)
router.post("/confirmedTransfer",sendConfirmedTransferEmail)

export default router; 