import { Request,Response } from "express"
import { deleteSellerHandler } from "../../handlers"

export const deleteSellerController= async(req: Request, res:Response) => {
    const {id} = req.params
    try {
        const sellerDeleted = await deleteSellerHandler(id)
        return res.status(200).send(sellerDeleted)
    } catch (error) {
        return error
    }
}