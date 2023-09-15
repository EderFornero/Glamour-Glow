import { Request, Response} from "express";
import { decreaseSellerAccount } from "../../handlers";

export const paymentRequest = async (req:Request, res:Response) => {
    const {payment}   = req.body
    const {id} = req.params
    try {
    await decreaseSellerAccount(id, payment)
    const message = `$${payment} has been deducted from your account`
    res.status(200).send(message)
    } catch (error:any) {
    res.status(400).send({message:error.message})
    }
}