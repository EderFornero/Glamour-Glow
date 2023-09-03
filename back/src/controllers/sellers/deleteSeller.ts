import { NextFunction, Request, Response } from "express";
import { deleteSellerHandler } from "../../handlers";
import { readAndDeleteSellerTypeParams } from "../../schemas/sellerSchema";

export const deleteSellerController = async (
  req: Request<readAndDeleteSellerTypeParams>,
  res: Response,
  next: NextFunction
) => {
  const id  = req.params.id;
  try {
    const sellerDeleted = await deleteSellerHandler(id);
    return res.status(200).send(sellerDeleted);
  } catch (error) {
    return next(error);
  }
};
