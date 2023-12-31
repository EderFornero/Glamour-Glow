import { NextFunction, Request, Response } from "express";
import { forgotPasswordTypeBody } from "../../schemas/userSchema";
import { forgotPasswordHandler } from "../../handlers";
import { nanoid } from "nanoid";
import {
  PASSWORD_RECOVERY,
  replaceHtml,
} from "../nodemailer/Templates/templatesHtml";
import { transporter } from "../../config/transportmailer";
import "dotenv/config"
const {FRONT_FORGOT_PASSWORD_URL} = process.env

export const forgotPassword = async (
  req: Request<{}, {}, forgotPasswordTypeBody>,
  res: Response,
  next: NextFunction
) => {
  const message =
    "If a user with that email is registered you will recieve a password reset email";
  const { email } = req.body;

  try {
    const user = await forgotPasswordHandler(email);

    if (!user) {
      console.debug(`User with email ${email} does not exists`);
      return res.status(404).send(message);
    }
    const passwordResetCode = nanoid();
    user.passwordResetCode = passwordResetCode;

    await user.save();
    console.log(user);
    const mail_configs = {
      from: "glamourglowpf@gmail.com",
      to: JSON.stringify(user.email),
      subject: 'Password recovery',
      html: replaceHtml(PASSWORD_RECOVERY, `${FRONT_FORGOT_PASSWORD_URL}resetPassword?key=${user.passwordResetCode}&email=${user.email}&id=${user._id}`)
    }

    transporter.sendMail(mail_configs, (error: any, info: any) => {
      if (error) {
        return res.status(400).send(error);
      } else {
        console.log("Email successfully sent");
        return res.status(201).json({ status: 201, info });
      }
    });
  } catch (error) {
    return next(error);
  }
};
