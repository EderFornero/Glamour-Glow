import { updateService } from "../../handlers";
import { NextFunction, Request, Response } from "express";
import {
  updateServiceType,
  updateServiceTypeParams,
} from "../../schemas/serviceSchema";

export const putService = async (
  req: Request<updateServiceTypeParams, {}, updateServiceType>,
  res: Response,
  next: NextFunction
) => {
  const { id } = req.params;
  const update = req.body;
  try {
    const serviceUpdated = await updateService(id, update);
    return res.status(200).json(serviceUpdated);
  } catch (error) {
    return next(error);
  }
};
