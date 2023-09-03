import { Request, Response, NextFunction } from "express";
import { destroyService } from "../../handlers";
import { updateServiceTypeParams } from "../../schemas/serviceSchema";

export const deleteService = async (
  req: Request<updateServiceTypeParams>,
  res: Response,
  next: NextFunction
) => {
  const {id}  = req.params;
  try {
    const serviceDeleted = await destroyService(id);
    return res
      .status(200)
      .send(`Service with id: ${serviceDeleted} was succesfully deleted`);
  } catch (error) {
    return next(error);
  }
};
