import { HttpExceptionError, HttpExceptionStatus } from '../../types/exception.type';

export class HttpException extends Error {
  public message: string;

  public status: HttpExceptionStatus;

  public error: HttpExceptionError;

  public constructor(message: string, error: HttpExceptionError, status: HttpExceptionStatus) {
    super(message);
    this.message = message;
    this.error = error;
    this.status = status;
  }
}
