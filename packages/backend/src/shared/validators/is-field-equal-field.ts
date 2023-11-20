import { Request } from 'express';
import { RequestParams } from '../../types/middleware.type';

export const isFieldEqualField =
  (field1: string, field2: string, where: RequestParams) =>
  (_: unknown, { req }: { req: Request }): boolean =>
    req[where][field1] === req[where][field2];
