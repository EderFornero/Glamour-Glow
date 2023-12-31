import { patchSellerImages, putSellersHandler } from "../../handlers";
import { NextFunction, Request, Response } from "express";
import {
  updateSellerTypeBody,
  updateSellerTypeParams,
} from "../../schemas/sellerSchema";

export const putSellersController = async (
  req: Request<updateSellerTypeParams, {}, updateSellerTypeBody>,
  res: Response,
  next: NextFunction
) => {
  const { id } = req.params;
  const update = req.body;
  const {images, ...restoOfUpdateBody} = update
  try {
    if(images?.length){
      await patchSellerImages(id , images)
    }
    const sellerUpdated = await putSellersHandler(id, restoOfUpdateBody);
    return res.status(200).json(sellerUpdated);
  } catch (error) {
    return next(error);
  }
};
