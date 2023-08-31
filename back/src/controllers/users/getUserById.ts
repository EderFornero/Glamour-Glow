import { getUserByidService } from "../../handlers";
import { Request, Response } from "express";

export const getUserByid = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const user = await getUserByidService(id);
    if (!user /*|| user.isActive*/) {
      return res.status(404).send({ message: "User not found" });
    }

    return res.status(200).json(user);
  } catch (error) {
    return res.status(400).send({ error: "Something went wrong" });
  }
};
