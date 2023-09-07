
import { Router } from "express";
import { sendEmail } from "../../controllers/nodemailer";

const router = Router();


// router.get("/", (req: Request, res:Response) => {
//     sendEmail()
//     .then((response: any) => res.send(response.message))
//     .catch((error) => res.status(500).send(error.message));
// })
router.post("/email", sendEmail)

export default router; 