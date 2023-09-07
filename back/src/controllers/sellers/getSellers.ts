

import { NextFunction, Request, Response} from "express";
import { sellerFilterHandler } from "../../handlers/sellers.ts";
export const getSellersController = async (
                                            _req: Request,
                                             res: Response,
                                            next: NextFunction) => {
  try {
    if(_req.query){
      return sellerFilterHandler(_req, res, next)
    } 
    const allSellers = await sellerFilterHandler(_req, res, next);
    console.log(allSellers);
    return res.status(200).json(allSellers);
//return res.status(200).json({results:allSellers , count: allSellers.lenght})
//es una forma de entregarle al front un objeto con varias propiedades, en la cual
//podria pedir una cantidad de sellers y ya le llegaria el objeto con los sellers
//y su informacion, ademas de otra propiedad que es la cantidad de sellers
  } catch (error) {
    return next(error);
  }
};







