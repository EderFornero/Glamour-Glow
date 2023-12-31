import { NextFunction, Request, Response } from "express";
import { disableSellerHandler } from "../../handlers";
import { readAndDeleteSellerTypeParams } from "../../schemas/sellerSchema";

export const disableSeller = async (
  req: Request<readAndDeleteSellerTypeParams>,
  res: Response,
  next: NextFunction
) => {
  const {id}  = req.params
  try {
    const sellerDeleted = await disableSellerHandler(id);
    return res.status(200).send(sellerDeleted);
  } catch (error) {
    return next(error);
  }
};

