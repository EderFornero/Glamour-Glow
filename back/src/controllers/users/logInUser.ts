import { Request, Response } from "express";
import { validateLogIn, generateToken } from "../../handlers";

export const logInUser = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;
    const credentials = await validateLogIn(email, password);
    if (credentials) {
      const token = await generateToken(email);
      return res
        .status(200)
        .send({ message: "User has been successfully authenticated", token });
    }
    throw new Error("Failed authentication, incorrect credentials");
  } catch (error: any) {
    return res
      .status(400)
      .send({
        message: "Failed authentication, incorrect credentials",
        token: null,
      });
  }
};
