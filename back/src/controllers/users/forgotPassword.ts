import { Request, Response } from "express"
import { forgotPasswordTypeBody } from "../../schemas/userSchema"
import { forgotPasswordHandler } from "../../handlers";
import {nanoid} from "nanoid"
import { sendEmail } from "../nodemailer";
export const forgotPassword = async (req: Request<{},{},forgotPasswordTypeBody> , res: Response) => {
    
    const message = "If a user with that email is registered you will recieve a password reset email"
    const {email} = req.body;

    const user = await forgotPasswordHandler(email)

    if(!user){
       console.debug(`User with email ${email} does not exists`)
        return res.send(message)
    }
    const passwordResetCode = nanoid()

    user.passwordResetCode = passwordResetCode

    await user.save()

    await sendEmail({
        to: user.email,
        from: "glamourglowpf@gmail.com"
    })

}