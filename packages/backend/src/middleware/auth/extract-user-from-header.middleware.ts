import { NextFunction, Request, Response } from 'express';
import { Middleware } from '../../types/middleware.type';
import { RequestWithUser } from '../../types/request.type';
import { JwtTokenService } from '../../services/jwt-token.service';
import { UserTokensService } from '../../services/user-tokens.service';
import { JWTPayload } from '../../types/auth.type';
import { UserTokensEntity } from '../../entities/user-tokens.entity';
import { BadRequestException } from '../../shared/exception';

const jwtTokenService: JwtTokenService = new JwtTokenService();
const userTokensService: UserTokensService = new UserTokensService();

export const extractUserFromHeaderMiddleware: Middleware = async (
  req: Request,
  _: Response,
  next: NextFunction
) => {
  try {
    const token: string | undefined = req.headers.authorization;

    if (!token) {
      throw new BadRequestException();
    }

    const [type, accessToken] = token!.split(' ');

    const payload: JWTPayload | null = jwtTokenService.verifyToken(accessToken, 'access');

    if (accessToken === null || type !== 'Bearer' || !payload) {
      throw new BadRequestException();
    }

    const tokens: UserTokensEntity | null = await userTokensService.findTokens(
      { accessToken },
      { user: { credentials: true } }
    );

    if (!tokens) {
      throw new BadRequestException();
    }

    (req as RequestWithUser).user = tokens!.user;

    next();
  } catch (e) {
    (req as RequestWithUser).user = null;
    next();
  }
};
