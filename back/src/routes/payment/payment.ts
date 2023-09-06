import { Router } from "express";
import { paymentOrder, paymentSucessorder, paymentWebHook, paymentFailure, paymentPending } from "../../controllers/payment";

const router = Router();
router.post("/order", paymentOrder);
router.get("/sucess", paymentSucessorder);
router.get("/webhook", paymentWebHook);
router.get("/pending", paymentPending);
router.get("/failure", paymentFailure);



export default router;