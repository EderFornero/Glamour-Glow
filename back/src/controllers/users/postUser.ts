import { createUserService } from "../../handlers";
import { Request, Response } from "express";

export const postUser = async (req: Request, res: Response) => {
  try {
    const user = req.body;
    const savedUser = await createUserService(user);
    res.status(200).send(savedUser);
  } catch (error) {
    res.status(400).send({ error: "Something went wrong" });
  }
};
