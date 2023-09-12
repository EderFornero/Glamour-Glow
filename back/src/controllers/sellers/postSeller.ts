import { NextFunction, Request, Response } from "express";
import { postSellersHandler } from "../../handlers/sellers";
import { createSellerType } from "../../schemas/sellerSchema";

export const postSellersController = async (
  req: Request<{}, {}, createSellerType>,
  res: Response,
  next: NextFunction
) => {
  const {
    sellerName,
    sellerEmail,
    sellerPassword,
    role,
    sellerPhone,
    sellerGender,
    categoriesArray,
    servicesArray,
  } = req.body;
  try {
    const newSeller = await postSellersHandler({
      sellerName,
      sellerEmail,
      sellerPassword,
      role,
      sellerPhone,
      sellerGender,
      categoriesArray,
      servicesArray,
    });
    return res.status(200).json({name:newSeller.sellerName,id:newSeller._id, role:newSeller.role});
  } catch (error) {
    return next(error);
  }
};
