import { Request, Response, NextFunction } from "express";

export function logErrors (err: Error, _req: Request, _res: Response, next: NextFunction) {
    console.error(err);
    next(err);
  }
  