import { NextFunction, Request, Response } from 'express';
import { ValidationChain } from 'express-validator/check';

export type Middleware = (req: Request, res: Response, next: NextFunction) => void | Promise<void>;

export type ValidateMiddlewareReturn = [...ValidationChain[], Middleware];

export type RequestParams = 'query' | 'body' | 'params';
