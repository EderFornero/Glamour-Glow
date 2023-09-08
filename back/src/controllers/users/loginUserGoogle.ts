import { Request, Response } from "express";
import { generateToken } from "../../handlers";
import { UserModel } from "../../models";

export const logInUserGoogle = async (req: Request, res: Response) => {
  try {
    const { email, password, image, name } = req.body;


    const user = await UserModel.find({ email })
    if (user.length < 1) {
      console.log('entre en el if')
      const newUser = await UserModel.create({ email: email, password: password, image: image, name: name, date_of_birth: '2000-01-01', phone_number: '999999999', last_name: 'apellido', role: 'customer'});
      console.log(newUser);
      const token = await generateToken(email)
      console.log(token)
      return res.status(200).send(token)
    }

    const token = await generateToken(email)
    console.log(token)
    return res.status(200).send(token)

  } catch (error: any) {
    return res.status(400).send({
      message: "Failed authentication, incorrect credentials",
      token: null,
    });
  }
};
