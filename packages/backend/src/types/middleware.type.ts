import { NextFunction, Request, Response } from 'express';
import { ValidationChain } from 'express-validator/check';
import { FindOptionsRelationByString } from 'typeorm';

export type Middleware = (req: Request, res: Response, next: NextFunction) => void | Promise<void>;

export type ValidateMiddlewareReturn = [...ValidationChain[], Middleware];

export interface IsNotExistOptions<T> {
  baseEntity: T;
  where: RequestParams;
  dbFields: string[];
  reqField: string;
  message?: string;
}

export type IsExistOptions<T> = IsNotExistOptions<T> & { relations?: FindOptionsRelationByString };

export interface FindEntityByParams<T> {
  req: Request;
  baseEntity: T;
  where: RequestParams;
  dbFields: string[];
  reqField: string;
  relations?: FindOptionsRelationByString;
}

export type RequestParams = 'query' | 'body' | 'params';
