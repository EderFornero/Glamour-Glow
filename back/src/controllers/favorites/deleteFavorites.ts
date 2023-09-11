import { Request, Response, NextFunction } from "express";
import { deleteFavorites } from "../../handlers";
import { deleteFavoriteType } from "../../schemas/favoritesSchema";

export const deleteFavoritesController = async(req:Request<deleteFavoriteType>, res:Response, next: NextFunction) => {
    
    const {id} = req.params
    try {
       const favoriteDeleted = await deleteFavorites(id)
       return res.status(200).send(`Review with id: ${favoriteDeleted} was successfully deleted`) 
    } catch (error) {
        return next(error)
    }

}