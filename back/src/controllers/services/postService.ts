import { Request, Response, NextFunction } from "express"
import { createService } from "../../handlers/service"

export const postService = async (req: Request, res: Response, next: NextFunction) => {
    const data = req.body
    try {
        const service = await createService(data)
        return res.status(200).json(service)
    } catch (error) {
       return next(error)
    }
}
