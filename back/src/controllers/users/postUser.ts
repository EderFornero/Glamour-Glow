import { createUser } from "../../handlers";
import { NextFunction, Request, Response } from "express";
import { createUserType } from "../../schemas/userSchema";

export const postUser = async (
  req: Request<{}, {}, createUserType>,
  res: Response,
  next: NextFunction
) => {
  try {
    const {
      name,
      last_name,
      email,
      password,
      phone_number,
      role,
      date_of_birth,
      image,
    } = req.body;
    const savedUser = await createUser({
      name,
      last_name,
      email,
      password,
      phone_number,
      role,
      date_of_birth,
      image,
    });
    res.status(200).send(savedUser);
  } catch (error) {
    return next(error);
  }
};
