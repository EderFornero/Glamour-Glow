import { NextFunction, Request, Response } from "express";
import { readSellers} from "../../handlers/sellers";
export const getSellersController = async (
  _req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const allSellers = await readSellers()
    return res.status(200).json(allSellers);
    //return res.status(200).json({results:allSellers , count: allSellers.lenght})
    //es una forma de entregarle al front un objeto con varias propiedades, en la cual
    //podria pedir una cantidad de sellers y ya le llegaria el objeto con los sellers
    //y su informacion, ademas de otra propiedad que es la cantidad de sellers
  } catch (error) {
    return next(error);
  }
};
