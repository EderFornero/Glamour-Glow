import { updateService } from "../../handlers"
import { Request,Response } from "express"
import { updateServiceType, updateServiceTypeParams } from "../../schemas/serviceSchema"

export const putService = async (req:Request<updateServiceTypeParams,{},updateServiceType>, res: Response) => {
        const {id} = req.params
        const update = req.body
        try {
            const serviceUpdated = await updateService(id, update)
            return res.status(200).json(serviceUpdated)
        } catch (error) {
            return error
        }
}
