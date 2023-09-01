import { updateService } from "../../handlers"
import { Request,Response } from "express"

export const putService = async (req:Request, res: Response) => {
        const {id} = req.params
        const update = req.body
        try {
            const serviceUpdated = await updateService(id, update)
            return res.status(200).json(serviceUpdated)
        } catch (error) {
            return error
        }
}
