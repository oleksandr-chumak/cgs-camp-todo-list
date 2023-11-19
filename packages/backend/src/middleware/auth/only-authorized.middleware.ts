import { NextFunction, Request, Response } from 'express';
import { Middleware } from '../../types/middleware.type';
import { extractUserFromHeaderMiddleware } from './extract-user-from-header.middleware';
import { RequestWithUser } from '../../types/request.type';
import { ForbiddenException } from '../../shared/exception/forbidden.exception';

const isUserExist: Middleware = (req: Request, _: Response, next: NextFunction) => {
  try {
    const { user } = req as RequestWithUser;

    if (!user) {
      throw new ForbiddenException();
    }

    next();
  } catch (e) {
    next(e);
  }
};

export const onlyAuthorizedMiddleware = (): [Middleware, Middleware] => [
  extractUserFromHeaderMiddleware,
  isUserExist
];
