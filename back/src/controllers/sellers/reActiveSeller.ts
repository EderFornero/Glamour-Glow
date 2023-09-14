import { enableSellerHandler } from "../../handlers";
import { NextFunction,Response,Request } from "express";
import { readAndActiveSellerTypeParams } from "../../schemas/sellerSchema";

export const enableUser = async (
  req: Request<readAndActiveSellerTypeParams>,
  res: Response,
  next: NextFunction
) => {
  try {
    const {id} = req.params
    const activeSeller = await enableSellerHandler(id)
    return res.status(200).send(activeSeller);
  } catch (error) {
    return next(error)
  }
}