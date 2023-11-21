import * as Yup from 'yup';
import { confirmPassword, email, password } from './schema-field';

export const loginSchema = Yup.object({ email, password });

export const registrationSchema = Yup.object({ email, password, confirmPassword });

export const resetPasswordRequestSchema = Yup.object({ email });

export const resetPasswordSchema = Yup.object({ password, confirmPassword });

export const resetPasswordLocalSchema = Yup.object({
  oldPassword: password,
  password,
  confirmPassword
});
