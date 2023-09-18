import { NextFunction,Request, Response } from "express"
import { transporter } from "../../config/transportmailer";
import { PAYMENT_REQUEST, replaceHtml } from "./Templates/templatesHtml";
import "dotenv/config"
const {EMAIL_GLAMOUR_GLOW} = process.env

export const sendPaymentRequestEmail = async (req:Request, res:Response, next:NextFunction) => {
    
    const {sellerName, sellerPhone ,accountBalance} = req.body

    try {
       
        const mail_configs = {
            from: EMAIL_GLAMOUR_GLOW,
            to: JSON.stringify(EMAIL_GLAMOUR_GLOW),
            subject: "A Payment has been requested 💵",
            html: replaceHtml(PAYMENT_REQUEST, sellerName, accountBalance,sellerPhone) 
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