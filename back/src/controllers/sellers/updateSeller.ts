import { putSellersHandler } from "../../handlers"
import { Request,Response } from "express"

export const putSellersController = async (req:Request, res: Response) => {
        const {id} = req.params
        const update = req.body
        try {
            const sellerUpdated = await putSellersHandler(id, update)
            return res.status(200).json(sellerUpdated)
        } catch (error) {
            return error
        }
}
