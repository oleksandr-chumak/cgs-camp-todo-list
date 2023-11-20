import { checkSchema } from 'express-validator/check';

export const confirmAccountSchema = checkSchema({
  token: {
    in: 'params',
    isString: {
      errorMessage: 'Token must be a string'
    }
  }
});
