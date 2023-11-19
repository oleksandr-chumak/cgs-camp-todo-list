import { CustomSanitizer } from 'express-validator/filter/sanitize';
import { NextFunction, Request, Response } from 'express';
import { Middleware, RequestParams } from '../types/middleware.type';
import { TransformSchema } from '../types/transform.type';

export function transformMiddleware(
  where: RequestParams,
  transformSchema: TransformSchema
): Middleware {
  return (req: Request, res: Response, next: NextFunction): void => {
    for (const transformElement in transformSchema) {
      if (transformSchema.hasOwnProperty(transformElement)) {
        const transformFunction: CustomSanitizer = transformSchema[transformElement];
        const value = req[where][transformElement];
        const options = {
          req,
          location: where,
          path: transformElement
        };
        req[where][transformElement] = transformFunction(value, options);
      }
    }
    next();
  };
}
