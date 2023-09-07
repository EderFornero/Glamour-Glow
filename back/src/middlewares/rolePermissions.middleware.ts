import { Response, NextFunction } from "express";

export const rolePermissions =
  (role: string) => (req: any, res: Response, next: NextFunction) => {
    if (req.user && req.user.role === role) {
      next();
    }
    return res
      .status(403)
      .json({ message: "You have no permission for this action" });
  };
