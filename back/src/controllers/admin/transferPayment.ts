import { Request, Response} from "express";
import { transferPaymentHandler } from "../../handlers";

export const transferPayment = async (req:Request, res:Response) => {
    const {payment}   = req.body
    const {id} = req.params
    try {
    await transferPaymentHandler(id, payment)
    const message = `$${payment} has been deducted from your account`
    res.status(200).send(message)
    } catch (error:any) {
    res.status(400).send({message:error.message})
    }
}