import { HttpException } from './http.exception';
import { HttpExceptionError, HttpExceptionStatus } from '../../types/exception.type';

export class BadRequestException extends HttpException {
  constructor(message?: string) {
    const errorMessage: string = message || 'The request is missing a required parameter.';
    super(errorMessage, HttpExceptionError.BadRequest, HttpExceptionStatus.BadRequest);
  }
}
