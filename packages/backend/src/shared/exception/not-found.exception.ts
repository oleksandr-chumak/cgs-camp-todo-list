import { HttpException } from './http.exception';
import { HttpExceptionError, HttpExceptionStatus } from '../../types/exception.type';

export class NotFoundException extends HttpException {
  constructor(message?: string) {
    const errorMessage: string = message || 'Resource not found';
    super(errorMessage, HttpExceptionError.NotFound, HttpExceptionStatus.NotFound);
  }
}
