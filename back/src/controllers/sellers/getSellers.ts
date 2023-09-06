import { NextFunction, Request, Response} from "express";
import { getSellersHandler } from "../../handlers/sellers.ts";
import { SellerModel } from "../../models/index.ts";

export const getSellersController = async (
                                            _req: Request,
                                             res: Response,
                                            next: NextFunction) => {
    
  try {
    const allSellers = await getSellersHandler();
    let sellerfiltered = allSellers;

    if(_req.query){
      const query: Record<string, any> = _req.query;
      const filters: Record<string, any> = {};
  
      // aca el filtrado por nombre
      if (query.seller_name) {
        filters.seller_name = query.seller_name;
      }
      // por aca el filtrado por genero
      if (query.seller_gender) {
        filters.seller_gender = query.seller_gender;
      }
      // filtrado por categorias
      if (query.categoriesArray && Array.isArray(query.categoriesArray)) {
        filters["categoriesArray.name"] = { $in: query.categoriesArray };
      }
      sellerfiltered = await SellerModel.find(filters).exec();
      console.log(sellerfiltered);
    } 
    return res.status(200).json(allSellers);
  } catch (error) {
    return next(error);
  }
};

/* 
import { NextFunction, Request, Response} from "express";
import { getSellersHandler } from "../../handlers/sellers.ts";
import { SellerModel } from "../../models/index.ts";

export const getSellersController = async (
                                            _req: Request,
                                             res: Response,
                                            next: NextFunction) => {
  try {
    if(_req.query){
      return sellerFilterHandler(_req, res, next)
    } 
    const allSellers = await getSellersHandler();
    return res.status(200).json(allSellers);
  } catch (error) {
    return next(error);
  }
};


// modularizar despues esta funcion
const sellerFilterHandler = async ( _req: Request,
                                    res: Response,
                                    next: NextFunction) => {
  try {
    const query: Record<string, any> = _req.query;
    const filters: Record<string, any> = {};

    // aca el filtrado por nombre
    if (query.seller_name) {
      filters.seller_name = query.seller_name;
    }
    // por aca el filtrado por genero
    if (query.seller_gender) {
      filters.seller_gender = query.seller_gender;
    }
    // filtrado por categorias
    if (query.categoriesArray && Array.isArray(query.categoriesArray)) {
      filters["categoriesArray.name"] = { $in: query.categoriesArray };
    }
    const sellers = await SellerModel.find(filters).exec();
    return res.status(200).json(sellers)
  } catch (error) {
    return next(error); 
  }
}
*/



