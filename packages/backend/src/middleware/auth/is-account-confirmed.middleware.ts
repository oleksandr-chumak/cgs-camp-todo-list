import { NextFunction, Request, Response } from 'express';
import { Middleware } from '../../types/middleware.type';
import { BadRequestException } from '../../shared/exception';
import { UserEntity } from '../../entities';
import { RequestWithEntity } from '../../types/request.type';

export const isAccountConfirmedMiddleware: Middleware = (
  req: Request,
  _: Response,
  next: NextFunction
) => {
  const { entity } = req as RequestWithEntity<UserEntity>;

  if (!entity.credentials.isVerified) {
    next(new BadRequestException('Account is not confirmed. Please confirm your account'));
  }

  next();
};
