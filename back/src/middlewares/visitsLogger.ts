import { VisistModel } from "../models";
import { Request, Response, NextFunction } from "express";

export const visitsLogger = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { originalUrl} = req;
    const visitDate = new Date();
    
    const pageVisit = new VisistModel({ path: originalUrl, date: visitDate });
    console.log("document to save: ", pageVisit)
    pageVisit.save();
    
    return next();
  } catch (error) {
    return res.status(400).send("Error while trying to regist visits");
  }
};
