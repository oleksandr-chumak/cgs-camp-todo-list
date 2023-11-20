import { NextFunction, Request, Response } from 'express';
import { BadRequestException } from '../shared/exception';
import { IsNotExistOptions } from '../types/middleware.type';
import { findEntityByParams } from '../utils/find-entity-by-params';
import { ExtendedBaseEntity } from '../entities';

export function isNotExistMiddleware<T extends typeof ExtendedBaseEntity>(
  options: IsNotExistOptions<T>
) {
  return async (req: Request, _: Response, next: NextFunction) => {
    try {
      const { message, ...optionsWithoutMessage } = options;
      const entity: T | null = await findEntityByParams({
        req,
        ...optionsWithoutMessage
      });

      if (entity) {
        throw new BadRequestException(message || `${options.reqField} was found in database`);
      }

      next();
    } catch (e) {
      next(e);
    }
  };
}
