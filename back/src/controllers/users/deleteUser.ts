import { destroyUserService } from "../../handlers";
import { Request, Response } from "express";

export const deleteUser = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    const deletedUser = await destroyUserService(id);
    return res.status(200).send(deletedUser);
  } catch (error) {
    return res.status(400).send({ error: "Something went wrong" });
  }
};
