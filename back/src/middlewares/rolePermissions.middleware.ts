import { Response, NextFunction } from 'express'

export const rolePermissions = (role: string) => (req: any, res: Response, next: NextFunction) => {
  if (req.user && req.user.role === role) {
    return next()
  } else {
    return res.sendStatus(403)
  }
}
