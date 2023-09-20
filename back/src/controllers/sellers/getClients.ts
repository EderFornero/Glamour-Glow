import { NextFunction, Request, Response } from "express";
import { readClientsBySellerId} from "../../handlers/sellers";
export const getClientsController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
    const {id} = req.params
  try {
    const allClientsBySeller = await readClientsBySellerId(id)
    return res.status(200).json(allClientsBySeller);
  } catch (error) {
    return next(error);
  }
};