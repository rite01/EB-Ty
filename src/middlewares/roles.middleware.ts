import { Request, Response, NextFunction } from 'express';

import { ForbiddenException } from '../exceptions';
import { ErrorMessage } from '../constants';
import { UserRoles } from '../constants/enum.constants';

export const restrictTo = (...roles: UserRoles[]) => (req: Request, _: Response, next: NextFunction): any => {
  const { role } = req.body;
  if (!roles.includes(role)) {
    throw new ForbiddenException(ErrorMessage.PERMISSION_DENIED);
  }
  return next();
};
