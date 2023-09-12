import { Request, Response, NextFunction } from "express";
import { readFavorites } from "../../handlers";

export const readFavoritesController = async(_req: Request, res: Response, next: NextFunction) => {
    
    try {
        const favorite = await readFavorites()
        if(!favorite){
            return res.status(400).send("You dont have any favorites related to your account")
        }
        return res.status(200).json(favorite);
    } catch (error) {
       return next(error);
    }
}