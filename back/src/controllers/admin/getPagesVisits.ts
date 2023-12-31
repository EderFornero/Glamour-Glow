import { Request, Response, NextFunction } from "express";
import { getPagesVisits } from "../../handlers";

export const getPagesVisitsController = async(_req: Request, res: Response ,next:NextFunction) => {
    try {
       const {totalPagesVisited, visitsByPath} = await getPagesVisits();
       if(!totalPagesVisited || !visitsByPath){
        return res.status(404).send("Error searching for visited pages")
       } 
       return res.status(200).json({
        totalPagesVisited,
        visitsByPath
       })
    } catch (error) {
        return next(error)
    }
}