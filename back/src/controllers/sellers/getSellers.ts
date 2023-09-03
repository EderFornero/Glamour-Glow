import { NextFunction, Request, Response } from "express";
import { getSellersHandler } from "../../handlers/sellers.ts";

export const getSellersController = async (
  _req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const allSellers = await getSellersHandler();
    return res.status(200).json(allSellers);
  } catch (error) {
    return next(error);
  }
};
