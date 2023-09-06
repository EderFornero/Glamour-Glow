import { UserModel } from "../models"

export const findUserByEmailHandler = async (recipientEmail: string) => {
    const userEmail = await UserModel.findOne({email: recipientEmail})
    if(!userEmail){throw new Error("The email does not wxist")}
    return userEmail;
}