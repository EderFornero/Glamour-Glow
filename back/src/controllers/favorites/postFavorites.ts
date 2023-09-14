import { createFavoritesHandler } from "../../handlers";
import { createFavoriteType } from "../../schemas/favoritesSchema";
import { Request, Response, NextFunction } from "express";

export const postFavoriteController = async(
    req: Request<{}, {}, createFavoriteType>, 
    res: Response, 
    next: NextFunction
    ) => {
        const favoriteData = req.body;
       // console.log(favoriteData)
        try {
           const newFavorite = await createFavoritesHandler(favoriteData) 
           console.log("Favorite posted")
           return res.status(200).json(newFavorite)
        } catch (error) {
            return next(error);
        }
};