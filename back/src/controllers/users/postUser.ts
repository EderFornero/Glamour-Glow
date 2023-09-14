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
      lastName,
      email,
      password,
      phoneNumber,
      role,
      dateOfBirth,
      image,
    } = req.body;
    const savedUser = await createUser({
      name,
      lastName,
      email,
      password,
      phoneNumber,
      role,
      dateOfBirth,
      image,
    });
    res.status(200).send({name:savedUser.name,id:savedUser._id, role:savedUser.role});
  } catch (error) {
    return next(error);
  }
};
