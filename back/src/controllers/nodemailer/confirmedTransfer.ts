import { NextFunction,Request, Response } from "express"
import { transporter } from "../../config/transportmailer";
import { CONFIRMED_TRANSFER, replaceHtml } from "./Templates/templatesHtml";
import "dotenv/config"
const {EMAIL_GLAMOUR_GLOW} = process.env

export const sendConfirmedTransferEmail = async (req:Request, res:Response, next:NextFunction) => {
    
    const {sellerEmail, sellerName, accountBalance} = req.body

    try {
       
        const mail_configs = {
            from: EMAIL_GLAMOUR_GLOW,
            to: JSON.stringify(sellerEmail),
            subject: "Your payment has been successfully transferred 💵",
            html: replaceHtml(CONFIRMED_TRANSFER, sellerName, accountBalance) 
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