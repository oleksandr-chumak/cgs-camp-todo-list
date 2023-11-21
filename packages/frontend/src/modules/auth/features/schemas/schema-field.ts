import * as Yup from 'yup';
import { PASSWORD_REG_EXP } from '../../../common/consts/regexp.const';

export const email = Yup.string().email().min(20).required('Email is required');

export const password = Yup.string()
  .matches(
    PASSWORD_REG_EXP,
    'Password must contain at least one lowercase letter, one uppercase letter, ' +
      'one number, one special character (!@#$%^&*) and be at least 8 characters long.'
  )
  .required('Password is required');

export const confirmPassword = Yup.string()
  .test('passwords-match', 'Passwords must match', function (value) {
    return this.parent.password === value;
  })
  .required('Confirm password is required');
