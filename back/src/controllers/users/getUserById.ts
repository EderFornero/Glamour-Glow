import { readUserById } from "../../handlers";
import { NextFunction, Request, Response } from "express";
import { readAndDeleteUserType } from "../../schemas/userSchema";

export const getUserByid = async (
  req: Request<readAndDeleteUserType>,
  res: Response,
  next: NextFunction
) => {
  try {
    const id  = req.params.id;
    const user = await readUserById(id);
    if (!user || !user.isActive) {
      return res.status(404).send({ message: "User not found" });
    }

    return res.status(200).json(user);
  } catch (error) {
    return next(error);
  }
};
