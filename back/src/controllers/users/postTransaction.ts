import { Request, Response, NextFunction } from "express";
import { createPaymentsSchemaType } from "../../schemas/paymentsSchema";
import { postTransactionsHandler } from "../../handlers";

export const postTransactions = async (
  req: Request<{}, {}, createPaymentsSchemaType>,
  res: Response,
  next: NextFunction
) => {
  try {
    const { transactionId, userId, sellerId, status, price } = req.body;
    const savePayment = await postTransactionsHandler({
      transactionId,
      userId,
      sellerId,
      status,
      price
    });
    return res.status(200).json(savePayment);
  } catch (error) {
    return next(error);
  }
};
