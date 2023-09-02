import { Request, Response, NextFunction } from "express"
import { createService } from "../../handlers/service"
import { createServiceType } from "../../schemas/serviceSchema"

export const postService = async (req: Request<{},{}, createServiceType>, res: Response, _next: NextFunction) => {
    const {name, description, serviceCategories, price, rating,seller} = req.body
    try {
        const service = await createService({name, description, serviceCategories, price, rating, seller})
        return res.status(200).json(service)
    } catch (error) {
       return res.status(400).send(error)
    }
}
