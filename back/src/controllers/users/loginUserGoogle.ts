import { Request, Response } from "express";
import { generateToken } from "../../handlers";
import { UserModel } from "../../models";

export const logInUserGoogle = async (req: Request, res: Response) => {
  try {
    const { email, password, image, name } = req.body;

    const user = await UserModel.find({ email });
    if (user.length < 1) {
      console.log("entre en el if");
      const newUser = await UserModel.create({
        email: email,
        password: password,
        image: image,
        name: name,
        dateOfBirth: "2000-01-01",
        phoneNumber: "999999999",
        lastName: "apellido",
        role: "customer",
      });
      console.log(newUser);
      // const id = newUser._id;
      const token = await generateToken(email);
      // console.log(token);
      return res.status(200).send(token);
    }
    const id = user[0]._id.toString();
    console.log(id);
    const token = await generateToken(email);
    console.log(token);
    return res.status(200).send({ token, id });
  } catch (error: any) {
    return res.status(400).send({
      message: "Failed authentication, incorrect credentials",
      token: null,
    });
  }
};
