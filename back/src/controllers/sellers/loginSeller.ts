import { Request, Response } from "express";
import { validateLogInSeller, generateTokenSeller }from "../../handlers";

export const logInSeller = async (req: Request, res: Response) => {
  try {
  
    const { sellerEmail, sellerPassword } = req.body;
  
    const credentials = await validateLogInSeller(sellerEmail, sellerPassword);

     if (credentials) {
       const token = await generateTokenSeller(sellerEmail);
       const role = credentials.role
       const id = credentials.id
       return res.status(200).send({ id, role, token });
     }
    throw new Error("Failed authentication, incorrect credentials");
  } catch (error) {
    return res.status(400).send({
      message: "Failed authentication, incorrect credentials",
      token: null,
    });
  }
};
