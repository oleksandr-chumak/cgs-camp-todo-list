import { checkSchema, ValidationChain } from 'express-validator/check';
import { isStrongPassword } from '../../../shared/validators/is-strong-password';

export const updateUserSchema: ValidationChain[] = checkSchema({
  id: {
    in: 'params',
    isInt: {
      options: { gt: -1 },
      errorMessage: 'Id must be positive string'
    }
  },

  email: {
    in: 'body',
    optional: true,
    isString: {
      errorMessage: 'Email must be a string'
    },
    isEmail: {
      errorMessage: 'Email must be email'
    }
  },
  password: {
    in: 'body',
    optional: true,
    isString: {
      errorMessage: 'Password must be a string'
    },
    custom: {
      options: isStrongPassword,
      errorMessage:
        'Password must contain at least one lowercase letter, one uppercase letter, ' +
        'one number, one special character (!@#$%^&*) and be at least 8 characters long.'
    }
  }
});
