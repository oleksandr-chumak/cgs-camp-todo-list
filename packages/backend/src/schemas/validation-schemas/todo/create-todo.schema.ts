import { checkSchema, ValidationChain } from 'express-validator/check';

export const createTodoSchema: ValidationChain[] = checkSchema({
  title: {
    in: 'body',
    isString: {
      errorMessage: 'title must be a string'
    },
    isLength: {
      options: {
        min: 3,
        max: 50
      },
      errorMessage: 'title length must be between 3 and 50'
    }
  },
  content: {
    in: 'body',
    isString: {
      errorMessage: 'content must be a string'
    },
    isLength: {
      options: {
        min: 3,
        max: 250
      },
      errorMessage: 'content length must be between 3 and 250'
    }
  }
});
