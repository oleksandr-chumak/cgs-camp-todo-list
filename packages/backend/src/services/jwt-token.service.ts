import * as jwt from 'jsonwebtoken';
import { JWTTokens, TokenType, JWTPayload } from '../types/auth.type';
import { TOKEN_EXPIRES_IN, TOKEN_SECRET } from '../const/auth.const';

export class JwtTokenService {
  generateToken(payload: Object | string, type: TokenType): string {
    const secret: string = TOKEN_SECRET[type];
    const expiresIn: string = TOKEN_EXPIRES_IN[type];
    return jwt.sign(payload, secret, { expiresIn });
  }

  verifyToken<T = JWTPayload>(token: string, type: TokenType): T | null {
    const secret: string = TOKEN_SECRET[type];
    try {
      return jwt.verify(token, secret) as T | null;
    } catch (e) {
      return null;
    }
  }

  generateTokens(payload: Object | string): JWTTokens {
    return {
      accessToken: this.generateToken(payload, 'access'),
      refreshToken: this.generateToken(payload, 'refresh')
    };
  }
}
