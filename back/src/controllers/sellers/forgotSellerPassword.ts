import { NextFunction, Request, Response } from "express";
import { forgotSellerPasswordTypeBody } from "../../schemas/sellerSchema";
import { forgotSellerPasswordHandler } from "../../handlers";
import { nanoid } from "nanoid";
import {
  PASSWORD_RECOVERY,
  replaceHtml,
} from "../nodemailer/Templates/templatesHtml";
import { transporter } from "../../config/transportmailer";
import 'dotenv/config'
const { FRONT_FORGOT_PASSWORD_URL} = process.env

export const forgotSellerPassword = async (
  req: Request<{}, {}, forgotSellerPasswordTypeBody>,
  res: Response,
  next: NextFunction
) => {
  const message =
    "If a user with that email is registered you will recieve a password reset email";
  const { sellerEmail } = req.body;

  try {
    const seller = await forgotSellerPasswordHandler(sellerEmail );

    if (!seller) {
      console.debug(`Seller with email ${sellerEmail } does not exists`);
      return res.status(404).send(message);
    }
    const passwordResetCode = nanoid();
    seller.passwordResetCode = passwordResetCode;

    await seller.save();

    const mail_configs = {
      from: "glamourglowpf@gmail.com",
      to: JSON.stringify(sellerEmail),
      subject: 'Password recovery',
      html: replaceHtml(PASSWORD_RECOVERY, `${FRONT_FORGOT_PASSWORD_URL}resetPasswordSeller?key=${seller.passwordResetCode}&email=${seller.sellerEmail}&id=${seller._id}`)
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