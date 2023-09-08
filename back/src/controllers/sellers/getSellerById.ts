import { getSellersByIdHandler } from "../../handlers/index";
import { NextFunction, Request, Response } from "express";
import { readAndDeleteSellerTypeParams } from "../../schemas/sellerSchema";


export const getSellersByIdController = async (
  req: Request<readAndDeleteSellerTypeParams>,
  res: Response,
  next: NextFunction
) => {
  try {
    const id = req.params.id;
    const sellerById = await getSellersByIdHandler(id);
    return res.status(200).json(sellerById);
  } catch (error) {
    return next(error);
  }
};
