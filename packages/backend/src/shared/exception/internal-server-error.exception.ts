import { HttpException } from './http.exception';
import { HttpExceptionError, HttpExceptionStatus } from '../../types/exception.type';

export class InternalServerErrorException extends HttpException {
  constructor(message?: string) {
    const errorMessage: string = message || 'Something went wrong';
    super(
      errorMessage,
      HttpExceptionError.InternalServerError,
      HttpExceptionStatus.InternalServerError
    );
  }
}
