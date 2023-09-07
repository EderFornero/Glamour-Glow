import { NextFunction, Request, Response } from "express";
import { resetPasswordType } from "../../schemas/userSchema";
import { readUserById } from "../../handlers";

export const resetPassword = async (req: Request<resetPasswordType["params"], {}, resetPasswordType["body"]>, res: Response, next: NextFunction) => {

    const { id, passwordResetCode } = req.params
    const { password } = req.body
    try {
        const user = await readUserById(id)
        console.log(user)
        if (!user.passwordResetCode || user.passwordResetCode !== passwordResetCode) {
            return res.status(404).send("Could not reset user password")
        }

        if (user.passwordResetCode !== null) {
            user.passwordResetCode = null
        }


        user.password = password


        return res.status(200).send("Successfully updated password")

    } catch (error) {
        return next(error)
    }


}