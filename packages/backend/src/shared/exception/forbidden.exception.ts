import { HttpException } from './http.exception';
import { HttpExceptionError, HttpExceptionStatus } from '../../types/exception.type';

export class ForbiddenException extends HttpException {
  constructor(message?: string) {
    const errorMessage: string = message || 'Forbidden resource';
    super(errorMessage, HttpExceptionError.Forbidden, HttpExceptionStatus.Forbidden);
  }
}
