import { Request, Response } from "express";
import { validateLogIn, generateToken } from "../../handlers";

export const logInUser = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;
    const credentials = await validateLogIn(email, password);
    res.cookie("MyCookie", "TestingCookie", { maxAge: 10000 });
    if (credentials) {
      const token = await generateToken(email);

      return res.status(200).send({ id: credentials.id, token });
    }
    throw new Error("Failed authentication, incorrect credentials");
  } catch (error: any) {
    return res.status(400).send({
      message: "Failed authentication, incorrect credentials",
      token: null,
    });
  }
};
