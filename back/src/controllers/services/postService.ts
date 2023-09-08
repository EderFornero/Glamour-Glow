import { Request, Response, NextFunction } from 'express'
import { createService } from '../../handlers/service'
import { createServiceType } from '../../schemas/serviceSchema'

export const postService = async (req: Request<{}, {}, createServiceType>, res: Response, next: NextFunction) => {
  const { name, description, serviceCategories, price, seller, rating } = req.body
  try {
    const service = await createService({
      name,
      description,
      serviceCategories,
      price,
      seller,
      rating
    })
    return res.status(200).json(service)
  } catch (error) {
    return next(error)
  }
}
