export enum HttpExceptionError {
  BadRequest = 'Bad Request',
  Forbidden = 'Forbidden resource',
  NotFound = 'Not found',
  InternalServerError = 'Internal Server Error'
}

export enum HttpExceptionStatus {
  BadRequest = 400,
  Forbidden = 403,
  NotFound = 404,
  InternalServerError = 500
}
