import { Request, Response, NextFunction } from "express";
import { getPagesVisits } from "../../handlers";

export const getPagesVisitsController = async(_req: Request, res: Response ,next:NextFunction) => {
    try {
       const pagesVisited = await getPagesVisits();
       if(!pagesVisited){
        return res.status(404).send("Error searching for visited pages")
       } 
       return res.status(200).json(pagesVisited)
    } catch (error) {
        return next(error)
    }
}