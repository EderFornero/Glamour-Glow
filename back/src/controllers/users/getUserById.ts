import { readUserByidService } from "../../handlers";
import { Request, Response } from "express";

export const getUserByid = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const user = await readUserByidService(id);
    // if (!user || !user.isActive) {
    //   return res.status(404).send({ message: "User not found" });
    // }

    return res.status(200).json(user);
  } catch (error: any) {
    return res.status(400).send({ error: error.message });
  }
};
