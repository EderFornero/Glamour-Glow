import { readServiceById } from "../../handlers/index.ts"
import { Request,Response } from "express"

export const getServiceById = async(req: Request,res : Response) => {
    try {
        const {id} = req.params
        const serviceById = await readServiceById(id)
        return res.status(200).json(serviceById)
    } catch (error) {
        return error
    }
}
