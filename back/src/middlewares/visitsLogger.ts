import { VisistModel } from "../models";
import { Request, Response, NextFunction } from "express";

export const visitsLogger = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { originalUrl } = req;
    
    const pageVisit = new VisistModel({ path: originalUrl });
    pageVisit.save();
    
    return next();
  } catch (error) {
    return res.status(400).send("Error while trying to regist visits");
  }
};
