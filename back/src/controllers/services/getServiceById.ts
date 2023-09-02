import { readServiceById } from "../../handlers/index.ts"
import { Request,Response } from "express"
import { updateServiceTypeParams } from "../../schemas/serviceSchema.ts"

export const getServiceById = async(req: Request<updateServiceTypeParams>,res : Response) => {
    try {
        const {id} = req.params
        const serviceById = await readServiceById(id)
        return res.status(200).json(serviceById)
    } catch (error) {
        return error
    }
}
