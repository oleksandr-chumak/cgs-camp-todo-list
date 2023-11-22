import { NextFunction, Request, Response } from 'express';
import { Middleware } from '../../types/middleware.type';
import { RequestWithUser } from '../../types/request.type';
import { ForbiddenException } from '../../shared/exception/forbidden.exception';
import { Access } from '../../types/todos.type';

export const isUserOnAccessPrivateMiddleware: Middleware = (
  req: Request,
  _: Response,
  next: NextFunction
) => {
  try {
    const { user } = req as RequestWithUser;
    if (user && req.query.access === Access.Private) {
      req.query.userId = String(user.id);
    }
    if (!user && req.query.access === Access.Private) {
      throw new ForbiddenException();
    }
    next();
  } catch (e) {
    next(e);
  }
};
