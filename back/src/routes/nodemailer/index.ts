import { Router } from "express";
const nodemailer = require('nodemailer')
import "dotenv/config"
const {EMAIL_GLAMOUR_GLOW, PASSWORD_GLAMOUR_GLOW} = process.env


const myemail = EMAIL_GLAMOUR_GLOW;
const mypassword = PASSWORD_GLAMOUR_GLOW;

export const nodemailerRouter = Router();
nodemailerRouter.post("/email", (req, res) => {
  const { recipientEmail } = req.body

  try {
    const transporter = nodemailer.createTransport({
      service: "gmail", 
      auth: {
        user: myemail,
        pass: mypassword,
      },
    })

    const mail_configs = {
      from: myemail,
      to: recipientEmail,
      subject: "Sending email",
      html: '<h3>SUCCESSFULLY SENT</h3>'
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
     res.status(401).json({status: 401, error})
  }

}) 