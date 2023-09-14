import { reActiveUser } from "../../handlers";
import { NextFunction,Response,Request } from "express";
import { readAndReActiveUserType } from "../../schemas/userSchema";

export const enableUser = async (
  req: Request<readAndReActiveUserType>,
  res: Response,
  next: NextFunction
) => {
  try {
    const {id} = req.params
    const activeUser = await reActiveUser(id)
    return res.status(200).send(activeUser);
  } catch (error) {
    return next(error)
  }
}