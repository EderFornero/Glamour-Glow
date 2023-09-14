import { Request, Response } from "express";
import { validateLogIn, generateToken} from "../../handlers";


export const logInUser = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;

    const credentials = await validateLogIn(email, password);

    if (credentials) {
       const token = await generateToken(email);
       const role = credentials.role 
       return res.status(200).send({ id: credentials.id, isActive: credentials.isActive, role, token });
     }
    throw new Error("Failed authentication, incorrect credentials");
  } catch (error) {
    return res.status(400).send({
     message: "Failed authentication, incorrect credentials",
      token: null
    });
  }
};
