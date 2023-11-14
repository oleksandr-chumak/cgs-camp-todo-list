import { checkSchema, ValidationChain } from 'express-validator/check';

export const createTodoSchema: ValidationChain[] = checkSchema({
  title: {
    in: 'body',
    isString: {
      errorMessage: 'title must be a string'
    }
  },
  content: {
    in: 'body',
    isString: {
      errorMessage: 'content must be a string'
    }
  }
});
