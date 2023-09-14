import { Request, Response, NextFunction } from "express";
import { readAndDeleteSellerTypeParams } from "../../schemas/sellerSchema";
import { deleteSellerHandler } from "../../handlers";
export const deleteSellerController = async (
    req: Request<readAndDeleteSellerTypeParams>,
    res: Response,
    next: NextFunction
  ) => {
    const {id}  = req.params;
    try {
      const sellerDeleted = await deleteSellerHandler(id);
      return res.status(200).send(`Seller with id: ${sellerDeleted} was succesfully deleted`);
    } catch (error) {
      return next(error);
    }
  };
  