import { Router, Request, Response } from "express";
import  {sendEmail}  from "../../controllers/nodemailer/postEmail";
const router = Router();


// router.get("/", (req: Request, res:Response) => {
//     sendEmail()
//     .then((response: any) => res.send(response.message))
//     .catch((error) => res.status(500).send(error.message));
// })
router.post("/send_email", (req: Request, res: Response) => {
    sendEmail(req.body)
    .then((response:any) => res.send(response.message))
    .catch((error) => res.status(500).send(error.message));
    res.send("SENT")
})

export default router;