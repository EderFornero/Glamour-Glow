import { Response, NextFunction } from "express";

export const rolePermissions =
  (role: string) => (req: any, res: Response, next: NextFunction) => {
    if (req.user && req.user.role === role) {
<<<<<<< HEAD
      next();
    }
    return res
      .status(403)
      .json({ message: "You have no permission for this action" });
=======
      return next();
    } else {
      return res.sendStatus(403);
    }
>>>>>>> 099e852aa3bcdbe60cd5173811f671b3505a7e10
  };
