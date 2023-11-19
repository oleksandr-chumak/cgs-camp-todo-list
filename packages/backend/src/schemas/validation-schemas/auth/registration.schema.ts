import { checkSchema, ValidationChain } from 'express-validator/check';
import { isStrongPassword } from '../../../shared/validators/is-strong-password';
import { isFieldEqualField } from '../../../shared/validators/is-field-equal-field';

export const registrationSchema: ValidationChain[] = checkSchema({
  email: {
    in: 'body',
    isString: {
      errorMessage: 'Email must be a string'
    },
    isEmail: {
      errorMessage: 'Email must be email'
    }
  },
  password: {
    in: 'body',
    isString: {
      errorMessage: 'Password must be a string'
    },
    custom: {
      options: isStrongPassword,
      errorMessage:
        'Password must contain at least one lowercase letter, one uppercase letter, ' +
        'one number, one special character (!@#$%^&*) and be at least 8 characters long.'
    }
  },
  confirmPassword: {
    in: 'body',
    isString: {
      errorMessage: 'Confirm password must be a string'
    },
    custom: {
      options: isFieldEqualField('password', 'confirmPassword', 'body'),
      errorMessage: 'Confirm password must be equal password'
    }
  }
});
