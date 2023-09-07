import {NextFunction, Request, Response} from "express"
import { transporter } from "../../config/transportmailer";
import "dotenv/config"
import { findUserByEmailHandler } from "../../handlers/nodemailer";
const {EMAIL_GLAMOUR_GLOW} = process.env
import { PASSWORD_RECOVERY } from "./Templates/WelcomeHtml";

const myemail = EMAIL_GLAMOUR_GLOW;

export const sendEmail = async (req: Request, res: Response, next: NextFunction) => {

    const {recipientEmail, subject} = req.body
    try {
        const userEmail = await findUserByEmailHandler(recipientEmail)
       
        const mail_configs = {
            from: myemail,
            to: JSON.stringify(userEmail),
            subject: subject,
            html: PASSWORD_RECOVERY 
          };
      
          transporter.sendMail(mail_configs, (error: any, info: any) => {
            if(error) {
              console.log("Error ", error)
            }else {
              console.log("Email successfully sent")
               res.status(201).json({status: 201, info})
            }
            
          })
       
    } catch (error) {
        return next(error)
    }

}