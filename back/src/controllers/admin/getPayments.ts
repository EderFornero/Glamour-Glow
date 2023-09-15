import { Request, Response, NextFunction } from "express";
import { getPayments } from "../../handlers";

export const getPaymentsController = async (_req: Request, res: Response, next: NextFunction) => {
    try {
        const allPayments = await getPayments()
        if(!allPayments){
            return res.status(404).send("Error while trying to reach payments")
        }
        return res.status(200).json(allPayments)
    } catch (error) {
        return next(error)
    }
}