import { Router } from 'express';
import { AuthController } from '../../controllers/auth.controller';
import { AuthService } from '../../services/auth.service';
import { validateMiddleware } from '../../middleware/validate.middleware';
import { loginSchema } from '../../schemas/validation-schemas/auth/login.schema';
import { registrationSchema } from '../../schemas/validation-schemas/auth/registration.schema';
import { isNotExistMiddleware } from '../../middleware/is-not-exist.middleware';
import { UserEntity } from '../../entities';
import { UserService } from '../../services/user.service';
import { IsExistMiddleware } from '../../middleware/is-exist.middleware';
import { JwtTokenService } from '../../services/jwt-token.service';
import { UserTokensService } from '../../services/user-tokens.service';
import { onlyAuthorizedMiddleware } from '../../middleware/auth/only-authorized.middleware';
import { UserTokensEntity } from '../../entities/user-tokens.entity';
import { EmailService } from '../../services/email.service';
import { resetPasswordRequestSchema } from '../../schemas/validation-schemas/auth/reset-password-request.schema';
import { resetPasswordSchema } from '../../schemas/validation-schemas/auth/reset-password.schema';
import { isAccountConfirmedMiddleware } from '../../middleware/auth/is-account-confirmed.middleware';
import { confirmAccountSchema } from '../../schemas/validation-schemas/auth/confirm-account.schema';

const authRouter: Router = Router();

const authController: AuthController = new AuthController(
  new AuthService(new UserService()),
  new JwtTokenService(),
  new UserTokensService(),
  new EmailService()
);

const isUserNotRegistered = isNotExistMiddleware({
  baseEntity: UserEntity,
  where: 'body',
  dbFields: ['credentials', 'email'],
  reqField: 'email',
  message: 'User with this email already registered'
});

const isUserRegistered = IsExistMiddleware({
  baseEntity: UserEntity,
  where: 'body',
  dbFields: ['credentials', 'email'],
  reqField: 'email',
  relations: ['credentials'],
  message: 'Wrong email or password'
});

const isTokenExist = IsExistMiddleware({
  baseEntity: UserTokensEntity,
  where: 'params',
  dbFields: ['refreshToken'],
  reqField: 'refreshToken',
  message: 'Token not found'
});

authRouter.post(
  '/register',
  ...[...validateMiddleware(registrationSchema), isUserNotRegistered],
  authController.register
);

authRouter.post(
  '/login',
  ...[...validateMiddleware(loginSchema), isUserRegistered, isAccountConfirmedMiddleware],
  authController.login
);

authRouter.put('/refresh/:refreshToken', isTokenExist, authController.refresh);

authRouter.post(
  '/reset-password-request',
  ...[isUserRegistered, ...validateMiddleware(resetPasswordRequestSchema)],
  authController.resetPasswordRequest
);

authRouter.put(
  '/reset-password/:token',
  ...validateMiddleware(resetPasswordSchema),
  authController.resetPassword
);

authRouter.get(
  '/confirm/:token',
  ...validateMiddleware(confirmAccountSchema),
  authController.confirmAccount
);

authRouter.get('/logout', ...[...onlyAuthorizedMiddleware(), authController.logout]);

export default authRouter;
