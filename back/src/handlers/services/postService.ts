import { Request, Response } from "express"
import { createService } from "../../controllers/serviceControllers"

export const postService = (req: Request, res: Response) => {
    const data = req.body
    try {
        const service = createService(data)
        return res.status(200).json(service)
    } catch (error) {
        return res.status(500).send(error)
    }
}
