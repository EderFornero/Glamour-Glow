import { updateUserService } from "../../handlers";
import { Request, Response } from "express";

export const updateUser = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const { updates } = req.body;
    const updatedUser = await updateUserService(id, updates);
    res.status(200).send(updatedUser);
  } catch (error) {
    res.status(400).send({ error: "Something went wrong" });
  }
};
