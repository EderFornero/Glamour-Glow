import { readServiceById } from "../../handlers/index.ts";
import { NextFunction, Request, Response } from "express";
import { readAndDeleteSellerTypeParams } from "../../schemas/sellerSchema.ts";

export const getServiceById = async (
  req: Request<readAndDeleteSellerTypeParams>,
  res: Response,
  next: NextFunction
) => {
  try {
    const id  = req.params.id;
    const serviceById = await readServiceById(id);
    return res.status(200).json(serviceById);
  } catch (error) {
    return next(error);
  }
};
