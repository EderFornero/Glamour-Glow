import { NextFunction, Request, Response } from "express";
import { resetSellerPasswordTypeParams, resetSellerPasswordTypeBody } from "../../schemas/sellerSchema";
import { getSellersByIdHandler, resetSellerPasswordHandler } from "../../handlers";

export const resetSellerPassword = async (
  req: Request<resetSellerPasswordTypeParams, {}, resetSellerPasswordTypeBody>,
  res: Response,
  next: NextFunction
) => {
  const { id, passwordResetCode } = req.params;
  const { sellerPassword } = req.body;
  try {
    const seller = await getSellersByIdHandler(id);
    if(seller==="Seller not found") throw new Error()
    if ( 
      !seller.passwordResetCode ||
      seller.passwordResetCode !== passwordResetCode
    ) {
      return res.status(404).send("Could not reset user password");
    }
    await resetSellerPasswordHandler(id, sellerPassword);

    return res.status(200).send("Successfully updated password");
  } catch (error) {
    return next(error);
  }
};
