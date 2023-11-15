import { NextFunction, Request, Response } from 'express';
import { HttpException, InternalServerErrorException } from '../shared/exception';

function errorHandlerMiddleware(
  err: Error | HttpException,
  _: Request,
  res: Response,
  next: NextFunction
): void {
  if (!err) {
    next();
  }

  if (err instanceof HttpException) {
    const { error, status, message } = err;
    res.status(err.status).send({ message, error, status });
  } else {
    const { error, status, message }: InternalServerErrorException =
      new InternalServerErrorException(err.message);
    res.status(status).send({ message, error, status });
  }

  next();
}

export default errorHandlerMiddleware;
