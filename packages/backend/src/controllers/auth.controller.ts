import { NextFunction, Request, Response } from 'express';
import { matchedData } from 'express-validator/filter';
import { AuthService } from '../services/auth.service';
import { RegistrationDto } from '../dto/auth/registration.dto';
import { LoginDto } from '../dto/auth/login.dto';
import { RequestWithEntity, RequestWithUser } from '../types/request.type';
import { UserEntity } from '../entities';
import { BadRequestException } from '../shared/exception';
import { JwtTokenService } from '../services/jwt-token.service';
import { JWTPayload, JWTTokens, ResetPasswordPayload } from '../types/auth.type';
import { UserTokensService } from '../services/user-tokens.service';
import { ForbiddenException } from '../shared/exception/forbidden.exception';
import { UserTokensEntity } from '../entities/user-tokens.entity';
import { EmailService } from '../services/email.service';
import { ResetPasswordRequestDto } from '../dto/auth/reset-password-request.dto';
import { ResetPasswordDto } from '../dto/auth/reset-password.dto';
import { ConfirmAccountDto } from '../dto/auth/confirm-account.dto';

export class AuthController {
  constructor(
    private readonly authService: AuthService,
    private readonly jwtTokenService: JwtTokenService,
    private readonly userTokensService: UserTokensService,
    private readonly emailService: EmailService
  ) {
    this.init();
  }

  async login(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const data: LoginDto = matchedData(req, { locations: ['body'] }) as LoginDto;

      const userEntity: UserEntity = (req as RequestWithEntity<UserEntity>).entity;

      const isVerified = await this.authService.login(data, userEntity);

      if (!isVerified) {
        throw new BadRequestException('Wrong email or password');
      }

      const tokens: JWTTokens = this.jwtTokenService.generateTokens({
        id: userEntity.id
      });

      await this.userTokensService.saveTokens(userEntity, tokens);

      res.status(200).send(tokens);
    } catch (e) {
      next(e);
    }
  }

  async register(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const data: RegistrationDto = matchedData(req, { locations: ['body'] }) as RegistrationDto;

      const { id } = await this.authService.register(data);

      const accessToken = this.jwtTokenService.generateToken({ id }, 'access');

      const confirmUrl: string = `${process.env.SERVER_SOCKET}/api/auth/confirm/${accessToken}`;

      this.emailService.sendMail(data.email, 'Account confirmation', 'confirm', {
        url: confirmUrl
      });

      res.status(201).send('User successfully registered');
    } catch (e) {
      next(e);
    }
  }

  async logout(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const { user } = req as RequestWithUser;
      const tokens = await this.userTokensService.findAllTokens({ user: { id: user!.id } });

      await this.userTokensService.removeTokens(tokens);

      res.status(200).send('User successfully logged out');
    } catch (e) {
      next(e);
    }
  }

  async refresh(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const { entity } = req as RequestWithEntity<UserTokensEntity>;

      const payload: JWTPayload | null = this.jwtTokenService.verifyToken(
        entity.refreshToken,
        'refresh'
      );

      if (!payload) {
        await this.userTokensService.removeTokens([entity]);
        throw new ForbiddenException();
      }

      const accessToken: string = this.jwtTokenService.generateToken({ id: payload.id }, 'access');

      await this.userTokensService.updateTokens(entity.id, { accessToken });

      res.status(200).send(accessToken);
    } catch (e) {
      next(e);
    }
  }

  async resetPasswordRequest(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const { email }: ResetPasswordRequestDto = matchedData(req, {
        locations: ['body']
      }) as ResetPasswordRequestDto;

      const accessToken: string = this.jwtTokenService.generateToken({ email }, 'access');

      const resetLink: string = `${process.env.CLIENT_SOCKET}/reset-password/${accessToken}`;

      this.emailService.sendMail(email, 'Reset password', 'reset', { url: resetLink });

      res.status(200).send('Email sended');
    } catch (e) {
      next(e);
    }
  }

  async resetPassword(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const { password }: ResetPasswordDto = matchedData(req, {
        locations: ['body']
      }) as ResetPasswordDto;
      const { token } = req.params;

      const payload: ResetPasswordPayload | null =
        this.jwtTokenService.verifyToken<ResetPasswordPayload>(token, 'access');

      if (!payload) {
        throw new ForbiddenException('Invalid token');
      }

      await this.authService.resetPassword(password, payload!);

      res.status(200).send('Password updated');
    } catch (e) {
      next(e);
    }
  }

  async confirmAccount(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const { token } = matchedData(req, { locations: ['params'] }) as ConfirmAccountDto;

      const payload: JWTPayload | null = this.jwtTokenService.verifyToken(token, 'access');

      if (!payload) {
        throw new ForbiddenException('Invalid token');
      }

      await this.authService.confirmAccount(payload.id);

      res.redirect(`${process.env.CLIENT_SOCKET}/?confirm_token=${token}`);
    } catch (e) {
      next(e);
    }
  }

  private init() {
    this.register = this.register.bind(this);
    this.login = this.login.bind(this);
    this.logout = this.logout.bind(this);
    this.refresh = this.refresh.bind(this);
    this.resetPasswordRequest = this.resetPasswordRequest.bind(this);
    this.resetPassword = this.resetPassword.bind(this);
    this.confirmAccount = this.confirmAccount.bind(this);
  }
}
