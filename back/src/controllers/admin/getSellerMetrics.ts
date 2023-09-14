import { Request, Response, NextFunction } from "express";
import { readSellersMetrics } from "../../handlers";

export const readSellersMetricsController = async(
    _req: Request,
    res: Response,
    next: NextFunction
) => {
    try {
       const {activeSellers, inactiveSellers} = await readSellersMetrics();
       return res.status(200).json({
        activeSellers,
        inactiveSellers
       })
    } catch (error) {
        return next(error)
    }

}