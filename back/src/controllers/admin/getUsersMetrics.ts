import { Request, Response, NextFunction } from "express";
import { readUsersMetrics } from "../../handlers";

export const readUsersMetricsController = async (
  _req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { activeUsers, inactiveUsers } = await readUsersMetrics();
    return res.status(200).json({
      activeUsers,
      inactiveUsers,
    });
  } catch (error) {
    return next(error);
  }
};
