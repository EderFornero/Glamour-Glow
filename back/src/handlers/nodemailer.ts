import { UserModel } from "../models"

export const findUserByEmailHandler = async (recipientEmail: string) => {
    const userEmail = await UserModel.findOne({email: recipientEmail})
    if(!userEmail){throw new Error("No user was found under the provided E-mail address")}
    return userEmail;
}