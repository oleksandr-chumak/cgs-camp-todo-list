import { NextFunction, Request, Response } from 'express';
import { NotFoundException } from '../shared/exception';
import { IsExistOptions } from '../types/middleware.type';
import { findEntityByParams } from '../utils/find-entity-by-params';
import { RequestWithEntity } from '../types/request.type';
import { ExtendedBaseEntity } from '../entities';

export function IsExistMiddleware<T extends typeof ExtendedBaseEntity>(options: IsExistOptions<T>) {
  return async (req: Request, _: Response, next: NextFunction) => {
    try {
      const { message, ...optionsWithoutMessage } = options;
      const entity: T | null = await findEntityByParams({
        req,
        ...optionsWithoutMessage
      });

      if (!entity) {
        throw new NotFoundException(options.message || `${options.reqField} not found in database`);
      }

      (req as RequestWithEntity<T>).entity = entity;

      next();
    } catch (e) {
      next(e);
    }
  };
}
