import { NextFunction, Request, Response } from "express";
import { postSellersHandler } from "../../handlers/sellers.ts";
import { createSellerType } from "../../schemas/sellerSchema.ts";

export const postSellersController = async (
  req: Request<{}, {}, createSellerType>,
  res: Response,
  next: NextFunction
) => {
  const {
    seller_name,
    seller_email,
    seller_phone,
    seller_gender,
    categoriesArray,
    servicesArray,
  } = req.body;
  try {
    const newSeller = await postSellersHandler({
      seller_name,
      seller_email,
      seller_phone,
      seller_gender,
      categoriesArray,
      servicesArray,
    });
    return res.status(200).json(newSeller);
  } catch (error) {
    return next(error);
  }
};
