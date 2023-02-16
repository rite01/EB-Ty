import { Response, NextFunction } from 'express';
import { UnauthorizedException } from '../exceptions';
import db from '../databases/models';
import { jwtService } from '../services/jwt/jwt.services';
import { ErrorMessage } from '../constants/error.message.constants';
import { asyncHandler } from '../middlewares/async.middleware';
import { UserRoles } from '../constants/enum.constants';

const { users } = db.models;
// @desc   Verify Token Middleware
export const authMiddleware = asyncHandler(async (req: any, _: Response, next: NextFunction) => {
  // 1) Getting token and check of it's there
  let token;
  const { authorization } = req.headers;
  if (authorization && authorization.startsWith('Bearer')) {
    // eslint-disable-next-line prefer-destructuring
    token = authorization.split(' ')[1];
  } else if (req.cookies?.token) {
    token = req.cookies.token;
  }

  if (!token) {
    return next(new UnauthorizedException(ErrorMessage.NOT_LOGGED_IN));
  }

  // 2) Verification token
  const decoded: any = await jwtService.verifyToken(token);
  if (!decoded || !decoded.id) {
    return next(new UnauthorizedException(ErrorMessage.USER_WITH_TOKEN_NOT_EXIST));
  }

  // 3) Check if user still exists
  const currentUser: any = await users.findByPk(decoded.id);
  if (!currentUser) {
    return next(new UnauthorizedException(ErrorMessage.USER_WITH_TOKEN_NOT_EXIST));
  }

  // Check if user changed password after the token was issued
  // if (currentUser?.changedPasswordAfter(decoded.iat)) {
  //   return next(new UnauthorizedException(ErrorMessage.RECENTLY_CHANGED_PASSWORD));
  // }

  // GRANT ACCESS TO PROTECTED ROUTE
  req.user = currentUser;
  return next();
});

// @desc   Verify Token Middleware
export const checkRoleMiddleware = asyncHandler(async (req: any, _: Response, next: NextFunction) => {
  // 1) Getting token and check of it's there
  let token;
  const { authorization } = req.headers;
  if (authorization && authorization.startsWith('Bearer')) {
    // eslint-disable-next-line prefer-destructuring
    token = authorization.split(' ')[1];
  } else if (req.cookies?.token) {
    token = req.cookies.token;
  }

  if (!token) {
    return next(new UnauthorizedException(ErrorMessage.NOT_LOGGED_IN));
  }

  // 2) Verification token
  const decoded: any = await jwtService.verifyToken(token);
  // if (!decoded || !decoded.id || !decoded.role) {
  //   return next(new UnauthorizedException(ErrorMessage.USER_WITH_TOKEN_NOT_EXIST));
  // }

  console.log(decoded);
  if (decoded.role !== UserRoles.ADMIN) {
    return next(new UnauthorizedException(ErrorMessage.UNAUTHORIZED_ACCESS));
  }

  // 3) Check if user still exists
  const currentUser: any = await users.findByPk(decoded.id);
  if (!currentUser) {
    return next(new UnauthorizedException(ErrorMessage.USER_WITH_TOKEN_NOT_EXIST));
  }

  // Check if user changed password after the token was issued
  // if (currentUser?.changedPasswordAfter(decoded.iat)) {
  //   return next(new UnauthorizedException(ErrorMessage.RECENTLY_CHANGED_PASSWORD));
  // }

  // GRANT ACCESS TO PROTECTED ROUTE
  req.user = currentUser;
  return next();
});
