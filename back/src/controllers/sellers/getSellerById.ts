import { getSellersByIdHandler } from "../../handlers/index.ts"
import { Request,Response } from "express"

export const getSellersByIdController = async(req: Request,res : Response) => {
    try {
        const {id} = req.params
        const sellerById = await getSellersByIdHandler(id)
        return res.status(200).json(sellerById)
    } catch (error) {
        return error
    }
}
