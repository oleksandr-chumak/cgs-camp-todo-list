import { NextFunction, Request, Response } from 'express';
import { Result, ValidationChain, validationResult } from 'express-validator/check';
import { BadRequestException } from '../shared/exception';
import { Middleware } from '../types/middleware.type';

const validate: Middleware = async (
  req: Request,
  _: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const result: Result = validationResult(req);

    if (!result.isEmpty()) {
      result.formatWith((error) => error.msg);
      throw new BadRequestException(JSON.stringify(result.mapped()));
    }

    next();
  } catch (e) {
    next(e);
  }
};

export function validateMiddleware(schema: ValidationChain[]): [...ValidationChain[], Middleware] {
  return [...schema, validate];
}
