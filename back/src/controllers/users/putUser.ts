import { updateUserService } from "../../handlers";
import { NextFunction, Request, Response } from "express";
import {
  updateUserTypeBody,
  updateUserTypeParams,
} from "../../schemas/userSchema";

export const updateUser = async (
  req: Request<updateUserTypeParams, {}, updateUserTypeBody>,
  res: Response,
  next: NextFunction
) => {
  try {
    const { id } = req.params;
    const update = req.body;
    const updatedUser = await updateUserService(id, update);
    res.status(200).json(updatedUser);
  } catch (error) {
    return next(error);
  }
};
