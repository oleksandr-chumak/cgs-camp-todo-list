import { NextFunction, Request, Response } from 'express';
import { RequestWithUserAndEntity } from '../../types/request.type';
import { ForbiddenException } from '../../shared/exception/forbidden.exception';
import { getValueFromNestedObject } from '../../utils/get-value-from-nested-object';

export const checkOwnershipMiddleware =
  (dbField: string[]) => (req: Request, res: Response, next: NextFunction) => {
    const { user, entity } = req as unknown as RequestWithUserAndEntity<never>;

    const searchValue = getValueFromNestedObject(entity, dbField);
    if (!user || !entity || !searchValue || user.id !== searchValue) {
      next(new ForbiddenException());
    }

    next();
  };
