import { checkSchema } from 'express-validator/check';

export const resetPasswordRequestSchema = checkSchema({
  email: {
    in: 'body',
    isString: {
      errorMessage: 'Email must be a string'
    },
    isEmail: {
      errorMessage: 'Email must be email'
    }
  }
});
