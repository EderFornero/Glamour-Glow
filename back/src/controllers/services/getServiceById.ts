import { readServiceById } from "../../handlers/index.ts";
import { NextFunction, Request, Response } from "express";
import { updateServiceTypeParams } from "../../schemas/serviceSchema.ts";

export const getServiceById = async (
  req: Request<updateServiceTypeParams>,
  res: Response,
  next: NextFunction
) => {
  try {
    const id  = req.params.id;
    const serviceById = await readServiceById(id);
    return res.status(200).json(serviceById);
  } catch (error) {
    return next(error);
  }
};
