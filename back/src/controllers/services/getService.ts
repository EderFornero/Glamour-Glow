import { NextFunction, Request, Response } from "express";
import { readServices } from "../../handlers/service";

export const getService = async (
  _req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const service = await readServices();
    return res.status(200).json(service);
  } catch (error) {
    return next(error);
  }
};
