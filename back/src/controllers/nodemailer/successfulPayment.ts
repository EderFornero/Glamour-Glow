import { NextFunction,Request, Response } from "express"
import { transporter } from "../../config/transportmailer";
import { SUCCESSFUL_PAYMENT, replaceHtml } from "./Templates/templatesHtml";
import "dotenv/config"
const {EMAIL_GLAMOUR_GLOW} = process.env

export const sendSuccessfulPaymentEmail = async (req:Request, res:Response, next:NextFunction) => {
    
    const {userEmail, price, sellerEmail, sellerPhone, sellerName, service} = req.body

    try {
       
         const mail_configs = {
            from: EMAIL_GLAMOUR_GLOW,
            to: JSON.stringify(userEmail),
            subject: "Purchase Confirmed 🎉",
            html: replaceHtml(SUCCESSFUL_PAYMENT, sellerName, service, price, sellerEmail, sellerPhone) 
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