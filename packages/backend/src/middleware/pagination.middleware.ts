import { NextFunction, Request, Response } from 'express';
import { Middleware, ValidateMiddlewareReturn } from '../types/middleware.type';
import { validateMiddleware } from './validate.middleware';
import { paginationSchema } from '../schemas/validation-schemas/pagination.schema';

const setPaginationDefaultValue: Middleware = (
  req: Request,
  _: Response,
  next: NextFunction
): void => {
  req.query.skip = req.query.skip || '0';
  req.query.limit = req.query.limit || '15';

  next();
};

export function paginationMiddleware(): [...ValidateMiddlewareReturn, Middleware] {
  return [...validateMiddleware(paginationSchema), setPaginationDefaultValue];
}
