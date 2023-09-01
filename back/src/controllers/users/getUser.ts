import { readUsersService } from "../../handlers";
import { Request, Response } from "express";

export const getUser = async (_req: Request, res: Response) => {
  try {
    const allUsers = await readUsersService();
    res.status(200).send(allUsers);
  } catch (error) {
    res.status(400).send({ message: "Something went wrong" });
  }
};