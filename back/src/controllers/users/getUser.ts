import { readUsersService } from "../../handlers";
import { NextFunction, Request, Response } from "express";

export const getUser = async (
  _req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const allUsers = await readUsersService();
    res.status(200).send(allUsers);
  } catch (error) {
    return next(error);
  }
};
