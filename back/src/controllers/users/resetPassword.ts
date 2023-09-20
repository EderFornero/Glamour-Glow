import { NextFunction, Request, Response } from "express";
import { resetPasswordType } from "../../schemas/userSchema";
import { readUserById, resetPasswordUser } from "../../handlers";

export const resetPassword = async (
  req: Request<resetPasswordType["params"], {}, resetPasswordType["body"]>,
  res: Response,
  next: NextFunction
) => {
const { id } = req.params;
  const { password } = req.body;
  try {
    const user = await readUserById(id);
    if (
      user.passwordResetCode === null
    ) {
      return res.status(404).send("Could not reset user password");
    }
    await resetPasswordUser(id, password);

    return res.status(200).send("Successfully updated password");
  } catch (error) {
    return next(error);
  }
};
