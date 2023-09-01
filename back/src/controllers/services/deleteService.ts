import { Request,Response } from "express"
import { destroyService } from "../../handlers"


export const deleteService = async(req: Request, res:Response) => {
    const {id} = req.params
    try {
        const serviceDeleted = await destroyService(id)
        return res.status(200).send(serviceDeleted)
    } catch (error) {
        return error
    }
}