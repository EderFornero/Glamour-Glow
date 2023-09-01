import { Request, Response } from "express"
import {readServices} from "../../handlers/service"

export const getService = async (_req: Request, res: Response) => {
    try {
        const service = await readServices()
        return res.status(200).json(service)
    } catch (error) {
        return res.status(500).send(error)
    }
}
 