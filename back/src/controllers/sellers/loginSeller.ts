import { Request, Response } from "express";
import { validateLogInSeller, generateTokenSeller }from "../../handlers";

export const logInSeller = async (req: Request, res: Response) => {
  try {
  
    const { sellerEmail, sellerPassword } = req.body;
  
    const validUser = await validateLogInSeller(sellerEmail, sellerPassword);

     if (validUser) {
       const token = await generateTokenSeller(sellerEmail);
       const role = validUser.role
       const id = validUser.id
       const isActive = validUser.isActive
       const accountBalance = validUser.accountBalance
       return res.status(200).send({ id, role, token , isActive, accountBalance});
     }
    throw new Error("Failed authentication, incorrect credentials");
  } catch (error) {
    return res.status(400).send({
      message: "Failed authentication, incorrect credentials",
      token: null,
    });
  }
};
