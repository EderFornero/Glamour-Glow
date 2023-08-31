import { Request, Response } from "express"
import {readServices} from "../../controllers/serviceControllers"

export const getService = (_req: Request, res: Response) => {
    try {
        const service = readServices()
        return res.status(200).json(service)
    } catch (error) {
        return res.status(500).send(error)
    }
}
