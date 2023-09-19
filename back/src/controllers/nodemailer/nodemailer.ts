import { NextFunction, Request, Response } from 'express'
import { transporter } from '../../config/transportmailer'
import 'dotenv/config'
import { findUserByEmailHandler } from '../../handlers/nodemailer'
const { EMAIL_GLAMOUR_GLOW } = process.env
import { WELCOME_HTML, replaceHtml } from './Templates/templatesHtml'

const myemail = EMAIL_GLAMOUR_GLOW

export const sendEmail = async (req: Request, res: Response, next: NextFunction) => {
  const { recipientEmail } = req.body
  try {
    const user = await findUserByEmailHandler(recipientEmail)

    const mail_configs = {
      from: myemail,
      to: JSON.stringify(user.email),
      subject: 'Welcome to our community 🎉',
      html: replaceHtml(WELCOME_HTML, user.name)
    }

    transporter.sendMail(mail_configs, (error: any, info: any) => {
      if (error) {
        console.log('Error ', error)
      } else {
        console.log('Email successfully sent')
        res.status(201).json({ status: 201, info })
      }
    })
  } catch (error) {
    return next(error)
  }
}
