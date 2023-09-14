import { NextFunction,Request, Response } from "express"
import { transporter } from "../../config/transportmailer";
import { SUCCESSFUL_SALE, replaceHtml } from "./Templates/templatesHtml";
import "dotenv/config"
const {EMAIL_GLAMOUR_GLOW} = process.env

export const sendSuccessfulSaleEmail = async (req:Request, res:Response, next:NextFunction) => {
    
    const { userName ,service, price, userEmail, userPhone, sellerEmail} = req.body

    try {
       
         const mail_configs = {
            from: EMAIL_GLAMOUR_GLOW,
            to: JSON.stringify(sellerEmail),
            subject: "Sale Confirmed 🎉",
            html: replaceHtml(SUCCESSFUL_SALE, userName ,service, price, userEmail, userPhone) 
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