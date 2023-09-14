import { Request, Response, NextFunction } from "express";
import { readAndDeleteUserType } from "../../schemas/userSchema";
import { deleteUserHandler } from "../../handlers";

export const deleteUser = async(
    req: Request<readAndDeleteUserType>,
    res: Response,
    next: NextFunction
  ) => {
    try {
     const {id} = req.params;
     const userDeleted = await deleteUserHandler(id)
     return res.status(200).send(`User with id: ${userDeleted} was successfully deleted`)
    } catch (error) {
      return next(error)
    }
  }