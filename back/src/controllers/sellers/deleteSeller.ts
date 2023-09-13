import { NextFunction, Request, Response } from "express";
import { disableSellerHandler } from "../../handlers";
import { readAndDeleteSellerTypeParams } from "../../schemas/sellerSchema";

export const disableSellerController = async (
  req: Request<readAndDeleteSellerTypeParams>,
  res: Response,
  next: NextFunction
) => {
  const id  = req.params.id;
  try {
    const sellerDeleted = await disableSellerHandler(id);
    return res.status(200).send(sellerDeleted);
  } catch (error) {
    return next(error);
  }
};
export const deleteSellerController = async (
  req: Request<readAndDeleteSellerTypeParams>,
  res: Response,
  next: NextFunction
) => {
  const {id}  = req.params;
  try {
    const sellerDeleted = await disableSellerHandler(id);
    return res.status(200).send(`Seller with id: ${sellerDeleted} was succesfully deleted`);
  } catch (error) {
    return next(error);
  }
};

